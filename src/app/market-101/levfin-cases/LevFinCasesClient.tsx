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
const accent = "#eab308"; // yellow-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const LEVFIN_SERIES = [
  { slug: "levfin-ecosystem",      ch: 0, title: (ko: boolean) => ko ? "LevFin 개요"          : "LevFin Overview"      },
  { slug: "levfin-hy-vs-loans",    ch: 1, title: (ko: boolean) => ko ? "Ch.1 HY채권 vs 론"    : "Ch.1 HY vs Loans"     },
  { slug: "levfin-credit-metrics", ch: 2, title: (ko: boolean) => ko ? "Ch.2 크레딧 메트릭"    : "Ch.2 Credit Metrics"  },
  { slug: "levfin-covenants",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 코버넌트"         : "Ch.3 Covenants"       },
  { slug: "levfin-process",        ch: 4, title: (ko: boolean) => ko ? "Ch.4 딜 프로세스"      : "Ch.4 Deal Process"    },
  { slug: "levfin-pricing",        ch: 5, title: (ko: boolean) => ko ? "Ch.5 프라이싱 심화"    : "Ch.5 Advanced Pricing"},
  { slug: "levfin-distressed",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정": "Ch.6 Distressed"      },
  { slug: "levfin-cases",          ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"      : "Ch.7 Case Studies"    },
];
const thisCh = 7;

// ── Case Studies Data ─────────────────────────────────────────────────────────

const CASE_1_TIMELINE = [
  {
    date: "Oct 1988",
    event: (ko: boolean) => ko ? "F. Ross Johnson, 경영진 MBO 공표 ($75/주)" : "F. Ross Johnson announces management buyout at $75/share",
    detail: (ko: boolean) => ko
      ? "RJR Nabisco CEO가 Shearson Lehman과 함께 $75/주 MBO를 발표. 시장은 충격. 이사회는 공개 입찰로 전환."
      : "RJR Nabisco CEO teams with Shearson Lehman to announce $75/share MBO. The board pivots to an open auction.",
    metric: "$75/주",
    dot: "bg-yellow-500",
    color: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
    sentiment: "start",
  },
  {
    date: "Nov 1988",
    event: (ko: boolean) => ko ? "KKR 참전 — 입찰전 과열" : "KKR enters — bidding war erupts",
    detail: (ko: boolean) => ko
      ? "Henry Kravis(KKR)가 $90/주로 입찰 참전. Johnson 컨소시엄과 수차례 입찰 경쟁. 주가는 announcement 이전 $55에서 $100+로 폭등."
      : "Henry Kravis (KKR) enters with a $90/share bid. Multiple rounds of escalating bids vs Johnson's consortium. Stock rockets from pre-announcement $55 to $100+.",
    metric: "$90 → $100+/주",
    dot: "bg-orange-500",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
    sentiment: "escalate",
  },
  {
    date: "Dec 1988",
    event: (ko: boolean) => ko ? "KKR 낙찰 $109/주 — $31.4bn 총 딜" : "KKR wins at $109/share — $31.4bn total deal",
    detail: (ko: boolean) => ko
      ? "KKR이 최종 $109/주로 낙찰. 공표 전 대비 25× 프리미엄. $31.4bn은 당시 역대 최대 인수합병. Drexel Burnham Lambert가 $24.7bn 정크 본드 발행."
      : "KKR wins final bid at $109/share — a 25× premium to pre-announcement price. $31.4bn was the largest M&A ever at the time. Drexel Burnham Lambert issues $24.7bn in junk bonds.",
    metric: "$109/주, 당시 역대 최대",
    dot: "bg-rose-500",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
    sentiment: "peak",
  },
  {
    date: "1989–1991",
    event: (ko: boolean) => ko ? "비공개 전환, 자산 매각" : "Goes private, asset divestitures begin",
    detail: (ko: boolean) => ko
      ? "RJR Nabisco 비공개화. Del Monte Foods 분리 매각, 국제 브랜드 다수 매각. 부채 상환 재원 확보. Drexel은 1990년 파산 신청."
      : "RJR Nabisco goes private. Del Monte Foods spun off and sold, multiple international brands divested. Proceeds fund debt repayment. Drexel files for bankruptcy in 1990.",
    metric: "자산 매각 연속",
    dot: "bg-blue-500",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
    sentiment: "recovery",
  },
  {
    date: "1991–1994",
    event: (ko: boolean) => ko ? "부분 IPO 후 KKR 최종 엑싯" : "Partial IPO then KKR full exit",
    detail: (ko: boolean) => ko
      ? "1991년 RJR International 부분 IPO. 1994년 KKR 잔여 지분 매각 완료. IRR 약 8–10% — 입찰 전쟁 과열로 초과 지불. 담배 규제 강화도 밸류에이션 압박."
      : "1991 partial IPO of RJR International. 1994 KKR fully exits. IRR ~8–10% — overpaid in bidding war. Tobacco regulation fears also pressured valuation.",
    metric: "IRR ~8–10% (기대 이하)",
    dot: "bg-gray-500",
    color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
    sentiment: "exit",
  },
];

const CASE_2_TIMELINE = [
  {
    date: "Jul 2007",
    event: (ko: boolean) => ko ? "블랙스톤 $26.9bn 힐튼 인수" : "Blackstone closes $26.9bn Hilton acquisition",
    detail: (ko: boolean) => ko
      ? "에쿼티 $5.5bn (20%), TLB $7bn + 메자닌/HY $4.5bn + RCF $2bn + 기타 $7.9bn. 레버리지 7.5× EBITDA ($2.85bn). 역대 최대 호텔 LBO."
      : "Equity $5.5bn (20%), TLB $7bn + mezzanine/HY $4.5bn + RCF $2bn + other $7.9bn. Leverage 7.5× EBITDA ($2.85bn). Largest hotel LBO ever.",
    metric: "레버리지 7.5×",
    dot: "bg-yellow-500",
    color: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
    sentiment: "start",
  },
  {
    date: "2008–2009",
    event: (ko: boolean) => ko ? "GFC — RevPAR 20%+ 폭락, 레버리지 12–13× 급등" : "GFC — RevPAR collapses 20%+, leverage spikes 12–13×",
    detail: (ko: boolean) => ko
      ? "글로벌 금융위기로 RevPAR(객실당 수입) 20%+ 급락. EBITDA는 $2.85bn → ~$1.5bn. 레버리지 12–13×으로 치솟아 기술적 부도 직전. 이자 비용 연 ~$1.4bn."
      : "GFC causes RevPAR to plunge 20%+. EBITDA drops from $2.85bn to ~$1.5bn. Leverage spikes to 12–13×, approaching technical default. Annual interest ~$1.4bn.",
    metric: "레버리지 12–13× (위기)",
    dot: "bg-rose-500",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
    sentiment: "crisis",
  },
  {
    date: "2010–2013",
    event: (ko: boolean) => ko ? "블랙스톤 $800mn 추가 에쿼티 + 글로벌 확장" : "Blackstone injects $800mn more equity + global expansion",
    detail: (ko: boolean) => ko
      ? "최악의 상황에서 추가 $800mn 에쿼티 투입. Chris Nassetta CEO 영입, $550mn IT 현대화(Hilton Honors 프로그램). 중국·중동 글로벌 확장. EBITDA $2.5bn 회복."
      : "Injects additional $800mn equity at the worst point. Hires Chris Nassetta as CEO, $550mn IT modernization (Hilton Honors). Global expansion into China and Middle East. EBITDA recovers to $2.5bn.",
    metric: "EBITDA $2.5bn 회복",
    dot: "bg-blue-500",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
    sentiment: "recovery",
  },
  {
    date: "Dec 2013",
    event: (ko: boolean) => ko ? "NYSE IPO $20/주 — 역대 최대 호텔 IPO $2.35bn" : "NYSE IPO at $20/share — Largest hotel IPO ever, raised $2.35bn",
    detail: (ko: boolean) => ko
      ? "NYSE 상장, 공모 $2.35bn, EV $32bn. 블랙스톤 76% 지분 유지. 인수 EV $26.9bn → IPO EV $32bn. 에쿼티 가치 수배 증가. 이후 단계적 블록 세일."
      : "NYSE listing, raised $2.35bn, EV $32bn. Blackstone retains 76% stake. Acquisition EV $26.9bn → IPO EV $32bn. Equity value multiplied. Subsequent staged block sales.",
    metric: "EV $26.9bn → $32bn",
    dot: "bg-emerald-500",
    color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20",
    sentiment: "success",
  },
  {
    date: "Jan 2018",
    event: (ko: boolean) => ko ? "블랙스톤 완전 엑싯 — $14bn+ 회수" : "Blackstone completes full exit — $14bn+ returned",
    detail: (ko: boolean) => ko
      ? "11년 보유. $5.5bn 에쿼티 → $14bn+ 회수. MoM ~2.6×, IRR ~21%. PE 역사상 단일 딜 절대 달러 수익 최대 중 하나. Hilton Honors 회원은 1억 1천만 명으로 성장."
      : "11-year hold. $5.5bn equity invested → $14bn+ returned. MoM ~2.6×, IRR ~21%. One of the largest absolute dollar returns in PE history. Hilton Honors membership grew to 110 million.",
    metric: "MoM 2.6×, IRR 21%",
    dot: "bg-teal-500",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
    sentiment: "exit",
  },
];

const CASE_3_SPIRAL = [
  { year: "2005", revenue: "$11.5bn", ebitda: "$660mn", interest: "$450mn", event: (ko: boolean) => ko ? "LBO 완료. KKR+Bain+Vornado 인수. 레버리지 ~8×." : "LBO closes. KKR+Bain+Vornado acquire. Leverage ~8×." },
  { year: "2006", revenue: "$11.2bn", ebitda: "$620mn", interest: "$460mn", event: (ko: boolean) => ko ? "아마존이 완구 섹션 확대. TRU 온라인 경쟁 시작." : "Amazon expands toys section. TRU feels online competition." },
  { year: "2008", revenue: "$10.8bn", ebitda: "$580mn", interest: "$470mn", event: (ko: boolean) => ko ? "GFC로 소비 위축 + 아마존 공격적 할인. 디지털 전환 예산 없음." : "GFC reduces spending + Amazon aggressive discounting. No budget for digital transformation." },
  { year: "2010", revenue: "$10.3bn", ebitda: "$530mn", interest: "$460mn", event: (ko: boolean) => ko ? "iPad 출시 → 전자완구 시대. 점포 트래픽 감소 시작." : "iPad launches → digital toy era. Store traffic begins declining." },
  { year: "2013", revenue: "$9.5bn", ebitda: "$450mn", interest: "$460mn", event: (ko: boolean) => ko ? "이자비용이 EBITDA를 추월. 사실상 현금 부족. 추가 차입 시작." : "Interest expense exceeds EBITDA. Effectively cash-starved. Additional borrowing begins." },
  { year: "2015", revenue: "$8.7bn", ebitda: "$370mn", interest: "$480mn", event: (ko: boolean) => ko ? "쿠폰 지급에 필요한 현금 부족. 채무 조정 논의 시작." : "Insufficient cash for coupon payments. Debt restructuring discussions begin." },
  { year: "Sep 2017", revenue: "N/A", ebitda: "N/A", interest: "N/A", event: (ko: boolean) => ko ? "챕터 11 파산 신청. 685개 미국 점포." : "Chapter 11 bankruptcy filing. 685 US stores." },
  { year: "Mar 2018", revenue: "N/A", ebitda: "N/A", interest: "N/A", event: (ko: boolean) => ko ? "청산 결정. 735개 미국 점포 모두 폐점. 직원 33,000명 해고." : "Liquidation decision. All 735 US stores close. 33,000 employees lose jobs." },
];

const CASE_4_LME = [
  {
    step: "1",
    title: (ko: boolean) => ko ? "딜 완료 (2008)" : "Deal Closes (2008)",
    detail: (ko: boolean) => ko
      ? "Apollo+TPG, $30.7bn에 Harrah's Entertainment(후에 Caesars로 개명) 인수. 에쿼티 ~$2bn (~6.5%). 부채 ~$28bn. 레버리지 ~7× EBITDA($4.4bn 게이밍 EBITDA)."
      : "Apollo+TPG acquire Harrah's Entertainment (later renamed Caesars) for $30.7bn. Equity ~$2bn (~6.5%). Debt ~$28bn. Leverage ~7× EBITDA ($4.4bn gaming EBITDA).",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
  },
  {
    step: "2",
    title: (ko: boolean) => ko ? "GFC 위기 (2008–09)" : "GFC Crisis (2008–09)",
    detail: (ko: boolean) => ko
      ? "라스베이거스 게이밍 수입 20%+ 급락. EBITDA 압박으로 레버리지 급등. Caesars는 채무 상환 능력에 의문 부호. 수년간 버티기 시작."
      : "Las Vegas gaming revenue collapses 20%+. EBITDA pressure spikes leverage. Caesars' debt service ability comes into question. Years of survival mode begin.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
  },
  {
    step: "3",
    title: (ko: boolean) => ko ? "LME 실행 (2013–2014)" : "LME Executed (2013–2014)",
    detail: (ko: boolean) => ko
      ? "Apollo/TPG가 핵심 자산(Caesars Palace, Paris Las Vegas, Bally's, Harrah's Las Vegas)을 새 법인 CEOC(Caesars Entertainment Operating Company)로 이전. CEOC가 $750mn 수퍼 선순위 노트 발행. 기존 채권자들의 담보 가치 대폭 감소."
      : "Apollo/TPG transfer prime assets (Caesars Palace, Paris Las Vegas, Bally's, Harrah's Las Vegas) to new entity CEOC (Caesars Entertainment Operating Company). CEOC issues $750mn super-priority notes. Legacy entity creditors see their collateral substantially reduced.",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
  },
  {
    step: "4",
    title: (ko: boolean) => ko ? "소송 전쟁 (2014–2017)" : "Litigation War (2014–2017)",
    detail: (ko: boolean) => ko
      ? "채권 수탁자(Bond Trustee)가 사기성 자산 이전(Fraudulent Transfer) 및 신탁 의무 위반(Breach of Fiduciary Duty) 소송 제기. Apollo/TPG는 신용 문서상 허용 행위 주장. 결국 Apollo/TPG가 $1.25bn 합의금 지급."
      : "Bond trustee sues alleging fraudulent transfer and breach of fiduciary duty. Apollo/TPG argue transfers were permitted under credit documents. Ultimately Apollo/TPG pay $1.25bn settlement.",
    color: "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20",
    dot: "bg-red-500",
  },
  {
    step: "5",
    title: (ko: boolean) => ko ? "챕터 11 및 에머전스 (2015–2017)" : "Chapter 11 and Emergence (2015–2017)",
    detail: (ko: boolean) => ko
      ? "Caesars Entertainment Operating Company(CEOC) 챕터 11 신청(2015년 1월). 복잡한 구조조정 협상. 2017년 10월 챕터 11 졸업. Apollo/TPG 에쿼티 지분 거의 0으로 희석."
      : "CEOC files Chapter 11 (January 2015). Complex restructuring negotiations. Emerges from Chapter 11 in October 2017. Apollo/TPG equity interest diluted to near zero.",
    color: "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
    dot: "bg-gray-500",
  },
];

const HOMEPLUS_FACTS = [
  { label: (ko: boolean) => ko ? "딜 규모" : "Deal Size", value: "₩7.2조 (~$6.1bn)", note: (ko: boolean) => ko ? "한국 역사상 최대 LBO" : "Largest LBO in Korean history" },
  { label: (ko: boolean) => ko ? "매도자" : "Seller", value: "Tesco PLC", note: (ko: boolean) => ko ? "영국 유통 그룹, 한국 사업 철수" : "UK retail group exiting Korea" },
  { label: (ko: boolean) => ko ? "매수자" : "Buyer", value: "MBK Partners", note: (ko: boolean) => ko ? "아시아 최대 PE 중 하나" : "One of Asia's largest PE funds" },
  { label: (ko: boolean) => ko ? "에쿼티" : "Equity", value: "~₩2.3조 (32%)", note: (ko: boolean) => ko ? "MBK + 공동 투자자" : "MBK + co-investors" },
  { label: (ko: boolean) => ko ? "부채" : "Debt", value: "~₩4.9조 (68%)", note: (ko: boolean) => ko ? "국내외 은행 신디케이션론 (CLO 없음)" : "Domestic/international bank syndication (no CLO)" },
  { label: (ko: boolean) => ko ? "주관사" : "Lead Banks", value: "Citi, Goldman, KB국민, KEB하나", note: (ko: boolean) => ko ? "국제+국내 혼합 신디케이션" : "International + domestic mixed syndication" },
  { label: (ko: boolean) => ko ? "진입 레버리지" : "Entry Leverage", value: "~7× EBITDA", note: (ko: boolean) => ko ? "EBITDA ₩1조+ 기준" : "Based on EBITDA of ₩1tr+" },
  { label: (ko: boolean) => ko ? "금리 기준" : "Rate Benchmark", value: "CD 91일물 + 스프레드", note: (ko: boolean) => ko ? "SOFR 대신 한국 시장 관행" : "Korea market convention vs global SOFR" },
];

// ── Cross-Case Comparison ─────────────────────────────────────────────────────
const CASE_COMPARISON = [
  {
    name: "KKR / RJR Nabisco",
    year: "1989",
    size: "$31.4bn",
    leverage: "~8×",
    sponsor_equity: "~$1.5bn (~5%)",
    outcome: (ko: boolean) => ko ? "IRR ~8–10%. 과도한 입찰로 수익 저조." : "IRR ~8–10%. Overbid; poor returns.",
    status: "mediocre",
    emoji: "📉",
  },
  {
    name: "Blackstone / Hilton",
    year: "2007",
    size: "$26.9bn",
    leverage: "7.5×",
    sponsor_equity: "$5.5bn (20%)",
    outcome: (ko: boolean) => ko ? "MoM 2.6×, IRR 21%. PE 역사 최대 수익 딜 중 하나." : "MoM 2.6×, IRR 21%. One of PE's greatest absolute returns.",
    status: "success",
    emoji: "🏆",
  },
  {
    name: "KKR+Bain / Toys R Us",
    year: "2005",
    size: "$6.6bn",
    leverage: "~8×",
    sponsor_equity: "$1.3bn (20%)",
    outcome: (ko: boolean) => ko ? "전액 손실. 2018년 청산. 직원 33,000명 해고." : "Total loss. Liquidated 2018. 33,000 jobs lost.",
    status: "loss",
    emoji: "💀",
  },
  {
    name: "Apollo+TPG / Caesars",
    year: "2008",
    size: "$30.7bn",
    leverage: "~7×",
    sponsor_equity: "~$2bn (6.5%)",
    outcome: (ko: boolean) => ko ? "에쿼티 거의 손실. $1.25bn 소송 합의. 챕터 11 졸업." : "Near total equity loss. $1.25bn settlement. Chapter 11 exit.",
    status: "loss",
    emoji: "⚖️",
  },
  {
    name: "MBK / 홈플러스",
    year: "2015",
    size: "₩7.2조",
    leverage: "~7×",
    sponsor_equity: "~₩2.3조 (32%)",
    outcome: (ko: boolean) => ko ? "9년 보유 중 (2024 기준). 평가 수익률 부진. 엑싯 미완." : "Holding 9+ years (as of 2024). Subdued returns. Exit pending.",
    status: "unclear",
    emoji: "⏳",
  },
];

// ── Six Lessons ───────────────────────────────────────────────────────────────
const SIX_LESSONS = [
  {
    num: "01",
    title: (ko: boolean) => ko
      ? "사업 모델의 구조적 건전성이 레버리지보다 중요하다"
      : "Business model soundness matters more than leverage size",
    body: (ko: boolean) => ko
      ? "힐튼(사이클 하락, 구조적 건전) vs 토이저러스(구조적 붕괴). 사이클 산업은 레버리지를 견딜 수 있지만, 구조적 붕괴 산업은 레버리지가 하락 속도를 극적으로 앞당긴다."
      : "Hilton (cyclical decline, structurally sound) vs Toys R Us (structural collapse). Cyclical industries can sustain leverage; structurally declining industries see leverage dramatically accelerate the fall.",
    icon: "🏗️",
    color: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
  },
  {
    num: "02",
    title: (ko: boolean) => ko
      ? "PE 스폰서의 추가 자원 투입 의지가 결정적이다"
      : "The sponsor's willingness to inject more capital is decisive",
    body: (ko: boolean) => ko
      ? "블랙스톤은 최악의 시기에 $800mn 추가 에쿼티를 투입했다. RJR Nabisco 스폰서는 자산 매각으로 대응했다. 추가 투자는 채권자에게 확신을 주고 경영 개선에 필요한 자원을 확보한다."
      : "Blackstone injected $800mn more equity at the worst moment. RJR Nabisco sponsors responded with asset sales. Additional investment signals conviction to creditors and provides resources needed for operational improvements.",
    icon: "💪",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
  },
  {
    num: "03",
    title: (ko: boolean) => ko
      ? "관리 팀의 질이 레버리지 리스크를 상쇄할 수 있다"
      : "Management quality can offset leverage risk",
    body: (ko: boolean) => ko
      ? "Chris Nassetta(힐튼 CEO)는 위기 속에서 Hilton Honors를 글로벌 브랜드로 키웠다. 훌륭한 경영진은 레버리지 압박 속에서도 가치를 창출한다. 반면 토이저러스는 디지털 전환 리더십이 부재했다."
      : "Chris Nassetta (Hilton CEO) built Hilton Honors into a global powerhouse through the crisis. Great management creates value even under leverage pressure. Toys R Us, by contrast, lacked digital transformation leadership.",
    icon: "👤",
    color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20",
  },
  {
    num: "04",
    title: (ko: boolean) => ko
      ? "복잡한 LME는 단기 생존, 장기 신뢰 파괴"
      : "Complex LMEs buy short-term survival but destroy long-term trust",
    body: (ko: boolean) => ko
      ? "Caesars LME는 2–3년의 시간을 벌었지만 $1.25bn 소송 합의와 채권 시장 신뢰 손상으로 이어졌다. 이후 모든 새 인덴처는 핵심 자산의 비제한 자회사 이전을 명시 금지하는 '시저스 조항'을 삽입했다."
      : "Caesars' LME bought 2–3 years but led to a $1.25bn settlement and lasting damage to bond market trust. Every new indenture now includes an explicit 'Caesars clause' prohibiting transfer of material assets to unrestricted subsidiaries.",
    icon: "⚖️",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
  {
    num: "05",
    title: (ko: boolean) => ko
      ? "진입 배수보다 진출 배수가 중요하다"
      : "Exit multiple matters more than entry multiple",
    body: (ko: boolean) => ko
      ? "힐튼의 진입 EV/EBITDA는 ~9.5×였지만 IPO 시 ~13×로 멀티플 익스팬션이 발생했다. LBO 수익의 상당 부분은 레버리지 감소 + 멀티플 확장의 조합에서 나온다. 성장 스토리가 있는 사업만이 멀티플 익스팬션이 가능하다."
      : "Hilton's entry EV/EBITDA was ~9.5×, but IPO was ~13× — multiple expansion occurred. A significant portion of LBO returns comes from leverage paydown + multiple expansion combined. Only businesses with growth narratives can achieve multiple expansion.",
    icon: "📈",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
  },
  {
    num: "06",
    title: (ko: boolean) => ko
      ? "레버리지는 좋은 사업을 더 좋게, 나쁜 사업을 치명적으로 만든다"
      : "Leverage makes good businesses great and bad businesses fatal",
    body: (ko: boolean) => ko
      ? "이것이 LBO의 본질이다. 레버리지는 수익을 극대화하지만 손실도 극대화한다. LBO 분석의 첫 번째 질문은 항상 '이 사업이 레버리지를 감당할 수 있는가'여야 한다 — 재무 모델이 아닌 사업 전략에서 시작해야 한다."
      : "This is the essence of LBO. Leverage amplifies returns and losses equally. The first question in any LBO analysis must be 'can this business sustain leverage?' — starting from business strategy, not financial models.",
    icon: "⚡",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
  },
];

// ── Bar chart data (returns comparison) ──────────────────────────────────────
const RETURNS_CHART = [
  { name: "Hilton\n(Blackstone)", irr: 21, mom: 2.6, color: "bg-emerald-500", textColor: "text-emerald-600 dark:text-emerald-400" },
  { name: "RJR Nabisco\n(KKR)", irr: 9, mom: 1.2, color: "bg-amber-400", textColor: "text-amber-600 dark:text-amber-400" },
  { name: "Toys R Us\n(KKR+Bain)", irr: 0, mom: 0, color: "bg-rose-500", textColor: "text-rose-600 dark:text-rose-400" },
  { name: "Caesars\n(Apollo+TPG)", irr: 0, mom: 0, color: "bg-rose-400", textColor: "text-rose-600 dark:text-rose-400" },
  { name: "홈플러스\n(MBK)", irr: 3, mom: 1.1, color: "bg-gray-400", textColor: "text-gray-600 dark:text-gray-400" },
];
const maxIrr = 21;

// ── Series Roadmap ────────────────────────────────────────────────────────────
const SERIES_ROADMAP = [
  { ch: 0, slug: "levfin-ecosystem",      title: (ko: boolean) => ko ? "LevFin 생태계 전체 지도"          : "LevFin Ecosystem Overview",      summary: (ko: boolean) => ko ? "HY 채권, 레버리지드 론, CLO, 신용 사이클의 전체 지형" : "HY bonds, leveraged loans, CLOs, credit cycle landscape" },
  { ch: 1, slug: "levfin-hy-vs-loans",    title: (ko: boolean) => ko ? "HY 채권 vs 레버리지드 론"          : "HY Bonds vs Leveraged Loans",     summary: (ko: boolean) => ko ? "두 상품의 구조, 조건, 투자자 기반의 핵심 차이" : "Core structural differences, terms, investor base" },
  { ch: 2, slug: "levfin-credit-metrics", title: (ko: boolean) => ko ? "크레딧 메트릭과 EBITDA 어드저스트" : "Credit Metrics & EBITDA Adjusts", summary: (ko: boolean) => ko ? "레버리지 측정, EBITDA add-back, 커버리지 비율" : "Leverage measurement, EBITDA add-backs, coverage ratios" },
  { ch: 3, slug: "levfin-covenants",      title: (ko: boolean) => ko ? "코버넌트 구조"                     : "Covenant Architecture",          summary: (ko: boolean) => ko ? "유지형 vs 발생형, Cov-Lite, 기술적 부도 메커니즘" : "Maintenance vs incurrence, Cov-Lite, technical default" },
  { ch: 4, slug: "levfin-process",        title: (ko: boolean) => ko ? "딜 프로세스 완전 해부"             : "Deal Process Deep Dive",         summary: (ko: boolean) => ko ? "로드쇼, 신디케이션, OID, 플렉스 메커니즘" : "Roadshow, syndication, OID, flex mechanism" },
  { ch: 5, slug: "levfin-pricing",        title: (ko: boolean) => ko ? "프라이싱 심화 — 스프레드의 과학"    : "Advanced Pricing — Spread Science", summary: (ko: boolean) => ko ? "시장 타이밍, 새 발행 컨세션, 신용 사이클별 프라이싱" : "Market timing, new issue concession, pricing across cycles" },
  { ch: 6, slug: "levfin-distressed",     title: (ko: boolean) => ko ? "부실채권·구조조정 실전"            : "Distressed & Restructuring",     summary: (ko: boolean) => ko ? "챕터 11, 부채-에쿼티 스왑, LME, 채권자 협상" : "Chapter 11, debt-equity swaps, LMEs, creditor negotiations" },
  { ch: 7, slug: "levfin-cases",          title: (ko: boolean) => ko ? "케이스 종합 — 역사를 바꾼 LBO 5개"  : "Case Studies — 5 History-Changing LBOs", summary: (ko: boolean) => ko ? "RJR, Hilton, Toys R Us, Caesars, 홈플러스 완전 해부" : "RJR, Hilton, Toys R Us, Caesars, Homeplus fully dissected" },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "RJR Nabisco 이후 미국 LBO 시장이 어떻게 변했나요? 1990년대는 왜 조용했나요?"
      : "How did the US LBO market change after RJR Nabisco? Why was the 1990s quiet?",
    a: (ko: boolean) => ko
      ? "1989–1990년 정크 본드 시장 붕괴(Drexel Burnham Lambert 1990년 파산, Michael Milken 기소)가 HY 시장을 2년간 사실상 폐쇄시켰습니다. S&L(저축대부조합) 위기로 은행 대출도 고갈됐습니다. 1990년대 LBO 규모는 연간 $20–30bn으로, 1980년대 후반 $100bn+ 정점의 20–30% 수준으로 쪼그라들었습니다. 1997–2000년(닷컴 버블)과 2004–2007년(신용 호황)이 되어서야 1989년 수준을 회복했습니다. 규제 변화(Reg FD, Sarbanes-Oxley)도 시장 구조를 바꿨습니다."
      : "The 1989–1990 junk bond market collapse (Drexel Burnham Lambert bankruptcy in 1990, Michael Milken indictment) effectively shut the HY market for 2 years. The S&L crisis dried up bank lending. LBO volumes collapsed to ~$20–30bn/yr vs the $100bn+ late-1980s peak. It wasn't until 1997–2000 (dot-com era) and then 2004–2007 (credit boom) that volumes returned to 1989 levels. Regulatory changes (Reg FD, Sarbanes-Oxley) also changed market structure.",
  },
  {
    q: (ko: boolean) => ko
      ? "Blackstone이 Hilton에서 성공한 가장 결정적 요인은 무엇인가요?"
      : "What was the single most decisive factor in Blackstone's success with Hilton?",
    a: (ko: boolean) => ko
      ? "대부분의 분석가는 두 가지를 꼽습니다. ① 기초 사업의 질 — 호텔업은 경기 사이클 산업이지 구조적 붕괴 산업이 아닙니다. 경기가 회복되면 RevPAR도 반드시 회복됩니다. 이것이 토이저러스(구조적 붕괴, e-커머스)와의 근본적 차이입니다. ② 위기 시 추가 에쿼티 투입 의지 — 블랙스톤은 '키를 돌려줄 수도' 있었지만 대신 $800mn을 추가 투입했습니다. 이는 기초 사업에 대한 스폰서의 확신을 보여주고 채권자 신뢰를 만들었습니다. 이 추가 투입 없이는 힐튼도 구조조정을 피하지 못했을 것입니다."
      : "Most analysts point to two factors. ① Quality of the underlying business — hotels are cyclical, not structurally declining. When the economy recovers, hotel RevPAR always recovers too. This is the fundamental difference from Toys R Us (structural destruction via e-commerce). ② Willingness to inject more equity during the crisis — Blackstone could have 'handed back the keys' but instead put in $800mn more. This demonstrates sponsor conviction and creates creditor confidence. Without that injection, Hilton would likely have needed restructuring.",
  },
  {
    q: (ko: boolean) => ko
      ? "Caesars의 LME가 법적으로 허용된다면 왜 채권자들이 소송에서 유리했나요?"
      : "If Caesars' LME was contractually permitted, why did creditors prevail in litigation?",
    a: (ko: boolean) => ko
      ? "법적 논거는 복잡했습니다. 채권자 측 주장: ① 사기성 자산 이전 — 회사가 지급불능 또는 지급불능 직전일 때 자산이 시장 가치 이하로 이전되었다. ② 신탁 의무 위반 — 이사회는 PE 스폰서뿐만 아니라 모든 채권자에 대한 의무가 있었다. ③ 인덴처의 선의 약정(Covenant of Good Faith) 위반. Apollo/TPG는 신용 문서상 허용된 행위라고 주장했습니다. 인정 없는 $1.25bn 합의는 법적 리스크가 실재했음을 시사합니다. 이후 모든 인덴처에 이 유형의 자산 이전을 명시 금지하는 조항이 삽입되었습니다."
      : "The legal arguments were complex. Creditors argued: ① Fraudulent transfer — asset transfers were made at below-market value when the company was insolvent or near-insolvent. ② Breach of fiduciary duty — the board had duties to all creditors, not just PE sponsors. ③ Violation of the indenture's covenant of good faith. PE sponsors argued transfers were permitted under credit documents. The $1.25bn settlement without admission of wrongdoing suggests the legal risk was real. Post-Caesars, indentures explicitly prohibit this type of transfer.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국에서 홈플러스 같은 사례가 왜 반복될 수 있나요? 구조적 문제가 있나요?"
      : "Why could cases like Homeplus repeat in Korea? Are there structural issues?",
    a: (ko: boolean) => ko
      ? "네, 구조적 문제가 있습니다. ① TLB/HY 시장 부재 → PE가 단기 은행 론에 의존 → 롤오버 리스크가 주기적 위기를 만듭니다. ② 한국 은행들은 불경기 시 롤오버를 거부할 수 있어 강제 매각 위험이 있습니다(반면 7년 만기 TLB는 한 번 발행하면 끝). ③ 한국 유통은 쿠팡 효과로 미국보다 e-커머스 침투가 빠르게 진행됐습니다. ④ 제한된 엑싯 옵션 — 한국 M&A 시장은 얕고, IPO 윈도우가 좁고, 전략적 매수자가 적습니다. MBK의 홈플러스 엑싯 어려움은 이 네 가지 구조적 문제를 모두 반영합니다."
      : "Yes, structural issues exist: ① No TLB/HY market → PE relies on short-duration bank loans → rollover risk creates periodic crises. ② Korean banks may refuse rollover in downturns, forcing distressed sales (vs a 7-year TLB that is set once). ③ Korean retail saw faster e-commerce (Coupang) penetration than the US. ④ Limited exit options: Korean M&A market is thinner, IPO windows narrower, fewer strategic buyers. MBK's difficulty exiting Homeplus reflects all four structural issues.",
  },
  {
    q: (ko: boolean) => ko
      ? "이 5가지 케이스에서 PE들이 가장 많이 저지른 공통적인 실수는 무엇인가요?"
      : "What are the most common mistakes PE sponsors made across these five cases?",
    a: (ko: boolean) => ko
      ? "실패 케이스에서 세 가지 공통 실수가 두드러집니다. ① 수익/EBITDA 안정성 과대평가 — Caesars와 Toys R Us 모두 '안정적 현금흐름 사업'으로 팔렸지만 게이밍/리테일이 사이클/구조적 하락에 취약함이 입증됐습니다. ② Capex 필요성 과소평가 — 디지털 전환은 투자가 필요하고, 연 $400–450mn 이자가 있으면 재투자 여력이 없습니다. ③ 구조적 파괴 리스크 무시 — 토이저러스 인수 시점(2005년)에 아마존의 e-커머스 위협은 이미 가시적이었습니다. PE 논제가 이를 무시했습니다. 이 같은 실수가 오늘날 전통 미디어, 상업용 부동산, 레거시 기술 섹터에서 반복되고 있습니다."
      : "Three common mistakes stand out across the failure cases: ① Overestimating revenue/EBITDA stability — both Caesars and Toys R Us were sold as 'stable cash flow businesses,' but gaming/retail proved cyclical/structurally declining. ② Underestimating CapEx needs — digital transformation requires investment; with $400–450mn/yr in interest, there's nothing left for reinvestment. ③ Dismissing structural disruption risk — Amazon's e-commerce threat was visible in 2005 when Toys R Us was bought. The PE thesis ignored it. These same mistakes are being repeated today in traditional media, commercial real estate, and legacy technology.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Bryan Burrough & John Helyar", title: "Barbarians at the Gate: The Fall of RJR Nabisco", url: "https://www.harpercollins.com/products/barbarians-at-the-gate-bryan-burroughjohn-helyar", source: "HarperCollins, 1989 (updated 2003)" },
  { id: 2, author: "Blackstone Group", title: "Hilton Hotels — Private Equity Investment Case Study", url: "https://www.blackstone.com/our-businesses/private-equity/portfolio/hilton/", source: "Blackstone, 2018 Investor Presentation" },
  { id: 3, author: "U.S. Bankruptcy Court, D. Delaware", title: "In re: Caesars Entertainment Operating Company, Case No. 15-01145", url: "https://www.pacer.gov/", source: "PACER, 2015–2017" },
  { id: 4, author: "S&P Global / LCD", title: "Leveraged Buyout Annual Review: Historical Returns Analysis", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P LCD, 2024" },
  { id: 5, author: "MBK Partners / Homeplus IR", title: "홈플러스 투자 현황 및 재무구조 (Annual Report)", url: "https://www.homeplus.co.kr/", source: "Homeplus Annual Report, 2023" },
  { id: 6, author: "Moody's Investors Service", title: "Annual Default Study: Corporates and Structured Finance", url: "https://www.moodys.com/", source: "Moody's, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinCasesClient({ concept, lang }: Props) {
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
              ? "케이스 종합: 역사를 바꾼 LBO 5개 완전 해부"
              : "Case Studies: Five History-Changing LBOs Fully Dissected"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {ko
              ? "5개의 딜, 수십 년의 역사, 그리고 하나의 진실 — 레버리지는 인위적으로 가치를 만들지 않는다. 훌륭한 사업을 인수하면 레버리지가 수익을 극대화하고, 잘못된 사업을 인수하면 레버리지가 파국을 앞당긴다."
              : "Five deals, decades of history, and one truth — leverage does not create value artificially. Buy a great business and leverage maximizes returns. Buy the wrong business and leverage accelerates the disaster."}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko
              ? "역대 가장 중요한 LBO 5개를 통해 LevFin의 모든 개념이 실전에서 어떻게 작동하는지를 추적한다. RJR Nabisco(1989), 힐튼(2007), 토이저러스(2005), Caesars(2008), 홈플러스(2015) — 각각의 딜은 LevFin의 다른 얼굴을 보여준다."
              : "Through the five most important LBOs in history, we trace how every LevFin concept operates in the real world. RJR Nabisco (1989), Hilton (2007), Toys R Us (2005), Caesars (2008), Homeplus (2015) — each deal reveals a different face of LevFin."}
          </p>
        </motion.div>

        {/* ── CASE 1: RJR Nabisco ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black shrink-0" style={{ background: accent }}>1</span>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 leading-tight">
                {ko ? "KKR / RJR Nabisco (1989) — \"LBO의 탄생을 알린 딜\"" : "KKR / RJR Nabisco (1989) — \"The Deal That Announced the LBO Era\""}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">$31.4bn · 당시 역대 최대 · Junk Bond 시대의 정점</p>
            </div>
          </div>

          {/* Deal Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: (ko: boolean) => ko ? "딜 규모" : "Deal Size", value: "$31.4bn", sub: (ko: boolean) => ko ? "당시 역대 최대" : "Largest ever at the time" },
              { label: (ko: boolean) => ko ? "에쿼티" : "Equity", value: "~$1.5bn", sub: (ko: boolean) => ko ? "KKR + 공동 투자자 (~5%)" : "KKR + co-investors (~5%)" },
              { label: (ko: boolean) => ko ? "정크 본드" : "Junk Bonds", value: "$24.7bn", sub: (ko: boolean) => ko ? "14–16% 쿠폰 (Drexel)" : "14–16% coupon via Drexel" },
              { label: (ko: boolean) => ko ? "최종 결과 IRR" : "Final IRR", value: "~8–10%", sub: (ko: boolean) => ko ? "기대 이하 (과도한 프리미엄)" : "Below expectations (overbid)" },
            ].map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{m.label(ko)}</p>
                <p className="font-black text-xl text-gray-900 dark:text-gray-50 mb-0.5">{m.value}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{m.sub(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mb-6">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-3">
              {CASE_1_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.date}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/30 text-gray-700 dark:text-gray-300">
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legacy Box */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              🏛️ {ko ? "역사적 유산" : "Historical Legacy"}
            </p>
            <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "\"Barbarians at the Gate\" 책·영화의 배경 — LBO 문화를 대중에 각인시킨 사건" : "Inspired \"Barbarians at the Gate\" book & film — imprinted LBO culture on public consciousness"}</li>
              <li>• {ko ? "\"적대적 LBO\" 시대의 완성과 끝 — 이후 이사회 방어 장치 강화" : "Defined and ended the \"hostile LBO\" era — boards strengthened defenses thereafter"}</li>
              <li>• {ko ? "S&P/Moody's가 레버리지드 파이낸스 신용등급 방법론을 이 딜을 계기로 체계화" : "S&P/Moody's systematized leveraged finance rating methodology triggered by this deal"}</li>
              <li>• {ko ? "Drexel Burnham Lambert 1990년 파산 → 정크 본드 시장 2년 폐쇄 → 1990년대 LBO 시장 붕괴" : "Drexel Burnham Lambert bankruptcy 1990 → HY market closed 2 years → 1990s LBO market collapse"}</li>
              <li>• {ko ? "Michael Milken: $24.7bn은 당시 전체 미국 정크 본드 시장의 ~25%. 그가 대부분을 직접 플레이스먼트." : "Michael Milken: $24.7bn represented ~25% of the entire US junk bond market at the time. He personally placed most of it."}</li>
            </ul>
          </div>
        </motion.section>

        {/* ── CASE 2: Hilton ──────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black shrink-0" style={{ background: "#10b981" }}>2</span>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 leading-tight">
                {ko ? "Blackstone / 힐튼 호텔 (2007–2018) — \"LBO의 교과서\"" : "Blackstone / Hilton Hotels (2007–2018) — \"The LBO Textbook\""}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">$26.9bn · 역대 최대 호텔 LBO · MoM 2.6×, IRR 21%</p>
            </div>
          </div>

          {/* Deal Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: (ko: boolean) => ko ? "딜 규모" : "Deal Size", value: "$26.9bn", sub: (ko: boolean) => ko ? "역대 최대 호텔 LBO" : "Largest hotel LBO ever" },
              { label: (ko: boolean) => ko ? "에쿼티" : "Equity", value: "$5.5bn", sub: (ko: boolean) => ko ? "블랙스톤 (20%)" : "Blackstone (20%)" },
              { label: (ko: boolean) => ko ? "이자 비용" : "Peak Interest", value: "~$1.4bn/yr", sub: (ko: boolean) => ko ? "최고점 기준 연간 이자" : "Annual interest at peak" },
              { label: (ko: boolean) => ko ? "최종 수익" : "Final Return", value: "$14bn+", sub: (ko: boolean) => ko ? "MoM 2.6×, IRR 21%" : "MoM 2.6×, IRR 21%" },
            ].map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{m.label(ko)}</p>
                <p className="font-black text-xl text-gray-900 dark:text-gray-50 mb-0.5">{m.value}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{m.sub(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mb-6">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-3">
              {CASE_2_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.date}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/30 text-gray-700 dark:text-gray-300">
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why It Worked */}
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-3">
              ✅ {ko ? "성공 요인 5가지" : "5 Factors Behind the Success"}
            </p>
            <div className="space-y-2">
              {[
                { n: "①", t: (ko: boolean) => ko ? "사이클 산업 (구조적 붕괴 아님)" : "Cyclical industry (not structural collapse)", d: (ko: boolean) => ko ? "경기 회복과 함께 RevPAR 반드시 회복. Toys R Us와의 근본적 차이." : "RevPAR always recovers with the economy. Fundamental difference from Toys R Us." },
                { n: "②", t: (ko: boolean) => ko ? "추가 에쿼티 투입 의지" : "Willingness to inject additional equity", d: (ko: boolean) => ko ? "최악의 시기에 $800mn 추가. 채권자에게 스폰서 확신을 증명." : "$800mn more at the worst moment. Proved sponsor conviction to creditors." },
                { n: "③", t: (ko: boolean) => ko ? "탁월한 경영진 (Chris Nassetta)" : "Exceptional management (Chris Nassetta)", d: (ko: boolean) => ko ? "위기 중 Hilton Honors를 세계 최고 호텔 멤버십으로 키움. IT 현대화 주도." : "Built Hilton Honors into world's best hotel loyalty program through the crisis. Led IT modernization." },
                { n: "④", t: (ko: boolean) => ko ? "글로벌 확장 (중국·중동)" : "Global expansion (China, Middle East)", d: (ko: boolean) => ko ? "GFC 후 신흥시장 진출로 수익원 다변화. EBITDA 복구의 핵심." : "Post-GFC emerging market entry diversified revenue. Key to EBITDA recovery." },
                { n: "⑤", t: (ko: boolean) => ko ? "인내 자본 — 11년 보유" : "Patient capital — 11-year hold", d: (ko: boolean) => ko ? "단기 EXIT 압박 없이 장기 가치 창출. PE 펀드 구조가 이를 허용." : "No short-term exit pressure; long-term value creation. PE fund structure enabled this." },
              ].map((f, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="font-black text-emerald-600 dark:text-emerald-400 shrink-0 w-5">{f.n}</span>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{f.t(ko)} — </span>
                    <span className="text-gray-600 dark:text-gray-400">{f.d(ko)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── CASE 3: Toys R Us ───────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black shrink-0 bg-rose-500">3</span>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 leading-tight">
                {ko ? "KKR+Bain+Vornado / Toys R Us (2005–2017) — \"레버리지가 좋은 사업을 죽이는 방법\"" : "KKR+Bain+Vornado / Toys R Us (2005–2017) — \"How Leverage Kills a Good Business\""}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">$6.6bn · 2018년 청산 · 직원 33,000명 해고</p>
            </div>
          </div>

          {/* Deal Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: (ko: boolean) => ko ? "딜 규모" : "Deal Size", value: "$6.6bn", sub: (ko: boolean) => ko ? "에쿼티 $1.3bn (20%)" : "Equity $1.3bn (20%)" },
              { label: (ko: boolean) => ko ? "연간 이자" : "Annual Interest", value: "~$450mn", sub: (ko: boolean) => ko ? "vs EBITDA $660mn (진입 시)" : "vs EBITDA $660mn at entry" },
              { label: (ko: boolean) => ko ? "HY 쿠폰" : "HY Coupon", value: "10.75%", sub: (ko: boolean) => ko ? "$1.8bn HY 채권" : "$1.8bn HY bonds" },
              { label: (ko: boolean) => ko ? "최종 결과" : "Outcome", value: "총손실", sub: (ko: boolean) => ko ? "에쿼티 $0. 2018년 청산." : "Equity $0. Liquidated 2018." },
            ].map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{m.label(ko)}</p>
                <p className="font-black text-xl text-gray-900 dark:text-gray-50 mb-0.5">{m.value}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{m.sub(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Spiral table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "몰락의 연대기 — 레버리지가 디지털 전환 투자를 막은 방식" : "Chronicle of Decline — How Leverage Blocked Digital Investment"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[10px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2">{ko ? "연도" : "Year"}</th>
                    <th className="text-right px-4 py-2">{ko ? "매출" : "Revenue"}</th>
                    <th className="text-right px-4 py-2">EBITDA</th>
                    <th className="text-right px-4 py-2">{ko ? "이자 비용" : "Interest"}</th>
                    <th className="text-left px-4 py-2">{ko ? "주요 이벤트" : "Key Event"}</th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_3_SPIRAL.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${row.revenue === "N/A" ? "bg-rose-50 dark:bg-rose-900/10" : ""}`}>
                      <td className="px-4 py-2.5 font-mono font-bold text-gray-700 dark:text-gray-300">{row.year}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-600 dark:text-gray-400">{row.revenue}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-600 dark:text-gray-400">{row.ebitda}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${i >= 4 ? "text-rose-600 dark:text-rose-400" : "text-gray-600 dark:text-gray-400"}`}>{row.interest}</td>
                      <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 leading-snug">{row.event(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Core Lesson */}
          <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5">
            <p className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest mb-2">
              ⚠️ {ko ? "핵심 교훈" : "Core Lesson"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "2005년 PE 인수 논제는 '안정적 현금흐름 사업'이었습니다. 그러나 아마존의 위협은 그 시점에 이미 가시적이었습니다. 2000년에 토이저러스 자체가 아마존에 웹사이트 운영을 라이선스했다가 아마존이 경쟁 완구를 팔기 시작하자 $51mn 배상 판결을 받았지만, 이미 브랜드 신뢰가 아마존으로 이동한 상태였습니다."
                : "The 2005 PE thesis was 'stable cash flow business.' But Amazon's threat was already visible at the time. In 2000, Toys R Us itself licensed its website to Amazon — then Amazon started selling competitor toys. TRU won a $51mn judgment in 2004, but brand trust had already migrated to Amazon."}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "연 $450mn 이자 부담은 디지털 전환에 필요한 $200mn+ 투자를 불가능하게 만들었습니다. 레버리지는 사업을 죽인 것이 아닙니다 — 레버리지가 이미 죽어가던 사업의 투자 기회를 빼앗아 속도를 높인 것입니다. 스폰서들은 파산 전까지 $470mn의 수수료를 가져갔습니다."
                : "Annual interest of $450mn made impossible the $200mn+ investment in digital transformation that was needed. Leverage didn't kill the business — it stripped the investment capacity from an already-dying business and accelerated its death. Sponsors collected $470mn in fees before bankruptcy."}
            </p>
          </div>
        </motion.section>

        {/* ── CASE 4: Caesars ─────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black shrink-0 bg-amber-500">4</span>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 leading-tight">
                {ko ? "Apollo+TPG / Caesars Entertainment (2008–2020) — \"역대 최복잡 LBO 구조조정\"" : "Apollo+TPG / Caesars Entertainment (2008–2020) — \"Most Complex LBO Restructuring Ever\""}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">$30.7bn · LME 논란 · $1.25bn 합의 · 챕터 11 졸업</p>
            </div>
          </div>

          {/* Deal Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: (ko: boolean) => ko ? "딜 규모" : "Deal Size", value: "$30.7bn", sub: (ko: boolean) => ko ? "Harrah's → Caesars 개명" : "Harrah's renamed Caesars" },
              { label: (ko: boolean) => ko ? "에쿼티" : "Equity", value: "~$2bn", sub: (ko: boolean) => ko ? "Apollo+TPG (~6.5%)" : "Apollo+TPG (~6.5%)" },
              { label: (ko: boolean) => ko ? "소송 합의" : "Settlement", value: "$1.25bn", sub: (ko: boolean) => ko ? "채권자 LME 소송" : "Creditor LME lawsuit" },
              { label: (ko: boolean) => ko ? "최종 결과" : "Outcome", value: (ko: boolean) => ko ? "에쿼티 ~0" : "Equity ~0", sub: (ko: boolean) => ko ? "챕터 11 졸업 (2017)" : "Chapter 11 exit (2017)" },
            ].map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{m.label(ko)}</p>
                <p className="font-black text-xl text-gray-900 dark:text-gray-50 mb-0.5">{typeof m.value === "function" ? m.value(ko) : m.value}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{typeof m.sub === "function" ? m.sub(ko) : m.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* LME Steps */}
          <div className="space-y-3 mb-6">
            {CASE_4_LME.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${step.color}`}>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-black shrink-0 mt-0.5" style={{ background: accent }}>
                    {step.step}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1">{step.title(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legacy — Caesars Clause */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-2">
              📜 {ko ? "시저스 조항 (Caesars Clause) — 시장이 배운 교훈" : "The Caesars Clause — What the Market Learned"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "2014년 이후 발행된 모든 주요 HY 인덴처와 레버리지드 론 신용 협정에는 '비제한 자회사(Unrestricted Subsidiaries)로의 핵심 자산 이전은 채권자 전원 동의 없이 불가'라는 명시적 조항이 삽입됐습니다. J.Crew 전환(2017년, 지식재산권 해외 법인 이전)과 Envision Healthcare(2023년) 케이스도 같은 논란을 낳으며 조항이 더욱 정교해졌습니다. LME는 이제 인덴처 특정 조항(Blocker Language) 때문에 실행이 점점 어려워지고 있습니다."
                : "Every major HY indenture and leveraged loan credit agreement issued after 2014 explicitly states that transfer of material assets to unrestricted subsidiaries requires unanimous creditor consent. The J.Crew conversion (2017, IP transferred to offshore entity) and Envision Healthcare (2023) created similar controversy and further refined the language. LMEs are now increasingly difficult to execute because of indenture-specific blocker language."}
            </p>
          </div>
        </motion.section>

        {/* ── CASE 5: MBK / 홈플러스 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black shrink-0 bg-indigo-500">5</span>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 leading-tight">
                {ko ? "MBK Partners / 홈플러스 (2015~) — \"한국 역대 최대 LBO의 교훈\"" : "MBK Partners / Homeplus (2015–) — \"Lessons from Korea's Largest-Ever LBO\""}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">₩7.2조 ($6.1bn) · 한국 역사상 최대 LBO · 9년 이상 보유 중 (2024 기준)</p>
            </div>
          </div>

          {/* Fact Grid */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "딜 구조 개요" : "Deal Structure Overview"}
            </div>
            <div className="grid sm:grid-cols-2">
              {HOMEPLUS_FACTS.map((f, i) => (
                <div key={i} className={`px-4 py-3 ${i % 2 === 0 ? "" : ""} ${i < HOMEPLUS_FACTS.length - 2 ? "border-b" : ""} border-gray-100 dark:border-gray-800`}>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">{f.label(ko)}</p>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{f.value}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{f.note(ko)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Events */}
          <div className="space-y-3 mb-6">
            {[
              {
                period: "2015–2017",
                title: (ko: boolean) => ko ? "인수 후 전략: 세일-리스백 + 운영 개선" : "Post-acquisition strategy: Sale-leaseback + operational improvement",
                detail: (ko: boolean) => ko
                  ? "홈플러스 직영 점포 부동산을 리츠(REIT)로 매각 후 임차(세일-리스백). 부동산 매각으로 ₩1.5–2조 현금화 → 부채 조기 상환. 점포 수 최적화 및 온라인 채널 강화 추진."
                  : "Sold Homeplus store real estate to a REIT structure (sale-leaseback). Raised ₩1.5–2tr cash from real estate → accelerated debt repayment. Optimized store count and pursued online channel expansion.",
                color: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",
              },
              {
                period: "2017–2020",
                title: (ko: boolean) => ko ? "규제·경쟁 환경 악화" : "Regulatory and competitive headwinds intensify",
                detail: (ko: boolean) => ko
                  ? "2017년: 금융 상품 판매 관행 문제 법원 지적. 2018–2019년: 대형마트 의무 휴무 규제 강화, 쿠팡 등 e-커머스의 급성장으로 오프라인 트래픽 감소. 2020년: 코로나19로 오프라인 유통 타격."
                  : "2017: Court flags issues with financial product sales practices. 2018–2019: Strengthened mandatory store closure regulations; Coupang and e-commerce surge reduce foot traffic. 2020: COVID-19 hits offline retail hard.",
                color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
              },
              {
                period: "2022–2024",
                title: (ko: boolean) => ko ? "매각 시도 난항 — 9년 이상 보유" : "Exit attempts stall — holding beyond 9 years",
                detail: (ko: boolean) => ko
                  ? "2022–2023년 여러 차례 매각 협상 시도했으나 원하는 밸류에이션 미달. 주요 국내 유통 기업 및 해외 PE 모두 희망 가격에 의문 부호. 2024년 현재도 MBK 보유 중. 평가 기준 수익률 부진."
                  : "Multiple sale negotiations in 2022–2023 failed to reach desired valuation. Major domestic retailers and overseas PE all questioned the asking price. As of 2024, MBK still holds. Returns on valuation basis remain subdued.",
                color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="font-black text-sm font-mono shrink-0 mt-0.5" style={{ color: accent }}>{item.period}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1">{item.title(ko)}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Korea-specific financing insight */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-3">
              🇰🇷 {ko ? "한국 LBO 금융 구조의 특수성" : "Korea LBO Financing Structure Specifics"}
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• <strong>{ko ? "CLO/HY 시장 부재:" : "No CLO/HY market:"}</strong> {ko ? "한국에는 기관 론 시장(CLO)이 없어 은행 신디케이션 론에만 의존. TLB 발행 불가." : "Korea lacks an institutional loan market (CLO), relying solely on bank syndication. TLB issuance impossible."}</p>
              <p>• <strong>{ko ? "롤오버 리스크:" : "Rollover risk:"}</strong> {ko ? "만기를 매년 롤오버 → 시장 악화 시 은행이 롤오버 거부 가능 (vs 7년 만기 TLB는 발행 후 고정). 홈플러스의 구조적 취약점." : "Maturities roll annually → banks can refuse rollover during market stress (vs a 7-year TLB fixed at issuance). Homeplus' structural vulnerability."}</p>
              <p>• <strong>{ko ? "금리 기준:" : "Rate benchmark:"}</strong> {ko ? "SOFR 대신 CD 91일물 + 스프레드. 한국 시장 관행이나 글로벌 LP에게 비교 어려움." : "CD 91-day + spread instead of SOFR. Korean market convention but hard to compare for global LPs."}</p>
              <p>• <strong>{ko ? "엑싯 제약:" : "Exit constraints:"}</strong> {ko ? "국내 M&A 시장 얕음, IPO 윈도우 좁음, 전략적 매수자 풀 제한. 9년 보유가 이를 방증." : "Shallow domestic M&A market, narrow IPO windows, limited strategic buyer pool. 9-year hold demonstrates this."}</p>
            </div>
          </div>
        </motion.section>

        {/* ── Section 8: 5개 케이스 비교 대시보드 ─────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5개 케이스 비교 대시보드" : "Five-Case Comparison Dashboard"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 도구(레버리지드 파이낸스)가 어떻게 극단적으로 다른 결과를 만들어내는지 한눈에."
              : "How the same tool (leveraged finance) produces dramatically different outcomes at a glance."}
          </p>

          {/* IRR Bar Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "추정 IRR 비교" : "Estimated IRR Comparison"}
            </p>
            <div className="flex items-end gap-3" style={{ height: "140px" }}>
              {RETURNS_CHART.map((d, i) => {
                const barPx = Math.round((d.irr / maxIrr) * 100);
                return (
                  <div key={i} className="flex flex-col items-center justify-end flex-1 min-w-0" style={{ height: "140px" }}>
                    <span className={`text-[9px] font-bold mb-0.5 leading-none ${d.textColor}`}>
                      {d.irr > 0 ? `${d.irr}%` : (ko ? "손실" : "Loss")}
                    </span>
                    <motion.div
                      className={`w-full rounded-t-sm ${d.color}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx > 0 ? barPx : 8 }}
                      viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
                    />
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 mt-1 whitespace-pre-wrap text-center leading-tight">
                      {d.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[10px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "딜" : "Deal"}</th>
                    <th className="text-center px-3 py-3">{ko ? "연도" : "Year"}</th>
                    <th className="text-right px-3 py-3">{ko ? "규모" : "Size"}</th>
                    <th className="text-center px-3 py-3">{ko ? "레버리지" : "Leverage"}</th>
                    <th className="text-left px-4 py-3">{ko ? "결과" : "Outcome"}</th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_COMPARISON.map((c, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-bold text-gray-900 dark:text-gray-100">
                        <span className="mr-1.5">{c.emoji}</span>{c.name}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-500 dark:text-gray-400">{c.year}</td>
                      <td className="px-3 py-3 text-right font-mono text-gray-600 dark:text-gray-400">{c.size}</td>
                      <td className="px-3 py-3 text-center font-mono text-gray-600 dark:text-gray-400">{c.leverage}</td>
                      <td className={`px-4 py-3 font-medium text-xs ${
                        c.status === "success" ? "text-emerald-600 dark:text-emerald-400" :
                        c.status === "loss" ? "text-rose-600 dark:text-rose-400" :
                        c.status === "mediocre" ? "text-amber-600 dark:text-amber-400" :
                        "text-gray-500 dark:text-gray-400"
                      }`}>
                        {c.outcome(ko)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── Section 9: LevFin 6가지 교훈 ───────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5개 케이스에서 뽑은 LevFin 6가지 교훈" : "Six LevFin Lessons Drawn from Five Cases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "이 6가지 교훈은 신규 LBO 분석, 기존 포트폴리오 모니터링, 채권 투자 모두에서 동등하게 적용된다."
              : "These six lessons apply equally to new LBO analysis, existing portfolio monitoring, and bond investment."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SIX_LESSONS.map((lesson, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-5 ${lesson.color}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">{lesson.icon}</span>
                  <div>
                    <span className="font-black text-3xl leading-none font-mono" style={{ color: accent }}>{lesson.num}</span>
                  </div>
                </div>
                <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-2">{lesson.title(ko)}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{lesson.body(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Section 10: LevFin 시리즈 완결 로드맵 ───────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "LevFin 시리즈 완결 — 8개 챕터 학습 로드맵" : "LevFin Series Complete — 8-Chapter Learning Roadmap"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {ko
              ? "이 8개 챕터를 읽었다면, 당신은 이미 레버리지드 파이낸스의 핵심 90%를 커버한 것입니다."
              : "If you've read all eight chapters, you've already covered 90% of what matters in leveraged finance."}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "Ch.0: 생태계 전체 지형 → Ch.1–2: 상품과 크레딧 메트릭 → Ch.3–4: 계약 구조와 딜 프로세스 → Ch.5: 가격 결정 → Ch.6: 부실 상황 → Ch.7(이 챕터): 실전 케이스 종합"
              : "Ch.0: Ecosystem landscape → Ch.1–2: Products and credit metrics → Ch.3–4: Documentation and deal process → Ch.5: Pricing → Ch.6: Distressed situations → Ch.7 (this chapter): Real-world case synthesis"}
          </p>
          <div className="space-y-2">
            {SERIES_ROADMAP.map((ch, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.05)}>
                <Link href={`${base}/${ch.slug}`}
                  className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                    ch.ch === thisCh
                      ? "border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20"
                      : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 hover:border-yellow-300 dark:hover:border-yellow-700"
                  }`}>
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black shrink-0 mt-0.5 ${
                    ch.ch === thisCh ? "text-white" : "text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700"
                  }`} style={ch.ch === thisCh ? { background: accent } : {}}>
                    {ch.ch}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm ${ch.ch === thisCh ? "text-yellow-700 dark:text-yellow-300" : "text-gray-900 dark:text-gray-100"}`}>
                      {ch.title(ko)}
                      {ch.ch === thisCh && <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: accent }}>현재</span>}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{ch.summary(ko)}</p>
                  </div>
                  <span className="text-gray-400 dark:text-gray-600 shrink-0 mt-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5 mt-6">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              🎓 {ko ? "LevFin 시리즈를 마치며" : "Completing the LevFin Series"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "레버리지드 파이낸스는 금융의 가장 실용적인 분야 중 하나입니다. 실제 기업의 인수·구조조정·부도를 직접 다루며, 계약 문서 한 줄이 수십억 달러의 가치를 결정하고, 스폰서의 한 번의 결정이 수천 명의 고용을 좌우합니다. 이 시리즈가 당신의 LevFin 커리어 — 투자은행 LevFin 팀, PE 투자, 크레딧 분석 — 의 출발점이 되기를 바랍니다."
                : "Leveraged finance is one of the most practical fields in finance. It directly involves real companies being acquired, restructured, and defaulted — where a single clause in a contract determines billions in value, and one sponsor decision affects thousands of jobs. We hope this series serves as your starting point for a LevFin career — investment banking LevFin, PE investing, or credit analysis."}
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

        {/* ── Deal Story 딜 페이지 크로스링크 ─────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-14"
        >
          <motion.p variants={fadeUp()} className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            {ko ? "이 챕터에 등장하는 딜 — LevFin 심층 분석 보기" : "Deals Featured in This Chapter — See Full LevFin Analysis"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/kkr-rjr-nabisco`,
                initials: "KKR",
                bg: "bg-gray-800",
                title: ko ? "KKR × RJR Nabisco (1989) — 정크본드 혁명과 LBO의 탄생" : "KKR × RJR Nabisco (1989) — The Junk Bond Revolution & LBO's Birth",
                sub: ko ? "$31.1B, HY채권 $5B, PIK 복리, 브리지론 — 7-레이어 자본구조 LevFin 해부" : "$31.1B, HY $5B, PIK compounding, bridge loan — 7-layer capital structure LevFin analysis",
              },
              {
                href: `${base.replace("market-101", "deals")}/mbk-homeplus`,
                initials: "MBK",
                bg: "bg-slate-700",
                title: ko ? "MBK × 홈플러스 (2015) — 한국형 LBO의 명암" : "MBK × Homeplus (2015) — The Rise and Fall of Korea's Largest LBO",
                sub: ko ? "7.2조원, S&L 4조원 유동화, 기업회생 2024 — 한국 LBO 생태계 전체 분석" : "₩7.2T, ₩4T S&L monetization, 2024 insolvency — full Korean LBO ecosystem analysis",
              },
              {
                href: `${base.replace("market-101", "deals")}/kkr-toys-r-us`,
                initials: "KKR",
                bg: "bg-blue-800",
                title: ko ? "KKR × 토이저러스 (2005→2018) — 소매 LBO 파산의 교과서" : "KKR × Toys R Us (2005→2018) — Textbook Retail LBO Failure",
                sub: ko ? "$53억 부채 → 연 $400M 이자 → 디지털 투자 봉쇄 → Chapter 11 → TLB 회수율 $0.22" : "$5.3B debt → $400M/yr interest → zero digital capex → Chapter 11 → TLB recovery $0.22",
              },
              {
                href: `${base.replace("market-101", "deals")}/apollo-caesars`,
                initials: "APO",
                bg: "bg-blue-900",
                title: ko ? "아폴로 × 카이사르 (2008→2015) — Cov-Lite 자산 이전의 귀결" : "Apollo × Caesars (2008→2015) — The Cov-Lite Asset Stripping Endgame",
                sub: ko ? "Cov-Lite 구조 → 자산 이전 → 채권자 소송 → $1.45B 합의 → Chapter 11" : "Cov-Lite structure → asset transfers → creditor suit → $1.45B settlement → Chapter 11",
              },
              {
                href: `${base.replace("market-101", "deals")}/elon-musk-twitter`,
                initials: "MUSK",
                bg: "bg-gray-900",
                title: ko ? "일론 머스크 × 트위터 (2022) — 역대 최대 Hung Deal" : "Elon Musk × Twitter (2022) — History's Largest Hung Deal",
                sub: ko ? "$44B LBO, $13B 부채 신디케이션 실패, Debt/EBITDA 21배 — LevFin 딜 프로세스 실패 케이스" : "$44B LBO, $13B debt syndication failure, 21× Debt/EBITDA — LevFin deal process failure case study",
              },
              {
                href: `${base.replace("market-101", "deals")}/jcrew-ip-transfer`,
                initials: "JCW",
                bg: "bg-rose-800",
                title: ko ? "J.Crew IP 이전 (2011→2020) — Trap Door & J.Crew Blocker 탄생" : "J.Crew IP Transfer (2011→2020) — Trap Door & Birth of the J.Crew Blocker",
                sub: ko ? "비제한 자회사 IP 이전 → $250M 담보 증발 → TLB 회수율 $0.75 → 시장 표준 Blocker 조항 탄생" : "IP transfer to unrestricted sub → $250M collateral vanished → TLB recovery $0.75 → J.Crew Blocker language standardized",
              },
              {
                href: `${base.replace("market-101", "deals")}/serta-simmons-uptier`,
                initials: "SSB",
                bg: "bg-red-800",
                title: ko ? "Serta Simmons 업티어 (2020) — Lender-on-Lender Violence 교과서" : "Serta Simmons Uptier (2020) — The Lender-on-Lender Violence Textbook",
                sub: ko ? "$12억 수퍼-선순위 TL → 비동의 채권자 $9억 후순위 → 5th Circuit 무효 판결" : "$1.2B super-priority TL → $0.9B non-consenting lenders primed → 5th Circuit invalidates transaction",
              },
            ].map((d, i) => (
              <motion.div key={d.href} variants={fadeUp(i * 0.06)} className={i === 6 ? "sm:col-span-2" : ""}>
                <Link href={d.href} className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${d.bg} flex items-center justify-center`}>
                    <span className="text-white text-[8px] font-black leading-none">{d.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">{d.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug line-clamp-2">{d.sub}</p>
                  </div>
                  <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "LevFin 케이스 종합 — 역사를 바꾼 LBO 5개 완전 해부 | Deal Story"
            : "LevFin Case Studies — Five History-Changing LBOs Fully Dissected | Deal Story"}
          lang={lang}
        />

        {/* Prev / Next */}
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
