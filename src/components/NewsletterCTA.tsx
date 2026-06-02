"use client";

import { useEffect, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface Props {
  lang?: "ko" | "en";
}

const COPY = {
  ko: {
    eyebrow: "매주 금요일 발송",
    title: "딜스토리 Weekly Report를 받아보세요",
    benefits: [
      {
        icon: "report",
        label: "Weekly Report 전문",
        desc: "IB 실무자 시각으로 쓴 이번 주 자본시장 심층 분석",
      },
      {
        icon: "globe",
        label: "글로벌 M&A 동향",
        desc: "북미 · 아시아 · 유럽 지역별 딜 흐름 요약",
      },
      {
        icon: "list",
        label: "이번 주 새 글 모아보기",
        desc: "딜스토리에 새로 올라온 글을 한눈에 확인",
      },
    ],
    cta: "Google로 무료 구독하기",
    sub: "이메일·카드 없이 구글 계정으로 30초 가입",
  },
  en: {
    eyebrow: "Every Friday",
    title: "Get the Deal Story Weekly Report",
    benefits: [
      {
        icon: "report",
        label: "Weekly Report",
        desc: "In-depth capital markets analysis from an IB practitioner's perspective",
      },
      {
        icon: "globe",
        label: "Global M&A Pulse",
        desc: "Deal flow summary across North America, Asia, and Europe",
      },
      {
        icon: "list",
        label: "New This Week",
        desc: "All new articles published on Deal Story, curated in one place",
      },
    ],
    cta: "Subscribe free with Google",
    sub: "No email or credit card — just your Google account",
  },
};

const ICONS = {
  report: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  list: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
};

export default function NewsletterCTA({ lang = "ko" }: Props) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const supabase = createPublicBrowserClient();
  const t = COPY[lang];

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setLoggedIn(!!data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setLoggedIn(!!session?.user);
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loggedIn === null || loggedIn) return null;

  async function handleLogin() {
    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|Threads|KAKAOTALK|Line\/|NaverApp|DaumApp/i.test(ua) ||
      (/iPhone|iPad|Android/i.test(ua) && !/Safari\/|Chrome\//i.test(ua));
    if (isInApp) {
      const currentUrl = window.location.href;
      const msg = lang === "ko"
        ? `Google 로그인은 인앱 브라우저에서 지원되지 않습니다.\n\nSafari나 Chrome에서 열어주세요.\n\n${currentUrl}`
        : `Google sign-in is not supported in in-app browsers.\n\nPlease open in Safari or Chrome.\n\n${currentUrl}`;
      alert(msg);
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${lang === "ko" ? "/reports" : "/en/reports"}`,
      },
    });
  }

  return (
    <div className="my-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600" />

      <div className="px-6 py-7 sm:px-8 sm:py-8">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
          {t.eyebrow}
        </p>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {t.title}
        </h3>

        {/* Benefits */}
        <div className="space-y-4 mb-7">
          {t.benefits.map((b) => (
            <div key={b.label} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                {ICONS[b.icon as keyof typeof ICONS]}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{b.label}</p>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
        >
          {t.cta}
        </button>
        <p className="mt-2.5 text-center text-[11px] text-gray-400 dark:text-gray-500">
          {t.sub}
        </p>
      </div>
    </div>
  );
}
