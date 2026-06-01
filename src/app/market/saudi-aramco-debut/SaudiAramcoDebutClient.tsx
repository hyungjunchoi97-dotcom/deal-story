"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell, AreaChart, Area,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";
import SeriesNav from "@/components/SeriesNav";
import { getMarketDealNav } from "@/data/market-deals";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const ACCENT = "#f97316";
const ACCENT_DARK = "#7c2d12";
const ACCENT_LIGHT = "rgb(255 247 237)";

// Chart 1: Aramco financial reveals
function AramcoFinancialsVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const facts = [
    { icon: "💰", ko: "순이익 $1,110억 (2018) — 애플·구글·엑손 합계보다 많다", en: "Net income $111B (2018) — more than Apple+Google+Exxon combined" },
    { icon: "🛢️", ko: "증명 매장량 269B 배럴 — 사우디 국가 공식 수치 최초 국제 검증", en: "Proved reserves 269B barrels — Saudi official reserves internationally verified for first time" },
    { icon: "📊", ko: "EBITDA 마진 ~50% — 세계 어떤 석유회사와도 비교 불가", en: "EBITDA margin ~50% — incomparable to any other oil company globally" },
    { icon: "🔐", ko: "2019년 4월 1일까지 비공개 — 로드쇼 3일 전 최초 공개 (역대 최소 공개 기간)", en: "Non-public until April 1, 2019 — first disclosed 3 days before roadshow (shortest-ever disclosure period)" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "2019년 4월 — 처음 공개된 아람코의 실체" : "April 2019 — Aramco's Financials Revealed for the First Time"}</p>
        </div>
        <div className="p-5 sm:p-8 grid sm:grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }} className="rounded-xl border border-orange-200 dark:border-orange-700 p-3" style={{ background: ACCENT_LIGHT }}>
              <span className="text-xl block mb-1">{f.icon}</span>
              <p className="text-[12px] text-orange-700 dark:text-orange-300">{ko ? f.ko : f.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: Orderbook breakdown by tranche
const orderbookData = [
  { tranche: ko_label("3년", "3yr"), size: 1, orders: 20 },
  { tranche: ko_label("5년", "5yr"), size: 2, orders: 35 },
  { tranche: ko_label("10년", "10yr"), size: 3, orders: 55 },
  { tranche: ko_label("20년", "20yr"), size: 2.5, orders: 42 },
  { tranche: ko_label("30년", "30yr"), size: 3, orders: 48 },
];
function ko_label(a: string, _b: string) { return a; }

function OrderbookChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { t: ko ? "3년" : "3yr", sz: 1, ord: 20 },
    { t: ko ? "5년" : "5yr", sz: 2, ord: 35 },
    { t: ko ? "10년" : "10yr", sz: 3, ord: 55 },
    { t: ko ? "20년" : "20yr", sz: 2.5, ord: 42 },
    { t: ko ? "30년" : "30yr", sz: 3, ord: 48 },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "트랜치별 발행 규모 vs 오더북 ($B)" : "Tranche Size vs Orderbook by Tenor ($B)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip formatter={(v, name) => [`$${v}B`, name === "sz" ? (ko ? "발행 규모" : "Issue Size") : (ko ? "오더북" : "Orderbook")]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="sz" fill="#d1d5db" name="sz" radius={[3, 3, 0, 0]} />
                <Bar dataKey="ord" fill={ACCENT} name="ord" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 rounded-xl p-4 border border-orange-200 dark:border-orange-700" style={{ background: ACCENT_LIGHT }}>
            <p className="text-[11px] font-bold text-orange-700 dark:text-orange-300 mb-2 text-center">{ko ? "총 오더북 $1,000억+ — 총 발행 $120억의 8배 이상" : "Total Orderbook $100B+ — Over 8× the $12B total issuance"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: Vision 2030 context
function Vision2030Visual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🛢️", ko: "비전 2030: 탈석유 경제로 전환 — 채권은 그 자금 마련 수단", en: "Vision 2030: transition from oil economy — bond is the funding mechanism" },
    { icon: "🗞️", ko: "카쇼끄지 사건 (2018.10): 글로벌 투자자 이탈 위기 — 발행 잠시 지연", en: "Khashoggi incident (Oct 2018): global investor withdrawal risk — brief delay" },
    { icon: "📍", ko: "플랜 B: 국내 채권시장 + 아시아 투자자로 서방 대체 (실제 아시아 수요 강세)", en: "Plan B: domestic + Asian investors to replace West (Asian demand proved strong)" },
    { icon: "💡", ko: "교훈: SOE 채권은 '국가 이슈'다 — 발행사 재무만큼 국가 정치 리스크 분석 필요", en: "Lesson: SOE bonds are 'sovereign issues' — political risk analysis as critical as financials" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "Vision 2030과 카쇼끄지 위기" : "Vision 2030 and Khashoggi Crisis"}</p>
        </div>
        <div className="p-5 sm:p-8 space-y-3">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }} className="flex items-start gap-3 rounded-xl border border-orange-200 dark:border-orange-700 p-3" style={{ background: ACCENT_LIGHT }}>
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-[12px] text-orange-700 dark:text-orange-300">{ko ? item.ko : item.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: SOE vs Sovereign pricing
function SoePricingVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { name: ko ? "사우디 국채" : "Saudi Sovereign", spread: 140 },
    { name: ko ? "아람코" : "Aramco", spread: 105 },
    { name: ko ? "차이" : "Difference", spread: 35 },
  ];
  const fills = ["#d1d5db", ACCENT, "#22c55e"];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "아람코 SOE 채권 — 소버린보다 35bp 저렴 (10년물 기준)" : "Aramco SOE Bond — 35bp inside Saudi Sovereign (10yr basis)"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}bp`} />
                <Tooltip formatter={(v) => [`${v}bp`, ko ? "스프레드 (UST 기준)" : "Spread (vs UST)"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="spread" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={fills[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "재무 투명성 첫 공개 → 소버린 천정 하회 가능 — 역사적 사례" : "First financial disclosure → pricing below sovereign ceiling — historic precedent"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Post-bond IPO + green bond
function PostBondTimelineVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const events = [
    { year: "2019.4", ko: "첫 국제채 $120억 발행 — 사상 최대 오더북", en: "First international bond $12B — record-breaking orderbook" },
    { year: "2019.12", ko: "리야드 증시 IPO — $256억 (사상 최대 IPO)", en: "Riyadh IPO — $25.6B (world's largest IPO)" },
    { year: "2021", ko: "추가 채권 발행 — $6B (연간 자금조달 프로그램 정착)", en: "Additional bond issuance — $6B (annual program established)" },
    { year: "2022", ko: "첫 그린/ESG 채권 $6B — 탄소중립 전환 자금조달", en: "First Green/ESG Bond $6B — carbon neutrality transition financing" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "아람코 채권 이후 — IPO·그린본드 타임라인" : "Post-Bond — IPO and Green Bond Timeline"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-orange-600" />
            <div className="space-y-4">
              {events.map((e, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }} className="relative">
                  <div className="absolute -left-6 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900" style={{ background: ACCENT }} />
                  <div className="rounded-xl border border-orange-200 dark:border-orange-700 p-3" style={{ background: ACCENT_LIGHT }}>
                    <span className="text-[10px] font-black" style={{ color: ACCENT }}>{e.year}</span>
                    <p className="text-[12px] text-orange-700 dark:text-orange-300 mt-0.5">{ko ? e.ko : e.en}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  return [<AramcoFinancialsVisual key="0" lang={lang} />, <OrderbookChart key="1" lang={lang} />, <Vision2030Visual key="2" lang={lang} />, <SoePricingVisual key="3" lang={lang} />, <PostBondTimelineVisual key="4" lang={lang} />][i] ?? null;
}

export default function SaudiAramcoDebutClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="transition-colors" style={{ color: ACCENT }}>Market</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "기업 메가딜" : "Corporate Megadeals"}</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: ACCENT_LIGHT, color: ACCENT }}>{ko ? deal.categoryLabel : deal.categoryLabelEn}</div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">{ko ? deal.title : deal.titleEn}</motion.h1>
            {ko && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">{deal.titleEn}</motion.p>}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? deal.excerpt : deal.excerptEn}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{deal.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">{(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">{tag}</span>)}</div>
            </motion.div>
          </div>
        </section>
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4"><ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
          <LikeButton slug={deal.slug} lang={lang} /></div>
        {deal.executiveSummary && (
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="max-w-3xl mx-auto px-5 pt-4">
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{ko ? "핵심 요약" : "Key Takeaways"}</p>
              <ul className="space-y-2">{(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-orange-800 dark:text-orange-200"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />{point}</li>)}</ul>
            </div>
          </motion.div>
        )}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5"><h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? "딜 스냅샷" : "Deal Snapshot"}</h2><div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} /></motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2 border-orange-100 dark:border-orange-900/40">
              <div className="px-5 py-3" style={{ background: ACCENT }}><p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "사우디 아람코 첫 국제채 — 핵심 수치" : "Saudi Aramco Debut Bond — Key Figures"}</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-orange-100 dark:divide-orange-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}><p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p><p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{ko ? row.value : (row.valueEn ?? row.value)}</p></motion.div>)}
              </div>
              <div className="grid grid-cols-3 divide-x divide-orange-100 dark:divide-orange-900/30 border-t-2 border-orange-100 dark:border-orange-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900"><p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "발행 규모" : "Issue Size"}</p><p className="text-2xl font-black text-gray-700 dark:text-gray-300">$12B</p></div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}><p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "오더북" : "Orderbook"}</p><p className="text-2xl font-black" style={{ color: ACCENT }}>$100B+</p></div>
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900"><p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "배수" : "Cover"}</p><p className="text-2xl font-black text-gray-700 dark:text-gray-300">8×+</p></div>
              </div>
            </motion.div>
          </motion.section>
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6"><h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? section.heading : section.headingEn}</h2><div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} /></motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}><div className="space-y-3">{(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>)}</div></div>
              {getVisual(i, lang)}
            </motion.section>
          ))}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "핵심 용어" : "Key Terms"}</motion.h2>
            <div className="mt-5 space-y-3">{deal.keyTerms.map((term, i) => <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"><div className="flex items-center gap-2 mb-2 flex-wrap"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>{i + 1}</span><span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{ko ? term.term : term.termEn}</span></div><p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">{ko ? term.definition : term.definitionEn}</p></motion.div>)}</div>
          </motion.section>
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "딜 평가" : "Deal Assessment"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5"><p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p><ul className="space-y-2">{(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{p}</li>)}</ul></motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5"><p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p><ul className="space-y-2">{(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{r}</li>)}</ul></motion.div>
              </div>
            </motion.section>
          )}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "자주 묻는 질문" : "Frequently Asked Questions"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <FaqAccordion items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={ACCENT} />
            </motion.section>
          )}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => <motion.div key={slug} variants={fadeUp()}><Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}><div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:bg-orange-50/40 dark:hover:bg-orange-900/20 transition-all"><span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>M</span><div className="flex-1 min-w-0"><p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p><p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 truncate">{slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p></div><span className="text-gray-300 dark:text-gray-600 text-sm flex-shrink-0">→</span></div></Link></motion.div>)}
              </div>
            </motion.section>
          ) : null}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "참고 자료" : "References"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">{deal.references.map((ref) => <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed"><span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>{ref.id}</span><span>{ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}{ref.url ? <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>{ref.title}</a> : <span>{ref.title}</span>}{ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}{ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}</span></motion.li>)}</ol>
            </motion.section>
          )}
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarketDealNav(deal.slug);
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market" : "/market";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? prev.titleEn : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? next.titleEn : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
