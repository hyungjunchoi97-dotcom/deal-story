/**
 * FDD 시리즈 Ch.4 — Hidden Liabilities & Off-Balance-Sheet 발굴
 *
 * 톤 가이드 (FDD Ch.1·2·3 / Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: Hidden liability 카탈로그 · 산업별 hot spot 매트릭스 · Indemnification mechanics · R&W vs Indemnification 비교
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

const SLUG = "fdd-ch04-hidden-liabilities";
const ACCENT = "#a855f7";
const RED = "#dc2626";
const AMBER = "#f59e0b";
const GREEN = "#16a34a";

// Hidden liability 카탈로그
type RiskLevel = "high" | "med" | "low";
const HIDDEN_BUCKETS: Array<{
  koName: string; enName: string;
  koDesc: string; enDesc: string;
  koMethod: string; enMethod: string;
  risk: RiskLevel;
}> = [
  {
    koName: "Underfunded Pension · OPEB",
    enName: "Underfunded pension · OPEB",
    koDesc: "DB 연금·퇴직후 의료의 fair value 부족분",
    enDesc: "Shortfall between fair value and DB pension / OPEB obligations",
    koMethod: "Actuarial report와 plan asset 비교",
    enMethod: "Compare actuarial reports against plan assets",
    risk: "high",
  },
  {
    koName: "Tax Exposure",
    enName: "Tax exposure",
    koDesc: "Transfer pricing, uncertain tax position, sales tax nexus",
    enDesc: "Transfer pricing, uncertain tax positions, sales tax nexus",
    koMethod: "FIN 48 reserve + 세무 자료 cross-check",
    enMethod: "FIN 48 reserves + cross-check tax filings",
    risk: "high",
  },
  {
    koName: "Litigation & Claims",
    enName: "Litigation & claims",
    koDesc: "계류 중 소송 + reasonably possible 청구",
    enDesc: "Pending litigation + reasonably possible claims",
    koMethod: "Counsel letter, claim register 검토",
    enMethod: "Counsel letters, claim register review",
    risk: "high",
  },
  {
    koName: "Environmental Remediation",
    enName: "Environmental remediation",
    koDesc: "토양·지하수 오염 복구, ARO (asset retirement)",
    enDesc: "Soil/groundwater remediation, asset retirement obligations",
    koMethod: "Phase I/II 환경 평가 보고서",
    enMethod: "Phase I/II environmental assessment reports",
    risk: "high",
  },
  {
    koName: "Warranty · Product Liability",
    enName: "Warranty · product liability",
    koDesc: "보증 의무, recall, defect 비용 reserve",
    enDesc: "Warranty obligations, recall costs, defect reserves",
    koMethod: "과거 claim 추이 + 보증 정책 검토",
    enMethod: "Historical claim trends + warranty policy review",
    risk: "med",
  },
  {
    koName: "Customer Rebates · Returns",
    enName: "Customer rebates · returns",
    koDesc: "거래량 rebate, return reserve, gift card breakage",
    enDesc: "Volume rebates, return reserves, gift card breakage",
    koMethod: "계약 조건 + historical 회수율",
    enMethod: "Contract terms + historical recovery rates",
    risk: "med",
  },
  {
    koName: "Customer Concentration",
    enName: "Customer concentration",
    koDesc: "Top 5 고객 매출 비중과 계약 갱신 risk",
    enDesc: "Top-5 customer concentration and contract renewal risk",
    koMethod: "Revenue by customer + 계약 만기 분석",
    enMethod: "Revenue by customer + contract maturity profile",
    risk: "med",
  },
  {
    koName: "Off-Balance-Sheet Lease (Pre-ASC 842)",
    enName: "Off-B/S lease (pre-ASC 842)",
    enMethod: "Notes disclosure + 임대 contract roll-forward",
    koMethod: "주석 공시 + 임대계약 roll-forward",
    koDesc: "구 GAAP 시절 미계상 operating lease (소급 적용 시)",
    enDesc: "Operating leases not capitalized under legacy GAAP (when retroactive)",
    risk: "med",
  },
  {
    koName: "Employee Misclassification",
    enName: "Employee misclassification",
    koDesc: "Gig worker·계약직을 1099로 처리 (W-2 의무 회피)",
    enDesc: "Gig/contractors filed as 1099 to avoid W-2 obligations",
    koMethod: "Workforce 구조 + 노동법 sector 자문",
    enMethod: "Workforce structure + employment-law sector review",
    risk: "med",
  },
  {
    koName: "IP / Indemnification 의무",
    enName: "IP / indemnification obligations",
    koDesc: "고객 계약상 IP 침해 indemnification 조항",
    enDesc: "IP-infringement indemnification clauses in customer contracts",
    koMethod: "Master agreement 표준 조항 검토",
    enMethod: "Review of standard master-agreement clauses",
    risk: "low",
  },
];

// 산업별 hot spot 매트릭스
const INDUSTRIES = ["Manufacturing", "Retail", "SaaS", "Healthcare", "Energy"] as const;
const HOTSPOT_ROWS: Array<{ koLabel: string; enLabel: string; cells: ("high" | "med" | "low" | "na")[] }> = [
  { koLabel: "Pension · OPEB",         enLabel: "Pension · OPEB",         cells: ["high", "med", "low", "med", "high"] },
  { koLabel: "Warranty · Product",     enLabel: "Warranty · product",     cells: ["high", "med", "na",  "low", "low"] },
  { koLabel: "Environmental · ARO",    enLabel: "Environmental · ARO",    cells: ["high", "low", "na",  "low", "high"] },
  { koLabel: "Customer Concentration", enLabel: "Customer concentration", cells: ["med",  "low", "high", "med", "high"] },
  { koLabel: "Lease (Off-B/S)",         enLabel: "Lease (off-B/S)",         cells: ["med",  "high","low", "med", "med"]  },
  { koLabel: "Tax · Transfer Pricing", enLabel: "Tax · transfer pricing", cells: ["med",  "low", "high", "med", "med"]  },
  { koLabel: "Litigation · Recall",    enLabel: "Litigation · recall",    cells: ["high", "med", "low", "high","med"]  },
];

// Indemnification mechanics — 가상의 deal 예시
// EV $500M 기준
const INDEM = {
  ev: 500,
  basketPct: 0.005,    // 0.5% of EV
  capPct: 0.20,         // 20% of EV
  escrowPct: 0.10,      // 10% of EV
  basket: 2.5,
  cap: 100,
  escrow: 50,
};

// R&W vs 전통 indemnification 비교
const RW_COMPARE = [
  {
    koItem: "보상 한도 (Cap)",
    enItem: "Cap",
    koTrad: "Purchase Price의 10-30% (매도인 자체 보증)",
    enTrad: "10-30% of purchase price (seller self-insures)",
    koRw: "보통 Purchase Price의 10% (보험사가 risk 인수)",
    enRw: "Typically 10% of purchase price (insurer takes the risk)",
  },
  {
    koItem: "Survival 기간",
    enItem: "Survival period",
    koTrad: "General reps 12-18개월, fundamental·tax 7년+",
    enTrad: "General reps 12-18 months, fundamental/tax 7 years+",
    koRw: "보험 정책 기간 (일반 3년, 세무 6-7년)",
    enRw: "Policy term (general 3 years, tax 6-7 years)",
  },
  {
    koItem: "Escrow 요구",
    enItem: "Escrow requirement",
    koTrad: "Purchase Price 5-15% 묶어둠",
    enTrad: "5-15% of purchase price held back",
    koRw: "최소 또는 없음 (\"clean exit\")",
    enRw: "Minimal or none ('clean exit')",
  },
  {
    koItem: "매도인 입장",
    enItem: "Seller perspective",
    koTrad: "Closing 후에도 risk 보유",
    enTrad: "Carries risk after closing",
    koRw: "Closing 시점에 책임 종결",
    enRw: "Closing day = full release",
  },
  {
    koItem: "매수인 입장",
    enItem: "Buyer perspective",
    koTrad: "매도인 신용 risk가 보상의 한계",
    enTrad: "Seller credit risk caps recovery",
    koRw: "보험사가 지급 — 매도인 신용 risk와 무관",
    enRw: "Insurer pays — independent of seller credit",
  },
  {
    koItem: "비용",
    enItem: "Cost",
    koTrad: "별도 비용 없음 (가격에 reflected)",
    enTrad: "No separate cost (reflected in price)",
    koRw: "Premium 0.8-1.5% of policy limit",
    enRw: "Premium 0.8-1.5% of policy limit",
  },
  {
    koItem: "사용 빈도",
    enItem: "Usage frequency",
    koTrad: "전통적 — 모든 deal의 default",
    enTrad: "Traditional — default in all deals",
    koRw: "PE deal 90%+, strategic deal 60%+",
    enRw: "90%+ of PE deals, 60%+ of strategic deals",
  },
];

const riskBadge = (r: RiskLevel) => {
  if (r === "high") return { label: "High", bg: RED + "1f", color: RED, border: RED + "80" };
  if (r === "med") return { label: "Med", bg: AMBER + "1f", color: AMBER, border: AMBER + "80" };
  return { label: "Low", bg: GREEN + "1f", color: GREEN, border: GREEN + "80" };
};

const hotspotCell = (level: "high" | "med" | "low" | "na") => {
  if (level === "high") return { color: RED, alpha: 0.85, label: "High" };
  if (level === "med") return { color: AMBER, alpha: 0.6, label: "Med" };
  if (level === "low") return { color: "#94a3b8", alpha: 0.35, label: "Low" };
  return { color: "#cbd5e1", alpha: 0, label: "—" };
};

export default function MaFdd04Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.4" : "FDD Series · Ch.4"}</span>
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

          {/* § 1 — Hidden liability가 왜 가장 위험한가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Hidden liability — closing 후에 등장하면 매수인이 다 떠안는다" : "Hidden liabilities — if they appear post-closing, the buyer eats them"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "EBITDA 조정과 NWC 조정이 잡는 건 closing 시점에 \"숫자로 잡혀 있는\" 항목들이에요. Ch.4에서 볼 건 다른 종류의 risk입니다 — 재무제표 어디에도 안 나와 있거나, 주석 한 줄로만 언급되거나, 아예 disclosure 자체가 없는 잠재 부채들."
                : "Ch.2's EBITDA and Ch.3's NWC adjustments handle items already 'on the page' at closing. This chapter is about a different kind of risk — liabilities that aren't on the financial statements at all, sit hidden in one line of footnotes, or aren't disclosed in the first place."}</p>
              <p>{ko
                ? "이런 항목이 가장 위험한 이유는 단순해요. Closing 후에 발견됐을 때 buyer가 그대로 떠안기 때문이에요. 회사를 인수하면 회사가 가진 모든 부채와 잠재 의무까지 같이 넘어오는 게 원칙이고, \"몰랐다\"는 이유로 매도인에게 돌려보낼 수 없습니다. 그래서 closing 전에 모두 발굴해서 가격에 반영하거나, indemnification 조항으로 매도인이 책임지도록 못박아야 해요."
                : "Why these are the most dangerous is simple — once found after closing, the buyer eats them. Buying a company means inheriting every liability and contingent obligation it holds, and 'we didn't know' isn't a return ticket to the seller. So everything has to surface before closing — either priced in, or pinned on the seller through indemnification."}</p>
              <p>{ko
                ? "그래서 SPA에는 두 층의 방어막이 들어가요. 첫째가 indemnification — 매도인이 representations & warranties (R&W) 를 어겼을 때 정해진 한도 안에서 보상하는 의무. 둘째가 R&W insurance — 그 indemnification cap을 보험으로 대체하는 mechanism이에요. 둘 다 FDD가 발견한 hidden liability를 \"누가 결국 부담하는가\"로 연결해주는 장치입니다."
                : "The SPA layers two defenses. One, indemnification — the seller's obligation to compensate within a defined cap if it breaches reps & warranties. Two, R&W insurance — a mechanism that replaces the indemnification cap with an insurance policy. Both wire FDD's findings into 'who actually bears it.'"}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Hidden liability 카탈로그 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Hidden liability 카탈로그 — 10개 buckets" : "Hidden liability catalog — 10 buckets"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FDD가 hidden liability를 찾을 때 체크하는 표준 항목이 대략 10개로 정리돼요. 각각이 어느 deal에서나 나오는 건 아니고, 산업과 회사 특성에 따라 어떤 항목이 hot spot이 되는지가 달라요. 그래도 이 10개는 buy-side FDD가 들어가면 \"이 회사에 이게 있나\" 라고 한 번씩은 확인하는 표준 list입니다."
                : "FDD's standard checklist of hidden liabilities lands at roughly ten buckets. Not every item shows up in every deal — industry and company specifics shift which ones become hot spots. But these ten get a 'does this company have any of this?' check on every buy-side FDD."}</p>
            </div>

            {/* Catalog cards */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "표준 hidden liability 10 buckets — risk level과 발굴 방법" : "Standard hidden liability buckets — risk level and discovery method"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 bucket의 위험도와 FDD가 검증하는 표준 방법." : "Risk level per bucket and the standard FDD discovery technique."}
              </p>
              <div className="space-y-3">
                {HIDDEN_BUCKETS.map((b, i) => {
                  const badge = riskBadge(b.risk);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                      className="grid grid-cols-[auto_1fr_auto] gap-3 items-start"
                    >
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-1">{String(i + 1).padStart(2, "0")}</span>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? b.koName : b.enName}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mb-1">{ko ? b.koDesc : b.enDesc}</p>
                        <p className="text-[10.5px] leading-snug" style={{ color: ACCENT }}>
                          <span className="font-semibold uppercase tracking-wider text-[9px]">{ko ? "발굴 방법" : "Discovery"}</span>
                          <span className="ml-1.5 text-gray-600 dark:text-gray-400 font-normal">{ko ? b.koMethod : b.enMethod}</span>
                        </p>
                      </div>
                      <span
                        className="text-[9.5px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex-shrink-0 mt-1"
                        style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}
                      >
                        {badge.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "High risk 항목은 가격 협상 또는 specific indemnification으로 직접 다루고, Med는 R&W로 보호, Low는 표준 reps로만 처리하는 게 일반 관행."
                  : "High-risk items typically get repriced or carved into specific indemnities; mediums are handled via R&W; lows ride on standard reps."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 산업별 hot spot */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "산업별 hot spot — 어느 산업에서 어떤 게 터지는가" : "Industry hot spots — which liability lands where"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "같은 hidden liability 항목이라도 산업에 따라 위험도가 완전히 달라져요. 제조업에서는 환경부채와 warranty가 가장 큰 항목이고, SaaS에서는 customer concentration과 IP 의무가 hot spot이에요. Healthcare에서는 의료보험 회수 risk와 regulatory penalty, 에너지 산업에서는 asset retirement obligation이 핵심이고요."
                : "Same liability bucket, completely different risk depending on industry. Manufacturing's hot spots are environmental and warranty. SaaS's are customer concentration and IP obligations. Healthcare's are reimbursement recovery risk and regulatory penalties. Energy's biggest exposure is asset retirement obligations."}</p>
              <p>{ko
                ? "FDD 작업 시작할 때 가장 먼저 하는 게 \"이 산업의 default hot spot이 무엇인가\"를 파악하는 일이에요. 그래야 information request list (IRL) 를 산업에 맞게 조정할 수 있고, 데이터 분석에 들어가기 전에 \"무엇을 의심해야 하는지\"가 명확해집니다."
                : "The first move in any FDD engagement is mapping 'what's the default hot spot for this industry?' That shapes the Information Request List (IRL) and sets the suspicion list before the data work begins."}</p>
            </div>

            {/* Hotspot matrix */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "산업 × Hidden Liability — risk 매트릭스" : "Industry × hidden liability — risk matrix"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "셀의 색이 진할수록 그 산업에서 그 항목이 hot spot." : "Darker cells mark the hot spots for each industry."}
              </p>
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[28%]"></th>
                    {INDUSTRIES.map((ind) => (
                      <th key={ind} className="text-center py-2 px-2 font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">{ind}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {HOTSPOT_ROWS.map((row, ri) => (
                    <tr key={ri} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-middle text-[11.5px] font-medium">{ko ? row.koLabel : row.enLabel}</td>
                      {row.cells.map((cell, ci) => {
                        const c = hotspotCell(cell);
                        return (
                          <td key={ci} className="py-1.5 px-2 text-center align-middle">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.6 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.4, delay: (ri * 5 + ci) * 0.025 }}
                              className="inline-flex items-center justify-center w-12 h-7 rounded text-[9.5px] font-bold"
                              style={{
                                background: cell === "na" ? "transparent" : `${c.color}${Math.round(c.alpha * 255).toString(16).padStart(2, "0")}`,
                                color: cell === "na" ? "#94a3b8" : (cell === "low" ? "#475569" : "#fff"),
                                border: cell === "na" ? "1px dashed #cbd5e1" : "none",
                              }}
                            >
                              {c.label}
                            </motion.div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "예: 제조업이면 환경·warranty·litigation 세 곳이 동시에 high. SaaS면 customer concentration과 tax(transfer pricing)이 main. 한 산업에 high가 3개 이상 겹치면 FDD scope를 그만큼 깊게 들어가야 한다는 신호."
                  : "Manufacturing lights up environmental, warranty, and litigation simultaneously. SaaS is dominated by customer concentration and tax/transfer pricing. Three or more 'high' cells in one column signals FDD needs to go deeper there."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Indemnification mechanics */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Indemnification mechanics — basket · cap · escrow" : "Indemnification mechanics — basket, cap, escrow"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Indemnification은 SPA에서 가장 길고 가장 다투는 조항이에요. \"매도인이 representations & warranties를 어겼을 때 매수인에게 보상한다\"는 큰 골격은 단순한데, 실제 작동은 세 개의 mechanism이 동시에 들어갑니다 — basket, cap, escrow."
                : "Indemnification is the longest, most-fought clause in the SPA. The frame is simple — 'seller compensates buyer for any breach of reps & warranties' — but the actual mechanics layer three pieces: basket, cap, escrow."}</p>
              <p>{ko
                ? "Basket은 \"소액 청구는 받지 않겠다\"는 deductible threshold예요. 보통 purchase price의 0.5-1% 수준으로 잡습니다. EV $500M deal이면 $2.5M-$5M basket. 그보다 작은 단발 claim은 보상 대상이 안 돼요. 이 장치가 있어서 매도인이 자잘한 회계 문제로 끊임없이 시달리는 걸 막을 수 있어요."
                : "The basket is a 'small-claims excluded' deductible threshold — typically 0.5-1% of purchase price. On a $500M EV deal, that's $2.5M-$5M. Single claims below that get rejected. The basket protects sellers from being nibbled to death over minor accounting items."}</p>
              <p>{ko
                ? "Cap은 매도인이 부담할 수 있는 최대 한도. General reps는 purchase price의 10-20%, fundamental reps (소유권·승계 같은 핵심)와 tax는 100%까지 가는 게 보통이에요. 그래서 hidden liability가 cap을 초과하는 규모라면 buyer는 그 초과분을 그대로 떠안는 셈이 됩니다."
                : "The cap sets the seller's maximum exposure. General reps usually 10-20% of purchase price; fundamental reps (ownership, succession) and tax can reach 100%. If a hidden liability exceeds the cap, the buyer absorbs everything above it."}</p>
              <p>{ko
                ? "Escrow는 cap 안에서 일정 금액을 \"실제로 묶어두는\" mechanism이에요. Purchase price의 5-15%를 closing 시점에 escrow account로 이체해두고, 12-24개월간 묶어둡니다. Survival period 동안 claim이 발생하면 그 escrow에서 먼저 지급되고, 남은 금액은 매도인에게 돌려보내요. 매도인 신용 risk를 줄이는 장치입니다."
                : "Escrow physically locks part of the cap. 5-15% of purchase price moves into an escrow account at closing, held for 12-24 months. Claims during the survival period draw from escrow first; whatever's left returns to the seller. This neutralizes seller credit risk."}</p>
            </div>

            {/* Indemnification 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? `Indemnification 구조 — EV $${INDEM.ev}M deal 예시` : `Indemnification structure — example for a $${INDEM.ev}M EV deal`}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Basket → Cap → Escrow. 작은 claim은 통과, 큰 claim은 cap에 부딪히고, escrow가 실제 보장." : "Basket → cap → escrow. Small claims pass; big claims hit the cap; escrow physically backstops."}
              </p>

              <div className="space-y-5">
                {/* Basket */}
                <div className="rounded-lg p-4" style={{ background: AMBER + "0f", border: `1px solid ${AMBER}80` }}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[12px] font-bold" style={{ color: AMBER }}>BASKET (Deductible Threshold)</span>
                    <span className="text-[13px] font-mono font-bold" style={{ color: AMBER }}>${INDEM.basket}M</span>
                  </div>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">
                    {ko ? `Purchase Price의 ${(INDEM.basketPct * 100).toFixed(1)}% — 이 금액 미만의 단발 claim은 보상에서 제외` : `${(INDEM.basketPct * 100).toFixed(1)}% of purchase price — individual claims below this are excluded`}
                  </p>
                </div>

                {/* Cap with escrow inside */}
                <div className="rounded-lg p-4 relative" style={{ background: ACCENT + "0f", border: `1px solid ${ACCENT}80` }}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[12px] font-bold" style={{ color: ACCENT }}>CAP (보상 최대 한도)</span>
                    <span className="text-[13px] font-mono font-bold" style={{ color: ACCENT }}>${INDEM.cap}M</span>
                  </div>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug mb-3">
                    {ko ? `Purchase Price의 ${(INDEM.capPct * 100).toFixed(0)}% — general reps 기준. Fundamental·tax는 별도 cap` : `${(INDEM.capPct * 100).toFixed(0)}% of purchase price — general reps cap. Fundamental and tax sit on separate caps`}
                  </p>

                  {/* Visual bar showing cap with escrow portion */}
                  <div className="h-7 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden flex relative">
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={VP}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="h-full text-white text-[10px] font-bold flex items-center justify-center"
                      style={{ width: `${(INDEM.escrow / INDEM.cap) * 100}%`, background: ACCENT, transformOrigin: "left" }}
                    >
                      Escrow ${INDEM.escrow}M
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={VP}
                      transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                      className="h-full text-white text-[10px] font-bold flex items-center justify-center"
                      style={{ width: `${((INDEM.cap - INDEM.escrow) / INDEM.cap) * 100}%`, background: ACCENT + "60", transformOrigin: "left" }}
                    >
                      {ko ? "추가 보상 (매도인 신용)" : "Additional (seller credit)"}
                    </motion.div>
                  </div>
                  <p className="mt-2 text-[10px] text-gray-500 dark:text-gray-400 leading-snug">
                    {ko ? `Escrow $${INDEM.escrow}M (Purchase Price의 ${(INDEM.escrowPct * 100).toFixed(0)}%)이 12-24개월간 실제로 묶여 있고, 나머지 cap은 매도인 신용 risk` : `$${INDEM.escrow}M (${(INDEM.escrowPct * 100).toFixed(0)}% of purchase price) escrowed for 12-24 months; the rest of the cap relies on seller credit`}
                  </p>
                </div>

                {/* Above the cap */}
                <div className="rounded-lg p-4" style={{ background: RED + "0f", border: `1px dashed ${RED}80` }}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[12px] font-bold" style={{ color: RED }}>{ko ? `CAP 초과분 — 매수인 부담` : `Above the cap — buyer eats it`}</span>
                    <span className="text-[12px] font-mono" style={{ color: RED }}>{ko ? `Hidden liability > $${INDEM.cap}M` : `Hidden liability > $${INDEM.cap}M`}</span>
                  </div>
                  <p className="text-[10.5px] text-gray-600 dark:text-gray-400 leading-snug">
                    {ko ? "예: $150M 환경 책임 발견되면 $100M은 매도인에게서 회수, $50M은 buyer 손실. Cap 협상이 그렇게 치열한 이유." : "If a $150M environmental claim emerges, $100M comes back from the seller and $50M is buyer loss. That's why the cap negotiation is so heated."}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — R&W insurance */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "R&W Insurance — indemnification cap을 보험으로 대체" : "R&W insurance — replacing the cap with insurance"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "R&W (Representations & Warranties) Insurance는 매도인의 indemnification 의무를 보험사가 대신 인수하는 mechanism이에요. 매수인 입장에서는 매도인의 신용 risk와 무관하게 보험사로부터 직접 보상받을 수 있고, 매도인 입장에서는 closing 시점에 책임이 종결되는 \"clean exit\"이 가능해집니다."
                : "R&W (Representations & Warranties) Insurance has an insurer assume the seller's indemnification obligation. Buyers get to claim from the insurer instead of depending on seller credit; sellers get a 'clean exit' — closing day terminates their responsibility."}</p>
              <p>{ko
                ? "지난 10년간 R&W의 사용이 급격히 늘었어요. PE 매도인은 portfolio company를 exit하면서 LP에게 빠르게 distribute하고 싶으니 R&W를 거의 표준으로 쓰고 (PE deal의 90% 이상이 R&W 사용), strategic seller도 점점 받아들이는 추세입니다. 보험사가 인수하는 risk는 deal 직접 당사자 간의 신뢰 문제와 별개라, 협상 dynamics를 단순화시키는 효과도 있어요."
                : "R&W use has surged over the last decade. PE sellers want speedy LP distributions after exiting portfolio companies, so they use R&W almost by default (90%+ of PE deals). Strategic sellers are adopting it too. Insurers absorbing the risk decouples it from buyer-seller trust dynamics, simplifying the negotiation."}</p>
              <p>{ko
                ? "보험사는 정책 발행 전에 자체 due diligence를 진행하는데, FDD report를 그대로 input으로 받아요. 그래서 FDD가 hidden liability를 어떻게 발굴하고 어떻게 quantify했는지가 R&W 보험사의 underwriting에 직접 영향을 미쳐요. FDD 작업의 quality가 보험료에도 반영되는 셈입니다."
                : "Before issuing the policy, the insurer runs its own DD and uses the FDD report directly as input. So how FDD surfaces and quantifies hidden liabilities feeds straight into R&W underwriting. FDD quality shows up in the premium."}</p>
            </div>

            {/* R&W vs Traditional 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "전통적 Indemnification vs R&W Insurance" : "Traditional indemnification vs R&W insurance"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "같은 deal에서 어느 mechanism을 쓰느냐가 closing 후 risk 구조를 바꿉니다." : "Choosing the mechanism reshapes post-close risk."}
              </p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[22%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold text-gray-900 dark:text-gray-100">{ko ? "전통적 Indemnification" : "Traditional indemnification"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: ACCENT }}>{ko ? "R&W Insurance" : "R&W Insurance"}</th>
                  </tr>
                </thead>
                <tbody>
                  {RW_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.koTrad : c.enTrad}</td>
                      <td className="py-2 align-top text-gray-700 dark:text-gray-300">{ko ? c.koRw : c.enRw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "R&W가 만능은 아니에요. 보험은 known issue(이미 알려진 risk)를 보장하지 않습니다. FDD가 발견한 hidden liability 중 quantify된 항목은 보통 specific indemnification으로 따로 빼서 다루고, unknown risk만 R&W로 흡수해요."
                  : "R&W isn't a catch-all. Insurance doesn't cover known issues. FDD-quantified items typically get carved into specific indemnities; only unknown risks ride the R&W policy."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "여기까지가 FDD의 표준 작업 4단계예요. SPA가 어떻게 작동하는지(Ch.1), Adjusted EBITDA를 어떻게 만드는지(Ch.2), NWC를 어떻게 정상화하는지(Ch.3), Hidden liability를 어떻게 발굴하는지(Ch.4). 다음 두 챕터에서는 이 작업들이 실제 거래에서 깨지면 어떤 일이 벌어지는지를 케이스로 봅니다. Hertz의 5년치 회계 분식과 Tesco의 £263M 회계 스캔들."
                : "That closes the FDD workflow. How the SPA actually runs (Ch.1), how to land Adjusted EBITDA (Ch.2), how to normalize NWC (Ch.3), how to surface hidden liabilities (Ch.4). The last two chapters look at what happens when this work breaks in real deals — Hertz's five-year restatement and Tesco's £263M accounting scandal."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.5 — {ko ? "Case · Hertz의 회계 분식 (2014-2015)" : "Case · the Hertz accounting restatement (2014-2015)"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "PwC가 5년치 재무제표를 다시 작성하게 만든 vehicle depreciation 가정. CEO 사임, $235M 누적 오류, 주가 −60%. FDD가 들어갔다면 어디서 잡을 수 있었는지."
                  : "The vehicle depreciation assumption that forced PwC to restate five years of financials. CEO out, $235M of cumulative error, stock down 60%. Where FDD could have caught it."}
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
