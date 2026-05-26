"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6"; // teal-500

// ── Credit Spectrum Data ──────────────────────────────────────────────────────
const CREDIT_TIERS = [
  {
    id: "ssa",
    label: "SSA",
    sub: (ko: boolean) => ko ? "소버린 · 초국가기관 · 기관" : "Sovereign · Supra · Agency",
    rating: "AAA ~ AA",
    spread: "T+20–60bp",
    team: "DCM",
    investorPool: (ko: boolean) => ko ? "중앙은행·SWF·연기금" : "Central banks, SWFs, Pensions",
    example: (ko: boolean) => ko ? "한국 외평채, KDB, 세계은행" : "US Treasury, World Bank, KDB",
    dealStory: { slug: "korea-1998-external-bond", label: (ko: boolean) => ko ? "케이스: 한국 1998 외평채 →" : "Case: Korea 1998 Bond →" },
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-500",
    text: "text-teal-800 dark:text-teal-200",
    riskBar: 1,
  },
  {
    id: "fig",
    label: "FIG",
    sub: (ko: boolean) => ko ? "금융기관 · 은행 · 보험" : "Financial Institutions",
    rating: "A ~ BBB",
    spread: "T+80–180bp",
    team: "DCM / FIG",
    investorPool: (ko: boolean) => ko ? "보험·연기금·자산운용사" : "Insurers, Pensions, AM",
    example: (ko: boolean) => ko ? "HSBC Senior, CS AT1, KB채권" : "JPMorgan Senior, CS AT1, KB bonds",
    dealStory: { slug: "credit-suisse-at1", label: (ko: boolean) => ko ? "케이스: CS AT1 →" : "Case: CS AT1 →" },
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-500",
    text: "text-blue-800 dark:text-blue-200",
    riskBar: 2,
  },
  {
    id: "ig",
    label: "Corp IG",
    sub: (ko: boolean) => ko ? "투자등급 기업채" : "Investment Grade Corporate",
    rating: "BBB",
    spread: "T+80–250bp",
    team: "DCM",
    investorPool: (ko: boolean) => ko ? "자산운용사·연기금" : "Asset managers, Pensions",
    example: (ko: boolean) => ko ? "Apple, 삼성전자, Shell" : "Apple, Microsoft, Shell",
    dealStory: null,
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-500",
    text: "text-violet-800 dark:text-violet-200",
    riskBar: 3,
  },
  {
    id: "hy",
    label: "High Yield",
    sub: (ko: boolean) => ko ? "하이일드 · LevFin" : "High Yield / LevFin",
    rating: "BB ~ B",
    spread: "T+300–700bp",
    team: "LevFin",
    investorPool: (ko: boolean) => ko ? "헤지펀드·HY 전문 AM" : "HY-dedicated funds, Hedge funds",
    example: (ko: boolean) => ko ? "PE LBO 기업, 신용등급 BB인 기업" : "PE-backed LBO cos, BB-rated issuers",
    dealStory: null,
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-500",
    text: "text-orange-800 dark:text-orange-200",
    riskBar: 4,
  },
  {
    id: "distressed",
    label: "Distressed",
    sub: (ko: boolean) => ko ? "부도 직전 · 구조조정" : "Near Default · Restructuring",
    rating: "CCC ~ D",
    spread: "T+700bp+",
    team: "Special Sits",
    investorPool: (ko: boolean) => ko ? "디스트레스드 펀드·특수상황 AM" : "Distressed funds, Special Situations",
    example: (ko: boolean) => ko ? "Evergrande 달러채, 구조조정 채권" : "Evergrande USD bonds, restructuring cos",
    dealStory: null,
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    dot: "bg-red-500",
    text: "text-red-800 dark:text-red-200",
    riskBar: 5,
  },
];

// ── LBO Capital Structure ─────────────────────────────────────────────────────
const LBO_STACK = [
  {
    label: (ko: boolean) => ko ? "선순위 담보 대출 (Senior Secured Loan)" : "Senior Secured Loan",
    pct: "40–50%",
    rate: (ko: boolean) => ko ? "SOFR+250–400bp" : "SOFR+250–400bp",
    recovery: "70–90%",
    color: "bg-teal-500",
    barH: 50,
    seniority: 1,
  },
  {
    label: (ko: boolean) => ko ? "2순위 / 중간 대출" : "Second Lien / Mezz",
    pct: "10–15%",
    rate: (ko: boolean) => ko ? "SOFR+600–900bp" : "SOFR+600–900bp",
    recovery: "30–60%",
    color: "bg-blue-500",
    barH: 15,
    seniority: 2,
  },
  {
    label: (ko: boolean) => ko ? "HY 채권 (Senior Unsecured)" : "HY Bond (Senior Unsecured)",
    pct: "20–30%",
    rate: (ko: boolean) => ko ? "고정 8–12%" : "Fixed 8–12%",
    recovery: "20–50%",
    color: "bg-violet-500",
    barH: 25,
    seniority: 3,
  },
  {
    label: (ko: boolean) => ko ? "자기자본 (PE Equity)" : "PE Equity",
    pct: "25–35%",
    rate: (ko: boolean) => ko ? "목표 IRR 20%+" : "Target IRR 20%+",
    recovery: (ko: boolean) => ko ? "0–잔여" : "0–Residual",
    color: "bg-gray-400",
    barH: 30,
    seniority: 4,
  },
];

// ── Recovery Rate Data ────────────────────────────────────────────────────────
const RECOVERY_RATES = [
  { tier: (ko: boolean) => ko ? "선순위 담보 (1순위)" : "Senior Secured (1st lien)", rate: "60–80%", bar: 80, color: "bg-teal-500" },
  { tier: (ko: boolean) => ko ? "선순위 무담보" : "Senior Unsecured", rate: "35–50%", bar: 50, color: "bg-blue-400" },
  { tier: (ko: boolean) => ko ? "후순위 / 열후채" : "Subordinated / Junior", rate: "15–35%", bar: 30, color: "bg-violet-400" },
  { tier: (ko: boolean) => ko ? "자기자본 (주식)" : "Equity", rate: "0–15%", bar: 10, color: "bg-orange-400" },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "korea-1998-external-bond",
    emoji: "🇰🇷",
    tier: (ko: boolean) => ko ? "SSA · Sovereign" : "SSA · Sovereign",
    title: (ko: boolean) => ko ? "한국 1998 외화채" : "Korea 1998 External Bond",
    tagline: (ko: boolean) => ko ? "위기 직후 국제시장 복귀 — T+345bp에서 T+60bp까지" : "Post-crisis market re-entry — T+345bp to T+60bp",
    lesson: (ko: boolean) => ko
      ? "SSA 발행사의 Book-building·NIC·신디케이트가 어떻게 실제로 작동하는지 보여주는 교과서적 케이스."
      : "The textbook case showing how SSA book-building, NIC, and syndicate actually work.",
    color: "border-teal-200 dark:border-teal-700 bg-teal-50/60 dark:bg-teal-900/20",
    labelColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    slug: "credit-suisse-at1",
    emoji: "🏦",
    tier: (ko: boolean) => ko ? "FIG · Bank Capital" : "FIG · Bank Capital",
    title: (ko: boolean) => ko ? "크레딧스위스 AT1" : "Credit Suisse AT1",
    tagline: (ko: boolean) => ko ? "PONV 트리거 — AT1 채권자가 주주보다 먼저 100% 손실" : "PONV triggered — AT1 investors took 100% loss before equity",
    lesson: (ko: boolean) => ko
      ? "FIG 발행사의 AT1·CoCo 구조, 베일인, PONV 조건이 실제로 발동된 사상 최대 규모 사례."
      : "FIG AT1/CoCo structure, bail-in and PONV in action — the largest write-down in history.",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
    labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    slug: "svb-2023",
    emoji: "⚡",
    tier: (ko: boolean) => ko ? "FIG · ALM 실패" : "FIG · ALM Failure",
    title: (ko: boolean) => ko ? "실리콘밸리뱅크 붕괴" : "SVB Collapse",
    tagline: (ko: boolean) => ko ? "48시간 만에 사라진 $2,090억 은행 — HTM 포트폴리오 폭탄" : "A $209B bank gone in 48 hours — the HTM portfolio bomb",
    lesson: (ko: boolean) => ko
      ? "금리 인상기에 ALM 실패가 어떻게 FIG 발행사의 신뢰·유동성 위기로 이어지는지 보여주는 생생한 사례."
      : "How ALM failure during rate hikes translates directly into an FIG issuer's liquidity and confidence crisis.",
    color: "border-violet-200 dark:border-violet-700 bg-violet-50/60 dark:bg-violet-900/20",
    labelColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "DCM과 ECM의 차이는 무엇인가요?" : "What's the difference between DCM and ECM?",
    a: (ko: boolean) => ko
      ? "DCM은 채권(부채)을, ECM은 주식(지분)을 다룹니다. 부채는 만기가 있고 이자를 지급하며 상환 우선순위가 높습니다. 기업의 자금 조달 대부분은 채권으로 이루어지며, 글로벌 채권시장($130조)이 주식시장($110조)보다 큰 이유입니다."
      : "DCM deals with debt (bonds), ECM with equity (shares). Debt has a maturity, pays interest, and ranks higher in repayment priority. Most corporate funding happens through bonds, which is why the global bond market ($130T) exceeds equities ($110T).",
  },
  {
    q: (ko: boolean) => ko ? "DCM 뱅커는 실제로 무슨 일을 하나요?" : "What does a DCM banker actually do?",
    a: (ko: boolean) => ko
      ? "DCM 뱅커는 발행사의 자금 조달 수요를 파악하고, 채권 구조를 설계하며, 투자자에게 마케팅하고, 가격을 결정하여 발행을 완료시킵니다. 실무적으로는 ① 발행 타이밍·구조 조언, ② 투자자 수요 파악(오더북 관리), ③ 스프레드·가격 협상, ④ 법률·규제 문서 조율이 핵심 업무입니다."
      : "DCM bankers identify an issuer's funding needs, design the bond structure, market it to investors, negotiate pricing, and close the deal. In practice: ① advising on timing and structure, ② gauging investor demand (managing the order book), ③ negotiating spread and price, ④ coordinating legal and regulatory documentation.",
  },
  {
    q: (ko: boolean) => ko ? "하이일드(HY)는 IG와 어떻게 다른가요?" : "How does High Yield differ from Investment Grade?",
    a: (ko: boolean) => ko
      ? "IG는 BBB- 이상 등급으로 투자자 풀이 넓고 스프레드가 타이트합니다(T+80–250bp). HY는 BB+ 이하로 더 높은 쿠폰을 제공하지만 투자자 풀이 좁고 유동성이 낮습니다(T+300–700bp). DCM팀이 IG를 담당한다면 LevFin팀이 HY를 담당하는 경우가 많으며, 분석·구조·계약서도 크게 다릅니다."
      : "IG is rated BBB- or above, with a broad investor pool and tight spreads (T+80–250bp). HY is rated BB+ and below, offering higher coupons but with a narrower investor base and lower liquidity (T+300–700bp). DCM teams typically cover IG while LevFin teams cover HY — and the analysis, structures, and documentation are very different.",
  },
  {
    q: (ko: boolean) => ko ? "레버리지드 파이낸스(LevFin)란 무엇인가요?" : "What is Leveraged Finance (LevFin)?",
    a: (ko: boolean) => ko
      ? "LevFin은 신용등급이 투자등급 이하(HY)이거나 높은 부채를 보유한 기업의 자금 조달을 담당하는 IB 업무 분야입니다. 주로 PE 회사의 LBO 인수자금 조달, 자본 구조 재편, 고수익 채권 발행 등이 포함됩니다. 담보 대출(Term Loan B), 회전 신용(RCF), HY 채권이 주요 수단이며, 코버넌트(재무약정) 분석이 핵심입니다."
      : "LevFin covers financing for companies rated below investment grade or carrying high debt — primarily PE-backed LBOs, recapitalizations, and HY bond issuance. Key instruments include Term Loan B, revolving credit facilities (RCF), and HY bonds. Covenant analysis is central to the work.",
  },
  {
    q: (ko: boolean) => ko ? "Distressed 채권은 어떻게 가격이 매겨지나요?" : "How are distressed bonds priced?",
    a: (ko: boolean) => ko
      ? "Distressed 채권은 수익률이 아닌 액면가 대비 가격(cents on dollar)으로 거래됩니다. 50 cents on dollar면 액면의 절반 가격. 투자자는 부도 시 회수율(Recovery Rate)에 초점을 맞춥니다 — 선순위 담보채는 60–80%, 무담보채는 35–50%, 후순위채는 15–35%가 역사적 평균입니다. 디스트레스드 펀드는 '현재 가격 < 예상 회수율'인 채권을 찾습니다."
      : "Distressed bonds trade on price (cents on dollar) rather than yield. If a bond trades at 50 cents, you pay half of face value. Investors focus on recovery rates in default: senior secured averages 60–80%, senior unsecured 35–50%, subordinated 15–35%. Distressed funds seek bonds where 'current price < expected recovery'.",
  },
];

// ── Deal Process Steps ────────────────────────────────────────────────────────
const DEAL_STEPS = [
  {
    num: "01",
    label: (ko: boolean) => ko ? "Mandate" : "Mandate",
    desc: (ko: boolean) => ko ? "발행사 선정 · IB 위임" : "Issuer selects · IB appointed",
    icon: "📋",
  },
  {
    num: "02",
    label: (ko: boolean) => ko ? "구조 설계" : "Structure",
    desc: (ko: boolean) => ko ? "만기 · 쿠폰 · 조건 설계" : "Tenor · coupon · terms set",
    icon: "🔧",
  },
  {
    num: "03",
    label: (ko: boolean) => ko ? "마케팅" : "Marketing",
    desc: (ko: boolean) => ko ? "로드쇼 · IOI 수집" : "Roadshow · IOI collection",
    icon: "📣",
  },
  {
    num: "04",
    label: (ko: boolean) => ko ? "북빌딩" : "Book-building",
    desc: (ko: boolean) => ko ? "오더북 · IPT → 가이던스" : "Order book · IPT → Guidance",
    icon: "📊",
  },
  {
    num: "05",
    label: (ko: boolean) => ko ? "프라이싱" : "Pricing",
    desc: (ko: boolean) => ko ? "최종 스프레드 · NIC 결정" : "Final spread · NIC agreed",
    icon: "💰",
  },
  {
    num: "06",
    label: (ko: boolean) => ko ? "클로징" : "Closing",
    desc: (ko: boolean) => ko ? "결제 · 자금 이동 완료" : "Settlement · proceeds transferred",
    icon: "✅",
  },
];

// ── Related Terms ─────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "investment-grade", ko: "투자등급 (IG)", en: "Investment Grade" },
  { slug: "high-yield", ko: "하이일드 (HY)", en: "High Yield" },
  { slug: "spread-basis", ko: "스프레드", en: "Spread" },
  { slug: "book-building", ko: "북빌딩", en: "Book Building" },
  { slug: "nic", ko: "NIC", en: "NIC" },
  { slug: "syndicate", ko: "신디케이트", en: "Syndicate" },
  { slug: "alm", ko: "ALM", en: "ALM" },
  { slug: "dcm-ecosystem", ko: "DCM 생태계", en: "DCM Ecosystem" },
];

// ── Chapter Nav Data ──────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 DCM이란", en: "Ch.1 What Is DCM" },
  { id: "ch2", ko: "Ch.2 세 플레이어", en: "Ch.2 Three Players" },
  { id: "ch3", ko: "Ch.3 크레딧 스펙트럼", en: "Ch.3 Credit Spectrum" },
  { id: "ch4", ko: "Ch.4 LevFin·LBO", en: "Ch.4 LevFin·LBO" },
  { id: "ch5", ko: "Ch.5 Distressed", en: "Ch.5 Distressed" },
  { id: "ch6", ko: "Ch.6 딜 프로세스", en: "Ch.6 Deal Process" },
  { id: "ch7", ko: "Ch.7 실전 케이스", en: "Ch.7 Case Studies" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {CHAPTERS.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
            >
              {ko ? ch.ko : ch.en}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketSizeCallout({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "채권시장 vs 주식시장 — 2024" : "Bond vs Equity Market — 2024"}
        </p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-200/60 dark:divide-gray-700/60">
        {[
          {
            label: ko ? "글로벌 채권시장" : "Global Bond Market",
            val: "$130T+",
            sub: ko ? "총 발행 잔액" : "Outstanding balance",
            badge: ko ? "더 크다 ▲" : "Larger ▲",
            bc: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
            vc: "text-teal-600 dark:text-teal-400",
            delay: 0.2,
          },
          {
            label: ko ? "글로벌 주식시장" : "Global Equity Market",
            val: "$110T",
            sub: ko ? "시가총액 기준" : "Market cap",
            badge: ko ? "비교 기준" : "Benchmark",
            bc: "bg-gray-100 dark:bg-gray-800 text-gray-500",
            vc: "text-gray-600 dark:text-gray-400",
            delay: 0.35,
          },
        ].map((item) => (
          <div key={item.label} className="p-5 sm:p-8 text-center">
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-3">{item.label}</p>
            <motion.p
              className={`text-4xl sm:text-5xl font-black tracking-tight ${item.vc}`}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: item.delay, ease: EASE }}
            >
              {item.val}
            </motion.p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">{item.sub}</p>
            <span className={`mt-3 inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.bc}`}>
              {item.badge}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "채권시장이 주식보다 크지만 뉴스는 주식이 더 많이 다룬다 — 대부분의 채권 수요가 소음 없이 작동하는 구조적·규제적 수요이기 때문이다."
            : "The bond market is larger than equities yet receives far less coverage — most demand is structural and regulatory, operating quietly in the background."}
        </p>
      </div>
    </motion.div>
  );
}

function ThreePlayerDiagram({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "DCM의 세 플레이어 — 삼각 구조" : "DCM's Three Players — Triangle Structure"}
        </p>
      </div>
      <div className="p-6">
        {/* Triangle top: IB */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl border border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/30 px-6 py-4 text-center w-52"
          >
            <p className="text-[13px] font-black text-teal-800 dark:text-teal-200 mb-1">
              {ko ? "투자은행 (IB)" : "Investment Bank (IB)"}
            </p>
            <p className="text-[10px] text-teal-600 dark:text-teal-400 leading-tight">
              {ko ? "DCM · 신디케이트 · S&T" : "DCM · Syndicate · S&T"}
            </p>
          </motion.div>
        </div>

        {/* Arrows row */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="text-[10px] text-gray-400 text-center">
            <span>{ko ? "딜 구조·마케팅" : "Structure·Market"}</span>
          </div>
          <div className="flex flex-col items-center text-gray-300 dark:text-gray-600 text-lg">
            <span>↕</span>
          </div>
          <div className="text-[10px] text-gray-400 text-center">
            <span>{ko ? "수요 탐색·주문" : "Demand·Orders"}</span>
          </div>
        </div>

        {/* Bottom: Issuer and Investor */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: ko ? "발행사 (Issuer)" : "Issuer",
              sub: ko ? "SSA · FIG · Corp IG · HY" : "SSA · FIG · Corp IG · HY",
              note: ko ? "자금이 필요한 주체" : "Entity needing capital",
              bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
              tc: "text-blue-800 dark:text-blue-200",
              delay: 0.1,
            },
            {
              title: ko ? "투자자 (Investor)" : "Investor",
              sub: ko ? "CB · 연기금 · AM · HF" : "CB · Pension · AM · HF",
              note: ko ? "채권을 매수하는 주체" : "Entity buying bonds",
              bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
              tc: "text-violet-800 dark:text-violet-200",
              delay: 0.2,
            },
          ].map((player) => (
            <motion.div
              key={player.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: player.delay, ease: EASE }}
              className={`rounded-xl border p-4 text-center ${player.bg}`}
            >
              <p className={`text-[13px] font-black mb-1 ${player.tc}`}>{player.title}</p>
              <p className={`text-[10px] mb-2 ${player.tc} opacity-70`}>{player.sub}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">{player.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom arrow */}
        <div className="flex justify-center mt-4">
          <div className="text-[10px] text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-full px-4 py-1.5">
            {ko ? "↔ 자금 · 채권이 IB를 통해 이동" : "↔ Capital & bonds flow through IB"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CreditSpectrumViz({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      {/* Gradient bar */}
      <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-2 px-1">
        <span>{ko ? "← 안전 (낮은 스프레드, 넓은 투자자 풀)" : "← Safe (tight spread, broad investor pool)"}</span>
        <span>{ko ? "위험 →" : "Risky →"}</span>
      </div>
      <div className="h-2.5 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 via-violet-400 via-orange-400 to-red-500 mb-6" />

      {/* Tier cards */}
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-2.5 sm:grid sm:grid-cols-3 lg:grid-cols-5 min-w-max sm:min-w-0">
          {CREDIT_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
              className={`flex-shrink-0 w-44 sm:w-auto rounded-xl border p-3.5 ${tier.bg} ${tier.border}`}
            >
              {/* Risk bar */}
              <div className="flex gap-0.5 mb-2.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`h-1 rounded-full flex-1 ${n <= tier.riskBar ? tier.dot : "bg-gray-200 dark:bg-gray-700"}`}
                  />
                ))}
              </div>

              {/* Label */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${tier.dot}`} />
                <span className={`text-[13px] font-black ${tier.text}`}>{tier.label}</span>
              </div>
              <p className={`text-[10px] mb-3 leading-tight ${tier.text} opacity-75`}>{tier.sub(ko)}</p>

              {/* Metrics */}
              {[
                { lKo: "등급", lEn: "Rating", v: tier.rating },
                { lKo: "스프레드", lEn: "Spread", v: tier.spread },
                { lKo: "담당팀", lEn: "Team", v: tier.team },
              ].map((row) => (
                <div key={row.lKo} className="flex justify-between text-[10px] mb-0.5">
                  <span className="text-gray-500 dark:text-gray-400">{ko ? row.lKo : row.lEn}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{row.v}</span>
                </div>
              ))}

              <p className={`text-[9px] mt-2 pt-2 border-t leading-tight ${tier.border} text-gray-400 dark:text-gray-500`}>
                {ko ? "투자자: " : "Investors: "}{tier.investorPool(ko)}
              </p>
              <p className={`text-[9px] mt-1 leading-tight text-gray-400 dark:text-gray-500`}>
                {ko ? "예: " : "e.g.: "}{tier.example(ko)}
              </p>

              {/* Case link */}
              {tier.dealStory && (
                <Link
                  href={`${ko ? "" : "/en"}/market/${tier.dealStory.slug}`}
                  className={`mt-2.5 inline-block text-[9px] font-bold ${tier.text} hover:underline`}
                >
                  {tier.dealStory.label(ko)}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LboStackWaterfall({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "LBO 자본구조 — 워터폴 (우선순위 순)" : "LBO Capital Structure — Waterfall (Seniority Order)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex gap-5 items-end">
          {/* Visual waterfall bars */}
          <div className="flex gap-1.5 items-end h-44 flex-shrink-0">
            {LBO_STACK.map((layer, i) => (
              <motion.div
                key={i}
                className={`w-10 rounded-t-lg ${layer.color} opacity-90`}
                initial={{ height: 0 }}
                whileInView={{ height: `${layer.barH}%` }}
                viewport={VP}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                style={{ alignSelf: "flex-end" }}
                title={layer.label(ko)}
              />
            ))}
          </div>

          {/* Legend table */}
          <div className="flex-1 space-y-2 min-w-0">
            {LBO_STACK.map((layer, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                className="flex items-start gap-2.5 text-[11px]"
              >
                <div className={`w-3 h-3 rounded flex-shrink-0 mt-0.5 ${layer.color}`} />
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 leading-tight truncate">
                    {layer.label(ko)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-[10px]">
                    {layer.pct} · {layer.rate(ko)} ·{" "}
                    {ko ? "회수: " : "Recovery: "}
                    {typeof layer.recovery === "function" ? (layer.recovery as (k: boolean) => string)(ko) : layer.recovery}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info note */}
        <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 px-4 py-3">
          <p className="text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed">
            {ko
              ? "워터폴 원칙: 회사 청산 시 선순위부터 순서대로 상환. 자기자본은 마지막 — 그래서 가장 높은 수익률을 요구한다."
              : "Waterfall principle: In liquidation, senior tranches are repaid first. Equity is last — which is why it demands the highest return."}
          </p>
        </div>

        {/* Quote highlight */}
        <blockquote className="mt-5 border-l-4 border-teal-400 pl-4">
          <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "\"LevFin은 DCM의 아드레날린 버전이다 — 구조가 복잡하고 코버넌트가 두껍고 PE와 협상 테이블에서 싸워야 한다.\""
              : "\"LevFin is the adrenaline version of DCM — complex structures, thick covenant packages, and you negotiate across the table from PE sponsors.\""}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
            {ko ? "— IB 시니어 뱅커, 2024" : "— Senior IB Banker, 2024"}
          </p>
        </blockquote>
      </div>
    </motion.div>
  );
}

function RecoveryRateBars({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "부도 시 역사적 회수율 (Recovery Rate)" : "Historical Recovery Rates in Default"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        {RECOVERY_RATES.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] font-medium text-gray-700 dark:text-gray-300">
                {item.tier(ko)}
              </span>
              <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 tabular-nums">
                {item.rate}
              </span>
            </div>
            <div className="h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.bar}%` }}
                viewport={VP}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              />
            </div>
          </div>
        ))}

        <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko
              ? "Distressed 투자의 핵심 논리: 현재 채권 가격(예: 40센트)이 예상 회수율(예: 60센트)보다 낮으면 매수 기회. 선순위일수록 회수율이 높다."
              : "Core distressed logic: if current bond price (e.g. 40¢) is below expected recovery (e.g. 60¢), it's a buy opportunity. Senior claims recover more."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DealProcessTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      {/* Desktop: horizontal */}
      <div className="hidden sm:block">
        <div className="flex items-start gap-0">
          {DEAL_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {/* Connector line */}
              {i < DEAL_STEPS.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              {/* Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white dark:bg-gray-950 border-2 border-teal-300 dark:border-teal-700 shadow-sm mb-3"
              >
                {step.icon}
              </motion.div>
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: EASE }}
                className="text-center px-1"
              >
                <p className="text-[10px] font-black text-teal-600 dark:text-teal-400 mb-0.5">{step.num}</p>
                <p className="text-[11px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label(ko)}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="sm:hidden space-y-0">
        {DEAL_STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {/* Vertical connector */}
            {i < DEAL_STEPS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-teal-300 dark:border-teal-700 shadow-sm flex-shrink-0 z-10">
              {step.icon}
            </div>
            <div className="pb-5">
              <p className="text-[10px] font-black text-teal-600 dark:text-teal-400">{step.num}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Internal term links */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { slug: "book-building", ko: "북빌딩 ↗", en: "Book-building ↗" },
          { slug: "nic", ko: "NIC ↗", en: "NIC ↗" },
          { slug: "syndicate", ko: "신디케이트 ↗", en: "Syndicate ↗" },
        ].map((link) => (
          <Link
            key={link.slug}
            href={`${ko ? "" : "/en"}/market-101/${link.slug}`}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
          >
            {ko ? link.ko : link.en}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div
          key={cs.slug}
          variants={fadeUp(i * 0.07)}
          className={`rounded-2xl border p-5 ${cs.color}`}
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.tier(ko)}
                </span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">
                {cs.title(ko)}
              </h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {cs.tagline(ko)}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                {cs.lesson(ko)}
              </p>
              <Link
                href={`${ko ? "" : "/en"}/market/${cs.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-teal-600 dark:text-teal-400 hover:underline"
              >
                {ko ? "케이스 전체 보기" : "Read full case"} →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}



// ── Main Export ───────────────────────────────────────────────────────────────
export default function DcmOverviewClient({
  concept,
  lang,
}: {
  concept: MarketConcept;
  lang: Lang;
}) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── JSON-LD: Article ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: ko ? concept.title : concept.titleEn,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/dcm-overview"
                  : "https://dealstory.io/en/market-101/dcm-overview",
              },
            }),
          }}
        />

        {/* ── JSON-LD: FAQPage ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q(ko),
                acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
              })),
            }),
          }}
        />

        {/* ── Hero Header ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link
                href={ko ? "/market-101" : "/en/market-101"}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "DCM 개요" : "DCM Overview"}
              </span>
            </div>

            {/* Article type badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
              {ko ? "DCM — 입문 가이드" : "DCM — Introductory Guide"}
            </div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            {/* English subtitle for Korean page */}
            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {concept.titleEn}
              </motion.p>
            )}

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            {/* Meta row: reading time + tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Lang switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/dcm-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/dcm-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        {/* ── Chapter Navigation ── */}
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* ── Ch.1: DCM이란 ── */}
          <motion.section
            id="ch1"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[0].heading : concept.sections[0].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[0].body : concept.sections[0].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <MarketSizeCallout ko={ko} />
          </motion.section>

          {/* ── Ch.2: 세 플레이어 ── */}
          <motion.section
            id="ch2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[1].heading : concept.sections[1].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[1].body : concept.sections[1].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <ThreePlayerDiagram ko={ko} />
          </motion.section>

          {/* ── Ch.3: 크레딧 스펙트럼 ── */}
          <motion.section
            id="ch3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "크레딧 스펙트럼 — SSA부터 Distressed까지" : "Credit Spectrum — SSA to Distressed"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "모든 채권 발행사는 '크레딧 스펙트럼' 어딘가에 위치한다. 스펙트럼의 왼쪽 끝은 AAA 등급 정부·초국가기관(SSA)이고, 오른쪽 끝은 부도 직전의 디스트레스드 기업이다. 위치에 따라 투자자층, 스프레드, 담당 IB팀, 채권 구조가 완전히 달라진다."
                  : "Every bond issuer sits somewhere on the credit spectrum. The far left is AAA-rated governments and supranationals (SSA); the far right is distressed companies near default. Your position on this spectrum determines your investor base, spread, which IB team covers you, and your bond structure — entirely."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                {ko
                  ? <>
                      투자등급 채권(<Link href={ko ? "/market-101/investment-grade" : "/en/market-101/investment-grade"} className="text-teal-600 dark:text-teal-400 hover:underline font-medium">투자등급 (IG) ↗</Link>)과 하이일드 채권(<Link href={ko ? "/market-101/high-yield" : "/en/market-101/high-yield"} className="text-teal-600 dark:text-teal-400 hover:underline font-medium">하이일드 (HY) ↗</Link>)의 경계는 BBB-/BB+ 사이의 투자등급 경계선이다. 이 선을 기준으로 시장 구조, 투자자층, 유동성이 극적으로 달라진다.
                    </>
                  : <>
                      The divide between investment grade (<Link href="/en/market-101/investment-grade" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">Investment Grade ↗</Link>) and high yield (<Link href="/en/market-101/high-yield" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">High Yield ↗</Link>) sits at the BBB-/BB+ boundary. Cross that line and market structure, investor base, and liquidity change dramatically.
                    </>}
              </motion.p>
            </div>

            <CreditSpectrumViz ko={ko} />
          </motion.section>

          {/* ── Ch.4: LevFin — IG 아래의 세계 ── */}
          <motion.section
            id="ch4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LevFin — IG 아래의 세계" : "LevFin — Below Investment Grade"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "레버리지드 파이낸스(LevFin)는 DCM의 하위 영역으로, BB+ 이하 등급 또는 높은 레버리지를 가진 기업의 자금 조달을 전문으로 한다. 대표적인 거래 유형은 PE 스폰서의 LBO(레버리지드 바이아웃) 인수자금 조달이다."
                    : "Leveraged Finance (LevFin) is a sub-segment of DCM specializing in financing companies rated BB+ or below, or those carrying high leverage. The flagship transaction is the LBO — a private equity sponsor's leveraged buyout financing."}
                </motion.p>
                <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "LBO 구조는 자본 구조의 '워터폴(waterfall)'로 이해해야 한다: 청산 시 선순위부터 순서대로 상환되며, PE 자기자본은 마지막이다. 각 층의 수익률은 위험에 정비례 — 선순위 담보 대출은 가장 낮고, PE 자기자본은 20%+ IRR을 목표로 한다."
                    : "An LBO structure must be understood as a capital structure 'waterfall': in liquidation, senior claims are repaid first and PE equity is last. Return for each layer is directly proportional to risk — senior secured gets the lowest yield, PE equity targets 20%+ IRR."}
                </motion.p>
                <motion.p variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? <>
                        LevFin 업무의 핵심 차이점: IG 대비 두꺼운 코버넌트(재무약정) 패키지, PIK(이자 현물지급) 옵션, covenant-lite 구조, EBITDA 배수 분석이 중심이 된다. 스프레드 분석(<Link href={ko ? "/market-101/spread-basis" : "/en/market-101/spread-basis"} className="text-teal-600 dark:text-teal-400 hover:underline font-medium">스프레드 ↗</Link>)보다 신용 분석과 PE 협상이 훨씬 비중이 높다.
                      </>
                    : <>
                        Key LevFin distinctions vs IG: thick covenant packages, PIK (payment-in-kind) options, covenant-lite structures, and EBITDA multiple analysis are central. Credit analysis and PE negotiation dominate over spread analysis (<Link href="/en/market-101/spread-basis" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">Spread ↗</Link>).
                      </>}
                </motion.p>
              </div>
            </div>

            <LboStackWaterfall ko={ko} />
          </motion.section>

          {/* ── Ch.5: Distressed ── */}
          <motion.section
            id="ch5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Distressed — 가격이 달라지는 세계" : "Distressed — Where Pricing Changes Entirely"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "CCC 이하 등급에서는 채권 분석의 언어가 완전히 바뀐다. 더 이상 수익률(yield)이나 스프레드로 가격을 표현하지 않는다 — 대신 액면가 대비 가격(cents on dollar)이 핵심 지표가 된다. 50 cents on dollar는 1,000달러 액면가 채권을 500달러에 살 수 있다는 뜻이다."
                    : "Below CCC, the language of bond analysis changes completely. Price is no longer expressed in yield or spread — instead, cents on dollar becomes the key metric. 50 cents on dollar means buying a $1,000 face value bond for $500."}
                </motion.p>
                <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "디스트레스드 투자자의 핵심 분석 도구는 회수율(Recovery Rate) 추정이다. 부도 시 각 층위의 채권자가 얼마를 돌려받을 수 있는지가 매수·매도 판단의 기준이다. 역사적으로 선순위 담보채(senior secured)는 60–80%, 선순위 무담보채는 35–50%를 회수한다."
                    : "The core analytical tool for distressed investors is Recovery Rate estimation. How much each layer of creditors recovers in default determines buy/sell decisions. Historically, senior secured averages 60–80% recovery, senior unsecured 35–50%."}
                </motion.p>
                <motion.p variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "디스트레스드 펀드의 투자 논리: '현재 시장 가격(예: 40센트) < 예상 회수율(예: 65센트)'이면 매수. 구조조정 프로세스에서 적극적 역할을 맡기도 한다 — 채권을 대량 매집해 구조조정 협상에서 협상력을 갖는 전략이다."
                    : "Distressed fund logic: if current market price (e.g., 40¢) < expected recovery (e.g., 65¢), buy. They may also take an active role in restructuring — accumulating large bond positions to gain negotiating leverage in the restructuring process."}
                </motion.p>
              </div>
            </div>

            <RecoveryRateBars ko={ko} />

            {/* Evergrande callout */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🏗️</span>
                <div>
                  <p className="text-[12px] font-bold text-red-700 dark:text-red-300 mb-1">
                    {ko ? "실전 사례: Evergrande 달러채 (2021–2023)" : "Real Case: Evergrande USD Bonds (2021–2023)"}
                  </p>
                  <p className="text-[11px] text-red-600 dark:text-red-400 leading-relaxed">
                    {ko
                      ? "$300억+ 달러채 부도. CCC에서 D로 강등 후 채권 가격은 액면의 5–15센트로 폭락. 디스트레스드 펀드들이 구조조정 협상에 참여하며 recovery 극대화를 시도 — 글로벌 HY 시장 전체에 전이 위험을 촉발한 사례."
                      : "$30B+ USD bond default. Downgraded from CCC to D, bond prices collapsed to 5–15 cents on dollar. Distressed funds entered restructuring negotiations to maximize recovery — the case that triggered contagion fears across global HY markets."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Ch.6: 딜 프로세스 ── */}
          <motion.section
            id="ch6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[2].heading : concept.sections[2].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[2].body : concept.sections[2].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <DealProcessTimeline ko={ko} />
          </motion.section>

          {/* ── Ch.7: 실전 케이스 ── */}
          <motion.section
            id="ch7"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1">Ch.7</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실전 케이스 스터디" : "Case Studies"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "크레딧 스펙트럼의 각 구간이 실제로 어떻게 작동하는지 — 세 개의 케이스가 각각 다른 구간을 조명한다. SSA 발행, FIG 자본 구조, ALM 실패까지."
                : "How each segment of the credit spectrum actually works in practice — three cases, each illuminating a different zone. SSA issuance, FIG capital structure, and ALM failure."}
            </motion.p>

            <CaseStudyCards ko={ko} />
          </motion.section>


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />


          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map(f => ({ q: f.q(ko), a: f.a(ko) }))} />
            </motion.div>
          </motion.section>

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mb-5" style={{ background: accent }} />
            <div className="space-y-3">
              {concept.keyTerms.map((term, i) => {
                const displayTerm = ko ? term.term : term.termEn;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp()}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: accent }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                        {displayTerm}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                      {ko ? term.definition : term.definitionEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {RELATED_TERMS.map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>


        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />


          {/* ── References ── */}
          {concept.references && concept.references.length > 0 && (
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="border-t border-gray-200 dark:border-gray-700 pt-8"
            >
              <motion.h2
                variants={fadeUp()}
                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
              >
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Back links ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/dcm-ecosystem" : "/en/market-101/dcm-ecosystem"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "DCM 생태계 전체 지도 →" : "DCM Ecosystem Full Map →"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 dark:text-gray-500 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
