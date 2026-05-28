"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LineChart, Line, Legend,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── 색상 & 상수 ─────────────────────────────────────────────────────────────
const ACCENT       = "#06b6d4"; // cyan-500
const ACCENT_LIGHT = "#ecfeff"; // cyan-50
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "syndicated-loan-docs";
const SYNDLOAN_SERIES = [
  { slug: "syndicated-loan-overview",  ch: "Ch.0", title: "왜 은행들은 뭉치는가",       titleEn: "Why Banks Pool Together" },
  { slug: "syndicated-loan-players",   ch: "Ch.1", title: "플레이어와 수익구조",         titleEn: "Players & Economics" },
  { slug: "syndicated-loan-process",   ch: "Ch.2", title: "딜 프로세스 실무",            titleEn: "Deal Process in Practice" },
  { slug: "syndicated-loan-docs",      ch: "Ch.3", title: "문서와 코버넌트",             titleEn: "Documentation & Covenants" },
  { slug: "syndicated-loan-cases",     ch: "Ch.4", title: "케이스스터디: 성공 vs 실패",  titleEn: "Case Studies: Win vs Fail" },
];

function ChapterNav({ ko }: { ko: boolean }) {
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {SYNDLOAN_SERIES.map((ch) => {
        const active = ch.slug === THIS_CH;
        return (
          <Link key={ch.slug} href={`${base}/${ch.slug}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300"
              }`}
              style={active ? { background: ACCENT } : {}}
            >
              {ch.ch}
              <span className="hidden sm:inline">— {ko ? ch.title : ch.titleEn}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ── 비유 박스 컴포넌트 ───────────────────────────────────────────────────────
function AnalogyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5" style={{ borderColor: "#f59e0b" }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ── 실무 박스 컴포넌트 ───────────────────────────────────────────────────────
function PracticeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-cyan-200 dark:border-cyan-700/50 bg-cyan-50/60 dark:bg-cyan-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>
          실무
        </span>
        <span className="text-[13px] font-bold text-cyan-800 dark:text-cyan-200">{title}</span>
      </div>
      <div className="text-[13px] text-cyan-900 dark:text-cyan-200 leading-relaxed">{children}</div>
    </div>
  );
}

// ── 차트 데이터 ──────────────────────────────────────────────────────────────
// 코버넌트 헤드룸 시나리오 (Leverage Ratio 추이)
const COVENANT_LEVEL = 5.5;
const HEADROOM_DATA = [
  { qtr: "Q1",  tight: 5.3, normal: 4.8, comfortable: 4.0 },
  { qtr: "Q2",  tight: 5.2, normal: 4.6, comfortable: 3.8 },
  { qtr: "Q3",  tight: 5.4, normal: 4.5, comfortable: 3.6 },
  { qtr: "Q4",  tight: 5.1, normal: 4.3, comfortable: 3.3 },
  { qtr: "Q5",  tight: 5.3, normal: 4.4, comfortable: 3.1 },
  { qtr: "Q6",  tight: 5.0, normal: 4.2, comfortable: 2.9 },
  { qtr: "Q7",  tight: 4.9, normal: 4.0, comfortable: 2.8 },
  { qtr: "Q8",  tight: 4.8, normal: 3.8, comfortable: 2.6 },
];

// Cov-Lite 비율 추이 (2005~2023)
const COV_LITE_DATA = [
  { year: "2005", rate: 10 },
  { year: "2007", rate: 30 },
  { year: "2009", rate: 15 },
  { year: "2011", rate: 25 },
  { year: "2014", rate: 60 },
  { year: "2016", rate: 70 },
  { year: "2019", rate: 80 },
  { year: "2021", rate: 83 },
  { year: "2023", rate: 85 },
];

// ── 커스텀 툴팁 ──────────────────────────────────────────────────────────────
function CovenantTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      <p className="text-red-400 text-[11px] mb-1">Covenant: {COVENANT_LEVEL}×</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>{p.name}: <strong>{p.value}×</strong></p>
      ))}
    </div>
  );
}

function CovLiteTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      <p style={{ color: ACCENT }}>Cov-Lite: <strong>{payload[0].value}%</strong></p>
    </div>
  );
}

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "코버넌트 위반 시 즉시 기한이익 상실(EOD)이 발생하나요?",
    a: "아닙니다 — 바로 EOD가 되지 않는 경우가 대부분입니다. 코버넌트 위반이 발생하면 먼저 'Cure Period'(치유 기간, 보통 30~60일)가 주어집니다. 이 기간 내에 차주가 스폰서 자금 주입(Equity Cure) 또는 EBITDA 개선을 통해 위반을 해소하거나, 대주단에 Amendment & Waiver를 요청하여 코버넌트를 재설정할 수 있습니다. Equity Cure란 스폰서가 추가 자본을 투입하여 분자인 부채를 줄이거나 EBITDA를 높이는 방식입니다. 단, Cure는 보통 연간 2회, 전체 기간 4회 등으로 횟수가 제한됩니다. 이 과정을 모두 실패했을 때 비로소 에이전트 은행이 EOD를 공식 선언하고 기한이익이 상실됩니다.",
  },
  {
    q: "LIBOR→SOFR 전환 시 기존 Credit Agreement를 어떻게 수정했나요?",
    a: "2021~2023년 전환 기간 동안 대부분의 기존 CA는 두 가지 방식으로 처리됐습니다. 첫째, 'Hardwired Fallback' 방식: CA 내에 이미 LIBOR 대체 금리(SOFR+CSA)로 자동 전환되는 조항을 삽입해두는 방식으로, 신규 딜 위주로 적용됐습니다. 둘째, 기존 CA Amendment: SOFR 전환을 위한 별도의 Amendment(LIBOR Transition Amendment)를 대주단 동의로 진행했습니다. 미국의 경우 ARRC(Alternative Reference Rates Committee)가 표준 조항 언어를 제공했고, 영국은 LMA가 LMA Recommended Form을 업데이트했습니다. 실무적으로는 1M SOFR에 +11.4bps, 3M에 +26.2bps, 6M에 +42.8bps의 Credit Spread Adjustment(CSA)를 가산해 경제적 동등성을 맞췄습니다.",
  },
  {
    q: "Credit Agreement에서 영국법과 뉴욕법 중 어느 것을 선택하는 기준은 무엇인가요?",
    a: "선택 기준은 주로 차주의 소재지·자산 위치·신디케이트 구성에 달려 있습니다. 영국법(English Law): LMA 표준 문서 기반으로 유럽·아시아·중동 딜에 주로 사용됩니다. 담보 실행(Security Enforcement)이 뉴욕법보다 유연하며, 시장 관행이 더 오래 확립돼 있습니다. 특히 LMA FA(Facility Agreement)는 전 세계 신디론 시장에서 사실상 표준 양식입니다. 뉴욕법(New York Law): 미국 차주 또는 미국 내 자산 담보 딜에 적용됩니다. UCC(Uniform Commercial Code) 기반 담보 설정이 명확하며, 미국 CLO와 크레딧 펀드는 뉴욕법 문서에 더 익숙합니다. 하이브리드로 본문은 영국법, 담보는 각국 지역법을 적용하는 경우도 흔합니다.",
  },
  {
    q: "RCF와 TLB의 코버넌트가 다른 이유는 무엇인가요?",
    a: "구조적 역할이 다르기 때문입니다. RCF(Revolving Credit Facility)는 유동성 버퍼 역할로, 차주가 언제든 인출·상환할 수 있습니다. 대주 입장에서 '인출 가능 여부'를 판단해야 하므로 Maintenance Covenant(분기별 재무 테스트)를 유지합니다. 특히 Springing Covenant 구조에서는 RCF 잔액이 일정 수준(예: 약정금액의 35%)을 초과할 때만 Leverage 테스트가 적용됩니다. 반면 TLB는 한 번 인출되면 만기까지 유지되는 Term Loan입니다. Cov-Lite 구조에서는 TLB에 Maintenance Covenant가 없고, 특정 행동(추가 차입·M&A·배당 등) 시에만 테스트하는 Incurrence Covenant만 적용됩니다. 즉 TLB 대주들은 '분기마다 건강 검진하는 권리'를 포기하는 대신 더 높은 수익률을 받는 것입니다.",
  },
  {
    q: "개인 대출이나 중소기업 대출에도 Cov-Lite 개념이 적용되나요?",
    a: "사실상 반대입니다. 개인 모기지나 중소기업 대출은 오히려 코버넌트가 더 촘촘합니다. 개인 모기지의 경우 LTV(Loan-to-Value) 비율, DTI(Debt-to-Income) 비율 등이 실질적인 Maintenance Covenant 역할을 합니다. 중소기업 대출은 자산 담보 비율, 매출 유지 조건, 예금 유지 요건(Bank Account Covenant) 등을 분기 또는 월 단위로 테스트합니다. Cov-Lite는 기관 레버리지드론 시장의 독특한 현상으로, CLO·크레딧 펀드가 수익률 추구를 위해 모니터링 권리를 자발적으로 완화한 결과입니다. PE 스폰서의 강력한 협상력이 없는 일반 기업 대출에서는 은행이 이런 조건을 수용하지 않습니다.",
  },
];

const FAQ_EN = [
  {
    q: "Does a covenant breach immediately trigger an Event of Default?",
    a: "No — in most cases a breach does not immediately trigger an EOD. When a covenant breach occurs, the borrower first receives a 'Cure Period' (typically 30–60 days). Within this window, the borrower can remedy the breach through an Equity Cure (sponsor injects additional equity capital to reduce leverage) or EBITDA improvement, or can request an Amendment & Waiver from the lender group to reset the covenant level. Equity Cure allows the sponsor to inject capital that is treated as EBITDA or used to reduce debt, restoring compliance. However, Cure rights are typically limited — usually twice per year and four times over the life of the facility. Only if all these remedies fail does the agent bank formally declare an Event of Default, accelerating the loan.",
  },
  {
    q: "How were existing Credit Agreements amended for the LIBOR-to-SOFR transition?",
    a: "During the 2021–2023 transition window, most legacy CAs were handled in two ways. First, 'Hardwired Fallback' provisions: new deals began incorporating pre-agreed automatic fallback language that switched to SOFR+CSA upon LIBOR cessation, eliminating the need for future amendments. Second, standalone LIBOR Transition Amendments: existing CAs required a formal amendment process with lender consent. In the US, the ARRC (Alternative Reference Rates Committee) provided standardized fallback language templates; in the UK, the LMA updated its Recommended Form accordingly. Economically, Credit Spread Adjustments (CSA) were applied to preserve equivalence: +11.4bps for 1M, +26.2bps for 3M, and +42.8bps for 6M tenors, reflecting the historical difference between LIBOR and SOFR.",
  },
  {
    q: "What drives the choice between English law and New York law for a Credit Agreement?",
    a: "The choice is primarily driven by borrower domicile, asset location, and syndicate composition. English Law: Based on LMA standard documents, used predominantly for European, Asian, and Middle Eastern deals. Security enforcement is more flexible than under New York law, and the LMA Facility Agreement is effectively the global standard form for syndicated loans. New York Law: Applied to US borrowers or deals with US-located collateral. UCC-based security arrangements are well-understood, and US CLOs and credit funds are more comfortable with New York law documents. A hybrid approach is also common — the main facility agreement governed by English law, with local law security agreements for assets in specific jurisdictions.",
  },
  {
    q: "Why do RCFs and TLBs have different covenant structures?",
    a: "Because their structural roles are fundamentally different. An RCF (Revolving Credit Facility) serves as a liquidity buffer — the borrower can draw and repay at any time. Since lenders need to assess whether the borrower should be permitted to draw, RCFs retain Maintenance Covenants (quarterly financial tests). In Springing Covenant structures, the leverage test only applies when the RCF balance exceeds a threshold (e.g., 35% of commitment). TLBs, by contrast, are term loans — once drawn, they stay outstanding until maturity. In Cov-Lite structures, TLBs carry no Maintenance Covenants, only Incurrence Covenants that test compliance when specific actions occur (additional debt, M&A, dividends). TLB lenders essentially trade the 'quarterly health check' right for higher yield.",
  },
  {
    q: "Does the Cov-Lite concept apply to personal loans or SME lending?",
    a: "In practice, the opposite is true. Personal mortgages and SME loans tend to have tighter covenant protections, not looser. For personal mortgages, LTV (Loan-to-Value) ratios and DTI (Debt-to-Income) ratios function as practical maintenance covenants tested regularly. SME loans include collateral coverage ratios, revenue maintenance conditions, and bank account covenants monitored quarterly or monthly. Cov-Lite is a distinctive phenomenon of the institutional leveraged loan market — the result of CLOs and credit funds voluntarily relaxing monitoring rights in pursuit of higher yields, enabled by PE sponsors' negotiating power. In ordinary corporate lending where PE sponsor leverage doesn't exist, banks do not accept such weakened protections.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function SyndicatedLoanDocsClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
            <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-cyan-600 transition-colors">{ko ? "마켓 101" : "Market 101"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "신디케이티드론" : "Syndicated Loans"}</span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: ACCENT }}>DCM</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">Ch.3 / 5</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{concept.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : concept.titleEn}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : concept.excerptEn}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-700/40">{t}</span>
              ))}
            </div>
            <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-8">
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 1 — 30초 요약
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "신디론 문서와 코버넌트 세계를 숫자로 먼저 잡아봅니다."
                : "The key numbers that define the documentation and covenant landscape."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  label: ko ? "레버드론 CA 평균 분량" : "Leveraged CA avg length",
                  value: "300~600p",
                  sub: ko ? "페이지" : "pages",
                },
                {
                  label: ko ? "코버넌트 유형 수" : "Covenant clause count",
                  value: "20~40",
                  sub: ko ? "개 조항" : "clauses",
                },
                {
                  label: ko ? "Cov-Lite 비율 (2023)" : "Cov-Lite share (2023)",
                  value: "85%+",
                  sub: ko ? "레버드론" : "of lev loans",
                },
                {
                  label: ko ? "LIBOR→SOFR 전환 완료" : "LIBOR→SOFR completed",
                  value: "2023.6",
                  sub: ko ? "완전 폐지" : "full cessation",
                },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — Credit Agreement 지도: 500페이지를 3분 안에
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Credit Agreement 지도: 500페이지를 3분 안에" : "Credit Agreement Map: 500 Pages in 3 Minutes"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {ko
                ? "신디케이티드론의 법적 근간인 Credit Agreement. 15개 핵심 조항을 먼저 이해하면 500페이지가 읽힙니다."
                : "The Credit Agreement is the legal backbone of a syndicated loan. Master these 15 key clauses and the 500 pages become navigable."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "아파트 임대차 계약서의 초대형 버전" : "A Mega-Sized Apartment Lease Agreement"}</strong>
              <br /><br />
              {ko
                ? <>Credit Agreement는 아파트 임대차 계약서의 초대형 버전입니다. 계약 당사자(임대인·임차인 = 대주단·차주), 임대 기간(만기), 월세(이자), 특약사항(코버넌트), 계약 해지 사유(Default Events)까지 구조가 동일합니다.
                <br /><br />
                다른 점은 딱 하나입니다: 임대차 계약이 5~10페이지라면, Credit Agreement는 300~600페이지입니다. 차이를 만드는 것은 EBITDA 정의 하나에만 수십 페이지가 들어가는 Definitions 섹션, 수백 개의 허용 예외 조항(Carve-out), 그리고 담보 설정 스케줄들입니다.</>
                : <>A Credit Agreement is simply a massively expanded apartment lease contract. The parties (landlord/tenant = lenders/borrower), lease term (maturity), monthly rent (interest), special conditions (covenants), and termination events (Events of Default) are all structurally identical.
                <br /><br />
                The one difference: a lease runs 5–10 pages; a Credit Agreement runs 300–600 pages. The bulk comes from the Definitions section (the EBITDA definition alone can span dozens of pages), hundreds of permitted exception carve-outs, and the security schedules.</>
              }
            </AnalogyBox>

            {/* CA 15개 조항 표 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mt-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "조항" : "Clause"}</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "내용" : "Content"}</th>
                    <th className="text-center px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "중요도" : "Priority"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      num: "1",
                      clause: "Definitions",
                      desc: ko ? "모든 용어 정의 (EBITDA, Material Adverse Effect 등)" : "All defined terms (EBITDA, Material Adverse Effect, etc.)",
                      stars: 3,
                    },
                    {
                      num: "2",
                      clause: "The Facilities",
                      desc: ko ? "트랜치 구성, 약정 금액, 만기" : "Tranche structure, commitment amounts, tenor",
                      stars: 3,
                    },
                    {
                      num: "3",
                      clause: "Utilisation",
                      desc: ko ? "인출 조건, 절차" : "Drawdown conditions and procedures",
                      stars: 2,
                    },
                    {
                      num: "4",
                      clause: "Repayment",
                      desc: ko ? "상환 스케줄, 기한전 상환" : "Amortisation schedule, prepayment mechanics",
                      stars: 3,
                    },
                    {
                      num: "5",
                      clause: "Prepayment",
                      desc: ko ? "강제 상환 (ECF Sweep), 자발적 상환" : "Mandatory prepayment (ECF Sweep), voluntary prepayment",
                      stars: 3,
                    },
                    {
                      num: "6",
                      clause: "Interest",
                      desc: ko ? "SOFR+스프레드 계산, 이자 지급일" : "SOFR+spread calculation, interest payment dates",
                      stars: 3,
                    },
                    {
                      num: "7",
                      clause: "Fees",
                      desc: ko ? "수수료 일정" : "Fee schedule (arrangement, agency, commitment fees)",
                      stars: 2,
                    },
                    {
                      num: "8",
                      clause: "Representations",
                      desc: ko ? "차주의 진술과 보증" : "Borrower representations and warranties",
                      stars: 2,
                    },
                    {
                      num: "9",
                      clause: "Conditions Precedent",
                      desc: ko ? "인출 선행조건" : "Conditions precedent to first and subsequent drawdowns",
                      stars: 3,
                    },
                    {
                      num: "10",
                      clause: "Covenants",
                      desc: ko ? "긍정적·부정적 약정" : "Positive and negative covenants",
                      stars: 3,
                    },
                    {
                      num: "11",
                      clause: "Events of Default",
                      desc: ko ? "기한이익 상실 사유" : "Events triggering acceleration and enforcement",
                      stars: 3,
                    },
                    {
                      num: "12",
                      clause: "Changes to Parties",
                      desc: ko ? "대주 양도·차주 변경" : "Lender transfer, borrower substitution",
                      stars: 2,
                    },
                    {
                      num: "13",
                      clause: "The Agent",
                      desc: ko ? "에이전트 역할·면책" : "Agent duties, authority, and exculpation",
                      stars: 2,
                    },
                    {
                      num: "14",
                      clause: "Governing Law",
                      desc: ko ? "준거법 (영국법 or 뉴욕법)" : "Governing law (English law or New York law)",
                      stars: 2,
                    },
                    {
                      num: "15",
                      clause: "Schedules",
                      desc: ko ? "담보 일람, CP 목록, 이자 계산" : "Collateral list, CP checklist, interest calculation mechanics",
                      stars: 2,
                    },
                  ].map((row) => (
                    <tr key={row.num} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <span style={{ color: ACCENT }} className="font-bold">{row.num}.</span> {row.clause}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{row.desc}</td>
                      <td className="px-4 py-3 text-center text-amber-400">
                        {"★".repeat(row.stars)}{"☆".repeat(3 - row.stars)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PracticeBox title={ko ? "Analyst의 CA 리뷰 우선순위" : "Analyst CA Review Priority"}>
              {ko
                ? <>새벽 3시에 500페이지 CA를 받으면 어디부터 읽어야 하는가. 순서가 틀리면 중요한 조항을 놓칩니다.
                  <br /><br />
                  <strong>① Definitions → EBITDA 정의:</strong> 코버넌트 계산의 분모. 어떤 항목이 Add-back되는지, Acquisition EBITDA 산입 방식, Run-rate 허용 범위를 반드시 확인합니다. EBITDA 정의 하나가 수십 bps의 헤드룸 차이를 만듭니다.<br /><br />
                  <strong>② Covenants → Leverage Covenant 수준:</strong> 재무 코버넌트 수치가 비즈니스 플랜 기준 헤드룸이 얼마나 되는지. Springing인지 Full Maintenance인지 확인합니다.<br /><br />
                  <strong>③ Events of Default → Cross-default 조항:</strong> Cross-default 금액 threshold(예: $25M 이상의 다른 부채 디폴트 시 CA도 EOD). 자회사 포함 여부가 중요합니다.<br /><br />
                  <strong>④ Prepayment → ECF Sweep 비율:</strong> Excess Cash Flow(잉여현금흐름)의 몇 %를 강제 상환해야 하는지. 레버리지 하락 시 sweep 비율이 줄어드는 Step-down 구조인지 확인합니다.</>
                : <>When you receive a 500-page CA at 3am, where do you start? Reading in the wrong order means missing critical provisions.
                  <br /><br />
                  <strong>① Definitions → EBITDA definition:</strong> The denominator for all covenant calculations. Check which items are added back, how Acquisition EBITDA is treated, and the run-rate allowance. A single EBITDA definition can create tens of basis points of headroom difference.<br /><br />
                  <strong>② Covenants → Leverage covenant level:</strong> How much headroom does the financial covenant provide against the business plan? Is it a Springing Covenant or Full Maintenance?<br /><br />
                  <strong>③ Events of Default → Cross-default clause:</strong> What is the cross-default threshold (e.g., other debt default of $25M+ triggers EOD here)? Does it extend to subsidiaries?<br /><br />
                  <strong>④ Prepayment → ECF Sweep percentage:</strong> What percentage of Excess Cash Flow must be mandatorily repaid? Is there a step-down structure where the sweep rate reduces as leverage improves?</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — SOFR 전환: 왜 중요한가
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "SOFR 전환: 왜 중요한가" : "The SOFR Transition: Why It Matters"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {ko
                ? "30년간 신디론 이자 계산의 기준이었던 LIBOR가 2023년 6월 완전 폐지됐습니다. 단순한 숫자 변경이 아니라 이자 계산 방식의 근본적인 변화입니다."
                : "LIBOR — the benchmark that governed syndicated loan interest for 30 years — was fully ceased in June 2023. This was not a simple number swap; it was a fundamental change in how interest is calculated."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "30년 쓰던 체온계를 버린 이유" : "Why We Threw Away a 30-Year Thermometer"}</strong>
              <br /><br />
              {ko
                ? <>LIBOR는 30년간 써온 체온계였는데 조작 스캔들로 폐기됐습니다. 2012년 Barclays가 자신들에게 유리하게 LIBOR를 허위 제출했다는 것이 드러났고, 이후 15개 이상의 대형 은행이 관련돼 수십억 달러의 벌금을 냈습니다.
                <br /><br />
                SOFR는 새 체온계입니다. 문제는 LIBOR가 "앞으로 3개월 후 금리를 예상한 값"(forward-looking)을 반영했지만, SOFR는 어제의 실제 담보 레포 거래 금리(backward-looking)입니다. 은행 입장에서 이자 수입 예측이 달라지고, 차주 입장에서는 헤징 전략(IRS)을 완전히 재설정해야 했습니다.</>
                : <>LIBOR was the thermometer used for 30 years — until a manipulation scandal forced its disposal. In 2012, Barclays was found to have falsely submitted LIBOR rates to benefit their own positions. Over 15 major banks were ultimately implicated, paying billions in fines.
                <br /><br />
                SOFR is the new thermometer. The problem: LIBOR was forward-looking (it reflected expected rates 3 months out), while SOFR is backward-looking (it reflects actual overnight secured repo transactions from yesterday). For banks, interest income forecasting changed. For borrowers, hedging strategies — particularly Interest Rate Swaps — had to be completely reconfigured.</>
              }
            </AnalogyBox>

            {/* SOFR 유형 비교 */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                {
                  type: "Term SOFR",
                  icon: "📅",
                  desc: ko
                    ? "CME Group이 발표하는 선도 지표 금리. 1M/3M/6M 기간물이 있음. LIBOR와 가장 유사한 구조로 대부분의 TLB·RCF에 사용."
                    : "CME-published forward-looking rate. Available in 1M/3M/6M tenors. Most similar to LIBOR structure; used in most TLBs and RCFs.",
                  highlight: true,
                },
                {
                  type: "Daily Simple SOFR",
                  icon: "📆",
                  desc: ko
                    ? "매일의 SOFR를 단순 합산. 계산이 단순하나 이자 지급 직전까지 금액을 모름. 일부 단기 시설에 사용."
                    : "Daily SOFR summed simply. Calculation is simple but final interest amount unknown until payment date. Used in some short-term facilities.",
                  highlight: false,
                },
                {
                  type: "SOFR Compounded in Arrears",
                  icon: "🔁",
                  desc: ko
                    ? "기간 내 SOFR를 복리로 합산. 이론적으로 가장 정확하나 이자 지급 2일 전까지 최종 금액 불확실. 채권 시장에서 더 많이 사용."
                    : "SOFR compounded over the period. Theoretically most accurate but final amount unknown until 2 days before payment. More common in bond markets.",
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className={`rounded-xl border p-4 ${item.highlight
                    ? "border-cyan-200 dark:border-cyan-700 bg-cyan-50/50 dark:bg-cyan-900/15"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className={`text-[12px] font-bold ${item.highlight ? "text-cyan-700 dark:text-cyan-300" : "text-gray-700 dark:text-gray-300"}`}>{item.type}</span>
                    {item.highlight && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold" style={{ background: ACCENT }}>주류</span>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CSA 표 */}
            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200">
                  {ko ? "Credit Spread Adjustment (CSA): LIBOR→SOFR 보정값" : "Credit Spread Adjustment (CSA): LIBOR→SOFR Basis"}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{ko ? "ARRC 권고값 (ISDA 표준 적용)" : "ARRC recommended values (ISDA standard)"}</p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  { tenor: "1M SOFR", csa: "+11.448 bps", note: ko ? "1개월물 LIBOR 대체" : "Replaces 1M LIBOR" },
                  { tenor: "3M SOFR", csa: "+26.161 bps", note: ko ? "3개월물 LIBOR 대체 — 가장 보편적" : "Replaces 3M LIBOR — most common" },
                  { tenor: "6M SOFR", csa: "+42.826 bps", note: ko ? "6개월물 LIBOR 대체" : "Replaces 6M LIBOR" },
                ].map((row) => (
                  <div key={row.tenor} className="flex items-center gap-4 px-4 py-3 text-[12px]">
                    <span className="font-bold text-gray-700 dark:text-gray-300 w-24 flex-shrink-0">{row.tenor}</span>
                    <span className="font-extrabold" style={{ color: ACCENT }}>{row.csa}</span>
                    <span className="text-gray-400 dark:text-gray-500">{row.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <PracticeBox title={ko ? "$500M 3Y TLB 이자 계산 예시" : "$500M 3Y TLB Interest Calculation Example"}>
              {ko
                ? <>Term SOFR 3M 기준 분기 이자 계산:
                  <br /><br />
                  <strong>Term SOFR 3M:</strong> 5.30%<br />
                  <strong>+ CSA (3M):</strong> 0.262%<br />
                  <strong>+ Spread (TLB BB):</strong> 3.50%<br />
                  <strong>= 총 이자율:</strong> 9.062%<br /><br />
                  <strong>분기 이자 = $500M × 9.062% / 4 = $11.3M</strong><br /><br />
                  OID(Original Issue Discount)가 99.0%라면 실제 수령액은 $495M이지만 이자 계산 기준은 $500M 전액입니다. Floor가 SOFR 1.00%라면, Term SOFR가 1% 이하로 내려가더라도 Floor 수준을 적용합니다. OID는 연환산 시 약 +20~25bps 추가 수익률 효과가 있습니다.</>
                : <>Quarterly interest calculation on a $500M Term Loan B:
                  <br /><br />
                  <strong>Term SOFR 3M:</strong> 5.30%<br />
                  <strong>+ CSA (3M):</strong> 0.262%<br />
                  <strong>+ Spread (TLB BB):</strong> 3.50%<br />
                  <strong>= Total rate:</strong> 9.062%<br /><br />
                  <strong>Quarterly interest = $500M × 9.062% / 4 = $11.3M</strong><br /><br />
                  If OID is 99.0%, actual proceeds received are $495M but interest accrues on the full $500M face amount. If the SOFR Floor is 1.00%, the floor applies regardless of actual SOFR. OID translates to roughly +20–25bps of additional yield on an annualised basis.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — Financial Covenants: 숫자로 정해진 안전망
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Financial Covenants: 숫자로 정해진 안전망" : "Financial Covenants: The Numerical Safety Net"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "Financial Covenant는 차주의 재무 건전성을 분기마다 측정하는 숫자 울타리입니다. 위반하면 즉각적인 협상 의무가 생깁니다."
                : "Financial Covenants are numerical fences around borrower financial health, tested every quarter. A breach immediately triggers negotiation obligations."}
            </p>

            {/* 코버넌트 헤드룸 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "레버리지 코버넌트 헤드룸 시나리오 (코버넌트 수준: 5.5×)" : "Leverage Covenant Headroom Scenarios (Covenant Level: 5.5×)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "낮을수록 헤드룸 충분 — 5.5× 라인 이상 시 위반" : "Lower is safer — breaches above the 5.5× covenant line"}
              </p>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={HEADROOM_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="qtr" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[2, 6]} tickFormatter={(v) => `${v}×`} />
                  <Tooltip content={<CovenantTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  {/* 코버넌트 라인 */}
                  <Line
                    type="monotone" dataKey="tight"
                    name={ko ? "위기 시나리오" : "Stress scenario"}
                    stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone" dataKey="normal"
                    name={ko ? "기본 시나리오" : "Base scenario"}
                    stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone" dataKey="comfortable"
                    name={ko ? "낙관 시나리오" : "Upside scenario"}
                    stroke={ACCENT} strokeWidth={2} dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-8 border-t-2 border-dashed border-red-400" />
                <span className="text-[11px] text-red-500">{ko ? "코버넌트 위반선 (5.5×) — 이 위로 올라가면 위반" : "Covenant breach line (5.5×) — above this = breach"}</span>
              </div>
            </div>

            {/* 3대 Financial Covenant */}
            <div className="space-y-5">
              {/* ① Leverage Ratio */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0" style={{ background: ACCENT }}>①</span>
                  <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">Leverage Ratio (Net Debt / EBITDA)</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-[12px]">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{ko ? "계산 공식" : "Formula"}</p>
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3 font-mono text-[11px]">
                      (총부채 - 현금) / LTM EBITDA
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {ko
                        ? "LTM = Last Twelve Months. 분기마다 롤링으로 계산합니다."
                        : "LTM = Last Twelve Months, rolled forward each quarter."}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{ko ? "일반적 수준" : "Typical Levels"}</p>
                    <div className="space-y-1.5 text-[12px]">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20">
                        <span className="text-teal-700 dark:text-teal-300">IG론</span>
                        <span className="font-bold text-teal-700 dark:text-teal-300">&lt; 2~3×</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                        <span className="text-amber-700 dark:text-amber-300">{ko ? "레버드론" : "Leveraged"}</span>
                        <span className="font-bold text-amber-700 dark:text-amber-300">&lt; 5~6×</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-[12px] text-gray-600 dark:text-gray-400">
                  <strong>{ko ? "핵심:" : "Key:"}</strong>{" "}
                  {ko
                    ? "Springing Covenant 구조에서는 RCF 잔액이 약정금액의 35%를 초과할 때만 Leverage Ratio가 테스트됩니다. TLB는 Cov-Lite 구조 시 이 테스트 없음. EBITDA 정의가 핵심 — 코버넌트 EBITDA에는 Cost Savings, Synergies, Add-backs가 포함돼 재무제표 EBITDA보다 훨씬 높게 나올 수 있습니다."
                    : "In a Springing Covenant structure, the Leverage Ratio is only tested when RCF utilisation exceeds 35% of commitment. TLBs in Cov-Lite structures have no such test. The EBITDA definition is critical — Covenant EBITDA includes cost savings, synergies, and add-backs, often significantly exceeding reported EBITDA."}
                </div>
              </div>

              {/* ② Interest Coverage */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0" style={{ background: ACCENT }}>②</span>
                  <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">Interest Coverage Ratio (EBITDA / Interest Expense)</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-[12px]">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{ko ? "계산 공식" : "Formula"}</p>
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3 font-mono text-[11px]">
                      LTM EBITDA / 총이자비용
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {ko
                        ? "이자비용에 PIK(Payment-In-Kind) 포함 여부, Cash Interest vs PIK 구분이 중요합니다."
                        : "Whether PIK (Payment-In-Kind) interest is included, and Cash vs PIK distinction, are critical nuances."}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{ko ? "일반적 수준" : "Typical Levels"}</p>
                    <div className="space-y-1.5 text-[12px]">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20">
                        <span className="text-teal-700 dark:text-teal-300">IG론</span>
                        <span className="font-bold text-teal-700 dark:text-teal-300">&gt; 4.0×</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                        <span className="text-amber-700 dark:text-amber-300">{ko ? "레버드론" : "Leveraged"}</span>
                        <span className="font-bold text-amber-700 dark:text-amber-300">&gt; 2.0×</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ③ FCCR */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0" style={{ background: ACCENT }}>③</span>
                  <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">Fixed Charge Coverage Ratio (FCCR)</h3>
                </div>
                <div className="text-[12px]">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{ko ? "계산 공식" : "Formula"}</p>
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3 font-mono text-[11px] mb-3">
                    (EBITDA - Capex - Tax) / (Interest + Scheduled Debt Repayment)
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">
                    {ko
                      ? "RCF Available Amount(인출 가능 금액)를 결정하는 데 사용됩니다. FCCR 1.0× 테스트: RCF 잔액이 특정 금액 이상인 경우 FCCR이 1.0× 이상이어야만 추가 인출 가능합니다. 이는 차주가 이자·상환을 커버하고도 여유가 있어야 RCF를 쓸 수 있다는 의미입니다."
                      : "Used to determine RCF Available Amount. The FCCR 1.0× test: when RCF utilisation exceeds a threshold, FCCR must be at least 1.0× to draw further. This means the borrower must be able to cover interest and scheduled repayments before accessing the revolving facility."}
                  </p>
                </div>
              </div>
            </div>

            <PracticeBox title={ko ? "Analyst 코버넌트 헤드룸 분석 실전" : "Analyst Covenant Headroom Analysis"}>
              {ko
                ? <>코버넌트 헤드룸 분석은 IM의 핵심 섹션 중 하나입니다. 3단계로 진행합니다:
                  <br /><br />
                  <strong>Step 1 — 3개년 EBITDA 프로젝션 vs 코버넌트 레벨:</strong> 재무 모델의 Base Case EBITDA와 Covenant EBITDA(Add-backs 포함)를 각각 계산하고, Leverage Ratio를 분기별로 산출합니다. 코버넌트 레벨 대비 헤드룸 %를 표로 정리합니다.<br /><br />
                  <strong>Step 2 — 헤드룸 % 계산:</strong> 헤드룸 % = (코버넌트 레벨 - 실제 레버리지) / 코버넌트 레벨 × 100. 예: 코버넌트 5.5×, 실제 4.4× → 헤드룸 20%.<br /><br />
                  <strong>Step 3 — 스트레스 테스트 (EBITDA -20% 시나리오):</strong> EBITDA가 20% 하락한다고 가정하면 레버리지가 어떻게 변하는지 계산합니다. 예: EBITDA $100M → $80M으로 하락 시, Net Debt $400M 기준 레버리지 4.0× → 5.0×. 이때 코버넌트 5.5× 대비 헤드룸이 얼마나 남는지 확인합니다. MD와 공유하는 Stress Test 슬라이드는 이 분석의 핵심 아웃풋입니다.</>
                : <>Covenant headroom analysis is one of the core sections of an IM credit memo. Three steps:
                  <br /><br />
                  <strong>Step 1 — 3-year EBITDA projection vs covenant level:</strong> Calculate both Base Case EBITDA and Covenant EBITDA (with add-backs) from the financial model, then compute quarterly Leverage Ratios. Summarise headroom % vs covenant level in a table.<br /><br />
                  <strong>Step 2 — Headroom % calculation:</strong> Headroom % = (Covenant level − Actual leverage) / Covenant level × 100. Example: Covenant 5.5×, actual 4.4× → headroom 20%.<br /><br />
                  <strong>Step 3 — Stress test (EBITDA −20% scenario):</strong> Model the impact of a 20% EBITDA decline on leverage. Example: EBITDA $100M drops to $80M; at Net Debt $400M, leverage moves from 4.0× to 5.0×. With a 5.5× covenant, headroom narrows from 27% to 9%. The Stress Test slide shared with the MD is the key deliverable from this analysis.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — Negative Covenants: 차주의 손발을 묶는 조항들
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Negative Covenants: 차주의 손발을 묶는 조항들" : "Negative Covenants: Tying the Borrower's Hands"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "Negative Covenant는 차주가 하지 말아야 할 행동을 명시합니다. 은행의 상환 우선순위와 담보 가치를 보호하는 6개 핵심 조항입니다."
                : "Negative Covenants specify what the borrower must not do. These six core clauses protect lender repayment priority and collateral value."}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  num: "1",
                  title: ko ? "제한적 지불 (Restricted Payments)" : "Restricted Payments",
                  icon: "💸",
                  desc: ko
                    ? "배당, 자사주매입, 계열사 대여 제한. 현금이 회사 밖으로 나가는 것을 통제합니다. PE 딜에서 스폰서의 배당 추출(Dividend Recapitalization)을 제한하는 핵심 조항입니다."
                    : "Limits dividends, share buybacks, and intercompany loans. Controls cash leaving the company. A critical clause limiting sponsor dividend recapitalisation in PE deals.",
                  color: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10",
                },
                {
                  num: "2",
                  title: ko ? "추가 부채 (Additional Indebtedness)" : "Additional Indebtedness",
                  icon: "📋",
                  desc: ko
                    ? "새 차입 한도 설정. 기존 대주의 상환 우선순위를 희석시키는 추가 부채(특히 PIK Notes, Second Lien)를 제한합니다. Basket 금액 내에서는 허용."
                    : "Sets limits on new borrowing. Restricts additional debt (especially PIK notes, second lien) that dilutes existing lender priority. Permitted within defined baskets.",
                  color: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10",
                },
                {
                  num: "3",
                  title: ko ? "자산 매각 (Asset Sales)" : "Asset Sales",
                  icon: "🏗️",
                  desc: ko
                    ? "자산 처분 시 순매각대금의 일정 비율(보통 50~100%)을 강제 상환(ECF Sweep)합니다. 담보 자산 가치를 유지하는 핵심 메커니즘입니다."
                    : "Requires mandatory prepayment (ECF Sweep) of a defined percentage (typically 50–100%) of net asset sale proceeds. Core mechanism preserving collateral asset value.",
                  color: "border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10",
                },
                {
                  num: "4",
                  title: ko ? "담보 제공 (Liens)" : "Liens",
                  icon: "🔒",
                  desc: ko
                    ? "기존 담보 이외 추가 담보 설정을 제한합니다. 새 대주가 기존 대주보다 우선순위를 갖는 1st Lien 포지션을 취하지 못하게 방어합니다."
                    : "Restricts creation of security interests beyond existing collateral. Prevents new lenders from obtaining a superior first-lien position over existing lenders.",
                  color: "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10",
                },
                {
                  num: "5",
                  title: ko ? "M&A (Mergers & Acquisitions)" : "Mergers & Acquisitions",
                  icon: "🤝",
                  desc: ko
                    ? "대규모 인수 시 대주 동의를 요구합니다. 인수 후 레버리지 급증, 사업 성격 변화, 담보 구조 훼손을 방지하는 조항입니다."
                    : "Requires lender consent for material acquisitions. Prevents post-acquisition leverage spikes, business character changes, and collateral structure deterioration.",
                  color: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10",
                },
                {
                  num: "6",
                  title: ko ? "관계사 거래 (Affiliate Transactions)" : "Affiliate Transactions",
                  icon: "🏢",
                  desc: ko
                    ? "시장가 이하 관계사 거래를 제한합니다. PE 스폰서가 포트폴리오 기업 간 가치를 이전하거나 관리 수수료를 과도하게 부과하는 것을 방지합니다."
                    : "Restricts below-market transactions with affiliates. Prevents PE sponsors from transferring value between portfolio companies or extracting excessive management fees.",
                  color: "border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10",
                },
              ].map((item) => (
                <div key={item.num} className={`rounded-xl border p-4 ${item.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ background: ACCENT }}>{item.num}</span>
                        <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-2">
                {ko ? "Permitted Exceptions (Carve-outs)" : "Permitted Exceptions (Carve-outs)"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "각 Negative Covenant에는 허용되는 예외(Carve-out)가 있습니다. 예: Restricted Payments에서도 경영진 스톡옵션 행사, 세금 납부 목적의 배당은 허용됩니다. 레버드론일수록 carve-out이 넓고 상세합니다. PE 스폰서는 협상 과정에서 Restricted Payment Basket을 최대한 넓히려 하고(배당 추출 유연성), MLA는 이를 제한하려 합니다. Carve-out의 폭이 실질적인 보호 수준을 결정합니다."
                  : "Each negative covenant includes permitted exceptions (carve-outs). Example: Restricted Payments still permit management stock option exercises and tax-distribution dividends. Leveraged deals have broader, more detailed carve-outs than IG deals. PE sponsors push to maximise the Restricted Payment Basket (dividend extraction flexibility) while MLAs seek to constrain it. The breadth of carve-outs determines the actual level of lender protection."}
              </p>
            </div>

            <PracticeBox title={ko ? "어소시에이트의 코버넌트 협상 지원" : "Associate Covenant Negotiation Support"}>
              {ko
                ? <>Term Sheet 단계에서 차주 법률팀이 요청하는 carve-out 확대 vs MLA의 방어. 실제 협상 포인트 3가지:
                  <br /><br />
                  <strong>① Restricted Payment Basket 확대 요청:</strong> 스폰서는 "EBITDA의 50%까지 배당 가능"을 원하고, MLA는 "$25M 고정 바스켓"을 제안합니다. Associate는 비슷한 딜의 컴프(comparable transaction) 조건을 리서치해 협상 기준선을 제시합니다.<br /><br />
                  <strong>② Asset Sale Sweep 비율 하향 요청:</strong> 차주는 "레버리지 4.0× 이하 시 Sweep 25%"를 원하고, MLA는 "항상 75%"를 요구합니다. 레버리지 Step-down 표를 만들어 중간점을 찾습니다.<br /><br />
                  <strong>③ M&A Permitted Acquisition 금액 상향:</strong> 스폰서는 "Net Leverage 5.5× 이하면 제한 없이 M&A 가능"을 원하지만, MLA는 "연간 $50M 한도"를 제안합니다. 동일 섹터 딜의 M&A basket 크기를 비교 분석해 근거 자료를 만듭니다.</>
                : <>At the term sheet stage, the borrower's legal team pushes for carve-out expansion while the MLA defends against it. Three real negotiation points:
                  <br /><br />
                  <strong>① Restricted Payment Basket expansion:</strong> Sponsor wants "dividends up to 50% of EBITDA"; MLA proposes a fixed $25M basket. The Associate researches comparable transaction terms to anchor the negotiation.<br /><br />
                  <strong>② Asset Sale Sweep rate reduction:</strong> Borrower wants "25% sweep if leverage below 4.0×"; MLA insists on "75% always." Build a step-down table across leverage levels to find the midpoint.<br /><br />
                  <strong>③ Permitted Acquisition amount increase:</strong> Sponsor wants "unlimited M&A if Net Leverage below 5.5×"; MLA proposes "$50M annual cap." Comparative analysis of M&A basket sizes in same-sector deals provides the evidence base for negotiation.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — Cov-Lite 해부
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Cov-Lite 해부: 은행의 눈을 멀게 하는 구조" : "Cov-Lite Anatomy: The Structure That Blinds Banks"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "2023년 기준 레버드론의 85%+가 Cov-Lite입니다. 은행 입장에서 조기 경보 없는 구조가 왜 이렇게 확산됐는지 해부합니다."
                : "Over 85% of leveraged loans in 2023 were Cov-Lite. Here is why this structure — which strips banks of early warning — has come to dominate the market."}
            </p>

            {/* Cov-Lite 비율 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "레버드론 Cov-Lite 비율 추이 (%)" : "Leveraged Loan Cov-Lite Adoption Rate (%)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">Source: S&P Global LCD, LSEG LPC</p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={COV_LITE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
                  <Tooltip content={<CovLiteTooltip />} />
                  <Line
                    type="monotone" dataKey="rate"
                    name="Cov-Lite %"
                    stroke={ACCENT} strokeWidth={2.5}
                    dot={{ r: 4, fill: ACCENT }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Maintenance vs Incurrence */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🏥</span>
                  <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">Maintenance Covenant</h3>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  {ko
                    ? "분기마다 무조건 테스트. '아프든 건강하든 매 분기 건강검진'. IG 신디론과 RCF에 주로 적용됩니다."
                    : "Tested every quarter regardless of borrower actions — a mandatory quarterly health check. Used in IG loans and RCFs."}
                </p>
                <div className="text-[11px] text-green-600 dark:text-green-400 font-semibold">
                  ✓ {ko ? "조기 경보 기능 있음" : "Early warning system: YES"}
                </div>
              </div>
              <div className="rounded-xl border border-cyan-200 dark:border-cyan-700 bg-cyan-50/50 dark:bg-cyan-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">Incurrence Covenant</h3>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  {ko
                    ? "특정 행동(추가 차입·배당·M&A) 시에만 테스트. '행동할 때만 검사'. Cov-Lite TLB에 적용."
                    : "Tested only when the borrower takes specific actions (additional debt, dividends, M&A). Test on action only. Applied in Cov-Lite TLBs."}
                </p>
                <div className="text-[11px] text-red-500 font-semibold">
                  ✗ {ko ? "조기 경보 기능 없음" : "Early warning system: NO"}
                </div>
              </div>
            </div>

            {/* Toys'R'Us 케이스 */}
            <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-900/10 p-5 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚠️</span>
                <h3 className="text-[14px] font-extrabold text-rose-800 dark:text-rose-200">{ko ? "Toys'R'Us 사례: Cov-Lite의 비용" : "Toys'R'Us Case: The Cost of Cov-Lite"}</h3>
              </div>
              <p className="text-[12px] text-rose-700 dark:text-rose-300 leading-relaxed">
                {ko
                  ? <>2005년 KKR·Bain·Vornado의 $5B LBO 이후 Toys'R'Us는 Cov-Lite 구조 덕분에 2013~2016년 재무 악화 중에도 코버넌트 위반이 없었습니다. Amazon이 장난감 시장을 잠식하고, 연간 $400M 이상의 임대료가 현금을 소진하고 있었지만, Maintenance Covenant가 없었기 때문에 은행들은 분기 리포트를 받아보고도 "공식적인 행동"을 취할 수 없었습니다.
                  <br /><br />
                  결과: 2016~2017년 3차례의 뒤늦은 Amendment 요청, 2017년 9월 파산 신청. 만약 Full Maintenance Covenant 구조였다면, 2014~2015년 레버리지 급등 시 에이전트가 개입해 조기 리스트럭처링이 가능했을 것입니다.</>
                  : <>After the 2005 $5B LBO by KKR·Bain·Vornado, Toys'R'Us remained technically covenant-compliant through the 2013–2016 period of deteriorating financials — thanks to Cov-Lite. Amazon was destroying the toy market, and $400M+ in annual lease costs were draining cash, but without Maintenance Covenants, banks received quarterly reports yet could take no "official action."
                  <br /><br />
                  Result: three rushed amendment requests in 2016–2017, then Chapter 11 in September 2017. Under a Full Maintenance Covenant structure, the agent could have intervened during the 2014–2015 leverage spike and facilitated an earlier restructuring.</>
                }
              </p>
            </div>

            {/* Cov-Lite 지속 이유 */}
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              {[
                {
                  icon: "🏦",
                  title: ko ? "CLO 수요" : "CLO Demand",
                  desc: ko ? "레버드론 수요의 60~70%를 차지하는 CLO 매니저들이 코버넌트 제한보다 수익률을 우선합니다." : "CLO managers, who account for 60–70% of leveraged loan demand, prioritise yield over covenant protection.",
                },
                {
                  icon: "🎯",
                  title: ko ? "PE 스폰서 협상력" : "PE Sponsor Leverage",
                  desc: ko ? "대형 PE 하우스는 여러 딜을 동시에 집행합니다. 이번 딜에서 Cov-Lite를 안 주면 다음 딜에서 다른 은행을 씁니다." : "Large PE sponsors run multiple mandates simultaneously. Refuse Cov-Lite on this deal and the next mandate goes elsewhere.",
                },
                {
                  icon: "📈",
                  title: ko ? "저금리 시대 유산" : "Low-Rate Era Legacy",
                  desc: ko ? "2010~2021년 저금리 환경에서 기관 투자자들의 yield 추구가 Cov-Lite 구조를 수용하게 만들었습니다." : "A decade of near-zero rates drove institutional investors to accept Cov-Lite in the hunt for yield.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                  <span className="text-xl mb-2 block">{item.icon}</span>
                  <h4 className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <PracticeBox title={ko ? "MD가 Cov-Lite 딜을 언더라이트할 때 추가로 확인하는 것" : "What an MD Checks Extra Before Underwriting a Cov-Lite Deal"}>
              {ko
                ? <>Cov-Lite 딜은 분기마다 건강검진이 없는 계약입니다. 그러므로 딜 실행 전 다음 4가지를 반드시 확인합니다:
                  <br /><br />
                  <strong>① 리파이낸싱 경로:</strong> 만기 도래 전 IPO·전략적 매각·채권 발행 등 명확한 Exit Path가 있는가. 없으면 만기 연장만 남는데, 그때 시장이 닫혀있으면 디폴트로 직결됩니다.<br /><br />
                  <strong>② 스폰서 지원 여력:</strong> 위기 시 스폰서가 추가 자본을 투입(Equity Cure)할 의지와 여력이 있는가. 스폰서 펀드의 잔여 투자 가능 금액(Dry Powder)을 확인합니다.<br /><br />
                  <strong>③ 업계 사이클 위치:</strong> 피크 실적 기준으로 딜을 구조화하고 있지는 않은가. 업계 Downturn이 3~5년 내 예상된다면 Cov-Lite + 고레버리지의 조합은 시한폭탄입니다.<br /><br />
                  <strong>④ 유동성 버퍼:</strong> RCF 가용 금액이 연간 Cash Interest의 최소 1.5~2.0배 이상인지. 최악의 상황에서 RCF로 최소 12~18개월의 이자 지급이 가능해야 합니다.</>
                : <>A Cov-Lite deal is a contract without quarterly health checks. Before underwriting, four additional items must be verified:
                  <br /><br />
                  <strong>① Refinancing path:</strong> Is there a clear exit route before maturity — IPO, strategic sale, bond issuance? Without one, maturity extension is the only option, and if markets are closed at that point, default is direct.<br /><br />
                  <strong>② Sponsor support capacity:</strong> Does the sponsor have the willingness and dry powder to inject equity (Equity Cure) in a stress scenario? Check remaining investable capital in the sponsor fund.<br /><br />
                  <strong>③ Industry cycle position:</strong> Is the deal structured on peak earnings? If an industry downturn is expected within 3–5 years, Cov-Lite combined with high leverage is a time bomb.<br /><br />
                  <strong>④ Liquidity buffer:</strong> Is the available RCF at least 1.5–2.0× annual Cash Interest? In a worst-case scenario, the RCF must be able to cover at least 12–18 months of interest payments.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 7 — Amendment & Waiver: 계약 수정의 정치학
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Amendment & Waiver: 계약 수정의 정치학" : "Amendment & Waiver: The Politics of Contract Modification"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "딜 서명 후에도 Credit Agreement는 살아있는 문서입니다. 상황 변화에 따라 수정(Amendment)이 필요하고, 그 과정은 다수결의 정치입니다."
                : "A Credit Agreement is a living document even after signing. Changes in circumstances require Amendments, and the process is a politics of majority voting."}
            </p>

            {/* 투표 메커니즘 */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {[
                {
                  type: ko ? "Simple Majority" : "Simple Majority",
                  threshold: "50%+",
                  scope: ko ? "일반 사항" : "General matters",
                  examples: ko
                    ? ["정보 제공 의무 변경", "에이전트 교체", "일반 행정 조항"]
                    : ["Information undertaking changes", "Agent replacement", "General administrative provisions"],
                  color: "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10",
                  labelColor: "bg-green-500",
                },
                {
                  type: ko ? "Super Majority" : "Super Majority",
                  threshold: "66.7%+",
                  scope: ko ? "주요 조항" : "Key provisions",
                  examples: ko
                    ? ["코버넌트 수준 변경", "담보 추가·해제", "이벤트 오브 디폴트 조정"]
                    : ["Covenant level changes", "Security addition/release", "Event of Default adjustments"],
                  color: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10",
                  labelColor: "bg-amber-500",
                },
                {
                  type: ko ? "Unanimous" : "Unanimous",
                  threshold: "100%",
                  scope: ko ? "핵심 경제 조건" : "Core economic terms",
                  examples: ko
                    ? ["금리·스프레드 변경", "만기 연장", "원금 감면"]
                    : ["Rate/spread changes", "Maturity extension", "Principal write-down"],
                  color: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10",
                  labelColor: "bg-red-500",
                },
              ].map((item) => (
                <div key={item.type} className={`rounded-xl border p-4 ${item.color}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{item.type}</span>
                    <span className={`text-[14px] font-extrabold px-2 py-0.5 rounded-lg text-white ${item.labelColor}`}>{item.threshold}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 font-semibold">{item.scope}</p>
                  <ul className="space-y-1">
                    {item.examples.map((ex) => (
                      <li key={ex} className="text-[11px] text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                        <span className="flex-shrink-0 mt-0.5">•</span>{ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Amendment Fee & Lender Fatigue */}
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {ko ? "Amendment Fee: 동의의 대가" : "Amendment Fee: The Price of Consent"}
                </h3>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Amendment에 동의해준 대주들에게 지급하는 수수료입니다. 통상 25~50bps (약정금액 기준)입니다. 예: $1B 신디론에서 Amendment Fee 25bps = $2.5M. 동의 거부 대주는 수수료를 받지 못하지만, 조건 변경의 혜택(예: 코버넌트 완화)은 동일하게 받습니다 — 이를 'Free Rider Problem'이라 합니다. 이 때문에 에이전트 은행은 투표 결과와 관계없이 모든 대주에게 변경 조건을 적용해야 합니다."
                    : "A fee paid to consenting lenders. Typically 25–50bps on commitment. Example: a $1B syndicated loan with a 25bps amendment fee = $2.5M. Non-consenting lenders receive no fee but enjoy the same benefit of the amended terms (e.g., covenant relaxation) — the classic 'Free Rider Problem.' This is why the agent must apply amended terms to all lenders regardless of how they voted."}
                </p>
              </div>

              <div className="rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50/40 dark:bg-orange-900/10 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">😴</span>
                  <h3 className="text-[13px] font-bold text-orange-800 dark:text-orange-200">
                    {ko ? "Lender Fatigue: 반복된 Amendment의 경고 신호" : "Lender Fatigue: The Warning Signal of Repeated Amendments"}
                  </h3>
                </div>
                <p className="text-[12px] text-orange-700 dark:text-orange-300 leading-relaxed">
                  {ko
                    ? <>반복된 Amendment 요청으로 대주들이 피로해지는 현상입니다. 차주의 신용 악화 신호이기도 합니다. Toys'R'Us는 2016~2017년 3차례 연속 Amendment를 요청했는데, 대주들이 이를 수락할 때마다 코버넌트가 완화됐고 차주의 재무 실태는 감춰졌습니다. 세 번째 Amendment 이후 6개월 만에 파산이 신청됐습니다.
                    <br /><br />
                    MD는 차주가 두 번째 Amendment를 요청할 때부터 Exit 전략을 검토합니다: 포지션 매각(Secondary Market), 리스트럭처링 전문팀 개입, 또는 Distressed Exchange 준비.</>
                    : <>This describes lender fatigue from repeated amendment requests — also a signal of borrower credit deterioration. Toys'R'Us requested three consecutive amendments in 2016–2017; each time lenders agreed, covenants were relaxed and the true financial state was obscured. Bankruptcy was filed six months after the third amendment.
                    <br /><br />
                    From the second amendment request onward, MDs begin reviewing exit strategy: secondary market loan sale, engaging the restructuring team, or preparing for a distressed exchange.</>
                  }
                </p>
              </div>
            </div>

            <PracticeBox title={ko ? "Associate의 Amendment 프로세스 관리" : "Associate's Amendment Process Management"}>
              {ko
                ? <>Amendment 프로세스는 에이전트 은행이 주도하고, Deal Team Associate가 실무를 지원합니다. 4단계:
                  <br /><br />
                  <strong>① 동의서 발송:</strong> 에이전트가 모든 대주에게 'Consent Solicitation'을 발송합니다. 변경 조항, 이유, Amendment Fee 조건, 투표 마감일(보통 2주)을 명시합니다.<br /><br />
                  <strong>② 투표 추적:</strong> Associate는 스프레드시트로 각 대주의 약정금액·투표 여부·찬반을 실시간 추적합니다. 66.7%·100% 등 기준치 달성 여부를 계산합니다.<br /><br />
                  <strong>③ 결과 집계:</strong> 마감일 기준 투표 집계. 기준 미달 시 마감 연장 또는 개별 대주 설득 전화(이를 'Bank Run'이라 부릅니다)를 진행합니다.<br /><br />
                  <strong>④ 에이전트 통지:</strong> 기준 달성 시 에이전트가 모든 대주에게 Amendment Effective Date와 변경된 조항을 공식 통지합니다. 이후 CA 문서는 재서명 또는 정오표(Errata) 형태로 업데이트됩니다.</>
                : <>The amendment process is led by the agent bank, with the deal team Associate managing the mechanics. Four steps:
                  <br /><br />
                  <strong>① Consent solicitation dispatch:</strong> The agent sends a 'Consent Solicitation' to all lenders specifying the amended clause, rationale, amendment fee terms, and voting deadline (typically two weeks).<br /><br />
                  <strong>② Vote tracking:</strong> Associate tracks each lender's commitment amount, voting status, and position (yes/no) in a real-time spreadsheet. Monitors progress against the 66.7%, 100%, or other required thresholds.<br /><br />
                  <strong>③ Results tally:</strong> Votes counted at deadline. If threshold not reached, deadline is extended or individual lender calls are made to solicit support (internally called a 'Bank Run').<br /><br />
                  <strong>④ Agent notification:</strong> Upon threshold achievement, the agent formally notifies all lenders of the Amendment Effective Date and changed provisions. The CA document is then updated via re-execution or errata.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
            <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
          </motion.section>

          {/* ── 시리즈 네비게이션 (하단) ── */}
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
                {ko ? "신디케이티드론 101 시리즈" : "Syndicated Loans 101 Series"}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SYNDLOAN_SERIES.filter((ch) => ch.slug !== THIS_CH).map((ch) => (
                <Link key={ch.slug} href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}>
                  <div className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ background: ACCENT }}>{ch.ch}</span>
                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {ko ? ch.title : ch.titleEn}
                    </span>
                    <span className="ml-auto text-cyan-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── 참고 자료 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">{ko ? "참고 자료" : "References"}</h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "LMA (2023). LMA Recommended Form of Facility Agreement — Senior Multicurrency Term and Revolving Facilities Agreement.",
                "ARRC (2021). ARRC Recommended Fallback Language for New Originations of LIBOR Bilateral Business Loans.",
                "S&P Global LCD (2023). US Leveraged Loan Primer: Cov-Lite Market Analysis.",
                "LSEG LPC (2023). Global Syndicated Loans Market Review.",
                "CME Group (2023). Term SOFR Reference Rates Methodology.",
                "Financial Stability Board (2014). Reforming Major Interest Rate Benchmarks.",
                "Moody's Analytics (2022). Covenant Quality Index: Leveraged Loan Market Report.",
                "Harvard Business School (2018). Toys'R'Us: Case Study in Leveraged Buyout and Cov-Lite Risk.",
              ].map((ref, i) => (
                <li key={i}>[{i + 1}] {ref}</li>
              ))}
            </ol>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />

        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("syndicated-loan-docs");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
