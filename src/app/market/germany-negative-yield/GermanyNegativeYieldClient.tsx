"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";

type Lang = "ko" | "en";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const ACCENT = "#8b5cf6";
const ACCENT_DARK = "#4c1d95";
const ACCENT_LIGHT = "rgb(245 243 255)";

// Chart 1: ECB rate history
const ecbRateData = [
  { date: "2011", rate: 1.50 }, { date: "2012", rate: 0.75 }, { date: "2014", rate: 0.05 },
  { date: "2016", rate: 0.00 }, { date: "2019 peak", rate: -0.50 }, { date: "2021", rate: -0.50 },
  { date: "2022 Jul", rate: 0.00 }, { date: "2022 Dec", rate: 2.50 }, { date: "2023", rate: 4.00 },
];

function EcbRateChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "ECB 기준금리 변화 — NIRP 시대와 정상화" : "ECB Policy Rate — NIRP Era and Normalization"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ecbRateData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="ecbGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "기준금리" : "Policy rate"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="4 2" label={{ value: "0%", fontSize: 9, fill: "#ef4444", position: "insideTopRight" }} />
                <Area type="monotone" dataKey="rate" stroke={ACCENT} fill="url(#ecbGrad)" strokeWidth={2} dot={{ fill: ACCENT, strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: 6 reasons to buy negative yields
function ReasonsVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const reasons = [
    { icon: "🏦", ko: "규제 요건 — 바젤III로 은행은 안전자산 보유 의무", en: "Regulatory requirement — Basel III forces banks to hold safe assets" },
    { icon: "💼", ko: "운용 불가 현금 — 대규모 기관의 현금 보관 비용 vs 소폭 마이너스 수익률", en: "Undeployable cash — large institutional cash storage cost vs small negative yield" },
    { icon: "🔮", ko: "디플레이션 기대 — 실질 수익률이 플러스일 수 있음", en: "Deflation expectations — real yield could be positive" },
    { icon: "📈", ko: "가격 차익 기대 — 더 내려갈 것이라는 베팅 (금리 하락 = 채권 가격 상승)", en: "Capital gain expectation — betting yields fall further (lower yield = higher price)" },
    { icon: "🌍", ko: "통화 헤지 — 외국인 투자자의 환헤지 비용 차감 시 실질 플러스", en: "FX hedge — for foreign investors, after hedge cost may be positive" },
    { icon: "🔒", ko: "안전 도피 — 위기 시 손실 확정이어도 '안전'이 더 중요", en: "Safe haven — even guaranteed loss, 'safety' matters more in crisis" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "마이너스 채권을 사는 6가지 이유" : "6 Reasons to Buy Negative-Yielding Bonds"}</p>
        </div>
        <div className="p-5 sm:p-8 grid sm:grid-cols-2 gap-3">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }} className="rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-3">
              <p className="text-base mb-1">{r.icon}</p>
              <p className="text-[12px] text-violet-700 dark:text-violet-300">{ko ? r.ko : r.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: German Bund 10yr yield -0.71%
const bundYieldData = [
  { date: "Jan '16", yield: 0.63 }, { date: "Jul '16", yield: -0.19 }, { date: "Jan '17", yield: 0.43 },
  { date: "Jan '18", yield: 0.52 }, { date: "Jan '19", yield: 0.24 }, { date: "Aug '19", yield: -0.71 },
  { date: "Jan '20", yield: -0.22 }, { date: "Jan '21", yield: -0.55 }, { date: "Jan '22", yield: -0.12 },
  { date: "Jul '22", yield: 1.24 }, { date: "Jan '23", yield: 2.57 },
];

function BundYieldChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "독일 국채(Bund) 10년물 수익률 (%)" : "German Bund 10yr Yield (%)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={bundYieldData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="bundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 8, fill: "#9ca3af" }} interval={2} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "수익률" : "Yield"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />
                <ReferenceLine x="Aug '19" stroke="#ef4444" strokeDasharray="4 2" label={{ value: ko ? "-0.71% 최저" : "-0.71% trough", fontSize: 9, fill: "#ef4444", position: "insideTopLeft" }} />
                <Area type="monotone" dataKey="yield" stroke={ACCENT} fill="url(#bundGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[{ l: ko ? "2019.8 최저" : "Aug 2019 low", v: "-0.71%", c: "text-red-500" }, { l: ko ? "마이너스 기간" : "Negative period", v: "2016–2022", c: "text-violet-500" }, { l: ko ? "2023 금리" : "2023 yield", v: "2.5%+", c: "text-emerald-500" }].map((c) => (
              <div key={c.l} className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3 text-center">
                <p className="text-[9px] text-gray-400 mb-1">{c.l}</p>
                <p className={`text-lg font-black ${c.c}`}>{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: 2022 normalization
const normData = [
  { q: "2021 Q4", rate: -0.50 }, { q: "2022 Q1", rate: -0.50 }, { q: "2022 Q2", rate: 0.00 },
  { q: "2022 Q3", rate: 1.25 }, { q: "2022 Q4", rate: 2.50 }, { q: "2023 Q1", rate: 3.50 },
  { q: "2023 Q3", rate: 4.00 },
];

function NormalizationChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "2022 금리 정상화 — 450bp 인상 속도" : "2022 Rate Normalization — 450bp Hiking Speed"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={normData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="q" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "기준금리" : "Policy rate"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <ReferenceLine y={0} stroke="#9ca3af" />
                <Bar dataKey="rate" fill={ACCENT} radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "-0.50% → +4.00%: 역사상 가장 빠른 ECB 인상 사이클" : "-0.50% → +4.00%: fastest ECB hiking cycle in history"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Legacy lessons
function LegacyLessonsVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const lessons = [
    { icon: "📚", ko: "수익률은 언제든 마이너스가 될 수 있다 — '채권은 이자를 준다'는 당연한 전제가 깨짐", en: "Yields can go negative any time — the premise 'bonds pay interest' was shattered" },
    { icon: "⚡", ko: "디플레이션+통화정책이 채권 시장을 지배한다 — 펀더멘털보다 중앙은행", en: "Deflation + monetary policy dominate bond markets — central bank > fundamentals" },
    { icon: "📉", ko: "Duration Risk는 양방향 — 금리가 오르면 장기 채권은 폭락 (2022년 재확인)", en: "Duration risk is two-way — rising rates crush long bonds (reconfirmed 2022)" },
    { icon: "🌐", ko: "NIRP의 부작용 — 은행 수익성 압박, 좀비기업 생존, 자산 버블", en: "NIRP side effects — bank profitability squeeze, zombie firm survival, asset bubbles" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "마이너스 금리 시대가 남긴 교훈" : "Lessons from the Negative Rate Era"}</p>
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
  return [
    <EcbRateChart key="0" lang={lang} />,
    <ReasonsVisual key="1" lang={lang} />,
    <BundYieldChart key="2" lang={lang} />,
    <NormalizationChart key="3" lang={lang} />,
    <LegacyLessonsVisual key="4" lang={lang} />,
  ][i] ?? null;
}

export default function GermanyNegativeYieldClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
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
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">
              {ko ? deal.title : deal.titleEn}
            </motion.h1>
            {ko && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">{deal.titleEn}</motion.p>}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? deal.excerpt : deal.excerptEn}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{deal.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
        </div>
        {deal.executiveSummary && (
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="max-w-3xl mx-auto px-5 pt-4">
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{ko ? "핵심 요약" : "Key Takeaways"}</p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-violet-800 dark:text-violet-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />{point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? "딜 스냅샷" : "Deal Snapshot"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2" style={{ borderColor: "#ddd6fe" }}>
              <div className="px-5 py-3" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "독일 마이너스 금리 국채 — 핵심 수치" : "German Negative Yield Bunds — Key Figures"}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x bg-white dark:bg-gray-950" style={{ borderColor: "#ddd6fe" }}>
                {deal.snapshot.map((row, i) => (
                  <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{row.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x border-t-2" style={{ borderColor: "#ddd6fe" }}>
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "ECB 첫 마이너스" : "First ECB Negative"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">2014</p>
                </div>
                <div className="px-4 py-4 text-center bg-red-50 dark:bg-red-900/20">
                  <p className="text-[10px] text-red-500 uppercase font-bold mb-1">{ko ? "Bund 최저 수익률" : "Bund Trough Yield"}</p>
                  <p className="text-2xl font-black text-red-600 dark:text-red-400">-0.71%</p>
                  <p className="text-[9px] text-red-400 mt-0.5">Aug 2019</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "2022 정상화" : "2022 Normalization"}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>+450bp</p>
                </div>
              </div>
            </motion.div>
          </motion.section>
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? section.heading : section.headingEn}</h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
              </motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
                  ))}
                </div>
              </div>
              {getVisual(i, lang)}
            </motion.section>
          ))}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "핵심 용어" : "Key Terms"}</motion.h2>
            <div className="mt-5 space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>{i + 1}</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{ko ? term.term : term.termEn}</span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">{ko ? term.definition : term.definitionEn}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "딜 평가" : "Deal Assessment"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5">
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p>
                  <ul className="space-y-2">{(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{p}</li>)}</ul>
                </motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p>
                  <ul className="space-y-2">{(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{r}</li>)}</ul>
                </motion.div>
              </div>
            </motion.section>
          )}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />
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
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:bg-violet-50/40 dark:hover:bg-violet-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 transition-colors truncate">{slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "참고 자료" : "References"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>{ref.id}</span>
                    <span>
                      {ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}
                      {ref.url ? <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>{ref.title}</a> : <span>{ref.title}</span>}
                      {ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}
                      {ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
