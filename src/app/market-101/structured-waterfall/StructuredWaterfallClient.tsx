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
const accent = "#3b82f6"; // blue-500

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
const thisCh = 4;

// ── Waterfall Payment Steps ───────────────────────────────────────────────────
const WATERFALL_STEPS = [
  { step: 1, label: (ko: boolean) => ko ? "관리 수수료 & 비용" : "Management Fees & Expenses",    pct: 0.5,  color: "bg-gray-400",    badge: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",   note: (ko: boolean) => ko ? "CLO 매니저 수수료, 수탁사 수수료, 법률비용 등 운영비용 최우선 지급" : "CLO manager fees, trustee fees, legal costs paid first before any investor" },
  { step: 2, label: (ko: boolean) => ko ? "선순위 (AAA) 이자" : "Senior (AAA) Interest",          pct: 4.0,  color: "bg-blue-600",    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",   note: (ko: boolean) => ko ? "AAA 트랑쉐 쿠폰. 가장 먼저 받고 가장 나중에 손실 흡수. 은행·보험사 보유." : "AAA tranche coupon. Paid first. Last to absorb losses. Held by banks and insurers." },
  { step: 3, label: (ko: boolean) => ko ? "OC/IC 테스트 통과 확인" : "OC / IC Test Check",         pct: 0,    color: "bg-amber-400",   badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", note: (ko: boolean) => ko ? "OC·IC 테스트 실패 시 → 이 이후 흐름을 차단하고 AAA 원금 상환으로 전환" : "If OC or IC test fails → cash flow below this point is diverted to repay AAA principal" },
  { step: 4, label: (ko: boolean) => ko ? "선순위 (AAA) 원금" : "Senior (AAA) Principal",         pct: 0,    color: "bg-blue-500",    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",   note: (ko: boolean) => ko ? "정상 시에는 만기 시 일시 상환(불릿). OC 트리거 발동 시 조기 상환." : "Normally bullet at maturity. Accelerated if OC trigger is breached." },
  { step: 5, label: (ko: boolean) => ko ? "메자닌 (AA→BBB) 이자" : "Mezzanine (AA–BBB) Interest",  pct: 5.5,  color: "bg-violet-500",  badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", note: (ko: boolean) => ko ? "OC·IC 테스트 통과 후에만 지급. 여러 메자닌 트랑쉐가 순서대로 지급받음." : "Paid only after OC/IC tests pass. Multiple mezzanine tranches paid in order." },
  { step: 6, label: (ko: boolean) => ko ? "메자닌 원금" : "Mezzanine Principal",                   pct: 0,    color: "bg-violet-400",  badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", note: (ko: boolean) => ko ? "선순위 원금 상환 후. OC·IC 정상 상태 요건." : "After senior principal repayment. Requires OC/IC in compliance." },
  { step: 7, label: (ko: boolean) => ko ? "에쿼티 (초과 스프레드 배분)" : "Equity (Excess Spread Distribution)", pct: 15, color: "bg-purple-500", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300", note: (ko: boolean) => ko ? "모든 선순위·메자닌 지급 후 잔여 현금 전부. 에쿼티 투자자의 레버리지드 수익 원천." : "All residual cash after every senior and mezzanine payment. The leveraged return source for equity investors." },
];

// ── OC Trigger Table ──────────────────────────────────────────────────────────
const OC_TABLE = [
  { oc: ">= 127.5%", status: (ko: boolean) => ko ? "정상" : "Normal",                 action: (ko: boolean) => ko ? "정상 배분 — 에쿼티 포함 모든 트랑쉐 지급" : "Normal distribution — all tranches including equity paid",                       color: "text-emerald-700 dark:text-emerald-400", dot: "bg-emerald-500" },
  { oc: "120–127.5%", status: (ko: boolean) => ko ? "경보 구간" : "Warning Zone",      action: (ko: boolean) => ko ? "모니터링 강화. CLO 매니저 포트폴리오 개선 착수." : "Enhanced monitoring. CLO manager begins portfolio improvement.",                   color: "text-amber-700 dark:text-amber-400", dot: "bg-amber-500" },
  { oc: "< 120%",   status: (ko: boolean) => ko ? "OC 트리거 발동" : "OC Trigger Breach", action: (ko: boolean) => ko ? "에쿼티·메자닌 현금흐름 차단 → AAA/AA 조기 원금 상환(디버팅)" : "Equity/mezz cash diverted → AAA/AA principal accelerated (diverting)",          color: "text-rose-700 dark:text-rose-400", dot: "bg-rose-500" },
  { oc: "< 110%",   status: (ko: boolean) => ko ? "심각 — EoD 검토" : "Severe — EoD Review", action: (ko: boolean) => ko ? "Event of Default(디폴트 이벤트) 여부 검토. 모든 배분 중단 가능." : "Event of Default review. All distributions may be suspended.",                  color: "text-red-700 dark:text-red-400", dot: "bg-red-600" },
];

// ── Equity Leverage Example ───────────────────────────────────────────────────
const EQUITY_LEVERAGE = [
  { item: (ko: boolean) => ko ? "자산 풀 규모" : "Asset Pool Size",                       value: "$500M",        note: (ko: boolean) => ko ? "레버리지드론 150개 분산 포트폴리오" : "150 diversified leveraged loans" },
  { item: (ko: boolean) => ko ? "에쿼티 트랑쉐 규모 (10%)" : "Equity Tranche Size (10%)", value: "$50M",         note: (ko: boolean) => ko ? "CLO 매니저 + 에쿼티 투자자" : "CLO manager + equity investors" },
  { item: (ko: boolean) => ko ? "자산 풀 평균 수익률" : "Asset Pool Average Yield",       value: "6.5%",         note: (ko: boolean) => ko ? "$500M × 6.5% = $32.5M/년" : "$500M × 6.5% = $32.5M/year" },
  { item: (ko: boolean) => ko ? "선순위·메자닌 이자 지급" : "Senior / Mezz Interest Paid", value: "$22M",         note: (ko: boolean) => ko ? "AAA~BB 모든 트랑쉐 쿠폰 합산" : "All AAA–BB tranche coupons combined" },
  { item: (ko: boolean) => ko ? "초과 스프레드 (XS)" : "Excess Spread (XS)",              value: "$10.5M",       note: (ko: boolean) => ko ? "$32.5M - $22M = 에쿼티로 배분" : "$32.5M - $22M = distributed to equity" },
  { item: (ko: boolean) => ko ? "에쿼티 IRR (손실 없는 경우)" : "Equity IRR (no losses)", value: "~21%",         note: (ko: boolean) => ko ? "$10.5M ÷ $50M = 21% 레버리지드 수익" : "$10.5M ÷ $50M = 21% leveraged return" },
];

// ── Stress Scenarios ──────────────────────────────────────────────────────────
const STRESS_SCENARIOS = [
  {
    scenario: (ko: boolean) => ko ? "기본 시나리오 (Base)" : "Base Case",
    defaultRate: "2%",
    poolLoss: "$10M",
    icon: "✅",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    outcomes: [
      (ko: boolean) => ko ? "에쿼티: 손실 없음. 초과 스프레드 전액 수취. IRR ~21%." : "Equity: no losses. Full excess spread. IRR ~21%.",
      (ko: boolean) => ko ? "메자닌: 전액 지급." : "Mezzanine: fully paid.",
      (ko: boolean) => ko ? "AAA: 전액 보호. OC 비율 상승." : "AAA: fully protected. OC ratio improves.",
    ],
  },
  {
    scenario: (ko: boolean) => ko ? "스트레스 시나리오 (Stress)" : "Stress Case",
    defaultRate: "7%",
    poolLoss: "$35M",
    icon: "⚠️",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
    outcomes: [
      (ko: boolean) => ko ? "에쿼티: 심각한 손실. IRR 0% 이하 가능. 배분 중단." : "Equity: severe losses. IRR may go negative. Distributions suspended.",
      (ko: boolean) => ko ? "메자닌 BB: 일부 손실. OC 트리거 발동." : "Mezzanine BB: partial losses. OC trigger breached.",
      (ko: boolean) => ko ? "메자닌 BBB-A: 원금 보호." : "Mezzanine BBB-A: principal protected.",
      (ko: boolean) => ko ? "AAA: 전액 보호." : "AAA: fully protected.",
    ],
  },
  {
    scenario: (ko: boolean) => ko ? "극단 시나리오 (Severe Stress)" : "Severe Stress",
    defaultRate: "15%",
    poolLoss: "$75M",
    icon: "🔴",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
    outcomes: [
      (ko: boolean) => ko ? "에쿼티: 전액 소멸 ($50M)." : "Equity: entirely wiped out ($50M).",
      (ko: boolean) => ko ? "메자닌 (BB+BBB+A = $75M): 대부분 손실." : "Mezzanine (BB+BBB+A = $75M): mostly lost.",
      (ko: boolean) => ko ? "메자닌 AA: 일부 손실 가능." : "Mezzanine AA: possible partial loss.",
      (ko: boolean) => ko ? "AAA: OC 버퍼 소진 후에야 손실. 현실적으로 극히 드문 시나리오." : "AAA: takes losses only after all buffers exhausted. Historically extremely rare.",
    ],
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "워터폴(Waterfall)이란 정확히 무엇이며 왜 이 이름인가요?"
      : "What exactly is a Waterfall and why is it called that?",
    a: (ko: boolean) => ko
      ? "워터폴은 구조화금융에서 자산 풀로부터 수취한 현금을 투자자들 사이에서 배분하는 순서 규칙입니다. 이름은 물이 높은 곳에서 낮은 곳으로 순서대로 흐르는 폭포처럼, 현금이 가장 높은 우선순위(관리 수수료)에서 가장 낮은 우선순위(에쿼티)로 흐르기 때문입니다. 핵심은 순서가 고정되어 있다는 것입니다 — 위 단계가 채워지기 전에는 아래 단계로 물이 흘러내려가지 않습니다. 이 순서가 각 트랑쉐 투자자가 받는 신용 보호의 강도를 결정합니다."
      : "A waterfall is the rule governing how cash collected from the asset pool is distributed among investors in structured finance. The name comes from how cash flows from the highest priority (management fees) down to the lowest (equity), just as water cascades from top to bottom. The critical point is that the order is fixed — lower tiers receive nothing until higher tiers are fully satisfied. This ordering determines the degree of credit protection each tranche investor receives.",
  },
  {
    q: (ko: boolean) => ko
      ? "OC 트리거와 IC 트리거가 동시에 발동되는 경우도 있나요? 차이는 무엇인가요?"
      : "Can OC and IC triggers both fire at the same time? What is the difference?",
    a: (ko: boolean) => ko
      ? "네, 동시에 발동될 수 있습니다. OC 트리거(과잉담보 트리거)는 자산 풀 가치 대비 채권 잔액의 비율이 임계치 아래로 떨어질 때 발동합니다 — 즉 풀에서 손실이 발생해 담보가 충분하지 않을 때입니다. IC 트리거(이자커버리지 트리거)는 자산 이자 수입이 채권 이자 지급액의 설정 배수를 하회할 때 발동합니다 — 즉 소득이 부채를 커버하지 못할 때입니다. 두 트리거 모두 발동되면 후순위 현금흐름이 이중으로 차단됩니다. 경기 침체기에는 기업 디폴트가 동시에 증가하면서 두 지표가 함께 악화되는 경향이 있어 동시 발동이 드물지 않습니다."
      : "Yes, they can fire simultaneously. The OC trigger (overcollateralization trigger) fires when the ratio of asset pool value to outstanding bond balance falls below a threshold — meaning pool losses have eroded collateral coverage. The IC trigger (interest coverage trigger) fires when asset interest income falls below a set multiple of bond interest payments — meaning income is insufficient to cover debt service. When both fire, junior cash flows are doubly blocked. During recessions, corporate defaults often rise simultaneously, eroding both metrics at once, so co-triggering is not uncommon.",
  },
  {
    q: (ko: boolean) => ko
      ? "에쿼티 트랑쉐가 21% IRR을 낼 수 있다면, 왜 모든 투자자가 에쿼티를 사지 않나요?"
      : "If the equity tranche can yield 21% IRR, why don't all investors just buy equity?",
    a: (ko: boolean) => ko
      ? "레버리지는 양방향입니다. 21% IRR은 자산 풀이 정상적으로 작동하는 기본 시나리오에서의 수익입니다. 실제로 손실이 10%를 초과하면 에쿼티는 전액 손실입니다 — IRR은 -100%가 됩니다. 더 나쁜 것은, 에쿼티 투자자는 손실을 먼저 흡수한 뒤에도 회수 기회가 없습니다. 반면 AAA 투자자는 4% SOFR+140bp를 받지만, 자산 풀이 수십 % 손실 나도 원금이 보호됩니다. 투자자 유형에 따라 허용 위험이 다릅니다 — 연기금·보험사는 규정상 에쿼티를 보유할 수 없거나 극히 제한됩니다. 에쿼티는 리스크를 감수하는 대가로 높은 수익을 추구하는 전문 투자자(헤지펀드, 구조화 크레딧 펀드)의 영역입니다."
      : "Leverage cuts both ways. The 21% IRR is the base-case return when the asset pool performs normally. If losses actually exceed 10%, equity is entirely wiped out — IRR becomes -100%. Even worse, equity investors have no recovery after absorbing losses first. AAA investors earn only SOFR+140bp, but their principal is protected even if the pool suffers multi-digit percentage losses. Different investor types have different permitted risk tolerances — pension funds and insurers are often prohibited by regulation from holding equity tranches. Equity belongs to specialist investors (hedge funds, structured credit funds) seeking high returns in exchange for bearing the highest risk.",
  },
  {
    q: (ko: boolean) => ko
      ? "과잉담보(OC)와 초과 스프레드(XS) 중 더 중요한 신용 보강 도구는 무엇인가요?"
      : "Between overcollateralization (OC) and excess spread (XS), which is the more important credit enhancement?",
    a: (ko: boolean) => ko
      ? "일반적으로 OC가 더 핵심적으로 평가됩니다. OC는 자산 풀 자체의 가치 버퍼로, 손실이 발생했을 때 직접적으로 채권자를 보호합니다. XS는 이자 수입의 초과분으로, 정기적인 소손실을 흡수하는 데 유용하지만 대규모 손실에는 역부족입니다. CLO에서 신용평가사가 가장 중요시하는 것은 OC 비율과 자산 분산도입니다. 다만 두 지표는 상호 보완적으로 작동합니다 — OC가 튼튼해도 XS가 마이너스면(이자 수입 부족) 문제가 됩니다. 실무적으로는 신용평가사가 OC, XS, 후순위화, 준비금 모두를 합산한 총 신용 보강 버퍼를 스트레스 손실과 비교해 등급을 결정합니다."
      : "Generally, OC is considered more fundamental. OC is the asset pool value buffer itself, directly protecting bondholders when losses occur. XS is the interest income excess, useful for absorbing recurring small losses but insufficient against large ones. In CLOs, what rating agencies scrutinize most carefully is the OC ratio and asset diversification. However, both metrics are complementary — even strong OC becomes problematic if XS turns negative (insufficient interest income). In practice, rating agencies compare total credit enhancement (OC+XS+subordination+reserve) against stress losses to assign ratings.",
  },
  {
    q: (ko: boolean) => ko
      ? "2020년 코로나 충격 때 CLO AAA 트랑쉐가 손실을 보지 않은 이유는 무엇인가요?"
      : "Why did CLO AAA tranches not suffer losses during the 2020 COVID shock?",
    a: (ko: boolean) => ko
      ? "세 가지 메커니즘이 작동했습니다. 첫째, OC/IC 트리거가 발동되면서 에쿼티·BB 트랑쉐로의 현금이 AAA 원금 상환으로 전환됐습니다 — 선순위를 빠르게 디레버리지했습니다. 둘째, CLO 자산인 레버리지드론은 기업 대출이므로 모기지(2008년)처럼 전국적으로 동시에 폭락하지 않았습니다 — 항공·호텔·리테일 일부가 타격을 받았지만 헬스케어·기술 섹터는 견조했습니다. 셋째, 연준의 신속한 정책 대응(CARES법, 회사채 매입 프로그램)이 기업 디폴트 급증을 막았습니다. 이 세 가지 덕분에 2020년 CLO AAA 디폴트 = 0, 2008년 CLO AAA 디폴트도 사실상 0이었습니다. 다만 에쿼티와 BB 트랑쉐는 수개월간 배분이 중단되었습니다."
      : "Three mechanisms worked in concert. First, OC/IC triggers fired, diverting equity and BB tranche cash to repay AAA principal — rapidly deleveraging the senior tranches. Second, CLO assets (leveraged loans) are corporate loans, not mortgages — they did not all collapse simultaneously like mortgages in 2008. Airlines, hotels, and retail were hit, but healthcare and technology held up. Third, the Fed rapid policy response (CARES Act, corporate bond purchase programs) prevented a wave of corporate defaults. The result: 2020 CLO AAA defaults = 0, and 2008 CLO AAA defaults were effectively 0 as well. However, equity and BB tranche distributions were suspended for several months.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "JP Morgan Research", title: "CLO Primer: Mechanics, Triggers and Valuation", url: "https://www.jpmorgan.com/", source: "JP Morgan, 2023" },
  { id: 2, author: "Moody's Investors Service", title: "Moody's Approach to Rating CLOs", url: "https://www.moodys.com/", source: "Moody's, 2023" },
  { id: 3, author: "S&P Global Ratings", title: "Global Methodology for Rating CLOs", url: "https://www.spglobal.com/", source: "S&P Global, 2023" },
  { id: 4, author: "Bank of America Securities", title: "CLO Primer: Structures and Mechanics", url: "https://www.bofasecurities.com/", source: "BofA Global Research, 2023" },
  { id: 5, author: "LSTA (Loan Syndications and Trading Association)", title: "Understanding CLO Structures", url: "https://www.lsta.org/", source: "LSTA, 2023" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredWaterfallClient({ concept, lang }: Props) {
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
                  ? "text-white border-blue-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured Finance · Ch.4</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "트랑쉐 & 워터폴 — 구조화금융 신용 리스크 배분의 원리"
              : "Tranche & Waterfall — The Mechanics of Credit Risk Distribution in Structured Finance"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "워터폴은 구조화금융에서 돈의 우선순위 규칙입니다. 자산 풀에서 현금이 들어오면 관리 수수료부터 시작해 선순위 이자, 선순위 원금, 메자닌 이자, 메자닌 원금, 마지막으로 에쿼티 순서로 흐릅니다. OC 트리거와 IC 트리거는 이 흐름에 개입하는 안전장치입니다. 에쿼티 투자자가 레버리지드 수익을 얻는 구조적 근거와 그 양날의 검을 설명합니다."
              : "The waterfall is the priority of payments rule in structured finance. When cash enters from the asset pool, it flows from management fees first, then senior interest, senior principal, mezzanine interest, mezzanine principal, and finally equity. OC and IC triggers are the safety mechanisms that intervene in this flow. This chapter explains the structural basis for equity investors earning leveraged returns — and the double-edged sword that comes with it."}
          </p>
        </motion.div>

        {/* Section 1: Quick Summary */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 워터폴의 핵심 인사이트 — 30초 요약" : "1. The Core Waterfall Insight — 30-Second Summary"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "복잡한 CLO 법률 문서 수백 페이지 중 가장 중요한 한 조항은 Priority of Payments(지급 우선순위) 조항입니다."
              : "Of hundreds of pages in a CLO legal document, the single most important clause is the Priority of Payments provision."}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "💧", label: (ko: boolean) => ko ? "워터폴의 본질" : "Waterfall Essence",              value: (ko: boolean) => ko ? "돈의 우선순위 규칙" : "Money Priority Rule",   sub: (ko: boolean) => ko ? "현금은 위에서 아래로만" : "Cash flows only top-to-bottom" },
              { icon: "🛡️", label: (ko: boolean) => ko ? "선순위 보호 원리" : "Senior Protection Principle", value: (ko: boolean) => ko ? "에쿼티 먼저 소멸" : "Equity Dies First",      sub: (ko: boolean) => ko ? "그래야 AAA가 안전하다" : "That makes AAA safe" },
              { icon: "⚡", label: (ko: boolean) => ko ? "트리거의 역할" : "Trigger Role",                   value: (ko: boolean) => ko ? "자동 디버팅" : "Auto Diverting",            sub: (ko: boolean) => ko ? "후순위 차단 → 선순위 상환" : "Block junior → repay senior" },
            ].map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 text-center">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label(ko)}</p>
                <p className="font-black text-lg text-gray-900 dark:text-gray-50 mb-1">{s.value(ko)}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{s.sub(ko)}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-1.5">
                  {ko ? "워터폴이 AAA를 가능하게 하는 이유" : "Why the Waterfall Makes AAA Possible"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "워터폴 구조가 없다면 자산 풀에서 손실이 발생할 때 모든 투자자가 동등하게 손실을 나눠야 합니다. 워터폴은 손실을 에쿼티부터 순서대로 배분해, 선순위 투자자는 에쿼티 버퍼가 완전히 소진될 때까지 아무 손실도 보지 않습니다. 이 구조 덕분에 BBB 등급 자산 풀로도 AAA 선순위 채권을 만들 수 있습니다."
                    : "Without a waterfall, when losses occur in the asset pool, all investors share losses equally. The waterfall distributes losses from equity upward — senior investors suffer no loss until the equity buffer is completely exhausted. This structure is what allows a pool of BBB-rated assets to produce a AAA-rated senior bond."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Waterfall Step-by-Step */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 워터폴 작동 원리 — Priority of Payments 단계별 해부" : "2. How the Waterfall Works — Priority of Payments Step by Step"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "분기별 또는 월별로 자산 풀에서 현금이 수취되면 아래 순서대로 정확히 배분됩니다. 순서는 법률 문서에 명기된 강제 규칙입니다."
              : "When cash is received from the asset pool quarterly or monthly, it is distributed exactly in the order below. The sequence is a mandatory rule spelled out in the legal documents."}
          </p>

          {/* Waterfall Vertical Diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6 mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "CLO Priority of Payments — 전형적인 워터폴" : "CLO Priority of Payments — Typical Waterfall"}
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-200 dark:bg-blue-800 hidden sm:block" />
              <div className="space-y-2">
                {WATERFALL_STEPS.map((step, i) => (
                  <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                    className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm z-10 ${step.color}`}>
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full sm:hidden ${step.badge}`}>{step.step}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{step.label(ko)}</span>
                        {step.pct > 0 && (
                          <span className="ml-auto text-xs font-mono font-bold" style={{ color: accent }}>
                            {ko ? `예시 ${step.pct}%` : `e.g. ${step.pct}%`}
                          </span>
                        )}
                        {step.pct === 0 && step.step !== 3 && (
                          <span className="ml-auto text-xs font-mono text-gray-400">{ko ? "만기 상환" : "at maturity"}</span>
                        )}
                        {step.step === 3 && (
                          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{ko ? "안전장치" : "Safety"}</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.note(ko)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Arrow at bottom */}
              <div className="flex justify-center mt-3">
                <span className="text-2xl text-blue-300 dark:text-blue-700">↓</span>
              </div>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-1">
                {ko ? "현금은 위에서 아래 방향으로만 흐른다" : "Cash flows in one direction only: top to bottom"}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
            <p className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">
              {ko ? "워터폴의 순환 구조" : "The Waterfall Cycle"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "CLO의 재투자 기간(보통 2–3년) 동안 선순위·메자닌 이자와 원금 상환이 완료된 후 남은 현금으로 새로운 레버리지드론을 매입합니다. 재투자 기간이 끝나면 원금 상환 단계로 전환되어 선순위부터 순서대로 원금이 상환됩니다. 에쿼티 투자자는 재투자 기간 내내 초과 스프레드를 받으며 수익을 축적하고, 원금 상환 단계에서는 모든 상위 트랑쉐 원금 상환 후 잔여 현금만 받습니다."
                : "During the CLO reinvestment period (typically 2–3 years), after senior and mezzanine interest and principal payments are made, remaining cash is used to buy new leveraged loans. After the reinvestment period ends, the deal shifts to the amortization phase and senior tranches begin receiving principal repayment in order. Equity investors accumulate excess spread throughout the reinvestment period and receive only residual cash after all senior tranche principal is repaid."}
            </p>
          </div>
        </motion.section>

        {/* Section 3: OC/IC Triggers */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. OC 트리거 / IC 트리거 — 워터폴의 안전장치" : "3. OC Trigger / IC Trigger — The Waterfall Safety Mechanisms"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "OC(과잉담보)와 IC(이자커버리지) 두 테스트는 CLO에서 선순위를 보호하는 자동 안전 시스템입니다. 테스트 실패 시 현금흐름이 즉시 재배분됩니다."
              : "The OC (overcollateralization) and IC (interest coverage) tests are the automatic safety system protecting senior tranches in CLOs. When tests fail, cash flows are immediately redirected."}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: (ko: boolean) => ko ? "OC 테스트 (과잉담보 테스트)" : "OC Test (Overcollateralization Test)",
                icon: "📦",
                formula: (ko: boolean) => ko ? "OC 비율 = 자산 잔액 ÷ 채권 잔액" : "OC Ratio = Asset Balance ÷ Bond Balance",
                example: (ko: boolean) => ko ? "자산 $500M, 채권 $400M → OC 125%" : "Assets $500M, bonds $400M → OC 125%",
                threshold: (ko: boolean) => ko ? "최소 임계치: 예시 120% (거래마다 다름)" : "Minimum threshold: e.g. 120% (varies by deal)",
                color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
                badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                title: (ko: boolean) => ko ? "IC 테스트 (이자커버리지 테스트)" : "IC Test (Interest Coverage Test)",
                icon: "💰",
                formula: (ko: boolean) => ko ? "IC 비율 = 자산 이자 수입 ÷ 채권 이자 지급" : "IC Ratio = Asset Interest Income ÷ Bond Interest Paid",
                example: (ko: boolean) => ko ? "이자 수입 $25M, 이자 지급 $18M → IC 138%" : "Interest income $25M, paid $18M → IC 138%",
                threshold: (ko: boolean) => ko ? "최소 임계치: 예시 120% (거래마다 다름)" : "Minimum threshold: e.g. 120% (varies by deal)",
                color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
                badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-black text-sm text-gray-900 dark:text-gray-50">{item.title(ko)}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="rounded-lg bg-white dark:bg-gray-900 px-3 py-2">
                    <p className="font-mono text-xs font-bold text-gray-700 dark:text-gray-200">{item.formula(ko)}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{ko ? "예시: " : "Example: "}{item.example(ko)}</p>
                  <p className={`text-xs font-semibold px-2 py-1 rounded-lg ${item.badge}`}>{item.threshold(ko)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* OC Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "OC 비율 수준별 조치 — AAA 트랑쉐 OC 테스트 기준" : "OC Ratio Levels and Actions — AAA Tranche OC Test"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "OC 비율" : "OC Ratio"}</th>
                    <th className="text-left px-4 py-2.5">{ko ? "상태" : "Status"}</th>
                    <th className="text-left px-4 py-2.5">{ko ? "워터폴 조치" : "Waterfall Action"}</th>
                  </tr>
                </thead>
                <tbody>
                  {OC_TABLE.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-mono font-bold text-xs text-gray-800 dark:text-gray-200">{row.oc}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${row.dot}`} />
                          <span className={`text-xs font-semibold ${row.color}`}>{row.status(ko)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.action(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
            <p className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-2">
              {ko ? "디버팅(Diverting)의 실제 작동" : "How Diverting Actually Works"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "OC 트리거가 발동되면 워터폴에서 5~7단계(메자닌 이자 이후)부터의 현금흐름이 차단됩니다. 차단된 현금은 AAA 원금 조기 상환에 사용됩니다. AAA 원금이 줄어들면 OC 비율(자산 잔액 ÷ 채권 잔액)이 개선됩니다. 이 자동 디레버리징이 선순위를 보호합니다. 에쿼티 투자자 입장에서는 배당이 수개월 또는 수분기 동안 완전히 중단되는 것을 의미합니다. 2020년 COVID 충격 시 많은 CLO에서 이 메커니즘이 실제로 작동했습니다."
                : "When the OC trigger fires, cash flows from step 5 onward (after mezzanine interest) in the waterfall are blocked. The blocked cash is used to prepay AAA principal. As AAA principal shrinks, the OC ratio (asset balance ÷ bond balance) improves. This automatic deleveraging protects the senior tranche. For equity investors, this means distributions are completely suspended for months or even quarters. This mechanism actually activated in many CLOs during the 2020 COVID shock."}
            </p>
          </div>
        </motion.section>

        {/* Section 4: Credit Enhancement Deep Dive */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 신용 보강 심화 — OC·XS·준비금의 수치 해부" : "4. Credit Enhancement Deep Dive — OC, XS & Reserve Fund Numbers"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "신용 보강의 각 도구가 실제 수치로 어떻게 작동하는지 $500M CLO 예시로 살펴봅니다."
              : "How each credit enhancement tool works in practice, illustrated with a $500M CLO example."}
          </p>

          {/* CE Deep Dive Grid */}
          <div className="space-y-4 mb-6">
            {[
              {
                title: (ko: boolean) => ko ? "과잉담보 (OC) — 가장 강력한 버퍼" : "Overcollateralization (OC) — The Strongest Buffer",
                icon: "📦",
                color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
                content: (ko: boolean) => ko
                  ? "CLO 자산 풀 $500M으로 채권 $450M을 발행 → OC = 500/450 = 111%. 에쿼티($50M)가 OC 버퍼입니다. 자산 풀에서 $50M이 손실나면 OC = 450/450 = 100%(AAA 원금 위협 시작). 실제 CLO에서 AAA OC 임계치는 120–130%로 설정되어 있어, 자산 풀이 수십 % 손실나더라도 자동 디버팅이 작동합니다."
                  : "CLO asset pool of $500M issues $450M in bonds → OC = 500/450 = 111%. The equity ($50M) is the OC buffer. If $50M of losses occur in the pool, OC = 450/450 = 100% (starting to threaten AAA principal). In real CLOs, AAA OC thresholds are set at 120–130%, so automatic diverting kicks in well before losses reach the AAA tranche.",
              },
              {
                title: (ko: boolean) => ko ? "초과 스프레드 (XS) — 매일 쌓이는 수익 버퍼" : "Excess Spread (XS) — The Daily Accumulating Buffer",
                icon: "💸",
                color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
                content: (ko: boolean) => ko
                  ? "자산 풀 수익률 6.5% - 채권 평균 쿠폰 4.4% = XS 2.1%. $500M × 2.1% = 연간 $10.5M 초과 스프레드. 이 초과분은 매 분기 에쿼티 배당으로 나가거나, OC 트리거 발동 시 선순위 원금 상환에 사용됩니다. 자산 풀에서 연 2% 디폴트가 발생해도 회수율 70% 가정 시 실제 손실 0.6%이므로 XS 2.1%가 이를 커버합니다."
                  : "Asset pool yield 6.5% minus average bond coupon 4.4% = XS 2.1%. $500M × 2.1% = $10.5M annual excess spread. This excess either goes to equity as quarterly distributions or, if OC triggers fire, is redirected to repay senior principal. Even with 2% annual defaults in the pool, at a 70% recovery rate the actual loss is 0.6%, which the 2.1% XS more than covers.",
              },
              {
                title: (ko: boolean) => ko ? "준비적립금 (Reserve Fund) — 초기 현금 쿠션" : "Reserve Fund — The Upfront Cash Cushion",
                icon: "🏦",
                color: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
                content: (ko: boolean) => ko
                  ? "CLO 발행 시 전체 발행액의 0.5–2%를 현금으로 SPV 내 준비금 계좌에 적립합니다. 예: $500M CLO에서 $5M 준비금. 이 준비금은 초기 파이프라인 기간(Ramp-up) 중 XS가 발생하기 전에 비용을 커버하거나, 갑작스러운 연체 급증 시 쿠폰 지급을 지원합니다. 준비금이 소진되면 별도로 보충해야 하며, 이 요건도 Priority of Payments에 명기됩니다."
                  : "At CLO closing, 0.5–2% of total issuance is deposited in cash into an SPV reserve account. Example: $5M reserve in a $500M CLO. This reserve covers costs during the initial ramp-up period before XS is generated, or supports coupon payments during sudden delinquency spikes. If the reserve is depleted, it must be replenished — this requirement is also specified in the Priority of Payments.",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50 mb-2">{item.title(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.content(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 5: Equity Leverage */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 에쿼티 트랑쉐의 레버리지 — 10%로 전체 풀 수익을 독점하는 구조" : "5. Equity Tranche Leverage — Owning 10% to Capture the Entire Pool Return"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "에쿼티는 전체 자산 풀의 10%만 투자하고, 선순위·메자닌 이자를 모두 지급하고 남은 초과 스프레드 전부를 가져갑니다. 이것이 레버리지드 수익의 원리입니다."
              : "Equity invests only 10% of the total asset pool, pays all senior and mezzanine interest, and captures every dollar of excess spread left over. This is the leveraged return mechanism."}
          </p>

          {/* Equity Leverage Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "$500M CLO 에쿼티 수익 계산 예시" : "$500M CLO Equity Return Calculation Example"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5">{ko ? "수치" : "Amount"}</th>
                    <th className="text-left px-4 py-2.5">{ko ? "산출 근거" : "Basis"}</th>
                  </tr>
                </thead>
                <tbody>
                  {EQUITY_LEVERAGE.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${i === EQUITY_LEVERAGE.length - 1 ? "bg-purple-50 dark:bg-purple-900/20" : ""}`}>
                      <td className="px-4 py-3 font-semibold text-xs text-gray-700 dark:text-gray-300">{row.item(ko)}</td>
                      <td className={`px-4 py-3 font-mono font-bold text-xs ${i === EQUITY_LEVERAGE.length - 1 ? "text-purple-700 dark:text-purple-300 text-sm" : "text-gray-800 dark:text-gray-200"}`}>{row.value}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{row.note(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 p-4">
              <p className="font-bold text-sm text-purple-800 dark:text-purple-300 mb-2">
                {ko ? "레버리지의 비밀" : "The Leverage Secret"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "에쿼티는 $50M을 투자해 $500M 자산 풀 전체의 초과 수익 $10.5M을 독점합니다. 단순 계산: $10.5M ÷ $50M = 21% IRR. 자산 풀 전체로 보면 2.1% XS이지만, 에쿼티 10%에 집중되면 21%가 됩니다. 이것이 레버리지입니다."
                  : "Equity invests $50M to monopolize $10.5M excess returns from the entire $500M pool. Simple math: $10.5M ÷ $50M = 21% IRR. From the pool perspective XS is 2.1%, but concentrated into 10% equity it becomes 21%. That is leverage."}
              </p>
            </div>
            <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-4">
              <p className="font-bold text-sm text-rose-800 dark:text-rose-300 mb-2">
                {ko ? "레버리지의 반대편" : "The Other Side of Leverage"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "자산 풀 손실이 $50M(10%)을 초과하면 에쿼티는 전액 소멸합니다. 손실률이 12%라면 에쿼티 투자자는 $50M을 전부 잃고 추가로 메자닌까지 손실이 전달됩니다. IRR은 -100%입니다. 레버리지는 수익도 손실도 모두 증폭시킵니다."
                  : "If pool losses exceed $50M (10%), equity is entirely wiped out. At a 12% loss rate, equity investors lose all $50M and losses cascade into mezzanine. IRR becomes -100%. Leverage amplifies both gains and losses equally."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Stress Scenarios */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 스트레스 시나리오 — 자산 풀이 무너질 때 각 트랑쉐는?" : "6. Stress Scenarios — What Happens to Each Tranche When the Pool Deteriorates?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 CLO 구조에서 디폴트율이 달라질 때 각 트랑쉐 투자자가 겪는 결과를 비교합니다."
              : "Comparing outcomes for each tranche investor as default rates change within the same CLO structure."}
          </p>

          <div className="space-y-4">
            {STRESS_SCENARIOS.map((sc, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${sc.color}`}>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-2xl">{sc.icon}</span>
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{sc.scenario(ko)}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? "디폴트율" : "Default Rate"}: <span className="font-bold">{sc.defaultRate}</span></span>
                      <span className="text-gray-400">|</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? "풀 손실 ($500M 기준)" : "Pool Loss (on $500M)"}: <span className="font-bold">{sc.poolLoss}</span></span>
                    </div>
                  </div>
                  <div className={`ml-auto w-2.5 h-2.5 rounded-full ${sc.dot}`} />
                </div>
                <div className="space-y-1.5">
                  {sc.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-gray-400 shrink-0 mt-0.5">→</span>
                      <span>{outcome(ko)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4 mt-6">
            <p className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">
              {ko ? "역사적 CLO 성과 — 워터폴이 실제로 작동했는가?" : "Historical CLO Performance — Did the Waterfall Actually Work?"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "2008년 금융위기와 2020년 코로나 충격 모두에서 CLO AAA 트랑쉐의 디폴트는 사실상 0건이었습니다. 2008년에도 서브프라임 CDO와 달리 CLO AAA는 손실을 보지 않았습니다. 이유는 세 가지입니다: ①레버리지드론은 모기지 ABS보다 분산도가 높음, ②OC/IC 트리거가 자동 디레버리징을 수행, ③CLO 매니저가 포트폴리오를 적극 관리. 에쿼티와 BB 트랑쉐는 양 사건 모두에서 상당한 손실 또는 배분 중단을 경험했습니다."
                : "In both the 2008 financial crisis and the 2020 COVID shock, CLO AAA tranche defaults were effectively zero. Even in 2008, unlike subprime CDOs, CLO AAA tranches did not suffer losses. Three reasons: ①leveraged loans are more diversified than mortgage ABS, ②OC/IC triggers performed automatic deleveraging, ③CLO managers actively managed portfolios. Equity and BB tranches experienced significant losses or suspended distributions in both events."}
            </p>
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
                    className="underline decoration-dotted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
            ? "트랑쉐 & 워터폴 — 구조화금융 신용 리스크 배분의 원리 | Deal Story"
            : "Tranche & Waterfall — Credit Risk Distribution in Structured Finance | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
