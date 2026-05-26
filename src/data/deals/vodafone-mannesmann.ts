/**
 * Vodafone × Mannesmann 적대적 인수합병
 * 역대 최대 적대적 공개매수 — $1,830억 (주식교환), 2000년 4월 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "vodafone-mannesmann",
  title: "보다폰은 어떻게 $1,830억으로 만네스만을 적대적 인수했나 — 역대 최대 적대적 M&A 해부",
  subtitle: "Chris Gent vs. Klaus Esser · 독일 공동결정제의 한계 · 닷컴 버블과 유럽 통신 패권 전쟁",
  category: "ma",
  industry: "통신·이동통신 / Telecommunications",
  country: "영국·독일",
  announcedAt: "1999-11-14",
  closedAt: "2000-04-12",
  announcedDisplay: "1999년 11월",
  closedDisplay: "2000년 4월",
  readingMinutes: 12,
  tags: ["보다폰", "만네스만", "적대적 인수합병", "유럽 통신", "닷컴 버블", "최대 적대적 M&A"],
  excerpt:
    "Vodafone AirTouch가 독일 만네스만을 $1,830억(전액 주식교환)에 적대적으로 인수한 2000년 딜은 역대 최대 적대적 공개매수로 기록됐다. CEO Chris Gent와 Klaus Esser의 대결, 독일 공동결정제(Mitbestimmung)의 한계, 97%의 주주 동의. 닷컴 버블의 정점에서 완성된 유럽 통신 제국의 탄생과 그 후의 붕괴를 완전 해부한다.",

  acquirer: { initials: "VOD", bg: "bg-red-600", label: "Vodafone AirTouch" },
  target: { initials: "MAN", bg: "bg-gray-700", label: "Mannesmann AG" },

  background: [
    "1999년 유럽 통신 시장은 닷컴 버블의 정점에서 광란의 팽창을 거듭하고 있었다. Vodafone은 1999년 초 미국 AirTouch와 합병해 Vodafone AirTouch로 출범하면서 유럽 최대 이동통신사의 지위를 노리고 있었다. CEO Chris Gent의 목표는 명확했다 — 영국, 독일, 이탈리아를 잇는 유럽 최대 GSM 네트워크 제국을 건설하는 것. 그 퍼즐의 가장 중요한 조각이 독일 이동통신 시장 1위인 Mannesmann D2였다.",
    "Mannesmann AG는 원래 19세기 말 철강·기계 기업으로 출발했지만, 1990년대 독일 이동통신 규제 완화의 물결을 타고 D2 네트워크로 통신 시장에 진입해 눈부신 전환에 성공한 기업이었다. CEO Klaus Esser의 지휘 하에 Mannesmann은 영국 통신사 Orange까지 인수하며 범유럽 통신 기업으로 성장했다. 이 Orange 인수가 아이러니하게도 Vodafone의 적대적 공개매수를 촉발하는 도화선이 됐다. Vodafone은 이미 Mannesmann 지분을 약 35% 보유하고 있었고, Mannesmann의 Orange 인수는 Vodafone이 자신의 파트너가 경쟁자로 변신하는 것을 용납할 수 없었다.",
    "Vodafone의 첫 공개매수 제안(1999년 11월)을 Mannesmann 이사회는 즉각 거부했다. Klaus Esser는 독일 감독이사회(Aufsichtsrat) 제도와 노동자 공동결정제(Mitbestimmung)를 방패로 삼아 강력히 저항했다. 감독이사회의 절반을 노동자 대표(IG Metall 노조 지도자 Klaus Zwickel 포함)가 차지하는 독일 특유의 지배구조는 Vodafone에게 거대한 구조적 장벽으로 보였다. 독일 정계도 가세해 해외 기업의 독일 대기업 적대적 인수에 반대하는 정치적 압력을 가했다.",
    "그러나 결국 주주들이 결정을 내렸다. Vodafone이 지속적으로 교환 비율을 개선하고 Mannesmann 주주들에게 합병 후 글로벌 통신 제국의 성장 스토리를 설득하자, IG Metall의 Klaus Zwickel마저 입장을 바꿨다. 2000년 2월 3일, Mannesmann 주주의 97%가 Vodafone의 주식교환 제안에 동의하면서 적대적 공개매수 역사상 가장 극적인 결말이 완성됐다. 2000년 4월 딜이 최종 마무리됐으며, 이와 함께 닷컴 버블의 정점도 막을 내렸다.",
  ],

  dealSummary: {
    dealValueDisplay: "$1,830억 (전액 주식교환)",
    acquirerName: "Vodafone AirTouch plc",
    targetName: "Mannesmann AG",
    announcedDisplay: "1999년 11월",
    closedDisplay: "2000년 4월",
    country: "영국·독일",
  },

  executiveSummary: [
    "$1,830억 전액 주식교환 — 역대 최대 적대적 공개매수, 당시 역대 최대 M&A 중 하나",
    "핵심 충돌: Mannesmann의 Orange 인수가 Vodafone을 경쟁자로 만들자 Chris Gent가 적대적 공개매수로 응수",
    "독일 공동결정제(Mitbestimmung)의 방패 — 감독이사회 노동자 대표 Klaus Zwickel이 끝내 Vodafone 지지로 선회",
    "주주 97% 동의 — 높은 프리미엄과 글로벌 성장 스토리가 방어 논리를 압도",
    "후폭풍: Esser 등 €5,700만 특별 퇴직금 → 독일 배임죄 형사 재판 → 최종 화해로 종결",
    "2001년 Orange 프랑스 텔레콤에 £300억 매각, 2002년 €220억 감손 — 통신 버블 붕괴",
    "그럼에도 Vodafone은 유럽 최대 통신사 지위를 현재까지 유지",
  ],

  industryOverview: {
    body: "1999~2000년 유럽 이동통신 시장은 GSM 표준 보급 확산과 닷컴 버블이 맞물리며 전례 없는 팽창기를 맞이했다. 통신사들은 3G(UMTS) 주파수 경매에 수백억 달러를 쏟아부으며 '모바일 인터넷 시대'의 패권을 선점하려 했다. 투자자들은 통신사 주식을 미래 성장의 상징으로 보고 기꺼이 수십 배의 멀티플을 지불했다. 이 광풍의 정점에서 Vodafone-Mannesmann 딜이 탄생했다 — $1,830억이라는 역대 최대 규모의 적대적 공개매수가 닷컴 버블의 화신이었다.",
    metrics: [
      { label: "딜 규모", value: "$1,830억", sub: "역대 최대 적대적 공개매수 (2000년 기준)" },
      { label: "EV / EBITDA (추정)", value: "약 30x+", sub: "버블 프리미엄 — 정상 멀티플의 2~3배" },
      { label: "주주 동의율", value: "97%", sub: "Mannesmann 주주 대상 공개매수 응모율" },
      { label: "유럽 GSM 가입자 (2000년)", value: "약 2억 명", sub: "급속 증가 중, 3G 전환 논의 시작" },
    ],
    subBody: "1999~2000년 유럽 통신 시장은 규제 완화, GSM 확산, 3G 기대감이 겹치며 초고속 팽창 중이었다. 통신사 간 인수합병 경쟁이 치열했고, 주가는 수익과 무관하게 '시장 지위'와 '가입자 수'로만 평가받았다. 이 시장 논리가 $1,830억이라는 기록적 밸류에이션을 가능케 했지만, 동시에 2001~2002년 버블 붕괴의 씨앗이었다.",
    players: [
      { name: "Vodafone AirTouch", role: "영국 이동통신 1위, 유럽 통신 제국 추구, 인수자" },
      { name: "Mannesmann AG", role: "독일 D2 네트워크 + Orange 보유, 유럽 통신 2위권" },
      { name: "Deutsche Telekom", role: "독일 최대 통신사, Mannesmann의 국내 경쟁자" },
      { name: "France Telecom", role: "Orange를 최종 인수 (2001년, £300억)" },
      { name: "BT Group", role: "영국 최대 통신사, 유럽 통신 경쟁 참여" },
    ],
  },

  companyOverview: {
    targetName: "Mannesmann AG",
    body: "Mannesmann AG는 1890년 독일에서 철강 파이프 제조사로 설립돼 자동차 부품·엔지니어링 분야의 강자로 성장한 전통 산업 기업이었다. 1990년대 독일 이동통신 시장 자유화를 기회로 삼아 D2 이동통신 네트워크를 구축하며 통신 기업으로 劇的 전환에 성공했다. 1999년 CEO Klaus Esser의 주도 하에 영국 통신사 Orange를 인수하며 범유럽 통신 플레이어로 도약했으나, 이 Orange 인수가 Vodafone의 적대적 공개매수를 촉발했다. 철강 기업에서 통신 제국으로의 전환은 당대 기업 변신의 가장 극적인 사례 중 하나로 기록된다.",
    metrics: [
      { label: "설립연도", value: "1890년", sub: "철강 파이프 제조사 → 통신 기업으로 전환" },
      { label: "D2 가입자", value: "독일 이동통신 1위", sub: "1999년 기준" },
      { label: "매출 (1999년 추정)", value: "약 €230억", sub: "단위: 억유로" },
      { label: "EBITDA (1999년 추정)", value: "약 €50억", sub: "EV/EBITDA 약 30x+ (버블 프리미엄)" },
      { label: "주요 자산", value: "D2(독일), Orange(영국), Omnitel(이탈리아)", sub: "범유럽 통신 포트폴리오" },
    ],
    financials: [
      { year: "1999", revenue: 230, cogs: 120, grossProfit: 110, sga: 40, operatingIncome: 25, ebitda: 50 },
    ],
    financialsNote: "단위: 억유로(EUR). 수치는 공개 보고서 및 업계 추정치 기반. Mannesmann은 철강·자동차 부품·통신 복합 기업이었으며, 위 수치는 그룹 전체 추정치입니다.",
    financialsCurrency: "EUR",
    financialsUnit: "억",
  },

  dealStructure: {
    body: "Vodafone의 공개매수는 전액 주식교환(all-stock) 방식으로 설계됐다. 이는 닷컴 버블로 Vodafone의 시가총액이 천문학적 수준이었던 덕에 현금 없이도 $1,830억 규모의 거래를 구성할 수 있었기 때문이다. Mannesmann 주주들은 보유 주식을 Vodafone 신주와 교환받았으며, 교환 비율은 협상 과정에서 반복적으로 상향됐다. 적대적 공개매수 특성상 Mannesmann 이사회의 동의 없이 주주들에게 직접 공개매수를 제안하는 방식을 취했다. 독일 감독이사회의 구조적 방어에도 불구하고 주주 97%가 응모하면서 Vodafone이 경영권을 획득했다.",
    preOwnership: {
      nodes: [
        { id: "vodafone", label: "Vodafone AirTouch plc", sub: "LSE·NYSE 상장", type: "acquirer" },
        { id: "mannesmann", label: "Mannesmann AG", sub: "프랑크푸르트 증권거래소 상장", type: "target" },
        { id: "mannesmann_shareholders", label: "Mannesmann 주주단", sub: "기관·개인 투자자, 분산 지배구조", type: "entity" },
        { id: "orange", label: "Orange plc", sub: "Mannesmann 자회사 (영국 이동통신)", type: "entity" },
      ],
      edges: [
        { from: "mannesmann_shareholders", to: "mannesmann", label: "주주 지배" },
        { from: "mannesmann", to: "orange", label: "인수 (1999년)" },
        { from: "vodafone", to: "mannesmann", label: "적대적 공개매수 제안" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "vodafone_parent", label: "Vodafone Group plc", sub: "LSE·NYSE 상장, 유럽 최대 통신사", type: "acquirer" },
        { id: "d2", label: "Mannesmann D2", sub: "독일 이동통신 (Vodafone 완전 자회사)", type: "target" },
        { id: "omnitel", label: "Omnitel", sub: "이탈리아 이동통신 (Vodafone 자회사)", type: "entity" },
        { id: "orange_sold", label: "Orange plc", sub: "France Telecom에 매각 (2001년, £300억)", type: "entity" },
      ],
      edges: [
        { from: "vodafone_parent", to: "d2", label: "100% 보유" },
        { from: "vodafone_parent", to: "omnitel", label: "지배 지분" },
        { from: "vodafone_parent", to: "orange_sold", label: "2001년 매각" },
      ],
    },
    keyTerms: [
      { label: "딜 규모", value: "$1,830억 (전액 주식교환)", accent: true },
      { label: "거래 형태", value: "적대적 공개매수 (Hostile Takeover) — 전액 주식교환", accent: true },
      { label: "교환 비율", value: "Mannesmann 1주당 Vodafone 신주 58.96주", accent: false },
      { label: "인수 프리미엄", value: "최종 제안 기준 약 50%+", accent: true },
      { label: "주주 응모율", value: "97%", accent: false },
      { label: "EV / EBITDA", value: "약 30x+ (버블 프리미엄)", accent: true },
      { label: "규제 조건", value: "EU: Orange 매각 요건", accent: false },
      { label: "Orange 매각", value: "France Telecom에 £300억 (2001년)", accent: false },
      { label: "거래 완료일", value: "2000년 4월 12일", accent: false },
    ],
  },

  advisors: {
    body: "역대 최대 적대적 공개매수답게 Goldman Sachs, Merrill Lynch, Morgan Stanley 등 월가·런던 최상위 투자은행이 총동원됐다. Vodafone의 Goldman Sachs는 교환 비율 설계와 주주 설득 전략을 주도했고, Mannesmann의 Merrill Lynch·Morgan Stanley 팀은 방어 가치 산정과 화이트나이트 탐색을 담당했다. 결국 방어 측 어드바이저도 주주 97%의 선택 앞에서 딜을 막을 수 없었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "공개매수 측 (Vodafone)",
        initials: "VOD",
        bg: "bg-red-600",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (수석)", roleType: "financial", note: "교환 비율 설계, 주주 설득 전략 총괄" },
          { firm: "Warburg Dillon Read (UBS)", role: "재무 자문 (공동)", roleType: "financial", note: "공동 자문, 유럽 딜 네트워크 활용" },
          { firm: "Freshfields Bruckhaus Deringer", role: "법률 자문", roleType: "legal", note: "영국·독일 법률 대응, 공개매수 구조 설계" },
        ],
      },
      {
        side: "target",
        sideLabel: "방어 측 (Mannesmann)",
        initials: "MAN",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Merrill Lynch", role: "재무 자문 (수석)", roleType: "financial", note: "방어 가치 산정, 화이트나이트 탐색" },
          { firm: "Morgan Stanley", role: "재무 자문 (공동)", roleType: "financial", note: "독립 가치 분석, 주주 대응 전략" },
          { firm: "Hengeler Mueller", role: "법률 자문 (독일)", roleType: "legal", note: "독일 감독이사회·공동결정제 활용 방어" },
          { firm: "Slaughter and May", role: "법률 자문 (영국)", roleType: "legal", note: "영국 Orange 관련 법률 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 통설 기반입니다.",
  },

  valuation: {
    body: "$1,830억이라는 딜 가치는 Mannesmann의 펀더멘털로는 정당화하기 어려운 수준이었다. EV/EBITDA 약 30배+는 닷컴 버블 당시 통신사에 부여된 비정상적 프리미엄의 산물로, 시장이 '가입자 수 성장'과 '미래 3G 인터넷 수익'에 대한 극도로 낙관적인 기대를 반영한 것이었다. Vodafone 역시 주식교환 방식이었기에 현금 비용 없이 자신의 버블 주가로 거래를 완성할 수 있었다 — 즉, 버블로 버블을 샀다.",
    rows: [
      { item: "딜 EV", val: "$1,830억", note: "전액 Vodafone 신주 교환", accent: true },
      { item: "인수 프리미엄", val: "약 50%+", note: "최초 제안 대비 지속 상향, 최종 기준" },
      { item: "Mannesmann EBITDA (1999E)", val: "약 €50억", note: "공개 보고서 및 추정치" },
      { item: "EV / EBITDA", val: "약 30x+", note: "닷컴 버블 통신사 멀티플 — 정상 대비 2~3배", accent: true },
      { item: "거래 방식", val: "전액 주식교환 (All-Stock)", note: "Vodafone 현금 지출 없음 — 버블 주가 활용" },
      { item: "Orange 매각 (2001년)", val: "£300억", note: "France Telecom — EU 규제 조건 충족" },
      { item: "2002년 감손", val: "약 €220억", note: "통신 버블 붕괴 이후 자산 상각" },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 업계 추정치 기반입니다. 닷컴 버블 시기의 통신사 밸류에이션은 전통적 재무 분석으로 정당화가 어려운 시대적 특수성이 있었습니다.",
  },

  rationale: {
    buyer: {
      title: "Vodafone의 공개매수 논리",
      initials: "VOD",
      bg: "bg-red-600",
      points: [
        "유럽 통신 패권 — 영국(Vodafone) + 독일(D2) + 이탈리아(Omnitel) 통합으로 유럽 최대 GSM 네트워크 완성",
        "Mannesmann의 Orange 인수 차단 — Vodafone 자신이 Orange를 통해 Mannesmann에 간접 지분을 보유하고 있었으며, Mannesmann이 경쟁자로 변신하는 것을 용납할 수 없었음",
        "3G 시대 선점 — 독일·이탈리아 주파수 기반을 확보해 유럽 3G 네트워크의 핵심 인프라 구축",
        "규모의 경제 — 통합 네트워크·로밍 협정·부품 구매에서 대규모 비용 절감 실현",
        "주식교환의 기회 — 닷컴 버블로 Vodafone 주가가 극도로 고평가된 상황에서, 자사 주식을 '통화'로 활용해 현금 없이 역대급 딜 성사",
      ],
    },
    seller: {
      title: "Mannesmann 주주의 응모 논리 (97%)",
      initials: "MAN",
      bg: "bg-gray-700",
      points: [
        "높은 프리미엄 + 버블 기대 — 50%+ 즉각적 프리미엄과 합병 후 성장 스토리, Vodafone 주식을 통한 상승 참여 기회",
        "Klaus Esser 방어 실패 — 독일 감독이사회·공동결정제의 방어 전략이 최종적으로 주주 의사를 막지 못함",
        "IG Metall의 입장 전환 — 노조 지도자 Klaus Zwickel이 결국 주주 이익을 우선시해 Vodafone 지지로 전환",
        "화이트나이트 부재 — Mannesmann이 탐색한 대안적 파트너가 $1,830억 수준의 경쟁 입찰을 내놓지 못함",
        "닷컴 버블의 낙관론 — 2000년 초 시장 분위기에서 통신 제국의 미래를 의심하는 주주는 소수였음",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "합병 완료 직후 닷컴 버블이 붕괴했다. Vodafone은 2001년 EU 규제 조건으로 Orange를 France Telecom에 £300억에 매각했고, 2002년 Mannesmann 자산에 대해 약 €220억의 대규모 감손을 처리했다. 역대 최대 규모의 영업권(Goodwill) 상각이었다. Mannesmann CEO Klaus Esser를 포함한 경영진이 €5,700만의 특별 퇴직금을 수령한 사실이 알려지면서 독일에서 배임죄(Untreue) 형사 재판으로 이어졌으나, 2006년 최종 화해로 종결됐다. 그럼에도 Vodafone은 독일·이탈리아·영국을 아우르는 유럽 최대 통신사 지위를 확보했고, 이 기반은 20년이 지난 현재까지도 유지되고 있다.",
    overallVerdict: "통신 버블 최고점에서 완성된 역대 최대 적대적 M&A — 단기 감손·스캔들에도 유럽 통신 패권이라는 전략적 목표는 달성",
    positives: [
      "유럽 최대 통신사 지위 확보 — 독일·이탈리아·영국 GSM 네트워크 통합, 현재까지 유지",
      "적대적 공개매수의 가능성 입증 — 독일 공동결정제라는 구조적 장벽도 주주 의사 앞에 무력화됨을 실증",
      "범유럽 로밍·네트워크 규모 경제 실현 — 통합 인프라 비용 절감 달성",
      "전략적 선점 — 2G→3G 전환기 유럽 핵심 주파수 기반 확보",
    ],
    risks: [
      "2002년 €220억 감손 — 역대 최대 Goodwill 상각, 버블 가격으로 인수한 대가",
      "Esser 퇴직금 스캔들 — €5,700만 특별 퇴직금 → 독일 배임죄 형사 재판 (2006년 화해)",
      "Orange 2001년 매각 — EU 조건 충족을 위한 핵심 자산 분리, 사전 계획된 매각이었으나 수익성 손실",
      "통신 버블 붕괴 — 3G 투자 과잉, 주가 장기 침체, 통신 업계 전반의 구조 조정 파고",
      "과도한 대형화 — 이후 Vodafone의 복잡한 포트폴리오 관리, 사업부 분리·매각 반복 — 딜의 유산이 부담으로 작용",
    ],
    editorNote: "'역대 최대 적대적 M&A'는 버블의 산물인 동시에, 그 버블이 꺼진 이후에도 살아남은 전략의 결과물이다. $1,830억이라는 가격표는 분명 비정상이었지만, 독일·이탈리아를 통합한 범유럽 통신 네트워크라는 결과물은 Vodafone에게 20년 이상의 경쟁 우위를 선사했다. 이 딜이 가르쳐주는 것 — 적대적 공개매수에서 최후의 심판자는 이사회도, 노조도, 정치권도 아닌 주주다.",
  },

  tombstone: {
    acquirerInitials: "VOD",
    acquirerBg: "bg-red-600",
    targetInitials: "MAN",
    targetBg: "bg-gray-700",
    acquirerName: "Vodafone AirTouch plc",
    targetName: "Mannesmann AG",
    dealTitle: "역대 최대 적대적 공개매수 / Largest-Ever Hostile Takeover",
    dealSize: "$1,830억 (주식교환)",
    dealSizeUSD: "USD 183 Billion (all-stock)",
    evEbitda: "약 30x+ (버블 프리미엄)",
    closeDate: "Apr 2000",
  },

  sources: [
    { id: 1, text: "Vodafone AirTouch — Offer Document for Mannesmann AG (November 1999)" },
    { id: 2, text: "Financial Times — Vodafone Wins Mannesmann Battle (February 2000)" },
    { id: 3, text: "Bloomberg — Vodafone Agrees to Buy Mannesmann for $183 Billion (February 2000)" },
    { id: 4, text: "The Economist — The World's Biggest Takeover (February 2000)" },
    { id: 5, text: "Der Spiegel — Mannesmann-Prozess: Die Milliarden-Abfindung (2004)" },
    { id: 6, text: "Landgericht Düsseldorf — Mannesmann Criminal Trial Verdict and Settlement (2006)" },
    { id: 7, text: "Vodafone Annual Report 2002 — Goodwill Impairment Disclosure" },
  ],

  seo: {
    title: "보다폰-만네스만 합병 완전 분석 — $1,830억 역대 최대 적대적 M&A",
    description: "Vodafone이 Mannesmann을 $1,830억에 적대적 인수한 역대 최대 적대적 M&A 완전 분석. 독일 공동결정제 방어, 주주 97% 동의, 닷컴 버블과 후폭풍까지 완전 해부.",
    keywords: [
      "보다폰 만네스만 합병",
      "역대 최대 적대적 M&A",
      "Vodafone Mannesmann hostile takeover",
      "독일 공동결정제 Mitbestimmung",
      "닷컴 버블 M&A",
    ],
  },

  concepts: [
    { term: "적대적 공개매수 (Hostile Takeover)", href: "/deal-101/hostile-takeover", description: "대상 기업 이사회의 동의 없이 주주들에게 직접 주식 매수를 제안해 경영권을 확보하는 M&A 방식" },
    { term: "독일 공동결정제 (Mitbestimmung)", href: "/deal-101/mitbestimmung", description: "독일 감독이사회 절반을 노동자 대표가 차지하는 독일 특유의 기업 지배구조 — 적대적 M&A 방어 수단으로 활용됨" },
    { term: "통신 버블 (Telecom Bubble)", href: "/deal-101/telecom-bubble", description: "1999~2001년 GSM·3G 기대감과 닷컴 열풍이 결합해 통신사 주가를 펀더멘털과 무관하게 폭등시킨 자산 버블" },
  ],

  faq: [
    {
      q: "Vodafone이 Mannesmann을 적대적으로 인수하게 된 직접적 계기는?",
      a: "가장 직접적인 계기는 Mannesmann의 영국 통신사 Orange 인수였습니다. Vodafone은 이미 Mannesmann과 파트너 관계에 있었고 간접 지분을 보유하고 있었는데, Mannesmann이 Orange를 인수하면서 영국 시장에서 직접적인 경쟁자로 변신하게 됐습니다. Vodafone CEO Chris Gent는 이를 용납할 수 없다고 판단하고, 이사회 동의 없이 Mannesmann 주주에게 직접 공개매수를 제안하는 적대적 방식을 선택했습니다. '내 파트너가 내 경쟁자가 됐다' — 이 한 문장이 $1,830억 딜의 출발점이었습니다.",
    },
    {
      q: "독일 공동결정제(Mitbestimmung)란 무엇이고 왜 방어에 실패했나?",
      a: "독일 공동결정제는 2,000명 이상 직원을 보유한 대기업의 감독이사회(Aufsichtsrat) 절반을 노동자 대표로 구성해야 하는 독일 특유의 지배구조 제도입니다. Mannesmann의 경우 IG Metall 노조 지도자 Klaus Zwickel이 감독이사회에서 노동자 측 리더였으며, 초반에는 Vodafone의 적대적 인수에 강력히 반대했습니다. 그러나 Vodafone이 지속적으로 교환 비율을 개선하고 합병 후 성장 스토리를 설득하자, 결국 Zwickel이 입장을 바꿔 딜을 지지했습니다. 제도적 방어는 주주 97%의 응모 의사 앞에서 결국 무력화됐습니다.",
    },
    {
      q: "Klaus Esser 배임 재판은 무엇이었나?",
      a: "합병 완료 직후 Klaus Esser를 비롯한 Mannesmann 경영진이 총 €5,700만에 달하는 특별 퇴직금(Appreciation Award)을 받은 사실이 알려지면서 독일에서 큰 논란이 일었습니다. 독일 검찰은 이를 주주 자산을 부당하게 유출한 배임죄(Untreue)로 보고 형사 소추를 제기했습니다. Esser와 감독이사회 의장 Josef Ackermann(Deutsche Bank CEO) 등이 피고로 섰으나, 2006년 법원이 화해(Settlement)를 승인하며 형사 처벌 없이 종결됐습니다. 이 재판은 독일 기업 지배구조 역사에서 가장 주목받은 사건 중 하나입니다.",
    },
    {
      q: "결과적으로 이 딜은 성공이었나 실패였나?",
      a: "이분법으로 평가하기 어려운 딜입니다. 재무적으로는 2002년 €220억 감손이라는 막대한 손실을 기록했고, 이는 버블 가격으로 자산을 인수한 필연적 결과였습니다. 그러나 전략적으로는 Vodafone이 목표로 한 유럽 최대 통신사 지위를 달성했고, 이 지위는 현재까지 20년 이상 유지되고 있습니다. '가격은 틀렸지만 전략은 맞았다'는 평가가 가능합니다. M&A 역사에서 이 딜은 '버블 시대의 전략적 M&A는 어떻게 평가해야 하는가'라는 질문을 가장 극적으로 제기한 사례로 남아 있습니다.",
    },
  ],
};

export default deal;
