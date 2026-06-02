"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { createPublicBrowserClient } from "@/lib/supabase/client";

/**
 * ?login=1&next=/deal-101/xxx 파라미터 감지 시
 * 자동으로 Google OAuth 로그인 팝업을 트리거한다.
 */
export default function LoginPrompt({ lang = "ko" }: { lang?: "ko" | "en" }) {
  const params = useSearchParams();

  useEffect(() => {
    const shouldLogin = params.get("login") === "1";
    const next = params.get("next") ?? (lang === "en" ? "/en/learn" : "/learn");
    if (!shouldLogin) return;

    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|Threads|KAKAOTALK|Line\/|NaverApp|DaumApp/i.test(ua) ||
      (/iPhone|iPad|Android/i.test(ua) && !/Safari\/|Chrome\//i.test(ua));

    if (isInApp) {
      const msg = lang === "en"
        ? `Google sign-in is not supported in in-app browsers.\n\nPlease open in Safari or Chrome.\n\n${window.location.href}`
        : `Google 로그인은 인앱 브라우저에서 지원되지 않습니다.\n\nSafari나 Chrome에서 열어주세요.\n\n${window.location.href}`;
      alert(msg);
      return;
    }

    const supabase = createPublicBrowserClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
  }, [params, lang]);

  return null;
}
