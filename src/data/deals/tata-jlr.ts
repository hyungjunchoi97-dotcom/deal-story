/**
 * Tata Motors × Jaguar Land Rover (JLR), $2.3B, 2008
 * 인도 자동차 그룹이 포드의 PAG 해체 막바지에 영국 럭셔리 브랜드 두 개를 인수한
 * 신흥국→선진국 M&A의 교과서적 사례.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "tata-jlr",
  title: "타타 모터스가 포드에서 재규어·랜드로버를 가져온 방법, $2.3B에 산 영국 럭셔리의 16년",
  subtitle:
    "포드 PAG 해체 막바지 · 리먼 직전 클로징 · 영국 정부 보증 거절 · 레인지로버 이보크 부활 · 2024년 JLR 영업이익 £2.6B · 신흥국→선진국 M&A 템플릿",
  category: "ma",
  industry: "Automotive / Luxury / Cross-border M&A",
  country: "인도/영국",
  announcedAt: "2008-03-26",
  closedAt: "2008-06-02",
  announcedDisplay: "2008년 3월 26일 (포드 매각 발표)",
  closedDisplay: "2008년 6월 2일 (소유권 이전 완료)",
  readingMinutes: 16,
  tags: [
    "Tata Motors",
    "Jaguar Land Rover",
    "JLR",
    "Ford",
    "PAG",
    "Cross-border M&A",
    "Ratan Tata",
    "Alan Mulally",
    "Distressed Asset",
    "EM to DM",
    "Brand Preservation",
  ],
  excerpt:
    "2008년 3월 26일, 포드는 [재규어 카스 + 랜드로버] 두 브랜드를 인도 타타 모터스에 현금 $2.3B에 매각한다고 발표했다. 포드가 1989년 재규어를 $2.5B, 2000년 랜드로버를 $2.7B에 인수한 가격을 합치면 $5.2B를 썼던 자산을 절반 이하 가격에 넘긴 셈. 앨런 멀러리의 [One Ford] 전략에 따른 PAG(Premier Automotive Group) 해체의 마지막 큰 매각이었고, 동시에 인도 재계의 글로벌 쇼핑 웨이브 정점이었다. 클로징 3개월 뒤 리먼이 무너졌고 JLR 판매가 30% 이상 빠지면서 거래는 [세기의 실패]로 불릴 뻔했지만, 2011년 레인지로버 이보크, 2010년대 중국 럭셔리 붐, 16년에 걸친 브랜드 재건 끝에 JLR은 2024 회계연도 £2.6B 영업이익을 내는 타타 모터스의 최대 수익원으로 자리잡았다. 신흥국→선진국 인수의 [브랜드 보존 + 운영 자율성] 모델 그 자체.",

  acquirer: { initials: "TATA", bg: "bg-blue-800", label: "Tata Motors (Tata Group)" },
  target: { initials: "JLR", bg: "bg-green-700", label: "Jaguar Land Rover (Ford PAG)" },

  background: [
    "[포드의 PAG 빌드업, 1989~2000.] 포드는 1980~90년대 럭셔리 다각화 전략의 일환으로 영국·스웨덴 명문 브랜드를 차례로 사들였다. 1987년 애스턴마틴($700M), 1989년 재규어($2.5B), 1999년 볼보 카스($6.45B), 2000년 랜드로버($2.7B)를 인수해 Premier Automotive Group (PAG)을 구성했다. 누적 $15B 안팎의 자본을 투입한 이 컬렉션은 포드 본체와 시너지를 내지 못했다. 재규어는 J-Mays 디자인 시대를 거치며 정체성을 잃었고, 볼보는 안전 이미지로 자리잡았지만 포드 플랫폼 공유로 마진이 깎였다. 2000년대 중반부터 PAG는 만성 적자 사업부였다.",
    "[멀러리의 One Ford, 2007~2010.] 2006년 보잉에서 영입된 앨런 멀러리는 부임 직후 [One Ford] 전략을 선언했다, 포드 본 브랜드에 집중하고 PAG 같은 비핵심 자산은 전부 매각한다. 2007년 애스턴마틴을 $925M에 매각했고, 2008년 재규어+랜드로버 묶음을 매물로 내놓았다. 인수 후보로는 인도 타타 모터스, 인도 마힌드라, 미국 사모펀드 One Equity Partners, 인도 PE Cerberus 컨소시엄이 경쟁했고, 최종적으로 [영국 노조의 지지를 명시적으로 받은] 타타가 낙찰됐다. 노조가 인도 인수자를 지지한 것은 [브랜드 보존 + 영국 공장 유지] 약속 때문이었다.",
    "[타타 그룹의 글로벌 쇼핑 웨이브.] 2000년대 인도 재계는 글로벌 M&A 러시에 본격 합류했다. 타타 그룹은 그 정점에 있었다, 2000년 타타 티-테틀리($432M), 2005년 타타 커뮤니케이션스-텔레글로브($240M), 2007년 타타 스틸-코러스($12B). 라탄 타타 회장의 베팅 공식은 일관됐다, [디스트레스 가격에 글로벌 명문 브랜드를 인수하고 운영 자율성을 보장한다]. 재규어·랜드로버는 그 공식의 가장 가시적인 적용 사례였다. 인도 상용차 + 타타 나노 소형차로 알려진 타타 모터스가 단숨에 럭셔리·프리미엄 엔지니어링 영역에 들어가는 자기변신이기도 했다.",
    "[2008년 6월 클로징, 그리고 3개월 뒤 리먼.] 2008년 6월 2일 거래가 클로징됐다. 매각가는 현금 $2.3B(운전자본 조정 후 최종), 추가로 약 $600M의 연금 부채를 타타가 인수, 실효 EV는 약 $3B. 포드 엔진 공급계약 5년 이상 유지, 영국 공장(Solihull·Halewood·Castle Bromwich) 유지, 영국 본사 유지, 영국인 경영진 유지가 핵심 약속이었다. 9월 리먼이 무너지면서 글로벌 자동차 수요가 무너졌고, 2008년 4분기~2009년 1분기 JLR 판매는 전년 대비 30%+ 빠졌다. 타타 모터스 봄베이 주가는 2008년 한 해 동안 90% 가까이 폭락했다.",
    "[2009년 영국 정부의 보증 거절, 그리고 2010년대 부활.] 2009년 4월 타타 모터스는 영국 정부에 [£340M 대출 보증]을 요청했지만 거절당했다. 결국 타타 그룹 본사 차원의 자본 보강과 본사 차입으로 JLR 위기를 자체 자본으로 막아냈다. 2010년부터 신차 라인업이 살아났다, 새 XJ 세단(2010), 그리고 결정타가 된 [레인지로버 이보크(2011)]가 글로벌 히트를 쳤다. 2012년 JLR은 £1B+ 영업이익을 냈고, 2014~2015년에는 운영마진 15% 안팎으로 정점을 찍었다. 중국 럭셔리 SUV 붐이 결합되면서 일부 모델은 중국 시장 영업이익률이 90%대까지 올라갔다. 2019~2022년 디젤 수요 붕괴·반도체 부족·중국 둔화로 다시 어려웠지만, 2023~2024년 EV 전환 투자와 함께 회복해 2024 회계연도(2024년 3월 마감) 영업이익 £2.6B를 기록했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$2.3B 현금 + ~$600M 연금 부채 인수 (실효 EV ~$3B)",
    acquirerName: "Tata Motors Limited",
    targetName: "Jaguar Cars + Land Rover (Ford PAG)",
    announcedDisplay: "2008년 3월 26일",
    closedDisplay: "2008년 6월 2일",
    country: "IN/UK",
  },

  executiveSummary: [
    "[포드 PAG 해체의 마지막 큰 매각] 2008년 3월 26일 발표, 6월 2일 클로징. 포드가 1989년 재규어, 2000년 랜드로버에 합산 $5.2B을 썼던 자산을 $2.3B 현금에 타타 모터스에 매각",
    "[디스트레스 가격 + 연금 부담] 현금 $2.3B + 약 $600M 순연금부채 인수, 실효 EV 약 $3B. 포드 엔진 공급계약 5년 이상 유지, 영국 공장·본사·경영진 유지 약속이 매각 조건의 핵심",
    "[멀러리의 One Ford 전략] 2006년 부임한 앨런 멀러리는 PAG 전체 매각으로 포드 본 브랜드에 집중, 2007년 애스턴마틴($925M), 2008년 JLR($2.3B), 2010년 볼보(지리, $1.8B) 매각으로 PAG에 쓴 $15B 중 약 $5B 회수",
    "[타타의 글로벌 쇼핑 웨이브 정점] 2000년 테틀리·2005년 텔레글로브·2007년 코러스($12B)에 이은 라탄 타타의 [디스트레스 명문 브랜드 + 운영 자율성] 공식의 가장 큰 적용 사례",
    "[클로징 3개월 뒤 리먼] 2008년 9월 리먼 붕괴, 글로벌 자동차 수요 30%+ 급감. 2009년 4월 영국 정부가 £340M 대출 보증을 거절, 타타 본사 자본으로 JLR 위기 자체 해결",
    "[2011년 레인지로버 이보크 = 부활의 결정타] 2011년 신차 이보크가 글로벌 히트, 2012년 JLR 영업이익 £1B+ 돌파. 2014~2015년 운영마진 15% 정점, 중국 럭셔리 SUV 붐과 결합",
    "[2024년 JLR이 타타 모터스의 최대 수익원] FY24 매출 £29B·영업이익 £2.6B·EBIT 마진 8.5%. 향후 5년간 £15B EV 전환 투자 계획. 2008년 투자 $2.3B + 이후 추가 자본 ~$2B 대비 2024년 추정 기업가치 $25~30B, 16년 5~7배 수익",
    "[신흥국→선진국 M&A의 교과서] [브랜드 보존 + 운영 자율성] 모델, 영국 본사·영국인 경영진·영국 공장 유지. 이후 길리-볼보(2010), 레노버-모토로라(2014) 거래의 직접적 영향",
  ],

  industryOverview: {
    body: "2000년대 후반 럭셔리 자동차 산업은 거대한 자본 재편기에 진입했다. 포드·GM·크라이슬러 등 미국 빅3가 1990~2000년대에 사들인 유럽 럭셔리 브랜드(재규어·랜드로버·볼보·사브·아스턴마틴)는 본체와 시너지를 내지 못한 채 만성 적자를 냈고, 2007~2008년 금융위기 직전 디톡스 매각의 물결이 시작됐다. 동시에 영국 자동차 산업은 1980~90년대 영국 자본의 이탈로 사실상 외국 자본 종속 단계에 들어섰다, 재규어·랜드로버(포드), 롤스로이스(BMW), 벤틀리(폭스바겐), 미니(BMW), 애스턴마틴(포드→인베스트먼트 컨소시엄), 로터스(말레이시아 프로톤). 영국 자동차 산업의 \"국적 상실\" 시대였다. 반대편에서는 인도·중국 신흥국 자본이 글로벌 M&A 무대에 본격 등판했다. 타타 그룹과 길리(吉利)가 그 선봉이었다.",
    metrics: [
      { label: "포드 PAG 누적 투자 (1987~2000)",   value: "~$15B",       sub: "Aston Martin/Jaguar/Volvo/Land Rover" },
      { label: "포드 PAG 매각 회수 (2007~2010)",   value: "~$5B",         sub: "Aston Martin $925M + JLR $2.3B + Volvo $1.8B" },
      { label: "JLR 2007년 매출 (포드 산하 마지막 해)", value: "~£10B",        sub: "두 브랜드 합산" },
      { label: "재규어 + 랜드로버 종업원 (2008)",     value: "약 16,000명",  sub: "주로 영국 미들랜드 지역" },
    ],
    subBody:
      "타타의 인수는 인도 재계의 글로벌화 정점과 영국 자동차의 [외국 자본 종속 시대] 한복판에서 발생했다. 시장 일각에서는 \"인도 회사가 영국 명문 브랜드를 살 수 있겠나\"라는 회의가 있었지만, 영국 노조가 명시적으로 타타를 지지한 것이 결정적이었다. 노조가 인도 자본을 환영한 배경에는 [포드는 공장을 닫지만 타타는 유지한다]는 약속이 있었다. 이후 길리의 볼보 인수(2010, $1.8B)도 동일한 \"브랜드 + 운영 자율성\" 공식을 따랐다.",
    players: [
      { name: "Tata Motors",          role: "인수자, 인도 최대 상용차·승용차 제조사, 타타 그룹 계열" },
      { name: "Ford Motor Company",   role: "매도자, PAG 해체 진행 중인 디트로이트 빅3" },
      { name: "Jaguar Cars",          role: "1922년 설립 영국 럭셔리 세단·스포츠카 브랜드 (Coventry 본사)" },
      { name: "Land Rover",           role: "1948년 설립 영국 오프로드·럭셔리 SUV 브랜드 (Solihull 본사)" },
      { name: "Alan Mulally (Ford)",  role: "2006년 보잉에서 영입된 포드 CEO, One Ford 전략의 주도자" },
      { name: "Ratan Tata",           role: "타타 그룹 회장, 인수의 전략적 결정권자" },
      { name: "UK Unite Union",       role: "영국 자동차 노조, 인수 후보 중 타타를 명시적으로 지지" },
      { name: "Mahindra & Mahindra",  role: "경쟁 인수 후보, 인도 SUV 제조사" },
      { name: "One Equity / Cerberus", role: "경쟁 인수 후보, 미국 사모펀드 컨소시엄" },
    ],
  },

  companyOverview: {
    targetName: "Jaguar Cars + Land Rover (포드 PAG 산하)",
    body: "재규어는 1922년 영국 블랙풀에서 사이드카 제조사 Swallow Sidecar Company로 출범했고, 1935년 SS Jaguar 브랜드를 출시한 뒤 전후 영국 럭셔리 세단의 대표 브랜드로 성장했다. 1968년 영국 British Leyland 그룹에 흡수됐다가 1984년 분리 상장, 1989년 포드에 $2.5B에 인수됐다. 랜드로버는 1948년 농업·군용 4WD로 출범한 후 1970년 레인지로버 출시로 럭셔리 SUV 카테고리를 사실상 창조했고, 1994년 BMW에 매각됐다가 2000년 포드에 $2.7B에 재매각됐다. 두 브랜드 모두 영국 미들랜드 지역에 본사와 공장을 두고 있었고(재규어 Coventry/Castle Bromwich, 랜드로버 Solihull/Halewood), 합산 종업원 약 16,000명. 포드 산하 PAG에서 8년간 같은 우산을 쓰면서도 별도 브랜드로 운영됐다. 2007년 합산 매출 약 £10B 수준.",
    metrics: [
      { label: "재규어 설립",          value: "1922년",        sub: "Swallow Sidecar, 1935년 Jaguar 브랜드" },
      { label: "랜드로버 설립",         value: "1948년",        sub: "농업·군용 4WD에서 출발" },
      { label: "포드 인수 (재규어)",    value: "1989년 · $2.5B",  sub: "PAG의 첫 자산" },
      { label: "포드 인수 (랜드로버)",   value: "2000년 · $2.7B",  sub: "BMW에서 재매각" },
    ],
    financials: [
      { year: "FY2005", revenue: 9500,  cogs: 8600,  grossProfit: 900,  sga: 800, operatingIncome: 100,  ebitda: 500 },
      { year: "FY2006", revenue: 9800,  cogs: 8800,  grossProfit: 1000, sga: 800, operatingIncome: 200,  ebitda: 600 },
      { year: "FY2007", revenue: 10200, cogs: 9000,  grossProfit: 1200, sga: 850, operatingIncome: 350,  ebitda: 750 },
      { year: "FY2008", revenue: 11700, cogs: 10400, grossProfit: 1300, sga: 900, operatingIncome: 400,  ebitda: 850 },
      { year: "FY2009", revenue: 6500,  cogs: 6300,  grossProfit: 200,  sga: 700, operatingIncome: -500, ebitda: -100 },
    ],
    financialsNote: "단위: £M (백만 파운드) | 포드 PAG 보고 기준 추정 + 타타 인수 첫 해 포함 | FY2009는 리먼 직후 판매 붕괴 반영, 실제는 영업적자",
    financialsCurrency: "£",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "본 거래는 포드의 PAG 해체 마무리 단계에서 [재규어 카스 + 랜드로버] 두 브랜드 자산과 영국·해외 자회사 100%를 일괄 양도하는 100% 주식 매각이었다. 현금 $2.3B (운전자본 조정 후 최종)에 더해 약 $600M의 순연금부채를 타타 모터스가 떠안았고, 실효 EV는 약 $3B 수준. 단, 두 브랜드의 운영 독립성과 영국 입지 유지가 매각 조건에 명시됐다. 포드는 5년 이상 엔진 공급계약을 유지하기로 했고(JLR이 자체 파워트레인 라인업을 구축하는 동안의 안전판), 영국 공장 폐쇄·대규모 정리해고 금지 같은 [브랜드 보존 약속]이 명문화됐다. 타타는 인수 자금을 본사 차입 + 신디케이트 브리지론으로 조달했고, 클로징 후 리먼 사태로 리파이낸싱에 큰 어려움을 겪었다.",
    preOwnership: {
      nodes: [
        { id: "ford_pre",   label: "Ford Motor Company", sub: "PAG 우산",         type: "acquirer" },
        { id: "pag_pre",    label: "Premier Automotive Group", sub: "포드 사업부",  type: "entity" },
        { id: "jag_pre",    label: "Jaguar Cars",        sub: "1989년 포드 인수",  type: "target" },
        { id: "lr_pre",     label: "Land Rover",         sub: "2000년 포드 인수",  type: "target" },
      ],
      edges: [
        { from: "ford_pre", to: "pag_pre", label: "100% 사업부" },
        { from: "pag_pre",  to: "jag_pre", label: "100%" },
        { from: "pag_pre",  to: "lr_pre",  label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "tata_grp",  label: "Tata Group (Tata Sons)", sub: "지주 그룹",    type: "acquirer" },
        { id: "tata_mot",  label: "Tata Motors Limited",     sub: "상장 모회사",   type: "acquirer" },
        { id: "jlr",       label: "Jaguar Land Rover Ltd",   sub: "신설 영국 통합 법인", type: "target" },
        { id: "jag_post",  label: "Jaguar Cars",             sub: "JLR 산하 브랜드", type: "target" },
        { id: "lr_post",   label: "Land Rover",              sub: "JLR 산하 브랜드", type: "target" },
        { id: "ford_post", label: "Ford (공급 계약)",         sub: "엔진 5년+ 공급",  type: "entity" },
      ],
      edges: [
        { from: "tata_grp", to: "tata_mot", label: "지배" },
        { from: "tata_mot", to: "jlr",      label: "100% (운영 자율)" },
        { from: "jlr",      to: "jag_post", label: "브랜드 운영" },
        { from: "jlr",      to: "lr_post",  label: "브랜드 운영" },
        { from: "ford_post", to: "jlr",     label: "엔진·플랫폼 공급 (5년+)" },
      ],
    },
    keyTerms: [
      { label: "거래 형태",            value: "100% 주식·자산 일괄 양도 (현금 인수)" },
      { label: "인수 가격",            value: "$2.3B 현금 (운전자본 조정 후 최종)", accent: true },
      { label: "연금 부채 인수",        value: "약 $600M 순연금부채 (타타가 가정)", accent: true },
      { label: "실효 EV",             value: "약 $3B" },
      { label: "포드 엔진 공급 계약",    value: "5년 이상 유지 (JLR 파워트레인 자립 전 안전판)" },
      { label: "브랜드 보존",          value: "재규어·랜드로버 별도 브랜드 운영, 통합 NO" },
      { label: "영국 공장 유지",        value: "Solihull, Castle Bromwich, Halewood 모두 유지", accent: true },
      { label: "영국 본사 유지",        value: "Coventry / Gaydon 본사 그대로" },
      { label: "경영진 유지",          value: "영국인 CEO·임원진 유지 (타타 직접 파견 X)" },
      { label: "노조 합의",            value: "Unite Union이 인수 후보 중 명시적으로 타타 지지" },
      { label: "신설 법인",            value: "Jaguar Land Rover Ltd (영국 등기, 2013년 공식 통합)" },
      { label: "인수 자금 조달",        value: "타타 본사 차입 + 신디케이트 브리지론 (인수금융)" },
      { label: "주식 매도자",          value: "Ford Motor Company (100%)" },
      { label: "발표일 / 클로징",       value: "2008.03.26 / 2008.06.02" },
    ],
  },

  advisors: {
    body: "본 거래는 포드 PAG 해체 막바지 매물이었고, 양 측 모두 메가 인베스트먼트 뱅크 라인업을 풀로 가동했다. 포드는 골드만삭스·HSBC·모건스탠리 3사를 재무 자문으로 동시 활용했는데, 이는 [매각 가치 극대화 + 글로벌 인수 후보 풀 확장] 의도. 타타는 인도 자문사가 아닌 JP모건·시티 라인업을 들였다, 인도 자본의 영국 럭셔리 인수라는 정치적 민감성을 의식한 선택. 영국 변호사 라인업(Hogan & Hartson은 양 측 공동, Allen & Overy는 타타 단독)이 들어왔고, JLR 측은 KPMG가 연금 부채 측정 자문으로 들어왔다. 영국 정부는 인수 심사를 별도 외부 자문사 없이 재무성 인하우스로 진행.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Tata Motors (인수자)",
        initials: "TATA",
        bg: "bg-blue-800",
        advisors: [
          {
            firm: "JP Morgan",
            role: "재무 자문 (리드)",
            roleType: "financial",
            note: "거래 구조·평가·신디케이트 브리지론 주선",
          },
          {
            firm: "Citi",
            role: "재무 자문 (코리드)",
            roleType: "financial",
            note: "인수 자금 조달 및 환율 헤지 자문",
          },
          {
            firm: "Hogan & Hartson",
            role: "법무 자문 (미국)",
            roleType: "legal",
            note: "미국 SEC·규제·자산 이전 구조",
          },
          {
            firm: "Allen & Overy",
            role: "법무 자문 (영국)",
            roleType: "legal",
            note: "영국법·노조·연금·고용 계약 자문",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Ford / JLR (매도자)",
        initials: "FORD",
        bg: "bg-blue-500",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (리드)",
            roleType: "financial",
            note: "매각 프로세스 설계·가격 협상 주관",
          },
          {
            firm: "HSBC",
            role: "재무 자문 (코리드)",
            roleType: "financial",
            note: "글로벌 인수 후보 발굴 및 인도·아시아 인수자 채널",
          },
          {
            firm: "Morgan Stanley",
            role: "재무 자문 (코리드)",
            roleType: "financial",
            note: "유럽 PE·전략적 인수자 컨택 채널",
          },
          {
            firm: "Hogan & Hartson",
            role: "법무 자문 (공동)",
            roleType: "legal",
            note: "미국·영국 자산 이전·계약 자문 (양 측 공동 사용)",
          },
          {
            firm: "KPMG",
            role: "연금 부채 자문",
            roleType: "other",
            note: "JLR 영국 연금 적자 $600M+ 측정·이전 자문",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 2008년 당시 공개 보도 및 회사 공시 기반. 일부 부수 자문사는 공개되지 않음.",
  },

  valuation: {
    body: "본 거래의 핵심은 [포드가 1989년·2000년에 합산 $5.2B을 쓴 자산을 18년 만에 $2.3B에 매각]했다는 디스트레스 가격 자체에 있다. 운영마진 3% 안팎(2007년 기준)의 자동차 자산이 EBITDA 멀티플 3~4x 수준에서 거래된 셈. 동시에 약 $600M 연금부채를 타타가 인수하면서 실효 EV는 약 $3B. 포드는 PAG에 쓴 $15B 중 매각으로 약 $5B만 회수했으니, 누적 $10B 손실로 정리된 사업부였다. 타타 입장에서는 [16,000명 영국 종업원 + 두 개 글로벌 브랜드 + 영국 R&D 인프라]를 $3B에 산 셈이고, 이후 16년에 걸쳐 2024년 추정 기업가치 $25~30B로 부풀어 5~7배 수익을 낸다.",
    rows: [
      { item: "재규어 인수가 (1989, Ford)",    val: "$2.5B",     note: "Ford PAG 빌드업의 첫 자산" },
      { item: "랜드로버 인수가 (2000, Ford)",   val: "$2.7B",     note: "BMW에서 재매각, 두 번째 PAG 자산" },
      { item: "포드 PAG 누적 투자",            val: "~$15B",     note: "Aston Martin/Jaguar/Volvo/Land Rover" },
      { item: "JLR 매각가 (2008, 타타)",       val: "$2.3B 현금", note: "운전자본 조정 후 최종", accent: true },
      { item: "연금 부채 인수",                val: "~$600M",     note: "타타가 추가로 가정한 순연금부채", accent: true },
      { item: "실효 EV",                     val: "~$3B",      note: "현금 + 연금 가정" },
      { item: "JLR 2007 매출",               val: "~£10B",      note: "포드 산하 마지막 해" },
      { item: "JLR 2024 매출 (FY24)",        val: "£29B",      note: "타타 인수 16년 후" },
      { item: "JLR 2024 영업이익",            val: "£2.6B",      note: "EBIT 마진 8.5%", accent: true },
      { item: "JLR 2024 추정 기업가치",        val: "$25~30B",   note: "타타 모터스 자회사·비상장, 시장 추정", accent: true },
      { item: "16년 누적 수익 배수",            val: "~5~7배",    note: "$2.3B 초기 + ~$2B 추가 자본 대비" },
    ],
    disclaimer: "주: 1989·2000년 인수가는 명목 달러 기준 (인플레이션 미조정). 2024년 기업가치는 비상장 자회사 추정. JLR 회계연도는 4월~3월 마감.",
  },

  rationale: {
    buyer: {
      title: "타타는 왜 리먼 직전에 럭셔리 두 개를 샀나",
      initials: "TATA",
      bg: "bg-blue-800",
      points: [
        "[디스트레스 명문 브랜드 + 운영 자율성] 라탄 타타의 일관된 글로벌 인수 공식. 2000년 테틀리·2007년 코러스에 이어 [포드가 $5.2B 쓴 자산을 $2.3B에] 인수하는 가격 우위가 결정적",
        "[인도 상용차·소형차에서 글로벌 럭셔리·프리미엄으로의 자기변신] 타타 나노($2,500 소형차)와 인도 상용차로 알려진 회사가 단숨에 영국 럭셔리 엔지니어링·프리미엄 SUV 영역에 진입. 그룹 위상 자체가 달라지는 거래",
        "[중국 신흥 럭셔리 수요에 대한 베팅] 2008년 당시 이미 중국 자동차 시장은 럭셔리 SUV 폭발 직전. 랜드로버 + 재규어 조합은 그 수요를 흡수할 가장 잘 맞는 포트폴리오. 실제로 2010년대 중국이 JLR 최대 시장으로 부상",
        "[영국 R&D·인력·브랜드 자산 인수] $3B 실효 EV에 영국 미들랜드 자동차 엔지니어링 클러스터·R&D 센터·16,000명 숙련 인력·100년 브랜드 자산을 한 번에 확보. 신규 설립으로는 절대 불가능한 자산",
        "[운영 자율성으로 노조 지지 확보] 인도 자본에 대한 영국 노조의 의구심을 [브랜드 보존 + 영국 공장·본사 유지 + 영국인 경영진] 약속으로 해소. 인수 후보 경쟁에서 노조가 명시적으로 타타 지지한 것이 낙찰 핵심 변수",
      ],
    },
    seller: {
      title: "포드는 왜 $5.2B 자산을 $2.3B에 팔았나",
      initials: "FORD",
      bg: "bg-blue-500",
      points: [
        "[멀러리의 One Ford 전략] 2006년 부임한 앨런 멀러리는 PAG 전체를 [본 브랜드와 시너지 없는 자본 흡수 사업부]로 판정. 매각 자금을 본 브랜드 회생에 투입해 2008~2010년 미국 빅3 중 유일하게 정부 구제금융 없이 살아남는 결정적 자금원이 됨",
        "[2008년 글로벌 자동차 수요 둔화 신호] 발표일이 2008년 3월, 이미 미국 주택시장 균열과 자동차 판매 둔화 시그널이 시작된 시점. 포드 입장에서는 [럭셔리 사업부가 본 브랜드 위기를 키우기 전에] 매각 클로징을 서둘러야 했음",
        "[PAG 전체 해체의 마지막 큰 거래] 2007년 애스턴마틴($925M) 매각에 이어 JLR이 PAG의 가장 큰 자산. 이 거래 클로징 후 남은 건 볼보뿐이었고, 2010년 길리에 $1.8B로 매각하면서 PAG 해체 완성",
        "[디스트레스 가격 수용] $5.2B 누적 투자 대비 $2.3B 현금 회수는 명목 60% 손실. 그러나 2008년 9월 리먼 사태 이후 시점이라면 거래 자체가 깨졌거나 가격이 더 떨어졌을 것. 6월 클로징이 포드 입장에서는 [매도 타이밍의 절묘함]",
        "[엔진 공급계약 5년+ 유지] 단순 매각이 아니라 [JLR이 자체 파워트레인 자립할 때까지 포드 엔진을 공급]하는 추가 매출 채널 확보. 일종의 [출자전환식 거래 종료] 효과",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "2008년 6월 클로징 후 18년이 지난 2026년 시점, 본 거래는 신흥국→선진국 M&A 역사상 가장 성공적인 사례 중 하나로 평가받는다. 첫 12~24개월의 디스트레스(리먼 직후 판매 30%+ 급감, 봄베이 주가 90% 폭락, 영국 정부 보증 거절)는 [세기의 실패]가 될 뻔했지만, 2011년 레인지로버 이보크와 2010년대 중국 럭셔리 SUV 붐이 결합하면서 2012년부터 JLR은 타타 모터스의 최대 수익원으로 자리잡았다. 2014~2015년 운영마진 15% 정점 이후 2019~2022년 디젤 수요 붕괴·반도체 부족으로 다시 어려움을 겪었으나, 2023~2024년 회복해 FY24 영업이익 £2.6B를 달성했다. 향후 5년간 £15B의 EV 전환 투자가 진행 중이고, 2024년 추정 기업가치 $25~30B로 인수 대비 약 5~7배 수익을 냈다. 더 중요한 건 구조적 영향, 길리-볼보(2010), 레노버-모토로라(2014), 그리고 실패 사례인 마힌드라-쌍용(2011)까지 모두 본 거래의 [브랜드 보존 + 운영 자율성] 템플릿을 직접 참조했다.",
    overallVerdict: "신흥국→선진국 M&A 역사상 가장 성공적인 사례, 16년 5~7배 수익 + 구조적 템플릿 효과",
    positives: [
      "[재무적 성과] $2.3B 초기 + 약 $2B 추가 자본 투입 대비 2024년 추정 기업가치 $25~30B, 16년 5~7배 수익",
      "[브랜드 부활] 레인지로버 이보크(2011)·디펜더 리부트(2020)·재규어 EV 전환(2025) 등 두 브랜드 모두 글로벌 경쟁력 회복",
      "[운영 자율성 모델 검증] 영국 본사·영국인 경영진·영국 공장 유지로 노조 갈등 없이 16년 운영, 길리-볼보·레노버-모토로라가 모방한 표준 모델",
      "[중국·미국 럭셔리 수요 흡수] 2010년대 JLR 최대 수익 시장이 중국, 일부 모델 중국 영업이익률 90%대. 미국에서도 랜드로버 디펜더 리부트 성공",
      "[타타 그룹 글로벌 위상] 인도 상용차·소형차 회사에서 [글로벌 럭셔리·프리미엄 엔지니어링 그룹]으로 자기변신, 그룹 전체 브랜드 가치 점프",
    ],
    risks: [
      "[EV 전환 자본 부담] 향후 5년간 £15B EV 투자, 중국 BYD·테슬라와의 경쟁 격화. 럭셔리 EV 카테고리에서 JLR이 충분한 차별화를 만들 수 있는지 불확실",
      "[중국 럭셔리 SUV 둔화 리스크] JLR 영업이익의 상당 비중이 중국, 2019~2022년 중국 둔화로 한 차례 큰 타격. 향후 중국 경기 둔화 시 다시 노출",
      "[디젤 단종·규제 비용] 영국·EU 디젤 규제로 JLR 디젤 라인업 단종 진행, 기존 디젤 라인업 의존도가 높았던 만큼 전환 비용 부담",
      "[타타 모터스 인도 본업 약세] JLR이 그룹 수익의 70%+ 를 차지하면서 [타타 모터스 인도 본업의 수익성 약화]가 구조적 리스크로 부상. JLR이 흔들리면 그룹 전체가 흔들림",
    ],
    editorNote:
      "이 거래의 진짜 의미는 \"인도 회사가 영국 브랜드를 샀다\"는 사건이 아니라, [신흥국 자본이 선진국 명문 자산을 디스트레스 가격에 인수하면서 운영 자율성으로 정치적 마찰을 회피하는] 템플릿을 처음으로 입증한 데 있다. 라탄 타타의 베팅 공식, [디스트레스 가격 + 브랜드 보존 + 운영 자율성]은 이후 길리-볼보, 레노버-IBM 씽크패드, 레노버-모토로라로 직접 이어졌다. 2008년 6월 클로징 직후 리먼이 무너지면서 18개월간 [세기의 실패]로 불릴 뻔했던 거래가 16년 만에 [신흥국→선진국 M&A의 교과서]로 자리잡은 사례. 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "TATA",
    acquirerBg: "bg-blue-800",
    targetInitials: "JLR",
    targetBg: "bg-green-700",
    acquirerName: "Tata Motors Limited",
    targetName: "Jaguar Cars + Land Rover (Ford PAG)",
    dealTitle: "Tata Motors Acquires Jaguar Land Rover from Ford, EM-to-DM Cross-border M&A Template",
    dealSize: "$2.3B cash + ~$600M pension liability",
    dealSizeUSD: "approx. $3B effective EV",
    evEbitda: "~3~4x (FY2007 EBITDA)",
    closeDate: "Jun 2, 2008",
  },

  sources: [
    { id: 1, text: "Ford Motor Company press release, Ford to Sell Jaguar and Land Rover to Tata Motors for $2.3 Billion (2008-03-26)", url: "https://media.ford.com" },
    { id: 2, text: "Tata Motors official announcement, Completion of Acquisition of Jaguar Land Rover Businesses (2008-06-02)", url: "https://www.tatamotors.com" },
    { id: 3, text: "Tata Motors Annual Report FY2024, Jaguar Land Rover segment performance", url: "https://www.tatamotors.com/investors/annual-reports" },
    { id: 4, text: "Financial Times, Tata buys Jaguar Land Rover for $2.3bn (2008-03-26)", url: "https://www.ft.com" },
    { id: 5, text: "The Economist, Cars at the crossroads, Ford sells JLR to Tata (2008-04)", url: "https://www.economist.com" },
    { id: 6, text: "Reuters, UK refuses 340 million pound loan guarantee for Tata Motors / JLR (2009-04)", url: "https://www.reuters.com" },
    { id: 7, text: "Bloomberg, Tata's JLR turnaround, How Range Rover Evoque saved the deal (2012)", url: "https://www.bloomberg.com" },
    { id: 8, text: "Business Standard (India), Ratan Tata's playbook, Tetley to JLR (2014)", url: "https://www.business-standard.com" },
    { id: 9, text: "Autocar UK, 15 years of Tata at JLR, the inside story (2023-06)", url: "https://www.autocar.co.uk" },
    { id: 10, text: "JLR FY2024 Results announcement, GBP 2.6 billion profit, GBP 29 billion revenue (2024-05)", url: "https://www.jaguarlandrover.com/investors" },
  ],

  seo: {
    title: "타타 모터스 × 재규어 랜드로버 $2.3B, 16년에 걸친 신흥국→선진국 M&A의 교과서",
    description:
      "2008년 3월 포드가 재규어 + 랜드로버를 인도 타타 모터스에 $2.3B 현금에 매각. PAG 해체의 마지막 큰 거래, 클로징 3개월 뒤 리먼, 영국 정부 £340M 보증 거절, 2011년 레인지로버 이보크 부활, 2024 회계연도 영업이익 £2.6B. 브랜드 보존 + 운영 자율성 템플릿이 길리-볼보·레노버-모토로라까지 이어진 신흥국→선진국 M&A의 교과서 해부.",
    keywords: [
      "타타 모터스 JLR 인수",
      "재규어 랜드로버",
      "Tata JLR",
      "Ford PAG",
      "포드 프리미어 오토모티브 그룹",
      "라탄 타타",
      "Ratan Tata",
      "Alan Mulally One Ford",
      "신흥국 선진국 M&A",
      "EM to DM acquisition",
      "Range Rover Evoque",
      "JLR 인수 가격",
      "디스트레스 인수",
      "브랜드 보존 전략",
      "크로스보더 M&A",
    ],
  },

  concepts: [
    {
      term: "크로스보더 M&A (Cross-border M&A)",
      description: "서로 다른 국적의 인수자와 피인수자 사이에서 이루어지는 M&A. 본 거래는 인도 자본 → 영국 자산 거래로, 노조·정부·문화 마찰이 핵심 리스크. 타타는 운영 자율성으로 마찰을 회피했다.",
    },
    {
      term: "브랜드 보존 전략 (Brand Preservation Strategy)",
      description: "인수 후에도 피인수 브랜드의 정체성·본사·경영진·생산 기지를 유지하는 전략. 타타는 재규어·랜드로버 두 브랜드를 별도 운영, 영국 본사·영국인 CEO·영국 공장을 모두 유지했다. 노조 지지 확보의 결정적 변수.",
    },
    {
      term: "디스트레스 자산 인수 (Distressed Asset Acquisition)",
      description: "매도자의 재무 압박·전략 변화로 본질가치 이하 가격에 매각되는 자산을 인수하는 전략. 포드가 $5.2B에 인수한 자산을 $2.3B에 매각한 것은 [멀러리의 One Ford 전략 + 2008년 자동차 수요 둔화] 압박 때문. 타타가 절반 이하 가격에 산 핵심 요인.",
    },
    {
      term: "신흥국→선진국 인수 템플릿 (EM→DM Acquisition Template)",
      description: "인도·중국 등 신흥국 자본이 미국·유럽 명문 자산을 인수할 때의 표준 공식. 본 거래는 그 템플릿의 원형, [디스트레스 가격 + 브랜드 보존 + 운영 자율성]. 길리-볼보(2010), 레노버-모토로라(2014)에 직접 적용됨.",
    },
    {
      term: "운영 자율성 독트린 (Operational Autonomy Doctrine)",
      description: "인수 후에도 피인수 자회사의 일상 경영을 본사가 직접 통제하지 않고 현지 경영진에게 위임하는 거버넌스 원칙. 타타는 16년간 JLR을 영국인 경영진이 운영하도록 두었고, 본사는 자본 배분과 큰 전략 결정만 관여. 인도 자본에 대한 영국 노조·정부의 거부감을 완화한 핵심 장치.",
    },
    {
      term: "연금 부채 인수 (Pension Liability Assumption)",
      description: "M&A에서 매도자의 미적립 연금부채를 인수자가 함께 떠안는 거래 구조. JLR은 영국 확정급여형 연금 적자 약 $600M을 안고 있었고, 타타가 이를 함께 인수. 명목 매각가 $2.3B에 연금 $600M을 더하면 실효 EV는 약 $3B로 올라간다.",
    },
    {
      term: "Mulally One Ford 전략",
      description: "2006년 포드 CEO로 부임한 앨런 멀러리가 추진한 구조조정 전략. PAG 등 비핵심 사업부를 전부 매각하고 포드 본 브랜드에 집중. 2007 애스턴마틴 → 2008 JLR → 2010 볼보 매각으로 약 $5B 회수, 그 자금이 2008~2010년 포드가 미국 빅3 중 유일하게 정부 구제금융 없이 살아남는 토대가 됐다.",
    },
    {
      term: "럭셔리 자동차 사이클 (Luxury Auto Cycle)",
      description: "럭셔리·프리미엄 자동차 수요의 7~10년 주기적 변동성. 본 거래는 2008년 금융위기 직전 정점에서 클로징해 직후 30%+ 판매 급감을 맞았지만, 2011~2018년 중국 럭셔리 SUV 붐 사이클에 올라타 부활. 럭셔리 자동차 자산은 매크로 사이클 노출이 매우 큰 자산군이라는 사실을 입증.",
    },
  ],

  faq: [
    {
      q: "포드는 왜 $5.2B에 산 자산을 $2.3B에 팔았나요?",
      a: "2006년 보잉에서 영입된 앨런 멀러리 CEO가 [One Ford] 전략을 선언했기 때문입니다. PAG(Premier Automotive Group)는 포드 본 브랜드와 시너지를 내지 못한 만성 적자 사업부였고, 멀러리는 본 브랜드에 집중하기 위해 PAG 전체 해체를 결정했습니다. 2007년 애스턴마틴($925M), 2008년 JLR($2.3B), 2010년 볼보($1.8B)를 차례로 매각해 약 $5B을 회수했고, 이 자금이 2008~2010년 포드가 미국 빅3 중 유일하게 정부 구제금융 없이 살아남는 결정적 자금원이 됐습니다. 명목 $10B 손실이지만, 본 브랜드 회생을 위한 [전략적 손절]로 평가받습니다.",
    },
    {
      q: "왜 타타는 클로징 3개월 뒤 리먼이 무너졌는데도 거래를 깨지 않았나요?",
      a: "법적으로 거래는 2008년 6월 2일에 이미 클로징됐고, 9월 리먼은 그 이후 사건이라 [되돌릴 수 없는 상태]였습니다. 2008년 4분기~2009년 1분기 JLR 판매가 30%+ 빠지면서 봄베이 거래소 타타 모터스 주가는 90% 폭락했고, 2009년 4월 타타가 영국 정부에 £340M 대출 보증을 요청했지만 거절당했습니다. 결국 타타 그룹 본사가 직접 자본을 보강해 JLR을 살려냈고, 이것이 [\"인도 그룹이 영국 자산을 책임진다\"]는 시그널로 작용해 노조·영국 사회의 신뢰를 얻는 전화위복이 됐습니다.",
    },
    {
      q: "레인지로버 이보크가 왜 그렇게 결정적이었나요?",
      a: "2011년 출시된 레인지로버 이보크는 [컴팩트 럭셔리 SUV] 카테고리를 사실상 새로 만든 제품입니다. 기존 레인지로버 풀사이즈가 €70K+ 가격대였다면 이보크는 €30K대에서 럭셔리 SUV를 제공해, 중국·미국 신흥 럭셔리 소비층을 폭발적으로 흡수했습니다. 2012년 JLR 영업이익이 처음으로 £1B+ 를 돌파했고, 이후 2014~2015년 운영마진 15% 정점까지 끌어올린 [부활의 결정타]였습니다. 이 제품 없이는 본 거래가 \"신흥국 M&A의 교과서\"가 아니라 \"세기의 실패\"로 기록됐을 가능성이 큽니다.",
    },
    {
      q: "왜 타타는 재규어와 랜드로버를 통합하지 않고 별도 브랜드로 운영했나요?",
      a: "[브랜드 보존 전략]이 매각 조건에 명시적으로 포함됐고, 동시에 두 브랜드가 타겟 고객층이 완전히 달랐기 때문입니다. 재규어는 [영국 럭셔리 세단·스포츠카], 랜드로버는 [럭셔리 SUV·오프로드]로 카테고리가 다릅니다. 통합 시 두 브랜드 모두의 정체성이 희석될 위험이 컸고, 타타는 [Jaguar Land Rover Ltd]라는 통합 운영 법인은 만들면서도 브랜드는 별도로 유지하는 방식을 선택했습니다. 결과적으로 2010년대 랜드로버가 폭발하는 동안 재규어가 정체기에 있어도 두 브랜드가 서로의 운명에 끌려가지 않을 수 있었습니다.",
    },
    {
      q: "이 거래가 길리-볼보, 레노버-모토로라 같은 다른 거래에 어떻게 영향을 줬나요?",
      a: "본 거래는 [신흥국→선진국 M&A의 운영 모델]을 처음으로 입증한 사례입니다. 핵심 공식은 [디스트레스 가격에 인수 + 브랜드·본사·경영진·공장 유지로 정치적 마찰 회피 + 본사는 자본 배분만 관여]입니다. 2010년 중국 길리가 포드에서 볼보를 $1.8B에 인수할 때 동일한 공식을 사용했고(스웨덴 본사·경영진·공장 유지), 2014년 중국 레노버가 구글에서 모토로라 모빌리티를 인수할 때, 2014년 인도 마힌드라가 한국 쌍용을 인수할 때(이건 실패)에도 본 거래의 공식을 직접 참조했습니다. 신흥국 M&A 컨설팅 업계에서 본 거래는 [표준 케이스 스터디]로 자리잡았습니다.",
    },
    {
      q: "2026년 현재 JLR의 가장 큰 리스크는 무엇인가요?",
      a: "세 가지 구조적 리스크가 있습니다. ① [EV 전환 자본 부담], 향후 5년간 £15B EV 투자가 진행 중이고 중국 BYD·테슬라와의 럭셔리 EV 경쟁이 격화. JLR이 충분한 차별화를 만들 수 있을지 불확실. ② [중국 수요 의존], JLR 영업이익의 상당 비중이 중국 시장. 2019~2022년 중국 둔화로 큰 타격을 받았고, 향후 중국 경기 둔화 시 다시 노출. ③ [타타 모터스 그룹 의존], JLR이 타타 모터스 그룹 수익의 70%+ 를 차지하면서 그룹 전체의 단일 자산 의존도가 매우 높음. JLR이 흔들리면 인도 본업의 약세와 결합돼 그룹 전체가 흔들리는 구조적 취약점.",
    },
  ],
};

export default deal;
