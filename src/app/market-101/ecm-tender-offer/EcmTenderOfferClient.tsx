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
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

// ── Types ──────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Constants ──────────────────────────────────────────────────────────────────
const ACCENT = "#3182f6";
const THIS_CH = "ecm-tender-offer";

// ── Animation ──────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

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

// ── ECM Products Series Nav (5 articles) ───────────────────────────────────────
const ECM_PRODUCTS_SERIES = [
  { slug: "ecm-buyback",       title: (ko: boolean) => ko ? "자사주매입"   : "Buyback"         },
  { slug: "ecm-tender-offer",  title: (ko: boolean) => ko ? "공개매수"     : "Tender Offer"    },
  { slug: "ecm-rights-issue",  title: (ko: boolean) => ko ? "유상증자"     : "Rights Issue"    },
  { slug: "ecm-abb-execution", title: (ko: boolean) => ko ? "ABB 실행"     : "ABB Execution"   },
  { slug: "ecm-warrant-bond",  title: (ko: boolean) => ko ? "신주인수권부사채" : "Warrant Bond" },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",       en: "30-Second Brief"    },
  { id: "ch2", ko: "공개매수란",      en: "What Is a Tender"   },
  { id: "ch3", ko: "강제공개매수",    en: "Mandatory Tender"   },
  { id: "ch4", ko: "프로세스",        en: "Process"            },
  { id: "ch5", ko: "방어 전략",       en: "Defense Tactics"    },
  { id: "ch6", ko: "Musk-Twitter",    en: "Musk-Twitter"       },
  { id: "ch7", ko: "SM엔터",          en: "SM Entertainment"   },
];

// ── 30-second stats ────────────────────────────────────────────────────────────
const QUICK_STATS = [
  { value: "30~50%", label: (ko: boolean) => ko ? "공개매수 평균 프리미엄 (시장가 대비)" : "Avg. tender offer premium vs market price" },
  { value: "95%+",   label: (ko: boolean) => ko ? "Squeeze-out 요건 (한국)" : "Squeeze-out threshold (Korea)" },
  { value: "25%",    label: (ko: boolean) => ko ? "강제공개매수 발동 기준 (한국)" : "Mandatory tender trigger (Korea)" },
  { value: "$44B",   label: (ko: boolean) => ko ? "Musk-Twitter 딜 규모, 프리미엄 38%" : "Musk-Twitter deal, 38% premium" },
];

// ── 공개매수 3가지 목적 ────────────────────────────────────────────────────────
const TENDER_PURPOSES = [
  {
    num: "01",
    icon: "🏆",
    label: (ko: boolean) => ko ? "경영권 인수 (M&A)" : "Control Acquisition (M&A)",
    desc:  (ko: boolean) => ko ? "기업 지배권 확보 — 적대적·우호적 M&A 모두 포함" : "Securing corporate control — both hostile and friendly M&A",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300",
  },
  {
    num: "02",
    icon: "🔒",
    label: (ko: boolean) => ko ? "상장폐지 (Going Private)" : "Going Private",
    desc:  (ko: boolean) => ko ? "MBO, PE 인수 후 비상장 전환 — 시장 규제 부담 해소" : "MBO or PE acquisition to delist — reducing public market burdens",
    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700 text-violet-700 dark:text-violet-300",
  },
  {
    num: "03",
    icon: "💰",
    label: (ko: boolean) => ko ? "자사주매입 (Buyback Tender)" : "Buyback Tender",
    desc:  (ko: boolean) => ko ? "대규모 자사주 취득 — 일반 시장 매수 대비 빠른 속도" : "Large-scale buyback — faster execution than open-market purchases",
    color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300",
  },
];

// ── 글로벌 강제공개매수 비교 ───────────────────────────────────────────────────
const MANDATORY_ROWS = [
  {
    country: (ko: boolean) => ko ? "한국"  : "Korea",
    trigger: (ko: boolean) => ko ? "25% + 한 달 내 5%+ 취득" : "25% + acquire 5%+ within 1 month",
    price:   (ko: boolean) => ko ? "6개월 가중평균" : "6-month VWAP",
    flag: "🇰🇷",
  },
  {
    country: (ko: boolean) => ko ? "영국"  : "UK",
    trigger: (ko: boolean) => ko ? "30%" : "30%",
    price:   (ko: boolean) => ko ? "12개월 최고가" : "12-month highest price",
    flag: "🇬🇧",
  },
  {
    country: (ko: boolean) => ko ? "EU"    : "EU",
    trigger: (ko: boolean) => ko ? "30%" : "30%",
    price:   (ko: boolean) => ko ? "12개월 최고가" : "12-month highest price",
    flag: "🇪🇺",
  },
  {
    country: (ko: boolean) => ko ? "미국"  : "USA",
    trigger: (ko: boolean) => ko ? "없음 (자발적만)" : "None (voluntary only)",
    price:   (ko: boolean) => ko ? "Williams Act 규정" : "Williams Act rules",
    flag: "🇺🇸",
  },
  {
    country: (ko: boolean) => ko ? "일본"  : "Japan",
    trigger: (ko: boolean) => ko ? "1/3 초과" : "Exceeds 1/3",
    price:   (ko: boolean) => ko ? "최근 최고가" : "Recent highest price",
    flag: "🇯🇵",
  },
];

// ── 공개매수 프로세스 단계 ─────────────────────────────────────────────────────
const PROCESS_STEPS = [
  { day: "D-0",       icon: "📢", label: (ko: boolean) => ko ? "의향 발표"       : "Announcement",      desc: (ko: boolean) => ko ? "공개매수 가격·수량·기간 공시" : "Disclose price, volume, and period"         },
  { day: "D+3~D+7",  icon: "🔍", label: (ko: boolean) => ko ? "공시 심사"       : "Regulatory Review", desc: (ko: boolean) => ko ? "금감원 심사" : "FSS review of the tender offer filing"                },
  { day: "D+20~D+40",icon: "📋", label: (ko: boolean) => ko ? "청약 기간"       : "Tender Period",     desc: (ko: boolean) => ko ? "주주 청약 여부 결정 (최소 20영업일)" : "Shareholders decide (min. 20 business days)" },
  { day: "종료 후",  icon: "📊", label: (ko: boolean) => ko ? "청약 집계"       : "Tabulation",        desc: (ko: boolean) => ko ? "주관 증권사 집계" : "Lead broker tallies all subscriptions"             },
  { day: "확인",     icon: "✅", label: (ko: boolean) => ko ? "조건 충족 확인"  : "Condition Check",   desc: (ko: boolean) => ko ? "최소 취득 비율 달성 여부" : "Verify minimum acquisition threshold met"         },
  { day: "결제",     icon: "💳", label: (ko: boolean) => ko ? "대금 지급"       : "Settlement",        desc: (ko: boolean) => ko ? "청약 주주에게 공개매수 가격 지급" : "Pay tendered shareholders at offer price"   },
  { day: "완료",     icon: "📝", label: (ko: boolean) => ko ? "등기 변경"       : "Registration",      desc: (ko: boolean) => ko ? "경영권 이전 등기" : "Transfer of control registered"                      },
];

// ── 방어 전략 ──────────────────────────────────────────────────────────────────
const DEFENSE_TACTICS = [
  {
    id: "poison-pill",
    icon: "💊",
    label: (ko: boolean) => ko ? "Poison Pill (독소 조항)" : "Poison Pill",
    desc: (ko: boolean) => ko
      ? "적대적 매수자가 일정 지분 초과 시 기존 주주에게 저가로 신주를 발행해 매수자 지분을 희석시키는 장치."
      : "When a hostile acquirer exceeds a threshold, new shares are issued cheaply to existing shareholders, diluting the acquirer's stake.",
    case: (ko: boolean) => ko ? "케이스: CAIS엔터 vs 사모펀드 적대적 M&A" : "Case: CAIS Entertainment vs. hostile PE",
    color: "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-700/60",
    tc: "text-red-700 dark:text-red-300",
  },
  {
    id: "white-knight",
    icon: "🤝",
    label: (ko: boolean) => ko ? "White Knight (백기사)" : "White Knight",
    desc: (ko: boolean) => ko
      ? "우호적인 제3자를 찾아 더 높은 가격에 인수하도록 유도함으로써 적대적 매수를 차단한다."
      : "Find a friendly third party willing to acquire at a higher price, blocking the hostile bidder.",
    case: (ko: boolean) => ko ? "케이스: SM엔터테인먼트 + 카카오 vs 하이브" : "Case: SM Entertainment + Kakao vs HYBE",
    color: "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-700/60",
    tc: "text-blue-700 dark:text-blue-300",
  },
  {
    id: "pacman",
    icon: "🟡",
    label: (ko: boolean) => ko ? "PAC-MAN Defense" : "PAC-MAN Defense",
    desc: (ko: boolean) => ko
      ? "역공개매수 — 방어 회사가 적대적 매수자에게 공개매수를 역으로 제시한다. 한국에서 드물지만 이론적으로 가능."
      : "Counter-tender — the target company launches a tender offer against the hostile bidder. Rare in Korea but theoretically possible.",
    case: (ko: boolean) => ko ? "이론적 가능성 — 실제 한국 사례 희소" : "Theoretical — rarely executed in Korea",
    color: "bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-700/60",
    tc: "text-amber-700 dark:text-amber-300",
  },
  {
    id: "crown-jewel",
    icon: "💎",
    label: (ko: boolean) => ko ? "Crown Jewel Defense" : "Crown Jewel Defense",
    desc: (ko: boolean) => ko
      ? "핵심 자산을 매각하거나 우호 세력에 이전해 공개매수의 매력을 감소시키는 전략."
      : "Divest or transfer core assets to a friendly party, reducing the acquisition's appeal to the hostile bidder.",
    case: (ko: boolean) => ko ? "극단적 방어 — 적대적 M&A 시 사용" : "Extreme defense — used under hostile attack",
    color: "bg-teal-50 dark:bg-teal-900/10 border-teal-200 dark:border-teal-700/60",
    tc: "text-teal-700 dark:text-teal-300",
  },
];

// ── SM엔터 주가 데이터 (공개매수 발표 전후 60일 가상) ─────────────────────────
const SM_PRICE_DATA = [
  { day: -30, price: 75000 },
  { day: -25, price: 78000 },
  { day: -20, price: 80000 },
  { day: -15, price: 82000 },
  { day: -10, price: 85000 },
  { day: -5,  price: 88000 },
  { day: 0,   price: 120000 },  // 하이브 공개매수 발표 (120,000원)
  { day: 5,   price: 135000 },
  { day: 10,  price: 142000 },
  { day: 15,  price: 148000 },  // 카카오 역공개매수 발표 (150,000원)
  { day: 20,  price: 149000 },
  { day: 25,  price: 145000 },
  { day: 30,  price: 140000 },  // 하이브 포기 발표
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS: { q: string; qEn: string; a: string; aEn: string }[] = [
  {
    q: "공개매수 가격보다 낮은 시장가에 파는 게 손해 아닌가요?",
    qEn: "Isn't it a loss to sell into the market below the tender-offer price?",
    a: "원칙적으로 그렇습니다. 공개매수가가 시장가보다 높게 설정되기 때문에 공개매수에 응하는 것이 일반적으로 유리합니다. 다만 예외가 있습니다. 첫째, 경쟁 공개매수가 예상될 경우 더 높은 가격을 기다리는 전략이 유효합니다. 둘째, 공개매수 성공 후 회사 가치가 크게 오를 것으로 예상한다면 응하지 않고 주주로 남는 선택도 있습니다. 셋째, Squeeze-out 임박 시에는 어차피 강제 매수되므로 응하지 않는 것도 선택지입니다. 결국 공개매수에 응할지 여부는 '지금 확정 수익'과 '미래 불확실한 수익' 중 무엇을 선택할지의 문제입니다.",
    aEn: "In principle, yes. Tender offer prices are set above market, so tendering is usually better. Three exceptions: ① if a competing offer is expected, waiting for a higher bid can pay off; ② if you expect significant company value uplift after deal close, staying on as a shareholder may be better; ③ if a Squeeze-out is imminent, you'll be force-purchased anyway, so declining is also viable. Ultimately it's a choice between 'certain gain now' and 'uncertain gain later.'",
  },
  {
    q: "소수 주주가 공개매수에 응하지 않으면 Squeeze-out 후 얼마를 받나요?",
    qEn: "What do minority shareholders receive if they don't tender and face a Squeeze-out?",
    a: "한국 상법상 Squeeze-out(소수주주 강제매수)은 지배주주가 발행 주식의 95% 이상을 취득했을 때 나머지 소수주주의 주식을 강제로 매수할 수 있는 제도입니다. 매수 가격은 공개매수 가격과 동일하거나 법원이 정한 '공정한 가격'으로 결정됩니다. 실무적으로 법원이 정한 가격이 공개매수 가격보다 높아진 사례도 있지만, 대부분 공개매수 가격 수준에서 결정됩니다. 소수주주 입장에서는 공개매수에 응하지 않아 시간을 끌어도 결국 비슷한 가격에 강제 매수되는 경우가 많으므로, 유동성과 확실성 측면에서 공개매수에 응하는 편이 유리합니다.",
    aEn: "Under Korean Commercial Code, Squeeze-out allows a controlling shareholder owning ≥95% of issued shares to force-purchase the remaining minority holdings. Price equals the tender-offer price or a court-determined 'fair price.' There are cases where court-determined prices exceeded the tender price, but most settle near the tender price. For minorities, delaying typically just results in force-purchase at a similar price, so tendering generally wins on liquidity and certainty.",
  },
  {
    q: "Poison Pill은 한국에서도 합법인가요?",
    qEn: "Are poison pills legal in Korea?",
    a: "한국에서 Poison Pill은 제한적으로만 허용됩니다. 미국식 신주인수권 계획(Rights Plan)을 통한 전형적인 Poison Pill은 한국 상법상 이사회의 신주 발행 권한 범위 내에서만 가능합니다. 주주총회 결의 없이 이사회만으로 대규모 신주를 발행하는 데 법적 제한이 있어, 완전한 미국식 Poison Pill은 도입이 어렵습니다. 실무적으로는 정관 개정을 통한 차등의결권(아직 한국 상장사에선 제한적), 황금주(Golden Share) 등 대안적 방어장치를 활용하거나, 우호 지분 확보를 통한 방어가 일반적입니다.",
    aEn: "Only in limited form. Classical US-style poison pills via shareholder rights plans are constrained in Korea: under Commercial Code, the board's authority to issue new shares is limited, making it difficult for the board alone to issue large-scale dilutive shares without shareholder approval. In practice, Korean companies use alternative defenses — dual-class shares (still limited for listed companies), Golden Shares — or secure friendly stakes preemptively.",
  },
  {
    q: "공개매수 신고 후 가격을 낮출 수 있나요?",
    qEn: "Can the bidder lower the tender price after filing?",
    a: "원칙적으로 불가능합니다. 공개매수 공시 후 가격을 낮추면 기존에 청약을 완료한 주주들에게 불이익을 주기 때문에 한국 자본시장법은 이를 금지하고 있습니다. 반대로 가격을 높이는 것은 가능합니다. 실제로 경쟁 공개매수 상황(예: SM엔터테인먼트 사례)에서는 가격 인상이 경쟁 수단으로 활용됩니다. 또한 공개매수 기간 연장은 금감원 승인하에 가능하며, 최소 취득 비율 조건을 변경하는 것도 일정 요건 내에서 허용됩니다. 공개매수 철회는 매우 제한적인 요건(중대한 사정 변경, 규제기관 불승인 등)에서만 가능합니다.",
    aEn: "In principle, no. Lowering the price after announcement would harm shareholders who already tendered — Korea's Capital Markets Act prohibits this. Raising the price is allowed and is actively used in competitive bid situations (e.g., the SM Entertainment case). Extending the offer period requires FSS approval. Modifying the minimum acceptance threshold is allowed within certain limits. Withdrawing the offer entirely requires very narrow grounds (material change, regulatory denial, etc.).",
  },
  {
    q: "주주가 공개매수에 응한 후 마음이 바뀌면 철회할 수 있나요?",
    qEn: "Can a shareholder withdraw a tender after submitting?",
    a: "네, 청약 철회는 공개매수 기간 중에는 원칙적으로 가능합니다. 한국 자본시장법은 청약 기간 종료 전에는 주주가 청약을 취소할 수 있도록 보장하고 있습니다. 다만 청약 종료일 이후에는 철회가 불가능하며, 대금이 이미 지급된 경우 취소할 수 없습니다. 실무적으로는 경쟁 공개매수가 등장하거나, 주가가 공개매수 가격 이상으로 오른 경우 청약을 취소하고 시장에서 더 높은 가격에 파는 전략을 선택하는 주주들이 있습니다. 이것이 SM엔터 사례처럼 경쟁 공개매수 상황에서 나타나는 주주들의 전형적인 행동 패턴입니다.",
    aEn: "Yes — withdrawal is generally allowed during the offer period. Korea's Capital Markets Act guarantees shareholders' right to cancel before the offer closes. After the offer's end date, however, withdrawal is barred, and once payment has been made, cancellation is impossible. In practice, when a competing offer emerges or the market price rises above the tender price, shareholders frequently withdraw and sell in the open market at a higher price. This is the typical behavioral pattern seen in competitive bid situations like the SM Entertainment case.",
  },
];

// ── Related Concepts ───────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-buyback",       ko: "자사주매입",      en: "Buyback"           },
  { slug: "ecm-rights-issue",  ko: "유상증자",        en: "Rights Issue"      },
  { slug: "ecm-followon",      ko: "팔로우온",        en: "Follow-on"         },
  { slug: "ecm-convertible",   ko: "전환사채",        en: "Convertible Bond"  },
  { slug: "ecm-overview",      ko: "ECM 개요",        en: "ECM Overview"      },
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
                ch.slug === THIS_CH
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

function ProductsNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2 mt-2">
      <div className="flex gap-1 py-1 min-w-max">
        {ECM_PRODUCTS_SERIES.map((item) => (
          <Link
            key={item.slug}
            href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold transition-colors ${
              item.slug === THIS_CH
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

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 min-w-[130px] rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-4 py-3 text-center">
      <p className="text-[20px] font-black text-blue-700 dark:text-blue-300 leading-none mb-1">{value}</p>
      <p className="text-[10px] text-blue-600 dark:text-blue-400 leading-tight">{label}</p>
    </div>
  );
}

function AnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/10 px-5 py-4">
      <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
        {ko ? "비유로 이해하기" : "Analogy"}
      </p>
      <p className="text-[14px] text-amber-800 dark:text-amber-200 leading-relaxed font-medium">
        {ko
          ? "공개매수는 아파트 단지 전체를 사려는 것과 같다."
          : "A tender offer is like trying to buy an entire apartment complex."}
      </p>
      <p className="text-[13px] text-amber-700 dark:text-amber-300 leading-relaxed mt-2">
        {ko
          ? "일반 주식 매수는 호호별로 협상하는 것이지만, 공개매수는 단지 전 세입자에게 공개적으로 \"우리가 프리미엄 주고 다 살게요\"라고 공시하는 것이다. 충분히 모이면 Squeeze-out으로 나머지 세입자도 강제 매수할 수 있다."
          : "Regular share purchases negotiate unit by unit. A tender offer announces publicly to all residents: \"We'll buy everything at a premium.\" Once enough tenants agree, the remaining holdouts can be compelled out via Squeeze-out."}
      </p>
    </motion.div>
  );
}

function PracticeBox({ ko }: { ko: boolean }) {
  const docItems = ko
    ? [
        "매수인 신원 및 목적",
        "매수 가격 결정 근거 (프리미엄 산출 방식)",
        "자금 조달 방법 (차입금·자기자금 비율)",
        "경영 계획 (상장 유지/폐지 여부)",
        "반대의견 처리 방안",
      ]
    : [
        "Identity and purpose of the acquirer",
        "Basis for offer price (premium calculation)",
        "Financing method (debt vs. equity ratio)",
        "Post-acquisition plans (maintain listing or delist)",
        "Treatment of dissenting shareholders",
      ];
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "실무 노트 — 공개매수신고서 핵심 내용" : "Practice Note — Key Contents of Tender Offer Statement"}
        </p>
      </div>
      <div className="p-5">
        <ul className="space-y-2">
          {docItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700 dark:text-gray-300">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-[10px] font-bold text-blue-700 dark:text-blue-300 mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function MandatoryTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "글로벌 강제공개매수 규정 비교" : "Global Mandatory Tender Offer Rules"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left px-5 py-3 font-bold text-gray-500 dark:text-gray-400">{ko ? "국가" : "Country"}</th>
              <th className="text-left px-5 py-3 font-bold text-gray-500 dark:text-gray-400">{ko ? "강제 매수 기준" : "Trigger"}</th>
              <th className="text-left px-5 py-3 font-bold text-gray-500 dark:text-gray-400">{ko ? "최소 가격 기준" : "Min. Price"}</th>
            </tr>
          </thead>
          <tbody>
            {MANDATORY_ROWS.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "" : "bg-gray-50/50 dark:bg-gray-900/30"}`}
              >
                <td className="px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <span>{row.flag}</span>
                  <span>{row.country(ko)}</span>
                </td>
                <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{row.trigger(ko)}</td>
                <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{row.price(ko)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
          {ko
            ? "한국 5%룰: 지분 5% 초과 취득 시 5일 내 공시 의무. 25%룰: 한 달 내 5%+ 취득으로 25% 초과 시 강제 공개매수 의무 발동."
            : "Korea 5% rule: disclose within 5 days of acquiring more than 5%. 25% rule: mandatory tender triggered when acquiring 5%+ within one month to cross 25%."}
        </p>
      </div>
    </motion.div>
  );
}

function ProcessTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="hidden sm:block">
        <div className="flex items-start gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < PROCESS_STEPS.length - 1 && (
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
                <p className="text-[9px] font-black text-blue-600 dark:text-blue-400 mb-0.5">{step.day}</p>
                <p className="text-[10px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label(ko)}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden space-y-0">
        {PROCESS_STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {i < PROCESS_STEPS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-blue-300 dark:border-blue-700 shadow-sm flex-shrink-0 z-10">
              {step.icon}
            </div>
            <div className="pb-5">
              <p className="text-[9px] font-black text-blue-600 dark:text-blue-400">{step.day}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DefenseCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {DEFENSE_TACTICS.map((tactic, i) => (
        <motion.div key={tactic.id} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${tactic.color}`}>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-2xl">{tactic.icon}</span>
            <p className={`text-[13px] font-black ${tactic.tc}`}>{tactic.label(ko)}</p>
          </div>
          <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            {tactic.desc(ko)}
          </p>
          <p className={`text-[10px] font-semibold border-l-2 pl-3 leading-relaxed ${tactic.tc} border-current opacity-60`}>
            {tactic.case(ko)}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function SmPriceChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "SM엔터테인먼트 주가 추이 — 공개매수 전후 60일" : "SM Entertainment Share Price — 60 Days Around Tender Offer"}
        </p>
      </div>
      <div className="p-5">
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={SM_PRICE_DATA} margin={{ top: 30, right: 8, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: "#9ca3af" }}
                tickFormatter={(v) => `D${v >= 0 ? "+" : ""}${v}`}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#9ca3af" }}
                tickFormatter={(v) => `${(v / 10000).toFixed(0)}만`}
                width={36}
              />
              <Tooltip
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={(value: any) => [`${(value as number).toLocaleString()}원`, ko ? "주가" : "Price"]}
                labelFormatter={(label) => `D${label >= 0 ? "+" : ""}${label}`}
                contentStyle={{ fontSize: 11, borderRadius: 8 }}
              />
              <ReferenceLine x={0}  stroke="#3182f6" strokeDasharray="4 3" label={{ value: ko ? "하이브 발표" : "HYBE bid",  position: "top", fontSize: 9, fill: "#3182f6" }} />
              <ReferenceLine x={15} stroke="#8b5cf6" strokeDasharray="4 3" label={{ value: ko ? "카카오 역공" : "Kakao bid", position: "top", fontSize: 9, fill: "#8b5cf6" }} />
              <ReferenceLine x={30} stroke="#ef4444" strokeDasharray="4 3" label={{ value: ko ? "하이브 포기" : "HYBE exits", position: "top", fontSize: 9, fill: "#ef4444" }} />
              <Line
                type="monotone"
                dataKey="price"
                stroke={ACCENT}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: ACCENT }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
          {ko
            ? "경쟁 공개매수에서 주가는 더 높은 입찰가를 향해 수렴한다. 카카오가 하이브보다 25% 높은 가격을 제시하자 시장은 즉각 카카오의 손을 들어주었다."
            : "In a contested tender, share price converges toward the highest bid. When Kakao offered 25% more than HYBE, the market immediately sided with Kakao."}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmTenderOfferClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-tender-offer"
                  : "https://dealstory.io/en/market-101/ecm-tender-offer",
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
                name: ko ? f.q : f.qEn,
                acceptedAnswer: { "@type": "Answer", text: ko ? f.a : f.aEn },
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
              <span className="text-gray-600 dark:text-gray-300">{ko ? "공개매수 실무" : "Tender Offer"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM — 경영권 거래의 ECM 측면" : "ECM — M&A via Capital Markets"}
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
                href="/market-101/ecm-tender-offer"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-tender-offer"
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
        <ProductsNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 — 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "30초 요약" : "30-Second Brief"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "핵심 수치부터 — 공개매수의 스케일" : "Key Numbers First — The Scale of Tender Offers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-3">
              {QUICK_STATS.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label(ko)} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="mt-6 pl-4 border-l-2" style={{ borderColor: ACCENT + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "공개매수(Tender Offer)는 인수자가 불특정 다수의 주주에게 일정 가격을 제시하고 주식을 공개적으로 매입하는 행위다. ECM에서 공개매수는 M&A와 자본시장이 교차하는 지점에 있으며, 경영권 거래에서 핵심 도구로 활용된다. Musk-Twitter($44B), SM엔터테인먼트 경쟁 공개매수(2023)가 대표적인 사례다."
                  : "A tender offer is when an acquirer publicly proposes to purchase shares from all shareholders at a specified price. In ECM, tender offers sit at the intersection of M&A and capital markets, serving as the primary tool in control transactions. The Musk-Twitter deal ($44B) and the 2023 SM Entertainment contested offer are defining cases."}
              </p>
            </motion.div>
          </motion.section>

          {/* Ch.2 — 공개매수란 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "공개매수란 — ECM과 M&A의 교차점" : "What Is a Tender Offer — Where ECM Meets M&A"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "공개매수는 인수자가 불특정 다수의 주주에게 공개적으로 주식 매입 의사를 표명하는 행위다. 장외에서 대주주와 협상하는 '블록딜'과 달리, 공개매수는 모든 주주에게 동일한 조건을 제시하는 공개 프로세스다. 이 때문에 투명성이 높고 법적 규제가 엄격하다.",
                      "공개매수가 ECM의 영역인 이유는 대규모 주식 거래가 자본시장의 가격 발견 기능을 통해 이루어지기 때문이다. 공개매수 가격은 단순한 협상 결과가 아니라 시장가에 대한 프리미엄(보통 30~50%)을 공시하는 행위이므로, 시장 전체에 신호를 보낸다.",
                    ]
                  : [
                      "A tender offer is a public declaration by an acquirer to purchase shares from any and all shareholders at a specified price. Unlike a block trade negotiated privately with a controlling shareholder, a tender offer presents identical terms to everyone — making it a highly transparent and tightly regulated process.",
                      "Tender offers belong to ECM because large-scale share transactions occur through the capital market's price discovery function. The offer price isn't simply a negotiated figure — it's a public premium (typically 30–50% above market) that sends a signal to the entire market.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko} />

            {/* 3가지 목적 */}
            <motion.div variants={fadeUp(0.2)} className="mt-8">
              <p className="text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-4">
                {ko ? "공개매수의 3가지 목적" : "Three Purposes of a Tender Offer"}
              </p>
              <div className="space-y-3">
                {TENDER_PURPOSES.map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.09, ease: EASE }}
                    className={`flex items-start gap-4 rounded-xl border p-4 ${item.color}`}
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-1">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[9px] font-black text-gray-400">{item.num}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-black mb-1">{item.label(ko)}</p>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Ch.3 — 강제공개매수 규정 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "강제공개매수 규정 — 5%룰·25%룰" : "Mandatory Tender Rules — The 5% and 25% Triggers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "한국 자본시장법은 특정 지분 취득 행위에 대해 강제공개매수 의무를 부과한다. 핵심은 25%룰이다. 투자자가 한 달 내에 5% 이상을 취득해 총 지분이 25%를 초과하게 되면, 나머지 지분에 대해 공개매수를 의무적으로 실시해야 한다. 단순히 한 달에 걸쳐 천천히 지분을 취득하면 이 규정을 피할 수 있다는 '우회로'가 논란이 되기도 한다.",
                      "의무 공개매수 가격은 최근 6개월 가중평균가의 100% 이상이어야 한다. 즉 시장에서 가장 비싼 가격에 샀던 가격보다 낮게 공개매수를 할 수 없다는 의미다. 이는 소수 주주를 보호하기 위한 규정이다.",
                    ]
                  : [
                      "Korean capital markets law imposes mandatory tender offer obligations for certain share acquisition behaviors. The 25% rule is the key threshold: if an investor acquires 5% or more within one month and total holdings exceed 25%, they must conduct a mandatory public tender for the remaining shares. The ability to avoid this by spreading purchases slowly over a month has been controversial.",
                      "The mandatory offer price must be at least 100% of the 6-month volume-weighted average price. In other words, the acquirer cannot offer less than what they paid at the market's peak — a rule designed to protect minority shareholders.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <MandatoryTable ko={ko} />
          </motion.section>

          {/* Ch.4 — 공개매수 프로세스 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "공개매수 프로세스 — D-0부터 등기까지" : "Tender Offer Process — D-0 to Registration"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "공개매수는 단순히 '우리 주식 삽니다'를 발표하는 행위가 아니다. 공개매수신고서를 금감원에 제출하고 심사를 받은 후, 법정 기간(최소 20영업일) 동안 청약을 받아야 한다. 이 과정에서 주관 증권사는 청약을 집계하고, 인수자는 최소 취득 비율 조건 충족 여부를 확인한다.",
                      "공개매수 문서(공개매수신고서)에는 매수인 신원과 목적, 가격 결정 근거, 자금 조달 방법, 경영 계획이 모두 공시된다. 이 문서 하나가 거래의 합법성과 투명성을 담보한다.",
                    ]
                  : [
                      "A tender offer is far more than announcing 'we will buy shares.' The acquirer must file a tender offer statement with the FSS and pass review, then accept subscriptions for a statutory period (minimum 20 business days). During this time, the lead broker tallies subscriptions and verifies whether the minimum acquisition condition is met.",
                      "The tender offer document discloses the acquirer's identity and purpose, the basis for the offer price, the financing structure, and post-acquisition plans. This single document anchors the transaction's legality and transparency.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <ProcessTimeline ko={ko} />
            <PracticeBox ko={ko} />
          </motion.section>

          {/* Ch.5 — 방어 전략 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "방어 전략 — 공개매수를 받는 회사의 대응" : "Defense Tactics — How Target Companies Fight Back"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "공개매수를 받는 회사(대상회사)는 수동적으로 당하기만 하지 않는다. 이사회는 주주 가치를 극대화하거나 경영권을 방어하기 위해 다양한 전술을 구사할 수 있다. 다만 한국에서는 일부 방어 전술이 법적으로 제한되어 있어, 선진국 대비 방어 옵션이 좁다."
                  : "Target companies don't have to accept a hostile bid passively. Their boards can deploy various tactics to maximize shareholder value or defend control. In Korea, some defensive tactics face legal constraints, leaving fewer options than in more permissive jurisdictions like the US."}
              </p>
            </div>

            <DefenseCards ko={ko} />
          </motion.section>

          {/* Ch.6 — Musk-Twitter */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "케이스: Musk-Twitter $44B" : "Case: Musk-Twitter $44B"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "2022년 Musk-Twitter 딜은 역사상 가장 극적인 공개매수 중 하나다. 지분 공시 지연, 계약 파기 시도, 법정 분쟁, 그리고 결국 원래 가격으로의 인수 완료까지 — 공개매수의 법적 구속력과 공시 의무의 엄격함을 보여주는 교과서 사례다."
                  : "The 2022 Musk-Twitter deal is one of the most dramatic tender offers in history. From delayed disclosure, attempted deal termination, court battle, to final closing at the original price — it is a textbook case showing the legal binding force of tender offers and the strictness of disclosure obligations."}
              </p>
            </div>

            {/* 타임라인 */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="space-y-0">
              {[
                {
                  date: "2022.01",
                  icon: "📈",
                  color: "border-gray-300 dark:border-gray-600",
                  title: (ko: boolean) => ko ? "지분 매입 시작" : "Share Accumulation Begins",
                  desc: (ko: boolean) => ko ? "Musk, Twitter 주식 매입 시작. 5% 공시 지연 → SEC 제재. SEC 규정상 5영업일 내 공시가 의무인데 10일 이상 지연." : "Musk begins acquiring Twitter shares. Delays 5% disclosure → SEC sanction. SEC rules require filing within 5 business days; he delayed over 10 days.",
                },
                {
                  date: "2022.04.04",
                  icon: "📢",
                  color: "border-blue-300 dark:border-blue-600",
                  title: (ko: boolean) => ko ? "9.2% 취득 공시" : "9.2% Stake Disclosed",
                  desc: (ko: boolean) => ko ? "지분 9.2% 취득 공시. Twitter 최대 주주 등극. 주가 급등." : "Discloses 9.2% stake. Becomes Twitter's largest shareholder. Share price surges.",
                },
                {
                  date: "2022.04.14",
                  icon: "💰",
                  color: "border-green-300 dark:border-green-600",
                  title: (ko: boolean) => ko ? "공개매수 의향 발표" : "Tender Offer Announced",
                  desc: (ko: boolean) => ko ? "$54.20/주 공개매수 의향 발표. 38% 프리미엄. \"Best and final offer\"." : "$54.20/share offer announced. 38% premium. Declared as 'best and final offer.'",
                },
                {
                  date: "2022.07",
                  icon: "⚖️",
                  color: "border-red-300 dark:border-red-600",
                  title: (ko: boolean) => ko ? "계약 파기 시도" : "Termination Attempt",
                  desc: (ko: boolean) => ko ? "Musk, \"Bot 계정\" 핑계로 계약 파기 선언. Twitter, Delaware 법원에 소송 제기. Musk 패소 위기." : "Musk declares termination citing 'bot accounts.' Twitter sues in Delaware Court. Musk faces likely defeat.",
                },
                {
                  date: "2022.10.27",
                  icon: "✅",
                  color: "border-blue-300 dark:border-blue-600",
                  title: (ko: boolean) => ko ? "최종 인수 완료" : "Acquisition Completed",
                  desc: (ko: boolean) => ko ? "$44B, 주당 $54.20로 인수 완료. 상장폐지. Twitter → X 리브랜딩." : "$44B total, $54.20/share as originally agreed. Delisted. Twitter rebranded to X.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.06)} className="flex gap-4 items-start relative">
                  {i < 4 && <div className="absolute left-[19px] top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-base bg-white dark:bg-gray-950 shadow-sm z-10 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="pb-6">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 mb-0.5">{item.date}</p>
                    <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title(ko)}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 교훈 박스 */}
            <motion.div variants={fadeUp(0.15)} className="mt-4 rounded-2xl border border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/10 px-5 py-4">
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
                {ko ? "교훈" : "Lessons"}
              </p>
              <ul className="space-y-2">
                {(ko
                  ? [
                      "지분 취득 공시 지연: SEC 규정 위반 → $150M 합의금",
                      "\"Bot 계정\" 핑계로 계약 파기 시도 → Delaware 법원에서 패소 위기",
                      "결국 원래 가격($54.20)으로 인수 완료 — 공개매수 계약서의 법적 구속력 확인",
                    ]
                  : [
                      "Delayed disclosure of stake: SEC violation → $150M settlement",
                      "Attempted termination citing 'bot accounts' → faced likely defeat in Delaware Court",
                      "Ultimately closed at original price ($54.20) — confirming the binding legal force of tender offer agreements",
                    ]
                ).map((lesson, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-amber-800 dark:text-amber-200">
                    <span className="flex-shrink-0 text-amber-500 mt-0.5">→</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.section>

          {/* Ch.7 — SM엔터테인먼트 */}
          <motion.section id="ch7" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.7</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "케이스: SM엔터테인먼트 경쟁 공개매수 (2023)" : "Case: SM Entertainment Contested Tender Offer (2023)"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "2023년 SM엔터테인먼트 경쟁 공개매수는 한국 역사상 가장 치열한 경영권 분쟁 중 하나다. SM 창업자 이수만과 카카오 연합이 하이브와 맞붙은 이 싸움은, 경쟁 공개매수에서 '가격'이 얼마나 결정적인지를 보여준다."
                  : "The 2023 SM Entertainment contested tender offer is one of the fiercest control disputes in Korean history. The battle between SM founder Lee Soo-man, Kakao's coalition, and HYBE demonstrated how decisive the offer price is in a contested tender."}
              </p>
            </div>

            {/* 경쟁 구도 */}
            <motion.div variants={fadeUp(0.1)} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-200 dark:border-blue-700/60 bg-blue-50 dark:bg-blue-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎵</span>
                  <p className="text-[13px] font-black text-blue-700 dark:text-blue-300">
                    {ko ? "하이브 (1차 공개매수)" : "HYBE (First Bid)"}
                  </p>
                </div>
                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "제시 가격" : "Offer price"}</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">{ko ? "주당 120,000원" : "₩120,000/share"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "목표 지분" : "Target stake"}</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">51.02%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "결과" : "Result"}</span>
                    <span className="font-bold text-red-600 dark:text-red-400">{ko ? "참여율 저조 → 포기" : "Low uptake → abandoned"}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-violet-200 dark:border-violet-700/60 bg-violet-50 dark:bg-violet-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💜</span>
                  <p className="text-[13px] font-black text-violet-700 dark:text-violet-300">
                    {ko ? "카카오 (역공개매수)" : "Kakao (Counter Bid)"}
                  </p>
                </div>
                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "제시 가격" : "Offer price"}</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">{ko ? "주당 150,000원" : "₩150,000/share"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "하이브 대비 프리미엄" : "Premium vs HYBE"}</span>
                    <span className="font-bold text-green-600 dark:text-green-400">+25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{ko ? "결과" : "Result"}</span>
                    <span className="font-bold text-violet-600 dark:text-violet-400">{ko ? "카카오 최대주주 등극" : "Kakao becomes largest shareholder"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <SmPriceChart ko={ko} />

            {/* 교훈 */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                {ko ? "교훈" : "Lessons"}
              </p>
              <ul className="space-y-2">
                {(ko
                  ? [
                      "경쟁 공개매수에서 가격이 핵심 — 더 높은 가격이 곧 승리",
                      "기존 대주주(이수만)의 지지 여부가 결정적 변수로 작용",
                      "시장은 항상 더 높은 가격을 제시한 측의 손을 들어준다",
                    ]
                  : [
                      "In a contested bid, price is decisive — the higher offer wins",
                      "The incumbent controlling shareholder's (Lee Soo-man's) endorsement was the pivotal variable",
                      "Markets always side with the higher bidder",
                    ]
                ).map((lesson, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 dark:text-gray-400">
                    <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: ACCENT }}>→</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={ACCENT} />
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
            <Link href={ko ? "/market-101/ecm-buyback" : "/en/market-101/ecm-buyback"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              ← {ko ? "자사주매입" : "Buyback"}
            </Link>
            <Link href={ko ? "/market-101/ecm-rights-issue" : "/en/market-101/ecm-rights-issue"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "유상증자" : "Rights Issue"} →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
