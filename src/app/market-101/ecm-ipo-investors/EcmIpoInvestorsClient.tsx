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
const accent = "#3182f6";
const accentLight = "#dbeafe";

// ── Series nav ────────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"          : "ECM Overview"      },
  { slug: "ecm-ipo-issuers",          ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"      },
  { slug: "ecm-ipo-investors",        ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"    },
  { slug: "ecm-ipo-valuation",        ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"    : "Ch.3 Valuation"    },
  { slug: "ecm-ipo-process",          ch: 4,  title: (ko: boolean) => ko ? "Ch.4 IPO 프로세스"  : "Ch.4 IPO Process"  },
  { slug: "ecm-ipo-bookbuilding",     ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"        : "Ch.5 Book-Building" },
  { slug: "ecm-ipo-post",             ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"    : "Ch.6 Post-IPO"     },
  { slug: "ecm-followon",             ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"      : "Ch.7 Follow-on"    },
  { slug: "ecm-convertible",          ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"      : "Ch.8 Convertible"  },
  { slug: "ecm-international-listing", ch: 9, title: (ko: boolean) => ko ? "Ch.9 국제상장"      : "Ch.9 Intl Listing" },
  { slug: "ecm-spac-direct",          ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장"  : "Ch.10 SPAC·Direct" },
];

const thisCh = 2;

// ── Investor Layers ───────────────────────────────────────────────────────────
const INVESTOR_LAYERS = [
  {
    tier: 1,
    label: (ko: boolean) => ko ? "앵커 투자자 (Anchor)" : "Anchor Investors",
    timing: (ko: boolean) => ko ? "상장 전 확약 (로드쇼 전)" : "Pre-listing commitment (before roadshow)",
    lockup: (ko: boolean) => ko ? "90일 의무 락업" : "90-day mandatory lock-up",
    examples: "Temasek · GIC · 국민연금(NPS) · Abu Dhabi Investment Authority · Mubadala",
    size: (ko: boolean) => ko ? "전체 공모 물량의 20–30%" : "20–30% of total offering",
    function: (ko: boolean) => ko
      ? "가격 발견의 기준점. 앵커가 확약하면 나머지 북빌딩이 따라온다 — 가격 보험."
      : "Anchor sets the price discovery reference point. Once anchors commit, the rest of the book follows — price insurance.",
    color: "border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20",
    dot: "bg-blue-500",
    text: "text-blue-700 dark:text-blue-300",
    barH: 80,
    barColor: "bg-blue-500",
  },
  {
    tier: 2,
    label: (ko: boolean) => ko ? "QIB — 기관투자자" : "QIB — Qualified Institutional Buyers",
    timing: (ko: boolean) => ko ? "북빌딩 기간 오더 제출" : "Submit orders during book-building",
    lockup: (ko: boolean) => ko ? "락업 없음 (상장 즉시 매도 가능)" : "No lock-up (can sell immediately on Day 1)",
    examples: (ko: boolean) => ko
      ? "자산운용사(Fidelity·블랙록) · 헤지펀드 · 보험사 · 연기금"
      : "Asset Managers (Fidelity, BlackRock) · Hedge Funds · Insurers · Pensions",
    size: (ko: boolean) => ko ? "전체 공모 물량의 50–70%" : "50–70% of total offering",
    function: (ko: boolean) => ko
      ? "오더북의 핵심. Real Money(장기 보유 AM) vs 헤지펀드(단기) 비율이 북 질을 결정."
      : "Core of the order book. Real Money (long-term AM) vs Hedge Fund (short-term) ratio determines book quality.",
    color: "border-violet-300 dark:border-violet-600 bg-violet-50 dark:bg-violet-900/20",
    dot: "bg-violet-500",
    text: "text-violet-700 dark:text-violet-300",
    barH: 60,
    barColor: "bg-violet-500",
  },
  {
    tier: 3,
    label: (ko: boolean) => ko ? "리테일 (일반 공모)" : "Retail (Public Offering)",
    timing: (ko: boolean) => ko ? "공모 청약 기간 (로드쇼 후)" : "Subscription period (after roadshow)",
    lockup: (ko: boolean) => ko ? "락업 없음" : "No lock-up",
    examples: (ko: boolean) => ko ? "개인투자자 · 증권사 계좌 보유자" : "Individual investors · Retail brokerage accounts",
    size: (ko: boolean) => ko ? "전체 공모 물량의 20–30% (한국 법정 최소 20%)" : "20–30% of total offering (Korea: 20% statutory minimum)",
    function: (ko: boolean) => ko
      ? "첫날 변동성의 주요 원인. 기관 미배정 물량이 리테일 청약 경쟁률을 높인다."
      : "Primary source of Day 1 volatility. Unallocated institutional demand drives retail subscription competition.",
    color: "border-teal-300 dark:border-teal-600 bg-teal-50 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    text: "text-teal-700 dark:text-teal-300",
    barH: 40,
    barColor: "bg-teal-500",
  },
];

// ── Order Types ───────────────────────────────────────────────────────────────
const ORDER_TYPES = [
  {
    type: "Strike",
    ko_name: "스트라이크 오더",
    desc: (ko: boolean) => ko
      ? "가격 상관없이 무조건 참여. 최고 우선순위 배분 대상."
      : "Buy at any price — unconditional participation. Highest allocation priority.",
    signal: (ko: boolean) => ko ? "발행사·뱅커 입장에서 최고 신호" : "Strongest positive signal for issuer and bankers",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300",
    signalBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    priority: 1,
  },
  {
    type: "Limit",
    ko_name: "리밋 오더",
    desc: (ko: boolean) => ko
      ? "특정 가격 이하에서만 참여. 가격이 오르면 자동 제외."
      : "Participate only below a specific price. Auto-excluded if price rises.",
    signal: (ko: boolean) => ko
      ? "가격 민감 신호 — 공모가 상향 시 배분 제외"
      : "Price-sensitive signal — excluded if IPO price is raised",
    color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300",
    signalBg: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
    priority: 3,
  },
  {
    type: "Step-down",
    ko_name: "스텝다운",
    desc: (ko: boolean) => ko
      ? "가격 구간별로 주문 규모가 줄어드는 구조 오더."
      : "Order size decreases as price increases — tiered participation.",
    signal: (ko: boolean) => ko
      ? "수량 조절로 가격 협상력 행사"
      : "Uses volume adjustment as price negotiation leverage",
    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700 text-violet-700 dark:text-violet-300",
    signalBg: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
    priority: 2,
  },
  {
    type: "Conditional",
    ko_name: "컨디셔널",
    desc: (ko: boolean) => ko
      ? "특정 조건(지역 배분, 다른 투자자 참여 여부) 충족 시만 참여."
      : "Participates only if specific conditions met (geographic allocation, other investor inclusion).",
    signal: (ko: boolean) => ko
      ? "협상 도구 — 뱅커 입장에선 관리 어려움"
      : "Negotiation tool — complex to manage from banker's perspective",
    color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300",
    signalBg: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
    priority: 4,
  },
];

// ── Book Quality Metrics ──────────────────────────────────────────────────────
const BOOK_QUALITY = [
  {
    metric: (ko: boolean) => ko ? "Real Money 비중" : "Real Money %",
    ideal: "70%+",
    warning: "<50%",
    desc: (ko: boolean) => ko
      ? "장기 보유 자산운용사 비중. 높을수록 상장 후 주가 안정."
      : "Long-term holding AM share. Higher = more stable post-listing price.",
    idealColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    warningColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    metric: (ko: boolean) => ko ? "헤지펀드 비중" : "Hedge Fund %",
    ideal: "<20%",
    warning: ">35%",
    desc: (ko: boolean) => ko
      ? "단기 매매 위주. 높으면 첫날 변동성 ↑, 주가 취약."
      : "Short-term traders. High share = Day 1 volatility ↑, fragile stock.",
    idealColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    warningColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    metric: (ko: boolean) => ko ? "지역 분산" : "Geographic Diversity",
    ideal: (ko: boolean) => ko ? "미·유럽·아시아 3분할" : "US / Europe / Asia split",
    warning: (ko: boolean) => ko ? "단일 지역 70%+" : "Single region 70%+",
    desc: (ko: boolean) => ko
      ? "지역 집중은 시장 충격 시 동시 이탈 위험."
      : "Geographic concentration creates simultaneous exit risk during market shocks.",
    idealColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    warningColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    metric: (ko: boolean) => ko ? "커버리지 배율" : "Coverage Ratio",
    ideal: "3–5x",
    warning: "<2x or >10x",
    desc: (ko: boolean) => ko
      ? "3배: 가격 협상력 생김. 10배+: 질 낮은 오더 대량 유입 경고."
      : "3x: creates pricing power. 10x+: warning of low-quality order inflation.",
    idealColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    warningColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
];

// ── Lockup Negotiation ────────────────────────────────────────────────────────
const LOCKUP_NEGOTIATION = [
  {
    investor: (ko: boolean) => ko ? "앵커 투자자" : "Anchor Investors",
    lockup: "90일",
    leverage: (ko: boolean) => ko ? "배분 우대 받는 대가" : "Exchange for allocation priority",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10",
    dot: "bg-blue-500",
  },
  {
    investor: (ko: boolean) => ko ? "PE 스폰서·창업자" : "PE Sponsor · Founders",
    lockup: "180일",
    leverage: (ko: boolean) => ko ? "상장 의무 협상 결과" : "Mandatory IPO term",
    color: "border-violet-200 dark:border-violet-700 bg-violet-50/50 dark:bg-violet-900/10",
    dot: "bg-violet-500",
  },
  {
    investor: (ko: boolean) => ko ? "전략적 투자자" : "Strategic Investors",
    lockup: "180–365일",
    leverage: (ko: boolean) => ko ? "사전 투자 협약에 의해" : "By pre-IPO agreement",
    color: "border-teal-200 dark:border-teal-700 bg-teal-50/50 dark:bg-teal-900/10",
    dot: "bg-teal-500",
  },
  {
    investor: (ko: boolean) => ko ? "일반 QIB" : "Regular QIB",
    lockup: (ko: boolean) => ko ? "없음" : "None",
    leverage: (ko: boolean) => ko ? "즉시 매도 가능 — 책임 없음" : "Can sell Day 1 — no obligation",
    color: "border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30",
    dot: "bg-gray-400",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "앵커 투자자가 되면 어떤 혜택이 있나요?"
      : "What are the benefits of becoming an anchor investor?",
    a: (ko: boolean) => ko
      ? "앵커 투자자는 로드쇼 시작 전에 미리 배분 물량을 확약받는 대신 90일 의무 락업을 수락합니다. 핵심 혜택은 세 가지입니다. ① 배분 우선권: 북빌딩이 과열(Oversubscription)되어도 앵커 물량은 보장됩니다. ② 가격 협상력: 로드쇼 전 협상에서 발행사와 직접 가격 조건을 논의할 수 있는 유일한 기회입니다. ③ 대형 기관 신뢰 효과: '국민연금이 앵커로 들어왔다'는 시그널이 나머지 투자자들의 관심을 집중시켜, 딜이 성공적으로 마감될 가능성을 높입니다. 90일 락업은 단기 유동성 제약이지만, 대형 기관 투자자들에게는 충분한 트레이드오프입니다."
      : "Anchor investors commit capital before the roadshow in exchange for a 90-day mandatory lockup. Three key benefits: ① Allocation priority: anchor tranches are guaranteed even if the book becomes heavily oversubscribed, ② Pricing leverage: the only opportunity to negotiate pricing terms directly with the issuer before roadshow, ③ Signal credibility effect: when it becomes known that 'NPS or GIC anchored this deal,' it concentrates attention from other investors and raises probability of a successful closing. The 90-day lockup is a liquidity constraint but a fair tradeoff for large institutional investors.",
  },
  {
    q: (ko: boolean) => ko
      ? "스트라이크 오더를 내면 무조건 많이 배분받나요?"
      : "Does placing a Strike order guarantee a large allocation?",
    a: (ko: boolean) => ko
      ? "스트라이크 오더는 배분에서 최우선 순위를 받지만, '무조건 많이'는 아닙니다. 뱅커(북러너)는 최종 배분을 결정할 때 투자자의 ① 거래 이력(과거 얼마나 오래 보유했나), ② 기업 리서치 깊이(IR 미팅 횟수·리서치 퀄리티), ③ 포트폴리오 적합성(이 섹터를 전문으로 하는가)도 함께 봅니다. Real Money(장기 보유 자산운용사)가 스트라이크를 내면 더 많이 배분받고, 단기 매매 성향의 헤지펀드가 스트라이크를 내도 '퀄리티 투자자'가 아니라는 이유로 배분이 제한될 수 있습니다."
      : "Strike orders receive top allocation priority, but it doesn't automatically mean 'maximum allocation.' When bankers (bookrunners) determine final allocations, they also consider: ① the investor's trading history (how long they've held similar stocks), ② depth of company research (IR meeting frequency and research quality), ③ portfolio fit (do they specialize in this sector). A Real Money (long-term AM) Strike gets substantial allocation. A hedge fund Strike may still receive limited allocation because the fund is not a 'quality investor' for a long-term oriented IPO.",
  },
  {
    q: (ko: boolean) => ko
      ? "DCM 투자자와 ECM 투자자는 어떻게 다른가요?"
      : "How are DCM investors fundamentally different from ECM investors?",
    a: (ko: boolean) => ko
      ? "가장 근본적인 차이는 리스크 프로파일과 수익 구조입니다. DCM 투자자(채권)는 '약속된 쿠폰 수익'을 추구하며, 원금 회수가 최우선입니다. 신용 분석(부도 가능성)이 핵심 역량입니다. ECM 투자자(주식)는 '기업 성장에 따른 자본이익(Capital Gain)'을 추구하며, 원금 보장이 없습니다. 성장 내러티브와 밸류에이션 분석이 핵심입니다. 투자자 구성도 다릅니다. DCM은 보험사·연기금·중앙은행 같은 규제 기관이 주도하고, ECM은 성장주 자산운용사·헤지펀드·개인투자자가 주도합니다. 따라서 ECM 투자자는 DCM 투자자보다 훨씬 높은 변동성을 감수하고, 그 대신 더 높은 기대 수익을 추구합니다."
      : "The most fundamental difference is risk profile and return structure. DCM investors (bonds) pursue 'promised coupon income' with capital preservation as the primary goal. Credit analysis (default probability) is the core skill. ECM investors (equity) pursue 'capital gains from company growth' with no principal protection. Growth narrative and valuation analysis are the core skills. Investor composition also differs. DCM is dominated by regulated institutions — insurers, pensions, central banks. ECM is led by growth-focused asset managers, hedge funds, and retail investors. ECM investors therefore accept far higher volatility in exchange for higher expected returns.",
  },
  {
    q: (ko: boolean) => ko
      ? "커버리지 배율이 10배를 넘으면 왜 나쁜 신호인가요?"
      : "Why is a coverage ratio above 10x a warning sign, not a positive?",
    a: (ko: boolean) => ko
      ? "커버리지 배율이 10배를 넘으면 '이 딜은 인기가 엄청나다'처럼 보입니다. 그러나 ECM 뱅커들은 이를 경계합니다. 이유는 두 가지입니다. ① 단기 투자자 대거 유입: 고 커버리지는 종종 단기 차익을 노린 헤지펀드와 리테일 투기 수요가 급증한 결과입니다. 이들은 상장 직후 매도 → 첫날 급락 패턴을 만듭니다. ② 퀄리티 분석 부재: 오더 대부분이 'FOMO(기회 놓침 공포)'에 의한 무조건 참여로, 가격 적정성에 대한 진지한 분석이 없습니다. 실제로 가장 이상적인 북은 '3–5배 커버리지에 Real Money 70%+' 구성입니다. 이 경우 가격을 밴드 상단으로 올릴 수 있으면서도 상장 후 주가 안정이 보장됩니다."
      : "A 10x+ coverage ratio looks like 'enormous popularity.' However, ECM bankers are cautious. Two reasons: ① Influx of short-term investors: high coverage often results from a surge of hedge fund and retail speculation seeking quick gains. These investors sell immediately post-listing → creates a Day 1 price crash pattern. ② Absence of quality analysis: most orders are unconditional 'FOMO (Fear of Missing Out)' participation without genuine valuation analysis. In practice, the ideal book is '3–5x coverage with 70%+ Real Money.' This combination allows pricing at the top of the band while ensuring post-listing price stability.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 리테일 투자자가 IPO에서 받는 배분은 어떻게 결정되나요?"
      : "How is allocation to Korean retail investors in an IPO determined?",
    a: (ko: boolean) => ko
      ? "한국 자본시장법상 공모주의 일반 청약자(리테일) 배정 물량은 최소 공모 물량의 20%입니다. 이 20% 내에서 배분은 청약 경쟁률에 따라 균등 배분+비례 배분 방식으로 이루어집니다. 최근 한국은 '균등 배분 50%·비례 배분 50%' 제도를 도입하여 소액 청약자도 최소 1주를 받을 수 있도록 개선했습니다. 기관 청약과 달리 리테일 청약에는 락업이 없으므로, 상장 직후 리테일 투자자들의 차익 실현 매물이 나와 첫날 변동성의 주요 원인이 됩니다. 청약 증거금은 청약 기간 동안 묶이므로, 대규모 청약이 몰리면 단기 자금시장 유동성에도 영향을 줍니다(2022년 LG에너지솔루션 114조원 증거금 사례)."
      : "Under Korea's Capital Markets Act, the statutory minimum allocation to general (retail) subscribers is 20% of the total public offering. Within this 20%, allocation is determined by subscription competition ratio using an equal + proportional allocation system. Korea recently introduced a '50% equal allocation + 50% proportional allocation' regime, ensuring even small subscribers receive at least 1 share. Unlike institutional subscriptions, retail allocations have no lockup — retail profit-taking immediately post-listing is a primary driver of Day 1 volatility. Subscription deposits are frozen during the application period, so massive retail participation can impact short-term money market liquidity (reference: ₩114 trillion deposit in LG Energy Solution 2022 IPO).",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Ljungqvist, A.", title: "IPO Underpricing: A Survey", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=609422", source: "SSRN, 2007" },
  { id: 2, author: "Cornelli, F. & Goldreich, D.", title: "Bookbuilding and Strategic Allocation", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.00407", source: "Journal of Finance, 2001" },
  { id: 3, author: "한국금융투자협회(KOFIA)", title: "공모주 청약 제도 개선 안내 (균등·비례 배분)", url: "https://www.kofia.or.kr", source: "KOFIA, 2021" },
  { id: 4, author: "SEBI (Securities and Exchange Board of India)", title: "Anchor Investor Framework in Book Built Issues", url: "https://www.sebi.gov.in", source: "SEBI Circular, 2022" },
  { id: 5, author: "Morgan Stanley ECM", title: "Global IPO Investor Demand Dynamics", url: "https://www.morganstanley.com/im/", source: "Morgan Stanley, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function EcmIpoInvestorsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/ecm-ipo-investors`;

  const prev = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ECM Ch.2 — IPO 투자자 생태계: 앵커에서 리테일까지",
    description:
      "ECM IPO 투자자 완전 정리: 앵커·QIB·리테일 3계층, 스트라이크·리밋·스텝다운 오더 4유형, High Quality Book 기준, 앵커 선순환 메커니즘과 락업 협상 구조를 뱅커 시각으로 해부합니다.",
    url: pageUrl,
    datePublished: "2026-05-27",
    publisher: { "@type": "Organization", name: "Deal Story", url: "https://dealstory.kr" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q(ko),
      acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* JSON-LD */}
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </>

      {/* ── Series Nav ── */}
      <nav className="sticky top-0 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 text-sm">
            {ECM_SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`${base}/${s.slug}`}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  s.ch === thisCh
                    ? "font-bold text-white"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                style={s.ch === thisCh ? { background: accent } : undefined}
              >
                {s.title(ko)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Hero ── */}
        <motion.section variants={fadeUp(0)} initial="hidden" animate="show" className="mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/market-101" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Market 101
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: accent }}>ECM Series</span>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">Ch.2</span>
          </div>

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "ECM 시리즈 · Chapter 2" : "ECM Series · Chapter 2"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 18분 읽기" : "⏱ 18 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "IPO 투자자 생태계: 앵커에서 리테일까지"
              : "IPO Investor Ecosystem: From Anchors to Retail"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "IPO 오더북은 모든 투자자가 동등하지 않습니다. 앵커가 먼저 확약하고, QIB가 북빌딩 기간에 오더를 넣고, 리테일이 마지막에 청약합니다. 각 계층이 무엇을 원하고, 어떤 오더를 내고, 배분은 어떻게 결정되는지 — 신디케이트 뱅커가 실제로 관리하는 방식으로 정리합니다."
              : "Not all investors in an IPO order book are equal. Anchors commit first, QIBs enter orders during book-building, retail subscribes last. Here is what each layer wants, what orders they place, and how allocations are decided — from the perspective of a syndicate banker managing it all."}
          </p>
        </motion.section>

        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        {/* ── 3-stat callout row ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: ko ? "3계층" : "3 Tiers",
              label: (ko: boolean) => ko ? "IPO 투자자 구조" : "IPO Investor Structure",
              sub: (ko: boolean) => ko ? "앵커 → QIB → 리테일" : "Anchor → QIB → Retail",
            },
            {
              stat: "3–5x",
              label: (ko: boolean) => ko ? "이상적인 커버리지 배율" : "Ideal Coverage Ratio",
              sub: (ko: boolean) => ko ? "가격 협상력 + 주가 안정" : "Pricing power + Price stability",
            },
            {
              stat: "70%+",
              label: (ko: boolean) => ko ? "Real Money 목표 비중" : "Real Money Target",
              sub: (ko: boolean) => ko ? "High Quality Book 기준" : "High Quality Book standard",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.08)}
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-0.5">{item.label(ko)}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Ch.1: DCM vs ECM 투자자 근본 차이 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "DCM 투자자 vs ECM 투자자: 근본적 차이" : "DCM vs. ECM Investors: A Fundamental Difference"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "같은 '기관투자자'도 채권과 주식에서는 완전히 다른 논리로 움직인다" : "The same institutional investor operates on entirely different logic in bonds vs. equities"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="rounded-2xl border border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">
                {ko ? "DCM 투자자 (채권)" : "DCM Investor (Bonds)"}
              </div>
              <div className="space-y-3">
                {[
                  { label: (ko: boolean) => ko ? "목표 수익" : "Return Target", val: (ko: boolean) => ko ? "약속된 쿠폰 수익 + 원금" : "Promised coupon + principal" },
                  { label: (ko: boolean) => ko ? "핵심 분석" : "Core Analysis", val: (ko: boolean) => ko ? "신용 분석 (부도 가능성)" : "Credit analysis (default risk)" },
                  { label: (ko: boolean) => ko ? "원금 보장" : "Principal Protection", val: (ko: boolean) => ko ? "계약적 의무 (쿠폰·만기)" : "Contractual obligation" },
                  { label: (ko: boolean) => ko ? "주요 투자자" : "Key Investors", val: (ko: boolean) => ko ? "보험사·연기금·중앙은행" : "Insurers, pensions, central banks" },
                  { label: (ko: boolean) => ko ? "수익 드라이버" : "Return Driver", val: (ko: boolean) => ko ? "금리·스프레드 변화" : "Rate & spread movements" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start gap-3">
                    <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 flex-shrink-0">{row.label(ko)}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 text-right">{row.val(ko)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                {ko ? "ECM 투자자 (주식)" : "ECM Investor (Equity)"}
              </div>
              <div className="space-y-3">
                {[
                  { label: (ko: boolean) => ko ? "목표 수익" : "Return Target", val: (ko: boolean) => ko ? "기업 성장에 따른 자본이익" : "Capital gains from growth" },
                  { label: (ko: boolean) => ko ? "핵심 분석" : "Core Analysis", val: (ko: boolean) => ko ? "성장 내러티브 + 밸류에이션" : "Growth narrative + valuation" },
                  { label: (ko: boolean) => ko ? "원금 보장" : "Principal Protection", val: (ko: boolean) => ko ? "없음 (전액 손실 가능)" : "None (full loss possible)" },
                  { label: (ko: boolean) => ko ? "주요 투자자" : "Key Investors", val: (ko: boolean) => ko ? "성장주 AM·헤지펀드·개인" : "Growth AMs, HFs, retail" },
                  { label: (ko: boolean) => ko ? "수익 드라이버" : "Return Driver", val: (ko: boolean) => ko ? "기업 실적·섹터 테마·시장 심리" : "Earnings, sector theme, sentiment" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start gap-3">
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 flex-shrink-0">{row.label(ko)}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 text-right">{row.val(ko)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {ko
              ? "이 차이는 북빌딩 방식에도 영향을 줍니다. DCM 북빌딩은 '스프레드 가이던스'를 좁혀가는 과정이고, ECM 북빌딩은 '가격 밴드 안에서 최적 공모가'를 찾는 과정입니다. 투자자가 오더를 내는 방식과 논리도 완전히 다릅니다."
              : "This difference shapes the book-building approach. DCM book-building is a process of narrowing a spread guidance, while ECM book-building is finding the optimal offer price within a price band. The way investors place orders and the logic behind it are also entirely different."}
          </p>
        </motion.section>

        {/* ── Ch.2: 투자자 3계층 다이어그램 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "IPO 투자자 3계층 구조" : "The Three-Tier IPO Investor Structure"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            {ko ? "앵커가 기반을 놓고, QIB가 북을 채우고, 리테일이 마무리한다" : "Anchors lay the foundation, QIBs fill the book, retail closes it out"}
          </p>

          <div className="space-y-5 mb-8">
            {INVESTOR_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.tier}
                variants={fadeUp(i * 0.08)}
                className={`rounded-2xl border p-6 ${layer.color}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${layer.dot}`} />
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500">TIER {layer.tier}</span>
                    </div>
                    <h3 className={`text-base font-bold ${layer.text}`}>{layer.label(ko)}</h3>
                  </div>
                  <span className="text-xs font-mono bg-white/70 dark:bg-gray-900/50 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    {layer.size(ko)}
                  </span>
                </div>

                {/* Visual bar */}
                <div className="mb-4">
                  <div className="h-2 rounded-full bg-white/60 dark:bg-gray-900/40">
                    <motion.div
                      className={`h-2 rounded-full ${layer.barColor}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${layer.barH}%` }}
                      viewport={VP}
                      transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                      {ko ? "참여 타이밍" : "Timing"}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{layer.timing(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                      {ko ? "락업" : "Lock-up"}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{layer.lockup(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                      {ko ? "대표 예시" : "Examples"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{typeof layer.examples === "function" ? (layer.examples as (ko: boolean) => string)(ko) : layer.examples}</span>
                  </div>
                </div>

                <div
                  className="mt-4 rounded-lg p-3 bg-white/60 dark:bg-gray-900/40 border border-white/80 dark:border-gray-700"
                >
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    <strong className="text-gray-700 dark:text-gray-300">{ko ? "역할: " : "Function: "}</strong>
                    {layer.function(ko)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Offering size breakdown visual */}
          <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {ko ? "공모 물량 배분 시각화 (일반적 구조)" : "Offering Allocation Visualization (Typical Structure)"}
            </div>
            <div className="flex rounded-full overflow-hidden h-8 mb-3">
              <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: "25%" }}>
                25%
              </div>
              <div className="bg-violet-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: "50%" }}>
                50%
              </div>
              <div className="bg-teal-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: "25%" }}>
                25%
              </div>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-gray-600 dark:text-gray-400">{ko ? "앵커 (25%)" : "Anchor (25%)"}</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-violet-500" /><span className="text-gray-600 dark:text-gray-400">{ko ? "QIB (50%)" : "QIB (50%)"}</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-teal-500" /><span className="text-gray-600 dark:text-gray-400">{ko ? "리테일 (25%)" : "Retail (25%)"}</span></div>
            </div>
          </div>
        </motion.section>

        {/* ── Ch.3: 오더 유형 4가지 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "기관 투자자의 오더 유형 4가지" : "Four Types of Institutional Investor Orders"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "투자자가 어떤 오더를 내느냐가 배분 우선순위와 가격 발견에 직접 영향을 준다" : "The type of order an investor places directly affects allocation priority and price discovery"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {ko
              ? "북빌딩 기간 동안 기관 투자자들은 단순히 '몇 주를 사겠다'가 아니라 다양한 형태의 오더를 제출합니다. 오더 유형은 투자자의 확신 수준·가격 민감도·협상 전략을 반영하며, 뱅커는 이를 분석하여 최적 공모가를 결정합니다."
              : "During book-building, institutional investors don't simply say 'we want X shares.' They submit orders in various forms reflecting their conviction level, price sensitivity, and negotiating strategy. Bankers analyze these to determine the optimal offer price."}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          >
            {ORDER_TYPES.map((order, i) => (
              <motion.div
                key={order.type}
                variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-5 ${order.color}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-base font-bold text-gray-900 dark:text-gray-50">{order.type}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{order.ko_name}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/70 dark:bg-gray-900/40 text-gray-500 dark:text-gray-400">
                    {ko ? `우선순위 ${order.priority}위` : `Priority #${order.priority}`}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{order.desc(ko)}</p>
                <div className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-block ${order.signalBg}`}>
                  {order.signal(ko)}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">{ko ? "뱅커 인사이트: " : "Banker Insight: "}</strong>
              {ko
                ? "오더북에서 스트라이크 비중이 50%를 넘으면 가격을 밴드 상단 또는 그 이상으로 올릴 수 있는 신호입니다. 반대로 리밋 오더 비중이 70%를 넘으면 투자자들이 현재 가격이 너무 높다고 판단한다는 의미이므로, 가격을 밴드 하단으로 조정해야 합니다."
                : "If Strike orders exceed 50% of the book, it's a signal to push pricing to the top of the band or above. Conversely, if Limit orders exceed 70%, investors are telling you the price is too high — time to adjust toward the lower end of the range."}
            </p>
          </div>
        </motion.section>

        {/* ── Ch.4: High Quality Book 기준 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "High Quality Book — 4가지 기준" : "High Quality Book — Four Criteria"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "오더북의 크기보다 질(Quality)이 공모가와 상장 후 주가를 결정한다" : "Book quality matters more than book size — it determines both offer price and post-listing performance"}
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "지표" : "Metric"}</th>
                  <th className="text-left px-5 py-3 font-semibold text-green-700 dark:text-green-400">{ko ? "이상적" : "Ideal"}</th>
                  <th className="text-left px-5 py-3 font-semibold text-red-700 dark:text-red-400">{ko ? "경고 구간" : "Warning"}</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">{ko ? "왜 중요한가" : "Why It Matters"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {BOOK_QUALITY.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                    <td className="px-5 py-4 font-semibold text-gray-900 dark:text-gray-100">{row.metric(ko)}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${row.idealColor}`}>
                        {typeof row.ideal === "function" ? (row.ideal as (ko: boolean) => string)(ko) : row.ideal}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${row.warningColor}`}>
                        {typeof row.warning === "function" ? (row.warning as (ko: boolean) => string)(ko) : row.warning}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{row.desc(ko)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* HQ Book Blockquote */}
          <blockquote
            className="rounded-xl p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700"
            style={{ borderLeft: "4px solid #3182f6" }}
          >
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed italic mb-2">
              {ko
                ? '"High Quality Book의 정의: Real Money 70%+, 헤지펀드 20%-, 커버리지 3–5배. 이 세 조건이 갖춰지면 가격을 밴드 상단으로 올릴 수 있다."'
                : '"The definition of a High Quality Book: Real Money 70%+, Hedge Fund sub-20%, coverage 3–5x. When all three conditions are met, you can push pricing to the top of the band."'}
            </p>
            <cite className="text-xs text-blue-600 dark:text-blue-400 not-italic font-semibold">
              {ko ? "— 익명 ECM 신디케이트 뱅커" : "— Anonymous ECM Syndicate Banker"}
            </cite>
          </blockquote>
        </motion.section>

        {/* ── Ch.5: 앵커 선순환 + 락업 협상 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "앵커 선순환 메커니즘 + 락업 협상의 현실" : "Anchor Flywheel Mechanism + Lockup Negotiation Reality"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            {ko ? "한 명의 앵커가 어떻게 전체 북빌딩의 성패를 바꾸는가" : "How a single anchor can determine the success or failure of the entire book-building"}
          </p>

          {/* Anchor flywheel */}
          <div className="rounded-2xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-6 mb-8">
            <h3 className="text-base font-bold text-blue-900 dark:text-blue-100 mb-5">
              {ko ? "앵커 선순환 (Anchor Flywheel)" : "Anchor Flywheel Effect"}
            </h3>

            <div className="space-y-3">
              {[
                {
                  step: "01",
                  action: (ko: boolean) => ko
                    ? "앵커가 확약 — \"$100mn 투자하겠다, 90일 락업 수락\""
                    : "Anchor commits — \"$100mn investment, accepting 90-day lockup\"",
                  effect: (ko: boolean) => ko
                    ? "오더북 첫 20–30%가 확보됨"
                    : "First 20–30% of the order book is secured",
                  color: "bg-blue-500",
                },
                {
                  step: "02",
                  action: (ko: boolean) => ko
                    ? "QIB에게 \"앵커로 GIC·Temasek이 들어왔다\"는 정보 공유"
                    : "QIBs informed: \"GIC and Temasek anchored this deal\"",
                  effect: (ko: boolean) => ko
                    ? "QIB들이 '스마트 머니가 들어왔다'고 판단 → 관심 급증"
                    : "QIBs conclude 'smart money has entered' → interest surges",
                  color: "bg-blue-400",
                },
                {
                  step: "03",
                  action: (ko: boolean) => ko
                    ? "QIB 오더 쏟아짐 — 3–5배 커버리지 달성"
                    : "QIB orders flood in — coverage reaches 3–5x",
                  effect: (ko: boolean) => ko
                    ? "가격을 밴드 상단 또는 그 이상으로 올릴 수 있는 협상력 생김"
                    : "Pricing leverage created to push to top of band or beyond",
                  color: "bg-blue-300",
                },
                {
                  step: "04",
                  action: (ko: boolean) => ko
                    ? "공모가 밴드 상단 확정 — 발행사 자금 조달 극대화"
                    : "Offer price set at top of band — issuer maximizes proceeds",
                  effect: (ko: boolean) => ko
                    ? "성공적 IPO 완료 → 앵커 투자자의 평판 강화 → 다음 딜에서도 앵커 요청"
                    : "Successful IPO → anchor's reputation strengthened → invited as anchor in next deal",
                  color: "bg-blue-200",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${step.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white/70 dark:bg-gray-900/50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-0.5">{step.action(ko)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{ko ? "→ " : "→ "}{step.effect(ko)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-blue-100/60 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 p-3">
              <p className="text-xs text-blue-800 dark:text-blue-300">
                {ko
                  ? "선순환의 핵심: 앵커 한 명이 '가격 보험'을 제공하면 전체 북이 자기실현적으로(self-fulfilling) 완성된다. 앵커 없는 IPO는 시작부터 오르막을 달린다."
                  : "The flywheel core: one anchor providing 'price insurance' makes the entire book self-fulfilling. An IPO without anchors starts uphill from the very beginning."}
              </p>
            </div>
          </div>

          {/* Lockup negotiation table */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "락업 협상 구조 — 실제 현실" : "Lockup Negotiation Structure — The Reality"}
          </h3>

          <div className="space-y-3 mb-6">
            {LOCKUP_NEGOTIATION.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.06)}
                className={`rounded-xl border p-4 ${row.color} flex items-start gap-4`}
              >
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${row.dot}`} />
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">{ko ? "투자자 유형" : "Investor Type"}</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{row.investor(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">{ko ? "락업 기간" : "Lock-up Period"}</span>
                    <span className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300">{typeof row.lockup === "function" ? (row.lockup as (ko: boolean) => string)(ko) : row.lockup}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">{ko ? "레버리지 근거" : "Leverage Basis"}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{row.leverage(ko)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-5"
            style={{ borderLeft: "4px solid #f59e0b" }}
          >
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>{ko ? "실전 포인트: " : "Practitioner Point: "}</strong>
              {ko
                ? "락업 만료일(Lockup Expiry)은 IPO 이후 주가 변동의 주요 이벤트입니다. PE·창업자의 180일 락업이 만료되면 시장은 대규모 매도 오버행을 예상합니다. 실제로 락업 만료 전 2–4주가 주가 약세의 패턴을 보이는 경우가 많습니다. 뱅커들은 이 시기에 맞춰 Follow-on Offering(팔로우온)을 통해 오버행을 정리하는 전략을 사용합니다."
                : "The lockup expiry date is a major post-IPO stock price event. When PE and founder 180-day lockups expire, the market anticipates a large sell overhang. In practice, the 2–4 weeks before lockup expiry often show a pattern of stock weakness. Bankers use this period to 'clear the overhang' via a strategic Follow-on Offering — turning a potential price headwind into an orderly exit."}
            </p>
          </div>
        </motion.section>

        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

        {/* ── FAQ ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} />
        </motion.section>

        {/* ── Related Content ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-5">
            {ko ? "연관 콘텐츠" : "Related Content"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/market-101/ecm-ipo-issuers",
                label: (ko: boolean) => ko ? "ECM Ch.1 — IPO 발행사 5유형" : "ECM Ch.1 — Five IPO Issuer Types",
                tag: (ko: boolean) => ko ? "이전 챕터" : "Previous Chapter",
                tagColor: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
              },
              {
                href: "/market-101/ecm-ipo-valuation",
                label: (ko: boolean) => ko ? "ECM Ch.3 — IPO 밸류에이션 방법론" : "ECM Ch.3 — IPO Valuation Methods",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market-101/ecm-ipo-bookbuilding",
                label: (ko: boolean) => ko ? "ECM Ch.5 — 북빌딩 실전" : "ECM Ch.5 — Book-Building in Practice",
                tag: (ko: boolean) => ko ? "연관 챕터" : "Related Chapter",
                tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
              {
                href: "/market-101/dcm-investors",
                label: (ko: boolean) => ko ? "DCM Ch.2 — 채권 투자자 생태계 비교" : "DCM Ch.2 — Bond Investor Ecosystem (comparison)",
                tag: (ko: boolean) => ko ? "연관 시리즈" : "Related Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
            ].map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all group"
              >
                <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${rel.tagColor}`}>
                  {rel.tag(ko)}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {rel.label(ko)}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

        {/* ── References ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <motion.h2
            variants={fadeUp()}
            className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5"
          >
            {ko ? "참고 자료" : "References"}
          </motion.h2>
          <ol className="space-y-3">
            {SOURCES.map((ref) => (
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
                  <span className="text-gray-400 dark:text-gray-500">{ref.source}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Prev / Next ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8 mt-8"
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "이전" : "Previous"}</span>
                {prev.title(ko)}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group text-right"
            >
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "다음" : "Next"}</span>
                {next.title(ko)}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-ipo-investors");
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
    </div>
  );
}
