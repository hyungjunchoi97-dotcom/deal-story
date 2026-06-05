/**
 * Valuation 시리즈 Ch.1 — 회사에 값을 매기는 3가지 방법
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 (직역체 지양)
 *  - 카드·컬러 박스 최소화. 텍스트가 주인공.
 *  - em-dash 자제, 짧은 문장 위주
 *  - 표 1개만 사용 (상황별 method 매핑)
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { VAL_CHAPTERS, getValChapterBySlug, getValSeriesNav } from "@/data/valuation-series";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "val-ch01-frameworks";
const ACCENT = "#3b82f6";

const USE_CASES = [
  { koCtx: "IPO 가격 산정",          enCtx: "IPO pricing",                   koMain: "Trading Comps",                     enMain: "Trading Comps",                     koSub: "DCF",                  enSub: "DCF" },
  { koCtx: "M&A 매각 (sell-side)",   enCtx: "M&A sell-side",                  koMain: "Football Field (4 method 다)",      enMain: "Full football field",               koSub: "—",                    enSub: "—" },
  { koCtx: "M&A 인수 (buy-side)",    enCtx: "M&A buy-side",                   koMain: "DCF + Transaction Comps",            enMain: "DCF + Transaction Comps",            koSub: "LBO reverse-math",     enSub: "LBO reverse-math" },
  { koCtx: "PE / LBO 인수",          enCtx: "PE / LBO acquisition",           koMain: "LBO reverse-math + Trading Comps",   enMain: "LBO reverse-math + Trading Comps",   koSub: "DCF",                  enSub: "DCF" },
  { koCtx: "Restructuring",          enCtx: "Restructuring",                  koMain: "Going-concern DCF vs Liquidation",  enMain: "Going-concern DCF vs liquidation",  koSub: "Asset-based",          enSub: "Asset-based" },
  { koCtx: "Fairness opinion",       enCtx: "Fairness opinion",               koMain: "4 method 모두 (board에 range 제시)", enMain: "All four (range presented to board)", koSub: "—",                    enSub: "—" },
];

// 상황별 worked example — "왜 이 method를 보나"
const CONTEXT_EXAMPLES = [
  {
    koCtx: "IPO 상장에서는",
    enCtx: "In an IPO",
    koQ: "\"상장된 비슷한 회사들이 PER·EV/EBITDA 몇 배에 거래되나?\"",
    enQ: "\"What multiples (P/E, EV/EBITDA) do comparable listed peers trade at?\"",
    koWhy: "결국 시장 투자자들이 사줄 가격이어야 하니까, peer가 거래되는 배수가 제일 중요해요.",
    enWhy: "The price has to be one public investors will actually pay — so peer trading multiples matter most.",
  },
  {
    koCtx: "M&A 매각에서는",
    enCtx: "In an M&A sale",
    koQ: "\"전략적 인수자가 시너지까지 반영하면 최대 얼마까지 낼 수 있나?\"",
    enQ: "\"How high can a strategic buyer go once they price in synergies?\"",
    koWhy: "시너지가 얹히기 때문에 IPO 때보다 더 높은 가격이 나오기도 합니다.",
    enWhy: "Because synergies get added on top, the number can come out higher than the IPO price.",
  },
  {
    koCtx: "PE 인수에서는",
    enCtx: "In a PE buyout",
    koQ: "\"이 가격에 사서 빚 끼고 5년 뒤 팔면 목표 수익률(IRR)이 나오나?\"",
    enQ: "\"If I buy at this price with leverage and sell in 5 years, do I hit my target IRR?\"",
    koWhy: "원하는 수익률에서 거꾸로 살 수 있는 가격을 계산해요. 이게 LBO reverse-math예요.",
    enWhy: "You work backwards from the return you need to the price you can pay. That's LBO reverse-math.",
  },
  {
    koCtx: "파산·구조조정에서는",
    enCtx: "In a restructuring",
    koQ: "\"계속 굴리는 게 나은가, 아니면 자산을 다 팔아치우는 게 나은가?\"",
    enQ: "\"Is it worth more as a going concern, or broken up and sold for parts?\"",
    koWhy: "이때는 미래 현금흐름(DCF)보다 자산을 팔았을 때 나오는 청산가치가 더 중요할 수 있어요.",
    enWhy: "Here, liquidation value can matter more than future cash flow (DCF).",
  },
];

// 3 method 비교 — input → output 구조
const METHODS = [
  { koName: "DCF",                 enName: "DCF",                koInput: "미래 FCF + 할인율 (WACC)",       enInput: "Future FCF + discount rate (WACC)",   koOutput: "회사의 내재가치 (intrinsic value)",   enOutput: "Intrinsic value of the business" },
  { koName: "Multiples (Comps)",   enName: "Multiples (Comps)",  koInput: "비슷한 회사들의 거래 배수",       enInput: "Multiples from similar companies",     koOutput: "시장이 이런 회사를 평가하는 가격",     enOutput: "What the market pays for this kind of company" },
  { koName: "Asset-based",          enName: "Asset-based",         koInput: "자산 - 부채",                     enInput: "Assets minus liabilities",             koOutput: "청산가치 또는 장부가치",               enOutput: "Liquidation or book value" },
];

// Football field mockup data — $M 기준
const FF_DATA = [
  { koMethod: "Trading Comps",       enMethod: "Trading Comps",       low: 850,  high: 1100 },
  { koMethod: "Transaction Comps",   enMethod: "Transaction Comps",   low: 1000, high: 1300 },
  { koMethod: "DCF",                 enMethod: "DCF",                 low: 950,  high: 1250 },
  { koMethod: "LBO reverse-math",    enMethod: "LBO reverse-math",    low: 800,  high: 1050 },
];
const FF_MIN = 700;
const FF_MAX = 1400;
const FF_OVERLAP_LOW = 1000;
const FF_OVERLAP_HIGH = 1050;

// 시간 배분 — 실제 valuation 작업에서 어디에 시간을 쓰나
const TIME_ALLOC = [
  { koLabel: "Revenue projection · 가정 검증",   enLabel: "Revenue projection · assumptions",   pct: 45 },
  { koLabel: "Peer universe 선정 + Comps 정리",  enLabel: "Peer selection + comps cleanup",     pct: 30 },
  { koLabel: "Sensitivity · 시나리오 · deck",    enLabel: "Sensitivity · scenarios · deck",      pct: 20 },
  { koLabel: "WACC 계산",                          enLabel: "WACC calculation",                   pct: 5  },
];

export default function MaVal01Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getValChapterBySlug(SLUG)!;
  const { prev, next } = getValSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/learn" : "/en/learn"} className="hover:text-gray-600 dark:hover:text-gray-300">Learn</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.1" : "Valuation Series · Ch.1"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Valuation 시리즈" : "Valuation Series"}</span>
            <span>·</span>
            <span>Ch.{chapter.ch}</span>
            <span>·</span>
            <span>{chapter.readingMinutes}{ko ? "분 읽기" : " min"}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                {ko ? chapter.titleKo : chapter.titleEn}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? chapter.taglineKo : chapter.taglineEn}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="top" lang={lang} />
            
              <LikeButton slug={SLUG} lang={lang} /></div>
          </div>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-12">
          <div className="flex gap-1.5 flex-wrap">
            {VAL_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 pb-16 prose-base">

          {/* § 1 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "회사 가격은 하나가 아니다" : "There isn't one price for a company"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "회사 하나를 사거나 팔 때 가장 먼저 정해야 하는 게 가격이에요. 그런데 \"이 회사 얼마짜리예요?\" 라는 질문에 딱 떨어지는 한 가지 답이 있다고 생각하면, valuation을 잘못 이해한 거예요."
                : "When you're buying or selling a business, the first thing you have to set is the price. But if you think 'how much is this company worth?' has one clean answer, you've misunderstood valuation."}</p>
              <p>{ko
                ? "같은 회사라도 보는 사람이 다르면 가격이 달라지거든요. IPO 직전이면 한 가격, M&A 매각 협상에서는 또 다른 가격, 파산 직전이면 완전히 다른 가격으로 거래됩니다. 회사 가치는 고정된 숫자가 아니라, 상황에 따라 움직이는 거예요."
                : "The same company is worth different amounts to different people. One price right before an IPO, another in an M&A negotiation, a completely different one near bankruptcy. A company's value isn't a fixed number — it moves with the situation."}</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{ko
                ? "그래서 valuation은 \"정답을 맞히는 작업\"이 아니에요. \"이 상황에서 설득 가능한 가격 범위를 만들어내는 작업\"에 더 가깝습니다."
                : "So valuation isn't about 'getting the right answer.' It's closer to 'building a price range you can defend in this particular situation.'"}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "가치를 구하는 3가지 방법" : "Three ways to build a value"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-5">
              <p>{ko
                ? "방법이 수십 가지일 것 같지만, 실제로 IB·PE·헤지펀드 어디서나 쓰는 건 딱 세 가지로 줄어들어요. 하나씩 볼게요."
                : "It might seem like there are dozens of methods, but across IBs, PE, and hedge funds it really comes down to three. Let's take them one at a time."}</p>

              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "첫째, DCF (Discounted Cash Flow)." : "First, DCF (Discounted Cash Flow)."}</p>
                <p>{ko
                  ? "회사가 앞으로 만들어낼 현금흐름을 다 더한 다음, 그걸 현재 시점으로 할인해서 가치를 구하는 방법이에요. 이론적으로 가장 깔끔한 접근이고, 그래서 학교에서 가장 먼저 배웁니다."
                  : "Add up all the cash the company will generate in the future, then discount it back to today. The cleanest theoretical approach, which is why schools teach it first."}</p>
              </div>

              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "둘째, Multiples (Comps)." : "Second, multiples (comps)."}</p>
                <p>{ko
                  ? "비슷한 회사들이 시장에서 얼마에 거래되는지 보고, 그 멀티플을 적용하는 방법. 상장된 peer를 보는 Trading Comps와 최근 M&A deal을 보는 Transaction Comps, 두 가지가 있어요. 실무에서 가장 많이 쓰이는 방식입니다."
                  : "Look at how similar companies trade in the market and apply those multiples. Trading comps look at listed peers; transaction comps look at recent M&A deals. This is the method bankers use most often in practice."}</p>
              </div>

              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "셋째, Asset-based." : "Third, asset-based."}</p>
                <p>{ko
                  ? "자산 빼기 부채. 청산 가치를 구할 때 주로 쓰지만, 회사가 정상적으로 굴러가고 있는 상황에서는 거의 안 씁니다. 부동산·금융기관·파산 직전 회사처럼 자산 그 자체가 가치의 핵심인 경우에만 메인으로 등장해요."
                  : "Assets minus liabilities. Mostly used for liquidation value. Almost never the main method for a going concern — only takes the lead when assets themselves are the story, like real estate, financial institutions, or distressed companies."}</p>
              </div>
            </div>

            {/* 3 method 미니 비교 — input → output */}
            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {METHODS.map((m, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2.5">{ko ? m.koName : m.enName}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Input</p>
                  <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug mb-2.5">{ko ? m.koInput : m.enInput}</p>
                  <div className="flex items-center gap-1.5 my-1">
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">↓</span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Output</p>
                  <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? m.koOutput : m.enOutput}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "상황별로 무엇을 쓰나" : "Which method, when"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mb-6">
              <p>{ko
                ? "같은 회사인데 왜 가격이 달라질까요? 보는 사람의 \"목적\"이 다르기 때문이에요. 사는 사람이 머릿속으로 던지는 질문이 상황마다 다르거든요. 예를 들어:"
                : "Why does the same company get different prices? Because the buyer's goal is different — and so is the question running through their head. For example:"}</p>
            </div>

            {/* 상황별 worked examples */}
            <div className="space-y-4 mb-8">
              {CONTEXT_EXAMPLES.map((c, i) => (
                <div key={i} className="border-l-2 pl-4 py-0.5" style={{ borderColor: ACCENT }}>
                  <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? c.koCtx : c.enCtx}</p>
                  <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed mb-1">{ko ? c.koQ : c.enQ}</p>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{ko ? c.koWhy : c.enWhy}</p>
                </div>
              ))}
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mb-6">
              <p>{ko
                ? "정리하면, 회사 가격은 \"누가 / 왜 / 언제 사는지\"에 따라 달라집니다. 그래서 실무에서도 상황마다 강조하는 방법(method)이 달라요. 아래 표가 그걸 한눈에 보여줍니다."
                : "In short, a company's price depends on who's buying, why, and when. So practitioners lead with different methods depending on the situation. The table below maps that out."}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-t border-b border-gray-200 dark:border-gray-800">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-500 dark:text-gray-400 w-1/3">{ko ? "상황" : "Context"}</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900 dark:text-gray-100">{ko ? "메인 방법" : "Primary"}</th>
                    <th className="text-left py-3 font-semibold text-gray-500 dark:text-gray-400">{ko ? "보조" : "Secondary"}</th>
                  </tr>
                </thead>
                <tbody>
                  {USE_CASES.map((u, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-3 pr-4 text-gray-700 dark:text-gray-300 align-top">{ko ? u.koCtx : u.enCtx}</td>
                      <td className="py-3 pr-4 text-gray-900 dark:text-gray-100 align-top">{ko ? u.koMain : u.enMain}</td>
                      <td className="py-3 text-gray-500 dark:text-gray-400 align-top">{ko ? u.koSub : u.enSub}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "그래서 셋을 다 보여준다" : "That's why all three get shown"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "그래서 실무에서는 DCF 하나만 믿지 않아요. Trading Comps, Transaction Comps, DCF, LBO를 같이 놓고 봅니다. 각 방법이 내놓는 가격 범위를 막대로 그려서 한 페이지에 올려놓는데, 이걸 football field라고 불러요."
                : "That's why practitioners never trust DCF alone. They lay out trading comps, transaction comps, DCF, and LBO together — each method's range drawn as a bar on one page. It's called a football field."}</p>
              <p>{ko
                ? "왜 굳이 다 보여주냐면, 어느 한 방법도 혼자서는 못 믿거든요. DCF는 5년 뒤 매출 가정 하나만 바꿔도 결과가 30% 흔들리고, Comps는 peer를 누구로 고르냐에 따라 배수가 2~3배 차이 나고, Asset-based는 회사가 계속 굴러가는 가치를 못 잡아요. 그래서 여러 방법을 같이 펼쳐놓고, 서로 겹치는 구간을 찾습니다."
                : "Why show all of them? Because none holds up on its own. DCF swings 30% on a single five-year revenue assumption. Comps move 2-3× depending on which peers you pick. Asset-based misses the value of a company that keeps running. So you spread them out and look for where they overlap."}</p>
              <p>{ko
                ? "예를 들어 네 방법이 이렇게 나왔다고 해볼게요. Trading Comps $850M~1,100M, Transaction Comps $1,000M~1,300M, DCF $950M~1,250M, LBO $800M~1,050M. 여기서 여러 방법이 공통으로 겹치는 구간이 $1,000M~1,050M이라면, 바로 그 구간을 \"가장 방어 가능한 가격 범위\"로 잡는 거예요. board나 buyer를 설득할 때 \"여러 방법이 다 여기서 만난다\"고 말할 수 있으니까요."
                : "Say the four methods came out like this: trading comps $850-1,100M, transaction comps $1,000-1,300M, DCF $950-1,250M, LBO $800-1,050M. Where they all overlap — around $1,000-1,050M — becomes your 'most defensible range.' When you face the board or a buyer, you can say 'every method converges here.'"}</p>
            </div>

            {/* Football field mockup */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Football Field 예시 — Enterprise Value ($M)" : "Football field example — Enterprise Value ($M)"}
              </p>

              <div className="relative">
                {/* Overlap zone overlay */}
                <div
                  className="absolute top-0 bottom-10 rounded"
                  style={{
                    left: `${((FF_OVERLAP_LOW - FF_MIN) / (FF_MAX - FF_MIN)) * 100}%`,
                    width: `${((FF_OVERLAP_HIGH - FF_OVERLAP_LOW) / (FF_MAX - FF_MIN)) * 100}%`,
                    background: `${ACCENT}18`,
                    border: `1px dashed ${ACCENT}80`,
                  }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                    {ko ? "Overlap" : "Overlap"}
                  </div>
                </div>

                {/* Method bars */}
                <div className="space-y-2.5 mt-6 relative">
                  {FF_DATA.map((m, i) => {
                    const leftPct = ((m.low - FF_MIN) / (FF_MAX - FF_MIN)) * 100;
                    const widthPct = ((m.high - m.low) / (FF_MAX - FF_MIN)) * 100;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-32 flex-shrink-0">
                          <p className="text-[11px] text-gray-700 dark:text-gray-300">{ko ? m.koMethod : m.enMethod}</p>
                        </div>
                        <div className="flex-1 relative h-5">
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                            className="absolute top-0 h-full rounded text-white text-[9px] font-bold flex items-center justify-between px-2"
                            style={{ left: `${leftPct}%`, width: `${widthPct}%`, background: ACCENT, transformOrigin: "left" }}
                          >
                            <span>${m.low}</span>
                            <span>${m.high}</span>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* X-axis */}
                <div className="ml-32 pl-3 mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                  <span>${FF_MIN}M</span>
                  <span>$1B</span>
                  <span>${FF_MAX}M</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "4 method가 다 \"$1.0-1.05B\" 근처에서 겹친다 (점선 박스). 이걸 \"consensus range\" 로 잡고 board·buyer 협상의 anchor로 사용."
                  : "All four methods overlap near $1.0-1.05B (dashed box). That's the consensus range — the anchor for board and buyer negotiations."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Valuation 잘한다는 건 뭐가 잘하는 건가" : "What does 'good at valuation' actually mean"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "처음 배우는 사람이 자주 오해하는 게 있어요. \"WACC 공식 외우고 DCF 모델 정확하게 짜면 valuation 잘하는 거다\" 라고 생각하는데, 사실은 그게 아니에요."
                : "Beginners often assume valuation skill means memorizing the WACC formula and building a flawless DCF. It doesn't."}</p>
              <p>{ko
                ? "WACC은 거의 모든 IB가 비슷한 템플릿을 써요. 베타값 하나 뽑으면 나머지는 자동으로 채워집니다. DCF 모델 구조도 표준화돼 있어서 누가 짜도 비슷한 숫자가 나와요. 엑셀을 잘 다루는 건 기본 중의 기본일 뿐이에요."
                : "Almost every IB uses the same WACC template. Pull one beta and the rest auto-fills. The DCF structure is standardized too, so anyone building it lands on a similar number. Being good at Excel is just table stakes."}</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{ko
                ? "진짜 valuation을 잘한다는 건, 숫자 자체보다 그 숫자를 \"방어하는 능력\"이에요. 구체적으로는:"
                : "Real valuation skill is less about the number and more about defending it. Specifically:"}</p>

              <ul className="space-y-2 pl-1">
                {(ko
                  ? [
                      "왜 이 peer들을 골랐는지",
                      "왜 이 매출 성장률을 가정했는지",
                      "왜 이 multiple이 맞다고 보는지",
                      "왜 이 가격 범위가 board나 buyer에게 설득 가능한지",
                    ]
                  : [
                      "why you picked these peers",
                      "why you assumed this revenue growth",
                      "why this multiple is the right one",
                      "why this range is defensible to the board or buyer",
                    ]
                ).map((t, i) => (
                  <li key={i} className="flex gap-2.5 text-[15px] text-gray-700 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <p>{ko
                ? "이걸 논리적으로 설명하고 방어할 수 있느냐. 그게 진짜 실력이에요. 다음 챕터부터 그 실제 작업을 하나씩 보여드릴게요. DCF가 실무에서 어떻게 굴러가는지(Ch.2), Comps universe를 어떻게 만드는지(Ch.3), 그걸 다 합쳐 football field로 가는 과정(Ch.4)까지."
                : "Can you explain and defend all of that with logic? That's the real skill. The next chapters walk through the actual work — how DCF runs in practice (Ch.2), how you build a comps universe (Ch.3), and how it all comes together into a football field (Ch.4)."}</p>
            </div>

            {/* 한 줄 정리 */}
            <div className="mt-7 rounded-lg p-5" style={{ background: `${ACCENT}0F`, border: `1px solid ${ACCENT}40` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "Valuation은 회사의 절대가격을 계산하는 게 아니라, 거래 맥락에 맞는 합리적인 가격 범위를 설계하고 방어하는 작업이다."
                : "Valuation isn't calculating a company's absolute price — it's designing and defending a reasonable price range that fits the deal context."}</p>
            </div>

            {/* 시간 배분 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "실제 valuation 작업 — 시간 배분" : "Real valuation work — time allocation"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko
                  ? "한 deal의 valuation 작업이 들어가면 시간이 어디에 쓰이는지."
                  : "Where the hours actually go in a deal valuation."}
              </p>
              <div className="space-y-2.5">
                {TIME_ALLOC.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-48 flex-shrink-0">
                      <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? t.koLabel : t.enLabel}</p>
                    </div>
                    <div className="flex-1 h-5 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.pct}%` }}
                        viewport={VP}
                        transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                        className="h-full rounded flex items-center justify-end pr-2 text-white text-[10px] font-bold"
                        style={{ background: ACCENT }}
                      >
                        {t.pct}%
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "WACC 계산이 시간 5%. 학교에서 가장 많이 배우는 부분이 실무에서 가장 적은 시간 쓰는 부분이라는 게 흔한 역설."
                  : "WACC takes 5% of the time. The thing schools teach most is the thing practitioners spend the least time on — a classic paradox."}
              </p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.2 — {ko ? "DCF 실무 — 실제로 어떻게 만들어지나" : "DCF in practice — how it actually gets built"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "WACC 템플릿이 어떻게 굴러가는지, Revenue projection은 어디서 가져오는지, NWC·CAPEX·D&A는 어떻게 연결하는지. 실제 작업 흐름을 그대로 따라가봅니다."
                  : "How the WACC template runs, where revenue projections come from, how NWC/CAPEX/D&A get linked. Walking through the actual workflow step by step."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share — 카드형 + AuthorByline */}
          <ShareButtons
            title={ko ? chapter.titleKo : chapter.titleEn}
            variant="bottom"
            lang={lang}
            readingMinutes={chapter.readingMinutes}
          />

          
          <LikeButton slug={SLUG} lang={lang} />{/* Series prev/next */}
          {(prev || next) && (
            <div className="mt-6">
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
                next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
              />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
