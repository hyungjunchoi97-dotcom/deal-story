"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function GateContent() {
  const params = useSearchParams();
  const next = params.get("next") ?? "/en/learn";

  async function handleLogin() {
    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|Threads|KAKAOTALK|Line\/|NaverApp|DaumApp/i.test(ua) ||
      (/iPhone|iPad|Android/i.test(ua) && !/Safari\/|Chrome\//i.test(ua));

    if (isInApp) {
      alert(`Google sign-in is not supported in in-app browsers.\n\nPlease open in Safari or Chrome.\n\n${window.location.href}`);
      return;
    }

    const supabase = createPublicBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
  }

  return (
    <main className="flex-1 flex items-center justify-center px-5 py-20">
      <div className="max-w-md w-full text-center">

        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
          Members-only content
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
          Deal Story Learn content is available to signed-in members only.
        </p>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Free to join — just your Google account, 30 seconds.
        </p>

        <div className="text-left bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 p-5 mb-8 space-y-3">
          {[
            { icon: "📖", text: "Unlimited access to all Learn content — M&A, Valuation, FDD, Modeling, and more" },
            { icon: "📬", text: "Weekly Report every Friday — Global M&A pulse + new articles roundup" },
            { icon: "🔖", text: "Bookmark articles and manage your reading list from your profile" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-base mt-0.5">{item.icon}</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
        >
          Start free with Google
        </button>
        <p className="mt-2.5 text-[11px] text-gray-400 dark:text-gray-500">
          No email or credit card — just your Google account
        </p>

        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
          Already a member?{" "}
          <button onClick={handleLogin} className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Sign in
          </button>
        </p>

      </div>
    </main>
  );
}

export default function GatePageEn() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <GateContent />
      </Suspense>
      <Footer />
    </>
  );
}
