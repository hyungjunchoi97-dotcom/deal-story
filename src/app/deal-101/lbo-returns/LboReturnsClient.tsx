"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine, Legend,
  LineChart, Line, ScatterChart, Scatter, ZAxis,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

const ACCENT = "#6366f1";
const ACCENT_LIGHT = "#eef2ff";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const LBO_SERIES = [
  { slug: "lbo-overview",          ch: 0, title: (ko: boolean) => ko ? "LBO의 본질"          : "What Is LBO?"      },
  { slug: "lbo-capital-structure", ch: 1, title: (ko: boolean) => ko ? "Ch.1 자본구조 해부"   : "Ch.1 Capital Stack" },
  { slug: "lbo-returns",           ch: 2, title: (ko: boolean) => ko ? "Ch.2 리턴 분석"       : "Ch.2 Return Math"  },
  { slug: "lbo-deal-process",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 딜 프로세스"     : "Ch.3 Deal Process" },
];
const THIS_CH = 2;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {LBO_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
          return (
            <Link key={ch.slug} href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${isCurrent ? "text-white" : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              style={isCurrent ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── MOIC vs IRR Conflict Data ─────────────────────────────────────────────────
// Same MOIC (2.0x) but different hold periods → different IRR
const MOIC_IRR_DATA = [
  { label: (ko: boolean) => ko ? "2.0x MOIC\n(3년)" : "2.0x MOIC\n(3yr)", moic: 2.0, hold: 3, irr: 26.0, color: "#10b981" },
  { label: (ko: boolean) => ko ? "2.0x MOIC\n(5년)" : "2.0x MOIC\n(5yr)", moic: 2.0, hold: 5, irr: 14.9, color: "#6366f1" },
  { label: (ko: boolean) => ko ? "2.0x MOIC\n(7년)" : "2.0x MOIC\n(7yr)", moic: 2.0, hold: 7, irr: 10.4, color: "#f59e0b" },
  { label: (ko: boolean) => ko ? "2.0x MOIC\n(10년)" : "2.0x MOIC\n(10yr)", moic: 2.0, hold: 10, irr: 7.2, color: "#ef4444" },
];

// ── Value Creation 3 Drivers (Hilton example) ─────────────────────────────────
const VALUE_CREATION = [
  {
    driver: (ko: boolean) => ko ? "EBITDA 성장" : "EBITDA Growth",
    contribution: 42,
    color: "#10b981",
    desc: (ko: boolean) => ko
      ? "운영 개선(객실 점유율·RevPAR 상승), 새 호텔 프랜차이즈 확장, 비용 구조 최적화. Hilton은 연 3,000개 순증 객실로 EBITDA를 인수 당시 대비 3배 성장시켰다."
      : "Operational improvements (occupancy + RevPAR increase), franchise expansion, cost structure optimization. Hilton grew EBITDA 3x from acquisition by adding ~3,000 net new rooms annually.",
  },
  {
    driver: (ko: boolean) => ko ? "Multiple Expansion" : "Multiple Expansion",
    contribution: 35,
    color: ACCENT,
    desc: (ko: boolean) => ko
      ? "매수 배수 대비 높은 배수로 Exit. Hilton 인수 시 EV/EBITDA 15.8x → 2018년 Exit 시 ~17x. 업종 전반의 호텔 자산 리레이팅 + Hilton 브랜드 프리미엄 강화."
      : "Exit at a higher multiple than entry. Hilton entered at 15.8x EV/EBITDA → exited at ~17x in 2018. Sector-wide hotel asset re-rating + Hilton brand premium expansion.",
  },
  {
    driver: (ko: boolean) => ko ? "부채 상환 (Deleveraging)" : "Debt Paydown (Deleveraging)",
    contribution: 23,
    color: "#f59e0b",
    desc: (ko: boolean) => ko
      ? "보유 기간 동안 부채 상환으로 자기자본 가치 증가. Hilton: Debt/EBITDA 12.4x(2007) → 3.2x(2018 Exit). 부채가 줄면 EV가 같아도 자기자본에 귀속되는 금액이 커진다."
      : "Equity value grows as debt is repaid during the hold period. Hilton: Debt/EBITDA 12.4x (2007) → 3.2x (2018 exit). As debt shrinks, more of the same EV belongs to equity.",
  },
];

// ── IRR by Hold Period (same MOIC 2.5x) ──────────────────────────────────────
const HOLD_IRR = [
  { hold: 3, irr: 35.7 },
  { hold: 4, irr: 25.7 },
  { hold: 5, irr: 20.1 },
  { hold: 6, irr: 16.5 },
  { hold: 7, irr: 13.9 },
  { hold: 8, irr: 11.9 },
  { hold: 9, irr: 10.3 },
  { hold: 10, irr: 9.1 },
];

// ── Vintage Year Returns ──────────────────────────────────────────────────────
const VINTAGE_DATA = [
  { vintage: "2005", medianIrr: 8.5,  quartile3: 14, color: "#f59e0b" },
  { vintage: "2006", medianIrr: 7.2,  quartile3: 12, color: "#ef4444" },
  { vintage: "2007", medianIrr: 5.8,  quartile3: 11, color: "#ef4444" },
  { vintage: "2008", medianIrr: 12.1, quartile3: 18, color: "#10b981" },
  { vintage: "2009", medianIrr: 18.4, quartile3: 26, color: "#10b981" },
  { vintage: "2010", medianIrr: 17.2, quartile3: 24, color: "#10b981" },
  { vintage: "2011", medianIrr: 15.6, quartile3: 22, color: "#6366f1" },
  { vintage: "2012", medianIrr: 16.8, quartile3: 23, color: "#6366f1" },
  { vintage: "2013", medianIrr: 14.1, quartile3: 20, color: "#6366f1" },
  { vintage: "2014", medianIrr: 12.8, quartile3: 18, color: "#94a3b8" },
  { vintage: "2015", medianIrr: 11.4, quartile3: 16, color: "#94a3b8" },
];

// ── Real PE Case Returns ──────────────────────────────────────────────────────
const CASE_RETURNS = [
  {
    name: "KKR / Dollar General\n(2007–2013)",
    moic: 4.5, irr: 70, hold: 6,
    color: "#10b981",
    link: "/deals/kkr-dollar-general",
    drivers: (ko: boolean) => ko ? "금융위기 = 불황형 소매 수혜 → EBITDA +35% + 2009 IPO 완벽 타이밍" : "Financial crisis = recession-proof retail tailwind → EBITDA +35% + perfect 2009 IPO timing",
  },
  {
    name: "Apollo / ADT\n(2012–2018)",
    moic: 3.2, irr: 22.1, hold: 6,
    color: "#6366f1",
    link: null as string | null,
    drivers: (ko: boolean) => ko ? "보안 서비스 반복 구독 수익 + IPO Multiple Expansion" : "Security subscription recurring revenue + IPO multiple expansion",
  },
  {
    name: "Blackstone / Hilton\n(2007–2018)",
    moic: 2.6, irr: 16.7, hold: 11,
    color: ACCENT,
    link: "/deals/blackstone-hilton-2007",
    drivers: (ko: boolean) => ko ? "EBITDA 3배 성장 + 호텔 자산 가치 상승" : "EBITDA 3x growth + hotel asset appreciation",
  },
  {
    name: "Carlyle / Hertz\n(2005–2013)",
    moic: 1.9, irr: 10.2, hold: 8,
    color: "#8b5cf6",
    link: null as string | null,
    drivers: (ko: boolean) => ko ? "GFC로 차량 수요 급감 후 회복, 장기 보유로 만회" : "GFC crushed vehicle demand, long hold to recover",
  },
  {
    name: "KKR / RJR Nabisco\n(1989–1994)",
    moic: 1.5, irr: 8.0, hold: 5,
    color: "#f59e0b",
    link: "/deals/kkr-rjr-nabisco",
    drivers: (ko: boolean) => ko ? "브랜드 가치 확인, 담배 소송·경영권 갈등이 제한" : "Brand value confirmed, tobacco litigation + management conflict limited returns",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "MOIC과 IRR 중 PE에서 더 중요하게 보는 지표는?" : "Which matters more in PE — MOIC or IRR?",
    a: (ko: boolean) => ko
      ? "PE 업계에서는 두 지표를 함께 본다. MOIC은 절대적인 수익 배수를 알려줘 '얼마나 돈을 벌었나'를 직관적으로 보여준다. IRR은 시간 가치를 반영해 '연간 복리로 얼마나 잘 운용했나'를 보여준다. 둘이 충돌할 수 있다 — 3년 만에 2.0x MOIC(IRR 26%)와 10년 만에 3.0x MOIC(IRR 11.6%)는 매우 다른 딜이다. 일반적으로 LP들은 IRR을 더 중요하게 보는 경향이 있는데, 시간 가치와 기회비용을 반영하기 때문이다. 반면 GP들은 절대적인 달러 수익을 보여주는 MOIC을 마케팅에 자주 활용한다."
      : "The PE industry uses both metrics together. MOIC shows absolute return multiple — 'how much money did we make' — intuitively clear. IRR reflects time value — 'how well did we compound annually.' They can conflict: 2.0x MOIC in 3 years (IRR 26%) vs. 3.0x MOIC in 10 years (IRR 11.6%) are very different deals. Generally, LPs weight IRR more heavily because it reflects time value and opportunity cost. GPs often emphasize MOIC in marketing because it shows absolute dollar returns.",
  },
  {
    q: (ko: boolean) => ko ? "Value Creation에서 Multiple Expansion이 가장 중요한 이유는?" : "Why is Multiple Expansion often the biggest driver of PE returns?",
    a: (ko: boolean) => ko
      ? "역사적 데이터에 따르면 PE 바이아웃 수익의 약 40–60%가 Exit Multiple이 Entry Multiple보다 높아지는 Multiple Expansion에서 발생한다. 이는 두 가지 요인의 결합이다: ① 시장 환경 (저금리일 때 멀티플이 올라가는 경향), ② 기업 스스로의 질적 개선 (프리미엄 브랜드, 규모 확대, 경영 투명성 개선 등으로 투자자가 더 높은 배수를 지불하게 됨). 그러나 Multiple Expansion은 PE가 완전히 통제할 수 없는 요소이기도 하다 — 시장이 나빠지면 Entry Multiple보다 낮게 Exit해야 하는 Multiple Contraction이 발생할 수 있다."
      : "Historical data shows approximately 40–60% of PE buyout returns come from Multiple Expansion — exiting at a higher multiple than entry. Two factors combine: ① Market environment (low rates tend to expand multiples), ② Company-specific improvements (premium brand, scale-up, governance improvements cause investors to pay higher multiples). However, Multiple Expansion is also partly outside PE's control — if market conditions deteriorate, exits at lower-than-entry multiples (Multiple Contraction) can occur.",
  },
  {
    q: (ko: boolean) => ko ? "Vintage Year가 왜 PE 수익률에 그렇게 큰 영향을 미치나요?" : "Why does vintage year have such a large impact on PE returns?",
    a: (ko: boolean) => ko
      ? "PE는 5–7년의 보유 기간 동안 경제 사이클에 노출된다. 2005–2007 빈티지는 GFC 직전에 고점 매수 → 부채 부담이 크고 Exit 시장이 침체 → 수익 저조. 2009–2012 빈티지는 저점 매수 → 저렴한 Entry Multiple + 이후 시장 회복 → 탁월한 수익. 즉 PE 수익은 경영 능력만큼이나 언제 펀드를 조성하고 언제 투자했느냐에 달려있다. 이 때문에 PE 성과를 평가할 때 동일 빈티지 연도의 동료 펀드들과 비교(peer comparison)하는 것이 필수적이다."
      : "PE funds are exposed to economic cycles over their 5–7 year hold periods. 2005–2007 vintage funds bought at peak prices just before the GFC → heavy debt burden + depressed exit markets → poor returns. 2009–2012 vintage funds bought at the bottom → cheap entry multiples + market recovery → exceptional returns. PE returns depend as much on timing as on management skill. This is why benchmarking PE performance requires comparison against same-vintage peer funds.",
  },
  {
    q: (ko: boolean) => ko ? "Dividend Recap은 MOIC과 IRR에 어떤 영향을 주나요?" : "How does a dividend recapitalization affect MOIC and IRR?",
    a: (ko: boolean) => ko
      ? "Dividend Recap(배당 재자본화)은 Exit 전에 포트폴리오 컴퍼니가 추가 부채를 일으켜 그 현금을 PE 투자자에게 배당으로 돌려주는 구조다. 이는 ① IRR을 크게 높인다 — 자본 회수 시점이 빨라지기 때문에. ② MOIC은 중간에 현금을 돌려받았으므로 최종 Exit 금액이 동일하면 MOIC이 올라간다. ③ 그러나 포트폴리오 컴퍼니의 부채가 늘어나 재무 취약성이 증가한다. 2005–2007년에 Div Recap이 남용됐고, 이들 중 일부가 GFC 이후 재무적 어려움을 겪었다. 채권자와 투자자들은 과도한 Div Recap을 경고 신호로 본다."
      : "A dividend recap (dividend recapitalization) involves the portfolio company taking on additional debt and distributing the proceeds as dividends to PE investors before a formal exit. This ① significantly improves IRR — accelerated capital return timing. ② Improves MOIC — receiving cash early means the final exit adds on top of the early distribution. ③ But increases portfolio company leverage and financial fragility. Div Recaps were overused in 2005–2007, and some caused financial distress after the GFC. Lenders and investors view excessive Div Recaps as a warning signal.",
  },
  {
    q: (ko: boolean) => ko ? "PE 탑-쿼타일 펀드는 일반 펀드 대비 얼마나 수익이 높은가요?" : "How much do top-quartile PE funds outperform median funds?",
    a: (ko: boolean) => ko
      ? "PE는 공모펀드 대비 분산 정도가 훨씬 크다 — 탑-쿼타일과 보텀-쿼타일의 수익 차이가 20%p를 넘는 경우도 있다. 전형적 수치: 탑-쿼타일 바이아웃 펀드 IRR 20%+, 중간값 12–15%, 보텀-쿼타일 5% 미만. 이 분산이 큰 이유는: ① 딜 소싱 능력(좋은 타겟을 남들보다 먼저 발굴), ② 운영 개선 실행력, ③ 타이밍 (Vintage Year), ④ 투자자 네트워크 등에서 크게 차이가 나기 때문이다. LP에게 PE 투자에서 가장 중요한 것은 탑-쿼타일 GP를 골라내는 능력이다."
      : "PE has far higher return dispersion than public funds — top-quartile and bottom-quartile spread can exceed 20 percentage points. Typical figures: top-quartile buyout fund IRR 20%+, median 12–15%, bottom-quartile below 5%. The reasons for this dispersion: ① deal sourcing capability (finding great targets before others), ② operational improvement execution, ③ timing (vintage year), ④ investor network. For LPs, the single most important skill in PE is selecting top-quartile GPs.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Kaplan, S.N. & Schoar, A. (2005). Private Equity Performance: Returns, Persistence, and Capital Flows. Journal of Finance, 60(4), 1791–1823." },
  { id: 2, text: "Harris, R.S., Jenkinson, T., & Kaplan, S.N. (2014). Private Equity Performance: What Do We Know? Journal of Finance, 69(5), 1851–1882." },
  { id: 3, text: "Bain & Company. (2024). Global Private Equity Report — Value Creation Analysis." },
  { id: 4, text: "Blackstone. (2014). Hilton Hotels IPO Prospectus. NYSE: HLT. Annual Return Analysis." },
  { id: 5, text: "Phalippou, L. (2017). Private Equity Laid Bare. CreateSpace." },
  { id: 6, text: "McKinsey Global Institute. (2023). Private Markets Annual Review — LBO Return Attribution." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function LboReturnsClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-indigo-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-indigo-600 transition-colors">딜 101</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101/lbo-overview" : "/en/deal-101/lbo-overview"} className="hover:text-indigo-600 transition-colors">LBO</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "리턴 분석" : "Return Analysis"}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>LBO</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>Ch.2</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{concept.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex flex-wrap gap-1.5 mt-4">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>{tag}</span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }} className="mt-4 flex items-center gap-2">
              <Link href="/deal-101/lbo-returns" className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`} style={ko ? { background: ACCENT } : {}}>한국어</Link>
              <Link href="/en/deal-101/lbo-returns" className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`} style={!ko ? { background: ACCENT } : {}}>English</Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Ch.1: MOIC vs IRR ════════════════════════════════════════════════ */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "MOIC vs IRR — 같은 딜, 다른 결론" : "MOIC vs IRR — Same Deal, Different Conclusion"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "MOIC(Multiple on Invested Capital)은 단순하다: Exit 시 받은 금액 ÷ 투자한 금액. 2.0x라면 투자금의 두 배를 돌려받은 것이다. 시간을 고려하지 않는 게 특징이다.",
                "IRR(Internal Rate of Return)은 복잡하다: 투자 시점부터 Exit까지 현금흐름을 모두 고려해서 연간 복리 수익률로 환산한다. 3년 만에 2.0x MOIC이면 IRR 26%지만, 10년 만에 2.0x MOIC이면 IRR 7.2%다. 이 차이가 핵심이다.",
                "PE 실무에서 MOIC과 IRR이 충돌하는 상황이 자주 발생한다. 3년 보유 2.0x MOIC(IRR 26%) vs 7년 보유 3.5x MOIC(IRR 19%)은 어느 쪽이 더 나은 딜인가? MOIC은 3.5x 딜이 압도적으로 좋아 보이지만, IRR은 짧게 들고 2배 번 26% 딜이 더 높다. 이 tension이 PE 의사결정의 핵심 트레이드오프다.",
              ] : [
                "MOIC (Multiple on Invested Capital) is simple: exit proceeds ÷ capital invested. A 2.0x MOIC means doubling your money. It ignores time entirely.",
                "IRR (Internal Rate of Return) is more complex: it converts all cash flows from investment to exit into an annualized compound rate. 2.0x MOIC in 3 years = 26% IRR. 2.0x MOIC in 10 years = 7.2% IRR. This difference is the core insight.",
                "MOIC and IRR frequently conflict in PE practice. Which is better: 3-year hold at 2.0x MOIC (IRR 26%) or 7-year hold at 3.5x MOIC (IRR 19%)? MOIC says 3.5x by a wide margin. IRR says the shorter 2x deal at 26%. This tension is the central trade-off in PE decision-making.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* MOIC same, IRR different chart */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "동일 MOIC(2.0x), 보유 기간에 따른 IRR 급락" : "Same MOIC (2.0x), IRR Drops Sharply with Longer Hold"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "모두 2.0x MOIC — 그런데 IRR은 26%에서 7%대로 떨어진다" : "All 2.0x MOIC — but IRR falls from 26% to 7%"}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={MOIC_IRR_DATA.map(d => ({ ...d, name: d.label(ko) }))} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis domain={[0, 32]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} width={38} />
                  <Tooltip formatter={(v) => [`${Number(v).toFixed(1)}%`, "IRR"]} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <ReferenceLine y={20} stroke="#6366f1" strokeDasharray="4 4" strokeWidth={1.5} />
                  <Bar dataKey="irr" radius={[4, 4, 0, 0]}>
                    {MOIC_IRR_DATA.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko ? "보라색 점선 = PE 목표 IRR 기준 20%. MOIC 2.0x도 3년 이내에 달성해야 목표를 상회한다." : "Purple dashed = PE target IRR 20%. Even 2.0x MOIC must be achieved within ~3 years to meet the target."}
              </p>
            </motion.div>

            {/* MOIC vs IRR explanation table */}
            <motion.div variants={fadeUp(0.15)} className="mt-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">{ko ? "지표" : "Metric"}</th>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">{ko ? "계산식" : "Formula"}</th>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">{ko ? "장점" : "Strength"}</th>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">{ko ? "한계" : "Limitation"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      metric: "MOIC",
                      formula: "Exit Proceeds ÷ Equity Invested",
                      strength: (ko: boolean) => ko ? "직관적 절대 수익 — '2배 벌었다'" : "Intuitive absolute return — 'made 2x'",
                      limit: (ko: boolean) => ko ? "시간 가치 무시 — 3년 2x ≠ 10년 2x" : "Ignores time value — 3yr 2x ≠ 10yr 2x",
                    },
                    {
                      metric: "IRR",
                      formula: "NPV=0인 할인율 (복리 연환산)",
                      strength: (ko: boolean) => ko ? "시간 가치 반영 — 연간 수익률 비교 가능" : "Reflects time value — comparable annual rate",
                      limit: (ko: boolean) => ko ? "작은 중간 현금흐름에 민감, 계산 복잡" : "Sensitive to small interim cash flows, complex to compute",
                    },
                    {
                      metric: "DPI / RVPI",
                      formula: "Distributions to Paid-In / Residual Value to Paid-In",
                      strength: (ko: boolean) => ko ? "실제 현금 회수 여부 추적 (DPI)" : "Tracks actual cash returned (DPI)",
                      limit: (ko: boolean) => ko ? "RVPI는 미실현 평가에 의존" : "RVPI relies on unrealized fair value estimates",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-bold" style={{ color: ACCENT }}>{row.metric}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-mono text-[11px]">{row.formula}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.strength(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.limit(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Hold period vs IRR line chart */}
            <motion.div variants={fadeUp(0.2)} className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "보유 기간이 길어질수록 IRR 감소 (MOIC 2.5x 고정)" : "Longer Hold → Lower IRR (Fixed at 2.5x MOIC)"}
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={HOLD_IRR} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="hold" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}${ko ? "년" : "yr"}`} />
                  <YAxis domain={[0, 40]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} width={38} />
                  <Tooltip formatter={(v) => [`${Number(v).toFixed(1)}%`, "IRR"]} labelFormatter={(l) => `Hold: ${l}${ko ? "년" : "yr"}`} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <ReferenceLine y={20} stroke={ACCENT} strokeDasharray="4 4" strokeWidth={1.5} label={{ value: "20%", fill: ACCENT, fontSize: 10, position: "right" }} />
                  <Line type="monotone" dataKey="irr" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4, fill: "#10b981" }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko ? "MOIC 2.5x, 보라색 점선 = 목표 IRR 20%. 5년 안에 Exit해야 달성 가능." : "MOIC 2.5x fixed. Purple dashed = target IRR 20%. Must exit within ~5 years to achieve."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.2: 가치창출 3대 드라이버 ════════════════════════════════════ */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "가치창출 3대 드라이버 — EBITDA·Multiple·부채상환" : "3 Value Creation Drivers — EBITDA, Multiple, Deleveraging"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "PE 바이아웃 수익은 세 가지 드라이버의 합이다: ① EBITDA 성장 (운영 개선, 매출 증가, 비용 절감), ② Multiple Expansion (Entry 대비 높은 배수로 Exit), ③ Deleveraging (보유 기간 동안 부채 상환으로 자기자본 가치 증가).",
                "학계 연구(McKinsey, Bain)에 따르면 대형 바이아웃 평균 수익 귀인: EBITDA 성장 40%, Multiple Expansion 35–40%, Deleveraging 20–25%. 그러나 이 비중은 시대에 따라 크게 달라진다 — 저금리 시대(2010–2021)에는 Multiple Expansion 비중이 크고, 2022년 이후 금리 인상기에는 Multiple Expansion이 어려워지면서 EBITDA 성장과 Deleveraging의 중요성이 올라갔다.",
                "실무자들이 강조하는 포인트: PE가 완전히 통제할 수 있는 드라이버는 EBITDA 성장 (경영 능력)과 Deleveraging (재무 구조 관리)이다. Multiple Expansion은 시장 환경에 크게 좌우된다. 따라서 Multiple Expansion 없이도 목표 수익을 달성할 수 있는 딜을 찾는 것이 '실력 있는 PE'의 기준이다.",
              ] : [
                "PE buyout returns are the sum of three drivers: ① EBITDA growth (operational improvement, revenue growth, cost reduction), ② Multiple Expansion (exiting at a higher multiple than entry), ③ Deleveraging (debt repayment growing equity value during the hold period).",
                "Academic research (McKinsey, Bain) shows average large buyout return attribution: EBITDA growth 40%, Multiple Expansion 35–40%, Deleveraging 20–25%. But these proportions shift dramatically across eras — in the low-rate period (2010–2021), Multiple Expansion dominated; after 2022 rate hikes, Multiple Expansion became harder, raising the importance of EBITDA growth and Deleveraging.",
                "Practitioners emphasize: PE fully controls EBITDA growth (management skill) and Deleveraging (financial structure). Multiple Expansion is largely dictated by market conditions. Finding deals that can hit target returns without relying on Multiple Expansion is the hallmark of a skilled PE firm.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Value Creation Stacked Bar */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Blackstone·Hilton 가치창출 귀인 분해 (추정)" : "Blackstone·Hilton Return Attribution (Estimated)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "총 수익(2.6x MOIC)에 대한 각 드라이버 기여도 추정" : "Estimated contribution of each driver to total 2.6x MOIC"}
              </p>
              <div className="flex gap-1 h-10 rounded-lg overflow-hidden mb-4">
                {VALUE_CREATION.map((d) => (
                  <motion.div
                    key={d.driver(ko)}
                    className="flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ background: d.color, width: `${d.contribution}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.contribution}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {d.contribution}%
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VALUE_CREATION.map((d) => (
                  <div key={d.driver(ko)} className="rounded-lg p-3" style={{ background: d.color + "15", borderLeft: `3px solid ${d.color}` }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
                      <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200">{d.driver(ko)}</p>
                      <span className="ml-auto text-[12px] font-bold" style={{ color: d.color }}>{d.contribution}%</span>
                    </div>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{d.desc(ko)}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Historical attribution reference */}
            <motion.div variants={fadeUp(0.15)} className="mt-5 rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: ACCENT }}>
                {ko ? "역사적 수익 귀인 변화 — 시대별" : "Historical Return Attribution Shifts by Era"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px]">
                {[
                  {
                    era: (ko: boolean) => ko ? "2005–2008 (버블기)" : "2005–2008 (Bubble)",
                    ebitda: 30, multiple: 50, delev: 20,
                    note: (ko: boolean) => ko ? "Multiple Expansion이 절반 이상 — 고점 매수 리스크 내재" : "Multiple Expansion over half — peak-buying risk embedded",
                    color: "#ef4444",
                  },
                  {
                    era: (ko: boolean) => ko ? "2010–2014 (회복기)" : "2010–2014 (Recovery)",
                    ebitda: 45, multiple: 30, delev: 25,
                    note: (ko: boolean) => ko ? "저점 매수 + EBITDA 회복 — 균형잡힌 수익 구조" : "Bottom entry + EBITDA recovery — balanced return structure",
                    color: "#10b981",
                  },
                  {
                    era: (ko: boolean) => ko ? "2018–2022 (저금리 후반)" : "2018–2022 (Low Rate Late)",
                    ebitda: 40, multiple: 38, delev: 22,
                    note: (ko: boolean) => ko ? "EBITDA + Multiple Expansion 모두 기여 — 호황기 패턴" : "Both EBITDA + Multiple contributing — boom pattern",
                    color: ACCENT,
                  },
                ].map((era, i) => (
                  <div key={i} className="rounded-lg p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                    <p className="text-[11px] font-bold mb-2 text-gray-700 dark:text-gray-300">{era.era(ko)}</p>
                    <div className="flex gap-1 h-5 rounded overflow-hidden mb-2">
                      <div style={{ width: `${era.ebitda}%`, background: "#10b981" }} className="flex items-center justify-center text-[9px] text-white font-bold">{era.ebitda}%</div>
                      <div style={{ width: `${era.multiple}%`, background: ACCENT }} className="flex items-center justify-center text-[9px] text-white font-bold">{era.multiple}%</div>
                      <div style={{ width: `${era.delev}%`, background: "#f59e0b" }} className="flex items-center justify-center text-[9px] text-white font-bold">{era.delev}%</div>
                    </div>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{era.note(ko)}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-3 text-[10px] text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#10b981]" /> {ko ? "EBITDA 성장" : "EBITDA Growth"}</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm" style={{ background: ACCENT }} /> {ko ? "Multiple Expansion" : "Multiple Expansion"}</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#f59e0b]" /> {ko ? "Deleveraging" : "Deleveraging"}</span>
              </div>
            </motion.div>
          </motion.section>

          {/* ══ Ch.3: Vintage Year Effect ════════════════════════════════════════ */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Vintage Year 효과 — 언제 투자했느냐가 수익을 결정한다" : "Vintage Year Effect — When You Invest Determines Returns"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "PE 수익에서 가장 중요한, 그러나 가장 통제하기 어려운 요소 중 하나가 Vintage Year(펀드 조성 연도)다. 2007년에 펀드를 조성한 GP와 2009년에 조성한 GP는 같은 능력이라도 완전히 다른 수익을 내게 된다.",
                "2007 빈티지: 고점에서 비싸게 사고 GFC를 맞이 → 중앙값 IRR 5–8% 수준. 2009 빈티지: 저점에서 저렴하게 사고 이후 10년간 시장 상승을 통째로 향유 → 중앙값 IRR 18–20%. 같은 1달러를 투자해도 타이밍에 따라 수익이 3–4배 차이난다.",
              ] : [
                "One of the most important, yet hardest to control, factors in PE returns is vintage year (fund formation year). A GP raising a fund in 2007 vs. 2009 will produce dramatically different returns with identical skill.",
                "2007 vintage: bought at peak prices, hit by the GFC → median IRR 5–8%. 2009 vintage: bought at trough, rode the full 10-year market recovery → median IRR 18–20%. The same dollar invested produces 3–4x different returns based purely on timing.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Vintage year chart */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "빈티지 연도별 바이아웃 펀드 IRR (중앙값 vs 3분위)" : "Buyout Fund IRR by Vintage Year (Median vs. 3rd Quartile)"}
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={VINTAGE_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="vintage" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis domain={[0, 30]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} width={38} />
                  <Tooltip
                    formatter={(v, name) => [`${Number(v).toFixed(1)}%`, name === "medianIrr" ? (ko ? "중앙값 IRR" : "Median IRR") : (ko ? "3분위 IRR" : "3rd Quartile IRR")]}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <ReferenceLine y={20} stroke={ACCENT} strokeDasharray="4 4" strokeWidth={1.5} />
                  <ReferenceLine y={8} stroke="#9ca3af" strokeDasharray="3 3" strokeWidth={1} />
                  <Bar dataKey="medianIrr" name={ko ? "중앙값 IRR" : "Median IRR"} radius={[3, 3, 0, 0]}>
                    {VINTAGE_DATA.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                  <Bar dataKey="quartile3" name={ko ? "3분위 IRR" : "3rd Quartile IRR"} fill="#d1d5db" opacity={0.5} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko
                  ? "빈티지 2007 → 2009년 구간의 중앙값 IRR 반전에 주목. 보라색 점선 = 목표 20%, 회색 점선 = 상장주식 장기 평균 8%"
                  : "Note the dramatic IRR reversal from 2007 → 2009 vintages. Purple = target 20%, gray = public equity long-run avg 8%"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.4: 실제 PE 케이스 Return ════════════════════════════════════════ */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실제 바이아웃 수익 사례 — MOIC·IRR 비교" : "Real Buyout Returns — MOIC & IRR Comparison"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Case returns scatter visual */}
            <motion.div variants={stagger} className="space-y-3">
              {CASE_RETURNS.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200">
                          {c.name.replace("\n", " ")}
                        </p>
                        {c.link && (
                          <Link href={c.link} className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white transition-opacity hover:opacity-80" style={{ background: c.color }}>
                            {ko ? "딜 보기" : "View deal"}
                          </Link>
                        )}
                      </div>
                      <div className="flex gap-4 mb-2 flex-wrap">
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500">MOIC</p>
                          <p className="text-[18px] font-bold" style={{ color: c.color }}>{c.moic}x</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500">IRR</p>
                          <p className="text-[18px] font-bold" style={{ color: c.color }}>{c.irr}%</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500">{ko ? "보유" : "Hold"}</p>
                          <p className="text-[18px] font-bold text-gray-600 dark:text-gray-400">{c.hold}{ko ? "년" : "yr"}</p>
                        </div>
                      </div>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{c.drivers(ko)}</p>
                    </div>
                    {/* Mini bar */}
                    <div className="flex-shrink-0 flex flex-col gap-1 items-end">
                      <div className="w-24">
                        <p className="text-[9px] text-gray-400 mb-0.5 text-right">MOIC</p>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ background: c.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min((c.moic / 5.0) * 100, 100)}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                      <div className="w-24">
                        <p className="text-[9px] text-gray-400 mb-0.5 text-right">IRR</p>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ background: c.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min((c.irr / 80) * 100, 100)}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 + 0.15 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />
          </div>

          {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
          <motion.section id="faq" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ko ? "자주 묻는 질문" : "Frequently Asked Questions"}</h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ══ 딜 아카이브 ══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "딜 아카이브" : "Deal Archive"}
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {ko ? "실제 딜로 배우는 LBO 수익률" : "LBO Returns in Real Deals"}
              </h3>
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-700 p-5 hover:opacity-90 transition-opacity">
              <Link href="/deals/kkr-dollar-general" className="block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-sm font-black text-white">KKR</span>
                      <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wide">
                        {ko ? "LBO — IRR 역대급 수익" : "LBO — Record-Breaking IRR"}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      {ko ? "KKR × Dollar General — IRR ~70%, MOIC ~4-5×" : "KKR × Dollar General — IRR ~70%, MOIC ~4-5×"}
                    </p>
                    <p className="text-[12px] text-emerald-200 leading-relaxed">
                      {ko
                        ? "금융위기가 오히려 EBITDA를 키운 역설. 불황형 소매의 반주기 특성 + 보수적 레버리지 + 오퍼레이션 알파의 완벽한 조합."
                        : "The financial crisis amplified EBITDA instead of crushing it. Counter-cyclical retail + conservative leverage + operational alpha — the perfect combination."}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-2xl font-black text-white">~70%</p>
                    <p className="text-[10px] text-emerald-200">IRR</p>
                    <p className="text-lg font-bold text-white mt-1">~4-5×</p>
                    <p className="text-[10px] text-emerald-200">MOIC</p>
                  </div>
                </div>
                <p className="text-[11px] text-emerald-300 mt-3 font-semibold">
                  {ko ? "딜 전체 분석 보기 →" : "View full deal analysis →"}
                </p>
              </Link>
            </motion.div>
          </motion.section>

          {/* ══ Series Nav ════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <div className="flex flex-wrap gap-3">
              <Link href={ko ? "/deal-101/lbo-capital-structure" : "/en/deal-101/lbo-capital-structure"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                ← {ko ? "Ch.1 — 자본구조 해부" : "Ch.1 — Capital Stack"}
              </Link>
              <Link href={ko ? "/deal-101/lbo-deal-process" : "/en/deal-101/lbo-deal-process"}
                className="text-[12px] px-4 py-2 rounded-full border text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT, borderColor: ACCENT }}>
                {ko ? "Ch.3 — 딜 프로세스 & 리스크 →" : "Ch.3 — Deal Process & Risk →"}
              </Link>
            </div>
          </motion.section>

          {/* ══ Sources ═══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <motion.h3 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4">{ko ? "참고 자료" : "References"}</motion.h3>
            <motion.ol variants={stagger} className="space-y-2">
              {SOURCES.map((s) => (
                <motion.li key={s.id} variants={fadeUp()} className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2">
                  <span className="font-bold flex-shrink-0">[{s.id}]</span>
                  <span>{s.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          <div className="flex justify-end pb-4">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
          
            <LikeButton slug={concept.slug} lang={lang} /></div>

        </div>
      </main>
      <Footer />
    </>
  );
}
