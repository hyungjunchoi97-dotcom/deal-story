"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { DEAL_CATEGORY_LABEL, DEAL_CATEGORY_COLOR, type DealCategory } from "@/lib/types";
import FinancialsChart from "@/components/deal/FinancialsChart";
import OwnershipDiagram from "@/components/deal/OwnershipDiagram";
import AnimatedBar from "@/components/deal/AnimatedBar";
import AdvisorsSection from "@/components/deal/AdvisorsSection";
import Tombstone from "@/components/deal/Tombstone";
import ShareButtons from "@/components/deal/ShareButtons";
import MetricCard from "@/components/deal/MetricCard";
import CompanyLogo from "@/components/deal/CompanyLogo";
import GovernanceOverviewSection from "@/components/deal/GovernanceOverviewSection";
import ControlBattleSection from "@/components/deal/ControlBattleSection";
import { HL } from "@/components/deal/HighlightText";
import RestructuringSection from "@/components/deal/RestructuringSection";
import LevFinSection from "@/components/deal/LevFinSection";
import SyndicatedLoanSection from "@/components/deal/SyndicatedLoanSection";
import { formatDealDate } from "@/lib/format";
import type { DealData } from "@/lib/deal-data";

const EN_CATEGORY_LABEL: Record<DealCategory, string> = {
  ma: "M&A",
  activism: "Activism",
  restructuring: "Restructuring",
  control: "Control Contest",
};

// ── 다국어 레이블 ─────────────────────────────────────────────
const LABELS = {
  ko: {
    backToList: "딜 목록",
    dealsHref: "/deals",
    minRead: "분 읽기",
    background: "배경",
    dealSummary: "딜 요약",
    dealValue: "딜 금액",
    acquirer: "인수자",
    target: "피인수자",
    announced: "발표일",
    closed: "클로징",
    country: "국가",
    dealStructure: "딜 구조",
    preDeal: "딜 이전",
    postDeal: "딜 이후",
    keyTerms: "거래 핵심 조건",
    advisors: "자문사",
    financialsItem: "항목",
    ebitdaMargin: "EBITDA 마진",
    valuationItem: "항목",
    valuationValue: "금액",
    valuationNote: "비고",
    dealRationale: "딜 논리",
    postDealAssessment: "딜 사후 평가",
    overallVerdict: "종합 평가:",
    asOf: "기준",
    positives: "성과 및 긍정 요인",
    risks: "리스크 및 부정 요인",
    editorNote: "편집자 총평",
    conceptsTitle: "이 딜에서 다루는 핵심 개념",
    learnConcept: "개념 학습 →",
    faqTitle: "자주 묻는 질문",
    sources: "출처 및 주석",
    keyPlayers: "주요 플레이어",
    aumBreakdown: "사업 부문별 AUM 구성",
    revenueBreakdown: "사업부문별 매출 구성",
    otherDeals: "← 다른 딜 보기",
    relatedDeals: "함께 읽으면 좋은 딜",
    financialLabels: { revenue:"매출액", cogs:"매출원가", grossProfit:"매출총이익", sga:"판관비", operatingIncome:"영업이익", ebitda:"EBITDA" },
  },
  en: {
    backToList: "All Deals",
    dealsHref: "/en/deals",
    minRead: "min read",
    background: "Background",
    dealSummary: "Deal Summary",
    dealValue: "Deal Value",
    acquirer: "Acquirer",
    target: "Target",
    announced: "Announced",
    closed: "Closed",
    country: "Country",
    dealStructure: "Deal Structure",
    preDeal: "Pre-Deal",
    postDeal: "Post-Deal",
    keyTerms: "Key Terms",
    advisors: "Advisors",
    financialsItem: "Item",
    ebitdaMargin: "EBITDA Margin",
    valuationItem: "Metric",
    valuationValue: "Value",
    valuationNote: "Notes",
    dealRationale: "Deal Rationale",
    postDealAssessment: "Post-Deal Assessment",
    overallVerdict: "Overall Verdict:",
    asOf: "as of",
    positives: "Positives",
    risks: "Risks & Concerns",
    editorNote: "Editor's Note",
    conceptsTitle: "Key Concepts in This Deal",
    learnConcept: "Learn →",
    faqTitle: "Frequently Asked Questions",
    sources: "Sources & Notes",
    keyPlayers: "Key Players",
    aumBreakdown: "AUM by Segment",
    revenueBreakdown: "Revenue by Segment",
    otherDeals: "← All Deals",
    relatedDeals: "Related Deals",
    financialLabels: { revenue:"Revenue", cogs:"COGS", grossProfit:"Gross Profit", sga:"SG&A", operatingIncome:"Operating Income", ebitda:"EBITDA" },
  },
} as const;

type Lang = keyof typeof LABELS;

// ── 핵심 개념 섹션 ────────────────────────────────────────────
function ConceptsSection({ concepts, labels }: { concepts: DealData["concepts"]; labels: (typeof LABELS)[keyof typeof LABELS] }) {
  if (!concepts?.length) return null;
  return (
    <>
      <SectionTitle>{labels.conceptsTitle}</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {concepts.map((c) => (
          <div
            key={c.term}
            className="rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 p-4 group"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              {c.href ? (
                <Link
                  href={c.href}
                  className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline leading-snug"
                >
                  {c.term}
                </Link>
              ) : (
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">{c.term}</span>
              )}
              {c.href && (
                <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0">
                  {labels.learnConcept}
                </span>
              )}
            </div>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// ── FAQ 섹션 ─────────────────────────────────────────────────
function FaqSection({ faq, labels }: { faq: DealData["faq"]; labels: (typeof LABELS)[keyof typeof LABELS] }) {
  if (!faq?.length) return null;
  return (
    <>
      <SectionTitle>{labels.faqTitle}</SectionTitle>
      <div className="space-y-3">
        {faq.map(({ q, a }, i) => (
          <motion.details
            key={i}
            className="group rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 overflow-hidden"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <summary className="flex items-center justify-between gap-3 px-4 py-3.5 cursor-pointer list-none select-none">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">{q}</span>
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="px-4 pb-4 pt-0">
              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                {a}
              </p>
            </div>
          </motion.details>
        ))}
      </div>
    </>
  );
}

// ── 메인 클라이언트 컴포넌트 ─────────────────────────────────
export default function DealPageClient({
  deal,
  lang = "ko",
  relatedDeals = [],
}: {
  deal: DealData;
  lang?: Lang;
  relatedDeals?: Pick<DealData, "slug" | "title" | "category" | "dealSummary">[];
}) {
  const t = LABELS[lang];
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-5 py-10">

          {/* 뒤로가기 */}
          <Link
            href={t.dealsHref}
            className="inline-flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-8 group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform" aria-hidden={true}>
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            {t.backToList}
          </Link>

          {/* ── 1. 회사 로고 + 메타 */}
          <div className="flex items-center gap-5 mb-6">
            <CompanyLogo {...deal.acquirer} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600 flex-shrink-0" aria-hidden={true}>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
            <CompanyLogo {...deal.target} />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${DEAL_CATEGORY_COLOR[deal.category]}`}>
              {(lang === "en" ? EN_CATEGORY_LABEL : DEAL_CATEGORY_LABEL)[deal.category]}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">{deal.industry}</span>
            {deal.closedAt && (
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {formatDealDate(deal.closedAt, lang)}
              </span>
            )}
            <span className="text-xs text-gray-400 dark:text-gray-500">{deal.readingMinutes}{t.minRead}</span>
          </div>

          {/* ── 2. 제목 (풀폭) + 부제 + 공유 버튼 (아래 별도 row) */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight break-keep">
              {deal.title}
            </h1>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400 break-keep">{deal.subtitle}</p>
            <div className="mt-4 flex items-center justify-end border-t border-gray-100 dark:border-gray-800 pt-3">
              <ShareButtons title={deal.title} variant="top" lang={lang} />
            </div>
          </div>

          {/* ── 3. 배경 */}
          <SectionTitle>{t.background}</SectionTitle>
          <div className="space-y-4 text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
            {deal.background.map((para, i) => <p key={i}><HL text={para} /></p>)}
          </div>

          {/* ── 4. 딜 요약 카드 */}
          <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t.dealSummary}</p>
            <dl className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
              {/* 딜 금액 — 항상 전체 너비 */}
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.dealValue}</dt>
                <dd className="text-base font-bold text-amber-500 break-words">{deal.dealSummary.dealValueDisplay}</dd>
              </div>
              {/* 인수자 */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.acquirer}</dt>
                <dd className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words leading-snug">{deal.dealSummary.acquirerName}</dd>
              </div>
              {/* 피인수자 */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.target}</dt>
                <dd className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words leading-snug">{deal.dealSummary.targetName}</dd>
              </div>
              {/* 발표일 */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.announced}</dt>
                <dd className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words">{deal.dealSummary.announcedDisplay}</dd>
              </div>
              {/* 클로징 */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.closed}</dt>
                <dd className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words">{deal.dealSummary.closedDisplay}</dd>
              </div>
              {/* 국가 */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.country}</dt>
                <dd className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 break-words">{deal.dealSummary.country}</dd>
              </div>
            </dl>
          </div>

          {/* ── 5. Executive Summary */}
          <div className="mt-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/15 px-5 py-4">
            <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Executive Summary</p>
            <ul className="space-y-2">
              {deal.executiveSummary.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span><HL text={point} /></span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 6. Industry Overview */}
          <SectionTitle>Industry Overview</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{deal.industryOverview.body}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {deal.industryOverview.metrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} sub={m.sub} />
            ))}
          </div>
          {deal.industryOverview.subBody && (
            <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{deal.industryOverview.subBody}</p>
          )}
          {deal.industryOverview.players && deal.industryOverview.players.length > 0 && (
            <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4">
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{t.keyPlayers}</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {deal.industryOverview.players.map(({ name, role }) => (
                  <div key={name} className="flex gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200 text-[13px]">{name}</span>
                      <span className="text-gray-400 dark:text-gray-500 text-[12px] ml-1">: {role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 7. Company Overview */}
          <SectionTitle>Company Overview: {deal.companyOverview.targetName}</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{deal.companyOverview.body}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {deal.companyOverview.metrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} sub={m.sub} />
            ))}
          </div>
          {deal.companyOverview.aumBreakdown && (
            <>
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{t.aumBreakdown}</p>
              <div className="space-y-2.5 mb-4">
                {deal.companyOverview.aumBreakdown.map(({ name, pct, color }, idx) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">{name}</span>
                    <AnimatedBar pct={pct} color={color} delay={idx * 0.1} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">{pct}%</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {deal.companyOverview.revenueBreakdown && (
            <>
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 mt-6">
                {t.revenueBreakdown} (FY{deal.companyOverview.financials.at(-1)?.year?.replace("FY", "") ?? ""})
              </p>
              <div className="space-y-2.5 mb-1">
                {deal.companyOverview.revenueBreakdown.map(({ name, pct, amt, color }, idx) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">{name}</span>
                    <AnimatedBar pct={pct} color={color} delay={idx * 0.1} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">{pct}%</span>
                    {amt && <span className="text-[11px] text-gray-400 dark:text-gray-500 w-14 text-right">{amt}</span>}
                  </div>
                ))}
              </div>
              {deal.companyOverview.revenueNote && (
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5 mb-2">{deal.companyOverview.revenueNote}</p>
              )}
            </>
          )}

          {/* ── 7-B. Governance Overview (activism 딜 전용) */}
          {deal.governanceOverview && (
            <>
              <SectionTitle>Governance Overview</SectionTitle>
              <GovernanceOverviewSection
                data={deal.governanceOverview}
                lang={lang}
              />
            </>
          )}

          {/* ── 7-C. Control Battle Overview (control 딜 전용) */}
          {deal.controlBattleOverview && (
            <>
              <SectionTitle>
                {lang === "en" ? "Control Battle Overview" : "경영권 분쟁 개요"}
              </SectionTitle>
              <ControlBattleSection data={deal.controlBattleOverview} lang={lang} />
            </>
          )}

          {/* ── 7-D. Restructuring Overview (restructuring 딜 전용) */}
          {deal.restructuringOverview && (
            <>
              <SectionTitle>
                {lang === "en" ? "Restructuring Overview" : "구조조정 개요"}
              </SectionTitle>
              <RestructuringSection data={deal.restructuringOverview} lang={lang} />
            </>
          )}

          {/* ── 8. 딜 구조 */}
          <SectionTitle>{t.dealStructure}</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{deal.dealStructure.body}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            <OwnershipDiagram title={t.preDeal} nodes={deal.dealStructure.preOwnership.nodes} edges={deal.dealStructure.preOwnership.edges} delay={0} />
            <OwnershipDiagram title={t.postDeal} nodes={deal.dealStructure.postOwnership.nodes} edges={deal.dealStructure.postOwnership.edges} delay={0.2} />
          </div>
          <div className="mt-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{t.keyTerms}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] mt-2">
              {deal.dealStructure.keyTerms.map(({ label, value, accent }) => (
                <div key={label}>
                  <span className="text-gray-400 dark:text-gray-500">{label}</span>
                  <span className={`ml-2 font-medium ${accent ? "text-amber-500 font-bold" : "text-gray-700 dark:text-gray-300"}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 자문사 */}
          <SectionTitle>{t.advisors}</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{deal.advisors.body}</p>
          <AdvisorsSection sides={deal.advisors.sides} lang={lang} />
          {deal.advisors.disclaimer && (
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-4">{deal.advisors.disclaimer}</p>
          )}

          {/* ── 9. Financials */}
          <SectionTitle>Financials</SectionTitle>
          {deal.companyOverview.financialsNote && (
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">{deal.companyOverview.financialsNote}</p>
          )}
          <FinancialsChart
            data={deal.companyOverview.financials}
            unit={deal.companyOverview.financialsUnit ?? "mn"}
            currency={deal.companyOverview.financialsCurrency ?? ""}
            lang={lang}
          />
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2.5 pr-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.financialsItem}</th>
                  {deal.companyOverview.financials.map((d) => (
                    <th key={d.year} className="text-right py-2.5 px-2 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{d.year}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {(["revenue","cogs","grossProfit","sga","operatingIncome","ebitda"] as const).map((key) => {
                  const labels: Record<string,string> = t.financialLabels;
                  const bold = key==="operatingIncome"||key==="ebitda";
                  const accent = key==="ebitda";
                  const cur = deal.companyOverview.financialsCurrency??"";
                  const unit = deal.companyOverview.financialsUnit??"";
                  const fmtVal = (v: number | null | undefined) =>
                    v == null ? "-" : `${cur} ${Math.round(v).toLocaleString("en-US")}${unit}`;
                  return (
                    <tr key={key} className={accent?"bg-emerald-50/60 dark:bg-emerald-900/10":""}>
                      <td className={`py-2.5 pr-4 text-[13px] ${bold?"font-bold text-gray-800 dark:text-gray-200":"text-gray-600 dark:text-gray-400"}`}>{labels[key]}</td>
                      {deal.companyOverview.financials.map((d) => (
                        <td key={d.year} className={`py-2.5 px-2 text-right text-[13px] ${bold?"font-bold":""} ${accent?"text-emerald-600 dark:text-emerald-400":"text-gray-700 dark:text-gray-300"}`}>
                          {fmtVal(d[key])}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr className="bg-blue-50/40 dark:bg-blue-900/10">
                  <td className="py-2.5 pr-4 text-[13px] text-gray-400 dark:text-gray-500">{t.ebitdaMargin}</td>
                  {deal.companyOverview.financials.map((d) => (
                    <td key={d.year} className="py-2.5 px-2 text-right text-[13px] text-blue-600 dark:text-blue-400 font-medium">
                      {d.revenue&&d.ebitda?((d.ebitda/d.revenue)*100).toFixed(1):"-"}%
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 10. Valuation */}
          <SectionTitle>Valuation</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{deal.valuation.body}</p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2.5 px-3 sm:px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.valuationItem}</th>
                    <th className="text-right py-2.5 px-3 sm:px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.valuationValue}</th>
                    <th className="text-right py-2.5 px-3 sm:px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{t.valuationNote}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {deal.valuation.rows.map(({ item, val, note, accent }) => (
                    <tr key={item} className={accent?"bg-amber-50/50 dark:bg-amber-900/10":""}>
                      <td className={`py-3 px-3 sm:px-4 text-[13px] ${accent?"font-bold text-gray-800 dark:text-gray-200":"text-gray-600 dark:text-gray-400"}`}>{item}</td>
                      <td className={`py-3 px-3 sm:px-4 text-right text-[13px] font-bold ${accent?"text-amber-500":"text-gray-700 dark:text-gray-300"}`}>{val}</td>
                      <td className="py-3 px-3 sm:px-4 text-right text-[12px] text-gray-400 dark:text-gray-500">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {deal.valuation.disclaimer && (
            <p className="text-[11px] text-gray-400 dark:text-gray-500">{deal.valuation.disclaimer}</p>
          )}

          {/* ── 10-B. LevFin Overview (LBO 딜 전용) */}
          {deal.levfinOverview && (
            <>
              <SectionTitle>
                {lang === "en" ? "LevFin Deep-Dive — Debt Structure Anatomy" : "LevFin 관점 — 부채 구조 해부"}
              </SectionTitle>
              <LevFinSection data={deal.levfinOverview} lang={lang} />
            </>
          )}

          {/* ── 10-C. Syndicated Loan Overview (대형 브리지·신디론 딜 전용) */}
          {deal.syndicatedLoanOverview && (
            <>
              <SectionTitle>
                {lang === "en" ? "Syndicated Loan Deep-Dive — Bridge to Permanent Financing" : "신디케이티드론 관점 — 브리지에서 영구조달까지"}
              </SectionTitle>
              <SyndicatedLoanSection data={deal.syndicatedLoanOverview} lang={lang} />
            </>
          )}

          {/* ── 공유하기 (중간) */}
          <ShareButtons title={deal.title} variant="mid" lang={lang} />

          {/* ── 11. 딜 논리 */}
          <SectionTitle>{t.dealRationale}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-900/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${deal.rationale.buyer.bg}`}>
                  <span className="text-white dark:text-gray-900 text-[9px] font-black">{deal.rationale.buyer.initials}</span>
                </div>
                <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{deal.rationale.buyer.title}</p>
              </div>
              <ul className="space-y-2.5">
                {deal.rationale.buyer.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" /><span><HL text={point} /></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/30 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${deal.rationale.seller.bg}`}>
                  <span className="text-white text-[8px] font-black">{deal.rationale.seller.initials}</span>
                </div>
                <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{deal.rationale.seller.title}</p>
              </div>
              <ul className="space-y-2.5">
                {deal.rationale.seller.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" /><span><HL text={point} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 12. 딜 사후 평가 */}
          <SectionTitle>{t.postDealAssessment} ({deal.postDealAssessment.asOfDate} {t.asOf})</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{deal.postDealAssessment.body}</p>
          <div className="flex items-center gap-3 mb-6">
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full px-4 py-1.5"
              initial={{ scale: 0.82, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.15 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><polyline points="20 6 9 17 4 12"/></svg>
              {t.overallVerdict} {deal.postDealAssessment.overallVerdict}
            </motion.span>
            <span className="text-xs text-gray-400 dark:text-gray-500">{deal.postDealAssessment.asOfDate} {t.asOf}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-900/10 p-4">
              <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">{t.positives}</p>
              <ul className="space-y-2">
                {deal.postDealAssessment.positives.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" /><span><HL text={p} /></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4">
              <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">{t.risks}</p>
              <ul className="space-y-2">
                {deal.postDealAssessment.risks.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" /><span><HL text={p} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Tombstone {...deal.tombstone} />
          <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5 text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">{t.editorNote}</p>
            <p><HL text={deal.postDealAssessment.editorNote} /></p>
          </div>

          {/* ── 핵심 개념 */}
          <ConceptsSection concepts={deal.concepts} labels={t} />

          {/* ── FAQ */}
          <FaqSection faq={deal.faq} labels={t} />

          {/* ── 공유하기 (하단) */}
          <ShareButtons title={deal.title} variant="bottom" lang={lang} />

          {/* ── 함께 읽으면 좋은 딜 */}
          {relatedDeals.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="relative mb-5">
                <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-100 dark:border-gray-800">
                  {t.relatedDeals}
                </h2>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-400 dark:bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "2rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedDeals.map((rd, i) => (
                  <motion.div
                    key={rd.slug}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <Link
                      href={`${t.dealsHref}/${rd.slug}`}
                      className="group block rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 p-4 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
                    >
                      <span className={`inline-block text-[10px] font-semibold rounded-full px-2 py-0.5 mb-2.5 ${DEAL_CATEGORY_COLOR[rd.category]}`}>
                        {(lang === "en" ? EN_CATEGORY_LABEL : DEAL_CATEGORY_LABEL)[rd.category]}
                      </span>
                      <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-3">
                        {rd.title}
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-auto">
                        <span className="text-[11px] font-bold text-amber-500">{rd.dealSummary.dealValueDisplay}</span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                          {rd.dealSummary.acquirerName} → {rd.dealSummary.targetName}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── 태그 */}
          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
            {deal.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>

          {/* ── 출처 */}
          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{t.sources}</p>
            <ol className="space-y-2">
              {deal.sources.map(({ id, text }) => (
                <li key={id} className="flex items-start gap-2 text-[12px] text-gray-400 dark:text-gray-500 leading-relaxed">
                  <span className="font-bold text-blue-400 flex-shrink-0">[{id}]</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-4">
            <Link href={t.dealsHref} className="text-sm text-blue-500 hover:underline">{t.otherDeals}</Link>
            <Link
              href={lang === "en" ? "/en/market" : "/market"}
              className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline"
            >
              {lang === "en" ? "Capital Markets → Market Story" : "자본시장 딜 → Market Story"}
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
