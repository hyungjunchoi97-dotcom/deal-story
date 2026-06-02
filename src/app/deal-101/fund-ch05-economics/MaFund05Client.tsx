/**
 * Fund 시리즈 Ch.5 — Fund 수익 구조 — LP/GP 경제학
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: 10년 fund cash flow · American vs European waterfall · Carry pool 분배 · Top vs Bottom Quartile
 *  - 모든 데이터 상수 KO/EN 분리
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

const SLUG = "fund-ch05-economics";
const ACCENT = "#f59e0b";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const PURPLE = "#a855f7";

// 10년 fund cash flow — $1B fund 기준
const CASHFLOW_10YR = [
  { year: "Y1",  lpCall: -100, lpDist:   0, gpFee:  20, gpCarry:   0 },
  { year: "Y2",  lpCall: -200, lpDist:   0, gpFee:  20, gpCarry:   0 },
  { year: "Y3",  lpCall: -200, lpDist:  50, gpFee:  20, gpCarry:   0 },
  { year: "Y4",  lpCall: -300, lpDist: 100, gpFee:  20, gpCarry:   0 },
  { year: "Y5",  lpCall: -200, lpDist: 200, gpFee:  20, gpCarry:   0 },
  { year: "Y6",  lpCall:    0, lpDist: 400, gpFee:  12, gpCarry:   0 },
  { year: "Y7",  lpCall:    0, lpDist: 500, gpFee:  12, gpCarry:  20 },
  { year: "Y8",  lpCall:    0, lpDist: 400, gpFee:   4, gpCarry:  80 },
  { year: "Y9",  lpCall:    0, lpDist: 300, gpFee:   4, gpCarry: 100 },
  { year: "Y10", lpCall:    0, lpDist: 250, gpFee:   4, gpCarry: 100 },
];

// American vs European waterfall 비교
const WATERFALL_COMPARE = [
  {
    koItem: "When GP receives carry",
    enItem: "When GP receives carry",
    eu: "Fund 전체 invested capital + 8% preferred return 회수 후",
    enEu: "After fund returns all invested capital + 8% preferred",
    am: "각 deal exit마다 (deal-by-deal)",
    enAm: "On each deal exit (deal-by-deal)",
  },
  {
    koItem: "GP cash flow timing",
    enItem: "GP cash flow timing",
    eu: "Y7-Y10 (Late 단계)",
    enEu: "Y7-Y10 (late stage)",
    am: "Y3부터 (이른 exit으로)",
    enAm: "From Y3 (with early exits)",
  },
  {
    koItem: "LP 보호 강도",
    enItem: "LP protection",
    eu: "강함 — 모든 LP 자본 회수 후 GP 받음",
    enEu: "Strong — GP waits until LPs are made whole",
    am: "약함 — Clawback 조항으로 사후 회수 권리",
    enAm: "Weaker — relies on clawback for recovery",
  },
  {
    koItem: "Clawback 의무",
    enItem: "Clawback obligation",
    eu: "필요 없음 (이미 모두 회수 후 받음)",
    enEu: "Not needed (GP only paid after LPs whole)",
    am: "필수 — 부실 deal 후 GP가 받은 carry 환수",
    enAm: "Required — GP returns carry if later deals underperform",
  },
  {
    koItem: "주요 사용 지역",
    enItem: "Regional usage",
    eu: "유럽 PE · 한국 NPS · 최근 US institutional",
    enEu: "European PE · Korea NPS · recent US institutional",
    am: "미국 older funds · 일부 mid-market",
    enAm: "US older funds · some mid-market",
  },
  {
    koItem: "Industry trend",
    enItem: "Industry trend",
    eu: "Standard. Large institutional LP는 거의 항상 요구",
    enEu: "Standard. Large institutional LPs almost always require it",
    am: "감소 추세. LP 압력으로 European 으로 전환",
    enAm: "Declining. LP pressure shifts funds to European",
  },
];

// Carry pool 분배 — $300M carry pool 기준 (1 vintage)
const CARRY_DISTRIBUTION = [
  {
    koLevel: "Founding Partners (3명)",
    enLevel: "Founding Partners (3)",
    pct: 45,
    amount: 135,
    perPerson: 45,
    color: ACCENT,
    koNote: "GP firm 창립자. 한 명당 $45M per vintage.",
    enNote: "Firm founders. $45M each per vintage.",
  },
  {
    koLevel: "Senior Partners (4명)",
    enLevel: "Senior Partners (4)",
    pct: 25,
    amount: 75,
    perPerson: 18.75,
    color: PURPLE,
    koNote: "$18.75M per partner per vintage.",
    enNote: "$18.75M per partner per vintage.",
  },
  {
    koLevel: "Principals (5명)",
    enLevel: "Principals (5)",
    pct: 15,
    amount: 45,
    perPerson: 9,
    color: BLUE,
    koNote: "$9M per principal per vintage.",
    enNote: "$9M per principal per vintage.",
  },
  {
    koLevel: "VPs (6명)",
    enLevel: "VPs (6)",
    pct: 8,
    amount: 24,
    perPerson: 4,
    color: GREEN,
    koNote: "$4M per VP per vintage.",
    enNote: "$4M per VP per vintage.",
  },
  {
    koLevel: "Senior Associates (8명)",
    enLevel: "Senior Associates (8)",
    pct: 5,
    amount: 15,
    perPerson: 1.875,
    color: "#0891b2",
    koNote: "$1.9M per senior associate per vintage.",
    enNote: "$1.9M per senior associate per vintage.",
  },
  {
    koLevel: "Firm reserves",
    enLevel: "Firm reserves",
    pct: 2,
    amount: 6,
    perPerson: 0,
    color: "#94a3b8",
    koNote: "Firm operating 자금. 다음 fund support.",
    enNote: "Firm operating reserves for next fund.",
  },
];

// Performance 지표 4가지
const METRICS = [
  {
    koMetric: "DPI (Distributions to Paid-In)",
    enMetric: "DPI (Distributions to Paid-In)",
    formula: "Σ Cash distributed / Σ Capital called",
    koMeaning: "실제로 LP에게 회수된 cash 배수. \"진짜 돈\" 지표.",
    enMeaning: "Cash actually distributed to LPs. The 'real money' metric.",
    koExample: "DPI 1.5x = 출자 $100M에 대해 $150M 회수.",
    enExample: "DPI 1.5× = $150M returned on $100M committed.",
    color: GREEN,
  },
  {
    koMetric: "RVPI (Residual Value to Paid-In)",
    enMetric: "RVPI (Residual Value to Paid-In)",
    formula: "Remaining NAV / Σ Capital called",
    koMeaning: "Fund 잔여 자산의 NAV 평가. \"미회수 가치\".",
    enMeaning: "Remaining fund NAV. The 'unrealized value' metric.",
    koExample: "RVPI 0.8x = 아직 fund 안에 $80M 가치.",
    enExample: "RVPI 0.8× = $80M of value still in the fund.",
    color: BLUE,
  },
  {
    koMetric: "TVPI (Total Value to Paid-In)",
    enMetric: "TVPI (Total Value to Paid-In)",
    formula: "DPI + RVPI",
    koMeaning: "총 가치 (회수 + 잔여). MOIC와 거의 동의어.",
    enMeaning: "Total value (distributed + residual). Essentially MOIC.",
    koExample: "TVPI 2.3x = 출자 대비 2.3배 총 가치.",
    enExample: "TVPI 2.3× = 2.3 times committed in total value.",
    color: PURPLE,
  },
  {
    koMetric: "IRR (Internal Rate of Return)",
    enMetric: "IRR (Internal Rate of Return)",
    formula: "Solve r: Σ CF_t / (1+r)^t = 0",
    koMeaning: "연환산 수익률. Cash flow timing 반영.",
    enMeaning: "Annualized return. Reflects cash flow timing.",
    koExample: "IRR 22% — 가장 자주 인용되는 PE 지표.",
    enExample: "IRR 22% — the most cited PE metric.",
    color: ACCENT,
  },
];

// Top vs Bottom Quartile — $1B fund 비교
const QUARTILE_COMPARE = [
  {
    koMetric: "MOIC (Multiple of Money)",
    enMetric: "MOIC (Multiple of Money)",
    top: "2.8x",
    median: "2.0x",
    bottom: "1.2x",
  },
  {
    koMetric: "Net IRR (LP 기준)",
    enMetric: "Net IRR (to LPs)",
    top: "23%",
    median: "14%",
    bottom: "5%",
  },
  {
    koMetric: "DPI at Year 10",
    enMetric: "DPI at Year 10",
    top: "2.5x",
    median: "1.7x",
    bottom: "0.9x",
  },
  {
    koMetric: "GP carry pool (\\$1B fund)",
    enMetric: "GP carry pool ($1B fund)",
    top: "$360M",
    median: "$200M",
    bottom: "$40M",
  },
  {
    koMetric: "LP 실현 profit",
    enMetric: "LP realized profit",
    top: "$1.5B (+150%)",
    median: "$800M (+80%)",
    bottom: "$160M (+16%)",
  },
];

export default function MaFund05Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFundChapterBySlug(SLUG)!;
  const { prev, next } = getFundSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  // Cumulative LP cash flow
  let cumLp = 0;
  const cf10WithCum = CASHFLOW_10YR.map((c) => {
    cumLp += c.lpCall + c.lpDist;
    return { ...c, cumLp };
  });

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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.5" : "Fund Series · Ch.5"}</span>
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

          {/* § 1 — 10년 cash flow */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "10년 Fund Cash Flow — LP와 GP가 각자 무엇을 받나" : "10-year fund cash flow — what LP and GP receive"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "$1B PE fund의 10년 lifecycle 동안 LP·GP 양쪽이 받는 cash를 한 줄에 정리해보면 fund economics의 큰 그림이 한눈에 보여요. LP는 Y1-Y5에 capital을 계속 내고 Y6-Y10에 distribution을 받음. GP는 매년 management fee를 받고 Y7-Y10에 carry를 받음. 두 흐름이 시점이 다른 게 economics의 핵심이에요."
                : "Tracking cash both sides receive over a $1B fund's 10-year life lays out the economics. LPs commit Y1-Y5 and receive distributions Y6-Y10. The GP draws management fees throughout and collects carry Y7-Y10. The timing mismatch is the core of the economics."}</p>
              <p>{ko
                ? "Management fee는 Y1-Y5 매년 $20M (2% × $1B), Y6-Y7는 $12M (1.5% × invested $800M), Y8-Y10는 $4M (1.0% × NAV $400M). 누적 약 $136M. 이게 fund 운영의 \"확정된 GP 수익\" 이에요. Carry는 fund 성과에 따라 0~$360M까지 변동."
                : "Management fees: Y1-Y5 $20M each (2% × $1B), Y6-Y7 $12M (1.5% × $800M invested), Y8-Y10 $4M (1% × $400M NAV). Cumulative ~$136M. This is the GP's 'guaranteed' income. Carry varies $0-$360M depending on fund performance."}</p>
              <p>{ko
                ? "LP 입장에서 \"crossover\" — 누적 cash flow가 0을 넘는 시점 — 이 Y6-Y7 부근. 그 전까지 LP는 negative net cash flow. 그래서 Ch.2에서 본 J-curve가 만들어지는 거예요. Top quartile fund면 Y5에 crossover, bottom quartile은 Y8까지도 crossover 못하는 경우 흔함."
                : "From the LP side, crossover — when cumulative cash flow turns positive — typically lands Y6-Y7. Until then, net cash flow is negative — Ch.2's J-curve. Top-quartile funds cross over by Y5; bottom-quartile may never cross."}</p>
            </div>

            {/* 10-year cash flow table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "$1B Fund — 10년 Cash Flow ($M)" : "$1B fund — 10-year cash flow ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Net IRR ~17% · MOIC 2.5x · 누적 LP +$1,000M, GP carry $300M, GP mgmt fee $136M." : "Net IRR ~17% · MOIC 2.5× · cum LP +$1,000M, GP carry $300M, GP mgmt fee $136M."}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] font-mono">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-2 font-semibold text-gray-500 dark:text-gray-400 w-12">Y</th>
                      <th className="text-right p-2 font-semibold" style={{ color: RED }}>{ko ? "LP Call" : "LP call"}</th>
                      <th className="text-right p-2 font-semibold" style={{ color: GREEN }}>{ko ? "LP Dist" : "LP dist"}</th>
                      <th className="text-right p-2 font-semibold text-gray-700 dark:text-gray-300">{ko ? "누적 LP" : "Cum LP"}</th>
                      <th className="text-right p-2 font-semibold" style={{ color: ACCENT }}>{ko ? "GP Fee" : "GP fee"}</th>
                      <th className="text-right p-2 font-semibold" style={{ color: PURPLE }}>{ko ? "GP Carry" : "GP carry"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cf10WithCum.map((c, i) => {
                      const isCrossover = c.cumLp >= 0 && (cf10WithCum[i - 1]?.cumLp ?? -1) < 0;
                      return (
                        <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0" style={{ background: isCrossover ? GREEN + "1a" : undefined }}>
                          <td className="p-2 text-gray-500 dark:text-gray-400 font-bold">{c.year}</td>
                          <td className="p-2 text-right" style={{ color: c.lpCall < 0 ? RED : "#94a3b8" }}>{c.lpCall < 0 ? c.lpCall : "—"}</td>
                          <td className="p-2 text-right" style={{ color: c.lpDist > 0 ? GREEN : "#94a3b8" }}>{c.lpDist > 0 ? `+${c.lpDist}` : "—"}</td>
                          <td className="p-2 text-right font-bold" style={{ color: c.cumLp < 0 ? RED : GREEN }}>
                            {c.cumLp >= 0 ? "+" : ""}{c.cumLp}
                            {isCrossover && <span className="ml-1 text-[9px]" style={{ color: GREEN }}>★ {ko ? "crossover" : "crossover"}</span>}
                          </td>
                          <td className="p-2 text-right" style={{ color: ACCENT }}>{c.gpFee}</td>
                          <td className="p-2 text-right" style={{ color: c.gpCarry > 0 ? PURPLE : "#94a3b8" }}>{c.gpCarry > 0 ? c.gpCarry : "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Y7에 LP 누적 cash flow가 +0을 넘으면서 동시에 GP carry 시작. European waterfall 기준 (모든 LP 자본 회수 + 8% preferred return 후 carry)."
                  : "Y7 marks the LP crossover and simultaneously the start of GP carry under the European waterfall (all LP capital + 8% preferred returned first)."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — American vs European Waterfall */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "American vs European Waterfall — GP가 언제 carry를 받느냐의 차이" : "American vs European waterfall — when the GP gets carry"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.2에서 간단히 본 American vs European waterfall 차이를 한 번 더 깊이 봅니다. 결국 \"GP가 carry를 언제 받느냐\" 의 문제이지만, 그 timing이 LP 보호 강도와 GP 행동을 크게 바꿔요."
                : "Ch.2 touched on American vs European; let's go deeper. It boils down to 'when does the GP receive carry?' — but the timing shifts LP protection and GP behavior significantly."}</p>
              <p>{ko
                ? "European Waterfall (fund-level) — 모든 invested capital + 8% preferred return 회수 후 carry. 즉 GP가 \"마지막 deal exit\" 까지 기다려야 carry를 받음. Y7-Y10에 carry가 몰리고, LP 입장에서는 \"내가 받을 거 다 받은 후 GP가 받는다\" 라는 보호가 강함. 한국 NPS, 사학연금 같은 institutional LP는 거의 항상 European을 요구해요."
                : "European (fund-level) — GP waits until all invested capital + 8% preferred is returned. So carry comes through Y7-Y10 only. LPs see strong protection: 'I receive everything before the GP gets any.' Korea's NPS and Sahak Pension almost always require European."}</p>
              <p>{ko
                ? "American Waterfall (deal-by-deal) — 각 deal exit마다 그 deal의 profit에 대해 carry를 받음. 즉 첫 deal이 Y3에 exit 되면 GP는 그 deal의 carry를 즉시 받음. GP 입장에서는 cash가 빨리 들어와서 좋지만, 만약 나중 deal들이 부실해서 fund 전체 IRR이 hurdle 못 채우면 GP가 이미 받은 carry를 환수해야 하는 \"Clawback\" 의무가 발생해요."
                : "American (deal-by-deal) — GP collects carry on each deal's profit as it exits. So if the first deal exits Y3, GP collects its carry right away. GP gets cash faster, but if later deals fail and overall fund IRR misses the hurdle, GP must refund previously-paid carry — the 'clawback.'"}</p>
              <p>{ko
                ? "Clawback의 문제는 enforcement예요. GP가 carry를 받아서 partner들에게 분배한 후 5년이 지났는데 \"clawback이 발생했으니 환수해주세요\" 라고 하면 — partner들이 그 돈을 이미 다 써버렸을 수 있어요 (집·요트·세금). 그래서 American waterfall fund는 보통 \"escrow account\" 를 두고 carry의 20-30%를 holdback 합니다. 이런 복잡성 때문에 industry trend는 American → European로 빠르게 전환 중이에요."
                : "Clawback's problem is enforcement. By the time the clawback triggers years later, partners may have spent the carry (houses, yachts, taxes). So American funds typically run an 'escrow account' holding back 20-30% of carry. That complexity is why industry trend rapidly favors European over American."}</p>
            </div>

            {/* American vs European comparison */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "European vs American Waterfall — 6 항목 비교" : "European vs American waterfall — 6-item comparison"}
              </p>
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[22%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold" style={{ color: GREEN }}>{ko ? "European (Fund-level)" : "European (fund-level)"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: RED }}>{ko ? "American (Deal-by-deal)" : "American (deal-by-deal)"}</th>
                  </tr>
                </thead>
                <tbody>
                  {WATERFALL_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2.5 pr-3 text-gray-500 dark:text-gray-400 align-top text-[10.5px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2.5 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.eu : c.enEu}</td>
                      <td className="py-2.5 text-gray-700 dark:text-gray-300 align-top">{ko ? c.am : c.enAm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Carry Pool 분배 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Carry Pool 분배 — Partner부터 Associate까지 누가 얼마를 받나" : "How the carry pool splits — from partners to associates"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "$1B fund가 2.5x MOIC로 wind down 하면 carry pool $300M이 생겨요 (Ch.2에서 계산). 이 $300M을 GP firm 안에서 어떻게 분배하느냐가 \"carry allocation\" 이고, 이게 사실상 PE GP의 가장 중요한 internal politics 이슈예요. \"이 deal을 누가 sourcing 했나\", \"이 deal에 누가 work 했나\", \"이 partner의 firm 기여도가 얼마인가\" 가 모두 carry 분배에 들어갑니다."
                : "When a $1B fund winds down at 2.5× MOIC, the carry pool is $300M (per Ch.2). How that $300M splits inside the GP firm is 'carry allocation' — effectively the most important internal politics issue. 'Who sourced the deal,' 'who worked it,' 'what was the partner's firm contribution' — all feed into the split."}</p>
              <p>{ko
                ? "표준 분배 패턴은 founding partners 40-50%, senior partners 20-30%, principals 15%, VPs 5-10%, senior associates 3-5%, firm reserves 2-5%. Top-tier firm일수록 founding partners 비중이 높아요 (50-60%). 한국 PE는 firm마다 다른데, MBK 같은 곳은 partner equal split에 가깝고, 일부 firm은 founder concentration이 강함."
                : "Standard split: founding partners 40-50%, senior partners 20-30%, principals 15%, VPs 5-10%, senior associates 3-5%, firm reserves 2-5%. Top-tier firms concentrate more in founding partners (50-60%). Korean PE varies — MBK trends toward equal partner split, others have stronger founder concentration."}</p>
              <p>{ko
                ? "한 vintage에서 Partner 1명이 $30-50M carry를 받으면 fund 2-3개를 잘 운용하면 partner career 동안 $100M+ wealth가 가능해요. 그래서 \"PE Partner\" 가 finance industry 최상위 wealth creation track이고, IB MD나 hedge fund PM과는 다른 차원의 보상. Sequoia, KKR 같은 top firm의 founding partner는 net worth가 $1-5B 단위."
                : "Per vintage, a single partner receiving $30-50M means 2-3 successful funds builds $100M+ in career wealth. That's why 'PE partner' is finance's top wealth creation track — a different tier than IB MD or hedge fund PM. Founding partners at Sequoia or KKR have net worths in the $1-5B range."}</p>
            </div>

            {/* Carry pool distribution */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "$300M Carry Pool 분배 — 한 vintage" : "$300M carry pool split — single vintage"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "$1B fund × 2.5x MOIC × 20% carry. Top-tier PE firm 기준 표준 패턴." : "$1B fund × 2.5× MOIC × 20% carry. Standard pattern for top-tier PE firms."}
              </p>
              <div className="space-y-3">
                {CARRY_DISTRIBUTION.map((d, i) => {
                  const widthPct = d.pct;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12px] font-bold" style={{ color: d.color }}>{ko ? d.koLevel : d.enLevel}</span>
                        <span className="text-[11px] font-mono">
                          <span className="text-gray-500 dark:text-gray-400">{d.pct}% = </span>
                          <span className="font-bold" style={{ color: d.color }}>${d.amount}M</span>
                          {d.perPerson > 0 && (
                            <span className="text-gray-500 dark:text-gray-400"> · ${d.perPerson}M{ko ? "/인" : "/person"}</span>
                          )}
                        </span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct * 2}%`, background: d.color, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? d.koNote : d.enNote}</p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "총 $300M carry 분배. Founding partner 3명이 $135M (45%) 가져감 — 한 명당 $45M per vintage. 3개 vintage 성공하면 partner 1명 net worth $100M+."
                  : "Total $300M distributed. Three founding partners take $135M (45%) — $45M each per vintage. Three successful vintages and a partner clears $100M+ net worth."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Performance 지표 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Performance 지표 — DPI · RVPI · TVPI · IRR" : "Performance metrics — DPI, RVPI, TVPI, IRR"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "PE fund의 performance를 측정하는 4가지 핵심 지표가 있어요. 각각 다른 질문에 답하고, LP의 시각에서 보면 4개를 다 봐야 fund 운영 상황이 보입니다."
                : "PE fund performance has four core metrics. Each answers a different question, and an LP reads all four together to see what's actually happening."}</p>
              <p>{ko
                ? "DPI (Distributions to Paid-In) 가 가장 중요해요. 실제로 LP에게 회수된 cash 배수. \"진짜 돈\" 지표. DPI 1.0x = 출자 원금 회수 완료, DPI 1.5x = 출자 대비 1.5배 회수. \"Show me the money\" 지표라서 sophisticated LP는 IRR보다 DPI를 더 신뢰해요."
                : "DPI (Distributions to Paid-In) matters most. Cash actually returned to LPs. DPI 1.0× = capital returned; 1.5× = 1.5 times capital back. The 'show me the money' metric. Sophisticated LPs trust DPI more than IRR."}</p>
              <p>{ko
                ? "RVPI (Residual Value to Paid-In) 는 \"미회수 가치\". Fund 잔여 portfolio의 NAV 평가. GP가 평가하니까 다소 optimistic 한 경향이 있어요. TVPI = DPI + RVPI 가 fund의 \"총 가치 배수\" 인데 MOIC와 거의 동의어. IRR은 cash flow timing을 반영한 연환산 수익률 — 가장 자주 인용되지만 manipulation 여지도 가장 크고 (early distribution으로 IRR을 인위적으로 높일 수 있음)."
                : "RVPI (Residual Value to Paid-In) — 'unrealized value.' The NAV of remaining portfolio. Since the GP marks it, it skews optimistic. TVPI = DPI + RVPI is the 'total value multiple,' essentially MOIC. IRR is the annualized return reflecting cash flow timing — most cited but most manipulable (early distributions inflate IRR)."}</p>
              <p>{ko
                ? "이 4개를 같이 보는 게 표준이에요. 예를 들어 Vintage 2015 fund가 2024년 시점에 DPI 1.2x, RVPI 1.0x, TVPI 2.2x, IRR 18%면 — \"출자 원금은 회수했고 (DPI 1.2), 미회수 가치도 1.0배 남아있고, 총 2.2배 가치, 연 18% 수익률\". 이게 top quartile에 가까운 결과."
                : "Reading all four together is standard. A 2015 vintage seen in 2024 with DPI 1.2× / RVPI 1.0× / TVPI 2.2× / IRR 18% reads: 'capital fully returned (DPI 1.2), residual value 1.0×, total 2.2× value, 18% annualized.' Near top-quartile."}</p>
            </div>

            {/* Performance metrics */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "4가지 Performance 지표 — 각자 무엇을 답하나" : "Four metrics — what each answers"}
              </p>
              <div className="space-y-3">
                {METRICS.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: m.color + "60", background: m.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[12.5px] font-bold" style={{ color: m.color }}>{ko ? m.koMetric : m.enMetric}</span>
                      <span className="text-[10.5px] font-mono text-gray-500 dark:text-gray-400">{m.formula}</span>
                    </div>
                    <p className="text-[11.5px] text-gray-700 dark:text-gray-300 leading-snug mb-1">{ko ? m.koMeaning : m.enMeaning}</p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug italic">{ko ? m.koExample : m.enExample}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Top vs Bottom Quartile */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Top vs Bottom Quartile — GP 선정의 진짜 의미" : "Top vs bottom quartile — what GP selection really means"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.1에서 \"PE Top quartile 17%, Bottom quartile 6%\" 를 봤어요. 이걸 $1B fund의 실제 dollar로 환산하면 LP/GP 양쪽에 어떤 차이가 만들어지는지가 극명해집니다."
                : "Ch.1 noted 'PE top quartile 17%, bottom quartile 6%.' Translating to actual dollars on a $1B fund shows just how stark the LP/GP gap becomes."}</p>
              <p>{ko
                ? "Top quartile fund: MOIC 2.8x, Net IRR 23%, DPI Y10 2.5x, GP carry $360M, LP 실현 profit $1.5B (+150%). Bottom quartile fund: MOIC 1.2x, Net IRR 5%, DPI Y10 0.9x, GP carry $40M, LP 실현 profit $160M (+16%). 같은 $1B 출자인데 LP 실현 profit이 약 10배 차이 나요. 이게 \"manager selection이 PE LP 작업의 90%\" 라는 격언의 mechanic."
                : "Top-quartile fund: MOIC 2.8×, net IRR 23%, DPI Y10 2.5×, GP carry $360M, LP realized profit $1.5B (+150%). Bottom-quartile: MOIC 1.2×, net IRR 5%, DPI Y10 0.9×, GP carry $40M, LP realized profit $160M (+16%). Same $1B commitment, ~10× difference in LP realized profit. That's why 'manager selection is 90% of PE LP work.'"}</p>
              <p>{ko
                ? "GP 입장에서도 차이가 극명. Top quartile fund 3개 vintage 연속으로 운용하면 partner 1명 net worth $100-200M, firm 자체는 $1-5B 가치. Bottom quartile fund 운용하면 partner는 management fee로 base salary 수준만 받고 carry 거의 없음. 더 큰 문제는 다음 fund raise가 거의 불가능해서 GP 자체가 5-10년 안에 wind down 위기. PE industry의 \"survivor bias\" 가 그래서 강한 거예요 — 살아남은 GP만 보이고 fail한 GP는 안 보임."
                : "GP side equally stark. Three consecutive top-quartile vintages build $100-200M partner net worth and a $1-5B firm valuation. Bottom-quartile runs leave the partner with management-fee-level base salary and near-zero carry. The bigger problem: raising the next fund becomes nearly impossible, so the GP itself winds down within 5-10 years. PE's strong 'survivor bias' — only successful GPs remain visible; failed GPs disappear."}</p>
            </div>

            {/* Top vs Bottom comparison */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Top · Median · Bottom Quartile — $1B Fund 결과 비교" : "Top · median · bottom quartile — $1B fund outcomes"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "같은 출자 금액에 GP 선정에 따른 10x 차이 발생." : "Same commitment, ~10× outcome gap from GP selection."}
              </p>
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[32%]"></th>
                    <th className="text-right py-2 pr-3 font-semibold" style={{ color: GREEN }}>{ko ? "Top Quartile" : "Top quartile"}</th>
                    <th className="text-right py-2 pr-3 font-semibold" style={{ color: ACCENT }}>{ko ? "Median" : "Median"}</th>
                    <th className="text-right py-2 font-semibold" style={{ color: RED }}>{ko ? "Bottom Quartile" : "Bottom quartile"}</th>
                  </tr>
                </thead>
                <tbody>
                  {QUARTILE_COMPARE.map((q, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2.5 pr-3 text-gray-700 dark:text-gray-300 align-middle font-medium">{ko ? q.koMetric : q.enMetric}</td>
                      <td className="py-2.5 pr-3 text-right font-mono font-bold align-middle" style={{ color: GREEN }}>{q.top}</td>
                      <td className="py-2.5 pr-3 text-right font-mono align-middle" style={{ color: ACCENT }}>{q.median}</td>
                      <td className="py-2.5 text-right font-mono font-bold align-middle" style={{ color: RED }}>{q.bottom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Top quartile LP realized profit $1.5B vs Bottom $160M = 9.4x 차이. 한국 NPS, Yale Endowment 같은 정상급 LP가 \"manager selection capability\" 에 부서 인력 절반을 쓰는 이유."
                  : "Top-quartile LP realized $1.5B vs bottom $160M — a 9.4× gap. That's why Korea's NPS and Yale Endowment dedicate half their staff to manager selection."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "마지막 챕터 Ch.6에서는 지금까지 본 LP·GP·LPA·운용·경제학을 \"한국·미국 시장\" 의 lens로 다시 보고, 글로벌 Top 10 PE/VC와 한국 주요 player들의 도감으로 시리즈를 마무리합니다."
                : "Ch.6 closes the series by viewing everything — LP, GP, LPA, lifecycle, economics — through the 'Korea vs US market' lens, with an atlas of global top-10 PE/VC and the key Korean players."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.6 — {ko ? "한국·미국 시장과 주요 플레이어 도감" : "Korea vs US market and the player atlas"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Global \\$8T+ PE AUM 분포 · Top 10 US PE/VC · 한국 PE (MBK·IMM·Hahn 등) · 한국 VC · NPS·모태펀드 unique 구조. 시리즈 마무리."
                  : "Global $8T+ PE AUM · top-10 US PE/VC · Korean PE (MBK, IMM, Hahn) · Korean VC · NPS and KVIC's unique structure. Series wrap."}
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
