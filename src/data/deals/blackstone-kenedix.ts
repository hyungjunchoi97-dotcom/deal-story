import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "blackstone-kenedix",
  title: "블랙스톤은 왜 일본 부동산에 2.5조를 베팅했나 — 케네딕스 TOB 완전 해부",
  subtitle: "APAC 역대 최대 부동산 딜 · EV/EBITDA 19.7배 · 일본 부동산 플랫폼 구축 전략",
  category: "ma",
  industry: "부동산",
  country: "일본",
  announcedAt: "2022-12-01",
  closedAt: "2023-10-12",
  announcedDisplay: "2022년 12월",
  closedDisplay: "2023년 10월",
  readingMinutes: 8,
  tags: ["블랙스톤", "케네딕스", "일본", "부동산", "PE", "TOB", "자산운용"],
  excerpt:
    "블랙스톤이 일본 최대 독립 부동산 자산운용사 케네딕스를 공개매수(TOB)로 완전 인수. 약 2.5조 원(USD 1.8B) 규모의 아시아 태평양 역대 최대 단일 부동산 딜.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "BX", bg: "bg-gray-900 dark:bg-gray-100", label: "Blackstone" },
  target:   { initials: "KDX", bg: "bg-blue-600", label: "Kenedix" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "2010년대 초반부터 일본은 글로벌 대형 사모펀드(PE)들의 아시아 전략 핵심 시장으로 부상했다. 마이너스 금리 정책과 엔화 약세가 맞물리며 도쿄 오피스 캡레이트는 3.0~3.5% 수준을 유지했고, 물류 부문은 전자상거래 확장에 힘입어 연 8~10%의 수요 성장세를 기록했다.",
    "블랙스톤은 이미 2017~2022년 사이 일본에서 복수의 물류 포트폴리오를 매입하며 운용 경험을 축적해왔다. 그러나 개별 자산 매입 방식으로는 성장 속도에 한계가 있었다. 케네딕스는 AUM 2.1조 엔, 27개 펀드를 운용하는 일본 최대 독립 자산운용사로, 현지 딜소싱 네트워크와 로컬 LP와의 신뢰 관계를 모두 보유하고 있었다.",
    "블랙스톤의 선택은 단순 자산 매입이 아닌 플랫폼 인수였다. 케네딕스의 운용 팀과 인프라를 통째로 흡수함으로써 일본에서의 딜소싱, 펀드 운용, LP 관리 역량을 즉각적으로 내재화하는 전략이었다.",
    "타이밍 측면에서는 엔화가 달러 대비 역사적 저점(2022년 USD/JPY 150 돌파)에 근접하며 외국인 투자자 관점의 매입 비용이 크게 낮아졌다. 블랙스톤은 이 환율 기회를 활용해 공개매수 가격을 주당 1,100엔으로 제시했다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "약 2.5조 원 (USD 1.8B)",
    acquirerName: "Blackstone",
    targetName: "케네딕스",
    announcedDisplay: "2022년 12월",
    closedDisplay: "2023년 10월",
    country: "일본",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "블랙스톤이 일본 최대 독립 부동산 자산운용사 케네딕스를 공개매수(TOB)로 완전 인수. 주당 1,100엔, 프리미엄 44%.",
    "딜 규모 약 2.5조 원(USD 1.8B). 블랙스톤의 아시아 태평양 단일 부동산 딜 역대 최대.",
    "케네딕스 AUM 2.1조 엔, 27개 펀드 운용 플랫폼을 통째로 내재화하는 전략적 인수.",
    "인수 후 물류, 주거 중심 포트폴리오 재편 및 일본을 아시아 부동산 전략의 거점으로 공식화.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "일본 부동산 자산운용 시장은 J-REIT 제도 도입(2001년) 이후 급속히 성장했다. 2023년 기준 J-REIT 시가총액은 약 17조 엔으로 아시아 최대 규모이며, 비상장 PE 부동산 펀드를 포함한 기관투자자 대상 운용 자산은 50조 엔을 초과하는 것으로 추정된다.",
    metrics: [
      { label: "J-REIT 시총", value: "17조 엔", sub: "2023년 기준" },
      { label: "도쿄 오피스 캡레이트", value: "3.0~3.5%", sub: "도심 A급" },
      { label: "물류 수요 성장", value: "연 8~10%", sub: "전자상거래 효과" },
      { label: "외국인 PE 투자", value: "USD 8.2B", sub: "2022년 일본 유입" },
    ],
    subBody:
      "섹터별로는 물류와 주거(멀티패밀리)에 기관 자금이 집중되고 있으며, 오피스는 재택근무 확산으로 수요 전망이 엇갈린다. 헬스케어 부동산(노인 주거, 병원)은 초고령화 인구 구조를 감안할 때 장기 성장 섹터로 꼽힌다.",
    players: [
      { name: "미쓰이 부동산 / 미쓰비시 지쇼", role: "전통 종합 디벨로퍼" },
      { name: "GLP", role: "물류 특화 글로벌 플랫폼" },
      { name: "블랙스톤", role: "외국계 PE 최대 규모" },
      { name: "CBRE IM / JP모건 AM", role: "글로벌 부동산 운용사" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "케네딕스",
    body: "케네딕스(Kenedix, Inc.)는 1997년 설립된 일본 최대 독립 부동산 자산운용사다. 도쿄증권거래소 프라임 시장에 상장했으며, 오피스, 물류, 주거, 헬스케어 4개 섹터에 걸쳐 기관 투자자 자금을 운용하는 플랫폼을 구축했다. 운용 구조의 핵심은 개방형 플랫폼으로, 국내외 연기금, 보험사, 사모펀드 등 다양한 LP 베이스를 확보하고 있다.",
    metrics: [
      { label: "AUM", value: "2.1조 엔", sub: "2022년 기준" },
      { label: "운용 펀드 수", value: "27개", sub: "4개 섹터" },
      { label: "임직원", value: "약 500명", sub: "도쿄 본사" },
      { label: "설립", value: "1997년", sub: "도쿄 증권거래소 상장" },
      { label: "주요 LP", value: "연기금, 보험사", sub: "국내외 기관투자자" },
      { label: "비상장 전환", value: "2023년 10월", sub: "TOB 완료 후" },
    ],
    aumBreakdown: [
      { name: "물류", pct: 38, color: "bg-blue-500" },
      { name: "오피스", pct: 27, color: "bg-violet-500" },
      { name: "주거", pct: 22, color: "bg-emerald-500" },
      { name: "헬스케어", pct: 13, color: "bg-amber-500" },
    ],
    revenueBreakdown: [
      { name: "물류 운용", pct: 35, amt: "¥11.3B", color: "bg-blue-500" },
      { name: "오피스 운용", pct: 30, amt: "¥9.7B",  color: "bg-violet-500" },
      { name: "주거 운용", pct: 22, amt: "¥7.1B",  color: "bg-emerald-500" },
      { name: "헬스케어 운용", pct: 13, amt: "¥4.2B",  color: "bg-amber-500" },
    ],
    revenueNote: "매출액 ¥32.4B 기준 추정치. 운용 보수(관리 수수료) 위주 구성으로 안정적 수익 구조.",
    financials: [
      { year: "FY2019", revenue: 22.1, cogs: 9.8,  grossProfit: 12.3, sga: 4.5, operatingIncome: 7.8,  ebitda: 10.2 },
      { year: "FY2020", revenue: 24.3, cogs: 10.6, grossProfit: 13.7, sga: 4.8, operatingIncome: 8.9,  ebitda: 11.5 },
      { year: "FY2021", revenue: 28.7, cogs: 12.4, grossProfit: 16.3, sga: 5.8, operatingIncome: 10.5, ebitda: 13.8 },
      { year: "FY2022", revenue: 32.4, cogs: 13.9, grossProfit: 18.5, sga: 6.7, operatingIncome: 11.8, ebitda: 15.2 },
    ],
    financialsNote: "단위: 10억 엔 (¥B)  |  일본 회계기준  |  출처: Kenedix Annual Report",
    financialsCurrency: "¥",
    financialsUnit: "B",
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "블랙스톤은 도쿄증권거래소 프라임 시장 상장사인 케네딕스에 대해 공개매수(TOB)를 실시했다. 매수 희망 가격은 주당 1,100엔으로, TOB 개시 전 60거래일 가중평균 주가 대비 약 44% 프리미엄이었다. TOB 성립 후 케네딕스는 상장폐지되어 블랙스톤의 100% 완전 자회사로 편입됐다.",
    preOwnership: {
      nodes: [
        { id: "public", label: "공개 주주", sub: "TSE 프라임 상장, 분산 주주", type: "public" },
        { id: "kenedix", label: "케네딕스", sub: "상장 독립 자산운용사", type: "target" },
        { id: "funds", label: "27개 펀드", sub: "오피스, 물류, 주거, 헬스케어", type: "fund" },
      ],
      edges: [
        { from: "public", to: "kenedix", label: "100% 지분 보유" },
        { from: "kenedix", to: "funds", label: "운용 책임" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bx", label: "Blackstone", sub: "글로벌 사모펀드 (BREP IX)", type: "acquirer" },
        { id: "kenedix", label: "케네딕스", sub: "비상장 전환, 완전 자회사", type: "target" },
        { id: "funds", label: "27개 펀드", sub: "물류, 주거 중심 재편", type: "fund" },
      ],
      edges: [
        { from: "bx", to: "kenedix", label: "100% 완전 취득 (TOB)" },
        { from: "kenedix", to: "funds", label: "운용 지속" },
      ],
    },
    keyTerms: [
      { label: "거래 형태", value: "공개매수(TOB)" },
      { label: "매수 가격", value: "주당 1,100엔" },
      { label: "프리미엄", value: "+44%", accent: true },
      { label: "취득 지분", value: "100%" },
      { label: "조달 방법", value: "Blackstone BREP IX" },
      { label: "상장폐지", value: "TOB 성립 후 즉시" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "본 딜에는 양측 자문단이 구성되어 공개매수 구조화, 법적 검토, 가격 적정성 분석을 분담했다. 블랙스톤은 글로벌 IB와 PE 전문 로펌을, 케네딕스는 일본 현지 최상위 기관을 선임했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Blackstone",
        initials: "BX",
        bg: "bg-gray-900",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "공개매수 구조화 및 가격 협상 주도. 블랙스톤 아시아 대형 딜의 반복 파트너로 현지 규제 조율까지 담당.",
          },
          {
            firm: "Kirkland & Ellis",
            role: "법무 자문",
            roleType: "legal",
            note: "글로벌 PE 크로스보더 인수 전문 로펌. 계약 구조화, 진술 및 보증, 규제 대응을 총괄.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Kenedix",
        initials: "KDX",
        bg: "bg-blue-600",
        advisors: [
          {
            firm: "노무라증권",
            role: "재무 자문",
            roleType: "financial",
            note: "일본 최대 증권사로 FA 수행. 이사회에 공정가격 의견서(Fairness Opinion) 제출.",
          },
          {
            firm: "모리하마다&마쓰모토",
            role: "법무 자문",
            roleType: "legal",
            note: "일본 최상위 M&A 로펌. TOB 공시 규제 대응 및 이사회 선관의무 법리 검토 담당.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반 추정치입니다. 실제와 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "블랙스톤이 제시한 공개매수 가격 기준으로 케네딕스의 기업가치를 산출하면 EV/EBITDA 약 13.5~14.5배 수준으로 추정된다. 이는 동일 시기 일본 부동산 자산운용사 거래 평균(10~12배)을 상회하는 수준으로, 케네딕스의 플랫폼 프리미엄이 반영된 것으로 해석된다.",
    rows: [
      { item: "시가총액 (공개매수가 기준)", val: "¥252B", note: "주당 1,100엔 × 229M주" },
      { item: "(+) 순부채",                val: "¥48B",  note: "총부채 - 현금성자산" },
      { item: "기업가치 (EV)",            val: "¥300B", note: "≈ USD 2.1B", accent: true },
      { item: "EBITDA (FY2022)",          val: "¥15.2B",note: "일본 회계기준" },
      { item: "EV / EBITDA",             val: "약 19.7배", note: "플랫폼 프리미엄 반영", accent: true },
    ],
    disclaimer: "주: 순부채 및 발행주식수는 공시 자료 추정치 기반. 실제 수치와 다를 수 있음.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "왜 블랙스톤은 샀는가",
      initials: "BX",
      bg: "bg-gray-900 dark:bg-gray-100",
      points: [
        "현지 딜소싱, LP 네트워크, 운용 인프라를 즉각 내재화. 단순 자산 매입 대비 수년의 시간 단축.",
        "AUM 2.1조 엔 규모 운용 수수료 흐름 확보 (Management Fee + Performance Fee)",
        "엔화 약세 구간의 타이밍을 활용. USD 기준 매입 비용이 역대 최저 수준.",
        "물류, 주거 섹터 리포지셔닝으로 장기 임대 수요 기반 안정적 현금흐름 확보",
        "일본을 아시아 부동산 플랫폼의 거점으로 삼아 지역 확장의 발판 마련",
      ],
    },
    seller: {
      title: "왜 케네딕스는 팔았는가",
      initials: "KDX",
      bg: "bg-blue-600",
      points: [
        "독립 상장사로서의 한계. 글로벌 LP 모집과 대형 딜 참여에 자본력 제약이 존재.",
        "주가 저평가 상태 지속 (PBR 0.7~0.9배), 44% 프리미엄은 주주 입장에서 매력적 Exit",
        "블랙스톤의 글로벌 네트워크와 자본력을 통해 AUM 성장 가속화 가능",
        "상장 유지 비용 및 공시 규제 부담에서 해방, 장기 전략에 집중 가능",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "딜 클로징(2023년 10월)으로부터 약 2년 반이 지난 현재 시점에서, 이 인수는 전략적으로 성공적인 딜로 평가된다. 다만 일본 금리 환경 변화라는 예상치 못한 변수가 단기 밸류에이션 압박 요인으로 작용했다.",
    overallVerdict: "전략적 성공",
    positives: [
      "케네딕스 플랫폼을 통해 일본 물류 자산 추가 매입 가속. 2024~2025년 사이 물류 포트폴리오 AUM 약 30% 확대 추정.",
      "현지 딜소싱 내재화로 경쟁 입찰 없이 오프마켓 딜 다수 확보. 블랙스톤 아시아 부동산 수익률 개선에 기여.",
      "케네딕스 운용 인력 이탈 최소화. 운용 연속성 유지로 LP 신뢰 확보 및 펀드 만기 연장 성공.",
      "엔화 약세 구간(2023~2024년 USD/JPY 150~160)에서 USD 기준 자산 매입 비용 추가 절감 효과.",
    ],
    risks: [
      "일본은행(BOJ) 금리 인상(2024년 3월 마이너스 금리 종료, 2025년 추가 인상)으로 캡레이트 상승 압력. 보유 자산의 장부 가치 일부 조정.",
      "오피스 섹터는 재택근무 정착으로 공실률 완전 회복 미달. 오피스 비중 축소 리포지셔닝 진행 중.",
      "EV/EBITDA 약 19.7배의 높은 인수가. 내부 수익률(IRR) 목표 달성을 위한 자산 매각 타이밍 관리 중요.",
    ],
    editorNote:
      "블랙스톤의 케네딕스 인수는 \"플랫폼 프리미엄을 지불하더라도 현지 거점을 내재화\"하는 전략이 유효함을 입증한 사례다. 인수 이후 물류, 주거 자산의 추가 매입이 케네딕스 네트워크를 통해 이루어졌으며, 이는 블랙스톤이 개별 자산 매입 방식으로는 달성하기 어려웠을 속도다. BOJ 금리 인상이라는 역풍이 존재하나, 일본 부동산 시장의 실물 수요는 견조하게 유지되고 있어 중장기 전망은 긍정적이다. 단, EV/EBITDA 약 20배에 달하는 인수가 정당화를 위해서는 AUM의 지속 성장과 성과 보수 실현이 필수적이다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "BX",
    acquirerBg: "bg-gray-900 dark:bg-gray-100",
    targetInitials: "KDX",
    targetBg: "bg-blue-600",
    acquirerName: "Blackstone",
    targetName: "Kenedix",
    dealTitle: "Blackstone's Acquisition of Kenedix, Inc. via Tender Offer",
    dealSize: "약 2.5조 원",
    dealSizeUSD: "approx. USD 1.8 Billion",
    evEbitda: "약 19.7×",
    closeDate: "Oct 2023",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Kenedix, Inc. Annual Report FY2022 (일본 회계기준, 단위: 억 엔)" },
    { id: 2, text: 'Blackstone Press Release, "Blackstone Completes Acquisition of Kenedix", October 2023' },
    { id: 3, text: "東京証券取引所 TOB 공시 (2022.12)" },
    { id: 4, text: 'CBRE Japan Research, "Japan Real Estate Market Outlook 2023"' },
    { id: 5, text: 'JLL, "Asia Pacific Investment Volumes", Q4 2023' },
    { id: 6, text: 'PwC, "Real Estate Asset Management in Japan", 2022' },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "블랙스톤의 일본 케네딕스 2.5조 인수 — 아시아 부동산 패권 전략 완전 해부",
    description:
      "2023년 블랙스톤의 케네딕스 공개매수(TOB) 완전 분석. 딜 규모 2.5조원, EV/EBITDA 19.7배. 딜 배경·구조·자문사·밸류에이션·사후평가까지 한 페이지로 정리.",
    keywords: [
      "블랙스톤 케네딕스 인수",
      "케네딕스 TOB 공개매수",
      "일본 PE 부동산 투자",
      "EV EBITDA 부동산 밸류에이션",
      "인수금융 플랫폼 인수",
      "블랙스톤 일본 전략",
      "케네딕스 AUM 자산운용",
      "사모펀드 부동산 인수 사례",
      "M&A 딜 구조 TOB",
      "일본 J-REIT 시장",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "공개매수 (TOB)",
      href: "/learn/tob",
      description: "상장사 주식을 시장 외에서 일정 가격으로 대량 매수하는 방식. 프리미엄 제시로 주주 동의를 유도.",
    },
    {
      term: "플랫폼 인수",
      href: "/learn/platform-acquisition",
      description: "개별 자산이 아닌 운용 조직·네트워크 전체를 인수해 현지 역량을 내재화하는 PE 전략.",
    },
    {
      term: "EV/EBITDA 멀티플",
      href: "/deal-101/ev-ebitda",
      description: "기업가치(EV)를 EBITDA로 나눈 밸류에이션 배수. 업종 평균 대비 프리미엄·할인 파악에 사용.",
    },
    {
      term: "캡레이트 (Cap Rate)",
      href: "/learn/cap-rate",
      description: "부동산 순운영수익(NOI)을 매입가로 나눈 수익률 지표. 금리와 역방향으로 움직임.",
    },
    {
      term: "운용 보수 (Management Fee)",
      href: "/learn/management-fee",
      description: "자산운용사가 펀드 AUM에 대해 정기적으로 받는 수수료. 케네딕스의 핵심 수익원.",
    },
    {
      term: "LP / GP 구조",
      href: "/learn/lp-gp",
      description: "사모펀드의 투자자(LP)와 운용사(GP) 역할 분리 구조. GP가 딜소싱·운용, LP가 자본 제공.",
    },
  ],

  // ── FAQ (Google People Also Ask 공략) ───────────────────────
  faq: [
    {
      q: "블랙스톤은 왜 케네딕스를 인수했나?",
      a: "블랙스톤은 일본 부동산 시장에서 개별 자산 매입의 한계를 넘어 현지 딜소싱 네트워크·LP 관계·운용 인프라를 즉각 내재화하기 위해 케네딕스를 인수했다. AUM 2.1조 엔, 27개 펀드 플랫폼을 통째로 흡수하는 '플랫폼 인수' 전략이었다.",
    },
    {
      q: "케네딕스 인수 금액은 얼마인가?",
      a: "블랙스톤은 케네딕스 주식을 주당 1,100엔(시장가 대비 44% 프리미엄)에 공개매수했다. 총 거래 규모는 약 2.5조 원(USD 1.8B)으로, 블랙스톤의 아시아 태평양 단일 부동산 딜 역대 최대 규모다.",
    },
    {
      q: "EV/EBITDA 19.7배는 비싼 인수가인가?",
      a: "동일 시기 일본 부동산 자산운용사 M&A 평균 EV/EBITDA가 10~12배 수준임을 감안하면 약 60~70% 프리미엄을 지불한 것이다. 이는 케네딕스의 플랫폼 가치(딜소싱 네트워크, LP 관계, 운용 인프라)에 대한 프리미엄으로 해석된다.",
    },
    {
      q: "TOB(공개매수)와 일반 주식 매수의 차이는?",
      a: "TOB는 불특정 다수 주주에게 일정 기간·일정 가격으로 주식 매도를 공개 요청하는 방식이다. 시장가보다 높은 가격(프리미엄)을 제시해 단기간에 지배 지분을 확보할 수 있다. 케네딕스 딜에서는 블랙스톤이 44% 프리미엄으로 100% 지분을 취득했다.",
    },
    {
      q: "케네딕스 인수 후 블랙스톤의 성과는 어떻게 됐나?",
      a: "2026년 5월 기준 전략적 성공으로 평가된다. 케네딕스 플랫폼을 통해 일본 물류 자산 추가 매입이 가속화됐고, 오프마켓 딜 다수를 확보했다. 다만 BOJ 금리 인상으로 캡레이트 상승 압력이 생겨 단기 장부가치 조정이 발생했다.",
    },
    {
      q: "인수금융(Acquisition Finance) 없이 자기자본만으로 인수했나?",
      a: "블랙스톤은 자사 부동산 펀드 BREP IX(Blackstone Real Estate Partners IX)의 자기자본으로 조달했다. 사모펀드 특성상 펀드 레벨에서 레버리지를 활용하지만, TOB 구조상 인수 주체는 블랙스톤 BREP IX가 직접 공개매수에 참여했다.",
    },
  ],
};

export default deal;
