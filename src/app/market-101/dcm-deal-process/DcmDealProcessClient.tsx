"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";
const accentLight = "#ccfbf1";

// ── Series nav ────────────────────────────────────────────────────────────────
const DCM_SERIES = [
  { slug: "dcm-overview",              ch: 0, title: (ko: boolean) => ko ? "DCM 개요"         : "DCM Overview"    },
  { slug: "dcm-issuers",               ch: 1, title: (ko: boolean) => ko ? "Ch.1 발행사"       : "Ch.1 Issuers"    },
  { slug: "dcm-investors",             ch: 2, title: (ko: boolean) => ko ? "Ch.2 투자자"       : "Ch.2 Investors"  },
  { slug: "dcm-bond-products",         ch: 3, title: (ko: boolean) => ko ? "Ch.3 상품"         : "Ch.3 Products"   },
  { slug: "dcm-international-markets", ch: 4, title: (ko: boolean) => ko ? "Ch.4 국제채"       : "Ch.4 Intl"       },
  { slug: "dcm-deal-process",          ch: 5, title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"  : "Ch.5 Process"    },
  { slug: "dcm-pricing",               ch: 6, title: (ko: boolean) => ko ? "Ch.6 프라이싱"     : "Ch.6 Pricing"    },
  { slug: "dcm-structure-regulation",  ch: 7, title: (ko: boolean) => ko ? "Ch.7 구조·제도"    : "Ch.7 Regulation" },
];

const thisCh = 5;

// ── Deal Stages ───────────────────────────────────────────────────────────────
const DEAL_STAGES = [
  {
    num: "01",
    label: (ko: boolean) => ko ? "Mandate 선정" : "Mandate",
    days: (ko: boolean) => ko ? "T-60 ~ T-30일" : "T-60 to T-30",
    who: ["발행사 CFO/재무팀", "IB 커버리지 뱅커", "DCM 뱅커"],
    desc: (ko: boolean) => ko
      ? "발행사가 자금조달 필요성을 인식하고 복수의 IB에 제안서(pitch)를 요청합니다. 각 IB는 발행 구조·타이밍·예상 스프레드·배분 전략을 담은 pitch를 제출하고, 발행사는 1–3개 IB를 리드 매니저(Book Runner)로 선정합니다."
      : "The issuer identifies a funding need and requests pitches from multiple banks. Each bank proposes structure, timing, expected spread, and distribution strategy. The issuer selects 1–3 lead managers (book runners).",
    outputs: (ko: boolean) => ko
      ? "Mandate Letter·Fee 합의·역할 분담(B&D vs 글로벌 코디네이터)"
      : "Mandate letter, fee agreement, role division (B&D vs Global Coordinator)",
    bankersNote: (ko: boolean) => ko
      ? "Pitch 핵심은 'comparable analysis' — 유사 발행사의 최근 발행 스프레드와 우리 발행 예상 스프레드 비교"
      : "Pitch core is 'comparable analysis' — comparing recent spreads of similar issuers vs expected spread for this deal",
    color: "border-teal-300",
    bg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    num: "02",
    label: (ko: boolean) => ko ? "사전 준비" : "Preparation",
    days: (ko: boolean) => ko ? "T-30 ~ T-5일" : "T-30 to T-5",
    who: ["법무법인", "발행사 IR팀", "리드 뱅커"],
    desc: (ko: boolean) => ko
      ? "발행사와 리드 뱅커가 공동으로 투자자 프레젠테이션(NDA 없는 일반 자료)를 준비합니다. 법무법인은 Prospectus/Offering Circular를 작성하고, 발행사는 법적·재무 실사(Due Diligence)를 완료합니다. 리드 뱅커는 투자자 수요를 사전에 탐색(pilot fishing)합니다."
      : "Issuer and lead bankers jointly prepare investor presentations (public materials). Legal counsel drafts the Prospectus/Offering Circular; the issuer completes legal and financial due diligence. Lead bankers conduct preliminary demand assessment (pilot fishing).",
    outputs: (ko: boolean) => ko
      ? "Investor Presentation·Prospectus 초안·Pilot Fishing 결과·컴프라이언스 승인"
      : "Investor presentation, Prospectus draft, pilot fishing results, compliance sign-off",
    bankersNote: (ko: boolean) => ko
      ? "Pilot fishing은 주요 투자자 5–10곳에 비공식적으로 수요·스프레드 레벨을 확인하는 과정 — 발행 취소 결정을 빨리 내릴 수 있게 해주는 리스크 관리 도구"
      : "Pilot fishing is an informal check with 5–10 key investors on demand and spread levels — it's a risk management tool to pull the deal early if demand is insufficient",
    color: "border-blue-300",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    num: "03",
    label: (ko: boolean) => ko ? "로드쇼" : "Roadshow",
    days: (ko: boolean) => ko ? "T-5 ~ T-2일" : "T-5 to T-2",
    who: ["발행사 CEO/CFO", "리드 뱅커", "투자자 (미팅)"],
    desc: (ko: boolean) => ko
      ? "발행사 경영진과 뱅커가 주요 투자자를 순회하며 회사 상황·재무 전략·채권 발행 목적을 설명합니다. 현재는 가상 로드쇼(Virtual Roadshow)가 일반화되어 1–2일 만에 전 세계 투자자 미팅을 완료합니다. 로드쇼 중 뱅커는 투자자 관심도를 실시간으로 모니터링합니다."
      : "Issuer management and bankers meet key investors to explain business, financial strategy, and bond purpose. Virtual roadshows are now standard — global investor meetings completed in 1–2 days. Bankers monitor investor interest in real time during the roadshow.",
    outputs: (ko: boolean) => ko
      ? "투자자 미팅 요약·수요 신호 수집·IPT 범위 결정"
      : "Investor meeting summaries, demand signals, IPT range determination",
    bankersNote: (ko: boolean) => ko
      ? "로드쇼에서 투자자가 묻는 3가지: ① 이 돈으로 무엇을 하나요? ② 재무비율이 악화되면 어떻게 대응하나요? ③ 기존 채권 대비 스프레드 추가(NIC)는 얼마입니까?"
      : "Three questions investors always ask in roadshow: ① What will you do with the proceeds? ② How will you respond if financial ratios worsen? ③ What NIC are you offering versus your existing bonds?",
    color: "border-violet-300",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    num: "04",
    label: (ko: boolean) => ko ? "IPT → 북빌딩" : "IPT → Book-Building",
    days: (ko: boolean) => ko ? "T일 오전 (2–4시간)" : "Deal day AM (2–4 hrs)",
    who: ["리드 뱅커 (신디케이트 데스크)", "투자자 세일즈", "투자자"],
    desc: (ko: boolean) => ko
      ? "IPT(Initial Price Thoughts: 초기 가격 가이던스)를 시장에 공표합니다. 예: 'T+180bp area'. 이후 투자자들이 오더를 제출하고 북빌딩이 진행됩니다. 수요가 충분하면 스프레드를 좁혀(타이트닝) 최종 가이던스를 발표합니다. 목표 커버리지는 2–5x(발행 규모 대비 오더)입니다."
      : "IPT (Initial Price Thoughts: initial price guidance) is announced to market. Example: 'T+180bp area'. Investors submit orders; book-building runs. If demand is sufficient, the spread tightens to a final guidance announcement. Target coverage is 2–5x (orders vs. deal size).",
    outputs: (ko: boolean) => ko
      ? "오더북 규모·투자자 유형 분포·최종 가이던스(FPG)"
      : "Order book size, investor type breakdown, Final Price Guidance (FPG)",
    bankersNote: (ko: boolean) => ko
      ? "오더북의 질이 양만큼 중요 — Real Money 비중이 높을수록 딜이 안정적, HF 비중 높으면 취약"
      : "Book quality matters as much as size — high Real Money = stable deal, high HF = fragile book",
    color: "border-amber-300",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    num: "05",
    label: (ko: boolean) => ko ? "프라이싱 & 배분" : "Pricing & Allocation",
    days: (ko: boolean) => ko ? "T일 오후 (2–3시간)" : "Deal day PM (2–3 hrs)",
    who: ["리드 뱅커", "발행사 CFO", "배분 위원회"],
    desc: (ko: boolean) => ko
      ? "최종 스프레드와 발행 규모를 확정합니다. 배분은 뱅커의 재량이지만 일반적으로 ① 북 앵커 투자자(장기 보유) 우대, ② 지역 분산, ③ 투자자 관계(리버스 인콰이어리 고려)를 감안합니다. 배분 결과는 투자자에게 전화/이메일로 통보합니다."
      : "Final spread and deal size are locked. Allocation is at banker discretion, generally prioritizing ① long-term anchor investors, ② geographic diversity, ③ investor relationships (reverse inquiry considered). Allocation results are communicated to investors by phone/email.",
    outputs: (ko: boolean) => ko
      ? "최종 조건표(Term Sheet)·배분 리스트·Trade Confirmation"
      : "Final term sheet, allocation list, trade confirmation",
    bankersNote: (ko: boolean) => ko
      ? "배분은 관계 관리 도구 — 좋은 딜에서 좋은 배분을 받은 투자자는 다음 딜에서도 안정적 수요 제공"
      : "Allocation is a relationship management tool — investors who got good allocations in a good deal provide stable demand in the next one",
    color: "border-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    num: "06",
    label: (ko: boolean) => ko ? "결제 (Settlement)" : "Settlement",
    days: (ko: boolean) => ko ? "T+2 ~ T+5일" : "T+2 to T+5",
    who: ["Euroclear/Clearstream", "발행사 재무팀", "수탁은행"],
    desc: (ko: boolean) => ko
      ? "결제일에 투자자는 채권 대금을 납부하고 발행사는 채권을 발행합니다. 대부분의 국제채는 T+2 결제(일부 T+5). 채권은 Euroclear 또는 Clearstream에 등록·예탁됩니다. 발행사는 결제 대금에서 수수료(1–5bp의 management fee + 언더라이팅 피)를 차감하고 순 발행대금을 수령합니다."
      : "On settlement date, investors pay and the issuer delivers bonds. Most international bonds settle T+2 (some T+5). Bonds are registered and deposited in Euroclear or Clearstream. The issuer receives net proceeds after deducting fees (1–5bp management fee + underwriting fee).",
    outputs: (ko: boolean) => ko
      ? "채권 발행·ISIN 발급·순 발행대금 수령·Closing 공시"
      : "Bond issued, ISIN assigned, net proceeds received, closing announcement",
    bankersNote: (ko: boolean) => ko
      ? "결제 실패(settlement fail)는 드물지만 발생 시 평판 손상이 크므로 뱅커는 T+1부터 모든 서류를 재확인"
      : "Settlement fails are rare but reputationally damaging — bankers re-verify all documents from T+1",
    color: "border-green-300",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
];

// ── Syndicate Roles ────────────────────────────────────────────────────────────
const ROLES = [
  {
    role: (ko: boolean) => ko ? "글로벌 코디네이터 (GC)" : "Global Coordinator (GC)",
    who: (ko: boolean) => ko ? "리드 뱅크 1–2곳" : "1–2 lead banks",
    duties: (ko: boolean) => ko
      ? "전체 딜 조율·투자자 배분 최종 결정·신디케이트 관리·발행사 메인 접촉창구"
      : "Overall deal coordination, final allocation decisions, syndicate management, main issuer contact",
    fee: (ko: boolean) => ko ? "수수료 배분 1위 (~40%)" : "Highest fee share (~40%)",
    color: "border-teal-300 bg-teal-50 dark:bg-teal-900/20",
    pct: 40,
    pctColor: "bg-teal-400",
  },
  {
    role: (ko: boolean) => ko ? "북런너 (Book Runner / B&D)" : "Book Runner / B&D",
    who: (ko: boolean) => ko ? "리드 뱅크 2–5곳" : "2–5 lead banks",
    duties: (ko: boolean) => ko
      ? "오더북 관리·투자자 세일즈·가격 협상 참여·배분 추천"
      : "Order book management, investor sales, pricing input, allocation recommendations",
    fee: (ko: boolean) => ko ? "수수료 배분 2위 (~45% 합산)" : "Second fee tier (~45% combined)",
    color: "border-blue-300 bg-blue-50 dark:bg-blue-900/20",
    pct: 45,
    pctColor: "bg-blue-400",
  },
  {
    role: (ko: boolean) => ko ? "코매니저 (Co-Manager)" : "Co-Manager",
    who: (ko: boolean) => ko ? "지역 뱅크 3–10곳" : "3–10 regional banks",
    duties: (ko: boolean) => ko
      ? "특정 지역 투자자 접근·세일즈 커버리지 보완 역할"
      : "Regional investor access, supplementary sales coverage",
    fee: (ko: boolean) => ko ? "수수료 배분 3위 (~15% 합산)" : "Third tier (~15% combined)",
    color: "border-violet-300 bg-violet-50 dark:bg-violet-900/20",
    pct: 15,
    pctColor: "bg-violet-400",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "딜이 중간에 취소(Pull)되는 이유는 무엇인가요?"
      : "Why do deals get pulled mid-execution?",
    a: (ko: boolean) => ko
      ? "주요 이유: ① 시장 변동성 급등(시장 불안, 지정학적 사건) — 투자자 오더 취소 속출, ② 발행사 신용 이벤트(신용등급 하향 예상, 실적 쇼크) — 투자자 신뢰 붕괴, ③ 오더북 미달 — 목표 커버리지 1x 미만. 딜 취소는 시장에 약세 신호를 보내므로 뱅커는 취소 vs 조건 타협(스프레드 더 줌) 사이에서 판단합니다."
      : "Main reasons: ① Sudden market volatility (risk-off, geopolitical shock) — orders withdrawn en masse. ② Issuer credit event (expected downgrade, earnings shock) — investor confidence collapse. ③ Insufficient book — coverage below 1x. Pulling a deal sends a negative signal, so bankers weigh pulling vs. conceding more spread (NIC).",
  },
  {
    q: (ko: boolean) => ko
      ? "로드쇼 없이 발행(Wall Cross / Direct)도 가능한가요?"
      : "Can bonds be issued without a roadshow (Wall Cross / Direct)?",
    a: (ko: boolean) => ko
      ? "가능합니다. 빈번히 발행하는 IG 발행사(frequent issuer)는 투자자와 이미 충분한 신뢰가 쌓여 있어 '직접 발행(direct execution)' 방식을 씁니다. IPT 발표 후 2–3시간 만에 북빌딩·프라이싱·배분을 완료합니다. 반대로, 처음 국제시장에 나오는 발행사나 최근 신용 이벤트가 있었던 발행사는 전통 로드쇼가 필수입니다."
      : "Yes. Frequent IG issuers with established investor relationships use direct execution — IPT announced and book-built within 2–3 hours. In contrast, debut issuers or those with recent credit events require a full traditional roadshow to rebuild investor confidence.",
  },
  {
    q: (ko: boolean) => ko
      ? "배분(Allocation)은 어떻게 결정됩니까? 뱅커 마음대로인가요?"
      : "How are allocations decided? Is it entirely at the banker's discretion?",
    a: (ko: boolean) => ko
      ? "법적으로는 리드 뱅커(Book Runner)의 재량이지만, 실무에서는 원칙이 있습니다: ① 오더를 먼저 낸 투자자 우대(first come), ② 딜의 가격 발견에 기여한 투자자(낮은 스프레드 수요 제시) 우대, ③ 장기 보유 성향의 Real Money 우대, ④ 이전 딜에서 충성도 높은 투자자 우대. 투자자들은 자신의 배분 이력을 추적하며 불공정 배분은 미래 참여 포기로 보복합니다."
      : "Legally it's at book runner discretion, but practical principles exist: ① Early orderers prioritized (first come), ② investors who contributed to price discovery (tight spread orders) rewarded, ③ long-term Real Money preferred over hot money, ④ loyal investors from past deals favored. Investors track their allocation history — unfair treatment means withdrawal from future deals.",
  },
  {
    q: (ko: boolean) => ko
      ? "IG와 HY 딜 프로세스의 차이는?"
      : "How does the IG deal process differ from HY?",
    a: (ko: boolean) => ko
      ? "IG는 빠릅니다 — 로드쇼 1일(또는 없음), 북빌딩 2–4시간, 전체 실행 1–2일. HY는 더 깁니다 — 로드쇼 5–10일(더 많은 투자자 설득 필요), 상세한 코버넌트 협상, Indenture 문서 검토. 또한 HY는 SEC 144A 등록 또는 Reg S 요건을 더 엄격히 검토하고, 법적 문서가 IG 대비 훨씬 복잡합니다(300페이지+ Offering Memorandum)."
      : "IG is fast: 1-day roadshow (or none), 2–4 hours book-building, 1–2 days total execution. HY takes longer: 5–10 day roadshow (more investor persuasion needed), detailed covenant negotiations, Indenture review. HY also involves stricter SEC 144A/Reg S compliance and far more complex legal documentation (300+ page Offering Memorandum).",
  },
  {
    q: (ko: boolean) => ko
      ? "NIC(신규발행 프리미엄)는 왜 발행사가 추가로 지불하는 건가요?"
      : "Why does the issuer pay a NIC (New Issue Concession)?",
    a: (ko: boolean) => ko
      ? "NIC는 투자자에게 기존(유통) 채권 대신 신규 채권을 사는 인센티브로 제공하는 추가 스프레드입니다. 기존 채권을 팔고 신규 채권을 사려면 투자자에게 거래비용(bid-ask spread)과 리스크가 발생합니다. 보통 IG는 3–10bp NIC, HY는 12.5–25bp NIC를 줍니다. 시장 여건이 좋을수록(강한 수요) NIC를 줄일 수 있고, 이것이 뱅커가 타이밍을 조언하는 이유입니다."
      : "NIC is extra spread given to investors as an incentive to buy new bonds instead of existing ones. Switching from existing to new bonds incurs transaction costs (bid-ask spread) and risk. Typically IG gives 3–10bp NIC; HY gives 12.5–25bp. In strong markets (high demand), NIC can be minimized — this is why bankers advise on timing so carefully.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "ICMA", title: "ICMA Primary Market Handbook — New Issue Process and Documentation", url: "https://www.icmagroup.org/resources/icma-publications/icma-primary-market-handbook/", source: "ICMA, 2024" },
  { id: 2, author: "U.S. Securities and Exchange Commission (SEC)", title: "Rule 144A — Private Resales of Securities to Institutions", url: "https://www.sec.gov/rules/final/33-6862.pdf", source: "SEC, 2023" },
  { id: 3, author: "Dealogic", title: "Global DCM Review — League Tables and Market Statistics", url: "https://www.dealogic.com/insight/dcm-review/", source: "Dealogic, 2024" },
  { id: 4, author: "Bank for International Settlements", title: "New Issue Premiums in the Corporate Bond Market", url: "https://www.bis.org/publ/work896.htm", source: "BIS Working Papers, 2022" },
  { id: 5, author: "ICMA", title: "EMTN Programme Guide — Documentation and Execution", url: "https://www.icmagroup.org/resources/icma-publications/", source: "ICMA, 2024" },
];
export default function DcmDealProcessClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-deal-process`;

  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DCM Ch.5 — 딜 프로세스: Mandate부터 클로징까지",
    description:
      "DCM 채권 발행의 전체 프로세스: Mandate 선정부터 로드쇼·북빌딩·프라이싱·배분·결제까지. 뱅커·발행사·투자자가 각 단계에서 실제로 무엇을 하는지, 실전 타임라인으로 해부합니다.",
    url: pageUrl,
    datePublished: "2026-05-26",
    publisher: {
      "@type": "Organization",
      name: "Deal Story",
      url: "https://dealstory.kr",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q(ko),
      acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* JSON-LD */}
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </>

      {/* ── Series nav ── */}
      <nav className="sticky top-0 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 text-sm">
            {DCM_SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`${base}/${s.slug}`}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  s.ch === thisCh
                    ? "font-bold text-white"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                style={s.ch === thisCh ? { background: accent } : undefined}
              >
                {s.title(ko)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/market-101" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Market 101
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: accent }}>DCM Series</span>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">Ch.5</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "DCM 시리즈 · Chapter 5" : "DCM Series · Chapter 5"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 16분 읽기" : "⏱ 16 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "딜 프로세스: Mandate부터 클로징까지"
              : "Deal Process: From Mandate to Closing"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "채권 발행 딜은 어떻게 시작되고 어떻게 끝나는가? Mandate 선정부터 로드쇼·북빌딩·프라이싱·배분·결제까지, 뱅커·발행사·투자자가 각 단계에서 실제로 무엇을 하는지 실전 타임라인으로 해부합니다. IG 딜이 72시간 만에 클로징되는 메커니즘의 전부가 여기 있습니다."
              : "How does a bond deal start and end? From mandate selection through roadshow, book-building, pricing, allocation, and settlement — this chapter dissects what bankers, issuers, and investors actually do at each stage, in a real-world timeline. Everything behind how an IG deal closes in 72 hours."}
          </p>
        </motion.section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        {/* ── 3-stat callout ───────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: ko ? "2–3일" : "2–3 days",
              label: (ko: boolean) => ko ? "IG 딜 실행 타임라인" : "IG Deal Execution",
              sub: (ko: boolean) => ko ? "IPT 발표 → 클로징까지" : "IPT announcement to closing",
            },
            {
              stat: "2–5x",
              label: (ko: boolean) => ko ? "목표 오버커버리지" : "Target Oversubscription",
              sub: (ko: boolean) => ko ? "발행 규모 대비 오더 배수" : "Orders vs. deal size multiple",
            },
            {
              stat: "T+2",
              label: (ko: boolean) => ko ? "결제 완료" : "Settlement",
              sub: (ko: boolean) => ko ? "대부분 IG 국제채 기준" : "Standard for most IG international bonds",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.08)}
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-0.5">{item.label(ko)}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Intro explainer ──────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "딜 프로세스를 이해해야 하는 이유" : "Why Understanding the Deal Process Matters"}
          </h2>
          <div
            className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 mb-4"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
              {ko
                ? "채권 발행은 '발행사가 채권을 팔고 투자자가 산다'는 단순한 거래처럼 보이지만, 그 안에는 수십 명의 전문가가 수주에 걸쳐 조율하는 복잡한 과정이 있습니다. Mandate 선정, 법적 문서 준비, 투자자 수요 파악, 가격 결정, 배분, 결제 — 각 단계는 독립적인 동시에 긴밀히 연결되어 있습니다."
                : "Bond issuance looks like a simple transaction — an issuer sells bonds and investors buy them. But beneath that surface lies weeks of coordination among dozens of specialists. Mandate selection, legal documentation, demand assessment, pricing, allocation, settlement — each stage is independent yet tightly linked to every other."}
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
              {ko
                ? "이 프로세스를 이해하면 뱅커의 일상이 명확해집니다. 뱅커가 새벽에 일어나 Bloomberg를 확인하는 이유, 로드쇼 일정 조율에 며칠을 쓰는 이유, 딜 당일 오전 오더북을 두 시간마다 업데이트하는 이유가 모두 이 타임라인 안에 있습니다."
                : "Understanding this process illuminates what DCM bankers actually do. Why bankers check Bloomberg at 5am, why scheduling a roadshow takes days of negotiation, why the order book gets updated every two hours on deal day — all of it lives within this timeline."}
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {ko
                ? "그리고 딜이 잘못됐을 때 무엇이 어느 단계에서 무너지는지, 1998년 한국 외평채처럼 위기 속에서 딜을 어떻게 살려내는지도 이 프레임워크로 분석할 수 있습니다."
                : "It also provides a framework for analyzing what goes wrong when deals fail — and how deals survive crises, like the 1998 Korean sovereign bond issued in the eye of the IMF storm."}
            </p>
          </div>
        </motion.section>

        {/* ── Deal Timeline ─────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6단계 딜 타임라인" : "Six-Stage Deal Timeline"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            {ko
              ? "Mandate에서 결제까지 — 각 단계의 참여자, 산출물, 뱅커의 실전 인사이트"
              : "Mandate to settlement — participants, outputs, and practitioner insights at each stage"}
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="space-y-8"
            >
              {DEAL_STAGES.map((stage, i) => (
                <motion.div
                  key={stage.num}
                  variants={fadeUp(i * 0.07)}
                  className={`relative rounded-2xl border-2 ${stage.color} ${stage.bg} p-6`}
                >
                  {/* Step number badge */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm hidden sm:flex"
                      style={{ background: accent }}
                    >
                      {stage.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded sm:hidden" style={{ background: accent }}>
                          {stage.num}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                          {stage.label(ko)}
                        </h3>
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/80 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {stage.days(ko)}
                        </span>
                      </div>

                      {/* Who is involved */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {stage.who.map((w) => (
                          <span key={w} className="text-xs px-2 py-0.5 rounded-full bg-white/70 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {w}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {stage.desc(ko)}
                      </p>

                      {/* Outputs */}
                      <div className="mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                          {ko ? "산출물" : "Outputs"}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{stage.outputs(ko)}</span>
                      </div>

                      {/* Banker's note */}
                      <div
                        className="rounded-lg p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
                        style={{ borderLeft: "4px solid #f59e0b" }}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold text-xs mt-0.5 flex-shrink-0">
                            {ko ? "🔑 뱅커 노트" : "🔑 Banker's Note"}
                          </span>
                          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                            {stage.bankersNote(ko)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── Syndicate Structure ───────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "신디케이트 구조: 3개 역할과 수수료 위계" : "Syndicate Structure: Three Roles and Fee Hierarchy"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "하나의 채권 딜에 왜 여러 개의 IB가 참여하는가? 각 역할의 의무와 보상"
              : "Why do multiple banks participate in a single bond deal? Duties and compensation for each role"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "대규모 채권 발행은 한 IB의 세일즈 역량만으로 전 세계 투자자를 커버하기 어렵습니다. 신디케이트 구조는 이 한계를 극복하는 방법입니다 — 여러 IB가 지역별·투자자 유형별로 커버리지를 나눠 더 넓은 수요를 끌어들입니다. 동시에, 언더라이팅 리스크(채권을 투자자에게 팔지 못할 경우 뱅크가 직접 인수해야 하는 리스크)도 분산됩니다."
              : "Large bond issuances exceed what a single bank's sales force can distribute globally. The syndicate structure overcomes this — multiple banks divide coverage by region and investor type to access broader demand. Simultaneously, underwriting risk (the risk that if the deal fails, banks must purchase bonds themselves) is distributed across the group."}
          </p>

          <div className="space-y-4 mb-8">
            {ROLES.map((role, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-5 ${role.color}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">{role.role(ko)}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{role.who(ko)}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-900/40 px-3 py-1 rounded-full">
                    {role.fee(ko)}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{role.duties(ko)}</p>
              </div>
            ))}
          </div>

          {/* Fee allocation bar diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-5">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm">
              {ko ? "수수료 배분 구조 (개념적)" : "Fee Allocation Structure (Conceptual)"}
            </h3>
            <div className="space-y-3">
              {ROLES.map((role) => (
                <div key={role.pct} className="flex items-center gap-3">
                  <div className="w-28 flex-shrink-0 text-xs text-gray-600 dark:text-gray-400 text-right">
                    {role.role(ko).split("(")[0].trim()}
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${role.pctColor} flex items-center justify-end pr-2`}
                      style={{ width: `${role.pct}%` }}
                    >
                      <span className="text-xs font-bold text-white">{role.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              {ko
                ? "* 실제 배분은 딜·발행 규모·역할 수행도에 따라 크게 달라집니다. 위 수치는 개념적 예시입니다."
                : "* Actual allocation varies significantly by deal, size, and performance. Figures above are conceptual examples."}
            </p>
          </div>
        </motion.section>

        {/* ── Pulled Deal Case ──────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "딜이 취소될 때 — Pull의 논리와 대가" : "When Deals Get Pulled — The Logic and Cost"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {ko
              ? "IPT가 공표된 이후 딜이 취소되는 것을 'pulled deal'이라고 합니다. 이는 드물지 않습니다 — 시장 변동성이 높은 시기에는 분기당 수십 건의 딜이 취소됩니다. 그러나 취소의 비용은 단순한 '딜 실패'를 넘어섭니다."
              : "A 'pulled deal' occurs when a transaction is cancelled after IPT has been announced. This is not uncommon — in volatile periods, dozens of deals get pulled per quarter. But the cost goes far beyond a simple failed transaction."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-5">
              <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">
                {ko ? "딜 취소의 대가" : "Cost of Pulling a Deal"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                  {ko
                    ? "발행사 신뢰도 타격 — '이 발행사 채권은 팔기 어렵다'는 시장 신호"
                    : "Issuer credibility hit — market signal that 'this issuer's bonds are hard to sell'"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                  {ko
                    ? "다음 발행 시 더 많은 NIC 요구 — 투자자가 위험 프리미엄을 높임"
                    : "Higher NIC required next time — investors price in a risk premium"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                  {ko
                    ? "법무·준비 비용은 이미 발생 — 돌려받을 수 없음"
                    : "Legal and preparation costs already incurred — non-recoverable"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                  {ko
                    ? "리드 뱅커 평판 손상 — '왜 타이밍을 잘못 잡았나?'"
                    : "Lead banker reputation damage — 'why did you misjudge the timing?'"}
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-5">
              <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">
                {ko ? "취소 vs 재조정 — 뱅커의 판단 기준" : "Pull vs. Reprice — The Banker's Decision"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                  {ko
                    ? "커버리지 1x 미만 + 시장 악화 중 = 취소가 최선"
                    : "Coverage below 1x + deteriorating market = pull is the right call"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                  {ko
                    ? "커버리지 1.5–2x + 스프레드 문제 = NIC 추가 제공 후 재조정"
                    : "Coverage 1.5-2x + spread issue = add NIC and reprice"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                  {ko
                    ? "규모 축소 + 스프레드 확대 조합으로 '절반만 성공' 처리 가능"
                    : "Size reduction + spread widening can salvage a 'partial success'"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                  {ko
                    ? "발행사 신용 이벤트(등급 하향 발표 등) = 즉시 취소, 시장 회복 대기"
                    : "Issuer credit event (downgrade announcement) = immediate pull, await market recovery"}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">{ko ? "실전 시각: " : "Practitioner View: "}</strong>
              {ko
                ? "경험 많은 DCM 뱅커는 '딜을 취소하는 결단력'도 역량 중 하나입니다. 무리하게 진행한 딜이 2차 시장에서 폭락하면, 그 발행사는 다음 2–3년간 시장 접근이 어려워집니다. 단기적 수수료보다 장기적 관계가 중요하다는 원칙이 여기서도 적용됩니다."
                : "For experienced DCM bankers, 'the courage to pull a deal' is itself a competency. A deal forced through to completion that collapses in secondary trading can lock an issuer out of markets for 2–3 years. The principle that long-term relationships matter more than short-term fees applies here too."}
            </p>
          </div>
        </motion.section>

        {/* ── Korea 1998 Flashback ──────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "실전 적용: 1998년 한국 외평채 프로세스" : "Applied Case: Korea 1998 Sovereign Bond Process"}
          </h2>

          <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 p-6 mb-5">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 text-lg">
              {ko
                ? "IMF 구제금융 직후 — 신용이 없는 나라가 채권을 발행한 방법"
                : "Post-IMF Bailout — How a Country With Shattered Credit Issued Bonds"}
            </h3>

            <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">01</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">{ko ? "Mandate 단계 — IMF가 강요한 발행" : "Mandate Stage — IMF-Compelled Issuance"}</strong>
                  <p className="mt-1">
                    {ko
                      ? "1998년 1월, IMF 구제금융을 받은 한국은 국제 신뢰를 회복하고 외환을 추가 확보해야 했습니다. 기재부가 리드 뱅커를 선정했지만, 이것은 일반적인 Mandate pitch 경쟁이 아니었습니다 — 국가가 생존을 위해 발행을 '해야만 하는' 상황이었습니다."
                      : "In January 1998, Korea — fresh from receiving an IMF bailout — needed to restore international credibility and secure additional FX. The Ministry of Finance selected lead bankers, but this was no ordinary competitive pitch — the country had to issue to survive."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">02</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">{ko ? "로드쇼 — 위기 이후 신뢰 재구축" : "Roadshow — Rebuilding Credibility After Crisis"}</strong>
                  <p className="mt-1">
                    {ko
                      ? "로드쇼는 전통적 방식으로 진행됐지만 내용이 달랐습니다. 발행사(한국 정부)는 IMF 프로그램 이행 의지·재정개혁 계획·외환보유고 회복 전망을 중심으로 투자자를 설득했습니다. 투자자들이 묻는 질문도 달랐습니다: 'IMF 조건을 지킬 수 있는가?' '채무재조정 가능성은?'"
                      : "The roadshow followed traditional mechanics but different substance. The issuer (Korean government) focused on IMF program compliance, fiscal reform commitments, and FX reserve recovery projections. Investor questions were unusual: 'Can you comply with IMF conditions?' 'What's the probability of debt restructuring?'"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">03</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">{ko ? "북빌딩 — T+345bp IPT와 시장의 반응" : "Book-Building — T+345bp IPT and Market Response"}</strong>
                  <p className="mt-1">
                    {ko
                      ? "IPT는 'T+345bp area'로 공표되었습니다 — 미국 국채 대비 3.45%포인트 높은 금리였습니다. 평시 한국 외평채가 T+30–50bp 수준이었던 것과 비교하면, 시장이 요구하는 위험 프리미엄의 크기를 가늠할 수 있습니다. 그럼에도 오더가 들어왔고, 딜은 성사되었습니다."
                      : "IPT was announced at 'T+345bp area' — 3.45 percentage points over US Treasuries. Compared to Korea's typical spread of T+30-50bp in normal times, this illustrates the sheer scale of risk premium the market demanded. Yet orders came in, and the deal was completed."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">04</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">{ko ? "결과 — 신호의 의미" : "Outcome — What the Signal Meant"}</strong>
                  <p className="mt-1">
                    {ko
                      ? "$4억 달러 발행 성공. 금액 자체보다 중요한 것은 '한국이 국제 자본시장에 다시 접근할 수 있다'는 신호였습니다. 이 딜의 성공이 이후 한국의 외환위기 탈출과 신뢰 회복 프로세스에서 중요한 이정표가 되었습니다."
                      : "$400M issued successfully. More important than the dollar amount was the signal: 'Korea can access international capital markets again.' This deal's success became a critical milestone in Korea's path out of the FX crisis and restoration of sovereign credibility."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/market/korea-1998-external-bond"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: accent }}
          >
            {ko ? "→ 1998년 한국 외평채 딜 스토리 전체 보기" : "→ Read Full Korea 1998 Sovereign Bond Story"}
          </Link>
        </motion.section>


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />


        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-3">
            <FaqAccordion items={FAQS.map(f => ({ q: f.q(ko), a: f.a(ko) }))} />
          </div>
        </motion.section>

        {/* ── Related ──────────────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-5">
            {ko ? "연관 콘텐츠" : "Related Content"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/market-101/dcm-overview",
                label: (ko: boolean) => ko ? "DCM 개요 — 시리즈 시작" : "DCM Overview — Series Start",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/dcm-issuers",
                label: (ko: boolean) => ko ? "DCM Ch.1 — 발행사 스펙트럼" : "DCM Ch.1 — Issuer Spectrum",
                tag: (ko: boolean) => ko ? "관련" : "Related",
                tagColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
              },
              {
                href: "/market-101/dcm-investors",
                label: (ko: boolean) => ko ? "DCM Ch.2 — 투자자 생태계" : "DCM Ch.2 — Investor Ecosystem",
                tag: (ko: boolean) => ko ? "관련" : "Related",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market-101/dcm-pricing",
                label: (ko: boolean) => ko ? "DCM Ch.6 — 프라이싱" : "DCM Ch.6 — Pricing",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
              {
                href: "/market/korea-1998-external-bond",
                label: (ko: boolean) => ko ? "1998 한국 외평채 딜 스토리" : "Korea 1998 Sovereign Bond Story",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
              },
            ].map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/30 dark:hover:bg-teal-900/10 transition-all group"
              >
                <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${rel.tagColor}`}>
                  {rel.tag(ko)}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {rel.label(ko)}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>



        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />


        {/* ── References ─────────────────────────────────────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <motion.h2
            variants={fadeUp()}
            className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5"
          >
            {ko ? "참고 자료" : "References"}
          </motion.h2>
          <ol className="space-y-3">
            {SOURCES.map((ref) => (
              <motion.li
                key={ref.id}
                variants={fadeUp()}
                className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                  {ref.id}
                </span>
                <span>
                  <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="italic">{ref.title}</span>
                  )}
                  {". "}
                  <span className="text-gray-400 dark:text-gray-500">{ref.source}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Prev / Next ───────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "이전" : "Previous"}</span>
                {prev.title(ko)}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group text-right"
            >
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "다음" : "Next"}</span>
                {next.title(ko)}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}
