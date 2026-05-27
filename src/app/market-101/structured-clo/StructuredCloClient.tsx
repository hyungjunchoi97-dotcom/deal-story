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
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Constants ─────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b";
const THIS_CH = "structured-clo";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-80px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"      : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"      : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"     : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"   : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기" : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"   : "Ch.6 Cases"      },
];

// ── Chart Data ────────────────────────────────────────────────────────────────
const ISSUANCE_DATA = [
  { year: "2019", amount: 127, fill: "#fcd34d" },
  { year: "2020", amount: 91,  fill: "#fbbf24" },
  { year: "2021", amount: 187, fill: "#f59e0b" },
  { year: "2022", amount: 130, fill: "#fbbf24" },
  { year: "2023", amount: 126, fill: "#fbbf24" },
  { year: "2024", amount: 185, fill: "#d97706" },
];

const SPREAD_DATA = [
  { tranche: "AAA", bp: 130,  color: "#86efac", pct: null },
  { tranche: "AA",  bp: 175,  color: "#6ee7b7", pct: null },
  { tranche: "A",   bp: 220,  color: "#5eead4", pct: null },
  { tranche: "BBB", bp: 330,  color: "#7dd3fc", pct: null },
  { tranche: "BB",  bp: 550,  color: "#a5b4fc", pct: null },
  { tranche: "B",   bp: 750,  color: "#f9a8d4", pct: null },
  { tranche: "Eq",  bp: 1500, color: "#fca5a5", pct: "15-20% IRR" },
];

// ── Tranche Stack ─────────────────────────────────────────────────────────────
const TRANCHES: {
  rating: string;
  pct: string;
  spread: (ko: boolean) => string;
  investors: (ko: boolean) => string;
  color: string;
  textColor: string;
  dotColor: string;
  border: string;
}[] = [
  {
    rating: "AAA",
    pct: "~64%",
    spread: (ko) => ko ? "SOFR + 130bp" : "SOFR + 130bp",
    investors: (ko) => ko ? "MMF·보험사·은행" : "Money Market Funds, Insurers, Banks",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
    textColor: "text-emerald-800 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    border: "border-emerald-300 dark:border-emerald-700",
  },
  {
    rating: "AA",
    pct: "~9%",
    spread: (ko) => ko ? "SOFR + 175bp" : "SOFR + 175bp",
    investors: (ko) => ko ? "생명보험·연기금" : "Life Insurers, Pension Funds",
    color: "bg-teal-100 dark:bg-teal-900/30",
    textColor: "text-teal-800 dark:text-teal-300",
    dotColor: "bg-teal-500",
    border: "border-teal-300 dark:border-teal-700",
  },
  {
    rating: "A",
    pct: "~5%",
    spread: (ko) => ko ? "SOFR + 220bp" : "SOFR + 220bp",
    investors: (ko) => ko ? "생명보험·크레딧펀드" : "Life Insurers, Credit Funds",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
    textColor: "text-cyan-800 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    border: "border-cyan-300 dark:border-cyan-700",
  },
  {
    rating: "BBB",
    pct: "~6%",
    spread: (ko) => ko ? "SOFR + 330bp" : "SOFR + 330bp",
    investors: (ko) => ko ? "크레딧펀드·특수채권" : "Credit Funds, Specialty Finance",
    color: "bg-sky-100 dark:bg-sky-900/30",
    textColor: "text-sky-800 dark:text-sky-300",
    dotColor: "bg-sky-500",
    border: "border-sky-300 dark:border-sky-700",
  },
  {
    rating: "BB",
    pct: "~6%",
    spread: (ko) => ko ? "SOFR + 550bp" : "SOFR + 550bp",
    investors: (ko) => ko ? "헤지펀드·크레딧헤지펀드" : "Hedge Funds, Credit HFs",
    color: "bg-violet-100 dark:bg-violet-900/30",
    textColor: "text-violet-800 dark:text-violet-300",
    dotColor: "bg-violet-500",
    border: "border-violet-300 dark:border-violet-700",
  },
  {
    rating: "B",
    pct: "~2%",
    spread: (ko) => ko ? "SOFR + 750bp" : "SOFR + 750bp",
    investors: (ko) => ko ? "헤지펀드·부실채권펀드" : "Hedge Funds, Distressed Funds",
    color: "bg-pink-100 dark:bg-pink-900/30",
    textColor: "text-pink-800 dark:text-pink-300",
    dotColor: "bg-pink-500",
    border: "border-pink-300 dark:border-pink-700",
  },
  {
    rating: "CCC",
    pct: "~2%",
    spread: (ko) => ko ? "SOFR + 1,100bp+" : "SOFR + 1,100bp+",
    investors: (ko) => ko ? "부실채권·기회주의펀드" : "Distressed / Opportunistic Funds",
    color: "bg-rose-100 dark:bg-rose-900/30",
    textColor: "text-rose-800 dark:text-rose-300",
    dotColor: "bg-rose-500",
    border: "border-rose-300 dark:border-rose-700",
  },
  {
    rating: "Equity",
    pct: "~6%",
    spread: (ko) => ko ? "목표 IRR 15–20%" : "Target IRR 15–20%",
    investors: (ko) => ko ? "CLO 매니저·PE펀드" : "CLO Managers, PE Funds",
    color: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-800 dark:text-amber-300",
    dotColor: "bg-amber-500",
    border: "border-amber-300 dark:border-amber-700",
  },
];

// ── CLO Managers ──────────────────────────────────────────────────────────────
const CLO_MANAGERS: {
  name: string;
  aum: (ko: boolean) => string;
  deals2024: string;
  note: (ko: boolean) => string;
  icon: string;
}[] = [
  {
    name: "Blackstone Credit",
    aum: (ko) => ko ? "$280bn+ 크레딧 AUM" : "$280bn+ credit AUM",
    deals2024: "~$18bn CLO",
    note: (ko) => ko
      ? "GSO Capital 인수(2018)로 클로즈드·오픈엔드 모두 운용. 브로드마켓 + BSL(Broadly Syndicated Loan) 전략."
      : "Post-GSO acquisition (2018), runs both closed-end and open-end structures. Broad market + BSL strategy.",
    icon: "🦅",
  },
  {
    name: "Apollo Global",
    aum: (ko) => ko ? "$515bn+ 토탈 AUM" : "$515bn+ total AUM",
    deals2024: "~$15bn CLO",
    note: (ko) => ko
      ? "미들마켓 CLO(AMML) + BSL CLO 동시 운용. 직접 대출 기반 하이브리드 구조 강점."
      : "Runs Middle Market CLOs (AMML) alongside BSL CLOs. Strength in hybrid direct-lending structures.",
    icon: "🏛️",
  },
  {
    name: "Ares Management",
    aum: (ko) => ko ? "$420bn+ 크레딧 AUM" : "$420bn+ credit AUM",
    deals2024: "~$16bn CLO",
    note: (ko) => ko
      ? "CLO 1호 발행사 중 하나. 유럽 CLO 시장에서도 최상위. 영국·미국 동시 운용."
      : "Among the first CLO issuers. Top-tier in the European CLO market alongside US operations.",
    icon: "⚡",
  },
  {
    name: "Carlyle Group",
    aum: (ko) => ko ? "$85bn+ 글로벌 크레딧" : "$85bn+ global credit",
    deals2024: "~$10bn CLO",
    note: (ko) => ko
      ? "1990년대 초부터 CLO 운용. 장기 트랙레코드 바탕 AAA 발행 최저 스프레드 구현."
      : "Managing CLOs since the early 1990s. Long track record underpins tightest AAA spreads.",
    icon: "🌐",
  },
];

// ── Lifecycle Phases ──────────────────────────────────────────────────────────
const LIFECYCLE: {
  phase: string;
  label: (ko: boolean) => string;
  duration: (ko: boolean) => string;
  desc: (ko: boolean) => string;
  detail: (ko: boolean) => string;
  color: string;
  dot: string;
  icon: string;
}[] = [
  {
    phase: "1",
    label: (ko) => ko ? "램프업 (Ramp-Up)" : "Ramp-Up Period",
    duration: (ko) => ko ? "약 6개월" : "~6 months",
    desc: (ko) => ko
      ? "CLO 매니저가 레버리지드 론 풀 구성 — 목표 포트폴리오의 60–80%까지 매입."
      : "CLO manager builds the leveraged loan pool — purchases 60–80% of target portfolio.",
    detail: (ko) => ko
      ? "이 기간 동안 CLO 매니저는 약 100–200개의 레버리지드 론을 시장에서 매입합니다. 대출 선정 기준: 산업 분산(단일 산업 10% 상한), 개별 대출 크기 제한, 최저 신용등급(통상 B-/B3 이상), 플로팅레이트(SOFR+) 조건 충족. 이 기간에는 트랑쉐 투자자에게 이자 지급이 제한적으로 이루어집니다."
      : "The CLO manager buys approximately 100–200 leveraged loans from the secondary market. Loan selection criteria: industry diversification (single industry cap ~10%), per-obligor size limits, minimum rating (typically B-/B3 or better), floating-rate (SOFR+) requirement. Interest distributions to noteholders are limited during this phase.",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
    icon: "🏗️",
  },
  {
    phase: "2",
    label: (ko) => ko ? "재투자기간 (Reinvestment)" : "Reinvestment Period",
    duration: (ko) => ko ? "3–5년" : "3–5 years",
    desc: (ko) => ko
      ? "대출 상환금으로 새로운 레버리지드 론 매입 — 포트폴리오 유지 및 성과 최적화."
      : "Principal repayments recycled into new leveraged loans — maintaining and optimizing the portfolio.",
    detail: (ko) => ko
      ? "CLO의 핵심 수익 창출 기간입니다. 차주(기업)가 론을 상환하면 CLO는 그 원금을 새로운 론 매입에 재투자합니다. 매니저는 이 기간 동안 포트폴리오 크레딧 품질을 지속적으로 관리하고, 문제 대출을 교체하며, 등급 테스트(OC Test, IC Test)를 충족시켜야 합니다. 트랑쉐 투자자들은 순차적으로 이자를 수령합니다(워터폴 구조)."
      : "The core income-generating phase. As borrowers repay loans, the CLO reinvests principal into new loans. The manager continuously manages portfolio credit quality, replaces troubled loans, and must pass overcollateralization (OC) and interest coverage (IC) tests. Tranche investors receive interest sequentially per the waterfall.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    icon: "🔄",
  },
  {
    phase: "3",
    label: (ko) => ko ? "정산기간 (Amortization)" : "Amortization Period",
    duration: (ko) => ko ? "만기까지 (통상 2–3년)" : "Until maturity (~2–3 years)",
    desc: (ko) => ko
      ? "재투자 중단 — 대출 상환금을 상위 트랑쉐부터 순서대로 원금 상환."
      : "No more reinvestment — principal repayments distributed sequentially from senior to junior tranches.",
    detail: (ko) => ko
      ? "재투자기간 종료 후 CLO는 순차적 원금 상환 모드로 전환됩니다. AAA 투자자부터 시작해 AA, A 순으로 원금을 돌려받습니다. 에쿼티 투자자는 마지막에 잔여 현금흐름을 수령합니다. 이 기간의 OC 위반 시 에쿼티로의 현금흐름이 차단되어 선순위 채권 원금 상환에 우선 사용됩니다. CLO 만기는 통상 발행 후 12–15년이지만, 실제 평균 존속기간은 7–9년입니다."
      : "After the reinvestment period, the CLO enters sequential paydown mode. AAA investors receive principal first, followed by AA, A, and so on. Equity holders receive residual cash flows last. If OC tests are breached during amortization, cash flow to equity is blocked and redirected to senior principal repayment. CLO legal maturity is typically 12–15 years from issuance, but average real-world life is 7–9 years.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
    icon: "📤",
  },
];

// ── Manager Fee Structure ──────────────────────────────────────────────────────
const FEE_COMPONENTS: {
  name: (ko: boolean) => string;
  rate: string;
  basis: (ko: boolean) => string;
  note: (ko: boolean) => string;
  color: string;
}[] = [
  {
    name: (ko) => ko ? "선순위 수수료 (Senior Fee)" : "Senior Management Fee",
    rate: "0.40–0.50%",
    basis: (ko) => ko ? "포트폴리오 원금 잔액 기준 연율" : "p.a. on par value of portfolio",
    note: (ko) => ko
      ? "현금흐름 워터폴에서 AAA 이자보다 먼저 지급. 매니저의 최소 보장 수익. 포트폴리오 상태와 무관하게 지급."
      : "Paid before AAA note interest in the waterfall. Manager's minimum guaranteed income. Paid regardless of portfolio performance.",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
  },
  {
    name: (ko) => ko ? "후순위 수수료 (Subordinated Fee)" : "Subordinated Management Fee",
    rate: "0.15–0.25%",
    basis: (ko) => ko ? "포트폴리오 원금 잔액 기준 연율" : "p.a. on par value of portfolio",
    note: (ko) => ko
      ? "에쿼티 배당 직전에 지급. OC 테스트 미충족 시 지급 차단(Diversion). 포트폴리오 성과가 나쁠 때 지급 제한."
      : "Paid just before equity distribution. Can be blocked (diverted) if OC test fails. Penalizes managers for poor portfolio performance.",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
  },
  {
    name: (ko) => ko ? "성과 보수 (Incentive Fee)" : "Incentive / Performance Fee",
    rate: "20% carry",
    basis: (ko) => ko ? "허들 수익률(Hurdle Rate) 초과 에쿼티 수익에 대해" : "on equity returns above hurdle rate",
    note: (ko) => ko
      ? "통상 에쿼티 IRR이 12% 허들 초과 시 초과 수익의 20%. 에쿼티 투자자와 매니저의 이해관계를 일치시키는 장치. 최근 경쟁 심화로 허들 낮아지는 추세."
      : "Typically 20% of excess equity returns above a 12% IRR hurdle. Aligns manager and equity investor incentives. Hurdle rates have been declining as competition intensifies.",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
  },
];

// ── US vs EU CLO Differences ──────────────────────────────────────────────────
const US_EU_DIFF: {
  feature: (ko: boolean) => string;
  us: (ko: boolean) => string;
  eu: (ko: boolean) => string;
}[] = [
  {
    feature: (ko) => ko ? "시장 규모 (2024)" : "Market Size (2024)",
    us: (ko) => ko ? "$185bn 신규 발행" : "$185bn new issuance",
    eu: (ko) => ko ? "€43bn 신규 발행" : "€43bn new issuance",
  },
  {
    feature: (ko) => ko ? "기준금리" : "Reference Rate",
    us: (ko) => ko ? "SOFR (Term 3M)" : "Term SOFR (3M)",
    eu: (ko) => ko ? "EURIBOR (3M)" : "EURIBOR (3M)",
  },
  {
    feature: (ko) => ko ? "위험보유 규제" : "Risk Retention",
    us: (ko) => ko ? "미국법원 CLO 면제 확정 (2018)" : "US courts exempted CLOs (2018)",
    eu: (ko) => ko ? "5% 보유 의무 (EU Securitisation Reg)" : "5% retention required (EU Securitisation Reg)",
  },
  {
    feature: (ko) => ko ? "레버리지드 론 기반" : "Underlying Loans",
    us: (ko) => ko ? "미국 BSL (레버리지드 론) 위주" : "Primarily US broadly syndicated loans",
    eu: (ko) => ko ? "유럽 레버리지드 론 (엄격한 코버넌트)" : "European leveraged loans (tighter covenants)",
  },
  {
    feature: (ko) => ko ? "AAA 스프레드 (2024)" : "AAA Spread (2024)",
    us: (ko) => ko ? "SOFR + 125–135bp" : "SOFR + 125–135bp",
    eu: (ko) => ko ? "EURIBOR + 140–155bp" : "EURIBOR + 140–155bp",
  },
  {
    feature: (ko) => ko ? "재투자기간" : "Reinvestment Period",
    us: (ko) => ko ? "통상 4–5년" : "Typically 4–5 years",
    eu: (ko) => ko ? "통상 3–4년" : "Typically 3–4 years",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQ_KO: { q: string; a: string }[] = [
  {
    q: "CLO가 레버리지드 론 시장의 '산소'라고 불리는 이유는 무엇인가요?",
    a: "2024년 기준 미국 레버리지드 론 시장($1.4조+)의 약 65%를 CLO가 보유하고 있습니다. CLO가 없다면 이 수요의 대부분이 사라지게 되고, 레버리지드 론 스프레드는 즉각 100–200bp 이상 폭등할 것입니다. LBO, M&A, 리파이낸싱에 사용되는 레버리지드 론의 원활한 공급이 사실상 불가능해집니다. 이것이 CLO를 레버리지드 론 시장의 '산소'라고 부르는 이유입니다. LevFin 챕터에서 배운 것처럼, Cov-Lite TLB 시장이 발전할 수 있었던 것도 CLO의 안정적인 수요가 있었기 때문입니다.",
  },
  {
    q: "CLO의 OC 테스트(Over-Collateralization Test)란 무엇인가요?",
    a: "OC 테스트는 CLO 포트폴리오의 담보 가치가 채권 잔액 대비 충분한지를 확인하는 안전장치입니다. 예를 들어 AAA OC 테스트가 120%라면, 포트폴리오 가치가 AAA 채권 잔액의 120% 이상이어야 합니다. 대출 디폴트·등급 하락으로 포트폴리오 가치가 하락해 OC 테스트를 통과하지 못하면, 하위 트랑쉐(BB, 에쿼티)로의 현금흐름이 차단되고 선순위 채권 원금 상환에 사용됩니다. 이 메커니즘이 2008년 금융위기 때도 AAA CLO 투자자 손실을 최소화한 핵심 장치였습니다.",
  },
  {
    q: "CLO 에쿼티 투자자가 목표 IRR 15–20%를 달성하는 원리는 무엇인가요?",
    a: "CLO 에쿼티의 수익 원리는 레버리지 차익거래(Regulatory Arbitrage)에 있습니다. CLO는 SOFR+250bp 정도의 레버리지드 론(BB/B 대출)을 매입해 SOFR+130bp의 AAA 채권으로 자금을 조달합니다. 이 스프레드 차이(약 120bp+)에 레버리지(에쿼티 6% → 94% 부채)를 얹으면, 에쿼티 투자자는 약 15–20% IRR을 얻을 수 있습니다. 물론 디폴트 증가나 OC 테스트 위반 시 에쿼티는 가장 먼저 타격을 받습니다. 높은 수익의 이면에 가장 큰 하방 위험이 있습니다.",
  },
  {
    q: "2024년 CLO 발행 $185B가 신기록인 이유는 무엇인가요?",
    a: "2024년 CLO 붐의 배경에는 세 가지 요인이 있습니다. 첫째, 고금리 환경: SOFR 5%+ 기준금리 하에서 CLO의 플로팅레이트 구조가 투자자에게 매력적인 절대 수익률을 제공했습니다. AAA CLO는 SOFR+130bp로 총 6.3%+를 제공했습니다. 둘째, M&A 재개: 2023년 하반기부터 M&A·LBO 딜이 재개되면서 레버리지드 론 수요가 증가했고, 이를 CLO가 흡수했습니다. 셋째, 리파이낸싱: 2020–21년 저금리 시절 발행된 CLO들이 만기 도래·재조정을 진행하면서 리파이낸스 물량이 대거 추가됐습니다.",
  },
  {
    q: "CLO와 2008년 금융위기의 주범인 CDO는 어떻게 다른가요?",
    a: "표면적으로 CLO와 CDO는 비슷해 보이지만 근본적으로 다릅니다. CDO는 서브프라임 모기지 MBS를 담보로 했고, 이 기초자산의 가치가 동시에 붕괴됐습니다(상관관계 1에 수렴). CLO는 100–200개 기업의 레버리지드 론을 담보로 합니다 — 개별 기업의 디폴트 상관관계가 훨씬 낮고, 플로팅레이트라 금리 상승에 따른 자산 가치 하락이 없습니다. 실제로 2008–09년 금융위기 당시 CLO AAA 트랑쉐는 원금 손실이 거의 없었습니다. CDO·CDO-squared에서 발생한 손실 구조와 근본적으로 다릅니다. Ch.5 CDO·위기에서 더 자세히 다룹니다.",
  },
];

const FAQ_EN: { q: string; a: string }[] = [
  {
    q: "Why is the CLO described as the 'oxygen' of the leveraged loan market?",
    a: "As of 2024, CLOs hold approximately 65% of the US leveraged loan market ($1.4tn+). Without CLOs, the majority of this demand would evaporate, and leveraged loan spreads would blow out by 100–200bp or more immediately. The smooth supply of leveraged loans used for LBOs, M&As, and refinancings would become practically impossible. This is why CLOs are called the 'oxygen' of the leveraged loan market. As you learned in the LevFin chapter, the development of the Cov-Lite TLB market was itself enabled by the stable demand from CLOs.",
  },
  {
    q: "What is the CLO OC (Over-Collateralization) Test?",
    a: "The OC test is a safety mechanism that verifies whether the collateral value of the CLO portfolio is sufficient relative to outstanding note balances. For example, if the AAA OC test is set at 120%, the portfolio value must be at least 120% of AAA note balances. If defaults and downgrades erode portfolio value such that the OC test fails, cash flows to junior tranches (BB, equity) are blocked and redirected toward senior note principal repayment. This mechanism was the key reason AAA CLO investors suffered minimal losses even during the 2008 financial crisis.",
  },
  {
    q: "How do CLO equity investors target a 15–20% IRR?",
    a: "CLO equity returns are driven by regulatory/rating arbitrage via leverage. A CLO buys leveraged loans (BB/B credits) yielding approximately SOFR+250bp, and funds itself by issuing AAA notes at SOFR+130bp. This spread differential (~120bp+), amplified by leverage (equity is only ~6% of the capital structure, with ~94% debt), produces equity IRRs of approximately 15–20%. Of course, equity is the first tranche hit by rising defaults or OC test breaches. The highest return comes with the greatest downside risk.",
  },
  {
    q: "Why is 2024's $185bn CLO issuance a record, and what drove it?",
    a: "Three factors drove the 2024 CLO boom. First, the high-rate environment: with SOFR at 5%+, the floating-rate structure of CLOs offered attractive absolute yields — AAA CLOs provided SOFR+130bp, totaling 6.3%+. Second, M&A revival: as M&A and LBO deal activity resumed from late 2023, leveraged loan supply increased and CLOs absorbed it. Third, refinancing wave: CLOs issued in the low-rate environment of 2020–21 reached reset and refinance windows, adding substantial additional volume to gross issuance figures.",
  },
  {
    q: "How are CLOs different from CDOs, the instrument blamed for the 2008 financial crisis?",
    a: "CLOs and CDOs look similar on the surface but are fundamentally different. CDOs held subprime mortgage MBS as collateral — and those underlying assets collapsed simultaneously (correlation approaching 1). CLOs hold 100–200 individual corporate leveraged loans as collateral — individual corporate default correlations are much lower, and the floating-rate structure means rising rates do not directly impair asset values. During the 2008–09 crisis, CLO AAA tranches experienced virtually no principal losses. This is structurally different from the loss dynamics that destroyed CDO and CDO-squared investors. We cover this in detail in Ch.5 CDO·Crisis.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "S&P Global / LCD", title: "Global Leveraged Lending Review Q4 2024", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P Global LCD, 2024" },
  { id: 2, author: "J.P. Morgan", title: "CLO Market Overview & Outlook 2024", url: "https://www.jpmorgan.com/insights/research/structured-finance", source: "J.P. Morgan, 2024" },
  { id: 3, author: "SIFMA", title: "US CLO Market Statistics — Issuance & Outstanding", url: "https://www.sifma.org/resources/research/us-bond-market-statistics/", source: "SIFMA, 2024" },
  { id: 4, author: "Moody's Investors Service", title: "CLO Default Studies — Historical Loss Analysis", url: "https://www.moodys.com/researchandratings/market-segment/structured-finance/-/003006/", source: "Moody's, 2024" },
  { id: 5, author: "Bank of America Securities", title: "CLO Primer: Structure, Mechanics, and 2024 Market Update", url: "https://www.bofasecurities.com/", source: "BofA Global Research, 2024" },
  { id: 6, author: "Citi Global Markets", title: "Structured Finance — CLO Market Update Q4 2024", url: "https://www.citigroup.com/global/markets", source: "Citi, 2024" },
  { id: 7, author: "LSTA", title: "CLO Market Data & Statistics 2024", url: "https://www.lsta.org/", source: "LSTA, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredCloClient({ concept, lang }: { concept: MarketConcept; lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const thisIdx = STRUCTURED_SERIES.findIndex((s) => s.slug === THIS_CH);
  const prev = STRUCTURED_SERIES[thisIdx - 1] ?? null;
  const next = STRUCTURED_SERIES[thisIdx + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.slug === THIS_CH
                  ? "text-white border-amber-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:text-amber-600"
              }`}
              style={s.slug === THIS_CH ? { background: ACCENT } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                Structured Finance · Ch.2
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
              </span>
            </div>
            <ShareButtons
              title={ko ? concept.title : (concept.titleEn ?? concept.title)}
              variant="top"
              lang={lang}
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "CLO 완전 해설 — 레버리지드 론이 AAA 채권이 되는 과정"
              : "CLO Deep Dive — How Leveraged Loans Become AAA Bonds"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "Blackstone·Apollo·Ares가 레버리지드 론 100–200개를 모아 8개 트랑쉐 채권으로 재탄생시키는 CLO. 2024년 글로벌 발행 $185B 신기록의 배경과 CLO 매니저·투자자·워터폴 구조를 완전 해부합니다. LevFin에서 배운 레버리지드 론이 여기서 어떻게 활용되는지 연결해서 이해하세요."
              : "Blackstone, Apollo, and Ares pool 100–200 leveraged loans to create 8-tranche CLO bonds. We break down the record-breaking $185bn 2024 global issuance, CLO manager economics, investor profiles, and the waterfall structure — directly connecting to the leveraged loans you learned in LevFin."}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(ko
              ? ["CLO", "레버리지드 론", "트랑쉐", "CLO 매니저", "AAA 채권", "SOFR", "워터폴", "에쿼티 트랑쉐", "재투자기간", "OC 테스트"]
              : ["CLO", "Leveraged Loan", "Tranche", "CLO Manager", "AAA Bond", "SOFR", "Waterfall", "Equity Tranche", "Reinvestment Period", "OC Test"]
            ).map((tag) => (
              <span key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── 30초 요약 ────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">⚡</span>
              <div>
                <p className="font-black text-base text-amber-800 dark:text-amber-300 mb-2">
                  {ko ? "30초 요약" : "30-Second Summary"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {ko
                    ? "CLO(Collateralized Loan Obligation)는 레버리지드 론 100–200개를 담보로 AAA부터 에쿼티까지 8개 트랑쉐를 발행하는 구조화 금융 상품입니다. CLO 매니저(Blackstone, Apollo, Ares, Carlyle 등)가 포트폴리오를 운용하며, 워터폴 구조로 상위 트랑쉐부터 이자와 원금을 분배합니다."
                    : "A CLO (Collateralized Loan Obligation) uses 100–200 leveraged loans as collateral to issue 8 tranches from AAA to equity. CLO managers (Blackstone, Apollo, Ares, Carlyle, etc.) manage the portfolio and distribute interest and principal from the top tranche down via the waterfall structure."}
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: ko ? "2024 글로벌 발행" : "2024 Global Issuance", value: "$185B", sub: ko ? "역대 최대" : "All-Time Record" },
                    { label: ko ? "레버리지드 론 시장 보유 비중" : "Loan Market Share Held by CLOs", value: "~65%", sub: ko ? "CLO = 론 시장 산소" : "CLOs = oxygen of loan mkt" },
                    { label: ko ? "에쿼티 목표 IRR" : "Equity Target IRR", value: "15–20%", sub: ko ? "레버리지 차익거래" : "Leverage arbitrage" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg bg-white/70 dark:bg-gray-900/40 px-3 py-3 text-center">
                      <p className="font-black text-xl text-gray-900 dark:text-gray-50">{item.value}</p>
                      <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 mt-0.5">{item.label}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── LevFin 연결 박스 ─────────────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">🔗</span>
              <div>
                <p className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-1.5">
                  {ko ? "LevFin과의 연결 — 레버리지드 론이 CLO로 가는 길" : "Connecting to LevFin — The Path from Leveraged Loans to CLOs"}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "LevFin 챕터에서 배운 레버리지드 론(TLB, Term Loan B)은 CLO의 원재료입니다. PE 스폰서가 LBO를 위해 TLB를 발행하면, 그 론의 65%를 CLO 매니저가 매입합니다. CLO 없이는 레버리지드 론 시장이 사실상 기능하지 못합니다. Cov-Lite, SOFR 전환, 101 Soft Call — LevFin에서 배운 모든 개념이 CLO 포트폴리오 관리에서 그대로 등장합니다. "
                    : "The leveraged loans (TLBs) you studied in LevFin are the raw material of CLOs. When a PE sponsor issues a TLB to fund an LBO, 65% of that loan is purchased by CLO managers. Without CLOs, the leveraged loan market would effectively stop functioning. Cov-Lite, the SOFR transition, 101 Soft Call — every concept from LevFin reappears in CLO portfolio management."}
                  <Link
                    href={`${base}/levfin-hy-vs-loans`}
                    className="ml-1 font-semibold underline decoration-dotted"
                    style={{ color: ACCENT }}
                  >
                    {ko ? "LevFin Ch.1 복습 →" : "Review LevFin Ch.1 →"}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 섹션 1: CLO 구조 ─────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. CLO 구조 — 레버리지드 론이 AAA 채권이 되는 과정" : "1. CLO Structure — How Leveraged Loans Become AAA Bonds"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO의 핵심은 BB/B 등급 기업 대출을 모아 신용 위험을 분산함으로써 AAA 채권을 만드는 '등급 차익거래'입니다."
              : "The core of a CLO is 'rating arbitrage' — pooling BB/B-rated corporate loans and diversifying credit risk to manufacture AAA-rated bonds."}
          </p>

          {/* 구조 흐름도 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-8">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5">
              {ko ? "CLO 구조 플로우" : "CLO Structure Flow"}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-between">
              {[
                {
                  icon: "🏭",
                  label: (ko: boolean) => ko ? "레버리지드 론 풀" : "Leveraged Loan Pool",
                  sub: (ko: boolean) => ko ? "100–200개 기업 대출\nBB/B 등급\nSOFR + 250–500bp" : "100–200 corporate loans\nBB/B rated\nSOFR + 250–500bp",
                  color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                },
                {
                  icon: "🏗️",
                  label: (ko: boolean) => ko ? "CLO 어레인저" : "CLO Arranger",
                  sub: (ko: boolean) => ko ? "Citi, BofA\nJPMorgan\n구조 설계·마케팅" : "Citi, BofA\nJPMorgan\nStructure design & mkting",
                  color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
                },
                {
                  icon: "⚙️",
                  label: (ko: boolean) => ko ? "CLO 매니저" : "CLO Manager",
                  sub: (ko: boolean) => ko ? "Blackstone, Apollo\nAres, Carlyle\n포트폴리오 운용" : "Blackstone, Apollo\nAres, Carlyle\nPortfolio management",
                  color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
                },
                {
                  icon: "📊",
                  label: (ko: boolean) => ko ? "8개 트랑쉐" : "8 Tranches",
                  sub: (ko: boolean) => ko ? "AAA~에쿼티\n등급별 투자자\n워터폴 분배" : "AAA to Equity\nRating-matched investors\nWaterfall distribution",
                  color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 w-full sm:w-auto">
                  <div className={`flex-1 sm:flex-none rounded-xl border p-3 text-center min-w-[110px] ${item.color}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <p className="font-bold text-xs text-gray-900 dark:text-gray-50 mt-1">{item.label(ko)}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 whitespace-pre-line leading-snug">{item.sub(ko)}</p>
                  </div>
                  {i < 3 && (
                    <span className="text-gray-400 font-bold text-lg hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 트랑쉐 스택 */}
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
            {ko ? "CLO 8개 트랑쉐 구조" : "CLO 8-Tranche Structure"}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "트랑쉐" : "Tranche"}</th>
                    <th className="text-left px-4 py-3">{ko ? "비중" : "Size %"}</th>
                    <th className="text-left px-4 py-3">{ko ? "스프레드" : "Spread"}</th>
                    <th className="text-left px-4 py-3">{ko ? "주요 투자자" : "Primary Investors"}</th>
                  </tr>
                </thead>
                <tbody>
                  {TRANCHES.map((t, i) => (
                    <motion.tr key={i}
                      initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.05)}
                      className={`border-t border-gray-100 dark:border-gray-800 ${t.color}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${t.dotColor}`} />
                          <span className={`font-black text-sm ${t.textColor}`}>{t.rating}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.pct}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-mono text-gray-700 dark:text-gray-300">{t.spread(ko)}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-gray-600 dark:text-gray-400">{t.investors(ko)}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            {ko ? "* 2024년 미국 시장 기준. 스프레드는 시장 상황에 따라 변동." : "* Based on 2024 US market. Spreads fluctuate with market conditions."}
          </p>
        </motion.section>

        {/* ── 섹션 2: CLO 매니저의 역할 ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. CLO 매니저의 역할 — Blackstone·Apollo·Ares·Carlyle" : "2. CLO Manager's Role — Blackstone, Apollo, Ares, Carlyle"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO 매니저는 CLO의 핵심 주체입니다. 레버리지드 론을 선정·매입·관리하며, 수수료 수익과 에쿼티 수익을 얻습니다."
              : "The CLO manager is the central actor in a CLO. They select, purchase, and manage leveraged loans, earning management fees and equity returns."}
          </p>

          {/* Manager Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {CLO_MANAGERS.map((mgr, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{mgr.icon}</span>
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{mgr.name}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{mgr.aum(ko)}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                    {mgr.deals2024}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{mgr.note(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Fee Structure */}
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
            {ko ? "CLO 매니저 수수료 구조" : "CLO Manager Fee Structure"}
          </p>
          <div className="space-y-3 mb-6">
            {FEE_COMPONENTS.map((fee, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${fee.color}`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{fee.name(ko)}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{fee.basis(ko)}</p>
                  </div>
                  <span className="font-black text-lg font-mono" style={{ color: ACCENT }}>{fee.rate}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2">{fee.note(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Equity Arbitrage Explanation */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-2">
              💡 {ko ? "에쿼티 IRR 원리 — 레버리지 차익거래" : "Equity IRR Mechanics — Leverage Arbitrage"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-center">
              {[
                { label: ko ? "포트폴리오 수익률" : "Portfolio Yield", value: "SOFR + 250bp", sub: ko ? "레버리지드 론 평균" : "Avg leveraged loan yield" },
                { label: ko ? "AAA 조달 비용" : "AAA Funding Cost", value: "SOFR + 130bp", sub: ko ? "선순위 채권 이자" : "Senior note coupon" },
                { label: ko ? "스프레드 차익 (×레버리지)" : "Spread Arb (×Leverage)", value: "~120bp × ~16×", sub: ko ? "에쿼티 6% → IRR 15-20%" : "6% equity → 15–20% IRR" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-white/60 dark:bg-gray-900/30 p-3">
                  <p className="font-black text-base font-mono text-gray-900 dark:text-gray-50">{item.value}</p>
                  <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 mt-1">{item.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: 3단계 라이프사이클 ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. CLO 3단계 라이프사이클" : "3. CLO Three-Phase Lifecycle"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO는 발행부터 만기까지 3단계를 거칩니다. 각 단계에서 매니저의 역할과 투자자에 대한 현금흐름 방식이 다릅니다."
              : "A CLO goes through three distinct phases from issuance to maturity. The manager's role and cash flow distribution differ in each phase."}
          </p>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-5">
              {LIFECYCLE.map((phase, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-5 z-10 ${phase.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-5 ${phase.color}`}>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="text-xl">{phase.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-sm" style={{ color: ACCENT }}>Phase {phase.phase}</span>
                            <span className="font-black text-sm text-gray-900 dark:text-gray-50">{phase.label(ko)}</span>
                          </div>
                          <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{phase.duration(ko)}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{phase.desc(ko)}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{phase.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 4: 트랑쉐별 투자자 프로파일 ──────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 트랑쉐별 투자자 프로파일" : "4. Investor Profiles by Tranche"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO의 각 트랑쉐는 서로 다른 위험 선호도와 투자 규정을 가진 투자자를 유치합니다. 이것이 CLO가 다양한 자본을 끌어모을 수 있는 핵심 이유입니다."
              : "Each CLO tranche attracts investors with different risk appetites and investment mandates. This is the core reason CLOs can aggregate diverse pools of capital."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                tranche: "AAA / AA",
                icon: "🏦",
                investors: (ko: boolean) => ko ? "MMF·은행·보험사" : "Money Market Funds, Banks, Insurers",
                why: (ko: boolean) => ko
                  ? "규제 자본 요구 낮음. 최상위 신용등급. SOFR+ 플로팅레이트로 금리 상승기에 유리. 보험사·은행은 자기자본비율 규제상 AAA 보유 시 최소 위험가중치 적용."
                  : "Low regulatory capital requirements. Highest credit quality. SOFR+ floating-rate attractive in rising rate environments. Insurers and banks receive minimum risk weights for AAA holdings under capital adequacy rules.",
                color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
              },
              {
                tranche: "A / BBB",
                icon: "🏛️",
                investors: (ko: boolean) => ko ? "생명보험·크레딧펀드·연기금" : "Life Insurers, Credit Funds, Pensions",
                why: (ko: boolean) => ko
                  ? "IG(투자등급) 유지로 자본 규제 충족 + AAA 대비 추가 스프레드. 생보는 장기 부채 듀레이션 매칭 목적. BBB 트랑쉐는 IG 마지노선으로 수요 집중."
                  : "Maintain IG status to satisfy capital requirements while capturing spread pick-up over AAA. Life insurers use for duration matching. BBB is the IG floor with concentrated demand from IG-mandated investors.",
                color: "border-sky-300 bg-sky-50 dark:border-sky-700 dark:bg-sky-900/20",
              },
              {
                tranche: "BB / B",
                icon: "⚡",
                investors: (ko: boolean) => ko ? "헤지펀드·크레딧헤지펀드" : "Hedge Funds, Credit Hedge Funds",
                why: (ko: boolean) => ko
                  ? "고위험·고수익 전략. CLO BB는 같은 등급 HY 채권 대비 스프레드 프리미엄(50–100bp) 추가 제공. 유동성이 낮아 리스크 프리미엄 확보. CLO 트랙레코드 분석 역량 있는 전문 투자자 위주."
                  : "High risk/return strategy. CLO BB tranches offer 50–100bp spread premium over similarly rated HY bonds due to lower liquidity and complexity. Attracts sophisticated investors with CLO track record analysis capabilities.",
                color: "border-violet-300 bg-violet-50 dark:border-violet-700 dark:bg-violet-900/20",
              },
              {
                tranche: "Equity",
                icon: "🎯",
                investors: (ko: boolean) => ko ? "CLO 매니저·PE펀드·전문 에쿼티 펀드" : "CLO Managers, PE Funds, CLO Equity Specialists",
                why: (ko: boolean) => ko
                  ? "목표 IRR 15–20%. 레버리지 차익거래의 전부를 수취하는 잔여 청구권. CLO 매니저는 통상 에쿼티의 5–10%를 보유해 이해관계 일치(Skin in the game). OC 테스트 위반 시 현금흐름 차단 → 가장 큰 하방 위험."
                  : "Target IRR 15–20%. Residual claim capturing the full benefit of leverage arbitrage. CLO managers typically retain 5–10% of equity for skin in the game. First tranche cut off when OC tests fail → highest downside risk.",
                color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{item.tranche}</p>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{item.investors(ko)}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{item.why(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 5: 발행량 차트 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 2024년 CLO 붐 — 배경과 데이터" : "5. The 2024 CLO Boom — Background and Data"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2024년 글로벌 CLO 발행은 $185B로 2021년의 $187B에 육박하는 역대급 기록입니다. 세 가지 구조적 요인이 이를 만들었습니다."
              : "2024 global CLO issuance reached $185bn, approaching the 2021 record of $187bn. Three structural factors drove this historic level."}
          </p>

          {/* 발행량 BarChart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-8">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "글로벌 CLO 신규 발행량 (단위: $B)" : "Global CLO New Issuance ($B)"}
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ISSUANCE_DATA} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}B`} />
                  <Tooltip
                    formatter={(value: number) => [`$${value}B`, ko ? "발행량" : "Issuance"]}
                    labelStyle={{ fontSize: 11, fontWeight: 700 }}
                    contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  />
                  <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                    {ISSUANCE_DATA.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
              {ko ? "* S&P Global LCD, SIFMA 데이터 기반. 2021: 사상 최대 $187B. 2024: $185B 신기록." : "* Based on S&P Global LCD, SIFMA data. 2021: previous record $187B. 2024: near-record $185B."}
            </p>
          </div>

          {/* 3 Drivers */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: "📈",
                title: (ko: boolean) => ko ? "고금리 = 플로팅레이트 매력" : "High Rates = Floating-Rate Appeal",
                body: (ko: boolean) => ko
                  ? "SOFR 5%+ 환경에서 CLO AAA는 총 6.3%+를 제공. 고정금리 채권 대비 압도적 상대 가치. 보험사·은행의 CLO 수요 급증."
                  : "With SOFR at 5%+, CLO AAA offered 6.3%+ total yield. Overwhelming relative value vs fixed-rate bonds. Surge in insurer and bank CLO demand.",
                color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
              },
              {
                icon: "🤝",
                title: (ko: boolean) => ko ? "M&A·LBO 재개" : "M&A / LBO Revival",
                body: (ko: boolean) => ko
                  ? "2023H2 이후 M&A·LBO 딜 재개 → 레버리지드 론 공급 증가 → CLO 원재료 확보 수월. 론 스프레드 타이트로 CLO 에쿼티 IRR 확보 용이."
                  : "M&A and LBO deal flow resumed from late 2023, increasing leveraged loan supply. Tighter spreads made CLO equity return targets more achievable.",
                color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
              },
              {
                icon: "🔄",
                title: (ko: boolean) => ko ? "리파이낸싱 웨이브" : "Refinancing Wave",
                body: (ko: boolean) => ko
                  ? "2020–21년 저금리 CLO들이 리파이낸스·리셋 도래. 신규 발행 외 리파이낸스 물량만 $80B+ 추가. 총 거래 규모는 $265B+."
                  : "2020–21 vintage CLOs reached refinance/reset windows. Refi volume alone added $80B+ beyond new issue. Total deal activity exceeded $265B.",
                color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${item.color}`}>
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="font-black text-sm text-gray-900 dark:text-gray-50 mb-2">{item.title(ko)}</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{item.body(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* 스프레드 BarChart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-8">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "CLO 트랑쉐별 스프레드 (bp, 2024년 기준)" : "CLO Tranche Spreads (bp, 2024)"}
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SPREAD_DATA} margin={{ top: 5, right: 5, left: -5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="tranche" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}bp`} />
                  <Tooltip
                    formatter={(value: number, name, props) => {
                      const entry = props.payload;
                      if (entry?.tranche === "Eq") return [ko ? "IRR 15–20%" : "IRR 15–20%", ko ? "스프레드 / IRR" : "Spread / IRR"];
                      return [`${value}bp`, ko ? "스프레드" : "Spread (bp)"];
                    }}
                    labelStyle={{ fontSize: 11, fontWeight: 700 }}
                    contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  />
                  <Bar dataKey="bp" radius={[4, 4, 0, 0]}>
                    {SPREAD_DATA.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
              {ko
                ? "* 에쿼티(Eq) 막대는 표시 목적으로 1,500bp 환산. 실제는 15–20% IRR 목표. 2024년 평균 기준."
                : "* Equity (Eq) bar shown as 1,500bp for display purposes. Actual target is 15–20% IRR. Based on 2024 averages."}
            </p>
          </div>

          {/* SOFR Transition Note */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4 mb-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              📌 {ko ? "SOFR 전환 이후 CLO 구조 변화" : "CLO Structural Changes Post-SOFR"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "2023년 6월 USD LIBOR 공식 폐지 이후 CLO는 Term SOFR으로 전환됐습니다. LevFin에서 배운 것처럼 LIBOR → SOFR 전환 시 CSA(Credit Spread Adjustment) +26bp가 적용됩니다. CLO 관점에서는 ① 기존 CLO의 기준금리 교체(Floor 재조정 포함), ② 새 CLO는 처음부터 Term SOFR 기반으로 발행. 플로팅레이트 특성은 동일하지만 CLO 폐쇄형 구조에서의 문서 수정이 복잡했습니다. 현재는 완전히 SOFR 시장으로 안착했습니다."
                : "After official USD LIBOR cessation in June 2023, CLOs transitioned to Term SOFR. As you learned in LevFin, LIBOR-to-SOFR transitions applied a Credit Spread Adjustment (CSA) of +26bp. For CLOs: ① existing CLOs required base rate amendments (including floor recalibration), ② new CLOs issued on Term SOFR from day one. The floating-rate nature is unchanged, but amending closed-end CLO structures was complex. The market is now fully settled on SOFR."}
            </p>
          </div>

          {/* US vs EU Comparison */}
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
            {ko ? "미국 vs 유럽 CLO 주요 차이" : "US vs European CLO Key Differences"}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3 min-w-[140px]">{ko ? "항목" : "Feature"}</th>
                    <th className="text-left px-4 py-3 text-amber-600 dark:text-amber-400 min-w-[170px]">
                      {ko ? "미국 CLO" : "US CLO"}
                    </th>
                    <th className="text-left px-4 py-3 text-blue-600 dark:text-blue-400 min-w-[170px]">
                      {ko ? "유럽 CLO" : "EU CLO"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {US_EU_DIFF.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-xs text-gray-700 dark:text-gray-300">{row.feature(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{row.us(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{row.eu(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 6: CLO vs CDO 비교 + 위기 연결 ───────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. CLO는 왜 2008년에 무너지지 않았나 — CDO와의 차이" : "6. Why CLOs Survived 2008 — The CLO vs CDO Difference"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO와 CDO는 '자산을 담보로 트랑쉐를 발행한다'는 점에서 유사해 보이지만, 위기 대응 결과는 완전히 달랐습니다."
              : "CLOs and CDOs look similar on the surface — both use collateral to issue tranches — but their crisis performance was polar opposites."}
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {[
              {
                title: "CLO",
                subtitle: (ko: boolean) => ko ? "2008년 AAA 손실 거의 없음" : "Near-zero AAA losses in 2008",
                icon: "✅",
                items: (ko: boolean) => ko ? [
                  "기초자산: 100–200개 기업 레버리지드 론",
                  "상관관계: 기업별 디폴트 독립적 (낮은 상관관계)",
                  "자산 가치: 플로팅레이트 → 금리 상승에 자산가치 안정",
                  "투명성: 매월 론 목록 공시 (OC/IC 테스트 공개)",
                  "AAA 손실률: 2008–09년 0%에 근접 (Moody's 연구)",
                ] : [
                  "Collateral: 100–200 individual corporate leveraged loans",
                  "Correlation: corporate defaults largely independent (low correlation)",
                  "Asset value: floating-rate → stable asset value as rates rise",
                  "Transparency: monthly loan-level disclosure (OC/IC tests public)",
                  "AAA loss rate: near 0% in 2008–09 (Moody's research)",
                ],
                color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
                textColor: "text-emerald-800 dark:text-emerald-300",
              },
              {
                title: "CDO (2008)",
                subtitle: (ko: boolean) => ko ? "AAA 포함 전 트랑쉐 붕괴" : "All tranches including AAA collapsed",
                icon: "❌",
                items: (ko: boolean) => ko ? [
                  "기초자산: 서브프라임 MBS (주택담보대출 묶음)",
                  "상관관계: 모든 MBS가 부동산 시장과 동시 하락 (상관관계 →1)",
                  "자산 가치: 금리 상승 + 주택 가격 하락 → 자산 동시 폭락",
                  "투명성: MBS 내 대출 실제 품질 불명확 (정보 비대칭 극심)",
                  "AAA 손실률: 40–80%에 이르는 CDO-squared",
                ] : [
                  "Collateral: subprime mortgage MBS (pools of home loans)",
                  "Correlation: all MBS fell simultaneously with housing (correlation →1)",
                  "Asset value: rate rise + home price collapse → simultaneous implosion",
                  "Transparency: actual loan quality within MBS opaque (extreme info asymmetry)",
                  "AAA loss rate: 40–80% on CDO-squared structures",
                ],
                color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
                textColor: "text-rose-800 dark:text-rose-300",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className={`font-black text-base ${item.textColor}`}>{item.title}</p>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{item.subtitle(ko)}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {item.items(ko).map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-gray-400 shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
              🔗 {ko ? "다음 챕터 예고" : "Coming Up Next"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "CDO·CDO-squared·합성 CDO가 어떻게 2008년 위기를 만들었는지는 Ch.5 CDO·위기에서 심층 분석합니다. 워터폴 구조(OC 테스트, IC 테스트, 현금흐름 분배 우선순위)는 Ch.4 워터폴에서 다룹니다."
                : "How CDOs, CDO-squareds, and synthetic CDOs created the 2008 crisis is covered in depth in Ch.5 CDO·Crisis. The waterfall structure (OC tests, IC tests, cash flow priority) is covered in Ch.4 Waterfall."}
              {" "}
              <Link href={`${base}/structured-cdo`}
                className="font-semibold underline decoration-dotted" style={{ color: ACCENT }}>
                {ko ? "Ch.5 CDO·위기 →" : "Ch.5 CDO·Crisis →"}
              </Link>
            </p>
          </div>
        </motion.section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
        </motion.section>

        {/* ── References ───────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <ShareButtons
          title={ko ? concept.title : (concept.titleEn ?? concept.title)}
          variant="top"
          lang={lang}
        />

        {/* ── Prev / Next ───────────────────────────────────────────────────── */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
