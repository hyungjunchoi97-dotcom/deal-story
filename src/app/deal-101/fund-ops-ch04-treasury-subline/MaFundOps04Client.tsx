"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch04-treasury-subline";

const TREASURY_DAILY = [
  { time: "07:00", koAction: "Asia 마감 cash 확인 — Tokyo/HK custody 잔액 + overnight FX", enAction: "Check Asia close cash — Tokyo/HK custody balances and overnight FX" },
  { time: "09:00", koAction: "당일 expected wires 점검 (capital call · distribution · deal funding)", enAction: "Review today's expected wires (capital calls, distributions, deal funding)" },
  { time: "11:00", koAction: "Sub-line utilization check — drawdown 또는 repayment 결정", enAction: "Sub-line utilization check — decide on drawdown or repayment" },
  { time: "14:00", koAction: "Short-term cash 운용 — T-bill ladder rolling, MMF 배치", enAction: "Short-term cash deployment — T-bill ladder rolling, MMF positioning" },
  { time: "16:00", koAction: "FX hedge mark-to-market · forward roll-over", enAction: "FX hedge mark-to-market and forward roll-overs" },
  { time: "17:00", koAction: "EOD cash reconciliation — bank statements vs internal ledger 100% match", enAction: "EOD cash reconciliation — bank statements vs. internal ledger, 100% match" },
];

const SUB_LINE_VS_NAV = [
  { dim: "담보 (Collateral)",      dimEn: "Collateral",         koSub: "LP commitment (uncalled portion)", enSub: "LP commitments (uncalled portion)", koNav: "Fund's portfolio NAV", enNav: "Fund's portfolio NAV" },
  { dim: "사용 시점",                dimEn: "When used",          koSub: "Investment period (year 1-5) — 자주", enSub: "Investment period (years 1-5) — frequently", koNav: "Harvest period (year 5+) — 만기 임박 시", enNav: "Harvest period (year 5+) — late in fund life" },
  { dim: "Advance Rate / LTV",      dimEn: "Advance rate / LTV", koSub: "Commitment의 65-85% available", enSub: "65-85% of uncalled commitments available", koNav: "NAV의 10-25% (보수적)", enNav: "10-25% of NAV (conservative)" },
  { dim: "Pricing (Q1 2026)",       dimEn: "Pricing (Q1 2026)",  koSub: "SOFR + 150-250bp · undrawn fee 25-50bp", enSub: "SOFR + 150-250bp · 25-50bp undrawn fee", koNav: "SOFR + 350-600bp · 더 비쌈", enNav: "SOFR + 350-600bp — significantly more expensive" },
  { dim: "주요 lenders",             dimEn: "Lead lenders",       koSub: "Wells Fargo · SMBC · MUFG · ING · Sumitomo", enSub: "Wells Fargo · SMBC · MUFG · ING · Sumitomo", koNav: "17Capital · Hark · Pemberton · 일부 mega bank", enNav: "17Capital · Hark · Pemberton · select megabanks" },
  { dim: "주요 위험",                dimEn: "Key risk",           koSub: "Bank이 facility 회수 (COVID 2020 · SVB 2023)", enSub: "Bank pulls the facility (COVID 2020, SVB 2023)", koNav: "Portfolio mark-down trigger → margin call", enNav: "Portfolio mark-down triggers margin calls" },
];

const RECAP_STEPS = [
  { step: 1, koLabel: "Refinancing thesis 수립", enLabel: "Develop the refinancing thesis", koDetail: "Portco가 인수 후 3-5년, EBITDA 성장, leverage 여유 생김. \"기존 $600M debt → $900M으로 늘려서 $300M cash out\".", enDetail: "Portco is 3-5 years post-acquisition with growing EBITDA and leverage headroom. \"Refinance the $600M debt to $900M and pay out $300M.\"" },
  { step: 2, koLabel: "LP advisory committee notice", enLabel: "Notice to the LPAC", koDetail: "LPA 상 material event에 해당 — 보통 30일 전 LPAC 통지. Conflict of interest 평가.", enDetail: "It's a material event under the LPA — typically 30-day advance LPAC notice. Conflict of interest assessment." },
  { step: 3, koLabel: "Debt syndication", enLabel: "Debt syndication", koDetail: "기존 senior lender refinance + 추가 facility. HY bond · TLB · unitranche 등 instrument 선택.", enDetail: "Refinance existing senior debt plus add capacity. Choose among HY bonds, TLB, unitranche, etc." },
  { step: 4, koLabel: "Special distribution declare", enLabel: "Declare a special distribution", koDetail: "Tax counsel이 return of capital vs gain 구분. American waterfall이면 deal level carry 즉시 발생.", enDetail: "Tax counsel splits return-of-capital from gain. Under American waterfall, deal-level carry crystallizes immediately." },
  { step: 5, koLabel: "Wire distribution + K-1 amendment", enLabel: "Wire distribution + K-1 amendment", koDetail: "LP별 분배. US LP에 K-1 amendment. Recallable provision이면 분배금이 commitment의 25%까지 다시 호출 가능.", enDetail: "Per-LP wires. Amended K-1s for US LPs. If recallable, up to 25% of commitment can be called again." },
];

const COVID_2020 = {
  koTimeline: "2020년 2월 말 — 시장 폭락 시작. 3월 12일 — 다우 -2,352pt 사상 최대 낙폭. PE는 sub-line 활용 record high에서 직격탄.",
  enTimeline: "Late February 2020 — markets collapse. March 12 — Dow drops 2,352 points, the largest one-day loss ever. PE was caught with sub-line utilization at record highs.",
  koAttack: "Sub-line lender (Wells Fargo · MUFG · SMBC) 일부가 covenant trigger 시 facility 회수 시도. Borrowing base 재산정 요구 — 일부 LP의 financial stress가 reflected.",
  enAttack: "Sub-line lenders (Wells Fargo, MUFG, SMBC) attempted facility pulls when covenants tripped. Borrowing base recalculations forced — reflecting some LPs' financial stress.",
  koResponse: "PE side: (1) 긴급 capital call로 sub-line 상환, (2) hold deal 일시 중단, (3) LP communication 강화. 일부 mega-cap (Blackstone · KKR)은 자체 cash로 대응.",
  enResponse: "PE response: (1) emergency capital calls to repay sub-lines, (2) freeze hold-period deals, (3) ramp up LP communication. Some mega-caps (Blackstone, KKR) used own cash.",
  koAftermath: "ILPA Sub-line Transparency Guidelines (2020 발표) — utilization 분기 disclosure 의무화. 2021-2023 LP가 sub-line 사용 제한 (commitment의 50% 이하).",
  enAftermath: "ILPA's 2020 Sub-line Transparency Guidelines mandated quarterly disclosure. Through 2021-2023, LPs capped sub-line use (often <50% of commitments).",
};

const SVB_2023 = {
  koTimeline: "2023년 3월 8일 — SVB가 $1.8B 손실 발표. 3월 9일 — 24시간 만에 $42B 인출. 3월 10일 — FDIC takeover. 3월 12일 — 정부 backstop 발표.",
  enTimeline: "March 8, 2023 — SVB discloses $1.8B loss. March 9 — $42B withdrawn in 24 hours. March 10 — FDIC takeover. March 12 — Government backstop announced.",
  koImpact: "SVB는 VC 펀드의 #1 sub-line lender + VC-backed startup의 메인 뱅크. 한 곳에 sub-line + treasury 모두 집중된 PE/VC들이 가장 큰 타격.",
  enImpact: "SVB was the #1 sub-line lender to VC funds and the main bank for VC-backed startups. PE/VC firms with both sub-lines and treasury concentrated there were hit hardest.",
  koResponse: "VC 진영 (Founders Fund · Coatue · USV)이 portco들에게 \"즉시 출금\" 권고 → bank run 가속. PE는 sub-line 대체 lender (MUFG · ING · Sumitomo) 긴급 수배.",
  enResponse: "VCs (Founders Fund, Coatue, USV) urged portcos to withdraw immediately, accelerating the run. PE scrambled to replace sub-lines with MUFG, ING, Sumitomo.",
  koAftermath: "Multi-bank treasury가 post-SVB 표준 (2-3개 분산). ILPA가 fund-level concentration limit 가이드 발행. JPM·HSBC가 UK/global SVB 자산 인수.",
  enAftermath: "Multi-bank treasury (2-3 banks) became the post-SVB standard. ILPA issued fund-level concentration guidance. JPMorgan and HSBC absorbed UK/global SVB assets.",
};

const NAV_FACILITY_2026 = [
  { koPoint: "시장 규모", enPoint: "Market size",      koDetail: "2022년 $40B → 2024년 $80B → Q1 2026 $130B+ 예상. 가장 빨리 성장하는 fund finance 영역.", enDetail: "$40B in 2022, $80B in 2024, expected $130B+ by Q1 2026 — the fastest-growing corner of fund finance." },
  { koPoint: "Use cases",       enPoint: "Use cases",         koDetail: "(a) Bridge to exit · (b) Continuation fund 자금조달 · (c) Portfolio cash distribution 가속 · (d) Late-stage capital call 회피.", enDetail: "(a) Bridge to exit, (b) financing continuation funds, (c) accelerating distributions, (d) avoiding late-stage capital calls." },
  { koPoint: "주요 lenders",    enPoint: "Lead lenders",      koDetail: "17Capital · Hark Capital · Pemberton · 일부 mega bank (Goldman · JPM PE Group).", enDetail: "17Capital, Hark Capital, Pemberton, plus select megabanks (Goldman, JPM PE Group)." },
  { koPoint: "LP 우려",         enPoint: "LP concerns",       koDetail: "Distribution이 portfolio cash flow가 아니라 leverage로 발생 → IRR 인위적 부풀리기 가능. 2024년부터 LP들이 \"clear use case\" 요구.", enDetail: "Distributions funded by leverage rather than portfolio cash flow — artificial IRR boost. LPs began demanding \"clear use cases\" from 2024." },
  { koPoint: "ILPA 입장",        enPoint: "ILPA stance",       koDetail: "2025년 NAV Facility Guidance — LPAC 승인 의무, use case 명시, quarterly LP reporting 요구. Q1 2026부터 사실상 표준.", enDetail: "ILPA's 2025 NAV Facility Guidance requires LPAC approval, explicit use case, and quarterly LP reporting — the de facto standard from Q1 2026." },
];

const TOC_ITEMS = [
  { id: "treasury-daily", ko: "§1. Treasury Daily Routine + Multi-bank 원칙", en: "§1 Treasury daily routine + multi-bank principle" },
  { id: "subline-nav",    ko: "§2. Sub-line vs NAV Facility 비교", en: "§2 Sub-line vs NAV facility" },
  { id: "covid-svb",      ko: "§3. COVID 2020 + SVB 2023 위기 dissection", en: "§3 COVID 2020 and SVB 2023 dissected" },
  { id: "recap-2026",     ko: "§4. Dividend Recap mechanics + 2026 NAV Facility 폭증", en: "§4 Dividend recap mechanics + the 2026 NAV-facility boom" },
];

export default function MaFundOps04Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);
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
          <span className="mx-2">›</span><span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.4</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "Fund Ops 시리즈 · Ch.4" : "Fund Ops Series · Ch.4"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q1 2026 기준` : `~${meta.readingMinutes} min · data as of Q1 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">
            {TOC_ITEMS.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>))}
          </ul>
        </div>

        <section id="treasury-daily" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Treasury Daily Routine — 매일 cash 100% reconcile" : "§ 1 Treasury daily routine — reconciling cash 100% every day"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Treasury team의 황금률: \"매일 EOD 기준 cash가 어디 있는지 1센트 단위로 안다.\" $5B fund 기준 daily cash position이 $50M-200M 변동, FX exposure $500M+, sub-line drawn $100M-1B 변동. 한 곳 reconciliation 빠지면 다음 분기 NAV가 틀어진다." : "The treasury golden rule: \"At EOD every day, we know where every cent is.\" A $5B fund sees daily cash swings of $50-200M, FX exposure of $500M+, and sub-line balances oscillating $100M-$1B. Miss one reconciliation and next quarter's NAV breaks."}
          </p>

          <h3 className="text-lg font-bold mb-3">{ko ? "Treasury Manager의 하루" : "A treasury manager's day"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            {TREASURY_DAILY.map((d, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-16 font-mono text-sm font-semibold" style={{ color: ACCENT }}>{d.time}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? d.koAction : d.enAction}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-2 p-5 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "Multi-bank Treasury 원칙 (post-SVB 표준)" : "The multi-bank treasury principle (post-SVB)"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "최소 2-3개 bank 분산. 한 bank에 fund cash의 50% 이상 집중 금지." : "Minimum 2-3 banks. Never concentrate 50%+ of fund cash at a single bank."}</li>
              <li>• {ko ? "Sub-line lender ≠ operating bank. 한 곳에서 둘 다 받으면 bank 위기 시 동시 동결." : "Sub-line lender must differ from operating bank — co-locating means simultaneous freeze in a banking crisis."}</li>
              <li>• {ko ? "Q1 2026 표준: JPM (treasury) + Wells Fargo (sub-line) + MUFG (FX) 같은 분산 구조." : "Q1 2026 standard split: JPMorgan (treasury) + Wells Fargo (sub-line) + MUFG (FX)."}</li>
            </ul>
          </div>
        </section>

        <section id="subline-nav" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. Sub-line vs NAV Facility — 두 가지 fund finance 도구" : "§ 2 Sub-line vs NAV facility — two fund finance tools"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Sub-line (Subscription Credit Facility)은 LP의 uncalled commitment를 담보로, NAV Facility는 fund의 portfolio NAV를 담보로 받는 대출. 둘 다 fund의 liquidity tool이지만 사용 시점·가격·위험이 다르다." : "Sub-lines (subscription credit facilities) are secured by LP uncalled commitments. NAV facilities are secured by the fund's portfolio NAV. Both provide liquidity, but timing, pricing, and risk differ."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-44">{ko ? "차원" : "Dimension"}</th>
                  <th className="text-left p-3">{ko ? "Sub-line (Subscription)" : "Sub-line (Subscription)"}</th>
                  <th className="text-left p-3">NAV Facility</th>
                </tr>
              </thead>
              <tbody>
                {SUB_LINE_VS_NAV.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{ko ? r.dim : r.dimEn}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? r.koSub : r.enSub}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? r.koNav : r.enNav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="covid-svb" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. COVID 2020 + SVB 2023 — 두 번의 Fund Finance 위기" : "§ 3 COVID 2020 and SVB 2023 — two fund-finance crises"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "COVID 2020 — Sub-line 동결 위기" : "COVID 2020 — the sub-line freeze"}</h3>
          <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 mb-6 bg-white dark:bg-gray-900">
            <div className="space-y-3 text-xs leading-relaxed">
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "Timeline: " : "Timeline: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? COVID_2020.koTimeline : COVID_2020.enTimeline}</span></div>
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "위기 메커니즘: " : "The mechanism: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? COVID_2020.koAttack : COVID_2020.enAttack}</span></div>
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "PE의 대응: " : "PE response: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? COVID_2020.koResponse : COVID_2020.enResponse}</span></div>
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"><span className="font-semibold" style={{ color: ACCENT }}>{ko ? "Aftermath: " : "Aftermath: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? COVID_2020.koAftermath : COVID_2020.enAftermath}</span></div>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "SVB 2023 — 48시간 만의 붕괴" : "SVB 2023 — collapse in 48 hours"}</h3>
          <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 mb-6 bg-white dark:bg-gray-900">
            <div className="space-y-3 text-xs leading-relaxed">
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "Timeline: " : "Timeline: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? SVB_2023.koTimeline : SVB_2023.enTimeline}</span></div>
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "Fund 영향: " : "Fund impact: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? SVB_2023.koImpact : SVB_2023.enImpact}</span></div>
              <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "업계 대응: " : "Industry response: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? SVB_2023.koResponse : SVB_2023.enResponse}</span></div>
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"><span className="font-semibold" style={{ color: ACCENT }}>{ko ? "Aftermath: " : "Aftermath: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? SVB_2023.koAftermath : SVB_2023.enAftermath}</span></div>
            </div>
          </div>
        </section>

        <section id="recap-2026" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Dividend Recap mechanics + 2026 NAV Facility 폭증" : "§ 4 Dividend recap mechanics + the 2026 NAV-facility boom"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Dividend recap = portco의 senior debt를 refinance하면서 더 키워서 차액을 LP한테 특별분배. PE가 hold period 중간에 partial cash return하는 가장 흔한 도구. 2007 cycle 정점에서 남용되어 GFC 시 portco들 줄도산 (HCA · TXU 등). 2024-2026 다시 활발 — sponsor friendly debt 시장 + IPO 부진." : "A dividend recap refinances the portco's senior debt at a larger size and distributes the difference to LPs. The most common partial-cash-return tool mid-hold. Abused at the 2007 peak — many portcos went bankrupt in the GFC (HCA, TXU). Active again in 2024-2026 thanks to sponsor-friendly debt markets and weak IPOs."}
          </p>
          <h3 className="text-lg font-bold mb-3">{ko ? "Dividend Recap 5단계" : "Dividend recap in five steps"}</h3>
          <div className="space-y-2 mb-8">
            {RECAP_STEPS.map((s, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: ACCENT }}>{s.step}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1">{ko ? s.koLabel : s.enLabel}</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koDetail : s.enDetail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "NAV Facility 2026 폭증 — Q1 2026 stat" : "NAV facility 2026 boom — Q1 2026 stats"}</h3>
          <div className="space-y-2 mb-8">
            {NAV_FACILITY_2026.map((p, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? p.koPoint : p.enPoint}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
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
