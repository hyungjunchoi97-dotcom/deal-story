"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch09-followon-down-round-exit";

const ROUND_TYPES = [
  { type: "Up Round",   koWhat: "다음 round valuation > 이번 round. Pro-rata 행사하면 ownership 유지.",                       enWhat: "Next round valuation > prior. Pro-rata maintains ownership.",                       koExample: "Toss Series A→B→C 모두 up round" },
  { type: "Flat Round", koWhat: "동일 valuation. 시장 안 좋을 때 자주. Founder dilution 최소화.",                                enWhat: "Same valuation. Common in soft markets; minimizes founder dilution.",                 koExample: "2022 SaaS 다수 flat round" },
  { type: "Down Round", koWhat: "Valuation 하락. Anti-dilution trigger → 기존 holder dilution 추가.",                              enWhat: "Valuation drops. Anti-dilution triggers; existing holders dilute further.",            koExample: "Klarna 2022 ($46B → $6.7B), Stripe 2023 ($95B → $50B)" },
  { type: "Bridge",      koWhat: "다음 round 전 임시 자금. Convertible note 또는 SAFE. 보통 discount + interest.",                  enWhat: "Interim capital before the next round. Convertible or SAFE with discount + interest.", koExample: "Cap 0.7x · 20% discount · 5-8% interest 표준" },
  { type: "Recap (구조조정)", koWhat: "기존 cap table 갈아엎기. \"Pay to play\" — 참여 안 한 LP는 common으로 강제 전환.",   enWhat: "Cap table reset. \"Pay to play\" forces non-participating LPs to common.",                 koExample: "WeWork 2019 SoftBank recap" },
];

const ANTI_DILUTION_TRIGGER = [
  { method: "Broad-based Weighted Average",  koEffect: "Down round 시 mild dilution. 시장 표준 90%+.",                       enEffect: "Mild dilution on a down round. 90%+ market standard." },
  { method: "Narrow-based Weighted Average", koEffect: "약간 더 aggressive — Common + Preferred만 포함",                       enEffect: "Slightly more aggressive — includes only common and preferred" },
  { method: "Full Ratchet",                  koEffect: "VC 지분이 down round 가격까지 완전 reset → 극심한 founder dilution",  enEffect: "VC reset to the down round price → severe founder dilution" },
  { method: "No Anti-dilution",              koEffect: "Founder-friendly. 일부 seed SAFE만.",                                  enEffect: "Founder-friendly. Used in some seed SAFEs only." },
];

const EXIT_OPTIONS = [
  { exit: "IPO",                koVolume: "5-15%",   koMultiple: "5-50x (top decile)",      koTime: "7-12년", koDetail: "Lock-up 6개월 · 시장 timing 결정적 · banker fee 4-7%" },
  { exit: "Strategic M&A",       koVolume: "30-40%",  koMultiple: "3-10x",                    koTime: "5-8년",  koDetail: "Strategic이 highest premium · cultural fit · 보통 stock + cash" },
  { exit: "Financial Sponsor (PE)", koVolume: "10-15%", koMultiple: "2-5x",                    koTime: "5-10년", koDetail: "Growth 못한 mature SaaS · cash exit 보장" },
  { exit: "Secondary",            koVolume: "20-30%",  koMultiple: "Partial liquidity",        koTime: "3-7년",  koDetail: "$5-50M founder cash out · 전체 청산 X" },
  { exit: "Acqui-hire",            koVolume: "5-10%",   koMultiple: "0.5-2x (대부분 손실)",       koTime: "3-5년",  koDetail: "Team 인수 목적 · founder만 salary로 가는 case" },
  { exit: "Wind-down / Shutdown", koVolume: "10-20%",   koMultiple: "0",                         koTime: "3-7년",  koDetail: "Fail. VC fund의 average 40%가 0 return — power law의 시작" },
];

const FAMOUS_EXITS = [
  { name: "WhatsApp → Facebook ($19B, 2014)", koDetail: "Sequoia 2회 invest ($60M total) → $3B return (50x). \"가장 큰 single VC return\"으로 알려짐.",     enDetail: "Sequoia invested $60M across two rounds → $3B return (50x). Long known as the largest single VC return." },
  { name: "Coupang → NYSE IPO ($60B, 2021)",  koDetail: "SoftBank $2.7B → $28B (10x). Sequoia·BlackRock·Maverick 모두 large return.",                          enDetail: "SoftBank $2.7B → $28B (10x). Sequoia, BlackRock, Maverick all delivered large returns." },
  { name: "Krafton (PUBG) → KOSDAQ IPO ($25B, 2021)", koDetail: "KKR · Sequoia · Tencent 참여. 한국 게임 unicorn 표본 케이스.",                              enDetail: "KKR, Sequoia, Tencent participated. The Korean gaming unicorn template." },
  { name: "Toss (진행 중)",                    koDetail: "알토스벤처스 \$5M (2014) → paper $1B+ (200x). 2026-27 IPO 예정.",                                       enDetail: "Altos Ventures' $5M (2014) → paper $1B+ (200x). IPO targeted for 2026-27." },
  { name: "Theranos → \$0 + 형사 (2018)",      koDetail: "$9B 평가받았지만 SEC + DOJ 기소. Elizabeth Holmes 11년 징역. Walgreens·Murdoch·DeVos 손실.",          enDetail: "Once valued at $9B; SEC and DOJ indicted. Holmes got 11 years. Walgreens, Murdoch, DeVos all lost." },
  { name: "WeWork — IPO 무산 → 파산 (2023)",  koDetail: "$47B (2019) → $0 (2023 bankruptcy). SoftBank $14B 손실 — VC 역사상 최대 손실 중 하나.",                  enDetail: "From $47B (2019) to $0 (2023 bankruptcy). SoftBank lost $14B — one of the largest VC losses ever." },
];

const VC_POWER_LAW = [
  { koTier: "Tier 1 (Fund returner)",   pct: "5%",   koDetail: "Single deal이 fund 전체 return (3-5x). Sequoia·WhatsApp 같은 case." },
  { koTier: "Tier 2 (Strong returners)", pct: "15%", koDetail: "5-10x return — fund의 30-50% return 기여" },
  { koTier: "Tier 3 (OK returners)",     pct: "30%", koDetail: "1-3x return — break-even에 가깝거나 mild positive" },
  { koTier: "Tier 4 (Write-offs)",        pct: "50%", koDetail: "0-0.5x return — 대부분 \$0. 이게 VC business의 본질" },
];

const TOC_ITEMS = [
  { id: "round-types",  ko: "§1. Round Type 5가지 + Anti-dilution Trigger",   en: "§1 Five round types + anti-dilution triggers" },
  { id: "exit-options", ko: "§2. Exit Options 6가지 + Multiple/Timing",        en: "§2 Six exit options + multiples and timing" },
  { id: "power-law",     ko: "§3. VC Power Law — Tier별 분포",                  en: "§3 The VC power law — distribution by tier" },
  { id: "famous-exits", ko: "§4. Famous Exits (WhatsApp · Coupang · Toss · Theranos · WeWork)", en: "§4 Famous exits (WhatsApp, Coupang, Toss, Theranos, WeWork)" },
];

export default function MaVc09Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.9</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.9" : "VC Series · Ch.9"}</span>
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

        <section id="round-types" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Round Type 5가지 + Anti-Dilution Trigger" : "§ 1 Five round types + anti-dilution triggers"}</h2>
          <div className="space-y-2 mb-6">
            {ROUND_TYPES.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{r.type}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mb-1 leading-relaxed">{ko ? r.koWhat : r.enWhat}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 italic">{ko ? `예시: ${r.koExample}` : `Example: ${r.koExample}`}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Anti-Dilution Trigger 방식 4가지" : "Four anti-dilution mechanisms"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">Method</th>
                  <th className="text-left p-3">{ko ? "효과" : "Effect"}</th>
                </tr>
              </thead>
              <tbody>
                {ANTI_DILUTION_TRIGGER.map((a, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{a.method}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? a.koEffect : a.enEffect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="exit-options" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. Exit Options 6가지" : "§ 2 Six exit options"}</h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3">Exit</th>
                  <th className="text-left p-3 w-20">{ko ? "비중" : "Share"}</th>
                  <th className="text-left p-3 w-32">Multiple</th>
                  <th className="text-left p-3 w-20">{ko ? "기간" : "Time"}</th>
                  <th className="text-left p-3">{ko ? "특징" : "Detail"}</th>
                </tr>
              </thead>
              <tbody>
                {EXIT_OPTIONS.map((e, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs" style={{ color: ACCENT }}>{e.exit}</td>
                    <td className="p-3 text-xs font-mono">{e.koVolume}</td>
                    <td className="p-3 text-xs font-mono">{e.koMultiple}</td>
                    <td className="p-3 text-xs font-mono">{e.koTime}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{e.koDetail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="power-law" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. VC Power Law — Tier별 분포" : "§ 3 The VC power law — distribution by tier"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "VC fund의 본질 = power law. 100개 deal 중 5%가 fund의 전체 return을 만들고, 50%는 \$0. \"Tier 1 fund returner\"를 잡는 게 모든 VC의 목표 — 이것이 \"Fund returner\" 개념." : "The core of VC fund returns is a power law. 5% of 100 deals deliver the entire fund return; 50% return zero. Catching one \"Tier 1 fund returner\" is every VC's goal."}
          </p>
          <div className="space-y-2 mb-6">
            {VC_POWER_LAW.map((t, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <div className="font-bold text-sm" style={{ color: ACCENT }}>{t.koTier}</div>
                  <div className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: ACCENT }}>{t.pct}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{t.koDetail}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "Founder를 위한 power law 함의" : "Power-law implications for founders"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "VC는 \"big winner\"를 찾고 있음 — \"safe 2x\" deal에 관심 없음" : "VCs hunt big winners — they don't care about \"safe 2x\" deals"}</li>
              <li>• {ko ? "Risk를 줄이려고 하면 오히려 funding 못 받을 가능성 증가" : "Reducing risk often reduces your odds of getting funded"}</li>
              <li>• {ko ? "Series A에서 \"$100M outcome\"으로 보이면 거절됨. \"$10B potential\"이 답" : "Looking like a $100M outcome at Series A gets you rejected. Look like a $10B potential"}</li>
            </ul>
          </div>
        </section>

        <section id="famous-exits" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Famous Exits — 성공과 실패 케이스" : "§ 4 Famous exits — success and failure"}</h2>
          <div className="space-y-3 mb-6">
            {FAMOUS_EXITS.map((c, i) => (
              <div key={i} className="rounded-xl border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{c.name}</div>
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
