/**
 * Fund 시리즈 Ch.3 — Fund 종류와 구조
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: 8 전략 매트릭스 · 구조별 비교 표 · 한국 unique 구조 · 전략별 대표 firm 카탈로그
 *  - 모든 데이터 상수 KO/EN 분리
 *  - 한국 PEF·신기술조합·모태펀드 inline
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FUND_CHAPTERS, getFundChapterBySlug, getFundSeriesNav } from "@/data/fund-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fund-ch03-fund-types";
const ACCENT = "#f59e0b";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const PURPLE = "#a855f7";
const TEAL = "#0891b2";

// 8가지 전략 (Risk × Return × Liquidity)
const STRATEGIES = [
  {
    koName: "Mega-cap Buyout",
    enName: "Mega-cap Buyout",
    koDesc: "$10B+ deal, 안정 cash flow 회사 인수 + LBO",
    enDesc: "$10B+ deals, stable cash-flow targets, LBO structure",
    risk: 3,
    expectedRet: "15-20%",
    liquidity: 1,
    horizon: 10,
    color: ACCENT,
  },
  {
    koName: "Mid-market Buyout",
    enName: "Mid-market Buyout",
    koDesc: "$500M-$5B deal, 성장 여지 + operational improvement",
    enDesc: "$500M-$5B, growth + operational improvement",
    risk: 4,
    expectedRet: "18-25%",
    liquidity: 1,
    horizon: 7,
    color: ACCENT,
  },
  {
    koName: "Growth Equity",
    enName: "Growth Equity",
    koDesc: "흑자 성장기업 minority 투자. Series C-E 그 뒤.",
    enDesc: "Minority in profitable growth co's; post-Series C-E",
    risk: 5,
    expectedRet: "20-30%",
    liquidity: 1,
    horizon: 6,
    color: GREEN,
  },
  {
    koName: "Venture Capital",
    enName: "Venture Capital",
    koDesc: "Early-stage startup. Power law — 1개 winner가 fund 전체 caries. Sequoia가 1978년 Apple $150K 투자해서 fund 7배 회수.",
    enDesc: "Early-stage startups. Power-law: one winner carries the whole fund. Sequoia's $150K Apple bet in 1978 returned 7× the fund.",
    risk: 8,
    expectedRet: "25%+ (top quartile)",
    liquidity: 1,
    horizon: 8,
    color: BLUE,
  },
  {
    koName: "Mezzanine",
    enName: "Mezzanine",
    koDesc: "Senior debt와 equity 사이. PIK + warrant kicker.",
    enDesc: "Between senior debt and equity. PIK + warrant kickers.",
    risk: 3,
    expectedRet: "12-18%",
    liquidity: 2,
    horizon: 5,
    color: TEAL,
  },
  {
    koName: "Distressed / Special Sit.",
    enName: "Distressed / Special Sit.",
    koDesc: "구조조정·파산·Chapter 11 채권 매입 후 회생.",
    enDesc: "Restructuring, bankruptcies, Chapter 11 debt-for-control",
    risk: 6,
    expectedRet: "20-30%",
    liquidity: 2,
    horizon: 5,
    color: RED,
  },
  {
    koName: "Private Credit",
    enName: "Private Credit",
    koDesc: "Direct lending. Mid-market 회사에 senior secured.",
    enDesc: "Direct lending — senior secured to mid-market companies",
    risk: 2,
    expectedRet: "8-12%",
    liquidity: 3,
    horizon: 4,
    color: PURPLE,
  },
  {
    koName: "Real Estate / Infra",
    enName: "Real Estate / Infra",
    koDesc: "Core / Core+ / Value-add / Opportunistic spectrum",
    enDesc: "Core / Core+ / Value-add / Opportunistic spectrum",
    risk: 3,
    expectedRet: "7-15%",
    liquidity: 2,
    horizon: 7,
    color: "#475569",
  },
];

// 구조별 비교
const STRUCTURE_COMPARE = [
  {
    koItem: "Fund Term",
    enItem: "Fund Term",
    closed: "10년 + 1-2년 ext.",
    enClosed: "10 years + 1-2 yr ext.",
    open: "Perpetual",
    enOpen: "Perpetual",
    evergreen: "Perpetual",
    enEvergreen: "Perpetual",
  },
  {
    koItem: "LP 유동성",
    enItem: "LP liquidity",
    closed: "10년 lock-up · secondary 시장만",
    enClosed: "10-year lock-up · secondary market only",
    open: "분기 redemption (gate 가능)",
    enOpen: "Quarterly redemption (gates possible)",
    evergreen: "주기적 subscription · redemption",
    enEvergreen: "Periodic subscription/redemption",
  },
  {
    koItem: "Vintage 개념",
    enItem: "Vintage concept",
    closed: "있음 (vintage year 단일)",
    enClosed: "Yes (single vintage)",
    open: "없음 (continuous)",
    enOpen: "No (continuous)",
    evergreen: "없음",
    enEvergreen: "No",
  },
  {
    koItem: "주요 전략",
    enItem: "Typical strategy",
    closed: "PE Buyout · VC · Distressed",
    enClosed: "PE Buyout, VC, distressed",
    open: "Hedge fund · 일부 private credit",
    enOpen: "Hedge funds, some private credit",
    evergreen: "Real estate · Infra · Private credit",
    enEvergreen: "Real estate, infra, private credit",
  },
  {
    koItem: "NAV 계산",
    enItem: "NAV calc",
    closed: "분기 mark-to-model",
    enClosed: "Quarterly mark-to-model",
    open: "월 또는 주 mark-to-market",
    enOpen: "Monthly or weekly mark-to-market",
    evergreen: "월 또는 분기",
    enEvergreen: "Monthly or quarterly",
  },
  {
    koItem: "대표 사례",
    enItem: "Examples",
    closed: "KKR Fund XII, Sequoia Capital Fund",
    enClosed: "KKR Fund XII, Sequoia Capital Fund",
    open: "Bridgewater Pure Alpha, Citadel",
    enOpen: "Bridgewater Pure Alpha, Citadel",
    evergreen: "Blackstone BREIT, KKR KFN",
    enEvergreen: "Blackstone BREIT, KKR KFN",
  },
];

// 한국 unique 구조 다이어그램
const KOREA_STRUCTURES = [
  {
    koName: "PEF (경영참여형 사모집합투자기구)",
    enName: "PEF (Korea PE Fund)",
    koLegal: "자본시장법 — 사모투자전문회사",
    enLegal: "Capital Markets Act · GP-LP structure",
    koDesc: "한국형 PE 펀드. GP (업무집행사원) + LP (유한책임사원).",
    enDesc: "Korean-form PE fund. GP + LP partnership.",
    koExamples: "MBK Partners 5호 · IMM Rose Gold V · Hahn & Co IV",
    enExamples: "MBK Partners V · IMM Rose Gold V · Hahn & Co IV",
    color: ACCENT,
  },
  {
    koName: "신기술사업투자조합",
    enName: "New Technology Venture Vehicle",
    koLegal: "벤처투자촉진법 — VC 전용 구조",
    enLegal: "Venture Investment Promotion Act · VC-only",
    koDesc: "VC 전용. 신기술사업금융업자 (벤처캐피탈) 가 GP.",
    enDesc: "VC-only structure. Licensed VC firm acts as GP.",
    koExamples: "한국투자파트너스 · 알토스벤처스 · 카카오벤처스",
    enExamples: "Korea Investment Partners · Altos · Kakao Ventures",
    color: BLUE,
  },
  {
    koName: "모태펀드 (한국벤처투자)",
    enName: "Korea Fund-of-Funds (KVIC)",
    koLegal: "벤처투자촉진법 · 정부 출자",
    enLegal: "Government-backed fund-of-funds",
    koDesc: "정부 출자 모펀드가 자펀드에 출자. 한국 VC 시장의 가장 큰 LP.",
    enDesc: "Government parent fund commits into sub-funds. Korea VC's biggest LP.",
    koExamples: "$5B+ AUM. 200+ 자펀드에 출자.",
    enExamples: "$5B+ AUM. Backs 200+ sub-funds.",
    color: GREEN,
  },
  {
    koName: "산업은행 · 성장사다리펀드",
    enName: "KDB · Growth Ladder Fund",
    koLegal: "산업은행 정책자금",
    enLegal: "KDB policy capital",
    koDesc: "정책 목적 자금. 중견기업 성장·M&A·구조조정 지원.",
    enDesc: "Policy capital. Supports mid-cap growth, M&A, restructuring.",
    koExamples: "성장사다리펀드 $4B+. 산업은행 직접 PEF.",
    enExamples: "Growth Ladder Fund $4B+, KDB-led PEFs.",
    color: PURPLE,
  },
];

// 전략별 대표 firm 카탈로그
const REPRESENTATIVE_FIRMS = [
  {
    koCategory: "Mega-cap PE Buyout",
    enCategory: "Mega-cap PE Buyout",
    color: ACCENT,
    firms: [
      "Blackstone", "KKR", "Apollo", "Carlyle", "Bain Capital",
      "Advent", "CVC", "TPG", "EQT", "Ares",
    ],
  },
  {
    koCategory: "한국 PE (Mid-cap)",
    enCategory: "Korea PE (mid-cap)",
    color: ACCENT,
    firms: [
      "MBK Partners", "IMM Private Equity", "Hahn & Co.",
      "STIC Investments", "UCK Partners", "VIG Partners",
      "Glenwood PE", "Centroid Investment", "한앤컴퍼니",
    ],
  },
  {
    koCategory: "Growth Equity",
    enCategory: "Growth Equity",
    color: GREEN,
    firms: [
      "General Atlantic", "TPG Growth", "Insight Partners",
      "Summit Partners", "TA Associates", "Warburg Pincus",
    ],
  },
  {
    koCategory: "Venture Capital (Global)",
    enCategory: "Venture Capital (Global)",
    color: BLUE,
    firms: [
      "Sequoia Capital", "Andreessen Horowitz (a16z)", "Benchmark",
      "Accel", "Founders Fund", "Greylock", "Lightspeed", "Index",
    ],
  },
  {
    koCategory: "한국 VC",
    enCategory: "Korea VC",
    color: BLUE,
    firms: [
      "한국투자파트너스", "알토스벤처스", "카카오벤처스",
      "소프트뱅크벤처스아시아", "Naver D2SF",
      "Atinum Investment", "Mirae Asset Venture",
    ],
  },
  {
    koCategory: "Private Credit · Direct Lending",
    enCategory: "Private Credit · Direct Lending",
    color: PURPLE,
    firms: [
      "Ares Credit", "Owl Rock (Blue Owl)", "Golub Capital",
      "KKR Credit", "Apollo Credit", "Sixth Street",
    ],
  },
  {
    koCategory: "Distressed / Special Situations",
    enCategory: "Distressed / Special Sit.",
    color: RED,
    firms: [
      "Oaktree", "Centerbridge", "Cerberus",
      "Anchorage", "Strategic Value Partners", "Elliott",
    ],
  },
];

// 미국 VC firm 대표 portfolio — Power-law winner 사례
const US_VC_PORTFOLIO = [
  {
    firm: "Sequoia Capital",
    founded: 1972,
    koWinners: "Apple ($150K, 1978, 7x fund) · Google (1999) · WhatsApp (1B return) · Stripe · Airbnb · Nvidia · YouTube",
    enWinners: "Apple ($150K, 1978, 7× fund) · Google (1999) · WhatsApp ($1B return) · Stripe · Airbnb · Nvidia · YouTube",
    koNote: "VC 역사상 가장 successful firm. Sand Hill Road의 \"왕\".",
    enNote: "The most successful VC firm in history. The king of Sand Hill Road.",
  },
  {
    firm: "Benchmark",
    founded: 1995,
    koWinners: "eBay (1997, 1,500x return) · Uber (Series A, \$9M → \$5B+) · Twitter · Instagram · Snap · Discord",
    enWinners: "eBay (1997, 1,500× return) · Uber (Series A, $9M → $5B+) · Twitter · Instagram · Snap · Discord",
    koNote: "Equal partnership (모든 partner 동일 carry). Fund size 작게 유지.",
    enNote: "Equal partnership (every partner = same carry). Keeps fund size small.",
  },
  {
    firm: "Andreessen Horowitz (a16z)",
    founded: 2009,
    koWinners: "Facebook (Series D) · Airbnb · Coinbase · GitHub · Slack · Lyft · Stripe · OpenAI (2023)",
    enWinners: "Facebook (Series D) · Airbnb · Coinbase · GitHub · Slack · Lyft · Stripe · OpenAI (2023)",
    koNote: "Modern VC의 표준 - founder-led + portfolio support 팀 대규모.",
    enNote: "Modern VC blueprint — founder-led + heavy portfolio support team.",
  },
  {
    firm: "Accel",
    founded: 1983,
    koWinners: "Facebook (\$12.7M Series A 2005, \$7B 회수) · Slack · Atlassian · Spotify · UiPath · Dropbox",
    enWinners: "Facebook ($12.7M Series A 2005, $7B return) · Slack · Atlassian · Spotify · UiPath · Dropbox",
    koNote: "Series A 전문. Facebook deal이 VC 역사상 single best Series A.",
    enNote: "Series A specialist. The Facebook deal is the best single Series A in VC history.",
  },
  {
    firm: "Founders Fund",
    founded: 2005,
    koWinners: "SpaceX · Stripe · Palantir · Anduril · Airbnb · Lyft · Spotify",
    enWinners: "SpaceX · Stripe · Palantir · Anduril · Airbnb · Lyft · Spotify",
    koNote: "Peter Thiel founded. \"Contrarian thinking\" 강조. Deep tech 비중 큼.",
    enNote: "Founded by Peter Thiel. 'Contrarian thinking' ethos. Heavy in deep tech.",
  },
  {
    firm: "Greylock",
    founded: 1965,
    koWinners: "LinkedIn (Series A 2004) · Facebook (Series B) · Airbnb · Workday · Dropbox · Discord",
    enWinners: "LinkedIn (Series A 2004) · Facebook (Series B) · Airbnb · Workday · Dropbox · Discord",
    koNote: "가장 오래된 VC 중 하나. Reid Hoffman partner.",
    enNote: "One of the oldest VCs. Reid Hoffman is a partner.",
  },
];

const liquidityLabel = (l: number, ko: boolean) => {
  if (l === 1) return ko ? "10년 lock-up" : "10-year lock-up";
  if (l === 2) return ko ? "5-7년" : "5-7 years";
  if (l === 3) return ko ? "분기 redemption" : "Quarterly redemption";
  return "—";
};

export default function MaFund03Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFundChapterBySlug(SLUG)!;
  const { prev, next } = getFundSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/learn" : "/en/learn"} className="hover:text-gray-600 dark:hover:text-gray-300">Learn</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.3" : "Fund Series · Ch.3"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Fund 시리즈" : "Fund Series"}</span>
            <span>·</span>
            <span>Ch.{chapter.ch}</span>
            <span>·</span>
            <span>{chapter.readingMinutes}{ko ? "분 읽기" : " min"}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                {ko ? chapter.titleKo : chapter.titleEn}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? chapter.taglineKo : chapter.taglineEn}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="top" lang={lang} />
            </div>
          </div>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-12">
          <div className="flex gap-1.5 flex-wrap">
            {FUND_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 pb-16 prose-base">

          {/* § 1 — 전략별 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "전략별 Fund — 8가지 standard archetype" : "Strategy archetypes — eight standard buckets"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "\"Private fund\" 라고 통칭하지만 실제로는 전략별로 8가지 archetype으로 나뉘어요. 각 전략마다 deal size, target return, holding period, risk profile이 다 다르고, GP의 organizational design 자체가 바뀝니다. Mega-cap PE GP는 부서를 deal sourcing · operating · DD · capital markets로 나누는데, VC GP는 partner 5-10명이 전 deal을 사실상 다 같이 봐요."
                : "We say 'private fund' but the field splits into eight archetypes by strategy. Deal size, target return, holding period, risk profile — all differ. The GP's organizational design changes too. Mega-cap PE structures by function — sourcing, operating, DD, capital markets. VC partnerships have 5-10 partners who basically see every deal together."}</p>
              <p>{ko
                ? "LP 시점에서는 \"PE 비중 13%\" 같은 큰 그림 후에, 그 13%를 다시 어떤 전략에 얼마 배분하느냐가 다음 작업이에요. Top-down 으로 보면 Buyout 50% / VC 15% / Credit 20% / Real Asset 15% 같은 sub-allocation을 짭니다. NPS도 PE allocation 안에서 Buyout · VC · Growth · Credit 으로 다시 나눠요."
                : "From the LP side, after the headline 'PE allocation 13%,' the next move is splitting that 13% across strategies. Top-down might look like Buyout 50% / VC 15% / Credit 20% / Real Assets 15%. NPS also sub-allocates its PE bucket across Buyout, VC, Growth, and Credit."}</p>
              <p>{ko
                ? "각 전략의 risk-return profile을 매핑하면 자연스럽게 portfolio construction이 보여요. Mega-cap Buyout은 risk 중간 / return 15-20% / 안정. VC는 risk 가장 높음 / return power-law (top quartile 25%+, bottom quartile 마이너스). Private Credit은 risk 낮음 / return 8-12% / 분기 redemption 가능."
                : "Mapping each strategy on a risk-return canvas makes portfolio construction natural. Mega-cap Buyout: mid risk, 15-20% returns, stable. VC: highest risk, power-law (top quartile 25%+, bottom quartile negative). Private Credit: low risk, 8-12% returns, quarterly redemption available."}</p>
            </div>

            {/* 8 strategies catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "8가지 전략 — Risk · Return · Liquidity" : "Eight strategies — risk · return · liquidity"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Risk score: 1 (lowest) ~ 10 (highest). LP는 portfolio에서 이 8개를 sub-allocation으로 배분." : "Risk score: 1 (lowest) to 10 (highest). LPs sub-allocate across these eight."}
              </p>
              <div className="space-y-3">
                {STRATEGIES.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: s.color + "60", background: s.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[13px] font-bold" style={{ color: s.color }}>{ko ? s.koName : s.enName}</span>
                      <div className="flex gap-1.5 flex-shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Risk {s.risk}/10</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: s.color + "26", color: s.color }}>{s.expectedRet}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{liquidityLabel(s.liquidity, ko)}</span>
                      </div>
                    </div>
                    <p className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? s.koDesc : s.enDesc}</p>
                    {/* Risk bar */}
                    <div className="mt-2 h-1.5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={VP}
                        transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                        className="h-full rounded"
                        style={{ width: `${s.risk * 10}%`, background: s.color, transformOrigin: "left" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 구조별 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "구조별 — Closed-end · Open-end · Evergreen" : "By structure — closed-end, open-end, evergreen"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "전략과 별개로, fund의 \"구조\" 자체에도 세 가지가 있어요. PE 표준인 Closed-end (10년 vintage + lock-up), hedge fund에서 많이 쓰는 Open-end (분기 redemption 가능), 그리고 최근 PE 영역에서 빠르게 늘고 있는 Evergreen / Continuation fund."
                : "Separate from strategy, fund structure itself has three forms. PE's standard Closed-end (10-year vintage + lock-up), hedge funds' Open-end (quarterly redemption), and PE's fast-growing Evergreen / continuation funds."}</p>
              <p>{ko
                ? "Closed-end가 PE에서 표준이 된 이유는 deal nature와 잘 맞아서예요. PE deal은 한 번 closing하면 5-7년 hold 해야 IRR이 나오는데, LP가 중간에 redemption 요청하면 GP가 deal 운영 자체를 못해요. 그래서 \"10년 lock-up\" 이 자연스러운 구조였고, 이걸 지키지 못하면 GP의 deal-making quality가 떨어집니다."
                : "Closed-end became the PE standard because it matches deal nature. PE deals need 5-7 years post-closing to deliver IRR; mid-stream redemption requests break the GP's ability to operate. The 10-year lock-up came naturally — without it, GP deal-making quality drops."}</p>
              <p>{ko
                ? "그런데 최근에는 흥미로운 trend가 있어요. Real estate, private credit, infrastructure 같은 \"yield generating\" 자산은 매분기 cash flow가 나오니까 굳이 vintage·lock-up이 필요 없어요. 그래서 Evergreen fund 가 늘어나고, retail (개인 자산가) 접근까지 가능해지면서 Blackstone BREIT 같은 \"semi-liquid\" 상품이 $100B 규모로 성장했어요."
                : "Recent trend: yield-generating assets — real estate, private credit, infrastructure — produce quarterly cash flow without vintage/lock-up logic. Evergreen funds expanded. Combined with retail access, semi-liquid products like Blackstone BREIT reached $100B+."}</p>
            </div>

            {/* Structure comparison table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Closed-end vs Open-end vs Evergreen" : "Closed-end vs open-end vs evergreen"}
              </p>
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[18%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold" style={{ color: ACCENT }}>{ko ? "Closed-end (PE)" : "Closed-end (PE)"}</th>
                    <th className="text-left py-2 pr-3 font-semibold" style={{ color: BLUE }}>{ko ? "Open-end (HF)" : "Open-end (HF)"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: GREEN }}>{ko ? "Evergreen" : "Evergreen"}</th>
                  </tr>
                </thead>
                <tbody>
                  {STRUCTURE_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2.5 pr-3 text-gray-500 dark:text-gray-400 align-top text-[10.5px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2.5 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.closed : c.enClosed}</td>
                      <td className="py-2.5 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.open : c.enOpen}</td>
                      <td className="py-2.5 text-gray-700 dark:text-gray-300 align-top">{ko ? c.evergreen : c.enEvergreen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 공모 vs 사모 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "공모 vs 사모 — Retail 자본을 PE에 어떻게 끌어오나" : "Public vs private — bringing retail capital into PE"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "전통적으로 PE는 \"qualified investor (적격 투자자)\" 만 접근 가능했어요. 미국 기준 net worth $5M+ 같은 기준. 그런데 최근 10년 사이 retail 자본을 PE에 흘려보내는 새 구조가 여럿 등장했어요. PE 입장에서는 \"한국 NPS + 미국 endowment\" 같은 institutional LP 풀이 한계에 도달했기 때문이고요."
                : "PE was traditionally for qualified investors only — US net worth $5M+ thresholds. The last decade introduced structures channeling retail capital into PE — driven by the institutional LP pool (NPS + endowments + SWFs) approaching capacity."}</p>
              <p>{ko
                ? "가장 큰 게 BDC (Business Development Company). 미국 1980년 법으로 만들어진 구조인데, listed company처럼 NYSE 에서 거래되면서 동시에 mid-market 회사에 lending 하는 fund. Owl Rock (Blue Owl), Ares, Apollo BDC 등이 대형. 시총 $200B+ 규모. 개인이 NYSE에서 주식으로 살 수 있는 \"public PE access\" 구조."
                : "The biggest is the BDC (Business Development Company). Created by 1980 US law, listed on NYSE, lends to mid-market companies. Owl Rock (Blue Owl), Ares, Apollo BDC dominate. Combined market cap $200B+. Public PE access via NYSE shares."}</p>
              <p>{ko
                ? "Listed PE도 있어요. Blackstone (NYSE: BX), KKR (NYSE: KKR), Apollo (NYSE: APO) 같은 PE firm 자체가 상장된 형태. \"GP shares\" 를 사는 거고, 이 회사들이 받는 management fee와 carry의 일부를 dividend로 받는 구조예요. PE GP 회사에 retail 자본을 흘려보내는 방식이고, BDC와 다른 점은 underlying portfolio가 아니라 GP 자체에 투자한다는 점."
                : "Listed PE: Blackstone (BX), KKR (KKR), Apollo (APO) — the PE firms themselves trade. You buy 'GP shares' and receive a portion of their management fees and carry as dividends. Retail flows to the GP itself (not underlying portfolios — that's the BDC's job)."}</p>
              <p>{ko
                ? "그리고 Interval fund — Open-end의 변형으로 분기에 한 번 limited redemption (보통 NAV의 5-25%) 가능한 구조. 그리고 retail에 직접 sales 가능한 PE feeder fund (private bank 채널) 등 새 형태가 계속 나오고 있어요. \"Democratization of PE\" 가 PE industry의 가장 큰 trend 중 하나입니다."
                : "Interval funds — open-end variants offering limited quarterly redemption (5-25% of NAV). Plus retail-distributable PE feeder funds (private bank channels). 'PE democratization' is one of the industry's biggest trends."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — 한국 unique 구조 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한국의 unique 구조 — PEF · 신기술조합 · 모태펀드" : "Korea's distinctive structures — PEF, NTV vehicles, KVIC"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "한국 사모펀드 시장은 글로벌 PE 표준 (LPA · committed capital · 10년 closed) 을 거의 그대로 따르지만, 법적 형태와 운용 주체에 한국만의 unique한 구조가 있어요. 4가지가 핵심입니다."
                : "Korea's private fund market largely follows global PE standards (LPA · committed capital · 10-year closed), but with four Korea-specific legal vehicles and structures."}</p>
              <p>{ko
                ? "첫째, PEF (경영참여형 사모집합투자기구). 한국 자본시장법상 한국형 PE fund 형태로, GP는 \"업무집행사원\" 으로 등록되고 LP는 \"유한책임사원\". 사실상 글로벌 LPA와 거의 같은 mechanics인데, 한국 법으로 등록된 vehicle을 통과해서 출자한다는 점이 다름. 한국 NPS, 사학연금, 행정공제회 같은 국내 LP는 거의 항상 PEF 형태로만 출자해요."
                : "First, PEF — Korea's PE fund vehicle under the Capital Markets Act. GP registers as 'managing partner,' LPs as 'limited partners' — essentially the global LPA mechanics, but channeled through the Korea-registered vehicle. Korean institutional LPs (NPS, Sahak Pension, Public Officials Benefit Association) commit almost exclusively through PEFs."}</p>
              <p>{ko
                ? "둘째, 신기술사업투자조합. VC 전용 구조로 벤처투자촉진법에 따라 운영. \"신기술사업금융업자\" 라이선스를 가진 회사 (벤처캐피탈) 만 GP로 운용 가능. 한국 VC는 거의 다 이 형태이고, 한국투자파트너스 · 알토스벤처스 · 카카오벤처스 등이 모두 신기술조합 형태."
                : "Second, the new-technology venture vehicle (NTV) — VC-only under the Venture Investment Promotion Act. Only firms licensed as 'new-technology finance providers' can serve as GP. Almost all Korean VC firms operate in this form — Korea Investment Partners, Altos, Kakao Ventures."}</p>
              <p>{ko
                ? "셋째, 모태펀드 (Korea Fund-of-Funds, KVIC). 정부 출자 모펀드가 자펀드에 출자하는 구조. 한국벤처투자 (KVIC) 가 운영하고 AUM $5B+. 200+ 자펀드에 출자해서 한국 VC 시장의 가장 큰 LP. 한국 VC industry 자체가 모태펀드 출자 위에서 굴러간다고 봐도 무방."
                : "Third, the Korea Fund-of-Funds (KVIC) — government parent fund commits to sub-funds. $5B+ AUM, backing 200+ sub-funds. Korea's biggest VC LP. The Korean VC industry essentially runs on top of KVIC commitments."}</p>
              <p>{ko
                ? "넷째, 산업은행 정책자금. 성장사다리펀드 ($4B+), 산업은행 직접 PEF 등 정책 목적 자금. 중견기업 성장 · M&A · 구조조정 지원이 mandate. 글로벌 PE와 협업 (co-invest) 도 활발해서 KKR · MBK 같은 대형 PE deal에 함께 들어가는 경우가 많아요."
                : "Fourth, KDB policy capital — Growth Ladder Fund ($4B+) and KDB-led PEFs. Mandate: mid-cap growth, M&A, restructuring support. Active co-investor alongside global PE (KKR, MBK) in major deals."}</p>
            </div>

            {/* Korea structures */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "한국 4가지 unique 구조" : "Four Korea-specific structures"}
              </p>
              <div className="space-y-3">
                {KOREA_STRUCTURES.map((k, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: k.color + "60", background: k.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[13px] font-bold" style={{ color: k.color }}>{ko ? k.koName : k.enName}</span>
                      <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{ko ? k.koLegal : k.enLegal}</span>
                    </div>
                    <p className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug mb-1.5">{ko ? k.koDesc : k.enDesc}</p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-500 leading-snug">
                      <span className="font-semibold uppercase tracking-wider text-[9px] mr-1.5" style={{ color: k.color }}>{ko ? "대표 사례" : "Examples"}</span>
                      {ko ? k.koExamples : k.enExamples}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 전략별 대표 firm */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "전략별 대표 firm — 누가 어디서 일하는가" : "Representative firms by strategy"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "각 전략을 대표하는 firm들을 정리해두면 industry map이 그려져요. PE Buyout 영역에서 일하고 싶은 사람과 VC를 하고 싶은 사람은 도전 firm이 완전히 다르고, 한국에서 일하느냐 글로벌 firm Asia office에 들어가느냐도 큰 갈림길이에요. Ch.6 한국·미국 시장 비교 챕터에서 각 firm의 deal style, 보상 구조, 채용 패턴까지 자세히 다루지만, 지금은 \"어떤 firm이 어느 카테고리에 속하나\" 만 정리합니다."
                : "Mapping representative firms by strategy gives you the industry layout. PE Buyout aspirants and VC aspirants chase completely different firms, and choosing between Korean firms and global Asia offices is another fork. Ch.6 covers each firm's deal style, comp, and hiring in detail — for now, just the category map."}</p>
            </div>

            {/* Representative firms catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "전략별 대표 firm 카탈로그" : "Representative firms by strategy"}
              </p>
              <div className="space-y-4">
                {REPRESENTATIVE_FIRMS.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                  >
                    <p className="text-[11.5px] font-bold mb-2 uppercase tracking-wider" style={{ color: r.color }}>{ko ? r.koCategory : r.enCategory}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.firms.map((f, j) => (
                        <span
                          key={j}
                          className="text-[10.5px] font-medium px-2.5 py-1 rounded-md"
                          style={{ background: r.color + "1a", color: r.color, border: `1px solid ${r.color}40` }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "한국 PE는 글로벌 mega-cap이 거의 진출하지 않은 mid-cap 영역에서 강함. 한국 VC는 모태펀드 + 자체 LP 조합으로 성장. 글로벌 firm의 Asia office (KKR Asia, Blackstone Asia, Sequoia Asia) 도 별도 ecosystem."
                  : "Korean PE leads mid-cap, an area global mega-caps barely enter. Korean VC grows on KVIC + own LPs. Global firm Asia offices (KKR Asia, Blackstone Asia, Sequoia Asia) form a separate ecosystem."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "미국 VC — 한 deal이 fund 전체를 carry 하는 power-law" : "US VC — power-law where one deal carries the whole fund"}</p>
              <p>{ko
                ? "PE Buyout과 VC가 가장 다른 점이 \"return 분포\" 예요. PE Buyout fund의 returns는 보통 정규분포에 가까워요 — 30개 portfolio company 중 15개가 평균을 만들고, 몇 개는 잘하고 몇 개는 망함. 그런데 VC는 정반대로 power-law 분포. 30개 중 1-2개가 fund 전체 returns의 80-90%를 만들고, 나머지는 거의 0에 가까운 결과예요."
                : "The single biggest difference between PE Buyout and VC: return distribution. PE Buyout fund returns approximate a normal distribution — 15 of 30 portfolio companies sit around the mean, some out-perform, some fail. VC is the opposite — power-law. 1-2 of 30 generate 80-90% of fund returns; the rest deliver near-zero."}</p>
              <p>{ko
                ? "그래서 미국 VC의 representative deal들이 industry 역사책에 그대로 박혀 있어요. Sequoia가 1978년 Apple에 \"$150K\" 를 투자해서 펀드 전체의 7배를 회수. Accel이 2005년 Facebook Series A에 \"$12.7M\" 을 투자해서 \"$7B\" 를 회수. Benchmark이 1997년 eBay에 투자해서 1,500배. 이런 \"single winner\" 한 명이 fund 전체 IRR을 결정해요."
                : "That's why US VC's representative deals are literally written into industry history. Sequoia put $150K into Apple in 1978 and returned 7× the fund. Accel put $12.7M into Facebook Series A in 2005 and got $7B back. Benchmark backed eBay in 1997 for a 1,500× return. One 'single winner' carries the entire fund IRR."}</p>
              <p>{ko
                ? "그래서 VC fund의 manager selection도 PE Buyout과 완전히 다릅니다. PE Buyout은 \"top quartile은 17%, median 12.5%\" 라는 distribution 안에서 선택. VC는 top 5% firm에 들어가지 않으면 LP 입장에서 사실상 의미 없어요. 그래서 Sequoia, Benchmark, Founders Fund, Greylock 같은 top-tier가 fundraising 할 때마다 oversubscribe 되고, 새 LP는 거의 못 들어가는 구조. \"Access\" 자체가 VC LP의 가장 중요한 metric이에요."
                : "Manager selection in VC differs completely from PE Buyout. Buyout: choose within 'top quartile 17%, median 12.5%.' VC: getting into anything but the top 5% firms is effectively meaningless to the LP. That's why top-tier names — Sequoia, Benchmark, Founders Fund, Greylock — over-subscribe every fundraise, and new LPs can barely access. 'Access' itself is VC LP's most important metric."}</p>
            </div>

            {/* US VC representative portfolios */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "미국 VC top-tier — 대표 portfolio (power-law winners)" : "US VC top-tier — representative portfolios (power-law winners)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 firm을 정의한 home-run deal들. 한 deal이 fund 전체 return을 carry 한 사례." : "The home-run deals that defined each firm — single winners that carried the whole fund."}
              </p>
              <div className="space-y-3">
                {US_VC_PORTFOLIO.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: BLUE + "60", background: BLUE + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[13px] font-bold" style={{ color: BLUE }}>{p.firm}</span>
                      <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{ko ? "설립" : "Est."} {p.founded}</span>
                    </div>
                    <p className="text-[11.5px] text-gray-700 dark:text-gray-300 leading-snug mb-1.5">
                      <span className="text-[9.5px] font-semibold uppercase tracking-wider mr-1.5" style={{ color: BLUE }}>{ko ? "대표 portfolio" : "Notable portfolio"}</span>
                      {ko ? p.koWinners : p.enWinners}
                    </p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug italic">{ko ? p.koNote : p.enNote}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "이 6개 firm 외에 Lightspeed (Snap · Affirm), Index Ventures (Adyen · Roblox), Insight Partners (Twitter · Shopify), Bessemer (LinkedIn · Pinterest · Shopify) 등도 top-tier. 미국 VC 시장 전체 commit의 50%+ 가 top 20 firm에 집중."
                  : "Beyond these six: Lightspeed (Snap · Affirm), Index Ventures (Adyen · Roblox), Insight Partners (Twitter · Shopify), Bessemer (LinkedIn · Pinterest · Shopify) round out the top tier. 50%+ of US VC commitments concentrate in the top-20 firms."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "다음 챕터에서는 fund가 받은 자본이 실제로 어떻게 운용되는지 — Deal sourcing부터 IC memo, portfolio governance, exit까지 — 를 봅니다. PE associate · VP · principal · MD가 각 단계에서 실제로 뭐 하는지의 실무 시점 lifecycle."
                : "Next chapter walks how committed capital actually runs — sourcing through IC memos, portfolio governance, exits. The lifecycle through the lens of what associates, VPs, principals, and MDs actually do."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.4 — {ko ? "자금이 운용되는 과정 — Sourcing부터 Exit까지" : "How the capital actually runs — sourcing to exit"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Deal sourcing 50:1 ratio · IC memo · Portfolio governance (board seat · 100-day plan) · Exit 결정 · Associate부터 MD까지 실무진 시점."
                  : "Deal sourcing at 50:1 · IC memos · portfolio governance (board seats, 100-day plans) · exit decisions · the lifecycle through the practitioner's lens."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share */}
          <ShareButtons
            title={ko ? chapter.titleKo : chapter.titleEn}
            variant="bottom"
            lang={lang}
            readingMinutes={chapter.readingMinutes}
          />

          {/* Series prev/next */}
          {(prev || next) && (
            <div className="mt-6">
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
                next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
              />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
