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
const accent = "#0ea5e9"; // sky-500

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
const thisCh = 1;

// ── Quick Stats ───────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "$2.8조",
    label: (ko: boolean) => ko ? "글로벌 ABS 시장 잔액" : "Global ABS Market",
    detail: (ko: boolean) => ko ? "2024년 기준" : "Outstanding, 2024",
    color: "bg-sky-500",
    pct: 85,
  },
  {
    value: "$8,000억",
    label: (ko: boolean) => ko ? "미국 연간 ABS 발행" : "US Annual ABS Issuance",
    detail: (ko: boolean) => ko ? "SIFMA 기준, 2024" : "SIFMA data, 2024",
    color: "bg-teal-500",
    pct: 65,
  },
  {
    value: "100조원+",
    label: (ko: boolean) => ko ? "한국 ABS 잔액" : "Korea ABS Outstanding",
    detail: (ko: boolean) => ko ? "금감원 기준, 2024" : "FSS data, 2024",
    color: "bg-cyan-500",
    pct: 45,
  },
];

// ── ABS Types ─────────────────────────────────────────────────────────────────
const ABS_TYPES = [
  {
    type: (ko: boolean) => ko ? "자동차 ABS" : "Auto ABS",
    icon: "🚗",
    collateral: (ko: boolean) => ko ? "자동차 할부·리스 채권" : "Auto loans & leases",
    tenor: (ko: boolean) => ko ? "3~5년" : "3–5 years",
    rating: "AAA~B",
    size: (ko: boolean) => ko ? "미국 $1,200억/년" : "US $120B/yr",
    issuers: (_ko: boolean) => "Toyota, Hyundai Capital, Ford",
    risk: (ko: boolean) => ko ? "차량 잔존가치, 경기침체" : "Vehicle residual value, recession",
    color: "border-sky-300 bg-sky-50 dark:border-sky-700 dark:bg-sky-900/20",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  },
  {
    type: (ko: boolean) => ko ? "카드 ABS" : "Credit Card ABS",
    icon: "💳",
    collateral: (ko: boolean) => ko ? "신용카드 매출채권" : "Credit card receivables",
    tenor: (ko: boolean) => ko ? "회전 구조 (5~7년 전체)" : "Revolving (5–7yr total)",
    rating: "AAA~BB",
    size: (ko: boolean) => ko ? "미국 $600억/년" : "US $60B/yr",
    issuers: (_ko: boolean) => "Shinhan, AmEx, Citibank",
    risk: (ko: boolean) => ko ? "결제율 하락, 실업률 급등" : "Payment rate drop, unemployment spike",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    type: (ko: boolean) => ko ? "학자금 ABS (SLABS)" : "Student Loan ABS (SLABS)",
    icon: "🎓",
    collateral: (ko: boolean) => ko ? "학자금 대출 채권" : "Student loan receivables",
    tenor: (ko: boolean) => ko ? "10~20년 (졸업 후 상환)" : "10–20 years (post-graduation)",
    rating: "AAA~BB",
    size: (ko: boolean) => ko ? "미국 잔액 $1.8조" : "US $1.8T outstanding",
    issuers: (_ko: boolean) => "SoFi, Navient, Sallie Mae",
    risk: (ko: boolean) => ko ? "소득 불확실, 정책 리스크(탕감)" : "Income uncertainty, policy risk (forgiveness)",
    color: "border-cyan-300 bg-cyan-50 dark:border-cyan-700 dark:bg-cyan-900/20",
    badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  },
  {
    type: (ko: boolean) => ko ? "MBS (주택담보)" : "MBS (Residential)",
    icon: "🏠",
    collateral: (ko: boolean) => ko ? "주택담보대출 채권" : "Residential mortgage loans",
    tenor: (ko: boolean) => ko ? "15~30년 (중도 상환 위험)" : "15–30 years (prepayment risk)",
    rating: "AAA~에쿼티",
    size: (ko: boolean) => ko ? "미국 시장 $10조+" : "US market $10T+",
    issuers: (ko: boolean) => ko ? "Fannie Mae, Freddie Mac, HF(한국)" : "Fannie Mae, Freddie Mac, HF (Korea)",
    risk: (ko: boolean) => ko ? "금리 리스크, 주택가격 하락" : "Interest rate risk, home price decline",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  },
];

// ── Credit Enhancement ────────────────────────────────────────────────────────
const CREDIT_ENHANCEMENTS = [
  {
    name: (ko: boolean) => ko ? "선순위-후순위 구조 (Senior-Sub)" : "Senior-Subordinate Structure",
    icon: "🏗️",
    desc: (ko: boolean) =>
      ko
        ? "자산 풀 현금흐름을 AAA→AA→BBB→에쿼티 순으로 배분. 후순위 트랑쉐가 먼저 손실을 흡수해 선순위를 보호한다. 가장 강력한 신용 보강 도구. 선순위 75% 보호를 위해 후순위 25%가 쿠션 역할."
        : "Cash flows distributed AAA→AA→BBB→Equity. Subordinate tranches absorb losses first, protecting the senior. The most powerful credit enhancement tool. 25% subordination cushions 75% senior.",
    color: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20",
    dot: "bg-sky-500",
  },
  {
    name: (ko: boolean) => ko ? "과잉담보 (Overcollateralization, OC)" : "Overcollateralization (OC)",
    icon: "📦",
    desc: (ko: boolean) =>
      ko
        ? "채권 원금 $100 발행 시 담보 자산 $107~110을 SPV에 이전하는 방식. 초과 담보($7~10)가 첫 번째 손실 완충재. OC 비율이 임계치 아래로 떨어지면 '트리거' 발동 → 현금흐름이 후순위가 아닌 선순위 상환으로 전환."
        : "Transfer $107–110 of collateral to the SPV when issuing $100 of notes. The excess ($7–10) is the first loss buffer. When OC falls below a threshold, a 'trigger' fires → cash diverted from subordinate to senior repayment.",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
    dot: "bg-teal-500",
  },
  {
    name: (ko: boolean) => ko ? "초과 스프레드 (Excess Spread, XS)" : "Excess Spread (XS)",
    icon: "💰",
    desc: (ko: boolean) =>
      ko
        ? "담보 자산 수익률(예: 자동차 대출 7%)이 채권 쿠폰(예: 5%)보다 높을 때 발생하는 2%의 스프레드 차. 이 초과 수익이 매 기간 자동으로 손실을 흡수한다. 초과 스프레드가 클수록 신용 보강 효과가 크다."
        : "The spread differential when asset yield (e.g., 7% auto loan rate) exceeds the note coupon (e.g., 5%), generating 2% XS. This excess income automatically absorbs losses each period. Higher XS means stronger credit enhancement.",
    color: "border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20",
    dot: "bg-cyan-500",
  },
  {
    name: (ko: boolean) => ko ? "준비적립금 (Reserve Fund)" : "Reserve Fund",
    icon: "🛡️",
    desc: (ko: boolean) =>
      ko
        ? "발행 시 자산 풀의 0.5~2%를 현금으로 신탁 계좌에 예치. 갑작스러운 이자 부족분이나 단기 유동성 문제 해소에 사용. 자산 연체율이 임계치 초과 시 준비금이 먼저 소진되고 이후 에쿼티→메자닌 순으로 손실 흡수."
        : "0.5–2% of pool balance deposited in a trust account at issuance. Used for sudden interest shortfalls or short-term liquidity gaps. When delinquency exceeds threshold, reserve depletes first, then equity → mezzanine absorbs losses.",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
    dot: "bg-blue-500",
  },
];

// ── Korea ABS Market ──────────────────────────────────────────────────────────
const KOREA_ABS = [
  {
    type: (ko: boolean) => ko ? "주택담보 MBS" : "Residential MBS",
    issuer: (ko: boolean) => ko ? "한국주택금융공사(HF)" : "Korea Housing Finance Corp (HF)",
    note: (ko: boolean) =>
      ko
        ? "국내 최대 ABS 섹터. 정부 지원 구조로 AAA 등급. 보금자리론·적격대출 기초 자산."
        : "Largest Korean ABS sector. Government-backed AAA rating. Based on 'Bogeumjari' and qualifying mortgages.",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  },
  {
    type: (ko: boolean) => ko ? "자동차 ABS" : "Auto ABS",
    issuer: (ko: boolean) => ko ? "현대캐피탈, KB캐피탈, 신한캐피탈" : "Hyundai Capital, KB Capital, Shinhan Capital",
    note: (ko: boolean) =>
      ko
        ? "캐피탈사 자금 조달 핵심 수단. 현대캐피탈이 국내 최대 발행사. 분기별 정기 발행."
        : "Core funding tool for captive finance companies. Hyundai Capital is the largest domestic issuer with quarterly issuances.",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    type: (ko: boolean) => ko ? "카드채권 ABS" : "Card Receivables ABS",
    issuer: (ko: boolean) => ko ? "신한카드, 삼성카드, 현대카드" : "Shinhan Card, Samsung Card, Hyundai Card",
    note: (ko: boolean) =>
      ko
        ? "카드사 단기 유동성 확보 수단. 월 카드 매출채권 기초. 회전 구조 사용."
        : "Short-term liquidity tool for card companies. Monthly card receivables as collateral. Uses revolving structure.",
    badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  },
  {
    type: (ko: boolean) => ko ? "부동산 PF ABS" : "Real Estate PF ABS",
    issuer: (ko: boolean) => ko ? "시행사·건설사 SPC" : "Developer/Builder SPCs",
    note: (ko: boolean) =>
      ko
        ? "2022~2024년 금리 급등으로 부실 급증. 레고랜드 사태 → 한국 PF ABS 시장 신뢰 훼손. 시스템 리스크로 확산 우려."
        : "Sharp rise in delinquency from 2022–2024 rate hikes. 'Legoland crisis' damaged Korean PF ABS market trust. Systemic risk concerns grew.",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) =>
      ko ? "ABS와 일반 회사채의 가장 큰 차이는 무엇인가요?" : "What is the biggest difference between ABS and regular corporate bonds?",
    a: (ko: boolean) =>
      ko
        ? "일반 회사채는 발행 기업의 전체 신용에 기반합니다 — 기업이 부도나면 채권자도 손실을 봅니다. ABS는 발행사(오리지네이터)의 신용과 '분리된' 자산 풀의 현금흐름에 의존합니다. 오리지네이터가 파산해도 SPV에 이전된 자산은 파산 재단에 포함되지 않습니다(파산 격리). 이 덕분에 오리지네이터 신용등급이 BB라도, SPV를 통해 AAA 등급 채권을 발행할 수 있습니다."
        : "Regular corporate bonds rely on the issuer's overall creditworthiness — if the company defaults, bondholders suffer losses. ABS relies on the cash flows of an asset pool that is legally separated from the originator's credit. Even if the originator files for bankruptcy, the assets transferred to the SPV are ring-fenced from its bankruptcy estate. This is why an originator with a BB credit rating can issue AAA-rated bonds through an SPV.",
  },
  {
    q: (ko: boolean) =>
      ko ? "True Sale이 왜 ABS의 핵심 법적 개념인가요?" : "Why is True Sale the core legal concept in ABS?",
    a: (ko: boolean) =>
      ko
        ? "True Sale(진정한 매각)이란 오리지네이터가 채권을 SPV에 진정한 소유권 이전 방식으로 매각한 것을 의미합니다. True Sale이 성립해야 오리지네이터 파산 시 해당 채권이 파산 재단에 포함되지 않습니다(파산 격리, Bankruptcy Remoteness). 만약 법원이 해당 거래를 True Sale이 아닌 담보 제공(pledge)으로 재분류하면, 채권이 파산 재단으로 돌아가 ABS 투자자는 우선 청구권을 잃습니다. 이 때문에 신용평가사는 반드시 법무법인의 True Sale Opinion을 요구합니다."
        : "True Sale means the originator transfers genuine ownership of the receivables to the SPV (not merely pledging them as collateral). Only a True Sale achieves bankruptcy remoteness — the protection that keeps SPV assets out of the originator's bankruptcy estate. If a court recharacterizes the transfer as a pledge, receivables fall back into the bankruptcy estate and ABS noteholders lose their priority claim. Rating agencies universally require a True Sale opinion letter from a recognized law firm before assigning any rating.",
  },
  {
    q: (ko: boolean) =>
      ko ? "카드 ABS의 회전 구조(Revolving Structure)는 어떻게 작동하나요?" : "How does the revolving structure in credit card ABS work?",
    a: (ko: boolean) =>
      ko
        ? "카드 ABS의 회전 구조는 자동차 ABS와 근본적으로 다릅니다. 자동차 ABS는 고정된 채권 풀이 만기까지 상환되는 구조지만, 카드 ABS는 재투자 기간(Revolving Period) 동안 기존 채권이 결제되면 새로운 카드 사용 채권으로 대체됩니다. 예를 들어 A씨가 카드 결제를 하면, 그 금액만큼 SPV가 카드사로부터 새 채권을 매입해 풀을 유지합니다. 재투자 기간이 끝나면 새 채권 매입 없이 원금 상환 기간(Amortization Period)으로 전환됩니다. 핵심 분석 지표: 결제율(Payment Rate) — 카드 보유자가 매월 잔액의 몇 %를 갚는가. 결제율이 낮아지면 상환이 늦어져 유동성 부족 위험이 증가합니다."
        : "The revolving structure in card ABS works fundamentally differently from auto ABS. Auto ABS has a fixed pool that amortizes until maturity; card ABS replaces repaid receivables with new card spending receivables during the revolving period. For example, when a cardholder makes a payment, the SPV purchases new receivables from the card company in the same amount to maintain the pool. After the revolving period ends, no new purchases are made and the structure shifts to an amortization period. The key analytical metric is the Payment Rate — the percentage of outstanding balances cardholders repay monthly. A falling payment rate delays repayment and increases liquidity risk.",
  },
  {
    q: (ko: boolean) =>
      ko ? "2008년 금융위기에서 ABS가 어떤 역할을 했나요?" : "What role did ABS play in the 2008 financial crisis?",
    a: (ko: boolean) =>
      ko
        ? "2008년 위기의 중심은 서브프라임 모기지 기반 MBS와 이를 재포장한 CDO(부채담보부채권)였습니다. 문제의 핵심: ① 신용 기준 붕괴 — 소득 증명 없이 대출이 남발됐습니다. ② 상관관계 오판 — 전국 주택 가격이 동시에 하락하는 시나리오가 모델에 반영되지 않았습니다. ③ AAA 등급 남발 — 복잡한 구조 뒤에 숨어 실질 위험이 과소평가됐습니다. 결과적으로 AAA 등급 트랑쉐도 손실을 입었습니다. 반면 자동차 ABS·카드 ABS는 2008년 위기에서도 AAA 트랑쉐가 대부분 무손실을 지켰습니다 — 소비자 채권은 주택과 달리 지역별 상관관계가 낮기 때문입니다."
        : "The 2008 crisis centered on subprime mortgage MBS and the CDOs (Collateralized Debt Obligations) that re-packaged them. Core problems: ① Collapsed lending standards — loans were made without income verification. ② Correlation misjudgment — models didn't account for nationwide home price declines happening simultaneously. ③ AAA inflation — complexity masked actual risk, leading to over-rating. Even AAA tranches suffered losses. In contrast, auto ABS and credit card ABS largely protected their AAA tranches through the 2008 crisis — consumer receivables have lower geographic correlation than mortgages.",
  },
  {
    q: (ko: boolean) =>
      ko ? "한국 부동산 PF ABS 위기는 왜 발생했나요?" : "Why did Korea's real estate PF ABS crisis occur?",
    a: (ko: boolean) =>
      ko
        ? "한국 부동산 PF(프로젝트 파이낸싱) ABS 위기는 2022~2024년 금리 급등이 방아쇠를 당겼습니다. 구조적 문제: ① 토지 구매부터 분양 완료까지 PF 기간 동안 금리 변동 리스크를 충분히 헤지하지 않은 구조, ② 분양률 목표 달성 실패 시 신용 보강(보증) 제공자(증권사, 캐피탈사)에 리스크가 집중, ③ 2022년 10월 레고랜드 강원도 ABCP 채무불이행 — 지자체 보증 채권도 안전하지 않다는 인식이 퍼지며 시장 신뢰 붕괴. 결과: PF ABS 시장 신뢰 손상, 부동산 프로젝트 줄도산, 중소 건설사 유동성 위기. 한국 금융 당국은 정책 패키지로 개입했습니다."
        : "The Korean real estate PF (Project Finance) ABS crisis was triggered by the sharp 2022–2024 rate hikes. Structural issues: ① PF structures from land purchase to presale completion lacked adequate hedging of interest rate risk; ② When presale targets failed, risk concentrated on credit enhancement providers (securities firms, capital companies); ③ The October 2022 Legoland Gangwon ABCP default spread the perception that even government-backed bonds weren't safe, destroying market confidence. Outcome: damaged PF ABS market trust, cascade of real estate project failures, liquidity crises at mid-size construction companies. Korean financial authorities intervened with policy packages.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, title: "SIFMA US ABS Issuance and Outstanding", source: "SIFMA, 2024", url: "https://www.sifma.org/resources/research/us-abs-issuance-and-outstanding/" },
  { id: 2, title: "S&P Global Ratings — ABS Primer", source: "S&P Global, 2023", url: "https://www.spglobal.com/ratings/en/research/articles/230101-primer-asset-backed-securities" },
  { id: 3, title: "Fitch Ratings — Global ABS Outlook", source: "Fitch, 2024", url: "https://www.fitchratings.com/" },
  { id: 4, title: "금융감독원 — 자산유동화 현황", source: "FSS Korea, 2024", url: "https://www.fss.or.kr/" },
  { id: 5, title: "FDIC — Securitization Overview", source: "FDIC, 2023", url: "https://www.fdic.gov/bank/analytical/cfr/bank-research-conference/annual-14/2014bgrc-session4.pdf" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredAbsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = STRUCTURED_SERIES[thisCh - 1] ?? null;
  const next = STRUCTURED_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-sky-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-sky-400 hover:text-sky-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko ? concept.title : (concept.titleEn ?? concept.title)}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-700/40">
                {t}
              </span>
            ))}
          </div>
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 1 — 30초 요약
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 30초 요약 — ABS의 핵심 공식" : "1. 30-Second Summary — The ABS Formula"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "현대캐피탈의 자동차 할부채권이 AAA 등급 채권으로 변환되는 마법. 그 원리를 한 눈에."
              : "How Hyundai Capital auto loans transform into AAA-rated bonds. The principle at a glance."}
          </p>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {QUICK_STATS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{m.value}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{m.label(ko)}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                  <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{m.detail(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Key insight */}
          <div className="rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-bold text-sm text-sky-800 dark:text-sky-300 mb-1.5">
                  {ko ? "ABS가 존재하는 이유 — 한 줄" : "Why ABS Exists — One Line"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "은행이 자동차 할부 대출로 $100을 빌려줬을 때, 그 채권을 즉시 시장에 팔아(ABS 발행) 새로운 $100을 조달하면 대출을 계속 반복할 수 있습니다. 자본 효율성 극대화 + 위험 분산이 ABS의 핵심 가치입니다."
                    : "When a bank lends $100 in auto loans, it can immediately sell those receivables to the market (via ABS issuance) and recycle the $100 for new lending. Maximizing capital efficiency while distributing risk is the core value of ABS."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 2 — ABS란 무엇인가
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. ABS란 무엇인가 — 오리지네이터 → SPV → 투자자" : "2. What Is ABS? — Originator → SPV → Investors"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "ABS의 마법은 '발행사의 신용'이 아닌 '자산 자체의 현금흐름'에 의존한다는 점입니다."
              : "The magic of ABS is that it relies on the asset pool's own cash flows, not the issuer's credit."}
          </p>

          {/* ABS Flow Diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6 mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
              {ko ? "ABS 발행 구조" : "ABS Issuance Structure"}
            </p>
            {/* Step 1: Borrowers → Originator */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
              <div className="flex-1 rounded-lg border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/30 p-3 text-center">
                <div className="text-xl mb-1">👤👤👤</div>
                <p className="text-xs font-bold text-sky-800 dark:text-sky-300">
                  {ko ? "차주 (Borrowers)" : "Borrowers"}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                  {ko ? "자동차 할부·카드 사용자" : "Auto loan / card users"}
                </p>
              </div>
              <div className="flex flex-col items-center text-xs text-gray-400 font-mono">
                <span>→</span>
                <span className="text-[10px]">{ko ? "대출 이자·원금" : "Interest + principal"}</span>
              </div>
              <div className="flex-1 rounded-lg border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 p-3 text-center">
                <div className="text-xl mb-1">🏦</div>
                <p className="text-xs font-bold text-teal-800 dark:text-teal-300">
                  {ko ? "오리지네이터 (은행·캐피탈사)" : "Originator (Bank/Captive Finance)"}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                  {ko ? "현대캐피탈, 신한카드 등" : "Hyundai Capital, Shinhan Card, etc."}
                </p>
              </div>
            </div>
            {/* Arrow down */}
            <div className="flex justify-center my-2">
              <div className="flex flex-col items-center text-xs text-gray-400">
                <span className="text-lg">↓</span>
                <span className="text-[10px] font-mono">{ko ? "True Sale (진정한 매각)" : "True Sale"}</span>
              </div>
            </div>
            {/* SPV */}
            <div className="rounded-lg border-2 border-sky-400 dark:border-sky-600 bg-white dark:bg-gray-900 p-4 text-center mb-3">
              <div className="text-xl mb-1">🏗️</div>
              <p className="text-sm font-black text-sky-700 dark:text-sky-300">
                {ko ? "SPV (특수목적법인)" : "SPV (Special Purpose Vehicle)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                {ko
                  ? "파산 격리(Bankruptcy Remoteness) — 오리지네이터 파산에도 자산 보호"
                  : "Bankruptcy Remoteness — assets protected even if originator defaults"}
              </p>
            </div>
            {/* Arrow down */}
            <div className="flex justify-center my-2">
              <div className="flex flex-col items-center text-xs text-gray-400">
                <span className="text-lg">↓</span>
                <span className="text-[10px] font-mono">{ko ? "트랑쉐 발행 (Tranching)" : "Tranche Issuance"}</span>
              </div>
            </div>
            {/* Tranches → Investors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "AAA", color: "bg-emerald-500", investors: ko ? "은행·보험사" : "Banks / Insurers", pct: "70%" },
                { label: "AA / A", color: "bg-teal-500", investors: ko ? "기관 투자자" : "Institutional Investors", pct: "15%" },
                { label: "BBB", color: "bg-sky-500", investors: ko ? "크레딧 펀드" : "Credit Funds", pct: "10%" },
                { label: "에쿼티", color: "bg-rose-500", investors: ko ? "오리지네이터" : "Originator (retained)", pct: "5%" },
              ].map((t, i) => (
                <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-2.5 text-center">
                  <div className={`inline-block w-3 h-3 rounded-full ${t.color} mb-1`} />
                  <p className="text-xs font-black text-gray-900 dark:text-gray-50">{t.label}</p>
                  <p className="text-[10px] text-gray-500">{t.pct}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{t.investors}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-bold text-sky-700 dark:text-sky-300">{ko ? "핵심 원리: " : "Core principle: "}</span>
              {ko
                ? "BB 등급 현대캐피탈이 발행해도, SPV 내 자산(수백만 건의 자동차 할부)의 분산 효과와 신용 보강 덕분에 AAA 채권 발행이 가능합니다. 자산의 신용 > 발행사의 신용."
                : "Even though Hyundai Capital may be rated BB, the diversification of millions of auto loans inside the SPV plus credit enhancements enable AAA bond issuance. The asset's credit > the issuer's credit."}
            </p>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 3 — 자동차 ABS
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 자동차 ABS — Toyota & Hyundai Capital" : "3. Auto ABS — Toyota & Hyundai Capital"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "자동차 ABS는 가장 오래되고 규모가 큰 소비자 ABS 섹터입니다. 2024년 미국에서만 $1,200억 이상 발행됐습니다."
              : "Auto ABS is the oldest and largest consumer ABS sector. Over $120B issued in the US alone in 2024."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "Toyota Auto Receivables 2024-A — 트랑쉐 구조 예시" : "Toyota Auto Receivables 2024-A — Tranche Structure Example"}
            </p>
            <div className="space-y-2">
              {[
                { label: "A-1", rating: "AAA / P-1", size: "$450mn", rate: "5.35%", note: ko ? "단기(만기 1년 이내), MMF 수요" : "Short-term (<1yr), MMF demand", color: "bg-emerald-500", w: 90 },
                { label: "A-2", rating: "AAA",       size: "$380mn", rate: "5.41%", note: ko ? "2~3년 만기 선순위" : "2–3yr senior",                  color: "bg-teal-500",    w: 76 },
                { label: "A-3", rating: "AAA",       size: "$320mn", rate: "5.52%", note: ko ? "3~4년 만기 선순위" : "3–4yr senior",                  color: "bg-sky-400",     w: 64 },
                { label: "A-4", rating: "AAA",       size: "$185mn", rate: "5.68%", note: ko ? "4~5년 만기 선순위" : "4–5yr senior",                  color: "bg-blue-400",    w: 48 },
                { label: "B",   rating: "AA",        size: "$95mn",  rate: "5.85%", note: ko ? "후순위 메자닌" : "Subordinate mezzanine",              color: "bg-orange-400",  w: 32 },
                { label: "C",   rating: "A",         size: "$70mn",  rate: "6.24%", note: ko ? "가장 후순위 (에쿼티 위)" : "Most junior (above equity)", color: "bg-rose-400",    w: 20 },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 w-6 shrink-0">{t.label}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div className={`h-3 rounded-full ${t.color}`}
                      initial={{ width: 0 }} whileInView={{ width: `${t.w}%` }} viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }} />
                  </div>
                  <div className="shrink-0 min-w-[180px] sm:min-w-[220px] text-xs">
                    <span className="font-bold text-gray-800 dark:text-gray-200">{t.rating}</span>
                    <span className="text-gray-400 mx-1">|</span>
                    <span className="text-gray-600 dark:text-gray-400">{t.size}</span>
                    <span className="text-gray-400 mx-1">|</span>
                    <span className="font-mono text-gray-500">{t.rate}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-3">
              {ko ? "* 예시 구조 (실제 발행 조건과 다를 수 있음). OC 과잉담보 비율: ~3%, 잔존가치 부분 제외." : "* Illustrative structure (actual terms may differ). OC ratio ~3%, excluding residual value portion."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-sky-900/20 p-4">
              <p className="font-bold text-sm text-sky-800 dark:text-sky-300 mb-2">{ko ? "장점 (왜 우량 ABS인가)" : "Strengths (Why Premium ABS)"}</p>
              <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                <li>✅ {ko ? "수천~수십만 건 분산 — 개별 차주 부도 영향 미미" : "Thousands of loans — single default impact minimal"}</li>
                <li>✅ {ko ? "단기 만기(3~5년) — 경기 사이클 빠른 회전" : "Short duration (3–5yr) — fast economic cycle turnover"}</li>
                <li>✅ {ko ? "차량 담보 실물 자산 — 압류 후 중고차 매각 회수" : "Physical asset collateral — recover via used car liquidation"}</li>
                <li>✅ {ko ? "낮은 역사적 연체율 (평시 1~2%대)" : "Low historical delinquency (1–2% in normal times)"}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 p-4">
              <p className="font-bold text-sm text-orange-800 dark:text-orange-300 mb-2">{ko ? "리스크 요인" : "Risk Factors"}</p>
              <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                <li>⚠️ {ko ? "차량 잔존가치 급락 (중고차 시장 붕괴)" : "Vehicle residual value collapse (used car market crash)"}</li>
                <li>⚠️ {ko ? "금리 상승 → 고가 할부 부담 → 연체율 증가" : "Rate hikes → heavy installment burden → rising delinquency"}</li>
                <li>⚠️ {ko ? "서브프라임 자동차 대출 풀 품질 저하" : "Subprime auto loan pool quality deterioration"}</li>
                <li>⚠️ {ko ? "EV 전환 → 내연기관 중고차 가치 불확실성" : "EV transition → ICE vehicle residual value uncertainty"}</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 4 — 카드 ABS
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 카드 ABS — 회전 구조와 Payment Rate" : "4. Credit Card ABS — Revolving Structure & Payment Rate"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "카드 ABS의 회전 구조는 자동차 ABS와 근본적으로 다릅니다. 끊임없이 새로운 채권으로 교체되는 살아있는 풀."
              : "The revolving structure of card ABS is fundamentally different from auto ABS — a living pool constantly refreshed with new receivables."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "카드 ABS 라이프사이클" : "Credit Card ABS Lifecycle"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                {
                  phase: (ko: boolean) => ko ? "① 발행 & 재투자 기간" : "① Issuance & Revolving Period",
                  duration: (ko: boolean) => ko ? "보통 3~5년" : "Typically 3–5 years",
                  desc: (ko: boolean) => ko
                    ? "SPV가 신규 카드 매출채권 매입 → 상환된 원금으로 새 채권 교체. 담보 풀 규모 일정하게 유지."
                    : "SPV purchases new card receivables → repaid principal replaced with fresh receivables. Pool balance maintained.",
                  color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
                  dot: "bg-teal-500",
                },
                {
                  phase: (ko: boolean) => ko ? "② 상환 기간 (Amortization)" : "② Amortization Period",
                  duration: (ko: boolean) => ko ? "1~2년" : "1–2 years",
                  desc: (ko: boolean) => ko
                    ? "신규 채권 매입 중단. 회수된 원금을 선순위부터 순차 상환. 풀 규모 감소."
                    : "No new purchases. Collected principal repays notes sequentially from senior down. Pool shrinks.",
                  color: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20",
                  dot: "bg-sky-500",
                },
              ].map((p, i) => (
                <div key={i} className={`flex-1 rounded-xl border p-4 ${p.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${p.dot}`} />
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{p.phase(ko)}</p>
                  </div>
                  <p className="text-[10px] font-mono text-gray-400 mb-2">{p.duration(ko)}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{p.desc(ko)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Rate explanation */}
          <div className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">📊</span>
              <div>
                <p className="font-bold text-sm text-teal-800 dark:text-teal-300 mb-2">
                  {ko ? "핵심 지표: Payment Rate (결제율)" : "Key Metric: Payment Rate"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {ko
                    ? "카드 보유자가 매월 잔액의 몇 %를 결제하는지 나타내는 비율. 정상적으로는 15~25%대. Payment Rate가 10% 이하로 떨어지면 원금 회수가 지연되고, Amortization Period로 조기 전환(Early Amortization Trigger) 될 수 있습니다."
                    : "The percentage of outstanding balances that cardholders repay each month. Normally 15–25%. If Payment Rate falls below ~10%, principal collection slows and an Early Amortization Trigger may fire — converting the revolving period into accelerated repayment."}
                </p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {[
                    { label: ko ? "신한카드 카드채권 ABS" : "Shinhan Card ABS", rate: "~22%", status: "green" },
                    { label: ko ? "American Express ABS" : "American Express ABS", rate: "~27%", status: "green" },
                    { label: ko ? "위기 임계선" : "Crisis threshold", rate: "<10%", status: "red" },
                  ].map((r, i) => (
                    <div key={i} className={`rounded-lg p-2.5 border ${r.status === "green" ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20" : "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20"}`}>
                      <p className="font-bold text-gray-800 dark:text-gray-200">{r.rate}</p>
                      <p className="text-gray-500 dark:text-gray-400">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 5 — 학자금 ABS
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 학자금 ABS (SLABS) — SoFi와 미국 학자금 위기" : "5. Student Loan ABS (SLABS) — SoFi & US Student Debt Crisis"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "미국 학자금 부채 $1.8조의 일부가 SLABS(Student Loan ABS)를 통해 자본시장으로 이전됩니다. 가장 논란이 많은 ABS 섹터."
              : "A portion of the US's $1.8T student debt is transferred to capital markets via SLABS. The most controversial ABS sector."}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
              <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-3">{ko ? "정부 보장 SLABS vs 사모 SLABS" : "Gov-Guaranteed SLABS vs Private SLABS"}</p>
              <div className="space-y-2 text-xs">
                {[
                  {
                    label: ko ? "정부 보장 (FFELP)" : "Gov-Backed (FFELP)",
                    note: ko ? "미 정부 97% 보장. AAA 등급 획득 용이. Navient·Sallie Mae 주 발행사. 2010년 폐지 후 기존 대출 풀만 잔존." : "97% US government guarantee. Easily achieves AAA. Navient, Sallie Mae main issuers. Discontinued post-2010; existing pools remain.",
                    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
                  },
                  {
                    label: ko ? "민간 학자금 (Private Student Loan ABS)" : "Private Student Loan ABS",
                    note: ko ? "정부 보장 없음. 차주 신용도·소득 수준 분석 필수. SoFi 등 FinTech 회사가 고소득 졸업생 풀로 발행. 상위 대학 출신 의사·변호사 등 우량 풀 구성 가능." : "No government guarantee. Borrower creditworthiness and income analysis critical. SoFi and FinTechs issue using high-income graduate pools. Can construct premium pools from doctors, lawyers from top schools.",
                    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mr-2 ${item.badge}`}>{item.label}</span>
                    <p className="text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 p-4">
              <p className="font-bold text-sm text-cyan-800 dark:text-cyan-300 mb-3">{ko ? "SoFi 학자금 ABS 특징" : "SoFi Student Loan ABS Characteristics"}</p>
              <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                <li>📚 {ko ? "기초 자산: 학자금 재융자(Refinance) 대출 — 고금리 연방 대출을 낮은 금리로 재융자" : "Collateral: student loan refinancing — replacing high-rate federal loans with lower-rate private loans"}</li>
                <li>🎓 {ko ? "차주 프로파일: 평균 소득 $120K+, 상위 20개 대학 출신 비중 높음" : "Borrower profile: avg income $120K+, high % from top 20 universities"}</li>
                <li>💼 {ko ? "연체율: 연방 평균(3~5%) 대비 낮은 1~1.5% 수준 유지" : "Delinquency: maintains 1–1.5% vs federal average of 3–5%"}</li>
                <li>⚖️ {ko ? "정책 리스크: 바이든 학자금 탕감 정책 → 민간 ABS는 영향 없으나 연방 대출 탕감은 FFELP ABS 담보 축소 유발" : "Policy risk: Biden forgiveness programs don't affect private SLABS but federal loan forgiveness shrinks FFELP ABS collateral"}</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
            <div className="flex items-start gap-2">
              <span className="text-lg">⚠️</span>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-amber-800 dark:text-amber-300">{ko ? "학자금 위기 맥락: " : "Student debt crisis context: "}</span>
                {ko
                  ? "미국 학자금 부채 $1.8조 중 연방 대출이 $1.6조. 전체 차주의 약 40%가 SAVE/PSLF 등 소득 연계 상환 프로그램 이용 중. 민간 SLABS 투자자 입장에서 정책 불확실성이 핵심 리스크입니다."
                  : "Of the US's $1.8T student debt, $1.6T is federal. About 40% of borrowers use income-driven repayment programs (SAVE, PSLF). For private SLABS investors, policy uncertainty is the key risk."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 6 — 신용 보강 도구
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 신용 보강 도구 4가지 — 어떻게 BB 자산이 AAA가 되나" : "6. Four Credit Enhancement Tools — How BB Assets Become AAA"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "신용 보강이 ABS의 핵심 마법입니다. 이 네 가지 도구의 조합이 자산 등급 이상의 채권을 만들어냅니다."
              : "Credit enhancement is the core magic of ABS. The combination of these four tools creates bonds rated above their collateral."}
          </p>

          <div className="space-y-4">
            {CREDIT_ENHANCEMENTS.map((ce, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${ce.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{ce.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${ce.dot}`} />
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{ce.name(ko)}</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ce.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credit enhancement visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mt-5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              {ko ? "신용 보강 적층 효과 — 자동차 ABS 예시 ($1,000mn 풀)" : "Stacked Credit Enhancement — Auto ABS Example ($1,000mn pool)"}
            </p>
            <div className="space-y-1.5">
              {[
                { label: ko ? "담보 풀 가치" : "Collateral Pool Value", val: "$1,050mn", note: ko ? "(과잉담보 $50mn)" : "(OC: $50mn)", color: "bg-emerald-500", w: 100 },
                { label: ko ? "초과 스프레드 연간" : "Annual Excess Spread", val: "~$20mn/yr", note: ko ? "(7% 자산 - 5% 쿠폰 × 원금)" : "(7% asset - 5% coupon × principal)", color: "bg-teal-500", w: 85 },
                { label: ko ? "준비적립금" : "Reserve Fund", val: "$10mn", note: ko ? "(1% 초기 적립)" : "(1% initial deposit)", color: "bg-sky-500", w: 72 },
                { label: ko ? "후순위 트랑쉐" : "Subordinate Tranches", val: "$200mn", note: ko ? "(에쿼티+BB+BBB 합계 20%)" : "(Equity+BB+BBB combined 20%)", color: "bg-blue-500", w: 58 },
                { label: ko ? "AAA 선순위 채권" : "AAA Senior Notes", val: "$800mn", note: ko ? "(총 보호 = 신용 보강 합계)" : "(Total protection = combined enhancements)", color: "bg-indigo-500", w: 40 },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <div className={`h-3 rounded-full ${row.color}`} style={{ width: `${row.w}%` }} />
                  </div>
                  <div className="shrink-0 min-w-[200px] sm:min-w-[260px] text-xs">
                    <span className="font-bold text-gray-800 dark:text-gray-200">{row.val}</span>
                    <span className="text-gray-400 mx-1">—</span>
                    <span className="text-gray-600 dark:text-gray-400">{row.label}</span>
                    <span className="text-[10px] text-gray-400 block">{row.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 7 — 한국 ABS 시장
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 ABS 시장 — MBS·카드채권·부동산 PF 위기" : "7. Korean ABS Market — MBS, Card Receivables & Real Estate PF Crisis"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국 ABS 시장은 100조원 이상 규모. 하지만 2022~2024년 부동산 PF ABS 위기가 시스템 리스크로 부상했습니다."
              : "Korea's ABS market exceeds ₩100T outstanding. However, the 2022–2024 real estate PF ABS crisis emerged as a systemic risk."}
          </p>

          <div className="space-y-3 mb-6">
            {KOREA_ABS.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${item.badge}`}>
                    {item.type(ko)}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">{item.issuer(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🔴</span>
              <div>
                <p className="font-bold text-sm text-rose-800 dark:text-rose-300 mb-2">
                  {ko ? "레고랜드 사태 (2022년 10월) — 한국 ABS 시장의 분기점" : "Legoland Crisis (Oct 2022) — Turning Point for Korean ABS Market"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "강원도가 레고랜드 개발 SPC의 ABCP(자산담보부기업어음) 2,050억원에 대한 채무보증을 이행하지 않겠다고 발표 → 시장 충격. '지자체 보증도 안전하지 않다'는 인식 확산 → PF ABCP 시장 전반에 신뢰 위기 → 단기 자금 시장(CP·ABCP) 마비 우려. 한국 정부는 50조원 이상 유동성 지원 패키지로 대응."
                    : "Gangwon Province announced it would not honor its debt guarantee on ₩205B of ABCP issued by the Legoland development SPC → market shock. The perception that 'even local government guarantees are unsafe' spread → crisis of confidence across the PF ABCP market → risk of short-term money market (CP/ABCP) paralysis. The Korean government responded with a ₩50T+ liquidity support package."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            ABS 종류 비교표
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "ABS 종류 비교 — 자동차 / 카드 / 학자금 / MBS" : "ABS Types Comparison — Auto / Card / Student / MBS"}
          </h2>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "항목" : "Item"}</th>
                    {ABS_TYPES.map((t, i) => (
                      <th key={i} className="text-left px-4 py-3">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${t.badge}`}>{t.icon} {t.type(ko)}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: (ko: boolean) => ko ? "담보" : "Collateral",      fn: (t: (typeof ABS_TYPES)[0]) => t.collateral(ko) },
                    { key: (ko: boolean) => ko ? "만기" : "Tenor",            fn: (t: (typeof ABS_TYPES)[0]) => t.tenor(ko)     },
                    { key: (_ko: boolean) => "Rating",                        fn: (t: (typeof ABS_TYPES)[0]) => t.rating         },
                    { key: (ko: boolean) => ko ? "규모" : "Market Size",      fn: (t: (typeof ABS_TYPES)[0]) => t.size(ko)       },
                    { key: (ko: boolean) => ko ? "주요 발행사" : "Issuers",   fn: (t: (typeof ABS_TYPES)[0]) => t.issuers(ko)   },
                    { key: (ko: boolean) => ko ? "주요 리스크" : "Key Risk",  fn: (t: (typeof ABS_TYPES)[0]) => t.risk(ko)       },
                  ].map((row, ri) => (
                    <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs whitespace-nowrap">{row.key(ko)}</td>
                      {ABS_TYPES.map((t, ti) => (
                        <td key={ti} className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.fn(t)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion
            items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))}
            accentColor={accent}
          />
        </motion.section>

        {/* ══ 관련 마켓 케이스 ══════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "관련 마켓 케이스" : "Related Market Cases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "이 챕터의 개념이 실전에서 어떻게 작동했는지 확인하세요." : "See how the concepts in this chapter played out in real deals."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {([
              { slug: "bowie-bonds", icon: "🎸", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "보위 본드 (1997) — 미래 로열티를 증권화하다" : "Bowie Bonds (1997) — Securitizing Future Royalties", desc: (k: boolean) => k ? "음악 로열티를 ABS로 만든 전설적 딜. 나프스터로 담보 가치가 무너진 구조화금융의 교과서 케이스." : "The legendary deal turning music royalties into ABS. A textbook case where Napster destroyed the collateral value.", year: "1997", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
              { slug: "hertz-fleet-abs-2020", icon: "🚗", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다" : "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy", desc: (k: boolean) => k ? "$140억 자동차 ABS. Hertz 파산에도 AAA 전액 회수 — True Sale과 파산 격리의 역대 최대 실전 증명." : "$14B auto ABS. Hertz went bankrupt but AAA fully recovered — the largest real-world proof of True Sale.", year: "2020", badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300" },
            ]).map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                <Link href={`${ko ? "" : "/en"}/market/${c.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 hover:border-sky-400 dark:hover:border-sky-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${c.badge}`}>{c.category(ko)}</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-50 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1">{c.title(ko)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc(ko)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-[10px] text-gray-400">{c.year}</span>
                    <span className="text-xs text-gray-400 group-hover:text-sky-500 transition-colors">{ko ? "읽기" : "Read"} →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 이전 / 다음 챕터 네비게이션 ──────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="flex justify-between gap-4 mb-10">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 hover:border-sky-400 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{ko ? "이전" : "Previous"}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">← {prev.title(ko)}</p>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 hover:border-sky-400 transition-colors text-right">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{ko ? "다음" : "Next"}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{next.title(ko)} →</p>
            </Link>
          ) : <div className="flex-1" />}
        </motion.div>

        {/* ── ShareButtons (bottom) ────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-10">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
        </motion.div>

        {/* ── 출처 ────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
            {ko ? "참고 자료" : "References"}
          </h3>
          <div className="space-y-1.5">
            {SOURCES.map((s) => (
              <div key={s.id} className="flex items-start gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span className="shrink-0 font-mono">[{s.id}]</span>
                <span>{s.title} — {s.source}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
