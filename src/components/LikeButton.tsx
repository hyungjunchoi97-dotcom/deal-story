"use client";

import { useEffect, useState, useCallback } from "react";

interface LikeButtonProps {
  slug: string;
  lang: "ko" | "en";
}

export default function LikeButton({ slug, lang }: LikeButtonProps) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLiked = localStorage.getItem(`liked_${slug}`) === "true";
    setLiked(storedLiked);

    fetch(`/api/page-likes?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.count === "number") setCount(d.count);
      })
      .catch(() => {});
  }, [slug]);

  const handleLike = useCallback(async () => {
    if (liked) return;

    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);

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
    } catch {
      // silent fail — optimistic update already applied
    }
  }, [liked, slug]);

  if (!mounted) return null;

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      aria-label={lang === "ko" ? "도움이 됐어요" : "Helpful"}
      style={{
        transform: animating ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.15s ease",
      }}
      className={[
        "inline-flex items-center gap-1.5 px-3 rounded-full text-xs font-medium border transition-colors",
        "h-9 select-none",
        liked
          ? "bg-red-500 border-red-500 text-white cursor-default"
          : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-red-400 hover:text-red-500 dark:hover:border-red-500 dark:hover:text-red-400",
      ].join(" ")}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span>{lang === "ko" ? "도움이 됐어요" : "Helpful"}</span>
      {count > 0 && (
        <span className={liked ? "text-white/80" : "text-gray-400 dark:text-gray-500"}>
          {count}
        </span>
      )}
    </button>
  );
}
