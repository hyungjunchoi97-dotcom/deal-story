/**
 * Valuation 시리즈 Ch.5 — IPO Valuation Case · Facebook IPO 2012
 *
 * 톤 가이드 (Ch.4 정리 버전 동일):
 *  - 자연스러운 한국어, 영어 단어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: 공모가 결정 funnel · Peer 분포 · Revenue 가정 vs 실제 · IPO 후 주가 timeline
 *  - 모든 데이터 상수 KO/EN 분리
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

const SLUG = "val-ch05-ipo-case";
const ACCENT = "#3b82f6";
const RED = "#dc2626";
const GREEN = "#16a34a";

// 공모가 결정 funnel — Initial range → Final price
const PRICING_FUNNEL = [
  {
    koStage: "S-1 최초 제출 (2012년 2월)",
    enStage: "Initial S-1 filing (Feb 2012)",
    rangeLow: 28,
    rangeHigh: 35,
    koNote: "Forward P/E 60-75x — 이미 사상 최대급 prep",
    enNote: "Forward P/E 60–75x — already a record-setting prep",
  },
  {
    koStage: "Roadshow 직후 (5월 초)",
    enStage: "After roadshow (early May)",
    rangeLow: 30,
    rangeHigh: 36,
    koNote: "기관 수요 양호 — Initial range 상단으로 살짝 올림",
    enNote: "Institutional demand solid — bias toward the top",
  },
  {
    koStage: "Range 상향 (5월 15일)",
    enStage: "Range raised (May 15)",
    rangeLow: 34,
    rangeHigh: 38,
    koNote: "수요 초과 보고 — 가격 + 발행 주식 둘 다 키움 (337M → 421M)",
    enNote: "Demand reportedly oversubscribed — both price and share count upsized (337M → 421M)",
  },
  {
    koStage: "공모가 확정 (5월 17일)",
    enStage: "Final pricing (May 17)",
    rangeLow: 38,
    rangeHigh: 38,
    koNote: "Range 최상단 $38 — 시총 $104B, 미국 IPO 사상 최대",
    enNote: "Top of range — $104B market cap, largest US IPO ever at the time",
  },
];
const FUNNEL_PRICE_MIN = 26;
const FUNNEL_PRICE_MAX = 40;

// IPO 시점 Peer Universe (NTM P/E, EV/EBITDA, Growth)
const PEERS = [
  { name: "Google",    koDesc: "검색 광고 — Stable",          enDesc: "Search ads — stable",         pe: 17,  growth: 25,  outlier: false },
  { name: "LinkedIn",  koDesc: "프로페셔널 네트워크",         enDesc: "Professional network",         pe: 110, growth: 80,  outlier: true  },
  { name: "Zynga",     koDesc: "Facebook 게임 — 의존",        enDesc: "Facebook-platform games",      pe: 40,  growth: 25,  outlier: false },
  { name: "Yelp",      koDesc: "리뷰 — 적자, EV/Sales 기반",  enDesc: "Reviews — loss-making, EV/Sales", pe: 95,  growth: 70,  outlier: true  },
  { name: "Groupon",   koDesc: "이커머스 — 적자",             enDesc: "E-commerce — loss-making",     pe: 85,  growth: 90,  outlier: true  },
  { name: "Pandora",   koDesc: "음악 스트리밍 — 적자",        enDesc: "Music streaming — loss-making", pe: 75,  growth: 50,  outlier: true  },
  { name: "Facebook",  koDesc: "공모가 $38 기준",              enDesc: "At IPO price $38",             pe: 80,  growth: 65,  outlier: false, isFB: true },
];

// Forward Revenue 가정 vs 실제
const REVENUE_GAP = [
  { koLabel: "2011 실적",                enLabel: "2011 actual",            val: 3.71, isActual: true,  koNote: "+88% YoY",  enNote: "+88% YoY" },
  { koLabel: "2012 Sell-side 컨센서스",   enLabel: "2012 Sell-side estimate", val: 5.50, isActual: false, koNote: "공모가 산정의 핵심 input", enNote: "Core input behind IPO pricing" },
  { koLabel: "2012 실적",                enLabel: "2012 actual",            val: 5.09, isActual: true,  koNote: "예상 대비 −$0.4B",         enNote: "$0.4B below estimate" },
  { koLabel: "2013 실적",                enLabel: "2013 actual",            val: 7.87, isActual: true,  koNote: "모바일 수익화 정착 (+55%)", enNote: "Mobile monetization landed (+55%)" },
];
const REV_MAX = 9;

// IPO 후 주가 timeline ($)
const PRICE_TIMELINE = [
  { koDate: "5/17 공모가",         enDate: "5/17 IPO price",        price: 38.00, koEvent: "Top of range $38",                          enEvent: "Top of range — $38" },
  { koDate: "5/18 첫날 시초가",    enDate: "5/18 day-1 open",       price: 42.05, koEvent: "+11% — IPO치고 약한 초반",                  enEvent: "+11% — soft opening for an IPO" },
  { koDate: "5/18 첫날 종가",      enDate: "5/18 day-1 close",      price: 38.23, koEvent: "+0.6% — 공모가 사수도 간신히",              enEvent: "+0.6% — barely held the offer" },
  { koDate: "6월 중순",            enDate: "Mid-June",              price: 26.90, koEvent: "−29% — 1개월도 안 돼 절반에 가까워짐",       enEvent: "−29% in under a month" },
  { koDate: "9/4 최저점",          enDate: "9/4 trough",            price: 17.73, koEvent: "−53% from IPO",                              enEvent: "−53% from IPO" },
  { koDate: "2013 7월",            enDate: "Jul 2013",              price: 38.05, koEvent: "공모가 회복 (모바일 광고 본격화 후)",        enEvent: "Back to $38 after mobile ads ramped" },
];
const PRICE_MIN = 15;
const PRICE_MAX = 45;

export default function MaVal05Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.5" : "Valuation Series · Ch.5"}</span>
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

          {/* § 1 — 사건 소개 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "사상 최대 IPO가 첫날 거의 깨질 뻔한 사건" : "The biggest IPO ever — that almost broke on day one"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2012년 5월 18일, Facebook은 공모가 $38로 NASDAQ에 상장했어요. 공모 규모 $16B, 시총 $104B. 당시 미국 IPO 사상 최대 규모였고, Lead bookrunner는 Morgan Stanley였습니다."
                : "On May 18, 2012, Facebook listed on NASDAQ at $38 per share. A $16B offering, $104B market cap — the largest US IPO ever at the time. Lead bookrunner was Morgan Stanley."}</p>
              <p>{ko
                ? "그런데 첫날 결과가 이상했어요. 시초가는 $42.05로 +11% 오르며 시작했는데, 종가는 $38.23. 공모가에서 겨우 +0.6%. IPO는 보통 첫날에 +10~30% 오르는 게 정상인데, Facebook은 마치 끝없는 sell pressure에 시달리며 공모가를 간신히 지킨 형태로 마감했습니다."
                : "But day one looked wrong. The stock opened at $42.05 (+11%) and closed at $38.23 — just +0.6% over the offer price. IPOs usually open at +10–30% on day one; Facebook looked like it spent the day fighting nonstop sell pressure just to hold the offer."}</p>
              <p>{ko
                ? "한 달이 지나자 주가는 $27 부근, 9월에는 $17.7까지 떨어졌어요. 공모가 대비 −53%. 시총으로 환산하면 약 $55B이 사라진 셈입니다. 공모가를 회복한 건 1년 2개월이 지난 2013년 7월이었어요."
                : "Within a month it was around $27. By September it touched $17.73 — down 53% from IPO. That's roughly $55B of market cap erased. The stock didn't reclaim $38 until July 2013, fourteen months later."}</p>
              <p>{ko
                ? "이번 챕터에서 보려는 건 \"왜 떨어졌는가\"라는 사후 분석이 아니라, valuation 작업이 어디서부터 어긋났는가입니다. Ch.4에서 정리한 Football Field와 컨텍스트별 강조점이 실제 거래에서 어떻게 적용됐고, 어느 지점이 약했는지를 단계별로 따라가 봅니다."
                : "What we're after here isn't a post-mortem on the price drop. It's where the valuation work itself went sideways. Walking through how Ch.4's football field and context emphasis played out in a real deal — and which step was the weak link."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 공모가 $38에 도달한 과정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Morgan Stanley가 $38에 도달한 과정" : "How Morgan Stanley got to $38"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "IPO 공모가는 한 번에 정해지는 게 아니라 몇 단계를 거쳐 좁혀집니다. S-1을 처음 제출할 때 잡는 \"initial range\"가 출발이고, roadshow를 거치면서 기관 투자자 수요를 보고 조정하다가, 마지막에 가격을 확정해요."
                : "An IPO price doesn't land in one shot — it narrows in stages. The initial range goes into the first S-1, gets adjusted through the roadshow based on institutional demand, then locks in at pricing."}</p>
              <p>{ko
                ? "Facebook의 경우 네 단계로 진행됐어요. 2월에 S-1을 제출하면서 잡은 initial range가 $28-$35. 5월 초 roadshow를 돌면서 수요가 좋게 나오자 $30-$36으로 살짝 올렸고, 5월 15일 \"수요 초과\" 보고가 들어오면서 range를 $34-$38로 한 번 더 올림과 동시에 발행 주식 수를 337M에서 421M으로 25% 늘렸어요 (insider 매각 추가). 그리고 5월 17일 밤, range 최상단 $38로 공모가가 확정됐습니다."
                : "Facebook moved through four stages. The initial range filed in February was $28–$35. Early May roadshow demand was strong, so it nudged to $30–$36. On May 15, with reports of oversubscribed demand, the range was raised again to $34–$38 — and at the same time the share count was upsized from 337M to 421M (more insider selling layered in). On May 17, pricing landed at the top of range, $38."}</p>
              <p>{ko
                ? "이 마지막 단계의 \"가격 + 발행 주식 동시 상향\"이 사후적으로 가장 비판받은 결정 중 하나예요. 수요가 강한 IPO에서 banker는 보통 둘 중 하나를 선택합니다. 가격을 올리거나, 발행 주식 수를 늘리거나. 둘 다 동시에 가져가면 시장에 흘러나가는 공급량이 한꺼번에 커져서, IPO 직후의 수급 균형을 깨뜨릴 위험이 있거든요. Facebook은 둘 다 가져갔어요."
                : "That last move — pushing price and share count up at the same time — is one of the most criticized calls in hindsight. With strong demand, bankers usually pick one lever: raise the price, or upsize the offering. Doing both at once dumps more supply into the market on day one and breaks the post-IPO supply-demand balance. Facebook did both."}</p>
            </div>

            {/* Pricing funnel 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "공모가 결정 과정 — 4단계" : "How the price moved — 4 stages"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Initial range $28-$35 → 최종 $38. 단계마다 상단이 올라간 게 보이도록." : "Initial $28–$35 → final $38. Each stage's upper bound visibly creeps."}
              </p>
              <div className="space-y-4">
                {PRICING_FUNNEL.map((p, i) => {
                  const leftPct = ((p.rangeLow - FUNNEL_PRICE_MIN) / (FUNNEL_PRICE_MAX - FUNNEL_PRICE_MIN)) * 100;
                  const widthPct = ((p.rangeHigh - p.rangeLow) / (FUNNEL_PRICE_MAX - FUNNEL_PRICE_MIN)) * 100;
                  const isFinal = i === PRICING_FUNNEL.length - 1;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                          <span className={`text-[12.5px] font-bold ${isFinal ? "" : "text-gray-900 dark:text-gray-100"}`} style={isFinal ? { color: ACCENT } : {}}>
                            {ko ? p.koStage : p.enStage}
                          </span>
                        </div>
                        <span className={`text-[12px] font-mono ${isFinal ? "font-bold" : "text-gray-500 dark:text-gray-400"}`} style={isFinal ? { color: ACCENT } : {}}>
                          {p.rangeLow === p.rangeHigh ? `$${p.rangeLow.toFixed(0)}` : `$${p.rangeLow} – $${p.rangeHigh}`}
                        </span>
                      </div>
                      <div className="relative h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{
                            left: `${leftPct}%`,
                            width: `${Math.max(widthPct, 1.5)}%`,
                            background: isFinal ? ACCENT : `${ACCENT}80`,
                            transformOrigin: "left",
                          }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mt-1 ml-7 leading-snug">{ko ? p.koNote : p.enNote}</p>
                    </div>
                  );
                })}
              </div>
              {/* X axis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                <span>${FUNNEL_PRICE_MIN}</span>
                <span>$30</span>
                <span>$34</span>
                <span>$38</span>
                <span>${FUNNEL_PRICE_MAX}</span>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "마지막 단계: range 최상단 $38 + 발행 주식 25% 증가 → 공급량 동시 증가 → 첫날 sell pressure 누적."
                  : "Final stage: top of range $38 + 25% more shares → supply spike → cumulative day-1 sell pressure."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Peer universe 문제 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Peer universe — Facebook과 비교할 회사가 진짜 있었나" : "Peer universe — was there actually anyone to compare Facebook to?"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.4에서 정리했듯이 IPO 가격 산정의 메인 method는 Trading Comps예요. \"비슷한 상장사들이 시장에서 몇 배수에 거래되는가\"가 기준점이 됩니다. 그런데 2012년 Facebook IPO 시점에 Facebook과 정말로 비교 가능한 회사가 있었느냐를 보면, 그게 쉽지 않은 문제였어요."
                : "As Ch.4 laid out, trading comps is the main method for IPO pricing — 'how do similar listed companies trade?' becomes the anchor. But when you ask whether Facebook in May 2012 actually had a defensible peer set, the answer gets uncomfortable."}</p>
              <p>{ko
                ? "Morgan Stanley가 들고 간 peer set은 크게 두 그룹으로 나뉘었어요. 첫째 그룹은 광고 모델이 비슷한 대형 인터넷 회사 — 사실상 Google 하나. 둘째 그룹은 최근에 상장한 social/internet 회사들 — LinkedIn (2011), Groupon (2011), Zynga (2011), Yelp (2012), Pandora (2011). 그런데 양쪽 다 문제가 있었습니다."
                : "Morgan Stanley brought two groups. One was 'large internet ad businesses' — effectively just Google. The other was recently listed social/internet IPOs — LinkedIn (2011), Groupon (2011), Zynga (2011), Yelp (2012), Pandora (2011). Both groups had issues."}</p>
              <p>{ko
                ? "Google은 매출 규모와 광고 모델이라는 면에서 큰 reference였지만, 그때 이미 안정적인 phase였어요. NTM Forward P/E가 약 17x. Facebook을 80x P/E로 매기려면 \"우리는 Google보다 4-5배 더 빠르게 성장할 거다\" 라는 가정을 정당화해야 했습니다. \"growth premium\"이라는 이름으로 설명은 됐지만, 4-5배라는 갭은 어떤 narrative로도 설득력이 약해요."
                : "Google was a heavyweight reference on size and ad model, but it was already in a stable phase — NTM P/E around 17x. Justifying Facebook at 80x P/E required arguing 'we'll grow 4–5× faster than Google.' Dressing it up as 'growth premium' is the standard story, but a 4–5× gap is a hard narrative to land."}</p>
              <p>{ko
                ? "두 번째 그룹은 NTM P/E가 다 100x 안팎이거나 아예 적자라 \"NM\" 처리됐어요. LinkedIn이 110x, Yelp·Groupon·Pandora는 적자라 EV/Sales로 비교해야 했고, Zynga는 그나마 40x 정도. 문제는 이들이 너무 작거나(LinkedIn 시총 $9B, Zynga $7B vs Facebook $104B 목표), 너무 갓 상장한 회사들이라 multiple 자체에 IPO 직후의 흥분이 끼어 있었다는 점이에요."
                : "The second group sat at NTM P/E around 100x or were loss-making (flagged NM). LinkedIn at 110x; Yelp, Groupon, Pandora all loss-making and compared on EV/Sales; Zynga the most digestible at 40x. The deeper issue: they were either far smaller (LinkedIn $9B mkt cap, Zynga $7B vs Facebook's $104B target) or so freshly listed that their multiples still carried IPO-era exuberance."}</p>
            </div>

            {/* Peer 분포 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "IPO 시점 Peer Universe — NTM P/E vs Growth Rate" : "Peer universe at IPO — NTM P/E vs growth"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "X축: NTM P/E, Y축: 매출 성장률(%). 적색 마커가 Facebook 공모가 시점." : "X-axis: NTM P/E. Y-axis: revenue growth (%). Red marker is Facebook at IPO."}
              </p>

              <div className="relative h-56 mb-2">
                {/* Y axis */}
                <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono pr-2 text-right">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                {/* Plot area */}
                <div className="absolute left-12 right-0 top-0 bottom-6 border-l border-b border-gray-200 dark:border-gray-700">
                  {/* Grid (horizontal) */}
                  {[25, 50, 75].map((g) => (
                    <div key={g} className="absolute left-0 right-0 border-t border-gray-100 dark:border-gray-800/60" style={{ top: `${100 - g}%` }} />
                  ))}
                  {/* Points */}
                  {PEERS.map((p, i) => {
                    // X: P/E (15 - 120 range)
                    const leftPct = Math.min(96, Math.max(2, ((p.pe - 15) / (120 - 15)) * 100));
                    // Y: growth (0 - 100)
                    const topPct = 100 - Math.min(100, p.growth);
                    const isFB = p.isFB;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={VP}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: EASE }}
                        className="absolute"
                        style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: "translate(-50%, -50%)" }}
                      >
                        <div
                          className={`rounded-full ${isFB ? "w-3.5 h-3.5" : "w-2.5 h-2.5"}`}
                          style={{
                            background: isFB ? RED : p.outlier ? "#94a3b8" : ACCENT,
                            boxShadow: isFB ? `0 0 0 3px ${RED}30` : `0 0 0 2px ${(p.outlier ? "#94a3b8" : ACCENT)}30`,
                          }}
                        />
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 mt-1.5 text-[9.5px] font-mono whitespace-nowrap ${isFB ? "font-bold" : ""}`}
                          style={{
                            top: "100%",
                            color: isFB ? RED : p.outlier ? "#94a3b8" : "#64748b",
                          }}
                        >
                          {p.name} {p.pe}x
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* X axis ticks */}
                <div className="absolute left-12 right-0 bottom-0 h-5 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono pt-1">
                  <span>15x</span>
                  <span>50x</span>
                  <span>80x</span>
                  <span>120x</span>
                </div>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                {PEERS.map((p, i) => (
                  <div key={i} className="flex items-baseline gap-1.5">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 translate-y-[-1px]"
                      style={{ background: p.isFB ? RED : p.outlier ? "#94a3b8" : ACCENT }}
                    />
                    <span className={p.isFB ? "font-bold text-gray-700 dark:text-gray-300" : ""}>{p.name}</span>
                    <span>· {ko ? p.koDesc : p.enDesc}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Google 17x (안정), 나머지는 100x 안팎 또는 NM. Facebook 80x는 어느 군과도 깔끔하게 맞지 않는 자리. 정당화는 \"Google보다 빠르게, social peer보단 안정적으로\" 라는 가운데 위치에 의존."
                  : "Google at 17x (stable), the rest near 100x or NM. Facebook's 80x doesn't sit cleanly with either group — its defense relied on a middle position: 'faster than Google, more stable than the small social IPOs.'"}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Mobile blind spot */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Forward Revenue 가정에 박혀있던 모바일 blind spot" : "The mobile blind spot in forward revenue"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.2·3에서 봤듯이 NTM 멀티플은 NTM EBITDA나 NTM Revenue 위에 쌓입니다. 그 NTM 숫자가 흔들리면 멀티플로 환산한 가격이 통째로 흔들려요. Facebook IPO에서 가장 결정적이었던 약점이 바로 이 NTM revenue 가정이었습니다."
                : "As Ch.2 and Ch.3 showed, NTM multiples sit on top of NTM EBITDA or NTM revenue. Move the NTM number and the multiple-derived price moves with it. Facebook IPO's biggest weak spot lived in this NTM revenue assumption."}</p>
              <p>{ko
                ? "Sell-side analyst 컨센서스의 2012 NTM 매출은 $5.5B 정도였어요. 2011년 실적이 $3.7B, 전년 대비 +88% 성장했으니까 \"올해도 +50% 성장하면 $5.5B\" 라는 직선적인 가정이었습니다."
                : "Sell-side consensus for 2012 NTM revenue sat around $5.5B. 2011 had landed at $3.7B (+88% YoY), so consensus extrapolated to '+50% in 2012' — a clean straight line."}</p>
              <p>{ko
                ? "그런데 Facebook 본인이 S-1 amendment(5월 9일)에서 이미 경고 신호를 박아뒀어요. \"모바일 사용자 증가가 데스크탑 광고 수익을 잠식하고 있고, 모바일에서의 수익화 모델은 아직 입증되지 않았다.\" 풀어 쓰면 — 사용자는 모바일로 옮겨가는데, 광고는 아직 모바일에서 못 벌고 있다는 얘기예요. 2012 Q1 결과는 매출 $1.06B, 전년 동기 대비 +45%. 직전 분기들의 +60% 대비 이미 둔화 신호였습니다."
                : "Facebook itself flagged the warning in a May 9 S-1 amendment: 'Mobile usage is cannibalizing desktop ad revenue, and mobile monetization remains unproven.' Translated — users are migrating to mobile, but ads aren't yet earning there. Q1 2012 actuals: revenue $1.06B, +45% YoY — already a meaningful slowdown from the +60% prints in prior quarters."}</p>
              <p>{ko
                ? "그런데도 sell-side 컨센서스는 $5.5B 부근을 유지했어요. 일부 analyst가 estimate를 내려 잡았지만, 한 가지 더 문제가 있었어요. Morgan Stanley의 lead analyst가 IPO 직전에 estimate를 lower revised했는데, 그 정보를 institutional 클라이언트들에게만 selective하게 공유한 정황이 있었습니다. 이건 나중에 SEC 조사로 이어져 $5M 벌금으로 마무리됐어요."
                : "Yet sell-side consensus held near $5.5B. Some analysts did trim estimates — but with a separate problem layered on. Morgan Stanley's lead analyst lowered numbers just before IPO and reportedly shared the cut with institutional clients selectively. That eventually drew an SEC investigation and a $5M fine."}</p>
              <p>{ko
                ? "결과적으로 2012년 실제 매출은 $5.09B. 컨센서스 대비 약 −$0.4B (−7%). 그러나 시장 입장에서는 \"hyper-growth 회사가 컨센서스를 빠뜨렸다\" 라는 신호가 즉시 multiple compression으로 이어졌고, 80x였던 P/E는 6개월 만에 30x대로 떨어졌습니다."
                : "2012 actuals came in at $5.09B — about $0.4B below consensus (−7%). For the market, 'hyper-growth name misses' is the signal that triggers immediate multiple compression. The 80x P/E collapsed to the low 30s within six months."}</p>
            </div>

            {/* Revenue gap 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Forward Revenue — 컨센서스 vs 실제 ($B)" : "Forward revenue — consensus vs actual ($B)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Sell-side 컨센서스(점선 막대)와 실제(채워진 막대)를 같은 축에 정렬." : "Sell-side consensus (dashed) vs actual (filled) on the same axis."}
              </p>
              <div className="space-y-3">
                {REVENUE_GAP.map((r, i) => {
                  const widthPct = (r.val / REV_MAX) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12.5px] font-semibold text-gray-900 dark:text-gray-100">{ko ? r.koLabel : r.enLabel}</span>
                        <span className="text-[12px] font-mono font-bold text-gray-900 dark:text-gray-100">${r.val.toFixed(2)}B</span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden relative">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{
                            width: `${widthPct}%`,
                            background: r.isActual ? ACCENT : "transparent",
                            border: r.isActual ? "none" : `1.5px dashed ${ACCENT}`,
                            transformOrigin: "left",
                          }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">{ko ? r.koNote : r.enNote}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "공모가가 $38인 가장 큰 이유가 \"2012 revenue $5.5B\"였는데, 실제는 $5.09B. Multiple compression 시작점이 여기서 만들어졌습니다. 한편 2013년에는 모바일 광고가 본격화되며 $7.87B (+55%) 회복."
                    : "The single biggest input behind $38 was '$5.5B 2012 revenue.' Actual was $5.09B — the trigger for multiple compression. By 2013, mobile ads ramped and revenue jumped to $7.87B (+55%)."}
                </p>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Football Field 관점에서 어디서 깨졌나 + 주가 timeline */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Football Field 관점에서 어디가 약했나" : "Where the football field was weakest"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Ch.4에서 정리한 컨텍스트 매트릭스를 다시 보면, IPO에서는 Trading Comps가 메인, DCF가 sanity check, Transaction Comps와 LBO는 거의 안 쓰입니다. Facebook IPO도 그 표준 구조를 따랐어요. 문제는 그 구조 안에서 메인 method가 휘청였다는 점이에요."
                : "Ch.4's context matrix had IPO leading with trading comps, DCF as sanity check, with transactions and LBO essentially absent. Facebook IPO followed that standard structure. The problem was that the main method wobbled inside that structure."}</p>
              <p>{ko
                ? "Trading Comps의 무게가 너무 크게 실린 상태에서, 그 Trading Comps 자체가 두 가지 약점을 안고 있었어요. 하나는 peer universe가 깨끗하지 않았다는 점 (§ 3에서 본 Google 한 명과 갓 상장한 small-cap social IPO들), 다른 하나는 그 peer 멀티플이 적용되는 NTM revenue 가정이 흔들렸다는 점 (§ 4에서 본 mobile blind spot)."
                : "Trading comps carried outsized weight while suffering two weaknesses at once: the peer universe wasn't clean (just Google plus freshly listed small-cap IPOs, per § 3), and the NTM revenue the peer multiples were applied to was shaky (the mobile blind spot, per § 4)."}</p>
              <p>{ko
                ? "DCF가 sanity check 역할을 제대로 했더라면 신호가 잡혔을 수도 있어요. 그런데 Facebook처럼 고성장 + 모바일 전환 같은 변수가 많은 회사의 DCF는 가정에 따라 결과가 너무 wide하게 나옵니다. Bear $24, Bull $52 같은 식으로요. 이 정도 폭이면 \"$38이 합리적인지\"를 DCF로 판단하는 게 사실상 불가능해져요. Trading Comps의 약점을 DCF가 잡아주지 못한 거죠."
                : "Had DCF properly played sanity check, the warning might have caught. But for a name like Facebook — high growth, mid-mobile transition — DCF outputs are so assumption-sensitive that the Bear–Bull range balloons to something like $24–$52. At that width, 'is $38 reasonable?' isn't really answerable from DCF. So the weakness in trading comps had no second layer to catch it."}</p>
              <p>{ko
                ? "한 가지 더, Ch.4에서 다룬 \"range를 좁히는 마지막 작업\" 단계가 IPO에서는 다르게 작동해요. M&A에선 banker가 board에게 가져가는 \"recommended range\"가 의사결정의 끝이지만, IPO에선 roadshow 수요와 book-building을 통한 가격 발견이 그 자리를 대신합니다. 수요가 강하면 banker는 그 신호를 따라 range를 위로 올리고, Facebook의 경우 그 신호가 +25% share upsize와 합쳐지면서 결과적으로 시장에 너무 많은 공급을 한 번에 떠넘긴 셈이 됐어요."
                : "One more layer: Ch.4's 'range narrowing' step works differently in an IPO. In M&A the banker's recommended range is the decision point. In an IPO, roadshow demand and book-building do the price discovery. Strong demand pulls the range up — and for Facebook, that signal combined with a 25% share upsize dumped too much supply into the market all at once."}</p>
            </div>

            {/* 주가 timeline 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Facebook 주가 — IPO 이후 14개월" : "Facebook share price — 14 months after IPO"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "$38 공모가 → $17.7 최저점 → $38 회복." : "$38 IPO → $17.73 trough → back to $38."}
              </p>
              <div className="space-y-2.5">
                {PRICE_TIMELINE.map((t, i) => {
                  const widthPct = ((t.price - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
                  const isIPO = i === 0;
                  const isTrough = i === 4;
                  const isRecovered = i === 5;
                  const color = isIPO ? ACCENT : isTrough ? RED : isRecovered ? GREEN : `${ACCENT}90`;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-24 flex-shrink-0">
                        <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 leading-tight">{ko ? t.koDate : t.enDate}</p>
                      </div>
                      <div className="flex-1 relative h-5">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                          className="absolute top-0 h-full rounded flex items-center justify-end pr-2 text-white text-[10px] font-bold"
                          style={{ width: `${widthPct}%`, background: color, transformOrigin: "left" }}
                        >
                          ${t.price.toFixed(2)}
                        </motion.div>
                      </div>
                      <div className="w-64 flex-shrink-0">
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? t.koEvent : t.enEvent}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "회복까지 14개월. 그동안 약 $55B의 시장 가치가 사라졌다가 다시 돌아왔어요. 멀티플이 다시 80x가 된 건 아니고, 2013년에 모바일 광고 매출이 본격화되면서 NTM EBITDA 자체가 커진 결과입니다."
                  : "Fourteen months to recover. About $55B of market value vanished and came back — but not because the multiple bounced to 80x. 2013 mobile ad revenue ramping made NTM EBITDA itself larger."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "이 케이스가 valuation 작업에 남기는 것" : "What this case leaves for valuation work"}</p>
              <p>{ko
                ? "Facebook IPO의 valuation은 \"틀렸다\"라기보다는 \"안전마진이 거의 없었다\"에 가까웠어요. peer set이 약했고, NTM revenue가 흔들렸고, DCF로 보완이 안 되는 구조였습니다. 셋 중 하나만 잘 잡혔어도 첫날 결과는 달랐을 수 있어요."
                : "Facebook IPO's valuation wasn't 'wrong' so much as 'almost no margin of safety.' The peer set was weak, NTM revenue was shaky, and DCF couldn't backstop. Get any one of those right and day-one likely looks different."}</p>
              <p>{ko
                ? "IPO에서 Trading Comps anchor 자체는 표준이지만, peer set이 깨끗하지 않을 때 그 anchor가 통째로 약해진다는 것 — 그게 이 케이스의 핵심입니다. 다음 챕터에서는 정반대 컨텍스트, 즉 restructuring에서 going-concern과 청산가치가 부딪치는 상황을 봅니다."
                : "Trading comps as an IPO anchor is standard. But when the peer set isn't clean, the anchor itself goes shaky — that's the takeaway. Next chapter flips to the opposite context: restructuring, where going-concern and liquidation collide."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.6 — {ko ? "Distressed Valuation 케이스 — Caesars Chapter 11" : "Distressed Valuation Case — Caesars Chapter 11"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "회사를 계속 굴렸을 때의 가치 $11B와 지금 청산했을 때의 가치 $7B. 이 두 숫자를 두고 채권자와 주주가 파산 법정에서 어떻게 싸웠는지, 그리고 결과적으로 누가 얼마를 가져갔는지."
                  : "Going-concern value $11B vs liquidation value $7B. How creditors and equity holders fought over those two numbers in bankruptcy court, and who walked away with what."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share */}
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
