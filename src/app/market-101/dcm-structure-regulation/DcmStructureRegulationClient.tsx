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

const thisCh = 7;

// ── Regulatory Rules ──────────────────────────────────────────────────────────
const RULES = [
  {
    id: "cw",
    icon: "🧱",
    title: (ko: boolean) => ko
      ? "차이니즈 월 (Chinese Wall / Information Barrier)"
      : "Chinese Wall / Information Barrier",
    what: (ko: boolean) => ko
      ? "IB 내부에서 공개정보(Public Side)와 비공개정보(Private Side)를 분리하는 물리적·절차적 장벽"
      : "Physical and procedural barrier within a bank separating Public Side (public information) from Private Side (non-public information)",
    why: (ko: boolean) => ko
      ? "내부자거래(Insider Trading) 방지 — 비공개 정보를 이용한 증권 거래는 법적 금지"
      : "Prevents insider trading — trading on material non-public information (MNPI) is illegal",
    practicalExample: (ko: boolean) => ko
      ? "DCM 뱅커가 발행사의 미공개 실적 정보를 S&T(세일즈&트레이딩) 팀에 전달하는 것은 불법. S&T는 그 정보로 채권을 사전 매도할 수 없음."
      : "DCM banker cannot pass issuer's non-public earnings data to S&T (Sales & Trading) team. S&T cannot pre-sell bonds based on that information.",
    bankersNote: (ko: boolean) => ko
      ? "월을 넘을 때(Wall Cross)는 컴플라이언스 승인 후 서명, 이후 관련 증권 거래가 'restricted list'에 올라감"
      : "Crossing the wall requires compliance sign-off — related securities go on the 'restricted list' afterward",
    color: "border-slate-300 bg-slate-50 dark:bg-slate-900/20",
    isAlert: false,
  },
  {
    id: "mnpi",
    icon: "🔒",
    title: (ko: boolean) => ko
      ? "MNPI (Material Non-Public Information)"
      : "MNPI (Material Non-Public Information)",
    what: (ko: boolean) => ko
      ? "공개되지 않은 중요 정보 — 합리적 투자자가 알면 투자 결정에 영향을 줄 정보"
      : "Non-public information that a reasonable investor would consider important for an investment decision",
    why: (ko: boolean) => ko
      ? "MNPI를 이용한 거래는 내부자거래로 형사처벌 대상 (미국 SEC Rule 10b-5)"
      : "Trading on MNPI is insider trading — criminal offense under SEC Rule 10b-5 in the US",
    practicalExample: (ko: boolean) => ko
      ? "발행사 CFO가 뱅커에게 미공개 분기 실적을 알려줌 → 뱅커는 즉시 해당 증권의 거래를 중단하고 컴플라이언스 보고"
      : "CFO shares non-public quarterly results with banker → banker immediately ceases trading in related securities and files compliance report",
    bankersNote: (ko: boolean) => ko
      ? "뱅커가 로드쇼 중 투자자에게 공개할 수 없는 정보가 있으면 '클린-업(clean-up)' 없이 딜 자체를 지연해야 할 수 있음"
      : "If bankers have MNPI during roadshow, the deal may need to be delayed until a 'clean-up' can occur",
    color: "border-red-300 bg-red-50 dark:bg-red-900/20",
    isAlert: true,
  },
  {
    id: "syndicate",
    icon: "🤝",
    title: (ko: boolean) => ko
      ? "신디케이트 구조 (Syndicate Structure)"
      : "Syndicate Structure",
    what: (ko: boolean) => ko
      ? "복수의 IB가 하나의 채권 발행을 공동으로 인수(underwriting)하고 배분하는 구조"
      : "Multiple banks jointly underwriting and distributing a single bond issuance",
    why: (ko: boolean) => ko
      ? "위험 분산 + 투자자 접근 극대화 — 한 IB의 한계를 넘어 글로벌 투자자 베이스 확보"
      : "Risk distribution + maximum investor reach — overcomes single bank's limitations for global distribution",
    practicalExample: (ko: boolean) => ko
      ? "GC 1개 + Book Runner 3개 + Co-Manager 5개로 구성된 10개 IB 신디케이트가 $30억 USD 유로본드 발행을 공동 실행"
      : "10-bank syndicate (1 GC + 3 BRs + 5 CMs) jointly executes a $3B USD Eurobond",
    bankersNote: (ko: boolean) => ko
      ? "신디케이트 규모가 클수록 투자자 접근이 넓어지지만 수수료도 분산됨 — GC는 항상 비용-편익을 발행사에 설명"
      : "Larger syndicate = wider investor reach but diluted fees — GC always explains cost-benefit to the issuer",
    color: "border-blue-300 bg-blue-50 dark:bg-blue-900/20",
    isAlert: false,
  },
  {
    id: "docs",
    icon: "📄",
    title: (ko: boolean) => ko ? "문서화 (Documentation)" : "Documentation",
    what: (ko: boolean) => ko
      ? "채권 발행의 법적 기반: Prospectus/Offering Circular, Indenture/Trust Deed, Subscription Agreement, Legal Opinions"
      : "Legal foundation of bond issuance: Prospectus/Offering Circular, Indenture/Trust Deed, Subscription Agreement, Legal Opinions",
    why: (ko: boolean) => ko
      ? "투자자 보호·발행사 의무 규정·분쟁 해결 기준 — 법적 강제력의 근거"
      : "Investor protection, issuer obligations, dispute resolution — the basis of legal enforceability",
    practicalExample: (ko: boolean) => ko
      ? "IG Eurobond Prospectus는 100–200페이지, HY Offering Memorandum은 300–500페이지. 법무팀이 4–8주에 걸쳐 작성·검토"
      : "IG Eurobond Prospectus is 100–200 pages; HY Offering Memorandum is 300–500 pages. Legal teams spend 4–8 weeks drafting and reviewing",
    bankersNote: (ko: boolean) => ko
      ? "코버넌트(재무약정) 조항 하나가 수십억원의 이자비용을 좌우 — LevFin 뱅커가 가장 신경 쓰는 부분"
      : "A single covenant clause can determine billions in interest cost — LevFin bankers scrutinize every word",
    color: "border-violet-300 bg-violet-50 dark:bg-violet-900/20",
    isAlert: false,
  },
  {
    id: "reg_s",
    icon: "🌐",
    title: (ko: boolean) => ko
      ? "144A / Reg S — 미국 투자자 규제"
      : "144A / Reg S — US Investor Regulation",
    what: (ko: boolean) => ko
      ? "비미국 발행사가 미국 투자자를 포함하는 방법: Rule 144A(QIB에게만 판매)와 Regulation S(미국 외 판매)"
      : "How non-US issuers access US investors: Rule 144A (sell to QIBs only) and Reg S (sell outside the US)",
    why: (ko: boolean) => ko
      ? "미국 SEC 등록 없이 미국 기관투자자(QIB: Qualified Institutional Buyer)에게 채권을 판매하기 위한 규제 면제"
      : "Regulatory exemption to sell bonds to US QIBs without full SEC registration",
    practicalExample: (ko: boolean) => ko
      ? "'144A/Reg S' 딜: 미국 QIB와 비미국 투자자를 동시에 커버하는 가장 일반적인 국제채 구조"
      : "'144A/Reg S' deal: the most common international bond structure, simultaneously covering US QIBs and non-US investors",
    bankersNote: (ko: boolean) => ko
      ? "144A 이후 SEC 등록(Exchange Offer)으로 유동성 개선 가능 — HY 딜에서 자주 사용"
      : "Post-144A SEC registration (Exchange Offer) can improve liquidity — common in HY deals",
    color: "border-green-300 bg-green-50 dark:bg-green-900/20",
    isAlert: false,
  },
];

// ── Covenant types ────────────────────────────────────────────────────────────
const COVENANT_TYPES = [
  {
    type: (ko: boolean) => ko ? "재무 코버넌트 (Financial Covenant)" : "Financial Covenant",
    examples: (ko: boolean) => ko
      ? "Net Debt/EBITDA ≤ 4.5x, EBITDA/Interest ≥ 2.5x"
      : "Net Debt/EBITDA ≤ 4.5x, EBITDA/Interest ≥ 2.5x",
    trigger: (ko: boolean) => ko
      ? "위반 시 기한이익 상실(Acceleration) — 전액 즉시 상환 요구 가능"
      : "Breach → Acceleration — full immediate repayment can be demanded",
    common: (ko: boolean) => ko
      ? "HY 대출(TLB)에서 주로 사용, IG 채권에는 드묾"
      : "Common in HY loans (TLB), rare in IG bonds",
    color: "border-orange-300 bg-orange-50 dark:bg-orange-900/20",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    type: (ko: boolean) => ko ? "부채 코버넌트 (Incurrence Covenant)" : "Incurrence Covenant",
    examples: (ko: boolean) => ko
      ? "추가 부채 제한, 배당 제한, 자산 매각 제한"
      : "Limitations on additional debt, dividends, asset disposals",
    trigger: (ko: boolean) => ko
      ? "새로운 행동(부채 추가·배당)을 하기 위한 조건 — 조건 불충족 시 행동 불가"
      : "Conditions for taking new actions (adding debt, paying dividend) — if unmet, action prohibited",
    common: (ko: boolean) => ko
      ? "HY 채권 표준 코버넌트"
      : "Standard HY bond covenants",
    color: "border-red-300 bg-red-50 dark:bg-red-900/20",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    type: (ko: boolean) => ko ? "Cov-Lite (코버넌트 없음 또는 극도로 느슨)" : "Cov-Lite (Covenant-Lite)",
    examples: (ko: boolean) => ko
      ? "재무 코버넌트 없음 또는 매우 느슨 — 2015년 이후 레버리지드론의 표준화"
      : "No or very loose financial covenants — standard for leveraged loans since ~2015",
    trigger: (ko: boolean) => ko
      ? "사실상 트리거 없음 — 투자자 보호 약화, 수익률로 보상"
      : "Virtually no triggers — weaker investor protection, compensated via yield",
    common: (ko: boolean) => ko
      ? "PE LBO 레버리지드론에서 보편화 — 투자자 협상력 약화의 결과"
      : "Ubiquitous in PE LBO leveraged loans — result of weakened investor bargaining power",
    color: "border-slate-300 bg-slate-50 dark:bg-slate-900/20",
    badge: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "차이니즈 월은 실제로 얼마나 엄격하게 지켜지나요?"
      : "How strictly is the Chinese Wall actually enforced?",
    a: (ko: boolean) => ko
      ? "규제적으로는 매우 엄격합니다. 미국 SEC, 영국 FCA, EU MAR(Market Abuse Regulation) 모두 내부자거래에 대해 형사처벌(개인 징역·법인 벌금)을 부과합니다. IB들은 이메일 모니터링·접근권한 분리·물리적 공간 분리·컴플라이언스 교육을 의무화합니다. 실제 위반 사례도 있지만 적발 시 경력 종료·구금이 기다리므로 대부분의 뱅커는 철저히 준수합니다."
      : "Extremely strict from a regulatory perspective. SEC (US), FCA (UK), and EU MAR (Market Abuse Regulation) all impose criminal penalties (individual imprisonment, corporate fines) for insider trading. Banks mandate email monitoring, access segregation, physical separation, and mandatory compliance training. Real violations occur, but detection means career end and imprisonment — the vast majority of bankers comply rigorously.",
  },
  {
    q: (ko: boolean) => ko
      ? "로드쇼에서 발행사가 말할 수 있는 것과 없는 것의 경계는?"
      : "What can and cannot issuers say in roadshows?",
    a: (ko: boolean) => ko
      ? "말할 수 있는 것: 공개된 재무정보(최근 분기 실적), 사업 전략, 시장 전망, 자금조달 목적. 말할 수 없는 것: 미공개 M&A 계획, 미발표 실적 추정, 내부 신용등급 전망, 규제 조사 진행 상황. 뱅커는 로드쇼 전 발행사와 '클린 팀 회의'를 열어 MNPI를 공개하거나 발언 범위를 조율합니다. 발언 오류 시 발행사와 뱅커 모두 법적 책임입니다."
      : "Permitted: publicly disclosed financial information (recent quarters), business strategy, market outlook, use of proceeds. Not permitted: non-public M&A plans, undisclosed earnings estimates, internal credit rating outlooks, ongoing regulatory investigations. Bankers hold 'clean team meetings' pre-roadshow to disclose MNPI or calibrate what can be said. Disclosure errors create legal liability for both issuer and banker.",
  },
  {
    q: (ko: boolean) => ko
      ? "Cov-Lite 채권은 투자자에게 위험한가요?"
      : "Are cov-lite bonds dangerous for investors?",
    a: (ko: boolean) => ko
      ? "재무 코버넌트 부재로 발행사의 재무 악화를 조기에 파악할 신호가 약해집니다. 발행사가 부도 직전까지 제약 없이 부채를 추가하거나 자산을 매각할 수 있습니다. 그러나 시장이 Cov-Lite를 수용하는 이유: 공급 부족으로 투자자 협상력이 낮아졌고, Cov-Lite 채권의 스프레드가 더 높습니다. 투자자는 코버넌트 대신 가격으로 보상받습니다. 경기침체기에는 Cov-Lite 대출의 회수율이 낮아진다는 연구 결과가 있습니다."
      : "Without financial covenants, investors lose early warning signals of issuer deterioration. Issuers can add debt or sell assets freely until near-default. However, the market accepts cov-lite because investor bargaining power has weakened due to supply scarcity, and cov-lite bonds carry wider spreads. Investors are compensated in price rather than protection. Research shows cov-lite loans have lower recovery rates in recessions.",
  },
  {
    q: (ko: boolean) => ko
      ? "채권 기한이익 상실(Acceleration)이 실제로 발동되면 어떻게 되나요?"
      : "What actually happens when bond acceleration is triggered?",
    a: (ko: boolean) => ko
      ? "코버넌트 위반 → 채권 보유자(또는 수탁인)가 기한이익 상실을 통보 → 발행사는 즉시 원금 전액 상환 의무 발생. 현금이 없으면 → 파산 신청(Chapter 11/법정관리) 또는 채권자와 구조조정 협상. 실제로는 위반 사전에 발행사가 채권자와 'Waiver(면제)' 또는 'Amendment(조건 변경)'를 협상합니다. 이 협상이 DCM/재무조정 뱅커의 중요 업무 중 하나입니다."
      : "Covenant breach → bondholders (or trustee) issue acceleration notice → issuer must repay full principal immediately. If cash unavailable → bankruptcy filing (Chapter 11 / court receivership) or restructuring negotiation with creditors. In practice, issuers negotiate a 'Waiver' or 'Amendment' with bondholders before breach. This negotiation is a key part of DCM/debt advisory banker work.",
  },
  {
    q: (ko: boolean) => ko
      ? "144A와 Reg S를 함께 쓰는 이유는 무엇인가요?"
      : "Why combine 144A and Reg S in the same deal?",
    a: (ko: boolean) => ko
      ? "미국 투자자(QIB)와 비미국 투자자를 동시에 커버하기 위해서입니다. 144A만 쓰면 미국 QIB만 접근 가능, Reg S만 쓰면 미국 투자자 제외. 두 트랜치를 동시에 발행하면 글로벌 투자자 풀 전체가 참여 가능합니다. 실무상 동일한 채권 조건으로 두 ISIN을 발행하고(144A ISIN + Reg S ISIN) 40일 후 두 채권이 통합(fungible)됩니다. 이것이 '144A/Reg S' 딜의 표준 구조입니다."
      : "To cover both US QIBs and non-US investors simultaneously. 144A alone only reaches US QIBs; Reg S alone excludes US investors. Dual tranches allow the full global investor pool. In practice, two ISINs are issued (144A ISIN + Reg S ISIN) with identical terms, merging into a fungible security after 40 days. This is the standard structure of '144A/Reg S' deals.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "U.S. Securities and Exchange Commission (SEC)", title: "Securities Exchange Act Section 10(b) and Rule 10b-5 — Prohibition of Fraud and Misrepresentation", url: "https://www.sec.gov/rules/final/34-42728.htm", source: "SEC, 2023" },
  { id: 2, author: "European Securities and Markets Authority (ESMA)", title: "Market Abuse Regulation (MAR) — Guidelines on MNPI and Insider Lists", url: "https://www.esma.europa.eu/rules-databases-library/esma-library/guidelines-mar", source: "ESMA, 2024" },
  { id: 3, author: "ICMA", title: "ICMA Syndicate Practice Guidance — Book-Building and Allocation", url: "https://www.icmagroup.org/resources/icma-publications/icma-primary-market-handbook/", source: "ICMA, 2024" },
  { id: 4, author: "U.S. Securities and Exchange Commission (SEC)", title: "Rule 144A and Regulation S — Conditions for Exemption from Registration", url: "https://www.sec.gov/rules/final/33-6863.pdf", source: "SEC, 2024" },
  { id: 5, author: "Loan Syndications and Trading Association (LSTA)", title: "Covenant-Lite Loan Market Study — Structural Trends and Investor Impact", url: "https://www.lsta.org/content/research-resources/", source: "LSTA, 2023" },
];
export default function DcmStructureRegulationClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-structure-regulation`;

  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DCM Ch.7 — 구조와 제도: 차이니즈 월·MNPI·신디케이트·문서화",
    description:
      "DCM 운영의 제도적 인프라 완전 해부: 차이니즈 월·MNPI 규제·신디케이트 구조·프로스펙터스 문서화. 뱅커가 왜 특정 행동을 금지당하고, 어떤 법적 틀 안에서 딜을 실행하는지.",
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
            <span className="text-gray-600 dark:text-gray-400">Ch.7</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "DCM 시리즈 · Chapter 7 (최종)" : "DCM Series · Chapter 7 (Final)"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 14분 읽기" : "⏱ 14 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-3">
            {ko
              ? "구조와 제도: 차이니즈 월·MNPI·신디케이트·문서화"
              : "Structure & Regulation: Chinese Wall, MNPI, Syndicate, Documentation"}
          </h1>

          <p className="text-sm font-medium mb-4" style={{ color: accent }}>
            {ko
              ? "이 챕터에서 배우는 것: DCM의 보이지 않는 규칙들"
              : "What you'll learn: The invisible rules that govern DCM"}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "뱅커가 왜 특정 정보를 S&T에게 전달하지 못하는가, 왜 딜 문서가 수백 페이지인가, 왜 신디케이트가 10개 은행으로 구성되는가 — 이 모든 것에는 법적·제도적 이유가 있습니다. DCM의 실질을 이해하려면 거래 이면의 규제 인프라를 알아야 합니다."
              : "Why can't bankers share certain information with S&T? Why do deal documents run hundreds of pages? Why does a syndicate need ten banks? Every one of these has a legal or institutional reason. To understand DCM in depth, you must understand the regulatory infrastructure behind every transaction."}
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
              stat: ko ? "5가지" : "5",
              label: (ko: boolean) => ko ? "핵심 제도 프레임워크" : "Core Regulatory Frameworks",
              sub: (ko: boolean) => ko ? "차이니즈 월·MNPI·신디케이트·문서화·144A/Reg S" : "Chinese Wall, MNPI, Syndicate, Docs, 144A/Reg S",
            },
            {
              stat: "MNPI",
              label: (ko: boolean) => ko ? "위반 시 형사처벌" : "Criminal Offense if Violated",
              sub: (ko: boolean) => ko ? "SEC Rule 10b-5·FCA·EU MAR 적용" : "Under SEC Rule 10b-5, FCA, EU MAR",
            },
            {
              stat: ko ? "300–500p" : "300–500pp",
              label: (ko: boolean) => ko ? "HY Offering Memorandum" : "HY Offering Memorandum",
              sub: (ko: boolean) => ko ? "법무팀 4–8주 작업의 결과물" : "Result of 4–8 weeks of legal team work",
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

        {/* ── Why This Matters ──────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "왜 규제와 구조를 알아야 하는가" : "Why Rules and Structure Matter"}
          </h2>

          <div
            className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 mb-4"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
              {ko
                ? "규제와 구조는 DCM의 인프라입니다. 시야에 보이지 않지만 모든 딜이 그 위에서 작동합니다. 전기 그리드처럼 — 평소에는 의식하지 못하지만 없으면 아무것도 작동하지 않습니다."
                : "Regulation and structure are DCM's infrastructure. Invisible in the day-to-day, but every deal runs on top of them. Like an electrical grid — you don't think about it normally, but without it nothing works."}
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
              {ko
                ? "주니어 뱅커가 처음 IB에 입사했을 때 가장 충격 받는 것 중 하나가 '정보 장벽'의 실재입니다. 같은 회사 안에서도 어떤 팀과는 특정 주제를 대화할 수 없습니다. 이메일에서 특정 단어가 걸리면 컴플라이언스 시스템이 경고를 보냅니다. 이것이 차이니즈 월이 실제로 작동하는 방식입니다."
                : "One of the first shocks for new IB analysts is the reality of information barriers. Even within the same firm, certain topics cannot be discussed with certain teams. Specific words in emails trigger compliance system alerts. This is how the Chinese Wall actually operates."}
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {ko
                ? "코버넌트 협상이 수일간 이어지는 이유, 법무 비용이 수억원에 달하는 이유, 발행사가 신디케이트 구성에 신중한 이유 — 이 챕터를 읽고 나면 모두 납득이 됩니다."
                : "Why covenant negotiations stretch for days, why legal costs run into hundreds of millions of won, why issuers choose their syndicate so carefully — after this chapter, all of it will make sense."}
            </p>
          </div>
        </motion.section>

        {/* ── Regulatory Framework Cards ────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5대 제도 프레임워크" : "Five Core Regulatory Frameworks"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "각 제도의 정의·목적·실전 예시·뱅커 노트"
              : "Definition, purpose, practical example, and banker note for each framework"}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="space-y-6"
          >
            {RULES.map((rule, i) => (
              <motion.div
                key={rule.id}
                variants={fadeUp(i * 0.07)}
                className={`rounded-2xl border-2 p-6 ${rule.color} ${rule.isAlert ? "ring-2 ring-red-300 dark:ring-red-700" : ""}`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl flex-shrink-0">{rule.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{rule.title(ko)}</h3>
                      {rule.isAlert && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 uppercase tracking-wider">
                          {ko ? "형사처벌" : "Criminal"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* What */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                    {ko ? "정의" : "What"}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{rule.what(ko)}</span>
                </div>

                {/* Why */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                    {ko ? "목적" : "Why"}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{rule.why(ko)}</span>
                </div>

                {/* Practical example */}
                <div className="mb-4 p-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                    {ko ? "실전 예시" : "Practical Example"}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{rule.practicalExample(ko)}</p>
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
                      {rule.bankersNote(ko)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Chinese Wall In Practice ──────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "차이니즈 월: 딜 당일 하루의 모습" : "Chinese Wall: A Day in the Life of a Deal"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "추상적인 '정보 장벽'이 실제 딜 과정에서 어떻게 작동하는지, DCM 뱅커의 하루를 따라가며 설명합니다."
              : "Here's how the abstract 'information barrier' actually operates across a deal day, following a DCM banker step by step."}
          </p>

          <div className="relative">
            <div className="hidden sm:block absolute left-5 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-4">
              {[
                {
                  time: ko ? "오전 8시" : "8am",
                  event: (ko: boolean) => ko
                    ? "발행사 CFO에게 미공개 분기 실적 수신"
                    : "Receive non-public quarterly results from issuer CFO",
                  action: (ko: boolean) => ko
                    ? "즉시 컴플라이언스 부서에 MNPI 수신 보고. 발행사 종목이 'Restricted List'에 등재. 개인 포트폴리오에서도 해당 종목 즉시 거래 금지."
                    : "Immediately report MNPI receipt to compliance. Issuer's security added to Restricted List. Personal portfolio trading in the security immediately prohibited.",
                  badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
                  color: "border-red-200",
                },
                {
                  time: ko ? "오전 10시" : "10am",
                  event: (ko: boolean) => ko
                    ? "S&T 세일즈 팀에서 '이 발행사 채권 코멘트 해줄 수 있어?' 연락"
                    : "S&T Sales desk asks: 'Can you comment on this issuer's bonds?'",
                  action: (ko: boolean) => ko
                    ? "'이 발행사는 현재 리스트에 있어서 코멘트 불가.' — S&T 동료에게 이유를 설명하지 않고 단호하게 거절. 이유를 설명하는 것 자체가 정보 유출."
                    : "'This issuer is currently on the list — can't comment.' — Firm refusal without explaining why. Explaining the reason would itself constitute information leakage.",
                  badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                  color: "border-amber-200",
                },
                {
                  time: ko ? "오후 2시" : "2pm",
                  event: (ko: boolean) => ko
                    ? "신디케이트 팀과 Wall Cross 필요성 논의"
                    : "Discuss need to wall-cross Syndicate team",
                  action: (ko: boolean) => ko
                    ? "컴플라이언스에 Wall Cross 승인 요청. 신디케이트 담당자가 Wall Cross 동의서에 서명. 이후 신디케이트도 해당 발행사 거래 제한."
                    : "Request Wall Cross approval from compliance. Syndicate counterpart signs Wall Cross consent form. Afterward, Syndicate also restricted from trading the issuer.",
                  badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                  color: "border-blue-200",
                },
                {
                  time: ko ? "딜 이후" : "Post-Deal",
                  event: (ko: boolean) => ko
                    ? "발행 완료 및 공시 — 정보 공개"
                    : "Deal closes — information becomes public",
                  action: (ko: boolean) => ko
                    ? "Restricted List에서 발행사 종목 제거. 실적 정보가 공시되었으므로 더 이상 MNPI가 아님. 관련 거래 제한 해제."
                    : "Issuer removed from Restricted List. The earnings information is now publicly disclosed — no longer MNPI. Trading restrictions lifted.",
                  badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
                  color: "border-green-200",
                },
              ].map((step, i) => (
                <div key={i} className={`relative flex items-start gap-4 rounded-xl border-2 ${step.color} bg-white dark:bg-gray-900 p-5`}>
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold hidden sm:flex"
                    style={{ background: accent }}
                  >
                    {step.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded sm:hidden ${step.badge}`}>
                        {step.time}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{step.event(ko)}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.action(ko)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Covenant Deep Dive ────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "코버넌트 심층 분석" : "Covenant Deep Dive"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
            {ko
              ? "채권 계약서의 핵심 조항 — 3가지 유형과 EBITDA 정의 전쟁"
              : "The critical clauses in bond indentures — three types and the EBITDA definition battle"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "코버넌트(Covenant, 재무약정)는 발행사가 채권 존속 기간 동안 지켜야 할 약속들입니다. IG 채권에는 코버넌트가 거의 없지만(Covenant-Light), HY 채권과 LBO 레버리지드론에는 두껍고 복잡한 코버넌트 패키지가 붙습니다. 뱅커의 역할은 발행사에게 최대한 유리한(느슨한) 코버넌트를 협상하고, 투자자에게는 적절한 보호 장치를 보장하는 것입니다."
              : "Covenants are commitments the issuer must honor throughout the bond's life. IG bonds have minimal covenants (covenant-light), but HY bonds and LBO leveraged loans carry thick, complex covenant packages. The banker's job is to negotiate the most favorable (loosest) covenants possible for the issuer while ensuring investors receive adequate protection."}
          </p>

          <div className="space-y-4 mb-8">
            {COVENANT_TYPES.map((cv, i) => (
              <div key={i} className={`rounded-xl border-2 p-5 ${cv.color}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">{cv.type(ko)}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cv.badge}`}>
                    {cv.common(ko)}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 block mb-1">
                      {ko ? "예시 조항" : "Example Terms"}
                    </span>
                    <code className="text-gray-700 dark:text-gray-300 font-mono">{cv.examples(ko)}</code>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 block mb-1">
                      {ko ? "위반 시 결과" : "Trigger Consequence"}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">{cv.trigger(ko)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EBITDA definition battle */}
          <div
            className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "EBITDA 정의 전쟁 — 코버넌트 협상의 핵심" : "The EBITDA Definition Battle — Core of Covenant Negotiation"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "Net Debt/EBITDA ≤ 4.5x 같은 재무 코버넌트는 단순해 보이지만, 'EBITDA를 어떻게 정의하느냐'에 따라 같은 회사라도 코버넌트 헤드룸이 크게 달라집니다."
                : "A covenant like Net Debt/EBITDA ≤ 4.5x looks simple, but 'how you define EBITDA' dramatically changes the headroom available for the same company."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4">
                <h4 className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">
                  {ko ? "투자자가 원하는 EBITDA (좁은 정의)" : "Investor's Preferred EBITDA (Narrow)"}
                </h4>
                <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed">
                  {ko
                    ? "영업이익 + D&A만. 일회성 항목·구조조정 비용·'Synergy' 추정 포함 불가. 코버넌트 헤드룸이 좁아져 발행사를 견제."
                    : "Operating profit + D&A only. No one-time items, restructuring charges, or 'synergy' estimates. Tight headroom keeps issuer in check."}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">
                  {ko ? "발행사가 원하는 EBITDA (넓은 정의, 'Adjusted')" : "Issuer's Preferred EBITDA (Wide, 'Adjusted')"}
                </h4>
                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                  {ko
                    ? "기본 EBITDA + 일회성 비용 제거 + 미실현 시너지 추가 + 비현금 항목 조정. 코버넌트 헤드룸이 넓어져 경영 유연성 확보."
                    : "Base EBITDA + remove one-time charges + add unrealized synergies + non-cash adjustments. Wider headroom = more management flexibility."}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              {ko
                ? "실제 LBO 딜에서 'Adjusted EBITDA'와 '실제 현금창출 EBITDA'의 차이가 20–30%에 달하는 경우가 있습니다. 이 차이가 LevFin 뱅커가 며칠 밤을 새며 협상하는 핵심 쟁점입니다."
                : "In real LBO deals, 'Adjusted EBITDA' and 'actual cash-generating EBITDA' can diverge by 20-30%. This gap is the central battleground where LevFin bankers spend sleepless nights negotiating."}
            </p>
          </div>
        </motion.section>

        {/* ── Documentation Map ─────────────────────────────────────────────── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "채권 발행 4대 법적 문서" : "Four Key Legal Documents in Bond Issuance"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "채권 발행은 하나의 계약이 아니라 복수의 법적 문서가 결합된 법적 인프라 위에서 이루어집니다. 각 문서가 어떤 역할을 하는지 알면, 법무 비용이 왜 수억원에 달하고 딜 준비에 4–8주가 소요되는지 이해할 수 있습니다."
              : "Bond issuance doesn't rest on a single contract — it's built on a stack of multiple legal documents. Understanding what each document does explains why legal costs run into hundreds of millions of won and why deal preparation takes 4–8 weeks."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                doc: "Prospectus / Offering Circular",
                pages: ko ? "100–200p (IG) / 300–500p (HY)" : "100–200pp (IG) / 300–500pp (HY)",
                role: (ko: boolean) => ko
                  ? "투자자에게 공개하는 발행사 전체 정보: 재무제표·사업 설명·리스크 요인·발행 조건. '투자 결정에 필요한 모든 것'을 담은 문서."
                  : "Full disclosure to investors: financial statements, business description, risk factors, terms. Contains 'everything needed to make an investment decision.'",
                who: (ko: boolean) => ko ? "발행사 + 법무법인" : "Issuer + Law firm",
                color: "border-teal-200 bg-teal-50 dark:bg-teal-900/20",
              },
              {
                doc: "Indenture / Trust Deed",
                pages: ko ? "100–300p" : "100–300pp",
                role: (ko: boolean) => ko
                  ? "채권의 법적 조건을 상세히 규정하는 핵심 계약. 코버넌트·상환 조건·이벤트 오브 디폴트·수탁인 역할이 모두 여기 있음. '채권의 헌법'이라 불림."
                  : "The core contract defining all legal terms of the bonds. Covenants, repayment conditions, events of default, and trustee role all live here. Called 'the bond's constitution.'",
                who: (ko: boolean) => ko ? "발행사 + 수탁은행 + 법무법인" : "Issuer + Trustee bank + Law firm",
                color: "border-blue-200 bg-blue-50 dark:bg-blue-900/20",
              },
              {
                doc: "Subscription Agreement",
                pages: ko ? "30–80p" : "30–80pp",
                role: (ko: boolean) => ko
                  ? "발행사와 언더라이터(IB) 사이의 인수 계약. 각 Book Runner가 얼마를 인수하는지, 수수료 구조, 언더라이팅 의무, 면제 사유가 명시됨."
                  : "The underwriting agreement between the issuer and underwriters (banks). Specifies how much each Book Runner underwrites, fee structure, underwriting obligations, and termination conditions.",
                who: (ko: boolean) => ko ? "발행사 + 리드 뱅커들" : "Issuer + Lead bankers",
                color: "border-violet-200 bg-violet-50 dark:bg-violet-900/20",
              },
              {
                doc: "Legal Opinion",
                pages: ko ? "10–30p" : "10–30pp",
                role: (ko: boolean) => ko
                  ? "독립 법무법인이 발행의 법적 유효성을 확인하는 의견서. '이 채권은 발행국과 준거법 관할에서 합법적으로 유효하다'는 확인. 투자자 보호의 최후 방어선."
                  : "An independent law firm's opinion confirming the legal validity of the issuance. Confirms 'these bonds are legally valid under the issuer's jurisdiction and governing law.' The last line of investor protection.",
                who: (ko: boolean) => ko ? "독립 법무법인" : "Independent law firm",
                color: "border-green-200 bg-green-50 dark:bg-green-900/20",
              },
            ].map((doc, i) => (
              <div key={i} className={`rounded-xl border-2 p-5 ${doc.color}`}>
                <h3 className="font-bold text-gray-900 dark:text-gray-50 mb-1">{doc.doc}</h3>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-3">{doc.pages}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{doc.role(ko)}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">
                    {ko ? "작성 주체" : "Authors"}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{doc.who(ko)}</span>
                </div>
              </div>
            ))}
          </div>
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

        {/* ── Related + Series End ─────────────────────────────────────────── */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              {
                href: "/market-101/dcm-overview",
                label: (ko: boolean) => ko ? "DCM 개요 — 시리즈 시작" : "DCM Overview — Series Start",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/dcm-pricing",
                label: (ko: boolean) => ko ? "DCM Ch.6 — 프라이싱" : "DCM Ch.6 — Pricing",
                tag: (ko: boolean) => ko ? "이전 챕터" : "Prev Chapter",
                tagColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
              },
              {
                href: "/market-101/dcm-deal-process",
                label: (ko: boolean) => ko ? "DCM Ch.5 — 딜 프로세스" : "DCM Ch.5 — Deal Process",
                tag: (ko: boolean) => ko ? "관련" : "Related",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market/credit-suisse-at1",
                label: (ko: boolean) => ko ? "Credit Suisse AT1 — 규제 구조와 PONV" : "Credit Suisse AT1 — Regulation & PONV",
                tag: (ko: boolean) => ko ? "딜 스토리" : "Deal Story",
                tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
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

          {/* Series completion box */}
          <div
            className="rounded-2xl p-6 text-center border-2"
            style={{ borderColor: accent, background: accentLight }}
          >
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: accent }}>
              {ko ? "DCM 시리즈 완주!" : "DCM Series Complete!"}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 max-w-lg mx-auto">
              {ko
                ? "Ch.0 생태계 전체 지도부터 Ch.7 구조와 제도까지 — DCM의 전체 그림을 파악했습니다. 이제 실제 딜 스토리에서 이 지식을 적용해 보세요."
                : "From Ch.0 ecosystem overview to Ch.7 structure and regulation — you've mapped the entire DCM landscape. Now apply this knowledge to real deal stories."}
            </p>
            <Link
              href="/market-101/dcm-overview"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: accent }}
            >
              {ko ? "← 시리즈 처음으로 돌아가기" : "← Back to Series Start"}
            </Link>
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
