"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch03-pitch-first-meeting";

const RUBRIC = [
  { factor: "Team / Founder",   weight: 50, koWhat: "Domain expertise · 실행력 · 신뢰성 · co-founder 호흡 · \"Founder-market fit\"",        enWhat: "Domain expertise, execution, trust, co-founder chemistry, \"founder-market fit\"" },
  { factor: "Market (TAM)",     weight: 20, koWhat: "Bottom-up TAM > top-down. $10B+ TAM threshold. Growth rate. Why now (timing).",       enWhat: "Bottom-up TAM beats top-down. $10B+ threshold. Growth rate. Why now (timing)." },
  { factor: "Traction",          weight: 15, koWhat: "Series A 기준 $1M+ ARR · 200%+ YoY · 130%+ NDR · CAC payback < 18m.",                 enWhat: "Series A bar: $1M+ ARR, 200%+ YoY, 130%+ NDR, CAC payback under 18 months." },
  { factor: "Product / Moat",    weight: 10, koWhat: "Network effect · data moat · regulatory moat · switching cost · brand.",              enWhat: "Network effect, data moat, regulatory moat, switching cost, brand." },
  { factor: "Why Now",           weight: 5,  koWhat: "기술 변곡점 · 규제 변화 · 행동 변화 — \"왜 5년 전에는 안 됐는데 지금 되나?\"",          enWhat: "Tech inflection, regulatory shift, behavioral change — \"why didn't this work 5 years ago?\"" },
];

const DECK_10_SLIDES = [
  { slide: "1. Title",         koContent: "Logo + one-liner + 창업자 이름 + 회사 location",            enContent: "Logo + one-liner + founder names + location" },
  { slide: "2. Problem",        koContent: "Visceral 1-2 통계 + 누구의 problem인지 명확히",              enContent: "1-2 visceral statistics + whose problem this is, explicitly" },
  { slide: "3. Solution",       koContent: "Product 한 줄 설명 + key screenshot 1개",                    enContent: "One-line product description + one key screenshot" },
  { slide: "4. Market (TAM)",   koContent: "Bottom-up TAM ($X per customer × Y customers) > top-down",  enContent: "Bottom-up TAM ($X per customer × Y customers) beats top-down" },
  { slide: "5. Product / Demo", koContent: "3-5 screenshot · 핵심 user flow 보여주기",                  enContent: "3-5 screenshots showing the core user flow" },
  { slide: "6. Traction",       koContent: "Hockey stick chart — ARR, user, retention 셋 중 가장 강한 것", enContent: "Hockey stick chart on whichever is strongest: ARR, users, retention" },
  { slide: "7. Business Model", koContent: "Pricing · unit economics · CAC/LTV · gross margin",          enContent: "Pricing, unit economics, CAC/LTV, gross margin" },
  { slide: "8. Competition",    koContent: "2x2 matrix 또는 feature comparison table",                    enContent: "2×2 matrix or feature comparison table" },
  { slide: "9. Team",           koContent: "Founder bio (왜 본인이) + key advisor 1-2명",                enContent: "Founder bios (why these founders) + 1-2 key advisors" },
  { slide: "10. Ask",           koContent: "Raise size + 진행 중인 다른 VC + use of proceeds + timeline", enContent: "Raise size + other VCs in motion + use of proceeds + timeline" },
];

const MEETING_30MIN = [
  { time: "0-2분",   koAction: "Founder가 one-liner + 30초 background. VC가 \"왜 이거?\" 첫 질문 던짐.", enAction: "Founder delivers one-liner + 30-second background. VC asks \"why this?\"" },
  { time: "2-10분",  koAction: "Problem · solution · market 발표 (deck slide 1-4). VC는 listen + question 2-3개.", enAction: "Problem, solution, market (deck slides 1-4). VC listens, asks 2-3 questions." },
  { time: "10-18분", koAction: "Product demo + traction. VC가 \"실제로 customer는 뭐라 하나?\" 질문.",      enAction: "Product demo + traction. VC asks \"what are customers actually saying?\"" },
  { time: "18-24분", koAction: "Business model + competition + team. VC가 unit economics · moat 깊이 파기.",      enAction: "Business model + competition + team. VC drills into unit economics and moat." },
  { time: "24-28분", koAction: "Ask + use of proceeds + 다른 VC. VC가 timeline · process 질문.",                  enAction: "Ask + use of proceeds + other VCs. VC asks about timeline and process." },
  { time: "28-30분", koAction: "VC closing — \"next step\" 약속. \"좋은 deal이면\" 즉시 다음 미팅 schedule.",     enAction: "VC closing — promises next step. If interested, immediately schedules the next meeting." },
];

const FAMOUS_DECKS = [
  { name: "Airbnb Seed Deck (2008)",   slides: "10 slides", koLesson: "Problem (\"Price is an important concern\") · Solution (\"3 clicks to book\") · Market (\"$1.9B 2008\") · 첫 deck가 raw 했음에도 Sequoia가 lead.", enLesson: "Problem (\"Price is an important concern\"), solution (\"3 clicks to book\"), market (\"$1.9B 2008\"). The raw deck still won a Sequoia lead." },
  { name: "WeWork Series A Deck (2014)", slides: "20 slides", koLesson: "Real estate를 \"community\"로 재정의. Benchmark Bruce Dunlevie 설득 — vision 강조, financial은 후순위.", enLesson: "Reframed real estate as \"community.\" Benchmark's Bruce Dunlevie sold on vision, financials secondary." },
  { name: "Toss Series A Deck (2014)",   slides: "15 slides", koLesson: "송금 friction 강조 + 일본·미국 PayPal 비교. 한국 핀테크 regulatory 환경에 대한 thesis 명확.", enLesson: "Highlighted remittance friction with PayPal Japan/US comparisons. Clear thesis on Korean fintech regulation." },
  { name: "Coupang Series A Deck (2011)", slides: "12 slides", koLesson: "Group-buy를 \"Amazon-like commerce\" 로 pivot. Bottom-up Korea e-commerce TAM ($30B by 2020).", enLesson: "Pivoted from group-buy to \"Amazon-like commerce.\" Bottom-up Korean e-commerce TAM of $30B by 2020." },
  { name: "Snap Series A Deck (2013)",   slides: "10 slides", koLesson: "Mobile-first thesis · \"Ephemeral content\" 카테고리 정의. Lightspeed Jeremy Liew가 lead — initial $485K.", enLesson: "Mobile-first thesis, defined the \"ephemeral content\" category. Lightspeed's Jeremy Liew led the initial $485K." },
];

const FOLLOW_UP = [
  { who: "VC → Founder",      timing: "24-48시간 안",   koWhat: "Next step 명확화 — \"interested, here's what we need\" 또는 \"pass with feedback\". 모호한 응답은 No의 sign.", enWhat: "Make next step explicit — \"interested, here's what we need\" or \"pass with feedback.\" Vague responses signal no." },
  { who: "Founder → VC",      timing: "24시간 안",        koWhat: "Thank you email + follow-up materials (asked-for metric · customer reference 등) + 다음 미팅 제안.",              enWhat: "Thank-you email + follow-up materials (requested metrics, customer references) + propose the next meeting." },
  { who: "VC 내부 discussion", timing: "다음 partner meeting (주 1회)", koWhat: "Associate가 Partner에게 1-page memo + 추천 (proceed / pass). 보통 Friday partner meeting.",      enWhat: "Associate gives partner a 1-page memo + recommendation (proceed/pass). Usually at the Friday partner meeting." },
  { who: "Founder follow-up", timing: "1주 후",            koWhat: "VC가 침묵하면 1주 후 follow-up — \"any update?\" 보내기. 2주 후엔 \"taking that as a no\".",                 enWhat: "If VC goes silent, follow up at 1 week with \"any update?\" At 2 weeks, \"taking that as a no.\"" },
];

const TOC_ITEMS = [
  { id: "rubric",      ko: "§1. 심사역의 5-factor Evaluation Rubric",  en: "§1 The associate's five-factor evaluation rubric" },
  { id: "deck",        ko: "§2. 창업자 10-slide Deck 표준 구조",         en: "§2 The founder 10-slide deck template" },
  { id: "30-min",      ko: "§3. 30분 First Meeting Dynamic",          en: "§3 The 30-minute first-meeting dynamic" },
  { id: "follow-up",   ko: "§4. Famous decks + Post-meeting follow-up", en: "§4 Famous decks + post-meeting follow-up" },
];

export default function MaVc03Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getVcSeriesNav(SLUG);
  const meta = getVcChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "VC 시리즈" : "VC Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.3</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.3" : "VC Series · Ch.3"}</span>
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

        <section id="rubric" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 심사역의 5-Factor Evaluation Rubric" : "§ 1 The associate's five-factor evaluation rubric"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "VC associate가 첫 미팅에서 평가하는 5요인. Team이 50% 가중치 — early stage일수록 더 무거움. Sequoia의 유명한 말: \"We bet on the jockey, not the horse.\"" : "The five factors associates assess in a first meeting. Team carries 50% — heavier the earlier the stage. Sequoia's famous line: \"We bet on the jockey, not the horse.\""}
          </p>
          <div className="space-y-2 mb-6">
            {RUBRIC.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="font-bold text-sm">{r.factor}</div>
                  <div className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: ACCENT }}>{r.weight}%</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{ko ? r.koWhat : r.enWhat}</div>
                <div className="h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <div className="h-full" style={{ width: `${r.weight * 2}%`, backgroundColor: ACCENT }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="deck" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 창업자 10-Slide Deck — Sequoia · YC 표준 구조" : "§ 2 The founder 10-slide deck — Sequoia / YC standard"}</h2>
          <div className="space-y-2 mb-6">
            {DECK_10_SLIDES.map((s, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{s.slide}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koContent : s.enContent}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="30-min" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 30분 First Meeting Dynamic" : "§ 3 The 30-minute first-meeting dynamic"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "VC와 창업자의 첫 미팅은 30분. 짧지만 dynamics가 명확하다 — 첫 2분에 VC가 \"interesting?\" 결정, 나머지 28분은 confirm 또는 reject 모드." : "First VC meetings run 30 minutes. Short, but the dynamic is fixed — the VC decides \"interesting?\" in the first 2 minutes; the remaining 28 are confirm or reject mode."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            {MEETING_30MIN.map((m, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-16 font-mono text-xs font-semibold" style={{ color: ACCENT }}>{m.time}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? m.koAction : m.enAction}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="follow-up" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 유명 Decks + Post-Meeting Follow-up" : "§ 4 Famous decks + post-meeting follow-up"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "유명 첫 Deck 5개" : "Five famous first decks"}</h3>
          <div className="space-y-2 mb-6">
            {FAMOUS_DECKS.map((d, i) => (
              <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <div className="font-bold text-sm" style={{ color: ACCENT }}>{d.name}</div>
                  <div className="text-xs text-gray-500">{d.slides}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? d.koLesson : d.enLesson}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Post-Meeting Follow-up 흐름" : "Post-meeting follow-up flow"}</h3>
          <div className="space-y-2 mb-6">
            {FOLLOW_UP.map((f, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-baseline gap-3 mb-1">
                  <div className="font-semibold text-sm" style={{ color: ACCENT }}>{f.who}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{f.timing}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? f.koWhat : f.enWhat}</div>
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
      <Footer />
    </>
  );
}
