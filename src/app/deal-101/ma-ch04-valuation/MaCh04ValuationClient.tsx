/**
 * Ch.4 — Valuation Football Field
 * DCF · Trading Comps · Transaction Comps · LBO 4종 통합
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import MaChapterNav from "@/components/ma/MaChapterNav";
import PhaseBadge from "@/components/ma/PhaseBadge";
import VariantSnapshot from "@/components/ma/VariantSnapshot";
import SeriesNav from "@/components/SeriesNav";
import { getMaChapterBySlug, getMaSeriesNav, getPhase } from "@/data/ma-series";

type Lang = "ko" | "en";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const SLUG = "ma-ch04-valuation";

// Football field data ($M EV range)
const FOOTBALL_FIELD = [
  { koMethod: "DCF — Banker Case",      enMethod: "DCF — Banker Case",      low: 850,  high: 1150, color: "bg-blue-500",   descKo: "WACC 9-11%, TV 2-3% perpetual",        descEn: "WACC 9-11%, TV 2-3% perpetual" },
  { koMethod: "DCF — Management Case",   enMethod: "DCF — Management Case",  low: 1100, high: 1450, color: "bg-blue-300",   descKo: "Mgmt projection 그대로 (참고만)",       descEn: "Management projections (reference only)" },
  { koMethod: "Trading Comps (EV/EBITDA)", enMethod: "Trading Comps (EV/EBITDA)", low: 920, high: 1280, color: "bg-violet-500", descKo: "Public peers 평균 11-15× × LTM EBITDA",  descEn: "Public peer median 11-15× LTM EBITDA" },
  { koMethod: "Transaction Comps",       enMethod: "Transaction Comps",      low: 1050, high: 1380, color: "bg-violet-600", descKo: "최근 2년 deals 13-17×",                  descEn: "Last 2-year deals at 13-17×" },
  { koMethod: "LBO Reverse-math",        enMethod: "LBO Reverse-math",       low: 880,  high: 1100, color: "bg-purple-500", descKo: "PE sponsor의 max bid (IRR 20%+ 가정)",   descEn: "PE sponsor max bid (assumes 20%+ IRR)" },
  { koMethod: "52-week Trading Range",   enMethod: "52-week Trading Range",  low: 750,  high: 1050, color: "bg-gray-400",   descKo: "Public target 한정 — 시장 reference",     descEn: "Public-only — market reference" },
];

const FF_MAX = 1500;
const FF_MIN = 700;

// DCF flow
const DCF_FLOW = [
  { ko: "Revenue projection (5yr)",   en: "Revenue projection (5yr)",   noteKo: "Banker Case 기준",       noteEn: "Banker Case basis" },
  { ko: "EBITDA → EBIT",              en: "EBITDA → EBIT",              noteKo: "감가상각 차감",          noteEn: "Subtract D&A" },
  { ko: "Tax (EBIT × (1-t))",         en: "Tax (EBIT × (1-t))",         noteKo: "Marginal tax rate 25%",   noteEn: "Marginal tax 25%" },
  { ko: "FCF = NOPAT + D&A − Capex − ΔNWC", en: "FCF = NOPAT + D&A − Capex − ΔNWC", noteKo: "Unlevered free cash flow", noteEn: "Unlevered free cash flow" },
  { ko: "Discount @ WACC",            en: "Discount @ WACC",            noteKo: "9-11% range",             noteEn: "9-11% range" },
  { ko: "+ Terminal Value (Gordon)",  en: "+ Terminal Value (Gordon)",  noteKo: "60-70% of total EV",      noteEn: "60-70% of total EV" },
  { ko: "= Enterprise Value",         en: "= Enterprise Value",         noteKo: "Final DCF EV",            noteEn: "Final DCF EV" },
];

const FAQS = [
  {
    qKo: "Football field이 왜 표준이 됐나?",
    qEn: "Why did the football field become standard?",
    aKo: "어느 단일 방법론도 절대적이지 않기 때문입니다. DCF는 가정 sensitive, comps는 peer selection 논쟁, transaction은 데이터 적고 시점 노후화. 4-6개 방법을 동시에 보여주면서 'overlap zone' (보통 $1.0-1.2B) 을 강조하는 게 가장 설득력 있는 narrative. CEO/이사회에 1장으로 valuation 보여줄 때 football field 만큼 효과적인 게 없습니다.",
    aEn: "No single method is definitive. DCF is assumption-sensitive, comps invite peer-selection arguments, and transactions are data-thin and time-stale. Showing 4-6 methods side-by-side and emphasizing the 'overlap zone' (often $1.0-1.2B) is the most persuasive narrative. For board presentations, nothing beats a football field on a single page.",
  },
  {
    qKo: "DCF에서 Terminal Value가 60-70%인 게 정상인가?",
    qEn: "Is it normal for Terminal Value to be 60-70% of DCF EV?",
    aKo: "정상입니다 — explicit 5년 forecast period 의 FCF discount 합보다 perpetuity 부분이 훨씬 큰 게 일반적. 그래서 TV 가정이 (perpetual growth rate, exit multiple) DCF 결과를 사실상 지배합니다. Banker는 두 가지 TV 방법론 — Gordon Growth (g=2-3%) 과 Exit Multiple (8-10× EBITDA) — 을 둘 다 보여주고 그 평균을 base로 씁니다.",
    aEn: "Yes — the perpetuity portion typically dwarfs the explicit 5-year discounted FCF. TV assumptions (perpetual growth rate, exit multiple) essentially dominate the DCF output. Bankers show both methods — Gordon Growth (g=2-3%) and Exit Multiple (8-10× EBITDA) — and average them as the base case.",
  },
  {
    qKo: "Trading Comps에서 peer는 어떻게 고르나?",
    qEn: "How are peers picked in trading comps?",
    aKo: "Capital IQ screening → 산업·지역·매출 규모 filter → 50-80개 → 분기 결과 발표 시점 정렬 → 10-15개로 축소 → 분석가가 손으로 final 7-10개 선정. Selection criteria: ① same sub-sector, ② revenue $200M-2B range (target과 비슷), ③ profitability profile 유사, ④ public 거래 active. 가장 흔한 buyer pushback: 'peer X 는 우리 비즈니스 모델과 다르다' — 그래서 selection rationale 문서화가 핵심.",
    aEn: "Capital IQ screening → filter by industry/geography/revenue → 50-80 names → check earnings dates → narrow to 10-15 → analyst hand-picks final 7-10. Selection criteria: (1) same sub-sector, (2) revenue range similar to target ($200M-2B), (3) similar profitability profile, (4) active public trading. The most common buyer pushback: 'peer X doesn't match our business model' — which is why documenting selection rationale is critical.",
  },
  {
    qKo: "Cross-border 딜에서 valuation은 어떻게 다른가?",
    qEn: "How does valuation differ in cross-border deals?",
    aKo: "추가로 ① Country risk premium (CAPM에 0.5-3%p 가산), ② FX sensitivity table (target 통화 ±10%), ③ Tax structure 차이 (분배·과세 시점) 가 들어갑니다. Comps도 split — local market peers + global peers 둘 다 제시하고 비교. 한국 → 미국 cross-border는 일반적으로 한국 peers가 더 낮은 multiple 거래되므로 '한국 valuation에 글로벌 premium 적용' 논리를 banker가 만들어야 합니다.",
    aEn: "Cross-border adds: (1) country risk premium (+0.5-3pp on CAPM), (2) FX sensitivity table (target currency ±10%), (3) tax structure differences (timing/jurisdiction of distributions). Comps split into local-market peers + global peers, shown side-by-side. Korea-to-US cross-border typically faces the gap that Korean peers trade at lower multiples — bankers must build the 'apply global premium to Korean valuation' narrative.",
  },
];

export default function MaCh04ValuationClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  const [wacc, setWacc] = useState(10);
  const [growth, setGrowth] = useState(2.5);
  // Simplified DCF: assume $100M Year 1 FCF, growing at growth+5% for 5 years, then perpetuity
  const computeDCF = () => {
    let pv = 0;
    let fcf = 100;
    for (let y = 1; y <= 5; y++) {
      fcf *= 1 + (growth + 5) / 100;
      pv += fcf / Math.pow(1 + wacc / 100, y);
    }
    const tv = (fcf * (1 + growth / 100)) / ((wacc - growth) / 100);
    pv += tv / Math.pow(1 + wacc / 100, 5);
    return pv;
  };
  const dcfEV = computeDCF();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span><Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span><Link href={`${base}/ma-ch00-overview`} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "M&A 시리즈" : "M&A Series"}</Link>
            <span>›</span><span className="text-gray-600 dark:text-gray-300 font-medium">Ch.4</span>
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <PhaseBadge phase={phase} lang={lang} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Ch.{chapter.ch} · {chapter.readingMinutes}{ko ? "분" : " min"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">{ko ? chapter.titleKo : chapter.titleEn}</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{ko ? chapter.taglineKo : chapter.taglineEn}</p>
          <p className="mt-3 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">{ko ? chapter.questionKo : chapter.questionEn}</p>
        </section>

        <MaChapterNav currentSlug={SLUG} lang={lang} />

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">
          <VariantSnapshot chapter={chapter} phase={phase} lang={lang} />

          {/* § 4.1 Football Field */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Football Field — 4-6 방법론 통합" : "Football Field — combining 4-6 methods"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Football field 차트는 valuation deliverable 의 표준 형태입니다. X축은 EV ($M 또는 $B), 각 행은 valuation 방법 — DCF, Trading Comps, Transaction Comps, LBO, 52-week 등. 각 방법의 가격 범위를 막대로 그리고, 막대들이 overlap 되는 zone 을 'consensus range' 로 highlight. CEO·이사회·buyer 모두 이 1장으로 가격 conversation 을 시작합니다."
                : "The football field is the standard valuation deliverable. X-axis is EV ($M or $B); each row is a valuation method — DCF, Trading Comps, Transaction Comps, LBO, 52-week, etc. Plot the range per method as a bar and highlight where the bars overlap as the 'consensus range.' CEO, board, and buyers all start the price conversation from this single chart."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Football Field — EV range ($M)" : "Football Field — EV range ($M)"}</p>
              </div>
              <div className="p-5 sm:p-6 bg-white dark:bg-gray-900">
                {/* Consensus zone overlay */}
                <div className="relative">
                  <div className="absolute top-0 bottom-12 rounded bg-amber-100/40 dark:bg-amber-900/30 border border-dashed border-amber-300 dark:border-amber-700"
                    style={{ left: `${((1000 - FF_MIN) / (FF_MAX - FF_MIN)) * 100}%`, width: `${((1200 - 1000) / (FF_MAX - FF_MIN)) * 100}%` }}
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-amber-700 dark:text-amber-300 whitespace-nowrap">
                      {ko ? "Consensus $1.0-1.2B" : "Consensus $1.0-1.2B"}
                    </div>
                  </div>
                  <div className="space-y-2 mt-6">
                    {FOOTBALL_FIELD.map((m, i) => {
                      const leftPct = ((m.low - FF_MIN) / (FF_MAX - FF_MIN)) * 100;
                      const widthPct = ((m.high - m.low) / (FF_MAX - FF_MIN)) * 100;
                      return (
                        <div key={i} className="flex items-center gap-3 relative">
                          <div className="flex-shrink-0 w-44">
                            <p className="text-[11px] font-bold text-gray-900 dark:text-gray-100 leading-tight">{ko ? m.koMethod : m.enMethod}</p>
                            <p className="text-[9px] text-gray-500 dark:text-gray-400">{ko ? m.descKo : m.descEn}</p>
                          </div>
                          <div className="flex-1 relative h-7">
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              whileInView={{ width: `${widthPct}%`, opacity: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                              className={`absolute top-0 h-full rounded ${m.color} text-white text-[10px] flex items-center justify-between px-2 font-bold`}
                              style={{ left: `${leftPct}%` }}
                            >
                              <span>${m.low}</span>
                              <span>${m.high}</span>
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* X-axis */}
                <div className="mt-3 ml-44 pl-3 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-1">
                  <span>$700M</span>
                  <span>$1.0B</span>
                  <span>$1.5B</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "Consensus zone ($1.0-1.2B) — 5개 방법론이 overlap되는 구간. 실제 협상 anchor 가격." : "Consensus zone ($1.0-1.2B) — overlap across 5 methods. The real negotiation anchor."}
              </div>
            </motion.div>
          </motion.section>

          {/* § 4.2 DCF Flow */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "DCF — FCF에서 EV까지 7단계" : "DCF — from FCF to EV in 7 steps"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="mt-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "DCF 7-step flow" : "DCF 7-step flow"}</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 space-y-2">
                {DCF_FLOW.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/40"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white" style={{ background: phase.accentHex }}>{i + 1}</span>
                    <p className="flex-1 text-[12px] font-bold text-gray-900 dark:text-gray-100 font-mono">{ko ? s.ko : s.en}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? s.noteKo : s.noteEn}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DCF interactive sensitivity */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "DCF Sensitivity — WACC × Perpetual Growth" : "DCF Sensitivity — WACC × Perpetual Growth"}</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400">WACC</label>
                    <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{wacc.toFixed(1)}%</p>
                  </div>
                  <input type="range" min={7} max={14} step={0.5} value={wacc} onChange={(e) => setWacc(Number(e.target.value))} className="w-full" style={{ accentColor: phase.accentHex }} />
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{ko ? "Perpetual growth" : "Perpetual growth"}</label>
                    <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{growth.toFixed(1)}%</p>
                  </div>
                  <input type="range" min={0} max={5} step={0.25} value={growth} onChange={(e) => setGrowth(Number(e.target.value))} className="w-full" style={{ accentColor: phase.accentHex }} />
                </div>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between">
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">{ko ? "예상 EV (간이 모델)" : "Implied EV (simplified)"}</p>
                  <p className="text-2xl font-black" style={{ color: phase.accentHex }}>${dcfEV.toFixed(0)}M</p>
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{ko
                  ? "WACC ±1%p 변화로 EV ±10-15% 흔들림. 그래서 banker는 sensitivity table을 항상 함께 보여줍니다."
                  : "A 1pp WACC swing moves EV by ±10-15%. That's why bankers always pair the DCF with a sensitivity table."}</p>
              </div>
            </motion.div>
          </motion.section>

          {/* § 4.3 Comps */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Trading Comps & Transaction Comps" : "Trading Comps & Transaction Comps"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Trading comps 는 public peers 의 'where they trade today' 를 보는 것이고, Transaction comps 는 'what acquirers paid recently' 를 보는 것입니다. 차이가 곧 control premium — 보통 transaction multiple 이 trading multiple 보다 20-35% 높습니다. 둘 다 LTM (Last Twelve Months) 기준 EV/EBITDA, EV/Revenue, P/E 등 멀티플로 표현."
                : "Trading comps show where public peers trade today; transaction comps show what acquirers have paid recently. The delta is the control premium — typically transaction multiples run 20-35% above trading. Both expressed as LTM (Last Twelve Months) multiples: EV/EBITDA, EV/Revenue, P/E."}</p>
              <p>{ko
                ? "Comps universe 만드는 게 가장 시간 소요되는 작업. Capital IQ 또는 FactSet screening → 산업/지역/사이즈 filter → 50-80 names → 분기 결과·일회성 이벤트 제외 → 최종 7-10 선정. 'peer X 를 왜 포함/제외했는가' 가 buyer 와의 핵심 논쟁."
                : "Building the comps universe is the most time-consuming step. Capital IQ or FactSet screening → industry/geo/size filter → 50-80 names → strip earnings/one-offs → final 7-10. 'Why include/exclude peer X' is the central debate with buyers."}</p>
            </motion.div>
          </motion.section>

          {/* § 4.4 LBO Reverse-math */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "LBO Reverse-math — Sponsor가 낼 수 있는 최대 가격" : "LBO Reverse-math — sponsor's max bid"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "PE sponsor 가 bidder 에 포함되면 banker 는 'LBO reverse-math' 을 합니다. Sponsor 가 목표 IRR (보통 20-25%) 을 달성하면서 낼 수 있는 max entry price 를 역산. 입력값: ① Exit multiple 가정 (8-10× EBITDA), ② Hold period (5년), ③ Leverage (5-6× EBITDA), ④ EBITDA 성장률. 이 reverse-math 결과는 sell-side 가 'PE bidder 가 strategic 보다 낮게 부를 것' 을 예측하는 데 사용됩니다 — strategic 은 synergy 가 있어서 항상 PE 보다 높게 낼 수 있음."
                : "When a PE sponsor is on the bidder list, bankers run an 'LBO reverse-math' — backing out the max entry price the sponsor can pay while hitting their target IRR (typically 20-25%). Inputs: (1) exit multiple assumption (8-10× EBITDA), (2) hold period (5 years), (3) leverage (5-6× EBITDA), (4) EBITDA growth. This reverse-math is how sell-side predicts that PE bidders will undercut strategics — strategics have synergies and can always pay more."}</p>
            </motion.div>
          </motion.section>

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">FAQ</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <div className="space-y-2">{FAQS.map((f, i) => (<FaqItem key={i} qKo={f.qKo} qEn={f.qEn} aKo={f.aKo} aEn={f.aEn} ko={ko} accentHex={phase.accentHex} />))}</div>
          </motion.section>

          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>
          {(prev || next) && (
            <SeriesNav lang={lang}
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

function FaqItem({ qKo, qEn, aKo, aEn, ko, accentHex }: { qKo: string; qEn: string; aKo: string; aEn: string; ko: boolean; accentHex: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border ${open ? "border-gray-300 dark:border-gray-600" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-900 overflow-hidden`}>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-4 flex items-start gap-3">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5" style={{ background: `${accentHex}20`, color: accentHex }}>Q</span>
        <span className="flex-1 text-[14px] font-semibold text-gray-900 dark:text-gray-100">{ko ? qKo : qEn}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><polyline points="6 9 12 15 18 9" /></svg>
        </motion.span>
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 pl-12 text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{ko ? aKo : aEn}</div>
        </motion.div>
      )}
    </div>
  );
}
