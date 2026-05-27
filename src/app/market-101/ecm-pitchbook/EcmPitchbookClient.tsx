"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
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
const ACCENT = "#3182f6";

// ── ECM Practical Series Nav ───────────────────────────────────────────────────
const ECM_PRACTICAL_SERIES = [
  { slug: "ecm-rights-issue",   title: (ko: boolean) => ko ? "유상증자 실무" : "Rights Issue" },
  { slug: "ecm-ipo-allocation", title: (ko: boolean) => ko ? "IPO 배분 전략" : "IPO Allocation" },
  { slug: "ecm-pitchbook",      title: (ko: boolean) => ko ? "피치북 해부학" : "Pitchbook" },
  { slug: "ecm-abb-execution",  title: (ko: boolean) => ko ? "ABB 실행 매뉴얼" : "ABB Manual" },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",       en: "Quick Stats"      },
  { id: "ch2", ko: "피치북이란",      en: "What Is a Pitchbook" },
  { id: "ch3", ko: "10개 섹션 해부",  en: "10 Sections"      },
  { id: "ch4", ko: "피어 선정",       en: "Peer Selection"   },
  { id: "ch5", ko: "수수료 구조",     en: "Fee Structure"    },
  { id: "ch6", ko: "뷰티콘테스트",    en: "Beauty Contest"   },
];

// ── Quick Stats ────────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "40–80p",
    label: (ko: boolean) => ko ? "피치북 평균 분량" : "Avg. pitchbook length",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
  },
  {
    value: "3–5",
    label: (ko: boolean) => ko ? "뷰티콘테스트 참가 IB 수" : "Banks in a bake-off",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
  },
  {
    value: "#1",
    label: (ko: boolean) => ko ? "CFO 결정 요소: Equity Story 설득력" : "CFO priority: Equity Story conviction",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700",
  },
  {
    value: "24–72h",
    label: (ko: boolean) => ko ? "피치북 제작 소요 시간" : "Pitchbook production time",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
  },
];

// ── Pitchbook 10 Sections ──────────────────────────────────────────────────────
const PITCHBOOK_SECTIONS = [
  {
    num: "01",
    icon: "📄",
    title: (ko: boolean) => ko ? "표지 / 목차" : "Cover / TOC",
    pages: "1–2p",
    desc: (ko: boolean) => ko
      ? "딜 코드명, 기밀 문구, 발행사 로고. 투자자에게 첫인상을 전달하는 단 한 페이지."
      : "Deal codename, confidentiality notice, issuer logo. The single page that delivers a first impression.",
    star: false,
  },
  {
    num: "02",
    icon: "⚡",
    title: (ko: boolean) => ko ? "Executive Summary" : "Executive Summary",
    pages: "2–3p",
    desc: (ko: boolean) => ko
      ? "딜 하이라이트, 투자 포인트 3~5개. CFO는 여기만 읽을 수도 있다. 나머지 섹션의 '결론'을 압축한다."
      : "Deal highlights, 3–5 investment points. The CFO may read only this. It compresses the 'conclusions' of every other section.",
    star: false,
  },
  {
    num: "03",
    icon: "★",
    title: (ko: boolean) => ko ? "Equity Story" : "Equity Story",
    pages: "5–10p",
    desc: (ko: boolean) => ko
      ? "가장 중요한 섹션. '왜 지금, 왜 이 가격에 투자해야 하는가'에 대한 답. TAM, 경쟁 우위, 성장 드라이버를 내러티브로 엮는다."
      : "The most critical section. Answers: 'Why now, why at this price?' Weaves TAM, competitive moat, and growth drivers into a coherent narrative.",
    star: true,
  },
  {
    num: "04",
    icon: "📊",
    title: (ko: boolean) => ko ? "비교 회사 분석 (Comps)" : "Comparable Companies",
    pages: "8–12p",
    desc: (ko: boolean) => ko
      ? "피어 선정 기준과 EV/EBITDA·P/E 멀티플 범위 분석. 발행사 포지셔닝의 논거를 제공한다."
      : "Peer selection rationale and EV/EBITDA · P/E multiple ranges. Provides the analytical basis for issuer positioning.",
    star: false,
  },
  {
    num: "05",
    icon: "🏈",
    title: (ko: boolean) => ko ? "Football Field" : "Football Field",
    pages: "2–3p",
    desc: (ko: boolean) => ko
      ? "5가지 방법론(DCF, Comps, Precedent Transactions, 52주 주가, Sum-of-parts)의 밸류에이션 범위를 수평 막대로 시각화."
      : "Horizontal bar visualization of valuation ranges from 5 methodologies: DCF, Comps, Precedent Transactions, 52-week range, Sum-of-parts.",
    star: false,
  },
  {
    num: "06",
    icon: "🌐",
    title: (ko: boolean) => ko ? "시장 환경 분석" : "Market Environment",
    pages: "3–5p",
    desc: (ko: boolean) => ko
      ? "최근 IPO·팔로우온 시장 컨디션, 섹터 수급, 글로벌 매크로 요인. 타이밍의 논거를 제시한다."
      : "Recent IPO/follow-on market conditions, sector supply-demand, macro factors. Provides the timing rationale.",
    star: false,
  },
  {
    num: "07",
    icon: "🏗️",
    title: (ko: boolean) => ko ? "딜 구조 제안" : "Deal Structure",
    pages: "3–5p",
    desc: (ko: boolean) => ko
      ? "트랑쉬 구성, 오버-알로트먼트(그린슈), 록업 구조 제안. Primary vs Secondary 물량 비율 포함."
      : "Tranche composition, over-allotment (greenshoe), lock-up structure proposal. Includes Primary vs Secondary split.",
    star: false,
  },
  {
    num: "08",
    icon: "🎯",
    title: (ko: boolean) => ko ? "투자자 타겟 리스트" : "Investor Targeting",
    pages: "3–5p",
    desc: (ko: boolean) => ko
      ? "기관별 예상 수요, 지역(아시아·유럽·미국) 배분 계획. IB의 네트워크와 배분 역량이 가장 잘 드러나는 섹션."
      : "Expected demand by institution, geographic allocation plan (Asia/Europe/US). The section where the bank's network and placement power shows most clearly.",
    star: false,
  },
  {
    num: "09",
    icon: "📅",
    title: (ko: boolean) => ko ? "실행 타임라인" : "Execution Timeline",
    pages: "1–2p",
    desc: (ko: boolean) => ko
      ? "이사회 결의 → 증권신고서 제출 → 수요예측 → 로드쇼 → 프라이싱까지의 날짜별 계획."
      : "Day-by-day plan from board resolution → prospectus filing → bookbuild → roadshow → pricing.",
    star: false,
  },
  {
    num: "10",
    icon: "💰",
    title: (ko: boolean) => ko ? "수수료 제안" : "Fee Proposal",
    pages: "1–2p",
    desc: (ko: boolean) => ko
      ? "IB 수수료 구조 (보통 proceeds의 3~7%). 기본 수수료 + 성과 수수료 구조, 공동 주관사 배분 방식 포함."
      : "IB fee structure (typically 3–7% of proceeds). Includes base fee + incentive fee structure and co-manager fee split.",
    star: false,
  },
];

// ── Peer Selection Steps ───────────────────────────────────────────────────────
const PEER_STEPS = [
  {
    num: "1",
    title: (ko: boolean) => ko ? "산업 분류" : "Industry Classification",
    desc: (ko: boolean) => ko ? "GICS 또는 NAICS 기준으로 동일 섹터 기업 풀 구성" : "Build a candidate pool using GICS or NAICS sector codes",
  },
  {
    num: "2",
    title: (ko: boolean) => ko ? "규모 필터" : "Size Filter",
    desc: (ko: boolean) => ko ? "시가총액 0.5×~2× 범위 내 기업으로 좁힘" : "Narrow to companies within 0.5×–2× market cap range",
  },
  {
    num: "3",
    title: (ko: boolean) => ko ? "성장률 유사성" : "Growth Similarity",
    desc: (ko: boolean) => ko ? "Revenue CAGR ±10%p 이내 기업으로 필터링" : "Filter to companies within ±10%p Revenue CAGR",
  },
  {
    num: "4",
    title: (ko: boolean) => ko ? "지역 고려" : "Geographic Scope",
    desc: (ko: boolean) => ko ? "국내 vs 글로벌 피어 구성 비율 결정" : "Decide domestic vs global peer composition ratio",
  },
  {
    num: "5",
    title: (ko: boolean) => ko ? "최종 선정" : "Final Selection",
    desc: (ko: boolean) => ko ? "보통 8~15개사로 최종 확정. 선정 로직을 문서화" : "Finalize 8–15 companies. Document selection rationale",
  },
];

// ── EV/EBITDA Peer Data ────────────────────────────────────────────────────────
const PEER_MULTIPLES_KO = [
  { name: "피어 A", value: 22.1, issuer: false },
  { name: "피어 B", value: 19.4, issuer: false },
  { name: "피어 C", value: 17.8, issuer: false },
  { name: "피어 D", value: 16.2, issuer: false },
  { name: "피어 E", value: 15.1, issuer: false },
  { name: "발행사", value: 14.3, issuer: true  },
  { name: "피어 F", value: 13.9, issuer: false },
  { name: "피어 G", value: 12.4, issuer: false },
  { name: "피어 H", value: 11.7, issuer: false },
  { name: "피어 I", value: 10.8, issuer: false },
  { name: "피어 J", value: 9.2,  issuer: false },
];

const PEER_MULTIPLES_EN = [
  { name: "Peer A", value: 22.1, issuer: false },
  { name: "Peer B", value: 19.4, issuer: false },
  { name: "Peer C", value: 17.8, issuer: false },
  { name: "Peer D", value: 16.2, issuer: false },
  { name: "Peer E", value: 15.1, issuer: false },
  { name: "Issuer", value: 14.3, issuer: true  },
  { name: "Peer F", value: 13.9, issuer: false },
  { name: "Peer G", value: 12.4, issuer: false },
  { name: "Peer H", value: 11.7, issuer: false },
  { name: "Peer I", value: 10.8, issuer: false },
  { name: "Peer J", value: 9.2,  issuer: false },
];

// ── Fee Data ──────────────────────────────────────────────────────────────────
const FEE_DATA_KO = [
  { name: "IPO",    min: 5, max: 7, mid: 6.0 },
  { name: "팔로우온", min: 2, max: 4, mid: 3.0 },
  { name: "ABB",    min: 1, max: 2, mid: 1.5 },
  { name: "CB",     min: 2, max: 3, mid: 2.5 },
];
const FEE_DATA_EN = [
  { name: "IPO",        min: 5, max: 7, mid: 6.0 },
  { name: "Follow-on",  min: 2, max: 4, mid: 3.0 },
  { name: "ABB",        min: 1, max: 2, mid: 1.5 },
  { name: "CB",         min: 2, max: 3, mid: 2.5 },
];

// ── CFO Decision Criteria ──────────────────────────────────────────────────────
const CFO_CRITERIA = [
  {
    rank: 1,
    label: (ko: boolean) => ko ? "Equity Story 설득력" : "Equity Story conviction",
    bar: 92,
    color: "bg-blue-500",
  },
  {
    rank: 2,
    label: (ko: boolean) => ko ? "투자자 네트워크 / 배분 역량" : "Investor network / placement power",
    bar: 78,
    color: "bg-blue-400",
  },
  {
    rank: 3,
    label: (ko: boolean) => ko ? "수수료 경쟁력" : "Fee competitiveness",
    bar: 63,
    color: "bg-blue-300",
  },
  {
    rank: 4,
    label: (ko: boolean) => ko ? "기존 관계 (Relationship)" : "Existing relationship",
    bar: 51,
    color: "bg-blue-200",
  },
  {
    rank: 5,
    label: (ko: boolean) => ko ? "언더라이트 가능 여부" : "Ability to underwrite",
    bar: 38,
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
];

// ── Failing Pitch Patterns ─────────────────────────────────────────────────────
const FAIL_PATTERNS = [
  {
    num: "01",
    title: (ko: boolean) => ko ? "Generic Equity Story" : "Generic Equity Story",
    desc: (ko: boolean) => ko
      ? "어떤 회사에도 쓸 수 있는 범용 내러티브. '글로벌 시장 확대, 기술 혁신, 강한 팀'은 투자자를 설득하지 못한다. Equity Story는 이 회사에서만 가능한 이유여야 한다."
      : "A one-size-fits-all narrative. 'Global market expansion, tech innovation, strong team' convinces nobody. Equity Story must articulate reasons specific and unique to this company.",
    icon: "❌",
  },
  {
    num: "02",
    title: (ko: boolean) => ko ? "피어 선정 로직 없이 멀티플만 나열" : "Multiples without peer rationale",
    desc: (ko: boolean) => ko
      ? "EV/EBITDA 15x라는 숫자만 제시하고 '왜 이 피어를 선택했는지'에 대한 논거가 없으면 투자자와 CFO 모두 신뢰하지 않는다."
      : "Citing an EV/EBITDA multiple without explaining peer selection rationale earns trust from neither investors nor the CFO.",
    icon: "❌",
  },
  {
    num: "03",
    title: (ko: boolean) => ko ? "수수료만 낮추고 실행 역량 어필 없음" : "Competing only on fees",
    desc: (ko: boolean) => ko
      ? "수수료 경쟁력은 CFO 결정 기준 3위다. 1위인 Equity Story와 2위인 투자자 네트워크 없이 수수료만 내세우면 이미 지고 들어가는 피치다."
      : "Fee competitiveness ranks 3rd in CFO decision criteria. Leading with price while skipping the 1st-ranked Equity Story and 2nd-ranked investor network is a losing pitch from the start.",
    icon: "❌",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "피치북에 나온 가격 범위가 나중에 달라지면 책임이 있나요?",
    a: "피치북의 밸류에이션 범위는 법적 구속력이 없는 'indicative'한 자료입니다. IB는 피치북 첫 페이지에 '시장 상황에 따라 변경될 수 있음' 등의 면책 문구를 명시합니다. 다만 실제 딜에서 피치북 범위를 크게 벗어나는 가격을 제시하면 발행사와의 신뢰 관계가 훼손되기 때문에, 뱅커는 처음부터 현실적인 범위를 제시하려 합니다. 공모가 밴드는 증권신고서 제출 후 법적 효력이 발생합니다.",
  },
  {
    q: "글로벌 IB와 국내 증권사 중 어떤 걸 선택해야 하나요?",
    a: "선택 기준은 딜의 성격에 따라 다릅니다. 해외 기관투자자 접근이 중요한 대형 딜(≥5,000억 원)은 글로벌 IB(모건스탠리·골드만·씨티)의 국제 배분 네트워크가 결정적입니다. 반면 국내 리테일 수요가 핵심인 중소형 딜이나 코스닥 IPO는 국내 증권사가 더 효과적입니다. 대형 IPO에서는 글로벌 코디네이터(GC) + 국내 주관사 구조를 많이 씁니다. LG에너지솔루션의 경우 KB·대신(국내)과 씨티·모건스탠리(글로벌)를 공동 주관사로 구성했습니다.",
  },
  {
    q: "피치북 작성 시 Non-disclosure Agreement는 어떻게 다루나요?",
    a: "피치북을 받는 발행사는 통상 NDA(기밀유지협약)를 IB와 체결합니다. 반대로 IB가 피치북을 준비하는 과정에서 발행사로부터 내부 재무자료를 받는 경우에도 NDA가 요구됩니다. 단, 뷰티콘테스트 단계에서는 IB가 공개 정보만으로 피치북을 작성하는 경우가 많습니다. 발행사의 미공개 정보를 활용하려면 반드시 NDA 체결 후 이뤄져야 하며, 위반 시 내부자거래 및 공시 위반 문제가 발생할 수 있습니다.",
  },
  {
    q: "소규모 IPO에서도 풀 피치북이 필요한가요?",
    a: "거래 규모에 따라 피치북의 깊이가 달라집니다. 코스닥 소형 IPO(시가총액 1,000억 원 미만)에서는 20~30페이지의 간소화된 버전을 쓰는 경우가 많습니다. 그러나 핵심 섹션인 Equity Story, Football Field, 투자자 타겟 리스트는 규모에 관계없이 반드시 포함됩니다. 간소화는 섹션의 깊이를 줄이는 것이지, 핵심 논거를 생략하는 것이 아닙니다.",
  },
  {
    q: "AI가 피치북 작성을 대체할 수 있을까요?",
    a: "현재 AI는 피어 데이터 수집, 재무 모델 초안, 슬라이드 레이아웃 생성에서 생산성을 크게 높이고 있습니다. 그러나 Equity Story의 핵심인 '이 회사만의 내러티브'와 '투자자별 맞춤 포지셔닝'은 여전히 뱅커의 시장 감각과 투자자 관계에 의존합니다. CFO 결정의 1위 요소가 Equity Story 설득력이라는 점을 감안하면, AI는 조연이 될 수 있어도 주연은 당분간 사람입니다. Goldman Sachs, Morgan Stanley 등 주요 IB는 이미 내부 AI 도구로 리서치와 모델링을 가속화하고 있습니다.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function PracticalSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_PRACTICAL_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                item.slug === "ecm-pitchbook"
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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

function PracticeBox({ ko, title, children }: { ko: boolean; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl border border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-900/10 p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-blue-500 text-lg">🔧</span>
        <span className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          {ko ? "실전 포인트" : "Practice Point"}
        </span>
      </div>
      <p className="text-[13px] font-bold text-blue-800 dark:text-blue-200 mb-3">{title}</p>
      <div className="text-[13px] text-blue-900 dark:text-blue-200 leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  );
}

function PitchbookSectionsGrid({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-3">
      {PITCHBOOK_SECTIONS.map((sec, i) => (
        <motion.div
          key={sec.num}
          variants={fadeUp(i * 0.04)}
          className={`rounded-xl border p-4 flex gap-4 ${
            sec.star
              ? "border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          }`}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gray-100 dark:bg-gray-800">
            {sec.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black text-gray-400 dark:text-gray-500">{sec.num}</span>
              <span className={`text-[13px] font-black ${sec.star ? "text-blue-700 dark:text-blue-300" : "text-gray-800 dark:text-gray-200"}`}>
                {sec.title(ko)}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 ml-auto flex-shrink-0">{sec.pages}</span>
              {sec.star && (
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex-shrink-0">
                  {ko ? "핵심" : "KEY"}
                </span>
              )}
            </div>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{sec.desc(ko)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function PeerStepsTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-0">
      {PEER_STEPS.map((step, i) => (
        <div key={step.num} className="flex gap-4 items-start relative">
          {i < PEER_STEPS.length - 1 && (
            <div className="absolute left-4 top-9 w-px h-full bg-gray-200 dark:bg-gray-700" />
          )}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white flex-shrink-0 z-10"
            style={{ background: ACCENT }}
          >
            {step.num}
          </div>
          <div className="pb-5 flex-1">
            <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-0.5">{step.title(ko)}</p>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function PeerMultiplesChart({ ko }: { ko: boolean }) {
  const data = ko ? PEER_MULTIPLES_KO : PEER_MULTIPLES_EN;
  const issuerLabel = ko ? "발행사" : "Issuer";
  const median = 15.1;

  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "EV/EBITDA 피어 멀티플 비교 (예시)" : "EV/EBITDA Peer Multiple Comparison (illustrative)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 40, left: 8, bottom: 4 }}
          >
            <XAxis
              type="number"
              domain={[0, 26]}
              tickFormatter={(v) => `${v}x`}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={56}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${(value as number).toFixed(1)}x`, "EV/EBITDA"]}
              contentStyle={{
                fontSize: 12,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            />
            <ReferenceLine
              x={median}
              stroke="#f59e0b"
              strokeDasharray="4 3"
              label={{ value: ko ? "중앙값" : "Median", position: "top", fontSize: 9, fill: "#f59e0b" }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.issuer ? ACCENT : "#93c5fd"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-2 leading-relaxed">
          {ko
            ? `파란 막대: 피어 기업 / 진한 파란 막대: 발행사 (${issuerLabel}) / 점선: 피어 중앙값`
            : `Light blue: peers / Dark blue: ${issuerLabel} / Dashed: peer median`}
        </p>
      </div>
    </motion.div>
  );
}

function FeeRangeChart({ ko }: { ko: boolean }) {
  const data = ko ? FEE_DATA_KO : FEE_DATA_EN;

  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "딜 유형별 IB 수수료 범위 (% of proceeds)" : "IB Fee Range by Deal Type (% of proceeds)"}
        </p>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          {data.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              className="flex items-center gap-3"
            >
              <div className="w-20 text-[12px] font-bold text-gray-700 dark:text-gray-300 text-right flex-shrink-0">
                {item.name}
              </div>
              <div className="flex-1 relative h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 h-full rounded-full"
                  style={{
                    left: `${(item.min / 8) * 100}%`,
                    background: ACCENT,
                    opacity: 0.8,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((item.max - item.min) / 8) * 100}%` }}
                  viewport={VP}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.1, ease: EASE }}
                />
              </div>
              <div className="w-20 text-[11px] text-gray-500 dark:text-gray-400 flex-shrink-0">
                {item.min}%–{item.max}%
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-gray-400 mt-3 px-24">
          <span>0%</span>
          <span>2%</span>
          <span>4%</span>
          <span>6%</span>
          <span>8%</span>
        </div>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-3 leading-relaxed">
          {ko
            ? "수수료는 딜 규모, 시장 환경, 주관사 수에 따라 협상으로 결정됩니다."
            : "Fees are negotiated based on deal size, market conditions, and number of underwriters."}
        </p>
      </div>
    </motion.div>
  );
}

function CfoCriteriaChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-3">
      {CFO_CRITERIA.map((item, i) => (
        <motion.div
          key={item.rank}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
          className="flex items-center gap-3"
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black text-white flex-shrink-0"
            style={{ background: ACCENT, opacity: 1 - i * 0.15 }}
          >
            {item.rank}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">{item.label(ko)}</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{item.bar}%</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.bar}%` }}
                viewport={VP}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.1, ease: EASE }}
              />
            </div>
          </div>
        </motion.div>
      ))}
      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 leading-relaxed">
        {ko
          ? "* CFO 설문 기반 가중치 (응답자 복수 선택 허용). 출처: 글로벌 투자은행 내부 설문 종합."
          : "* CFO survey-based weighting (multiple selection allowed). Source: composite of global IB internal surveys."}
      </p>
    </motion.div>
  );
}

function FailPatternsCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {FAIL_PATTERNS.map((p, i) => (
        <motion.div
          key={p.num}
          variants={fadeUp(i * 0.07)}
          className="rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 p-4 flex gap-4"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-[11px] font-black text-red-500 dark:text-red-400">
            {p.num}
          </div>
          <div>
            <p className="text-[13px] font-bold text-red-700 dark:text-red-300 mb-1">{p.title(ko)}</p>
            <p className="text-[12px] text-red-600 dark:text-red-400 leading-relaxed">{p.desc(ko)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmPitchbookClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-pitchbook"
                  : "https://dealstory.io/en/market-101/ecm-pitchbook",
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
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "피치북 해부학" : "ECM Pitchbook"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM 실무 시리즈" : "ECM Practical Series"}
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
                href="/market-101/ecm-pitchbook"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-pitchbook"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        <PracticalSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "30초 요약" : "Quick Stats"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "피치북을 이해하기 위한 4개의 숫자" : "Four Numbers to Understand the Pitchbook"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "ECM 딜을 따내기 위한 경쟁, 즉 뷰티콘테스트(Bake-off)에서 IB는 피치북(Pitchbook)을 제출한다. 피치북은 단순한 프레젠테이션이 아니다 — IB가 '우리가 이 딜을 왜 맡아야 하는지'를 밸류에이션, 투자자 네트워크, 수수료 구조로 증명하는 제안서다."
                    : "In the bake-off — the competitive pitch to win an ECM mandate — banks submit a pitchbook. A pitchbook is not a mere presentation. It is a formal proposal where a bank proves why it should win the mandate: through valuation, investor network, and fee structure.",
                  ko
                    ? "평균 40~80페이지에 달하는 피치북은 보통 24~72시간 안에 완성된다. Analyst와 Associate가 밤새 작업하고, MD가 발행사 CFO 앞에서 이를 발표한다. CFO는 평균 3~5개 IB의 피치북을 동시에 비교한다."
                    : "The average 40–80-page pitchbook is built in 24–72 hours. Analysts and Associates work through the night; the MD presents it to the issuer's CFO. The CFO typically compares pitchbooks from 3–5 banks simultaneously.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <QuickStatsGrid ko={ko} />
          </motion.section>

          {/* Ch.2 피치북이란 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "피치북이란" : "What Is a Pitchbook"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "건축가의 설계 제안서" : "The Architect's Design Proposal"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "피치북의 목적은 세 가지다. 첫째, 발행사의 Equity Story를 IB가 어떻게 이해하고 있는지 보여준다. 둘째, 그 스토리를 뒷받침하는 밸류에이션 근거를 제시한다. 셋째, 이 딜을 실행할 능력(투자자 네트워크, 경험, 팀)이 있음을 증명한다."
                    : "A pitchbook serves three purposes. First, it shows how the bank understands the issuer's Equity Story. Second, it presents the valuation rationale supporting that story. Third, it proves the bank has the capability to execute — investor network, experience, team.",
                  ko
                    ? "피치북을 읽는 사람은 CFO와 IR 팀이지만, 실제 결정에는 CEO·회장·이사회가 관여하는 경우가 많다. 따라서 피치북은 '재무 전문가'와 '비전문가'를 동시에 설득할 수 있어야 한다."
                    : "The primary readers are the CFO and IR team, but CEOs, chairpersons, and board members often influence the final decision. The pitchbook must therefore persuade both financial experts and non-specialists simultaneously.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko}>
              {ko
                ? "피치북은 건축가의 설계 제안서다. 건물주(CFO)는 여러 건축사(IB)에게 '우리 빌딩을 설계해달라'고 한다. 가장 매력적인 설계안(Equity Story)을 낸 건축사가 프로젝트를 딴다. 설계가 아무리 훌륭해도 건축비(수수료) 견적이 황당하면 탈락이다. 반대로 건축비만 싸고 설계가 허술해도 탈락이다."
                : "A pitchbook is an architect's design proposal. The building owner (CFO) asks multiple architects (banks) to propose a design for their building. The firm with the most compelling design (Equity Story) wins the project. No matter how brilliant the design, an absurd construction cost (fee) means rejection. And a bargain price with a shoddy design fails too."}
            </AnalogyBox>
          </motion.section>

          {/* Ch.3 10개 섹션 해부 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "10개 섹션 해부" : "10 Sections Dissected"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "피치북 완전 분해 — 섹션별 역할과 작성 포인트" : "Full Pitchbook Dissection — Section Roles and Writing Points"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "표준 ECM 피치북은 10개 섹션으로 구성된다. 각 섹션은 독립적인 역할을 하면서도 서로 논리적으로 연결되어야 한다. CFO는 전체를 다 읽지 않을 수 있지만, 뱅커는 모든 섹션이 일관된 스토리를 지지하도록 설계해야 한다."
                  : "A standard ECM pitchbook has 10 sections. Each serves a distinct role while connecting logically to the others. The CFO may not read every section, but the banker must design each one to support a consistent overall story."}
              </motion.p>
            </div>

            <PitchbookSectionsGrid ko={ko} />

            <PracticeBox ko={ko} title={ko ? "Equity Story 작성의 3가지 원칙" : "3 Principles for Writing a Compelling Equity Story"}>
              {ko ? (
                <>
                  <p>① <strong>숫자로 시작하라:</strong> "TAM $500B, 당사 점유율 현재 2% → 5년 후 10% 목표" — 추상적인 주장이 아닌 검증 가능한 숫자로 논거를 시작한다.</p>
                  <p>② <strong>차별화 포인트는 1~2개만:</strong> '우리만 가진 것'에 집중한다. 세 가지 이상의 차별점을 나열하면 투자자는 아무것도 기억하지 못한다.</p>
                  <p>③ <strong>리스크를 먼저 말하라:</strong> 투자자가 첫 번째로 제기할 리스크를 선제적으로 인정하고 반박한다. 리스크를 숨기려는 Equity Story는 오히려 신뢰를 잃는다.</p>
                </>
              ) : (
                <>
                  <p>① <strong>Start with numbers:</strong> "TAM $500B, current market share 2% → 10% in 5 years." Ground arguments in verifiable data, not abstract claims.</p>
                  <p>② <strong>Limit differentiation to 1–2 points:</strong> Focus on what only this company has. Investors remember nothing if you list three or more differentiators.</p>
                  <p>③ <strong>Acknowledge risk first:</strong> Preemptively identify and rebut the #1 risk investors will raise. Equity Stories that hide risk lose trust faster than any market condition.</p>
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* Ch.4 피어 선정 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "피어 선정" : "Peer Selection"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "비교 회사 선정의 기술 — 감정가 기준을 어디에 두느냐" : "The Art of Peer Selection — Where You Set the Benchmark"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "비교 회사(Comparable Companies, Comps) 분석은 '이 회사가 얼마짜리인가'를 유사 기업의 시장가치에서 역산하는 방법이다. 피어 선정 자체가 밸류에이션을 결정하기 때문에, 어떤 피어를 선택하느냐가 Football Field의 범위를 결정한다."
                    : "Comparable Companies (Comps) analysis reverse-engineers a company's value from the market prices of similar peers. Because peer selection itself determines valuation, which peers you choose defines the range shown in the Football Field.",
                  ko
                    ? "IB는 발행사에게 유리한 고성장·고멀티플 피어를 넣으려 하고, 투자자는 불리한 저멀티플 피어를 제시한다. 독립 재무자문사(FA)를 활용하는 발행사는 주관사 편향을 방지할 수 있다."
                    : "Banks try to include high-growth, high-multiple peers that flatter the issuer. Investors counter by proposing lower-multiple peers. Issuers using an independent financial advisor (FA) can guard against underwriter bias.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko}>
              {ko
                ? "피어 선정은 부동산 감정의 기준을 어디에 두느냐와 같다. 강남 아파트를 팔면서 판교 아파트와 비교할 건지, 분당 아파트와 비교할 건지에 따라 감정가가 달라진다. IB는 발행사에게 유리한 피어(판교)를 선택하려 하고, 투자자는 불리한 피어(분당)를 제시한다. 중립적인 기준이 없으면 협상은 피어 선정부터 시작된다."
                : "Peer selection is like choosing comparables for a property appraisal. Selling an apartment in Gangnam — comparing it to Pangyo gives a higher valuation than comparing it to Bundang. Banks push for the premium peers (Pangyo); investors argue for the discount peers (Bundang). Without a neutral standard, the negotiation starts with peer selection."}
            </AnalogyBox>

            <PeerStepsTimeline ko={ko} />

            <PeerMultiplesChart ko={ko} />

            <PracticeBox ko={ko} title={ko ? "IB가 피어 선정에서 쓰는 전략과 CFO의 반박법" : "Strategies Banks Use in Peer Selection — and How CFOs Push Back"}>
              {ko ? (
                <>
                  <p>① <strong>고성장 피어만 포함:</strong> 멀티플을 높이기 위해 발행사보다 성장률이 높은 기업만 선택. → CFO 반박: 성장률 유사성 필터 요구.</p>
                  <p>② <strong>최근 IPO 기업 제외:</strong> 최근 공모 후 디스카운트된 기업을 피어에서 빼 시장 현실을 희석. → CFO 반박: 동시기 IPO 기업 포함 요구.</p>
                  <p>③ <strong>국내 피어만 선택:</strong> 글로벌 유사기업 대비 프리미엄 국내 멀티플 적용. → CFO 반박: 글로벌 피어 병행 검토 요청.</p>
                </>
              ) : (
                <>
                  <p>① <strong>Only high-growth peers:</strong> Selecting companies with faster growth to inflate multiples. → CFO pushback: demand a growth-similarity filter.</p>
                  <p>② <strong>Excluding recent IPOs:</strong> Dropping newly listed peers whose post-IPO discount would pull multiples down. → CFO pushback: require inclusion of same-vintage IPO peers.</p>
                  <p>③ <strong>Domestic-only peers:</strong> Applying premium domestic multiples to avoid lower global comparable benchmarks. → CFO pushback: request parallel global peer analysis.</p>
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* Ch.5 수수료 구조 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "수수료 구조" : "Fee Structure"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "IB 수수료 — 딜 유형별로 얼마나 내는가" : "IB Fees — How Much Does Each Deal Type Cost"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "수수료는 피치북의 마지막 섹션이지만 CFO의 결정에서 세 번째로 중요한 요소다. IB 수수료는 통상 조달 규모(proceeds)의 퍼센트로 책정되며, 딜 유형과 규모, 시장 환경, 주관사 구성에 따라 협상으로 결정된다."
                    : "Fee proposal is the last section of the pitchbook but the third most important factor in the CFO's decision. IB fees are typically a percentage of gross proceeds, negotiated based on deal type, size, market conditions, and underwriter composition.",
                  ko
                    ? "공동 주관 구조에서는 글로벌 코디네이터(GC)가 수수료의 큰 비중을 가져가고, 국내 주관사·공동 주관사는 나머지를 배분한다. 성과 수수료(Incentive Fee)는 특정 조건(예: 수요예측 배수, 주가 성과) 달성 시 추가로 지급되는 구조다."
                    : "In a co-underwriter structure, the Global Coordinator (GC) takes the largest share of fees; domestic and co-underwriters split the remainder. Incentive fees are additional payments triggered by specific milestones (e.g., bookbuild coverage ratio, post-listing stock performance).",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <FeeRangeChart ko={ko} />

            {/* LG에너지솔루션 케이스 */}
            <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🔋</span>
                <span className="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  {ko ? "케이스 — LG에너지솔루션 IPO (2022)" : "Case — LG Energy Solution IPO (2022)"}
                </span>
              </div>
              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "한국 역대 최대 IPO(12.75조 원)인 LG에너지솔루션은 KB증권·대신증권(국내 주관)과 씨티그룹·모건스탠리(글로벌 코디네이터)가 공동 주관 구조로 딜을 집행했다. 글로벌 기관투자자 배분을 위해 글로벌 IB를 GC로 기용하면서 동시에 국내 리테일 수요 집행을 위해 국내 증권사를 대표 주관사로 유지한 구조다. 수수료는 대형 딜 특성상 표준보다 낮게 협상됐다."
                  : "Korea's largest-ever IPO (₩12.75 trillion) — LG Energy Solution — used a co-underwriter structure: KB Securities and Daishin Securities (domestic lead managers) alongside Citigroup and Morgan Stanley (Global Coordinators). The structure leveraged global banks for institutional allocation while keeping domestic securities firms as lead managers for Korean retail demand. Fees were negotiated below standard rates given the deal's scale."}
              </p>
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="mt-6 space-y-3">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300">
                {ko ? "수수료 협상 핵심 포인트" : "Key Fee Negotiation Points"}
              </p>
              {[
                ko ? "기본 수수료 vs 성과 수수료: 성과 연동 구조를 활용해 IB의 실행 동기를 극대화할 수 있다" : "Base fee vs incentive fee: performance-linked structures maximize the bank's execution motivation",
                ko ? "해외 IB vs 국내 증권사: 글로벌 IB는 수수료가 높지만 해외 배분 역량을 제공한다" : "Global IB vs domestic broker: global banks charge more but deliver overseas distribution capability",
                ko ? "공동 주관 구조: 경쟁을 유발해 개별 IB의 수수료를 낮추는 효과가 있다" : "Co-manager structure: creates competition that can lower individual bank fees",
              ].map((point, i) => (
                <div key={i} className="flex gap-2 text-[13px] text-gray-600 dark:text-gray-400">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* Ch.6 뷰티콘테스트 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "뷰티콘테스트" : "Beauty Contest"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "승패를 가르는 요소 — CFO는 무엇을 보는가" : "What Decides the Winner — What CFOs Actually Look For"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "뷰티콘테스트(Bake-off)는 발행사가 주관사를 선정하는 경쟁 피치 과정이다. CFO는 동시에 3~5개 IB의 피치북을 받고, 통상 1~2주 내에 주관사를 결정한다. 제한된 시간과 정보 속에서 CFO의 결정은 어떤 요소에 의해 좌우되는가?"
                    : "A bake-off is the competitive pitch process through which the issuer selects its underwriter. The CFO receives pitchbooks from 3–5 banks simultaneously and typically makes a decision within 1–2 weeks. With limited time and information, what factors drive the CFO's choice?",
                  ko
                    ? "실제 CFO 설문 데이터에 따르면, Equity Story의 설득력이 압도적인 1위다. '이 IB가 우리 회사를 제대로 이해하고 있는가'가 수수료나 관계보다 더 중요하다는 의미다."
                    : "According to real CFO survey data, Equity Story conviction is the overwhelming #1 factor. The question 'Does this bank truly understand our company?' matters more than fees or existing relationships.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.p variants={fadeUp(0.05)} className="text-[13px] font-bold text-gray-600 dark:text-gray-400 mt-8 mb-4">
              {ko ? "CFO 결정 기준 (설문 기반)" : "CFO Decision Criteria (Survey-based)"}
            </motion.p>
            <CfoCriteriaChart ko={ko} />

            <motion.div variants={fadeUp(0.15)} className="mt-10">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-4">
                {ko ? "실패하는 피치북의 3가지 패턴" : "3 Patterns of a Losing Pitchbook"}
              </p>
              <FailPatternsCards ko={ko} />
            </motion.div>

            {/* Closing quote */}
            <motion.blockquote variants={fadeUp(0.2)} className="mt-8 border-l-4 border-blue-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"최고의 피치북은 발행사가 이미 절반은 알고 있는 것을 완벽하게 언어화해 준다. CFO는 '우리 회사를 제대로 봤다'는 느낌을 받았을 때 결정을 내린다.\""
                  : "\"The best pitchbook perfectly articulates something the issuer already half-knows. The CFO decides the moment they feel: 'this bank really gets us.'\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM MD, 글로벌 IB 서울 오피스, 2024" : "— ECM MD, Global IB Seoul Office, 2024"}
              </p>
            </motion.blockquote>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

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
                items={FAQS.map((f) => ({ q: f.q, a: f.a }))}
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
                { slug: "ecm-ipo-valuation",   ko: "Football Field / 밸류에이션",  en: "Football Field / Valuation"   },
                { slug: "ecm-ipo-process",      ko: "IPO 딜 프로세스",              en: "IPO Deal Process"             },
                { slug: "ecm-ipo-bookbuilding", ko: "북빌딩 / 배분",                en: "Book-building / Allocation"   },
                { slug: "ecm-ipo-allocation",   ko: "IPO 배분 전략",               en: "IPO Allocation Strategy"      },
                { slug: "ecm-rights-issue",     ko: "유상증자 실무",               en: "Rights Issue Practical"       },
                { slug: "ecm-abb-execution",    ko: "ABB 실행 매뉴얼",             en: "ABB Execution Manual"         },
                { slug: "ecm-overview",         ko: "ECM 개요",                    en: "ECM Overview"                 },
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

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          {/* References */}
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
            <Link
              href={ko ? "/market-101/ecm-ipo-allocation" : "/en/market-101/ecm-ipo-allocation"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "IPO 배분 전략" : "IPO Allocation"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-abb-execution" : "/en/market-101/ecm-abb-execution"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "ABB 실행 매뉴얼 →" : "ABB Manual →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
