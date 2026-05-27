"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Constants ─────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b";
const ACCENT_LIGHT = "#fef3c7";
const ACCENT_DARK = "#d97706";
const THIS_CH = "structured-cdo";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"     : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"     : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"    : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"  : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기": "Ch.5 CDO·Crisis"  },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"  : "Ch.6 Cases"      },
];

// ── Chart Data ────────────────────────────────────────────────────────────────
// Global CDO issuance by year ($ billions, SIFMA / BIS)
const CDO_ISSUANCE_DATA = [
  { year: "2002", volume: 80,  color: ACCENT },
  { year: "2003", volume: 87,  color: ACCENT },
  { year: "2004", volume: 157, color: ACCENT },
  { year: "2005", volume: 249, color: ACCENT },
  { year: "2006", volume: 488, color: ACCENT },
  { year: "2007", volume: 520, color: ACCENT },
  { year: "2008", volume: 61,  color: "#ef4444" },
  { year: "2009", volume: 4,   color: "#ef4444" },
];

// US subprime mortgage delinquency rate (%)
const DELINQUENCY_DATA = [
  { year: "2005", rate: 5.1  },
  { year: "2006", rate: 7.3  },
  { year: "2007", rate: 14.4 },
  { year: "2008", rate: 25.3 },
  { year: "2009", rate: 28.6 },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 bg-red-50 dark:bg-red-900/15 p-5" style={{ borderColor: "#ef4444" }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">🚨</span>
        <div className="text-[13px] text-red-900 dark:text-red-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5" style={{ borderColor: ACCENT }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function CaseBox({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-900/15 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: ACCENT_DARK }}
        >
          {label}
        </span>
      </div>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
    </div>
  );
}

function TimelineItem({
  year, title, body, highlight,
}: {
  year: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
          style={{ background: highlight ? "#ef4444" : ACCENT }}
        >
          {year}
        </div>
        <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-1" />
      </div>
      <div className="pb-6 pt-1">
        <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{title}</p>
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "CDO와 일반 ABS는 어떻게 다른가요?",
    a: "ABS는 자동차 대출·신용카드·모기지 같은 실물 자산을 증권화합니다. CDO는 한 단계 더 나아가 ABS나 다른 채권(이미 증권화된 것 포함)을 묶어 다시 트랑쉐로 발행합니다. 즉 CDO는 'ABS의 ABS'입니다. 기초자산이 실물 차입자가 아니라 이미 한번 구조화된 금융상품이라는 점이 핵심 차이입니다. 이 중첩 구조가 리스크 추적을 극도로 어렵게 만들었습니다.",
  },
  {
    q: "Gaussian Copula가 왜 그렇게 치명적인 오류였나요?",
    a: "Gaussian Copula 모델은 서로 다른 모기지의 부도 '상관관계'를 수학적으로 표현합니다. 문제는 이 모델이 과거 2000-2004년 데이터(주택가격이 계속 오르던 시기)로 캘리브레이션됐다는 점입니다. 모델은 두 개의 모기지가 동시에 부도날 확률을 '낮다'고 산정했는데, 이는 지역별로 분산되어 있어서라고 가정했습니다. 그러나 2007년 미국 전역의 주택가격이 동시에 하락하자 모든 모기지가 함께 부도났습니다. 지리적 분산이 의미가 없어진 것입니다. 상관관계가 1에 가까워지자 트랑쉐 구조 전체가 붕괴했습니다.",
  },
  {
    q: "Michael Burry가 어떻게 서브프라임 모기지에 베팅할 수 있었나요?",
    a: "Burry는 CDS(신용부도스왑)라는 보험 계약을 이용했습니다. 그는 서브프라임 모기지 RMBS에 대한 CDS를 매입했는데, 이는 '이 모기지들이 부도나면 내가 큰 돈을 받겠다'는 계약입니다. 문제는 이런 상품이 처음에는 존재하지 않아서, 그가 직접 Goldman Sachs·Deutsche Bank 등에 찾아가 이 파생상품을 만들어 달라고 요청해야 했다는 점입니다. 은행들은 이를 '바보 같은 거래'라고 여기며 기꺼이 반대편을 취했습니다.",
  },
  {
    q: "Goldman Sachs는 Abacus 사건으로 실제로 처벌받았나요?",
    a: "Goldman Sachs는 2010년 7월 SEC와 $550M(약 5,500억원)의 합의금을 내기로 합의했습니다. 이는 당시 증권법 위반으로 역사상 최대 합의금이었습니다. Goldman은 잘못을 인정하지 않았지만 투자자들에게 제품을 판매할 때 Paulson & Co.의 역할과 공매도 포지션을 공개하지 않은 점을 '실수(mistake)'라고 인정했습니다. Fabrice Tourre 개인은 2013년 민사재판에서 유죄 판결을 받았습니다.",
  },
  {
    q: "합성 CDO가 위험한 이유는 실물 모기지가 없기 때문인가요?",
    a: "맞습니다, 그러나 더 정확히는 손실이 '무한 복제'될 수 있다는 점입니다. 실물 모기지 100개가 있으면 최대 100개 분의 손실만 발생합니다. 그러나 합성 CDO는 CDS 계약을 이용해 동일한 100개 모기지 포트폴리오에 대한 리스크를 이론적으로 무제한 복제할 수 있습니다. 2007년 기준 일부 서브프라임 모기지 풀의 CDS 명목 원금은 실제 모기지 원금의 20-30배에 달했습니다. 이것이 $2.7T+ 손실의 핵심 증폭 원인입니다.",
  },
];

const FAQ_EN = [
  {
    q: "How is a CDO different from a regular ABS?",
    a: "An ABS securitizes real-world assets — auto loans, credit cards, mortgages. A CDO goes one step further: it pools ABS bonds (and other securities, including already-structured products) and reissues them in tranches. In other words, a CDO is the 'ABS of ABS.' The key difference is that the underlying collateral is not direct borrowers but already-structured financial instruments. This layered complexity made it extremely difficult to trace where risk actually sat.",
  },
  {
    q: "Why was the Gaussian Copula such a fatal error?",
    a: "The Gaussian Copula model mathematically expressed default 'correlation' between different mortgages. The fatal flaw: it was calibrated on 2000–2004 data — a period of steadily rising house prices. The model calculated a low probability of two mortgages defaulting simultaneously, assuming geographic diversification would protect against co-movement. When US house prices fell simultaneously nationwide in 2007, all mortgages defaulted together. Geographic diversification became meaningless. As correlation spiked toward 1, the entire tranche structure collapsed.",
  },
  {
    q: "How was Michael Burry able to bet against subprime mortgages?",
    a: "Burry used CDS (Credit Default Swaps) — essentially insurance contracts. He bought CDS on subprime RMBS, meaning 'if these mortgages default, I get paid.' The problem was these instruments didn't yet exist at scale, so he had to physically visit Goldman Sachs, Deutsche Bank, and others to ask them to create the product. The banks considered it a foolish trade and happily took the other side, pocketing premiums from Burry while his position accumulated.",
  },
  {
    q: "Was Goldman Sachs actually punished for the Abacus deal?",
    a: "Goldman Sachs settled with the SEC in July 2010 for $550 million — the largest-ever securities fraud settlement at the time. Goldman did not admit wrongdoing but acknowledged it was a 'mistake' not to disclose Paulson & Co.'s role and short position when marketing the product to investors. Fabrice Tourre, the Goldman trader who structured Abacus, was found civilly liable in a 2013 jury trial.",
  },
  {
    q: "Is the danger of synthetic CDOs that they lack real mortgages?",
    a: "Correct, but more precisely the problem is that losses can be 'infinitely replicated.' With 100 real mortgages, losses are capped at the value of those 100 mortgages. But a synthetic CDO uses CDS contracts to theoretically replicate risk on the same 100-mortgage portfolio an unlimited number of times. By 2007, the notional CDS outstanding on some subprime pools was 20–30x the face value of the underlying mortgages. This infinite amplification is why total losses exceeded $2.7 trillion.",
  },
];

// ── Main Component ─────────────────────────────────────────────────────────────
export default function StructuredCdoClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: ko ? concept.title : (concept.titleEn ?? concept.title),
            description: ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt),
            url: `https://deal-story.co/market-101/structured-cdo`,
            author: { "@type": "Organization", name: "Deal Story" },
          }),
        }}
      />

      <Header />

      {/* ── Sticky Series Nav ── */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        <div className="flex items-center gap-1 px-4 py-2 min-w-max mx-auto max-w-5xl">
          {STRUCTURED_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${base}/${item.slug}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors hover:opacity-80"
              style={
                item.slug === THIS_CH
                  ? { background: ACCENT, color: "#fff", fontWeight: 700 }
                  : { color: "#6b7280" }
              }
            >
              {item.title(ko)}
            </Link>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-5 pb-24 pt-10">

        {/* ── Breadcrumb ── */}
        <motion.nav
          className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-6"
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
        >
          <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">
            {ko ? "홈" : "Home"}
          </Link>
          <span>›</span>
          <Link href={base} className="hover:text-amber-600 transition-colors">
            {ko ? "마켓 101" : "Market 101"}
          </Link>
          <span>›</span>
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            {ko ? "구조화 Ch.5" : "Structured Ch.5"}
          </span>
        </motion.nav>

        {/* ── Hero ── */}
        <motion.section
          className="mb-12"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp(0)} className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: ACCENT }}
            >
              {ko ? "구조화금융" : "Structured Finance"}
            </span>
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: ACCENT_LIGHT, color: ACCENT_DARK }}
            >
              Ch.5 / 6
            </span>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              ⏱ {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.05)}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4"
          >
            {ko ? concept.title : (concept.titleEn ?? concept.title)}
          </motion.h1>

          <motion.p
            variants={fadeUp(0.1)}
            className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5"
          >
            {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
          </motion.p>

          <motion.div variants={fadeUp(0.12)} className="flex flex-wrap gap-1.5">
            {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-full border"
                style={{
                  background: ACCENT_LIGHT,
                  color: ACCENT_DARK,
                  borderColor: "#fcd34d",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Share — top ── */}
        <div className="flex justify-end mb-8">
          <ShareButtons
            title={ko ? concept.title : (concept.titleEn ?? concept.title)}
            variant="top"
            lang={lang}
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.1 — 30초 요약
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "30초 요약: CDO가 어떻게 세계를 무너뜨렸나" : "30-Second Summary: How a CDO Broke the World"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "CDO는 단순한 금융 상품이 아니었습니다. 그것은 리스크를 감추는 기계였고, 월스트리트·신용평가사·규제기관 모두가 묵인한 집단적 실패의 산물이었습니다."
              : "A CDO was not just a financial product. It was a machine for hiding risk — the product of collective failure enabled by Wall Street, rating agencies, and regulators alike."}
          </p>

          {/* 4-stat grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            {[
              { stat: "$520B", label: ko ? "2007년 CDO 발행" : "CDO issued in 2007",       sub: ko ? "전년 대비 +6%" : "+6% YoY" },
              { stat: "80%",   label: ko ? "BBB → AAA 전환율" : "BBB-to-AAA conversion",   sub: ko ? "무디스 마법" : "Moody's alchemy" },
              { stat: "$2.7T+", label: ko ? "총 손실 추정" : "Total losses estimated",      sub: ko ? "IMF 2009 추산" : "IMF 2009 est." },
              { stat: "$15B",  label: ko ? "Paulson 수익" : "Paulson's profit",             sub: ko ? "Big Short 최대 승자" : "Big Short's top winner" },
            ].map((s) => (
              <motion.div
                key={s.stat}
                variants={fadeUp()}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 text-center shadow-sm"
              >
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{s.stat}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <InsightBox>
            <strong>{ko ? "한 문장 정리" : "One Sentence Summary"}</strong>
            <br />
            {ko
              ? "CDO = ABS의 ABS. 은행이 서브프라임 모기지를 묶어 RMBS를 만들고, 그 RMBS의 BBB 트랑쉐를 다시 묶어 CDO를 만들면, 무디스가 Gaussian Copula 모델로 그 BBB를 AAA로 탈바꿈시켰다. 그 AAA가 2007-2008년 사상 최대 규모로 폭발했다."
              : "CDO = ABS of ABS. Banks bundled subprime mortgages into RMBS, then rebundled the RMBS BBB tranches into CDOs, and Moody's Gaussian Copula model magically transformed those BBBs into AAA. Those AAAs blew up in 2007-2008 in the largest structured finance collapse in history."}
          </InsightBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.2 — CDO 기본 구조
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "CDO 기본 구조: ABS CDO, CLO CDO, 합성 CDO" : "CDO Architecture: ABS CDO, CLO CDO, Synthetic CDO"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "CDO는 담보 자산의 종류에 따라 세 가지로 나뉩니다. 2008년 위기의 주범은 ABS CDO였습니다."
              : "CDOs are categorized by collateral type. The main culprit in 2008 was the ABS CDO."}
          </p>

          {/* CDO types grid */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            {[
              {
                type: "ABS CDO",
                icon: "🏠",
                badge: ko ? "위기 주범" : "Crisis Culprit",
                badgeColor: "#ef4444",
                collateral: ko ? "서브프라임 RMBS BBB 트랑쉐, HELOC, Alt-A 모기지 ABS" : "Subprime RMBS BBB tranches, HELOC, Alt-A mortgage ABS",
                risk: ko ? "초고위험 — 기초자산 부도 상관관계 극도로 높음" : "Extreme risk — underlying default correlations massively underestimated",
                peak: "$480B (2006)",
                bg: "bg-red-50 dark:bg-red-900/15",
                border: "border-red-200 dark:border-red-700",
              },
              {
                type: "CLO CDO",
                icon: "🏭",
                badge: ko ? "레버리지드론 기반" : "Leveraged Loan Backed",
                badgeColor: ACCENT_DARK,
                collateral: ko ? "레버리지드 바이아웃(LBO) 기업 대출, BB~B 등급 기업론" : "LBO corporate loans, BB~B rated corporate debt",
                risk: ko ? "보통 — 기업 부도는 개별적, 시스템 상관관계 낮음" : "Moderate — corporate defaults tend to be idiosyncratic",
                peak: "$80B (2007)",
                bg: "bg-amber-50 dark:bg-amber-900/15",
                border: "border-amber-200 dark:border-amber-700",
              },
              {
                type: ko ? "합성 CDO" : "Synthetic CDO",
                icon: "🔮",
                badge: ko ? "CDS 기반" : "CDS-Backed",
                badgeColor: "#7c3aed",
                collateral: ko ? "실제 자산 없음. CDS 계약으로 리스크만 복제" : "No real assets. Risk replicated via CDS contracts only",
                risk: ko ? "위험 — 동일 포트폴리오 손실을 이론상 무제한 복제 가능" : "Dangerous — same portfolio losses can be replicated theoretically without limit",
                peak: "$2T+ (notional, 2007)",
                bg: "bg-purple-50 dark:bg-purple-900/15",
                border: "border-purple-200 dark:border-purple-700",
              },
            ].map((item) => (
              <div
                key={item.type}
                className={`rounded-xl border ${item.bg} ${item.border} p-5`}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{item.type}</h3>
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                    style={{ background: item.badgeColor }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                      {ko ? "담보 자산" : "Collateral"}
                    </span>
                    <p className="text-[12px] text-gray-700 dark:text-gray-300 mt-0.5">{item.collateral}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                      {ko ? "리스크" : "Risk"}
                    </span>
                    <p className="text-[12px] text-gray-700 dark:text-gray-300 mt-0.5">{item.risk}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                      {ko ? "최고 발행액" : "Peak Issuance"}
                    </span>
                    <p className="text-[12px] font-bold mt-0.5" style={{ color: item.badgeColor }}>{item.peak}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CDO issuance bar chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
              {ko ? "글로벌 CDO 연간 발행량 ($ Billion)" : "Global CDO Annual Issuance ($ Billion)"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              Source: SIFMA, BIS — {ko ? "2007년 정점 후 2009년 $4B으로 붕괴" : "Collapsed from $520B peak to $4B by 2009"}
            </p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={CDO_ISSUANCE_DATA} barSize={30}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickFormatter={(v) => `$${v}B`}
                  domain={[0, 600]}
                />
                <Tooltip
                  formatter={(v) => [`$${Number(v)}B`, ko ? "발행액" : "Issuance"]}
                />
                <Bar dataKey="volume" name={ko ? "발행액" : "Issuance"} radius={[4, 4, 0, 0]}>
                  {CDO_ISSUANCE_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.3 — CDO² (CDO Squared)
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "CDO² — 복잡성이 리스크를 어떻게 숨겼는가" : "CDO-Squared — How Complexity Buried Risk"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "CDO를 한번 더 재활용하면 CDO 제곱(CDO²)이 됩니다. 이 구조는 이미 트랑쉐화된 위험을 다시 트랑쉐화해 추적을 불가능하게 만들었습니다."
              : "Re-securitize a CDO and you get CDO-squared. This structure made already-tranched risk impossible to trace."}
          </p>

          {/* Structure Ladder */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 mb-6">
            <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-100 mb-4">
              {ko ? "CDO² 생성 단계" : "CDO-Squared Creation Chain"}
            </h3>
            <div className="space-y-2">
              {[
                {
                  step: "1",
                  label: ko ? "서브프라임 모기지 풀" : "Subprime Mortgage Pool",
                  note: ko ? "10만 건의 실제 차입자 모기지" : "100,000 actual borrower mortgages",
                  color: "#ef4444",
                },
                {
                  step: "2",
                  label: "RMBS",
                  note: ko ? "모기지 풀 → AAA/AA/BBB 트랑쉐로 분할. BBB는 8~10%만 남음" : "Pool → AAA/AA/BBB tranches. BBB = bottom 8-10%",
                  color: "#f97316",
                },
                {
                  step: "3",
                  label: "ABS CDO",
                  note: ko ? "여러 RMBS의 BBB 트랑쉐를 묶음. 무디스: 'BBB끼리 묶으면 상관관계 낮아져 AAA 가능'" : "Bundle BBB tranches from many RMBS pools. Moody's: 'Low correlation → AAA possible'",
                  color: ACCENT,
                },
                {
                  step: "4",
                  label: "CDO²",
                  note: ko ? "CDO의 BBB 트랑쉐를 다시 묶어 또 다른 CDO 발행. 2중 레이어" : "Re-bundle CDO BBB tranches into another CDO. Double-layered",
                  color: "#7c3aed",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                    style={{ background: item.color }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 px-4 py-2.5">
                    <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{item.label}</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 ml-2">{item.note}</span>
                  </div>
                </div>
              ))}
              {/* Arrow indicator */}
              <div className="flex justify-center mt-2">
                <span className="text-sm text-gray-400">↓ {ko ? "레이어가 늘어날수록 리스크 추적 불가" : "Each layer makes risk tracing harder"}</span>
              </div>
            </div>
          </div>

          <AlertBox>
            <strong>{ko ? "Correlation의 함정" : "The Correlation Trap"}</strong>
            <br /><br />
            {ko
              ? <>CDO² 논리의 핵심 가정: "각 RMBS BBB 트랑쉐는 서로 다른 지역의 모기지에 기반하므로 상관관계가 낮다."
                <br /><br />
                현실: 모든 미국 주택시장은 2006년부터 동시에 하락했습니다. 뉴욕이 빠지면 플로리다도 빠지고 캘리포니아도 빠졌습니다. 상관관계 가정이 붕괴되자 CDO² AAA 트랑쉐도 함께 무너졌습니다.
                <br /><br />
                한 CDO²에는 최대 125개의 서로 다른 CDO가 들어갈 수 있었고, 각 CDO에는 100개 이상의 RMBS가, 각 RMBS에는 수천 건의 모기지가 포함됐습니다. 분석가가 CDO²의 실제 리스크를 계산하려면 10,000개 이상의 원시 대출 파일을 검토해야 했습니다. 아무도 하지 않았습니다.</>
              : <>The core assumption in CDO-squared logic: "Each RMBS BBB tranche is backed by different geographic mortgage pools, so they are uncorrelated."
                <br /><br />
                Reality: Every US housing market fell simultaneously from 2006. When New York declined, so did Florida and California. Once the correlation assumption broke, CDO² AAA tranches collapsed with it.
                <br /><br />
                A single CDO-squared could contain up to 125 different CDOs, each holding 100+ RMBS, each containing thousands of individual mortgages. An analyst wanting to assess the real risk of a CDO² would need to review 10,000+ raw loan files. Nobody did.</>
            }
          </AlertBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.4 — 합성 CDO & Goldman Sachs Abacus
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "합성 CDO와 Goldman Sachs Abacus 2007-AC1" : "Synthetic CDO & Goldman Sachs Abacus 2007-AC1"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "합성 CDO는 실제 모기지가 없습니다. CDS라는 보험 계약으로 리스크만 복제합니다. Goldman Sachs의 Abacus 딜은 이 구조의 윤리적 한계를 세상에 알렸습니다."
              : "A synthetic CDO holds no actual mortgages. It replicates risk through CDS — insurance contracts. Goldman Sachs's Abacus deal exposed the ethical limits of this structure to the world."}
          </p>

          {/* Synthetic CDO Mechanism */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
            <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-4">
              {ko ? "합성 CDO 구조 메커니즘" : "Synthetic CDO Mechanism"}
            </h3>
            <div className="grid sm:grid-cols-3 gap-3 text-center">
              {[
                {
                  icon: "🏦",
                  title: ko ? "보호 매수자\n(Protection Buyer)" : "Protection Buyer",
                  body: ko ? "은행(Goldman 등)이 CDS 프리미엄을 지급. 모기지 풀 부도 시 보호를 받음" : "Bank (Goldman etc.) pays CDS premiums. Gets paid if mortgage pool defaults",
                  arrow: "→",
                },
                {
                  icon: "🏗️",
                  title: ko ? "합성 CDO\n(SPV)" : "Synthetic CDO (SPV)",
                  body: ko ? "CDS 계약을 참조. 실제 자산은 담보 국채 뿐. 트랑쉐로 나눠 투자자에 판매" : "References CDS contracts. Only holds Treasury collateral. Tranched into notes sold to investors",
                  arrow: "→",
                },
                {
                  icon: "👥",
                  title: ko ? "보호 매도자\n(투자자)" : "Protection Seller (Investors)",
                  body: ko ? "프리미엄을 받고 CDS 리스크를 부담. 부도 시 손실 흡수" : "Receive premiums, bear CDS risk. Absorb losses when defaults hit",
                  arrow: "",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2 whitespace-pre-line">{step.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</p>
                  </div>
                  {step.arrow && (
                    <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-gray-400 text-lg font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Abacus case study */}
          <CaseBox icon="⚖️" label={ko ? "실제 케이스: Goldman Sachs Abacus 2007-AC1" : "Real Case: Goldman Sachs Abacus 2007-AC1"}>
            <div className="space-y-3">
              <div>
                <strong>{ko ? "배경" : "Background"}</strong>
                <br />
                {ko
                  ? "2007년 초, Goldman Sachs는 Abacus 2007-AC1이라는 $2억 합성 CDO를 구성했습니다. 이 딜의 참조 포트폴리오(90개 서브프라임 RMBS)는 헤지펀드 Paulson & Co.가 선택했습니다."
                  : "In early 2007, Goldman Sachs structured Abacus 2007-AC1, a $2 billion synthetic CDO. The reference portfolio of 90 subprime RMBS was selected by hedge fund Paulson & Co."}
              </div>
              <div>
                <strong>{ko ? "문제" : "The Problem"}</strong>
                <br />
                {ko
                  ? "Paulson은 이 포트폴리오가 부도날 것이라 확신했기 때문에 선택한 것이었습니다 — 즉, CDO의 공매도(short) 포지션을 취했습니다. 그러나 Goldman은 반대편 투자자들(IKB 독일 산업은행, ABN AMRO 등)에게 Paulson의 역할과 공매도 포지션을 알리지 않았습니다. 투자자들은 Paulson이 CDO를 '사는 편'이라고 오해했습니다."
                  : "Paulson selected the portfolio precisely because he believed it would default — he was taking the short side of the CDO. But Goldman did not disclose Paulson's role or short position to the long-side investors (IKB Deutsche Industriebank, ABN AMRO, etc.). Investors mistakenly believed Paulson was on the same side as them."}
              </div>
              <div>
                <strong>{ko ? "결과" : "Outcome"}</strong>
                <br />
                {ko
                  ? <>Abacus는 발행 9개월 만에 사실상 전액 손실. 투자자 손실 약 $10억.
                    <br />Paulson & Co. 수익: 약 $10억(이 딜에서만).
                    <br />Goldman Sachs와 SEC의 합의(2010년 7월): <strong style={{ color: ACCENT_DARK }}>$550M</strong> — 당시 역사상 최대 증권법 위반 합의금.
                    <br />Goldman 트레이더 Fabrice Tourre 개인: 2013년 민사 유죄.</>
                  : <>Abacus lost nearly all value within 9 months. Investor losses: ~$1 billion.
                    <br />Paulson & Co. profit on this deal alone: ~$1 billion.
                    <br />Goldman–SEC settlement (July 2010): <strong style={{ color: ACCENT_DARK }}>$550M</strong> — then the largest ever securities fraud settlement.
                    <br />Goldman trader Fabrice Tourre: found civilly liable in 2013 jury trial.</>
                }
              </div>
              <div className="pt-2 border-t border-amber-200 dark:border-amber-700">
                <p className="text-[11px] italic text-amber-800 dark:text-amber-300">
                  {ko
                    ? "Tourre가 여자친구에게 보낸 이메일(2007년 1월): \"터지기 직전인 거대한 구조물들을 만들어내고 있는 느낌... 나만 살아남아 이것들을 팔고 있다.\""
                    : "Tourre email to girlfriend (Jan 2007): \"I am at the epicenter of creating monstrous creations... I'm in the middle of it all selling these toxic waste products.\""}
                </p>
              </div>
            </div>
          </CaseBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.5 — 무디스의 AAA 마법: Gaussian Copula
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "무디스의 AAA 마법 — Gaussian Copula의 치명적 결함" : "Moody's AAA Alchemy — The Fatal Flaw of Gaussian Copula"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "수학 공식 하나가 전 세계 금융시스템을 붕괴시켰습니다. Li의 Gaussian Copula는 복잡한 모기지 상품의 리스크를 단 몇 초만에 계산해주는 마법 같은 도구였습니다 — 그리고 그 마법이 곧 저주였습니다."
              : "A single mathematical formula broke the global financial system. Li's Gaussian Copula was a magical tool that could calculate mortgage risk in seconds — and that magic was the curse."}
          </p>

          {/* How AAA was manufactured */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-900/15 p-5 mb-6">
            <h3 className="text-[13px] font-bold text-amber-900 dark:text-amber-200 mb-4">
              {ko ? "BBB → AAA: 실제 변환 메커니즘" : "BBB → AAA: The Actual Conversion Mechanism"}
            </h3>
            <div className="space-y-3">
              {[
                {
                  num: "1",
                  title: ko ? "BBB 서브프라임 RMBS 수집" : "Collect BBB Subprime RMBS",
                  body: ko
                    ? "100개 서로 다른 지역의 RMBS BBB 트랑쉐를 구매. 각각 혼자서는 BBB 등급."
                    : "Buy 100 BBB tranches from different regional RMBS pools. Each is BBB-rated alone.",
                },
                {
                  num: "2",
                  title: ko ? "Gaussian Copula로 상관관계 측정" : "Measure Correlation with Gaussian Copula",
                  body: ko
                    ? "David X. Li의 수식(2000)으로 각 RMBS의 부도 상관관계를 계산. 2000-2004 데이터 기반 → 상관계수 ρ = 0.3 수준으로 낮게 산정."
                    : "Apply David X. Li's formula (2000) to measure default correlation. Calibrated on 2000-2004 data → correlation coefficient ρ ≈ 0.3, assessed as 'low.'",
                },
                {
                  num: "3",
                  title: ko ? "'분산 효과'로 AAA 부여" : "Grant AAA via 'Diversification Effect'",
                  body: ko
                    ? "100개 RMBS BBB가 낮은 상관관계라면, 동시에 모두 부도날 확률은 수학적으로 극히 낮음. 따라서 CDO의 상위 70-80%는 AAA 부여 가능. 이것이 BBB의 80%가 AAA로 전환된 원리."
                    : "If 100 BBB RMBS have low correlation, the probability of all defaulting simultaneously is mathematically negligible. Therefore the top 70-80% of the CDO can receive AAA. This is how 80% of BBB inputs became AAA outputs.",
                },
                {
                  num: "4",
                  title: ko ? "현실: 상관관계가 1에 수렴" : "Reality: Correlation Spiked to 1",
                  body: ko
                    ? "2006년 주택가격 하락이 시작되자 지역 분산 효과가 사라짐. 뉴욕·플로리다·캘리포니아 모두 동시에 하락. ρ → 1. AAA 트랑쉐도 전액 손실."
                    : "When house prices fell in 2006, geographic diversification evaporated. New York, Florida, California all fell simultaneously. ρ → 1. AAA tranches went to zero.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 mt-0.5"
                    style={{ background: ACCENT_DARK }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-amber-900 dark:text-amber-200">{item.title}</p>
                    <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed mt-0.5">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conflict of Interest */}
          <div className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
            <h3 className="text-[13px] font-bold text-red-800 dark:text-red-200 mb-3">
              {ko ? "이해충돌: 신용평가사는 누가 고용하는가?" : "Conflict of Interest: Who Pays the Rating Agencies?"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[12px] text-red-700 dark:text-red-300 leading-relaxed">
                  {ko
                    ? <>무디스·S&P·피치는 CDO <strong>발행사(은행)</strong>로부터 수수료를 받습니다. 채권 하나에 AAA를 주면 기본 수수료 약 $50,000~$200,000. 복잡한 CDO 구조에는 $300,000~$500,000 이상.
                      <br /><br />
                      구조: 은행이 "이렇게 구성하면 AAA 줄 수 있어요?"라고 물으면, 평가사가 "이 트랑쉐 비율을 조정하면 가능합니다"라고 조언. 이걸 <strong>'등급 쇼핑(Rating Shopping)'</strong>이라 합니다.</>
                    : <>Moody's, S&P, and Fitch were paid by CDO <strong>issuers (banks)</strong>. A single AAA rating on a bond: ~$50K-$200K. Complex CDO structures: $300K-$500K+.
                      <br /><br />
                      The dynamic: banks would ask "what do we need to change to get AAA?" and rating agencies advised "adjust this tranche size." This is called <strong>Rating Shopping</strong>.</>
                  }
                </p>
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-900 border border-red-200 dark:border-red-700 p-4">
                <p className="text-[11px] font-bold text-red-700 dark:text-red-300 mb-2">
                  {ko ? "무디스 내부 이메일 (2007년 6월)" : "Moody's Internal Email (June 2007)"}
                </p>
                <p className="text-[12px] italic text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "\"우리 모델에 결함이 있을 수 있다는 걸 알지만... 이 딜을 놓치면 경쟁사가 가져간다. 우리는 AAA를 줄 수밖에 없다.\""
                    : "\"We know there may be a flaw in our model... but if we don't rate this deal, our competitor will. We have no choice but to give AAA.\""}
                </p>
                <p className="text-[10px] text-gray-400 mt-2">Source: Financial Crisis Inquiry Commission (FCIC), 2011</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.6 — Big Short: Michael Burry & John Paulson
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "Big Short: Burry, Paulson, 그리고 $15B의 진실" : "The Big Short: Burry, Paulson, and the $15B Reality"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "2008년 붕괴를 예측하고 엄청난 수익을 올린 투자자들이 있었습니다. 영화 <빅쇼트>는 이 이야기를 했지만, 현실은 더 복잡합니다."
              : "Some investors predicted the 2008 collapse and profited enormously. The movie The Big Short told this story — but reality is more nuanced."}
          </p>

          {/* Players */}
          <div className="space-y-4 mb-8">
            {/* Michael Burry */}
            <CaseBox icon="🧠" label={ko ? "Michael Burry — $2.7B 수익" : "Michael Burry — $2.7B Profit"}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[12px] font-semibold text-amber-900 dark:text-amber-200 mb-1">
                    {ko ? "배경" : "Background"}
                  </p>
                  <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    {ko
                      ? "Scion Capital의 설립자. 신경과학 전공 후 의학박사 취득 중 독학으로 금융 공부. 2004-2005년 서브프라임 모기지 대출 서류를 직접 하나씩 읽으면서 부실의 심각성을 확인."
                      : "Founder of Scion Capital. Self-taught finance while studying neuroscience and completing an MD. In 2004-2005, personally read individual subprime mortgage loan files and confirmed the depth of the rot."}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-amber-900 dark:text-amber-200 mb-1">
                    {ko ? "전략과 결과" : "Strategy and Result"}
                  </p>
                  <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    {ko
                      ? <>2005년 Goldman·Deutsche·Bear Stearns에 서브프라임 RMBS CDS 매입 요청. 초기 투자 약 $1억. 2006-2007년 고객들의 환매 요청·소송 압박 속에서도 포지션 유지.
                        <br /><strong>최종 수익: $2.7B</strong> (Scion 펀드 수익률 489%).
                        <br />Burry 개인 수익: 약 $100M.</>
                      : <>2005: Requested subprime RMBS CDS from Goldman, Deutsche, Bear Stearns. Initial investment ~$100M. Held position through 2006-2007 despite investor redemptions and lawsuits.
                        <br /><strong>Final profit: $2.7B</strong> (Scion fund return: 489%).
                        <br />Burry personal profit: ~$100M.</>
                    }
                  </p>
                </div>
              </div>
            </CaseBox>

            {/* John Paulson */}
            <CaseBox icon="🏆" label={ko ? "John Paulson — $15B 수익 (역사상 최대 단일 트레이드)" : "John Paulson — $15B Profit (Largest Single Trade in History)"}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[12px] font-semibold text-amber-900 dark:text-amber-200 mb-1">
                    {ko ? "배경" : "Background"}
                  </p>
                  <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    {ko
                      ? "Paulson & Co.의 설립자. M&A 아비트리지 전문 헤지펀드로 시작. 2006년 서브프라임 모기지 시장 분석 후 두 개의 전용 크레딧 펀드를 조성 — Paulson Credit Opportunities Fund I, II."
                      : "Founder of Paulson & Co. Started as M&A arbitrage hedge fund. In 2006, analyzed subprime market and raised two dedicated credit funds — Paulson Credit Opportunities Fund I and II."}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-amber-900 dark:text-amber-200 mb-1">
                    {ko ? "전략과 결과" : "Strategy and Result"}
                  </p>
                  <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    {ko
                      ? <>CDS on subprime RMBS + ABX 인덱스 공매도. 프리미엄을 내며 기다린 비용 수억 달러.
                        <br />2007-2008 수익: <strong>$15B</strong> (Fund I: +591%, Fund II: +353%).
                        <br />Paulson 개인 보수: 약 $3-4B.
                        <br />"역사상 가장 큰 단일 트레이드" — Gregory Zuckerman(WSJ 저널리스트).</>
                      : <>CDS on subprime RMBS + ABX index shorts. Paid hundreds of millions in premiums while waiting.
                        <br />2007-2008 profits: <strong>$15B</strong> (Fund I: +591%, Fund II: +353%).
                        <br />Paulson personal take: ~$3-4B.
                        <br />"The Greatest Trade Ever" — Gregory Zuckerman (WSJ journalist).</>
                    }
                  </p>
                </div>
              </div>
            </CaseBox>

            {/* Greg Lippmann */}
            <CaseBox icon="🎯" label={ko ? "Greg Lippmann (Deutsche Bank) — 'The Salesman'" : "Greg Lippmann (Deutsche Bank) — 'The Salesman'"}>
              <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                {ko
                  ? <>Deutsche Bank의 CDO 트레이더. 2006년 초부터 내부적으로 서브프라임의 붕괴를 예측하고 CDS 매수 포지션을 쌓았습니다.
                    <br /><br />
                    그의 역할은 독특합니다: Deutsche Bank의 돈으로 공매도하면서 동시에 헤지펀드 고객들에게 "이 시장이 무너진다"고 적극 홍보하며 CDS 매입을 권유했습니다. 영화에서는 Ryan Gosling이 연기한 Jared Vennett의 실제 모델입니다.
                    <br /><br />
                    Lippmann 본인 수익: 약 $47M(보너스). Deutsche Bank 전체 CDO 공매도 수익: 약 $1.5B.</>
                  : <>Deutsche Bank CDO trader. From early 2006, internally predicted subprime collapse and built CDS long positions.
                    <br /><br />
                    His role was unique: shorting with Deutsche Bank's money while simultaneously pitching hedge fund clients on "this market is going to zero" to sell them CDS. He is the real-life model for Ryan Gosling's Jared Vennett character in the movie.
                    <br /><br />
                    Lippmann personal profit: ~$47M (bonus). Deutsche Bank total CDO short profits: ~$1.5B.</>
                }
              </p>
            </CaseBox>
          </div>

          {/* Movie vs Reality */}
          <InsightBox>
            <strong>{ko ? "영화 vs 현실 — 빅쇼트" : "Movie vs Reality — The Big Short"}</strong>
            <br /><br />
            {ko
              ? <>영화는 이 인물들을 영웅으로 묘사하지만 현실은 더 복잡합니다. Burry 자신도 "나는 돈을 벌었지만 수백만 명이 집을 잃었다"고 인정했습니다. 그는 이후 오랫동안 공공 발언을 피했고, 투자자들로부터 소송을 당했습니다.
                <br /><br />
                Paulson의 Abacus 참여는 SEC 조사를 받았습니다. 그는 합의금을 내지 않았지만(Goldman이 냈음), 포트폴리오 선택 과정에서 윤리적 의문이 남았습니다.
                <br /><br />
                그들은 시스템의 실패를 발견하고 베팅한 것이지, 시스템을 고친 것은 아닙니다.</>
              : <>The movie portrays these figures as heroes — reality is more complicated. Burry himself acknowledged "I made money, but millions lost their homes." He avoided public speaking for years afterward and faced investor lawsuits.
                <br /><br />
                Paulson's Abacus involvement was investigated by the SEC. He paid no settlement (Goldman did), but ethical questions remain about his portfolio selection role.
                <br /><br />
                They found a broken system and bet against it — they did not fix it.</>
            }
          </InsightBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.7 — 2008년 붕괴 타임라인
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "2006-2009: 붕괴 타임라인" : "2006-2009: The Collapse Timeline"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            {ko
              ? "위기는 하루아침에 오지 않았습니다. 신호는 2006년부터 있었지만, 월스트리트는 2007년 중반까지 파티를 멈추지 않았습니다."
              : "The crisis did not arrive overnight. Warning signals existed from 2006, but Wall Street did not stop the party until mid-2007."}
          </p>

          {/* Delinquency Line Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-8">
            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
              {ko ? "미국 서브프라임 모기지 연체율 (%)" : "US Subprime Mortgage Delinquency Rate (%)"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              Source: MBA, Federal Reserve — {ko ? "2007년부터 급격히 악화" : "Rapid deterioration from 2007"}
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={DELINQUENCY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 35]}
                />
                <Tooltip formatter={(v) => [`${Number(v).toFixed(1)}%`, ko ? "연체율" : "Delinquency"]} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: "#ef4444", r: 5 }}
                  name={ko ? "연체율" : "Delinquency Rate"}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Timeline */}
          <div>
            <TimelineItem
              year="2006"
              title={ko ? "주택가격 하락 시작 — 모두가 무시" : "House Prices Begin Falling — Everyone Ignores It"}
              body={ko
                ? "S&P/Case-Shiller 주택가격 지수 2006년 2분기 정점 후 하락. 서브프라임 연체율 7.3%로 상승. 그러나 CDO 발행은 오히려 $488B로 가속."
                : "S&P/Case-Shiller peaks in Q2 2006 and begins declining. Subprime delinquencies rise to 7.3%. CDO issuance actually accelerates to $488B."}
            />
            <TimelineItem
              year="Jun"
              title={ko ? "2007년 6월 — Bear Stearns 헤지펀드 두 개 붕괴" : "June 2007 — Two Bear Stearns Hedge Funds Collapse"}
              body={ko
                ? "Bear Stearns High-Grade Structured Credit Fund와 Enhanced Leverage Fund 청산. 서브프라임 CDO 손실 총 $1.6B. 월스트리트 최초의 공개 위기 신호."
                : "Bear Stearns High-Grade Structured Credit Fund and Enhanced Leverage Fund liquidated. Total subprime CDO losses: $1.6B. First public crisis signal on Wall Street."}
              highlight
            />
            <TimelineItem
              year="Aug"
              title={ko ? "2007년 8월 — BNP Paribas, 유동성 동결" : "August 2007 — BNP Paribas Freezes Liquidity"}
              body={ko
                ? "BNP Paribas, ABS CDO에 투자한 펀드 세 개의 환매 일시 중단. ECB $95B 긴급 유동성 공급. 신용시장 경색 본격화."
                : "BNP Paribas suspends redemptions on three ABS CDO-exposed funds. ECB injects $95B emergency liquidity. Credit markets begin seizing up."}
              highlight
            />
            <TimelineItem
              year="2007"
              title={ko ? "2007년 하반기 — Citigroup $40B+ CDO 손실" : "H2 2007 — Citigroup $40B+ CDO Losses"}
              body={ko
                ? "Citigroup CDO 관련 손실 $40B+ 공시. CEO Chuck Prince 사임. Merrill Lynch도 $8B 손실 발표. CDO 시장 사실상 거래 중단."
                : "Citigroup discloses $40B+ in CDO-related losses. CEO Chuck Prince resigns. Merrill Lynch announces $8B in losses. CDO market effectively halts."}
            />
            <TimelineItem
              year="Mar"
              title={ko ? "2008년 3월 — Bear Stearns 붕괴, Fed 구제" : "March 2008 — Bear Stearns Collapses, Fed Intervenes"}
              body={ko
                ? "Bear Stearns 주가 이틀 만에 $170 → $2. Fed이 JP모간에 인수 주선, $29B 보증. 구조화 상품 시장에 대한 신뢰 완전 붕괴."
                : "Bear Stearns stock falls from $170 to $2 in two days. Fed brokers JPMorgan acquisition with $29B guarantee. Confidence in structured products completely evaporates."}
              highlight
            />
            <TimelineItem
              year="Sep"
              title={ko ? "2008년 9월 15일 — Lehman Brothers 파산" : "September 15, 2008 — Lehman Brothers Bankruptcy"}
              body={ko
                ? "역사상 최대 파산 신청($600B 자산). Lehman의 파산으로 전 세계 신용시장 완전 동결. LIBOR 스프레드 급등. 다음날 AIG도 $440B CDS 보증 의무 이행 불능 상태."
                : "Largest bankruptcy filing in history ($600B assets). Lehman collapse completely freezes global credit markets. LIBOR spreads spike. The following day AIG also became unable to honor $440B in CDS guarantee obligations."}
              highlight
            />
            <TimelineItem
              year="Oct"
              title={ko ? "2008년 10월 — TARP $700B 구제금융" : "October 2008 — TARP $700B Bailout"}
              body={ko
                ? "미국 재무부 TARP(부실자산구제프로그램) 시행. 은행 자본 직접 주입. 실질 가계 손실: $9.8T(주택자산). 실업률 10%까지 상승(2009년 10월)."
                : "US Treasury launches TARP (Troubled Asset Relief Program). Direct capital injection into banks. Real household losses: $9.8T in housing wealth. Unemployment rises to 10% by October 2009."}
            />
          </div>

          {/* Loss table */}
          <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200">
                {ko ? "주요 기관별 CDO/서브프라임 관련 손실 추정" : "Estimated CDO/Subprime Losses by Major Institution"}
              </p>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {[
                { name: "Citigroup",        loss: "$55B+",  note: ko ? "CEO 사임" : "CEO resignation" },
                { name: "Merrill Lynch",    loss: "$50B+",  note: ko ? "BOA에 인수" : "Acquired by BofA" },
                { name: "UBS",              loss: "$38B",   note: ko ? "스위스 정부 구제" : "Swiss govt bailout" },
                { name: "AIG",              loss: "$440B",  note: ko ? "CDS 보증 (Fed 구제)" : "CDS guarantees (Fed bailout)" },
                { name: "Bear Stearns",     loss: "$18B+",  note: ko ? "JPM에 매각" : "Sold to JPMorgan" },
                { name: "Lehman Brothers",  loss: "$60B+",  note: ko ? "파산" : "Bankruptcy" },
                { name: "Goldman Sachs",    loss: "$~3B",   note: ko ? "공매도로 상계" : "Partly offset by shorts" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100">{row.name}</p>
                    <p className="text-[11px] text-gray-400">{row.note}</p>
                  </div>
                  <p className="text-[14px] font-extrabold text-red-500">{row.loss}</p>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[11px] text-gray-400">
                Source: IMF Global Financial Stability Report 2008-2009. {ko ? "총 글로벌 손실 추정: $2.7T+" : "Total global estimated losses: $2.7T+"}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            Ch.8 — 규제 개혁과 교훈
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            {ko ? "위기 이후: 무엇이 바뀌었는가" : "After the Crisis: What Changed?"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "2010년 Dodd-Frank Act를 중심으로 대규모 규제 개혁이 이뤄졌습니다. 그러나 구조화금융 자체는 사라지지 않았습니다 — 더 타이트한 규제 하에 지속됩니다."
              : "The 2010 Dodd-Frank Act spearheaded sweeping regulatory reform. But structured finance itself did not disappear — it continues under tighter rules."}
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            {[
              {
                icon: "📋",
                title: ko ? "Dodd-Frank Act (2010)" : "Dodd-Frank Act (2010)",
                items: ko
                  ? ["Volcker Rule: 은행의 자기자본 거래(prop trading) 금지", "합성 CDO 조성 시 5% Risk Retention 의무화", "모든 OTC 파생상품의 중앙청산소(CCP) 통해 청산 의무화", "신용평가사 이해충돌 규제 강화 (SEC 감독 강화)"]
                  : ["Volcker Rule: Bans proprietary trading by banks", "5% Risk Retention required for synthetic CDO creation", "All OTC derivatives must clear through central counterparties (CCP)", "Enhanced SEC oversight of credit rating agencies to curb conflicts of interest"],
              },
              {
                icon: "🏦",
                title: ko ? "Basel III (2013-2019)" : "Basel III (2013-2019)",
                items: ko
                  ? ["구조화 상품 RWA 기준 강화 — 내부 모델 사용 제한", "CDS 관련 카운터파티 신용 리스크(CVA) 자본 의무화", "레버리지 비율 규제 도입 (자산 대비 Tier 1 자본 3%+)", "유동성 비율(LCR, NSFR) 도입 — CDO 유동성 리스크 대응"]
                  : ["Strengthened RWA standards for structured products — limited internal model use", "CVA capital charge for CDS counterparty credit risk", "Leverage ratio rule (Tier 1 capital ≥ 3% of total assets)", "LCR and NSFR liquidity ratios introduced — addressing CDO liquidity risk"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-3">{card.title}</h3>
                <ul className="space-y-1.5">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 dark:text-gray-400">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <InsightBox>
            <strong>{ko ? "현재: CDO는 살아있는가?" : "Today: Is the CDO Still Alive?"}</strong>
            <br /><br />
            {ko
              ? <>CDO는 죽지 않았습니다. 2024년 기준 CLO(기업 레버리지드론 기반) 시장은 $1.1T+로 역사상 최고 수준입니다. 그러나 2008년형 ABS CDO와는 근본적으로 다릅니다:
                <br /><br />
                <strong>다른 점:</strong> CLO는 실제 기업 대출을 담보로 합니다. 투명성이 높고, Risk Retention 5% 의무로 발행자도 리스크를 부담합니다. 역사적으로 CLO AAA는 단 한 번도 원금 손실이 없었습니다(금융위기 포함).
                <br /><br />
                <strong>우려 사항:</strong> 사모 신용(Private Credit) 시장의 CDO 유사 구조, Private Equity NAV 대출 증권화, 리테일 투자자 접근 확대 — 새로운 복잡성의 씨앗들이 존재합니다.</>
              : <>CDOs never died. CLOs (backed by corporate leveraged loans) hit a record $1.1T+ market in 2024. But they are fundamentally different from the 2008-era ABS CDO:
                <br /><br />
                <strong>Key differences:</strong> CLOs hold real corporate loans. They are transparent, and the 5% Risk Retention rule means issuers have skin in the game. Historically, CLO AAA tranches have never suffered principal loss — including through the financial crisis.
                <br /><br />
                <strong>Concerns:</strong> CDO-like structures in private credit, securitization of Private Equity NAV loans, and growing retail investor access — the seeds of new complexity exist.</>
            }
          </InsightBox>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
        </motion.section>

        {/* ── Series Prev/Next ── */}
        <motion.div
          className="flex gap-3 justify-between mt-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          {(() => {
            const idx = STRUCTURED_SERIES.findIndex((s) => s.slug === THIS_CH);
            const prev = idx > 0 ? STRUCTURED_SERIES[idx - 1] : null;
            const next = idx < STRUCTURED_SERIES.length - 1 ? STRUCTURED_SERIES[idx + 1] : null;
            return (
              <>
                {prev ? (
                  <motion.div variants={fadeUp()} className="flex-1">
                    <Link
                      href={`${base}/${prev.slug}`}
                      className="flex flex-col gap-1 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
                    >
                      <span className="text-[10px] text-gray-400">{ko ? "← 이전" : "← Prev"}</span>
                      <span className="text-[13px] font-bold text-gray-800 dark:text-gray-100">{prev.title(ko)}</span>
                    </Link>
                  </motion.div>
                ) : <div className="flex-1" />}
                {next ? (
                  <motion.div variants={fadeUp(0.05)} className="flex-1">
                    <Link
                      href={`${base}/${next.slug}`}
                      className="flex flex-col gap-1 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors text-right"
                    >
                      <span className="text-[10px] text-gray-400">{ko ? "다음 →" : "Next →"}</span>
                      <span className="text-[13px] font-bold text-gray-800 dark:text-gray-100">{next.title(ko)}</span>
                    </Link>
                  </motion.div>
                ) : <div className="flex-1" />}
              </>
            );
          })()}
        </motion.div>

        {/* ── Share — bottom ── */}
        <div className="flex justify-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <ShareButtons
            title={ko ? concept.title : (concept.titleEn ?? concept.title)}
            variant="bottom"
            lang={lang}
          />
        </div>

      </main>

      <Footer />
    </>
  );
}
