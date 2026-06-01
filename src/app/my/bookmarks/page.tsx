import { createSSRClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스크랩한 글 | Deal Story",
};

export default async function BookmarksPage() {
  const supabase = await createSSRClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/");

  const { data: bookmarks } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            홈으로
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">스크랩한 글</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {bookmarks?.length ?? 0}개의 글을 저장했습니다.
          </p>
        </div>

        {!bookmarks || bookmarks.length === 0 ? (
          <div className="text-center py-20 text-gray-400 dark:text-gray-600">
            <svg className="mx-auto mb-4 w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            <p className="text-sm">아직 스크랩한 글이 없습니다.</p>
            <Link href="/" className="mt-4 inline-block text-sm font-medium text-gray-700 dark:text-gray-300 underline underline-offset-2">
              콘텐츠 보러가기
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {bookmarks.map((bm) => (
              <li key={bm.id}>
                <Link
                  href={bm.url}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors group"
                >
                  <svg className="mt-0.5 flex-shrink-0 w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                  <div className="min-w-0">
                    {bm.category && (
                      <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                        {bm.category}
                      </span>
                    )}
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 leading-snug">
                      {bm.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                      {new Date(bm.created_at).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
