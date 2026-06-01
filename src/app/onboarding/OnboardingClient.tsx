"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import { Suspense } from "react";

// ── 국가 목록 ─────────────────────────────────────────────────────────────────
const COUNTRIES_KO = [
  "대한민국", "미국", "영국", "일본", "중국", "홍콩", "싱가포르",
  "호주", "캐나다", "독일", "프랑스", "스위스", "UAE", "인도",
  "브라질", "기타",
];

const COUNTRIES_EN = [
  "South Korea", "United States", "United Kingdom", "Japan", "China",
  "Hong Kong", "Singapore", "Australia", "Canada", "Germany", "France",
  "Switzerland", "UAE", "India", "Brazil", "Other",
];

// ── 관심 분야 ──────────────────────────────────────────────────────────────────
const INTERESTS_KO = [
  "M&A", "DCM", "ECM", "Private Equity", "Venture Capital",
  "Private Credit", "부동산 PF", "대체투자", "자산운용 (AM)",
  "헤지펀드", "PB · WM", "구조화금융", "Restructuring",
  "리서치 · 애널리스트", "컨설팅", "회계 · 회계법인", "기타",
];

const INTERESTS_EN = [
  "M&A", "DCM", "ECM", "Private Equity", "Venture Capital",
  "Private Credit", "Real Estate PF", "Alternative Investments", "Asset Management",
  "Hedge Fund", "PB · Wealth Management", "Structured Finance", "Restructuring",
  "Research · Analyst", "Consulting", "Accounting", "Other",
];

// ── 현재 포지션 ────────────────────────────────────────────────────────────────
const POSITIONS_KO = [
  "대학생", "취업준비생", "금융권 재직중", "비금융권 재직중", "기타",
];

const POSITIONS_EN = [
  "Student", "Job Seeker", "Finance Professional", "Non-Finance Professional", "Other",
];

// ── MBA ────────────────────────────────────────────────────────────────────────
const MBA_KO = ["1년 내 지원 예정", "2~3년 내 고려 중", "아직 미정", "고려하지 않음"];
const MBA_EN = ["Planning within 1 year", "Considering in 2–3 years", "Not sure yet", "Not considering"];

// ── Inner (uses useSearchParams) ───────────────────────────────────────────────
function OnboardingInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createPublicBrowserClient();

  // lang 감지: URL에 /en/ 이 있거나 ?lang=en
  const [lang, setLang] = useState<"ko" | "en">("ko");
  useEffect(() => {
    const l = searchParams.get("lang");
    if (l === "en") { setLang("en"); return; }
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [searchParams]);

  const ko = lang === "ko";

  const COUNTRIES  = ko ? COUNTRIES_KO  : COUNTRIES_EN;
  const INTERESTS  = ko ? INTERESTS_KO  : INTERESTS_EN;
  const POSITIONS  = ko ? POSITIONS_KO  : POSITIONS_EN;
  const MBA_OPTIONS = ko ? MBA_KO : MBA_EN;

  const [loading, setLoading]           = useState(true);
  const [submitting, setSubmitting]     = useState(false);
  const [country, setCountry]           = useState("");
  const [interests, setInterests]       = useState<string[]>([]);
  const [position, setPosition]         = useState("");
  const [mba, setMba]                   = useState("");
  const [agreed, setAgreed]             = useState(false);
  const [error, setError]               = useState("");

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.replace(ko ? "/" : "/en"); return; }
      const { data: profile } = await supabase
        .from("profiles").select("onboarded").eq("id", user.id).single();
      if (profile?.onboarded) { router.replace(ko ? "/reports" : "/en/reports"); return; }
      setLoading(false);
    }
    check();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleInterest(item: string) {
    setInterests(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!country) {
      setError(ko ? "국가를 선택해주세요." : "Please select your country.");
      return;
    }
    if (interests.length === 0) {
      setError(ko ? "관심 분야를 하나 이상 선택해주세요." : "Please select at least one area of interest.");
      return;
    }
    if (!position) {
      setError(ko ? "현재 포지션을 선택해주세요." : "Please select your current position.");
      return;
    }
    if (!agreed) {
      setError(ko ? "뉴스레터 수신에 동의해주세요." : "Please agree to receive the newsletter.");
      return;
    }

    setSubmitting(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.replace(ko ? "/" : "/en"); return; }

    const { error: upsertError } = await supabase.from("profiles").upsert({
      id: user.id,
      region: country,
      interests,
      career_status: position,
      mba_consideration: mba || null,
      onboarded: true,
      newsletter_agreed: true,
      updated_at: new Date().toISOString(),
    });

    if (upsertError) {
      setError(ko ? "저장 중 오류가 발생했습니다. 다시 시도해주세요." : "An error occurred. Please try again.");
      setSubmitting(false);
      return;
    }

    router.replace(ko ? "/reports" : "/en/reports");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* 뒤로가기 */}
        <button
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          {ko ? "돌아가기" : "Go back"}
        </button>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
              {ko ? "맞춤 콘텐츠를 위해 잠깐만요" : "Just a moment, for better content"}
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {ko
                ? "Weekly Report 구독과 함께 더 관련성 높은 콘텐츠를 받아보세요."
                : "Subscribe to the Weekly Report and get more relevant content."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* 국가 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {ko ? "국가" : "Country"} <span className="text-red-500">*</span>
              </label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">{ko ? "선택해주세요" : "Select"}</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* 관심 분야 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {ko ? "관심 분야" : "Areas of Interest"} <span className="text-red-500">*</span>
                <span className="ml-1 text-xs font-normal text-gray-400">
                  {ko ? "(복수 선택 가능)" : "(multiple)"}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map(item => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleInterest(item)}
                    className={`px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-colors ${
                      interests.includes(item)
                        ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 현재 포지션 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {ko ? "현재 포지션" : "Current Position"} <span className="text-red-500">*</span>
              </label>
              <select
                value={position}
                onChange={e => setPosition(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">{ko ? "선택해주세요" : "Select"}</option>
                {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* MBA */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {ko ? "MBA 고려 여부" : "MBA Consideration"}
                <span className="ml-1 text-xs font-normal text-gray-400">
                  {ko ? "(선택)" : "(optional)"}
                </span>
              </label>
              <select
                value={mba}
                onChange={e => setMba(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">{ko ? "선택 안 함" : "Skip"}</option>
                {MBA_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            {/* 뉴스레터 동의 */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer flex-shrink-0"
              />
              <label htmlFor="agree" className="text-[13px] text-gray-600 dark:text-gray-400 cursor-pointer leading-relaxed">
                {ko
                  ? "Weekly Report 및 Deal Story 뉴스레터 수신에 동의합니다. 언제든지 수신 거부할 수 있습니다."
                  : "I agree to receive the Weekly Report and Deal Story newsletter. You can unsubscribe at any time."}
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-60"
            >
              {submitting
                ? (ko ? "저장 중…" : "Saving…")
                : (ko ? "시작하기" : "Get Started")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function OnboardingClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
      </div>
    }>
      <OnboardingInner />
    </Suspense>
  );
}
