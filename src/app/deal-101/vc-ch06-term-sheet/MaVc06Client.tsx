"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch06-term-sheet";

const SEVEN_TERMS = [
  {
    term: "1. Pre-money Valuation",
    koVcWants: "낮을수록 좋음 — dilution 적게",
    enVcWants: "Lower is better — less dilution",
    koFounderPush: "Comp set + bottoms-up · revenue multiple로 push up",
    enFounderPush: "Bottoms-up + comp set; push up on revenue multiple",
    koStandard: "US SaaS Series A: $30-80M post · 한국: ₩50-150억",
    enStandard: "US SaaS Series A: $30-80M post; Korea: ₩50-150억",
    koTrap: "Valuation 높여서 control 양보하면 본질이 뒤바뀜 — Snap vs WeWork의 교훈",
    enTrap: "Trading control for valuation flips priorities — see Snap vs WeWork",
  },
  {
    term: "2. Liquidation Preference",
    koVcWants: "Participating with cap 욕심, 최소 1x non-participating",
    enVcWants: "Wants participating-with-cap; floor at 1x non-participating",
    koFounderPush: "1x non-participating 사수. Participating은 거절해야 — exit 시 double dip",
    enFounderPush: "Hold to 1x non-participating; refuse participating (double-dip on exit)",
    koStandard: "1x non-participating이 90%+ 표준",
    enStandard: "1x non-participating is 90%+ standard",
    koTrap: "Participating with cap = exit 시 VC가 (1x return) + (pro-rata 분배) 둘 다 받음",
    enTrap: "Participating-with-cap means VC takes (1x return) + (pro-rata share) on exit",
  },
  {
    term: "3. Anti-dilution",
    koVcWants: "Full ratchet (강한 보호) 욕심",
    enVcWants: "Wants full ratchet (strongest protection)",
    koFounderPush: "Weighted average broad-based 표준 사수",
    enFounderPush: "Weighted-average broad-based as the standard",
    koStandard: "Broad-based weighted average (시장 표준)",
    enStandard: "Broad-based weighted average is the market standard",
    koTrap: "Full ratchet은 down round 시 VC 지분 폭증 — founder dilution 극심",
    enTrap: "Full ratchet skyrockets VC ownership in a down round — founder gets crushed",
  },
  {
    term: "4. Board Composition",
    koVcWants: "1-2 board seat (voting) 요구",
    enVcWants: "Wants 1-2 voting board seats",
    koFounderPush: "Founder majority 사수 — 3인 board (founder 2, VC 1)",
    enFounderPush: "Keep founder majority — 3-person board (founders 2, VC 1)",
    koStandard: "Series A: 3-person (founder 2, VC 1) · Series B: 5-person 확장",
    enStandard: "Series A: 3 (founders 2, VC 1); Series B: expand to 5",
    koTrap: "Independent board seat 등장 시 founder voting power 빠르게 희석",
    enTrap: "Adding an independent seat dilutes founder voting fast",
  },
  {
    term: "5. Pro-rata Rights",
    koVcWants: "다음 round 참여권 — 모든 future round",
    enVcWants: "Right to participate in every future round",
    koFounderPush: "보통 양보 (give it) — fair한 조항",
    enFounderPush: "Usually concede — it's a fair provision",
    koStandard: "표준 부여, single-trigger",
    enStandard: "Standard grant, single-trigger",
    koTrap: "Super pro-rata (지분 이상 참여) 요구 시 거절",
    enTrap: "Refuse if they ask for super pro-rata (above current stake)",
  },
  {
    term: "6. Drag-along Right",
    koVcWants: "Exit 시 founder까지 강제 매각 — 50%+ majority",
    enVcWants: "Force-sell along with the VC on exit — 50%+ majority",
    koFounderPush: "Threshold 66%+로 push · founder veto right 확보",
    enFounderPush: "Push the threshold to 66%+; secure a founder veto",
    koStandard: "50-66% majority drag",
    enStandard: "50-66% majority drag",
    koTrap: "Threshold 너무 낮으면 founder 의지 없는 exit 강제됨",
    enTrap: "A low threshold forces an exit the founder doesn't want",
  },
  {
    term: "7. Vesting Cliff",
    koVcWants: "4년 vest · 1년 cliff · founder 본인도 vest",
    enVcWants: "4-year vest, 1-year cliff, founder vesting included",
    koFounderPush: "이미 일한 기간 credit (acceleration) · double-trigger 보호",
    enFounderPush: "Get credit for time worked (acceleration); double-trigger protection",
    koStandard: "4yr/1yr cliff + double-trigger acceleration on M&A",
    enStandard: "4-year/1-year cliff + double-trigger acceleration on M&A",
    koTrap: "Single-trigger acceleration은 acquirer가 싫어함 — exit 못 함",
    enTrap: "Single-trigger acceleration scares acquirers — kills exits",
  },
];

const SAFE_VS_PRICED = [
  { dim: "구조",            safe: "Valuation cap만 정함, 다음 priced round에서 변환", note: "변환 시 cap이 valuation",      priced: "Equity 즉시 발행, valuation 확정",  noteEn: "Cap becomes valuation on conversion" },
  { dim: "Negotiation",     safe: "Cap 1개만 협상",                                  note: "Founder 우호적, 빠름",         priced: "30+ term 협상",                       noteEn: "30+ terms negotiated" },
  { dim: "Legal fee",       safe: "$2-5K",                                            note: "YC SAFE template 그대로",     priced: "$15-50K",                              noteEn: "Custom drafted" },
  { dim: "Closing time",    safe: "1-2주",                                             note: "Fast",                          priced: "6-12주",                                noteEn: "Slow" },
  { dim: "Investor rights", safe: "거의 없음",                                         note: "Pre-emptive 정도",             priced: "Full (board · info · pro-rata 등)",      noteEn: "Full (board, info, pro-rata, etc.)" },
  { dim: "Use case",        safe: "Pre-seed · Seed ($100K-3M)",                       note: "Convertible note의 형제",     priced: "Series A+ ($5M+)",                       noteEn: "Series A+" },
];

const FAMOUS_TERM_CASES = [
  {
    name: "Facebook Series A (Accel, 2005)",
    koWhat: "$12.7M pre-money · Accel Jim Breyer가 더 큰 valuation offer 받았지만 Zuckerberg가 control 위해 Accel 선택",
    enWhat: "$12.7M pre-money. Accel's Jim Breyer landed it despite higher offers — Zuckerberg picked control.",
    koLesson: "Valuation < Partner trust. Best founder는 \"who I want on my board\" 우선.",
    enLesson: "Valuation < partner trust. Best founders pick who they want on the board first.",
  },
  {
    name: "Snap Series F (2016)",
    koWhat: "Evan Spiegel이 dual-class share로 자기 voting 90%+ 유지. IPO 후에도 그대로 — founder-friendly governance의 표준 setter.",
    enWhat: "Evan Spiegel kept 90%+ voting via dual-class shares — pre- and post-IPO. Set the founder-friendly governance standard.",
    koLesson: "Founder control은 IPO까지 지킬 수 있음. Sequoia·Lightspeed가 수용.",
    enLesson: "Founder control can survive to IPO. Sequoia and Lightspeed accepted it.",
  },
  {
    name: "WeWork Series G (2019)",
    koWhat: "Adam Neumann이 supervoting 10x 요구. SoftBank Vision Fund가 처음엔 거절 못 함 — $47B valuation.",
    enWhat: "Adam Neumann demanded 10x supervoting. SoftBank's Vision Fund couldn't say no at first — $47B valuation.",
    koLesson: "Founder control + 비현실 valuation = governance disaster. IPO 무산 후 $8B로 추락.",
    enLesson: "Founder control + unrealistic valuation = governance disaster. IPO collapsed, value crashed to $8B.",
  },
  {
    name: "Theranos Series C (2014)",
    koWhat: "Elizabeth Holmes가 board에 \"founder veto right\" 요구. Investor들 (Walgreens · Rupert Murdoch · DeVos) 검증 안 함.",
    enWhat: "Elizabeth Holmes demanded a founder veto on the board. Investors (Walgreens, Rupert Murdoch, DeVos) skipped verification.",
    koLesson: "Founder가 board를 통제하면 fraud 견제 못 함. 결국 $9B → 0 + 형사 유죄.",
    enLesson: "When founders control the board, fraud goes unchecked. Crashed $9B to 0; criminal conviction followed.",
  },
];

const TOC_ITEMS = [
  { id: "seven-terms",   ko: "§1. Term Sheet 7대 조항 — VC vs Founder push",   en: "§1 The seven term sheet provisions — VC vs founder push" },
  { id: "safe-priced",   ko: "§2. SAFE vs Priced Round",                       en: "§2 SAFE vs priced round" },
  { id: "associate-flow", ko: "§3. 심사역의 Term Sheet Drafting Flow",          en: "§3 Associate's term sheet drafting flow" },
  { id: "famous",        ko: "§4. Famous Term Sheet Cases",                    en: "§4 Famous term sheet cases" },
];

export default function MaVc06Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.6</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.6" : "VC Series · Ch.6"}</span>
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

        <section id="seven-terms" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Term Sheet 7대 조항 — VC vs Founder Push" : "§ 1 The seven term sheet provisions — VC vs founder push"}</h2>
          <div className="space-y-3 mb-8">
            {SEVEN_TERMS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="font-bold text-base mb-3" style={{ color: ACCENT }}>{t.term}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg p-3 bg-gray-50 dark:bg-gray-900/50">
                    <div className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">VC wants</div>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koVcWants : t.enVcWants}</div>
                  </div>
                  <div className="rounded-lg p-3 bg-gray-50 dark:bg-gray-900/50">
                    <div className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Founder push</div>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koFounderPush : t.enFounderPush}</div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div><span className="font-semibold text-gray-500 dark:text-gray-400">{ko ? "시장 표준: " : "Market standard: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? t.koStandard : t.enStandard}</span></div>
                  <div><span className="font-semibold text-red-600 dark:text-red-400">⚠ {ko ? "함정: " : "Trap: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? t.koTrap : t.enTrap}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="safe-priced" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. SAFE vs Priced Round" : "§ 2 SAFE vs priced round"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Seed에서는 SAFE (Simple Agreement for Future Equity, YC 2013-) 가 표준. Valuation cap 1개만 정하고 다음 priced round에서 변환. Series A부터는 priced round로 정식 equity 발행." : "At seed, SAFEs (YC's Simple Agreement for Future Equity, 2013-) are standard — set a valuation cap and convert at the next priced round. From Series A onward, priced rounds issue proper equity."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-32">{ko ? "차원" : "Dimension"}</th>
                  <th className="text-left p-3">SAFE</th>
                  <th className="text-left p-3">Priced Round</th>
                </tr>
              </thead>
              <tbody>
                {SAFE_VS_PRICED.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{r.dim}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{r.safe}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{r.priced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="associate-flow" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 심사역의 Term Sheet Drafting Flow" : "§ 3 Associate's term sheet drafting flow"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Associate가 first draft 작성 → Partner review → 변호사 review → 발송. 보통 3-5 round의 negotiation 후 signed. Term sheet sign 후 SPA·SHA 작성 시작." : "Associate writes the first draft → partner reviews → counsel reviews → it ships. Usually 3-5 rounds of negotiation before signing. After sign, SPA/SHA drafting starts."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-6">
            <h3 className="text-sm font-bold mb-3" style={{ color: ACCENT }}>{ko ? "Associate 권한 vs Partner 결정" : "Associate authority vs partner decisions"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-semibold text-gray-500 dark:text-gray-400 mb-2">{ko ? "✅ Associate 권한" : "✅ Associate authority"}</div>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• {ko ? "Information rights 범위" : "Information rights scope"}</li>
                  <li>• {ko ? "Board observer vs voting" : "Board observer vs voting"}</li>
                  <li>• {ko ? "Drag-along threshold" : "Drag-along threshold"}</li>
                  <li>• {ko ? "Closing 일정" : "Closing timeline"}</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-500 dark:text-gray-400 mb-2">{ko ? "🔒 Partner 결정" : "🔒 Partner decisions"}</div>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• {ko ? "Pre-money valuation" : "Pre-money valuation"}</li>
                  <li>• {ko ? "Liquidation preference 구조" : "Liquidation preference structure"}</li>
                  <li>• {ko ? "Anti-dilution 방식" : "Anti-dilution mechanism"}</li>
                  <li>• {ko ? "Total investment 금액" : "Total investment amount"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="famous" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Famous Term Sheet Cases" : "§ 4 Famous term sheet cases"}</h2>
          <div className="space-y-3 mb-6">
            {FAMOUS_TERM_CASES.map((c, i) => (
              <div key={i} className="rounded-xl border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{c.name}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mb-2 leading-relaxed"><span className="font-semibold">{ko ? "사건: " : "What: "}</span>{ko ? c.koWhat : c.enWhat}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"><span className="font-semibold">{ko ? "교훈: " : "Lesson: "}</span>{ko ? c.koLesson : c.enLesson}</div>
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
