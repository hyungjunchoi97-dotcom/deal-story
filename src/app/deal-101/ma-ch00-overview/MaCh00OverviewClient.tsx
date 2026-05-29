/**
 * Ch.0 — M&A 시리즈 Deal Type Matrix
 * 5축 인터랙티브 오리엔테이션 페이지
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import MaChapterNav from "@/components/ma/MaChapterNav";
import PhaseBadge from "@/components/ma/PhaseBadge";
import DealTypeMatrix from "@/components/ma/DealTypeMatrix";
import SeriesNav from "@/components/SeriesNav";
import {
  MA_PHASES,
  MA_CHAPTERS,
  getMaChapterBySlug,
  getMaSeriesNav,
  getPhase,
} from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const SLUG = "ma-ch00-overview";

export default function MaCh00OverviewClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Breadcrumb ─────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              {ko ? "홈" : "Home"}
            </Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Deal 101
            </Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {ko ? "M&A 시리즈 · Ch.0" : "M&A Series · Ch.0"}
            </span>
          </div>
        </div>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <PhaseBadge phase={phase} lang={lang} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {ko ? "오리엔테이션" : "Orientation"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">
            {ko ? chapter.questionKo : chapter.questionEn}
          </p>
        </section>

        {/* ── Series Chapter Nav ─────────────────────────────────── */}
        <MaChapterNav currentSlug={SLUG} lang={lang} />

        {/* ── 본문 ───────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">
          {/* ── 인트로 ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "왜 5축인가" : "Why 5 axes?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "GS·MS·JPM M&A 팀이 실제로 하는 일은 14단계로 정리되지만, 같은 단계 안에서도 '내 딜이 어떤 종류인가'에 따라 워크플로우가 완전히 갈립니다. 예를 들어 Ch.3 CIM 작성은 broad auction에서는 80장짜리 풀 CIM이 필수지만, public take-private에서는 CIM 자체가 없습니다 — SEC filings가 그 역할을 대신하기 때문이죠."
                  : "What GS, MS, and JPM M&A teams actually do breaks into 14 stages — but within each stage, your workflow forks completely based on what kind of deal you're running. Take Ch.3 (CIM writing): a broad auction requires a full 80-page CIM, while a public take-private has no CIM at all — SEC filings take its place."}
              </p>
              <p>
                {ko
                  ? "이 5축은 실무에서 'engagement letter 사인 직전에 확정해야 하는 5가지 질문'과 같습니다. 이 페이지는 그 좌표를 정해두면 14챕터 어디서 어떤 분기가 발동되는지를 한눈에 보여주는 인터랙티브 매트릭스입니다."
                  : "These 5 axes correspond to the 5 questions every banker has to lock down before signing the engagement letter. This page is an interactive matrix — set your coordinates and see which variants kick in across all 14 chapters."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── 5축 매트릭스 ── */}
          <section>
            <DealTypeMatrix lang={lang} />
          </section>

          {/* ── Phase 개요 ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "6 Phase · 14 챕터 — 전체 흐름" : "6 Phases · 14 Chapters — full flow"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <div className="space-y-4">
              {MA_PHASES.map((p, i) => {
                const chapters = MA_CHAPTERS.filter((c) => c.phase === p.key && c.ch > 0);
                if (chapters.length === 0) return null;
                return (
                  <motion.div
                    key={p.key}
                    variants={fadeUp(i * 0.06)}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div
                      className="px-5 py-4 flex items-baseline justify-between gap-3"
                      style={{ background: `${p.accentHex}10` }}
                    >
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: p.accentHex }}
                        >
                          Phase {p.num}
                        </p>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                          {ko ? p.labelKo : p.labelEn}
                        </h3>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 text-right max-w-[200px]">
                        {ko ? p.descKo : p.descEn}
                      </p>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {chapters.map((ch) => (
                        <Link
                          key={ch.slug}
                          href={`${base}/${ch.slug}`}
                          className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group"
                        >
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-[11px] mt-0.5"
                            style={{ background: p.accentHex }}
                          >
                            {ch.ch}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 group-hover:underline">
                              {ko ? ch.titleKo : ch.titleEn}
                            </p>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                              {ko ? ch.taglineKo : ch.taglineEn}
                            </p>
                          </div>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1">
                            {ch.readingMinutes}
                            {ko ? "분" : " min"}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Share ── */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* ── Series Nav (prev/next) ── */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
