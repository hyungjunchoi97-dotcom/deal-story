import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_LEARNING_PATHS, LEVEL_LABEL } from "@/data/learning-paths";

export const metadata: Metadata = {
  title: "러닝 패스 — 큐레이션된 학습 경로 | Deal Story",
  description:
    "개념에서 실전까지 — 큐레이션된 학습 순서로 자본시장을 깊이 이해합니다. DCM·Credit·FIG·Sovereign 학습 경로.",
  alternates: {
    canonical: "/learning-paths",
    languages: {
      ko: "/learning-paths",
      "x-default": "/learning-paths",
    },
  },
};

const CATEGORY_CHIP: Record<string, { bg: string; fg: string; label: string }> = {
  dcm:               { bg: "bg-teal-50 dark:bg-teal-900/30",   fg: "text-teal-700 dark:text-teal-300",   label: "DCM" },
  ecm:               { bg: "bg-blue-50 dark:bg-blue-900/30",   fg: "text-blue-700 dark:text-blue-300",   label: "ECM" },
  fig:               { bg: "bg-rose-50 dark:bg-rose-900/30",   fg: "text-rose-700 dark:text-rose-300",   label: "FIG" },
  sovereign:         { bg: "bg-indigo-50 dark:bg-indigo-900/30", fg: "text-indigo-700 dark:text-indigo-300", label: "Sovereign" },
  credit:            { bg: "bg-amber-50 dark:bg-amber-900/30", fg: "text-amber-700 dark:text-amber-300", label: "Credit" },
  "leveraged-finance": { bg: "bg-orange-50 dark:bg-orange-900/30", fg: "text-orange-700 dark:text-orange-300", label: "Lev Fin" },
  distressed:        { bg: "bg-red-50 dark:bg-red-900/30",     fg: "text-red-700 dark:text-red-300",     label: "Distressed" },
  "s-t":             { bg: "bg-violet-50 dark:bg-violet-900/30", fg: "text-violet-700 dark:text-violet-300", label: "S&T" },
};

function getCategoryChip(category: string) {
  return (
    CATEGORY_CHIP[category] ?? {
      bg: "bg-gray-100 dark:bg-gray-800",
      fg: "text-gray-600 dark:text-gray-400",
      label: category.toUpperCase(),
    }
  );
}

export default function LearningPathsPage() {
  const totalSteps = ALL_LEARNING_PATHS.reduce((acc, p) => acc + p.steps.length, 0);

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 마스트헤드 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link
                href="/"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                홈
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">러닝 패스</span>
            </div>

            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-[11px] font-bold mb-3">
              DCM · Credit · FIG · Sovereign
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              러닝 패스
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              개념에서 실전까지 — 큐레이션된 학습 순서로 자본시장을 깊이 이해합니다.
            </p>

            {/* 통계 */}
            <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
              {ALL_LEARNING_PATHS.length}개 패스 · 총 {totalSteps}개 스텝
            </p>
          </div>
        </section>

        {/* ── 카드 그리드 ── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ALL_LEARNING_PATHS.map((path) => {
              const level = LEVEL_LABEL[path.level];
              const chip = getCategoryChip(path.category);

              return (
                <Link key={path.slug} href={`/learning-paths/${path.slug}`}>
                  <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-5 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">

                    {/* 배지 행 */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${level.bg} ${level.color}`}
                      >
                        {level.ko}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${chip.bg} ${chip.fg}`}
                      >
                        {chip.label}
                      </span>
                    </div>

                    {/* 제목 */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                      {path.title}
                    </h2>

                    {/* 태그라인 */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {path.tagline}
                    </p>

                    {/* 설명 */}
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2 flex-1">
                      {path.description}
                    </p>

                    {/* 푸터 행 */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-[12px] text-gray-400 dark:text-gray-500">
                      <div className="flex items-center gap-3">
                        <span>⏱ {path.estimatedMinutes}분</span>
                        <span>{path.steps.length}개 스텝</span>
                      </div>
                      <span className="font-medium text-teal-600 dark:text-teal-400 group-hover:underline">
                        시작하기 →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
