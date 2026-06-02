"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch06-disaster-cases";

interface DisasterCase {
  name: string;
  year: string;
  loss: string;
  koHeadline: string;
  enHeadline: string;
  koWhat: string;
  enWhat: string;
  koFailure: string;
  enFailure: string;
  koOutcome: string;
  enOutcome: string;
  koLesson: string;
  enLesson: string;
}

const KOREA_CASES: DisasterCase[] = [
  {
    name: "Lime Asset Management",
    year: "2019",
    loss: "₩1.6조 환매중단",
    koHeadline: "TRS · 펀드 간 parking으로 부실 은폐 — 한국 최대 사모펀드 사건",
    enHeadline: "Concealed losses via TRS and inter-fund parking — Korea's largest private fund scandal",
    koWhat: "라임 사모펀드가 TRS (Total Return Swap)로 부실 자산을 우량처럼 NAV에 반영. A펀드의 부실을 B펀드에 시장가보다 비싸게 팔아 손실 은폐 (펀드 간 parking). 2019년 7월 환매중단 발표.",
    enWhat: "Lime used TRS (Total Return Swap) to mark distressed assets as if they were performing. Sold A-fund's bad assets to B-fund above fair value to hide losses (inter-fund parking). Suspended redemptions July 2019.",
    koFailure: "신한금융투자가 PB · TRS 카운터파티였는데 NAV reconciliation을 제대로 안 함. KB·우리 신탁사는 자산 실재성 검증 실패. Compliance가 inter-fund transaction을 review하지 못함.",
    enFailure: "Shinhan Investment was the PB and TRS counterparty but didn't reconcile NAV properly. KB and Woori as trust companies failed asset existence verification. Compliance never reviewed inter-fund transactions.",
    koOutcome: "원종준 대표 형사기소 · 신한·우리 등 은행권 수천억 보상 · 사모펀드 규제 전면 개편 (2020 자본시장법 개정).",
    enOutcome: "CEO Won Jong-jun criminally indicted; banks paid hundreds of billions of won in restitution; sweeping 2020 Capital Markets Act overhaul.",
    koLesson: "TRS는 정상 운용되면 합법 도구지만 NAV 검증 통제 부재 시 fraud의 vehicle. Inter-fund transaction은 항상 LPAC review + 외부 valuation 필수.",
    enLesson: "TRS is a legitimate tool when properly governed, but a fraud vehicle when NAV oversight fails. Inter-fund transactions always require LPAC review and external valuation.",
  },
  {
    name: "Optimus Asset Management",
    year: "2020",
    loss: "₩5,500억",
    koHeadline: "신탁계약서 위조 — 공공기관 매출채권이라 속이고 부실 사모사채에 투자",
    enHeadline: "Forged trust agreements — claimed public-agency receivables, actually invested in distressed private notes",
    koWhat: "\"공공기관 매출채권에 투자한다\"는 거짓 운용설명서로 LP 모집. 실제로는 부실 사모사채에 투자. 신탁계약서까지 위조. 2020년 6월 환매중단.",
    enWhat: "Raised LP capital on a false story of investing in public-agency receivables. Actually invested in distressed private notes — and forged trust agreements to back it up. Redemptions suspended June 2020.",
    koFailure: "NH투자증권 (판매사) + 하나은행 (신탁) + 한국예탁결제원이 6년간 cross-check 실패. 신탁사가 자산 실재성을 한 번도 독립 확인하지 않음.",
    enFailure: "NH Investment (distributor), Hana Bank (trustee), and Korea Securities Depository failed cross-checks for six years. The trustee never independently verified asset existence.",
    koOutcome: "김재현 대표 징역 25년 · NH증권 LP 일부 보상 · 신탁사 책임 강화 입법.",
    enOutcome: "CEO Kim Jae-hyun sentenced to 25 years; NH Investment paid partial LP restitution; legislation strengthened trustee liability.",
    koLesson: "신탁사는 \"위탁받은 자산이 진짜 거기 있는지\" 분기마다 독립 검증해야 함. Cross-organizational verification 부재가 6년간 사기 지속의 원인.",
    enLesson: "Trustees must independently verify quarterly that the assets they custody actually exist. The absence of cross-organizational verification let the fraud run six years.",
  },
  {
    name: "Discovery Fund",
    year: "2019",
    loss: "₩2,500억+",
    koHeadline: "해외 fund-of-funds — underlying이 미국 폰지였는데 DD 부재",
    enHeadline: "Overseas fund-of-funds — the underlying was a US Ponzi and DD was absent",
    koWhat: "장하원 운용역의 디스커버리 자산운용이 미국 사모대출 펀드 (DLI - Direct Lending Investments)에 fund-of-funds 구조로 투자. DLI가 폰지 의혹으로 SEC 제재, 환매 동결.",
    enWhat: "Discovery AM (led by Jang Ha-won) invested in a US private debt fund (DLI - Direct Lending Investments) via fund-of-funds. DLI was sanctioned by the SEC for Ponzi-like activity; redemptions froze.",
    koFailure: "Overseas underlying fund DD를 안 함. NAV를 해외 admin이 주는 것 그대로 받아씀. 한국 LP는 underlying portfolio composition을 영원히 확인 못 함.",
    enFailure: "No DD on the overseas underlying fund. NAV was taken as-is from the overseas admin. Korean LPs could never verify the underlying portfolio composition.",
    koOutcome: "장하원 대표 구속기소 · 신한·하나 등 판매사 일부 보상 · 해외 underlying fund DD 의무 강화.",
    enOutcome: "CEO Jang Ha-won indicted; Shinhan and Hana paid partial restitution; mandatory DD on overseas underlying funds strengthened.",
    koLesson: "Fund-of-funds 구조에서 underlying GP의 admin · audit · 실제 holdings를 독립 검증 안 하면 폰지의 distribution channel이 됨.",
    enLesson: "In a fund-of-funds structure, without independently verifying the underlying GP's admin, audit, and actual holdings, you become a distribution channel for a Ponzi.",
  },
];

const GLOBAL_CASES: DisasterCase[] = [
  {
    name: "Archegos Capital Management",
    year: "2021",
    loss: "$10B+ counterparty losses (CS $5.5B)",
    koHeadline: "Multi-PB Total Return Swap — 어느 prime broker도 총 exposure 못 봄",
    enHeadline: "Multi-PB total return swaps — no single prime broker saw aggregate exposure",
    koWhat: "Bill Hwang의 가족사무소 Archegos가 Credit Suisse · Nomura · Morgan Stanley · Goldman · UBS · MUFG 6개 prime broker에 TRS 분산. 각 PB는 자기 노출만 봄. ViacomCBS 등 집중 포지션 폭락 시 margin call cascade.",
    enWhat: "Bill Hwang's family office Archegos spread TRS across six prime brokers (Credit Suisse, Nomura, Morgan Stanley, Goldman, UBS, MUFG). Each PB only saw its own slice. When concentrated positions (ViacomCBS) collapsed, margin calls cascaded.",
    koFailure: "Credit Suisse Prime Services Risk team이 special exception을 반복 승인 — margin 안 올림. 내부 보고서가 \"lackadaisical attitude toward risk\"라고 지적.",
    enFailure: "Credit Suisse Prime Services Risk repeatedly granted special exceptions without raising margins. An internal report described \"a lackadaisical attitude toward risk.\"",
    koOutcome: "Credit Suisse $5.5B 손실 → 2023년 UBS 강제 합병의 직접 trigger. Nomura $2.9B. Bill Hwang 2024년 유죄.",
    enOutcome: "Credit Suisse lost $5.5B — the direct trigger of UBS's 2023 forced merger. Nomura lost $2.9B. Bill Hwang convicted 2024.",
    koLesson: "Counterparty risk team은 cross-PB consolidated exposure feed가 필수. DTCC · prime broker syndication intel 활용. 고객 self-disclosure에 의존하면 malpractice.",
    enLesson: "Counterparty risk teams need cross-PB consolidated exposure feeds — via DTCC and prime-broker syndication intel. Relying on client self-disclosure is malpractice.",
  },
  {
    name: "Three Arrows Capital (3AC)",
    year: "2022",
    loss: "$10B → 0",
    koHeadline: "Sub-line + portco leverage + 카운터파티 borrowings 중첩 — 총 LTV 모니터링 부재",
    enHeadline: "Sub-line + portco leverage + counterparty borrowings stacked — no aggregate LTV monitoring",
    koWhat: "Singapore 크립토 헤지펀드 3AC가 fund-level sub-line + portco-level leverage + Genesis/BlockFi/Voyager/Celsius 카운터파티 borrowings 중첩. Luna 폭락 (May 2022) 시 margin call cascade.",
    enWhat: "Singapore-based crypto hedge fund 3AC layered fund-level sub-line, portco-level leverage, and counterparty borrowings from Genesis, BlockFi, Voyager, and Celsius. The Luna crash (May 2022) cascaded margin calls.",
    koFailure: "내부 risk team이 aggregate LTV monitoring을 안 함. 각 carve-out leverage만 봤지 fund 전체 cross-collateralization을 모름.",
    enFailure: "The internal risk team had no aggregate LTV monitoring — only carve-out leverage was watched, not fund-wide cross-collateralization.",
    koOutcome: "Genesis · BlockFi · Voyager · Celsius 모두 6개월 내 bankruptcy — 단일 fund의 risk 실패가 전체 crypto lending 시장 붕괴 trigger.",
    enOutcome: "Genesis, BlockFi, Voyager, and Celsius all filed bankruptcy within six months — a single fund's risk failure triggered the systemic crypto-lending collapse.",
    koLesson: "Leverage transparency at fund level만으론 부족. Sub-line + NAV facility + portco debt + margin loans 모두 single consolidated view 필요.",
    enLesson: "Fund-level leverage transparency isn't enough. Sub-line + NAV facility + portco debt + margin loans must roll into a single consolidated view.",
  },
  {
    name: "Long-Term Capital Management (LTCM)",
    year: "1998",
    loss: "$4.6B (NY Fed-orchestrated bailout)",
    koHeadline: "Nobel laureate-run fund — VaR 모델이 fat tail을 무시",
    enHeadline: "Nobel-laureate-run fund — its VaR model ignored fat tails",
    koWhat: "1994년 설립, 1998년 운용 $4.8B equity + $129B liability + $1T 명목 derivative. 1998년 8월 Russia sovereign default 시 correlated losses 발생. \"uncorrelated\" trades가 동시에 무너짐.",
    enWhat: "Founded 1994, by 1998 it ran $4.8B equity + $129B of liabilities + $1T notional derivatives. August 1998 Russian sovereign default triggered correlated losses — \"uncorrelated\" trades collapsed together.",
    koFailure: "내부 risk team이 정규분포 가정의 VaR 사용. Fat tail (4-sigma 이상 event)을 무시. Counterparty 14개 bank가 self-reported risk를 그대로 신뢰.",
    enFailure: "Internal risk used a VaR model that assumed normal distribution — fat tails (4-sigma+ events) ignored. Fourteen counterparty banks accepted self-reported risk metrics.",
    koOutcome: "NY Fed가 14개 bank ($3.6B 자본 투입)로 bailout. \"Too interconnected to fail\"의 hedge fund 버전 선례. LTCM 1999년 청산.",
    enOutcome: "The NY Fed orchestrated a $3.6B bailout across 14 banks — establishing the hedge-fund version of \"too interconnected to fail.\" LTCM wound down in 1999.",
    koLesson: "정규분포 가정 모델은 tail에서 무너진다. Scenario analysis · stress test가 VaR보다 중요. Counterparty risk는 self-disclosure로 모니터링 못 함.",
    enLesson: "Models that assume normality break in the tails. Scenario analysis and stress tests beat VaR. You can't monitor counterparty risk via self-disclosure.",
  },
  {
    name: "MF Global",
    year: "2011",
    loss: "$1.6B customer fund shortfall",
    koHeadline: "Customer segregated fund 사용 — back-office segregation 위반",
    enHeadline: "Used customer segregated funds — a back-office segregation violation",
    koWhat: "Jon Corzine (전 Goldman CEO · NJ 주지사)이 운영. European sovereign debt에 leveraged bet. Margin call 시 customer segregated account 자금을 firm 운용에 사용 — 명백한 위반.",
    enWhat: "Run by Jon Corzine (ex-Goldman CEO and NJ governor). Made a leveraged bet on European sovereign debt. When margin calls hit, dipped into customer segregated accounts to fund firm operations — a clear violation.",
    koFailure: "Back-office segregation control 실패. CFTC · CME 감독 부재. JPMorgan 수탁사가 transfer를 받음 (나중에 trustee가 제소).",
    enFailure: "Back-office segregation controls failed. CFTC and CME oversight was absent. JPMorgan as custodian accepted the transfers — later sued by the trustee.",
    koOutcome: "MF Global 파산 · Corzine 선물 업계 영구 추방 · 고객자금 4년 만에 100% 회복 · CFTC가 customer fund 보호 규정 강화.",
    enOutcome: "MF Global bankrupt; Corzine permanently barred from futures; customer funds 100% recovered after four years; CFTC strengthened protection rules.",
    koLesson: "Customer/fund money segregation은 회계 nicety가 아니라 bright-line rule. 위반 순간 firm은 끝.",
    enLesson: "Customer/fund segregation isn't an accounting nicety — it's the bright-line rule. The moment it's crossed, the firm is over.",
  },
];

const SIX_LESSONS = [
  { koLesson: "1. Self-administered fund = 절대 금지",                  enLesson: "1. Self-administered fund = automatic disqualifier",                koDetail: "GPB · Abraaj 공통점. 3rd party admin 부재는 그 자체로 LP가 walk away할 이유.",     enDetail: "GPB and Abraaj shared this. Lack of a third-party admin is reason enough for LPs to walk." },
  { koLesson: "2. Inter-fund/inter-entity transaction은 의심",            enLesson: "2. Inter-fund/inter-entity transactions are suspect",               koDetail: "Lime · Abraaj 공통점. LPAC review + 외부 valuation 없는 transfer는 fraud의 vehicle.",  enDetail: "Lime and Abraaj shared this. Any transfer without LPAC review and external valuation is a fraud vehicle." },
  { koLesson: "3. Consolidated exposure 없는 leverage = 위험",            enLesson: "3. Leverage without consolidated exposure = danger",                koDetail: "Archegos · 3AC 공통점. Cross-PB · cross-vehicle aggregate view 필수.",                 enDetail: "Archegos and 3AC shared this. Cross-PB, cross-vehicle aggregate views are mandatory." },
  { koLesson: "4. Cross-organizational verification 부재 = 사기 지속",     enLesson: "4. No cross-organizational verification = sustained fraud",         koDetail: "Optimus 6년간 사기 지속, Madoff 18년+. 판매사 · 신탁사 · 예탁원 간 cross-check 필수.", enDetail: "Optimus ran six years, Madoff 18+. Distributor, trustee, depository cross-checks are mandatory." },
  { koLesson: "5. 정규분포 가정 모델은 fail safe 아님",                  enLesson: "5. Normal-distribution models are not fail-safe",                   koDetail: "LTCM 교훈. VaR · stress test · scenario analysis 3중 결합 필요.",                       enDetail: "LTCM's lesson. Combine VaR, stress tests, and scenario analysis." },
  { koLesson: "6. Customer fund segregation은 bright-line rule",          enLesson: "6. Customer fund segregation is a bright-line rule",                koDetail: "MF Global 교훈. 어떤 상황에서도 cross 금지. Audit trail이 회계 시스템에서 명시.",        enDetail: "MF Global's lesson. Crossing it under any circumstance is forbidden — audit trails must enforce it in the accounting system." },
];

const TOC_ITEMS = [
  { id: "korea",      ko: "§1. 🇰🇷 한국 3대 사고 (Lime · Optimus · Discovery)",       en: "§1 Korean disasters (Lime, Optimus, Discovery)" },
  { id: "global",     ko: "§2. 🌐 글로벌 4대 사고 (Archegos · 3AC · LTCM · MF Global)", en: "§2 Global disasters (Archegos, 3AC, LTCM, MF Global)" },
  { id: "lessons",    ko: "§3. 6가지 공통 교훈",                                       en: "§3 Six common lessons" },
  { id: "checklist",  ko: "§4. Post-mortem 체크리스트 — 각 패턴 예방법",                 en: "§4 Post-mortem checklist — how to prevent each pattern" },
];

export default function MaFundOps06Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  // EN 독자에게는 한국 사례를 짧게 요약, KO 독자에게 전체 노출
  const showKoreaCases = ko;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.6</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "Fund Ops 시리즈 · Ch.6" : "Fund Ops Series · Ch.6"}</span>
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

        {showKoreaCases && (
          <section id="korea" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">§ 1. 🇰🇷 한국 3대 사고 — Lime · Optimus · Discovery</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              2019-2020년 한국 사모펀드 업계 전체를 뒤흔든 3대 사고. 합산 손실 ₩2.5조+. 모두 back/middle office의 통제 실패가 직접 원인이고, 자본시장법 전면 개정으로 이어졌다.
            </p>
            <div className="space-y-4 mb-8">
              {KOREA_CASES.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <div className="font-bold text-base">{c.name}</div>
                    <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{c.year}</div>
                    <div className="text-xs font-bold text-red-600 dark:text-red-400">{c.loss}</div>
                  </div>
                  <div className="font-semibold text-sm mb-3" style={{ color: ACCENT }}>{c.koHeadline}</div>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div><span className="font-semibold text-gray-600 dark:text-gray-400">사건: </span><span className="text-gray-700 dark:text-gray-300">{c.koWhat}</span></div>
                    <div><span className="font-semibold text-gray-600 dark:text-gray-400">실패 원인: </span><span className="text-gray-700 dark:text-gray-300">{c.koFailure}</span></div>
                    <div><span className="font-semibold text-gray-600 dark:text-gray-400">결과: </span><span className="text-gray-700 dark:text-gray-300">{c.koOutcome}</span></div>
                    <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"><span className="font-semibold" style={{ color: ACCENT }}>교훈: </span><span className="text-gray-700 dark:text-gray-300">{c.koLesson}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section id="global" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 🌐 글로벌 4대 사고 — Archegos · 3AC · LTCM · MF Global" : "§ 1 🌐 Global disasters — Archegos, 3AC, LTCM, MF Global"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "PE/HF 역사상 가장 유명한 4개 사고. Risk team의 leverage 모니터링 실패 (Archegos · 3AC), VaR 모델의 fat tail blindness (LTCM), back-office segregation 위반 (MF Global). 합산 손실 $25B+." : "Four of the most famous failures in PE/HF history. Risk-team leverage monitoring failures (Archegos, 3AC), VaR fat-tail blindness (LTCM), back-office segregation violation (MF Global). Combined losses exceed $25B."}
          </p>
          <div className="space-y-4 mb-8">
            {GLOBAL_CASES.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-bold text-base">{c.name}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{c.year}</div>
                  <div className="text-xs font-bold text-red-600 dark:text-red-400">{c.loss}</div>
                </div>
                <div className="font-semibold text-sm mb-3" style={{ color: ACCENT }}>{ko ? c.koHeadline : c.enHeadline}</div>
                <div className="space-y-2 text-xs leading-relaxed">
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "사건: " : "What: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? c.koWhat : c.enWhat}</span></div>
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "실패 원인: " : "Failure: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? c.koFailure : c.enFailure}</span></div>
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "결과: " : "Outcome: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? c.koOutcome : c.enOutcome}</span></div>
                  <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"><span className="font-semibold" style={{ color: ACCENT }}>{ko ? "교훈: " : "Lesson: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? c.koLesson : c.enLesson}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="lessons" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 6가지 공통 교훈 — 모든 사고를 관통하는 패턴" : "§ 2 Six common lessons — the patterns that connect every case"}</h2>
          <div className="space-y-3 mb-8">
            {SIX_LESSONS.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{ko ? l.koLesson : l.enLesson}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? l.koDetail : l.enDetail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="checklist" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Post-mortem 체크리스트 — 각 패턴을 예방하는 9가지 통제" : "§ 3 Post-mortem checklist — nine controls that prevent each pattern"}</h2>
          <div className="rounded-xl border-2 p-6 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li>1. {ko ? "Fund Admin은 반드시 3rd party (Apex · SS&C · Citco · Gen II 등). Self-administered면 LP가 walk away." : "Fund admin must be third-party (Apex, SS&C, Citco, Gen II, etc.). Self-administered means LPs walk away."}</li>
              <li>2. {ko ? "분기 NAV는 GP가 mark → 외부 valuation firm (Kroll · Houlihan · EY) 독립 검증 → audit 사인." : "Quarterly NAV: GP marks → external valuation firm (Kroll, Houlihan, EY) independent review → audit sign-off."}</li>
              <li>3. {ko ? "Inter-fund · inter-entity transaction은 LPAC pre-approval + 외부 valuation 필수." : "Inter-fund and inter-entity transactions require LPAC pre-approval plus external valuation."}</li>
              <li>4. {ko ? "Counterparty risk는 cross-PB aggregate exposure feed (DTCC · 자체 collection)." : "Counterparty risk requires a cross-PB aggregate exposure feed (DTCC or proprietary collection)."}</li>
              <li>5. {ko ? "Customer/fund money segregation은 accounting system level에서 강제. CFO도 unilateral transfer 불가." : "Customer/fund segregation is enforced at the accounting-system level. Not even the CFO can transfer unilaterally."}</li>
              <li>6. {ko ? "Stress test: VaR + 시나리오 (GFC · COVID · 금리 +200bp) + reverse stress (\"무엇이면 망할까\")." : "Stress testing combines VaR + scenarios (GFC, COVID, +200bp rates) + reverse stress (\"what breaks us\")."}</li>
              <li>7. {ko ? "Wire procedures: dual approval + callback verification + 24h cooling-off on changes." : "Wire procedures: dual approval + callback verification + 24h cooling-off on instruction changes."}</li>
              <li>8. {ko ? "Cross-organizational verification: 신탁사·custody·admin·audit·LP 5자가 각각 holding을 분기 확인." : "Cross-organizational verification: trustee, custodian, admin, auditor, and LP all confirm holdings quarterly — five separate parties."}</li>
              <li>9. {ko ? "Whistleblower hotline + DOJ/SEC/금감원 self-reporting 인센티브 명시." : "Whistleblower hotlines plus explicit incentives for DOJ/SEC/FSS self-reporting."}</li>
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
