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
const accent = "#f59e0b"; // amber

// ── Structured Series Nav ──────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "구조화금융 개요"   : "Overview"          },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"          : "Ch.1 ABS"          },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"          : "Ch.2 CLO"          },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"         : "Ch.3 CMBS"         },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴·트랑쉐" : "Ch.4 Waterfall"    },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·합성CDO"  : "Ch.5 CDO"          },
  { slug: "structured-cdo-2008",  title: (ko: boolean) => ko ? "2008 CDO 붕괴"     : "2008 CDO Collapse" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "케이스스터디"      : "Case Studies"      },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 트랜칭의 수학",   en: "Ch.1 The Tranching Math"     },
  { id: "ch2", ko: "Ch.2 신용평가사 실패", en: "Ch.2 Rating Agency Failure"  },
  { id: "ch3", ko: "Ch.3 붕괴 메커니즘",   en: "Ch.3 Collapse Mechanism"     },
];

// ── Tranching Layers ───────────────────────────────────────────────────────────
const TRANCHING_LAYERS = [
  {
    label: (ko: boolean) => ko ? "AAA 선순위 트랜치 (70–80%)" : "AAA Senior Tranche (70–80%)",
    rate:  (ko: boolean) => ko ? "낮은 쿠폰, 가장 안전"       : "Low coupon, safest",
    color: "bg-teal-500",
    bar:   80,
    order: 1,
  },
  {
    label: (ko: boolean) => ko ? "AA/A 메자닌 (10–15%)"  : "AA/A Mezzanine (10–15%)",
    rate:  (ko: boolean) => ko ? "중간 쿠폰, 중간 위험"   : "Mid coupon, mid risk",
    color: "bg-blue-500",
    bar:   55,
    order: 2,
  },
  {
    label: (ko: boolean) => ko ? "BBB 주니어 (5–10%)"  : "BBB Junior (5–10%)",
    rate:  (ko: boolean) => ko ? "높은 쿠폰, 높은 위험" : "High coupon, high risk",
    color: "bg-violet-500",
    bar:   35,
    order: 3,
  },
  {
    label: (ko: boolean) => ko ? "에쿼티 (잔여, 5%)"               : "Equity Tranche (Residual, 5%)",
    rate:  (ko: boolean) => ko ? "최고 위험 — 첫 손실 흡수"         : "Highest risk — absorbs first losses",
    color: "bg-red-500",
    bar:   15,
    order: 4,
  },
];

// ── Underlying Assets ──────────────────────────────────────────────────────────
const UNDERLYING_ASSETS = [
  { type: (ko: boolean) => ko ? "서브프라임 모기지" : "Subprime Mortgage", rating: "BBB-", risk: (ko: boolean) => ko ? "높음" : "High",     pct: "60%", color: "bg-red-400"    },
  { type: (ko: boolean) => ko ? "Alt-A 모기지"     : "Alt-A Mortgage",    rating: "BBB",  risk: (ko: boolean) => ko ? "중-높음" : "Med-High", pct: "25%", color: "bg-orange-400" },
  { type: (ko: boolean) => ko ? "HY 기업채"        : "HY Corporate",      rating: "BB",   risk: (ko: boolean) => ko ? "중간" : "Medium",     pct: "10%", color: "bg-amber-400"  },
  { type: (ko: boolean) => ko ? "기타 ABS"         : "Other ABS",         rating: "BBB",  risk: (ko: boolean) => ko ? "다양" : "Various",    pct: "5%",  color: "bg-yellow-400" },
];

// ── Crisis Timeline ────────────────────────────────────────────────────────────
const CRISIS_TIMELINE = [
  { date: "2006",    event: (ko: boolean) => ko ? "미국 주택 가격 정점 도달"                         : "US housing prices peak",                         icon: "🏠", color: "text-gray-500"  },
  { date: "2007.06", event: (ko: boolean) => ko ? "베어스턴스 헤지펀드 2개 붕괴"                    : "Two Bear Stearns hedge funds collapse",           icon: "💥", color: "text-orange-500"},
  { date: "2007.07", event: (ko: boolean) => ko ? "CDO 가격 발견 불가 인식 확산"                    : "Realization spreads: CDOs are unpriceable",       icon: "❓", color: "text-red-500"   },
  { date: "2008.03", event: (ko: boolean) => ko ? "베어스턴스 구제금융 (JP모건 인수)"               : "Bear Stearns bailout (acquired by JPMorgan)",     icon: "🆘", color: "text-red-600"   },
  { date: "2008.09", event: (ko: boolean) => ko ? "리먼 브라더스 파산"                              : "Lehman Brothers bankruptcy",                     icon: "🔴", color: "text-red-700"   },
  { date: "2008.10", event: (ko: boolean) => ko ? "미 정부 TARP $7,000억 구제 패키지"               : "US gov't $700B TARP bailout package",             icon: "🏛️", color: "text-blue-600"  },
];

// ── Case Studies ───────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug:       "structured-cdo-2008",
    emoji:      "🐻",
    tier:       (ko: boolean) => ko ? "헤지펀드 붕괴"   : "Hedge Fund Collapse",
    title:      (ko: boolean) => ko ? "베어스턴스 하이그레이드 펀드 (2007)"           : "Bear Stearns High-Grade Fund (2007)",
    tagline:    (ko: boolean) => ko ? "서브프라임 CDO에 레버리지 10:1로 투자 → 4개월 만에 $16억 전액 손실" : "10:1 leveraged subprime CDO bets → total $1.6B loss in 4 months",
    lesson:     (ko: boolean) => ko
      ? "CDO의 가격 불투명성이 핵심이었다. 담보자산 가치 하락 → CDO 가격 발견 불가 → 레버리지 강제 청산. 유동성이 없는 자산에 레버리지를 쌓는 것의 위험."
      : "Opacity was the core. Collateral value decline → CDO unpriceable → leveraged positions force-liquidated. The danger of stacking leverage on illiquid assets.",
    color:      "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    slug:       "structured-cdo-2008",
    emoji:      "🎰",
    tier:       (ko: boolean) => ko ? "숏 포지션 승리"   : "Short Position Win",
    title:      (ko: boolean) => ko ? "Michael Burry와 CDS 숏 전략 (2005–2007)"                             : "Michael Burry's CDS Short Strategy (2005–2007)",
    tagline:    (ko: boolean) => ko ? "서브프라임 CDO 붕괴를 예측하고 CDS(신용부도스와프)로 $7억 수익 — '빅쇼트'의 실제 이야기" : "Predicted subprime CDO collapse and made $700M via CDS — the real story behind 'The Big Short'",
    lesson:     (ko: boolean) => ko
      ? "모든 사람이 AAA를 믿을 때 기저 자산(개별 모기지)의 부도율을 직접 분석한 결과였다. 군중 심리 반대편에 설 수 있는 독립적 분석 능력."
      : "When everyone trusted the AAA ratings, this was the result of directly analyzing underlying asset (individual mortgage) default rates. The ability to stand analytically opposite the crowd.",
    color:      "border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/20",
    labelColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "CDO와 MBS는 어떻게 다른가요?" : "How does a CDO differ from an MBS?",
    a: (ko: boolean) => ko
      ? "MBS(모기지저당증권)는 주택담보대출만을 담보로 하는 단순 구조다. CDO는 MBS, 회사채, ABS 등 다양한 부채를 묶어서 트랜칭한 더 복잡한 구조다. 2008년 위기의 핵심은 서브프라임 모기지가 MBS로 변환되고, 그 MBS가 다시 CDO로 재포장되면서 위험이 점점 불투명해진 것이다."
      : "MBS (Mortgage-Backed Securities) are simply backed by residential mortgages. CDOs are more complex — they bundle MBS, corporate bonds, ABS, and other debts and tranche them. The core of 2008 was that subprime mortgages were packaged into MBS, and those MBS were repackaged into CDOs, making risk increasingly opaque.",
  },
  {
    q: (ko: boolean) => ko ? "신용평가사가 왜 CDO에 AAA를 줬나요?" : "Why did rating agencies give CDOs AAA ratings?",
    a: (ko: boolean) => ko
      ? "두 가지 이유입니다. 첫째, 수학적 오류 — 부도 상관관계를 지나치게 낮게 추정했습니다. 둘째, 이해충돌 — 평가 수수료를 CDO 발행사에게 받았기 때문에 발행을 가능하게 하는 등급을 줄 인센티브가 있었습니다."
      : "Two reasons. First, mathematical error — default correlations were drastically underestimated. Second, conflicts of interest — agencies collected rating fees from CDO issuers, creating incentives to assign ratings that enabled deals.",
  },
  {
    q: (ko: boolean) => ko ? "'mark-to-model'이 왜 위기를 악화시켰나요?" : "Why did 'mark-to-model' worsen the crisis?",
    a: (ko: boolean) => ko
      ? "CDO는 장외시장에서 거래됐고 시장 가격이 없었습니다. 은행들이 내부 모델로 가치를 평가했는데, 모델마다 가격이 달랐습니다. 어느 은행이 얼마나 손실인지 외부에서 알 수 없었고, 이것이 은행 간 불신을 낳아 인터뱅크 시장을 마비시켰습니다."
      : "CDOs traded OTC with no market prices. Banks valued them using internal models, but different models produced different prices. Outsiders couldn't tell how much any bank had lost, creating interbank distrust that paralyzed the lending market.",
  },
  {
    q: (ko: boolean) => ko ? "2008년 이후 CDO 시장은 어떻게 됐나요?" : "What happened to the CDO market after 2008?",
    a: (ko: boolean) => ko
      ? "위기 이후 규제가 대폭 강화됐습니다. 도드-프랭크법(Dodd-Frank Act, 2010)으로 CDO 투명성 요건과 발행사 위험 보유(Skin in the Game) 의무가 생겼습니다. 서브프라임 CDO 시장은 사실상 소멸됐고, CLO(대출담보부증권) 형태로 일부 구조화 시장이 살아남았습니다."
      : "Post-crisis regulation was dramatically strengthened. The Dodd-Frank Act (2010) created CDO transparency requirements and issuer risk retention (skin-in-the-game) obligations. The subprime CDO market effectively vanished; structured markets survived primarily in CLO (Collateralized Loan Obligation) form.",
  },
  {
    q: (ko: boolean) => ko ? "한국에도 CDO 같은 위험이 있나요?" : "Are there CDO-like risks in Korea?",
    a: (ko: boolean) => ko
      ? "한국의 구조화 금융 시장은 2008년 미국 서브프라임 CDO만큼 복잡하지는 않지만, 부동산 PF ABCP와 증권사 신용보강의 연결 구조가 유사한 취약성을 가집니다. 레고랜드 사태(2022)가 이 취약점을 드러낸 한국판 구조화 금융 위기라 볼 수 있습니다."
      : "Korea's structured finance market isn't as complex as the 2008 US subprime CDO ecosystem, but real estate PF ABCP and securities firm credit enhancement linkages carry similar vulnerabilities. The Legoland crisis (2022) can be seen as Korea's version of a structured finance crisis exposing these weaknesses.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "structured-overview",  ko: "구조화금융 개요 ↗", en: "Structured Finance Overview ↗" },
  { slug: "structured-cdo",       ko: "CDO 기초 ↗",        en: "CDO Basics ↗"                  },
  { slug: "structured-abs",       ko: "ABS 구조 ↗",        en: "ABS Structure ↗"               },
  { slug: "structured-waterfall", ko: "캐시플로우 워터폴 ↗", en: "Cash Flow Waterfall ↗"         },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function StructuredSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {STRUCTURED_SERIES.map((ch) => (
            <Link
              key={ch.slug}
              href={`${ko ? "" : "/en"}/market-101/${ch.slug}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
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
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function TranchingDiagram({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "CDO 트랜칭 구조 — BBB- 모기지가 AAA 채권으로" : "CDO Tranching Structure — BBB- Mortgages Become AAA Bonds"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {/* Underlying Assets */}
        <div className="mb-6">
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3">
            {ko ? "담보 자산 (기저)" : "Underlying Assets (Collateral)"}
          </p>
          <div className="grid grid-cols-4 gap-2">
            {UNDERLYING_ASSETS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                className={`rounded-lg p-3 ${a.color} bg-opacity-20 dark:bg-opacity-30 border border-gray-200/60 dark:border-gray-700/60`}
              >
                <p className="text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-1 leading-tight">{a.type(ko)}</p>
                <p className="text-[10px] font-black text-gray-900 dark:text-gray-100">{a.rating}</p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400">{a.pct} · {a.risk(ko)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <div className="text-center">
            <div className="text-lg mb-0.5">⬇</div>
            <p className="text-[9px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
              {ko ? "트랜칭 (Tranching)" : "Tranching"}
            </p>
          </div>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* CDO Tranches */}
        <div className="mb-2">
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3">
            {ko ? "CDO 트랜치 (산출물)" : "CDO Tranches (Output)"}
          </p>
          <div className="space-y-2">
            {TRANCHING_LAYERS.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="flex items-center gap-3"
              >
                <div className="w-24 flex-shrink-0">
                  <p className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-tight">{layer.label(ko)}</p>
                  <p className="text-[9px] text-gray-400 dark:text-gray-500">{layer.rate(ko)}</p>
                </div>
                <div className="flex-1 h-7 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                  <motion.div
                    className={`h-full rounded-md ${layer.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${layer.bar}%` }}
                    viewport={VP}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 w-8 text-right">{layer.bar}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-3 border-t border-amber-100 dark:border-amber-800">
        <p className="text-[12px] text-amber-700 dark:text-amber-300 text-center leading-relaxed">
          {ko
            ? "트랜칭의 마법: BBB- 서브프라임 모기지 수백 개를 묶으면 수학적으로 70–80%가 AAA가 된다. 이 수학이 2008년 붕괴의 씨앗이었다."
            : "The tranching magic: bundle hundreds of BBB- subprime mortgages and mathematically 70–80% becomes AAA. This math was the seed of the 2008 collapse."}
        </p>
      </div>
    </motion.div>
  );
}

function RatingAgencyFailureViz({ ko }: { ko: boolean }) {
  const failures = [
    {
      title: (ko: boolean) => ko ? "부도 상관관계 과소추정" : "Default Correlation Underestimated",
      desc:  (ko: boolean) => ko
        ? "가우시안 코플라 모델은 부도가 독립적이라 가정했다. 실제로는 경기침체 시 모든 서브프라임 모기지가 동시에 부도났다."
        : "Gaussian copula models assumed defaults were independent. In reality, all subprime mortgages defaulted simultaneously during the downturn.",
      icon:  "📊",
      color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    },
    {
      title: (ko: boolean) => ko ? "발행사 수수료 이해충돌" : "Issuer Fee Conflict of Interest",
      desc:  (ko: boolean) => ko
        ? "무디스와 S&P는 CDO 발행을 가능하게 하는 등급을 줄수록 더 많은 수수료를 받는 구조였다. 투자자 보호보다 발행사 이익이 우선됐다."
        : "Moody's and S&P earned more fees the more they enabled CDO issuance. Issuer profits were prioritized over investor protection.",
      icon:  "💰",
      color: "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
    },
    {
      title: (ko: boolean) => ko ? "역사적 데이터 부재" : "Lack of Historical Data",
      desc:  (ko: boolean) => ko
        ? "서브프라임 CDO는 2000년대 초에야 등장했다. 전국적 주택 가격 하락이 없던 시기의 데이터만 존재했다. 테일 리스크가 모델에 반영될 수 없었다."
        : "Subprime CDOs only emerged in the early 2000s. Only data from periods without nationwide housing price declines existed. Tail risk couldn't be modeled.",
      icon:  "📈",
      color: "border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/20",
    },
  ];

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {failures.map((f, i) => (
        <motion.div key={i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${f.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{f.icon}</span>
            <div>
              <h3 className="text-[14px] font-black text-gray-900 dark:text-gray-100 mb-2">{f.title(ko)}</h3>
              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc(ko)}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CrisisTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="space-y-0">
        {CRISIS_TIMELINE.map((item, i) => (
          <div key={i} className="flex gap-4 items-start relative">
            {i < CRISIS_TIMELINE.length - 1 && (
              <div className="absolute left-[52px] top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="flex-shrink-0 w-20 pt-2 text-right">
              <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{item.date}</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
              className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-base flex-shrink-0"
            >
              {item.icon}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.1, ease: EASE }}
              className="pb-6"
            >
              <p className={`text-[13px] font-semibold leading-relaxed ${item.color}`}>{item.event(ko)}</p>
            </motion.div>
          </div>
        ))}
      </div>
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
export default function Cdo2008Client({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("structured-cdo-2008");

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
                  ? "https://dealstory.io/market-101/structured-cdo-2008"
                  : "https://dealstory.io/en/market-101/structured-cdo-2008",
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
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "2008 CDO 붕괴" : "2008 CDO Collapse"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
              {ko ? "구조화금융 — 2008 위기 해부" : "Structured Finance — 2008 Crisis Anatomy"}
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
                href="/market-101/structured-cdo-2008"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/structured-cdo-2008"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
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

        <StructuredSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 트랜칭의 수학 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "트랜칭의 수학 — BBB-가 AAA가 되는 원리" : "The Tranching Math — How BBB- Becomes AAA"}
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
                      ? "CDO(부채담보부증권)는 2000년대 가장 정교하고 가장 위험한 금융 상품이었다. 트랜칭(Tranching)이라는 기술을 통해 낮은 등급의 자산들을 묶으면, 수학적으로 대부분이 AAA 등급을 받게 된다. 이것이 2008년 금융위기의 핵심 메커니즘이었다."
                      : "CDO (Collateralized Debt Obligation) was the most sophisticated and most dangerous financial instrument of the 2000s. Through a technique called tranching, bundling lower-rated assets together mathematically produces a majority of AAA-rated tranches. This was the core mechanism of the 2008 financial crisis.",
                    ko
                      ? "수백 개의 서브프라임 모기지를 하나의 풀에 넣으면, 통계적으로 일부만 부도날 것이라는 가정이 성립한다. 선순위 트랜치(70–80%)는 후순위가 모두 손실을 흡수한 뒤에야 손실을 입는다. 따라서 선순위는 AAA 등급을 받을 수 있다. 문제는 이 계산이 '부도들이 서로 독립적'이라는 가정 위에 서 있었다는 것이다."
                      : "When hundreds of subprime mortgages are pooled together, the statistical assumption holds that only some will default. The senior tranche (70–80%) only suffers losses after all junior tranches have absorbed theirs. Therefore, the senior can receive AAA ratings. The problem was that this calculation rested on the assumption that defaults are independent of each other.",
                    ko
                      ? "하지만 미국 전역에서 동시에 집값이 하락하자, 모든 모기지가 동시에 부도났다. 상관관계 가정이 무너지자 트랜칭의 마법도 무너졌다. AAA 트랜치조차 불과 6개월 만에 정크 등급으로 강등됐다."
                      : "But when housing prices declined simultaneously across the United States, all mortgages defaulted at once. As the correlation assumption collapsed, the tranching magic collapsed with it. Even AAA tranches were downgraded to junk within just six months.",
                  ].map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))
                }
              </div>
            </div>

            <TranchingDiagram ko={ko} />
          </motion.section>

          {/* Ch.2 신용평가사 실패 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "신용평가사 실패 — 이해충돌과 모델 오류" : "Rating Agency Failure — Conflicts and Model Errors"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "무디스, S&P, 피치는 CDO 트랜칭 과정에서 핵심 역할을 했다. 발행사가 어떻게 구성해야 AAA를 받을 수 있는지 조언했고, 그 조언대로 만든 CDO에 AAA를 줬다. 사실상 자신이 설계한 제품을 스스로 평가한 것이다."
                    : "Moody's, S&P, and Fitch played central roles in the CDO tranching process. They advised issuers on how to structure CDOs to receive AAA ratings, then gave AAA to CDOs built to their advice. They were effectively rating products they had designed themselves.",
                  ko
                    ? "세 가지 근본적 실패가 있었다. 첫째, 수학적 오류 — 가우시안 코플라 모델은 역사에 없던 상황(전국 주택 가격 동시 하락)을 상정하지 못했다. 둘째, 이해충돌 — CDO 발행사로부터 높은 수수료를 받는 구조였다. 셋째, 경쟁 압력 — 한 평가사가 낮은 등급을 주면 발행사가 다른 평가사로 갔다. '등급 쇼핑'이 일반화됐다."
                    : "Three fundamental failures existed. First, mathematical error — Gaussian copula models couldn't account for an unprecedented scenario: simultaneous nationwide housing price declines. Second, conflicts of interest — agencies earned high fees from CDO issuers. Third, competitive pressure — if one agency gave lower ratings, issuers went to competitors. 'Rating shopping' became standard.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <RatingAgencyFailureViz ko={ko} />

            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-amber-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"평가사들은 CDO를 발행하는 은행들로부터 돈을 받았다. 그 은행들은 더 높은 등급을 원했다. 평가사들이 더 낮은 등급을 주면, 은행은 다른 평가사로 갔다. 이게 전부였다.\""
                  : "\"The rating agencies were paid by the banks issuing CDOs. Those banks wanted higher ratings. If an agency gave lower ratings, the bank went elsewhere. That was the whole story.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— 미국 금융위기 조사위원회 (FCIC) 보고서, 2011" : "— US Financial Crisis Inquiry Commission (FCIC) Report, 2011"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Ch.3 붕괴 메커니즘 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "붕괴 메커니즘 — 2006–2008 크래시 타임라인" : "Collapse Mechanism — 2006–2008 Crash Timeline"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "붕괴는 단번에 오지 않았다. 2006년 주택 가격이 정점을 찍은 후 서서히 시작됐다. 먼저 서브프라임 차주들의 연체율이 오르고, 그 다음 CDO의 가격을 아무도 알 수 없게 됐다. 유동성이 없는 CDO에 레버리지를 얹었던 헤지펀드들이 차례로 무너졌다."
                    : "The collapse didn't arrive all at once. It began slowly after housing prices peaked in 2006. First, subprime borrower delinquency rates rose, then no one could price CDOs. Hedge funds that had leveraged illiquid CDOs fell one by one.",
                  ko
                    ? "결정적 전환점은 2007년 여름이었다. 베어스턴스의 두 헤지펀드가 불과 4개월 만에 $16억을 날렸다. 이때 시장은 CDO가 단순히 가격이 떨어진 것이 아니라, 아예 가격을 매길 수 없다는 사실을 인식했다. 가격 발견 불가(Price Discovery Failure)가 신뢰 붕괴를 불렀고, 결국 리먼 브라더스 파산까지 이어졌다."
                    : "The decisive turning point was summer 2007. Bear Stearns' two hedge funds lost $1.6 billion in just four months. The market then recognized that CDOs weren't just declining in price — they were completely unpriceable. Price discovery failure triggered confidence collapse, ultimately leading to Lehman Brothers' bankruptcy.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <CrisisTimeline ko={ko} />

            <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl border border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/20 p-5">
              <p className="text-[13px] font-bold text-amber-700 dark:text-amber-300 mb-2">
                {ko ? "케이스 스터디 — 베어스턴스와 빅쇼트" : "Case Studies — Bear Stearns and The Big Short"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {ko
                  ? "같은 위기 속에서 누구는 모든 것을 잃었고, 누구는 역대급 수익을 냈다. 두 케이스가 CDO 붕괴의 반대편 교훈을 보여준다."
                  : "In the same crisis, some lost everything while others made record profits. These two cases show opposite lessons from the CDO collapse."}
              </p>
              <CaseStudyCards ko={ko} />
            </motion.div>
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
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
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

          {/* SeriesNav */}
          <SeriesNav
            prev={nav.prev ? { href: `${ko ? "" : "/en"}/market-101/${nav.prev.slug}`, title: ko ? nav.prev.title : (nav.prev.titleEn ?? nav.prev.title) } : null}
            next={nav.next ? { href: `${ko ? "" : "/en"}/market-101/${nav.next.slug}`, title: ko ? nav.next.title : (nav.next.titleEn ?? nav.next.title) } : null}
            lang={lang}
            seriesTitle={ko ? "구조화금융 시리즈" : "Structured Finance Series"}
          />

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-amber-600 dark:text-amber-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/structured-cdo" : "/en/market-101/structured-cdo"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "← CDO 기초" : "← CDO Basics"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
