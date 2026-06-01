"use client";

import { useEffect, useRef, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function AuthButton() {
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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
        redirectTo: `${window.location.origin}/auth/callback?next=/reports`,
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
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill="currentColor"
        >
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
        로그인
      </button>
    );
  }

  const displayName =
    user.user_metadata?.full_name ?? user.email?.split("@")[0] ?? "User";
  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full focus:outline-none"
        aria-label="사용자 메뉴"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={displayName}
            className="w-7 h-7 rounded-full object-cover"
          />
        ) : (
          <span className="w-7 h-7 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">
            {displayName[0].toUpperCase()}
          </span>
        )}
        <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[80px] truncate">
          {displayName}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
