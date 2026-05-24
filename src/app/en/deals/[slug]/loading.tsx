import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DealDetailLoading() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-5 py-10 animate-pulse">
          {/* 뒤로가기 */}
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-8" />

          {/* 카테고리 + 메타 */}
          <div className="flex gap-2 mb-4">
            <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </div>

          {/* 제목 */}
          <div className="space-y-3">
            <div className="h-8 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>

          {/* 리드 */}
          <div className="mt-5 h-16 bg-gray-100 dark:bg-gray-800/60 rounded-lg" />

          {/* 딜 요약 카드 */}
          <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5">
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="h-2.5 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* 본문 */}
          <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-8 space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-100 dark:bg-gray-800 rounded"
                style={{ width: `${75 + Math.random() * 25}%` }}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
