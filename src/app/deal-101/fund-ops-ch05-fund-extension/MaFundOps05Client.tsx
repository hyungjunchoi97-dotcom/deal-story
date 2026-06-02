"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch05-fund-extension";

const FUND_LIFECYCLE = [
  { period: "Year 1-5", koLabel: "Investment Period", enLabel: "Investment Period", koDetail: "Capital deployment 기간. Capital call 활발, 5-10개 portco 인수. Mgmt fee = commitment × 1.5-2%.", enDetail: "Capital deployment phase. Heavy capital calls; 5-10 portcos acquired. Mgmt fee = 1.5-2% × commitments." },
  { period: "Year 5-7", koLabel: "Harvest Period (Early)", enLabel: "Harvest Period (early)", koDetail: "신규 deal 거의 없음. Add-on acquisition만. 일부 portco exit 시작. Mgmt fee 1.0-1.5%로 step-down.", enDetail: "Almost no new deals — only add-ons. Early portco exits begin. Mgmt fee steps down to 1.0-1.5%." },
  { period: "Year 7-10", koLabel: "Harvest Period (Late)", enLabel: "Harvest Period (late)", koDetail: "Portfolio 70-90% exit 완료. Distribution 가속. Mgmt fee 0.5-1.0% (NAV 기준으로 전환).", enDetail: "70-90% of portfolio exited. Distributions accelerate. Mgmt fee 0.5-1.0% (often switching to NAV-based)." },
  { period: "Year 10", koLabel: "Standard Maturity", enLabel: "Standard Maturity", koDetail: "표준 만기. LPA에 정의된 \"Fund Term\" 도달. 미exit asset 있으면 연장 옵션 검토.", enDetail: "Standard maturity reached — the LPA's defined Fund Term. If unexited assets remain, extension options are evaluated." },
  { period: "Year 11-12", koLabel: "Optional Extensions (2×1yr)", enLabel: "Optional Extensions (2×1yr)", koDetail: "GP 또는 LPAC 승인으로 1년씩 2회 연장. Mgmt fee 다시 감소. 이때까지 풀어야 함이 원칙.", enDetail: "GP or LPAC may extend twice at one year each. Mgmt fee declines further. The norm is to wind down by here." },
  { period: "Year 12+", koLabel: "Zombie territory / Continuation", enLabel: "Zombie territory / continuation", koDetail: "추가 연장은 LPAC 만장일치 또는 continuation fund 전환. 못 처리하면 zombie fund.", enDetail: "Further extension requires unanimous LPAC approval — or a continuation fund. Failing both, it becomes a zombie fund." },
];

const EXTENSION_TRIGGERS = [
  { koLabel: "Market timing 악화", enLabel: "Market timing worsened", koDetail: "Year 10 도달 시 market downturn — 강제 매각하면 fire sale price. 추가 2년 hold가 IRR에 +500-1,500bp.", enDetail: "Hitting Year 10 in a downturn would mean fire-sale prices. Two more years of hold can add 500-1,500bp to IRR." },
  { koLabel: "Portco operational turnaround 진행 중", enLabel: "Operational turnaround in progress", koDetail: "100-day plan이 늦어졌거나 acquisition 후 통합이 길어진 경우. 1-2년 추가하면 multiple 회복.", enDetail: "When 100-day plans slip or post-acquisition integration drags. One to two more years restores the multiple." },
  { koLabel: "Strategic buyer 부재", enLabel: "No strategic buyers in sight", koDetail: "Process를 돌렸지만 IRR 충족 가격 부재. 시장 회복 기다리거나 secondary로 전환.", enDetail: "A process ran but no bid clears the IRR hurdle. Wait for recovery — or pivot to secondary." },
  { koLabel: "IPO window closed", enLabel: "IPO window closed", koDetail: "Tech IPO sub-cycle 정체. SPAC도 거의 사라짐. IPO-focused VC fund들이 만기 연장으로 대응.", enDetail: "Tech IPO sub-cycles stall and SPACs have all but vanished — IPO-focused VC funds extend in response." },
];

const CONTINUATION_MECHANICS = [
  { step: 1, koLabel: "Asset identification & valuation", enLabel: "Asset identification & valuation", koDetail: "Continuation fund에 옮길 portco 선정 (보통 1-3개 \"trophy assets\"). 외부 valuation firm (Kroll · Houlihan · Lincoln International) 의무.", enDetail: "Select the portcos for the continuation fund (typically 1-3 trophy assets). External valuation (Kroll, Houlihan, Lincoln International) is mandatory." },
  { step: 2, koLabel: "Secondary buyer 모집", enLabel: "Secondary buyer recruitment", koDetail: "Ardian · Lexington · HarbourVest · Coller · Goldman Vintage 등 secondary fund가 lead buyer. 일반 LP도 co-invest 가능.", enDetail: "Ardian, Lexington, HarbourVest, Coller, Goldman Vintage as lead secondary buyers. Other LPs can co-invest." },
  { step: 3, koLabel: "Existing LP options 제공", enLabel: "Options offered to existing LPs", koDetail: "(A) Cash out at valuation price · (B) Roll into continuation fund (status quo + 2-3년 추가) · (C) Roll + commit 추가 fresh capital.", enDetail: "(A) Cash out at the agreed valuation, (B) Roll into the continuation fund (status quo plus 2-3 years), (C) Roll plus commit fresh capital." },
  { step: 4, koLabel: "LPAC 승인 + conflict review", enLabel: "LPAC approval + conflict review", koDetail: "Conflict of interest 핵심 이슈 — GP가 selling LP의 fiduciary면서 buying continuation의 manager. LPAC가 fairness opinion 검토.", enDetail: "Conflict of interest is the core issue — GP serves as fiduciary to selling LPs while also managing the buyer continuation fund. LPAC reviews the fairness opinion." },
  { step: 5, koLabel: "Closing + restart", enLabel: "Closing + restart", koDetail: "기존 fund partial wind-down + new fund vehicle 출범. New mgmt fee + new carry — GP가 사실상 \"리셋\" 받음.", enDetail: "Partial wind-down of the legacy fund and launch of the new vehicle. New mgmt fee and new carry — effectively a GP reset." },
];

const CONTINUATION_MARKET = [
  { ko: "2018", en: "2018", deal: "$15B", note: "초기 시장" },
  { ko: "2020", en: "2020", deal: "$23B", note: "COVID로 일시 위축" },
  { ko: "2021", en: "2021", deal: "$68B", note: "역대 최대 — Hellman & Friedman의 Multiplan continuation 등" },
  { ko: "2022", en: "2022", deal: "$53B", note: "금리 상승에 위축" },
  { ko: "2023", en: "2023", deal: "$72B", note: "Exit 부진의 대안으로 재부상" },
  { ko: "2024", en: "2024", deal: "$112B", note: "역대 최대 갱신" },
  { ko: "2025", en: "2025", deal: "$140B", note: "Mega continuation 출현 (BlackRock · Permira)" },
  { ko: "Q1 2026", en: "Q1 2026", deal: "$160B+ (annualized)", note: "Secondary AUM의 60%가 GP-led" },
];

const TOP_SECONDARY_BUYERS = [
  { rank: 1, name: "Ardian",            aua: 110, koHq: "Paris",       enHq: "Paris" },
  { rank: 2, name: "Lexington Partners", aua: 85,  koHq: "New York",    enHq: "New York" },
  { rank: 3, name: "HarbourVest Partners", aua: 78, koHq: "Boston",      enHq: "Boston" },
  { rank: 4, name: "Goldman Vintage",     aua: 65, koHq: "New York",    enHq: "New York" },
  { rank: 5, name: "Coller Capital",      aua: 53, koHq: "London",       enHq: "London" },
  { rank: 6, name: "Blackstone Strategic Partners", aua: 50, koHq: "New York", enHq: "New York" },
  { rank: 7, name: "ICG Strategic Equity", aua: 32, koHq: "London",       enHq: "London" },
  { rank: 8, name: "AlpInvest (Carlyle)",  aua: 28, koHq: "Amsterdam",    enHq: "Amsterdam" },
];

const ZOMBIE_PROBLEM = [
  { koLabel: "정의", enLabel: "Definition", koDetail: "만기 연장도 다 쓰고 (year 12-13+) continuation도 못 만들었는데 portco가 남아있는 fund.", enDetail: "A fund past all extensions (year 12-13+) that hasn't been able to launch a continuation, with portcos still on the books." },
  { koLabel: "GP의 인센티브", enLabel: "GP incentives", koDetail: "Mgmt fee 계속 받음 (감소했지만 0이 아님). Carry는 사실상 zero, but salary는 유지.", enDetail: "Management fee keeps flowing (reduced but non-zero). Carry is effectively zero, but salaries persist." },
  { koLabel: "LP 입장", enLabel: "LP perspective", koDetail: "Liquidity 갇혀 있음. Strip sale (secondary buyer에게 일부 매각)이 유일한 출구. Cash 손해 보고 partial liquidation.", enDetail: "Liquidity is trapped. The only exit is a strip sale to a secondary buyer — partial liquidation at a price hit." },
  { koLabel: "글로벌 규모", enLabel: "Global scale", koDetail: "Preqin Q1 2026 추정: $200B+의 portfolio가 zombie 상태. 평균 8개월 만에 zombie → resolved 또는 deeper zombie.", enDetail: "Preqin Q1 2026 estimate: $200B+ of portfolios are in zombie status. Average 8 months from zombie to resolution — or to deeper zombie." },
];

const TOC_ITEMS = [
  { id: "lifecycle",       ko: "§1. Fund Lifecycle 10+1+1 만기 구조", en: "§1 Fund lifecycle — the 10+1+1 structure" },
  { id: "extension",       ko: "§2. 만기 연장 — 발동 trigger와 LPAC 승인", en: "§2 Extensions — triggers and LPAC approval" },
  { id: "continuation",    ko: "§3. Continuation Fund mechanics + Q1 2026 시장", en: "§3 Continuation fund mechanics + the Q1 2026 market" },
  { id: "zombie",          ko: "§4. Zombie Fund 문제 + 글로벌 통계", en: "§4 The zombie fund problem + global stats" },
];

export default function MaFundOps05Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.5</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "Fund Ops 시리즈 · Ch.5" : "Fund Ops Series · Ch.5"}</span>
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

        <section id="lifecycle" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Fund Lifecycle — 표준 10+1+1년 만기 구조" : "§ 1 Fund lifecycle — the standard 10+1+1 structure"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "표준 PE fund는 10년 만기 + 2 × 1년 연장 옵션 = 최대 12년. LPA에 명시된 \"Fund Term\"이다. 첫 5년이 \"investment period\" (deploy 기간), 다음 5년이 \"harvest\" (exit 기간), 연장 2년은 \"residual cleanup\"." : "A standard PE fund runs 10 years + 2×1-year extensions = 12 years max — the LPA's \"Fund Term.\" The first five years are the investment period (deployment), the next five the harvest period (exits), and the two extensions are residual cleanup."}
          </p>
          <div className="space-y-2 mb-8">
            {FUND_LIFECYCLE.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="md:w-40 flex-shrink-0">
                    <div className="text-xs px-2 py-0.5 rounded inline-block mb-1" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{p.period}</div>
                    <div className="font-semibold text-sm">{ko ? p.koLabel : p.enLabel}</div>
                  </div>
                  <div className="flex-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="extension" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 만기 연장 — Trigger와 LPAC 승인" : "§ 2 Extensions — triggers and LPAC approval"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Year 10 도달 시 GP는 보통 1차 연장 (Year 11)을 \"GP discretion\"으로 발동. 2차 연장 (Year 12)은 LPAC majority 또는 super-majority 승인. 그 이후는 사실상 LPAC 만장일치 또는 LP 75%+ vote 필요." : "At Year 10 the GP usually triggers the first extension (to Year 11) at GP discretion. The second extension (to Year 12) requires LPAC majority or super-majority approval. Anything beyond effectively requires unanimous LPAC or a 75%+ LP vote."}
          </p>
          <h3 className="text-lg font-bold mb-3">{ko ? "만기 연장이 발동되는 4가지 trigger" : "Four triggers for an extension"}</h3>
          <div className="space-y-2 mb-8">
            {EXTENSION_TRIGGERS.map((t, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? t.koLabel : t.enLabel}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koDetail : t.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="continuation" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. Continuation Fund — 5-Step Mechanics + Q1 2026 시장" : "§ 3 Continuation funds — five-step mechanics + the Q1 2026 market"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Continuation Fund (또는 GP-led Secondary)는 만기 도달한 fund의 trophy asset을 새 vehicle로 옮기는 도구. 기존 LP는 cash out 또는 roll over 선택. 2018년 $15B 시장이 Q1 2026 annualized $160B+로 10배 성장. 이제 secondary 시장의 60%가 GP-led." : "Continuation funds (a.k.a. GP-led secondaries) move trophy assets from a maturing fund into a new vehicle. Existing LPs choose cash-out or roll-over. The market grew from $15B (2018) to $160B+ annualized (Q1 2026) — a 10× expansion. Sixty percent of today's secondary market is GP-led."}
          </p>

          <h3 className="text-lg font-bold mb-3">{ko ? "Continuation Fund 5단계" : "Continuation fund in five steps"}</h3>
          <div className="space-y-2 mb-8">
            {CONTINUATION_MECHANICS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: ACCENT }}>{s.step}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1">{ko ? s.koLabel : s.enLabel}</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koDetail : s.enDetail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Continuation Fund 시장 성장 (2018-Q1 2026)" : "Continuation fund market growth (2018-Q1 2026)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-24">Year</th>
                  <th className="text-right p-3 w-32">Deal Volume</th>
                  <th className="text-left p-3">{ko ? "특이사항" : "Note"}</th>
                </tr>
              </thead>
              <tbody>
                {CONTINUATION_MARKET.map((m, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{m.ko}</td>
                    <td className="p-3 text-right font-mono text-xs font-semibold" style={{ color: ACCENT }}>{m.deal}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Top 8 Secondary Buyers (Q1 2026)" : "Top 8 secondary buyers (Q1 2026)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-12">#</th>
                  <th className="text-left p-3">{ko ? "운용사" : "Firm"}</th>
                  <th className="text-right p-3 w-24">AUA ($B)</th>
                  <th className="text-left p-3">HQ</th>
                </tr>
              </thead>
              <tbody>
                {TOP_SECONDARY_BUYERS.map((b) => (
                  <tr key={b.rank} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold" style={{ color: ACCENT }}>{b.rank}</td>
                    <td className="p-3 font-semibold text-sm">{b.name}</td>
                    <td className="p-3 text-right font-mono text-sm">{b.aua}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400">{ko ? b.koHq : b.enHq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="zombie" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Zombie Fund 문제 — $200B+의 trapped capital" : "§ 4 The zombie fund problem — $200B+ of trapped capital"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "만기 연장도 다 썼는데 portco를 못 처리한 fund = zombie fund. GP는 mgmt fee만 받고 연명, LP는 liquidity 갇혀 있음. PE 업계 최악 시나리오. Continuation Fund 등장 전에는 이게 일반적이었는데, 2018+ 이후 secondary 시장 성장으로 zombie → continuation 전환 활성화." : "A fund past all extensions with unsold portcos = a zombie fund. The GP collects management fees and limps along while LPs are illiquid. The worst-case scenario in PE. Before continuation funds went mainstream, zombies were common; post-2018, secondary growth has rerouted many to continuation."}
          </p>
          <div className="space-y-2 mb-8">
            {ZOMBIE_PROBLEM.map((p, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? p.koLabel : p.enLabel}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-2 p-5 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "Zombie를 막는 Fund Ops 체크리스트" : "The fund-ops checklist that prevents zombies"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "Year 7-8부터 exit plan을 portco별로 quarterly LPAC에 보고" : "From Year 7-8, report a per-portco exit plan to the LPAC every quarter"}</li>
              <li>• {ko ? "Year 9에 continuation fund 가능성을 secondary buyer와 사전 sounding" : "At Year 9, pre-sound continuation fund feasibility with secondary buyers"}</li>
              <li>• {ko ? "Mgmt fee structure를 NAV-based로 transition (commitment-based 유지 시 GP가 zombie 연명 인센티브 가짐)" : "Transition mgmt fee to NAV-based (commitment-based incentivizes the GP to ride out a zombie)"}</li>
              <li>• {ko ? "Year 11 도달 시 LPAC가 strip sale 옵션 강제 검토" : "At Year 11, the LPAC mandates a strip-sale option review"}</li>
            </ul>
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
