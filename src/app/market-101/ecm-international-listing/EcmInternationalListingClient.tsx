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
const accent = "#6366f1"; // indigo

const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"         : "ECM Overview"       },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"       : "Ch.1 Issuers"       },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"       : "Ch.2 Investors"     },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"   : "Ch.3 Valuation"     },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"     : "Ch.4 Process"       },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"       : "Ch.5 Book-Building" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"   : "Ch.6 Post-IPO"      },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"     : "Ch.7 Follow-on"     },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"     : "Ch.8 Convertible"   },
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"     : "Ch.9 Intl Listing"  },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장" : "Ch.10 SPAC·Direct"  },
];

const THIS_CH = "ecm-international-listing";
const thisCh = 9;

// ── Listing Types ─────────────────────────────────────────────────────────────
const LISTING_TYPES = [
  {
    name: "ADR",
    fullName: "ADR (American Depositary Receipt)",
    desc: (ko: boolean) => ko
      ? "미국 투자자들이 외국 주식을 달러로 거래할 수 있게 해주는 증서. 예탁은행(Bank of NY Mellon, Citibank 등)이 원주를 보관하고, 그 대가로 ADR을 발행."
      : "Certificates allowing US investors to trade foreign shares in USD. A depositary bank (BNY Mellon, Citibank, etc.) holds the underlying shares and issues ADRs in exchange.",
    levels: "Level I (OTC, 최소 공시) / Level II (NYSE/Nasdaq 상장, SEC 공시) / Level III (공모 포함, 전체 SEC 규제)",
    exampleKo: "삼성전자 ADR (OTC), 알리바바 NYSE",
    exampleEn: "Samsung Electronics ADR (OTC), Alibaba NYSE",
    dot: "bg-indigo-500",
  },
  {
    name: "GDR",
    fullName: "GDR (Global Depositary Receipt)",
    desc: (ko: boolean) => ko
      ? "유럽 등 복수 시장에서 거래 가능한 예탁증서. 런던증권거래소·룩셈부르크 상장이 일반적."
      : "Depositary receipts tradeable across multiple markets, typically listed on London Stock Exchange or Luxembourg.",
    levels: "144A (미국 기관투자자 전용) + Reg S (비미국 투자자) 병행 구조",
    exampleKo: "삼성물산 GDR, 인도 IT 기업들",
    exampleEn: "Samsung C&T GDR, Indian IT companies",
    dot: "bg-violet-500",
  },
  {
    name: (ko: boolean) => ko ? "이중상장" : "Dual Listing",
    fullName: (ko: boolean) => ko ? "이중상장 (Dual Listing)" : "Dual Listing",
    desc: (ko: boolean) => ko
      ? "본국 거래소와 해외 거래소에 동시 상장. 주식은 동일하지만 두 시장에서 각각 거래."
      : "Listed simultaneously on home and overseas exchanges. Same shares but traded separately in both markets.",
    complexity: (ko: boolean) => ko
      ? "시장 간 아비트라지 리스크, 두 거래소 규제 동시 충족 필요"
      : "Cross-market arbitrage risk; must satisfy two regulators simultaneously",
    exampleKo: "Rio Tinto (런던+호주), HSBC (런던+홍콩)",
    exampleEn: "Rio Tinto (London+Australia), HSBC (London+HK)",
    dot: "bg-blue-500",
  },
  {
    name: (ko: boolean) => ko ? "해외 직상장" : "Overseas Direct Listing",
    fullName: (ko: boolean) => ko ? "해외 직상장 (Overseas Direct Listing)" : "Overseas Direct Listing",
    desc: (ko: boolean) => ko
      ? "예탁증서 없이 해외 거래소에 직접 원주 상장. 가장 복잡하지만 예탁은행 비용 없음."
      : "Direct listing of underlying shares on an overseas exchange without depositary receipts. Most complex but no depositary bank fees.",
    exampleKo: "쿠팡 NYSE 2021 (직상장 형태로 원주 상장)",
    exampleEn: "Coupang NYSE 2021 (direct share listing)",
    dot: "bg-teal-500",
  },
];

// ── Regulatory Structure (144A / Reg S) ──────────────────────────────────────
const REG_STRUCTURE = [
  {
    label: "144A",
    desc: (ko: boolean) => ko
      ? "미국 기관투자자(QIB) 전용 사모 발행. SEC 등록 없이 미국 자금 조달 가능. 발행 빠르지만 유동성 낮음."
      : "US institutional investors (QIBs) only — private placement. Raises US money without full SEC registration. Faster but lower liquidity.",
    color: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800",
    tagColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  },
  {
    label: "Reg S",
    desc: (ko: boolean) => ko
      ? "미국 외 투자자 대상 발행. 미국 SEC 규제 회피. 유럽·아시아 투자자가 주 타겟."
      : "Offering to non-US investors. Avoids US SEC regulation. European and Asian investors are primary target.",
    color: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
    tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    label: (ko: boolean) => ko ? "병행 구조" : "Combined",
    desc: (ko: boolean) => ko
      ? "144A + Reg S를 동시에 진행하면 글로벌 투자자 기반 확보 가능. GDR 발행의 표준 구조."
      : "Running 144A + Reg S simultaneously captures a global investor base. Standard structure for GDR issuances.",
    color: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
    tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
];

// ── Listing Reasons ───────────────────────────────────────────────────────────
const LISTING_REASONS = [
  {
    title: (ko: boolean) => ko ? "밸류에이션 재평가" : "Valuation Re-rating",
    icon: "📈",
    detail: (ko: boolean) => ko
      ? "한국 증시는 전통적으로 '코리아 디스카운트'가 존재. 미국 상장 시 P/E 배수가 국내 대비 2–3배 높게 받는 경우 있음. 쿠팡, Arm Holdings가 대표 사례."
      : "Korea's stock market traditionally carries a 'Korea Discount.' US-listed companies often receive P/E multiples 2–3x higher than domestic peers. Coupang and Arm Holdings are prime examples.",
  },
  {
    title: (ko: boolean) => ko ? "투자자 기반 확대" : "Expanded Investor Base",
    icon: "🌐",
    detail: (ko: boolean) => ko
      ? "국내 투자자만으로는 수조 원 규모 오더북을 채우기 어려운 경우. 글로벌 기관투자자(BlackRock, Fidelity, Vanguard) 접근 필요."
      : "Domestic investors alone cannot fill a multi-trillion-won order book. Access to global institutions (BlackRock, Fidelity, Vanguard) is required.",
  },
  {
    title: (ko: boolean) => ko ? "M&A 통화 (Acquisition Currency)" : "M&A Currency",
    icon: "💱",
    detail: (ko: boolean) => ko
      ? "달러·파운드 표시 주식은 해외 기업 인수 시 현금 대신 사용 가능. 글로벌 확장 전략과 연계."
      : "Dollar- or pound-denominated shares can be used as acquisition currency instead of cash. Aligned with global expansion strategy.",
  },
  {
    title: (ko: boolean) => ko ? "브랜드·신뢰도 제고" : "Brand & Credibility",
    icon: "🏆",
    detail: (ko: boolean) => ko
      ? "NYSE·Nasdaq 상장 = 글로벌 스탠더드 준수의 신호. B2B 기업의 경우 해외 고객사 설득력 향상."
      : "NYSE/Nasdaq listing = signal of compliance with global standards. For B2B companies, it strengthens credibility with overseas clients.",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    emoji: "🛍️",
    company: "Coupang NYSE 2021",
    result: (ko: boolean) => ko ? "밸류에이션 극대화" : "Valuation Maximization",
    outcomeBg: "bg-blue-50 dark:bg-blue-950/20",
    outcomeBorder: "border-blue-200 dark:border-blue-700",
    outcomeTag: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    tagline: (ko: boolean) => ko
      ? "쿠팡 국내 상장 예상 밸류 ~20조 → NYSE 상장 실제 밸류 $84bn(약 95조)"
      : "Coupang domestic listing estimate ~₩20T → NYSE IPO actual value $84B",
    lesson: (ko: boolean) => ko
      ? "쿠팡이 NYSE를 선택한 이유: ① 아마존·알리바바 등 글로벌 이커머스 Peer 밸류에이션 활용 ② SoftBank 엑싯 용이 ③ 달러 표시 주식으로 글로벌 M&A 통화 확보. '코리아 디스카운트' 회피의 교과서 사례."
      : "Why Coupang chose NYSE: ① Access to global e-commerce peer valuations (Amazon, Alibaba) ② Easy SoftBank exit ③ Dollar shares for global M&A currency. The textbook case of avoiding the 'Korea Discount.'",
  },
  {
    emoji: "💻",
    company: "Arm Holdings NYSE 2023",
    result: (ko: boolean) => ko ? "역대 최대 반도체 IPO" : "Largest-Ever Semiconductor IPO",
    outcomeBg: "bg-violet-50 dark:bg-violet-950/20",
    outcomeBorder: "border-violet-200 dark:border-violet-700",
    outcomeTag: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    tagline: (ko: boolean) => ko
      ? "SoftBank 보유 → 런던 vs 뉴욕 상장 논쟁 → Nasdaq 선택 → $54.5bn 밸류"
      : "SoftBank-owned → London vs. New York listing debate → Nasdaq chosen → $54.5B valuation",
    lesson: (ko: boolean) => ko
      ? "영국 정부가 '국내 챔피언' 런던 상장을 압박했지만, Arm은 반도체 섹터 투자자 기반(NVDA·AMD 팬)이 있는 Nasdaq을 선택했다. 상장지 선택은 정치적 압력보다 투자자 기반이 우선한다."
      : "Despite UK government pressure for a 'national champion' London listing, Arm chose Nasdaq for its semiconductor investor base (NVDA/AMD fans). Listing venue selection prioritizes investor base over political pressure.",
  },
  {
    emoji: "🇰🇷",
    company: (ko: boolean) => ko ? "코스피 외국 기업 상장 시도" : "Foreign Companies on KOSPI",
    result: (ko: boolean) => ko ? "유동성 부족으로 철수" : "Poor Liquidity Exit",
    outcomeBg: "bg-red-50 dark:bg-red-950/20",
    outcomeBorder: "border-red-200 dark:border-red-700",
    outcomeTag: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    tagline: (ko: boolean) => ko
      ? "2000년대 여러 중국 기업 코스피 상장 → 유동성 부족·회계 부정 논란 → 대부분 상장폐지"
      : "Several Chinese companies listed on KOSPI in the 2000s → poor liquidity + accounting controversies → most eventually delisted",
    lesson: (ko: boolean) => ko
      ? "상장지는 주요 투자자 기반이 있는 곳이어야 한다. 코스피 중국 기업들은 한국 투자자들의 관심을 끌지 못했고, 정보 비대칭 문제가 겹치며 실패했다."
      : "Listing venues must be where your core investors are. Chinese companies on KOSPI failed to attract Korean investor interest, compounded by information asymmetry problems.",
  },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "ADR과 일반 주식 투자의 차이는 무엇인가요?"
      : "What's the difference between investing in ADRs versus regular shares?",
    a: (ko: boolean) => ko
      ? "ADR은 원주를 달러로 래핑한 것입니다. 투자자 입장에서는 달러로 거래·배당을 받을 수 있고 환전 불필요. 단, ADR 환율 리스크는 여전히 존재 (원화 주가가 같아도 원화가 약세면 달러 ADR 가격이 하락). 또한 ADR 보유자는 의결권이 제한되는 경우가 있습니다. 발행사 입장에서는 ADR이 미국 투자자 접근의 비용효율적 방법입니다."
      : "ADRs are the underlying shares wrapped in dollars. Investors can trade and receive dividends in USD without currency conversion. However, FX risk still exists — even if the Korean share price stays flat, a weakening KRW reduces the dollar ADR price. ADR holders may also have limited voting rights. For issuers, ADRs are a cost-efficient way to access US investors.",
  },
  {
    q: (ko: boolean) => ko
      ? "코스피와 NYSE에 이중상장하면 두 규제를 모두 따라야 하나요?"
      : "If a company dual-lists on KOSPI and NYSE, must it comply with both regulators?",
    a: (ko: boolean) => ko
      ? "네, 두 거래소의 규정과 공시 요건을 모두 충족해야 합니다. NYSE는 SEC 공시(20-F form for foreign issuers), 코스피는 금감원·한국거래소 규정. 실무적으로 양쪽 법무팀·회계팀이 필요하고 비용이 상당합니다. 이 때문에 대부분 기업은 하나의 주요 상장지를 선택하고 나머지는 ADR/GDR로 투자자 접근을 해결합니다."
      : "Yes, both exchanges' rules and disclosure requirements must be satisfied. NYSE requires SEC filings (Form 20-F for foreign private issuers); KOSPI requires FSS and KRX compliance. In practice, this requires legal and accounting teams for both jurisdictions at significant cost. That's why most companies choose one primary listing venue and use ADR/GDR for investor access in other markets.",
  },
  {
    q: (ko: boolean) => ko
      ? "'코리아 디스카운트'는 실제로 존재하나요?"
      : "Does the 'Korea Discount' really exist?",
    a: (ko: boolean) => ko
      ? "학술적으로 논쟁이 있지만, 실무에서는 광범위하게 받아들여집니다. 한국 상장사의 PBR은 미국·유럽 동종 기업 대비 지속적으로 낮습니다 (평균 1.0–1.2x vs 미국 2.5–3.0x). 원인으로는 ① 재벌 지배구조 불투명성 ② 낮은 주주환원율(배당+자사주) ③ 지정학 리스크(북한 인접) ④ 저성장 국내 소비 시장이 거론됩니다. 2024년 금융위원회의 '기업 밸류업 프로그램'이 이 문제를 공식 어젠다로 삼고 있습니다."
      : "Academically contested, but widely accepted in practice. Korean-listed companies consistently trade at lower PBR multiples than US/European peers (avg 1.0–1.2x vs US 2.5–3.0x). Attributed to: ① Chaebol governance opacity ② Low shareholder returns (dividends + buybacks) ③ Geopolitical risk (proximity to North Korea) ④ Low-growth domestic consumer market. The FSC's 2024 'Corporate Value-Up Program' has made this an official policy agenda.",
  },
  {
    q: (ko: boolean) => ko
      ? "해외 상장의 가장 큰 단점은 무엇인가요?"
      : "What are the biggest downsides of overseas listings?",
    a: (ko: boolean) => ko
      ? "① 비용: SEC 등록, 법무·회계팀 이중 운영, 두 거래소 상장 수수료. 연간 추가 비용 $5–20M 수준. ② 공시 부담: 미국 SEC는 한국 공시보다 훨씬 광범위한 정보 공개를 요구. CEO 보수, 소송 현황, 환경 리스크 등. ③ 주주 기반 불일치: 해외 투자자들은 국내 사업 이해도가 낮아 적정 밸류를 받기 어려울 수도 있음. ④ 시간대 차이: 뉴욕 장 중 IR 활동 위해 임원들이 한국 새벽에 깨야 하는 운영 부담."
      : "① Cost: SEC registration, dual legal/accounting teams, two exchange listing fees. Additional annual cost of $5–20M. ② Disclosure burden: US SEC requires far more extensive disclosure than Korean regulators — CEO pay, litigation status, environmental risks, etc. ③ Investor mismatch: overseas investors with limited understanding of domestic operations may not grant fair valuations. ④ Time zone: IR activities during New York trading hours require Korean executives to be available in the middle of the night.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-1 py-2 min-w-max">
          {ECM_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.slug === THIS_CH
                  ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              }`}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListingTypeCards({ ko }: { ko: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {LISTING_TYPES.map((lt, i) => {
        const name = typeof lt.name === "function" ? lt.name(ko) : lt.name;
        const fullName = typeof lt.fullName === "function" ? lt.fullName(ko) : lt.fullName;
        const desc = lt.desc(ko);
        const example = ko ? lt.exampleKo : lt.exampleEn;
        const extra =
          "complexity" in lt && lt.complexity
            ? (lt.complexity as (ko: boolean) => string)(ko)
            : "levels" in lt
            ? lt.levels
            : undefined;
        return (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.07)}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${lt.dot}`} />
              <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{fullName}</span>
            </div>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{desc}</p>
            {extra && (
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 mb-2">
                <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                  {ko ? "구조" : "Structure"}
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-300">{extra}</p>
              </div>
            )}
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2">
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                {ko ? "사례" : "Examples"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-300">{example}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function RegStructureCards({ ko }: { ko: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {REG_STRUCTURE.map((r, i) => {
        const label = typeof r.label === "function" ? r.label(ko) : r.label;
        return (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.07)}
            className={`rounded-xl border p-5 ${r.color}`}
          >
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${r.tagColor}`}>
              {label}
            </span>
            <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{r.desc(ko)}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ListingReasonCards({ ko }: { ko: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {LISTING_REASONS.map((r, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{r.icon}</span>
            <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{r.title(ko)}</span>
          </div>
          <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{r.detail(ko)}</p>
        </motion.div>
      ))}
    </div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <div className="space-y-8">
      {CASE_STUDIES.map((cs, i) => {
        const company = typeof cs.company === "function" ? cs.company(ko) : cs.company;
        return (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.08)}
            className={`rounded-2xl border p-6 ${cs.outcomeBg} ${cs.outcomeBorder}`}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cs.outcomeTag}`}>
                {cs.emoji} {cs.result(ko)}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-3">{company}</h3>

            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3 mb-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "핵심 수치" : "Key Figure"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-300">{cs.tagline(ko)}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                {ko ? "상장 교훈" : "Listing Lesson"}
              </p>
              <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{cs.lesson(ko)}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
interface Props { concept: MarketConcept; lang: Lang; }

export default function EcmInternationalListingClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";

  const prevCh = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const nextCh = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: ko ? concept.title : (concept.titleEn ?? concept.title),
        description: ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt),
        author: { "@type": "Organization", name: "Deal Story" },
        publisher: { "@type": "Organization", name: "Deal Story", url: "https://dealstory.kr" },
        datePublished: "2024-01-01",
        inLanguage: ko ? "ko" : "en",
        url: `https://dealstory.kr${base}/ecm-international-listing`,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q(ko),
          acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SeriesNav lang={lang} />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* ── Hero ── */}
        <section className="max-w-3xl mx-auto px-5 pt-12 pb-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp()} className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                {ko ? "ECM Ch.9 — 국제 상장" : "ECM Ch.9 — International Listings"}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">Ch.9</span>
              <div className="ml-auto flex items-center gap-1.5">
                <Link
                  href="/market-101/ecm-international-listing"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "text-gray-400 hover:text-gray-600"}`}
                >
                  한국어
                </Link>
                <Link
                  href="/en/market-101/ecm-international-listing"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "text-gray-400 hover:text-gray-600"}`}
                >
                  English
                </Link>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 leading-tight mb-3"
            >
              {ko
                ? "국제 상장 완전 해부: ADR·GDR·이중상장·해외 직상장"
                : "International Listings Decoded: ADR, GDR, Dual Listing & Overseas Direct Listing"}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5"
            >
              {ko
                ? "왜 쿠팡은 코스피 대신 NYSE를 선택했고, Arm은 런던이 아닌 Nasdaq을 골랐나? 국제 상장의 4가지 구조(ADR·GDR·이중상장·직상장)와 144A/Reg S 규제 틀을 해부하고, 코리아 디스카운트부터 M&A 통화까지 해외 상장의 전략적 이유를 케이스와 함께 살펴본다."
                : "Why did Coupang choose NYSE over KOSPI, and Arm pick Nasdaq over London? Dissect the four structures of international listings (ADR, GDR, dual listing, direct listing), the 144A/Reg S regulatory framework, and the strategic rationale — from the Korea Discount to M&A currency — illustrated with real cases."}
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-2">
              {(ko
                ? ["ADR", "GDR", "이중상장", "직상장", "144A", "Reg S", "코리아 디스카운트", "쿠팡", "Arm Holdings"]
                : ["ADR", "GDR", "Dual Listing", "Direct Listing", "144A", "Reg S", "Korea Discount", "Coupang", "Arm Holdings"]
              ).map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Share top */}
        <div className="max-w-3xl mx-auto px-5 mb-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        <div className="max-w-3xl mx-auto px-5 py-8 space-y-20">

          {/* ── Ch.1: 국제 상장이란 ── */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "국제 상장이란" : "What Is an International Listing?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "국제 상장(International Listing)은 기업이 본국 이외의 해외 거래소에서 주식 또는 주식과 연계된 증서를 거래 가능하게 만드는 모든 구조를 포괄합니다. 목적은 단순히 '외국에도 상장하는 것'이 아니라, 특정 투자자 기반에 접근하거나 밸류에이션을 높이거나 M&A 통화를 확보하는 전략적 선택입니다."
                  : "An international listing encompasses any structure enabling a company to have its shares — or share-linked certificates — traded on an exchange outside its home market. The goal is not simply 'listing abroad' but a strategic choice to access a specific investor base, achieve a higher valuation, or secure M&A currency."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "주요 구조는 네 가지입니다: ① 미국 투자자를 위한 ADR ② 복수 시장을 겨냥한 GDR ③ 두 거래소에 동시에 원주가 상장되는 이중상장 ④ 예탁증서 없이 해외 거래소에 원주를 직접 상장하는 해외 직상장. 각 구조는 비용·규제 부담·유동성 면에서 다른 트레이드오프를 갖습니다."
                  : "There are four primary structures: ① ADRs targeting US investors ② GDRs targeting multiple markets ③ dual listings where the same underlying shares trade on two exchanges simultaneously ④ overseas direct listings where underlying shares are listed directly on a foreign exchange without depositary receipts. Each structure carries different trade-offs in cost, regulatory burden, and liquidity."}
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl p-5 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800"
            >
              <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                {ko ? "💡 핵심 구분" : "💡 Key Distinction"}
              </p>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                {ko
                  ? "ADR·GDR은 예탁증서 — 원주가 본국에 남아 있고, 증서가 해외에서 거래됩니다. 이중상장·직상장은 원주 자체가 두 시장에서 거래됩니다. 투자자 입장에서는 비슷해 보이지만, 발행사의 법적·비용 부담은 크게 다릅니다."
                  : "ADRs and GDRs are depositary receipts — the underlying shares remain in the home market while the certificates trade abroad. Dual listings and direct listings involve the underlying shares themselves trading in two markets. From an investor's perspective these look similar, but the legal and cost burden on the issuer differs significantly."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.2: ADR·GDR 구조 ── */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "ADR·GDR 구조" : "ADR & GDR Structure"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "예탁증서(Depositary Receipt) 구조의 핵심은 예탁은행(Depositary Bank)입니다. BNY Mellon·Citibank·JPMorgan 같은 예탁은행이 본국에서 원주를 보유하고, 해외에서 투자자들이 거래할 수 있는 증서를 발행합니다. 발행사는 원주를 직접 해외에 상장하지 않아도 해외 투자자에게 접근할 수 있습니다."
                  : "The depositary bank is at the heart of the depositary receipt structure. A depositary bank — BNY Mellon, Citibank, JPMorgan — holds the underlying shares in the home market and issues certificates tradeable by overseas investors. The issuer gains access to foreign investors without directly listing its shares abroad."}
              </motion.p>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <ListingTypeCards ko={ko} />
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-8">
              <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-gray-400 dark:text-gray-500">
                {ko ? "144A / Reg S — GDR의 규제 프레임워크" : "144A / Reg S — Regulatory Framework for GDRs"}
              </p>
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
                <RegStructureCards ko={ko} />
              </motion.div>
            </motion.div>
          </motion.section>

          {/* ── Ch.3: 이중상장·직상장 ── */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "이중상장·직상장 — 원주가 두 시장에서 거래된다" : "Dual Listing & Direct Listing — Shares on Two Markets"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "이중상장과 해외 직상장은 예탁증서가 아닌 원주(underlying shares) 자체가 두 거래소에서 거래된다는 점에서 ADR/GDR과 근본적으로 다릅니다. 이론적으로는 두 시장 간 주가 차이(아비트라지)가 즉각 해소되어야 하지만, 실제로는 환율·거래 시간·투자자 유형 차이로 인해 단기 가격 차이가 발생합니다."
                  : "Dual listings and overseas direct listings differ fundamentally from ADR/GDR in that the underlying shares themselves — not depositary receipts — trade on two exchanges. In theory, any price difference (arbitrage) between the two markets should close immediately, but in practice short-term divergences occur due to FX rates, trading hours, and investor type differences."}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                variants={fadeUp(0)}
                className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 p-5"
              >
                <p className="text-sm font-bold text-blue-800 dark:text-blue-200 mb-3">
                  {ko ? "🔵 이중상장 (Dual Listing)" : "🔵 Dual Listing"}
                </p>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>▸ {ko ? "동일 주식이 두 거래소에서 동시 거래" : "Same shares traded simultaneously on two exchanges"}</li>
                  <li>▸ {ko ? "두 거래소 상장 기준·공시 요건 모두 충족 필요" : "Must satisfy listing standards of both exchanges"}</li>
                  <li>▸ {ko ? "아비트라지 자동 조정 — 가격 수렴 원칙" : "Arbitrage auto-corrects — price convergence principle"}</li>
                  <li>▸ {ko ? "예: Rio Tinto (런던·호주), BHP (런던·호주·뉴욕)" : "E.g. Rio Tinto (London/Australia), BHP (London/Australia/New York)"}</li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp(0.05)}
                className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20 p-5"
              >
                <p className="text-sm font-bold text-teal-800 dark:text-teal-200 mb-3">
                  {ko ? "🟢 해외 직상장 (Overseas Direct Listing)" : "🟢 Overseas Direct Listing"}
                </p>
                <ul className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
                  <li>▸ {ko ? "예탁증서 없이 원주를 해외 거래소에 직접 상장" : "List underlying shares directly on foreign exchange without depositary structure"}</li>
                  <li>▸ {ko ? "예탁은행 비용 없음 — 구조상 비용 절감" : "No depositary bank fees — structural cost saving"}</li>
                  <li>▸ {ko ? "가장 복잡한 구조 — 전체 현지 규제 준수 필요" : "Most complex — full local regulatory compliance required"}</li>
                  <li>▸ {ko ? "쿠팡 NYSE 2021이 대표 사례" : "Coupang NYSE 2021 is the prime example"}</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp(0.1)}
              className="mt-5 rounded-xl p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                {ko ? "⚠️ 이중상장의 아비트라지 리스크" : "⚠️ Arbitrage Risk in Dual Listings"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "두 시장 간 가격 차이가 발생하면 아비트라저(차익거래자)가 즉시 개입합니다. 그러나 환율 변동이 큰 시기에는 차익 조정이 지연되고, 이 과정에서 개인 투자자가 불리한 가격에 거래할 수 있습니다. 또한 두 거래소에서의 공매도가 동시에 발생하면 주가 변동성이 증폭될 수 있습니다."
                  : "When a price gap opens between two markets, arbitrageurs immediately intervene. However, during periods of significant FX volatility, the arbitrage correction can be delayed, leaving retail investors to transact at disadvantaged prices. Simultaneous short selling on both exchanges can also amplify price volatility."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.4: 왜 해외에 상장하나 ── */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "왜 해외에 상장하나" : "Why List Overseas?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "해외 상장 결정은 단순한 자금 조달 창구 확대가 아닙니다. 상장지(Listing Venue) 선택은 장기 밸류에이션·M&A 전략·브랜드 포지셔닝에 영향을 미치는 전략적 결정입니다. 아래 4가지가 실무에서 가장 자주 언급되는 이유입니다."
                  : "The overseas listing decision is not simply about widening capital-raising channels. The choice of listing venue is a strategic decision affecting long-term valuation, M&A strategy, and brand positioning. The four reasons below are most frequently cited in practice."}
              </motion.p>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <ListingReasonCards ko={ko} />
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 rounded-xl p-5 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800"
            >
              <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                {ko ? "💡 상장지 선택의 황금률" : "💡 The Golden Rule of Listing Venue Selection"}
              </p>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                {ko
                  ? "당신의 비즈니스를 가장 잘 이해하고 적절한 밸류에이션을 줄 수 있는 투자자가 있는 곳에 상장하라. Arm이 Nasdaq을 선택한 이유는 반도체 투자자들이 Nvidia·AMD·Qualcomm 스토리로 훈련되어 있기 때문이었다."
                  : "List where investors best understand your business and can grant appropriate valuation. Arm chose Nasdaq because semiconductor investors were trained on Nvidia, AMD, and Qualcomm stories — they needed no education on chip IP business models."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.5: 케이스 스터디 ── */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "케이스 스터디" : "Case Studies"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "같은 '해외 상장'이라도 어디에, 어떤 구조로 상장하느냐에 따라 결과가 극단적으로 갈립니다. 쿠팡과 Arm은 올바른 투자자 기반을 선택해 성공했고, 코스피에 상장한 중국 기업들은 투자자 부재로 실패했습니다."
                  : "Even within 'overseas listings,' outcomes diverge dramatically based on where and in what structure the listing is pursued. Coupang and Arm succeeded by selecting the right investor base; Chinese companies on KOSPI failed for lack of it."}
              </motion.p>
            </div>

            <CaseStudyCards ko={ko} />
          </motion.section>

          {/* Share mid */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
            </motion.div>
          </motion.section>

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mb-5" style={{ background: accent }} />
            <div className="space-y-3">
              {concept.keyTerms.map((term, i) => (
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
                      {ko ? term.term : term.termEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Related ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2
              variants={fadeUp()}
              className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
            >
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-overview",    ko: "ECM 개요",       en: "ECM Overview"    },
                { slug: "ecm-spac-direct", ko: "SPAC·직상장",    en: "SPAC & Direct"   },
                { slug: "ecm-ipo-process", ko: "IPO 프로세스",   en: "IPO Process"     },
              ].map((t) => (
                <Link
                  key={t.slug}
                  href={`${base}/${t.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  {ko ? t.ko : t.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Share bottom */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          
          <LikeButton slug={concept.slug} lang={lang} />{/* ── References ── */}
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
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline"
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

          {/* ── Prev / Next ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            {prevCh && (
              <Link
                href={`${base}/${prevCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
              >
                ← {prevCh.title(ko)}
              </Link>
            )}
            {nextCh && (
              <Link
                href={`${base}/${nextCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline ml-auto"
              >
                {nextCh.title(ko)} →
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
