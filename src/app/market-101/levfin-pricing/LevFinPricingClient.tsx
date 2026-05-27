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
const thisCh = 5;

// ── Pricing Flow ──────────────────────────────────────────────────────────────
const PRICING_FLOW = [
  {
    step: 1,
    name: (ko: boolean) => ko ? "IPT (초기 가격 생각)" : "IPT (Initial Price Thoughts)",
    nameEn: "IPT",
    timing: (ko: boolean) => ko ? "Book 오픈 Day 0" : "Book opens Day 0",
    description: (ko: boolean) => ko
      ? "가이던스 전 첫 숫자 제시. 최종 타깃보다 25–50bp 넓게 설정. 투자자의 첫인상을 관리하는 단계."
      : "First number shared before formal guidance. Set 25–50bp wider than final target. Managing investors' first impression.",
    insiderTip: (ko: boolean) => ko
      ? "IPT는 science + art. Comps 분석 + 현재 시장 심리 + NIC 추정 + 경험적 직관이 합쳐진다. 너무 타이트하면 책 안 모임, 너무 넓으면 PE 클라이언트가 화낸다. 최고의 MD들은 IPT를 최종가격에서 15bp 이내로 맞춘다."
      : "IPT = science + art. Comps analysis + current market sentiment + NIC estimate + experiential intuition, all combined. Too tight = book doesn't come together. Too wide = PE client gets angry. The best MDs hit final pricing within 15bp of IPT.",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
    badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    step: 2,
    name: (ko: boolean) => ko ? "가이던스 (Guidance)" : "Guidance",
    nameEn: "Guidance",
    timing: (ko: boolean) => ko ? "책 2–3× 커버 시" : "Book 2–3× covered",
    description: (ko: boolean) => ko
      ? "3× 커버되면 IPT에서 25–50bp 타이트닝. 'High 300s → 325–350bp area' 형태로 발표."
      : "At 3× covered, tighten 25–50bp from IPT. Announced as 'High 300s → 325–350bp area' style.",
    insiderTip: (ko: boolean) => ko
      ? "Guidance는 시장에 시그널을 보내는 것. '우리 책이 잘 모이고 있다'는 메시지. 투자자들이 FOMO를 느끼기 시작하는 시점."
      : "Guidance is signaling to the market. The message: 'our book is building well.' This is the moment investors start to feel FOMO.",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    dot: "bg-orange-500",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    step: 3,
    name: (ko: boolean) => ko ? "타이트닝 또는 홀드" : "Tightening / Hold",
    nameEn: "Tightening / Hold",
    timing: (ko: boolean) => ko ? "책 5× 이상 커버 시" : "Book 5× or more covered",
    description: (ko: boolean) => ko
      ? "초과 수요 → 추가 타이트닝. 325–350bp → 300bp로. 또는 OID 99.0 → 99.5로 개선."
      : "Excess demand → further tightening. 325–350bp → 300bp. Or OID improves from 99.0 → 99.5.",
    insiderTip: (ko: boolean) => ko
      ? "타이트닝의 딜레마: 너무 타이트하면 '공격적 발행사'로 낙인. 세컨더리에서 채권 가격 하락. 투자자들이 다음 딜을 외면. 적당한 NIC를 남겨야 한다."
      : "The tightening dilemma: too tight = branded as 'aggressive issuer.' Bond price drops in secondary. Investors skip the next deal. Always leave adequate NIC.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    step: 4,
    name: (ko: boolean) => ko ? "플렉스 (Flex, 필요 시)" : "Flex (if needed)",
    nameEn: "Flex",
    timing: (ko: boolean) => ko ? "책 <1.5× 커버 시" : "Book <1.5× covered",
    description: (ko: boolean) => ko
      ? "수요 부족 → 스프레드 확대 또는 OID 하락. 350bp → 400bp. 은행이 Commitment Letter의 flex 조항 발동."
      : "Insufficient demand → widen spread or lower OID. 350bp → 400bp. Banks invoke the flex provision in the Commitment Letter.",
    insiderTip: (ko: boolean) => ko
      ? "Flex는 시장에서 약점의 신호. 다음 딜 때 이 발행사는 더 어려운 조건을 받게 된다. 은행은 flex를 사용해도 수수료는 그대로 받는다. 비용은 발행사가 영구적으로 진다."
      : "Flex is a market signal of weakness. Next time this issuer comes to market, they face harder terms. Banks collect the same fee regardless of flex usage. The permanent cost rests with the issuer.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  },
  {
    step: 5,
    name: (ko: boolean) => ko ? "최종 프라이싱 & 배분" : "Final Pricing & Allocation",
    nameEn: "Final Pricing & Allocation",
    timing: (ko: boolean) => ko ? "통상 T+4주" : "Typically T+4 weeks",
    description: (ko: boolean) => ko
      ? "최종 스프레드·OID·쿠폰 확정. 2–4시간 내 배분 결정. 선호 계좌에 좋은 배분."
      : "Final spread, OID, and coupon locked. Allocation decided within 2–4 hours. Best allocations go to preferred accounts.",
    insiderTip: (ko: boolean) => ko
      ? "배분은 순수한 기술이자 정치다. 10년 관계가 1시간 배분 결정에 녹아있다. 좋은 배분 = 다음 딜에서 앵커 역할. 나쁜 배분 = 관계 훼손."
      : "Allocation is pure craft and politics. A decade of relationships compresses into one hour. Good allocation = anchor investor on the next deal. Bad allocation = damaged relationship.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
];

// ── NIC Data ──────────────────────────────────────────────────────────────────
const NIC_DATA = [
  { condition: (ko: boolean) => ko ? "강세장 (2021 QE era)" : "Bull Market (2021 QE era)", nicLabel: "5–10bp", nicValue: 10, color: "bg-emerald-500" },
  { condition: (ko: boolean) => ko ? "보통 (2019 normal)"   : "Normal (2019)"             , nicLabel: "20–30bp", nicValue: 30, color: "bg-yellow-500" },
  { condition: (ko: boolean) => ko ? "약세장 (2022 금리 급등)": "Bear Market (2022 hikes)" , nicLabel: "50–75bp", nicValue: 75, color: "bg-orange-500" },
  { condition: (ko: boolean) => ko ? "위기 (2020 COVID)"    : "Crisis (2020 COVID)"       , nicLabel: "75–150bp", nicValue: 130, color: "bg-rose-500"   },
  { condition: (ko: boolean) => ko ? "극단적 위기 (2008 GFC)": "Extreme Crisis (2008 GFC)" , nicLabel: "200bp+", nicValue: 160, color: "bg-red-800"    },
];
const maxNic = Math.max(...NIC_DATA.map(d => d.nicValue));

// ── OID Economics ─────────────────────────────────────────────────────────────
const OID_ECONOMICS = [
  { oid: "OID 100 (par)", proceedsLabel: "$1,000mn", proceeds: 1000, yieldAdder: "—",  allInYield: "SOFR+350bp", highlight: false },
  { oid: "OID 99.5",      proceedsLabel: "$995mn",   proceeds: 995,  yieldAdder: "+7bp", allInYield: "SOFR+357bp", highlight: false },
  { oid: "OID 99.0",      proceedsLabel: "$990mn",   proceeds: 990,  yieldAdder: "+14bp", allInYield: "SOFR+364bp", highlight: true  },
  { oid: "OID 98.0",      proceedsLabel: "$980mn",   proceeds: 980,  yieldAdder: "+29bp", allInYield: "SOFR+379bp", highlight: false },
];

// ── PIK Toggle ────────────────────────────────────────────────────────────────
const PIK_SCENARIOS = [
  {
    label: (ko: boolean) => ko ? "시나리오 A — 현금 이자 선택" : "Scenario A — Cash Election",
    icon: "💵",
    years: [
      { yr: "Y1", cash: "$9mn",  balance: "$100mn", note: (ko: boolean) => ko ? "현금 이자 지급" : "Cash interest paid" },
      { yr: "Y2", cash: "$9mn",  balance: "$100mn", note: (ko: boolean) => ko ? "잔액 변동 없음" : "Balance unchanged" },
      { yr: "Y3", cash: "$9mn",  balance: "$100mn", note: (ko: boolean) => ko ? "잔액 변동 없음" : "Balance unchanged" },
    ],
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    summary: (ko: boolean) => ko ? "3년 총 현금 지출: $27mn. 원금 $100mn 유지." : "Total 3yr cash outflow: $27mn. Principal stays $100mn.",
  },
  {
    label: (ko: boolean) => ko ? "시나리오 B — PIK 선택 (3년)" : "Scenario B — PIK Election (3 years)",
    icon: "⚠️",
    years: [
      { yr: "Y1", cash: "$0",      balance: "$109.75mn", note: (ko: boolean) => ko ? "PIK: 9.75% 복리 누적" : "PIK: 9.75% accrues" },
      { yr: "Y2", cash: "$0",      balance: "$120.4mn",  note: (ko: boolean) => ko ? "$109.75mn × 9.75% = $10.7mn 추가" : "$109.75mn × 9.75% = $10.7mn added" },
      { yr: "Y3", cash: "$0",      balance: "$132.1mn",  note: (ko: boolean) => ko ? "$120.4mn × 9.75% = $11.7mn 추가" : "$120.4mn × 9.75% = $11.7mn added" },
    ],
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    summary: (ko: boolean) => ko ? "3년 후 원금 $132mn으로 팽창. 현금 지출 $0이지만 부채 부담 32% 증가." : "Principal balloons to $132mn after 3 years. Zero cash outflow but debt burden up 32%.",
  },
  {
    label: (ko: boolean) => ko ? "시나리오 C — 혼합 (현금→PIK→현금)" : "Scenario C — Toggle Pattern (Cash→PIK→Cash)",
    icon: "🔀",
    years: [
      { yr: "Y1", cash: "$9mn",  balance: "$100mn",   note: (ko: boolean) => ko ? "현금 지급 (정상)" : "Cash (normal)" },
      { yr: "Y2", cash: "$0",    balance: "$109.75mn", note: (ko: boolean) => ko ? "PIK 전환 (유동성 압박)" : "PIK elected (liquidity squeeze)" },
      { yr: "Y3", cash: "$0",    balance: "$120.4mn",  note: (ko: boolean) => ko ? "PIK 유지" : "PIK continues" },
    ],
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    summary: (ko: boolean) => ko ? "PE의 전략적 도구: 유동성 압박 시 PIK 전환으로 현금 보존. 좋을 때 현금 재개." : "PE's strategic tool: switch to PIK under liquidity pressure, revert to cash when conditions improve.",
  },
];

// ── Call Schedule ─────────────────────────────────────────────────────────────
const CALL_SCHEDULE = [
  {
    type: "NC/2",
    callDates: [
      { yr: "Year 2", price: "103.5%" },
      { yr: "Year 3", price: "102.333%" },
      { yr: "Year 4", price: "101.167%" },
      { yr: "Year 5+", price: "100.0% (par)" },
    ],
    spreadAdj: (ko: boolean) => ko ? "약 –50bp (투자자가 단기 보호 수용)" : "~–50bp (investors accept shorter protection)",
    pePref: (ko: boolean) => ko ? "✅ PE 선호 — 4–5년 엑싯 시 103.5% 프리미엄 없이 리파이낸스 가능" : "✅ PE preferred — can refinance at year 4 without 103.5% call premium",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    type: "NC/3",
    callDates: [
      { yr: "Year 3", price: "103.5%" },
      { yr: "Year 4", price: "102.333%" },
      { yr: "Year 5", price: "101.167%" },
      { yr: "Year 6+", price: "100.0% (par)" },
    ],
    spreadAdj: (ko: boolean) => ko ? "시장 표준 — 프리미엄/디스카운트 없음" : "Market standard — no premium/discount",
    pePref: (ko: boolean) => ko ? "⚖️ 시장 표준 — 7년 HY 채권의 기준" : "⚖️ Market standard — benchmark for 7yr HY bonds",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    type: "NC/4",
    callDates: [
      { yr: "Year 4", price: "103.5%" },
      { yr: "Year 5", price: "102.333%" },
      { yr: "Year 6", price: "101.167%" },
      { yr: "Year 7", price: "100.0% (par)" },
    ],
    spreadAdj: (ko: boolean) => ko ? "약 –25–50bp (투자자가 더 많은 보호를 위해 낮은 수익률 수용)" : "~–25–50bp (investors accept lower yield for longer protection)",
    pePref: (ko: boolean) => ko ? "⚠️ PE 비선호 — 5년 엑싯 시 103.5% 프리미엄 발생" : "⚠️ PE disfavors — triggers 103.5% call premium at year 5 exit",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── Cross Currency ────────────────────────────────────────────────────────────
const CCY_COMPARE = [
  { item: (ko: boolean) => ko ? "시장 규모"        : "Market Size",        usd: "$1.4T (400+ issuers)", eur: "~€500bn (200 issuers)"     },
  { item: (ko: boolean) => ko ? "기준 금리"        : "Base Rate",          usd: "SOFR (floating)",      eur: "EURIBOR 3M (floating)"     },
  { item: (ko: boolean) => ko ? "BB 스프레드 (역사)": "BB Spread (hist.)",  usd: "T+250–400bp",          eur: "€ mid-swap+200–350bp (~100bp tighter)" },
  { item: (ko: boolean) => ko ? "Cov-Lite 비중"   : "Cov-Lite %",         usd: "~85%",                 eur: "~60–65% (less developed)"  },
  { item: (ko: boolean) => ko ? "유지형 코버넌트"   : "Maintenance Cov.",   usd: (ko: boolean) => ko ? "드묾 (Cov-Lite 우세)" : "Rare (Cov-Lite dominant)", eur: (ko: boolean) => ko ? "더 일반적" : "More common"                  },
  { item: (ko: boolean) => ko ? "통화 스왑 비용"   : "Cross-Ccy Swap Cost", usd: "—",                    eur: "+50–100bp (to convert EUR→USD)" },
  { item: (ko: boolean) => ko ? "투자자 기반"      : "Investor Base",       usd: (ko: boolean) => ko ? "CLO, 美 HY 펀드, 헤지펀드" : "CLOs, US HY funds, hedge funds", eur: (ko: boolean) => ko ? "유럽 HY 펀드, 보험사, 은행" : "European HY funds, insurers, banks" },
];

// ── Rating Notching ───────────────────────────────────────────────────────────
const RATING_NOTCHING = [
  { instrument: (ko: boolean) => ko ? "1순위 TLB (Senior Secured 1st Lien)" : "1st Lien TLB (Senior Secured)", sp: "BB–", moodys: "Ba2", notch: (ko: boolean) => ko ? "1노치 상향" : "+1 notch above CFR", color: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300", width: 90 },
  { instrument: (ko: boolean) => ko ? "2순위 TLB (Senior Secured 2nd Lien)" : "2nd Lien TLB (Senior Secured)", sp: "B+", moodys: "B1", notch: (ko: boolean) => ko ? "CFR 동일" : "Same as CFR", color: "bg-teal-500",    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",         width: 72 },
  { instrument: (ko: boolean) => ko ? "HY 채권 (Senior Unsecured)"           : "HY Bond (Senior Unsecured)",    sp: "B",  moodys: "B2",  notch: (ko: boolean) => ko ? "1노치 하향" : "–1 notch below CFR", color: "bg-yellow-500", badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300", width: 55 },
  { instrument: (ko: boolean) => ko ? "선순위 후순위채 (Senior Sub Notes)"   : "Senior Sub Notes",              sp: "B–", moodys: "B3",  notch: (ko: boolean) => ko ? "2노치 하향" : "–2 notches",         color: "bg-orange-500", badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300", width: 40 },
  { instrument: (ko: boolean) => ko ? "HoldCo PIK 노트"                     : "HoldCo PIK Notes",              sp: "CCC+", moodys: "Caa1", notch: (ko: boolean) => ko ? "3노치 하향" : "–3 notches",      color: "bg-rose-500",   badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",         width: 24 },
];

// ── Macro Environment ─────────────────────────────────────────────────────────
const MACRO_ENV = [
  {
    period: "2021",
    label: (ko: boolean) => ko ? "QE 시대 — 공짜돈" : "QE Era — Free Money",
    sofr: "~0%",
    hySpread: "300–350bp",
    allIn: "4–4.5%",
    lboActivity: (ko: boolean) => ko ? "폭발적 — 역대 최다 LBO" : "Explosive — record LBO volume",
    note: (ko: boolean) => ko ? "Fed 제로금리 + QE. HY 스프레드 사상 최저. LBO 멀티플 11–14×. 모든 딜이 쉬웠다." : "Fed zero rates + QE. HY spreads at record lows. LBO multiples 11–14×. Every deal was easy.",
    sentiment: "bull",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
  },
  {
    period: "2022",
    label: (ko: boolean) => ko ? "금리 급등 — 시장 붕괴" : "Rate Shock — Market Breakdown",
    sofr: "0% → 4.5%",
    hySpread: "600–700bp (stress)",
    allIn: "9–10%",
    lboActivity: (ko: boolean) => ko ? "시장 사실상 폐쇄 — Hung deal 급증" : "Market near-closed — hung deals surge",
    note: (ko: boolean) => ko ? "Fed 역사적 최대 속도 금리 인상. Twitter, Citrix, Nielsen 딜이 은행 밸런스 시트에 갇혔다. 추정 손실 $500–700mn." : "Fed's fastest rate hike ever. Twitter, Citrix, Nielsen deals got stuck on bank balance sheets. Estimated bank losses $500–700mn.",
    sentiment: "bear",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
  },
  {
    period: "2023",
    label: (ko: boolean) => ko ? "안정화 — 높지만 견딜 만한" : "Stabilization — High but Manageable",
    sofr: "5.3%",
    hySpread: "400–450bp",
    allIn: "9–9.5%",
    lboActivity: (ko: boolean) => ko ? "선별적 재개 — 방어적 섹터 중심" : "Selective reopening — defensive sectors",
    note: (ko: boolean) => ko ? "금리는 높지만 스프레드는 안정. PE는 '기다리는 전략' — 금리 인하 기대. 신규 LBO는 에쿼티 비중 높임." : "Rates are high but spreads are stable. PEs adopt 'wait' strategy anticipating rate cuts. New LBOs raise equity contribution.",
    sentiment: "neutral",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
  },
  {
    period: "2024E",
    label: (ko: boolean) => ko ? "금리 인하 기대 — 스프레드 타이트닝" : "Rate Cut Expectations — Spreads Tighten",
    sofr: "4–5% (declining)",
    hySpread: "350–400bp",
    allIn: "7.5–8.5%",
    lboActivity: (ko: boolean) => ko ? "회복 중 — PE 딜 파이프라인 재개" : "Recovering — PE deal pipeline reopening",
    note: (ko: boolean) => ko ? "금리 인하 기대 → 스프레드 타이트닝. PE 딜 재개. 그러나 총 all-in 비용은 여전히 2021보다 높아 LBO 멀티플 제한." : "Rate cut expectations drive spread tightening. PE deals return. But total all-in cost still higher than 2021, limiting LBO multiples.",
    sentiment: "recover",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "IPT를 너무 타이트하게 설정하면 어떤 일이 벌어지나요?"
      : "What happens if IPT is set too tight?",
    a: (ko: boolean) => ko
      ? "책이 1× 미만으로 모이면 뱅커는 '플렉스 와이더(flex wider)'를 해야 합니다 — 더 나쁜 조건을 공개 발표하는 것입니다. 이는 시장 약세 신호입니다. 신규 발행 채권은 세컨더리에서 변동성이 커집니다. 발행사의 크레딧 시장 내 평판이 훼손됩니다. 다음 딜에서는 더 높은 NIC 페널티를 받게 됩니다. 2022년에 여러 딜들이 IPT 이후 50–100bp를 플렉스했습니다."
      : "If the book comes in under 1×, bankers must 'flex wider' — publicly announcing worse terms. This signals market weakness. The new issue becomes volatile in secondary trading. The issuer's reputation in credit markets is damaged. Future deals incur a higher NIC penalty. In 2022, multiple deals had to flex 50–100bp wider after IPT.",
  },
  {
    q: (ko: boolean) => ko
      ? "왜 PIK 채권을 발행하는 발행사가 있나요? 결국 더 비싸지 않나요?"
      : "Why do issuers use PIK bonds? Isn't it more expensive in the end?",
    a: (ko: boolean) => ko
      ? "두 가지 용도가 있습니다. ① 운영상 필요 — 초기 단계 또는 부실 기업이 진짜로 현금 이자를 낼 수 없을 때 PIK가 운영 현금을 보존합니다. ② 구조적 선택 — HoldCo PIK 노트는 에쿼티 위에, OpCo 부채 아래에 위치합니다. PE는 이를 통해 OpCo 코버넌트를 건드리지 않고 구조에서 '배당'을 추출합니다. HoldCo 노트는 사실상 PE가 발행사 구조를 통해 자신에게 지급하는 방법입니다."
      : "Two uses: (1) Operational need — early-stage or distressed companies genuinely can't pay cash interest; PIK preserves cash for operations. (2) Structural choice — HoldCo PIK notes sit above equity but below OpCo debt. PE uses these to extract 'dividends' from the structure without triggering RP covenants. The HoldCo note is effectively PE's way to pay itself through the structure while keeping OpCo covenants clean.",
  },
  {
    q: (ko: boolean) => ko
      ? "Cross-currency HY에서 EUR 채권을 발행하면 환율 리스크는 어떻게 처리하나요?"
      : "How is FX risk handled when issuing EUR bonds in a cross-currency HY deal?",
    a: (ko: boolean) => ko
      ? "발행사는 크로스커런시 스왑에 진입합니다 — EUR 이자와 원금을 USD(또는 그 반대)로 환전합니다. 스왑은 all-in 비용에 약 50–100bp를 더하지만 환율 위험을 제거합니다. EUR 매출 기업(유럽 사업)의 경우 '자연 헤지'가 더 효율적입니다 — EUR 매출로 EUR 쿠폰을 지급하므로 스왑이 필요 없습니다. 그러나 매출은 USD인데 EUR를 차입하는 경우 크로스커런시 스왑이 필수입니다."
      : "The issuer enters a cross-currency swap — converting EUR interest and principal to USD (or vice versa). The swap adds ~50–100bp to all-in cost but eliminates FX risk. For EUR-revenue companies (European operations), the 'natural hedge' is more efficient — pay EUR coupon from EUR revenues without swapping. But if revenues are USD and you're borrowing EUR, the cross-currency swap is essential.",
  },
  {
    q: (ko: boolean) => ko
      ? "Rating notching이 실제 투자자 행동에 어떤 영향을 미치나요?"
      : "How does rating notching affect actual investor behavior?",
    a: (ko: boolean) => ko
      ? "보험사나 연기금은 종종 투자 정책 제약이 있습니다: 'B+ 미만 인스트루먼트 불가.' 발행사 등급이 B+여도 무담보 노칭으로 HY 채권이 B 등급이라면, 이들 투자자는 매수 불가입니다. 이는 수요를 줄이고 더 높은 NIC를 요구합니다. 발행사들은 때로 담보나 구조적 특성을 추가해 B+ 인스트루먼트 등급을 받으려 합니다 — 다른 경제적 조건을 완화하더라도."
      : "Insurance companies and pension funds often have investment policy constraints: 'no instrument below B+.' If the HY bond is rated B (one notch below B+ issuer rating due to unsecured notching), those investors can't buy. This reduces demand and requires higher NIC. Issuers sometimes add collateral or structural features to get a B+ instrument rating, even if it means relaxing economics elsewhere.",
  },
  {
    q: (ko: boolean) => ko
      ? "2022년 금리 급등 때 LevFin 시장은 어떻게 됐나요? 실제로 어떤 딜들이 영향을 받았나요?"
      : "What actually happened to the LevFin market during the 2022 rate shock? Which deals were hit?",
    a: (ko: boolean) => ko
      ? "2022년 금리 충격은 심각했습니다. 일론 머스크의 $440억 트위터 인수 파이낸싱(2022년 10월)이 가장 가시적인 피해 사례였습니다 — 7개 은행이 $130억 부채에 커밋했지만 금리 급등과 트위터 신용도 악화로 신디케이션이 불가능했습니다. 은행들은 약 18개월 이상 $130억을 밸런스 시트에 보유했습니다. 추정 손실: $500–700mn. 다른 hung deal: Citrix 바이아웃($165억), Nielsen Holdings($89억). 이는 2007–08년 이후 최대 'hung deal' 위기였습니다."
      : "The 2022 rate shock was severe. Elon Musk's $44bn Twitter acquisition financing (Oct 2022) was the most visible casualty — seven banks committed to $13bn of debt that couldn't be syndicated as rates spiked and Twitter's creditworthiness deteriorated. Banks carried ~$13bn on balance sheet for 18+ months. Total estimated bank losses: ~$500–700mn. Other hung deals: Citrix buyout ($16.5bn), Nielsen Holdings ($8.9bn). This was the largest 'hung deal' crisis since 2007–08.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "S&P Global / LCD", title: "Leveraged Finance Market Review: Pricing & New Issue Concessions", url: "https://www.spglobal.com/marketintelligence/en/campaigns/leveraged-commentary-and-data", source: "S&P LCD, 2024" },
  { id: 2, author: "Moody's Investors Service", title: "Rating Methodology: Notching for Instrument-Level Ratings", url: "https://www.moodys.com/researchandratings/market-segment/corporate-finance/-/003006/4294966460/4294966694/0/0/-/0/-/-/-/-/-/-/-/-/en/global/pdf/-/rra", source: "Moody's, 2024" },
  { id: 3, author: "Bank of America Global Research", title: "US High Yield Annual Market Review 2023", url: "https://www.bofasecurities.com/", source: "BofA, 2024" },
  { id: 4, author: "Loan Syndications and Trading Association (LSTA)", title: "OID and PIK Mechanics in Leveraged Loans", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 5, author: "Financial Times", title: "How the Twitter deal became Wall Street's biggest headache", url: "https://www.ft.com/content/twitter-financing", source: "FT, 2023" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinPricingClient({ concept, lang }: Props) {
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
              ? "프라이싱 심화: OID·PIK·Call Schedule·NIC·크로스커런시"
              : "Advanced Pricing: OID, PIK, Call Schedule, NIC & Cross-Currency"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "LevFin 프라이싱은 단순히 '금리를 정하는 것'이 아니다 — 시장 심리를 읽고, 투자자를 설득하고, 발행사 이익을 극대화하는 복합 예술. 실제 딜룸에서 프라이싱 논의가 어떻게 이루어지는지, 인터넷에 없는 실무 지식을 담았다."
              : "LevFin pricing is not simply 'setting an interest rate' — it is the complex art of reading market psychology, convincing investors, and maximizing issuer economics. This chapter contains the insider knowledge of how pricing discussions actually unfold in the deal room."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 프라이싱 5단계 ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 프라이싱 5단계 — IPT에서 배분까지" : "1. The 5-Stage Pricing Process — IPT to Allocation"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "신규 발행 프라이싱은 4–6주에 걸친 단계적 시장 테스트 과정입니다. 각 단계는 시장 수요를 확인하며 가격을 수렴시킵니다."
              : "New issue pricing is a 4–6 week process of staged market testing. Each step confirms demand and converges the price."}
          </p>
          <div className="space-y-4">
            {PRICING_FLOW.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${step.color}`}>
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white ${step.dot}`}>
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <p className="font-black text-sm text-gray-900 dark:text-gray-50">{step.name(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${step.badge}`}>
                        {step.timing(ko)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                      {step.description(ko)}
                    </p>
                    <div className="rounded-lg bg-white/60 dark:bg-black/20 border border-white/40 dark:border-white/10 px-3 py-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                        💡 {ko ? "인사이더 팁" : "Insider Tip"}
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        {step.insiderTip(ko)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 2: NIC ─────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. New Issue Concession (NIC) — 왜 신규 채권이 더 비싼가" : "2. New Issue Concession (NIC) — Why New Bonds Cost More"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "NIC는 신규 발행 채권이 기존 유통 채권 대비 추가로 제공하는 스프레드입니다. 투자자에게 주는 신규 발행 프리미엄이지만, 발행사에게는 추가 비용입니다."
              : "NIC is the extra spread a new issue offers over comparable secondary bonds. A new issue premium for investors, but an additional cost for issuers."}
          </p>

          {/* Why NIC Exists */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "NIC가 존재하는 3가지 이유" : "3 Reasons NIC Exists"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: (ko: boolean) => ko ? "실행 리스크" : "Execution Risk", body: (ko: boolean) => ko ? "책빌딩 기간 동안 시장이 움직일 수 있다. 투자자는 가격 불확실성 프리미엄을 요구한다." : "The market can move during bookbuilding. Investors demand a price uncertainty premium." },
                { title: (ko: boolean) => ko ? "즉시 마크투마켓 리스크" : "Mark-to-Market Risk", body: (ko: boolean) => ko ? "배분 즉시 채권이 세컨더리에서 거래된다. 마이너스 수익을 피하려면 NIC가 필요하다." : "The bond trades in secondary immediately post-allocation. Investors need NIC to avoid instant mark-to-market losses." },
                { title: (ko: boolean) => ko ? "유동성 프리미엄" : "Liquidity Premium", body: (ko: boolean) => ko ? "신규 발행 채권은 초기 유동성이 낮다. 투자자는 이 비유동성에 대한 보상을 요구한다." : "New issues have lower initial liquidity. Investors require compensation for this illiquidity." },
              ].map((card, i) => (
                <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-3">
                  <p className="font-bold text-xs text-gray-900 dark:text-gray-50 mb-1">{card.title(ko)}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.body(ko)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NIC Bar Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "시장 컨디션별 전형적인 NIC (bp)" : "Typical NIC by Market Condition (bp)"}
            </p>
            <div className="flex items-end gap-3" style={{ height: "140px" }}>
              {NIC_DATA.map((d, i) => {
                const barPx = Math.round((d.nicValue / maxNic) * 110);
                return (
                  <div key={i} className="flex flex-col items-center justify-end flex-1 min-w-0" style={{ height: "140px" }}>
                    <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300 mb-0.5 leading-none text-center">
                      {d.nicLabel}
                    </span>
                    <motion.div
                      className={`w-full rounded-t-sm ${d.color}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx }}
                      viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
                    />
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 mt-1 leading-tight text-center">
                      {d.condition(ko)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NIC too high / too low */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-4">
              <p className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">
                {ko ? "NIC가 너무 높을 때" : "When NIC Is Too High"}
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "세컨더리에서 채권 가격이 즉시 상승 (101+로 거래). 발행사가 '돈을 식탁에 놔두고 왔다.' 시장이 더 타이트하게 발행할 수 있었다고 판단. 다음 딜에서 같은 실수 반복 금지."
                  : "Bond trades up immediately in secondary (101+). Issuer 'left money on the table.' Market judges the deal could have priced tighter. Banker must not repeat this mistake on the next deal."}
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
              <p className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2">
                {ko ? "NIC가 너무 낮을 때" : "When NIC Is Too Low"}
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "세컨더리에서 채권 가격 하락 (99 이하 거래). 투자자 손실. '공격적 발행사' 낙인. 다음 딜에서 수요 감소, 더 높은 NIC 요구. 신뢰 훼손이 몇 년 지속."
                  : "Bond trades down in secondary (below 99). Investors lose money. Issuer branded 'aggressive.' Next deal faces reduced demand and higher NIC requirement. Reputational damage lasts years."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: OID 경제학 ──────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. OID 경제학 — 숨겨진 비용의 해부" : "3. OID Economics — Dissecting the Hidden Cost"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "OID(Original Issue Discount)는 발행가격이 액면가(100) 미만인 것. $1bn TLB를 OID 99로 발행하면 발행사는 $990mn을 받지만 $1bn을 상환해야 한다. 이 $10mn 차이가 투자자의 추가 수익이자 발행사의 추가 비용이다."
              : "OID (Original Issue Discount) means the issue price is below par (100). Issue a $1bn TLB at OID 99 and the issuer receives $990mn but must repay $1bn. That $10mn difference is additional investor return and additional issuer cost."}
          </p>

          {/* OID Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "$1bn TLB, 7년 만기, SOFR+350bp — OID 시나리오 비교" : "$1bn TLB, 7-yr Maturity, SOFR+350bp — OID Scenario Comparison"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "발행가" : "Issue Price"}</th>
                    <th className="text-left px-4 py-3">{ko ? "실제 수령액" : "Day 1 Proceeds"}</th>
                    <th className="text-left px-4 py-3">{ko ? "수익률 추가" : "Yield Adder"}</th>
                    <th className="text-left px-4 py-3">{ko ? "All-in 수익률" : "All-in Yield"}</th>
                  </tr>
                </thead>
                <tbody>
                  {OID_ECONOMICS.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${row.highlight ? "bg-yellow-50 dark:bg-yellow-900/10" : ""}`}>
                      <td className="px-4 py-3 font-bold text-xs text-gray-900 dark:text-gray-50">
                        {row.oid}
                        {row.highlight && <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">{ko ? "시장 일반" : "Common"}</span>}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300 font-mono">{row.proceedsLabel}</td>
                      <td className="px-4 py-3 text-xs font-semibold" style={{ color: row.yieldAdder === "—" ? undefined : "#ef4444" }}>{row.yieldAdder}</td>
                      <td className="px-4 py-3 text-xs font-mono text-gray-700 dark:text-gray-300">{row.allInYield}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rule of Thumb */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-4 mb-4">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              💡 {ko ? "딜룸 경험 법칙" : "Deal Room Rule of Thumb"}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/60 dark:bg-black/20 rounded-lg px-3 py-2 font-mono text-xs">
                {ko ? "1pt OID on 7yr 론 ≈ 14bp 수익률" : "1pt OID on 7yr loan ≈ 14bp yield"}
              </div>
              <div className="bg-white/60 dark:bg-black/20 rounded-lg px-3 py-2 font-mono text-xs">
                {ko ? "1pt OID on 5yr 론 ≈ 20bp 수익률" : "1pt OID on 5yr loan ≈ 20bp yield"}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
              {ko ? "왜 발행사는 OID를 수용하는가" : "Why Issuers Accept OID"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "시장 스프레드보다 낮게 발행하고 싶은 경우, OID를 통해 선불 달러를 포기합니다. 예: 시장이 SOFR+400bp를 요구하지만 발행사는 350bp를 원한다면 OID 97로 절충합니다. 신용평가사는 OID를 통과해 all-in 수익률로 평가합니다. OID가 높을수록 등급 압박이 올 수 있습니다."
                : "When issuers can't get the spread they want, they give up upfront dollars instead through OID. Example: market demands SOFR+400bp but issuer wants 350bp — compromise at OID 97. Rating agencies look through OID to all-in yield. Higher OID can bring rating pressure."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 4: PIK Toggle ───────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. PIK Toggle — 마법이 아닌 독약" : "4. PIK Toggle — Not Magic, But Poison"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "PIK(Payment-in-Kind)는 현금 대신 원금을 늘리는 방식의 이자 지급. 단기적으로 현금 절약이 되지만, 복리 누적이 빠르게 부채 부담을 키운다. 구조: 9.0% 현금 OR 9.75% PIK (75bp 스텝업)."
              : "PIK (Payment-in-Kind) accrues principal instead of paying cash interest. Short-term cash saving, but compounding rapidly inflates the debt burden. Structure: 9.0% cash OR 9.75% PIK (75bp step-up)."}
          </p>

          <div className="space-y-4 mb-6">
            {PIK_SCENARIOS.map((sc, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                className={`rounded-xl border p-5 ${sc.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{sc.icon}</span>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{sc.label(ko)}</p>
                </div>
                <div className="space-y-2 mb-3">
                  {sc.years.map((yr, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs">
                      <span className="font-mono font-bold text-gray-400 dark:text-gray-500 w-6 shrink-0">{yr.yr}</span>
                      <span className="w-16 shrink-0 font-mono font-bold text-gray-900 dark:text-gray-50">{yr.cash}</span>
                      <span className="w-24 shrink-0 font-mono text-gray-700 dark:text-gray-300">{yr.balance}</span>
                      <span className="text-gray-500 dark:text-gray-400">{yr.note(ko)}</span>
                    </div>
                  ))}
                </div>
                <div className={`rounded-lg px-3 py-2 text-xs font-semibold ${sc.badge}`}>
                  {sc.summary(ko)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* PIK Key Insight */}
          <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5 mb-4">
            <p className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest mb-2">
              🚨 {ko ? "핵심 인사이트: PIK는 '공짜 돈'이 아니다" : "Key Insight: PIK Is Not 'Free Money'"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "$100mn을 9.75% PIK로 3년 — 원금은 $132mn이 됩니다. 이것이 새로운 액면가입니다. 기업이 계획대로 성장하지 못하면 PIK는 레버리지 위기를 가속화합니다. 반대로 기업이 잘 되면 더 많은 원금을 상환해야 합니다."
                : "$100mn at 9.75% PIK for 3 years = $132mn. That is the new face value. If the company underperforms, PIK accelerates the leverage crisis. If it performs well, there is a larger principal to repay."}
            </p>
            <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                {ko ? "PIK 유명 사례: iHeartMedia (구 Clear Channel)" : "Famous PIK Case: iHeartMedia (formerly Clear Channel)"}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "2008년 Bain Capital + Thomas H. Lee가 $26bn에 인수. PIK 노트를 광범위하게 사용해 현금 부담 절감. 그러나 복리 부채가 계속 눈덩이처럼 불어났고 결국 2019년 챕터 11 파산 신청. 파산 전 총 부채: $20bn 이상."
                  : "Bain Capital + Thomas H. Lee acquired for $26bn in 2008. Used PIK notes extensively to reduce cash burden. But compounding debt kept ballooning, ultimately leading to Chapter 11 bankruptcy in 2019. Total debt at bankruptcy: $20bn+."}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
              {ko ? "PIK를 사용하는 주체" : "Who Uses PIK"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              {[
                { title: (ko: boolean) => ko ? "HoldCo PIK 노트" : "HoldCo PIK Notes", body: (ko: boolean) => ko ? "OpCo 부채 위, 에쿼티 아래. PE가 구조에서 배당을 추출하는 수단." : "Above OpCo debt, below equity. PE's mechanism to extract dividends from the structure." },
                { title: (ko: boolean) => ko ? "메자닌 파이낸싱" : "Mezzanine Financing", body: (ko: boolean) => ko ? "12–20% PIK. 에쿼티 킥커(워런트) 포함. 초기 성장 기업 또는 특수 상황." : "12–20% PIK. Includes equity kicker (warrants). Early-growth companies or special situations." },
                { title: (ko: boolean) => ko ? "부실 상황" : "Distressed Situations", body: (ko: boolean) => ko ? "현금 유동성 위기 시 기존 채권을 PIK로 전환. 리스트럭처링의 일환." : "Convert existing bonds to PIK during cash liquidity crisis. Part of a restructuring." },
              ].map((item, j) => (
                <div key={j} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-3">
                  <p className="font-bold text-gray-900 dark:text-gray-50 mb-1">{item.title(ko)}</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.body(ko)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 5: Call Schedule ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. Call Schedule 최적화 — NC/2 vs NC/3 vs NC/4" : "5. Call Schedule Optimization — NC/2 vs NC/3 vs NC/4"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "7% 쿠폰 7년 만기 HY 채권 기준. NC는 Non-Call을 의미 — 해당 기간 동안 발행사가 조기 상환(콜) 불가. PE에게 Call Schedule은 엑싯 비용을 결정한다."
              : "Based on a 7% coupon, 7-year HY bond. NC = Non-Call — issuer cannot call during this period. For PE, the call schedule determines exit cost."}
          </p>

          <div className="space-y-4 mb-6">
            {CALL_SCHEDULE.map((cs, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.09)}
                className={`rounded-xl border p-5 ${cs.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-black text-xl text-gray-900 dark:text-gray-50">{cs.type}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cs.badge}`}>
                    {cs.spreadAdj(ko)}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {cs.callDates.map((d, j) => (
                    <div key={j} className="rounded-lg bg-white/60 dark:bg-black/20 border border-white/40 dark:border-white/10 px-3 py-2 text-center">
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5">{d.yr}</p>
                      <p className="font-mono font-bold text-xs text-gray-900 dark:text-gray-50">{d.price}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {cs.pePref(ko)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Equity Clawback */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              📌 {ko ? "에쿼티 클로백 (Equity Clawback)" : "Equity Clawback"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "콜 스케줄과 별도로, 발행 후 3년 이내에 에쿼티 공모 수익금으로 채권 액면의 최대 35%를 쿠폰+100%(예: 7% 채권의 경우 107%)에 상환 가능. 주요 조건: 반드시 에쿼티 수익금으로만 가능, 남은 65%는 Non-Call 유지."
                : "Separate from the call schedule: within 3 years of issuance, the issuer can redeem up to 35% of the bond face at coupon+100% (e.g., 107% for a 7% bond) using equity offering proceeds only. Key condition: equity proceeds only; remaining 65% stays non-callable."}
            </p>
            <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
              {ko
                ? "PE 활용: IPO 또는 프라이버리 에쿼티 라운드 후 일부 HY 채권을 조기 상환해 이자 부담 경감. NC 기간 중에도 가능하다는 점에서 매우 유용."
                : "PE usage: after an IPO or private equity round, redeem a portion of HY bonds early to reduce interest burden. Useful precisely because it works even within the NC period."}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 6: Cross-Currency HY ────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. Cross-Currency HY — USD vs EUR 시장 비교" : "6. Cross-Currency HY — USD vs EUR Market"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "글로벌 HY 발행사 중 상당수가 USD와 EUR 동시 발행을 선택합니다. EUR 시장은 역사적으로 USD 대비 약 100bp 낮은 스프레드를 제공해왔습니다."
              : "Many global HY issuers elect to issue in both USD and EUR simultaneously. Historically, the EUR market has offered ~100bp tighter spreads than USD."}
          </p>

          {/* Comparison Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-3 text-blue-600 dark:text-blue-400">USD HY</th>
                    <th className="text-left px-4 py-3 text-indigo-600 dark:text-indigo-400">EUR HY</th>
                  </tr>
                </thead>
                <tbody>
                  {CCY_COMPARE.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-xs text-gray-700 dark:text-gray-300">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{typeof row.usd === "function" ? row.usd(ko) : row.usd}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{typeof row.eur === "function" ? row.eur(ko) : row.eur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cross-Currency Example */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🌐 {ko ? "실제 크로스커런시 딜 구조" : "Real-World Cross-Currency Deal Structure"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "유럽 사업 수익이 있는 미국 발행사 사례: USD $500mn HY + EUR €300mn HY 동시 발행. EUR 투자자에게는 EUR 쿠폰, USD 투자자에게는 USD 쿠폰 지급. 발행사는 EUR 쿠폰을 USD로 스왑 (크로스커런시 스왑) — 추가 비용 +50–100bp."
                : "US issuer with European revenues: issue $500mn USD HY + €300mn EUR HY simultaneously. EUR investors receive EUR coupon; USD investors receive USD coupon. Issuer swaps EUR coupon to USD via cross-currency swap — additional cost +50–100bp."}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-white/60 dark:bg-black/20 p-3">
                <p className="font-bold text-gray-900 dark:text-gray-50 mb-1">
                  {ko ? "EUR 매출 기업의 '자연 헤지'" : "Natural Hedge for EUR-Revenue Companies"}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "EUR 수익으로 EUR 쿠폰 지급 → 스왑 불필요. 가장 효율적인 구조. 스왑 비용 50–100bp 절감."
                    : "Pay EUR coupon from EUR revenues → no swap needed. Most efficient structure. Saves 50–100bp swap cost."}
                </p>
              </div>
              <div className="rounded-lg bg-white/60 dark:bg-black/20 p-3">
                <p className="font-bold text-gray-900 dark:text-gray-50 mb-1">
                  {ko ? "왜 USD 발행사가 EUR로 발행하는가" : "Why USD Issuers Issue in EUR"}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "① EUR 스프레드 타이트 (–100bp). ② 유럽 투자자 다변화. ③ EUR 매출 자연 헤지. 스왑 후 all-in 비용이 USD보다 저렴하면 EUR 발행 우선."
                    : "① EUR spreads tighter (–100bp). ② European investor diversification. ③ Natural hedge for EUR revenues. Issue EUR first if post-swap all-in cost beats USD."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 7: Rating Notching ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. Rating Notching — 인스트루먼트별 등급 차이" : "7. Rating Notching — Why Instruments Differ from Issuer Rating"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "발행사 CFR(Corporate Family Rating)이 B+/Ba3여도, 인스트루먼트마다 등급이 다릅니다. 담보 여부와 순위에 따라 1–3노치 차이가 납니다. HY 채권 투자자는 사실상 B 등급 인스트루먼트를 사는 것입니다."
              : "Even if the issuer CFR is B+/Ba3, each instrument receives its own rating. Collateral and seniority drive 1–3 notch differences. HY bond investors are actually buying a B-rated instrument."}
          </p>

          {/* Notching Visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              {ko ? "발행사 CFR = B+ / Ba3 기준" : "Issuer CFR = B+ / Ba3"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {ko ? "인스트루먼트 등급 (선순위 → 후순위)" : "Instrument ratings (most senior → most junior)"}
            </p>
            <div className="space-y-3">
              {RATING_NOTCHING.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                  className="flex items-center gap-3">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">{item.instrument(ko)}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-gray-900 dark:text-gray-50">{item.sp} / {item.moodys}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.notch(ko)}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.width}%` }}
                        viewport={VP}
                        transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Implication */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-4">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              💡 {ko ? "실무적 함의" : "Practical Implication"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "노칭 방법론의 의미: 발행사가 B+ 등급이면, HY 채권 투자자는 사실상 B 인스트루먼트를 사는 것입니다. 이것이 실제 리스크 프로파일입니다. 1순위 담보 투자자는 B+ 인스트루먼트를 받습니다. 이것이 자본구조 설계가 중요한 이유입니다 — 동일 발행사의 동일 딜에서 투자자별 등급이 2–4노치 차이납니다."
                : "The notching methodology means: if the issuer is rated B+, HY bond investors are actually buying a B instrument — that is their real risk profile. Senior secured investors get a B+ instrument. This is why capital structure construction matters so much — investors in the same deal from the same issuer differ by 2–4 rating notches."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 8: 매크로 환경 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "8. 매크로 환경과 프라이싱 — 2021–2024 사이클" : "8. Macro Environment & Pricing — The 2021–2024 Cycle"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 발행사라도 시장 환경에 따라 all-in 비용이 4.5%에서 10%까지 달라질 수 있습니다. PE는 '베이스 케이스'와 '다운사이드' 금리 시나리오를 함께 모델링합니다."
              : "The same issuer can face all-in costs ranging from 4.5% to 10% depending on the market environment. PE models both 'base case' and 'downside' rate scenarios."}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {MACRO_ENV.map((env, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${env.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${env.dot}`} />
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{env.period}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{env.label(ko)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { k: "SOFR", v: env.sofr },
                    { k: ko ? "HY 스프레드" : "HY Spread", v: env.hySpread },
                    { k: ko ? "All-in" : "All-in", v: env.allIn },
                  ].map((d, j) => (
                    <div key={j} className="rounded-lg bg-white/60 dark:bg-black/20 px-2 py-1.5 text-center">
                      <p className="text-[9px] text-gray-400 dark:text-gray-500 mb-0.5">{d.k}</p>
                      <p className="font-mono font-bold text-[11px] text-gray-900 dark:text-gray-50">{d.v}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-600 dark:text-gray-400 mb-1.5">
                  {ko ? "LBO 활동" : "LBO Activity"}: <span className="font-semibold">{env.lboActivity(ko)}</span>
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed pt-2 border-t border-white/40 dark:border-black/20">
                  {env.note(ko)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* PE Modeling Approach */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "PE의 금리 시나리오 모델링" : "How PE Models Rate Scenarios"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              {[
                { scenario: (ko: boolean) => ko ? "베이스 케이스" : "Base Case", content: (ko: boolean) => ko ? "현재 SOFR + 스프레드 기준. 딜 완료 시 예상 all-in 비용으로 이자 커버리지 계산." : "Current SOFR + spread. Calculate interest coverage at expected all-in cost at deal close.", color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20" },
                { scenario: (ko: boolean) => ko ? "다운사이드 케이스" : "Downside Case", content: (ko: boolean) => ko ? "금리 +150bp 가정. EBITDA 15–20% 하락 가정. 이 시나리오에서도 DSCR > 1.0 유지 여부 검증." : "+150bp rates. 15–20% EBITDA decline. Verify DSCR > 1.0 even under this scenario.", color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20" },
                { scenario: (ko: boolean) => ko ? "리파이낸싱 시나리오" : "Refinancing Scenario", content: (ko: boolean) => ko ? "TLB 만기 전 리파이낸싱 가정. 3–5년 후 시장이 어떻게 될지. 금리 헤지(캡) 비용 포함." : "Assume refinancing before TLB maturity. Where will markets be in 3–5 years. Include rate cap hedge cost.", color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20" },
              ].map((s, j) => (
                <div key={j} className={`rounded-lg border p-3 ${s.color}`}>
                  <p className="font-bold text-gray-900 dark:text-gray-50 mb-1.5">{s.scenario(ko)}</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.content(ko)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 한국 관련 섹션 (20%) ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "한국의 LevFin 프라이싱 현실" : "LevFin Pricing Reality in Korea"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            {ko
              ? "한국 PE 딜은 공개 HY 채권이 아닌 은행 신디케이티드 론 중심입니다. 프라이싱 메커니즘은 글로벌 HY와 다르게 작동합니다."
              : "Korean PE deals rely on bank syndicated loans rather than public HY bonds. The pricing mechanism works differently from global HY."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: (ko: boolean) => ko ? "한국 신디케이티드 론 프라이싱" : "Korean Syndicated Loan Pricing",
                icon: "🇰🇷",
                body: (ko: boolean) => ko
                  ? "한국 LBO 파이낸싱은 대부분 은행 신디케이트. 스프레드는 CD금리 또는 KORIBOR + 200–400bp. 공개 HY의 IPT–Guidance–Tightening 과정 없음. 주간사(KDB, 산업은행, IBK) 주도 직접 협상. OID 개념이 약함."
                  : "Korean LBO financing is mostly bank syndicate. Spreads at CD rate or KORIBOR + 200–400bp. No IPT–Guidance–Tightening public process. Direct negotiation led by lead arrangers (KDB, IBK). OID concept is weak.",
                color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
              },
              {
                title: (ko: boolean) => ko ? "글로벌 HY 접근의 미래" : "The Future of Global HY Access",
                icon: "🌐",
                body: (ko: boolean) => ko
                  ? "MBK, Hahn & Co. 등 대형 한국 PE는 일부 딜에서 해외 HY 채권 발행을 병행. 홈플러스 같은 대형 딜은 달러 TLB + 원화 은행론 하이브리드 구조를 시도한 바 있음. 글로벌 크레딧 투자자 유입이 계속되면 한국도 진정한 LevFin 시장이 형성될 가능성."
                  : "Large Korean PE firms like MBK and Hahn & Co. have piloted offshore HY issuance on select deals. Large deals like Homeplus experimented with hybrid dollar TLB + KRW bank loan structures. Continued entry of global credit investors could eventually create a genuine Korean LevFin market.",
                color: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",
              },
            ].map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                className={`rounded-xl border p-5 ${card.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{card.icon}</span>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{card.title(ko)}</p>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{card.body(ko)}</p>
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
                    className="underline decoration-dotted hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 이 챕터가 분석하는 실제 딜 ─────────────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-14"
        >
          <motion.p variants={fadeUp()} className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            {ko ? "이 챕터가 분석하는 실제 딜 — LevFin 관점" : "Real Deals Analyzed Through LevFin Lens"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/kkr-rjr-nabisco`,
                initials: "KKR",
                bg: "bg-gray-800",
                title: ko ? "KKR × RJR Nabisco (1989) — PIK 채권과 복리 함정의 교과서" : "KKR × RJR Nabisco (1989) — The PIK Bond & Compounding Trap Textbook",
                sub: ko ? "PIK 15~17% 복리 구조, $5B HY 14~16% 금리 결정 과정 — LevFin 프라이싱 원형" : "PIK 15–17% compound structure, $5B HY 14–16% rate-setting process — the LevFin pricing original",
              },
              {
                href: `${base.replace("market-101", "deals")}/elon-musk-twitter`,
                initials: "MUSK",
                bg: "bg-gray-900",
                title: ko ? "일론 머스크 × 트위터 (2022) — Market Flex의 한계와 2022 금리 충격" : "Elon Musk × Twitter (2022) — Market Flex Limits & the 2022 Rate Shock",
                sub: ko ? "브리지론 Flex 15%+ 적용 후에도 신디케이션 실패 — OID와 NIC가 한계에 봉착한 사례" : "Even after 15%+ flex, syndication failed — OID and NIC hitting their limits in practice",
              },
            ].map((d, i) => (
              <motion.div key={d.href} variants={fadeUp(i * 0.06)}>
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
            ? "LevFin Ch.5 프라이싱 심화 — OID·PIK·Call Schedule·NIC·크로스커런시 | Deal Story"
            : "LevFin Ch.5 Advanced Pricing — OID, PIK, Call Schedule, NIC & Cross-Currency | Deal Story"}
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
