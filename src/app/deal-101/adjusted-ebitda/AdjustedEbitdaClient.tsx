"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import LikeButton from "@/components/LikeButton";

// ── Animation variants ──────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const stagger = (delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// ── 멀티플 임팩트 계산 ────────────────────────────────────────
const MULTIPLIER_IMPACT = [
  { addback: 5, multiples: [10, 12, 15, 18, 20] },
  { addback: 10, multiples: [10, 12, 15, 18, 20] },
  { addback: 25, multiples: [10, 12, 15, 18, 20] },
];

// ── 이해관계자 데이터 ─────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "매도자 측 자문 IB",
    subtitle: "Sell-side M&A Advisory",
    incentive: "EBITDA 최대화",
    why: "수수료는 딜 밸류의 0.5~2% — 성공 수수료 구조. $10M add-back이 15× 멀티플에서 $150M 딜 사이즈 증가 → 수수료 $1.5M 추가.",
    color: "border-rose-200 dark:border-rose-800/50 bg-rose-50/40 dark:bg-rose-950/10",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    direction: "↑ EBITDA",
  },
  {
    role: "경영진 (Management)",
    subtitle: "MIP / 에쿼티 롤오버",
    incentive: "EBITDA 목표 달성",
    why: "MIP(Management Incentive Plan)는 Exit EBITDA 또는 멀티플에 연동. 경영진은 데이터룸 정보를 통제하는 동시에 add-back 최대화의 수혜자. 가장 강력한 이해충돌.",
    color: "border-rose-200 dark:border-rose-800/50 bg-rose-50/40 dark:bg-rose-950/10",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    direction: "↑ EBITDA",
  },
  {
    role: "레버리지드 파이낸스 팀",
    subtitle: "LevFin — 채무 주선",
    incentive: "대출 규모 최대화",
    why: "LevFin 수수료는 대출 원금의 1~2% — 대출 규모가 클수록 수수료 증가. EBITDA가 높을수록 더 많은 차입 허용(5× EBITDA 기준). 신디케이션 후엔 리스크 아웃 — 'Originate to Distribute' 구조적 문제.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "↑ EBITDA",
  },
  {
    role: "신디케이션 / CLO",
    subtitle: "기관 대출 투자자",
    incentive: "수익률 확보",
    why: "LevFin 은행이 작성한 크레딧 메모를 기반으로 투자 결정. Covenant-lite 대출 구조에서 EBITDA 코버넌트 없음 — 실적 악화 조기 경고 없음. 2015~2019 레버리지드론 시장 $600B→$1.3T 팽창 주요 원인 중 하나.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "중립 (수동적 수용)",
  },
  {
    role: "신용평가사",
    subtitle: "S&P / Moody's / Fitch",
    incentive: "자체 EBITDA 기준 적용",
    why: "발행사 지급(issuer-paid) 모델 — 2008년 모기지 사태와 동일한 구조적 갈등. 단, S&P·Moody's는 자체 EBITDA 조정(운용리스 자본화, 연금 적자 포함)을 적용해 회사 발표 레버리지보다 1~2턴 높게 산정하기도.",
    color: "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    direction: "자체 기준 적용",
  },
  {
    role: "FDD / QoE팀",
    subtitle: "Buy-side Financial Due Diligence",
    incentive: "EBITDA 현실화",
    why: "매수자가 고용해 독립적 검증 수행. 이론상 수호자. 단, 딜을 무산시키면 관계 손상 우려(Kill-deal pressure). 헤어컷 10~30% — KPMG: 딜의 35%에서 FDD 후 12개월 내 EBITDA 15% 이상 하회.",
    color: "border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/40 dark:bg-emerald-950/10",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    direction: "↓ EBITDA",
  },
];

// ── Add-back 정당성 스펙트럼 ──────────────────────────────────
const ADDBACK_SPECTRUM = [
  {
    tier: "✅ 일반적으로 인정",
    tierEn: "✅ Generally Accepted",
    color: "border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/10",
    labelColor: "text-emerald-700 dark:text-emerald-400",
    items: [
      { nameKo: "진짜 1회성 법적 비용", nameEn: "Genuine One-time Legal Costs", detail: "단발성 소송 합의금, 특정 분쟁 관련 법무 비용 (반복 업종 제외)", detailEn: "Single litigation settlements, costs for specific disputes (excluding habitually litigious sectors)" },
      { nameKo: "오너 과잉 보상 조정", nameEn: "Owner Compensation Normalization", detail: "오너 운영 기업의 시장 급여 초과분 — PE 인수 후 절감될 비용", detailEn: "Excess compensation above market rate at owner-operated businesses — savings realizable post-PE acquisition" },
      { nameKo: "IPO/딜 관련 자문 비용", nameEn: "IPO / Deal-related Advisory Fees", detail: "당해 거래를 위한 IB·법무 비용 — 구조적으로 반복 불가", detailEn: "IB and legal fees for the current transaction — structurally non-recurring" },
      { nameKo: "자연재해·일회성 재난 손실", nameEn: "Natural Disaster / One-time Casualty Losses", detail: "홍수·화재 등 보험 처리되지 않은 실제 1회성 손실", detailEn: "Uninsured losses from floods, fires, and similar one-off events" },
    ],
  },
  {
    tier: "⚠️ 논란 — 증거 요구",
    tierEn: "⚠️ Contested — Requires Evidence",
    color: "border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/10",
    labelColor: "text-amber-700 dark:text-amber-400",
    items: [
      { nameKo: "구조조정 비용", nameEn: "Restructuring Charges", detail: "2년 연속 등장하면 FDD 거부 — Valeant는 8분기 연속 '비반복' 처리", detailEn: "Appearing for 2+ consecutive years → FDD rejection. Valeant ran 8 straight quarters of 'non-recurring' restructuring" },
      { nameKo: "CEO 교체·전략 검토 비용", nameEn: "CEO Transition / Strategic Review Costs", detail: "1회성으로 분류하지만 '변환 프로그램'이 3~4년 지속되는 경우 다수", detailEn: "Labeled one-time, but 'transformation programs' routinely run 3–4 years" },
      { nameKo: "코로나 정상화 (2020~2022)", nameEn: "COVID Normalization (2020–2022)", detail: "팬데믹 손실 add-back — 업종별 타당성 차이 크고 남용 사례 광범위", detailEn: "Pandemic loss add-backs — wide variation by sector, rampant abuse in practice" },
      { nameKo: "신규 사업 Pre-opening 비용", nameEn: "New Location Pre-opening Costs", detail: "성장 중인 기업에서 구조적으로 반복 — WeWork 패턴과 동일", detailEn: "Structurally recurring at growth-stage businesses — identical to WeWork's pattern" },
    ],
  },
  {
    tier: "❌ FDD에서 거의 거부",
    tierEn: "❌ Routinely Rejected by FDD",
    color: "border-rose-200 dark:border-rose-800/40 bg-rose-50/50 dark:bg-rose-950/10",
    labelColor: "text-rose-600 dark:text-rose-400",
    items: [
      { nameKo: "주식 기반 보상 (SBC)", nameEn: "Stock-Based Compensation (SBC)", detail: "Buffett: '이게 보상이 아니면 뭔가? 비용이 아니면 어디로 가나?' — 경제적 희석은 실재", detailEn: "Buffett: 'If compensation isn't an expense, what is it? Where does it go if not to P&L?' — economic dilution is real" },
      { nameKo: "미실현 시너지 예상치", nameEn: "Unrealized Synergy Projections", detail: "아직 달성 안 된 비용 절감을 EBITDA에 add-back. Run-rate 증거 없으면 거부", detailEn: "Adding back cost savings not yet achieved. Rejected without run-rate evidence" },
      { nameKo: "SG&A 전체 제외 (WeWork형)", nameEn: "Full SG&A Exclusion (WeWork-style)", detail: "핵심 영업비용을 '비핵심'으로 재분류. Community-Adjusted EBITDA의 핵심 문제", detailEn: "Reclassifying core operating expenses as 'non-core' — the central problem with Community-Adjusted EBITDA" },
      { nameKo: "반복 등장 M&A 통합 비용", nameEn: "Serial M&A Integration Costs", detail: "Serial acquirer의 통합비용 — 매 인수마다 '1회성'. 실질적으로 영구 비용", detailEn: "Integration costs from serial acquirers add-backed every deal — effectively a permanent cost" },
    ],
  },
];

// ── 케이스 스터디 ─────────────────────────────────────────────
const CASES = [
  {
    title: "WeWork — Community-Adjusted EBITDA",
    region: "🇺🇸 미국",
    year: "2019",
    color: "border-rose-200 dark:border-rose-800/40",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    summary: "SG&A와 마케팅 비용을 통째로 제외해 순손실 -$1.93B를 Adj. EBITDA +$467M으로 전환",
    analogy: "식당이 '직원 인건비랑 광고비만 안 세면 우리 흑자야'라고 말하는 것과 같다. 근데 그게 바로 식당 장사의 핵심 비용이다.",
    paragraphs: [
      "WeWork의 사업 모델은 단순하다. 건물을 장기로 빌려서 → 작게 쪼개서 단기로 재임대한다. 이때 공간을 채우려면 영업팀, 마케팅, 신규 지점 오픈 비용이 반드시 든다. 그런데 WeWork은 이 비용($933M, FY2018)을 '커뮤니티 운영 투자'라며 EBITDA 계산에서 통째로 빼버렸다.",
      "그러자 GAAP 기준 -$1.93B 순손실이 +$467M 흑자로 뒤바뀌었다. $2.4B 차이다. WeWork이 만들어낸 조어, 'Community-Adjusted EBITDA'는 투자자들에게 '이미 자리잡은 지점들은 돈을 번다'는 인상을 줬다.",
      "문제는 기업이 성장하거나 현상 유지를 하는 한, 그 비용은 구조적으로 계속 나간다는 점이다. 영업·마케팅비를 안 쓰면 회원도 줄어든다. 2019년 9월 IPO 철회, 2023년 11월 챕터11 파산 신청. 소프트뱅크 총 손실 -$9.5B.",
    ],
    lesson: "이 비용이 없으면 사업도 없다. 핵심 영업비용을 제외하면 어떤 기업도 흑자로 만들 수 있다.",
    numbers: [
      { label: "GAAP 순손실 (FY2018)", value: "-$1.93B" },
      { label: "Community-Adjusted EBITDA", value: "+$467M" },
      { label: "GAAP vs. Adj. 갭", value: "~$2.4B" },
      { label: "SoftBank 손실", value: "-$9.5B" },
    ],
    source: "출처: WeWork S-1 filing, Aug 14, 2019 (SEC EDGAR)",
  },
  {
    title: "Valeant — 반복되는 '비반복' 비용",
    region: "🇨🇦 캐나다/미국",
    year: "2015",
    color: "border-amber-200 dark:border-amber-800/40",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    summary: "8분기 연속 '비반복'으로 분류된 구조조정비 — GAAP EPS -$0.18을 Cash EPS +$10.17로",
    analogy: "자동차를 8번 연속으로 수리하면서 매번 '이번이 진짜 마지막 수리비야'라고 하는 것과 같다. 8번 연속 '마지막'이라면, 그건 그냥 고장난 차다.",
    paragraphs: [
      "Valeant의 전략은 제약사를 인수 → 약값 올리기 → R&D 삭감이었다. 인수를 반복하다 보니 매 분기마다 '인수 통합 비용'과 '구조조정 비용'이 자연스럽게 발생했다.",
      "Valeant는 이 비용들을 매 분기 '비반복·일회성'으로 분류해 조정 EBITDA에서 제외했다. 덕분에 GAAP 기준 주당순이익 -$0.18이 회사 발표 'Cash EPS' +$10.17로 뒤바뀌었다. 주당 $10 이상 차이다.",
      "결정적 허점: 이 '비반복' 비용이 2013~2015년 사이 8분기 연속으로 등장했다. '1회성'이 매 분기 나온다면, 그건 구조적인 비용이다. 학술적으로도 검증된 사실이다 — Doyle et al.(2013)은 기업들이 '비반복'으로 분류하는 항목의 65~70%가 이후 기간에 다시 발생함을 실증했다.",
      "2016년 SEC가 조사에 착수했고 재무제표를 재작성했다. 주가는 고점 $262에서 $10 이하로 폭락했다.",
    ],
    lesson: "같은 '일회성' 항목이 2~3분기 이상 연속으로 등장하면, 그때부터는 1회성이 아니라 그 회사의 구조 비용으로 봐야 한다.",
    numbers: [
      { label: "GAAP EPS (FY2015)", value: "-$0.18" },
      { label: "'Cash EPS' (조정 후)", value: "+$10.17" },
      { label: "Adjusted EBITDA (FY2015)", value: "~$5.7B" },
      { label: "주가 고점 → 저점", value: "$262 → $10 이하" },
    ],
    source: "출처: Valeant Annual Report 2015; SEC Comment Letters (EDGAR); Doyle et al. (2013), JAE",
  },
  {
    title: "MBK Partners × 홈플러스",
    region: "🇰🇷 한국",
    year: "2015~2025",
    color: "border-blue-200 dark:border-blue-800/40",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    summary: "자기 건물을 팔고 임차해 단기 현금을 만들었지만, 그 이후 내야 할 임차료는 영구적 비용",
    analogy: "집을 팔아 목돈을 만들고, 그 집에 세 들어 살면서 '우리 집 팔아서 현금 많아'라고 하는 것과 같다. 집 판 돈은 일회성이지만, 이제 매달 내야 할 월세는 영구적이다.",
    paragraphs: [
      "MBK Partners는 2015년 테스코로부터 홈플러스를 KRW 7.2조에 인수했다. 당시 한국 PE 역사상 최대 규모였다. 인수 자금의 상당 부분은 차입으로 조달했고, 인수 당시 부채/EBITDA 비율은 약 9~10×였다.",
      "인수 후 MBK는 홈플러스 매장 건물들을 팔고 다시 임차하는 '세일앤리스백'으로 KRW 4조 이상을 조달했다. 이 현금으로 차입금을 갚고 투자자에게 돌려줬다.",
      "문제는 건물을 팔고 나면 이제 매달 임차료를 내야 한다는 점이다. 건물을 소유할 때는 없던 비용이 영구적으로 생긴 것이다. 이 임차료 부담은 딜 당시 EBITDA 계산에 충분히 반영되지 않았다는 것이 논란의 핵심이다.",
      "설상가상으로 2015~2020년 사이 쿠팡·네이버·편의점의 급성장으로 대형마트 업황 자체가 급격히 나빠졌다. 9~10×의 높은 레버리지는 이런 업황 충격을 버틸 여유가 없었다. 2025년 2월 홈플러스는 기업회생을 신청했다.",
    ],
    lesson: "자산 매각 수익은 일회성이다. 팔고 나면 영구 임차료라는 새로운 비용이 생긴다. 이 비용은 반드시 정상 영업 EBITDA에서 차감해야 한다.",
    numbers: [
      { label: "인수 규모", value: "KRW 7.2조" },
      { label: "리스백 조달 현금", value: "KRW 4조+" },
      { label: "인수 시 부채/EBITDA", value: "약 9~10×" },
      { label: "기업회생 신청", value: "2025년 2월" },
    ],
    source: "출처: 한국경제, 매일경제 공시 보도; 홈플러스 기업회생 공시 (2025. 2.)",
  },
  {
    title: "HDC현대산업개발 × 아시아나항공",
    region: "🇰🇷 한국",
    year: "2019~2020",
    color: "border-purple-200 dark:border-purple-800/40",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    summary: "항공기 대정비(D-Check)를 '1회성'으로 처리 — 코로나가 방아쇠, 취약성은 이미 내재돼 있었다",
    analogy: "자동차를 살 때 딜러가 '5년마다 엔진 전체 오버홀이 필요해요'라고 했는데, 이걸 '아, 이번 구입할 때만 드는 1회성 비용이구나'라고 이해하는 것과 같다. 5년 주기로 반드시 발생하는 비용은 1회성이 아니다.",
    paragraphs: [
      "HDC현대산업개발은 2019년 12월 아시아나항공을 KRW 2.5조에 인수하기로 계약했다. 2020년 코로나19가 터지면서 국제선이 전면 중단됐고, HDC는 MAC(중대한 부정적 변화) 조항을 근거로 계약 파기를 주장했다.",
      "그런데 코로나는 방아쇠였을 뿐이다. 딜 구조에는 이미 숨겨진 문제들이 있었다.",
      "항공사는 비행기를 6~8년마다 완전히 분해해서 모든 부품을 점검하는 'D-Check(중정비)'를 반드시 해야 한다. 비용이 기체 한 대당 수십억 원이다. 이 비용은 매년 나오지 않는다는 이유로 종종 '비반복성' 비용으로 분류돼 EBITDA에서 제외된다. 하지만 항공사를 운영하는 한, 이 비용은 반드시 발생한다. '주기가 길 뿐 구조적으로 반복'되는 비용이다.",
      "더불어 IFRS 16 회계기준 도입으로 항공기 운용리스 KRW 2.4조 이상이 부채로 인식됐는데, 이 부분이 딜 가치 산정에 충분히 반영됐는지가 논란이었다. 계약은 결국 법원의 해제 인정으로 종결됐다.",
    ],
    lesson: "'불규칙하게 발생한다'와 '1회성이다'는 다르다. 비행기 대정비처럼 주기가 길어도 예측 가능한 비용은 정상 운영 비용에 포함시켜야 한다.",
    numbers: [
      { label: "딜 사이즈 (EV)", value: "KRW 2.5조" },
      { label: "계약 체결", value: "2019년 12월" },
      { label: "IFRS 16 운용리스 부채", value: "KRW 2.4조+" },
      { label: "딜 파기 사유", value: "MAC 조항 + 코로나" },
    ],
    source: "출처: HDC현대산업개발 공시; 서울중앙지방법원 결정 (2020); 항공업계 FDD 관행 분석",
  },
];

// ── FDD 브릿지 ─────────────────────────────────────────────────
const FDD_BRIDGE = [
  { label: "매도자 제시 Adjusted EBITDA", value: "$120M", color: "text-gray-900 dark:text-gray-100", sign: "" },
  { label: "– 반복 구조조정 비용 환원", value: "($8M)", color: "text-rose-500", sign: "–" },
  { label: "– SBC 비용 (경제적 실질 반영)", value: "($4M)", color: "text-rose-500", sign: "–" },
  { label: "– 1회성으로 분류된 반복 마케팅비", value: "($5M)", color: "text-rose-500", sign: "–" },
  { label: "– 미실현 시너지 예상치", value: "($7M)", color: "text-rose-500", sign: "–" },
  { label: "+ 오너 과잉 보상 조정 (인정)", value: "$3M", color: "text-emerald-600 dark:text-emerald-400", sign: "+" },
  { label: "= FDD 확인 EBITDA", value: "$99M", color: "text-blue-600 dark:text-blue-400", sign: "=", bold: true },
];

// ── 레드플래그 ────────────────────────────────────────────────
const RED_FLAGS = [
  "구조조정 비용이 2년 이상 연속 등장하면서 매번 '비반복'으로 분류",
  "Add-back 리스트가 15개 이상 — 항목 수가 많을수록 개별 검증이 어려워 통째로 통과되는 경향",
  "미실현 시너지(아직 달성 안 된 비용 절감)가 EBITDA에 포함",
  "SG&A 또는 마케팅의 일부·전부를 '성장 투자'로 재분류해 제외",
  "EBITDA 대비 Capex 비율이 현저히 낮음 — 유지보수 투자 과소 보고 가능성",
  "관계사 거래 수익이 run-rate EBITDA에 포함 (인수 후 소멸 가능)",
  "직전 1~2년간 매출 급증 + 원가 급감 — 채널 스터핑 또는 비용 이연 의심",
  "'Adjusted' EBITDA와 현금흐름표 영업활동현금흐름 간 괴리가 지속적으로 큼",
];

// ── Props ─────────────────────────────────────────────────────
interface RelatedDeal {
  slug: string;
  title: string;
  category: string;
  acquirer: string;
  target: string;
  dealValueDisplay: string;
  conceptDescription: string;
}

interface Props {
  relatedDeals: RelatedDeal[];
  lang?: "ko" | "en";
}

export default function AdjustedEbitdaClient({ relatedDeals, lang = "ko" }: Props) {
  const ko = lang !== "en";
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
            >
              <Link href="/deal-101" className="hover:text-blue-500 transition-colors">딜 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Adjusted EBITDA</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                  밸류에이션
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">심화 · 읽기 약 15분</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Adjusted EBITDA — 조정의 전쟁
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                M&A 가격은 <strong className="text-gray-700 dark:text-gray-300">멀티플 × EBITDA</strong>다.
                그래서 EBITDA를 조금만 바꿔도 매각가는 수백억이 달라진다.
                매도자부터 LevFin 은행, 신평사까지 — 이 숫자를 둘러싼 구조적 이해충돌 지도.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/en/deal-101/adjusted-ebitda" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  Read in English →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. 곱셈의 폭발력 ══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              왜 $10M 조정이 $150M 협상이 되는가
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                M&A 가격 산정의 기본 공식은 단순하다.
              </p>
            </motion.div>

            {/* 핵심 공식 */}
            <motion.div variants={fadeUp} className="my-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border border-gray-700 p-8 text-center">
              <p className="text-3xl font-black text-white font-mono tracking-tight">
                EV = Multiple × EBITDA
              </p>
              <p className="mt-3 text-sm text-gray-400 font-mono">
                ∴ ΔEBITDA × Multiple = ΔDeal Price
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                이 공식에서 Add-back의 폭발력이 나온다.
                <strong className="text-gray-800 dark:text-gray-200"> EBITDA에 $10M을 더하면, 그게 15× 멀티플 딜이면 기업가치는 $150M 뛴다.</strong>
                단순한 회계 논쟁이 아니다. 수백억 원짜리 가격 협상이다.
              </p>
            </motion.div>

            {/* 임팩트 테이블 */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Add-back $XM의 딜 가격 영향 (단위: $M)
                </p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400">Add-back 금액</th>
                    {[10, 12, 15, 18, 20].map(m => (
                      <th key={m} className="text-center px-3 py-3 text-xs font-bold text-gray-500 dark:text-gray-400">{m}× 멀티플</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[5, 10, 25, 50].map((addback, i) => (
                    <tr key={addback} className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 font-bold text-gray-800 dark:text-gray-200">+${addback}M</td>
                      {[10, 12, 15, 18, 20].map(m => (
                        <td key={m} className="px-3 py-3 text-center font-black text-rose-500 dark:text-rose-400 font-mono">
                          +${addback * m}M
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40 p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong className="text-gray-800 dark:text-gray-200">실제 규모감:</strong> S&P LCD 데이터에 따르면 2014~2018년 PE 바이아웃 딜에서 add-back이 Adjusted EBITDA의 평균 <strong className="text-gray-800 dark:text-gray-200">20~35%</strong>를 차지했다.
                $100M EBITDA 기업에서 $30M이 add-back이고 멀티플이 15×라면 — 매도자 주장 딜 가격 $1.5B, FDD 확인 딜 가격 $1.05B. 차이 <strong className="text-rose-600 dark:text-rose-400">$450M.</strong>
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. 이해관계자 충돌 지도 ══════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              구조적 이해충돌 지도
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Adjusted EBITDA를 둘러싼 이해관계자들은 각자의 인센티브 구조를 갖고 있다.
              문제는 이 인센티브 대부분이 <strong className="text-gray-700 dark:text-gray-300">EBITDA를 높이는 방향</strong>을 가리킨다는 것이다.
            </motion.p>

            <motion.div variants={stagger(0.09)} className="space-y-3">
              {STAKEHOLDERS.map((s) => (
                <motion.div key={s.role} variants={fadeUp}
                  className={`rounded-xl border p-5 ${s.color}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{s.role}</h3>
                        <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${s.badge}`}>{s.subtitle}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">인센티브: {s.incentive}</p>
                    </div>
                    <span className={`text-xs font-black flex-shrink-0 ${s.direction.startsWith("↑") ? "text-rose-500" : s.direction.startsWith("↓") ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"}`}>
                      {s.direction}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.why}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/40 dark:bg-indigo-950/10 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                💡 Originate-to-Distribute의 구조적 문제
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                LevFin 은행은 대출을 직접 보유하지 않는다. 신디케이션을 통해 CLO·헤지펀드에 매각한다.
                리스크가 아웃된 이후엔 EBITDA 품질 검증 인센티브가 약해진다.
                이는 2008년 서브프라임 모기지의 <strong className="text-gray-800 dark:text-gray-200">"대출 후 매각(originate to distribute)"</strong> 구조와 본질적으로 동일한 갈등이다.
                2015~2019년 레버리지드론 시장이 $600B → $1.3T로 팽창한 배경 중 하나다.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-3 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                📊 실제로 EBITDA가 몇 개나 존재하는가
              </h3>
              <div className="space-y-2 mt-3">
                {[
                  { num: "①", label: "Reported EBITDA", desc: "GAAP/IFRS 기준 재무제표" },
                  { num: "②", label: "Management Adjusted EBITDA", desc: "CIM에 제시된 매도자 주장 EBITDA" },
                  { num: "③", label: "FDD-Confirmed EBITDA", desc: "매수자 QoE 팀이 검증한 지속 가능 EBITDA" },
                  { num: "④", label: "Rating Agency EBITDA", desc: "S&P·Moody's 자체 조정 (운용리스·연금 포함 시 레버리지 1~2턴 ↑)" },
                  { num: "⑤", label: "Covenant EBITDA", desc: "대출 약정서상 레버리지 코버넌트 계산 기준 — 은행과 개별 협상" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3 text-sm">
                    <span className="text-blue-500 font-black flex-shrink-0">{item.num}</span>
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">{item.label}</span>
                      <span className="text-gray-500 dark:text-gray-400"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                같은 회사를 두고 ① ~ ⑤가 모두 다른 숫자를 가리킬 수 있다. 어떤 EBITDA를 기준으로 이야기하는지 항상 먼저 확인해야 한다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. "1회성" 판정 기준 ═════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              &ldquo;1회성&rdquo;의 실제 판정 기준 — 핵심 전쟁터
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-4">
              Adjusted EBITDA의 모든 논쟁은 결국 하나의 질문으로 수렴한다:
              <strong className="text-gray-700 dark:text-gray-300"> "이 비용은 내년에도 발생하는가?"</strong>
            </motion.p>
            <motion.div variants={fadeUp} className="rounded-xl border border-blue-200 dark:border-blue-800/50 bg-blue-50/40 dark:bg-blue-950/10 p-4 mb-8">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Doyle, Jennings &amp; Soliman(2013, <em>Journal of Accounting and Economics</em>)은 기업들이 &lsquo;비반복&rsquo;으로 분류하는 항목의
                <strong className="text-blue-700 dark:text-blue-300"> 65~70%가 이후 기간에 다시 발생</strong>함을 실증했다.
                과반수의 &lsquo;1회성&rsquo;이 사실상 구조 비용이다.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.08)} className="space-y-4">
              {ADDBACK_SPECTRUM.map((tier) => (
                <motion.div key={tier.tier} variants={fadeUp} className={`rounded-xl border p-5 ${tier.color}`}>
                  <p className={`text-xs font-bold mb-3 ${tier.labelColor}`}>{ko ? tier.tier : tier.tierEn}</p>
                  <div className="space-y-3">
                    {tier.items.map((item) => (
                      <div key={item.nameKo} className="flex gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{ko ? item.nameKo : item.nameEn}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">{ko ? item.detail : item.detailEn}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buffett/Munger 인용 */}
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              <blockquote className="rounded-xl border-l-4 border-amber-400 bg-amber-50/50 dark:bg-amber-950/10 pl-5 pr-4 py-4">
                <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  &ldquo;References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?&rdquo;
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">— Warren Buffett, 2000 Berkshire Hathaway Annual Letter</p>
              </blockquote>
              <blockquote className="rounded-xl border-l-4 border-amber-400 bg-amber-50/50 dark:bg-amber-950/10 pl-5 pr-4 py-4">
                <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  &ldquo;I think about every time I see EBITDA [I think it&apos;s] somewhere between ridiculous and fraudulent.&rdquo;
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">— Charlie Munger, 2003 Wesco Financial Annual Meeting</p>
              </blockquote>
              <blockquote className="rounded-xl border-l-4 border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/40 pl-5 pr-4 py-4">
                <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  &ldquo;The question is never what the EBITDA is — the question is whether it&apos;s real.&rdquo;
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">— Leon Black, Apollo Global Management (다수 컨퍼런스, 2010~2015)</p>
              </blockquote>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 4. 케이스 스터디 ══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              실제 딜에서 어떻게 전개됐는지 — 비유로 먼저 이해하고, 숫자로 확인한다.
            </motion.p>
            <motion.div variants={stagger(0.1)} className="space-y-8">
              {CASES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className={`rounded-2xl border ${c.color} bg-white dark:bg-gray-900 overflow-hidden`}>

                  {/* 카드 헤더 */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${c.badge}`}>{c.region} · {c.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{c.summary}</p>
                  </div>

                  {/* 비유 callout */}
                  <div className="mx-6 mb-4 rounded-xl bg-amber-50 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-700/40 px-4 py-3 flex gap-3">
                    <span className="text-lg leading-none flex-shrink-0 mt-0.5">💡</span>
                    <div>
                      <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase tracking-wide">비유하면</p>
                      <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{c.analogy}</p>
                    </div>
                  </div>

                  {/* 숫자 그리드 */}
                  <div className="px-6 mb-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {c.numbers.map((n) => (
                        <div key={n.label} className="rounded-lg bg-gray-50 dark:bg-gray-800/60 p-3">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1 leading-snug">{n.label}</p>
                          <p className="text-sm font-black text-gray-900 dark:text-gray-100 font-mono">{n.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 본문 — 문단별 분리 */}
                  <div className="px-6 mb-5 space-y-3">
                    {c.paragraphs.map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* 핵심 교훈 */}
                  <div className="mx-6 mb-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 px-4 py-3">
                    <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide">핵심</p>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300 leading-relaxed">{c.lesson}</p>
                  </div>

                  <div className="px-6 pb-5">
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 italic">{c.source}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 5. FDD 브릿지 ════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              FDD Quality of Earnings — 실제 브릿지
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              매도자 제시 EBITDA → FDD 확인 EBITDA. 이 차이가 최종 딜 가격 협상의 기준점이 된다.
            </motion.p>

            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-6 mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">EBITDA 브릿지 — 가상 예시 ($100M 기업, 15× 멀티플)</p>
              <div className="space-y-2">
                {FDD_BRIDGE.map((row) => (
                  <div key={row.label} className={`flex items-center justify-between gap-3 py-2 ${row.bold ? "border-t-2 border-gray-300 dark:border-gray-600 pt-3 mt-1" : ""}`}>
                    <div className="flex gap-3 items-center">
                      <span className={`text-sm font-bold w-4 text-right flex-shrink-0 ${row.color}`}>{row.sign}</span>
                      <span className={`text-sm ${row.bold ? "font-black text-gray-900 dark:text-gray-100" : "text-gray-600 dark:text-gray-400"}`}>{row.label}</span>
                    </div>
                    <span className={`text-sm font-black font-mono flex-shrink-0 ${row.bold ? "text-blue-600 dark:text-blue-400" : row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">딜 가격 영향 (15×)</span>
                  <span className="text-base font-black text-rose-500">–$315M <span className="text-xs font-normal text-gray-400">(=$120M→$99M, ×15)</span></span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "평균 FDD 헤어컷", value: "10~30%", sub: "Big 4 FDD 실무 기준", color: "text-rose-500" },
                { label: "KPMG: FDD 후 12개월 내\nEBITDA 15% 이상 하회", value: "35%", sub: "KPMG Deal Advisory Survey 2019", color: "text-amber-500" },
                { label: "비반복 add-back 중\n실제 재발생률", value: "65~70%", sub: "Doyle, Jennings & Soliman (2013), JAE", color: "text-purple-500" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 text-center">
                  <p className={`text-3xl font-black font-mono ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1 whitespace-pre-line">{stat.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 6. 레드플래그 체크리스트 ═════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              레드플래그 체크리스트
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              CIM을 받았을 때 Adjusted EBITDA 브릿지에서 먼저 확인해야 할 항목들.
            </motion.p>
            <motion.div variants={stagger(0.06)} className="space-y-2">
              {RED_FLAGS.map((flag, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex gap-3 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3.5"
                >
                  <span className="text-rose-400 font-black text-sm flex-shrink-0 mt-0.5">⚑</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{flag}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 7. 핵심 요약 ══════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-3 py-1">핵심 요약</span>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 border border-gray-200 dark:border-gray-700/60 p-6 mb-5">
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
                Adjusted EBITDA는 회계 기준 논쟁이 아니다. <br />
                EV = Multiple × EBITDA 공식에서 분모를 둘러싼 <strong>수백억 원짜리 가격 전쟁</strong>이다.<br />
                매도자·IB·LevFin·경영진의 인센티브는 모두 EBITDA를 높이는 방향을 가리킨다.<br />
                FDD/QoE팀만이 반대편에 서 있다 — 그마저도 완전히 자유롭지 않다.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5">
              {[
                { num: "01", title: "$1 add-back = 멀티플 × $1 딜 가격 상승", body: "이것이 모든 논쟁의 출발점. 단순한 회계 규칙이 아니라 협상 레버다.", color: "text-rose-500" },
                { num: "02", title: "이해관계자 대부분이 EBITDA를 높이려는 방향", body: "매도자 IB(성공보수), LevFin(대출 규모), 경영진(MIP) — 구조적으로 부풀려질 수밖에 없는 환경.", color: "text-amber-500" },
                { num: "03", title: "1회성 판정이 핵심 전쟁터", body: "Doyle et al.(2013): 비반복으로 분류된 항목의 65~70%가 실제로 재발생. 패턴이 보이면 구조 비용으로 봐야 한다.", color: "text-blue-500" },
                { num: "04", title: "EBITDA는 하나가 아니다", body: "Reported → Management Adjusted → FDD → Rating Agency → Covenant. 어떤 기준인지 먼저 확인하지 않으면 대화 자체가 엇갈린다.", color: "text-purple-500" },
                { num: "05", title: "FDD 헤어컷은 평균 10~30%", body: "KPMG 조사: 딜의 35%에서 취득 후 12개월 내 EBITDA가 FDD 추정치 대비 15% 이상 하회. 숫자가 틀렸을 때 책임은 매수자가 진다.", color: "text-emerald-500" },
              ].map((pt) => (
                <motion.div key={pt.num} variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 px-4 py-3.5"
                >
                  <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${pt.color}`}>{pt.num}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-0.5">{pt.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 8. 규제 프레임워크 ════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">규제 프레임워크</motion.h2>
            <motion.div variants={stagger(0.06)} className="space-y-2">
              {[
                { label: "SEC Regulation G", detail: "2003년 3월 시행. SOX 401(b)조에 근거. Non-GAAP 지표 공시 시 GAAP 지표와의 조정표 동등 이상 의무 공시 (17 CFR Part 244, Rule 100(b))" },
                { label: "SEC C&DI 업데이트 (2016년 5월 17일)", detail: "가장 중요한 현대화 업데이트. '반복 발생하는 현금 영업비용의 비반복 분류 금지', 'GAAP 지표보다 Non-GAAP을 더 두드러지게 표시 금지'를 명시" },
                { label: "SEC Item 10(e) of Regulation S-K", detail: "현금 결제를 요하는 부채·비용의 Non-GAAP 제외 금지. 2년 내 재발 예상 항목의 비반복 분류 금지" },
                { label: "FASB ASC 718 (2006년 효력)", detail: "주식옵션 비용화 의무화. 이전 APB 25 기준에서 비용 처리 면제됐던 SBC를 손익계산서에 반영 의무화" },
              ].map((reg) => (
                <motion.div key={reg.label} variants={fadeUp}
                  className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3.5"
                >
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-0.5">{reg.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{reg.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 9. 참고 자료 ══════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">참고 자료</motion.h2>
            <motion.ol variants={stagger(0.05)} className="space-y-2">
              {[
                { label: "Doyle, Jennings & Soliman (2013)", detail: "Do Managers Define Non-GAAP Earnings to Meet or Beat Analyst Forecasts? — Journal of Accounting and Economics, Vol. 56" },
                { label: "Ciesielski & Henry (2017)", detail: "Accounting's Tower of Babel: The Promise and Peril of Non-GAAP Measures — Financial Analysts Journal, Vol. 73, No. 1" },
                { label: "Leung & Veenman (2018)", detail: "Non-GAAP Earnings Disclosure in Loss Firms — Journal of Accounting Research, Vol. 56, No. 4" },
                { label: "WeWork S-1 (2019)", detail: "The We Company Form S-1, August 14, 2019 — SEC EDGAR (Community-Adjusted EBITDA 정의 원문)" },
                { label: "SEC Regulation G", detail: "17 CFR Part 244 (2003); C&DI Update May 17, 2016 — SEC Division of Corporation Finance" },
                { label: "KPMG Deal Advisory (2019)", detail: "Financial Due Diligence Survey — Post-acquisition EBITDA performance analysis (~200 PE deals)" },
                { label: "S&P LCD / PitchBook", detail: "Global Leveraged Loan Market Data 2014–2019; PE add-back as % of EBITDA statistics" },
                { label: "Warren Buffett", detail: "Berkshire Hathaway Annual Letters 2000, 2002, 2004 — EBITDA and SBC critique" },
                { label: "Axelson, Jenkinson, Strömberg & Weisbach (2013)", detail: "Borrow Cheap, Buy High? The Determinants of Leverage and Pricing in Buyouts — Journal of Finance, Vol. 68, No. 6" },
              ].map((ref, i) => (
                <motion.li key={ref.label} variants={fadeUp} className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-gray-300 dark:text-gray-600 font-mono flex-shrink-0">[{i + 1}]</span>
                  <span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{ref.label}</span>
                    {" — "}{ref.detail}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* ══ 관련 딜 ═══════════════════════════════════════════ */}
          {relatedDeals.length > 0 && (
            <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <div className="border-t border-gray-100 dark:border-gray-800 mb-10" />
              <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">
                이 개념이 등장한 딜
              </motion.h2>
              <motion.div variants={stagger(0.06)} className="space-y-3">
                {relatedDeals.map((deal) => (
                  <motion.div key={deal.slug} variants={fadeUp}>
                    <Link
                      href={`/deals/${deal.slug}`}
                      className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{deal.title}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{deal.acquirer} → {deal.target}</p>
                          {deal.conceptDescription && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{deal.conceptDescription}</p>
                          )}
                        </div>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex-shrink-0">{deal.dealValueDisplay}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* ══ 관련 개념 ══════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">함께 알아두면 좋은 개념</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                { label: "EV/EBITDA 멀티플", href: "/deal-101/ev-ebitda", note: "분모 기초 개념" },
                { label: "LBO", href: "/deal-101/lbo", note: "레버리지 구조" },
                { label: "MAC 조항", href: "/deal-101/mac-clause", note: "EBITDA 악화 시 계약 파기" },
                { label: "Break-up Fee", href: "/deal-101/break-fee", note: "딜 파기 위약금" },
              ].map((item) => (
                <Link key={item.label} href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center pt-2">
            <Link href="/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← 딜 101 전체 개념 목록
            </Link>
          </motion.div>

        </div>
        <LikeButton slug={"adjusted-ebitda"} lang={lang} />
      </main>
      <Footer />
    </>
  );
}
