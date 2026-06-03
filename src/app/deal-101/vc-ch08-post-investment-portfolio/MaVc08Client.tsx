"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch08-post-investment-portfolio";

const MONTHLY_UPDATE_TEMPLATE = [
  { section: "Hi-light",        koWhat: "지난 달 wins 3개 · losses 2개 · key learning 1개" },
  { section: "KPI dashboard",   koWhat: "ARR · growth · burn · runway · NDR · cash on hand — vs target" },
  { section: "Wins",             koWhat: "Major customer · key hire · product launch · partnership" },
  { section: "Challenges",       koWhat: "Churn · sales miss · tech issue · regulatory · co-founder 갈등" },
  { section: "Asks",             koWhat: "VC가 도와줄 수 있는 1-3가지 — intro · hiring · advice" },
  { section: "Cash & runway",   koWhat: "Cash on hand · monthly burn · runway months · 다음 raise timing" },
];

const ASSOC_PORTFOLIO_WEEK = [
  { day: "Mon", koTask: "주말 동안 받은 monthly update 7-10건 정리. Slack에 summary post." },
  { day: "Tue", koTask: "포트폴리오 분기 board meeting 2-3건. 각 2-3시간." },
  { day: "Wed", koTask: "Red flag portco emergency call. Hiring intro 진행." },
  { day: "Thu", koTask: "다음 round investor intro · co-investor sync · follow-on 검토." },
  { day: "Fri", koTask: "Internal portfolio review meeting + 분기 reserve allocation 회의." },
];

const VALUE_ADD = [
  { type: "Hiring",          koExample: "Senior engineer · VP Sales · CMO — VC의 talent network 활용", enExample: "Senior engineer, VP Sales, CMO — leverage VC talent network", impact: "High" },
  { type: "BD intro",        koExample: "Portco 간 cross-sell · 잠재 고객 intro · 채널 partner",      enExample: "Portco cross-sell, customer intros, channel partners",         impact: "High" },
  { type: "Follow-on prep",  koExample: "6개월 전부터 다음 round investor sounding · pitch deck review", enExample: "Sound future investors 6 months ahead; review pitch deck",   impact: "High" },
  { type: "Press / PR",       koExample: "TechCrunch · Wired · 한국 스타트업뉴스에 적절 timing push",   enExample: "Push to TechCrunch, Wired, Korean startup press at the right moment", impact: "Mid" },
  { type: "Advisor intro",    koExample: "Senior domain expert · advisory board member",              enExample: "Senior domain experts, advisory board members",                impact: "Mid" },
  { type: "Strategic guidance", koExample: "Board meeting에서 thesis · strategy 질문",                   enExample: "Thesis and strategy questions at board meetings",             impact: "Mid" },
  { type: "Crisis management", koExample: "Co-founder 갈등 mediation · bridge financing 주선",          enExample: "Co-founder mediation, bridge financing",                        impact: "High" },
];

const RESERVE_ALLOC = [
  { koDecision: "Strong upsider — top quartile", enDecision: "Strong upsider — top quartile", koAction: "Pro-rata 또는 super pro-rata 행사 (다음 round 다 참여)", enAction: "Exercise pro-rata or super pro-rata in every future round" },
  { koDecision: "Performing — base case",         enDecision: "Performing — base case",         koAction: "Pro-rata 행사. Reserve 50-100% allocate.",                  enAction: "Take pro-rata; allocate 50-100% of reserve" },
  { koDecision: "Stagnating — concerning",        enDecision: "Stagnating — concerning",         koAction: "Reserve 20-50% only. Bridge 시 \"pay to play\".",          enAction: "Reserve 20-50% only; force \"pay to play\" on a bridge" },
  { koDecision: "Failing — red flag",              enDecision: "Failing — red flag",               koAction: "Reserve 0. Write-down 검토. Strip sale 또는 wind-down.", enAction: "Reserve 0. Consider write-down. Strip sale or wind-down." },
];

const RED_FLAGS = [
  { koFlag: "Runway < 6 months + 다음 raise 미정", enFlag: "Runway < 6 months and no next-raise plan" },
  { koFlag: "Co-founder 1명 이상 leave 또는 갈등 escalation",       enFlag: "Co-founder departures or escalating conflict" },
  { koFlag: "Key customer 1-2명 churn (revenue 20%+ exposure)",     enFlag: "1-2 key customers churn (20%+ revenue exposure)" },
  { koFlag: "Monthly update 2개월+ 부재",                              enFlag: "Monthly update missing 2+ months" },
  { koFlag: "Burn rate가 plan 대비 1.5x 초과 + revenue 정체",        enFlag: "Burn rate exceeds plan by 1.5×; revenue flat" },
  { koFlag: "Sales pipeline coverage < 3x · NDR < 100%",               enFlag: "Sales pipeline coverage <3x; NDR <100%" },
];

const FAMOUS_VALUE_ADD = [
  { name: "Sequoia + Stripe (12년)", koDetail: "Roelof Botha가 12년간 board. IPO 준비 senior CFO·General Counsel cherry-pick. \"VC가 평생 동행\" 표준 setter.", enDetail: "Roelof Botha on the board for 12 years; cherry-picked CFO and GC for IPO prep. Set the standard for lifelong VC partnership." },
  { name: "Benchmark + Uber (Bill Gurley)", koDetail: "8년간 board. Travis Kalanick과 결국 갈등 → 2017년 Travis CEO 사임 강제. Board control의 양면성.", enDetail: "Eight years on the board. Conflict with Travis Kalanick → forced 2017 CEO ouster. The double-edged sword of board control." },
  { name: "알토스벤처스 + Toss (10+년)", koDetail: "한킴이 거의 모든 round 참여. Series A부터 IPO까지 동행. 한국 VC value-add의 모범.",                                                  enDetail: "Han Kim led nearly every round, Series A through IPO. Korea's value-add benchmark." },
  { name: "USV + Twitter", koDetail: "Fred Wilson이 board observer로 7년. Strategic input은 강했지만 Jack Dorsey와 갈등 시 침묵 — investor restraint.",                                  enDetail: "Fred Wilson as board observer for 7 years. Strong strategic input but stayed quiet during Jack Dorsey conflict — investor restraint." },
];

const TOC_ITEMS = [
  { id: "monthly",   ko: "§1. Monthly Update — 양방향 cadence",       en: "§1 Monthly update — the two-way cadence" },
  { id: "assoc-week", ko: "§2. 심사역의 portfolio 한 주",                en: "§2 The associate's portfolio week" },
  { id: "value-add", ko: "§3. Value-add — 7가지 + Reserve allocation", en: "§3 Value-add — seven types + reserve allocation" },
  { id: "red-flag",  ko: "§4. Red flag + Famous Value-add cases",       en: "§4 Red flags + famous value-add cases" },
];

export default function MaVc08Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getVcSeriesNav(SLUG);
  const meta = getVcChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "VC 시리즈" : "VC Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.8</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.8" : "VC Series · Ch.8"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q2 2026 기준` : `~${meta.readingMinutes} min · data as of Q2 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">{TOC_ITEMS.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>))}</ul>
        </div>

        <section id="monthly" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Monthly Update — 양방향 Cadence" : "§ 1 Monthly update — the two-way cadence"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "투자 후 가장 중요한 routine. Founder가 매월 5-10일에 1-2 page email update를 모든 investor에게 발송. 좋은 VC는 readthrough 30분 · 응답 24시간 안. 한국 VC는 reply 늦음 — 주 단위." : "The most important post-investment routine. Founders send 1-2 page email updates to all investors by the 5th-10th of each month. Good VCs read through in 30 minutes and reply within 24 hours. Korean VCs tend to reply later — within a week."}
          </p>
          <h3 className="text-lg font-bold mb-3">{ko ? "Founder Monthly Update 6 sections" : "Founder monthly update — six sections"}</h3>
          <div className="space-y-2 mb-6">
            {MONTHLY_UPDATE_TEMPLATE.map((s, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{s.section}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{s.koWhat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="assoc-week" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 심사역의 Portfolio 한 주 — 15-25 portco 동시 관리" : "§ 2 The associate's portfolio week — running 15-25 portcos at once"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Senior associate · principal은 보통 7-12 board observer + 3-5 voting seat. Partner는 5-8 voting seat. 각 portco가 month 1번 update + 분기 1번 board → 매주 portfolio 일이 15% 시간 차지." : "A senior associate or principal typically observes 7-12 boards and votes on 3-5. Partners hold 5-8 voting seats. Each portco runs one monthly update plus one quarterly board → portfolio work takes ~15% of the week."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            {ASSOC_PORTFOLIO_WEEK.map((d, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-12 font-mono text-xs font-semibold" style={{ color: ACCENT }}>{d.day}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{d.koTask}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="value-add" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. Value-Add 7가지 + Reserve Allocation" : "§ 3 Seven value-add modes + reserve allocation"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Top VC와 average VC를 가르는 것 = 진짜 value-add. 좋은 VC는 7가지 mode 중 최소 3-4개를 적극 활용. Hiring · BD intro · follow-on prep이 가장 큰 impact." : "What separates top VCs from average is real value-add. The good ones actively use 3-4 of seven modes. Hiring, BD intros, and follow-on prep deliver the biggest impact."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-32">Type</th>
                  <th className="text-left p-3">{ko ? "예시" : "Example"}</th>
                  <th className="text-left p-3 w-16">Impact</th>
                </tr>
              </thead>
              <tbody>
                {VALUE_ADD.map((v, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs" style={{ color: ACCENT }}>{v.type}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? v.koExample : v.enExample}</td>
                    <td className="p-3 text-xs font-bold" style={{ color: v.impact === "High" ? ACCENT : "#6b7280" }}>{v.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Reserve Allocation — 분기별 portco 평가" : "Reserve allocation — quarterly portco assessment"}</h3>
          <div className="space-y-2 mb-6">
            {RESERVE_ALLOC.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? r.koDecision : r.enDecision}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? r.koAction : r.enAction}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="red-flag" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Red Flags + Famous Value-Add Cases" : "§ 4 Red flags + famous value-add cases"}</h2>

          <h3 className="text-lg font-bold mb-3 text-red-600 dark:text-red-400">{ko ? "🚨 Portfolio Red Flags 6가지" : "🚨 Six portfolio red flags"}</h3>
          <div className="space-y-2 mb-6">
            {RED_FLAGS.map((f, i) => (
              <div key={i} className="rounded-lg border-l-4 border-red-500 border-r border-y border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-900">
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? f.koFlag : f.enFlag}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Famous Value-Add Cases" : "Famous value-add cases"}</h3>
          <div className="space-y-2 mb-6">
            {FAMOUS_VALUE_ADD.map((c, i) => (
              <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{c.name}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.koDetail : c.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          {nav.next ? (<Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div><div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div></Link>) : <div />}
        </div>
      </div>
    </div>
  );
}
