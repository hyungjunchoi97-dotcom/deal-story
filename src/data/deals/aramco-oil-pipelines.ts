/**
 * Saudi Aramco × EIG-led Consortium / Aramco Oil Pipelines Company
 * $12.4B 25년 throughput-based sale-and-leaseback / 파이프라인 증권화, 2021년 6월
 * 사우디 국영 석유사가 운영권을 유지한 채 미래 수송료를 선매각한 메가딜.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "aramco-oil-pipelines",
  title: "Aramco가 파이프라인을 팔지 않고 124억 달러를 만든 방법, 25년 throughput을 EIG에 선매각하다",
  subtitle:
    "사우디 아람코의 원유 파이프라인 SPV 카브아웃 · EIG 컨소시엄 49% · 51% 운영권은 그대로 · 25년 tariff lease-back · 한 번에 USD 12.4B 현금화한 파이프라인 증권화의 결정판",
  category: "ma",
  industry: "Energy / Midstream Infrastructure",
  country: "사우디아라비아",
  announcedAt: "2021-04-09",
  closedAt: "2021-06-18",
  announcedDisplay: "2021년 4월 9일 (계약 체결 발표)",
  closedDisplay: "2021년 6월 18일 (납입·클로징 완료)",
  readingMinutes: 16,
  tags: [
    "Sale-and-Leaseback",
    "Aramco",
    "EIG",
    "Mubadala",
    "Pipeline",
    "Midstream",
    "Infrastructure",
    "Vision 2030",
    "Throughput Tariff",
    "Asset Securitization",
    "SPV Carveout",
  ],
  excerpt:
    "2021년 4월 9일 사우디 아람코가 [EIG Global Energy Partners-주도 컨소시엄]에 신설 자회사 [Aramco Oil Pipelines Company]의 지분 49%를 USD 12.4B(약 16조 원)에 매각한다고 발표했고, 같은 해 6월 18일 클로징이 완료됐다. 핵심은 단순 지분 매각이 아니다, 아람코는 자기 파이프라인의 [25년간 사용권]을 신설 SPV에 양도한 뒤 [동일 파이프라인을 자기가 다시 임차해서 throughput-based tariff(barrel당 수송료)를 분기마다 25년간 지급]하는 구조를 짰다. 파이프라인 자체의 소유권과 운영권은 아람코가 그대로 유지. EIG 컨소시엄은 [25년 분량의 미래 수송료]를 선불로 산 셈이고, 아람코는 [Vision 2030 자금 124억 달러]를 한 번에 현금화했다. 2019년 ADNOC × BlackRock·KKR 거래를 그대로 확장한 [걸프 국영 석유사의 파이프라인 증권화 표준 모델].",

  acquirer: { initials: "EIG", bg: "bg-emerald-700", label: "EIG-led Consortium (EIG · Mubadala · Silk Road Fund · Samsung AM · Hassana)" },
  target: { initials: "AOP", bg: "bg-amber-700", label: "Aramco Oil Pipelines Company (신설 SPV, 49% 지분)" },

  background: [
    "사우디 아람코는 세계 최대 석유 생산기업이다. 일일 원유 생산 capacity 약 1,200만 배럴, 2020년 IPO 당시 시가총액 약 USD 1.7T로 세계 최대 상장사로 등극했다. 아람코의 핵심 운영 인프라 중 하나가 [stabilized crude oil pipeline network], 사우디 동부 유전(Ghawar·Safaniya 등)에서 동부 해안 수출 터미널(Ras Tanura·Jubail)과 정유시설로 원유를 흘려보내는 백본 망. 사실상 사우디 석유 수출의 모든 배럴이 이 파이프라인을 통과한다.",
    "[Vision 2030, 사우디의 다각화 압력.] 2016년 무함마드 빈 살만 왕세자가 발표한 Vision 2030은 사우디 경제의 석유 의존도를 줄이고 PIF(공공투자펀드) 주도로 신산업·관광·테크에 투자하겠다는 국가 전략. 핵심 자금원은 아람코의 IPO·배당·자산 모네타이제이션. 2019년 12월 IPO로 약 USD 25.6B를 조달했지만 추가 자금 수요가 계속 컸고, 그렇다고 본업인 [석유 생산능력·운영권]을 외부에 넘길 수는 없었다. 해법은 [본업은 그대로 두고 인프라의 미래 현금흐름만 선매각하는 구조], 이것이 본 거래의 정치적·재정적 배경.",
    "[2019년 ADNOC가 만든 템플릿.] 이미 2019년 2월 UAE 국영 석유사 ADNOC가 18개 파이프라인의 23년 lease usage rights를 BlackRock·KKR 컨소시엄에 매각해 USD 4B+를 조달한 선례가 있었다(이후 GIC·ADRPBF 합류로 USD 4.9B까지 확장). 사우디는 이 [걸프 국영 석유사의 파이프라인 증권화 모델]을 그대로 확장·복제했다. 차이는 규모, ADNOC는 USD 4~5B 수준, 아람코는 USD 12.4B로 단번에 세계 최대급 인프라 사모거래로 올라섰다.",
    "[왜 EIG였나.] EIG Global Energy Partners는 1982년 설립된 미국 워싱턴 D.C. 기반의 에너지·인프라 전문 사모펀드로, 운용 자산 USD 22B+ 중 대부분이 글로벌 에너지 인프라에 배분돼 있다. 메가 인프라 채무·구조화·신디케이션에 강한 운용사. EIG는 본 거래를 [Pearl Pipelines Limited]라는 신설 인수 vehicle을 통해 주도했고, 그 위에 글로벌 LP들을 끌어들여 컨소시엄을 구성했다. 최종 참여 LP는 Mubadala(UAE 국부펀드), Silk Road Fund(중국 국부펀드), Samsung Asset Management(한국 자산운용사), Hassana Investment Company(사우디 GOSI 연기금) 등으로 [중국·UAE·한국·사우디·미국] 5개국 자본이 한 컨소시엄에 묶였다.",
    "2021년 4월 9일 아람코와 EIG가 계약 체결을 공식 발표했고, 같은 해 [6월 18일] 클로징이 완료됐다. 클로징 시점에 아람코는 USD 12.4B의 upfront cash를 일시에 수령했고, EIG 컨소시엄은 신설 SPV [Aramco Oil Pipelines Company] 지분 49%를 보유하게 됐다. 이로써 아람코의 stabilized crude oil pipeline network는 25년간 동일한 운영자(아람코) 손에서 동일하게 굴러가되, 그 위로 흐르는 매 배럴의 수송료 49%가 외부 컨소시엄에 귀속되는 [duo-layer 구조]가 만들어졌다.",
  ],

  dealSummary: {
    dealValueDisplay: "USD 12.4B (약 16조 원)",
    acquirerName: "EIG-led Consortium (EIG · Mubadala · Silk Road Fund · Samsung AM · Hassana 등)",
    targetName: "Aramco Oil Pipelines Company 지분 49% (신설 SPV)",
    announcedDisplay: "2021년 4월 9일",
    closedDisplay: "2021년 6월 18일",
    country: "SA",
  },

  executiveSummary: [
    "[세계 최대급 인프라 사모거래] 사우디 아람코가 신설 자회사 Aramco Oil Pipelines Company 지분 49%를 EIG-주도 컨소시엄에 USD 12.4B에 매각 (2021.04.09 발표 → 2021.06.18 클로징)",
    "[Sale-and-Leaseback 구조] 아람코는 자기 stabilized crude oil pipeline network의 [25년간 사용권]을 신설 SPV에 양도, SPV는 동일 파이프라인을 아람코에 다시 임대, 아람코는 SPV에 분기마다 [throughput-based tariff(barrel당 수송료)]를 25년간 지급",
    "[파이프라인 자체 소유권·운영권은 아람코 100% 유지] EIG 컨소시엄은 SPV 지분 49%의 [재무 권리(tariff 수익)]만 보유, 파이프라인의 운영·관리·증설·축소 결정은 전부 아람코",
    "[최소 throughput floor 보장] tariff는 barrel당 정액으로 산정되며, 일일 처리량에 최소 보장(minimum volume commitment) 조항이 붙어 25년간 수익이 사실상 사우디 국가 신용으로 backed",
    "[EIG 컨소시엄 구성] EIG(미국 PE, 리드) + Mubadala(UAE 국부펀드) + Silk Road Fund(중국 국부) + Samsung Asset Management(한국) + Hassana Investment Company(사우디 GOSI 연기금), 5개국 자본 합류",
    "[EIG의 인수금융, USD 11.2B 채권 시장 신디케이션] EIG는 인수 vehicle Pearl Pipelines Limited를 통해 acquisition debt facility를 일으켰고, 2021년 후반 [USD 11.2B 규모 senior secured 채권/론 리파이낸싱]을 완료, 사우디 국가 신용에 사실상 연동된 인프라 채무 상품으로 글로벌 채권 시장에서 흥행",
    "[Vision 2030 자금원] 아람코가 받은 USD 12.4B는 사우디 정부·PIF의 다각화·신산업·NEOM 등 Vision 2030 프로젝트로 흘러감, 본업(원유 생산능력) 매각 없이 미래 인프라 수송료만 선현금화한 거래",
    "[2019 ADNOC 거래의 확장판] UAE ADNOC가 2019년 BlackRock·KKR에 18개 파이프라인 23년 lease를 USD 4B+로 매각한 모델을 사우디가 그대로 확장 복제, 이후 2021년 12월 아람코 본인이 가스 파이프라인에 동일 구조로 USD 15.5B 거래(BlackRock·Hassana 컨소시엄)를 한 번 더 실행",
  ],

  industryOverview: {
    body: "걸프 국영 석유사(NOC)의 [파이프라인 증권화]는 2019년 ADNOC × BlackRock·KKR 거래로 시작돼 2021년 아람코의 두 차례 메가딜로 산업 표준으로 자리잡은 미드스트림 사모거래 카테고리다. 본질은 단순하다, [① 국영 NOC가 본업(원유·가스 생산)은 100% 유지하면서] [② 인프라(파이프라인)의 미래 25년치 수송료만 선매각해] [③ 한 번에 USD 수십억의 upfront cash를 만들어] [④ 본국의 산업 다각화·국부펀드·신산업에 재배치]하는 흐름. 글로벌 인프라 PE와 국부펀드 입장에서는 [국가 신용에 사실상 연동된 25년 contracted cash flow]를 사는 거래라 매력적이고, 발행 NOC 입장에서는 [본업 운영권·자산 소유권을 1도 양보하지 않고] 자본을 만든다는 게 결정적 매력. 본 거래는 그 카테고리에서 단일 거래로 세계 최대 규모.",
    metrics: [
      { label: "아람코 원유 생산 capacity (2021)", value: "약 12M bpd",     sub: "일일 1,200만 배럴, 세계 최대" },
      { label: "아람코 시가총액 (2021 평균)",      value: "약 USD 1.9T",    sub: "세계 최대 상장사" },
      { label: "본 거래 규모 (upfront cash)",     value: "USD 12.4B",     sub: "약 16조 원" },
      { label: "Aramco Oil Pipelines 기업가치",   value: "USD 25.3B",     sub: "지분 49% × USD 12.4B 역산" },
    ],
    subBody:
      "비교 시점에서 ADNOC Oil Pipelines(2019, BlackRock·KKR, USD 4B+, 23년 lease, 18개 파이프라인 750km), 아람코 오일 파이프라인(2021, EIG 컨소시엄, USD 12.4B, 25년 lease), 아람코 가스 파이프라인(2021, BlackRock·Hassana 컨소시엄, USD 15.5B, 20년 lease)으로 이어지는 [걸프 NOC 파이프라인 모네타이제이션 3대 거래]가 형성됐다. 같은 시기 브라질 Petrobras도 NTS 가스 파이프라인을 Brookfield에 USD 5.2B로 매각(2017)한 선례가 있어, 본 카테고리는 글로벌 인프라 PE의 핵심 표적 자산군으로 자리잡았다.",
    players: [
      { name: "Saudi Aramco",                role: "본 거래 매도인 (Aramco Oil Pipelines Co 51% 보유, 파이프라인 운영권 100% 유지)" },
      { name: "EIG Global Energy Partners",  role: "컨소시엄 리드, 인수 vehicle Pearl Pipelines Limited 운영" },
      { name: "Mubadala Investment Company", role: "UAE 국부펀드, 컨소시엄 핵심 LP" },
      { name: "Silk Road Fund",              role: "중국 국부펀드, 컨소시엄 LP" },
      { name: "Samsung Asset Management",    role: "한국 자산운용사, 컨소시엄 LP" },
      { name: "Hassana Investment Company",  role: "사우디 GOSI 연기금, 컨소시엄 LP (자국 자본 참여)" },
      { name: "Saudi PIF (Public Investment Fund)", role: "본 거래 cash 수령처(아람코 → 사우디 정부 → PIF), Vision 2030 자금원" },
    ],
  },

  companyOverview: {
    targetName: "Aramco Oil Pipelines Company (신설 SPV)",
    body: "본 거래의 [target]은 거래를 위해 새로 설립된 SPV [Aramco Oil Pipelines Company]다. 자체 사업 실체나 직원이 있는 운영사가 아니라, [아람코의 stabilized crude oil pipeline network를 25년간 사용할 권리]를 자산으로 보유하고 그 권리에 대한 대가로 아람코로부터 throughput-based tariff를 수령하는 [순수 권리 보유 SPV]에 해당. 따라서 회사의 본질을 이해하려면 [아람코의 stabilized crude oil pipeline network 자체]와 그 수송 capacity·throughput을 봐야 한다. 아래 metrics·financials는 매도인 모회사 아람코의 업스트림 운영 지표와 stabilized crude oil pipeline network의 사실상 처리량을 기준으로 정리.",
    metrics: [
      { label: "Aramco Oil Pipelines Co 지위",     value: "신설 SPV (2021)",     sub: "사용권 보유 only, 운영 무관" },
      { label: "기초자산 (underlying)",            value: "아람코 stabilized crude pipeline network",  sub: "사우디 동부 유전 → 수출 터미널/정유" },
      { label: "사용권 기간 (lease tenor)",        value: "25년",               sub: "2021.06 ~ 2046.06" },
      { label: "아람코 원유 생산 capacity",         value: "약 12M bpd",         sub: "세계 최대, throughput 기초" },
    ],
    financials: [
      { year: "FY2017", revenue: 245000, cogs: 130000, grossProfit: 115000, sga: 12000, operatingIncome: 103000, ebitda: 145000 },
      { year: "FY2018", revenue: 356000, cogs: 175000, grossProfit: 181000, sga: 15000, operatingIncome: 166000, ebitda: 224000 },
      { year: "FY2019", revenue: 330000, cogs: 175000, grossProfit: 155000, sga: 16000, operatingIncome: 139000, ebitda: 197000 },
      { year: "FY2020", revenue: 230000, cogs: 137000, grossProfit:  93000, sga: 17000, operatingIncome:  76000, ebitda: 124000 },
      { year: "FY2021", revenue: 359000, cogs: 175000, grossProfit: 184000, sga: 18000, operatingIncome: 166000, ebitda: 232000 },
    ],
    financialsNote: "단위: USD 백만 | 모회사 Saudi Aramco 연결 손익 (IFRS) | 본 거래의 직접 target은 신설 SPV라 자체 손익 없음, 기초자산 운영자 아람코 업스트림 손익을 트래픽 가이드로 표시 | 출처: Aramco Annual Report 2018~2021",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "본 거래의 구조는 4단계로 분해된다. [① 신설] 아람코가 100% 자회사 Aramco Oil Pipelines Company를 신설. [② 사용권 양도] 아람코가 자기 stabilized crude oil pipeline network의 25년간 사용권(usage rights)을 SPV에 양도. [③ 지분 매각] EIG-주도 컨소시엄이 신설 SPV의 지분 49%를 USD 12.4B에 인수, 아람코는 51% 유지. [④ Lease-back] SPV는 동일 파이프라인을 아람코에 다시 임대, 아람코는 SPV에 분기마다 throughput-based tariff(barrel당 수송료)를 25년간 지급, 일일 처리량 최소 보장(minimum volume commitment) 조항 포함. 결과: 파이프라인의 [법적 소유권·운영권·관리권은 100% 아람코]에 그대로 남고, EIG 컨소시엄은 25년치 tariff 현금흐름의 49%를 가져가는 [순수 재무 권리 보유]에 그침.",
    preOwnership: {
      nodes: [
        { id: "ksa_pre",      label: "사우디 정부 (PIF 포함)",        sub: "Aramco 약 98%",            type: "acquirer" },
        { id: "aramco_pre",   label: "Saudi Aramco",                sub: "원유 생산·파이프라인 운영자",       type: "target" },
        { id: "pipeline_pre", label: "stabilized crude pipeline",   sub: "아람코 100% 보유·운영",         type: "entity" },
        { id: "public_pre",   label: "아람코 자유유통 주주",            sub: "약 2% (IPO 분)",            type: "public" },
      ],
      edges: [
        { from: "ksa_pre",      to: "aramco_pre",   label: "약 98% (정부+PIF)" },
        { from: "public_pre",   to: "aramco_pre",   label: "약 2%" },
        { from: "aramco_pre",   to: "pipeline_pre", label: "100% 소유·운영" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ksa_post",      label: "사우디 정부 (PIF 포함)",        sub: "Aramco 약 98% (변동 없음)",   type: "acquirer" },
        { id: "aramco_post",   label: "Saudi Aramco",                sub: "AOP 51% + 파이프라인 운영권 100%", type: "target" },
        { id: "aop",           label: "Aramco Oil Pipelines Co",     sub: "신설 SPV (25년 사용권 보유)",    type: "entity" },
        { id: "eig",           label: "EIG-led Consortium",          sub: "Pearl Pipelines Limited 통해 49%", type: "fund" },
        { id: "pipeline_post", label: "stabilized crude pipeline",   sub: "아람코 운영, AOP에 25년 lease", type: "entity" },
        { id: "public_post",   label: "아람코 자유유통 주주",            sub: "약 2%",                     type: "public" },
      ],
      edges: [
        { from: "ksa_post",      to: "aramco_post",   label: "약 98%" },
        { from: "public_post",   to: "aramco_post",   label: "약 2%" },
        { from: "aramco_post",   to: "aop",           label: "51% (운영 통제권)" },
        { from: "eig",           to: "aop",           label: "49% (재무 권리만)" },
        { from: "aramco_post",   to: "pipeline_post", label: "소유·운영 100% 유지" },
        { from: "pipeline_post", to: "aop",           label: "25년 사용권 양도" },
        { from: "aramco_post",   to: "aop",           label: "분기별 throughput tariff (lease-back)" },
      ],
    },
    keyTerms: [
      { label: "거래 형식",                value: "Sale-and-Leaseback 구조의 SPV 카브아웃 + 컨소시엄 49% 인수" },
      { label: "거래 규모 (upfront cash)",  value: "USD 12.4B (약 16조 원)",                accent: true },
      { label: "SPV 지분 구조",             value: "Aramco 51% / EIG 컨소시엄 49%",         accent: true },
      { label: "사용권 기간 (lease tenor)", value: "25년 (2021.06 ~ 2046.06)",              accent: true },
      { label: "Lease-back tariff 구조",   value: "Barrel당 정액 throughput-based tariff, 분기 지급" },
      { label: "Minimum Volume Commitment", value: "일일 처리량 최소 보장 조항 포함",         accent: true },
      { label: "운영·관리 통제권",            value: "100% 아람코 (EIG는 재무 권리만)" },
      { label: "파이프라인 자산 소유권",         value: "100% 아람코 (SPV는 사용권만 보유)" },
      { label: "기초자산",                 value: "Aramco stabilized crude oil pipeline network" },
      { label: "인수 vehicle",             value: "Pearl Pipelines Limited (EIG 주도, 컨소시엄 출자)" },
      { label: "컨소시엄 LP",               value: "EIG · Mubadala · Silk Road Fund · Samsung AM · Hassana 등 5개국" },
      { label: "EIG 인수금융",             value: "Acquisition debt facility → 2021 후반 USD 11.2B senior 채권 리파이낸싱" },
      { label: "사우디 국가 신용 backing",   value: "사실상 (아람코 = 사우디 정부 98% 지분, tariff 지급 주체)" },
    ],
  },

  advisors: {
    body: "본 거래는 아람코 측이 JPMorgan을 메인 재무 자문으로 기용하고, EIG 측은 자체 캐피탈 마켓 팀과 외부 IB를 활용한 구조. 법무 자문은 [Latham & Watkins(EIG 측)], [White & Case], [Clifford Chance]가 핵심 역할을 맡았다고 보도됐다. Moelis는 아람코의 별도 IPO·자본거래에서 자문해온 이력이 있으나 본 파이프라인 거래에서의 공식 역할 여부는 1차 자료에서 확인이 제한적, 시장 일반 관측 수준에서 기재.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "EIG-led Consortium (인수자)",
        initials: "EIG",
        bg: "bg-emerald-700",
        advisors: [
          {
            firm: "EIG Capital Markets / 인하우스",
            role: "재무 자문 (인하우스 리드)",
            roleType: "financial",
            note: "Pearl Pipelines Limited vehicle 설계, 컨소시엄 LP 모집, 인수금융 신디케이션 주관",
          },
          {
            firm: "Latham & Watkins",
            role: "법무 자문 (인수자 측)",
            roleType: "legal",
            note: "EIG의 49% 지분 인수·SPV 구조·국제 합작 계약 자문 (Law.com International 보도 확인)",
          },
          {
            firm: "Clifford Chance",
            role: "법무 자문 (컨소시엄 측)",
            roleType: "legal",
            note: "사우디 현지 법률·외환·LP 컨소시엄 구조 자문",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Saudi Aramco (매도인)",
        initials: "ARC",
        bg: "bg-amber-700",
        advisors: [
          {
            firm: "JPMorgan Chase",
            role: "재무 자문 (매도인 메인)",
            roleType: "financial",
            note: "아람코 측 파이프라인 매각 자문, 가격 협상·SPV 구조·컨소시엄 선정 주관 (Law360 보도 확인)",
          },
          {
            firm: "Moelis & Company (시장 관측)",
            role: "재무 자문 (보조, 공식 확인 제한)",
            roleType: "financial",
            note: "아람코 자본거래 자문 이력이 있어 본 거래 보조 역할 가능성, 공식 발표는 제한적",
          },
          {
            firm: "White & Case",
            role: "법무 자문 (매도인 측)",
            roleType: "legal",
            note: "아람코의 SPV 카브아웃·계약 구조·사우디 현지 규제 자문 (Law.com 보도 확인)",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 Law.com International, Law360, GCC Business News 등의 공개 보도를 기반으로 정리. 일부는 시장 관측 수준의 추정이며, 실제 자문 mandate와 다를 수 있습니다.",
  },

  valuation: {
    body: "본 거래는 통상의 EV/EBITDA 멀티플로 평가하기 어렵다. SPV 자체에는 운영 EBITDA가 없고, [25년치 throughput tariff 현금흐름의 NPV]가 사실상의 기업가치다. 시장은 본 거래를 [implied 100% enterprise value USD 25.3B (= USD 12.4B / 49%)]로 역산했고, 같은 시점 ADNOC Oil Pipelines(2019) 거래 대비 약 5배 규모. tariff 산정은 [barrel당 정액 × 처리량]이고, 일일 처리량에 최소 보장(MVC, minimum volume commitment) 조항이 붙어 25년간 수익이 사실상 사우디 국가 신용으로 backed. EIG가 인수 후 진행한 USD 11.2B senior secured 리파이낸싱이 글로벌 채권 시장에서 흥행한 것도 이 신용 구조 때문.",
    rows: [
      { item: "본 거래 upfront cash to Aramco",        val: "USD 12.4B",       note: "약 16조 원",                  accent: true },
      { item: "AOP 지분 매각 비율",                      val: "49%",            note: "Aramco 51% 유지" },
      { item: "AOP implied Enterprise Value (역산)",    val: "USD 25.3B",      note: "= USD 12.4B / 49%",            accent: true },
      { item: "Lease tenor",                          val: "25년",           note: "2021.06 ~ 2046.06" },
      { item: "Tariff 구조",                          val: "Throughput-based",  note: "Barrel당 정액 × 처리량, 분기 지급" },
      { item: "Minimum Volume Commitment",             val: "있음",            note: "사실상 사우디 국가 신용 backing",  accent: true },
      { item: "EIG 인수금융 (리파이낸싱)",                 val: "USD 11.2B",      note: "Pearl Pipelines senior secured, 2021 후반 클로즈" },
      { item: "비교 거래: ADNOC Oil Pipelines (2019)",  val: "USD 4B+",        note: "BlackRock·KKR 40%, 23년 lease" },
      { item: "비교 거래: Aramco Gas Pipelines (2021)", val: "USD 15.5B",      note: "BlackRock·Hassana 49%, 20년 lease" },
    ],
    disclaimer: "주: 가치 산정은 1차 자료(Aramco·EIG 공식 발표) 및 언론 보도 기반. tariff 절대값 및 IRR 가정은 비공개. NPV 가정은 시장 일반 관측치.",
  },

  rationale: {
    buyer: {
      title: "EIG 컨소시엄, 왜 아람코 파이프라인인가",
      initials: "EIG",
      bg: "bg-emerald-700",
      points: [
        "[사우디 국가 신용에 사실상 연동된 25년 contracted cash flow] tariff 지급 주체가 아람코(=사우디 정부 98% 자회사)이고 minimum volume commitment까지 붙어, 사실상 정부 보증급 인프라 채권 성격. 글로벌 인프라 PE가 사는 가장 강력한 자산군 중 하나",
        "[운영 리스크 0, 재무 권리만 보유] 파이프라인 자체의 운영·관리·증설·축소는 전부 아람코 책임. EIG 컨소시엄은 [재무 권리만] 가져가므로 인프라 운영 노출은 없음. 사모 인프라 펀드의 이상적 구조",
        "[USD 11.2B 채권 리파이낸싱의 흥행] EIG는 Pearl Pipelines Limited 인수금융을 2021년 후반 senior secured 채권으로 리파이낸싱했고, 사우디 국가 신용에 연동된 첫 대형 인프라 채권 상품으로 글로벌 채권 시장에서 흥행. 자금 비용을 압축하면서 LP IRR을 끌어올리는 구조",
        "[글로벌 LP 다각화] EIG는 본 거래를 통해 Mubadala·Silk Road Fund·Samsung AM·Hassana 등 [중·UAE·한·사우디·미] 5개국 LP를 한 컨소시엄에 묶어, EIG의 글로벌 인프라 PE 플랫폼으로서의 입지를 한 단계 격상",
        "[ADNOC 모델의 확장 복제] 2019년 ADNOC × BlackRock·KKR 거래의 EIG 버전 + 5배 규모. 검증된 거래 구조를 압도적 규모로 실행한 [걸프 NOC 파이프라인 증권화 카테고리]의 결정판",
      ],
    },
    seller: {
      title: "Saudi Aramco, 왜 파이프라인을 팔지 않으면서도 124억 달러를 만들었나",
      initials: "ARC",
      bg: "bg-amber-700",
      points: [
        "[Vision 2030 자금원] 사우디 정부·PIF의 산업 다각화·신산업·NEOM·관광 등 Vision 2030 프로젝트는 막대한 자본을 요구. 본 거래의 USD 12.4B는 본업(원유 생산능력)을 1도 양보하지 않고 만든 즉시 가용 cash, IPO·배당 외 제3의 자금 모네타이제이션 채널",
        "[운영권·자산 소유권 100% 유지] 파이프라인 자체는 아람코가 그대로 보유·운영하고, EIG는 SPV 지분 49%로 [재무 권리만] 가져감. 사우디 입장에서 본질적인 [국가 안보·에너지 인프라 통제권]은 1도 손상되지 않음",
        "[Off-balance-sheet 자금 조달] 본 거래는 회계적으로 신주 발행도 부채 차입도 아닌 자회사 지분 매각 + 리스 약정. 아람코 본체의 부채비율을 크게 건드리지 않으면서 USD 12.4B를 만든 점이 매력",
        "[ADNOC 모델의 사우디 버전, 그리고 본인의 가스 파이프라인 후속] 아람코는 본 거래 성공을 확인한 후 2021년 12월 [Aramco Gas Pipelines Company] 거래(BlackRock·Hassana 컨소시엄, USD 15.5B)를 동일 구조로 한 번 더 실행. 본 거래는 사우디 정부의 [파이프라인 증권화 전략]의 첫 step",
        "[글로벌 LP 다각화 = 외교 자산] EIG 컨소시엄에 중국 Silk Road Fund·UAE Mubadala·한국 Samsung AM이 동시에 들어왔다는 점은 사우디의 동방 정책(중국·아시아 자본 적극 활용)의 상징. 단순 자본거래를 넘어 [국가 간 자본 외교의 도구]로 기능",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 클로징 5년이 지난 2026년 시점에서 본 거래는 [걸프 NOC 파이프라인 증권화]의 표준 모델로 자리잡았다. 아람코 본인이 2021년 12월 가스 파이프라인에서 USD 15.5B로 동일 구조를 한 번 더 실행했고, 2024년에는 ADNOC Oil Pipelines의 BlackRock·KKR 보유분 40%가 UAE 로컬 운용사 Lunate에 매각되며 [세컨더리 시장]까지 형성됐다. EIG는 USD 11.2B senior secured 채권 리파이낸싱을 통해 사우디 국가 신용에 연동된 인프라 채권 카테고리를 글로벌 채권 시장에 안착시켰고, 이후 카타르·쿠웨이트·오만 등 다른 걸프 NOC들도 유사 구조 검토 보도가 이어졌다. 25년 tariff lease-back은 클로징 5년 차에 들어선 시점, 본격 평가는 lease 만기인 2046년에 가서야 확정.",
    overallVerdict: "걸프 NOC 파이프라인 증권화의 표준 모델을 정착시킨 거래, 사모 인프라 PE 카테고리의 카테고리 정의(category-defining) 사례",
    positives: [
      "[Saudi Aramco] 본업·운영권·자산 소유권 1도 양보 없이 USD 12.4B을 일시 현금화. Vision 2030 자금원으로서 IPO·배당 외 제3의 모네타이제이션 채널을 확립",
      "[EIG] 사우디 국가 신용에 연동된 25년 contracted cash flow를 확보. USD 11.2B 채권 리파이낸싱 흥행으로 LP IRR 제고",
      "[글로벌 인프라 시장] 걸프 NOC 파이프라인 증권화가 표준 카테고리로 자리잡음. 2024년 ADNOC 파이프라인의 Lunate 세컨더리 거래로 [exit 경로]도 입증됨",
      "[국가 간 자본 외교] 5개국 LP가 한 컨소시엄에 묶이며 사우디의 다극 자본 외교 모델 정착",
    ],
    risks: [
      "[Aramco] 25년 lease tenor 동안 throughput이 minimum volume commitment를 하회하면 추가 부담 발생 가능성, 다만 일일 12M bpd capacity 대비 가능성은 낮음",
      "[EIG·LP] tariff는 barrel당 정액으로 고정되어 있어 인플레이션 헷지는 제한적. 25년 만기 시점에 사우디 정부 정책 변화 위험은 잠재",
      "[ESG 문제] 화석연료 인프라에 대한 글로벌 LP의 ESG 압박이 2021년 이후 강화, EIG 컨소시엄 LP 일부의 후속 펀드레이즈에 부정적 영향 가능성",
      "[지정학 위험] 사우디·이란·예멘 등 중동 지정학 변동이 lease-back tariff 지급에 잠재 영향. 2019년 Abqaiq 공격 같은 사건 재발 시 수송량 일시 감소 가능",
    ],
    editorNote:
      "이 거래의 진짜 의미는 [사우디가 본업을 1도 양보하지 않고 USD 12.4B을 만든 방법]에 있다. 단순한 자산 매각이 아닌 [미래 25년치 수송료를 NPV로 환산해 선매각]하는 sale-and-leaseback 구조는 인프라 사모 PE의 가장 정교한 구조 중 하나. 본 거래로 [걸프 NOC 파이프라인 증권화]는 카테고리로 자리잡았고, 사우디 본인의 가스 파이프라인 후속 거래(2021.12, BlackRock·Hassana, USD 15.5B), ADNOC 파이프라인 세컨더리(2024, Lunate)까지 이어지며 사모 인프라 산업의 새 표준이 됐다. 2046년 lease 만기에 어떤 후속 구조가 나올지가 다음 관전 포인트. 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "EIG",
    acquirerBg: "bg-emerald-700",
    targetInitials: "AOP",
    targetBg: "bg-amber-700",
    acquirerName: "EIG-led Consortium (EIG · Mubadala · Silk Road Fund · Samsung AM · Hassana)",
    targetName: "Aramco Oil Pipelines Company (49% stake)",
    dealTitle: "Sale-and-Leaseback of 25-Year Usage Rights in Aramco's Stabilized Crude Oil Pipeline Network",
    dealSize: "USD 12.4 billion",
    dealSizeUSD: "approx. KRW 16 trillion",
    evEbitda: "N/A (Throughput Tariff NPV)",
    closeDate: "Jun 18, 2021",
  },

  sources: [
    { id: 1, text: "Aramco 공식 보도자료, $12.4B infrastructure investment deal with EIG-led consortium (2021.04.09)",         url: "https://www.aramco.com/en/news-media/news/2021/aramco-signs-infrastructure-investment-deal-with-eig-led-consortium" },
    { id: 2, text: "Aramco 공식 보도자료, $12.4B infrastructure deal closing with global investor consortium (2021.06.18)",   url: "https://www.aramco.com/en/news-media/news/2021/aramco-closes-infrastructure-deal-with-global-investor-consortium" },
    { id: 3, text: "EIG Partners 공식 보도자료, EIG-Led Consortium Closes $12.4 Billion Infrastructure Deal with Aramco",     url: "https://eigpartners.com/eig-led-consortium-closes-12-4-billion-infrastructure-deal-with-aramco/" },
    { id: 4, text: "EIG Partners 공식 보도자료, EIG Pearl Pipelines Completes ~$11 Billion Senior Debt Refinancing Program", url: "https://eigpartners.com/eigs-pearl-pipelines-completes-11-billion-senior-debt-refinancing-program/" },
    { id: 5, text: "Law.com International, Latham, White & Case Win Roles on $12.4B Saudi Aramco Deal (2021.04.12)",        url: "https://www.law.com/international-edition/2021/04/12/latham-white-case-win-roles-on-12-4b-saudi-aramco-deal/" },
    { id: 6, text: "Rigzone, International Group Takes 49% Stake in Aramco Oil Pipeline Unit (2021.06.21)",                  url: "https://www.rigzone.com/news/wire/international_group_takes_49_stake_in_aramco_oil_pipeline_unit-21-jun-2021-165744-article/" },
    { id: 7, text: "The National, Aramco closes $12.4bn pipelines deal with EIG-led consortium",                              url: "https://www.thenationalnews.com/business/energy/aramco-closes-12-4bn-pipelines-deal-with-eig-led-consortium-1.1244263" },
    { id: 8, text: "JPT (SPE), Aramco Raises $12.4 Billion in Cash Off Pipeline-Lease Deal With EIG",                          url: "https://jpt.spe.org/aramco-raises-12-4-billion-in-cash-off-pipeline-lease-deal-with-eig" },
    { id: 9, text: "Aramco 공식 보도자료, $15.5B landmark gas pipeline deal with BlackRock and Hassana (2021.12.06)",          url: "https://www.aramco.com/en/news-media/news/2021/aramco-announces-landmark-gas-pipeline-deal" },
    { id: 10, text: "CNBC, BlackRock and KKR clinch $4 billion infrastructure investment deal with ADNOC (2019.02.24)",       url: "https://www.cnbc.com/2019/02/24/blackrock-and-kkr-clinch-deal-with-adnoc.html" },
  ],

  seo: {
    title: "Aramco × EIG $12.4B 파이프라인 sale-and-leaseback, 사우디의 인프라 증권화",
    description:
      "2021년 6월 사우디 아람코가 EIG-주도 컨소시엄에 신설 SPV Aramco Oil Pipelines Company의 49%를 USD 12.4B에 매각. 25년 throughput tariff lease-back으로 파이프라인 운영권은 그대로 유지하면서 일시 USD 12.4B 현금화. Vision 2030 자금원, ADNOC 모델의 확장 복제, 사우디의 가스 파이프라인 후속 USD 15.5B 거래로 이어진 걸프 NOC 파이프라인 증권화의 표준 모델 해부.",
    keywords: [
      "Aramco EIG",
      "Aramco Oil Pipelines",
      "사우디 아람코 파이프라인",
      "Sale-and-Leaseback",
      "파이프라인 증권화",
      "Vision 2030",
      "EIG Global Energy Partners",
      "Mubadala",
      "Silk Road Fund",
      "Samsung Asset Management",
      "Hassana",
      "Pearl Pipelines",
      "ADNOC Oil Pipelines",
      "걸프 인프라 거래",
    ],
  },

  concepts: [
    {
      term: "Sale-and-Leaseback (세일 앤 리스백)",
      description: "보유 자산을 매각한 뒤 같은 자산을 다시 임차해 사용하는 구조. 매도인은 자산 사용은 유지하면서 일시 cash를 만들고, 매수인은 장기 임대 수익을 얻음. 본 거래는 자산 자체가 아닌 [사용권 25년]을 매각한 변형.",
    },
    {
      term: "Throughput-Based Tariff",
      description: "파이프라인 등 인프라의 처리량(통과 물량)에 비례해 산정되는 사용료. 본 거래는 barrel당 정액 + 일일 처리량 최소 보장(MVC) 조항으로 25년간 수익이 사실상 고정.",
    },
    {
      term: "Asset Securitization (자산 증권화)",
      description: "특정 자산이 만들어내는 미래 현금흐름을 SPV에 양도해 그 SPV 지분·채권을 시장에 매각하는 금융 기법. 본 거래는 파이프라인의 [25년치 미래 수송료]를 증권화한 사례.",
    },
    {
      term: "SPV Carveout",
      description: "모회사가 특정 자산·사업·권리를 신설 SPV로 분리한 뒤 SPV 지분 일부를 외부에 매각하는 구조. 본 거래는 아람코가 Aramco Oil Pipelines Company를 신설해 사용권만 양도, SPV 지분 49%를 EIG 컨소시엄에 매각.",
    },
    {
      term: "Sovereign Credit Backing",
      description: "사실상 국가 신용이 뒷받침하는 거래 구조. 본 거래는 tariff 지급 주체가 아람코(=사우디 정부 98% 자회사)라 사실상 사우디 정부 신용에 연동된 인프라 자산.",
    },
    {
      term: "Infrastructure Debt (인프라 채권)",
      description: "인프라 자산이 만들어내는 안정적 현금흐름을 담보로 발행되는 채권. EIG는 본 거래 인수금융을 USD 11.2B senior secured 채권으로 리파이낸싱해 글로벌 인프라 채권 시장에서 흥행.",
    },
    {
      term: "Pipeline Network (파이프라인 네트워크)",
      description: "원유·가스를 유전에서 수출 터미널·정유시설까지 흘려보내는 인프라 망. 본 거래의 기초자산인 아람코 stabilized crude oil pipeline은 일일 12M bpd capacity의 사우디 석유 수출 백본.",
    },
    {
      term: "Vision 2030",
      description: "2016년 사우디 무함마드 빈 살만 왕세자가 발표한 국가 다각화 전략. 핵심 자금원은 아람코 IPO·배당·자산 모네타이제이션. 본 거래의 USD 12.4B는 Vision 2030 프로젝트(NEOM·신산업·관광)로 흘러간 대표적 자금원.",
    },
  ],

  faq: [
    {
      q: "왜 아람코는 파이프라인을 직접 매각하지 않고 SPV 카브아웃 + 사용권 양도 구조를 썼나요?",
      a: "파이프라인 자체를 매각하면 [국가 안보·에너지 인프라 통제권]까지 외부에 넘어가게 됩니다. 사우디 정부 입장에서 이는 절대 불가. 반면 sale-and-leaseback 구조는 자산 자체의 소유권·운영권을 100% 아람코에 그대로 두고, 신설 SPV에 [25년간 사용권]만 양도한 뒤 SPV 지분 49%를 매각하는 방식이라 [본질적 통제권은 1도 양보 없이] USD 12.4B을 만들 수 있습니다. 본 거래의 핵심 발명품.",
    },
    {
      q: "EIG 컨소시엄은 49% 지분으로 정확히 무엇을 가져갔나요?",
      a: "[운영 통제권은 0, 재무 권리만 49%]를 가져갔습니다. 파이프라인의 운영·관리·증설·축소 결정은 전부 아람코가 그대로 행사하고, EIG 컨소시엄은 SPV가 아람코로부터 25년간 받는 throughput-based tariff의 49%를 분기마다 분배받습니다. 즉 [사우디 국가 신용으로 backed된 25년 분량의 contracted cash flow]를 사는 거래. 일일 처리량 최소 보장(MVC) 조항이 붙어 있어 변동성도 제한적.",
    },
    {
      q: "EIG 컨소시엄에 누가 참여했나요?",
      a: "리드인 EIG Global Energy Partners(미국 PE)에 더해 Mubadala Investment Company(UAE 국부펀드), Silk Road Fund(중국 국부펀드), Samsung Asset Management(한국 자산운용사), Hassana Investment Company(사우디 GOSI 연기금)이 핵심 LP로 참여했습니다. 미국·UAE·중국·한국·사우디 [5개국 자본]이 한 컨소시엄에 묶인 점이 본 거래의 또 다른 특징, 사우디의 동방 자본 외교 의도가 반영됐다는 평가.",
    },
    {
      q: "EIG의 USD 11.2B 채권 리파이낸싱은 무엇인가요?",
      a: "EIG는 본 거래 인수 초기에 신설 vehicle [Pearl Pipelines Limited]를 통해 acquisition debt facility(인수금융 차입)를 일으켜 USD 12.4B의 상당 부분을 충당했고, 2021년 후반에 이를 [USD 11.2B 규모 senior secured 채권/론 리파이낸싱]으로 갈아탔습니다. 사우디 국가 신용에 사실상 연동된 첫 대형 인프라 채권 상품으로 글로벌 시장에서 흥행, 자금 비용을 압축하면서 LP IRR을 끌어올린 핵심 동작.",
    },
    {
      q: "이 거래가 ADNOC × BlackRock·KKR(2019) 거래와 어떻게 다른가요?",
      a: "구조는 거의 동일하지만 [규모와 LP 구성]에서 다릅니다. ADNOC 거래는 18개 파이프라인 750km의 23년 lease를 USD 4B+에 매각(이후 GIC·ADRPBF 합류로 USD 4.9B)했고, 인수자가 BlackRock·KKR 위주의 영미 PE였습니다. 아람코 거래는 25년 lease를 USD 12.4B에 매각(약 5배 규모)했고, 인수자 컨소시엄에 미국·UAE·중국·한국·사우디 자본을 묶었다는 점에서 [걸프 NOC 파이프라인 증권화 모델의 확장 복제] + [다극 자본 외교 도구]로 진화했습니다.",
    },
    {
      q: "이 거래가 글로벌 인프라 시장에 어떤 의미를 남겼나요?",
      a: "두 가지 의미가 큽니다. 첫째, [걸프 NOC 파이프라인 증권화]가 카테고리로 자리잡았습니다. 아람코 본인이 2021년 12월 가스 파이프라인을 BlackRock·Hassana 컨소시엄에 USD 15.5B로 추가 매각했고, 2024년에는 ADNOC 파이프라인의 40% 지분이 Lunate에 세컨더리 매각되며 [exit 경로]까지 형성됐습니다. 둘째, [사우디 국가 신용에 연동된 인프라 채권]이 글로벌 채권 시장의 새 카테고리로 등장. EIG의 USD 11.2B 리파이낸싱 흥행이 후속 카타르·쿠웨이트·오만 NOC들의 유사 거래 검토로 이어지고 있습니다.",
    },
  ],
};

export default deal;
