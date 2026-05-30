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
  { koCtx: "IPO 가격 산정",          enCtx: "IPO pricing",                   koMain: "Trading Comps",                     enMain: "Trading Comps",                     koSub: "DCF" },
  { koCtx: "M&A 매각 (sell-side)",   enCtx: "M&A sell-side",                  koMain: "Football Field (4 method 다)",      enMain: "Full football field",               koSub: "—" },
  { koCtx: "M&A 인수 (buy-side)",    enCtx: "M&A buy-side",                   koMain: "DCF + Transaction Comps",            enMain: "DCF + Transaction Comps",            koSub: "LBO reverse-math" },
  { koCtx: "PE / LBO 인수",          enCtx: "PE / LBO acquisition",           koMain: "LBO reverse-math + Trading Comps",   enMain: "LBO reverse-math + Trading Comps",   koSub: "DCF" },
  { koCtx: "Restructuring",          enCtx: "Restructuring",                  koMain: "Going-concern DCF vs Liquidation",  enMain: "Going-concern DCF vs liquidation",  koSub: "Asset-based" },
  { koCtx: "Fairness opinion",       enCtx: "Fairness opinion",               koMain: "4 method 모두 (board에 range 제시)", enMain: "All four (range presented to board)", koSub: "—" },
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
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
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
                ? "회사 하나를 사거나 팔 때 가장 먼저 정해야 하는 게 가격이에요. 그런데 \"이 회사는 얼마짜리예요?\" 라는 질문에 한 가지 답이 있다고 생각하면 valuation을 잘못 배운 거예요. 같은 회사가 IPO 직전에는 한 가격, M&A 매각 협상에서는 다른 가격, 파산 직전에는 또 다른 가격으로 거래됩니다."
                : "When you're buying or selling a business, the first thing you have to set is the price. But if you think 'how much is this company worth?' has a single answer, you've learned valuation wrong. The same company trades at one price right before IPO, another in an M&A negotiation, and yet another in bankruptcy."}</p>
              <p>{ko
                ? "가치는 절대값이 아니라 상황에 따라 달라집니다. Valuation은 \"정답을 구하는 작업\"이 아니라 \"이 상황에서 합리적인 가격 범위가 어디인가를 짜는 작업\"에 가까워요."
                : "Value isn't an absolute number — it shifts with context. Valuation isn't 'finding the right answer.' It's 'building the defensible price range for this particular situation.'"}</p>
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
                ? "실제로 IB·PE·헤지펀드 어디서나 쓰는 방법은 세 가지로 줄어듭니다."
                : "Across IBs, PE, and hedge funds, the methods reduce to three."}</p>

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
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "상황별로 무엇을 쓰나" : "Which method, when"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mb-6">
              <p>{ko
                ? "같은 회사라도 어느 상황이냐에 따라 강조하는 method가 달라요. IPO에서는 시장 peer가 어떻게 거래되는지가 가장 중요하지만, 파산 직전 회사라면 자산을 매각했을 때 얼마 나오는지가 핵심이 됩니다."
                : "The method you lead with depends on the situation. In an IPO, what matters most is how listed peers trade. For a company near bankruptcy, what matters is what the assets fetch in a sale."}</p>
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
                      <td className="py-3 text-gray-500 dark:text-gray-400 align-top">{u.koSub}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "그래서 셋을 다 보여준다" : "That's why all three get shown"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Valuation deck을 짤 때 거의 항상 3-4 method를 동시에 보여줍니다. 이걸 football field라고 부르는데, 각 method의 가격 range를 막대로 그려서 한 페이지에 올려놓는 형태예요."
                : "When you put together a valuation deck, you almost always present 3-4 methods side by side. It's called a football field — each method's range plotted as a bar on a single page."}</p>
              <p>{ko
                ? "왜 그렇게 하냐면, 어느 한 method도 단독으로는 신뢰가 안 가서 그래요. DCF는 5년 뒤 매출 가정 하나로 결과가 30% 흔들리고, Comps는 peer를 누구로 정했냐에 따라 multiple이 2-3배 차이 나고, Asset-based는 going-concern 가치를 못 잡아요. 셋을 같이 보여주면서 \"여기가 overlap zone이니까 이 범위가 합리적이다\" 라고 정당화하는 게 표준 방식입니다."
                : "Because no single method holds up alone. DCF can swing 30% on a five-year revenue assumption. Comps can move 2-3× on peer selection. Asset-based misses going-concern value. Showing all three lets you point to the overlap zone and argue 'this range is reasonable.'"}</p>
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
                ? "처음 배우는 사람이 자주 오해하는 부분이 있어요. WACC 공식을 외우고 DCF 모델을 정확하게 짜면 valuation을 잘하는 거라고 생각하는데, 사실은 그게 아니에요."
                : "A common misconception when starting out — that valuation skill means memorizing the WACC formula and building DCF models correctly. It isn't."}</p>
              <p>{ko
                ? "WACC은 거의 모든 IB가 비슷한 템플릿을 써요. 베타값 하나 뽑으면 나머지는 자동으로 채워집니다. DCF 모델 구조도 표준화되어 있어서 누가 짜도 비슷한 결과가 나와요."
                : "Every IB uses a similar WACC template. Pull one beta, the rest auto-fills. The DCF model structure is standardized too, so whoever builds it ends up with roughly the same output."}</p>
              <p>{ko
                ? "진짜 잘하는 사람이 잘하는 건 다른 부분이에요. 5년 동안 이 회사 매출이 어떻게 변할지에 대한 가정을 얼마나 defensible하게 짜는지. Peer universe를 누구로 정해서 어떤 multiple을 적용할지. 그리고 그걸 board나 buyer에게 어떻게 설명할지."
                : "Real skill lives somewhere else — how defensible your five-year revenue assumptions are, who you include in the peer universe, and how you explain it to the board or buyer."}</p>
              <p>{ko
                ? "다음 챕터부터는 그 실제 작업을 보여드릴게요. DCF가 실무에서 어떻게 굴러가는지 (Ch.2), Comps universe를 어떻게 만드는지 (Ch.3), 그걸 다 합쳐서 football field로 가는 과정 (Ch.4)."
                : "The next chapters walk through that actual work. How DCF really runs in practice (Ch.2), how you build a comps universe (Ch.3), and how it all gets synthesized into a football field (Ch.4)."}</p>
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
                  ? "WACC 템플릿이 어떻게 굴러가는지, Revenue projection은 어디서 가져오는지, NWC·CAPEX·D&A는 어떻게 연결하는지. 실제 BB analyst가 3주 동안 하는 작업."
                  : "How the WACC template runs, where revenue projections come from, how NWC/CAPEX/D&A get linked. The three-week workflow of a real BB analyst."}
              </p>
            </div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
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
