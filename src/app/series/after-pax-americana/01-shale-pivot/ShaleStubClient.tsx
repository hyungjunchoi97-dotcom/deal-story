"use client";

/**
 * Chapter 1 — The Shale Pivot (Stub / Working Outline)
 *
 * 본문 작성 전 단계의 작업용 페이지.
 *  · 12개 섹션 outline
 *  · 비주얼 컴포넌트 4종 데모 (InteractiveMap, Timeline, SourceBox, ThinkerQuote)
 *  · 11개 차트·지도 슬롯 placeholder
 *  · 50+ 1차 자료 카탈로그
 *  · 작성 워크플로 체크리스트
 *
 * 본문이 채워지면 status: "published"로 바꾸고 정규 노트 페이지로 이전.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import InteractiveMap from "@/components/series/InteractiveMap";
import Timeline from "@/components/series/Timeline";
import SourceBox from "@/components/series/SourceBox";
import ThinkerQuote from "@/components/series/ThinkerQuote";

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
