/**
 * DowDuPont 3분할
 * 화학 공룡의 합병-후-즉시-3분할 — 2015년 발표, 2019년 완성
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "dowdupont-breakup",
  title: "DowDuPont 3분할 — 화학 공룡의 합병-후-즉시-분할 전략 완전 분석",
  subtitle: "합병 발표와 동시에 3분할 공약 · 콘글로머리트 디스카운트 해소 · Dow·DuPont·Corteva 탄생 · GE와 쌍벽을 이루는 구조조정 교과서",
  category: "restructuring",
  industry: "화학·소재·농업 / Chemicals & Materials",
  country: "미국",
  announcedAt: "2015-12-11",
  closedAt: "2019-06-01",
  announcedDisplay: "2015년 12월",
  closedDisplay: "2019년 6월",
  readingMinutes: 12,
  tags: ["다우케미칼", "듀폰", "DowDuPont", "화학", "3분할", "콘글로머리트", "Corteva", "농업", "소재"],
  excerpt:
    "2015년 12월 Dow Chemical과 DuPont은 $1,300억+ 규모의 합병을 발표하면서 동시에 '합병 완료 후 즉시 3분할'이라는 혁신적 전략을 공약했다. 2019년 6월 Dow Inc.(소재), DuPont de Nemours(특수소재), Corteva(농업) 3개 독립 기업으로의 분리가 완성됐다. 3개사 합산 시총은 통합 DowDuPont 대비 30%+ 상승했다.",

  acquirer: { initials: "DOW", bg: "bg-red-600", label: "Dow Inc. (분리 후)" },
  target: { initials: "DDP", bg: "bg-blue-800", label: "DowDuPont Inc. (통합 법인)" },

  background: [
    "2015년 12월 11일, Dow Chemical CEO Andrew Liveris와 DuPont CEO Ed Breen은 $1,300억+ 규모의 대등 합병(Merger of Equals)을 발표했다. 그러나 이 합병의 목적은 통합된 화학 공룡을 영속시키는 것이 아니었다. 두 CEO는 합병 발표와 동시에 합병 완료 후 즉시 3개 독립 기업으로 분리한다는 청사진을 공개했다. '합병해서 비용 시너지를 먼저 실현한 뒤, 3분할로 각각 최적 밸류에이션을 받는다'는 혁신적 전략이었다.",
    "Dow(소재·포장 화학)와 DuPont(특수화학·농업·전자)은 각각 수십 년간 독립적으로 운영됐지만, 두 회사 모두 내부에 서로 다른 밸류에이션 논리를 가진 사업들을 혼재시키고 있었다. Dow의 포장 소재와 DuPont의 Pioneer 씨앗 사업은 완전히 다른 산업·고객·사이클을 가졌다. 하나의 법인 안에 묶인 상태에서는 투자자들이 각 사업에 최적 멀티플을 적용할 수 없어 콘글로머리트 디스카운트가 지속됐다.",
    "2017년 9월, 약 2년간의 반독점 심사 끝에 DowDuPont 합병이 완료됐다. EU와 미국 당국은 특정 제초제 및 소재 사업 약 $15억 규모 매각을 조건으로 승인했다. 합병 DowDuPont은 세계 최대 화학 기업으로 출범했지만, 경영진은 즉시 3분할 실행에 착수했다. 합병 기간 동안 약 $30억의 비용 시너지를 실현했다.",
    "2019년 4월 Dow Inc.(NYSE: DOW)가 먼저 분리 상장됐고, 같은 해 6월 DuPont de Nemours(NYSE: DD)와 Corteva Inc.(NYSE: CTVA)가 동시에 분리 상장되며 3분할이 완성됐다. 모든 분사는 Section 355 면세 구조로 실행돼 기존 DowDuPont 주주들은 세금 없이 3개 회사 주식을 동시에 보유하게 됐다. 3개사 합산 시총은 통합 상태 대비 30%+ 상승했다.",
  ],

  dealSummary: {
    dealValueDisplay: "합산 시총 $1,700억+ (3개사 분리 후)",
    acquirerName: "Dow Inc. (분리 후 소재·포장 화학)",
    targetName: "DowDuPont Inc. (통합 법인)",
    announcedDisplay: "2015년 12월",
    closedDisplay: "2019년 6월 (3분할 완성)",
    country: "미국",
  },

  executiveSummary: [
    "2015년 12월 Dow Chemical + DuPont 합병 발표 — 동시에 '합병 후 즉시 3분할' 청사진 공개",
    "2017년 9월 합병 완료 (반독점 조건: $15억 자산 매각, EU·미국 승인), 세계 최대 화학기업 DowDuPont 탄생",
    "3분할 목표: Dow Inc.(소재·포장), DuPont de Nemours(특수소재·전자·수처리), Corteva(농업·종자·농약)",
    "2019년 4월 Dow Inc. NYSE 분리(DOW), 2019년 6월 DuPont + Corteva 동시 분리 — 3분할 완성",
    "모든 분사: Section 355 면세 구조 — 기존 주주 세금 없이 3개 주식 수령",
    "합병 기간 비용 시너지 약 $30억 실현 후 분리 — '합병 → 시너지 → 분사' 시퀀스 완성",
    "3개사 합산 시총 $1,700억+ — 통합 DowDuPont 대비 30%+ 상승, GE 3분할과 쌍벽",
  ],

  industryOverview: {
    body: "글로벌 화학·소재 산업은 2015년 기준 약 $5조 규모의 시장으로, 크게 범용 소재(commodity chemicals), 특수 소재(specialty chemicals), 농업 화학(agrochemicals)의 세 세그먼트로 나뉜다. 각 세그먼트는 완전히 다른 사이클·마진 구조·밸류에이션 멀티플을 갖는다. 범용 소재는 사이클성이 강하고 낮은 멀티플을 받으며, 특수 소재는 중간 수준, 농업 화학은 Pioneer 같은 종자 자산의 경우 높은 멀티플을 받을 수 있다. 이 구조적 차이가 DowDuPont 3분할의 핵심 논거였다.",
    metrics: [
      { label: "DowDuPont 합산 매출 (FY2018)", value: "약 $860억", sub: "세계 최대 화학기업 기준" },
      { label: "Dow Inc. 분리 후 시총", value: "약 $400억", sub: "2019년 4월 분리 직후" },
      { label: "Corteva 분리 후 시총", value: "약 $200억", sub: "2019년 6월 분리 직후" },
      { label: "반독점 조건 자산 매각", value: "약 $15억", sub: "EU·미국 합병 승인 조건" },
    ],
    subBody: "화학 산업의 대형 M&A는 규모의 경제와 원가 절감을 목적으로 한다. 그러나 DowDuPont은 합병 자체가 목적이 아니라 '합병 후 분리'가 목적인 전례 없는 구조였다. 이 전략은 이후 화학·소재 업계의 구조조정 교과서로 자리 잡았다.",
    players: [
      { name: "Dow Inc. (NYSE: DOW)", role: "소재·포장·인프라 화학 순수 플레이어 — 분리 후 독립" },
      { name: "DuPont de Nemours (NYSE: DD)", role: "전자·수처리·건설 특수 소재 — 분리 후 독립" },
      { name: "Corteva Inc. (NYSE: CTVA)", role: "농업·종자(Pioneer)·농약 순수 플레이어 — 분리 후 독립" },
      { name: "Andrew Liveris (Dow CEO)", role: "합병-후-3분할 전략 설계자 (Dow 측)" },
      { name: "Ed Breen (DuPont CEO)", role: "합병-후-3분할 전략 설계자 (DuPont 측)" },
    ],
  },

  companyOverview: {
    targetName: "DowDuPont Inc. (통합 법인)",
    body: "DowDuPont은 2017년 9월 Dow Chemical과 DuPont의 합병으로 탄생한 세계 최대 화학 기업이다. Dow Chemical은 폴리에틸렌·폴리우레탄·실리콘 등 범용·기능성 소재 전문 기업이었고, DuPont은 Pioneer 종자·농약·전자 소재·수처리 등 고부가가치 특수 화학 포트폴리오를 보유했다. 두 회사의 합병은 처음부터 3분할을 위한 중간 단계로 설계됐으며, 통합 기간 동안 약 $30억의 비용 시너지를 실현했다.",
    metrics: [
      { label: "합산 매출 (FY2018)", value: "약 $860억", sub: "통합 DowDuPont 기준" },
      { label: "합병 비용 시너지 (목표)", value: "약 $30억", sub: "합병 후 실현 목표" },
      { label: "직원 수 (합병 시)", value: "약 10만 명", sub: "Dow + DuPont 통합 기준" },
      { label: "반독점 매각 자산", value: "약 $15억", sub: "EU·미국 합병 승인 조건" },
      { label: "합병 완료일", value: "2017년 9월", sub: "발표 후 약 2년 심사" },
    ],
    financials: [
      { year: "FY2017", revenue: 860, cogs: 600, grossProfit: 260, sga: 90, operatingIncome: 60, ebitda: 120 },
      { year: "FY2018", revenue: 860, cogs: 598, grossProfit: 262, sga: 88, operatingIncome: 65, ebitda: 125 },
    ],
    financialsNote: "단위: 억달러 (USD 100M). DowDuPont 통합 공시 기준. 분사 전 수치이며 3개 사업부(소재·특수화학·농업) 합산.",
    financialsCurrency: "USD",
    financialsUnit: "억",
    revenueBreakdown: [
      { name: "소재과학 (Dow Inc. 전신)", pct: 40, color: "bg-red-600", amt: "약 $344억" },
      { name: "특수소재 (DuPont 전신)", pct: 35, color: "bg-blue-700", amt: "약 $301억" },
      { name: "농업 (Corteva 전신)", pct: 25, color: "bg-green-600", amt: "약 $215억" },
    ],
  },

  restructuringOverview: {
    body: "DowDuPont 3분할은 GE 3분할과 함께 콘글로머리트 해체의 양대 교과서입니다. '합병 후 즉시 3분할' 전략이 왜 주주가치를 극대화했는지, 화학·소재·농업 3개 산업의 밸류에이션 논리를 살펴봅니다.",
    trigger: "콘글로머리트 디스카운트 — 화학·농업·특수소재가 하나 묶여 저평가",
    triggerDetail: "Dow(소재)와 DuPont(특수화학·농업)은 각각 $400억+급의 독립 가치를 가졌지만 합산 시가총액이 이에 못 미쳤습니다. Andrew Liveris Dow CEO와 Ed Breen DuPont CEO는 '합병해서 규모를 키우고, 즉시 3분할해 각각 최적 멀티플을 받는다'는 혁신적 전략을 고안했습니다.",
    method: "three-way-breakup",
    methodLabel: "합병-후-즉시-3분할 (Merge-to-Split Strategy)",
    whyThisMethod: "단순 합병은 콘글로머리트 디스카운트를 유지합니다. 단순 분할은 규모의 경제 손실을 초래합니다. '합병 → 통합 비용 절감 실현 → 3분할'의 시퀀스로 단계별 가치 창출이 가능했습니다. Section 355로 세금 없이 주주에게 배분할 수 있었습니다.",
    methodVsAlternatives: [
      {
        method: "현금 자산 매각",
        reason: "화학·농업 자산은 전략 핵심이라 현금 가치로 환산 시 손실이 발생하고, 대규모 법인세 부담이 수십억 달러에 달합니다.",
      },
      {
        method: "단순 합병 유지",
        reason: "소재/특수화학/농업 멀티플이 달라 콘글로머리트 디스카운트가 지속되며 주주 가치 창출에 한계가 있습니다.",
      },
      {
        method: "2분할",
        reason: "Dow+DuPont을 2분할할 경우 각자 내부에 농업(Corteva)·소재 혼재가 지속돼 또 다른 복합기업 디스카운트가 발생합니다.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "합병-후-분할 전략 (Merge-to-Split)",
        explanation: "M&A와 구조조정을 결합 — 합병으로 규모의 경제와 비용 절감을 먼저 실현한 뒤, 즉시 3분할로 각 사업이 최적 밸류에이션을 받도록 설계하는 전략. M&A 역사에서 전례 없는 혁신적 접근이었습니다.",
        howApplied: "DowDuPont은 합병 2년 후 분사했습니다. 이 기간 약 $30억의 비용 시너지를 실현한 뒤 3개 순수 플레이어를 탄생시켰습니다.",
      },
      {
        concept: "콘글로머리트 디스카운트 (Conglomerate Discount)",
        explanation: "화학/농업/특수소재를 한 지붕에 두면 투자자가 각 사업에 고유한 멀티플을 적용하지 못해 할인이 발생합니다. 학술 연구는 평균 13~15%의 콘글로머리트 할인을 제시합니다.",
        howApplied: "분리 후 Dow는 소재 P/E, DuPont은 특수화학 P/E, Corteva는 농업 P/E를 각각 독립적으로 받아 합산 시총이 통합 대비 30%+ 향상됐습니다.",
      },
      {
        concept: "Zero-Timing 분사 전략",
        explanation: "합병 직후 분사를 설계해 자본시장의 신뢰를 미리 확보하고, 분사 후 각 경영진에게 명확한 목표를 제시하는 방식입니다. 불확실성을 최소화해 주가 할인을 방지합니다.",
        howApplied: "DowDuPont은 합병 발표 시점부터 '3개 회사로 나눌 것'을 공약했습니다. 투자자들은 3개 순수 플레이어 가치를 미리 계산하고 매입할 수 있었습니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2015년 12월",
        action: "Dow + DuPont 합병 발표 및 3분할 청사진 공개",
        detail: "Andrew Liveris(Dow CEO)와 Ed Breen(DuPont CEO)이 합병 발표와 동시에 '합병 후 3분할' 계획을 공시했습니다. 화학(Dow), 특수소재(DuPont), 농업(Corteva) 3개 독립 기업으로 분리 예정임을 명확히 했습니다.",
        financialNote: "합병 발표 당일 두 회사 주가 각각 +10%+",
      },
      {
        phase: "Phase 2",
        date: "2017년 9월",
        action: "DowDuPont 합병 완료 (반독점 조건: $15억 자산 매각)",
        detail: "약 2년간의 반독점 심사 끝에 합병이 완료됐습니다. EU·미국 당국의 조건으로 특정 제초제 및 소재 사업 약 $15억을 매각했습니다. 합병 후 '세계 최대 화학기업' DowDuPont이 공식 출범했습니다.",
        financialNote: "합병 후 연간 비용 절감 $30억 목표 달성 개시",
      },
      {
        phase: "Phase 3",
        date: "2019년 4월",
        action: "Dow Inc. NYSE 분리 상장 (NYSE: DOW)",
        detail: "소재·포장·인프라 화학 사업이 분리됐습니다. 폴리에틸렌, 폴리우레탄, 실리콘 등 사이클성 소재 전문기업으로 출범했습니다. DowDuPont 주주 1주당 Dow 1주가 배분됐습니다.",
        financialNote: "분리 후 시총 약 $400억",
      },
      {
        phase: "Phase 4",
        date: "2019년 6월",
        action: "DuPont + Corteva 동시 분리 (3분할 완성)",
        detail: "DuPont de Nemours(전자·수처리·건설 특수소재)와 Corteva(Pioneer 씨앗·농약)가 동시에 분리 상장됐습니다. 3개 순수 플레이어 체계가 완성됐으며, '합병 후 즉시 3분할' 전략이 마무리됐습니다.",
        financialNote: "3개사 합산 시총 통합 DowDuPont 대비 30%+ 상승",
      },
    ],
    stakeholders: [
      {
        name: "기존 DowDuPont 주주",
        icon: "📈",
        impact: "positive",
        summary: "3개 독립 주식 동시 보유",
        detail: "DowDuPont 주주들은 Dow·DuPont·Corteva 3개 주식을 세금 없이 수령했습니다. 합산 시총이 통합 대비 30%+ 증가해 장기 보유자에게 큰 이익이 돌아갔습니다.",
        metric: "3개사 합산 시총 +30%+",
      },
      {
        name: "Dow 화학 직원",
        icon: "⚗️",
        impact: "positive",
        summary: "소재 전문 기업으로 집중 투자",
        detail: "분리 후 사이클성 소재 사업에 자원이 집중됐습니다. 독립 스톡옵션 구조로 보상 체계도 개선됐습니다.",
        metric: "Dow 직원 약 3만 7천 명",
      },
      {
        name: "농업 (Corteva) 이해관계자",
        icon: "🌾",
        impact: "positive",
        summary: "농업 순수 플레이어 탄생",
        detail: "Pioneer Seeds 등 세계 최대 종자 포트폴리오를 보유한 독립 농업기업이 탄생했습니다. 농업 전문 R&D 투자 집중이 가능해졌습니다.",
        metric: "Corteva 연매출 약 $160억",
      },
      {
        name: "채권자",
        icon: "🏦",
        impact: "positive",
        summary: "사업 분산으로 신용 리스크 명확화",
        detail: "각 법인이 독립 신용등급을 받아 자금 조달 비용이 최적화됐습니다. 소재/농업 리스크가 분산됐습니다.",
      },
      {
        name: "규제당국 (반독점)",
        icon: "⚖️",
        impact: "neutral",
        summary: "$15억 자산 매각 조건",
        detail: "EU·미국 반독점당국이 합병 조건으로 특정 제초제·소재 사업 매각을 요구했습니다. 조건부 승인으로 합병이 완료됐습니다.",
        metric: "자산 매각 약 $15억",
      },
    ],
    beforeAfter: [
      {
        metric: "합산 시가총액",
        before: "$1,300억 (통합 DowDuPont)",
        after: "$1,700억+ (3개사 합산)",
        change: "+30%",
        isPositive: true,
      },
      {
        metric: "Dow 시총",
        before: "—",
        after: "$400억 (분리 직후)",
        change: "독립 상장",
        isPositive: true,
      },
      {
        metric: "Corteva 시총",
        before: "—",
        after: "$200억",
        change: "독립 상장",
        isPositive: true,
      },
      {
        metric: "연간 비용 시너지",
        before: "$0",
        after: "$30억+ (실현)",
        change: "+$30억",
        isPositive: true,
      },
      {
        metric: "사업 집중도",
        before: "화학·농업·소재 혼재",
        after: "각 1개 핵심 산업",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "합병 발표일 Dow +10.5%, DuPont +9.8%",
      shortTermReturn: "DowDuPont 기간(2017~2019) 합산 +15%",
      longTermReturn: "3개사 분리 후 3년간 합산 +40%",
      contextNote: "S&P Chemical Index 대비 초과 수익률 약 +15%p",
    },
  },

  dealStructure: {
    body: "DowDuPont 3분할은 세 단계로 실행됐다. 1단계: 2015년 12월 합병 발표 + 3분할 청사진 동시 공개. 2단계: 2017년 9월 합병 완료 후 통합 DowDuPont 출범 및 $30억 비용 시너지 실현. 3단계: 2019년 4월 Dow Inc. 분리, 2019년 6월 DuPont·Corteva 동시 분리로 3분할 완성. 모든 분사는 Section 355 면세 구조로 기존 주주에게 세금 없이 배분됐다.",
    preOwnership: {
      nodes: [
        { id: "dow_chemical", label: "Dow Chemical", sub: "소재·포장 화학 전문, NYSE 상장", type: "acquirer" },
        { id: "dupont", label: "DuPont", sub: "특수화학·농업·전자 소재, NYSE 상장", type: "target" },
        { id: "dowdupont_merger", label: "DowDuPont Inc.", sub: "2017년 합병 법인 (세계 최대 화학)", type: "entity" },
      ],
      edges: [
        { from: "dow_chemical", to: "dowdupont_merger", label: "50% 대등 합병" },
        { from: "dupont", to: "dowdupont_merger", label: "50% 대등 합병" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "dow_inc", label: "Dow Inc.", sub: "NYSE: DOW (2019.4), 소재·포장", type: "acquirer" },
        { id: "dupont_new", label: "DuPont de Nemours", sub: "NYSE: DD (2019.6), 특수소재·전자", type: "public" },
        { id: "corteva", label: "Corteva Inc.", sub: "NYSE: CTVA (2019.6), 농업·종자·농약", type: "public" },
      ],
      edges: [
        { from: "dow_inc", to: "dupont_new", label: "독립 분리 (2019.6)" },
        { from: "dow_inc", to: "corteva", label: "독립 분리 (2019.6)" },
      ],
    },
    keyTerms: [
      { label: "합병 발표", value: "2015년 12월 11일 — 3분할 청사진 동시 공개", accent: true },
      { label: "합병 완료", value: "2017년 9월 — 반독점 조건 $15억 자산 매각" },
      { label: "Dow Inc. 분리", value: "2019년 4월 1일 (NYSE: DOW)", accent: true },
      { label: "DuPont + Corteva 분리", value: "2019년 6월 1일 (NYSE: DD, CTVA)", accent: true },
      { label: "분사 구조", value: "Section 355 면세 분사 — 주주 세금 없이 주식 배분" },
      { label: "비용 시너지 (합병 기간)", value: "약 $30억 실현" },
      { label: "3개사 합산 시총 상승", value: "통합 대비 +30%+", accent: true },
    ],
  },

  advisors: {
    body: "역대 최대 규모의 화학 산업 합병-후-분할 구조인 만큼 월스트리트 최상위 자문사들이 각 단계별로 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Dow Chemical 측",
        initials: "DOW",
        bg: "bg-red-600",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 (FA)", roleType: "financial", note: "합병 구조화 및 3분할 전략 자문" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "법률 자문", roleType: "legal", note: "합병 계약 및 분사 구조 법률 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "DuPont 측",
        initials: "DDP",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "합병 밸류에이션 및 분사 구조화 자문" },
          { firm: "Skadden, Arps, Slate, Meagher & Flom", role: "법률 자문", roleType: "legal", note: "합병·분사 법률 및 반독점 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다. 각 분사 단계별 추가 자문사가 있었을 수 있습니다.",
  },

  valuation: {
    body: "DowDuPont의 핵심 밸류에이션 논거는 콘글로머리트 디스카운트의 제거였다. 소재·특수화학·농업은 각기 다른 P/E 멀티플을 받아야 하지만, 하나의 법인 안에서는 '평균 멀티플'만 적용됐다. 3분할로 각 사업이 독립 섹터 멀티플을 받으면서 합산 시총이 30%+ 상승했다.",
    rows: [
      { item: "합병 발표 당시 합산 시총 (Dow+DuPont)", val: "약 $1,300억", note: "2015년 12월 기준", accent: false },
      { item: "DowDuPont 통합 시총 (분사 전)", val: "약 $1,300억", note: "합병 후 통합 기준" },
      { item: "Dow Inc. 분리 후 시총", val: "약 $400억", note: "2019년 4월, 소재 섹터 멀티플 적용", accent: true },
      { item: "DuPont de Nemours 시총", val: "약 $250억", note: "2019년 6월, 특수화학 멀티플" },
      { item: "Corteva 시총", val: "약 $200억", note: "2019년 6월, 농업 순수 플레이어 멀티플", accent: true },
      { item: "3개사 합산 시총", val: "$1,700억+", note: "통합 DowDuPont 대비 +30%+", accent: true },
      { item: "EV/EBITDA (합병 전)", val: "약 10x", note: "화학 섹터 평균 수준" },
    ],
    disclaimer: "시총 수치는 공개 시장 데이터 기반 추정치입니다. 분사 이후 주가 변동에 따라 실제 수치와 다를 수 있습니다.",
  },

  rationale: {
    buyer: {
      title: "Dow & DuPont의 합병-후-3분할 논리",
      initials: "DOW",
      bg: "bg-red-600",
      points: [
        "콘글로머리트 디스카운트 제거 — 소재·특수화학·농업이 각각 독립 섹터 멀티플을 받아 합산 가치 극대화",
        "'합병 → 시너지 → 분사' 시퀀스로 $30억 비용 절감 실현 후 순수 플레이어 3개 탄생",
        "Section 355 면세 분사로 주주에게 세금 없이 3개 주식 배분 — 세금 효율적 구조",
        "각 독립 기업이 해당 산업 전문 경영진·투자자·파트너에게 최적화된 구조로 운영 가능",
        "Andrew Liveris + Ed Breen의 합의 — 두 라이벌 CEO가 '합병보다 분리가 가치 있다'는 공통 비전",
      ],
    },
    seller: {
      title: "각 분사 기업의 독립 논리",
      initials: "DDP",
      bg: "bg-blue-800",
      points: [
        "Dow Inc. — 소재·포장 화학 순수 플레이어로 독립. 사이클성 소재 전문 투자자 직접 대응",
        "DuPont de Nemours — 전자·수처리·건설 특수소재 집중. 기술·고마진 전문 투자자 유치",
        "Corteva — Pioneer 씨앗+농약 세계 1위 농업 기업 독립. 농업 테마 투자자 전용 주식",
        "3개 모두 — 독립 스톡옵션 연계 보상으로 경영진 인센티브 구조 명확화",
        "각 사업별 M&A·파트너십 독립 추진 — 타 사업과의 이해충돌 없이 전략 자유도 극대화",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026-05",
    body: "2019년 6월 Corteva 분사로 DowDuPont 3분할이 완성됐다. 3개사 합산 시총은 통합 상태 대비 30%+ 상승해 주주 가치 창출 측면에서 성공적인 결과를 낳았다. Corteva는 Pioneer 씨앗 포트폴리오를 기반으로 농업 순수 플레이어로서 안정적 성장을 이어갔다. Dow Inc.는 소재·포장 화학 사이클에 따른 변동성을 갖지만 독립 경영 효율화를 달성했다. DuPont은 특수소재·전자 소재 중심으로 재편됐다.",
    overallVerdict: "콘글로머리트 해체의 역대급 성공 사례 — '합병 후 즉시 분리' 전략의 교과서",
    positives: [
      "3개사 합산 시총 $1,700억+ — 통합 대비 +30%+, 콘글로머리트 디스카운트 완전 해소",
      "합병 기간 비용 시너지 $30억 실현 — '합병→시너지→분사' 시퀀스의 이론적 완성",
      "Corteva 농업 순수 플레이어 탄생 — Pioneer 종자 자산 가치 독립적으로 평가",
      "Section 355 면세 분사 — 주주 세금 부담 없이 3개 주식 수령, 세금 효율적 구조",
      "Andrew Liveris + Ed Breen의 합의 — 라이벌 두 CEO의 비전 일치가 이례적 전략의 성공 열쇠",
    ],
    risks: [
      "화학 업황 사이클 리스크 — Dow Inc.는 폴리에틸렌 가격 사이클에 노출, 경기 변동성 지속",
      "DuPont 사업 재편 과정 — 특수소재 포트폴리오 추가 정리·인수 필요성 지속",
      "반독점 조건 $15억 자산 매각 — 전략 자산 일부 이탈로 경쟁력 소폭 약화",
      "Corteva 농업 변동성 — 기후 변화·농산물 가격 변동에 의한 실적 불확실성",
    ],
    editorNote: "DowDuPont 3분할은 M&A 역사에서 가장 혁신적인 전략 중 하나다. '합병 자체가 목적'이 아닌 '합병 후 분리가 목적'인 전례 없는 구조는, GE 3분할과 함께 콘글로머리트 해체의 양대 교과서로 자리 잡았다. 핵심 교훈: 규모보다 집중이, 다각화보다 깊이가 장기 주주 가치를 만든다. 그리고 때로는 '합병'과 '분리'를 동시에 설계하는 것이 어느 하나만 하는 것보다 더 큰 가치를 창출할 수 있다.",
  },

  tombstone: {
    acquirerInitials: "DOW",
    acquirerBg: "bg-red-600",
    targetInitials: "DDP",
    targetBg: "bg-blue-800",
    acquirerName: "Dow Inc. (분리 후)",
    targetName: "DowDuPont Inc. (통합 법인)",
    dealTitle: "화학·소재·농업 3분할 분사 / Three-Way Chemical Breakup",
    dealSize: "합산 시총 $1,700억+",
    dealSizeUSD: "USD 170B+ combined post-split",
    evEbitda: "약 10x EBITDA",
    closeDate: "Jun 2019",
  },

  sources: [
    { id: 1, text: "Dow Chemical & DuPont Joint Press Release — Merger of Equals Announcement (December 11, 2015)" },
    { id: 2, text: "DowDuPont Press Release — Merger Completion and Three-Way Separation Plan (September 2017)" },
    { id: 3, text: "Dow Inc. Form 10 Registration Statement (2019)", url: "https://www.sec.gov" },
    { id: 4, text: "Corteva Inc. Form 10 Registration Statement (2019)", url: "https://www.sec.gov" },
    { id: 5, text: "Wall Street Journal — Dow, DuPont Merger Approved After $1.5B Asset Sales (August 2017)" },
    { id: 6, text: "Bloomberg — DowDuPont Completes Breakup Into Three Companies (June 2019)" },
    { id: 7, text: "Financial Times — DowDuPont Split Validates Merge-to-Break Strategy (April 2019)" },
    { id: 8, text: "Harvard Business Review — The Logic of DowDuPont's Three-Way Split (2019)" },
  ],

  seo: {
    title: "DowDuPont 3분할 완전 분석 — GE와 쌍벽, 화학 공룡의 콘글로머리트 해체",
    description: "DowDuPont 3분할 완전 분석. '합병-후-즉시-3분할' 전략, 콘글로머리트 디스카운트 해소, Dow·DuPont·Corteva 분사 과정, Section 355 면세 구조까지 심층 해부.",
    keywords: [
      "DowDuPont 3분할",
      "다우 듀폰 분사",
      "Corteva 분사",
      "화학 콘글로머리트 해체",
      "합병 후 분할 전략",
      "Section 355 면세 분사",
      "Andrew Liveris Ed Breen",
      "콘글로머리트 디스카운트",
    ],
  },

  concepts: [
    {
      term: "콘글로머리트 디스카운트",
      href: "/deal-101/conglomerate-discount",
      description: "다각화된 복합기업이 각 사업부 합산 가치보다 낮게 평가받는 현상. DowDuPont 3분할의 핵심 해소 대상.",
    },
    {
      term: "합병-후-분할 전략 (Merge-to-Split)",
      href: "/deal-101/merge-to-split",
      description: "합병으로 비용 시너지를 먼저 실현한 뒤 즉시 분할해 각 사업의 최적 밸류에이션을 획득하는 혁신적 M&A 전략.",
    },
    {
      term: "Section 355 면세 분사",
      href: "/deal-101/section-355-spinoff",
      description: "미국 세법 Section 355에 따른 면세 분사 구조. 주주에게 세금 없이 자회사 주식을 배분할 수 있는 구조.",
    },
  ],

  faq: [
    {
      q: "DowDuPont이 합병 발표와 동시에 3분할을 공약한 이유는?",
      a: "투자자 신뢰 확보와 밸류에이션 논리 때문입니다. 단순 합병만 발표했다면 투자자들은 '또 하나의 비효율적 콘글로머리트 탄생'으로 봤을 것입니다. 합병과 동시에 3분할 청사진을 제시함으로써 투자자들은 즉시 3개 순수 플레이어의 독립 가치를 계산해 주가에 반영할 수 있었습니다. 실제로 합병 발표 당일 Dow +10.5%, DuPont +9.8%를 기록한 것은 시장이 이 '합병 후 분리' 전략에 즉각 긍정적으로 반응했음을 보여줍니다.",
    },
    {
      q: "왜 2분할이 아닌 3분할을 선택했나?",
      a: "소재·특수화학·농업이 서로 다른 밸류에이션 논리를 갖기 때문입니다. Dow의 폴리에틸렌/포장 소재는 사이클성 소재 멀티플, DuPont의 전자·수처리 특수소재는 중간 성장 멀티플, Corteva의 Pioneer 씨앗 사업은 농업 순수 플레이어 멀티플을 각각 받아야 했습니다. 2분할을 했다면 어느 조합에도 농업(Corteva)과 화학 소재가 혼재돼 콘글로머리트 디스카운트가 지속됐을 것입니다. 3분할이 각 사업에 최적 멀티플을 주는 유일한 방법이었습니다.",
    },
    {
      q: "Section 355 면세 분사가 왜 중요한가?",
      a: "세금 없이 주주에게 자회사 주식을 배분할 수 있는 핵심 구조이기 때문입니다. 만약 면세 분사 없이 자산을 현금으로 매각했다면, 수십억 달러의 법인세 부담이 발생해 주주에게 돌아갈 가치가 줄어들었을 것입니다. Section 355는 일정 요건(사업 목적 존재, 지분 80%+ 배분, 5년 이내 인수 없음 등)을 충족할 경우 모회사와 주주 모두 세금 없이 분사를 실행할 수 있는 미국 세법상 특례입니다. DowDuPont은 이 구조를 모든 3개 분사에 적용해 세금 효율성을 극대화했습니다.",
    },
    {
      q: "DowDuPont 3분할과 GE 3분할의 차이는?",
      a: "두 사례 모두 콘글로머리트 디스카운트 해소를 목적으로 하지만, 맥락이 다릅니다. GE는 부실·손실로 인한 '수동적 구조조정'이었고(회생 목적), DowDuPont은 처음부터 분리를 계획한 '능동적 구조조정'이었습니다(가치 극대화 목적). GE는 수십 년에 걸친 과도한 다각화의 후유증에서 탈출하는 과정이었고, DowDuPont은 '합병 후 즉시 분리'라는 혁신적 전략을 처음부터 설계한 경우입니다. 두 사례를 함께 보면 콘글로머리트 해체의 능동적·수동적 두 가지 유형을 모두 이해할 수 있습니다.",
    },
  ],
};

export default deal;
