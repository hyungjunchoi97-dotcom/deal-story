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

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";

const DCM_SERIES = [
  { slug: "dcm-overview",              ch: 0,  title: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"       },
  { slug: "dcm-issuers",               ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"       },
  { slug: "dcm-investors",             ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"     },
  { slug: "dcm-bond-products",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 상품"          : "Ch.3 Products"      },
  { slug: "dcm-international-markets", ch: 4,  title: (ko: boolean) => ko ? "Ch.4 국제채"        : "Ch.4 Intl"          },
  { slug: "dcm-deal-process",          ch: 5,  title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"   : "Ch.5 Process"       },
  { slug: "dcm-pricing",               ch: 6,  title: (ko: boolean) => ko ? "Ch.6 프라이싱"      : "Ch.6 Pricing"       },
  { slug: "dcm-structure-regulation",  ch: 7,  title: (ko: boolean) => ko ? "Ch.7 구조·제도"     : "Ch.7 Regulation"    },
  { slug: "dcm-execution",             ch: 8,  title: (ko: boolean) => ko ? "Ch.8 실전 발행"     : "Ch.8 Execution"     },
  { slug: "dcm-liability-management",  ch: 9,  title: (ko: boolean) => ko ? "Ch.9 부채관리"      : "Ch.9 LM"            },
  { slug: "dcm-esg-green-bond",        ch: 10, title: (ko: boolean) => ko ? "Ch.10 ESG·녹색채권" : "Ch.10 ESG"          },
];
const thisCh = 10;

// ── ESG 채권 유형 ──────────────────────────────────────────────────────────────
const ESG_TYPES = [
  {
    type: (ko: boolean) => ko ? "그린본드 (Green Bond)" : "Green Bond",
    icon: "🌿",
    mechanism: (ko: boolean) => ko ? "사용처(Use of Proceeds)를 재생에너지·친환경 프로젝트로 제한" : "Use of Proceeds restricted to renewable energy / green projects",
    rateLink: (ko: boolean) => ko ? "쿠폰 고정 — UoP 미달 시 별도 패널티 없음" : "Fixed coupon — no penalty for UoP shortfall",
    greenwashing: "medium",
    bestFor: (ko: boolean) => ko ? "명확한 녹색 프로젝트 포트폴리오 보유 발행사" : "Issuers with clear portfolio of green projects",
    color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    type: (ko: boolean) => ko ? "소셜본드 (Social Bond)" : "Social Bond",
    icon: "🤝",
    mechanism: (ko: boolean) => ko ? "의료·저렴한 주택·교육 등 사회적 목적 프로젝트에 사용처 제한" : "Use of Proceeds for healthcare, affordable housing, education projects",
    rateLink: (ko: boolean) => ko ? "쿠폰 고정 — 사회적 성과 보고 의무" : "Fixed coupon — social impact reporting required",
    greenwashing: "low",
    bestFor: (ko: boolean) => ko ? "정부 기관·개발은행·복지 목적 발행사" : "Government agencies, development banks, welfare-focused issuers",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    type: (ko: boolean) => ko ? "서스테이너빌리티본드 (Sustainability Bond)" : "Sustainability Bond",
    icon: "🌱",
    mechanism: (ko: boolean) => ko ? "그린 + 소셜 복합 프로젝트에 사용처 제한" : "Use of Proceeds split between green and social projects",
    rateLink: (ko: boolean) => ko ? "쿠폰 고정" : "Fixed coupon",
    greenwashing: "medium",
    bestFor: (ko: boolean) => ko ? "환경·사회 복합 임팩트 추구 발행사" : "Issuers targeting combined environmental and social impact",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    type: (ko: boolean) => ko ? "서스테이너빌리티-링크드본드 (SLB)" : "Sustainability-Linked Bond (SLB)",
    icon: "🔗",
    mechanism: (ko: boolean) => ko ? "사용처 제한 없음. KPI 목표(SPT) 미달 시 쿠폰 스텝업(통상 +25~50bp)" : "No UoP restriction. Coupon steps up if KPI targets (SPT) missed (typically +25–50bp)",
    rateLink: (ko: boolean) => ko ? "KPI 연동 — SPT 미달 시 쿠폰 상승" : "KPI-linked — coupon rises if SPT missed",
    greenwashing: "high",
    bestFor: (ko: boolean) => ko ? "특정 녹색 프로젝트 없는 전환 기업 (제조·에너지·화학)" : "Transition companies without specific green projects (manufacturing, energy, chemicals)",
    color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    type: (ko: boolean) => ko ? "트랜지션본드 (Transition Bond)" : "Transition Bond",
    icon: "🏭",
    mechanism: (ko: boolean) => ko ? "탄소 집약 산업(철강·선박·항공)의 저탄소 전환 프로젝트 자금 조달" : "Finance low-carbon transition projects in carbon-intensive industries (steel, shipping, aviation)",
    rateLink: (ko: boolean) => ko ? "쿠폰 고정 — 전환 계획 명시 필수" : "Fixed coupon — credible transition plan required",
    greenwashing: "high",
    bestFor: (ko: boolean) => ko ? "단기 탈탄소화 불가능한 브라운 산업 발행사" : "Brown industry issuers that cannot decarbonize rapidly",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
];

// ── GBP 4 원칙 ─────────────────────────────────────────────────────────────────
const GBP_PILLARS = [
  {
    num: "①",
    title: (ko: boolean) => ko ? "사용처 (Use of Proceeds)" : "Use of Proceeds",
    desc: (ko: boolean) => ko
      ? "발행 자금은 사전 정의된 적격 녹색 카테고리 프로젝트에만 사용. 별도 계정 또는 추적 시스템으로 관리."
      : "Proceeds allocated exclusively to pre-defined eligible green project categories. Managed via dedicated account or tracking system.",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  },
  {
    num: "②",
    title: (ko: boolean) => ko ? "프로젝트 평가 프로세스 (Process for Project Evaluation)" : "Process for Project Evaluation",
    desc: (ko: boolean) => ko
      ? "발행사가 프로젝트 선정 기준, 환경 목표, 제외 기준을 사전 공시. 이 기준을 SPO 제공자가 검토."
      : "Issuer discloses project selection criteria, environmental objectives, and exclusion criteria upfront. SPO provider reviews these criteria.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    num: "③",
    title: (ko: boolean) => ko ? "자금 관리 (Management of Proceeds)" : "Management of Proceeds",
    desc: (ko: boolean) => ko
      ? "자금이 실제로 적격 프로젝트에 배정됐음을 추적. 미배정 잔액은 유동성 자산으로 임시 보유 가능."
      : "Track that proceeds are actually allocated to eligible projects. Unallocated balance may be held temporarily in liquid assets.",
    color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
  },
  {
    num: "④",
    title: (ko: boolean) => ko ? "보고 (Reporting)" : "Reporting",
    desc: (ko: boolean) => ko
      ? "연간 임팩트 보고서 발간. 자금 배정 현황 + 환경 성과(CO₂ 감축량, 재생에너지 용량 등) 정량 보고."
      : "Annual impact report. Disclose allocation status and quantitative environmental outcomes (CO₂ reduction, renewable capacity, etc.).",
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  },
];

// ── 적격 녹색 카테고리 ───────────────────────────────────────────────────────────
const GREEN_CATEGORIES = [
  { emoji: "☀️", label: (ko: boolean) => ko ? "재생에너지" : "Renewable Energy", example: (ko: boolean) => ko ? "태양광·풍력·수력" : "Solar, wind, hydro" },
  { emoji: "🏢", label: (ko: boolean) => ko ? "에너지 효율" : "Energy Efficiency", example: (ko: boolean) => ko ? "그린빌딩·스마트 그리드" : "Green buildings, smart grids" },
  { emoji: "🚆", label: (ko: boolean) => ko ? "친환경 교통" : "Clean Transportation", example: (ko: boolean) => ko ? "전기차·대중교통 인프라" : "EVs, public transit infrastructure" },
  { emoji: "💧", label: (ko: boolean) => ko ? "지속가능 수자원" : "Sustainable Water", example: (ko: boolean) => ko ? "오폐수 처리·수자원 보전" : "Wastewater treatment, water conservation" },
  { emoji: "🌊", label: (ko: boolean) => ko ? "기후변화 적응" : "Climate Adaptation", example: (ko: boolean) => ko ? "홍수 방지·해안 보호" : "Flood prevention, coastal protection" },
  { emoji: "🌳", label: (ko: boolean) => ko ? "생물다양성" : "Biodiversity", example: (ko: boolean) => ko ? "산림 보전·생태계 복원" : "Forest conservation, ecosystem restoration" },
  { emoji: "♻️", label: (ko: boolean) => ko ? "순환 경제" : "Circular Economy", example: (ko: boolean) => ko ? "재활용·폐기물 감소" : "Recycling, waste reduction" },
  { emoji: "🌾", label: (ko: boolean) => ko ? "친환경 농업" : "Sustainable Agriculture", example: (ko: boolean) => ko ? "유기농·정밀농업" : "Organic farming, precision agriculture" },
];

// ── SPO 제공자 ─────────────────────────────────────────────────────────────────
const SPO_PROVIDERS = [
  { name: "Sustainalytics", owner: "(Morningstar)", market: (ko: boolean) => ko ? "시장점유율 1위" : "#1 market share", focus: (ko: boolean) => ko ? "ESG 리서치 통합, 대형 IG 딜 다수" : "Integrated ESG research, dominant in IG deals", color: "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20" },
  { name: "ISS ESG", owner: "(ISS)", market: (ko: boolean) => ko ? "시장점유율 2위" : "#2 market share", focus: (ko: boolean) => ko ? "기관 의결권 연계 ESG. SLB 전문" : "Linked to institutional proxy voting. SLB specialist", color: "border-blue-300 bg-blue-50 dark:bg-blue-900/20" },
  { name: "Moody's ESG / V.E", owner: "(Moody's)", market: (ko: boolean) => ko ? "신용등급사 통합 ESG" : "Rating agency ESG integration", focus: (ko: boolean) => ko ? "신용 분석과 ESG 결합. 선진국 소버린·SSA" : "Credit + ESG combined. Developed market sovereigns, SSAs", color: "border-violet-300 bg-violet-50 dark:bg-violet-900/20" },
  { name: "CICERO", owner: "(Norway)", market: (ko: boolean) => ko ? "연구기관 기반" : "Research-based", focus: (ko: boolean) => ko ? "과학 기반 '온도 점수' 평가. 노르딕·유럽 소버린" : "Science-based 'temperature score.' Nordic and European sovereigns", color: "border-sky-300 bg-sky-50 dark:bg-sky-900/20" },
];

// ── 그린 프리미엄(Greenium) ────────────────────────────────────────────────────
const GREENIUM_DATA = [
  { segment: (ko: boolean) => ko ? "소버린 (선진국)" : "Sovereign (DM)", bpRange: "5 – 8bp", trend: "stable", color: "text-emerald-600 dark:text-emerald-400" },
  { segment: (ko: boolean) => ko ? "소버린 (EM·한국 포함)" : "Sovereign (EM incl. Korea)", bpRange: "3 – 5bp", trend: "growing", color: "text-teal-600 dark:text-teal-400" },
  { segment: (ko: boolean) => ko ? "SSA / 개발은행" : "SSA / Development Banks", bpRange: "4 – 7bp", trend: "stable", color: "text-blue-600 dark:text-blue-400" },
  { segment: (ko: boolean) => ko ? "IG 기업채" : "IG Corporate", bpRange: "2 – 5bp", trend: "shrinking", color: "text-violet-600 dark:text-violet-400" },
  { segment: (ko: boolean) => ko ? "SLB (모든 등급)" : "SLB (all ratings)", bpRange: "0 – 2bp", trend: "questionable", color: "text-amber-600 dark:text-amber-400" },
];

// ── 케이스 스터디: 한국 기획재정부 그린본드 ─────────────────────────────────────
const KOREA_CASE = {
  issuer: (ko: boolean) => ko ? "한국 기획재정부 (MOEF)" : "Korea Ministry of Economy and Finance (MOEF)",
  deal: "USD 500mn Green Sovereign Bond",
  tenor: "5Y",
  coupon: "2.875%",
  pricing: "T+65bp",
  spo: "Sustainalytics",
  greeniumBp: 3,
  coverRatio: "3.8×",
  esgShare: "42%",
  proceeds: [
    { category: (ko: boolean) => ko ? "재생에너지 (태양광·풍력)" : "Renewable Energy (solar, wind)", pct: 45 },
    { category: (ko: boolean) => ko ? "친환경 교통 (전기차·철도)" : "Clean Transportation (EV, rail)", pct: 30 },
    { category: (ko: boolean) => ko ? "에너지 효율 (그린빌딩)" : "Energy Efficiency (green buildings)", pct: 15 },
    { category: (ko: boolean) => ko ? "지속가능 수자원 관리" : "Sustainable Water Management", pct: 10 },
  ],
};

// ── Green vs SLB 비교 ──────────────────────────────────────────────────────────
const GREEN_VS_SLB = [
  { item: (ko: boolean) => ko ? "자금 사용" : "Use of Funds", green: (ko: boolean) => ko ? "특정 녹색 프로젝트 제한" : "Restricted to green projects", slb: (ko: boolean) => ko ? "일반 목적 (제한 없음)" : "General corporate purposes" },
  { item: (ko: boolean) => ko ? "쿠폰 구조" : "Coupon Structure", green: (ko: boolean) => ko ? "고정 쿠폰" : "Fixed coupon", slb: (ko: boolean) => ko ? "KPI 달성 실패 시 스텝업" : "Steps up if KPI/SPT missed" },
  { item: (ko: boolean) => ko ? "발행사 유연성" : "Issuer Flexibility", green: (ko: boolean) => ko ? "낮음 (프로젝트 제약)" : "Low (project constraint)", slb: (ko: boolean) => ko ? "높음 (운영 자유)" : "High (operational freedom)" },
  { item: (ko: boolean) => ko ? "그린워싱 리스크" : "Greenwashing Risk", green: (ko: boolean) => ko ? "낮음 (추적 가능)" : "Lower (trackable)", slb: (ko: boolean) => ko ? "높음 (SPT 불충분 시)" : "Higher (if SPT insufficiently ambitious)" },
  { item: (ko: boolean) => ko ? "ESG 투자자 선호" : "ESG Investor Preference", green: (ko: boolean) => ko ? "그린본드 펀드 편입 가능" : "Green bond fund eligible", slb: (ko: boolean) => ko ? "일부 ESG 펀드 제외" : "Excluded from some ESG funds" },
  { item: (ko: boolean) => ko ? "적합한 발행사" : "Best Fit", green: (ko: boolean) => ko ? "소버린·개발은행·유틸리티" : "Sovereign, dev bank, utilities", slb: (ko: boolean) => ko ? "제조·화학·탄소집약 산업" : "Manufacturing, chemicals, heavy industry" },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "Greenium(그린 프리미엄)이 실재하나요? 얼마나 됩니까?"
      : "Is the Greenium real? How large is it?",
    a: (ko: boolean) => ko
      ? "실증적으로 존재는 하지만 규모와 안정성은 논란입니다. IG 소버린·SSA에서 가장 뚜렷하게 관찰되며 5–8bp 수준입니다. IG 기업채는 2–5bp, SLB는 0–2bp로 더 불분명합니다. Greenium의 원천은 ESG 전용 펀드의 구조적 수요 초과입니다 — 그린본드를 의무 편입해야 하는 그린 펀드·SRI 펀드가 있어 일반 채권보다 수요가 더 몰립니다. 그러나 공급이 늘면서 Greenium은 점차 축소되는 추세입니다."
      : "Empirically it exists but its size and stability are debated. Most visible in IG sovereign/SSA at 5–8bp. IG corporate is 2–5bp; SLB is 0–2bp and less clear. The source is structural excess demand from dedicated ESG funds — green bond funds and SRI funds with green bond mandates create concentrated demand. But as supply grows, the greenium is gradually compressing.",
  },
  {
    q: (ko: boolean) => ko
      ? "SPO(Second Party Opinion)는 꼭 받아야 하나요? 비용이 얼마나 드나요?"
      : "Is a Second Party Opinion mandatory? How much does it cost?",
    a: (ko: boolean) => ko
      ? "법적 의무는 아니지만 사실상 표준(de facto standard)입니다. SPO 없는 그린본드는 'Self-certified'로 투자자 신뢰가 낮고 ESG 펀드 편입이 어렵습니다. 비용은 딜 규모와 복잡성에 따라 다르지만, 일반적으로 USD 50,000–150,000 수준입니다. 대형 소버린·SSA 딜은 USD 100,000 이상도 있습니다. 전체 발행 비용에서 비중이 매우 작기 때문에 대부분 발행사가 SPO를 획득합니다."
      : "Not legally required but de facto standard. Bonds without SPO are 'self-certified' — lower investor credibility and difficult to include in ESG funds. Costs vary by deal size and complexity, typically USD 50,000–150,000. Large sovereign/SSA deals can exceed USD 100,000. As a fraction of total issuance costs it's very small, so most issuers obtain SPO.",
  },
  {
    q: (ko: boolean) => ko
      ? "SLB의 쿠폰 스텝업이 투자자에게 유리한 건가요? 왜 많이 발행되나요?"
      : "Is the SLB coupon step-up good for investors? Why are they popular?",
    a: (ko: boolean) => ko
      ? "투자자에게는 이론상 유리합니다 — KPI 미달 시 더 높은 쿠폰을 받으니까요. 하지만 실무상 스텝업(+25–50bp)이 충분하지 않다는 비판이 많습니다. 발행사에게 유리한 이유는 명확합니다: 사용처 제한이 없어 운영 유연성이 유지됩니다. 특히 탄소 집약 산업(철강·화학)처럼 녹색 프로젝트가 마땅치 않은 기업들이 많이 씁니다. 그러나 SPT 목표가 너무 낮게 설정되는 '그린워싱' 문제가 지속적으로 제기되어 투자자 스크루티니가 높아지고 있습니다."
      : "Theoretically favorable — investors get higher coupon if KPI missed. In practice, the step-up (+25–50bp) is widely criticized as insufficient compensation. Popular with issuers because there's no UoP restriction — operational flexibility is preserved. Especially common for carbon-intensive industries (steel, chemicals) with no obvious green projects. However, 'SPT ambition' (greenwashing via low targets) is a persistent concern, driving increased investor scrutiny.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 발행사의 그린본드 발행이 늘어난 배경은 무엇인가요?"
      : "What's behind the growth of Korean issuer green bond issuance?",
    a: (ko: boolean) => ko
      ? "세 가지 드라이버가 있습니다. ① 규제 환경: 환경부 녹색채권 가이드라인(2020), 금융위원회 K-택소노미(2022) 정비로 발행 프레임워크가 명확해졌습니다. ② 투자자 수요: 글로벌 ESG 펀드가 한국 IG 발행사 그린본드를 적극 수요합니다. MSCI 한국 편입으로 글로벌 자금 유입 확대. ③ Greenium: 일반 채권 대비 3–5bp 저렴한 조달 비용이 경제적 인센티브입니다. 주요 발행사: MOEF(첫 소버린 그린, 2019), KDB, KEXIM, SK, LG 에너지솔루션."
      : "Three drivers. ① Regulation: Korea's MOE Green Bond Guidelines (2020) and FSC K-Taxonomy (2022) clarified the issuance framework. ② Investor demand: global ESG funds actively seek Korean IG green bonds; MSCI Korea inclusion brings broader global flows. ③ Greenium: 3–5bp cheaper funding versus conventional bonds is a direct economic incentive. Key issuers: MOEF (first sovereign green, 2019), KDB, KEXIM, SK, LG Energy Solution.",
  },
  {
    q: (ko: boolean) => ko
      ? "그린워싱을 어떻게 판별합니까? 뱅커로서 어떤 기준을 봐야 하나요?"
      : "How do you identify greenwashing? What should a banker look for?",
    a: (ko: boolean) => ko
      ? "네 가지 레드 플래그를 확인하세요. ① 추가성(Additionality) 부재: '이 프로젝트가 그린본드 없었어도 실행됐을 것이냐?' 발행 자금이 이미 진행 중인 프로젝트에 소급 배정되는 경우. ② SPO 미획득 또는 자체 인증: 독립 검토 없는 자기 선언. ③ SPT 목표 불충분: SLB에서 업계 평균 이하의 KPI, 또는 이미 달성 예정인 목표. ④ 보고 부재: 자금 배정 이후 연간 임팩트 보고서를 내지 않는 경우. 실무상 뱅커는 SPO 내용과 발행사 실제 ESG 전략이 일치하는지 확인해야 합니다."
      : "Four red flags to check. ① No additionality: 'Would this project have been funded anyway?' Watch for proceeds retroactively allocated to already-progressing projects. ② No SPO or self-certification: no independent review. ③ Insufficiently ambitious SPT: in SLBs, KPI targets below industry average or already-on-track metrics. ④ No reporting: failure to publish annual impact reports post-allocation. Practically, bankers must verify that SPO content aligns with the issuer's actual ESG strategy.",
  },
];

const SOURCES = [
  { id: 1, author: "ICMA", title: "Green Bond Principles 2021 — Voluntary Process Guidelines", url: "https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/", source: "ICMA, 2021" },
  { id: 2, author: "ICMA", title: "Sustainability-Linked Bond Principles 2020", url: "https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/sustainability-linked-bond-principles-slbp/", source: "ICMA, 2020" },
  { id: 3, author: "환경부", title: "한국형 녹색채권 가이드라인", url: "https://www.me.go.kr/", source: "환경부, 2020" },
  { id: 4, author: "금융위원회", title: "한국형 녹색분류체계(K-택소노미)", url: "https://www.fsc.go.kr/", source: "FSC, 2022" },
  { id: 5, author: "Climate Bonds Initiative", title: "Sustainable Debt — Global State of the Market 2023", url: "https://www.climatebonds.net/resources/reports/sustainable-debt-global-state-market-2023", source: "CBI, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function DcmEsgGreenBondClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}${base}/dcm-esg-green-bond`;
  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1)!;
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1) ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Series Nav */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {DCM_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-teal-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-teal-400 hover:text-teal-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>DCM · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko ? "ESG·녹색채권 실무: GBP·Greenium·SLB vs 그린본드" : "ESG & Green Bonds in Practice: GBP, Greenium, SLB vs Green Bond"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "ESG 채권 시장은 2023년 기준 누적 발행 4조 달러를 돌파했습니다. 그린본드와 SLB의 구조적 차이, Greenium이 실제로 얼마나 되는지, SPO를 누가 어떻게 제공하는지 — 그리고 그린워싱을 어떻게 구별하는지. 한국 기획재정부 그린 소버린 케이스로 실전을 풀어냅니다."
              : "The ESG bond market surpassed $4 trillion cumulative issuance by 2023. The structural differences between green bonds and SLBs, how large the greenium actually is, who provides SPOs and how — and how to identify greenwashing. Unpacked through the Korea MOEF green sovereign case study."}
          </p>
        </motion.div>

        {/* Section 1: ESG Bond Types */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. ESG 채권 5가지 유형 — 무엇이 다른가" : "1. Five ESG Bond Types — What's Different"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "\"ESG 채권\"은 하나의 상품이 아닙니다. 자금 사용 구조, 쿠폰 연동 방식, 그린워싱 리스크가 유형마다 크게 다릅니다."
              : "\"ESG bond\" is not a single product. Use of proceeds structure, coupon linkage, and greenwashing risk differ substantially by type."}
          </p>
          <div className="space-y-4">
            {ESG_TYPES.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${t.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-2">{t.type(ko)}</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-wide text-[10px]">{ko ? "구조" : "Mechanism"}: </span>
                        <span className="text-gray-700 dark:text-gray-300">{t.mechanism(ko)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-wide text-[10px]">{ko ? "쿠폰" : "Rate"}: </span>
                        <span className="text-gray-700 dark:text-gray-300">{t.rateLink(ko)}</span>
                      </div>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${t.badge}`}>
                      ✦ {ko ? "적합 발행사" : "Best for"}: {t.bestFor(ko)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 2: GBP 4 Pillars */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 그린본드 원칙 (GBP) — 4가지 기둥" : "2. Green Bond Principles (GBP) — Four Pillars"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "ICMA가 관리하는 Green Bond Principles(GBP)은 그린본드 발행의 자발적 표준이지만, 글로벌 시장에서 사실상 강제 기준입니다."
              : "The ICMA-administered Green Bond Principles (GBP) are voluntary but de facto mandatory for market credibility globally."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {GBP_PILLARS.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl p-4 ${p.color}`}>
                <div className="flex items-start gap-3">
                  <span className="font-black text-xl shrink-0" style={{ color: accent }}>{p.num}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1.5">{p.title(ko)}</p>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{p.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Eligible categories */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "GBP 2021 적격 녹색 카테고리 (8개)" : "GBP 2021 Eligible Green Categories (8)"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {GREEN_CATEGORIES.map((c, i) => (
                <div key={i} className="flex flex-col items-center text-center p-2">
                  <span className="text-2xl mb-1">{c.emoji}</span>
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-0.5">{c.label(ko)}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500">{c.example(ko)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Green vs SLB */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 그린본드 vs SLB — 실전 비교" : "3. Green Bond vs SLB — Practical Comparison"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "발행사가 가장 많이 묻는 질문: \"그린본드를 해야 하나요, SLB를 해야 하나요?\" 핵심 차이를 표로 정리합니다."
              : "The most common issuer question: 'Should we do a green bond or SLB?' The key differences:"}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-3 text-emerald-600 dark:text-emerald-400">
                      🌿 {ko ? "그린본드" : "Green Bond"}
                    </th>
                    <th className="text-left px-4 py-3 text-violet-600 dark:text-violet-400">
                      🔗 SLB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {GREEN_VS_SLB.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.green(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.slb(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Section 4: SPO Providers */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. SPO 제공자 — 누가 검증하는가" : "4. SPO Providers — Who Verifies?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "Second Party Opinion(SPO) 제공자는 그린본드 프레임워크의 환경적 신뢰성을 독립 검토합니다. 시장에는 4개 주요 기관이 있습니다."
              : "SPO providers independently review the environmental credibility of a green bond framework. Four major players dominate the market."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SPO_PROVIDERS.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${p.color}`}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="font-black text-base text-gray-900 dark:text-gray-50">{p.name}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">{p.owner}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-2 py-0.5 shrink-0">
                    {p.market(ko)}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{p.focus(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 5: Greenium */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. Greenium — 실제로 얼마나 저렴한가" : "5. Greenium — How Much Cheaper, Really?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "그린본드의 발행 비용이 일반 채권보다 저렴한 현상을 'Greenium(Green Premium)'이라 부릅니다. 세그먼트별로 차이가 있습니다."
              : "The lower funding cost of green bonds versus conventional bonds is called the 'Greenium.' It varies significantly by segment."}
          </p>
          <div className="space-y-3 mb-6">
            {GREENIUM_DATA.map((g, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{g.segment(ko)}</span>
                  <div className="flex items-center gap-3">
                    <span className={`font-black text-lg font-mono ${g.color}`}>{g.bpRange}</span>
                    <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${
                      g.trend === "stable" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                      g.trend === "growing" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" :
                      g.trend === "shrinking" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                      "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                    }`}>
                      {g.trend === "stable" ? (ko ? "안정" : "Stable") :
                       g.trend === "growing" ? (ko ? "확대" : "Growing") :
                       g.trend === "shrinking" ? (ko ? "축소" : "Shrinking") :
                       (ko ? "불분명" : "Unclear")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 px-4 py-3">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-1.5">💡 {ko ? "실무 관점" : "Practitioner Perspective"}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Greenium이 가장 큰 소버린·SSA 세그먼트를 제외하면, 기업채에서는 2–5bp 절감이 SPO 비용·보고 비용·프레임워크 구축 비용과 크게 차이 나지 않을 수 있습니다. 그러나 ESG 전용 투자자 베이스 접근, 오더북 다양성 확보, ESG 등급 향상 등 비재무적 효과를 감안하면 대부분의 IG 발행사에게 그린 포맷은 전략적으로 합리적입니다."
                : "Outside the sovereign/SSA segment with the largest greenium, the 2–5bp cost saving for corporates may barely cover SPO, reporting, and framework costs. However, accounting for access to dedicated ESG investor pools, book diversification, and ESG rating improvement, the green format makes strategic sense for most IG issuers even when the pure cost saving is marginal."}
            </p>
          </div>
        </motion.section>

        {/* Section 6: Korea MOEF Case Study */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 케이스 스터디 — 한국 기획재정부 그린 소버린" : "6. Case Study — Korea MOEF Green Sovereign"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2019년 한국 기획재정부가 아시아 최초 그린 소버린 달러채를 발행했습니다. 이 딜이 이후 한국 ESG 채권 시장의 기준이 됐습니다."
              : "In 2019, Korea's MOEF issued the first green sovereign dollar bond in Asia. This deal became the benchmark for Korea's ESG bond market."}
          </p>
          <div className="rounded-xl border-2 border-emerald-300 dark:border-emerald-700 bg-white dark:bg-gray-900 p-6 mb-4">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{ko ? "딜 개요" : "Deal Summary"}</p>
                <div className="space-y-1.5 text-sm">
                  {[
                    { label: ko ? "발행사" : "Issuer", value: KOREA_CASE.issuer(ko) },
                    { label: ko ? "딜 구조" : "Structure", value: KOREA_CASE.deal },
                    { label: ko ? "만기" : "Tenor", value: KOREA_CASE.tenor },
                    { label: ko ? "쿠폰" : "Coupon", value: KOREA_CASE.coupon },
                    { label: ko ? "스프레드" : "Spread", value: KOREA_CASE.pricing },
                    { label: "SPO", value: KOREA_CASE.spo },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-0.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200 text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{ko ? "자금 배정 (Use of Proceeds)" : "Use of Proceeds"}</p>
                <div className="space-y-2">
                  {KOREA_CASE.proceeds.map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{p.category(ko)}</span>
                        <span className="font-bold text-gray-800 dark:text-gray-200">{p.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-4 text-center">
              {[
                { label: ko ? "Greenium" : "Greenium", value: `−${KOREA_CASE.greeniumBp}bp`, sub: ko ? "일반채 대비" : "vs conventional" },
                { label: ko ? "커버리지" : "Coverage", value: KOREA_CASE.coverRatio, sub: ko ? "수요 초과" : "oversubscribed" },
                { label: ko ? "ESG 투자자" : "ESG Investors", value: KOREA_CASE.esgShare, sub: ko ? "오더북 비중" : "of order book" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-black text-xl font-mono text-emerald-600 dark:text-emerald-400">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">🌏 {ko ? "시장적 의의" : "Market Significance"}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "이 딜은 단순한 자금 조달을 넘어 한국 ESG 채권 시장의 첫 벤치마크가 됐습니다. 이후 KDB·KEXIM·한국전력·대기업들이 그린본드를 발행하는 기반이 됐고, 한국 소버린이 ESG 프레임워크를 구축했다는 신호가 글로벌 투자자들에게 전달됐습니다. 발행 후 그린 소버린 세컨더리는 일반 외평채 대비 지속적으로 타이트하게 거래되며 Greenium이 발행 시점 이후에도 유지됐습니다."
                : "This deal went beyond funding — it became the first benchmark for Korea's ESG bond market. It paved the way for KDB, KEXIM, KEPCO, and Korean corporates to issue green bonds, and signaled to global investors that Korea had established an ESG framework. In secondary, the green sovereign has consistently traded tighter than conventional 외평채, confirming the greenium persists post-issuance."}
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* References */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <ShareButtons
          title={ko ? "DCM Ch.10 — ESG·녹색채권 실무: GBP·Greenium·SLB vs 그린본드 | Deal Story" : "DCM Ch.10 — ESG & Green Bonds in Practice | Deal Story"}
          lang={lang}
        />

        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("dcm-esg-green-bond");
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
    </div>
  );
}
