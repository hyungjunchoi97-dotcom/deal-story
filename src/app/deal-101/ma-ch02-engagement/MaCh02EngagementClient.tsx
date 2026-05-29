/**
 * Ch.2 — Engagement Letter & Fee Economics
 * BB·MM·Boutique의 fee 구조와 engagement letter 메커니즘
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import MaChapterNav from "@/components/ma/MaChapterNav";
import PhaseBadge from "@/components/ma/PhaseBadge";
import VariantSnapshot from "@/components/ma/VariantSnapshot";
import SeriesNav from "@/components/SeriesNav";
import { getMaChapterBySlug, getMaSeriesNav, getPhase } from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const SLUG = "ma-ch02-engagement";

// ── Lehman Formula calculation ──────────────────────────────────────
// Classic Lehman: 5% of first $1M, 4% next $1M, 3% next $1M, 2% next $1M, 1% above $4M
function classicLehman(dealValueM: number): number {
  let fee = 0;
  let remaining = dealValueM;
  const tiers = [0.05, 0.04, 0.03, 0.02];
  for (let i = 0; i < tiers.length; i++) {
    const slice = Math.min(remaining, 1);
    fee += slice * tiers[i];
    remaining -= slice;
    if (remaining <= 0) break;
  }
  if (remaining > 0) fee += remaining * 0.01;
  return fee;
}

// Modern tiered sell-side fee (approximate BB practice)
function modernSellSideFee(dealValueM: number): { feeM: number; effectivePct: number } {
  // Minimum retainer + milestone if very small deal
  if (dealValueM < 100) {
    const fee = Math.max(2, dealValueM * 0.015);
    return { feeM: fee, effectivePct: fee / dealValueM };
  }
  // Tiered: 1.5% to $500M, 1% to $2B, 0.6% to $10B, 0.4% above
  let fee = 0;
  let r = dealValueM;
  const tier1 = Math.min(r, 500); fee += tier1 * 0.015; r -= tier1;
  const tier2 = Math.min(r, 1500); fee += tier2 * 0.010; r -= tier2;
  const tier3 = Math.min(r, 8000); fee += tier3 * 0.006; r -= tier3;
  if (r > 0) fee += r * 0.004;
  return { feeM: fee, effectivePct: fee / dealValueM };
}

// Fee Tier Data
const FEE_TIERS = [
  { dealSizeKo: "$100M 이하",  dealSizeEn: "Under $100M",   feeKo: "1.5-2.0%",   feeEn: "1.5-2.0%",  noteKo: "MM·boutique 지배. Min retainer 큼", noteEn: "MM/boutique territory. Higher relative retainer" },
  { dealSizeKo: "$100M-500M",  dealSizeEn: "$100M-500M",    feeKo: "1.0-1.5%",   feeEn: "1.0-1.5%",  noteKo: "MM 핵심 영역",                       noteEn: "MM sweet spot" },
  { dealSizeKo: "$500M-2B",    dealSizeEn: "$500M-2B",      feeKo: "0.75-1.0%",  feeEn: "0.75-1.0%", noteKo: "BB·MM 경쟁",                          noteEn: "BB vs MM competition" },
  { dealSizeKo: "$2B-10B",     dealSizeEn: "$2B-10B",       feeKo: "0.5-0.75%",  feeEn: "0.5-0.75%", noteKo: "BB 위주, 멀티-뱅크 syndicate 시작",   noteEn: "BB-dominated, multi-bank syndicates start" },
  { dealSizeKo: "$10B 이상",   dealSizeEn: "$10B+",         feeKo: "0.3-0.5%",   feeEn: "0.3-0.5%",  noteKo: "Mega-deal. 2-3 BB co-advisors 일반적", noteEn: "Mega-deal. 2-3 BB co-advisors common" },
];

// Sell vs Buy vs Fairness Economics
const SIDE_ECONOMICS = [
  {
    side: "Sell-side",
    koLabel: "Sell-side mandate",
    enLabel: "Sell-side mandate",
    successFeeKo: "0.75-1.5% (deal size별 tiered)",
    successFeeEn: "0.75-1.5% (tiered by deal size)",
    retainerKo: "$150-500K, success fee에 credit",
    retainerEn: "$150-500K, credited against success fee",
    milestoneKo: "Signing fee 25-50% credit",
    milestoneEn: "Signing fee 25-50% credited",
    paidKo: "Closing 시 wire — 자금흐름표(Funds flow) 명시",
    paidEn: "Wired at closing — itemized in funds flow memo",
    contingentKo: "Closing 실패 시 success fee 0 (retainer만 지급됨)",
    contingentEn: "No success fee if deal fails to close (retainer kept)",
    color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40",
    chipBg: "bg-blue-100 dark:bg-blue-900/40",
    chipFg: "text-blue-700 dark:text-blue-300",
  },
  {
    side: "Buy-side",
    koLabel: "Buy-side mandate",
    enLabel: "Buy-side mandate",
    successFeeKo: "0.5-1.0% (sell-side 보다 항상 낮음)",
    successFeeEn: "0.5-1.0% (always lower than sell-side)",
    retainerKo: "$200-750K, deal 규모 클수록 높음",
    retainerEn: "$200-750K, larger for bigger mandates",
    milestoneKo: "Identification fee + signing fee 가능",
    milestoneEn: "Identification fee + signing fee both possible",
    paidKo: "Closing 시 인수자가 wire",
    paidEn: "Wired by acquirer at closing",
    contingentKo: "Walk-away 흔함 — 실패해도 retainer + milestone 유지",
    contingentEn: "Walk-aways common — retainer + milestone kept even if failed",
    color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800/40",
    chipBg: "bg-violet-100 dark:bg-violet-900/40",
    chipFg: "text-violet-700 dark:text-violet-300",
  },
  {
    side: "Fairness Opinion",
    koLabel: "Fairness Opinion only",
    enLabel: "Fairness Opinion only",
    successFeeKo: "없음 — flat fee 구조",
    successFeeEn: "None — flat fee structure",
    retainerKo: "Flat $1-3M (deal 규모에 따라)",
    retainerEn: "Flat $1-3M (scales with deal size)",
    milestoneKo: "Opinion delivery 시 절반, board 채택 시 잔여",
    milestoneEn: "Half on opinion delivery, balance on board adoption",
    paidKo: "Outcome 무관 — 의견 제공이 deliverable",
    paidEn: "Outcome-independent — the opinion itself is the deliverable",
    contingentKo: "Deal contingent 아님 — independence를 위해 의도적 분리",
    contingentEn: "Not deal-contingent — intentionally separated to preserve independence",
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40",
    chipBg: "bg-emerald-100 dark:bg-emerald-900/40",
    chipFg: "text-emerald-700 dark:text-emerald-300",
  },
];

// Engagement letter clauses
const EL_CLAUSES = [
  { ko: "Scope",                en: "Scope",                       descKo: "Mandate 범위 명시 — 'sell-side advisor for Project X'",                       descEn: "Defines mandate scope — 'sell-side advisor for Project X'" },
  { ko: "Retainer",             en: "Retainer",                    descKo: "월 또는 분기 단위 fixed fee, 보통 success fee에 credit",                      descEn: "Monthly/quarterly fixed fee, typically credited against success" },
  { ko: "Success Fee",          en: "Success Fee",                 descKo: "Closing 시 지급. % 또는 tiered formula",                                       descEn: "Paid at closing. Percentage or tiered formula" },
  { ko: "Milestone Fees",       en: "Milestone Fees",              descKo: "Signing fee, opinion fee — partial 지급",                                       descEn: "Signing fee, opinion fee — partial payments" },
  { ko: "Tail Period",          en: "Tail Period",                 descKo: "Mandate 종료 후 12-24개월. 그 기간 deal closing 시 success fee 유지",         descEn: "12-24 months post-termination. Success fee survives if deal closes" },
  { ko: "Exclusivity",          en: "Exclusivity",                 descKo: "Sell-side는 sole advisor 일반적, buy-side는 non-exclusive 가능",               descEn: "Sell-side typically sole advisor; buy-side may be non-exclusive" },
  { ko: "Indemnification",      en: "Indemnification",             descKo: "고객이 advisor를 indemnify — 표준 카브아웃 (gross negligence 등)",             descEn: "Client indemnifies advisor — with standard carve-outs (gross negligence, etc.)" },
  { ko: "Conflict / MNPI Wall", en: "Conflict / MNPI Wall",        descKo: "Sign 시 wall 발동 — deal team은 그 회사 trading activity 차단",                 descEn: "Wall goes up at signing — deal team blocked from target's trading activity" },
  { ko: "Termination",          en: "Termination",                 descKo: "Either party 30-60일 notice. Tail 조항 살아남음",                              descEn: "Either party 30-60 days notice. Tail provisions survive" },
  { ko: "Governing Law",        en: "Governing Law",               descKo: "보통 NY law (US), English law (UK·HK 딜)",                                     descEn: "Usually NY law (US), English law (UK/HK deals)" },
];

// FAQ
const FAQS = [
  {
    qKo: "왜 sell-side fee가 buy-side보다 높은가?",
    qEn: "Why are sell-side fees higher than buy-side?",
    aKo: "Sell-side advisor가 사실상 'auction을 디자인하고 가격을 최대화하는' 책임을 지기 때문입니다. 매도자가 받는 추가 1-2%의 premium이 fee에 대비 훨씬 큽니다. Buy-side는 target identification + 협상 지원이 주요 역할이고, 인수가 결정 권한은 acquirer 측에 있어서 advisor의 economic impact가 sell-side만큼 크지 않습니다.",
    aEn: "Sell-side advisors essentially own 'designing the auction and maximizing price' — the extra 1-2% premium they drive for the seller dwarfs the fee. Buy-side roles are mostly target identification + negotiation support, with the acquirer holding final price authority, so the advisor's economic impact is smaller than on sell-side.",
  },
  {
    qKo: "Tail period가 왜 그렇게 중요한가?",
    qEn: "Why does the tail period matter so much?",
    aKo: "Mandate 종료 후에도 그 기간 안에 deal이 closing되면 success fee가 살아남기 때문입니다. 예를 들어 sell-side mandate가 6개월 만에 terminated 됐는데 8개월 후 그 회사가 매각됐다면 — tail period가 12개월이면 advisor는 여전히 fee를 받습니다. 매도자 입장에서는 이게 'tail trap' — advisor 교체가 사실상 불가능해집니다. 그래서 협상에서 tail period 길이 (12 vs 24개월) 와 'covered parties' 정의가 핵심.",
    aEn: "Even after the mandate ends, the success fee survives if a deal closes within the tail window. Example: if a sell-side mandate is terminated at month 6 and the company is sold at month 8, a 12-month tail means the advisor still collects. From the seller's side, this is the 'tail trap' — switching advisors becomes nearly impossible. So the negotiation centers on tail length (12 vs 24 months) and the definition of 'covered parties.'",
  },
  {
    qKo: "$1B 딜에 BB는 정확히 얼마를 받나?",
    qEn: "What does a BB actually collect on a $1B deal?",
    aKo: "전형적인 sell-side mandate 기준 — Retainer $250K · Signing milestone $250K (credit) · Success fee 0.75-1.0% = $7.5-10M. 두 milestone이 success에 credit되니까 실제 수령액은 success fee 만큼 (= $7.5-10M). Closing 안 되면 retainer + signing milestone $500K만 지급됨. Co-advisor가 있는 mega-deal은 fee를 split (보통 50/50 또는 60/40).",
    aEn: "On a typical sell-side mandate: retainer $250K + signing milestone $250K (both credited) + success fee 0.75-1.0% = $7.5-10M. Since milestones credit against success, total at closing equals the success fee (~$7.5-10M). If the deal fails to close, only retainer + milestone = $500K is kept. On mega-deals with co-advisors, fees are split (typically 50/50 or 60/40).",
  },
  {
    qKo: "Lehman formula는 아직도 쓰이는가?",
    qEn: "Is the Lehman formula still used?",
    aKo: "원본 Lehman (5-4-3-2-1) 은 거의 안 쓰입니다 — 1970년대 BB 표준이었지만 deal 규모가 커지면서 percentage가 너무 낮아져서 (큰 deal에서 사실상 1% 미만). 지금은 MM·boutique 일부에서 'Modified Lehman' — 1% 단일률 또는 자체 tiered formula — 가 가끔 쓰이고, BB는 대부분 custom tiered structure로 협상합니다. Lehman은 '시작점 reference' 정도의 의미.",
    aEn: "The original Lehman (5-4-3-2-1) is rarely used today — it was the BB standard in the 1970s, but as deal sizes grew, the effective percentage collapsed (under 1% on large deals). MM and boutiques occasionally use 'Modified Lehman' — a 1% flat or proprietary tiered formula. BBs almost always negotiate custom tiered structures. Lehman now serves as a 'reference starting point,' not a live structure.",
  },
];

export default function MaCh02EngagementClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  // Interactive fee calculator state
  const [dealSizeM, setDealSizeM] = useState(1000); // $1B default
  const { feeM, effectivePct } = modernSellSideFee(dealSizeM);
  const lehmanFee = classicLehman(dealSizeM);

  const formatM = (v: number) => {
    if (v >= 1000) return `$${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}B`;
    return `$${v.toFixed(0)}M`;
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Breadcrumb ── */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Deal 101</Link>
            <span>›</span>
            <Link href={`${base}/ma-ch00-overview`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "M&A 시리즈" : "M&A Series"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Ch.2</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <PhaseBadge phase={phase} lang={lang} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Ch.{chapter.ch} · {chapter.readingMinutes}{ko ? "분" : " min"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">{ko ? chapter.titleKo : chapter.titleEn}</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{ko ? chapter.taglineKo : chapter.taglineEn}</p>
          <p className="mt-3 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">{ko ? chapter.questionKo : chapter.questionEn}</p>
        </section>

        <MaChapterNav currentSlug={SLUG} lang={lang} />

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">
          <VariantSnapshot chapter={chapter} phase={phase} lang={lang} />

          {/* ── § 2.1 Fee Structure Anatomy ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Fee 구조의 3층 — Retainer · Milestone · Success" : "The 3-layer fee stack — Retainer · Milestone · Success"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Engagement letter 의 fee 구조는 거의 항상 세 층으로 쌓입니다. ① Retainer — 월/분기 fixed fee. Mandate 시작과 동시에 발생하며 deal closing 여부와 무관. ② Milestone fees — signing fee, opinion fee 같은 mid-deal trigger. ③ Success fee — closing 시점에 지급되는 큰 덩어리. 보통 retainer + milestone은 success fee에 credit 되므로 closing이 일어나면 최종 지급액은 success fee와 같습니다."
                : "Engagement letter fees are almost always stacked in three layers. (1) Retainer — monthly/quarterly fixed fee. Accrues from mandate start, independent of deal closing. (2) Milestone fees — signing fee, opinion fee, or other mid-deal triggers. (3) Success fee — the big payment at closing. Retainer + milestone typically credit against the success fee, so if closing happens, the total cash to the bank equals the success fee."}</p>
              <p>{ko
                ? "이 구조가 alignment를 만듭니다. Retainer만 받고 사라지면 bank는 deal closing에 신경 쓸 incentive가 없으니까요. 반대로 success-only 구조라면 bank가 cash flow 문제로 작은 mandate를 거절해야 합니다. 3층 구조는 두 문제를 동시에 해결하는 BB 표준."
                : "This structure creates alignment. A retainer-only deal removes the bank's incentive to actually close. A success-only structure forces the bank to reject small mandates due to cash-flow strain. The 3-layer stack — BB standard — solves both."}</p>
            </motion.div>

            {/* Stacked visualization */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "$1B Sell-side Deal — Fee 분해" : "$1B Sell-side Deal — Fee breakdown"}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-3">
                {[
                  { ko: "Retainer", en: "Retainer", amt: 0.25, descKo: "$250K · success에 credit", descEn: "$250K · credits against success", color: "bg-slate-400" },
                  { ko: "Signing milestone", en: "Signing milestone", amt: 0.25, descKo: "$250K · success에 credit", descEn: "$250K · credits against success", color: "bg-slate-500" },
                  { ko: "Success fee", en: "Success fee", amt: 8.5, descKo: "0.85% × $1B = $8.5M", descEn: "0.85% × $1B = $8.5M", color: "" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-32">
                      <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300">{ko ? row.ko : row.en}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500">{ko ? row.descKo : row.descEn}</p>
                    </div>
                    <div className="flex-1 h-7 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(row.amt / 10) * 100}%` }}
                        viewport={VP}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                        className={`h-full flex items-center justify-end pr-2.5 text-[11px] font-bold text-white ${row.color}`}
                        style={!row.color ? { background: phase.accentHex } : {}}
                      >
                        ${row.amt.toFixed(2)}M
                      </motion.div>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? "Closing 시 최종 수령 (milestone credit 적용)" : "Total at closing (after milestone credit)"}</p>
                  <p className="text-xl font-black" style={{ color: phase.accentHex }}>$8.5M</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? "Closing 실패 시 수령" : "Total if deal fails"}</p>
                  <p className="text-[14px] font-bold text-gray-700 dark:text-gray-300">$0.5M</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 2.2 Interactive Fee Calculator ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Fee Calculator — Deal size별 effective %" : "Fee Calculator — effective % by deal size"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Deal size가 커질수록 effective fee % 가 떨어지는 게 핵심. $100M 딜은 1.5% (= $1.5M) 가 합리적이지만 $50B mega-deal에서 1.5%는 $750M — 누구도 그렇게 안 냅니다. 그래서 tiered 구조가 표준이고, 같은 1% deal이라도 deal size별로 실제 수령액은 비선형."
                : "As deal size grows, the effective fee % drops. A $100M deal at 1.5% (= $1.5M) is fair, but 1.5% on a $50B mega-deal would mean $750M — nobody pays that. Tiered structures are standard, and the realized fee scales non-linearly even within a 1% headline."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "인터랙티브: Deal size 슬라이더" : "Interactive: deal size slider"}</p>
              </div>
              <div className="p-5 sm:p-6 space-y-5">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{ko ? "Deal size (EV)" : "Deal size (EV)"}</label>
                    <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{formatM(dealSizeM)}</p>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={50000}
                    step={50}
                    value={dealSizeM}
                    onChange={(e) => setDealSizeM(Number(e.target.value))}
                    className="w-full accent-current"
                    style={{ color: phase.accentHex }}
                  />
                  <div className="flex justify-between text-[9px] text-gray-400 dark:text-gray-500 mt-1">
                    <span>$50M</span><span>$10B</span><span>$50B</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "BB 표준 tiered" : "BB tiered (modern)"}</p>
                    <p className="text-2xl font-black mb-0.5" style={{ color: phase.accentHex }}>{formatM(feeM)}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "실효" : "Effective"} {(effectivePct * 100).toFixed(2)}%</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "고전 Lehman (5-4-3-2-1)" : "Classic Lehman (5-4-3-2-1)"}</p>
                    <p className="text-2xl font-black text-gray-500 dark:text-gray-400 mb-0.5">{formatM(lehmanFee)}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "실효" : "Effective"} {(lehmanFee / dealSizeM * 100).toFixed(2)}%</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{ko
                  ? "Modern BB tiered (예시): 첫 $500M 1.5%, $500M-2B 1.0%, $2B-10B 0.6%, 그 이상 0.4%. 실제 협상은 sector·process·repeat client 여부에 따라 ±0.25%p 정도 변동."
                  : "Modern BB tiered (illustrative): 1.5% on first $500M, 1.0% on $500M-2B, 0.6% on $2B-10B, 0.4% above. Real negotiations move ±0.25%p depending on sector, process, and repeat-client dynamics."}</p>
              </div>
            </motion.div>

            {/* Fee tier table */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Deal size별 일반적 sell-side fee 범위" : "Typical sell-side fee ranges by deal size"}</p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {FEE_TIERS.map((t, i) => (
                  <div key={i} className="p-4 flex items-start gap-4">
                    <div className="flex-shrink-0 w-28">
                      <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? t.dealSizeKo : t.dealSizeEn}</p>
                    </div>
                    <div className="flex-shrink-0 w-20">
                      <p className="text-[14px] font-black" style={{ color: phase.accentHex }}>{ko ? t.feeKo : t.feeEn}</p>
                    </div>
                    <p className="flex-1 text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? t.noteKo : t.noteEn}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 2.3 Sell vs Buy vs Fairness ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Side별 Economics — Sell vs Buy vs Fairness" : "Economics by side — sell vs buy vs fairness"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="mt-2 grid md:grid-cols-3 gap-3">
              {SIDE_ECONOMICS.map((s) => (
                <div key={s.side} className={`p-4 rounded-xl border ${s.color}`}>
                  <p className="text-[11px] font-black text-gray-900 dark:text-gray-100 mb-3">{ko ? s.koLabel : s.enLabel}</p>
                  <dl className="space-y-2 text-[11px]">
                    {[
                      { lblKo: "Success fee",      lblEn: "Success fee",      vKo: s.successFeeKo, vEn: s.successFeeEn },
                      { lblKo: "Retainer",         lblEn: "Retainer",         vKo: s.retainerKo,   vEn: s.retainerEn },
                      { lblKo: "Milestone",        lblEn: "Milestone",        vKo: s.milestoneKo,  vEn: s.milestoneEn },
                      { lblKo: "지급 시점",         lblEn: "Paid",             vKo: s.paidKo,       vEn: s.paidEn },
                      { lblKo: "Contingent?",      lblEn: "Contingent?",      vKo: s.contingentKo, vEn: s.contingentEn },
                    ].map((row, i) => (
                      <div key={i}>
                        <dt className={`inline-block text-[9px] uppercase font-bold tracking-wider rounded px-1.5 py-0.5 mb-0.5 ${s.chipBg} ${s.chipFg}`}>{ko ? row.lblKo : row.lblEn}</dt>
                        <dd className="text-gray-700 dark:text-gray-300 leading-snug">{ko ? row.vKo : row.vEn}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── § 2.4 Tail Period & Conflict ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Tail Period · Exclusivity · MNPI Wall" : "Tail · Exclusivity · MNPI Wall"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Tail period는 가장 협상이 격렬한 조항 중 하나입니다. 보통 BB는 24개월 요구, 매도자는 12개월 협상. 그 기간 안에 어떤 상대방과 closing되더라도 success fee가 살아남는다는 의미. 'Covered parties' 가 누구냐가 또 별도 협상 — 일반적으로 'NDA 체결 또는 mgmt presentation 받은 buyer' 까지 포함. 이 범위 정의가 곧 deal 가치."
                : "Tail period is one of the most negotiated clauses. BBs typically ask for 24 months; sellers push back to 12. Within that window, if the deal closes with any covered party, the success fee survives. 'Covered parties' is itself a separate negotiation — generally 'any party that signed an NDA or attended a management presentation.' This definition is the deal."}</p>
              <p>{ko
                ? "Engagement letter 사인 시점에 MNPI wall이 즉시 발동됩니다. Deal team 멤버는 그 회사 주식의 personal trading이 차단되고, firm 차원에서도 prop trading desk와 advisory side 사이에 정보 차단벽이 세워집니다. Conflict clearance는 sign 직전 며칠 동안 firm legal & compliance가 풀로 회전하는 작업."
                : "MNPI wall goes up the moment the engagement letter is signed. Deal team members are blocked from personal trading in the target's stock, and within the firm, an information barrier goes up between the prop trading desk and the advisory side. Conflict clearance is what firm legal and compliance run at full burn in the days before signing."}</p>
            </motion.div>

            {/* Tail timeline visual */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Tail Trap 시나리오 — 24개월 tail의 의미" : "The tail trap — what a 24-month tail means"}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900">
                <div className="relative h-16 mb-3">
                  <div className="absolute inset-x-0 top-7 h-2 rounded-full bg-gray-100 dark:bg-gray-800" />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={VP}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="absolute left-0 top-7 h-2 rounded-l-full"
                    style={{ background: phase.accentHex }}
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={VP}
                    transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
                    className="absolute right-0 top-7 h-2 rounded-r-full bg-amber-300 dark:bg-amber-600"
                  />
                  <div className="absolute left-[40%] top-3 -translate-x-1/2 text-[9px] font-bold text-gray-500 dark:text-gray-400">
                    {ko ? "Mandate 종료" : "Termination"}
                  </div>
                  <div className="absolute left-0 top-12 text-[10px] font-bold text-gray-700 dark:text-gray-300">{ko ? "Active mandate (10개월)" : "Active mandate (10mo)"}</div>
                  <div className="absolute right-0 top-12 text-[10px] font-bold text-amber-700 dark:text-amber-300">{ko ? "Tail (24개월)" : "Tail (24 months)"}</div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed mt-6">{ko
                  ? "Mandate가 10개월에 terminated 됐어도, 그 후 24개월 안에 covered party 와 closing되면 success fee 발동. 매도자가 advisor 교체로 fee 회피하려는 시도를 막는 장치이자, '아무것도 안 해도 돈 받는다'는 비판의 출처."
                  : "Even if the mandate is terminated at month 10, a closing with any covered party within the next 24 months still triggers the success fee. This is the seller's lock — and the source of 'getting paid for doing nothing' criticism."}</p>
              </div>
            </motion.div>
          </motion.section>

          {/* ── § 2.5 EL Clauses ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Engagement Letter 표준 10개 조항" : "The 10 standard engagement letter clauses"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="mt-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800">
              {EL_CLAUSES.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                  className="p-4 flex items-start gap-3 bg-white dark:bg-gray-900"
                >
                  <span className="flex-shrink-0 w-7 text-[10px] font-mono text-gray-400 dark:text-gray-500 text-right pt-0.5">§{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? c.ko : c.en}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{ko ? c.descKo : c.descEn}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">FAQ</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <div className="space-y-2">
              {FAQS.map((f, i) => (
                <FaqItem key={i} qKo={f.qKo} qEn={f.qEn} aKo={f.aKo} aEn={f.aEn} ko={ko} accentHex={phase.accentHex} />
              ))}
            </div>
          </motion.section>

          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function FaqItem({ qKo, qEn, aKo, aEn, ko, accentHex }: { qKo: string; qEn: string; aKo: string; aEn: string; ko: boolean; accentHex: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border ${open ? "border-gray-300 dark:border-gray-600" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-900 overflow-hidden`}>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-4 flex items-start gap-3">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5" style={{ background: `${accentHex}20`, color: accentHex }}>Q</span>
        <span className="flex-1 text-[14px] font-semibold text-gray-900 dark:text-gray-100">{ko ? qKo : qEn}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><polyline points="6 9 12 15 18 9" /></svg>
        </motion.span>
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 pl-12 text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{ko ? aKo : aEn}</div>
        </motion.div>
      )}
    </div>
  );
}
