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
    title: `${concept.titleEn} — Market 101 | Deal Story`,
    description: concept.excerptEn,
    alternates: {
      canonical: `/en/market-101/${slug}`,
      languages: {
        ko: `/market-101/${slug}`,
        en: `/en/market-101/${slug}`,
        "x-default": `/market-101/${slug}`,
      },
    },
  };
}

const CAT_ACCENT: Record<string, string> = {
  dcm:        "#14b8a6",
  ecm:        "#3182f6",
  st:         "#8b5cf6",
  structure:  "#f97316",
  sales:      "#0ea5e9",
  fig:        "#f43f5e",
  sovereign:  "#6366f1",
  structured: "#f59e0b",
};

export default async function Market101ConceptPageEn({
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
  const isArticle = concept.entryType === "article";
  const tagsDisplay = concept.tagsEn ?? concept.tags;

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Article Header ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href="/en" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/en/market-101" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{concept.categoryLabelEn}</span>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${catColor.bg} ${catColor.fg}`}>
                {concept.categoryLabelEn}
              </span>
              {isArticle ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-semibold">
                  Article
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-semibold">
                  Term
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-4">
              {concept.titleEn}
            </h1>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
              {concept.excerptEn}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes} min read
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {tagsDisplay.slice(0, 5).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {concept.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                {section.headingEn}
              </h2>
              <div
                className="pl-4 border-l-2"
                style={{ borderColor: accent + "4d" }}
              >
                <div className="space-y-3">
                  {section.bodyEn.split("\n\n").map((para, j) => (
                    <p key={j} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Key Terms */}
          {concept.keyTerms.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                Key Terms
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
                        {term.termEn}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                      {term.definitionEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Appears In — appearsIn backlinks */}
          {concept.appearsIn && concept.appearsIn.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Where This Concept Appears
              </h2>
              <div className="space-y-2">
                {concept.appearsIn.map((ref) => {
                  const href =
                    ref.type === "market-deal"
                      ? `/en/market/${ref.slug}`
                      : `/en/market-101/${ref.slug}`;
                  const typeLabel = ref.type === "market-deal" ? "Market Story" : "Market 101 Article";
                  return (
                    <Link key={`${ref.type}-${ref.slug}`} href={href}>
                      <div className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: accent }}
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                            {typeLabel}
                          </span>
                          <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {ref.titleEn}
                          </p>
                        </div>
                        <span className="text-[12px] text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related Concepts */}
          {related.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Related Concepts
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((rel) => {
                  const relCat = CATEGORY_COLOR[rel.category];
                  return (
                    <Link key={rel.slug} href={`/en/market-101/${rel.slug}`}>
                      <div className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 hover:bg-teal-50/50 dark:hover:bg-teal-900/20 transition-all cursor-pointer">
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${relCat.bg} ${relCat.fg}`}>
                          {rel.categoryLabelEn}
                        </div>
                        <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors leading-snug mb-1">
                          {rel.titleEn}
                        </h3>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2">
                          {rel.excerptEn}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* References */}
          {concept.references && concept.references.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-3">
                References
              </h2>
              <ol className="space-y-2 text-[12px] text-gray-500 dark:text-gray-400">
                {concept.references.map((ref) => (
                  <li key={ref.id} className="flex gap-2">
                    <span className="font-bold text-gray-400 dark:text-gray-500 flex-shrink-0">[{ref.id}]</span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-600 dark:hover:text-teal-400">
                          {ref.title}
                        </a>
                      ) : (
                        <span>{ref.title}</span>
                      )}{" "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}. {ref.year}.</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href="/en/market-101"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              ← All Market 101
            </Link>
            <Link
              href="/en/market"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              Market Story →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
