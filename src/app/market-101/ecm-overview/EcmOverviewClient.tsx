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
const accent = "#3182f6"; // ECM blue

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"       : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"    : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"    : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션": "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"  : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"    : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO": "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"  : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"  : "Ch.8 Convertible"},
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"  : "Ch.9 Intl"       },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC"     : "Ch.10 SPAC"      },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 ECM이란",       en: "Ch.1 What Is ECM"    },
  { id: "ch2", ko: "Ch.2 세 플레이어",   en: "Ch.2 Three Players"  },
  { id: "ch3", ko: "Ch.3 발행사 스펙트럼",en: "Ch.3 Issuer Spectrum"},
  { id: "ch4", ko: "Ch.4 딜 프로세스",   en: "Ch.4 Deal Process"   },
  { id: "ch5", ko: "Ch.5 케이스",        en: "Ch.5 Cases"          },
];

// ── ECM 3대 축 ────────────────────────────────────────────────────────────────
const ECM_PILLARS = [
  {
    id: "ipo",
    label: "IPO",
    sub: (ko: boolean) => ko ? "기업공개 — 최초 공모" : "Initial Public Offering",
    duration: (ko: boolean) => ko ? "6–18개월" : "6–18 months",
    discount: (ko: boolean) => ko ? "0–5% NIC" : "0–5% NIC",
    purpose: (ko: boolean) => ko ? "최초 공개 + 자본 조달 + 투자자 엑싯" : "First listing + Capital raise + Investor exit",
    investors: (ko: boolean) => ko ? "앵커·QIB·리테일" : "Anchor · QIB · Retail",
    example: (ko: boolean) => ko ? "쿠팡 NYSE 2021 · LG에너지솔루션 2022" : "Coupang NYSE 2021 · Arm Holdings 2023",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-500",
    text: "text-blue-800 dark:text-blue-200",
    riskBar: 3,
  },
  {
    id: "followon",
    label: (ko: boolean) => ko ? "팔로우온" : "Follow-on",
    sub: (ko: boolean) => ko ? "추가 발행 — ABB · 블록 · 유상증자" : "Secondary / Rights Issue / ABB",
    duration: (ko: boolean) => ko ? "하룻밤 ~ 6주" : "Overnight to 6 weeks",
    discount: (ko: boolean) => ko ? "2–40% (방법별 상이)" : "2–40% (method-dependent)",
    purpose: (ko: boolean) => ko ? "추가 자본 조달 + PE 엑싯 + 지분 분산" : "Additional capital + PE exit + Float increase",
    investors: (ko: boolean) => ko ? "기존 주주 + 신규 기관" : "Existing shareholders + New institutions",
    example: (ko: boolean) => ko ? "ABB: 하룻밤 3–5% 할인 · 유상증자: 30–40% 할인" : "ABB: overnight 3–5% discount · Rights: 30–40%",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-500",
    text: "text-violet-800 dark:text-violet-200",
    riskBar: 2,
  },
  {
    id: "cb",
    label: (ko: boolean) => ko ? "전환사채" : "Convertible Bond",
    sub: (ko: boolean) => ko ? "하이브리드 — 채권 + 주식 옵션" : "Hybrid — Bond + Equity Option",
    duration: (ko: boolean) => ko ? "2–4주" : "2–4 weeks",
    discount: (ko: boolean) => ko ? "낮은 쿠폰 + 전환프리미엄 20–40%" : "Low coupon + 20–40% conversion premium",
    purpose: (ko: boolean) => ko ? "낮은 비용 + 희석 최소화 + 성장 기업 조달" : "Low cost + Minimal dilution + Growth co. funding",
    investors: (ko: boolean) => ko ? "CB 전문 펀드 · 헤지펀드 (델타 헤지)" : "CB-dedicated funds · Hedge funds (delta hedge)",
    example: (ko: boolean) => ko ? "Airbnb CB 2020 · MicroStrategy CB" : "Airbnb CB 2020 · MicroStrategy CB",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-500",
    text: "text-teal-800 dark:text-teal-200",
    riskBar: 2,
  },
];

// ── 발행사 스펙트럼 ────────────────────────────────────────────────────────────
const ISSUER_SPECTRUM = [
  {
    id: "vc",
    label: (ko: boolean) => ko ? "VC 스타트업" : "VC-backed",
    sub: (ko: boolean) => ko ? "Series D+ · 투자자 엑싯" : "Series D+ · Investor exit",
    example: (ko: boolean) => ko ? "쿠팡, Airbnb, DoorDash" : "Coupang, Airbnb, DoorDash",
    icon: "🚀",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-500",
    text: "text-blue-800 dark:text-blue-200",
    riskBar: 4,
  },
  {
    id: "pe",
    label: (ko: boolean) => ko ? "PE 엑싯" : "PE Exit",
    sub: (ko: boolean) => ko ? "펀드 만기 · IRR 실현" : "Fund maturity · IRR realization",
    example: (ko: boolean) => ko ? "힐튼(Blackstone), HCA Healthcare" : "Hilton (Blackstone), HCA Healthcare",
    icon: "💼",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-500",
    text: "text-violet-800 dark:text-violet-200",
    riskBar: 3,
  },
  {
    id: "soe",
    label: (ko: boolean) => ko ? "SOE 민영화" : "SOE Privatization",
    sub: (ko: boolean) => ko ? "정부 재정 · 효율화" : "Gov't revenue · Efficiency",
    example: (ko: boolean) => ko ? "Aramco 2019, KT, POSCO" : "Aramco 2019, KT, POSCO",
    icon: "🏛️",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
    dot: "bg-indigo-500",
    text: "text-indigo-800 dark:text-indigo-200",
    riskBar: 1,
  },
  {
    id: "spinoff",
    label: (ko: boolean) => ko ? "계열사 분리" : "Spin-off",
    sub: (ko: boolean) => ko ? "가치 재평가 · 독립경영" : "Value re-rating · Independence",
    example: (ko: boolean) => ko ? "LG에너지솔루션, 카카오뱅크" : "LG Energy Solution, PayPal/eBay",
    icon: "🔀",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-500",
    text: "text-orange-800 dark:text-orange-200",
    riskBar: 2,
  },
  {
    id: "mature",
    label: (ko: boolean) => ko ? "성숙 성장기업" : "Mature Growth",
    sub: (ko: boolean) => ko ? "인지도 · M&A 통화" : "Brand · M&A currency",
    example: (ko: boolean) => ko ? "하이브(BTS), Spotify" : "HYBE, Spotify, Palantir",
    icon: "🌱",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-500",
    text: "text-teal-800 dark:text-teal-200",
    riskBar: 3,
  },
];

// ── IPO 시장 사이클 ────────────────────────────────────────────────────────────
const IPO_CYCLE = [
  { year: "2019", vol: "$200bn", bar: 40, label: (ko: boolean) => ko ? "정상" : "Normal" },
  { year: "2020", vol: "$330bn", bar: 55, label: (ko: boolean) => ko ? "COVID 반등" : "COVID Bounce" },
  { year: "2021", vol: "$600bn", bar: 100, label: (ko: boolean) => ko ? "역대 최고" : "All-time Peak", peak: true },
  { year: "2022", vol: "$180bn", bar: 30, label: (ko: boolean) => ko ? "금리 충격" : "Rate Shock", low: true },
  { year: "2023", vol: "$130bn", bar: 22, label: (ko: boolean) => ko ? "최저점" : "Trough", low: true },
  { year: "2024", vol: "$250bn", bar: 42, label: (ko: boolean) => ko ? "회복" : "Recovery" },
];

// ── 딜 프로세스 단계 ───────────────────────────────────────────────────────────
const DEAL_STEPS = [
  { num: "01", icon: "🏆", label: (ko: boolean) => ko ? "Bake-off" : "Bake-off",         desc: (ko: boolean) => ko ? "IB 피치 · GC 선정" : "Bank pitch · GC selection" },
  { num: "02", icon: "📄", label: (ko: boolean) => ko ? "실사·S-1" : "DD & S-1",         desc: (ko: boolean) => ko ? "법적·재무 실사" : "Legal & financial DD" },
  { num: "03", icon: "📮", label: (ko: boolean) => ko ? "SEC 제출" : "Filing",            desc: (ko: boolean) => ko ? "Comment Letter 대응" : "Comment Letter battle" },
  { num: "04", icon: "✈️", label: (ko: boolean) => ko ? "로드쇼" : "Roadshow",           desc: (ko: boolean) => ko ? "50–80개 투자자 미팅" : "50–80 investor meetings" },
  { num: "05", icon: "💰", label: (ko: boolean) => ko ? "프라이싱 나이트" : "Pricing Night",desc: (ko: boolean) => ko ? "가격·배분 확정" : "Price & allocation set" },
  { num: "06", icon: "🎯", label: (ko: boolean) => ko ? "상장 첫날" : "Day One",          desc: (ko: boolean) => ko ? "그린슈 모니터링" : "Greenshoe monitoring" },
];

// ── 케이스 스터디 ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "lg-energy-solution-ipo",
    emoji: "🔋",
    result: (ko: boolean) => ko ? "✅ 성공" : "✅ Success",
    tier: (ko: boolean) => ko ? "계열사 분리상장" : "Conglomerate Spin-off",
    title: (ko: boolean) => ko ? "LG에너지솔루션 (2022)" : "LG Energy Solution (2022)",
    tagline: (ko: boolean) => ko ? "12.75조원 — 한국 역대 최대 IPO · 기관 경쟁률 2,023:1" : "₩12.75T — Korea's largest ever IPO · 2,023:1 institutional demand",
    lesson: (ko: boolean) => ko
      ? "의무보유 확약 67%로 D+180 물량 폭탄을 사전 차단. 글로벌 배터리 테마 정점 타이밍 + 앵커 구성 = 교과서적 집행."
      : "67% lock-up commitment pre-neutralized the D+180 supply bomb. Global battery theme peak timing + anchor construction = textbook execution.",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
    labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    slug: "wework-ipo-failure",
    emoji: "🏢",
    result: (ko: boolean) => ko ? "❌ 철회 → 파산" : "❌ Pulled → Bankruptcy",
    tier: (ko: boolean) => ko ? "Type 1: 발행 철회" : "Type 1: Pulled IPO",
    title: (ko: boolean) => ko ? "WeWork (2019)" : "WeWork (2019)",
    tagline: (ko: boolean) => ko ? "$47bn 희망 밸류 → S-1 공시 후 붕괴 → 2023년 Chapter 11 파산" : "$47bn target valuation → collapse after S-1 → Chapter 11 bankruptcy 2023",
    lesson: (ko: boolean) => ko
      ? "S-1은 회사의 법적 고백서다. 지배구조 문제(창업자 차등의결권·관련거래)와 적자 규모가 전부 드러났다. '테크 회사' 내러티브로 부동산 기업의 손실을 가릴 수 없다."
      : "S-1 is a legal confession. Governance issues (founder supervoting, related-party deals) and loss scale were fully exposed. A 'tech company' narrative cannot hide a real estate company's losses.",
    color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    slug: "ant-group-ipo-pulled",
    emoji: "🐜",
    result: (ko: boolean) => ko ? "❌ 규제 철회" : "❌ Regulatory Pull",
    tier: (ko: boolean) => ko ? "Type 5: 규제·정치 리스크" : "Type 5: Regulatory Risk",
    title: (ko: boolean) => ko ? "Ant Group (2020)" : "Ant Group (2020)",
    tagline: (ko: boolean) => ko ? "$37bn IPO — 상장 48시간 전 중국 당국 개입으로 역대 최대 규모 취소" : "$37B IPO — cancelled 48 hours before listing; the largest withdrawal in history",
    lesson: (ko: boolean) => ko
      ? "규제 리스크는 DCF 어디에도 들어가지 않는다. Jack Ma의 금융당국 공개 비판 → 3일 후 상장 취소. 지정학은 밸류에이션보다 강하다."
      : "Regulatory risk doesn't appear in any DCF model. Jack Ma's public criticism of regulators → listing cancelled 3 days later. Geopolitics trumps valuation.",
    color: "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
    labelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "ECM과 DCM의 근본적인 차이는 무엇인가요?" : "What is the fundamental difference between ECM and DCM?",
    a: (ko: boolean) => ko
      ? "DCM은 부채(채권)를, ECM은 지분(주식)을 다룹니다. 부채는 만기가 있고 이자를 지급하지만 경영권 희석이 없습니다. 지분은 만기가 없고 배당도 의무가 아니지만 의결권이 희석됩니다. 대부분 기업은 두 시장을 모두 활용하며, 자본 구조 최적화가 CFO의 핵심 과제입니다."
      : "DCM deals with debt (bonds), ECM with equity (shares). Debt has maturity and pays interest but doesn't dilute control. Equity has no maturity and no mandatory dividends, but dilutes voting rights. Most companies use both markets — optimizing capital structure is the CFO's core challenge.",
  },
  {
    q: (ko: boolean) => ko ? "IPO에서 ECM 뱅커는 실제로 무슨 일을 하나요?" : "What does an ECM banker actually do in an IPO?",
    a: (ko: boolean) => ko
      ? "ECM 뱅커는 ① 발행사의 IPO 준비도 진단 및 타이밍 조언, ② Bake-off(IB 피치)에서 밸류에이션 제시, ③ S-1 작성 조율 및 SEC 대응, ④ 로드쇼 동행 및 투자자 반응 수집, ⑤ 오더북 관리 및 배분 결정을 담당합니다. 실무적으로 Analyst는 valuation model·IM 작성, Associate는 roadshow 자료 조율, VP/Director는 투자자 미팅 주도, MD는 발행사 CFO와 최종 협상을 담당합니다."
      : "ECM bankers: ① diagnose IPO readiness and advise on timing, ② present valuation in bake-off pitches, ③ coordinate S-1 drafting and SEC responses, ④ accompany roadshow and collect investor feedback, ⑤ manage the order book and decide allocation. In practice: Analysts build valuation models and draft IMs, Associates coordinate roadshow materials, VPs/Directors lead investor meetings, MDs negotiate final terms with the issuer's CFO.",
  },
  {
    q: (ko: boolean) => ko ? "공모가는 어떻게 결정되나요?" : "How is the IPO price determined?",
    a: (ko: boolean) => ko
      ? "IPO 가격은 ① Football Field(5가지 밸류에이션 방법론의 범위 도식) → ② 수요 곡선(가격별 주문량) → ③ NIC(New Issue Concession, 시장 할인) 협상 세 단계로 결정됩니다. 발행사는 높은 가격을, 투자자는 낮은 가격을 원합니다. 뱅커는 'Leave Money on the Table'이 얼마나 필요한지(첫날 10–20% 팝이 이상적)를 판단해 최종 가격을 제안합니다."
      : "IPO pricing follows three steps: ① Football Field (valuation range from 5 methodologies) → ② demand curve (order volume by price) → ③ NIC (New Issue Concession) negotiation. Issuers want higher prices, investors want lower. Bankers judge how much 'Leave Money on the Table' is needed — a 10–20% first-day pop is ideal — and recommend a final price.",
  },
  {
    q: (ko: boolean) => ko ? "첫날 주가가 많이 오르면 IPO 성공인가요?" : "Does a big first-day pop mean the IPO succeeded?",
    a: (ko: boolean) => ko
      ? "투자자 관점에서는 성공, 발행사 관점에서는 실패일 수 있습니다. Rivian의 첫날 +121% 팝은 '발행사가 $1.9bn을 헐값에 판 것'을 의미합니다. 이 금액이 발행사 금고로 들어왔어야 했습니다. 반면 첫날 -7%를 기록한 Uber는 발행사 입장에서 더 정확한 가격을 받은 것입니다. 이상적인 첫날 팝은 15–20% 범위입니다."
      : "A big pop is success for investors but failure for the issuer. Rivian's +121% Day 1 pop means the issuer left $1.9B on the table that should have gone into their treasury. By contrast, Uber's -7% Day 1 meant the issuer got a more accurate price. The ideal first-day pop is 15–20%.",
  },
  {
    q: (ko: boolean) => ko ? "SPAC이 전통 IPO보다 유리한 건가요?" : "Is a SPAC better than a traditional IPO?",
    a: (ko: boolean) => ko
      ? "SPAC은 속도(3–6개월)와 S-1 없이 상장 가능한 장점이 있지만, 2020–21 SPAC 거품 이후 평균 수익률은 -75%입니다. Due Diligence가 없기 때문에 Nikola(사기 유죄), Bird(상장폐지), Grab(-71%)처럼 실패 사례가 대부분입니다. 2022년 이후 SPAC 시장은 급격히 위축됐고, 현재는 특수한 상황(헬스케어·디지털 인프라)에서만 활용됩니다."
      : "SPACs offer speed (3–6 months) and avoid the S-1 process, but after the 2020–21 bubble, the average SPAC return is -75%. Without due diligence, most ended in failure — Nikola (fraud conviction), Bird (delisted), Grab (-71%). The SPAC market collapsed after 2022 and is now used only in specific situations (healthcare, digital infrastructure).",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-ipo-issuers",           ko: "Ch.1 발행사",      en: "Ch.1 Issuers"      },
  { slug: "ecm-ipo-investors",         ko: "Ch.2 투자자",      en: "Ch.2 Investors"    },
  { slug: "ecm-ipo-valuation",         ko: "Ch.3 밸류에이션",  en: "Ch.3 Valuation"    },
  { slug: "ecm-ipo-process",           ko: "Ch.4 프로세스",    en: "Ch.4 Process"      },
  { slug: "ecm-ipo-bookbuilding",      ko: "Ch.5 북빌딩",      en: "Ch.5 Book-Building"},
  { slug: "ecm-ipo-post",              ko: "Ch.6 포스트-IPO",  en: "Ch.6 Post-IPO"     },
  { slug: "ecm-spac-direct",           ko: "Ch.10 SPAC·직상장","en": "Ch.10 SPAC·Direct"},
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
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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

function IpoMarketCallout({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "글로벌 IPO 시장 사이클 — 연간 조달 규모" : "Global IPO Market Cycle — Annual Proceeds"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-6 gap-2">
          {IPO_CYCLE.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400">{item.vol}</span>
              <div className="w-full h-28 flex items-end">
                <motion.div
                  className={`w-full rounded-t-md ${item.peak ? "bg-blue-500" : item.low ? "bg-red-300 dark:bg-red-700" : "bg-blue-300 dark:bg-blue-700"}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${item.bar}%` }}
                  viewport={VP}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                />
              </div>
              <span className="text-[9px] text-gray-400 dark:text-gray-500">{item.year}</span>
              <span className={`text-[8px] font-semibold text-center leading-tight ${item.peak ? "text-blue-600 dark:text-blue-400" : item.low ? "text-red-500 dark:text-red-400" : "text-gray-400"}`}>
                {item.label(ko)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "2022–23 금리 인상기의 IPO 시장 급랭은 역사상 가장 가파른 수축이었다 — 밸류에이션이 성장주 중심으로 과도하게 팽창된 후의 필연적 조정."
            : "The 2022–23 IPO market freeze was the sharpest contraction in history — an inevitable correction after valuation multiples had expanded excessively into growth stocks."}
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
          {ko ? "ECM의 세 플레이어 — 삼각 구조" : "ECM's Three Players — Triangle Structure"}
        </p>
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30 px-6 py-4 text-center w-56"
          >
            <p className="text-[13px] font-black text-blue-800 dark:text-blue-200 mb-1">
              {ko ? "ECM 뱅커 + 신디케이트" : "ECM Banker + Syndicate"}
            </p>
            <p className="text-[10px] text-blue-600 dark:text-blue-400 leading-tight">
              {ko ? "밸류에이션 · S-1 · 로드쇼 · 배분" : "Valuation · S-1 · Roadshow · Allocation"}
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-4 text-[10px] text-gray-400">
          <span>{ko ? "밸류에이션·타이밍 조언" : "Valuation·Timing Advice"}</span>
          <span className="text-gray-300 dark:text-gray-600 text-lg">↕</span>
          <span>{ko ? "수요 탐색·오더북" : "Demand·Order Book"}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: ko ? "발행사 (Issuer)" : "Issuer",
              sub: ko ? "VC스타트업 · PE엑싯 · SOE · 계열사" : "VC startup · PE exit · SOE · Spin-off",
              note: ko ? "소유권·자본 구조를 영구적으로 바꾸는 주체" : "Entity permanently transforming ownership structure",
              bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
              tc: "text-violet-800 dark:text-violet-200",
            },
            {
              title: ko ? "투자자 (Investor)" : "Investor",
              sub: ko ? "앵커 · QIB · 리테일" : "Anchor · QIB · Retail",
              note: ko ? "주식을 매수해 성장에 베팅하는 주체" : "Entity buying shares to bet on growth",
              bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700",
              tc: "text-teal-800 dark:text-teal-200",
            },
          ].map((player, i) => (
            <motion.div
              key={player.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className={`rounded-xl border p-4 text-center ${player.bg}`}
            >
              <p className={`text-[13px] font-black mb-1 ${player.tc}`}>{player.title}</p>
              <p className={`text-[10px] mb-2 ${player.tc} opacity-70`}>{player.sub}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">{player.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <div className="text-[10px] text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-full px-4 py-1.5">
            {ko ? "↔ 주식 · 자금이 ECM 뱅커를 통해 이동" : "↔ Shares & capital flow through ECM banker"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EcmPillarsCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-3 sm:grid sm:grid-cols-3 min-w-max sm:min-w-0">
          {ECM_PILLARS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className={`flex-shrink-0 w-52 sm:w-auto rounded-xl border p-4 ${p.bg} ${p.border}`}
            >
              {/* Risk bar */}
              <div className="flex gap-0.5 mb-2.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className={`h-1 rounded-full flex-1 ${n <= p.riskBar ? p.dot : "bg-gray-200 dark:bg-gray-700"}`} />
                ))}
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${p.dot}`} />
                <span className={`text-[13px] font-black ${p.text}`}>{typeof p.label === "function" ? p.label(ko) : p.label}</span>
              </div>
              <p className={`text-[10px] mb-3 leading-tight ${p.text} opacity-75`}>{p.sub(ko)}</p>
              {[
                { lKo: "소요", lEn: "Timeline", v: p.duration(ko) },
                { lKo: "할인/NIC", lEn: "Discount", v: p.discount(ko) },
              ].map((row) => (
                <div key={row.lKo} className="flex justify-between text-[10px] mb-0.5">
                  <span className="text-gray-500 dark:text-gray-400">{ko ? row.lKo : row.lEn}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{row.v}</span>
                </div>
              ))}
              <p className={`text-[9px] mt-2 pt-2 border-t leading-tight ${p.border} text-gray-400 dark:text-gray-500`}>
                {ko ? "목적: " : "Purpose: "}{p.purpose(ko)}
              </p>
              <p className="text-[9px] mt-1 leading-tight text-gray-400 dark:text-gray-500">
                {ko ? "예: " : "e.g.: "}{p.example(ko)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function IssuerSpectrumViz({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-2 px-1">
        <span>{ko ? "← 낮은 리스크 (안정적 현금흐름·정부 보증)" : "← Lower risk (stable CF · government backing)"}</span>
        <span>{ko ? "높은 리스크 →" : "Higher risk →"}</span>
      </div>
      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-teal-400 via-orange-400 via-violet-400 to-blue-500 mb-6" />
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-2.5 sm:grid sm:grid-cols-5 min-w-max sm:min-w-0">
          {ISSUER_SPECTRUM.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
              className={`flex-shrink-0 w-40 sm:w-auto rounded-xl border p-3.5 ${t.bg} ${t.border}`}
            >
              <div className="flex gap-0.5 mb-2.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className={`h-1 rounded-full flex-1 ${n <= t.riskBar ? t.dot : "bg-gray-200 dark:bg-gray-700"}`} />
                ))}
              </div>
              <div className="text-xl mb-2">{t.icon}</div>
              <p className={`text-[12px] font-black mb-1 ${t.text}`}>{t.label(ko)}</p>
              <p className={`text-[10px] mb-2 leading-tight ${t.text} opacity-75`}>{t.sub(ko)}</p>
              <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{t.example(ko)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DealProcessTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="hidden sm:block">
        <div className="flex items-start gap-0">
          {DEAL_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < DEAL_STEPS.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white dark:bg-gray-950 border-2 border-blue-300 dark:border-blue-700 shadow-sm mb-3"
              >
                {step.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: EASE }}
                className="text-center px-1"
              >
                <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 mb-0.5">{step.num}</p>
                <p className="text-[11px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label(ko)}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden space-y-0">
        {DEAL_STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {i < DEAL_STEPS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-blue-300 dark:border-blue-700 shadow-sm flex-shrink-0 z-10">
              {step.icon}
            </div>
            <div className="pb-5">
              <p className="text-[10px] font-black text-blue-600 dark:text-blue-400">{step.num}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { slug: "ecm-ipo-valuation", ko: "Football Field ↗", en: "Football Field ↗" },
          { slug: "ecm-ipo-bookbuilding", ko: "그린슈 ↗", en: "Greenshoe ↗" },
          { slug: "ecm-ipo-post", ko: "락업 오버행 ↗", en: "Lock-up Overhang ↗" },
        ].map((link) => (
          <Link
            key={link.slug}
            href={`${ko ? "" : "/en"}/market-101/${link.slug}`}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
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
        <motion.div key={cs.slug} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.tier(ko)}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">{cs.result(ko)}</span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">{cs.title(ko)}</h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{cs.tagline(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                {cs.lesson(ko)}
              </p>
              <Link
                href={`${ko ? "" : "/en"}/market-101/ecm-ipo-post`}
                className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
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

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmOverviewClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-overview"
                  : "https://dealstory.io/en/market-101/ecm-overview",
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
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "ECM 개요" : "ECM Overview"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM — 입문 가이드" : "ECM — Introductory Guide"}
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
                href="/market-101/ecm-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        <SeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 ECM이란 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ECM이란 — IPO는 데뷔 무대가 아니다" : "What Is ECM — An IPO Is Not a Debut Party"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ECM(Equity Capital Markets, 주식자본시장)은 기업이 주식을 발행해 자금을 조달하는 시장이다. IPO(기업공개)·팔로우온(추가 발행)·전환사채(CB)가 ECM의 세 축이다. 연간 전 세계 ECM 발행 규모는 피크 시(2021년) $6,000억을 넘었고, 2024년 기준 $2,500억 수준으로 회복 중이다."
                    : "ECM (Equity Capital Markets) is where companies issue equity to raise capital. IPOs, follow-on offerings, and convertible bonds are its three pillars. Global ECM issuance peaked at over $600B in 2021 and is recovering toward $250B as of 2024.",
                  ko
                    ? "IPO를 '회사의 데뷔 무대'라고 부르는 경우가 많다. 틀린 말은 아니지만 본질을 놓친다. IPO는 소유권 구조, 지배구조, 자금 조달 방식이 영구적으로 바뀌는 사건이다. 창업자는 의결권 일부를 잃고, 회사는 분기마다 시장에 실적을 보고해야 하며, 주주는 단기 이익을 요구하기 시작한다."
                    : "IPOs are often called a company's 'debut.' That's not wrong, but it misses the essence. An IPO is a permanent transformation — of ownership structure, governance, and capital access. Founders lose some voting control, the company must report earnings to the market every quarter, and shareholders begin demanding short-term returns.",
                  ko
                    ? "DCM이 '얼마에 빌릴 수 있나'의 문제라면, ECM은 '얼마에 팔 수 있나'의 문제다. 그리고 ECM에서 '팔다'는 의미는 단순한 주식 매각이 아니다 — 회사의 미래 성장에 대한 스토리를 파는 것이다."
                    : "If DCM is 'how much can we borrow and at what cost,' ECM is 'how much can we sell and at what price.' And 'selling' in ECM isn't simply disposing of shares — it's selling the story of the company's future growth.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <IpoMarketCallout ko={ko} />

            {/* ECM 3대 축 */}
            <motion.div variants={fadeUp(0.2)} className="mt-8">
              <p className="text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-4">
                {ko ? "ECM 3대 축 — IPO · 팔로우온 · 전환사채" : "ECM's Three Pillars — IPO · Follow-on · Convertible"}
              </p>
              <EcmPillarsCards ko={ko} />
            </motion.div>
          </motion.section>

          {/* Ch.2 세 플레이어 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "세 플레이어 — 발행사·투자자·뱅커" : "Three Players — Issuer, Investor, Banker"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ECM 거래에는 언제나 세 플레이어가 등장한다. 발행사(Issuer)는 주식을 팔아 자금을 조달하려는 기업이다. 투자자(Investor)는 그 주식을 사서 성장에 베팅한다. ECM 뱅커는 두 사이를 연결하면서 밸류에이션을 설계하고, 로드쇼를 기획하며, 오더북을 관리한다."
                    : "Every ECM transaction involves three players. The issuer wants to sell shares and raise capital. The investor buys those shares to bet on growth. The ECM banker connects the two — designing the valuation, orchestrating the roadshow, and managing the order book.",
                  ko
                    ? "DCM의 세 플레이어와 구조는 비슷하지만 역학은 다르다. DCM에서 뱅커는 '이자율과 스프레드'를 협상하지만, ECM에서 뱅커는 '이 회사가 얼마짜리인가'라는 훨씬 주관적인 질문을 다룬다. 밸류에이션에 정답이 없기 때문에 ECM 뱅커의 스토리텔링과 투자자 관계가 DCM보다 훨씬 중요해진다."
                    : "The structure resembles DCM's three players, but the dynamics differ. DCM bankers negotiate interest rates and spreads. ECM bankers answer the far more subjective question: 'What is this company worth?' Because there's no single correct answer, storytelling ability and investor relationships matter far more in ECM than DCM.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <ThreePlayerDiagram ko={ko} />
          </motion.section>

          {/* Ch.3 발행사 스펙트럼 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "발행사 스펙트럼 — 누가 IPO를 하는가" : "Issuer Spectrum — Who Goes Public and Why"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "IPO를 하는 이유는 하나가 아니다. VC 백 스타트업은 투자자 엑싯과 성장자본을 위해, PE 스폰서는 펀드 청산과 IRR 실현을 위해, 정부는 재정 충당과 국영기업 효율화를 위해, 대기업은 계열사 가치를 독립적으로 재평가받기 위해 IPO를 선택한다. 각 동기가 다르기 때문에 IPO 구조(Primary vs Secondary 물량 비율), 가격 전략, 투자자 타겟팅이 완전히 달라진다."
                    : "The reason to IPO is never singular. VC-backed startups go public for investor exits and growth capital. PE sponsors IPO for fund liquidation and IRR realization. Governments list for fiscal revenue and SOE efficiency. Conglomerates spin off subsidiaries for independent valuation re-rating. Each motivation produces a different IPO structure — Primary vs Secondary mix, pricing strategy, and investor targeting.",
                  ko
                    ? "DCM의 발행사 스펙트럼(SSA→Distressed)이 신용등급으로 줄을 세웠다면, ECM의 발행사 스펙트럼은 IPO 동기와 리스크 프로파일로 구분된다."
                    : "Where DCM's issuer spectrum ranks by credit rating (SSA to Distressed), ECM's issuer spectrum is distinguished by IPO motivation and risk profile.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <IssuerSpectrumViz ko={ko} />

            {/* Banker's note */}
            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-blue-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"발행사가 '지금 IPO해야 한다'고 오면 50%는 시장이 좋아서다. 나머지 50%는 PE 펀드 만기가 다 됐거나 창업자가 현금이 필요해서다. 뱅커는 그 동기를 파악하는 것부터 시작한다.\""
                  : "\"When an issuer says 'we need to IPO now,' 50% of the time it's because the market is hot. The other 50% is a PE fund approaching maturity or a founder who needs liquidity. The banker's job starts with diagnosing that motivation.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM MD, 서울·뉴욕 복수 발행 경험 뱅커, 2024" : "— ECM MD, multi-market IPO veteran, 2024"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Ch.4 딜 프로세스 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "IPO 딜 프로세스 — 18개월 프로젝트" : "IPO Deal Process — An 18-Month Project"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "IPO는 단 한 번의 이벤트가 아닌 18개월짜리 프로젝트다. Bake-off(IB 선발 피치)에서 시작해, 실사와 S-1 작성, SEC Comment Letter 전쟁, Quiet Period(침묵 기간), 글로벌 로드쇼(50–80개 투자자 미팅), 프라이싱 나이트(자정까지 가격·배분 확정), 그리고 상장 첫날 그린슈 모니터링까지."
                    : "An IPO isn't a single event — it's an 18-month project. Starting with the Bake-off (bank selection pitch), through due diligence and S-1 drafting, SEC Comment Letter battles, the Quiet Period, global roadshow (50–80 investor meetings), Pricing Night (price and allocation finalized by midnight), and Day One Greenshoe monitoring.",
                  ko
                    ? "각 단계에서 Analyst·Associate·VP·MD가 맡는 역할이 다르다. Analyst는 밤새 밸류에이션 모델과 IM(정보 메모랜덤)을 만들고, Associate는 로드쇼 자료를 조율하고, VP/Director는 투자자 미팅을 주도하고, MD는 발행사 CFO와 최종 가격을 협상한다."
                    : "Each stage involves different roles across the analyst-to-MD hierarchy. Analysts build valuation models and draft IMs overnight, Associates coordinate roadshow materials, VPs/Directors lead investor meetings, and MDs negotiate final pricing with the issuer's CFO.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <DealProcessTimeline ko={ko} />
          </motion.section>

          {/* Ch.5 케이스 스터디 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실전 케이스 스터디" : "Case Studies"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "성공한 IPO와 실패한 IPO는 무엇이 달랐는가. 세 케이스가 각각 다른 교훈을 담고 있다 — 계열사 분리상장의 교과서, 지배구조 붕괴, 그리고 규제 리스크의 현실."
                : "What separated successful IPOs from failed ones? Three cases, three different lessons — the conglomerate spin-off textbook, governance collapse, and the reality of regulatory risk."}
            </motion.p>

            <CaseStudyCards ko={ko} />
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* FAQ */}
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

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {RELATED_TERMS.map((term) => (
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

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          

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
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/ecm-ipo-issuers" : "/en/market-101/ecm-ipo-issuers"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "Ch.1 발행사 →" : "Ch.1 Issuers →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
