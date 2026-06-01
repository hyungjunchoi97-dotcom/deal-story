"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
  ReferenceLine,
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

const ACCENT = "#10b981";
const ACCENT_DARK = "#065f46";
const ACCENT_LIGHT = "rgb(236 253 245)";

// Chart 1: SPV Structure
function SpvStructureVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const steps = [
    { icon: "🎸", labelKo: "데이비드 보위", labelEn: "David Bowie", noteKo: "25개 앨범 ~287곡 로열티", noteEn: "25 albums ~287 song royalties", bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-200 dark:border-purple-700", text: "text-purple-700 dark:text-purple-300" },
    { icon: "🏛️", labelKo: "SPV (Ziggy Stardust)", labelEn: "SPV (Ziggy Stardust)", noteKo: "True Sale — 로열티 자산 이전", noteEn: "True Sale — royalty asset transfer", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-700", text: "text-blue-700 dark:text-blue-300" },
    { icon: "📄", labelKo: "보위 본드 ($55M)", labelEn: "Bowie Bond ($55M)", noteKo: "7.9% 쿠폰, 10년 만기, A3등급", noteEn: "7.9% coupon, 10yr, A3 rated", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300" },
    { icon: "🏦", labelKo: "프루덴셜 보험", labelEn: "Prudential Insurance", noteKo: "단독 투자자 (사모 방식)", noteEn: "Sole investor (private placement)", bg: "bg-gray-50 dark:bg-gray-800", border: "border-gray-200 dark:border-gray-700", text: "text-gray-700 dark:text-gray-300" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "보위 본드 구조 — 로열티가 채권이 되기까지" : "Bowie Bond Structure — From Royalties to Bond"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="hidden sm:flex items-start gap-3">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 relative">
                <div className={`rounded-xl border p-4 ${s.bg} ${s.border} text-center`}>
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <p className={`text-[11px] font-bold leading-tight ${s.text} mb-1`}>{ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[9px] opacity-75 leading-snug ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
                {i < steps.length - 1 && <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300 dark:text-gray-600 text-lg font-bold">→</div>}
              </div>
            ))}
          </div>
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-blue-400 to-emerald-500" />
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className={`relative rounded-xl border p-3 ${s.bg} ${s.border}`}>
                  <p className={`text-[12px] font-bold leading-tight ${s.text}`}>{s.icon} {ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[10px] mt-1 opacity-75 ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: ABS vs Corporate Bond
function AbsVsCorporateVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🏢", labelKo: "일반 회사채", labelEn: "Corporate Bond", textKo: "발행사(보위) 신용에 의존 → 보위 파산 시 원금 위험", textEn: "Depends on issuer (Bowie) credit → principal at risk if Bowie bankrupt", color: "text-amber-700 dark:text-amber-300", bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-200 dark:border-amber-700", tag: ko ? "위험" : "Risky" },
    { icon: "🏛️", labelKo: "ABS (보위 본드)", labelEn: "ABS (Bowie Bond)", textKo: "로열티 자산이 SPV로 분리 → 보위 파산해도 담보 자산 보호", textEn: "Royalty assets ring-fenced in SPV → assets protected even if Bowie bankrupt", color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700", tag: ko ? "보호" : "Protected" },
    { icon: "⚠️", labelKo: "ABS의 한계", labelEn: "ABS Limitation", textKo: "담보 자산 자체의 리스크는 여전히 존재 — 로열티 수익이 감소하면 쿠폰 지급 위험", textEn: "Collateral asset risk still exists — royalty revenue decline threatens coupon payment", color: "text-red-700 dark:text-red-300", bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-700", tag: ko ? "교훈" : "Lesson" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "일반 회사채 vs ABS — 투자자 입장의 차이" : "Corporate Bond vs ABS — Investor Perspective"}</p>
        </div>
        <div className="p-5 sm:p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }} className={`rounded-xl border p-4 ${item.bg} ${item.border}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className={`text-[13px] font-bold ${item.color}`}>{ko ? item.labelKo : item.labelEn}</p>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.color} bg-white/50 dark:bg-black/20`}>{item.tag}</span>
                  </div>
                  <p className={`text-[12px] leading-relaxed ${item.color} opacity-90`}>{ko ? item.textKo : item.textEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: Napster impact on music revenue
const musicRevenueData = [
  { year: "1997", rev: 16.0 },
  { year: "1999", rev: 14.6 },
  { year: "2001", rev: 13.7 },
  { year: "2003", rev: 11.9 },
  { year: "2005", rev: 12.3 },
  { year: "2007", rev: 9.8 },
];

function NapsterImpactChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "글로벌 음악 시장 수익 ($B) — 넵스터 충격" : "Global Music Revenue ($B) — Napster Shock"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={musicRevenueData} margin={{ top: 30, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="napsterGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis domain={[8, 18]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip formatter={(v) => [`$${v}B`, ko ? "음악 시장" : "Music market"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <ReferenceLine x="1999" stroke="#ef4444" strokeDasharray="4 2" label={{ value: ko ? "넵스터 출시" : "Napster launch", fontSize: 9, fill: "#ef4444", position: "insideTopRight" }} />
                <Area type="monotone" dataKey="rev" stroke="#ef4444" fill="url(#napsterGrad)" strokeWidth={2} dot={{ fill: "#ef4444", strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 rounded-xl border border-red-100 dark:border-red-800 bg-red-50 dark:bg-red-900/15 p-4">
            <p className="text-[11px] font-bold text-red-700 dark:text-red-300 mb-2">{ko ? "넵스터가 보위 본드의 담보를 무너뜨렸다" : "Napster Destroyed Bowie Bond's Collateral"}</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ l: ko ? "1997년 발행 시" : "At issuance (1997)", v: "$16B", c: "text-gray-600 dark:text-gray-400" }, { l: ko ? "넵스터 정점 (2001)" : "Napster peak (2001)", v: "-14%", c: "text-red-600 dark:text-red-400" }, { l: ko ? "2003년 무디스 등급 강등" : "Moody's downgrade (2003)", v: "Baa3", c: "text-red-600 dark:text-red-400" }].map((c) => (
                <div key={c.l}>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{c.l}</p>
                  <p className={`text-lg font-black ${c.c}`}>{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: Ratings history
const ratingsData = [
  { period: ko_str("발행 (1997)", "Issuance"), score: 3, label: "A3" },
  { period: ko_str("2002", "2002"), score: 2, label: "Baa1" },
  { period: ko_str("2003", "2003"), score: 1, label: "Baa3" },
  { period: ko_str("2004 만기", "2004 Mat."), score: 1, label: "Baa3" },
];
function ko_str(a: string, _b: string) { return a; }

function RatingsHistoryChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const data = [
    { period: ko ? "발행 (1997)" : "Issuance (1997)", score: 3, label: "A3" },
    { period: "2002", score: 2, label: "Baa1" },
    { period: "2003", score: 1, label: "Baa3" },
    { period: ko ? "만기 (2007)" : "Maturity (2007)", score: 1, label: "Baa3" },
  ];
  const colors = ["#10b981", "#f59e0b", "#ef4444", "#ef4444"];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "보위 본드 무디스 등급 변화" : "Bowie Bond Moody's Rating History"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 30, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="period" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis domain={[0, 4]} tick={false} hide />
                <Tooltip formatter={(_, __, props) => [props.payload?.label ?? "", ko ? "등급" : "Rating"]} contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }} />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} label={{ position: "top", fontSize: 11, fontWeight: "bold" }}>
                  {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">{ko ? "A3 → Baa3: 투자등급 유지했지만 신용 악화" : "A3 → Baa3: Remained investment grade but credit deteriorated"}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Legacy & Royalty ABS universe
function LegacyVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🎸", labelKo: "보위 본드 (1997)", labelEn: "Bowie Bond (1997)", noteKo: "$55M — 세계 최초 로열티 ABS", noteEn: "$55M — world's first royalty ABS" },
    { icon: "🥁", labelKo: "로드 스튜어트 본드 (1997)", labelEn: "Rod Stewart Bond (1997)", noteKo: "풀먼 구조 복제 시도", noteEn: "Pullman structure replicated" },
    { icon: "🎙️", labelKo: "제임스 브라운 본드 (1999)", labelEn: "James Brown Bond (1999)", noteKo: "$30M — 펑크 로열티 담보", noteEn: "$30M — funk royalty collateral" },
    { icon: "🌍", labelKo: "로열티 ABS 시장 성장", labelEn: "Royalty ABS Market Growth", noteKo: "스포츠·IP·프랜차이즈 ABS로 진화", noteEn: "Evolved to sports/IP/franchise ABS" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ko ? "보위 본드의 유산 — 로열티 ABS 시장의 탄생" : "Bowie Bond Legacy — Birth of Royalty ABS Market"}</p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP} transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }} className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 p-4">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-[12px] font-bold text-emerald-700 dark:text-emerald-300 mb-1">{ko ? item.labelKo : item.labelEn}</p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 opacity-80">{ko ? item.noteKo : item.noteEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  const visuals = [
    <SpvStructureVisual key="0" lang={lang} />,
    <AbsVsCorporateVisual key="1" lang={lang} />,
    <NapsterImpactChart key="2" lang={lang} />,
    <RatingsHistoryChart key="3" lang={lang} />,
    <LegacyVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

export default function BowieBondsClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
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
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{ko ? "마켓" : "Market"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "시장 창조" : "Market Creators"}</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2">
              {ko ? deal.title : deal.titleEn}
            </motion.h1>
            {ko && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4">{deal.titleEn}</motion.p>}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mt-5 flex-wrap">
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{deal.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
        
          <LikeButton slug={deal.slug} lang={lang} /></div>

        {deal.executiveSummary && (
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="max-w-3xl mx-auto px-5 pt-4">
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{ko ? "핵심 요약" : "Key Takeaways"}</p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-emerald-800 dark:text-emerald-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />{point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? "딜 스냅샷" : "Deal Snapshot"}</h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/40">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{ko ? "보위 본드 — 핵심 수치" : "Bowie Bond — Key Figures"}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100 dark:divide-emerald-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div key={row.labelKo} variants={fadeUp(i * 0.06)} className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{ko ? row.value : (row.valueEn ?? row.value)}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x divide-emerald-100 dark:divide-emerald-900/30 border-t-2 border-emerald-100 dark:border-emerald-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "쿠폰" : "Coupon"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">7.9%</p>
                </div>
                <div className="px-4 py-4 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 uppercase font-bold mb-1">{ko ? "발행 규모" : "Size"}</p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">$55M</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "등급 (발행시)" : "Rating (Initial)"}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>A3</p>
                  <p className="text-[9px] mt-0.5" style={{ color: ACCENT }}>{ko ? "무디스" : "Moody's"}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? section.heading : section.headingEn}</h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
              </motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
                  ))}
                </div>
              </div>
              {getVisual(i, lang)}
            </motion.section>
          ))}

          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "핵심 용어" : "Key Terms"}</motion.h2>
            <div className="mt-5 space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>{i + 1}</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{ko ? term.term : term.termEn}</span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">{ko ? term.definition : term.definitionEn}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "딜 평가" : "Deal Assessment"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5">
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-emerald-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">101</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? "참고 자료" : "References"}</motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>{ref.id}</span>
                    <span>
                      {ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}
                      {ref.url ? <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>{ref.title}</a> : <span>{ref.title}</span>}
                      {ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}
                      {ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}
                    </span>
                  </motion.li>
                ))}
              </ol>
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
