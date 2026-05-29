/**
 * Ch.5 — Buyer List & Process Design
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
const SLUG = "ma-ch05-buyer-list";

const PROCESS_TYPES = [
  { koName: "Broad Auction",   enName: "Broad Auction",     buyersKo: "50-100+", buyersEn: "50-100+", timelineKo: "5-7개월", timelineEn: "5-7 months", premiumKo: "+15-25%", premiumEn: "+15-25%", leakKo: "높음 — 직원·고객이 알아챌 위험", leakEn: "High — risk of employee/customer leak", whenKo: "Generic asset, broad strategic + sponsor interest", whenEn: "Generic asset, broad strategic + sponsor interest", color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40" },
  { koName: "Limited Auction", enName: "Limited Auction",   buyersKo: "10-20",   buyersEn: "10-20",   timelineKo: "4-5개월", timelineEn: "4-5 months", premiumKo: "+10-20%", premiumEn: "+10-20%", leakKo: "중간",                              leakEn: "Medium",                              whenKo: "Specialized asset, defined buyer universe", whenEn: "Specialized asset, defined buyer universe",          color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800/40" },
  { koName: "Targeted",        enName: "Targeted",          buyersKo: "3-5",     buyersEn: "3-5",     timelineKo: "3-4개월", timelineEn: "3-4 months", premiumKo: "+5-15%",  premiumEn: "+5-15%",  leakKo: "낮음",                              leakEn: "Low",                                 whenKo: "Niche asset, known buyer pool",            whenEn: "Niche asset, known buyer pool",                        color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/40" },
  { koName: "Negotiated 1:1",  enName: "Negotiated 1:1",    buyersKo: "1",       buyersEn: "1",       timelineKo: "2-3개월", timelineEn: "2-3 months", premiumKo: "Strategic premium 의존", premiumEn: "Depends on strategic premium", leakKo: "최소",                              leakEn: "Minimal",                             whenKo: "Pre-existing strategic relationship",      whenEn: "Pre-existing strategic relationship",                  color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40" },
  { koName: "Reverse Inquiry", enName: "Reverse Inquiry",   buyersKo: "Buyer initiated", buyersEn: "Buyer initiated", timelineKo: "2-4개월", timelineEn: "2-4 months", premiumKo: "Variable", premiumEn: "Variable", leakKo: "낮음", leakEn: "Low", whenKo: "Inbound interest before formal process", whenEn: "Inbound interest before formal process", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40" },
];

const BUYER_TYPES = [
  { koCat: "Strategic — Direct competitor", enCat: "Strategic — direct competitor",  prosKo: "최대 synergy, 최고 가격 가능", prosEn: "Max synergy, can pay highest",  consKo: "Leak 최대 위험, antitrust scrutiny", consEn: "Max leak risk, antitrust scrutiny" },
  { koCat: "Strategic — Adjacent",          enCat: "Strategic — adjacent player",    prosKo: "Synergy 중간, antitrust 쉬움",  prosEn: "Mid synergy, easier antitrust", consKo: "가격 strategic-comp 보다 낮음",     consEn: "Pays less than direct competitor" },
  { koCat: "PE — Large Cap Sponsor",         enCat: "PE — large-cap sponsor",         prosKo: "Quick close, financing 확실",   prosEn: "Quick close, financing certain", consKo: "Synergy 없음 → 낮은 max bid",       consEn: "No synergy → lower max bid" },
  { koCat: "PE — Sector-focused MM",         enCat: "PE — sector-focused MM",         prosKo: "Sector expertise, operating value", prosEn: "Sector expertise, operating value", consKo: "Smaller check sizes",            consEn: "Smaller check sizes" },
  { koCat: "Family Office / SWF",            enCat: "Family Office / SWF",            prosKo: "Long hold, high price tolerance", prosEn: "Long hold, high price tolerance", consKo: "Slow decision, governance ad hoc",  consEn: "Slow decision, ad-hoc governance" },
];

const FAQS = [
  { qKo: "왜 broad auction이 항상 최선이 아닌가?", qEn: "Why isn't broad auction always best?", aKo: "이론적으로는 더 많은 bidder가 가격을 올리지만, ① 직원·고객·경쟁사가 매각 사실 알아챌 risk (= 가치 훼손), ② Process 비용 증가, ③ 진지하지 않은 bidder 가 DD 만 받고 빠지는 'free rider' 문제, ④ Sensitive industry (defense, healthcare) 에서는 customer relationship 손상. 그래서 sector·target 특성에 따라 limited 또는 targeted 가 더 유리한 경우가 많습니다.", aEn: "Theoretically more bidders = higher price, but: (1) employee/customer/competitor leak risk damages value, (2) process costs rise, (3) non-serious bidders 'free ride' on DD then disappear, (4) sensitive industries (defense, healthcare) face customer-relationship damage. Limited or targeted often wins for sector-specific or sensitive assets." },
  { qKo: "Buyer list는 어떻게 만드나?", qEn: "How is the buyer list built?", aKo: "Sector coverage MD가 'tier 1 list' 30-50명을 평소부터 유지. Mandate 받으면 ① Strategic side: industry 분석으로 logic 있는 acquirer 후보 + adjacent players, ② Sponsor side: PE coverage 팀에서 sector·deal size·check size 매칭되는 sponsor list 받음. 두 list 합쳐서 우선순위 매기고 (보통 60% strategic, 40% sponsor), CEO와 함께 '연락 가능' vs '연락 곤란' 분류.", aEn: "Sector coverage MDs maintain a tier-1 list of 30-50 names. After mandate: (1) Strategic side: industry analysis identifies logical acquirers + adjacent players; (2) Sponsor side: PE coverage team provides sponsors matched by sector / deal size / check size. Merge, rank (typically 60% strategic, 40% sponsor), and review with CEO to flag 'okay to contact' vs 'sensitive.'" },
  { qKo: "Process letter에 뭐가 들어가나?", qEn: "What goes into a process letter?", aKo: "① Deal overview 한 문단, ② Process timeline (bid dates, mgmt presentation dates, closing target), ③ Submission requirements (IOI 양식, due diligence access), ④ Confidentiality / NDA reminder, ⑤ Advisor contact info. 보통 2-3p. Buyer가 이 letter 받으면 'process가 진지하다 / 헐겁다' 를 즉각 판단할 수 있어요 — process letter의 sharpness 가 seller signaling.", aEn: "(1) One-paragraph deal overview, (2) process timeline (bid dates, mgmt presentation, closing target), (3) submission requirements (IOI format, DD access), (4) NDA/confidentiality reminder, (5) advisor contacts. Usually 2-3 pages. Buyers immediately read it as a signal of 'serious process vs loose process' — its sharpness is seller signaling." },
];

export default function MaCh05BuyerListClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const phase = getPhase(chapter.phase)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span><Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span><Link href={`${base}/ma-ch00-overview`} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "M&A 시리즈" : "M&A Series"}</Link>
            <span>›</span><span className="text-gray-600 dark:text-gray-300 font-medium">Ch.5</span>
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap"><PhaseBadge phase={phase} lang={lang} /><span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Ch.{chapter.ch} · {chapter.readingMinutes}{ko ? "분" : " min"}</span></div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">{ko ? chapter.titleKo : chapter.titleEn}</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{ko ? chapter.taglineKo : chapter.taglineEn}</p>
          <p className="mt-3 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">{ko ? chapter.questionKo : chapter.questionEn}</p>
        </section>

        <MaChapterNav currentSlug={SLUG} lang={lang} />

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">
          <VariantSnapshot chapter={chapter} phase={phase} lang={lang} />

          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "5가지 Process Design — Trade-off 매트릭스" : "5 Process Designs — the trade-off matrix"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko ? "Process 선택은 sell-side mandate 의 가장 중요한 strategic 의사결정 중 하나입니다. 'Broad → Limited → Targeted → Negotiated → Reverse inquiry' 스펙트럼이 있고, 각 option 마다 가격 maximization 과 leak risk · timeline · 비용 사이 trade-off 가 다릅니다." : "Process choice is among the most consequential strategic decisions in a sell-side mandate. The spectrum runs Broad → Limited → Targeted → Negotiated → Reverse inquiry, and each option has a different trade-off between price maximization and leak risk, timeline, and cost."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{ko ? "Process 비교 — Buyers · Timeline · Premium · Leak" : "Process comparison — buyers · timeline · premium · leak"}</p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {PROCESS_TYPES.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }} className={`p-4 ${p.color}`}>
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="text-[13px] font-black text-gray-900 dark:text-gray-100">{ko ? p.koName : p.enName}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? p.whenKo : p.whenEn}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-[11px]">
                      <div><p className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">Buyers</p><p className="font-semibold text-gray-800 dark:text-gray-200">{ko ? p.buyersKo : p.buyersEn}</p></div>
                      <div><p className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">Timeline</p><p className="font-semibold text-gray-800 dark:text-gray-200">{ko ? p.timelineKo : p.timelineEn}</p></div>
                      <div><p className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">Premium</p><p className="font-semibold text-gray-800 dark:text-gray-200">{ko ? p.premiumKo : p.premiumEn}</p></div>
                      <div><p className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">Leak risk</p><p className="font-semibold text-gray-800 dark:text-gray-200">{ko ? p.leakKo : p.leakEn}</p></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{ko ? "Buyer 분류 — Strategic vs Sponsor vs Other" : "Buyer Taxonomy — strategic vs sponsor vs other"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="mt-2 space-y-2">
              {BUYER_TYPES.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <p className="text-[12px] font-black text-gray-900 dark:text-gray-100 mb-1.5">{ko ? b.koCat : b.enCat}</p>
                  <div className="grid sm:grid-cols-2 gap-3 text-[11px]">
                    <div><p className="text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">{ko ? "장점" : "Pros"}</p><p className="text-gray-700 dark:text-gray-300">{ko ? b.prosKo : b.prosEn}</p></div>
                    <div><p className="text-[9px] uppercase font-bold text-rose-600 dark:text-rose-400 mb-0.5">{ko ? "단점" : "Cons"}</p><p className="text-gray-700 dark:text-gray-300">{ko ? b.consKo : b.consEn}</p></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5"><h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">FAQ</h2><div className="w-8 h-0.5 mt-3" style={{ background: phase.accentHex }} /></motion.div>
            <div className="space-y-2">{FAQS.map((f, i) => (<FaqItem key={i} qKo={f.qKo} qEn={f.qEn} aKo={f.aKo} aEn={f.aEn} ko={ko} accentHex={phase.accentHex} />))}</div>
          </motion.section>

          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60"><ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} /></div>
          {(prev || next) && (<SeriesNav lang={lang} prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null} next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null} />)}
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
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="flex-shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><polyline points="6 9 12 15 18 9" /></svg></motion.span>
      </button>
      {open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden"><div className="px-4 pb-4 pt-1 pl-12 text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{ko ? aKo : aEn}</div></motion.div>)}
    </div>
  );
}
