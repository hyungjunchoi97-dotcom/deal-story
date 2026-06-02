/**
 * Fund 시리즈 Ch.6 — 한국·미국 시장과 주요 플레이어 도감 (시리즈 마지막)
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: Global AUM 분포 · Top 10 US PE · 한국 PE 도감 · 한국 vs 미국 매트릭스
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FUND_CHAPTERS, getFundChapterBySlug, getFundSeriesNav } from "@/data/fund-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fund-ch06-market-players";
const ACCENT = "#f59e0b";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const PURPLE = "#a855f7";
const TEAL = "#0891b2";

// Global Private Capital AUM by asset class ($B, 2024 근사값)
const GLOBAL_AUM = [
  { koClass: "PE Buyout",        enClass: "PE Buyout",        aum: 4500, koDesc: "Mega-cap · Mid-cap · Lower mid-cap",            enDesc: "Mega-cap · mid-cap · lower mid-cap", color: ACCENT },
  { koClass: "Venture Capital",  enClass: "Venture Capital",  aum: 3200, koDesc: "Seed · Series A-D · Growth",                       enDesc: "Seed · Series A-D · growth",          color: BLUE   },
  { koClass: "Private Credit",   enClass: "Private Credit",   aum: 1700, koDesc: "Direct lending · Mezz · Distressed (가장 빠른 성장)", enDesc: "Direct lending · mezz · distressed (fastest growing)", color: PURPLE },
  { koClass: "Real Estate",      enClass: "Real Estate",      aum: 1400, koDesc: "Core · Core+ · Value-add · Opportunistic",           enDesc: "Core · Core+ · value-add · opportunistic", color: TEAL },
  { koClass: "Infrastructure",    enClass: "Infrastructure",    aum: 1100, koDesc: "전기 · 통신 · 항만 · 신재생",                          enDesc: "Power · telecom · ports · renewables",    color: GREEN },
  { koClass: "Secondaries / FoF", enClass: "Secondaries / FoF", aum:  650, koDesc: "GP-led secondary · 모태펀드 · FoF",                     enDesc: "GP-led secondary · fund-of-funds",        color: "#94a3b8" },
];
const GLOBAL_TOTAL = 12550; // ~$12.5T

// Top 10 US PE Firms (2024 AUM 근사, 본사 위치 불문 글로벌 운영)
const TOP_US_PE = [
  { name: "Blackstone",         hq: "NY",     founded: 1985, aum: 1075, koFocus: "PE · RE · Credit · HF — 가장 큰 alt manager",       enFocus: "PE · RE · credit · HF — largest alt manager" },
  { name: "Brookfield",         hq: "Toronto", founded: 1899, aum: 925,  koFocus: "Infra · RE · Renewable — 인프라 강자",             enFocus: "Infra · RE · renewables — infra heavyweight" },
  { name: "Apollo Global Mgmt", hq: "NY",     founded: 1990, aum: 700,  koFocus: "Credit-heavy. Athene · Yahoo · ADT",               enFocus: "Credit-heavy. Athene · Yahoo · ADT" },
  { name: "KKR",                hq: "NY",     founded: 1976, aum: 600,  koFocus: "PE 시조. RJR Nabisco · Walgreens",                  enFocus: "Founders of LBO. RJR Nabisco · Walgreens" },
  { name: "Carlyle",            hq: "DC",     founded: 1987, aum: 425,  koFocus: "Defense · Aerospace 강함",                          enFocus: "Strong in defense and aerospace" },
  { name: "Ares Management",    hq: "LA",     founded: 1997, aum: 425,  koFocus: "Private Credit 1위. BDC 거인.",                     enFocus: "#1 in private credit. BDC giant." },
  { name: "TPG",                hq: "Fort Worth", founded: 1992, aum: 230, koFocus: "Bing 등 tech 강함. 2022 IPO.",                  enFocus: "Tech-strong (Bing etc.). 2022 IPO." },
  { name: "EQT",                hq: "Stockholm", founded: 1994, aum: 270, koFocus: "유럽 본사지만 글로벌 PE. Healthcare 강",          enFocus: "Stockholm-based but global PE. Strong in healthcare" },
  { name: "CVC Capital",        hq: "Luxembourg", founded: 1981, aum: 200, koFocus: "Formula 1 · Six Nations Rugby",                  enFocus: "Formula 1 · Six Nations Rugby" },
  { name: "Bain Capital",        hq: "Boston",     founded: 1984, aum: 185, koFocus: "Mitt Romney 창립. Consumer 강.",                enFocus: "Mitt Romney founded. Strong in consumer." },
  { name: "Advent International", hq: "Boston",    founded: 1984, aum: 94,  koFocus: "Industrial · Financial Services 전문",          enFocus: "Industrials and financial services" },
  { name: "Warburg Pincus",      hq: "NY",     founded: 1966, aum: 83,  koFocus: "Growth equity 전문. 가장 오래된 PE 중 하나",       enFocus: "Growth equity specialist. One of the oldest PEs" },
];

// Top US VC Firms (AUM 근사)
const TOP_US_VC = [
  { name: "Sequoia Capital",    aum:  85, koFocus: "Apple · Google · WhatsApp · Stripe · Airbnb · Nvidia · YouTube",   enFocus: "Apple · Google · WhatsApp · Stripe · Airbnb · Nvidia · YouTube" },
  { name: "Andreessen Horowitz", aum:  45, koFocus: "Facebook · Coinbase · GitHub · Slack · OpenAI",                    enFocus: "Facebook · Coinbase · GitHub · Slack · OpenAI" },
  { name: "Insight Partners",    aum:  90, koFocus: "Twitter · Shopify · Qualtrics. Growth equity 강",                 enFocus: "Twitter · Shopify · Qualtrics. Growth-stage strong" },
  { name: "Tiger Global",        aum:  60, koFocus: "Crossover (private + public). 2022 큰 mark-down",                  enFocus: "Crossover (private + public). Big 2022 mark-down" },
  { name: "Lightspeed",          aum:  25, koFocus: "Snap · Affirm · Mulesoft",                                          enFocus: "Snap · Affirm · Mulesoft" },
  { name: "Accel",               aum:  21, koFocus: "Facebook Series A · Slack · Atlassian · Spotify",                   enFocus: "Facebook Series A · Slack · Atlassian · Spotify" },
  { name: "Benchmark",           aum:   3, koFocus: "eBay · Uber · Twitter · Instagram. Equal partnership",              enFocus: "eBay · Uber · Twitter · Instagram. Equal partnership" },
  { name: "Founders Fund",       aum:  16, koFocus: "SpaceX · Stripe · Palantir · Anduril",                              enFocus: "SpaceX · Stripe · Palantir · Anduril" },
];

// 한국 PE Top Firms (AUM 근사, $B)
const KOREA_PE = [
  {
    name: "MBK Partners", founded: 2005, aum: 30,
    koHq: "서울 · 도쿄 · 상해 · 홍콩", enHq: "Seoul · Tokyo · Shanghai · HK",
    koDeals: "K Bank · 두산공작기계 · ING Life · Coway · Card 24 · Tesco Korea",
    enDeals: "K Bank · Doosan Machine Tools · ING Life · Coway · Card 24 · Tesco Korea",
    koDesc: "한국·동북아 최대 PE. 김병주 회장 (전 Carlyle Asia).",
    enDesc: "Korea/North Asia's largest PE. Founded by Michael ByungJu Kim (ex-Carlyle Asia).",
  },
  {
    name: "Hahn & Co.", founded: 2010, aum: 12,
    koHq: "서울", enHq: "Seoul",
    koDeals: "한온시스템 · 쌍용양회 · SK해운 · SK엔카 · 대성산업가스",
    enDeals: "Hanon Systems · Ssangyong Cement · SK Shipping · SK Encar · Daesung Industrial Gases",
    koDesc: "한상원 회장 (전 Morgan Stanley PE Asia). 정통 buyout 강함.",
    enDesc: "Founded by Scott Sang Won Hahn (ex-Morgan Stanley PE Asia). Strong in classic buyout.",
  },
  {
    name: "IMM Private Equity", founded: 2006, aum: 9,
    koHq: "서울", enHq: "Seoul",
    koDeals: "할리스 · 메가박스 · 한샘 · W컨셉 · 미래에셋생명",
    enDeals: "Hollys · Megabox · Hanssem · WConcept · Mirae Asset Life",
    koDesc: "IMM Investment 그룹 (PE + VC). Consumer · Retail 강.",
    enDesc: "Part of IMM Investment group (PE + VC). Strong in consumer and retail.",
  },
  {
    name: "STIC Investments", founded: 1999, aum: 5,
    koHq: "서울", enHq: "Seoul",
    koDeals: "PI첨단소재 · 휴젤 · LIG넥스원 · 락앤락",
    enDeals: "PI Advanced Materials · Hugel · LIG Nex1 · Lock&Lock",
    koDesc: "한국 1세대 PE. 다양한 산업 분산.",
    enDesc: "First-generation Korean PE. Diversified industries.",
  },
  {
    name: "VIG Partners", founded: 2005, aum: 4.5,
    koHq: "서울", enHq: "Seoul",
    koDeals: "삼양옵틱스 · 동양매직 · 락앤락 · 바디프랜드 · 컴포즈커피",
    enDeals: "Samyang Optics · Dongyang Magic · Lock&Lock · Bodyfriend · Compose Coffee",
    koDesc: "중견·중소기업 buyout 전문. Brand · IP 강함.",
    enDesc: "Mid- and small-cap buyout specialist. Strong in brand and IP.",
  },
  {
    name: "UCK Partners", founded: 2010, aum: 3.5,
    koHq: "서울", enHq: "Seoul",
    koDeals: "공차코리아 · 이로츠 · 의류 SPA · 헬스케어",
    enDeals: "Gong Cha Korea · Eorot · SPA apparel · healthcare",
    koDesc: "Consumer · Healthcare 전문. Growth + Buyout 혼합.",
    enDesc: "Consumer and healthcare specialist. Growth + buyout blend.",
  },
  {
    name: "Glenwood PE", founded: 2014, aum: 3,
    koHq: "서울", enHq: "Seoul",
    koDeals: "한온시스템 (Hahn 공동) · 코웰패션 · CJ푸드빌",
    enDeals: "Hanon Systems (with Hahn) · Cowell Fashion · CJ Foodville",
    koDesc: "Co-investment 강함. 한국 mid-cap 활발.",
    enDesc: "Strong in co-investment. Active in Korean mid-cap.",
  },
  {
    name: "Centroid Investment", founded: 2015, aum: 2.5,
    koHq: "서울", enHq: "Seoul",
    koDeals: "BNP Paribas Cardif · TaylorMade · 휴젤 (보톡스)",
    enDeals: "BNP Paribas Cardif · TaylorMade · Hugel (botox)",
    koDesc: "TaylorMade 인수 (2021, \\$1.7B) — 한국 PE 최대 cross-border deal.",
    enDesc: "Acquired TaylorMade ($1.7B, 2021) — largest Korean PE cross-border deal.",
  },
];

// 한국 VC Top Firms
const KOREA_VC = [
  { name: "Altos Ventures",       koDeals: "쿠팡 (\\$1B → \\$60B+ exit) · 우아한형제들 · 토스 · 무신사",  enDeals: "Coupang ($1B → $60B+ exit) · Woowa Bros · Toss · Musinsa" },
  { name: "한국투자파트너스",       enName: "Korea Investment Partners", koDeals: "두나무 · 비바리퍼블리카 (토스) · 야놀자 · 컬리",            enDeals: "Dunamu · Toss · Yanolja · Kurly" },
  { name: "카카오벤처스",           enName: "Kakao Ventures",            koDeals: "두나무 · 야놀자 · 직방 · 클래스101",                       enDeals: "Dunamu · Yanolja · Zigbang · Class101" },
  { name: "소프트뱅크벤처스아시아",  enName: "SoftBank Ventures Asia",    koDeals: "쿠팡 · 우아한형제들 · 야놀자 · 컬리 · Krafton",            enDeals: "Coupang · Woowa Bros · Yanolja · Kurly · Krafton" },
  { name: "Naver D2SF",            koDeals: "Naver 전략적 VC arm. 산업 협력 전제.",                   enDeals: "Naver's strategic VC arm. Industry-collaboration premised." },
  { name: "Atinum Investment",     koDeals: "Krafton · 컬리 · 야놀자 · 마켓컬리 · 무신사",            enDeals: "Krafton · Kurly · Yanolja · Marketkurly · Musinsa" },
  { name: "Mirae Asset Venture",   koDeals: "Mirae Asset 그룹 자체 VC. Tech · Healthcare 활발.",      enDeals: "Mirae Asset group's own VC. Active in tech and healthcare." },
  { name: "DSC Investment",        koDeals: "Bio · Tech 전문. 카카오뱅크 · Kakao M",                 enDeals: "Bio and tech specialist. KakaoBank · Kakao M" },
];

// 한국 vs 미국 시장 7-항목 비교
const KR_US_COMPARE = [
  {
    koItem: "전체 시장 규모",
    enItem: "Total market size",
    us: "PE \\$8T+, VC \\$3T+ (Global 80%+ 비중)",
    enUs: "PE $8T+, VC $3T+ (80%+ of global)",
    kr: "PE \\$100B, VC \\$30B (Global 1.5%)",
    enKr: "PE $100B, VC $30B (1.5% of global)",
  },
  {
    koItem: "LP 구성",
    enItem: "LP composition",
    us: "Endowment + Pension (CalPERS · Yale) + SWF",
    enUs: "Endowments + pensions (CalPERS · Yale) + SWFs",
    kr: "NPS + 사학연금 + 정책자금 (모태펀드 · KDB)",
    enKr: "NPS + Sahak Pension + policy capital (KVIC, KDB)",
  },
  {
    koItem: "Sourcing 채널",
    enItem: "Sourcing channel",
    us: "Auction 70-80% · Proprietary 20-30%",
    enUs: "Auction 70-80% · proprietary 20-30%",
    kr: "Proprietary 50-70% (관계 사회) · Auction 30-50%",
    enKr: "Proprietary 50-70% (relationship-driven) · auction 30-50%",
  },
  {
    koItem: "Deal size 평균",
    enItem: "Average deal size",
    us: "Mega-cap \\$5B+ · Mid \\$500M-\\$5B",
    enUs: "Mega-cap $5B+ · mid $500M-$5B",
    kr: "Mid-cap \\$100M-\\$1B · 가끔 \\$2-5B",
    enKr: "Mid-cap $100M-$1B · occasionally $2-5B",
  },
  {
    koItem: "Exit 채널",
    enItem: "Exit channels",
    us: "IPO 30% · Strategic 35% · Sponsor 25% · Other 10%",
    enUs: "IPO 30% · strategic 35% · sponsor-to-sponsor 25% · other 10%",
    kr: "Strategic 50% · IPO 25% · Sponsor 15% · Other 10%",
    enKr: "Strategic 50% · IPO 25% · sponsor-to-sponsor 15% · other 10%",
  },
  {
    koItem: "Junior comp",
    enItem: "Junior comp",
    us: "Associate base \\$200K + bonus 100-150%",
    enUs: "Associate base $200K + bonus 100-150%",
    kr: "Associate base ₩150-200M + bonus 80-120%",
    enKr: "Associate base ₩150-200M + bonus 80-120%",
  },
  {
    koItem: "Industry focus",
    enItem: "Industry focus",
    us: "Tech · Healthcare · Consumer · Industrial (sector-agnostic)",
    enUs: "Tech · healthcare · consumer · industrial (sector-agnostic)",
    kr: "화학 · 식음료 · 헬스케어 · 산업재 (대기업 분할 매물 위주)",
    enKr: "Chemicals · F&B · healthcare · industrials (chaebol carve-outs)",
  },
];

export default function MaFund06Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFundChapterBySlug(SLUG)!;
  const { prev, next } = getFundSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.6" : "Fund Series · Ch.6"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Fund 시리즈" : "Fund Series"}</span>
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
            {FUND_CHAPTERS.map((ch) => {
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

          {/* § 1 — Global AUM */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Global Private Capital — $12.5T 시장 분포" : "Global private capital — the $12.5T pie"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Global private capital 전체 AUM이 2024년 기준 $12.5T 규모예요. 2010년 대비 4배 이상 성장. 같은 기간 Global GDP가 약 1.6배 성장한 거에 비하면 private capital이 빠르게 시장을 잠식하는 trend가 확인됩니다."
                : "Global private capital AUM hit $12.5T in 2024 — over 4× growth since 2010. Compare with global GDP growth of ~1.6× over the same period, and you see private capital steadily eating share."}</p>
              <p>{ko
                ? "구성을 보면 PE Buyout이 가장 크고 ($4.5T, 36%), VC가 두 번째 ($3.2T, 26%). 그러나 가장 빠르게 성장하는 영역은 Private Credit — 2020년 $850B 에서 2024년 $1.7T로 4년 만에 2배. Direct lending이 main이고, banks가 mid-market lending에서 후퇴하면서 PE GP들이 그 자리를 메우고 있어요."
                : "PE Buyout leads at $4.5T (36%), VC second at $3.2T (26%). The fastest grower is Private Credit — $850B in 2020 to $1.7T in 2024, doubling in four years. Direct lending is the main driver as banks retreat from mid-market lending and PE GPs fill the gap."}</p>
              <p>{ko
                ? "이 $12.5T 안에서 한국이 차지하는 비중은 약 1.5% — Korea PE $100B + Korea VC $30B 정도. 작아 보이지만 \"단일 국가 PE/VC AUM\" 으로 보면 글로벌 10위권. NPS가 단일 LP로 글로벌 3대 pension 중 하나라는 점, MBK가 아시아 최대 PE 중 하나라는 점이 한국 시장의 글로벌 영향력을 보여줘요."
                : "Korea accounts for ~1.5% of the $12.5T — $100B PE + $30B VC. Small but top-10 globally as a 'single-country PE/VC AUM.' NPS sits in the global top-3 pensions; MBK is one of Asia's largest PEs — Korea punches above its weight on the global map."}</p>
            </div>

            {/* Global AUM by asset class */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Global Private Capital AUM by Asset Class ($B, 2024)" : "Global private capital AUM by asset class ($B, 2024)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Total ~$12.5T. Private Credit이 가장 빠르게 성장 중." : "Total ~$12.5T. Private Credit is the fastest grower."}
              </p>
              <div className="space-y-3">
                {GLOBAL_AUM.map((a, i) => {
                  const widthPct = (a.aum / 4500) * 100;
                  const pct = ((a.aum / GLOBAL_TOTAL) * 100).toFixed(1);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12.5px] font-bold" style={{ color: a.color }}>{ko ? a.koClass : a.enClass}</span>
                        <span className="text-[11px] font-mono">
                          <span className="font-bold text-gray-900 dark:text-gray-100">\${a.aum.toLocaleString()}B</span>
                          <span className="text-gray-500 dark:text-gray-400"> · {pct}%</span>
                        </span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: a.color, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? a.koDesc : a.enDesc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Total ~\\$12.5T. 미국 50%+ · 유럽 25% · 아시아 20% (중·일·한·인 합산) · 기타 5%. 한국은 아시아 안에서 일본 다음 2-3위."
                  : "Total ~$12.5T. US 50%+ · Europe 25% · Asia 20% (China + Japan + Korea + India) · others 5%. Korea ranks #2-3 in Asia behind Japan."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Top US PE */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Top US PE Firms — Blackstone부터 Warburg Pincus까지" : "Top US PE firms — Blackstone to Warburg Pincus"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Global PE AUM의 50%+ 가 Top 20 firm에 집중되어 있어요. 그중에서 Top 10이 sub-concentration이 더 강하고, 특히 Blackstone · Brookfield · Apollo · KKR 4개 firm이 \"\\$500B+ AUM\" 으로 다른 firm들과 격이 다른 mega-cap tier를 형성하고 있습니다."
                : "Top-20 firms hold over 50% of global PE AUM. The top-10 concentrate further, with Blackstone, Brookfield, Apollo, and KKR forming a 'mega-cap tier' above $500B AUM, in a class of their own."}</p>
              <p>{ko
                ? "Blackstone이 사실상 단독 1위 (\\$1.075T) 로 미국 alt manager 중 가장 큼. Brookfield는 인프라·real estate 중심이지만 PE 영역도 빠르게 확대 중. Apollo는 credit-heavy (Athene 인수 후 insurance 자산 운용) 이고, KKR은 \"original LBO\" 의 역사적 위상. 5위권 이후는 \\$200-500B 구간에서 Carlyle · Ares · TPG · EQT · CVC · Bain · Advent · Warburg가 각자 특화 영역에서 경쟁."
                : "Blackstone leads at $1.075T — the largest US alt manager. Brookfield is infra/RE-heavy but expanding PE fast. Apollo is credit-heavy (managing Athene's insurance assets). KKR holds the 'original LBO' legacy. Below that, the $200-500B tier — Carlyle, Ares, TPG, EQT, CVC, Bain, Advent, Warburg — compete in specialized niches."}</p>
            </div>

            {/* Top US PE catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Top US PE Firms — AUM ($B) · 본사 · 설립년도 · 특화 영역" : "Top US PE firms — AUM ($B) · HQ · founded · focus"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "2024년 AUM 기준. EQT(스웨덴) · CVC(룩셈부르크) · Brookfield(토론토) 도 글로벌 US 시장에서 활동해서 포함." : "2024 AUM. EQT (Sweden), CVC (Luxembourg), Brookfield (Toronto) included — all active in the global US market."}
              </p>
              <div className="space-y-2.5">
                {TOP_US_PE.map((f, i) => {
                  const widthPct = (f.aum / 1100) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                      className="rounded-md p-3 border"
                      style={{ borderColor: ACCENT + "40", background: ACCENT + "08" }}
                    >
                      <div className="grid grid-cols-[1fr_auto] gap-3 items-baseline mb-1">
                        <div className="flex items-baseline gap-2.5 min-w-0">
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{f.name}</span>
                          <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">· {f.hq} · {f.founded}</span>
                        </div>
                        <span className="text-[12px] font-mono font-bold flex-shrink-0" style={{ color: ACCENT }}>\${f.aum}B</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1.5">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.05, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: ACCENT, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? f.koFocus : f.enFocus}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "Top US VC Firms — Sequoia를 중심으로" : "Top US VC firms — Sequoia at the center"}</p>
              <p>{ko
                ? "VC는 PE보다 fund size가 작아서 \"AUM 기준 ranking\" 보다는 \"portfolio의 home-run deal\" 로 평가받아요. Sequoia가 \\$85B AUM으로 가장 크지만, Benchmark은 \\$3B AUM에 불과하면서도 eBay (1,500x) · Uber 같은 단일 deal로 industry 위상이 동급. 아래는 Ch.3에서 본 내용을 AUM 데이터와 함께 정리."
                : "VC fund sizes are smaller, so rankings are about 'portfolio home runs' rather than AUM. Sequoia leads at $85B, but Benchmark — at just $3B AUM — earns peer status from single deals like eBay (1,500×) and Uber. Below is what Ch.3 covered, paired with AUM data."}</p>
            </div>

            <div className="mt-5 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Top US VC Firms — AUM ($B) · 대표 portfolio" : "Top US VC firms — AUM ($B) · notable portfolio"}
              </p>
              <div className="space-y-2.5">
                {TOP_US_VC.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                    className="rounded-md p-3 border"
                    style={{ borderColor: BLUE + "40", background: BLUE + "08" }}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{v.name}</span>
                      <span className="text-[11.5px] font-mono font-bold flex-shrink-0" style={{ color: BLUE }}>\${v.aum}B</span>
                    </div>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? v.koFocus : v.enFocus}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 한국 PE */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한국 PE Top Firms — MBK부터 Centroid까지" : "Korean PE top firms — MBK to Centroid"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "한국 PE 시장은 글로벌 PE 표준 메커니즘 위에서 굴러가지만, 시장 구조와 deal 특성이 미국과 꽤 달라요. MBK Partners가 단독 1위 (\\$30B AUM) 이고, 그 뒤로 Hahn & Co · IMM PE · STIC · VIG · UCK · Glenwood · Centroid 등이 mid-cap PE 시장을 나눠 가지고 있어요."
                : "Korean PE runs on the same global mechanics but with distinct market structure and deal characteristics. MBK Partners leads alone at $30B AUM, with Hahn & Co, IMM PE, STIC, VIG, UCK, Glenwood, and Centroid splitting the mid-cap PE market."}</p>
              <p>{ko
                ? "한국 PE의 특징은 (1) Mega-cap PE가 거의 없음 — 가장 큰 MBK도 \\$30B로 KKR의 1/20 수준, (2) 한국 conglomerate (재벌) 의 carve-out deal이 sourcing의 상당 비중, (3) banker-driven auction 보다 proprietary relationship-based deal이 많음, (4) 대부분 PEF (자본시장법) 구조로 NPS 등 한국 institutional LP 출자, (5) 점차 Asia 진출 확대 중 (MBK · Hahn이 일본·중국에도 활발)."
                : "Korean PE has (1) almost no mega-cap — even MBK at $30B is 1/20th of KKR, (2) chaebol carve-outs are a major sourcing source, (3) more proprietary relationship-based deals than banker-driven auctions, (4) mostly PEF structures (Capital Markets Act) backed by Korean institutional LPs like NPS, (5) growing Asia expansion (MBK and Hahn active in Japan and China too)."}</p>
            </div>

            {/* Korea PE catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "한국 PE Top 8 — AUM ($B) · 대표 Deal · 특징" : "Korean PE top 8 — AUM ($B) · notable deals · profile"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "AUM 2024 근사값. 한국 PE 전체 \\$100B 중 Top 8이 약 70%." : "2024 approximate AUM. Top-8 hold ~70% of Korea's $100B PE market."}
              </p>
              <div className="space-y-3">
                {KOREA_PE.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: ACCENT + "60", background: ACCENT + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[13px] font-bold" style={{ color: ACCENT }}>{f.name}</span>
                        <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{f.founded} · {ko ? f.koHq : f.enHq}</span>
                      </div>
                      <span className="text-[12px] font-mono font-bold" style={{ color: ACCENT }}>\${f.aum}B</span>
                    </div>
                    <p className="text-[11px] text-gray-700 dark:text-gray-300 leading-snug mb-1">
                      <span className="text-[9.5px] font-semibold uppercase tracking-wider mr-1.5" style={{ color: ACCENT }}>{ko ? "대표 Deal" : "Notable deals"}</span>
                      {ko ? f.koDeals : f.enDeals}
                    </p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug italic">{ko ? f.koDesc : f.enDesc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "한국 VC — Coupang을 만든 firm들" : "Korean VC — the firms behind Coupang"}</p>
              <p>{ko
                ? "한국 VC의 home-run deal이라면 Coupang (Altos Ventures · SoftBank), Krafton (Atinum · SoftBank), 토스 (한국투자파트너스 · Altos) 정도. 글로벌 VC와 비교하면 절대적 fund size는 작지만, 한국 unicorn (Coupang \\$60B, Krafton \\$20B+ 등) 의 절반 이상이 한국 VC에서 시작했다는 점이 시장의 특징."
                : "Korean VC's home-run deals: Coupang (Altos Ventures, SoftBank), Krafton (Atinum, SoftBank), Toss (Korea Investment Partners, Altos). Smaller in absolute fund size vs global VC, but more than half of Korea's unicorns (Coupang $60B, Krafton $20B+) trace back to Korean VC roots."}</p>
            </div>

            <div className="mt-5 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "한국 VC Top Firms — 대표 portfolio" : "Korean VC top firms — notable portfolio"}
              </p>
              <div className="space-y-2.5">
                {KOREA_VC.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                    className="rounded-md p-3 border"
                    style={{ borderColor: BLUE + "40", background: BLUE + "08" }}
                  >
                    <p className="text-[12px] font-bold mb-1" style={{ color: BLUE }}>
                      {ko ? v.name : (v.enName || v.name)}
                    </p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? v.koDeals : v.enDeals}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — 한국 vs 미국 매트릭스 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한국 vs 미국 시장 — 7가지 본질적 차이" : "Korea vs US — seven structural differences"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "한국 PE/VC 시장은 글로벌 표준 mechanics 위에서 굴러가지만, 7가지 영역에서 본질적으로 미국과 달라요. Junior career를 시작하는 사람이나 LP 입장에서 두 시장 사이의 차이를 이해하는 게 중요."
                : "Korean PE/VC runs on global mechanics but differs structurally in seven areas. Worth understanding the differences whether you're starting a junior career or sitting on the LP side."}</p>
              <p>{ko
                ? "가장 큰 차이가 LP 구성과 sourcing 채널이에요. 미국은 Endowment + Pension + SWF가 LP의 70%+ 인데, 한국은 NPS + 사학연금 + 정책자금이 80%+. 정책자금이 큰 비중이라 \"한국 PE는 사회·경제적 mandate를 일부 받음\" 이라는 차이가 생겨요. Sourcing도 미국은 banker-driven auction 70-80% 인데 한국은 proprietary 50-70% — 관계 사회의 특징이 deal sourcing에 직접 반영."
                : "The biggest gaps: LP composition and sourcing. US LPs are 70%+ endowments + pensions + SWFs. Korea is 80%+ NPS + Sahak Pension + policy capital — so Korean PE inherits some social/economic mandates. Sourcing: US runs 70-80% banker-driven auctions; Korea runs 50-70% proprietary — relationship-driven society shows up directly in deal sourcing."}</p>
              <p>{ko
                ? "또 한 가지 큰 차이가 Industry focus. 미국은 sector-agnostic — Tech · Healthcare · Consumer · Industrial 다양. 한국은 화학 · 식음료 · 헬스케어 · 산업재 비중이 압도적인데 이게 \"재벌 carve-out\" 의 자연스러운 결과예요. SK · LG · 두산 같은 그룹사가 비주력 사업부를 매각하면 그게 한국 PE 시장의 가장 큰 deal source. 그래서 한국 PE는 \"industrial buyout\" 색채가 강합니다."
                : "Another big gap: industry focus. US PE is sector-agnostic — tech, healthcare, consumer, industrial all featured. Korea is dominated by chemicals, F&B, healthcare, and industrials — a natural consequence of chaebol carve-outs. When SK, LG, or Doosan sells non-core units, that's Korean PE's biggest deal source. So Korean PE leans more 'industrial buyout' in character."}</p>
            </div>

            {/* KR vs US matrix */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-x-auto">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "한국 vs 미국 — 7항목 비교 매트릭스" : "Korea vs US — 7-item comparison matrix"}
              </p>
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 pr-3 font-semibold text-gray-500 dark:text-gray-400 w-[20%]"></th>
                    <th className="text-left py-2 pr-3 font-semibold" style={{ color: BLUE }}>{ko ? "미국 시장" : "US market"}</th>
                    <th className="text-left py-2 font-semibold" style={{ color: RED }}>{ko ? "한국 시장" : "Korea market"}</th>
                  </tr>
                </thead>
                <tbody>
                  {KR_US_COMPARE.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <td className="py-2.5 pr-3 text-gray-500 dark:text-gray-400 align-top text-[10.5px]">{ko ? c.koItem : c.enItem}</td>
                      <td className="py-2.5 pr-3 text-gray-700 dark:text-gray-300 align-top">{ko ? c.us : c.enUs}</td>
                      <td className="py-2.5 text-gray-700 dark:text-gray-300 align-top">{ko ? c.kr : c.enKr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — 시리즈 마무리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Fund 시리즈 6챕터를 마무리하며" : "Wrapping the Fund series"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Fund 시리즈는 \"자본이 LP에서 GP를 거쳐 portfolio company까지 어떻게 흘러가는가\" 의 전 과정을 봤어요. Ch.1에서 LP가 누구이고 왜 PE/VC에 출자하는지 (7 archetype + Illiquidity Premium), Ch.2에서 출자 계약 LPA의 19개 핵심 조항과 mechanics, Ch.3에서 fund 종류와 구조 (전략 8가지 + 한국 PEF/신기술조합/모태펀드), Ch.4에서 자금이 실제로 운용되는 lifecycle (Sourcing 50:1 + DD + Exit), Ch.5에서 LP/GP 경제학 (Waterfall + 4 지표 + Quartile gap), 그리고 이번 챕터에서 글로벌 시장 분포와 한국·미국 plаyer 도감까지."
                : "The series walked the full path of capital — LP to GP to portfolio company. Ch.1 covered who LPs are and why they commit to PE/VC (7 archetypes + illiquidity premium). Ch.2 unpacked the LPA's 19 key terms and mechanics. Ch.3 mapped fund types and structures (8 strategies + Korea's PEF, NTV vehicles, KVIC). Ch.4 walked the deployment lifecycle (sourcing 50:1, DD, exit). Ch.5 covered LP/GP economics (waterfall, four metrics, quartile gap). And this chapter laid out the global market and the Korea/US player atlas."}</p>
              <p>{ko
                ? "시리즈의 가장 큰 takeaway가 \"PE/VC는 manager selection의 게임\" 이라는 점이에요. Top quartile 17% vs Bottom quartile 6% — 같은 \\$1B 출자가 LP profit \\$1.5B vs \\$160M (9.4x) 차이를 만들어요. 이게 한국 NPS · Yale Endowment 같은 정상급 LP가 manager selection에 부서 절반을 쓰는 이유고, 동시에 top-tier GP가 fundraising 할 때마다 oversubscribe 되는 이유."
                : "The biggest takeaway: PE/VC is a manager selection game. Top quartile 17% vs bottom quartile 6% — same $1B commit producing $1.5B vs $160M of LP profit (9.4×). That's why Korea's NPS and Yale Endowment dedicate half their staff to manager selection, and why top-tier GPs over-subscribe every fundraise."}</p>
              <p>{ko
                ? "한국 시장 관점에서 보면 — 한국 PE/VC는 글로벌 시장의 1.5% 비중이지만 NPS의 글로벌 anchor LP 지위와 MBK · 알토스 등의 portfolio quality 때문에 글로벌 영향력이 비중을 훨씬 넘어요. Junior 입장에서 한국 PE/VC career를 시작하면 \"작은 시장 안에서 큰 player가 되는\" 옵션이 매력적이고, 글로벌 firm Asia office에 들어가면 \"큰 시장 안에서 다양한 deal을 보는\" 옵션이 매력적. 두 path가 사실상 별개 ecosystem이고, 각자의 trade-off가 있어요."
                : "From the Korean side: Korea is 1.5% of global PE/VC AUM, but global influence punches above weight because of NPS's anchor LP status and MBK / Altos portfolio quality. For juniors starting a Korean PE/VC career, 'become a major player in a smaller market' is the appeal. Joining a global firm's Asia office offers 'see diverse deals in a larger market.' Two separate ecosystems with different trade-offs."}</p>
              <p>{ko
                ? "이로써 Fund 시리즈 6챕터 종료. Deal Story에서는 이 외에도 M&A · Valuation · FDD · Modelling · LBO 5개 시리즈를 통해 deal 자체의 mechanics를 다뤘으니, 두 축 (deal-level + capital-flow level) 을 함께 보면 finance industry의 전체 그림이 보일 거예요."
                : "Series wraps here. Deal Story also covers deal-level mechanics through M&A, Valuation, FDD, Modelling, and LBO series. Reading both axes together — deal-level + capital-flow level — paints the full picture of the finance industry."}</p>
            </div>
          </motion.section>

          {/* Series complete */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "시리즈 종료" : "Series complete"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Fund 시리즈 — 6챕터 완결" : "Fund series — six chapters wrapped"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Ch.1 LP overview · Ch.2 LPA mechanics · Ch.3 Fund types · Ch.4 Investment lifecycle · Ch.5 LP/GP economics · Ch.6 Market & players. Capital이 LP에서 portfolio까지 흐르는 전 과정."
                  : "Ch.1 LP overview · Ch.2 LPA mechanics · Ch.3 fund types · Ch.4 investment lifecycle · Ch.5 LP/GP economics · Ch.6 market and players. The full path of capital from LP to portfolio."}
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
