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
const accent = "#ef4444"; // red-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  ch: 0, title: (ko: boolean) => ko ? "구조화금융 개요"    : "Overview"          },
  { slug: "structured-abs",       ch: 1, title: (ko: boolean) => ko ? "Ch.1 ABS"           : "Ch.1 ABS"          },
  { slug: "structured-clo",       ch: 2, title: (ko: boolean) => ko ? "Ch.2 CLO"           : "Ch.2 CLO"          },
  { slug: "structured-cmbs",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 CMBS"          : "Ch.3 CMBS"         },
  { slug: "structured-waterfall", ch: 4, title: (ko: boolean) => ko ? "Ch.4 워터폴·트랑쉐"  : "Ch.4 Waterfall"    },
  { slug: "structured-cdo",       ch: 5, title: (ko: boolean) => ko ? "Ch.5 CDO·합성CDO"   : "Ch.5 CDO"          },
  { slug: "structured-cases",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 케이스스터디"   : "Ch.6 Case Studies" },
];
const thisCh = 5;

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "$5,000억+",
    label: (ko: boolean) => ko ? "CDO 관련 손실 (2008 위기)" : "CDO-Related Losses (2008 Crisis)",
    note: (ko: boolean) => ko ? "전 세계 금융기관의 CDO 직간접 손실 추정액" : "Estimated global financial institution CDO direct and indirect losses",
    color: "bg-red-500",
  },
  {
    value: "$22조",
    label: (ko: boolean) => ko ? "2008 위기 총 비용 (미국 GDP 대비)" : "Total 2008 Crisis Cost (vs US GDP)",
    note: (ko: boolean) => ko ? "가계 순자산 손실, 실업, 세수 감소 포함 추정" : "Includes household net worth losses, unemployment, tax revenue decline",
    color: "bg-rose-500",
  },
  {
    value: "70%",
    label: (ko: boolean) => ko ? "CDO AAA 등급 → 정크 강등 비율 (6개월)" : "CDO AAA → Junk Downgrade Rate (6 months)",
    note: (ko: boolean) => ko ? "2008년 위기 당시 CDO AAA 트랑쉐의 대량 강등" : "Mass downgrade of CDO AAA tranches during 2008 crisis",
    color: "bg-orange-500",
  },
];

// ── CDO vs ABS Comparison ─────────────────────────────────────────────────────
const CDO_VS_ABS = [
  { item: (ko: boolean) => ko ? "담보 자산" : "Collateral", cdo: (ko: boolean) => ko ? "다른 증권(ABS·RMBS·CDO 트랑쉐)" : "Other securities (ABS, RMBS, CDO tranches)", abs: (ko: boolean) => ko ? "실물 대출(모기지·카드·자동차)" : "Physical loans (mortgage, card, auto)" },
  { item: (ko: boolean) => ko ? "증권화 단계" : "Securitization Layer", cdo: (ko: boolean) => ko ? "2차 이상 (재증권화)" : "2nd layer or beyond (re-securitization)", abs: (ko: boolean) => ko ? "1차 (원 자산 직접 증권화)" : "1st layer (direct securitization of underlying)" },
  { item: (ko: boolean) => ko ? "리스크 연결 구조" : "Risk Transmission", cdo: (ko: boolean) => ko ? "복잡. 원 자산 → ABS → CDO → CDO² 연결" : "Complex. Underlying → ABS → CDO → CDO² chain", abs: (ko: boolean) => ko ? "단순. 원 자산 성과가 직접 ABS에 반영" : "Simple. Underlying performance directly reflects in ABS" },
  { item: (ko: boolean) => ko ? "투명성" : "Transparency", cdo: (ko: boolean) => ko ? "매우 낮음. 담보가 다른 증권이라 원 자산 추적 어려움" : "Very low. Collateral is other securities; tracing underlying is hard", abs: (ko: boolean) => ko ? "중간~높음. 원 자산 데이터 공개" : "Medium–high. Underlying asset data disclosed" },
  { item: (ko: boolean) => ko ? "2008년 역할" : "2008 Role", cdo: (ko: boolean) => ko ? "위기의 핵심 폭탄. BBB RMBS → AAA CDO 변환이 위기 원인" : "Core bomb of crisis. BBB RMBS → AAA CDO conversion caused catastrophe", abs: (ko: boolean) => ko ? "RMBS ABS도 부실화, CDO보다 먼저 신호 나타남" : "RMBS ABS also distressed, showed signals earlier than CDO" },
];

// ── Synthetic CDO Mechanics ────────────────────────────────────────────────────
const SYNTHETIC_MECHANICS = [
  {
    step: 1,
    title: (ko: boolean) => ko ? "CDS 계약 체결" : "CDS Contract Entry",
    detail: (ko: boolean) => ko ? "합성 CDO는 실제 모기지가 없습니다. 대신 투자은행이 모기지 포트폴리오에 대한 CDS(신용부도스왑)를 매입합니다. 실물 자산 없이 리스크만 합성적으로 이전하는 것입니다." : "Synthetic CDO has no actual mortgages. Instead, an investment bank purchases CDS (credit default swaps) on a mortgage portfolio. Only the risk is synthetically transferred — no physical assets change hands.",
    icon: "📝",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
  {
    step: 2,
    title: (ko: boolean) => ko ? "CDO SPV가 보장 매도자 역할" : "CDO SPV Acts as Protection Seller",
    detail: (ko: boolean) => ko ? "CDO SPV가 CDS의 '보장 매도자'(Protection Seller)가 됩니다. 포트폴리오에서 손실이 나면 SPV가 투자은행에 손실을 배상해야 합니다. SPV는 이 의무를 투자자에게 전가합니다." : "The CDO SPV becomes the 'protection seller' in the CDS. If losses occur in the portfolio, the SPV must compensate the investment bank. The SPV passes this obligation to investors through the tranche structure.",
    icon: "🏛️",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
  },
  {
    step: 3,
    title: (ko: boolean) => ko ? "레버리지 증폭 — 실물의 수배" : "Leverage Amplification — Multiple of Physical",
    detail: (ko: boolean) => ko ? "합성 CDO의 핵심 위험: 실제 모기지가 없기 때문에 동일한 모기지 풀에 여러 개의 합성 CDO를 동시에 연결할 수 있습니다. 서브프라임 모기지 $1에 대해 합성 CDO가 $10~$20의 리스크를 만들어냈습니다." : "Core danger of synthetic CDO: because there are no actual mortgages, multiple synthetic CDOs can be simultaneously linked to the same mortgage pool. For every $1 of subprime mortgage, synthetic CDOs created $10–$20 of risk.",
    icon: "⚡",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
  },
  {
    step: 4,
    title: (ko: boolean) => ko ? "연쇄 손실 — 한 방향으로 동시 터짐" : "Cascading Losses — All Triggered Simultaneously",
    detail: (ko: boolean) => ko ? "서브프라임 모기지가 부실화되자 연결된 모든 합성 CDO가 동시에 손실을 발생시켰습니다. AIG는 수천억 달러 규모의 합성 CDO CDS 보장을 팔았다가 파산 직전까지 몰렸고, 미국 정부가 $1,800억으로 구제했습니다." : "When subprime mortgages defaulted, all linked synthetic CDOs simultaneously triggered losses. AIG had sold hundreds of billions in synthetic CDO CDS protection and was pushed to the brink of bankruptcy, requiring a $180 billion US government rescue.",
    icon: "💥",
    color: "border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-900/20",
  },
];

// ── Rating Agency Failure ─────────────────────────────────────────────────────
const RATING_FAILURES = [
  {
    failure: (ko: boolean) => ko ? "과거 데이터 기반 모델" : "Historical Data-Based Models",
    detail: (ko: boolean) => ko ? "신용평가사 모델은 1990~2005년 데이터에 기반했습니다. 이 기간 전국적인 주택 가격 동시 하락은 한 번도 없었습니다. '주택 가격은 전국적으로 동시에 하락하지 않는다'는 잘못된 전제가 AAA 등급의 핵심 가정이었습니다." : "Rating agency models were based on 1990–2005 data — a period that never saw nationwide simultaneous home price declines. The flawed premise that 'housing prices never fall nationwide simultaneously' was the core assumption underlying AAA ratings.",
    icon: "📉",
    severity: "critical",
  },
  {
    failure: (ko: boolean) => ko ? "상관관계 과소평가" : "Correlation Underestimation",
    detail: (ko: boolean) => ko ? "개별 모기지 부도 간의 상관관계를 낮게 가정했습니다. '네브라스카 농부가 부도나도 캘리포니아 IT 직원은 안전하다'는 논리였지만, 금융위기가 오자 모든 미국 주택 시장이 동시에 붕괴했습니다. 가우시안 코퓰라 모델(Li 모델)의 구조적 한계였습니다." : "Correlation between individual mortgage defaults was assumed to be low. The logic was 'if a Nebraska farmer defaults, a California IT worker is safe,' but when the financial crisis hit, all US housing markets collapsed simultaneously. This was a structural limitation of the Gaussian copula model (Li model).",
    icon: "🔗",
    severity: "critical",
  },
  {
    failure: (ko: boolean) => ko ? "이해충돌 — 수수료 의존" : "Conflict of Interest — Fee Dependence",
    detail: (ko: boolean) => ko ? "CDO 발행사(투자은행)가 신용평가사에 등급 수수료를 지불했습니다. '등급을 사는' 구조였습니다. 발행사는 높은 등급을 받아야 채권을 팔 수 있고, 평가사는 수수료를 받으려면 발행사가 원하는 등급을 줘야 한다는 왜곡된 유인이 존재했습니다." : "CDO issuers (investment banks) paid rating agencies for the ratings — effectively 'buying ratings.' Issuers needed high ratings to sell bonds; agencies needed to satisfy issuers to earn fees. This created a deeply distorted incentive structure.",
    icon: "💰",
    severity: "high",
  },
  {
    failure: (ko: boolean) => ko ? "모기지 심사 기준 하락 미반영" : "Failure to Reflect Declining Underwriting Standards",
    detail: (ko: boolean) => ko ? "2004~2006년 서브프라임 모기지 심사 기준이 급격히 하락했습니다(무서류 대출, NINJA 대출). 평가사 모델은 이 변화를 빠르게 반영하지 못했습니다. '역사적으로 BBB 등급 모기지는 이 정도 부도율이었다'는 가정이 새로운 저품질 모기지에는 적용되지 않았습니다." : "Subprime mortgage underwriting standards deteriorated sharply from 2004–2006 (no-document loans, NINJA loans). Rating agency models failed to quickly incorporate this change. The assumption that 'historically BBB-rated mortgages have had X default rate' simply did not apply to these new low-quality mortgages.",
    icon: "📋",
    severity: "high",
  },
];

// ── 2008 Crisis Timeline ──────────────────────────────────────────────────────
const CRISIS_2008_TIMELINE = [
  {
    year: "2004–06년",
    event: (ko: boolean) => ko ? "서브프라임 모기지 폭증 — NINJA 대출 전성기" : "Subprime Mortgage Surge — NINJA Loan Era",
    detail: (ko: boolean) => ko ? "소득 무증빙(NINJA: No Income, No Job, No Assets) 대출이 급증. 주택 가격 상승 기대로 부실 대출도 '재파이낸싱으로 해결 가능'이라는 논리. 이 대출들이 RMBS → CDO로 가공됐다." : "No-income, no-job, no-asset (NINJA) loans surge. The logic: rising home prices mean even bad loans can be refinanced. These loans were processed into RMBS → CDO.",
    dot: "bg-orange-500",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
    metric: (ko: boolean) => ko ? "서브프라임 신규 발행 $600B/년" : "Subprime origination $600B/year",
  },
  {
    year: "2006년 말",
    event: (ko: boolean) => ko ? "주택 가격 하락 시작 — Michael Burry·Paulson 포지션 완성" : "Home Prices Begin Falling — Burry & Paulson Positions Complete",
    detail: (ko: boolean) => ko ? "미국 주택 가격이 정점을 찍고 하락 시작. Michael Burry(Scion Capital)는 2005년부터 서브프라임 RMBS에 CDS를 매입했고, 2006년 말 포지션이 완성됐다. John Paulson도 이 시점에 Abacus 합성 CDO 공매도를 준비했다." : "US housing prices peak and start falling. Michael Burry (Scion Capital) had been buying CDS on subprime RMBS since 2005; his position was complete by late 2006. John Paulson was also preparing his Abacus synthetic CDO short at this time.",
    dot: "bg-amber-500",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
    metric: (ko: boolean) => ko ? "케이스-쉴러 주택지수 정점 → 하락 전환" : "Case-Shiller Home Price Index peaks → turns lower",
  },
  {
    year: "2007년 6월",
    event: (ko: boolean) => ko ? "Bear Stearns CDO 펀드 붕괴 — 위기의 전조" : "Bear Stearns CDO Fund Collapse — Warning Shot",
    detail: (ko: boolean) => ko ? "Bear Stearns의 두 헤지펀드가 서브프라임 모기지 CDO에 집중 투자했다가 사실상 파산. 구제 규모 $32억. 시장이 처음으로 CDO 리스크를 인식하기 시작. 메릴린치가 담보를 강제 처분하면서 CDO 가격이 공개적으로 하락했다." : "Two Bear Stearns hedge funds heavily concentrated in subprime mortgage CDOs collapsed, requiring a $3.2B rescue. The market began recognizing CDO risk for the first time. Merrill Lynch's forced collateral liquidation made CDO price declines public.",
    dot: "bg-red-500",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
    metric: (ko: boolean) => ko ? "펀드 청산, $32억 손실 확정" : "Fund liquidated, $3.2B losses crystallized",
  },
  {
    year: "2008년 9월",
    event: (ko: boolean) => ko ? "리먼 파산 — 위기 전면 폭발" : "Lehman Bankruptcy — Full Crisis Eruption",
    detail: (ko: boolean) => ko ? "리먼브라더스 챕터 11. CDO·RMBS 노출이 파산의 핵심 원인. 머니마켓펀드(Reserve Primary Fund)가 $1 이하로 추락(Breaking the Buck). 글로벌 신용 시장 완전 경색." : "Lehman Brothers Chapter 11. CDO/RMBS exposure was the core cause of bankruptcy. Money market fund (Reserve Primary Fund) broke the buck ($1 NAV). Global credit markets completely seized.",
    dot: "bg-rose-600",
    color: "border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-900/20",
    metric: (ko: boolean) => ko ? "리먼 부채 $6,130억, CDO 노출 수천억" : "Lehman debt $613B, CDO exposure hundreds of billions",
  },
  {
    year: "2008년 9월~10월",
    event: (ko: boolean) => ko ? "AIG 구제 — 합성 CDO CDS 보장 매도의 청구서" : "AIG Rescue — The Bill for Synthetic CDO CDS Protection Sales",
    detail: (ko: boolean) => ko ? "AIG AIGFP 부서가 수천억 달러 합성 CDO의 CDS 보장을 팔았다. 리먼 파산 후 CDS 청구가 쏟아지며 파산 직전. 미국 정부가 $1,800억 구제. 납세자 돈으로 Goldman Sachs 등 투자은행의 CDO 손실이 메워졌다." : "AIG's AIGFP division had sold CDS protection on hundreds of billions in synthetic CDOs. After Lehman, CDS claims flooded in, pushing AIG to the brink of bankruptcy. US government rescue of $180 billion. Taxpayer money effectively covered investment bank CDO losses including Goldman Sachs.",
    dot: "bg-red-600",
    color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/20",
    metric: (ko: boolean) => ko ? "AIG 구제 $1,800억 — 역사상 최대 단일 기업 구제" : "AIG rescue $180B — largest single corporate bailout in history",
  },
  {
    year: "2010년",
    event: (ko: boolean) => ko ? "Abacus 합의 — Goldman Sachs $5.5억 지불" : "Abacus Settlement — Goldman Sachs Pays $550M",
    detail: (ko: boolean) => ko ? "SEC가 Goldman Sachs를 합성 CDO Abacus 2007-AC1 관련 사기 혐의로 기소. Paulson & Co.가 포트폴리오 선정에 영향을 미쳤으나 반대편 투자자에게 이 사실을 공개하지 않았다는 것. Goldman은 $5.5억 합의. 당시 최대 금융기관 SEC 합의 기록." : "SEC charged Goldman Sachs with fraud related to synthetic CDO Abacus 2007-AC1, alleging that Paulson & Co. influenced portfolio selection while this was not disclosed to counterpart investors. Goldman settled for $550 million — the largest financial institution SEC settlement at the time.",
    dot: "bg-amber-500",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
    metric: (ko: boolean) => ko ? "Goldman 합의 $5.5억. 형사 처벌은 없음." : "Goldman settlement $550M. No criminal charges.",
  },
];

// ── The Big Short Analysis ────────────────────────────────────────────────────
const BIG_SHORT_PLAYERS = [
  {
    name: "Michael Burry (Scion Capital)",
    icon: "🔍",
    method: (ko: boolean) => ko ? "개별 모기지 풀 데이터 직접 분석" : "Direct analysis of individual mortgage pool data",
    detail: (ko: boolean) => ko ? "2004~2005년 수천 개의 서브프라임 모기지 풀 데이터를 직접 분석. 2006~2007년 재조정(Reset) 예정 ARM(변동금리모기지) 비율이 높고, FICO 점수가 낮고, LTV가 높은 풀들을 식별. '이 대출들은 리셋 때 대량 부실화될 것'이라는 결론. 2005년부터 CDS 매입 시작. 투자자들의 강한 반발에도 버팀. 2007~08년 약 $7억 수익." : "Directly analyzed thousands of subprime mortgage pool data files from 2004–2005. Identified pools with high proportions of ARMs scheduled for reset in 2006–2007, low FICO scores, and high LTVs. Conclusion: 'These loans will default en masse when they reset.' Started buying CDS from 2005. Held position despite strong investor pushback. Earned approximately $700M profit in 2007–08.",
    profit: (ko: boolean) => ko ? "~$7억 수익" : "~$700M profit",
    color: "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20",
    badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    name: "John Paulson (Paulson & Co.)",
    icon: "💡",
    method: (ko: boolean) => ko ? "Goldman Sachs Abacus 합성 CDO 공매도 구조 활용" : "Structured short via Goldman Sachs Abacus synthetic CDO",
    detail: (ko: boolean) => ko ? "Paulson & Co.는 Goldman Sachs와 협력해 Abacus 합성 CDO를 설계. 서브프라임 모기지 BBB 슬라이스를 담보로 하는 합성 CDO에서 Paulson이 공매도(CDS 매입) 포지션을 구축. 반대편(롱 포지션)에는 IKB, ABN Amro 같은 유럽 은행들이 있었다. 2007~08년 약 $150억 수익 — PE 역사상 최대 단일 거래 수익 중 하나." : "Paulson & Co. worked with Goldman Sachs to design the Abacus synthetic CDO. Paulson took the short (CDS buyer) position in a synthetic CDO backed by subprime mortgage BBB slices, while European banks (IKB, ABN Amro) took the long (CDS seller) side. Earned approximately $15 billion in 2007–08 — one of the largest single-trade profits in financial history.",
    profit: (ko: boolean) => ko ? "~$150억 수익" : "~$15B profit",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

// ── Crisis Contagion ──────────────────────────────────────────────────────────
const CONTAGION_STEPS = [
  { step: 1, label: (ko: boolean) => ko ? "서브프라임 모기지 부실" : "Subprime Mortgage Defaults", detail: (ko: boolean) => ko ? "2006년 말부터 ARM 리셋으로 차주 부도 급증" : "ARM resets from late 2006 trigger mass borrower defaults", color: "bg-red-500", width: 95 },
  { step: 2, label: (ko: boolean) => ko ? "RMBS AAA 등급 하향" : "RMBS AAA Downgrade", detail: (ko: boolean) => ko ? "서브프라임 RMBS 트랑쉐 대규모 등급 하락 → 가격 폭락" : "Mass subprime RMBS tranche downgrades → price collapse", color: "bg-red-500", width: 85 },
  { step: 3, label: (ko: boolean) => ko ? "CDO 담보 가치 붕괴" : "CDO Collateral Value Collapse", detail: (ko: boolean) => ko ? "RMBS를 담보로 한 CDO 가치가 동반 하락. 마크-투-마켓 손실 급증." : "CDOs backed by RMBS collapse in value. Mark-to-market losses surge.", color: "bg-rose-500", width: 75 },
  { step: 4, label: (ko: boolean) => ko ? "은행 자본 잠식" : "Bank Capital Erosion", detail: (ko: boolean) => ko ? "CDO 보유 금융기관(씨티, 메릴린치, UBS)이 수천억 달러 손실 인식. 자본 비율 급락." : "Banks holding CDOs (Citi, Merrill, UBS) recognize hundreds of billions in losses. Capital ratios plummet.", color: "bg-orange-500", width: 65 },
  { step: 5, label: (ko: boolean) => ko ? "은행 간 신용 경색" : "Interbank Credit Freeze", detail: (ko: boolean) => ko ? "상대방 CDO 노출 불확실성으로 은행 간 대출 거부. LIBOR 급등. 리먼 파산으로 완전 경색." : "Uncertainty about counterparty CDO exposure causes banks to stop lending to each other. LIBOR spikes. Full freeze after Lehman.", color: "bg-amber-500", width: 55 },
  { step: 6, label: (ko: boolean) => ko ? "실물경제 충격" : "Real Economy Impact", detail: (ko: boolean) => ko ? "기업 대출 불가 → 투자 급감 → 해고 급증. 미국 실업률 10% 돌파." : "Businesses cannot borrow → investment collapses → mass layoffs. US unemployment exceeds 10%.", color: "bg-gray-500", width: 45 },
];

// ── Post-Crisis Reforms ───────────────────────────────────────────────────────
const REFORMS = [
  {
    name: "볼커 룰 (Volcker Rule)",
    nameEn: "Volcker Rule",
    icon: "🚫",
    detail: (ko: boolean) => ko ? "은행의 자기계정거래(Proprietary Trading) 금지. 은행이 자신의 돈으로 CDO·합성 CDO 등 리스크 자산에 투기적 거래를 하는 것을 제한. 2010년 Dodd-Frank Act에 포함, 2014년 시행." : "Prohibits banks from proprietary trading. Restricts banks from using their own capital for speculative trading in risk assets like CDOs and synthetic CDOs. Included in the 2010 Dodd-Frank Act, effective 2014.",
    effect: (ko: boolean) => ko ? "은행의 CDO 직접 투자 대폭 축소" : "Significantly reduced direct bank CDO investment",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
  {
    name: "Dodd-Frank Act",
    nameEn: "Dodd-Frank Wall Street Reform",
    icon: "📜",
    detail: (ko: boolean) => ko ? "2010년 제정된 미국 금융규제 개혁법. ①장외 파생상품(CDS 포함) 중앙청산소 의무화, ②리스크 보유(Risk Retention) 규정 — 발행자가 5% 보유 의무, ③신용평가사 책임 강화, ④소비자금융보호국(CFPB) 설립." : "2010 US financial regulatory reform law. ①OTC derivative (including CDS) central clearing mandate; ②Risk retention rules — issuers must retain 5%; ③Enhanced rating agency accountability; ④Creation of Consumer Financial Protection Bureau (CFPB).",
    effect: (ko: boolean) => ko ? "구조화금융 발행 비용 증가, 투명성 개선" : "Increased structured finance issuance costs, improved transparency",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
  },
  {
    name: "EU 증권화 규정 (EU SR)",
    nameEn: "EU Securitization Regulation",
    icon: "🇪🇺",
    detail: (ko: boolean) => ko ? "2019년 시행된 EU 증권화 규정. STS(Simple, Transparent, Standardized) 증권화 프레임워크 도입. STS 기준 충족 시 낮은 자본 요건 적용. CDO 같은 복잡한 재증권화는 더 높은 자본 부담이 부과된다." : "EU Securitization Regulation effective 2019. Introduced STS (Simple, Transparent, Standardized) securitization framework. Lower capital requirements for STS-compliant products. Complex re-securitizations like CDOs face higher capital charges.",
    effect: (ko: boolean) => ko ? "유럽에서 CDO 신규 발행 사실상 소멸" : "CDO new issuance effectively disappeared in Europe",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
  },
  {
    name: "바젤 III (Basel III)",
    nameEn: "Basel III Capital Requirements",
    icon: "🏦",
    detail: (ko: boolean) => ko ? "2010년 발표, 단계적 시행. 은행 핵심 자본(CET1) 비율 강화. 복잡한 구조화상품에 대한 위험가중치 대폭 상향. Tier 1 레버리지 비율 도입. 구조화 상품의 위험가중자산(RWA) 계산 방식 보수화." : "Announced 2010, phased implementation. Stronger bank core capital (CET1) ratio requirements. Significantly higher risk weights for complex structured products. Introduction of Tier 1 leverage ratio. More conservative risk-weighted asset (RWA) calculation for structured products.",
    effect: (ko: boolean) => ko ? "은행의 CDO 보유 경제성 대폭 하락" : "CDO holding became far less economically attractive for banks",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
  },
];

// ── CDO Structure Diagram Data ────────────────────────────────────────────────
const CDO_CHAIN = [
  { label: (ko: boolean) => ko ? "서브프라임 모기지" : "Subprime Mortgages", sublabel: (ko: boolean) => ko ? "수천 건 NINJA 대출" : "Thousands of NINJA loans", icon: "🏠🏠🏠", color: "border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800" },
  { label: (ko: boolean) => ko ? "RMBS (주거용 MBS)" : "RMBS (Residential MBS)", sublabel: (ko: boolean) => ko ? "BBB 슬라이스 포함" : "Including BBB slices", icon: "📦", color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20" },
  { label: "CDO", sublabel: (ko: boolean) => ko ? "BBB RMBS → AAA CDO 변환 마법" : "BBB RMBS → AAA CDO 'magic'", icon: "✨", color: "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20" },
  { label: "CDO²", sublabel: (ko: boolean) => ko ? "CDO 트랑쉐를 담보로 또 다른 CDO" : "Yet another CDO backed by CDO tranches", icon: "💣", color: "border-rose-400 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20" },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "왜 BBB 등급 모기지가 CDO를 통해 AAA 등급이 될 수 있었나요?"
      : "Why could BBB-rated mortgages become AAA-rated bonds through CDO?",
    a: (ko: boolean) => ko
      ? "핵심 메커니즘은 '분산화에 의한 리스크 감소'입니다. 여러 지역의 다양한 모기지를 묶으면 개별 부도 리스크가 분산된다고 가정했습니다. 이 논리로 전체 풀의 BBB 담보 중 상위 60~70%는 AAA로 인정될 수 있었습니다. 문제는 이 분산화 가정이 상관관계를 과소평가했다는 것입니다. 경제 위기가 오자 개별 모기지가 아닌 전체 미국 주택 시장이 동시에 무너졌고, 분산화 효과는 사라졌습니다. 모델이 본 적 없는 상황이었습니다."
      : "The core mechanism was 'risk reduction through diversification.' It was assumed that pooling mortgages from various regions would diversify away individual default risk. By this logic, the top 60–70% of a BBB-collateral pool could qualify as AAA. The problem was that this diversification assumption massively underestimated correlation. When the financial crisis hit, it wasn't individual mortgages that failed — the entire US housing market collapsed simultaneously, eliminating the diversification benefit. This was a scenario the models had never seen.",
  },
  {
    q: (ko: boolean) => ko
      ? "합성 CDO는 '실제 자산이 없다'는데, 그러면 누가 손해를 보나요?"
      : "Synthetic CDOs have 'no real assets' — then who actually loses money?",
    a: (ko: boolean) => ko
      ? "합성 CDO에서는 두 종류의 당사자가 있습니다. ①보장 매입자(Protection Buyer): 손실이 나면 보상받는 쪽 (Burry, Paulson처럼 CDS를 산 사람들). ②보장 매도자(Protection Seller): 손실이 나면 보상해야 하는 쪽 (합성 CDO를 산 IKB, ABN Amro, AIG). 실물 모기지가 없어도 CDS 계약이 있으면 한 쪽이 지급받고 다른 쪽이 지급해야 합니다. AIG는 수천억 달러 CDS 보장을 팔았다가 손실 청구가 쏟아지자 파산 직전이 됐습니다."
      : "In a synthetic CDO, there are two types of parties. ①Protection Buyer: receives compensation if losses occur (like Burry and Paulson who bought CDS). ②Protection Seller: must pay compensation if losses occur (IKB, ABN Amro, AIG who bought synthetic CDOs). Even without physical mortgages, a CDS contract means one side receives and the other must pay. AIG had sold hundreds of billions in CDS protection and was pushed to the brink of bankruptcy when claims flooded in.",
  },
  {
    q: (ko: boolean) => ko
      ? "Michael Burry가 다른 사람들보다 먼저 위기를 예측한 방법은 무엇인가요?"
      : "How did Michael Burry predict the crisis before others?",
    a: (ko: boolean) => ko
      ? "Burry의 방법론은 세 단계였습니다. ①1차 자료 직접 분석: 2004~2005년 수천 개의 개별 모기지 풀 발행 문서(Prospectus)를 직접 읽었습니다. 대부분의 투자자가 등급에 의존할 때 원 데이터를 분석했습니다. ②ARM 리셋 스케줄 파악: 2006~2007년에 대량으로 금리가 올라가는 '리셋' 예정 ARM 비율이 높은 풀들을 식별했습니다. 차주 소득이 늘지 않으면 리셋 후 대량 부도가 불가피하다는 것을 계산했습니다. ③거시 환경 연결: 주택 가격 상승이 멈추면 리파이낸싱이 불가능해진다는 것을 인식했습니다. 이 세 가지가 합쳐졌을 때 '반드시 부실화된다'는 확신이 생겼습니다."
      : "Burry's methodology had three steps. ①Direct primary source analysis: he personally read thousands of individual mortgage pool issuance prospectuses from 2004–2005. While most investors relied on ratings, he analyzed raw data. ②ARM reset schedule mapping: identified pools with high proportions of ARMs scheduled for 'resets' (rate increases) in 2006–2007. Calculated that mass defaults were inevitable after resets if borrower incomes didn't rise. ③Macro connection: recognized that if home price appreciation stopped, refinancing would become impossible. These three elements combined gave him the conviction that 'these must default.'",
  },
  {
    q: (ko: boolean) => ko
      ? "2008 이후 CDO 시장은 어떻게 됐나요?"
      : "What happened to the CDO market after 2008?",
    a: (ko: boolean) => ko
      ? "위기 이후 CDO 시장은 사실상 재구성됐습니다. ①서브프라임 RMBS를 담보로 하는 전통적 CDO는 거의 사라졌습니다. 규제(바젤 III, Dodd-Frank, EU SR)로 은행의 CDO 보유 경제성이 크게 떨어졌습니다. ②CLO(레버리지드 론 담보)는 살아남았습니다. CLO는 RMBS CDO와 달리 기업 대출을 담보로 하고, 2008년 AAA 트랑쉐가 단 한 건도 부도 나지 않아 신뢰를 유지했습니다. ③합성 CDO는 대폭 축소됐지만 완전히 사라지지는 않았습니다. 유럽에서 거의 소멸했고, 미국에서는 기관 투자자 중심의 제한적 시장이 남아 있습니다."
      : "After the crisis, the CDO market was essentially restructured. ①Traditional CDOs backed by subprime RMBS virtually disappeared. Regulations (Basel III, Dodd-Frank, EU SR) made bank CDO holdings far less economically viable. ②CLOs (backed by leveraged loans) survived. Unlike RMBS CDOs, CLOs use corporate loans as collateral, and their AAA tranches had zero defaults in 2008, maintaining investor trust. ③Synthetic CDOs shrank dramatically but didn't disappear entirely. They nearly vanished in Europe; in the US, a limited institutional investor market remains.",
  },
  {
    q: (ko: boolean) => ko
      ? "Abacus 합성 CDO 사건에서 Goldman Sachs는 무엇을 잘못했나요?"
      : "What exactly did Goldman Sachs do wrong in the Abacus synthetic CDO case?",
    a: (ko: boolean) => ko
      ? "SEC가 주장한 Goldman의 핵심 위반은 '중요 정보 미공개'입니다. ①Abacus 합성 CDO 포트폴리오 구성 시 Paulson & Co.가 공매도하고 싶은 모기지를 선정하는 데 영향을 미쳤습니다. ②롱 포지션(보장 매도자)을 취한 IKB, ABN Amro 등 투자자들에게 Paulson의 참여와 영향력을 공개하지 않았습니다. ③투자자들이 알았더라면 거래에 참여하지 않았을 수 있는 정보를 숨긴 것이 기망에 해당한다고 SEC는 주장했습니다. Goldman은 $5.5억에 합의했지만 사기를 인정하지는 않았습니다."
      : "The SEC's core allegation against Goldman was 'failure to disclose material information.' ①Paulson & Co. influenced the selection of mortgages for the Abacus portfolio to favor their short position. ②Goldman did not disclose Paulson's participation and influence to investors (IKB, ABN Amro, etc.) taking the long (protection seller) position. ③The SEC alleged that withholding information that investors would have considered material — and might have caused them to decline the trade — constituted fraud. Goldman settled for $550 million without admitting wrongdoing.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Financial Crisis Inquiry Commission", title: "The Financial Crisis Inquiry Report", url: "https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_full.pdf", source: "FCIC, 2011" },
  { id: 2, author: "Michael Lewis", title: "The Big Short: Inside the Doomsday Machine", url: "https://www.amazon.com/Big-Short-Inside-Doomsday-Machine/dp/0393338827", source: "W.W. Norton, 2010" },
  { id: 3, author: "SEC Litigation Release", title: "Goldman Sachs Agrees to Pay Record $550M Settlement", url: "https://www.sec.gov/news/press-release/2010/2010-123.htm", source: "SEC, 2010" },
  { id: 4, author: "BIS Working Papers", title: "The Role of Rating Agencies in Structured Finance", url: "https://www.bis.org/publ/work317.htm", source: "BIS, 2010" },
  { id: 5, author: "GAO", title: "Financial Regulatory Reform: Financial Crisis Losses and Potential Impacts", url: "https://www.gao.gov/assets/gao-13-180.pdf", source: "GAO, 2013" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredCdoClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = STRUCTURED_SERIES[thisCh - 1] ?? null;
  const next = STRUCTURED_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-red-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-red-400 hover:text-red-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "CDO & 합성CDO — 2008 금융위기를 만든 구조화금융의 폭탄"
              : "CDO & Synthetic CDO — The Structured Finance Bomb That Built the 2008 Crisis"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "BBB 등급 모기지가 어떻게 AAA 채권으로 변신했을까요. Michael Burry는 왜 2005년부터 위기를 알았을까요. The Big Short의 실제 메커니즘 — CDO와 합성 CDO의 구조가 어떻게 2008년 금융위기를 증폭시켰는지 완전히 이해합니다."
              : "How did BBB-rated mortgages transform into AAA bonds? Why did Michael Burry know about the crisis as early as 2005? The real mechanics behind The Big Short — a complete understanding of how CDOs and synthetic CDOs amplified the 2008 financial crisis."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 30초 요약 ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 30초 요약" : "1. 30-Second Summary"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "2008 위기의 규모와 CDO의 역할을 숫자로 먼저 파악합니다." : "Understand the scale of the 2008 crisis and CDO's role through numbers first."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {STATS.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className={`w-8 h-1 rounded-full ${s.color} mb-3`} />
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{s.value}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{s.label(ko)}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{s.note(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💣</span>
              <div>
                <p className="font-bold text-sm text-red-800 dark:text-red-300 mb-1.5">
                  {ko ? "CDO가 2008 위기를 '증폭'한 방법 — 한 줄 정의" : "How CDOs 'Amplified' the 2008 Crisis — One-Line Definition"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "CDO는 서브프라임 모기지 BBB 등급 슬라이스를 AAA 채권으로 '변환'했습니다. 이 변환이 잘못된 분산화 가정에 기반했고, 합성 CDO는 같은 모기지 리스크를 수배로 레버리지했습니다. 위기가 오자 손실이 한 방향으로 동시에 터지면서 금융시스템이 마비됐습니다."
                    : "CDOs 'transformed' BBB-rated subprime mortgage slices into AAA bonds. This transformation was built on flawed diversification assumptions, and synthetic CDOs leveraged the same mortgage risk many times over. When the crisis hit, losses exploded simultaneously in one direction, paralyzing the financial system."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 2: CDO란 무엇인가 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. CDO란 무엇인가 — 2차 증권화의 의미" : "2. What Is a CDO? — The Meaning of Secondary Securitization"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "CDO vs ABS 비교와 CDO 연쇄 구조 다이어그램으로 이해합니다." : "Understand through a CDO vs ABS comparison and the CDO chain structure diagram."}
          </p>

          {/* CDO Chain Diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "CDO 연쇄 구조 — 원 자산에서 CDO²까지" : "CDO Chain Structure — From Underlying to CDO-Squared"}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {CDO_CHAIN.map((item, i) => (
                <div key={i} className="flex items-center gap-2 flex-1 min-w-0 w-full sm:w-auto">
                  <div className={`rounded-lg border p-3 text-center flex-1 min-w-0 ${item.color}`}>
                    <p className="text-lg mb-1">{item.icon}</p>
                    <p className="font-bold text-xs text-gray-800 dark:text-gray-200">{item.label(ko)}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{item.sublabel(ko)}</p>
                  </div>
                  {i < CDO_CHAIN.length - 1 && (
                    <span className="text-red-400 font-bold text-xl shrink-0">→</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 text-xs">
              <p className="font-bold text-red-700 dark:text-red-400 mb-1">{ko ? "핵심 문제: 'BBB가 AAA가 되는 마법'" : "Core Problem: 'The Magic That Turns BBB into AAA'"}</p>
              <p className="text-gray-700 dark:text-gray-300">{ko ? "무디스·S&P는 BBB 서브프라임 RMBS 슬라이스를 모아 CDO를 구성했을 때, 분산 효과로 상위 60~70%가 AAA 등급이 될 수 있다고 평가했습니다. 이 로직이 전제로 하는 '개별 모기지 부도는 독립적'이라는 가정이 2008년 완전히 무너졌습니다." : "Moody's and S&P rated the top 60–70% of CDOs structured from BBB subprime RMBS slices as AAA, citing diversification effects. The assumption underpinning this logic — 'individual mortgage defaults are independent events' — completely collapsed in 2008."}</p>
            </div>
          </div>

          {/* CDO vs ABS Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "CDO vs ABS 비교" : "CDO vs ABS Comparison"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5 text-red-600 dark:text-red-400">CDO</th>
                    <th className="text-left px-4 py-2.5 text-blue-600 dark:text-blue-400">ABS</th>
                  </tr>
                </thead>
                <tbody>
                  {CDO_VS_ABS.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-2.5 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{row.cdo(ko)}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{row.abs(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: 합성 CDO ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 합성 CDO — CDS 메커니즘과 레버리지 증폭" : "3. Synthetic CDO — CDS Mechanics and Leverage Amplification"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "실물 자산 없이 리스크만 복제하는 합성 CDO의 작동 원리와 Abacus 케이스."
              : "How synthetic CDOs replicate risk without physical assets, and the Abacus case study."}
          </p>
          <div className="space-y-4 mb-6">
            {SYNTHETIC_MECHANICS.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">STEP {item.step}</span>
                      <span className="font-black text-sm text-gray-900 dark:text-gray-50">{item.title(ko)}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-5">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest mb-2">
              🎯 {ko ? "Abacus 2007-AC1 — 합성 CDO 이해충돌의 극단적 사례" : "Abacus 2007-AC1 — Extreme Case of Synthetic CDO Conflict"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Goldman Sachs가 2007년 발행한 합성 CDO. Paulson & Co.가 공매도하고 싶은 서브프라임 모기지를 포트폴리오에 편입하도록 영향을 미쳤습니다. 반대편(롱 포지션)에는 이 사실을 모른 채 IKB(독일), ABN Amro(네덜란드)가 참여. 포트폴리오가 부실화되자 Paulson은 약 $10억 수익, 반대편 투자자들은 약 $10억 손실을 봤습니다. 2010년 SEC는 Goldman을 사기 혐의로 기소, $5.5억 합의."
                : "A synthetic CDO issued by Goldman Sachs in 2007. Paulson & Co. influenced the portfolio to include subprime mortgages they wanted to short. On the long side, IKB (Germany) and ABN Amro (Netherlands) participated without knowing this. When the portfolio defaulted, Paulson earned ~$1B in profit while counterpart investors lost ~$1B. In 2010, the SEC charged Goldman with fraud, settling for $550 million."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 4: 등급 기관 실패 ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 등급 기관 실패 — 왜 AAA가 대량 강등됐나" : "4. Rating Agency Failure — Why AAA Was Massively Downgraded"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "무디스·S&P·피치가 CDO를 과대평가한 4가지 구조적 원인."
              : "Four structural reasons why Moody's, S&P, and Fitch massively overrated CDOs."}
          </p>
          <div className="space-y-4">
            {RATING_FAILURES.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.failure(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.severity === "critical"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                          : "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
                      }`}>{ko ? (item.severity === "critical" ? "치명적" : "중요") : (item.severity === "critical" ? "Critical" : "Important")}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 5: The Big Short ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. The Big Short — Burry & Paulson의 분석과 베팅" : "5. The Big Short — Burry & Paulson's Analysis and Bets"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "시장 전체가 틀렸을 때 구조적 분석이 어떻게 수십억 달러의 수익으로 이어졌는가."
              : "How structural analysis led to billions in profits when the entire market was wrong."}
          </p>
          <div className="space-y-4">
            {BIG_SHORT_PLAYERS.map((player, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${player.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{player.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <p className="font-black text-sm text-gray-900 dark:text-gray-50">{player.name}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${player.badge}`}>{player.profit(ko)}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-2">{ko ? "방법론" : "Methodology"}: {player.method(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{player.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest mb-1.5">
              💡 {ko ? "The Big Short의 핵심 교훈" : "The Core Lesson of The Big Short"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Burry와 Paulson의 성공은 '군중과 다른 방향으로 베팅했다'는 것이 아닙니다. 핵심은 '등급에 의존하지 않고 원 데이터를 직접 분석해 구조적 결함을 발견했다'는 것입니다. AAA 등급 채권이라도 그 기반이 되는 가정이 잘못됐다면 투자자는 독립적으로 검증해야 합니다."
                : "Burry and Paulson's success wasn't simply 'betting against the crowd.' The core was 'discovering structural flaws by directly analyzing raw data rather than relying on ratings.' Even with AAA-rated bonds, if the underlying assumptions are flawed, investors must independently verify."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 6: 위기 전파 경로 ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 위기 전파 경로 — CDO에서 실물경제까지" : "6. Crisis Contagion — From CDO to the Real Economy"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "모기지 부실이 어떻게 글로벌 금융시스템 마비로 이어졌는지 6단계로 이해합니다."
              : "Understand in 6 steps how mortgage defaults led to global financial system paralysis."}
          </p>

          {/* Contagion Steps Bar Visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "위기 전파 강도 (상대적 충격)" : "Crisis Contagion Intensity (Relative Impact)"}
            </p>
            <div className="space-y-3">
              {CONTAGION_STEPS.map((step, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-gray-400 w-4 shrink-0">{step.step}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 shrink-0" />
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${step.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${step.width}%` }}
                        viewport={VP}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-1">
                    <span className="w-4 shrink-0" />
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{step.detail(ko)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2008 Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {CRISIS_2008_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.year}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 shrink-0">
                          {item.metric(ko)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 7: 이후 규제 개혁 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 이후 규제 개혁 — 볼커룰·Dodd-Frank·EU 증권화 규정" : "7. Post-Crisis Reforms — Volcker Rule, Dodd-Frank & EU Securitization Regulation"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "2008 이후 CDO 시장을 규제하는 4가지 핵심 규제 개혁." : "Four key regulatory reforms that reshaped the CDO market after 2008."}
          </p>
          <div className="space-y-4">
            {REFORMS.map((reform, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${reform.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{reform.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="font-black text-sm text-gray-900 dark:text-gray-50">{reform.name}</p>
                      <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500">{reform.nameEn}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{reform.detail(ko)}</p>
                    <div className="rounded-lg bg-white/60 dark:bg-gray-900/30 px-3 py-1.5 text-[11px]">
                      <span className="text-gray-400 uppercase tracking-wide mr-1">{ko ? "효과" : "Effect"}:</span>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{reform.effect(ko)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                    className="underline decoration-dotted hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 이 챕터가 분석하는 실제 딜 ──────────────────────────────────── */}
        <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-14">
          <motion.p variants={fadeUp()} className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            {ko ? "이 챕터가 연결되는 실제 딜 — CDO·위기 관점" : "Real Deals Connected to This Chapter — CDO & Crisis Lens"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/bear-stearns-collapse`,
                initials: "BS",
                bg: "bg-gray-800",
                title: ko ? "Bear Stearns CDO 펀드 붕괴 (2007) — 위기의 전조" : "Bear Stearns CDO Fund Collapse (2007) — The Warning Shot",
                sub: ko ? "$32억 구제. 서브프라임 CDO가 처음 공개적으로 무너진 사건." : "$3.2B rescue. The first public collapse of subprime CDO exposure.",
              },
              {
                href: `${base.replace("market-101", "deals")}/goldman-abacus`,
                initials: "GS",
                bg: "bg-slate-700",
                title: ko ? "Goldman Sachs Abacus 합성 CDO 사기 합의 (2010)" : "Goldman Sachs Abacus Synthetic CDO Fraud Settlement (2010)",
                sub: ko ? "$5.5억 합의. 이해충돌과 정보 비대칭의 극단적 사례." : "$550M settlement. Extreme case of conflict of interest and information asymmetry.",
              },
            ].map((d, i) => (
              <motion.div key={d.href} variants={fadeUp(i * 0.06)}>
                <Link href={d.href} className="group flex gap-3 rounded-xl border border-red-100 dark:border-red-900/40 bg-red-50/40 dark:bg-red-900/10 p-4 hover:border-red-300 dark:hover:border-red-600 transition-colors">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${d.bg} flex items-center justify-center`}>
                    <span className="text-white text-[9px] font-black leading-none">{d.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors leading-snug line-clamp-2">{d.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug line-clamp-2">{d.sub}</p>
                  </div>
                  <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-red-400 transition-colors self-center text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ══ 관련 마켓 케이스 ══════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "관련 마켓 케이스" : "Related Market Cases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "이 챕터의 개념이 실전에서 어떻게 작동했는지 확인하세요." : "See how the concepts in this chapter played out in real deals."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {([
              { slug: "abacus-2007-ac1", icon: "📉", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "Abacus 2007-AC1 — Goldman Sachs CDO 사기" : "Abacus 2007-AC1 — The Goldman Sachs CDO Fraud", desc: (k: boolean) => k ? "Big Short의 실제 주인공 딜. 합성 CDO 구조, 이해충돌, SEC $550M 합의 — CDO 붕괴의 가장 극적인 케이스." : "The real deal behind the Big Short. Synthetic CDO, conflicts of interest, $550M SEC settlement — the most dramatic CDO collapse.", year: "2007", badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300" },
              { slug: "bowie-bonds", icon: "🎸", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "보위 본드 (1997) — 미래 로열티를 증권화하다" : "Bowie Bonds (1997) — Securitizing Future Royalties", desc: (k: boolean) => k ? "CDO와 달리 단순한 자산 기반 ABS는 어떻게 위기를 버텼나. Abacus CDO와 비교하면 구조화금융의 선과 악이 보인다." : "How simple asset-backed ABS weathered the crisis unlike CDOs. Compare with Abacus to see structured finance at its best and worst.", year: "1997", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
            ]).map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                <Link href={`${ko ? "" : "/en"}/market/${c.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 hover:border-red-400 dark:hover:border-red-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${c.badge}`}>{c.category(ko)}</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-50 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-1">{c.title(ko)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc(ko)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-[10px] text-gray-400">{c.year}</span>
                    <span className="text-xs text-gray-400 group-hover:text-red-500 transition-colors">{ko ? "읽기" : "Read"} →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "CDO & 합성CDO — 2008 금융위기를 만든 구조화금융의 폭탄 | Deal Story"
            : "CDO & Synthetic CDO — The Structured Finance Bomb That Built the 2008 Crisis | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
