"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

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
  { slug: "dcm-execution",             ch: 8, title: (ko: boolean) => ko ? "Ch.8 실전 발행"     : "Ch.8 Execution"  },
  { slug: "dcm-liability-management",  ch: 9,  title: (ko: boolean) => ko ? "Ch.9 부채관리"      : "Ch.9 LM"            },
  { slug: "dcm-esg-green-bond",        ch: 10, title: (ko: boolean) => ko ? "Ch.10 ESG·녹색채권" : "Ch.10 ESG"          },
];

const thisCh = 2;

// ── Investor type data ────────────────────────────────────────────────────────
const INVESTOR_TYPES = [
  {
    id: "cb",
    icon: "🏛️",
    label: (ko: boolean) => ko ? "중앙은행 & 국부펀드(SWF)" : "Central Banks & Sovereign Wealth Funds",
    size: (ko: boolean) => ko ? "$15조+" : "$15T+",
    mandate: (ko: boolean) => ko
      ? "외환보유액·국가자산 보전 → 수익률보다 안전성·유동성 우선"
      : "Preserve FX reserves & national assets → safety and liquidity over yield",
    buys: (ko: boolean) => ko ? "UST·Bund·JGB·AAA SSA채권만" : "UST, Bund, JGB, AAA SSA bonds only",
    sellsTrigger: (ko: boolean) => ko
      ? "거의 안 팖 — 외환위기 시 UST 매도로 유동성 확보"
      : "Rarely sell — UST sales to defend currency in FX crises",
    bankersNote: (ko: boolean) => ko
      ? "중앙은행은 신규 발행 Book-building에 사실상 참여 안 함 — 2차 시장 매수"
      : "Central banks rarely participate in new issues — they buy in secondary market",
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-slate-200 dark:border-slate-700",
    dot: "bg-slate-600",
    sizeBadge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    id: "ins",
    icon: "🏢",
    label: (ko: boolean) => ko ? "보험사" : "Insurance Companies",
    size: (ko: boolean) => ko ? "$35조+" : "$35T+",
    mandate: (ko: boolean) => ko
      ? "보험부채(liability) 듀레이션 매칭 → 초장기 IG 채권 선호"
      : "Match liability duration → prefer ultra-long IG bonds",
    buys: (ko: boolean) => ko ? "20–30년 IG 회사채·커버드본드·인프라채" : "20–30yr IG corporates, covered bonds, infrastructure",
    sellsTrigger: (ko: boolean) => ko
      ? "거의 안 팖 — 금리 급등 시 듀레이션 리밸런싱"
      : "Rarely sell — duration rebalancing during sharp rate moves",
    bankersNote: (ko: boolean) => ko
      ? "Solvency II 규제로 RWA 계산 → AAA~A 등급 보유 선호도 극강, BBB 경계 관리"
      : "Solvency II RWA rules create strong preference for AAA-A; BBB managed carefully",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-700",
    dot: "bg-green-600",
    sizeBadge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  {
    id: "pension",
    icon: "👴",
    label: (ko: boolean) => ko ? "연기금" : "Pension Funds",
    size: (ko: boolean) => ko ? "$56조+" : "$56T+",
    mandate: (ko: boolean) => ko
      ? "은퇴 급여 지급 의무 커버 → 장기 듀레이션·인플레 헤지"
      : "Cover retirement benefit obligations → long duration, inflation hedge",
    buys: (ko: boolean) => ko
      ? "장기 IG채·물가연동채(TIPS/Linker)·인프라·사모"
      : "Long-dated IG, TIPS/linkers, infra, private credit",
    sellsTrigger: (ko: boolean) => ko
      ? "자산배분 리밸런싱 주기에 따라 — 연 1~2회 전략적 조정"
      : "Rebalance per allocation cycle — 1-2x per year strategic shifts",
    bankersNote: (ko: boolean) => ko
      ? "LDI(부채주도투자) 전략이 핵심 — 영국 2022 LDI 위기가 대표적 실패 사례"
      : "LDI (Liability-Driven Investment) is core — UK 2022 LDI crisis is the iconic failure case",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-600",
    sizeBadge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    id: "am",
    icon: "📊",
    label: (ko: boolean) => ko ? "자산운용사(AM)" : "Asset Managers",
    size: (ko: boolean) => ko ? "$120조+" : "$120T+",
    mandate: (ko: boolean) => ko
      ? "벤치마크 대비 초과수익(alpha) 추구 — 펀드 mandate에 따라 천차만별"
      : "Seek alpha vs benchmark — mandate varies widely by fund type",
    buys: (ko: boolean) => ko ? "IG·HY·EM채 등 펀드 전략에 따라 다양" : "IG, HY, EM — varies by fund strategy",
    sellsTrigger: (ko: boolean) => ko
      ? "성과 부진·펀드 환매·벤치마크 리밸런싱"
      : "Underperformance, fund redemptions, benchmark rebalancing",
    bankersNote: (ko: boolean) => ko
      ? "가장 수익률에 민감하고 Book-building에 적극 참여 — NIC 1bp도 협상"
      : "Most yield-sensitive, most active in book-building — negotiate every NIC basis point",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-600",
    sizeBadge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    id: "hf",
    icon: "⚡",
    label: (ko: boolean) => ko ? "헤지펀드 & 특수상황 펀드" : "Hedge Funds & Special Situations",
    size: (ko: boolean) => ko ? "$4조+" : "$4T+",
    mandate: (ko: boolean) => ko
      ? "절대수익 추구 — long/short·CDS·구조조정 이벤트 플레이"
      : "Absolute return — long/short, CDS, restructuring event plays",
    buys: (ko: boolean) => ko ? "HY·Distressed·AT1·전환사채·신흥국 채권" : "HY, distressed, AT1, convertibles, EM bonds",
    sellsTrigger: (ko: boolean) => ko
      ? "포지션 청산·마진콜·이벤트 리졸루션"
      : "Position exit, margin calls, event resolution",
    bankersNote: (ko: boolean) => ko
      ? "AT1·HY 신규발행 북빌딩에서 초기 앵커 투자자 역할 — 스프레드 설정에 영향력"
      : "Anchor investors in AT1/HY new issue book-building — influence initial spread setting",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-600",
    sizeBadge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── Order book signals ────────────────────────────────────────────────────────
const ORDER_SIGNALS = [
  {
    num: "①",
    title: (ko: boolean) => ko ? "오더 규모 vs 발행 규모 (커버리지 배수)" : "Order Size vs Issue Size (Coverage Multiple)",
    desc: (ko: boolean) => ko
      ? "오더 총액 ÷ 발행 규모 = 커버리지 배수. 2x 이상이면 일반적으로 성공적 딜. 3x 이상이면 스프레드를 IPT보다 타이트하게 조일 수 있는 근거. 1x 미만이면 위험 신호 — 가격을 높이거나 규모를 줄여야."
      : "Total orders ÷ issue size = coverage multiple. 2x+ is generally considered a successful deal. 3x+ justifies tightening spreads below IPT. Below 1x is a danger signal — price must move out or size must come down.",
    color: "border-teal-300 dark:border-teal-700",
  },
  {
    num: "②",
    title: (ko: boolean) => ko ? "투자자 유형 분포 (Real Money vs HF)" : "Investor Type Mix (Real Money vs Fast Money)",
    desc: (ko: boolean) => ko
      ? "Real Money(보험사·연기금·AM) 비중이 높을수록 딜 품질이 좋다. HF 비중이 높으면 단기 차익 목적 — 발행 직후 2차 시장에서 매도 압력이 올 수 있다."
      : "Higher Real Money (insurers, pensions, AMs) share signals deal quality. High HF participation means short-term profit-taking — expect secondary market selling pressure post-issuance.",
    color: "border-blue-300 dark:border-blue-700",
  },
  {
    num: "③",
    title: (ko: boolean) => ko ? "트랜치별 수요 (5yr vs 10yr)" : "Demand by Tranche (5yr vs 10yr)",
    desc: (ko: boolean) => ko
      ? "발행사는 여러 만기 트랜치를 동시에 발행하는 경우가 많다. 각 트랜치의 커버리지가 다르면 만기별로 스프레드를 차별화하거나 특정 트랜치를 취소하는 결정이 필요하다."
      : "Issuers often sell multiple maturities simultaneously. Uneven coverage across tranches may require differentiated spread levels or cancelling a specific tranche.",
    color: "border-violet-300 dark:border-violet-700",
  },
  {
    num: "④",
    title: (ko: boolean) => ko ? "지역 분포 (아시아 vs 유럽 vs 미국)" : "Geographic Distribution (Asia vs Europe vs US)",
    desc: (ko: boolean) => ko
      ? "아시아 투자자는 'Asian premium'을 제공하는 경향이 있어 스프레드를 낮출 수 있다. 지역 분산은 발행사가 특정 시장 변동성에 덜 취약하게 만든다."
      : "Asian investors tend to provide an 'Asian premium,' helping compress spreads. Geographic diversification makes issuers less vulnerable to any single market's volatility.",
    color: "border-orange-300 dark:border-orange-700",
  },
  {
    num: "⑤",
    title: (ko: boolean) => ko ? "오더 지속성 (IPT→최종가격 단계별 이탈률)" : "Order Persistence (IPT→Final Price Drop-Off Rate)",
    desc: (ko: boolean) => ko
      ? "스프레드를 IPT에서 최종가격으로 좁혀가면서(tightening) 오더가 얼마나 유지되는지 추적. 타이트닝 단계마다 30% 이상 이탈하면 스프레드가 지나치게 좁혀진 신호."
      : "Track how orders hold up as spreads tighten from IPT to final price. Losing 30%+ of book at each tightening step signals spreads have moved too tight.",
    color: "border-red-300 dark:border-red-700",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "Real Money vs Fast Money 투자자의 차이는?"
      : "What's the difference between Real Money and Fast Money investors?",
    a: (ko: boolean) => ko
      ? "Real Money는 보험사·연기금·자산운용사처럼 실제 현금으로 채권을 사서 장기 보유하는 투자자입니다. Fast Money는 헤지펀드처럼 레버리지·파생상품을 활용하고 단기 매매하는 투자자입니다. 뱅커는 오더북에서 Real Money 비중이 높을수록 발행 성공률이 높다고 봅니다 — 실제로 자금이 들어오기 때문입니다."
      : "Real Money refers to insurance companies, pensions, and asset managers who buy bonds with real cash and hold long-term. Fast Money refers to hedge funds using leverage and derivatives for short-term trades. Bankers view higher Real Money participation in the order book as a sign of deal quality — actual capital is committed.",
  },
  {
    q: (ko: boolean) => ko
      ? "Demand가 공급의 3배라는 '3x 오버 커버'는 무슨 의미?"
      : "What does '3x oversubscribed' mean in a bond deal?",
    a: (ko: boolean) => ko
      ? "발행 규모의 3배 오더가 들어왔다는 의미입니다. 예) $10억 발행에 $30억 오더. 이는 발행사·뱅커에게 스프레드를 IPT(초기 가격 가이던스)보다 타이트하게 조일 수 있는 근거가 됩니다. 보통 '2x 이상'이면 성공적 발행으로 간주합니다. '1x 미만'이면 발행 가격을 높이거나 규모를 줄여야 합니다."
      : "The deal received orders three times the issue size. Example: $3B orders for a $1B deal. This gives the issuer and banker justification to tighten spreads below the IPT (initial price thoughts). Generally 2x+ is considered a successful deal. Below 1x means pricing must move out or size must be reduced.",
  },
  {
    q: (ko: boolean) => ko
      ? "보험사가 왜 30년 채권을 사나요? 30년은 너무 길지 않나요?"
      : "Why do insurers buy 30-year bonds? Isn't that too long?",
    a: (ko: boolean) => ko
      ? "보험사는 생명보험·연금보험의 부채(장래 보험금 지급 의무)가 20–30년 만기를 가집니다. Solvency II 규제에 따라 이 부채와 자산의 듀레이션을 매칭해야 합니다. 듀레이션이 짧은 채권을 사면 금리가 하락할 때 자산이 부채보다 덜 올라가 자본이 부족해집니다. 30년 채권은 이 매칭을 가능하게 합니다."
      : "Insurance liabilities — life policies, annuities — have 20-30 year durations. Solvency II requires asset-liability duration matching. Holding short bonds means assets rise less than liabilities when rates fall, creating capital shortfalls. 30-year bonds enable proper duration matching.",
  },
  {
    q: (ko: boolean) => ko
      ? "헤지펀드가 AT1 채권을 사는 이유는 높은 수익률 때문인가요?"
      : "Do hedge funds buy AT1 bonds just for the high yield?",
    a: (ko: boolean) => ko
      ? "수익률이 주된 이유이지만, 이벤트 드리븐 전략도 있습니다. 은행 재무상태 악화·규제 변경·M&A 이벤트를 예상해 AT1을 long 또는 short하거나, CDS로 헤지합니다. CS AT1 사태에서 일부 헤지펀드는 CS 약세를 미리 포지셔닝해 이익을 냈습니다. 단순 수익률 플레이가 아닌 복잡한 이벤트·구조 분석이 필요한 영역입니다."
      : "Yield is the primary driver, but event-driven strategies also play a role. Hedge funds go long or short AT1 based on bank credit deterioration, regulatory changes, or M&A events — often hedging with CDS. In the CS AT1 case, some funds had positioned for CS weakness and profited. This is not simple yield carry — it requires complex event and structural analysis.",
  },
  {
    q: (ko: boolean) => ko
      ? "자산운용사(AM)가 채권 신규 발행에서 협상력이 가장 강한가요?"
      : "Do asset managers have the most negotiating power in new bond issuance?",
    a: (ko: boolean) => ko
      ? "AM은 Book-building에서 가장 큰 단일 투자자 집단이며, 실제 발행 규모의 60–70%를 차지하는 경우가 많습니다. 따라서 NIC(신규발행 프리미엄)·스프레드 협상에서 실질적인 영향력이 있습니다. 특히 반복 발행사(frequent issuer)의 경우, 'anchor investor'로 초기 수요를 만들어주는 대형 AM은 배분 우선권을 얻습니다. 하지만 최종 결정권은 발행사와 리드 뱅커에게 있습니다."
      : "AM is the largest single investor group in book-building, often accounting for 60-70% of deal size. This gives them real influence over NIC and spread negotiations. For frequent issuers, large AMs who anchor early demand receive allocation priority. But final pricing decisions rest with the issuer and lead banker.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "OECD", title: "Institutional Investors Statistics — Pension Funds and Insurance Companies", url: "https://stats.oecd.org/Index.aspx?DataSetCode=PNNI_NEW", source: "OECD.Stat, 2023" },
  { id: 2, author: "Bank for International Settlements", title: "Central Bank Reserve Management and International Financial Stability", url: "https://www.bis.org/publ/work532.htm", source: "BIS Working Papers, 2024" },
  { id: 3, author: "EIOPA", title: "Solvency II Quantitative Reporting Templates — Capital Requirements", url: "https://www.eiopa.europa.eu/tools-and-data/solvency-ii-statistics_en", source: "EIOPA, 2024" },
  { id: 4, author: "BlackRock Investment Institute", title: "Global Fixed Income Survey — Investor Behaviour and Mandate Constraints", url: "https://www.blackrock.com/us/individual/insights/blackrock-investment-institute", source: "BlackRock, 2024" },
  { id: 5, author: "PwC", title: "Asset & Wealth Management Revolution — Embracing Exponential Change", url: "https://www.pwc.com/gx/en/industries/financial-services/asset-management/publications/asset-management-2025.html", source: "PwC Global, 2023" },
];
export default function DcmInvestorsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-investors`;

  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DCM Ch.2 — 투자자 생태계: 왜 큰 손들은 수익률을 안 보나",
    description:
      "채권 투자자 유형 완전 해부: 중앙은행·보험사·연기금·자산운용사·헤지펀드의 mandate와 행동원리. 왜 큰 손들이 수익률 극대화를 목표로 삼지 않는지, 뱅커가 어떻게 수요를 읽는지.",
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
            <span className="text-gray-600 dark:text-gray-400">Ch.2</span>
          </div>

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "DCM 시리즈 · Chapter 2" : "DCM Series · Chapter 2"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 14분 읽기" : "⏱ 14 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "투자자 생태계: 왜 큰 손들은 수익률을 안 보나"
              : "Investor Ecosystem: Why the Biggest Players Don't Chase Yield"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "채권 투자자라고 하면 수익률을 극대화하는 사람들을 떠올리기 쉽습니다. 하지만 이 시장에서 가장 큰 손들 — 중앙은행, 보험사, 연기금 — 은 수익률을 목적으로 채권을 사지 않습니다. 그들에게는 각자의 mandate(의무)가 있고, 그 의무가 행동을 결정합니다. DCM 뱅커는 이 생태계를 이해해야 오더북을 읽을 수 있습니다."
              : "When people think of bond investors, they imagine yield hunters. But the biggest players — central banks, insurers, pension funds — don't buy bonds for yield maximization. Each has a specific mandate that dictates their behavior. A DCM banker must understand this ecosystem to read an order book properly."}
          </p>
        </motion.section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

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
              stat: "$120조+",
              label: (ko: boolean) => ko ? "글로벌 AM AUM" : "Global AM AUM",
              sub: (ko: boolean) => ko ? "자산운용사 총 운용자산" : "Total assets under management",
            },
            {
              stat: ko ? "5개" : "5",
              label: (ko: boolean) => ko ? "주요 투자자 유형" : "Major Investor Types",
              sub: (ko: boolean) => ko ? "중앙은행·보험·연기금·AM·HF" : "CB·Ins·Pension·AM·HF",
            },
            {
              stat: "Mandate",
              label: (ko: boolean) => ko ? "수익률보다 중요한 것" : "More Important Than Yield",
              sub: (ko: boolean) => ko ? "투자 의무·규제가 행동을 결정" : "Obligations & regulation drive behavior",
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

        {/* ── Why Yield Isn't Everything ───────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "왜 수익률이 전부가 아닌가" : "Why Yield Is Not Everything"}
          </h2>

          <div
            className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 mb-6"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-gray-700 dark:text-gray-200 font-semibold mb-3 text-lg">
              {ko
                ? "\"수익률이 높아도 mandate 밖이면 살 수 없다.\""
                : "\"Even if yield is attractive, they cannot buy if it's outside their mandate.\""}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "보험사는 Solvency II 규제에 따라 RWA(위험가중자산) 계산 결과 AAA~A 등급 채권을 보유하는 것이 자본비율에 훨씬 유리합니다. BBB 등급 채권을 많이 보유하면 규제 자본을 더 쌓아야 합니다. 그러므로 BB+ 등급 채권의 수익률이 아무리 높아도, 보험사는 의무적으로 매도해야 합니다(또는 애초에 매수하지 않습니다)."
                : "Under Solvency II, insurers' RWA calculations make AAA-A bonds far more capital-efficient. Holding more BBB bonds requires holding more regulatory capital. So no matter how attractive a BB+ bond's yield is, insurers are compelled to sell it — or never buy it in the first place."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "연기금은 LDI(Liability-Driven Investment, 부채주도투자) 전략을 씁니다. 30년 후 지급해야 할 연금이라는 부채가 있고, 이 부채의 듀레이션에 맞춰 자산 듀레이션을 관리합니다. 단기 고수익 채권보다 장기 저수익 채권이 LDI 관점에서 더 적합할 수 있습니다."
                : "Pension funds use LDI (Liability-Driven Investment). They have long-duration liabilities — retirement payments 30 years out — and must match asset duration to those liabilities. A long-duration, lower-yield bond may be more suitable than a short-duration, higher-yield bond under LDI."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko
                ? "중앙은행은 외환보유액 운용 지침상 UST·Bund·JGB·AAA SSA 채권만 보유할 수 있습니다. 이는 규정이지 선택이 아닙니다. 따라서 중앙은행 이라는 거대한 수요는 항상 최상위 등급 채권에만 집중됩니다. 이것이 AAA 채권의 스프레드가 항상 낮은 가장 큰 구조적 이유입니다."
                : "Central banks can only hold UST, Bund, JGB, and AAA SSA bonds under FX reserve management guidelines. This is a rule, not a choice. So this enormous pool of demand concentrates permanently at the top of the rating spectrum — the primary structural reason why AAA spreads remain consistently tight."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                type: (ko: boolean) => ko ? "보험사" : "Insurers",
                rule: (ko: boolean) => ko ? "Solvency II RWA" : "Solvency II RWA",
                implication: (ko: boolean) => ko
                  ? "BBB 이하 보유 시 추가 자본 적립 의무 → AAA~A 채권에 집중"
                  : "Sub-BBB holdings require extra capital → concentrate on AAA-A bonds",
                icon: "🏢",
                color: "border-green-200 dark:border-green-700",
              },
              {
                type: (ko: boolean) => ko ? "연기금" : "Pensions",
                rule: (ko: boolean) => ko ? "LDI 전략" : "LDI Strategy",
                implication: (ko: boolean) => ko
                  ? "부채 듀레이션 매칭 필요 → 20–30년 장기채권 수요 구조적으로 존재"
                  : "Must match liability duration → structural demand for 20-30yr bonds",
                icon: "👴",
                color: "border-blue-200 dark:border-blue-700",
              },
              {
                type: (ko: boolean) => ko ? "중앙은행" : "Central Banks",
                rule: (ko: boolean) => ko ? "외환보유액 규정" : "FX Reserve Rules",
                implication: (ko: boolean) => ko
                  ? "UST·Bund·AAA SSA만 허용 → 최상위 등급 스프레드 구조적 억제"
                  : "Only UST/Bund/AAA SSA allowed → structurally suppresses top-tier spreads",
                icon: "🏛️",
                color: "border-slate-200 dark:border-slate-700",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border ${item.color} bg-white dark:bg-gray-900 p-5`}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 dark:text-gray-100 mb-1">{item.type(ko)}</div>
                <div className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">{item.rule(ko)}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.implication(ko)}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Investor Type Cards ──────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5대 투자자 유형 해부" : "Five Investor Types Dissected"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "각 유형의 mandate, 실제 매수 행태, 뱅커가 실무에서 활용하는 인사이트"
              : "Each type's mandate, actual buying behavior, and practitioner insight bankers use in the field"}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="space-y-6"
          >
            {INVESTOR_TYPES.map((inv, i) => (
              <motion.div
                key={inv.id}
                variants={fadeUp(i * 0.07)}
                className={`rounded-2xl border p-6 ${inv.bg} ${inv.border}`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{inv.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-bold text-gray-900 dark:text-gray-50">{inv.label(ko)}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${inv.sizeBadge}`}>
                          AUM {inv.size(ko)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${inv.dot}`} />
                </div>

                {/* Mandate */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">Mandate</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{inv.mandate(ko)}</span>
                </div>

                {/* What they buy */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                    {ko ? "주요 매수 채권" : "Buys"}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{inv.buys(ko)}</span>
                </div>

                {/* Sell trigger */}
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                    {ko ? "매도 트리거" : "Sell Trigger"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{inv.sellsTrigger(ko)}</span>
                </div>

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
                      {inv.bankersNote(ko)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Banker's Demand Reading Guide ───────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "오더북을 읽는 법" : "How to Read an Order Book"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            {ko
              ? "딜 당일, 뱅커가 오더북에서 실시간으로 추적하는 5가지 핵심 신호"
              : "On deal day, five key signals bankers track in real time from the order book"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "채권 발행 당일은 IPT(Initial Price Thoughts, 초기 가격 가이던스)를 시장에 공지하면서 시작됩니다. 그 순간부터 오더(투자자 주문)가 들어오기 시작하고, 뱅커와 발행사는 실시간으로 수요를 파악하면서 최종 스프레드와 발행 규모를 결정합니다. 이 과정에서 아래 5가지 신호가 핵심 판단 근거가 됩니다."
              : "Bond deal day begins when IPT (Initial Price Thoughts) is announced to the market. Orders start flowing in immediately, and bankers track demand in real time to finalize spreads and deal size. The five signals below are the core inputs for these decisions."}
          </p>

          <div className="space-y-4">
            {ORDER_SIGNALS.map((signal, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 ${signal.color} bg-white dark:bg-gray-900 p-5`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-lg font-bold flex-shrink-0 mt-0.5"
                    style={{ color: accent }}
                  >
                    {signal.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{signal.title(ko)}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{signal.desc(ko)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">{ko ? "실전 예시: " : "Practical Example: "}</strong>
              {ko
                ? "발행 규모 $10억에 오더가 $35억 들어왔다고 해서(3.5x) 자동으로 좋은 딜이 아닙니다. 그 $35억 중 헤지펀드가 $25억이고 Real Money가 $10억밖에 없다면, 발행 직후 HF들이 2차 시장에서 털어버릴 가능성이 높습니다. 뱅커는 '커버리지 배수'보다 '오더의 질'을 더 중요하게 봅니다."
                : "A 3.5x covered order book on a $1B deal is not automatically a success. If $2.5B of those orders are from hedge funds and only $1B from Real Money, expect heavy secondary market selling from HFs post-issuance. Bankers care more about 'quality of orders' than raw coverage multiple."}
            </p>
          </div>
        </motion.section>

        {/* ── SVB Insight ─────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "SVB 사태가 투자자 생태계에 주는 교훈" : "What SVB Teaches About the Investor Ecosystem"}
          </h2>

          <div className="rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-6 mb-5">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              {ko
                ? "2023년 실리콘밸리뱅크(SVB) 붕괴는 채권 투자자 생태계를 이해하는 데 중요한 케이스입니다. SVB는 고객 예금을 장기 MBS(주택저당증권)에 투자했습니다. 예금자(SVB의 입장에서는 부채)는 무한대로 즉시 인출 가능한 '유동성 리스크'를 내포합니다. 반면 보유 채권(자산)은 만기가 고정되어 있습니다."
                : "The 2023 Silicon Valley Bank collapse is a critical case for understanding the investor ecosystem. SVB invested customer deposits into long-duration MBS. Deposits (SVB's liabilities) carry unlimited, immediate liquidity risk. The bonds held as assets have fixed maturities."}
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              {ko
                ? "연준의 금리 인상으로 장기채 가격이 하락하고, SVB는 HTM(만기보유) 포트폴리오에 큰 미실현 손실이 쌓였습니다. 이를 감지한 VC·스타트업 예금자들이 SNS를 통해 불안을 공유하면서 48시간 만에 뱅크런이 발생했습니다."
                : "Rising Fed rates dropped long bond prices, accumulating massive unrealized losses in SVB's HTM portfolio. VC and startup depositors, detecting this, shared concerns on social media — triggering a bank run in 48 hours."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-white dark:bg-gray-900 p-4 border border-red-100 dark:border-red-800">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {ko ? "예금자 (무한 유동성 리스크)" : "Depositors (Unlimited Liquidity Risk)"}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
                  <li>{ko ? "• 언제든 즉시 인출 가능" : "• Can withdraw at any moment"}</li>
                  <li>{ko ? "• 불신 → 뱅크런 48시간" : "• Loss of confidence → bank run in 48 hrs"}</li>
                  <li>{ko ? "• 소셜미디어로 공포 전파" : "• Fear spreads via social media"}</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-900 p-4 border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {ko ? "채권 투자자 (만기 고정)" : "Bond Investors (Fixed Maturity)"}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
                  <li>{ko ? "• 만기까지 자금 묶임" : "• Capital locked until maturity"}</li>
                  <li>{ko ? "• 위기 시 2차시장 매도 압력" : "• Sell in secondary market under stress"}</li>
                  <li>{ko ? "• 채권 런: 수일~수주 소요" : "• Bond run: takes days to weeks"}</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
            {ko
              ? "채권 투자자가 보유 채권에 대한 신뢰를 잃을 때도 비슷한 구조가 작동합니다. 다만 예금 인출보다 훨씬 느립니다 — 2차 시장 매도, 신용등급 재평가, CDS 스프레드 확대 등의 형태로 수일~수주에 걸쳐 진행됩니다. SVB 사태의 핵심은 은행이 '투자자 유형이 전혀 다른 자금'을 '채권 투자자처럼' 운용했다는 점입니다."
              : "When bond investors lose confidence in a holding, a similar dynamic operates — but far slower than deposit runs. Secondary selling, rating reassessments, and CDS spread widening unfold over days to weeks. The SVB lesson: the bank managed 'depositor-type capital' as if it were 'bond-investor-type capital.'"}
          </p>

          <Link
            href="/market/svb-2023"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: accent }}
          >
            {ko ? "→ SVB 2023 딜 스토리 전체 보기" : "→ Read Full SVB 2023 Story"}
          </Link>
        </motion.section>

        {/* ── Investor Behavior Under Stress ──────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "시장 스트레스 상황에서 투자자는 어떻게 행동하나" : "How Investors Behave Under Market Stress"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "평상시 투자자 행동과 위기 시 행동은 완전히 다릅니다. DCM 뱅커는 평상시의 수요 패턴뿐 아니라 위기 시 각 투자자 유형이 어떻게 움직이는지도 예측할 수 있어야 합니다. 위기 시에는 유동성이 사라지고 발행 창구가 닫힐 수 있기 때문입니다."
              : "Normal-market and stress-market investor behavior are completely different. DCM bankers must predict not just typical demand patterns but also how each investor type behaves under stress — because liquidity disappears and issuance windows can close."}
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                    {ko ? "투자자 유형" : "Investor Type"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                    {ko ? "스트레스 행동" : "Stress Behavior"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                    {ko ? "발행사에 미치는 영향" : "Impact on Issuers"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    type: ko ? "중앙은행" : "Central Banks",
                    behavior: ko
                      ? "자국통화 방어 목적으로 UST·외환보유 매도 가능"
                      : "May sell UST to defend currency",
                    impact: ko
                      ? "글로벌 안전자산 스프레드도 확대될 수 있음"
                      : "Even safe-haven spreads can widen",
                  },
                  {
                    type: ko ? "보험사" : "Insurers",
                    behavior: ko
                      ? "장기채 매도 자제 — 듀레이션 유지 필요"
                      : "Avoid selling long bonds — need to maintain duration",
                    impact: ko
                      ? "장기채 시장 상대적으로 안정적 수요 기반"
                      : "Long-end markets retain more stable demand",
                  },
                  {
                    type: ko ? "연기금" : "Pension Funds",
                    behavior: ko
                      ? "금리 급등 시 헤지 스왑 손실로 강제 매도 (UK 2022)"
                      : "Rate spikes → forced selling from swap hedging losses (UK 2022)",
                    impact: ko
                      ? "LDI 위기 → 중앙은행 개입 필요했던 사례"
                      : "LDI crisis → required BoE intervention in 2022",
                  },
                  {
                    type: ko ? "자산운용사" : "Asset Managers",
                    behavior: ko
                      ? "펀드 환매 증가 시 강제 매도 — 유동성 위기 증폭"
                      : "Fund redemptions force selling — amplifies liquidity crises",
                    impact: ko
                      ? "크레딧 스프레드 급등, 신규 발행 창구 닫힘"
                      : "Credit spread spike, new issue window closes",
                  },
                  {
                    type: ko ? "헤지펀드" : "Hedge Funds",
                    behavior: ko
                      ? "포지션 청산 가속 + CDS 매수로 스프레드 추가 확대"
                      : "Accelerate liquidation + buy CDS, further widening spreads",
                    impact: ko
                      ? "위기 증폭 효과 — 가장 먼저 철수"
                      : "Crisis amplifier — first to exit",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.behavior}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ── NIC explainer ────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "NIC(신규발행 프리미엄)과 투자자 협상" : "NIC (New Issue Concession) and Investor Negotiation"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {ko
              ? "NIC(New Issue Concession, 신규발행 프리미엄)은 발행사가 투자자에게 신규 채권을 매수하도록 유인하기 위해 2차 시장 스프레드보다 추가로 지불하는 프리미엄입니다. 투자자 입장에서는 '이미 시장에서 살 수 있는 채권보다 왜 신규를 사야 하나?'에 대한 보상입니다."
              : "NIC (New Issue Concession) is the premium an issuer pays above secondary market spreads to incentivize investors to buy the new bond. From the investor's perspective, it compensates for the question: 'Why should I buy the new issue instead of the existing bond on the secondary market?'"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                {ko ? "발행사 관점" : "Issuer Perspective"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "NIC을 최대한 낮추고 싶다. NIC 10bp = 발행 규모 $10억 기준 연간 이자비용 $100만 추가. 10년물이면 NPC 총액 $1000만. 중요한 숫자."
                  : "Wants to minimize NIC. 10bp NIC on $1B deal = $10M extra annual interest cost. Over 10 years, $100M total. Not trivial."}
              </p>
            </div>
            <div className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
              style={{ borderLeft: "4px solid #8b5cf6" }}
            >
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                {ko ? "투자자 관점" : "Investor Perspective"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "NIC이 없으면 신규 발행에 참여할 유인이 없다. 2차 시장에서 이미 알려진 채권을 사는 게 더 안전하다. NIC은 정당한 보상."
                  : "Without NIC, there's no incentive to participate in new issuance. Buying a known bond in the secondary market is safer. NIC is fair compensation."}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4">
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>{ko ? "뱅커의 역할: " : "The Banker's Role: "}</strong>
              {ko
                ? "리드 뱅커는 발행사와 투자자 사이에서 NIC를 협상합니다. 시장 변동성이 낮고 수요가 충분하면 NIC를 5bp 수준까지 낮출 수 있습니다. 반대로 시장이 불안하거나 신용 이벤트가 있으면 20–30bp도 요구될 수 있습니다. 이 숫자가 발행사의 연간 이자비용에 직접 영향을 주기 때문에 협상은 매우 치열합니다."
                : "Lead bankers negotiate NIC between issuers and investors. In low-volatility, high-demand conditions, NIC can compress to as little as 5bp. In stressed markets or after a credit event, investors may demand 20-30bp. Since this directly affects the issuer's annual interest cost, negotiations are fierce."}
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
            <FaqAccordion items={FAQS.map(f => ({ q: f.q(ko), a: f.a(ko) }))} />
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
                label: (ko: boolean) => ko ? "DCM 개요 — 시리즈 시작" : "DCM Overview — Series Start",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/dcm-issuers",
                label: (ko: boolean) => ko ? "DCM Ch.1 — 발행사 스펙트럼" : "DCM Ch.1 — Issuer Spectrum",
                tag: (ko: boolean) => ko ? "이전 챕터" : "Prev Chapter",
                tagColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
              },
              {
                href: "/market-101/dcm-bond-products",
                label: (ko: boolean) => ko ? "DCM Ch.3 — 채권 상품 유형" : "DCM Ch.3 — Bond Products",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market/svb-2023",
                label: (ko: boolean) => ko ? "SVB 2023 — 뱅크런 48시간" : "SVB 2023 — 48-Hour Bank Run",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
              },
              {
                href: "/market/credit-suisse-at1",
                label: (ko: boolean) => ko ? "Credit Suisse AT1 전액 소각" : "Credit Suisse AT1 Write-Down",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
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


        
        <LikeButton slug={concept.slug} lang={lang} />{/* ── References ─────────────────────────────────────────────────── */}
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

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("dcm-investors");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </div>
  );
}
