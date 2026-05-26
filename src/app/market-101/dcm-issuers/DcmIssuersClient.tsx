"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";
const accentLight = "#ccfbf1";

// ── Series nav ────────────────────────────────────────────────────────────────
const DCM_SERIES = [
  { slug: "dcm-overview",              ch: 0, title: (ko: boolean) => ko ? "DCM 개요"         : "DCM Overview"    },
  { slug: "dcm-issuers",               ch: 1, title: (ko: boolean) => ko ? "Ch.1 발행사"       : "Ch.1 Issuers"    },
  { slug: "dcm-investors",             ch: 2, title: (ko: boolean) => ko ? "Ch.2 투자자"       : "Ch.2 Investors"  },
  { slug: "dcm-bond-products",         ch: 3, title: (ko: boolean) => ko ? "Ch.3 상품"         : "Ch.3 Products"   },
  { slug: "dcm-international-markets", ch: 4, title: (ko: boolean) => ko ? "Ch.4 국제채"       : "Ch.4 Intl"       },
  { slug: "dcm-deal-process",          ch: 5, title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"  : "Ch.5 Process"    },
  { slug: "dcm-pricing",               ch: 6, title: (ko: boolean) => ko ? "Ch.6 프라이싱"     : "Ch.6 Pricing"    },
  { slug: "dcm-structure-regulation",  ch: 7, title: (ko: boolean) => ko ? "Ch.7 구조·제도"    : "Ch.7 Regulation" },
];

const thisCh = 1;

// ── Issuer tier data ──────────────────────────────────────────────────────────
const ISSUER_TIERS = [
  {
    id: "ssa",
    label: "SSA",
    sub: (ko: boolean) => ko ? "소버린·초국가기구·정책금융기관" : "Sovereign·Supranational·Agency",
    examples: (ko: boolean) => ko
      ? "한국 외평채, KDB, 세계은행, 유럽투자은행(EIB)"
      : "US Treasury, World Bank, KDB, EIB",
    rating: "AAA~AA",
    spread: "T+10–60bp",
    mandate: (ko: boolean) => ko
      ? "국제기구 정관·국가 재정법에 따라 금리 최소화 의무"
      : "Mandated to minimize funding cost per charter/law",
    bankersNote: (ko: boolean) => ko
      ? "정치적 타이밍이 중요 — 선거·예산 일정·IMF 리뷰 일정 맞춰야"
      : "Political timing matters — align with elections, budget cycles, IMF reviews",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-500",
    link: "/market/korea-1998-external-bond",
  },
  {
    id: "fig",
    label: "FIG",
    sub: (ko: boolean) => ko ? "은행·보험·FI" : "Banks·Insurers·Financial Institutions",
    examples: (ko: boolean) => ko
      ? "HSBC Senior Preferred, CS AT1, KB금융 Tier 2"
      : "JPMorgan Senior, CS AT1, Barclays AT1",
    rating: "A~BB",
    spread: "T+60–400bp (tier별)",
    mandate: (ko: boolean) => ko
      ? "바젤III 자본비율 충족 + 유동성 규제(LCR·NSFR) 관리"
      : "Meet Basel III capital ratios + manage LCR/NSFR liquidity",
    bankersNote: (ko: boolean) => ko
      ? "자본 tier별로 투자자베이스 완전히 달라짐 — Senior→보험사, AT1→HY 펀드"
      : "Investor base shifts radically by capital tier — Senior→insurers, AT1→HY funds",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-500",
    link: "/market/credit-suisse-at1",
  },
  {
    id: "ig",
    label: "Corp IG",
    sub: (ko: boolean) => ko ? "투자등급 기업채 (BBB-이상)" : "Investment Grade Corporate (BBB- and above)",
    examples: (ko: boolean) => ko
      ? "Apple, 삼성전자 USD채, 현대차 글로벌본드"
      : "Apple, Microsoft, Toyota, Samsung USD bonds",
    rating: "BBB+~BBB-",
    spread: "T+80–250bp",
    mandate: (ko: boolean) => ko
      ? "운전자본·CAPEX·M&A 자금 조달, 기존 부채 차환(리파이낸싱)"
      : "Working capital, CAPEX, M&A funding, refinancing existing debt",
    bankersNote: (ko: boolean) => ko
      ? "BBB- 직전이 가장 예민 — 등급 강등시 HY 강제매도(Fallen Angel) 위험"
      : "The BBB- threshold is most sensitive — downgrade triggers forced HY selling (Fallen Angel)",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-500",
    link: null,
  },
  {
    id: "hy",
    label: "High Yield",
    sub: (ko: boolean) => ko ? "하이일드 · 투기등급 기업" : "High Yield · Speculative Grade",
    examples: (ko: boolean) => ko
      ? "PE LBO 기업, 성장 중소기업, 신흥국 기업"
      : "PE-backed LBOs, growth SMEs, EM corporates",
    rating: "BB+~B-",
    spread: "T+300–700bp",
    mandate: (ko: boolean) => ko
      ? "PE LBO 인수자금, 성장·R&D 투자, 자본구조 최적화"
      : "PE LBO acquisition funding, growth/R&D, capital structure optimization",
    bankersNote: (ko: boolean) => ko
      ? "Covenant 협상이 핵심 — EBITDA 정의 하나가 수십억원 이자비용 차이"
      : "Covenant negotiation is key — one EBITDA definition can mean billions in interest cost",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-500",
    link: null,
  },
  {
    id: "distressed",
    label: "Distressed",
    sub: (ko: boolean) => ko ? "부도 직전·구조조정·특수상황" : "Near-Default·Restructuring·Special Situations",
    examples: (ko: boolean) => ko
      ? "Evergrande 달러채, 구조조정 진행 기업"
      : "Evergrande USD bonds, restructuring cos, Chapter 11 debtors",
    rating: "CCC~D",
    spread: "T+700bp+ 또는 액면의 cents on dollar로 호가",
    mandate: (ko: boolean) => ko
      ? "현금 방어·부도 방지·DIP 파이낸싱"
      : "Cash preservation, default avoidance, DIP financing",
    bankersNote: (ko: boolean) => ko
      ? "수익률이 아닌 회수율로 가격 계산 — 'cents on dollar' 언어 씀"
      : "Price using recovery rate not yield — language shifts to 'cents on dollar'",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    dot: "bg-red-500",
    link: null,
  },
];

// ── Banker's checklist ────────────────────────────────────────────────────────
const CHECKLIST = [
  {
    icon: "📊",
    title: (ko: boolean) => ko ? "신용등급 & 아웃룩" : "Credit Rating & Outlook",
    desc: (ko: boolean) => ko
      ? "무디스·S&P·피치 3사 등급과 아웃룩(Stable/Negative/Positive). 아웃룩이 Negative면 12~18개월 내 강등 가능성 주의."
      : "Moody's, S&P, Fitch ratings and outlook (Stable/Negative/Positive). Negative outlook flags potential downgrade within 12–18 months.",
  },
  {
    icon: "📅",
    title: (ko: boolean) => ko ? "부채만기 프로파일" : "Debt Maturity Profile",
    desc: (ko: boolean) => ko
      ? "향후 2~3년 내 만기 도래 부채 규모. 집중된 만기(maturity wall)는 리파이낸싱 리스크이자 협상 레버리지."
      : "Size of debt maturing within 2–3 years. Concentrated maturities (maturity wall) signal refinancing risk and negotiating leverage.",
  },
  {
    icon: "🏦",
    title: (ko: boolean) => ko ? "투자자베이스 분석" : "Investor Base Analysis",
    desc: (ko: boolean) => ko
      ? "기존 채권 보유 투자자 구성. IG 전용인가, HY 포함인가. 아시아 수요가 있는가. 투자자베이스가 넓을수록 발행 조건 유리."
      : "Composition of existing bondholders. IG-only mandate or HY-inclusive. Asian demand present? Broader investor base → better pricing conditions.",
  },
  {
    icon: "📈",
    title: (ko: boolean) => ko ? "기존 채권 스프레드 레벨" : "Existing Bond Spread Level",
    desc: (ko: boolean) => ko
      ? "2차 시장(secondary market)에서 기존 채권의 현재 스프레드. 이게 신규 발행 IPT(초기 가격 가이던스)의 기준점이 된다."
      : "Current spread of existing bonds in the secondary market — this becomes the reference point for new issue IPT (Initial Price Thoughts).",
  },
  {
    icon: "⚖️",
    title: (ko: boolean) => ko ? "재무비율(레버리지·커버리지)" : "Financial Ratios (Leverage & Coverage)",
    desc: (ko: boolean) => ko
      ? "Net Debt/EBITDA(레버리지)와 EBITDA/이자비용(커버리지). IG 기준선은 각각 4x 이하, 3x 이상."
      : "Net Debt/EBITDA (leverage) and EBITDA/Interest (coverage). IG benchmarks: leverage below 4x, coverage above 3x.",
  },
  {
    icon: "🕐",
    title: (ko: boolean) => ko ? "발행 타이밍 여건" : "Issuance Timing Conditions",
    desc: (ko: boolean) => ko
      ? "금리 방향성, 시장 변동성(VIX·MOVE 지수), 경쟁 발행사 캘린더. 시장 타이밍이 스프레드를 수십bp 좌우."
      : "Rate direction, market volatility (VIX/MOVE index), competing issuer calendar. Market timing can swing spreads by tens of basis points.",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "SSA 발행사는 왜 IG보다 스프레드가 낮나요?"
      : "Why do SSA issuers get tighter spreads than IG corporates?",
    a: (ko: boolean) => ko
      ? "소버린 또는 초국가기구는 과세권·자국통화 발행권·국제기구 보장을 배경으로 하기 때문에 신용리스크가 사실상 0에 가깝습니다. 투자자들은 이를 '무위험'으로 간주하며, 중앙은행·SWF 등 규제 제약이 가장 강한 기관들이 의무 보유합니다. 따라서 수요가 항상 초과하여 스프레드가 매우 낮게 형성됩니다."
      : "SSA issuers are backed by taxing authority, domestic currency issuance, or multilateral guarantees, making credit risk near-zero. They are mandated holdings for the most regulated institutions — central banks, SWFs — ensuring persistent excess demand that compresses spreads.",
  },
  {
    q: (ko: boolean) => ko
      ? "FIG 발행사의 AT1은 왜 HY 투자자가 삽니까?"
      : "Why do HY investors buy FIG AT1 bonds?",
    a: (ko: boolean) => ko
      ? "AT1(Additional Tier 1)은 발행사가 PONV(생존불능점)에 도달하면 손실흡수가 발생하고 영구적으로 쿠폰 취소가 가능한 복잡한 구조입니다. 이 위험 때문에 쿠폰이 5–8%+ (때로 10%+)로 높아지며, IG 펀드의 mandate 밖에 놓입니다. 결과적으로 HY·하이브리드 전문 펀드가 주요 투자자가 됩니다."
      : "AT1 bonds can absorb losses at PONV (point of non-viability) and permanently cancel coupons. This risk pushes coupon rates to 5–8%+ (sometimes 10%+), placing them outside IG fund mandates. As a result, HY and hybrid-specialist funds become the primary investors.",
  },
  {
    q: (ko: boolean) => ko
      ? "Corp IG에서 Fallen Angel이 되면 어떤 일이 일어나나요?"
      : "What happens when a Corp IG becomes a Fallen Angel?",
    a: (ko: boolean) => ko
      ? "BBB- → BB+ 강등 시 IG 전용 펀드들이 의무적으로 매도합니다. 이 강제매도(forced selling)는 스프레드를 단기간에 수백bp 확대시킵니다. IG 투자자 이탈 → 유동성 악화 → 신규 발행 비용 급증의 악순환이 생기며, 이는 기업이 BBB- 등급을 사수하려는 가장 큰 이유입니다."
      : "When rated down from BBB- to BB+, IG-mandated funds must sell. This forced selling can widen spreads by hundreds of basis points in days. The cycle: IG investor exodus → liquidity deterioration → financing cost spike → potential further downgrade. This is why companies fight hard to defend BBB-.",
  },
  {
    q: (ko: boolean) => ko
      ? "Distressed 채권은 정상 채권과 거래 방식이 어떻게 다른가요?"
      : "How does distressed bond trading differ from normal bond trading?",
    a: (ko: boolean) => ko
      ? "정상 채권은 수익률(YTM)로 호가하지만, Distressed는 액면가의 몇 퍼센트(cents on dollar)로 거래됩니다. 40 cents는 액면의 40% 가격. 분석도 달라져서 YTM 대신 '부도 시 회수율'과 '부도 확률'이 핵심입니다. 거래 상대방도 일반 채권 딜러에서 Special Situations 전문 데스크로 바뀝니다."
      : "Normal bonds trade on YTM; distressed bonds trade on price (cents on dollar). If a bond is at 40 cents, you pay 40% of face value. Analysis shifts from YTM to expected recovery rate and default probability. Trading counterparties shift from regular bond desks to Special Situations desks.",
  },
  {
    q: (ko: boolean) => ko
      ? "뱅커는 발행사의 어떤 재무 지표를 가장 먼저 봅니까?"
      : "What financial metrics does a DCM banker check first?",
    a: (ko: boolean) => ko
      ? "① Net Debt/EBITDA (레버리지) — 4x 이하면 IG, 6x 이상이면 HY·LevFin 영역. ② EBITDA/이자비용 (이자커버리지) — 2x 이하면 위험신호. ③ 부채 만기 프로파일 — 단기에 집중된 만기는 리파이낸싱 리스크. ④ 유동성 (캐시+신용한도) — 12개월 이상 확보 여부. ⑤ 기존 채권의 시장 스프레드 — 현재 시장이 발행사를 어떻게 보는지 가장 직접적인 신호."
      : "① Net Debt/EBITDA (leverage) — below 4x suggests IG, above 6x puts you in HY/LevFin territory. ② EBITDA/Interest (coverage) — below 2x is a red flag. ③ Maturity profile — front-loaded maturities signal refinancing risk. ④ Liquidity (cash + credit lines) — at least 12 months coverage. ⑤ Existing bond spread — the most direct market signal of how investors currently view the issuer.",
  },
];

// ── Rating color helper ───────────────────────────────────────────────────────
function ratingBadgeClass(rating: string): string {
  if (rating.startsWith("AAA") || rating.startsWith("AA")) return "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300";
  if (rating.startsWith("A"))   return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
  if (rating.startsWith("BBB")) return "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300";
  if (rating.startsWith("BB"))  return "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300";
  return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
}

// ─────────────────────────────────────────────────────────────────────────────
export default function DcmIssuersClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-issuers`;

  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DCM Ch.1 — 발행사 스펙트럼: SSA에서 Distressed까지",
    description:
      "DCM 발행사 유형 완전 정리: SSA(국가·초국가기구·기관)부터 FIG·Corp IG·HY·Distressed까지 신용등급별 특성, 발행 조건, 투자자 베이스를 뱅커 시각으로 해부합니다.",
    url: pageUrl,
    datePublished: "2026-05-26",
    publisher: {
      "@type": "Organization",
      name: "Deal Story",
      url: "https://dealstory.kr",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q(ko),
      acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* JSON-LD */}
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </>

      {/* ── Series nav ── */}
      <nav className="sticky top-0 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 text-sm">
            {DCM_SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`${base}/${s.slug}`}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  s.ch === thisCh
                    ? "font-bold text-white"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                style={s.ch === thisCh ? { background: accent } : undefined}
              >
                {s.title(ko)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/market-101" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Market 101
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: accent }}>DCM Series</span>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">Ch.1</span>
          </div>

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "DCM 시리즈 · Chapter 1" : "DCM Series · Chapter 1"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 16분 읽기" : "⏱ 16 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "발행사 스펙트럼: SSA에서 Distressed까지"
              : "Issuer Spectrum: From SSA to Distressed"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "채권 발행사는 모두 같지 않습니다. 신용등급 AAA인 세계은행과 CCC인 구조조정 기업은 같은 '발행사'라는 이름을 쓰지만, 발행 조건·투자자·협상 논리가 완전히 다릅니다. DCM 뱅커가 발행사를 어떻게 구분하고, 각 티어별로 어떤 사항이 핵심인지 처음부터 끝까지 정리합니다."
              : "Not all bond issuers are equal. A AAA-rated World Bank and a CCC-rated restructuring company both carry the label 'issuer,' but their pricing conditions, investor bases, and negotiating logic are worlds apart. Here is how DCM bankers categorize issuers and what matters at each tier."}
          </p>
        </motion.section>

        {/* ── 3-stat callout row ───────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: "$130조+",
              label: (ko: boolean) => ko ? "글로벌 채권시장 규모" : "Global Bond Market",
              sub: (ko: boolean) => ko ? "주식시장보다 큰 채권 세계" : "Larger than equities",
            },
            {
              stat: ko ? "5개" : "5",
              label: (ko: boolean) => ko ? "발행사 티어" : "Issuer Tiers",
              sub: (ko: boolean) => ko ? "SSA·FIG·IG·HY·Distressed" : "SSA·FIG·IG·HY·Distressed",
            },
            {
              stat: "AAA→D",
              label: (ko: boolean) => ko ? "등급 스펙트럼" : "Rating Spectrum",
              sub: (ko: boolean) => ko ? "신용등급이 모든 것을 결정" : "Rating determines everything",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.08)}
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-0.5">{item.label(ko)}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Section intro ────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "발행사 스펙트럼 전체 지도" : "The Full Issuer Spectrum"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            {ko
              ? "DCM 뱅커가 발행사를 처음 접하는 순간, 머릿속에서는 빠르게 다음 질문이 돌아갑니다. '이 발행사는 어느 티어에 속하나? 어떤 투자자를 타겟으로 해야 하나? 어떤 구조와 만기가 맞나?' 이 분류는 단순한 학문적 구분이 아니라 딜 전략의 출발점입니다."
              : "When a DCM banker first engages an issuer, a rapid mental triage begins: which tier does this issuer sit in, which investors should we target, what structure and tenor fits? This classification is not academic — it is the starting point for deal strategy."}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "아래 5개 티어는 신용등급과 발행 목적에 따라 완전히 다른 세계를 형성합니다. 각 카드의 '뱅커 노트'는 교과서에 없는 실무 인사이트입니다."
              : "The five tiers below form entirely different worlds by credit rating and issuance purpose. The 'Banker's Note' in each card contains practitioner insight you won't find in textbooks."}
          </p>
        </motion.div>

        {/* ── Issuer Tier Cards ────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="space-y-6 mb-16"
        >
          {ISSUER_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              variants={fadeUp(i * 0.07)}
              className={`rounded-2xl border p-6 ${tier.bg} ${tier.border}`}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 mt-0.5 ${tier.dot}`} />
                  <div>
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-50">{tier.label}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{tier.sub(ko)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${ratingBadgeClass(tier.rating)}`}>
                    {tier.rating}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-black/20 px-2 py-1 rounded">
                    {tier.spread}
                  </span>
                </div>
              </div>

              {/* Examples */}
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                  {ko ? "대표 사례" : "Examples"}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{tier.examples(ko)}</span>
              </div>

              {/* Mandate */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                <span className="font-semibold text-gray-600 dark:text-gray-300">{ko ? "발행 의무/목적: " : "Mandate: "}</span>
                {tier.mandate(ko)}
              </p>

              {/* Banker's note */}
              <div
                className="rounded-lg p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
                style={{ borderLeft: "4px solid #f59e0b" }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold text-xs mt-0.5 flex-shrink-0">
                    {ko ? "🔑 뱅커 노트" : "🔑 Banker's Note"}
                  </span>
                  <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                    {tier.bankersNote(ko)}
                  </p>
                </div>
              </div>

              {/* Deal Story link */}
              {tier.link && (
                <div className="mt-4">
                  <Link
                    href={tier.link}
                    className="text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: accent }}
                  >
                    {ko ? "→ Deal Story 보기" : "→ View Deal Story"}
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Fallen Angel Explainer ───────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "Fallen Angel: BBB-→BB+ 강등의 연쇄 효과" : "Fallen Angel: The BBB-→BB+ Downgrade Cascade"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "왜 기업들은 BBB- 등급을 목숨처럼 사수하나? 강등 직후 무슨 일이 벌어지는가."
              : "Why do companies defend BBB- with their corporate life? Here is what happens right after a downgrade."}
          </p>

          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {ko
                ? "글로벌 채권 투자자 중 상당수는 'IG-only mandate'를 가집니다. 보험사·연기금·일부 자산운용사는 정관 또는 규제에 의해 투자등급(BBB- 이상) 채권만 보유할 수 있습니다. 따라서 BBB-에서 BB+로 한 단계만 강등되어도 — 즉 IG와 HY의 경계선을 넘는 순간 — 이 기관들은 의무적으로 매도해야 합니다."
                : "A large portion of global bond investors operate under 'IG-only mandates.' Insurers, pensions, and certain asset managers can only hold investment-grade bonds (BBB- or above) by charter or regulation. So a single-notch downgrade from BBB- to BB+ — crossing the IG/HY boundary — forces these institutions to sell."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko
                ? "이 강제매도는 유동성 충격을 만듭니다. 갑자기 수요가 사라지고 공급이 넘치면서 스프레드가 단 며칠 만에 수백bp 확대될 수 있습니다. 한번 Fallen Angel이 된 기업은 다시 IG 등급을 회복하더라도 한동안 시장에서 '트라우마' 프리미엄을 지불해야 합니다."
                : "This forced selling creates a liquidity shock. Supply suddenly overwhelms demand, potentially widening spreads by hundreds of basis points within days. Even after a company recovers its IG rating, it typically pays a 'trauma premium' for some time in the market."}
            </p>
          </div>

          {/* 3-step flow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: (ko: boolean) => ko ? "강등 공시" : "Downgrade Announced",
                desc: (ko: boolean) => ko
                  ? "신용평가사가 BBB-→BB+ 강등 발표. IG 인덱스(e.g., Bloomberg US Agg)에서 즉시 제외 결정."
                  : "Rating agency announces BBB-→BB+ cut. Immediate exclusion decision from IG indices (e.g., Bloomberg US Agg).",
                color: "border-orange-300 dark:border-orange-600",
                num: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
              },
              {
                step: "02",
                title: (ko: boolean) => ko ? "강제 매도 폭풍" : "Forced Selling Storm",
                desc: (ko: boolean) => ko
                  ? "IG-only 펀드 수천억~수조원 규모의 의무 매도. HY 펀드가 낮은 가격에 흡수하기까지 스프레드 급등."
                  : "IG-only funds dump hundreds of billions in mandatory sales. Spreads spike as HY funds absorb at steep discounts.",
                color: "border-red-300 dark:border-red-600",
                num: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
              },
              {
                step: "03",
                title: (ko: boolean) => ko ? "자금조달 비용 급등" : "Financing Cost Spike",
                desc: (ko: boolean) => ko
                  ? "신규 발행 시 훨씬 높은 쿠폰 요구. HY 투자자베이스는 규모가 작아 발행 규모 제한. 악순환 시작."
                  : "New issuance requires much higher coupons. HY investor base is smaller, limiting deal size. Vicious cycle begins.",
                color: "border-violet-300 dark:border-violet-600",
                num: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 ${item.color} bg-white dark:bg-gray-900 p-5`}
              >
                <span className={`inline-block text-xs font-bold px-2 py-1 rounded mb-3 ${item.num}`}>
                  STEP {item.step}
                </span>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title(ko)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-4">
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>{ko ? "실전 사례: " : "Real-World Examples: "}</strong>
              {ko
                ? "코로나19 직후인 2020년 3~4월, Ford·Delta Air Lines·Macy's 등 수백개 기업이 Fallen Angel이 되었습니다. 당시 HY 스프레드가 수주 만에 T+1100bp까지 치솟았습니다. 이 시기 뱅커들은 BBB 등급 기업들에게 '지금 당장 유동성을 확보하라'는 긴급 권고를 했습니다."
                : "After COVID-19 in March–April 2020, hundreds of companies including Ford, Delta Air Lines, and Macy's became Fallen Angels. HY spreads soared to T+1100bp within weeks. During this period, bankers urgently advised BBB-rated companies to secure liquidity immediately."}
            </p>
          </div>
        </motion.section>

        {/* ── Bankers' Checklist ───────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "발행사를 처음 만날 때 뱅커가 보는 것" : "What Bankers Check First When Meeting an Issuer"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "피치(pitch) 전 준비부터 딜 실행까지, 뱅커의 발행사 진단 체크리스트"
              : "From pre-pitch preparation to deal execution — the banker's issuer diagnostic checklist"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHECKLIST.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.06)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title(ko)}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-6 rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">
                {ko ? "프로 팁: " : "Pro Tip: "}
              </strong>
              {ko
                ? "이 6가지 중 '기존 채권의 시장 스프레드'는 가장 빠른 진단 도구입니다. 재무제표를 분석하기 전에 Bloomberg에서 발행사의 기존 채권 OAS(옵션 조정 스프레드)를 먼저 확인하면, 시장이 이 발행사를 지금 어떻게 보는지 한눈에 알 수 있습니다. 재무 모델보다 시장 스프레드가 더 정직할 때가 많습니다."
                : "Among these six, 'existing bond market spread' is the fastest diagnostic tool. Before analyzing financial statements, pull the issuer's existing bond OAS (Option-Adjusted Spread) on Bloomberg. It tells you instantly what the market thinks of this issuer right now — often more honest than any financial model."}
            </p>
          </div>
        </motion.section>

        {/* ── Deep Dive: FIG Capital Structure ────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "FIG 자본구조 딥다이브: Senior에서 AT1까지" : "FIG Capital Structure Deep Dive: Senior to AT1"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "은행 하나가 발행하는 채권도 종류가 다양하다 — 같은 발행사, 완전히 다른 세계"
              : "A single bank can issue very different bonds — same issuer, completely different worlds"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {ko
              ? "FIG 발행사는 독특합니다. 은행 하나가 Senior Preferred, Senior Non-Preferred(MREL/TLAC), Tier 2, AT1 등 전혀 다른 채권을 동시에 발행할 수 있고, 각 채권은 완전히 다른 투자자층을 타겟으로 합니다. 뱅커는 이 자본구조 지도를 머릿속에 완벽히 가지고 있어야 합니다."
              : "FIG issuers are unique. A single bank can simultaneously issue Senior Preferred, Senior Non-Preferred (MREL/TLAC), Tier 2, and AT1 bonds — each targeting entirely different investor bases. Bankers need this capital structure map memorized."}
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "채권 유형" : "Bond Type"}</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "손실흡수" : "Loss Absorption"}</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "주요 투자자" : "Key Investors"}</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "쿠폰 수준" : "Coupon Level"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    type: "Senior Preferred",
                    loss: ko ? "거의 없음 (예금자 이후 최우선)" : "Minimal (priority after deposits)",
                    investors: ko ? "보험사, 연기금, AM IG펀드" : "Insurers, pensions, AM IG funds",
                    coupon: "T+60–150bp",
                    rowBg: "bg-teal-50/50 dark:bg-teal-900/10",
                  },
                  {
                    type: "Senior Non-Preferred / MREL",
                    loss: ko ? "파산 시 보통 채권 전 손실" : "Absorb losses before ordinary bonds",
                    investors: ko ? "AM, 일부 보험사" : "AM, some insurers",
                    coupon: "T+100–250bp",
                    rowBg: "",
                  },
                  {
                    type: "Tier 2",
                    loss: ko ? "PONV 도달 시 손실흡수" : "Absorb at PONV",
                    investors: ko ? "AM HY펀드, 일부 IG" : "AM HY funds, some IG",
                    coupon: "T+200–400bp",
                    rowBg: "bg-orange-50/50 dark:bg-orange-900/10",
                  },
                  {
                    type: "AT1 (CoCo)",
                    loss: ko ? "쿠폰 취소 + 원금 소각/전환" : "Coupon cancellation + write-down/conversion",
                    investors: ko ? "HY·하이브리드 전문 펀드, HF" : "HY/hybrid specialist funds, HFs",
                    coupon: "5–10%+ (fixed reset)",
                    rowBg: "bg-red-50/50 dark:bg-red-900/10",
                  },
                ].map((row, i) => (
                  <tr key={i} className={row.rowBg}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.loss}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.investors}</td>
                    <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">{row.coupon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {ko
              ? "2023년 크레딧 스위스(CS) 사태에서 AT1 채권 160억 스위스프랑이 전액 소각되었습니다. 이 사건은 AT1의 구조적 위험을 세계에 각인시켰고, 이후 AT1 발행 시 투자자들이 훨씬 더 높은 프리미엄을 요구하게 되었습니다. 링크:"
              : "In the 2023 Credit Suisse crisis, CHF 16 billion of AT1 bonds were written to zero. This event permanently changed how investors price AT1 risk globally. Link:"}
            {" "}
            <Link href="/market/credit-suisse-at1" className="font-medium hover:opacity-80 transition-opacity" style={{ color: accent }}>
              {ko ? "CS AT1 딜 스토리 보기" : "View CS AT1 Deal Story"}
            </Link>
          </p>
        </motion.section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <summary className="flex items-start justify-between gap-3 px-5 py-4 cursor-pointer list-none select-none hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                    {faq.q(ko)}
                  </span>
                  <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200 mt-0.5">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                  {faq.a(ko)}
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        {/* ── Related content ──────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-5">
            {ko ? "연관 콘텐츠" : "Related Content"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/market-101/dcm-overview",
                label: (ko: boolean) => ko ? "DCM 개요 — 시리즈 첫번째 챕터" : "DCM Overview — Series Chapter 0",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/dcm-investors",
                label: (ko: boolean) => ko ? "DCM Ch.2 — 투자자 생태계" : "DCM Ch.2 — Investor Ecosystem",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market/korea-1998-external-bond",
                label: (ko: boolean) => ko ? "1998 한국 외평채 — SSA 발행 실전 사례" : "Korea 1998 External Bond — SSA Issuance Case",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
              },
              {
                href: "/market/credit-suisse-at1",
                label: (ko: boolean) => ko ? "Credit Suisse AT1 전액 소각 사태" : "Credit Suisse AT1 Full Write-Down",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
              },
            ].map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/30 dark:hover:bg-teal-900/10 transition-all group"
              >
                <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${rel.tagColor}`}>
                  {rel.tag(ko)}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {rel.label(ko)}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Prev / Next ──────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "이전" : "Previous"}</span>
                {prev.title(ko)}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group text-right"
            >
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "다음" : "Next"}</span>
                {next.title(ko)}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}
