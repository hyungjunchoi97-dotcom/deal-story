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
  LineChart,
  Line,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Constants ─────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b";
const THIS_CH = "structured-cmbs";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Structured Series Nav ─────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"      : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"      : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"     : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"   : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기" : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"   : "Ch.6 Cases"      },
];

// ── Chapter anchors ───────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",        en: "Quick Summary"      },
  { id: "ch2", ko: "CMBS vs RMBS",     en: "CMBS vs RMBS"       },
  { id: "ch3", ko: "핵심 지표 3가지",  en: "Key Metrics"        },
  { id: "ch4", ko: "트랑쉐 구조",      en: "Tranche Structure"  },
  { id: "ch5", ko: "스페셜 서비서",    en: "Special Servicer"   },
  { id: "ch6", ko: "오피스 위기 2023", en: "Office Crisis 2023" },
];

// ── Quick Stats ───────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "$600B+",
    label: (ko: boolean) => ko ? "미국 CMBS 잔액 (2024)" : "US CMBS Outstanding (2024)",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",
  },
  {
    value: "65–75%",
    label: (ko: boolean) => ko ? "일반적인 CMBS 대출 LTV" : "Typical CMBS Loan LTV",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
  },
  {
    value: "1.25x",
    label: (ko: boolean) => ko ? "DSCR 최소 기준 (통상)" : "Minimum DSCR (typical)",
    color: "text-yellow-600 dark:text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700",
  },
  {
    value: "19%",
    label: (ko: boolean) => ko ? "미국 오피스 공실률 (2023 역대 최고)" : "US Office Vacancy (2023 all-time high)",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",
  },
];

// ── CMBS vs RMBS Comparison ───────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    feature:   (ko: boolean) => ko ? "담보 자산" : "Collateral",
    cmbs:      (ko: boolean) => ko ? "오피스, 리테일, 호텔, 물류, 아파트(멀티패밀리)" : "Office, retail, hotel, industrial, multifamily",
    rmbs:      (ko: boolean) => ko ? "주거용 주택 모기지" : "Residential mortgages",
  },
  {
    feature:   (ko: boolean) => ko ? "대출 건수" : "Loan count",
    cmbs:      (ko: boolean) => ko ? "수십~수백 건 (건당 금액 대형)" : "Tens to hundreds of loans (large per-loan size)",
    rmbs:      (ko: boolean) => ko ? "수만~수십만 건 (소액 다수)" : "Tens of thousands (small amounts, many loans)",
  },
  {
    feature:   (ko: boolean) => ko ? "LTV 기준" : "LTV standard",
    cmbs:      (ko: boolean) => ko ? "통상 65–75% (보수적)" : "Typically 65–75% (conservative)",
    rmbs:      (ko: boolean) => ko ? "80–95%도 가능 (FHA 보증 시)" : "Up to 80–95% possible (with FHA guarantee)",
  },
  {
    feature:   (ko: boolean) => ko ? "핵심 신용 지표" : "Key credit metric",
    cmbs:      (ko: boolean) => ko ? "DSCR (임대 수입 ÷ 원리금)" : "DSCR (rental income ÷ debt service)",
    rmbs:      (ko: boolean) => ko ? "DTI (부채 ÷ 개인 소득)" : "DTI (debt ÷ personal income)",
  },
  {
    feature:   (ko: boolean) => ko ? "만기 리스크" : "Maturity risk",
    cmbs:      (ko: boolean) => ko ? "Balloon Risk: 만기 시 일시 상환 → 리파이낸싱 불가 위험" : "Balloon Risk: bullet repayment at maturity → refinancing risk",
    rmbs:      (ko: boolean) => ko ? "조기 상환 리스크(Prepayment Risk) 위주" : "Mainly prepayment risk",
  },
  {
    feature:   (ko: boolean) => ko ? "부실 관리" : "Default management",
    cmbs:      (ko: boolean) => ko ? "스페셜 서비서가 개별 협상·매각 진행" : "Special Servicer negotiates and manages individually",
    rmbs:      (ko: boolean) => ko ? "표준화된 대출 수정 프로그램 적용" : "Standardized loan modification programs applied",
  },
];

// ── Key Metrics ───────────────────────────────────────────────────────────────
const KEY_METRICS = [
  {
    abbr: "LTV",
    full: (ko: boolean) => ko ? "Loan-to-Value (담보인정비율)" : "Loan-to-Value",
    formula: "대출금액 ÷ 부동산 감정가 × 100",
    formulaEn: "Loan Amount ÷ Appraised Property Value × 100",
    typical: (ko: boolean) => ko ? "통상 65–75%. 80% 초과 시 고위험 분류." : "Typically 65–75%. Above 80% classified as high-risk.",
    example: (ko: boolean) => ko
      ? "부동산 가치 $100M, 대출 $70M → LTV = 70%. 가치가 $85M으로 하락하면 LTV = 82% → 경보 구간"
      : "Property value $100M, loan $70M → LTV = 70%. If value drops to $85M, LTV = 82% → warning zone",
    icon: "🏢",
    color: "border-amber-300 dark:border-amber-700/60 bg-amber-50/50 dark:bg-amber-900/10",
    badge: "text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30",
  },
  {
    abbr: "DSCR",
    full: (ko: boolean) => ko ? "Debt Service Coverage Ratio (부채 상환 능력 비율)" : "Debt Service Coverage Ratio",
    formula: "NOI ÷ 연간 원리금 상환액",
    formulaEn: "NOI ÷ Annual Debt Service",
    typical: (ko: boolean) => ko ? "1.25x 이상 요구. 1.0x 미만 = 임대 수입으로 이자도 못 갚는 상태." : "Minimum 1.25x required. Below 1.0x = rental income cannot cover even interest.",
    example: (ko: boolean) => ko
      ? "연간 NOI $6.25M, 원리금 $5M → DSCR = 1.25x (간신히 기준 통과). NOI가 $4M으로 하락하면 DSCR = 0.80x → 디폴트 위험"
      : "Annual NOI $6.25M, debt service $5M → DSCR = 1.25x (just passing). If NOI drops to $4M, DSCR = 0.80x → default risk",
    icon: "📊",
    color: "border-orange-300 dark:border-orange-700/60 bg-orange-50/50 dark:bg-orange-900/10",
    badge: "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30",
  },
  {
    abbr: "NOI",
    full: (ko: boolean) => ko ? "Net Operating Income (순영업이익)" : "Net Operating Income",
    formula: "총 임대 수입 - 공실 손실 - 운영비 (관리비, 보험, 세금)",
    formulaEn: "Gross Rental Income − Vacancy Loss − Operating Expenses",
    typical: (ko: boolean) => ko ? "DSCR 계산의 분자. NOI 하락 → DSCR 하락 → 신용 악화의 연쇄 반응." : "The numerator in DSCR. NOI decline → DSCR decline → credit deterioration chain reaction.",
    example: (ko: boolean) => ko
      ? "연간 임대료 $10M, 공실 손실 $1.5M, 운영비 $2.25M → NOI = $6.25M. WeWork 철수로 임대료 $4M 감소 → NOI = $2.25M → 대재앙"
      : "Annual rent $10M, vacancy loss $1.5M, opex $2.25M → NOI = $6.25M. WeWork exit drops rent by $4M → NOI = $2.25M → disaster",
    icon: "💰",
    color: "border-yellow-300 dark:border-yellow-700/60 bg-yellow-50/50 dark:bg-yellow-900/10",
    badge: "text-yellow-700 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30",
  },
];

// ── Tranche Structure ─────────────────────────────────────────────────────────
const TRANCHES = [
  {
    tier: "Senior",
    rating: "AAA ~ A",
    pct: 65,
    desc: (ko: boolean) => ko
      ? "가장 먼저 원리금을 받는 최선순위. 부동산 가치가 35% 하락해도 원금 보전. 연기금·보험사가 주로 매입."
      : "First in line for principal and interest. Protected even if property values fall 35%. Bought mainly by pension funds and insurers.",
    color: "bg-amber-500",
    textColor: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",
  },
  {
    tier: "Mezzanine",
    rating: "BBB ~ BB",
    pct: 20,
    desc: (ko: boolean) => ko
      ? "Senior 손실 흡수 후 남은 현금 수령. 중간 위험·중간 수익. 헤지펀드·크레딧 펀드가 선호."
      : "Receives cash after Senior losses are absorbed. Middle risk-return. Preferred by hedge funds and credit funds.",
    color: "bg-orange-400",
    textColor: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
  },
  {
    tier: "B-Piece",
    rating: "B 이하",
    pct: 10,
    desc: (ko: boolean) => ko
      ? "손실 최우선 흡수(First Loss). 스페셜 서비서 지정권을 갖는 대신 고수익 추구. 소수 전문 투자자만 매입."
      : "Absorbs losses first (First Loss). Earns high yield in exchange for the right to appoint the Special Servicer. Bought only by specialized investors.",
    color: "bg-red-400",
    textColor: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",
  },
  {
    tier: "Equity Residual",
    rating: "Unrated",
    pct: 5,
    desc: (ko: boolean) => ko
      ? "모든 채무 지급 후 남은 잉여 현금 수령. 사실상 부동산 지분 투자와 동일한 위험. 원래 대출자(차주)가 보유."
      : "Receives residual cash after all debt payments. Equivalent risk to direct real estate equity. Typically retained by the original borrower.",
    color: "bg-gray-400",
    textColor: "text-gray-700 dark:text-gray-300",
    bg: "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700",
  },
];

// ── CMBS Asset Type Chart Data ─────────────────────────────────────────────────
const ASSET_TYPE_DATA_KO = [
  { name: "오피스",      value: 27, fill: "#f59e0b" },
  { name: "리테일",      value: 22, fill: "#fb923c" },
  { name: "멀티패밀리",  value: 18, fill: "#fbbf24" },
  { name: "호텔",        value: 15, fill: "#f97316" },
  { name: "산업·물류",   value: 10, fill: "#fcd34d" },
  { name: "기타",        value:  8, fill: "#d1d5db" },
];
const ASSET_TYPE_DATA_EN = [
  { name: "Office",      value: 27, fill: "#f59e0b" },
  { name: "Retail",      value: 22, fill: "#fb923c" },
  { name: "Multifamily", value: 18, fill: "#fbbf24" },
  { name: "Hotel",       value: 15, fill: "#f97316" },
  { name: "Industrial",  value: 10, fill: "#fcd34d" },
  { name: "Other",       value:  8, fill: "#d1d5db" },
];

// ── Office Vacancy Rate Data ──────────────────────────────────────────────────
const VACANCY_DATA = [
  { year: "2019", rate: 12.2 },
  { year: "2020", rate: 14.1 },
  { year: "2021", rate: 16.4 },
  { year: "2022", rate: 17.8 },
  { year: "2023", rate: 19.2 },
  { year: "2024", rate: 20.1 },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "CMBS와 일반 회사채의 차이는 무엇인가요?",
    a: "회사채는 기업의 전체 신용에 기반하지만, CMBS는 특정 부동산 자산 풀의 현금 흐름에만 기반합니다. 즉, 원래 대출을 실행한 은행이 파산해도 CMBS 투자자는 보호됩니다(파산 격리, Bankruptcy Remoteness). 또한 CMBS는 선·후순위 트랑쉐 구조로 분리돼 있어 투자자가 원하는 위험·수익 프로파일을 선택할 수 있습니다. 회사채는 이런 구조화 없이 기업 전체의 채무불이행 위험을 동등하게 부담합니다.",
  },
  {
    q: "스페셜 서비서는 누가 임명하며, 왜 B-Piece 바이어가 지정권을 갖나요?",
    a: "스페셜 서비서는 통상 B-Piece(최열후 트랑쉐) 매입자가 지정합니다. 이는 B-Piece 바이어가 손실을 가장 먼저 흡수하는 대신, 부실 대출 처리 과정에서 최대한 회수를 극대화할 인센티브와 권한을 갖기 때문입니다. 스페셜 서비서는 대출 수정(Loan Modification), 기한 연장(Extension), 부동산 처분(Foreclosure) 등을 결정하며 상당한 재량권을 갖습니다. 단, 시니어 트랑쉐 보유자에게 불리한 결정을 내릴 이해충돌 문제가 항상 존재합니다.",
  },
  {
    q: "Balloon Risk는 왜 CMBS에서 특히 중요한가요?",
    a: "대부분의 CMBS 대출은 10년 만기에 원금 일시 상환(Bullet Payment) 구조입니다. 즉, 10년 동안 이자만 내다가 만기에 원금 전액을 갚아야 합니다. 이때 새로운 대출(리파이낸싱)로 갚는 것이 일반적인데, 금리가 오르거나 부동산 가치가 하락한 상황에서는 리파이낸싱 자체가 불가능해집니다. 2023~2024년 미국 고금리 환경에서 수백억 달러 규모의 CMBS가 Balloon Risk에 노출됐으며, 특히 오피스 자산이 직격탄을 맞았습니다.",
  },
  {
    q: "CMBS에 투자하려면 어떤 경로를 활용하나요?",
    a: "일반 개인 투자자가 개별 CMBS 트랑쉐에 직접 투자하는 것은 현실적으로 어렵습니다(최소 투자 단위가 수백만 달러). 접근 방법으로는 ① CMBS 관련 ETF(예: iShares CMBS ETF) 투자, ② 상업용 부동산 REIT(리츠) 투자, ③ 크레딧 펀드·헤지펀드를 통한 간접 투자가 있습니다. 기관 투자자는 직접 1차 시장(발행 시) 또는 2차 시장에서 특정 트랑쉐를 매입합니다. 한국에서는 해외 부동산 펀드가 CMBS 트랑쉐에 투자하는 구조를 활용하기도 합니다.",
  },
  {
    q: "2023년 오피스 CMBS 위기는 해결됐나요?",
    a: "2024~2025년 현재도 오피스 CMBS 위기는 진행형입니다. 핵심 문제는 구조적입니다. 재택근무·하이브리드 근무의 정착으로 오피스 수요 자체가 영구적으로 감소했기 때문입니다. 단기 처방으로 일부 대출이 연장되고 있지만, LTV와 DSCR이 회복되지 않는 한 근본 해결이 어렵습니다. 부동산 자문사 CBRE에 따르면 미국 주요 도시 오피스 공실률은 2024년에도 20%를 넘어 역대 최고치를 경신 중입니다. 대형 도심 오피스를 주거용·혼합용으로 전환하는 '오피스 컨버전'이 대안으로 논의되고 있습니다.",
  },
];

const FAQ_EN = [
  {
    q: "What is the difference between CMBS and regular corporate bonds?",
    a: "Corporate bonds are backed by a company's overall credit, while CMBS is backed solely by the cash flows from a specific pool of real estate assets. This means CMBS investors are protected even if the originating bank goes bankrupt — a feature called bankruptcy remoteness. Additionally, CMBS is divided into senior and subordinate tranches, allowing investors to select their preferred risk-return profile. Corporate bonds carry no such structural separation; all bondholders equally share the company-wide default risk.",
  },
  {
    q: "Who appoints the Special Servicer, and why does the B-Piece buyer hold the designation right?",
    a: "The Special Servicer is typically appointed by the B-Piece (most junior tranche) buyer. Because B-Piece buyers absorb losses first, they have the strongest incentive — and authority — to maximize recovery on distressed loans. The Special Servicer has broad discretion over loan modifications, maturity extensions, and foreclosure decisions. However, this structure creates an inherent conflict of interest: decisions that benefit B-Piece holders can disadvantage senior tranche investors.",
  },
  {
    q: "Why is Balloon Risk especially important in CMBS?",
    a: "Most CMBS loans are structured as 10-year bullet maturities — borrowers pay interest only during the loan term and must repay the entire principal at maturity. Typically the borrower refinances to make this payment. But when interest rates spike or property values fall, refinancing becomes impossible. In the 2023–2024 US high-rate environment, hundreds of billions in CMBS were exposed to Balloon Risk, with office properties taking the hardest hit.",
  },
  {
    q: "How can investors gain exposure to CMBS?",
    a: "Direct investment in individual CMBS tranches is impractical for most retail investors (minimum investment is typically millions of dollars). Alternative routes include: ① CMBS-related ETFs (e.g., iShares CMBS ETF), ② commercial real estate REITs, ③ indirect exposure via credit funds or hedge funds. Institutional investors buy specific tranches directly in the primary market (at issuance) or in secondary trading. In Korea, offshore real estate funds sometimes invest through CMBS tranche structures.",
  },
  {
    q: "Has the 2023 office CMBS crisis been resolved?",
    a: "As of 2024–2025, the office CMBS crisis is ongoing. The core problem is structural: hybrid and remote work have permanently reduced office demand. Some loans have been extended as short-term fixes, but without recovery in LTV and DSCR, there is no fundamental solution. According to CBRE, US major-city office vacancy rates exceeded 20% in 2024, setting new all-time records. 'Office conversion' — repurposing downtown office buildings as residential or mixed-use — is being discussed as the longer-term answer.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function StructuredSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {STRUCTURED_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                item.slug === THIS_CH
                  ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
              }`}
            >
              {item.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function QuickStatsGrid({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {QUICK_STATS.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className={`rounded-xl border p-4 ${stat.bg}`}
        >
          <p className={`text-2xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">{stat.label(ko)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AnalogyBox({ ko, children }: { ko: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl border border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-900/10 p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-amber-500 text-lg">💡</span>
        <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">
          {ko ? "쉬운 비유" : "Analogy"}
        </span>
      </div>
      <div className="text-[14px] text-amber-900 dark:text-amber-200 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function InfoBox({ accent: _accent, icon, label, ko: _ko, children }: {
  accent: string;
  icon: string;
  label: string;
  ko: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl border border-amber-200 dark:border-amber-700/40 bg-amber-50/60 dark:bg-amber-900/10 p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  );
}

function ComparisonTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "CMBS vs RMBS 비교" : "CMBS vs RMBS Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left font-bold text-gray-500 dark:text-gray-400 w-28">{ko ? "항목" : "Feature"}</th>
              <th className="px-4 py-3 text-left font-bold text-amber-600 dark:text-amber-400">CMBS</th>
              <th className="px-4 py-3 text-left font-bold text-blue-600 dark:text-blue-400">RMBS</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "" : "bg-gray-50/50 dark:bg-gray-800/30"}`}
              >
                <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">{row.feature(ko)}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 leading-relaxed">{row.cmbs(ko)}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 leading-relaxed">{row.rmbs(ko)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function KeyMetricsCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {KEY_METRICS.map((metric, i) => (
        <motion.div
          key={metric.abbr}
          variants={fadeUp(i * 0.07)}
          className={`rounded-2xl border p-5 ${metric.color}`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl flex-shrink-0">{metric.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className={`text-[11px] font-black px-2 py-0.5 rounded ${metric.badge}`}>{metric.abbr}</span>
                <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{metric.full(ko)}</span>
              </div>
              <div className="mt-2 rounded-xl bg-white/60 dark:bg-gray-900/40 px-3 py-2">
                <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                  {ko ? metric.formula : metric.formulaEn}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-medium">
            {metric.typical(ko)}
          </p>
          <div className="rounded-xl bg-white/50 dark:bg-gray-900/30 px-4 py-3">
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1 font-bold uppercase tracking-widest">
              {ko ? "실제 계산 예시" : "Calculation Example"}
            </p>
            <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{metric.example(ko)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function TrancheStack({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      {/* Visual stack */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
        {TRANCHES.map((tr) => (
          <div
            key={tr.tier}
            className="flex items-center gap-4 px-5 py-4 border-b last:border-0 border-gray-200 dark:border-gray-700"
          >
            <div
              className={`flex-shrink-0 rounded-lg ${tr.color} flex items-center justify-center`}
              style={{ width: `${Math.max(tr.pct * 1.8, 36)}px`, height: "36px", minWidth: "36px" }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className={`text-[13px] font-black ${tr.textColor}`}>{tr.tier}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {tr.rating}
                </span>
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 ml-auto flex-shrink-0">
                  {tr.pct}%
                </span>
              </div>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{tr.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* B-Piece highlight */}
      <motion.div
        variants={fadeUp(0.15)}
        className="rounded-2xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎯</span>
          <span className="text-[11px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest">
            {ko ? "B-Piece 바이어의 역할" : "B-Piece Buyer's Role"}
          </span>
        </div>
        <div className="space-y-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
          {ko ? (
            <>
              <p><strong>Due Diligence 권한:</strong> B-Piece 바이어는 CMBS에 편입될 모든 대출에 대한 자체 심사를 수행합니다. 위험하다고 판단하면 해당 대출을 풀에서 제외(Kick-out)시킬 수 있습니다.</p>
              <p><strong>스페셜 서비서 지정권:</strong> 부실 대출이 발생하면 누가 처리할지 결정하는 스페셜 서비서를 지명합니다. 이것이 B-Piece의 핵심 권한입니다.</p>
              <p><strong>이해충돌 문제:</strong> B-Piece 바이어가 지정한 스페셜 서비서가 시니어 트랑쉐에 불리한 방향으로 결정을 내릴 수 있다는 구조적 긴장이 항상 존재합니다.</p>
            </>
          ) : (
            <>
              <p><strong>Due Diligence authority:</strong> The B-Piece buyer conducts independent underwriting on every loan to be included in the CMBS pool. If a loan is deemed too risky, the buyer can force its removal (kick-out).</p>
              <p><strong>Special Servicer designation:</strong> The B-Piece buyer names the Special Servicer who will manage distressed loans — this is the B-Piece's most powerful right.</p>
              <p><strong>Conflict of interest:</strong> A structural tension always exists: the Special Servicer appointed by the B-Piece buyer may make decisions that favor junior holders at the expense of senior tranche investors.</p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AssetTypeChart({ ko }: { ko: boolean }) {
  const data = ko ? ASSET_TYPE_DATA_KO : ASSET_TYPE_DATA_EN;
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "미국 CMBS 자산 유형별 구성 비율 (%)" : "US CMBS Composition by Asset Type (%)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data} margin={{ top: 4, right: 16, left: -8, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 35]}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}%`, ko ? "비중" : "Share"]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-2 leading-relaxed">
          {ko
            ? "출처: CBRE, Trepp 2024. 오피스(27%)와 리테일(22%)이 전체의 절반 — 고위험 자산 집중도 높음."
            : "Source: CBRE, Trepp 2024. Office (27%) and retail (22%) together account for nearly half — high concentration in stressed assets."}
        </p>
      </div>
    </motion.div>
  );
}

function OfficVacancyChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-red-200/60 dark:border-red-700/40">
      <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-b border-red-200/60 dark:border-red-700/40">
        <p className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-widest">
          {ko ? "미국 오피스 공실률 추이 (%)" : "US Office Vacancy Rate Trend (%)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={VACANCY_DATA} margin={{ top: 4, right: 16, left: -8, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#fee2e2" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              domain={[10, 22]}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}%`, ko ? "공실률" : "Vacancy Rate"]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #fecaca" }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#ef4444", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-2 leading-relaxed">
          {ko
            ? "코로나 이후 단 한 번도 회복 없이 상승 일변도. 2024년 20.1%로 역대 최고. 출처: CBRE Research."
            : "Non-stop rise since COVID — never recovered. Hit 20.1% in 2024, an all-time record. Source: CBRE Research."}
        </p>
      </div>
    </motion.div>
  );
}

function SpecialServicerSection({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {/* Master vs Special */}
      <motion.div variants={fadeUp(0)} className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest">
              {ko ? "마스터 서비서" : "Master Servicer"}
            </span>
          </div>
          <ul className="space-y-1.5 text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
            {(ko ? [
              "정상 대출 관리 (이자·원금 수납)",
              "투자자에게 현금 분배",
              "세금·보험 에스크로 관리",
              "분기별 재무 보고",
            ] : [
              "Manages performing loans (collecting interest & principal)",
              "Distributes cash to investors",
              "Manages tax and insurance escrow",
              "Quarterly financial reporting",
            ]).map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-[12px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest">
              {ko ? "스페셜 서비서" : "Special Servicer"}
            </span>
          </div>
          <ul className="space-y-1.5 text-[12px] text-red-700 dark:text-red-300 leading-relaxed">
            {(ko ? [
              "부실 대출 인수 (DSCR < 1.0x 또는 90일 연체)",
              "대출 조건 수정 (이자율·만기 변경)",
              "기한 연장 협상 (Maturity Extension)",
              "담보 부동산 처분 (Foreclosure·매각)",
            ] : [
              "Takes over distressed loans (DSCR < 1.0x or 90-day delinquency)",
              "Modifies loan terms (interest rate, maturity changes)",
              "Negotiates maturity extensions",
              "Disposes of collateral real estate (foreclosure / sale)",
            ]).map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-400 flex-shrink-0 mt-0.5">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Transfer trigger */}
      <motion.div variants={fadeUp(0.07)} className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/70 dark:bg-amber-900/10 p-4">
        <p className="text-[12px] font-black text-amber-600 dark:text-amber-400 mb-2 uppercase tracking-widest">
          {ko ? "스페셜 서비싱 이관 조건" : "Transfer-to-Special-Servicing Triggers"}
        </p>
        <div className="flex flex-wrap gap-2">
          {(ko ? [
            "DSCR 1.0x 미만",
            "LTV 80% 초과",
            "원리금 60일 이상 연체",
            "임차인 주요 철수",
            "만기 리파이낸싱 불가",
            "차주 파산 신청",
          ] : [
            "DSCR below 1.0x",
            "LTV above 80%",
            "60+ day delinquency",
            "Major tenant departure",
            "Maturity default (no refi)",
            "Borrower bankruptcy filing",
          ]).map((trigger, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
            >
              {trigger}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Conflict of interest */}
      <motion.div variants={fadeUp(0.12)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <p className="text-[12px] font-black text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
          {ko ? "이해충돌 문제" : "Conflict of Interest"}
        </p>
        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
          {ko
            ? "B-Piece 바이어(First Loss 보유자)가 지정한 스페셜 서비서는 이론적으로 B-Piece에 유리한 방향으로 부동산을 처리할 인센티브를 갖습니다. 예를 들어, 스페셜 서비서가 부동산을 서둘러 매각하면 시니어 트랑쉐 투자자는 회수액이 줄어들 수 있습니다. 반면 지연 처리로 시간을 벌면 B-Piece 수수료 수입은 늘어납니다. 이 구조적 이해충돌은 2008~2009년 금융위기와 2023년 오피스 CMBS 위기 과정에서 반복적으로 불거진 이슈입니다."
            : "The Special Servicer — appointed by the B-Piece (First Loss) holder — theoretically has an incentive to manage distressed properties in ways that favor the junior tranche. For example, a rushed sale may reduce recoveries for senior tranche investors, while delaying resolution generates more servicer fees for the B-Piece holder's affiliate. This structural conflict resurfaced repeatedly during both the 2008–2009 financial crisis and the 2023 office CMBS stress episode."}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function StructuredCmbsClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* JSON-LD: Article */}
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
                  ? "https://dealstory.io/market-101/structured-cmbs"
                  : "https://dealstory.io/en/market-101/structured-cmbs",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: (ko ? FAQ_KO : FAQ_EN).map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "CMBS" : "CMBS"}</span>
            </div>

            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
            >
              {ko ? "구조화 금융 시리즈" : "Structured Finance Series"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

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
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/structured-cmbs"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/structured-cmbs"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        <StructuredSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* ── Ch.1 30초 요약 ── */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "30초 요약" : "Quick Summary"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "CMBS = 상업용 부동산 모기지 묶음 → 채권" : "CMBS = Commercial Mortgages Bundled into Bonds"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko ? [
                  "CMBS(Commercial Mortgage-Backed Securities)는 은행이 오피스·리테일·호텔·물류창고 등 상업용 부동산에 실행한 수십~수백 건의 모기지를 한데 묶어 채권으로 발행한 것입니다. 기존 부동산 대출을 자본시장으로 끌어내 투자자에게 판매하는 구조입니다.",
                  "핵심 작동 원리는 '풀링과 트랑쉐화'입니다. 다양한 건물의 임대 수입을 하나의 풀로 묶어 다각화 효과를 만들고, 이 현금 흐름을 위험 수준에 따라 선·후순위로 나누어 각기 다른 투자자에게 판매합니다. 연기금은 안전한 시니어 트랑쉐를, 헤지펀드는 고수익 B-Piece를 삽니다.",
                  "부실 대출이 생기면 '스페셜 서비서'가 개입해 대출 수정·연장·매각을 결정합니다. 스페셜 서비서는 B-Piece 바이어가 지명하며, 이것이 CMBS 시장에서 가장 중요한 권력 구도입니다.",
                ] : [
                  "CMBS (Commercial Mortgage-Backed Securities) takes dozens to hundreds of mortgages on commercial properties — offices, retail centers, hotels, warehouses — and packages them into bonds. It moves traditional real estate loans into the capital markets, selling them to investors worldwide.",
                  "The core mechanism is pooling and tranching. Rental income streams from diverse properties are combined into a single pool for diversification, then sliced into senior and junior tranches based on risk. Pension funds buy the safe senior tranche; hedge funds pursue the high-yield B-Piece.",
                  "When loans go bad, the 'Special Servicer' steps in to modify, extend, or sell them. The Special Servicer is appointed by the B-Piece buyer — the most consequential power dynamic in the entire CMBS market.",
                ]).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <QuickStatsGrid ko={ko} />

            <AssetTypeChart ko={ko} />

            <AnalogyBox ko={ko}>
              {ko
                ? "CMBS는 아파트 담보 대출을 묶어 만든 주택담보증권(RMBS)의 '상업용 버전'입니다. 다만 차이가 있습니다. RMBS는 수십만 명의 개인 대출자가 있어 한 명이 망해도 영향이 미미합니다. CMBS는 건물이 수십~수백 채에 불과하고, 한 건물에 WeWork 같은 대형 임차인이 입주해 있을 수 있습니다. WeWork가 하나 나가면 건물 수입이 반 토막 나고, 그게 CMBS 전체를 흔들 수 있습니다."
                : "Think of CMBS as the 'commercial version' of residential mortgage-backed securities (RMBS). The key difference: RMBS pools hundreds of thousands of individual homeowners — one default barely registers. CMBS has only tens to hundreds of buildings, and a single building might house a major tenant like WeWork. When WeWork leaves, building income can halve overnight, sending shockwaves through the entire CMBS deal."}
            </AnalogyBox>
          </motion.section>

          {/* ── Ch.2 CMBS vs RMBS ── */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "CMBS vs RMBS" : "CMBS vs RMBS"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "상업용 vs 주거용 — 무엇이 다른가" : "Commercial vs Residential — What's Different"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko ? [
                  "CMBS와 RMBS는 '모기지를 묶어 채권으로 만든다'는 기본 구조는 같지만, 투자자가 분석해야 할 위험 요인이 완전히 다릅니다. RMBS는 차주의 소득(DTI)이 핵심이고, CMBS는 건물의 임대 수입 창출 능력(DSCR)이 핵심입니다.",
                  "가장 중요한 차이는 'Balloon Risk(만기 일시 상환 위험)'입니다. CMBS 대출은 통상 10년 만기이고, 원금 전액을 만기에 한꺼번에 상환합니다. 만기 시 새 대출(리파이낸싱)로 갚는 것이 일반적인데, 금리가 오르거나 건물 가치가 하락했다면 은행이 새 대출을 거부할 수 있습니다. 이것이 2023~2024년 오피스 CMBS의 핵심 문제입니다.",
                ] : [
                  "CMBS and RMBS share the same basic structure — pool mortgages, issue bonds — but the risk factors investors must analyze are entirely different. RMBS hinges on the borrower's income (DTI); CMBS hinges on the building's ability to generate rental income (DSCR).",
                  "The most critical difference is Balloon Risk. CMBS loans typically have 10-year maturities with the entire principal due in a lump sum at maturity. Refinancing to make that payment is the norm — but if rates spike or building values fall, banks may refuse to extend new loans. This is the exact mechanism behind the 2023–2024 office CMBS crisis.",
                ]).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <ComparisonTable ko={ko} />
          </motion.section>

          {/* ── Ch.3 핵심 지표 3가지 ── */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "핵심 지표 3가지" : "3 Key Metrics"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LTV · DSCR · NOI — CMBS 분석의 3가지 필수 지표" : "LTV · DSCR · NOI — The 3 Essential CMBS Metrics"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "CMBS 신용 분석은 세 가지 지표의 흐름을 추적하는 것으로 시작됩니다. 부동산 가치 대비 대출 비율(LTV), 임대 수입으로 원리금을 갚을 능력(DSCR), 그리고 그 임대 수입 자체의 순수익(NOI)입니다. 세 지표는 연쇄적으로 연결돼 있습니다. NOI가 하락하면 DSCR이 무너지고, DSCR이 무너지면 부동산 가치(LTV 분모)가 재평가됩니다."
                  : "CMBS credit analysis begins by tracking three interconnected metrics: LTV (loan vs. property value), DSCR (rental income's ability to cover debt payments), and NOI (the net rental income itself). They form a chain reaction: if NOI falls, DSCR collapses; if DSCR collapses, property value — the denominator in LTV — gets reassessed downward."}
              </motion.p>
            </div>

            <KeyMetricsCards ko={ko} />

            <InfoBox accent={ACCENT} icon="🔗" label={ko ? "세 지표의 연쇄 반응" : "Chain Reaction: The Three Metrics" } ko={ko}>
              {ko ? (
                <>
                  <p>
                    <strong>시나리오:</strong> 오피스 빌딩에 WeWork가 임차 중. 연간 임대료 $12M, 운영비 $2.75M, 공실 손실 $1M → <strong>NOI = $8.25M</strong>.
                    대출 잔액 $50M, 연 원리금 $5M → <strong>DSCR = 1.65x (양호)</strong>. 건물 감정가 $80M → <strong>LTV = 62.5% (안전)</strong>.
                  </p>
                  <p>
                    <strong>충격:</strong> WeWork 계약 해지 → 임대료 $12M → $6M으로 감소.
                    새 NOI = $6M - $2.75M = <strong>$3.25M</strong>.
                    새 DSCR = $3.25M ÷ $5M = <strong>0.65x (위험 — 이자도 못 갚는다)</strong>.
                    건물 재감정 → $80M → $45M.
                    새 LTV = $50M ÷ $45M = <strong>111% (심각한 초과 대출)</strong>.
                  </p>
                  <p>결과: 스페셜 서비서 이관, B-Piece 전액 손실, Mezzanine 부분 손실, Senior 원금 회수 불확실.</p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Scenario:</strong> Office building with WeWork as tenant. Annual rent $12M, opex $2.75M, vacancy loss $1M → <strong>NOI = $8.25M</strong>.
                    Loan balance $50M, annual debt service $5M → <strong>DSCR = 1.65x (healthy)</strong>. Appraised value $80M → <strong>LTV = 62.5% (safe)</strong>.
                  </p>
                  <p>
                    <strong>Shock:</strong> WeWork terminates lease → rent drops $12M → $6M.
                    New NOI = $6M − $2.75M = <strong>$3.25M</strong>.
                    New DSCR = $3.25M ÷ $5M = <strong>0.65x (critical — can't even cover interest)</strong>.
                    Property re-appraisal → $80M → $45M.
                    New LTV = $50M ÷ $45M = <strong>111% (severely over-leveraged)</strong>.
                  </p>
                  <p>Outcome: Transfer to Special Servicing, full B-Piece wipeout, partial Mezzanine loss, Senior recovery uncertain.</p>
                </>
              )}
            </InfoBox>
          </motion.section>

          {/* ── Ch.4 트랑쉐 구조 ── */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "트랑쉐 구조" : "Tranche Structure"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Senior · Mezzanine · B-Piece · Equity — 4계층 위험·수익 구조" : "Senior · Mezzanine · B-Piece · Equity — 4-Layer Risk-Return Structure"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko ? [
                  "CMBS는 동일한 부동산 풀에서 나오는 현금 흐름을 위험도에 따라 4계층으로 분리합니다. 손실은 아래부터(Equity Residual → B-Piece → Mezzanine), 수익은 위부터(Senior) 분배합니다. 이를 '선순위 지급(Sequential Pay)' 구조라고 합니다.",
                  "이 구조의 핵심은 각 트랑쉐가 서로 다른 투자자층을 겨냥한다는 것입니다. 위험 회피형 연기금은 AAA 시니어를, 수익 추구형 헤지펀드는 B-Piece를 삽니다. 발행 기관은 이렇게 다양한 투자자에게 판매함으로써 기존에는 비유동적이던 부동산 대출을 자본시장에서 소화할 수 있게 됩니다.",
                ] : [
                  "CMBS separates the cash flows from the same property pool into four layers based on risk. Losses hit from the bottom up (Equity Residual → B-Piece → Mezzanine), while payments flow from the top down (Senior first). This is the 'sequential pay' structure.",
                  "The key insight is that each tranche targets a different investor base. Risk-averse pension funds buy AAA Senior; yield-hungry hedge funds buy B-Piece. By selling to this diverse investor universe, issuers transform previously illiquid real estate loans into capital-market-friendly securities.",
                ]).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <TrancheStack ko={ko} />
          </motion.section>

          {/* ── Ch.5 스페셜 서비서 ── */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "스페셜 서비서" : "Special Servicer"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "부실 대출의 운명을 결정하는 숨겨진 권력자" : "The Hidden Power Player Who Decides the Fate of Distressed Loans"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko ? [
                  "CMBS 구조에서 대출 관리는 두 종류의 서비서가 담당합니다. 마스터 서비서는 정상 대출을 관리하고 투자자에게 현금을 분배하는 '일반 운영자'입니다. 반면 스페셜 서비서는 부실 대출이 발생했을 때 투입되는 '특수 처리반'입니다.",
                  "스페셜 서비서의 권한은 막강합니다. 이자율과 만기를 바꾸는 대출 수정, 원금의 일부를 탕감하는 협상, 최대 2년까지 만기를 연장하는 유예, 담보 부동산을 강제 매각하는 처분까지 모두 스페셜 서비서의 재량입니다. 이 과정에서 수백만~수십억 달러의 가치가 어디로 흘러가는지가 결정됩니다.",
                ] : [
                  "In the CMBS structure, loan management is split between two types of servicers. The Master Servicer is the 'day-to-day operator' — managing performing loans and distributing cash to investors. The Special Servicer is the 'special ops unit' deployed when loans go bad.",
                  "The Special Servicer's powers are sweeping: loan modifications (changing interest rates and maturity), principal write-downs, maturity extensions of up to two years, and forced sale of collateral real estate. Hundreds of millions — sometimes billions — of dollars flow based on their decisions.",
                ]).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <SpecialServicerSection ko={ko} />
          </motion.section>

          {/* ── Ch.6 오피스 CMBS 위기 2023 ── */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-red-500 dark:text-red-400 uppercase tracking-widest mb-1">
                {ko ? "오피스 CMBS 위기 2023" : "Office CMBS Crisis 2023"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "재택근무 → 공실률 급등 → DSCR 붕괴 → Brookfield 디폴트"
                  : "Remote Work → Soaring Vacancies → DSCR Collapse → Brookfield Default"}
              </h2>
              <div className="w-8 h-0.5 mt-3 bg-red-400" />
            </motion.div>

            <div className="pl-4 border-l-2 border-red-300/60 mb-2">
              <div className="space-y-3">
                {(ko ? [
                  "2023년은 미국 상업용 부동산 시장, 특히 오피스 CMBS에게 기억하기 싫은 해였습니다. 재택근무의 구조적 정착, 금리 인상, 그리고 WeWork 파산이 겹치면서 CMBS 시장의 취약한 연결 고리가 끊어졌습니다.",
                  "문제의 구조는 단순하지만 파괴력은 강력했습니다. 오피스 공실률 상승 → 임대 수입 감소 → NOI 하락 → DSCR이 1.0x 아래로 떨어짐 → 원리금 상환 불가 → 스페셜 서비서 이관 → 리파이낸싱 불가(이미 고금리 환경) → 디폴트. 이 도미노가 수천억 달러 규모의 오피스 CMBS에서 동시에 일어났습니다.",
                ] : [
                  "2023 was a year the US commercial real estate market — and office CMBS in particular — would rather forget. Structural entrenchment of remote work, rising interest rates, and the WeWork bankruptcy converged to snap the most fragile links in the CMBS chain.",
                  "The mechanism was simple but devastating: rising office vacancies → falling rental income → NOI decline → DSCR below 1.0x → inability to service debt → Special Servicer transfer → no refinancing available (rates too high) → default. This domino sequence played out simultaneously across hundreds of billions in office CMBS.",
                ]).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <OfficVacancyChart ko={ko} />

            {/* WeWork Case */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-8 rounded-2xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💀</span>
                <span className="text-[12px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest">
                  {ko ? "케이스 1 — WeWork 파산 (2023년 11월)" : "Case 1 — WeWork Bankruptcy (November 2023)"}
                </span>
              </div>
              <div className="space-y-3 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
                {(ko ? [
                  "WeWork는 2023년 11월 파산보호(Chapter 11)를 신청하면서 전 세계 700개 이상 지점의 임대 계약 재협상에 들어갔습니다. 문제는 WeWork가 오피스 CMBS 풀의 핵심 임차인이었다는 점입니다. 일부 건물에서는 WeWork가 전체 임대 공간의 30~50%를 차지했습니다.",
                  "WeWork가 계약을 해지하거나 임대료를 대폭 인하 협상하는 순간, 해당 건물의 NOI는 즉각 30~50% 감소합니다. $10M NOI 건물이 $5M NOI로 줄어들면 DSCR은 기존 1.5x에서 0.75x로 떨어집니다. 이 건물에 연계된 CMBS 트랑쉐는 즉시 부실 경보가 울립니다.",
                  "특히 뉴욕·샌프란시스코·시카고 등 대도시 WeWork 건물을 담보로 한 CMBS 트랑쉐는 등급 강등 러시를 맞았습니다. Moody's와 S&P는 WeWork 관련 노출도가 높은 CMBS 트랑쉐를 투자적격 등급에서 투기등급으로 대거 하향 조정했습니다.",
                ] : [
                  "WeWork filed for Chapter 11 bankruptcy protection in November 2023, entering lease renegotiations across 700+ global locations. The problem: WeWork was a core tenant in numerous office CMBS pools. In some buildings, WeWork occupied 30–50% of all leasable space.",
                  "The moment WeWork terminated or slashed lease terms, affected buildings saw NOI drop 30–50% immediately. A building generating $10M NOI might drop to $5M NOI — taking DSCR from a healthy 1.5x down to a distressed 0.75x. Any CMBS tranche tied to that building triggered an immediate distress alert.",
                  "CMBS tranches backed by WeWork-anchored buildings in New York, San Francisco, and Chicago faced a rating downgrade rush. Moody's and S&P mass-downgraded WeWork-exposed CMBS tranches from investment-grade to speculative — the crossing of the 'junk' threshold that forced many pension funds and insurance companies to sell.",
                ]).map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Brookfield Case */}
            <motion.div
              variants={fadeUp(0.13)}
              className="mt-6 rounded-2xl border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-900/10 p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🏙️</span>
                <span className="text-[12px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                  {ko
                    ? "케이스 2 — Brookfield CMBS 디폴트 (DTLA, $784M)"
                    : "Case 2 — Brookfield CMBS Default (DTLA, $784M)"}
                </span>
              </div>
              <div className="space-y-3 text-[13px] text-orange-800 dark:text-orange-200 leading-relaxed">
                {(ko ? [
                  "2023년 2월, 캐나다 대형 부동산 그룹 Brookfield Asset Management는 로스앤젤레스 다운타운(DTLA) 오피스 타워 2개 동에 연계된 $784M 규모의 CMBS 대출을 디폴트시켰습니다. 이는 2023년 미국에서 일어난 오피스 CMBS 디폴트 중 가장 상징적인 사건입니다.",
                  "Brookfield가 디폴트를 선택한 이유는 계산적이었습니다. 건물 가치가 대출 잔액 아래로 하락한 상황에서, 추가 자본을 투입해 리파이낸싱하는 것보다 키를 반납하는(give the keys back) 것이 경제적으로 합리적이었기 때문입니다. 두 건물의 평균 공실률은 55%를 넘었고, 새로운 임차인 유치에 2~3년이 걸릴 전망이었습니다.",
                  "계산 예시: 건물 취득가 $1.1B, 현재 감정가 $650M, 대출 잔액 $784M → LTV = 120.6% → 담보 부족 $134M. 연간 임대 수입 $24M, NOI $14M, 원리금 $52M → DSCR = 0.27x → 이자의 1/3도 못 갚는 상황. Brookfield는 감정가 $650M짜리 건물을 $784M에 지키려 추가 자금을 투입할 이유가 없었습니다.",
                  "이 디폴트는 PIMCO, Ares Management 등 해당 CMBS 트랑쉐 보유 기관에 수억 달러 규모의 평가손실을 안겼습니다. 특히 PIMCO는 이 디폴트로 상당한 손실을 공개 보고하며 오피스 CMBS 위험이 기관 투자자에게도 현실적 타격임을 증명했습니다.",
                ] : [
                  "In February 2023, Canadian real estate giant Brookfield Asset Management defaulted on $784M in CMBS loans tied to two downtown Los Angeles (DTLA) office towers. This became the most iconic single CMBS default event of 2023.",
                  "Brookfield's default was a calculated decision. With building values now below the outstanding loan balance, it was economically rational to give the keys back rather than inject fresh capital for a costly refinancing. Average vacancy across both towers exceeded 55%, with new tenant absorption projected to take 2–3 years.",
                  "The math: Original acquisition price $1.1B, current appraised value $650M, loan balance $784M → LTV = 120.6% → equity deficit of $134M. Annual rental income $24M, NOI $14M, annual debt service $52M → DSCR = 0.27x — barely covering one-third of interest. Brookfield had zero economic incentive to pour additional capital into a $650M building with a $784M mortgage.",
                  "The default inflicted hundreds of millions in mark-to-market losses on CMBS tranche holders including PIMCO and Ares Management. PIMCO's public reporting of significant losses on this position confirmed that office CMBS distress had become a real, measurable hit even for the world's largest institutional investors.",
                ]).map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>

              {/* Brookfield calculation box */}
              <div className="mt-4 rounded-xl bg-white/60 dark:bg-gray-900/40 p-4">
                <p className="text-[11px] font-black text-orange-600 dark:text-orange-400 mb-3 uppercase tracking-widest">
                  {ko ? "Brookfield DTLA — 핵심 지표 요약" : "Brookfield DTLA — Key Metrics Summary"}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: ko ? "대출 잔액" : "Loan Balance",     value: "$784M",  warn: false },
                    { label: ko ? "감정가" : "Appraised Value",      value: "$650M",  warn: true  },
                    { label: "LTV",                                   value: "120.6%", warn: true  },
                    { label: "NOI",                                   value: "$14M",   warn: true  },
                    { label: ko ? "원리금" : "Debt Service",          value: "$52M",   warn: false },
                    { label: "DSCR",                                  value: "0.27x",  warn: true  },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`rounded-lg px-3 py-2 ${item.warn ? "bg-red-100 dark:bg-red-900/30" : "bg-gray-100 dark:bg-gray-800/60"}`}
                    >
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                      <p className={`text-[15px] font-black ${item.warn ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Structural implications */}
            <motion.div variants={fadeUp(0.16)} className="mt-6 space-y-3">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300">
                {ko ? "2023 오피스 CMBS 위기의 구조적 시사점" : "Structural Implications of the 2023 Office CMBS Crisis"}
              </p>
              {(ko ? [
                "재택근무는 사이클이 아닌 구조적 변화: 금리가 내려가도 오피스 수요는 팬데믹 이전으로 돌아가지 않습니다. CMBS 분석가들은 이를 '수요의 영구적 하방 조정'으로 보고 있습니다.",
                "CMBS는 단순한 금리 위험이 아닌 자산 운용 위험: 전통적으로 CMBS는 금리 위험이 핵심이었지만, 오피스 위기는 임차인 변화·도심 쇠퇴·업무 방식 변화라는 비금융적 요인이 CMBS에 치명적일 수 있음을 보여줬습니다.",
                "스페셜 서비서의 한계: 부실 대출이 폭증하면 스페셜 서비서의 처리 역량도 포화됩니다. 2023년에는 스페셜 서비서로 이관된 오피스 CMBS 대출 잔액이 $80B을 넘어섰습니다.",
              ] : [
                "Remote work is structural, not cyclical: Even when interest rates fall, office demand will not return to pre-pandemic levels. CMBS analysts now factor in a 'permanent downward reset' in office space utilization.",
                "CMBS is not just interest rate risk — it is asset operations risk: Traditionally CMBS analysis focused on rate risk, but the office crisis revealed that non-financial factors — tenant behavior, urban decay, changing work culture — can be just as lethal.",
                "Special Servicer capacity limits: When distressed loans flood the system, even Special Servicers reach capacity. By late 2023, office CMBS loans under Special Servicing had exceeded $80B in outstanding balance.",
              ]).map((point, i) => (
                <div key={i} className="flex gap-2 text-[13px] text-gray-600 dark:text-gray-400">
                  <span style={{ color: ACCENT }} className="flex-shrink-0 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ── Related Concepts ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "structured-overview",  ko: "구조화 금융 개요",      en: "Structured Finance Overview" },
                { slug: "structured-abs",        ko: "Ch.1 ABS",              en: "Ch.1 ABS"                    },
                { slug: "structured-clo",        ko: "Ch.2 CLO",              en: "Ch.2 CLO"                    },
                { slug: "structured-waterfall",  ko: "Ch.4 워터폴",           en: "Ch.4 Waterfall"              },
                { slug: "structured-cdo",        ko: "Ch.5 CDO·위기",         en: "Ch.5 CDO·Crisis"             },
                { slug: "structured-cases",      ko: "Ch.6 케이스 스터디",    en: "Ch.6 Case Studies"           },
              ].map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          {/* ── References ── */}
          {concept.references && concept.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-amber-600 dark:hover:text-amber-400 hover:underline transition-colors">
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Back links ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-amber-600 dark:text-amber-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/structured-clo" : "/en/market-101/structured-clo"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "Ch.2 CLO" : "Ch.2 CLO"}
            </Link>
            <Link
              href={ko ? "/market-101/structured-waterfall" : "/en/market-101/structured-waterfall"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "Ch.4 워터폴 →" : "Ch.4 Waterfall →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
