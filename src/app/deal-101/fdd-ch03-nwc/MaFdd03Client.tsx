/**
 * FDD 시리즈 Ch.3 — Net Working Capital Normalization
 *
 * 톤 가이드 (FDD Ch.1·2 / Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: NWC 구성 buckets · 12개월 trend + target · Mechanism 비교 · Squeeze 패턴
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

const SLUG = "fdd-ch03-nwc";
const ACCENT = "#a855f7";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#f59e0b";

// NWC 구성 — operating CA / operating CL / excluded items
const NWC_BUCKETS = [
  {
    koTitle: "Operating Current Assets",
    enTitle: "Operating Current Assets",
    sign: "+" as const,
    color: ACCENT,
    items: [
      { koName: "매출채권 (AR)",         enName: "Accounts Receivable (AR)",     val: 45 },
      { koName: "재고자산 (Inventory)",   enName: "Inventory",                     val: 60 },
      { koName: "선급비용 (Prepaid)",     enName: "Prepaid expenses",              val: 8 },
      { koName: "기타 영업 자산",          enName: "Other operating assets",        val: 5 },
    ],
  },
  {
    koTitle: "Operating Current Liabilities",
    enTitle: "Operating Current Liabilities",
    sign: "−" as const,
    color: "#94a3b8",
    items: [
      { koName: "매입채무 (AP)",          enName: "Accounts Payable (AP)",        val: 30 },
      { koName: "미지급비용 (Accrued)",    enName: "Accrued expenses",             val: 12 },
      { koName: "선수수익 (Deferred Rev)", enName: "Deferred revenue *",           val: 8 },
      { koName: "기타 영업 부채",            enName: "Other operating liabilities",   val: 4 },
    ],
  },
];

const EXCLUDED_ITEMS = [
  { koName: "Cash & Equivalents",          enName: "Cash & equivalents",            koReason: "Net debt에 반영 (별도 정의)",         enReason: "Goes into Net Debt (separate)" },
  { koName: "단기·장기 차입금",              enName: "Short- and long-term debt",     koReason: "Debt-like — Net debt 항목",            enReason: "Debt-like — part of Net Debt" },
  { koName: "Income tax payable",          enName: "Income tax payable",            koReason: "Debt-like로 분류하는 것이 일반적",     enReason: "Typically classified as debt-like" },
  { koName: "M&A 거래 관련 일회성 부채",      enName: "Transaction-related liabilities", koReason: "거래 자체에서 발생 — closing 후 정리", enReason: "Arises from the deal itself — settled at closing" },
];

// 12-month NWC trend — 소매업 예시 ($M)
const NWC_TREND = [
  { koMonth: "1월", enMonth: "Jan", nwc: 80 },
  { koMonth: "2월", enMonth: "Feb", nwc: 82 },
  { koMonth: "3월", enMonth: "Mar", nwc: 85 },
  { koMonth: "4월", enMonth: "Apr", nwc: 88 },
  { koMonth: "5월", enMonth: "May", nwc: 90 },
  { koMonth: "6월", enMonth: "Jun", nwc: 92 },
  { koMonth: "7월", enMonth: "Jul", nwc: 95 },
  { koMonth: "8월", enMonth: "Aug", nwc: 98 },
  { koMonth: "9월", enMonth: "Sep", nwc: 102 },
  { koMonth: "10월", enMonth: "Oct", nwc: 115 },
  { koMonth: "11월", enMonth: "Nov", nwc: 135 },
  { koMonth: "12월", enMonth: "Dec", nwc: 90 },
];
const NWC_AVG = 96; // 12-month average
const NWC_TREND_MIN = 60;
const NWC_TREND_MAX = 150;

// Closing Accounts vs Locked-box 비교
const MECHANISM_COMPARE = [
  {
    koItem: "가격 확정 시점",
    enItem: "When price is fixed",
    koAcc: "Closing 직후 (post-closing 정산)",
    enAcc: "After closing (post-closing settlement)",
    koLb: "Signing 전 — Locked-box date 기준",
    enLb: "Before signing — based on locked-box date",
  },
  {
    koItem: "기준 재무 데이터",
    enItem: "Reference financials",
    koAcc: "Closing date 기준 실제 재무",
    enAcc: "Actuals as of closing date",
    koLb: "Locked-box date의 audited 재무",
    enLb: "Audited financials at locked-box date",
  },
  {
    koItem: "Risk 보유 측",
    enItem: "Who bears interim risk",
    koAcc: "매도인이 closing까지 risk 보유",
    enAcc: "Seller bears risk to closing",
    koLb: "Locked-box date 이후 risk는 매수인",
    enLb: "Buyer bears risk after locked-box date",
  },
  {
    koItem: "Working capital 조정",
    enItem: "Working capital adjustment",
    koAcc: "Closing NWC vs Target → dollar-for-dollar",
    enAcc: "Closing NWC vs target → dollar-for-dollar",
    koLb: "조정 없음 — leakage만 보상",
    enLb: "No adjustment — only leakage compensated",
  },
  {
    koItem: "주요 사용 지역",
    enItem: "Predominant region",
    koAcc: "미국 · 아시아",
    enAcc: "US · Asia",
    koLb: "유럽 · UK",
    enLb: "Europe · UK",
  },
  {
    koItem: "매도인의 인센티브",
    enItem: "Seller's incentive",
    koAcc: "Closing 직전 NWC squeeze 동기",
    enAcc: "Incentive to squeeze NWC before closing",
    koLb: "Leakage 제외 모든 활동 통제 (cash trap)",
    enLb: "All activity locked except permitted leakage (cash trap)",
  },
];

// Working capital squeeze — Normal vs Squeezed (소매업 가상 예시 $M)
const SQUEEZE = [
  {
    koLine: "AR (매출채권)",      enLine: "Accounts Receivable",
    normal: 45, squeezed: 32,
    koHow: "Closing 직전 회수 push (early-pay discount 제공)",
    enHow: "Push collections in the final weeks (offer early-pay discounts)",
  },
  {
    koLine: "Inventory (재고)",   enLine: "Inventory",
    normal: 60, squeezed: 48,
    koHow: "재고 보충 미루기 · clearance 가속",
    enHow: "Delay restocking, accelerate clearance",
  },
  {
    koLine: "AP (매입채무)",      enLine: "Accounts Payable",
    normal: 30, squeezed: 45,
    koHow: "지급 미루기 (payment term 연장 요청)",
    enHow: "Stretch payment timing (request term extensions)",
  },
];
const SQUEEZE_MAX = 70;

export default function MaFdd03Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFddChapterBySlug(SLUG)!;
  const { prev, next } = getFddSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  // Squeeze totals
  const normalNwc = SQUEEZE[0].normal + SQUEEZE[1].normal - SQUEEZE[2].normal;
  const squeezedNwc = SQUEEZE[0].squeezed + SQUEEZE[1].squeezed - SQUEEZE[2].squeezed;
  const squeezeDelta = normalNwc - squeezedNwc;

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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.3" : "FDD Series · Ch.3"}</span>
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

          {/* § 1 — NWC가 SPA 가격에 박히는 이유 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Dollar-for-dollar — NWC $1이 가격 $1이 되는 게임" : "Dollar-for-dollar — every $1 of NWC is $1 of price"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.2의 EBITDA가 \"멀티플로 증폭되는 게임\"이었다면, NWC는 \"그대로 1:1로 가격이 되는 게임\"이에요. Closing 시점의 working capital이 사전에 합의한 target보다 $1 부족하면, 가격에서 $1이 차감됩니다. 반대로 $1 많으면 $1을 더 받아요. 멀티플도 없고 가정도 안 들어가는, 거의 산수에 가까운 조정입니다."
                : "If Ch.2's EBITDA was 'the game multiplied,' NWC is 'the game 1:1.' If closing-date working capital is $1 below the agreed target, price drops by $1. $1 above, you get $1 more. No multiple, no assumption — almost arithmetic."}</p>
              <p>{ko
                ? "왜 이런 조정이 필요한지는 단순해요. 매수인이 회사를 인수하는 순간부터 사업을 굴려야 하는데, 사업을 굴리려면 일정 수준의 운전자본이 필요합니다. 매출채권을 회수하기 전까지 재고를 채워야 하고, 매입채무를 지급하기 전까지 cash가 묶여 있어야 해요. 매도인이 그 운전자본을 정상 수준으로 \"채워두고\" 떠나야, 매수인이 추가 cash를 안 넣고도 회사를 굴릴 수 있습니다."
                : "Why this adjustment exists is simple. The buyer starts running the business immediately after closing, and that requires a baseline of working capital. Inventory has to be stocked before receivables are collected, cash has to sit tied up until payables are paid. The seller has to leave the working capital 'filled to normal' so the buyer doesn't need to inject extra cash on day one."}</p>
              <p>{ko
                ? "그래서 SPA에는 \"closing 시점의 NWC가 target 수준이 아니면 dollar-for-dollar로 가격을 조정한다\" 라는 조항이 들어가요. FDD의 일이 두 가지인데, 첫째가 그 target을 어디로 잡을지 산정하는 것, 둘째가 closing 직전에 매도인이 working capital을 비정상적으로 빼냈는지 (working capital squeeze) 검증하는 것입니다."
                : "So the SPA includes a clause: 'if closing NWC differs from the target, adjust price dollar-for-dollar.' FDD does two things — set the target, and verify whether the seller pulled working capital out abnormally before closing (the squeeze)."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — NWC 구성요소 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "NWC 구성 — 무엇이 들어가고 무엇이 빠지나" : "What's in NWC, what's out"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "NWC의 기본 정의는 \"영업과 직접 관련된 단기 자산 − 영업과 직접 관련된 단기 부채\"예요. 회계 책에서 보는 working capital(유동자산 − 유동부채) 과는 미묘하게 다릅니다. M&A에서 쓰이는 NWC는 \"사업을 굴리는 데 묶이는 자본\"만 잡으니까, cash와 debt 같이 financing에 가까운 항목은 빼요."
                : "Base definition: 'operating current assets minus operating current liabilities.' Subtly different from textbook working capital (CA − CL). In M&A, NWC captures 'capital tied up in running the business,' so financing-adjacent items like cash and debt come out."}</p>
              <p>{ko
                ? "어떤 항목을 NWC에 넣고 어떤 항목을 Net Debt에 넣을지 — 이게 SPA 정의 협상에서 가장 디테일하게 다투는 영역이에요. 대표적으로 deferred revenue (선수수익)가 그래요. 매수인은 \"고객이 미리 낸 cash니까 매수인이 받은 셈, debt-like로 잡아 가격에서 차감\" 이라 주장하고, 매도인은 \"이건 영업 사이클의 일부니까 NWC에 넣어야지\" 라고 받아칩니다. 산업에 따라 결론이 달라요."
                : "Which lines go into NWC versus Net Debt is the most detailed fight in the SPA's definitions. Deferred revenue is the canonical example. Buyer: 'customer already paid cash — debt-like, take it off price.' Seller: 'it's part of the operating cycle, leave it in NWC.' Industry-specific call."}</p>
            </div>

            {/* NWC 구성 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "NWC 구성요소 — 가상의 회사 예시 ($M)" : "NWC components — hypothetical example ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Operating CA − Operating CL = NWC. Cash·Debt 같은 financing 항목은 별도." : "Operating CA − Operating CL = NWC. Financing items (cash, debt) sit separately."}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {NWC_BUCKETS.map((b, i) => {
                  const total = b.items.reduce((s, it) => s + it.val, 0);
                  return (
                    <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[16px] font-bold" style={{ color: b.color }}>{b.sign}</span>
                          <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">{ko ? b.koTitle : b.enTitle}</span>
                        </div>
                        <span className="text-[13px] font-mono font-bold text-gray-900 dark:text-gray-100">${total}M</span>
                      </div>
                      <ul className="space-y-1.5">
                        {b.items.map((it, j) => (
                          <li key={j} className="flex items-baseline justify-between text-[11.5px]">
                            <span className="text-gray-600 dark:text-gray-400">{ko ? it.koName : it.enName}</span>
                            <span className="font-mono text-gray-700 dark:text-gray-300">${it.val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex items-baseline justify-between rounded-lg p-3" style={{ background: `${ACCENT}1a`, border: `1px solid ${ACCENT}80` }}>
                <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">= Net Working Capital</span>
                <span className="text-[15px] font-mono font-bold" style={{ color: ACCENT }}>
                  ${(NWC_BUCKETS[0].items.reduce((s, it) => s + it.val, 0)) - (NWC_BUCKETS[1].items.reduce((s, it) => s + it.val, 0))}M
                </span>
              </div>

              {/* Excluded */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">{ko ? "NWC에서 제외되는 항목 (Net Debt 또는 별도 처리)" : "Excluded from NWC (treated as Net Debt or separately)"}</p>
                <ul className="space-y-1.5">
                  {EXCLUDED_ITEMS.map((e, i) => (
                    <li key={i} className="flex items-baseline justify-between text-[11.5px] gap-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-shrink-0">{ko ? e.koName : e.enName}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-right">{ko ? e.koReason : e.enReason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "* Deferred revenue는 SPA 정의 협상의 단골 항목. 매수인은 debt-like 주장, 매도인은 NWC 주장. SaaS 같은 산업은 보통 debt-like로 결론."
                  : "* Deferred revenue is the perennial flashpoint in SPA definitions. Buyer pushes 'debt-like,' seller pushes 'NWC.' In SaaS, usually lands as debt-like."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — NWC Target 산정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "NWC Target 산정 — 12개월 평균과 seasonality" : "Setting the NWC target — 12-month average and seasonality"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "NWC target을 어떻게 잡느냐가 협상의 핵심이에요. 가장 흔한 방식은 직전 12개월 월말 NWC의 평균을 쓰는 것. 시간이 흐를수록 사업 규모가 커지는 회사라면 24개월 평균보다는 12개월 평균이 더 적절하고, seasonality가 심한 산업이면 같은 계절의 NWC 패턴을 따로 봅니다."
                : "Setting the NWC target is the negotiation. The most common approach is the trailing 12-month month-end average. For businesses scaling up, 12 months beats 24 as the look-back; for seasonal businesses, you compare like seasons."}</p>
              <p>{ko
                ? "Seasonality가 왜 그렇게 중요하냐면, 소매업이나 농업처럼 분기별 NWC 패턴이 강한 산업은 closing 시점에 따라 NWC가 두 배 가까이 흔들리거든요. 예를 들어 소매업체가 11월에 closing을 하면 holiday season 재고가 잔뜩 쌓여있어서 NWC가 평소의 1.5배, 1월에 closing하면 재고가 빠져나가서 평소의 70% 수준이에요. 이런 회사의 target은 \"12개월 평균\" 한 줄로 끝낼 수 없고, closing 예상 시점의 seasonal pattern을 반영한 target을 따로 만들어야 합니다."
                : "Seasonality matters because in retail or agriculture, quarterly NWC patterns swing NWC nearly 2× depending on the closing month. A retailer closing in November sits at ~1.5× normal NWC because holiday inventory is stacked; January closes drop it to ~70%. For these businesses, a single '12-month average' isn't enough — the target gets built around the seasonal pattern at the expected close date."}</p>
            </div>

            {/* 12개월 trend 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "12개월 NWC 추이 — 소매업 예시 ($M)" : "12-month NWC trend — retailer example ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "11월에 holiday 재고로 peak. 1월에 한 번 더 봐야 normalized target이 잡힘." : "Spike in November from holiday inventory. Have to look again in January to land a normalized target."}
              </p>

              {/* Bars + target line */}
              <div className="relative" style={{ height: 200 }}>
                {/* Y axis labels */}
                <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono pr-2 text-right">
                  <span>${NWC_TREND_MAX}M</span>
                  <span>$120M</span>
                  <span>$90M</span>
                  <span>${NWC_TREND_MIN}M</span>
                </div>

                {/* Plot area */}
                <div className="absolute left-10 right-0 top-0 bottom-6 border-l border-b border-gray-200 dark:border-gray-700 flex items-end gap-1">
                  {NWC_TREND.map((m, i) => {
                    const heightPct = ((m.nwc - NWC_TREND_MIN) / (NWC_TREND_MAX - NWC_TREND_MIN)) * 100;
                    return (
                      <div key={i} className="flex-1 relative h-full flex flex-col justify-end items-center">
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                          className="w-full rounded-t-sm"
                          style={{ height: `${heightPct}%`, background: m.nwc > 110 ? AMBER : ACCENT, transformOrigin: "bottom" }}
                        />
                      </div>
                    );
                  })}
                  {/* Average line */}
                  <div
                    className="absolute left-0 right-0 border-t-2 border-dashed flex items-center"
                    style={{
                      bottom: `${((NWC_AVG - NWC_TREND_MIN) / (NWC_TREND_MAX - NWC_TREND_MIN)) * 100}%`,
                      borderColor: GREEN,
                    }}
                  >
                    <span className="absolute right-1 -top-3.5 text-[9.5px] font-bold whitespace-nowrap" style={{ color: GREEN }}>
                      {ko ? `12개월 평균 $${NWC_AVG}M` : `12-month avg $${NWC_AVG}M`}
                    </span>
                  </div>
                </div>

                {/* X axis labels */}
                <div className="absolute left-10 right-0 bottom-0 h-5 flex gap-1">
                  {NWC_TREND.map((m, i) => (
                    <div key={i} className="flex-1 text-center">
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 font-mono">{ko ? m.koMonth : m.enMonth}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Closing이 6월이면 평소 수준($92M)을 target으로, 11월이면 holiday 직전 수준($135M)을 target으로. 산수 평균 $96M으로 일괄 적용하면 매도인이나 매수인 한쪽이 손해."
                  : "Close in June → target near $92M. Close in November → target near $135M. Apply the $96M arithmetic average across the board and one side gets hurt."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Closing Accounts vs Locked-box */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Closing Accounts vs Locked-box — 두 가지 mechanism" : "Closing Accounts vs Locked-box — two mechanisms"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Closing 시점의 NWC를 가격에 어떻게 박을지에는 두 가지 표준 mechanism이 있어요. 둘이 완전히 다른 접근이라 SPA의 가격 조항 전체가 거기에 맞춰 달라집니다."
                : "Two standard mechanisms exist for translating closing-date NWC into price. They take completely different approaches, so the SPA's entire price clause is shaped accordingly."}</p>
              <p>{ko
                ? "Closing Accounts mechanism은 \"signing 시점에는 추정치로 가격을 잡고, closing 이후 실제 NWC가 확정되면 차액을 정산\"하는 방식이에요. 미국과 아시아에서 표준입니다. 매도인 입장에서는 closing까지의 risk를 자기가 보유하고, 매수인 입장에서는 closing 시점에 실제 NWC를 확인할 수 있어서 보호가 강해요. 다만 closing 이후 30-90일 동안 양쪽 회계팀이 \"closing accounts\"를 만들어 다투는 과정이 따라옵니다."
                : "Closing Accounts: 'price is set at signing with an estimate; once actual NWC is known after closing, the difference is settled.' Standard in the US and Asia. Sellers bear interim risk; buyers get strong protection because they verify NWC at closing. The trade-off: a 30-90 day post-close period of finance teams negotiating the closing accounts."}</p>
              <p>{ko
                ? "Locked-box mechanism은 \"signing 전에 이미 확정된 기준일(보통 직전 분기말 또는 fiscal year end)의 audited 재무로 가격을 확정\"하고, 그 이후 closing까지의 risk를 매수인이 가져가는 방식이에요. 유럽 — 특히 UK — 의 PE deal에서 많이 씁니다. 가격이 signing 시점에 100% 확정되니까 closing 이후 정산이 필요 없고 deal 진행이 깔끔해요. 대신 매수인은 locked-box date 이후의 모든 경제적 흐름을 받아들여야 합니다. 매도인은 그 사이에 \"leakage(약속 외 cash 인출)\"만 안 하면 됩니다."
                : "Locked-box: 'price is set at signing using audited financials at a pre-closing reference date (usually quarter-end or fiscal year-end),' and the buyer bears risk from that date to closing. Common in European — particularly UK — PE deals. Price is 100% fixed at signing, no post-closing settlement, cleaner execution. The buyer accepts everything that happens economically after the locked-box date; the seller just can't do 'leakage' (unpermitted cash extraction)."}</p>
            </div>

            {/* Mechanism 비교 표 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Closing Accounts vs Locked-box" : "Closing Accounts vs Locked-box"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "같은 deal에서 어느 mechanism을 쓰느냐가 SPA 가격 조항 전체를 바꿉니다." : "Choosing the mechanism rewrites the entire price clause in the SPA."}
              </p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[26%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold text-gray-900 dark:text-gray-100">{ko ? "Closing Accounts" : "Closing Accounts"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: ACCENT }}>{ko ? "Locked-box" : "Locked-box"}</th>
                  </tr>
                </thead>
                <tbody>
                  {MECHANISM_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.koAcc : c.enAcc}</td>
                      <td className="py-2 align-top text-gray-700 dark:text-gray-300">{ko ? c.koLb : c.enLb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "이 두 mechanism 중 어느 쪽이든 NWC target 산정 자체는 FDD가 합니다. Closing Accounts deal에서는 closing 후 실제 NWC를 검증하는 것까지, Locked-box deal에서는 leakage 발생 여부를 추적하는 것까지가 FDD scope에 들어가요."
                : "Either way, FDD sets the NWC target. In Closing Accounts deals, FDD also verifies the actual NWC after closing; in Locked-box deals, FDD tracks whether leakage occurred. Both fall within FDD's scope."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Working capital squeeze */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "매도인의 working capital squeeze 패턴" : "The seller's working-capital squeeze pattern"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Closing Accounts mechanism에서 매도인은 closing 직전에 \"working capital을 쥐어짜고\" 떠나려는 동기가 강하게 있어요. NWC를 인위적으로 낮추면 dollar-for-dollar로 가격이 낮아지는 게 아니라, 매도인이 그 차액만큼 cash를 미리 회사 밖으로 빼낼 수 있기 때문입니다. NWC target은 합의된 수치고, 그 아래로 떨어진 만큼만 가격에서 차감되니까요."
                : "Under Closing Accounts, sellers have a strong incentive to squeeze working capital right before closing. Push NWC down artificially and the seller extracts that cash before exiting. The agreed NWC target is fixed; only the shortfall comes off price."}</p>
              <p>{ko
                ? "구체적인 패턴은 세 가지 라인에서 동시에 일어나요. 매출채권(AR)을 빠르게 회수하려고 \"early-pay discount\"를 평소보다 많이 제공하고, 재고(Inventory)는 보충을 미루거나 clearance를 가속하고, 매입채무(AP)는 지급을 미뤄서 부채 잔액을 키웁니다. 세 패턴이 합쳐지면 NWC가 평소 $75M에서 $35M까지 떨어지는 경우도 있어요."
                : "Three lines see action at once. AR gets pulled in with heavier 'early-pay discounts,' inventory restocking gets delayed or clearance accelerated, AP gets stretched to inflate the liability balance. Together, NWC can drop from a normal $75M to $35M."}</p>
              <p>{ko
                ? "FDD가 이걸 잡는 방법은 단순해요. Closing 전 마지막 6-8주의 AR/Inventory/AP 추이를 그 직전 12개월의 trend와 비교합니다. 평소 DSO가 50일이었던 회사가 closing 직전 6주 동안 30일로 떨어졌다면 명백한 squeeze. 평소 inventory level이 매출의 25%였는데 closing 직전에 15%로 떨어졌으면 또 다른 신호예요. 이런 발견이 나오면 두 가지 길이 있어요. NWC target을 정상 수준으로 다시 설정해 가격 인하 협상에 쓰거나, indemnification 조항으로 매도인이 사후 보상하도록 합의하거나."
                : "FDD catches it through simple comparison: trend in AR/Inventory/AP for the final 6-8 weeks before closing, against the prior 12 months. DSO normally 50 days, drops to 30 in the final six weeks? Clear squeeze. Inventory normally 25% of revenue, drops to 15% before closing? Another signal. Two paths once it's found — reset the NWC target to normalized level (renegotiating price down), or have it covered by indemnification post-close."}</p>
            </div>

            {/* Squeeze 패턴 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Normal NWC vs Squeezed NWC — 가상의 회사 ($M)" : "Normal NWC vs squeezed NWC — hypothetical ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "세 라인이 동시에 움직이면 NWC가 절반 가까이 떨어집니다." : "When all three lines move at once, NWC drops by almost half."}
              </p>
              <div className="space-y-4">
                {SQUEEZE.map((s, i) => {
                  const normalPct = (s.normal / SQUEEZE_MAX) * 100;
                  const squeezedPct = (s.squeezed / SQUEEZE_MAX) * 100;
                  const isAp = s.koLine.includes("AP");
                  const direction = isAp ? (s.squeezed > s.normal ? "up" : "down") : (s.squeezed < s.normal ? "down" : "up");
                  const isBad = direction === (isAp ? "up" : "down"); // squeeze direction
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.koLine : s.enLine}</span>
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                          ${s.normal}M → <span className="font-bold" style={{ color: isBad ? RED : GREEN }}>${s.squeezed}M</span>
                        </span>
                      </div>
                      {/* Normal bar */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 w-14 flex-shrink-0">{ko ? "Normal" : "Normal"}</span>
                        <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                            className="h-full rounded"
                            style={{ width: `${normalPct}%`, background: `${ACCENT}80`, transformOrigin: "left" }}
                          />
                        </div>
                      </div>
                      {/* Squeezed bar */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 w-14 flex-shrink-0">{ko ? "Squeeze" : "Squeezed"}</span>
                        <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: EASE }}
                            className="h-full rounded"
                            style={{ width: `${squeezedPct}%`, background: isBad ? RED : GREEN, transformOrigin: "left" }}
                          />
                        </div>
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koHow : s.enHow}</p>
                    </div>
                  );
                })}
              </div>

              {/* Net effect */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "Normal NWC" : "Normal NWC"}</p>
                    <p className="text-[16px] font-mono font-bold text-gray-900 dark:text-gray-100">${normalNwc}M</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "Squeezed NWC" : "Squeezed NWC"}</p>
                    <p className="text-[16px] font-mono font-bold" style={{ color: RED }}>${squeezedNwc}M</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "Squeeze 규모" : "Squeeze size"}</p>
                    <p className="text-[16px] font-mono font-bold" style={{ color: AMBER }}>${squeezeDelta}M</p>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed text-center">
                  {ko
                    ? `Dollar-for-dollar 원칙에 따라 매도인이 추가로 가져간 cash $${squeezeDelta}M. FDD가 잡지 못하면 그대로 buyer 손실.`
                    : `Dollar-for-dollar means the seller pocketed an extra $${squeezeDelta}M of cash. Buyer eats it if FDD doesn't catch it.`}
                </p>
              </div>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "NWC normalization 작업이 끝나면, SPA의 closing accounts 또는 locked-box 조항에 target 한 줄이 박힙니다. 그 숫자 하나로 closing 이후 가격이 자동으로 조정돼요. 그 다음 단계는 — balance sheet에 안 잡힌, 더 어려운 종류의 부채를 찾는 거예요."
                : "When the NWC normalization is done, a single target line goes into the SPA's closing-accounts or locked-box clause — and that number drives the price adjustment automatically after closing. The next layer is harder: liabilities that aren't on the balance sheet at all."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.4 — {ko ? "Hidden Liabilities & Off-Balance-Sheet 발굴" : "Hidden liabilities and off-balance-sheet items"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Pension underfunded, warranty reserve, 소송, 환경 부채, 미계상 lease, tax exposure. Balance sheet에 안 잡힌 잠재 부채를 어떻게 발굴하고, 어떻게 indemnification·R&W insurance로 처리하는지."
                  : "Pension underfunded, warranty reserves, litigation, environmental exposure, unrecorded leases, tax positions. How to surface what's not on the balance sheet — and how indemnification and R&W insurance absorb it."}
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
