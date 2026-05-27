/**
 * Bayer AG × Monsanto Company (2016–2018)
 * 역사상 최대 규모 농화학 M&A + 최대 IG 신디케이티드 브리지론
 * $660억 인수 · €577억 브리지 · 18개월 리파이낸싱 · 라운드업 꼬리위험
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bayer-monsanto",
  title: "바이엘은 어떻게 €577억 브리지론으로 몬산토를 인수하고 라운드업 악몽을 맞이했나",
  subtitle: "$660억 농화학 세기의 M&A — 역사상 최대 IG 신디케이티드론과 18개월 리파이낸싱 로드맵 해부",
  category: "ma",
  industry: "농화학 / 생명과학",
  country: "미국·독일",
  announcedAt: "2016-09-14",
  closedAt: "2018-06-07",
  announcedDisplay: "2016년 9월",
  closedDisplay: "2018년 6월",
  readingMinutes: 15,
  tags: [
    "바이엘", "몬산토", "농화학", "M&A", "신디케이티드론", "브리지론",
    "IG채권", "인수금융", "글리포세이트", "Roundup", "유상증자", "BASF",
    "바이엘몬산토", "역대최대", "생명과학", "농업기술",
  ],
  excerpt:
    "바이엘이 몬산토를 $660억(주당 $128)에 인수한 역대 최대 농화학 M&A. 7개 주선은행이 €577억 브리지론을 약정해 딜 확실성을 확보했고, 바이엘은 18개월 동안 IG채권 €19B·유상증자 €6B·자산매각 €7.1B로 이를 상환했다. 그러나 클로징 직후 라운드업 암유발 소송이 폭발하며 독일 최대 기업이 총 €250억+ 배상에 직면했다.",

  acquirer: { initials: "BAYER", bg: "bg-[#10384F]", label: "바이엘 AG" },
  target:   { initials: "MON",   bg: "bg-emerald-700", label: "몬산토 컴퍼니" },

  background: [
    "2000년대 중반 이후 글로벌 농화학 산업은 '빅4' 체제 재편을 향해 달려갔다. 다우·듀폰 합병(2017), 켐차이나의 신젠타 인수($430억, 2017), 그리고 BASF의 바이엘 농화학 자산 매입(€71억)까지 — 각국 독점 당국의 시선 아래서도 통합의 물결은 멈추지 않았다. 이 경쟁 압력 속에서 바이엘은 2015년부터 몬산토에 눈을 돌렸다.",
    "2016년 5월 바이엘은 주당 $122의 비공개 제안을 몬산토에 전달했고, 협상 끝에 같은 해 9월 주당 $128(총 EV 약 $660억)에 합의가 이뤄졌다. 바이엘로서는 종자(Seeds) 시장 27% 점유율을 가진 몬산토를 편입해 '씨앗에서 수확까지 원스톱 솔루션'을 완성하는 전략적 도박이었다. 그러나 이 인수는 독일 역사상 최대 해외 인수였으며, 조달해야 할 자금은 €577억이라는 천문학적 규모였다.",
    "딜이 클로징되기까지 22개월이 걸렸다. 미국 DOJ와 EU 집행위원회는 각각 경쟁 우려를 제기했고, 결국 바이엘은 BASF에 일부 사업을 €71억에 매각하는 조건으로 승인을 받아냈다. 그리고 2018년 6월 7일, 역사상 가장 큰 농화학 합병이 완료됐다. 하지만 딜 직후 법정에서는 더 큰 폭풍이 기다리고 있었다.",
  ],

  dealSummary: {
    dealValueDisplay: "$660억",
    acquirerName: "바이엘 AG (Bayer AG)",
    targetName: "몬산토 컴퍼니 (Monsanto Company)",
    announcedDisplay: "2016년 9월 14일",
    closedDisplay: "2018년 6월 7일",
    country: "미국 (NYSE: MON → 상장폐지)",
  },

  executiveSummary: [
    "바이엘 AG가 미국 농화학 기업 몬산토를 주당 $128, 총 EV $660억(약 €577억)에 현금 인수. 역대 독일 기업의 최대 해외 인수.",
    "7개 주선은행(BofAML, Deutsche Bank, Goldman Sachs, HSBC, JPMorgan, Credit Suisse, Société Générale)이 €577억 브리지론을 약정 — 역사상 최대 규모 IG 인수금융 패키지 중 하나.",
    "바이엘은 18개월 동안 IG채권 시리즈(€19B+), 유상증자(€6B), BASF에 농화학 자산 매각(€7.1B)으로 브리지를 완전 상환.",
    "딜 클로징 2개월 후인 2018년 8월, 캘리포니아 배심원단이 라운드업(글리포세이트)의 암 유발 인정 평결. 이후 총 17만 건+ 소송, 총 €250억+ 합의·판결 부담으로 바이엘 시가총액 반토막.",
    "인수 시너지 예상($15억/년)은 달성됐으나, 라운드업 법적 리스크 미반영 인수가격이 '역대 최악의 M&A' 오명으로 이어짐.",
  ],

  industryOverview: {
    body: "글로벌 농화학 산업은 2010년대 중반 6대 플레이어(몬산토, 신젠타, 다우, 듀폰, BASF, 바이엘)에서 빅4(바이엘+몬산토, 다우+듀폰→코르테바, 켐차이나+신젠타→신젠타, BASF)로 재편됐다. 이 과정에서 종자·제초제·농약 패키지 판매(번들링) 전략이 업계 표준이 되었고, 데이터 기반 정밀농업이 차세대 경쟁축으로 부상했다.",
    metrics: [
      { label: "글로벌 종자 시장 규모", value: "$500억", sub: "2016년 기준" },
      { label: "글로벌 제초제 시장", value: "$260억", sub: "글리포세이트 1위" },
      { label: "빅4 시장 점유율", value: "70%+", sub: "합병 완료 후 추정" },
      { label: "몬산토 종자 점유율", value: "27%", sub: "글로벌 상업 종자" },
    ],
    players: [
      { name: "바이엘 크롭사이언스", role: "제초제·살균제·GM종자 (합병 후 1위)" },
      { name: "코르테바 (다우+듀폰)", role: "종자·작물 보호 (합병 후 2위)" },
      { name: "신젠타 (켐차이나)", role: "농약·종자 (합병 후 3위)" },
      { name: "BASF 농업 솔루션", role: "제초제·살균제 (바이엘 자산 인수)" },
    ],
  },

  companyOverview: {
    targetName: "몬산토 컴퍼니 (Monsanto Company)",
    body: "1901년 설립, 미주리주 세인트루이스 기반의 글로벌 농업 생명공학 기업. 라운드업(Roundup, 글리포세이트 제초제) 브랜드와 GM 종자(Bt옥수수·콩·면화)로 세계 최대 종자 기업의 자리를 지켰다. '라운드업 레디(Roundup Ready)' 특허 씨앗과 라운드업의 묶음 판매로 농가 의존도를 높이는 비즈니스 모델을 구축했으나, 특허 만료와 제네릭 확산, 그리고 건강 우려로 2015년부터 매출이 감소세로 돌아섰다.",
    metrics: [
      { label: "딜 당시 EV", value: "$660억", sub: "주당 $128 현금 합의" },
      { label: "EV/EBITDA", value: "17.5×", sub: "업종 평균 12-14× 대비 프리미엄" },
      { label: "라운드업 점유율", value: "40%+", sub: "글로벌 글리포세이트 시장" },
      { label: "연구개발비", value: "$16억", sub: "매출 대비 12% (FY2016)" },
    ],
    financials: [
      {
        year: "FY2014",
        revenue: 15855,
        cogs: 9375,
        grossProfit: 6480,
        sga: 1620,
        operatingIncome: 3220,
        ebitda: 4520,
      },
      {
        year: "FY2015",
        revenue: 15001,
        cogs: 9123,
        grossProfit: 5878,
        sga: 1701,
        operatingIncome: 2820,
        ebitda: 4251,
      },
      {
        year: "FY2016",
        revenue: 13502,
        cogs: 8198,
        grossProfit: 5304,
        sga: 1612,
        operatingIncome: 2342,
        ebitda: 3774,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY는 몬산토 회계연도(8월 말 마감) 기준. 상기 수치는 공개 재무제표 기반 추정치이며 일부 항목 단순화.",
  },

  dealStructure: {
    body: "바이엘이 몬산토의 전체 발행 주식을 주당 $128에 현금 매수하는 단순 현금 합병(Cash Merger) 구조. EC·DOJ 경쟁당국의 승인 조건으로 바이엘은 자체 보유 종자·제초제 사업(겹치는 작물 보호 제품) 일부를 BASF에 €71억에 매각했다. 합병 완료 후 몬산토는 NYSE에서 상장폐지되어 바이엘 AG의 100% 자회사로 편입, 'Bayer Crop Science'로 리브랜딩됐다.",
    preOwnership: {
      nodes: [
        { id: "bayer", label: "바이엘 AG", sub: "독일 상장사 (Xetra/NYSE)", type: "acquirer" },
        { id: "bayer-cs", label: "바이엘 크롭사이언스", sub: "기존 농화학 자회사", type: "entity" },
        { id: "monsanto", label: "몬산토 컴퍼니", sub: "NYSE 상장 (MON)", type: "target" },
        { id: "public-m", label: "공개주주", sub: "NYSE 기관·개인 투자자", type: "public" },
      ],
      edges: [
        { from: "bayer", to: "bayer-cs", label: "100%" },
        { from: "public-m", to: "monsanto", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bayer", label: "바이엘 AG", sub: "독일 상장사", type: "acquirer" },
        { id: "bayer-crop", label: "바이엘 크롭사이언스", sub: "몬산토 통합 완료 (상장폐지)", type: "entity" },
      ],
      edges: [
        { from: "bayer", to: "bayer-crop", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "인수 방식", value: "현금 합병 (All-Cash Merger)", accent: true },
      { label: "인수 가격", value: "주당 $128.00 (현금)", accent: true },
      { label: "프리미엄", value: "비영향 주가 대비 약 +44%" },
      { label: "총 거래 가치 (EV)", value: "$660억 (부채 포함)" },
      { label: "EC 조건 (자산 매각)", value: "BASF에 €71억 농화학 사업 양도" },
      { label: "DOJ 조건", value: "겹치는 씨앗·제초제 브랜드 정리" },
      { label: "딜 타입", value: "독일 기업의 역대 최대 해외 인수" },
    ],
  },

  advisors: {
    body: "두 기업 모두 최정상급 자문단을 구성했다. 특히 인수금융(€577억 브리지)은 7개 글로벌 투자은행이 공동 주선했으며, 이 규모는 IG 등급 기업 인수금융 사상 최대 수준이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "바이엘 AG (인수자)",
        initials: "BAYER",
        bg: "bg-[#10384F]",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 및 인수금융 공동 주선", roleType: "financial", note: "주선은행 겸 M&A 어드바이저" },
          { firm: "Bank of America Merrill Lynch", role: "재무자문 및 브리지론 북러너", roleType: "financial", note: "€577억 브리지 공동 주선 북러너" },
          { firm: "Deutsche Bank", role: "재무자문 및 브리지론 북러너", roleType: "financial", note: "독일계 주관사, 바이엘 하우스뱅크" },
          { firm: "Linklaters", role: "법률 자문 (영국·독일·EU 법)", roleType: "legal", note: "국제 M&A 및 독점규제" },
          { firm: "Sullivan & Cromwell", role: "법률 자문 (미국법)", roleType: "legal", note: "미국 합병규제 및 증권법" },
        ],
      },
      {
        side: "target",
        sideLabel: "몬산토 컴퍼니 (피인수자)",
        initials: "MON",
        bg: "bg-emerald-700",
        advisors: [
          { firm: "Morgan Stanley", role: "재무자문", roleType: "financial", note: "페어니스 오피니언 제공" },
          { firm: "Ducera Partners", role: "재무자문 (독립)", roleType: "financial", note: "이사회 독립 어드바이저" },
          { firm: "Wachtell, Lipton", role: "법률 자문", roleType: "legal", note: "M&A 전문 최고 로펌" },
          { firm: "Bryan Cave", role: "법률 자문 (미주리 현지)", roleType: "legal", note: "현지법 및 신탁·환경 이슈" },
        ],
      },
    ],
    disclaimer: "주선은행 목록은 공개 정보 기반이며, 참여 은행 전체 명단과 개별 약정액은 기밀 사항으로 일부 추정을 포함합니다.",
  },

  valuation: {
    body: "바이엘은 주당 $128를 제시했는데, 이는 몬산토 비영향 주가(발표 전 30일 평균) 대비 약 44% 프리미엄에 해당한다. EV/EBITDA 17.5×는 당시 농화학 업종 평균(12-14×)을 크게 상회하는 수준으로, 인수 시너지와 장기 성장 기대치를 상당 부분 선반영한 가격이었다.",
    rows: [
      { item: "에쿼티 가치 (Equity Value)", val: "$527억", note: "주당 $128 × 발행주식 4.1억 주", accent: true },
      { item: "순차입금 인수 (Net Debt)", val: "+$133억", note: "몬산토 기존 부채 인수" },
      { item: "총 기업 가치 (EV)", val: "$660억", note: "에쿼티 + 순차입금", accent: true },
      { item: "인수 당시 EBITDA", val: "$38억", note: "FY2016 추정 EBITDA" },
      { item: "EV/EBITDA 배수", val: "17.5×", note: "업종 평균 12-14× 대비 고평가 논란" },
      { item: "비영향 주가 대비 프리미엄", val: "+44%", note: "발표 전 30일 평균 대비" },
      { item: "연간 시너지 목표", val: "$15억", note: "3-4년 내 실현 예상 (달성 완료)" },
    ],
    disclaimer: "상기 수치는 공개 정보 기반이며 일부 추정치를 포함합니다.",
  },

  rationale: {
    buyer: {
      title: "바이엘 AG 입장",
      initials: "BAYER",
      bg: "bg-[#10384F]",
      points: [
        "씨앗(Seeds) + 제초제(Herbicide) + 살균제(Fungicide) 풀 패키지 제공 → '원스톱 농업 솔루션' 완성",
        "몬산토의 디지털 농업 플랫폼(Climate Corp, FieldView)으로 정밀농업 데이터 사업 확보",
        "글로벌 종자 시장 1위(27%) + 바이엘 크롭사이언스 통합으로 빅4 중 압도적 1위 달성",
        "북미 시장 점유율 극적 확대 — 몬산토의 미국 옥수수·콩 종자 시장 지배력 확보",
        "연간 $15억 비용 시너지 (R&D 중복 제거, 유통 통합, 조달 효율화)",
      ],
    },
    seller: {
      title: "몬산토 주주 입장",
      initials: "MON",
      bg: "bg-emerald-700",
      points: [
        "비영향 주가 대비 +44% 현금 프리미엄 — 즉각적인 유동성 확보",
        "2015-2016년 농산물 가격 하락·매출 정체 상황에서 고점 매각 기회",
        "라운드업 관련 잠재 소송 리스크를 인수자(바이엘)가 부담하게 되는 구조",
        "반복적인 적대적 인수 시도(Syngenta 등)를 차단하는 '백기사(White Knight)' 효과",
        "$128 현금 합병 — 시장 변동성 무관 확정 수익 확보",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2025년 5월",
    body: "바이엘 × 몬산토 딜은 종종 '역대 최악의 M&A 중 하나'로 거론된다. 인수 완료 직후 라운드업(글리포세이트) 제초제의 암 유발 소송이 폭발하며, 바이엘은 2024년 말까지 누적 €250억+를 소송 합의·판결로 지급했다. 2018년 €80/주 수준이던 바이엘 주가는 2024년 €24 내외로 70%가 넘게 하락했다.",
    overallVerdict: "M&A 시너지는 달성, 라운드업 꼬리위험은 완전 실패",
    positives: [
      "연간 $15억 시너지 목표 3년 내 달성 — 작물보호 제품 번들링 성과",
      "디지털 농업 플랫폼(FieldView) 2024년 기준 18억 에이커 데이터 수집",
      "북미 종자 시장 1위 유지 — 옥수수·콩·면화 시장 지배력 확고",
      "€577억 브리지론 만기 전 전액 상환 — 채권자 신용 손실 Zero",
    ],
    risks: [
      "라운드업(글리포세이트) 소송 누적 합의·판결 €250억+ — 인수 프리미엄($133억)보다 크게 초과",
      "딜 클로징 시 소송 리스크 심각하게 저평가 — Due Diligence 실패 논란",
      "바이엘 신용등급 Baa1/BBB+(IG 최하위 경계) — 배당 삭감 및 자산 매각 압박",
      "2018-2024년 시가총액 약 €700억 감소 — 몬산토 인수가($660억)보다 더 큰 파괴",
      "2022년 독일 다수결 주주총회서 이사회 불신임 투표 → 유럽 상장사 역사상 이례적 사건",
    ],
    editorNote: "바이엘 × 몬산토는 M&A 교과서에서 'Due Diligence의 중요성'을 가르칠 때 빠지지 않는 사례가 됐다. 전략적 논리와 시너지는 맞았지만, 라운드업 잠재 소송 리스크를 €20-30억 수준으로 추정한 것이 치명적이었다. 한편, €577억 브리지론의 설계와 18개월 리파이낸싱 실행은 IG 기업 인수금융의 교과서적 사례로 평가받는다.",
  },

  tombstone: {
    acquirerInitials: "BAYER",
    acquirerBg: "bg-[#10384F]",
    targetInitials: "MON",
    targetBg: "bg-emerald-700",
    acquirerName: "바이엘 AG",
    targetName: "몬산토 컴퍼니",
    dealTitle: "몬산토 현금 합병 인수",
    dealSize: "$660억",
    dealSizeUSD: "$66.0bn",
    evEbitda: "17.5×",
    closeDate: "2018년 6월",
  },

  sources: [
    { id: 1, text: "Bayer AG (2016). Acquisition of Monsanto — Investor Presentation. September 14, 2016." },
    { id: 2, text: "Bayer AG (2018). Annual Report 2018 — Crop Science Integration Update." },
    { id: 3, text: "U.S. Department of Justice (2018). Bayer-Monsanto Merger Consent Decree. May 2018." },
    { id: 4, text: "European Commission (2018). Case M.8084 — Bayer/Monsanto. April 21, 2018." },
    { id: 5, text: "Reuters (2018). Bayer closes $63 billion Monsanto takeover. June 7, 2018." },
    { id: 6, text: "Financial Times (2019). Bayer sets aside more funds for glyphosate lawsuits. March 2019." },
    { id: 7, text: "Bloomberg (2024). Bayer Glyphosate Liability Reaches $25 Billion. 2024." },
    { id: 8, text: "S&P Global Market Intelligence (2016). Bayer-Monsanto Bridge Loan Analysis. October 2016." },
    { id: 9, text: "LSEG LPC (2018). Bayer's €57.5B Bridge Facility Refinancing Timeline. 2018." },
    { id: 10, text: "Moody's Investors Service (2018). Bayer AG Rating Downgrade — Monsanto Acquisition Impact. June 2018." },
  ],

  seo: {
    title: "바이엘 × 몬산토 인수 — €577억 신디케이티드 브리지론 완전 해부",
    description: "역사상 최대 농화학 M&A이자 최대 IG 신디케이티드 브리지론 케이스. €577억 브리지 → 18개월 리파이낸싱, 라운드업 소송 꼬리위험까지 투자은행 관점에서 완전 분석.",
    keywords: [
      "바이엘 몬산토", "신디케이티드론", "브리지론", "인수금융", "IG채권",
      "€577억", "농화학 M&A", "글리포세이트", "Roundup", "몬산토 인수",
      "Bayer Monsanto", "syndicated loan", "bridge loan", "leveraged finance",
    ],
  },

  concepts: [
    {
      term: "브리지론 (Bridge Loan)",
      href: "/market-101/syndicated-loan-overview",
      description: "딜 클로징 시 인수 대금을 단기 조달한 뒤, 영구 자본(채권·주식·자산매각)으로 전환하는 과도기적 대출. €577억 전액 브리지 약정이 이 딜의 핵심.",
    },
    {
      term: "신디케이티드론 (Syndicated Loan)",
      href: "/market-101/syndicated-loan-process",
      description: "복수의 은행이 단일 대출 약정을 분할 부담하는 구조. 바이엘 딜에서 7개 주선은행이 각각 수조 원씩 분담했다.",
    },
    {
      term: "스텝업 금리 (Step-Up Rate)",
      href: "/market-101/syndicated-loan-overview",
      description: "브리지론 만기를 앞두고 금리가 단계적으로 상승해 차주의 빠른 상환을 유도하는 조항. 바이엘 브리지론의 경우 EURIBOR+150bp → +225bp 상승.",
    },
    {
      term: "IG (Investment Grade) 인수금융",
      href: "/market-101/syndicated-loan-players",
      description: "IG 등급 기업이 활용하는 인수금융. LBO의 HY/레버리지드론과 달리 코비넌트 없음(Cov-Lite), 낮은 스프레드, 관계 중심 신디케이션이 특징.",
    },
    {
      term: "Due Diligence (실사)",
      description: "인수 전 대상 기업의 재무·법률·환경·운영 리스크를 점검하는 과정. 바이엘이 라운드업 소송 리스크를 과소 평가한 것이 이 딜의 치명적 실수.",
    },
    {
      term: "꼬리위험 (Tail Risk)",
      description: "정상 분포상 발생 가능성이 낮지만 실현 시 치명적인 리스크. 라운드업 소송 €250억+는 전형적인 법적 꼬리위험 실현 사례.",
    },
  ],

  faq: [
    {
      q: "바이엘 몬산토 인수에서 €577억 브리지론이란 무엇인가요?",
      a: "7개 주선은행(BofAML, Deutsche Bank, Goldman Sachs, HSBC, JPMorgan, Credit Suisse, Société Générale)이 €577억 규모의 단기 브리지론을 약정해 바이엘이 몬산토 인수 대금을 즉시 지불할 수 있게 한 단기 인수금융입니다. 바이엘은 이후 18개월 동안 IG채권 €19B+, 유상증자 €6B, 자산매각 €7.1B로 이를 상환했습니다.",
    },
    {
      q: "왜 바이엘의 몬산토 인수가 '최악의 M&A'로 불리나요?",
      a: "전략적 시너지($15억/년)는 달성했지만, 라운드업(글리포세이트) 제초제의 암 유발 소송 리스크를 대폭 저평가했기 때문입니다. 실제 소송 합의·판결 비용이 €250억+에 달해 인수 프리미엄을 훨씬 초과했고, 바이엘 시가총액은 인수 전 대비 70% 이상 하락했습니다.",
    },
    {
      q: "바이엘이 몬산토를 인수하기 위해 자금을 어떻게 조달했나요?",
      a: "① €577억 브리지론 약정(7개 주선은행), ② IG채권 시리즈 €19B+ 발행, ③ 유상증자 €6B, ④ BASF에 농화학 자산 매각 €7.1B 4가지 경로를 복합적으로 활용했습니다. 브리지 약정이 딜 확실성을 보장하고, 이후 영구 자본으로 전환하는 전형적인 인수금융 구조입니다.",
    },
    {
      q: "몬산토는 왜 바이엘의 인수 제안을 수락했나요?",
      a: "2015-2016년 농산물 가격 하락으로 매출이 정체된 상황에서 비영향 주가 대비 +44% 현금 프리미엄은 매력적인 조건이었습니다. 또한 라운드업 소송 잠재 리스크를 인수자(바이엘)가 부담하게 되는 구조, 그리고 시장에서 제기되던 적대적 인수 시도들을 막는 효과도 있었습니다.",
    },
    {
      q: "바이엘 몬산토 딜은 왜 승인까지 22개월이 걸렸나요?",
      a: "미국 DOJ와 EU 집행위원회가 각각 경쟁우려를 심도 있게 검토했기 때문입니다. 결국 바이엘은 종자·제초제 사업 중 겹치는 부분(11개 지역 특정 작물 보호 제품, LibertyLink 브랜드 등)을 BASF에 €71억에 매각하는 조건으로 2018년 4월 EU 승인, 5월 DOJ 동의 명령(Consent Decree)을 받았습니다.",
    },
  ],

  // ── 신디케이티드론 관점 오버레이 ─────────────────────────────
  syndicatedLoanOverview: {
    angle: "역사상 최대 IG 브리지론 — €577억이 18개월 만에 사라진 방법",
    body: "2016년 바이엘이 몬산토 인수를 발표했을 때, 7개 주선은행이 단 18개월 기한의 브리지론 €577억을 약정했다. IG 등급 기업이 이 규모의 브리지를 어떻게 영구 조달로 전환하는지, 그리고 IG채권·유상증자·자산매각이 어떤 순서로 집행되는지를 이 딜이 보여준다. 또한 딜 클로징 직후 펼쳐진 라운드업 소송 사태는 '브리지론 설계자(은행)는 왜 소송 꼬리위험을 가격에 반영하지 않는가'라는 질문을 던진다.",

    tranches: [
      {
        name: "인수 브리지론 (USD 트랑쉐)",
        amountDisplay: "~$35B",
        type: "bridge",
        arrangers: "BofAML · Deutsche Bank · Goldman · HSBC · JPMorgan · CS · SG",
        pricing: "LIBOR + 150bp → +225bp (스텝업)",
        maturity: "최대 18개월",
        pct: 62,
        color: "bg-cyan-500",
      },
      {
        name: "인수 브리지론 (EUR 트랑쉐)",
        amountDisplay: "~€21B",
        type: "bridge",
        arrangers: "BofAML · Deutsche Bank · Goldman · HSBC · JPMorgan · CS · SG",
        pricing: "EURIBOR + 150bp → +225bp (스텝업)",
        maturity: "최대 18개월",
        pct: 35,
        color: "bg-cyan-600",
      },
      {
        name: "잔존 Term Loan (리파이낸싱 후)",
        amountDisplay: "~$1B",
        type: "term-loan-a",
        arrangers: "복수 참여은행",
        pricing: "LIBOR + 100bp",
        maturity: "5년",
        pct: 3,
        color: "bg-blue-500",
      },
    ],

    arrangers: [
      { name: "Bank of America Merrill Lynch", role: "bookrunner", note: "M&A 어드바이저 겸임" },
      { name: "Deutsche Bank", role: "bookrunner", note: "바이엘 하우스뱅크, EUR 트랑쉐 주도" },
      { name: "Goldman Sachs", role: "bookrunner", note: "M&A 어드바이저 겸임" },
      { name: "HSBC", role: "mandated-lead-arranger" },
      { name: "JPMorgan", role: "mandated-lead-arranger" },
      { name: "Credit Suisse", role: "mandated-lead-arranger" },
      { name: "Société Générale", role: "mandated-lead-arranger" },
    ],

    metrics: [
      { label: "브리지론 총액", value: "€57.7B", sub: "7개 주선은행 공동 약정" },
      { label: "주선은행 수", value: "7개", sub: "북러너 3 + MLA 4" },
      { label: "브리지 만기", value: "18개월", sub: "스텝업 조항 포함" },
      { label: "영구 조달 루트", value: "4가지", sub: "채권·증자·자산매각·잔존TL" },
    ],

    timeline: [
      {
        date: "2016.09",
        event: "딜 발표 + 브리지 약정",
        detail: "바이엘이 $128/주 현금 인수 발표. 동시에 7개 주선은행이 €577억 브리지 패실리티 약정 → 딜 확실성 제공. 바이엘은 자금 없이도 계약서에 서명 가능.",
        playerImpact: "주선은행: 브리지 약정 수수료 약 €87M 수취 (0.15% × €577억). 채권자: 신용등급 하락 우려로 CDS 스프레드 확대.",
      },
      {
        date: "2016.10-12",
        event: "즉시 사전 리파이낸싱 — IG채권 + 유상증자",
        detail: "바이엘이 IG채권 €4B 발행(10월)으로 브리지 즉시 축소 개시. 이어 기존주주 대상 유상증자(Rights Issue) €6B 완료 — 주당 €97.3, 22% 할인.",
        playerImpact: "IG 채권 투자자: Baa1/BBB+ 등급의 고품질 채권 낮은 쿠폰(0.5~2%)으로 확보. 기존주주: 희석 감수 vs 농화학 시너지 기대 선택.",
      },
      {
        date: "2017",
        event: "IG채권 시리즈 €12B+ + BASF 자산매각 €7.1B",
        detail: "바이엘, 다양한 만기(3-30년) IG채권 시리즈를 연속 발행해 브리지 대부분 해소. EC 경쟁당국 조건으로 Crop Science 자산 일부를 BASF에 €71억에 매각, 그 수익도 브리지 상환에 투입.",
        playerImpact: "BASF: €71억 농화학 자산 인수로 작물보호 포트폴리오 강화. 브리지 참여은행: 원리금 + 참여 수수료 순차 회수.",
      },
      {
        date: "2018.06",
        event: "딜 클로징 — 브리지 완전 상환",
        detail: "22개월 규제 심사 끝에 딜 클로징. 잔존 브리지 IG채권으로 최종 전환. 몬산토 NYSE 상장폐지 완료. 7개 주선은행 모두 원금+이자+수수료 전액 회수 — 신용 손실 Zero.",
        playerImpact: "주선은행: 총 수수료 수입 추정 €370-530M (약정·주선·유상증자·채권 발행 수수료 합산). 신용 손실 없는 완벽한 IG 브리지 실행.",
      },
      {
        date: "2018.08",
        event: "라운드업 배심원 평결 — 꼬리위험 현실화",
        detail: "캘리포니아 배심원단, '몬산토의 라운드업이 Dewayne Johnson의 비호지킨림프종을 유발했다'는 평결. 바이엘 주가 -10% 급락. 이후 17만 건+ 집단소송으로 확산.",
        playerImpact: "채권 투자자: IG 등급 하향 우려로 크레딧 스프레드 200bp+ 확대. 주주: 2018-2024년 주가 €80 → €24, -70% 이상 손실.",
      },
      {
        date: "2020-2024",
        event: "소송 합의 확대 — 총 €250억+ 지출",
        detail: "2020년 미국 소송 합의 $109억 발표. 이후 추가 소송 지속, 총 합의·판결 €250억+ 도달. 바이엘 배당 삭감, 일부 자산 매각 강제. 신용등급 Baa1/BBB+ IG 최하위 유지 압박.",
        playerImpact: "바이엘 주주: 몬산토 인수금($660억)보다 더 큰 €700억+ 시총 파괴. 브리지론 채권자들은 이 모든 리스크와 무관 — 2018년 6월에 이미 전액 회수 완료.",
      },
    ],

    lessons: [
      {
        icon: "🏗️",
        title: "브리지론 = 딜 확실성의 값어치",
        body: "€577억 브리지는 바이엘이 IG채권 시장 타이밍에 구애받지 않고 계약서에 서명할 수 있게 한다. 브리지 없이 €57B를 먼저 채권으로 조달하려 했다면, 시장 변동성이나 규제 지연으로 딜이 무산될 리스크가 있었다. 브리지론의 경제적 가치는 '확실성의 옵션'에 있다.",
      },
      {
        icon: "⚖️",
        title: "IG 기업 신디론 vs LBO 신디론",
        body: "바이엘의 브리지는 레버리지드론과 근본적으로 다르다. 코비넌트 없음(Cov-Lite 수준), 스프레드 LIBOR+150-225bp(HY/LBO는 +350-600bp). IG 기업은 '신용 등급'이 담보이며, 주선은행들은 관계 수수료와 향후 M&A 어드바이저리 기회 때문에 참여한다. 은행에게 이 브리지는 '관계 투자'다.",
      },
      {
        icon: "📋",
        title: "리파이낸싱 루트의 다양화",
        body: "€57.7B를 단일 IG채권으로 한꺼번에 발행하는 것은 시장에 과도한 공급 충격을 준다. 바이엘이 채권 시리즈(다양한 만기), 유상증자(에쿼티 쿠션), 자산매각(강제 디레버리징) 3루트를 복합 활용한 것은 교과서적 리파이낸싱 전략이다. 루트를 분산할수록 개별 조달 비용이 낮아지고 시장 흡수 속도도 높아진다.",
      },
    ],

    relatedChapters: [
      {
        slug: "syndicated-loan-overview",
        chapterNum: "Ch.1",
        title: "신디케이티드론 개요",
        whyRelevant: "€57.7B 브리지 약정 — IG 기업 신디론의 구조적 특징과 레버리지드론과의 차이",
      },
      {
        slug: "syndicated-loan-process",
        chapterNum: "Ch.3",
        title: "신디론 프로세스",
        whyRelevant: "딜 발표 → 18개월 브리지 → 영구 조달 전환의 실제 실행 로드맵",
      },
      {
        slug: "syndicated-loan-players",
        chapterNum: "Ch.2",
        title: "플레이어 구조",
        whyRelevant: "7개 주선은행의 역할 분담(북러너/MLA), 수수료 구조, 관계금융 실사례",
      },
      {
        slug: "syndicated-loan-cases",
        chapterNum: "Ch.5",
        title: "주요 사례 분석",
        whyRelevant: "역사상 최대 IG 브리지론 케이스 — 브리지 성공 vs 소송 꼬리위험",
      },
    ],
  },
};

export default deal;
