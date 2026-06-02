/**
 * FDD 시리즈 Ch.1 — FDD가 SPA 가격에 어떻게 박히는가
 *
 * 톤 가이드 (Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: Workflow timeline · SPA 매핑 다이어그램 · Buy-side vs Sell-side 비교 · Report 단계 funnel
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

const SLUG = "fdd-ch01-overview";
const ACCENT = "#a855f7"; // FDD 시리즈 컬러 — 보라 계열 (Valuation 파랑과 구분)

// FDD 작업 timeline — 60일 표준
const WORKFLOW = [
  {
    koPhase: "Engagement & Kick-off",
    enPhase: "Engagement & kick-off",
    daysStart: 0,
    daysEnd: 5,
    koTasks: "Engagement letter · Scope 합의 · Information Request List (IRL) 발송",
    enTasks: "Engagement letter · scope · Information Request List sent",
  },
  {
    koPhase: "Information 수집",
    enPhase: "Information collection",
    daysStart: 5,
    daysEnd: 18,
    koTasks: "Data room 접근 · 재무제표·총계정원장·관리회계 데이터 추출",
    enTasks: "Data room access · pulling financials, GL, management accounts",
  },
  {
    koPhase: "Management Interview",
    enPhase: "Management interviews",
    daysStart: 18,
    daysEnd: 28,
    koTasks: "CFO/Controller 인터뷰 · 영업·재무·운영팀 Q&A · site visit",
    enTasks: "CFO/Controller interviews · sales/finance/ops Q&A · site visits",
  },
  {
    koPhase: "Analysis & Drafting",
    enPhase: "Analysis & drafting",
    daysStart: 28,
    daysEnd: 50,
    koTasks: "QoE bridge · NWC normalization · Hidden liability 발굴",
    enTasks: "QoE bridge · NWC normalization · hidden liability work",
  },
  {
    koPhase: "Report Issue & Negotiation",
    enPhase: "Report & negotiation",
    daysStart: 50,
    daysEnd: 60,
    koTasks: "Final report 전달 · IB·법무팀과 SPA 협상에 활용",
    enTasks: "Final report delivered · IB and counsel use it in SPA negotiation",
  },
];
const WF_MAX_DAYS = 60;

// FDD finding이 SPA의 어디로 흘러가는가
const SPA_MAPPING = [
  {
    koFinding: "Adjusted EBITDA 정상화",
    enFinding: "Adjusted EBITDA normalization",
    koClause: "Purchase Price (Enterprise Value)",
    enClause: "Purchase Price (Enterprise Value)",
    koEffect: "EV = EBITDA × Multiple. EBITDA $1 조정이 멀티플만큼 가격을 흔든다.",
    enEffect: "EV = EBITDA × multiple. $1 of EBITDA moves price by the multiple.",
  },
  {
    koFinding: "Closing NWC vs Target",
    enFinding: "Closing NWC vs target",
    koClause: "NWC Adjustment (Closing Accounts)",
    enClause: "NWC adjustment (closing accounts)",
    koEffect: "Dollar-for-dollar — target 대비 차이만큼 가격에서 가감.",
    enEffect: "Dollar-for-dollar — the gap moves price 1:1.",
  },
  {
    koFinding: "Net Debt 확정 (실제 부채 - 운영현금)",
    enFinding: "Net Debt confirmation (debt − operating cash)",
    koClause: "Net Debt Adjustment",
    enClause: "Net Debt adjustment",
    koEffect: "Equity Value = EV − Net Debt. 발견된 hidden debt가 그대로 가격 차감.",
    enEffect: "Equity = EV − Net Debt. Newly discovered debt comes straight off price.",
  },
  {
    koFinding: "Hidden Liability (소송·환경·세무)",
    enFinding: "Hidden liabilities (litigation, environmental, tax)",
    koClause: "Indemnification Basket / Cap, R&W Insurance",
    enClause: "Indemnification basket / cap, R&W insurance",
    koEffect: "Cap 한도 내 매도인 보상. R&W 보험으로 cap 보강.",
    enEffect: "Seller indemnifies within the cap. R&W insurance backstops the cap.",
  },
  {
    koFinding: "주요 사업·고객 부정적 변화 가능성",
    enFinding: "Material adverse business / customer trends",
    koClause: "MAC Clause (Material Adverse Change)",
    enClause: "MAC clause (Material Adverse Change)",
    koEffect: "Signing 후 closing 전 발생 시 deal walk 사유.",
    enEffect: "If triggered between signing and closing, buyer can walk.",
  },
];

// Buy-side vs Sell-side (VDD) 비교
const SCOPE_COMPARE = [
  {
    koItem: "누가 fee를 내는가",
    enItem: "Who pays the fee",
    koBuy: "인수자",
    enBuy: "Buyer",
    koSell: "매도인",
    enSell: "Seller",
  },
  {
    koItem: "Report 받는 측",
    enItem: "Report recipient",
    koBuy: "인수자 (IB·법무팀과 공유)",
    enBuy: "Buyer (shared with IB and counsel)",
    koSell: "매도인 → buyer에게 제공",
    enSell: "Seller → distributed to buyers",
  },
  {
    koItem: "Process 길이",
    enItem: "Process length",
    koBuy: "보통 30-60일",
    enBuy: "Typically 30-60 days",
    koSell: "20-40일 (단축)",
    enSell: "20-40 days (compressed)",
  },
  {
    koItem: "Data room 접근",
    enItem: "Data room access",
    koBuy: "제한적 — 매도인 통제하에",
    enBuy: "Restricted — controlled by seller",
    koSell: "매도인이 직접 제공",
    enSell: "Provided directly by seller",
  },
  {
    koItem: "Bias 방향",
    enItem: "Bias direction",
    koBuy: "Findings를 강하게 다투기 (가격 깎기)",
    enBuy: "Press findings hard (push price down)",
    koSell: "Findings를 control (price 보호)",
    enSell: "Manage findings (protect price)",
  },
  {
    koItem: "협상력에 미치는 영향",
    enItem: "Effect on negotiation",
    koBuy: "발견 = 가격 조정 명분",
    enBuy: "Finding = basis to renegotiate price",
    koSell: "선제 disclosure로 negotiation control",
    enSell: "Preemptive disclosure controls the narrative",
  },
];

// Report 단계 funnel
const REPORT_STAGES = [
  {
    koStage: "Red Flag Report",
    enStage: "Red Flag Report",
    koDuration: "1-2주",
    enDuration: "1-2 weeks",
    koPurpose: "Deal-killer 가능성 빠르게 스캔 — 인수자가 deal 진행 여부 결정",
    enPurpose: "Quick scan for deal-killers — buyer decides whether to proceed",
    scope: 30,
  },
  {
    koStage: "Confirmatory Due Diligence",
    enStage: "Confirmatory Due Diligence",
    koDuration: "2-3주",
    enDuration: "2-3 weeks",
    koPurpose: "Red flag에서 잡힌 핵심 이슈 정량화 + 추가 findings",
    enPurpose: "Quantify red-flag issues, surface additional findings",
    scope: 60,
  },
  {
    koStage: "Full Report",
    enStage: "Full Report",
    koDuration: "2-3주",
    enDuration: "2-3 weeks",
    koPurpose: "QoE · NWC · Net Debt · Cash Flow 4개 volume의 최종 deliverable",
    enPurpose: "Final 4-volume deliverable: QoE, NWC, Net Debt, cash flow",
    scope: 100,
  },
];

export default function MaFdd01Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.1" : "FDD Series · Ch.1"}</span>
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

          {/* § 1 — FDD가 왜 필요한가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "FDD는 결국 정보 격차를 메우는 작업이에요" : "FDD closes the information gap"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "M&A에서 매도인은 회사 안을 다 알지만, 매수인은 밖에서 보는 정보만 갖고 있어요. Audit이 끝난 재무제표가 있긴 하지만 audit은 \"GAAP에 맞게 작성됐는가\"를 확인하는 작업이지, \"이 숫자가 이 회사의 진짜 실력을 보여주는가\"를 검증하는 작업이 아닙니다. 그 격차를 메우는 게 Financial Due Diligence, 줄여서 FDD예요."
                : "In M&A, sellers know the inside of the company while buyers see only what's outside. Audited financials exist, but audit only confirms 'this was prepared per GAAP' — not 'this number represents the real earning power of the business.' Closing that gap is Financial Due Diligence — FDD."}</p>
              <p>{ko
                ? "FDD가 묻는 질문은 세 가지로 압축돼요. 첫째, EBITDA가 회사의 정상적인 수익력을 보여주는가. 1회성 이익은 빼고, 누락된 비용은 더해서 normalized number를 만들었을 때 어떻게 나오는가. 둘째, working capital과 net debt이 closing 시점에 어떻게 결정되는가. 셋째, balance sheet에 안 잡힌 잠재 부채가 있는가 — 소송, 세무, 환경, 미계상 lease 같은 것들."
                : "FDD asks three questions. One, does EBITDA reflect the company's normalized earning power — stripping one-time gains, adding back missing costs, what does the number look like? Two, how do working capital and net debt land at closing? Three, are there liabilities hiding off the balance sheet — litigation, tax, environmental, unrecorded leases?"}</p>
              <p>{ko
                ? "이 세 가지가 그대로 SPA(Sale and Purchase Agreement)의 핵심 조항으로 흘러갑니다. 첫째는 Purchase Price를 결정하고, 둘째는 closing 시점의 가격 조정 mechanism으로 들어가고, 셋째는 indemnification(매도인 보상) 조항과 R&W 보험으로 처리돼요. FDD report는 단순한 \"실사 보고서\"가 아니라 SPA 협상의 ammunition이 되는 문서입니다."
                : "All three feed straight into the SPA's core clauses. Question one shapes the purchase price; question two becomes the closing-date price adjustment mechanism; question three runs through indemnification provisions and R&W insurance. An FDD report isn't a 'diligence document' — it's ammunition in the SPA negotiation."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — FDD가 SPA의 어디로 흘러가는가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "FDD finding이 SPA의 어디로 흘러가는가" : "Where each FDD finding lands in the SPA"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FDD가 어떤 발견을 했을 때 그게 가격이나 deal 구조에 어떤 식으로 박히는지를 미리 정리해 두면, 이 시리즈에서 다룰 작업들이 왜 그렇게 깊이 들어가는지가 명확해져요."
                : "Mapping the kinds of findings FDD surfaces to the specific SPA clauses they hit makes the rest of this series easier to follow — it explains why each piece of work goes as deep as it does."}</p>
            </div>

            {/* SPA 매핑 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "FDD Finding → SPA 조항 매핑" : "FDD finding → SPA clause mapping"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "왼쪽 finding이 오른쪽 SPA 조항으로 어떻게 흘러가는지." : "How each finding on the left flows into the SPA clause on the right."}
              </p>
              <div className="space-y-4">
                {SPA_MAPPING.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-3 items-start"
                  >
                    <div className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "FDD Finding" : "FDD finding"}</p>
                      <p>{ko ? m.koFinding : m.enFinding}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center pt-5">
                      <span className="text-gray-300 dark:text-gray-600 text-lg">→</span>
                    </div>
                    <div className="text-[12px] leading-snug">
                      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>{ko ? "SPA 조항" : "SPA clause"}</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{ko ? m.koClause : m.enClause}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? m.koEffect : m.enEffect}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Purchase Price, NWC Adjustment, Net Debt Adjustment, Indemnification, MAC clause — SPA의 거의 모든 가격·리스크 조항이 FDD 결과를 anchor로 삼습니다."
                  : "Purchase price, NWC adjustment, Net Debt adjustment, indemnification, MAC — nearly every price and risk clause in the SPA anchors on FDD findings."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Buy-side vs Sell-side */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Buy-side FDD vs Sell-side (Vendor) FDD" : "Buy-side FDD vs sell-side (Vendor) FDD"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FDD를 누가 시키느냐에 따라 같은 작업이 완전히 다른 성격을 갖게 됩니다. 두 가지 방향이 있어요."
                : "Who commissions the FDD changes the entire character of the work. Two directions."}</p>
              <p>{ko
                ? "Buy-side FDD는 인수자가 직접 Big 4 TS팀을 고용해서 매도인 회사를 검증하는 방식이에요. 표준 형태고, findings는 그대로 가격 협상의 근거가 됩니다. 인수자에 유리한 finding은 강조되고, 매도인 측은 그걸 방어해야 해요."
                : "Buy-side FDD has the buyer hire a Big 4 TS team to scrutinize the target. The standard model — findings become direct ammunition for price negotiation. Findings that favor the buyer get pushed; the seller has to defend against them."}</p>
              <p>{ko
                ? "Sell-side FDD는 흔히 Vendor Due Diligence (VDD)로 부르는데, 매도인이 매각 절차 시작 전에 직접 Big 4 TS팀에게 회사 분석을 의뢰하는 방식이에요. 결과물은 잠재 인수자들에게 배포되고, 인수자는 그 report를 출발점으로 추가 작업만 하게 돼요. 매각 process가 빠르게 굴러가고, 매도인이 narrative를 통제할 수 있다는 게 매도인 입장의 강점입니다. PE가 portfolio 회사를 매각할 때 거의 표준으로 씁니다."
                : "Sell-side FDD — usually called Vendor Due Diligence (VDD) — has the seller commission a Big 4 TS team before the sale process kicks off. The report gets distributed to bidders, who only do supplemental work on top. The process moves faster and the seller controls the narrative. PE firms exiting portfolio companies use VDD almost by default."}</p>
              <p>{ko
                ? "그렇다고 VDD가 \"매도인 편 보고서\"라고만 보면 안 돼요. Big 4 TS팀은 reputation을 걸고 작성하니까 매도인이 원하는 숫자를 그대로 내주진 않아요. 그래도 무엇을 강조하고 무엇을 어떻게 framing하는지는 매도인의 input에 영향을 받습니다. 인수자가 VDD를 받았을 때 \"이 report에서 빠진 게 뭔가\"를 묻는 게 buy-side가 추가로 해야 하는 작업이에요."
                : "That said, VDD isn't a 'seller's report.' Big 4 TS teams have reputations to defend and won't just hand back the seller's preferred numbers. But what gets emphasized and how findings are framed does respond to seller input. When a buyer receives a VDD, the right buy-side follow-up is 'what's missing from this report?'"}</p>
            </div>

            {/* Buy-side vs Sell-side 비교 표 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Buy-side FDD vs Sell-side FDD (VDD)" : "Buy-side FDD vs sell-side FDD (VDD)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "같은 \"FDD 작업\"인데 의뢰인이 누구냐에 따라 성격이 갈립니다." : "Same 'FDD work,' but who commissions it changes everything."}
              </p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[26%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold text-gray-900 dark:text-gray-100">{ko ? "Buy-side FDD" : "Buy-side FDD"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: ACCENT }}>{ko ? "Sell-side FDD (VDD)" : "Sell-side FDD (VDD)"}</th>
                  </tr>
                </thead>
                <tbody>
                  {SCOPE_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.koBuy : c.enBuy}</td>
                      <td className="py-2 align-top text-gray-700 dark:text-gray-300">{ko ? c.koSell : c.enSell}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Big 4 TS 표준 deliverable */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Big 4 TS의 표준 deliverable 단계" : "Big 4 TS standard deliverables"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FDD는 한 번에 끝내는 작업이 아니라 단계별로 깊어집니다. Big 4 Transaction Services 팀들은 대부분 비슷한 3단계 구조를 따라요."
                : "FDD doesn't happen in one go — it deepens in stages. Big 4 Transaction Services teams largely follow the same three-stage cadence."}</p>
              <p>{ko
                ? "첫 단계는 Red Flag Report예요. 1-2주 안에 \"이 deal에 deal-killer가 있는가\"를 빠르게 스캔하는 작업입니다. 인수자는 이 단계 결과를 보고 deal을 계속 진행할지, 가격을 조정할지, 아예 빠질지를 결정해요. Scope가 좁은 만큼 비용도 낮고, 매도인 측에서도 받아들이기 쉽습니다."
                : "Stage one is the Red Flag Report. A 1-2 week sprint asking 'does this deal have a deal-killer?' Buyers use it to decide whether to proceed, renegotiate price, or walk. Narrower scope, lower cost — sellers can accept it more easily too."}</p>
              <p>{ko
                ? "두 번째는 Confirmatory Due Diligence. Red Flag에서 잡힌 핵심 이슈들을 정량화하고, 추가 finding을 발굴하는 단계예요. 보통 2-3주 추가."
                : "Stage two is Confirmatory Due Diligence — quantifying the red-flag issues and surfacing additional findings. Usually adds 2-3 weeks."}</p>
              <p>{ko
                ? "마지막이 Full Report. QoE, NWC, Net Debt, Cash Flow 네 권으로 나뉘는 최종 deliverable입니다. 이 시리즈 Ch.2-4에서 다룰 작업이 사실상 이 Full Report의 각 volume이에요. IB와 법무팀이 이 report를 들고 SPA 협상 테이블에 올라갑니다."
                : "Final stage is the Full Report — a four-volume deliverable: QoE, NWC, Net Debt, cash flow. The work this series covers in Ch.2-4 is essentially these four volumes. IB and legal counsel take it to the SPA negotiation table."}</p>
            </div>

            {/* Report stages funnel */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Report 단계 — 좁게 시작해서 점점 깊어진다" : "Report stages — narrow start, then deepen"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Scope가 단계마다 넓어집니다." : "Scope widens at each stage."}
              </p>
              <div className="space-y-4">
                {REPORT_STAGES.map((s, i) => {
                  const isFinal = i === REPORT_STAGES.length - 1;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                          <span className={`text-[12.5px] font-bold ${isFinal ? "" : "text-gray-900 dark:text-gray-100"}`} style={isFinal ? { color: ACCENT } : {}}>
                            {ko ? s.koStage : s.enStage}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{ko ? s.koDuration : s.enDuration}</span>
                      </div>
                      <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1.5">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${s.scope}%`, background: isFinal ? ACCENT : `${ACCENT}80`, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug ml-7">{ko ? s.koPurpose : s.enPurpose}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 작업 timeline + 시리즈 안내 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "60일짜리 작업의 실제 흐름" : "What the 60 days actually look like"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "표준 buy-side FDD가 engagement 시작부터 final report까지 보통 60일 정도 걸립니다. 그 안에서 다섯 단계로 시간이 나뉘어요. 가장 시간이 많이 들어가는 건 \"Analysis & Drafting\" 단계예요. 거의 한 달이 들어갑니다."
                : "A standard buy-side FDD runs ~60 days from engagement start to final report. The time splits across five phases. The longest is 'Analysis & Drafting' — roughly a month."}</p>
              <p>{ko
                ? "Information 수집 단계가 의외로 시간이 걸려요. 매도인 회사의 management accounts(내부 관리회계 데이터)에 접근하기까지 권한 협의가 필요하고, 그 안에서 GL(General Ledger) raw data를 추출하는 데도 시간이 듭니다. Data room에 올라오는 자료는 사실 마지막 형태로 정리된 거고, FDD가 진짜 원하는 건 그 raw layer예요."
                : "Information collection takes longer than expected. Negotiating access to management accounts takes time, and pulling GL raw data on top of that takes more time. What sits in the data room is the polished version; what FDD actually wants is the raw layer underneath."}</p>
              <p>{ko
                ? "Management interview는 보통 일주일 안팎이 잡히는데, 여기서 결정적인 발견이 나오는 경우가 많아요. 숫자만 봐서는 안 보이는 일관성 깨짐이 CFO·Controller 인터뷰에서 드러나는 일이 흔합니다."
                : "Management interviews usually take about a week, but they often surface the most decisive findings. Things that don't show in the numbers — inconsistencies, business model nuances — come out when CFOs and controllers are pressed in person."}</p>
            </div>

            {/* 60일 작업 timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "표준 Buy-side FDD 작업 흐름 — 60일" : "Standard buy-side FDD workflow — 60 days"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Gantt 형태로 각 단계의 timing." : "Phase timing in a Gantt-style view."}
              </p>
              <div className="space-y-3">
                {WORKFLOW.map((w, i) => {
                  const leftPct = (w.daysStart / WF_MAX_DAYS) * 100;
                  const widthPct = ((w.daysEnd - w.daysStart) / WF_MAX_DAYS) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? w.koPhase : w.enPhase}</span>
                        </div>
                        <span className="text-[10.5px] font-mono text-gray-500 dark:text-gray-400">
                          Day {w.daysStart}–{w.daysEnd}
                        </span>
                      </div>
                      <div className="relative h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{ left: `${leftPct}%`, width: `${widthPct}%`, background: ACCENT, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mt-1 ml-7 leading-snug">{ko ? w.koTasks : w.enTasks}</p>
                    </div>
                  );
                })}
              </div>
              {/* X axis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                <span>Day 0</span>
                <span>Day 15</span>
                <span>Day 30</span>
                <span>Day 45</span>
                <span>Day 60</span>
              </div>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "다음 챕터부터 무엇을 다루나" : "What the next chapters cover"}</p>
              <p>{ko
                ? "이 시리즈의 Ch.2-4는 Full Report의 핵심 volume들을 하나씩 풀어요. Ch.2가 Quality of Earnings — Reported EBITDA를 Adjusted EBITDA로 어떻게 가져가는지, 어디서 매도인의 trick이 등장하는지. Ch.3가 Net Working Capital normalization — closing 시점 가격 조정이 어떻게 dollar-for-dollar로 굴러가는지. Ch.4가 Hidden Liabilities — balance sheet에 안 잡힌 잠재 부채를 어떻게 발굴하는지."
                : "Ch.2-4 unpack the core volumes of the Full Report one by one. Ch.2 is Quality of Earnings — how Reported EBITDA gets walked to Adjusted EBITDA, and where the seller's tricks show up. Ch.3 is Net Working Capital normalization — how the closing-date adjustment runs dollar-for-dollar. Ch.4 is Hidden Liabilities — surfacing the obligations that aren't on the balance sheet."}</p>
              <p>{ko
                ? "Ch.5-6은 case 챕터예요. Hertz의 5년치 회계 분식 (2014-2015)과 Tesco의 £263M 회계 스캔들 (2014). 둘 다 audit이 놓쳤고 FDD가 들어갔다면 잡힐 수도 있었던 신호들이 있었던 케이스입니다."
                : "Ch.5-6 are case chapters. Hertz's five-year accounting restatement (2014-2015) and Tesco's £263M accounting scandal (2014). Both slipped past audit; both left signals an FDD might have caught."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.2 — {ko ? "Quality of Earnings (QoE) 실무" : "Quality of Earnings (QoE) in practice"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Reported EBITDA에서 Adjusted EBITDA로 가는 길에 어떤 add-back과 deduction이 들어가는지, 매도인이 자주 쓰는 trick은 어떤 것들인지를 bridge 형태로 따라갑니다."
                  : "Walking the bridge from Reported EBITDA to Adjusted EBITDA — which add-backs and deductions show up, and which moves are the seller's standard tricks."}
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
