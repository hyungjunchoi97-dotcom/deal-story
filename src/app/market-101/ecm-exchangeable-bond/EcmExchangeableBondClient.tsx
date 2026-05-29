"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
const accent = "#3182f6"; // ECM blue

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"        : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"     : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"     : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션" : "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"   : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"     : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"   : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"   : "Ch.8 Convertible"},
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"   : "Ch.9 Intl"       },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC"      : "Ch.10 SPAC"      },
];

// ── ECM Products Series (5 articles) ──────────────────────────────────────────
const ECM_PRODUCTS_SERIES = [
  { slug: "ecm-rights-issue",        title: (ko: boolean) => ko ? "유상증자 실무"   : "Rights Issue"    },
  { slug: "ecm-ipo-allocation",      title: (ko: boolean) => ko ? "IPO 배분 전략"   : "IPO Allocation"  },
  { slug: "ecm-pitchbook",           title: (ko: boolean) => ko ? "피치북 해부학"   : "Pitchbook"       },
  { slug: "ecm-abb-execution",       title: (ko: boolean) => ko ? "ABB 실행 매뉴얼" : "ABB Manual"      },
  { slug: "ecm-exchangeable-bond",   title: (ko: boolean) => ko ? "교환사채(EB)"    : "Exchangeable Bond"},
];

const THIS_SLUG = "ecm-exchangeable-bond";

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "1. 30초 요약",      en: "1. Quick Summary"    },
  { id: "ch2", ko: "2. CB·BW·EB 비교",  en: "2. CB vs BW vs EB"  },
  { id: "ch3", ko: "3. 작동 메커니즘",   en: "3. Mechanism"        },
  { id: "ch4", ko: "4. SoftBank 사례",  en: "4. SoftBank Case"    },
  { id: "ch5", ko: "5. 한국 EB 시장",   en: "5. Korean Market"    },
  { id: "ch6", ko: "6. CB vs EB 선택",  en: "6. CB vs EB Choice"  },
];

// ── 30초 요약 Stats ────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "$30–50B",
    label: (ko: boolean) => ko ? "글로벌 EB 연간 발행 규모" : "Global EB annual issuance",
    sub: (ko: boolean) => ko ? "전 세계 EB 시장 추정치" : "Estimated global EB market",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-300",
  },
  {
    value: "$11.4B",
    label: (ko: boolean) => ko ? "SoftBank Alibaba EB (2021)" : "SoftBank Alibaba EB (2021)",
    sub: (ko: boolean) => ko ? "역대 최대 규모 EB 거래" : "Largest EB transaction ever",
    color: "border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20",
    text: "text-violet-700 dark:text-violet-300",
  },
  {
    value: "15–30%",
    label: (ko: boolean) => ko ? "EB 교환 프리미엄" : "EB exchange premium",
    sub: (ko: boolean) => ko ? "현재 주가 대비 교환가 설정" : "Set above current share price",
    color: "border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20",
    text: "text-teal-700 dark:text-teal-300",
  },
  {
    value: "0%",
    label: (ko: boolean) => ko ? "발행사 주식 희석" : "Issuer equity dilution",
    sub: (ko: boolean) => ko ? "제3자 보유 주식으로 교환" : "Exchanges into third-party shares",
    color: "border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-700 dark:text-orange-300",
  },
];

// ── CB vs BW vs EB 비교표 ──────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    label: (ko: boolean) => ko ? "교환 대상" : "Exchange Target",
    cb:  (ko: boolean) => ko ? "발행사 신주" : "Issuer's new shares",
    bw:  (ko: boolean) => ko ? "발행사 신주" : "Issuer's new shares",
    eb:  (ko: boolean) => ko ? "제3자 보유 주식" : "Third-party shares",
    ebHighlight: true,
  },
  {
    label: (ko: boolean) => ko ? "희석 여부" : "Dilution",
    cb:  (ko: boolean) => ko ? "있음" : "Yes",
    bw:  (ko: boolean) => ko ? "있음" : "Yes",
    eb:  (ko: boolean) => ko ? "없음 (제3자 주식)" : "None (3rd-party stock)",
    ebHighlight: true,
  },
  {
    label: (ko: boolean) => ko ? "발행사 입장" : "Issuer's Goal",
    cb:  (ko: boolean) => ko ? "자본 조달" : "Capital raise",
    bw:  (ko: boolean) => ko ? "자본 조달" : "Capital raise",
    eb:  (ko: boolean) => ko ? "보유 주식 현금화" : "Monetize holdings",
    ebHighlight: false,
  },
  {
    label: (ko: boolean) => ko ? "교환 후 채권" : "Bond After Exchange",
    cb:  (ko: boolean) => ko ? "소멸" : "Extinguished",
    bw:  (ko: boolean) => ko ? "유지 (BW분리형)" : "Survives (detachable)",
    eb:  (ko: boolean) => ko ? "소멸" : "Extinguished",
    ebHighlight: false,
  },
  {
    label: (ko: boolean) => ko ? "대표 케이스" : "Key Example",
    cb:  (ko: boolean) => ko ? "Tesla CB" : "Tesla CB",
    bw:  (ko: boolean) => ko ? "SM엔터 BW" : "SM Ent. BW",
    eb:  (ko: boolean) => ko ? "SoftBank→Alibaba" : "SoftBank→Alibaba",
    ebHighlight: false,
  },
];

// ── SoftBank EB 거래 기록 ──────────────────────────────────────────────────────
const SOFTBANK_EB_DEALS = [
  { year: "2016", amount: "$5B",   price: "$87",   bar: 38, color: "bg-blue-300 dark:bg-blue-700" },
  { year: "2019", amount: "$8B",   price: "$187",  bar: 60, color: "bg-blue-400 dark:bg-blue-600" },
  { year: "2021", amount: "$11.4B",price: "$280",  bar: 100, color: "bg-blue-600 dark:bg-blue-400", peak: true },
  { year: "2022", amount: "$4.6B", price: "N/A",   bar: 40, color: "bg-blue-300 dark:bg-blue-700" },
];

// ── EB 페이오프 데이터 ─────────────────────────────────────────────────────────
const PAYOFF_POINTS = [
  { price: 160, bondFloor: 82, ebValue: 82,  label: (ko: boolean) => ko ? "교환 미행사 구간" : "No exercise zone" },
  { price: 200, bondFloor: 85, ebValue: 85,  label: null },
  { price: 240, bondFloor: 88, ebValue: 88,  label: null },
  { price: 280, bondFloor: 90, ebValue: 90,  label: (ko: boolean) => ko ? "교환가 ($280)" : "Exchange price ($280)" },
  { price: 320, bondFloor: 90, ebValue: 102, label: null },
  { price: 360, bondFloor: 90, ebValue: 115, label: null },
  { price: 400, bondFloor: 90, ebValue: 128, label: (ko: boolean) => ko ? "주가 상승시 EB 가치↑" : "EB value rises with stock" },
];

// ── EB 구조 결정 사항 ──────────────────────────────────────────────────────────
const DESIGN_CHECKLIST = [
  {
    num: "01",
    title: (ko: boolean) => ko ? "교환 대상 주식 선정" : "Select underlying shares",
    desc:  (ko: boolean) => ko ? "유동성이 충분한 상장 주식 필요. 비유동성 주식은 교환 가치 불확실." : "Requires listed shares with sufficient liquidity. Illiquid shares create uncertain exchange value.",
    icon: "🎯",
  },
  {
    num: "02",
    title: (ko: boolean) => ko ? "교환 프리미엄 설정" : "Set exchange premium",
    desc:  (ko: boolean) => ko ? "현재 주가 대비 +20~30%. 프리미엄이 높을수록 낮은 쿠폰 가능." : "20–30% above current share price. Higher premium allows lower coupon.",
    icon: "📊",
  },
  {
    num: "03",
    title: (ko: boolean) => ko ? "쿠폰 수준 결정" : "Determine coupon level",
    desc:  (ko: boolean) => ko ? "0~2% 범위. 교환 옵션 가치가 쿠폰을 상쇄 — 발행사는 낮은 금리로 조달 가능." : "0–2% range. Option value offsets coupon — issuer funds at below-market rates.",
    icon: "💰",
  },
  {
    num: "04",
    title: (ko: boolean) => ko ? "교환 기간 설정" : "Set exercise window",
    desc:  (ko: boolean) => ko ? "만기까지 언제든 vs 특정 기간(미국식/유럽식). 유연성과 발행사 통제의 균형." : "Anytime until maturity vs. specific windows (American/European). Balance flexibility vs. issuer control.",
    icon: "📅",
  },
  {
    num: "05",
    title: (ko: boolean) => ko ? "교환 방식 선택" : "Choose settlement method",
    desc:  (ko: boolean) => ko ? "Cash Settlement vs Physical Delivery. 주가 하락 시 현금 정산으로 투자자 보호 가능." : "Cash Settlement vs Physical Delivery. Cash settlement can protect investors if share price falls.",
    icon: "🔄",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "EB 투자자가 교환을 안 하면 어떻게 되나요?"
      : "What happens if an EB investor doesn't exercise the exchange?",
    a: (ko: boolean) => ko
      ? "교환을 행사하지 않으면 채권으로서 만기에 원금이 상환됩니다. EB는 기본적으로 채권이기 때문에 Bond Floor(채권 가치)가 하한선이 됩니다. Alibaba 주가가 교환가($280) 아래에 있으면 투자자는 교환 대신 원금 상환을 선택하고, SoftBank는 Alibaba 주식을 계속 보유하게 됩니다."
      : "If the investor doesn't exercise, the bond repays principal at maturity — EB is fundamentally a bond, so the Bond Floor acts as a floor value. If Alibaba's price stays below the exchange price ($280), investors opt for repayment and SoftBank retains the Alibaba shares.",
  },
  {
    q: (ko: boolean) => ko
      ? "EB 발행이 담보 주식 가격에 영향을 주나요?"
      : "Does an EB issuance affect the underlying stock price?",
    a: (ko: boolean) => ko
      ? "직접적으로는 큰 영향이 없지만 간접적인 영향은 있습니다. EB 발행 시 헤지펀드가 델타 헤지를 위해 담보 주식을 공매도할 수 있어 단기 주가에 압력이 가해질 수 있습니다. 또한 시장은 'EB 발행 = 보유자가 장기적으로 주식을 처분할 계획'으로 해석해 주가에 부정적인 신호가 되기도 합니다. SoftBank의 Alibaba EB 발행 후 Alibaba 주가가 단기적으로 약세를 보인 사례가 대표적입니다."
      : "The direct impact is limited, but indirect effects exist. Hedge funds may short the underlying stock for delta hedging, creating near-term selling pressure. Markets also interpret EB issuance as a signal that the holder plans to eventually exit — a bearish signal. Alibaba shares saw short-term weakness following several SoftBank EB issuances.",
  },
  {
    q: (ko: boolean) => ko
      ? "EB의 교환 대상 주식이 상장폐지되면 어떻게 되나요?"
      : "What happens if the underlying stock of an EB gets delisted?",
    a: (ko: boolean) => ko
      ? "교환 대상 주식의 상장폐지는 EB의 중대한 리스크입니다. 대부분 EB 발행 조건서에는 상장폐지 이벤트(Delisting Event) 발생 시 조기 상환 조항이 포함됩니다 — 발행사가 원금 전액(혹은 프리미엄 포함)을 즉시 상환해야 합니다. 이 때문에 EB의 교환 대상 주식은 항상 유동성이 높은 주요 거래소 상장 주식으로 제한되는 경향이 있습니다."
      : "Delisting of the underlying stock is a major EB risk. Most EB prospectuses include a Delisting Event clause triggering early redemption — the issuer must repay full principal (sometimes with a premium) immediately. This is why underlying stocks are almost always large-cap shares listed on major exchanges with high liquidity.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국에서 EB 발행 규제는 어떻게 되나요?"
      : "What are the regulatory requirements for issuing an EB in Korea?",
    a: (ko: boolean) => ko
      ? "한국에서 EB는 상법과 자본시장법에 따라 발행됩니다. 주요 규제 사항으로는 ① 교환 대상 주식은 상장된 타사 주식이어야 함, ② 발행사가 해당 주식을 실제 보유해야 함(담보 요건), ③ 이사회 결의가 필요하며 주주총회 결의가 필요한 경우도 있음, ④ 금융위원회에 증권신고서 제출 의무가 있습니다. 재벌 계열사 간 EB 거래의 경우 순환출자 규제와의 관계도 검토가 필요합니다."
      : "Korean EB issuance is governed by the Commercial Act and the Capital Markets Act. Key requirements include: ① underlying shares must be listed third-party stocks, ② the issuer must actually hold the shares (collateral requirement), ③ board resolution is required and shareholder approval may be needed, ④ a securities registration statement must be filed with the FSC. For intra-chaebol EB transactions, the relationship with circular shareholding regulations must also be reviewed.",
  },
  {
    q: (ko: boolean) => ko
      ? "CB와 EB를 동시에 발행할 수 있나요?"
      : "Can a company issue both a CB and an EB simultaneously?",
    a: (ko: boolean) => ko
      ? "법적으로는 가능하지만 실무적으로는 드뭅니다. CB는 자사 신주로 전환되고 EB는 보유 타사 주식으로 교환되는 구조이기 때문에 두 상품의 목적이 다릅니다 — CB는 자기 회사 성장 스토리 판매, EB는 보유 주식 현금화. 동시 발행 시 투자자에게 혼재된 신호를 줄 수 있고, 각 상품의 수요에 영향을 줄 수 있어 보통 순차적으로 발행하거나 목적에 따라 하나를 선택합니다."
      : "Legally permissible, but rare in practice. CB and EB serve different purposes — CB sells the company's own growth story, EB monetizes third-party holdings — so simultaneous issuance sends mixed signals to investors and can dampen demand for each instrument. Most issuers choose one or sequence them.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-convertible",           ko: "Ch.8 전환사채(CB)",  en: "Ch.8 Convertible Bond" },
  { slug: "ecm-warrant-bond",          ko: "신주인수권부사채(BW)", en: "Warrant Bond (BW)"     },
  { slug: "ecm-followon",              ko: "Ch.7 팔로우온",       en: "Ch.7 Follow-on"        },
  { slug: "ecm-abb-execution",         ko: "ABB 실행 매뉴얼",     en: "ABB Execution Manual"  },
  { slug: "ecm-overview",              ko: "ECM 개요",            en: "ECM Overview"          },
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

function ProductsSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {ECM_PRODUCTS_SERIES.map((item) => (
          <Link
            key={item.slug}
            href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold transition-colors ${
              item.slug === THIS_SLUG
                ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                : "text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            }`}
          >
            {item.title(ko)}
          </Link>
        ))}
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

function StatsGrid({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {STATS.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className={`rounded-xl border p-4 ${stat.color}`}
        >
          <p className={`text-2xl font-black mb-1 ${stat.text}`}>{stat.value}</p>
          <p className={`text-[11px] font-bold mb-0.5 ${stat.text}`}>{stat.label(ko)}</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400">{stat.sub(ko)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.15)}
      className="mt-6 rounded-2xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 overflow-hidden"
    >
      <div className="bg-amber-100 dark:bg-amber-900/40 px-5 py-3 border-b border-amber-200 dark:border-amber-700">
        <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
          {ko ? "쉽게 이해하기 — 비유" : "Analogy — How to Think About EB"}
        </p>
      </div>
      <div className="p-5">
        <p className="text-[14px] text-amber-900 dark:text-amber-100 leading-relaxed">
          {ko
            ? "EB는 내가 친구(제3자 회사)한테 빌려줬던 돈을 담보로 다른 사람에게 대출해주는 구조다. 채권을 발행해 돈을 받고, 만기에 내 보유 주식(친구 회사 주식)으로 갚는다. 내 회사 주식이 희석되지 않는 것이 핵심."
            : "EB is like using the IOU your friend gave you as collateral to lend money to someone else. You issue a bond and receive cash; at maturity, you repay with shares you own in your friend's company. The key: your own company's shares are never diluted."}
        </p>
      </div>
    </motion.div>
  );
}

function ComparisonTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "CB · BW · EB — 세 가지 핵심 차이" : "CB · BW · EB — Key Differences"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left px-4 py-3 text-gray-400 font-semibold w-32" />
              <th className="px-4 py-3 text-center font-bold text-gray-700 dark:text-gray-300">CB</th>
              <th className="px-4 py-3 text-center font-bold text-gray-700 dark:text-gray-300">BW</th>
              <th
                className="px-4 py-3 text-center font-bold rounded-t"
                style={{ color: accent, background: `${accent}15` }}
              >
                EB
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}`}
              >
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 font-medium text-[11px]">
                  {row.label(ko)}
                </td>
                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                  {row.cb(ko)}
                </td>
                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                  {row.bw(ko)}
                </td>
                <td
                  className="px-4 py-3 text-center font-bold"
                  style={row.ebHighlight ? { color: accent } : { color: undefined }}
                >
                  {row.eb(ko)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function PayoffDiagram({ ko }: { ko: boolean }) {
  const maxVal = 130;
  const minVal = 75;
  const range = maxVal - minVal;

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "EB 페이오프 다이어그램 — 교환 기준가 $280, Bond Floor, EB 가치" : "EB Payoff Diagram — Exchange Price $280, Bond Floor, EB Value"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="relative h-40 flex items-end gap-1">
          {PAYOFF_POINTS.map((point, i) => {
            const bondH = Math.round(((point.bondFloor - minVal) / range) * 100);
            const ebH   = Math.round(((point.ebValue   - minVal) / range) * 100);
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full relative">
                {/* EB bar */}
                <motion.div
                  className="w-full rounded-t-md absolute bottom-0"
                  style={{ background: `${accent}40` }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${ebH}%` }}
                  viewport={VP}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                />
                {/* Bond floor bar */}
                <motion.div
                  className="w-full rounded-t-md absolute bottom-0 bg-gray-300 dark:bg-gray-600"
                  style={{ mixBlendMode: "multiply" }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bondH}%` }}
                  viewport={VP}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                />
                {point.label && (
                  <span className="absolute -top-4 text-[8px] text-gray-400 dark:text-gray-500 text-center leading-tight whitespace-nowrap">
                    {point.label(ko)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-4 justify-center">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              {ko ? "Bond Floor (채권 가치)" : "Bond Floor"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ background: `${accent}40` }} />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              {ko ? "EB 가치 (옵션 가치 포함)" : "EB Value (incl. option)"}
            </span>
          </div>
        </div>
        <div className="mt-3 flex justify-between text-[9px] text-gray-400 dark:text-gray-500">
          <span>{ko ? "← Alibaba 주가 낮음" : "← Alibaba stock low"}</span>
          <span>{ko ? "교환가 $280 →" : "Exchange price $280 →"}</span>
          <span>{ko ? "주가 높음 →" : "Stock high →"}</span>
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "교환가 이하에서는 Bond Floor가 하한선 역할 — 투자자는 원금 보호. 교환가 초과 시 EB 가치는 주가와 함께 상승."
            : "Below the exchange price, Bond Floor acts as a floor — investors are protected. Above it, EB value rises with the underlying stock."}
        </p>
      </div>
    </motion.div>
  );
}

function SoftBankChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "SoftBank Alibaba EB 시리즈 — 연도별 발행 규모" : "SoftBank Alibaba EB Series — By Year"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-end gap-4" style={{ height: 180 }}>
          {SOFTBANK_EB_DEALS.map((deal, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{deal.amount}</span>
              <motion.div
                className={`w-full rounded-t-md ${deal.color}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${deal.bar * 1.1}px` }}
                viewport={VP}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              />
              <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{deal.year}</span>
              {deal.price !== "N/A" && (
                <span className={`text-[9px] font-semibold ${deal.peak ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}`}>
                  {ko ? `교환가 ${deal.price}` : `Exch. ${deal.price}`}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "SoftBank는 총 ~$30B 이상을 Alibaba 지분으로 담보한 EB 시리즈로 조달 — 직접 매도의 주가 충격 없이 분산 현금화."
            : "SoftBank raised ~$30B+ via Alibaba-collateralized EB series — monetizing without the market impact of outright block sales."}
        </p>
      </div>
    </motion.div>
  );
}

function PracticeBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-700">
      <div className="bg-blue-50 dark:bg-blue-900/30 px-5 py-3 border-b border-blue-200 dark:border-blue-700">
        <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          {ko ? "EB 구조 설계 시 핵심 결정 사항" : "Key Design Decisions When Structuring an EB"}
        </p>
      </div>
      <div className="p-5 space-y-0">
        {DESIGN_CHECKLIST.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
            className={`flex gap-4 py-4 ${i < DESIGN_CHECKLIST.length - 1 ? "border-b border-blue-100 dark:border-blue-800" : ""}`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-base">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black text-blue-500 dark:text-blue-400">{item.num}</span>
                <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{item.title(ko)}</span>
              </div>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmExchangeableBondClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-exchangeable-bond"
                  : "https://dealstory.io/en/market-101/ecm-exchangeable-bond",
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
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "교환사채(EB)" : "Exchangeable Bond (EB)"}
              </span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM 심화 — 교환사채" : "ECM Deep Dive — Exchangeable Bond"}
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
                href="/market-101/ecm-exchangeable-bond"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-exchangeable-bond"
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

        <SeriesNav lang={lang} />
        <ProductsSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 — 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 1" : "Section 1"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "30초 요약 — EB가 뭔지 빠르게 파악하기" : "Quick Summary — What Is an EB?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "교환사채(EB, Exchangeable Bond)는 채권 발행사가 보유한 제3자 회사 주식으로 원금을 상환하는 채권이다. 전환사채(CB)가 발행사 자신의 신주로 전환되는 것과 달리, EB는 발행사가 이미 보유하고 있는 다른 회사 주식으로 교환된다. 발행사 주식이 희석되지 않는다는 점이 EB의 가장 큰 특징이다."
                    : "An Exchangeable Bond (EB) is a bond where the issuer repays principal with shares of a third-party company it holds. Unlike a Convertible Bond (CB) — which converts into the issuer's own new shares — an EB exchanges into shares of another company that the issuer already owns. The critical distinction: no dilution to the issuer's own equity.",
                  ko
                    ? "글로벌 EB 시장은 연간 약 $30~50B 규모로 CB($200~300B)보다 작지만, 개별 거래의 규모는 훨씬 클 수 있다. SoftBank가 Alibaba 주식을 담보로 2021년 발행한 $11.4B EB는 역대 최대급 거래다. EB는 대규모 지분을 보유한 지주회사나 대기업 계열사가 보유 주식을 시장 충격 없이 현금화할 때 주로 활용된다."
                    : "The global EB market is roughly $30–50B annually — smaller than the CB market ($200–300B) — but individual transactions can be enormous. SoftBank's 2021 Alibaba-backed EB of $11.4B is among the largest ever. EBs are most commonly used by holding companies or large conglomerate subsidiaries seeking to monetize significant equity stakes without market disruption.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <StatsGrid ko={ko} />
          </motion.section>

          {/* Ch.2 — CB vs BW vs EB */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 2" : "Section 2"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "CB vs BW vs EB — 세 가지의 핵심 차이" : "CB vs BW vs EB — The Core Differences"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "하이브리드 채권 세 가지 — CB(전환사채), BW(신주인수권부사채), EB(교환사채) — 는 모두 '채권 + 주식 옵션' 구조를 공유한다. 하지만 핵심 차이는 교환 대상이 누구의 주식이냐다. CB와 BW는 발행사 자신의 신주로 전환(행사)된다. EB는 발행사가 이미 보유한 타사 주식으로 교환된다."
                    : "Three hybrid bonds — CB, BW, and EB — all share the 'bond + equity option' structure. But the critical difference lies in whose shares are delivered. CB and BW convert or exercise into the issuer's own new shares. EB exchanges into third-party shares the issuer already holds.",
                  ko
                    ? "이 차이가 의미하는 바는 크다. CB와 BW는 발행사에게 자본 조달 수단이지만 기존 주주의 지분을 희석시킨다. EB는 발행사에게 보유 주식을 분산 매각하는 수단이지만 자사 주식을 전혀 희석시키지 않는다. 따라서 CB/BW는 '성장 자금이 필요할 때', EB는 '보유 주식을 현금화하고 싶을 때' 선택한다."
                    : "This distinction matters enormously. CB and BW are capital-raising tools that dilute existing shareholders. EB is a stake monetization tool that doesn't touch the issuer's own equity base at all. So CB/BW are chosen when the issuer needs growth capital; EB when the issuer wants to monetize an existing investment.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <ComparisonTable ko={ko} />
            <AnalogyBox ko={ko} />
          </motion.section>

          {/* Ch.3 — 작동 메커니즘 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 3" : "Section 3"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "EB의 작동 메커니즘" : "How an EB Works — The Mechanics"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            {/* 발행 구조 예시 */}
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "발행 구조 예시 — SoftBank × Alibaba EB" : "Structure Example — SoftBank × Alibaba EB"}
                </p>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: (ko: boolean) => ko ? "발행사 (SoftBank)" : "Issuer (SoftBank)",
                    items: [
                      ko ? "Alibaba 주식 10% 이상 보유" : "Holds 10%+ of Alibaba shares",
                      ko ? "EB 발행: $5B, 쿠폰 0%, 만기 3년" : "Issues EB: $5B, 0% coupon, 3-year maturity",
                      ko ? "즉시 $5B 현금 조달" : "Immediately raises $5B cash",
                      ko ? "Alibaba 직접 매도 충격 회피" : "Avoids block sale market impact",
                    ],
                    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
                    tc: "text-blue-800 dark:text-blue-200",
                  },
                  {
                    title: (ko: boolean) => ko ? "투자자" : "Investor",
                    items: [
                      ko ? "채권으로서 원금 보호 (Bond Floor)" : "Principal protection as bond (Bond Floor)",
                      ko ? "교환가: Alibaba 현재가 +20%" : "Exchange price: Alibaba current +20%",
                      ko ? "Alibaba 주가 상승 시 교환으로 수익" : "Profit via exchange if Alibaba rises",
                      ko ? "쿠폰 0% = 옵션 가치에 대한 비용" : "0% coupon = cost for option value",
                    ],
                    color: "border-violet-200 dark:border-violet-700 bg-violet-50/60 dark:bg-violet-900/20",
                    tc: "text-violet-800 dark:text-violet-200",
                  },
                ].map((side, i) => (
                  <div key={i} className={`rounded-xl border p-4 ${side.color}`}>
                    <p className={`text-[13px] font-black mb-3 ${side.tc}`}>{side.title(ko)}</p>
                    <ul className="space-y-1.5">
                      {side.items.map((item, j) => (
                        <li key={j} className="flex gap-2 text-[12px] text-gray-600 dark:text-gray-400">
                          <span className={`flex-shrink-0 font-bold ${side.tc}`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "EB의 핵심 조건 세 가지: ① 교환가(Exchange Price) — 보통 발행 시점 담보 주가 대비 15~30% 프리미엄으로 설정된다. 투자자는 이 가격에 주식을 취득할 권리를 갖는다. ② 쿠폰(Coupon) — 교환 옵션의 가치만큼 쿠폰을 낮게 설정한다. 0% 쿠폰도 흔하다. ③ 만기(Maturity) — 보통 3~5년이며, 만기까지 교환하지 않으면 원금이 상환된다."
                    : "Three key EB parameters: ① Exchange Price — typically set at 15–30% premium to the underlying stock at issuance. Investors have the right to receive shares at this price. ② Coupon — reduced in proportion to the option value embedded in the exchange right. Zero-coupon EBs are common. ③ Maturity — usually 3–5 years; if unexercised, principal is repaid at maturity.",
                  ko
                    ? "세금 측면도 중요하다. EB 발행사 입장에서는 직접 주식을 매각하는 것과 달리 채권 발행으로 처리되어 즉각적인 자본이득세가 발생하지 않는 경우가 많다. 교환이 실제로 일어나는 시점에 과세되는 구조다. 단, 국가별 세법이 다르므로 전문가 확인이 필요하다."
                    : "Tax treatment is also significant. From the issuer's perspective, EB issuance is treated as a bond — not an equity sale — so immediate capital gains tax may be deferred until the actual exchange occurs. Tax rules vary significantly by jurisdiction, so expert review is essential.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <PayoffDiagram ko={ko} />
          </motion.section>

          {/* Ch.4 — SoftBank × Alibaba */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 4" : "Section 4"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "SoftBank의 Alibaba EB 시리즈 — 세계 최대 규모" : "SoftBank's Alibaba EB Series — The World's Largest"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "SoftBank는 1999년 Alibaba에 $20M을 투자했다. 2014년 Alibaba IPO 당시 이 지분의 가치는 $60B을 넘었다. 전설적인 투자였지만, 문제는 '어떻게 팔 것인가'였다. Alibaba 주식을 시장에서 직접 매도하면 주가가 폭락해 제값을 받지 못한다. EB는 이 딜레마를 해결하는 최적의 도구였다."
                    : "SoftBank invested $20M in Alibaba in 1999. By Alibaba's 2014 IPO, that stake was worth over $60B. A legendary investment — but the challenge was 'how to exit.' Selling Alibaba shares directly in the market would tank the stock, destroying the sale price. EB was the ideal solution to this dilemma.",
                  ko
                    ? "SoftBank의 전략은 명쾌했다: Alibaba 주가 상승 시에는 투자자가 교환을 행사해 SoftBank가 Alibaba 지분을 정리하고, 주가 하락 시에는 투자자가 교환을 포기해 SoftBank가 계속 Alibaba 주식을 보유한다. EB는 발행사에게 주가 방향에 따라 자동으로 포지션이 조정되는 옵션성 출구 전략이다."
                    : "SoftBank's strategy was elegant: if Alibaba's stock rises, investors exercise, SoftBank exits the stake; if the stock falls, investors don't exercise, SoftBank retains the shares. EB gave SoftBank an optionality-embedded exit strategy that automatically adjusts to price direction.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <SoftBankChart ko={ko} />

            {/* 전략적 의미 카드 */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: (ko: boolean) => ko ? "Alibaba 주가 하락 시" : "If Alibaba Stock Falls",
                  desc:  (ko: boolean) => ko
                    ? "투자자가 교환 미행사 → SoftBank가 원금 상환 → SoftBank는 계속 Alibaba 보유 → 향후 주가 회복 시 재시도 가능"
                    : "Investors don't exercise → SoftBank repays principal → SoftBank retains Alibaba shares → Can retry when price recovers",
                  icon: "📉",
                  color: "border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20",
                  tc: "text-red-700 dark:text-red-300",
                },
                {
                  title: (ko: boolean) => ko ? "Alibaba 주가 상승 시" : "If Alibaba Stock Rises",
                  desc:  (ko: boolean) => ko
                    ? "투자자가 교환 행사 → SoftBank가 Alibaba 주식 납부 → SoftBank가 Alibaba 지분 정리 → 현금화 완료"
                    : "Investors exercise → SoftBank delivers Alibaba shares → SoftBank exits the Alibaba stake → Monetization complete",
                  icon: "📈",
                  color: "border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20",
                  tc: "text-green-700 dark:text-green-300",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                  className={`rounded-xl border p-4 ${card.color}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{card.icon}</span>
                    <p className={`text-[13px] font-black ${card.tc}`}>{card.title(ko)}</p>
                  </div>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc(ko)}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Ch.5 — 한국 EB 시장 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 5" : "Section 5"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "한국 EB 시장 — 현대차그룹 계열사 구조" : "Korean EB Market — Hyundai Motor Group Case"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "한국 EB 시장은 재벌 계열사 간 지분 구조 조정 수단으로 발전했다. 현대차그룹의 경우 현대모비스가 현대기아차 주식을 다량 보유하고 있다. 이 지분을 EB 담보로 활용하면 현대모비스는 유동성을 확보하면서 계열사 지분 구조를 점진적으로 조정할 수 있다."
                    : "Korea's EB market evolved primarily as a tool for intra-chaebol shareholding restructuring. In the Hyundai Motor Group, Hyundai Mobis holds large stakes in Hyundai and Kia. Using these stakes as EB collateral allows Mobis to raise liquidity while gradually restructuring the group's ownership structure.",
                  ko
                    ? "한국 EB의 또 다른 용도는 순환출자 해소다. 공정거래위원회의 순환출자 규제로 인해 대기업 계열사들은 상호 지분을 정리해야 하는 압박을 받고 있다. EB를 활용하면 시장 충격 없이 지분을 분산 매각하면서 규제 준수와 유동성 확보를 동시에 달성할 수 있다. 외국인 투자자에게는 한국 대기업 우량 계열사 주식에 대한 노출(exposure)을 제공한다는 측면에서 수요도 있다."
                    : "Another Korean EB use case is circular shareholding resolution. Chaebol subsidiaries face pressure from the FTC to unwind cross-shareholdings. EBs allow them to gradually distribute holdings without market impact while achieving regulatory compliance and liquidity simultaneously. There is also investor demand for EB as a way to gain exposure to premium Korean conglomerate subsidiaries.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <PracticeBox ko={ko} />
          </motion.section>

          {/* Ch.6 — CB vs EB 선택 기준 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                {ko ? "Section 6" : "Section 6"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "CB vs EB — 언제 무엇을 선택하는가" : "CB vs EB — When to Choose Which"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "CB와 EB는 겉모습은 비슷하지만 목적이 완전히 다르다. CB는 '내 회사의 미래 성장에 투자자를 참여시키면서 낮은 금리로 자금을 조달'하는 수단이고, EB는 '내가 이미 보유한 타사 주식을 시장 충격 없이 분산 현금화'하는 수단이다. 이 목적의 차이가 모든 구조적 결정을 좌우한다."
                  : "CB and EB look similar but serve entirely different purposes. CB is about raising capital at a low rate while letting investors participate in your own company's growth. EB is about monetizing a third-party stake you already hold without market disruption. This difference drives every structural decision."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)} className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: (ko: boolean) => ko ? "EB를 선택하는 경우" : "Choose EB When...",
                  icon: "🔄",
                  items: [
                    (ko: boolean) => ko
                      ? "보유 주식(타사)을 처분하고 싶으나 시장 충격 피하고 싶을 때"
                      : "You want to exit a third-party stake without triggering a market selloff",
                    (ko: boolean) => ko
                      ? "자사 주식 희석 없이 자금 조달하고 싶을 때"
                      : "You need liquidity without diluting your own shareholders",
                    (ko: boolean) => ko
                      ? "계열사 지분 구조 조정이 필요할 때"
                      : "You need to restructure intra-group shareholdings",
                    (ko: boolean) => ko
                      ? "보유 지분에 대한 세제 혜택을 최대화하고 싶을 때"
                      : "You want to maximize tax efficiency on your existing holdings",
                  ],
                  color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
                  tc: "text-blue-700 dark:text-blue-300",
                  ic: "bg-blue-100 dark:bg-blue-900/40",
                },
                {
                  title: (ko: boolean) => ko ? "CB를 선택하는 경우" : "Choose CB When...",
                  icon: "↔️",
                  items: [
                    (ko: boolean) => ko
                      ? "자기 회사 성장 스토리를 투자자와 공유하고 싶을 때"
                      : "You want investors to share in your own company's upside",
                    (ko: boolean) => ko
                      ? "기존 주주 희석을 감수하면서 낮은 쿠폰을 원할 때"
                      : "You accept some dilution in exchange for a low/zero coupon",
                    (ko: boolean) => ko
                      ? "부채비율을 당장 높이지 않고 성장 자금이 필요할 때"
                      : "You need growth capital while delaying equity dilution",
                    (ko: boolean) => ko
                      ? "CB 전문 투자자와 헤지펀드 수요를 활용하고 싶을 때"
                      : "You want to access CB-dedicated fund and hedge fund demand",
                  ],
                  color: "border-teal-200 dark:border-teal-700 bg-teal-50/60 dark:bg-teal-900/20",
                  tc: "text-teal-700 dark:text-teal-300",
                  ic: "bg-teal-100 dark:bg-teal-900/40",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                  className={`rounded-xl border p-5 ${card.color}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${card.ic}`}>
                      {card.icon}
                    </span>
                    <p className={`text-[14px] font-black ${card.tc}`}>{card.title(ko)}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className={`flex-shrink-0 font-black mt-0.5 ${card.tc}`}>✓</span>
                        {item(ko)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Banker's note */}
            <motion.blockquote variants={fadeUp(0.2)} className="mt-8 border-l-4 pl-4" style={{ borderColor: accent }}>
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"EB 딜의 핵심은 담보 주식의 유동성이다. Alibaba처럼 일평균 거래량이 수십억 달러인 주식이 담보여야 EB가 제대로 작동한다. 비유동성 주식을 담보로 한 EB는 투자자에게 매력이 없다.\""
                  : "\"The key to any EB deal is the liquidity of the underlying stock. An EB works properly only when the collateral — like Alibaba — trades billions of dollars per day. An EB backed by illiquid shares is unattractive to any serious investor.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM MD, 글로벌 IB, EB 거래 다수 집행 경험, 2024" : "— ECM MD, Global IB, multiple EB transactions, 2024"}
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
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
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
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-convertible" : "/en/market-101/ecm-convertible"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "Ch.8 전환사채(CB) ↗" : "Ch.8 Convertible Bond ↗"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-warrant-bond" : "/en/market-101/ecm-warrant-bond"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "신주인수권부사채(BW) ↗" : "Warrant Bond (BW) ↗"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
