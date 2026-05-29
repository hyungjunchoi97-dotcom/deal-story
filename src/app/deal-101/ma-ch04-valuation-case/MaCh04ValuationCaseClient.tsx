/**
 * M&A 시리즈 Ch.4 — Valuation 케이스: 가정의 게임
 *
 * 메인 케이스: Bob Iger × Steve Jobs × Disney/Pixar (2006) $7.4B
 * 카운터 케이스: AOL × Time Warner (2000) $165B
 *
 * Sections:
 *  § 1 진짜 어려운 건 가정과 Comps
 *  § 2 DCF 4개 가정 — Revenue가 핵심, WACC는 템플릿
 *  § 3 Comps의 art — Universe 선정이 가격을 만든다
 *  § 4 케이스 1: Disney × Pixar (2006) — Iger의 narrative valuation
 *  § 5 케이스 2: AOL × Time Warner (2000) — 가정이 깨졌을 때
 *  § 6 IB Lead가 valuation에서 실제로 하는 일
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MA_CHAPTERS, getMaChapterBySlug, getMaSeriesNav } from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SLUG = "ma-ch04-valuation-case";
const ACCENT = "#3b82f6";

// ── DCF assumption weights ──────────────────────────────────────────
const DCF_ASSUMPTIONS = [
  { koName: "Revenue projection (5-yr growth)", enName: "Revenue projection (5-yr growth)", impact: 50, koDetail: "★ 가장 큰 변수. Management Case vs Banker Case 의 핵심 다툼", enDetail: "★ Biggest swing factor. Where Management Case vs Banker Case is fought" },
  { koName: "EBITDA margin trajectory",         enName: "EBITDA margin trajectory",         impact: 25, koDetail: "Margin expansion 가정. Operating leverage 정당화 필요", enDetail: "Margin expansion assumption. Must be justified by operating leverage" },
  { koName: "Terminal Value (perpetuity g)",    enName: "Terminal Value (perpetuity g)",    impact: 15, koDetail: "DCF EV의 60-70%를 차지하지만 표준 범위 (2-3%)에서 협상 종결",                                   enDetail: "Drives 60-70% of DCF EV, but typically settles in a standard 2-3% range" },
  { koName: "WACC (discount rate)",              enName: "WACC (discount rate)",              impact: 10, koDetail: "하우스 템플릿. 베타값만 뽑으면 나머지 자동 계산 — 협상 여지 적음",                          enDetail: "House template. Pull a beta and the rest auto-calculates — limited negotiation space" },
];

// ── Comps selection drivers ─────────────────────────────────────────
const COMP_DRIVERS = [
  { koDriver: "Sub-sector 정확도",     enDriver: "Sub-sector precision",        koWhy: "같은 '미디어'라도 streaming vs cable vs broadcast가 multiple 3-5× 차이", enWhy: "Within 'media,' streaming vs cable vs broadcast trade 3-5× apart" },
  { koDriver: "Revenue 사이즈",         enDriver: "Revenue size",                koWhy: "$200M peer와 $5B peer는 같은 sector여도 멀티플 prem/disc 다름",        enWhy: "$200M peer vs $5B peer trade differently even in the same sector" },
  { koDriver: "Profitability profile",  enDriver: "Profitability profile",       koWhy: "Margin 같아야 비교 가능. 25% margin SaaS vs 10% margin SaaS는 다름",    enWhy: "Margins must match — 25% margin SaaS vs 10% margin SaaS aren't comps" },
  { koDriver: "Growth rate",            enDriver: "Growth rate",                 koWhy: "Multiple은 growth와 직접 연동. 20% 성장 vs 5% 성장은 별개 카테고리",    enWhy: "Multiples track growth directly — 20% vs 5% growth are different categories" },
  { koDriver: "Geographic mix",         enDriver: "Geographic mix",              koWhy: "US-only vs EM exposure는 country risk premium 다름",                    enWhy: "US-only vs EM exposure carry different country risk premiums" },
];

// ── Pixar valuation gap ──────────────────────────────────────────────
const PIXAR_VALUATION = [
  { koMethod: "Trading Comps (animation studios)", enMethod: "Trading Comps (animation studios)", low: 2.5, high: 3.5, koDetail: "DreamWorks Animation 12-15× EBITDA",            enDetail: "DreamWorks Animation at 12-15× EBITDA" },
  { koMethod: "Transaction Comps",                  enMethod: "Transaction Comps",                  low: 3.5, high: 5.0, koDetail: "Media M&A 15-20× EBITDA",                       enDetail: "Media M&A at 15-20× EBITDA" },
  { koMethod: "DCF (Pixar standalone)",             enMethod: "DCF (Pixar standalone)",             low: 4.5, high: 6.0, koDetail: "Aggressive franchise 가정 포함",                  enDetail: "Including aggressive franchise assumptions" },
  { koMethod: "Iger Strategic Premium",             enMethod: "Iger Strategic Premium",             low: 7.0, high: 7.5, koDetail: "★ Jobs · talent · 애니메이션 future 전체 narrative",  enDetail: "★ The Jobs + talent + animation-future narrative" },
];

// ── AOL Time Warner reality gap ──────────────────────────────────────
const AOL_REALITY = [
  { koLabel: "2000 발표 시 합산 시총",       enLabel: "2000 announcement combined cap",  value: 350, koDetail: "AOL $164B + Time Warner $97B + premium" , enDetail: "AOL $164B + Time Warner $97B + premium" },
  { koLabel: "2002 회계 손실 처리 (1차)",   enLabel: "2002 goodwill impairment (1st)",  value: -99, koDetail: "Internet bubble 붕괴 후 첫 reality check",   enDetail: "First reality check after internet bubble" },
  { koLabel: "2003 추가 손실",              enLabel: "2003 additional impairment",      value: -45, koDetail: "광고 매출 가정 무너짐",                       enDetail: "Advertising revenue assumptions collapse" },
  { koLabel: "2009 AOL 재분사 시 가치",     enLabel: "2009 AOL spin-off valuation",     value: 3,   koDetail: "원래 가치의 1.8%",                            enDetail: "1.8% of original value" },
];

export default function MaCh04ValuationCaseClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const { prev, next } = getMaSeriesNav(SLUG);
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
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.4" : "M&A Series · Ch.4"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.4
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {chapter.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {ko ? "케이스: " : "Cases: "}{ko ? chapter.caseKo : chapter.caseEn}
          </p>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-10">
          <div className="flex gap-1.5 flex-wrap">
            {MA_CHAPTERS.map((ch) => {
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

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* § 1 — One line summary */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Valuation에서 진짜 어려운 건 가정과 Comps" : "The hard part of valuation is assumptions and comps"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Valuation을 배울 때 가장 큰 오해는 WACC 공식을 외우면 valuation을 할 수 있다는 것입니다. 사실은 반대입니다. WACC은 거의 모든 하우스가 동일한 템플릿을 사용하고, 베타값 하나 정도만 deal마다 새로 계산합니다. 진짜 가치를 만드는 건 그 위에 올라가는 가정 — 5년 revenue projection을 얼마로 잡을지, peer universe를 누구로 정할지 — 그리고 이걸 client·buyer·이사회한테 정당화하는 narrative입니다."
                : "The biggest misconception in valuation is that memorizing the WACC formula makes you a valuation analyst. The opposite is true. WACC uses near-identical templates across every house, and only the beta really gets recalculated per deal. The real value comes from the assumptions sitting on top — what 5-year revenue projection to use, which peers to include — and the narrative used to justify them to the client, buyer, and board."}</p>
              <p>{ko
                ? "이 챕터는 두 가지 사례를 통해 가정과 narrative가 가격을 어떻게 결정하는지 보여줍니다. Bob Iger가 Pixar를 $7.4B에 인수할 때 — DCF로는 거기까지 못 갔지만 narrative로 정당화. AOL이 Time Warner를 $165B에 합병할 때 — DCF 가정이 거의 모두 깨지면서 165B가 99B로 날아감."
                : "This chapter shows two cases of how assumptions and narrative actually set prices. When Bob Iger bought Pixar for $7.4B — DCF couldn't get there but narrative justified it. When AOL merged with Time Warner at $165B — nearly every DCF assumption broke, vaporizing $99B."}</p>
            </motion.div>
          </motion.section>

          {/* § 2 — DCF assumptions */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "DCF 4개 가정 — Revenue가 핵심, WACC는 템플릿" : "DCF's 4 assumptions — Revenue dominates, WACC is template"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "DCF model 자체는 4개의 핵심 가정으로 굴러갑니다. Revenue projection (보통 5년), Margin trajectory, Terminal Value의 perpetuity growth, WACC (할인율). 이 중 가격에 미치는 임팩트는 균등하지 않습니다 — Revenue가 50%, Margin이 25%, TV 15%, WACC 10% 정도. 그런데 실제 협상 시간 배분은 정확히 반대 — WACC을 가장 적게, Revenue를 가장 많이 다룹니다."
                : "A DCF model runs on four core assumptions: revenue projection (typically 5-year), margin trajectory, terminal value perpetuity growth, and WACC (the discount rate). Their impact on price is uneven — roughly 50% revenue, 25% margin, 15% TV, 10% WACC. Real negotiation time mirrors that exactly — least on WACC, most on revenue."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "가정별 EV 임팩트 (전형적 deal 기준)" : "EV impact by assumption (typical deal)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-3">
                {DCF_ASSUMPTIONS.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? a.koName : a.enName}</p>
                      <p className="text-[12px] font-mono text-gray-500 dark:text-gray-400">{a.impact}%</p>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${a.impact}%` }}
                        viewport={VP}
                        transition={{ duration: 0.7, delay: i * 0.07 + 0.2, ease: EASE }}
                        className="h-full rounded-full"
                        style={{ background: ACCENT }}
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? a.koDetail : a.enDetail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="mt-5 rounded-xl p-4 border-l-4 bg-amber-50/40 dark:bg-amber-950/20 border-amber-400 dark:border-amber-700">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-1.5">
                {ko ? "실무 디테일" : "Practitioner detail"}
              </p>
              <p className="text-[12px] text-amber-900 dark:text-amber-100 leading-relaxed">
                {ko
                  ? "WACC을 계산하는 데 시간이 가장 적게 들어가는 이유 — 모든 BB는 자체 WACC 템플릿이 있고, 베타값을 Bloomberg / Capital IQ에서 sector adjust해서 뽑고, equity risk premium은 firm-wide 표준 (Duff & Phelps 또는 자체 estimate)을 씁니다. Cost of debt는 회사 credit rating 기반. 결과적으로 WACC는 보통 9-12% 범위에서 거의 자동 결정. 진짜 시간은 모두 Revenue projection 검증에 들어갑니다."
                  : "WACC takes the least time because every BB has an in-house template. Beta is pulled from Bloomberg or Capital IQ with sector adjustments. Equity risk premium comes from a firm-wide standard (Duff & Phelps or internal estimate). Cost of debt is set from the company's credit rating. The output usually lands in a 9-12% range, almost mechanically. All the real time goes into validating the revenue projection."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 3 — Comps selection */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Comps의 art — Universe 선정이 가격을 만든다" : "The art of comps — universe selection sets the price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5 space-y-4">
              <p>{ko
                ? "Trading Comps와 Transaction Comps 둘 다 'public peers / 최근 M&A의 multiple을 따라간다'는 원칙이지만, 실무에서는 peer로 누구를 포함시키느냐가 valuation을 사실상 결정합니다. 같은 사업을 SaaS peer (15-25× EV/Revenue) 와 비교하면 가격이 한 layer, traditional software peer (3-5× EV/Revenue) 와 비교하면 완전히 다른 layer. IB의 art는 defensible한 peer universe를 만드는 것."
                : "Trading Comps and Transaction Comps both run on the principle of 'follow public peers / recent M&A multiples,' but in practice who you include as a peer effectively sets the valuation. Compare the same business to SaaS peers (15-25× EV/Revenue) and it sits in one layer; compare it to traditional software peers (3-5× EV/Revenue) and it's a different layer entirely. The IB's art is constructing a defensible peer universe."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Peer 선정의 5가지 driver" : "5 drivers of peer selection"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {COMP_DRIVERS.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                    className="p-4 bg-white dark:bg-gray-900 flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ACCENT }}>{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">{ko ? d.koDriver : d.enDriver}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{ko ? d.koWhy : d.enWhy}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* § 4 — Disney × Pixar */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4 · {ko ? "케이스 1" : "Case 1"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Disney × Pixar (2006) — Iger의 narrative valuation" : "Disney × Pixar (2006) — Iger's narrative valuation"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "2006년 1월 24일, Disney CEO Bob Iger는 Pixar를 $7.4B (74억 달러) 인수 합의를 발표합니다. Iger 취임 후 첫 대형 deal. Disney 측 advisor는 Goldman Sachs, Pixar 측은 Bear Stearns. 그런데 이 가격은 어떤 standard valuation framework로도 정당화하기 어려운 수준이었습니다. 당시 Pixar의 연 revenue는 약 $290M, EBITDA ~$200M. Trading Comps (DreamWorks Animation 등) 기준으로는 $3.5B이 한계였습니다."
                : "On January 24, 2006, Disney CEO Bob Iger announced a $7.4B acquisition of Pixar. It was the first major deal of his tenure. Disney's advisor was Goldman Sachs; Pixar's was Bear Stearns. The price was hard to justify under any standard valuation framework — Pixar's annual revenue was about $290M and EBITDA roughly $200M. Trading Comps against DreamWorks Animation capped out at $3.5B."}</p>
              <p>{ko
                ? "DCF로도 어려웠습니다. Pixar는 18개월에 영화 1편을 만드는 페이스였고, 각 영화의 $300-500M 박스오피스 가정을 5년 이상 늘려도 standalone DCF는 $4.5-6B에서 멈췄습니다. 그렇다면 $7.4B는 어디서 나왔나? Iger의 자서전 'The Ride of a Lifetime' 에 따르면, 그는 처음부터 Pixar를 '회사' 가 아니라 '미래 Disney 애니메이션 전체의 brain trust' 로 봤습니다. Steve Jobs와의 관계, John Lasseter와 Ed Catmull의 talent, Pixar의 cultural DNA를 Disney에 이식하는 것 — 이 모든 게 narrative valuation의 input이었습니다."
                : "DCF didn't get there either. Pixar produced one film every 18 months, and even pushing $300-500M box office assumptions per film for five years, standalone DCF capped at $4.5-6B. So where did $7.4B come from? In his memoir 'The Ride of a Lifetime,' Iger explains he saw Pixar from the start not as a 'company' but as 'the brain trust of all future Disney animation.' The relationship with Steve Jobs, the talent of John Lasseter and Ed Catmull, transplanting Pixar's cultural DNA into Disney — all of these were inputs to a narrative valuation."}</p>
            </motion.div>

            {/* Pixar valuation gap chart */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Pixar valuation — DCF/Comps 한계와 Iger의 narrative" : "Pixar valuation — DCF/comps ceiling vs Iger's narrative"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-3">
                {PIXAR_VALUATION.map((v, i) => {
                  const widthLow = (v.low / 8) * 100;
                  const widthHigh = ((v.high - v.low) / 8) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-52">
                        <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300 leading-tight">{ko ? v.koMethod : v.enMethod}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? v.koDetail : v.enDetail}</p>
                      </div>
                      <div className="flex-1 relative h-6 bg-gray-50 dark:bg-gray-800/40 rounded">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widthHigh}%` }}
                          viewport={VP}
                          transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: EASE }}
                          className="absolute top-0 h-full rounded text-white text-[10px] font-bold flex items-center justify-between px-2"
                          style={{ background: i === 3 ? ACCENT : "#94a3b8", left: `${widthLow}%` }}
                        >
                          <span>${v.low}B</span>
                          <span>${v.high}B</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
                <div className="ml-52 pl-3 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-1 mt-2">
                  <span>$0</span><span>$4B</span><span>$8B EV</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "최종 가격 $7.4B는 standard framework 최대치보다 +50% 위. Strategic premium narrative가 그 gap을 메움." : "The $7.4B price was +50% above the standard-framework ceiling. The strategic premium narrative bridged that gap."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-blue-50/40 dark:bg-blue-950/20 border-blue-400 dark:border-blue-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-1.5">
                {ko ? "Iger가 가르쳐준 lesson" : "What Iger taught"}
              </p>
              <p className="text-[13px] text-blue-900 dark:text-blue-100 leading-relaxed">
                {ko
                  ? "DCF·Comps가 가격을 결정하는 게 아니라, '왜 이 가격이 합리적인가' 를 board에 설명할 narrative가 가격을 결정한다. Pixar 인수는 사후적으로 Disney가 했던 deal 중 가장 성공한 케이스 중 하나 — Frozen·Moana·Inside Out·Coco 등의 franchise 가치가 인수가의 수십 배. Strategic premium narrative가 옳았다는 증거."
                  : "DCF and comps don't set the price — the narrative explaining 'why this price is reasonable' to the board sets it. The Pixar deal turned out to be one of Disney's most successful acquisitions ever — the Frozen, Moana, Inside Out, and Coco franchises generated multiples of the purchase price. The strategic premium narrative was vindicated."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 5 — AOL Time Warner */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5 · {ko ? "케이스 2" : "Case 2"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "AOL × Time Warner (2000) — 가정이 깨졌을 때" : "AOL × Time Warner (2000) — when assumptions break"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Iger의 케이스가 'narrative가 가격을 만들고 그게 사후에 맞을 때' 라면, AOL × Time Warner는 정확히 그 반대 — narrative와 가정이 모두 틀렸을 때 가격이 어떻게 무너지는지의 교과서. 2000년 1월, AOL이 Time Warner를 $164B에 인수합병 발표. CEO는 Steve Case (AOL) 와 Gerald Levin (Time Warner). 합병 회사의 총 시가총액은 $350B로 평가됐고, 'old media + new media'의 시너지가 narrative였습니다."
                : "If Iger's case shows narrative setting a price that proved right, AOL × Time Warner is the textbook opposite — what happens when both narrative and assumptions are wrong. In January 2000, AOL announced it would merge with Time Warner for $164B. The CEOs were Steve Case (AOL) and Gerald Levin (Time Warner). The combined company was valued at $350B, with the 'old media + new media' synergy as the narrative."}</p>
              <p>{ko
                ? "DCF 가정의 핵심은 두 가지였습니다. ① AOL의 dial-up internet 가입자 수가 2000년 2,300만에서 2005년 5,000만+ 로 증가, ② Time Warner의 content를 AOL portal에 배포해서 광고 매출 시너지 $1B+. 이 가정이 둘 다 빠르게 깨졌습니다 — Broadband가 dial-up을 대체하면서 AOL 가입자가 2003년부터 감소, 닷컴 버블 붕괴로 광고 매출도 폭락. 2002년 처음으로 $99B의 goodwill impairment 처리 (당시 회계 역사상 최대 손실)."
                : "Two core DCF assumptions drove the deal: (1) AOL's dial-up internet subscribers growing from 23M in 2000 to 50M+ by 2005, (2) distributing Time Warner content through the AOL portal would generate $1B+ in advertising synergies. Both broke quickly — broadband replaced dial-up and AOL subscribers started declining in 2003; the dot-com bust crushed advertising revenue. In 2002, the company took a $99B goodwill impairment — the largest in accounting history at the time."}</p>
            </motion.div>

            {/* AOL Time Warner reality chart */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "AOL Time Warner — 9년에 걸친 가치 붕괴 ($B)" : "AOL Time Warner — the 9-year value collapse ($B)"}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-3">
                {AOL_REALITY.map((r, i) => {
                  const widthPct = Math.min((Math.abs(r.value) / 350) * 100, 100);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-44">
                        <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 leading-tight">{ko ? r.koLabel : r.enLabel}</p>
                        <p className="text-[9px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? r.koDetail : r.enDetail}</p>
                      </div>
                      <div className="flex-1 relative h-7 bg-gray-50 dark:bg-gray-800/40 rounded">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widthPct}%` }}
                          viewport={VP}
                          transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: EASE }}
                          className="absolute top-0 h-full rounded text-white text-[10px] font-bold flex items-center justify-end pr-2"
                          style={{ background: r.value >= 0 ? (i === 0 ? "#94a3b8" : "#10b981") : "#ef4444" }}
                        >
                          {r.value >= 0 ? "+" : ""}${r.value}B
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "2009년 AOL이 다시 분사될 때 가치 $3B — 2000년 평가의 1.8%. Time Warner도 별도로 분사되어 결국 AT&T에 인수, 다시 Discovery와 합병. 'Worst deal in history' 라는 평가가 굳어짐." : "By the 2009 spin-off, AOL was worth $3B — 1.8% of its 2000 valuation. Time Warner was spun out separately, later acquired by AT&T, then merged with Discovery. The 'worst deal in history' label stuck."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-rose-50/40 dark:bg-rose-950/20 border-rose-400 dark:border-rose-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-700 dark:text-rose-300 mb-1.5">
                {ko ? "AOL TW가 가르쳐준 lesson" : "What AOL × TW taught"}
              </p>
              <p className="text-[13px] text-rose-900 dark:text-rose-100 leading-relaxed">
                {ko
                  ? "Narrative가 가격을 정당화하는 건 맞지만, 그 narrative의 underlying 가정이 검증 가능해야 한다. '신기술이 옛 산업을 대체할 것이다' 같은 macro narrative는 dangerous — 가정의 timing·magnitude·survivability를 banker가 challenge하지 않으면 client는 fiction을 사게 됨. IB의 역할은 narrative를 만들어주는 것뿐 아니라, narrative가 stress test를 통과하는지 검증하는 것."
                  : "Narrative does justify price, but the underlying assumptions must be testable. Macro narratives like 'new tech will replace old industry' are dangerous — if bankers don't challenge the timing, magnitude, and survivability of the assumption, the client ends up buying fiction. The IB's role isn't only to construct the narrative but to ensure it survives stress testing."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 6 — IB's job */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB Lead가 valuation에서 실제로 하는 일" : "What IB Lead actually does in valuation"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "DCF model의 셀 하나를 채우는 일은 associate·analyst가 합니다. IB Lead가 valuation에서 하는 일은 4가지 — ① Revenue projection 가정을 management와 같이 만들고 (또는 challenge하고), ② Peer universe를 정해서 comps story를 짜고, ③ Sensitivity table을 가지고 가격 range를 board에 설명할 narrative를 만들고, ④ Buyer 측 advisor가 challenge할 때 어디서 사수하고 어디서 양보할지 결정."
                : "Filling DCF model cells is associate/analyst work. The IB Lead's real job in valuation is four things — (1) build (or challenge) revenue projection assumptions with management, (2) define the peer universe and shape the comps story, (3) turn sensitivity tables into a narrative the board can explain, (4) decide where to defend and where to concede when the buyer's advisor pushes back."}</p>
              <p>{ko
                ? "Iger가 Pixar에서 한 일은 ③ 의 마스터 클래스 — DCF가 $5B을 가리킬 때 $7.4B의 narrative를 만들어서 Disney 이사회를 통과시켰습니다. AOL × Time Warner에서 빠진 건 ④ 의 stress test — '5,000만 가입자' 와 '$1B 광고 시너지' 가정을 banker가 더 강하게 challenge했어야 했습니다. 두 케이스 모두 valuation의 진짜 art는 가정과 narrative에 있음을 보여줍니다."
                : "What Iger did with Pixar was a masterclass in step (3) — when DCF pointed to $5B, he constructed a $7.4B narrative that survived the Disney board. What AOL × Time Warner was missing was step (4) stress testing — bankers should have pushed harder on the '50M subscribers' and '$1B advertising synergy' assumptions. Both cases show that the real art of valuation lives in assumptions and narrative."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "한 줄 정리" : "One line"}</p>
              <p className="text-[14px] text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                {ko
                  ? "Valuation의 art는 model의 정밀도가 아니라, 가정과 narrative의 defensibility에 있다."
                  : "The art of valuation isn't model precision — it's the defensibility of assumptions and narrative."}
              </p>
            </motion.div>
          </motion.section>

          {/* Next chapter preview */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                Ch.5 — {ko ? "IB Lead 오케스트레이션" : "IB Lead Orchestration"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "FDD 숫자와 valuation narrative가 다 있어도, 회계·컨설팅·법무 + 클라이언트 + Buyer side를 동시에 굴리는 게 안 되면 deal은 무너진다. 한 deal 안에서 IB Lead가 어떻게 4개 advisor와 클라이언트를 동시에 관리하는지 실제 케이스로."
                  : "Even with the FDD numbers and the valuation narrative in hand, the deal collapses if you can't simultaneously run accounting, consultants, law firm, the client, and the buyer side. A real case on how an IB Lead juggles all of it."}
              </p>
            </div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
