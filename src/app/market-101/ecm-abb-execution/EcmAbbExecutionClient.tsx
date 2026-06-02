"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

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
const ACCENT = "#3182f6";

// ── ECM Practical Series Nav ───────────────────────────────────────────────────
const ECM_PRACTICAL_SERIES = [
  { slug: "ecm-abb-execution",  title: (ko: boolean) => ko ? "ABB 실행 매뉴얼"  : "ABB Execution"     },
  { slug: "ecm-rights-issue",   title: (ko: boolean) => ko ? "유상증자"          : "Rights Issue"      },
  { slug: "ecm-ipo-allocation",  title: (ko: boolean) => ko ? "IPO 배분 전략"    : "IPO Allocation"    },
  { slug: "ecm-pitchbook",      title: (ko: boolean) => ko ? "ECM 피치북"        : "ECM Pitchbook"     },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",       en: "30-sec Summary"     },
  { id: "ch2", ko: "ABB란",           en: "What Is ABB"        },
  { id: "ch3", ko: "시간대별 프로세스", en: "Hour-by-Hour"      },
  { id: "ch4", ko: "할인율 결정",      en: "Discount Logic"     },
  { id: "ch5", ko: "배분 전략",        en: "Allocation"         },
  { id: "ch6", ko: "글로벌 케이스",    en: "Global Cases"       },
  { id: "ch7", ko: "실패 시나리오",    en: "Failure Modes"      },
];

// ── 30초 요약 ─────────────────────────────────────────────────────────────────
const QUICK_STATS = [
  { labelKo: "소요 시간",              labelEn: "Timeline",       value: "12 – 24h" },
  { labelKo: "할인율",                 labelEn: "Discount",       value: "3 – 5%"   },
  { labelKo: "최소 딜 사이즈",         labelEn: "Min Deal Size",  value: "$200M+"   },
  { labelKo: "IOI → Pricing",         labelEn: "IOI → Pricing",  value: "2 – 4h"   },
];

// ── ABB vs IPO vs 유상증자 비교 ───────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    field: (ko: boolean) => ko ? "소요 시간"      : "Timeline",
    abb:   (ko: boolean) => ko ? "12~24시간"      : "12–24 hours",
    ipo:   (ko: boolean) => ko ? "6~18개월"       : "6–18 months",
    rights:(ko: boolean) => ko ? "4~6주"          : "4–6 weeks",
  },
  {
    field: (ko: boolean) => ko ? "할인율"         : "Discount",
    abb:   (ko: boolean) => ko ? "3~5%"           : "3–5%",
    ipo:   (ko: boolean) => ko ? "0~5% NIC"       : "0–5% NIC",
    rights:(ko: boolean) => ko ? "20~40%"         : "20–40%",
  },
  {
    field: (ko: boolean) => ko ? "서류"           : "Documentation",
    abb:   (ko: boolean) => ko ? "Teaser 1장"     : "1-page Teaser",
    ipo:   (ko: boolean) => ko ? "S-1 (수백 페이지)" : "S-1 (hundreds of pages)",
    rights:(ko: boolean) => ko ? "증권신고서"      : "Prospectus",
  },
  {
    field: (ko: boolean) => ko ? "투자자 수"      : "# of Investors",
    abb:   (ko: boolean) => ko ? "30~80개 계좌"   : "30–80 accounts",
    ipo:   (ko: boolean) => ko ? "수백~수천"       : "Hundreds to thousands",
    rights:(ko: boolean) => ko ? "기존 주주"       : "Existing shareholders",
  },
  {
    field: (ko: boolean) => ko ? "사용 목적"      : "Purpose",
    abb:   (ko: boolean) => ko ? "PE 엑싯 · 신속 조달" : "PE exit · Quick raise",
    ipo:   (ko: boolean) => ko ? "최초 공개 · 자본 조달" : "First listing · Capital raise",
    rights:(ko: boolean) => ko ? "기존 주주 보호 · 대규모 조달" : "Shareholder protection · Large raise",
  },
];

// ── 타임라인 단계 ──────────────────────────────────────────────────────────────
const TIMELINE_STEPS = [
  {
    hour: "Hour 0",
    time: (ko: boolean) => ko ? "장 마감 직후 (15:30~16:00)" : "Market Close (15:30–16:00)",
    color: "border-blue-400 bg-blue-50 dark:bg-blue-900/20",
    dotColor: "bg-blue-400",
    items: [
      (ko: boolean) => ko ? "발행사(또는 대주주) → 주관사에 딜 의사 전달" : "Issuer (or major shareholder) → notifies bank of deal intent",
      (ko: boolean) => ko ? "Confidentiality Agreement (CA) 체결" : "Confidentiality Agreement (CA) executed",
      (ko: boolean) => ko ? "딜 사이즈·가격 범위 잠정 협의" : "Preliminary discussion on deal size and price range",
    ],
  },
  {
    hour: "Hour 1~2",
    time: (ko: boolean) => ko ? "Mandate 체결" : "Mandate Signed",
    color: "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20",
    dotColor: "bg-indigo-400",
    items: [
      (ko: boolean) => ko ? "주관사 내부 승인 (위험관리위원회 등)" : "Internal bank approval (risk committee, etc.)",
      (ko: boolean) => ko ? "Deal Team 구성: 해당 섹터 세일즈 + 트레이더" : "Deal Team formed: sector sales + traders",
      (ko: boolean) => ko ? "Target 투자자 리스트 작성 (보통 30~80개 계좌)" : "Target investor list compiled (typically 30–80 accounts)",
      (ko: boolean) => ko ? "Teaser(1페이지 딜 요약) 작성" : "Teaser (1-page deal summary) drafted",
    ],
  },
  {
    hour: "Hour 2~6",
    time: (ko: boolean) => ko ? "마케팅 단계" : "Marketing Phase",
    color: "border-violet-400 bg-violet-50 dark:bg-violet-900/20",
    dotColor: "bg-violet-400",
    items: [
      (ko: boolean) => ko ? "기관 투자자에 개별 연락 (전화 + 이메일)" : "Individual outreach to institutional investors (phone + email)",
      (ko: boolean) => ko ? "딜 구조, 가격 범위, 락업 조건 설명" : "Deal structure, price range, and lock-up terms explained",
      (ko: boolean) => ko ? "IOI (Indication of Interest) 수집 시작" : "IOI (Indication of Interest) collection begins",
    ],
  },
  {
    hour: "Hour 6~8",
    time: (ko: boolean) => ko ? "수요 집계" : "Demand Aggregation",
    color: "border-teal-400 bg-teal-50 dark:bg-teal-900/20",
    dotColor: "bg-teal-400",
    items: [
      (ko: boolean) => ko ? "IOI Tracker 업데이트 (투자자명, 금액, 가격 조건)" : "IOI Tracker updated (investor name, size, price condition)",
      (ko: boolean) => ko ? "커버리지 계산: 현재 수요 ÷ 딜 사이즈" : "Coverage calculated: current demand ÷ deal size",
      (ko: boolean) => ko ? "주관사 → 발행사 수요 현황 보고" : "Bank → Issuer demand status briefing",
    ],
  },
  {
    hour: "Hour 8~10",
    time: (ko: boolean) => ko ? "Pricing 결정" : "Pricing Decision",
    color: "border-orange-400 bg-orange-50 dark:bg-orange-900/20",
    dotColor: "bg-orange-400",
    items: [
      (ko: boolean) => ko ? "수요 1.5× 이상 → 가격 결정 진행" : "Demand ≥1.5× → proceed to pricing",
      (ko: boolean) => ko ? "수요 1× 미만 → 가격 낮추거나 딜 연기 검토" : "Demand <1× → consider price cut or postponement",
      (ko: boolean) => ko ? "최종 가격 = 시장가 − 할인율" : "Final price = market price − discount",
      (ko: boolean) => ko ? "발행사 이사회/CFO 최종 승인" : "Issuer board / CFO final sign-off",
    ],
  },
  {
    hour: "Hour 10~12",
    time: (ko: boolean) => ko ? "배분 & 서류" : "Allocation & Documentation",
    color: "border-rose-400 bg-rose-50 dark:bg-rose-900/20",
    dotColor: "bg-rose-400",
    items: [
      (ko: boolean) => ko ? "투자자별 배분 계산 (수요 대비 비례)" : "Per-investor allocation calculated (pro-rata to demand)",
      (ko: boolean) => ko ? "인수계약서 서명" : "Underwriting agreement signed",
      (ko: boolean) => ko ? "거래소 공시 (장 시작 전 의무)" : "Exchange disclosure filed (mandatory before market open)",
    ],
  },
  {
    hour: "Hour 12",
    time: (ko: boolean) => ko ? "장 시작" : "Market Open",
    color: "border-green-400 bg-green-50 dark:bg-green-900/20",
    dotColor: "bg-green-400",
    items: [
      (ko: boolean) => ko ? "신주 또는 구주 매도 완료" : "New or existing shares sold — deal settled",
      (ko: boolean) => ko ? "안정화 모니터링 시작 (필요 시 그린슈 활용)" : "Stabilization monitoring begins (greenshoe if needed)",
    ],
  },
];

// ── 할인율 요소 ───────────────────────────────────────────────────────────────
const DISCOUNT_FACTORS = [
  {
    num: "01",
    factor: (ko: boolean) => ko ? "딜 사이즈 (시가총액 대비)" : "Deal Size (vs. Market Cap)",
    detail: (ko: boolean) => ko ? "시총 대비 5% 이상이면 할인 커짐 — 시장 흡수력 부담" : "Deal >5% of market cap widens discount — market absorption burden",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    num: "02",
    factor: (ko: boolean) => ko ? "주식 유동성 (일평균거래량 기준)" : "Stock Liquidity (ADTV)",
    detail: (ko: boolean) => ko ? "ADTV 낮을수록 할인 커짐 — 투자자가 이후 매도하기 어려움" : "Lower ADTV → wider discount — investors struggle to exit afterward",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    num: "03",
    factor: (ko: boolean) => ko ? "시장 컨디션 (VIX)" : "Market Conditions (VIX)",
    detail: (ko: boolean) => ko ? "VIX 높을수록 할인 커짐 — 시장 불확실성이 리스크 프리미엄 요구" : "Higher VIX → wider discount — uncertainty demands higher risk premium",
    color: "text-violet-600 dark:text-violet-400",
  },
  {
    num: "04",
    factor: (ko: boolean) => ko ? "발행사 신용도 (이름값)" : "Issuer Credit / Brand",
    detail: (ko: boolean) => ko ? "블루칩 기업은 할인 작아도 됨 — 투자자 신뢰 및 유동성 보장" : "Blue-chip issuers can price with smaller discount — investor confidence and liquidity assured",
    color: "text-teal-600 dark:text-teal-400",
  },
  {
    num: "05",
    factor: (ko: boolean) => ko ? "경쟁 매수 (수요 강도)" : "Competitive Demand (Order Strength)",
    detail: (ko: boolean) => ko ? "수요가 많으면 할인 줄임 — 오버서브 시 발행사가 협상력 확보" : "Strong demand → narrow discount — issuer gains pricing power when oversubscribed",
    color: "text-orange-600 dark:text-orange-400",
  },
];

// ── 할인율 케이스 바 차트 ─────────────────────────────────────────────────────
const DISCOUNT_CASES = [
  { labelKo: "삼성전자 (ADTV $1B+)",  labelEn: "Samsung (ADTV $1B+)",      discount: 1.5, coverage: 4.2, barW: 10 },
  { labelKo: "글로벌 대형 블루칩",    labelEn: "Global Large-Cap",          discount: 2.5, coverage: 3.0, barW: 18 },
  { labelKo: "일반 대형주",           labelEn: "Standard Large-Cap",        discount: 3.5, coverage: 2.1, barW: 25 },
  { labelKo: "중소형주 블록",         labelEn: "Mid-Cap Block",             discount: 5.5, coverage: 1.5, barW: 39 },
  { labelKo: "비유동 중소형주",       labelEn: "Illiquid Mid-Cap",          discount: 7.0, coverage: 1.1, barW: 50 },
];

// ── 배분 전략 ─────────────────────────────────────────────────────────────────
const ALLOCATION_RULES = [
  {
    type: "LO",
    labelKo: "장기 기관 (Long-Only)",
    labelEn: "Long-Only (LO)",
    pct: "70%",
    pros: (ko: boolean) => ko ? "주가 안정, 장기 보유, 브랜드 가치 보호" : "Price stability, long-term hold, brand value protection",
    cons: (ko: boolean) => ko ? "수요 부족 시 딜 채우기 어려울 수 있음" : "May struggle to fill deal if demand is thin",
    bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
    tc: "text-blue-800 dark:text-blue-200",
  },
  {
    type: "HF",
    labelKo: "헤지펀드 (Hedge Fund)",
    labelEn: "Hedge Fund (HF)",
    pct: "30%",
    pros: (ko: boolean) => ko ? "수요 채우기 용이, 딜 성사 확률 높임" : "Fills demand, increases deal completion probability",
    cons: (ko: boolean) => ko ? "첫날 매도로 주가 하락 가능" : "First-day selling may pressure the stock",
    bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",
    tc: "text-amber-800 dark:text-amber-200",
  },
];

// ── 글로벌 케이스 ──────────────────────────────────────────────────────────────
const GLOBAL_CASES = [
  {
    emoji: "🤖",
    result: (ko: boolean) => ko ? "✅ 3× 오버서브" : "✅ 3× Oversubscribed",
    title: "ARM Holdings $10B Block (2023)",
    badge: (ko: boolean) => ko ? "대형 블록 / 코너스톤" : "Mega Block / Cornerstone",
    tagline: (ko: boolean) => ko
      ? "SoftBank의 단계적 지분 매각. 11개 MLA가 12시간 내 처리. 코너스톤 앵커 효과로 3× 오버서브 달성."
      : "SoftBank's staged stake sale. 11 MLAs completed execution in 12 hours. Cornerstone anchor effect drove 3× oversubscription.",
    lesson: (ko: boolean) => ko
      ? "이름값 있는 발행사 + 복수 주관사 구조 + 코너스톤 앵커 배치의 조합이 ABB에서 할인율을 최소화하는 공식이다."
      : "Blue-chip issuer + multi-bank structure + cornerstone anchor placement is the formula for minimizing ABB discount.",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
    labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    emoji: "🏗️",
    result: (ko: boolean) => ko ? "✅ 성공 (오전 6시 딜)" : "✅ Success (6am Deal)",
    title: (ko: boolean) => ko ? "삼성물산 블록 트레이드" : "Samsung C&T Block Trade",
    badge: (ko: boolean) => ko ? "한국 시장 특수 구조" : "Korea-Specific Structure",
    tagline: (ko: boolean) => ko
      ? "PE 펀드의 지분 매각. 한국 시장 특유의 오전 6시 딜 — 한국 시간 기준 미국 장 후반부와 겹쳐 글로벌 기관 참여 극대화."
      : "PE fund stake exit. Korea's typical 6am deal — timed to overlap with late US session, maximizing global institutional participation.",
    lesson: (ko: boolean) => ko
      ? "한국 ABB의 특수성: 오전 6시 가격 결정 → 오전 9시 장 시작 전 공시 완료. 미국/유럽 기관 동시 참여가 가능한 시간대 설계."
      : "Korea ABB specifics: 6am pricing → disclosure before 9am open. Timed to allow simultaneous US/Europe institutional participation.",
    color: "border-teal-200 dark:border-teal-700 bg-teal-50/60 dark:bg-teal-900/20",
    labelColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    emoji: "📉",
    result: (ko: boolean) => ko ? "❌ 딜 취소" : "❌ Deal Pulled",
    title: "Snap Inc. Block (2022)",
    badge: (ko: boolean) => ko ? "실패 케이스 — 수요 거부" : "Failure Case — Demand Rejection",
    tagline: (ko: boolean) => ko
      ? "주가 하락 중 블록 시도 → 투자자들이 할인율 8% 요구 → 발행사 거부 → 딜 취소. 시장이 받아주지 않을 때의 선택."
      : "Block attempted during stock decline → investors demanded 8% discount → issuer refused → deal pulled. The choice when the market won't bite.",
    lesson: (ko: boolean) => ko
      ? "ABB의 핵심 리스크: 시장 컨디션이 나쁠 때 주관사는 할인율을 높여야 하는데, 발행사가 거부하면 딜 취소 외 선택지가 없다. 취소 자체가 IR 타격이다."
      : "Core ABB risk: when market conditions are poor, the bank must widen the discount — if the issuer refuses, there's no option but to pull. The pull itself is an IR blow.",
    color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
];

// ── 실패 시나리오 ──────────────────────────────────────────────────────────────
const FAILURE_CAUSES = [
  {
    num: "1",
    cause: (ko: boolean) => ko ? "수요 < 1×" : "Demand < 1×",
    detail: (ko: boolean) => ko ? "오더북이 채워지지 않음 — 가격 대폭 낮추거나 취소" : "Order book not filled — deep price cut or cancellation required",
    color: "border-red-300 dark:border-red-700",
  },
  {
    num: "2",
    cause: (ko: boolean) => ko ? "정보 유출 (Information Leak)" : "Information Leak",
    detail: (ko: boolean) => ko ? "주가 급락으로 타이밍 놓침 — 법적 조사 및 손해배상 리스크" : "Stock drops before execution — legal investigation and liability risk",
    color: "border-orange-300 dark:border-orange-700",
  },
  {
    num: "3",
    cause: (ko: boolean) => ko ? "락업 기간 내 시도" : "Within Lock-up Period",
    detail: (ko: boolean) => ko ? "기존 락업 계약 위반 → 주관사 법적 책임 및 투자자 소송 가능" : "Violates existing lock-up agreement → bank liability and potential investor lawsuit",
    color: "border-amber-300 dark:border-amber-700",
  },
];

const FAILURE_RESPONSES = [
  { icon: "✂️", ko: "딜 사이즈 축소",           en: "Reduce deal size"           },
  { icon: "⬇️", ko: "가격 낮추기 (추가 할인)",   en: "Lower price (extra discount)" },
  { icon: "📅", ko: "일정 연기 (다른 날 재시도)", en: "Postpone (retry another day)" },
  { icon: "🚫", ko: "취소 (IR 타격 감수)",        en: "Cancel (accept IR damage)"    },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "ABB와 단순 블록 트레이드의 차이는 무엇인가요?"
      : "What is the difference between an ABB and a simple block trade?",
    a: (ko: boolean) => ko
      ? "블록 트레이드(Block Trade)는 단순히 대량의 주식을 장외에서 거래하는 행위입니다. ABB(Accelerated Book-Build)는 블록 트레이드의 한 형태이지만, 주관사가 공식적으로 IOI를 수집하고 가격 범위를 설정한 뒤 배분하는 구조화된 프로세스입니다. 즉, ABB는 주관사가 리스크를 일부 부담하고 인수(Underwriting)하는 것이고, 단순 블록 트레이드는 주관사가 매도자와 매수자를 직접 연결(브로킹)하는 것입니다. 딜 사이즈 $200M 이하는 소형 블록 트레이드, 그 이상은 ABB 구조를 주로 활용합니다."
      : "A block trade is simply a large-volume share transaction executed off-market. An ABB (Accelerated Book-Build) is a structured form of block trade where the bank formally collects IOIs, sets a price range, and then allocates shares. The key difference: in an ABB, the bank partially underwrites (takes on risk), while in a simple block trade, the bank acts purely as a broker connecting seller and buyer. Deals below $200M typically use simple block trades; larger deals use the ABB structure.",
  },
  {
    q: (ko: boolean) => ko
      ? "기업이 자기 주식을 ABB로 매입할 수 있나요 (자사주)?"
      : "Can a company buy back its own shares through an ABB (treasury shares)?",
    a: (ko: boolean) => ko
      ? "자사주 매입(Share Buyback)은 일반적으로 ABB와 반대 방향의 거래입니다. 자사주 매입은 회사가 시장에서 자기 주식을 사는 것이고, ABB는 대주주나 발행사가 주식을 기관에 파는 것입니다. 그러나 일부 케이스에서는 회사가 ABB로 나온 대규모 매도 물량을 직접 매입하는 'ABB + 자사주 병행' 구조를 사용하기도 합니다. 이 경우 기존 주주 희석을 최소화하면서 PE 엑싯을 지원하는 효과가 있습니다."
      : "Share buybacks are typically the reverse of an ABB. A buyback is the company purchasing its own shares from the market, while an ABB is a major shareholder or issuer selling shares to institutions. However, in some cases, a company runs an 'ABB + buyback' parallel structure — the company purchases part of the block itself, minimizing dilution to existing shareholders while supporting the PE exit.",
  },
  {
    q: (ko: boolean) => ko
      ? "ABB 진행 중 정보가 새나가면 어떻게 되나요?"
      : "What happens if information leaks during an ABB?",
    a: (ko: boolean) => ko
      ? "ABB는 비공개로 진행되다가 완료 후 공시하는 구조이므로 정보 유출이 내부자 거래(Insider Trading) 이슈로 직결됩니다. 유출이 발생하면 주가가 공시 전 급락해 할인율이 높아지고 딜 타이밍을 잃습니다. 주관사는 CA(기밀유지계약) 체결 전 정보를 제공하지 않으며, 투자자도 IOI를 내기 전 CA에 서명합니다. 규제 당국(한국: 금감원, 미국: SEC)은 이상 거래를 자동으로 탐지하므로 유출 즉시 조사가 시작됩니다."
      : "Since ABBs are conducted confidentially and disclosed only after completion, a leak directly triggers insider trading concerns. A leak causes the stock to drop before disclosure, widening the required discount and destroying the deal's timing. Banks don't share information before a CA is signed, and investors must sign a CA before submitting IOIs. Regulators (FSS in Korea, SEC in the US) automatically detect abnormal trading patterns, so an investigation begins immediately upon any leak.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국에서 ABB와 유사한 제도가 있나요?"
      : "Does Korea have a structure similar to ABB?",
    a: (ko: boolean) => ko
      ? "한국 자본시장법 체계에서는 ABB가 '시간 외 대량매매(블록딜)'로 분류됩니다. 구체적으로 한국거래소 규정에 따라 장 종료 후(오후 3:30 이후) 또는 장 시작 전(오전 8:00~9:00)에 대량 매매를 체결하고, 체결 즉시 거래소에 공시합니다. 한국 ABB의 특징은 오전 6시경 가격 결정 후 9시 장 개시 전 공시를 완료하는 구조이며, 이 시간대가 미국 동부 시간 기준 오후 5~6시(미국 장 마감 후반)와 겹쳐 글로벌 기관의 동시 참여를 유도합니다."
      : "Under the Korean Capital Markets Act, an ABB is classified as an 'after-hours large-lot transaction (block deal).' Under KRX rules, large trades are executed after market close (after 15:30) or before market open (08:00–09:00), with mandatory immediate disclosure to the exchange. Korean ABBs typically set pricing around 6am, completing disclosure before the 9am opening — this timing coincides with late US Eastern hours (5–6pm), enabling simultaneous global institutional participation.",
  },
  {
    q: (ko: boolean) => ko
      ? "ABB 실패가 주가에 미치는 장기 영향은 무엇인가요?"
      : "What is the long-term impact of a failed ABB on the stock price?",
    a: (ko: boolean) => ko
      ? "ABB 실패(딜 취소)는 단기 주가에 큰 타격을 줍니다. '이 주식을 팔려는 대주주가 있다'는 사실이 시장에 알려지면 주가는 보통 5~15% 하락합니다. 장기적으로는 ① 대주주의 추가 매도 오버행이 지속되며, ② 회사가 '주주 기반이 불안정하다'는 인식을 갖게 됩니다. 단, 발행사가 실패 이유를 명확히 설명하고('시장 조건 문제, 사업 기초체력은 문제없음') IR을 적극적으로 하면 2~3개월 내 주가 회복이 가능합니다."
      : "A failed ABB (deal pulled) delivers a significant short-term blow to the stock. Once the market learns that a major shareholder tried to sell, the stock typically falls 5–15%. Long-term effects include: ① persistent overhang from the shareholder's continued selling intent, and ② a market perception that the shareholder base is unstable. However, if the issuer clearly communicates the failure reason ('market conditions, not fundamentals') and runs active IR, a price recovery within 2–3 months is achievable.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_PRACTICAL_SERIES.map((ch) => (
            <Link
              key={ch.slug}
              href={`${ko ? "" : "/en"}/market-101/${ch.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                ch.slug === "ecm-abb-execution"
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
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function QuickStatsBar({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {QUICK_STATS.map((stat, i) => (
        <motion.div
          key={stat.labelKo}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4 text-center"
        >
          <p className="text-[22px] font-black text-blue-700 dark:text-blue-300 mb-1">{stat.value}</p>
          <p className="text-[10px] text-blue-600 dark:text-blue-400 font-medium leading-tight">
            {ko ? stat.labelKo : stat.labelEn}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ComparisonTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "ABB vs IPO vs 유상증자 — 핵심 비교" : "ABB vs IPO vs Rights Issue — Key Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200/60 dark:border-gray-700/60">
              <th className="text-left px-5 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider w-1/4">
                {ko ? "구분" : "Metric"}
              </th>
              <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider w-1/4" style={{ color: ACCENT }}>
                ABB
              </th>
              <th className="text-center px-4 py-3 text-[10px] font-bold text-violet-500 uppercase tracking-wider w-1/4">
                IPO
              </th>
              <th className="text-center px-4 py-3 text-[10px] font-bold text-teal-500 uppercase tracking-wider w-1/4">
                {ko ? "유상증자" : "Rights Issue"}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr
                key={row.field(ko)}
                className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}`}
              >
                <td className="px-5 py-3 text-[11px] font-semibold text-gray-600 dark:text-gray-400">{row.field(ko)}</td>
                <td className="px-4 py-3 text-center font-medium text-blue-700 dark:text-blue-300">{row.abb(ko)}</td>
                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.ipo(ko)}</td>
                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.rights(ko)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function AnalogyBox({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
      <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">
        {label ?? "Analogy"}
      </p>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function PracticeBox({ ko }: { ko: boolean }) {
  const columns = [
    ko ? "투자자명"       : "Investor Name",
    ko ? "계좌유형"       : "Account Type",
    ko ? "IOI 금액"       : "IOI Amount",
    ko ? "가격조건(CAP)"  : "Price Condition (CAP)",
    ko ? "최종 배분"      : "Final Allocation",
    ko ? "실제 입금"      : "Actual Settlement",
    ko ? "담당 세일즈"    : "Coverage Sales",
  ];
  return (
    <motion.div variants={fadeUp(0.2)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "IOI Tracker 구조 — 실제 스프레드시트 컬럼" : "IOI Tracker Structure — Real Spreadsheet Columns"}
        </p>
      </div>
      <div className="p-5 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {columns.map((col, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-center"
            >
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">{String(i + 1).padStart(2, "0")}</p>
              <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight">{col}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">
          {ko
            ? "수요 집계 단계(Hour 6~8)에서 실시간 업데이트. 커버리지 배수(= 총 IOI ÷ 딜 사이즈)가 1.5× 이상이 되면 Pricing 단계로 진행."
            : "Updated in real time during demand aggregation (Hour 6–8). Once coverage multiple (= total IOI ÷ deal size) reaches 1.5×, move to Pricing."}
        </p>
      </div>
    </motion.div>
  );
}

function TimelineBlock({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-0">
      {TIMELINE_STEPS.map((step, i) => (
        <div key={i} className="flex gap-4 items-start relative">
          {i < TIMELINE_STEPS.length - 1 && (
            <div className="absolute left-[19px] top-10 w-px h-full bg-gray-200 dark:bg-gray-700 z-0" />
          )}
          <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white z-10 ${step.dotColor}`}>
            {i + 1}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
            className={`flex-1 rounded-xl border p-4 mb-4 ${step.color}`}
          >
            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <span className="text-[12px] font-black text-gray-700 dark:text-gray-200">{step.hour}</span>
              <span className="text-[11px] text-gray-500 dark:text-gray-400">{step.time(ko)}</span>
            </div>
            <ul className="space-y-1">
              {step.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px] text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                  {item(ko)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

function DiscountFactorCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-3">
      {DISCOUNT_FACTORS.map((f, i) => (
        <motion.div
          key={f.num}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className="flex gap-4 items-start rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
        >
          <span className={`text-[11px] font-black flex-shrink-0 ${f.color}`}>{f.num}</span>
          <div>
            <p className={`text-[13px] font-bold mb-0.5 ${f.color}`}>{f.factor(ko)}</p>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.detail(ko)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function DiscountBarChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.2)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "할인율 vs 커버리지 배수 — 5개 케이스 비교" : "Discount Rate vs Coverage Multiple — 5 Case Comparison"}
        </p>
      </div>
      <div className="p-5 space-y-3">
        {DISCOUNT_CASES.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <p className="text-[11px] text-gray-600 dark:text-gray-400 w-40 flex-shrink-0 leading-tight">
              {ko ? c.labelKo : c.labelEn}
            </p>
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-5 overflow-hidden">
              <motion.div
                className="h-full rounded-full flex items-center pl-2"
                style={{ background: ACCENT }}
                initial={{ width: 0 }}
                whileInView={{ width: `${c.barW}%` }}
                viewport={VP}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              >
                <span className="text-[10px] font-bold text-white whitespace-nowrap">{c.discount}%</span>
              </motion.div>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 w-24 text-right flex-shrink-0">
              {ko ? `커버리지 ${c.coverage}×` : `Coverage ${c.coverage}×`}
            </p>
          </div>
        ))}
        <p className="text-[10px] text-gray-400 mt-2">
          {ko ? "← 할인율(%) / 우측: 수요 커버리지 배수" : "← Discount rate (%) / right: demand coverage multiple"}
        </p>
      </div>
    </motion.div>
  );
}

function AllocationCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ALLOCATION_RULES.map((rule, i) => (
        <motion.div
          key={rule.type}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
          className={`rounded-xl border p-5 ${rule.bg}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[11px] font-black ${rule.tc}`}>{rule.type}</span>
            <span className={`text-[22px] font-black ${rule.tc}`}>{rule.pct}</span>
          </div>
          <p className={`text-[13px] font-bold mb-3 ${rule.tc}`}>{ko ? rule.labelKo : rule.labelEn}</p>
          <div className="space-y-1.5">
            <div>
              <p className="text-[9px] font-black text-green-600 dark:text-green-400 uppercase tracking-wider mb-0.5">
                {ko ? "장점" : "Pros"}
              </p>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{rule.pros(ko)}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-red-500 dark:text-red-400 uppercase tracking-wider mb-0.5">
                {ko ? "단점" : "Cons"}
              </p>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{rule.cons(ko)}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {GLOBAL_CASES.map((cs, i) => (
        <motion.div key={i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.badge(ko)}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">{cs.result(ko)}</span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">{typeof cs.title === "function" ? cs.title(ko) : cs.title}</h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{cs.tagline(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                {cs.lesson(ko)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function FailureBlock({ ko }: { ko: boolean }) {
  return (
    <div className="mt-8 space-y-4">
      <motion.div variants={fadeUp(0.05)} className="space-y-3">
        <p className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
          {ko ? "주요 실패 원인 3가지" : "3 Primary Failure Causes"}
        </p>
        {FAILURE_CAUSES.map((f, i) => (
          <motion.div
            key={f.num}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
            className={`flex gap-3 items-start rounded-xl border-l-4 pl-4 py-3 pr-4 bg-white dark:bg-gray-900 border ${f.color}`}
          >
            <span className="text-[11px] font-black text-gray-400 flex-shrink-0 mt-0.5">{f.num}</span>
            <div>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-0.5">{f.cause(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.detail(ko)}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp(0.15)} className="mt-6">
        <p className="text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-3">
          {ko ? "대응 옵션" : "Response Options"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {FAILURE_RESPONSES.map((r, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-3 text-center"
            >
              <p className="text-xl mb-1">{r.icon}</p>
              <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                {ko ? r.ko : r.en}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmAbbExecutionClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const pageTitle = ko ? concept.title : (concept.titleEn ?? concept.title);

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
              headline: pageTitle,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/ecm-abb-execution"
                  : "https://dealstory.io/en/market-101/ecm-abb-execution",
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

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "ABB 실행" : "ABB Execution"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM 실전 시리즈 — ABB 매뉴얼" : "ECM Practical Series — ABB Manual"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {pageTitle}
            </motion.h1>

            {ko && concept.titleEn && (
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
                href="/market-101/ecm-abb-execution"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-abb-execution"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={pageTitle} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        <SeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 — 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "30초 요약 — ABB 핵심 숫자" : "30-Second Summary — ABB Key Numbers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "ABB(Accelerated Book-Build)는 ECM 딜 중 가장 빠른 방식이다. 장 마감 후 12~24시간 내에 대규모 주식 매각을 완료한다. IPO가 18개월짜리 프로젝트라면, ABB는 하룻밤짜리 스프린트다."
                  : "An ABB (Accelerated Book-Build) is the fastest ECM execution method. It completes a large-scale share sale within 12–24 hours after market close. If an IPO is an 18-month project, an ABB is an overnight sprint."}
              </motion.p>
            </div>

            <QuickStatsBar ko={ko} />
          </motion.section>

          {/* Ch.2 — ABB란 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ABB란 — 가장 빠른 ECM 딜" : "What Is ABB — The Fastest ECM Deal"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ABB는 기관 투자자에게 대량의 주식을 하룻밤 사이에 파는 ECM 거래다. PE 펀드가 투자한 기업의 지분을 매각하거나, 대주주가 일부 지분을 현금화할 때 주로 사용된다. 전통적인 IPO나 유상증자와 달리 정식 투자설명서(Prospectus)나 로드쇼가 없다 — 대신 1페이지짜리 Teaser와 주관사의 투자자 네트워크가 전부다."
                    : "An ABB is an ECM transaction that sells a large block of shares to institutional investors overnight. It is primarily used when a PE fund exits a portfolio company stake or when a major shareholder monetizes part of their position. Unlike traditional IPOs or rights issues, there is no formal prospectus or roadshow — only a one-page Teaser and the bank's investor network.",
                  ko
                    ? "할인율은 그 속도에 대한 대가다. 투자자는 12시간 내에 결정해야 하는 리스크를 감수하는 대신 시장가 대비 3~5% 낮은 가격에 주식을 받는다. 발행사는 시간 프리미엄을 포기하는 대신 빠르게 현금을 확보한다."
                    : "The discount is the price of speed. Investors take on the risk of deciding within 12 hours, in exchange for receiving shares at 3–5% below market price. The issuer sacrifices the time premium but secures cash quickly.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox label={ko ? "비유" : "Analogy"}>
              {ko
                ? "ABB는 벼락치기 시험과 같다. 내일 시험인데 오늘 밤 12시간 동안 공부(IOI 수집)하고 아침에 성적표(pricing)를 받는다. 제대로 된 IPO(18개월 준비)와 달리 준비 시간이 없다. 그래서 할인을 준다 — 시간 프리미엄의 반대."
                : "An ABB is like a cram session before an exam. The test is tomorrow, you spend 12 hours studying tonight (collecting IOIs), and you get your grade (pricing) in the morning. Unlike a proper IPO (18 months of preparation), there's no time to prepare — so you offer a discount. It's the inverse of a time premium."}
            </AnalogyBox>

            <ComparisonTable ko={ko} />
          </motion.section>

          {/* Ch.3 — 시간대별 프로세스 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ABB 시간대별 실행 프로세스" : "ABB Hour-by-Hour Execution Process"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Hour 0(장 마감)부터 Hour 12(다음 날 장 시작)까지 — 각 시간대에 무슨 일이 일어나는지 단계별로 해부한다."
                  : "From Hour 0 (market close) to Hour 12 (next day's open) — a step-by-step dissection of what happens at each stage."}
              </motion.p>
            </div>

            <TimelineBlock ko={ko} />
            <PracticeBox ko={ko} />
          </motion.section>

          {/* Ch.4 — 할인율 결정 논리 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "할인율 결정 논리 — 5가지 요소" : "Discount Rate Logic — 5 Determining Factors"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ABB 할인율은 협상이 아니라 시장의 함수다. 주관사가 임의로 정하는 것이 아니라, 딜 사이즈·유동성·시장 컨디션·발행사 이름값·수요 강도 다섯 가지 요소가 복합적으로 작용해 결정된다."
                    : "ABB discount is not a negotiation — it's a function of the market. It's not set arbitrarily by the bank; five factors interact to determine it: deal size, liquidity, market conditions, issuer brand, and demand strength.",
                  ko
                    ? "예시: 삼성전자 블록 딜이라면 일평균거래량(ADTV)이 $1B+이므로 할인율 1~2%로도 충분히 수요를 채울 수 있다. 반면 ADTV $5M짜리 중소형주 블록은 투자자들이 이후 매도 기회를 잡기 어렵기 때문에 5~8% 할인이 필요하다."
                    : "Example: for a Samsung block deal, ADTV exceeds $1B, so a 1–2% discount fills demand easily. By contrast, a mid-cap block with $5M ADTV needs 5–8% discount because investors will struggle to exit afterward.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <DiscountFactorCards ko={ko} />
            <DiscountBarChart ko={ko} />
          </motion.section>

          {/* Ch.5 — 헤지펀드 vs 장기 기관 배분 전략 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "헤지펀드 vs 장기 기관 — 배분 전략" : "Hedge Fund vs Long-Only — Allocation Strategy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ABB 배분의 핵심 딜레마: 헤지펀드(HF)는 수요를 빠르게 채워주지만, 첫날 대거 매도해 주가 하락을 유발할 수 있다. 장기 기관(Long-Only, LO)은 주가 안정에 유리하지만, 수요가 충분하지 않을 수도 있다."
                    : "The core ABB allocation dilemma: hedge funds (HF) fill demand quickly but may sell heavily on Day 1, pressuring the stock. Long-only institutions (LO) support price stability but may not provide sufficient demand on their own.",
                  ko
                    ? "업계 기본 원칙은 LO 70% + HF 30%다. 오버서브(수요 > 딜 사이즈) 상황에서는 HF 비중을 스케일 다운해 LO 비중을 높인다. 대규모 딜에서는 일부 HF에게 단기 락업을 요구하기도 한다."
                    : "The industry default is LO 70% + HF 30%. When oversubscribed (demand > deal size), HF allocations are scaled down to increase LO share. For large deals, a short-term lock-up may be required from some HFs.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AllocationCards ko={ko} />

            <AnalogyBox label={ko ? "비유" : "Analogy"}>
              {ko
                ? "신상 스니커즈를 팔 때, 되팔이(헤지펀드)에게 팔면 빠르게 팔리지만 브랜드 이미지가 훼손된다. 진짜 팬(장기 기관)에게만 팔면 안정적이지만 수요가 부족할 수도 있다. ABB 배분 담당자는 이 균형을 하룻밤 사이에 결정해야 한다."
                : "When selling a limited sneaker release, selling to resellers (hedge funds) moves stock fast but damages brand image. Selling only to true fans (long-only investors) is stable but may not fill demand. The ABB allocation team must strike this balance in a single night."}
            </AnalogyBox>
          </motion.section>

          {/* Ch.6 — 글로벌 케이스 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "글로벌 케이스 3개" : "3 Global Case Studies"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "성공 사례 2개와 실패 사례 1개 — ABB가 어떻게 작동하고 어떻게 망가지는지를 실제 딜로 확인한다."
                : "Two successes and one failure — how ABBs work and how they break down, confirmed through real deals."}
            </motion.p>

            <CaseStudyCards ko={ko} />
          </motion.section>

          {/* Ch.7 — ABB 실패 시나리오 */}
          <motion.section id="ch7" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.7</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ABB 실패 시나리오와 대응" : "ABB Failure Scenarios and Responses"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "ABB는 빠른 만큼 실패도 빠르다. 수요가 기대에 미치지 못하거나, 정보 유출, 계약 위반이 발생하면 주관사와 발행사 모두 어려운 선택을 해야 한다."
                  : "ABBs fail as fast as they execute. When demand falls short, a leak occurs, or a contract violation surfaces, both the bank and issuer face hard choices."}
              </motion.p>
            </div>

            <FailureBlock ko={ko} />
          </motion.section>

          <ShareButtons title={pageTitle} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion
                items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))}
                accent={ACCENT}
              />
            </motion.div>
          </motion.section>

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-followon",         ko: "팔로우온",       en: "Follow-on"       },
                { slug: "ecm-ipo-bookbuilding",  ko: "북빌딩",         en: "Book-Building"   },
                { slug: "ecm-ipo-allocation",    ko: "IPO 배분 전략",  en: "IPO Allocation"  },
                { slug: "ecm-rights-issue",      ko: "유상증자",       en: "Rights Issue"    },
                { slug: "ecm-ipo-post",          ko: "포스트-IPO",     en: "Post-IPO"        },
                { slug: "ecm-overview",          ko: "ECM 개요",       en: "ECM Overview"    },
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

          <ShareButtons title={pageTitle} variant="bottom" lang={lang} />

          

          <LikeButton slug={concept.slug} lang={lang} />{/* References */}
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
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">
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

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-followon" : "/en/market-101/ecm-followon"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "팔로우온 →" : "Follow-on →"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-rights-issue" : "/en/market-101/ecm-rights-issue"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "유상증자 →" : "Rights Issue →"}
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
