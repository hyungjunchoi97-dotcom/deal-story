"use client";

import { useEffect, useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

interface Report {
  id: string;
  slug: string;
  title: string;
  preview: string;
  content: string;
  published_at: string | null;
}

interface Props {
  report: Report;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

// Simple markdown → HTML (headings, bold, paragraphs, hr)
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^---$/gm, "<hr/>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|hr])(.+)$/gm, (line) =>
      line.startsWith("<") ? line : `<p>${line}</p>`
    );
}

export default function ReportDetailClient({ report }: Props) {
  const [user, setUser] = useState<User | null | "loading">("loading");
  const [onboarded, setOnboarded] = useState(false);
  const supabase = createPublicBrowserClient();

  useEffect(() => {
    async function check() {
      const {
        data: { user: u },
      } = await supabase.auth.getUser();
      setUser(u);
      if (u) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("onboarded")
          .eq("id", u.id)
          .single();
        setOnboarded(!!profile?.onboarded);
      }
    }
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/reports/${report.slug}`,
      },
    });
  }

  const canRead = user !== "loading" && user !== null && onboarded;
  const isLoading = user === "loading";

  return (
    <article className="mx-auto max-w-2xl px-5 py-12">
      {report.published_at && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
          {formatDate(report.published_at)}
        </p>
      )}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
        {report.title}
      </h1>

      {/* Preview (always visible) */}
      <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {report.preview}
      </div>

      {isLoading ? (
        <div className="w-full h-40 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
      ) : canRead ? (
        /* Full content */
        <div
          className="prose prose-gray dark:prose-invert max-w-none text-base leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:my-3 [&_hr]:my-6 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(report.content) }}
        />
      ) : (
        /* Blurred CTA */
        <div className="relative">
          <div
            className="text-base text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-6 blur-sm select-none"
            aria-hidden
          >
            {report.content.slice(0, 600)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-white/60 dark:via-gray-950/60 to-white dark:to-gray-950">
            <div className="text-center px-6 py-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                전체 내용은 로그인 후 무료로 읽을 수 있어요
              </p>
              <button
                onClick={handleLogin}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google로 로그인하고 무료로 읽기
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
