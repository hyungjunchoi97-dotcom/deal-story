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

const ACCENT = "#10b981";
const ACCENT_DARK = "#065f46";
const ACCENT_LIGHT = "rgb(236 253 245)";

// Chart 1: EU joint debt taboo → breakthrough
function JointDebtBreakthroughVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🚫", labelKo: "2010년 재정위기 당시", labelEn: "2010 Debt Crisis", textKo: "공동채 거부 — 양자대출+ESM으로 대응. 도덕적 해이 우려 지속", textEn: "Joint debt rejected — bilateral loans + ESM used. Moral hazard concerns persist", color: "text-red-700 dark:text-red-300", bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-700" },
    { icon: "🦠", labelKo: "2020년 코로나19", labelEn: "2020 COVID-19", textKo: "원인이 '재정 방만'이 아닌 외부 충격 → 정치적 정당성 확보", textEn: "Cause was external shock, not fiscal mismanagement → political legitimacy secured", color: "text-amber-700 dark:text-amber-300", bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-200 dark:border-amber-700" },
    { icon: "🤝", labelKo: "독일·프랑스 합의 (2020.5)", labelEn: "Germany-France Agreement (May 2020)", textKo: "메르켈-마크롱 €5000억 공동기금 제안 → EU 공동채 문이 열림", textEn: "Merkel-Macron €500B joint fund proposal → door to EU joint debt opens", color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "유럽 공동채 — 금기에서 현실로" : "EU Joint Debt — From Taboo to Reality"}</p>
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

// Chart 2: SURE orderbook
const sureOrderbookData = [
  { name: ko_lbl("발행 규모", "Issue Size"), value: 17, fill: "#d1d5db" },
  { name: ko_lbl("오더북", "Orderbook"), value: 233, fill: "#10b981" },
];
function ko_lbl(a: string, _b: string) { return a; }

function SureOrderbookChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { name: ko ? "발행 규모" : "Issue Size", value: 17 },
    { name: ko ? "오더북" : "Orderbook", value: 233 },
  ];
  const fills = ["#d1d5db", ACCENT];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "SURE 첫 발행 (2020.10) — 발행 규모 vs 오더북 (€B)" : "SURE First Issue (Oct 2020) — Size vs Orderbook (€B)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `€${v}B`} />
                <Tooltip formatter={(v) => [`€${v}B`, ""]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={fills[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 rounded-xl border border-emerald-100 dark:border-emerald-800 p-4" style={{ background: ACCENT_LIGHT }}>
            <p className="text-[11px] font-bold mb-2" style={{ color: ACCENT }}>{ko ? "오버서브스크립션 13.7배 — 역대 최대 SSA 오더북" : "13.7× Oversubscribed — Largest-Ever SSA Orderbook"}</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ l: ko ? "발행 규모" : "Issue Size", v: "€17B" }, { l: ko ? "오더북" : "Orderbook", v: "€233B" }, { l: ko ? "배수" : "Cover Ratio", v: "13.7×" }].map((c) => (
                <div key={c.l}>
                  <p className="text-[9px] text-gray-500 mb-1">{c.l}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: NGEU allocation by country
const ngeuData = [
  { country: "Italy", grants: 69, loans: 123 },
  { country: "Spain", grants: 77, loans: 84 },
  { country: "France", grants: 41, loans: 18 },
  { country: "Germany", grants: 26, loans: 0 },
  { country: "Others", grants: 87, loans: 75 },
];

function NgeuAllocationChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "NGEU 국가별 배분 구조 (€B) — 보조금+대출" : "NGEU Allocation by Country (€B) — Grants + Loans"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ngeuData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="country" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `€${v}B`} />
                <Tooltip formatter={(v, name) => [`€${v}B`, name === "grants" ? (ko ? "보조금" : "Grants") : (ko ? "대출" : "Loans")]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="grants" stackId="a" fill={ACCENT} name="grants" />
                <Bar dataKey="loans" stackId="a" fill="#6ee7b7" name="loans" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex gap-4 justify-center">
            {[{ color: ACCENT, label: ko ? "보조금 (상환 불필요)" : "Grants (No repayment)" }, { color: "#6ee7b7", label: ko ? "대출 (상환 필요)" : "Loans (Repayable)" }].map((l) => (
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

// Chart 4: EU Green Bond issuance
const euGreenData = [
  { year: "2021", amt: 12 },
  { year: "2022", amt: 37 },
  { year: "2023", amt: 42 },
  { year: "2024", amt: 55 },
];

function EuGreenBondChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "EU NGEU 그린본드 연간 발행액 (€B)" : "EU NGEU Green Bond Annual Issuance (€B)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={euGreenData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="euGreenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `€${v}B`} />
                <Tooltip formatter={(v) => [`€${v}B`, ko ? "그린본드 발행" : "Green bond issuance"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Area type="monotone" dataKey="amt" stroke={ACCENT} fill="url(#euGreenGrad)" strokeWidth={2} dot={{ fill: ACCENT, strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-center text-gray-500 mt-3">{ko ? "NGEU 조달의 30%를 EU 그린본드로 발행 — 단일 최대 그린본드 발행체" : "30% of NGEU funded via EU Green Bonds — world's single largest green bond issuer"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: EU vs member state borrowing
function EuVsMemberStateVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🏛️", labelKo: "EU 채권 (AAA/Aaa)", labelEn: "EU Bonds (AAA/Aaa)", noteKo: "27개 회원국 공동 보증 → 최고 신용등급", noteEn: "27 member states joint guarantee → top rating", color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700" },
    { icon: "🇮🇹", labelKo: "이탈리아 국채 (Baa3/BBB)", labelEn: "Italy BTP (Baa3/BBB)", noteKo: "EU보다 약 150~200bp 높은 금리", noteEn: "150–200bp higher yield than EU bonds", color: "text-amber-700 dark:text-amber-300", bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-200 dark:border-amber-700" },
    { icon: "⚖️", labelKo: "EU 채권의 의미", labelEn: "Significance of EU Bonds", noteKo: "신용 강한 국가 없이도 AAA — 유럽 통합의 경제적 효과 구체화", noteEn: "AAA without any single strong country — European integration's economic value made concrete", color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-700" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "EU 채권 vs 회원국 채권 — 신용등급의 차이" : "EU Bonds vs Member State Bonds — Credit Rating Difference"}</p>
        </div>
        <div className="p-5 sm:p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }} className={`rounded-xl border p-4 ${item.bg} ${item.border}`}>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className={`text-[13px] font-bold ${item.color} mb-1`}>{ko ? item.labelKo : item.labelEn}</p>
                  <p className={`text-[12px] leading-relaxed ${item.color} opacity-85`}>{ko ? item.noteKo : item.noteEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  const visuals = [
    <JointDebtBreakthroughVisual key="0" lang={lang} />,
    <SureOrderbookChart key="1" lang={lang} />,
    <NgeuAllocationChart key="2" lang={lang} />,
    <EuGreenBondChart key="3" lang={lang} />,
    <EuVsMemberStateVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

export default function EuNgeuBondsClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
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
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/40">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "EU NGEU/SURE 채권 — 핵심 수치" : "EU NGEU/SURE Bonds — Key Figures"}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100 dark:divide-emerald-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{row.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x divide-emerald-100 dark:divide-emerald-900/30 border-t-2 border-emerald-100 dark:border-emerald-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "NGEU 규모" : "NGEU Size"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">€800B+</p>
                </div>
                <div className="px-4 py-4 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 uppercase font-bold mb-1">{ko ? "첫 오더북" : "First Orderbook"}</p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">€233B</p>
                  <p className="text-[9px] text-emerald-400 mt-0.5">13.7× cover</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "등급" : "Rating"}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>AAA/Aaa</p>
                  <p className="text-[9px] mt-0.5" style={{ color: ACCENT }}>{ko ? "최고 등급" : "Top Grade"}</p>
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
