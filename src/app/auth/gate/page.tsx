"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function GateContent() {
  const params = useSearchParams();
  const next = params.get("next") ?? "/learn";

  async function handleLogin() {
    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|Threads|KAKAOTALK|Line\/|NaverApp|DaumApp/i.test(ua) ||
      (/iPhone|iPad|Android/i.test(ua) && !/Safari\/|Chrome\//i.test(ua));

    if (isInApp) {
      alert(`Google 로그인은 인앱 브라우저에서 지원되지 않습니다.\n\nSafari나 Chrome에서 열어주세요.\n\n${window.location.href}`);
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

        {/* 자물쇠 아이콘 */}
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
          회원 전용 콘텐츠입니다
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
          Deal Story Learn 콘텐츠는 로그인한 회원만 열람할 수 있습니다.
        </p>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Google 계정으로 30초면 무료 가입 완료.
        </p>

        {/* 혜택 리스트 */}
        <div className="text-left bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 p-5 mb-8 space-y-3">
          {[
            { icon: "📖", text: "M&A · Valuation · FDD · 모델링 등 전체 Learn 콘텐츠 무제한 열람" },
            { icon: "📬", text: "매주 금요일 Weekly Report — 글로벌 M&A 동향 + 신규 글 모아보기" },
            { icon: "🔖", text: "스크랩 기능으로 관심 글 저장 및 마이페이지 관리" },
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
          Google로 무료 시작하기
        </button>
        <p className="mt-2.5 text-[11px] text-gray-400 dark:text-gray-500">
          이메일·카드 없이 구글 계정으로 30초 가입
        </p>

        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
          이미 회원이신가요?{" "}
          <button onClick={handleLogin} className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            로그인
          </button>
        </p>

      </div>
    </main>
  );
}

export default function GatePage() {
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
