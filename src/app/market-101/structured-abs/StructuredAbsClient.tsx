"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── 색상 & 상수 ──────────────────────────────────────────────────────────────
const ACCENT       = "#f59e0b"; // amber-400
const ACCENT_DARK  = "#d97706"; // amber-600
const ACCENT_LIGHT = "#fffbeb"; // amber-50
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "structured-abs";
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"      : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"      : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"     : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"   : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기" : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"   : "Ch.6 Cases"      },
];

function ChapterNav({ ko }: { ko: boolean }) {
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {STRUCTURED_SERIES.map((ch) => {
        const active = ch.slug === THIS_CH;
        return (
          <Link key={ch.slug} href={`${base}/${ch.slug}`}>
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-700 dark:hover:text-amber-300"
              }`}
              style={active ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ── 차트 데이터 ──────────────────────────────────────────────────────────────
// 미국 ABS 종류별 시장 규모 ($ Trillion, SIFMA 2023)
const ABS_MARKET_DATA = [
  { type: "Auto ABS",       size: 0.29, color: ACCENT },
  { type: "Credit Card",    size: 0.17, color: "#fbbf24" },
  { type: "Student Loan",   size: 0.18, color: "#fcd34d" },
  { type: "Equipment",      size: 0.11, color: "#fde68a" },
  { type: "Other",          size: 0.12, color: "#fef3c7" },
];

// Toyota ABS 트랑쉐별 금액·금리 (Toyota Auto Receivables 2024-A)
const TOYOTA_TRANCHE_DATA = [
  { tranche: "A-1",  amount: 450, rate: 5.35, color: ACCENT },
  { tranche: "A-2",  amount: 380, rate: 5.41, color: "#fbbf24" },
  { tranche: "A-3",  amount: 320, rate: 5.52, color: "#fcd34d" },
  { tranche: "A-4",  amount: 185, rate: 5.68, color: "#f59e0b" },
  { tranche: "B",    amount: 95,  rate: 5.85, color: "#f97316" },
  { tranche: "C",    amount: 70,  rate: 6.24, color: "#ef4444" },
];

// 신용 보강 구성 (OC 예시 파이)
const CREDIT_ENHANCEMENT_PIE = [
  { name: "담보풀 가치 (Collateral Pool)", value: 107, color: ACCENT },
  { name: "채권 원금 (Note Principal)",    value: 100, color: "#e5e7eb" },
];

// ── 보조 컴포넌트 ────────────────────────────────────────────────────────────
function AnalogyBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5"
      style={{ borderColor: ACCENT }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function KeyBox({
  label,
  labelEn,
  ko,
  children,
}: {
  label: string;
  labelEn: string;
  ko: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: ACCENT }}
        >
          {ko ? label : labelEn}
        </span>
      </div>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "ABS와 MBS는 어떻게 다른가요?",
    a: "MBS(Mortgage-Backed Securities)는 주택담보대출(모기지)을 기초자산으로 하는 증권으로, ABS의 한 종류입니다. 넓은 의미에서 MBS도 ABS에 포함되지만, 실무에서는 보통 자동차 할부·카드채권·학자금 대출 등을 기초자산으로 하는 것을 'ABS'라고 부르고, 주택담보대출을 기초자산으로 하는 것을 별도로 'MBS'라고 구분합니다. 또한 상업용 부동산 대출을 기초자산으로 하면 CMBS(Commercial MBS)가 됩니다.",
  },
  {
    q: "True Sale이 왜 중요한가요? 진짜 매각이 아니면 어떻게 되나요?",
    a: "True Sale(진정한 매각)은 ABS 구조에서 가장 핵심적인 법적 개념입니다. 오리지네이터(예: 현대캐피탈)가 채권을 SPV에 True Sale로 매각해야 오리지네이터가 파산하더라도 해당 채권이 파산 재단에 포함되지 않습니다. 이를 '파산 격리(Bankruptcy Remoteness)'라고 합니다. 만약 True Sale이 아닌 담보 제공(pledge)으로 처리되면, 오리지네이터 파산 시 채권이 오리지네이터의 채권자들에게 귀속될 수 있어, ABS 투자자는 우선권을 잃게 됩니다. 신용평가사는 True Sale Opinion(법무법인 의견서)을 반드시 요구합니다.",
  },
  {
    q: "신용 보강이 없으면 AAA 등급을 받을 수 없나요?",
    a: "맞습니다. 아무리 우량한 자동차 할부채권 풀이라도, 신용 보강 없이는 최고 신용등급을 받기 어렵습니다. 신용 보강은 예상 손실을 초과하는 충격을 흡수할 완충장치입니다. 무디스·S&P 등 신용평가사는 스트레스 테스트를 통해 '경제위기 시나리오에서도 해당 트랑쉐가 원리금을 상환할 수 있는가'를 검증합니다. 과잉담보(OC), 초과스프레드(XS), 준비금, 후순위화가 이 완충 역할을 합니다.",
  },
  {
    q: "한국에서 ABS를 발행하는 주요 주체는 어디인가요?",
    a: "한국에서는 현대캐피탈·KB캐피탈·신한캐피탈 등 캐피탈사가 자동차 할부채권 ABS를 주로 발행합니다. 카드사(삼성카드·신한카드·현대카드)는 카드채권 ABS를 발행합니다. 또한 한국주택금융공사(HF)는 MBS(주택담보대출담보부증권)를 발행하며, PF(프로젝트 파이낸싱) ABS도 활발합니다. 한국 ABS 시장은 자본시장과 금융투자업에 관한 법률(자본시장법)의 규율을 받으며, 금융감독원 등록을 통해 발행됩니다.",
  },
  {
    q: "ABS 투자자가 손실을 입는 경우는 어떤 상황인가요?",
    a: "ABS 투자자 손실은 기초자산(담보풀)의 부도율이 예상을 크게 초과할 때 발생합니다. 구체적으로: ① 경기침체로 차량 할부 연체율이 급증하는 경우(Auto ABS), ② 대량 실업으로 카드 연체가 폭증하는 경우(카드 ABS), ③ 담보 회수율(Recovery Rate)이 낮아지는 경우. 후순위 트랑쉐(B·C등급)는 초과손실을 먼저 흡수하므로 원금 손실 가능성이 높습니다. 2008년 금융위기 시 서브프라임 MBS의 경우, 주택 가격 하락 + 연체율 급증으로 심지어 AAA 등급 트랑쉐도 손실을 입었습니다.",
  },
];

const FAQ_EN = [
  {
    q: "What is the difference between ABS and MBS?",
    a: "MBS (Mortgage-Backed Securities) are bonds backed by home mortgage loans and are technically a subset of ABS. In practice, however, market participants use 'ABS' to refer specifically to bonds backed by auto loans, credit card receivables, student loans, and similar consumer assets — while 'MBS' refers to residential mortgage-backed deals, and 'CMBS' covers commercial real estate loans. The key structural features (SPV, tranching, credit enhancement) apply to all three categories.",
  },
  {
    q: "Why does True Sale matter? What happens if it's treated as a pledge instead?",
    a: "True Sale is the most critical legal concept in ABS. For the structure to achieve bankruptcy remoteness — meaning the receivables are protected even if the originator (e.g., Hyundai Capital) goes bankrupt — the transfer must constitute a genuine sale, not a collateral pledge. If a court later recharacterizes the transfer as a pledge, the receivables fall back into the originator's bankruptcy estate and the ABS noteholders lose their priority claim. Rating agencies require a True Sale Opinion from a recognized law firm before assigning any rating.",
  },
  {
    q: "Can a tranche receive a AAA rating without credit enhancement?",
    a: "No. Even the highest-quality auto loan pool cannot achieve a AAA rating without credit enhancement buffers. Rating agencies like Moody's and S&P run stress-test scenarios (severe recession, high default rates, low recovery rates) and require the senior tranches to withstand those scenarios with zero loss. Overcollateralization, excess spread, reserve accounts, and subordination together provide the cushion needed to clear that AAA threshold.",
  },
  {
    q: "Who are the main ABS issuers in Korea?",
    a: "Korea's ABS market is active across several segments. Capital companies — Hyundai Capital, KB Capital, Shinhan Capital — are the primary issuers of auto loan ABS. Credit card companies (Samsung Card, Shinhan Card, Hyundai Card) issue receivables-backed ABS. The Korea Housing Finance Corporation (HF) issues MBS backed by residential mortgages. Project Finance (PF) ABS for real estate development is also prevalent. Korean ABS issuances are governed by the Financial Investment Services and Capital Markets Act (FSCMA) and require registration with the Financial Supervisory Service.",
  },
  {
    q: "Under what circumstances do ABS investors experience losses?",
    a: "ABS investors suffer losses when default rates in the collateral pool significantly exceed projections. Triggers include: ① a recession causing vehicle loan delinquencies to spike (Auto ABS), ② mass unemployment driving credit card charge-offs sharply higher (Card ABS), ③ a collapse in collateral recovery rates (e.g., used car values crash). Subordinate tranches (B, C) absorb excess losses first and face meaningful principal risk even in moderate stress. In the 2008 financial crisis, subprime MBS experienced a rare combination of surging defaults and plummeting home prices that caused losses to propagate all the way to AAA tranches — a scenario that had been considered nearly impossible.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function StructuredAbsClient({
  concept,
  lang,
}: {
  concept: MarketConcept;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
          >
            <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">
              {ko ? "홈" : "Home"}
            </Link>
            <span>›</span>
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="hover:text-amber-600 transition-colors"
            >
              {ko ? "마켓 101" : "Market 101"}
            </Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {ko ? "구조화금융" : "Structured Finance"}
            </span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: ACCENT }}
              >
                {ko ? "구조화" : "Structured"}
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Ch.1 / 6
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-700/40"
                >
                  {t}
                </span>
              ))}
            </div>
            <ShareButtons
              title={ko ? concept.title : (concept.titleEn ?? concept.title)}
              variant="top"
              lang={lang}
            />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="mt-8"
          >
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 1 — 30초 요약
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "ABS의 핵심 공식: 대출채권 묶음 → SPV → 채권 발행 → 투자자."
                : "The ABS formula: loan pool → SPV → bond issuance → investors."}
            </p>

            {/* 핵심 숫자 카드 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  label: ko ? "미국 ABS 잔액" : "US ABS Outstanding",
                  value: "$0.87T",
                  sub: ko ? "비주택 ABS" : "Non-housing ABS",
                },
                {
                  label: ko ? "한국 ABS 발행(2023)" : "KR ABS Issuance (2023)",
                  value: "약 ₩55조",
                  sub: ko ? "금융감독원" : "FSS data",
                },
                {
                  label: ko ? "Toyota 2024-A 풀" : "Toyota 2024-A Pool",
                  value: "$1.5B",
                  sub: ko ? "평균 FICO 770" : "Avg FICO 770",
                },
                {
                  label: ko ? "시니어 트랑쉐 평균 금리" : "Senior Tranche Rate",
                  value: "5.35%",
                  sub: ko ? "A-1 클래스" : "Class A-1",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center"
                >
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-xl font-extrabold" style={{ color: ACCENT }}>
                    {s.value}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <AnalogyBox>
              <strong>{ko ? "ABS를 한 문장으로" : "ABS in One Sentence"}</strong>
              <br />
              <br />
              {ko ? (
                <>
                  은행(현대캐피탈)이 자동차 할부채권 1,000개를 한 묶음으로 모아, 특수목적법인(SPV)에
                  팔고, SPV는 그 채권 풀을 담보로 채권을 발행해 투자자에게 팝니다. 현대캐피탈은
                  현금을 회수해 새로운 대출을 내주고, 투자자는 할부 이자에서 나오는 수익률을
                  받습니다. 대출채권을 채권(Bond)으로 변환하는 &lsquo;유동화 기계&rsquo;입니다.
                  <br />
                  <br />
                  핵심: 은행의 대차대조표에서 위험 자산을 제거하여 유동성을 확보하고, 투자자는
                  직접 대출 없이도 소비자 신용 위험에 노출됩니다.
                </>
              ) : (
                <>
                  Hyundai Capital pools 1,000 auto installment receivables, sells them to a
                  Special Purpose Vehicle (SPV), and the SPV issues bonds backed by those
                  receivables to investors. Hyundai Capital gets cash back to originate new loans;
                  investors receive yields derived from installment interest payments. It&rsquo;s a
                  &ldquo;securitization machine&rdquo; that converts loans into tradeable bonds.
                  <br />
                  <br />
                  The core benefit: banks remove risky assets from their balance sheets to free up
                  liquidity, while investors gain consumer credit exposure without making loans
                  directly.
                </>
              )}
            </AnalogyBox>

            {/* ABS 프로세스 한눈에 */}
            <div className="mt-6 rounded-xl border border-amber-200 dark:border-amber-700/40 bg-amber-50/30 dark:bg-amber-900/10 p-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-4">
                {ko ? "ABS 구조 한눈에" : "ABS Structure at a Glance"}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
                {[
                  {
                    icon: "🏦",
                    label: ko ? "오리지네이터" : "Originator",
                    sub: ko ? "현대캐피탈" : "Hyundai Capital",
                  },
                  { arrow: true },
                  {
                    icon: "📦",
                    label: ko ? "채권 풀" : "Loan Pool",
                    sub: ko ? "할부채권 1,000건" : "1,000 receivables",
                  },
                  { arrow: true },
                  {
                    icon: "🏛️",
                    label: "SPV / SPC",
                    sub: ko ? "True Sale 매각" : "True Sale transfer",
                  },
                  { arrow: true },
                  {
                    icon: "📊",
                    label: ko ? "트랑쉐 발행" : "Tranche Issuance",
                    sub: "AAA / AA / BBB",
                  },
                  { arrow: true },
                  {
                    icon: "💼",
                    label: ko ? "투자자" : "Investors",
                    sub: ko ? "연기금·보험사" : "Pension / Insurer",
                  },
                ].map((item, i) =>
                  "arrow" in item ? (
                    <div
                      key={i}
                      className="text-amber-400 dark:text-amber-600 text-xl font-bold sm:mx-2 rotate-90 sm:rotate-0"
                    >
                      →
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center text-center p-3 rounded-lg bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-800/40 min-w-0"
                    >
                      <span className="text-xl mb-1">{item.icon}</span>
                      <p className="text-[11px] font-bold text-gray-800 dark:text-gray-200">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500">{item.sub}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — ABS 종류
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "ABS 종류: 무엇이든 증권화된다" : "ABS Types: Almost Anything Can Be Securitized"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "현금흐름이 예측 가능한 자산이라면 대부분 ABS의 기초자산이 될 수 있습니다. 미국 비주택 ABS 시장($0.87T)의 구성을 살펴봅니다."
                : "Any asset with predictable cash flows can become ABS collateral. Here is the breakdown of the US non-housing ABS market ($0.87T)."}
            </p>

            {/* 시장 규모 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko
                  ? "미국 ABS 종류별 시장 규모 ($ Trillion, SIFMA 2023)"
                  : "US ABS Market by Type ($ Trillion, SIFMA 2023)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                Source: SIFMA, Federal Reserve
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={ABS_MARKET_DATA} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="type" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => `$${v}T`}
                    domain={[0, 0.35]}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null;
                      return (
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
                          <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
                          <p style={{ color: ACCENT }}>
                            {ko ? "잔액" : "Outstanding"}:{" "}
                            <strong>${payload[0].value}T</strong>
                          </p>
                        </div>
                      );
                    }}
                  />
                  <Bar dataKey="size" name={ko ? "잔액 ($T)" : "Outstanding ($T)"}>
                    {ABS_MARKET_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 종류별 상세 설명 */}
            <div className="grid gap-4">
              {[
                {
                  icon: "🚗",
                  title: ko ? "자동차 ABS (Auto ABS)" : "Auto ABS",
                  size: "$290B",
                  rating: "AAA~BBB",
                  color: "border-amber-300 dark:border-amber-700 bg-amber-50/30 dark:bg-amber-900/10",
                  desc: ko
                    ? "가장 성숙한 ABS 시장. Ford Motor Credit, Toyota Financial Services, GM Financial 등 자동차 금융사가 주요 발행사. 기초자산은 자동차 할부채권(Auto Installment Loan) 또는 리스채권(Auto Lease). 평균 만기 3~5년, 평균 FICO 750+. 연체율은 경기 사이클에 민감하지만 회수율이 높아(차량 압류 후 매각) AAA 등급이 비교적 안정적. 국내에서는 현대캐피탈·KB캐피탈이 주요 발행사."
                    : "The most mature ABS sector. Ford Motor Credit, Toyota Financial Services, and GM Financial are major issuers. Collateral consists of auto installment loans or lease receivables. Average tenor 3–5 years, average FICO 750+. Delinquency rates are economically sensitive but recovery rates are high (vehicle repossession + resale), keeping AAA tranches relatively stable. In Korea, Hyundai Capital and KB Capital are the primary issuers.",
                },
                {
                  icon: "💳",
                  title: ko ? "카드 ABS (Credit Card ABS)" : "Credit Card ABS",
                  size: "$170B",
                  rating: "AAA~BBB",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  desc: ko
                    ? "리볼빙 구조가 특징. 할부채권 ABS와 달리 카드채권은 잔액이 계속 변하므로 '리볼빙 기간(Revolving Period)'을 설정해 기초자산을 교체합니다. 아메리칸 익스프레스·씨티·체이스 등이 주요 발행사. 부도율(Charge-Off Rate)이 핵심 모니터링 지표. 실업률 상승 시 카드 연체가 빠르게 증가하는 경향. 국내에서는 삼성카드·신한카드·현대카드가 카드채권 ABS를 발행."
                    : "Defined by revolving collateral. Unlike auto ABS, credit card balances fluctuate continuously, so structures include a 'revolving period' where new receivables replace paid-off ones. American Express, Citi, and Chase are major US issuers. The charge-off rate is the key monitoring metric. Card delinquencies rise rapidly with unemployment. In Korea, Samsung Card, Shinhan Card, and Hyundai Card are the primary issuers.",
                },
                {
                  icon: "🎓",
                  title: ko ? "학자금 ABS (Student Loan ABS)" : "Student Loan ABS",
                  size: "$180B",
                  rating: "AAA~BBB",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  desc: ko
                    ? "정부보증 학자금대출(FFELP)과 민간 학자금대출(Private Student Loan)로 구분. FFELP는 정부 보증으로 신용위험이 낮지만, 2010년 이후 정부 직접 대출로 전환되면서 시장이 축소. 민간 학자금 ABS는 Navient·Sallie Mae 등이 발행. 한국에서는 한국장학재단이 학자금 관련 자산을 운용하나 ABS 발행은 제한적."
                    : "Divided into government-guaranteed (FFELP) and private student loans. FFELP loans carry low credit risk due to federal guarantees, but the market has shrunk since the 2010 shift to direct government lending. Private student loan ABS is issued by Navient, Sallie Mae, and others. In Korea, the Korea Student Aid Foundation manages student loan assets, though ABS issuance remains limited.",
                },
                {
                  icon: "🔧",
                  title: ko ? "기타 (장비리스·소비자대출)" : "Other (Equipment Lease · Consumer Loans)",
                  size: "$230B",
                  rating: "AAA~BB",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  desc: ko
                    ? "장비 리스(Equipment Lease ABS): 기계·항공기·의료장비 리스채권이 기초자산. 존 디어·캐터필러 파이낸셜이 주요 발행사. 소비자대출(Consumer Loan ABS): 개인 무담보 대출, 소비자 할부금. 핀테크 기반 소비자 대출(SoFi, LendingClub)도 ABS로 증권화. 상대적으로 기초자산이 이질적이므로 투자자의 스트럭처 분석 역량이 더 요구됨."
                    : "Equipment Lease ABS uses leases on machinery, aircraft, and medical devices as collateral — John Deere Financial and Caterpillar Financial are key issuers. Consumer Loan ABS covers unsecured personal loans and consumer installments. Fintech-originated loans (SoFi, LendingClub) are increasingly securitized via ABS. Because collateral pools are more heterogeneous, investors need stronger structural analysis skills.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border ${item.color} p-5`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">
                          {item.title}
                        </h3>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full text-white font-bold"
                          style={{ background: ACCENT }}
                        >
                          {item.size}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-semibold">
                          {item.rating}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — ABS 발행 과정
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "ABS 발행 과정: 6단계 해부" : "ABS Issuance Process: 6-Step Breakdown"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "현대캐피탈이 자동차 할부채권 ABS를 발행하는 과정을 단계별로 따라갑니다."
                : "We walk through how Hyundai Capital would issue an auto loan ABS, step by step."}
            </p>

            <div className="space-y-3">
              {[
                {
                  step: "01",
                  label: ko ? "오리지네이터: 채권 풀 선정" : "Originator: Pool Selection",
                  sub: ko ? "현대캐피탈 (Hyundai Capital)" : "Hyundai Capital",
                  desc: ko
                    ? "현대캐피탈은 보유 중인 수천 건의 자동차 할부채권 중 ABS에 적합한 채권을 선별합니다. 선별 기준: FICO 점수 680 이상, 잔존 만기 12~72개월, 신차·중고차 비율, 지역 분산. 이 채권들의 원금 합계가 담보풀(Collateral Pool)을 형성합니다. 예: 총 원금 $1.61B, 1만 2,000건, 평균 잔존 만기 48개월."
                    : "Hyundai Capital selects eligible auto installment receivables from its existing portfolio. Selection criteria: FICO score ≥680, remaining tenor 12–72 months, new/used vehicle mix, geographic diversification. The aggregate principal balance of these loans forms the collateral pool — for example: $1.61B total principal, 12,000 loans, 48-month average remaining tenor.",
                },
                {
                  step: "02",
                  label: ko ? "SPV(SPC) 설립 및 True Sale 매각" : "SPV/SPC Formation & True Sale",
                  sub: ko ? "파산 격리 (Bankruptcy Remoteness)" : "Bankruptcy Remoteness",
                  desc: ko
                    ? "현대캐피탈은 단독 목적 법인(SPV: Special Purpose Vehicle, 국내명 SPC: Special Purpose Company)을 설립합니다. 채권 풀을 SPV에 '진정한 매각(True Sale)' 방식으로 이전합니다. True Sale이 성립되면 현대캐피탈이 파산하더라도 채권 풀은 파산 재단에 포함되지 않아 투자자가 보호됩니다. 법무법인으로부터 True Sale Opinion 취득이 필수입니다."
                    : "Hyundai Capital establishes a special purpose vehicle (SPV/SPC) with a sole defined purpose. The loan pool is transferred to the SPV via True Sale — a genuine legal sale, not a pledge. Once True Sale is established, even if Hyundai Capital files for bankruptcy, the loan pool is isolated from the bankruptcy estate and investors are protected. Obtaining a True Sale Opinion from legal counsel is mandatory.",
                },
                {
                  step: "03",
                  label: ko ? "신용평가: 무디스 / S&P / 피치" : "Credit Rating: Moody's / S&P / Fitch",
                  sub: ko ? "스트레스 테스트 + 트랑쉐 구조 설계" : "Stress Testing + Tranche Design",
                  desc: ko
                    ? "신용평가사는 담보풀의 역사적 부도율, 회수율, 조기 상환율을 분석하고 경기침체 시나리오를 포함한 스트레스 테스트를 수행합니다. 이 분석 결과를 바탕으로 '각 트랑쉐가 어느 정도의 신용 보강을 가져야 특정 등급을 받을 수 있는가'를 결정합니다. 투자은행(주선 IB)은 평가사와 협의해 최적 트랑쉐 구조를 설계합니다."
                    : "Rating agencies analyze the pool's historical default rates, recovery rates, and prepayment speeds, then run stress-test scenarios including recession conditions. Based on this analysis, they determine what level of credit enhancement each tranche needs to achieve a given rating. The arranging investment bank collaborates with rating agencies to design the optimal tranche structure.",
                },
                {
                  step: "04",
                  label: ko ? "신용 보강 구조 확정" : "Credit Enhancement Finalization",
                  sub: ko ? "OC + XS + 준비금 + 후순위화" : "OC + XS + Reserve + Subordination",
                  desc: ko
                    ? "신용 보강의 4가지 레이어를 설계합니다: ① 과잉담보(OC): 채권 원금을 초과하는 담보풀 규모, ② 초과스프레드(XS): 담보풀 금리와 채권 금리의 차이, ③ 준비적립금(Reserve Account): 현금 적립 계좌, ④ 후순위화: 하위 트랑쉐가 먼저 손실 흡수. 이 4가지가 AAA 트랑쉐를 보호합니다."
                    : "Four credit enhancement layers are designed: ① Overcollateralization (OC): pool balance exceeds note balance, ② Excess Spread (XS): pool coupon minus note coupon, ③ Reserve Account: cash reserve fund, ④ Subordination: junior tranches absorb losses first. Together these four layers protect the AAA tranche.",
                },
                {
                  step: "05",
                  label: ko ? "트랑쉐 발행: 북빌딩 및 가격 결정" : "Tranche Issuance: Bookbuilding & Pricing",
                  sub: ko ? "투자자 수요 취합 → 금리 확정" : "Investor demand aggregation → Rate setting",
                  desc: ko
                    ? "IB가 투자자(연기금·보험사·MMF·크레딧 펀드)를 대상으로 로드쇼를 진행하고 투자 의향을 취합합니다. 오버서브(수요 > 공급)되면 금리를 낮출 수 있고, 언더서브되면 금리를 높이거나 조건을 재조정합니다. 최종 금리가 확정되면 발행 조건을 공시하고 결제합니다. Toyota 2024-A의 경우 A-1 트랑쉐는 SOFR 기반 단기 금리, A-2~A-4는 고정 금리로 발행됩니다."
                    : "The arranging bank conducts a roadshow for investors (pension funds, insurers, MMFs, credit funds) and aggregates orders. If oversubscribed, the coupon can be tightened; if undersubscribed, the rate is raised or terms adjusted. Once final pricing is set, deal terms are announced and settlement occurs. For Toyota 2024-A, the A-1 tranche is issued as a SOFR-linked floating-rate note, while A-2 through A-4 are fixed-rate.",
                },
                {
                  step: "06",
                  label: ko ? "서비서(Servicer)와 투자자 배분" : "Servicer Operations & Investor Distribution",
                  sub: ko ? "월별 원리금 수취 → 워터폴 배분" : "Monthly principal & interest → waterfall distribution",
                  desc: ko
                    ? "발행 이후 현대캐피탈은 서비서(Servicer) 역할로 차주로부터 매월 할부금을 수취합니다. 수취된 현금은 사전에 정의된 지급 우선순위(워터폴: Waterfall)에 따라 각 트랑쉐 투자자에게 배분됩니다. A 등급부터 순서대로 원리금을 받고, 잔여분이 B·C로 내려갑니다. 현대캐피탈은 서비서 수수료와 잔여이익(Residual Interest)을 수취합니다."
                    : "After issuance, Hyundai Capital acts as the Servicer, collecting monthly loan payments from borrowers. Collected cash is distributed to each tranche's investors according to a predefined payment priority (the Waterfall). Class A receives principal and interest first, with remainder flowing to B and C. Hyundai Capital retains the servicer fee and any residual interest after all noteholders are paid.",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white"
                    style={{ background: ACCENT }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                        {s.label}
                      </p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-700/40">
                        {s.sub}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — 신용 보강 4가지
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "신용 보강 4가지: AAA 등급의 비밀" : "4 Credit Enhancement Mechanisms: The AAA Secret"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "평균 신용등급 B+짜리 차주의 채권 풀이 어떻게 AAA 채권으로 탈바꿈하는지 — 4가지 완충 레이어를 해부합니다."
                : "How a pool of B+ average-quality borrowers produces AAA-rated bonds — dissecting the four protection layers."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "4중 안전장치 비유" : "Four-Layer Safety Net Analogy"}</strong>
              <br />
              <br />
              {ko ? (
                <>
                  고층 빌딩 공사 현장의 4중 안전망을 생각해봅시다. 맨 아래층(AAA 투자자)은 가장
                  튼튼한 안전망으로 보호됩니다. 위에서 누군가 떨어져도, ① 첫 번째 안전망(후순위
                  트랑쉐), ② 두 번째 안전망(준비적립금), ③ 세 번째 안전망(초과스프레드), ④ 네
                  번째 안전망(과잉담보)이 차례대로 충격을 흡수합니다. 네 개를 모두 뚫어야만 AAA
                  투자자가 손실을 입습니다. 이것이 신용 보강의 원리입니다.
                </>
              ) : (
                <>
                  Think of four safety nets on a construction site. The ground floor (AAA investor)
                  is protected by the bottom net. If a worker falls, the nets above absorb the
                  shock in order: ① the first net (subordinated tranches), ② the second net
                  (reserve account), ③ the third net (excess spread), ④ the fourth net
                  (overcollateralization). Only if all four nets fail does the AAA investor take a
                  loss. That is the principle of credit enhancement.
                </>
              )}
            </AnalogyBox>

            <div className="grid gap-4 mt-4">
              {[
                {
                  num: "①",
                  title: ko ? "과잉담보 (OC: Overcollateralization)" : "Overcollateralization (OC)",
                  color: "border-amber-300 dark:border-amber-700 bg-amber-50/40 dark:bg-amber-900/15",
                  example: ko
                    ? "담보풀 $1.07B → 채권 원금 $1.00B → OC = 7%"
                    : "Pool $1.07B → Note principal $1.00B → OC = 7%",
                  desc: ko
                    ? "채권 원금보다 많은 담보풀을 편입합니다. 채권 $1.00B를 발행할 때 담보풀은 $1.07B으로 설정하면 OC = 7%. 채권 풀에서 7%까지 손실이 발생해도 AAA 투자자는 원금을 온전히 회수합니다. OC는 ABS 구조의 첫 번째이자 가장 기본적인 방어선입니다. OC가 높을수록 신용 보강이 강하지만, 오리지네이터가 초기에 &lsquo;묶어두는&rsquo; 자산이 많아져 비용이 올라갑니다."
                    : "The collateral pool balance exceeds the note principal balance. If notes total $1.00B and the pool is $1.07B, OC = 7%. The pool can sustain up to 7% cumulative losses before AAA noteholders face any impairment. OC is the first and most fundamental defense layer in ABS. Higher OC means stronger protection but also more capital 'locked up' by the originator, increasing issuance cost.",
                },
                {
                  num: "②",
                  title: ko ? "초과스프레드 (XS: Excess Spread)" : "Excess Spread (XS)",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  example: ko
                    ? "담보풀 가중평균금리 8.5% − 채권 가중평균금리 5.5% = XS 3.0%/년"
                    : "Pool WAC 8.5% − Note WAC 5.5% = XS 3.0%/yr",
                  desc: ko
                    ? "기초자산(자동차 할부채권) 금리와 발행 채권 금리의 차이가 초과스프레드입니다. 예: 담보풀 가중평균금리(WAC) 8.5%, 발행 채권 가중평균금리 5.5% → XS = 3.0%. 이 XS는 매월 손실 발생 시 먼저 흡수하는 완충 역할을 합니다. 연간 3%씩 추가 완충이 생기는 셈입니다. XS가 손실을 모두 흡수하면 남는 금액은 오리지네이터에게 돌아가는 잔여이익(Residual Interest)이 됩니다."
                    : "The excess spread is the difference between the pool's weighted average coupon (WAC) and the note WAC. Example: Pool WAC 8.5%, Note WAC 5.5% → XS = 3.0%. This XS absorbs realized losses every month before they touch the OC. Effectively, the structure gains an additional 3% annual buffer. Any XS not consumed by losses is returned to the originator as residual interest.",
                },
                {
                  num: "③",
                  title: ko ? "준비적립금 (Reserve Account)" : "Reserve Account",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  example: ko
                    ? "발행 시 초기 적립: 0.5~1.5% of 채권 원금 = $5M~$15M"
                    : "Initial deposit at closing: 0.5–1.5% of note balance = $5M–$15M",
                  desc: ko
                    ? "거래 설정 시 현금을 미리 적립해두는 계좌입니다. 초기 적립 규모는 채권 원금의 0.5~1.5%가 일반적입니다. 담보풀 부도가 XS와 OC를 넘어서는 상황에서 준비금이 사용됩니다. 단기 유동성 충격(특정 월 이자 지급 부족)을 커버하는 데도 활용됩니다. 최저 잔액(Floor) 이하로 내려가면 XS를 통해 보충하는 구조로 설계됩니다."
                    : "A cash account funded at closing that acts as a liquid buffer. Typical initial deposit is 0.5–1.5% of the note balance. The reserve is drawn upon if losses exceed both the XS and OC buffers. It also covers short-term liquidity shocks — such as a monthly interest shortfall. The account is designed with a minimum floor level, replenished from XS when it falls below that threshold.",
                },
                {
                  num: "④",
                  title: ko ? "후순위화 (Subordination)" : "Subordination",
                  color: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",
                  example: ko
                    ? "B 트랑쉐($95M) + C 트랑쉐($70M) = $165M 손실 완충"
                    : "Class B ($95M) + Class C ($70M) = $165M loss buffer",
                  desc: ko
                    ? "트랑쉐 구조 자체가 신용 보강입니다. 하위 트랑쉐(B·C급)가 먼저 손실을 흡수하므로, 상위 트랑쉐(AAA·AA)는 하위 트랑쉐 금액만큼 손실 완충이 추가됩니다. Toyota 2024-A에서 B 트랑쉐($95M) + C 트랑쉐($70M) = $165M이 AAA~BBB 트랑쉐의 추가 완충이 됩니다. 이를 &lsquo;내부 신용 보강(Internal Credit Enhancement)&rsquo;이라 합니다. 후순위 투자자는 고위험·고수익 포지션을 취하며, 주로 헤지펀드·크레딧 펀드가 매입합니다."
                    : "The tranche structure itself serves as credit enhancement. Junior tranches (B, C) absorb losses first, so senior tranches (AAA, AA) benefit from the full face value of all junior notes as a buffer. In Toyota 2024-A, Class B ($95M) + Class C ($70M) = $165M forms an additional layer protecting senior classes. This is called 'internal credit enhancement.' Junior investors accept higher risk for higher yield and are typically purchased by hedge funds and credit funds.",
                },
              ].map((item) => (
                <div key={item.num} className={`rounded-xl border ${item.color} p-5`}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white mt-0.5"
                      style={{ background: ACCENT }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      <div
                        className="text-[11px] font-mono px-3 py-1.5 rounded-lg mb-3 inline-block"
                        style={{
                          background: ACCENT_LIGHT,
                          color: ACCENT_DARK,
                          border: `1px solid ${ACCENT}30`,
                        }}
                      >
                        {item.example}
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 파이 차트: OC 시각화 */}
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "과잉담보(OC) 구조 시각화" : "Overcollateralization (OC) Structure"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "담보풀 $107 대비 채권 원금 $100 — OC 7%" : "Pool $107 vs Note $100 — OC 7%"}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <ResponsiveContainer width={180} height={180}>
                    <PieChart>
                      <Pie
                        data={CREDIT_ENHANCEMENT_PIE}
                        cx={90}
                        cy={90}
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {CREDIT_ENHANCEMENT_PIE.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(v) => [`$${v}`, ""]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-3">
                  {CREDIT_ENHANCEMENT_PIE.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-sm flex-shrink-0"
                        style={{ background: item.color }}
                      />
                      <div>
                        <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500">
                          ${item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-[12px] text-gray-500 dark:text-gray-400">
                      {ko
                        ? "→ 담보풀이 채권 원금보다 $7 더 많음. 이 $7이 첫 번째 손실 완충."
                        : "→ Pool exceeds note by $7. That $7 is the first loss buffer."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — Toyota ABS 해부
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko
                ? "실전 케이스: Toyota Auto Receivables 2024-A 해부"
                : "Real Case: Toyota Auto Receivables 2024-A Dissected"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "Toyota Financial Services가 2024년 발행한 $1.5B 규모 자동차 ABS를 트랑쉐별로 분석합니다."
                : "We analyze Toyota Financial Services' $1.5B auto ABS issued in 2024, tranche by tranche."}
            </p>

            {/* 딜 요약 카드 */}
            <div className="rounded-xl border border-amber-200 dark:border-amber-700/40 bg-amber-50/30 dark:bg-amber-900/10 p-5 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🚘</span>
                <span className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">
                  Toyota Auto Receivables 2024-A (TAOT 2024-A)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: ko ? "발행사" : "Issuer", value: "Toyota Financial Services" },
                  { label: ko ? "발행일" : "Issue Date", value: "2024년 Q1" },
                  { label: ko ? "담보풀 규모" : "Pool Size", value: "$1.61B" },
                  { label: ko ? "채권 원금 합계" : "Total Notes", value: "$1.50B" },
                  { label: ko ? "과잉담보율 (OC)" : "OC Rate", value: "7.0%" },
                  { label: ko ? "평균 FICO" : "Avg FICO", value: "770" },
                  { label: ko ? "평균 LTV" : "Avg LTV", value: "82%" },
                  { label: ko ? "신차 비율" : "New Vehicle %", value: "76%" },
                  { label: ko ? "초과스프레드 (XS)" : "Excess Spread", value: "약 3.1%/yr" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{item.label}</p>
                    <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 트랑쉐 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "트랑쉐" : "Tranche"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "금액" : "Amount"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "금리" : "Rate"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "신용등급" : "Rating"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "주요 투자자" : "Primary Buyers"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      tranche: "Class A-1",
                      amount: "$450M",
                      rate: "SOFR + 0.85%",
                      rating: "Aaa / AAA",
                      buyers: ko ? "MMF·단기채 펀드" : "MMFs, Short-term funds",
                      highlight: true,
                    },
                    {
                      tranche: "Class A-2",
                      amount: "$380M",
                      rate: "5.41%",
                      rating: "Aaa / AAA",
                      buyers: ko ? "연기금·보험사" : "Pension, Insurers",
                      highlight: false,
                    },
                    {
                      tranche: "Class A-3",
                      amount: "$320M",
                      rate: "5.52%",
                      rating: "Aaa / AAA",
                      buyers: ko ? "연기금·보험사" : "Pension, Insurers",
                      highlight: false,
                    },
                    {
                      tranche: "Class A-4",
                      amount: "$185M",
                      rate: "5.68%",
                      rating: "Aaa / AAA",
                      buyers: ko ? "연기금·크레딧 펀드" : "Pension, Credit funds",
                      highlight: false,
                    },
                    {
                      tranche: "Class B",
                      amount: "$95M",
                      rate: "5.85%",
                      rating: "Aa2 / AA",
                      buyers: ko ? "크레딧 펀드·HF" : "Credit funds, HFs",
                      highlight: false,
                    },
                    {
                      tranche: "Class C",
                      amount: "$70M",
                      rate: "6.24%",
                      rating: "A2 / A",
                      buyers: ko ? "헤지펀드·ABS 전문 펀드" : "HFs, ABS specialist funds",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr
                      key={row.tranche}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors ${
                        row.highlight ? "bg-amber-50/30 dark:bg-amber-900/10" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-bold" style={{ color: ACCENT }}>
                        {row.tranche}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.amount}</td>
                      <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">
                        {row.rate}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200/60 dark:border-green-700/40 font-semibold">
                          {row.rating}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-[11px]">
                        {row.buyers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 트랑쉐 금액 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-4">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko
                  ? "Toyota ABS 2024-A: 트랑쉐별 규모 ($M)"
                  : "Toyota ABS 2024-A: Tranche Size ($M)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                Source: Toyota Financial Services Prospectus, 2024
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={TOYOTA_TRANCHE_DATA} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="tranche" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => `$${v}M`}
                    domain={[0, 500]}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null;
                      const d = TOYOTA_TRANCHE_DATA.find((t) => t.tranche === label);
                      return (
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
                          <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">
                            Class {label}
                          </p>
                          <p style={{ color: ACCENT }}>
                            {ko ? "규모" : "Size"}: <strong>${payload[0].value}M</strong>
                          </p>
                          {d && (
                            <p className="text-gray-500">
                              {ko ? "금리" : "Rate"}: <strong>{d.rate}%</strong>
                            </p>
                          )}
                        </div>
                      );
                    }}
                  />
                  <Bar dataKey="amount" name={ko ? "금액 ($M)" : "Amount ($M)"}>
                    {TOYOTA_TRANCHE_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <KeyBox label="투자자 관점" labelEn="Investor Perspective" ko={ko}>
              {ko ? (
                <>
                  <strong>왜 AAA Toyota ABS를 살까요?</strong> 국채보다 스프레드가 높으면서도 AAA
                  등급이기 때문입니다. 2024년 기준 A-2 트랑쉐(5.41%)는 비슷한 만기 미국채
                  수익률보다 약 60~80bp 높습니다. 연기금·보험사 입장에서 동일한 AAA 등급에
                  추가 스프레드를 얻을 수 있는 매력적인 자산입니다.
                  <br />
                  <br />
                  <strong>리스크는?</strong> 조기 상환 위험(Prepayment Risk)이 가장 큽니다. 차주가
                  차를 팔거나 재융자를 받으면 채권이 예상보다 일찍 상환됩니다. 또한
                  자동차 가격이 급락하면 회수율이 낮아질 수 있습니다.
                </>
              ) : (
                <>
                  <strong>Why buy AAA Toyota ABS?</strong> Because it offers a yield premium over
                  Treasuries while carrying an AAA rating. In 2024, the A-2 tranche (5.41%)
                  offered approximately 60–80bp above comparable-maturity US Treasuries. For
                  pension funds and insurers, this represents attractive additional spread at the
                  same AAA credit quality.
                  <br />
                  <br />
                  <strong>Key risks?</strong> Prepayment risk is the most significant — when
                  borrowers sell their cars or refinance, bonds repay earlier than projected.
                  Additionally, if used-car prices collapse, recovery rates on defaulted loans
                  can decline, stressing the structure.
                </>
              )}
            </KeyBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — 한국 ABS 시장
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "한국 ABS 시장: 현황과 특수성" : "Korean ABS Market: Landscape & Unique Features"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "2023년 기준 한국 ABS 발행 규모는 약 55조원. 자동차·카드·부동산 PF가 3대 축."
                : "Korea's 2023 ABS issuance reached approximately ₩55 trillion, with auto, card, and real estate PF as the three pillars."}
            </p>

            <div className="grid gap-4 mb-6">
              {[
                {
                  flag: "🚗",
                  title: ko ? "현대캐피탈 자동차 ABS" : "Hyundai Capital Auto ABS",
                  badge: ko ? "연간 약 ₩10조" : "~₩10T/yr",
                  desc: ko
                    ? "현대캐피탈은 국내 최대 자동차 ABS 발행사로, 현대·기아차 자동차 할부 및 리스채권을 기초자산으로 합니다. 연간 10조원 내외를 ABS로 발행하여 자금을 조달하고 새로운 대출 재원을 확보합니다. 한국 자본시장법(FSCMA) 제3조 및 자산유동화법 적용을 받으며, 금융감독원에 등록 후 발행합니다. AAA 등급이 주를 이루며 국내 연기금·보험사·은행이 주요 투자자입니다."
                    : "Hyundai Capital is Korea's largest auto ABS issuer, securitizing installment and lease receivables from Hyundai and Kia vehicles. It issues approximately ₩10 trillion annually in ABS to fund new originations. Issuances fall under Korea's FSCMA and Asset-Backed Securities Act, requiring FSS registration. AAA-rated tranches dominate, with domestic pension funds, insurers, and banks as primary investors.",
                },
                {
                  flag: "💳",
                  title: ko ? "카드사 ABS (삼성·신한·현대카드)" : "Card Company ABS (Samsung, Shinhan, Hyundai)",
                  badge: ko ? "연간 약 ₩8조" : "~₩8T/yr",
                  desc: ko
                    ? "삼성카드·신한카드·현대카드 등 카드사들이 카드 이용 대금 채권(Card Receivables)을 기초자산으로 ABS를 발행합니다. 리볼빙 구조로 발행하는 경우도 있고, 일정 기간 고정 채권 풀로 발행하는 경우도 있습니다. 연체율 관리가 핵심이며, 경기 둔화 시 카드 연체 증가가 ABS 성과에 직접 영향을 줍니다. 국내 ABS 시장에서 자동차 다음으로 큰 비중을 차지합니다."
                    : "Samsung Card, Shinhan Card, and Hyundai Card securitize card receivables (cardholder billing obligations) into ABS. Some structures use revolving periods; others pool fixed receivables for a defined period. Charge-off rate management is critical — rising delinquencies during an economic slowdown directly impact ABS performance. Card ABS is the second-largest segment in the Korean ABS market after auto.",
                },
                {
                  flag: "🏗️",
                  title: ko ? "한국 부동산 PF ABS" : "Korean Real Estate PF ABS",
                  badge: ko ? "연간 약 ₩30조" : "~₩30T/yr",
                  desc: ko
                    ? "한국 ABS 시장에서 가장 독특한 세그먼트. 아파트·오피스 등 부동산 개발 프로젝트의 분양 수입(미래 현금흐름)을 기초자산으로 SPC가 PF ABS를 발행합니다. 시공사 신용보강이 필수적이며, 현대건설·GS건설 등 대형 건설사의 신용이 ABS 등급에 직접 영향을 줍니다. 2022~2023년 금리 급등과 부동산 경기 위축으로 PF ABS 시장에 신용 위기가 발생했으며, 레고랜드 사태가 대표적인 리스크 사례로 꼽힙니다."
                    : "The most distinctive segment of the Korean ABS market. SPCs issue PF ABS backed by future presale revenues (apartment deposits) from real estate development projects. General contractor credit enhancement is essential — the credit of companies like Hyundai E&C and GS E&C directly influences ABS ratings. The sharp rate hikes and real estate downturn of 2022–2023 triggered a credit crisis in the PF ABS market, with the Legoland project default being the most cited risk event.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.flag}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="text-[13px] font-extrabold text-gray-900 dark:text-gray-100">
                          {item.title}
                        </h3>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full text-white font-bold"
                          style={{ background: ACCENT }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 한국 ABS 발행 현황 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      className="text-left px-4 py-3 font-bold bg-gray-50 dark:bg-gray-900"
                      style={{ color: ACCENT }}
                    >
                      {ko ? "구분" : "Category"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "발행 규모 (2023)" : "Issuance (2023)"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "주요 발행사" : "Major Issuers"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "주요 투자자" : "Key Investors"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      cat: ko ? "자동차 ABS" : "Auto ABS",
                      size: "~₩10조",
                      issuers: "현대·KB·신한캐피탈",
                      investors: ko ? "연기금·보험·은행" : "Pension / Insurer / Bank",
                    },
                    {
                      cat: ko ? "카드채권 ABS" : "Card ABS",
                      size: "~₩8조",
                      issuers: "삼성·신한·현대카드",
                      investors: ko ? "연기금·보험·MMF" : "Pension / Insurer / MMF",
                    },
                    {
                      cat: ko ? "부동산 PF ABS" : "Real Estate PF ABS",
                      size: "~₩30조",
                      issuers: ko ? "건설사 SPC" : "Construction SPCs",
                      investors: ko ? "증권사·저축은행" : "Securities firms / Savings banks",
                    },
                    {
                      cat: ko ? "주택 MBS (HF)" : "Residential MBS (HF)",
                      size: "~₩5조",
                      issuers: "한국주택금융공사",
                      investors: ko ? "은행·연기금" : "Banks / Pension funds",
                    },
                    {
                      cat: ko ? "기타 (소비자대출 등)" : "Other (Consumer loans etc.)",
                      size: "~₩2조",
                      issuers: ko ? "핀테크·캐피탈사" : "Fintech / Capital cos.",
                      investors: ko ? "크레딧 펀드" : "Credit funds",
                    },
                  ].map((row) => (
                    <tr
                      key={row.cat}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                    >
                      <td
                        className="px-4 py-3 font-semibold"
                        style={{ color: ACCENT }}
                      >
                        {row.cat}
                      </td>
                      <td className="px-4 py-3 font-bold text-gray-800 dark:text-gray-200">
                        {row.size}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.issuers}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-500 text-[11px]">
                        {row.investors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30 bg-amber-50/30 dark:bg-amber-900/10 text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
              ⚠️{" "}
              {ko
                ? "한국 부동산 PF ABS는 2022~2023년 금리 급등으로 심각한 신용 위기를 겪었습니다. 레고랜드·태영건설 사태 등이 PF ABS의 취약성을 드러낸 사례입니다. 글로벌 ABS(자동차·카드)와 달리 한국 PF ABS는 미래 분양수입에 의존하는 구조적 불확실성이 크다는 점을 유의해야 합니다."
                : "Korean real estate PF ABS experienced a severe credit crisis during the 2022–2023 rate spike. The Legoland and Taeyoung Engineering defaults highlighted structural vulnerabilities. Unlike global auto or card ABS, Korean PF ABS carries significant structural uncertainty due to its reliance on future presale proceeds."}
            </div>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
            <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
          </motion.section>

          {/* ── 시리즈 네비게이션 (하단) ── */}
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
                {ko ? "구조화금융 101 시리즈" : "Structured Finance 101 Series"}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {STRUCTURED_SERIES.filter((ch) => ch.slug !== THIS_CH).map((ch) => (
                <Link
                  key={ch.slug}
                  href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}
                >
                  <div className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900">
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0"
                      style={{ background: ACCENT }}
                    >
                      {ch.title(ko).split(" ")[0]}
                    </span>
                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {ch.title(ko)}
                    </span>
                    <span className="ml-auto text-amber-500 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── 참고 자료 ── */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8"
          >
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "참고 자료" : "References"}
            </h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "SIFMA (2023). US ABS Outstanding Statistics. Securities Industry and Financial Markets Association.",
                "Federal Reserve (2024). Flow of Funds: Accounts of the United States. Z.1 Release.",
                "Toyota Financial Services (2024). Toyota Auto Receivables 2024-A Prospectus Supplement.",
                "Moody's Investors Service (2023). US Auto ABS Rating Methodology.",
                "S&P Global Ratings (2023). General Methodology for Rating U.S. Auto Loan ABS.",
                "Korea Financial Supervisory Service (2023). Asset-Backed Securities Issuance Statistics.",
                "Hyundai Capital Services (2023). Annual Report: Securitization Activity.",
                "Korea Housing Finance Corporation (2023). MBS Issuance and Market Report.",
                "Fabozzi, F.J. (2020). Structured Finance: Introduction to Asset-Backed Securities. Wiley.",
                "Gorton, G. & Metrick, A. (2012). Securitization. NBER Working Paper 18611.",
              ].map((ref, i) => (
                <li key={i}>
                  [{i + 1}] {ref}
                </li>
              ))}
            </ol>
          </motion.section>

          <ShareButtons
            title={ko ? concept.title : (concept.titleEn ?? concept.title)}
            variant="bottom"
            lang={lang}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
