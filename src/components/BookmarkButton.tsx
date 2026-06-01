"use client";

import { useEffect, useState, useCallback } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface BookmarkButtonProps {
  slug: string;
  title: string;
  titleEn?: string;
  url: string;
  category?: string;
  lang: "ko" | "en";
}

export default function BookmarkButton({
  slug,
  title,
  titleEn,
  url,
  category,
  lang,
}: BookmarkButtonProps) {
  const ko = lang === "ko";
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const supabase = createPublicBrowserClient();
    supabase.auth.getUser().then(({ data }) => {
      const isLoggedIn = !!data.user;
      setLoggedIn(isLoggedIn);
      if (isLoggedIn) {
        fetch(`/api/bookmarks?slug=${encodeURIComponent(slug)}`)
          .then((r) => r.json())
          .then((d) => setBookmarked(!!d.bookmarked))
          .catch(() => {});
      }
    });
  }, [slug]);

  const handleClick = useCallback(async () => {
    if (loggedIn === false) {
      // redirect to login
      const supabase = createPublicBrowserClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(window.location.pathname)}`,
        },
      });
      return;
    }

    setLoading(true);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, title, titleEn, url, category }),
      });
      const d = await res.json();
      setBookmarked(!!d.bookmarked);
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }, [loggedIn, slug, title, titleEn, url, category]);

  if (loggedIn === null) return null; // SSR hydration guard

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      aria-label={ko ? "스크랩" : "Save"}
      style={{
        transform: animating ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.15s ease",
      }}
      className={[
        "inline-flex items-center gap-1.5 px-3 rounded-full text-xs font-medium border transition-colors",
        "h-9 select-none",
        bookmarked
          ? "bg-amber-400 border-amber-400 text-white cursor-pointer"
          : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-amber-400 hover:text-amber-500 dark:hover:border-amber-400 dark:hover:text-amber-400",
      ].join(" ")}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={bookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span>{ko ? "스크랩" : "Save"}</span>
    </button>
  );
}
