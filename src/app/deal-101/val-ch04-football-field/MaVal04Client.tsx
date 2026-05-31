/**
 * Valuation 시리즈 Ch.4 — Football Field 종합과 컨텍스트별 valuation
 *
 * 톤 가이드 (Ch.1·2·3 동일):
 *  - 자연스러운 한국어, 직역체 지양
 *  - 데이터 상수의 모든 텍스트 필드는 KO/EN 분리
 *  - 시각화 4개: 완성형 Football Field · Context matrix · Sell vs Buy lens · Range narrowing funnel
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { VAL_CHAPTERS, getValChapterBySlug, getValSeriesNav } from "@/data/valuation-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "val-ch04-football-field";
const ACCENT = "#3b82f6";

// 완성형 Football Field — 6 막대
const FF_FULL = [
  { koMethod: "52-week High / Low",         enMethod: "52-week High / Low",         low: 850,  high: 1300, median: 1075, koTag: "참고",     enTag: "Reference" },
  { koMethod: "Precedent IPO Multiple",     enMethod: "Precedent IPO Multiple",     low: 1100, high: 1400, median: 1250, koTag: "참고",     enTag: "Reference" },
  { koMethod: "Trading Comps (25–75th)",   enMethod: "Trading Comps (25–75th)",     low: 1050, high: 1400, median: 1225, koTag: "Primary", enTag: "Primary" },
  { koMethod: "Transaction Comps (25–75th)", enMethod: "Transaction Comps (25–75th)", low: 1200, high: 1650, median: 1425, koTag: "Primary", enTag: "Primary" },
  { koMethod: "DCF (Bear → Bull)",           enMethod: "DCF (Bear → Bull)",            low: 980,  high: 1500, median: 1240, koTag: "Primary", enTag: "Primary" },
  { koMethod: "LBO Reverse-Math (IRR 20–25%)", enMethod: "LBO Reverse-Math (IRR 20–25%)", low: 900,  high: 1200, median: 1050, koTag: "Floor",   enTag: "Floor" },
];
const FF_MIN = 800;
const FF_MAX = 1700;
const FF_OVERLAP_LOW = 1200;
const FF_OVERLAP_HIGH = 1300;

// 컨텍스트별 method 강조 매트릭스
// cell 값: 'main' | 'sec' | 'na' | string note
type CellKind = "main" | "sec" | "na";
type Cell = { kind: CellKind; koNote?: string; enNote?: string };

const CTX_METHODS = ["Trading", "Transaction", "DCF", "LBO", "Asset-based"] as const;
const CONTEXTS = [
  {
    koCtx: "IPO 가격 산정",
    enCtx: "IPO pricing",
    cells: [
      { kind: "main" }, // Trading
      { kind: "sec",  koNote: "참고",         enNote: "Reference" }, // Transaction
      { kind: "sec",  koNote: "Sanity check", enNote: "Sanity check" }, // DCF
      { kind: "na" }, // LBO
      { kind: "na" }, // Asset
    ] as Cell[],
  },
  {
    koCtx: "M&A 매각 (sell-side)",
    enCtx: "M&A sell-side",
    cells: [
      { kind: "sec" },
      { kind: "main" },
      { kind: "sec",  koNote: "Bull case 강조", enNote: "Lean Bull case" },
      { kind: "sec",  koNote: "PE bidder 견제", enNote: "Counter PE bid" },
      { kind: "na" },
    ] as Cell[],
  },
  {
    koCtx: "M&A 인수 (buy-side)",
    enCtx: "M&A buy-side",
    cells: [
      { kind: "sec" },
      { kind: "sec" },
      { kind: "main", koNote: "+ Synergy", enNote: "+ Synergy" },
      { kind: "sec",  koNote: "Max bid 계산", enNote: "Max bid math" },
      { kind: "na" },
    ] as Cell[],
  },
  {
    koCtx: "LBO 인수 (PE)",
    enCtx: "LBO acquisition (PE)",
    cells: [
      { kind: "sec",  koNote: "Entry/Exit", enNote: "Entry/Exit" },
      { kind: "sec" },
      { kind: "sec" },
      { kind: "main", koNote: "IRR 20–25% 역산", enNote: "Solve at IRR 20–25%" },
      { kind: "na" },
    ] as Cell[],
  },
  {
    koCtx: "Restructuring",
    enCtx: "Restructuring",
    cells: [
      { kind: "na" },
      { kind: "na" },
      { kind: "sec",  koNote: "Going-concern", enNote: "Going-concern" },
      { kind: "na" },
      { kind: "main", koNote: "Liquidation",   enNote: "Liquidation" },
    ] as Cell[],
  },
];

// Sell vs Buy lens — 같은 회사를 두 진영이 어떻게 다르게 anchor 하는가
const LENS = [
  {
    koSide: "Sell-side advisor",
    enSide: "Sell-side advisor",
    anchor: 1500,
    range: [1400, 1650] as [number, number],
    color: "#16a34a",
    koPicks: [
      "Transaction Comps median 강조",
      "DCF — Bull case 활용",
      "LBO reverse-math는 deck 뒤로",
    ],
    enPicks: [
      "Lead with transaction comps median",
      "DCF — lean Bull case",
      "LBO reverse-math pushed to back",
    ],
    koPitch: "\"Premium 회사니까 transaction multiple이 합리적\"",
    enPitch: "\"This is a premium asset — transaction multiples are the right anchor\"",
  },
  {
    koSide: "Buy-side advisor",
    enSide: "Buy-side advisor",
    anchor: 1050,
    range: [950, 1150] as [number, number],
    color: "#dc2626",
    koPicks: [
      "LBO reverse-math 강조",
      "DCF — Bear/Base 활용",
      "Transaction Comps에 noise filter",
    ],
    enPicks: [
      "Lead with LBO reverse-math",
      "DCF — lean Bear/Base",
      "Filter noise out of transaction comps",
    ],
    koPitch: "\"현재 시장 환경이 conservative valuation을 정당화\"",
    enPitch: "\"Current market conditions justify a conservative range\"",
  },
];
const LENS_MIN = 800;
const LENS_MAX = 1700;

// Range narrowing funnel — 4 step
const NARROW = [
  {
    koStep: "모든 method · 모든 percentile",
    enStep: "All methods · all percentiles",
    low: 850,
    high: 1650,
    koNote: "초기 footprint — 너무 wide해서 의사결정 불가",
    enNote: "Initial footprint — too wide to act on",
  },
  {
    koStep: "Outlier 제거",
    enStep: "Drop outliers",
    low: 980,
    high: 1500,
    koNote: "52-week low · NM peer · 부정확한 transaction 제거",
    enNote: "Drop 52-week low, NM peers, stale transactions",
  },
  {
    koStep: "Context-irrelevant method 제외",
    enStep: "Drop context-irrelevant methods",
    low: 1050,
    high: 1400,
    koNote: "예: IPO면 transaction 제외, restructuring이면 LBO 제외",
    enNote: "e.g. IPO drops transactions, restructuring drops LBO",
  },
  {
    koStep: "Recommended range (overlap zone)",
    enStep: "Recommended range (overlap zone)",
    low: 1200,
    high: 1300,
    koNote: "Board에 가져갈 한 줄 — width $100M로 좁혀짐",
    enNote: "The one line for the board — $100M tight",
  },
];
const NARROW_MIN = 800;
const NARROW_MAX = 1700;

export default function MaVal04Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getValChapterBySlug(SLUG)!;
  const { prev, next } = getValSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.4" : "Valuation Series · Ch.4"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Valuation 시리즈" : "Valuation Series"}</span>
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
            {VAL_CHAPTERS.map((ch) => {
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

          {/* § 1 — Football Field가 최종 산출물인 이유 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Football Field가 valuation의 최종 산출물인 이유" : "Why the football field is the final deliverable"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.2에서 DCF range를 만들고 Ch.3에서 Trading·Transaction range를 만들었어요. 그 결과물들이 향하는 종착지가 Football Field입니다. Board, buyer, fairness committee — pitchbook을 보는 사람들이 가장 먼저 펴는 한 페이지예요."
                : "Ch.2 produced a DCF range, Ch.3 produced trading and transaction ranges. Where those land is the football field. It's the one page boards, buyers, and fairness committees turn to first when they open the pitchbook."}</p>
              <p>{ko
                ? "왜 한 method로 끝내지 않고 4-5개를 모두 보여주냐면, Ch.1에서 이야기했듯 어느 하나도 단독으로는 incomplete하기 때문이에요. DCF는 가정 한 줄로 30% 흔들리고, Comps는 peer 선정에 따라 멀티플이 2-3배 차이 나고, LBO reverse-math는 max bid만 알려줍니다. 셋·넷을 같이 보여줘야 \"여기가 합리적이다\"가 성립해요."
                : "Why show four or five methods instead of just one? Because none holds up alone — Ch.1's point. DCF swings 30% on one assumption line, comps swing 2-3× on peer selection, LBO reverse-math only tells you the max bid. You need three or four side by side before 'this range is reasonable' becomes defensible."}</p>
              <p>{ko
                ? "그래서 banker가 board에 가져가는 답은 \"EV는 $X\"가 아니라 항상 \"$A ~ $B 범위가 합리적이고, 그 안에서도 $C 부근이 anchor\" 형태입니다. 그 한 페이지를 만드는 게 valuation 작업의 마지막 단계이고, 이번 챕터에서 다루는 내용이에요."
                : "That's why the answer a banker brings to the board is never 'EV is $X.' It's always '$A to $B is the defensible range, with $C as the anchor.' Building that single page is the last step of the valuation workflow — what this chapter walks through."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 한 페이지를 만드는 작업 흐름 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한 페이지에 무엇이 들어가나" : "What goes on the page"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "표준 Football Field는 가로 막대 4-6개로 구성됩니다. 막대 하나는 valuation method 하나, 막대의 길이는 그 method의 가격 range. 그리고 막대들이 겹치는 zone을 박스로 강조하는 게 일반적인 형태예요."
                : "A standard football field is 4-6 horizontal bars. Each bar is one valuation method; the bar's length is that method's price range. The zone where multiple bars overlap gets highlighted with a box."}</p>
              <p>{ko
                ? "어떤 막대를 넣느냐는 컨텍스트마다 다른데, 가장 풍부한 sell-side M&A 케이스에서는 보통 이 정도로 쌓입니다 — 52-week high/low (참고), Trading Comps 25-75th percentile, Transaction Comps 25-75th percentile, DCF Bear-Bull range, LBO reverse-math (IRR 20-25%에서 역산한 max bid), 그리고 precedent IPO 멀티플 (필요시)."
                : "Which bars depends on the context. A rich sell-side M&A case usually stacks like this — 52-week high/low (reference), trading comps 25-75th percentile, transaction comps 25-75th percentile, DCF bear-bull range, LBO reverse-math (max bid at IRR 20-25%), and a precedent IPO multiple if relevant."}</p>
              <p>{ko
                ? "단위는 EV ($M) 또는 share price ($/share) 둘 다 쓰입니다. Public 회사면 $/share가 board에게 더 직관적이고, private 회사나 segment 매각이면 EV $M로 갑니다. X축 상단에 \"current trading\" 라인을 점선으로 그어주면 비교가 한눈에 들어와요."
                : "Units are either EV ($M) or share price ($/share). For public companies, $/share reads more naturally to a board; private companies or segment carve-outs use EV in $M. A dashed 'current trading' line across the top axis makes everything immediately legible."}</p>
            </div>

            {/* 완성형 Football Field 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Sell-side M&A Football Field — Enterprise Value ($M)" : "Sell-side M&A football field — Enterprise Value ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "6개 막대 + overlap zone + median 마커." : "Six bars + overlap zone + median markers."}
              </p>

              <div className="relative pb-2">
                {/* Overlap zone */}
                <div
                  className="absolute top-0 rounded"
                  style={{
                    left: `calc(${((FF_OVERLAP_LOW - FF_MIN) / (FF_MAX - FF_MIN)) * 100}% + 144px)`,
                    width: `calc(${((FF_OVERLAP_HIGH - FF_OVERLAP_LOW) / (FF_MAX - FF_MIN)) * 100}% - 0px)`,
                    height: `calc(100% - 30px)`,
                    background: `${ACCENT}1a`,
                    border: `1px dashed ${ACCENT}90`,
                  }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                    {ko ? "Overlap" : "Overlap"}
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3 mt-6 relative">
                  {FF_FULL.map((b, i) => {
                    const leftPct = ((b.low - FF_MIN) / (FF_MAX - FF_MIN)) * 100;
                    const widthPct = ((b.high - b.low) / (FF_MAX - FF_MIN)) * 100;
                    const medianPct = ((b.median - FF_MIN) / (FF_MAX - FF_MIN)) * 100;
                    const isReference = (ko ? b.koTag : b.enTag) === (ko ? "참고" : "Reference");
                    const isFloor = (ko ? b.koTag : b.enTag) === "Floor";
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-36 flex-shrink-0">
                          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 leading-tight">{ko ? b.koMethod : b.enMethod}</p>
                          <p className="text-[9px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: isReference ? "#94a3b8" : isFloor ? "#f97316" : ACCENT }}>
                            {ko ? b.koTag : b.enTag}
                          </p>
                        </div>
                        <div className="flex-1 relative h-6">
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                            className="absolute top-0 h-full rounded text-white text-[9px] font-bold flex items-center justify-between px-2"
                            style={{
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              background: isReference ? "#cbd5e1" : isFloor ? "#fb923c" : ACCENT,
                              transformOrigin: "left",
                            }}
                          >
                            <span>${b.low}</span>
                            <span>${b.high}</span>
                          </motion.div>
                          {/* Median marker */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                            className="absolute top-0 h-full"
                            style={{
                              left: `${medianPct}%`,
                              width: "2px",
                              background: "#fff",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* X-axis */}
                <div className="ml-36 pl-3 mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                  <span>${FF_MIN}M</span>
                  <span>$1.0B</span>
                  <span>$1.25B</span>
                  <span>$1.5B</span>
                  <span>${FF_MAX}M</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "흰 세로선 = median. 진한 박스 = overlap zone ($1.2B–$1.3B). Reference 막대(52-week, IPO precedent)는 회색, LBO floor는 오렌지로 차별화."
                  : "White vertical bar = median. Highlighted box = overlap zone ($1.2B–$1.3B). Reference bars (52-week, IPO precedent) are grey; LBO floor is orange."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Overlap zone과 narrative */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Overlap zone과 narrative — banker의 진짜 작업" : "Overlap zone and narrative — the banker's real work"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "4-5개 막대가 겹치는 zone이 \"consensus range\"예요. 위 예시에서는 $1.2B–$1.3B 사이. 이걸 점선 박스로 강조해서 \"이 가격이 어느 한 method의 결과가 아니라 여러 method가 동시에 가리키는 가격\"이라는 메시지를 만듭니다."
                : "The zone where four or five bars overlap is the 'consensus range.' In the example above it's $1.2B–$1.3B. You frame it with a dashed box to make the point — 'this price isn't one method talking, it's several pointing at the same number.'"}</p>
              <p>{ko
                ? "Overlap이 잘 안 나오면? 그게 더 흔한 상황입니다. 그럴 때 두 가지 길이 있어요. 가정을 다시 보거나, method 한두 개를 제외하는 것. DCF만 혼자 위로 튀어 있으면 Bull case를 너무 공격적으로 잡은 거고, Transaction Comps만 혼자 아래면 deal 풀이 outdated된 거예요. 가정을 정리하면 자연스럽게 overlap이 좁혀집니다."
                : "Often there's no clean overlap. Two paths from there — revisit assumptions, or drop a method. If DCF sits alone at the top, the Bull case is probably too aggressive. If transaction comps sit alone at the bottom, the deal pool is stale. Tightening assumptions usually pulls things into overlap."}</p>
              <p>{ko
                ? "Football Field 옆에는 항상 narrative가 같이 들어가요. 막대만 보여주는 게 아니라 \"왜 우리는 high end가 맞다고 보는가\" 또는 \"low end가 conservative\"라는 한 페이지짜리 story를 붙입니다. Sell-side는 보통 growth story로 high end를, buy-side는 risk story로 low end를 정당화하고요."
                : "A football field never travels alone — narrative goes with it. Not just the bars, but a one-page story for why 'high end is right' or 'low end is conservative.' Sell-side leans on a growth story to justify the high end; buy-side leans on a risk story for the low end."}</p>
            </div>

            {/* Sell vs Buy lens 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Sell-side vs Buy-side — 같은 회사, 두 가지 anchor" : "Sell-side vs Buy-side — same company, two anchors"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "양쪽이 같은 Football Field 위에서 완전히 다른 가격을 anchor로 잡습니다." : "Both sides anchor at completely different prices on the same football field."}
              </p>
              <div className="space-y-5">
                {LENS.map((l, i) => {
                  const leftPct = ((l.range[0] - LENS_MIN) / (LENS_MAX - LENS_MIN)) * 100;
                  const widthPct = ((l.range[1] - l.range[0]) / (LENS_MAX - LENS_MIN)) * 100;
                  const anchorPct = ((l.anchor - LENS_MIN) / (LENS_MAX - LENS_MIN)) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[13px] font-bold" style={{ color: l.color }}>{ko ? l.koSide : l.enSide}</span>
                        <span className="text-[12px] font-mono font-bold text-gray-900 dark:text-gray-100">
                          ${l.range[0]}M – ${l.range[1]}M
                        </span>
                      </div>
                      <div className="relative h-5 mb-2">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{
                            left: `${leftPct}%`,
                            width: `${widthPct}%`,
                            background: l.color,
                            opacity: 0.35,
                            transformOrigin: "left",
                          }}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                          className="absolute top-0 h-full"
                          style={{ left: `${anchorPct}%`, width: "2.5px", background: l.color }}
                        >
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold font-mono whitespace-nowrap" style={{ color: l.color }}>
                            ${l.anchor}M
                          </div>
                        </motion.div>
                      </div>
                      <ul className="space-y-0.5 mb-1.5">
                        {(ko ? l.koPicks : l.enPicks).map((p, j) => (
                          <li key={j} className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug flex gap-1.5">
                            <span className="text-gray-300 dark:text-gray-600">·</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[11px] italic text-gray-500 dark:text-gray-400 leading-snug pl-3 border-l-2" style={{ borderColor: l.color }}>
                        {ko ? l.koPitch : l.enPitch}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "같은 회사인데 양쪽 anchor 차이 $450M ($1,050M vs $1,500M). 협상은 결국 이 두 anchor 사이에서 어느 쪽으로 더 끌어가느냐의 게임."
                    : "Same company, $450M of anchor gap ($1,050M vs $1,500M). Negotiation is the game of which anchor pulls harder."}
                </p>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — 컨텍스트별 강조점 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "컨텍스트별로 어떤 method가 메인이 되나" : "Which method leads, by context"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Football Field는 같은 레이아웃이라도 어떤 컨텍스트에서 만드냐에 따라 막대의 무게 중심이 달라요. IPO에서 main으로 잡는 method와 LBO에서 main으로 잡는 method가 완전히 다릅니다. 이걸 모르고 같은 방식으로 만들면 board가 받아들이지 못해요."
                : "Same layout, but the bar that carries the weight depends on the context. The main method in an IPO is completely different from the main method in an LBO. Build them the same way and the board won't buy it."}</p>
              <p>{ko
                ? "5가지 컨텍스트별로 매핑하면 아래 표처럼 정리됩니다. \"Main\"이 그 상황의 anchor가 되는 method, \"Sec\"이 보조, 빈 칸은 아예 안 보여줍니다."
                : "Mapped across five contexts it lands like this. 'Main' is the anchor method for that situation, 'Sec' is supporting, blank means it doesn't appear at all."}</p>
            </div>

            {/* Context emphasis matrix */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "컨텍스트 × Method 강조 매트릭스" : "Context × Method emphasis matrix"}
              </p>
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[28%]"></th>
                    {CTX_METHODS.map((m) => (
                      <th key={m} className="text-center py-2 px-2 font-semibold text-gray-500 dark:text-gray-400">{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CONTEXTS.map((c, ri) => (
                    <tr key={ri} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-3 pr-3 align-middle font-medium text-gray-900 dark:text-gray-100">
                        {ko ? c.koCtx : c.enCtx}
                      </td>
                      {c.cells.map((cell, ci) => {
                        const note = ko ? cell.koNote : cell.enNote;
                        return (
                          <td key={ci} className="py-3 px-2 text-center align-middle">
                            {cell.kind === "main" && (
                              <div className="inline-flex flex-col items-center gap-0.5">
                                <span className="inline-block px-2 py-0.5 rounded text-white text-[10px] font-bold" style={{ background: ACCENT }}>MAIN</span>
                                {note && <span className="text-[9px] text-gray-500 dark:text-gray-400 leading-tight">{note}</span>}
                              </div>
                            )}
                            {cell.kind === "sec" && (
                              <div className="inline-flex flex-col items-center gap-0.5">
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">Sec</span>
                                {note && <span className="text-[9px] text-gray-500 dark:text-gray-400 leading-tight">{note}</span>}
                              </div>
                            )}
                            {cell.kind === "na" && (
                              <span className="text-gray-300 dark:text-gray-700">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "왜 이렇게 갈리는가" : "Why it splits this way"}</p>
              <p>{ko
                ? "IPO에서는 시장 peer가 매일 가격을 매기는 \"오늘의 multiple\"이 가장 신뢰받습니다. Transaction은 control premium이 들어가 있어서 IPO에는 너무 비싼 reference예요. M&A sell-side는 반대로 control premium이 들어간 transaction이 정당한 anchor가 됩니다 — 100% 인수 상황이니까요."
                : "In an IPO, what gets trusted most is the 'today's multiple' that market peers price daily. Transactions sit too high — they include control premium, which doesn't belong in an IPO. M&A sell-side flips it: transactions with their control premium become the right anchor, because you're selling 100% control."}</p>
              <p>{ko
                ? "M&A buy-side가 DCF로 main을 잡는 건, buy-side는 \"이 회사가 우리한테 얼마짜리인가\"를 정량화해야 해서 그래요. Synergy를 포함한 DCF가 그 답이 되고, LBO reverse-math는 옆에서 \"PE bidder는 얼마까지 낼 수 있나\"를 견제용으로 같이 봅니다."
                : "M&A buy-side leads with DCF because the buyer has to quantify 'what's this worth to us specifically.' DCF with synergy gives that answer; LBO reverse-math sits alongside to check 'how high can a PE bidder go.'"}</p>
              <p>{ko
                ? "LBO에서 main이 LBO reverse-math인 건 너무 당연해요. PE는 IRR 20-25%로 들어가야 하니까, exit assumption에서 역산해서 max bid를 구하는 게 처음부터 끝까지의 작업입니다. Trading Comps는 entry·exit multiple 비교용 사이드 토픽이 되고요."
                : "LBO's lead being reverse-math is almost a tautology. PE has to clear IRR 20-25%, so backing out max bid from exit assumptions is the whole exercise. Trading comps become a side reference for entry vs exit multiples."}</p>
              <p>{ko
                ? "Restructuring은 완전히 다른 세계예요. \"이 회사가 going-concern으로 살아남을 가치 vs 지금 청산했을 때 가치\"의 비교가 본질입니다. Trading·Transaction 멀티플은 부적절하고, Asset-based (liquidation)가 메인, going-concern DCF가 그 위의 비교 기준이 돼요. Ch.6에서 Caesars 케이스로 자세히 다룰 예정."
                : "Restructuring lives in a different universe. The core comparison is 'what's this worth as a going concern vs liquidated today.' Trading and transaction multiples are inappropriate; asset-based liquidation leads, with going-concern DCF as the comparator above it. Ch.6 walks through Caesars in detail."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Range narrowing */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Range를 좁히는 마지막 작업" : "Narrowing the range — the last step"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "처음 만든 Football Field의 막대 전체 footprint를 보면 보통 너무 wide합니다. 가장 낮은 막대의 low end와 가장 높은 막대의 high end 사이가 $700-800M 벌어지는 게 흔해요. 그 상태로는 board가 의사결정을 못 합니다. \"이 회사 EV가 $850M에서 $1,650M\" 같은 답으로 가져가면 \"그래서 얼마야\"라는 질문이 다시 돌아와요."
                : "The full bar footprint of a first-draft football field is usually too wide. The gap between the lowest low and the highest high routinely runs $700-800M. The board can't act on that. Bring back 'EV is somewhere between $850M and $1,650M' and you'll get 'so what is it' right back."}</p>
              <p>{ko
                ? "그래서 마지막 작업이 range를 narrow하게 만드는 거예요. 단계는 보통 세 가지. 첫째, outlier 제거 (52-week low처럼 시장 노이즈, NM peer, 시장 컨디션이 다른 옛날 transaction). 둘째, 컨텍스트에 안 맞는 method 빼기 (IPO면 transaction comps 제외, restructuring이면 LBO 제외). 셋째, overlap zone을 \"recommended range\"로 한 줄로 정리하기."
                : "The last step is narrowing. Usually three moves. One, drop outliers (52-week noise, NM peers, stale transactions with different market conditions). Two, drop methods that don't fit the context (transactions out for IPO, LBO out for restructuring). Three, condense the overlap zone into a single 'recommended range.'"}</p>
              <p>{ko
                ? "최종 결과물이 \"$1,200M – $1,300M\" 같은 한 줄이고, 그 폭이 $100M까지 좁혀지면 board는 그 안에서 의사결정을 할 수 있어요. \"$1,250M에서 매각 deal을 시작하자\" 같은 식으로요."
                : "The final output is a single line like '$1,200M – $1,300M.' When that band is $100M wide, the board can decide inside it — 'let's open the sell-side at $1,250M.'"}</p>
            </div>

            {/* Narrowing funnel */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Range Narrowing — 4단계 funnel" : "Range narrowing — four-step funnel"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "$800M 폭에서 $100M 폭으로 줄여 board가 받아들일 수 있는 한 줄로." : "From $800M wide to $100M wide — a single line the board can act on."}
              </p>
              <div className="space-y-4">
                {NARROW.map((n, i) => {
                  const leftPct = ((n.low - NARROW_MIN) / (NARROW_MAX - NARROW_MIN)) * 100;
                  const widthPct = ((n.high - n.low) / (NARROW_MAX - NARROW_MIN)) * 100;
                  const gap = n.high - n.low;
                  const isFinal = i === NARROW.length - 1;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                          <span className={`text-[12.5px] font-bold ${isFinal ? "" : "text-gray-900 dark:text-gray-100"}`} style={isFinal ? { color: ACCENT } : {}}>
                            {ko ? n.koStep : n.enStep}
                          </span>
                        </div>
                        <span className={`text-[11.5px] font-mono ${isFinal ? "font-bold" : "text-gray-500 dark:text-gray-400"}`} style={isFinal ? { color: ACCENT } : {}}>
                          ${n.low}M – ${n.high}M  ·  Δ ${gap}M
                        </span>
                      </div>
                      <div className="relative h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{
                            left: `${leftPct}%`,
                            width: `${widthPct}%`,
                            background: isFinal ? ACCENT : `${ACCENT}80`,
                            transformOrigin: "left",
                          }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mt-1 ml-7 leading-snug">{ko ? n.koNote : n.enNote}</p>
                    </div>
                  );
                })}
              </div>
              {/* X-axis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                <span>${NARROW_MIN}M</span>
                <span>$1.0B</span>
                <span>$1.25B</span>
                <span>$1.5B</span>
                <span>${NARROW_MAX}M</span>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "$800M (Δ $800M) → $520M → $350M → $100M. 단계마다 width가 줄어드는 게 보이도록 정렬. 4단계 결과가 board의 한 줄."
                  : "$800M (Δ $800M) → $520M → $350M → $100M. Each step's width visibly shrinks. The fourth becomes the board's one line."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "Ch.5와 Ch.6에서는 이 작업이 실제 deal에서 어떻게 진행됐는지를 봅니다. IPO에서 Trading Comps가 anchor가 됐을 때 어떤 일이 벌어졌는지 (Facebook IPO 2012), 그리고 going-concern vs liquidation이 법정에서 충돌했을 때 어떻게 풀렸는지 (Caesars Chapter 11)."
                : "Ch.5 and Ch.6 watch this play out in real deals. What happens when trading comps anchor an IPO (Facebook 2012), and how going-concern vs liquidation collide in bankruptcy court (Caesars Chapter 11)."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.5 — {ko ? "IPO Valuation 케이스 — Facebook IPO (2012)" : "IPO Valuation Case — the Facebook IPO (2012)"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Morgan Stanley가 $38로 가격을 매긴 과정. Trading Comps가 anchor였던 deal에서 첫날 폭락이 valuation 작업의 어디에서 깨졌는지 분해."
                  : "How Morgan Stanley arrived at $38. With trading comps as the anchor, where exactly the valuation broke when the stock collapsed on day one."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share — 카드형 + AuthorByline */}
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
