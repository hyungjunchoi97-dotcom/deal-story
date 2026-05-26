import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_LEARNING_PATHS,
  getLearningPath,
  LEVEL_LABEL,
} from "@/data/learning-paths";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";
import { ALL_MARKET_DEALS } from "@/data/market-deals";

export function generateStaticParams() {
  return ALL_LEARNING_PATHS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) return { title: "Not Found" };
  return {
    title: `${path.title} — 러닝 패스 | Deal Story`,
    description: path.description,
    alternates: {
      canonical: `/learning-paths/${slug}`,
      languages: {
        ko: `/learning-paths/${slug}`,
        "x-default": `/learning-paths/${slug}`,
      },
    },
  };
}

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

function getStepInfo(type: "market-101" | "market-deal", slug: string) {
  if (type === "market-101") {
    const concept = ALL_MARKET101_CONCEPTS.find((c) => c.slug === slug);
    return {
      title: concept?.title ?? slug,
      href: `/market-101/${slug}`,
    };
  } else {
    const deal = ALL_MARKET_DEALS.find((d) => d.slug === slug);
    return {
      title: deal?.title ?? slug,
      href: `/market/${slug}`,
    };
  }
}

export default async function LearningPathDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) notFound();

  const level = LEVEL_LABEL[path.level];
  const chip = getCategoryChip(path.category);

  // First step URL for CTA
  const firstStep = path.steps[0];
  const firstStepInfo = firstStep
    ? getStepInfo(firstStep.type, firstStep.slug)
    : null;

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 마스트헤드 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link
                href="/"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                홈
              </Link>
              <span>›</span>
              <Link
                href="/learning-paths"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                러닝 패스
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{path.title}</span>
            </div>

            {/* 배지 행 */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${level.bg} ${level.color}`}
              >
                {level.ko}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${chip.bg} ${chip.fg}`}
              >
                {chip.label}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {path.title}
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
              {path.tagline}
            </p>

            {/* 통계 */}
            <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
              ⏱ 약 {path.estimatedMinutes}분 · {path.steps.length}개 스텝
            </p>

            {/* 설명 */}
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mt-4 max-w-2xl">
              {path.description}
            </p>
          </div>
        </section>

        {/* ── 학습 순서 ── */}
        <div className="max-w-2xl mx-auto px-5 py-10">
          {/* 섹션 헤더 */}
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
              학습 순서
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* 타임라인 */}
          <ol className="space-y-0">
            {path.steps.map((step, index) => {
              const isMarket101 = step.type === "market-101";
              const stepInfo = getStepInfo(step.type, step.slug);
              const isLast = index === path.steps.length - 1;

              // Color scheme: teal for market-101, indigo for market-deal
              const circleColor = isMarket101
                ? "bg-teal-600 text-white"
                : "bg-indigo-600 text-white";
              const badgeBg = isMarket101
                ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                : "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300";
              const badgeLabel = isMarket101 ? "🎓 Market 101" : "📊 Market Story";
              const linkColor = isMarket101
                ? "text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300";

              return (
                <li key={`${step.type}-${step.slug}`} className="flex gap-4">
                  {/* Left: number + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${circleColor}`}
                    >
                      {index + 1}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 my-2" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
                    {/* Step type badge */}
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${badgeBg}`}
                    >
                      {badgeLabel}
                    </span>

                    {/* Step title */}
                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 leading-snug mb-1">
                      {stepInfo.title}
                    </h3>

                    {/* Note */}
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                      {step.note}
                    </p>

                    {/* Read link */}
                    <Link
                      href={stepInfo.href}
                      className={`inline-flex items-center text-[13px] font-medium transition-colors ${linkColor}`}
                    >
                      읽기 →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* ── CTA ── */}
          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {firstStepInfo && (
              <Link
                href={firstStepInfo.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors"
              >
                첫 번째 스텝 시작하기 →
              </Link>
            )}
            <Link
              href="/learning-paths"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              ← 러닝 패스 전체 보기
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
