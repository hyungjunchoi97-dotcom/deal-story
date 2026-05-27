"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#0d9488"; // teal — convertible bonds hybrid nature

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"         : "ECM Overview"      },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"       : "Ch.1 Issuers"      },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"       : "Ch.2 Investors"    },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"   : "Ch.3 Valuation"    },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"     : "Ch.4 Process"      },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"       : "Ch.5 Book-Building"},
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"   : "Ch.6 Post-IPO"     },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"     : "Ch.7 Follow-on"    },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"     : "Ch.8 Convertible"  },
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"     : "Ch.9 Intl Listing" },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장" : "Ch.10 SPAC·Direct" },
];

const thisCh = 8;

// ── Chapter Sections ──────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "what-is-cb",   title: (ko: boolean) => ko ? "1. 전환사채란"         : "1. What Is a CB?"         },
  { id: "structure",    title: (ko: boolean) => ko ? "2. 구조·메커니즘"       : "2. Structure & Mechanics" },
  { id: "payoff",       title: (ko: boolean) => ko ? "3. 페이오프 다이어그램" : "3. Payoff Diagram"        },
  { id: "investors",    title: (ko: boolean) => ko ? "4. 투자자 유형"         : "4. Investor Types"        },
  { id: "case-studies", title: (ko: boolean) => ko ? "5. 케이스 스터디"       : "5. Case Studies"          },
];

// ── CB Structure Key Terms ────────────────────────────────────────────────────
const CB_STRUCTURE = [
  {
    term: "전환가격",
    termEn: "Conversion Price",
    ko: "주식으로 전환할 때 적용되는 가격. IPO 이후 30–40% 프리미엄으로 설정.",
    en: "Price at which the bond converts to shares. Set at 30–40% premium to current share price.",
    icon: "💱",
    color: "border-teal-200 dark:border-teal-700",
    headerColor: "bg-teal-50 dark:bg-teal-900/30",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  },
  {
    term: "전환비율",
    termEn: "Conversion Ratio",
    ko: "채권 1좌당 받을 수 있는 주식 수. = 액면가 / 전환가격",
    en: "Number of shares received per bond. = Face value / Conversion price",
    icon: "📐",
    color: "border-blue-200 dark:border-blue-700",
    headerColor: "bg-blue-50 dark:bg-blue-900/30",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    term: "전환프리미엄",
    termEn: "Conversion Premium",
    ko: "현재 주가 대비 전환가격의 프리미엄. 높을수록 주식 전환 가능성 낮음.",
    en: "Premium of conversion price over current share price. Higher = less likely to convert.",
    icon: "📊",
    color: "border-violet-200 dark:border-violet-700",
    headerColor: "bg-violet-50 dark:bg-violet-900/30",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  },
  {
    term: "쿠폰",
    termEn: "Coupon",
    ko: "일반 채권보다 낮음 (0–2%). 전환 옵션이 쿠폰의 일부를 대신.",
    en: "Lower than straight bonds (0–2%). The conversion option substitutes part of the coupon.",
    icon: "🏷️",
    color: "border-amber-200 dark:border-amber-700",
    headerColor: "bg-amber-50 dark:bg-amber-900/30",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  {
    term: "만기",
    termEn: "Maturity",
    ko: "보통 3–7년. 전환 안 되면 액면가로 상환.",
    en: "Typically 3–7 years. If not converted, repaid at par.",
    icon: "⏱️",
    color: "border-rose-200 dark:border-rose-700",
    headerColor: "bg-rose-50 dark:bg-rose-900/30",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  },
];

// ── Payoff Scenarios ──────────────────────────────────────────────────────────
const PAYOFF_SCENARIOS = [
  {
    id: "surge",
    icon: "🚀",
    label: (ko: boolean) => ko ? "주가 급등" : "Share Price Surges",
    sublabel: (ko: boolean) => ko ? "전환가격 이상" : "Above Conversion Price",
    ko: "전환가격 이상 → 주식처럼 행동. 전환권 행사 → 자본이득 실현. 발행사: 채권 상환 불필요",
    en: "Share price above conversion price → acts like equity. Exercise conversion → capital gain. Issuer: no repayment needed",
    bondValue: 30,
    equityValue: 70,
    color: "bg-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-700",
    textColor: "text-teal-700 dark:text-teal-300",
    delta: "Δ → 1.0",
    deltaDesc: (ko: boolean) => ko ? "주식처럼 행동" : "Acts like equity",
  },
  {
    id: "sideways",
    icon: "↔️",
    label: (ko: boolean) => ko ? "주가 횡보" : "Share Price Sideways",
    sublabel: (ko: boolean) => ko ? "전환가격 근방" : "Near Conversion Price",
    ko: "전환가격 근방 → 채권+옵션 가치 혼재. 전환하기 애매한 구간.",
    en: "Share price near conversion price → mixed bond+option value. Ambiguous zone for conversion.",
    bondValue: 55,
    equityValue: 45,
    color: "bg-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-700",
    textColor: "text-amber-700 dark:text-amber-300",
    delta: "Δ ≈ 0.5",
    deltaDesc: (ko: boolean) => ko ? "채권+주식 혼합" : "Mixed bond+equity",
  },
  {
    id: "crash",
    icon: "🛡️",
    label: (ko: boolean) => ko ? "주가 급락" : "Share Price Crashes",
    sublabel: (ko: boolean) => ko ? "전환가격 이하" : "Below Conversion Price",
    ko: "전환가격 이하 → 채권처럼 행동. 원금+이자 보장. '안전벨트' 작동",
    en: "Share price below conversion price → acts like bond. Principal + interest protected. 'Seatbelt' engaged",
    bondValue: 92,
    equityValue: 8,
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    textColor: "text-blue-700 dark:text-blue-300",
    delta: "Δ → 0",
    deltaDesc: (ko: boolean) => ko ? "채권처럼 행동" : "Acts like bond",
  },
];

// ── Investor Types ────────────────────────────────────────────────────────────
const INVESTOR_TYPES = [
  {
    icon: "🏦",
    name: (ko: boolean) => ko ? "CB 전문 펀드" : "CB Specialist Funds",
    ko: "전환사채만 투자하는 헤지펀드. 채권 수익률 + 주식 상승 기대.",
    en: "Hedge funds investing exclusively in CBs. Bond yield + equity upside.",
    strategy: (ko: boolean) => ko ? "순수 CB 롱 포지션" : "Pure CB long",
    color: "border-teal-200 dark:border-teal-700",
    headerColor: "bg-teal-50 dark:bg-teal-900/30",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  },
  {
    icon: "⚖️",
    name: (ko: boolean) => ko ? "델타 헤지 펀드" : "Delta Hedge Funds",
    ko: "CB를 매수하고 주식을 공매도해 델타 중립 포지션. 변동성 수익을 목표.",
    en: "Buy CB and short the underlying stock to maintain delta-neutral position. Target volatility profits.",
    strategy: (ko: boolean) => ko ? "CB 매수 + 주식 공매도" : "Long CB + Short stock",
    color: "border-violet-200 dark:border-violet-700",
    headerColor: "bg-violet-50 dark:bg-violet-900/30",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  },
  {
    icon: "🏛️",
    name: (ko: boolean) => ko ? "크레딧 투자자" : "Credit Investors",
    ko: "하이일드보다 안전한 하이브리드로 포트폴리오 다변화. 전환 옵션은 덤.",
    en: "Portfolio diversification into safer hybrid than high-yield. Conversion option is a bonus.",
    strategy: (ko: boolean) => ko ? "채권 하방 보호 우선" : "Downside protection first",
    color: "border-blue-200 dark:border-blue-700",
    headerColor: "bg-blue-50 dark:bg-blue-900/30",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    emoji: "🏠",
    company: (_ko: boolean) => "Airbnb CB",
    year: "2020",
    result: (ko: boolean) => ko ? "COVID 위기 구제선" : "COVID Lifeline",
    color: "border-blue-200 dark:border-blue-700",
    headerBg: "bg-blue-50 dark:bg-blue-900/20",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    tagline: (ko: boolean) => ko
      ? "$2bn CB 0% 쿠폰 발행 (2020년 4월 COVID 최악 시점). 전환가 $28 → 상장가 $68 → 투자자 143% 수익"
      : "$2B CB at 0% coupon (April 2020, COVID worst point). Conversion price $28 → IPO price $68 → investors 143% return",
    lesson: (ko: boolean) => ko
      ? "완전한 CB의 교과서: 발행사는 0% 이자로 자금 조달, 투자자는 주식 상승 참여. COVID 시기 ECM 창구가 막혔을 때 CB가 유일한 자금조달 수단이었다."
      : "The CB textbook: issuer raises capital at 0% interest, investors participate in equity upside. When ECM markets were closed during COVID, CBs were the only funding window.",
    facts: [
      { label: (ko: boolean) => ko ? "발행 규모" : "Issuance size",     value: (_ko: boolean) => "$2bn" },
      { label: (ko: boolean) => ko ? "쿠폰" : "Coupon",                 value: (_ko: boolean) => "0%" },
      { label: (ko: boolean) => ko ? "전환가격" : "Conversion price",    value: (_ko: boolean) => "$28" },
      { label: (ko: boolean) => ko ? "투자자 수익률" : "Investor return", value: (_ko: boolean) => "+143%" },
    ],
  },
  {
    emoji: "₿",
    company: (_ko: boolean) => "MicroStrategy CB",
    year: "2020–2024",
    result: (ko: boolean) => ko ? "비트코인 레버리지 전략" : "Bitcoin Leverage Strategy",
    color: "border-orange-200 dark:border-orange-700",
    headerBg: "bg-orange-50 dark:bg-orange-900/20",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
    tagline: (ko: boolean) => ko
      ? "총 $70억+ CB 발행 → 비트코인 매입 자금 조달. CB 투자자 = 간접 BTC 롱"
      : "$7B+ total CB issuance → fund Bitcoin purchases. CB investors = indirect BTC long",
    lesson: (ko: boolean) => ko
      ? "CB를 자산 레버리지 도구로 사용한 극단적 사례. 낮은 쿠폰(0–0.625%)으로 대규모 BTC를 매입. BTC 급락 시 채권 약정 위반 리스크가 부각됐다."
      : "Extreme example of using CBs as an asset leverage tool. Low coupons (0–0.625%) to buy massive BTC. Risk of covenant breach during BTC crashes was highlighted.",
    facts: [
      { label: (ko: boolean) => ko ? "총 발행 규모" : "Total issued",     value: (_ko: boolean) => "$7bn+" },
      { label: (ko: boolean) => ko ? "쿠폰 범위" : "Coupon range",        value: (_ko: boolean) => "0–0.625%" },
      { label: (ko: boolean) => ko ? "조달 목적" : "Use of proceeds",     value: (ko: boolean) => ko ? "BTC 매입" : "BTC purchase" },
      { label: (ko: boolean) => ko ? "주요 리스크" : "Key risk",           value: (ko: boolean) => ko ? "약정 위반" : "Covenant breach" },
    ],
  },
  {
    emoji: "🇰🇷",
    company: (ko: boolean) => ko ? "국내 CB — 한화그룹 계열사" : "Korean CB — Hanwha Affiliate",
    year: "2022",
    result: (ko: boolean) => ko ? "사모 CB 지배구조 논란" : "Private CB Governance Controversy",
    color: "border-red-200 dark:border-red-700",
    headerBg: "bg-red-50 dark:bg-red-900/20",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    tagline: (ko: boolean) => ko
      ? "사모 CB를 특수관계인에게 저가 발행 → 소수주주 손실 → 금감원 조사 → 제3자 배정 규제 강화"
      : "Private CB issued to related parties at below-market terms → minority shareholder loss → FSS investigation → tighter third-party allocation rules",
    lesson: (ko: boolean) => ko
      ? "한국 시장에서 CB는 지배주주 지분율 확대 수단으로 악용되는 경우가 있다. Refixing(전환가격 하향 조정) 조항 + 제3자 배정이 결합되면 소수주주 희석이 심해진다."
      : "In Korea's market, CBs are sometimes misused to expand controlling shareholder stakes. When Refixing (downward conversion price adjustment) + third-party allocation are combined, minority shareholder dilution can be severe.",
    facts: [
      { label: (ko: boolean) => ko ? "발행 방식" : "Issuance method",   value: (ko: boolean) => ko ? "사모 제3자 배정" : "Private 3rd-party" },
      { label: (ko: boolean) => ko ? "문제 조항" : "Problematic clause", value: (_ko: boolean) => "Refixing" },
      { label: (ko: boolean) => ko ? "규제 결과" : "Regulatory outcome", value: (ko: boolean) => ko ? "금감원 조사" : "FSS investigation" },
      { label: (ko: boolean) => ko ? "영향" : "Impact",                  value: (ko: boolean) => ko ? "소수주주 희석" : "Minority dilution" },
    ],
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: (ko: boolean) => ko
      ? "전환사채가 일반 채권보다 쿠폰이 낮은 이유는 무엇인가요?"
      : "Why does a convertible bond have a lower coupon than a straight bond?",
    answer: (ko: boolean) => ko
      ? "투자자 입장에서 CB는 '채권 + 주식 매수 옵션(Call Option)'의 결합입니다. 이 옵션의 가치가 채권에 내재돼 있기 때문에, 발행사가 옵션 프리미엄만큼 쿠폰을 낮출 수 있습니다. 예를 들어 동일 기업 일반 채권 쿠폰이 5%라면, CB는 1–2%로 발행됩니다. 차이인 3–4%가 옵션의 가격입니다."
      : "From the investor's perspective, a CB is 'a bond + an equity call option.' Because this option is embedded in the bond, the issuer can reduce the coupon by the option premium. If a company's straight bond coupon is 5%, the CB might be issued at 1–2%. The 3–4% difference is the option's price.",
  },
  {
    question: (ko: boolean) => ko
      ? "전환사채와 신주인수권부사채(BW)는 어떻게 다른가요?"
      : "How are convertible bonds (CB) different from bonds with warrants (BW)?",
    answer: (ko: boolean) => ko
      ? "CB는 채권 자체가 주식으로 전환됩니다 — 전환되면 채권은 사라집니다. BW는 채권은 그대로 유지되면서 신주인수권(Warrant)만 별도로 행사됩니다 — 즉 채권+주식을 동시에 보유 가능합니다. 이 차이 때문에 BW는 발행사에 두 배의 자금 조달이 가능하지만, 기존 주주 희석 효과도 더 큽니다."
      : "In a CB, the bond itself converts to shares — once converted, the bond disappears. In a BW (Bond with Warrant), the bond remains intact while only the warrant is exercised separately — meaning you can hold both bond + stock simultaneously. This is why BWs can provide double the funding for issuers, but also create greater dilution for existing shareholders.",
  },
  {
    question: (ko: boolean) => ko
      ? "델타 헤징이란 무엇이고 왜 CB 투자에서 중요한가요?"
      : "What is delta hedging and why does it matter in CB investing?",
    answer: (ko: boolean) => ko
      ? "델타(Δ)는 주가 1원 변동 시 CB 가격이 얼마나 변하는지를 나타냅니다. 전환가 근처에서는 Δ≈0.5 (채권처럼 + 주식처럼 반반), 주가가 훨씬 높으면 Δ→1.0 (주식처럼), 훨씬 낮으면 Δ→0 (채권처럼). 델타 헤지 투자자는 CB를 매수하고 주식을 Δ만큼 공매도해서 시장 방향성 리스크를 제거하고, 순수하게 변동성과 전환 프리미엄 변화에서 이익을 취합니다."
      : "Delta (Δ) measures how much the CB price changes for a ₩1 move in the underlying stock. Near the conversion price Δ≈0.5 (half bond, half stock). Far above → Δ→1.0 (acts like stock). Far below → Δ→0 (acts like bond). A delta-hedging investor buys the CB and short-sells the stock by the Δ amount to eliminate directional market risk, profiting purely from volatility and changes in conversion premium.",
  },
  {
    question: (ko: boolean) => ko
      ? "한국 시장에서 CB가 문제가 되는 이유는 무엇인가요?"
      : "Why do CBs cause problems in the Korean market?",
    answer: (ko: boolean) => ko
      ? "한국에서는 사모 CB 발행 시 제3자 배정이 허용되고, Refixing(전환가격 하향 조정) 조항이 표준처럼 사용됩니다. 이 두 가지가 결합되면: 지배주주 또는 관련인에게 싸게 발행 → 주가 하락 시 전환가 자동 하향 → 더 많은 주식 취득 → 소수주주 희석. 2023년 이후 금감원이 사모 CB 발행 요건을 강화했지만, 여전히 지배구조 리스크로 분류됩니다."
      : "In Korea, third-party allocation is permitted for private CB issuances, and Refixing (downward conversion price adjustment) clauses are used as standard. When combined: issue cheaply to controlling shareholder or related parties → share price falls → conversion price automatically adjusted down → more shares acquired → minority shareholder dilution. The FSS tightened private CB requirements after 2023, but CBs remain classified as a governance risk.",
  },
];

// ── SeriesNav Component ────────────────────────────────────────────────────────
function SeriesNav({ lang, activeCh }: { lang: Lang; activeCh: number }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-1 py-2 min-w-max">
          {ECM_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.ch === activeCh
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
              style={s.ch === activeCh ? { background: accent } : {}}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Hybrid Nature Banner ───────────────────────────────────────────────────────
function HybridBanner({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const highlights = [
    {
      icon: "🏦",
      title: (ko: boolean) => ko ? "발행사 혜택" : "Issuer Benefit",
      desc: (ko: boolean) => ko
        ? "낮은 쿠폰 (0–2%) 자금 조달. 전환 시 부채가 자본으로 전환 → 부채비율 감소."
        : "Low coupon (0–2%) financing. Upon conversion, debt becomes equity → lower leverage ratio.",
    },
    {
      icon: "📈",
      title: (ko: boolean) => ko ? "투자자 혜택" : "Investor Benefit",
      desc: (ko: boolean) => ko
        ? "원금 보호(채권 특성) + 주가 상승 시 자본이득(주식 특성). 비대칭 수익 구조."
        : "Principal protection (bond) + capital gain on stock upside (equity). Asymmetric return profile.",
    },
    {
      icon: "⚡",
      title: (ko: boolean) => ko ? "ECM 맥락" : "ECM Context",
      desc: (ko: boolean) => ko
        ? "IPO·팔로우온 창구가 막힌 시장 혼란기에 CB가 ECM의 유일한 자금조달 수단이 되는 경우가 많다."
        : "During market disruptions when IPO/follow-on windows are closed, CBs often become the only ECM funding mechanism.",
    },
  ];

  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="rounded-2xl overflow-hidden shadow-sm"
      style={{ background: "linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #6366f1 100%)" }}
    >
      <div className="px-6 py-7 md:px-10 md:py-9">
        <div className="flex items-start gap-4 mb-5">
          <div className="text-3xl">🔀</div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {ko
                ? "전환사채 = 채권 + 주식 옵션의 하이브리드"
                : "Convertible Bond = Bond + Equity Option Hybrid"}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {ko
                ? "CB는 '채권의 하방 보호'와 '주식의 상방 참여'를 동시에 제공하는 금융상품이다. 발행사는 낮은 쿠폰으로 자금을 조달하고, 투자자는 주가 상승 시 자본이득을 취한다."
                : "A CB simultaneously provides bond downside protection and equity upside participation. Issuers raise capital at low coupons; investors capture capital gains when the stock rises."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white/15 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[12px] font-bold text-white">{item.title(ko)}</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">{item.desc(ko)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── CB Structure Cards ─────────────────────────────────────────────────────────
function CbStructureCards({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {CB_STRUCTURE.map((term, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.05)}
          className={`rounded-2xl border ${term.color} overflow-hidden shadow-sm`}
        >
          <div className={`${term.headerColor} px-5 py-4`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{term.icon}</span>
              <div>
                <div className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${term.badgeColor}`}>
                  {ko ? term.term : term.termEn}
                </div>
                <h4 className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
                  {ko ? term.termEn : term.term}
                </h4>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 bg-white dark:bg-gray-900">
            <p className="text-[13px] text-gray-700 dark:text-gray-200 leading-relaxed">
              {ko ? term.ko : term.en}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Payoff Diagram Component ───────────────────────────────────────────────────
function PayoffDiagram({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 shadow-sm"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
        {ko ? "전환사채 페이오프 다이어그램" : "Convertible Bond Payoff Diagram"}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {ko
          ? "주가 시나리오별 CB 가치 구성 — 채권 가치(하방 보호) + 주식 옵션 가치(상방 참여)"
          : "CB value composition by share price scenario — Bond floor (downside protection) + Equity option value (upside participation)"}
      </p>

      {/* Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {PAYOFF_SCENARIOS.map((scenario, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
            className={`rounded-xl border ${scenario.borderColor} ${scenario.bgColor} p-4`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{scenario.icon}</span>
              <div>
                <div className={`text-[12px] font-bold ${scenario.textColor}`}>
                  {scenario.label(ko)}
                </div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">
                  {scenario.sublabel(ko)}
                </div>
              </div>
            </div>

            {/* Stacked bar visual */}
            <div className="mb-3">
              <div className="flex h-8 rounded-lg overflow-hidden gap-px bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="bg-blue-400 dark:bg-blue-500 flex items-center justify-center shrink-0"
                  style={{ width: `${scenario.bondValue}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${scenario.bondValue}%` }}
                  viewport={VP}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 + 0.2 }}
                >
                  {scenario.bondValue > 20 && (
                    <span className="text-[9px] font-bold text-white truncate px-1">
                      {ko ? "채권" : "Bond"}
                    </span>
                  )}
                </motion.div>
                <motion.div
                  className={`${scenario.color} flex items-center justify-center shrink-0`}
                  style={{ width: `${scenario.equityValue}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${scenario.equityValue}%` }}
                  viewport={VP}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 + 0.3 }}
                >
                  {scenario.equityValue > 20 && (
                    <span className="text-[9px] font-bold text-white truncate px-1">
                      {ko ? "주식" : "Equity"}
                    </span>
                  )}
                </motion.div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                <span>{ko ? "채권" : "Bond"}: {scenario.bondValue}%</span>
                <span>{ko ? "옵션" : "Option"}: {scenario.equityValue}%</span>
              </div>
            </div>

            {/* Delta badge */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ background: accent }}
              >
                {scenario.delta}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                {scenario.deltaDesc(ko)}
              </span>
            </div>

            <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko ? scenario.ko : scenario.en}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Conceptual CB value curve */}
      <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-gray-50 dark:bg-gray-800/50">
        <div className="text-[12px] font-bold text-gray-600 dark:text-gray-300 mb-4">
          {ko ? "CB 가치 곡선 (개념도)" : "CB Value Curve (Conceptual)"}
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[9px] text-gray-400 dark:text-gray-500 w-8">
            <span>{ko ? "고" : "High"}</span>
            <span>{ko ? "CB" : "CB"}</span>
            <span>{ko ? "저" : "Low"}</span>
          </div>
          <div className="ml-10 h-40 relative">
            <svg viewBox="0 0 440 130" className="w-full h-full" preserveAspectRatio="none">
              {[25, 50, 75, 100].map((y) => (
                <line key={y} x1="0" y1={y} x2="440" y2={y} stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
              ))}
              {/* Bond floor */}
              <line x1="0" y1="95" x2="440" y2="95" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="6,4" />
              {/* Equity parity line */}
              <motion.path
                d="M 210,95 L 440,10"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeDasharray="5,4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={VP}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              />
              {/* CB value curve */}
              <motion.path
                d="M 0,95 C 60,95 140,94 200,88 C 240,83 270,60 310,38 C 350,18 400,10 440,8"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={VP}
                transition={{ duration: 1.3, ease: EASE }}
              />
              {/* Conversion price vertical */}
              <line x1="210" y1="5" x2="210" y2="120" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
              {/* Labels */}
              <text x="30" y="115" fontSize="8" fill="#60a5fa" fontWeight="600">{ko ? "채권 영역" : "Bond zone"}</text>
              <text x="300" y="115" fontSize="8" fill="#0d9488" fontWeight="600">{ko ? "주식 영역" : "Equity zone"}</text>
              <text x="215" y="16" fontSize="8" fill="#f59e0b" fontWeight="700">{ko ? "전환가격" : "Conv. Price"}</text>
              <text x="360" y="22" fontSize="9" fill="#0d9488" fontWeight="700">CB</text>
              <text x="340" y="100" fontSize="8" fill="#9ca3af">{ko ? "일반채권" : "Straight bond"}</text>
              <text x="280" y="62" fontSize="8" fill="#d1d5db">{ko ? "주가동등선" : "Parity"}</text>
            </svg>
          </div>
          <div className="ml-10 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 mt-1">
            <span>{ko ? "주가 낮음" : "Low share price"}</span>
            <span>→ {ko ? "주가" : "Share price"}</span>
            <span>{ko ? "주가 높음" : "High share price"}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-0.5 rounded" style={{ background: accent }} />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "CB 가치" : "CB value"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="20" height="4" className="overflow-visible"><line x1="0" y1="2" x2="20" y2="2" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4,3" /></svg>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "채권 하한 (Bond Floor)" : "Bond floor"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="20" height="4" className="overflow-visible"><line x1="0" y1="2" x2="20" y2="2" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" /></svg>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "전환가격" : "Conversion price"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="20" height="4" className="overflow-visible"><line x1="0" y1="2" x2="20" y2="2" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,3" /></svg>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "주가동등선 (Parity)" : "Parity line"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Investor Type Cards ───────────────────────────────────────────────────────
function InvestorTypeCards({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      {INVESTOR_TYPES.map((inv, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className={`rounded-2xl border ${inv.color} overflow-hidden shadow-sm`}
        >
          <div className={`${inv.headerColor} px-5 py-4`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{inv.icon}</span>
              <div>
                <div className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${inv.badgeColor}`}>
                  {inv.strategy(ko)}
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{inv.name(ko)}</h4>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 bg-white dark:bg-gray-900">
            <p className="text-[13px] text-gray-700 dark:text-gray-200 leading-relaxed">
              {ko ? inv.ko : inv.en}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Case Studies Component ────────────────────────────────────────────────────
function CbCaseStudies({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="space-y-6"
    >
      {CASE_STUDIES.map((cs, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.08)}
          className={`rounded-2xl border ${cs.color} overflow-hidden shadow-sm`}
        >
          <div className={`${cs.headerBg} px-6 py-4 flex items-center justify-between flex-wrap gap-2`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cs.emoji}</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                  {cs.company(ko)}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">{cs.year}</span>
              </div>
            </div>
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${cs.badgeColor}`}>
              {cs.result(ko)}
            </span>
          </div>

          <div className="px-6 py-4 bg-white dark:bg-gray-900">
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {cs.tagline(ko)}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {cs.facts.map((f, j) => (
                <div key={j} className="bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2.5">
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">
                    {f.label(ko)}
                  </div>
                  <div className="text-[12px] font-bold text-gray-800 dark:text-gray-200">
                    {f.value(ko)}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-1">
                📚 {ko ? "교훈" : "Key Takeaway"}
              </div>
              <p className="text-[13px] text-gray-700 dark:text-gray-200 leading-relaxed">
                {cs.lesson(ko)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Related Terms ─────────────────────────────────────────────────────────────
function RelatedTerms({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  const related = [
    { slug: "ecm-followon",      label: (ko: boolean) => ko ? "Ch.7 팔로우온"    : "Ch.7 Follow-on" },
    { slug: "ecm-overview",      label: (ko: boolean) => ko ? "ECM 개요"          : "ECM Overview"   },
    { slug: "ecm-ipo-valuation", label: (ko: boolean) => ko ? "Ch.3 밸류에이션"  : "Ch.3 Valuation"  },
  ];
  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5"
    >
      <div className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
        {ko ? "관련 챕터" : "Related Chapters"}
      </div>
      <div className="flex flex-wrap gap-2">
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`${base}/${r.slug}`}
            className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
          >
            {r.label(ko)}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// ── Props Interface ────────────────────────────────────────────────────────────
interface Props {
  concept: MarketConcept;
  lang: Lang;
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmConvertibleClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";

  const prevCh = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const nextCh = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  // concept is available for downstream SEO / metadata use
  void concept;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: ko
      ? "전환사채(CB) 완전 해부: 구조, 페이오프, 케이스 스터디"
      : "Convertible Bonds Decoded: Structure, Payoff, and Case Studies",
    description: ko
      ? "전환사채의 구조·메커니즘, 주가 시나리오별 페이오프 다이어그램, 델타 헤징, 투자자 유형, Airbnb·MicroStrategy·한국 사례 분석."
      : "Convertible bond structure and mechanics, payoff diagram by share price scenario, delta hedging, investor types, and Airbnb/MicroStrategy/Korean market case studies.",
    author: { "@type": "Organization", name: "Deal Story" },
    publisher: { "@type": "Organization", name: "Deal Story" },
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question(ko),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer(ko),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SeriesNav lang={lang} activeCh={thisCh} />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 pt-14 pb-10">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-4">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: accent }}
              >
                {ko ? "ECM Ch.8 — 전환사채" : "ECM Ch.8 — Convertible Bonds"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-4"
            >
              {ko
                ? "전환사채(CB) 완전 해부"
                : "Convertible Bonds: A Complete Dissection"}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mb-6"
            >
              {ko
                ? "채권의 하방 보호와 주식의 상방 참여를 동시에 제공하는 하이브리드 증권 — 구조, 페이오프 메커니즘, 델타 헤징, 그리고 Airbnb의 교과서 사례부터 한국 지배구조 논란까지."
                : "The hybrid security offering bond downside protection and equity upside simultaneously — structure, payoff mechanics, delta hedging, from Airbnb's textbook case to Korean governance controversies."}
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-2 mb-8">
              {(ko
                ? ["전환가격", "전환프리미엄", "페이오프", "델타 헤징", "CB 전문 펀드", "Refixing", "하이브리드 증권"]
                : ["Conversion Price", "Conversion Premium", "Payoff", "Delta Hedging", "CB Funds", "Refixing", "Hybrid Security"]
              ).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.2)}>
              <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
            </motion.div>
          </motion.div>
        </section>

        {/* Section 1: What Is a CB */}
        <section id="what-is-cb" className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {CHAPTERS[0].title(ko)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "전환사채(Convertible Bond, CB)는 채권과 주식의 특성을 동시에 가진 하이브리드 증권이다. 보유자는 만기까지 이자를 받다가 주가가 오르면 주식으로 전환할 수 있는 옵션을 갖는다."
                : "A convertible bond (CB) is a hybrid security combining the characteristics of both debt and equity. The holder receives interest payments until maturity and holds the option to convert into shares when the stock price rises."}
            </p>
          </motion.div>
          <HybridBanner lang={lang} />
        </section>

        {/* Section 2: Structure & Mechanics */}
        <section id="structure" className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {CHAPTERS[1].title(ko)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "CB를 이해하려면 5가지 핵심 용어를 먼저 파악해야 한다. 전환가격과 전환비율이 CB 수익 구조의 기반이고, 쿠폰과 만기가 채권 측면을 결정한다."
                : "Understanding a CB starts with five key terms. Conversion price and conversion ratio form the foundation of the CB return structure, while coupon and maturity define the bond dimension."}
            </p>
          </motion.div>
          <CbStructureCards lang={lang} />

          {/* CB vs Straight Bond comparison */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mt-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 overflow-x-auto"
          >
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-4">
              {ko ? "전환사채 vs 일반채권 비교" : "Convertible Bond vs Straight Bond"}
            </h3>
            <table className="w-full text-[12px] border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left px-3 py-2 text-gray-500 dark:text-gray-400 font-semibold">{ko ? "구분" : "Feature"}</th>
                  <th className="text-center px-3 py-2 font-bold" style={{ color: accent }}>{ko ? "전환사채 (CB)" : "Convertible Bond"}</th>
                  <th className="text-center px-3 py-2 text-gray-500 dark:text-gray-400 font-semibold">{ko ? "일반채권" : "Straight Bond"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: (ko: boolean) => ko ? "쿠폰" : "Coupon",
                    cb: (ko: boolean) => ko ? "0–2% (낮음)" : "0–2% (low)",
                    straight: (ko: boolean) => ko ? "시장금리 수준" : "Market rate",
                  },
                  {
                    feature: (ko: boolean) => ko ? "원금 보호" : "Principal protection",
                    cb: (ko: boolean) => ko ? "있음 (전환 안 하면)" : "Yes (if not converted)",
                    straight: (ko: boolean) => ko ? "있음" : "Yes",
                  },
                  {
                    feature: (ko: boolean) => ko ? "주식 상방 참여" : "Equity upside",
                    cb: (ko: boolean) => ko ? "있음 (전환 옵션)" : "Yes (conversion option)",
                    straight: (ko: boolean) => ko ? "없음" : "None",
                  },
                  {
                    feature: (ko: boolean) => ko ? "발행사 희석 위험" : "Dilution risk",
                    cb: (ko: boolean) => ko ? "있음 (전환 시)" : "Yes (upon conversion)",
                    straight: (ko: boolean) => ko ? "없음" : "None",
                  },
                  {
                    feature: (ko: boolean) => ko ? "복잡성" : "Complexity",
                    cb: (ko: boolean) => ko ? "높음 (옵션 내재)" : "High (embedded option)",
                    straight: (ko: boolean) => ko ? "낮음" : "Low",
                  },
                ].map((row, ri) => (
                  <tr key={ri} className="border-b border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-colors">
                    <td className="px-3 py-2.5 font-medium text-gray-700 dark:text-gray-200">{row.feature(ko)}</td>
                    <td className="text-center px-3 py-2.5 font-semibold" style={{ color: accent }}>{row.cb(ko)}</td>
                    <td className="text-center px-3 py-2.5 text-gray-500 dark:text-gray-400">{row.straight(ko)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Section 3: Payoff Diagram */}
        <section id="payoff" className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {CHAPTERS[2].title(ko)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "CB의 페이오프는 주가 수준에 따라 채권처럼 또는 주식처럼 행동하는 비선형 구조다. 델타(Δ)가 이 전환을 수치로 표현한다."
                : "The CB payoff is a non-linear structure that behaves either like a bond or like equity depending on the share price level. Delta (Δ) quantifies this transition."}
            </p>
          </motion.div>
          <PayoffDiagram lang={lang} />
        </section>

        {/* Section 4: Investor Types */}
        <section id="investors" className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {CHAPTERS[3].title(ko)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "CB는 단일한 투자자층이 아니라 전략이 다른 세 유형의 투자자가 각기 다른 목적으로 참여한다."
                : "CBs attract not a single investor base but three distinct investor types, each with different strategies and objectives."}
            </p>
          </motion.div>
          <InvestorTypeCards lang={lang} />
        </section>

        {/* Section 5: Case Studies */}
        <section id="case-studies" className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {CHAPTERS[4].title(ko)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "실제 CB 발행 사례를 통해 이 상품이 위기 구제, 자산 레버리지, 그리고 지배구조 악용까지 얼마나 다양한 맥락에서 사용되는지 살펴본다."
                : "Real CB issuances illustrate how this instrument is used across vastly different contexts — from crisis rescue to asset leverage to governance abuse."}
            </p>
          </motion.div>
          <CbCaseStudies lang={lang} />
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "자주 묻는 질문" : "FAQ"}
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <FaqAccordion
              items={FAQS.map((faq) => ({
                q: faq.question(ko),
                a: faq.answer(ko),
              }))}
            />
          </motion.div>
        </section>

        {/* Related Chapters */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <RelatedTerms lang={lang} />
        </section>

        {/* Bottom Navigation */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <div className="flex items-center justify-between gap-4">
              {prevCh ? (
                <Link
                  href={`${base}/${prevCh.slug}`}
                  className="group flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 transition-colors"
                >
                  <span className="text-gray-400 group-hover:text-teal-500 transition-colors">←</span>
                  <div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "이전 챕터" : "Previous"}</div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {prevCh.title(ko)}
                    </div>
                  </div>
                </Link>
              ) : <div className="flex-1" />}

              {nextCh ? (
                <Link
                  href={`${base}/${nextCh.slug}`}
                  className="group flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 transition-colors text-right justify-end"
                >
                  <div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "다음 챕터" : "Next"}</div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {nextCh.title(ko)}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-teal-500 transition-colors">→</span>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
