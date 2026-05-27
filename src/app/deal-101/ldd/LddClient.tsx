"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── 색상 맵 ─────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── LDD 6가지 검토 영역 ──────────────────────────────────────────
const REVIEW_AREAS = [
  {
    num: "01",
    title: "계약 리스크",
    color: "blue",
    items: [
      { label: "Change of Control 조항", desc: "주요 고객·공급업체 계약에 '인수 시 상대방이 계약을 해지할 수 있다'는 조항이 있는가. 인수 가치의 핵심이 고객 계약에서 온다면, 이 조항 하나가 딜의 근거를 무너뜨릴 수 있다." },
      { label: "장기 계약의 의무 이행 리스크", desc: "인수 후 이행해야 할 장기 계약 의무가 얼마나 있는가. 납품 지연·품질 조건 위반 시 손해배상 조항의 규모." },
      { label: "라이선스 계약의 이전 가능 여부", desc: "핵심 기술·브랜드·콘텐츠 라이선스가 인수자에게 자동 이전되는가, 아니면 별도 동의가 필요한가. 이전 불가 라이선스는 인수 후 사업 운영을 막을 수 있다." },
    ],
  },
  {
    num: "02",
    title: "지식재산권 (IP)",
    color: "violet",
    items: [
      { label: "특허·상표·저작권 소유권 명확성", desc: "핵심 IP가 법인 소유인지 명확히 확인. 창업자·핵심 엔지니어 개인 명의로 등록된 특허나 상표가 있다면, 그 권리는 인수와 함께 자동으로 넘어오지 않는다." },
      { label: "IP 분쟁 이력", desc: "과거 특허 침해 소송·상표권 분쟁이 있었는가. 현재 진행 중인 IP 분쟁. 패소 시 핵심 제품을 더 이상 만들 수 없게 되는 '생존 리스크' 여부." },
      { label: "오픈소스 라이선스 리스크", desc: "소프트웨어 기업에서 자주 발견. GPL·LGPL 등 카피레프트(copyleft) 오픈소스를 핵심 제품에 포함시켰다면, 소스코드 공개 의무가 발생할 수 있다." },
    ],
  },
  {
    num: "03",
    title: "소송·분쟁 현황",
    color: "amber",
    items: [
      { label: "진행 중인 소송 목록", desc: "민사·형사·행정 소송 전체 목록. 각 건별 예상 배상 규모와 현재 진행 단계. 소송 하나가 EBITDA 전체를 초과하는 청구금액인 경우도 있다." },
      { label: "규제 위반 조사 현황", desc: "공정거래위원회·금융감독원·환경부 등 규제 당국의 조사 진행 여부. 과징금·영업정지 가능성." },
      { label: "잠재 소송 위험 (Contingent Liability)", desc: "아직 제기되지 않았지만 발생 가능성이 있는 클레임. 전직 직원의 불공정 해고 주장, 제품 결함으로 인한 소비자 피해, 과거 계약 위반 주장 등이 해당." },
    ],
  },
  {
    num: "04",
    title: "규제·인허가",
    color: "rose",
    items: [
      { label: "사업 운영 필수 허가·면허 유효성", desc: "현재 허가·면허가 모두 유효하게 유지되고 있는가. 만료 예정인 인허가가 있다면 갱신 조건이 더 엄격해질 가능성은 없는가." },
      { label: "인수 후 인허가 이전·갱신 필요 여부", desc: "일부 인허가는 명의가 바뀌면 자동 소멸되고 재신청이 필요하다. 의료·금융·방산·통신 등 규제 집약 산업에서 인허가 이전이 딜 클로징보다 오래 걸리는 경우가 있다." },
      { label: "산업별 규제 준수 여부", desc: "금융업의 BIS 비율·유동성 규제, 제약업의 GMP 인증, 방산업의 수출 허가, 식품업의 HACCP 인증 등. 규제 위반 이력이 있다면 향후 추가 제재 가능성 포함." },
    ],
  },
  {
    num: "05",
    title: "노동·고용",
    color: "emerald",
    items: [
      { label: "노동조합 계약 및 단체협약", desc: "CBA(단체협약)의 주요 조건과 만료 일정. 인수 후 임금 협상·파업 리스크. 노조의 Change of Control에 대한 권리가 있는가." },
      { label: "핵심 임직원 계약", desc: "핵심 경영진·엔지니어의 경쟁 금지(Non-Compete)·비밀 유지(NDA) 계약 유효성. 인수 후 이탈할 경우 사업에 미치는 영향. 스톡옵션 加速 조항(Accelerated Vesting) 존재 여부." },
      { label: "미지급 급여·퇴직금 부채", desc: "장기 근속자에 대한 미지급 퇴직금, 잔여 연차, 성과급 미지급 금액. 인수 후 일시에 지급해야 할 잠재 부채. 특히 구조조정 예상 시 중요." },
    ],
  },
  {
    num: "06",
    title: "환경 리스크",
    color: "teal",
    items: [
      { label: "환경 오염·정화 의무", desc: "과거 사업 활동으로 인한 토양·지하수 오염. 정화 비용은 수백억에서 수천억에 달할 수 있다. 제조·화학·에너지·광산 업종에서 특히 중요." },
      { label: "탄소 배출권·환경 규제 준수", desc: "탄소중립 규제 강화로 추가 비용이 발생하는가. 현재 탄소 배출량과 허용 한도 대비 위치. 미래 탄소 비용 추정." },
      { label: "유해물질 사용 이력", desc: "석면·중금속·화학물질 사용 이력과 처리 현황. 현재 법적 기준을 충족하더라도 과거 사용 이력에서 소송 리스크가 발생할 수 있다." },
    ],
  },
];

// ── LDD 결과 분류 ────────────────────────────────────────────────
const SEVERITY_LEVELS = [
  {
    level: "Material (중요)",
    color: "rose",
    action: "가격 조정 또는 SPA 특별 조항 필요",
    examples: "핵심 고객 계약의 Change of Control 조항, 대규모 진행 중 소송, 핵심 특허의 소유권 불명확",
  },
  {
    level: "Moderate (중간)",
    color: "amber",
    action: "모니터링 또는 클로징 조건(CP) 설정",
    examples: "만료 예정 인허가, 소규모 노동 분쟁, 비핵심 계약의 이전 제한",
  },
  {
    level: "Minor (경미)",
    color: "emerald",
    action: "정보 제공 수준 — 인수 후 관리",
    examples: "행정 절차상 경미한 위반, 소규모 만료 계약, 비핵심 IP 등록 미비",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    title: "LDD가 가격을 $350M 낮춘 케이스",
    company: "Verizon × Yahoo",
    year: "2016–2017",
    type: "LDD 가격 조정 케이스",
    typeColor: "rose",
    analogy: "집 계약 후 점검하다가 지하에 감춰진 수도관 파열을 발견한 것. 발견했으니 가격을 깎을 수 있었다.",
    paragraphs: [
      "2016년 7월, Verizon은 Yahoo의 인터넷 사업 부문을 $4.83B에 인수하기로 합의했다. DD 진행 중 2013년(5억 계정)과 2014년(30억 계정)에 발생한 대규모 해킹 사실이 공개됐다.",
      "LDD와 FDD를 통한 통합 검토로 해당 해킹의 법적 책임 규모가 추정됐다. 미국 증권거래위원회(SEC) 조사, 주주 집단소송, 각국 정부 규제 당국 조사 등 법적 파급이 상당할 것으로 판단됐다.",
      "결과: Verizon은 $350M 가격 인하와 Yahoo 측의 향후 법적 비용 50% 분담 조건으로 재협상해 딜을 클로징했다. LDD에서 발견한 리스크가 직접적인 가격 조정으로 이어진 교과서적 사례다.",
    ],
    lesson: "LDD는 단순히 리스크를 목록화하는 작업이 아니다. 발견된 법적 리스크를 재무 가치로 정량화해 가격 협상 테이블로 가져가는 것이 LDD의 완성이다. '이 리스크의 현재 가치(PV)가 얼마인가'가 핵심 질문이다.",
  },
  {
    title: "LDD로 GDPR 리스크 파악, 인수 구조 자체를 바꿨다",
    company: "Microsoft × LinkedIn",
    year: "2016",
    type: "LDD 구조 설계 케이스",
    typeColor: "blue",
    analogy: "집을 사기 전에 '이 동네 새 건물 규제가 바뀐다'는 걸 알고, 그에 맞게 증축 계획과 가격을 협상한 것.",
    paragraphs: [
      "$26.2B 규모의 딜에서 LDD팀은 유럽 개인정보 보호 규제(당시 EU 지침, 이후 2018년 GDPR로 강화)와 LinkedIn의 방대한 개인정보 데이터 활용에 대한 법적 제한 리스크를 파악했다.",
      "단순히 '리스크가 있다'고 기록하는 데 그치지 않고, Microsoft는 LinkedIn을 독립 법인으로 운영하고 개인정보 처리 시스템을 분리하는 구조를 인수 통합 계획에 반영했다. LDD 결과가 인수 후 통합 구조(PMI 설계) 자체를 바꾼 것이다.",
      "결과적으로 2018년 GDPR 시행 이후 LinkedIn은 상대적으로 규제 리스크를 방어적으로 관리할 수 있었다. 인수 당시의 LDD 대응이 선제적 위험 관리로 이어진 사례다.",
    ],
    lesson: "LDD는 SPA의 Reps & Warranties를 채우는 체크리스트 작업이 아니다. 발견된 법적 리스크가 인수 후 사업 구조 설계와 통합 계획에 직접 반영되어야 한다. '법적으로 뭐가 문제인가'에서 그치지 않고, '그렇다면 인수 구조를 어떻게 바꿔야 하는가'까지 이어져야 한다.",
  },
];

// ── 관련 개념 ────────────────────────────────────────────────────
const RELATED = [
  { href: "/deal-101/fdd", title: "FDD (재무실사)", desc: "숫자의 정확성을 검증 — LDD와 함께 실사의 두 축", badge: "실사" },
  { href: "/deal-101/cdd", title: "CDD (사업실사)", desc: "사업 지속 가능성 검증 — 시장·고객·경쟁 구도 분석", badge: "실사" },
  { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "LDD는 Phase 4 실사 단계에서 FDD·CDD와 함께 진행", badge: "프로세스" },
  { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "LDD에서 발견한 잠재 부채가 EBITDA 조정에 반영된다", badge: "Valuation" },
];

export default function LddClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">LDD</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              실사
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              LDD (법률실사) 완전 정리
              <span className="block text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400 mt-1">
                — 숨겨진 법적 시한폭탄을 찾아라
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              타겟 기업의 계약·IP·소송·규제·노동·환경 리스크를 전방위로 검토한다.
              잠재 부채(Contingent Liability)를 사전에 파악해 가격에 반영하거나 SPA에 명시하는 것이 LDD의 핵심이다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {REVIEW_AREAS.map((area) => {
                const c = COLOR_MAP[area.color];
                return (
                  <a key={area.num} href={`#area-${area.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {area.num}. {area.title}
                  </a>
                );
              })}
              <a href="#cases" className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                케이스 스터디
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: LDD란 무엇인가 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">LDD란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                LDD(Legal Due Diligence, 법률실사)는 M&A 실사에서 타겟 기업의 <strong className="text-gray-800 dark:text-gray-200">법적 리스크 전반을 검토</strong>하는 과정이다.
                수행자는 M&A 전문 법무법인(대형 로펌)이며, 계약·지식재산권·소송·규제·인허가·노동·환경의 6개 영역을 커버한다.
              </p>
              <p>
                LDD의 목적은 두 가지다. 첫째, <strong className="text-gray-800 dark:text-gray-200">잠재 부채(Contingent Liability)</strong>를 사전에 파악해 가격에 반영한다.
                둘째, 인수 후 법적 리스크가 현실화될 경우를 대비해 SPA의 Reps & Warranties에 명시한다.
              </p>
              <p>
                FDD·CDD가 숫자와 사업 가치를 검증한다면, LDD는 그 숫자와 사업이 법적으로 온전히 인수자에게 이전되는지,
                그리고 인수 후 법적 시한폭탄이 없는지를 확인한다.
              </p>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                집을 살 때 등기부등본(소유권 명확성), 건물 용도(허가 적법성), 위반 건축물 여부(규제 준수),
                저당권 설정 여부(숨겨진 부채)를 확인하는 것이 LDD다.
                집 자체가 아무리 멋있어도 등기가 꼬여 있거나 저당이 잡혀 있다면 그 집은 살 수 없다.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 LDD가 찾는 것</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed space-y-1 mt-1">
                <li>• 인수 시 자동 해지될 수 있는 핵심 고객·공급업체 계약 (Change of Control)</li>
                <li>• 법인이 아닌 개인 소유로 등록된 핵심 IP</li>
                <li>• 재무제표에 반영되지 않은 잠재 소송 부채</li>
                <li>• 인수 후 사업을 막을 수 있는 인허가 이전 제한</li>
                <li>• 인수 후 일시에 폭발할 노동·환경 부채</li>
              </ul>
            </div>
          </motion.section>

          {/* ── 섹션 2: 6가지 검토 영역 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">LDD 주요 검토 영역 6가지</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                로펌은 아래 6개 영역을 동시에 검토한다. 영역마다 전문 변호사 팀이 별도로 구성되는 경우도 있다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {REVIEW_AREAS.map((area) => {
                const c = COLOR_MAP[area.color];
                return (
                  <motion.div
                    key={area.num}
                    id={`area-${area.num}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className={`rounded-xl border ${c.border} ${c.bg} p-4 mb-4`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold ${c.text}`}>{area.num}</span>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{area.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {area.items.map((sub, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                          <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{sub.label}</span>
                            <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 3: 결과 분류 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">LDD 발견 사항의 3단계 분류</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              LDD 보고서는 모든 발견 사항을 중요도에 따라 3단계로 분류한다.
              분류 결과에 따라 가격 조정, 특별 조항, 또는 단순 모니터링으로 대응 방향이 달라진다.
            </p>
            <div className="space-y-3">
              {SEVERITY_LEVELS.map((level, i) => {
                const c = COLOR_MAP[level.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <div className="flex items-start gap-3 flex-wrap">
                      <span className={`shrink-0 text-xs font-bold rounded-full px-3 py-1 ${c.badge}`}>{level.level}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold ${c.text} mb-1`}>대응: {level.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">예시: {level.examples}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Change of Control 조항과 IP 소유권은 반드시 LDD 초기에 파악해야 한다.
                핵심 고객 계약에 "인수 시 해지 가능" 조항이 있다면, 그 고객 매출에서 나오는 EBITDA는
                인수 즉시 사라질 수 있다 — 이는 가격의 근본을 흔드는 Material 리스크다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — LDD가 딜을 바꾼 사례</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                두 케이스 모두 LDD가 단순한 체크리스트를 넘어, 가격을 낮추거나 인수 구조 자체를 바꾼 실제 사례다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company} ({c_item.year})</p>
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
