"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch05-financial-model-ic-memo";

const MODELS = [
  { model: "3-statement projection",   koDetail: "5년 revenue·COGS·OpEx·EBITDA·Cash. Bottom-up build (customer × ARPU × retention).",   enDetail: "5-year revenue, COGS, OpEx, EBITDA, cash — bottom-up (customers × ARPU × retention)." },
  { model: "VC Return Model",          koDetail: "Probability-weighted exit scenarios. MOIC × ownership × probability = expected return.", enDetail: "Probability-weighted exit scenarios. MOIC × ownership × probability = expected return." },
  { model: "Cap Table Waterfall",       koDetail: "Pre/post-round dilution · option pool top-up · liquidation preference 적용 시 분배.",     enDetail: "Pre/post-round dilution, option pool top-up, payout under liquidation preference." },
];

const RETURN_EXAMPLE = [
  { scenario: "Bear (30%)",     exit: "$50M",    ret: "$10M",   moic: "2x",   irr: "25%" },
  { scenario: "Base (50%)",     exit: "$300M",   ret: "$60M",   moic: "12x",  irr: "60%" },
  { scenario: "Bull (20%)",     exit: "$1B",     ret: "$200M",  moic: "40x",  irr: "100%" },
  { scenario: "Weighted avg",   exit: "—",       ret: "—",      moic: "16.5x", irr: "65%" },
];

const IC_MEMO_SECTIONS = [
  { sec: "1. Executive Summary",      pages: "1",   koWhat: "One-page TL;DR — invest $X for Y%, target MOIC Zx, key risks" },
  { sec: "2. Investment Thesis",      pages: "3-5", koWhat: "Why this company × why this market × why now (3 pillar)" },
  { sec: "3. Company Overview",       pages: "5",   koWhat: "History · founders · product · business model · go-to-market" },
  { sec: "4. Market Analysis",        pages: "5-7", koWhat: "Bottom-up TAM + top-down · growth driver · competitive landscape" },
  { sec: "5. Product / Technology",   pages: "3-5", koWhat: "Demo screenshots · architecture · moat · roadmap" },
  { sec: "6. Go-to-Market",           pages: "3",   koWhat: "Sales motion · CAC · channel · expansion path" },
  { sec: "7. Team",                    pages: "2-3", koWhat: "Founder bio · key hires · gaps · advisor" },
  { sec: "8. Financials",              pages: "5-7", koWhat: "Historicals · projections · unit economics · funding plan" },
  { sec: "9. Valuation & Returns",    pages: "3-5", koWhat: "Comp set · pre/post-money math · scenario MOIC/IRR" },
  { sec: "10. Risk Factors",          pages: "2-3", koWhat: "Top 5 risks + mitigation strategy" },
  { sec: "11. Deal Terms",             pages: "2",   koWhat: "Round size · valuation · key terms · board · pro-rata" },
  { sec: "12. Recommendation",         pages: "1",   koWhat: "Strong yes / yes / conditional / no" },
];

const KR_IC_DYNAMICS = [
  { koPoint: "Committee 구성",       enPoint: "Committee composition", koDetail: "Managing Partner + Partner 5-8명 + 외부 자문위원 2-3명 = 총 8-13명", enDetail: "MP + 5-8 partners + 2-3 external advisors = 8-13 total" },
  { koPoint: "주기",                  enPoint: "Cadence",               koDetail: "월간 1회 또는 격주. 대형 fund는 주간.",                                  enDetail: "Monthly or biweekly. Large funds run weekly." },
  { koPoint: "포맷",                   enPoint: "Format",                koDetail: "Memo 30-50 page 사전 distribute → 30분 presentation + 30분 Q&A",     enDetail: "30-50 page memo distributed ahead → 30-min presentation + 30-min Q&A" },
  { koPoint: "Voting",                 enPoint: "Voting",                koDetail: "Unanimous (top-tier 한국 VC) 또는 super-majority (75%+)",               enDetail: "Unanimous (top-tier KR VC) or super-majority (75%+)" },
  { koPoint: "Conditional approval",    enPoint: "Conditional approval",  koDetail: "통과 못 하면 추가 DD → 2-3주 후 재상정. 2회 fail이면 사실상 dead.",   enDetail: "If it doesn't pass: more DD → re-submit in 2-3 weeks. Two fails effectively kill it." },
];

const US_VS_KR_IC = [
  { dim: "Committee size",       us: "5-8 partners",            kr: "8-13 (including outside advisors)" },
  { dim: "Cadence",              us: "Weekly partner meeting",   kr: "Monthly / biweekly committee" },
  { dim: "Format",               us: "10-20 slide deck",         kr: "30-50 page memo" },
  { dim: "Decision speed",       us: "Within 1 week",            kr: "2-4 weeks" },
  { dim: "Voting requirement",    us: "Majority (some unanimous)", kr: "Unanimous or super-majority" },
  { dim: "Outside advisor role",  us: "Rare (board observer)",    kr: "Actively votes (regulatory legacy)" },
];

const TOC_ITEMS = [
  { id: "models",    ko: "§1. 심사역의 3 Financial Model",      en: "§1 The associate's three financial models" },
  { id: "return",    ko: "§2. VC Return Model 예제",            en: "§2 VC return model worked example" },
  { id: "memo",      ko: "§3. IC Memo 12 Section 표준 구조",     en: "§3 The 12-section IC memo template" },
  { id: "kr-ic",     ko: "§4. 한국 IC dynamics + US vs KR 비교",  en: "§4 Korean IC dynamics + US vs KR comparison" },
];

export default function MaVc05Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.5</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.5" : "VC Series · Ch.5"}</span>
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

        <section id="models" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 심사역의 3 Financial Model" : "§ 1 The associate's three financial models"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Associate가 IC 가기 전 3개 모델을 직접 build한다. (1) 3-statement projection — DD financial 검증, (2) VC return model — IC 핵심 슬라이드, (3) Cap table waterfall — term sheet negotiation 무기. 총 작성 시간 20-40시간." : "Pre-IC, the associate builds three models: (1) 3-statement projection for DD financials, (2) VC return model — the centerpiece IC slide, (3) cap-table waterfall — the negotiation weapon. 20-40 hours total."}
          </p>
          <div className="space-y-2 mb-8">
            {MODELS.map((m, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{m.model}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? m.koDetail : m.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="return" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. VC Return Model — Worked Example" : "§ 2 VC return model — worked example"}</h2>
          <div className="rounded-xl border-2 p-5 mb-6" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <div className="text-sm font-semibold mb-3">{ko ? "Deal: $5M invest @ $25M post-money (20% ownership)" : "Deal: $5M invest @ $25M post-money (20% ownership)"}</div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <table className="w-full text-sm bg-white dark:bg-gray-900">
                <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    <th className="text-left p-3">Scenario</th>
                    <th className="text-right p-3">Exit value</th>
                    <th className="text-right p-3">VC return</th>
                    <th className="text-right p-3">MOIC</th>
                    <th className="text-right p-3">IRR (7yr)</th>
                  </tr>
                </thead>
                <tbody>
                  {RETURN_EXAMPLE.map((r, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${r.scenario.includes("Weighted") ? "font-bold" : ""}`}>
                      <td className="p-3 text-xs">{r.scenario}</td>
                      <td className="p-3 text-right font-mono text-xs">{r.exit}</td>
                      <td className="p-3 text-right font-mono text-xs">{r.ret}</td>
                      <td className="p-3 text-right font-mono text-xs" style={{ color: ACCENT }}>{r.moic}</td>
                      <td className="p-3 text-right font-mono text-xs" style={{ color: ACCENT }}>{r.irr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-gray-600 dark:text-gray-400 italic">
              {ko ? "Fund target return = 3x MOIC. 이 deal weighted avg 16.5x → fund returner 가능성. 단, Bull case의 probability가 진짜 20%인지가 핵심." : "Fund target = 3x MOIC. This deal's weighted 16.5x → potential fund returner. But the bull-case 20% probability is the real question."}
            </div>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="memo" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. IC Memo — 12 Section · 30-50 Page 표준 구조" : "§ 3 IC memo — 12 sections, 30-50 pages standard"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "심사역 입장에서 IC memo는 분기 최대 산출물. 30-50 page · 작성 시간 40-80시간. Partner와 3-5번 iteration 거친 후 IC 상정." : "From the associate's seat, IC memos are the quarter's biggest output: 30-50 pages, 40-80 hours, 3-5 iterations with the partner before submission."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">Section</th>
                  <th className="text-left p-3 w-16">Pages</th>
                  <th className="text-left p-3">{ko ? "내용" : "Content"}</th>
                </tr>
              </thead>
              <tbody>
                {IC_MEMO_SECTIONS.map((s, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{s.sec}</td>
                    <td className="p-3 text-xs font-mono">{s.pages}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{s.koWhat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="kr-ic" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 한국 IC Dynamics + US vs KR 비교" : "§ 4 Korean IC dynamics + US vs KR comparison"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "🇰🇷 한국 IC 운영" : "🇰🇷 Korean IC operations"}</h3>
          <div className="space-y-2 mb-6">
            {KR_IC_DYNAMICS.map((p, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? p.koPoint : p.enPoint}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "US vs KR — 6가지 차이" : "US vs KR — six differences"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-44">{ko ? "차원" : "Dimension"}</th>
                  <th className="text-left p-3">🇺🇸 US</th>
                  <th className="text-left p-3">🇰🇷 Korea</th>
                </tr>
              </thead>
              <tbody>
                {US_VS_KR_IC.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{r.dim}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300">{r.us}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300">{r.kr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
