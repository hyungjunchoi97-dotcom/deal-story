/**
 * Valuation 시리즈 Ch.6 — Distressed Case · Caesars Chapter 11
 *
 * 톤 가이드 (Ch.4·5 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: 부채 등급별 회수 · 두 가치 다이어그램 · 등급별 입장 매트릭스 · POR 결과
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

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "val-ch06-distressed-case";
const ACCENT = "#3b82f6";
const RED = "#dc2626";
const GREEN = "#16a34a";
const AMBER = "#f59e0b";

// Going-concern vs Liquidation 가치 구성
const GC_COMPONENTS = [
  { koLabel: "라스베가스 카지노 운영 (Caesars Palace 등)", enLabel: "Las Vegas casino ops (Caesars Palace etc.)", val: 5.5 },
  { koLabel: "리저널 카지노 (애틀랜틱시티·중서부)",        enLabel: "Regional casinos (AC, Midwest)",            val: 2.8 },
  { koLabel: "Total Rewards 멤버십·디지털",                 enLabel: "Total Rewards loyalty · digital",          val: 1.7 },
  { koLabel: "브랜드 라이선스 (해외 카지노)",                enLabel: "Brand licensing (overseas)",                val: 1.0 },
];
const GC_TOTAL = 11.0; // $11B

const LIQ_COMPONENTS = [
  { koLabel: "부동산 자산 (호텔·카지노 건물·토지)",         enLabel: "Real estate (hotels, casino buildings, land)", val: 4.5 },
  { koLabel: "카지노 라이선스 (개별 매각시)",                enLabel: "Gaming licenses (sold individually)",         val: 1.8 },
  { koLabel: "브랜드 가치 + 고객 데이터",                    enLabel: "Brand value + customer data",                 val: 0.5 },
  { koLabel: "기타 자산 (장비·재고)",                        enLabel: "Other assets (equipment, inventory)",         val: 0.2 },
];
const LIQ_TOTAL = 7.0; // $7B

const VAL_MAX = 12; // chart 기준

// 부채 등급별 (Pre-bankruptcy)
const DEBT_STACK = [
  {
    koClass: "1st Lien Senior Secured (담보 1순위)",
    enClass: "1st Lien Senior Secured",
    claim: 6.4,
    recoveryPct: 0.95,
    recoveryVal: 6.1,
    koPosition: "Liquidation 가치 강조 — 담보 자산이 우선",
    enPosition: "Push liquidation value — secured assets come first",
    color: "#0f766e",
  },
  {
    koClass: "2nd Lien Secured (담보 2순위)",
    enClass: "2nd Lien Secured",
    claim: 5.2,
    recoveryPct: 0.82,
    recoveryVal: 4.3,
    koPosition: "양쪽 다 — 1순위 회수 후 잔여에서 회수",
    enPosition: "Both — recovers from what's left after 1st lien",
    color: "#0891b2",
  },
  {
    koClass: "Senior Unsecured Notes (무담보 채권)",
    enClass: "Senior Unsecured Notes",
    claim: 5.3,
    recoveryPct: 0.66,
    recoveryVal: 3.5,
    koPosition: "Going-concern + asset stripping 보상 강조",
    enPosition: "Push going-concern + asset-stripping compensation",
    color: ACCENT,
  },
  {
    koClass: "Subordinated Notes (후순위)",
    enClass: "Subordinated Notes",
    claim: 0.6,
    recoveryPct: 0.66,
    recoveryVal: 0.4,
    koPosition: "Going-concern 강조 — 회사가 살아남아야 회수",
    enPosition: "Push going-concern — only survives if the company does",
    color: AMBER,
  },
  {
    koClass: "Equity (Apollo · TPG)",
    enClass: "Equity (Apollo · TPG)",
    claim: 0,
    recoveryPct: 0,
    recoveryVal: 0,
    koPosition: "Going-concern 강조 + asset stripping 정당화 필요",
    enPosition: "Push going-concern + justify asset transfers",
    color: "#dc2626",
  },
];
const CLAIM_MAX = 7;

// 시나리오별 회수 비교 (간단화)
const POR_OUTCOME = [
  {
    koLabel: "1순위 담보",          enLabel: "1st lien secured",     claim: 6.4, recoveryVal: 6.1, recoveryPct: 95 },
  {
    koLabel: "2순위 담보",          enLabel: "2nd lien secured",     claim: 5.2, recoveryVal: 4.3, recoveryPct: 82 },
  {
    koLabel: "Senior Unsecured",   enLabel: "Senior unsecured",      claim: 5.3, recoveryVal: 3.5, recoveryPct: 66 },
  {
    koLabel: "Subordinated",        enLabel: "Subordinated",          claim: 0.6, recoveryVal: 0.4, recoveryPct: 66 },
];

export default function MaVal06Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.6" : "Valuation Series · Ch.6"}</span>
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
            </div>
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

          {/* § 1 — Caesars가 파산까지 간 과정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "$27.8B LBO에서 $18B 부채까지 — Caesars가 파산에 이른 과정" : "From a $27.8B LBO to $18B of debt — how Caesars got to Chapter 11"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2008년 1월, Apollo Global Management와 TPG가 $27.8B 규모의 LBO로 Harrah's Entertainment를 사들였어요. 인수 직후 회사 이름을 Caesars Entertainment로 바꿨고, 미국 최대 카지노 사업자 그룹이 됐습니다. 당시로서는 PE 역사상 가장 큰 LBO 중 하나였어요."
                : "In January 2008, Apollo Global Management and TPG took Harrah's Entertainment private in a $27.8B leveraged buyout. They renamed it Caesars Entertainment and emerged as the largest casino operator in the US. At the time, one of the biggest LBOs in PE history."}</p>
              <p>{ko
                ? "타이밍이 끔찍하게 나빴어요. 인수가 끝난 직후 글로벌 금융위기가 터졌고, 라스베가스의 카지노·호텔 매출이 단숨에 무너졌습니다. 2009년 라스베가스 게임 매출은 전년 대비 −20% 이상 떨어졌고, 회복까지 10년 가까이 걸렸어요. 그동안 Caesars의 누적 부채는 $25B 이상으로 불어났습니다."
                : "The timing was brutal. The global financial crisis hit right after the deal closed, and Las Vegas casino and hotel revenue collapsed. 2009 Las Vegas gaming revenue dropped more than 20% YoY, and the recovery took nearly a decade. Across that stretch, Caesars' debt piled past $25B."}</p>
              <p>{ko
                ? "2014년쯤에는 이자조차 감당하기 어려운 수준에 도달했고, 그 직전 Apollo·TPG가 일부 \"우량 자산\" — Planet Hollywood, The LINQ, Octavius Tower, 온라인 게이밍 사업 등 — 을 운영 자회사 CEOC에서 신규 법인 Caesars Growth Partners(CGP)로 옮기는 자산 재편을 단행했어요. 채권자들은 이 거래를 \"자산 이전(asset stripping)\"이라 부르며 강하게 반발했습니다."
                : "By 2014, the company couldn't even comfortably cover interest. Just before that, Apollo and TPG carried out a restructuring that moved several 'good assets' — Planet Hollywood, The LINQ, Octavius Tower, the online gaming business — out of the operating subsidiary CEOC into a new entity, Caesars Growth Partners (CGP). Creditors called this 'asset stripping' and pushed back hard."}</p>
              <p>{ko
                ? "2015년 1월 15일, Caesars Entertainment Operating Company(CEOC)가 Chapter 11 파산을 신청합니다. 총 $18.4B의 부채 구조조정. 이 챕터에서 볼 건 2008년 LBO valuation이 아니라, 파산 시점에서 진행된 \"이 회사가 지금 얼마짜리인가\"라는 다툼입니다. 그리고 그 다툼이 채권자 등급에 따라 누가 얼마를 가져가느냐에 어떻게 연결되는지예요."
                : "On January 15, 2015, Caesars Entertainment Operating Company (CEOC) filed for Chapter 11 — a $18.4B restructuring. This chapter doesn't revisit the 2008 LBO valuation. It looks at the bankruptcy-stage fight over 'what is this business worth right now' — and how that fight maps onto who recovers what in each creditor class."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Going-concern vs Liquidation */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Going-concern vs Liquidation — 같은 회사, 두 개의 숫자" : "Going-concern vs liquidation — same company, two numbers"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "파산 valuation의 본질은 한 문장으로 정리돼요. \"이 회사를 계속 굴렸을 때의 가치\"와 \"지금 분해해서 자산별로 팔았을 때의 가치\", 두 숫자를 동시에 만들어서 비교하는 거예요. 전자가 going-concern 가치, 후자가 liquidation 가치예요."
                : "Bankruptcy valuation reduces to one sentence — produce two numbers in parallel and compare them. The value of running the business as a going concern, vs. the value of breaking it up and selling assets piece by piece."}</p>
              <p>{ko
                ? "Going-concern 가치는 Ch.2·3에서 본 valuation 방법론을 그대로 씁니다. EBITDA에 멀티플을 곱하고, DCF를 돌려 미래 cash flow를 할인하고, peer comparables를 본 다음, Football Field로 정리해요. Caesars 케이스에서는 EBITDA 약 $1.2B에 8-10x 멀티플을 적용해서 $10B-$12B 정도가 나왔습니다. 보통 인용되는 숫자는 $11B."
                : "Going-concern uses the standard valuation toolkit from Ch.2–3. Apply a multiple to EBITDA, run a DCF, look at peer comparables, line them up on a football field. For Caesars, ~$1.2B of EBITDA at 8–10× yielded $10–12B, with $11B as the commonly cited figure."}</p>
              <p>{ko
                ? "Liquidation 가치는 접근이 완전히 달라요. \"이 회사를 운영할 수 없다고 가정하고, 자산을 하나씩 시장에 팔면 얼마 나오는가\"를 추정합니다. Caesars의 경우 부동산이 가장 큰 항목(라스베가스·애틀랜틱시티의 호텔·카지노 건물·토지), 그다음이 카지노 라이선스, 그다음이 브랜드와 고객 데이터, 마지막이 기타 장비. 다 합쳐서 약 $7B."
                : "Liquidation flips the lens entirely. 'Assume the business can't keep operating — what do you get selling assets one at a time?' For Caesars, real estate led the list (hotel/casino buildings and land in Las Vegas and Atlantic City), followed by gaming licenses, then brand and customer data, then misc equipment. Roughly $7B in total."}</p>
              <p>{ko
                ? "그래서 같은 회사인데 갭이 $4B씩 벌어집니다. 누가 어느 숫자를 anchor로 잡느냐가 협상의 모든 것을 결정해요. 그리고 이걸 결정하는 권한은 banker가 아니라 — 법원이 임명한 examiner에게 있어요."
                : "Same company, $4B gap. Which number serves as the anchor decides everything in the negotiation. And the authority to make that call doesn't rest with bankers — it rests with the court-appointed examiner."}</p>
            </div>

            {/* 두 가치 구성 다이어그램 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "두 가지 가치의 구성 — Caesars CEOC ($B)" : "Two value lenses, side by side — Caesars CEOC ($B)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 가치를 어떤 구성요소로 추정했는지를 누적 막대로." : "What goes into each value, stacked."}
              </p>

              <div className="space-y-5">
                {/* Going-concern */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[12.5px] font-bold" style={{ color: ACCENT }}>{ko ? "Going-concern (회사를 계속 굴렸을 때)" : "Going-concern (business keeps running)"}</span>
                    <span className="text-[13px] font-bold font-mono" style={{ color: ACCENT }}>${GC_TOTAL.toFixed(1)}B</span>
                  </div>
                  <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden flex">
                    {GC_COMPONENTS.map((c, i) => {
                      const widthPct = (c.val / VAL_MAX) * 100;
                      const alpha = 1 - i * 0.2;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                          className="h-full text-white text-[9.5px] font-bold flex items-center justify-center"
                          style={{
                            width: `${widthPct}%`,
                            background: ACCENT,
                            opacity: alpha,
                            transformOrigin: "left",
                            borderRight: i < GC_COMPONENTS.length - 1 ? "1px solid rgba(255,255,255,0.6)" : "none",
                          }}
                        >
                          ${c.val.toFixed(1)}
                        </motion.div>
                      );
                    })}
                  </div>
                  <ul className="mt-2 space-y-0.5">
                    {GC_COMPONENTS.map((c, i) => (
                      <li key={i} className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug flex gap-1.5">
                        <span className="text-gray-300 dark:text-gray-600">·</span>
                        <span>{ko ? c.koLabel : c.enLabel}</span>
                        <span className="text-gray-400 dark:text-gray-500 font-mono ml-auto">${c.val.toFixed(1)}B</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Liquidation */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[12.5px] font-bold" style={{ color: RED }}>{ko ? "Liquidation (지금 청산하면)" : "Liquidation (sell it all today)"}</span>
                    <span className="text-[13px] font-bold font-mono" style={{ color: RED }}>${LIQ_TOTAL.toFixed(1)}B</span>
                  </div>
                  <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden flex">
                    {LIQ_COMPONENTS.map((c, i) => {
                      const widthPct = (c.val / VAL_MAX) * 100;
                      const alpha = 1 - i * 0.2;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                          className="h-full text-white text-[9.5px] font-bold flex items-center justify-center"
                          style={{
                            width: `${widthPct}%`,
                            background: RED,
                            opacity: alpha,
                            transformOrigin: "left",
                            borderRight: i < LIQ_COMPONENTS.length - 1 ? "1px solid rgba(255,255,255,0.6)" : "none",
                          }}
                        >
                          ${c.val.toFixed(1)}
                        </motion.div>
                      );
                    })}
                  </div>
                  <ul className="mt-2 space-y-0.5">
                    {LIQ_COMPONENTS.map((c, i) => (
                      <li key={i} className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug flex gap-1.5">
                        <span className="text-gray-300 dark:text-gray-600">·</span>
                        <span>{ko ? c.koLabel : c.enLabel}</span>
                        <span className="text-gray-400 dark:text-gray-500 font-mono ml-auto">${c.val.toFixed(1)}B</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gap */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between">
                  <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">{ko ? "Gap — 두 가치 사이 격차" : "Gap — between the two"}</span>
                  <span className="text-[13px] font-bold font-mono text-gray-900 dark:text-gray-100">$4.0B</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Going-concern $11B에는 운영 노하우·고객 충성·브랜드가 가치에 반영되어 있고, Liquidation $7B에는 부동산·라이선스 같은 물리적·법적 자산만 잡힘. 그 차이 $4B가 바로 \"회사를 살려둘 가치\"입니다."
                  : "$11B going-concern values operating know-how, customer loyalty, and brand. $7B liquidation captures only physical and legal assets. The $4B gap is the 'value of keeping the business alive.'"}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 채권자 등급별로 다른 valuation */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "왜 채권자마다 다른 valuation을 들고 오는가" : "Why each creditor brings a different valuation"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "파산 valuation의 가장 흥미로운 부분이 여기예요. 같은 회사를 두고 채권자 등급에 따라 \"어느 가치가 맞는다\"고 주장하는 방향이 완전히 갈립니다. 그 이유는 단순하게도, 자기들이 더 많이 받을 수 있는 시나리오를 anchor로 잡으려고 하기 때문이에요."
                : "This is where bankruptcy valuation gets interesting. Different creditor classes argue for different valuations of the same company — for the simple reason that each pushes the anchor toward whichever scenario maximizes its own recovery."}</p>
              <p>{ko
                ? "1순위 담보 채권자는 담보 자산에 우선권을 가지고 있어요. Caesars의 경우 카지노 건물·토지 같은 부동산이 주요 담보였습니다. 회사가 청산되면 이 자산이 가장 먼저 매각돼서 1순위 담보 채권자에게 분배돼요. 그러니까 이들은 Liquidation 가치를 강조해야 할 동기가 강합니다. \"회사를 살릴 필요 없이, 우리는 청산에서 95% 받는다\" 라는 입장이에요."
                : "1st lien secured creditors hold priority over secured assets — for Caesars, real estate like casino buildings and land. In liquidation, that gets sold first and distributed to them. So they have every incentive to push the liquidation value: 'No need to keep the business alive — we recover 95% from liquidation either way.'"}</p>
              <p>{ko
                ? "반대로 무담보 채권자(senior unsecured) 입장은 정반대예요. 담보 자산에 대한 권리가 없으니까 청산이 되면 1순위·2순위 담보가 자기 몫을 다 가져간 뒤 남는 게 거의 없어요. 회사가 going-concern으로 살아남아야 그 잉여 가치에서 자기들도 회수할 수 있습니다. 그래서 going-concern $11B을 강조하면서, 동시에 Apollo·TPG의 자산 이전이 부적절했다고 주장해요 — 만약 이전된 자산이 다시 돌아오면 회수 가능한 pool이 더 커지니까요."
                : "Senior unsecured creditors sit on the opposite end. With no secured claim, liquidation leaves them almost nothing after 1st and 2nd lien take their cuts. They only recover if the company keeps running. So they push the $11B going-concern figure and simultaneously argue the Apollo–TPG asset transfers were improper — recovering those assets enlarges the pool they can claim against."}</p>
              <p>{ko
                ? "Equity 측, 즉 Apollo·TPG는 going-concern을 더 강하게 밀어야 했어요. 모든 채권자가 다 회수하고 남은 잔액이 있어야 equity가 뭔가 받기 때문이에요. 그러나 동시에 자산 이전(asset stripping)에 대한 책임 추궁을 방어해야 하는 입장이었습니다. \"우리는 회사를 살리려고 자산을 재편한 거지, 가치를 뽑아낸 게 아니다\" 라는 narrative였어요."
                : "Equity — Apollo and TPG — needed to push going-concern even harder. Equity only sees anything after every creditor class is paid. At the same time, they had to defend against asset-stripping allegations. Their narrative was 'we restructured assets to save the business, not to extract value.'"}</p>
            </div>

            {/* 등급별 입장 매트릭스 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "채권자 등급별 입장 — 누가 어느 가치를 anchor로 미는가" : "Position by class — who pushes which anchor"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Pre-bankruptcy claim 규모와 각 등급의 valuation 입장을 같이." : "Pre-bankruptcy claim and each class's valuation stance."}
              </p>
              <div className="space-y-3">
                {DEBT_STACK.map((d, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-baseline gap-2.5 min-w-0 flex-1">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100 truncate">{ko ? d.koClass : d.enClass}</span>
                      </div>
                      <span className="text-[12px] font-mono font-bold text-gray-900 dark:text-gray-100 flex-shrink-0 ml-2">
                        {d.claim > 0 ? `$${d.claim.toFixed(1)}B` : "—"}
                      </span>
                    </div>
                    {d.claim > 0 && (
                      <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1.5">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${(d.claim / CLAIM_MAX) * 100}%`, background: d.color, transformOrigin: "left" }}
                        />
                      </div>
                    )}
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug pl-7 border-l-2" style={{ borderColor: d.color, marginLeft: "0.25rem" }}>
                      {ko ? d.koPosition : d.enPosition}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "같은 회사를 두고 위에서부터 \"청산 가치 강조\", 아래로 갈수록 \"going-concern + 자산 이전 보상 강조\"로 입장이 갈립니다. Valuation은 객관적 분석이라기보단 \"내가 어느 진영에 서느냐\"의 문제."
                  : "From top to bottom: 'push liquidation,' shifting to 'push going-concern plus asset-transfer compensation.' Valuation here is less objective analysis than 'which side of the table am I on.'"}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Examiner의 결정 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Examiner의 결정 — 법원이 임명한 4,000페이지 보고서" : "The examiner's call — a 4,000-page court-appointed report"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Chapter 11에서 채권자들 사이의 입장이 너무 다르고 자산 이전 같은 의혹이 있을 때, 법원이 examiner를 임명할 수 있어요. Examiner는 양쪽 진영 어디에도 속하지 않는 독립적인 조사관이고, 결정적인 issue들에 대해 법원에 권고안을 제출합니다. Caesars 케이스에서는 2015년 3월, Richard J. Davis가 examiner로 지명됐어요."
                : "When creditor positions are too far apart in Chapter 11 — and especially when asset-stripping allegations are involved — the court can appoint an examiner. The examiner is independent of all sides and submits findings to the court on the contested issues. For Caesars, Richard J. Davis was appointed in March 2015."}</p>
              <p>{ko
                ? "Davis와 그의 팀은 13개월에 걸쳐 Caesars의 자산 이전 거래, valuation 가정, 회계 처리, 의사결정 기록을 전수 조사했어요. 결과물은 약 4,000페이지짜리 보고서. 2016년 3월에 공개된 이 보고서는 valuation 작업이 법정에서 어떻게 다뤄지는지를 보여주는 가장 두꺼운 단일 자료로 꼽힙니다."
                : "Davis and his team spent 13 months going through every asset transfer, valuation assumption, accounting treatment, and decision record. The output: roughly 4,000 pages, released in March 2016. It's widely cited as one of the most thorough single documents on how valuation work gets handled in court."}</p>
              <p>{ko
                ? "결론이 두 가지로 압축됐어요. 첫째, Caesars의 going-concern 가치는 채권자 측이 주장한 수준에 가깝다 — 약 $11B. 둘째, Apollo·TPG가 2010-2014년에 단행한 자산 이전 중 상당 부분이 \"fraudulent transfer\"에 해당할 가능성이 있다. CEOC가 받았어야 할 가치 약 $5B 이상이 부적절하게 빠져나갔다는 추정이었습니다."
                : "Two conclusions stood out. One, Caesars' going-concern value was closer to what creditors argued — around $11B. Two, a meaningful share of the asset transfers Apollo and TPG executed between 2010 and 2014 likely qualified as fraudulent transfer. The estimated value that improperly left CEOC: more than $5B."}</p>
              <p>{ko
                ? "이 보고서가 공개된 순간 협상의 균형이 통째로 바뀌었어요. 채권자들은 \"법원도 우리 편\"이라는 anchor를 얻었고, Apollo·TPG는 자산 이전 책임을 인정하지 않으면 소송으로 갈 경우 더 큰 손실을 볼 수 있는 위치가 됐습니다. 그 결과 양쪽이 settlement 테이블로 돌아왔어요."
                : "The moment the report dropped, the negotiation balance flipped. Creditors got an anchor — 'the court sees it our way.' Apollo and TPG faced the prospect that contesting the asset-transfer findings in litigation could mean even larger losses. Both sides came back to the settlement table."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Plan of Reorganization + takeaway */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "결과 — 채권자 등급별로 누가 얼마를 받았나" : "Outcome — who recovered what, by class"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2017년 10월, Caesars의 Plan of Reorganization이 법원 인가를 받고 효력을 발휘합니다. 핵심 요소는 세 가지였어요."
                : "In October 2017, Caesars' Plan of Reorganization was confirmed and went effective. Three core pieces."}</p>
              <p>{ko
                ? "첫째, parent 회사 Caesars Entertainment Corporation(CEC)과 Caesars Acquisition Company가 합병하면서 채권자들에게 약 $5B의 추가 가치를 제공했어요. Examiner 보고서가 지적한 자산 이전에 대한 사실상의 보상이었습니다. 둘째, 부동산을 별도 법인 VICI Properties라는 REIT로 분리해서 채권자들에게 지분 형태로 분배했어요. 카지노 운영 회사와 부동산 보유 회사를 분리하는, 카지노 업계에서 흔히 쓰이는 구조였습니다. 셋째, 1순위·2순위 담보 채권자는 새 회사의 우선 청구권을, 무담보 채권자는 새 회사 주식과 VICI Properties 지분을 받았어요."
                : "First, the parent (Caesars Entertainment Corporation) and Caesars Acquisition Company merged, delivering roughly $5B of additional value to creditors — effectively compensation for the asset transfers the examiner flagged. Second, real estate was carved into a separate REIT, VICI Properties, with equity distributed to creditors — the same OpCo/PropCo split that's standard in the casino industry. Third, 1st and 2nd lien holders received priority claims in the new entity; unsecured holders received new-equity stakes and VICI Properties shares."}</p>
              <p>{ko
                ? "회수율로 환산하면 1순위 담보 95%, 2순위 담보 82%, 무담보 senior 66%, 후순위 66% 수준에 도달했어요. 무담보 채권자가 회수율 66%까지 받은 건 distressed 시장 평균 30-40% 대비 매우 높은 결과예요. Examiner 보고서가 만들어낸 협상의 anchor가 그만큼 강했다는 의미입니다."
                : "Recovery rates: 1st lien 95%, 2nd lien 82%, senior unsecured 66%, subordinated 66%. 66% for unsecured is unusually high vs the distressed-market average of 30–40%. The examiner's findings made the anchor that strong."}</p>
            </div>

            {/* POR 결과 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Plan of Reorganization 결과 — 등급별 회수" : "Plan of Reorganization outcome — recovery by class"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 등급의 명목 claim과 실제 회수액·회수율." : "Nominal claim vs actual recovery (amount and %)."}
              </p>

              <div className="space-y-4">
                {POR_OUTCOME.map((o, i) => {
                  const claimWidthPct = (o.claim / CLAIM_MAX) * 100;
                  const recoveryWidthPct = (o.recoveryVal / CLAIM_MAX) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? o.koLabel : o.enLabel}</span>
                        <span className="text-[11px] font-mono font-bold" style={{ color: o.recoveryPct >= 80 ? GREEN : o.recoveryPct >= 60 ? ACCENT : AMBER }}>
                          {o.recoveryPct}% recovery
                        </span>
                      </div>
                      {/* Claim bar (background) */}
                      <div className="relative h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-0.5">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="absolute top-0 h-full rounded"
                          style={{ width: `${claimWidthPct}%`, background: `${ACCENT}30`, transformOrigin: "left" }}
                        />
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: EASE }}
                          className="absolute top-0 h-full rounded text-white text-[9.5px] font-bold flex items-center justify-end pr-2"
                          style={{
                            width: `${recoveryWidthPct}%`,
                            background: o.recoveryPct >= 80 ? GREEN : o.recoveryPct >= 60 ? ACCENT : AMBER,
                            transformOrigin: "left",
                          }}
                        >
                          ${o.recoveryVal.toFixed(1)}B
                        </motion.div>
                      </div>
                      <p className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
                        {ko ? "Claim" : "Claim"} ${o.claim.toFixed(1)}B · {ko ? "회수" : "Recovered"} ${o.recoveryVal.toFixed(1)}B
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Equity (Apollo·TPG)는 0%. 자산 이전 보상으로 $5B을 추가 출연해야 했지만, 동시에 fraudulent transfer 소송 리스크는 종결됐습니다. 평균 distressed 회수율(30-40%) 대비 무담보 등급까지 66%가 나온 게 이 케이스의 distinctive한 결과."
                  : "Equity (Apollo, TPG) recovered 0%. They contributed $5B as asset-transfer compensation but extinguished fraudulent-transfer litigation risk. The case's distinctive result: even unsecured creditors recovered 66%, well above the distressed-market 30–40% average."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "이 케이스가 valuation 작업에 남기는 것" : "What this case leaves for valuation work"}</p>
              <p>{ko
                ? "Caesars 케이스의 가장 큰 lesson은 valuation이 항상 \"객관적 정답\"을 찾는 작업이 아니라는 점이에요. 같은 회사 같은 시점에서 $11B와 $7B 두 숫자가 동시에 존재할 수 있고, 그중 어느 쪽이 anchor가 되느냐는 누가 어떤 입장에 서 있느냐에 따라 달라집니다."
                : "The biggest lesson here is that valuation isn't always a hunt for an 'objective right answer.' The same company at the same moment can sit at $11B and $7B simultaneously — and which one becomes the anchor depends on whose side of the table you're on."}</p>
              <p>{ko
                ? "Restructuring에서 valuation의 핵심은 method가 아니라 \"이 숫자가 어떤 결과로 연결되는가\"예요. 1순위 담보 채권자에게는 liquidation 가치가 $5.7B을 보장하는 안전망이고, 무담보 채권자에게는 going-concern 가치가 $11B로 나와줘야 자기들도 회수가 시작돼요. 그래서 동일한 EBITDA와 동일한 자산에서 출발한 두 개의 valuation 분석이 협상 테이블에서 마주칩니다."
                : "In restructuring, valuation isn't really about method — it's about 'what does this number translate into.' For 1st lien holders, liquidation at $5.7B is the floor. For unsecured holders, only going-concern at $11B starts giving them anything. The same EBITDA and the same assets produce two valuations that meet at the negotiation table."}</p>
              <p>{ko
                ? "Ch.1에서 던졌던 질문, \"이 회사는 얼마짜리예요?\"에 단일 답이 없다는 명제 — Caesars 케이스가 그걸 가장 극단적으로 보여줍니다. Valuation 시리즈는 여기서 마무리하고, 이 6개 챕터에서 본 도구들이 실제 거래에서 어떻게 결합되는지를 떠올리시면서 다음 단계로 가시면 좋겠어요."
                : "Ch.1's question — 'how much is this company worth?' — has no single answer. Caesars shows that in its most extreme form. The valuation series wraps here. Take the toolkit from these six chapters and watch how it stacks in real deals from now on."}</p>
            </div>
          </motion.section>

          {/* Series complete */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "시리즈 종료" : "Series complete"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Valuation 시리즈 — 6챕터 완결" : "Valuation series — six chapters wrapped"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Ch.1 회사에 값을 매기는 3가지 방법, Ch.2 DCF 실무, Ch.3 Comps 실무, Ch.4 Football Field 종합, Ch.5 Facebook IPO 케이스, Ch.6 Caesars Chapter 11 케이스. 이론에서 실무, 그리고 실제 거래까지 따라온 6단계."
                  : "Ch.1 three frameworks, Ch.2 DCF in practice, Ch.3 comps in practice, Ch.4 football field synthesis, Ch.5 Facebook IPO case, Ch.6 Caesars Chapter 11 case. Six steps from theory to practice to real deals."}
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
