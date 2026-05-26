"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine, LineChart, Line,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

const ACCENT = "#6366f1";
const ACCENT_LIGHT = "#eef2ff";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const LBO_SERIES = [
  { slug: "lbo-overview",          ch: 0, title: (ko: boolean) => ko ? "LBO의 본질"          : "What Is LBO?"      },
  { slug: "lbo-capital-structure", ch: 1, title: (ko: boolean) => ko ? "Ch.1 자본구조 해부"   : "Ch.1 Capital Stack" },
  { slug: "lbo-returns",           ch: 2, title: (ko: boolean) => ko ? "Ch.2 리턴 분석"       : "Ch.2 Return Math"  },
  { slug: "lbo-deal-process",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 딜 프로세스"     : "Ch.3 Deal Process" },
];
const THIS_CH = 3;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {LBO_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
          return (
            <Link key={ch.slug} href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${isCurrent ? "text-white" : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              style={isCurrent ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Deal Timeline Steps ───────────────────────────────────────────────────────
const DEAL_STEPS = [
  {
    phase: (ko: boolean) => ko ? "1. Origination & Screening" : "1. Origination & Screening",
    duration: (ko: boolean) => ko ? "상시 진행" : "Ongoing",
    desc: (ko: boolean) => ko
      ? "PE 펀드는 상시적으로 잠재 타겟을 발굴한다. IB 제안서(Pitch), 경매 프로세스 참여, 전략적 대화, 재무보고서 분석, 업종 전문가 네트워크 활용. '좋은 딜은 경쟁 입찰 전에 발굴된다'는 것이 탑-쿼타일 PE의 원칙."
      : "PE funds continuously scout potential targets. IB pitches, participation in auction processes, strategic conversations, financial report analysis, industry expert networks. 'Great deals are sourced before the competitive auction' is a top-quartile PE principle.",
    color: "#94a3b8",
    icon: "🔍",
  },
  {
    phase: (ko: boolean) => ko ? "2. Initial Due Diligence & IOI" : "2. Initial Due Diligence & IOI",
    duration: (ko: boolean) => ko ? "2–4주" : "2–4 weeks",
    desc: (ko: boolean) => ko
      ? "CIM(Confidential Information Memorandum) 검토. 초기 LBO 모델 구축 → Entry 가정·Exit 시나리오·레버리지 감당 여부 확인. IOI(Indication of Interest) 제출."
      : "Review CIM (Confidential Information Memorandum). Build initial LBO model → confirm entry assumptions, exit scenarios, leverage serviceability. Submit IOI (Indication of Interest).",
    color: "#6366f1",
    icon: "📋",
  },
  {
    phase: (ko: boolean) => ko ? "3. Deep DD & Management Presentation" : "3. Deep DD & Management Presentation",
    duration: (ko: boolean) => ko ? "3–6주" : "3–6 weeks",
    desc: (ko: boolean) => ko
      ? "재무·법무·세무·환경·기술 실사. 경영진 미팅 (Management Presentation). 경쟁사·공급망·고객 분석. 운영 개선 계획(Value Creation Plan) 구체화."
      : "Financial, legal, tax, environmental, and technical due diligence. Management Presentation meetings. Competitor/supply chain/customer analysis. Concrete Value Creation Plan development.",
    color: "#8b5cf6",
    icon: "🔬",
  },
  {
    phase: (ko: boolean) => ko ? "4. Financing & Final Bid" : "4. Financing & Final Bid",
    duration: (ko: boolean) => ko ? "2–4주" : "2–4 weeks",
    desc: (ko: boolean) => ko
      ? "레버드론·HY채권 인수은행(Underwriting Bank) 확정. Commitment Letters 수령. 최종 LBO 모델로 최종 입찰가 산정. SPA(주식매매계약) 협상. 최종 입찰."
      : "Confirm leveraged loan and HY bond underwriting banks. Receive commitment letters. Final LBO model → final bid price. SPA (stock purchase agreement) negotiation. Final bid submission.",
    color: "#0ea5e9",
    icon: "💼",
  },
  {
    phase: (ko: boolean) => ko ? "5. Signing & Syndication" : "5. Signing & Syndication",
    duration: (ko: boolean) => ko ? "1–2주" : "1–2 weeks",
    desc: (ko: boolean) => ko
      ? "SPA 서명. 인수은행이 인수한 레버드론·HY채권을 기관투자자들에게 신디케이션(배분). Syndication은 채권단 구성의 핵심 단계."
      : "SPA signing. Underwriting banks syndicate the leveraged loans and HY bonds to institutional investors. Syndication is the critical step that assembles the creditor group.",
    color: "#10b981",
    icon: "✍️",
  },
  {
    phase: (ko: boolean) => ko ? "6. Closing" : "6. Closing",
    duration: (ko: boolean) => ko ? "규제 승인 후 (보통 3–6개월 후)" : "After regulatory approval (typically 3–6 months post-signing)",
    desc: (ko: boolean) => ko
      ? "독점금지(Anti-trust)·외국인투자(CFIUS 등) 규제 승인. 조건 충족 확인. 자금 조달 완료 + 주식 이전. 포트폴리오 컴퍼니 운영 이전."
      : "Anti-trust and foreign investment (CFIUS etc.) regulatory clearance. Condition satisfaction. Full funding + share transfer. Portfolio company operational transition.",
    color: "#f59e0b",
    icon: "🏁",
  },
];

// ── Sources & Uses Example ────────────────────────────────────────────────────
const SOURCES_USES = {
  sources: [
    { label: (ko: boolean) => ko ? "Term Loan B (1순위 담보)" : "Term Loan B (1st Lien)", amount: 4200, pct: 42, color: ACCENT },
    { label: (ko: boolean) => ko ? "Term Loan A + RCF" : "Term Loan A + RCF", amount: 1500, pct: 15, color: "#0ea5e9" },
    { label: (ko: boolean) => ko ? "Senior Notes (HY채권)" : "Senior Notes (HY Bond)", amount: 2000, pct: 20, color: "#8b5cf6" },
    { label: (ko: boolean) => ko ? "PE 자기자본" : "PE Equity", amount: 2300, pct: 23, color: "#6b7280" },
  ],
  uses: [
    { label: (ko: boolean) => ko ? "기존 주주 매수가" : "Purchase Price (to Sellers)", amount: 8500, pct: 85, color: "#374151" },
    { label: (ko: boolean) => ko ? "기존 부채 상환" : "Debt Repayment (Existing)", amount: 800, pct: 8, color: "#6b7280" },
    { label: (ko: boolean) => ko ? "트랜잭션 비용" : "Transaction Fees & Costs", amount: 500, pct: 5, color: "#9ca3af" },
    { label: (ko: boolean) => ko ? "운전자본/기타" : "Working Capital / Other", amount: 200, pct: 2, color: "#d1d5db" },
  ],
};

// ── Maturity Wall Data ────────────────────────────────────────────────────────
const MATURITY_WALL_2023 = [
  { year: "2023", amount: 180 }, { year: "2024", amount: 290 }, { year: "2025", amount: 420 },
  { year: "2026", amount: 380 }, { year: "2027", amount: 310 }, { year: "2028", amount: 230 },
];

// ── Interest Rate Risk ────────────────────────────────────────────────────────
const SOFR_DATA = [
  { date: "2021Q1", sofr: 0.05 }, { date: "2021Q3", sofr: 0.05 }, { date: "2022Q1", sofr: 0.20 },
  { date: "2022Q2", sofr: 1.50 }, { date: "2022Q3", sofr: 3.00 }, { date: "2022Q4", sofr: 4.30 },
  { date: "2023Q1", sofr: 4.80 }, { date: "2023Q2", sofr: 5.30 }, { date: "2023Q3", sofr: 5.33 },
  { date: "2024Q1", sofr: 5.33 }, { date: "2024Q3", sofr: 4.90 }, { date: "2025Q1", sofr: 4.30 },
];

// ── Failure Case Studies ──────────────────────────────────────────────────────
const FAILURE_CASES = [
  {
    name: "KKR·TPG / TXU (Energy Future Holdings)",
    year: 2007,
    size: "$45B",
    outcome: (ko: boolean) => ko ? "2014년 파산 — 역대 최대 PE 파산" : "2014 bankruptcy — largest PE bankruptcy ever",
    debtAtEntry: 87,
    debtEbitda: 8.5,
    why: (ko: boolean) => ko
      ? "셰일혁명으로 천연가스 가격 70% 폭락 → 전기요금 수익 붕괴. 2007년 KKR·TPG가 세운 가정: 천연가스 가격 $8–10/MMBtu 유지. 실제 결과: $2–4/MMBtu 폭락. 레버리지가 높은 상황에서 핵심 수익 가정이 무너지면 자기자본은 완전 소멸한다."
      : "Shale revolution crashed natural gas prices by 70% → power revenue collapsed. Entry assumption: gas prices hold at $8–10/MMBtu. Actual: prices crashed to $2–4/MMBtu. With high leverage, when core revenue assumptions break, equity is completely wiped out.",
    lesson: (ko: boolean) => ko
      ? "LBO Entry 가정의 취약성이 가장 치명적인 리스크. 원자재 가격·규제 환경처럼 외부 요인에 민감한 비즈니스는 LBO에 적합하지 않다."
      : "Fragility of LBO entry assumptions is the most lethal risk. Businesses sensitive to external factors like commodity prices and regulatory regimes are poor LBO candidates.",
    verdict: "failed",
    color: "border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-900/10",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    link: null,
  },
  {
    name: "KKR·Vornado·Bain / Toys\"R\"Us",
    year: 2005,
    size: "$6.6B",
    outcome: (ko: boolean) => ko ? "2017년 파산 — 12년 만에 청산" : "2017 bankruptcy — liquidation after 12 years",
    debtAtEntry: 80,
    debtEbitda: 6.8,
    why: (ko: boolean) => ko
      ? "Amazon·Target 온라인 경쟁 급부상. 매년 $400–500M의 이자 비용으로 디지털 전환 투자 불가. 상대방은 경쟁력 강화에 투자하는데 Toys\"R\"Us는 이자 내기도 바빴다. 레버리지가 전략 실행 능력을 옥죄는 전형적 패턴."
      : "Amazon and Target's e-commerce rise. $400–500M annual interest payments made digital investment impossible. Competitors invested in competitive capabilities while Toys\"R\"Us struggled to service debt. Classic pattern: leverage strangling strategic execution capacity.",
    lesson: (ko: boolean) => ko
      ? "플랫폼 경쟁(Amazon)이 등장하면 레버리지가 높은 기업은 재투자 능력이 없어 경쟁에서 낙오된다. LBO 후에도 전략적 투자 여력이 남아있어야 한다."
      : "When platform competition (Amazon) emerges, heavily leveraged companies lack reinvestment capacity and fall behind. Even after an LBO, there must be headroom for strategic investment.",
    verdict: "failed",
    color: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    link: null,
  },
  {
    name: "Apollo / Caesars Entertainment",
    year: 2008,
    size: "$30B",
    outcome: (ko: boolean) => ko ? "2015년 파산 신청" : "2015 bankruptcy filing",
    debtAtEntry: 89,
    debtEbitda: 9.2,
    why: (ko: boolean) => ko
      ? "GFC로 라스베이거스 카지노 방문객·도박 매출 급감. 극도로 높은 레버리지(Debt/EBITDA ~10x) + 카지노 업황 민감성 = 치명적 조합. Apollo는 부동산 분할·운영권 재구성 등 복잡한 구조조정을 시도했으나 부채 규모를 감당하지 못했다."
      : "GFC slashed Las Vegas casino visitors and gambling revenue. Extreme leverage (~10x Debt/EBITDA) + casino operating sensitivity = lethal combination. Apollo attempted complex restructuring (real estate separation, operating splits) but couldn't manage the debt load.",
    lesson: (ko: boolean) => ko
      ? "경기 민감 업종 + 극단적 레버리지는 위험한 조합. 카지노·호텔·소매업처럼 경기에 민감한 업종은 안전 마진을 더 크게 확보해야 한다."
      : "Cyclical industry + extreme leverage = dangerous combination. Economy-sensitive sectors like casinos, hotels, and retail require much larger safety margins in LBO structuring.",
    verdict: "failed",
    color: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    link: null,
  },
  {
    name: "KKR / Alliance Boots (2007)",
    year: 2007,
    size: "£11.1B",
    outcome: (ko: boolean) => ko ? "성공 — 2014년 Walgreens에 매각 (MOIC ~2.4x)" : "Success — sold to Walgreens 2014 (MOIC ~2.4x)",
    debtAtEntry: 72,
    debtEbitda: 6.5,
    why: (ko: boolean) => ko
      ? "영국 최대 약국 체인. GFC에도 불구하고 의약품·건강보험 수요는 방어적 — 경기와 무관한 반복 구매. 운영 효율화 + 유럽 확장 성공."
      : "UK's largest pharmacy chain. Despite the GFC, pharmaceutical/healthcare demand remained defensive — recurring purchases independent of the economic cycle. Operational efficiency + European expansion successful.",
    lesson: (ko: boolean) => ko
      ? "방어적 수요(필수 의약품)가 있는 업종은 GFC에서도 현금흐름이 유지된다. 같은 2007 빈티지라도 업종 선택이 결과를 결정했다."
      : "Sectors with defensive demand (essential medicines) maintain cash flows through the GFC. Same 2007 vintage — sector selection determined the outcome.",
    verdict: "success",
    color: "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    link: null,
  },
];

// ── Rate Risk Chart — Interest Cost Impact ───────────────────────────────────
const RATE_IMPACT = [
  { sofr: 0.1,  cost: 3.6, label: "2021 (SOFR 0.1%)" },
  { sofr: 2.0,  cost: 5.5, label: "2022 mid (SOFR 2%)" },
  { sofr: 4.0,  cost: 7.5, label: "2022 end (SOFR 4%)" },
  { sofr: 5.3,  cost: 8.8, label: "2023 peak (SOFR 5.3%)" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "LBO 딜 프로세스에서 Due Diligence가 왜 그렇게 중요한가요?" : "Why is due diligence so critical in the LBO deal process?",
    a: (ko: boolean) => ko
      ? "LBO는 인수 대금의 60–70%를 부채로 충당하기 때문에, 예상보다 EBITDA가 낮거나 현금흐름이 불안정하면 즉시 부채 상환 불능 위기로 이어질 수 있습니다. 재무 DD에서는 정상 EBITDA(Normalized EBITDA) — 일회성 항목을 제거한 실질 수익력 — 을 검증하고, EBITDA 조정 가능성(Add-back)의 타당성을 검토합니다. 법무 DD에서는 계약·소송 리스크·IP를, 상업 DD에서는 시장·경쟁·고객 집중도를 분석합니다. 잘못된 가정이 있으면 Exit 때 손실로 이어지기 때문에, DD는 '사기 예방'이 아니라 '수익 보호'의 관점에서 수행됩니다."
      : "Because 60–70% of the acquisition price is debt-funded, if actual EBITDA is lower than expected or cash flows are unstable, debt service failure can hit immediately. Financial DD validates Normalized EBITDA — actual earning power after removing one-time items — and scrutinizes the legitimacy of EBITDA add-backs. Legal DD covers contracts, litigation, and IP. Commercial DD analyzes market, competition, and customer concentration. Since flawed assumptions become exit losses, DD is performed as 'return protection,' not merely 'fraud prevention.'",
  },
  {
    q: (ko: boolean) => ko ? "Maturity Wall이 왜 PE 포트폴리오에 위협이 되나요?" : "Why does a maturity wall threaten PE portfolios?",
    a: (ko: boolean) => ko
      ? "LBO 부채는 7–10년 만기로 일시상환(Bullet Repayment) 구조가 많습니다. 특정 연도에 대규모 만기가 집중되면 '만기장벽(Maturity Wall)'이 형성됩니다. 이때 ① 자본시장 환경이 좋으면 차환(Refinancing)으로 만기를 연장하면 되지만, ② 금리 상승기·신용 시장 경색기에는 차환 비용이 폭증하거나 차환 자체가 불가능해집니다. 2008–2009년 Maturity Wall은 GFC로 인한 신용 경색과 겹쳐 대규모 LBO 부도로 이어졌고, 2023–2025년에도 유사한 Maturity Wall이 형성됐습니다 — 이번엔 SOFR 5%대의 고금리 환경과 함께."
      : "LBO debt is predominantly structured as bullet repayment at maturity (7–10 years). When large maturities concentrate in a specific year, a 'maturity wall' forms. ① If capital market conditions are favorable, refinancing extends the maturity — no problem. ② But in rising rate environments or credit market stress, refinancing costs explode or become impossible. The 2008–2009 maturity wall coincided with GFC-driven credit freeze, triggering massive LBO defaults. A similar wall formed in 2023–2025 — this time amid SOFR at 5%+.",
  },
  {
    q: (ko: boolean) => ko ? "금리 인상이 LBO 포트폴리오에 어떤 영향을 미쳤나요?" : "How did rate hikes impact LBO portfolios?",
    a: (ko: boolean) => ko
      ? "레버드론은 변동금리(SOFR + Spread) 구조입니다. SOFR이 0.05%(2021년)에서 5.33%(2023년 peak)로 폭등하면서, Spread 350bp 기준 TLB 금리가 약 3.55% → 8.83%로 올랐습니다. $1B 부채를 보유한 포트폴리오 컴퍼니라면 연간 이자 비용이 $35.5M → $88.3M으로 $52.8M 폭증했습니다. EBITDA가 동일하다면 DSCR이 급락하고, 코버넌트 위반·추가 이자 지급 불능으로 이어집니다. 2022–2024년 사이 많은 Cov-Lite 대출의 조용한 재무 악화가 진행됐고, 이는 향후 추가 구조조정·파산으로 이어질 가능성이 있습니다."
      : "Leveraged loans are floating rate (SOFR + Spread). SOFR surged from 0.05% (2021) to 5.33% (2023 peak), pushing a TLB at SOFR+350bp from ~3.55% to ~8.83%. A portfolio company with $1B of debt saw annual interest costs jump from $35.5M to $88.3M — a $52.8M explosion. Unchanged EBITDA means DSCR crashes, potentially triggering covenant violations or inability to service interest. Between 2022–2024, quiet financial deterioration occurred in many Cov-Lite loans — likely to surface as further restructurings or bankruptcies ahead.",
  },
  {
    q: (ko: boolean) => ko ? "TXU와 Hilton은 같은 2007 빈티지인데 왜 결과가 달랐나요?" : "TXU and Hilton were both 2007 vintage — why did they have opposite outcomes?",
    a: (ko: boolean) => ko
      ? "세 가지 핵심 차이: ① 비즈니스 모델의 회복력 — Hilton은 호텔 브랜드(소비자 선호, 로열티 프로그램)이라 경기 침체에도 회복 가능했지만, TXU는 원자재 가격(천연가스)에 수익이 직결돼 셰일혁명 앞에 속수무책이었다. ② 보유 기간 — Blackstone은 11년을 보유하며 GFC를 버텼지만, KKR·TPG는 TXU의 수익 구조가 회복 불능임을 인정해야 했다. ③ 실물 자산 담보 — Hilton의 $18B 호텔 포트폴리오는 담보가 있었고, 부동산 가치 상승이 레버리지 위기를 상쇄했다. 전력회사의 발전소 자산은 규제 환경이 바뀌면 가치가 급락한다."
      : "Three key differences: ① Business model resilience — Hilton hotels (consumer preference, loyalty program) could recover through recession cycles, but TXU's revenue was directly tied to commodity prices (natural gas) — helpless against the shale revolution. ② Hold period — Blackstone held 11 years and survived the GFC, while KKR·TPG had to acknowledge TXU's revenue model was non-recoverable. ③ Physical asset collateral — Hilton's $18B hotel portfolio had collateral, and real estate appreciation offset the leverage crisis. Power plant assets collapse in value when the regulatory environment shifts.",
  },
  {
    q: (ko: boolean) => ko ? "PE 실무에서 LBO 모델의 핵심 가정은 무엇인가요?" : "What are the core assumptions in an LBO model?",
    a: (ko: boolean) => ko
      ? "LBO 모델은 크게 6개 블록으로 구성됩니다: ① Entry 가정 (Entry Multiple, Purchase Price, Sources & Uses), ② 운영 가정 (EBITDA 성장률, CapEx, 운전자본 변화), ③ 자본구조 (각 트랜치 금리, 상환 스케줄, PIK 여부), ④ FCF & 부채 상환 (EBITDA → FCF → 부채 상환 경로), ⑤ Exit 가정 (Exit Multiple, 보유 기간), ⑥ 리턴 계산 (MOIC, IRR). 가장 민감한 가정은 Entry/Exit Multiple과 EBITDA 성장률입니다 — 이 둘이 10%씩 변하면 IRR이 3–5%p 변동합니다. 실무에서는 반드시 하방 시나리오(EBITDA 20–30% 하락 + Exit Multiple 1–2x 하락)를 테스트합니다."
      : "An LBO model has six main blocks: ① Entry assumptions (Entry Multiple, Purchase Price, Sources & Uses), ② Operating assumptions (EBITDA growth, CapEx, working capital changes), ③ Capital structure (rate per tranche, amortization schedule, PIK election), ④ FCF & debt service (EBITDA → FCF → debt paydown path), ⑤ Exit assumptions (Exit Multiple, hold period), ⑥ Return calculation (MOIC, IRR). The most sensitive assumptions are Entry/Exit Multiple and EBITDA growth rate — a 10% change in each moves IRR by 3–5pp. In practice, always test downside scenarios (20–30% EBITDA decline + 1–2x lower exit multiple).",
  },
];

const SOURCES = [
  { id: 1, text: "Kaplan, S.N. & Stein, J. (1993). The Evolution of Buyout Pricing and Financial Structure. Quarterly Journal of Economics." },
  { id: 2, text: "Reuters. (2014). Energy Future Holdings Files for Bankruptcy: The Largest LBO Bust. Reuters News." },
  { id: 3, text: "SEC Filing. (2017). Toys\"R\"Us Chapter 11 Bankruptcy — Disclosure Statement." },
  { id: 4, text: "Moody's. (2023). Leveraged Finance Maturity Wall — 2023-2027 Analysis." },
  { id: 5, text: "CME Group. (2024). SOFR Rate Historical Data 2021–2024." },
  { id: 6, text: "Bain & Company. (2024). Global Private Equity Report — Deal Process & Risk Management." },
  { id: 7, text: "Pitchbook. (2024). PE Buyout Credit Analysis — Post-Rate-Hike Portfolio Stress." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function LboDealProcessClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-indigo-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-indigo-600 transition-colors">딜 101</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101/lbo-overview" : "/en/deal-101/lbo-overview"} className="hover:text-indigo-600 transition-colors">LBO</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "딜 프로세스" : "Deal Process"}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>LBO</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>Ch.3 — Final</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{concept.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex flex-wrap gap-1.5 mt-4">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>{tag}</span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }} className="mt-4 flex items-center gap-2">
              <Link href="/deal-101/lbo-deal-process" className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`} style={ko ? { background: ACCENT } : {}}>한국어</Link>
              <Link href="/en/deal-101/lbo-deal-process" className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`} style={!ko ? { background: ACCENT } : {}}>English</Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Ch.1: LBO 딜 타임라인 ═══════════════════════════════════════════ */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LBO 딜 타임라인 — Origination부터 Closing까지" : "LBO Deal Timeline — From Origination to Closing"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "LBO 딜은 서명에서 Closing까지 3–6개월이 걸리지만, 그 전에 수개월~수년에 걸친 소싱·초기 분석 과정이 있다. 전체 프로세스를 이해하는 것이 실무 PE 분석의 출발점이다.",
                "가장 중요한 단계는 초기 단계에 있다 — 좋은 타겟을 남보다 먼저 발굴하고(Proprietary Deal Sourcing), 정확한 가치 평가(LBO 모델)로 적정 가격을 산정하는 것이다. 경쟁 입찰에서 이기려면 남들보다 타겟을 더 잘 알거나, 더 나은 융자 조건을 확보해야 한다.",
              ] : [
                "An LBO deal takes 3–6 months from signing to closing, but before that comes months or years of sourcing and preliminary analysis. Understanding the full process is the starting point for practical PE analysis.",
                "The most critical phases are the earliest ones — finding targets before others (proprietary deal sourcing) and accurately valuing them through LBO models. Winning competitive auctions requires either superior target knowledge or better financing terms than competitors.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Timeline Steps */}
            <motion.div variants={stagger} className="space-y-3">
              {DEAL_STEPS.map((step, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ background: step.color + "20" }}>
                      {step.icon}
                    </div>
                    {i < DEAL_STEPS.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2 mb-0" style={{ background: step.color + "40", minHeight: "20px" }} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{step.phase(ko)}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: step.color }}>
                        {step.duration(ko)}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Ch.2: Sources & Uses ══════════════════════════════════════════════ */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Sources & Uses — LBO 딜의 자금 지도" : "Sources & Uses — The LBO Funding Map"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "LBO 딜 구조를 이해하는 핵심 도구가 Sources & Uses 테이블이다. 'Sources'는 딜을 위한 자금을 어디서 가져왔는지(TLB, TLA, HY Bond, PE Equity), 'Uses'는 그 자금을 어디에 썼는지(매수가, 기존 부채 상환, 수수료 등)를 보여준다.",
                "Sources = Uses는 항등식이다 — 차이가 있으면 딜이 성립하지 않는다. IB 애널리스트의 가장 기본적인 체크는 Sources와 Uses가 맞아떨어지는지 확인하는 것이다.",
              ] : [
                "The Sources & Uses table is the key tool for understanding LBO deal structure. 'Sources' shows where funding comes from (TLB, TLA, HY Bond, PE Equity). 'Uses' shows where that funding goes (purchase price, existing debt repayment, fees, etc.).",
                "Sources = Uses is an identity — any discrepancy means the deal doesn't work. The most basic check for an IB analyst is confirming Sources and Uses balance.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Sources & Uses Table */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
                {/* Sources */}
                <div>
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-[12px] font-bold text-gray-900 dark:text-gray-100">
                      {ko ? "자금 조달 (Sources)" : "Sources of Funds"}
                    </h3>
                    <p className="text-[10px] text-gray-500">Total: $10,000M</p>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {SOURCES_USES.sources.map((s, i) => (
                      <div key={i} className="px-4 py-2.5 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: s.color }} />
                        <div className="flex-1">
                          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300">{s.label(ko)}</p>
                          <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-1 overflow-hidden">
                            <motion.div className="h-full rounded-full" style={{ background: s.color }}
                              initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} />
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300">${(s.amount / 1000).toFixed(1)}B</p>
                          <p className="text-[10px] text-gray-400">{s.pct}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uses */}
                <div>
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-[12px] font-bold text-gray-900 dark:text-gray-100">
                      {ko ? "자금 사용처 (Uses)" : "Uses of Funds"}
                    </h3>
                    <p className="text-[10px] text-gray-500">Total: $10,000M</p>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {SOURCES_USES.uses.map((u, i) => (
                      <div key={i} className="px-4 py-2.5 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: u.color }} />
                        <div className="flex-1">
                          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300">{u.label(ko)}</p>
                          <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-1 overflow-hidden">
                            <motion.div className="h-full rounded-full" style={{ background: u.color }}
                              initial={{ width: 0 }} whileInView={{ width: `${u.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} />
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300">${(u.amount / 1000).toFixed(1)}B</p>
                          <p className="text-[10px] text-gray-400">{u.pct}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeUp(0.12)} className="text-[11px] text-gray-400 dark:text-gray-500 mt-2 px-1">
              {ko ? "* 가상 $10B LBO 딜 예시. Entry EV/EBITDA 8.5x, Total Leverage 3.3x." : "* Hypothetical $10B LBO deal example. Entry EV/EBITDA 8.5x, Total Leverage 3.3x."}
            </motion.p>
          </motion.section>

          {/* ══ Ch.3: Maturity Wall ═══════════════════════════════════════════════ */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "만기장벽(Maturity Wall) & 금리 리스크" : "Maturity Wall & Interest Rate Risk"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "LBO 부채는 대부분 만기 일시상환(Bullet Repayment)이다. 2005–2007년에 발행된 대규모 LBO 부채들이 7–10년 뒤인 2012–2014년에 대거 만기를 맞이하면서 최초의 대형 Maturity Wall이 형성됐다. 당시는 GFC 이후 신용 시장 회복으로 차환이 가능했다.",
                "역사는 반복됐다. 2019–2021년의 저금리 시대에 발행된 LBO 부채들이 2024–2026년에 만기를 맞이한다. 그런데 이번엔 SOFR이 5%대로 올라있다. 차환 비용이 폭증했고, 일부 포트폴리오 컴퍼니는 기존 부채를 더 높은 금리로 차환하거나, 차환 자체가 불가능해 Distressed 상황에 처했다.",
                "2023–2025년 레버드론 시장의 Maturity Wall은 약 $2조(글로벌)에 달하는 것으로 추산된다. 이 중 상당 부분이 Cov-Lite — 조기 경보 없이 조용히 악화되다가 갑작스럽게 파산할 가능성이 있다.",
              ] : [
                "LBO debt is predominantly bullet repayment at maturity. The first major Maturity Wall formed in 2012–2014 as large LBO debts from 2005–2007 came due. GFC-era credit market recovery allowed successful refinancing.",
                "History repeated. LBO debts issued during the 2019–2021 low-rate era are maturing in 2024–2026. But now SOFR is at 5%+. Refinancing costs have exploded, and some portfolio companies face higher-rate refinancings or distressed situations where refinancing itself is impossible.",
                "The 2023–2025 leveraged loan Maturity Wall is estimated at ~$2 trillion globally. A significant portion is Cov-Lite — quietly deteriorating with no early warning, at risk of sudden bankruptcy.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Maturity Wall + SOFR Charts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {ko ? "레버드론 만기 집중 (2023–2028, 가상)" : "Leveraged Loan Maturity Wall (2023–2028, stylized)"}
                </h3>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={MATURITY_WALL_2023} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `$${v}B`} width={40} />
                    <Tooltip formatter={(v) => [`$${v}B`, ko ? "만기 도래" : "Maturing"]} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                    <Bar dataKey="amount" radius={[3, 3, 0, 0]}>
                      {MATURITY_WALL_2023.map((d, i) => (
                        <Cell key={i} fill={d.amount >= 400 ? "#ef4444" : d.amount >= 280 ? "#f59e0b" : ACCENT} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div variants={fadeUp(0.15)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {ko ? "SOFR 급등이 LBO 이자 비용에 미친 충격" : "SOFR Surge & LBO Interest Cost Impact"}
                </h3>
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={SOFR_DATA} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#6b7280" }} interval={2} />
                    <YAxis domain={[0, 6]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} width={35} />
                    <Tooltip formatter={(v) => [`${Number(v).toFixed(2)}%`, "SOFR"]} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                    <ReferenceLine y={0.05} stroke="#94a3b8" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="sofr" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 2, fill: "#ef4444" }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-[10px] text-gray-400 mt-1">
                  {ko ? "TLB SOFR+350bp 기준: 2021년 3.55% → 2023년 peak 8.88%" : "TLB at SOFR+350bp: 3.55% in 2021 → peak 8.88% in 2023"}
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ══ Ch.4: 실패 케이스 심층 분석 ════════════════════════════════════════ */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실패와 성공 — 4개 케이스스터디 심층 분석" : "Failure & Success — 4 Case Studies in Depth"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "LBO는 레버리지로 수익을 증폭시키지만, 레버리지는 실수도 증폭시킨다. 동일한 2007년에 실행된 딜들이 완전히 다른 결과를 낳은 이유를 비교하는 것이 리스크 분석의 본질이다.",
                "핵심 질문: '이 비즈니스가 내가 생각하는 것과 다르게 작동할 때, 레버리지가 살아남을 수 있는가?' 부도 예방이 아니라 Downside Resilience — 하방 충격에서 살아남는 능력이 LBO 성패를 가른다.",
              ] : [
                "LBO amplifies returns through leverage — but leverage also amplifies mistakes. Comparing deals executed in the same year (2007) that produced opposite outcomes is the essence of risk analysis.",
                "The key question: 'If this business performs differently from my expectations, can the leverage survive?' Not bankruptcy prevention, but Downside Resilience — the ability to survive negative shocks — is what separates successful LBOs from failures.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            <motion.div variants={stagger} className="space-y-4">
              {FAILURE_CASES.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.07)} className={`rounded-xl border p-5 ${c.color}`}>
                  <div className="flex items-start gap-3 mb-3 flex-wrap">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                      {c.verdict === "success" ? (ko ? "✓ 성공" : "✓ Success") : (ko ? "✗ 실패" : "✗ Failed")}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400">
                      {c.size} · {c.year} · {ko ? "레버리지" : "Leverage"} {c.debtEbitda}x
                    </span>
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">{c.name}</h3>
                  <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 mb-2 italic">&ldquo;{c.outcome(ko)}&rdquo;</p>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{c.why(ko)}</p>
                  <div className="rounded-lg p-3 bg-white/60 dark:bg-gray-900/60">
                    <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-0.5">{ko ? "핵심 교훈" : "Key Lesson"}</p>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{c.lesson(ko)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Hilton vs TXU side-by-side comparison */}
            <motion.div variants={fadeUp(0.3)} className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                  {ko ? "Hilton vs TXU — 같은 해, 다른 결말의 핵심 차이" : "Hilton vs TXU — Same Year, Opposite Outcomes: Key Differences"}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr style={{ background: ACCENT + "10" }}>
                      <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">{ko ? "항목" : "Item"}</th>
                      <th className="py-3 px-4 text-left font-bold text-emerald-600 dark:text-emerald-400">Hilton (성공)</th>
                      <th className="py-3 px-4 text-left font-bold text-rose-600 dark:text-rose-400">TXU (실패)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      {
                        item: (ko: boolean) => ko ? "비즈니스 모델" : "Business Model",
                        hilton: (ko: boolean) => ko ? "브랜드 호텔 (반복 방문, 로열티)" : "Branded hotel (repeat visits, loyalty)",
                        txu: (ko: boolean) => ko ? "전력회사 (가스 가격에 직결)" : "Electric utility (tied to gas prices)",
                      },
                      {
                        item: (ko: boolean) => ko ? "핵심 리스크" : "Core Risk",
                        hilton: (ko: boolean) => ko ? "경기 침체 (단기적)" : "Recession (cyclical, recoverable)",
                        txu: (ko: boolean) => ko ? "원자재 가격 붕괴 (구조적)" : "Commodity price collapse (structural)",
                      },
                      {
                        item: (ko: boolean) => ko ? "실물 자산 담보" : "Physical Asset Collateral",
                        hilton: (ko: boolean) => ko ? "$18B 호텔 포트폴리오 (가치 상승)" : "$18B hotel portfolio (appreciated)",
                        txu: (ko: boolean) => ko ? "발전소 (가스값 하락 시 가치 급락)" : "Power plants (value collapsed with gas)",
                      },
                      {
                        item: (ko: boolean) => ko ? "수익 회복 가능성" : "Recovery Potential",
                        hilton: (ko: boolean) => ko ? "높음 — 관광 수요는 회복됨" : "High — travel demand recovered",
                        txu: (ko: boolean) => ko ? "없음 — 셰일 구조는 되돌릴 수 없었음" : "None — shale revolution was permanent",
                      },
                      {
                        item: (ko: boolean) => ko ? "Exit 결과" : "Exit Outcome",
                        hilton: (ko: boolean) => ko ? "2013년 IPO, 2018년 완전 Exit (MOIC 2.6x)" : "IPO 2013, full exit 2018 (MOIC 2.6x)",
                        txu: (ko: boolean) => ko ? "2014년 $42B 파산 신청" : "$42B bankruptcy filing 2014",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">{row.item(ko)}</td>
                        <td className="py-3 px-4 text-emerald-700 dark:text-emerald-300">{row.hilton(ko)}</td>
                        <td className="py-3 px-4 text-rose-700 dark:text-rose-300">{row.txu(ko)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />
          </div>

          {/* ══ Ch.5: LBO 리스크 체크리스트 ════════════════════════════════════════ */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LBO 리스크 체크리스트 — PE MD가 딜 전에 확인하는 항목" : "LBO Risk Checklist — What PE MDs Check Before Committing"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  category: (ko: boolean) => ko ? "비즈니스 리스크" : "Business Risk",
                  icon: "🏢",
                  color: "border-blue-200 dark:border-blue-800",
                  items: [
                    (ko: boolean) => ko ? "핵심 가정이 외부 요인(원자재·규제)에 노출되어 있지 않은가?" : "Are core assumptions exposed to external factors (commodities, regulation)?",
                    (ko: boolean) => ko ? "경기 침체 시 EBITDA가 얼마나 하락하는가? (-30% 시나리오)" : "How much does EBITDA decline in recession? (-30% scenario)",
                    (ko: boolean) => ko ? "고객 집중도 — 상위 3 고객이 매출의 50% 이상인가?" : "Customer concentration — do top 3 customers exceed 50% of revenue?",
                    (ko: boolean) => ko ? "플랫폼 경쟁 리스크 — Amazon·구글 등이 진입 가능한가?" : "Platform competition risk — can Amazon/Google enter?",
                  ],
                },
                {
                  category: (ko: boolean) => ko ? "레버리지 리스크" : "Leverage Risk",
                  icon: "💰",
                  color: "border-indigo-200 dark:border-indigo-800",
                  items: [
                    (ko: boolean) => ko ? "Debt/EBITDA 최악 시나리오에서 코버넌트 위반 가능성?" : "Covenant violation risk in worst-case Debt/EBITDA scenario?",
                    (ko: boolean) => ko ? "DSCR > 1.2x 유지 가능한 EBITDA 하락 한계점은?" : "EBITDA decline limit to maintain DSCR > 1.2x?",
                    (ko: boolean) => ko ? "만기 집중 여부 — 3년 내 대규모 만기가 있는가?" : "Maturity concentration — large maturities within 3 years?",
                    (ko: boolean) => ko ? "금리 상승 시나리오 (+200bp) 이자 비용 영향은?" : "Interest cost impact in +200bp rate scenario?",
                  ],
                },
                {
                  category: (ko: boolean) => ko ? "Exit 리스크" : "Exit Risk",
                  icon: "🚪",
                  color: "border-amber-200 dark:border-amber-800",
                  items: [
                    (ko: boolean) => ko ? "IPO·전략적 매각·Secondary PE 등 Exit 옵션이 다양한가?" : "Multiple exit options: IPO, strategic sale, secondary PE?",
                    (ko: boolean) => ko ? "Exit Multiple이 Entry보다 낮아질 가능성은? (시장 침체 시)" : "Risk of Exit Multiple below Entry in market downturn?",
                    (ko: boolean) => ko ? "유사 기업의 최근 Exit 배수 트렌드는?" : "Recent exit multiple trends for comparable companies?",
                    (ko: boolean) => ko ? "5–7년 후 업종 환경 변화 예측은?" : "Sector outlook in 5–7 years?",
                  ],
                },
                {
                  category: (ko: boolean) => ko ? "실행 리스크" : "Execution Risk",
                  icon: "⚙️",
                  color: "border-emerald-200 dark:border-emerald-800",
                  items: [
                    (ko: boolean) => ko ? "Value Creation Plan이 구체적이고 실행 가능한가?" : "Is the Value Creation Plan specific and achievable?",
                    (ko: boolean) => ko ? "경영진이 PE 목표에 정렬되어 있는가? (MIP 구조)" : "Is management aligned with PE goals? (MIP structure in place?)",
                    (ko: boolean) => ko ? "운영 개선을 위한 PE 팀의 실질적 전문성이 있는가?" : "Does the PE team have actual operational expertise in this sector?",
                    (ko: boolean) => ko ? "Carve-out인 경우 독립 운영 인프라가 준비됐는가?" : "If carve-out, is standalone operational infrastructure ready?",
                  ],
                },
              ].map((section, si) => (
                <motion.div key={si} variants={fadeUp(si * 0.07)} className={`rounded-xl border p-4 ${section.color} bg-white dark:bg-gray-900`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{section.icon}</span>
                    <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{section.category(ko)}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="mt-0.5 w-3.5 h-3.5 rounded-full border-2 flex-shrink-0" style={{ borderColor: ACCENT }} />
                        {item(ko)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Series Completion ════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div
              variants={fadeUp()}
              className="rounded-xl p-6 text-center border-2"
              style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}
            >
              <p className="text-2xl mb-3">🎓</p>
              <h3 className="text-[16px] font-bold mb-2" style={{ color: ACCENT }}>
                {ko ? "LBO 101 시리즈 완료" : "LBO 101 Series Complete"}
              </h3>
              <p className="text-[13px] text-gray-700 dark:text-gray-600 leading-relaxed mb-4 max-w-lg mx-auto">
                {ko
                  ? "Ch.0에서 LBO의 본질·레버리지 수학, Ch.1에서 자본구조 완전 해부, Ch.2에서 리턴 분석 수학, Ch.3에서 딜 프로세스와 실패 케이스까지 — LBO의 전체 프레임워크를 마스터했습니다."
                  : "Ch.0 covered LBO fundamentals and leverage math. Ch.1 dissected the capital stack. Ch.2 analyzed return mathematics. Ch.3 walked through deal process and failure cases — you've mastered the complete LBO framework."}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href={ko ? "/deals/blackstone-hilton-2007" : "/deals/blackstone-hilton-2007"}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                  style={{ background: ACCENT }}>
                  🏨 {ko ? "Hilton LBO 딜 상세 분석 →" : "Hilton LBO Full Deal Analysis →"}
                </Link>
                <Link href={ko ? "/deal-101" : "/en/deal-101"}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-gray-50"
                  style={{ borderColor: ACCENT, color: ACCENT }}>
                  {ko ? "← 딜 101 목록으로" : "← Back to Deal 101"}
                </Link>
              </div>
            </motion.div>
          </motion.section>

          {/* ══ FAQ ════════════════════════════════════════════════════════════════ */}
          <motion.section id="faq" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ko ? "자주 묻는 질문" : "Frequently Asked Questions"}</h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ══ Series Nav ════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <div className="flex flex-wrap gap-3">
              <Link href={ko ? "/deal-101/lbo-returns" : "/en/deal-101/lbo-returns"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                ← {ko ? "Ch.2 — 리턴 분석" : "Ch.2 — Return Analysis"}
              </Link>
              <Link href={ko ? "/deal-101/lbo-overview" : "/en/deal-101/lbo-overview"}
                className="text-[12px] px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 transition-colors">
                {ko ? "↩ Ch.0 — LBO의 본질 (처음으로)" : "↩ Ch.0 — What Is LBO? (Start over)"}
              </Link>
            </div>
          </motion.section>

          {/* ══ Sources ════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <motion.h3 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4">{ko ? "참고 자료" : "References"}</motion.h3>
            <motion.ol variants={stagger} className="space-y-2">
              {SOURCES.map((s) => (
                <motion.li key={s.id} variants={fadeUp()} className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2">
                  <span className="font-bold flex-shrink-0">[{s.id}]</span>
                  <span>{s.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          <div className="flex justify-end pb-4">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
