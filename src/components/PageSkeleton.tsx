import Header from "./Header";
import Footer from "./Footer";

export default function PageSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <>
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-5 py-10 w-full">
        <div className="animate-pulse">
          <div className="h-8 w-56 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="mt-3 h-4 w-80 max-w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: cards }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-2xl bg-gray-100 dark:bg-gray-900"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
