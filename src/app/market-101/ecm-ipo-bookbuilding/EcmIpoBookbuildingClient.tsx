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
  { slug: "ecm-overview",            ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"          : "ECM Overview"      },
  { slug: "ecm-ipo-issuers",         ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"      },
  { slug: "ecm-ipo-investors",       ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"    },
  { slug: "ecm-ipo-valuation",       ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"    : "Ch.3 Valuation"    },
  { slug: "ecm-ipo-process",         ch: 4,  title: (ko: boolean) => ko ? "Ch.4 IPO 프로세스"  : "Ch.4 IPO Process"  },
  { slug: "ecm-ipo-bookbuilding",    ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"        : "Ch.5 Book-Building"},
  { slug: "ecm-ipo-post",            ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"    : "Ch.6 Post-IPO"     },
  { slug: "ecm-followon",            ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"      : "Ch.7 Follow-on"    },
  { slug: "ecm-convertible",         ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"      : "Ch.8 Convertible"  },
  { slug: "ecm-international-listing", ch: 9, title: (ko: boolean) => ko ? "Ch.9 국제상장"     : "Ch.9 Intl Listing" },
  { slug: "ecm-spac-direct",         ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장"  : "Ch.10 SPAC·Direct" },
];

const thisCh = 5;

// ── Demand Curve Data ──────────────────────────────────────────────────────────
// 세로: 가격 (높은 가격 = 수요 적음), 가로: 누적 주문량
const DEMAND_CURVE = [
  { price: "$38", demandM: 5,   pct: 10,  label: (ko: boolean) => ko ? "Strike 오더 (가격무관)" : "Strike Orders (any price)" },
  { price: "$36", demandM: 15,  pct: 30,  label: (ko: boolean) => ko ? "강한 수요"               : "Strong Demand"             },
  { price: "$34", demandM: 30,  pct: 60,  label: (ko: boolean) => ko ? "공모 밴드 상단"           : "Band Top"                  },
  { price: "$32", demandM: 50,  pct: 100, label: (ko: boolean) => ko ? "← 공모가 (밴드 중단)"    : "← IPO Price (Mid-band)"    },
  { price: "$30", demandM: 65,  pct: 130, label: (ko: boolean) => ko ? "공모 밴드 하단"           : "Band Bottom"               },
  { price: "$28", demandM: 80,  pct: 160, label: (ko: boolean) => ko ? "가격 민감 수요"           : "Price-sensitive Demand"    },
  { price: "$25", demandM: 100, pct: 200, label: (ko: boolean) => ko ? "저가 오더"                : "Low-price Orders"          },
];
// 공모가: $32 (밴드 중단), 발행 주식: 50M주 → 2배 초과청약

// ── Greenshoe Steps ────────────────────────────────────────────────────────────
const GREENSHOE_STEPS = [
  {
    step: "① 과배정",
    phase: (ko: boolean) => ko ? "IPO 당일" : "IPO Day",
    action: (ko: boolean) => ko
      ? "발행사가 언더라이터에게 기본 공모 물량의 15%를 추가로 발행할 수 있는 옵션 부여. 언더라이터는 공모가에 115% 물량을 투자자에게 배분."
      : "Issuer grants underwriter an option to issue 15% additional shares. Underwriter allocates 115% of base shares to investors at the IPO price.",
    result: (ko: boolean) => ko ? "언더라이터: 15% 과배정 포지션 → 공매도 포지션" : "Underwriter: 15% over-allotment = short position",
    icon: "📤",
    color: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700",
  },
  {
    step: "② 안정화 기간 (30일)",
    phase: (ko: boolean) => ko ? "상장 후 최대 30일" : "Up to 30 days post-listing",
    action: (ko: boolean) => ko
      ? "주가 > 공모가: 그린슈 옵션 행사 → 발행사에서 추가 주식 취득 → 시장에 공급 (수익 실현 + 공매도 청산). 주가 < 공모가: 시장에서 주식 매입 → 가격 지지 (안정화 기능)."
      : "If price > IPO: exercise greenshoe → acquire additional shares from issuer → deliver to market (profit + cover short). If price < IPO: buy shares in market → price support (stabilization function).",
    result: (ko: boolean) => ko ? "주가 안정화 + 언더라이터 포지션 청산" : "Price stabilization + underwriter position closed",
    icon: "⚖️",
    color: "bg-violet-50 border-violet-200 dark:bg-violet-900/20 dark:border-violet-700",
  },
  {
    step: "③ 최종 결과",
    phase: (ko: boolean) => ko ? "안정화 종료" : "End of stabilization",
    action: (ko: boolean) => ko
      ? "주가 상승 시: 옵션 행사 → 발행사 추가 자본 조달 (공모 규모 최대 15% 증가). 주가 하락 시: 시장 매입으로 과배정 청산 → 발행사 추가 주식 발행 없음, 언더라이터 소액 손실."
      : "Rising price: option exercised → issuer raises additional capital (up to 15% more). Falling price: market purchases cover the short → no additional shares issued, minor underwriter loss.",
    result: (ko: boolean) => ko ? "발행사·투자자·언더라이터 모두 리스크 완충" : "Risk buffer for issuer, investors, and underwriter",
    icon: "✅",
    color: "bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-700",
  },
];

// ── Korean IPO Lock-up Mechanism ───────────────────────────────────────────────
const KR_LOCKUP = [
  {
    period: (ko: boolean) => ko ? "6개월 의무보유" : "6-month lock-up",
    upweightPct: "+100%",
    desc: (ko: boolean) => ko ? "공모가 기준 추가 배분 100% → 2배 배분" : "2x allocation vs base",
    bar: 100,
    color: "bg-blue-500",
  },
  {
    period: (ko: boolean) => ko ? "3개월 의무보유" : "3-month lock-up",
    upweightPct: "+50%",
    desc: (ko: boolean) => ko ? "공모가 기준 추가 배분 50% → 1.5배" : "1.5x allocation",
    bar: 50,
    color: "bg-blue-400",
  },
  {
    period: (ko: boolean) => ko ? "1개월 의무보유" : "1-month lock-up",
    upweightPct: "+20%",
    desc: (ko: boolean) => ko ? "소폭 배분 우대" : "Modest allocation upweight",
    bar: 20,
    color: "bg-blue-300",
  },
  {
    period: (ko: boolean) => ko ? "확약 없음" : "No commitment",
    upweightPct: "기준",
    desc: (ko: boolean) => ko ? "기본 비례 배분" : "Base proportional allocation",
    bar: 0,
    color: "bg-gray-300",
  },
];

// ── IPO Pop Analysis ───────────────────────────────────────────────────────────
const POP_ANALYSIS = [
  {
    range: (ko: boolean) => ko ? "첫날 -10% 이하" : "Day 1 < -10%",
    verdict: (ko: boolean) => ko ? "실패" : "Failed",
    verdictColor: "text-red-600 dark:text-red-400",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    barColor: "bg-red-400",
    barW: 5,
    desc: (ko: boolean) => ko ? "시장에 공식 '실패한 IPO' 기록. 이후 FO 어려움." : "Officially recorded as failed. Follow-on becomes difficult.",
    examples: "Lyft 2019, Uber 2019 첫날",
  },
  {
    range: (ko: boolean) => ko ? "첫날 0–10%" : "Day 1 0–10%",
    verdict: (ko: boolean) => ko ? "양호" : "Fair",
    verdictColor: "text-blue-600 dark:text-blue-400",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    barColor: "bg-blue-400",
    barW: 30,
    desc: (ko: boolean) => ko ? "가격이 제대로 설정됨. 발행사 입장에서 최적." : "Properly priced. Optimal for issuer.",
    examples: "NVIDIA 1999, Google 2004",
  },
  {
    range: (ko: boolean) => ko ? "첫날 10–25%" : "Day 1 10–25%",
    verdict: (ko: boolean) => ko ? "이상적" : "Ideal",
    verdictColor: "text-teal-600 dark:text-teal-400",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    barColor: "bg-teal-400",
    barW: 60,
    desc: (ko: boolean) => ko ? "투자자 만족 + 발행사 약간의 Leave Money. 밸런스." : "Investor satisfaction + modest leave-money. Balanced.",
    examples: "평균 IPO (historical avg ~18%)",
  },
  {
    range: (ko: boolean) => ko ? "첫날 30%+" : "Day 1 30%+",
    verdict: (ko: boolean) => ko ? "발행사 손해" : "Issuer Loss",
    verdictColor: "text-orange-600 dark:text-orange-400",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    barColor: "bg-orange-400",
    barW: 90,
    desc: (ko: boolean) => ko ? "발행사가 헐값에 판 것. 투자자 단기 이익 = 발행사 장기 손해." : "Issuer sold too cheap. Investor short-term gain = issuer long-term loss.",
    examples: "Rivian +121%, Snap +44%→이후 폭락",
  },
];

// ── Order Types ────────────────────────────────────────────────────────────────
const ORDER_TYPES = [
  {
    name: (ko: boolean) => ko ? "Strike 오더" : "Strike Order",
    badge: (ko: boolean) => ko ? "가격무관" : "Any price",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    desc: (ko: boolean) => ko
      ? "가격에 무관하게 공모가에 무조건 참여하겠다는 오더. 주관사에게 가장 가치 있는 신호 — 수요의 질이 높다는 의미."
      : "An unconditional order at whatever the IPO price turns out to be. Most valuable signal to the bookrunner — indicates high-quality demand.",
    who: (ko: boolean) => ko ? "장기 기관 (LS, 연기금)" : "Long-only institutions, Pensions",
    icon: "⭐",
  },
  {
    name: (ko: boolean) => ko ? "Limit 오더" : "Limit Order",
    badge: (ko: boolean) => ko ? "상한가 지정" : "Price cap",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    desc: (ko: boolean) => ko
      ? "특정 가격 이하에서만 참여하겠다는 오더. 예: '$34 이하면 200만주.' 공모가가 상단을 상회하면 오더 자동 취소."
      : "Order conditional on pricing below a specified level. E.g. '2M shares if priced ≤ $34.' Auto-cancelled if IPO prices above the limit.",
    who: (ko: boolean) => ko ? "가격 민감 기관, 헤지펀드" : "Price-sensitive institutions, hedge funds",
    icon: "📊",
  },
  {
    name: (ko: boolean) => ko ? "Step-down 오더" : "Step-down Order",
    badge: (ko: boolean) => ko ? "가격별 물량 조정" : "Volume scales with price",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    desc: (ko: boolean) => ko
      ? "가격이 높아질수록 주문 수량이 줄어드는 구조. 예: '$30→200만주, $32→150만주, $34→100만주.' 수요 곡선을 자연스럽게 형성."
      : "Volume decreases as price increases. E.g. '$30→2M shares, $32→1.5M, $34→1M.' Naturally shapes the demand curve.",
    who: (ko: boolean) => ko ? "대형 자산운용사" : "Large asset managers",
    icon: "📉",
  },
  {
    name: (ko: boolean) => ko ? "Conditional 오더" : "Conditional Order",
    badge: (ko: boolean) => ko ? "조건부" : "Conditional",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    desc: (ko: boolean) => ko
      ? "특정 조건 충족 시에만 유효한 오더. 예: '총 오더북이 3배 초과청약 되면 참여.' 수요 압박 지표로도 활용."
      : "Valid only if specific conditions are met. E.g. 'Participate only if total book exceeds 3x coverage.' Also used as demand pressure signal.",
    who: (ko: boolean) => ko ? "기회주의적 투자자, 일부 HF" : "Opportunistic investors, some HFs",
    icon: "⚡",
  },
];

// ── Chapter Nav ────────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 DCM과의 차이",    en: "Ch.1 vs DCM"         },
  { id: "ch2", ko: "Ch.2 수요 곡선",       en: "Ch.2 Demand Curve"   },
  { id: "ch3", ko: "Ch.3 오더 유형",       en: "Ch.3 Order Types"    },
  { id: "ch4", ko: "Ch.4 그린슈",          en: "Ch.4 Greenshoe"      },
  { id: "ch5", ko: "Ch.5 한국 특화",       en: "Ch.5 Korea-specific" },
  { id: "ch6", ko: "Ch.6 IPO 팝 분석",     en: "Ch.6 IPO Pop"        },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "북빌딩 기간은 보통 얼마나 걸리나요?"
      : "How long does the bookbuilding period typically last?",
    a: (ko: boolean) => ko
      ? "글로벌 IPO의 경우 로드쇼 포함 1–2주가 일반적입니다. 한국의 경우 기관 수요 예측(수요 예측)이 3일, 일반 청약이 2일입니다. 미국은 SEC 검토 기간과 공개 로드쇼를 포함해 2–3주가 소요됩니다. 시장 상황이 좋으면 단축하고, 나쁘면 연장하거나 가격 밴드를 낮춥니다."
      : "For global IPOs, 1–2 weeks including the roadshow is typical. In Korea, institutional demand forecasting takes 3 days followed by a 2-day retail subscription period. In the US, 2–3 weeks including SEC review and public roadshow is standard. When market conditions are favorable, the timeline may be compressed; when conditions deteriorate, the issuer may extend the period or revise the price band downward.",
  },
  {
    q: (ko: boolean) => ko
      ? "공모 밴드는 어떻게 결정되나요?"
      : "How is the IPO price band determined?",
    a: (ko: boolean) => ko
      ? "주관사(언더라이터)와 발행사가 사전 밸류에이션 분석(Comparable Company, DCF, Precedent Transaction)을 종합해 협의로 결정합니다. 밴드 범위는 통상 10–15% 폭입니다. 공모가는 밴드 안에서 결정되며, 수요가 매우 강하면 밴드 상단에 확정합니다. 한국에서는 수요 예측 결과에 따라 밴드 외부에서도 확정 가능합니다."
      : "The underwriter and issuer jointly determine the band based on pre-deal valuation analysis — Comparable Companies, DCF, and Precedent Transactions. Bands are typically 10–15% wide. The final IPO price is set within the band, or at the top if demand is very strong. In Korea, the final price can be set outside the band depending on the results of the institutional demand forecast.",
  },
  {
    q: (ko: boolean) => ko
      ? "오더북이 10배 초과청약이면 무조건 공모가 상단인가요?"
      : "Does a 10x oversubscribed order book always mean pricing at the top of the band?",
    a: (ko: boolean) => ko
      ? "꼭 그렇지 않습니다. 오더북 규모보다 오더의 질(quality)이 중요합니다. Strike 오더(가격무관 오더)의 비중, 의무보유 확약 비율, 장기 투자자 비중 등을 종합적으로 고려합니다. 10배 초과청약이어도 대부분이 가격 민감한 Limit 오더라면 주관사는 밴드 중단 또는 하단을 선택할 수 있습니다."
      : "Not necessarily. The quality of orders matters more than sheer volume. The proportion of Strike orders (price-insensitive), lock-up commitment rates, and the share of long-term institutional investors are all considered. Even with 10x oversubscription, if most orders are price-sensitive Limit orders, the bookrunner may choose to price at the mid or low end of the band.",
  },
  {
    q: (ko: boolean) => ko
      ? "그린슈 옵션이 발행사에게 유리한가요, 불리한가요?"
      : "Is the greenshoe option favorable or unfavorable for the issuer?",
    a: (ko: boolean) => ko
      ? "발행사 입장에서는 조건부로 유리합니다. 주가가 상승하면 그린슈 행사로 추가 자본(최대 15% 증가)을 조달할 수 있습니다. 주가가 하락해도 발행사는 추가 주식을 발행하지 않아도 됩니다 — 언더라이터가 시장 매입으로 과배정을 청산하기 때문입니다. 즉, 주가 상승 시에는 자본 조달 증가, 하락 시에는 발행사 리스크 없음의 비대칭 구조입니다."
      : "For the issuer, it is conditionally advantageous. If the stock rises, the greenshoe exercise raises additional capital (up to 15% more). If the stock falls, the issuer does not need to issue additional shares — the underwriter covers the short position through open-market purchases. This creates an asymmetric structure: upside means more capital raised, downside means no incremental risk to the issuer.",
  },
  {
    q: (ko: boolean) => ko
      ? "개인 투자자(리테일)가 IPO에서 불리한 이유는 무엇인가요?"
      : "Why are retail investors at a disadvantage in IPOs?",
    a: (ko: boolean) => ko
      ? "기관 투자자는 로드쇼·북빌딩 과정에서 경영진과 직접 만나고 심층 정보를 취득합니다. 배분(allocation) 결정권도 주관사와 기관 간 관계에 좌우됩니다. 리테일은 공모가 확정 후 단순 청약만 가능하고, 인기 IPO는 경쟁률이 수천 대 일로 배분이 극히 적습니다. 한국은 공모 물량의 20–25%를 균등배분 방식으로 리테일에 의무 배분해 상대적으로 공정한 편입니다."
      : "Institutional investors meet with management directly during the roadshow and bookbuilding process, gaining access to in-depth information. Allocation decisions are also heavily influenced by the underwriter-institution relationship. Retail investors can only subscribe after the IPO price is finalized, and in popular IPOs, competition ratios can reach thousands-to-one, resulting in minimal allocations. Korea is comparatively fairer — 20–25% of the public offering is mandatorily distributed to retail investors on an equal-allotment basis.",
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

function DemandCurveViz({ ko }: { ko: boolean }) {
  const ipoIdx = DEMAND_CURVE.findIndex((d) => d.price === "$32");
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "IPO 수요 곡선 — 가격별 누적 주문량 (예시)" : "IPO Demand Curve — Cumulative Orders by Price (Example)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-1 text-[10px] text-gray-400 dark:text-gray-500">
          <span>{ko ? "주당 가격" : "Price per share"}</span>
          <span>{ko ? "누적 주문량 (백만주) / 공모 물량 대비 %" : "Cumulative orders (M shares) / % of offering"}</span>
        </div>

        {/* Bars */}
        <div className="space-y-2.5">
          {DEMAND_CURVE.map((row, i) => {
            const isIpo = i === ipoIdx;
            const barPct = Math.min(row.pct, 200);
            return (
              <div key={i} className={`relative ${isIpo ? "py-1" : ""}`}>
                {isIpo && (
                  <div className="absolute inset-x-0 -top-1 -bottom-1 rounded-lg border border-dashed border-blue-400 dark:border-blue-500 pointer-events-none" />
                )}
                <div className="flex items-center gap-3">
                  {/* Price label */}
                  <div className={`w-10 flex-shrink-0 text-right text-[12px] font-bold ${isIpo ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}>
                    {row.price}
                  </div>

                  {/* Bar */}
                  <div className="flex-1 relative h-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <motion.div
                      className={`absolute left-0 top-0 h-full rounded-lg ${isIpo ? "bg-blue-500" : "bg-blue-300 dark:bg-blue-600"}`}
                      style={{ width: 0 }}
                      whileInView={{ width: `${(barPct / 200) * 100}%` }}
                      viewport={VP}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                    />
                    {/* IPO line marker at 100% */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-400/40 dark:bg-blue-500/40" />
                  </div>

                  {/* Demand label */}
                  <div className="w-28 flex-shrink-0 text-[10px] text-gray-500 dark:text-gray-400">
                    {row.demandM}M / {row.pct}%
                  </div>
                </div>

                {/* Row label */}
                <div className="flex">
                  <div className="w-10 flex-shrink-0" />
                  <div className={`ml-3 text-[9px] mt-0.5 ${isIpo ? "text-blue-600 dark:text-blue-400 font-bold" : "text-gray-400 dark:text-gray-500"}`}>
                    {row.label(ko)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-wrap gap-3 text-[10px] text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-blue-500" />
            <span>{ko ? "공모가 ($32) — 2배 초과청약 (50M주)" : "IPO Price ($32) — 2x oversubscribed (50M shares)"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-1 border-t border-dashed border-blue-400" />
            <span>{ko ? "100% = 공모 물량 기준선" : "100% = offering size baseline"}</span>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-4 py-3">
          <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
            {ko
              ? "핵심 원리: 수요 곡선에서 '어디서 자르느냐'가 공모가다. $32에서 자르면 2배 초과청약 — 그 이상이면 더 많은 투자자에게 배분 거절을 의미한다. 주관사는 장기 투자자 중심의 오더북 질(質)을 고려해 최종 가격을 결정한다."
              : "Core principle: where you 'cut' the demand curve is the IPO price. Cutting at $32 yields 2x oversubscription — going higher means rejecting more investors. The bookrunner considers order quality (prioritizing long-term investors) in making the final pricing decision."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function GreenshoeSteps({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-4">
      {GREENSHOE_STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
          className={`rounded-2xl border p-5 ${step.color}`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">{step.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-[14px] font-black text-gray-900 dark:text-gray-100">{step.step}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-900/40 px-2 py-0.5 rounded-full">
                  {step.phase(ko)}
                </span>
              </div>
              <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {step.action(ko)}
              </p>
              <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg px-3 py-2">
                <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                  → {step.result(ko)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Summary callout */}
      <motion.div
        variants={fadeUp(0.3)}
        className="rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-4"
      >
        <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {ko ? "그린슈의 비대칭 설계: " : "Greenshoe's asymmetric design: "}
          </span>
          {ko
            ? "주가 상승 → 발행사 추가 자금 조달. 주가 하락 → 언더라이터가 시장에서 매입하여 주가 지지 (발행사 추가 발행 없음). 모든 플레이어에게 상충 없는 인센티브 구조."
            : "Stock rises → issuer raises more capital. Stock falls → underwriter buys in market to support price (no additional shares from issuer). Aligned incentives for all parties with no conflict."}
        </p>
      </motion.div>
    </motion.div>
  );
}

function KrLockupBars({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "한국 IPO — 의무보유 확약에 따른 배분 우대" : "Korean IPO — Allocation Upweight by Lock-up Commitment"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-5">
        {KR_LOCKUP.map((row, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">{row.period(ko)}</span>
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">{row.upweightPct}</span>
              </div>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{row.desc(ko)}</span>
            </div>
            <div className="h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${row.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: row.bar > 0 ? `${row.bar}%` : "4px" }}
                viewport={VP}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              />
            </div>
          </div>
        ))}

        {/* Real case callout */}
        <div className="mt-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">🔋</span>
            <div>
              <p className="text-[12px] font-bold text-blue-700 dark:text-blue-300 mb-1">
                {ko ? "실전 사례: LG에너지솔루션 (2022)" : "Real Case: LG Energy Solution (2022)"}
              </p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400 leading-relaxed">
                {ko
                  ? "의무보유 확약률 67% → 공모가 상단(30만원) 확정. 기관 경쟁률 2,023:1. 의무보유 확약이 높을수록 주관사가 공모가 상향 근거를 갖는다 — D+180 물량 폭탄 리스크를 사전에 제거하기 때문이다."
                  : "67% lock-up commitment rate → IPO price confirmed at band top (₩300,000). Institutional demand ratio 2,023:1. Higher lock-up commitments give the bookrunner justification to price higher — because they pre-neutralize the D+180 supply bomb risk."}
              </p>
            </div>
          </div>
        </div>

        {/* Korean market specifics */}
        <div className="mt-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 p-4">
          <p className="text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed">
            <span className="font-bold">{ko ? "한국 IPO 특화 규정: " : "Korea-specific rules: "}</span>
            {ko
              ? "공모 물량의 50%는 균등배분(개인 투자자 동등 기회), 50%는 비례배분(청약금 비례). 기관은 별도 수요 예측(3일)으로 공모 물량의 55–75%를 배분받는다. 수요 예측 기간에 의무보유 확약이 공모가 결정의 핵심 변수다."
              : "50% of the public offering is distributed on an equal-allotment basis (equal opportunity for individual investors), and 50% on a proportional basis (proportional to subscription amounts). Institutions receive 55–75% of the offering through a separate demand forecast period (3 days). Lock-up commitment rates during the demand forecast period are the key variable in determining the final IPO price."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function OrderTypeCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 grid sm:grid-cols-2 gap-4">
      {ORDER_TYPES.map((ot, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{ot.icon}</span>
            <div>
              <p className="text-[13px] font-black text-gray-900 dark:text-gray-100">{ot.name(ko)}</p>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${ot.badgeColor}`}>
                {ot.badge(ko)}
              </span>
            </div>
          </div>
          <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            {ot.desc(ko)}
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-2">
            {ko ? "주요 투자자: " : "Key investors: "}{ot.who(ko)}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function PopAnalysisTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "IPO 첫날 팝 분석 — 발행사 vs 투자자 시각" : "IPO Day-1 Pop Analysis — Issuer vs Investor Perspective"}
        </p>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {POP_ANALYSIS.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
            className="p-5"
          >
            <div className="flex items-start gap-4">
              {/* Bar visual */}
              <div className="w-24 flex-shrink-0">
                <div className="h-2.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-1">
                  <motion.div
                    className={`h-full rounded-full ${row.barColor}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.barW}%` }}
                    viewport={VP}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  />
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">{row.range(ko)}</p>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-[13px] font-black ${row.verdictColor}`}>
                    {row.verdict(ko)}
                  </span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${row.badgeColor}`}>
                    {row.range(ko)}
                  </span>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                  {row.desc(ko)}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 italic">{row.examples}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leave money on the table box */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border-t border-amber-100 dark:border-amber-800 p-5">
        <p className="text-[12px] font-bold text-amber-700 dark:text-amber-300 mb-2">
          {ko ? '"Leave Money on the Table" 논쟁' : '"Leave Money on the Table" Debate'}
        </p>
        <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
          {ko
            ? "IPO 팝이 크면 발행사가 낮은 가격에 판 것 — 그 차익은 투자자(주로 기관)에게 귀속된다. 연구에 따르면 미국 IPO의 평균 첫날 팝은 약 18%이며, 발행사 입장에서는 연간 수백억 달러의 'leave money'다. 그러나 주관사 입장에서는 투자자 관계 유지를 위해 '적정 팝'이 필요하다."
            : "A large IPO pop means the issuer sold too cheaply — the gain accrues to investors (primarily institutional). Research shows the average Day 1 pop for U.S. IPOs is about 18%, representing tens of billions of dollars in annual 'leave money' from the issuer's perspective. However, from the underwriter's viewpoint, a 'reasonable pop' is necessary to maintain investor relationships."}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmIpoBookbuildingClient({
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
                  ? "https://dealstory.io/market-101/ecm-ipo-bookbuilding"
                  : "https://dealstory.io/en/market-101/ecm-ipo-bookbuilding",
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
                {ko ? "Ch.5 북빌딩" : "Ch.5 Book-Building"}
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM Series · Ch.5 북빌딩 & 가격 결정" : "ECM Series · Ch.5 Book-Building & Pricing"}
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
                href="/market-101/ecm-ipo-bookbuilding"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-ipo-bookbuilding"
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

          {/* ── Ch.1: 북빌딩이 DCM과 다른 이유 ── */}
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
                {ko ? "북빌딩이 DCM과 근본적으로 다른 이유" : "Why Book-Building Fundamentally Differs from DCM"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "DCM 북빌딩과 IPO 북빌딩은 이름은 같지만 구조가 근본적으로 다르다. DCM에서는 쿠폰·만기가 먼저 정해진 후 스프레드(가격)를 좁혀나간다. 반면 IPO에서는 가격 밴드만 제시된 상태에서 투자자 수요를 먼저 모으고, 그 수요 곡선을 분석한 뒤 공모가를 결정한다."
                  : "DCM book-building and IPO book-building share a name but are structurally very different. In DCM, the coupon and maturity are fixed first, and then the spread (price) is narrowed. In an IPO, only a price band is presented initially — investor demand is collected first, the resulting demand curve is analyzed, and only then is the final IPO price determined."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "이 차이가 만들어내는 핵심 긴장: IPO에서 발행사는 '최고 가격'을 원하고, 투자자(특히 기관)는 '낮은 가격 + 첫날 팝'을 원하며, 주관사는 양쪽 모두를 만족시켜야 장기 관계를 유지한다. 이 삼각 긴장이 공모가 결정의 정치학이다."
                  : "This difference creates a core tension: in an IPO, the issuer wants the highest possible price, investors (especially institutions) want a lower price with a Day 1 pop, and the underwriter must satisfy both sides to maintain long-term relationships. This triangular tension is the politics of IPO pricing."}
              </motion.p>

              {/* DCM vs IPO comparison table */}
              <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "DCM 북빌딩 vs IPO 북빌딩 — 비교" : "DCM Book-Building vs IPO Book-Building — Comparison"}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="text-left p-3 text-gray-400 dark:text-gray-500 font-semibold">{ko ? "구분" : "Category"}</th>
                        <th className="text-left p-3 text-teal-600 dark:text-teal-400 font-bold">DCM</th>
                        <th className="text-left p-3 font-bold" style={{ color: accent }}>IPO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {[
                        {
                          cat: ko ? "가격 결정 순서" : "Pricing order",
                          dcm: ko ? "구조 → 스프레드 좁히기" : "Structure → narrow spread",
                          ipo: ko ? "수요 모집 → 가격 결정" : "Collect demand → set price",
                        },
                        {
                          cat: ko ? "투자자 정보" : "Investor info",
                          dcm: ko ? "S&T 채널 + 투자자 데이터베이스" : "S&T channels + investor DB",
                          ipo: ko ? "로드쇼 + 경영진 미팅 필수" : "Roadshow + mgmt meetings required",
                        },
                        {
                          cat: ko ? "오더 형태" : "Order type",
                          dcm: ko ? "금액·스프레드 지정" : "Amount + spread",
                          ipo: ko ? "주식수·가격 지정 (4가지 유형)" : "Shares + price (4 types)",
                        },
                        {
                          cat: ko ? "평균 기간" : "Timeline",
                          dcm: ko ? "1–3일 (IG), 1주 (HY)" : "1–3 days (IG), 1 wk (HY)",
                          ipo: ko ? "2–3주 (로드쇼 포함)" : "2–3 weeks (incl. roadshow)",
                        },
                        {
                          cat: ko ? "주요 리스크" : "Key risk",
                          dcm: ko ? "금리 변동·시장 변동성" : "Rate moves, market volatility",
                          ipo: ko ? "가격 판단 실패, 규제, 시장 타이밍" : "Mispricing, regulatory, market timing",
                        },
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 text-gray-500 dark:text-gray-400 font-medium">{row.cat}</td>
                          <td className="p-3 text-gray-700 dark:text-gray-300">{row.dcm}</td>
                          <td className="p-3 text-gray-700 dark:text-gray-300">{row.ipo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Ch.2: 수요 곡선 ── */}
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
                {ko ? "수요 곡선 — '어디서 자르느냐'가 공모가다" : "Demand Curve — Where You 'Cut' Is the IPO Price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "북빌딩 기간이 끝나면 주관사는 오더북에서 수요 곡선을 그린다. 세로축은 가격, 가로축은 그 가격에서의 누적 주문량이다. 가격이 낮을수록 더 많은 투자자가 참여하므로 수요 곡선은 우하향한다 — 마치 경제학 교과서의 수요 곡선과 같다."
                  : "Once the bookbuilding period ends, the bookrunner maps the demand curve from the order book. The vertical axis is price and the horizontal axis is cumulative orders at each price level. Since more investors participate at lower prices, the demand curve slopes downward and to the right — exactly like a demand curve in an economics textbook."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "그러나 실제 공모가 결정은 단순히 초과청약 배수를 극대화하는 것이 아니다. 주관사는 오더의 질 — Strike 오더 비중, 장기 투자자 비중, 의무보유 확약률 — 을 함께 고려한다. 100배 초과청약이어도 대부분이 단기 투기 오더라면 공모가를 낮출 수 있다."
                  : "However, the actual IPO price decision is not simply about maximizing the oversubscription multiple. The bookrunner simultaneously considers order quality — the proportion of Strike orders, the weight of long-term investors, and lock-up commitment rates. Even with 100x oversubscription, if most orders are short-term speculative orders, the IPO price may be set lower."}
              </motion.p>
            </div>

            <DemandCurveViz ko={ko} />
          </motion.section>

          {/* ── Ch.3: 오더 유형 ── */}
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
                {ko ? "오더 유형 4가지 — 주관사가 읽는 신호" : "4 Order Types — Signals the Bookrunner Reads"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {ko
                  ? "모든 오더가 동등하지 않다. 주관사는 오더의 유형을 분석해 수요의 진짜 강도와 질을 판단한다. Strike 오더는 '무슨 가격이든 참여하겠다'는 확신이고, Limit 오더는 '이 가격 이하에서만'이라는 조건이다."
                  : "Not all orders are equal. The bookrunner analyzes order types to gauge the true strength and quality of demand. A Strike order signals conviction — 'I'll participate at any price.' A Limit order is conditional — 'only if priced at or below this level.'"}
              </motion.p>
            </div>

            <OrderTypeCards ko={ko} />

            {/* Allocation hint */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4">
              <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
                <span className="font-bold">{ko ? "배분 전략: " : "Allocation strategy: "}</span>
                {ko
                  ? "오더 유형 + 투자자 관계의 질 + 의무보유 확약 → 주관사가 배분 결정. Strike 오더를 낸 장기 투자자가 더 많은 배분을 받는 경향. 투자자 입장에서는 스트라이크 오더를 낼수록 관계가 쌓이고 다음 딜에서 배분 우대를 기대할 수 있다."
                  : "Order type + quality of investor relationship + lock-up commitment → bookrunner decides allocation. Long-term investors who submit Strike orders tend to receive larger allocations. From the investor's perspective, consistently submitting Strike orders builds the relationship and creates expectations of preferential allocation in future deals."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.4: 그린슈 ── */}
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
                {ko ? "그린슈 옵션 — 3단계 메커니즘" : "Greenshoe Option — 3-Stage Mechanism"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "그린슈(Greenshoe, 과배정 옵션)는 IPO 직후 주가 안정화를 위해 설계된 메커니즘이다. 이름은 미국 최초 적용 기업인 Green Shoe Manufacturing Company (1963)에서 유래했다. 현재 대부분의 글로벌 IPO에 표준으로 적용된다."
                  : "The greenshoe (over-allotment option) is a mechanism designed to stabilize the stock price immediately after an IPO. The name comes from Green Shoe Manufacturing Company, the first U.S. firm to apply it (1963). It is now standard in most global IPOs."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "핵심 원리는 언더라이터가 IPO 시 공모 물량보다 15% 더 많은 주식을 투자자에게 배분(과배정)하고, 이후 시장 상황에 따라 시장 매입(주가 하락 시 지지) 또는 발행사 추가 주식 취득(주가 상승 시 청산)으로 포지션을 청산하는 것이다."
                  : "The core principle is that the underwriter allocates 15% more shares than the offering size to investors (over-allotment), then covers the position based on market conditions — either by buying in the open market (price support when falling) or by acquiring additional shares from the issuer (position close-out when rising)."}
              </motion.p>
            </div>

            <GreenshoeSteps ko={ko} />
          </motion.section>

          {/* ── Ch.5: 한국 IPO 특화 ── */}
          <motion.section
            id="ch5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "한국 IPO 특화 — 의무보유 확약이 공모가를 결정한다" : "Korea-Specific — Lock-up Commitments Determine IPO Price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "한국 IPO 북빌딩에는 글로벌 시장에 없는 독자적인 메커니즘이 있다: 의무보유 확약(lock-up commitment)에 따른 배분 우대 시스템. 기관 투자자가 수요 예측(수요예측) 단계에서 일정 기간 주식 매도를 하지 않겠다고 약속(확약)하면, 그 기간에 따라 배분을 더 많이 받는다."
                  : "Korean IPO book-building has a unique mechanism absent from global markets: a preferential allocation system based on lock-up commitments. When institutional investors commit during the demand forecast period not to sell their shares for a certain period, they receive larger allocations proportional to the length of that commitment."}
              </motion.p>
              <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "이 시스템은 두 가지 기능을 한다. 첫째, 발행사 입장에서 상장 초기 매도 압력(오버행)을 제거한다. 둘째, 주관사 입장에서 의무보유 확약률이 높을수록 공모가를 상향 조정할 근거가 생긴다 — LG에너지솔루션이 67% 확약률로 공모가 상단을 확정한 것이 대표적이다."
                  : "This system serves two functions. First, it removes selling pressure (overhang) during the early post-listing period from the issuer's perspective. Second, from the bookrunner's perspective, higher lock-up commitment rates provide justification for pricing at the top of the band — LG Energy Solution's 67% commitment rate leading to pricing at the band top is the prime example."}
              </motion.p>
            </div>

            <KrLockupBars ko={ko} />
          </motion.section>

          {/* ── Ch.6: IPO 팝 분석 ── */}
          <motion.section
            id="ch6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "IPO 팝 분석 — 첫날의 성과가 모든 것을 말한다" : "IPO Pop Analysis — Day One Performance Tells Everything"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "IPO 첫날 주가 변화('팝')는 공모가 결정의 정확도를 측정하는 핵심 지표다. 팝이 0에 가까울수록 발행사에 유리하고, 팝이 클수록 투자자에게 유리하다. 주관사는 이 사이 어딘가를 목표로 한다."
                  : "The Day 1 stock price change ('pop') is the key metric for measuring the accuracy of IPO pricing. The closer the pop is to zero, the more favorable for the issuer; the larger the pop, the more favorable for investors. The bookrunner targets somewhere in between."}
              </motion.p>

              {/* Banker quote */}
              <motion.blockquote variants={fadeUp(0.05)} className="border-l-4 pl-4 py-1" style={{ borderColor: accent }}>
                <p className="text-[14px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "\"15–20% 첫날 팝이 이상적이다. 5% 미만이면 발행사가 기뻐하지만 투자자가 재탕하지 않는다. 30%+이면 투자자한테 돈을 줘버린 것이다.\""
                    : "\"A 15–20% Day 1 pop is ideal. Under 5% and the issuer is happy but investors don't come back for the next deal. Over 30% and you've just given money to investors.\""}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                  {ko ? "— 익명 ECM 시니어 뱅커" : "— Anonymous ECM Senior Banker"}
                </p>
              </motion.blockquote>
            </div>

            <PopAnalysisTable ko={ko} />
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
                { slug: "ecm-overview",         ko: "ECM 개요",         en: "ECM Overview"     },
                { slug: "ecm-ipo-process",       ko: "IPO 프로세스",    en: "IPO Process"      },
                { slug: "ecm-ipo-valuation",     ko: "IPO 밸류에이션",  en: "IPO Valuation"    },
                { slug: "ecm-ipo-post",          ko: "포스트-IPO",      en: "Post-IPO"         },
                { slug: "ecm-followon",          ko: "팔로우온",         en: "Follow-on"        },
                { slug: "ecm-spac-direct",       ko: "SPAC·직상장",     en: "SPAC·Direct"      },
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
              href={ko ? "/market-101/ecm-ipo-process" : "/en/market-101/ecm-ipo-process"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "Ch.4 IPO 프로세스" : "Ch.4 IPO Process"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-ipo-post" : "/en/market-101/ecm-ipo-post"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline ml-auto"
            >
              {ko ? "Ch.6 포스트-IPO →" : "Ch.6 Post-IPO →"}
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
            const { prev, next } = getMarket101Nav("ecm-ipo-bookbuilding");
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
