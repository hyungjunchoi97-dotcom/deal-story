"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── 색상 & 상수 ─────────────────────────────────────────────────────────────
const ACCENT       = "#f59e0b"; // amber-400
const ACCENT_LIGHT = "#fffbeb"; // amber-50

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "structured-overview";
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"        : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"          : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"          : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"         : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"       : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기"     : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"       : "Ch.6 Cases"      },
];

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-5 py-3 flex flex-wrap gap-2">
        {STRUCTURED_SERIES.map((ch) => {
          const active = ch.slug === THIS_CH;
          return (
            <Link key={ch.slug} href={`${base}/${ch.slug}`}>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
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
    </div>
  );
}

// ── 차트 데이터 ──────────────────────────────────────────────────────────────
// 글로벌 구조화금융 시장 규모 ($ Trillion, SIFMA·Fitch 기준)
const MARKET_SIZE_DATA = [
  { name: "ABS",  value: 2.8, color: ACCENT },
  { name: "CLO",  value: 1.1, color: "#fbbf24" },
  { name: "CMBS", value: 0.6, color: "#fcd34d" },
  { name: "CDO",  value: 0.5, color: "#fde68a" },
];

// 트랑쉐별 스프레드 (bps over benchmark)
const TRANCHE_SPREAD_DATA = [
  { name: "AAA",    spread: 120,  color: ACCENT },
  { name: "AA",     spread: 180,  color: "#fbbf24" },
  { name: "A",      spread: 250,  color: "#fcd34d" },
  { name: "BBB",    spread: 380,  color: "#fb923c" },
  { name: "BB",     spread: 600,  color: "#f97316" },
  { name: "Equity", spread: 1200, color: "#ef4444" },
];

// ── 유틸 컴포넌트 ─────────────────────────────────────────────────────────────
function InfoBox({ icon = "💡", children }: { icon?: string; children: React.ReactNode }) {
  return (
    <div
      className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5"
      style={{ borderColor: ACCENT }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function PracticeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>
          실무
        </span>
        <span className="text-[13px] font-bold text-amber-800 dark:text-amber-200">{title}</span>
      </div>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
    </div>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
  unit = "",
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
  unit?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <strong>{p.value}{unit}</strong>
        </p>
      ))}
    </div>
  );
}

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "구조화금융과 일반 채권의 결정적 차이는 무엇인가요?",
    a: "일반 회사채는 발행사(기업)의 신용에 의존합니다 — 기업이 망하면 채권자도 손실을 봅니다. 구조화금융은 발행사의 신용을 '분리'합니다. 특수목적법인(SPV)이 자산 자체(주택담보대출·자동차대출·기업대출 등)를 보유하고, 그 자산에서 나오는 현금흐름만으로 투자자에게 원리금을 지급합니다. 즉, 삼성카드가 자산유동화증권(ABS)을 발행하면 삼성카드가 파산해도 SPV 안의 카드채권 현금흐름은 계속 투자자에게 지급됩니다. 이 '도산격리(Bankruptcy Remoteness)'가 구조화금융의 핵심 원리입니다.",
  },
  {
    q: "트랑쉐(Tranche)가 왜 필요한가요? 그냥 하나의 채권을 팔면 안 되나요?",
    a: "자산 풀에서 나오는 현금흐름은 '좋은 것'과 '나쁜 것'이 섞여 있습니다. AAA 채권만 원하는 연기금과, 높은 수익률을 위해 위험을 감수하는 헤지펀드가 동시에 존재합니다. 트랑쉐 구조는 동일한 자산 풀을 다양한 리스크/수익 조합으로 '재단'합니다. 손실은 하위 트랑쉐(에쿼티 → BB → BBB 순)부터 흡수되므로, 상위 트랑쉐는 높은 신용등급을 받을 수 있습니다. 이를 통해 발행사는 더 낮은 금리로 자금을 조달하고, 다양한 투자자 수요를 동시에 충족시킬 수 있습니다.",
  },
  {
    q: "2008년 금융위기와 CDO는 어떤 관계인가요?",
    a: "서브프라임 모기지가 붕괴한 핵심 원인은 CDO 구조의 두 가지 결함이었습니다. 첫째, 신용평가사(S&P·무디스)가 상관관계(Correlation)를 잘못 가정했습니다 — 주택 가격이 전국적으로 동시에 하락할 확률을 극히 낮게 봤지만 실제로는 2006~2007년에 일제히 떨어졌습니다. 둘째, CDO-squared(CDO의 트랑쉐로 만든 또 다른 CDO) 구조가 위험을 불투명하게 만들었습니다. AAA 등급을 받은 CDO가 대량 디폴트 되면서 은행·보험사·MMF 등 전 금융 시스템으로 손실이 전파됐습니다. AIG가 CDS(신용부도스왑)로 CDO 위험을 인수했다가 파산 직전까지 몰렸던 것이 대표적 사례입니다.",
  },
  {
    q: "한국에서 구조화금융이 실제로 어떻게 활용되나요?",
    a: "한국에서 가장 친숙한 형태는 주택저당증권(MBS)과 자산유동화증권(ABS)입니다. 주택금융공사(HF)가 은행에서 주택담보대출을 사들여 MBS를 발행합니다 — 이를 통해 은행은 장기 주담대를 단기로 전환할 수 있습니다. ABS는 카드채권(삼성카드·신한카드), 자동차 할부채권(현대캐피탈), 항공기 리스료(대한항공) 등 다양한 자산을 기초로 발행됩니다. 또한 부동산PF(Project Finance) 유동화가 2010년대 이후 급증했으며, 2023년 레고랜드 사태는 PF ABS의 구조적 취약점을 드러낸 사례입니다.",
  },
  {
    q: "CLO와 CDO는 어떻게 다른가요?",
    a: "CLO(담보대출채권)는 레버리지드론(기업 대출)을 기초자산으로 하며, 2008년 이후에도 비교적 건전하게 운용됐습니다. CDO(부채담보부증권)는 훨씬 광범위한 자산 — 채권, ABS 트랑쉐, 심지어 다른 CDO 트랑쉐까지 포함하며, 자산 품질과 상관관계 가정이 핵심입니다. CLO는 통상 100~200개의 기업 대출을 보유해 분산이 잘 되고, 매니저가 적극적으로 포트폴리오를 관리합니다. CDO는 구조가 더 복잡하고 기초자산 간 상관관계가 높을 때 치명적입니다. 2008년 위기를 일으킨 것은 서브프라임 모기지 ABS를 담은 CDO(때로는 CDO-squared)였습니다.",
  },
];

const FAQ_EN = [
  {
    q: "What's the fundamental difference between structured finance and regular bonds?",
    a: "A regular corporate bond depends on the issuer's creditworthiness — if the company goes bankrupt, bondholders take losses. Structured finance separates the issuer's credit from the investment. A Special Purpose Vehicle (SPV) holds the underlying assets (mortgages, auto loans, corporate loans) and pays investors solely from the cash flows those assets generate. If Samsung Card issues an ABS and then files for bankruptcy, the SPV's credit card receivables keep generating cash flows that continue to pay investors. This 'bankruptcy remoteness' is the foundational principle of structured finance.",
  },
  {
    q: "Why are tranches necessary? Why not just sell one bond backed by the pool?",
    a: "The cash flows from an asset pool contain a mix of good and bad outcomes. Pension funds want only AAA exposure; hedge funds will take risk for higher returns. Tranching 'tailors' the same underlying asset pool into different risk/return combinations. Losses are absorbed from the bottom up (Equity → BB → BBB), so senior tranches can achieve high credit ratings despite moderate quality in the underlying pool. This lets issuers raise funds more cheaply while satisfying diverse investor demand simultaneously.",
  },
  {
    q: "What was the connection between CDOs and the 2008 financial crisis?",
    a: "The core failure had two structural flaws. First, rating agencies (S&P, Moody's) dramatically underestimated correlation — they assumed house prices in different regions were unlikely to fall simultaneously, but from 2006–2007, they fell nationally in lockstep. Second, CDO-squared structures (CDOs backed by slices of other CDOs) obscured where risk actually sat. When AAA-rated CDOs began defaulting en masse, losses cascaded across banks, insurers, and money market funds. AIG wrote credit default swaps (CDS) guaranteeing CDO risk and nearly collapsed — the defining example of how structured finance amplified systemic risk.",
  },
  {
    q: "How is structured finance actually used in the Korean market?",
    a: "The most familiar forms are MBS (Mortgage-Backed Securities) and ABS (Asset-Backed Securities). Korea Housing Finance Corporation (HF) purchases residential mortgages from banks and issues MBS — this lets banks convert long-term mortgage exposure into short-term liquidity. ABS is issued against credit card receivables (Samsung Card, Shinhan Card), auto installment loans (Hyundai Capital), and aircraft lease payments (Korean Air). Real estate Project Finance (PF) securitization surged after the 2010s, and the 2023 Legoland incident exposed the structural vulnerabilities of PF ABS.",
  },
  {
    q: "What's the difference between a CLO and a CDO?",
    a: "A CLO (Collateralized Loan Obligation) uses leveraged loans (corporate bank loans) as collateral, and has performed relatively well even post-2008. A CDO (Collateralized Debt Obligation) encompasses a much broader asset set — bonds, ABS tranches, even other CDO tranches — where asset quality and correlation assumptions are everything. CLOs typically hold 100–200 diversified corporate loans with an active manager. CDOs can become lethal when underlying asset correlations spike. The 2008 crisis was triggered by CDOs (often CDO-squared) backed by subprime mortgage ABS, not by CLOs.",
  },
];

// ── 관련 개념 ────────────────────────────────────────────────────────────────
const RELATED = [
  { slug: "structured-abs",       ko: "ABS",             en: "ABS"                  },
  { slug: "structured-clo",       ko: "CLO",             en: "CLO"                  },
  { slug: "structured-cmbs",      ko: "CMBS",            en: "CMBS"                 },
  { slug: "structured-waterfall", ko: "트랑쉐·워터폴",   en: "Tranche & Waterfall"  },
  { slug: "levfin-ecosystem",     ko: "LevFin 생태계",   en: "LevFin Ecosystem"     },
];

// ═══════════════════════════════════════════════════════════════════════════════
// 메인 컴포넌트
// ═══════════════════════════════════════════════════════════════════════════════
export default function StructuredOverviewClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <SeriesNav lang={lang} />
      <main className="max-w-3xl mx-auto px-5 pb-24 pt-10">

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
          <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-amber-600 transition-colors">
            {ko ? "마켓 101" : "Market 101"}
          </Link>
          <span>›</span>
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            {ko ? "구조화금융 개요" : "Structured Finance Overview"}
          </span>
        </motion.div>

        {/* ── 히어로 헤더 ── */}
        <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: ACCENT }}
            >
              {ko ? "구조화금융" : "Structured Finance"}
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Ch.0 / 6
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
          <div className="flex flex-wrap gap-1.5 mb-6">
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

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 1 — 30초 요약: 구조화금융이란
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="mt-14 mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "30초 요약: 구조화금융이란" : "30-Second Summary: What Is Structured Finance"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "대출을 채권으로 바꾸는 '증권화 기계'의 핵심을 숫자로 먼저 잡습니다."
              : "Key numbers that define structured finance — the 'securitization machine.'"}
          </p>

          {/* KPI 카드 */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
          >
            {[
              { label: ko ? "글로벌 시장 규모" : "Global Market Size",  value: "$5T+",    sub: ko ? "ABS·CLO·CMBS·CDO" : "ABS, CLO, CMBS, CDO" },
              { label: ko ? "SPV 도산격리"    : "SPV Bankruptcy Remote", value: "100%",   sub: ko ? "발행사와 완전 분리" : "Fully separate from issuer" },
              { label: ko ? "평균 트랑쉐 수" : "Avg Tranche Count",      value: "4~8",    sub: ko ? "AAA → 에쿼티" : "AAA → Equity" },
              { label: ko ? "AAA 비중(CLO)"  : "AAA % (CLO)",            value: "~65%",   sub: ko ? "전체 발행 중" : "of total issuance" },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp()}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center"
              >
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{s.value}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <InfoBox>
            <strong>{ko ? "유동화(Securitization)란?" : "What is Securitization?"}</strong>
            <br /><br />
            {ko
              ? <>은행이 주택담보대출 1,000건을 보유하고 있다고 가정합니다. 이 대출들은 30년짜리 장기 자산이지만, 은행의 예금은 단기입니다. 이 '만기 불일치'를 해결하는 방법이 유동화입니다.
              <br /><br />
              은행 → (대출 1,000건 매각) → SPV → (채권 발행) → 투자자
              <br /><br />
              은행은 대출을 팔아 현금을 받고 또 다른 대출을 만들 수 있습니다. SPV는 그 현금흐름으로 채권을 갚습니다. 투자자는 직접 대출 1,000건을 심사하는 대신 하나의 채권 증서를 삽니다. 모두에게 이득인 것처럼 보이는 이 구조 — 그러나 리스크가 사라지는 게 아니라 재배분된다는 점이 핵심입니다.</>
              : <>Imagine a bank holds 1,000 mortgages. These are 30-year long-term assets, but the bank's deposits are short-term. Securitization solves this 'maturity mismatch.'
              <br /><br />
              Bank → (sells 1,000 loans) → SPV → (issues bonds) → Investors
              <br /><br />
              The bank sells loans to receive cash, freeing capacity to originate more. The SPV uses those cash flows to pay bondholders. Investors buy one security instead of underwriting 1,000 individual loans. This structure appears to benefit everyone — but the crucial insight is that risk doesn't disappear; it gets redistributed.</>
            }
          </InfoBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 2 — 증권화 기계: SPV의 역할
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "증권화 기계: SPV가 하는 일" : "The Securitization Machine: What the SPV Does"}
          </h2>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko
              ? "구조화금융의 엔진은 특수목적법인(SPV)입니다. True Sale과 도산격리, 두 개념이 핵심입니다."
              : "The engine of structured finance is the SPV. Two concepts drive it: True Sale and Bankruptcy Remoteness."}
          </p>

          {/* 흐름도: 발행사 → SPV → 투자자 */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/30 dark:bg-amber-900/10 p-6 mb-6">
            <p className="text-[12px] font-bold text-amber-700 dark:text-amber-300 mb-4 text-center uppercase tracking-wider">
              {ko ? "구조화금융 기본 흐름" : "Structured Finance Basic Flow"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-[12px]">
              {[
                { label: ko ? "오리지네이터\n(발행사·은행)" : "Originator\n(Bank/Issuer)", color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600" },
                { arrow: ko ? "자산 매각\n(True Sale)" : "Asset Sale\n(True Sale)" },
                { label: ko ? "SPV\n(도산격리)" : "SPV\n(Bankruptcy Remote)", color: "text-white border-2", style: { background: ACCENT, borderColor: ACCENT } },
                { arrow: ko ? "채권 발행\n(트랑쉐)" : "Bond Issuance\n(Tranches)" },
                { label: ko ? "투자자\n(연기금·CLO·은행)" : "Investors\n(Pension, CLO, Banks)", color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600" },
              ].map((item, i) =>
                "arrow" in item ? (
                  <div key={i} className="flex flex-col items-center gap-0.5 px-3 text-center">
                    <div className="hidden sm:block text-[10px] text-gray-500 dark:text-gray-400 whitespace-pre-line text-center leading-tight mb-1">{item.arrow}</div>
                    <div className="hidden sm:block text-gray-300 dark:text-gray-600 text-xl">→</div>
                    <div className="sm:hidden text-[10px] text-gray-500 dark:text-gray-400 whitespace-pre-line text-center leading-tight">{item.arrow} ↓</div>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`rounded-xl border px-4 py-3 text-center font-semibold whitespace-pre-line leading-snug text-[12px] ${item.color}`}
                    style={item.style}
                  >
                    {item.label}
                  </div>
                )
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-700/40">
              <p className="text-[11px] text-amber-800 dark:text-amber-300 text-center">
                {ko
                  ? "SPV는 법적으로 발행사와 완전히 독립된 법인 → 발행사 파산 시에도 SPV 자산은 보호됨"
                  : "The SPV is legally independent from the originator → SPV assets are protected even if the originator goes bankrupt"}
              </p>
            </div>
          </div>

          {/* True Sale & 도산격리 */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚖️</span>
                <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">
                  {ko ? "True Sale (진정한 매각)" : "True Sale"}
                </h3>
              </div>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "발행사가 자산을 SPV에 '판다'는 것은 단순한 담보 제공이 아닙니다. True Sale은 자산의 법적 소유권이 완전히 이전됐음을 의미합니다. 발행사가 회생절차에 들어가더라도 법원이 '그 자산은 이미 팔린 것'으로 판단해 되가져올 수 없어야 합니다. 이를 위해 계약서에 '재매입 조항 없음', '발행사가 SPV를 통제하지 않음' 등이 명시됩니다."
                  : "When the originator 'sells' assets to the SPV, it's not merely pledging them as collateral. True Sale means legal ownership has fully transferred. Even if the originator enters bankruptcy, a court must agree that the assets are gone — they cannot be reclaimed into the insolvency estate. This requires contractual provisions: no repurchase clauses, no originator control over the SPV."}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🛡️</span>
                <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">
                  {ko ? "도산격리 (Bankruptcy Remoteness)" : "Bankruptcy Remoteness"}
                </h3>
              </div>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "SPV 자체도 파산하지 않도록 설계됩니다. SPV는 사업 목적이 오직 자산 보유·채권 발행으로 한정되고, 다른 부채를 질 수 없으며, 발행사와 혼재되지 않아야 합니다(Non-Consolidation Opinion). 통상 외부 법인 관리인(독립 이사)을 두어 SPV가 발행사의 지시를 받지 않음을 증명합니다. 신용평가사는 도산격리 의견서(Legal Opinion)를 받은 경우에만 AAA 등급을 부여합니다."
                  : "The SPV itself is designed so it cannot go bankrupt. Its business purpose is strictly limited to holding assets and issuing bonds. It cannot incur other liabilities, and it must be kept separate from the originator (Non-Consolidation Opinion). An independent director is typically appointed to prove the SPV doesn't take orders from the originator. Rating agencies only assign AAA ratings when they receive a legal opinion confirming bankruptcy remoteness."}
              </p>
            </div>
          </div>

          <PracticeBox title={ko ? "신용평가사 관점: SPV 구조 심사 체크리스트" : "Rating Agency View: SPV Structure Review Checklist"}>
            {ko
              ? <>S&P·무디스·피치는 구조화금융 거래를 심사할 때 다음을 반드시 확인합니다:
                <br /><br />
                <strong>① True Sale 법률 의견서</strong> — 해당 국가 법률에서 자산 매각이 진정한 매각으로 인정되는가<br />
                <strong>② Non-Consolidation 의견서</strong> — 법원이 SPV와 발행사를 동일 법인으로 취급할 가능성 없음을 확인<br />
                <strong>③ 제한적 사업 목적</strong> — SPV 정관이 오직 이 거래만을 위한 것으로 제한됐는가<br />
                <strong>④ 독립 이사</strong> — 발행사와 이해관계가 없는 독립 이사가 SPV 이사회에 존재하는가<br />
                <strong>⑤ 현금흐름 예측 모델링</strong> — 스트레스 시나리오(경기침체·금리 급등)에서도 해당 트랑쉐의 원리금 지급 가능 여부<br /><br />
                이 중 하나라도 미충족 시 AAA 등급 부여가 불가능합니다.</>
              : <>S&P, Moody's, and Fitch check these items in every structured finance review:
                <br /><br />
                <strong>① True Sale Legal Opinion</strong> — Does the jurisdiction's law recognize the asset transfer as a true sale?<br />
                <strong>② Non-Consolidation Opinion</strong> — Legal confirmation that courts won't consolidate the SPV with the originator<br />
                <strong>③ Limited Business Purpose</strong> — Is the SPV charter restricted solely to this transaction?<br />
                <strong>④ Independent Director</strong> — Is there a director on the SPV board with no ties to the originator?<br />
                <strong>⑤ Cash Flow Stress Modeling</strong> — Can the tranche repay principal and interest under stress scenarios (recession, rate spike)?<br /><br />
                Failure on any single point blocks AAA rating.</>
            }
          </PracticeBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 3 — 4대 상품 비교: ABS vs CLO vs CMBS vs CDO
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "4대 상품 비교: ABS·CLO·CMBS·CDO 한눈에" : "4 Products At a Glance: ABS, CLO, CMBS, CDO"}
          </h2>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko
              ? "같은 SPV·트랑쉐 구조를 공유하지만 기초 자산, 투자자, 리스크 특성이 전혀 다릅니다."
              : "All share the same SPV and tranche architecture, but underlying assets, investors, and risk profiles are entirely different."}
          </p>

          {/* 글로벌 시장 규모 차트 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
              {ko ? "글로벌 구조화금융 시장 규모 ($ Trillion, 2023)" : "Global Structured Finance Market Size ($ Trillion, 2023)"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              {ko ? "출처: SIFMA, Fitch Ratings" : "Source: SIFMA, Fitch Ratings"}
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={MARKET_SIZE_DATA} barSize={48}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}T`} domain={[0, 3.5]} />
                <Tooltip
                  content={<ChartTooltip unit="T" />}
                  formatter={(v: number) => [`$${v}T`, ko ? "시장 규모" : "Market Size"]}
                />
                <Bar dataKey="value" name={ko ? "시장 규모" : "Market Size"} radius={[4, 4, 0, 0]}>
                  {MARKET_SIZE_DATA.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 비교 테이블 */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 w-28">
                    {ko ? "구분" : "Category"}
                  </th>
                  <th className="text-left px-3 py-3 font-bold bg-amber-50 dark:bg-amber-900/20" style={{ color: ACCENT }}>ABS</th>
                  <th className="text-left px-3 py-3 font-bold text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">CLO</th>
                  <th className="text-left px-3 py-3 font-bold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20">CMBS</th>
                  <th className="text-left px-3 py-3 font-bold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20">CDO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    cat: ko ? "담보 자산" : "Collateral",
                    abs: ko ? "카드·자동차·학자금 대출" : "Credit cards, auto, student loans",
                    clo: ko ? "레버리지드론 (기업 대출)" : "Leveraged loans (corporate)",
                    cmbs: ko ? "상업용 부동산 모기지" : "Commercial real estate mortgages",
                    cdo: ko ? "채권·ABS 트랑쉐·기타 부채" : "Bonds, ABS tranches, other debt",
                  },
                  {
                    cat: ko ? "주요 투자자" : "Key Investors",
                    abs: ko ? "은행·보험사·머니마켓" : "Banks, insurers, money market",
                    clo: ko ? "크레딧 펀드·헤지펀드·은행" : "Credit funds, hedge funds, banks",
                    cmbs: ko ? "보험사·연기금·리츠" : "Insurers, pension funds, REITs",
                    cdo: ko ? "헤지펀드·구조화 펀드" : "Hedge funds, structured vehicles",
                  },
                  {
                    cat: ko ? "글로벌 규모" : "Global Size",
                    abs: "$2.8T",
                    clo: "$1.1T",
                    cmbs: "$0.6T",
                    cdo: "$0.5T",
                  },
                  {
                    cat: ko ? "만기 구조" : "Tenor",
                    abs: ko ? "1~7년 (자산 만기 연동)" : "1–7yr (asset-linked)",
                    clo: ko ? "2년 재투자 + 7년 만기" : "2yr reinvestment + 7yr final",
                    cmbs: ko ? "5·7·10년 (고정)" : "5, 7, 10yr (fixed)",
                    cdo: ko ? "5~12년 (다양)" : "5–12yr (varies)",
                  },
                  {
                    cat: ko ? "핵심 리스크" : "Key Risk",
                    abs: ko ? "소비자 신용 리스크" : "Consumer credit risk",
                    clo: ko ? "기업 디폴트·LBO 레버리지" : "Corporate default, LBO leverage",
                    cmbs: ko ? "공실률·상업용 부동산 가치" : "Vacancy, CRE valuation",
                    cdo: ko ? "상관관계·시장 유동성" : "Correlation, market liquidity",
                  },
                  {
                    cat: ko ? "2008 위기 영향" : "2008 Crisis Impact",
                    abs: ko ? "모기지 ABS 직격" : "Mortgage ABS direct hit",
                    clo: ko ? "상대적 견조 (기업 대출 분산)" : "Relatively resilient (diversified)",
                    cmbs: ko ? "상업 부동산 급락으로 타격" : "Hit by CRE price crash",
                    cdo: ko ? "위기 진원지 (CDO-squared)" : "Crisis epicenter (CDO-squared)",
                  },
                ].map((row) => (
                  <tr key={row.cat} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50 text-[11px]">{row.cat}</td>
                    <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-amber-50/10 dark:bg-amber-900/5">{row.abs}</td>
                    <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-yellow-50/10 dark:bg-yellow-900/5">{row.clo}</td>
                    <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-orange-50/10 dark:bg-orange-900/5">{row.cmbs}</td>
                    <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-red-50/10 dark:bg-red-900/5">{row.cdo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 4 — 트랑쉐 구조: AAA~에쿼티 계층
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "트랑쉐 구조: 리스크의 계층화" : "Tranche Structure: Layering Risk"}
          </h2>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko
              ? "동일한 자산 풀이 등급별로 다른 리스크/수익을 가진 여러 채권으로 나뉩니다. 손실은 아래서부터 올라옵니다."
              : "The same asset pool is sliced into bonds with different risk/return per rating. Losses absorb from the bottom up."}
          </p>

          <InfoBox icon="🏗️">
            <strong>{ko ? "건물 층수 비유" : "Building Floors Analogy"}</strong>
            <br /><br />
            {ko
              ? <>구조화금융의 트랑쉐를 홍수가 났을 때의 건물로 생각해보세요. 지하(에쿼티)부터 물이 차오릅니다. 1층(BB), 2층(BBB), 3층(A), 4층(AA), 꼭대기(AAA) 순으로 물이 올라와야만 해당 층이 침수됩니다.
              <br /><br />
              에쿼티 투자자는 가장 먼저 침수되지만, 홍수가 없으면 초과 현금흐름(Excess Spread)을 독점합니다. AAA 투자자는 거의 침수되지 않지만 수익률도 낮습니다. 동일한 자산 풀로 서로 다른 투자자의 수요를 충족하는 것 — 이것이 트랑쉐의 존재 이유입니다.</>
              : <>Think of structured finance tranches as floors of a building during a flood. Water (losses) rises from the basement (Equity) first. Only after the basement floods does the 1st floor (BB) get wet, then 2nd (BBB), 3rd (A), 4th (AA), and finally the top floor (AAA).
              <br /><br />
              Equity investors get flooded first, but when there's no flood they capture all the excess cash flow. AAA investors almost never get wet, but their yield reflects that safety. The same asset pool satisfies entirely different investor appetites — that's the point of tranching.</>
            }
          </InfoBox>

          {/* 트랑쉐 워터폴 다이어그램 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-4">
              {ko ? "CLO 트랑쉐 구조 예시 (총 $500M 기준)" : "Sample CLO Tranche Structure (Total $500M)"}
            </p>
            <div className="space-y-2">
              {[
                { name: "AAA",    size: "~$325M (65%)", rate: ko ? "SOFR+120bp" : "SOFR+120bp", color: ACCENT,    text: "white",   risk: ko ? "최저 — 손실 흡수 가장 마지막" : "Lowest — last to absorb losses" },
                { name: "AA",     size: "~$40M (8%)",   rate: ko ? "SOFR+180bp" : "SOFR+180bp", color: "#fbbf24", text: "white",   risk: ko ? "낮음" : "Low" },
                { name: "A",      size: "~$30M (6%)",   rate: ko ? "SOFR+250bp" : "SOFR+250bp", color: "#fcd34d", text: "gray-800", risk: ko ? "중간" : "Medium" },
                { name: "BBB",    size: "~$25M (5%)",   rate: ko ? "SOFR+380bp" : "SOFR+380bp", color: "#fb923c", text: "white",   risk: ko ? "중간-높음" : "Medium-High" },
                { name: "BB",     size: "~$25M (5%)",   rate: ko ? "SOFR+600bp" : "SOFR+600bp", color: "#f97316", text: "white",   risk: ko ? "높음" : "High" },
                { name: "Equity", size: "~$55M (11%)",  rate: ko ? "잔여 현금흐름 (15~20%+ 목표)" : "Residual cash flow (15–20%+ target)", color: "#ef4444", text: "white", risk: ko ? "최고 — 손실 가장 먼저 흡수" : "Highest — first to absorb losses" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{ background: t.color }}
                >
                  <span className={`text-[13px] font-extrabold w-14 flex-shrink-0 text-${t.text}`}>{t.name}</span>
                  <span className={`text-[11px] font-semibold flex-shrink-0 text-${t.text} opacity-90`}>{t.size}</span>
                  <span className={`text-[11px] flex-shrink-0 text-${t.text} opacity-80 hidden sm:block`}>{t.rate}</span>
                  <span className={`ml-auto text-[10px] text-${t.text} opacity-75 text-right`}>{t.risk}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-3">
              {ko ? "* 위가 senior(선순위), 아래가 junior(후순위). 손실은 Equity부터 순서대로 흡수." : "* Top = senior (paid first); bottom = junior. Losses absorb from Equity upward."}
            </p>
          </div>

          {/* 스프레드 비교 차트 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
              {ko ? "트랑쉐별 스프레드 비교 (bps over SOFR, CLO 기준)" : "Spread by Tranche (bps over SOFR, CLO)"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              {ko ? "출처: JP모간 리서치, 2023" : "Source: JPMorgan Research, 2023"}
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={TRANCHE_SPREAD_DATA} barSize={36}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}bp`} />
                <Tooltip
                  formatter={(v: number) => [`${v}bp`, ko ? "스프레드" : "Spread"]}
                />
                <Bar dataKey="spread" name={ko ? "스프레드" : "Spread"} radius={[4, 4, 0, 0]}>
                  {TRANCHE_SPREAD_DATA.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 5 — 신용 보강: 4가지 방법
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "신용 보강: 어떻게 AAA를 만드는가" : "Credit Enhancement: Engineering AAA"}
          </h2>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko
              ? "BBB급 기업 대출들을 모아 AAA를 만들 수 있는 이유 — 4가지 신용 보강 메커니즘이 있습니다."
              : "Why pooling BBB corporate loans can produce a AAA bond — four credit enhancement mechanisms explain it."}
          </p>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📦",
                title: ko ? "① 과잉담보 (Overcollateralization, OC)" : "① Overcollateralization (OC)",
                body: ko
                  ? "자산 풀의 가치가 발행 채권의 액면가를 초과합니다. 예를 들어 $110M의 자동차 대출로 $100M 채권을 발행한다면 OC는 10%. 대출 풀에서 10%가 디폴트돼도 채권자는 100% 상환받습니다. CLO에서 OC 테스트는 AAA 트랑쉐 보호를 위한 핵심 지표입니다."
                  : "The asset pool's value exceeds the face value of bonds issued. If $110M of auto loans backs $100M of bonds, OC is 10%. Even if 10% of the loan pool defaults, bondholders are still made whole. In CLOs, the OC test is a core metric protecting the AAA tranche.",
              },
              {
                icon: "💸",
                title: ko ? "② 초과스프레드 (Excess Spread, XS)" : "② Excess Spread (XS)",
                body: ko
                  ? "자산 풀에서 들어오는 이자 수입이 채권 이자 지급액을 초과하는 부분입니다. 대출 평균 금리 7% - 발행 채권 평균 금리 4% = XS 3%. 이 초과분이 먼저 손실을 흡수하는 완충재 역할을 합니다. CLO에서는 이 XS가 에쿼티 투자자의 수익 원천이기도 합니다."
                  : "The portion of asset pool interest income that exceeds bond coupon payments. If the pool earns 7% and bonds pay 4% average, XS = 3%. This excess acts as the first loss buffer. In CLOs, XS is also the primary return source for equity investors.",
              },
              {
                icon: "🏦",
                title: ko ? "③ 준비적립금 (Reserve Account)" : "③ Reserve Account",
                body: ko
                  ? "SPV 내에 일정 금액의 현금을 준비금으로 적립해 두는 계정입니다. 대출 연체가 갑자기 증가하거나 운영 비용이 예상치를 초과했을 때 이 준비금으로 채권 이자를 지급합니다. 보통 전체 발행 금액의 0.5~2% 수준을 유지합니다."
                  : "A cash reserve held inside the SPV to cover shortfalls. If loan delinquencies spike unexpectedly or operating costs exceed projections, the reserve account funds bond coupon payments. Typically sized at 0.5–2% of total issuance.",
              },
              {
                icon: "🪜",
                title: ko ? "④ 후순위화 (Subordination)" : "④ Subordination",
                body: ko
                  ? "트랑쉐 구조 자체가 신용 보강입니다. 에쿼티(11%) + BB(5%) + BBB(5%) = 21%가 완전히 사라져야만 AAA가 손실을 봅니다. 즉, 전체 자산 풀의 21%가 회수불능이 되는 극단적 시나리오에서도 AAA 트랑쉐는 원금이 보호됩니다. 이 '손실 쿠션'의 두께가 신용등급 결정의 핵심 변수입니다."
                  : "The tranche structure itself is credit enhancement. Equity (11%) + BB (5%) + BBB (5%) = 21% must be entirely wiped out before AAA takes any loss. Even in the extreme scenario where 21% of the asset pool is irrecoverable, AAA principal is protected. This 'loss cushion' thickness is the primary driver of credit rating outcomes.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp()}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <PracticeBox title={ko ? "신용평가사 관점: OC·XS 테스트 실패의 연쇄반응" : "Rating Agency View: OC/XS Test Failure Cascade"}>
            {ko
              ? <>CLO에서 OC 테스트 또는 XS 테스트가 실패하면 자동으로 현금흐름이 재배분됩니다:
                <br /><br />
                <strong>정상 상황:</strong> 현금흐름이 AAA → AA → A → BBB → BB → Equity 순서로 배분
                <br />
                <strong>OC 테스트 실패 시:</strong> Equity와 하위 트랑쉐 이자 지급을 중단 → 그 현금으로 AAA·AA 원금을 조기 상환(Deleverage)
                <br /><br />
                이 메커니즘 덕분에 포트폴리오가 악화되더라도 선순위 트랑쉐는 빠르게 원금을 회수합니다. 반면 에쿼티 투자자는 이 시점에서 아무것도 받지 못하게 됩니다. 2020년 코로나 충격 때 많은 CLO에서 OC 테스트가 실패했고, 에쿼티 투자자들이 수개월간 분배금을 못 받은 사례가 있습니다.</>
              : <>In a CLO, if the OC test or XS test fails, cash flows are automatically redirected:
                <br /><br />
                <strong>Normal state:</strong> Cash flows distributed AAA → AA → A → BBB → BB → Equity
                <br />
                <strong>OC test failure:</strong> Equity and junior tranche interest payments are stopped → that cash is used to prepay (deleverage) AAA and AA principal
                <br /><br />
                This mechanism ensures senior tranches recover principal quickly even as portfolio quality deteriorates. Equity investors, however, receive nothing during this period. In the 2020 COVID shock, many CLOs failed OC tests, and equity investors went without distributions for months.</>
            }
          </PracticeBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 6 — 시장 참여자 지도
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "시장 참여자 지도: 누가 무엇을 하는가" : "Market Participant Map: Who Does What"}
          </h2>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {ko
              ? "구조화금융 거래 하나에는 최소 5종류의 전문 기관이 관여합니다."
              : "A single structured finance transaction involves at least five types of specialized institutions."}
          </p>

          <div className="space-y-3">
            {[
              {
                role: ko ? "오리지네이터 (Originator)" : "Originator",
                icon: "🏢",
                color: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",
                earn: ko ? "유동화 이익 + 대출 추가 실행 가능" : "Securitization gain + freed capacity to originate more",
                desc: ko
                  ? "대출을 만드는 주체입니다. 은행(주택담보대출), 카드사(카드채권), 자동차 파이낸스사(할부채권) 등. 대출을 SPV에 매각함으로써 자금을 회수해 더 많은 대출을 만들 수 있습니다. 한국에서는 주택금융공사, 국민은행, 삼성카드 등이 주요 오리지네이터입니다."
                  : "The entity that creates the loans. Banks (mortgages), credit card companies (receivables), auto finance companies (installment loans). By selling loans to the SPV, they recover capital to originate more. In Korea, key originators include Korea Housing Finance Corporation, KB Kookmin Bank, and Samsung Card.",
              },
              {
                role: ko ? "어레인저 (Arranger / Investment Bank)" : "Arranger (Investment Bank)",
                icon: "🎯",
                color: "border-amber-200 dark:border-amber-700/50 bg-amber-50/30 dark:bg-amber-900/10",
                earn: ko ? "언더라이팅·배치 수수료 (발행액의 0.5~2%)" : "Underwriting & placement fees (0.5–2% of issuance)",
                desc: ko
                  ? "거래의 설계자이자 실행자입니다. SPV 설립, 트랑쉐 구조 설계, 신용평가사 협의, 법률 문서 조율, 최종 채권 투자자 판매까지 전 과정을 주도합니다. JP모간·씨티·BofA·골드만삭스 등 글로벌 IB가 주요 어레인저입니다. 국내에서는 KB증권·NH투자증권이 ABS 어레인저 시장을 주도합니다."
                  : "The architect and executor of the deal. Leads SPV setup, tranche structure design, rating agency negotiation, legal documentation, and final bond sales to investors. JPMorgan, Citi, BofA, and Goldman Sachs dominate globally. In Korea, KB Securities and NH Investment Securities lead the ABS arranger market.",
              },
              {
                role: ko ? "신용평가사 (Rating Agencies)" : "Credit Rating Agencies",
                icon: "📊",
                color: "border-blue-200 dark:border-blue-700/50 bg-blue-50/30 dark:bg-blue-900/10",
                earn: ko ? "평가 수수료 (딜당 $100K~$1M)" : "Rating fees ($100K–$1M per deal)",
                desc: ko
                  ? "S&P, 무디스, 피치 등이 각 트랑쉐의 신용등급을 부여합니다. 구조화금융에서 신용평가사의 역할은 일반 회사채보다 훨씬 복잡합니다 — 기초 자산 품질, 상관관계, 신용 보강 수준을 종합 분석해 AAA~C까지 등급을 결정합니다. 2008년 위기는 신용평가사의 이해충돌(발행사가 수수료 지불) 문제를 드러냈고, 이후 도드-프랭크법으로 규제가 강화됐습니다."
                  : "S&P, Moody's, and Fitch assign credit ratings to each tranche. Their role in structured finance is far more complex than rating corporate bonds — they model underlying asset quality, correlation assumptions, and credit enhancement levels to assign ratings from AAA to C. The 2008 crisis exposed conflicts of interest (issuers pay the fees), leading to stricter regulation under Dodd-Frank.",
              },
              {
                role: ko ? "투자자 (Investors)" : "Investors",
                icon: "💼",
                color: "border-violet-200 dark:border-violet-700/50 bg-violet-50/30 dark:bg-violet-900/10",
                earn: ko ? "트랑쉐별 이자 수익 + (에쿼티는 초과 현금흐름)" : "Tranche coupon + (equity captures excess cash flow)",
                desc: ko
                  ? "각 트랑쉐를 구매하는 기관들입니다. AAA: 머니마켓펀드·은행·보험사. AA~A: 연기금·생명보험사. BBB: 크레딧 헤지펀드. BB: 하이일드 펀드·기회주의적 크레딧 펀드. 에쿼티: CLO 매니저 자체(skin in the game 요건), 구조화 크레딧 펀드. 투자자 층의 다양성이 구조화금융 시장의 유동성을 지탱합니다."
                  : "The institutions that purchase each tranche. AAA: money market funds, banks, insurers. AA–A: pension funds, life insurers. BBB: credit hedge funds. BB: high-yield and opportunistic credit funds. Equity: CLO managers themselves (skin-in-the-game requirements), structured credit funds. This diverse investor base underpins structured finance market liquidity.",
              },
              {
                role: ko ? "서비서 (Servicer)" : "Servicer",
                icon: "⚙️",
                color: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",
                earn: ko ? "서비싱 수수료 (잔액의 0.1~0.5%/년)" : "Servicing fee (0.1–0.5% of outstanding balance/year)",
                desc: ko
                  ? "SPV가 보유한 대출의 일상적 관리를 담당합니다. 차주로부터 원리금 수취, 연체 관리, 채무 재조정, 담보물(부동산 등) 처분까지 실질적 운영을 맡습니다. 서비서는 보통 오리지네이터가 겸임합니다(예: 주택담보대출을 유동화한 은행이 계속 대출 관리). 서비서 파산 시 서비서 교체 절차(Servicer Transfer Trigger)가 구조에 반드시 포함됩니다."
                  : "Handles day-to-day management of the loans held by the SPV. Collects principal and interest from borrowers, manages delinquencies, negotiates modifications, and disposes of collateral (real estate, etc.). The servicer is typically the originator (e.g., the bank that securitized the mortgages continues to service them). Servicer transfer triggers — automatic replacement if the servicer fails — must be built into every transaction.",
              },
            ].map((p) => (
              <div key={p.role} className={`rounded-xl border ${p.color} p-5`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">{p.role}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/70 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 font-semibold">
                        {ko ? "수익" : "Revenue"}: {p.earn}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            섹션 7 — FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
          <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
        </motion.section>

        {/* ── 시리즈 네비게이션 (하단) ── */}
        <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
              {ko ? "구조화금융 101 시리즈" : "Structured Finance 101 Series"}
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {STRUCTURED_SERIES.slice(1).map((ch) => (
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
                  <span className="ml-auto text-amber-500 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── 관련 개념 ── */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200">
              {ko ? "관련 개념" : "Related Concepts"}
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link key={r.slug} href={`${ko ? "/market-101" : "/en/market-101"}/${r.slug}`}>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-colors bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-300"
                >
                  {ko ? r.ko : r.en} →
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── 언어 전환 ── */}
        <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-between">
            <span className="text-[13px] text-gray-500 dark:text-gray-400">
              {ko ? "영어로 읽기" : "한국어로 읽기"}
            </span>
            <Link
              href={ko ? "/en/market-101/structured-overview" : "/market-101/structured-overview"}
              className="text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-colors hover:shadow-sm"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              {ko ? "Switch to English →" : "한국어로 전환 →"}
            </Link>
          </div>
        </motion.div>

        {/* ── 참고 자료 ── */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-10">
          <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
            {ko ? "참고 자료" : "References"}
          </h2>
          <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
            {[
              "SIFMA (2024). US Structured Finance Issuance and Outstanding.",
              "Fitch Ratings (2023). Global Structured Finance Annual Report.",
              "JP Morgan Research (2023). CLO Primer: Mechanics and Valuation.",
              "Bank for International Settlements (2023). Securitisation Frameworks and Basel III.",
              "Financial Crisis Inquiry Commission (2011). The Financial Crisis Inquiry Report.",
              "S&P Global (2023). Annual Global Structured Finance Default Study.",
              "IMF (2023). Global Financial Stability Report — Chapter on Structured Credit.",
              "주택금융공사 (2023). MBS 발행 실적 보고서.",
            ].map((ref, i) => (
              <li key={i}>[{i + 1}] {ref}</li>
            ))}
          </ol>
        </motion.section>

        {/* ── 하단 ShareButtons ── */}
        <ShareButtons
          title={ko ? concept.title : (concept.titleEn ?? concept.title)}
          variant="bottom"
          lang={lang}
        />

      </main>
      <Footer />
    </div>
  );
}
