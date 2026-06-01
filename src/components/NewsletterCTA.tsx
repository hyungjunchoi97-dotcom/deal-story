"use client";

import { useEffect, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface Props {
  lang?: "ko" | "en";
}

const COPY = {
  ko: {
    title: "Weekly Report 무료 구독",
    desc1: "매주 딜 브리핑 + 시장 분석",
    desc2: "구독자만 볼 수 있는 오리지널 리포트",
    cta: "Google로 무료 구독하기",
  },
  en: {
    title: "Free Weekly Report",
    desc1: "Weekly deal briefings + market analysis",
    desc2: "Original reports for subscribers only",
    cta: "Subscribe free with Google",
  },
};

export default function NewsletterCTA({ lang = "ko" }: Props) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const supabase = createPublicBrowserClient();
  const t = COPY[lang];

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setLoggedIn(!!data.user);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
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
        redirectTo: `${window.location.origin}/auth/callback?next=/reports`,
      },
    });
  }

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 py-6">
      <div className="flex flex-col items-center text-center gap-3">
        <span className="text-2xl" aria-hidden>
          📩
        </span>
        <p className="text-base font-bold text-gray-900 dark:text-gray-100">
          {t.title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t.desc1}
          <br />
          {t.desc2}
        </p>
        <button
          onClick={handleLogin}
          className="mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          {t.cta}
        </button>
      </div>
    </div>
  );
}
