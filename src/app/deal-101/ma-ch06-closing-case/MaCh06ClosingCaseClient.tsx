/**
 * M&A 시리즈 Ch.6 — 가격 협상 + 클로징 막판
 *
 * 메인 케이스: Twitter × Musk (2022) $44B — Specific performance가 가격 사수
 * 카운터 케이스: Adobe × Figma (2023) $20B — Regulatory가 deal을 깨고 $1B break fee
 *
 * Sections:
 *  § 1 한 줄 — 막판이 가격을 끝까지 흔든다
 *  § 2 SPA의 4가지 price-shifting 조항 — NWC · MAC · Earnout · Specific performance
 *  § 3 Regulatory 6 hurdle — HSR · EU · MOFCOM · KFTC · CFIUS · sector
 *  § 4 케이스 1: Twitter × Musk — Specific performance가 가격을 사수
 *  § 5 케이스 2: Adobe × Figma — Regulatory가 deal을 깨고 $1B break fee
 *  § 6 IB Lead가 막판에서 실제로 하는 일 + 시리즈 마무리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MA_CHAPTERS, getMaChapterBySlug, getMaSeriesNav } from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SLUG = "ma-ch06-closing-case";
const ACCENT = "#3b82f6";

// ── SPA price-shifting clauses ──────────────────────────────────────
const SPA_CLAUSES = [
  { koName: "NWC adjustment",        enName: "NWC adjustment",        koWhat: "Closing 시점 운전자본이 target보다 적으면 가격에서 차감",                  enWhat: "Working capital below target at closing reduces price",                  impact: "±2-5%" },
  { koName: "MAC (Material Adverse Change)", enName: "MAC clause",     koWhat: "Signing 후 \"중대한 부정적 변화\" 발생 시 buyer가 walk away 가능",        enWhat: "Buyer can walk if a 'material adverse change' occurs after signing",     impact: "Deal kill" },
  { koName: "Earnout",               enName: "Earnout",               koWhat: "Closing 후 1-3년 성과 달성 시 추가 가격. Hidden 가격 변동",                enWhat: "Additional price tied to 1-3yr post-close performance. Hidden price flex", impact: "±10-30%" },
  { koName: "Specific performance",  enName: "Specific performance",  koWhat: "Buyer가 backout 시도 시 court가 closing을 강제 가능. 가격 사수 weapon", enWhat: "Court can force closing if buyer tries to back out. The price-defense weapon",    impact: "Deal save" },
];

// ── Regulatory hurdles ──────────────────────────────────────────────
const REG_HURDLES = [
  { jur: "US HSR",       koLabel: "미국 반독점 (FTC/DOJ)",         enLabel: "US Antitrust (FTC/DOJ)",     koTime: "30일 + Second request 시 12-18개월",  enTime: "30 days + 12-18 months if Second Request",        koTrigger: "거의 모든 \\$120M+ deal",   enTrigger: "Almost any deal \\$120M+" },
  { jur: "EU",           koLabel: "EU Commission",                enLabel: "EU Commission",              koTime: "Phase 1 25일, Phase 2 90-125일",      enTime: "Phase 1: 25 days, Phase 2: 90-125 days",          koTrigger: "EU 매출 €100M+ 양측",         enTrigger: "€100M+ EU turnover on both sides" },
  { jur: "China MOFCOM", koLabel: "중국 SAMR (구 MOFCOM)",         enLabel: "China SAMR (formerly MOFCOM)", koTime: "Phase 1 30일, Phase 2-3 최대 6개월",   enTime: "Phase 1: 30 days, Phase 2-3 up to 6 months",       koTrigger: "중국 매출 RMB 800M+ 또는 글로벌 RMB 12B+", enTrigger: "RMB 800M+ China turnover or RMB 12B+ global" },
  { jur: "Korea KFTC",   koLabel: "한국 공정거래위원회",            enLabel: "Korea Fair Trade Commission", koTime: "Phase 1 30일, Phase 2 120일",          enTime: "Phase 1: 30 days, Phase 2: 120 days",              koTrigger: "한국 매출 KRW 30B+ + 글로벌 KRW 300B+", enTrigger: "KRW 30B+ Korea + KRW 300B+ global" },
  { jur: "CFIUS",        koLabel: "미국 안보심사 (CFIUS)",          enLabel: "US National Security (CFIUS)", koTime: "45일 + Investigation 시 45일 추가",   enTime: "45 days + 45 more if investigation",               koTrigger: "외국 인수자 + critical tech/infra/data", enTrigger: "Foreign acquirer + critical tech/infra/data" },
  { jur: "Sector",       koLabel: "Sector regulator (FCC·FERC·OCC 등)", enLabel: "Sector regulator (FCC/FERC/OCC etc.)", koTime: "Sector마다 다름, 6개월-2년",          enTime: "Varies by sector, 6 months to 2 years",            koTrigger: "Regulated industries (통신·전력·은행 등)", enTrigger: "Regulated industries (telecom, power, banking)" },
];

// ── Twitter Musk timeline ────────────────────────────────────────────
const TWITTER_TIMELINE = [
  { koDate: "2022-04-25", enDate: "Apr 25 2022",  koEvent: "Twitter board가 Musk의 \\$54.20/sh, \\$44B 인수 합의",                                enEvent: "Twitter board accepts Musk's $54.20/sh, $44B offer",                            ok: true },
  { koDate: "2022-05-13", enDate: "May 13 2022",  koEvent: "Musk가 \"bot/spam 비율 fraudulent\" 주장하며 deal pause 시도",                     enEvent: "Musk tries to pause the deal, claiming bot/spam metrics are fraudulent",        ok: false },
  { koDate: "2022-07-08", enDate: "Jul 8 2022",   koEvent: "Musk가 deal terminate 통보 — Twitter 즉시 Delaware Chancery Court 소송",          enEvent: "Musk notifies termination — Twitter immediately sues in Delaware Chancery",     ok: false },
  { koDate: "2022-09-13", enDate: "Sep 13 2022",  koEvent: "Trial 일정 2022-10-17 확정. ★ Specific performance 청구",                            enEvent: "Trial set for Oct 17, 2022. ★ Specific performance claim filed",                ok: false },
  { koDate: "2022-10-04", enDate: "Oct 4 2022",   koEvent: "Trial 2주 전, Musk가 원래 가격 \\$54.20 그대로 closing 동의",                       enEvent: "Two weeks before trial, Musk agrees to close at original $54.20",                ok: true },
  { koDate: "2022-10-27", enDate: "Oct 27 2022",  koEvent: "강제 closing. Twitter 비상장. Musk가 \\$44B 전액 지급",                            enEvent: "Forced closing. Twitter goes private. Musk pays the full $44B",                  ok: true },
];

// ── Adobe Figma timeline ─────────────────────────────────────────────
const ADOBE_TIMELINE = [
  { koDate: "2022-09-15", enDate: "Sep 15 2022",  koEvent: "Adobe × Figma \\$20B 인수 합의 발표 (현금 50% + 주식 50%)",                          enEvent: "Adobe × Figma $20B announced (50% cash + 50% stock)",                            ok: true },
  { koDate: "2022-12",    enDate: "Dec 2022",     koEvent: "UK CMA 1단계 조사 시작",                                                                 enEvent: "UK CMA opens Phase 1 review",                                                    ok: false },
  { koDate: "2023-02",    enDate: "Feb 2023",     koEvent: "EU Commission 1단계 조사 시작",                                                          enEvent: "EU Commission opens Phase 1 review",                                             ok: false },
  { koDate: "2023-06",    enDate: "Jun 2023",     koEvent: "EU + UK 모두 Phase 2 심층조사로 격상",                                                  enEvent: "Both EU and UK escalate to Phase 2 in-depth review",                            ok: false },
  { koDate: "2023-11-20", enDate: "Nov 20 2023",  koEvent: "EU Commission이 deal 반대 입장 표명",                                                    enEvent: "EU Commission signals opposition to the deal",                                   ok: false },
  { koDate: "2023-12-18", enDate: "Dec 18 2023",  koEvent: "★ Adobe와 Figma deal terminate 합의. Adobe가 \\$1B break fee 지급",                  enEvent: "★ Adobe and Figma agree to terminate. Adobe pays $1B break fee",                ok: false },
];

export default function MaCh06ClosingCaseClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const { prev, next } = getMaSeriesNav(SLUG);
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
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.6" : "M&A Series · Ch.6"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.6
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {chapter.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {ko ? "케이스: " : "Cases: "}{ko ? chapter.caseKo : chapter.caseEn}
          </p>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-10">
          <div className="flex gap-1.5 flex-wrap">
            {MA_CHAPTERS.map((ch) => {
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

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* § 1 — One line */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "사인하면 끝이 아니다 — 막판이 가격을 끝까지 흔든다" : "Signing isn't the end — the last mile still moves price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Ch.3-5에서 FDD·valuation·orchestration이 끝나면 IB의 일이 끝난 것처럼 보입니다. 그러나 사실 SPA 사인부터 closing까지 평균 3-9개월이 더 남아있고, 이 기간에 가격이 끝까지 흔들립니다. NWC adjustment 한 줄로 \\$30M, MAC 발동 가능성 평가로 deal 전체가 무너질 수도 있고, regulatory 6 hurdle 중 한 곳에서 막혀 \\$1B break fee 만 남는 결과도 가능."
                : "Through Chapters 3-5, with FDD, valuation, and orchestration done, the IB's job looks complete. In reality, SPA signing to closing takes another 3-9 months on average — and price keeps moving the entire time. A single NWC adjustment line can be $30M; the threat of MAC invocation can collapse the deal; or any one of six regulatory hurdles can block closing, leaving only a $1B break fee."}</p>
              <p>{ko
                ? "이 챕터는 두 케이스로 막판을 보여줍니다. Twitter × Musk (2022) — 사인 후 buyer가 backout 시도했지만 SPA의 specific performance 조항이 가격을 사수했습니다. Adobe × Figma (2023) — SPA는 완벽했지만 EU 규제 당국이 통과를 거부, 15개월 작업이 \\$1B break fee로 끝났습니다."
                : "This chapter shows the last mile through two cases. Twitter × Musk (2022) — buyer tried to back out after signing, but the SPA's specific performance clause held the price. Adobe × Figma (2023) — the SPA was clean, but the EU refused clearance, ending 15 months of work with a $1B break fee."}</p>
            </motion.div>
          </motion.section>

          {/* § 2 — SPA clauses */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "SPA의 4가지 price-shifting 조항" : "SPA's 4 price-shifting clauses"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "SPA (Stock Purchase Agreement) 는 보통 200-400p 분량이지만, 가격을 실제로 흔드는 조항은 4개로 정리됩니다. 이 4개를 어떻게 협상하느냐가 closing 시점에 받는 (또는 내는) 실제 가격을 결정합니다."
                : "An SPA is typically 200-400 pages, but the clauses that actually move price reduce to four. How those four get negotiated decides the real price received (or paid) at closing."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="space-y-2">
              {SPA_CLAUSES.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">{ko ? c.koName : c.enName}</p>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{c.impact}</span>
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? c.koWhat : c.enWhat}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* § 3 — Regulatory */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Regulatory 6 hurdle — 어느 한 곳만 막혀도 deal kill" : "6 regulatory hurdles — any one can kill the deal"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "Cross-border deal은 보통 6개 regulatory body의 승인이 필요합니다. 그 중 하나라도 막히면 deal이 깨집니다. 가장 까다로운 건 EU와 중국 — 둘 다 \"market dominance\" 기준이 까다롭고 conditions를 강하게 요구합니다. CFIUS는 최근 외국 인수자에 특히 sensitive."
                : "A cross-border deal typically requires clearance from six regulatory bodies. Any one blocking can kill the deal. The toughest are the EU and China — both apply strict 'market dominance' standards and demand heavy conditions. CFIUS has become particularly sensitive to foreign acquirers."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="min-w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400">{ko ? "관할" : "Jurisdiction"}</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400">{ko ? "심사 기간" : "Review timeline"}</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400">{ko ? "Trigger" : "Trigger"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REG_HURDLES.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}>
                        <td className="px-3 py-3 font-medium text-gray-800 dark:text-gray-200 align-top">{ko ? r.koLabel : r.enLabel}</td>
                        <td className="px-3 py-3 text-gray-700 dark:text-gray-300 align-top leading-snug">{ko ? r.koTime : r.enTime}</td>
                        <td className="px-3 py-3 text-gray-700 dark:text-gray-300 align-top leading-snug">{ko ? r.koTrigger : r.enTrigger}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.section>

          {/* § 4 — Twitter Musk */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4 · {ko ? "케이스 1" : "Case 1"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Twitter × Musk (2022) — Specific performance가 \\$44B를 사수" : "Twitter × Musk (2022) — Specific performance defends $44B"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "2022년 4월 25일, Twitter 이사회가 Elon Musk의 \\$54.20/sh, \\$44B 인수 제안을 받아들이고 SPA 사인. Twitter advisor는 Goldman Sachs + JP Morgan, Musk advisor는 Morgan Stanley + BofA. 그런데 사인 2주 만에 시장이 폭락하고 tech stock이 30%+ 떨어지자, Musk가 \"Twitter의 bot/spam 사용자 비율이 fraudulent\" 라고 주장하며 deal에서 빠지려고 시도."
                : "On April 25, 2022, Twitter's board accepted Elon Musk's $54.20/sh, $44B offer and signed the SPA. Twitter's advisors were Goldman Sachs + JP Morgan; Musk's were Morgan Stanley + BofA. Two weeks later, markets crashed and tech stocks fell 30%+. Musk tried to exit, claiming Twitter's bot/spam user metrics were 'fraudulent.'"}</p>
              <p>{ko
                ? "Twitter 측 IB와 법무팀은 SPA 사인 시 \"specific performance\" 조항을 단단하게 넣어뒀었습니다. 일반 commercial contract에서는 buyer가 backout 하면 damages (금전 배상) 만 받지만, specific performance 조항이 있으면 court가 \"buyer는 원래 가격에 closing 해야 한다\" 고 명령할 수 있습니다. Twitter는 즉시 Delaware Chancery Court에 소송 제기 — judge Kathaleen McCormick은 specific performance 청구를 진지하게 검토할 의사를 보이며 trial을 10월 17일로 잡음."
                : "Twitter's IB and legal team had locked in a hard 'specific performance' clause at signing. In a typical commercial contract, a backing-out buyer only owes damages. With specific performance, a court can order the buyer to close at the original price. Twitter immediately sued in Delaware Chancery Court — Judge Kathaleen McCormick signaled she'd take the specific performance claim seriously and set trial for October 17."}</p>
              <p>{ko
                ? "Trial 2주 전, Musk 측이 백기를 들었습니다. 2022년 10월 4일, 원래 \\$54.20 가격 그대로 closing에 동의. 10월 27일 강제 closing — Musk는 \\$44B 전액 지급. 이 deal이 specific performance 조항이 실제로 가격을 사수한 가장 famous한 케이스가 됐습니다. 만약 specific performance 없이 normal damages만 있었으면 Musk는 \\$1-2B break fee로 빠져나갔을 것."
                : "Two weeks before trial, Musk capitulated. On October 4, 2022, he agreed to close at the original $54.20. Forced closing happened October 27 — Musk paid the full $44B. This became the most famous case of specific performance actually defending price. Without it, Musk would have walked away with a $1-2B break fee."}</p>
            </motion.div>

            {/* Twitter timeline */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Twitter × Musk — 6개월의 deal-saving drama" : "Twitter × Musk — six months of deal-saving drama"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {TWITTER_TIMELINE.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    className={`p-4 bg-white dark:bg-gray-900 flex items-start gap-3 ${!t.ok ? "border-l-4 border-rose-400" : "border-l-4 border-emerald-400"}`}
                  >
                    <span className="flex-shrink-0 w-20 text-[11px] font-mono text-gray-500 dark:text-gray-400 pt-0.5">{ko ? t.koDate : t.enDate}</span>
                    <p className={`flex-1 text-[12px] leading-snug ${t.ok ? "text-gray-900 dark:text-gray-100" : "text-rose-700 dark:text-rose-300"}`}>{ko ? t.koEvent : t.enEvent}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-blue-50/40 dark:bg-blue-950/20 border-blue-400 dark:border-blue-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-1.5">
                {ko ? "Twitter × Musk가 가르쳐준 lesson" : "What Twitter × Musk taught"}
              </p>
              <p className="text-[13px] text-blue-900 dark:text-blue-100 leading-relaxed">
                {ko
                  ? "SPA 조항 하나가 \\$1B 가치를 만든다. Twitter 측 IB·법무가 signing 시점에 specific performance 조항을 강하게 협상하지 않았다면 deal이 무너졌을 것. 가격 협상 (\\$54.20) 보다 더 중요한 게 \"buyer가 backout 못 하게 만드는 조항\" — 막판 leverage는 SPA에서 시작한다."
                  : "A single SPA clause is worth $1B of value. If Twitter's IB and legal team hadn't negotiated specific performance hard at signing, the deal would have collapsed. More important than the $54.20 price was the clause preventing buyer back-out — last-mile leverage starts at the SPA."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 5 — Adobe Figma */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5 · {ko ? "케이스 2" : "Case 2"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Adobe × Figma (2023) — Regulatory가 deal을 깨고 \\$1B break fee" : "Adobe × Figma (2023) — Regulatory killed the deal, $1B break fee"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Twitter 케이스가 \"SPA가 가격을 사수\" 라면, Adobe × Figma는 \"SPA가 아무리 깨끗해도 regulatory가 deal을 깨면 끝\" 의 케이스. 2022년 9월, Adobe (창의 소프트웨어 1위, Photoshop·Illustrator) 가 Figma (협업 디자인 SaaS 1위) 를 \\$20B에 인수 합의. Adobe advisor는 Goldman Sachs, Figma는 Qatalyst Partners (Frank Quattrone 의 부티크). 사인 시점 모든 advisor는 deal이 regulator를 통과할 거라 평가."
                : "If Twitter showed 'SPA defends price,' Adobe × Figma shows 'no matter how clean the SPA, if regulators kill it, it's over.' In September 2022, Adobe (the leader in creative software — Photoshop, Illustrator) agreed to acquire Figma (the leader in collaborative design SaaS) for $20B. Adobe's advisor was Goldman Sachs; Figma's was Qatalyst Partners (Frank Quattrone's boutique). At signing, every advisor believed the deal would clear regulators."}</p>
              <p>{ko
                ? "그러나 UK CMA가 2022년 12월 조사 시작, EU Commission이 2023년 2월 가세. 두 곳 모두 \"design software 시장 dominance\" 우려 표명. 2023년 6월 두 곳이 모두 Phase 2 심층조사로 격상. 2023년 11월 EU가 deal 반대 명확화. 결국 2023년 12월 18일, Adobe와 Figma는 deal terminate 합의. Adobe가 SPA에 명시된 \\$1B break fee를 Figma에 지급. 15개월 작업과 advisor fee 수백만 달러가 \\$0 valuation 추가로 남음."
                : "But the UK CMA opened a review in December 2022, and the EU Commission joined in February 2023. Both flagged design-software market dominance concerns. By June 2023, both escalated to Phase 2 in-depth review. In November 2023, the EU signaled clear opposition. On December 18, 2023, Adobe and Figma agreed to terminate. Adobe paid the SPA's $1B break fee to Figma. Fifteen months of work and millions in advisor fees ended in $0 incremental value."}</p>
            </motion.div>

            {/* Adobe timeline */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Adobe × Figma — 15개월 regulatory 패배 timeline" : "Adobe × Figma — 15 months of regulatory defeat"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {ADOBE_TIMELINE.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    className={`p-4 bg-white dark:bg-gray-900 flex items-start gap-3 ${!t.ok ? "border-l-4 border-rose-400" : "border-l-4 border-emerald-400"}`}
                  >
                    <span className="flex-shrink-0 w-20 text-[11px] font-mono text-gray-500 dark:text-gray-400 pt-0.5">{ko ? t.koDate : t.enDate}</span>
                    <p className={`flex-1 text-[12px] leading-snug ${t.ok ? "text-gray-900 dark:text-gray-100" : "text-rose-700 dark:text-rose-300"}`}>{ko ? t.koEvent : t.enEvent}</p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "Adobe 시총 영향: Deal 종료 발표 당일 +2.5% (불확실성 제거). Figma는 이후 자체 IPO 검토. Quattrone (Qatalyst) 은 \\$1B break fee가 reward로 평가됨." : "Adobe stock impact: +2.5% on termination day (uncertainty removed). Figma later considered its own IPO. The $1B break fee was viewed as a win for Quattrone (Qatalyst)."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-rose-50/40 dark:bg-rose-950/20 border-rose-400 dark:border-rose-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-700 dark:text-rose-300 mb-1.5">
                {ko ? "Adobe × Figma가 가르쳐준 lesson" : "What Adobe × Figma taught"}
              </p>
              <p className="text-[13px] text-rose-900 dark:text-rose-100 leading-relaxed">
                {ko
                  ? "SPA가 아무리 잘 짜여 있어도 regulatory를 통과 못 하면 deal은 깨진다. IB의 일은 사인 단계에서 regulatory risk를 가격에 반영하거나 (낮은 가격), break fee를 buyer 측에 더 크게 묶거나 (\\$1-2B break fee on buyer), regulatory remedies (divestiture 동의) 를 사전에 협의하는 것. Sector dominance가 분명한 deal (Adobe + Figma는 design software 80%+) 은 사인 시점에 이미 regulatory red flag."
                  : "No matter how well the SPA is drafted, if regulators don't clear it, the deal dies. The IB's job at signing is to reflect regulatory risk in the price (a lower price), lock in a larger buyer-side break fee ($1-2B), or pre-negotiate regulatory remedies (divestiture commitments). Deals with obvious sector dominance (Adobe + Figma covered 80%+ of design software) are red-flagged at signing."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 6 — IB's job + series wrap */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB Lead가 막판에서 실제로 하는 일" : "What IB Lead actually does in the last mile"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "사인 후의 IB의 일은 4가지 — ① SPA 조항이 closing 가격에 어떻게 반영되는지 client에 명확하게 설명, ② Regulatory 6 hurdle별 통과 가능성 평가와 mitigation 전략, ③ Buyer/Seller 어느 쪽이 walk away threat 가질지의 leverage 평가, ④ 최악의 경우 break fee 시나리오 — 누가 누구에게 얼마를 내는가 명확히."
                : "After signing, the IB's job is four things — (1) explain clearly to the client how each SPA clause flows into the closing price, (2) assess each of the six regulatory hurdles and design mitigation, (3) evaluate which side holds the walk-away leverage, (4) make the break-fee scenarios explicit — who pays whom and how much."}</p>
              <p>{ko
                ? "Twitter × Musk와 Adobe × Figma는 정반대의 결과지만 같은 lesson을 가르칩니다. 막판 leverage는 사인 시점의 SPA 조항과 regulatory 평가에서 결정됩니다. Sign 후에 새로 만들어지는 leverage는 거의 없습니다. 그래서 'closing은 사인의 결과' 라는 말이 IB 실무의 핵심 격언입니다."
                : "Twitter × Musk and Adobe × Figma had opposite outcomes but teach the same lesson. Last-mile leverage is set by the SPA clauses and the regulatory assessment at signing. Almost no new leverage is created after signing. That's why 'closing is just the consequence of signing' is the IB practitioner's core line."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "한 줄 정리" : "One line"}</p>
              <p className="text-[14px] text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                {ko
                  ? "Closing은 사인의 결과다. 막판 leverage는 사인 시점 SPA와 regulatory 평가에서 이미 결정돼 있다."
                  : "Closing is the consequence of signing. Last-mile leverage was already set at signing — in the SPA and the regulatory assessment."}
              </p>
            </motion.div>
          </motion.section>

          {/* Series wrap-up */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="rounded-2xl p-6 sm:p-8 border-2" style={{ borderColor: `${ACCENT}30`, background: `linear-gradient(135deg, ${ACCENT}08 0%, ${ACCENT}03 100%)` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "M&A 시리즈 마무리" : "M&A Series Wrap-up"}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{ko ? "여기까지 — IB는 무엇을 하는 사람인가" : "Up to here — what an IB actually does"}</h3>
              <div className="space-y-3 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>{ko
                  ? "이 시리즈가 가르치려 한 것은 한 가지입니다 — IB Lead는 일을 만드는 사람이 아니라 일하는 사람을 만드는 사람. FAS가 EBITDA 숫자를 만들고 (Ch.3), 컨설팅이 projection을 만들고 (Ch.4), 법무가 SPA를 작성하고 (Ch.6), CFO가 financial data를 제공하지만 — IB가 없으면 4개 advisor와 클라이언트가 같은 방향을 가리키지 않습니다."
                  : "This series taught one thing — the IB Lead doesn't make the work, they make the people who make the work. FAS builds the EBITDA numbers (Ch.3), consultants build the projections (Ch.4), lawyers draft the SPA (Ch.6), and the CFO provides the financial data — but without IB, four advisors and the client don't point in the same direction."}</p>
                <p>{ko
                  ? "Bruce Wasserstein이 RJR Nabisco에서 보여준 EBITDA story, Bob Iger가 Pixar에서 만든 narrative valuation, Felix Rohatyn이 NYC bailout에서 디자인한 stakeholder orchestration, Twitter SPA의 specific performance — 이 모든 게 한 가지를 가리킵니다. M&A의 가격은 numbers가 아니라 그 numbers를 둘러싼 narrative · synthesis · structure가 결정한다."
                  : "Bruce Wasserstein's EBITDA story at RJR Nabisco, Bob Iger's narrative valuation for Pixar, Felix Rohatyn's stakeholder orchestration in the NYC bailout, the Twitter SPA's specific performance — they all point to one thing. M&A prices aren't set by numbers — they're set by the narrative, synthesis, and structure built around the numbers."}</p>
              </div>
            </motion.div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
