"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

// ── Visual Data ───────────────────────────────────────────────────────────────
const SPECTRUM = [
  { id: "ssa",        label: "SSA",       sub: "Sovereign · Supra · Agency",  rating: "AAA~AA",  spread: "T+20–60bp",   pool: 5, poolLabel: "최대",  team: "DCM",          ex: "외평채 · KDB · EIB",  bg: "bg-teal-50 dark:bg-teal-900/30",    border: "border-teal-200 dark:border-teal-700",    dot: "bg-teal-500",    text: "text-teal-800 dark:text-teal-200"    },
  { id: "soe",        label: "SOE",       sub: "State-Owned Enterprise",       rating: "AA~A",    spread: "T+50–120bp",  pool: 4, poolLabel: "대",    team: "DCM",          ex: "KEPCO · Aramco",       bg: "bg-emerald-50 dark:bg-emerald-900/30", border: "border-emerald-200 dark:border-emerald-700", dot: "bg-emerald-500", text: "text-emerald-800 dark:text-emerald-200" },
  { id: "fig",        label: "FIG",       sub: "Financial Institutions",       rating: "A~BBB",   spread: "T+80–180bp",  pool: 4, poolLabel: "대",    team: "DCM",          ex: "KB · HSBC · 농협",     bg: "bg-blue-50 dark:bg-blue-900/30",     border: "border-blue-200 dark:border-blue-700",     dot: "bg-blue-500",    text: "text-blue-800 dark:text-blue-200"     },
  { id: "ig",         label: "Corp IG",   sub: "Investment Grade Corp",        rating: "BBB",     spread: "T+80–250bp",  pool: 3, poolLabel: "중",    team: "DCM",          ex: "삼성 · Apple · Shell",  bg: "bg-violet-50 dark:bg-violet-900/30",  border: "border-violet-200 dark:border-violet-700",  dot: "bg-violet-500",  text: "text-violet-800 dark:text-violet-200"  },
  { id: "hy",         label: "HY",        sub: "High Yield / Junk Bond",       rating: "BB~B",    spread: "T+300–700bp", pool: 2, poolLabel: "소",    team: "LevFin",       ex: "LBO 기업",              bg: "bg-orange-50 dark:bg-orange-900/30",  border: "border-orange-200 dark:border-orange-700",  dot: "bg-orange-500",  text: "text-orange-800 dark:text-orange-200"  },
  { id: "distressed", label: "Distressed",sub: "Near Default",                 rating: "CCC~D",   spread: "T+700bp+",    pool: 1, poolLabel: "극소",  team: "Special Sits", ex: "부도 직전 기업",          bg: "bg-red-50 dark:bg-red-900/30",       border: "border-red-200 dark:border-red-700",       dot: "bg-red-500",     text: "text-red-800 dark:text-red-200"       },
];

const INVESTORS = [
  { icon:"🏦", nameKo:"중앙은행",       nameEn:"Central Bank",          tagKo:"외환보유고",    tagEn:"FX Reserves",      tc:"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",    descKo:"수익은 세 번째 우선순위. 안전·유동성이 먼저. 외화 실탄 확보가 목적.", descEn:"Yield is third priority. Safety and liquidity come first. FX ammunition.", buysKo:"US Treasury · 초우량 SSA",   buysEn:"Treasuries · Top SSA"     },
  { icon:"🛡️", nameKo:"보험사·연기금",  nameEn:"Insurance / Pension",   tagKo:"ALM 매칭",     tagEn:"ALM Matching",     tc:"bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",    descKo:"미래 보험금·연금을 장기채로 매칭. 수익 극대화가 아닌 부채 만기 매칭.", descEn:"Match future liabilities with long-duration bonds. Duration over yield.", buysKo:"10~30년 IG 장기채",          buysEn:"10–30yr IG long bonds"    },
  { icon:"⚖️", nameKo:"은행 Treasury", nameEn:"Bank Treasury",          tagKo:"LCR·HQLA",    tagEn:"LCR / HQLA",      tc:"bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",descKo:"바젤 III 유동성 규제 준수. 30일 스트레스 완충재 확보. 수익 1순위 아님.", descEn:"Basel III liquidity compliance. 30-day stress buffer. Not return-driven.", buysKo:"국채 · SSA · 커버드본드",     buysEn:"Govts · SSA · Covered Bonds"},
  { icon:"📊", nameKo:"자산운용사",     nameEn:"Asset Manager",          tagKo:"인덱스+알파",  tagEn:"Benchmark + Alpha",tc:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",descKo:"Bloomberg Global Agg 벤치마크 추종 + 초과수익. 여기서부터 수익이 중요해진다.", descEn:"Track Bloomberg Global Agg + alpha. Returns start to matter here.", buysKo:"IG 전 구간 · 일부 HY",       buysEn:"All IG · selective HY"    },
  { icon:"💹", nameKo:"헤지펀드",       nameEn:"Hedge Fund",             tagKo:"수익 1순위",   tagEn:"Return-First",     tc:"bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",descKo:"캐리·상대가치·차익거래. 가장 수익 지향적. 시장 기회에 따라 포지션을 바꾼다.", descEn:"Carry, relative value, arb. Most return-driven. Shifts with market opportunities.", buysKo:"HY · EM · 구조화 상품",      buysEn:"HY · EM · Structured"    },
  { icon:"🏛️", nameKo:"국부펀드 (SWF)",nameEn:"Sovereign Wealth Fund",  tagKo:"국가 장기 운용",tagEn:"Long-term Sovereign",tc:"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",         descKo:"외환보유고 다변화 + 장기 수익. 중앙은행보다 수익 지향적이지만 안정성 중시.", descEn:"FX diversification + long-term returns. More return-oriented than central banks.", buysKo:"IG 다변화 포트폴리오",       buysEn:"Diversified IG portfolio" },
];

const BOND_MKTS = [
  { cur:"USD", flag:"🇺🇸", region:"Americas",     nameKo:"달러채",    nameEn:"Dollar Bond",  type:"Yankee Bond",   iKo:"글로벌 전체",     iEn:"Global",               cKo:"가장 큰 투자자 풀. 외평채의 기본 시장.",            cEn:"Largest pool. Default market for 외평채.",      pool:5, color:"border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20"    },
  { cur:"EUR", flag:"🇪🇺", region:"Europe",        nameKo:"유로채",    nameEn:"Euro Bond",    type:"Eurobond",      iKo:"유럽 보험·연기금",   iEn:"EU Insurers & Pensions", cKo:"유럽 규제 환경. SSA·FIG 발행 활발.",                cEn:"EU framework. Active SSA/FIG issuance.",        pool:4, color:"border-violet-200 dark:border-violet-700 bg-violet-50/60 dark:bg-violet-900/20"},
  { cur:"JPY", flag:"🇯🇵", region:"Asia-Pacific",  nameKo:"사무라이",   nameEn:"Samurai Bond", type:"Samurai Bond",  iKo:"일본 기관",        iEn:"Japanese Institutions",  cKo:"스왑 비용 + 일본 투자자 수요 분석이 핵심.",           cEn:"Swap economics + JP demand analysis are key.",  pool:3, color:"border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20"        },
  { cur:"TWD", flag:"🇹🇼", region:"Asia-Pacific",  nameKo:"포모사",     nameEn:"Formosa Bond", type:"Formosa Bond",  iKo:"대만 보험사 (ALM)", iEn:"Taiwan Insurers (ALM)",  cKo:"대만 보험사의 달러 ALM 수요. 콜러블 장기채 주류.",     cEn:"Strong TW insurer ALM demand. Callable long-dated.", pool:3, color:"border-teal-200 dark:border-teal-700 bg-teal-50/60 dark:bg-teal-900/20"  },
  { cur:"KRW", flag:"🇰🇷", region:"Asia-Pacific",  nameKo:"아리랑",     nameEn:"Arirang Bond", type:"Arirang Bond",  iKo:"국내 기관",        iEn:"Domestic Institutions",  cKo:"외국 발행사의 원화 조달 채널.",                      cEn:"Foreign issuer's KRW funding channel.",         pool:2, color:"border-emerald-200 dark:border-emerald-700 bg-emerald-50/60 dark:bg-emerald-900/20"},
];

const CHAPTERS_KO = [
  { ch:"Ch.1", title:"발행사 스펙트럼",      topics:"SSA·SOE·FIG·Corp IG·HY·Distressed" },
  { ch:"Ch.2", title:"투자자 생태계",        topics:"중앙은행·보험·연기금·AM·HF·SWF" },
  { ch:"Ch.3", title:"채권 상품 스펙트럼",   topics:"IG채·HY·LevFin·ABS/CLO·Private Credit" },
  { ch:"Ch.4", title:"국제채 지형도",        topics:"Yankee·Eurobond·Arirang·Formosa·Samurai" },
  { ch:"Ch.5", title:"딜 프로세스",          topics:"Mandate→Closing·로드쇼·PP·클럽딜" },
  { ch:"Ch.6", title:"프라이싱",             topics:"Bloomberg YAS·G/I/Z/OAS/ASW·NIC" },
  { ch:"Ch.7", title:"구조와 제도",          topics:"차이니즈 월·MNPI·신디케이트 데스크" },
];
const CHAPTERS_EN = [
  { ch:"Ch.1", title:"Issuer Spectrum",       topics:"SSA·SOE·FIG·Corp IG·HY·Distressed" },
  { ch:"Ch.2", title:"Investor Ecosystem",    topics:"Central Banks·Insurance·Pension·AM·HF" },
  { ch:"Ch.3", title:"Bond Products",         topics:"IG·HY·LevFin·ABS/CLO·Private Credit" },
  { ch:"Ch.4", title:"International Markets", topics:"Yankee·Eurobond·Arirang·Formosa·Samurai" },
  { ch:"Ch.5", title:"Deal Process",          topics:"Mandate→Closing·Roadshow·PP·Club Deal" },
  { ch:"Ch.6", title:"Pricing",               topics:"Bloomberg YAS·G/I/Z/OAS/ASW·NIC" },
  { ch:"Ch.7", title:"Structure & Regulation",topics:"Chinese Wall·MNPI·Syndicate Desk" },
];

// ── Visual components ─────────────────────────────────────────────────────────

function MarketSizeCallout({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "채권시장 vs 주식시장 — 2024" : "Bond vs Equity Market — 2024"}
        </p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-200/60 dark:divide-gray-700/60">
        {[
          { label: ko ? "글로벌 채권시장" : "Global Bond Market", val: "$130T+", sub: ko ? "총 발행 잔액" : "Outstanding balance", badge: ko ? "더 크다 ▲" : "Larger ▲", bc: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300", vc: "text-teal-600 dark:text-teal-400", delay: 0.2 },
          { label: ko ? "글로벌 주식시장" : "Global Equity Market", val: "$110T",  sub: ko ? "시가총액 기준" : "Market cap",            badge: ko ? "비교 기준" : "Benchmark",    bc: "bg-gray-100 dark:bg-gray-800 text-gray-500",                        vc: "text-gray-600 dark:text-gray-400", delay: 0.35 },
        ].map(item => (
          <div key={item.label} className="p-5 sm:p-8 text-center">
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-3">{item.label}</p>
            <motion.p
              className={`text-4xl sm:text-5xl font-black tracking-tight ${item.vc}`}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: item.delay, ease: EASE }}
            >
              {item.val}
            </motion.p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">{item.sub}</p>
            <span className={`mt-3 inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.bc}`}>{item.badge}</span>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "채권시장이 주식보다 크지만 뉴스는 주식이 더 많이 다룬다 — 대부분의 채권 수요가 소음 없이 작동하는 구조적·규제적 수요이기 때문이다."
            : "The bond market is larger than equities yet receives far less coverage — most demand is structural and regulatory, operating quietly in the background."}
        </p>
      </div>
    </motion.div>
  );
}

function CreditSpectrumViz({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-2 px-1">
        <span>{ko ? "← 안전 (낮은 스프레드, 넓은 투자자 풀)" : "← Safe (tight spread, broad investor pool)"}</span>
        <span>{ko ? "위험 →" : "Risky →"}</span>
      </div>
      <div className="h-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 via-violet-400 via-orange-400 to-red-500 mb-5" />

      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-2 sm:grid sm:grid-cols-3 lg:grid-cols-6 min-w-max sm:min-w-0">
          {SPECTRUM.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className={`flex-shrink-0 w-44 sm:w-auto rounded-xl border p-3 ${s.bg} ${s.border}`}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                <span className={`text-[13px] font-black ${s.text}`}>{s.label}</span>
              </div>
              <p className={`text-[10px] mb-3 leading-tight ${s.text} opacity-75`}>{s.sub}</p>
              {[
                { lKo:"등급",    lEn:"Rating",  v: s.rating },
                { lKo:"스프레드",lEn:"Spread",  v: s.spread },
                { lKo:"투자자 풀",lEn:"Pool",   v: ko ? s.poolLabel : ["","Tiny","Narrow","Medium","Large","Largest"][s.pool] },
                { lKo:"담당팀",  lEn:"Team",    v: s.team },
              ].map(row => (
                <div key={row.lKo} className="flex justify-between text-[10px] mb-0.5">
                  <span className="text-gray-500 dark:text-gray-400">{ko ? row.lKo : row.lEn}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{row.v}</span>
                </div>
              ))}
              <p className={`text-[9px] mt-2 pt-2 border-t leading-tight ${s.border} text-gray-400 dark:text-gray-500`}>{s.ex}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InvestorGrid({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
      {INVESTORS.map(inv => (
        <motion.div key={inv.nameKo} variants={fadeUp()}
          className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{inv.icon}</span>
              <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {ko ? inv.nameKo : inv.nameEn}
              </span>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${inv.tc}`}>
              {ko ? inv.tagKo : inv.tagEn}
            </span>
          </div>
          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
            {ko ? inv.descKo : inv.descEn}
          </p>
          <div className="pt-2.5 border-t border-gray-100 dark:border-gray-800 flex items-start gap-1">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 flex-shrink-0">
              {ko ? "주요 매입" : "Buys"}
            </span>
            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
              {ko ? inv.buysKo : inv.buysEn}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function IBFlowDiagram({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "IB 정보 흐름 — 차이니즈 월 구조" : "IB Information Flow — Chinese Wall Structure"}
        </p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-0 items-stretch rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">

          {/* Private side */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-800/40 p-4 sm:p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
              {ko ? "프라이빗 사이드" : "Private Side"}
            </p>
            <div className="space-y-2">
              {[
                { label: ko ? "발행사 (Issuer)" : "Issuer", sub: ko ? "미공개 발행 계획·금액·타이밍 (MNPI)" : "Undisclosed plans, size, timing (MNPI)", c:"bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300" },
                { label:"DCM", sub: ko ? "딜 구조 설계 · Fair Value 산출" : "Deal structuring · Fair value calc", c:"bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300" },
              ].map((b, i) => (
                <div key={i}>
                  {i > 0 && <div className="flex justify-center py-1 text-gray-300 dark:text-gray-600 text-sm">↓</div>}
                  <div className={`rounded-lg border p-3 text-center ${b.c}`}>
                    <p className="text-[12px] font-bold mb-0.5">{b.label}</p>
                    <p className="text-[10px] opacity-75">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chinese Wall */}
          <div className="flex sm:flex-col items-center justify-center px-2 sm:px-0 py-2 sm:py-4 bg-red-50 dark:bg-red-900/10 border-x sm:border-x-0 sm:border-y border-red-100 dark:border-red-800/40 gap-2 sm:gap-3">
            <div className="hidden sm:block h-8 w-px bg-gradient-to-b from-transparent to-red-300 dark:to-red-700" />
            <div className="text-center">
              <p className="text-[8px] font-black text-red-500 dark:text-red-400 uppercase tracking-widest">Chinese</p>
              <p className="text-[8px] font-black text-red-500 dark:text-red-400 uppercase tracking-widest">Wall</p>
              <p className="text-[10px] text-red-400 dark:text-red-500 mt-1">→</p>
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              {ko ? "월크로싱" : "Wall-Cross"}
            </div>
            <div className="hidden sm:block h-8 w-px bg-gradient-to-t from-transparent to-red-300 dark:to-red-700" />
          </div>

          {/* Public side */}
          <div className="flex-1 bg-white dark:bg-gray-900 p-4 sm:p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
              {ko ? "퍼블릭 사이드" : "Public Side"}
            </p>
            <div className="space-y-2">
              <div className="rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 p-3 text-center">
                <p className="text-[12px] font-bold text-violet-700 dark:text-violet-300">
                  {ko ? "신디케이트 (Syndicate)" : "Syndicate"}
                </p>
                <p className="text-[10px] text-violet-600 dark:text-violet-400 opacity-80">
                  {ko ? "IPT 설정 · 오더북 집계 · 최종 프라이싱" : "Set IPT · Aggregate orderbook · Price"}
                </p>
              </div>
              <div className="flex justify-center py-0.5 text-gray-300 dark:text-gray-600 text-sm">↓</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { l:"Sales",   sub: ko ? "투자자 주문 수집" : "Investor orders",  c:"bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300" },
                  { l:"Trading", sub: ko ? "세컨더리 레벨" : "Secondary levels",   c:"bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300" },
                ].map(b => (
                  <div key={b.l} className={`rounded-lg border p-2.5 text-center ${b.c}`}>
                    <p className="text-[11px] font-bold mb-0.5">{b.l}</p>
                    <p className="text-[9px] opacity-75">{b.sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center py-0.5 text-gray-300 dark:text-gray-600 text-sm">↓</div>
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-3 text-center">
                <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                  {ko ? "투자자 (Investors)" : "Investors"}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">CB · Insurance · AM · HF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow steps */}
        <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
          {(ko
            ? ["발행사 → DCM", "월크로싱 →", "Syndicate → Sales", "투자자 주문 →", "Syndicate → 최종 프라이싱"]
            : ["Issuer → DCM", "Wall-crossing →", "Syndicate → Sales", "Investor orders →", "Syndicate → Final pricing"]
          ).map((step, i) => (
            <span key={i} className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
              {i + 1}. {step}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BondMarketsGrid({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const regions = ["Americas", "Europe", "Asia-Pacific"] as const;

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {regions.map(region => (
          <div key={region} className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2.5 border-b border-gray-200/60 dark:border-gray-700/60">
              <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400">{region}</p>
            </div>
            <div className="p-3 space-y-2.5">
              {BOND_MKTS.filter(m => m.region === region).map(m => (
                <motion.div
                  key={m.cur}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`rounded-lg border p-3 ${m.color}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg leading-none">{m.flag}</span>
                    <div>
                      <span className="text-[12px] font-black text-gray-800 dark:text-gray-200">{m.cur}</span>
                      <span className="text-[10px] text-gray-500 ml-1.5">{ko ? m.nameKo : m.nameEn}</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">{m.type}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                    {ko ? m.cKo : m.cEn}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[9px] text-gray-400">{ko ? "투자자: " : "Investors: "}</span>
                    <span className="text-[9px] font-medium text-gray-600 dark:text-gray-300">{ko ? m.iKo : m.iEn}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mt-1.5">
                    {[1,2,3,4,5].map(n => (
                      <div key={n} className={`w-1.5 h-1.5 rounded-full ${n <= m.pool ? "bg-teal-500" : "bg-gray-200 dark:bg-gray-700"}`} />
                    ))}
                    <span className="text-[9px] text-gray-400 ml-1">{ko ? "풀" : "pool"}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function RoadmapGrid({ lang }: { lang: Lang }) {
  const chapters = lang === "ko" ? CHAPTERS_KO : CHAPTERS_EN;
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
      {chapters.map((c, i) => (
        <motion.div key={c.ch} variants={fadeUp()}
          className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 flex gap-3 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
            <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 text-center leading-tight">{c.ch}</span>
          </div>
          <div>
            <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{c.title}</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">{c.topics}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Visuals mapped to each of the 6 sections ─────────────────────────────────
function getVisual(i: number, lang: Lang) {
  const visuals = [
    <MarketSizeCallout key="0" lang={lang} />,
    <CreditSpectrumViz key="1" lang={lang} />,
    <InvestorGrid      key="2" lang={lang} />,
    <IBFlowDiagram     key="3" lang={lang} />,
    <BondMarketsGrid   key="4" lang={lang} />,
    <RoadmapGrid       key="5" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function DcmEcosystemClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const accent = "#14b8a6";

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Header ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">DCM</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
              DCM — Chapter 0
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
            >
              {ko ? concept.titleEn : concept.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {concept.tags.slice(0, 6).map(tag => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {concept.sections.map((section, i) => (
            <motion.section
              key={i}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              {/* Section heading */}
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <p className="text-[12px] text-gray-400 dark:text-gray-500 italic">
                  {ko ? section.headingEn : section.heading}
                </p>
                <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
              </motion.div>

              {/* Body text */}
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Visual for this section */}
              {getVisual(i, lang)}
            </motion.section>
          ))}

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
              <span className="text-sm text-gray-400 dark:text-gray-500 font-normal ml-2">
                {ko ? "Key Terms" : "핵심 용어"}
              </span>
            </motion.h2>
            <div className="mt-5 space-y-3">
              {concept.keyTerms.map((term, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                      {ko ? term.term : term.termEn}
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      {ko ? term.termEn : term.term}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
