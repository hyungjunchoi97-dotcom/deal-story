"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const ACCENT = "#10b981";
const ACCENT_DARK = "#065f46";
const ACCENT_LIGHT = "rgb(236 253 245)";

// Chart 1: Market origin story
function OriginStoryVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const steps = [
    { icon: "🏦", labelKo: "2007년 AP2/AP3 요청", labelEn: "2007: AP2/AP3 Request", noteKo: "기후 연계 채권 원합니다", noteEn: "We want climate-linked bonds", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-700", text: "text-blue-700 dark:text-blue-300" },
    { icon: "🤝", labelKo: "세계은행 + SEB 협업", labelEn: "World Bank + SEB Design", noteKo: "Use-of-Proceeds 구조 설계", noteEn: "Designing use-of-proceeds structure", bg: "bg-teal-50 dark:bg-teal-900/20", border: "border-teal-200 dark:border-teal-700", text: "text-teal-700 dark:text-teal-300" },
    { icon: "📄", labelKo: "외부 검증 + 보고 의무", labelEn: "External Verification", noteKo: "독립 기관 감사, 사후 보고", noteEn: "Independent audit, post-issuance report", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300" },
    { icon: "🌱", labelKo: "2008년 11월 최초 발행", labelEn: "Nov 2008: First Green Bond", noteKo: "SEK 23억 — 세계 최초 그린본드", noteEn: "SEK 2.3B — world's first green bond", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-300 dark:border-green-600", text: "text-green-700 dark:text-green-300" },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "세계 최초 그린본드 탄생 과정" : "How the World's First Green Bond Was Born"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="hidden sm:flex items-start gap-3">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 relative">
                <div className={`rounded-xl border p-4 ${s.bg} ${s.border} text-center`}>
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <p className={`text-[11px] font-bold leading-tight ${s.text} mb-1`}>{ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[9px] opacity-75 leading-snug ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300 dark:text-gray-600 text-lg font-bold">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-teal-400 to-green-500" />
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className={`relative rounded-xl border p-3 ${s.bg} ${s.border}`}>
                  <p className={`text-[12px] font-bold leading-tight ${s.text}`}>{s.icon} {ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[10px] mt-1 opacity-75 ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: Green Bond market growth (area chart)
const growthData = [
  { year: "2008", bn: 0.44 },
  { year: "2012", bn: 3.2 },
  { year: "2014", bn: 36.6 },
  { year: "2016", bn: 93.4 },
  { year: "2018", bn: 171 },
  { year: "2020", bn: 297 },
  { year: "2022", bn: 487 },
  { year: "2023", bn: 575 },
];

function GreenBondGrowthChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "글로벌 그린본드 연간 발행액 ($B)" : "Global Green Bond Annual Issuance ($B)"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                  formatter={(v) => [`$${v}B`, ko ? "발행액" : "Issuance"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <Area type="monotone" dataKey="bn" stroke={ACCENT} fill="url(#greenGrad)" strokeWidth={2} dot={{ fill: ACCENT, strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: ko ? "최초 발행 (2008)" : "First Issuance (2008)", val: "$0.44B", color: "text-gray-600 dark:text-gray-400" },
              { label: ko ? "2022년" : "Year 2022", val: "$487B", color: "text-emerald-600 dark:text-emerald-400" },
              { label: ko ? "15년 성장" : "15-yr Growth", val: "1,100×", color: "text-emerald-600 dark:text-emerald-400" },
            ].map((c) => (
              <div key={c.label} className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3 text-center">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{c.label}</p>
                <p className={`text-lg font-black ${c.color}`}>{c.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: Issuer type evolution
const issuerData = [
  { year: "2008–12", ssa: 100, corp: 0, sov: 0 },
  { year: "2013–15", ssa: 55, corp: 45, sov: 0 },
  { year: "2016–18", ssa: 38, corp: 46, sov: 16 },
  { year: "2019–21", ssa: 35, corp: 44, sov: 21 },
  { year: "2022–23", ssa: 30, corp: 43, sov: 27 },
];

function IssuerEvolutionChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "그린본드 발행 주체 다양화 — 시기별 비중 (%)" : "Green Bond Issuer Diversification — Share by Period (%)"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={issuerData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  formatter={(v, name) => [`${v}%`, name === "ssa" ? "SSA" : name === "corp" ? (ko ? "기업" : "Corporate") : (ko ? "국가" : "Sovereign")]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <Bar dataKey="ssa" stackId="a" fill="#6ee7b7" name="ssa" />
                <Bar dataKey="corp" stackId="a" fill={ACCENT} name="corp" />
                <Bar dataKey="sov" stackId="a" fill={ACCENT_DARK} name="sov" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex gap-4 justify-center flex-wrap">
            {[{ color: "#6ee7b7", label: "SSA" }, { color: ACCENT, label: ko ? "기업" : "Corporate" }, { color: ACCENT_DARK, label: ko ? "국가" : "Sovereign" }].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                <span className="text-[11px] text-gray-500 dark:text-gray-400">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: SSA advantage visual
function SsaAdvantageVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "⭐", labelKo: "AAA 신용등급", labelEn: "AAA Credit Rating", textKo: "투자자가 신용 리스크 없이 그린 개념에 집중 가능", textEn: "Investors can focus on green concept without credit risk", color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700" },
    { icon: "🌍", labelKo: "개발금융 사명", labelEn: "Development Finance Mandate", textKo: "이미 기후 프로젝트 대규모 집행 중 — 별도 포트폴리오 불필요", textEn: "Already deploying climate projects at scale — no new portfolio needed", color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-700" },
    { icon: "🏛️", labelKo: "글로벌 투자자 기반", labelEn: "Global Investor Base", textKo: "세계 주요 기관투자자가 이미 보유 — 신규 투자자 발굴 부담 낮음", textEn: "Already held by major global institutions — low need to find new buyers", color: "text-indigo-700 dark:text-indigo-300", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-700" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "세계은행이 최초 발행사로 적합했던 3가지 이유" : "3 Reasons the World Bank Was the Right First Issuer"}
          </p>
        </div>
        <div className="p-5 sm:p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }} className={`rounded-xl border p-4 ${item.bg} ${item.border}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className={`text-[13px] font-bold ${item.color} mb-1`}>{ko ? item.labelKo : item.labelEn}</p>
                  <p className={`text-[12px] leading-relaxed ${item.color} opacity-90`}>{ko ? item.textKo : item.textEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Greenium & challenges
const greeniumData = [
  { name: ko_label("그린본드", "Green Bond"), spread: -7 },
  { name: ko_label("일반채", "Conventional"), spread: 0 },
];
function ko_label(ko: string, en: string) { return ko; }

function GreeniumVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { name: ko ? "그린본드" : "Green Bond", spread: -7 },
    { name: ko ? "일반채" : "Conventional", spread: 0 },
  ];
  const challenges = [
    { icon: "⚠️", labelKo: "그린워싱", labelEn: "Greenwashing", noteKo: "라벨만 붙이고 실질 효과 없음", noteEn: "Label without real environmental impact" },
    { icon: "❓", labelKo: "추가성 부재", labelEn: "Lack of Additionality", noteKo: "그린본드 없어도 진행될 프로젝트", noteEn: "Projects proceeding regardless" },
    { icon: "📊", labelKo: "보고 불일치", labelEn: "Measurement Gap", noteKo: "발행사마다 다른 성과 측정 방법론", noteEn: "Inconsistent methodologies across issuers" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "Greenium(그린 프리미엄)과 한계" : "Greenium (Green Premium) and Limitations"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">{ko ? "Greenium — 그린본드 vs 일반채 수익률 (bp)" : "Greenium — Green vs Conventional Yield (bp)"}</p>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                    <YAxis domain={[-12, 4]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}bp`} />
                    <Tooltip formatter={(v) => [`${v}bp`, ko ? "수익률 차이" : "Yield diff"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                    <Bar dataKey="spread" radius={[4, 4, 0, 0]}>
                      {data.map((d, i) => <Cell key={i} fill={i === 0 ? ACCENT : "#d1d5db"} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 text-center">{ko ? "평균 5~15bp 낮은 수익률 = 발행사 조달 비용 절감" : "Avg 5–15bp lower yield = issuer cost saving"}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">{ko ? "주요 한계 및 비판" : "Key Limitations & Criticisms"}</p>
              <div className="space-y-2.5">
                {challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-3">
                    <span className="text-base flex-shrink-0">{c.icon}</span>
                    <div>
                      <p className="text-[12px] font-bold text-amber-700 dark:text-amber-300">{ko ? c.labelKo : c.labelEn}</p>
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 opacity-80">{ko ? c.noteKo : c.noteEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  const visuals = [
    <OriginStoryVisual key="0" lang={lang} />,
    <GreenBondGrowthChart key="1" lang={lang} />,
    <IssuerEvolutionChart key="2" lang={lang} />,
    <SsaAdvantageVisual key="3" lang={lang} />,
    <GreeniumVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

export default function WorldBankGreenBondClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
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
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{ko ? "마켓" : "Market"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "시장 창조" : "Market Creators"}</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">
              {ko ? deal.title : deal.titleEn}
            </motion.h1>
            {ko && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">{deal.titleEn}</motion.p>}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>
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
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-emerald-800 dark:text-emerald-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          {/* Deal Snapshot */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? "딜 스냅샷" : "Deal Snapshot"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/40">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "세계은행 최초 그린본드 — 핵심 수치" : "World Bank First Green Bond — Key Figures"}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100 dark:divide-emerald-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{ko ? row.value : (row.valueEn ?? row.value)}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x divide-emerald-100 dark:divide-emerald-900/30 border-t-2 border-emerald-100 dark:border-emerald-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "발행연도" : "Year"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">2008</p>
                </div>
                <div className="px-4 py-4 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 uppercase font-bold mb-1">{ko ? "발행 규모" : "Size"}</p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">SEK 2.3B</p>
                  <p className="text-[9px] text-emerald-400 mt-0.5">~$440M</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "등급" : "Rating"}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>AAA/Aaa</p>
                  <p className="text-[9px] mt-0.5" style={{ color: ACCENT }}>{ko ? "세계 최초" : "World First"}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Sections */}
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

          {/* Key Terms */}
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

          {/* Assessment */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "딜 평가" : "Deal Assessment"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5">
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}

          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />

          {/* FAQ */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "자주 묻는 질문" : "Frequently Asked Questions"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <FaqAccordion items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={ACCENT} />
            </motion.section>
          )}

          {/* Related */}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-emerald-400 transition-colors text-sm flex-shrink-0">→</span>
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
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {/* References */}
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
