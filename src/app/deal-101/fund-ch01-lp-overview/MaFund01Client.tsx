/**
 * Fund 시리즈 Ch.1 — LP는 누구이고 왜 PE/VC에 돈을 맡기는가
 *
 * 톤 가이드:
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: 7 LP 타입 · Public vs Private return + premium · Asset allocation 비교 · 글로벌 Top LP 카탈로그
 *  - 모든 데이터 상수 KO/EN 분리
 *  - 한국 사례 (NPS 등) inline 삽입
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

const SLUG = "fund-ch01-lp-overview";
const ACCENT = "#f59e0b"; // Fund 시리즈 컬러 — 앰버 (capital의 의미)
const BLUE = "#2563eb";
const GREEN = "#16a34a";

// 7 LP 타입
const LP_TYPES = [
  {
    koName: "공적·기업 연기금 (Pension)",
    enName: "Public & corporate pension",
    koDesc: "은퇴자 자금. 장기 의무. 가장 큰 LP 카테고리.",
    enDesc: "Retiree capital. Long-dated obligations. Largest LP category.",
    koExamples: "CalPERS · CalSTRS · NPS · 사학연금 · 캐나다 CPPIB",
    enExamples: "CalPERS · CalSTRS · NPS (Korea) · CPPIB",
    aumScale: "$500B-1.5T 개별",
    enAumScale: "$500B-1.5T each",
    targetRet: "7-8%",
    horizon: "30+",
    peAlloc: "10-15%",
  },
  {
    koName: "Endowment · Foundation",
    enName: "Endowment · foundation",
    koDesc: "대학·재단 자본. Yale Model의 본진. PE/VC 비중 가장 높음.",
    enDesc: "University and foundation capital. Home of the Yale Model. Highest PE/VC allocation.",
    koExamples: "Yale · Harvard · MIT · Stanford · Princeton",
    enExamples: "Yale · Harvard · MIT · Stanford · Princeton",
    aumScale: "$10-50B 개별",
    enAumScale: "$10-50B each",
    targetRet: "8-9%",
    horizon: "Perpetual",
    peAlloc: "20-35%",
  },
  {
    koName: "Sovereign Wealth Fund",
    enName: "Sovereign wealth fund",
    koDesc: "국가 단위 자본. 유가 또는 무역 흑자 기반. 가장 큰 개별 LP.",
    enDesc: "State-level capital. Oil revenues or trade surpluses. Largest individual LPs.",
    koExamples: "ADIA · Saudi PIF · Norges · GIC · Temasek · KIC",
    enExamples: "ADIA · Saudi PIF · Norges · GIC · Temasek · KIC (Korea)",
    aumScale: "$500B-1.5T 개별",
    enAumScale: "$500B-1.5T each",
    targetRet: "6-8%",
    horizon: "Perpetual",
    peAlloc: "5-15%",
  },
  {
    koName: "Fund of Funds (FoF)",
    enName: "Fund of funds",
    koDesc: "여러 PE/VC에 분산 출자하는 펀드. 작은 LP들의 통로.",
    enDesc: "Funds that invest across many PE/VC funds. The pipeline for smaller LPs.",
    koExamples: "HarbourVest · Pantheon · Adams Street · 모태펀드 (한국)",
    enExamples: "HarbourVest · Pantheon · Adams Street · Korea Fund-of-Funds (모태펀드)",
    aumScale: "$10-100B 개별",
    enAumScale: "$10-100B each",
    targetRet: "9-11%",
    horizon: "10-12",
    peAlloc: "100%",
  },
  {
    koName: "Insurance",
    enName: "Insurance",
    koDesc: "보험사 자본. 부채 매칭이 중요. 보수적 allocation.",
    enDesc: "Insurance capital. Liability matching matters. Conservative allocation.",
    koExamples: "AIG · MetLife · Allianz · 삼성생명 · 한화생명",
    enExamples: "AIG · MetLife · Allianz · Samsung Life · Hanwha Life",
    aumScale: "$200B-800B 개별",
    enAumScale: "$200B-800B each",
    targetRet: "5-7%",
    horizon: "10-30",
    peAlloc: "3-8%",
  },
  {
    koName: "Family Office",
    enName: "Family office",
    koDesc: "초고액 자산가 가문 자본. 유연한 mandate. 보통 single-family.",
    enDesc: "UHNW family capital. Flexible mandate. Usually single-family.",
    koExamples: "Walton · Koch · Rockefeller · 한국 그룹사 가족 office",
    enExamples: "Walton · Koch · Rockefeller · Korean chaebol family offices",
    aumScale: "$1-50B 개별",
    enAumScale: "$1-50B each",
    targetRet: "7-10%",
    horizon: "Perpetual",
    peAlloc: "15-40%",
  },
  {
    koName: "HNW Individual",
    enName: "HNW individual",
    koDesc: "고액 자산가 개인. Feeder fund 통해 접근. 최근 retail 확대.",
    enDesc: "High-net-worth individuals. Access via feeder funds. Retail expansion recently.",
    koExamples: "Private bank 통한 PE access · 한국 은행 PB 채널",
    enExamples: "PE access via private banks, Korean bank PB channels",
    aumScale: "$1-100M 개별",
    enAumScale: "$1-100M each",
    targetRet: "8-10%",
    horizon: "10",
    peAlloc: "5-20%",
  },
];

// Public vs Private — 30년 historical returns
const RETURN_COMPARE = [
  { koLabel: "S&P 500 (Public)",                    enLabel: "S&P 500 (public)",                       ret: 9.5,  std: 15.5, koTag: "Liquid · daily",       enTag: "Liquid · daily" },
  { koLabel: "Cambridge PE Index (Median)",          enLabel: "Cambridge PE Index (median)",             ret: 12.5, std: 12.0, koTag: "Illiquid · 10yr lock", enTag: "Illiquid · 10yr lock" },
  { koLabel: "Cambridge PE Index (Top Quartile)",    enLabel: "Cambridge PE Index (top quartile)",       ret: 17.0, std: 13.5, koTag: "GP 선정이 결정",        enTag: "GP selection matters" },
  { koLabel: "Cambridge PE Index (Bottom Quartile)", enLabel: "Cambridge PE Index (bottom quartile)",   ret: 6.0,  std: 11.0, koTag: "Public 보다 못함",      enTag: "Worse than public" },
];

// Asset allocation 모델
const ALLOCATION = [
  {
    koName: "Yale Endowment Model",
    enName: "Yale Endowment Model",
    publicEq: 12,
    fixedIncome: 5,
    realAssets: 8,
    pe: 38,
    vc: 23,
    hedgeFund: 14,
    color: ACCENT,
    koNote: "PE+VC = 61%. David Swensen이 1985-2021 설계.",
    enNote: "PE+VC = 61%. Designed by David Swensen 1985-2021.",
  },
  {
    koName: "대형 Pension (CalPERS 등)",
    enName: "Large pension (CalPERS-type)",
    publicEq: 42,
    fixedIncome: 28,
    realAssets: 13,
    pe: 13,
    vc: 0,
    hedgeFund: 4,
    color: BLUE,
    koNote: "PE 13% — 거대 AUM 때문에 비중 높이기 어려움.",
    enNote: "PE 13% — hard to lift further given massive AUM.",
  },
  {
    koName: "Insurance 일반",
    enName: "Insurance — typical",
    publicEq: 18,
    fixedIncome: 65,
    realAssets: 6,
    pe: 5,
    vc: 0,
    hedgeFund: 6,
    color: GREEN,
    koNote: "Fixed income 65% — 부채 매칭 우선.",
    enNote: "65% fixed income — liability matching first.",
  },
  {
    koName: "Korea NPS (2024)",
    enName: "Korea NPS (2024)",
    publicEq: 33,
    fixedIncome: 36,
    realAssets: 7,
    pe: 12,
    vc: 1,
    hedgeFund: 11,
    color: "#dc2626",
    koNote: "PE 13% target. 2030년까지 alternative 25%로 확대 계획.",
    enNote: "PE target 13%. Plan to lift alternatives to 25% by 2030.",
  },
];

// Top 글로벌 LP 카탈로그
const TOP_LPS = [
  { koName: "ADIA (Abu Dhabi)",   enName: "ADIA (Abu Dhabi)",   aum: 1100, koType: "SWF",        enType: "SWF",        koNote: "PE 5-10% allocation. 글로벌 PE의 가장 큰 anchor LP 중 하나.", enNote: "PE 5-10% allocation. One of global PE's largest anchor LPs." },
  { koName: "GPIF (Japan)",       enName: "GPIF (Japan)",       aum: 1700, koType: "Pension",    enType: "Pension",    koNote: "일본 공적연금. 최근 PE allocation 본격 확대 중.",                 enNote: "Japan's public pension. Recently ramping PE allocation." },
  { koName: "Norges Bank (NBIM)",  enName: "Norges Bank (NBIM)", aum: 1700, koType: "SWF",        enType: "SWF",        koNote: "노르웨이 SWF. 전통적으로 public만. 2024년 PE 진입 검토.",         enNote: "Norway SWF. Historically public-only. Considering PE entry in 2024." },
  { koName: "CalPERS (US)",         enName: "CalPERS (US)",       aum:  500, koType: "Pension",    enType: "Pension",    koNote: "미국 최대 pension. PE 13%, 직접 출자 200+ GP.",                  enNote: "Largest US pension. PE 13%, commits to 200+ GPs directly." },
  { koName: "Saudi PIF",            enName: "Saudi PIF",          aum:  925, koType: "SWF",        enType: "SWF",        koNote: "사우디 비전 2030 자금. PE·VC·Direct equity 모두 적극.",            enNote: "Vision 2030 capital. Active in PE, VC, and direct equity." },
  { koName: "Korea NPS",            enName: "Korea NPS",          aum:  700, koType: "Pension",    enType: "Pension",    koNote: "글로벌 3대 pension. PE allocation 13%. 한국 PE의 가장 큰 단일 LP.", enNote: "Top-3 global pension. PE allocation 13%. Korea's single biggest PE LP." },
  { koName: "GIC (Singapore)",      enName: "GIC (Singapore)",    aum:  770, koType: "SWF",        enType: "SWF",        koNote: "싱가포르 SWF. Long-term focus. PE 16% allocation.",                enNote: "Singapore SWF. Long-term focus. PE allocation 16%." },
  { koName: "Yale Endowment",       enName: "Yale Endowment",     aum:   42, koType: "Endowment",  enType: "Endowment",  koNote: "$42B 작지만 가장 영향력 큰 LP. PE+VC 60%+ 비중.",                enNote: "$42B — small but most influential LP. PE+VC 60%+." },
];

export default function MaFund01Client({ lang }: { lang: Lang }) {
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.1" : "Fund Series · Ch.1"}</span>
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

          {/* § 1 — LP가 누구인가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "LP가 누구인지 — 7가지 archetype" : "Who LPs actually are — seven archetypes"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "PE·VC 시리즈를 시작할 때 거의 항상 GP 시점에서 이야기해요. KKR이 회사를 인수한다, Sequoia가 startup에 투자한다. 그런데 그 KKR이나 Sequoia가 운용하는 자본이 어디서 오느냐 — 그게 LP (Limited Partner) 예요. Fund 시리즈는 LP에서 시작해서 GP를 거쳐 portfolio company까지 자본이 흘러가는 전 과정을 보는 게 목적이에요."
                : "Every PE and VC story usually starts from the GP's side — KKR buys a company, Sequoia backs a startup. But where does the capital KKR or Sequoia deploys come from? That's the LP (Limited Partner). This series follows capital from LPs through GPs to portfolio companies — the full pipe."}</p>
              <p>{ko
                ? "LP는 단일한 그룹이 아니에요. 7가지 종류로 나뉘는데 각자 운용 자본 규모도, 요구하는 수익률도, 투자 기간도, PE에 배분하는 비중도 다 달라요. 한쪽 끝에는 30년 장기 운용을 하는 거대한 pension fund — 미국 CalPERS, 한국 NPS — 가 있고, 반대쪽 끝에는 private bank 채널로 들어오는 개인 HNW도 있어요. 같은 GP fund에 출자한다고 해도 각자 \"왜 출자했나\" 의 동기가 완전히 다릅니다."
                : "LPs aren't one group. Seven distinct types — different AUMs, different return targets, different time horizons, different PE allocation. On one end are 30-year pension funds — CalPERS in the US, NPS in Korea. On the other, high-net-worth individuals coming in via private bank feeders. All commit to the same GP fund, with totally different reasons."}</p>
              <p>{ko
                ? "이 7가지 LP가 어떤 비중으로 글로벌 PE·VC에 자본을 공급하는지 — 그게 GP가 fundraising 할 때 어디를 두드리느냐를 결정합니다. 그래서 첫 챕터는 LP 시점에서 시작해요."
                : "Which of these seven supply most of global PE/VC capital determines where GPs go when they raise — so the first chapter starts on the LP side."}</p>
            </div>

            {/* 7 LP types catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "7가지 LP 타입 — AUM · 요구 수익률 · 투자 기간 · PE 비중" : "Seven LP types — AUM · target return · horizon · PE allocation"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "PE 비중은 portfolio 전체에서 차지하는 % (대표적 범위)." : "PE allocation is the % of total portfolio (typical range)."}
              </p>
              <div className="space-y-3">
                {LP_TYPES.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: ACCENT + "40", background: ACCENT + "08" }}
                  >
                    <div className="grid grid-cols-[1fr_auto] gap-3 items-baseline mb-2">
                      <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? t.koName : t.enName}</span>
                      <div className="flex gap-1.5 flex-shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: ACCENT + "26", color: ACCENT }}>{ko ? t.aumScale : t.enAumScale}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{t.targetRet} · {t.horizon}yr · PE {t.peAlloc}</span>
                      </div>
                    </div>
                    <p className="text-[11.5px] text-gray-600 dark:text-gray-400 leading-snug mb-1.5">{ko ? t.koDesc : t.enDesc}</p>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-500 leading-snug">
                      <span className="font-semibold uppercase tracking-wider text-[9px] mr-1.5" style={{ color: ACCENT }}>{ko ? "대표 사례" : "Examples"}</span>
                      {ko ? t.koExamples : t.enExamples}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 왜 PE/VC에 출자하는가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "왜 PE/VC에 — Illiquidity Premium의 본질" : "Why PE/VC — the illiquidity premium"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Public 시장 (주식·채권) 은 매일 거래 가능하고, 투명하고, 거래 비용이 낮아요. 그런데 LP들이 portfolio의 10-40%를 굳이 PE·VC 같은 illiquid private market에 배분하는 이유가 있어요. 한 단어로 정리하면 \"premium\"."
                : "Public markets — stocks and bonds — are tradable daily, transparent, low cost. Why then do LPs allocate 10-40% of portfolio to illiquid private markets? One word: premium."}</p>
              <p>{ko
                ? "Cambridge Associates의 30년 데이터로 보면 PE median return이 ~12.5%, S&P 500이 ~9.5%. 약 300bps 차이가 \"illiquidity premium\" — 10년 묶이는 대가로 추가로 받는 수익률이에요. 자본을 10년 묶을 수 있는 LP일수록 이 premium을 더 받을 수 있고, 그래서 long-horizon LP (endowment, pension) 가 PE 비중을 높게 가져갑니다."
                : "30 years of Cambridge Associates data: PE median ~12.5% vs S&P 500 ~9.5%. The ~300bps gap is the illiquidity premium — the extra return you collect for locking up capital for 10 years. The longer-horizon the LP, the more it can capture — which is why endowments and pensions allocate so heavily."}</p>
              <p>{ko
                ? "그런데 함정이 있어요. PE의 \"median\" 수익이 12.5%지만 top quartile은 17%, bottom quartile은 6%. Bottom quartile은 사실 public market보다 못 받아요. \"PE에 배분만 하면 알아서 추가 수익이 생긴다\" 는 아니고, **어떤 GP를 고르느냐가 LP의 진짜 작업**이에요. 이게 다음 § 의 asset allocation 모델과 연결됩니다."
                : "There's a trap. The 12.5% median masks a wide spread — top quartile delivers 17%, bottom quartile only 6%. Bottom-quartile PE actually underperforms public markets. 'Just allocate to PE and the extra return comes' isn't true — **picking the right GP is the LP's real job**. This connects to the next section's asset allocation models."}</p>
            </div>

            {/* Return comparison */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Public vs Private — 30년 historical returns (annualized %)" : "Public vs private — 30-year historical returns (annualized %)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Cambridge Associates · S&P 500 long-run data." : "Cambridge Associates and S&P 500 long-run data."}
              </p>
              <div className="space-y-4">
                {RETURN_COMPARE.map((r, i) => {
                  const widthPct = (r.ret / 20) * 100;
                  const isPublic = i === 0;
                  const isMedian = i === 1;
                  const isTop = i === 2;
                  const isBottom = i === 3;
                  const color = isTop ? GREEN : isMedian ? ACCENT : isBottom ? "#dc2626" : BLUE;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? r.koLabel : r.enLabel}</span>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">· {ko ? r.koTag : r.enTag}</span>
                        </div>
                        <span className="text-[12px] font-mono font-bold" style={{ color }}>
                          {r.ret.toFixed(1)}% · σ {r.std.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: color, transformOrigin: "left" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "PE Median과 S&P 500 사이의 300bps 갭이 \"illiquidity premium\". Top quartile은 750bps 더, Bottom quartile은 오히려 350bps 적게. \"평균은 의미 없고 GP 선정이 전부\" 라는 LP 격언이 여기서 나옴."
                  : "300bps gap between PE median and S&P 500 is the illiquidity premium. Top quartile adds another 750bps; bottom quartile lags by 350bps. Hence the LP saying — 'averages don't matter, GP selection is everything.'"}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Asset Allocation */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Asset Allocation — 누가 얼마나 배분하나" : "Asset allocation — who allocates how much"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LP가 portfolio에 PE·VC를 얼마나 배분하느냐는 그 LP의 종류와 시간 지평에 따라 크게 갈려요. 한쪽 극단에 Yale Endowment Model — David Swensen이 1985-2021년 운용 — 이 있고, 다른 쪽 극단에 부채 매칭이 우선인 insurance가 있어요."
                : "How much PE/VC each LP holds depends on its type and time horizon. On one extreme: the Yale Endowment Model run by David Swensen 1985-2021. On the other: insurance with strict liability matching."}</p>
              <p>{ko
                ? "Yale Model의 핵심은 \"perpetual 자본은 illiquidity를 두려워할 필요가 없다\" 라는 발상이에요. 대학 endowment는 영구히 운용되니까, 매년 인출이 4-5% 정도만 필요해요. 그러면 자산의 60-70%를 illiquid alternative (PE·VC·real assets) 에 묻어둘 수 있고, 그 premium을 그대로 가져갑니다. Yale의 30년 IRR이 11-13% 수준으로 미국 endowment 평균 (7-8%) 을 크게 상회한 게 이 모델의 결과."
                : "The Yale Model's premise: 'perpetual capital doesn't need to fear illiquidity.' A university endowment runs forever, withdrawing only 4-5% annually. So 60-70% can sit in illiquid alternatives (PE, VC, real assets) and capture the premium. Yale's 30-year IRR of 11-13% — well above the 7-8% endowment average — is the result."}</p>
              <p>{ko
                ? "Pension fund는 다른 제약이 있어요. CalPERS 같은 대형 pension은 매년 은퇴자에게 지급해야 하는 의무가 있고, AUM 자체가 너무 커서 (수백조원 단위) PE 비중을 무한정 올릴 수 없어요. 글로벌 PE 시장 전체 규모가 한정돼 있으니까. CalPERS의 PE 13%가 사실상 large pension의 상한선에 가까워요. 한국 NPS도 비슷하게 13% target."
                : "Pensions face different constraints. CalPERS-scale pensions have annual retiree payouts and AUM so large that PE allocation can't scale infinitely — global PE market itself is finite. CalPERS' 13% PE is near the practical ceiling for large pensions. Korea's NPS targets a similar 13%."}</p>
            </div>

            {/* Allocation comparison */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Asset Allocation 모델 — 4가지 lens (%)" : "Asset allocation models — 4 lenses (%)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "각 LP의 alternative 비중(PE+VC+Hedge)이 시간 지평과 직결." : "Alternative share (PE+VC+Hedge) per LP scales with time horizon."}
              </p>
              <div className="space-y-4">
                {ALLOCATION.map((a, i) => {
                  const alt = a.pe + a.vc + a.hedgeFund;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[12.5px] font-bold" style={{ color: a.color }}>{ko ? a.koName : a.enName}</span>
                        <span className="text-[10.5px] font-mono">
                          <span className="text-gray-500 dark:text-gray-400">PE {a.pe}% · VC {a.vc}% · HF {a.hedgeFund}% = </span>
                          <span className="font-bold" style={{ color: a.color }}>Alt {alt}%</span>
                        </span>
                      </div>
                      <div className="h-5 rounded overflow-hidden flex">
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="h-full" style={{ width: `${a.publicEq}%`, background: "#94a3b8", transformOrigin: "left" }} title="Public Equity" />
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} className="h-full" style={{ width: `${a.fixedIncome}%`, background: "#cbd5e1", transformOrigin: "left" }} title="Fixed Income" />
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className="h-full" style={{ width: `${a.realAssets}%`, background: "#fbbf24", transformOrigin: "left" }} title="Real Assets" />
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }} className="h-full" style={{ width: `${a.pe}%`, background: ACCENT, transformOrigin: "left" }} title="PE" />
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} className="h-full" style={{ width: `${a.vc}%`, background: "#f97316", transformOrigin: "left" }} title="VC" />
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP} transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }} className="h-full" style={{ width: `${a.hedgeFund}%`, background: "#a855f7", transformOrigin: "left" }} title="Hedge Fund" />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug mt-1">{ko ? a.koNote : a.enNote}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3 text-[10px]">
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: "#94a3b8" }} /> <span className="text-gray-600 dark:text-gray-400">Public Equity</span></div>
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: "#cbd5e1" }} /> <span className="text-gray-600 dark:text-gray-400">Fixed Income</span></div>
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: "#fbbf24" }} /> <span className="text-gray-600 dark:text-gray-400">Real Assets</span></div>
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: ACCENT }} /> <span className="text-gray-600 dark:text-gray-400">PE</span></div>
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: "#f97316" }} /> <span className="text-gray-600 dark:text-gray-400">VC</span></div>
                <div className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded" style={{ background: "#a855f7" }} /> <span className="text-gray-600 dark:text-gray-400">Hedge Fund</span></div>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Global Top LP 카탈로그 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "글로벌 Top LP — NPS는 어디에 위치하나" : "Global top LPs — where does NPS sit?"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "글로벌 GP들이 fundraising 할 때 가장 먼저 두드리는 LP들이 있어요. 단일 fund에 $500M-$2B을 한 번에 commit할 수 있는 \"anchor LP\". 이들의 commitment 없이는 large-cap PE fund 자체가 closing이 안 됩니다. KKR Asia Fund IV 같은 $15B+ fund면 anchor LP 5-10명이 fund 전체의 절반을 차지해요."
                : "When global GPs raise, certain LPs get called first — 'anchor LPs' who can commit $500M-$2B to a single fund. Without them, large-cap PE funds don't close. A $15B+ fund like KKR Asia Fund IV typically has 5-10 anchor LPs accounting for half the total commitment."}</p>
              <p>{ko
                ? "한국 NPS의 위치가 흥미로워요. AUM $700B로 글로벌 3대 pension이고, PE allocation 13% target. 단순 계산하면 PE에 약 $90B을 배분. 매년 10-15개 global PE fund에 $500M-$1B씩 commit하는 거대 anchor LP입니다. KKR, Blackstone, Carlyle 등 모든 large-cap PE의 cornerstone LP 중 하나예요. 동시에 국내 PE (MBK, IMM, Hahn) 에도 가장 큰 단일 출자자."
                : "Korea's NPS sits in a notable spot. $700B AUM — top-3 global pension — with 13% PE target. Simple math: ~$90B in PE. NPS commits $500M-$1B to 10-15 global PE funds annually. A cornerstone LP for KKR, Blackstone, Carlyle, and every large-cap PE. At the same time, it's the single biggest LP for Korea's domestic PE (MBK, IMM, Hahn)."}</p>
            </div>

            {/* Top LP catalog */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "글로벌 Top LP 카탈로그 (AUM $B)" : "Global top LP catalog (AUM $B)"}
              </p>
              <div className="space-y-2.5">
                {TOP_LPS.map((l, i) => {
                  const widthPct = (l.aum / 1800) * 100;
                  const isNPS = l.koName.includes("NPS");
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                      className="rounded-md p-3 border"
                      style={{
                        borderColor: isNPS ? "#dc2626" : ACCENT + "40",
                        background: isNPS ? "#dc26260d" : ACCENT + "06",
                        borderWidth: isNPS ? "1.5px" : "1px",
                      }}
                    >
                      <div className="flex items-baseline justify-between mb-1.5 gap-3">
                        <div className="flex items-baseline gap-2.5 min-w-0">
                          <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? l.koName : l.enName}</span>
                          <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{ko ? l.koType : l.enType}</span>
                        </div>
                        <span className="text-[12px] font-mono font-bold flex-shrink-0" style={{ color: isNPS ? "#dc2626" : ACCENT }}>${l.aum}B</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1.5">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.06, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: isNPS ? "#dc2626" : ACCENT, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? l.koNote : l.enNote}</p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Top 10 글로벌 LP가 글로벌 PE commitment의 25-30%를 차지. NPS는 그 중 한국·아시아 GP의 가장 중요한 단일 LP이고, global PE도 NPS를 한국·아시아 진출 anchor로 활용."
                  : "Top-10 global LPs account for 25-30% of global PE commitments. NPS is the single most important LP for Korea/Asia GPs and a key anchor for global PE entering the region."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — LP의 진짜 고민 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "LP가 매일 실제로 고민하는 것 — Vintage · GP 선정 · Fee" : "What LPs actually worry about — vintage, GP selection, fees"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "지금까지의 이야기 — 7가지 LP 타입, illiquidity premium, asset allocation, 글로벌 anchor LP — 가 LP 시점의 \"큰 그림\" 이라면 LP 팀이 실제로 매일 회의에서 논의하는 건 좀 다른 영역이에요. 세 가지로 압축됩니다. Vintage year risk, GP 선정, Fee."
                : "The big-picture story so far — seven LP types, illiquidity premium, allocation models, global anchors — is the LP-side overview. What LP teams actually debate in daily meetings narrows to three: vintage year risk, GP selection, and fees."}</p>
              <p>{ko
                ? "Vintage year risk가 첫 번째예요. PE fund는 fundraising 시점이 곧 \"vintage\" 가 되는데, 2007 vintage처럼 시장 peak에서 fund를 만들면 비싸게 사고 IRR이 낮아지고, 2009 vintage처럼 위기 직후 fund면 싸게 사서 IRR이 폭발해요. LP는 매년 일정 금액을 commit해서 vintage를 분산하는 게 표준 — 이걸 \"vintage diversification\" 이라 부르고 대형 LP의 핵심 작업입니다."
                : "First, vintage year risk. A PE fund's fundraising year becomes its 'vintage' — 2007 vintages bought at market peak deliver low IRRs; 2009 vintages bought post-crisis deliver outsized returns. LPs commit a steady annual amount to diversify vintages — 'vintage diversification' is core LP work."}</p>
              <p>{ko
                ? "두 번째가 GP 선정. § 2에서 본 quartile spread 때문에, \"어떤 PE fund에 출자하느냐\" 가 LP 수익의 거의 전부를 결정합니다. Top quartile에 들어가면 17%, bottom quartile에 들어가면 6%. 그래서 LP 팀의 절반은 PE GP 추적 (track record, team, strategy fit, ESG, governance) 에 시간을 써요. \"manager selection\" 이라고 부르고, 이것 자체가 별도 전문 분야입니다."
                : "Second, GP selection. The quartile spread from § 2 means 'which PE fund you commit to' decides nearly everything. Top quartile: 17%. Bottom: 6%. Half the LP team's time goes into tracking PE GPs — track record, team, strategy fit, ESG, governance. 'Manager selection' is its own discipline."}</p>
              <p>{ko
                ? "세 번째가 Fee. PE 표준이 \"2 and 20\" — committed capital의 2% management fee + profit의 20% carry. 10년 holding 동안 cumulative fee가 commit의 15-20%까지 쌓여요. 대형 LP일수록 협상력으로 fee 할인 (1.5%) 받고, side letter로 추가 혜택을 얻습니다. Ch.2에서 LPA 조항을 자세히 봅니다."
                : "Third, fees. PE standard is '2 and 20' — 2% management fee on committed capital + 20% carry on profits. Cumulative fees over a 10-year hold reach 15-20% of commitment. Larger LPs negotiate fee discounts (down to 1.5%) and get extras via side letters. Ch.2 walks through LPA terms in detail."}</p>
              <p>{ko
                ? "다음 챕터에서는 그 출자 계약 — LPA — 의 핵심 조항을 봅니다. Commitment vs Drawdown 메커니즘, Capital Call의 timing, Management fee 구조, Carry와 Hurdle, 그리고 대형 LP만 받을 수 있는 Side letter 까지."
                : "Next chapter walks the LPA — the commitment contract — line by line. Commitment vs drawdown, capital call timing, management fee structure, carry and hurdle, and the side letters only large LPs get."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.2 — {ko ? "LPA 핵심 조항과 출자 메커니즘" : "LPA key terms and the mechanics of commitment"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Commitment vs Drawdown · Capital Call timing · Management fee 구조 · Carry · Hurdle · Side Letter — 출자 계약의 mechanics."
                  : "Commitment vs drawdown · capital call timing · management fee · carry · hurdle · side letter — the mechanics of the commitment contract."}
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
