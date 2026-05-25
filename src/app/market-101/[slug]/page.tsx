import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_MARKET101_CONCEPTS,
  getMarket101ConceptBySlug,
  getMarket101RelatedConcepts,
  CATEGORY_COLOR,
} from "@/data/market-101-concepts";

export function generateStaticParams() {
  return ALL_MARKET101_CONCEPTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = getMarket101ConceptBySlug(slug);
  if (!concept) return { title: "Not Found" };
  return {
    title: `${concept.title} — Market 101 | Deal Story`,
    description: concept.excerpt,
    alternates: {
      canonical: `/market-101/${slug}`,
      languages: {
        ko: `/market-101/${slug}`,
        en: `/en/market-101/${slug}`,
        "x-default": `/market-101/${slug}`,
      },
    },
  };
}

const CAT_ACCENT: Record<string, string> = {
  dcm:       "#14b8a6",
  ecm:       "#3182f6",
  st:        "#8b5cf6",
  structure: "#f97316",
};

export default async function Market101ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getMarket101ConceptBySlug(slug);
  if (!concept) notFound();

  const related = getMarket101RelatedConcepts(concept.relatedSlugs);
  const catColor = CATEGORY_COLOR[concept.category];
  const accent = CAT_ACCENT[concept.category] ?? "#14b8a6";

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 아티클 헤더 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">홈</Link>
              <span>›</span>
              <Link href="/market-101" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{concept.categoryLabel}</span>
            </div>

            {/* 배지 */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 ${catColor.bg} ${catColor.fg}`}>
              {concept.categoryLabel}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">
              {concept.title}
            </h1>
            <p className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">
              {concept.titleEn}
            </p>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
              {concept.excerpt}
            </p>

            {/* 메타 */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}분 읽기
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {concept.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 본문 ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {concept.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {section.heading}
              </h2>
              <p className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">
                {section.headingEn}
              </p>
              <div
                className="pl-4 border-l-2"
                style={{ borderColor: accent + "4d" }}
              >
                <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {section.body}
                </p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {section.bodyEn}
                </p>
              </div>
            </section>
          ))}

          {/* 핵심 용어 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
              핵심 용어
              <span className="text-sm text-gray-400 dark:text-gray-500 font-normal ml-2">
                Key Terms
              </span>
            </h2>
            <div className="mt-5 space-y-3">
              {concept.keyTerms.map((term, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                      {term.term}
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      {term.termEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7 mb-1.5">
                    {term.definition}
                  </p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed pl-7">
                    {term.definitionEn}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 연관 개념 */}
          {related.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                연관 개념
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((rel) => {
                  const relCat = CATEGORY_COLOR[rel.category];
                  return (
                    <Link key={rel.slug} href={`/market-101/${rel.slug}`}>
                      <div className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 hover:bg-teal-50/50 dark:hover:bg-teal-900/20 transition-all cursor-pointer">
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${relCat.bg} ${relCat.fg}`}>
                          {rel.categoryLabel}
                        </div>
                        <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors leading-snug mb-1">
                          {rel.title}
                        </h3>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* 뒤로 가기 */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href="/market-101"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              ← Market 101 전체 보기
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              홈으로
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
