"use client";

/**
 * Chapter 1 — The Shale Pivot (Stub / Working Outline)
 *
 * 본문 작성 전 단계의 작업용 페이지.
 *  · 12개 섹션 outline
 *  · 비주얼 컴포넌트 4종 데모 (InteractiveMap, Timeline, SourceBox, ThinkerQuote)
 *  · 11개 차트·지도 슬롯 + 검증된 1차 자료 데이터
 *  · 50+ 1차 자료 카탈로그
 *  · 작성 워크플로 체크리스트
 *
 * 본문이 채워지면 status: "published"로 바꾸고 정규 노트 페이지로 이전.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine,
} from "recharts";
import InteractiveMap from "@/components/series/InteractiveMap";
import Timeline from "@/components/series/Timeline";
import SourceBox from "@/components/series/SourceBox";
import ThinkerQuote from "@/components/series/ThinkerQuote";
import {
  US_OIL_PRODUCTION,
  US_PG_IMPORT_PCT,
  LNG_EXPORTERS_2024,
  BREAKEVEN_COMPARISON,
  KOREA_LNG_MIX_2024,
  EU_RUSSIAN_GAS,
} from "@/data/research/ch01-shale-chart-data";

type Lang = "ko" | "en";

const ACCENT = "#dc2626";
const ACCENT_LIGHT = "#fee2e2";

// ── 12 섹션 outline ────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    n: 1,
    title: { ko: "모든 것을 바꾼 그 숫자", en: "The Number That Changed Everything" },
    desc: {
      ko: "2008년 미국 원유 생산 일 5MM bpd → 2024년 13.4MM bpd → 2026E 14.5MM+. 단일 차트로 명제 압도.",
      en: "US oil production 5MM bpd (2008) → 13.4MM (2024) → 14.5MM+ (2026E). One chart that dwarfs the rest of the argument.",
    },
    visualCount: 1,
  },
  {
    n: 2,
    title: { ko: "지질학 — Permian, Eagle Ford, Bakken", en: "The Geology" },
    desc: {
      ko: "세 분지의 매장량·생산성·차이. 지도로 표시.",
      en: "Three basins — reserves, productivity, differences. Mapped.",
    },
    visualCount: 1,
  },
  {
    n: 3,
    title: { ko: "기술 스택", en: "The Technology Stack" },
    desc: {
      ko: "수평시추 + 수압파쇄 + 3D 지진 + 미세지진 모니터링. 1980년대부터의 단가 곡선.",
      en: "Horizontal drilling + hydraulic fracturing + 3D seismic + microseismic monitoring. Cost curve since the 1980s.",
    },
    visualCount: 1,
  },
  {
    n: 4,
    title: { ko: "순수입국에서 순수출국으로", en: "From Net Importer to Net Exporter" },
    desc: {
      ko: "2020년 미국이 처음 순수출국이 된 순간. 1970~2024 무역 역전 곡선.",
      en: "The moment in 2020 when the US first became a net exporter. The 1970–2024 trade reversal curve.",
    },
    visualCount: 1,
  },
  {
    n: 5,
    title: { ko: "LNG 혁명", en: "The LNG Revolution" },
    desc: {
      ko: "Sabine Pass(2016) → 미국 LNG 수출 1위(2024). Cheniere·Cameron·Freeport 위치 지도.",
      en: "Sabine Pass (2016) → world's largest LNG exporter (2024). Cheniere, Cameron, Freeport mapped.",
    },
    visualCount: 2, // 차트 + 지도
  },
  {
    n: 6,
    title: { ko: "중동이 옵션이 되다", en: "The Middle East Becomes Optional" },
    desc: {
      ko: "미국 페르시아만 원유 수입 % (1973년 36% → 2024년 ~3%). 1973·1991·2003·2025 정책 비교.",
      en: "US share of oil from the Persian Gulf (36% in 1973 → ~3% in 2024). Policy comparison: 1973, 1991, 2003, 2025.",
    },
    visualCount: 1,
  },
  {
    n: 7,
    title: { ko: "OPEC의 강등", en: "OPEC's Demotion" },
    desc: {
      ko: "OPEC+가 시장 통제력 잃은 이유 — 셰일 손익분기 vs 사우디 재정 손익분기 비교.",
      en: "Why OPEC+ lost market control — shale breakeven vs Saudi fiscal breakeven, side by side.",
    },
    visualCount: 1,
  },
  {
    n: 8,
    title: { ko: "러시아, 최고의 고객을 잃다", en: "Russia Loses Its Best Customer" },
    desc: {
      ko: "노드스트림 폭파 후 — 유럽이 미국 LNG에 락인. 푸틴의 산수.",
      en: "After Nord Stream — Europe locked into US LNG. Putin's arithmetic.",
    },
    visualCount: 1,
  },
  {
    n: 9,
    title: { ko: "중국이 새 인질이 된다", en: "China Becomes the New Hostage" },
    desc: {
      ko: "중국 원유 수입의 73%가 페르시아만. 미군이 떠나면 누가 호르무즈를 지키는가.",
      en: "73% of China's oil imports cross the Persian Gulf. If the US Navy leaves, who keeps Hormuz open?",
    },
    visualCount: 1,
  },
  {
    n: 10,
    title: { ko: "한국·일본·대만의 조용한 전환", en: "Korea, Japan, Taiwan — The Quiet Pivot" },
    desc: {
      ko: "한국 LNG 수입 구조 변화 — 카타르·호주에서 미국으로. KOGAS 장기 계약 분석.",
      en: "How Korea's LNG mix shifted from Qatar and Australia to the US. KOGAS long-term contracts analyzed.",
    },
    visualCount: 1,
  },
  {
    n: 11,
    title: { ko: "셰일 회의론자들", en: "The Shale Skeptics" },
    desc: {
      ko: "Hughes·Berman의 비판 — 손익분기, 감산률, 자본 효율. Permian peak 논쟁.",
      en: "Hughes and Berman's critique — breakeven, decline rates, capital efficiency. The Permian peak debate.",
    },
    visualCount: 0,
  },
  {
    n: 12,
    title: { ko: "2035년의 시사점", en: "The 2035 Implication" },
    desc: {
      ko: "셰일 + LNG가 만드는 미국의 새 지정학적 자유. 중동 무관심의 진짜 비용.",
      en: "The new geopolitical freedom shale + LNG buys America. The real cost of indifference toward the Middle East.",
    },
    visualCount: 0,
  },
];

// ── 50+ 자료 카탈로그 (대표 12개만 선별 표시) ──────────────────────────────────
const SOURCES = [
  { type: "primary" as const,    author: "EIA",            title: "Annual Energy Outlook 2025",                            source: "U.S. Energy Information Administration", year: "2025", url: "https://www.eia.gov/outlooks/aeo/" },
  { type: "primary" as const,    author: "EIA",            title: "Short-Term Energy Outlook (monthly)",                   source: "EIA",                                      year: "2026", url: "https://www.eia.gov/outlooks/steo/" },
  { type: "primary" as const,    author: "IEA",            title: "World Energy Outlook 2024",                             source: "International Energy Agency",              year: "2024", url: "https://www.iea.org/reports/world-energy-outlook-2024" },
  { type: "primary" as const,    author: "IEA",            title: "Gas 2025",                                              source: "IEA",                                      year: "2025", url: "https://www.iea.org/reports/gas-2025" },
  { type: "primary" as const,    author: "EIA",            title: "World Oil Transit Chokepoints",                         source: "EIA",                                      year: "2024", url: "https://www.eia.gov/international/analysis/special-topics/world-oil-transit-chokepoints" },
  { type: "academic" as const,   author: "Yergin, Daniel", title: "The New Map: Energy, Climate, and the Clash of Nations", source: "Penguin Press",                            year: "2020" },
  { type: "academic" as const,   author: "Krane, Jim",     title: "Energy Kingdoms: Oil and Political Survival in the Persian Gulf", source: "Columbia University Press",        year: "2019" },
  { type: "thinktank" as const,  author: "CFR",            title: "Independent Task Force Report on US Energy Policy",     source: "Council on Foreign Relations",             year: "2023", url: "https://www.cfr.org/" },
  { type: "thinktank" as const,  author: "CSIS",           title: "Energy Security Program — annual reports",              source: "Center for Strategic & International Studies", year: "2024", url: "https://www.csis.org/programs/energy-security-and-climate-change-program" },
  { type: "industry" as const,   author: "Rystad Energy",  title: "Shale Productivity & Breakeven Analysis",               source: "Rystad",                                   year: "2025" },
  { type: "industry" as const,   author: "BP / Energy Institute", title: "Statistical Review of World Energy 2025",        source: "Energy Institute",                         year: "2025", url: "https://www.energyinst.org/statistical-review" },
  { type: "critical" as const,   author: "Hughes, J. David", title: "Shale Reality Check 2024",                            source: "Post Carbon Institute",                    year: "2024", url: "https://www.postcarbon.org/" },
];

// ── 작업 워크플로 체크리스트 ────────────────────────────────────────────────────
const WORKFLOW = [
  { week: 1, task: { ko: "Zotero 컬렉션 구성, 50+ 자료 수집", en: "Build Zotero collection, gather 50+ sources" } },
  { week: 2, task: { ko: "자료 정독, 핵심 데이터 추출 → data.md", en: "Read sources, extract key data → data.md" } },
  { week: 3, task: { ko: "명제 3개 압축, outline 확정", en: "Compress to 3 propositions, finalize outline" } },
  { week: 4, task: { ko: "영문 본문 초안 작성", en: "Draft English body" } },
  { week: 5, task: { ko: "한국어 번역·로컬라이즈", en: "Translate and localize to Korean" } },
  { week: 6, task: { ko: "Datawrapper로 11개 차트 1차안", en: "First-pass 11 charts in Datawrapper" } },
  { week: 7, task: { ko: "사이트에 Recharts·Mapbox 구현", en: "Implement on site (Recharts + Mapbox)" } },
  { week: 8, task: { ko: "팩트체크, 외부 리뷰, 발행", en: "Fact-check, external review, publish" } },
];

// ── 데모용 호르무즈 마커 (Section 9용 예시) ────────────────────────────────────
const HORMUZ_MARKERS = [
  { id: "hormuz", lng: 56.45, lat: 26.55, label: "Strait of Hormuz", labelEn: "Strait of Hormuz", color: "#dc2626", size: "lg" as const, popup: "일 1,700만 배럴 통과 — 세계 무역의 30%", popupEn: "17M bpd transit — 30% of seaborne oil trade" },
  { id: "riyadh", lng: 46.6, lat: 24.7,   label: "리야드",            labelEn: "Riyadh",            color: "#f59e0b" },
  { id: "tehran", lng: 51.4, lat: 35.7,   label: "테헤란",            labelEn: "Tehran",            color: "#7f1d1d" },
  { id: "abudhabi", lng: 54.4, lat: 24.5, label: "아부다비",          labelEn: "Abu Dhabi",         color: "#f59e0b" },
  { id: "doha",   lng: 51.5, lat: 25.3,   label: "도하",              labelEn: "Doha",              color: "#f59e0b" },
];

// ── 데모용 셰일 분지 마커 (Section 2용 예시) ──────────────────────────────────
const SHALE_MARKERS = [
  { id: "permian",    lng: -102.0, lat: 32.0, label: "Permian Basin",   labelEn: "Permian Basin",   color: "#10b981", size: "lg" as const, popup: "TX·NM — 일 6.4MM bpd, 미국 최대",  popupEn: "TX/NM — 6.4M bpd, largest US basin" },
  { id: "eagleford",  lng: -98.5,  lat: 28.5, label: "Eagle Ford",      labelEn: "Eagle Ford",      color: "#10b981", size: "md" as const },
  { id: "bakken",     lng: -103.0, lat: 47.5, label: "Bakken",          labelEn: "Bakken",          color: "#10b981", size: "md" as const },
  { id: "appalachia", lng: -80.0,  lat: 39.5, label: "Appalachia",      labelEn: "Appalachia",      color: "#10b981", size: "md" as const, popup: "Marcellus·Utica — 가스 중심" , popupEn: "Marcellus/Utica — gas-focused" },
];

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function ShaleStubClient({ lang = "ko" }: { lang?: Lang }) {
  const ko = lang === "ko";

  return (
    <main className="flex-1">
      {/* ═══ HEADER ════════════════════════════════════════════════════════ */}
      <section
        className="border-b border-gray-200/60 dark:border-gray-700/60"
        style={{ background: `linear-gradient(180deg, ${ACCENT_LIGHT}66 0%, transparent 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-5 py-14 sm:py-20">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-5">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-700">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/series/after-pax-americana" : "/en/series/after-pax-americana"} className="hover:text-gray-700">
              After Pax Americana
            </Link>
            <span>›</span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Ch.01</span>
          </div>

          {/* Chapter # badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-[10px] font-mono font-bold tracking-[0.3em] uppercase"
               style={{ background: ACCENT, color: "white" }}>
            CH.01 · WORKING OUTLINE
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-3 leading-[1.1]">
            {ko ? "셰일 전환" : "The Shale Pivot"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium mb-7">
            {ko
              ? "미국이 페르시아만에서 손을 떼는 산수"
              : "Why the US walks away from the Persian Gulf"}
          </p>

          {/* Thesis */}
          <div
            className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border-l-4 p-6 sm:p-7"
            style={{ borderLeftColor: ACCENT }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              {ko ? "단일 명제" : "Single Thesis"}
            </p>
            <p className="text-[15px] sm:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "셰일 혁명이 미국의 중동 정책을 70년간 정당화했던 단 하나의 기본 가정 — 자국 경제가 페르시아만 원유에 의존한다는 사실 — 을 무너뜨렸다. 세계는 그 사실이 무엇을 의미하는지 아직 가격에 반영하지 않았다."
                : "The shale revolution dissolved the single assumption that justified 70 years of American Middle East policy — that the US economy depends on Persian Gulf oil. The world has not yet priced what that means."}
            </p>
          </div>

          {/* Stub notice */}
          <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {ko ? "본문 작성 중 — 발행 예정 ~8주 후" : "Drafting — publishing in ~8 weeks"}
          </div>
        </div>
      </section>

      {/* ═══ MEGA TIMELINE DEMO ═══════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="00" ko="시리즈 메가 타임라인" en="Series Mega Timeline" />
        <Timeline lang={lang} />
      </div>

      {/* ═══ 12 SECTIONS OUTLINE ═══════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-5 pb-10">
        <SectionLabel lang={lang} n="01" ko="12개 섹션 — 작업 outline" en="12 Sections — Working Outline" />

        <div className="space-y-3">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900 transition-colors"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-[13px] font-mono font-bold"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                {String(s.n).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {ko ? s.title.ko : s.title.en}
                </h3>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ko ? s.desc.ko : s.desc.en}
                </p>
              </div>
              {s.visualCount > 0 && (
                <div className="flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                  {ko ? `비주얼 ${s.visualCount}` : `${s.visualCount} viz`}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ VERIFIED DATA CHARTS (W1 산출물) ═══════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="W1" ko="Week 1 검증 데이터 — 6개 핵심 차트" en="Week 1 Verified Data — 6 Core Charts" />
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-8">
          {ko
            ? "EIA, IMF, IEA, Rystad, Bruegel의 1차 자료로 검증된 데이터. 본문 작성 시 그대로 사용 가능."
            : "Data verified from EIA, IMF, IEA, Rystad, and Bruegel primary sources. Ready for use in final article."}
        </p>

        {/* Chart 1 — US Crude Oil Production 1970-2026 */}
        <ChartCard
          title={ko ? "§1 · 미국 원유 생산 (1970~2026, 천 배럴/일)" : "§1 · US Crude Oil Production (1970–2026, kbpd)"}
          caption={ko
            ? "출처: EIA Monthly + STEO + AEO 2025. 2008년 셰일 변곡점 이후 11배 증가 → 사우디·러시아 동시 추월."
            : "Source: EIA Monthly + STEO + AEO 2025. Up 11× since the 2008 shale inflection — overtaking Saudi Arabia and Russia simultaneously."}
        >
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={US_OIL_PRODUCTION} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="shaleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}MM`} />
              <Tooltip formatter={(v) => [`${Number(v).toLocaleString()} kbpd`, ko ? "생산" : "Production"]} />
              <ReferenceLine x={2008} stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "셰일 시작" : "Shale begins", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <ReferenceLine x={2020} stroke="#16a34a" strokeDasharray="4 4" label={{ value: ko ? "순수출국" : "Net exporter", fill: "#16a34a", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="production" stroke="#dc2626" strokeWidth={2.5} fill="url(#shaleGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 2 — US Persian Gulf Import % */}
        <ChartCard
          title={ko ? "§6 · 미국 페르시아만 원유 수입 비중 (1973~2025, %)" : "§6 · US Crude Oil Imports from the Persian Gulf (1973–2025, %)"}
          caption={ko
            ? "출처: EIA Monthly Energy Review. 1990년 24%로 정점 → 2024년 7%로 거의 40년 만의 최저."
            : "Source: EIA Monthly Energy Review. Peaked at 24% in 1990 → 7% in 2024, lowest in nearly 40 years."}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={US_PG_IMPORT_PCT} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v) => [`${v}%`, ko ? "비중" : "Share"]} />
              <ReferenceLine y={7} stroke="#9ca3af" strokeDasharray="3 3" label={{ value: "7% — 1973 = 2024", fill: "#6b7280", fontSize: 10, position: "right" }} />
              <Line type="monotone" dataKey="pct" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4, fill: "#f59e0b" }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 3 — LNG Exporters 2024 */}
        <ChartCard
          title={ko ? "§5 · 세계 LNG 수출국 순위 (2024, Bcf/d)" : "§5 · World's LNG Exporters Ranking (2024, Bcf/d)"}
          caption={ko
            ? "출처: EIA + IGU World LNG Report 2024. 미국이 호주·카타르를 따돌리고 단독 1위 — 2016년 첫 수출 이후 8년 만."
            : "Source: EIA + IGU World LNG Report 2024. The US passed Australia and Qatar to lead alone — eight years after its first export in 2016."}
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart layout="vertical" data={LNG_EXPORTERS_2024} margin={{ top: 12, right: 24, left: 70, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey={ko ? "country" : "countryEn"} tick={{ fontSize: 12 }} width={70} />
              <Tooltip formatter={(v) => [`${v} Bcf/d`, ""]} />
              <Bar dataKey="bcfd" radius={[0, 6, 6, 0]}>
                {LNG_EXPORTERS_2024.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 4 — Breakeven Comparison */}
        <ChartCard
          title={ko ? "§7 · 손익분기 가격 비교 — 셰일 vs 사우디 ($/배럴 WTI)" : "§7 · Breakeven Comparison — Shale vs Saudi Arabia ($/bbl WTI)"}
          caption={ko
            ? "출처: IMF Article IV 2025 + Rystad 2025. 사우디는 Vision 2030·PIF 비용까지 감안하면 셰일 손익분기보다 2배 가까이 높다."
            : "Source: IMF Article IV 2025 + Rystad 2025. With Vision 2030 and PIF, Saudi needs nearly twice the shale breakeven."}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={BREAKEVEN_COMPARISON} margin={{ top: 12, right: 16, left: 0, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey={ko ? "label" : "labelEn"} tick={{ fontSize: 10 }} angle={-15} textAnchor="end" height={70} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
              <Tooltip formatter={(v) => [`$${v} WTI`, ""]} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {BREAKEVEN_COMPARISON.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 5 — EU Russian Gas Decline */}
        <ChartCard
          title={ko ? "§8 · EU의 러시아 가스 의존도 (2021~2025, %)" : "§8 · EU's Russian Gas Share (2021–2025, %)"}
          caption={ko
            ? "출처: Bruegel + Statista. 2021년 45% → 2025년 12%. 푸틴은 최고의 고객을 영구적으로 잃었다."
            : "Source: Bruegel + Statista. From 45% in 2021 to 12% in 2025. Putin lost his best customer permanently."}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={EU_RUSSIAN_GAS} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="ruGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#475569" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#475569" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v) => [`${v}%`, ko ? "비중" : "Share"]} />
              <ReferenceLine x={2022} stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "Nord Stream 폭파" : "Nord Stream sabotage", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="russianPct" stroke="#475569" strokeWidth={2.5} fill="url(#ruGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 6 — Korea LNG Mix */}
        <ChartCard
          title={ko ? "§10 · 한국 LNG 수입 구조 (2024, %)" : "§10 · Korea's LNG Import Mix (2024, %)"}
          caption={ko
            ? "출처: World Bank WITS + KOGAS. 미국 비중은 12.2%(+10.2% YoY)로 빠르게 증가 중. 카타르·호주 장기계약 만료가 분기점."
            : "Source: World Bank WITS + KOGAS. US share rose to 12.2% (+10.2% YoY) — Qatar and Australia contract expirations are the inflection."}
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart layout="vertical" data={KOREA_LNG_MIX_2024} margin={{ top: 12, right: 24, left: 80, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey={ko ? "country" : "countryEn"} tick={{ fontSize: 12 }} width={80} />
              <Tooltip formatter={(v) => [`${v}%`, ""]} />
              <Bar dataKey="pct" radius={[0, 6, 6, 0]}>
                {KOREA_LNG_MIX_2024.map((d, i) => (
                  <Cell key={i} fill={d.countryEn === "United States" ? "#dc2626" : "#0ea5e9"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ═══ VISUAL COMPONENT DEMOS ═════════════════════════════════════════ */}

      {/* SHALE MAP DEMO */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="02" ko="비주얼 1 — 셰일 분지 지도" en="Visual 1 — Shale Basin Map" />
        <InteractiveMap
          lang={lang}
          center={[-95, 38]}
          zoom={3.4}
          style="light"
          height={420}
          markers={SHALE_MARKERS}
          title="미국 4대 셰일 분지"
          titleEn="The Four Major US Shale Basins"
          caption="Permian이 가장 크고 생산성이 높다. Marcellus·Utica는 천연가스 중심."
          captionEn="Permian dominates by scale and productivity. Marcellus/Utica focus on natural gas."
        />
      </div>

      {/* HORMUZ MAP DEMO */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="03" ko="비주얼 2 — 호르무즈 해협" en="Visual 2 — The Strait of Hormuz" />
        <InteractiveMap
          lang={lang}
          center={[54, 27]}
          zoom={5}
          style="light"
          height={420}
          markers={HORMUZ_MARKERS}
          title="호르무즈 해협 — 통과량 일 1,700만 배럴"
          titleEn="The Strait of Hormuz — 17M bpd in Transit"
          caption="세계 원유 무역의 30%가 이 해협을 지난다. 셰일 이전엔 미국이 가장 큰 이해당사자였다."
          captionEn="30% of seaborne oil trade passes through. Before shale, the US was the largest stakeholder."
        />
      </div>

      {/* THINKER QUOTE DEMO */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="04" ko="비주얼 3 — 사상가 인용" en="Visual 3 — Thinker Quote" />
        <ThinkerQuote
          lang={lang}
          thinker="zeihan"
          quote="셰일이 만든 변화는 단순한 에너지 자급이 아니다. 그것은 미국이 더 이상 세계의 해상 안보를 자임할 이유가 없다는 사실이다 — 그리고 그 결과는 우리가 아직 보지 못한 종류의 세계다."
          quoteEn="What shale created is not merely energy self-sufficiency. It is the fact that America no longer has a reason to underwrite global maritime security — and the world that follows is one we have not yet seen."
          source="The End of the World Is Just the Beginning"
          year="2022"
        />

        {/* Counter view */}
        <ThinkerQuote
          lang={lang}
          thinker="tooze"
          quote="셰일 결정론은 매혹적이지만 과장돼 있다. 미국의 중동 개입은 결코 단지 원유 때문이 아니었다 — 그것은 달러·동맹·이스라엘의 안보를 묶는 시스템이었다. 셰일이 그 시스템을 자동으로 해체하지는 않는다."
          quoteEn="Shale determinism is seductive but overstated. America's Middle East engagement was never simply about oil — it was a system that bound the dollar, alliances, and Israeli security together. Shale does not automatically dismantle that system."
          source="Chartbook (Substack)"
          year="2024"
        />
      </div>

      {/* SOURCE BOX DEMO */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="05" ko="비주얼 4 — 1차 자료 카드" en="Visual 4 — Primary Source Cards" />
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-5">
          {ko
            ? "수집된 50+ 자료 중 대표 12개. 정부·국제기구·학술·싱크탱크·산업·반대 시각을 균형 있게."
            : "12 representative items from 50+ collected. Government, IGOs, academic, think tanks, industry, and critical perspectives."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SOURCES.map((s, i) => (
            <SourceBox key={i} lang={lang} {...s} />
          ))}
        </div>
      </div>

      {/* WORKFLOW CHECKLIST */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        <SectionLabel lang={lang} n="06" ko="8주 작업 스프린트" en="8-Week Sprint" />
        <div className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden">
          {WORKFLOW.map((w, i) => (
            <div
              key={w.week}
              className={`flex items-center gap-4 px-5 py-4 ${
                i < WORKFLOW.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""
              }`}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-mono font-bold"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                W{w.week}
              </div>
              <p className="text-[13px] text-gray-700 dark:text-gray-300 flex-1">
                {ko ? w.task.ko : w.task.en}
              </p>
              <input
                type="checkbox"
                disabled
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 opacity-40"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CROSSLINK */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <Link
          href={ko ? "/series/after-pax-americana" : "/en/series/after-pax-americana"}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          ← {ko ? "시리즈 hub로 돌아가기" : "Back to series hub"}
        </Link>
      </div>
    </main>
  );
}

// ── Chart card wrapper ──────────────────────────────────────────────────────
function ChartCard({
  title, caption, children,
}: { title: string; caption?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden mb-8"
    >
      <div className="px-5 sm:px-6 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
          CHART
        </p>
        <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
      {caption && (
        <p className="px-5 sm:px-6 pb-4 text-[11px] text-gray-400 dark:text-gray-500 italic leading-relaxed">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

// ── Section label ────────────────────────────────────────────────────────────
function SectionLabel({
  lang, n, ko: koLabel, en,
}: { lang: Lang; n: string; ko: string; en: string }) {
  const ko = lang === "ko";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="mb-5"
    >
      <div className="flex items-baseline gap-3">
        <span
          className="text-[10px] font-mono font-bold tracking-[0.3em]"
          style={{ color: ACCENT }}
        >
          §{n}
        </span>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          {ko ? koLabel : en}
        </h2>
      </div>
      <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
    </motion.div>
  );
}
