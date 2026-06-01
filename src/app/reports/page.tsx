import Link from "next/link";
import { createPublicClient } from "@/lib/supabase/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Weekly Report | Deal Story",
  description: "매주 발행되는 딜 브리핑과 시장 분석 리포트",
};

export const revalidate = 60;

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export default async function ReportsPage() {
  const supabase = createPublicClient();
  const { data: reports } = await supabase
    .from("weekly_reports")
    .select("id, slug, title, preview, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Weekly Report
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            매주 딜 브리핑 + 시장 분석 · 구독자만 볼 수 있는 오리지널 리포트
          </p>
        </div>

        {!reports || reports.length === 0 ? (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">
            아직 발행된 리포트가 없습니다.
          </div>
        ) : (
          <div className="space-y-4">
            {reports.map((r) => (
              <Link
                key={r.id}
                href={`/reports/${r.slug}`}
                className="block group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                  {r.published_at ? formatDate(r.published_at) : ""}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {r.preview}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-gray-400 dark:text-gray-500">
                  구독하고 전문 읽기 →
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
