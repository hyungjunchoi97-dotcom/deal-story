"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";
import SeriesNav from "@/components/SeriesNav";
import { getMarketDealNav } from "@/data/market-deals";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const ACCENT = "#8b5cf6";
const ACCENT_DARK = "#4c1d95";
const ACCENT_LIGHT = "rgb(245 243 255)";

// Chart 1: What is Formosa & why
function FormosaWhatVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const facts = [
    { icon: "🇹🇼", ko: "대만 증권시장에 상장, USD·EUR 등 외화 표시 채권", en: "Listed on Taiwan exchange, denominated in USD/EUR etc." },
    { icon: "🏦", ko: "발행사: 주로 해외 금융기관·기업 (ABN, Citibank, GE 등)", en: "Issuers: mainly foreign financial institutions (ABN, Citibank, GE)" },
    { icon: "📋", ko: "투자자: 대만 생명보험사 — 규정상 해외채권 투자 가능", en: "Investors: Taiwanese life insurers — permitted to invest in foreign bonds" },
    { icon: "⏳", ko: "구조: 30년 만기, 5년 콜 옵션 (30NC5) — 장기 ALM 수요 충족", en: "Structure: 30yr maturity, 5yr call (30NC5) — meets long-term ALM demand" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "포모사본드란 무엇인가" : "What Is a Formosa Bond?"}</p>
        </div>
        <div className="p-5 sm:p-8 grid sm:grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }} className="rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-3">
              <span className="text-xl block mb-1">{f.icon}</span>
              <p className="text-[12px] text-violet-700 dark:text-violet-300">{ko ? f.ko : f.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: Taiwan insurer ALM mismatch
function AlmMismatchVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "대만 보험사 ALM 딜레마" : "Taiwan Insurer ALM Dilemma"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4">
              <p className="text-[11px] font-bold text-red-600 dark:text-red-400 mb-2">{ko ? "부채 (보험 계약)" : "Liabilities (Insurance Policies)"}</p>
              <ul className="space-y-1.5">
                {[ko ? "만기: 20~30년 초장기" : "Maturity: 20–30yr ultra-long", ko ? "보장 수익률: 3~5% (과거 고보증이율)" : "Guaranteed return: 3–5% (historical high)", ko ? "NTD 기반 (대만 달러)" : "NTD-based (Taiwan dollar)"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-red-700 dark:text-red-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-4">
              <p className="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-2">{ko ? "자산 (포모사본드)" : "Assets (Formosa Bonds)"}</p>
              <ul className="space-y-1.5">
                {[ko ? "만기: 30년 (5년 콜 있음)" : "Maturity: 30yr (5yr call)", ko ? "수익률: 3~5% USD (USD 고금리 시)" : "Yield: 3–5% USD (high USD rates)", ko ? "외화 노출 (환헤지 필요)" : "FX exposure (requires hedge)"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-violet-700 dark:text-violet-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-3 text-center">
            <p className="text-[12px] font-bold text-amber-700 dark:text-amber-300">{ko ? "리스크: 5년 후 콜 안 하면 → 매칭이 깨짐 (Extension Risk)" : "Risk: No-call at year 5 → matching breaks (Extension Risk)"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: Formosa boom issuance
const formosaData = [
  { year: "2013", bn: 8 }, { year: "2014", bn: 18 }, { year: "2015", bn: 28 },
  { year: "2016", bn: 42 }, { year: "2017", bn: 55 }, { year: "2018", bn: 31 },
  { year: "2019", bn: 18 }, { year: "2020", bn: 12 },
];

function FormosaBoomChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "포모사본드 연간 발행액 ($B) — 붐과 규제 후 위축" : "Formosa Bond Annual Issuance ($B) — Boom and Post-Regulation Decline"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={formosaData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="formosaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip formatter={(v) => [`$${v}B`, ko ? "발행액" : "Issuance"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Area type="monotone" dataKey="bn" stroke={ACCENT} fill="url(#formosaGrad)" strokeWidth={2} dot={{ fill: ACCENT, strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "2018년 FSC 규제 강화 → 시장 급냉각" : "2018 FSC regulation tightening → rapid market cooling"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: Call decision (YTC vs YTW)
const callData = [
  { name: "YTC\n(콜 가정)", val: 4.2 }, { name: "YTW\n(최악 수익률)", val: 2.8 }, { name: "YTM\n(연장 가정)", val: 2.8 },
];

function CallDecisionVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { name: ko ? "YTC (콜 가정)" : "YTC (Call assumed)", val: 4.2 },
    { name: ko ? "YTW (최악)" : "YTW (Worst case)", val: 2.8 },
    { name: ko ? "YTM (연장)" : "YTM (Extension)", val: 2.8 },
  ];
  const fills = [ACCENT, "#ef4444", "#f97316"];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "YTC vs YTW — 콜 스킵 충격의 수익률 효과" : "YTC vs YTW — Yield Impact of No-Call Shock"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis domain={[0, 5]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "수익률" : "Yield"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={fills[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "콜 가정 YTC 4.2% → 콜 스킵 시 YTW 2.8%: 140bp 실질 손실" : "YTC 4.2% assuming call → YTW 2.8% on no-call: 140bp real loss"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Post-2018 lessons
function PostRegulationLessons({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const lessons = [
    { icon: "📏", ko: "FSC 2018 규제: 대만 보험사 해외투자 한도·통화헤지 비용 강화 → 수요 급감", en: "FSC 2018: Taiwan insurer overseas investment limits/FX hedge cost → demand collapse" },
    { icon: "📞", ko: "대규모 콜 스킵: Société Générale, HSBC 등 주요 발행사들이 5년 콜 미행사 → 보험사 30년 물림", en: "Mass no-calls: SocGen, HSBC and others skip 5yr calls → insurers stuck with 30yr bonds" },
    { icon: "📚", ko: "교훈: 콜 관행은 규칙이 아니다. YTW로 투자하고, 콜 경제성을 분석해야", en: "Lesson: call convention is not a rule. Invest on YTW, analyze call economics" },
    { icon: "🌏", ko: "포모사 시장의 남은 역할: 규모 축소됐지만 여전히 USD 장기채 수요를 공급하는 틈새시장", en: "Formosa's remaining role: smaller but still a niche for USD long-term supply" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "2018년 이후 — 규제와 콜 스킵의 교훈" : "Post-2018 — Regulation and No-Call Lessons"}</p>
        </div>
        <div className="p-5 sm:p-8 space-y-3">
          {lessons.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }} className="flex items-start gap-3 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-3">
              <span className="text-xl flex-shrink-0">{l.icon}</span>
              <p className="text-[12px] text-violet-700 dark:text-violet-300">{ko ? l.ko : l.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  return [<FormosaWhatVisual key="0" lang={lang} />, <AlmMismatchVisual key="1" lang={lang} />, <FormosaBoomChart key="2" lang={lang} />, <CallDecisionVisual key="3" lang={lang} />, <PostRegulationLessons key="4" lang={lang} />][i] ?? null;
}

export default function FormosaBondsClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="transition-colors" style={{ color: ACCENT }}>Market</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "구조 혁신" : "Structural Innovations"}</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: ACCENT_LIGHT, color: ACCENT }}>{ko ? deal.categoryLabel : deal.categoryLabelEn}</div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">{ko ? deal.title : deal.titleEn}</motion.h1>
            {ko && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">{deal.titleEn}</motion.p>}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? deal.excerpt : deal.excerptEn}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{deal.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">{(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">{tag}</span>)}</div>
            </motion.div>
          </div>
        </section>
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4"><ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
          <LikeButton slug={deal.slug} lang={lang} /></div>
        {deal.executiveSummary && (
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="max-w-3xl mx-auto px-5 pt-4">
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{ko ? "핵심 요약" : "Key Takeaways"}</p>
              <ul className="space-y-2">{(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-violet-800 dark:text-violet-200"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />{point}</li>)}</ul>
            </div>
          </motion.div>
        )}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5"><h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? "딜 스냅샷" : "Deal Snapshot"}</h2><div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} /></motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2" style={{ borderColor: "#ddd6fe" }}>
              <div className="px-5 py-3" style={{ background: ACCENT }}><p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "포모사본드 — 핵심 수치" : "Formosa Bond — Key Figures"}</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x bg-white dark:bg-gray-950" style={{ borderColor: "#ddd6fe" }}>
                {deal.snapshot.map((row, i) => <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}><p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p><p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{ko ? row.value : (row.valueEn ?? row.value)}</p></motion.div>)}
              </div>
              <div className="grid grid-cols-3 divide-x border-t-2" style={{ borderColor: "#ddd6fe" }}>
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900"><p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "구조" : "Structure"}</p><p className="text-lg font-black text-gray-700 dark:text-gray-300">30NC5</p></div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}><p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "붐 피크" : "Boom Peak"}</p><p className="text-2xl font-black" style={{ color: ACCENT }}>2017</p></div>
                <div className="px-4 py-4 text-center bg-red-50 dark:bg-red-900/20"><p className="text-[10px] text-red-500 uppercase font-bold mb-1">{ko ? "규제 강화" : "Regulation"}</p><p className="text-lg font-black text-red-600 dark:text-red-400">2018 FSC</p></div>
              </div>
            </motion.div>
          </motion.section>
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6"><h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? section.heading : section.headingEn}</h2><div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} /></motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}><div className="space-y-3">{(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>)}</div></div>
              {getVisual(i, lang)}
            </motion.section>
          ))}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "핵심 용어" : "Key Terms"}</motion.h2>
            <div className="mt-5 space-y-3">{deal.keyTerms.map((term, i) => <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"><div className="flex items-center gap-2 mb-2 flex-wrap"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>{i + 1}</span><span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{ko ? term.term : term.termEn}</span></div><p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">{ko ? term.definition : term.definitionEn}</p></motion.div>)}</div>
          </motion.section>
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "딜 평가" : "Deal Assessment"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5"><p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p><ul className="space-y-2">{(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{p}</li>)}</ul></motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5"><p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p><ul className="space-y-2">{(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{r}</li>)}</ul></motion.div>
              </div>
            </motion.section>
          )}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" likeSlug={deal.slug} lang={lang} />
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "자주 묻는 질문" : "Frequently Asked Questions"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <FaqAccordion items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={ACCENT} />
            </motion.section>
          )}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => <motion.div key={slug} variants={fadeUp()}><Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}><div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:bg-violet-50/40 dark:hover:bg-violet-900/20 transition-all"><span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>M</span><div className="flex-1 min-w-0"><p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p><p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 transition-colors truncate">{slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p></div><span className="text-gray-300 dark:text-gray-600 text-sm flex-shrink-0">→</span></div></Link></motion.div>)}
              </div>
            </motion.section>
          ) : null}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "참고 자료" : "References"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">{deal.references.map((ref) => <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>{ref.id}</span><span>{ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}{ref.url ? <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>{ref.title}</a> : <span>{ref.title}</span>}{ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}{ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}</span></motion.li>)}</ol>
            </motion.section>
          )}
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarketDealNav(deal.slug);
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market" : "/market";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? prev.titleEn : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? next.titleEn : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
