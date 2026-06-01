/**
 * FDD 시리즈 Ch.6 — Case · Tesco £263M Accounting Scandal (2014)
 *
 * 톤 가이드 (FDD Ch.1-5 / Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: 사건 timeline · Rebate manipulation 다이어그램 · Trading profit 분기 비교 · 주가 timeline
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

const SLUG = "fdd-ch06-tesco-case";
const ACCENT = "#a855f7";
const RED = "#dc2626";
const GREEN = "#16a34a";
const AMBER = "#f59e0b";

// 사건 timeline
const EVENTS = [
  {
    koDate: "2014.8",       enDate: "Aug 2014",
    koEvent: "신임 CEO Dave Lewis 취임 (전 Unilever)",
    enEvent: "Dave Lewis joins as CEO (from Unilever)",
    koNote: "내부 회계 검토 즉시 시작",
    enNote: "Internal accounting review starts immediately",
    tone: "neutral" as const,
  },
  {
    koDate: "2014.9.22",    enDate: "Sep 22 2014",
    koEvent: "£250M trading profit 과대계상 자체 공시",
    enEvent: "Self-discloses £250M trading profit overstatement",
    koNote: "이후 추가 조사로 £263M으로 확정",
    enNote: "Later finalized at £263M after further review",
    tone: "bad" as const,
  },
  {
    koDate: "2014.9.23",    enDate: "Sep 23 2014",
    koEvent: "주가 −11.5%, 시총 약 £2B 증발",
    enEvent: "Stock −11.5%, ~£2B of market cap erased",
    koNote: "8명 senior executive 정직",
    enNote: "Eight senior executives suspended",
    tone: "bad" as const,
  },
  {
    koDate: "2014.10",      enDate: "Oct 2014",
    koEvent: "Deloitte 임시 audit + Freshfields 법무 자문",
    enEvent: "Deloitte interim audit + Freshfields legal review",
    koNote: "오류는 H1 FY15에 집중된 것으로 확인",
    enNote: "Errors confirmed as concentrated in H1 FY15",
    tone: "warn" as const,
  },
  {
    koDate: "2015.4",       enDate: "Apr 2015",
    koEvent: "Serious Fraud Office (SFO) 정식 조사 착수",
    enEvent: "Serious Fraud Office (SFO) formally opens investigation",
    koNote: "회사 + 3 개인 (Bush·Scouler·Rogberg) 조사",
    enNote: "Investigation covers company + 3 individuals (Bush, Scouler, Rogberg)",
    tone: "warn" as const,
  },
  {
    koDate: "2017.3",       enDate: "Mar 2017",
    koEvent: "Tesco, SFO와 Deferred Prosecution Agreement",
    enEvent: "Tesco enters DPA with SFO",
    koNote: "£129M 벌금 + FCA가 별도로 £85M 주주 보상 명령",
    enNote: "£129M fine + separate £85M shareholder compensation ordered by FCA",
    tone: "bad" as const,
  },
  {
    koDate: "2018-19",      enDate: "2018-19",
    koEvent: "3 individual 형사재판 — 모두 무죄/기소 취하",
    enEvent: "Three individuals tried — all acquitted or charges dropped",
    koNote: "회사는 책임 인정, 개인은 형사 책임 면함",
    enNote: "Company accepted responsibility; individuals walked",
    tone: "neutral" as const,
  },
];

// Rebate manipulation 비교 — Normal vs Manipulated
const REBATE_FLOWS = [
  {
    koTitle: "Normal Accounting",
    enTitle: "Normal accounting",
    color: GREEN,
    steps: [
      { koLine: "Q2 period의 supplier rebate 인식",     enLine: "Recognize supplier rebate earned in Q2",      type: "rev" as const, val: 100 },
      { koLine: "Q2 약속한 마케팅 지원 비용 인식",      enLine: "Recognize Q2 marketing support cost",          type: "cost" as const, val: 30 },
      { koLine: "Q2 trading profit (정상)",              enLine: "Q2 trading profit (normal)",                    type: "result" as const, val: 70 },
    ],
  },
  {
    koTitle: "Tesco의 Manipulation",
    enTitle: "Tesco's manipulation",
    color: RED,
    steps: [
      { koLine: "Q2 인식 + 미래 Q3·Q4 rebate를 당겨 인식",    enLine: "Recognize Q2 + pull forward Q3·Q4 rebates",  type: "rev" as const, val: 180 },
      { koLine: "Q2 마케팅 비용은 Q3·Q4로 미룸",                enLine: "Defer Q2 marketing cost to Q3·Q4",            type: "cost" as const, val: 10 },
      { koLine: "Q2 trading profit (인위적 상승)",              enLine: "Q2 trading profit (inflated)",                 type: "result" as const, val: 170 },
    ],
  },
];

// Trading profit — Reported vs Restated (£M, H1 기준 단순화)
const PROFIT_QUARTERS = [
  { koLabel: "H1 FY13",       enLabel: "H1 FY13",         reported: 1150, actual: 1150, isError: false },
  { koLabel: "H2 FY13",       enLabel: "H2 FY13",         reported: 1400, actual: 1400, isError: false },
  { koLabel: "H1 FY14",       enLabel: "H1 FY14",         reported: 1050, actual: 1050, isError: false },
  { koLabel: "H2 FY14",       enLabel: "H2 FY14",         reported: 1280, actual: 1280, isError: false },
  { koLabel: "H1 FY15",       enLabel: "H1 FY15",         reported: 1100, actual: 837,  isError: true  },
];
const PROFIT_MAX = 1500;

// 주가 timeline (£)
const STOCK = [
  { koLabel: "2014.7 (스캔들 전)",     enLabel: "Jul 2014 (pre-scandal)",    price: 2.85, koEvent: "이미 시장 점유율 압력 누적",        enEvent: "Market share pressure already building" },
  { koLabel: "2014.9.22 (직전)",       enLabel: "Sep 22 (eve)",              price: 2.30, koEvent: "발표 전 16주간 −19%",                  enEvent: "Down 19% in the 16 weeks before announcement" },
  { koLabel: "2014.9.23 (공시 후)",    enLabel: "Sep 23 (after)",            price: 2.04, koEvent: "−11.5% 단일일, 시총 £2B 증발",       enEvent: "−11.5% one-day, £2B market cap gone" },
  { koLabel: "2014.12",                enLabel: "Dec 2014",                  price: 1.85, koEvent: "Aldi/Lidl 압력 누적",                  enEvent: "Aldi/Lidl pressure mounts" },
  { koLabel: "2015.10 (저점)",          enLabel: "Oct 2015 (trough)",         price: 1.62, koEvent: "−43% from pre-scandal",                  enEvent: "−43% from pre-scandal" },
  { koLabel: "2019.12 (회복)",          enLabel: "Dec 2019 (recovery)",       price: 2.55, koEvent: "Dave Lewis turnaround 완성",            enEvent: "Dave Lewis turnaround complete" },
];
const STOCK_MIN = 1.4;
const STOCK_MAX = 3.0;

const eventTone = (t: "neutral" | "warn" | "bad") => {
  if (t === "bad") return RED;
  if (t === "warn") return AMBER;
  return ACCENT;
};

export default function MaFdd06Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFddChapterBySlug(SLUG)!;
  const { prev, next } = getFddSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.6" : "FDD Series · Ch.6"}</span>
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

          {/* § 1 — 사건 개요 + Timeline */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "취임 6주차에 신임 CEO가 발견한 £263M짜리 구멍" : "The £263M hole Tesco's new CEO found in week six"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2014년 8월, Tesco는 Unilever에서 Dave Lewis를 새 CEO로 영입했어요. 매출이 둔화되고 Aldi·Lidl 같은 discount 체인의 시장 진입이 매서워지던 시기였어요. 취임 직후 그는 내부 회계 검토를 지시했고, 6주 만에 결과가 나왔습니다."
                : "In August 2014, Tesco brought in Dave Lewis from Unilever as CEO. Revenue was slowing and discount chains like Aldi and Lidl were taking share fast. He ordered an internal accounting review the moment he arrived. Six weeks later the result landed."}</p>
              <p>{ko
                ? "9월 22일, Tesco는 H1 FY15 trading profit이 약 £250M (이후 £263M으로 확정) 과대계상돼 있다고 자체 공시했어요. 다음 날 주가는 −11.5%, 시총 약 £2B이 단일일에 사라졌고, 8명의 senior executive가 정직 처분을 받았습니다. PwC는 거의 30년간 Tesco의 long-term auditor였는데 이걸 매년 통과시켜 왔어요."
                : "On September 22, Tesco self-disclosed that H1 FY15 trading profit had been overstated by ~£250M (finalized at £263M). The next day the stock fell 11.5%, roughly £2B of market cap erased in a single session, and eight senior executives were suspended. PwC had been Tesco's long-term auditor for nearly 30 years — and had been signing off year after year."}</p>
              <p>{ko
                ? "조사 결과 manipulation의 본질은 정교한 사기가 아니라 의외로 단순했어요. \"공급업체로부터 받기로 한 미래 rebate를 미리 인식하고, 공급업체에 약속한 마케팅 비용은 미래로 미루는\" 패턴. 이 두 가지가 H1 FY15 trading profit을 인위적으로 부풀린 핵심이었습니다. 이번 챕터에서는 그 mechanism이 어떻게 작동했는지, 왜 audit이 못 잡았는지, 그리고 buy-side FDD lens에서 어떤 신호를 봤을 수 있었는지를 봅니다."
                : "Once investigated, the manipulation wasn't sophisticated — it was surprisingly simple. 'Pull forward future supplier rebates and defer the marketing costs you owe those suppliers.' Those two moves inflated H1 FY15 trading profit. This chapter walks through how that mechanism worked, why audit missed it, and what signals a buy-side FDD lens would have seen."}</p>
            </div>

            {/* Timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "사건 timeline — 2014년 8월부터 2019년 형사재판 종결까지" : "Timeline — from August 2014 to the 2019 criminal trial closure"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "5년에 걸친 사건. 색은 시장의 부정적 강도." : "Five years of events. Color tracks negative intensity."}
              </p>
              <div className="space-y-3">
                {EVENTS.map((e, i) => {
                  const color = eventTone(e.tone);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                      className="grid grid-cols-[auto_auto_1fr] gap-3 items-start"
                    >
                      <div className="w-24 flex-shrink-0">
                        <span className="text-[11px] font-mono font-bold" style={{ color }}>{ko ? e.koDate : e.enDate}</span>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-0.5">{ko ? e.koEvent : e.enEvent}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? e.koNote : e.enNote}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Rebate manipulation 본질 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "어떻게 부풀렸나 — Supplier Rebate Manipulation" : "How the inflation worked — supplier rebate manipulation"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Tesco 같은 대형 retailer는 매출의 상당 부분을 \"commercial income\" — 공급업체로부터 받는 다양한 incentive — 에서 가져와요. 종류는 크게 네 가지. 일정 구매량 달성 시 받는 volume rebate, 진열대 노출에 대한 listing fee, 프로모션 참여 보조금, 마케팅 지원금."
                : "Big retailers like Tesco book a meaningful slice of margin as 'commercial income' — incentives from suppliers. Four common types: volume rebates earned on purchase thresholds, listing fees for shelf placement, promotional participation subsidies, and marketing support payments."}</p>
              <p>{ko
                ? "정상 회계에서는 이걸 \"수익이 실제로 발생한 기간\"에 인식해야 해요. Q2 동안 구매량 목표를 달성했으면 그 rebate를 Q2에 인식, Q3에 진행될 프로모션 보조금은 Q3에 인식. 동시에 Q2에 약속한 supplier 측 마케팅 지원도 Q2 비용으로 들어가요."
                : "Under normal accounting, you recognize commercial income in the period it's actually earned. If you hit a volume target in Q2, you book the rebate in Q2; promotional subsidies for a Q3 campaign get booked in Q3. At the same time, marketing support you've committed to suppliers in Q2 is a Q2 expense."}</p>
              <p>{ko
                ? "Tesco의 manipulation은 이 timing을 양쪽 방향으로 어긋나게 한 거예요. 첫째, 미래 Q3·Q4에 받을 rebate를 Q2에 미리 당겨 인식해서 수익을 부풀림. 둘째, Q2에 약속한 supplier 측 마케팅 비용은 Q3·Q4로 미뤄서 비용을 깎음. 두 방향의 timing 이동이 합쳐지면서 H1 FY15 trading profit이 약 £263M 인위적으로 상승했어요."
                : "Tesco's manipulation skewed the timing in both directions. One, pull forward Q3-Q4 rebates into Q2 to inflate revenue. Two, push Q2 marketing-support costs into Q3-Q4 to deflate expense. The two timing shifts together inflated H1 FY15 trading profit by ~£263M."}</p>
              <p>{ko
                ? "회계 기준상 \"명백한 위반\"이 명확하지 않은 영역이라는 점이 특히 까다로워요. Commercial income의 timing은 supplier와의 계약에 따라 판단이 들어가는데, Tesco 내부 buying team이 \"우리는 이 rebate가 Q2에 earned 됐다고 본다\" 라고 주장하면 audit이 외부에서 confirm하기 어렵습니다. 그래서 이 manipulation이 long-term audit 동안 지속될 수 있었어요."
                : "What makes it especially tricky: commercial income timing isn't a black-and-white rule violation. Recognition depends on judgment over supplier contracts. When Tesco's buying team argued 'we believe this rebate was earned in Q2,' confirming otherwise from the outside is hard. That's why the manipulation could persist across years of audit."}</p>
            </div>

            {/* Rebate flow 비교 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "정상 회계 vs Tesco의 Manipulation — 분기 단위 단순화" : "Normal accounting vs Tesco's manipulation — quarterly view"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "수익 timing 당기기 + 비용 timing 미루기, 두 방향의 결합." : "Pull revenue timing forward + push cost timing back. The combination."}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {REBATE_FLOWS.map((f, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <p className="text-[12px] font-bold mb-3" style={{ color: f.color }}>{ko ? f.koTitle : f.enTitle}</p>
                    <div className="space-y-2.5">
                      {f.steps.map((s, j) => {
                        const isResult = s.type === "result";
                        const isCost = s.type === "cost";
                        const bgColor = isResult ? f.color : isCost ? "#94a3b8" : f.color;
                        return (
                          <div key={j}>
                            <div className="flex items-baseline justify-between mb-0.5">
                              <span className={`text-[11px] ${isResult ? "font-bold" : ""} text-gray-700 dark:text-gray-300 leading-snug`}>
                                {isCost ? "− " : isResult ? "= " : "+ "}
                                {ko ? s.koLine : s.enLine}
                              </span>
                              <span className={`text-[11px] font-mono flex-shrink-0 ml-2 ${isResult ? "font-bold" : ""}`} style={isResult ? { color: f.color } : { color: undefined }}>
                                £{s.val}M
                              </span>
                            </div>
                            <div className={`h-3 rounded overflow-hidden ${isResult ? "" : "bg-gray-100 dark:bg-gray-800"}`}>
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={VP}
                                transition={{ duration: 0.5, delay: (i * 3 + j) * 0.08, ease: EASE }}
                                className="h-full rounded"
                                style={{
                                  width: `${(s.val / 200) * 100}%`,
                                  background: bgColor,
                                  opacity: isResult ? 1 : (isCost ? 0.7 : 0.85),
                                  transformOrigin: "left",
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between rounded p-2.5" style={{ background: `${RED}1f` }}>
                <span className="text-[12.5px] font-bold" style={{ color: RED }}>{ko ? "= Manipulation 효과 (Q2 profit 부풀림)" : "= Manipulation effect (Q2 profit inflation)"}</span>
                <span className="text-[14px] font-mono font-bold" style={{ color: RED }}>+£100M</span>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "위 예시는 한 분기 단순화. 실제로는 H1 FY15 전체에 걸쳐 누적 £263M. 같은 패턴이 여러 supplier 계약에서 동시에 일어났을 때의 합계예요."
                  : "Above is a one-quarter simplification. Actual H1 FY15 cumulative was £263M — the same pattern across many supplier contracts at once."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 왜 일어났나 + Trading profit 비교 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "왜 일어났나 — 시장 점유율 압박과 guidance pressure" : "Why it happened — market share pressure and guidance"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2014년 시점의 Tesco는 어려운 상황에 놓여 있었어요. Aldi와 Lidl 같은 discount 체인이 영국 시장에서 매년 점유율을 늘려가고 있었고, Tesco의 LFL (like-for-like) 매출은 분기마다 감소세였습니다. 그런데 시장과 analyst에게는 \"우리는 trading profit guidance를 유지할 것\" 이라고 약속한 상황이었어요."
                : "Tesco in 2014 was under real pressure. Aldi and Lidl were taking UK share each year, and Tesco's like-for-like sales were declining quarter after quarter. Meanwhile, guidance had been maintained — 'we'll deliver on trading profit' was the message to the market."}</p>
              <p>{ko
                ? "매출은 줄어드는데 profit guidance는 유지해야 한다 — 이 모순이 supplier rebate 쪽으로 압력을 보냈어요. Volume 자체가 떨어지면 rebate도 자연스럽게 떨어지는데, buying team에게는 \"rebate target을 어떻게든 맞추라\" 라는 압박이 내려왔습니다. 그 결과 미래 분기 rebate를 당겨 인식하는 패턴이 시작됐고, 한 번 시작되니까 다음 분기에는 더 큰 갭을 메워야 했어요."
                : "Falling revenue with maintained profit guidance — that contradiction pushed onto the supplier rebate line. As volume fell, rebates naturally fell too, but the buying team was pressed to hit the rebate target anyway. Pulling forward future-quarter rebates began, and once it started each subsequent quarter had a bigger gap to fill."}</p>
              <p>{ko
                ? "조직 구조도 manipulation을 가능하게 한 요인이었어요. Tesco의 buying team은 카테고리별로 decentralized 되어 있었고, 각 buyer가 supplier와 직접 협상했어요. Rebate 인식 timing을 판단하는 권한이 분산되어 있어서 \"이건 우리가 Q2에 earned 됐다\" 라는 판단이 여러 카테고리에서 동시에 일어났고, 그게 합쳐져서 £263M이 된 거예요."
                : "Organizational structure enabled it too. Tesco's buying team was decentralized by category, with each buyer negotiating directly with suppliers. Authority to judge rebate timing was scattered — 'we earned this in Q2' decisions happened across many categories at once, and together they summed to £263M."}</p>
            </div>

            {/* Trading profit 분기 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Trading Profit — Reported vs Restated (반기, £M)" : "Trading profit — reported vs restated (half-year, £M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "H1 FY15에서 reported가 actual보다 £263M 위. 다른 기간은 동일." : "H1 FY15 reported sits £263M above actual. Other periods unchanged."}
              </p>
              <div className="space-y-3">
                {PROFIT_QUARTERS.map((q, i) => {
                  const reportedPct = (q.reported / PROFIT_MAX) * 100;
                  const actualPct = (q.actual / PROFIT_MAX) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? q.koLabel : q.enLabel}</span>
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                          £{q.reported}M
                          {q.isError && (
                            <>
                              {" "}<span className="text-gray-400 dark:text-gray-500">→</span>{" "}
                              <span className="font-bold" style={{ color: RED }}>£{q.actual}M</span>
                            </>
                          )}
                        </span>
                      </div>
                      <div className="relative h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{ width: `${reportedPct}%`, background: q.isError ? RED : ACCENT, opacity: q.isError ? 0.4 : 1, transformOrigin: "left" }}
                        />
                        {q.isError && (
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: 0.4 + i * 0.08, ease: EASE }}
                            className="absolute top-0 h-full rounded"
                            style={{ width: `${actualPct}%`, background: RED, transformOrigin: "left" }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "전반적으로 H1 trading profit이 £1,050M~£1,150M 수준에서 안정적이었어요. H1 FY15만 갑자기 £1,100M으로 비슷한 수준 유지 — 그런데 실제는 £837M으로 −20% 수준이었습니다. \"점유율이 줄어드는데 profit이 유지된다\"는 게 외부에서도 의심스러운 패턴이었어요."
                  : "H1 trading profit had been stable around £1,050-1,150M. H1 FY15 reported the same ~£1,100M — but actual was £837M, down 20%. 'Share is falling, profit is steady' was suspicious from the outside too."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Audit이 왜 못 잡았나 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "왜 PwC가 30년 동안 못 잡았나" : "Why PwC missed it for 30 years"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "흥미로운 사실은 PwC가 commercial income을 \"high audit risk\" 영역으로 자기들 audit plan에 명시했었다는 거예요. 즉 risk를 인식은 하고 있었어요. 그런데 substantive testing — 실제로 supplier와 contact해서 \"이 rebate가 정말 Q2에 earned 됐는지\" 확인하는 작업 — 이 충분하지 않았습니다."
                : "What's interesting: PwC had actually flagged commercial income as a 'high audit risk' area in its audit plan. The risk was recognized. But substantive testing — actually contacting suppliers to confirm 'was this rebate truly earned in Q2?' — wasn't deep enough."}</p>
              <p>{ko
                ? "원인 중 하나가 long-tenure audit의 \"familiarity threat\"라고 사후 분석됐어요. 30년 가까이 같은 클라이언트를 audit하면 management와의 관계가 깊어지고, 그 management가 제시하는 설명을 받아들이는 경향이 강해집니다. \"Tesco buying team이 이렇게 판단했으니까 합리적\" 으로 끝나는 패턴이에요. UK는 이 사건을 계기로 mandatory audit rotation 규정을 가속했어요 (이미 도입 진행 중이었던 EU 규정 강화)."
                : "One driver, identified post-event, was 'familiarity threat' from long-tenure audit. Three decades with the same client deepens management relationships and breeds receptivity to their explanations. 'Tesco's buying team made this judgment, so it's reasonable' becomes the resting answer. The UK accelerated mandatory audit rotation after this case (building on EU rules already in motion)."}</p>
              <p>{ko
                ? "구조적인 원인도 있었어요. Commercial income은 본질적으로 audit하기 어려운 항목이에요. 매출처럼 외부 invoice가 있는 게 아니라 supplier와의 복잡한 계약 + 부속 합의서 + 후속 이메일에 기반해서 timing이 결정되거든요. Buying team이 \"이건 Q2에 earned\" 라고 판단할 때 외부 auditor가 그걸 정량적으로 반박하기가 쉽지 않습니다. 그래서 commercial income은 회계 통제 약점이 가장 자주 발견되는 영역 중 하나로 분류돼요."
                : "Structural causes too. Commercial income is inherently hard to audit. Unlike revenue with external invoices, timing rests on complex supplier contracts + side letters + follow-up emails. When the buying team says 'this was earned in Q2,' an external auditor has a hard time quantitatively disputing that. Commercial income consistently shows up as one of the most common accounting-control weakness zones."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — FDD가 들어갔다면 + 시리즈 마무리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "FDD lens에서 봤다면 — 5가지 checkpoint + 주가 결과" : "Through an FDD lens — five checkpoints + the share price story"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Tesco는 인수 대상이 아니었으니까 실제 buy-side FDD가 들어가진 않았어요. 그러나 만약 들어갔다면 어떤 신호를 봤을지를 짚어보면, audit과 FDD가 commercial income을 다루는 방식의 차이가 잘 드러납니다."
                : "Tesco wasn't an acquisition target, so a buy-side FDD never ran. But laying out what an FDD would have looked for shows clearly how its lens differs from audit's on commercial income."}</p>
              <p>{ko
                ? "첫째, Commercial income 인식 정책 검토. \"Rebate를 어느 시점에 earned로 인식하는가\" 의 정책을 명문화된 형태로 받아서, 산업 표준 (Walmart·Carrefour 등) 과 비교하면 Tesco의 timing 정책이 더 공격적이라는 게 나왔을 거예요. 둘째, period-end booking pattern 분석. Quarter-end 직전 commercial income booking이 spike하는 패턴이 있으면 그 자체가 신호. Tesco의 경우 분기 마지막 2주에 commercial income이 평소의 2-3배로 booking되는 게 보였을 가능성이 큽니다."
                : "First, review the commercial-income recognition policy. Get the codified policy on 'when do we treat a rebate as earned?' and benchmark against industry standards (Walmart, Carrefour). Tesco's would have looked more aggressive. Second, period-end booking pattern analysis. Commercial income spiking right before quarter-end is itself a signal. In Tesco's case, the final two weeks of a quarter likely showed 2-3× the typical booking rate."}</p>
              <p>{ko
                ? "셋째, Supplier confirmation 절차. Audit이 sample로 supplier에게 \"이 rebate가 언제 earned 됐냐\" 를 확인하는 게 표준이지만 sample size가 작은 경우가 많아요. FDD는 buy-side 협상력으로 더 넓은 범위에서 confirmation을 요구할 수 있어요. 넷째, Margin vs market share 추세 모순 검토. Tesco의 LFL 매출은 떨어지는데 margin은 유지되고 있었다는 것 — 이게 단독으로 큰 red flag입니다. 다섯째, Buying team incentive 구조. \"Rebate target 달성\" 이 buyer KPI에 들어가 있으면 manipulation 동기가 시스템에 내장되어 있다는 신호예요."
                : "Third, supplier confirmation procedures. Audit samples suppliers to confirm 'when was this rebate earned' but sample sizes are often small. FDD can leverage buy-side negotiating power to demand broader confirmation. Fourth, the margin vs market share contradiction. Tesco's LFL was falling but margin held — that alone is a major red flag. Fifth, the buying team's incentive structure. If 'rebate target achievement' is in the buyer KPI, manipulation motive is baked into the system."}</p>
              <p>{ko
                ? "이 다섯 가지 모두 standard buy-side FDD playbook 안에 들어 있어요. Hertz 케이스(Ch.5)에서 본 \"가정의 누락\" 패턴과 Tesco의 \"의도적 timing manipulation\"은 성격이 다르지만, 둘 다 FDD lens에서는 발견 가능한 종류였습니다."
                : "All five sit inside the standard buy-side FDD playbook. Hertz (Ch.5) was an 'assumption gap' pattern; Tesco is 'deliberate timing manipulation.' Different in character — both within FDD's range of discoverable issues."}</p>
            </div>

            {/* 주가 timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Tesco 주가 — 스캔들 전후 (£)" : "Tesco share price — through the scandal (£)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "£2.85 → 저점 £1.62 (−43%) → £2.55로 회복." : "£2.85 → trough £1.62 (−43%) → recovery to £2.55."}
              </p>
              <div className="space-y-2.5">
                {STOCK.map((s, i) => {
                  const widthPct = ((s.price - STOCK_MIN) / (STOCK_MAX - STOCK_MIN)) * 100;
                  const isTrough = i === 4;
                  const isPeak = i === 0;
                  const isRecover = i === 5;
                  const color = isTrough ? RED : isPeak ? ACCENT : isRecover ? GREEN : `${ACCENT}90`;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-32 flex-shrink-0">
                        <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 leading-tight">{ko ? s.koLabel : s.enLabel}</p>
                      </div>
                      <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                          className="h-full rounded flex items-center justify-end pr-2 text-white text-[10px] font-bold"
                          style={{ width: `${widthPct}%`, background: color, transformOrigin: "left" }}
                        >
                          £{s.price.toFixed(2)}
                        </motion.div>
                      </div>
                      <div className="w-56 flex-shrink-0">
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koEvent : s.enEvent}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "회복까지 약 5년. 회계 오류 자체보다 그 발견이 노출시킨 \"통제 실패 + 시장 점유율 하락\" 이라는 더 큰 구조적 문제가 가치 파괴의 진짜 원인이었어요."
                  : "Five years to recover. The accounting error itself wasn't the real value destroyer — the bigger structural problems it exposed (control failure + falling market share) were."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "FDD 시리즈 6챕터를 마무리하며" : "Wrapping the FDD series"}</p>
              <p>{ko
                ? "이로써 FDD 시리즈 6챕터가 모두 끝났어요. Ch.1에서 FDD가 SPA 가격에 어떻게 박히는지를 봤고, Ch.2-4에서 작업의 세 축 — QoE, NWC normalization, Hidden Liabilities — 를 풀었어요. 그리고 Ch.5-6 두 케이스로 audit이 잡지 못한 회계 이슈가 어떻게 발생하고 어디서 buy-side lens가 신호를 봤을 수 있었는지를 짚었습니다."
                : "That closes the six chapters of the FDD series. Ch.1 walked how FDD findings hit the SPA price. Ch.2-4 unpacked the three core volumes — QoE, NWC normalization, and Hidden Liabilities. Ch.5-6 took two real cases to show how accounting issues escape audit, and where a buy-side lens would have seen signals."}</p>
              <p>{ko
                ? "두 케이스가 공통적으로 보여주는 건 \"audit과 FDD가 묻는 질문이 다르다\" 라는 거예요. Audit은 \"가정이 합리적인가, GAAP에 부합하는가\"를 묻고, FDD는 \"실제와 어떻게 어긋났는가, 누가 이 가정으로 어떤 이익을 얻는가\"를 묻습니다. 같은 회사를 보더라도 두 질문이 다른 종류의 답을 만들어내요. M&A에서 FDD가 표준이 된 이유가 거기에 있어요."
                : "Both cases land on the same point — audit and FDD ask different questions. Audit asks 'is this assumption reasonable, does it conform to GAAP?' FDD asks 'how does it diverge from reality, and who benefits from this assumption?' Looking at the same company, the two questions produce different kinds of answers. That's why FDD is standard in M&A."}</p>
            </div>
          </motion.section>

          {/* Series complete */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "시리즈 종료" : "Series complete"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                {ko ? "FDD 시리즈 — 6챕터 완결" : "FDD series — six chapters wrapped"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Ch.1 SPA 가격에 박히는 FDD, Ch.2 QoE 실무, Ch.3 NWC normalization, Ch.4 Hidden Liabilities, Ch.5 Hertz 회계 분식, Ch.6 Tesco 스캔들. 이론에서 실무, 그리고 실제 사건까지 따라온 6단계."
                  : "Ch.1 FDD into the SPA price, Ch.2 QoE practice, Ch.3 NWC normalization, Ch.4 Hidden Liabilities, Ch.5 Hertz restatement, Ch.6 Tesco scandal. Six steps from theory to practice to real events."}
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
