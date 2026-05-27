"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#6366f1"; // indigo-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  ch: 0, title: (ko: boolean) => ko ? "구조화금융 개요"    : "Overview"          },
  { slug: "structured-abs",       ch: 1, title: (ko: boolean) => ko ? "Ch.1 ABS"           : "Ch.1 ABS"          },
  { slug: "structured-clo",       ch: 2, title: (ko: boolean) => ko ? "Ch.2 CLO"           : "Ch.2 CLO"          },
  { slug: "structured-cmbs",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 CMBS"          : "Ch.3 CMBS"         },
  { slug: "structured-waterfall", ch: 4, title: (ko: boolean) => ko ? "Ch.4 워터폴·트랑쉐"  : "Ch.4 Waterfall"    },
  { slug: "structured-cdo",       ch: 5, title: (ko: boolean) => ko ? "Ch.5 CDO·합성CDO"   : "Ch.5 CDO"          },
  { slug: "structured-cases",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 케이스스터디"   : "Ch.6 Case Studies" },
];
const thisCh = 0;

// ── Market Stats ──────────────────────────────────────────────────────────────
const MARKET_STATS = [
  { label: (ko: boolean) => ko ? "ABS 시장 (미국)" : "US ABS Market", size: "$2.8조", detail: (ko: boolean) => ko ? "자동차·카드·학자금 포함, 2024" : "Auto, card, student loans, 2024", color: "bg-indigo-500", pct: 60 },
  { label: (ko: boolean) => ko ? "CLO 시장 (글로벌)" : "Global CLO Market", size: "$1.1조", detail: (ko: boolean) => ko ? "레버리지드론 기반, 2024 신기록" : "Leveraged loan backed, 2024 record", color: "bg-violet-500", pct: 40 },
  { label: (ko: boolean) => ko ? "CMBS 시장 (미국)" : "US CMBS Market", size: "$0.9조", detail: (ko: boolean) => ko ? "상업용 부동산 모기지, 2024" : "Commercial RE mortgages, 2024", color: "bg-purple-500", pct: 32 },
  { label: (ko: boolean) => ko ? "글로벌 증권화 잔액" : "Global Securitization Outstanding", size: "$13조", detail: (ko: boolean) => ko ? "ABS+CLO+CMBS+CDO+RMBS 합산" : "ABS+CLO+CMBS+CDO+RMBS total", color: "bg-blue-500", pct: 100 },
];

// ── Securitization Flow ───────────────────────────────────────────────────────
const SECFLOW = [
  { id: "bank",     icon: "🏦", label: (ko: boolean) => ko ? "은행 (Originator)" : "Bank (Originator)",    desc: (ko: boolean) => ko ? "자동차론·카드채권·모기지 보유" : "Holds auto loans, cards, mortgages" },
  { id: "sale",     icon: "📝", label: (ko: boolean) => ko ? "진정한 양도 (True Sale)" : "True Sale",       desc: (ko: boolean) => ko ? "법적 자산 이전·파산 격리" : "Legal transfer, bankruptcy isolation" },
  { id: "spv",      icon: "🏗️", label: (ko: boolean) => ko ? "SPV (특수목적법인)" : "SPV",                desc: (ko: boolean) => ko ? "자산 보유·채권 발행 주체" : "Holds assets, issues bonds" },
  { id: "tranches", icon: "📊", label: (ko: boolean) => ko ? "트랑쉐 발행" : "Tranche Issuance",          desc: (ko: boolean) => ko ? "AAA / AA / BBB / Equity" : "AAA / AA / BBB / Equity" },
  { id: "inv",      icon: "💼", label: (ko: boolean) => ko ? "투자자" : "Investors",                       desc: (ko: boolean) => ko ? "은행·보험사·헤지펀드·CLO" : "Banks, insurers, HFs, CLOs" },
];

// ── Tranche Stack ─────────────────────────────────────────────────────────────
const TRANCHE_STACK = [
  { label: "AAA (Senior)",        pct: 75, color: "bg-indigo-600", textColor: "text-indigo-700 dark:text-indigo-300", bgLight: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-800", badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",  loss: (ko: boolean) => ko ? "손실 최후 흡수" : "Last loss absorption",   yield: "SOFR+140bp",   recovery: "90%+",   note: (ko: boolean) => ko ? "은행·보험사 보유. 가장 두꺼운 버퍼." : "Held by banks/insurers. Thickest buffer." },
  { label: "Mezzanine (BBB)",     pct: 15, color: "bg-violet-500", textColor: "text-violet-700 dark:text-violet-300", bgLight: "bg-violet-50 dark:bg-violet-900/20", border: "border-violet-200 dark:border-violet-800", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", loss: (ko: boolean) => ko ? "중간 손실 흡수" : "Intermediate loss",       yield: "SOFR+330bp",   recovery: "40–70%", note: (ko: boolean) => ko ? "HY 펀드·특수 신용 펀드 보유." : "Held by HY funds, special credit funds." },
  { label: "Equity (First-Loss)", pct: 10, color: "bg-purple-500", textColor: "text-purple-700 dark:text-purple-300", bgLight: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-200 dark:border-purple-800", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300", loss: (ko: boolean) => ko ? "손실 최초 흡수" : "First loss absorption",    yield: "목표 15–20% IRR", recovery: "0–30%", note: (ko: boolean) => ko ? "CLO 매니저·에쿼티 전문 투자자. 초과 스프레드 전부 수취." : "CLO manager + equity investors. Captures all excess spread." },
];

// ── Credit Enhancement ────────────────────────────────────────────────────────
const CE_TOOLS = [
  { tool: (ko: boolean) => ko ? "후순위화 (Subordination)" : "Subordination",     how: (ko: boolean) => ko ? "에쿼티·메자닌이 선순위 앞에서 손실 흡수" : "Equity/mezz absorb losses before senior",    example: (ko: boolean) => ko ? "에쿼티 10% → 선순위는 10% 손실까지 무결" : "10% equity → senior safe up to 10% losses", type: "Structural" },
  { tool: (ko: boolean) => ko ? "과잉담보 (OC)" : "Overcollateralization (OC)", how: (ko: boolean) => ko ? "채권 발행액보다 더 많은 자산을 SPV에 넣음" : "More assets in SPV than bonds issued",          example: (ko: boolean) => ko ? "자산 $105, 채권 $100 → 5% 버퍼" : "Assets $105, bonds $100 → 5% buffer",        type: "Structural" },
  { tool: (ko: boolean) => ko ? "초과 스프레드 (XS)" : "Excess Spread (XS)",    how: (ko: boolean) => ko ? "자산 이자율이 채권 쿠폰보다 높아 발생하는 여분" : "Asset yield above bond coupons",               example: (ko: boolean) => ko ? "자산 수익률 7%, 채권 쿠폰 5% → XS 2%" : "Asset yield 7%, coupon 5% → XS 2%",         type: "Income" },
  { tool: (ko: boolean) => ko ? "준비적립금 (Reserve Fund)" : "Reserve Fund",    how: (ko: boolean) => ko ? "거래 초기에 쌓아두는 현금 쿠션" : "Upfront cash cushion set aside at closing",     example: (ko: boolean) => ko ? "발행액의 1–2% 현금 준비" : "1–2% of deal size in cash reserves",        type: "Cash" },
];

// ── 2008 Crisis Timeline ──────────────────────────────────────────────────────
const CRISIS_2008 = [
  { year: "2004–06", event: (ko: boolean) => ko ? "서브프라임 모기지 급증" : "Subprime mortgage surge",            detail: (ko: boolean) => ko ? "NINJA 론(소득·직업·자산 없음) 발행 폭발. CDO 수요가 서브프라임 수요를 만들어냄." : "NINJA loans (no income, job, or assets) explode. CDO demand creates subprime demand.", color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20", dot: "bg-amber-500" },
  { year: "2006–07", event: (ko: boolean) => ko ? "CDO² 구조 — 위험의 이중 은폐" : "CDO² — Double hiding of risk",    detail: (ko: boolean) => ko ? "BBB 서브프라임 트랑쉐를 다시 묶어 CDO²를 만들고 그 선순위에 AAA를 부여. 상관관계 가정이 틀렸다." : "Re-bundling BBB subprime tranches into CDO², rating the senior AAA. Correlation assumptions were wrong.", color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20", dot: "bg-orange-500" },
  { year: "2007 H2", event: (ko: boolean) => ko ? "주택 가격 하락 시작" : "Housing prices begin decline",          detail: (ko: boolean) => ko ? "모기지 연체율 급등. AAA CDO 가격 폭락 시작. 등급사들의 대규모 강등." : "Mortgage delinquencies spike. AAA CDO prices begin collapsing. Rating agencies begin mass downgrades.", color: "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20", dot: "bg-red-500" },
  { year: "2008", event: (ko: boolean) => ko ? "리먼 붕괴 — 시스템 마비" : "Lehman collapse — System freeze",     detail: (ko: boolean) => ko ? "구조화금융 시장 사실상 폐쇄. ABS·CLO 신규 발행 0. 모든 증권화 기계가 멈춤." : "Structured finance market effectively closes. ABS/CLO new issuance hits zero. The entire securitization machine stops.", color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20", dot: "bg-rose-500" },
];

// ── Korea Structured Finance ──────────────────────────────────────────────────
const KOREA_STRUCTURED = [
  { name: (ko: boolean) => ko ? "PF ABS (프로젝트파이낸스 ABS)" : "PF ABS (Project Finance ABS)",        desc: (ko: boolean) => ko ? "아파트 분양대금 채권을 SPV에 넣어 유동화. 건설사 리스크 대신 분양 현금흐름 담보." : "Securitizing pre-sale receivables from apartment developments. Backed by presale cash flows rather than builder credit.", size: "~30조원", color: "bg-indigo-500" },
  { name: (ko: boolean) => ko ? "카드·캐피탈 ABS" : "Card / Capital ABS",                              desc: (ko: boolean) => ko ? "신한·삼성·현대카드 등 카드사와 캐피탈사의 매출채권 유동화. 국내 ABS 발행의 핵심." : "Securitization of receivables from Shinhan, Samsung, Hyundai Card. Core of domestic ABS issuance.", size: "~15조원/년", color: "bg-violet-500" },
  { name: (ko: boolean) => ko ? "유동화전문회사(SPC)" : "SPC (Special Purpose Company)",              desc: (ko: boolean) => ko ? "한국형 SPV. 자산유동화법에 근거. 자본금 최소, 파산 격리 구조." : "Korean SPV structure. Governed by the Asset-Backed Securitization Act. Minimal capital, bankruptcy-remote structure.", size: "법인격 보유", color: "bg-purple-500" },
  { name: (ko: boolean) => ko ? "커버드본드 (이중상환청구권부채권)" : "Covered Bonds",                 desc: (ko: boolean) => ko ? "EU 모델을 참고해 2014년 도입. 모기지·공공 부문 자산 담보. 발행사 청구권+자산 청구권 이중 보호." : "Introduced in 2014 modeled on EU. Backed by mortgage or public sector assets. Dual recourse: issuer + covered pool.", size: "~5조원 잔액", color: "bg-blue-500" },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "증권화(Securitization)와 일반 채권 발행의 가장 큰 차이는 무엇인가요?"
      : "What is the biggest difference between securitization and plain bond issuance?",
    a: (ko: boolean) => ko
      ? "일반 채권은 발행사의 신용도(=회사 전체의 부도 가능성)에 의존합니다. 투자자가 GE 채권을 살 때는 GE가 파산하지 않을 것이라고 베팅하는 것입니다. 반면 증권화는 발행사와 분리된 특정 자산 풀의 현금흐름에만 의존합니다. 은행 A가 파산해도 그 은행의 자동차 론 풀을 담보로 발행된 ABS 투자자는 영향을 받지 않습니다(True Sale + 파산 격리가 적절히 구조화된 경우). 투자자 입장에서는 개별 회사 신용보다 자산 풀의 분산도와 현금흐름 패턴을 분석하는 것이 핵심입니다."
      : "Plain bonds rely on the issuer credit (the company probability of default). When you buy GE bonds, you are betting GE will not go bankrupt. Securitization, by contrast, relies only on the cash flows of a specific asset pool separated from the issuer. If Bank A goes bankrupt, ABS investors backed by that bank auto loan pool are unaffected provided True Sale and bankruptcy remoteness are properly structured. For investors, the key analysis shifts from individual company credit to the asset pool diversification and cash flow patterns.",
  },
  {
    q: (ko: boolean) => ko
      ? "BBB 등급 자산 풀에서 어떻게 AAA 선순위 채권이 나올 수 있나요?"
      : "How can a BBB-rated asset pool produce AAA-rated senior bonds?",
    a: (ko: boolean) => ko
      ? "마법이 아니라 수학입니다. 핵심은 트랑쉐 구조와 분산 투자입니다. 1,000개의 BBB 론이 있을 때 예상 손실률이 3%라면, 첫 번째로 손실을 흡수하는 에쿼티 10% 조각이 있으면 선순위는 자산 풀 손실이 10%를 초과하지 않는 한 원금 100%를 받습니다. 신용평가사는 스트레스 시나리오에서 손실이 10%를 초과할 확률을 계산하고, 그 확률이 AAA 기준을 만족하면 선순위에 AAA를 부여합니다. 2008년이 보여줬듯이 분산이 실제로는 분산이 아닐 때 이 논리가 무너집니다."
      : "It is math, not magic. The key is the tranche structure and diversification. With 1,000 BBB loans and a 3% expected loss rate, if there is a 10% equity tranche absorbing first losses, the senior tranche receives 100% of its principal as long as pool losses do not exceed 10%. Rating agencies calculate the probability of losses exceeding 10% under stress scenarios. If that probability meets the AAA threshold, AAA is assigned. As 2008 demonstrated, when diversification is not actually diversification, this logic breaks down.",
  },
  {
    q: (ko: boolean) => ko
      ? "SPV가 꼭 법적으로 독립해야 하는 이유가 무엇인가요?"
      : "Why must the SPV be legally independent?",
    a: (ko: boolean) => ko
      ? "투자자 보호를 위해서입니다. 만약 SPV가 원 발행자(은행)의 자회사라면, 은행이 파산할 때 법원이 SPV의 자산을 은행 재산으로 간주하고 채권자들이 먼저 청구할 수 있습니다. 진정한 양도 법률 의견서는 SPV가 은행과 법적으로 완전히 분리되어 있어, 은행 파산 시에도 SPV 자산에 손을 댈 수 없다는 것을 확인하는 문서입니다. 실무에서는 법무법인의 True Sale 의견서를 받는 것이 증권화 거래의 필수 선행 조건입니다."
      : "To protect investors. If the SPV were a subsidiary of the originating bank, a court might consolidate SPV assets into the bank estate during bankruptcy, allowing the bank creditors to claim first. A True Sale legal opinion confirms the SPV is completely legally separated from the bank, meaning the bank insolvency cannot reach the SPV assets. In practice, obtaining a True Sale opinion from a law firm is a mandatory prerequisite for any securitization transaction.",
  },
  {
    q: (ko: boolean) => ko
      ? "에쿼티 트랑쉐를 사는 투자자가 있다는 게 이해가 안 됩니다. 왜 첫 번째 손실을 자처합니까?"
      : "Why would any investor buy the equity tranche and take first losses?",
    a: (ko: boolean) => ko
      ? "에쿼티는 첫 손실을 부담하는 대신 구조 전체의 초과 수익을 독점합니다. CLO를 예로 들면: 자산 풀 평균 수익률 6%, 선순위 쿠폰 4%, 메자닌 쿠폰 5.5% 지급 후 남은 모든 현금이 에쿼티로 흘러갑니다. 에쿼티 투자액은 전체의 10%이지만 자산 풀 전체에서 나오는 초과 스프레드를 독점하기 때문에 레버리지드 수익을 냅니다. 목표 IRR은 15–20%. 단, 자산 풀에서 10% 이상 손실이 발생하면 에쿼티는 전액 손실입니다."
      : "The equity tranche absorbs first losses but monopolizes all excess returns from the entire structure. In a CLO: if the asset pool yields 6% on average, after paying senior coupons at 4% and mezzanine at 5.5%, all remaining cash flows to equity. Equity investors contribute only 10% of total capital but capture all excess spread from the entire pool, producing leveraged returns. Target IRR is 15–20%. However, if pool losses exceed 10%, the equity is wiped out entirely.",
  },
  {
    q: (ko: boolean) => ko
      ? "구조화금융이 2008년 이후에도 계속 성장한 이유가 무엇인가요?"
      : "Why has structured finance continued to grow after 2008?",
    a: (ko: boolean) => ko
      ? "규제가 대폭 강화됐지만 구조화금융의 근본 필요성은 사라지지 않았습니다. 세 가지 이유입니다. 첫째, 바젤 III 이후 은행은 대출을 무한히 보유할 수 없습니다. 증권화는 대출 자산을 장부에서 제거하고 자본을 확보하는 유일한 방법입니다. 둘째, 연기금·보험사·해외 투자자들이 다양한 신용등급의 채권을 원합니다. 셋째, 리스크를 전 세계 투자자로 분산합니다. 다만 2008년의 교훈은 기초 자산의 품질이 가장 중요하다는 것입니다."
      : "Regulations were significantly tightened after 2008, but the fundamental need for structured finance did not disappear. Three reasons: First, post-Basel III, banks cannot hold unlimited loans on their books. Securitization is the only way to remove loan assets from the balance sheet. Second, pension funds, insurers, and overseas investors want bonds across the credit quality spectrum. Third, it distributes risk to global investors. The 2008 lesson, however, is that underlying asset quality is paramount.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "SIFMA", title: "US Securitization Market Review 2024", url: "https://www.sifma.org/resources/research/us-securitization-market/", source: "SIFMA, 2024" },
  { id: 2, author: "Bank for International Settlements (BIS)", title: "Securitisation: lessons learned and the road ahead", url: "https://www.bis.org/publ/work140.htm", source: "BIS Working Papers, 2014" },
  { id: 3, author: "Financial Crisis Inquiry Commission", title: "The Financial Crisis Inquiry Report", url: "https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_full.pdf", source: "US FCIC, 2011" },
  { id: 4, author: "Moody's Analytics", title: "Primer on Asset-Backed Securities", url: "https://www.moodys.com/", source: "Moody's, 2023" },
  { id: 5, author: "금융위원회", title: "자산유동화제도 해설", url: "https://www.fsc.go.kr/", source: "금융위원회, 2022" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredOverviewClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = STRUCTURED_SERIES[thisCh - 1] ?? null;
  const next = STRUCTURED_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Series Nav */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-indigo-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:text-indigo-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured Finance · Overview</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "구조화금융 전체 지도: 증권화·SPV·트랑쉐·신용보강의 원리"
              : "Structured Finance Blueprint: Securitization, SPV, Tranches & Credit Enhancement"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "2008년 금융위기를 만든 기계가 바로 구조화금융입니다. 은행이 대출채권을 특수목적법인(SPV)에 팔고, SPV가 이를 담보로 채권을 발행해 전 세계 투자자에게 팝니다. ABS·CLO·CMBS·CDO — 이름은 다르지만 모두 하나의 메커니즘 위에 세워져 있습니다. 이 기계가 어떻게 작동하고, 왜 2008년에 부서졌으며, 왜 그럼에도 $13조 규모로 계속 성장하는지를 설명합니다."
              : "The machine that built the 2008 financial crisis is structured finance. Banks sell loan assets to a Special Purpose Vehicle (SPV), which issues bonds backed by those assets to global investors. ABS, CLO, CMBS, CDO — all different names, all built on a single mechanism. This article explains how the machine works, why it broke in 2008, and why it has continued growing to $13 trillion despite it all."}
          </p>
        </motion.div>

        {/* Section 1: Quick Stats */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 구조화금융 시장 — 30초 요약" : "1. Structured Finance Market — 30-Second Summary"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "전 세계 구조화금융 잔액은 $13조입니다. 미국 GDP의 절반을 넘는 규모의 자산이 이 기계를 통해 투자자들에게 분배됩니다."
              : "Global structured finance outstanding is $13 trillion. More than half the US GDP in assets flows through this machine to investors worldwide."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {MARKET_STATS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{m.size}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{m.label(ko)}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                  <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{m.detail(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-1.5">
                  {ko ? "구조화금융 한 줄 정의" : "Structured Finance in One Line"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "유동성이 없는 자산(론·모기지·카드채권)을 풀(Pool)로 묶어 법적으로 분리된 법인(SPV)에 넣은 뒤, 그 현금흐름을 우선순위별로 분할한 채권(트랑쉐)을 발행해 다양한 위험 선호도를 가진 투자자에게 파는 것."
                    : "Pooling illiquid assets (loans, mortgages, card receivables) into a legally isolated entity (SPV), then issuing bonds (tranches) that divide the resulting cash flows by priority — selling each tranche to investors with matching risk appetites."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Securitization Machine */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 증권화 기계 — 은행에서 투자자까지의 여정" : "2. The Securitization Machine — From Bank to Investor"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "모든 구조화금융 상품(ABS·CLO·CMBS·CDO)은 아래 5단계 흐름 위에 세워져 있습니다. 이 흐름을 이해하면 어떤 구조화 상품도 읽을 수 있습니다."
              : "Every structured finance product (ABS, CLO, CMBS, CDO) is built on the following 5-step flow. Understand this and you can read any structured product."}
          </p>

          {/* Securitization Flow Diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6 mb-6 overflow-x-auto">
            <div className="flex items-stretch gap-0 min-w-max">
              {SECFLOW.map((step, i) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                    className="flex flex-col items-center text-center w-28">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2"
                      style={{ background: `${accent}22`, border: `2px solid ${accent}` }}>
                      {step.icon}
                    </div>
                    <p className="font-bold text-xs text-gray-900 dark:text-gray-50 mb-1 leading-tight">{step.label(ko)}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
                  </motion.div>
                  {i < SECFLOW.length - 1 && (
                    <div className="flex items-center mx-2">
                      <div className="h-px w-6 bg-gray-300 dark:bg-gray-600" />
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
              <p className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                {ko ? "은행 입장의 동기" : "The Bank Motivation"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "은행은 대출을 장부에서 제거(Off-balance sheet)하고 자본을 확보합니다. 바젤 III 하에서 $100 대출을 보유하려면 $8–12의 자본이 필요합니다. 증권화로 이 대출을 팔면 자본이 해제되어 새로운 대출을 위한 여유가 생깁니다."
                  : "Banks remove loans from their balance sheet (off-balance sheet) and free up capital. Under Basel III, holding $100 in loans requires $8–12 in capital. Securitizing those loans releases capital, creating room for new lending."}
              </p>
            </div>
            <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-4">
              <p className="font-bold text-sm text-violet-800 dark:text-violet-300 mb-2">
                {ko ? "투자자 입장의 동기" : "The Investor Motivation"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "투자자는 은행의 신용이 아닌 특정 자산 풀의 현금흐름에 투자할 수 있습니다. AAA 트랑쉐는 국채보다 높은 수익률을 제공하면서 동등한 신용 안전성을 제공합니다."
                  : "Investors can invest in specific asset pool cash flows rather than bank credit. AAA tranches offer higher yields than Treasuries while providing equivalent credit safety."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: SPV Anatomy */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. SPV 해부 — 증권화의 핵심 도구" : "3. SPV Anatomy — The Core Tool of Securitization"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "SPV(Special Purpose Vehicle)는 증권화 거래의 중심에 있는 법인입니다. 세 가지 특성이 SPV를 일반 법인과 구별합니다."
              : "The SPV (Special Purpose Vehicle) is the legal entity at the center of any securitization. Three characteristics distinguish it from ordinary corporations."}
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: (ko: boolean) => ko ? "파산 격리 (Bankruptcy Remote)" : "Bankruptcy Remote",
                icon: "🛡️",
                desc: (ko: boolean) => ko
                  ? "SPV는 단일 목적 법인으로, 스스로 파산을 신청할 수 없도록 설계됩니다. 원 발행자(은행)가 파산하더라도 SPV의 자산과 채권은 영향을 받지 않습니다. 이를 위해 SPV는 독립 이사회 요건, 자산 혼입 금지, 파산 신청 제한 조항을 갖춥니다."
                  : "The SPV is a single-purpose entity designed so it cannot file for bankruptcy itself. Even if the originating bank goes bankrupt, the SPV assets and bonds are unaffected. This requires: independent board requirements, prohibition on asset commingling, restrictions on voluntary bankruptcy filings.",
                color: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",
                badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
              },
              {
                num: "02",
                title: (ko: boolean) => ko ? "진정한 양도 (True Sale)" : "True Sale",
                icon: "📝",
                desc: (ko: boolean) => ko
                  ? "은행이 자산을 SPV에 매각할 때, 이 양도가 법적으로 진정한 판매여야 합니다. 법무법인의 True Sale 법률 의견서가 필수입니다. True Sale이 인정되지 않으면, 은행 파산 시 자산이 파산재단으로 환수될 위험이 있습니다."
                  : "When a bank sells assets to the SPV, this transfer must be a legally recognized true sale, not a pledge of collateral or temporary transfer. A True Sale legal opinion from a law firm is mandatory. Without True Sale recognition, assets risk being clawed back into the bankruptcy estate if the originator fails.",
                color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
                badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
              {
                num: "03",
                title: (ko: boolean) => ko ? "단일 목적성 (Limited Purpose)" : "Limited Purpose",
                icon: "🎯",
                desc: (ko: boolean) => ko
                  ? "SPV는 오직 자산 취득, 채권 발행, 현금흐름 배분의 세 가지 업무만 합니다. 다른 사업을 영위할 수 없고, 추가 부채를 질 수 없으며, 직원도 최소화합니다. 미국에서는 Delaware LLC나 Delaware Statutory Trust 형태가 자주 쓰입니다."
                  : "The SPV does only three things: acquire assets, issue bonds, distribute cash flows. It cannot operate other businesses, incur additional liabilities, or maintain significant employees. In the US, Delaware LLCs or Delaware Statutory Trusts are the common vehicles.",
                color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20",
                badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.badge}`}>{item.num}</span>
                      <p className="font-black text-sm text-gray-900 dark:text-gray-50">{item.title(ko)}</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Tranche Stack */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 트랑쉐 구조 — BBB 자산 풀에서 AAA가 나오는 원리" : "4. Tranche Stack — How a BBB Pool Produces AAA Bonds"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "트랑쉐(Tranche)는 프랑스어로 조각. 자산 풀의 현금흐름을 손실 흡수 우선순위에 따라 분리한 채권 등급입니다."
              : "Tranche is French for slice. It refers to bond classes that divide asset pool cash flows by priority in absorbing losses."}
          </p>

          {/* Tranche Stack Visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6 mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "트랑쉐 스택 — 위로 갈수록 안전, 아래로 갈수록 고수익·고위험" : "Tranche Stack — Safer up, Higher yield/risk down"}
            </p>
            <div className="space-y-2">
              {TRANCHE_STACK.map((t, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                  className={`rounded-xl border p-4 ${t.bgLight} ${t.border}`}>
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>{t.label}</span>
                      <span className={`text-[10px] font-semibold ${t.textColor}`}>{t.pct}% {ko ? "비중" : "of pool"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-gray-500">{t.yield}</span>
                      <span className="text-gray-400">|</span>
                      <span className={`font-bold ${i === 0 ? "text-emerald-600 dark:text-emerald-400" : i === 1 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {ko ? "회수율" : "Recovery"}: {t.recovery}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div className={`h-2 rounded-full ${t.color}`} style={{ width: `${t.pct * 1.2}%` }} />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-semibold ${t.textColor}`}>{t.loss(ko)}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">·</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t.note(ko)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              {ko ? "* 일반적인 CLO 트랑쉐 구조 예시. 실제 비중은 거래마다 다름." : "* Illustrative CLO tranche structure. Actual weights vary by deal."}
            </p>
          </div>

          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">
              {ko ? "등급 변환의 핵심 논리" : "The Core Logic of Rating Transformation"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "BBB 자산 풀의 기대 손실률이 3%라면: 에쿼티 10%가 첫 손실을 흡수하므로, 선순위는 자산 풀 손실이 10%를 넘지 않는 한 원금 100%를 받습니다. 신용평가사는 스트레스 시나리오에서 손실이 10%를 초과할 확률을 계산하고, 그 확률이 AAA 기준을 만족하면 선순위에 AAA를 부여합니다."
                : "If a BBB asset pool has a 3% expected loss rate: since the 10% equity tranche absorbs first losses, the senior tranche receives 100% of its principal as long as pool losses do not exceed 10%. Rating agencies calculate the probability of losses exceeding 10% under stress scenarios. If that probability meets the AAA threshold, AAA is assigned."}
            </p>
          </div>
        </motion.section>

        {/* Section 5: Credit Enhancement */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 신용 보강 4가지 — 선순위 트랑쉐 AAA를 만드는 도구" : "5. Credit Enhancement — Four Tools for Creating AAA Senior Tranches"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "신용평가사는 이 4가지 신용 보강 도구의 합산 버퍼가 스트레스 손실을 감당할 수 있는지를 검증한 뒤 등급을 부여합니다."
              : "Rating agencies verify that the combined buffer of these four credit enhancement tools can absorb stress-case losses before assigning ratings."}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "도구" : "Tool"}</th>
                    <th className="text-left px-4 py-3">{ko ? "작동 방식" : "How It Works"}</th>
                    <th className="text-left px-4 py-3">{ko ? "예시" : "Example"}</th>
                    <th className="text-left px-4 py-3">{ko ? "유형" : "Type"}</th>
                  </tr>
                </thead>
                <tbody>
                  {CE_TOOLS.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-indigo-700 dark:text-indigo-300 text-xs whitespace-nowrap">{row.tool(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.how(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-500 font-mono">{row.example(ko)}</td>
                      <td className="px-4 py-3 text-xs">
                        <span className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                          row.type === "Structural" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" :
                          row.type === "Income" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" :
                          "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                        }`}>{row.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">
              {ko ? "신용평가사의 분석 로직" : "Rating Agency Analysis Logic"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Moody's·S&P·Fitch는 자산 풀의 역사적 손실률, 경기 하강 스트레스 배수, 상관관계 가정을 조합해 각 트랑쉐별 예상 손실을 계산합니다. AAA를 받으려면 100년에 1번 수준의 위기에서도 원금이 보호되어야 합니다. 신용 보강(OC+XS+후순위화+준비금)의 총합이 이 스트레스 손실을 초과하면 해당 트랑쉐에 AAA를 부여합니다."
                : "Moody's, S&P, and Fitch combine historical loss rates on the asset pool, recession stress multipliers, and correlation assumptions to calculate expected losses per tranche. To receive AAA, principal must be protected even in a once-in-100-years crisis. If total credit enhancement (OC+XS+subordination+reserve fund) exceeds the stress loss, the tranche receives AAA."}
            </p>
          </div>
        </motion.section>

        {/* Section 6: 2008 Crisis */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 2008년 파국 — 증권화 기계가 부서진 이유" : "6. The 2008 Catastrophe — Why the Securitization Machine Broke"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "기계 자체가 나쁜 게 아니었습니다. 검증되지 않은 자산을 과도하게 넣고, 상관관계를 잘못 가정하고, 등급사가 수수료를 받은 구조물에 AAA를 부여했습니다."
              : "The machine itself was not bad. It was fed unvalidated assets at massive scale, built on flawed correlation assumptions, with rating agencies granting AAA to structures they were paid to rate."}
          </p>
          <div className="relative mb-8">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {CRISIS_2008.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.year}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-4">
            <p className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">
              {ko ? "2008년이 남긴 세 가지 교훈" : "Three Lessons from 2008"}
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>{ko ? "① 기초 자산의 품질이 구조의 복잡성보다 항상 우선합니다." : "① Underlying asset quality always trumps structural complexity."}</p>
              <p>{ko ? "② 상관관계 가정이 틀리면 분산 효과가 사라집니다." : "② Wrong correlation assumptions eliminate diversification benefits."}</p>
              <p>{ko ? "③ 등급사의 발행자 지불 모델은 이해 충돌을 만듭니다." : "③ The rating agency issuer pays model creates conflicts of interest."}</p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Korean Market */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 구조화금융 — PF ABS, 커버드본드, 국내 유동화 시장" : "7. Korean Structured Finance — PF ABS, Covered Bonds & Domestic Securitization"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국의 구조화금융 시장은 글로벌 대비 상대적으로 작지만, 주택 PF·카드·캐피탈 중심으로 독자적인 구조를 갖추고 있습니다."
              : "Korea structured finance market is relatively small compared to global scale, but has developed its own structure centered on housing PF, cards, and captive finance."}
          </p>
          <div className="space-y-3 mb-6">
            {KOREA_STRUCTURED.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0">🇰🇷</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.name(ko)}</span>
                      <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${item.color}`}>{item.size}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-3">
              {ko ? "이 시리즈에서 더 깊이 탐구하기" : "Explore Deeper in This Series"}
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              {[
                { slug: "structured-abs",       label: (ko: boolean) => ko ? "ABS — 자동차론·카드채권" : "ABS — Auto & Cards",  icon: "📄" },
                { slug: "structured-clo",       label: (ko: boolean) => ko ? "CLO — 레버리지드론" : "CLO — Leveraged Loans",   icon: "🏦" },
                { slug: "structured-waterfall", label: (ko: boolean) => ko ? "워터폴·트랑쉐 심화" : "Waterfall & Tranches",    icon: "💧" },
              ].map((link) => (
                <Link key={link.slug} href={`${base}/${link.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-900 p-3 hover:border-indigo-400 transition-colors">
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{link.label(ko)}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* References */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <ShareButtons
          title={ko
            ? "구조화금융 전체 지도 — 증권화·SPV·트랑쉐·신용보강 | Deal Story"
            : "Structured Finance Blueprint — Securitization, SPV, Tranches & Credit Enhancement | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
