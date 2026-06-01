"use client";

import { useEffect, useState, useCallback } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface LikeButtonProps {
  slug: string;
  lang: "ko" | "en";
  title?: string;
  titleEn?: string;
  category?: string;
}

export default function LikeButton({ slug, lang, title, titleEn, category }: LikeButtonProps) {
  const ko = lang === "ko";

  // ── Like ────────────────────────────────────────────────────────────────────
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeAnimating, setLikeAnimating] = useState(false);

  // ── Bookmark ────────────────────────────────────────────────────────────────
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkLoading, setBookmarkLoading] = useState(false);
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Like
    const storedLiked = localStorage.getItem(`liked_${slug}`) === "true";
    setLiked(storedLiked);
    fetch(`/api/page-likes?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((d) => { if (typeof d.count === "number") setCount(d.count); })
      .catch(() => {});

    // Bookmark
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

  const handleLike = useCallback(async () => {
    if (liked) return;
    setLikeAnimating(true);
    setTimeout(() => setLikeAnimating(false), 300);
    setLiked(true);
    setCount((c) => c + 1);
    localStorage.setItem(`liked_${slug}`, "true");
    try {
      const res = await fetch("/api/page-likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const d = await res.json();
      if (typeof d.count === "number") setCount(d.count);
    } catch { /* silent */ }
  }, [liked, slug]);

  const handleBookmark = useCallback(async () => {
    if (loggedIn === false) {
      const supabase = createPublicBrowserClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(window.location.pathname)}`,
        },
      });
      return;
    }
    setBookmarkLoading(true);
    setBookmarkAnimating(true);
    setTimeout(() => setBookmarkAnimating(false), 300);

    const resolvedTitle = title ?? document.title.split("|")[0].trim();
    const resolvedUrl = window.location.pathname;

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, title: resolvedTitle, titleEn, url: resolvedUrl, category }),
      });
      const d = await res.json();
      setBookmarked(!!d.bookmarked);
    } catch { /* silent */ }
    finally { setBookmarkLoading(false); }
  }, [loggedIn, slug, title, titleEn, category]);

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center gap-2">
      {/* 좋아요 */}
      <button
        onClick={handleLike}
        disabled={liked}
        aria-label={ko ? "도움이 됐어요" : "Helpful"}
        style={{ transform: likeAnimating ? "scale(1.2)" : "scale(1)", transition: "transform 0.15s ease" }}
        className={[
          "inline-flex items-center gap-1.5 px-3 rounded-full text-xs font-medium border transition-colors h-9 select-none",
          liked
            ? "bg-red-500 border-red-500 text-white cursor-default"
            : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-red-400 hover:text-red-500 dark:hover:border-red-500 dark:hover:text-red-400",
        ].join(" ")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24"
          fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span>{ko ? "도움이 됐어요" : "Helpful"}</span>
        {count > 0 && (
          <span className={liked ? "text-white/80" : "text-gray-400 dark:text-gray-500"}>{count}</span>
        )}
      </button>

      {/* 스크랩 */}
      {loggedIn !== null && (
        <button
          onClick={handleBookmark}
          disabled={bookmarkLoading}
          aria-label={ko ? "스크랩" : "Save"}
          style={{ transform: bookmarkAnimating ? "scale(1.2)" : "scale(1)", transition: "transform 0.15s ease" }}
          className={[
            "inline-flex items-center gap-1.5 px-3 rounded-full text-xs font-medium border transition-colors h-9 select-none",
            bookmarked
              ? "bg-amber-400 border-amber-400 text-white cursor-pointer"
              : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-amber-400 hover:text-amber-500 dark:hover:border-amber-400 dark:hover:text-amber-400",
          ].join(" ")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24"
            fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span>{ko ? "스크랩" : "Save"}</span>
        </button>
      )}
    </div>
  );
}
