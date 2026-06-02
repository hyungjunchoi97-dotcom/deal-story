"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Cell,
} from "recharts";
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

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"        : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"      : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"      : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"  : "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"    : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"      : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"  : "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"    : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"    : "Ch.8 Convertible"},
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"    : "Ch.9 Intl"       },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC"       : "Ch.10 SPAC"      },
];

// ── ECM Products Series (5 articles) ──────────────────────────────────────────
const ECM_PRODUCTS_SERIES = [
  { slug: "ecm-followon",    title: (ko: boolean) => ko ? "팔로우온"    : "Follow-on"     },
  { slug: "ecm-convertible", title: (ko: boolean) => ko ? "전환사채"    : "Convertible"   },
  { slug: "ecm-rights-issue",title: (ko: boolean) => ko ? "유상증자"    : "Rights Issue"  },
  { slug: "ecm-buyback",     title: (ko: boolean) => ko ? "자사주매입"  : "Buyback"       },
  { slug: "ecm-tender-offer",title: (ko: boolean) => ko ? "공개매수"    : "Tender Offer"  },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",      en: "30-Second Brief"  },
  { id: "ch2", ko: "배당 vs 바이백", en: "Dividend vs Buyback" },
  { id: "ch3", ko: "3가지 방식",     en: "3 Methods"        },
  { id: "ch4", ko: "EPS 마법",       en: "EPS Magic"        },
  { id: "ch5", ko: "Apple 해부",     en: "Apple Anatomy"    },
  { id: "ch6", ko: "한국 특수성",    en: "Korea Specifics"  },
];

// ── S&P500 Buyback vs Dividend data ───────────────────────────────────────────
const BUYBACK_VS_DIV_DATA = [
  { year: "2010", buyback: 299, dividend: 252 },
  { year: "2011", buyback: 405, dividend: 282 },
  { year: "2012", buyback: 399, dividend: 310 },
  { year: "2013", buyback: 477, dividend: 349 },
  { year: "2014", buyback: 553, dividend: 375 },
  { year: "2015", buyback: 572, dividend: 404 },
  { year: "2016", buyback: 536, dividend: 410 },
  { year: "2017", buyback: 519, dividend: 428 },
  { year: "2018", buyback: 806, dividend: 462 },
  { year: "2019", buyback: 729, dividend: 484 },
  { year: "2020", buyback: 519, dividend: 484 },
  { year: "2021", buyback: 882, dividend: 512 },
  { year: "2022", buyback: 1260, dividend: 559 },
  { year: "2023", buyback: 795, dividend: 574 },
];

// ── Apple EPS vs Buyback Cumulative ───────────────────────────────────────────
const APPLE_EPS_BUYBACK = [
  { year: "2012", eps: 6.31,  cumBuyback: 0   },
  { year: "2013", eps: 5.68,  cumBuyback: 23  },
  { year: "2014", eps: 6.45,  cumBuyback: 68  },
  { year: "2015", eps: 9.22,  cumBuyback: 122 },
  { year: "2016", eps: 8.31,  cumBuyback: 168 },
  { year: "2017", eps: 9.21,  cumBuyback: 208 },
  { year: "2018", eps: 11.91, cumBuyback: 283 },
  { year: "2019", eps: 11.89, cumBuyback: 359 },
  { year: "2020", eps: 12.93, cumBuyback: 422 },
  { year: "2021", eps: 15.41, cumBuyback: 497 },
  { year: "2022", eps: 18.16, cumBuyback: 562 },
  { year: "2023", eps: 16.13, cumBuyback: 600 },
];

// ── Apple Annual Buyback ───────────────────────────────────────────────────────
const APPLE_ANNUAL_BUYBACK = [
  { year: "2012", amount: 0  },
  { year: "2013", amount: 23 },
  { year: "2014", amount: 45 },
  { year: "2015", amount: 54 },
  { year: "2016", amount: 46 },
  { year: "2017", amount: 40 },
  { year: "2018", amount: 75 },
  { year: "2019", amount: 76 },
  { year: "2020", amount: 63 },
  { year: "2021", amount: 75 },
  { year: "2022", amount: 65 },
  { year: "2023", amount: 38 },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS: { q: string; qEn: string; a: string; aEn: string }[] = [
  {
    q: "자사주매입이 주가를 무조건 올리는가",
    qEn: "Do buybacks always boost the stock price?",
    a: "그렇지 않습니다. 자사주매입은 EPS를 기계적으로 상승시키지만 주가 반응은 맥락에 따라 다릅니다. ① 저평가된 주식을 사는 경우라면 시장이 긍정적으로 반응합니다. ② 그러나 차입금으로 고평가된 주식을 사는 경우(2018~2019년 일부 미국 기업)에는 재무 리스크만 커집니다. ③ 경기 침체기에 현금을 소진하는 바이백은 유동성 위기를 초래할 수 있습니다. 자사주매입은 도구일 뿐이며, 사용 맥락(현금 여유·밸류에이션·사업 전망)이 결과를 좌우합니다.",
    aEn: "Not always. Buybacks mechanically raise EPS, but the share-price response depends on context. ① If shares are undervalued, the market reacts positively. ② When debt-financed buybacks happen at high valuations (some US firms in 2018–19), financial risk grows without real value creation. ③ In a downturn, depleting cash via buybacks can create liquidity stress. Buybacks are a tool — the context (cash position, valuation, business outlook) determines the outcome.",
  },
  {
    q: "적자 기업도 자사주매입을 할 수 있나",
    qEn: "Can a loss-making company buy back its shares?",
    a: "법적으로는 가능하지만 현실적으로는 드뭅니다. 미국 델라웨어주 법인법상 자사주매입의 재원은 잉여금(surplus) 또는 이익잉여금에서 충당해야 하므로 순자산이 음수인 상태에서는 불가합니다. 현금이 풍부한 적자 스타트업(예: 초기 Amazon)은 이론적으로 매입이 가능하나, 투자자들은 '왜 성장 투자 대신 바이백을 하느냐'는 의문을 제기합니다. 한국 상법도 배당 가능 이익 범위 내에서만 자사주 취득이 허용됩니다.",
    aEn: "Legally possible but rare in practice. Under Delaware corporate law, buybacks must be funded from surplus or retained earnings, so it's impossible when net assets are negative. Cash-rich loss-making startups (e.g., early Amazon) could theoretically buy back, but investors would ask, 'Why aren't you reinvesting in growth?' Korean Commercial Code similarly limits treasury stock acquisitions to the distributable-earnings range.",
  },
  {
    q: "자사주매입과 배당을 동시에 하는 기업은 어떤 기업인가",
    qEn: "Which companies do both buybacks and dividends?",
    a: "성숙한 대형 우량주(Blue-chip)가 대부분입니다. Apple, Microsoft, Johnson & Johnson처럼 수십억 달러의 FCF(잉여현금흐름)를 창출하는 기업들이 배당과 바이백을 병행합니다. S&P500 기준으로 약 60%의 기업이 두 가지를 동시에 시행합니다. 배당은 주주에게 '우리는 안정적인 현금흐름을 가졌다'는 신호를, 바이백은 '우리 주식이 저평가됐다'는 신호를 동시에 보내는 전략입니다. Warren Buffett의 Berkshire Hathaway는 오랫동안 배당 없이 바이백만 활용해왔습니다.",
    aEn: "Mostly mature blue-chips. Companies generating billions in FCF (Apple, Microsoft, Johnson & Johnson) typically run both. About 60% of S&P 500 companies do both. Dividends signal 'we have stable cash flow' while buybacks signal 'our stock is undervalued' — a dual-message strategy. Berkshire Hathaway, by contrast, long used only buybacks without paying dividends.",
  },
  {
    q: "한국 기업의 자사주 소각률이 낮은 이유는",
    qEn: "Why is Korea's treasury-stock cancellation rate so low?",
    a: "구조적인 이유가 세 가지입니다. ① 경영권 방어 수단: 한국 기업은 자사주를 직접 의결권 행사는 불가하지만 우호 세력에게 블록딜로 팔거나, 우리사주조합에 출연해 경영권 방어에 활용합니다. 자사주를 소각하면 이 카드를 잃습니다. ② 스톡옵션 재원: 임직원 스톡옵션 행사 시 신주 발행 대신 기존 자사주를 교부하는 경우가 많습니다. ③ 코리아 디스카운트: 주주환원 개념 자체가 선진국 대비 약해 소각보다 '보유'를 선호하는 경영문화가 남아있습니다. 2024년 금융감독원의 기업 밸류업 프로그램이 이 문화 변화를 촉진하고 있습니다.",
    aEn: "Three structural reasons. ① Control defense: while treasury stock cannot vote directly, Korean companies sell it to friendly parties via block trades or contribute it to employee stock-ownership associations to defend management control. Cancellation removes this card. ② Stock-option funding: instead of issuing new shares, companies often deliver existing treasury stock to employees exercising options. ③ Korea Discount: shareholder-return culture is weaker than in developed markets — many firms prefer to 'hold' rather than cancel. The FSS's 2024 Corporate Value-Up program is pushing this culture to shift.",
  },
  {
    q: "바이백에 반대하는 시각은 어떤 것들이 있나",
    qEn: "What are the arguments against buybacks?",
    a: "크게 세 진영의 비판이 있습니다. ① 정책 비판(좌파 경제학): 바이백은 주주에게만 이익이 되고 노동자·R&D 투자를 희생시킨다. 2022년 미국 인플레이션감축법(IRA)에서 바이백에 1% 소비세가 부과된 배경입니다. ② 재무 비판: 경영진이 주가 부양을 통해 스톡옵션 이익을 극대화하기 위해 차입금으로 자사주를 사는 '차입 바이백'은 기업 재무를 취약하게 만듭니다. ③ 장기 성장 비판: Warren Buffett 등도 '주가가 내재가치보다 비싼 상태에서의 바이백은 자본 파괴'라고 지적합니다. Apple의 공격적 바이백 vs Alphabet의 R&D 투자 전략이 이 논쟁의 대표 사례입니다.",
    aEn: "Three main camps of criticism. ① Policy critique (progressive economics): buybacks benefit only shareholders at the expense of workers and R&D investment. This is the rationale behind the 1% buyback excise tax in the 2022 US Inflation Reduction Act (IRA). ② Financial critique: 'debt-funded buybacks' — where management borrows to repurchase shares and inflate stock-option values — weaken corporate balance sheets. ③ Long-term growth critique: Warren Buffett warns that 'buybacks above intrinsic value destroy capital.' Apple's aggressive buybacks vs. Alphabet's R&D-heavy strategy embodies this debate.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-tender-offer",  ko: "공개매수 ↗",       en: "Tender Offer ↗"     },
  { slug: "ecm-followon",      ko: "팔로우온 ↗",       en: "Follow-on ↗"        },
  { slug: "ecm-ipo-allocation",ko: "주식 배분 ↗",      en: "Allocation ↗"       },
  { slug: "ecm-overview",      ko: "ECM 개요 ↗",       en: "ECM Overview ↗"     },
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
                ch.slug === "ecm-buyback"
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
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {ECM_PRODUCTS_SERIES.map((p) => (
          <Link
            key={p.slug}
            href={`${ko ? "" : "/en"}/market-101/${p.slug}`}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold transition-colors ${
              p.slug === "ecm-buyback"
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                : "text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            }`}
          >
            {p.title(ko)}
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

function AnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-700/60">
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-b border-blue-100 dark:border-blue-800">
        <p className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">
          {ko ? "비유로 이해하기" : "Analogy"}
        </p>
      </div>
      <div className="p-5">
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "회사가 주주에게 돈을 돌려주는 방법은 두 가지다. 현금을 직접 나눠주는 것(배당)과 주식 수를 줄여 1주의 가치를 올리는 것(자사주매입). 배당은 케이크를 잘라서 나눠주는 것, 자사주매입은 케이크 조각 수를 줄여 남은 조각을 크게 만드는 것이다. 세금 처리, 유연성, EPS 효과가 완전히 다르다."
            : "There are two ways a company returns money to shareholders: paying cash directly (dividend) or reducing share count to raise each share's value (buyback). A dividend slices the cake and hands out pieces; a buyback reduces the number of slices so each remaining piece gets bigger. Tax treatment, flexibility, and EPS effect differ entirely."}
        </p>
      </div>
    </motion.div>
  );
}

function ComparisonTable({ ko }: { ko: boolean }) {
  const rows = [
    {
      cat: ko ? "주주 세금" : "Shareholder Tax",
      div: ko ? "배당소득세 즉시 과세" : "Dividend income tax (immediate)",
      bb:  ko ? "자본이득세 (매도 시)" : "Capital gains tax (on sale only)",
    },
    {
      cat: ko ? "유연성" : "Flexibility",
      div: ko ? "한 번 올리면 내리기 어려움" : "Hard to cut once raised",
      bb:  ko ? "연도별 조정 용이" : "Adjustable year to year",
    },
    {
      cat: ko ? "EPS 효과" : "EPS Effect",
      div: ko ? "없음" : "None",
      bb:  ko ? "주식 수 감소 → EPS 상승" : "Share count falls → EPS rises",
    },
    {
      cat: ko ? "신호 효과" : "Signal Effect",
      div: ko ? "안정적 이익 신호" : "Stable earnings signal",
      bb:  ko ? "저평가 신호" : "Undervaluation signal",
    },
    {
      cat: ko ? "사용 케이스" : "Best Used",
      div: ko ? "성숙기 기업" : "Mature companies",
      bb:  ko ? "성장기~성숙기 모두" : "Growth to mature stage",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "배당 vs 자사주매입 비교" : "Dividend vs Buyback Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-5 py-3 text-gray-500 dark:text-gray-400 font-semibold w-1/3">{ko ? "구분" : "Category"}</th>
              <th className="text-left px-4 py-3 text-gray-500 dark:text-gray-400 font-semibold w-1/3">{ko ? "배당" : "Dividend"}</th>
              <th className="text-left px-4 py-3 text-blue-600 dark:text-blue-400 font-semibold w-1/3">{ko ? "자사주매입" : "Buyback"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 dark:border-gray-800/60 last:border-0">
                <td className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300">{row.cat}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{row.div}</td>
                <td className="px-4 py-3 text-blue-700 dark:text-blue-300 font-medium">{row.bb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function BuybackVsDivChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "S&P500 자사주매입 vs 배당 ($십억, 2010~2023)" : "S&P 500 Buyback vs Dividend ($B, 2010–2023)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={BUYBACK_VS_DIV_DATA} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
            <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#9ca3af" }} interval={1} />
            <YAxis tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(val: any, name: any) => [
                `$${val}B`,
                name === "buyback" ? (ko ? "자사주매입" : "Buyback") : (ko ? "배당" : "Dividend"),
              ]}
            />
            <Legend
              iconType="square"
              wrapperStyle={{ fontSize: 10 }}
              formatter={(val) => val === "buyback" ? (ko ? "자사주매입" : "Buyback") : (ko ? "배당" : "Dividend")}
            />
            <Bar dataKey="buyback" fill="#3182f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="dividend" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "2022년 S&P500 자사주매입 $1.26조 — 역대 최대. 배당과의 비율은 약 60:40으로 바이백이 미국 주주환원의 주류가 됐다."
            : "2022 S&P 500 buybacks hit a record $1.26T. The buyback-to-dividend ratio of ~60:40 makes repurchases the dominant U.S. shareholder return method."}
        </p>
      </div>
    </motion.div>
  );
}

function PracticeBox({ ko }: { ko: boolean }) {
  const steps = ko
    ? [
        "내부자 거래 제한 기간(Blackout Period) 종료 후 10b5-1 계획 설정",
        "매입 가격 범위, 수량 한도, 기간을 사전에 명시",
        "계획 확정 후 자동 실행 (이후 변경 불가)",
        "분기별 10-Q/10-K에 자사주매입 현황 공시",
      ]
    : [
        "Set 10b5-1 plan after Blackout Period ends",
        "Pre-specify price range, quantity limit, and duration",
        "Automatic execution after plan is finalized (no modification allowed)",
        "Disclose buyback activity quarterly in 10-Q/10-K filings",
      ];
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-green-200/60 dark:border-green-700/60">
      <div className="bg-green-50 dark:bg-green-900/20 px-5 py-3 border-b border-green-100 dark:border-green-800">
        <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
          {ko ? "실무 프로세스 — 10b5-1 Plan 설정" : "Practice — 10b5-1 Plan Setup"}
        </p>
      </div>
      <div className="p-5">
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                style={{ background: ACCENT }}
              >
                {i + 1}
              </span>
              <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

function EpsExampleBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "EPS 마법 — 수치 예시" : "EPS Magic — Numerical Example"}
        </p>
      </div>
      <div className="p-5 space-y-4">
        <div className="font-mono text-[13px] text-gray-700 dark:text-gray-300 space-y-1.5">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">
            {ko ? "Before 자사주매입" : "Before Buyback"}
          </p>
          <p>EPS = $10B ÷ {ko ? "10억주" : "1B shares"} = <strong className="text-blue-600 dark:text-blue-400">$10.00</strong></p>
          <p className="text-gray-400 text-[11px]">{ko ? "P/E 20× → 주가 $200" : "P/E 20× → Share price $200"}</p>
        </div>
        <div className="border-t border-dashed border-gray-200 dark:border-gray-700 pt-4 font-mono text-[13px] text-gray-700 dark:text-gray-300 space-y-1.5">
          <p className="text-[10px] font-bold text-green-500 uppercase mb-2">
            {ko ? "After 10% 자사주매입" : "After 10% Buyback"}
          </p>
          <p>EPS = $10B ÷ {ko ? "9억주" : "900M shares"} = <strong className="text-green-600 dark:text-green-400">$11.11</strong> (+11%)</p>
          <p className="text-gray-400 text-[11px]">{ko ? "P/E 20× 유지 → 주가 $222 (+11%)" : "P/E 20× maintained → Share price $222 (+11%)"}</p>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko
              ? "순이익은 그대로 $10B이지만 주식 수 10% 감소로 EPS는 11% 상승한다. P/E 배수가 유지된다면 주가도 11% 오른다."
              : "Net income stays at $10B, but a 10% share reduction drives EPS up 11%. If the P/E multiple holds, the share price rises 11% too."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function AppleEpsChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "Apple EPS vs 자사주매입 누적 금액 ($십억, 2012~2023)" : "Apple EPS vs Cumulative Buyback ($B, 2012–2023)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={APPLE_EPS_BUYBACK} margin={{ top: 4, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
            <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <YAxis yAxisId="left" tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(val: any, name: any) => [
                name === "eps" ? `$${val}` : `$${val}B`,
                name === "eps" ? "EPS" : (ko ? "누적 바이백" : "Cumul. Buyback"),
              ]}
            />
            <Legend
              iconType="line"
              wrapperStyle={{ fontSize: 10 }}
              formatter={(val) => val === "eps" ? "EPS" : (ko ? "누적 바이백 ($B)" : "Cumul. Buyback ($B)")}
            />
            <Line yAxisId="left" type="monotone" dataKey="eps" stroke="#3182f6" strokeWidth={2} dot={{ r: 3 }} />
            <Line yAxisId="right" type="monotone" dataKey="cumBuyback" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="5 3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function AppleBuybackChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "Apple 연도별 자사주매입 금액 ($십억, 2012~2023)" : "Apple Annual Buyback ($B, 2012–2023)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={APPLE_ANNUAL_BUYBACK} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
            <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <YAxis tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(val: any) => [`$${val}B`, ko ? "자사주매입" : "Buyback"]}
            />
            <Bar dataKey="amount" radius={[3, 3, 0, 0]}>
              {APPLE_ANNUAL_BUYBACK.map((_, i) => (
                <Cell key={i} fill={i === 7 ? "#10b981" : "#3182f6"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "2012~2023 누적 ~$600B. 2019년 $76B(녹색)이 단일 연도 최대. 주식 수 약 40% 감소."
            : "~$600B cumulative 2012–2023. 2019's $76B (green) was the single-year peak. Share count fell ~40%."}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmBuybackClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
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
                  ? "https://dealstory.io/market-101/ecm-buyback"
                  : "https://dealstory.io/en/market-101/ecm-buyback",
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
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "자사주매입" : "Share Buyback"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM — 주주환원 심화" : "ECM — Shareholder Return Deep Dive"}
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
                href="/market-101/ecm-buyback"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-buyback"
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
                {ko ? "숫자로 보는 자사주매입" : "Share Buybacks by the Numbers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  value: ko ? "$1.26조" : "$1.26T",
                  label: ko ? "2022년 S&P500 자사주매입" : "S&P 500 Buybacks 2022",
                  sub: ko ? "역대 최대 기록" : "All-time record",
                },
                {
                  value: "~$600B",
                  label: ko ? "Apple 누적 바이백" : "Apple Cumul. Buyback",
                  sub: ko ? "2012~2023" : "2012–2023",
                },
                {
                  value: "60:40",
                  label: ko ? "바이백 vs 배당 비율" : "Buyback vs Dividend",
                  sub: ko ? "미국 S&P500" : "U.S. S&P 500",
                },
                {
                  value: "~30%",
                  label: ko ? "한국 자사주 소각률" : "Korea Treasury Cancellation",
                  sub: ko ? "매입 후 소각 비중" : "Share cancelled after buy",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.06)}
                  className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 p-4 text-center bg-white dark:bg-gray-900"
                >
                  <p className="text-[22px] font-black mb-1" style={{ color: ACCENT }}>{stat.value}</p>
                  <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight mb-0.5">{stat.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Ch.2 — 왜 배당 대신 자사주매입인가 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "왜 배당 대신 자사주매입인가" : "Why Buyback Over Dividend"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "자사주매입은 배당과 동일한 목적, 즉 주주에게 현금을 돌려주는 행위지만 메커니즘이 다르다. 배당은 '1주당 얼마'를 모든 주주에게 동일하게 지급하지만, 자사주매입은 주식 수를 줄여 남은 주주 각자의 지분율을 높인다. 주주가 직접 팔지 않는 한 세금이 발생하지 않는다."
                    : "Buybacks serve the same purpose as dividends — returning cash to shareholders — but through a different mechanism. Dividends pay a fixed 'per share' amount to all holders simultaneously; buybacks reduce the share count, raising each remaining holder's ownership percentage. Unless shareholders sell, no tax is triggered.",
                  ko
                    ? "미국 세제에서 배당은 수령 즉시 과세되는 반면, 바이백으로 인한 주가 상승분은 주식을 팔 때까지 과세가 이연된다. 이 세금 이연 효과가 바이백을 선호하게 만드는 핵심 이유 중 하나다. 2022년 미국 인플레이션감축법(IRA)이 바이백에 1%의 소비세를 부과한 것도 이 세제 혜택을 겨냥한 조치였다."
                    : "Under U.S. tax rules, dividends are taxed upon receipt, while buyback-driven price appreciation is deferred until shares are sold. This deferral advantage is a primary reason companies prefer buybacks. The U.S. Inflation Reduction Act of 2022, which imposed a 1% excise tax on buybacks, was specifically designed to address this tax advantage.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko} />
            <ComparisonTable ko={ko} />
            <BuybackVsDivChart ko={ko} />
          </motion.section>

          {/* Ch.3 — 3가지 자사주매입 방식 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "3가지 자사주매입 방식" : "Three Buyback Methods"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "자사주매입은 '어떻게 사느냐'에 따라 세 가지로 나뉜다. 공개시장 매입이 가장 일반적이지만, 빠른 EPS 효과가 필요하면 ASR, 대규모 프리미엄 매입이 필요하면 공개매수 방식을 택한다."
                  : "Buybacks divide into three types based on execution method. Open market repurchase is most common; ASR is used when fast EPS impact is needed; tender offer repurchase is chosen for large-scale premium acquisition."}
              </motion.p>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="space-y-5">
              {/* Method 1: Open Market */}
              <motion.div variants={fadeUp()} className="rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-700/60">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-4 border-b border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white" style={{ background: ACCENT }}>1</span>
                    <div>
                      <p className="text-[14px] font-black text-blue-800 dark:text-blue-200">
                        {ko ? "공개시장 매입 (Open Market Repurchase)" : "Open Market Repurchase"}
                      </p>
                      <p className="text-[10px] text-blue-500 dark:text-blue-400">{ko ? "전체의 90%+ — 가장 일반적" : "90%+ of all buybacks — most common"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  {(ko
                    ? [
                        "주관사를 통해 시장에서 매일 소량씩 매입",
                        "10b5-1 Plan: 사전 매입 프로그램 설정 → 내부자 거래 의혹 방지",
                        "일일 매입 한도: 일평균거래량(ADTV)의 25% 규정",
                        "장점: 유연·은밀·시장 충격 최소화",
                        "단점: 느림 (수개월~수년 소요)",
                      ]
                    : [
                        "Daily small purchases through a designated broker via the market",
                        "10b5-1 Plan: pre-set repurchase program prevents insider trading accusations",
                        "Daily purchase cap: 25% of average daily trading volume (ADTV)",
                        "Pros: flexible, discreet, minimal market impact",
                        "Cons: slow (months to years)",
                      ]
                  ).map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0">·</span>
                      <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Method 2: ASR */}
              <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border border-violet-200/60 dark:border-violet-700/60">
                <div className="bg-violet-50 dark:bg-violet-900/20 px-5 py-4 border-b border-violet-100 dark:border-violet-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white bg-violet-500">2</span>
                    <div>
                      <p className="text-[14px] font-black text-violet-800 dark:text-violet-200">
                        {ko ? "가속화 자사주매입 (ASR — Accelerated Share Repurchase)" : "Accelerated Share Repurchase (ASR)"}
                      </p>
                      <p className="text-[10px] text-violet-500 dark:text-violet-400">{ko ? "대형 딜 $1B~$20B — 즉각적 EPS 효과" : "Large deals $1B–$20B — immediate EPS impact"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  {(ko
                    ? [
                        "은행에 목돈 선지급 → 은행이 즉시 주식 전달",
                        "발행사: 즉각적 EPS 효과 (전량 즉시 소각 처리)",
                        "은행: 이후 수개월간 시장에서 매입해 발행사에 정산",
                        "규모: 보통 $1B~$20B 단위 대형 딜",
                        "Apple, Microsoft의 대규모 바이백에 활용",
                      ]
                    : [
                        "Company pays lump sum upfront → bank delivers shares immediately",
                        "Issuer: immediate EPS impact (full cancellation booked at close)",
                        "Bank: buys back over subsequent months, settling against forward",
                        "Deal size: typically $1B–$20B",
                        "Used in Apple and Microsoft mega buybacks",
                      ]
                  ).map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-violet-400 dark:text-violet-500 mt-0.5 flex-shrink-0">·</span>
                      <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Method 3: Tender Offer */}
              <motion.div variants={fadeUp(0.1)} className="rounded-2xl overflow-hidden border border-orange-200/60 dark:border-orange-700/60">
                <div className="bg-orange-50 dark:bg-orange-900/20 px-5 py-4 border-b border-orange-100 dark:border-orange-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white bg-orange-500">3</span>
                    <div>
                      <p className="text-[14px] font-black text-orange-800 dark:text-orange-200">
                        {ko ? "공개매수 방식 (Tender Offer Repurchase)" : "Tender Offer Repurchase"}
                      </p>
                      <p className="text-[10px] text-orange-500 dark:text-orange-400">{ko ? "주주에게 프리미엄 제안 — 대규모 단기 매입" : "Premium offer to shareholders — rapid large-scale buy"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  {(ko
                    ? [
                        "기존 주주에게 프리미엄(시장가+10~20%)으로 청약 요청",
                        "빠른 대규모 매입 가능 (수주 내 완료)",
                        "주주에게 프리미엄 제공 → 명시적으로 주주 친화적",
                        "케이스: Dell LBO 후 자사주 매입, Berkshire Hathaway 바이백 방식",
                        "단점: 정해진 가격에 사므로 시장 타이밍 유연성 없음",
                      ]
                    : [
                        "Offer existing shareholders a premium (market + 10–20%) to tender",
                        "Rapid large-scale repurchase possible (completed within weeks)",
                        "Explicitly shareholder-friendly by sharing a premium",
                        "Cases: Dell post-LBO buyback, Berkshire Hathaway's repurchase style",
                        "Drawback: fixed price means no market-timing flexibility",
                      ]
                  ).map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-orange-400 dark:text-orange-500 mt-0.5 flex-shrink-0">·</span>
                      <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <PracticeBox ko={ko} />
          </motion.section>

          {/* Ch.4 — EPS 마법 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "EPS 마법 — 왜 시장이 좋아하는가" : "EPS Magic — Why Markets Love Buybacks"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "EPS(주당순이익) = 순이익 ÷ 발행주식 수. 자사주매입은 순이익을 늘리지 않고 분모(발행주식 수)를 줄여 EPS를 기계적으로 상승시킨다. P/E(주가수익비율) 배수가 유지된다면 EPS 상승은 주가 상승으로 직결된다."
                    : "EPS (Earnings Per Share) = Net Income ÷ Shares Outstanding. Buybacks mechanically raise EPS by shrinking the denominator (share count) without growing net income. If the P/E multiple holds, higher EPS translates directly to a higher share price.",
                  ko
                    ? "이 'EPS 마법'에 대한 비판도 있다. 순이익 자체는 그대로이므로 실질 가치 창출은 없다는 시각이다. 장기적으로 R&D 투자가 더 높은 가치를 창출할 수 있다. Berkshire Hathaway의 Warren Buffett은 '주가가 내재가치보다 비싼 상태에서의 바이백은 자본 파괴'라고 경고한다."
                    : "The 'EPS magic' has its critics. Since net income is unchanged, no real value is created in their view. Over the long term, R&D investment may create far more value. Warren Buffett warns: 'Buybacks at prices above intrinsic value destroy capital.'",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <EpsExampleBox ko={ko} />

            {/* Criticism box */}
            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-orange-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"EPS 마법은 진짜 가치 창출인가? 주가는 올라도 실질 순이익은 그대로다. 자사주매입보다 R&D 투자가 장기적으로 유리할 수 있다. Berkshire의 철학과 Apple의 전략 — 어느 쪽이 옳은지는 10년 후에 알 수 있다.\""
                  : "\"Is EPS magic real value creation? The share price rises but net income stays flat. R&D investment may beat buybacks over the long run. Berkshire's philosophy vs Apple's strategy — who is right will be known in a decade.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM 전략 분석, Deal Story Research, 2024" : "— ECM Strategy Analysis, Deal Story Research, 2024"}
              </p>
            </motion.blockquote>

            <AppleEpsChart ko={ko} />
          </motion.section>

          {/* Ch.5 — Apple $90B 프로그램 해부 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Apple $600B 자사주매입 프로그램 해부" : "Apple's $600B Buyback Program: Anatomy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "2012년 Steve Jobs 사후 Tim Cook이 첫 배당과 자사주매입 프로그램을 발표했다. 당시 투자자들 사이에서 'Apple은 그 많은 현금을 왜 그냥 쌓아두냐'는 압력이 높아진 결과였다. 초기 $10B 규모로 시작한 프로그램은 해마다 확대됐고, 2013년에는 Apple Bond 전략(채권 발행으로 해외 현금 세금 없이 바이백 재원 마련)을 병행했다."
                    : "In 2012, after Steve Jobs' death, Tim Cook announced Apple's first dividend and buyback program — a response to growing investor pressure over Apple's massive idle cash hoard. The initial $10B program expanded yearly. In 2013, Apple's bond strategy (issuing debt to fund buybacks without repatriating overseas cash and triggering tax) was added.",
                  ko
                    ? "2012~2023 누적 매입 규모는 약 $600B. 이 기간 동안 발행주식 수가 약 40% 감소했다. 2012년 약 9.4B주(스플릿 조정 기준)에서 2023년 약 15.6B주 감소(스플릿 반영)까지, 주식 수를 꾸준히 줄여왔다. EPS는 2012년 $6.31에서 2022년 $18.16까지 성장했으며, 이 중 상당 부분은 순이익 성장과 주식 수 감소 효과가 복합적으로 작용한 결과다."
                    : "Cumulative buybacks 2012–2023 total ~$600B. Over this period, the share count fell roughly 40%. EPS grew from $6.31 in 2012 to $18.16 in 2022, a result combining genuine earnings growth with the compounding effect of share count reduction.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Apple Key Stats */}
            <motion.div variants={fadeUp(0.1)} className="mt-2 grid grid-cols-3 gap-3">
              {[
                { val: "~$600B", label: ko ? "누적 자사주매입" : "Cumulative Buyback", sub: "2012–2023" },
                { val: "~40%", label: ko ? "주식 수 감소율" : "Share Count Reduction", sub: ko ? "같은 기간" : "Same period" },
                { val: "$90B+", label: ko ? "연간 최대 프로그램" : "Peak Annual Program", sub: ko ? "2023 승인분" : "FY2023 approved" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.06)}
                  className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-3 text-center"
                >
                  <p className="text-[18px] font-black text-blue-600 dark:text-blue-400 mb-0.5">{s.val}</p>
                  <p className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 leading-tight">{s.label}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <AppleBuybackChart ko={ko} />
          </motion.section>

          {/* Ch.6 — 한국 자사주 제도의 특수성 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "한국 자사주 제도의 특수성" : "Korea's Unique Treasury Share System"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "미국에서 자사주매입은 대부분 즉시 소각(retire)한다. 한국은 다르다. 자사주를 소각하지 않고 보유하는 비율이 45% 이상에 달한다. 보유 자사주는 경영권 방어 수단, 우리사주 출연, 스톡옵션 행사 재원으로 활용되기 때문이다."
                    : "In the U.S., buybacks are almost always immediately retired. Korea is different. Over 45% of repurchased shares are held rather than cancelled. Held treasury shares serve as tools for defending management control, employee stock ownership plans, or stock option exercise reserves.",
                  ko
                    ? "2024년 삼성전자는 50조원 규모 자사주 전량 소각을 발표했다 — 한국 기업 사상 최대 규모. 이는 금융감독원의 기업 밸류업 프로그램과 맞물려 한국 자사주 문화의 변화를 알리는 시그널로 받아들여졌다. 코리아 디스카운트 해소의 핵심 과제가 자사주 소각률 향상임을 시장이 인식하기 시작했다."
                    : "In 2024, Samsung Electronics announced it would cancel all 50 trillion won of treasury shares — the largest such cancellation in Korean corporate history. Coinciding with the FSS's Corporate Value-up Program, this was widely read as a signal of shifting Korean treasury share culture. The market began recognising cancellation rate improvement as central to resolving the Korea Discount.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Korea vs US comparison */}
            <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "한국 vs 미국 자사주 비교" : "Korea vs US Treasury Share Comparison"}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="text-left px-5 py-3 text-gray-500 dark:text-gray-400 font-semibold">{ko ? "구분" : "Item"}</th>
                      <th className="text-left px-4 py-3 text-gray-500 dark:text-gray-400 font-semibold">{ko ? "미국" : "United States"}</th>
                      <th className="text-left px-4 py-3 text-blue-600 dark:text-blue-400 font-semibold">{ko ? "한국" : "Korea"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: ko ? "매입 후 소각률" : "Cancellation Rate",
                        us: ko ? "90%+" : "90%+",
                        kr: ko ? "~30% (나머지는 보유)" : "~30% (rest held)",
                      },
                      {
                        cat: ko ? "보유 자사주 활용" : "Treasury Share Use",
                        us: ko ? "즉시 소각이 표준" : "Immediate retirement standard",
                        kr: ko ? "경영권 방어·스톡옵션·우리사주" : "Mgmt defense, stock options, ESOP",
                      },
                      {
                        cat: ko ? "규제" : "Regulation",
                        us: ko ? "10b5-1·SEC Rule 10b-18" : "10b5-1 / SEC Rule 10b-18",
                        kr: ko ? "자본시장법 제165조의2" : "Capital Markets Act §165-2",
                      },
                      {
                        cat: ko ? "최대 보유 한도" : "Max Holding Cap",
                        us: ko ? "없음 (소각 즉시)" : "N/A (immediate retirement)",
                        kr: ko ? "발행주식 총수의 10%" : "Up to 10% of total shares issued",
                      },
                      {
                        cat: ko ? "2024년 정책 변화" : "2024 Policy Change",
                        us: ko ? "IRA 바이백 소비세 1%" : "IRA 1% buyback excise tax",
                        kr: ko ? "금감원 기업 밸류업 프로그램" : "FSS Corporate Value-up Program",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-50 dark:border-gray-800/60 last:border-0">
                        <td className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300">{row.cat}</td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{row.us}</td>
                        <td className="px-4 py-3 text-blue-700 dark:text-blue-300 font-medium">{row.kr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Samsung case */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-700/60">
              <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-4 border-b border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇰🇷</span>
                  <div>
                    <p className="text-[13px] font-black text-blue-800 dark:text-blue-200">
                      {ko ? "삼성전자 자사주 소각 (2024)" : "Samsung Electronics Treasury Share Cancellation (2024)"}
                    </p>
                    <p className="text-[10px] text-blue-500 dark:text-blue-400">
                      {ko ? "한국 기업 역대 최대 자사주 소각" : "Largest treasury share cancellation in Korean corporate history"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2">
                {(ko
                  ? [
                      "50조원 규모 자사주 전량 소각 발표 — 한국 기업 사상 최대",
                      "주주환원 정책 강화 시그널 + 코리아 디스카운트 해소 의지",
                      "금감원 기업 밸류업 프로그램과의 연계 → 주가 재평가 기대",
                      "배당 확대와 병행한 복합 주주환원 패키지로 시장 호응",
                    ]
                  : [
                      "Announced cancellation of all treasury shares worth 50 trillion won — Korea's largest ever",
                      "Signal of strengthened shareholder return policy + commitment to resolving Korea Discount",
                      "Aligned with FSS Corporate Value-up Program → market anticipates valuation re-rating",
                      "Combined dividend increase in a comprehensive shareholder return package welcomed by markets",
                    ]
                ).map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0">·</span>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
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
              <FaqAccordion
                items={FAQS.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))}
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
                  {ko ? term.ko : term.en}
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
            <Link href={ko ? "/market-101/ecm-tender-offer" : "/en/market-101/ecm-tender-offer"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "공개매수 →" : "Tender Offer →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
