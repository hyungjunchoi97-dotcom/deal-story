"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

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
const accent = "#eab308"; // yellow-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const LEVFIN_SERIES = [
  { slug: "levfin-ecosystem",      ch: 0, title: (ko: boolean) => ko ? "LevFin 개요"          : "LevFin Overview"      },
  { slug: "levfin-hy-vs-loans",    ch: 1, title: (ko: boolean) => ko ? "Ch.1 HY채권 vs 론"    : "Ch.1 HY vs Loans"     },
  { slug: "levfin-credit-metrics", ch: 2, title: (ko: boolean) => ko ? "Ch.2 크레딧 메트릭"    : "Ch.2 Credit Metrics"  },
  { slug: "levfin-covenants",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 코버넌트"         : "Ch.3 Covenants"       },
  { slug: "levfin-process",        ch: 4, title: (ko: boolean) => ko ? "Ch.4 딜 프로세스"      : "Ch.4 Deal Process"    },
  { slug: "levfin-pricing",        ch: 5, title: (ko: boolean) => ko ? "Ch.5 프라이싱 심화"    : "Ch.5 Advanced Pricing"},
  { slug: "levfin-distressed",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정" : "Ch.6 Distressed"      },
  { slug: "levfin-cases",          ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"      : "Ch.7 Case Studies"    },
];
const thisCh = 3;

// ── 5 Covenant Types ──────────────────────────────────────────────────────────
const COVENANT_TYPES = [
  {
    name:    (ko: boolean) => ko ? "부채 발행 제한" : "Limitation on Indebtedness",
    nameEn:  "Limitation on Indebtedness",
    icon:    "📊",
    description: (ko: boolean) => ko
      ? "FCCR 2.0× 테스트를 통과해야만 추가 부채를 발행할 수 있도록 제한합니다. 인덴처의 핵심 조항."
      : "Restricts additional debt issuance to issuers that satisfy the FCCR ≥ 2.0× test. The centerpiece covenant of any HY indenture.",
    purpose: (ko: boolean) => ko
      ? "레버리지가 무한정 쌓이는 것을 방지. 기존 채권 보유자의 순위 희석 방어."
      : "Prevents unlimited leverage accumulation and protects existing bondholders from dilution of their claim.",
    example: (ko: boolean) => ko
      ? "발행사 EBITDA $100mn, 이자비용 $45mn → FCCR = 2.22× ≥ 2.0×이므로 추가 차입 가능. EBITDA가 $80mn으로 감소 → FCCR = 1.78×, Permitted Debt 카브아웃만 활용 가능."
      : "Issuer EBITDA $100mn, interest $45mn → FCCR = 2.22× ≥ 2.0×, so additional debt permitted. EBITDA drops to $80mn → FCCR = 1.78×, only Permitted Debt carve-outs available.",
    color:   "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    badge:   "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    name:    (ko: boolean) => ko ? "지불 제한" : "Restricted Payments (RP)",
    nameEn:  "Restricted Payments (RP)",
    icon:    "💸",
    description: (ko: boolean) => ko
      ? "배당, 자사주 매입, 비제한 자회사 투자를 제한합니다. PE 스폰서가 채권자 희생으로 현금을 인출하는 것을 막는 핵심 조항."
      : "Limits dividends, share buybacks, and investments in unrestricted subsidiaries. The key covenant blocking PE sponsors from extracting cash at creditors' expense.",
    purpose: (ko: boolean) => ko
      ? "발행사의 현금이 채권 상환에 우선 사용되도록 보장. 에쿼티 투자자로의 가치 이전 제한."
      : "Ensures issuer cash is used for debt service first. Limits value transfer to equity holders.",
    example: (ko: boolean) => ko
      ? "빌더 바스켓: 시작금액 $50mn + 발행일 이후 누적 순이익의 50% + 에쿼티 공모 순수익 → 합계가 가용 RP 한도. 분기 배당 지급 전 조건 충족 여부 확인 필수."
      : "Builder basket: Starting Amount $50mn + 50% of cumulative CNI since issuance + equity proceeds → sum is the available RP capacity. Must verify conditions are met before each quarterly dividend.",
    color:   "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    badge:   "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    name:    (ko: boolean) => ko ? "담보 제한" : "Limitation on Liens",
    nameEn:  "Limitation on Liens",
    icon:    "🔒",
    description: (ko: boolean) => ko
      ? "무담보 HY 채권 발행사가 자산을 새 채권자에게 담보로 제공하는 것을 제한합니다. Equal-and-ratable 조항 포함."
      : "Restricts unsecured HY bond issuers from pledging assets as collateral to new creditors. Includes an equal-and-ratable clause.",
    purpose: (ko: boolean) => ko
      ? "HY 무담보 채권의 청산 순위를 보호. 사후적으로 담보부 채권 발행사가 무담보 채권자 위로 올라서는 것을 방지."
      : "Protects HY unsecured bondholders' liquidation priority. Prevents issuer from retrospectively moving secured creditors above HY holders.",
    example: (ko: boolean) => ko
      ? "발행사가 새 TLB 발행을 위해 공장을 담보로 제공하면, 동시에 HY 채권에도 동등한 담보를 제공해야 함(equally and ratably secured). 신규 크레딧 퍼실리티 담보는 'Permitted Lien' 카브아웃으로 면제."
      : "If the issuer pledges a factory as collateral for a new TLB, it must simultaneously grant equal and rateable security to HY bondholders. New credit facility liens are exempt as a 'Permitted Lien' carve-out.",
    color:   "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge:   "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    name:    (ko: boolean) => ko ? "자산 매각 제한" : "Limitation on Asset Sales",
    nameEn:  "Limitation on Asset Sales",
    icon:    "🏭",
    description: (ko: boolean) => ko
      ? "자산 매각 수익금을 부채 상환 또는 사업 재투자에 사용하도록 의무화합니다. 계열사 간 저가 매각을 금지합니다."
      : "Mandates that asset sale proceeds be used for debt repayment or business reinvestment. Prohibits below-market sales to affiliates.",
    purpose: (ko: boolean) => ko
      ? "PE 스폰서가 핵심 자산을 저가에 빼돌리는 것을 방지. 자산 기반이 유지되어 채권 담보력 보전."
      : "Prevents PE sponsors from stripping core assets at below-market prices. Preserves asset base backing bondholder claims.",
    example: (ko: boolean) => ko
      ? "자산 매각 수익 $200mn 발생 시, 18개월 내 (a) 선순위 부채 상환 또는 (b) 동종 사업 재투자에 사용해야 함. 미사용분은 HY 채권자에게 액면가(par)로 환매 제안 의무."
      : "When asset sale proceeds of $200mn arise, within 18 months must (a) repay senior debt or (b) reinvest in the same line of business. Unused proceeds trigger a par repurchase offer to HY bondholders.",
    color:   "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    badge:   "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    name:    (ko: boolean) => ko ? "계열사 거래 제한" : "Limitation on Transactions with Affiliates",
    nameEn:  "Limitation on Transactions with Affiliates",
    icon:    "🤝",
    description: (ko: boolean) => ko
      ? "PE 스폰서나 계열사와의 거래는 시장 조건(arm's length terms)에 맞게 체결해야 합니다. 일정 금액 이상은 IB의 공정성 의견(Fairness Opinion) 요구."
      : "Transactions with the PE sponsor or affiliates must be on arm's length market terms. Above a threshold, an investment bank fairness opinion is required.",
    purpose: (ko: boolean) => ko
      ? "PE 스폰서가 발행사의 가치를 계열사 거래를 통해 몰래 빼내는 '터널링'을 방지."
      : "Prevents PE sponsors from 'tunneling' value out of the issuer through related-party transactions disguised as market deals.",
    example: (ko: boolean) => ko
      ? "PE 스폰서가 연간 $15mn의 경영자문 수수료를 청구하는 경우, 이 수준이 독립된 시장 참여자와의 거래 조건과 동등한지 IB가 확인해야 함. $25mn 초과 거래는 이사회 결의 + 공정성 의견 필수."
      : "If the PE sponsor charges $15mn annual management advisory fees, an IB must confirm this is consistent with arms-length market rates. Transactions exceeding $25mn require board resolution plus a formal fairness opinion.",
    color:   "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
    badge:   "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  },
];

// ── FCCR Carve-outs ───────────────────────────────────────────────────────────
const FCCR_CARVEOUTS = [
  {
    name: (ko: boolean) => ko ? "크레딧 퍼실리티 바스켓" : "Credit Facility Basket",
    detail: (ko: boolean) => ko
      ? "TLB, RCF 등 선순위 담보 대출. LBO 딜에서 가장 큰 카브아웃으로, FCCR 테스트와 무관하게 TLB와 RCF를 발행할 수 있도록 인덴처에 명시됩니다. 일반적으로 최초 TLB+RCF 총액이 이 바스켓 규모가 됩니다."
      : "Senior secured loans (TLB, RCF). The largest carve-out in an LBO deal — the indenture specifies a basket allowing TLB and RCF issuance regardless of the FCCR test. The basket size is typically the initial TLB+RCF total.",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    name: (ko: boolean) => ko ? "일반 목적 바스켓" : "General Purpose Basket",
    detail: (ko: boolean) => ko
      ? "소규모 일반 목적 차입. 금액 한도(예: $50mn) 또는 EBITDA 대비 일정 비율(예: 5%)로 제한. 운전자본, 소규모 투자 등에 활용."
      : "Small-scale general borrowings. Capped at a dollar amount (e.g., $50mn) or percentage of EBITDA (e.g., 5%). Used for working capital, minor investments, etc.",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    name: (ko: boolean) => ko ? "인수 부채 (Acquired Debt)" : "Acquired Debt",
    detail: (ko: boolean) => ko
      ? "인수한 회사가 보유하고 있던 기존 부채. 인수 완료 후 pro forma 레버리지 기준을 충족하거나 인수 전부터 존재했던 부채라면 허용."
      : "Debt of acquired companies that existed before the acquisition. Permitted if it was already in place before closing or meets a pro forma leverage test.",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    name: (ko: boolean) => ko ? "리파이낸싱 부채" : "Refinancing Debt",
    detail: (ko: boolean) => ko
      ? "기존 허용 부채를 동일하거나 낮은 원금, 동일하거나 짧은 만기로 재융통하는 것. 레버리지를 높이지 않는 리파이낸스는 FCCR 테스트 면제."
      : "Refinancing of existing Permitted Debt at the same or lower principal and same or shorter maturity. Refinancings that don't increase leverage are exempt from the FCCR test.",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    name: (ko: boolean) => ko ? "캐피탈 리스 / 구매 금융" : "Capital Lease / Purchase Money Debt",
    detail: (ko: boolean) => ko
      ? "자산 구매를 위한 할부 금융 및 자본 리스. 상한선 설정(예: $25mn). 실물 자산 가치를 초과하지 않도록 제한."
      : "Installment financing and capital leases for asset purchases. Capped (e.g., $25mn). Cannot exceed the value of the underlying asset being financed.",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    name: (ko: boolean) => ko ? "회사 간 부채 (Intercompany)" : "Intercompany Debt",
    detail: (ko: boolean) => ko
      ? "제한 그룹(Restricted Group) 내 자회사 간 대출. 외부 채권자에게는 영향 없음. 단, 비제한 자회사에 대한 대출은 RP 바스켓 소진."
      : "Loans between subsidiaries within the Restricted Group. No impact on external creditors. However, loans to Unrestricted Subsidiaries consume the RP basket.",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    name: (ko: boolean) => ko ? "헤징 의무" : "Hedging Obligations",
    detail: (ko: boolean) => ko
      ? "금리·환율·상품 가격 헤징 목적의 파생상품 계약. 투기 목적이 아닌 리스크 헤징 한도 내에서만 허용."
      : "Derivative contracts for interest rate, FX, or commodity price hedging. Permitted only within risk-hedging limits, not for speculative purposes.",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

// ── Builder Basket Steps ──────────────────────────────────────────────────────
const BUILDER_BASKET_STEPS = [
  {
    step: "①",
    label: (ko: boolean) => ko ? "시작 금액 (Starting Amount)" : "Starting Amount",
    detail: (ko: boolean) => ko
      ? "발행 시점에 인덴처에 고정된 금액 (예: $50mn). 재무 상태와 무관하게 항상 사용 가능한 최소 RP 한도."
      : "Fixed amount hardwired in the indenture at issuance (e.g., $50mn). Always available regardless of financial condition.",
    sign:  "+",
    color: "bg-emerald-500",
  },
  {
    step: "②",
    label: (ko: boolean) => ko ? "누적 순이익의 50% (CNI Build)" : "50% of Cumulative CNI",
    detail: (ko: boolean) => ko
      ? "발행일 이후 발생한 연결 순이익(Consolidated Net Income)의 50%를 누적 합산. 손실 발생 시 100%를 차감 (asymmetric!)."
      : "50% of Consolidated Net Income accumulated since issuance date. Losses are deducted at 100% — asymmetric treatment!",
    sign:  "+",
    color: "bg-yellow-500",
  },
  {
    step: "③",
    label: (ko: boolean) => ko ? "에쿼티 공모 순수익" : "Net Equity Proceeds",
    detail: (ko: boolean) => ko
      ? "IPO, 유상증자, CB 전환 등 에쿼티성 자금 조달 순수익 전액 가산. PE 스폰서가 IPO 후 배당 재원으로 활용."
      : "Full net proceeds from equity issuances (IPO, follow-on, CB conversions, etc.). PE sponsors use this to fund dividends post-IPO.",
    sign:  "+",
    color: "bg-blue-500",
  },
  {
    step: "④",
    label: (ko: boolean) => ko ? "허용 투자 회수금" : "Returns on Permitted Investments",
    detail: (ko: boolean) => ko
      ? "비제한 자회사 투자, JV 배당, 허용 투자 원금 회수 등. 투자한 만큼 돌아오면 바스켓이 복원됨."
      : "Dividends from unrestricted subsidiaries, JV distributions, and principal returns on Permitted Investments. Basket refills as investments return proceeds.",
    sign:  "+",
    color: "bg-teal-500",
  },
  {
    step: "⑤",
    label: (ko: boolean) => ko ? "기지급 RP 차감" : "Minus Prior RP Payments",
    detail: (ko: boolean) => ko
      ? "이미 집행한 배당, 자사주 매입, 투자금액 전부 차감. 잔액이 Available Amount = 현재 사용 가능한 RP 총한도."
      : "Deduct all dividends, buybacks, and investments already made. Remaining balance = Available Amount = current RP capacity.",
    sign:  "=",
    color: "bg-orange-500",
  },
];

// ── Famous Loopholes ──────────────────────────────────────────────────────────
const FAMOUS_LOOPHOLES = [
  {
    name:    "J.Crew Maneuver",
    year:    "2016–2017",
    company: "J.Crew Group (TPG Capital)",
    mechanism: (ko: boolean) => ko
      ? "J.Crew는 브랜드·상표권 등 핵심 IP를 케이맨 아일랜드에 새로 설립한 비제한 자회사로 이전했습니다. 이 비제한 자회사는 이전받은 IP를 담보로 새 최선순위(superpriority) 부채를 발행했습니다. 기존 TLB 대주단은 자신들의 담보로 여겼던 IP가 순식간에 사라졌다는 사실을 뒤늦게 알았습니다."
      : "J.Crew transferred key IP (brand, trademarks) to a newly created unrestricted subsidiary in the Cayman Islands. That unrestricted sub then pledged the IP as collateral for new superpriority debt. Existing TLB lenders realized too late that their collateral — the IP — had been stripped.",
    impact:  (ko: boolean) => ko
      ? "TLB 대주단은 담보 기반이 대폭 축소된 채 이후 구조조정 협상에 임해야 했습니다. 회수율이 크게 낮아졌으며 소송이 이어졌습니다."
      : "TLB lenders entered subsequent restructuring negotiations with their collateral base sharply reduced. Recovery rates fell significantly, followed by litigation.",
    legacy:  (ko: boolean) => ko
      ? "'J.Crew Blocker' 조항 표준화: 인덴처 및 크레딧 에그리먼트에 'IP를 비제한 자회사로 이전 불가' 문구 삽입. LMA·LSTA가 베스트 프랙티스 템플릿 발표."
      : "'J.Crew Blocker' language standardized: indentures and credit agreements now explicitly prohibit IP transfer to unrestricted subsidiaries. LMA and LSTA published best-practice templates.",
    color:   "border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
    dot:     "bg-rose-500",
    badge:   "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    tag:     "IP 이전",
    tagEn:   "IP Transfer",
  },
  {
    name:    "PetSmart / Chewy Maneuver",
    year:    "2017–2018",
    company: "PetSmart (BC Partners, $8.7bn LBO 2015)",
    mechanism: (ko: boolean) => ko
      ? "BC Partners는 Chewy 지분 16.5%를 PE 스폰서 직접 소유 법인(PetSmart의 LBO 부채를 지는 제한 그룹 밖)으로 이전했습니다. 2019년 Chewy IPO(기업가치 $9bn)에서 발생한 수익은 PetSmart 채권자가 아닌 PE 스폰서에게 귀속되었습니다."
      : "BC Partners transferred a 16.5% stake in Chewy to a vehicle owned directly by the PE sponsor — outside the restricted group carrying PetSmart's LBO debt. When Chewy IPO'd in 2019 at a $9bn valuation, the proceeds flowed to the PE sponsor, not to PetSmart's creditors.",
    impact:  (ko: boolean) => ko
      ? "채권자들은 $1.35bn 규모의 가치 있는 자산에 대한 접근권을 상실했습니다. 소송이 이어졌으며 PetSmart 채권 가격이 큰 폭으로 하락했습니다."
      : "Creditors lost access to $1.35bn of valuable assets. Litigation ensued and PetSmart debt prices dropped sharply.",
    legacy:  (ko: boolean) => ko
      ? "'Chewy/PetSmart Blocker': 비제한 자회사 지정 시 가치 테스트(value test) 요건 추가. 일정 규모 이상의 자산을 제한 그룹 밖으로 이전하려면 이사회 결의 + 독립 감정 필요."
      : "'Chewy/PetSmart Blocker': restrictions on what subsidiaries can be moved to unrestricted status, requiring value tests. Moving material assets outside the restricted group requires board resolution + independent appraisal.",
    color:   "border-orange-300 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
    dot:     "bg-orange-500",
    badge:   "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    tag:     "가치 이전",
    tagEn:   "Value Transfer",
  },
  {
    name:    "Serta Simmons Uptier",
    year:    "2020",
    company: "Serta Simmons Bedding (Advent International)",
    mechanism: (ko: boolean) => ko
      ? "과반수(>50%) 대주단이 크레딧 에그리먼트의 '공개시장 매수(open market purchase)' 조항을 활용해 소수 대주단의 동의 없이 에그리먼트를 개정했습니다. 동의한 대주단에게는 새 최선순위(superpriority) 부채를 발행하고, 소수 대주단의 청구권은 후순위로 격하(subordinated)되었습니다."
      : "A majority (>50%) of lenders used the 'open market purchase' provision in the credit agreement to amend the agreement without minority lender consent. Consenting lenders received new superpriority debt; non-consenting minority lenders were subordinated.",
    impact:  (ko: boolean) => ko
      ? "소수 대주단이 소송을 제기했고, 법원 판결이 엇갈렸습니다. 시장 전반에 불확실성이 확산되어 Cov-Lite 론의 Amendment 조항에 대한 재검토 계기가 됐습니다."
      : "Minority lenders filed suit. Courts initially sided with Serta, then reversed. Created broad market uncertainty and prompted wholesale review of amendment provisions in Cov-Lite loans.",
    legacy:  (ko: boolean) => ko
      ? "'Serta Blocker': 신규 에그리먼트에서 '공개시장 매수' 조항은 Amendment 목적으로 사용 불가 명시. 경제적 조건 변경은 전원 동의 또는 높은 임계값 동의(2/3 또는 3/4) 필요."
      : "'Serta Blocker': new credit agreements now explicitly state that 'open market purchase' provisions cannot be used for amendments. Economic amendments require unanimous or super-majority (2/3 or 3/4) consent.",
    color:   "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
    dot:     "bg-amber-500",
    badge:   "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    tag:     "업티어 익스체인지",
    tagEn:   "Uptier Exchange",
  },
  {
    name:    "Envision Healthcare Uptier",
    year:    "2020",
    company: "Envision Healthcare (KKR, $9.9bn LBO 2018)",
    mechanism: (ko: boolean) => ko
      ? "과반수 대주단 동의를 통해 핵심 자산(AmSurg, 의사 인력 파견 사업)을 새로 설립한 자회사로 이전했습니다. 이 자회사에 협조 대주단을 위한 새 최선순위 부채를 발행하고, 비협조 소수 대주단은 남은 자산에 대한 후순위 청구권만 보유하게 됐습니다."
      : "With majority lender consent, the most valuable assets (AmSurg, physician staffing) were moved to a newly formed subsidiary. New first-out superpriority paper was issued to cooperating lenders; non-cooperating minority lenders were left with junior claims on remaining assets.",
    impact:  (ko: boolean) => ko
      ? "기존 퍼스트 린 부채 약 $1bn이 사후적으로 후순위화(primed)됐습니다. 2023년 파산 신청 후 청산. 역대 최대 PE LBO 중 하나에서 가장 논란이 많은 결말."
      : "Approximately $1bn of existing first lien debt was primed (subordinated). Filed for bankruptcy in 2023 and liquidated. One of the most controversial outcomes in a major PE LBO.",
    legacy:  (ko: boolean) => ko
      ? "'Envision Blocker': 신규 에그리먼트에 새로 설립된 법인으로의 자산 이전에 대한 광범위한 제한 삽입. 최선순위 부채 발행을 위한 자산 이전은 전원 동의 요건."
      : "'Envision Blocker': new credit agreements include broad restrictions on asset transfers to newly formed entities. Asset transfers to issue new superpriority debt require unanimous consent.",
    color:   "border-purple-300 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20",
    dot:     "bg-purple-500",
    badge:   "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    tag:     "자산 이전",
    tagEn:   "Asset Transfer",
  },
];

// ── Covenant Negotiation Table ────────────────────────────────────────────────
const NEGOTIATION_TABLE = [
  {
    item: (ko: boolean) => ko ? "시장 환경" : "Market Environment",
    hot:  (ko: boolean) => ko ? "핫 마켓 (2021형)" : "Hot Market (2021-style)",
    cold: (ko: boolean) => ko ? "콜드 마켓 (2022형)" : "Cold Market (2022-style)",
  },
  {
    item: (ko: boolean) => ko ? "RP 바스켓 규모" : "RP Basket Size",
    hot:  (ko: boolean) => ko ? "대형 빌더 바스켓 + $100mn+ 고정 바스켓" : "Large builder basket + $100mn+ fixed basket",
    cold: (ko: boolean) => ko ? "소형 빌더 바스켓, 고정 바스켓 $25mn 이하" : "Smaller builder basket, fixed basket ≤$25mn",
  },
  {
    item: (ko: boolean) => ko ? "부채 발행 카브아웃" : "Debt Incurrence Carve-outs",
    hot:  (ko: boolean) => ko ? "대형 일반 목적 바스켓, 넓은 인수 부채 조항" : "Large general purpose basket, broad acquired debt clause",
    cold: (ko: boolean) => ko ? "소형 일반 목적 바스켓, 좁은 인수 부채 조항" : "Small general purpose basket, narrow acquired debt clause",
  },
  {
    item: (ko: boolean) => ko ? "비제한 자회사 지정" : "Unrestricted Sub Designation",
    hot:  (ko: boolean) => ko ? "가치 테스트 없음, 자유로운 지정" : "No value test, free designation",
    cold: (ko: boolean) => ko ? "가치 테스트 + 이사회 결의 필요" : "Value test + board resolution required",
  },
  {
    item: (ko: boolean) => ko ? "Cov-Lite 여부" : "Cov-Lite Structure",
    hot:  (ko: boolean) => ko ? "Cov-Lite 표준, 유지형 코버넌트 없음" : "Cov-Lite standard, no maintenance covenants",
    cold: (ko: boolean) => ko ? "일부 유지형 코버넌트 요구 가능" : "Some maintenance covenants may be required",
  },
  {
    item: (ko: boolean) => ko ? "J.Crew / Serta Blocker" : "J.Crew / Serta Blocker",
    hot:  (ko: boolean) => ko ? "약한 Blocker, 허점 다수" : "Weak blockers with multiple loopholes",
    cold: (ko: boolean) => ko ? "강한 Blocker, 투자자 친화적 언어" : "Strong blockers, investor-friendly language",
  },
];

// ── Korea Covenant Cards ──────────────────────────────────────────────────────
const KOREA_COVENANT_CARDS = [
  {
    icon: "🏦",
    title: (ko: boolean) => ko ? "한국 은행 대출: 유지형 코버넌트 중심" : "Korean Bank Loans: Maintenance Covenant-Heavy",
    body: (ko: boolean) => ko
      ? "미국 HY 인덴처는 '발생형(incurrence)' 코버넌트가 기본입니다 — 어떤 행위를 할 때만 테스트. 반면 한국 은행 대출은 분기마다 재무비율을 테스트하는 '유지형(maintenance)' 코버넌트가 일반적입니다. 레버리지 5× 이하, DSCR 1.2× 이상 등. 미국 Cov-Lite 문화와 정반대."
      : "US HY indentures default to 'incurrence' covenants — tests only triggered when the borrower takes an action. By contrast, Korean bank loans typically feature 'maintenance' covenants tested quarterly: leverage below 5×, DSCR above 1.2×, etc. The opposite of US Cov-Lite culture.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
  },
  {
    icon: "📋",
    title: (ko: boolean) => ko ? "한국 회사채: 매우 단순한 코버넌트" : "Korean Corporate Bonds: Very Simple Covenants",
    body: (ko: boolean) => ko
      ? "국내 회사채 인덴처는 미국 HY 인덴처에 비해 현저히 단순합니다. 주요 기업(IG 수준)이 발행하는 경우가 대부분이고, 투자자 베이스(보험사·연기금)가 상세 코버넌트 협상보다 신용등급에 의존합니다. J.Crew형 조항 구조는 국내 회사채에 존재하지 않습니다."
      : "Domestic Korean corporate bond indentures are substantially simpler than US HY indentures. Most issuers are investment grade, and the investor base (insurers, pensions) relies on credit ratings rather than detailed covenant negotiation. J.Crew-style covenant structures simply don't exist in domestic Korean corporate bonds.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
  },
  {
    icon: "🇰🇷",
    title: (ko: boolean) => ko ? "한국 PE 딜 코버넌트: 글로벌 은행 주도로 국제화" : "Korean PE Deal Covenants: Globalizing via International Banks",
    body: (ko: boolean) => ko
      ? "MBK, IMM 등 한국 PE의 대형 딜에서는 골드만삭스, JPMorgan 등 글로벌 IB가 론 어레인저로 참여하면서 LSTA/LMA 표준 크레딧 에그리먼트 구조가 도입되기 시작했습니다. J.Crew Blocker 등 표준 조항이 한국 PE 딜 문서에도 포함되는 사례가 늘고 있습니다. 하지만 법원 선례와 감독 당국의 역할로 인해 미국식 창의적 해석이 훨씬 제한적입니다."
      : "In large Korean PE deals involving MBK, IMM, and others, global IBs (Goldman, JPMorgan) arranging the loans have introduced LSTA/LMA-standard credit agreement structures. J.Crew Blockers and other standard provisions are increasingly appearing in Korean PE deal documentation. However, court precedent and regulatory oversight significantly limit the creative legal maneuvers seen in the US.",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "FCCR 2.0× 테스트가 실패해도 추가 차입이 가능한가요?"
      : "Can an issuer still borrow more even if it fails the FCCR 2.0× test?",
    a: (ko: boolean) => ko
      ? "네, 가능합니다. '허용 부채(Permitted Debt)' 카브아웃이 바로 이 목적으로 존재합니다. 가장 중요한 카브아웃은 크레딧 퍼실리티 바스켓입니다 — 이것이 LBO에서 최초의 TLB와 RCF를 발행할 수 있는 근거이기도 합니다. FCCR이 2.0× 이하로 떨어지더라도, (a) 최초 크레딧 퍼실리티 이하 금액의 RCF 인출, (b) 기존 부채 리파이낸싱, (c) 인수 부채, (d) 일반 목적 바스켓 한도 내 소규모 차입은 모두 허용됩니다. 실무에서는 이 카브아웃이 인덴처의 핵심 협상 포인트입니다 — 카브아웃 합산 규모가 곧 '사실상 차입 가능 한도'입니다."
      : "Yes. 'Permitted Debt' carve-outs exist precisely for this purpose. The most important carve-out is the Credit Facility basket — this is actually what allows the initial TLB and RCF to be issued in an LBO in the first place. Even when FCCR falls below 2.0×, the following remain permitted: (a) RCF draws up to the initial credit facility amount, (b) refinancing of existing debt, (c) acquired debt, (d) small-scale general purpose basket borrowings. In practice, these carve-outs are the core negotiation points of any indenture — the aggregate carve-out size is effectively the real borrowing capacity.",
  },
  {
    q: (ko: boolean) => ko
      ? "빌더 바스켓이 마이너스가 될 수 있나요? 어떻게 되나요?"
      : "Can the builder basket go negative? What happens then?",
    a: (ko: boolean) => ko
      ? "네, 가능합니다. 기업이 지속적인 순손실을 기록하면 누적 CNI 기여분이 마이너스가 됩니다. 손실은 비대칭적으로 100% 차감되므로 큰 손실이 발생하면 시작금액 $50mn도 순식간에 소진됩니다. 바스켓이 마이너스 영역에 들어서면 가용 RP 금액이 0으로 처리됩니다 — 마이너스 금액을 '갚을' 의무는 없지만 바스켓이 회복될 때까지 추가 RP는 불가능합니다. 이것이 정확히 Neiman Marcus 등 레버리지드 리테일 기업들이 파산 전 겪었던 상황입니다 — 빌더 바스켓이 소진되어 배당은커녕 계열사 투자도 불가능해졌습니다."
      : "Yes. If a company sustains net losses, the cumulative CNI contribution turns negative. Because losses are deducted at 100% (not 50%), large losses can rapidly exhaust even a $50mn starting amount. Once the basket enters negative territory, available RP is treated as zero — there's no obligation to 'repay' the negative amount, but no additional RP is permitted until the basket recovers. This is exactly what Neiman Marcus and other leveraged retailers experienced pre-bankruptcy — the builder basket was exhausted, making even affiliate investments impossible.",
  },
  {
    q: (ko: boolean) => ko
      ? "비제한 자회사를 지정하면 어떤 실질적 효과가 있나요?"
      : "What are the practical effects of designating an unrestricted subsidiary?",
    a: (ko: boolean) => ko
      ? "비제한 자회사로 지정된 법인은 인덴처 코버넌트의 적용을 받지 않습니다. 구체적으로: (a) 무제한 부채 발행 가능, (b) 제한 없는 배당·분배 가능, (c) 어떤 가격에도 자산 매각 가능, (d) 새 부채의 담보로 제공 가능. PE 스폰서는 이를 통해 'clean' 법인을 만들어 IPO나 매각 시 기존 LBO 부채에서 자유로운 엑싯 루트를 마련합니다. 단, 비제한 자회사 지정 자체가 '투자'로 간주되어 RP 바스켓을 소진합니다. 이것이 제대로 이해되면 대부분의 LBO 딜 구조가 보이기 시작합니다 — PE는 항상 '어떤 자산을 인덴처 밖으로 꺼낼 수 있는가'를 고민합니다."
      : "An entity designated as an unrestricted subsidiary is not bound by indenture covenants. Specifically: (a) can incur unlimited debt, (b) can pay unlimited dividends/distributions, (c) can sell assets at any price, (d) can be pledged as collateral for new debt. PE sponsors use this to create 'clean' vehicles for IPOs or sales, free from the main LBO debt. However, the designation itself counts as an 'investment' and consumes the RP basket. Once you understand this properly, most LBO deal structures become legible — PE sponsors are always asking 'which assets can we move outside the indenture?'",
  },
  {
    q: (ko: boolean) => ko
      ? "J.Crew 이후 'J.Crew Blocker' 조항이 표준화됐나요?"
      : "After J.Crew, has 'J.Crew Blocker' language become standardized?",
    a: (ko: boolean) => ko
      ? "부분적으로 표준화됐습니다. 2017년 이후 신규 크레딧 에그리먼트 대부분에 IP 이전 제한 문구가 포함됩니다. 하지만 문서 품질은 딜마다 다릅니다 — 어떤 'Blocker'에는 또 다른 허점이 있습니다. LMA(유럽)와 LSTA(미국)가 모범 사례 템플릿을 발표했으나, 실제 협상은 여전히 딜 단위로 이루어집니다. 핫 마켓에서 PE는 약한 Blocker 언어를 수용하도록 투자자를 압박합니다 — '이 딜에 들어오려면 이 조항을 받아들여야 한다'는 식으로. 이것이 LevFin 법률 문서 분석이 단순 체크리스트가 아닌 이유입니다: 표준 조항도 텍스트를 직접 읽어야 구멍이 보입니다."
      : "Partially. Post-2017, most new credit agreements include some form of IP transfer restriction. But documentation quality varies — some 'blockers' themselves have loopholes. The LMA (Europe) and LSTA (US) have published best-practice templates, but negotiation still happens deal-by-deal. In hot markets, PE sponsors pressure investors to accept weaker blocker language — 'if you want into this deal, accept these terms.' This is why LevFin legal document analysis isn't a simple checklist: even standard provisions need to be read directly to spot the gaps.",
  },
  {
    q: (ko: boolean) => ko
      ? "코버넌트 패키지를 실제로 어떻게 분석하나요? 뭘 먼저 봐야 하나요?"
      : "How do you actually analyze a covenant package in practice? What should you look at first?",
    a: (ko: boolean) => ko
      ? "숙련된 애널리스트들이 우선시하는 순서는 다음과 같습니다: (1) RP 바스켓 총 규모 및 조건 — 배당 여력을 결정하는 핵심. (2) 부채 발행 카브아웃, 특히 'Additional Notes' 바스켓 규모 — 얼마나 더 빌릴 수 있는가. (3) 비제한 자회사 지정 권리 — 가치 테스트가 있는가. (4) Change of Control 정의 — 101% put을 트리거하는 조건은 무엇인가. (5) 선순위 담보 부채를 위한 'Permitted Liens' 바스켓. 코버넌트 서머리는 불릿 포인트로 5–10페이지가 표준입니다 — 인덴처를 단순히 읽는 것이 아니라 '실질 차입 여력'과 '배당 여력'을 수치로 정량화하는 작업입니다. 뱅커는 발행사를 위해 이 내용을 CIM에 정리하고, 투자자는 독립적으로 크로스체크합니다."
      : "Experienced analysts prioritize in this order: (1) RP basket total size and conditions — determines dividend capacity. (2) Debt incurrence carve-outs, especially 'Additional Notes' basket size — how much more can be borrowed. (3) Unrestricted subsidiary designation rights — is there a value test? (4) Change of Control definition — what triggers the 101% put? (5) 'Permitted Liens' basket for secured debt above TLB. A good covenant summary is 5–10 pages of bullet points — not just reading the indenture, but quantifying the 'real borrowing capacity' and 'real dividend capacity' in dollar figures. Bankers summarize this in the CIM for issuers; investors independently cross-check.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "LSTA (Loan Syndications and Trading Association)", title: "The LSTA's Complete Credit Agreement Guide, 2nd Ed.", url: "https://www.lsta.org/", source: "LSTA, 2019" },
  { id: 2, author: "Moody's Investors Service", title: "Covenant Quality Monitor — US High Yield Bonds", url: "https://www.moodys.com/", source: "Moody's, 2024" },
  { id: 3, author: "Reorg Research", title: "J.Crew Maneuver: How It Worked and What Lenders Did About It", url: "https://reorg.com/", source: "Reorg, 2017" },
  { id: 4, author: "S&P Global / LCD", title: "Leveraged Loan Covenant Trends Report", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P LCD, 2024" },
  { id: 5, author: "Fried Frank Harris Shriver & Jacobson LLP", title: "High Yield Indenture Negotiation: Key Concepts for Practitioners", url: "https://www.friedfrank.com/", source: "Fried Frank, 2022" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinCovenantsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = LEVFIN_SERIES[thisCh - 1] ?? null;
  const next = LEVFIN_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {LEVFIN_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-yellow-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-yellow-400 hover:text-yellow-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>LevFin · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "코버넌트 구조: HY 인덴처 & 론 에그리먼트의 모든 것"
              : "Covenant Architecture: Everything in a HY Indenture & Loan Agreement"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "IB 실무에서 코버넌트 협상을 어떻게 하는지, J.Crew 같은 유명 루프홀이 어떻게 나왔는지까지. 코버넌트는 발행사와 투자자 간의 계약입니다 — 하지만 이 계약에는 항상 허점이 있고, 그 허점을 누가 먼저 찾느냐가 수십억 달러의 차이를 만듭니다."
              : "How covenant negotiations work in IB practice, and how famous loopholes like the J.Crew Maneuver came to exist. Covenants are contracts between issuers and investors — but these contracts always have gaps, and who finds those gaps first can make a difference of billions of dollars."}
          </p>
        </motion.div>

        {/* ── Opening Callout ─────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0.1)} className="mb-12">
          <div className="rounded-xl border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-5 py-4">
            <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200 leading-relaxed italic">
              {ko
                ? "\"코버넌트는 발행사와 투자자 간의 '계약'이다 — 하지만 이 계약에는 항상 허점이 있다. 그 허점을 누가 먼저 찾느냐가 수십억 달러의 차이를 만든다.\""
                : "\"Covenants are the 'contract' between issuers and investors — but this contract always has gaps. Who finds those gaps first makes a difference of billions of dollars.\""}
            </p>
            <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-2">
              {ko ? "— LevFin 실무자 관점" : "— LevFin practitioner perspective"}
            </p>
          </div>
        </motion.div>

        {/* ── 섹션 1: 코버넌트 5대 유형 ──────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 코버넌트 5대 유형" : "1. The Five Core Covenant Types"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "HY 인덴처와 레버리지드 론 에그리먼트의 핵심 제한 조항 다섯 가지. 각각의 목적과 실제 작동 방식을 이해해야 코버넌트 패키지를 분석할 수 있습니다."
              : "The five key restrictive covenant categories in HY indentures and leveraged loan agreements. Understanding the purpose and mechanics of each is essential to analyzing a covenant package."}
          </p>
          <div className="space-y-4">
            {COVENANT_TYPES.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${c.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="font-black text-base text-gray-900 dark:text-gray-50">{c.name(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{c.nameEn}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{c.description(ko)}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mt-3">
                      <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2 text-xs">
                        <span className="font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide text-[10px] block mb-1">
                          {ko ? "목적" : "Purpose"}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{c.purpose(ko)}</span>
                      </div>
                      <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2 text-xs">
                        <span className="font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide text-[10px] block mb-1">
                          {ko ? "실제 사례" : "Example"}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{c.example(ko)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 2: FCCR 2.0× 테스트 심층 분석 ───────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 부채 발행 제한 — FCCR 2.0× 테스트 심층 분석" : "2. Debt Incurrence — The FCCR 2.0× Test Deep Dive"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "FCCR이 2.0× 이상이면 일반 바스켓으로 추가 차입 가능, 이하면 Permitted Debt 카브아웃만 활용 가능합니다. 하지만 카브아웃 규모가 충분히 크다면 FCCR 테스트는 사실상 의미가 없어집니다."
              : "If FCCR ≥ 2.0×, additional debt can be incurred through the general basket. Below 2.0×, only Permitted Debt carve-outs are available. But if carve-outs are large enough, the FCCR test is effectively meaningless."}
          </p>

          {/* Formula Box */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "FCCR 공식 (HY 인덴처 표준)" : "FCCR Formula (HY Indenture Standard)"}
            </p>
            <div className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-5 py-4 font-mono text-sm mb-4">
              <div className="text-center">
                <div className="text-gray-700 dark:text-gray-300 mb-1">
                  {ko ? "연결 EBITDA (직전 12개월)" : "Consolidated EBITDA (LTM)"}
                </div>
                <div className="border-t border-gray-400 dark:border-gray-500 w-64 mx-auto my-2" />
                <div className="text-gray-700 dark:text-gray-300 mb-2">
                  {ko ? "Fixed Charges (현금 이자비용 + 예정된 원금 상환 + 우선주 배당)" : "Fixed Charges (cash interest + scheduled principal + preferred dividends)"}
                </div>
                <div className="text-yellow-600 dark:text-yellow-400 font-bold text-base">
                  {ko ? "≥ 2.0× 이어야 일반 바스켓 사용 가능" : "Must be ≥ 2.0× to use the general basket"}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 px-4 py-3">
                <p className="font-bold text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">
                  ✅ {ko ? "FCCR ≥ 2.0× (테스트 통과)" : "FCCR ≥ 2.0× (Test Passes)"}
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• {ko ? "일반 바스켓으로 추가 HY채권 발행 가능" : "Can issue additional HY bonds via general basket"}</li>
                  <li>• {ko ? "Pro forma 테스트: 신규 부채 포함 후에도 ≥ 2.0× 유지" : "Pro forma test: must still be ≥ 2.0× after including new debt"}</li>
                  <li>• {ko ? "빌더 바스켓 RP 활용 가능" : "Builder basket RP available"}</li>
                </ul>
              </div>
              <div className="rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 px-4 py-3">
                <p className="font-bold text-xs text-rose-700 dark:text-rose-400 uppercase tracking-wide mb-2">
                  ⚠️ {ko ? "FCCR < 2.0× (테스트 실패)" : "FCCR < 2.0× (Test Fails)"}
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• {ko ? "일반 바스켓 사용 불가" : "General basket unavailable"}</li>
                  <li>• {ko ? "Permitted Debt 카브아웃만 활용 가능" : "Only Permitted Debt carve-outs available"}</li>
                  <li>• {ko ? "빌더 바스켓 RP 조건 미충족 가능성" : "Builder basket RP conditions likely unmet"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Carve-outs */}
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
            {ko
              ? "Permitted Debt 카브아웃 — FCCR이 실패해도 허용되는 차입 유형 7가지"
              : "Permitted Debt Carve-outs — 7 Types of Borrowing Allowed Even If FCCR Fails"}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {FCCR_CARVEOUTS.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${c.badge}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1">{c.name(ko)}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3">
            <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">
              <span className="font-bold">💡 {ko ? "핵심 인사이트: " : "Key Insight: "}</span>
              {ko
                ? "카브아웃 합산 규모가 클수록 FCCR 테스트는 의미가 없어집니다. 핫 마켓에서는 카브아웃만으로도 인수금융 전체를 커버하는 경우가 있어, 사실상 코버넌트 없는 딜이 됩니다."
                : "The larger the aggregate carve-outs, the more meaningless the FCCR test becomes. In hot markets, carve-outs alone can cover the entire acquisition financing, creating deals that are effectively covenant-free."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 3: 빌더 바스켓 메커니즘 ──────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 지불 제한 코버넌트 — 빌더 바스켓 메커니즘" : "3. Restricted Payments Covenant — Builder Basket Mechanics"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "PE 스폰서가 투자금을 배당으로 회수하는 핵심 경로가 빌더 바스켓입니다. 이 바스켓의 크기와 조건이 배당 가능 금액을 결정하며, PE 스폰서는 협상에서 이것을 최우선으로 방어합니다."
              : "The builder basket is the primary channel through which PE sponsors extract their investment via dividends. Its size and conditions determine dividend capacity — PE sponsors defend this above all else in negotiations."}
          </p>

          {/* Step-by-step visual */}
          <div className="space-y-3 mb-6">
            {BUILDER_BASKET_STEPS.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.09)}
                className="flex items-start gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm ${step.color}`}>
                    {step.sign}
                  </div>
                  {i < BUILDER_BASKET_STEPS.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mt-1" />
                  )}
                </div>
                <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono font-black text-sm" style={{ color: accent }}>{step.step}</span>
                    <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{step.label(ko)}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.detail(ko)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grower basket explanation */}
          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4 mb-4">
            <p className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">
              📈 {ko ? "'그로워(Grower)' 바스켓 — 성장과 함께 커지는 고정 한도" : "'Grower' Basket — Fixed Cap That Grows with the Company"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "최근 인덴처에서는 고정 금액 대신 'max(고정 금액, X% of 총자산 또는 EBITDA)' 형식의 그로워 바스켓이 사용됩니다. 예: max($50mn, 총자산의 5%). 기업이 성장할수록 바스켓도 커지므로 PE에 훨씬 유리합니다."
                : "Recent indentures increasingly use 'grower' baskets: max(fixed amount, X% of total assets or EBITDA). Example: max($50mn, 5% of total assets). As the company grows, the basket grows too — far more favorable to PE sponsors."}
            </p>
            <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2 font-mono text-xs text-gray-700 dark:text-gray-300">
              {ko
                ? "RP 고정 바스켓 = max($50mn, 총자산의 5%) → 총자산 $2bn이면 $100mn이 한도"
                : "RP Fixed Basket = max($50mn, 5% of Total Assets) → if Total Assets = $2bn, cap is $100mn"}
            </div>
          </div>

          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3">
            <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">
              <span className="font-bold">💡 {ko ? "왜 PE 스폰서가 RP 바스켓을 최우선으로 협상하는가: " : "Why PE Sponsors Fight Hardest for the RP Basket: "}</span>
              {ko
                ? "빌더 바스켓이 클수록 PE는 엑싯 전에도 배당을 통해 투자금을 조기 회수할 수 있습니다. 이를 '배당 리캡(Dividend Recapitalization)'이라 합니다 — 회사에 추가 부채를 얹어 그 자금으로 PE에 배당 지급. IRR을 높이는 핵심 레버입니다."
                : "The larger the builder basket, the more PE can recover its investment via dividends before the exit through 'Dividend Recapitalization' — loading additional debt onto the company and paying dividends to the PE sponsor. It's a key lever for boosting IRR."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 4: 비제한 자회사 ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 비제한 자회사 (Unrestricted Subsidiaries) — PE의 비밀 무기" : "4. Unrestricted Subsidiaries — The PE Sponsor's Secret Weapon"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "비제한 자회사 개념을 완전히 이해하면 대부분의 LBO 딜 구조가 보이기 시작합니다. J.Crew, PetSmart, Envision — 모든 유명 루프홀의 근원은 이 개념입니다."
              : "Once you fully understand the unrestricted subsidiary concept, most LBO deal structures become legible. J.Crew, PetSmart, Envision — all famous loopholes trace back to this concept."}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(0)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-3">
                {ko ? "🏢 제한 그룹 (Restricted Group)" : "🏢 Restricted Group"}
              </p>
              <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">✗</span>{ko ? "추가 부채 발행 제한 (FCCR 테스트)" : "Additional debt restricted (FCCR test)"}</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">✗</span>{ko ? "배당·투자 제한 (RP 바스켓)" : "Dividends/investments limited (RP basket)"}</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">✗</span>{ko ? "자산 담보 제한" : "Asset pledging restricted"}</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">✗</span>{ko ? "계열사 거래 시장가 조건 필수" : "Affiliate transactions must be arm's length"}</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 shrink-0">✓</span>{ko ? "채권자 보호를 받음" : "Covered by creditor protections"}</li>
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(0.07)}
              className="rounded-xl border border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20 p-5">
              <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-3">
                {ko ? "🏝️ 비제한 자회사 (Unrestricted)" : "🏝️ Unrestricted Subsidiary"}
              </p>
              <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><span className="text-emerald-500 shrink-0">✓</span>{ko ? "무제한 부채 발행 가능" : "Unlimited debt issuance"}</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 shrink-0">✓</span>{ko ? "제한 없는 배당·분배" : "Unrestricted dividends/distributions"}</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 shrink-0">✓</span>{ko ? "어떤 가격에도 자산 매각" : "Asset sales at any price"}</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 shrink-0">✓</span>{ko ? "새 부채 담보로 자유롭게 제공" : "Free to pledge as collateral"}</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">✗</span>{ko ? "채권자 보호 적용 안됨" : "Not covered by creditor protections"}</li>
              </ul>
            </motion.div>
          </div>

          {/* Designation mechanics */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-4">
            <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-3">
              ⚙️ {ko ? "지정 메커니즘 — 어떻게 작동하는가" : "Designation Mechanics — How It Works"}
            </p>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-xs text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5">STEP 1</span>
                <p>{ko ? "이사회가 특정 자회사를 '비제한 자회사'로 지정하는 결의. 인덴처에 정해진 절차 준수 필요." : "Board resolution to designate a subsidiary as 'Unrestricted'. Must follow procedures set out in the indenture."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-xs text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5">STEP 2</span>
                <p>{ko ? "지정 자체가 해당 자회사에 대한 '투자(Investment)'로 간주 → RP 바스켓을 소진. 바스켓 잔액이 자회사 가치 이상이어야 지정 가능." : "The designation itself is treated as an 'Investment' in the subsidiary → consumes RP basket. Basket balance must exceed the subsidiary's value for designation to be permissible."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-xs text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5">STEP 3</span>
                <p>{ko ? "비제한 자회사가 외부에서 새 부채 조달 또는 자산 담보 제공 가능. 기존 인덴처 제한 없음." : "Unrestricted subsidiary can now raise new external debt or pledge assets as collateral — with no indenture restrictions."}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-xs text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5">STEP 4</span>
                <p>{ko ? "비제한 자회사의 수익·배당은 제한 그룹 밖에 있으므로 기존 채권자 접근 불가. PE 스폰서 직접 수취 가능." : "Proceeds and dividends from the unrestricted subsidiary sit outside the restricted group — inaccessible to existing creditors. PE sponsor can receive them directly."}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3">
            <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">
              <span className="font-bold">🔑 {ko ? "이것이 핵심입니다: " : "This is the key: "}</span>
              {ko
                ? "인덴처가 허용하는 한, PE 스폰서는 아무 자산이나 비제한 자회사로 이전해 '코버넌트 없는 구역(covenant-free zone)'으로 만들 수 있습니다. 이 구역에서는 부채를 마음대로 쌓고, 담보를 자유롭게 제공하며, 수익을 직접 수취할 수 있습니다. 가장 가치 있는 자산을 이 구역에 넣는 것이 모든 유명 루프홀의 핵심 메커니즘입니다."
                : "As long as the indenture allows it, PE sponsors can transfer any asset to an unrestricted subsidiary, creating a 'covenant-free zone.' In this zone, they can pile up debt freely, pledge assets without restriction, and receive proceeds directly. Placing the most valuable assets in this zone is the core mechanism behind all famous loopholes."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 5: 유명 루프홀 4가지 ──────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 유명 코버넌트 루프홀 — 4가지 사건, 시장이 어떻게 반응했나" : "5. Famous Covenant Loopholes — 4 Cases, How Markets Reacted"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "각 사건은 코버넌트 문서화의 허점을 드러냈고, 그 이후 시장은 해당 허점을 막는 조항('Blocker')을 표준화했습니다. 하지만 새 허점은 항상 나옵니다."
              : "Each case revealed gaps in covenant documentation. The market subsequently standardized 'blocker' language to close each gap. But new loopholes always emerge."}
          </p>

          {/* Timeline cards */}
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-6">
              {FAMOUS_LOOPHOLES.map((lh, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${lh.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-5 ${lh.color}`}>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-black text-base text-gray-900 dark:text-gray-50">{lh.name}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lh.badge}`}>
                              {ko ? lh.tag : lh.tagEn}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{lh.year} · {lh.company}</p>
                        </div>
                      </div>
                      {/* Three panels */}
                      <div className="space-y-3">
                        <div className="rounded-lg bg-white/60 dark:bg-black/20 px-4 py-3">
                          <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                            {ko ? "메커니즘" : "Mechanism"}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{lh.mechanism(ko)}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="rounded-lg bg-white/60 dark:bg-black/20 px-4 py-3">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                              {ko ? "영향 (채권자)" : "Impact on Creditors"}
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{lh.impact(ko)}</p>
                          </div>
                          <div className="rounded-lg bg-white/60 dark:bg-black/20 px-4 py-3">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                              {ko ? "시장 반응 (Blocker 언어)" : "Market Response (Blocker Language)"}
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{lh.legacy(ko)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Blocker evolution visual */}
          <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "Blocker 조항 진화 타임라인" : "Blocker Language Evolution Timeline"}
            </p>
            <div className="flex items-end gap-2" style={{ height: "80px" }}>
              {[
                { year: "2016", label: ko ? "J.Crew\nIP 이전 블로커" : "J.Crew\nIP Transfer", h: 40, color: "bg-rose-400" },
                { year: "2018", label: ko ? "PetSmart\n가치 이전 블로커" : "PetSmart\nValue Transfer", h: 55, color: "bg-orange-400" },
                { year: "2020", label: ko ? "Serta\n업티어 블로커" : "Serta\nUptier", h: 68, color: "bg-amber-400" },
                { year: "2020", label: ko ? "Envision\n자산 이전 블로커" : "Envision\nAsset Transfer", h: 75, color: "bg-yellow-400" },
                { year: "2024", label: ko ? "현재 표준\n(일부 허점 잔존)" : "Current Standard\n(gaps remain)", h: 80, color: "bg-yellow-500" },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center justify-end flex-1 min-w-0" style={{ height: "80px" }}>
                  <motion.div
                    className={`w-full rounded-t-sm ${bar.color}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.h }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                  />
                  <span className="text-[9px] text-gray-400 dark:text-gray-500 mt-1 text-center leading-tight whitespace-pre-line">
                    {bar.year}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {ko ? "* 바 높이 = 표준화된 Blocker 조항 누적 수준 (상대적). 시장이 진화할수록 더 많은 보호 조항이 추가됨." : "* Bar height = cumulative level of standardized blocker provisions (relative). Markets add more protections as they evolve."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 6: 실무 코버넌트 협상 ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 실무에서 코버넌트 협상은 어떻게 이루어지는가" : "6. How Covenant Negotiation Actually Works in Practice"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "코버넌트 협상은 PE 법무팀, 어레인저 IB, 기관 투자자 간의 3자 협상입니다. IB 애널리스트는 이 과정에서 '코버넌트 패키지 서머리'를 작성해 투자자에게 제공합니다."
              : "Covenant negotiation is a three-party process between PE legal teams, arranger IBs, and institutional investors. IB analysts prepare 'covenant package summaries' for investors throughout this process."}
          </p>

          {/* Participants */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                role: (ko: boolean) => ko ? "PE 법무팀" : "PE Legal Team",
                icon: "⚖️",
                duties: (ko: boolean) => ko
                  ? ["큰 바스켓, 넓은 카브아웃 요구", "Blocker 언어 최대한 약하게 협상", "비제한 자회사 지정 자유 확보", "FCCR 정의에 EBITDA add-back 최대화"]
                  : ["Demand large baskets, broad carve-outs", "Negotiate blocker language as weak as possible", "Secure free unrestricted subsidiary designation", "Maximize EBITDA add-backs in FCCR definition"],
                color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
              },
              {
                role: (ko: boolean) => ko ? "어레인저 IB" : "Arranger IB",
                icon: "🏦",
                duties: (ko: boolean) => ko
                  ? ["PE와 투자자 간 중개", "코버넌트 패키지 요약 CIM에 포함", "시장 조건에 맞는 코버넌트 '최적점' 제안", "투자자 피드백을 PE에 전달"]
                  : ["Intermediary between PE and investors", "Include covenant package summary in CIM", "Propose 'optimal' covenants for market conditions", "Channel investor feedback back to PE"],
                color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
              },
              {
                role: (ko: boolean) => ko ? "기관 투자자 (CLO/HY 펀드)" : "Institutional Investors (CLO/HY)",
                icon: "📊",
                duties: (ko: boolean) => ko
                  ? ["코버넌트 패키지 독립 분석", "핵심 조항 약하면 스프레드 확대 요구", "핫 마켓: 약한 조항 수용", "콜드 마켓: 강한 투자자 권리 요구"]
                  : ["Independent analysis of covenant package", "Demand spread widening if key provisions are weak", "Hot market: accept weak terms", "Cold market: push for strong investor rights"],
                color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
              },
            ].map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${p.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{p.icon}</span>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{p.role(ko)}</p>
                </div>
                <ul className="space-y-1.5">
                  {p.duties(ko).map((d: string, j: number) => (
                    <li key={j} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-1.5">
                      <span className="text-gray-400 shrink-0">•</span>{d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Hot vs Cold market table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "핫 마켓 vs 콜드 마켓 — 코버넌트 패키지 비교" : "Hot Market vs Cold Market — Covenant Package Comparison"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400 border-t border-gray-100 dark:border-gray-800">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5 text-emerald-600 dark:text-emerald-400">
                      🔥 {ko ? "핫 마켓" : "Hot Market"}
                    </th>
                    <th className="text-left px-4 py-2.5 text-blue-600 dark:text-blue-400">
                      ❄️ {ko ? "콜드 마켓" : "Cold Market"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {NEGOTIATION_TABLE.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.hot(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.cold(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analyst covenant summary */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-3">
              📋 {ko ? "애널리스트가 작성하는 '코버넌트 패키지 서머리'" : "The Analyst's 'Covenant Package Summary'"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "LevFin 딜에서 애널리스트는 투자자를 위해 5–10페이지짜리 코버넌트 서머리를 작성합니다. 단순히 인덴처를 요약하는 것이 아니라 '실질 차입 여력'과 '배당 여력'을 수치로 계산하는 작업입니다. 기관 투자자의 신용 분석팀은 이 서머리를 독립적으로 검증합니다."
                : "In a LevFin deal, analysts prepare a 5–10 page covenant summary for investors. This isn't a simple indenture summary — it's a quantification of 'real borrowing capacity' and 'real dividend capacity.' Institutional investors' credit analysis teams independently verify these summaries."}
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { n: "1", t: ko ? "RP 바스켓 총 가용 금액" : "Total RP basket available amount", d: ko ? "빌더 바스켓 현황, 고정 바스켓, 그로워 조건 계산" : "Builder basket status, fixed basket, grower calculation" },
                { n: "2", t: ko ? "실질 차입 여력" : "Real incremental debt capacity", d: ko ? "FCCR 기준 + 카브아웃 합산, 달러 금액으로 표시" : "FCCR headroom + aggregate carve-outs in dollar terms" },
                { n: "3", t: ko ? "비제한 자회사 지정 권리" : "Unrestricted sub designation rights", d: ko ? "가치 테스트 존재 여부, 지정 조건 상세" : "Value test existence, designation conditions in detail" },
                { n: "4", t: ko ? "Change of Control 정의" : "Change of Control definition", d: ko ? "101% put 트리거 조건, PE 매각 시 적용 여부" : "101% put trigger conditions, applicability on PE sale" },
                { n: "5", t: ko ? "J.Crew / Serta / Envision Blocker" : "J.Crew / Serta / Envision Blocker", d: ko ? "각 Blocker 언어 강도 평가, 허점 여부" : "Strength assessment of each blocker, remaining gaps" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: accent, color: "white" }}>{item.n}</span>
                    <div>
                      <p className="font-semibold text-xs text-gray-800 dark:text-gray-200 mb-0.5">{item.t}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">{item.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 7: 한국 코버넌트 환경 ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 코버넌트 환경 — 미국과 어떻게 다른가" : "7. Korean Covenant Environment — How It Differs from the US"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국에서 J.Crew형 루프홀이 나오지 않는 이유, 그리고 한국 PE 딜 코버넌트가 점차 국제 표준에 가까워지는 이유."
              : "Why J.Crew-style loopholes don't emerge in Korea, and why Korean PE deal covenants are gradually converging with international standards."}
          </p>
          <div className="space-y-4">
            {KOREA_COVENANT_CARDS.map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${card.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{card.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-2">{card.title(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{card.body(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🔭 {ko ? "한국 코버넌트 환경의 미래" : "The Future of Korean Covenant Practice"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "글로벌 LP가 한국 PE 딜에 공동 투자(Co-invest)하고, 골드만·JP모건이 어레인저로 참여하면서 크레딧 에그리먼트 품질이 급격히 높아지고 있습니다. 5년 후에는 한국 대형 PE 딜의 코버넌트 문서가 미국 LSTA 표준에 거의 수렴할 것으로 예상됩니다. 이는 한국 LevFin 법조계와 IB 애널리스트에게 새로운 전문 영역이 되고 있습니다."
                : "As global LPs co-invest in Korean PE deals and Goldman/JP Morgan join as arrangers, credit agreement quality is rapidly improving. Within five years, covenant documentation in large Korean PE deals is expected to largely converge with US LSTA standards. This is creating a new specialization area for Korean LevFin legal practitioners and IB analysts."}
            </p>
          </div>
        </motion.section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* ── References ───────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 딜 아카이브 연계 ── */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "이 챕터로 이해하는 실제 딜 — 코비넌트 현장" : "Real Deals That Illustrate These Covenants"}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/apollo-caesars`,
                initials: "APO",
                bg: "bg-blue-900",
                title: ko ? "아폴로 × 카이사르 (2008) — Cov-Lite 자산 이전 교과서" : "Apollo × Caesars (2008) — The Cov-Lite Asset Stripping Textbook",
                sub: ko
                  ? "유지 코비넌트 0개 → 자산 이전 자유 → 채권자 소송 $1.45B → Chapter 11"
                  : "Zero maintenance covenants → free asset transfers → $1.45B creditor suit → Chapter 11",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/jcrew-ip-transfer`,
                initials: "JCW",
                bg: "bg-rose-800",
                title: ko ? "J.Crew IP 이전 (2016) — Trap Door 교과서" : "J.Crew IP Transfer (2016) — The Trap Door Playbook",
                sub: ko
                  ? "비제한 자회사 IP 이전 → $250M 브랜드 담보 증발 → J.Crew Blocker 탄생"
                  : "IP moved to unrestricted sub → $250M brand collateral vanished → J.Crew Blocker standardized",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/elon-musk-twitter`,
                initials: "MUSK",
                bg: "bg-gray-900",
                title: ko ? "일론 머스크 × 트위터 (2022) — 언론 자유 클로즈" : "Elon Musk × Twitter (2022) — Free Speech Covenant Override",
                sub: ko
                  ? "Cov-Lite 구조, 정보공개 코비넌트 협상, SEC 공시 회피 구조"
                  : "Cov-Lite structure, disclosure covenant negotiations, SEC reporting avoidance",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/serta-simmons-uptier`,
                initials: "SSB",
                bg: "bg-red-800",
                title: ko ? "Serta Simmons 업티어 (2020) — Pro Rata 조항 위반 판결" : "Serta Simmons Uptier (2020) — Pro Rata Covenant Violation Ruling",
                sub: ko
                  ? "과반수 동의 업티어 → 5th Circuit 무효 → Serta Blocker 코비넌트 표준화"
                  : "Majority-lender uptier → 5th Circuit invalidates → Serta Blocker covenant standardized",
                span2: false,
              },
            ].map((d) => (
              <Link key={d.href} href={d.href} className={d.span2 ? "sm:col-span-2" : ""}>
                <div className="group flex gap-3 p-4 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-sm transition-all">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${d.bg} flex items-center justify-center`}>
                    <span className="text-white text-[8px] font-black">{d.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{d.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{d.sub}</p>
                  </div>
                  <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "코버넌트 구조: HY 인덴처 & 론 에그리먼트의 모든 것 | Deal Story"
            : "Covenant Architecture: Everything in a HY Indenture & Loan Agreement | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
