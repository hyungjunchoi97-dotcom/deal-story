/**
 * FDD 시리즈 Ch.2 — Quality of Earnings (QoE) 실무
 *
 * 톤 가이드 (FDD Ch.1 / Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: EBITDA bridge (waterfall) · 1회성 판단 quadrant · 매도인 trick 카탈로그 · 멀티플 증폭 효과
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FDD_CHAPTERS, getFddChapterBySlug, getFddSeriesNav } from "@/data/fdd-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fdd-ch02-qoe";
const ACCENT = "#a855f7";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#f59e0b";

// EBITDA Bridge — Reported → Adjusted
// 누적 base를 시각화하는 waterfall step 데이터
type BridgeKind = "base" | "add" | "deduct" | "total";
const BRIDGE: Array<{
  koLabel: string; enLabel: string; val: number; kind: BridgeKind;
  koNote?: string; enNote?: string;
}> = [
  { koLabel: "Reported EBITDA",          enLabel: "Reported EBITDA",        val: 50.0, kind: "base",
    koNote: "회사가 audit된 재무제표 기준으로 보고한 EBITDA",
    enNote: "EBITDA as reported in audited financials" },
  { koLabel: "+ CEO 이혼 소송 비용",     enLabel: "+ CEO divorce litigation", val: 3.0, kind: "add",
    koNote: "영업과 무관한 1회성 법무 비용",
    enNote: "One-time legal cost unrelated to operations" },
  { koLabel: "+ 본사 이전 비용",          enLabel: "+ HQ relocation",          val: 2.0, kind: "add",
    koNote: "단발성 자본적 이동 비용",
    enNote: "One-off relocation expense" },
  { koLabel: "+ M&A advisor fee",         enLabel: "+ M&A advisor fee",        val: 1.5, kind: "add",
    koNote: "이번 매각 절차 자체에서 발생한 비용",
    enNote: "Costs arising from this very sale process" },
  { koLabel: "− 화재 보험금 수령",        enLabel: "− Fire insurance proceeds", val: 1.0, kind: "deduct",
    koNote: "1회성 이익은 반대로 차감",
    enNote: "One-time gain is removed in the other direction" },
  { koLabel: "+ 신규 매장 annualize",    enLabel: "+ New stores annualized",  val: 4.0, kind: "add",
    koNote: "12개월 미만 운영분을 연간화 (run-rate)",
    enNote: "Annualize stores in operation less than 12 months (run-rate)" },
  { koLabel: "− Founder under-salary 정상화", enLabel: "− Founder under-market salary",  val: 2.0, kind: "deduct",
    koNote: "시장가 미만 급여를 정상 수준으로 보정 (누락된 비용)",
    enNote: "Adjust below-market founder salary to market level (missing cost)" },
  { koLabel: "= Adjusted EBITDA",         enLabel: "= Adjusted EBITDA",        val: 57.5, kind: "total",
    koNote: "Bridge 합계 — FDD가 산정한 정상 수익력",
    enNote: "Bridge total — the normalized earning power FDD lands on" },
];
const BRIDGE_MAX = 65;

// 1회성 판단 quadrant — 매년 발생 여부 × 영업 관련성
type QuadCell = { koLabel: string; enLabel: string; koAction: string; enAction: string; color: string };
const QUAD: { matrix: QuadCell[][] } = {
  matrix: [
    [
      {
        koLabel: "반복 + 영업 관련",
        enLabel: "Recurring + Operating",
        koAction: "정상 EBITDA에 포함 — 조정 없음",
        enAction: "Keep in normal EBITDA — no adjustment",
        color: "#94a3b8",
      },
      {
        koLabel: "반복 + 영업 무관",
        enLabel: "Recurring + Non-operating",
        koAction: "EBITDA 정의상 이미 제외 — 점검만",
        enAction: "Already out of EBITDA by definition — just verify",
        color: "#cbd5e1",
      },
    ],
    [
      {
        koLabel: "1회성 + 영업 관련",
        enLabel: "Non-recurring + Operating",
        koAction: "★ Add-back 후보 — 가장 흔한 조정 영역",
        enAction: "★ Add-back candidate — the most common zone",
        color: ACCENT,
      },
      {
        koLabel: "1회성 + 영업 무관",
        enLabel: "Non-recurring + Non-operating",
        koAction: "이미 EBITDA에 없음 — 또는 명확한 add-back",
        enAction: "Often already excluded — or a clean add-back",
        color: "#c4b5fd",
      },
    ],
  ],
};

// 매도인의 trick 카탈로그
const SELLER_TRICKS = [
  {
    koTrick: "Synergy를 EBITDA에 미리 박기",
    enTrick: "Bake synergy into EBITDA upfront",
    koHow: "\"인수 후 cost synergy $5M\"을 add-back처럼 제시",
    enHow: "Present 'post-deal cost synergy $5M' as an add-back",
    koCounter: "Synergy는 buyer-specific value — bridge에서 제외",
    enCounter: "Synergy is buyer-specific value — strip it out of the bridge",
  },
  {
    koTrick: "Stock-based comp 전액 add-back",
    enTrick: "Add back all stock-based comp",
    koHow: "\"현금 유출 아님\" 이라며 SBC를 통째로 add-back",
    enHow: "Argue 'no cash impact' and add back the full SBC",
    koCounter: "SBC는 실질적 보상 비용 — Tech·SaaS 회사는 특히 정상 비용으로 인정",
    enCounter: "SBC is real compensation — treat as ordinary expense, especially in tech/SaaS",
  },
  {
    koTrick: "공격적 software capitalization",
    enTrick: "Aggressive software capitalization",
    koHow: "유지·보수성 개발비를 자산으로 처리해 EBITDA 부풀림",
    enHow: "Capitalize maintenance-grade dev work as an asset, inflating EBITDA",
    koCounter: "기능 추가 vs 유지·보수 구분 — 자본화 비율 추이로 검증",
    enCounter: "Separate enhancement vs maintenance work — track capitalization ratio over time",
  },
  {
    koTrick: "Inventory writedown 지연",
    enTrick: "Delay inventory writedowns",
    koHow: "노후·미회전 재고 손상을 closing 후로 미룸",
    enHow: "Push impairments on aging/slow-moving inventory until after closing",
    koCounter: "재고 회전율·노후 분석 (aging) 으로 정상 손상 reserve 추정",
    enCounter: "Use turnover and aging analysis to estimate normal impairment reserve",
  },
  {
    koTrick: "Bad debt 충당금 축소",
    enTrick: "Shrink bad debt provision",
    koHow: "AR aging이 악화돼도 충당금을 보수적으로 적게 잡음",
    enHow: "Keep allowance for doubtful accounts low even as AR aging worsens",
    koCounter: "AR aging bucket + historical 회수율로 정상 충당 수준 재산정",
    enCounter: "Recompute the normal allowance from AR aging buckets and historical recovery rates",
  },
  {
    koTrick: "Capex를 OpEx로 처리",
    enTrick: "Treat capex as opex (or vice versa)",
    koHow: "정기적 설비투자를 R&M으로 처리해 EBITDA 보호",
    enHow: "Classify recurring capex as repairs to protect EBITDA",
    koCounter: "Capex schedule과 회계 처리 일관성 검증",
    enCounter: "Reconcile capex schedule against accounting classification over time",
  },
];

// 멀티플 증폭 효과 — EBITDA $1 조정이 EV로 환산되는 크기
const MULTIPLE_AMP = [
  { mult: 5,  koDesc: "성숙 산업 · 안정 회사",      enDesc: "Mature industry, stable business" },
  { mult: 8,  koDesc: "전형적 M&A 거래",            enDesc: "Typical M&A deal" },
  { mult: 12, koDesc: "고성장 · Tech",              enDesc: "High-growth, tech" },
  { mult: 18, koDesc: "SaaS · 프리미엄 자산",       enDesc: "SaaS, premium assets" },
];

export default function MaFdd02Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFddChapterBySlug(SLUG)!;
  const { prev, next } = getFddSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  // EBITDA bridge — 누적 위치 계산용
  let runningTop = BRIDGE[0].val;
  const bridgePositions = BRIDGE.map((b, i) => {
    if (b.kind === "base" || b.kind === "total") {
      const top = 0;
      const height = b.val;
      runningTop = b.val;
      return { top, height, connectorFrom: b.val };
    }
    let top: number;
    const height: number = b.val;
    if (b.kind === "add") {
      top = runningTop;
      runningTop = runningTop + b.val;
    } else { // deduct
      runningTop = runningTop - b.val;
      top = runningTop;
    }
    return { top, height, connectorFrom: runningTop };
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.2" : "FDD Series · Ch.2"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "FDD 시리즈" : "FDD Series"}</span>
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
            {FDD_CHAPTERS.map((ch) => {
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

          {/* § 1 — QoE가 왜 중요한가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "EBITDA 조정 한 줄이 가격에 멀티플만큼 박힌다" : "One line of EBITDA adjustment moves price by the multiple"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FDD의 가장 큰 volume이 Quality of Earnings, 줄여서 QoE예요. 회사가 보고한 EBITDA(Reported EBITDA)에서 출발해, 정상화된 수익력을 보여주는 Adjusted EBITDA에 도달하는 작업이에요. 보통 \"bridge\" 라고 부르는 한 페이지짜리 다리 그림으로 정리됩니다."
                : "The largest volume in an FDD is Quality of Earnings — QoE. The work walks from Reported EBITDA, what the company shows in its audited financials, to Adjusted EBITDA — the figure that represents normalized earning power. It lands as a one-page 'bridge.'"}</p>
              <p>{ko
                ? "QoE가 왜 그렇게 중요하냐면, M&A 가격이 거의 항상 \"Adjusted EBITDA × Multiple\" 형태로 정해지기 때문이에요. EBITDA $1 조정이 8x 멀티플 deal에서는 EV로 환산하면 $8, SaaS 같은 18x deal에서는 $18 이 됩니다. QoE에서 $5M 차이가 8x deal에서는 가격으로 $40M 차이를 만들어요."
                : "QoE matters because M&A prices land as 'Adjusted EBITDA × multiple.' $1 of EBITDA at an 8× multiple moves EV by $8; in a SaaS deal at 18× it moves by $18. A $5M difference in QoE becomes a $40M difference in price at 8×."}</p>
              <p>{ko
                ? "그래서 QoE 작업이 매도인과 매수인 양쪽에 가장 치열한 협상 영역이 돼요. 매도인은 더 많은 비용을 1회성으로 분류해서 add-back을 키우고 싶고, 매수인은 \"이건 매년 반복되는 영업 비용\"이라며 그 add-back을 거부하려고 합니다. 그 한가운데서 Big 4 TS팀이 양쪽이 받아들일 수 있는 bridge를 만들어내는 게 QoE 작업의 본질이에요."
                : "That's why QoE is the most contested zone for both sides. Sellers want more costs classified as one-time so add-backs grow; buyers push back with 'this is recurring operating cost' to reject add-backs. The Big 4 TS team's job is to build the bridge both sides can live with."}</p>
            </div>

            {/* 멀티플 증폭 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "EBITDA $1 조정 → EV 영향 (멀티플별)" : "$1 of EBITDA adjustment → impact on EV (by multiple)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "왜 EBITDA의 한 줄에 양쪽이 그렇게 치열한지." : "Why each line of EBITDA gets fought over so hard."}
              </p>
              <div className="space-y-3">
                {MULTIPLE_AMP.map((m, i) => {
                  const widthPct = (m.mult / 20) * 100;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-44 flex-shrink-0">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{m.mult}x {ko ? "멀티플" : "multiple"}</p>
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? m.koDesc : m.enDesc}</p>
                      </div>
                      <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded flex items-center justify-end pr-2 text-white text-[10px] font-bold"
                          style={{ width: `${widthPct}%`, background: ACCENT, transformOrigin: "left" }}
                        >
                          ${m.mult}
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "EBITDA $1이 8x deal에서는 EV로 $8, 18x SaaS deal에서는 $18. QoE bridge의 $5M 차이가 8x deal에서는 가격으로 $40M, 18x deal에서는 $90M."
                  : "$1 of EBITDA → $8 of EV at 8×, $18 at 18×. A $5M QoE difference becomes $40M of price at 8×, $90M at 18×."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Bridge 시각화 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Reported → Adjusted EBITDA 한 페이지 bridge" : "The Reported → Adjusted EBITDA bridge on one page"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Bridge는 보통 6-12개 라인으로 구성돼요. 왼쪽 끝이 Reported EBITDA, 오른쪽 끝이 Adjusted EBITDA. 그 사이에 +/− 조정이 한 줄씩 들어갑니다. 가상의 회사 하나로 한 번 따라가 볼게요. Reported EBITDA $50M에서 출발하는 케이스예요."
                : "A bridge is usually 6-12 lines. Left edge is Reported EBITDA, right edge is Adjusted. Each +/− adjustment is one line in between. Let's walk a hypothetical — Reported EBITDA $50M as the starting point."}</p>
            </div>

            {/* Waterfall bridge */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "EBITDA Bridge — Reported $50M → Adjusted $57.5M" : "EBITDA Bridge — Reported $50M → Adjusted $57.5M"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "보라색 = add-back, 빨강 = deduction. 양 끝의 진한 막대가 base/total." : "Purple = add-back, red = deduction. Solid bars on both ends are base/total."}
              </p>

              {/* Bars */}
              <div className="relative" style={{ height: 240 }}>
                {/* Horizontal grid lines */}
                {[0, 10, 20, 30, 40, 50, 60].map((g) => (
                  <div key={g} className="absolute left-0 right-0 border-t border-gray-100 dark:border-gray-800/60" style={{ top: `${100 - (g / BRIDGE_MAX) * 100}%` }}>
                    <span className="absolute -top-1.5 -left-1 -translate-x-full text-[9px] text-gray-400 dark:text-gray-500 font-mono pr-1">${g}M</span>
                  </div>
                ))}
                {/* Bars */}
                <div className="absolute inset-0 ml-10 flex items-end gap-1.5">
                  {BRIDGE.map((b, i) => {
                    const pos = bridgePositions[i];
                    const heightPct = (pos.height / BRIDGE_MAX) * 100;
                    const bottomPct = (pos.top / BRIDGE_MAX) * 100;
                    const color =
                      b.kind === "base" ? "#64748b" :
                      b.kind === "total" ? ACCENT :
                      b.kind === "add" ? `${ACCENT}cc` :
                      RED;
                    return (
                      <div key={i} className="flex-1 relative h-full flex flex-col items-center">
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                          className="absolute w-full rounded-t-sm flex items-start justify-center pt-1 text-white text-[9px] font-bold"
                          style={{
                            background: color,
                            height: `${heightPct}%`,
                            bottom: `${bottomPct}%`,
                            transformOrigin: "bottom",
                          }}
                        >
                          {b.kind === "deduct" ? `−$${b.val}` : `$${b.val}`}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* X labels */}
              <div className="mt-3 ml-10 flex gap-1.5">
                {BRIDGE.map((b, i) => (
                  <div key={i} className="flex-1 text-center">
                    <p className="text-[9px] text-gray-600 dark:text-gray-400 leading-tight">{ko ? b.koLabel : b.enLabel}</p>
                  </div>
                ))}
              </div>

              {/* Legend / Detail */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <ul className="space-y-1">
                  {BRIDGE.map((b, i) => (
                    <li key={i} className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug flex gap-2">
                      <span className="font-mono text-gray-400 dark:text-gray-500 w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300 w-44 flex-shrink-0">{ko ? b.koLabel : b.enLabel}</span>
                      <span className="flex-1">{ko ? b.koNote : b.enNote}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Reported $50M → Adjusted $57.5M, 차이 $7.5M. 8x 멀티플이라면 EV로 $60M 차이. \"한 줄 한 줄이 multiple만큼 가격이다\" 라는 말이 여기서 나옵니다."
                  : "Reported $50M → Adjusted $57.5M, a $7.5M delta. At 8× that's $60M of EV. This is where 'every line is the multiple in price' comes from."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 1회성 판단 기준 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Add-back의 기준 — 무엇이 정말 1회성인가" : "What actually qualifies as one-time"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Add-back을 정당화하려면 두 가지 질문을 동시에 통과해야 해요. 첫째, 매년 반복되지 않는가. 둘째, 영업 활동과 직접 관련 없는가. 둘 중 하나라도 어긋나면 add-back으로 인정받기 어렵습니다."
                : "An add-back has to pass two tests at once. One, does it repeat every year? Two, is it unrelated to operating activities? Fail either and it doesn't qualify."}</p>
              <p>{ko
                ? "예를 들어 본사 화재로 발생한 복구 비용은 1회성이고 영업과는 무관해서 명확한 add-back이에요. 반면 매년 두 차례 진행하는 단체 워크숍 비용은 \"행사\"라는 이름이 붙어 있어도 매년 반복되니까 add-back이 안 됩니다. 그리고 신규 매장 오픈에 들어간 마케팅 비용은 \"개점 이벤트\"라는 이유로 add-back을 시도하지만, 매장 출점 자체가 회사 영업의 정상 활동이라면 거부되는 게 보통이에요."
                : "Fire damage at HQ is one-time and unrelated to operations — clean add-back. Twice-a-year all-hands offsites, even labeled 'events,' recur annually and don't qualify. New-store opening marketing might be pitched as 'launch event' — but if opening stores is a regular part of the business, that add-back usually gets rejected."}</p>
            </div>

            {/* Quadrant */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Add-back 판단 — 2×2 quadrant" : "Add-back classification — 2×2"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "반복성 × 영업 관련성. ★ 영역이 add-back의 본진." : "Recurrence × operating relevance. The ★ zone is where add-backs actually live."}
              </p>

              <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
                <div></div>
                <div className="text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pb-1">
                  {ko ? "영업 관련" : "Operating"}
                </div>
                <div className="text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pb-1">
                  {ko ? "영업 무관" : "Non-operating"}
                </div>

                <div className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pr-2 writing-vertical">
                  {ko ? "반복" : "Recurring"}
                </div>
                <div className="rounded p-3 min-h-[80px]" style={{ background: `${QUAD.matrix[0][0].color}26`, border: `1px solid ${QUAD.matrix[0][0].color}80` }}>
                  <p className="text-[11.5px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">{ko ? QUAD.matrix[0][0].koLabel : QUAD.matrix[0][0].enLabel}</p>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? QUAD.matrix[0][0].koAction : QUAD.matrix[0][0].enAction}</p>
                </div>
                <div className="rounded p-3 min-h-[80px]" style={{ background: `${QUAD.matrix[0][1].color}26`, border: `1px solid ${QUAD.matrix[0][1].color}80` }}>
                  <p className="text-[11.5px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">{ko ? QUAD.matrix[0][1].koLabel : QUAD.matrix[0][1].enLabel}</p>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? QUAD.matrix[0][1].koAction : QUAD.matrix[0][1].enAction}</p>
                </div>

                <div className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pr-2">
                  {ko ? "1회성" : "Non-recurring"}
                </div>
                <div className="rounded p-3 min-h-[80px]" style={{ background: `${QUAD.matrix[1][0].color}26`, border: `1.5px solid ${QUAD.matrix[1][0].color}` }}>
                  <p className="text-[11.5px] font-bold mb-1.5" style={{ color: QUAD.matrix[1][0].color }}>{ko ? QUAD.matrix[1][0].koLabel : QUAD.matrix[1][0].enLabel}</p>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? QUAD.matrix[1][0].koAction : QUAD.matrix[1][0].enAction}</p>
                </div>
                <div className="rounded p-3 min-h-[80px]" style={{ background: `${QUAD.matrix[1][1].color}26`, border: `1px solid ${QUAD.matrix[1][1].color}80` }}>
                  <p className="text-[11.5px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">{ko ? QUAD.matrix[1][1].koLabel : QUAD.matrix[1][1].enLabel}</p>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? QUAD.matrix[1][1].koAction : QUAD.matrix[1][1].enAction}</p>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Add-back의 본진은 좌하단 \"1회성 + 영업 관련\". CEO 소송, 본사 이전, 화재 복구, M&A advisor fee가 다 여기 들어갑니다. 매도인이 좌상단(반복+영업) 항목을 이쪽으로 옮기려 시도하는 게 가장 흔한 trick."
                  : "The add-back zone is bottom-left: 'non-recurring + operating.' CEO litigation, HQ relocation, fire recovery, M&A advisor fees all live here. Sellers most often try to migrate top-left items (recurring + operating) into this box — the classic trick."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Run-rate 조정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Run-rate 조정 — 시점이 만든 distortion 보정" : "Run-rate adjustments — fixing distortion from timing"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "1회성 add-back과 다른 카테고리가 run-rate 조정이에요. 어떤 변화가 작년 도중에 일어났는데, 12개월 풀로 반영이 안 됐을 때 이걸 \"연간화\"하는 작업입니다. 정상화된 수익력을 보여주려는 목적은 같지만, 접근 방향이 달라요."
                : "Separate from one-time add-backs are run-rate adjustments. When a change happened mid-year and didn't get a full 12 months of impact, you annualize it to show what normalized earnings would look like. Same goal — different mechanic."}</p>
              <p>{ko
                ? "예시 두 가지. 8월에 신규 매장 12개를 오픈했다면, 이 매장들의 매출·EBITDA가 12개월 풀로 들어가지 않았으니까 4개월 운영분을 12개월로 환산해서 boosting해줍니다. 또는 6월부터 가격을 5% 올렸다면, 12개월 풀로 가격 인상이 반영됐을 때의 EBITDA로 조정해요. 두 경우 모두 \"미래에는 이 수준으로 굴러갈 거\" 라는 가정이 깔려 있습니다."
                : "Two examples. Twelve new stores opened in August? Those four months get scaled to twelve so the bridge shows what a full year would look like. Or, prices raised 5% from June? Adjust EBITDA to what it'd look like with twelve months of the new prices. Both bake in the assumption: 'this is what the next year looks like.'"}</p>
              <p>{ko
                ? "Run-rate 조정의 함정은 \"가정의 미래\"가 너무 낙관적으로 들어가는 경우예요. 신규 매장이 모두 평균 수준으로 굴러갈 거란 가정, 가격 인상이 매출 감소 없이 그대로 흘러갈 거란 가정. FDD가 여기서 봐야 하는 건 \"기존 매장과 신규 매장의 성과 패턴 비교\", \"가격 인상 후 실제 volume 추이\" 같은 것들입니다."
                : "The trap: 'assumed future' that's too optimistic. New stores all hitting average performance. A price hike landing without volume erosion. FDD's job is to compare new-store vs mature-store curves, and to watch actual volume after a price increase — to test whether the run-rate assumption holds."}</p>
              <p>{ko
                ? "반대 방향도 있어요. Run-rate cost — 작년 도중에 채용한 30명의 직원이 12개월 풀로 인건비에 반영되려면 이번 연도 EBITDA에서 추가로 비용이 들어가야 합니다. 매도인은 이 deduction을 피하고 싶어 하지만, 사람이 이미 채용되어 있으면 이 비용은 정상화 과정에서 반드시 반영돼야 해요."
                : "It runs in the other direction too — run-rate cost. Thirty new hires mid-year mean a full twelve months of payroll in the normalized view. Sellers want to avoid this deduction, but if the headcount is already in place, the cost has to be reflected."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 매도인의 trick */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "매도인이 자주 쓰는 trick과 FDD의 counter-move" : "Common seller tricks and how FDD counters"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "VDD에서든 buy-side FDD가 들어가서 협상할 때든, 매도인 측 자료에서 자주 보이는 패턴이 있어요. 모두 결과적으로 Adjusted EBITDA를 부풀려서 가격을 끌어올리는 방향이고, 각각에 대해 FDD가 어떤 식으로 검증하는지가 표준화되어 있습니다."
                : "Whether it's a VDD or a buy-side FDD digging in, certain patterns keep appearing in seller-side materials. All push Adjusted EBITDA up to lift price, and FDD has a standard counter for each."}</p>
            </div>

            {/* Trick 카탈로그 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-5">
                {ko ? "매도인 trick × FDD counter — 6가지" : "Seller tricks × FDD counters — 6 patterns"}
              </p>
              <div className="space-y-5">
                {SELLER_TRICKS.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? t.koTrick : t.enTrick}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="border-l-2 pl-3" style={{ borderColor: AMBER }}>
                          <p className="text-[9.5px] font-semibold uppercase tracking-wider mb-1" style={{ color: AMBER }}>{ko ? "어떻게" : "How"}</p>
                          <p className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? t.koHow : t.enHow}</p>
                        </div>
                        <div className="border-l-2 pl-3" style={{ borderColor: GREEN }}>
                          <p className="text-[9.5px] font-semibold uppercase tracking-wider mb-1" style={{ color: GREEN }}>{ko ? "FDD Counter" : "FDD counter"}</p>
                          <p className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? t.koCounter : t.enCounter}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "이런 trick들이 \"잘못된 회계\"는 아닙니다. GAAP 안에서 충분히 정당화 가능한 처리들이에요. 다만 \"정상화된 수익력\"을 보여주는 작업에서는 매수인이 받아들이기 어려운 가정들이 들어가 있을 뿐. FDD의 일이 바로 이 경계선을 그어주는 것입니다."
                  : "These aren't 'wrong accounting' — they're defensible under GAAP. They just embed assumptions the buyer can't accept when the question is 'normalized earning power.' FDD's job is to draw the line."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "QoE bridge가 완성되면 그 결과가 곧바로 SPA의 Purchase Price 협상에 박혀요. Bridge의 마지막 줄 \"Adjusted EBITDA\" 한 숫자에 멀티플을 곱한 게 매수인이 제시하는 EV가 됩니다. 그래서 bridge에서 양쪽이 받아들인 한 줄 한 줄이 결국 가격 한 줄 한 줄이 되는 셈이에요."
                : "Once the QoE bridge lands, it goes straight into the SPA's purchase-price negotiation. The last line — Adjusted EBITDA — times the multiple is the buyer's EV. Every line both sides accept in the bridge translates directly into a line of price."}</p>
              <p>{ko
                ? "다음 챕터에서는 SPA 가격에 영향을 미치는 두 번째 큰 항목 — Net Working Capital normalization — 을 봅니다. EBITDA 작업이 \"멀티플로 증폭되는 게임\"이라면, NWC는 \"dollar-for-dollar로 그대로 가격이 되는 게임\"이에요."
                : "Next chapter covers the second big lever on SPA price — Net Working Capital normalization. If EBITDA is the 'multiplied game,' NWC is the 'dollar-for-dollar game.'"}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.3 — {ko ? "Net Working Capital Normalization — 가장 정량적인 다툼" : "Net Working Capital normalization — the most quantitative fight"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Closing 시점의 NWC target을 어떻게 잡는지, dollar-for-dollar 조정의 경제학, 매도인이 closing 직전에 working capital을 \"쥐어짜고\" 떠나는 패턴을 어떻게 잡는지."
                  : "How the closing NWC target gets set, the economics of dollar-for-dollar adjustments, and how to catch sellers squeezing working capital right before closing."}
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
