"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketConcept } from "@/data/market-101-concepts";

// ─── Types ────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ─── Animation constants ──────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";
const accentLight = "#ccfbf1";

// ─── Series nav ───────────────────────────────────────────────────────────────
const DCM_SERIES = [
  { slug: "dcm-overview",               ch: 0, title: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"    },
  { slug: "dcm-issuers",                ch: 1, title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"    },
  { slug: "dcm-investors",              ch: 2, title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"  },
  { slug: "dcm-bond-products",          ch: 3, title: (ko: boolean) => ko ? "Ch.3 상품"          : "Ch.3 Products"   },
  { slug: "dcm-international-markets",  ch: 4, title: (ko: boolean) => ko ? "Ch.4 국제채"        : "Ch.4 Intl"       },
  { slug: "dcm-deal-process",           ch: 5, title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"   : "Ch.5 Process"    },
  { slug: "dcm-pricing",                ch: 6, title: (ko: boolean) => ko ? "Ch.6 프라이싱"      : "Ch.6 Pricing"    },
  { slug: "dcm-structure-regulation",   ch: 7, title: (ko: boolean) => ko ? "Ch.7 구조·제도"     : "Ch.7 Regulation" },
];
const thisCh = 3;

// ─── Product data ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "senior",
    label: (ko: boolean) => ko ? "선순위 무담보채 (Senior Unsecured)" : "Senior Unsecured Bond",
    tier: (ko: boolean) => ko ? "IG 핵심 상품" : "Core IG Product",
    structure: (ko: boolean) => ko
      ? "무담보·선순위 청구권 — 부도 시 잔여자산 분배에서 선순위"
      : "Unsecured, senior claim — ranks ahead of subordinated debt in default",
    coupon: (ko: boolean) => ko ? "고정금리 또는 변동금리(FRN)" : "Fixed or floating rate (FRN)",
    tenor: "3, 5, 7, 10, 20, 30yr",
    investors: (ko: boolean) => ko ? "보험사·연기금·자산운용사" : "Insurers, pensions, asset managers",
    useOfProceeds: (ko: boolean) => ko ? "일반 기업 목적 (범용)" : "General corporate purposes (fungible)",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 1,
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
  },
  {
    id: "covered",
    label: (ko: boolean) => ko ? "커버드본드 (Covered Bond)" : "Covered Bond",
    tier: (ko: boolean) => ko ? "FIG 최우량 상품" : "FIG Premium Product",
    structure: (ko: boolean) => ko
      ? "이중보호: 발행은행 채권 + 담보자산풀(주택담보대출 등) 담보"
      : "Dual recourse: bank obligation + collateral pool (mortgages, public sector)",
    coupon: (ko: boolean) => ko ? "고정 — Senior Unsecured보다 낮은 스프레드" : "Fixed — tighter spread than Senior Unsecured",
    tenor: "2–15yr",
    investors: (ko: boolean) => ko ? "중앙은행·보험사·ECB 적격 자산" : "Central banks, insurers, ECB-eligible",
    useOfProceeds: (ko: boolean) => ko ? "주택담보대출·공공부문 채권 재파이낸싱" : "Refinancing mortgage/public sector loan pools",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 1,
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-700",
  },
  {
    id: "green",
    label: (ko: boolean) => ko ? "그린본드 / ESG 채권" : "Green / ESG Bond",
    tier: (ko: boolean) => ko ? "목적 지정 채권" : "Use-of-Proceeds Bond",
    structure: (ko: boolean) => ko
      ? "일반 Senior Unsecured와 동일 구조 — 발행대금이 환경/사회 프로젝트에 지정 사용"
      : "Same structure as Senior Unsecured — proceeds ring-fenced for green/social projects",
    coupon: (ko: boolean) => ko ? "일반 채권 대비 그린피엄(Greenium) 2–5bp 낮음" : "2–5bp tighter than vanilla equivalent (Greenium)",
    tenor: "5–30yr",
    investors: (ko: boolean) => ko ? "ESG 위임 펀드·연기금·SRI 운용사" : "ESG-mandated funds, pensions, SRI managers",
    useOfProceeds: (ko: boolean) => ko ? "재생에너지·친환경 건물·저탄소 인프라" : "Renewable energy, green buildings, low-carbon infrastructure",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 1,
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
  },
  {
    id: "at1",
    label: (ko: boolean) => ko ? "AT1 / CoCo (Additional Tier 1)" : "AT1 / CoCo Bond",
    tier: (ko: boolean) => ko ? "FIG 자본채 — 가장 위험한 채권" : "FIG Capital Bond — Most Complex",
    structure: (ko: boolean) => ko
      ? "영구채·쿠폰 취소 가능·PONV에서 원금 상각 또는 주식 전환"
      : "Perpetual, optional coupon cancellation, principal write-down or equity conversion at PONV",
    coupon: (ko: boolean) => ko ? "5–10%+ 고정 (고쿠폰) — 콜 옵션 5–10년" : "5–10%+ fixed high coupon — callable every 5–10yr",
    tenor: (ko: boolean) => ko ? "영구채 (만기 없음)" : "Perpetual (no stated maturity)",
    investors: (ko: boolean) => ko ? "HY 전문 펀드·헤지펀드·하이브리드 전문 AM" : "HY-dedicated funds, hedge funds, hybrid AM",
    useOfProceeds: (ko: boolean) => ko ? "바젤III AT1 자본 충족" : "Basel III Additional Tier 1 capital",
    caseStudy: { slug: "credit-suisse-at1", label: (ko: boolean) => ko ? "케이스: CS AT1 전액 상각 →" : "Case: CS AT1 Full Write-down →" },
    risk: 4,
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
  },
  {
    id: "hy",
    label: (ko: boolean) => ko ? "하이일드 채권 (High Yield Bond)" : "High Yield Bond",
    tier: (ko: boolean) => ko ? "LevFin 핵심 — BB~B 등급" : "LevFin Core — BB to B rated",
    structure: (ko: boolean) => ko
      ? "선순위 무담보 또는 담보부·코버넌트 헤비·콜 프리미엄(Make-whole / Call Schedule)"
      : "Senior secured or unsecured, covenant-heavy, call premium (make-whole / call schedule)",
    coupon: (ko: boolean) => ko ? "고정금리 7–12% — 시장 여건에 따라" : "Fixed 7–12% depending on market conditions",
    tenor: "5–8yr",
    investors: (ko: boolean) => ko ? "HY 전문 AM·헤지펀드·CLO" : "HY-dedicated AM, hedge funds, CLOs",
    useOfProceeds: (ko: boolean) => ko ? "LBO 인수자금·M&A·성장 자본·리파이낸싱" : "LBO acquisition, M&A, growth capex, refinancing",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 4,
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
  },
  {
    id: "pik",
    label: (ko: boolean) => ko ? "PIK 채권 (Payment-in-Kind)" : "PIK Bond",
    tier: (ko: boolean) => ko ? "후순위 · 최고위험" : "Junior Subordinated · Highest Risk",
    structure: (ko: boolean) => ko
      ? "현금 이자 대신 원금에 이자를 더해 (PIK toggle) — 현금 없는 기업에 유리"
      : "Interest accrues to principal (PIK toggle) instead of cash payment — ideal for cash-constrained issuers",
    coupon: (ko: boolean) => ko ? "12–18%+ (PIK 이자 적립)" : "12–18%+ (accreted to principal)",
    tenor: "3–7yr",
    investors: (ko: boolean) => ko ? "메자닌 펀드·특수상황 펀드" : "Mezzanine funds, special situations funds",
    useOfProceeds: (ko: boolean) => ko ? "후순위 인수자금·구조조정 DIP·PE 최후수단" : "Subordinated acquisition funding, DIP financing, PE last resort",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 5,
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
  },
  {
    id: "clo",
    label: (ko: boolean) => ko ? "CLO (Collateralized Loan Obligation)" : "CLO (Collateralized Loan Obligation)",
    tier: (ko: boolean) => ko ? "구조화 상품 — 론풀 증권화" : "Structured Product — Loan Pool Securitization",
    structure: (ko: boolean) => ko
      ? "레버리지드론 100–200개를 풀링해 AAA~Equity 트랜치로 재구성·발행"
      : "Pool 100-200 leveraged loans, re-tranche into AAA (70%) down to Equity (10%)",
    coupon: (ko: boolean) => ko ? "AAA 트랜치: SOFR+130bp / Equity: 15–20%+ IRR" : "AAA tranche: SOFR+130bp / Equity: 15–20%+ IRR",
    tenor: "5–7yr (로프아웃 기간 2yr + 투자기간 3–5yr)",
    investors: (ko: boolean) => ko ? "보험사(AAA)·은행(AA~A)·헤지펀드(BB·Equity)" : "Insurers (AAA), banks (AA-A), HF (BB-Equity)",
    useOfProceeds: (ko: boolean) => ko ? "레버리지드론 발행사 리파이낸싱·유동화" : "Refinancing/securitizing leveraged loan portfolios",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    risk: 3,
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
  },
];

const CLO_TRANCHES = [
  { rating: "AAA", pct: 70, spread: "SOFR+130bp", color: "#14b8a6", textColor: "#fff" },
  { rating: "AA",  pct: 10, spread: "SOFR+200bp", color: "#22d3ee", textColor: "#fff" },
  { rating: "A",   pct:  5, spread: "SOFR+280bp", color: "#38bdf8", textColor: "#fff" },
  { rating: "BBB", pct:  5, spread: "SOFR+400bp", color: "#f59e0b", textColor: "#fff" },
  { rating: "BB",  pct:  5, spread: "SOFR+700bp", color: "#f97316", textColor: "#fff" },
  { rating: "Equity", pct: 5, spread: "15–20%+ IRR", color: "#ef4444", textColor: "#fff" },
];

const RISK_DOTS = (n: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className="inline-block w-2.5 h-2.5 rounded-full mr-0.5"
      style={{ background: i < n ? "#ef4444" : "#e5e7eb" }}
    />
  ));

const CAPITAL_STACK = [
  { label: (ko: boolean) => ko ? "Senior Secured Debt" : "Senior Secured Debt",        color: "#14b8a6", h: "h-10", note: (ko: boolean) => ko ? "최우선 변제" : "First priority"     },
  { label: (ko: boolean) => ko ? "Senior Unsecured Debt" : "Senior Unsecured Debt",    color: "#22d3ee", h: "h-10", note: (ko: boolean) => ko ? "2순위" : "Second priority"          },
  { label: (ko: boolean) => ko ? "Subordinated / AT1" : "Subordinated / AT1",          color: "#f59e0b", h: "h-10", note: (ko: boolean) => ko ? "3순위 (PONV 위험)" : "3rd (PONV risk)" },
  { label: (ko: boolean) => ko ? "Hybrid / PIK" : "Hybrid / PIK",                      color: "#f97316", h: "h-10", note: (ko: boolean) => ko ? "후순위 부채" : "Junior debt"         },
  { label: (ko: boolean) => ko ? "Equity (Common)" : "Equity (Common)",                color: "#ef4444", h: "h-14", note: (ko: boolean) => ko ? "최후 잔여분" : "Residual claimant"   },
];

// ─── JSON-LD data ─────────────────────────────────────────────────────────────
const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DCM Ch.3 — 채권 상품 스펙트럼: 선순위에서 CLO까지",
  description: "DCM 상품 완전 지형도: Senior Unsecured·Covered Bond·Green Bond·AT1·CoCo·HY Bond·PIK·CLO까지. 각 상품의 구조·쿠폰·투자자·실전 케이스를 해부합니다.",
  url: "https://deal-story.com/market-101/dcm-bond-products",
  datePublished: "2026-05-26",
  author: { "@type": "Organization", name: "Deal Story" },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "커버드본드는 왜 Senior Unsecured보다 스프레드가 낮나요?",
      acceptedAnswer: { "@type": "Answer", text: "커버드본드는 '이중 보호(dual recourse)' 구조입니다. 투자자는 발행 은행에 대한 청구권과 함께, 담보자산풀에 대한 우선 청구권도 갖습니다." },
    },
    {
      "@type": "Question",
      name: "AT1 채권을 살 때 투자자가 가장 신경쓰는 리스크는?",
      acceptedAnswer: { "@type": "Answer", text: "세 가지 핵심 리스크: PONV 트리거 리스크, 영구채 리스크, 쿠폰 취소 리스크입니다." },
    },
    {
      "@type": "Question",
      name: "CLO의 AAA 트랜치는 정말 안전한가요?",
      acceptedAnswer: { "@type": "Answer", text: "CLO와 2008년 CDO는 근본적으로 다릅니다. CLO는 실제 기업 레버리지드론을 기초자산으로 하며 역사적으로 AAA 트랜치에서 원금손실 사례는 매우 드뭅니다." },
    },
    {
      "@type": "Question",
      name: "PIK 채권은 어떤 상황에서 발행되나요?",
      acceptedAnswer: { "@type": "Answer", text: "PIK는 단기 현금흐름이 부족하지만 장기 가치는 높은 기업, PE LBO 후순위 레이어, 구조조정 DIP 파이낸싱 대안으로 사용됩니다." },
    },
    {
      "@type": "Question",
      name: "그린본드 발행이 기업에게 실질적 이점이 있나요?",
      acceptedAnswer: { "@type": "Answer", text: "실질 이점이 있습니다. 그린피엄(2–5bp 절감), 투자자 다변화, 기관투자자와의 관계 강화 효과가 있습니다." },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function DcmBondProductsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const prev = DCM_SERIES.find(s => s.ch === thisCh - 1);
  const next = DCM_SERIES.find(s => s.ch === thisCh + 1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <Header />

      {/* ── Sticky Series Nav ── */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        <div className="flex items-center gap-1 px-4 py-2 min-w-max mx-auto max-w-6xl">
          {DCM_SERIES.map(item => (
            <Link
              key={item.slug}
              href={`${base}/${item.slug}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
              style={
                item.ch === thisCh
                  ? { background: accent, color: "#fff", fontWeight: 700 }
                  : { color: "#6b7280" }
              }
            >
              {item.title(ko)}
            </Link>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-24 pt-10">

        {/* ── Breadcrumb ── */}
        <motion.nav
          className="text-xs text-gray-400 mb-6 flex items-center gap-1"
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
        >
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span>/</span>
          <Link href={base} className="hover:text-teal-600">Market 101</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300">DCM Ch.3</span>
        </motion.nav>

        {/* ── Hero ── */}
        <motion.section
          className="mb-14"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: accentLight, color: accent }}
            >
              Ch.3 · {ko ? "채권 상품" : "Bond Products"}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">⏱ {ko ? "16분 읽기" : "16 min read"}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.05)}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
          >
            {ko
              ? "채권 상품 스펙트럼: 선순위에서 CLO까지"
              : "Bond Product Spectrum: From Senior to CLO"}
          </motion.h1>

          <motion.p
            variants={fadeUp(0.1)}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {ko
              ? "DCM이 거래하는 채권 상품은 단순한 고정금리 사채 하나가 아닙니다. 선순위 무담보채(Senior Unsecured)로 시작해 커버드본드, 그린본드, AT1/CoCo, 하이일드, PIK, 그리고 레버리지드론을 기초자산으로 한 CLO까지 — 위험·수익·구조가 전혀 다른 7개 상품군이 존재합니다. 이 챕터에서는 각 상품의 구조적 특성, 쿠폰 메커니즘, 전형적 투자자 및 실전 케이스를 해부합니다."
              : "The bonds DCM trades are not a single fixed-rate instrument. From Senior Unsecured to Covered Bonds, Green Bonds, AT1/CoCo, High Yield, PIK, and CLOs backed by leveraged loans — seven product families exist with entirely different risk, return, and structural profiles. This chapter dissects the structural characteristics, coupon mechanics, typical investors, and real-world cases for each product."}
          </motion.p>
        </motion.section>

        {/* ── 3-Stat Callout ── */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          {[
            {
              stat: "7가지",
              label: (ko: boolean) => ko ? "핵심 채권 상품군" : "Core Bond Product Types",
              sub: (ko: boolean) => ko ? "Senior부터 CLO까지" : "From Senior to CLO",
            },
            {
              stat: "AAA→Equity",
              label: (ko: boolean) => ko ? "위험 스펙트럼" : "Risk Spectrum",
              sub: (ko: boolean) => ko ? "스프레드 SOFR+130 → 20%+ IRR" : "SOFR+130bp → 20%+ IRR",
            },
            {
              stat: "CLO",
              label: (ko: boolean) => ko ? "구조화로 변환" : "Structural Alchemy",
              sub: (ko: boolean) => ko ? "HY론 → AAA 트랜치 생성" : "HY loans → AAA tranches",
            },
          ].map(item => (
            <motion.div
              key={item.stat}
              variants={fadeUp()}
              className="rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
            >
              <div className="text-3xl font-black mb-1" style={{ color: accent }}>{item.stat}</div>
              <div className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-1">{item.label(ko)}</div>
              <div className="text-xs text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Capital Structure Tower ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "자본 구조 타워: 부도 시 변제 순위" : "Capital Structure Tower: Priority in Default"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {ko
              ? "채권 투자자가 첫 번째로 이해해야 하는 개념은 '청구권 우선순위(seniority)'입니다. 기업이 부도나면 자산을 팔아 위에서 아래 순서로 채권자에게 배분합니다. 위에 있을수록 안전하지만 스프레드는 낮고, 아래에 있을수록 위험하지만 수익률이 높습니다. DCM 상품들은 이 타워의 각 층에 위치합니다."
              : "The first concept bond investors must understand is 'seniority.' When a company defaults, asset proceeds are distributed top to bottom. Higher positions are safer with tighter spreads; lower positions are riskier with higher yields. DCM products sit at different floors of this tower."}
          </p>

          <div className="flex items-stretch gap-6">
            {/* Tower visual */}
            <div className="flex-1 flex flex-col gap-1 max-w-xs">
              {CAPITAL_STACK.map((layer, i) => (
                <div
                  key={i}
                  className={`${layer.h} flex items-center px-4 rounded-lg text-white text-xs font-semibold`}
                  style={{ background: layer.color }}
                >
                  <span className="flex-1">{layer.label(ko)}</span>
                  <span className="opacity-80 text-xs">{layer.note(ko)}</span>
                </div>
              ))}
              <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
                <span>{ko ? "↑ 안전 (낮은 수익)" : "↑ Safe (lower yield)"}</span>
                <span>{ko ? "위험 ↓" : "Risky ↓"}</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="flex-1 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p>
                {ko
                  ? "타워의 최상단에는 담보부 선순위 채권(Senior Secured Debt)이 위치합니다. 공장·설비·IP 등 특정 자산을 담보로 받은 채권자로, 부도 시 해당 담보를 먼저 처분해 회수합니다. 회수율이 가장 높아 스프레드가 가장 낮습니다."
                  : "At the top sits Senior Secured Debt — bondholders with a lien on specific assets (plant, equipment, IP). In default, they liquidate the collateral first. Highest recovery rates mean the tightest spreads."}
              </p>
              <p>
                {ko
                  ? "선순위 무담보채(Senior Unsecured)는 담보는 없지만 후순위보다 먼저 회수 권리를 가집니다. IG 발행사가 가장 많이 사용하는 표준 상품입니다."
                  : "Senior Unsecured has no collateral but ranks ahead of subordinated debt. This is the standard instrument most IG issuers use."}
              </p>
              <p>
                {ko
                  ? "AT1과 CoCo는 타워 중간에 위치하는 특수 자본채권입니다. 정상 상황에서는 채권처럼 쿠폰을 지급하지만, 규제당국이 '생존불능(PONV)'을 선언하면 원금이 소멸하거나 주식으로 전환됩니다."
                  : "AT1 and CoCo occupy the middle of the tower as special capital instruments. Under normal conditions they pay coupons like bonds, but when regulators declare Non-Viability (PONV), principal is written down or converted to equity."}
              </p>
              <p>
                {ko
                  ? "최하단의 주식(Equity)은 채권자 모두에게 변제한 뒤 남는 잔여분만 가져갑니다. 부도 시 남는 것이 없어 '0'을 받을 가능성이 높지만, 기업가치 상승 시 무한한 upside를 가집니다."
                  : "At the bottom, equity holders receive only residual value after all creditors are paid. In default they often receive nothing, but in good times equity captures unlimited upside."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Product Cards ── */}
        <motion.section
          className="mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "7대 채권 상품 카드" : "7 Core Bond Product Cards"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            {ko
              ? "각 상품의 핵심 스펙을 카드로 확인하세요. 위험도는 1(최저)~5(최고)로 표시됩니다."
              : "Review each product's key specs as cards. Risk is rated 1 (lowest) to 5 (highest)."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.map(item => (
              <motion.div
                key={item.id}
                variants={fadeUp()}
                className={`rounded-2xl border p-5 ${item.bg} ${item.border}`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                      {item.label(ko)}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.tier(ko)}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mt-0.5 shrink-0 ml-2">
                    {RISK_DOTS(item.risk)}
                  </div>
                </div>

                {/* Card body */}
                <dl className="space-y-2 text-xs">
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">
                      {ko ? "구조" : "Structure"}
                    </dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.structure(ko)}</dd>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "쿠폰" : "Coupon"}</dt>
                      <dd className="text-gray-700 dark:text-gray-200 mt-0.5">
                        {typeof item.coupon === "function" ? item.coupon(ko) : item.coupon}
                      </dd>
                    </div>
                    <div className="flex-1">
                      <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "만기" : "Tenor"}</dt>
                      <dd className="text-gray-700 dark:text-gray-200 mt-0.5">
                        {typeof item.tenor === "function" ? (item.tenor as (ko: boolean) => string)(ko) : item.tenor}
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "주요 투자자" : "Investors"}</dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.investors(ko)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "자금 용도" : "Use of Proceeds"}</dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.useOfProceeds(ko)}</dd>
                  </div>
                </dl>

                {/* AT1 warning */}
                {item.id === "at1" && (
                  <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                    <p className="text-xs font-bold text-red-700 dark:text-red-300">
                      ⚠ {ko
                        ? "PONV 트리거 시 원금 전액 소멸 — CS AT1 사태(2023) 참조"
                        : "Full principal write-down at PONV trigger — see CS AT1 case (2023)"}
                    </p>
                    {item.caseStudy && (
                      <Link
                        href={`/market/${item.caseStudy.slug}`}
                        className="text-xs text-red-600 dark:text-red-400 underline mt-1 inline-block"
                      >
                        {item.caseStudy.label(ko)}
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── AT1 Deep Dive ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "AT1 / CoCo 딥다이브: PONV와 CS 사태" : "AT1 / CoCo Deep Dive: PONV and the CS Case"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {ko
              ? "Additional Tier 1(AT1) 채권은 바젤 III 자본 규제가 2010년에 도입되면서 탄생한 하이브리드 자본 상품입니다. 그 핵심 메커니즘과 Credit Suisse 사태가 남긴 교훈을 자세히 살펴봅니다."
              : "Additional Tier 1 (AT1) bonds emerged with Basel III capital regulations in 2010 as a hybrid capital instrument. Let's examine the core mechanism and lessons from the Credit Suisse episode."}
          </p>

          {/* Amber callout: PONV explained */}
          <div
            className="rounded-2xl p-6 mb-6 border"
            style={{ background: "#fffbeb", borderColor: "#fbbf24" }}
          >
            <h3 className="font-bold text-amber-800 text-base mb-3">
              {ko ? "PONV(Point of Non-Viability)란 무엇인가?" : "What is PONV (Point of Non-Viability)?"}
            </h3>
            <p className="text-sm text-amber-900 leading-relaxed mb-3">
              {ko
                ? "PONV는 금융당국(FSA, FINMA 등)이 공식적으로 '이 은행은 스스로의 힘으로 생존할 수 없다'고 판단하는 임계점입니다. 바젤 III는 AT1 채권 발행 조건에 반드시 이 트리거를 포함하도록 의무화했습니다. PONV가 선언되면 AT1 채권은 즉시 두 가지 방식 중 하나로 처리됩니다."
                : "PONV is the threshold at which a financial regulator (FSA, FINMA, etc.) officially determines that 'this bank cannot survive on its own.' Basel III mandates that every AT1 bond include this trigger. When PONV is declared, AT1 bonds are immediately handled in one of two ways."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="font-bold text-amber-800 mb-1">{ko ? "① 원금 상각(Write-down)" : "① Principal Write-down"}</div>
                <p className="text-amber-700 text-xs">
                  {ko
                    ? "채권 원금이 0으로 감액됩니다. 쿠폰과 원금 모두 소멸. Credit Suisse 2023년 AT1 $17bn이 이 방식으로 처리되었습니다. 주주는 UBS 인수 주식을 받았지만 AT1 보유자는 아무것도 받지 못했습니다."
                    : "Principal is reduced to zero. Both coupons and principal are extinguished. Credit Suisse's $17bn AT1 in 2023 was handled this way — shareholders received UBS shares but AT1 holders received nothing."}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="font-bold text-amber-800 mb-1">{ko ? "② 주식 전환(Equity Conversion)" : "② Equity Conversion"}</div>
                <p className="text-amber-700 text-xs">
                  {ko
                    ? "채권 원금이 미리 정해진 전환 비율로 발행사 보통주로 전환됩니다. 채권 보유자는 자동으로 주주가 됩니다. 은행 주가가 폭락한 상황이므로 전환 주식의 가치는 원금 대비 크게 낮습니다."
                    : "Principal is converted into issuer common shares at a pre-specified ratio. Bondholders automatically become shareholders. Since bank shares have typically crashed, the converted shares are worth far less than the original principal."}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {ko
              ? "AT1의 또 다른 핵심 특성은 영구채(Perpetual)라는 점입니다. 법적 만기가 없으며, 발행사가 일반적으로 5년 또는 10년 주기로 콜 옵션을 가집니다. 투자자는 발행사가 콜을 행사해 채권을 상환할 것을 '기대'하지만, 발행사가 콜을 행사하지 않으면 채권은 계속 유지됩니다. 2023년 일부 은행이 AT1 콜을 연장한 사건은 시장에 큰 불안을 야기했습니다."
              : "Another key feature of AT1 is that it is Perpetual — no legal maturity date. The issuer typically holds a call option every 5 or 10 years. Investors 'expect' the issuer to call and redeem, but if not exercised, the bond continues. When some banks extended AT1 calls in 2023, it caused significant market anxiety."}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {ko
              ? "세 번째 리스크는 쿠폰 임의 취소 권리입니다. 발행사는 '분배가능이익(Distributable Items)'이 충분하지 않다고 판단하면 AT1 쿠폰 지급을 임의로 중단할 수 있습니다. 이 중단은 '디폴트'로 처리되지 않아 법적 조치를 취할 수 없습니다. 이것이 AT1이 일반 채권보다 훨씬 높은 쿠폰을 제공하는 이유입니다."
              : "The third risk is the discretionary coupon cancellation right. If the issuer determines that Distributable Items are insufficient, AT1 coupon payments can be suspended at will. This suspension is not treated as 'default,' so bondholders have no legal recourse. This is why AT1 offers significantly higher coupons than regular bonds."}
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-2">
              {ko ? "Credit Suisse AT1 사태 요약 (2023)" : "Credit Suisse AT1 Case Summary (2023)"}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko
                ? "2023년 3월 스위스 당국(FINMA)은 UBS의 Credit Suisse 인수를 승인하면서 CS의 AT1 채권 약 $170억을 전액 상각(write-down to zero)하도록 명령했습니다. 주목할 점은 주주들이 UBS 주식 형태로 약 $3.23bn을 받은 반면, 채권 순위에서 주주보다 선순위인 AT1 보유자들은 단 한 푼도 받지 못했다는 것입니다. 이는 전통적인 '채권자 우선(absolute priority rule)' 원칙에 위배되는 것처럼 보여 전 세계 AT1 시장에 큰 충격을 주었습니다. 이후 유럽 각국 규제당국은 '우리 법체계에서는 주주 소진 후 AT1을 처리한다'는 성명을 발표해 진화에 나섰습니다."
                : "In March 2023, Swiss authorities (FINMA) approved UBS's acquisition of Credit Suisse and ordered the full write-down of approximately $17bn in CS AT1 bonds. The shocking detail: shareholders received approximately $3.23bn in UBS shares, while AT1 holders — who rank senior to equity in the capital structure — received absolutely nothing. This appeared to violate the traditional 'absolute priority rule,' sending shockwaves through global AT1 markets. Subsequently, European regulators issued statements clarifying that their legal frameworks would exhaust equity before writing down AT1."}
            </p>
            <Link
              href="/market/credit-suisse-at1"
              className="text-xs font-semibold mt-2 inline-block"
              style={{ color: accent }}
            >
              {ko ? "→ CS AT1 케이스 스터디 전체 보기" : "→ Full CS AT1 Case Study"}
            </Link>
          </div>
        </motion.section>

        {/* ── CLO Anatomy ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "CLO 해부: 어떻게 HY 론이 AAA 채권이 되는가" : "CLO Anatomy: How HY Loans Become AAA Bonds"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {ko
              ? "Collateralized Loan Obligation(CLO)은 채권 시장에서 가장 복잡한 구조화 상품 중 하나입니다. 개별적으로는 BB~B 등급의 하이일드 레버리지드론 100~200개를 하나의 풀에 담아, 수학적 분산 효과와 우선순위 구조(waterfall)를 통해 최상위 트랜치를 AAA로 변환합니다. 이 '연금술'의 원리를 단계별로 설명합니다."
              : "A Collateralized Loan Obligation (CLO) is one of the most complex structured products in bond markets. By pooling 100–200 individual BB–B rated leveraged loans, the mathematical diversification effect and priority waterfall structure transform the most senior tranche into AAA. Here is the step-by-step logic of this 'alchemy.'"}
          </p>

          {/* Step 1 */}
          <div className="space-y-4 mb-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-2">
                {ko ? "Step 1 — 레버리지드론 풀링" : "Step 1 — Pool Leveraged Loans"}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "CLO 매니저(BlackRock, PGIM, Ares 등)는 다양한 산업과 지역에 걸쳐 150~200개의 레버리지드론을 매입합니다. 개별 론은 SOFR+350~550bp 수준의 변동금리 론이며 각각은 B~BB 등급입니다. 핵심은 분산(diversification) — 특정 산업이나 기업에 집중되지 않도록 제한합니다(최대 2% 단일 익스포저). 이 다양한 포트폴리오의 가중평균 스프레드는 SOFR+400bp 수준입니다."
                  : "CLO managers (BlackRock, PGIM, Ares, etc.) purchase 150–200 leveraged loans across diverse industries and geographies. Individual loans are floating rate at SOFR+350–550bp, each rated B–BB. The key is diversification — concentration limits prevent any single industry/company from exceeding 2% exposure. The weighted average spread of this diversified portfolio is around SOFR+400bp."}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-2">
                {ko ? "Step 2 — 트랜치 구조: Waterfall" : "Step 2 — Tranching: The Waterfall"}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {ko
                  ? "풀에서 발생하는 이자 수익과 원금 회수금은 '폭포(waterfall)' 방식으로 순위대로 배분됩니다. AAA 트랜치가 먼저 확정된 이자를 받고, 남은 것이 AA로, 그 다음이 A로 흘러내려갑니다. 최하단 Equity 트랜치는 가장 마지막에 나머지를 모두 가져갑니다. 디폴트가 발생하면 손실은 아래(Equity)에서부터 위로 흡수됩니다."
                  : "Interest income and principal recoveries from the pool flow down a 'waterfall' in order of priority. The AAA tranche receives its contracted interest first, then AA, then A, flowing down. The bottom Equity tranche takes everything that remains last. When defaults occur, losses are absorbed from the bottom (Equity) upward."}
              </p>

              {/* Tranche visual */}
              <div className="flex flex-col gap-1">
                {CLO_TRANCHES.map(t => (
                  <div
                    key={t.rating}
                    className="flex items-center px-3 py-2 rounded-lg text-xs font-semibold"
                    style={{
                      background: t.color,
                      color: t.textColor,
                      height: `${Math.max(30, t.pct * 1.2)}px`,
                    }}
                  >
                    <span className="w-12 shrink-0">{t.rating}</span>
                    <span className="flex-1">{t.pct}%</span>
                    <span className="opacity-90">{t.spread}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-2">
                {ko ? "Step 3 — 왜 AAA인가? 수학적 원리" : "Step 3 — Why AAA? The Math"}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "AAA 트랜치(70% 비중)가 손실을 입으려면 풀의 30%가 완전히 회수 불능 상태(회수율 0%)가 되어야 합니다. 역사적으로 레버리지드론의 연간 디폴트율은 평균 3~4%이고, 회수율은 60~80%입니다. 최악의 경기침체(2009년 GFC)에서도 CLO AAA 트랜치는 원금 손실을 거의 겪지 않았습니다. 이것이 S&P, Moody's가 CLO AAA 트랜치에 최고등급을 부여하는 근거입니다."
                  : "For the AAA tranche (70% of the pool) to incur losses, 30% of the pool would need to become completely unrecoverable (0% recovery rate). Historically, leveraged loan annual default rates average 3–4% with 60–80% recovery rates. Even during the worst recession (2009 GFC), CLO AAA tranches experienced almost no principal losses. This is the basis for S&P and Moody's awarding their top rating to CLO AAA tranches."}
              </p>
            </div>
          </div>

          {/* CLO equity note */}
          <div
            className="rounded-xl p-4 border text-sm"
            style={{ background: accentLight, borderColor: accent }}
          >
            <p className="font-semibold mb-1" style={{ color: accent }}>
              {ko ? "CLO Equity: 위험과 보상의 농축" : "CLO Equity: Concentrated Risk and Reward"}
            </p>
            <p className="text-gray-700 text-xs leading-relaxed">
              {ko
                ? "Equity 트랜치(5%)는 CLO 매니저가 '스킨 인 더 게임(skin in the game)'으로 보유하거나, 헤지펀드·PE가 매입합니다. 이 트랜치는 모든 상위 트랜치의 이자를 지급한 후 남은 초과 이자(excess spread)를 모두 가져갑니다. 포트폴리오 성과가 좋으면 15~25% IRR도 가능하지만, 디폴트율이 급등하면 원금 전체를 잃을 수 있습니다."
                : "The Equity tranche (5%) is held by CLO managers as 'skin in the game' or purchased by hedge funds and PE. This tranche captures all excess spread remaining after paying all senior tranches. If portfolio performance is strong, 15–25% IRR is possible, but if default rates spike, the entire principal can be lost."}
            </p>
          </div>
        </motion.section>

        {/* ── Green Bond Market Explainer ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "그린본드 시장: 그린피엄과 ICMA 원칙" : "Green Bond Market: Greenium and ICMA Principles"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {ko
              ? "2007년 유럽투자은행(EIB)이 세계 최초 그린본드를 발행한 이래, 2024년 글로벌 그린본드 발행 잔액은 $3조를 넘어섰습니다. 그린본드는 단순한 마케팅 도구인가, 아니면 실질적 이점이 있는 금융 상품인가? 핵심 개념 세 가지를 살펴봅니다."
              : "Since the European Investment Bank issued the world's first green bond in 2007, global green bond issuance exceeded $3 trillion outstanding by 2024. Is a green bond merely a marketing tool, or a financial product with real advantages? Three key concepts to understand."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 p-4">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200 text-sm mb-2">
                {ko ? "① 그린피엄 (Greenium)" : "① Greenium"}
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
                {ko
                  ? "그린본드가 동일 발행사의 일반 채권 대비 낮은 금리(2–5bp)로 발행되는 현상입니다. ESG 위임 투자자들이 그린본드에만 투자할 수 있는 규정이 있어 수요가 더 많고, 이 초과 수요가 스프레드를 낮춥니다. 발행사 입장에서는 연간 이자비용 절감이 됩니다."
                  : "The phenomenon where green bonds price at lower rates (2–5bp tighter) than comparable vanilla bonds from the same issuer. ESG-mandated investors can only buy green bonds under their mandates, creating excess demand that compresses spreads. For issuers, this means annual interest cost savings."}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 p-4">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200 text-sm mb-2">
                {ko ? "② Ring-fencing (자금 지정)" : "② Ring-fencing"}
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
                {ko
                  ? "그린본드의 핵심 원칙: 발행대금이 반드시 지정된 친환경 프로젝트(재생에너지, 친환경 건물, 저탄소 교통 등)에만 사용되어야 합니다. 발행사는 별도 계정을 운영하거나 내부 추적 시스템을 구축해 자금 흐름을 투명하게 공시해야 합니다."
                  : "The core green bond principle: proceeds must be used exclusively for designated green projects (renewable energy, green buildings, low-carbon transport, etc.). Issuers must maintain separate accounts or internal tracking systems to transparently disclose fund flows."}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 p-4">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200 text-sm mb-2">
                {ko ? "③ ICMA & SPO" : "③ ICMA & SPO"}
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
                {ko
                  ? "ICMA(국제자본시장협회)의 그린본드원칙(GBP)이 사실상 글로벌 표준입니다. 발행사는 독립 기관의 Second Party Opinion(SPO — Sustainalytics, ISS ESG 등)을 받아 프레임워크가 GBP에 부합함을 검증받습니다. SPO 취득 비용은 약 $30K–$100K입니다."
                  : "ICMA's (International Capital Market Association) Green Bond Principles (GBP) are the de facto global standard. Issuers obtain a Second Party Opinion (SPO) from independent organizations (Sustainalytics, ISS ESG, etc.) verifying that their framework aligns with GBP. SPO costs range from approximately $30K–$100K."}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "그린본드 발행의 총비용 구조를 살펴보면: 프레임워크 수립 + SPO + 법무 비용 약 1–2bp, 연간 리포팅 비용 0.5bp. 반면 그린피엄으로 절감되는 이자비용은 연 2–5bp. $1조 규모 이상 발행사는 그린피엄이 비용을 상회해 순편익(net benefit)이 발생합니다. 또한 비금전적 이익도 있습니다: 연기금·국부펀드 등 ESG 핵심 기관투자자들과의 장기 관계 구축, 기업 ESG 평가 점수 제고, 그린워싱(Greenwashing) 논란 회피 가능성 증가 등입니다."
              : "Looking at the total cost structure of green bond issuance: framework setup + SPO + legal fees ~1–2bp, annual reporting ~0.5bp. Meanwhile, the greenium saves 2–5bp annually in interest costs. For issuers with over $1bn in issuance, the greenium exceeds costs, generating net benefit. Non-monetary benefits also accrue: long-term relationship building with key ESG institutional investors (pensions, sovereign wealth funds), improved corporate ESG scores, and reduced greenwashing controversy risk."}
          </p>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-3">
            {[
              {
                q: (ko: boolean) => ko
                  ? "커버드본드는 왜 Senior Unsecured보다 스프레드가 낮나요?"
                  : "Why does a covered bond trade tighter than senior unsecured?",
                a: (ko: boolean) => ko
                  ? "커버드본드는 '이중 보호(dual recourse)' 구조입니다. 투자자는 발행 은행에 대한 청구권과 함께, 담보자산풀(주택담보대출·공공부문채권 등)에 대한 우선 청구권도 갖습니다. 은행이 파산해도 담보풀에서 먼저 회수할 수 있어 신용리스크가 극히 낮습니다. 유럽에서는 ECB 적격 담보로도 인정받아 수요가 매우 탄탄합니다."
                  : "Covered bonds have dual recourse: investors hold a claim against the issuing bank AND a priority claim against the cover pool (mortgage loans, public sector assets). Even in bank failure, investors recover first from the pool. In Europe, ECB eligibility as collateral further anchors demand, compressing spreads.",
              },
              {
                q: (ko: boolean) => ko
                  ? "AT1 채권을 살 때 투자자가 가장 신경쓰는 리스크는?"
                  : "What risk do investors focus on most when buying AT1 bonds?",
                a: (ko: boolean) => ko
                  ? "세 가지 핵심 리스크: ① PONV 트리거 리스크 — 규제당국이 '생존불능'을 선언하면 쿠폰 취소·원금 소멸이 발생합니다. ② 영구채 리스크 — 발행사가 콜 옵션을 행사하지 않으면 만기가 없습니다. ③ 쿠폰 취소 리스크 — 분배가능이익(distributable items)이 부족하면 쿠폰을 자의적으로 취소할 수 있습니다. CS 사태는 이 세 가지가 동시에 현실화된 사례입니다."
                  : "Three key risks: ① PONV trigger risk — regulator declares non-viability, causing coupon cancellation and principal write-down. ② Perpetual risk — no maturity if the issuer skips the call. ③ Coupon cancellation risk — distributable items can be insufficient, allowing discretionary cancellation. The CS case showed all three materializing simultaneously.",
              },
              {
                q: (ko: boolean) => ko
                  ? "CLO의 AAA 트랜치는 정말 안전한가요? 2008년에도 AAA가 손실 났는데요."
                  : "Is the CLO AAA tranche really safe? AAA CDOs lost money in 2008.",
                a: (ko: boolean) => ko
                  ? "CLO와 2008년 CDO는 근본적으로 다릅니다. CDO는 서브프라임 MBS를 기초자산으로 했지만, CLO는 실제 기업 레버리지드론을 기초자산으로 합니다. 론의 회수율(60–80%)이 MBS보다 높고, 분산도(100–200개 기업)가 강합니다. 역사적으로 CLO AAA 트랜치에서 원금손실 사례는 매우 드뭅니다. 단, 경기침체기 디폴트율 급등 시 하위 트랜치(BB·Equity)는 심각한 손실 가능합니다."
                  : "CLOs and 2008 CDOs are fundamentally different. CDOs were backed by subprime MBS; CLOs are backed by actual corporate leveraged loans. Loans have higher recovery rates (60-80%) and better diversification (100-200 companies). Historically, CLO AAA tranches have seen very few principal losses. However, lower tranches (BB, Equity) can suffer significantly during recessions with surging default rates.",
              },
              {
                q: (ko: boolean) => ko
                  ? "PIK 채권은 어떤 상황에서 발행되나요?"
                  : "In what situations are PIK bonds issued?",
                a: (ko: boolean) => ko
                  ? "PIK는 단기 현금흐름이 부족하지만 장기 가치는 높은 기업에 적합합니다. 주요 사용 사례: ① PE LBO에서 자기자본 바로 위 층위(최후순위 부채), ② 구조조정 과정에서 DIP 파이낸싱 대안, ③ 빠르게 성장하는 기업이 현금을 R&D에 재투자하고 싶을 때. 매우 고위험·고비용 수단이어서 'last resort' 성격을 갖습니다."
                  : "PIK is suited for companies with constrained near-term cash flow but strong long-term value. Key use cases: ① The most junior debt layer in PE LBOs (just above equity), ② DIP financing alternative in restructurings, ③ High-growth companies wanting to reinvest cash into R&D. It's very high cost and high risk — a genuine last resort instrument.",
              },
              {
                q: (ko: boolean) => ko
                  ? "그린본드 발행이 기업에게 실질적 이점이 있나요, 아니면 마케팅인가요?"
                  : "Do green bonds offer real benefits to issuers, or is it just marketing?",
                a: (ko: boolean) => ko
                  ? "실질 이점이 있습니다. ① 그린피엄(Greenium): 일반 채권 대비 스프레드 2–5bp 절감으로 이자비용 직접 감소. ② 투자자 다변화: ESG 위임 펀드가 추가되어 오더북 두께가 증가합니다. ③ 기관 투자자·연기금과의 관계 강화. 단, 프레임워크 수립·SPO(Second Party Opinion)·연간 리포팅 비용 1–2bp도 발생합니다. 발행 규모가 클수록 그린피엄이 비용을 상회해 순이익입니다."
                  : "Real benefits exist. ① Greenium: 2-5bp spread savings directly reduce interest costs. ② Investor diversification: ESG-mandated funds added to the order book increase demand depth. ③ Relationship building with institutional investors and pensions. However, framework setup, SPO (Second Party Opinion), and annual reporting costs ~1-2bp. At scale, the greenium more than covers these costs.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-semibold text-gray-800 dark:text-gray-100 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {item.q(ko)}
                  <span className="ml-3 shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-5 pt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                  {item.a(ko)}
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        {/* ── Related Articles ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {ko ? "관련 아티클" : "Related Articles"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: `${base}/dcm-overview`,      label: (ko: boolean) => ko ? "DCM 개요"       : "DCM Overview"      },
              { href: `${base}/dcm-issuers`,        label: (ko: boolean) => ko ? "Ch.1 발행사"    : "Ch.1 Issuers"      },
              { href: `${base}/dcm-investors`,      label: (ko: boolean) => ko ? "Ch.2 투자자"    : "Ch.2 Investors"    },
              { href: `${base}/dcm-deal-process`,   label: (ko: boolean) => ko ? "Ch.5 딜 프로세스": "Ch.5 Deal Process" },
              { href: "/market/credit-suisse-at1",  label: (ko: boolean) => ko ? "CS AT1 케이스" : "CS AT1 Case"       },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
              >
                {link.label(ko)}
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Prev / Next ── */}
        <motion.div
          className="flex items-center justify-between"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              ← {prev.title(ko)}
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              {next.title(ko)} →
            </Link>
          ) : <div />}
        </motion.div>

      </main>

      <Footer />
    </>
  );
}
