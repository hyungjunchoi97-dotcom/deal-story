"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_NOTES, NOTE_SERIES_META, type NoteData } from "@/data/notes";

type Lang = "ko" | "en";

const SERIES_ID = "after-pax-americana" as const;
const ACCENT = "#dc2626";
const ACCENT_LIGHT = "#fee2e2";
const ACCENT_DARK = "#7f1d1d";

// ── 4막 그룹 정의 ──────────────────────────────────────────────────────────────
const ACTS = [
  {
    n: "I",
    range: [1, 4],
    label: { ko: "변동의 동력", en: "Forces of Change" },
    desc: {
      ko: "셰일, 인구, 부채, 무역 — 패권을 만든 4개 변수가 어떻게 무너지고 있는가",
      en: "Shale, demographics, debt, trade — how the four variables that built hegemony are unraveling",
    },
  },
  {
    n: "II",
    range: [5, 9],
    label: { ko: "충돌하는 변방", en: "Theaters of Conflict" },
    desc: {
      ko: "러시아·이란·베네수엘라·대만·한반도 — 미국이 떠나는 자리에서 일어나는 5개 전선",
      en: "Russia, Iran, Venezuela, Taiwan, Korea — five fronts opening where America withdraws",
    },
  },
  {
    n: "III",
    range: [10, 13],
    label: { ko: "재편되는 동맹", en: "Shifting Alliances" },
    desc: {
      ko: "NATO 2.0, CRINK, 걸프, 헷저들 — 새로운 진영화의 비대칭 지도",
      en: "NATO 2.0, CRINK, the Gulf, the hedgers — an asymmetric map of new alignments",
    },
  },
  {
    n: "IV",
    range: [14, 15],
    label: { ko: "패권 이후의 자본", en: "Capital After Hegemony" },
    desc: {
      ko: "달러 이후의 달러, 그리고 2035년의 포트폴리오",
      en: "The dollar after the dollar — and a portfolio for 2035",
    },
  },
];

// ── 사상가 라인업 ──────────────────────────────────────────────────────────────
const THINKERS = [
  { name: "Peter Zeihan", lens: { ko: "지정학·인구·에너지 결정론", en: "Geopolitics · demographics · energy" } },
  { name: "Adam Tooze", lens: { ko: "역사·금융·기후 통합", en: "History · finance · climate" } },
  { name: "Hal Brands", lens: { ko: "제국 사이클·대전략", en: "Imperial cycles · grand strategy" } },
  { name: "Niall Ferguson", lens: { ko: "역사 패턴·금융사", en: "Historical patterns · financial history" } },
  { name: "Branko Milanović", lens: { ko: "글로벌 불평등·중국", en: "Global inequality · China" } },
  { name: "Ray Dalio", lens: { ko: "장기 부채·제국 흥망", en: "Long-term debt · imperial rise & fall" } },
  { name: "Walter Russell Mead", lens: { ko: "외교사·잭소니언", en: "Diplomatic history · Jacksonianism" } },
  { name: "Sergei Karaganov", lens: { ko: "러시아의 反서구 시각", en: "Russia's anti-Western view" } },
];

// ── 애니메이션 ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

// ── 챕터 카드 ──────────────────────────────────────────────────────────────────
function ChapterCard({ note, lang, i }: { note: NoteData; lang: Lang; i: number }) {
  const ko = lang === "ko";
  const isLive = note.status === "published";
  const order = note.seriesOrder ?? 0;
  const orderRoman = String(order).padStart(2, "0");
  const href = ko ? `/notes/${note.slug}` : `/en/notes/${note.slug}`;

  const Inner = (
    <div
      className={`group relative rounded-2xl border p-6 sm:p-7 transition-all duration-300 h-full flex flex-col ${
        isLive
          ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
          : "bg-gray-50/60 dark:bg-gray-900/40 border-gray-200/60 dark:border-gray-700/40"
      }`}
      style={isLive ? { borderColor: ACCENT_LIGHT } : undefined}
    >
      {/* Header — chapter # + status */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[11px] font-mono font-bold tracking-widest"
          style={{ color: isLive ? ACCENT : "#9ca3af" }}
        >
          CH.{orderRoman}
        </span>
        {isLive ? (
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ background: ACCENT_LIGHT, color: ACCENT_DARK }}
          >
            {ko ? "공개됨" : "Live"}
          </span>
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            {ko ? "곧 공개" : "Coming Soon"}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-[15px] sm:text-[17px] font-bold leading-snug mb-2.5 ${
          isLive ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-500"
        }`}
      >
        {ko ? note.title : (note.titleEn ?? note.title)}
      </h3>

      {/* Description excerpt */}
      <p
        className={`text-[12.5px] leading-relaxed line-clamp-3 mb-4 flex-1 ${
          isLive ? "text-gray-600 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"
        }`}
      >
        {ko ? note.description : (note.descriptionEn ?? note.description)}
      </p>

      {/* Footer — reading time or CTA */}
      <div className="flex items-center justify-between text-[11px] pt-3 border-t border-gray-100 dark:border-gray-800">
        <span className={isLive ? "text-gray-400 dark:text-gray-500" : "text-gray-300 dark:text-gray-700"}>
          {note.readingMinutes}{ko ? "분 읽기" : " min read"}
        </span>
        {isLive && (
          <span
            className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: ACCENT }}
          >
            {ko ? "읽기 →" : "Read →"}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      custom={i}
      variants={fadeUp(i * 0.04)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
    >
      {isLive ? <Link href={href}>{Inner}</Link> : Inner}
    </motion.div>
  );
}

// ── Act 섹션 ───────────────────────────────────────────────────────────────────
function ActSection({
  act,
  chapters,
  lang,
}: {
  act: (typeof ACTS)[number];
  chapters: NoteData[];
  lang: Lang;
}) {
  const ko = lang === "ko";
  return (
    <section className="mb-20">
      {/* Act header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={VP}
        variants={fadeUp()}
        className="mb-8"
      >
        <div className="flex items-baseline gap-3 mb-2">
          <span
            className="text-[11px] font-mono font-bold tracking-[0.3em]"
            style={{ color: ACCENT }}
          >
            ACT {act.n}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-gray-500">
            {ko ? `${act.range[0]} – ${act.range[1]}편` : `Chapters ${act.range[0]}–${act.range[1]}`}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100 mb-2.5 tracking-tight">
          {ko ? act.label.ko : act.label.en}
        </h2>
        <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
          {ko ? act.desc.ko : act.desc.en}
        </p>
        <div className="w-12 h-0.5 mt-4" style={{ background: ACCENT }} />
      </motion.div>

      {/* Chapter grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {chapters.map((c, i) => (
          <ChapterCard key={c.slug} note={c} lang={lang} i={i} />
        ))}
      </div>
    </section>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function SeriesHeroClient({ lang = "ko" }: { lang?: Lang }) {
  const ko = lang === "ko";
  const meta = NOTE_SERIES_META[SERIES_ID];

  // 시리즈 챕터 필터 + 정렬
  const chapters = ALL_NOTES
    .filter((n) => n.series === SERIES_ID && n.seriesOrder != null)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));

  const total = chapters.length;
  const published = chapters.filter((c) => c.status === "published").length;
  const progressPct = Math.round((published / total) * 100);

  return (
    <main className="flex-1">
      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative border-b border-gray-200/60 dark:border-gray-700/60 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${ACCENT_LIGHT}66 0%, transparent 100%)`,
        }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${ACCENT_DARK} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-5 py-16 sm:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-5">
            <Link
              href={ko ? "/" : "/en"}
              className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {ko ? "홈" : "Home"}
            </Link>
            <span>›</span>
            <Link
              href={ko ? "/notes" : "/en/notes"}
              className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Notes
            </Link>
            <span>›</span>
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {ko ? "시리즈" : "Series"}
            </span>
          </div>

          {/* Series label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono text-[10px] font-bold tracking-[0.3em] uppercase"
            style={{ background: ACCENT, color: "white" }}
          >
            <span>{meta.icon}</span>
            <span>{ko ? "시리즈 / 15부작" : "Series / 15 Parts"}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-3 leading-[1.05]"
          >
            After Pax Americana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-8 tracking-tight"
          >
            {ko ? "팩스 아메리카나 이후 — 패권이 떠난 자리의 10년" : "The decade after the hegemon retreats"}
          </motion.p>

          {/* Thesis box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-l-4 p-6 sm:p-7 mb-10 max-w-3xl"
            style={{ borderLeftColor: ACCENT }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              {ko ? "시리즈 명제" : "Series Thesis"}
            </p>
            <p className="text-[15px] sm:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "1945년 미국이 만든 자유무역·해양안보 시스템은 미국 자신이 더 이상 필요로 하지 않는다. 셰일이 에너지 수입을 끊었고, 인구가 동맹의 가치를 떨어뜨렸으며, 부채가 패권 유지 비용을 감당하지 못하게 만들었다. 미국은 떠난다 — 그러나 그게 곧 평화를 의미하진 않는다."
                : "The free-trade and maritime-security system America built in 1945 is one America itself no longer needs. Shale severed energy dependence; demographics eroded the value of allies; debt now strains the cost of maintaining hegemony. America withdraws — but that does not mean peace."}
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {ko ? "발행 진행도" : "Series Progress"}
              </span>
              <span className="text-[11px] font-mono font-bold" style={{ color: ACCENT }}>
                {published} / {total} · {progressPct}%
              </span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
                className="h-full rounded-full"
                style={{ background: ACCENT }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4 ACTS ═══════════════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-5 py-16">
        {ACTS.map((act) => {
          const actChapters = chapters.filter((c) => {
            const o = c.seriesOrder ?? 0;
            return o >= act.range[0] && o <= act.range[1];
          });
          return (
            <ActSection key={act.n} act={act} chapters={actChapters} lang={lang} />
          );
        })}
      </div>

      {/* ═══ THINKERS / LENS ════════════════════════════════════════════════ */}
      <section className="border-t border-gray-200/60 dark:border-gray-700/60 bg-gray-50/60 dark:bg-gray-900/40">
        <div className="max-w-5xl mx-auto px-5 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-10">
            <p className="text-[11px] font-mono font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>
              {ko ? "참조 사상가 — 다중 렌즈" : "Reference Thinkers — Multi-Lens Framework"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-3">
              {ko ? "어떤 시각으로 읽는가" : "Through Whose Lens"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              {ko
                ? "이 시리즈는 하나의 시각에 기대지 않는다. 8명의 학자·전략가가 만든 8개의 렌즈로 같은 사건을 본다."
                : "This series leans on no single view. Eight scholars and strategists provide eight lenses on the same events."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {THINKERS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp(i * 0.04)}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
              >
                <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{t.name}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                  {ko ? t.lens.ko : t.lens.en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CROSSLINK ═══════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-5 py-12">
        <div className="flex flex-wrap gap-3">
          <Link
            href={ko ? "/notes" : "/en/notes"}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            ← {ko ? "모든 Notes로 돌아가기" : "Back to all Notes"}
          </Link>
        </div>
      </section>
    </main>
  );
}
