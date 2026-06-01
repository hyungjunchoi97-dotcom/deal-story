"use client";

import { useEffect, useRef, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";

export default function AuthButton() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "ko";
  const ko = lang === "ko";

  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createPublicBrowserClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${ko ? "/reports" : "/en/reports"}`,
      },
    });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setOpen(false);
  }

  if (!user) {
    return (
      <button
        onClick={handleLogin}
        className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {ko ? "로그인" : "Sign in"}
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={ko ? "사용자 메뉴" : "User menu"}
      >
        {ko ? "내 계정" : "Account"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
          </div>
          <a
            href={ko ? "/my/bookmarks" : "/en/my/bookmarks"}
            className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setOpen(false)}
          >
            {ko ? "스크랩한 글" : "Saved Articles"}
          </a>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {ko ? "로그아웃" : "Sign out"}
          </button>
        </div>
      )}
    </div>
  );
}
