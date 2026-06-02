"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import SeriesNav from "@/components/SeriesNav";
import type { MarketConcept } from "@/data/market-101-concepts";
import { getMarket101Nav } from "@/data/market-101-concepts";
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
  { slug: "ecm-overview",              title: (ko: boolean) => ko ? "ECM 개요"        : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           title: (ko: boolean) => ko ? "Ch.1 발행사"     : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         title: (ko: boolean) => ko ? "Ch.2 투자자"     : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         title: (ko: boolean) => ko ? "Ch.3 밸류에이션" : "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           title: (ko: boolean) => ko ? "Ch.4 프로세스"   : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      title: (ko: boolean) => ko ? "Ch.5 북빌딩"     : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-firstday-pop",      title: (ko: boolean) => ko ? "첫날 팝"         : "First-Day Pop"   },
  { slug: "ecm-ipo-post",              title: (ko: boolean) => ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              title: (ko: boolean) => ko ? "Ch.7 팔로우온"   : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           title: (ko: boolean) => ko ? "Ch.8 전환사채"   : "Ch.8 Convertible"},
  { slug: "ecm-spac-direct",           title: (ko: boolean) => ko ? "Ch.10 SPAC"      : "Ch.10 SPAC"      },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 첫날 팝이란",    en: "Ch.1 What Is First-Day Pop" },
  { id: "ch2", ko: "Ch.2 배분의 정치학", en: "Ch.2 Allocation Politics"    },
  { id: "ch3", ko: "Ch.3 케이스 스터디", en: "Ch.3 Case Studies"           },
];

// ── IPO Pop Data ───────────────────────────────────────────────────────────────
const IPO_POP_DATA = [
  { company: "Airbnb",   year: "2020", pop: "+113%", bar: 100, lmott: (ko: boolean) => ko ? "$30억+"    : "$3B+",            color: "bg-red-500",    verdict: (ko: boolean) => ko ? "극단적 과소가격"       : "Extreme underpricing"                },
  { company: "DoorDash", year: "2020", pop: "+86%",  bar: 76,  lmott: (ko: boolean) => ko ? "$40억 추정" : "~$4B estimated",  color: "bg-orange-500", verdict: (ko: boolean) => ko ? "수요 대폭 과소추정"     : "Demand drastically underestimated"    },
  { company: "Rivian",   year: "2021", pop: "+29%",  bar: 26,  lmott: (ko: boolean) => ko ? "$1.9bn"    : "$1.9B",           color: "bg-amber-500",  verdict: (ko: boolean) => ko ? "과소가격"              : "Underpriced"                         },
  { company: "ARM",      year: "2023", pop: "+25%",  bar: 22,  lmott: (ko: boolean) => ko ? "적정 수준"  : "Acceptable",     color: "bg-blue-400",   verdict: (ko: boolean) => ko ? "교과서적 범위"          : "Textbook range"                      },
  { company: "Uber",     year: "2019", pop: "-7.6%", bar: 0,   lmott: (ko: boolean) => ko ? "없음"       : "None",           color: "bg-green-500",  verdict: (ko: boolean) => ko ? "정확한 가격 책정"       : "Accurate pricing"                    },
];

// ── Allocation Players ─────────────────────────────────────────────────────────
const ALLOCATION_PLAYERS = [
  {
    type: (ko: boolean) => ko ? "앵커 투자자"    : "Anchor Investors",
    desc: (ko: boolean) => ko ? "대규모 장기 보유 확약, 최우선 배분"              : "Large long-term commitment, highest priority allocation",
    pct:  "20–30%",
    icon: "⚓",
    color: "bg-blue-500 text-white",
  },
  {
    type: (ko: boolean) => ko ? "QIB (적격 기관)"           : "QIBs (Qualified Institutional)",
    desc: (ko: boolean) => ko ? "주요 기관 투자자, IB 관계에 따라 배분"          : "Major institutional investors, allocated by IB relationship",
    pct:  "50–60%",
    icon: "🏦",
    color: "bg-violet-500 text-white",
  },
  {
    type: (ko: boolean) => ko ? "리테일"    : "Retail",
    desc: (ko: boolean) => ko ? "일반 투자자, 소규모 균등 배분"                  : "Retail investors, small uniform allocations",
    pct:  "10–20%",
    icon: "👤",
    color: "bg-teal-500 text-white",
  },
  {
    type: (ko: boolean) => ko ? "플리퍼 (배분 최소화)"    : "Flippers (Minimize)",
    desc: (ko: boolean) => ko ? "첫날 매도 목적 투자자, 배분 최소화 대상"        : "Day-one sellers, intentionally minimized in allocation",
    pct:  "<5% 목표",
    icon: "🔄",
    color: "bg-red-400 text-white",
  },
];

// ── Case Studies ───────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug:       "ecm-ipo-firstday-pop",
    emoji:      "🚗",
    tier:       (ko: boolean) => ko ? "역대급 Leave Money"   : "All-time Money Left",
    title:      (ko: boolean) => ko ? "Rivian (2021) — $1.9bn을 테이블에 남긴 전기차 IPO"           : "Rivian (2021) — $1.9B Left on the Table",
    tagline:    (ko: boolean) => ko ? "공모가 $78, 첫날 종가 $120.21 (+54%). 전기차 붐 정점의 상장 — 뱅커들이 수요를 심각하게 과소평가" : "Offer price $78, Day 1 close $120.21 (+54%). Peak EV boom listing — bankers severely underestimated demand",
    lesson:     (ko: boolean) => ko
      ? "시장 붐 시기의 IPO는 수요 탄성이 매우 높다. 투자자 수요가 목표 오더북의 10배 이상 초과할 때 뱅커는 가격 상단을 훨씬 넘어 가격을 올릴 수 있는지 검토해야 한다."
      : "During market booms, IPO demand elasticity is very high. When investor demand exceeds the target order book by 10x or more, bankers should explore pricing well above the band ceiling.",
    color:      "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
    labelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    slug:       "ecm-ipo-firstday-pop",
    emoji:      "✈️",
    tier:       (ko: boolean) => ko ? "최대 Leave Money 사례"  : "Record Money Left",
    title:      (ko: boolean) => ko ? "Airbnb (2020) — 첫날 +113%, $30억+ 손실"                             : "Airbnb (2020) — Day 1 +113%, $3B+ Left",
    tagline:    (ko: boolean) => ko ? "COVID 피크에 상장 — 뱅커들이 부정적 수요 전망을 적용했다가 폭발적 수요에 역대급 과소가격 기록" : "Listed during COVID peak — bankers applied pessimistic demand assumptions, ending with record underpricing on explosive demand",
    lesson:     (ko: boolean) => ko
      ? "공모가 밴드 책정 이후 시장 환경이 급변하면 뱅커는 밴드 재조정 여부를 검토해야 한다. 10월에 책정한 밴드가 12월 상장에도 그대로라면 시장을 오판한 것이다."
      : "When market conditions change dramatically after setting the price band, bankers must consider whether to revise it. If the band set in October still applies unchanged to a December listing, the market has been misread.",
    color:      "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    slug:       "ecm-ipo-firstday-pop",
    emoji:      "🚖",
    tier:       (ko: boolean) => ko ? "정확한 가격 책정"    : "Accurate Pricing",
    title:      (ko: boolean) => ko ? "Uber (2019) — 첫날 -7.6%, '실망스러운 상장'"                      : "Uber (2019) — Day 1 -7.6%, 'Disappointing Debut'",
    tagline:    (ko: boolean) => ko ? "공모가 $45, 첫날 종가 $41.57. 발행사는 정당한 가격을 받았지만 언론은 실망스러운 상장이라 보도" : "Offer price $45, Day 1 close $41.57. Issuer received fair value but press reported a disappointing debut",
    lesson:     (ko: boolean) => ko
      ? "IPO 성공의 기준이 발행사(정당한 가격 수령)와 시장/언론(첫날 팝 기대)에서 다르다. 뱅커는 발행사에게 '첫날 소폭 마이너스가 오히려 정확한 가격 책정'임을 사전 교육해야 한다."
      : "IPO success metrics differ between issuer (receiving fair value) and media/market (first-day pop expectations). Bankers should educate issuers that a small first-day decline actually indicates accurate pricing.",
    color:      "border-green-200 dark:border-green-700 bg-green-50/60 dark:bg-green-900/20",
    labelColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "이상적인 첫날 팝은 몇 %인가요?" : "What is the ideal first-day pop percentage?",
    a: (ko: boolean) => ko
      ? "업계 공통된 기준은 10–20%입니다. 충분히 올라 투자자에게 수익을 주면서도, 지나치게 높지 않아 발행사가 정당한 가격을 받는 균형점입니다. 50%+는 뱅커가 수요를 심각하게 과소평가한 것이고, 마이너스는 수요를 과대평가한 것이지만 발행사 관점에서는 오히려 최적일 수 있습니다."
      : "The industry consensus target is 10–20%. Enough upside to give investors a return, but not so much that the issuer fails to receive fair value. 50%+ means bankers severely underestimated demand. Negative is demand overestimation but can actually be optimal from the issuer's perspective.",
  },
  {
    q: (ko: boolean) => ko ? "ECM 뱅커가 의도적으로 첫날 팝을 만들 수 있나요?" : "Can ECM bankers intentionally create first-day pops?",
    a: (ko: boolean) => ko
      ? "직접 조작은 불가능하지만, 배분 결정을 통해 영향을 미칠 수 있습니다. 장기 투자자에게 많이 배분하면 첫날 팝이 억제되고, 단기 투자자에게 많이 배분하면 매도 압력이 생겨 첫날 하락 위험이 있습니다. 뱅커는 이해충돌이 있기 때문에 규제당국이 배분 투명성을 요구합니다."
      : "Direct manipulation is impossible, but bankers influence outcomes through allocation decisions. Heavy allocation to long-term investors suppresses the pop; heavy allocation to short-term investors creates selling pressure and first-day decline risk. Because of conflicts of interest, regulators demand allocation transparency.",
  },
  {
    q: (ko: boolean) => ko ? "배분은 어떤 기준으로 결정되나요?" : "What criteria determine IPO allocations?",
    a: (ko: boolean) => ko
      ? "공식 기준은 ① 오더 규모, ② 투자자 품질(보유 기간 예상), ③ 발행사와의 관계입니다. 비공식적으로는 IB와의 전체 비즈니스 관계(브로커리지 수수료, 다음 딜 가능성)가 영향을 줍니다. 미국에서는 SEC Rule 101, 103이 배분 관련 규제를 제공합니다."
      : "Official criteria: ① order size, ② investor quality (expected holding period), ③ relationship with issuer. Informally, the broader IB business relationship (brokerage commissions, future deal potential) influences decisions. In the US, SEC Rules 101 and 103 govern allocation-related conduct.",
  },
  {
    q: (ko: boolean) => ko ? "공모가 밴드보다 높게 가격이 책정될 수 있나요?" : "Can IPO pricing exceed the stated price band?",
    a: (ko: boolean) => ko
      ? "네. 수요가 폭발적일 때 뱅커는 발행사와 협의해 밴드 상단을 초과하는 가격을 책정할 수 있습니다. LG에너지솔루션(2022)은 밴드 상단인 30만원에서 최종 공모가가 결정됐습니다. 미국에서는 밴드 상단을 20%까지 초과해 가격 책정이 가능합니다(SEC 규정)."
      : "Yes. When demand is explosive, bankers can price above the band ceiling in consultation with the issuer. LG Energy Solution (2022) priced at the band ceiling of ₩300,000. In the US, pricing up to 20% above the band ceiling is permissible under SEC rules.",
  },
  {
    q: (ko: boolean) => ko ? "그린슈 옵션은 첫날 팝과 어떤 관계인가요?" : "How does the Greenshoe option relate to the first-day pop?",
    a: (ko: boolean) => ko
      ? "그린슈는 양방향으로 작동합니다. 첫날 팝이 크면(주가 상승), 뱅커는 추가 주식을 시장에 팔아 공급을 늘리고 주가를 안정시킵니다. 반대로 주가가 공모가 아래로 떨어지면, 뱅커는 시장에서 주식을 매수해 주가를 지지합니다. 최대 공모 물량의 15%까지 행사 가능합니다."
      : "Greenshoe works in both directions. When the first-day pop is large (price rises), bankers sell additional shares to increase supply and stabilize price. Conversely, if price falls below offering price, bankers buy in the market to support it. Exercisable up to 15% of offering size.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-ipo-bookbuilding", ko: "북빌딩 ↗",       en: "Book-Building ↗"       },
  { slug: "ecm-ipo-valuation",    ko: "IPO 밸류에이션 ↗", en: "IPO Valuation ↗"      },
  { slug: "ecm-ipo-post",         ko: "포스트-IPO ↗",    en: "Post-IPO ↗"            },
  { slug: "ecm-ipo-allocation",   ko: "배분 전략 ↗",     en: "Allocation Strategy ↗" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function EcmSeriesNav({ lang }: { lang: Lang }) {
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

function IpoPopBarChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "유명 IPO 첫날 팝 — Leave Money on the Table" : "Famous IPO First-Day Pops — Leave Money on the Table"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        {IPO_POP_DATA.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
            className="flex items-center gap-3"
          >
            {/* Company + year */}
            <div className="w-24 flex-shrink-0">
              <p className="text-[12px] font-black text-gray-800 dark:text-gray-200">{item.company}</p>
              <p className="text-[9px] text-gray-400 dark:text-gray-500">{item.year}</p>
            </div>
            {/* Bar */}
            <div className="flex-1 h-8 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden relative">
              {item.bar > 0 ? (
                <motion.div
                  className={`h-full rounded-md ${item.color} flex items-center`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.bar}%` }}
                  viewport={VP}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                >
                  <span className="pl-2 text-[10px] font-bold text-white whitespace-nowrap">{item.pop}</span>
                </motion.div>
              ) : (
                <div className="h-full flex items-center pl-2">
                  <span className="text-[10px] font-bold text-green-600 dark:text-green-400">{item.pop}</span>
                </div>
              )}
            </div>
            {/* Verdict */}
            <div className="w-28 flex-shrink-0 text-right">
              <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{item.verdict(ko)}</p>
              <p className="text-[9px] font-semibold text-gray-500 dark:text-gray-400">{item.lmott(ko)}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "Airbnb의 +113% 첫날 팝은 발행사가 $30억+를 헐값에 판 것을 의미한다. 이상적인 범위는 10–20%. Uber의 -7.6%는 오히려 가장 정확한 가격 책정이었다."
            : "Airbnb's +113% Day 1 pop means the issuer sold $3B+ at below-fair-value. The ideal range is 10–20%. Uber's -7.6% was actually the most accurate pricing."}
        </p>
      </div>
    </motion.div>
  );
}

function AllocationPlayersViz({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <p className="text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-4">
        {ko ? "IPO 배분 구조 — 누가 얼마나 받는가" : "IPO Allocation Structure — Who Gets How Much"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ALLOCATION_PLAYERS.map((player, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
            className="rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
          >
            <div className={`px-4 py-2 flex items-center gap-2 ${player.color}`}>
              <span className="text-lg">{player.icon}</span>
              <span className="text-[12px] font-black">{player.type(ko)}</span>
              <span className="ml-auto text-[11px] font-bold opacity-90">{player.pct}</span>
            </div>
            <div className="px-4 py-3 bg-white dark:bg-gray-900">
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{player.desc(ko)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leave Money on the Table formula */}
      <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-xl border border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20 p-5">
        <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
          {ko ? "Leave Money on the Table 공식" : "Leave Money on the Table Formula"}
        </p>
        <div className="text-center py-3">
          <p className="text-[14px] font-mono font-bold text-gray-800 dark:text-gray-200">
            LMOTT = (첫날 종가 − 공모가) × 발행 주식 수
          </p>
          {!ko && (
            <p className="text-[14px] font-mono font-bold text-gray-800 dark:text-gray-200 mt-1">
              LMOTT = (Day 1 Close − Offer Price) × Shares Issued
            </p>
          )}
        </div>
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "이 금액은 발행사 금고로 들어왔어야 했던 돈이다. 배분 전략은 첫날 팝의 크기에 직접 영향을 미친다."
            : "This amount should have gone into the issuer's treasury. Allocation strategy directly influences first-day pop magnitude."}
        </p>
      </motion.div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div key={`${cs.slug}-${i}`} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.tier(ko)}
                </span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">{cs.title(ko)}</h3>
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

// ── Main Export ────────────────────────────────────────────────────────────────
export default function IpoFirstdayPopClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("ecm-ipo-firstday-pop");

  const bodyParas: string[] = concept.sections?.length
    ? (ko ? concept.sections[0].body : (concept.sections[0].bodyEn ?? concept.sections[0].body)).split("\n\n")
    : [];

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
                  ? "https://dealstory.io/market-101/ecm-ipo-firstday-pop"
                  : "https://dealstory.io/en/market-101/ecm-ipo-firstday-pop",
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
              <span className="text-gray-600 dark:text-gray-300">{ko ? "IPO 첫날 팝" : "IPO First-Day Pop"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM — IPO 가격 책정 심화" : "ECM — IPO Pricing Deep Dive"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
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
                href="/market-101/ecm-ipo-firstday-pop"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-ipo-firstday-pop"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
          <LikeButton slug={concept.slug} lang={lang} />
        </div>

        <EcmSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 첫날 팝이란 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "첫날 팝이란 — 발행사의 숨겨진 손실" : "What Is First-Day Pop — The Issuer's Hidden Loss"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {bodyParas.length > 0
                  ? bodyParas.map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))
                  : [
                    ko
                      ? "IPO 첫날 주가가 크게 오르면 언론은 '대성공'이라 보도한다. 투자자들은 환호한다. 그런데 이 순간 조용히 손해 보는 사람이 있다 — 바로 발행사(Issuer)다."
                      : "When an IPO's first-day price surges, the press declares it a 'massive success.' Investors cheer. But there's someone quietly losing money at that exact moment — the issuer.",
                    ko
                      ? "첫날 팝(First-Day Pop)이란 IPO 공모가 대비 상장 당일 종가의 상승률이다. Airbnb의 2020년 IPO에서 첫날 팝은 +113%였다. 공모가 $68에서 첫날 종가 $144.71. 이 차이가 $30억+다. 그 돈은 Airbnb 금고로 들어왔어야 했지만, 첫날 시장에서 거래된 투자자들의 이익이 됐다."
                      : "First-day pop is the percentage gain from IPO offer price to the Day 1 closing price. In Airbnb's 2020 IPO, the first-day pop was +113%. Offer price $68, Day 1 close $144.71. That gap is $3B+. That money should have entered Airbnb's treasury but instead became profits for investors trading on Day 1.",
                    ko
                      ? "이것이 'Leave Money on the Table(LMOTT)'이다. 뱅커가 공모가를 너무 낮게 책정한 것이다. 투자자는 이익을 봤지만, 발행사는 본래 받아야 했던 자본의 일부를 포기한 것이다. 이상적인 첫날 팝은 10–20% 범위다 — 충분히 올라 투자자에게 수익을 주면서도 발행사가 정당한 가격을 받는 균형점."
                      : "This is 'Leave Money on the Table (LMOTT).' Bankers set the offer price too low. Investors profited, but the issuer forfeited part of the capital they should have received. The ideal first-day pop is 10–20% — enough to give investors a return while ensuring the issuer receives fair value.",
                  ].map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))
                }
              </div>
            </div>

            <IpoPopBarChart ko={ko} />
          </motion.section>

          {/* Ch.2 배분의 정치학 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "배분의 정치학 — 누가 IPO 주식을 받는가" : "Allocation Politics — Who Gets IPO Shares"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "공모가 다음으로 중요한 결정이 배분(Allocation)이다. 오버부킹(Overbook)된 IPO에서 누가 얼마나 주식을 받느냐가 첫날 팝의 크기를 결정한다. 배분은 기술과 관계의 게임이다."
                    : "The second most important decision after pricing is allocation. In an overbooked IPO, who receives how many shares determines the magnitude of the first-day pop. Allocation is a game of skill and relationships.",
                  ko
                    ? "뱅커는 두 가지 목표를 동시에 달성해야 한다. 첫째, 장기 보유 의사가 있는 '좋은 투자자'에게 충분히 배분해 상장 후 주가 안정을 도모한다. 둘째, 단기 매도자(플리퍼)를 최소화해 첫날 매도 압력을 줄인다. 배분을 잘하면 이상적인 10–20% 첫날 팝을 만들 수 있고, 잘못하면 Airbnb처럼 역대급 LMOTT가 나온다."
                    : "Bankers must simultaneously achieve two goals. First, allocate sufficiently to 'good investors' with long-term holding intent to support post-listing price stability. Second, minimize day-one sellers (flippers) to reduce first-day selling pressure. Correct allocation produces the ideal 10–20% pop; poor allocation produces Airbnb-level record LMOTT.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AllocationPlayersViz ko={ko} />

            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-blue-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"배분은 뱅커의 관계 자산이 가장 직접적으로 드러나는 순간이다. 누구에게 얼마를 주느냐는 단순히 오더 규모가 아니라, 앞으로 10년 동안의 비즈니스 관계를 반영한다.\""
                  : "\"Allocation is the moment where a banker's relational capital is most directly revealed. How much you give to whom reflects not just order size, but the business relationship for the next 10 years.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM 신디케이트 VP, 글로벌 IB, 2023" : "— ECM Syndicate VP, Global IB, 2023"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Ch.3 케이스 스터디 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "케이스 스터디 — 과소가격, 역대급 손실, 그리고 완벽한 가격" : "Case Studies — Underpriced, Record Loss, Perfect Price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "세 케이스가 각각 다른 교훈을 담고 있다 — 수요 과소추정, 시장 환경 변화 미반영, 그리고 언론의 기준과 발행사의 기준이 왜 다른가."
                : "Three cases, three different lessons — underestimating demand, failing to reflect changing market conditions, and why press metrics and issuer metrics diverge."}
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

          {/* Key Terms */}
          {concept.keyTerms && concept.keyTerms.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "핵심 용어" : "Key Terms"}
              </motion.h2>
              <motion.div variants={fadeUp(0.05)} className="space-y-3">
                {concept.keyTerms.map((term) => (
                  <div key={typeof term === "string" ? term : term.term} className="flex gap-3 text-[13px]">
                    <span className="font-bold text-gray-700 dark:text-gray-300 flex-shrink-0">
                      {typeof term === "string" ? term : term.term}
                    </span>
                    {typeof term !== "string" && term.definition && (
                      <span className="text-gray-500 dark:text-gray-400 leading-relaxed">{term.definition}</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.section>
          )}

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
                  {ko ? term.ko : term.en}
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          <LikeButton slug={concept.slug} lang={lang} />

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

          {/* SeriesNav */}
          <SeriesNav
            prev={nav.prev ? { href: `${ko ? "" : "/en"}/market-101/${nav.prev.slug}`, title: ko ? nav.prev.title : (nav.prev.titleEn ?? nav.prev.title) } : null}
            next={nav.next ? { href: `${ko ? "" : "/en"}/market-101/${nav.next.slug}`, title: ko ? nav.next.title : (nav.next.titleEn ?? nav.next.title) } : null}
            lang={lang}
            seriesTitle={ko ? "ECM 시리즈" : "ECM Series"}
          />

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/ecm-ipo-bookbuilding" : "/en/market-101/ecm-ipo-bookbuilding"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "← Ch.5 북빌딩" : "← Ch.5 Book-Building"}
            </Link>
            <Link href={ko ? "/market-101/ecm-ipo-post" : "/en/market-101/ecm-ipo-post"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "Ch.6 포스트-IPO →" : "Ch.6 Post-IPO →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
