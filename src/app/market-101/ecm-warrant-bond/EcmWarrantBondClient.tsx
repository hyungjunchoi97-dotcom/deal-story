"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
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

// ── ECM Products Series Nav ────────────────────────────────────────────────────
const ECM_PRODUCTS_SERIES = [
  { slug: "ecm-warrant-bond",      title: (ko: boolean) => ko ? "BW" : "Bond with Warrant" },
  { slug: "ecm-buyback",           title: (ko: boolean) => ko ? "자사주매입" : "Buyback" },
  { slug: "ecm-dual-class",        title: (ko: boolean) => ko ? "차등의결권" : "Dual Class" },
  { slug: "ecm-tender-offer",      title: (ko: boolean) => ko ? "공개매수" : "Tender Offer" },
  { slug: "ecm-exchangeable-bond", title: (ko: boolean) => ko ? "EB 교환사채" : "Exchangeable Bond" },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",      en: "30-sec Summary"   },
  { id: "ch2", ko: "BW vs CB",       en: "BW vs CB"         },
  { id: "ch3", ko: "워런트 구조",    en: "Warrant Structure" },
  { id: "ch4", ko: "분리형 vs 비분리형", en: "Detachable vs Non" },
  { id: "ch5", ko: "리픽싱 함정",    en: "Refixing Trap"    },
  { id: "ch6", ko: "케이스스터디",   en: "Case Studies"     },
  { id: "ch7", ko: "글로벌 시장",    en: "Global Market"    },
];

// ── 30초 요약 Stats ────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "~$50B",
    label: (ko: boolean) => ko ? "글로벌 BW 연간 발행 규모" : "Global BW issuance / year",
    sub: (ko: boolean) => ko ? "2023년 기준 추정치" : "est. 2023",
  },
  {
    value: "1~3회",
    label: (ko: boolean) => ko ? "한국 BW 평균 리픽싱 횟수" : "Avg. refixings per Korean BW",
    sub: (ko: boolean) => ko ? "만기 동안 누적" : "cumulative over tenor",
  },
  {
    value: "70%+",
    label: (ko: boolean) => ko ? "한국 분리형 BW 비율" : "Detachable BW ratio in Korea",
    sub: (ko: boolean) => ko ? "전체 BW 발행 기준" : "of total BW issuance",
  },
  {
    value: "~95%",
    label: (ko: boolean) => ko ? "Tesla Warrant 행사 성공률 (2021)" : "Tesla Warrant exercise rate (2021)",
    sub: (ko: boolean) => ko ? "주가 급등으로 대부분 ITM" : "in-the-money at expiry",
  },
];

// ── CB vs BW 비교 표 ───────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    item: (ko: boolean) => ko ? "행사 후 채권" : "Bond after exercise",
    cb:   (ko: boolean) => ko ? "소멸" : "Extinguished",
    bw:   (ko: boolean) => ko ? "유지" : "Remains",
    cbRed: true,
  },
  {
    item: (ko: boolean) => ko ? "분리 유통" : "Separate trading",
    cb:   (ko: boolean) => ko ? "불가" : "Not possible",
    bw:   (ko: boolean) => ko ? "가능 (분리형)" : "Possible (detachable)",
    cbRed: true,
  },
  {
    item: (ko: boolean) => ko ? "주식 희석" : "Dilution",
    cb:   (ko: boolean) => ko ? "동일" : "Same",
    bw:   (ko: boolean) => ko ? "동일 + 채권 잔존" : "Same + bond remains",
    cbRed: false,
  },
  {
    item: (ko: boolean) => ko ? "발행사 자금 유입" : "Issuer cash inflow",
    cb:   (ko: boolean) => ko ? "1회" : "Once",
    bw:   (ko: boolean) => ko ? "최대 2회" : "Up to twice",
    cbRed: false,
  },
  {
    item: (ko: boolean) => ko ? "인기 지역" : "Popular region",
    cb:   (ko: boolean) => ko ? "글로벌" : "Global",
    bw:   (ko: boolean) => ko ? "한국 특히 많음" : "Korea especially",
    cbRed: false,
  },
];

// ── 워런트 페이오프 데이터 ─────────────────────────────────────────────────────
const PAYOFF_DATA = Array.from({ length: 21 }, (_, i) => {
  const price = i * 10;
  return {
    price,
    warrant: Math.max(price - 100, 0),
  };
});

// ── 리픽싱 차트 데이터 ────────────────────────────────────────────────────────
const REFIXING_DATA = [
  { month: "M0",  stock: 10000, exercise: 10000 },
  { month: "M3",  stock:  9000, exercise: 10000 },
  { month: "M6",  stock:  7000, exercise: 10000 },
  { month: "M6r", stock:  7000, exercise:  5600 }, // refixing triggered
  { month: "M9",  stock:  6200, exercise:  5600 },
  { month: "M12", stock:  5500, exercise:  5600 },
  { month: "M12r",stock:  5500, exercise:  4400 }, // second refixing
  { month: "M18", stock:  5800, exercise:  4400 },
  { month: "M24", stock:  6500, exercise:  4400 },
];

// ── 프로세스 스텝 (분리형 BW 발행) ────────────────────────────────────────────
const ISSUANCE_STEPS = [
  { num: "01", icon: "📋", label: (ko: boolean) => ko ? "이사회 결의" : "Board Resolution",     desc: (ko: boolean) => ko ? "발행 조건·배정 대상 확정" : "Fix terms & allocation target" },
  { num: "02", icon: "📄", label: (ko: boolean) => ko ? "증권신고서 제출" : "Prospectus Filing",   desc: (ko: boolean) => ko ? "금융위원회 심사" : "FSC review" },
  { num: "03", icon: "📅", label: (ko: boolean) => ko ? "배정 기준일 설정" : "Record Date Set",     desc: (ko: boolean) => ko ? "주주 명부 확정" : "Shareholder register fixed" },
  { num: "04", icon: "✍️", label: (ko: boolean) => ko ? "청약" : "Subscription",               desc: (ko: boolean) => ko ? "투자자 신청" : "Investor applications" },
  { num: "05", icon: "💳", label: (ko: boolean) => ko ? "납입" : "Payment",                    desc: (ko: boolean) => ko ? "대금 납입 완료" : "Funds transferred" },
  { num: "06", icon: "📈", label: (ko: boolean) => ko ? "BW 상장" : "BW Listing",              desc: (ko: boolean) => ko ? "채권 + 신주인수권증서 각각" : "Bond & warrant cert. separately" },
];

// ── 글로벌 BW 시장 특성 ───────────────────────────────────────────────────────
const GLOBAL_MARKET = [
  {
    region: (ko: boolean) => ko ? "한국" : "Korea",
    flag: "🇰🇷",
    activity: 5,
    note: (ko: boolean) => ko
      ? "가장 활성화. PE/VC 투자 시 BW 선호. 리픽싱 남용 이슈 지속"
      : "Most active. PE/VC favors BW. Refixing abuse issues persist",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
    text: "text-blue-700 dark:text-blue-300",
  },
  {
    region: (ko: boolean) => ko ? "일본" : "Japan",
    flag: "🇯🇵",
    activity: 3,
    note: (ko: boolean) => ko
      ? "Mezzanine BW 활발 — 무담보 중소기업 자금 조달 수단"
      : "Mezzanine BW active — unsecured SME financing",
    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
    text: "text-violet-700 dark:text-violet-300",
  },
  {
    region: (ko: boolean) => ko ? "미국" : "USA",
    flag: "🇺🇸",
    activity: 2,
    note: (ko: boolean) => ko
      ? "Warrant 단독 발행(SPAC Warrant 등)이 더 일반적. BW는 드묾"
      : "Standalone warrant (SPAC Warrants) more common. BW is rare",
    color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
    text: "text-orange-700 dark:text-orange-300",
  },
  {
    region: (ko: boolean) => ko ? "유럽" : "Europe",
    flag: "🇪🇺",
    activity: 2,
    note: (ko: boolean) => ko
      ? "비분리형 선호, 리픽싱 없는 구조 — 규제 환경이 투명성 강조"
      : "Non-detachable preferred, no refixing — regulatory focus on transparency",
    color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700",
    text: "text-teal-700 dark:text-teal-300",
  },
];

// ── BW 발행 체크리스트 ─────────────────────────────────────────────────────────
const CHECKLIST_ITEMS = [
  { ko: "행사가격이 시장가 대비 몇 % 프리미엄인가",   en: "How much premium above market price is the exercise price?" },
  { ko: "리픽싱 조항이 있는가 (있다면 최대 한도는)",   en: "Is there a refixing clause? If so, what is the floor?" },
  { ko: "분리형인가 비분리형인가",                    en: "Detachable or non-detachable?" },
  { ko: "제3자 배정인가 공모인가",                    en: "Private placement or public offering?" },
  { ko: "기존 주주 희석 시나리오는",                  en: "What does the dilution scenario look like for existing shareholders?" },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "BW와 EB(교환사채)의 차이는 무엇인가요?"
      : "What is the difference between BW and EB (Exchangeable Bond)?",
    a: (ko: boolean) => ko
      ? "BW(신주인수권부사채)는 발행사가 새로 주식을 발행해 투자자에게 제공합니다. 반면 EB(교환사채)는 발행사가 이미 보유 중인 다른 회사의 주식(또는 자사 보유 자기주식)을 교환 대상으로 씁니다. BW는 신주 발행이므로 희석이 발생하지만, EB는 기존 주식을 넘기는 구조라 희석이 없습니다. 대신 발행사가 교환 대상 주식을 미리 보유하고 있어야 한다는 제약이 있습니다."
      : "A BW (Bond with Warrant) grants the right to buy newly issued shares from the issuer. An EB (Exchangeable Bond) gives the right to exchange for shares the issuer already holds — typically shares in another company or treasury stock. BW involves new share issuance (and thus dilution), while EB transfers existing shares (no dilution). The constraint for EB is that the issuer must already hold the underlying shares.",
  },
  {
    q: (ko: boolean) => ko
      ? "신주인수권증서를 개인 투자자도 매매할 수 있나요?"
      : "Can individual investors trade warrant certificates?",
    a: (ko: boolean) => ko
      ? "분리형 BW의 경우, 신주인수권증서(BW증서)는 한국거래소(KRX)에 별도 상장됩니다. 따라서 주식처럼 개인이 증권사 앱을 통해 매매할 수 있습니다. 채권 부분은 장외에서 기관 중심으로 거래되지만, 신주인수권증서는 공개 시장에서 소액 투자자도 접근 가능합니다. 단, 유동성이 낮아 스프레드가 넓고 변동성이 높을 수 있습니다."
      : "For detachable BWs, the warrant certificate is separately listed on the Korea Exchange (KRX) and trades just like a stock through a brokerage app. The bond portion trades OTC mainly among institutions, but the warrant certificate is accessible to retail investors in the public market. Note that liquidity tends to be low, resulting in wide bid-ask spreads and high volatility.",
  },
  {
    q: (ko: boolean) => ko
      ? "리픽싱이 없는 BW도 있나요?"
      : "Do BWs without refixing clauses exist?",
    a: (ko: boolean) => ko
      ? "있습니다. 리픽싱 조항은 의무가 아니며, 특히 공모 BW나 해외 기관 투자자 대상 발행에서는 리픽싱 없이 고정 행사가격으로 발행되는 경우가 많습니다. 한국에서는 2013년 이후 리픽싱 한도가 최대 70%(최초 행사가의 70% 이하로 내리지 못하도록)로 제한됐습니다. 투자자 입장에서는 리픽싱이 있는 BW가 하방 보호가 강하지만, 발행사 희석 위험은 더 큽니다."
      : "Yes. Refixing clauses are not mandatory. Public offering BWs and those targeting overseas institutional investors often carry a fixed exercise price with no refixing. In Korea, since 2013, refixing is capped: the exercise price cannot be lowered below 70% of the original price. From an investor perspective, refixing provides stronger downside protection, but it increases dilution risk for the issuer.",
  },
  {
    q: (ko: boolean) => ko
      ? "BW 발행 시 기존 주주들은 어떤 권리를 갖나요?"
      : "What rights do existing shareholders have when a BW is issued?",
    a: (ko: boolean) => ko
      ? "원칙적으로 기존 주주는 신주인수권(BW)에도 우선 배정받을 권리가 있습니다. 그러나 실무에서는 이사회 결의로 제3자 배정(特定人 배정)이 가능하며, 이 경우 기존 주주는 배제됩니다. 제3자 배정 시 행사가격이 시장가 대비 지나치게 낮거나 배정 대상이 대주주 특수관계인이면 소액주주 이익 침해 문제가 발생합니다. 상법상 불공정발행에 해당할 경우 발행 무효 소송을 제기할 수 있습니다."
      : "In principle, existing shareholders have preemptive rights for BW subscriptions as well. However, in practice, the board can resolve to issue BW to specific third parties via a private placement, bypassing existing shareholders entirely. When the exercise price is significantly below market value and the allocatee is related to the controlling shareholder, minority shareholder interests are harmed. If the issuance qualifies as unfair under Korean commercial law, shareholders may file a suit to nullify it.",
  },
  {
    q: (ko: boolean) => ko
      ? "SPAC Warrant와 일반 BW는 어떻게 다른가요?"
      : "How do SPAC Warrants differ from regular BWs?",
    a: (ko: boolean) => ko
      ? "SPAC Warrant는 채권에 붙어있지 않고 SPAC 유닛(주식 + Warrant)의 형태로 발행됩니다. 행사 조건도 다릅니다 — 일반 BW는 발행 후 일정 기간이 지나면 행사 가능하지만, SPAC Warrant는 합병 완료 후 30일이 경과해야 행사할 수 있습니다. 또한 SPAC Warrant는 일반적으로 리픽싱 조항이 없고, 행사가가 $11.50 등 고정된 경우가 많습니다. 구조적으로는 Warrant라는 이름을 공유하지만 발행 맥락과 경제적 특성이 전혀 다릅니다."
      : "SPAC Warrants are not attached to bonds but are issued as part of SPAC units (stock + warrant). Exercise conditions also differ — regular BWs can be exercised after a set period from issuance, but SPAC Warrants require 30 days post-merger closing before exercise. SPAC Warrants typically have no refixing and a fixed exercise price (e.g., $11.50). While they share the 'warrant' name structurally, the issuance context and economic characteristics are entirely different.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-convertible",           ko: "전환사채 (CB)",   en: "Convertible Bond"    },
  { slug: "ecm-exchangeable-bond",     ko: "교환사채 (EB)",   en: "Exchangeable Bond"   },
  { slug: "ecm-spac-direct",           ko: "SPAC",            en: "SPAC"                },
  { slug: "ecm-followon",              ko: "팔로우온",         en: "Follow-on"           },
  { slug: "ecm-overview",              ko: "ECM 개요",         en: "ECM Overview"        },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_PRODUCTS_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                item.slug === "ecm-warrant-bond"
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

function QuickStats({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
      {QUICK_STATS.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
          className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 text-center"
        >
          <p className="text-2xl font-black mb-1" style={{ color: ACCENT }}>{stat.value}</p>
          <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight mb-1">{stat.label(ko)}</p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500">{stat.sub(ko)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl border overflow-hidden" style={{ borderColor: ACCENT + "40" }}>
      <div className="px-5 py-3 border-b" style={{ background: ACCENT + "12", borderColor: ACCENT + "30" }}>
        <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>
          {ko ? "비유로 이해하기" : "Analogy"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "CB는 채권에 교환권이 붙어있는 쿠폰이다. 주식으로 바꾸는 순간 채권은 사라진다 — 한 번의 선택, 한 번의 거래."
            : "A CB is a bond with a conversion coupon attached. The moment you convert, the bond disappears — one choice, one transaction."}
        </p>
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "BW는 채권과 입장권이 따로 팔리는 패키지다. 입장권(신주인수권)을 행사해서 새 주식을 사도, 채권은 그대로 남는다. 발행사는 채권 발행 시 한 번, 신주인수권 행사 시 또 한 번 — 최대 두 번 돈을 받는 구조다."
            : "A BW is a package sold as separate parts: a bond and an admission ticket (warrant). Even after you use the ticket to buy new shares, the bond remains intact. The issuer collects cash twice at most: once when issuing the bond, again when the warrant is exercised."}
        </p>
      </div>
    </motion.div>
  );
}

function ComparisonTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "CB vs BW — 핵심 구조 비교" : "CB vs BW — Core Structure Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-1/3">
                {ko ? "구분" : "Item"}
              </th>
              <th className="text-center px-4 py-2.5 text-[10px] font-bold text-violet-500 uppercase tracking-widest">
                {ko ? "CB (전환사채)" : "CB (Convertible)"}
              </th>
              <th className="text-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                {ko ? "BW (신주인수권부사채)" : "BW (Bond with Warrant)"}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/60 dark:bg-gray-800/30"}`}>
                <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">{row.item(ko)}</td>
                <td className={`px-4 py-3 text-center font-semibold ${row.cbRed ? "text-red-500 dark:text-red-400" : "text-gray-600 dark:text-gray-300"}`}>
                  {row.cb(ko)}
                </td>
                <td className="px-4 py-3 text-center font-semibold" style={{ color: ACCENT }}>
                  {row.bw(ko)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function WarrantPayoffChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "워런트 페이오프 다이어그램 (행사가 100 기준)" : "Warrant Payoff Diagram (Exercise Price = 100)"}
        </p>
      </div>
      <div className="p-5">
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PAYOFF_DATA} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="price"
                tick={{ fontSize: 10, fill: "#9ca3af" }}
                label={{ value: ko ? "주가" : "Stock Price", position: "insideRight", offset: -4, fontSize: 10, fill: "#9ca3af" }}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#9ca3af" }}
                label={{ value: ko ? "워런트 가치" : "Warrant Value", angle: -90, position: "insideLeft", offset: 8, fontSize: 10, fill: "#9ca3af" }}
              />
              <Tooltip
                contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                formatter={(v: number) => [v, ko ? "워런트 가치" : "Value"]}
                labelFormatter={(l: number) => `${ko ? "주가" : "Price"}: ${l}`}
              />
              <ReferenceLine x={100} stroke="#f59e0b" strokeDasharray="4 2" label={{ value: ko ? "행사가" : "Strike", fontSize: 9, fill: "#f59e0b" }} />
              <Line
                type="linear"
                dataKey="warrant"
                stroke={ACCENT}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-2">
          {ko
            ? "주가 100 이하: 내재가치 0 (행사 무의미) · 주가 100 초과: 1:1 선형 이익"
            : "Below 100: intrinsic value zero (exercise worthless) · Above 100: linear 1:1 payoff"}
        </p>
      </div>
    </motion.div>
  );
}

function WarrantTerms({ ko }: { ko: boolean }) {
  const terms = [
    {
      term: (ko2: boolean) => ko2 ? "행사가격 (Exercise Price)" : "Exercise Price",
      def:  (ko2: boolean) => ko2 ? "신주를 살 수 있는 가격. 통상 발행 시 시장가 대비 10~30% 프리미엄으로 설정." : "Price at which new shares can be purchased. Typically set 10–30% above market price at issuance.",
    },
    {
      term: (ko2: boolean) => ko2 ? "행사 기간" : "Exercise Period",
      def:  (ko2: boolean) => ko2 ? "보통 발행 후 1개월~만기까지. 조기 행사에는 제한이 있음." : "Typically from 1 month post-issuance through maturity. Early exercise may be restricted.",
    },
    {
      term: (ko2: boolean) => ko2 ? "행사 비율" : "Warrant Coverage",
      def:  (ko2: boolean) => ko2 ? "BW 1개당 신주 몇 주를 살 수 있는가. 예: BW 1장으로 10주 신주 취득 가능." : "Number of new shares purchasable per warrant. e.g., 1 warrant entitles holder to buy 10 new shares.",
    },
    {
      term: (ko2: boolean) => ko2 ? "내재가치 (Intrinsic Value)" : "Intrinsic Value",
      def:  (ko2: boolean) => ko2 ? "max(주가 − 행사가, 0). 주가가 행사가 아래면 0." : "max(stock price − exercise price, 0). Zero when stock is below exercise price.",
    },
    {
      term: (ko2: boolean) => ko2 ? "시간가치 (Time Value)" : "Time Value",
      def:  (ko2: boolean) => ko2 ? "잔여 기간이 길수록 높음. 변동성이 클수록 시간가치도 상승 — Black-Scholes 옵션 이론 적용 영역." : "Higher when more time remains. Also rises with volatility — the domain of Black-Scholes option pricing.",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 space-y-3">
      {terms.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className="flex gap-3 p-4 rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900"
        >
          <span className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5" style={{ background: ACCENT }} />
          <div>
            <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-0.5">{t.term(ko)}</p>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{t.def(ko)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function DetachableExplainer({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 grid sm:grid-cols-2 gap-4">
      {/* 분리형 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-2xl border p-5 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <p className="text-[13px] font-black text-blue-800 dark:text-blue-200">
            {ko ? "분리형 (Detachable)" : "Detachable"}
          </p>
        </div>
        <ul className="space-y-1.5">
          {(ko
            ? [
                "채권과 신주인수권증서를 각각 별도로 유통",
                "투자자가 채권은 보유하고 BW증서만 매도 가능",
                "한국 BW의 80%+ 이상이 분리형",
                "문제: 제3자에게 헐값 매각 가능 — 이해충돌 우려",
              ]
            : [
                "Bond and warrant certificate trade separately",
                "Investor can hold bond and sell only the warrant",
                "80%+ of Korean BWs are detachable",
                "Risk: can be sold cheaply to insiders — conflict of interest",
              ]
          ).map((item, i) => (
            <li key={i} className="flex gap-2 text-[12px] text-blue-700 dark:text-blue-300">
              <span className="flex-shrink-0 text-blue-400">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 비분리형 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        className="rounded-2xl border p-5 bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
          <p className="text-[13px] font-black text-teal-800 dark:text-teal-200">
            {ko ? "비분리형 (Non-detachable)" : "Non-detachable"}
          </p>
        </div>
        <ul className="space-y-1.5">
          {(ko
            ? [
                "채권과 신주인수권이 항상 함께 유통",
                "신주인수권만 따로 팔 수 없음",
                "대주주에 의한 구조 악용 소지 낮음",
                "유럽 시장에서 선호되는 구조",
              ]
            : [
                "Bond and warrant always trade together",
                "Warrant cannot be sold separately",
                "Less room for controlling shareholder abuse",
                "Preferred structure in European markets",
              ]
          ).map((item, i) => (
            <li key={i} className="flex gap-2 text-[12px] text-teal-700 dark:text-teal-300">
              <span className="flex-shrink-0 text-teal-400">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function IssuanceTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "분리형 BW 발행 프로세스 (법적 절차)" : "Detachable BW Issuance Process (Legal Steps)"}
        </p>
      </div>
      <div className="p-5">
        <div className="hidden sm:flex items-start gap-0">
          {ISSUANCE_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < ISSUANCE_STEPS.length - 1 && (
                <div className="absolute top-4 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <div
                className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2 bg-white dark:bg-gray-950 shadow-sm border-2"
                style={{ borderColor: ACCENT + "80" }}
              >
                {step.icon}
              </div>
              <p className="text-[9px] font-black text-center mb-0.5" style={{ color: ACCENT }}>{step.num}</p>
              <p className="text-[10px] font-bold text-gray-800 dark:text-gray-200 text-center leading-tight px-1">{step.label(ko)}</p>
              <p className="text-[9px] text-gray-400 dark:text-gray-500 text-center leading-tight mt-0.5 px-1">{step.desc(ko)}</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden space-y-0">
          {ISSUANCE_STEPS.map((step, i) => (
            <div key={i} className="flex gap-3 items-start relative">
              {i < ISSUANCE_STEPS.length - 1 && (
                <div className="absolute left-4 top-8 w-px h-full bg-gray-200 dark:bg-gray-700" />
              )}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 shadow-sm flex-shrink-0 z-10"
                style={{ borderColor: ACCENT + "80" }}
              >
                {step.icon}
              </div>
              <div className="pb-5">
                <p className="text-[9px] font-black" style={{ color: ACCENT }}>{step.num}</p>
                <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{step.desc(ko)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function RefixingChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "리픽싱 발동 시 행사가 vs 주가 추이" : "Exercise Price vs Stock Price upon Refixing"}
        </p>
      </div>
      <div className="p-5">
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={REFIXING_DATA} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#9ca3af" }} />
              <YAxis
                domain={[3000, 11000]}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                tick={{ fontSize: 9, fill: "#9ca3af" }}
              />
              <Tooltip
                contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                formatter={(v: number) => [`₩${v.toLocaleString()}`, ""]}
              />
              <ReferenceLine y={7000} stroke="#f59e0b" strokeDasharray="4 2" label={{ value: ko ? "1차 리픽싱" : "1st Refixing", fontSize: 9, fill: "#f59e0b" }} />
              <ReferenceLine y={5500} stroke="#ef4444" strokeDasharray="4 2" label={{ value: ko ? "2차 리픽싱" : "2nd Refixing", fontSize: 9, fill: "#ef4444" }} />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
                name={ko ? "주가" : "Stock Price"}
              />
              <Line
                type="stepAfter"
                dataKey="exercise"
                stroke={ACCENT}
                strokeWidth={2.5}
                dot={false}
                name={ko ? "행사가격" : "Exercise Price"}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-4 justify-center mt-2 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-red-500 inline-block" />
            <span className="text-gray-500 dark:text-gray-400">{ko ? "주가" : "Stock Price"}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 inline-block" style={{ background: ACCENT }} />
            <span className="text-gray-500 dark:text-gray-400">{ko ? "행사가격" : "Exercise Price"}</span>
          </span>
        </div>
      </div>
      <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-3 border-t border-amber-100 dark:border-amber-800">
        <p className="text-[12px] text-amber-700 dark:text-amber-300 leading-relaxed">
          {ko
            ? "주가 하락 → 리픽싱 → 더 많은 신주 잠재 물량 → 추가 주가 하락 — 악순환의 고리. 2013년 이후 한국 최대 리픽싱 한도: 최초 행사가의 70%."
            : "Stock falls → refixing → more potential new shares → further price decline — a vicious cycle. Korean floor since 2013: no lower than 70% of original exercise price."}
        </p>
      </div>
    </motion.div>
  );
}

function RefixingMechanics({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "리픽싱 예시 계산" : "Refixing Calculation Example"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: (ko2: boolean) => ko2 ? "발행 시 행사가" : "Original exercise price", value: "₩10,000", sub: (ko2: boolean) => ko2 ? "기준점" : "baseline" },
            { label: (ko2: boolean) => ko2 ? "6개월 후 주가" : "Stock price at 6M", value: "₩7,000", sub: (ko2: boolean) => ko2 ? "30% 하락" : "−30% drop" },
            { label: (ko2: boolean) => ko2 ? "리픽싱 후 행사가" : "After refixing", value: "₩5,600", sub: (ko2: boolean) => ko2 ? "₩7,000 × 80%" : "₩7,000 × 80%" },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-4 text-center border ${i === 2 ? "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900"}`}>
              <p className={`text-xl font-black mb-1 ${i === 2 ? "" : "text-gray-800 dark:text-gray-200"}`} style={i === 2 ? { color: ACCENT } : {}}>
                {item.value}
              </p>
              <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 mb-0.5">{item.label(ko)}</p>
              <p className="text-[10px] text-gray-400">{item.sub(ko)}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-[12px] font-bold text-gray-600 dark:text-gray-400">
            {ko ? "왜 문제인가:" : "Why this is problematic:"}
          </p>
          {(ko
            ? [
                "① 주가 하락 → 리픽싱 → 잠재 신주 증가 → 추가 주가 하락 (악순환)",
                "② 대주주가 의도적으로 주가를 낮춰 리픽싱 유도 가능 (조작 의혹)",
                "③ 소액주주 희석 피해 — 발행사만 이득 (저가 발행 + 높은 주식 조달)",
              ]
            : [
                "① Price falls → refixing → more potential shares → further price fall (vicious cycle)",
                "② Controlling shareholder may intentionally depress stock to trigger refixing (manipulation suspicion)",
                "③ Minority shareholder dilution — issuer benefits at the expense of other shareholders",
              ]
          ).map((item, i) => (
            <p key={i} className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed pl-2">{item}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  const cases = [
    {
      emoji: "🎤",
      result: (ko2: boolean) => ko2 ? "⚠️ 논란 → 경영권 분쟁" : "⚠️ Controversy → Control Dispute",
      tier: (ko2: boolean) => ko2 ? "분리형 BW 악용 의혹" : "Detachable BW Abuse Allegation",
      title: (ko2: boolean) => ko2 ? "SM엔터테인먼트 BW 논란 (2022~2023)" : "SM Entertainment BW Controversy (2022–2023)",
      tagline: (ko2: boolean) => ko2
        ? "이수만 전 총괄 프로듀서 측 개인 회사에 유리한 조건으로 BW 발행 주장 → 하이브·카카오 경영권 분쟁으로 확전"
        : "Allegations that BWs were issued on favorable terms to a company linked to founder Lee Soo-man → escalated into HYBE vs Kakao control battle",
      lesson: (ko2: boolean) => ko2
        ? "BW는 구조 자체보다 누구에게 어떤 조건으로 발행하느냐가 핵심이다. 저가 행사가 + 분리형 + 제3자 배정 조합은 소액주주 이익 침해 도구가 될 수 있다."
        : "The critical question is not the BW structure itself but to whom and on what terms it is issued. Low exercise price + detachable + private placement to insiders is a combination that can harm minority shareholders.",
      color: "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
      labelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    },
    {
      emoji: "⚡",
      result: (ko2: boolean) => ko2 ? "✅ 성공 — 기관 대량 행사" : "✅ Success — Mass Institutional Exercise",
      tier: (ko2: boolean) => ko2 ? "글로벌 Warrant 성공 사례" : "Global Warrant Success Case",
      title: (ko2: boolean) => ko2 ? "Tesla Warrant 행사 (2021)" : "Tesla Warrant Exercise (2021)",
      tagline: (ko2: boolean) => ko2
        ? "Tesla 주가 $1,800+ 돌파 → $100~$300 행사가 범위의 기관 Warrant 대량 행사 → Tesla 현금 유입 + 행사 성공률 ~95%"
        : "Tesla stock surpassed $1,800 → institutional warrants in $100–$300 strike range mass exercised → Tesla cash inflow + ~95% exercise rate",
      lesson: (ko2: boolean) => ko2
        ? "실제 기업 가치 상승이 뒷받침될 때 Warrant 구조는 의도대로 작동한다. 발행사는 자본 조달 비용을 낮추고, 투자자는 레버리지 수익을 실현한다 — 제로섬이 아닌 윈-윈."
        : "When real enterprise value growth backs the structure, warrants work exactly as intended. The issuer lowers its cost of capital; the investor realizes leveraged returns — not zero-sum, but win-win.",
      color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
      labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    },
  ];

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {cases.map((cs, i) => (
        <motion.div key={i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
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
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ChecklistBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.2)} className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: ACCENT + "40" }}>
      <div className="px-5 py-3 border-b" style={{ background: ACCENT + "12", borderColor: ACCENT + "30" }}>
        <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>
          {ko ? "BW 발행 조건 검토 시 핵심 체크리스트" : "Key Checklist When Reviewing BW Issuance Terms"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-2.5">
        {CHECKLIST_ITEMS.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white mt-0.5"
              style={{ background: ACCENT }}
            >
              {i + 1}
            </span>
            <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? item.ko : item.en}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function GlobalMarketCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-3 sm:grid sm:grid-cols-2 min-w-max sm:min-w-0">
          {GLOBAL_MARKET.map((mkt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className={`flex-shrink-0 w-60 sm:w-auto rounded-xl border p-4 ${mkt.color}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{mkt.flag}</span>
                <p className={`text-[13px] font-black ${mkt.text}`}>{mkt.region(ko)}</p>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`h-1.5 rounded-full flex-1 ${n <= mkt.activity ? "" : "bg-gray-200 dark:bg-gray-700"}`}
                    style={n <= mkt.activity ? { background: ACCENT } : {}}
                  />
                ))}
              </div>
              <p className={`text-[11px] leading-relaxed ${mkt.text} opacity-80`}>{mkt.note(ko)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmWarrantBondClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-warrant-bond"
                  : "https://dealstory.io/en/market-101/ecm-warrant-bond",
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
              <span className="text-gray-600 dark:text-gray-300">{ko ? "BW 신주인수권부사채" : "Bond with Warrant"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM 상품 시리즈" : "ECM Products Series"}
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
                href="/market-101/ecm-warrant-bond"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-warrant-bond"
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
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 — 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "30초 요약 — BW를 숫자로 이해하기" : "30-Second Summary — BW in Numbers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "BW(신주인수권부사채, Bond with Warrant)는 채권에 신주인수권(Warrant)이 결합된 하이브리드 증권이다. CB(전환사채)와 자주 비교되지만 핵심 구조 차이가 있다 — CB는 전환 시 채권이 사라지는 반면, BW는 신주인수권을 행사해도 채권이 그대로 남는다."
                    : "A BW (Bond with Warrant) is a hybrid security that combines a bond with a warrant to subscribe for new shares. Often compared to a CB (Convertible Bond), the key structural difference is that converting a CB extinguishes the bond, while exercising a BW's warrant leaves the bond fully intact.",
                  ko
                    ? "한국에서 BW는 특히 중소·중견기업과 PE/VC 투자에서 빈번하게 사용된다. 분리형 BW가 80% 이상을 차지하며, 리픽싱 조항의 남용이 오랜 규제 이슈로 남아 있다."
                    : "In Korea, BWs are especially common among small-to-mid cap companies and in PE/VC investments. Detachable BWs account for over 80% of issuance, and refixing clause abuse has been a persistent regulatory concern.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <QuickStats ko={ko} />
          </motion.section>

          {/* Ch.2 — BW vs CB */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "BW vs CB — 구조의 핵심 차이" : "BW vs CB — The Core Structural Difference"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "CB와 BW는 모두 '채권 + 주식 옵션' 구조지만, 옵션 행사 후의 결과가 근본적으로 다르다. CB에서 투자자가 전환권을 행사하면 채권이 소멸하고 주식이 생긴다 — 하나의 증권이 다른 형태로 바뀐다. BW에서는 신주인수권(Warrant)만 따로 행사되고, 채권은 계속 존재한다."
                    : "Both CBs and BWs combine a bond with an equity option, but what happens after exercise is fundamentally different. When a CB investor converts, the bond is extinguished and shares appear — one security morphs into another. In a BW, only the warrant is exercised; the bond continues to exist independently.",
                  ko
                    ? "발행사 입장에서 이 차이는 크다. CB 전환 시 부채가 자본으로 전환되어 자금을 한 번만 받는다. BW는 발행 시 채권 납입금, 신주인수권 행사 시 다시 주식 납입금 — 최대 두 번 자금이 유입된다. 투자자는 이를 알고 프리미엄을 요구하기 때문에 쿠폰 금리가 CB보다 낮게 설정된다."
                    : "From the issuer's perspective, this difference is significant. CB conversion converts debt to equity, giving the issuer cash only once. A BW gives cash at bond issuance and again when the warrant is exercised — up to two injections. Investors price this in and demand a premium, which is why BW coupons are typically lower than equivalent CBs.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko} />
            <ComparisonTable ko={ko} />
          </motion.section>

          {/* Ch.3 — 워런트 구조 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "신주인수권(Warrant)의 구조" : "How the Warrant Works"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "신주인수권(Warrant)은 미리 정해진 행사가격으로 새 주식을 살 수 있는 권리다. 행사가격(Strike Price)이 현재 주가보다 낮으면 '내가격(In-the-Money, ITM)', 높으면 '외가격(Out-of-the-Money, OTM)'이다. ITM Warrant를 행사하면 즉시 시장가와의 차이만큼 수익이 발생한다."
                    : "A warrant is the right to purchase new shares at a predetermined exercise price (strike price). If the strike is below the current market price, the warrant is 'in-the-money (ITM)'; above, it is 'out-of-the-money (OTM)'. Exercising an ITM warrant immediately generates a gain equal to the difference.",
                  ko
                    ? "워런트의 가치는 내재가치와 시간가치로 구성된다. 내재가치는 max(주가 − 행사가, 0)이며, 시간가치는 잔여 행사 기간과 변동성에 의해 결정된다. Black-Scholes 모델로 이론 가격을 산정할 수 있지만, 분리형 BW증서의 경우 시장 수급에 따라 이론가와 괴리가 크게 발생하기도 한다."
                    : "Warrant value consists of intrinsic value and time value. Intrinsic value is max(stock price − strike, 0); time value is driven by remaining life and volatility. While Black-Scholes provides a theoretical price, detachable warrant certificates often trade with significant premiums or discounts to theoretical value due to market supply/demand dynamics.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <WarrantTerms ko={ko} />
            <WarrantPayoffChart ko={ko} />
          </motion.section>

          {/* Ch.4 — 분리형 vs 비분리형 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "분리형 vs 비분리형 — 유통 구조의 차이" : "Detachable vs Non-detachable — How They Trade"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "한국에서 BW의 가장 중요한 분류 기준은 '분리 가능 여부'다. 분리형 BW는 채권(Bond)과 신주인수권증서(Warrant Certificate)를 따로 발행·유통한다. 투자자는 채권만 보유하고 신주인수권증서는 시장에서 매도할 수 있다."
                    : "In Korea, the most important classification for BWs is detachability. Detachable BWs issue and trade the bond and warrant certificate separately. Investors can hold the bond while selling the warrant certificate in the market.",
                  ko
                    ? "분리형 구조의 문제는 신주인수권증서가 제3자에게 넘어갈 때 발생한다. 대주주나 이사회가 지인에게 헐값에 BW를 발행하고, 그 지인이 신주인수권증서만 따로 매도하거나 행사해서 부당 이익을 취하는 구조가 가능하다. 이것이 SM엔터테인먼트 BW 논란의 핵심이었다."
                    : "The problem with detachable structures emerges when warrant certificates transfer to third parties. A controlling shareholder or board can issue BWs at low prices to insiders, who then separately sell or exercise only the warrant certificates for improper gains. This was at the heart of the SM Entertainment BW controversy.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <DetachableExplainer ko={ko} />
            <IssuanceTimeline ko={ko} />
          </motion.section>

          {/* Ch.5 — 리픽싱 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "리픽싱(Refixing)의 함정" : "The Refixing Trap"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "리픽싱(Refixing)은 주가가 하락하면 신주인수권의 행사가격을 자동으로 낮추는 조항이다. 발행 시 정한 행사가격보다 주가가 일정 수준 아래로 내려가면 행사가격도 함께 내려간다. 투자자 보호 장치로 설계됐지만, 한국에서는 오히려 남용의 도구가 됐다."
                    : "Refixing is a clause that automatically lowers the warrant's exercise price when the stock price falls. When the market price drops below a certain threshold relative to the original exercise price, the exercise price is adjusted downward as well. Designed as an investor protection mechanism, it has instead become a tool for abuse in Korea.",
                  ko
                    ? "리픽싱의 악순환: 주가 하락 → 리픽싱 발동 → 잠재 신주 발행량 증가 → 희석 우려로 추가 주가 하락 → 다시 리픽싱. 더 심각한 문제는 대주주가 의도적으로 주가를 낮춰 리픽싱을 유도하고, 저가 신주인수권을 행사해 이익을 취할 수 있다는 점이다. 이를 차단하기 위해 한국은 2013년 이후 최대 리픽싱 한도를 최초 행사가의 70%로 제한했다."
                    : "The refixing vicious cycle: stock falls → refixing triggered → more potential new shares → dilution fears cause further price decline → more refixing. More seriously, controlling shareholders can intentionally depress the stock price to trigger refixing and then exercise warrants at a lower price for profit. Korea capped refixing at 70% of the original exercise price starting in 2013 to curb this.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <RefixingMechanics ko={ko} />
            <RefixingChart ko={ko} />
          </motion.section>

          {/* Ch.6 — 케이스스터디 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "케이스스터디 — SM엔터테인먼트 논란 vs Tesla Warrant 성공"
                  : "Case Studies — SM Entertainment Controversy vs Tesla Warrant Success"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "같은 BW 구조라도 누구에게, 어떤 조건으로, 어떤 의도로 발행하느냐에 따라 결과가 전혀 달라진다. 한국의 실패 사례와 글로벌 성공 사례를 대비한다."
                : "The same BW structure produces radically different outcomes depending on who receives it, on what terms, and with what intent. A Korean failure case vs. a global success case."}
            </motion.p>

            <CaseStudyCards ko={ko} />
            <ChecklistBox ko={ko} />
          </motion.section>

          {/* Ch.7 — 글로벌 시장 */}
          <motion.section id="ch7" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.7</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "글로벌 BW 시장 — 지역별 특성" : "Global BW Market — Regional Characteristics"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "BW는 전 세계적으로 활용되지만 지역마다 사용 방식, 선호 구조, 규제 환경이 다르다. 한국이 가장 활성화된 BW 시장이며, 미국에서는 SPAC Warrant 등 단독 워런트 형태가 더 일반적이다. 일본은 중소기업 메자닌 파이낸싱 수단으로 활용하고, 유럽은 비분리형·무리픽싱 구조를 선호한다."
                    : "BWs are used globally but with markedly different structures, preferences, and regulatory environments by region. Korea has the most active BW market. The US favors standalone warrants (e.g., SPAC warrants). Japan uses BWs as mezzanine financing for SMEs. Europe prefers non-detachable, no-refixing structures.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <GlobalMarketCards ko={ko} />

            <motion.blockquote variants={fadeUp(0.2)} className="mt-8 border-l-4 pl-4" style={{ borderColor: ACCENT + "80" }}>
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"한국의 BW 시장은 세계 어디서도 찾기 어려운 독특한 생태계다. 분리형 구조와 리픽싱 조합은 투자자에게는 보호막이지만, 잘못 설계되면 기업 지배구조를 훼손하는 도구가 된다.\""
                  : "\"Korea's BW market is a unique ecosystem not easily found elsewhere in the world. The combination of detachable structure and refixing provides a safety net for investors but can become a tool for undermining corporate governance when poorly designed.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM 구조화 전문가, 서울, 2024" : "— ECM structuring specialist, Seoul, 2024"}
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
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={`${ko ? "" : "/en"}/market-101/ecm-exchangeable-bond`}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "EB 교환사채 →" : "Exchangeable Bond →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
