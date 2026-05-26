"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { InvestorStory } from "@/data/investor-stories";
import { STORY_CATEGORY_META } from "@/data/investor-stories";

type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function StoriesClient({
  story,
  lang,
}: {
  story: InvestorStory;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const meta = STORY_CATEGORY_META[story.category];

  const accent = meta.accent;
  const accentLight = meta.accentLight;
  const accentDark = meta.accentDark;

  const categoryLabel = ko ? meta.label : meta.labelEn;
  const title = ko ? story.title : story.titleEn;
  const excerpt = ko ? story.excerpt : story.excerptEn;
  const tags = ko ? story.tags : (story.tagsEn ?? story.tags);

  const storiesHref = ko ? "/stories" : "/en/stories";
  const homeHref = ko ? "/" : "/en";

  // Breadcrumb category label (short)
  const catBreadcrumb = ko ? meta.label : meta.labelEn;

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Page Header ─────────────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={homeHref} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={storiesHref} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "투자자 일화" : "Stories"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{catBreadcrumb}</span>
            </div>

            {/* Category badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: accentLight, color: accent }}
            >
              {categoryLabel} · {story.dealYear}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {title}
            </motion.h1>

            {/* EN subtitle when KO */}
            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {story.titleEn}
              </motion.p>
            )}

            {/* Investor + Fund */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-black flex-shrink-0"
                style={{ background: accent }}
              >
                {(ko ? story.investor : story.investorEn).split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
              </div>
              <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                {ko ? story.investor : story.investorEn}
              </span>
              <span className="text-gray-300 dark:text-gray-600 text-xs">·</span>
              <span className="text-[12px] text-gray-500 dark:text-gray-400">
                {ko ? story.fund : story.fundEn}
              </span>
            </motion.div>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {excerpt}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {story.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Executive Summary ── */}
          {story.executiveSummary && (
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <div
                className="rounded-xl border-l-4 px-5 py-4"
                style={{ borderColor: accent, background: accentLight }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: accentDark }}
                >
                  {ko ? "핵심 요약" : "Key Takeaways"}
                </p>
                <ul className="space-y-2">
                  {(ko ? story.executiveSummary.ko : story.executiveSummary.en).map(
                    (point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] leading-relaxed"
                        style={{ color: accentDark }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: accent }}
                        />
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          )}

          {/* ── Snapshot ── */}
          {story.snapshot.length > 0 && (
            <motion.section
              variants={fadeUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: accent }}
              >
                {ko ? "트레이드 스냅샷" : "Trade Snapshot"}
              </h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {story.snapshot.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-900/30"}
                      >
                        <td className="px-4 py-2.5 text-[12px] font-medium text-gray-500 dark:text-gray-400 w-36 flex-shrink-0">
                          {ko ? row.labelKo : row.labelEn}
                        </td>
                        <td className="px-4 py-2.5 text-[13px] font-semibold text-gray-900 dark:text-gray-100">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
          )}

          {/* ── Article Sections ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="space-y-12"
          >
            {story.sections.map((section, i) => (
              <motion.section key={i} variants={fadeUp()}>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <div className="prose prose-sm prose-gray dark:prose-invert max-w-none">
                  {(ko ? section.body : section.bodyEn)
                    .split("\n\n")
                    .map((para, j) => {
                      // Bold markdown (**text**)
                      const rendered = para.replace(
                        /\*\*(.+?)\*\*/g,
                        "<strong>$1</strong>"
                      );
                      if (para.startsWith("- ") || para.startsWith("• ")) {
                        const items = para.split("\n").filter(Boolean);
                        return (
                          <ul key={j} className="list-disc list-inside space-y-1 mb-4 text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                            {items.map((item, k) => (
                              <li key={k} dangerouslySetInnerHTML={{ __html: item.replace(/^[-•]\s*/, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={j}
                          className="mb-4 text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: rendered }}
                        />
                      );
                    })}
                </div>
              </motion.section>
            ))}
          </motion.div>

          {/* ── Assessment ── */}
          {story.assessment && (
            <motion.section
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ color: accent }}
              >
                {ko ? "전략 평가" : "Strategy Assessment"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Positives */}
                <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-900/20 p-4">
                  <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-3">
                    {ko ? "탁월한 점" : "Brilliance"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? story.assessment.positives : story.assessment.positivesEn).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Risks */}
                <div className="rounded-xl border border-rose-200 dark:border-rose-800/40 bg-rose-50 dark:bg-rose-900/20 p-4">
                  <p className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-3">
                    {ko ? "리스크·교훈" : "Risks & Lessons"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? story.assessment.risks : story.assessment.risksEn).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-rose-800 dark:text-rose-200 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.section>
          )}

          {/* ── Key Terms ── */}
          {story.keyTerms.length > 0 && (
            <motion.section
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: accent }}
              >
                {ko ? "핵심 용어" : "Key Terms"}
              </h2>
              <div className="space-y-3">
                {story.keyTerms.map((kt, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                  >
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {ko ? kt.term : kt.termEn}
                    </p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {ko ? kt.definition : kt.definitionEn}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── FAQ ── */}
          {story.faq && story.faq.length > 0 && (
            <motion.section
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: accent }}
              >
                FAQ
              </h2>
              <div className="space-y-4">
                {story.faq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5"
                  >
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Q. {ko ? item.q : item.qEn}
                    </p>
                    <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {ko ? item.a : item.aEn}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── References ── */}
          {story.references && story.references.length > 0 && (
            <motion.section
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: accent }}
              >
                {ko ? "참고 자료" : "References"}
              </h2>
              <ol className="space-y-2">
                {story.references.map((ref) => (
                  <li
                    key={ref.id}
                    className="flex gap-2 text-[12px] text-gray-500 dark:text-gray-400"
                  >
                    <span className="font-semibold text-gray-400 dark:text-gray-500 flex-shrink-0 w-4 text-right">
                      {ref.id}.
                    </span>
                    <span>
                      {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-500 hover:underline"
                        >
                          [Link]
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Navigation ── */}
          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-4">
            <Link
              href={storiesHref}
              className="text-sm text-blue-500 hover:underline"
            >
              {ko ? "← 다른 일화 보기" : "← All Stories"}
            </Link>
            <Link
              href={ko ? "/market" : "/en/market"}
              className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 hover:underline"
            >
              {ko ? "자본시장 딜 → Market Story" : "Capital Markets → Market Story"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
