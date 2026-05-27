"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
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
const accent = "#8b5cf6"; // violet-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  ch: 0, title: (ko: boolean) => ko ? "구조화금융 개요"    : "Overview"          },
  { slug: "structured-abs",       ch: 1, title: (ko: boolean) => ko ? "Ch.1 ABS"           : "Ch.1 ABS"          },
  { slug: "structured-clo",       ch: 2, title: (ko: boolean) => ko ? "Ch.2 CLO"           : "Ch.2 CLO"          },
  { slug: "structured-cmbs",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 CMBS"          : "Ch.3 CMBS"         },
  { slug: "structured-waterfall", ch: 4, title: (ko: boolean) => ko ? "Ch.4 워터폴·트랑쉐"  : "Ch.4 Waterfall"    },
  { slug: "structured-cdo",       ch: 5, title: (ko: boolean) => ko ? "Ch.5 CDO·합성CDO"   : "Ch.5 CDO"          },
  { slug: "structured-cases",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 케이스스터디"   : "Ch.6 Case Studies" },
];
const thisCh = 2;

// ── Quick Stats ───────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "$1,850억",
    label: (ko: boolean) => ko ? "2024 글로벌 CLO 발행 (사상 최대)" : "2024 Global CLO Issuance (Record)",
    detail: (ko: boolean) => ko ? "Bloomberg, 2024" : "Bloomberg, 2024",
    color: "bg-violet-500",
    pct: 90,
  },
  {
    value: "$1.1조",
    label: (ko: boolean) => ko ? "글로벌 CLO 시장 잔액" : "Global CLO Market Outstanding",
    detail: (ko: boolean) => ko ? "S&P Global, 2024" : "S&P Global, 2024",
    color: "bg-purple-500",
    pct: 70,
  },
  {
    value: "65%",
    label: (ko: boolean) => ko ? "레버리지드 론 CLO 보유 비중" : "% of Leveraged Loans Held by CLOs",
    detail: (ko: boolean) => ko ? "LSTA 기준, 2024" : "LSTA data, 2024",
    color: "bg-indigo-500",
    pct: 65,
  },
];

// ── CLO Tranches ──────────────────────────────────────────────────────────────
const CLO_TRANCHES: {
  rating: string;
  pct: string;
  spread: (ko: boolean) => string;
  investors: (ko: boolean) => string;
  color: string;
  barColor: string;
  w: number;
}[] = [
  {
    rating: "AAA",
    pct: "~64%",
    spread: () => "SOFR + 130bp",
    investors: (ko) => ko ? "은행·보험사·MMF" : "Banks, Insurers, Money Market Funds",
    color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20",
    barColor: "bg-emerald-500",
    w: 95,
  },
  {
    rating: "AA",
    pct: "~9%",
    spread: () => "SOFR + 175bp",
    investors: (ko) => ko ? "기관 투자자·보험사" : "Institutional investors, Insurers",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
    barColor: "bg-teal-500",
    w: 78,
  },
  {
    rating: "A",
    pct: "~7%",
    spread: () => "SOFR + 220bp",
    investors: (ko) => ko ? "크레딧 펀드·연기금" : "Credit funds, Pension funds",
    color: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20",
    barColor: "bg-sky-500",
    w: 64,
  },
  {
    rating: "BBB (Mezzanine)",
    pct: "~5%",
    spread: () => "SOFR + 330bp",
    investors: (ko) => ko ? "크레딧 헤지펀드·CLO 메자닌 펀드" : "Credit hedge funds, CLO mezzanine funds",
    color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
    barColor: "bg-violet-500",
    w: 50,
  },
  {
    rating: "BB (Junior Mezz)",
    pct: "~4%",
    spread: () => "SOFR + 550bp",
    investors: (ko) => ko ? "투기등급 크레딧 투자자" : "Speculative grade credit investors",
    color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20",
    barColor: "bg-purple-500",
    w: 38,
  },
  {
    rating: "B",
    pct: "~2%",
    spread: () => "SOFR + 750bp",
    investors: (ko) => ko ? "고수익 특수 펀드" : "High-yield special situation funds",
    color: "border-fuchsia-200 bg-fuchsia-50 dark:border-fuchsia-800 dark:bg-fuchsia-900/20",
    barColor: "bg-fuchsia-500",
    w: 26,
  },
  {
    rating: "Equity (Residual)",
    pct: "8–10%",
    spread: (ko) => ko ? "목표 IRR 15–20%" : "Target IRR 15–20%",
    investors: (ko) => ko ? "CLO 매니저 (5~10% 보유) + 에쿼티 투자자" : "CLO Manager (retains 5–10%) + equity investors",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
    barColor: "bg-rose-500",
    w: 14,
  },
];

// ── Manager Tiers ─────────────────────────────────────────────────────────────
const MANAGER_TIERS: {
  tier: string;
  managers: string;
  aaa: (ko: boolean) => string;
  assets: (ko: boolean) => string;
  note: (ko: boolean) => string;
  color: string;
  badge: string;
}[] = [
  {
    tier: "Tier 1",
    managers: "Blackstone, Apollo, Ares, PGIM, Carlyle",
    aaa: (ko) => ko ? "SOFR + 120–135bp (타이트)" : "SOFR + 120–135bp (tight)",
    assets: (ko) => ko ? "각 $30bn+ CLO 운용" : "Each $30bn+ CLO AUM",
    note: (ko) => ko
      ? "강력한 실적 트랙레코드. 투자자 충성도 높음. 신속한 발행 가능. 에쿼티 투자자에게 높은 수요."
      : "Strong track record. High investor loyalty. Fast issuance execution. High equity investor demand.",
    color: "border-violet-300 bg-violet-50 dark:border-violet-700 dark:bg-violet-900/20",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    tier: "Tier 2",
    managers: "KKR, Blue Owl, Golub, Barings",
    aaa: (ko) => ko ? "SOFR + 135–150bp (약간 와이드)" : "SOFR + 135–150bp (slightly wider)",
    assets: (ko) => ko ? "각 $10–30bn CLO 운용" : "Each $10–30bn CLO AUM",
    note: (ko) => ko
      ? "검증된 실적. 성장 중인 발행 프로그램. Tier 1 대비 소폭 넓은 스프레드."
      : "Proven track record. Growing issuance programs. Slightly wider spreads vs Tier 1.",
    color: "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    tier: "Tier 3 / New",
    managers: (ko: boolean) => ko ? "신규·소형 매니저" : "Emerging / new managers",
    aaa: (ko) => ko ? "SOFR + 155–180bp+ (프리미엄 요구)" : "SOFR + 155–180bp+ (new issue premium)",
    assets: (ko) => ko ? "$1–10bn CLO (초기 단계)" : "$1–10bn CLO (early stage)",
    note: (ko) => ko
      ? "첫 번째 또는 두 번째 CLO 발행. 투자자 검증 단계. 에쿼티 투자자 유치 어렵고, 비용 높음."
      : "First or second CLO issuance. Investor validation phase. Difficulty attracting equity investors; higher costs.",
    color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
    badge: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  },
];

// ── CLO vs RMBS CDO ───────────────────────────────────────────────────────────
const CLO_VS_CDO = [
  {
    item: (ko: boolean) => ko ? "기초 자산" : "Underlying Assets",
    clo: (ko: boolean) => ko ? "100~200개 분산된 기업 레버리지드 론" : "100–200 diversified corporate leveraged loans",
    cdo: (ko: boolean) => ko ? "서브프라임 MBS (이미 구조화된 증권)" : "Subprime MBS tranches (already-structured securities)",
  },
  {
    item: (ko: boolean) => ko ? "분산 효과" : "Diversification",
    clo: (ko: boolean) => ko ? "산업·지역·기업 분산. 개별 부도 영향 제한." : "Industry, regional, company diversification. Limited single-default impact.",
    cdo: (ko: boolean) => ko ? "주택 가격 하락 시 전국 동시 부도 — 상관관계 폭발." : "National simultaneous defaults when home prices fell — correlation explosion.",
  },
  {
    item: (ko: boolean) => ko ? "상관관계 리스크" : "Correlation Risk",
    clo: (ko: boolean) => ko ? "낮음 — 기업 실적은 산업별로 다름" : "Low — corporate performance varies by industry",
    cdo: (ko: boolean) => ko ? "치명적 — 주택 가격이라는 단일 요인에 모두 연동" : "Fatal — all linked to single factor: house prices",
  },
  {
    item: (ko: boolean) => ko ? "실물 자산 담보" : "Physical Asset Backing",
    clo: (ko: boolean) => ko ? "기업 자산·영업현금흐름 (실제 회사 존재)" : "Corporate assets & operating cash flows (real companies exist)",
    cdo: (ko: boolean) => ko ? "MBS 트랑쉐 — 서브프라임 모기지가 이미 부실화" : "MBS tranches — underlying subprime mortgages already deteriorating",
  },
  {
    item: (ko: boolean) => ko ? "2020 COVID 결과" : "2020 COVID Outcome",
    clo: (ko: boolean) => ko ? "CLO AAA 트랑쉐 — 단 한 건도 디폴트 없음" : "CLO AAA tranches — zero defaults",
    cdo: (ko: boolean) => ko ? "(2008 위기) — AAA 포함 대규모 손실" : "(2008 crisis) — massive losses including AAA",
  },
  {
    item: (ko: boolean) => ko ? "투명성" : "Transparency",
    clo: (ko: boolean) => ko ? "월간 트러스티 리포트로 개별 론 공개" : "Monthly trustee reports disclose individual loans",
    cdo: (ko: boolean) => ko ? "내부 복잡한 구조로 실질 담보 파악 어려움" : "Opaque internal structure made true collateral hard to assess",
  },
];

// ── 2024 CLO Boom Drivers ─────────────────────────────────────────────────────
const BOOM_DRIVERS = [
  {
    icon: "📈",
    title: (ko: boolean) => ko ? "PE 인수금융 공급 증가" : "Growing PE Acquisition Finance Supply",
    desc: (ko: boolean) =>
      ko
        ? "2023~2024년 PE 바이아웃 시장 회복 → LBO 딜 증가 → 레버리지드 론 발행 증가 → CLO 담보 공급 확대. PE 딜과 CLO는 순환 피드백 구조."
        : "2023–2024 PE buyout market recovery → rising LBO deals → more leveraged loan issuance → expanded CLO collateral supply. PE deals and CLOs form a circular feedback loop.",
    color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
    dot: "bg-violet-500",
  },
  {
    icon: "💹",
    title: (ko: boolean) => ko ? "변동금리 상품 투자자 선호" : "Investor Preference for Floating Rate",
    desc: (ko: boolean) =>
      ko
        ? "2022년부터 이어진 고금리 환경. CLO 채권은 SOFR 연동 변동금리 → 금리 상승 시 쿠폰 자동 증가. 고정금리 채권 대비 금리 리스크 없음. AAA 트랑쉐 투자자에게 매력적."
        : "Sustained high-rate environment since 2022. CLO bonds float with SOFR → coupons automatically rise with rates. No duration risk vs fixed-rate bonds. Attractive to AAA tranche investors.",
    color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20",
    dot: "bg-purple-500",
  },
  {
    icon: "💰",
    title: (ko: boolean) => ko ? "CLO 에쿼티 수익률 개선" : "CLO Equity Return Improvement",
    desc: (ko: boolean) =>
      ko
        ? "레버리지드 론 금리 상승(SOFR + 400~500bp) → CLO 에쿼티의 초과 스프레드 확대 → 에쿼티 투자자 IRR 15~25%로 개선. 에쿼티 수요 증가 → 더 많은 CLO 발행 가능."
        : "Higher leveraged loan rates (SOFR + 400–500bp) → wider excess spread for CLO equity → equity investor IRR improved to 15–25%. Higher equity demand → more CLO issuance possible.",
    color: "border-fuchsia-200 bg-fuchsia-50 dark:border-fuchsia-800 dark:bg-fuchsia-900/20",
    dot: "bg-fuchsia-500",
  },
  {
    icon: "🏦",
    title: (ko: boolean) => ko ? "사모 신용 펀드의 CLO 매니저 역할 확대" : "Private Credit Funds Expanding as CLO Managers",
    desc: (ko: boolean) =>
      ko
        ? "Blackstone·Apollo·Ares 등 대형 사모 신용 플랫폼이 CLO 매니저 역할 확대. 론 오리지네이션 → CLO 발행 → 에쿼티 보유 수직통합. 은행의 레버리지드 론 시장 지위 잠식."
        : "Large private credit platforms like Blackstone, Apollo, Ares expanded their CLO manager role. Vertical integration: loan origination → CLO issuance → equity retention. Eroding banks' leveraged loan market position.",
    color: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",
    dot: "bg-indigo-500",
  },
];

// ── Issuance History ──────────────────────────────────────────────────────────
const ISSUANCE_DATA = [
  { year: "2019", amount: 127, peak: false },
  { year: "2020", amount: 91,  peak: false },
  { year: "2021", amount: 187, peak: false },
  { year: "2022", amount: 130, peak: false },
  { year: "2023", amount: 126, peak: false },
  { year: "2024", amount: 185, peak: true  },
];
const maxIssuance = Math.max(...ISSUANCE_DATA.map((d) => d.amount));

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) =>
      ko
        ? "CLO가 레버리지드 론 시장의 65%를 보유하는 이유는 무엇인가요?"
        : "Why do CLOs hold 65% of the leveraged loan market?",
    a: (ko: boolean) =>
      ko
        ? "레버리지드 론의 가장 큰 문제는 '매수자 부족'입니다. 론은 공개 거래가 어렵고 신용등급이 낮아(BB/B), 자본 규제를 받는 은행이 장기 보유하기 어렵습니다. CLO는 이 문제를 해결했습니다 — 론을 묶어 AAA부터 에쿼티까지 다양한 트랑쉐로 재포장해, 서로 다른 리스크 선호 투자자를 끌어들입니다. 보험사는 AAA를 사고, 헤지펀드는 BB 또는 에쿼티를 삽니다. CLO 없이는 레버리지드 론 시장이 지금 절반 크기도 되지 않았을 것입니다."
        : "The core problem with leveraged loans is insufficient buyers. Loans are hard to trade publicly, and their low ratings (BB/B) make it difficult for capital-regulated banks to hold long-term. CLOs solved this — pooling loans and repackaging them into tranches from AAA to equity, attracting investors with varying risk appetites. Insurers buy AAA; hedge funds buy BB or equity. Without CLOs, the leveraged loan market would likely be less than half its current size.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "CLO 매니저가 에쿼티 트랑쉐를 직접 보유해야 하는 이유는 무엇인가요?"
        : "Why must CLO managers retain a portion of the equity tranche?",
    a: (ko: boolean) =>
      ko
        ? "이해관계 정렬(Skin in the Game) 때문입니다. CLO 매니저가 에쿼티 5~10%를 직접 보유하면, 담보 론 풀 품질을 관리할 인센티브가 생깁니다. 에쿼티는 손실을 가장 먼저 흡수하므로, 매니저가 나쁜 론을 편입시키면 본인이 가장 먼저 손실을 봅니다. 2010년 도드-프랭크 법(미국) 및 EU 위험 보유 규정이 CLO 매니저의 5% 보유를 의무화했습니다. 이는 2008년 MBS/CDO 위기에서 오리지네이터가 자산을 팔아치우고 리스크를 전가한 교훈에서 나온 규제입니다."
        : "It's about aligning interests — skin in the game. When CLO managers retain 5–10% of equity, they have a direct incentive to maintain the collateral loan pool's quality. Since equity absorbs losses first, a manager who includes bad loans loses money first. The US Dodd-Frank Act and EU risk retention rules mandated 5% retention for CLO managers. This regulation emerged from the 2008 MBS/CDO crisis lesson — originators sold off assets and transferred risk with no consequence.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "CLO 재투자 기간(Reinvestment Period)이 CLO 에쿼티 투자자에게 왜 중요한가요?"
        : "Why is the CLO reinvestment period critical to equity investors?",
    a: (ko: boolean) =>
      ko
        ? "CLO 에쿼티 투자자의 수익은 '초과 스프레드(담보 자산 수익률 - CLO 채권 비용)'를 얼마나 오래 수취하느냐에 달려 있습니다. 재투자 기간 동안 매니저는 상환된 원금으로 새 론을 매입해 담보 풀을 유지하고, 에쿼티 투자자는 그 기간 내내 초과 스프레드를 수취합니다. 재투자 기간이 5년이면 5년치 초과 스프레드를 받지만, 2년이면 2년치만 받습니다. 2024년 CLO 붐에서 재투자 기간 연장(5년 이상)이 에쿼티 투자자 유인에 중요한 구조적 요소가 됐습니다."
        : "CLO equity investor returns depend on how long they can collect excess spread (collateral asset yield minus CLO note cost). During the reinvestment period, the manager buys new loans with repaid principal, maintaining the pool and allowing continuous excess spread collection. A 5-year reinvestment period delivers 5 years of excess spread; 2 years delivers only 2. In the 2024 CLO boom, longer reinvestment periods (5+ years) became an important structural incentive for equity investors.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "2020년 COVID 충격에서 CLO AAA 트랑쉐가 단 한 건도 손실을 입지 않은 이유는?"
        : "Why did CLO AAA tranches suffer zero losses in the 2020 COVID shock?",
    a: (ko: boolean) =>
      ko
        ? "세 가지 이유입니다. ① 분산: CLO는 100~200개 다양한 기업 론으로 구성 — 항공업이 무너져도 기술·의료·소비재 론은 살아남았습니다. ② 두꺼운 버퍼: AAA 아래 35~40%의 후순위 트랑쉐가 손실을 먼저 흡수. 레버리지드 론 부도율이 10%에 달해도 AAA는 무손실. ③ 실물 기업 담보: CLO는 MBS와 달리 실제 운영되는 기업의 대출이 담보 — 가치가 0이 되는 경우가 드뭅니다. 2008년 MBS/CDO와의 핵심 차이는 상관관계입니다: 주택 가격은 전국이 동시에 하락했지만, 기업 부도는 산업·지역별로 분산됩니다."
        : "Three reasons. ① Diversification: CLOs hold 100–200 loans across diverse companies — even if aviation collapsed, tech, healthcare, and consumer staples loans survived. ② Thick buffers: 35–40% of subordinate tranches below AAA absorbs losses first. Even with 10% CLO leveraged loan default rates, AAA remains unaffected. ③ Real company collateral: unlike MBS, CLO collateral is loans to operating businesses — near-zero value scenarios are rare. The key difference from 2008 MBS/CDO is correlation: US home prices fell nationwide simultaneously, while corporate defaults are dispersed across industries and regions.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "Blackstone·Apollo·Ares가 CLO 시장에서 은행을 대체하고 있다는 말은 무슨 의미인가요?"
        : "What does it mean that Blackstone, Apollo, and Ares are displacing banks in the CLO market?",
    a: (ko: boolean) =>
      ko
        ? "전통적으로 레버리지드 론 시장은 Goldman Sachs·JPMorgan·Bank of America 같은 투자은행이 주도했습니다 — 대출 주선(Arranging), CLO 발행 주관, 2차 시장 거래를 담당했습니다. 그런데 2010년대부터 Blackstone·Apollo·Ares 같은 대형 사모 신용 플랫폼이 세 단계를 수직통합했습니다: ①직접 론 오리지네이션(은행 없이 기업에 직접 대출), ②그 론을 담보로 CLO 발행(자체 자금 조달), ③CLO 에쿼티 보유(수익 극대화). 결과: 2024년 미국 직접 대출(Direct Lending) 시장이 $1조를 돌파 — 사모 신용이 은행 대출의 경쟁자가 됐습니다."
        : "Traditionally, investment banks like Goldman Sachs, JPMorgan, and Bank of America dominated the leveraged loan market — arranging loans, managing CLO issuance, and providing secondary market liquidity. Starting in the 2010s, large private credit platforms like Blackstone, Apollo, and Ares vertically integrated three steps: ①direct loan origination (lending directly to companies without banks), ②CLO issuance backed by those loans (self-funded), ③CLO equity retention (maximizing returns). Outcome: by 2024, the US direct lending market surpassed $1T — private credit has become a genuine competitor to bank lending.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, title: "S&P Global — Global CLO Market Outlook 2024", source: "S&P Global, 2024", url: "https://www.spglobal.com/" },
  { id: 2, title: "LSTA — Leveraged Loan & CLO Market Data", source: "LSTA, 2024", url: "https://www.lsta.org/" },
  { id: 3, title: "Moody's — CLO Performance Study", source: "Moody's, 2024", url: "https://www.moodys.com/" },
  { id: 4, title: "Bloomberg — Record CLO Issuance 2024", source: "Bloomberg, 2024", url: "https://www.bloomberg.com/" },
  { id: 5, title: "Apollo Global — Private Credit & CLO Strategy", source: "Apollo, 2024", url: "https://www.apollo.com/" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredCloClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = STRUCTURED_SERIES[thisCh - 1] ?? null;
  const next = STRUCTURED_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-violet-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:text-violet-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko ? concept.title : (concept.titleEn ?? concept.title)}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/40">
                {t}
              </span>
            ))}
          </div>
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 1 — 30초 요약
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 30초 요약 — CLO는 왜 레버리지드 론 시장의 산소인가" : "1. 30-Second Summary — Why CLOs Are the Oxygen of the Leveraged Loan Market"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2024년 전 세계 CLO 발행 $1,850억 — 사상 최대 기록. 레버리지드 론 시장의 65%가 CLO 안에 있습니다."
              : "Global CLO issuance reached a record $185B in 2024. 65% of the leveraged loan market lives inside CLOs."}
          </p>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {QUICK_STATS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{m.value}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{m.label(ko)}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                  <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{m.detail(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* 2024 issuance bar chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "연간 글로벌 CLO 발행액 ($bn, 미국 기준)" : "Annual Global CLO Issuance ($bn, US-based)"}
            </p>
            <div className="flex items-end gap-2" style={{ height: "120px" }}>
              {ISSUANCE_DATA.map((d, i) => {
                const barPx = Math.round((d.amount / maxIssuance) * 90);
                return (
                  <div key={i} className="flex flex-col items-center justify-end flex-1" style={{ height: "120px" }}>
                    <span className="text-[9px] font-bold mb-0.5 text-gray-500">{d.amount}</span>
                    <motion.div
                      className={`w-full rounded-t-sm ${d.peak ? "bg-violet-500" : "bg-violet-300 dark:bg-violet-700"}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx }}
                      viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
                    />
                    <span className="text-[9px] text-gray-400 mt-1">{d.year}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
              {ko ? "* 2021년 $187bn으로 이전 피크, 2024년 $185bn으로 사상 최대 근접 달성" : "* 2021 previous peak $187bn; 2024 at $185bn approaches record"}
            </p>
          </div>

          <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-bold text-sm text-violet-800 dark:text-violet-300 mb-1.5">
                  {ko ? "CLO가 없으면 레버리지드 론 시장은?" : "Without CLOs, What Happens to the Leveraged Loan Market?"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "CLO 수요가 갑자기 사라지면, 레버리지드 론 스프레드는 즉각 100~200bp 확대될 것으로 추정됩니다. LBO 인수금융 비용이 치솟고, 많은 PE 딜이 불가능해집니다. CLO는 LBO 생태계 전체를 떠받치는 구조입니다."
                    : "If CLO demand suddenly disappeared, leveraged loan spreads would immediately widen by an estimated 100–200bp. LBO acquisition financing costs would soar and many PE deals would become impossible. CLOs are the structural foundation supporting the entire LBO ecosystem."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 2 — CLO란 무엇인가
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. CLO란 무엇인가 — 레버리지드 론 풀 → 트랑쉐 구조" : "2. What Is a CLO? — Leveraged Loan Pool → Tranche Structure"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO는 ABS의 가장 정교한 형태입니다. 차이는 기초 자산이 소비자 대출이 아닌 기업 레버리지드 론이라는 점."
              : "CLO is the most sophisticated form of ABS. The difference: the underlying assets are corporate leveraged loans, not consumer receivables."}
          </p>

          {/* CLO Structure Diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6 mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
              {ko ? "CLO 구조 다이어그램" : "CLO Structure Diagram"}
            </p>

            {/* Leveraged loans pool */}
            <div className="rounded-lg border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/30 p-4 mb-3">
              <p className="text-xs font-bold text-violet-800 dark:text-violet-300 mb-2">
                {ko ? "레버리지드 론 풀 (100~200개 기업 대출)" : "Leveraged Loan Pool (100–200 corporate loans)"}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {["LBO론 A", "LBO론 B", "기업론 C", "LBO론 D", "기업론 E", "LBO론 F"].map((l, i) => (
                  <div key={i} className="rounded text-center bg-violet-100 dark:bg-violet-900/50 px-1.5 py-1">
                    <p className="text-[9px] font-mono text-violet-700 dark:text-violet-300">{l}</p>
                    <p className="text-[8px] text-gray-400">{["BB", "B+", "BB-", "B", "BB", "B+"][i]}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "평균 등급: B/B+. 100개 이상 기업. 다양한 산업·지역 분산." : "Avg rating: B/B+. 100+ companies. Diverse industries & geographies."}
              </p>
            </div>

            {/* Arrow + CLO Manager */}
            <div className="flex justify-center my-3">
              <div className="flex flex-col items-center text-xs text-gray-400">
                <span className="text-lg">↕</span>
                <div className="rounded-lg border-2 border-violet-400 dark:border-violet-600 bg-white dark:bg-gray-900 px-4 py-2 text-center my-1">
                  <p className="text-xs font-black text-violet-700 dark:text-violet-300">
                    {ko ? "CLO 매니저 (SPV 운용)" : "CLO Manager (SPV Operator)"}
                  </p>
                  <p className="text-[10px] text-gray-500">Blackstone / Apollo / Ares / PGIM</p>
                </div>
                <span className="text-lg">↓</span>
              </div>
            </div>

            {/* Tranches output */}
            <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mb-2">
              {ko ? "트랑쉐 발행 → 각기 다른 리스크 선호 투자자에게 판매" : "Issues tranches → sold to investors with varying risk appetites"}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-1.5">
              {[
                { label: "AAA", color: "bg-emerald-500", pct: "64%" },
                { label: "AA",  color: "bg-teal-500",    pct: "9%"  },
                { label: "A",   color: "bg-sky-500",     pct: "7%"  },
                { label: "BBB", color: "bg-violet-500",  pct: "5%"  },
                { label: "BB",  color: "bg-purple-500",  pct: "4%"  },
                { label: "B",   color: "bg-fuchsia-500", pct: "2%"  },
                { label: "Eq",  color: "bg-rose-500",    pct: "9%"  },
              ].map((t, i) => (
                <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-center">
                  <div className={`inline-block w-2.5 h-2.5 rounded-full ${t.color} mb-1`} />
                  <p className="text-xs font-black text-gray-900 dark:text-gray-50">{t.label}</p>
                  <p className="text-[10px] text-gray-400">{t.pct}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 3 — CLO 매니저의 역할
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. CLO 매니저의 역할 — 매니저 Tier와 에쿼티 보유 이유" : "3. CLO Manager's Role — Manager Tiers & Why They Retain Equity"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO 매니저는 단순한 관리자가 아닙니다. 레버리지드 론 선별과 포트폴리오 운용이 CLO 전체 수익률을 결정합니다."
              : "CLO managers are far more than administrators. Loan selection and portfolio management determine the entire CLO's return profile."}
          </p>

          {/* Manager responsibilities */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "CLO 매니저의 핵심 역할" : "CLO Manager's Core Responsibilities"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  icon: "🔍",
                  title: (ko: boolean) => ko ? "론 선별 (Loan Selection)" : "Loan Selection",
                  desc: (ko: boolean) => ko
                    ? "100~200개 레버리지드 론 선별. 산업·지역·기업 규모 분산. 신용 분석 + 계량 모델 결합."
                    : "Selects 100–200 leveraged loans. Diversifies across industries, geographies, company size. Combines credit analysis and quantitative models.",
                  color: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
                },
                {
                  icon: "🔄",
                  title: (ko: boolean) => ko ? "포트폴리오 교체 (Active Management)" : "Active Portfolio Management",
                  desc: (ko: boolean) => ko
                    ? "재투자 기간 중 악화된 론 매각 후 새 론으로 교체. 등급 하락(Downgrade) 론 비중 관리. OC·IC 트리거 준수."
                    : "During reinvestment, sells deteriorating loans and replaces with new ones. Manages downgraded loan concentration. Maintains OC/IC trigger compliance.",
                  color: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
                },
                {
                  icon: "📊",
                  title: (ko: boolean) => ko ? "투자자 보고 (Reporting)" : "Investor Reporting",
                  desc: (ko: boolean) => ko
                    ? "월간 트러스티 리포트 작성. 개별 론 상태 공개. OC 비율·IC 비율·디폴트 현황 리포팅."
                    : "Prepares monthly trustee reports. Discloses individual loan status. Reports OC ratios, IC ratios, and default status.",
                  color: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-50 my-2">{item.title(ko)}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
                  <span className={`mt-3 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                    {item.title(ko)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Manager Tier Comparison */}
          <div className="space-y-3">
            {MANAGER_TIERS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-5 ${m.color}`}>
                <div className="flex items-start gap-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${m.badge}`}>
                    {m.tier}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-2">
                      {typeof m.managers === "function" ? m.managers(ko) : m.managers}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs mb-2">
                      <div>
                        <span className="text-gray-400 uppercase text-[10px]">{ko ? "AAA 스프레드: " : "AAA Spread: "}</span>
                        <span className="font-mono font-semibold text-gray-700 dark:text-gray-300">{m.aaa(ko)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 uppercase text-[10px]">{ko ? "운용 규모: " : "AUM: "}</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{m.assets(ko)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{m.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why equity retention */}
          <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-5 mt-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">⚖️</span>
              <div>
                <p className="font-bold text-sm text-violet-800 dark:text-violet-300 mb-2">
                  {ko ? "매니저가 에쿼티를 직접 보유하는 이유 — Skin in the Game" : "Why Managers Retain Equity — Skin in the Game"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "미국 도드-프랭크 법과 EU 위험 보유 규정은 CLO 매니저에게 CLO 전체 발행액의 5% 이상을 보유하도록 의무화합니다. 에쿼티는 손실을 가장 먼저 흡수하므로, 매니저가 나쁜 론을 편입하면 본인이 가장 먼저 손실을 입습니다. 이 이해관계 정렬이 CLO 시스템의 핵심 설계 원리입니다."
                    : "US Dodd-Frank and EU risk retention rules mandate that CLO managers retain at least 5% of the total CLO issuance. Since equity absorbs losses first, managers who include bad loans lose their own money first. This alignment of interests is the core design principle of the CLO system."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 4 — CLO 라이프사이클
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. CLO 라이프사이클 — 램프업 → 재투자 → 정산 3단계" : "4. CLO Lifecycle — Ramp-Up → Reinvestment → Wind-Down"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO는 발행 후 약 10~12년에 걸쳐 3단계를 거칩니다. 에쿼티 투자자의 수익률은 이 타임라인 설계가 결정합니다."
              : "After issuance, a CLO passes through 3 stages over roughly 10–12 years. The equity investor's returns are determined by this timeline design."}
          </p>

          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-violet-200 dark:bg-violet-800 hidden sm:block" />
            <div className="space-y-4">
              {[
                {
                  phase: (ko: boolean) => ko ? "① 램프업 기간 (Ramp-Up Period)" : "① Ramp-Up Period",
                  duration: (ko: boolean) => ko ? "발행 후 1~6개월" : "1–6 months post-issuance",
                  icon: "🚀",
                  desc: (ko: boolean) => ko
                    ? "CLO 발행 즉시 투자자로부터 자금 조달. 매니저가 목표 레버리지드 론 풀 구성 시작. 초기에는 현금 비율 높고, 점차 론으로 교체. 랩업 기간 중 현금 수익률이 낮으므로 에쿼티 투자자에게 비효율 구간."
                    : "Funds raised from investors immediately post-issuance. Manager begins building target leveraged loan pool. Initially high cash ratio, gradually replaced by loans. Ramp-up is inefficient for equity investors as cash yields are low.",
                  metric: (ko: boolean) => ko ? "목표: 90%+ 투자 완료" : "Target: 90%+ invested",
                  color: "border-violet-300 bg-violet-50 dark:border-violet-700 dark:bg-violet-900/20",
                  dot: "bg-violet-500",
                },
                {
                  phase: (ko: boolean) => ko ? "② 재투자 기간 (Reinvestment Period)" : "② Reinvestment Period",
                  duration: (ko: boolean) => ko ? "4~5년 (최근 5년 이상 트렌드)" : "4–5 years (recent trend: 5+ years)",
                  icon: "🔄",
                  desc: (ko: boolean) => ko
                    ? "CLO 에쿼티 투자자의 황금 기간. 상환된 원금으로 새 론 매입 → 담보 풀 규모 유지. 매니저가 악화 론을 좋은 론으로 교체할 수 있는 시기. 에쿼티 투자자는 이 기간 내내 초과 스프레드 수취. 재투자 기간이 길수록 에쿼티 수익률 향상."
                    : "The golden period for CLO equity investors. Repaid principal purchases new loans → maintains pool size. Manager can replace deteriorating loans with quality ones. Equity investors collect excess spread throughout this period. Longer reinvestment periods improve equity returns.",
                  metric: (ko: boolean) => ko ? "에쿼티 IRR 결정 핵심 구간" : "Key period determining equity IRR",
                  color: "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
                  dot: "bg-purple-500",
                },
                {
                  phase: (ko: boolean) => ko ? "③ 정산 단계 (Wind-Down / Amortization)" : "③ Wind-Down / Amortization",
                  duration: (ko: boolean) => ko ? "재투자 기간 종료 후 ~5~7년" : "~5–7 years after reinvestment ends",
                  icon: "📉",
                  desc: (ko: boolean) => ko
                    ? "신규 론 매입 없이 만기 도래 론부터 원금 순차 상환. AAA→AA→A→BBB→BB→에쿼티 순서로 상환. 담보 풀 규모 점차 감소. 모든 론 만기 후 에쿼티 투자자가 잔여 현금 수취."
                    : "No new loan purchases; principal repaid sequentially as loans mature. Repayment order: AAA→AA→A→BBB→BB→Equity. Pool gradually shrinks. After all loans mature, equity investors receive residual cash.",
                  metric: (ko: boolean) => ko ? "선순위 우선 상환" : "Senior first repayment",
                  color: "border-fuchsia-300 bg-fuchsia-50 dark:border-fuchsia-700 dark:bg-fuchsia-900/20",
                  dot: "bg-fuchsia-500",
                },
              ].map((phase, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${phase.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${phase.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-xl">{phase.icon}</span>
                        <div>
                          <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{phase.phase(ko)}</p>
                          <p className="text-[10px] font-mono text-gray-400">{phase.duration(ko)}</p>
                        </div>
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/60 dark:bg-black/20 text-gray-700 dark:text-gray-300">
                          {phase.metric(ko)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{phase.desc(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 5 — 트랑쉐 구조 심화
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 트랑쉐 구조 심화 — AAA(64%)부터 에쿼티(9%)까지" : "5. Tranche Structure Deep Dive — AAA (64%) to Equity (9%)"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO의 7개 트랑쉐는 각자 다른 리스크·수익률·투자자 유형을 가집니다. B 등급 레버리지드 론 풀이 어떻게 AAA 채권이 되는가."
              : "CLO's 7 tranches each have distinct risk/return/investor profiles. How a B-rated leveraged loan pool produces AAA bonds."}
          </p>

          {/* Tranche Stack */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <div className="space-y-2">
              {CLO_TRANCHES.map((t, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                  className={`rounded-xl border p-4 ${t.color}`}>
                  <div className="flex items-start gap-3 flex-wrap">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden max-w-[200px]">
                        <div className={`h-3 rounded-full ${t.barColor}`} style={{ width: `${t.w}%` }} />
                      </div>
                      <span className="font-black text-sm text-gray-900 dark:text-gray-50 whitespace-nowrap">{t.rating}</span>
                    </div>
                    <div className="text-xs text-right shrink-0 min-w-[160px]">
                      <div className="flex gap-3 justify-end mb-0.5">
                        <span className="text-gray-400">{ko ? "비중" : "Size"}:</span>
                        <span className="font-bold text-gray-700 dark:text-gray-300">{t.pct}</span>
                        <span className="text-gray-400">{ko ? "스프레드" : "Spread"}:</span>
                        <span className="font-mono font-bold text-gray-700 dark:text-gray-300">{t.spread(ko)}</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">{t.investors(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-3">
              {ko ? "* 2024년 기준 전형적인 CLO 구조. 실제 스프레드는 매니저 Tier·시장 환경에 따라 다름." : "* Typical 2024 CLO structure. Actual spreads vary by manager tier and market conditions."}
            </p>
          </div>

          {/* Subordination math */}
          <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-5">
            <p className="font-bold text-sm text-violet-800 dark:text-violet-300 mb-3">
              {ko ? "왜 B등급 론 풀이 AAA 채권을 발행할 수 있나 — 후순위 수학" : "Why a B-Rated Loan Pool Can Issue AAA Bonds — Subordination Math"}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold mb-2">{ko ? "시나리오: 레버리지드 론 풀 $1bn" : "Scenario: $1bn leveraged loan pool"}</p>
                <ul className="space-y-1.5 text-xs">
                  <li>• {ko ? "에쿼티 9% ($90mn) — 손실 첫 번째 흡수" : "Equity 9% ($90mn) — absorbs first losses"}</li>
                  <li>• {ko ? "BB 4% ($40mn) — 에쿼티 소진 후 흡수" : "BB 4% ($40mn) — absorbs after equity exhausted"}</li>
                  <li>• {ko ? "BBB 5% ($50mn) — 그 다음 흡수" : "BBB 5% ($50mn) — next in line"}</li>
                  <li>• {ko ? "A / AA 합계 16% — 버퍼 역할" : "A/AA combined 16% — further buffer"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">{ko ? "결론: 풀 손실 34% 까지 AAA 무손실" : "Result: AAA suffers zero loss up to 34% pool losses"}</p>
                <ul className="space-y-1.5 text-xs">
                  <li>✅ {ko ? "레버리지드 론 역사적 부도율: 3~5%/년" : "Historical leveraged loan default rate: 3–5%/yr"}</li>
                  <li>✅ {ko ? "2020 COVID 최고 부도율: ~8%" : "2020 COVID peak default rate: ~8%"}</li>
                  <li>✅ {ko ? "34% 버퍼는 역사적 최고 부도율의 4배 이상" : "34% buffer is 4× the historical peak default rate"}</li>
                  <li>✅ {ko ? "CLO AAA — 역사상 단 한 건도 디폴트 없음" : "CLO AAA — zero defaults in history"}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 6 — CLO vs 2008
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. CLO vs 2008 — 왜 CLO AAA는 COVID에서 살아남았나" : "6. CLO vs 2008 — Why CLO AAA Survived COVID"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO는 종종 2008년 위기의 주범인 CDO(부채담보부채권)와 혼동됩니다. 하지만 구조적으로 근본적으로 다릅니다."
              : "CLOs are often confused with CDOs (Collateralized Debt Obligations), which were central to the 2008 crisis. But they are structurally fundamentally different."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-3 text-violet-600 dark:text-violet-400">CLO (2020 COVID)</th>
                    <th className="text-left px-4 py-3 text-rose-600 dark:text-rose-400">CDO / RMBS (2008)</th>
                  </tr>
                </thead>
                <tbody>
                  {CLO_VS_CDO.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-emerald-700 dark:text-emerald-300">{row.clo(ko)}</td>
                      <td className="px-4 py-3 text-xs text-rose-700 dark:text-rose-300">{row.cdo(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🛡️</span>
              <div>
                <p className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2">
                  {ko ? "결론: CLO AAA — 1990년대 이후 단 한 건도 디폴트 없음" : "Verdict: CLO AAA — Zero Defaults Since the 1990s"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "무디스 연구에 따르면 1993년 이후 발행된 CLO AAA 트랑쉐는 단 한 건도 원금 손실이 없었습니다. 2008~09년 금융위기, 2020년 COVID 쇼크를 포함해서. 이는 2008년 서브프라임 CDO와 대비됩니다 — 그 당시 AAA 등급 CDO 트랑쉐도 대규모 원금 손실을 경험했습니다. CLO의 분산 구조와 실물 기업 담보가 핵심 차이입니다."
                    : "According to Moody's research, no CLO AAA tranche issued since 1993 has ever suffered a principal loss — including through the 2008–09 financial crisis and the 2020 COVID shock. This stands in stark contrast to 2008 subprime CDOs, where even AAA-rated tranches experienced massive principal losses. CLO's diversification and real corporate collateral are the defining differences."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 7 — 2024 CLO 붐
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 2024 CLO 붐 — PE 인수금융과의 순환 피드백" : "7. 2024 CLO Boom — Circular Feedback with PE Acquisition Finance"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2024년 $1,850억 발행은 사상 최대에 가까운 기록. 왜 지금 CLO 붐이 일어나고 있을까요?"
              : "The near-record $185B issuance in 2024 — why is the CLO boom happening now?"}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {BOOM_DRIVERS.map((d, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${d.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${d.dot}`} />
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{d.title(ko)}</p>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{d.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Circular feedback diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "PE LBO ↔ CLO 순환 피드백 구조" : "PE LBO ↔ CLO Circular Feedback Loop"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {[
                { icon: "🏢", label: ko ? "PE 바이아웃 딜 증가" : "More PE Buyout Deals" },
                { icon: "→", label: "" },
                { icon: "📋", label: ko ? "레버리지드 론 공급 증가" : "More Leveraged Loan Supply" },
                { icon: "→", label: "" },
                { icon: "🏗️", label: ko ? "CLO 발행 증가" : "More CLO Issuance" },
                { icon: "→", label: "" },
                { icon: "💰", label: ko ? "론 수요 증가·비용 하락" : "Loan demand rises, costs fall" },
                { icon: "↩", label: "" },
              ].map((item, i) => (
                item.icon === "→" || item.icon === "↩" ? (
                  <span key={i} className="text-xl text-gray-400 font-bold hidden sm:block">{item.icon}</span>
                ) : (
                  <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 p-3 text-center flex-1">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.label}</p>
                  </div>
                )
              ))}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 text-center">
              {ko
                ? "CLO 수요 증가 → 레버리지드 론 스프레드 타이트 → LBO 비용 감소 → 더 많은 PE 딜 가능 → 더 많은 론 공급 → 더 많은 CLO 발행"
                : "Rising CLO demand → tighter leveraged loan spreads → lower LBO costs → more PE deals possible → more loan supply → more CLO issuance"}
            </p>
          </div>
        </motion.section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion
            items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))}
            accentColor={accent}
          />
        </motion.section>

        {/* ── 이전 / 다음 챕터 네비게이션 ──────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="flex justify-between gap-4 mb-10">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 hover:border-violet-400 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{ko ? "이전" : "Previous"}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">← {prev.title(ko)}</p>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 hover:border-violet-400 transition-colors text-right">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{ko ? "다음" : "Next"}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{next.title(ko)} →</p>
            </Link>
          ) : <div className="flex-1" />}
        </motion.div>

        {/* ── ShareButtons (bottom) ────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-10">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
        </motion.div>

        {/* ── 출처 ────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
            {ko ? "참고 자료" : "References"}
          </h3>
          <div className="space-y-1.5">
            {SOURCES.map((s) => (
              <div key={s.id} className="flex items-start gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span className="shrink-0 font-mono">[{s.id}]</span>
                <span>{s.title} — {s.source}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
