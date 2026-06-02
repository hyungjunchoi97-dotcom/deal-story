"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface Props {
  lang?: "ko" | "en";
}

const COPY = {
  ko: {
    eyebrow: "무료 회원가입",
    title: "로그인 한 번으로 세 가지를 얻습니다",
    benefits: [
      {
        icon: "bookmark",
        title: "스크랩",
        desc: "관심 글을 저장하고 마이페이지에서 언제든 다시 확인하세요.",
      },
      {
        icon: "mail",
        title: "Weekly Report",
        desc: "매주 엄선된 딜 브리핑과 자본시장 심층 분석을 받아보세요.",
      },
      {
        icon: "star",
        title: "회원 전용 오리지널 리포트",
        desc: "IB 실무자 시각으로 쓴 고퀄리티 리포트는 회원만 열람 가능합니다.",
      },
    ],
    cta: "Google로 무료 시작하기",
    sub: "이메일·카드 없이 구글 계정으로 30초 가입",
    loggedInTitle: "회원 혜택을 이용 중입니다",
    loggedInDesc: "Weekly Report와 스크랩 기능을 자유롭게 사용하세요.",
    loggedInCta: "Weekly Report 보기",
    loggedInCta2: "스크랩한 글",
  },
  en: {
    eyebrow: "Free membership",
    title: "One sign-in. Three benefits.",
    benefits: [
      {
        icon: "bookmark",
        title: "Save Articles",
        desc: "Bookmark any article and access your reading list anytime.",
      },
      {
        icon: "mail",
        title: "Weekly Report",
        desc: "Curated deal briefings and in-depth capital markets analysis, every week.",
      },
      {
        icon: "star",
        title: "Members-Only Reports",
        desc: "High-quality original reports written from an IB practitioner's perspective.",
      },
    ],
    cta: "Start free with Google",
    sub: "No email or credit card — just your Google account",
    loggedInTitle: "You're a member",
    loggedInDesc: "Enjoy full access to Weekly Reports and your bookmark list.",
    loggedInCta: "Weekly Report",
    loggedInCta2: "Saved Articles",
  },
};

const ICONS = {
  bookmark: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export default function LandingSignupCTA({ lang = "ko" }: Props) {
  const ko = lang === "ko";
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

  async function handleLogin() {
    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|Threads|KAKAOTALK|Line\/|NaverApp|DaumApp/i.test(ua) ||
      (/iPhone|iPad|Android/i.test(ua) && !/Safari\/|Chrome\//i.test(ua));
    if (isInApp) {
      const currentUrl = window.location.href;
      const msg = ko
        ? `Google 로그인은 인앱 브라우저에서 지원되지 않습니다.\n\nSafari나 Chrome에서 열어주세요.\n\n${currentUrl}`
        : `Google sign-in is not supported in in-app browsers.\n\nPlease open in Safari or Chrome.\n\n${currentUrl}`;
      alert(msg);
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${ko ? "/reports" : "/en/reports"}`,
      },
    });
  }

  if (loggedIn === null) return null;

  // 로그인 상태 — 간단한 안내
  if (loggedIn) {
    return (
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 py-7 text-center">
        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{t.loggedInTitle}</p>
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-5">{t.loggedInDesc}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={ko ? "/reports" : "/en/reports"}
            className="px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            {t.loggedInCta}
          </Link>
          <Link
            href={ko ? "/my/bookmarks" : "/en/my/bookmarks"}
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-gray-500 transition-colors"
          >
            {t.loggedInCta2}
          </Link>
        </div>
      </div>
    );
  }

  // 비로그인 — 풀 CTA
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-300 dark:from-gray-100 dark:via-gray-400 dark:to-gray-700" />
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 text-center">
          {t.eyebrow}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          {t.title}
        </h2>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-9">
          {t.benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60">
              <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                {ICONS[b.icon as keyof typeof ICONS]}
              </div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{b.title}</p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleLogin}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            {t.cta}
          </button>
          <p className="mt-2.5 text-[11px] text-gray-400 dark:text-gray-500">{t.sub}</p>
        </div>
      </div>
    </div>
  );
}
