"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
    color: "border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/10",
    labelColor: "text-emerald-700 dark:text-emerald-400",
    items: [
      { name: "진짜 1회성 법적 비용", detail: "단발성 소송 합의금, 특정 분쟁 관련 법무 비용 (반복 업종 제외)" },
      { name: "오너 과잉 보상 조정", detail: "오너 운영 기업의 시장 급여 초과분 — PE 인수 후 절감될 비용" },
      { name: "IPO/딜 관련 자문 비용", detail: "당해 거래를 위한 IB·법무 비용 — 구조적으로 반복 불가" },
      { name: "자연재해·일회성 재난 손실", detail: "홍수·화재 등 보험 처리되지 않은 실제 1회성 손실" },
    ],
  },
  {
    tier: "⚠️ 논란 — 증거 요구",
    color: "border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/10",
    labelColor: "text-amber-700 dark:text-amber-400",
    items: [
      { name: "구조조정 비용", detail: "2년 연속 등장하면 FDD 거부 — Valeant는 8분기 연속 '비반복' 처리" },
      { name: "CEO 교체·전략 검토 비용", detail: "1회성으로 분류하지만 '변환 프로그램'이 3~4년 지속되는 경우 다수" },
      { name: "코로나 정상화 (2020~2022)", detail: "팬데믹 손실 add-back — 업종별 타당성 차이 크고 남용 사례 광범위" },
      { name: "신규 사업 Pre-opening 비용", detail: "성장 중인 기업에서 구조적으로 반복 — WeWork 패턴과 동일" },
    ],
  },
  {
    tier: "❌ FDD에서 거의 거부",
    color: "border-rose-200 dark:border-rose-800/40 bg-rose-50/50 dark:bg-rose-950/10",
    labelColor: "text-rose-600 dark:text-rose-400",
    items: [
      { name: "주식 기반 보상 (SBC)", detail: "Buffett: '이게 보상이 아니면 뭔가? 비용이 아니면 어디로 가나?' — 경제적 희석은 실재" },
      { name: "미실현 시너지 예상치", detail: "아직 달성 안 된 비용 절감을 EBITDA에 add-back. Run-rate 증거 없으면 거부" },
      { name: "SG&A 전체 제외 (WeWork형)", detail: "핵심 영업비용을 '비핵심'으로 재분류. Community-Adjusted EBITDA의 핵심 문제" },
      { name: "반복 등장 M&A 통합 비용", detail: "Serial acquirer의 통합비용 — 매 인수마다 '1회성'. 실질적으로 영구 비용" },
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
    numbers: [
      { label: "GAAP 순손실 (FY2018)", value: "-$1.93B" },
      { label: "Community-Adjusted EBITDA", value: "+$467M" },
      { label: "GAAP vs. Adj. 갭", value: "~$2.4B" },
      { label: "SoftBank 손실", value: "-$9.5B" },
    ],
    detail: `WeWork은 S-1에서 "Community-Adjusted EBITDA"를 이렇게 정의했다: GAAP 순손실에서 이자·세금·감가상각·SBC를 제거하고, 추가로 **SG&A 전체와 Pre-opening 비용**을 제외. 문제는 SG&A($933M, FY2018)가 WeWork 비즈니스 모델의 핵심 영업비용이라는 점이다. 회원 한 명을 추가하려면 영업·마케팅 비용이 반드시 발생한다. 이를 제외하면 '성숙 위치의 단위 경제성'은 그럴듯해 보이지만 기업 전체 수익성으로는 결코 번역되지 않는다. IPO는 2019년 9월 철회됐고, 2023년 11월 챕터11 파산 신청.`,
    source: "출처: WeWork S-1 filing, Aug 14, 2019 (SEC EDGAR)",
  },
  {
    title: "Valeant — 반복적 비반복 비용",
    region: "🇨🇦 캐나다/미국",
    year: "2015",
    color: "border-amber-200 dark:border-amber-800/40",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    summary: "8분기 연속 '비반복'으로 분류된 구조조정비 — GAAP EPS -$0.18을 Cash EPS +$10.17로",
    numbers: [
      { label: "GAAP EPS (FY2015)", value: "-$0.18" },
      { label: "'Cash EPS' (조정 후)", value: "+$10.17" },
      { label: "Adjusted EBITDA (FY2015)", value: "~$5.7B" },
      { label: "주가 고점 → 저점", value: "$262 → $10 이하" },
    ],
    detail: `Valeant의 비즈니스 모델은 기업 인수 후 약가 인상·R&D 삭감이었다. 조정 지표는 인수 관련 무형자산 상각($2B+)과 구조조정·통합 비용을 매 분기 '비반복'으로 add-back했다. 결정적 문제: 2013년부터 2015년까지 8분기 연속으로 이 비용이 발생했다. '비반복'이 반복되면 그것은 구조 비용이다. SEC 조사(2016), 재무제표 재작성, CFO·CEO 책임 추궁. Doyle, Jennings & Soliman(2013, Journal of Accounting and Economics)은 기업들이 주장하는 '비반복' 항목의 65~70%가 이후 기간에 다시 발생함을 실증했다.`,
    source: "출처: Valeant Annual Report 2015; SEC Comment Letters (EDGAR); Doyle et al. (2013), JAE",
  },
  {
    title: "MBK Partners × 홈플러스 — 한국 최대 PE 바이아웃",
    region: "🇰🇷 한국",
    year: "2015~2025",
    color: "border-blue-200 dark:border-blue-800/40",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    summary: "부동산 자산 리스백 수익을 영업 EBITDA에 포함 — 구조적 소매업 하락 할인 불충분",
    numbers: [
      { label: "인수 규모", value: "KRW 7.2조 (~$6.1B)" },
      { label: "인수 시 부채/EBITDA", value: "약 9~10×" },
      { label: "한국 PE 역사상", value: "최대 규모 바이아웃" },
      { label: "기업회생 신청", value: "2025년 2월" },
    ],
    detail: `테스코가 제시한 매각 EBITDA에는 부동산 자산 매각 후 리스백(Sale & Leaseback)에서 발생한 수익이 포함됐다. 이 수익은 일회성 혹은 유한한 성격이었지만 run-rate EBITDA처럼 반영됐다. 또한 Tesco 그룹 오버헤드 절감 효과는 add-back됐으나, 독립 운영을 위해 MBK가 새로 구축해야 할 비용 인프라는 충분히 차감되지 않았다. 9~10× 레버리지는 한국 리테일 구조 변화(쿠팡, 네이버, 편의점)가 가속화되는 환경에서 버퍼가 전혀 없었다. 2025년 2월 기업회생 신청, 잔존 부채 약 KRW 3조.`,
    source: "출처: 한국경제, 매일경제 공시 보도; 홈플러스 기업회생 공시 (2025. 2.)",
  },
  {
    title: "HDC현대산업개발 × 아시아나항공 — FDD 실패",
    region: "🇰🇷 한국",
    year: "2019~2020",
    color: "border-purple-200 dark:border-purple-800/40",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    summary: "중정비비용(D-Check) add-back과 우발채무 검증 부족 — 코로나로 딜 파기",
    numbers: [
      { label: "딜 사이즈 (EV)", value: "KRW 2.5조" },
      { label: "계약 체결", value: "2019년 12월" },
      { label: "딜 파기 사유", value: "MAC 조항 + 코로나" },
      { label: "한국 법원 결정", value: "계약 해제 인정" },
    ],
    detail: `항공사의 중정비비용(Heavy Maintenance / D-Check)은 기체당 수년 주기로 발생하지만 금액이 크다. 구조적으로 반복되는 비용임에도 FDD에서 '비반복성'으로 충분히 검증되지 않은 채 add-back됐다. 또한 IFRS 16 도입 전후의 운용리스 처리 방식 변화가 EBITDA에 미치는 영향과, 다수의 우발채무가 FDD 단계에서 제대로 포착되지 않았다. 코로나19는 방아쇠였지만 근본적 취약성은 FDD 단계에서 이미 존재했다.`,
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

export default function AdjustedEbitdaClient() {
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
                  <p className={`text-xs font-bold mb-3 ${tier.labelColor}`}>{tier.tier}</p>
                  <div className="space-y-3">
                    {tier.items.map((item) => (
                      <div key={item.name} className="flex gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">{item.detail}</p>
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
              이론이 실제 딜에서 어떻게 전개됐는지 — 숫자와 결과를 중심으로.
            </motion.p>
            <motion.div variants={stagger(0.1)} className="space-y-6">
              {CASES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className={`rounded-2xl border ${c.color} bg-white dark:bg-gray-900 p-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${c.badge}`}>{c.region} · {c.year}</span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{c.summary}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {c.numbers.map((n) => (
                      <div key={n.label} className="rounded-lg bg-gray-50 dark:bg-gray-800/60 p-3">
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{n.label}</p>
                        <p className="text-sm font-black text-gray-900 dark:text-gray-100 font-mono">{n.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{c.detail}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 italic">{c.source}</p>
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
      </main>
      <Footer />
    </>
  );
}
