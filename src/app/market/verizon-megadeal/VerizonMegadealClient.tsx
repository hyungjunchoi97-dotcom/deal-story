"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell, AreaChart, Area, ReferenceLine,
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
const ACCENT = "#f97316";
const ACCENT_DARK = "#7c2d12";
const ACCENT_LIGHT = "rgb(255 247 237)";

// Visual 1: M&A Deal Structure — how $130B was financed
function DealStructureVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "💵", label: ko ? "현금 $580억" : "Cash $58B", pct: "45%", note: ko ? "기존 현금 및 브릿지론" : "Existing cash + bridge loans", color: "#f97316" },
    { icon: "📈", label: ko ? "주식 발행 $600억" : "Stock Issuance $60B", pct: "46%", note: ko ? "Vodafone 주주에게 Verizon 주식 지급" : "Verizon shares given to Vodafone shareholders", color: "#fb923c" },
    { icon: "🏦", label: ko ? "회사채 $490억" : "Corporate Bonds $49B", pct: "38%", note: ko ? "역대 최대 IG 회사채 — 하루 만에 완성" : "Largest IG corporate bond ever — completed in one day", color: "#ea580c" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "보다폰 $1,300억 M&A — 자금 조달 구조" : "Vodafone $130B M&A — Financing Structure"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }} className="flex items-center gap-4 rounded-xl border border-orange-200 dark:border-orange-700 p-4" style={{ background: ACCENT_LIGHT }}>
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{item.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black" style={{ color: item.color }}>{item.pct}</p>
                  <p className="text-[10px] text-gray-400">{ko ? "전체 중" : "of total"}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-orange-300 dark:border-orange-600 p-3 text-center" style={{ background: "rgb(254 242 232)" }}>
            <p className="text-xs font-bold text-orange-800 dark:text-orange-300">{ko ? "총 $1,300억 = $580억(현금) + $600억(주식) + $490억(채권)" : "Total $130B = $58B (cash) + $60B (stock) + $49B (bonds)"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 2: 8 Tranche Breakdown
function TrancheChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { t: ko ? "3년 변동" : "3yr FRN", sz: 0.5, color: "#fed7aa" },
    { t: ko ? "3년 고정" : "3yr Fixed", sz: 2.25, color: "#fdba74" },
    { t: ko ? "5년" : "5yr", sz: 3.25, color: "#fb923c" },
    { t: ko ? "7년" : "7yr", sz: 4.0, color: "#f97316" },
    { t: ko ? "10년" : "10yr", sz: 11.25, color: "#ea580c" },
    { t: ko ? "20년" : "20yr", sz: 6.0, color: "#dc2626" },
    { t: ko ? "30년" : "30yr", sz: 15.25, color: "#b91c1c" },
    { t: ko ? "100년" : "100yr", sz: 6.5, color: "#7f1d1d" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "8개 트랑쉬 발행 규모 ($B) — 총 $490억" : "8 Tranches by Size ($B) — Total $49B"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 30, right: 8, left: 0, bottom: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="t" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} unit="B" />
                <Tooltip formatter={(v) => [`$${v}B`, ko ? "발행규모" : "Size"]} contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="sz" radius={[4, 4, 0, 0]}>
                  {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-2">{ko ? "30년물 $152.5억이 최대 — 연기금·생보사 수요 집중" : "30yr $15.25B was largest — concentrated pension/insurer demand"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 3: NIC (New Issue Concession) comparison
function NicVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const steps = [
    { step: "1", label: ko ? "초기 가이던스 제시" : "Initial Price Talk", detail: ko ? "T+165bp 수준 — 시장 대비 넉넉하게 설정" : "T+165bp level — generously set vs. secondary market", icon: "📢" },
    { step: "2", label: ko ? "오더북 누적" : "Orderbook Builds", detail: ko ? "$1,000억+ 오더 집결 — 발행규모의 2배+" : "$100B+ orders — 2x+ oversubscription", icon: "📚" },
    { step: "3", label: ko ? "NIC 타이트닝" : "NIC Tightening", detail: ko ? "20~25bp 타이트하게 최종 조임" : "Final pricing 20–25bp inside initial guidance", icon: "🎯" },
    { step: "4", label: ko ? "최종 발행 금리" : "Final Issue Rate", detail: ko ? "10년물 T+140bp → 기존 Verizon 채권 대비 약 25bp NIC" : "10yr T+140bp → ~25bp NIC vs. existing Verizon bonds", icon: "✅" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "NIC(신규 발행 프리미엄) 북빌딩 과정" : "NIC (New Issue Concession) Bookbuilding Process"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-700" />
            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }} className="flex gap-4 relative pl-0">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center text-lg" style={{ background: ACCENT_LIGHT }}>
                    {s.icon}
                  </div>
                  <div className="flex-1 rounded-xl border border-orange-100 dark:border-orange-800 p-3" style={{ background: ACCENT_LIGHT }}>
                    <p className="font-bold text-xs text-orange-800 dark:text-orange-300">{s.label}</p>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">{s.detail}</p>
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

// Visual 4: 2013 IG Market — Interest Rate Environment
function IgMarketChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { yr: "2010", tsy: 3.22, igSpread: 180 },
    { yr: "2011", tsy: 2.79, igSpread: 200 },
    { yr: "2012", tsy: 1.76, igSpread: 155 },
    { yr: "2013", tsy: 2.35, igSpread: 130 },
    { yr: "2014", tsy: 2.54, igSpread: 120 },
    { yr: "2015", tsy: 2.27, igSpread: 148 },
    { yr: "2016", tsy: 1.84, igSpread: 136 },
    { yr: "2017", tsy: 2.33, igSpread: 107 },
    { yr: "2018", tsy: 2.91, igSpread: 128 },
    { yr: "2019", tsy: 2.14, igSpread: 121 },
    { yr: "2020", tsy: 0.93, igSpread: 147 },
    { yr: "2021", tsy: 1.45, igSpread: 93 },
    { yr: "2022", tsy: 3.88, igSpread: 153 },
    { yr: "2023", tsy: 4.25, igSpread: 112 },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "미국 10년물 국채 금리 (%) — 2010~2023" : "US 10yr Treasury Yield (%) — 2010–2023"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 30, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="igGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="yr" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} unit="%" domain={[0, 5]} />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "10년 국채" : "10yr Treasury"]} contentStyle={{ fontSize: 11 }} />
                <ReferenceLine x="2013" stroke={ACCENT} strokeDasharray="4 2" label={{ value: ko ? "버라이즌 딜" : "Verizon Deal", fontSize: 10, fill: ACCENT, position: "top" }} />
                <Area type="monotone" dataKey="tsy" stroke={ACCENT} fill="url(#igGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-2">{ko ? "2013년 국채 2.35% — 역사적 저금리. 기관 투자자들은 회사채로 수익률 추구" : "2013 Treasury 2.35% — historical lows. Institutions chasing yield in corporate bonds"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 5: Post-Verizon Megadeal Legacy
function MegadealLegacyVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🍎", title: ko ? "Apple 2013년 10월, $170억" : "Apple Oct 2013, $17B", desc: ko ? "버라이즌 딜 1달 후 — 세금 최적화 목적. 이후 연 $100~200억 상시 발행체 등극" : "1 month after Verizon — tax optimization. Became a regular $10–20B/yr issuer" },
    { icon: "📡", title: ko ? "AT&T 2016년, $220억" : "AT&T 2016, $22B", desc: ko ? "DirecTV 인수 M&A 자금조달. 버라이즌 모델 직접 계승" : "DirecTV M&A financing. Direct continuation of the Verizon model" },
    { icon: "🏗️", title: ko ? "부채의 황금시대 (2015~2019)" : "Golden Age of Leverage (2015–2019)", desc: ko ? "저금리 환경에서 기업들의 채권 활용 자사주매입·M&A·배당이 표준 전략이 됨" : "Corporate bonds for buybacks/M&A/dividends became the standard playbook in low-rate era" },
    { icon: "📐", title: ko ? "$500억 상한선 붕괴" : "The $50B Ceiling Broken", desc: ko ? "이전 실질 한계 $200~300억 → 이후 IG 메가딜을 '예외'가 아닌 '선택지'로 인식" : "Previous $20–30B practical limit → IG megadeals now viewed as a viable option, not exception" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "버라이즌 딜이 열어준 메가딜 시대" : "The Megadeal Era Opened by the Verizon Deal"}</p>
        </div>
        <div className="p-5 sm:p-8 grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }} className="rounded-xl border border-orange-200 dark:border-orange-700 p-4" style={{ background: ACCENT_LIGHT }}>
              <span className="text-xl block mb-2">{item.icon}</span>
              <p className="font-bold text-xs text-orange-900 dark:text-orange-300 mb-1">{item.title}</p>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(sectionIndex: number, lang: Lang) {
  switch (sectionIndex) {
    case 0: return <DealStructureVisual lang={lang} />;
    case 1: return <TrancheChart lang={lang} />;
    case 2: return <NicVisual lang={lang} />;
    case 3: return <IgMarketChart lang={lang} />;
    case 4: return <MegadealLegacyVisual lang={lang} />;
    default: return null;
  }
}

export default function VerizonMegadealClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* Breadcrumb */}
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
          <span>/</span>
          <Link href={ko ? "/market" : "/en/market"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "딜 스토리 — 금융시장" : "Deal Story — Markets"}</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300">{ko ? deal.title : deal.titleEn}</span>
        </motion.nav>

        {/* Hero */}
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border" style={{ background: ACCENT_LIGHT, color: ACCENT_DARK, borderColor: "#fdba74" }}>
            <span>🏦</span>
            <span>{ko ? deal.categoryLabel : deal.categoryLabelEn}</span>
          </motion.div>
          <motion.h1 variants={fadeUp(0.05)} className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-4">
            {ko ? deal.title : deal.titleEn}
          </motion.h1>
          <motion.p variants={fadeUp(0.1)} className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko ? deal.excerpt : deal.excerptEn}
          </motion.p>

          {/* Snapshot */}
          <motion.div variants={fadeUp(0.15)} className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden mb-8">
            {deal.snapshot.map((s, i) => (
              <div key={i} className="p-3 sm:p-4 border-r last:border-r-0 border-gray-200/60 dark:border-gray-700/60 text-center">
                <p className="text-[10px] text-gray-400 mb-1">{ko ? s.labelKo : s.labelEn}</p>
                <p className="font-black text-sm sm:text-base" style={{ color: ACCENT }}>{s.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Callout */}
          <motion.div variants={fadeUp(0.2)} className="rounded-2xl border-l-4 p-5 sm:p-6 mb-10" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
            <p className="text-xs font-bold mb-2" style={{ color: ACCENT_DARK }}>{ko ? "핵심 한 줄 요약" : "Key Takeaway"}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {ko
                ? "$490억 회사채를 단 하루 만에 — 적정 NIC, 8개 트랑쉬, $1,000억+ 오더북. M&A 채권 파이낸싱의 교과서이자 메가딜 시대를 연 역사적 딜."
                : "$49B corporate bond in a single day — right NIC, 8 tranches, $100B+ orderbook. The textbook of M&A bond financing and the deal that opened the megadeal era."}
            </p>
          </motion.div>
        </motion.div>

        {/* Executive Summary */}
        {deal.executiveSummary && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "핵심 요약" : "Executive Summary"}
            </motion.h2>
            <motion.ul variants={stagger} className="flex flex-col gap-2">
              {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((pt, i) => (
                <motion.li key={i} variants={fadeUp(i * 0.05)} className="flex gap-3 rounded-xl border border-orange-100 dark:border-orange-900 p-3 sm:p-4 text-sm text-gray-700 dark:text-gray-300" style={{ background: ACCENT_LIGHT }}>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                  <span className="leading-relaxed">{pt}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        )}

        {/* Sections */}
        {deal.sections.map((sec, idx) => (
          <motion.section key={idx} initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-14">
            <motion.h2 variants={fadeUp(0)} className="text-xl font-black leading-tight mb-4 tracking-tight">
              {ko ? sec.heading : sec.headingEn}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="prose prose-sm max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {ko ? sec.body : sec.bodyEn}
            </motion.div>
            {getVisual(idx, lang)}
          </motion.section>
        ))}

        {/* Key Terms */}
        {deal.keyTerms.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <motion.div variants={stagger} className="flex flex-col gap-3">
              {deal.keyTerms.map((kt, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className="rounded-xl border border-orange-100 dark:border-orange-900 p-4" style={{ background: ACCENT_LIGHT }}>
                  <p className="font-bold text-sm mb-1" style={{ color: ACCENT_DARK }}>{ko ? kt.term : kt.termEn}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? kt.definition : kt.definitionEn}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Assessment */}
        {deal.assessment && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "평가" : "Assessment"}
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div variants={fadeUp(0.05)} className="rounded-xl border border-green-200 dark:border-green-800 p-4 bg-green-50 dark:bg-green-950/30">
                <p className="font-bold text-xs text-green-700 dark:text-green-400 mb-3">✅ {ko ? "긍정 요인" : "Positives"}</p>
                <ul className="flex flex-col gap-2">
                  {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                    <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex gap-2"><span className="text-green-500 flex-shrink-0">•</span>{p}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-red-200 dark:border-red-800 p-4 bg-red-50 dark:bg-red-950/30">
                <p className="font-bold text-xs text-red-700 dark:text-red-400 mb-3">⚠️ {ko ? "위험 요인" : "Risks"}</p>
                <ul className="flex flex-col gap-2">
                  {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                    <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex gap-2"><span className="text-red-500 flex-shrink-0">•</span>{r}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* FAQ */}
        {deal.faq && deal.faq.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "자주 묻는 질문" : "FAQ"}
            </motion.h2>
            <FaqAccordion items={deal.faq.map((f) => ({ q: ko ? f.q : (f.qEn ?? f.q), a: ko ? f.a : (f.aEn ?? f.a) }))} accent={ACCENT} />
          </motion.section>
        )}

        {/* References */}
        {deal.references && deal.references.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "참고 자료" : "References"}
            </motion.h2>
            <motion.ol variants={stagger} className="flex flex-col gap-2">
              {deal.references.map((ref) => (
                <motion.li key={ref.id} variants={fadeUp(0.03)} className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-medium text-gray-700 dark:text-gray-300">[{ref.id}]</span>{" "}
                  {ref.author}. <em>{ref.title}</em>. {ref.source}, {ref.year}.{" "}
                  {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600 break-all">{ref.url}</a>}
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>
        )}

        {/* Related */}
        {(deal.relatedDealSlugs?.length ?? 0) > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={stagger} className="mb-12">
            <motion.h2 variants={fadeUp(0)} className="text-lg font-black mb-4" style={{ color: ACCENT_DARK }}>
              {ko ? "관련 딜 스토리" : "Related Deals"}
            </motion.h2>
            <div className="flex flex-wrap gap-2">
              {deal.relatedDealSlugs?.map((slug) => (
                <Link key={slug} href={ko ? `/market/${slug}` : `/en/market/${slug}`} className="px-4 py-2 rounded-full border text-xs font-medium transition-colors hover:opacity-80" style={{ borderColor: ACCENT, color: ACCENT_DARK, background: ACCENT_LIGHT }}>
                  {slug}
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Share */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP} transition={{ duration: 0.5 }} className="mt-10 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />
        </motion.div>
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
    </div>
  );
}
