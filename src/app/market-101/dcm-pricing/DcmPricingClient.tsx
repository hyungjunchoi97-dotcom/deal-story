"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";

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

const thisCh = 6;

// ── Spread types ──────────────────────────────────────────────────────────────
const SPREADS = [
  {
    id: "g",
    name: "G-Spread",
    full: (ko: boolean) => ko ? "Government Spread" : "Government Spread",
    formula: (ko: boolean) => ko
      ? "채권 YTM − 동일 만기 국채 YTM"
      : "Bond YTM − same-tenor government bond YTM",
    whenUsed: (ko: boolean) => ko
      ? "IG 채권 일상 호가·비교 분석"
      : "IG bond day-to-day quoting and comp analysis",
    pros: (ko: boolean) => ko ? "가장 직관적·보편적" : "Most intuitive and universal",
    cons: (ko: boolean) => ko
      ? "국채 수익률 변동에 따라 달라짐 — 인터폴레이션 오차 있음"
      : "Affected by government yield moves — interpolation error",
    example: "T+180bp → UST 5yr at 4.20% → Bond YTM = 6.00%",
    color: "border-teal-300 bg-teal-50 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    label: (ko: boolean) => ko ? "USD IG 표준" : "USD IG Standard",
  },
  {
    id: "i",
    name: "I-Spread",
    full: (ko: boolean) => ko ? "Interpolated Swap Spread" : "Interpolated Swap Spread",
    formula: (ko: boolean) => ko
      ? "채권 YTM − 동일 만기 이자율스왑(IRS) 고정금리"
      : "Bond YTM − same-tenor interest rate swap (IRS) fixed rate",
    whenUsed: (ko: boolean) => ko
      ? "유럽 IG 채권 표준 — Eurobond 시장"
      : "European IG standard — Eurobond market",
    pros: (ko: boolean) => ko
      ? "스왑 커브가 더 연속적·정확한 기준금리"
      : "Swap curve more continuous and accurate benchmark",
    cons: (ko: boolean) => ko
      ? "스왑 스프레드 변동으로 해석이 복잡해질 수 있음"
      : "Swap spread moves can complicate interpretation",
    example: "EUR 5yr IRS at 3.10% → Bond YTM 3.90% → I-Spread = 80bp",
    color: "border-blue-300 bg-blue-50 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    label: (ko: boolean) => ko ? "EUR IG 표준 (MS+)" : "EUR IG Standard (MS+)",
  },
  {
    id: "z",
    name: "Z-Spread",
    full: (ko: boolean) => ko ? "Zero-Volatility Spread" : "Zero-Volatility Spread",
    formula: (ko: boolean) => ko
      ? "현금흐름을 스왑 제로쿠폰 커브 + Z bp로 할인 시 시장가격과 일치하는 Z값"
      : "Z that equates the bond's PV (discounting at swap zero-coupon curve + Z) to market price",
    whenUsed: (ko: boolean) => ko
      ? "MBS·ABS·구조화 채권 — 내재 옵션 없는 채권의 정밀 분석"
      : "MBS, ABS, structured bonds — precise analysis of option-free bonds",
    pros: (ko: boolean) => ko
      ? "전체 수익률 커브를 반영한 더 정확한 측정"
      : "More accurate — reflects entire yield curve",
    cons: (ko: boolean) => ko
      ? "내재 옵션(콜·풋) 무시 — 콜러블 채권에 부적합"
      : "Ignores embedded options (call/put) — unsuitable for callable bonds",
    example: "CLO AAA tranche: Z-spread 130bp vs G-spread 140bp (curve steepness 반영)",
    color: "border-violet-300 bg-violet-50 dark:bg-violet-900/20",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    label: (ko: boolean) => ko ? "구조화·ABS" : "Structured / ABS",
  },
  {
    id: "oas",
    name: "OAS",
    full: (ko: boolean) => ko ? "Option-Adjusted Spread" : "Option-Adjusted Spread",
    formula: (ko: boolean) => ko
      ? "Z-Spread − 내재 옵션 가치(bp) = 옵션 제거 후 순수 신용 스프레드"
      : "Z-Spread minus embedded option value (bp) = pure credit spread net of option",
    whenUsed: (ko: boolean) => ko
      ? "콜러블 채권·AT1·MBS — 내재 옵션이 있는 모든 채권"
      : "Callable bonds, AT1, MBS — any bond with embedded options",
    pros: (ko: boolean) => ko
      ? "사과-사과 비교 가능 — 구조 차이를 제거한 순수 크레딧 스프레드"
      : "Apples-to-apples comparison — strips out structural differences",
    cons: (ko: boolean) => ko
      ? "옵션 모델 가정에 따라 크게 달라질 수 있음"
      : "Highly model-dependent — sensitive to option model assumptions",
    example: "AT1 Z-spread 580bp − call option value 120bp = OAS 460bp",
    color: "border-amber-300 bg-amber-50 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    label: (ko: boolean) => ko ? "AT1·콜러블·MBS" : "AT1 / Callable / MBS",
  },
  {
    id: "asw",
    name: "ASW",
    full: (ko: boolean) => ko ? "Asset Swap Spread" : "Asset Swap Spread",
    formula: (ko: boolean) => ko
      ? "채권 고정 쿠폰을 변동금리(SOFR/EURIBOR)로 스왑 시의 변동금리 가산금리"
      : "Floating rate add-on (vs SOFR/EURIBOR) when swapping bond's fixed coupon to floating",
    whenUsed: (ko: boolean) => ko
      ? "자산스왑 패키지 거래·듀레이션 헤지·상대가치 비교"
      : "Asset swap package trades, duration hedging, relative value comparison",
    pros: (ko: boolean) => ko
      ? "헤지 포지션의 실제 비용 계산에 직접 사용"
      : "Directly used for calculating actual hedging costs",
    cons: (ko: boolean) => ko
      ? "채권 가격 변동 시 ASW도 바뀜 — 고정 비교 기준 아님"
      : "Changes as bond price moves — not a fixed comparison anchor",
    example: "IG bond ASW = SOFR+85bp → 변동금리 투자자가 이 채권을 헤지하면 85bp 획득",
    color: "border-green-300 bg-green-50 dark:bg-green-900/20",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    label: (ko: boolean) => ko ? "헤지 포지션·ALM" : "Hedged Positions / ALM",
  },
];

// ── NIC examples ──────────────────────────────────────────────────────────────
const NIC_EXAMPLES = [
  {
    issuerType: (ko: boolean) => ko ? "AAA SSA (한국 외평채·KDB)" : "AAA SSA (Korea Sovereign, KDB)",
    typicalNIC: "1–5bp",
    reason: (ko: boolean) => ko
      ? "투자자 풀이 크고 신뢰가 높아 NIC 최소화 가능"
      : "Large, trusted investor pool allows minimal NIC",
    color: "border-teal-200",
  },
  {
    issuerType: (ko: boolean) => ko ? "A 등급 FIG (Senior, 대형 은행)" : "A-rated FIG Senior (Major Bank)",
    typicalNIC: "3–8bp",
    reason: (ko: boolean) => ko
      ? "이름 있는 은행이지만 공급이 많아 약간의 NIC 필요"
      : "Named bank but heavy supply requires modest NIC",
    color: "border-blue-200",
  },
  {
    issuerType: (ko: boolean) => ko ? "BBB 기업채 (IG 하단)" : "BBB Corporate (IG floor)",
    typicalNIC: "5–12bp",
    reason: (ko: boolean) => ko
      ? "Fallen Angel 위험 인식 + 투자자 수요 불확실성"
      : "Fallen Angel perception + demand uncertainty",
    color: "border-amber-200",
  },
  {
    issuerType: (ko: boolean) => ko ? "BB HY 채권" : "BB High Yield",
    typicalNIC: "12.5–25bp",
    reason: (ko: boolean) => ko
      ? "투자자 풀 좁음·리스크 프리미엄·북빌딩 불확실성"
      : "Narrow investor pool, risk premium, book uncertainty",
    color: "border-orange-200",
  },
  {
    issuerType: (ko: boolean) => ko ? "AT1 (영구채, 은행 자본)" : "AT1 (Perpetual, Bank Capital)",
    typicalNIC: "25–50bp+",
    reason: (ko: boolean) => ko
      ? "복잡한 구조·PONV 리스크·영구채 프리미엄"
      : "Complex structure, PONV risk, perpetual premium",
    color: "border-red-200",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "G-spread와 I-spread 중 어떤 것을 써야 하나요?"
      : "Which should I use, G-spread or I-spread?",
    a: (ko: boolean) => ko
      ? "시장 관행에 따릅니다. USD 채권은 G-spread(미국 국채 기준)가 표준이고, EUR 채권은 I-spread(스왑 커브 기준)가 표준입니다. 이유: EUR 국채는 독일·프랑스·이탈리아 등 국가별로 달라 단일 기준이 없지만, EUR IRS 커브는 통일된 벤치마크입니다. 따라서 EUR Eurobond 발행 보도자료에는 항상 'MS+Xbp'(Mid-Swap 기준)로 표기됩니다."
      : "Follow market convention. USD bonds use G-spread (vs US Treasuries) as standard; EUR bonds use I-spread (vs swap curve) as standard. Reason: EUR government bonds vary by country (Germany/France/Italy), so no single benchmark exists, but the EUR IRS curve is unified. This is why EUR Eurobond press releases always quote 'MS+Xbp' (mid-swap basis).",
  },
  {
    q: (ko: boolean) => ko
      ? "OAS가 음수(negative)가 될 수 있나요?"
      : "Can OAS be negative?",
    a: (ko: boolean) => ko
      ? "이론적으로 가능하고 실제로도 발생합니다. 특히 커버드본드와 MBS에서: 이 채권들은 내재 콜 옵션의 가치가 크고, 투자자가 기꺼이 마이너스 순수 크레딧 스프레드를 받아들이는 상황(고수요·유동성 프리미엄 지불)이 생깁니다. 일반적으로 negative OAS는 '채권의 내재 옵션 가치를 과소평가한 모델 오류' 또는 '유동성 프리미엄이 크레딧 스프레드를 압도하는 상황'을 의미합니다."
      : "Yes — theoretically possible and it happens, especially in covered bonds and MBS. These bonds have valuable embedded call options; investors sometimes accept negative pure credit spreads in high-demand situations (paying a liquidity premium). Generally, negative OAS signals either a model error (undervaluing the embedded option) or a situation where liquidity premium overwhelms credit spread.",
  },
  {
    q: (ko: boolean) => ko
      ? "IPT에서 최종 스프레드까지 얼마나 많이 타이트닝되나요?"
      : "How much does spread tighten from IPT to final?",
    a: (ko: boolean) => ko
      ? "발행 조건과 수요에 따라 다르지만, 일반적으로: IG 강한 수요 시 10–30bp 타이트닝, IG 보통 수요 5–15bp, HY 20–50bp. 타이트닝이 클수록 발행사에게 유리하지만 투자자는 '낚였다'는 느낌을 받을 수 있습니다. 과도한 타이트닝은 2차 시장(aftermarket) 성과 악화로 이어져 장기적으로 발행사 평판을 해칩니다. 균형이 중요합니다."
      : "Varies by conditions and demand, but typically: strong IG demand = 10–30bp tightening, normal IG = 5–15bp, HY = 20–50bp. Larger tightening benefits the issuer but investors feel 'baited.' Excessive tightening leads to poor secondary market performance, damaging issuer reputation long-term. Balance is critical.",
  },
  {
    q: (ko: boolean) => ko
      ? "채권이 2차 시장에서 발행가 아래로 떨어지면 어떻게 되나요?"
      : "What happens when a bond trades below its issue price in the secondary market?",
    a: (ko: boolean) => ko
      ? "발행 직후 2차 시장에서 아래로 거래되는 것을 'broken syndicate' 또는 'broken deal'이라고 합니다. 이는 ① NIC를 충분히 주지 않았거나, ② 발행 후 시장 악화, ③ 과도한 타이트닝의 결과입니다. 언더라이터 뱅크가 '안정화 매수(stabilization)'로 시장을 지지할 수 있지만, 발행사 평판에 타격이 되고 다음 발행 시 더 많은 NIC를 줘야 합니다."
      : "A bond trading below issue price shortly after launch is called a 'broken syndicate' or 'broken deal.' This happens due to: ① insufficient NIC, ② market deterioration post-launch, ③ excessive tightening. Underwriter banks may stabilize via 'stabilization buying,' but it damages issuer reputation and forces higher NIC in the next deal.",
  },
  {
    q: (ko: boolean) => ko
      ? "ASW는 일반 투자자도 알아야 하는 개념인가요?"
      : "Does a regular investor need to understand ASW?",
    a: (ko: boolean) => ko
      ? "일반 채권 투자자에게는 G-spread나 I-spread만으로 충분합니다. ASW는 주로 자산-부채 관리(ALM)를 하는 기관(보험사·은행)이나 절대수익 추구 헤지펀드에게 중요합니다. 이들은 채권을 고정금리 자산으로 보유하지 않고, 스왑을 통해 변동금리로 전환하여 포지션을 관리합니다. 이 경우 ASW가 '실제로 내가 SOFR 대비 몇 bp를 받느냐'를 직접 알려주는 지표입니다."
      : "For regular bond investors, G-spread or I-spread is sufficient. ASW matters primarily to ALM-driven institutions (insurers, banks) and absolute-return hedge funds. They don't hold bonds as fixed-rate assets — they swap to floating via asset swaps to manage positions. In that case, ASW directly answers 'how many bps over SOFR am I actually receiving?'",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Bank for International Settlements", title: "Understanding the Term Structure of Interest Rates and Credit Spreads", url: "https://www.bis.org/publ/work228.htm", source: "BIS Working Papers, 2023" },
  { id: 2, author: "PIMCO", title: "Understanding Bond Spread Terminology — G-Spread, Z-Spread, OAS", url: "https://www.pimco.com/en-us/resources/education/understanding-investing/bond-spread-terminology", source: "PIMCO Education, 2024" },
  { id: 3, author: "Federal Reserve Board", title: "Credit Risk and the Option-Adjusted Spread", url: "https://www.federalreserve.gov/pubs/feds/2000/200060/200060pap.pdf", source: "Federal Reserve, 2023" },
  { id: 4, author: "Bloomberg", title: "Fixed Income Analytics Reference Guide — Spread Calculations", url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/", source: "Bloomberg Terminal Documentation, 2024" },
  { id: 5, author: "CFA Institute", title: "Fixed Income Analysis — Spread Measures and Their Applications", url: "https://www.cfainstitute.org/en/membership/professional-development/refresher-readings/introduction-to-fixed-income-valuation", source: "CFA Program Curriculum, 2024" },
];
export default function DcmPricingClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-pricing`;

  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DCM Ch.6 — 프라이싱: G/I/Z/OAS/ASW 스프레드와 NIC",
    description:
      "채권 프라이싱의 완전 언어: G-spread, I-spread, Z-spread, OAS, ASW, NIC의 차이·계산법·사용 맥락. IPT에서 최종 스프레드까지 가격이 결정되는 실전 메커니즘을 해부합니다.",
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
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/market-101" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Market 101
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: accent }}>DCM Series</span>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">Ch.6</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "DCM 시리즈 · Chapter 6" : "DCM Series · Chapter 6"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 15분 읽기" : "⏱ 15 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "프라이싱: G/I/Z/OAS/ASW 스프레드와 NIC"
              : "Pricing: G / I / Z / OAS / ASW Spreads and NIC"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "Bloomberg YAS 화면을 열면 채권 하나에 최소 5가지 스프레드 숫자가 동시에 표시됩니다. 왜 5가지나 필요할까요? 각각이 다른 질문에 답하기 때문입니다. 이 챕터는 G/I/Z/OAS/ASW의 차이와 NIC 경제학을 실전 예시와 함께 완전히 해부합니다."
              : "Open a Bloomberg YAS screen and you'll see at least five different spread numbers for a single bond simultaneously. Why five? Because each answers a different question. This chapter fully dissects G/I/Z/OAS/ASW differences and the economics of NIC with worked examples."}
          </p>
        </motion.section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>


          {/* ── Rate Benchmarks deep-dive link ── */}
          <div
            className="mt-6 p-4 rounded-xl border flex items-start gap-3"
            style={{ borderColor: "#ccfbf1", background: "#f0fdf9" }}
          >
            <span className="text-xl mt-0.5">📐</span>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">
                {ko ? "SOFR·LIBOR 전환 배경과 Mid-Swap의 정체가 궁금하신가요?" : "Want to understand the SOFR/LIBOR transition and what Mid-Swap really is?"}
              </p>
              <Link
                href={`${base}/dcm-rate-benchmarks`}
                className="text-sm font-medium hover:underline"
                style={{ color: "#14b8a6" }}
              >
                {ko ? "DCM Special — SOFR·LIBOR·Mid-Swap·통화스왑 완전 해부 →" : "DCM Special — SOFR, LIBOR, Mid-Swap & CCS Deep-Dive →"}
              </Link>
            </div>
          </div>

        {/* ── 3-stat callout ───────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: ko ? "5가지" : "5",
              label: (ko: boolean) => ko ? "스프레드 측정 방법" : "Spread Measures",
              sub: (ko: boolean) => ko ? "G·I·Z·OAS·ASW — 각각 다른 질문에 답" : "G·I·Z·OAS·ASW — each answers a different question",
            },
            {
              stat: "G-spread",
              label: (ko: boolean) => ko ? "USD IG 표준 측정법" : "USD IG Standard",
              sub: (ko: boolean) => ko ? "국채 대비 가장 보편적 호가 방식" : "Most universal quoting convention vs govt bonds",
            },
            {
              stat: "OAS",
              label: (ko: boolean) => ko ? "옵션 제거 후 순수 크레딧" : "Pure Credit (Option-Stripped)",
              sub: (ko: boolean) => ko ? "콜러블·AT1·MBS 비교의 핵심" : "Key for comparing callable / AT1 / MBS bonds",
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

        {/* ── Why Multiple Spreads ─────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "왜 스프레드가 5가지나 필요한가?" : "Why Are Five Spread Measures Needed?"}
          </h2>

          <div
            className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 mb-6"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              {ko
                ? "모든 스프레드의 공통 목적은 같습니다: '이 채권이 얼마나 위험한가?'를 숫자로 표현하는 것입니다. 하지만 '위험'을 측정하는 방식에는 여러 관점이 있습니다."
                : "All spreads share the same core purpose: expressing 'how risky is this bond?' as a number. But there are multiple perspectives on what 'risk' means and how to measure it."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  q: (ko: boolean) => ko ? "\"국채 대비 얼마?\"" : "\"How much vs. govt bonds?\"",
                  a: (ko: boolean) => ko ? "→ G-spread (정부채 기준)" : "→ G-spread (vs. Treasuries)",
                  color: "border-teal-200",
                },
                {
                  q: (ko: boolean) => ko ? "\"스왑 커브 대비 얼마?\"" : "\"How much vs. the swap curve?\"",
                  a: (ko: boolean) => ko ? "→ I-spread (스왑 고정금리 기준)" : "→ I-spread (vs. IRS fixed rate)",
                  color: "border-blue-200",
                },
                {
                  q: (ko: boolean) => ko ? "\"커브 전체 반영 시 얼마?\"" : "\"Accounting for the full curve?\"",
                  a: (ko: boolean) => ko ? "→ Z-spread (제로쿠폰 커브 할인)" : "→ Z-spread (zero-coupon curve discounting)",
                  color: "border-violet-200",
                },
                {
                  q: (ko: boolean) => ko ? "\"옵션 빼면 얼마?\"" : "\"Strip out the option — then what?\"",
                  a: (ko: boolean) => ko ? "→ OAS (내재 옵션 가치 제거)" : "→ OAS (option value stripped out)",
                  color: "border-amber-200",
                },
                {
                  q: (ko: boolean) => ko ? "\"헤지하면 얼마?\"" : "\"If I hedge to floating — how much?\"",
                  a: (ko: boolean) => ko ? "→ ASW (스왑 후 변동금리 가산)" : "→ ASW (floating spread post-swap)",
                  color: "border-green-200",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-lg border-2 ${item.color} bg-white dark:bg-gray-900 p-3`}>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{item.q(ko)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.a(ko)}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "실전에서 뱅커는 딜 유형에 따라 적합한 스프레드를 선택합니다. USD IG 발행에는 G-spread, EUR Eurobond에는 I-spread, AT1이나 콜러블 채권의 비교에는 OAS, 구조화 채권의 정밀 분석에는 Z-spread, 자산스왑 포지션 관리에는 ASW를 씁니다. 이 선택을 틀리면 투자자와의 소통에서 혼란이 발생합니다."
              : "In practice, bankers choose the appropriate spread for the deal type. G-spread for USD IG, I-spread for EUR Eurobonds, OAS for comparing AT1 or callable bonds, Z-spread for precise structured product analysis, ASW for managing hedged positions. Using the wrong one creates communication confusion with investors."}
          </p>
        </motion.section>

        {/* ── Spread Cards ─────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5대 스프레드 완전 해부" : "Five Spread Types — Complete Breakdown"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "공식·활용 맥락·장단점·실전 예시까지 — 외워야 하는 이유와 함께"
              : "Formula, usage context, pros/cons, and worked examples — with reasoning for why each matters"}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="space-y-6"
          >
            {SPREADS.map((sp, i) => (
              <motion.div
                key={sp.id}
                variants={fadeUp(i * 0.07)}
                className={`rounded-2xl border-2 p-6 ${sp.color}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold font-mono text-gray-900 dark:text-gray-50">{sp.name}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${sp.badge}`}>
                      {sp.label(ko)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 italic">{sp.full(ko)}</span>
                </div>

                {/* Formula */}
                <div className="mb-4 p-3 rounded-lg bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 block mb-1">
                    {ko ? "계산식" : "Formula"}
                  </span>
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200 leading-relaxed">
                    {sp.formula(ko)}
                  </code>
                </div>

                {/* When used */}
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 mr-2">
                    {ko ? "주요 활용" : "When Used"}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{sp.whenUsed(ko)}</span>
                </div>

                {/* Pros/Cons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{sp.pros(ko)}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{sp.cons(ko)}</span>
                  </div>
                </div>

                {/* Example */}
                <div className="rounded-lg p-3 bg-white/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 block mb-1">
                    {ko ? "실전 예시" : "Worked Example"}
                  </span>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">{sp.example}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── IPT → Final Spread Journey ───────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "IPT에서 최종 스프레드까지 — 가격이 결정되는 과정" : "From IPT to Final Spread — How Price Is Set"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "딜 당일 오전, 2–4시간 만에 가격이 확정되는 실전 메커니즘"
              : "On deal day morning, the 2–4 hour real-world pricing mechanism"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "IPT(Initial Price Thoughts)는 신디케이트 데스크가 설정하는 '협상의 시작점'입니다. 너무 타이트하게 설정하면 투자자 오더가 부족하고, 너무 넓게 설정하면 발행사가 과도한 비용을 부담합니다. IPT 설정은 Comparable analysis(comp)와 pilot fishing 결과를 기반으로 시장의 수용 가능 범위를 추정하는 작업입니다."
              : "IPT (Initial Price Thoughts) is the 'opening bid' set by the Syndicate desk. Too tight and there aren't enough investor orders; too wide and the issuer pays unnecessary cost. Setting IPT means estimating the market's acceptable range, using comparable analysis (comps) and pilot fishing results."}
          </p>

          {/* Step-by-step visual */}
          <div className="relative">
            <div className="hidden sm:block absolute left-6 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  label: (ko: boolean) => ko ? "IPT 공표 (오전 7–8시)" : "IPT Announced (7–8am)",
                  spread: "T+200bp area",
                  desc: (ko: boolean) => ko
                    ? "신디케이트가 Sales를 통해 투자자에게 IPT를 전달합니다. 'area'는 이 숫자 주변에서 최종 결정될 것이라는 신호입니다. 투자자들이 내부 승인 후 오더를 제출하기 시작합니다."
                    : "Syndicate communicates IPT to investors via Sales. 'Area' signals the final price will land around this number. Investors begin submitting orders after internal approval.",
                  color: "border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-900/60",
                  badge: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
                },
                {
                  step: "2",
                  label: (ko: boolean) => ko ? "Guidance Tightening (오전 9–10시)" : "Guidance Tightening (9–10am)",
                  spread: "T+185bp area",
                  desc: (ko: boolean) => ko
                    ? "오더북이 2–3x 커버리지를 달성하면 신디케이트가 스프레드를 좁힙니다. 이 발표로 일부 투자자는 오더를 취소하고 일부는 더 큰 오더를 냅니다. 오더북의 '질'을 테스트하는 과정이기도 합니다."
                    : "When the book hits 2-3x coverage, Syndicate tightens. This announcement causes some investors to withdraw (too tight) while others increase orders. It's also a test of order book 'quality.'",
                  color: "border-l-4 border-amber-300 bg-amber-50 dark:bg-amber-900/20",
                  badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                },
                {
                  step: "3",
                  label: (ko: boolean) => ko ? "Final Guidance (오전 10–11시)" : "Final Guidance (10–11am)",
                  spread: "T+175bp",
                  desc: (ko: boolean) => ko
                    ? "'area' 표현이 사라지고 확정 스프레드가 공표됩니다. 투자자들은 이 가격에서 최종 오더 규모를 확정합니다. 이후 오더 변경은 신디케이트의 사전 승인이 필요합니다."
                    : "The 'area' qualifier disappears — a fixed spread is announced. Investors confirm final order sizes at this price. After this point, order changes require Syndicate approval.",
                  color: "border-l-4 border-teal-300 bg-teal-50 dark:bg-teal-900/20",
                  badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
                },
                {
                  step: "4",
                  label: (ko: boolean) => ko ? "Books Closed & Allocation (오후 12–14시)" : "Books Closed & Allocation (12–2pm)",
                  spread: "T+175bp | NIC = 10bp",
                  desc: (ko: boolean) => ko
                    ? "오더북을 닫고 배분을 결정합니다. 최종 발행 규모도 이 단계에서 확정됩니다(업사이즈 가능). 결과가 투자자에게 통보되고, Term Sheet가 배포됩니다."
                    : "Order book closes and allocation is decided. Final deal size is also set (upsizing possible). Results are communicated to investors and the Term Sheet is distributed.",
                  color: "border-l-4 border-green-300 bg-green-50 dark:bg-green-900/20",
                  badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
                },
              ].map((step, i) => (
                <div key={i} className={`relative flex items-start gap-4 rounded-xl p-5 ${step.color}`}>
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm hidden sm:flex"
                    style={{ background: accent }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 dark:text-gray-50">{step.label(ko)}</span>
                      <code className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${step.badge}`}>
                        {step.spread}
                      </code>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.desc(ko)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">{ko ? "타이트닝 분석: " : "Tightening Analysis: "}</strong>
              {ko
                ? "이 예시에서 IPT T+200bp → 최종 T+175bp로 25bp 타이트닝이 발생했습니다. 발행사는 comp 수준(T+165bp)보다 10bp 높은 NIC를 제공했습니다. 결과: 투자자는 comp 대비 적절한 프리미엄을 받았고, 발행사는 좋은 시장 조건에서 자금을 조달했으며, 발행 직후 2차 시장에서 T+168bp에서 거래되어 '성공적 딜'의 조건을 충족했습니다."
                : "In this example, spread tightened 25bp from IPT T+200bp to final T+175bp. The issuer provided 10bp NIC above the comp level of T+165bp. Result: investors received fair premium vs. comps, issuer raised funds in good market conditions, and the bond traded at T+168bp in secondary post-launch — meeting the 'successful deal' criteria."}
            </p>
          </div>
        </motion.section>

        {/* ── NIC Table ────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "발행사별 평균 NIC 가이드" : "Average NIC Guide by Issuer Type"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            {ko
              ? "신용등급·발행사 유형별로 투자자가 요구하는 신규발행 프리미엄의 실전 기준"
              : "Practical benchmarks for NIC demanded by investors, by credit rating and issuer type"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "NIC는 고정된 숫자가 아닙니다. 시장 상황(변동성, 수급), 발행사 신용 이력, 발행 빈도, 현재 스프레드 레벨에 따라 모두 달라집니다. 아래 수치는 안정적 시장 상황에서의 대략적 기준이며, 시장 스트레스 기간에는 전반적으로 2–3배 확대될 수 있습니다."
              : "NIC is not a fixed number. It varies with market conditions (volatility, supply/demand), the issuer's credit history, issuance frequency, and current spread levels. The ranges below are rough benchmarks for stable market conditions — during market stress they can expand 2-3x across the board."}
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: accentLight }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: accent }}>
                    {ko ? "발행사 유형" : "Issuer Type"}
                  </th>
                  <th className="text-center px-4 py-3 font-semibold" style={{ color: accent }}>
                    {ko ? "평균 NIC" : "Typical NIC"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: accent }}>
                    {ko ? "배경" : "Rationale"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {NIC_EXAMPLES.map((ex, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}`}
                  >
                    <td className={`px-4 py-3 font-medium text-gray-900 dark:text-gray-100 border-l-4 ${ex.color}`}>
                      {ex.issuerType(ko)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <code className="font-mono font-bold text-sm" style={{ color: accent }}>
                        {ex.typicalNIC}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{ex.reason(ko)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ── Comparable Analysis ───────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "Comparable Analysis (Comps) — 뱅커가 가격을 추정하는 방법" : "Comparable Analysis (Comps) — How Bankers Estimate Fair Value"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {ko
              ? "Comparable Analysis(Comp Table)는 신규 발행의 적정 스프레드를 추정하기 위해 유사 채권들의 현재 스프레드를 비교하는 작업입니다. 주식의 PER 비교와 유사하지만, 채권에서는 만기·등급·구조·유동성의 차이를 모두 조정해야 합니다."
              : "Comparable Analysis (Comp Table) estimates the fair spread for a new issuance by comparing current spreads of similar bonds. Analogous to P/E comps in equity, but bond comps require adjusting for differences in maturity, rating, structure, and liquidity."}
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                step: (ko: boolean) => ko ? "Step 1: 동일 발행사 기존 채권 (On-the-run vs Off-the-run)" : "Step 1: Same Issuer's Existing Bonds (On-the-run vs Off-the-run)",
                desc: (ko: boolean) => ko
                  ? "발행사의 가장 최근 발행 채권(on-the-run)은 가장 유동적이고 시장이 가장 잘 아는 기준점입니다. 여기서 신규 발행 만기까지 인터폴레이션하여 'fair value'를 추정합니다. 예: 5년물 on-the-run이 T+160bp이고 신규 7년물을 발행한다면, 기간 프리미엄을 감안해 T+175bp 근처를 시작점으로 잡습니다."
                  : "The issuer's most recent bond (on-the-run) is the most liquid and market-familiar reference. Interpolate from there to the new issue's maturity to estimate fair value. Example: if the 5yr on-the-run trades at T+160bp and you're issuing a new 7yr, accounting for the term premium you'd start around T+175bp.",
                border: "border-teal-200",
              },
              {
                step: (ko: boolean) => ko ? "Step 2: 동일 등급 Peer 발행사 채권" : "Step 2: Same-Rating Peer Issuer Bonds",
                desc: (ko: boolean) => ko
                  ? "같은 신용등급, 같은 섹터의 유사 발행사 채권을 비교합니다. 예: BBB 한국 기업이 5년물을 발행한다면, 다른 BBB 한국 기업들의 5년물 스프레드가 comp가 됩니다. 발행사 간 재무구조·사업모델·지배구조 차이를 감안해 '프리미엄' 또는 '디스카운트'를 적용합니다."
                  : "Compare bonds from similarly rated issuers in the same sector. Example: a BBB Korean corporate issuing 5yr bonds would use other BBB Korean corporate 5yr bonds as comps. Apply premiums or discounts based on differences in financial structure, business model, and governance.",
                border: "border-blue-200",
              },
              {
                step: (ko: boolean) => ko ? "Step 3: 섹터 평균 및 인덱스 레벨" : "Step 3: Sector Average and Index Levels",
                desc: (ko: boolean) => ko
                  ? "Bloomberg 또는 iBoxx 인덱스에서 해당 섹터·등급의 평균 스프레드를 확인합니다. 이것이 시장 전체의 '베이스라인'이 됩니다. 특정 딜의 스프레드가 섹터 평균을 크게 벗어나면 투자자에게 명확한 설명이 필요합니다."
                  : "Check the Bloomberg or iBoxx index for average spreads in the relevant sector and rating. This provides the market-wide 'baseline.' If a specific deal's spread deviates significantly from the sector average, clear explanations are needed for investors.",
                border: "border-violet-200",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 ${item.border} bg-white dark:bg-gray-900 p-5`}>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{item.step(ko)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
            style={{ borderLeft: "4px solid #f59e0b" }}
          >
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>{ko ? "뱅커 노트 — 인터폴레이션의 함정: " : "Banker's Note — The Interpolation Trap: "}</strong>
              {ko
                ? "만기 간 스프레드 보간(interpolation)은 수익률 커브가 선형이라는 가정 하에 이루어집니다. 하지만 실제 커브는 오목하거나 볼록할 수 있습니다. 특히 특정 만기에 대규모 공급이 집중되거나 투자자 수요가 몰리면 해당 포인트의 스프레드가 선형 보간에서 크게 벗어납니다. 이를 '노티 포인트(knotty points)'라고 합니다. 경험 많은 신디케이트 뱅커는 이 편차를 알고 comp를 조정합니다."
                : "Maturity interpolation assumes the spread curve is linear. But real curves can be concave or convex. When large supply concentrates at specific maturities or investor demand clusters, spreads at those points deviate significantly from linear interpolation. These are 'knotty points.' Experienced Syndicate bankers know these deviations and adjust their comps accordingly."}
            </p>
          </div>
        </motion.section>


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />


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

        {/* ── Related ──────────────────────────────────────────────────────── */}
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
                label: (ko: boolean) => ko ? "DCM 개요 — 시리즈 시작" : "DCM Overview — Series Start",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/dcm-deal-process",
                label: (ko: boolean) => ko ? "DCM Ch.5 — 딜 프로세스" : "DCM Ch.5 — Deal Process",
                tag: (ko: boolean) => ko ? "이전 챕터" : "Prev Chapter",
                tagColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
              },
              {
                href: "/market-101/dcm-structure-regulation",
                label: (ko: boolean) => ko ? "DCM Ch.7 — 구조·제도" : "DCM Ch.7 — Structure & Regulation",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market/korea-1998-external-bond",
                label: (ko: boolean) => ko ? "1998 한국 외평채 — T+345bp 프라이싱" : "Korea 1998 Sovereign — T+345bp Pricing",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
              },
              {
                href: "/market/credit-suisse-at1",
                label: (ko: boolean) => ko ? "Credit Suisse AT1 — OAS 스프레드와 위기" : "Credit Suisse AT1 — OAS and Crisis",
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



        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />


        {/* ── References ─────────────────────────────────────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <motion.h2
            variants={fadeUp()}
            className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5"
          >
            {ko ? "참고 자료" : "References"}
          </motion.h2>
          <ol className="space-y-3">
            {SOURCES.map((ref) => (
              <motion.li
                key={ref.id}
                variants={fadeUp()}
                className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                  {ref.id}
                </span>
                <span>
                  <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="italic">{ref.title}</span>
                  )}
                  {". "}
                  <span className="text-gray-400 dark:text-gray-500">{ref.source}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Prev / Next ───────────────────────────────────────────────────── */}
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
