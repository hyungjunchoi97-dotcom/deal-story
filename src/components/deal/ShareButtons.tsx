"use client";

import { useState, useCallback } from "react";
import { SHARE_LABELS, type Lang } from "@/lib/i18n";
import AuthorByline from "@/components/AuthorByline";

interface ShareButtonsProps {
  title: string;
  variant?: "top" | "mid" | "bottom";
  lang?: Lang;
  /** When provided, "bottom" variant prepends an AuthorByline above the share card */
  updatedAt?: string | Date;
  /** Reading minutes for the AuthorByline */
  readingMinutes?: number;
}

export default function ShareButtons({
  title,
  variant = "mid",
  lang = "ko",
  updatedAt,
  readingMinutes,
}: ShareButtonsProps) {
  const t = SHARE_LABELS[lang];
  const [copied, setCopied] = useState(false);

  const getUrl = () => typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("input");
      el.value = getUrl();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleTwitter = useCallback(() => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, [title]);

  const handleLinkedIn = useCallback(() => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: getUrl() });
      } catch {
        // user cancelled
      }
    }
  }, [title]);

  const hasNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  // ── TOP: 우측 상단 — 아이콘만, 컴팩트 ─────────────────────
  if (variant === "top") {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] text-gray-400 dark:text-gray-500 mr-1 hidden sm:block">{t.share}</span>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          title={t.copyLink}
          className="relative w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {copied ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          )}
        </button>

        {/* X (Twitter) */}
        <button
          onClick={handleTwitter}
          title={t.shareX}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </button>

        {/* LinkedIn */}
        <button
          onClick={handleLinkedIn}
          title={t.shareLinkedIn}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </button>

        {/* Native share (mobile) */}
        {hasNativeShare && (
          <button
            onClick={handleNativeShare}
            title={t.more}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        )}
      </div>
    );
  }

  // ── MID: 중간 — 모바일 세로 스택, sm 이상 가로 정렬 ───────
  if (variant === "mid") {
    return (
      <div className="my-10 py-5 border-y border-gray-100 dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-[11px] sm:text-[12px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex-shrink-0">
          {t.shareThisDeal}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all whitespace-nowrap"
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-emerald-500">{t.copied}</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                {t.copyLink}
              </>
            )}
          </button>

          <button
            onClick={handleTwitter}
            className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all whitespace-nowrap"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            X
          </button>

          <button
            onClick={handleLinkedIn}
            className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all whitespace-nowrap"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </button>

          {hasNativeShare && (
            <button
              onClick={handleNativeShare}
              className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all whitespace-nowrap"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              {t.more}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── BOTTOM: 하단 — 카드형, 풀사이즈 ───────────────────────
  return (
    <div className="mt-10">
      {/* AuthorByline 자동 노출 — E-E-A-T 신호 */}
      <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
        <AuthorByline lang={lang} updatedAt={updatedAt} readingMinutes={readingMinutes} align="center" />
      </div>
      <div className="rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 p-6 text-center">
      <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{t.helpfulHeading}</p>
      <p className="text-[12px] text-gray-400 dark:text-gray-500 mb-5">{t.helpfulSub}</p>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="text-emerald-500">{t.copiedExcited}</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              {t.copyLink}
            </>
          )}
        </button>

        <button
          onClick={handleTwitter}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-black text-white border border-black hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          {t.shareX}
        </button>

        <button
          onClick={handleLinkedIn}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-[#0A66C2] text-white border border-[#0A66C2] hover:bg-[#004182] transition-all shadow-sm hover:shadow-md"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </button>

        {hasNativeShare && (
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            {t.more}
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
