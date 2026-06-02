/**
 * Capital One × Discover Financial Services, 358억 달러 전(全)주식 합병
 * 2024년 2월 발표 → 2025년 5월 클로징
 * 미국 대형 은행 사상 [자체 결제 네트워크를 보유한 최초의 대형 은행] 탄생
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "capital-one-discover",
  title: "Capital One이 358억 달러로 Discover를 삼킨 이유, [자체 결제 네트워크]를 손에 넣은 미국 최초의 대형 은행",
  subtitle:
    "전(全)주식 358억 달러 · 교환비율 1.0192 · 프리미엄 26.6% · 합산 카드대출 6,400억 달러로 JPMorgan 추월 · VISA·Mastercard·Amex와 어깨를 나란히 한 4번째 결제 네트워크 인수",
  category: "ma",
  industry: "Banking / Credit Cards / Payment Networks",
  country: "미국",
  announcedAt: "2024-02-19",
  closedAt: "2025-05-18",
  announcedDisplay: "2024년 2월 19일 (합병 계약 체결)",
  closedDisplay: "2025년 5월 18일 (클로징 완료)",
  readingMinutes: 16,
  tags: [
    "Capital One",
    "Discover",
    "M&A",
    "Credit Cards",
    "Payment Networks",
    "VISA",
    "Mastercard",
    "American Express",
    "Federal Reserve",
    "OCC",
    "DOJ",
    "Vertical Integration",
    "Subprime",
  ],
  excerpt:
    "2024년 2월 19일 Capital One이 Discover Financial Services를 358억 달러 전주식 합병으로 인수한다고 발표했다. Discover 주식 1주당 Capital One 1.0192주(주당 약 140달러 환산, 26.6% 프리미엄). 거래의 본질은 카드 회사 두 곳의 단순 결합이 아니라 [미국 4대 결제 네트워크(VISA·Mastercard·American Express·Discover) 중 하나를 통째로 사들이는 것]. 미국 대형 은행 중 자체 결제 네트워크를 보유한 최초의 사례. 합병 후 카드대출 잔액은 약 6,400억 달러로 JPMorgan을 추월해 1위. 15개월의 규제 심사 끝에 Federal Reserve와 OCC가 2025년 4월 18일 승인, DOJ는 별도 소송을 제기하지 않으면서 2025년 5월 18일 클로징됐다.",

  acquirer: { initials: "COF", bg: "bg-red-600", label: "Capital One Financial" },
  target: { initials: "DFS", bg: "bg-orange-500", label: "Discover Financial Services" },

  background: [
    "Capital One은 1994년 Signet Banking에서 분사한 카드 전문 은행으로, 데이터 기반 신용평가 모델을 무기로 서브프라임·니어프라임 카드 시장에서 미국 3위까지 올라왔다. 2024년 기준 카드대출 잔액 약 1,500억 달러, 시가총액 약 600억 달러 안팎. 창업자 Richard Fairbank가 30년째 CEO를 맡고 있는 보기 드문 장수 경영자 케이스. 그러나 카드 발급사(issuer)로서의 한계는 분명했다, 모든 거래마다 VISA·Mastercard에 인터체인지 수수료의 일부를 [네트워크 수수료]로 지불해야 했다.",
    "[Discover의 진짜 가치는 카드가 아니라 네트워크.] Discover는 1985년 Sears가 출시한 카드에서 시작해 1986년 자체 결제 네트워크 Discover Network를 구축했다. 미국 결제 시장에서 VISA(약 40%), Mastercard(약 25%), American Express(약 20%) 다음 4번째 네트워크로, 약 5% 점유율. 점유율은 작지만 [미국에서 발급사와 네트워크를 동시에 보유한 회사는 American Express와 Discover 단 두 곳]이라는 희소성이 본 거래의 핵심.",
    "[Capital One의 전략적 논리, 수직 통합.] 합병 후 Capital One은 자사 발급 카드의 결제를 점진적으로 Discover 네트워크로 라우팅할 수 있게 된다. 자체 네트워크로 옮기면 VISA·Mastercard에 내던 네트워크 수수료가 사라지고, 그 자리에 가맹점 인터체인지 수수료가 통째로 들어온다. CEO Fairbank는 발표 콜에서 이 거래를 [\"수십 년에 한 번 있는 기회\"]라 표현했다. 미국 대형 은행 사상 자체 결제 네트워크를 보유한 최초의 사례.",
    "[정치·규제 리스크가 거래의 가장 큰 변수.] 발표 직후부터 Elizabeth Warren 상원의원을 비롯한 진보 진영이 강하게 반대했다. 두 가지 우려, ① 서브프라임 카드 시장에서 Capital One과 Discover의 합산 점유율이 너무 높아진다(경쟁 감소), ② 미국 결제 네트워크가 4개에서 사실상 3개로 줄어든다(수직 통합으로 인한 경쟁 제한). 규제 심사는 Federal Reserve + OCC + DOJ + 주 규제당국(특히 Delaware Bank Commissioner)이 동시 진행. Biden 행정부 말기의 마지막 대형 은행 합병이라는 정치 상징성도 컸다.",
    "2024년 12월 18일 Delaware Bank Commissioner가 첫 승인, 2025년 4월 18일 Federal Reserve와 OCC가 최종 승인을 내렸고 DOJ는 별도 반독점 소송을 제기하지 않았다. OCC는 승인 조건으로 Discover의 기존 규제 위반 사안(가격 분류 오류 등)에 대한 시정 조치를 부과했다. 2025년 5월 18일 합병이 클로징되면서 Capital One National Association은 자산 약 6,378억 달러로 미국 8위 예금취급기관이 됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 358억 달러 (전(全)주식)",
    acquirerName: "Capital One Financial Corporation",
    targetName: "Discover Financial Services",
    announcedDisplay: "2024년 2월 19일",
    closedDisplay: "2025년 5월 18일",
    country: "USA",
  },

  executiveSummary: [
    "[미국 카드 산업 사상 최대 합병] 2024년 2월 19일 Capital One이 Discover를 358억 달러 전주식 합병으로 인수. Discover 1주당 Capital One 1.0192주, 발표 직전 종가 대비 [26.6% 프리미엄], 환산 인수가 약 140달러/주",
    "[자체 결제 네트워크 보유 최초의 미국 대형 은행] Discover는 VISA·Mastercard·American Express와 함께 미국 4대 결제 네트워크 중 하나. Capital One은 이 거래로 [미국 대형 은행 중 자체 결제 네트워크를 보유한 최초의 회사]가 됨",
    "[합산 카드대출 6,400억 달러, JPMorgan 추월 1위] 합병 후 미국 1위 카드 발급사. 합산 자산 약 6,378억 달러로 미국 8위 예금취급기관",
    "[15개월 규제 마라톤] 2024.12 Delaware Bank Commissioner 승인 → 2025.04.18 Federal Reserve·OCC 최종 승인 → DOJ 별도 소송 미제기 → 2025.05.18 클로징",
    "[정치 반대 돌파] Elizabeth Warren 상원의원 등 진보 진영이 \"서브프라임 카드 시장 집중 + 결제 네트워크 4→3 축소\" 명분으로 강력 반대했으나 OCC가 시정 조치 조건부 승인으로 통과",
    "[지분 구조] 클로징 후 기존 Capital One 주주 약 60%, 기존 Discover 주주 약 40% 보유, Richard Fairbank가 합병 회사 CEO 유임",
    "[시너지 가이던스] 연간 운영 시너지 약 15억 달러 + 네트워크 시너지 약 12억 달러, 통합 비용 약 27억~28억 달러로 가이드 (실제로는 초과 지출 중)",
  ],

  industryOverview: {
    body: "미국 결제 네트워크 시장은 4개 사업자가 사실상 독점하는 과점 구조다. VISA가 거래 건수 기준 약 40%, Mastercard 약 25%, American Express 약 20%, Discover 약 5%. VISA와 Mastercard는 [open-loop] 네트워크로 다수 발급사·가맹점을 연결하는 4-party 모델, American Express와 Discover는 [closed-loop]로 발급과 네트워크를 동시에 보유한 3-party 모델. closed-loop의 장점은 거래 전 과정(발급 → 네트워크 → 매입)에서 수수료를 전부 가져갈 수 있다는 점. American Express가 가맹점 수수료를 1.6~2.5%로 가장 높게 받을 수 있는 이유.",
    metrics: [
      { label: "VISA 거래 점유율", value: "약 40%", sub: "미국 결제 거래량 기준" },
      { label: "Mastercard 거래 점유율", value: "약 25%", sub: "미국 결제 거래량 기준" },
      { label: "American Express 점유율", value: "약 20%", sub: "거래액 기준 (건수는 더 낮음)" },
      { label: "Discover 거래 점유율", value: "약 5%", sub: "본 거래 핵심 자산" },
    ],
    subBody:
      "Capital One은 본 거래로 closed-loop 모델로 전환한다. 자사 발급 카드 거래를 Discover 네트워크로 점진적으로 옮기면 ① VISA·Mastercard에 내던 네트워크 수수료 절감, ② 가맹점 인터체인지 수수료 전액 흡수, ③ Discover 네트워크 자체 점유율 상승(Capital One 발급 카드 거래량이 그대로 Discover 거래량으로 잡힘)의 3중 효과가 발생한다. 시장에서 본 거래를 [수직 통합]의 교과서 사례로 평가하는 이유.",
    players: [
      { name: "Visa Inc.", role: "미국·글로벌 1위 결제 네트워크, open-loop 4-party 모델" },
      { name: "Mastercard Inc.", role: "미국·글로벌 2위 결제 네트워크, open-loop 4-party 모델" },
      { name: "American Express", role: "미국 3위, closed-loop 3-party 모델 (발급+네트워크 동시 보유)" },
      { name: "Discover Financial Services", role: "미국 4위, closed-loop 3-party 모델, 본 거래 인수 대상" },
      { name: "JPMorgan Chase", role: "거래 전 미국 1위 카드 발급사, 본 거래로 2위로 밀림" },
      { name: "Citigroup", role: "미국 주요 카드 발급사, VISA·Mastercard 네트워크 의존" },
    ],
  },

  companyOverview: {
    targetName: "Discover Financial Services",
    body: "Discover Financial Services는 1985년 Sears Roebuck이 출시한 Discover Card에서 시작해 1986년 자체 결제 네트워크 Discover Network를 구축, 2007년 Morgan Stanley에서 분사 상장된 NYSE 상장 금융지주회사다. 본사는 일리노이주 Riverwoods. 세 개의 핵심 사업, ① Direct Banking(카드대출·개인대출·학자금대출·온라인 예금), ② Payment Services(Discover Network·PULSE 직불 네트워크·Diners Club International). 2023년 말 카드대출 잔액 약 1,020억 달러, 전체 자산 약 1,521억 달러.",
    metrics: [
      { label: "설립", value: "1985년 / 2007년 분사 상장", sub: "Sears → Morgan Stanley → 독립" },
      { label: "본사", value: "Riverwoods, IL", sub: "NYSE: DFS" },
      { label: "FY2023 매출 (이자수익 차감 후)", value: "약 158억 달러", sub: "+19.3% YoY" },
      { label: "FY2023 순이익", value: "약 29.4억 달러", sub: "-32.8% YoY (CFPB 충당금)" },
      { label: "카드대출 잔액", value: "약 1,020억 달러", sub: "2023년 말" },
      { label: "Discover Network 점유율", value: "약 5%", sub: "미국 결제 거래량 기준" },
    ],
    financials: [
      { year: "FY2019", revenue: 11546, cogs: 3231, grossProfit: 8315, sga: 4748, operatingIncome: 3567, ebitda: 3850 },
      { year: "FY2020", revenue: 11216, cogs: 4406, grossProfit: 6810, sga: 4515, operatingIncome: 2295, ebitda: 2640 },
      { year: "FY2021", revenue: 12086, cogs: 1115, grossProfit: 10971, sga: 5022, operatingIncome: 5949, ebitda: 6300 },
      { year: "FY2022", revenue: 13286, cogs: 2359, grossProfit: 10927, sga: 5286, operatingIncome: 5641, ebitda: 5980 },
      { year: "FY2023", revenue: 15860, cogs: 6018, grossProfit: 9842, sga: 6128, operatingIncome: 3714, ebitda: 4050 },
    ],
    financialsNote: "단위: USD million | 출처: Discover Financial Services 10-K 공시 | revenue = 이자수익 차감 후 총 매출, cogs = 대손상각비(provision for credit losses), operating income = pretax income | FY2023 매출 급증은 신용카드 금리 인상 효과, 순이익 급감은 CFPB·기타 규제 충당금 4억 달러 + 가격 분류 오류 시정금 영향",
    financialsCurrency: "USD",
    financialsUnit: "mn",
  },

  dealStructure: {
    body: "본 거래는 100% 전(全)주식 합병이다. Capital One이 새로 발행한 보통주를 Discover 주주에게 교부하고 Discover는 Capital One의 100% 자회사로 흡수됐다. 교환비율 1.0192대 1(Discover 1주당 Capital One 1.0192주). 발표 직전 거래일(2024년 2월 16일) Discover 종가 110.49달러 대비 약 26.6% 프리미엄, 환산 인수가 약 140달러/주. 현금 지급분 없음. Capital One은 차입금이나 신규 부채 발행도 동원하지 않았다. 클로징 후 합병 회사 지분율은 기존 Capital One 주주 약 60%, 기존 Discover 주주 약 40%.",
    preOwnership: {
      nodes: [
        { id: "cof_pre", label: "Capital One 주주", sub: "기존 보통주", type: "acquirer" },
        { id: "cof_pre_ent", label: "Capital One Financial", sub: "NYSE: COF", type: "entity" },
        { id: "dfs_pre", label: "Discover 주주", sub: "기존 보통주 (~2.5억 주)", type: "public" },
        { id: "dfs_pre_ent", label: "Discover Financial Services", sub: "NYSE: DFS", type: "target" },
      ],
      edges: [
        { from: "cof_pre", to: "cof_pre_ent", label: "100%" },
        { from: "dfs_pre", to: "dfs_pre_ent", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "cof_post", label: "기존 Capital One 주주", sub: "약 60%", type: "acquirer" },
        { id: "dfs_post", label: "기존 Discover 주주", sub: "약 40% (1.0192주/주 교부)", type: "public" },
        { id: "combined", label: "Capital One Financial (합병 회사)", sub: "자산 약 6,378억 달러, 미국 8위 예금기관", type: "entity" },
        { id: "dfs_sub", label: "Discover Financial Services", sub: "Capital One 100% 자회사", type: "target" },
      ],
      edges: [
        { from: "cof_post", to: "combined", label: "약 60%" },
        { from: "dfs_post", to: "combined", label: "약 40%" },
        { from: "combined", to: "dfs_sub", label: "100% (자회사 편입)" },
      ],
    },
    keyTerms: [
      { label: "거래 형식", value: "100% 전(全)주식 합병 (Stock-for-stock)" },
      { label: "거래 규모", value: "약 358억 달러 (USD 35.3B)", accent: true },
      { label: "교환비율", value: "Discover 1주 → Capital One 1.0192주", accent: true },
      { label: "환산 인수가", value: "약 140달러/주", accent: true },
      { label: "프리미엄", value: "+26.6% (2024.02.16 종가 110.49달러 기준)", accent: true },
      { label: "현금 지급분", value: "없음" },
      { label: "차입금·신규 부채", value: "없음" },
      { label: "합병 후 지분율", value: "Capital One 주주 60% / Discover 주주 40%" },
      { label: "규제 승인", value: "Federal Reserve · OCC · Delaware Bank Commissioner (DOJ 별도 소송 없음)" },
      { label: "CEO", value: "Richard Fairbank (Capital One CEO 유임)" },
      { label: "본사", value: "McLean, VA (Capital One 본사 유지)" },
      { label: "연간 시너지 가이드", value: "약 27억 달러 (운영 15억 + 네트워크 12억)" },
      { label: "통합 비용 가이드", value: "약 27억~28억 달러 (실제 초과 지출 중)" },
    ],
  },

  advisors: {
    body: "양측 모두 미국 톱티어 자문사로 라인업했다. 인수자 Capital One은 Centerview Partners와 Morgan Stanley를 재무 자문으로, Wachtell Lipton Rosen & Katz를 주 법무 자문(반독점 별도 Cleary Gottlieb)으로 기용. 피인수자 Discover는 PJT Partners와 Morgan Stanley를 재무 자문으로 동원했으나 Morgan Stanley는 양측 자문이 아니라 [Discover 단독 자문]으로 정리, 법무는 Sullivan & Cromwell이 단독 주관. 미국 대형 은행 합병 자문 시장의 정형적 구성. Task에 언급된 Skadden은 실제 거래에는 등장하지 않았다, 본 보고서는 1차 자료 기준으로 기록.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Capital One (인수자)",
        initials: "COF",
        bg: "bg-red-600",
        advisors: [
          {
            firm: "Centerview Partners LLC",
            role: "재무 자문 (단독 lead financial advisor)",
            roleType: "financial",
            note: "Capital One 측 주(主) 자문, 합병 가격·교환비율·시너지 모델링 주관",
          },
          {
            firm: "Morgan Stanley & Co. LLC",
            role: "재무 자문 (공동)",
            roleType: "financial",
            note: "Capital One 측 공동 자문, 자본시장 자문 동시 수행",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문 (M&A 주관)",
            roleType: "legal",
            note: "거래 구조·합병계약·증권법·기업지배구조 주관",
          },
          {
            firm: "Cleary Gottlieb Steen & Hamilton LLP",
            role: "법무 자문 (반독점 공동)",
            roleType: "legal",
            note: "DOJ·연방준비제도·OCC 반독점 대응 공동 자문",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Discover Financial Services (피인수자)",
        initials: "DFS",
        bg: "bg-orange-500",
        advisors: [
          {
            firm: "PJT Partners Inc.",
            role: "재무 자문 (lead financial advisor)",
            roleType: "financial",
            note: "Discover 이사회·특별위원회 단독 자문, fairness opinion 발행",
          },
          {
            firm: "Morgan Stanley & Co. LLC",
            role: "재무 자문 (공동)",
            roleType: "financial",
            note: "Discover 측 공동 자문, 분리 advisor team 구성",
          },
          {
            firm: "Sullivan & Cromwell LLP",
            role: "법무 자문 (단독 주관)",
            roleType: "legal",
            note: "Discover 거래 전 과정 단독 법무 자문 (M&A + 규제 + 증권법)",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 Wachtell·Sullivan & Cromwell 공식 보도자료, Bloomberg Law, Law360, Global Legal Post 보도 기반. Morgan Stanley는 양측 공동 자문이 아닌 양측 각각에 분리 advisor team으로 자문했음.",
  },

  valuation: {
    body: "본 거래의 핵심 밸류에이션 논쟁은 [Discover의 네트워크 가치를 따로 떼서 얼마로 볼 것인가]에 있다. 단순 카드 발급사 PER/PBR 기준으로는 26.6% 프리미엄이 비싸 보이지만, Discover Network라는 결제 네트워크 사업은 American Express나 Visa·Mastercard에 적용되는 [네트워크 멀티플](EV/EBITDA 15~20배)을 적용해야 한다는 게 Capital One 측 주장. 카드 발급 사업만 보면 약 200억 달러 안팎이지만, Discover Network에 네트워크 사업 멀티플을 부여하면 추가로 100억~150억 달러가 잡혀 합산 358억 달러가 정당화된다는 논리.",
    rows: [
      { item: "거래 규모", val: "약 358억 달러", note: "전(全)주식 합병", accent: true },
      { item: "주당 인수가 (환산)", val: "약 140달러", note: "발표일 Capital One 종가 × 1.0192", accent: true },
      { item: "Discover 발표 직전 종가 (2024.02.16)", val: "110.49달러", note: "거래 직전 마지막 거래일" },
      { item: "프리미엄", val: "+26.6%", note: "발표 직전 종가 대비", accent: true },
      { item: "교환비율", val: "1.0192 Capital One 주 / 1 Discover 주", note: "fixed exchange ratio (현금·collar 없음)" },
      { item: "FY2023 매출 대비 EV/Revenue", val: "약 2.3배", note: "Discover FY2023 매출 158억 달러 기준" },
      { item: "FY2023 순이익 대비 P/E", val: "약 12.2배", note: "Discover FY2023 순이익 29.4억 달러 기준" },
      { item: "Discover Network 부속 가치 (Capital One 추정)", val: "약 100억~150억 달러", note: "전체 거래가의 30~40% 네트워크에 귀속" },
      { item: "Capital One 합산 카드대출 (post-deal)", val: "약 6,400억 달러", note: "JPMorgan 추월 미국 1위", accent: true },
      { item: "Capital One 합산 자산 (post-deal)", val: "약 6,378억 달러", note: "미국 8위 예금취급기관" },
    ],
    disclaimer: "주: 재무 수치는 Discover Financial Services 10-K 및 Capital One S-4 공시 기반. 네트워크 부속 가치는 Capital One 인수 분석 자료 및 시장 시각.",
  },

  rationale: {
    buyer: {
      title: "Capital One, 왜 358억을 썼나",
      initials: "COF",
      bg: "bg-red-600",
      points: [
        "[자체 결제 네트워크 보유] 미국 대형 은행 사상 최초로 자체 결제 네트워크(Discover Network)를 보유하게 됨. 자사 발급 카드 거래를 VISA·Mastercard에서 Discover로 점진 이전하면 네트워크 수수료 자체가 사라지고 가맹점 인터체인지 수수료 전액이 회사로 귀속됨",
        "[합산 카드대출 6,400억 달러, JPMorgan 추월 1위] 단순 발급사 규모 확대. 미국 카드 발급 시장에서 JPMorgan을 제치고 1위로 등극. 합산 자산 약 6,378억 달러로 미국 8위 예금취급기관",
        "[\"수십 년에 한 번 있는 기회\"라는 Fairbank의 평가] Discover Network 같은 자산은 시장에 다시 매물로 나올 일이 사실상 없음. American Express와 더불어 단 두 개의 closed-loop 네트워크 중 하나, 인수 기회 자체가 희소",
        "[규제 환경의 정치적 타이밍] Biden 행정부 말기 마지막 대형 은행 합병으로 통과, 차기 행정부의 규제 스탠스 불확실성을 피한 클로징. OCC 시정 조치 조건만 받아들이면 통과 가능한 환경",
        "[전(全)주식 합병의 자본 효율성] 현금이나 차입 동원 없이 신주 발행만으로 358억 거래 완결. Capital One의 자본 비율을 유지하면서 대형 인수 가능, 향후 자사주 매입 여력 확보",
        "[CFPB 규제 우려에 대한 헤지] 신용카드 후불 수수료 규제 등 발급사 환경 악화에 대비. 네트워크 사업은 발급사 규제와 다른 별개 수익원이라 사업 다각화 효과",
      ],
    },
    seller: {
      title: "Discover, 왜 팔렸나",
      initials: "DFS",
      bg: "bg-orange-500",
      points: [
        "[CFPB 가격 분류 오류 사태로 인한 경영 위기] 2023년 7월 Discover는 신용카드 가격 분류 오류로 약 3.65억 달러 환급 + 후속 규제 조치에 직면. CEO Roger Hochschild 사임, 이사회는 매각·합병 옵션 본격 검토 시작",
        "[26.6% 프리미엄의 매력] 발표 직전 종가 110달러대에서 환산 140달러대로 거래. 자체 경영 정상화를 6~12개월 더 추진하는 것보다 즉시 26.6% 프리미엄을 받는 게 주주가치 극대화 경로라는 이사회 판단",
        "[전(全)주식이라 업사이드 보유] 100% 현금 매각이 아니라 Capital One 주식으로 받기 때문에 Discover 주주는 합병 회사 약 40% 지분으로 [네트워크 시너지의 업사이드]를 계속 누림. 단순 \"엑시트\"가 아니라 [업사이드 공유]",
        "[발급사로서의 한계] Discover는 발급+네트워크를 동시에 보유한 closed-loop인데, 발급 점유율이 너무 작아 네트워크 거래량이 늘지 않는 구조적 한계. Capital One 발급 거래량이 합쳐지면 Discover Network의 규모의 경제가 단숨에 해결됨",
        "[독자 생존의 자본 부담] 향후 CFPB 후속 조치·서브프라임 충당금·기술 투자 등 독자 생존 시 필요한 자본 부담을 Capital One의 자본 기반으로 흡수 가능",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월 (클로징 후 12개월)",
    body: "거래는 2025년 5월 18일 클로징 후 약 12개월이 지나며 통합 작업이 한창 진행 중이다. 시장의 초기 평가는 \"전략적 정합성은 매우 높지만 통합 비용이 가이드를 초과하고 있다\"는 쪽으로 모이는 분위기. American Banker 보도에 따르면 통합 비용은 이미 약 100억 달러에 근접해 원래 가이드 27억~28억 달러를 크게 상회. 그 대신 Capital One은 시너지 목표를 27억 달러에서 약 25억 달러로 일부 하향 조정하면서도 네트워크 마이그레이션 진척률이 빨라지고 있다고 밝혔다. 2026년부터 일부 Discover 카드를 Capital One 브랜드로 재발급하고, Capital One 발급 카드 거래의 일부를 Discover Network로 옮기는 작업이 본격화. Federal Reserve 승인은 향후 미국 대형 은행 M&A의 [경로 제시] 케이스로 자리잡을 가능성이 큼.",
    overallVerdict: "전략적 정합성 매우 높음, 통합 비용은 가이드 초과 중. 본격적 시너지 실현은 2027~2028년 네트워크 마이그레이션 완료 시점에 결정",
    positives: [
      "[Federal Reserve·OCC 승인 자체가 본 거래의 1차 성과] Biden 행정부 말기 대형 은행 합병이 통과된 것은 향후 미국 대형 은행 M&A의 경로 제시. 정치 리스크 헤지 성공",
      "[합산 카드대출 6,400억 달러로 JPMorgan 추월] 미국 카드 발급 시장 1위 등극. 합산 자산 6,378억 달러로 미국 8위 예금기관 진입",
      "[Capital One 주가 회복] 발표 직후 일시 하락했던 Capital One 주가는 클로징 시점에 회복, 시장은 거래 자체에 점진적으로 우호적으로 반응",
      "[Discover 주주의 업사이드 공유] 전주식 합병 덕분에 Discover 주주가 40% 지분으로 시너지 업사이드를 누리는 구조, 단순 매각보다 우월",
    ],
    risks: [
      "[통합 비용 초과] 원래 가이드 27억~28억 달러였던 통합 비용이 이미 100억 달러에 근접 (American Banker 보도). IT 통합, 직원 통합, 규제 대응 비용 모두 상회",
      "[네트워크 마이그레이션 속도] Capital One 발급 카드를 Discover Network로 옮기는 작업은 가맹점 수용도와 카드 회원 동의가 필요. 가이드보다 느릴 가능성",
      "[CFPB 후속 조치 부담 잔존] Discover의 가격 분류 오류 사태의 후속 처리(소비자 환급, 추가 벌금)가 Capital One으로 그대로 이전",
      "[정치 후폭풍] Elizabeth Warren 등 진보 진영의 반대 명분이 차기 행정부 규제 환경에 영향. 향후 카드 후불 수수료, 인터체인지 수수료 규제 등으로 발급사 환경 악화 위험",
      "[서브프라임 충당금 사이클] 미국 카드 연체율 상승 사이클에서 서브프라임 비중이 높은 양사 합산 포트폴리오는 충당금 부담이 가중될 수 있음",
    ],
    editorNote:
      "이 거래의 진짜 의미는 \"미국 1위 카드 발급사 등극\"이 아니라 [Capital One이 미국 대형 은행 사상 최초로 자체 결제 네트워크를 보유하게 됐다]는 점이다. VISA·Mastercard에 매년 내던 네트워크 수수료가 자사 사업으로 흡수되는 [수직 통합]의 교과서 사례. 통합 비용 초과는 우려 사항이지만, 본 거래의 가치는 [2027~2028년 네트워크 마이그레이션이 어디까지 진행됐나]로 결정될 것. 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "COF",
    acquirerBg: "bg-red-600",
    targetInitials: "DFS",
    targetBg: "bg-orange-500",
    acquirerName: "Capital One Financial Corporation",
    targetName: "Discover Financial Services",
    dealTitle: "All-Stock Acquisition · First US Major Bank to Own Its Payment Network",
    dealSize: "USD 35.3 billion",
    dealSizeUSD: "approx. USD 35.3B",
    evEbitda: "approx. 8.7x (Discover FY2023 EBITDA basis)",
    closeDate: "May 18, 2025",
  },

  sources: [
    { id: 1, text: "Capital One·Discover 합병 발표 보도자료 (2024.02.19)", url: "https://investor.capitalone.com/news-releases/news-release-details/capital-one-acquire-discover" },
    { id: 2, text: "Discover Financial Services 8-K, 합병 계약 공시 (2024.02.20)", url: "https://www.sec.gov/Archives/edgar/data/0001393612/000119312524039251/d733833dex991.htm" },
    { id: 3, text: "Capital One Form S-4/A, 합병 위임장·교환비율 상세 (2024)", url: "https://www.sec.gov/Archives/edgar/data/0000927628/000119312524184991/d743340ds4a.htm" },
    { id: 4, text: "CNBC, Capital One to acquire Discover in $35.3 billion all-stock deal (2024.02.19)", url: "https://www.cnbc.com/2024/02/19/capital-one-acquiring-discover-financial-services-report-says.html" },
    { id: 5, text: "CNBC, Capital One and Discover merger approved by Federal Reserve (2025.04.18)", url: "https://www.cnbc.com/2025/04/18/capital-one-and-discover-merger-approved-by-federal-reserve-board.html" },
    { id: 6, text: "Capital One, Final Regulatory Approvals 보도자료 (2025.04)", url: "https://investor.capitalone.com/news-releases/news-release-details/capital-one-receives-final-regulatory-approvals-acquisition" },
    { id: 7, text: "Capital One Completes Acquisition of Discover (2025.05.18)", url: "https://investor.capitalone.com/news-releases/news-release-details/capital-one-completes-acquisition-discover/" },
    { id: 8, text: "Bloomberg Law, Wachtell·Sullivan & Cromwell Aid Capital One's Discover Buy (2024.02)", url: "https://news.bloomberglaw.com/business-and-practice/wachtell-sullivan-cromwell-aid-capital-ones-buy-of-discover" },
    { id: 9, text: "Global Legal Post, Wachtell·Sullivan & Cromwell guide Capital One's $35bn Discover acquisition", url: "https://www.globallegalpost.com/news/wachtell-sullivan-cromwell-guide-capital-ones-35bn-discover-acquisition-1462264827" },
    { id: 10, text: "Law360, Wachtell Lipton Guides Capital One On $35.3B Discover Deal", url: "https://www.law360.com/competition/articles/1804290/wachtell-lipton-guides-capital-one-on-35-3b-discover-deal" },
    { id: 11, text: "Banking Dive, Capital One-Discover deal gets nod from Fed, OCC (2025.04)", url: "https://www.bankingdive.com/news/capital-one-discover-occ-conditional-approval/745773/" },
    { id: 12, text: "American Banker, Capital One has spent nearly $10B on Discover integration", url: "https://www.americanbanker.com/news/capital-one-has-spent-nearly-10b-on-discover-integration" },
    { id: 13, text: "Discover Financial Services 10-K, FY2019~FY2023", url: "https://investorrelations.discover.com" },
    { id: 14, text: "Arnold & Porter Advisory, Bank Regulators' Approval Path Forward for Bank M&A (2025.06)", url: "https://www.arnoldporter.com/en/perspectives/advisories/2025/06/bank-regulators-approval-of-capital-one-and-discover-deal" },
  ],

  seo: {
    title: "Capital One × Discover 358억 달러, 자체 결제 네트워크 보유 첫 미국 대형 은행",
    description:
      "2024년 2월 발표 → 2025년 5월 클로징. Capital One이 Discover를 358억 달러 전주식 합병으로 인수. 교환비율 1.0192, 프리미엄 26.6%. 미국 4대 결제 네트워크 중 하나(Discover Network) 인수로 자체 네트워크 보유 첫 미국 대형 은행 탄생. 합산 카드대출 6,400억 달러로 JPMorgan 추월 1위. 15개월 규제 마라톤·시너지·통합 비용·DOJ·Federal Reserve·OCC 승인 과정 전부 해부.",
    keywords: [
      "Capital One Discover",
      "Capital One Discover 합병",
      "Discover Financial 인수",
      "미국 카드 합병",
      "결제 네트워크 수직 통합",
      "VISA Mastercard Amex Discover",
      "Federal Reserve 은행 합병 승인",
      "OCC 승인",
      "Richard Fairbank",
      "JPMorgan 카드 1위 추월",
      "수직 통합 M&A",
      "Biden 마지막 은행 합병",
    ],
  },

  concepts: [
    {
      term: "미국 4대 결제 네트워크 (US Payment Networks)",
      description: "VISA(약 40%) · Mastercard(약 25%) · American Express(약 20%) · Discover(약 5%)의 4사 구조. VISA·Mastercard는 발급과 네트워크가 분리된 open-loop 4-party 모델, Amex·Discover는 발급+네트워크 동시 보유 closed-loop 3-party 모델. 본 거래로 Capital One이 미국 대형 은행 중 처음으로 closed-loop로 전환.",
    },
    {
      term: "서브프라임 카드 집중 (Subprime Card Concentration)",
      description: "Capital One은 서브프라임·니어프라임 카드 시장에 강점이 있는 발급사. 합병 후 Discover의 prime·near-prime 포트폴리오까지 흡수해 서브프라임~프라임 전 스펙트럼을 커버. 정치권에서 \"서브프라임 시장 경쟁 감소\"를 반대 명분으로 사용한 핵심 이유.",
    },
    {
      term: "Federal Reserve 은행 합병 승인 (Bank Holding Company Act Section 3)",
      description: "미국 은행 합병은 Bank Holding Company Act Section 3에 따라 Federal Reserve의 사전 승인이 필요. 심사 기준은 경쟁 영향, 재무 건전성, 경영 능력, 지역사회 편익. OCC는 별도로 National Bank Act 기준 심사. 본 거래는 양 기관 모두에서 통과한 첫 대형 카드사 합병.",
    },
    {
      term: "반독점 수직 통합 (Antitrust Vertical Integration)",
      description: "동일 시장 내 경쟁사 결합(수평)이 아닌 가치 사슬 상하류 결합(수직)의 합병. 본 거래는 카드 발급사(Capital One) + 결제 네트워크(Discover)의 수직 통합. DOJ는 수직 통합이 명백히 경쟁을 제한하지 않는다는 입장으로 별도 소송을 제기하지 않음.",
    },
    {
      term: "결제 네트워크 경제학 (Network Economics)",
      description: "결제 네트워크는 발급사(issuer) · 네트워크(network) · 매입사(acquirer) · 가맹점(merchant)의 4-party(open-loop) 또는 3-party(closed-loop) 구조에서 인터체인지 수수료를 분배. Capital One은 본 거래로 [발급+네트워크] 두 단을 모두 자사가 가져가는 closed-loop으로 전환, 수수료 누수를 차단.",
    },
    {
      term: "Capital One Café 전략",
      description: "Capital One은 기존 대형 은행과 달리 [지점이 아닌 Café]를 운영하는 디지털 우선 전략을 채택. 합병 후 Discover의 온라인 직접 은행 모델을 흡수해 [디지털·카페·자체 네트워크]의 3중 차별화를 강화할 가능성. JPMorgan·Citi의 지점 중심 모델과의 정면 차별화.",
    },
    {
      term: "Discover 카드 브랜드 (Discover Card Brand)",
      description: "Discover Card는 1985년 Sears가 출시한 [cashback 혁신] 카드. 미국 소비자 인지도는 매우 높지만 해외 가맹점 수용도는 낮은 편. Capital One은 본 거래로 Discover 브랜드를 유지할 것인지, Capital One 브랜드로 통합할 것인지의 전략 선택을 두고 있음.",
    },
    {
      term: "시너지 단계적 실현 (Synergy Phasing)",
      description: "본 거래의 연간 시너지 약 27억 달러(운영 15억 + 네트워크 12억)는 클로징 후 약 3년에 걸쳐 단계적으로 실현되는 구조. IT 통합·네트워크 마이그레이션·직원 통합이 단계적으로 진행되며, 실제 American Banker 보도에 따르면 통합 비용은 이미 가이드 27억~28억 달러를 크게 초과해 100억 달러에 근접.",
    },
  ],

  faq: [
    {
      q: "Capital One은 왜 358억 달러나 주고 Discover를 샀나요?",
      a: "단순히 카드 회사 두 곳을 합치기 위해서가 아닙니다. 진짜 목적은 [Discover Network라는 미국 4대 결제 네트워크 중 하나를 손에 넣는 것]입니다. VISA(약 40%) · Mastercard(약 25%) · American Express(약 20%) · Discover(약 5%) 4사 과점 구조에서, Capital One은 본 거래로 미국 대형 은행 사상 최초로 [자체 결제 네트워크를 보유한 은행]이 됩니다. 합산 카드대출 약 6,400억 달러로 JPMorgan을 추월해 1위가 되는 효과도 있지만, Richard Fairbank CEO가 \"수십 년에 한 번 있는 기회\"라 표현한 이유는 결제 네트워크 자산의 희소성 때문입니다.",
    },
    {
      q: "왜 현금이 아닌 전(全)주식 합병이었나요?",
      a: "세 가지 이유. ① Capital One은 현금 358억 달러를 한 번에 동원하면 자본 비율이 급락해 Federal Reserve 자본 규제에 저촉됨. ② 신주 발행으로 처리하면 차입 없이 자본 구조를 유지하면서 대형 인수가 가능. ③ Discover 주주 입장에서도 전주식이 유리, 100% 현금 매각보다 합병 회사 40% 지분을 통해 [네트워크 시너지 업사이드]를 계속 누릴 수 있음. 결과적으로 양측 모두에게 유리한 거래 구조였습니다.",
    },
    {
      q: "왜 15개월이나 걸렸나요? 다른 합병보다 오래 걸린 이유는?",
      a: "미국 대형 은행 합병은 Federal Reserve(Bank Holding Company Act Section 3) + OCC(National Bank Act) + DOJ(반독점법) + 주 은행 규제당국의 4중 심사를 통과해야 합니다. 추가로 Elizabeth Warren 등 진보 진영의 정치적 반대가 거셌고, 서브프라임 카드 시장 집중 + 결제 네트워크 4→3 축소 우려에 대한 추가 검토가 들어가면서 일정이 길어졌습니다. 결과적으로 2024.12 Delaware 승인 → 2025.04.18 Federal Reserve·OCC 최종 승인 → DOJ 별도 소송 미제기 → 2025.05.18 클로징 순으로 진행됐습니다.",
    },
    {
      q: "DOJ가 왜 소송을 안 했나요?",
      a: "DOJ는 본 거래를 [수직 통합](발급사+네트워크) 케이스로 봤기 때문입니다. 수평 통합(동일 시장 경쟁사 결합)과 달리 수직 통합은 경쟁 제한 효과가 명확하지 않다는 게 미국 반독점 정설. 또한 Discover Network 점유율이 5%로 작아 [경쟁 네트워크 제거]보다는 [경쟁 네트워크 강화]에 가깝다는 논리도 있었습니다. Federal Reserve·OCC가 4월 18일 승인한 이후 DOJ가 별도 소송을 제기하지 않으면서 사실상 미국 정부 차원의 거래 승인이 완성됐습니다.",
    },
    {
      q: "합병 후 Capital One은 정말 미국 1위 카드 회사가 됐나요?",
      a: "발급사 기준으로는 맞습니다. 합산 카드대출 잔액 약 6,400억 달러로 JPMorgan Chase(약 2,200억 달러)를 크게 추월해 미국 1위가 됐습니다. 다만 [네트워크 점유율]은 여전히 Discover Network 약 5%에 머무릅니다. Capital One이 자사 발급 카드 거래를 Discover Network로 이전하는 작업이 2026년부터 본격화되면 향후 Discover Network 점유율이 점진적으로 상승할 전망. 이 마이그레이션이 본 거래의 진짜 성패 변수입니다.",
    },
    {
      q: "통합 비용이 가이드를 크게 초과했다는데 어떻게 평가해야 하나요?",
      a: "American Banker 보도에 따르면 통합 비용은 이미 약 100억 달러에 근접해 원래 가이드 27억~28억 달러를 크게 상회. IT 통합, 직원 통합, 규제 대응 비용이 모두 가이드를 초과했습니다. 다만 Capital One은 시너지 목표를 27억에서 25억 달러로 일부 하향 조정하면서도 네트워크 마이그레이션 진척률은 가속화 중이라 밝혔습니다. 본 거래의 본격적 평가는 통합 비용이 한 자릿수 후반대에서 마무리되는 시점(2027~2028년 추정) + 네트워크 마이그레이션 완료 시점에 가능. 단기 비용 초과는 우려 사항이지만 장기 전략 가치는 여전히 유효하다는 게 시장 다수설.",
    },
  ],
};

export default deal;
