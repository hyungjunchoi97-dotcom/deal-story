"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch04-due-diligence";

const DD_WORKSTREAMS = [
  { stream: "Customer DD",   owner: "심사역 본인",     ownerEn: "Associate",         koWhat: "Top 10-20 customer list 요청 → 7-10명 30분 통화. NPS · 왜 샀나 · churn 이유 · 가격 인상 시 reaction.", enWhat: "Request top 10-20 customer list, 30-min calls with 7-10. NPS, why bought, churn reasons, reaction to price hike.", duration: "2-3주", cost: "Internal" },
  { stream: "Tech DD",       owner: "외부 CTO advisor", ownerEn: "External CTO advisor", koWhat: "Architecture review · code quality · scalability · security · open source dependency · IP ownership.",                  enWhat: "Architecture review, code quality, scalability, security, open-source dependencies, IP ownership.",                  duration: "2-3주", cost: "$5-15K" },
  { stream: "Financial DD",  owner: "외부 accountant",  ownerEn: "External accountant", koWhat: "ARR vs MRR 정확성 · cohort retention · COGS classification · runway · burn multiple.",                                       enWhat: "ARR vs MRR accuracy, cohort retention, COGS classification, runway, burn multiple.",                                  duration: "2-3주", cost: "$10-30K" },
  { stream: "Legal DD",      owner: "외부 변호사",       ownerEn: "External counsel",   koWhat: "Cap table · option pool · convertible note · employment agreement · IP ownership · regulatory issues.",                       enWhat: "Cap table, option pool, convertibles, employment agreements, IP ownership, regulatory issues.",                       duration: "2-3주", cost: "$15-50K" },
  { stream: "Reference",      owner: "심사역 본인",      ownerEn: "Associate",          koWhat: "Founder의 전 직장 동료 3-5명 통화 · co-founder 관계 · 위기 시 행동.",                                                          enWhat: "Calls with 3-5 ex-colleagues, co-founder dynamics, behavior in crisis.",                                              duration: "1-2주", cost: "Internal" },
  { stream: "Market DD",      owner: "심사역 + advisor", ownerEn: "Associate + advisor", koWhat: "TAM 검증 · competitive landscape · regulatory trend · expert call (GLG / Third Bridge · 한국 expertise).",                  enWhat: "TAM validation, competitive landscape, regulatory trends, expert calls (GLG, Third Bridge).",                          duration: "1-2주", cost: "$5-20K" },
];

const DD_TIMELINE = [
  { week: "Week 1", koTask: "DD kickoff · checklist 작성 · workstream owner 분배 · data room access 받기" },
  { week: "Week 2", koTask: "Customer list 받고 customer call schedule. Tech DD vendor 계약. Legal DD 시작." },
  { week: "Week 3", koTask: "Customer call 5-7건 완료. Financial DD draft report. Tech DD interim findings." },
  { week: "Week 4", koTask: "Reference call. Market DD expert call 3-5건. 1차 red flag escalation." },
  { week: "Week 5", koTask: "모든 workstream final report. Partner와 DD review meeting. IC memo 작성 시작." },
  { week: "Week 6", koTask: "IC memo finalize. IC presentation prep. 통과 시 term sheet draft." },
];

const DATA_ROOM = [
  { folder: "1. Corporate", koItems: "정관 · 주주명부 · 이사회 의사록 · cap table (Carta export)" },
  { folder: "2. Financial", koItems: "지난 3년 P&L/BS/CF · monthly 12개월 · projection model · bank statement" },
  { folder: "3. Customer / Sales", koItems: "Customer list · contracts (top 20) · sales pipeline · CRM export" },
  { folder: "4. Product / Tech", koItems: "Product roadmap · architecture diagram · open source license · SOC 2 audit" },
  { folder: "5. HR / Team", koItems: "Org chart · employment agreement · stock option grant · key hire pipeline" },
  { folder: "6. Legal / IP", koItems: "Patent · trademark · domain · litigation history · regulatory filing" },
  { folder: "7. Cap Table / Equity", koItems: "Cap table · prior round docs (SAFE · note) · vesting schedule" },
  { folder: "8. Customer References", koItems: "Reference list (top 10-20) + intro email template" },
];

const PASS_SIGNALS = [
  { koSignal: "Customer call에서 NPS 70+ + churn 이유가 \"기능 부족\" (not \"too expensive\")", enSignal: "Customer NPS 70+ and churn reason is \"missing features\" (not \"too expensive\")" },
  { koSignal: "Tech DD에서 \"production-grade\" 평가 + scalability path 명확",                  enSignal: "Tech DD calls it \"production-grade\" with a clear scalability path" },
  { koSignal: "Financial DD에서 ARR과 cohort data가 financial model과 100% tie out",            enSignal: "Financial DD shows ARR and cohort data tying out 100% to the model" },
  { koSignal: "Reference에서 \"would work with again\" 일관됨",                                  enSignal: "References consistently say \"would work with again\"" },
  { koSignal: "Market expert이 \"top 3 player\" 또는 \"clear category leader\" 평가",            enSignal: "Market expert calls the company \"top 3\" or \"clear category leader\"" },
];

const FAIL_SIGNALS = [
  { koSignal: "Customer 5명 통화에 churn 이유 모두 다름 — PMF 의심",                              enSignal: "Five customers cite different churn reasons — PMF doubts" },
  { koSignal: "Tech DD에서 \"technical debt 크다\" + \"리팩토링 필요\"",                          enSignal: "Tech DD flags large technical debt and need for refactoring" },
  { koSignal: "ARR과 reported revenue 사이 10%+ gap — counting 방법 의심",                       enSignal: "ARR and reported revenue diverge 10%+ — counting methodology suspect" },
  { koSignal: "Reference 한 명이 \"strong personality clash\" 또는 \"hard to manage\"",            enSignal: "One reference cites \"strong personality clash\" or \"hard to manage\"" },
  { koSignal: "Cap table에 dormant co-founder 또는 unvested founder shares 존재",                   enSignal: "Cap table shows a dormant co-founder or unvested founder shares" },
];

const TOC_ITEMS = [
  { id: "workstreams", ko: "§1. 6 Workstream + 심사역 coordination", en: "§1 Six workstreams + associate coordination" },
  { id: "timeline",    ko: "§2. 4-6주 DD Timeline",                  en: "§2 4-6 week DD timeline" },
  { id: "data-room",   ko: "§3. 창업자 Data Room 구조 (8 folders)",   en: "§3 Founder's data room — eight folders" },
  { id: "signals",     ko: "§4. DD 통과 / 실패 signals",              en: "§4 DD pass / fail signals" },
];

export default function MaVc04Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.4</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.4" : "VC Series · Ch.4"}</span>
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

        <section id="workstreams" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 6 DD Workstreams + 심사역 Coordination" : "§ 1 Six DD workstreams + associate coordination"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "DD는 6 workstream으로 분리된다. Associate가 owner를 분배하고 weekly status meeting으로 sync. Total external vendor cost는 Series A 기준 $40-130K — round size의 1-2%." : "DD splits into six workstreams. The associate assigns owners and runs weekly sync. Total external vendor cost runs $40-130K for Series A — 1-2% of round size."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-32">{ko ? "Workstream" : "Workstream"}</th>
                  <th className="text-left p-3 w-36">{ko ? "Owner" : "Owner"}</th>
                  <th className="text-left p-3">{ko ? "내용" : "Detail"}</th>
                  <th className="text-left p-3 w-20">{ko ? "기간" : "Duration"}</th>
                  <th className="text-left p-3 w-24">Cost</th>
                </tr>
              </thead>
              <tbody>
                {DD_WORKSTREAMS.map((w, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs" style={{ color: ACCENT }}>{w.stream}</td>
                    <td className="p-3 text-xs">{ko ? w.owner : w.ownerEn}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? w.koWhat : w.enWhat}</td>
                    <td className="p-3 text-xs font-mono">{w.duration}</td>
                    <td className="p-3 text-xs font-mono">{w.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="timeline" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 4-6주 DD Timeline" : "§ 2 4-6 week DD timeline"}</h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            {DD_TIMELINE.map((t, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-20 font-mono text-xs font-semibold" style={{ color: ACCENT }}>{t.week}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{t.koTask}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="data-room" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 창업자 Data Room — 8 Folders" : "§ 3 Founder's data room — eight folders"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Data room은 보통 DocSend (US) · Notion · Google Drive로 구성. VC가 어느 folder를 자주 보는지 analytics로 확인 — \"Customer reference\" 자주 보면 close 임박." : "Data rooms typically run on DocSend, Notion, or Google Drive. VCs track which folders get viewed — frequent \"Customer reference\" hits signal an imminent close."}
          </p>
          <div className="space-y-2 mb-6">
            {DATA_ROOM.map((d, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{d.folder}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{d.koItems}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="signals" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. DD 통과 / 실패 Signals" : "§ 4 DD pass / fail signals"}</h2>

          <h3 className="text-lg font-bold mb-3" style={{ color: ACCENT }}>{ko ? "✅ Pass signals 5가지" : "✅ Five pass signals"}</h3>
          <div className="space-y-2 mb-6">
            {PASS_SIGNALS.map((s, i) => (
              <div key={i} className="rounded-lg border-l-4 border-r border-y border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-900" style={{ borderLeftColor: ACCENT }}>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koSignal : s.enSignal}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3 text-red-600 dark:text-red-400">{ko ? "❌ Fail signals 5가지" : "❌ Five fail signals"}</h3>
          <div className="space-y-2 mb-6">
            {FAIL_SIGNALS.map((s, i) => (
              <div key={i} className="rounded-lg border-l-4 border-red-500 border-r border-y border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-900">
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koSignal : s.enSignal}</div>
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
