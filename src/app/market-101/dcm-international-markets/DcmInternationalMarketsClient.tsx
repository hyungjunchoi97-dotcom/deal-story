"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";

// ─── Types ────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ─── Animation constants ──────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";
const accentLight = "#ccfbf1";

// ─── Series nav ───────────────────────────────────────────────────────────────
const DCM_SERIES = [
  { slug: "dcm-overview",               ch: 0, title: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"    },
  { slug: "dcm-issuers",                ch: 1, title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"    },
  { slug: "dcm-investors",              ch: 2, title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"  },
  { slug: "dcm-bond-products",          ch: 3, title: (ko: boolean) => ko ? "Ch.3 상품"          : "Ch.3 Products"   },
  { slug: "dcm-international-markets",  ch: 4, title: (ko: boolean) => ko ? "Ch.4 국제채"        : "Ch.4 Intl"       },
  { slug: "dcm-deal-process",           ch: 5, title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"   : "Ch.5 Process"    },
  { slug: "dcm-pricing",                ch: 6, title: (ko: boolean) => ko ? "Ch.6 프라이싱"      : "Ch.6 Pricing"    },
  { slug: "dcm-structure-regulation",   ch: 7, title: (ko: boolean) => ko ? "Ch.7 구조·제도"     : "Ch.7 Regulation" },
];
const thisCh = 4;

// ─── International market data ────────────────────────────────────────────────
const INTL_MARKETS = [
  {
    id: "eurobond",
    name: "Eurobond",
    flag: "🌍",
    currency: (ko: boolean) => ko ? "USD / EUR / GBP / JPY (모든 통화 가능)" : "USD / EUR / GBP / JPY (any currency)",
    jurisdiction: (ko: boolean) => ko
      ? "역외 발행 — 특정 국가 규제 외 (보통 룩셈부르크·아일랜드 상장)"
      : "Offshore — outside any single jurisdiction (listed Luxembourg/Ireland)",
    size: (ko: boolean) => ko ? "시장 규모 $25조+ — 국제채 최대 시장" : "$25T+ — largest international bond market",
    investors: (ko: boolean) => ko
      ? "글로벌 AM·보험사·연기금·중앙은행 — 국적 무관"
      : "Global AM, insurers, pensions, central banks — any nationality",
    advantages: (ko: boolean) => ko
      ? "① 가장 넓은 투자자 풀 ② 빠른 실행(규제 등록 없음) ③ 통화 선택 자유"
      : "① Widest investor pool ② Fast execution (no registration) ③ Currency flexibility",
    disadvantages: (ko: boolean) => ko
      ? "① 미국 투자자 참여 제한(144A 필요) ② Withholding tax 일부 이슈"
      : "① US investor restriction (144A needed) ② Some withholding tax issues",
    caseStudy: { slug: "korea-1998-external-bond", label: (ko: boolean) => ko ? "케이스: 한국 1998 글로벌본드 →" : "Case: Korea 1998 Global Bond →" },
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    mapX: "50%",
    mapRegion: (ko: boolean) => ko ? "전 세계" : "Global",
  },
  {
    id: "yankee",
    name: "Yankee Bond",
    flag: "🇺🇸",
    currency: (ko: boolean) => ko ? "USD (미국 내 발행)" : "USD (issued in US)",
    jurisdiction: (ko: boolean) => ko
      ? "미국 SEC 등록 필요 (Form F-3/S-3) — 미국 법률 적용"
      : "SEC registration required (Form F-3/S-3) — US law governs",
    size: (ko: boolean) => ko ? "시장 규모 $5조+ — 외국기업의 USD IG 발행 핵심" : "$5T+ — key market for foreign IG USD issuance",
    investors: (ko: boolean) => ko
      ? "미국 보험사·연기금·자산운용사 — 가장 깊은 USD 투자자풀"
      : "US insurers, pensions, asset managers — deepest USD investor pool",
    advantages: (ko: boolean) => ko
      ? "① 가장 깊은 USD 유동성 ② 미국 투자자 직접 접근 ③ 장기물(30yr) 수요"
      : "① Deepest USD liquidity ② Direct US investor access ③ Long-dated (30yr) demand",
    disadvantages: (ko: boolean) => ko
      ? "① SEC 등록 비용·시간 ② Quarterly reporting 의무 ③ 미국 법적 책임"
      : "① SEC registration cost/time ② Quarterly reporting obligation ③ US legal liability",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-slate-200 dark:border-slate-700",
    mapX: "20%",
    mapRegion: (ko: boolean) => ko ? "북미" : "North America",
  },
  {
    id: "samurai",
    name: "Samurai Bond",
    flag: "🇯🇵",
    currency: (ko: boolean) => ko ? "JPY (일본 내 발행)" : "JPY (issued in Japan)",
    jurisdiction: (ko: boolean) => ko
      ? "일본 FSA 등록·JFSA 규정 적용"
      : "Japan FSA registration, JFSA rules",
    size: (ko: boolean) => ko ? "시장 규모 $0.5조+ — 엔화 조달 특화" : "$0.5T+ — specialized JPY funding",
    investors: (ko: boolean) => ko
      ? "일본 생보·지방은행·신탁은행 — 엔화 자산 선호"
      : "Japanese life insurers, regional banks, trust banks",
    advantages: (ko: boolean) => ko
      ? "① 엔화 장기 저금리 조달 ② 일본 투자자 다변화 ③ CCS(통화스왑)으로 USD/EUR 차환"
      : "① Long-duration JPY at low rates ② Japanese investor diversification ③ CCS to swap to USD/EUR",
    disadvantages: (ko: boolean) => ko
      ? "① 발행 절차 복잡·시간 소요 ② 엔화 변동 헤지비용 ③ 상대적으로 작은 시장"
      : "① Complex process, time-consuming ② JPY hedging costs ③ Relatively small market",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    mapX: "78%",
    mapRegion: (ko: boolean) => ko ? "일본" : "Japan",
  },
  {
    id: "formosa",
    name: "Formosa Bond",
    flag: "🇹🇼",
    currency: (ko: boolean) => ko ? "USD·EUR·기타 (대만 내 외화 발행)" : "USD, EUR, others (foreign currency, listed Taiwan)",
    jurisdiction: (ko: boolean) => ko
      ? "대만 FSC 등록·대만 증권거래소 상장"
      : "Taiwan FSC registration, TWSE listed",
    size: (ko: boolean) => ko ? "시장 규모 $0.3조+ — 대만 보험사 외화 수요 특화" : "$0.3T+ — specialized for Taiwan insurer FX demand",
    investors: (ko: boolean) => ko
      ? "대만 생보·투신·국내 기관"
      : "Taiwan life insurers, investment trusts, domestic institutions",
    advantages: (ko: boolean) => ko
      ? "① 대만 보험사 외화 자산 수요 직접 접근 ② 아시아 시간대 ③ CDS/헤지 용이"
      : "① Direct access to Taiwan insurer FX demand ② Asia timezone ③ Easy CDS/hedge",
    disadvantages: (ko: boolean) => ko
      ? "① 대만 규제 요건 ② 투자자풀 좁음 ③ 국제 명성 낮음"
      : "① Taiwan regulatory requirements ② Narrow investor pool ③ Lower international profile",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-700",
    mapX: "75%",
    mapRegion: (ko: boolean) => ko ? "대만" : "Taiwan",
  },
  {
    id: "arirang",
    name: "Arirang Bond",
    flag: "🇰🇷",
    currency: (ko: boolean) => ko ? "KRW (한국 내 외국인 발행)" : "KRW (issued by foreigners in Korea)",
    jurisdiction: (ko: boolean) => ko
      ? "금융감독원 규정·한국거래소 상장"
      : "FSS Korea rules, KRX listed",
    size: (ko: boolean) => ko ? "시장 규모 $0.1조 — 외국 발행사의 KRW 조달" : "$0.1T — foreign issuer KRW funding",
    investors: (ko: boolean) => ko ? "한국 기관·개인·연기금" : "Korean institutions, retail, pensions",
    advantages: (ko: boolean) => ko
      ? "① KRW 유동성 직접 접근 ② 한국 투자자 다변화"
      : "① Direct KRW liquidity access ② Korean investor diversification",
    disadvantages: (ko: boolean) => ko
      ? "① 작은 시장 ② 높은 KRW 금리 ③ KRW 조달 후 통화스왑 비용"
      : "① Small market ② Higher KRW rates ③ Currency swap cost after issuance",
    caseStudy: null as null | { slug: string; label: (ko: boolean) => string },
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    mapX: "76%",
    mapRegion: (ko: boolean) => ko ? "한국" : "Korea",
  },
];

// ─── JSON-LD data ─────────────────────────────────────────────────────────────
const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DCM Ch.4 — 국제채 지형도: Yankee·Eurobond·Samurai·Formosa·Arirang",
  description: "국제채 시장 완전 지형도: Yankee본드(미국 내 USD 발행)부터 유로본드·사무라이·포르모사·아리랑까지. 통화·규제·투자자베이스 차이와 발행 시장 선택 기준을 해부합니다.",
  url: "https://deal-story.com/market-101/dcm-international-markets",
  datePublished: "2026-05-26",
  author: { "@type": "Organization", name: "Deal Story" },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "유로본드와 Eurobond는 다른 건가요? 유로화 채권을 의미하나요?",
      acceptedAnswer: { "@type": "Answer", text: "아닙니다. 유로본드는 발행자의 국내 시장 외부에서 발행되는 채권을 통칭하며 유로화와 무관합니다." },
    },
    {
      "@type": "Question",
      name: "사무라이 본드를 발행하는 이유는 일본 투자자를 원하기 때문인가요?",
      acceptedAnswer: { "@type": "Answer", text: "투자자 다변화도 있지만 더 큰 이유는 엔화 저금리를 이용한 금리 차익(CCS 통화스왑)입니다." },
    },
    {
      "@type": "Question",
      name: "야키 본드(Yankee)와 유로본드의 가장 큰 차이는 규제인가요?",
      acceptedAnswer: { "@type": "Answer", text: "네, 규제가 가장 큰 실질적 차이입니다. Yankee는 SEC 등록이 필요하지만 미국 투자자를 직접 접근할 수 있습니다." },
    },
    {
      "@type": "Question",
      name: "아리랑 본드 시장은 왜 작은가요?",
      acceptedAnswer: { "@type": "Answer", text: "KRW 시장 크기 한계와 외국인 발행사의 실질적 수요 부족, CCS 비용 등이 원인입니다." },
    },
    {
      "@type": "Question",
      name: "글로벌 발행사는 어떻게 발행 시장을 결정합니까?",
      acceptedAnswer: { "@type": "Answer", text: "스프레드 레벨, CCS 비용, 규제·법무 비용, 실행 시간, 투자자 다변화 가치 등 all-in cost를 비교해 결정합니다." },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Bank for International Settlements", title: "International Debt Securities — Statistical Tables", url: "https://www.bis.org/statistics/secstats.htm", source: "BIS, 2024" },
  { id: 2, author: "ICMA", title: "The European DCM Market — Eurobond Market Overview and Trends", url: "https://www.icmagroup.org/resources/icma-publications/", source: "ICMA, 2024" },
  { id: 3, author: "Japan Securities Dealers Association (JSDA)", title: "Samurai Bond Issuance Statistics and Market Overview", url: "https://www.jsda.or.jp/en/statistics/index.html", source: "JSDA, 2024" },
  { id: 4, author: "IMF", title: "Global Financial Stability Report — International Capital Flows", url: "https://www.imf.org/en/Publications/GFSR", source: "IMF, 2024" },
  { id: 5, author: "Asian Development Bank (ADB)", title: "Asia Bond Monitor — Regional International Bond Market Trends", url: "https://asianbondsonline.adb.org/publications/asia-bond-monitor/", source: "ADB, 2024" },
];
export default function DcmInternationalMarketsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const prev = DCM_SERIES.find(s => s.ch === thisCh - 1);
  const next = DCM_SERIES.find(s => s.ch === thisCh + 1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <Header />

      {/* ── Sticky Series Nav ── */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        <div className="flex items-center gap-1 px-4 py-2 min-w-max mx-auto max-w-6xl">
          {DCM_SERIES.map(item => (
            <Link
              key={item.slug}
              href={`${base}/${item.slug}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
              style={
                item.ch === thisCh
                  ? { background: accent, color: "#fff", fontWeight: 700 }
                  : { color: "#6b7280" }
              }
            >
              {item.title(ko)}
            </Link>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-24 pt-10">

        {/* ── Breadcrumb ── */}
        <motion.nav
          className="text-xs text-gray-400 mb-6 flex items-center gap-1"
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
        >
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span>/</span>
          <Link href={base} className="hover:text-teal-600">Market 101</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300">DCM Ch.4</span>
        </motion.nav>

        {/* ── Hero ── */}
        <motion.section
          className="mb-14"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: accentLight, color: accent }}
            >
              Ch.4 · {ko ? "국제채 시장" : "International Markets"}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">⏱ {ko ? "14분 읽기" : "14 min read"}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.05)}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
          >
            {ko
              ? "국제채 지형도: Yankee·Eurobond·Samurai·Formosa·Arirang"
              : "International Bond Map: Yankee · Eurobond · Samurai · Formosa · Arirang"}
          </motion.h1>

          <motion.p
            variants={fadeUp(0.1)}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {ko
              ? "현대 채권 발행사는 국내 시장 하나에 묶여 있지 않습니다. 한국 기업이 뉴욕에서 달러를 조달하고, 도쿄에서 엔화를 빌린 뒤 통화스왑으로 달러로 전환하며, 대만 보험사에 유로화 채권을 파는 시대입니다. 각 시장은 고유한 통화·규제·투자자 기반을 갖고 있어 발행사는 전략적 선택을 해야 합니다. 이 챕터에서는 5개 주요 국제채 시장의 핵심 차이와 선택 기준을 해부합니다."
              : "Modern bond issuers are not confined to a single domestic market. A Korean company can raise dollars in New York, borrow yen in Tokyo and swap to dollars via CCS, and sell euro bonds to Taiwanese insurers. Each market has unique currencies, regulations, and investor bases, requiring strategic choices. This chapter dissects the key differences and selection criteria for the five major international bond markets."}
          </motion.p>
        </motion.section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        {/* ── 3-Stat Callout ── */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          {[
            {
              stat: "5개",
              label: (ko: boolean) => ko ? "주요 국제채 시장" : "Major Intl Bond Markets",
              sub: (ko: boolean) => ko ? "Eurobond·Yankee·Samurai·Formosa·Arirang" : "Eurobond·Yankee·Samurai·Formosa·Arirang",
            },
            {
              stat: "$25T+",
              label: (ko: boolean) => ko ? "유로본드 시장 규모" : "Eurobond Market Size",
              sub: (ko: boolean) => ko ? "국제채 최대 시장" : "Largest international market",
            },
            {
              stat: "CCS",
              label: (ko: boolean) => ko ? "통화스왑으로 차익거래" : "Cross-Currency Arbitrage",
              sub: (ko: boolean) => ko ? "JPY 0.3% → USD SOFR+20bp" : "JPY 0.3% → USD SOFR+20bp",
            },
          ].map(item => (
            <motion.div
              key={item.stat}
              variants={fadeUp()}
              className="rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
            >
              <div className="text-3xl font-black mb-1" style={{ color: accent }}>{item.stat}</div>
              <div className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-1">{item.label(ko)}</div>
              <div className="text-xs text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Why International? ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "왜 국내 채권만으로는 부족한가?" : "Why Is the Domestic Market Not Enough?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {ko
              ? "규모가 작은 국가의 기업이 대규모 자금을 조달하려 할 때 국내 채권 시장만으로는 한계가 있습니다. 한국 회사채 시장의 연간 발행 규모는 약 $150억 수준입니다. 반면 한국 대기업들이 글로벌 유로본드 시장에서 단 한 번의 딜로 $10억을 조달하는 것은 일상적입니다. 국제채 시장이 필요한 이유는 네 가지로 요약됩니다."
              : "When companies in smaller economies need to raise large sums, the domestic bond market alone has limitations. Korea's annual corporate bond issuance is around $15bn. Meanwhile, Korean conglomerates routinely raise $1bn in a single Eurobond deal. Four key reasons drive the need for international bond markets."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🌐",
                title: (ko: boolean) => ko ? "투자자풀 다변화" : "Investor Diversification",
                desc: (ko: boolean) => ko
                  ? "국내 투자자에게만 의존하면 특정 투자자 그룹이 포화 상태가 될 수 있습니다. 국제 발행으로 유럽·미국·아시아 투자자를 동시에 접근해 오더북 두께를 높이고 조달 가격을 낮춥니다."
                  : "Relying only on domestic investors risks saturation of specific investor groups. International issuance simultaneously accesses European, US, and Asian investors, deepening the order book and improving pricing.",
              },
              {
                icon: "💱",
                title: (ko: boolean) => ko ? "통화 다변화" : "Currency Diversification",
                desc: (ko: boolean) => ko
                  ? "사업 글로벌화에 따라 달러·유로·엔화 등 다양한 통화의 부채가 필요합니다. 해당 통화 시장에서 직접 발행하면 자연 헤지(natural hedge)가 됩니다."
                  : "Globalized business operations require liabilities in dollars, euros, yen, and more. Issuing directly in the relevant currency market provides a natural hedge.",
              },
              {
                icon: "📉",
                title: (ko: boolean) => ko ? "금리 차익거래" : "Rate Arbitrage",
                desc: (ko: boolean) => ko
                  ? "각국 금리 수준은 다릅니다. 일본 저금리를 이용해 JPY로 발행 후 CCS(통화스왑)로 USD로 전환하면 USD 시장 직접 발행보다 낮은 조달 비용을 달성할 수 있습니다."
                  : "Interest rates differ across countries. Issuing in low-rate JPY and swapping to USD via CCS can achieve lower funding costs than issuing directly in USD markets.",
              },
              {
                icon: "⚖️",
                title: (ko: boolean) => ko ? "규제 차익거래" : "Regulatory Arbitrage",
                desc: (ko: boolean) => ko
                  ? "유로본드 시장은 특정 국가의 규제를 받지 않아 발행 속도가 매우 빠릅니다. 반면 Yankee는 SEC 등록이 필요하지만 미국 기관투자자 접근성이 크게 높아집니다. 발행사는 규제 부담과 접근성을 trade-off합니다."
                  : "The Eurobond market is not subject to any single country's regulations, enabling very fast execution. Yankee requires SEC registration but dramatically improves US institutional investor access. Issuers trade off regulatory burden against investor access.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-1">{item.title(ko)}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc(ko)}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Market Map ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "국제채 시장 지도" : "International Bond Market Map"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {ko
              ? "5개 주요 국제채 시장의 지리적 위치와 규모를 비교합니다."
              : "Geographic context and size comparison for the 5 major international bond markets."}
          </p>

          {/* Stylized world strip */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900" style={{ height: "200px" }}>
            {/* Continents as abstract blobs */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bg-green-400 rounded-full" style={{ left: "12%", top: "20%", width: "18%", height: "60%" }} />
              <div className="absolute bg-green-400 rounded-full" style={{ left: "35%", top: "15%", width: "22%", height: "65%" }} />
              <div className="absolute bg-green-400 rounded-full" style={{ left: "64%", top: "18%", width: "18%", height: "55%" }} />
              <div className="absolute bg-green-400 rounded-3xl" style={{ left: "83%", top: "25%", width: "12%", height: "45%" }} />
            </div>

            {/* Market pins */}
            {[
              { id: "yankee",   x: "18%", label: "🇺🇸 Yankee",   size: "$5T",   color: "#94a3b8" },
              { id: "eurobond", x: "42%", label: "🌍 Eurobond",  size: "$25T+", color: "#22d3ee" },
              { id: "arirang",  x: "70%", label: "🇰🇷 Arirang",  size: "$0.1T", color: "#14b8a6" },
              { id: "samurai",  x: "75%", label: "🇯🇵 Samurai",  size: "$0.5T", color: "#f87171" },
              { id: "formosa",  x: "73%", label: "🇹🇼 Formosa",  size: "$0.3T", color: "#86efac" },
            ].map(pin => (
              <div
                key={pin.id}
                className="absolute flex flex-col items-center"
                style={{ left: pin.x, top: "15%", transform: "translateX(-50%)" }}
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-lg"
                  style={{ background: pin.color }}
                />
                <div
                  className="mt-1 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                >
                  {pin.label}
                </div>
                <div
                  className="mt-0.5 text-[10px] font-bold px-2 rounded-full"
                  style={{ background: pin.color, color: "#fff" }}
                >
                  {pin.size}
                </div>
              </div>
            ))}

            {/* Asia cluster label */}
            <div
              className="absolute bottom-3 right-4 text-white text-xs opacity-60 italic"
            >
              {ko ? "아시아 시장 (한국·일본·대만)은 지역 클러스터" : "Asia cluster: Korea · Japan · Taiwan"}
            </div>
          </div>
        </motion.section>

        {/* ── Market Cards ── */}
        <motion.section
          className="mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "5대 국제채 시장 카드" : "5 International Bond Market Cards"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            {ko
              ? "각 시장의 통화, 규제, 투자자 기반, 장단점을 카드로 비교합니다."
              : "Compare each market's currency, regulation, investor base, and pros/cons."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INTL_MARKETS.map(item => (
              <motion.div
                key={item.id}
                variants={fadeUp()}
                className={`rounded-2xl border p-5 ${item.bg} ${item.border}`}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">{item.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.size(ko)}</span>
                  </div>
                </div>

                {/* Card body */}
                <dl className="space-y-2 text-xs mb-3">
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "통화" : "Currency"}</dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.currency(ko)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "관할권·규제" : "Jurisdiction & Regulation"}</dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.jurisdiction(ko)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-[10px]">{ko ? "주요 투자자" : "Key Investors"}</dt>
                    <dd className="text-gray-700 dark:text-gray-200 mt-0.5">{item.investors(ko)}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-white/60 dark:bg-white/5 rounded-lg p-2">
                      <div className="text-green-600 font-semibold text-[10px] mb-1">{ko ? "장점" : "Advantages"}</div>
                      <p className="text-gray-700 dark:text-gray-200 text-[10px] leading-relaxed">{item.advantages(ko)}</p>
                    </div>
                    <div className="bg-white/60 dark:bg-white/5 rounded-lg p-2">
                      <div className="text-red-500 font-semibold text-[10px] mb-1">{ko ? "단점" : "Disadvantages"}</div>
                      <p className="text-gray-700 dark:text-gray-200 text-[10px] leading-relaxed">{item.disadvantages(ko)}</p>
                    </div>
                  </div>
                </dl>

                {item.caseStudy && (
                  <Link
                    href={`/market/${item.caseStudy.slug}`}
                    className="text-xs font-semibold inline-block"
                    style={{ color: accent }}
                  >
                    {item.caseStudy.label(ko)}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>


          {/* ── Rate Benchmarks deep-dive link ── */}
          <div
            className="mt-6 p-4 rounded-xl border flex items-start gap-3"
            style={{ borderColor: "#ccfbf1", background: "#f0fdf9" }}
          >
            <span className="text-xl mt-0.5">📐</span>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">
                {ko ? "CCS의 구조와 Basis Spread가 궁금하신가요?" : "Want to understand CCS structure and Basis Spread in depth?"}
              </p>
              <Link
                href={`${base}/dcm-rate-benchmarks`}
                className="text-sm font-medium hover:underline"
                style={{ color: "#14b8a6" }}
              >
                {ko ? "DCM Special — SOFR·LIBOR·Mid-Swap·통화스왑 완전 해부 →" : "DCM Special — SOFR, LIBOR, Mid-Swap & CCS Deep-Dive →"}
              </Link>
            </div>
          </div>

        {/* ── CCS Explainer ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "통화스왑(CCS): 왜 엔화로 달러를 조달하는가" : "Cross-Currency Swap (CCS): Why Borrow Yen to Fund in Dollars?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {ko
              ? "한국 대기업 재무팀장이 CFO에게 이런 보고를 할 수 있습니다: '오늘 도쿄에서 10년 JPY 사무라이 본드를 발행해 USD SOFR+20bp로 조달했습니다.' CFO는 의아할 것입니다: 왜 엔화 채권을 발행하고 달러가 필요한가? 이 질문이 Cross-Currency Swap(CCS)의 본질입니다."
              : "A Korean conglomerate CFO might receive this report: 'We issued a 10-year JPY Samurai bond in Tokyo today and locked in USD SOFR+20bp.' The CFO might wonder: why issue yen bonds if we need dollars? This question gets at the essence of Cross-Currency Swaps (CCS)."}
          </p>

          {/* Step-by-step CCS flow */}
          <div className="space-y-3 mb-6">
            <div
              className="rounded-xl p-4 border"
              style={{ background: accentLight, borderColor: accent }}
            >
              <h4 className="font-bold text-sm mb-2" style={{ color: accent }}>
                {ko ? "CCS 3단계 메커니즘" : "CCS 3-Step Mechanism"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  {
                    step: "Step 1",
                    title: (ko: boolean) => ko ? "엔화 발행" : "JPY Issuance",
                    desc: (ko: boolean) => ko
                      ? "일본 투자자에게 JPY 채권 발행. 쿠폰 0.3%, 10년 만기. ¥100억 조달."
                      : "Issue JPY bond to Japanese investors. Coupon 0.3%, 10yr. Raise ¥10bn.",
                  },
                  {
                    step: "Step 2",
                    title: (ko: boolean) => ko ? "CCS 체결" : "CCS Trade",
                    desc: (ko: boolean) => ko
                      ? "스왑 은행과 CCS 체결: ¥100억을 USD로 교환 (현재 환율). 10년간 USD SOFR+20bp 지급, JPY 0.3% 수취."
                      : "Execute CCS with swap bank: exchange ¥10bn for USD. Pay USD SOFR+20bp over 10yr, receive JPY 0.3%.",
                  },
                  {
                    step: "Step 3",
                    title: (ko: boolean) => ko ? "만기 역교환" : "Maturity Exchange",
                    desc: (ko: boolean) => ko
                      ? "10년 후 만기 시 USD 원금을 스왑 은행에 돌려주고 JPY를 받아 채권 상환."
                      : "At maturity, return USD principal to swap bank, receive JPY to repay bondholders.",
                  },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 border border-teal-100">
                    <div className="text-teal-600 font-bold text-[10px] mb-1">{s.step}</div>
                    <div className="font-semibold text-gray-800 mb-1 text-xs">{s.title(ko)}</div>
                    <p className="text-gray-600 text-[10px] leading-relaxed">{s.desc(ko)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cost comparison table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900 mb-4">
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                {ko ? "실제 비용 비교 예시 (2025년 시장 가정)" : "Real Cost Comparison Example (2025 market assumptions)"}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "발행 경로" : "Issuance Route"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "명목 금리" : "Nominal Rate"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "CCS 비용" : "CCS Cost"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "USD 올인비용" : "USD All-in Cost"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    {
                      route: (ko: boolean) => ko ? "유로본드 USD 직접 발행" : "Eurobond USD direct",
                      nominal: "SOFR+80bp",
                      ccs: ko ? "없음" : "N/A",
                      allin: "SOFR+80bp",
                      highlight: false,
                    },
                    {
                      route: (ko: boolean) => ko ? "사무라이 JPY → CCS USD" : "Samurai JPY → CCS USD",
                      nominal: "JPY 0.3%",
                      ccs: ko ? "+CCS 기준스왑 -60bp 절감" : "+CCS basis -60bp saving",
                      allin: "SOFR+20bp",
                      highlight: true,
                    },
                    {
                      route: (ko: boolean) => ko ? "Yankee USD SEC 등록" : "Yankee USD (SEC registered)",
                      nominal: "SOFR+70bp",
                      ccs: ko ? "없음" : "N/A",
                      allin: "SOFR+70bp",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={row.highlight ? "bg-teal-50 dark:bg-teal-900/20" : ""}
                    >
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-200 font-medium">{row.route(ko)}</td>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-200">{row.nominal}</td>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-200">{row.ccs}</td>
                      <td className="px-4 py-2.5 font-bold" style={row.highlight ? { color: accent } : {}}>
                        {row.allin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {ko
              ? "사무라이 경로로 SOFR+20bp를 달성하는 핵심은 '기준 스왑 스프레드(Basis Swap Spread)'입니다. 특정 통화 쌍의 수급 불균형을 반영하는 이 스프레드는 시장 상황에 따라 변동합니다. JPY/USD 기준 스프레드가 -60bp라면 JPY에서 USD로 스왑 시 60bp를 절감할 수 있지만, 기준 스프레드가 역전될 경우 이 이점은 사라집니다. 따라서 발행 타이밍은 CCS 기준 스프레드 수준을 면밀히 모니터링해 결정됩니다."
              : "The key to achieving SOFR+20bp via the Samurai route is the 'Basis Swap Spread.' This spread reflects supply-demand imbalances for specific currency pairs and fluctuates with market conditions. A JPY/USD basis of -60bp saves 60bp when swapping from JPY to USD, but if the basis reverses, the advantage disappears. Issuance timing is therefore determined by close monitoring of CCS basis spread levels."}
          </p>
        </motion.section>

        {/* ── Market Selection Guide ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {ko ? "어떤 시장을 골라야 하나? 발행 시장 선택 가이드" : "Which Market Should You Choose? Issuance Market Selection Guide"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {ko
              ? "발행사가 글로벌 채권을 발행할 때, 뱅커는 '어느 시장에서 얼마에 발행할 수 있는가'를 동시에 여러 시장에서 비교해 최적안을 제시합니다. 이 과정에서 고려하는 4가지 핵심 기준을 순서대로 살펴봅니다."
              : "When an issuer launches a global bond, bankers simultaneously compare 'what rate can we achieve in which market' across multiple venues and present the optimal recommendation. Here are the four core criteria considered in order."}
          </p>

          <div className="space-y-4">
            {[
              {
                q: (ko: boolean) => ko ? "① 어떤 통화로 자금이 필요한가?" : "① What currency do you actually need?",
                content: (ko: boolean) => ko
                  ? "USD/EUR 조달이 목적이라면 유로본드 또는 Yankee가 기본입니다. JPY 자산(일본 사업)을 보유했다면 사무라이 직접 발행이 자연 헤지입니다. KRW가 필요하다면 아리랑을 검토하지만 실질 수요는 제한적입니다."
                  : "If you need USD/EUR, Eurobond or Yankee is the baseline. If you hold JPY assets (Japan business), direct Samurai issuance provides a natural hedge. If you need KRW, consider Arirang, but practical demand is limited.",
                recommend: (ko: boolean) => ko ? "USD 필요 → Eurobond 또는 Yankee / JPY 필요 → Samurai" : "Need USD → Eurobond or Yankee / Need JPY → Samurai",
              },
              {
                q: (ko: boolean) => ko ? "② 발행 속도가 중요한가?" : "② Does execution speed matter?",
                content: (ko: boolean) => ko
                  ? "시장 창구(window)가 짧거나 M&A 딜 클로징에 맞춰 빠른 자금 조달이 필요하다면 유로본드가 최적입니다. 규제 등록 없이 1~3일 내 북빌딩이 가능합니다. Yankee는 SEC 등록이 완료되어 있다면 빠르지만, 처음 등록은 수개월이 소요됩니다."
                  : "If the market window is narrow or a swift funding match to an M&A closing is needed, Eurobond is optimal. No regulatory registration; bookbuilding can happen within 1–3 days. Yankee is fast if SEC registration is already in place, but initial registration takes months.",
                recommend: (ko: boolean) => ko ? "속도 중시 → Eurobond (144A/Reg S)" : "Speed priority → Eurobond (144A/Reg S)",
              },
              {
                q: (ko: boolean) => ko ? "③ 미국 투자자 접근이 전략적으로 중요한가?" : "③ Is US investor access strategically important?",
                content: (ko: boolean) => ko
                  ? "미국 생보사·연기금·뮤추얼펀드는 전 세계에서 가장 깊은 채권 유동성을 제공합니다. 장기(20–30년) 조달이나 대규모 딜($30억+)이라면 Yankee 또는 144A/Reg S 구조가 필수입니다. 미국 투자자는 Reg S만 된 유로본드를 구매할 수 없습니다."
                  : "US life insurers, pensions, and mutual funds provide the world's deepest bond liquidity. For long-dated (20–30yr) or large transactions ($3bn+), Yankee or 144A/Reg S structure is essential. US investors cannot purchase Reg-S-only Eurobonds.",
                recommend: (ko: boolean) => ko ? "미국 투자자 필요 → Yankee 또는 144A/Reg S" : "Need US investors → Yankee or 144A/Reg S",
              },
              {
                q: (ko: boolean) => ko ? "④ CCS 기준 스프레드가 유리한가?" : "④ Is the CCS basis spread favorable?",
                content: (ko: boolean) => ko
                  ? "마지막으로 JPY/USD 또는 EUR/USD CCS 기준 스프레드를 확인합니다. 기준 스프레드가 충분히 마이너스(즉, 저비용 통화 발행 후 전환 시 절감 효과)라면 사무라이·포르모사를 통한 간접 USD/EUR 조달이 직접 발행보다 유리할 수 있습니다. 이 의사결정은 매일 시장 데이터로 업데이트됩니다."
                  : "Finally, check the JPY/USD or EUR/USD CCS basis spread. If the basis is sufficiently negative (i.e., significant savings by issuing in a low-rate currency then swapping), indirect USD/EUR funding via Samurai or Formosa can beat direct issuance. This decision is updated daily with market data.",
                recommend: (ko: boolean) => ko ? "CCS -60bp+ → 사무라이/포르모사 간접 경로 검토" : "CCS -60bp+ → Consider Samurai/Formosa indirect route",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">{item.q(ko)}</h4>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{item.content(ko)}</p>
                  <div
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg inline-block"
                    style={{ background: accentLight, color: accent }}
                  >
                    → {item.recommend(ko)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary decision matrix */}
          <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                {ko ? "발행 시장 선택 매트릭스" : "Market Selection Matrix"}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "시장" : "Market"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "최적 발행사" : "Ideal Issuer"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "장점" : "Key Advantage"}</th>
                    <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">{ko ? "주요 제약" : "Key Constraint"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    {
                      market: "Eurobond",
                      ideal: (ko: boolean) => ko ? "IG 발행사, 신속 조달 필요" : "IG issuers, speed priority",
                      advantage: (ko: boolean) => ko ? "가장 넓은 투자자풀, 빠른 실행" : "Widest pool, fast execution",
                      constraint: (ko: boolean) => ko ? "미국 투자자 144A 필요" : "US investors need 144A",
                    },
                    {
                      market: "Yankee",
                      ideal: (ko: boolean) => ko ? "대형 IG, 장기물 필요 발행사" : "Large IG, long-dated needs",
                      advantage: (ko: boolean) => ko ? "미국 투자자 직접 접근, 장기 수요" : "Direct US access, long-dated demand",
                      constraint: (ko: boolean) => ko ? "SEC 등록 비용·시간" : "SEC registration cost/time",
                    },
                    {
                      market: "Samurai",
                      ideal: (ko: boolean) => ko ? "CCS 유리할 때, JPY 저금리 활용" : "When CCS basis favorable, use low JPY rates",
                      advantage: (ko: boolean) => ko ? "엔화 저금리 + CCS 절감" : "Low JPY rates + CCS savings",
                      constraint: (ko: boolean) => ko ? "복잡한 절차, CCS 기준 변동성" : "Complex process, CCS basis volatility",
                    },
                    {
                      market: "Formosa",
                      ideal: (ko: boolean) => ko ? "대만 보험사 접근 목적 발행사" : "Issuers targeting Taiwan insurers",
                      advantage: (ko: boolean) => ko ? "대만 보험사 외화 수요 직접 접근" : "Direct access to Taiwan insurer FX demand",
                      constraint: (ko: boolean) => ko ? "투자자풀 좁음, 대만 규제" : "Narrow investor pool, Taiwan rules",
                    },
                    {
                      market: "Arirang",
                      ideal: (ko: boolean) => ko ? "한국 투자자 접근 전략적 목적 (국제기구 등)" : "Strategic Korean investor access (multilaterals)",
                      advantage: (ko: boolean) => ko ? "KRW 유동성, 한국 투자자 다변화" : "KRW liquidity, Korean diversification",
                      constraint: (ko: boolean) => ko ? "작은 시장, 높은 KRW 금리" : "Small market, higher KRW rates",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2.5 font-bold text-gray-800 dark:text-gray-100">{row.market}</td>
                      <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300">{row.ideal(ko)}</td>
                      <td className="px-4 py-2.5 text-green-700 dark:text-green-300">{row.advantage(ko)}</td>
                      <td className="px-4 py-2.5 text-red-600 dark:text-red-400">{row.constraint(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 144A / Reg S Note ── */}
        <motion.section
          className="mb-14 rounded-2xl border p-6"
          style={{ background: accentLight, borderColor: accent }}
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h3 className="font-bold text-gray-800 text-base mb-3" style={{ color: accent }}>
            {ko ? "Rule 144A / Reg S: 두 시장을 동시에 커버하는 구조" : "Rule 144A / Reg S: Covering Both Markets Simultaneously"}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {ko
              ? "많은 대형 발행사는 단일 딜에서 유로본드(Reg S)와 Yankee(144A)를 동시에 발행합니다. 이를 '144A/Reg S' 구조라고 부릅니다. 기술적으로 두 개의 ISIN을 발행하지만 동시에 북빌딩하고 동일한 조건으로 발행합니다."
              : "Many large issuers simultaneously execute Eurobond (Reg S) and Yankee (144A) in a single transaction. This is called a '144A/Reg S' structure. Technically two separate ISINs are issued, but bookbuilding happens simultaneously under identical terms."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white rounded-xl p-3">
              <div className="font-semibold text-teal-700 mb-1">{ko ? "Reg S 트랜치" : "Reg S Tranche"}</div>
              <p className="text-gray-600 leading-relaxed">{ko ? "미국 외 투자자 대상. SEC 등록 불필요. 룩셈부르크·아일랜드 상장. 글로벌 AM·보험사·연기금." : "For non-US investors. No SEC registration. Listed in Luxembourg/Ireland. Global AM, insurers, pensions."}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="font-semibold text-teal-700 mb-1">{ko ? "144A 트랜치" : "144A Tranche"}</div>
              <p className="text-gray-600 leading-relaxed">{ko ? "미국 QIB(적격기관투자자) 대상. SEC 등록 면제 규정 활용. 동일 조건·동일 딜 안에서 판매." : "For US QIBs (Qualified Institutional Buyers). Uses SEC registration exemption. Same terms, same deal."}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="font-semibold text-teal-700 mb-1">{ko ? "이점" : "Advantage"}</div>
              <p className="text-gray-600 leading-relaxed">{ko ? "전 세계 투자자 동시 접근 → 오더북 최대화 → 조달 비용 최소화. 발행 시장 통합으로 유동성 집중." : "Simultaneous global investor access → maximize order book → minimize funding cost. Concentrated liquidity from market integration."}</p>
            </div>
          </div>
        </motion.section>


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />


        {/* ── FAQ ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={[
              {
                q: (ko: boolean) => ko
                  ? "유로본드와 Eurobond는 다른 건가요? 유로화 채권을 의미하나요?"
                  : "Are Eurobond and EUR bond the same? Is it a bond in euros?",
                a: (ko: boolean) => ko
                  ? "아닙니다. 유로본드(Eurobond)는 '유로'라는 통화와 무관합니다. 발행자의 국내 시장 외부에서 발행되는 채권을 통칭합니다. USD로 발행된 유로본드, EUR로 발행된 유로본드, JPY로 발행된 유로본드 모두 존재합니다. 핵심은 역외(offshore) 발행이라는 점입니다. 유럽 통화인 유로(€)로 발행된 채권은 'EUR-denominated bond'라고 구분합니다."
                  : "No. 'Eurobond' has nothing to do with the euro currency. It refers to bonds issued outside the issuer's home market, in any currency. A USD Eurobond, EUR Eurobond, and JPY Eurobond all exist. The defining characteristic is offshore issuance. A bond denominated in euros is called an 'EUR-denominated bond.'",
              },
              {
                q: (ko: boolean) => ko
                  ? "사무라이 본드를 발행하는 이유는 일본 투자자를 원하기 때문인가요?"
                  : "Do issuers launch Samurai bonds because they want Japanese investors?",
                a: (ko: boolean) => ko
                  ? "투자자 다변화가 한 이유이지만 더 큰 이유는 금리 차익입니다. 일본 금리는 전통적으로 미국·유럽보다 낮아, JPY로 발행 후 통화스왑(CCS)을 통해 USD/EUR로 환전하면 직접 USD 발행보다 낮은 비용이 나올 수 있습니다. 한국 발행사들이 사무라이·포르모사를 활용하는 가장 큰 이유입니다. 단, CCS 기준 스왑 스프레드(Basis)가 불리할 때는 이점이 사라집니다."
                  : "Investor diversification is one reason, but the bigger driver is rate arbitrage. Japanese rates are traditionally lower than US/European rates — issuing in JPY and swapping via CCS to USD/EUR can be cheaper than direct USD issuance. This is the main reason Korean issuers use Samurai and Formosa. However, the advantage disappears when CCS basis spreads move unfavorably.",
              },
              {
                q: (ko: boolean) => ko
                  ? "야키 본드(Yankee)와 유로본드의 가장 큰 차이는 규제인가요?"
                  : "Is the biggest difference between Yankee and Eurobond just regulation?",
                a: (ko: boolean) => ko
                  ? "규제가 가장 큰 실질적 차이입니다. 야키 본드는 SEC 등록(Form F-3/S-3)이 필요해 시간·비용이 더 들지만, 미국 기관투자자(보험사·연기금)를 직접 접근할 수 있습니다. 유로본드는 등록 없이 빠르게 발행 가능하지만, 미국 투자자에게 판매하려면 Rule 144A 요건이 추가됩니다. 많은 발행사가 '144A/Reg S' 방식으로 두 시장을 동시에 커버합니다."
                  : "Regulation is the biggest practical difference. Yankee bonds require SEC registration (Form F-3/S-3) — more time and cost — but give direct access to US institutional investors (insurers, pensions). Eurobonds can be issued quickly without registration, but reaching US investors requires Rule 144A compliance. Many issuers do '144A/Reg S' deals to cover both markets simultaneously.",
              },
              {
                q: (ko: boolean) => ko
                  ? "아리랑 본드 시장은 왜 작은가요?"
                  : "Why is the Arirang bond market so small?",
                a: (ko: boolean) => ko
                  ? "KRW 시장 자체의 크기 한계와 외국인 발행사 측에서의 실질적 수요 부족이 원인입니다. 대부분의 다국적 기업은 달러·유로 자금 수요가 더 크고, KRW를 조달해도 USD/EUR로 스왑해야 합니다. 이 과정에서 CCS 비용이 발생해 유로본드 대비 비용 이점이 약합니다. 한국 투자자 접근이 전략적으로 중요한 특정 발행사(세계은행·ADB 등 국제기구)가 주로 활용합니다."
                  : "The KRW market is inherently limited in size, and there's insufficient demand from foreign issuers. Most multinationals need USD or EUR funding; if they issue KRW, they must swap back — incurring CCS costs that erode the advantage versus Eurobonds. The market is primarily used by issuers with strategic Korean investor relationships (World Bank, ADB, multilaterals).",
              },
              {
                q: (ko: boolean) => ko
                  ? "글로벌 발행사는 어떻게 발행 시장을 결정합니까?"
                  : "How do global issuers decide which market to issue in?",
                a: (ko: boolean) => ko
                  ? "뱅커와 발행사가 함께 '올인클루시브 비용(all-in cost)'을 비교합니다. ① 각 시장의 스프레드 레벨(T+Xbp) ② CCS/이자율스왑 비용 ③ 규제·법무 비용 ④ 실행 시간 ⑤ 투자자 다변화 가치 — 이 다섯 가지를 동시에 고려합니다. 결과적으로 순 자금 조달 비용이 가장 낮고, 전략적 투자자 기반을 넓힐 수 있는 시장을 선택합니다. 발행 빈도가 높은 기업은 여러 시장을 동시에 활용해 투자자를 분산합니다."
                  : "Bankers and issuers jointly compare 'all-in cost': ① spread level in each market (T+Xbp) ② CCS/interest rate swap cost ③ regulatory/legal cost ④ execution timeline ⑤ value of investor diversification. They select the market offering the lowest net funding cost while broadening the strategic investor base. Frequent issuers tap multiple markets simultaneously to avoid concentration.",
              },
            ].map(f => ({ q: f.q(ko), a: f.a(ko) }))} />
        </motion.section>

        {/* ── Related Articles ── */}
        <motion.section
          className="mb-14"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {ko ? "관련 아티클" : "Related Articles"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: `${base}/dcm-overview`,    label: (ko: boolean) => ko ? "DCM 개요"        : "DCM Overview"      },
              { href: `${base}/dcm-bond-products`, label: (ko: boolean) => ko ? "Ch.3 채권 상품" : "Ch.3 Bond Products" },
              { href: `${base}/dcm-deal-process`, label: (ko: boolean) => ko ? "Ch.5 딜 프로세스": "Ch.5 Deal Process"  },
              { href: "/market/korea-1998-external-bond", label: (ko: boolean) => ko ? "한국 1998 글로벌본드" : "Korea 1998 Global Bond" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
              >
                {link.label(ko)}
              </Link>
            ))}
          </div>
        </motion.section>



        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />


        {/* ── References ─────────────────────────────────────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <motion.h2
            variants={fadeUp()}
            className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5"
          >
            {ko ? "참고 자료" : "References"}
          </motion.h2>
          <ol className="space-y-3">
            {SOURCES.map((ref) => (
              <motion.li
                key={ref.id}
                variants={fadeUp()}
                className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                  {ref.id}
                </span>
                <span>
                  <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="italic">{ref.title}</span>
                  )}
                  {". "}
                  <span className="text-gray-400 dark:text-gray-500">{ref.source}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Prev / Next ── */}
        <motion.div
          className="flex items-center justify-between"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              ← {prev.title(ko)}
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              {next.title(ko)} →
            </Link>
          ) : <div />}
        </motion.div>

      </main>

      <Footer />
    </>
  );
}
