/**
 * Ch.3 — CIM & Teaser
 * Teaser → CIM → MP deck 마케팅 문서 피라미드
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

const SLUG = "ma-ch03-cim";

// Document pyramid
const DOC_PYRAMID = [
  { docKo: "Teaser",     docEn: "Teaser",                pages: "1-2",  audienceKo: "Anonymous, broad market", audienceEn: "Anonymous, broad market",   distKo: "100+ potential buyers", distEn: "100+ potential buyers", confidentialityKo: "회사명 미공개", confidentialityEn: "Company name redacted" },
  { docKo: "CIM",        docEn: "CIM (Confidential)",     pages: "60-100", audienceKo: "Post-NDA buyers",       audienceEn: "Post-NDA buyers",          distKo: "20-30 qualified",       distEn: "20-30 qualified",       confidentialityKo: "회사명 공개, 핵심 데이터", confidentialityEn: "Identity disclosed, key data" },
  { docKo: "Management Presentation", docEn: "Mgmt Presentation", pages: "60-80", audienceKo: "Shortlisted bidders (5-7)", audienceEn: "Shortlisted bidders (5-7)", distKo: "Live meeting only",     distEn: "Live meeting only",     confidentialityKo: "민감 데이터 (재무·고객) 깊이", confidentialityEn: "Deeper financial + customer data" },
];

// CIM TOC
const CIM_TOC = [
  { id: "exec",       koSection: "Executive Summary",      enSection: "Executive Summary",      pages: 5,  pct: 6,  accent: "bg-violet-700",  descKo: "5p 안에 deal logic 전체 압축",                          descEn: "Compresses the entire deal logic into 5p" },
  { id: "industry",   koSection: "Industry / Market",      enSection: "Industry / Market",      pages: 12, pct: 15, accent: "bg-violet-600",  descKo: "TAM·growth·경쟁구도. Bull case 강조",                    descEn: "TAM, growth, competitive dynamics. Bull case forward" },
  { id: "company",    koSection: "Company Overview",       enSection: "Company Overview",       pages: 18, pct: 22, accent: "bg-violet-500",  descKo: "History·products·고객 deck of 30-50 logos",              descEn: "History, products, customer deck of 30-50 logos" },
  { id: "financials", koSection: "Historical Financials",  enSection: "Historical Financials",  pages: 12, pct: 15, accent: "bg-indigo-500",  descKo: "3-5년 P&L·BS·CF + adjusted EBITDA bridge",               descEn: "3-5 years P&L/BS/CF + adjusted EBITDA bridge" },
  { id: "proj",       koSection: "Projections",            enSection: "Projections",            pages: 12, pct: 15, accent: "bg-indigo-600",  descKo: "★ 가장 협상 격렬한 섹션 — Mgmt Case + Banker Case",      descEn: "★ Most-negotiated section — Management Case + Banker Case" },
  { id: "mgmt",       koSection: "Management / HR",        enSection: "Management / HR",        pages: 8,  pct: 10, accent: "bg-indigo-700",  descKo: "Org chart, key 5-10 employees bio, 보상",                descEn: "Org chart, 5-10 key employee bios, compensation" },
  { id: "process",    koSection: "Process Timeline",       enSection: "Process Timeline",       pages: 3,  pct: 4,  accent: "bg-purple-500",  descKo: "Bid date, milestone, advisor 연락처",                    descEn: "Bid dates, milestones, advisor contacts" },
  { id: "appendix",   koSection: "Appendix",               enSection: "Appendix",               pages: 10, pct: 13, accent: "bg-gray-500",    descKo: "Detailed financials, customer concentration, IP list",  descEn: "Detailed financials, customer concentration, IP list" },
];

// Variant comparison
const CIM_VARIANTS = [
  { koLabel: "Broad Auction", enLabel: "Broad Auction",       cimKo: "Full 80-100p CIM 필수. 표준 8개 섹션 전부", cimEn: "Full 80-100p CIM required. All 8 standard sections", color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40" },
  { koLabel: "Limited Auction", enLabel: "Limited Auction",   cimKo: "60-80p CIM. Process letter 더 정밀",       cimEn: "60-80p CIM. More refined process letter",            color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800/40" },
  { koLabel: "Negotiated 1:1", enLabel: "Negotiated 1:1",     cimKo: "Slim 30p brief 또는 CIM 생략 (메모로 대체)", cimEn: "Slim 30p brief or CIM skipped (memo only)",         color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/40" },
  { koLabel: "Public Target", enLabel: "Public Target",       cimKo: "CIM 없음 — SEC filings (10-K, 10-Q, 8-K) 로 갈음", cimEn: "No CIM — SEC filings (10-K, 10-Q, 8-K) substitute", color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40" },
  { koLabel: "Carve-out", enLabel: "Carve-out",               cimKo: "Stand-alone financials 만드는 데만 6주+. Pro forma carve-out CIM이 별도 작업", cimEn: "6+ weeks just to build stand-alone financials. Pro forma carve-out CIM is a separate workstream", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40" },
];

const FAQS = [
  {
    qKo: "Management Case와 Banker Case는 어떻게 다른가?",
    qEn: "How does Banker Case differ from Management Case?",
    aKo: "Management Case 는 회사 경영진이 자체적으로 만든 5년 projection. 보통 aggressive — top-line +20-30% CAGR, margin expansion 가정. Banker Case 는 advisor가 그걸 받아서 'reasonable downside' 를 적용한 버전. Top-line CAGR -5%p, margin expansion 절반 정도로 깎고, 한두 가지 macro risk 시나리오 추가. Buyer들은 둘 다 보지만, valuation은 보통 Banker Case 기준으로 가격을 부르고 Management Case는 'upside potential' 으로 인용. Banker가 너무 공격적인 Mgmt Case를 그대로 통과시키면 신뢰도가 깎이고, 너무 보수적이면 가격이 깎입니다 — 그 줄타기가 핵심 노하우.",
    aEn: "The Management Case is the 5-year projection built by company management — typically aggressive: top-line +20-30% CAGR with margin expansion baked in. The Banker Case is the advisor's adjusted version: trims top-line CAGR by ~5pp, halves margin expansion, and adds one or two macro downside scenarios. Buyers see both, but valuations are usually anchored on Banker Case, with Management Case cited as 'upside potential.' Letting an aggressive Mgmt Case pass unedited erodes credibility; trimming too hard erodes price. Threading that needle is the core skill.",
  },
  {
    qKo: "CIM 작성에 누가 얼마나 투입되나?",
    qEn: "Who works on the CIM, and how long?",
    aKo: "전형적인 BB sell-side mandate 기준 — VP 1명 + Associate 1명 + Analyst 2명, 4-6주 전임. Mgmt presentation deck은 별도 2주. Sector evergreen material (industry chart, comps) 은 끌어다 쓰지만, company-specific 섹션 (Company Overview·Financials·Projections) 은 매번 처음부터 작성. Carve-out 케이스는 +6주 (stand-alone financials). MD는 weekly review로 들어옴.",
    aEn: "Typical BB sell-side mandate: 1 VP + 1 Associate + 2 Analysts, 4-6 weeks dedicated. Management presentation deck adds another 2 weeks. Sector evergreen materials (industry charts, comps) get reused, but company-specific sections (Company Overview, Financials, Projections) are built from scratch every time. Carve-outs add another ~6 weeks for stand-alone financials. MD weighs in via weekly reviews.",
  },
  {
    qKo: "Teaser는 왜 익명인가?",
    qEn: "Why is the teaser anonymous?",
    aKo: "회사명을 노출하지 않고 buyer interest를 측정하기 위함입니다. 'Profitable $200M revenue SaaS company in vertical X seeking strategic alternatives' 같은 형태로 industry·size·shape만 공개. 100+ buyer에 뿌리고 NDA 사인하는 사람만 회사명 공개 (= CIM 발송). 매도자 입장에서는 ① 직원·고객·경쟁사가 매각 사실을 미리 알아채는 걸 방지, ② 진짜 interest가 있는 buyer만 filter — 두 가지가 목적.",
    aEn: "Anonymity lets you gauge buyer interest without revealing the seller's identity. Format: 'Profitable $200M revenue SaaS company in vertical X seeking strategic alternatives' — industry, size, and shape, nothing more. Distribute to 100+ buyers, reveal identity only after NDA (= CIM goes out). Two purposes for the seller: (1) prevent employees, customers, and competitors from learning of the sale prematurely, and (2) filter for genuine interest.",
  },
  {
    qKo: "VDD report와 CIM의 관계는?",
    qEn: "How does a VDD report relate to the CIM?",
    aKo: "별개 문서이지만 같은 source data 에서 나옵니다. CIM은 IB advisor가 marketing 목적으로 작성 — best story 위주. VDD (Vendor DD) 는 sell-side가 Big 4에 미리 발주한 financial DD 보고서 — quality of earnings 분석 결과. Auction process에서 buyer들에게 VDD report를 함께 배포하면 ① bidder별 DD 중복 절감, ② sell-side가 'EBITDA quality 미리 검증함' 어필. CIM의 financial 섹션과 VDD 가 일관성 있어야 하며, banker는 VDD 결과를 CIM Projections 작성 시 input으로 사용.",
    aEn: "Separate documents, same underlying data. The CIM is built by IB advisors for marketing — best story forward. A VDD (Vendor DD) report is a financial DD commissioned by the seller from a Big 4 firm — a quality-of-earnings analysis. In auctions, distributing both saves bidders duplicate DD effort and signals 'EBITDA already validated.' The CIM's financial section and VDD must reconcile; bankers feed VDD outputs into the CIM Projections.",
  },
];

export default function MaCh03CimClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <Link href={`${base}/ma-ch00-overview`} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "M&A 시리즈" : "M&A Series"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Ch.3</span>
          </div>
        </div>

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

          {/* § 3.1 Document Pyramid */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "마케팅 문서의 3-tier 피라미드" : "The 3-tier marketing document pyramid"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Sell-side process에서 buyer가 받는 정보는 funnel 형태로 늘어납니다 — Teaser (anonymous, 1-2p) → CIM (post-NDA, 60-100p) → Management Presentation (shortlist only, 60-80p). 각 단계마다 회사가 더 많이 노출되고, buyer pool은 더 좁아집니다. 100명 → 25명 → 7명."
                : "In a sell-side process, buyer access expands in a funnel — Teaser (anonymous, 1-2p) → CIM (post-NDA, 60-100p) → Management Presentation (shortlist only, 60-80p). Each step exposes more company information to a narrower buyer pool. 100 → 25 → 7."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Document Pyramid — page count vs audience" : "Document Pyramid — pages vs audience"}</p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {DOC_PYRAMID.map((doc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.35, delay: i * 0.08, ease: EASE }}
                    className="p-5 bg-white dark:bg-gray-900"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="text-[14px] font-black text-gray-900 dark:text-gray-100">{ko ? doc.docKo : doc.docEn}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">{doc.pages}p</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 text-[11px]">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "오디언스" : "Audience"}</p>
                        <p className="text-gray-700 dark:text-gray-300">{ko ? doc.audienceKo : doc.audienceEn}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "배포 규모" : "Distribution"}</p>
                        <p className="text-gray-700 dark:text-gray-300">{ko ? doc.distKo : doc.distEn}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "기밀 수준" : "Confidentiality"}</p>
                        <p className="text-gray-700 dark:text-gray-300">{ko ? doc.confidentialityKo : doc.confidentialityEn}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* § 3.2 CIM Anatomy */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "CIM 표준 80p anatomy" : "CIM standard 80p anatomy"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "CIM 8개 섹션 + 페이지 비중" : "CIM's 8 sections + page weights"}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-2.5">
                {CIM_TOC.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="flex-shrink-0 w-5 text-[10px] font-mono text-gray-400 dark:text-gray-500 text-right">{i + 1}</span>
                      <p className="flex-1 text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.koSection : s.enSection}</p>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">{s.pages}p</span>
                    </div>
                    <div className="ml-7 flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct * 4}%` }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.04 + 0.2, ease: EASE }}
                          className={`h-full ${s.accent}`}
                        />
                      </div>
                    </div>
                    <p className="ml-7 mt-1 text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.descKo : s.descEn}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* § 3.3 Mgmt Case vs Banker Case */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Projections — Management Case vs Banker Case" : "Projections — Management Case vs Banker Case"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Projections 섹션은 CIM에서 가장 협상이 격렬한 부분입니다. 회사 경영진이 만든 Management Case 는 일반적으로 너무 aggressive — 5년 top-line +25% CAGR, EBITDA margin 30%까지 확대 같은 식. 그대로 CIM에 넣으면 두 가지가 일어납니다. ① Buyer DD에서 '실현 가능성 없다' 판단 → IOI에서 큰 폭 discount, ② Closing 후 미달성 시 lawsuit risk."
                : "Projections is the most-negotiated section in the CIM. Management Cases tend to be aggressive — 5-year top-line +25% CAGR, EBITDA margin expanding to 30%, etc. Putting that into a CIM unchanged triggers two problems: (1) buyer DD flags it as 'unachievable' → large IOI discount; (2) if it misses post-close, lawsuit risk."}</p>
              <p>{ko
                ? "그래서 banker가 'Banker Case' 를 만듭니다 — Management 가정을 받아서 reasonable downside 를 적용. 보통 top-line CAGR -5%p, margin expansion 절반, 두 개의 macro risk scenario 추가. CIM에는 둘 다 보여주되, valuation은 Banker Case 기준. Buyer들도 이 dynamic을 알기 때문에, banker case 자체가 '진지한 사람들의 base case' 가 됩니다."
                : "So bankers build a 'Banker Case' — taking management assumptions and applying reasonable downside. Typically: top-line CAGR cut by ~5pp, margin expansion halved, two macro scenarios layered in. CIM shows both, but valuation anchors on Banker Case. Buyers know this dynamic — which is why the Banker Case becomes the 'serious people's base case.'"}</p>
            </motion.div>

            {/* Projection comparison bars */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Year-5 Revenue — Mgmt vs Banker (예시)" : "Year-5 Revenue — Mgmt vs Banker (illustrative)"}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-4">
                {[
                  { ko: "Management Case", en: "Management Case", val: 1.0, pct: 100, descKo: "+25% CAGR, EBITDA margin 30%", descEn: "+25% CAGR, EBITDA margin 30%", color: "bg-gray-300 dark:bg-gray-700", subtle: true },
                  { ko: "Banker Case",     en: "Banker Case",     val: 0.72, pct: 72, descKo: "+20% CAGR, EBITDA margin 26% (사실상의 base case)", descEn: "+20% CAGR, EBITDA margin 26% (de facto base case)", color: "" },
                  { ko: "Buyer Downside",  en: "Buyer Downside",  val: 0.55, pct: 55, descKo: "Buyer가 own DD로 추가 trim", descEn: "Buyer trims further in own DD", color: "bg-amber-400 dark:bg-amber-700" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-40">
                      <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? row.ko : row.en}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? row.descKo : row.descEn}</p>
                    </div>
                    <div className="flex-1 h-8 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={VP}
                        transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
                        className={`h-full flex items-center justify-end pr-3 text-[11px] font-bold text-white ${row.color}`}
                        style={!row.color ? { background: phase.accentHex } : {}}
                      >
                        {row.val.toFixed(2)}×
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* § 3.4 Variant Drilldown */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Variant — Process · Target별 CIM 분기" : "Variant — CIM forks by process and target"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="mt-2 grid sm:grid-cols-2 gap-3">
              {CIM_VARIANTS.map((v, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className={`p-4 rounded-xl border ${v.color}`}>
                  <p className="text-[11px] font-black text-gray-900 dark:text-gray-100 mb-1.5">{ko ? v.koLabel : v.enLabel}</p>
                  <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? v.cimKo : v.cimEn}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* FAQ */}
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
