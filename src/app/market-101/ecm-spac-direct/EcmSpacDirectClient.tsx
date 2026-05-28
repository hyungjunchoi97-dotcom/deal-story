"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#8b5cf6"; // violet/purple for SPAC

const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"           : "ECM Overview"       },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"         : "Ch.1 Issuers"       },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"         : "Ch.2 Investors"     },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"     : "Ch.3 Valuation"     },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"       : "Ch.4 Process"       },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"         : "Ch.5 Book-Building" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"     : "Ch.6 Post-IPO"      },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"       : "Ch.7 Follow-on"     },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"       : "Ch.8 Convertible"   },
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"       : "Ch.9 Intl Listing"  },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장"   : "Ch.10 SPAC·Direct"  },
];

const THIS_CH = "ecm-spac-direct";
const thisCh = 10;

// ── Three Paths Comparison Data ────────────────────────────────────────────────
const THREE_PATHS = [
  {
    name: "Traditional IPO",
    nameKo: "전통 IPO",
    highlight: false,
    color: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    timeline:   { ko: "12–18개월",                         en: "12–18 months" },
    fee:        { ko: "약 7% 총수수료",                    en: "~7% gross spread" },
    capital:    { ko: "신규 자금 조달 가능",               en: "New capital raised" },
    disclosure: { ko: "전면 공개 (S-1)",                   en: "Full public (S-1)" },
    risk:       { ko: "시장 타이밍 리스크",                en: "Market timing risk" },
    best_for:   { ko: "자금 조달 필요 + 브랜드 구축",      en: "Capital raise + brand building" },
  },
  {
    name: "SPAC Merger (De-SPAC)",
    nameKo: "SPAC 합병 (De-SPAC)",
    highlight: true,
    color: "border-violet-300 dark:border-violet-700",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    timeline:   { ko: "3–6개월",                                        en: "3–6 months" },
    fee:        { ko: "~5.5% (SPAC 스폰서 수수료 포함)",               en: "~5.5% (incl. SPAC sponsor fees)" },
    capital:    { ko: "SPAC 자금 + PIPE 추가 조달",                    en: "SPAC trust + additional PIPE" },
    disclosure: { ko: "미래 수익 전망 포함 허용",                      en: "Forward-looking projections allowed" },
    risk:       { ko: "De-SPAC 후 주가 폭락 리스크",                   en: "Post-De-SPAC price collapse risk" },
    best_for:   { ko: "빠른 상장 + 전망 스토리 강한 기업",             en: "Fast listing + strong forward story" },
  },
  {
    name: "Direct Listing",
    nameKo: "직상장",
    highlight: false,
    color: "border-teal-200 dark:border-teal-800",
    bg: "bg-teal-50 dark:bg-teal-950/20",
    tag: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    timeline:   { ko: "6–9개월",                                  en: "6–9 months" },
    fee:        { ko: "~3.5% (수수료 절감)",                      en: "~3.5% (fee savings)" },
    capital:    { ko: "신규 자금 조달 없음 (기존 주주 매각)",     en: "No new capital (existing shareholders sell)" },
    disclosure: { ko: "전면 공개 (S-1 준수)",                    en: "Full public (S-1 compliant)" },
    risk:       { ko: "가격 발견 불확실성",                       en: "Price discovery uncertainty" },
    best_for:   { ko: "브랜드·자금 이미 충분한 유니콘",           en: "Unicorns with brand + sufficient cash" },
  },
];

// ── SPAC Mechanics Steps ───────────────────────────────────────────────────────
const SPAC_MECHANICS = [
  {
    step: 1,
    title: { ko: "SPAC 설립 (IPO)", en: "SPAC Formation (IPO)" },
    body: {
      ko: "스폰서(PE·유명인)가 빈 껍데기 회사(SPAC)를 상장. 조달 자금은 신탁 계좌에 보관.",
      en: "Sponsor (PE firm or celebrity) lists a blank-check company (SPAC). Proceeds held in a trust account.",
    },
  },
  {
    step: 2,
    title: { ko: "합병 대상 탐색", en: "Target Search" },
    body: {
      ko: "24개월 내 적합한 비상장 기업 탐색. 기간 내 미완료 시 투자자에게 자금 환급.",
      en: "Search for a suitable private company within 24 months. If not found, return funds to investors.",
    },
  },
  {
    step: 3,
    title: { ko: "De-SPAC 협상", en: "De-SPAC Negotiation" },
    body: {
      ko: "목표 기업 발굴 → 공개 발표 → 주주 투표. 주주는 반대 시 신탁 자금 환급 요청 가능 (Redemption).",
      en: "Find target → announce publicly → shareholder vote. Shareholders who oppose can redeem their trust proceeds.",
    },
  },
  {
    step: 4,
    title: { ko: "PIPE 조달", en: "PIPE Raise" },
    body: {
      ko: "기관투자자로부터 추가 자금 조달 (PIPE: Private Investment in Public Equity). De-SPAC 완료 자금 보강.",
      en: "Raise additional funding from institutional investors (PIPE: Private Investment in Public Equity). Supplements De-SPAC proceeds.",
    },
  },
  {
    step: 5,
    title: { ko: "합병 완료", en: "Merger Close" },
    body: {
      ko: "합병 완료 후 목표 기업이 상장 상태가 됨. SPAC 주식 → 신규 합병법인 주식으로 전환.",
      en: "After merger completion, the target company becomes publicly listed. SPAC shares → new merged company shares.",
    },
  },
];

// ── SPAC Failures ─────────────────────────────────────────────────────────────
const SPAC_FAILURES = [
  {
    company: "Nikola (2020)",
    emoji: "🚚",
    result: { ko: "사기 유죄", en: "Fraud Conviction" },
    outcomeBg: "bg-red-50 dark:bg-red-950/20",
    outcomeBorder: "border-red-200 dark:border-red-700",
    outcomeTag: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    tagline: {
      ko: "수소 트럭 스타트업 → SPAC으로 상장 → CFO·창업자 사기죄 유죄 (트럭이 굴러가는 영상이 '내리막길 중력'이었던 것으로 밝혀짐)",
      en: "Hydrogen truck startup → SPAC listed → founder and CFO convicted of fraud (truck rolling video turned out to be gravity on a downhill)",
    },
    lesson: {
      ko: "S-1이 없으면 Due Diligence도 없다. SPAC은 미래 전망 수치를 공시에 포함할 수 있어 거품 밸류를 정당화하기 쉬웠다.",
      en: "No S-1 means no due diligence. SPACs allow forward-looking projections in disclosures, making it easy to justify bubble valuations.",
    },
  },
  {
    company: "Grab (-71%)",
    emoji: "🚗",
    result: { ko: "-71% 주가 폭락", en: "-71% share collapse" },
    outcomeBg: "bg-amber-50 dark:bg-amber-950/20",
    outcomeBorder: "border-amber-200 dark:border-amber-700",
    outcomeTag: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    tagline: {
      ko: "동남아 최대 슈퍼앱 → SPAC 합병 $40bn 밸류 → 상장 1년 내 -71% → 여전히 미수익",
      en: "Southeast Asia's largest super-app → SPAC merger at $40B valuation → -71% within a year → still unprofitable",
    },
    lesson: {
      ko: "미래 전망(GMV 성장률)으로 밸류를 합리화했지만, 수익성 경로가 없었다. SPAC에서 허용되는 전망 수치가 밸류 과장을 쉽게 했다.",
      en: "Valuation justified by forward projections (GMV growth) but no profitability path. SPAC-permitted forward projections made overvaluation easy.",
    },
  },
  {
    company: "Bird (-97%, 상장폐지)",
    emoji: "🛴",
    result: { ko: "상장폐지", en: "Delisted" },
    outcomeBg: "bg-red-50 dark:bg-red-950/20",
    outcomeBorder: "border-red-200 dark:border-red-700",
    outcomeTag: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    tagline: {
      ko: "전동킥보드 공유 → SPAC 합병 $2.3bn → NYSE 상장폐지 → Chapter 11 파산",
      en: "E-scooter sharing → SPAC merger at $2.3B → NYSE delisted → Chapter 11 bankruptcy",
    },
    lesson: {
      ko: "도시 마이크로모빌리티 '테마' + SPAC 속도 = 가장 위험한 조합. 사업 모델 검증 없이 상장됐다.",
      en: "Urban micro-mobility 'theme' + SPAC speed = the most dangerous combination. Listed without validating the business model.",
    },
  },
];

// ── Direct Listing Cases ───────────────────────────────────────────────────────
const DIRECT_LISTING_CASES = [
  {
    company: "Airbnb Direct Listing (2020)",
    emoji: "🏠",
    result: { ko: "성공 (자금 조달 없이)", en: "Success (without capital raise)" },
    outcomeBg: "bg-green-50 dark:bg-green-950/20",
    outcomeBorder: "border-green-200 dark:border-green-700",
    outcomeTag: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    tagline: {
      ko: "전통 IPO 검토 → COVID 시장 불확실성 → 직상장 선택 → 첫날 +112% 팝",
      en: "Considered traditional IPO → COVID market uncertainty → chose direct listing → Day 1 +112% pop",
    },
    lesson: {
      ko: "Airbnb는 신규 자금이 필요 없었다 (CB로 이미 충분). 직상장으로 기존 주주 엑싯과 시장 가격 발견만 목적. 7% 수수료 절감이 수억 달러.",
      en: "Airbnb didn't need new capital (CBs already sufficient). Direct listing purely for existing shareholder exit and market price discovery. The 7% fee savings amounted to hundreds of millions.",
    },
  },
  {
    company: "Spotify Direct Listing (2018)",
    emoji: "🎵",
    result: { ko: "직상장 선구자", en: "Direct Listing Pioneer" },
    outcomeBg: "bg-teal-50 dark:bg-teal-950/20",
    outcomeBorder: "border-teal-200 dark:border-teal-700",
    outcomeTag: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    tagline: {
      ko: "NYSE 최초 주요 직상장 → 참조가격 $132 → 첫날 $165.90 (+26%) → 직상장 모델 정립",
      en: "First major direct listing on NYSE → reference price $132 → Day 1 close $165.90 (+26%) → established direct listing as a model",
    },
    lesson: {
      ko: "Spotify는 글로벌 브랜드·750만+ 가입자·흑자 근접 → 직상장 3가지 조건을 모두 충족. 이후 Slack, Coinbase가 직상장을 선택한 모델이 됐다.",
      en: "Spotify had global brand, 75M+ subscribers, near-profitability → all three direct listing conditions met. Became the model for Slack and Coinbase to follow.",
    },
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "SPAC 스폰서는 어떻게 돈을 버나요?"
      : "How do SPAC sponsors make money?",
    a: (ko: boolean) => ko
      ? "SPAC 스폰서는 일반적으로 '파운더 주식(Founder Shares)'으로 전체 SPAC 주식의 20%를 명목상 저가(거의 무료)에 취득합니다. De-SPAC 합병이 완료되면 이 주식의 가치가 실현됩니다. 예를 들어 $200M SPAC이면 스폰서는 $50M 상당의 파운더 주식을 갖게 됩니다. 이 구조가 스폰서에게 '어떤 딜이든 성사시키는' 강한 인센티브를 만들어, 부실한 합병 대상도 강행하게 되는 주된 이유입니다."
      : "SPAC sponsors typically receive 'Founder Shares' — 20% of total SPAC shares at a nominal price (essentially free). Once the De-SPAC merger closes, these shares are realized. For example, a $200M SPAC gives the sponsor ~$50M in founder shares. This structure creates a strong incentive to 'complete any deal,' which is why sponsors sometimes force through low-quality merger targets.",
  },
  {
    q: (ko: boolean) => ko
      ? "직상장이 전통 IPO보다 좋은 경우는 언제인가요?"
      : "When is a direct listing better than a traditional IPO?",
    a: (ko: boolean) => ko
      ? "세 가지 조건이 모두 충족될 때입니다: ① 신규 자금 조달이 필요 없을 것 ② 강력한 브랜드·인지도가 이미 있을 것 ③ 기존 주주의 유동성 확보가 주목적일 것. Spotify, Slack, Coinbase가 이 조건을 충족했습니다. 반면 자금이 필요하거나, 브랜드가 약하거나, 투자자 교육이 필요한 기업에는 전통 IPO가 더 적합합니다."
      : "When all three conditions are met: ① No need for new capital ② Strong brand/name recognition already exists ③ Primary goal is liquidity for existing shareholders. Spotify, Slack, and Coinbase met these conditions. For companies that need capital, have weak brand recognition, or require investor education, traditional IPO is more appropriate.",
  },
  {
    q: (ko: boolean) => ko
      ? "SPAC 주주는 어떻게 손실을 피할 수 있나요?"
      : "How can SPAC shareholders avoid losses?",
    a: (ko: boolean) => ko
      ? "SPAC 주주는 De-SPAC 합병에 반대할 경우 신탁 계좌에서 원금(+이자)을 돌려받을 수 있습니다(Redemption). 따라서 SPAC은 '최소 원금 보장+합병 성공 시 추가 수익'의 구조입니다. 하지만 합병 완료 후 주가가 폭락하는 경우 Redemption 전에 매도하지 못한 투자자는 손실을 봅니다. 평균 De-SPAC 완료 후 수익률은 -75%입니다."
      : "SPAC shareholders can redeem their shares for trust proceeds (principal + interest) if they vote against the De-SPAC merger. So SPAC offers 'minimum principal guarantee + upside if merger succeeds.' However, when shares collapse after merger completion, investors who didn't sell before the crash suffer losses. The average post-De-SPAC return is -75%.",
  },
  {
    q: (ko: boolean) => ko
      ? "2020–21 SPAC 거품의 근본 원인은 무엇이었나요?"
      : "What was the root cause of the 2020–21 SPAC bubble?",
    a: (ko: boolean) => ko
      ? "세 가지 구조적 원인이 겹쳤습니다: ① 제로금리 → 어느 자산이든 수익을 찾는 자금이 넘쳤다 ② SPAC 공시 규정 허점 → 미래 수익 전망을 법적 책임 없이 공시 가능 ③ 셀레브리티 스폰서 → 샤킬 오닐, 알렉스 로드리게스 등 유명인 스폰서가 리테일 투자자를 유인. SEC가 2023년 SPAC 공시 규정을 강화해 ②를 막았고, 고금리가 ①을 종식시키면서 시장이 정상화됐습니다."
      : "Three structural causes converged: ① Zero interest rates → excess capital chasing any returns ② SPAC disclosure loophole → could publish future revenue projections without legal liability ③ Celebrity sponsors → Shaquille O'Neal, Alex Rodriguez, and others attracted retail investors. The SEC's 2023 SPAC disclosure tightening fixed ②, and rising rates ended ①, normalizing the market.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-1 py-2 min-w-max">
          {ECM_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.slug === THIS_CH
                  ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20"
              }`}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThreePathsTable({ ko }: { ko: boolean }) {
  const fields: Array<{ key: keyof typeof THREE_PATHS[0]; label: { ko: string; en: string } }> = [
    { key: "timeline",   label: { ko: "소요 기간",  en: "Timeline"    } },
    { key: "fee",        label: { ko: "수수료",      en: "Fees"        } },
    { key: "capital",    label: { ko: "자금 조달",   en: "Capital"     } },
    { key: "disclosure", label: { ko: "공시 요건",   en: "Disclosure"  } },
    { key: "risk",       label: { ko: "주요 리스크", en: "Key Risk"    } },
    { key: "best_for",   label: { ko: "최적 대상",   en: "Best For"    } },
  ];

  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left px-4 py-3 text-[11px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 dark:bg-gray-800/60 w-28">
                {ko ? "항목" : "Item"}
              </th>
              {THREE_PATHS.map((p) => (
                <th
                  key={p.name}
                  className={`text-left px-4 py-3 font-bold text-gray-800 dark:text-gray-100 ${p.highlight ? "bg-violet-50 dark:bg-violet-950/30" : "bg-gray-50 dark:bg-gray-800/60"}`}
                >
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] ${p.tag}`}>
                    {ko ? p.nameKo : p.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((f, fi) => (
              <tr
                key={f.key}
                className={`border-b border-gray-100 dark:border-gray-800 ${fi % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-900/50"}`}
              >
                <td className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {ko ? f.label.ko : f.label.en}
                </td>
                {THREE_PATHS.map((p) => {
                  const val = p[f.key] as { ko: string; en: string };
                  return (
                    <td
                      key={p.name}
                      className={`px-4 py-3 text-gray-700 dark:text-gray-300 leading-relaxed ${p.highlight ? "bg-violet-50/40 dark:bg-violet-950/10" : ""}`}
                    >
                      {ko ? val.ko : val.en}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden divide-y divide-gray-100 dark:divide-gray-800">
        {THREE_PATHS.map((p) => (
          <div key={p.name} className={`p-4 ${p.bg}`}>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-3 ${p.tag}`}>
              {ko ? p.nameKo : p.name}
            </span>
            <div className="space-y-2">
              {fields.map((f) => {
                const val = p[f.key] as { ko: string; en: string };
                return (
                  <div key={f.key} className="flex gap-2 text-[12px]">
                    <span className="text-gray-400 dark:text-gray-500 font-semibold w-20 flex-shrink-0">
                      {ko ? f.label.ko : f.label.en}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{ko ? val.ko : val.en}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SpacMechanicsSteps({ ko }: { ko: boolean }) {
  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-violet-200 dark:bg-violet-800/60 hidden sm:block" />
      <div className="space-y-4">
        {SPAC_MECHANICS.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeUp(i * 0.08)}
            className="flex gap-4"
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm z-10"
              style={{ background: accent }}
            >
              {s.step}
            </div>
            <div className="flex-1 rounded-xl border border-violet-100 dark:border-violet-900/40 bg-white dark:bg-gray-900 p-4 shadow-sm">
              <p className="font-bold text-gray-900 dark:text-gray-100 text-[14px] mb-1">
                {ko ? s.title.ko : s.title.en}
              </p>
              <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko ? s.body.ko : s.body.en}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SpacFailureCards({ ko }: { ko: boolean }) {
  return (
    <div className="space-y-6">
      {SPAC_FAILURES.map((c, i) => (
        <motion.div
          key={c.company}
          variants={fadeUp(i * 0.08)}
          className={`rounded-2xl border p-6 ${c.outcomeBg} ${c.outcomeBorder}`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xl">{c.emoji}</span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.outcomeTag}`}>
              {ko ? c.result.ko : c.result.en}
            </span>
          </div>
          <h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-50 mb-2">{c.company}</h3>
          <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            {ko ? c.tagline.ko : c.tagline.en}
          </p>
          <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              {ko ? "교훈" : "Lesson"}
            </p>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed italic">
              {ko ? c.lesson.ko : c.lesson.en}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DirectListingCaseCards({ ko }: { ko: boolean }) {
  return (
    <div className="space-y-6">
      {DIRECT_LISTING_CASES.map((c, i) => (
        <motion.div
          key={c.company}
          variants={fadeUp(i * 0.08)}
          className={`rounded-2xl border p-6 ${c.outcomeBg} ${c.outcomeBorder}`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xl">{c.emoji}</span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.outcomeTag}`}>
              {ko ? c.result.ko : c.result.en}
            </span>
          </div>
          <h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-50 mb-2">{c.company}</h3>
          <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            {ko ? c.tagline.ko : c.tagline.en}
          </p>
          <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              {ko ? "교훈" : "Lesson"}
            </p>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed italic">
              {ko ? c.lesson.ko : c.lesson.en}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
interface Props { concept: MarketConcept; lang: Lang; }

export default function EcmSpacDirectClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";

  const prevCh = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const nextCh = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: ko ? concept.title : (concept.titleEn ?? concept.title),
        description: ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt),
        author: { "@type": "Organization", name: "Deal Story" },
        publisher: { "@type": "Organization", name: "Deal Story", url: "https://dealstory.kr" },
        datePublished: "2024-01-01",
        inLanguage: ko ? "ko" : "en",
        url: `https://dealstory.kr${base}/ecm-spac-direct`,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q(ko),
          acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SeriesNav lang={lang} />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* ── Hero ── */}
        <section className="max-w-3xl mx-auto px-5 pt-12 pb-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp()} className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">
                ECM Series
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">Ch.10</span>
              <div className="ml-auto flex items-center gap-1.5">
                <Link
                  href="/market-101/ecm-spac-direct"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300" : "text-gray-400 hover:text-gray-600"}`}
                >
                  한국어
                </Link>
                <Link
                  href="/en/market-101/ecm-spac-direct"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300" : "text-gray-400 hover:text-gray-600"}`}
                >
                  English
                </Link>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp(0.02)}
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: accent }}
            >
              {ko ? "ECM Ch.10 — SPAC·직상장" : "ECM Ch.10 — SPAC & Direct Listing"}
            </motion.p>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 leading-tight mb-3"
            >
              {ko
                ? "SPAC과 직상장: 전통 IPO의 두 대안 완전 해부"
                : "SPAC & Direct Listing: Complete Anatomy of Two IPO Alternatives"}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5"
            >
              {ko
                ? "SPAC은 빠른 상장·전망 스토리로 2021년 폭발적으로 성장했다가 Nikola·Grab·Bird처럼 폭락했다. 직상장은 Spotify·Airbnb처럼 자금·브랜드가 충분한 유니콘의 선택지다. 세 가지 상장 경로의 구조적 차이, SPAC 거품의 메커니즘, 그리고 2023년 이후 시장 정상화를 해부한다."
                : "SPACs exploded in 2021 on fast listings and forward-story narratives, then collapsed with Nikola, Grab, and Bird. Direct listings are the path for unicorns with sufficient capital and brand — like Spotify and Airbnb. We dissect the structural differences between all three listing routes, the SPAC bubble mechanism, and post-2023 market normalization."}
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-2">
              {(ko
                ? ["SPAC", "직상장", "De-SPAC", "전통 IPO", "PIPE", "파운더 주식", "Nikola", "Grab", "Airbnb", "Spotify"]
                : ["SPAC", "Direct Listing", "De-SPAC", "Traditional IPO", "PIPE", "Founder Shares", "Nikola", "Grab", "Airbnb", "Spotify"]
              ).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Share top */}
        <div className="max-w-3xl mx-auto px-5 mb-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        <div className="max-w-3xl mx-auto px-5 py-8 space-y-20">

          {/* ── Ch.1: 세 가지 상장 경로 ── */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "세 가지 상장 경로" : "Three Listing Routes"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "비상장 기업이 공개시장에 진입하는 방법은 크게 세 가지입니다. 전통 IPO, SPAC 합병(De-SPAC), 직상장. 각각 소요 기간, 수수료 구조, 자금 조달 방식, 공시 요건이 다릅니다. 어떤 경로를 선택하느냐는 기업의 자금 상황, 브랜드 인지도, 상장 타이밍 목적에 따라 결정됩니다."
                  : "There are three primary routes for a private company to enter the public markets: Traditional IPO, SPAC merger (De-SPAC), and Direct Listing. Each differs in timeline, fee structure, capital-raise mechanism, and disclosure requirements. The choice of route depends on the company's capital position, brand recognition, and listing timing objectives."}
              </motion.p>
            </div>

            <ThreePathsTable ko={ko} />

            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 rounded-xl p-5 bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800"
            >
              <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 mb-2">
                {ko ? "💡 핵심 구분 포인트" : "💡 Key Differentiator"}
              </p>
              <p className="text-sm text-violet-700 dark:text-violet-300 leading-relaxed">
                {ko
                  ? "전통 IPO = 신규 자금 조달이 목적. SPAC = 빠른 상장이 목적 (단, 스폰서 인센티브 구조가 문제). 직상장 = 기존 주주 유동성이 목적. 자금이 필요하면 전통 IPO, 속도가 필요하면 SPAC(단, 리스크 주의), 브랜드·자금이 충분하면 직상장."
                  : "Traditional IPO = primary goal is new capital. SPAC = primary goal is speed to listing (but sponsor incentive structure is the problem). Direct Listing = primary goal is existing shareholder liquidity. Need capital → Traditional IPO. Need speed → SPAC (but beware risks). Have brand + capital → Direct Listing."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.2: SPAC 메커니즘 ── */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "SPAC 메커니즘 — 5단계 해부" : "SPAC Mechanism — 5-Step Anatomy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "SPAC(Special Purpose Acquisition Company, 기업인수목적회사)은 사업 실체 없이 오직 다른 기업 인수를 목적으로 만들어진 상장 기업입니다. 스폰서가 SPAC을 상장해 자금을 조달하고, 24개월 내 합병 대상을 찾아 De-SPAC 합병을 완료하는 구조입니다."
                  : "SPAC (Special Purpose Acquisition Company) is a listed company with no business operations, created solely to acquire another company. The sponsor lists the SPAC to raise capital, then finds a merger target within 24 months and completes the De-SPAC merger."}
              </motion.p>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <SpacMechanicsSteps ko={ko} />
            </motion.div>

            <motion.div
              variants={fadeUp(0.2)}
              className="mt-8 rounded-xl p-5 border"
              style={{ borderColor: accent + "33", background: accent + "08" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: accent }}>
                {ko ? "⚠️ 스폰서 인센티브 구조 — SPAC의 근본 문제" : "⚠️ Sponsor Incentive Structure — The Root Problem of SPACs"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "스폰서는 파운더 주식(전체의 20%)을 거의 무료로 취득합니다. De-SPAC 합병이 성사되어야만 이 주식의 가치가 실현됩니다. 이 구조가 '합병 대상의 품질과 무관하게 어떤 딜이든 성사시키려는' 인센티브를 만듭니다. 이것이 2020–21년 SPAC 버블에서 부실한 기업들이 대거 상장된 핵심 이유입니다."
                  : "Sponsors receive founder shares (20% of total) for essentially nothing. These shares only have value once the De-SPAC merger closes. This structure creates an incentive to complete any deal regardless of target quality. This is why low-quality companies flooded the market during the 2020–21 SPAC bubble."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.3: 직상장 ── */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "직상장 — Spotify와 Airbnb의 선택" : "Direct Listing — The Spotify & Airbnb Path"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "직상장(Direct Listing)은 신규 주식을 발행하지 않고 기존 주주의 주식을 시장에 직접 유통시키는 방식입니다. 인수단(Underwriter)이 없으며, 수요예측(Book-building) 없이 시장 가격 발견에 의존합니다. 수수료가 전통 IPO의 절반 수준(~3.5%)이고, 첫날부터 Lock-up 제한 없이 모든 주식이 자유 거래됩니다."
                  : "A Direct Listing distributes existing shareholder shares directly into the market without issuing new shares. There is no underwriter and no book-building — price is discovered entirely by the market. Fees are roughly half of a traditional IPO (~3.5%), and all shares trade freely from day one with no lock-up restrictions."}
              </motion.p>
            </div>

            {/* Direct listing 3 conditions */}
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20 p-5 mb-8"
            >
              <p className="text-sm font-bold text-teal-800 dark:text-teal-200 mb-3">
                {ko ? "✅ 직상장에 적합한 3가지 조건" : "✅ Three Conditions for a Suitable Direct Listing"}
              </p>
              <ul className="space-y-2">
                {(ko
                  ? [
                      "① 신규 자금 조달이 필요 없을 것 — 이미 충분한 현금·CB 보유",
                      "② 강력한 브랜드·소비자 인지도가 이미 있을 것 — 투자자 교육 불필요",
                      "③ 기존 주주(PE·직원)의 유동성 확보가 주목적일 것 — 구주 매출",
                    ]
                  : [
                      "① No need for new capital — already holds sufficient cash or convertible notes",
                      "② Strong brand / consumer recognition already exists — no investor education needed",
                      "③ Primary goal is liquidity for existing shareholders (PE, employees) — secondary shares",
                    ]
                ).map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-teal-700 dark:text-teal-300">
                    <span className="flex-shrink-0 mt-0.5">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <DirectListingCaseCards ko={ko} />
            </motion.div>
          </motion.section>

          {/* ── Ch.4: SPAC 붕괴 ── */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "SPAC 버블 붕괴 — 3대 실패 케이스" : "SPAC Bubble Collapse — Three Failure Cases"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "2020–21년 SPAC 붐은 800개 이상의 SPAC IPO를 만들어냈습니다. 제로금리·공시 규정 허점·셀레브리티 스폰서가 겹쳐 질 낮은 기업들이 대거 상장됐습니다. Nikola는 사기, Grab은 -71%, Bird는 상장폐지와 파산으로 끝났습니다. 평균 De-SPAC 완료 후 수익률은 -75%였습니다."
                  : "The 2020–21 SPAC boom produced over 800 SPAC IPOs. Zero interest rates, disclosure loopholes, and celebrity sponsors converged to list a flood of low-quality companies. Nikola ended in fraud conviction, Grab fell -71%, and Bird was delisted and filed for bankruptcy. The average post-De-SPAC return was -75%."}
              </motion.p>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <SpacFailureCards ko={ko} />
            </motion.div>
          </motion.section>

          {/* ── Ch.5: 2023 이후 정상화 ── */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "2023 이후 정상화" : "Post-2023 Normalization"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.div
              variants={fadeUp(0.05)}
              className="pl-4 border-l-2 mb-8"
              style={{ borderColor: accent + "4d" }}
            >
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "2022–23 금리 충격 이후 SPAC 시장은 사실상 소멸됐다. 2021년 SPAC IPO 수 800+건 → 2023년 30건 미만. SEC가 2023년 SPAC 공시 규정을 강화해 미래 전망 수치에도 S-1 수준의 책임을 부과했다. 직상장도 2022년 이후 활용이 줄었는데, 고금리 환경에서 자금 조달 없는 상장이 덜 매력적이기 때문이다. 2023년 이후 IPO 시장은 전통 IPO로 복귀하고 있으며, Arm Holdings·Birkenstock·Instacart·Klaviyo가 전통 IPO로 성공적으로 상장했다."
                  : "After the 2022–23 rate shock, the SPAC market effectively collapsed. SPAC IPO count: 800+ in 2021 → fewer than 30 in 2023. The SEC strengthened SPAC disclosure rules in 2023, imposing S-1-level liability on forward-looking projections. Direct listings also declined after 2022, as capital-raise-free listings are less attractive in a high-rate environment. Post-2023, the IPO market has reverted to traditional IPOs, with Arm Holdings, Birkenstock, Instacart, and Klaviyo successfully listing via conventional routes."}
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  stat: "800+",
                  label: { ko: "2021년 SPAC IPO 건수", en: "SPAC IPOs in 2021" },
                  color: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
                  textColor: "text-red-600 dark:text-red-400",
                },
                {
                  stat: "<30",
                  label: { ko: "2023년 SPAC IPO 건수", en: "SPAC IPOs in 2023" },
                  color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
                  textColor: "text-amber-600 dark:text-amber-400",
                },
                {
                  stat: "-75%",
                  label: { ko: "평균 De-SPAC 후 수익률", en: "Avg. post-De-SPAC return" },
                  color: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
                  textColor: "text-violet-600 dark:text-violet-400",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.06)}
                  className={`rounded-xl border p-5 text-center ${s.color}`}
                >
                  <p className={`text-3xl font-black mb-1 ${s.textColor}`}>{s.stat}</p>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400">{ko ? s.label.ko : s.label.en}</p>
                </motion.div>
              ))}
            </div>

            {/* 전통 IPO 복귀 */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 rounded-xl p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                {ko ? "🔄 전통 IPO 복귀 — 2023년 주요 상장" : "🔄 Return to Traditional IPO — Notable 2023 Listings"}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Arm Holdings", "Birkenstock", "Instacart", "Klaviyo"].map((co) => (
                  <span
                    key={co}
                    className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Share mid */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
            </motion.div>
          </motion.section>

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mb-5" style={{ background: accent }} />
            <div className="space-y-3">
              {concept.keyTerms.map((term, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                      {ko ? term.term : term.termEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Related ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2
              variants={fadeUp()}
              className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
            >
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-ipo-post",              ko: "Ch.6 포스트-IPO",    en: "Ch.6 Post-IPO"       },
                { slug: "ecm-overview",              ko: "ECM 개요",           en: "ECM Overview"        },
                { slug: "ecm-international-listing", ko: "Ch.9 국제상장",      en: "Ch.9 Intl Listing"   },
              ].map((t) => (
                <Link
                  key={t.slug}
                  href={`${base}/${t.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  {ko ? t.ko : t.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Share bottom */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          {/* ── References ── */}
          {concept.references && concept.references.length > 0 && (
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="border-t border-gray-200 dark:border-gray-700 pt-8"
            >
              <motion.h2
                variants={fadeUp()}
                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
              >
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-violet-600 dark:hover:text-violet-400 hover:underline"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Prev / Next ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            {prevCh && (
              <Link
                href={`${base}/${prevCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
              >
                ← {prevCh.title(ko)}
              </Link>
            )}
            {nextCh && (
              <Link
                href={`${base}/${nextCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-violet-600 dark:text-violet-400 hover:underline ml-auto"
              >
                {nextCh.title(ko)} →
              </Link>
            )}
            {!nextCh && (
              <span className="ml-auto text-[12px] text-gray-400 dark:text-gray-500 italic">
                {ko ? "— 시리즈 마지막 챕터 —" : "— Final chapter in series —"}
              </span>
            )}
          </div>
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-spac-direct");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
