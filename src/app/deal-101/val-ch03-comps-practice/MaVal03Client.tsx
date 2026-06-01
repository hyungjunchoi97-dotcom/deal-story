/**
 * Valuation 시리즈 Ch.3 — Comps 실무 (Trading + Transaction)
 *
 * 톤 가이드 (Ch.1·Ch.2 동일):
 *  - 자연스러운 한국어, 직역체 지양
 *  - 카드·컬러박스 최소화. 텍스트 중심.
 *  - 시각화 4개: Peer funnel · Trading vs Transaction 표 · Capital structure bridge · Final range
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

const SLUG = "val-ch03-comps-practice";
const ACCENT = "#3b82f6";

// Peer universe funnel — 가상의 healthcare equipment 회사 valuation 기준
const PEER_FUNNEL = [
  {
    koStep: "GICS 코드 풀",
    enStep: "GICS code pool",
    koDetail: "Healthcare Equipment (3510) — 글로벌 상장사 전체",
    enDetail: "Healthcare Equipment (3510) — all listed globally",
    n: 500,
  },
  {
    koStep: "Size filter",
    enStep: "Size filter",
    koDetail: "매출 $200M ~ $3B (타겟의 0.3x~5x)",
    enDetail: "Revenue $200M ~ $3B (0.3x–5x of target)",
    n: 78,
  },
  {
    koStep: "Profile filter",
    enStep: "Profile filter",
    koDetail: "EBITDA margin 15~30%, 매출성장률 5~15%",
    enDetail: "EBITDA margin 15–30%, revenue growth 5–15%",
    n: 24,
  },
  {
    koStep: "Manual screen",
    enStep: "Manual screen",
    koDetail: "Business model 직접 검토 — 11개 최종 선정",
    enDetail: "Business-model review — 11 final peers",
    n: 11,
  },
];
const FUNNEL_MAX = 500;

// Trading vs Transaction 비교 표
const COMPS_COMPARE = [
  { koMetric: "데이터 소스",       enMetric: "Data source",      koTrading: "Bloomberg · CapIQ · FactSet", enTrading: "Bloomberg · CapIQ · FactSet", koTxn: "Mergermarket · CapIQ Transactions", enTxn: "Mergermarket · CapIQ Transactions" },
  { koMetric: "관찰 대상",         enMetric: "Universe",         koTrading: "11개 상장 peer",                  enTrading: "11 listed peers",              koTxn: "최근 5년 8개 deal",                       enTxn: "8 deals over last 5 years" },
  { koMetric: "가격 시점",         enMetric: "Price timing",     koTrading: "오늘 시장 가격",                  enTrading: "Today's market price",          koTxn: "Deal announcement 시점",                  enTxn: "At deal announcement" },
  { koMetric: "Control premium",  enMetric: "Control premium",  koTrading: "없음 (minority stake 가격)",     enTrading: "None (minority stake price)",   koTxn: "포함 (보통 +15~30%)",                     enTxn: "Included (typically +15–30%)" },
  { koMetric: "EV / Revenue",     enMetric: "EV / Revenue",     koTrading: "2.4x (median)",                    enTrading: "2.4x (median)",                  koTxn: "3.1x (median)",                            enTxn: "3.1x (median)" },
  { koMetric: "EV / EBITDA",      enMetric: "EV / EBITDA",      koTrading: "12.5x (median)",                   enTrading: "12.5x (median)",                 koTxn: "15.2x (median)",                           enTxn: "15.2x (median)" },
  { koMetric: "P / E",             enMetric: "P / E",            koTrading: "22x (median)",                     enTrading: "22x (median)",                   koTxn: "—",                                          enTxn: "—" },
];

// Capital structure bridge — Equity → EV
const EV_BRIDGE = [
  { koLabel: "Equity Value",       enLabel: "Equity Value",       val: 1200, sign: "+" as const, koNote: "시가총액", enNote: "Market cap" },
  { koLabel: "+ Total Debt",        enLabel: "+ Total Debt",        val: 400,  sign: "+" as const, koNote: "단기·장기 차입 합계", enNote: "ST + LT borrowings" },
  { koLabel: "+ Preferred",         enLabel: "+ Preferred",         val: 50,   sign: "+" as const, koNote: "우선주", enNote: "Preferred stock" },
  { koLabel: "+ Minority Int.",     enLabel: "+ Minority Int.",     val: 30,   sign: "+" as const, koNote: "비지배지분", enNote: "Non-controlling" },
  { koLabel: "+ Op. Lease",         enLabel: "+ Op. Lease",         val: 200,  sign: "+" as const, koNote: "IFRS 16 자본화", enNote: "IFRS 16 capitalized" },
  { koLabel: "− Cash & Eq.",        enLabel: "− Cash & Eq.",        val: 150,  sign: "-" as const, koNote: "운영 cash 제외 가능", enNote: "Net of operating cash" },
  { koLabel: "= Enterprise Value", enLabel: "= Enterprise Value", val: 1730, sign: "=" as const, koNote: "EBITDA $135M → 12.8x", enNote: "EBITDA $135M → 12.8x" },
];
const BRIDGE_MAX = 1800;

// Final peer EV/EBITDA 분포
const PEER_MULTIPLES = [
  { n: "Peer A",  v: 8.2,  outlier: true,  koNote: "Margin 8%, growth 1%",        enNote: "Margin 8%, growth 1%" },
  { n: "Peer B",  v: 9.5,  outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer C",  v: 10.8, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer D",  v: 11.2, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer E",  v: 11.9, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer F",  v: 12.5, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer G",  v: 13.1, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer H",  v: 13.8, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer I",  v: 14.5, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer J",  v: 15.6, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer K",  v: 17.2, outlier: false, koNote: "",                                enNote: "" },
  { n: "Peer L",  v: 19.8, outlier: true,  koNote: "Growth 35%, 다른 segment",    enNote: "Growth 35%, different segment" },
];
const MULT_MIN = 6;
const MULT_MAX = 22;
const PCT_25 = 11.2;   // 25th
const PCT_50 = 12.8;   // median
const PCT_75 = 14.7;   // 75th

export default function MaVal03Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.3" : "Valuation Series · Ch.3"}</span>
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
            
              <LikeButton slug={concept.slug} lang={lang} /></div>
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

          {/* § 1 — Comps가 DCF보다 더 자주 쓰이는 이유 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Comps가 DCF보다 더 자주 쓰이는 이유" : "Why comps shows up more often than DCF"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Pitch deck을 펴보면 valuation 섹션 첫 페이지에 거의 항상 Comps가 먼저 나옵니다. DCF가 이론적으로 더 깔끔한 method인데도 그래요. 이유는 단순합니다. 시장이 매일 가격을 매겨주는 회사들을 가져다 비교하는 게 board와 buyer가 가장 빨리 받아들이는 방식이거든요."
                : "Open any pitch deck and the valuation section almost always opens with comps — even though DCF is the cleaner method in theory. The reason is simple. Pointing to companies the market prices every day is what boards and buyers digest fastest."}</p>
              <p>{ko
                ? "DCF는 5년 매출 가정 하나로 결과가 30% 흔들립니다. 반면 Comps는 가정이라기보다 \"관찰\"에 가까워요. 비슷한 회사가 EV/EBITDA 12x로 거래된다는 건 의견이 아니라 사실이고, 거기서 시작하는 valuation은 반박하기 어렵습니다."
                : "DCF can swing 30% on a single five-year revenue assumption. Comps is closer to observation than assumption. 'A similar company trades at 12x EV/EBITDA' isn't an opinion — it's a fact, and valuations that start from facts are hard to argue with."}</p>
              <p>{ko
                ? "그래서 실무에서는 Comps가 먼저 나오고 DCF가 sanity check 역할을 합니다. \"Comps가 $1.2B을 가리키고 DCF도 $1.1B 근처에서 나오면 OK\". 두 method가 크게 어긋나면 둘 중 하나의 가정을 다시 보는 거고요."
                : "In practice, comps leads and DCF acts as a sanity check. 'Comps says $1.2B and DCF lands near $1.1B — fine.' When they disagree sharply, one of the assumption sets gets revisited."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Peer universe 선정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Peer universe — 가장 어렵고 가장 정치적인 작업" : "Peer universe — the hardest, most political step"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Comps에서 시간의 절반 이상이 들어가는 부분이 peer 선정이에요. 어느 회사 8-12개를 peer로 잡느냐가 valuation 결과를 결정합니다. Peer 한 명만 바꿔도 median multiple이 1-2x 흔들리거든요."
                : "More than half the time in a comps exercise goes into peer selection. Which 8-12 companies you call peers decides the result — swap one and the median can move 1-2x."}</p>
              <p>{ko
                ? "작업은 보통 Capital IQ나 FactSet 같은 데이터 플랫폼에서 시작합니다. GICS 코드(산업 분류)로 회사 풀을 깔고, 매출 규모로 한 번 자르고, EBITDA 마진과 성장률로 또 자르고, 마지막에 한 회사씩 business model을 직접 확인하면서 가지치기를 해요. 500개에서 시작해서 10개 안쪽으로 줄이는 funnel입니다."
                : "The work usually starts in Capital IQ or FactSet. Lay down a pool by GICS code, cut on revenue size, cut again on margins and growth, then manually review each company's business model. A funnel that goes from ~500 to under a dozen."}</p>
              <p>{ko
                ? "정치적이라는 게 어떤 의미냐면, Sell-side에서 일하면 medianeller을 높이는 방향으로 peer를 잡고 싶고, Buy-side는 반대로 잡고 싶어해요. 둘 다 \"제외할 합리적 이유\"를 만드는 능력이 valuation 실력의 일부입니다. \"이 회사는 매출의 70%가 다른 사업부라 peer가 아니다\" 같은 식으로요. 잘 짠 peer set은 board에서 \"왜 이 회사는 뺐냐\"는 질문에 한 줄로 답할 수 있어야 합니다."
                : "Political because sell-side leans toward peers that lift the median while buy-side leans the other way. Both sides need to construct defensible reasons to exclude — that's part of the skill. 'This name's 70% of revenue is a different segment, so it's not a peer.' A clean peer set means you can answer 'why isn't X in here?' in one sentence in front of the board."}</p>
            </div>

            {/* Peer funnel 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Peer Universe Funnel — Healthcare Equipment 예시" : "Peer Universe Funnel — healthcare equipment example"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "500개 회사로 시작해서 11개로 좁히는 과정." : "From 500 names down to 11."}
              </p>
              <div className="space-y-3">
                {PEER_FUNNEL.map((f, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? f.koStep : f.enStep}</span>
                      </div>
                      <span className="text-[13px] font-bold font-mono text-gray-900 dark:text-gray-100">{f.n}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-1.5 ml-7">{ko ? f.koDetail : f.enDetail}</p>
                    <div className="ml-7 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(f.n / FUNNEL_MAX) * 100}%` }}
                        viewport={VP}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                        className="h-full rounded"
                        style={{ background: ACCENT }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "500 → 78 → 24 → 11. 마지막 단계가 가장 시간이 많이 들어요. 한 회사씩 IR 자료 보면서 \"이건 진짜 우리 타겟이랑 비교 가능한가\" 를 묻는 작업입니다."
                  : "500 → 78 → 24 → 11. The last step takes the most time — reading IR materials company by company and asking 'is this actually comparable to our target?'"}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-6">
              <p>{ko
                ? "한국·일본·동남아 회사를 평가할 때는 peer 풀 자체가 작은 문제가 생깁니다. 같은 산업·같은 규모로 잘라보면 5개도 안 나오는 경우가 흔해요. 이럴 때는 글로벌 peer까지 확장하고, 대신 country risk 차이를 multiple 조정으로 반영합니다. Emerging market 할인이라고 부르는데 보통 10-20% 정도 깎아서 적용해요."
                : "For Korean, Japanese, or Southeast Asian companies, the peer pool itself is often too thin — cut on industry plus size and you can end up with fewer than five names. Standard fix: extend to global peers, then apply an emerging-market discount (typically 10-20%) to bridge the country-risk gap."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Trading Comps */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Trading Comps — 시장이 매일 가격을 매기는 회사들" : "Trading comps — companies the market prices every day"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Trading Comps는 상장된 peer들의 \"오늘 시장 가격\"을 가져다 멀티플로 환산하는 작업이에요. 주가 × 발행주식수 = 시가총액. 거기에 net debt 같은 걸 더해서 EV를 만들고, 그걸 EBITDA·매출·순이익으로 나눠서 멀티플을 뽑습니다."
                : "Trading comps takes today's market prices of listed peers and converts them to multiples. Share price × shares outstanding = market cap, add net debt to get EV, divide by EBITDA, revenue, or earnings."}</p>
              <p>{ko
                ? "가장 많이 쓰는 멀티플은 EV/EBITDA. 자본구조 영향을 제거하고 영업 현금창출력만 비교할 수 있어서요. EV/Revenue는 EBITDA가 의미 없는 적자 회사나 초기 SaaS에 씁니다. P/E는 은행·보험처럼 EV 계산이 까다로운 산업에서 주로 등장하고요."
                : "EV/EBITDA is the workhorse — it strips out capital structure and compares pure operating cash generation. EV/Revenue gets used when EBITDA is meaningless (loss-making companies, early SaaS). P/E shows up mainly in banks and insurance, where EV is hard to compute."}</p>
              <p>{ko
                ? "LTM vs NTM 구분이 실무에서 큰 의미를 가집니다. LTM(Last Twelve Months)은 과거 12개월 실제 숫자, NTM(Next Twelve Months)은 시장 컨센서스 기준의 다음 12개월 예측치예요. 시장은 미래를 보고 가격을 매기니까 NTM 멀티플이 더 의미 있고, 실제로 deck에서는 NTM EV/EBITDA를 메인으로 보여줍니다."
                : "LTM vs NTM matters in practice. LTM uses the last twelve months' actuals; NTM is the consensus forecast for the next twelve. Since markets price on the future, NTM multiples are more meaningful — decks usually show NTM EV/EBITDA as the headline."}</p>
              <p>{ko
                ? "NTM 컨센서스는 FactSet, Capital IQ, Bloomberg에서 가져옵니다. 30-50명의 equity research analyst가 낸 추정치 평균이 그 컨센서스고, 한 회사당 하나의 NTM EBITDA 숫자가 매일 업데이트돼요. 이걸 그대로 쓰면 됩니다 — 자체 추정 안 합니다."
                : "NTM consensus comes from FactSet, Capital IQ, or Bloomberg. It's the average of 30-50 sell-side analyst estimates, updated daily into a single NTM EBITDA number per company. You just use it — no need to build your own."}</p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Transaction Comps */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Transaction Comps — 최근 거래된 회사들" : "Transaction comps — companies that actually changed hands"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Transaction Comps는 \"최근 5년 안에 비슷한 회사가 실제로 얼마에 팔렸나\"를 보는 작업이에요. Trading이 시장의 minority stake 가격이라면, Transaction은 100% 인수 가격, 즉 control premium이 포함된 가격이에요."
                : "Transaction comps looks at 'what did similar companies actually sell for in the past five years?' If trading is the price of a minority stake, transactions are 100% acquisition prices — control premium included."}</p>
              <p>{ko
                ? "Control premium이 왜 붙냐면, 회사를 통째로 사면 의사결정권을 가져가는 거니까요. 이사진을 갈고, 전략을 바꾸고, 자산을 매각할 수 있는 권리. 시장에서 한 주씩 사는 minority 투자자한테는 없는 권리고, 그래서 인수자는 보통 시장가 대비 15-30% 더 내고 회사를 가져갑니다."
                : "Control premium exists because buying the whole company means decision rights — replacing the board, changing strategy, selling assets. Minority shareholders buying one share at a time don't get those, so acquirers typically pay 15-30% above market for control."}</p>
              <p>{ko
                ? "그래서 Transaction Comps의 EV/EBITDA가 Trading Comps보다 항상 더 높게 나옵니다. 같은 산업의 같은 시점이어도 Transaction이 +15-30% 위에 자리잡는 게 정상이에요. M&A 협상에서 buyer가 \"우리는 Trading 멀티플 기준으로 내겠다\"고 하면 seller는 \"Transaction 멀티플 기준이 맞다\"고 받아치는 게 표준 공방입니다."
                : "That's why transaction comps' EV/EBITDA always lands above trading comps. Same industry, same point in time — transactions sit 15-30% higher as a rule. In M&A negotiation, the buyer arguing 'we'll pay trading multiples' and the seller answering 'transaction multiples are the right reference' is the standard dance."}</p>
              <p>{ko
                ? "데이터 출처는 Mergermarket, Bloomberg M&A, Capital IQ Transactions가 주력. 최근 5년 이내, 같은 산업, deal size가 비교 가능한 범위로 자릅니다. 한계는 옛날 deal일수록 시장 컨디션이 달라서 노이즈가 커진다는 점. 2021년 SaaS 거래 멀티플을 2024년 valuation에 그대로 쓰면 안 됩니다."
                : "Sources are Mergermarket, Bloomberg M&A, Capital IQ Transactions. Filter to the last five years, same industry, comparable deal size. The limit: older deals carry market-condition noise. A 2021 SaaS transaction multiple shouldn't be applied to a 2024 valuation as-is."}</p>
            </div>

            {/* Trading vs Transaction 비교 표 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Trading vs Transaction — 같은 회사, 두 가지 lens" : "Trading vs Transaction — same company, two lenses"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "Healthcare equipment 회사 가정. Transaction이 일관되게 위에 자리." : "Healthcare equipment example. Transactions sit consistently above."}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[34%]"></th>
                      <th className="text-left py-2 pr-3 font-semibold text-gray-900 dark:text-gray-100">{ko ? "Trading Comps" : "Trading Comps"}</th>
                      <th className="text-left py-2 font-semibold" style={{ color: ACCENT }}>{ko ? "Transaction Comps" : "Transaction Comps"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPS_COMPARE.map((c, i) => (
                      <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                        <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top text-[11px]">{ko ? c.koMetric : c.enMetric}</td>
                        <td className="py-2 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.koTrading : c.enTrading}</td>
                        <td className="py-2 align-top font-medium" style={{ color: i >= 4 && i <= 5 ? ACCENT : undefined }}>{ko ? c.koTxn : c.enTxn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "EV/EBITDA: Trading 12.5x → Transaction 15.2x. 차이 2.7x가 control premium의 가격이에요. EBITDA $135M 기준으로 환산하면 약 $365M 차이."
                  : "EV/EBITDA: 12.5x trading → 15.2x transactions. The 2.7x gap is the price of control. On $135M of EBITDA, that's roughly $365M of EV difference."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Capital structure 조정 + 결과 정리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "비교 가능하게 만드는 작업 — Capital structure 조정" : "Making them comparable — capital structure adjustments"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Peer를 다 잡았다고 끝이 아니에요. 회사마다 자본구조가 다르니까 멀티플을 같은 척도로 비교하려면 EV를 통일된 방식으로 계산해야 합니다. 이걸 안 하면 부채가 많은 회사와 cash가 많은 회사의 멀티플이 다른 의미로 잡혀서 비교 자체가 무의미해져요."
                : "Picking peers isn't the end. Capital structures differ across companies, so to compare multiples on equal footing you need to compute EV the same way for each. Skip this and a debt-heavy company's multiple means something different from a cash-rich one's — the comparison breaks."}</p>
              <p>{ko
                ? "기본 식은 EV = 시가총액 + 총부채 + 우선주 + 비지배지분 − 현금. 여기에 IFRS 16 적용된 회사면 operating lease를 자본화해서 더하고, 사용자 정의 연금부채(underfunded pension)가 크면 그것도 더해요. 무시하고 넘어가면 leased asset 비중이 큰 항공사·소매업 같은 산업에서 EV/EBITDA가 통째로 왜곡됩니다."
                : "Base formula: EV = market cap + total debt + preferred + minority interest − cash. Add capitalized operating leases under IFRS 16, plus material underfunded pension liabilities. Skip these and industries heavy on leased assets — airlines, retail — see their EV/EBITDA distorted across the board."}</p>
              <p>{ko
                ? "Cash 빼는 부분도 디테일이 있어요. 운영에 필요한 cash와 잉여 cash를 구분하는 경우가 있고, 그냥 total cash를 다 빼는 경우도 있습니다. 회사가 strategic buyer라 cash를 곧 다른 데 쓸 거면 빼는 게 맞고, financial buyer라면 운영 cash는 남겨두는 게 더 정확해요."
                : "Cash deduction has a wrinkle. Sometimes you separate operating cash from excess cash; sometimes you deduct total cash. If a strategic buyer will redeploy cash elsewhere, full deduction makes sense. For a financial buyer, leaving operating cash in is more accurate."}</p>
            </div>

            {/* EV bridge */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Equity → EV Bridge — 한 회사 예시 ($M)" : "Equity → EV Bridge — single company example ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "시가총액에서 시작해 한 줄씩 조정해 EV에 도달." : "Start with market cap, adjust line by line to arrive at EV."}
              </p>
              <div className="space-y-2.5">
                {EV_BRIDGE.map((b, i) => {
                  const isResult = b.sign === "=";
                  const widthPct = (b.val / BRIDGE_MAX) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5 min-w-0">
                          <span className={`text-[12.5px] ${isResult ? "font-bold" : ""}`} style={isResult ? { color: ACCENT } : { color: undefined }}>
                            <span className={isResult ? "" : "text-gray-900 dark:text-gray-100 font-semibold"}>{ko ? b.koLabel : b.enLabel}</span>
                          </span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">{ko ? b.koNote : b.enNote}</span>
                        </div>
                        <span className={`text-[12.5px] font-mono ${isResult ? "font-bold" : "text-gray-700 dark:text-gray-300"}`} style={isResult ? { color: ACCENT } : {}}>
                          ${b.val.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widthPct}%` }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                          className="h-full rounded"
                          style={{
                            background: isResult ? ACCENT : b.sign === "-" ? "#cbd5e1" : `${ACCENT}80`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "이 회사의 EV $1,730M ÷ EBITDA $135M = 12.8x. 이 12.8x가 비로소 다른 peer의 EV/EBITDA와 같은 척도로 비교 가능합니다."
                  : "EV $1,730M ÷ EBITDA $135M = 12.8x. Only now is this 12.8x comparable on equal footing to every peer's EV/EBITDA."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "결과를 어떻게 정리하나" : "How the result gets summarized"}</p>
              <p>{ko
                ? "12개 peer 멀티플을 다 뽑고 나면 분포가 나옵니다. Mean보다 median을 쓰는 게 표준인데, outlier 한 명이 mean을 크게 흔들기 때문이에요. 그리고 25th-75th percentile range를 같이 보여줍니다. \"median 12.8x, range 11.2x ~ 14.7x\" 식으로요."
                : "Pull multiples for all 12 peers and you get a distribution. Median is the standard summary (one outlier can yank the mean). You report it with the 25th-75th percentile range — 'median 12.8x, range 11.2x to 14.7x.'"}</p>
              <p>{ko
                ? "Outlier는 분명한 이유가 있을 때만 제외합니다. 매출 성장률이 다른 peer의 3배인 회사, segment 구성이 크게 다른 회사 같은 경우. 이유 없이 \"낮으니까 빼자\" 는 못 해요. Outlier로 분류한 회사는 표에는 남겨두고 별표로 표시한 다음 \"NM (Not Meaningful)\" 처리하는 게 관행입니다."
                : "Outliers get excluded only with a clear reason — growth 3x the rest of the peer set, materially different segment mix. 'Drop it because it's low' doesn't fly. Standard practice: keep the name in the table, mark it with an asterisk, and flag it 'NM' (Not Meaningful)."}</p>
              <p>{ko
                ? "이 결과 — 25th-75th percentile range 하나가 Football Field의 \"Trading Comps\" 막대 한 줄로 들어갑니다. Transaction Comps도 똑같은 작업을 한 번 더 해서 또 다른 막대 한 줄. 그 두 줄에 Ch.2에서 만든 DCF range가 합쳐지면 Football Field 3개 막대가 완성돼요."
                : "This range — the 25th-75th percentile — becomes one bar on the football field's 'Trading Comps' row. Do the same exercise on transactions for another bar. Combined with Ch.2's DCF range, you have three of the football field's bars."}</p>
            </div>

            {/* Final peer multiple 분포 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Trading Comps 분포 — EV/EBITDA (NTM)" : "Trading comps distribution — EV/EBITDA (NTM)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "12개 peer의 NTM EV/EBITDA. 흐린 점은 outlier (NM 처리)." : "12 peers' NTM EV/EBITDA. Faded dots are outliers (NM)."}
              </p>

              <div className="relative h-32 mb-2">
                {/* 25-75 percentile 박스 */}
                <div
                  className="absolute top-6 bottom-6 rounded"
                  style={{
                    left: `${((PCT_25 - MULT_MIN) / (MULT_MAX - MULT_MIN)) * 100}%`,
                    width: `${((PCT_75 - PCT_25) / (MULT_MAX - MULT_MIN)) * 100}%`,
                    background: `${ACCENT}1f`,
                    border: `1px dashed ${ACCENT}80`,
                  }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                    {ko ? "25th – 75th" : "25th – 75th"}
                  </div>
                </div>

                {/* Median 라인 */}
                <div
                  className="absolute top-4 bottom-4"
                  style={{
                    left: `${((PCT_50 - MULT_MIN) / (MULT_MAX - MULT_MIN)) * 100}%`,
                    width: "2px",
                    background: ACCENT,
                  }}
                >
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                    {ko ? `Median ${PCT_50}x` : `Median ${PCT_50}x`}
                  </div>
                </div>

                {/* Peer 점들 */}
                {PEER_MULTIPLES.map((p, i) => {
                  const leftPct = ((p.v - MULT_MIN) / (MULT_MAX - MULT_MIN)) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: p.outlier ? 0.3 : 1, scale: 1 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.04, ease: EASE }}
                      className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                      style={{
                        left: `calc(${leftPct}% - 5px)`,
                        background: p.outlier ? "#94a3b8" : ACCENT,
                        boxShadow: p.outlier ? "none" : `0 0 0 2px ${ACCENT}30`,
                      }}
                      title={`${p.n}: ${p.v}x${p.outlier ? " (NM)" : ""}`}
                    />
                  );
                })}
              </div>

              {/* X-axis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                <span>{MULT_MIN}x</span>
                <span>10x</span>
                <span>14x</span>
                <span>18x</span>
                <span>{MULT_MAX}x</span>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "12개 peer 중 2개는 outlier로 NM 처리 (Peer A — 저성장·저마진, Peer L — 다른 segment). 남은 10개로 median 12.8x, range 11.2x ~ 14.7x. 이 range가 Football Field에 그대로 들어갑니다."
                  : "Two of 12 peers flagged NM (Peer A — low growth/margin, Peer L — different segment). Remaining 10: median 12.8x, range 11.2x to 14.7x. This range goes straight into the football field."}
              </p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.4 — {ko ? "Football Field 종합과 컨텍스트별 valuation" : "Football field synthesis and valuation by context"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "DCF · Trading · Transaction · LBO reverse-math를 한 페이지에 올리는 작업. IPO·M&A·LBO·Restructuring 컨텍스트마다 어느 막대를 메인으로 잡는지가 달라지는 이야기."
                  : "Putting DCF, trading, transaction, and LBO reverse-math on one page. Which bar leads changes with the context — IPO, M&A, LBO, restructuring."}
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

          
          <LikeButton slug={concept.slug} lang={lang} />{/* Series prev/next */}
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
