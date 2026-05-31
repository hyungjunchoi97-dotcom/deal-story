"use client";

import { useEffect, useState, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Comment {
  id: string;
  slug: string;
  parent_id: string | null;
  nickname: string;
  body: string;
  likes: number;
  created_at: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  slug: string;
  lang: "ko" | "en";
}

// ── Relative time ──────────────────────────────────────────────────────────────
function relativeTime(dateStr: string, lang: "ko" | "en"): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (lang === "ko") {
    if (diffSec < 60) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    if (diffHr < 24) return `${diffHr}시간 전`;
    return `${diffDay}일 전`;
  } else {
    if (diffSec < 60) return "just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    return `${diffDay}d ago`;
  }
}

// ── Admin key reader (uses useSearchParams) ────────────────────────────────────
function AdminKeyReader({ onKey }: { onKey: (key: string | null) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const adminParam = searchParams.get("admin");
    if (adminParam) {
      localStorage.setItem("ds_admin_key", adminParam);
      onKey(adminParam);
    } else {
      onKey(localStorage.getItem("ds_admin_key"));
    }
  }, [searchParams, onKey]);
  return null;
}

// ── Comment Card ───────────────────────────────────────────────────────────────
function CommentCard({
  comment,
  lang,
  fingerprint,
  adminKey,
  onReply,
  onDelete,
  onLike,
  isReply = false,
}: {
  comment: Comment;
  lang: "ko" | "en";
  fingerprint: string;
  adminKey: string | null;
  onReply: (id: string, nickname: string) => void;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  isReply?: boolean;
}) {
  const likedKey = `comment_liked_${comment.id}`;
  const [localLiked, setLocalLiked] = useState(false);
  const [localCount, setLocalCount] = useState(comment.likes);

  useEffect(() => {
    setLocalLiked(localStorage.getItem(likedKey) === "true");
  }, [likedKey]);

  const handleLike = async () => {
    const nextLiked = !localLiked;
    setLocalLiked(nextLiked);
    setLocalCount((c) => (nextLiked ? c + 1 : Math.max(0, c - 1)));
    if (nextLiked) {
      localStorage.setItem(likedKey, "true");
    } else {
      localStorage.removeItem(likedKey);
    }
    try {
      const res = await fetch(`/api/comments/${comment.id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint }),
      });
      const d = await res.json();
      if (typeof d.count === "number") setLocalCount(d.count);
    } catch {
      // silent fail
    }
    onLike(comment.id);
  };

  return (
    <div
      className={[
        "py-4",
        isReply
          ? "pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-4"
          : "border-b border-gray-100 dark:border-gray-800",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-semibold text-gray-800 dark:text-gray-100">
          {comment.nickname}
        </span>
        <span className="text-[11px] text-gray-400 dark:text-gray-500">
          {relativeTime(comment.created_at, lang)}
        </span>
      </div>

      {/* Body */}
      <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
        {comment.body}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-2.5">
        {/* Like */}
        <button
          onClick={handleLike}
          className={[
            "inline-flex items-center gap-1 text-[12px] transition-colors",
            localLiked
              ? "text-red-500 dark:text-red-400"
              : "text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400",
          ].join(" ")}
          aria-label={lang === "ko" ? "좋아요" : "Like"}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill={localLiked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {localCount > 0 && <span>{localCount}</span>}
        </button>

        {/* Reply (only on root comments) */}
        {!isReply && (
          <button
            onClick={() => onReply(comment.id, comment.nickname)}
            className="text-[12px] text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {lang === "ko" ? "답글" : "Reply"}
          </button>
        )}

        {/* Admin delete */}
        {adminKey && (
          <button
            onClick={() => onDelete(comment.id)}
            className="text-[12px] text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors ml-auto"
            aria-label={lang === "ko" ? "삭제" : "Delete"}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

// ── Main inner component (needs fingerprint + adminKey) ────────────────────────
function CommentSectionInner({
  slug,
  lang,
  fingerprint,
  adminKey,
}: {
  slug: string;
  lang: "ko" | "en";
  fingerprint: string;
  adminKey: string | null;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyTo, setReplyTo] = useState<{ id: string; nickname: string } | null>(null);

  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLTextAreaElement>(null);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      const d = await res.json();
      setComments(d.comments ?? []);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleReply = (id: string, nick: string) => {
    setReplyTo({ id, nickname: nick });
    setTimeout(() => formRef.current?.focus(), 50);
  };

  const handleDelete = async (id: string) => {
    if (!adminKey) return;
    const confirmed = window.confirm(lang === "ko" ? "댓글을 삭제하시겠어요?" : "Delete this comment?");
    if (!confirmed) return;
    try {
      await fetch(`/api/comments/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      });
      await fetchComments();
    } catch {
      // silent
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nickname.trim() || nickname.trim().length > 20) {
      setError(lang === "ko" ? "닉네임은 1~20자여야 합니다." : "Nickname must be 1–20 characters.");
      return;
    }
    if (!body.trim() || body.trim().length < 2 || body.trim().length > 500) {
      setError(lang === "ko" ? "본문은 2~500자여야 합니다." : "Body must be 2–500 characters.");
      return;
    }

    setSubmitting(true);
    try {
      const payload: Record<string, unknown> = { slug, nickname: nickname.trim(), body: body.trim() };
      if (replyTo) payload.parent_id = replyTo.id;

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const d = await res.json();
      if (!res.ok) {
        setError(d.error ?? (lang === "ko" ? "오류가 발생했습니다." : "An error occurred."));
        return;
      }
      setBody("");
      setReplyTo(null);
      await fetchComments();
    } catch {
      setError(lang === "ko" ? "오류가 발생했습니다." : "An error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  const totalCount = comments.reduce((s, c) => s + 1 + (c.replies?.length ?? 0), 0);

  return (
    <div className="mt-10 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
      {/* Header */}
      <h2 className="text-[15px] font-bold text-gray-800 dark:text-gray-100 mb-6">
        {lang === "ko" ? `댓글 ${totalCount > 0 ? totalCount : ""}` : `Comments${totalCount > 0 ? ` (${totalCount})` : ""}`}
      </h2>

      {/* Comment list */}
      {loading ? (
        <div className="space-y-4 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="h-16 rounded-lg bg-gray-100 dark:bg-gray-800/50 animate-pulse" />
          ))}
        </div>
      ) : comments.length === 0 ? (
        <p className="text-[13px] text-gray-400 dark:text-gray-500 mb-8 text-center py-6">
          {lang === "ko" ? "첫 번째 댓글을 남겨보세요" : "Be the first to leave a comment"}
        </p>
      ) : (
        <div className="mb-8">
          {comments.map((comment) => (
            <div key={comment.id}>
              <CommentCard
                comment={comment}
                lang={lang}
                fingerprint={fingerprint}
                adminKey={adminKey}
                onReply={handleReply}
                onDelete={handleDelete}
                onLike={() => {}}
              />
              {comment.replies && comment.replies.length > 0 && (
                <div className="mb-2">
                  {comment.replies.map((reply) => (
                    <CommentCard
                      key={reply.id}
                      comment={reply}
                      lang={lang}
                      fingerprint={fingerprint}
                      adminKey={adminKey}
                      onReply={handleReply}
                      onDelete={handleDelete}
                      onLike={() => {}}
                      isReply
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {replyTo && (
          <div className="flex items-center gap-2 text-[12px] text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 rounded-lg px-3 py-2">
            <span>
              {lang === "ko" ? `${replyTo.nickname}님에게 답글` : `Replying to ${replyTo.nickname}`}
            </span>
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        )}

        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder={lang === "ko" ? "닉네임 (최대 20자)" : "Nickname (max 20 chars)"}
          maxLength={20}
          className="w-full px-3 py-2 text-[13px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400/50 dark:focus:ring-teal-500/40 transition"
        />

        <div className="relative">
          <textarea
            ref={formRef}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={lang === "ko" ? "댓글을 입력해주세요" : "Write a comment..."}
            maxLength={500}
            rows={3}
            className="w-full px-3 py-2 text-[13px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400/50 dark:focus:ring-teal-500/40 transition resize-none"
          />
          <span className="absolute bottom-2 right-3 text-[11px] text-gray-300 dark:text-gray-600 pointer-events-none">
            {body.length}/500
          </span>
        </div>

        {error && (
          <p className="text-[12px] text-red-500 dark:text-red-400">{error}</p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 text-[13px] font-medium rounded-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white transition-colors"
          >
            {submitting
              ? (lang === "ko" ? "등록 중..." : "Posting...")
              : (lang === "ko" ? "댓글 등록" : "Post comment")}
          </button>
        </div>
      </form>
    </div>
  );
}

// ── Public export (handles Suspense for useSearchParams) ───────────────────────
function CommentSectionWithParams({ slug, lang }: CommentSectionProps) {
  const [fingerprint, setFingerprint] = useState("");
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const handleAdminKey = useCallback((key: string | null) => {
    setAdminKey(key);
  }, []);

  useEffect(() => {
    let fp = localStorage.getItem("comment_fingerprint");
    if (!fp) {
      fp = crypto.randomUUID();
      localStorage.setItem("comment_fingerprint", fp);
    }
    setFingerprint(fp);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AdminKeyReader onKey={handleAdminKey} />
      <CommentSectionInner
        slug={slug}
        lang={lang}
        fingerprint={fingerprint}
        adminKey={adminKey}
      />
    </>
  );
}

export default function CommentSection({ slug, lang }: CommentSectionProps) {
  return (
    <Suspense fallback={null}>
      <CommentSectionWithParams slug={slug} lang={lang} />
    </Suspense>
  );
}
