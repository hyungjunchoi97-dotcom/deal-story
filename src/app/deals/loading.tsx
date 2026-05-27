import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DealsLoading() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 페이지 헤더 skeleton */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10 animate-pulse">
            <div className="h-7 w-28 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="mt-2 h-4 w-56 rounded bg-gray-200 dark:bg-gray-800" />
          </div>
        </section>

        {/* 필터 + 리스트 skeleton */}
        <div className="max-w-3xl mx-auto px-5 py-8 animate-pulse">
          {/* 카테고리 탭 */}
          <div className="flex gap-2 mb-6">
            {[40, 32, 48, 40, 44].map((w, i) => (
              <div key={i} className={`h-7 w-${w === 32 ? '8' : w === 40 ? '10' : w === 48 ? '12' : w === 44 ? '11' : '10'} rounded-full bg-gray-200 dark:bg-gray-800`} style={{ width: `${w * 2}px` }} />
            ))}
          </div>
          {/* 검색 */}
          <div className="h-10 w-full rounded-xl bg-gray-100 dark:bg-gray-800 mb-6" />
          {/* 리스트 rows */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="py-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex gap-2 mb-2">
                <div className="h-5 w-16 rounded-full bg-gray-200 dark:bg-gray-800" />
                <div className="h-5 w-20 rounded bg-gray-100 dark:bg-gray-800" />
              </div>
              <div className="h-5 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="mt-2 h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
              <div className="mt-1 h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-800" />
              <div className="mt-3 flex gap-3">
                <div className="h-4 w-16 rounded bg-gray-100 dark:bg-gray-800" />
                <div className="h-4 w-32 rounded bg-gray-100 dark:bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
