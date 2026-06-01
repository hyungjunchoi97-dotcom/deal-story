"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPublicBrowserClient } from "@/lib/supabase/client";

const REGIONS = [
  "서울",
  "경기·인천",
  "부산·경남",
  "대구·경북",
  "광주·전라",
  "대전·충청",
  "해외",
];

const INTERESTS = [
  "M&A",
  "IB(DCM)",
  "IB(ECM)",
  "Private Equity",
  "Venture Capital",
  "Restructuring",
  "기타",
];

const CAREER_STATUSES = [
  "대학생 (IB 준비 중)",
  "취업 준비 중 (인턴·신입)",
  "현직자 (이직 고려)",
  "현직자 (MBA 고려)",
  "기타",
];

const MBA_OPTIONS = [
  "1년 내 지원 예정",
  "2~3년 내 고려 중",
  "아직 미정",
  "고려하지 않음",
];

export default function OnboardingClient() {
  const router = useRouter();
  const supabase = createPublicBrowserClient();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [region, setRegion] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [careerStatus, setCareerStatus] = useState("");
  const [mbaConsideration, setMbaConsideration] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function check() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("onboarded")
        .eq("id", user.id)
        .single();
      if (profile?.onboarded) {
        router.replace("/reports");
        return;
      }
      setLoading(false);
    }
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!region) {
      setError("거주 지역을 선택해주세요.");
      return;
    }
    if (interests.length === 0) {
      setError("관심 분야를 하나 이상 선택해주세요.");
      return;
    }
    if (!careerStatus) {
      setError("커리어 상황을 선택해주세요.");
      return;
    }
    setError("");
    setSubmitting(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.replace("/");
      return;
    }

    const { error: upsertError } = await supabase.from("profiles").upsert({
      id: user.id,
      region,
      interests,
      career_status: careerStatus,
      mba_consideration: mbaConsideration || null,
      onboarded: true,
      updated_at: new Date().toISOString(),
    });

    if (upsertError) {
      setError("저장 중 오류가 발생했습니다. 다시 시도해주세요.");
      setSubmitting(false);
      return;
    }

    router.replace("/reports");
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
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              마지막으로 몇 가지만 알려주세요
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              더 관련성 높은 콘텐츠를 전달하기 위해 필요해요
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 거주 지역 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                거주 지역 <span className="text-red-500">*</span>
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">선택해주세요</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* 관심 분야 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                관심 분야 <span className="text-red-500">*</span>
                <span className="ml-1 text-xs font-normal text-gray-400">(복수 선택 가능)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleInterest(item)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
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

            {/* 커리어 상황 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                커리어 상황 <span className="text-red-500">*</span>
              </label>
              <select
                value={careerStatus}
                onChange={(e) => setCareerStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">선택해주세요</option>
                {CAREER_STATUSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* MBA 고려 여부 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                MBA 고려 여부
                <span className="ml-1 text-xs font-normal text-gray-400">(선택)</span>
              </label>
              <select
                value={mbaConsideration}
                onChange={(e) => setMbaConsideration(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors"
              >
                <option value="">선택 안 함</option>
                {MBA_OPTIONS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-60"
            >
              {submitting ? "저장 중…" : "시작하기"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
