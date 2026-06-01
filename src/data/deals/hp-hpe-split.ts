/**
 * HP × HP Inc + HPE 양사 분할
 * 76년 실리콘밸리 원조의 자발적 분리 — 2014년 발표, 2015년 완성
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "hp-hpe-split",
  title: "76년 HP는 왜 둘로 쪼개졌나 — 멕 휘트먼의 $550억 빅테크 자발적 분할",
  subtitle: "1939년 실리콘밸리 차고 창업 → 2015년 HP Inc + HPE 양사 분할 · 컨슈머 vs 엔터프라이즈 분리 · 빅테크 콘글로머리트 해체의 시작",
  category: "restructuring",
  industry: "Technology / Enterprise IT / Personal Computing",
  country: "미국",
  announcedAt: "2014-10-06",
  closedAt: "2015-11-01",
  announcedDisplay: "2014년 10월",
  closedDisplay: "2015년 11월",
  readingMinutes: 12,
  tags: [
    "HP",
    "Hewlett-Packard",
    "HP Inc",
    "HPE",
    "Hewlett Packard Enterprise",
    "spinoff",
    "Meg Whitman",
    "Section 355",
    "conglomerate",
    "restructuring",
  ],
  excerpt:
    "1939년 빌 휴렛과 데이브 패커드가 팰로앨토 차고에서 창업한 HP는 76년간 실리콘밸리의 원형이었다. 2014년 10월 6일 CEO 멕 휘트먼은 $550억 규모의 HP를 PC·프린터 사업의 HP Inc와 엔터프라이즈 인프라 사업의 Hewlett Packard Enterprise(HPE)로 분할한다고 발표했다. 2015년 11월 1일 양사가 NYSE에서 따로 거래되기 시작하며 빅테크 자발적 분할의 새 시대가 열렸고, 이후 GE·DowDuPont·3M 분할의 템플릿이 됐다.",

  acquirer: { initials: "HP", bg: "bg-blue-700", label: "HP Co. (분할 전 통합 법인)" },
  target: { initials: "2CO", bg: "bg-green-600", label: "HP Inc + HPE (분할 후 양사)" },

  background: [
    "HP는 1939년 스탠퍼드 졸업생 빌 휴렛(Bill Hewlett)과 데이브 패커드(Dave Packard)가 팰로앨토의 차고에서 창업한 회사다. 음향 발진기로 시작해 계측기, 미니컴퓨터, 잉크젯·레이저 프린터, PC로 확장하며 20세기 후반 실리콘밸리의 원형을 만들었다. 2002년 칼리 피오리나(Carly Fiorina) CEO 시절 $250억 규모로 컴팩(Compaq)을 합병해 PC 1위 자리를 노렸지만, 합병의 가치 창출은 줄곧 논쟁거리였다.",
    "2010~2013년 HP는 연속 위기에 직면했다. 2010년 마크 허드(Mark Hurd) CEO가 경비 처리 스캔들로 사임했고, 후임 레오 아포테커(Léo Apotheker)는 2011년 영국 소프트웨어 기업 오토노미(Autonomy)를 $111억에 인수했다가 회계 부정 논란으로 $88억을 감손 처리하는 참사를 빚었다. 같은 해 아포테커는 PC 사업 매각·스핀오프 가능성까지 공개 거론하다 11개월 만에 해임됐다. 이베이(eBay) 전 CEO 멕 휘트먼(Meg Whitman)이 2011년 9월 취임했다.",
    "휘트먼은 취임 후 3년간 HP를 안정화했다. PC 사업 분사 검토를 철회하고 사업부 통합 유지를 선언, $88억 오토노미 감손 처리와 함께 4만 명 인력 감축, 부채 축소를 단행했다. 행동주의 투자자 Relational Investors(랠프 휘트워스 Ralph Whitworth)가 2011년 1.2% 지분을 매입한 뒤 비공개 면담을 통해 분리 논의를 제기했다는 후일담도 있다. 그러나 휘트먼은 처음에는 통합 유지를 고수했다.",
    "2014년 10월 6일 휘트먼은 입장을 180도 전환했다. HP를 두 개의 독립 상장 기업으로 분할한다고 발표했다 — PC·프린터를 묶은 [HP Inc](Personal Systems + Printing)와 엔터프라이즈 서버·스토리지·네트워킹·서비스를 담는 Hewlett Packard Enterprise(HPE). 양 사업의 운영 모델·자본 배분·M&A 전략이 근본적으로 다르고, 하나의 법인 안에서는 전략적 타협이 불가피하다는 게 논거였다. 컴퓨터 사업 통합 $250억을 들인 컴팩 합병 이후 12년 만의 정면 반전이었다.",
    "2015년 11월 1일 분할이 공식 마무리됐다. 미국 세법 Section 355에 의한 면세 분사 구조로, 기존 HP 주주는 보유 주식 1주당 신설 HPE 1주를 추가로 배분받고 기존 주식은 HP Inc로 재명명됐다. 디온 와이슬러(Dion Weisler)가 HP Inc CEO, 휘트먼이 HPE CEO로 각각 취임했다. 분할 1일차 합산 시총은 HP Inc 약 $250억 + HPE 약 $280억 = $530억으로 분할 전 $550억과 거의 동일했다 — 즉각적 가치 창출은 없었지만 가치 파괴도 없는 무난한 출발이었다.",
  ],

  dealSummary: {
    dealValueDisplay: "양사 분할 (Section 355 면세 분사)",
    acquirerName: "HP Co. (분할 전 법인)",
    targetName: "HP Inc (HPQ) + Hewlett Packard Enterprise (HPE)",
    announcedDisplay: "2014년 10월",
    closedDisplay: "2015년 11월",
    country: "미국",
  },

  executiveSummary: [
    "1939년 팰로앨토 차고 창업 → 2015년 76년 만에 양사 분할 — 빅테크 자발적 분리 1호 사례",
    "HP Inc(HPQ): PC + 프린터 컨슈머 사업 / HPE: 서버·스토리지·네트워킹·서비스 엔터프라이즈 사업",
    "분할 전 통합 매출 $1,100억 · 시총 $550억 · 직원 30만 명 규모의 메가 분할",
    "Section 355 면세 분사 구조 — HP 주주 1주당 HPE 1주 배분, 기존 주식은 HP Inc로 재명명",
    "CEO 분담: 멕 휘트먼 → HPE / 디온 와이슬러 → HP Inc",
    "분할 1일차 합산 시총 약 $530억 — 분할 전과 거의 동일, 즉각적 프리미엄 없음",
    "2016~17년 HPE의 연쇄 스핀머지: Enterprise Services → DXC, Software → Micro Focus($88억)",
    "11년 후 회고: 전략적 집중 달성, 그러나 합산 가치 창출은 시장 평균 이하 — GE·DowDuPont·3M 분할의 템플릿",
  ],

  industryOverview: {
    body: "2014년 글로벌 IT 산업은 두 갈래의 다른 길을 걷고 있었다. 컨슈머 PC·프린터 시장은 모바일·태블릿 침투로 구조적 둔화기에 들어섰고, 가격 경쟁과 단기 제품 사이클이 지배했다. 반면 엔터프라이즈 인프라 시장은 클라우드 전환·하이브리드 IT·소프트웨어 정의(SDx) 흐름으로 재편되며 장기 계약·서비스 매출·M&A 기반 성장이 핵심이었다. 두 사업은 자본 배분 논리(전자는 자본 환원·자사주 매입, 후자는 M&A·R&D 재투자), 영업 사이클, 투자자 베이스가 완전히 달랐고, 하나의 법인 안에서 모두 충족하기 어려웠다.",
    metrics: [
      { label: "분할 전 통합 매출 (FY2014)", value: "약 $1,114억", sub: "Personal Systems + Printing + Enterprise" },
      { label: "분할 전 통합 시총", value: "약 $550억", sub: "2014년 10월 발표 시점" },
      { label: "분할 전 직원 수", value: "약 30만 명", sub: "전 세계 글로벌 인력" },
      { label: "분할 1일차 합산 시총", value: "약 $530억", sub: "HP Inc $250억 + HPE $280억" },
    ],
    subBody:
      "HP 분할은 빅테크 콘글로머리트의 자발적 해체 1호 사례로 기록됐다. 이전의 IBM Kyndryl 분사(2021), GE 3분할(2024), 3M Solventum 분사(2024), Honeywell 3분할(2025)의 직접적 템플릿이 됐고, 반대 진영의 Dell-EMC 통합(2016)과 대비되는 양극단의 전략으로 자주 인용된다.",
    players: [
      { name: "HP Inc (NYSE: HPQ)", role: "PC + 프린터 컨슈머 — 분할 후 기존 법인 재명명, 디온 와이슬러 CEO" },
      { name: "Hewlett Packard Enterprise (NYSE: HPE)", role: "서버·스토리지·네트워킹·서비스 — 분할 후 신설, 멕 휘트먼 CEO" },
      { name: "Relational Investors (Ralph Whitworth)", role: "행동주의 투자자, 2011년 1.2% 지분 매입 후 비공개로 분리 제기" },
      { name: "Dell-EMC (반대 진영)", role: "2016년 $670억 통합 합병으로 HP 분할의 대척점에 선 빅테크 전략" },
      { name: "IBM", role: "2021년 Kyndryl(인프라 서비스) 분사로 HP 모델 답습" },
    ],
  },

  companyOverview: {
    targetName: "Hewlett-Packard Company (분할 전 통합 법인)",
    body: "HP는 1939년 빌 휴렛과 데이브 패커드가 팰로앨토의 차고에서 $538의 자본금으로 창업한 회사다. 음향 발진기에서 출발해 계측기, 미니컴퓨터, 잉크젯·레이저 프린터, PC로 확장했고 2002년 컴팩 합병($250억)으로 PC 시장 1위로 올라섰다. 그러나 2010~2013년 CEO 연쇄 교체, 오토노미 인수 참사($88억 감손), 컨슈머·엔터프라이즈 사업 간 자본 배분 갈등을 겪었다. 분할 전 직원 30만 명, 통합 매출 $1,114억 규모의 IT 콘글로머리트였다.",
    metrics: [
      { label: "창업", value: "1939년", sub: "팰로앨토 차고 — 실리콘밸리 원조" },
      { label: "컴팩 합병", value: "2002년, $250억", sub: "칼리 피오리나 CEO 주도, PC 1위 등극" },
      { label: "오토노미 감손", value: "$88억 (2012)", sub: "$111억 인수 → 회계 부정 논란" },
      { label: "분할 전 직원", value: "약 30만 명", sub: "분할 후 HP Inc 약 5만 / HPE 약 25만" },
      { label: "분할 발표", value: "2014년 10월 6일", sub: "휘트먼 CEO, 양사 분할 청사진 공개" },
    ],
    financials: [
      { year: "FY2010", revenue: 126033, cogs: 95852, grossProfit: 30181, sga: 12585, operatingIncome: 11479, ebitda: 16800 },
      { year: "FY2011", revenue: 127245, cogs: 97418, grossProfit: 29827, sga: 12889, operatingIncome: 9677, ebitda: 14900 },
      { year: "FY2012", revenue: 120357, cogs: 92385, grossProfit: 27972, sga: 13500, operatingIncome: -11057, ebitda: -7000 },
      { year: "FY2013", revenue: 112298, cogs: 85248, grossProfit: 27050, sga: 13267, operatingIncome: 7131, ebitda: 12300 },
      { year: "FY2014", revenue: 111454, cogs: 84839, grossProfit: 26615, sga: 13353, operatingIncome: 7185, ebitda: 12400 },
    ],
    financialsNote:
      "단위: USD 백만(M). HP 10-K 공시 기준. FY2012 영업손실은 오토노미 $88억 + EDS $80억 감손 반영. EBITDA는 일부 추정.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "Personal Systems (PC) — HP Inc 전신", pct: 31, color: "bg-blue-600", amt: "약 $345억" },
      { name: "Printing — HP Inc 전신", pct: 21, color: "bg-sky-500", amt: "약 $234억" },
      { name: "Enterprise Group (서버·스토리지·네트워킹) — HPE 전신", pct: 25, color: "bg-green-700", amt: "약 $279억" },
      { name: "Enterprise Services — HPE 전신 (DXC 행)", pct: 20, color: "bg-emerald-600", amt: "약 $223억" },
      { name: "Software + Financial Services — HPE 전신", pct: 3, color: "bg-teal-500", amt: "약 $33억" },
    ],
    revenueNote: "FY2014 기준. 분할 후 HP Inc ≈ Personal Systems + Printing, HPE ≈ Enterprise Group + Services + Software + Financial Services.",
  },

  restructuringOverview: {
    body: "HP의 양사 분할은 빅테크 콘글로머리트가 처음으로 '강제된 반독점 분할'이 아닌 '자발적 전략 분할'을 선택한 사례입니다. 컨슈머 PC와 엔터프라이즈 인프라가 왜 같은 지붕 아래 있을 수 없었는지, 그리고 그 결정이 11년 후 어떻게 평가받는지 — GE·DowDuPont 사례와 함께 콘글로머리트 해체 3대 교과서를 구성합니다.",
    trigger: "컨슈머 PC와 엔터프라이즈 인프라의 전략적 양립 불가능 + 행동주의 압박",
    triggerDetail:
      "PC·프린터 사업은 가격 경쟁·짧은 제품 사이클·자본 환원형 비즈니스인 반면, 엔터프라이즈 인프라는 장기 계약·서비스 매출·M&A 기반 성장형 비즈니스입니다. 한 법인 안에서 두 사업이 자본을 두고 경쟁하면 양쪽 모두 최적이 아닌 타협을 강요받습니다. 2011년 Relational Investors(랠프 휘트워스)가 1.2% 지분을 매입한 뒤 휘트먼에게 비공개로 분리를 제기했고, 2010~2013년의 CEO 연쇄 교체·오토노미 감손($88억)·모바일 침투로 인한 PC 시장 둔화가 결단을 가속화했습니다.",
    method: "tax-free-spinoff",
    methodLabel: "Section 355 면세 양사 분사 (1:1 비율)",
    whyThisMethod:
      "현금 매각은 법인세 부담(수십억 달러)과 전략 자산 통제 상실을 의미했습니다. 자회사 IPO는 모회사가 지분을 보유해 콘글로머리트 디스카운트가 일부 유지되는 문제가 있었습니다. Section 355 면세 분사는 기존 주주에게 신설 법인 주식을 직접 배분하므로 세금 없이 깔끔한 분리가 가능했고, 두 회사 모두 즉시 독립 멀티플을 받을 수 있었습니다. 1:1 비율(HP 1주 → HP Inc 1주 + HPE 1주)은 주주 입장에서 가장 단순하고 직관적인 구조였습니다.",
    methodVsAlternatives: [
      {
        method: "PC 사업 현금 매각 (2011년 아포테커 안)",
        reason:
          "PC 사업 매각가 $100억대로는 컴팩 합병($250억) 손실이 명확해지고, 매각 차익에 대한 법인세가 수십억 달러에 달했습니다. 또한 매수자(레노버 등)에게 전략 자산을 넘기는 위험이 있었습니다. 휘트먼은 취임 직후 이 안을 철회했습니다.",
      },
      {
        method: "PC·프린터 자회사 IPO (Carve-out IPO)",
        reason:
          "모회사가 80% 이상 지분을 보유하면 콘글로머리트 디스카운트가 부분적으로 유지됩니다. 또한 IPO 시점·가격을 시장에 의존해야 하고, 분사 후에도 자본·인사 의사결정이 복잡해집니다.",
      },
      {
        method: "통합 유지 + 사업부 분권화",
        reason:
          "휘트먼이 2011~2013년 시도했던 방식이지만, 한 법인 안에서 두 사업이 자본·M&A·인재를 두고 경쟁하는 구조적 갈등을 해결하지 못했습니다. 행동주의 압박도 통합 유지로는 해소되지 않았습니다.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "콘글로머리트 디스카운트 (Conglomerate Discount)",
        explanation:
          "다각화된 복합기업은 각 사업부 합산 가치보다 낮게 평가받는 현상입니다. 학술 연구는 평균 13~15% 할인을 제시하며, 자본 시장이 발달해 투자자가 직접 포트폴리오를 구성할 수 있는 시대에는 다각화 프리미엄이 사라집니다.",
        howApplied:
          "HP는 PC(저PER 사이클성)와 엔터프라이즈(중간PER 안정성)을 묶은 채 통합 멀티플로 거래됐습니다. 분할 직후 합산 시총이 거의 동일($530억 vs $550억)했다는 점에서 디스카운트가 '없었다'는 평가도 있지만, 11년 후 합산 시총이 여전히 $550억대에 머물러 분할 자체가 가치 창출보다는 '추가 하락 방지'에 가까웠다는 비판도 존재합니다.",
      },
      {
        concept: "Section 355 면세 분사",
        explanation:
          "미국 세법 §355는 일정 요건(사업 목적, 5년 이상 사업 영위, 80% 이상 배분, 5년 이내 인수 금지 등)을 충족하면 모회사와 주주 모두 세금 없이 자회사 분사를 실행할 수 있는 특례입니다. 빅테크·산업재 콘글로머리트 해체의 표준 도구입니다.",
        howApplied:
          "HP는 양사 모두 80% 이상 사업을 5년 이상 영위했고 사업 목적이 명확해 §355 요건을 충족했습니다. 1:1 비율(HP 1주 → HPQ 1주 + HPE 1주) 배분으로 주주 세금 부담이 없었고, 이 구조는 이후 GE·DowDuPont·3M·Honeywell의 분할 템플릿이 됐습니다.",
      },
      {
        concept: "Spin-Merge (Reverse Morris Trust)",
        explanation:
          "분사된 자회사를 즉시 다른 기업과 합병하는 구조입니다. Reverse Morris Trust 요건(분사 모회사 주주가 합병 후 회사의 50%+ 보유)을 충족하면 면세 처리됩니다. 분사한 사업부를 '제 짝'에게 보내 가치를 극대화하는 방식입니다.",
        howApplied:
          "HPE는 2016년 5월 Enterprise Services 사업을 CSC와 스핀머지해 DXC Technology를 출범시켰고, 2016년 9월 Software 사업을 Micro Focus와 $88억 규모로 스핀머지했습니다. 단, Micro Focus는 통합 실패로 2018년까지 약 $30억의 영업권 감손을 기록했고 결국 2023년 OpenText에 매각되며 '스핀머지의 실패 사례'로 기록됐습니다.",
      },
      {
        concept: "자본 배분 독립성 (Capital Allocation Independence)",
        explanation:
          "다각화 기업 안에서 사업부들은 본사 CFO가 결정하는 자본 배분에 종속됩니다. 분사하면 각 회사가 자체 자본 구조·배당 정책·M&A 전략을 갖게 돼 사업 특성에 최적화된 의사결정이 가능합니다.",
        howApplied:
          "HP Inc은 분할 후 자사주 매입·배당 중심의 '자본 환원' 정책을 채택했고, HPE는 Aruba($30억, 2015), Nimble Storage($10억, 2017), Cray($13억, 2019), Juniper($140억 발표 2024) 등 공격적 M&A 노선을 택했습니다. 한 법인에서는 양쪽 모두 어려운 전략이었습니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2014년 10월 6일",
        action: "HP 양사 분할 공식 발표",
        detail:
          "휘트먼 CEO가 HP를 HP Inc(PC·프린터)와 HPE(엔터프라이즈)로 분할한다고 발표. 18개월 내 분할 완료 목표 제시. CEO 분담안과 함께 발표.",
        financialNote: "발표 당일 주가 +4.7% (35.41 → 37.07 USD)",
      },
      {
        phase: "Phase 2",
        date: "2015년 상반기",
        action: "양사 운영 분리 및 IT·재무·인사 시스템 디커플링",
        detail:
          "30만 명 직원을 양사로 배정, IT 시스템·SAP·재무 보고 체계를 별도로 구축. 양사가 각각 별도의 이사회·경영진을 구성. 약 1억 달러의 분리 비용이 발생했다고 보고됨.",
        financialNote: "분리 비용 약 $10억 (One-time separation cost)",
      },
      {
        phase: "Phase 3",
        date: "2015년 11월 1일",
        action: "Section 355 면세 분사 공식 완료 — 양사 NYSE 별도 거래",
        detail:
          "기존 HP 주주에게 보유 주식 1주당 HPE 1주 배분, 기존 주식은 HP Inc로 재명명. HP Inc(HPQ)과 HPE 양사가 NYSE에서 별도 종목으로 거래 개시. 디온 와이슬러 HP Inc CEO, 멕 휘트먼 HPE CEO 공식 취임.",
        financialNote: "분할 1일차 합산 시총 약 $530억 (HP Inc $250억 + HPE $280억)",
      },
      {
        phase: "Phase 4",
        date: "2016년 5월~9월",
        action: "HPE 연쇄 스핀머지 발표 — Enterprise Services + Software",
        detail:
          "HPE가 Enterprise Services 사업을 CSC와 스핀머지해 DXC Technology 출범 계획 발표(2016.5). 9월에는 Software 사업을 Micro Focus와 $88억 규모 스핀머지 발표. HPE는 핵심 인프라(서버·스토리지·네트워킹) 중심으로 슬림화 추진.",
        financialNote: "HPE Software → Micro Focus 거래 규모 $88억",
      },
      {
        phase: "Phase 5",
        date: "2017년 4월 / 9월",
        action: "DXC Technology 출범 (4월) + Micro Focus 스핀머지 완료 (9월)",
        detail:
          "DXC Technology가 NYSE에 상장(2017.4). Micro Focus의 HPE Software 통합은 9월 완료. HPE는 인프라 순수 플레이어로 변신 완료. 그러나 Micro Focus는 통합 실패로 2018년까지 ~$30억 감손, 2023년 OpenText에 매각되는 결말.",
        financialNote: "DXC 출범 시 시총 약 $100억, Micro Focus는 2018년부터 가치 급락",
      },
    ],
    stakeholders: [
      {
        name: "기존 HP 주주",
        icon: "📈",
        impact: "mixed",
        summary: "양사 주식 동시 보유, 그러나 합산 가치는 정체",
        detail:
          "분할 1일차에 HP Inc + HPE 양사 주식을 세금 없이 수령했지만, 11년 후 합산 시총이 분할 전과 거의 동일($550억대)한 수준에 머물러 S&P500 평균(~3배 상승) 대비 큰 폭으로 underperform했습니다. '분할 자체는 가치 창출에 실패했다'는 평가의 근거.",
        metric: "11년 후 합산 시총 ≈ 분할 전 수준",
      },
      {
        name: "HP Inc 임직원 (PC·프린터)",
        icon: "💻",
        impact: "positive",
        summary: "자본 환원 중심 안정적 PC·프린터 비즈니스",
        detail:
          "PC 시장 성숙기 진입 후에도 잉크 구독·프린터 소모품 매출로 안정적 현금 흐름을 유지했고, 적극적 자사주 매입·배당으로 주주에게 환원했습니다. 디온 와이슬러 → 엔리케 로레스(Enrique Lores) CEO 승계도 매끄러웠습니다.",
        metric: "HP Inc 약 5만 명 → 2024년 약 5만 8천 명",
      },
      {
        name: "HPE 임직원 (엔터프라이즈)",
        icon: "🖥️",
        impact: "mixed",
        summary: "스핀머지·구조조정으로 인력 대폭 축소",
        detail:
          "Enterprise Services → DXC 이동(약 10만 명), Software → Micro Focus 이동, 자체 구조조정으로 분할 시점 25만 명에서 2024년 약 6만 명으로 축소됐습니다. 핵심 인력은 잔존했지만 대규모 이직·해고가 동반됐습니다.",
        metric: "HPE 직원: 25만 명(2015) → 약 6만 명(2024)",
      },
      {
        name: "DXC Technology 출신 직원",
        icon: "🔧",
        impact: "negative",
        summary: "스핀머지 후 지속적 구조조정",
        detail:
          "HPE Enterprise Services에서 분리돼 CSC와 합쳐진 DXC는 클라우드 전환기 IT 서비스 업황 악화로 지속적 인력 감축·실적 부진을 겪었습니다. 출범 시 시총 $100억대에서 2024년 $40억대로 하락.",
      },
      {
        name: "Micro Focus 인수자 (영국 SW 기업)",
        icon: "📉",
        impact: "negative",
        summary: "$88억 스핀머지의 통합 실패",
        detail:
          "HPE Software를 인수한 Micro Focus는 통합 시너지 실현 실패로 2018년 ~$30억 영업권 감손, 주가 70% 폭락. 결국 2023년 OpenText에 매각되며 빅테크 스핀머지의 실패 사례로 기록됐습니다.",
        metric: "2018년 ~$30억 영업권 감손",
      },
      {
        name: "행동주의 투자자 (Relational Investors)",
        icon: "⚔️",
        impact: "positive",
        summary: "비공개 압박 성공 — 분할 실현",
        detail:
          "2011년 1.2% 지분 매입 후 휘트먼에게 비공개로 분리 제기. 공개 캠페인 없이도 결과를 만들어낸 '조용한 행동주의(Quiet Activism)' 모범 사례로 기록됩니다.",
      },
    ],
    beforeAfter: [
      {
        metric: "합산 시가총액",
        before: "$550억 (2014.10)",
        after: "$530억 (분할 1일차) / $550억대 (2024)",
        change: "거의 정체",
        isPositive: false,
      },
      {
        metric: "HP Inc 시총",
        before: "—",
        after: "$250억 → $300억 (2024)",
        change: "안정적 +20%",
        isPositive: true,
      },
      {
        metric: "HPE 시총",
        before: "—",
        after: "$280억 → $250억 (2024)",
        change: "약 -10%",
        isPositive: false,
      },
      {
        metric: "통합 매출 → 양사 합산 매출",
        before: "$1,114억 (FY2014)",
        after: "약 $810억 (HP Inc $530억 + HPE $280억, FY2024)",
        change: "-27% (스핀머지로 매출 이탈)",
        isPositive: false,
      },
      {
        metric: "총 직원 수",
        before: "약 30만 명",
        after: "약 11만 명 (HP Inc 5.8만 + HPE 6만)",
        change: "-19만 명 (DXC·Micro Focus 이동 포함)",
        isPositive: false,
      },
      {
        metric: "전략 집중도",
        before: "PC+프린터+엔터프라이즈 혼재",
        after: "각 1개 핵심 도메인",
        change: "순수 플레이어화 달성",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "발표 당일 +4.7%",
      shortTermReturn: "분할 후 6개월 합산 -10% (당시 IT 업황 둔화)",
      longTermReturn: "11년 후 합산 시총 거의 정체 (S&P500 대비 -200%p+ underperform)",
      contextNote: "주가 측면에서는 '분할이 가치 창출보다 추가 하락 방지에 가까웠다'는 평가. GE 분할(+150%) 대비 분명한 underperform.",
    },
  },

  dealStructure: {
    body:
      "HP는 Section 355 면세 분사 구조로 양사 분할을 실행했다. 기존 HP 법인이 PC·프린터 사업만 보유한 채 HP Inc로 재명명되고, 엔터프라이즈 사업이 신설 법인 HPE로 분리됐다. 주주 입장에서는 1:1 비율로 양사 주식을 동시에 보유하게 됐다 — HP 1주 → HP Inc 1주(기존 종목 코드 HPQ 유지) + HPE 1주(신규 NYSE 상장).",
    preOwnership: {
      nodes: [
        { id: "hp_co", label: "Hewlett-Packard Company", sub: "NYSE: HPQ — 통합 IT 콘글로머리트", type: "acquirer" },
        { id: "personal_systems", label: "Personal Systems", sub: "PC 사업부 (HP Inc 전신)", type: "target" },
        { id: "printing", label: "Printing", sub: "프린터 사업부 (HP Inc 전신)", type: "target" },
        { id: "enterprise_group", label: "Enterprise Group", sub: "서버·스토리지·네트워킹 (HPE 전신)", type: "target" },
        { id: "enterprise_services", label: "Enterprise Services", sub: "IT 서비스 (HPE 전신, 추후 DXC 행)", type: "target" },
        { id: "hp_software", label: "HP Software", sub: "소프트웨어 (HPE 전신, 추후 Micro Focus 행)", type: "target" },
      ],
      edges: [
        { from: "hp_co", to: "personal_systems", label: "100%" },
        { from: "hp_co", to: "printing", label: "100%" },
        { from: "hp_co", to: "enterprise_group", label: "100%" },
        { from: "hp_co", to: "enterprise_services", label: "100%" },
        { from: "hp_co", to: "hp_software", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hp_inc", label: "HP Inc", sub: "NYSE: HPQ (재명명) · 디온 와이슬러 CEO", type: "public" },
        { id: "hpe", label: "Hewlett Packard Enterprise", sub: "NYSE: HPE (신규) · 멕 휘트먼 CEO", type: "public" },
        { id: "shareholders", label: "기존 HP 주주", sub: "1:1 비율로 양사 주식 동시 보유", type: "public" },
      ],
      edges: [
        { from: "shareholders", to: "hp_inc", label: "1주당 HPQ 1주 (기존 유지)" },
        { from: "shareholders", to: "hpe", label: "1주당 HPE 1주 (신규 배분)" },
      ],
    },
    keyTerms: [
      { label: "분할 발표", value: "2014년 10월 6일 — 휘트먼 CEO 양사 분할 공식화", accent: true },
      { label: "분할 완료", value: "2015년 11월 1일 — 양사 NYSE 별도 거래 개시", accent: true },
      { label: "분사 구조", value: "Section 355 면세 분사 — 주주 세금 부담 없음", accent: false },
      { label: "배분 비율", value: "1:1 (HP 1주 → HP Inc 1주 + HPE 1주)", accent: true },
      { label: "법인 처리", value: "기존 HP 법인 → HP Inc로 재명명, HPE는 신규 법인", accent: false },
      { label: "CEO 분담", value: "디온 와이슬러 → HP Inc / 멕 휘트먼 → HPE", accent: false },
      { label: "후속 스핀머지 1", value: "HPE Enterprise Services → DXC Technology (2017.4)", accent: false },
      { label: "후속 스핀머지 2", value: "HPE Software → Micro Focus, $88억 (2017.9)", accent: false },
      { label: "분할 1일차 합산 시총", value: "약 $530억 (분할 전 $550억과 거의 동일)", accent: true },
    ],
  },

  advisors: {
    body: "HP의 양사 분할은 빅테크 자발적 분리의 1호 사례인 만큼 월스트리트 최상위 자문사들이 참여했다. 행동주의 측에서는 Relational Investors가 공개 캠페인 없이 비공개 압박을 통해 분리 결정에 영향을 미쳤다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "HP (분할 주체)",
        initials: "HP",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (Lead FA)", roleType: "financial", note: "Stuart Cassidy 주도, 양사 분할 구조화 총괄" },
          { firm: "Lazard", role: "재무 자문 (Co-FA)", roleType: "financial", note: "공동 재무 자문, 밸류에이션 분석" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "법률 자문 (Lead)", roleType: "legal", note: "분사 구조 법률 총괄, Section 355 적용" },
          { firm: "Skadden, Arps, Slate, Meagher & Flom", role: "법률 자문 (Co-Counsel)", roleType: "legal", note: "세무·증권법 자문 보조" },
        ],
      },
      {
        side: "target",
        sideLabel: "행동주의 측 (분할 추진 압박)",
        initials: "RI",
        bg: "bg-orange-600",
        advisors: [
          { firm: "Relational Investors", role: "행동주의 투자자", roleType: "other", note: "Ralph Whitworth 주도, 2011년 1.2% 지분 매입 후 비공개로 분리 제기" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다. 후속 스핀머지(DXC·Micro Focus) 자문사는 별도로 진행됐습니다.",
  },

  valuation: {
    body:
      "HP 양사 분할의 핵심 밸류에이션 논거는 컨슈머 PC(저PER 사이클성)와 엔터프라이즈 인프라(중간PER 안정성)의 멀티플 분리였다. 그러나 분할 1일차 합산 시총이 분할 전과 거의 동일($530억 vs $550억)했다는 점은 시장이 이미 두 사업의 가치를 합리적으로 반영하고 있었음을 시사한다. 11년 후 합산 시총이 여전히 $550억대에 머문다는 사실은 분할 자체보다 후속 실행이 가치 창출의 핵심임을 보여준다.",
    rows: [
      { item: "분할 발표 전 HP 시총", val: "약 $550억", note: "2014년 10월 6일 기준", accent: false },
      { item: "HP Inc 분할 1일차 시총", val: "약 $250억", note: "2015.11.1, PC·프린터 사업", accent: false },
      { item: "HPE 분할 1일차 시총", val: "약 $280억", note: "2015.11.1, 엔터프라이즈 사업", accent: false },
      { item: "분할 1일차 합산 시총", val: "약 $530억", note: "분할 전 $550억과 거의 동일", accent: true },
      { item: "HP Inc EV/EBITDA (분할 시점)", val: "약 5~6x", note: "PC 사이클성 멀티플", accent: false },
      { item: "HPE EV/EBITDA (분할 시점)", val: "약 7~8x", note: "엔터프라이즈 인프라 멀티플", accent: false },
      { item: "HP Inc 시총 (2024)", val: "약 $300억", note: "안정적 +20%, 자사주 매입 효과", accent: false },
      { item: "HPE 시총 (2024)", val: "약 $250억", note: "스핀머지·M&A 후 약 -10%", accent: false },
      { item: "2024년 합산 시총", val: "약 $550억", note: "11년 후 분할 전과 거의 동일 — 가치 정체", accent: true },
    ],
    disclaimer: "시총 수치는 공개 시장 데이터 기반 추정치입니다. 후속 스핀머지(DXC·Micro Focus)로 이전된 매출·인력은 양사 합산에서 제외됩니다.",
  },

  rationale: {
    buyer: {
      title: "HP 양사 분할의 논리 (멕 휘트먼)",
      initials: "HP",
      bg: "bg-blue-700",
      points: [
        "컨슈머 vs 엔터프라이즈 운영 모델 분리 — PC·프린터의 짧은 제품 사이클과 엔터프라이즈의 장기 계약 사이클이 양립 불가능",
        "자본 배분 독립성 — HP Inc는 자본 환원(자사주·배당) 중심, HPE는 M&A·R&D 재투자 중심으로 명확히 분리",
        "각 사업 전용 투자자 베이스 접근 — PC 안정성을 원하는 인컴 투자자와 엔터프라이즈 성장을 원하는 테크 투자자를 분리 대응",
        "M&A 자유도 — HPE의 Aruba·Nimble·Cray·Juniper 인수는 통합 HP 안에서는 컨슈머 사업 자본 갈등으로 어려운 결정",
        "행동주의 압박 해소 — Relational Investors의 비공개 분리 압박을 정면 수용해 적대적 캠페인을 사전 차단",
        "오토노미 참사 후 신뢰 회복 — '한 법인 안에서 모든 것을 다 한다'는 모델의 실패를 인정하고 새 출발",
      ],
    },
    seller: {
      title: "양사 독립의 논리",
      initials: "2CO",
      bg: "bg-green-600",
      points: [
        "HP Inc — PC·프린터 순수 플레이어로서 잉크 구독·소모품 매출 기반 안정적 현금 흐름 모델 확립, 자사주 매입으로 EPS 성장",
        "HPE — 엔터프라이즈 인프라 순수 플레이어로서 클라우드·AI·하이브리드 IT 트렌드에 집중 투자, 공격적 M&A 추진 가능",
        "독립 스톡옵션 — 각 회사 경영진이 자사 주가에 직접 연동된 인센티브를 받아 사업 집중도 제고",
        "이해충돌 해소 — HPE가 클라우드 사업자(AWS·Azure)와 협력 시 HP Inc PC 사업과의 이해충돌 없이 자유로운 파트너십 가능",
        "후속 구조조정 자유도 — HPE는 분할 후 1년 내 Enterprise Services·Software 스핀머지로 추가 슬림화 추진 (통합 HP 안에서는 불가능했던 속도)",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body:
      "분할 11년이 지난 2026년 시점에서 HP 양사 분할에 대한 평가는 양면적이다. 전략적 집중 측면에서는 성공 — HP Inc는 PC·프린터 순수 플레이어로 안정적 자본 환원 모델을 확립했고, HPE는 Aruba·Nimble·Cray·Juniper(2024년 발표, 2025년 규제 심사 중) 등 공격적 M&A로 엔터프라이즈 인프라 순수 플레이어로 재편됐다. 그러나 주주가치 창출 측면에서는 실망스럽다 — 11년 후 양사 합산 시총이 $550억대로 분할 전과 거의 동일하다. S&P500이 같은 기간 약 3배 상승한 점을 감안하면 분명한 underperform이다. 후속 스핀머지 중 Micro Focus($88억)는 통합 실패로 2023년 OpenText에 매각되며 빅테크 스핀머지의 대표적 실패 사례로 기록됐고, DXC Technology도 출범 시 시총 $100억대에서 2024년 $40억대로 하락했다. 결론: '분할 결정 자체는 맞았지만, 후속 실행(스핀머지)이 가치를 파괴했다'는 평가가 지배적이다.",
    overallVerdict: "전략적 집중은 성공, 가치 창출은 실패 — 빅테크 자발적 분할의 양면성을 보여준 사례",
    positives: [
      "빅테크 자발적 분할 1호 사례 — IBM Kyndryl(2021), GE 3분할(2024), 3M Solventum(2024), Honeywell 3분할(2025)의 직접 템플릿",
      "Section 355 면세 + 1:1 비율 분배의 표준화 — 후속 빅테크 분할의 구조적 모범",
      "HP Inc 안정적 자본 환원 모델 확립 — 잉크 구독·자사주 매입으로 EPS 성장 견인",
      "HPE 공격적 M&A 노선 가능 — Juniper($140억, 2024 발표) 등 통합 HP 시절에는 불가능했던 전략",
      "행동주의 비공개 압박 해소 — Relational Investors의 '조용한 행동주의' 모범 사례",
      "각 회사 경영진의 명확한 사업 집중 — 한 법인 안의 자본·인재·M&A 갈등 해소",
    ],
    risks: [
      "주주가치 창출 실패 — 11년 후 합산 시총 정체, S&P500 대비 200%p+ underperform",
      "Micro Focus 통합 실패 — $88억 스핀머지가 2023년 OpenText 매각으로 끝남, 빅테크 스핀머지 실패의 교과서",
      "DXC Technology 가치 하락 — 출범 $100억대 → 2024년 $40억대, 엔터프라이즈 IT 서비스 업황 악화 직격탄",
      "HPE 클라우드 전환 부진 — AWS·Azure·GCP의 공세에 시장 점유율 잠식, Juniper 인수도 규제 심사 중",
      "HP Inc PC 시장 구조적 둔화 — 모바일·AI PC 전환 속도 대응에 한계",
      "분할 비용 $10억+ — 시스템 분리·인사 재배치 등 일회성 비용 부담",
    ],
    editorNote:
      "HP 양사 분할은 빅테크 자발적 분리의 1호 사례이자 '분할 자체로는 가치를 창출할 수 없다'는 교훈의 사례다. 콘글로머리트 디스카운트가 명확한 산업재(GE·DowDuPont·3M)와 달리, HP는 분할 시점에 이미 시장이 두 사업의 가치를 합리적으로 반영하고 있었기에 분할로 인한 즉각적 프리미엄이 없었다. 11년 후 합산 시총 정체는 후속 실행(스핀머지)의 실패에 기인한다. 핵심 교훈: ①분할은 도구이지 만병통치약이 아니다 — 후속 실행이 가치 창출의 핵심이다. ②스핀머지(Reverse Morris Trust)는 인수자 측 통합 역량이 받쳐주지 않으면 양쪽 모두 가치를 파괴한다(Micro Focus 사례). ③빅테크 자발적 분할이라는 새로운 카테고리를 개척한 역사적 의미는 인정되나, 주주가치 창출의 성공 사례로 보기는 어렵다. 후속 GE·3M·Honeywell 분할이 HP의 실수에서 배워야 할 교훈이 명확하다.",
  },

  tombstone: {
    acquirerInitials: "HP",
    acquirerBg: "bg-blue-700",
    targetInitials: "2CO",
    targetBg: "bg-green-600",
    acquirerName: "Hewlett-Packard Company (분할 전)",
    targetName: "HP Inc + Hewlett Packard Enterprise",
    dealTitle: "Section 355 면세 양사 분할",
    dealSize: "분할 전 시총 $550억 / 분할 1일차 합산 $530억",
    dealSizeUSD: "USD 55B pre-split / USD 53B Day 1 combined",
    evEbitda: "HP Inc 5~6x / HPE 7~8x (분할 시점)",
    closeDate: "Nov 2015",
  },

  sources: [
    {
      id: 1,
      text: "HP Press Release — Hewlett-Packard Announces Plan to Separate Into Two New Industry-Leading Public Companies (October 6, 2014)",
      url: "https://www.hp.com/us-en/newsroom",
    },
    {
      id: 2,
      text: "Hewlett Packard Enterprise Form 10 Registration Statement (2015)",
      url: "https://www.sec.gov",
    },
    {
      id: 3,
      text: "HP Inc Form 10-K FY2015 — Post-Separation Annual Report",
      url: "https://www.sec.gov",
    },
    {
      id: 4,
      text: "The Wall Street Journal — H-P to Split Into Two Public Companies (October 6, 2014)",
    },
    {
      id: 5,
      text: "Financial Times — Meg Whitman Reverses Course With HP Split (October 6, 2014)",
    },
    {
      id: 6,
      text: "Reuters — HP to split into two companies, cuts another 5,000 jobs (October 6, 2014)",
    },
    {
      id: 7,
      text: "Bloomberg — HP Splits in Two as Whitman Reverses Hewlett-Packard Strategy (October 2014)",
    },
    {
      id: 8,
      text: "Reuters — HPE to spin off, merge enterprise services unit with CSC to form DXC (May 2016)",
    },
    {
      id: 9,
      text: "Financial Times — Micro Focus to buy HPE software arm for $8.8bn (September 2016)",
    },
    {
      id: 10,
      text: "Crain's New York Business — Relational Investors quietly pushed HP toward breakup (2014 retrospective)",
    },
  ],

  seo: {
    title: "HP × HP Inc + HPE 양사 분할 완전 분석 — 76년 빅테크 자발적 해체",
    description:
      "2015년 HP 양사 분할 심층 분석. 멕 휘트먼의 $550억 분할 결정, Section 355 면세 분사 구조, HP Inc + HPE 양사 출범, 후속 DXC·Micro Focus 스핀머지의 성과까지 11년 회고.",
    keywords: [
      "HP 분할",
      "HPE 분사",
      "HP Inc HPE",
      "멕 휘트먼",
      "Meg Whitman",
      "Hewlett Packard Enterprise",
      "Section 355 면세 분사",
      "빅테크 분할",
      "스핀머지",
      "DXC Technology",
      "Micro Focus",
      "Relational Investors",
      "Ralph Whitworth",
    ],
  },

  concepts: [
    {
      term: "Section 355 면세 분사",
      href: "/deal-101/section-355-spinoff",
      description: "미국 세법 §355에 따른 면세 분사 구조. HP·GE·DowDuPont·3M 등 빅테크·산업재 자발적 분할의 표준 도구.",
    },
    {
      term: "Reverse Morris Trust (스핀머지)",
      href: "/deal-101/reverse-morris-trust",
      description: "분사된 자회사를 즉시 다른 기업과 면세 합병하는 구조. HPE의 DXC·Micro Focus 스핀머지가 대표 사례.",
    },
    {
      term: "Sum-of-Parts 밸류에이션",
      href: "/deal-101/sum-of-parts",
      description: "복합기업의 각 사업부를 독립적으로 평가해 합산하는 방법. HP 분할의 핵심 논거였으나 실제로는 프리미엄이 거의 없었음.",
    },
    {
      term: "Serial Spin-Merge",
      description: "분사 후 1~2년 내 추가 사업부를 연쇄적으로 스핀머지하는 패턴. HPE의 Enterprise Services → DXC, Software → Micro Focus가 표본.",
    },
    {
      term: "콘글로머리트 디스카운트",
      href: "/deal-101/conglomerate-discount",
      description: "다각화 기업이 합산 가치보다 낮게 평가받는 현상. HP는 분할 시점에 디스카운트가 이미 작았다는 평가.",
    },
    {
      term: "M&A vs 스핀오프 결정 트리",
      description: "사업부에 대해 ①현금 매각 ②자회사 IPO ③면세 분사 ④스핀머지 중 무엇을 선택할지의 의사결정 프레임. HP는 ③+④ 조합 선택.",
    },
    {
      term: "DXC·Micro Focus 사후 효과",
      description: "분사 후 스핀머지의 성패가 모회사 분할 평가까지 좌우하는 사례. HP 분할의 가치 평가가 후속 실행에 좌우된 대표 케이스.",
    },
    {
      term: "Quiet Activism (조용한 행동주의)",
      description: "공개 캠페인 없이 비공개 면담을 통해 경영진을 압박하는 전략. Relational Investors의 HP 분할 추진이 대표 사례.",
    },
  ],

  faq: [
    {
      q: "HP는 왜 양사 분할을 결정했나요?",
      a: "컨슈머 PC·프린터와 엔터프라이즈 인프라가 근본적으로 다른 비즈니스이기 때문입니다. PC는 짧은 제품 사이클·가격 경쟁·자본 환원형이고, 엔터프라이즈는 장기 계약·서비스 매출·M&A 기반 성장형입니다. 한 법인 안에서 자본·인재·M&A 우선순위를 두고 경쟁하면 양쪽 모두 전략적 타협을 강요받습니다. 멕 휘트먼은 취임 초 통합 유지를 고수했지만, 2014년 행동주의 압박(Relational Investors)과 PC 시장 둔화·오토노미 감손($88억) 후유증을 종합 판단해 분할로 입장을 전환했습니다.",
    },
    {
      q: "분할 1일차에 합산 시총이 분할 전과 거의 동일했던 이유는?",
      a: "시장이 이미 두 사업의 가치를 합리적으로 반영하고 있었기 때문입니다. 분할 발표 후 1년간 시장은 양사의 분할 후 가치를 미리 계산해 주가에 반영했고, 콘글로머리트 디스카운트가 GE(13~15%)나 DowDuPont(30%)만큼 크지 않았습니다. 또한 빅테크 분할이 사상 첫 사례여서 시장 참여자들도 어떤 멀티플을 적용해야 할지 명확하지 않았습니다. 결과적으로 분할 자체로는 즉각적 프리미엄이 거의 없었고, 후속 실행(스핀머지·M&A)이 11년간의 주가 흐름을 결정했습니다.",
    },
    {
      q: "HPE의 DXC·Micro Focus 스핀머지는 왜 실패했나요?",
      a: "두 거래 모두 인수자 측의 통합 역량 부족이 핵심 원인입니다. DXC Technology(HPE Enterprise Services + CSC)는 출범 직후부터 클라우드 전환으로 IT 서비스 업황이 급속 악화돼 지속적 인력 감축·실적 부진을 겪었고, 시총이 출범 시 $100억대에서 2024년 $40억대로 하락했습니다. Micro Focus($88억 HPE Software 인수)는 통합 시너지 실현 실패로 2018년 ~$30억 영업권 감손, 주가 70% 폭락 후 결국 2023년 OpenText에 매각됐습니다. 두 사례 모두 '스핀머지는 인수자가 통합 역량을 갖춰야 성공한다'는 교훈을 남겼습니다.",
    },
    {
      q: "HP 분할과 GE 3분할의 가장 큰 차이는 무엇인가요?",
      a: "①분할 시점의 콘글로머리트 디스카운트 크기 — GE는 2018년 89% 폭락 후 분할로 명확한 디스카운트가 있었지만 HP는 시장이 이미 가치를 반영하고 있었습니다. ②후속 실행 성패 — GE는 HealthCare·Vernova 분사 후 각자 안정적 가치를 만들었지만 HP는 DXC·Micro Focus 스핀머지에서 실패했습니다. ③평가 — GE는 분할 전 대비 2.5배 이상의 합산 시총을 만든 성공 사례로, HP는 11년 후 합산 시총이 정체된 underperform 사례로 분류됩니다. 두 사례는 '분할 결정과 후속 실행은 별개의 가치 창출 요인'임을 보여줍니다.",
    },
    {
      q: "Relational Investors는 어떤 역할을 했나요?",
      a: "2011년 HP 지분 1.2%(약 $10억)를 매입한 뒤 랠프 휘트워스가 멕 휘트먼·이사회 멤버들과 비공개 면담을 통해 분리를 제기했습니다. Carl Icahn·Bill Ackman 같은 공개 캠페인형 행동주의와 달리, Relational은 언론·공시 없이 결과를 만들어낸 '조용한 행동주의(Quiet Activism)' 사례로 기록됩니다. 휘트먼은 당시에는 분리를 거부했지만 3년 후 결국 분할로 입장을 전환했고, 사후에 Relational의 영향이 있었음을 인정했습니다. ValueAct·Trian 같은 후속 빅테크 행동주의(Salesforce, Disney 등)의 모델이 됐습니다.",
    },
    {
      q: "HP 분할은 결국 성공인가요 실패인가요?",
      a: "이중적 평가가 지배적입니다. ①전략적 집중 측면에서는 성공 — HP Inc는 PC·프린터 안정적 자본 환원 모델을, HPE는 엔터프라이즈 인프라 공격적 M&A 노선을 각각 확립했습니다. 또한 빅테크 자발적 분할 1호 사례로 IBM·GE·3M·Honeywell 분할의 직접 템플릿이 됐습니다. ②주주가치 창출 측면에서는 실패 — 11년 후 합산 시총이 분할 전과 거의 동일($550억대)해 S&P500 대비 200%p+ underperform했습니다. 결론: '분할 결정 자체는 맞았지만 후속 실행(스핀머지)이 가치를 파괴했다'는 평가가 지배적이며, '분할은 도구일 뿐 만병통치약이 아니다'라는 교훈의 사례로 기록됩니다.",
    },
  ],
};

export default deal;
