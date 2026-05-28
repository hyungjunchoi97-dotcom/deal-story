"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#3182f6";

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"          : "ECM Overview"       },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"       },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"     },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"    : "Ch.3 Valuation"     },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 IPO 프로세스"  : "Ch.4 IPO Process"   },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"        : "Ch.5 Book-Building" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"    : "Ch.6 Post-IPO"      },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"      : "Ch.7 Follow-on"     },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"      : "Ch.8 Convertible"   },
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"      : "Ch.9 Intl Listing"  },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장"  : "Ch.10 SPAC·Direct"  },
];

const thisCh = 6;

// ── Lock-up Overhang Schedule ─────────────────────────────────────────────────
const LOCKUP_SCHEDULE = [
  {
    day: "D+0",
    label: (ko: boolean) => ko ? "상장일" : "Listing Day",
    pct: 30,
    cumPct: 30,
    who: (ko: boolean) => ko ? "공모 물량 (유통 가능)" : "Public Float (tradeable)",
    color: "bg-blue-400",
    textColor: "text-blue-700 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    note: (ko: boolean) => ko ? "기관·리테일 배분 물량" : "Institutional + retail allocation",
    risk: (ko: boolean) => ko ? "낮음" : "Low",
    riskColor: "text-green-600 dark:text-green-400",
  },
  {
    day: "D+90",
    label: (ko: boolean) => ko ? "D+90: 앵커 락업 해제" : "D+90: Anchor Lock-up",
    pct: 15,
    cumPct: 45,
    who: (ko: boolean) => ko ? "앵커 투자자" : "Anchor Investors",
    color: "bg-violet-400",
    textColor: "text-violet-700 dark:text-violet-300",
    borderColor: "border-violet-200 dark:border-violet-700",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    note: (ko: boolean) => ko ? "앵커 의무 90일 종료 → 매도 가능" : "90-day anchor obligation ends",
    risk: (ko: boolean) => ko ? "중간" : "Medium",
    riskColor: "text-amber-600 dark:text-amber-400",
  },
  {
    day: "D+180",
    label: (ko: boolean) => ko ? "D+180: 최대 물량 폭탄" : "D+180: Maximum Supply",
    pct: 40,
    cumPct: 85,
    who: (ko: boolean) => ko ? "PE + 창업자 + 임원" : "PE + Founders + Executives",
    color: "bg-orange-400",
    textColor: "text-orange-700 dark:text-orange-300",
    borderColor: "border-orange-300 dark:border-orange-700",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    note: (ko: boolean) => ko ? "최대 위험 이벤트 — 전체 물량의 40%p 해제" : "Maximum risk event — 40%p of total supply released",
    risk: (ko: boolean) => ko ? "매우 높음" : "Very High",
    riskColor: "text-red-600 dark:text-red-400",
  },
  {
    day: "D+365",
    label: (ko: boolean) => ko ? "D+365: 스톡옵션" : "D+365: Stock Options",
    pct: 15,
    cumPct: 100,
    who: (ko: boolean) => ko ? "임직원 스톡옵션" : "Employee Stock Options",
    color: "bg-rose-400",
    textColor: "text-rose-700 dark:text-rose-300",
    borderColor: "border-rose-200 dark:border-rose-700",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    note: (ko: boolean) => ko ? "행사 가격 이상이면 매도 압력" : "Selling pressure if options are in-the-money",
    risk: (ko: boolean) => ko ? "중간" : "Medium",
    riskColor: "text-amber-600 dark:text-amber-400",
  },
];

// ── Failure Cases ─────────────────────────────────────────────────────────────
const FAILURE_CASES = [
  // TYPE 1a: WeWork
  {
    type: 1,
    typeLabel: (ko: boolean) => ko ? "Type 1 — 발행 철회" : "Type 1 — Pulled IPO",
    typeColor: "border-red-300 bg-red-50 dark:bg-red-900/20",
    typeBadge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    emoji: "🏢",
    company: "WeWork",
    year: 2019,
    subtitle: (ko: boolean) => ko
      ? "역대 최대 IPO 철회 — $47bn → 파산"
      : "Largest IPO withdrawal ever — $47bn → Bankruptcy",
    metrics: [
      { label: (ko: boolean) => ko ? "S-1 제출 시 희망 밸류" : "Hoped-for valuation", value: "$47bn" },
      { label: (ko: boolean) => ko ? "철회 직전 수정 밸류" : "Revised before withdrawal", value: "$10bn-" },
      { label: (ko: boolean) => ko ? "2021 SPAC 상장" : "2021 SPAC listing", value: "$9bn" },
      { label: (ko: boolean) => ko ? "2023 파산 신청" : "2023 bankruptcy", value: "Ch.11" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "S-1은 회사의 법적 고백서 — 모든 것이 드러난다"
        : "S-1 is a legal confession — everything is revealed",
      (ko: boolean) => ko
        ? "지배구조 문제(차등의결권 + 관련거래)가 밸류에이션보다 치명적"
        : "Governance issues (supervoting + related-party deals) are more fatal than valuation",
      (ko: boolean) => ko
        ? "'테크 회사' 내러티브로 부동산 기업의 적자를 가릴 수 없다"
        : "A 'tech company' narrative cannot hide a real estate company's losses",
    ],
    link: "/market/wework-ipo-failure",
  },
  // TYPE 1b: Ant Group
  {
    type: 1,
    typeLabel: (ko: boolean) => ko ? "Type 1 — 규제 철회" : "Type 1 — Regulatory Withdrawal",
    typeColor: "border-orange-300 bg-orange-50 dark:bg-orange-900/20",
    typeBadge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    emoji: "🐜",
    company: "Ant Group",
    year: 2020,
    subtitle: (ko: boolean) => ko
      ? "$37bn IPO — 상장 48시간 전 중국 당국 개입으로 취소"
      : "$37B IPO — cancelled 48 hours before listing by Chinese regulators",
    metrics: [
      { label: (ko: boolean) => ko ? "공모 규모" : "IPO size", value: "$37bn" },
      { label: (ko: boolean) => ko ? "희망 밸류" : "Target valuation", value: "$315bn" },
      { label: (ko: boolean) => ko ? "취소 시점" : "Cancellation timing", value: (ko: boolean) => ko ? "상장 48시간 전" : "48 hours before listing" },
      { label: (ko: boolean) => ko ? "원인" : "Cause", value: (ko: boolean) => ko ? "Jack Ma 당국 비판" : "Jack Ma criticizing regulators" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "규제 리스크는 DCF 어디에도 들어가지 않는다"
        : "Regulatory risk doesn't appear in any DCF model",
      (ko: boolean) => ko
        ? "지정학은 밸류에이션보다 강하다 — 세계 최대 핀테크도 예외 없음"
        : "Geopolitics trumps valuation — not even the world's largest fintech is exempt",
      (ko: boolean) => ko
        ? "청약 완료 45,000명 투자자도 보호받지 못함"
        : "45,000 investors who had already subscribed were not protected",
    ],
    link: "/market/ant-group-ipo-pulled",
  },
  // TYPE 2: Rivian
  {
    type: 2,
    typeLabel: (ko: boolean) => ko ? "Type 2 — 상장 즉시 폭락" : "Type 2 — Immediate Post-IPO Crash",
    typeColor: "border-red-400 bg-red-50/80 dark:bg-red-900/30",
    typeBadge: "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    emoji: "🚗",
    company: "Rivian",
    year: 2021,
    subtitle: (ko: boolean) => ko
      ? "IPO 3개월 만에 -80% — EV 버블의 교과서"
      : "Down 80% within 3 months of IPO — the EV bubble textbook",
    metrics: [
      { label: (ko: boolean) => ko ? "공모가" : "IPO price", value: "$78" },
      { label: (ko: boolean) => ko ? "첫날 고점" : "Day 1 high", value: "$172 (+121%)" },
      { label: (ko: boolean) => ko ? "3개월 후" : "3 months later", value: "$22 (-72%)" },
      { label: (ko: boolean) => ko ? "공모 규모" : "IPO size", value: "$13.7bn" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "Football Field Comp 선택: Tesla 기준 EV P/S → 매출 거의 없는 기업에 $66bn 밸류"
        : "Football Field comp selection: EV P/S vs Tesla → $66B valuation for a company with almost no revenue",
      (ko: boolean) => ko
        ? "첫날 +121% 팝 = 발행사가 헐값에 판 것 + 버블 경고"
        : "Day 1 +121% pop = issuer sold too cheap AND bubble warning",
      (ko: boolean) => ko
        ? "생산 능력 1,000대(목표 40,000대)인 기업에 GM 수준 밸류 부여"
        : "Valued like GM with 1,000-unit production (target: 40,000)",
    ],
    link: null,
  },
  // TYPE 3: Uber
  {
    type: 3,
    typeLabel: (ko: boolean) => ko ? "Type 3 — 장기 언더퍼폼" : "Type 3 — Long-term Underperformance",
    typeColor: "border-amber-300 bg-amber-50 dark:bg-amber-900/20",
    typeBadge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    emoji: "🚕",
    company: "Uber",
    year: 2019,
    subtitle: (ko: boolean) => ko
      ? "상장 첫날 -7.6% — 역대 최대 규모 IPO 첫날 손실. 2년간 공모가 이하."
      : "Down 7.6% on Day 1 — largest loss in IPO history on Day One. Below IPO price for 2 years.",
    metrics: [
      { label: (ko: boolean) => ko ? "공모가" : "IPO price", value: "$45" },
      { label: (ko: boolean) => ko ? "첫날 종가" : "Day 1 close", value: "$41.57 (-7.6%)" },
      { label: (ko: boolean) => ko ? "1년 후" : "1 year later", value: "$29 (-35%)" },
      { label: (ko: boolean) => ko ? "흑자 전환" : "First profit", value: (ko: boolean) => ko ? "2023 (IPO 4년 후)" : "2023 (4 years post-IPO)" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "Unit Economics 신화: 규모의 경제 = 수익성으로 직결 안 됨"
        : "Unit Economics myth: scale ≠ profitability in ride-hailing",
      (ko: boolean) => ko
        ? "Lyft와 동시 공모 → 시장 피로도 + 경쟁 구도 부각"
        : "Simultaneous offering with Lyft → market fatigue + competitive narrative highlighted",
      (ko: boolean) => ko
        ? "'첫날 팝 없음'이 오히려 장기 투자자에겐 더 좋은 진입점"
        : "No Day 1 pop was actually a better entry point for long-term investors",
    ],
    link: null,
  },
  // TYPE 4: Nikola
  {
    type: 4,
    typeLabel: (ko: boolean) => ko ? "Type 4 — SPAC 붕괴" : "Type 4 — SPAC Collapse",
    typeColor: "border-purple-300 bg-purple-50 dark:bg-purple-900/20",
    typeBadge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    emoji: "🔋",
    company: "Nikola",
    year: 2020,
    subtitle: (ko: boolean) => ko
      ? "수소트럭 SPAC — 사기로 판명, CEO 유죄, -99%"
      : "Hydrogen truck SPAC — fraud proven, CEO convicted, -99%",
    metrics: [
      { label: (ko: boolean) => ko ? "SPAC 합병 후 피크 밸류" : "Peak post-SPAC valuation", value: "$34bn" },
      { label: (ko: boolean) => ko ? "현재 주가" : "Current price", value: "$0.3 (-99%+)" },
      { label: (ko: boolean) => ko ? "CEO 판결" : "CEO verdict", value: (ko: boolean) => ko ? "사기 유죄 (2023)" : "Fraud conviction (2023)" },
      { label: (ko: boolean) => ko ? "홍보 영상 실체" : "Demo video reality", value: (ko: boolean) => ko ? "경사로에서 굴러내려간 것" : "Truck rolled downhill (no engine)" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "SPAC Investor Presentation은 S-1과 달리 법적 책임이 없다 — Due Diligence 없음"
        : "SPAC Investor Presentations lack the legal accountability of S-1 filings — no real due diligence",
      (ko: boolean) => ko
        ? "2020–21 SPAC 613개 상장 → 평균 수익률 2024년 기준 -75%"
        : "613 SPACs in 2020–21 → average return as of 2024: -75%",
      (ko: boolean) => ko
        ? "GM 파트너십 공시 → 하루 만에 Hindenburg 공매도 보고서 → SPAC 구조의 취약성"
        : "GM partnership announcement → Hindenburg short report next day → structural SPAC vulnerability",
    ],
    link: null,
  },
  // TYPE 5: DiDi
  {
    type: 5,
    typeLabel: (ko: boolean) => ko ? "Type 5 — 규제·정치 리스크" : "Type 5 — Regulatory & Political Risk",
    typeColor: "border-gray-400 bg-gray-50 dark:bg-gray-800/40",
    typeBadge: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    emoji: "🚖",
    company: "DiDi",
    year: 2021,
    subtitle: (ko: boolean) => ko
      ? "NYSE 상장 이틀 후 앱 삭제 — 상장폐지, -90%"
      : "App deleted 2 days after NYSE listing — delisted, -90%",
    metrics: [
      { label: (ko: boolean) => ko ? "NYSE 상장" : "NYSE listing", value: (ko: boolean) => ko ? "2021.6.30" : "June 30, 2021" },
      { label: (ko: boolean) => ko ? "공모 규모" : "IPO size", value: "$4.4bn" },
      { label: (ko: boolean) => ko ? "앱 삭제 시점" : "App deletion", value: (ko: boolean) => ko ? "상장 이틀 후" : "2 days post-listing" },
      { label: (ko: boolean) => ko ? "주가 변화" : "Price change", value: "$14 → $1.4 (-90%)" },
    ],
    lessons: [
      (ko: boolean) => ko
        ? "중국 당국이 미국 상장에 반대했음에도 강행 → 즉각 보복"
        : "Listing despite Chinese regulatory opposition → immediate retaliation",
      (ko: boolean) => ko
        ? "국가 데이터 안보 위협 이유로 신규가입 금지 + 앱 삭제"
        : "National data security concerns → new user ban + app removal",
      (ko: boolean) => ko
        ? "지정학 리스크는 IPO 후에도 상장 유지를 위협한다"
        : "Geopolitical risk threatens not just IPO execution but post-listing survival",
    ],
    link: null,
  },
];

// ── Success Case ───────────────────────────────────────────────────────────────
const SUCCESS_CASE = {
  emoji: "🔋",
  company: "LG에너지솔루션",
  year: 2022,
  subtitle: (ko: boolean) => ko
    ? "12.75조원 — 한국 역대 최대 IPO 성공 공식"
    : "₩12.75T — Korea's largest IPO success formula",
  metrics: [
    { label: (ko: boolean) => ko ? "공모 규모" : "IPO size", value: (ko: boolean) => ko ? "12.75조원" : "₩12.75T" },
    { label: (ko: boolean) => ko ? "기관 경쟁률" : "Institutional demand", value: "2,023:1" },
    { label: (ko: boolean) => ko ? "의무보유 확약" : "Lock-up commitment", value: "67%" },
    { label: (ko: boolean) => ko ? "상장 후 12개월" : "12M post-listing", value: (ko: boolean) => ko ? "공모가 유지" : "Held IPO price" },
  ],
  lessons: [
    (ko: boolean) => ko
      ? "글로벌 배터리 테마 정점 타이밍 + 앵커 67% 확약 구성 = 교과서적 집행"
      : "Global battery theme peak timing + 67% anchor lock-up = textbook execution",
    (ko: boolean) => ko
      ? "의무보유 확약 67%: D+180 물량 폭탄 리스크를 사전에 제거"
      : "67% lock-up commitment: pre-neutralized the D+180 supply bomb risk",
    (ko: boolean) => ko
      ? "공모가 상단(30만원) 확정 → 가격 협상력이 투자자 수요 품질에서 나온다"
      : "IPO priced at band top (₩300K) → pricing power comes from investor quality",
  ],
};

// ── Lesson Matrix Data ─────────────────────────────────────────────────────────
const LESSON_MATRIX = [
  {
    case: "WeWork",
    type: (ko: boolean) => ko ? "발행 철회" : "Pulled",
    primaryRisk: (ko: boolean) => ko ? "거버넌스" : "Governance",
    signal: (ko: boolean) => ko ? "S-1 관련거래·차등의결권 공시" : "S-1 related-party + supervoting",
    timing: (ko: boolean) => ko ? "S-1 분석 단계" : "S-1 analysis",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    case: "Ant Group",
    type: (ko: boolean) => ko ? "규제 철회" : "Regulatory Pull",
    primaryRisk: (ko: boolean) => ko ? "지정학" : "Geopolitics",
    signal: (ko: boolean) => ko ? "당국과의 긴장 관계 공시" : "Regulatory tension disclosures",
    timing: (ko: boolean) => ko ? "IPO 시작 전" : "Pre-IPO",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    case: "Rivian",
    type: (ko: boolean) => ko ? "상장 후 폭락" : "Post-IPO Crash",
    primaryRisk: (ko: boolean) => ko ? "밸류에이션 버블" : "Valuation bubble",
    signal: (ko: boolean) => ko ? "첫날 +121% 팝 + 생산량 미달" : "Day 1 +121% pop + production miss",
    timing: (ko: boolean) => ko ? "상장 후 1–3개월" : "1–3 months post-IPO",
    badgeColor: "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    case: "Uber",
    type: (ko: boolean) => ko ? "장기 언더퍼폼" : "Long-term underperform",
    primaryRisk: (ko: boolean) => ko ? "수익성 경로" : "Path to profitability",
    signal: (ko: boolean) => ko ? "Unit Economics 약화 + 경쟁 심화" : "Unit economics degradation + competition",
    timing: (ko: boolean) => ko ? "상장 후 1–2년" : "1–2 years post-IPO",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    case: "Nikola",
    type: (ko: boolean) => ko ? "SPAC 사기" : "SPAC Fraud",
    primaryRisk: (ko: boolean) => ko ? "Due Diligence 부재" : "No due diligence",
    signal: (ko: boolean) => ko ? "Hindenburg 공매도 보고서" : "Hindenburg short-seller report",
    timing: (ko: boolean) => ko ? "상장 후 3–6개월" : "3–6 months post-SPAC",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    case: "DiDi",
    type: (ko: boolean) => ko ? "규제 보복" : "Regulatory Retaliation",
    primaryRisk: (ko: boolean) => ko ? "지정학·데이터 주권" : "Geopolitics + data sovereignty",
    signal: (ko: boolean) => ko ? "중국 당국 반대 무시 + 미국 상장 강행" : "Ignored Chinese opposition + NYSE listing",
    timing: (ko: boolean) => ko ? "상장 2일 후" : "2 days post-IPO",
    badgeColor: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  },
];

// ── Chapter Nav ────────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 락업 오버행",  en: "Ch.1 Lock-up Overhang" },
  { id: "ch2", ko: "Ch.2 성공 케이스",  en: "Ch.2 Success Case"     },
  { id: "ch3", ko: "Ch.3 실패 5가지",   en: "Ch.3 5 Failure Types"  },
  { id: "ch4", ko: "Ch.4 교훈 매트릭스",en: "Ch.4 Lesson Matrix"    },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "락업 만료가 주가에 미치는 영향은 어느 정도인가요?"
      : "How much does a lock-up expiration actually impact stock prices?",
    a: (ko: boolean) => ko
      ? "학술 연구에 따르면 락업 만료 전후로 평균 -1~-3%의 비정상 수익률(abnormal return)이 관찰됩니다. 그러나 이는 평균치이며, 개별 기업에 따라 편차가 매우 큽니다. PE 보유 비중이 높고 초과 수익이 큰 기업(예: Rivian)에서는 락업 만료 시 -10~-30%의 낙폭이 나타나기도 합니다. D+180 락업 만료는 특히 PE 스폰서가 투자 회수(exit)를 노리는 시점과 겹치기 때문에 주의가 필요합니다."
      : "Academic research shows an average abnormal return of -1 to -3% around the lock-up expiration date. However, this is an average — individual companies can deviate significantly. For companies with large PE holdings and high pre-expiration returns (e.g., Rivian), declines of -10 to -30% at lock-up expiry are not uncommon. The D+180 lock-up is particularly important because it typically coincides with when PE sponsors are looking to exit their positions.",
  },
  {
    q: (ko: boolean) => ko
      ? "SPAC이 왜 2020–21년에 그렇게 많았나요?"
      : "Why were there so many SPACs in 2020–21?",
    a: (ko: boolean) => ko
      ? "세 가지 구조적 요인이 맞물렸습니다. 첫째, 제로금리 환경에서 SPAC 공모금(IPO Proceeds)의 기회비용이 사실상 0이었습니다. 둘째, 전통 IPO 대비 빠른 상장(6–12개월 단축) + 미래 실적 예측치 사용 허용이라는 규제 차익이 있었습니다. 셋째, SPAC 스폰서는 합병 성사 여부와 무관하게 20% 프로모터 지분(promote)를 확보 — 스폰서에게 극단적으로 유리한 구조였습니다. 2022년 금리 인상 후 이 구조의 취약성이 모두 드러났습니다."
      : "Three structural factors converged. First, in a zero-rate environment, the opportunity cost of SPAC IPO proceeds sitting in trust was essentially zero. Second, there was a regulatory arbitrage advantage vs. traditional IPOs — faster listing timelines (6–12 months shorter) plus permission to use forward-looking financial projections. Third, SPAC sponsors secured a 20% promoter stake (the 'promote') regardless of whether the merger succeeded — an extraordinarily favorable structure for sponsors. After the 2022 rate hikes, all of these structural vulnerabilities were exposed simultaneously.",
  },
  {
    q: (ko: boolean) => ko
      ? "중국 기업 미국 상장 리스크는 어떻게 평가하나요?"
      : "How do you assess the risk of Chinese companies listing in the US?",
    a: (ko: boolean) => ko
      ? "DiDi 사례 이후 세 가지 리스크 레이어를 구분합니다. ① 규제 리스크: 중국 CAC(사이버보안심의판공실)의 데이터 보안 심사 → 상장 전 승인 필수화. ② 회계 리스크: PCAOB 감사 불투명성 → 상장폐지 위협 (2021 HFCAA). ③ 지정학 리스크: 미-중 긴장 고조 시 투자자 심리 악화 → 밸류에이션 디스카운트 상시화. 2024년 기준 중국 기업의 미국 IPO는 사실상 멈춰있고, 홍콩 상장이 대안으로 부상했습니다."
      : "After the DiDi case, three distinct risk layers are distinguished. ① Regulatory risk: China's CAC (Cyberspace Administration of China) data security review → approval required before listing. ② Accounting risk: PCAOB audit opacity → delisting threat (2021 Holding Foreign Companies Accountable Act). ③ Geopolitical risk: escalating U.S.-China tensions deteriorate investor sentiment → persistent valuation discount. As of 2024, Chinese company IPOs in the U.S. have effectively stalled, with Hong Kong listings emerging as the alternative.",
  },
  {
    q: (ko: boolean) => ko
      ? "WeWork 같은 케이스를 사전에 알 수 있나요?"
      : "Could a case like WeWork have been spotted in advance?",
    a: (ko: boolean) => ko
      ? "사후에 보면 명백한 신호들이 있었습니다. ① S-1의 관련 거래: Adam Neumann이 자신이 소유한 건물을 WeWork에 임대하는 거래가 공시됨. ② 차등의결권: Neumann이 20:1 의결권으로 사실상 독재. ③ Community-Adjusted EBITDA 등 독자적 회계 지표 남발 — 기존 회계 기준으로는 적자 너무 큼. ④ 부동산 기업인데 '소프트웨어 배수'를 요구. 그러나 당시 SoftBank의 $47bn 밸류 지지가 시장의 비판적 시각을 억눌렀습니다. 이것이 '스폰서 오염(sponsor bias)'의 대표적 사례입니다."
      : "In retrospect, the warning signs were clear. ① S-1 related-party transactions: Adam Neumann was leasing buildings he personally owned to WeWork — publicly disclosed. ② Dual-class voting: Neumann held 20:1 super-voting shares for de facto autocratic control. ③ Proliferation of proprietary accounting metrics like 'Community-Adjusted EBITDA' — because losses were too large under standard accounting. ④ A real estate company demanding 'software multiples.' However, SoftBank's $47bn valuation support suppressed the market's critical scrutiny at the time. This is the archetypal case of 'sponsor bias' distorting market judgment.",
  },
  {
    q: (ko: boolean) => ko
      ? "성공한 IPO 이후 팔로우온(FO) 타이밍은 어떻게 결정하나요?"
      : "How is the timing of a follow-on offering after a successful IPO determined?",
    a: (ko: boolean) => ko
      ? "FO 타이밍의 4가지 핵심 조건이 있습니다. ① 주가: 공모가 대비 충분한 프리미엄(통상 20%+) — 투자자에게 희석을 정당화할 수 있는 주가. ② 락업 해제: 주요 주주의 락업이 만료되어 2차 매각(Secondary)이 가능한 시점. ③ 실적 모멘텀: 최근 어닝 서프라이즈 또는 가이던스 상향 후 → 투자자 신뢰 최고점. ④ 시장 조건: 변동성 낮고 유동성 풍부한 시기. LG에너지솔루션은 상장 후 12개월 주가 안정 → 2023년 FO 실행의 기반을 닦았습니다."
      : "There are four key conditions for FO timing. ① Stock price: sufficient premium over the IPO price (typically 20%+) — a stock price that justifies dilution to investors. ② Lock-up expiry: major shareholders' lock-up periods have expired, enabling secondary sales. ③ Earnings momentum: recent earnings beat or guidance upgrade → investor confidence at peak. ④ Market conditions: low volatility and ample liquidity. LG Energy Solution's 12-month post-listing price stability laid the groundwork for executing a follow-on in 2023.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_SERIES.map((ch) => (
            <Link
              key={ch.slug}
              href={`${ko ? "" : "/en"}/market-101/${ch.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                ch.ch === thisCh
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {ch.title(ko)}
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
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex gap-1 py-2 overflow-x-auto min-w-max">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function LockupOverhangChart({ ko }: { ko: boolean }) {
  const maxPct = 100;
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "락업 오버행 — 시간별 유통 가능 물량 누적 (모식도)" : "Lock-up Overhang — Cumulative Float by Unlock Date (Schematic)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {/* Stacked bar timeline */}
        <div className="space-y-3">
          {LOCKUP_SCHEDULE.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className={`rounded-xl border p-4 ${row.bgColor} ${row.borderColor}`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-black ${row.textColor}`}>{row.day}</span>
                  <span className="text-[12px] font-semibold text-gray-800 dark:text-gray-200">{row.label(ko)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold ${row.riskColor}`}>
                    {ko ? "리스크: " : "Risk: "}{row.risk(ko)}
                  </span>
                  <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                    {ko ? "누적 유통 가능" : "Cum. float"}: {row.cumPct}%
                  </span>
                </div>
              </div>

              {/* Stacked bar */}
              <div className="h-5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-2">
                <div className="h-full flex">
                  {LOCKUP_SCHEDULE.slice(0, i + 1).map((prev, j) => (
                    <motion.div
                      key={j}
                      className={`h-full ${prev.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(prev.pct / maxPct) * 100}%` }}
                      viewport={VP}
                      transition={{ duration: 0.8, delay: i * 0.1 + j * 0.05, ease: EASE }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400">
                <span>{row.who(ko)}</span>
                <span>{ko ? "이번 해제: +" : "This unlock: +"}{row.pct}%</span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 italic">{row.note(ko)}</p>
            </motion.div>
          ))}
        </div>

        {/* D+180 warning */}
        <motion.div
          variants={fadeUp(0.3)}
          className="mt-5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4"
        >
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-[12px] font-bold text-red-700 dark:text-red-300 mb-1">
                {ko ? "D+180 — 최대 위험 이벤트" : "D+180 — Maximum Risk Event"}
              </p>
              <p className="text-[11px] text-red-600 dark:text-red-400 leading-relaxed">
                {ko
                  ? "PE 스폰서 + 창업자 + 임원의 락업이 동시에 만료되는 D+180은 주가 하락 리스크가 가장 높은 시점이다. 특히 PE 스폰서는 이 시점에 투자 원금 회수(exit)를 위한 매도 압박이 크다. 인기 IPO의 경우 D+180 전날 주가가 고점 대비 20–40% 하락하는 경우가 많다."
                  : "D+180, when PE sponsor + founder + executive lock-ups expire simultaneously, is the highest stock price risk moment. PE sponsors in particular face significant pressure to sell at this point to begin recovering their invested capital. For popular IPOs, it is common to see stock prices 20–40% below their peak by the day before D+180."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote variants={fadeUp(0.35)} className="mt-5 border-l-4 pl-4 py-1" style={{ borderColor: accent }}>
          <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "\"락업 만료일은 주가의 최대 리스크 이벤트다. D+180 전날 그 회사 주식을 들고 있다면 뭔가 이유가 있어야 한다.\""
              : "\"Lock-up expiry is the single largest risk event for a stock. If you're holding the stock the day before D+180, you'd better have a reason.\""}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
            {ko ? "— 익명 ECM 헤지펀드 매니저" : "— Anonymous ECM Hedge Fund Manager"}
          </p>
        </motion.blockquote>
      </div>
    </motion.div>
  );
}

function SuccessCase({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-green-100 dark:bg-green-900/40 px-5 py-3 border-b border-green-200 dark:border-green-700">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
            {ko ? "성공 케이스" : "Success Case"}
          </span>
          <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
            {ko ? "한국 역대 최대 IPO 성공 공식" : "Korea's Largest IPO — Success Formula"}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0">{SUCCESS_CASE.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-[17px] font-black text-gray-900 dark:text-gray-100">
                {SUCCESS_CASE.company}
              </h3>
              <span className="text-[11px] text-gray-500 dark:text-gray-400">{SUCCESS_CASE.year}</span>
            </div>
            <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-4">{SUCCESS_CASE.subtitle(ko)}</p>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {SUCCESS_CASE.metrics.map((m, i) => (
                <div key={i} className="bg-white/70 dark:bg-gray-900/40 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">{m.label(ko)}</p>
                  <p className="text-[13px] font-black text-green-700 dark:text-green-400">
                    {typeof m.value === "function" ? m.value(ko) : m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Lessons */}
            <div className="space-y-2">
              {SUCCESS_CASE.lessons.map((l, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-green-700 dark:text-green-400">
                  <span className="flex-shrink-0 mt-0.5 text-green-500">✓</span>
                  <span className="leading-relaxed">{l(ko)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FailureCaseCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-5">
      {FAILURE_CASES.map((fc, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className={`rounded-2xl border p-5 ${fc.typeColor}`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">{fc.emoji}</span>
            <div className="flex-1 min-w-0">
              {/* Type badge + company */}
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${fc.typeBadge}`}>
                  {fc.typeLabel(ko)}
                </span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">{fc.year}</span>
              </div>

              <h3 className="text-[16px] font-black text-gray-900 dark:text-gray-100 mb-0.5">
                {fc.company}
              </h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {fc.subtitle(ko)}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {fc.metrics.map((m, j) => (
                  <div key={j} className="bg-white/50 dark:bg-gray-900/30 rounded-lg p-2.5">
                    <p className="text-[9px] text-gray-400 dark:text-gray-500 mb-0.5">{m.label(ko)}</p>
                    <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200">
                      {typeof m.value === "function" ? m.value(ko) : m.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Lessons */}
              <div className="border-t border-gray-200/60 dark:border-gray-700/60 pt-3 space-y-1.5">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  {ko ? "교훈" : "Lessons"}
                </p>
                {fc.lessons.map((l, j) => (
                  <div key={j} className="flex items-start gap-2 text-[12px] text-gray-600 dark:text-gray-400">
                    <span className="flex-shrink-0 mt-0.5 text-gray-400">›</span>
                    <span className="leading-relaxed">{l(ko)}</span>
                  </div>
                ))}
              </div>

              {/* Link if available */}
              {fc.link && (
                <Link
                  href={`${ko ? "" : "/en"}${fc.link}`}
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {ko ? "케이스 전체 보기" : "Read full case"} →
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function LessonMatrix({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "케이스별 교훈 매트릭스 — 리스크 유형 × 조기 신호" : "Case Lesson Matrix — Risk Type × Early Signal"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold min-w-[80px]">
                {ko ? "케이스" : "Case"}
              </th>
              <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold min-w-[100px]">
                {ko ? "유형" : "Type"}
              </th>
              <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold min-w-[100px]">
                {ko ? "핵심 리스크" : "Primary Risk"}
              </th>
              <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold min-w-[150px]">
                {ko ? "조기 경고 신호" : "Early Warning Signal"}
              </th>
              <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold min-w-[110px]">
                {ko ? "발현 시점" : "Timing"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {LESSON_MATRIX.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors"
              >
                <td className="p-3 font-bold text-gray-800 dark:text-gray-200">{row.case}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${row.badgeColor}`}>
                    {row.type(ko)}
                  </span>
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{row.primaryRisk(ko)}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400 leading-relaxed">{row.signal(ko)}</td>
                <td className="p-3 text-gray-500 dark:text-gray-500">{row.timing(ko)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary insight */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-t border-blue-100 dark:border-blue-800 p-4">
        <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
          <span className="font-bold">{ko ? "공통 패턴: " : "Common pattern: "}</span>
          {ko
            ? "모든 실패 케이스에는 사전에 공시된 경고 신호가 있었다. S-1 분석, 지배구조 리뷰, 규제 관계 파악이 IPO 투자의 핵심 Due Diligence다. '이야기(Narrative)'가 아닌 '숫자(Numbers)'와 '구조(Structure)'를 보라."
            : "Every failure case had warning signals that were publicly disclosed in advance. S-1 analysis, governance review, and understanding regulatory relationships are the core due diligence for IPO investing. Look at the numbers and structure, not the narrative."}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmIpoPostClient({
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
                  ? "https://dealstory.io/market-101/ecm-ipo-post"
                  : "https://dealstory.io/en/market-101/ecm-ipo-post",
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
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q(ko),
                acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
              })),
            }),
          }}
        />

        {/* ── Hero ── */}
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
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Market 101
              </Link>
              <span>›</span>
              <Link
                href={ko ? "/market-101/ecm-overview" : "/en/market-101/ecm-overview"}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ECM
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"}
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM Series · Ch.6 포스트-IPO & 케이스 스터디" : "ECM Series · Ch.6 Post-IPO & Case Studies"}
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

            {/* Meta */}
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
                href="/market-101/ecm-ipo-post"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-ipo-post"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Share — top */}
        <div className="flex justify-end mb-6 max-w-3xl mx-auto px-5 pt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        {/* Series Nav */}
        <SeriesNav lang={lang} />

        {/* Chapter Nav */}
        <div className="border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50">
          <ChapterNav lang={lang} />
        </div>

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* ── Ch.1: 락업 오버행 ── */}
          <motion.section
            id="ch1"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "락업 오버행 — IPO 이후의 숨겨진 시한폭탄" : "Lock-up Overhang — The Hidden Time Bomb After IPO"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "IPO는 상장일에 끝나는 것이 아니다. 진짜 테스트는 그 이후 — 특히 락업(lock-up) 만료일에 시작된다. 상장 시 공모 물량은 전체 발행 주식의 20–30%에 불과하다. 나머지 70–80%는 PE 스폰서, 창업자, 임원, 앵커 투자자들이 보유하며, 이들의 매도 제한(락업) 기간이 순차적으로 만료된다."
                  : "An IPO doesn't end on listing day. The real test begins afterward — particularly as lock-up expiration dates arrive. The public float at listing represents only 20–30% of total shares outstanding. The remaining 70–80% is held by PE sponsors, founders, executives, and anchor investors, whose selling restrictions (lock-ups) expire in sequential stages."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "락업 오버행(lock-up overhang)은 이 미래의 잠재적 매도 압력이 현재 주가에 미치는 할인 효과다. 시장은 언제 얼마나 많은 주식이 유통 가능해지는지를 이미 알고 있으며, 락업 만료일에 가까워질수록 주가에 하방 압력이 가해진다."
                  : "Lock-up overhang is the discounting effect that this future potential selling pressure exerts on the current stock price. The market already knows when and how many shares will become freely tradeable, and as lock-up expiration dates approach, downward pressure on the stock price intensifies."}
              </motion.p>
            </div>

            <LockupOverhangChart ko={ko} />
          </motion.section>

          {/* ── Ch.2: 성공 케이스 ── */}
          <motion.section
            id="ch2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "성공 케이스 — 교과서적 집행의 해부" : "Success Case — Anatomy of Textbook Execution"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "실패 케이스를 이해하기 위해 먼저 성공 케이스의 구조를 해부해야 한다. LG에너지솔루션의 2022년 IPO는 단순한 '인기 IPO'가 아니다 — 오버행을 사전에 제거하고, 올바른 투자자를 선별하며, 시장 타이밍을 읽은 교과서적 집행이다."
                  : "To understand failure cases, we must first dissect the structure of a success case. LG Energy Solution's 2022 IPO was not simply a 'popular IPO' — it was textbook execution: pre-eliminating overhang, selecting the right investors, and reading market timing correctly."}
              </motion.p>
            </div>

            <SuccessCase ko={ko} />
          </motion.section>

          {/* ── Ch.3: 실패 유형 5가지 ── */}
          <motion.section
            id="ch3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "글로벌 IPO 실패 유형 5가지 — 케이스 해부" : "5 Global IPO Failure Types — Case Anatomy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "IPO는 다양한 방식으로 실패한다. 발행 전 철회, 상장 직후 폭락, 장기 언더퍼폼, SPAC 사기, 규제 보복 — 각 유형마다 구조적 원인과 사전 신호가 다르다. 아래 6개의 글로벌 케이스를 통해 각 실패 유형의 교훈을 추출한다."
                  : "IPOs fail in many distinct ways. Pre-IPO withdrawal, immediate post-listing crash, long-term underperformance, SPAC fraud, regulatory retaliation — each type has different structural causes and advance warning signals. The six global cases below extract the lessons from each failure type."}
              </motion.p>
            </div>

            <FailureCaseCards ko={ko} />
          </motion.section>

          {/* ── Ch.4: 교훈 매트릭스 ── */}
          <motion.section
            id="ch4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "케이스 교훈 매트릭스 — 리스크 유형 × 조기 신호" : "Case Lesson Matrix — Risk Type × Early Warning"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "모든 IPO 실패에는 패턴이 있다. 아래 매트릭스는 6개 케이스의 리스크 유형, 핵심 원인, 조기 경고 신호, 발현 시점을 한눈에 정리한 것이다. S-1 분석, 지배구조 리뷰, 규제 관계 파악 — 이 세 가지가 IPO 투자의 핵심 Due Diligence 프레임이다."
                  : "Every IPO failure follows a pattern. The matrix below consolidates the risk type, primary cause, early warning signal, and timing across all six cases. S-1 analysis, governance review, and regulatory relationship assessment — these three constitute the core due diligence framework for IPO investing."}
              </motion.p>
            </div>

            <LessonMatrix ko={ko} />
          </motion.section>

          {/* Share — mid */}
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
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} />
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

          {/* ── Related Concepts ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-overview",          ko: "ECM 개요",        en: "ECM Overview"      },
                { slug: "ecm-ipo-bookbuilding",   ko: "IPO 북빌딩",      en: "IPO Book-Building" },
                { slug: "ecm-followon",           ko: "팔로우온",         en: "Follow-on"         },
                { slug: "ecm-spac-direct",        ko: "SPAC·직상장",     en: "SPAC·Direct"       },
                { slug: "ecm-ipo-valuation",      ko: "IPO 밸류에이션",  en: "IPO Valuation"     },
                { slug: "ecm-ipo-process",        ko: "IPO 프로세스",    en: "IPO Process"       },
              ].map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Share — bottom */}
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
                          className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
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

          {/* ── Navigation ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101/ecm-ipo-bookbuilding" : "/en/market-101/ecm-ipo-bookbuilding"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "Ch.5 북빌딩" : "Ch.5 Book-Building"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-followon" : "/en/market-101/ecm-followon"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline ml-auto"
            >
              {ko ? "Ch.7 팔로우온 →" : "Ch.7 Follow-on →"}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 dark:text-gray-500 hover:underline"
            >
              {ko ? "← Market 101 전체 보기" : "← All Market 101"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 dark:text-gray-500 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-ipo-post");
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
