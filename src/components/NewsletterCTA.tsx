"use client";

import { useEffect, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface Props {
  lang?: "ko" | "en";
}

const COPY = {
  ko: {
    eyebrow: "회원 전용 혜택",
    title: "로그인하면 더 많은 것을 볼 수 있습니다",
    benefits: [
      {
        icon: "bookmark",
        label: "스크랩",
        desc: "관심 있는 글을 저장하고 마이페이지에서 언제든 다시 확인",
      },
      {
        icon: "mail",
        label: "Weekly Report",
        desc: "매주 엄선된 딜 브리핑과 자본시장 분석 리포트 무료 수신",
      },
      {
        icon: "lock",
        label: "회원 전용 콘텐츠",
        desc: "IB 실무자들이 직접 쓴 고퀄리티 오리지널 리포트 열람",
      },
    ],
    cta: "Google로 무료 시작하기",
    sub: "이메일·카드 없이 구글 계정으로 30초 가입",
  },
  en: {
    eyebrow: "Member Benefits",
    title: "Sign in to unlock more",
    benefits: [
      {
        icon: "bookmark",
        label: "Save Articles",
        desc: "Bookmark any article and access your saved list anytime",
      },
      {
        icon: "mail",
        label: "Weekly Report",
        desc: "Curated deal briefings and capital markets analysis, delivered weekly",
      },
      {
        icon: "lock",
        label: "Members-Only Content",
        desc: "High-quality original reports written by IB practitioners",
      },
    ],
    cta: "Start free with Google",
    sub: "No email or credit card — just your Google account",
  },
};

const ICONS = {
  bookmark: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
