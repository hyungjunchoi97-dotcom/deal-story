"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
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

function DualRecourseVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "Pfandbrief의 이중 청구권 구조" : "Pfandbrief Dual Recourse Structure"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="rounded-xl border border-violet-200 dark:border-violet-700 p-5 bg-violet-50 dark:bg-violet-900/20">
            <p className="text-[12px] font-bold text-violet-700 dark:text-violet-300 mb-4 text-center">{ko ? "투자자의 두 가지 청구권" : "Investor's Two Claims"}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-700 p-4">
                <p className="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-2">① {ko ? "은행 청구권" : "Bank Claim"}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400">{ko ? "발행 은행에 대한 무담보 채권자 지위" : "Unsecured creditor claim against issuing bank"}</p>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-700 p-4">
                <p className="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-2">② {ko ? "커버 풀 청구권" : "Cover Pool Claim"}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400">{ko ? "분리 등록된 커버 자산(담보 대출)에 대한 우선 청구권" : "Priority claim on separately registered cover assets (collateral loans)"}</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-violet-100 dark:bg-violet-900/40 border border-violet-300 dark:border-violet-600 p-3 text-center">
              <p className="text-[12px] font-bold text-violet-700 dark:text-violet-300">{ko ? "은행 파산 시에도 → 커버 풀에서 우선 상환" : "Even if bank fails → priority repayment from cover pool"}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HistoryTimelineVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const milestones = [
    { year: "1769", ko: "프리드리히 대왕 포고령 — 최초 Pfandbrief", en: "Frederick the Great edict — first Pfandbrief" },
    { year: "1900", ko: "프로이센 주택금융법 — 법적 기반 정비", en: "Prussian Mortgage Banking Act — legal framework" },
    { year: "2005", ko: "독일 Pfandbrief법(PfandBG) 시행 — 통합 법전", en: "German Pfandbrief Act (PfandBG) — unified law" },
    { year: "2008", ko: "글로벌 금융위기 — MBS 붕괴, Pfandbrief 생존", en: "GFC — MBS collapse, Pfandbrief survives" },
    { year: "2019", ko: "EU 커버드본드 지침 — 유럽 표준화", en: "EU Covered Bond Directive — European standardization" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "Pfandbrief 250년 역사 — 핵심 이정표" : "250 Years of Pfandbrief — Key Milestones"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 to-violet-600" />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }} className="relative">
                  <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-violet-500 border-2 border-white dark:border-gray-900" />
                  <div className="rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-3">
                    <span className="text-[10px] font-black text-violet-500">{m.year}</span>
                    <p className="text-[12px] text-violet-700 dark:text-violet-300 mt-0.5">{ko ? m.ko : m.en}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MbsVsPfandbriefVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const compare = [
    { aspect: ko ? "자산 이전" : "Asset Transfer", mbs: ko ? "발행사 밖으로 True Sale" : "True Sale outside issuer", pfand: ko ? "발행사 내 커버 풀 유지" : "Stay in issuer as cover pool" },
    { aspect: ko ? "초과담보" : "Overcollateral", mbs: ko ? "트랜치별 달라짐" : "Varies by tranche", pfand: ko ? "법정 최소 초과담보 요건" : "Legal minimum overcollateral" },
    { aspect: ko ? "규제" : "Regulation", mbs: ko ? "계약에 의존" : "Contract-dependent", pfand: ko ? "PfandBG 법적 강제" : "PfandBG statutory" },
    { aspect: ko ? "2008년 결과" : "2008 Outcome", mbs: ko ? "시장 붕괴" : "Market collapse", pfand: ko ? "정상 거래 유지" : "Normal trading continued" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "MBS vs Pfandbrief — 구조 차이가 생존을 갈랐다" : "MBS vs Pfandbrief — Structure Decided Survival"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 pr-3 text-gray-500 font-bold">{ko ? "항목" : "Aspect"}</th>
                  <th className="text-left py-2 pr-3 text-amber-600 dark:text-amber-400 font-bold">MBS</th>
                  <th className="text-left py-2 text-violet-600 dark:text-violet-400 font-bold">Pfandbrief</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2.5 pr-3 text-gray-500 dark:text-gray-400 font-medium">{row.aspect}</td>
                    <td className="py-2.5 pr-3 text-amber-700 dark:text-amber-300">{row.mbs}</td>
                    <td className="py-2.5 text-violet-700 dark:text-violet-300">{row.pfand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const pfandbriefTypesData = [
  { name: ko_str("주택금융", "Mortgage"), pct: 70 },
  { name: ko_str("공공부문", "Public Sector"), pct: 23 },
  { name: ko_str("선박", "Ship"), pct: 4 },
  { name: ko_str("항공기", "Aircraft"), pct: 3 },
];
function ko_str(a: string, _b: string) { return a; }

function PfandbriefTypesChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { name: ko ? "주택금융" : "Mortgage", pct: 70 },
    { name: ko ? "공공부문" : "Public Sector", pct: 23 },
    { name: ko ? "선박" : "Ship", pct: 4 },
    { name: ko ? "항공기" : "Aircraft", pct: 3 },
  ];
  const fills = [ACCENT, "#a78bfa", "#c4b5fd", "#ddd6fe"];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "Pfandbrief 종류별 시장 비중 (%)" : "Pfandbrief Market Share by Type (%)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "비중" : "Share"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={fills[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const modernMarketData = [
  { year: "2005", amt: 580 },
  { year: "2008", amt: 770 },
  { year: "2012", amt: 590 },
  { year: "2016", amt: 480 },
  { year: "2020", amt: 410 },
  { year: "2023", amt: 400 },
];

function ModernMarketChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "독일 Pfandbrief 시장 규모 (€B)" : "German Pfandbrief Market Size (€B)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={modernMarketData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="pfandGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `€${v}B`} />
                <Tooltip formatter={(v) => [`€${v}B`, ko ? "Pfandbrief 잔액" : "Outstanding"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Area type="monotone" dataKey="amt" stroke={ACCENT} fill="url(#pfandGrad)" strokeWidth={2} dot={{ fill: ACCENT, strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "€400B+ 시장 — 유럽 최대 커버드본드 시장" : "€400B+ market — Europe's largest covered bond market"}</p>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  return [
    <HistoryTimelineVisual key="0" lang={lang} />,
    <DualRecourseVisual key="1" lang={lang} />,
    <MbsVsPfandbriefVisual key="2" lang={lang} />,
    <PfandbriefTypesChart key="3" lang={lang} />,
    <ModernMarketChart key="4" lang={lang} />,
  ][i] ?? null;
}

export default function GermanPfandbriefClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
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
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "독일 Pfandbrief — 핵심 수치" : "German Pfandbrief — Key Figures"}</p>
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
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "기원" : "Origin"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">1769</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "시장 규모" : "Market Size"}</p>
                  <p className="text-2xl font-black" style={{ color: ACCENT }}>€400B+</p>
                </div>
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "구조" : "Structure"}</p>
                  <p className="text-lg font-black text-gray-700 dark:text-gray-300">{ko ? "이중청구권" : "Dual Recourse"}</p>
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
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:bg-violet-50/40 dark:hover:bg-violet-900/20 transition-all" style={{ "--hover-border": ACCENT } as React.CSSProperties}>
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 transition-colors truncate">{slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">101</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">{slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">→</span>
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
