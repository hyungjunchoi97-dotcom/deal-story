/**
 * BHP Billiton × Rio Tinto 적대적 M&A 시도
 * 역대 최대 광업 적대적 공개매수 — $1,480억 제안, 2008년 11월 자진 철수
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bhp-rio-tinto",
  title: "BHP Billiton은 왜 $1,480억에 Rio Tinto를 노렸나 — 역대 최대 광업 적대적 M&A 해부",
  subtitle: "자원 슈퍼사이클의 정점 · Chinalco 화이트나이트 · 글로벌 금융위기가 끝낸 역대급 적대적 공세",
  category: "control",
  industry: "광업·자원 / Mining & Resources",
  country: "호주·영국",
  announcedAt: "2007-11-08",
  closedAt: "2008-11-25",
  announcedDisplay: "2007년 11월",
  closedDisplay: "2008년 11월 (철수)",
  readingMinutes: 11,
  tags: ["BHP", "리오틴토", "적대적 M&A", "광업", "철광석", "중국", "글로벌 금융위기", "자원 M&A"],
  excerpt:
    "BHP Billiton이 Rio Tinto에 주식 교환 방식(BHP 3.4주:Rio 1주)으로 역대 최대 광업 M&A를 제안한 2007~2008년 적대적 공세. 중국 국유기업 Chinalco가 화이트나이트로 등장해 Rio 지분 9%를 매입했고, 2008년 리먼 파산으로 촉발된 금융위기가 원자재 가격을 폭락시키며 BHP의 자진 철수로 막을 내렸다.",

  acquirer: { initials: "BHP", bg: "bg-orange-700", label: "BHP Billiton" },
  target:   { initials: "RIO", bg: "bg-blue-700",   label: "Rio Tinto plc" },

  background: [
    "2000년대 중반 중국의 급격한 인프라 건설 붐은 철광석·구리·석탄 수요를 폭발적으로 끌어올렸다. 이른바 '자원 슈퍼사이클'로 불린 이 시기에 BHP Billiton과 Rio Tinto는 글로벌 광업 시장의 양대 산맥으로 성장했다. BHP Billiton CEO Marius Kloppers는 '자원 슈퍼사이클에서 규모를 키워야 한다'는 논리 아래 합병을 통한 글로벌 1위 광업 제국 건설을 구상했다.",
    "Rio Tinto는 2007년 캐나다 알루미늄 회사 Alcan을 $380억에 인수하며 알루미늄 사업을 대폭 확장했다. 그러나 이 대형 인수는 Rio Tinto의 부채를 급격히 늘렸고, 재무 건전성에 대한 시장의 우려를 낳았다. BHP는 이 약점을 포착해 2007년 11월 8일 BHP 3.4주와 Rio 1주를 교환하는 전액 주식 교환 방식의 합병을 공식 제안했다. 당시 시가 기준 약 $1,470~1,480억 규모였다.",
    "Rio Tinto 이사회는 제안을 즉각 거부하며 '근본적으로 저평가됐다'고 반박했다. 방어 전략의 핵심은 중국 국유기업 Chinalco(중국알루미늄공사)를 화이트나이트로 유치하는 것이었다. 2008년 1월, Chinalco는 Lehman Brothers와 함께 Rio Tinto 지분 9%를 약 $140억에 매입하며 BHP의 우호 지분 확보를 차단했다. 이로써 BHP가 적대적 취득 가능 지분은 사실상 봉쇄됐다.",
    "결정타는 2008년 9월 리먼 브러더스 파산에서 비롯된 글로벌 금융위기였다. 철광석·구리 가격이 30~50% 폭락하며 합병의 핵심 논리였던 '자원 슈퍼사이클'이 흔들렸다. 두 달 후인 2008년 11월 25일, BHP는 '현 상황에서 합병이 주주가치에 부합하지 않는다'며 공식 철수를 선언했다. Rio Tinto는 방어에 성공했지만, Alcan 부채 압박으로 2009년 Chinalco의 $195억 추가 투자를 허용할 뻔하다가 주주 반발로 철회되는 후유증을 겪었다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 $1,480억 (제안 가치, 철수)",
    acquirerName: "BHP Billiton Limited / plc",
    targetName: "Rio Tinto plc / Limited",
    announcedDisplay: "2007년 11월",
    closedDisplay: "2008년 11월 (자진 철수)",
    country: "호주·영국",
  },

  executiveSummary: [
    "$1,480억 — BHP 3.4주:Rio 1주 전액 주식 교환 방식. 2007년 역대 최대 광업 적대적 M&A 제안.",
    "핵심 논리: 자원 슈퍼사이클에서 규모 극대화 + 철광석·구리 시장 지배력 장악.",
    "Rio Tinto 방어: 이사회 즉각 거부 + 화이트나이트 Chinalco 지분 9%($140억) 매입으로 BHP 차단.",
    "반독점 변수: EU·호주·중국 반독점 심사 장기화 — Rio Tinto가 심사 지연을 방어 시간으로 활용.",
    "결말: 2008년 9월 리먼 파산 → 원자재 가격 폭락 → BHP 2008년 11월 25일 자진 철수.",
    "아이러니: 방어 성공한 Rio Tinto는 Alcan 부채로 2009년 Chinalco 추가 투자 논란에 휘말렸다.",
    "교훈: 자원 M&A에서 매크로 사이클 타이밍이 딜의 성패를 좌우한다 — 슈퍼사이클의 정점에서 시도한 인수는 사이클 붕괴로 논리를 잃었다.",
  ],

  industryOverview: {
    body: "2000년대 중반 광업·자원 산업은 중국 주도의 수요 폭증으로 유례없는 호황을 맞았다. 철광석은 2003년부터 2008년까지 매년 두 자릿수 가격 인상이 이어졌고, 구리·석탄·알루미늄 등 주요 원자재 가격도 사상 최고치를 경신했다. 이 '자원 슈퍼사이클'은 광업 기업들의 시가총액을 급격히 끌어올렸고, 대형 M&A를 통한 규모 경쟁을 촉발했다. BHP-Rio의 합병이 성사됐다면 세계 광업 생산량의 상당 부분을 단일 기업이 통제하는 독과점 구조가 형성될 수 있었다.",
    metrics: [
      { label: "글로벌 철광석 시장 규모", value: "약 $1,500억", sub: "2007년 기준, 연간 교역량" },
      { label: "철광석 가격 상승", value: "2003~2008년 +300%+", sub: "중국 인프라 붐 수요 급증" },
      { label: "BHP+Rio 합병 시 시가총액", value: "약 $3,500억+", sub: "합병 시 세계 최대 광업 기업" },
      { label: "제안 규모", value: "$1,480억", sub: "역대 최대 광업 M&A 제안" },
    ],
    subBody: "철광석 시장에서 BHP와 Rio Tinto는 합산 점유율이 약 35~40%에 달했다. 두 기업이 합병할 경우 Vale(브라질)과 함께 철광석 시장을 사실상 3사 과점 체제로 재편하며, 중국 철강사들에 대한 가격 협상력이 극도로 강화될 것이라는 분석이 지배적이었다. 중국 정부가 Chinalco를 통해 적극적으로 합병을 저지하려 한 이유이기도 했다.",
    players: [
      { name: "BHP Billiton", role: "세계 최대 광업 기업(시총 기준), 공격자" },
      { name: "Rio Tinto", role: "세계 2위 광업 기업, 방어 대상" },
      { name: "Chinalco(중국알루미늄공사)", role: "중국 국유기업, Rio Tinto 화이트나이트" },
      { name: "Vale (CVRD)", role: "브라질 철광석 1위, 합병 시 최대 경쟁 압박 수혜" },
      { name: "EU·호주·중국 반독점당국", role: "합병 심사 지연으로 방어측에 시간 부여" },
    ],
  },

  companyOverview: {
    targetName: "Rio Tinto plc",
    body: "Rio Tinto는 1873년 설립된 영국·호주 이중 상장 광업 기업으로, 철광석(호주 필바라)·구리(칠레 Escondida)·알루미늄(2007년 Alcan 인수)·석탄·다이아몬드 등을 생산한다. BHP의 적대적 제안 당시 Rio Tinto는 2007년 Alcan을 $380억에 인수해 알루미늄 사업을 대폭 확장했으나, 그로 인한 부채 급증이 재무적 취약점이었다. 필바라 철광석 자산은 세계 최대·최고품질로, 중국 인프라 붐의 핵심 수혜 자산이었다.",
    metrics: [
      { label: "설립연도", value: "1873년", sub: "영국·스페인 리오틴토 광산에서 출발" },
      { label: "주요 사업", value: "철광석·구리·알루미늄·석탄", sub: "호주 필바라 철광석이 핵심" },
      { label: "2007년 매출", value: "약 $330억", sub: "철광석·구리 가격 급등 수혜" },
      { label: "Alcan 인수", value: "$380억 (2007년)", sub: "알루미늄 사업 강화, 부채 급증" },
    ],
    financials: [
      { year: "FY2007", revenue: 330, cogs: 180, grossProfit: 150, sga: 30, operatingIncome: 80, ebitda: 110 },
      { year: "FY2008", revenue: 540, cogs: 290, grossProfit: 250, sga: 35, operatingIncome: 100, ebitda: 140 },
    ],
    financialsNote: "단위: USD 억(B). 공개 보도 및 연간 보고서 기반 추정치. 2008년 상반기 원자재 가격 급등으로 매출 대폭 증가.",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  controlBattleOverview: {
    body: "BHP Billiton이 Rio Tinto에 역대 최대 광업 적대적 공개매수(BHP 3.4주:Rio 1주 교환, 약 $1,480억)를 제안했다. Rio Tinto 이사회는 즉각 거부하며 중국 국유기업 Chinalco를 화이트나이트로 끌어들여 지분 9%를 매입시켰다. EU·호주 반독점 심사를 방어 시간으로 활용하던 중, 2008년 9월 리먼 파산으로 글로벌 금융위기가 심화되고 철광석·구리 가격이 폭락하자 BHP가 두 달 만에 자진 철수했다. 역대 최대 광업 적대적 M&A는 시작 1년 만에 시장이 끝냈다.",
    catalyst: "2000년대 중국 인프라 건설 붐으로 철광석·구리 가격이 폭등하며 '자원 슈퍼사이클'이 정점에 달했다. BHP CEO Marius Kloppers는 슈퍼사이클 지속을 확신하며 합병을 통한 세계 최대 광업 제국 건설을 기획했다. 한편 Rio Tinto는 2007년 Alcan을 $380억에 인수하며 부채가 급증해 재무 취약점이 노출된 상태였다.",
    attackerLabel: "BHP Billiton",
    defenderLabel: "Rio Tinto 이사회",
    battleMoves: [
      {
        date: "2007-11-08",
        actor: "BHP Billiton",
        side: "attack",
        move: "적대적 합병 제안 발표 — BHP 3.4주:Rio 1주",
        detail: "BHP가 Rio Tinto에 BHP 3.4주:Rio 1주 교환 비율로 합병을 제안. 당시 시가 기준 약 $1,470억. '자원 슈퍼사이클 시대 최적 파트너'로 프레이밍하며 주주들에게 직접 어필.",
        financialImpact: "Rio Tinto 주가 +15%",
        weapon: "주식교환 공개매수",
      },
      {
        date: "2007-12-01",
        actor: "Rio Tinto 이사회",
        side: "defense",
        move: "합병 제안 공식 거부",
        detail: "'제안이 Rio Tinto의 내재가치를 근본적으로 저평가하고 있다'며 이사회 결의로 거부. 독립 성장 전략과 강력한 자산 포트폴리오(특히 필바라 철광석)를 강조.",
        weapon: "이사회 결의",
      },
      {
        date: "2008-01-30",
        actor: "Chinalco (중국알루미늄공사)",
        side: "defense",
        move: "Rio Tinto 지분 9% 긴급 매입 — 화이트나이트 등장",
        detail: "중국 국유기업 Chinalco가 Lehman Brothers와 함께 Rio Tinto 지분 9%를 약 $140억에 전격 매입. BHP의 우호 지분 확보를 차단하는 화이트나이트 역할. 중국 정부의 철광석 공급망 보호 의도도 반영됐다.",
        financialImpact: "Chinalco $140억 투자, BHP 적대적 취득 방해",
        weapon: "화이트나이트 (White Knight)",
      },
      {
        date: "2008-02-06",
        actor: "BHP Billiton",
        side: "attack",
        move: "교환 비율 3.4:1 유지 재확인 + 주주 직접 설득",
        detail: "BHP가 합병 비율을 유지하며 Rio 주주들에게 직접 어필. EU·호주 반독점 심사 신청. 주요 기관 투자자들에게 합병 시너지와 슈퍼사이클 지속 논리를 제시.",
        weapon: "주주 직접 설득",
      },
      {
        date: "2008-11-25",
        actor: "BHP Billiton",
        side: "neutral",
        move: "자진 철수 — 글로벌 금융위기 여파",
        detail: "리먼 브러더스 파산(2008년 9월) 이후 철광석·구리 가격 30~50% 폭락. BHP가 '현 상황에서 합병이 주주가치에 부합하지 않는다'며 공식 철수. 합병 논리의 핵심인 자원 슈퍼사이클이 붕괴됐다.",
        financialImpact: "Rio Tinto 주가 -20% (프리미엄 기대 소멸)",
        weapon: "자진 철수",
      },
    ],
    financialWeapons: [
      {
        name: "주식교환 공개매수",
        side: "attack",
        usedBy: "BHP Billiton",
        description: "현금 없이 BHP 주식으로 Rio Tinto를 인수하는 전략. 원자재 가격 고점에서 BHP 주가도 고평가되어 교환 비율이 유리했음. 그러나 금융위기로 BHP 주가도 폭락하며 교환 가치가 급감했다.",
        effectiveness: "blocked",
      },
      {
        name: "화이트나이트 (Chinalco)",
        side: "defense",
        usedBy: "Rio Tinto",
        description: "중국 국유기업 Chinalco를 우호 투자자로 유치해 BHP의 지분 매집을 차단하는 전략. Chinalco의 9% 지분은 BHP가 직접 매입할 수 없는 방어막이었으며, 중국 정부의 전략적 이해관계와도 일치했다.",
        effectiveness: "effective",
      },
      {
        name: "반독점 규제 활용",
        side: "defense",
        usedBy: "Rio Tinto / 규제당국",
        description: "철광석 시장 과점 우려로 EU·호주·중국 반독점당국의 심사가 장기화됐다. Rio Tinto는 심사 지연을 방어 시간으로 활용했고, 규제 불확실성이 BHP의 인수 논리를 약화시켰다.",
        effectiveness: "effective",
      },
      {
        name: "원자재 가격 붕괴 (금융위기)",
        side: "defense",
        usedBy: "시장",
        description: "2008년 글로벌 금융위기로 철광석·구리 가격이 폭락하며 합병의 재무적 논리가 사라졌다. BHP의 자진 철수를 이끈 결정적 요인. Rio Tinto가 만들어낸 무기가 아니라 시장이 선물한 결정타였다.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2008-09-15",
      event: "리먼 브러더스 파산 + 원자재 가격 폭락",
      detail: "리먼 파산으로 글로벌 금융위기가 심화되며 철광석·구리 가격이 30~50% 폭락했다. BHP 인수 논리의 핵심이었던 '자원 슈퍼사이클'이 흔들렸고, 2개월 후 BHP는 자진 철수를 선언했다. 합병이 성사됐다면 두 회사 모두 금융위기 속에 거대한 부채와 자산 평가절하를 감당해야 했을 것이다.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Rio Tinto 이사회",
      margin: "금융위기로 BHP 자진 철수",
      note: "Rio Tinto가 방어에 성공했지만, Alcan 부채로 인한 재무 압박은 이후 Chinalco 추가 투자 허용 시도($195억)로 이어지다 주주 반발로 철회됐습니다. '승리했지만 힘든 승리'였습니다. 아이러니하게도 방어의 일등 공신은 Rio Tinto의 전략이 아니라 글로벌 금융위기였습니다.",
    },
    priceImpact: {
      preContest: "$125 AUD (2007년 11월 BHP 제안 전)",
      peak: "$160 AUD (2008년 초 최고점)",
      postContest: "$50 AUD (2008년 말 금융위기 후)",
      note: "Rio Tinto는 방어에 성공했지만 금융위기로 주가가 고점 대비 -68% 폭락했습니다. 방어 성공이 주주 가치를 보존했는지는 논란의 여지가 있습니다.",
    },
  },

  dealStructure: {
    body: "BHP Billiton은 Rio Tinto에 전액 주식 교환 방식(BHP 3.4주:Rio 1주)의 합병을 제안했다. 현금을 사용하지 않고 주식만으로 진행하는 구조는 BHP의 재무 부담을 최소화하는 동시에, 원자재 가격 고점에서 고평가된 BHP 주가를 활용하는 전략이었다. 합병이 성사됐다면 신설 법인은 세계 최대 광업 기업이 됐을 것이며, EU·호주 반독점 당국의 조건부 승인이 필요했다. 그러나 Rio Tinto 이사회의 거부와 Chinalco의 화이트나이트 등장, 그리고 글로벌 금융위기로 협상은 무산됐다.",
    preOwnership: {
      nodes: [
        { id: "bhp_pre",   label: "BHP Billiton",    sub: "ASX·LSE 상장, 세계 최대 광업사", type: "acquirer" },
        { id: "rio_pre",   label: "Rio Tinto plc",   sub: "LSE·ASX 이중 상장, 철광석·구리·알루미늄", type: "target" },
        { id: "chinalco",  label: "Chinalco",         sub: "중국 국유기업, 화이트나이트로 지분 9% 매입", type: "fund" },
        { id: "pub_rio",   label: "일반 주주",         sub: "Rio Tinto 잔여 지분 보유", type: "public" },
      ],
      edges: [
        { from: "bhp_pre",  to: "rio_pre", label: "적대적 합병 제안 (3.4:1)" },
        { from: "chinalco", to: "rio_pre", label: "9% 매입 (방어)" },
        { from: "pub_rio",  to: "rio_pre", label: "일반 주주" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bhp_post",  label: "BHP Billiton",  sub: "합병 제안 자진 철수 (2008.11)", type: "acquirer" },
        { id: "rio_post",  label: "Rio Tinto plc", sub: "독립 유지, Chinalco 9% 보유", type: "target" },
        { id: "chinalco2", label: "Chinalco",       sub: "Rio 지분 9% 유지", type: "fund" },
      ],
      edges: [
        { from: "chinalco2", to: "rio_post", label: "9% 보유 (우호 주주)" },
        { from: "bhp_post",  to: "rio_post", label: "철수 — 독립 유지" },
      ],
    },
    keyTerms: [
      { label: "제안 규모 (발표 기준)", value: "약 $1,480억 (주식교환)", accent: true },
      { label: "교환 비율", value: "BHP 3.4주 : Rio Tinto 1주", accent: true },
      { label: "거래 형태", value: "전액 주식 교환 적대적 공개매수", accent: false },
      { label: "Chinalco 화이트나이트 투자", value: "$140억 (지분 9%)", accent: false },
      { label: "반독점 심사", value: "EU·호주·중국 심사 진행 중 (미완료)", accent: false },
      { label: "결과", value: "BHP 자진 철수 (2008년 11월 25일)", accent: true },
      { label: "EV/EBITDA (제안 시)", value: "약 13x EBITDA", accent: false },
      { label: "철수 사유", value: "글로벌 금융위기 + 원자재 가격 폭락", accent: false },
    ],
  },

  advisors: {
    body: "역대 최대 광업 M&A 시도인 만큼 글로벌 최상위 투자은행과 로펌들이 양측에 총동원됐다. 전액 주식 교환이라는 복잡한 구조와 EU·호주·중국 3개 반독점 심사를 동시에 대응해야 했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BHP Billiton (인수 시도측)",
        initials: "BHP",
        bg: "bg-orange-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문", roleType: "financial", note: "합병 구조 설계 및 교환 비율 산정, 주주 설득 전략" },
          { firm: "Citigroup", role: "재무 자문", roleType: "financial", note: "자본시장 전략 및 기관 투자자 커뮤니케이션" },
          { firm: "Linklaters", role: "법무 자문", roleType: "legal", note: "UK/호주 법률 자문, 반독점 심사 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "Rio Tinto (방어측)",
        initials: "RIO",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Merrill Lynch", role: "재무 자문", roleType: "financial", note: "방어 전략 수립, 독립 가치 평가, Chinalco 유치 자문" },
          { firm: "Credit Suisse", role: "재무 자문", roleType: "financial", note: "대안 전략 검토 및 주주 커뮤니케이션" },
          { firm: "Freshfields Bruckhaus Deringer", role: "법무 자문", roleType: "legal", note: "UK 인수방어 법률 자문, 반독점 절차 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 통설 기반입니다. 실제 계약 세부 내용은 미공개입니다.",
  },

  valuation: {
    body: "BHP의 제안은 전액 주식 교환 방식이었기 때문에 '제안 가치'는 BHP 주가에 연동됐다. 2007년 11월 제안 당시 Rio Tinto의 12개월 예상 EBITDA 기준 약 13x의 배수를 적용한 가격이었다. Rio Tinto는 이를 '근본적으로 저평가된 제안'으로 규정했다. Alcan 인수 이전 기준과 철광석 장기 가격 상승을 반영하면 최소 16~18x는 받아야 한다는 게 Rio Tinto의 논리였다.",
    rows: [
      { item: "제안 EV (2007년 11월 기준)", val: "약 $1,470~1,480억", note: "BHP 3.4주:Rio 1주 교환, BHP 주가 기준", accent: true },
      { item: "EV / EBITDA (제안 시)", val: "약 13x", note: "Rio Tinto FY2007 예상 EBITDA 기준", accent: true },
      { item: "Rio Tinto 시가총액 (제안 전)", val: "약 $1,000억+", note: "2007년 10월 기준" },
      { item: "Chinalco 화이트나이트 투자", val: "$140억 (9%)", note: "2008년 1월 지분 매입" },
      { item: "Alcan 인수 부채", val: "$380억", note: "Rio Tinto의 재무 취약점 원인" },
      { item: "철수 시점 Rio Tinto 주가", val: "-68% vs 최고가", note: "2008년 말 금융위기로 급락", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 업계 추정 기반입니다. 실제 내부 평가와 다를 수 있습니다.",
  },

  rationale: {
    buyer: {
      title: "BHP Billiton은 왜 Rio Tinto를 노렸나",
      initials: "BHP",
      bg: "bg-orange-700",
      points: [
        "자원 슈퍼사이클 집중 — 중국 인프라 붐이 수십 년 지속될 것이라는 확신 아래, 최대한 빠르게 공급 자산을 확대해야 한다는 논리.",
        "규모의 경제 — 합병 시 채굴·운송·판매 전 영역에서 수십억 달러의 시너지가 발생하며, 단위 비용이 대폭 낮아진다.",
        "철광석 시장 지배력 — BHP와 Rio의 철광석 합산 점유율이 35~40%에 달해 중국 철강사 대상 가격 협상력이 극도로 강화된다.",
        "Alcan 부채로 약해진 Rio — 2007년 Alcan 인수로 재무 압박을 받는 Rio Tinto가 상대적으로 인수하기 쉬운 타이밍이라는 판단.",
        "글로벌 자원 기업 1위 확정 — 합병 성사 시 단일 기업으로 세계 광업 생산량을 가장 많이 통제하는 역대 최대 광업 기업이 탄생한다.",
      ],
    },
    seller: {
      title: "Rio Tinto는 왜 거부하고 어떻게 방어했나",
      initials: "RIO",
      bg: "bg-blue-700",
      points: [
        "저평가 주장 — BHP의 제안이 철광석·구리 장기 가격 상승 잠재력과 필바라 자산의 희소성을 반영하지 못한다고 주장.",
        "독립 성장 전략 — Alcan 인수로 알루미늄 사업을 강화한 Rio Tinto가 독립 기업으로 더 높은 가치를 실현할 수 있다는 논리.",
        "화이트나이트 Chinalco — 중국 국유기업 Chinalco를 우호 투자자로 유치해 BHP의 지분 취득을 봉쇄하는 가장 강력한 방어 수단.",
        "반독점 심사 활용 — EU·호주·중국 반독점 심사 장기화를 방어 시간으로 활용, 합병의 규제 불확실성을 부각.",
        "이사회 만장일치 거부 — '근본적 저평가'를 이유로 이사회가 일관되게 거부 의사를 표명해 주주들의 동요를 억제.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "BHP의 자진 철수 후 Rio Tinto는 Alcan 부채 압박 속에 재무 구조조정을 단행했다. 2009년 Chinalco에 $195억 추가 투자를 허용하는 대규모 자본 조달 계획을 발표했으나, Rio Tinto 주주들의 강력한 반발로 철회하고 대신 주주 배정 유상증자로 방향을 틀었다. BHP는 이후 단독 성장 전략으로 복귀해 캐나다 포타쉬 인수 시도(2010년, 역시 철수), 북미 셰일 투자(손실), 그리고 2010년대 원자재 가격 하락기를 거치며 자산 포트폴리오를 재편했다.",
    overallVerdict: "방어 성공, 그러나 '시장이 끝낸 싸움' — Rio Tinto의 전략보다 금융위기가 더 결정적이었다",
    positives: [
      "Rio Tinto 독립 유지 — 경영진의 즉각적 거부와 Chinalco 화이트나이트로 인수 저지 성공.",
      "반독점 심사 전략 효과 — EU·호주·중국 심사 지연이 BHP의 인수 압박을 약화시키는 방어 시간 확보.",
      "Chinalco 파트너십 — 단기적으로 화이트나이트 역할을 했으나 장기적으로 중국 국유 자본 의존 리스크로 전환.",
      "이후 철광석 가격 재반등 — 2010~2011년 원자재 가격이 회복되며 Rio Tinto가 독립 성장의 과실 향유.",
    ],
    risks: [
      "Alcan 부채 후유증 — 2009년 Chinalco 추가 투자 허용 논란, 주주 배정 증자 등 재무 압박 지속.",
      "중국 자본 의존 우려 — Chinalco 지분 9% 보유로 전략적 독립성 훼손 우려가 서구 주주들에게 부각.",
      "원자재 사이클 리스크 — 2011년 이후 중국 성장 둔화로 철광석 가격이 하락 추세, 슈퍼사이클 가정 붕괴.",
      "BHP 독자 성장 — 합병 실패 후 BHP가 단독으로 규모를 키우며 장기적으로 Rio와의 격차 유지.",
    ],
    editorNote: "이 딜은 '매크로 사이클 타이밍이 M&A 성패를 좌우한다'는 교훈을 남겼다. 자원 슈퍼사이클의 정점에서 시도된 역대 최대 광업 M&A는 사이클이 붕괴되자 논리를 잃었다. 방어에 성공한 Rio Tinto의 진짜 구원투수는 전략이 아니라 글로벌 금융위기였다는 점도 아이러니다. 현금 없이 주식만으로 $1,480억짜리 거래를 시도했다는 점에서 BHP의 대담함도 기록될 만하다.",
  },

  tombstone: {
    acquirerInitials: "BHP",
    acquirerBg: "bg-orange-700",
    targetInitials: "RIO",
    targetBg: "bg-blue-700",
    acquirerName: "BHP Billiton Limited / plc",
    targetName: "Rio Tinto plc / Limited",
    dealTitle: "역대 최대 광업 적대적 M&A 시도 / Largest-Ever Mining Hostile Bid",
    dealSize: "$1,480억 (제안 가치)",
    dealSizeUSD: "USD 148B proposed (all-stock)",
    evEbitda: "약 13x EBITDA (제안 시)",
    closeDate: "Nov 2008 (철수)",
  },

  sources: [
    { id: 1, text: "BHP Billiton Press Release — Proposal to merge with Rio Tinto (November 8, 2007)" },
    { id: 2, text: "Rio Tinto Press Release — Board rejection of BHP Billiton proposal (December 2007)" },
    { id: 3, text: "Financial Times — BHP Billiton walks away from Rio Tinto bid (November 25, 2008)" },
    { id: 4, text: "Wall Street Journal — Chinalco's $14B stake in Rio Tinto (February 2008)" },
    { id: 5, text: "Bloomberg — BHP Billiton vs Rio Tinto: Timeline of the $148B bid (2007~2008)" },
    { id: 6, text: "Rio Tinto Annual Report 2007, 2008" },
    { id: 7, text: "The Economist — The battle for Rio Tinto (2008)" },
  ],

  seo: {
    title: "BHP-리오틴토 적대적 M&A 완전 분석 — $1,480억 역대 최대 광업 적대적 공개매수",
    description: "BHP Billiton이 Rio Tinto에 $1,480억 주식교환 적대적 합병을 제안한 2007~2008년 M&A 완전 분석. Chinalco 화이트나이트, 반독점 방어, 금융위기로 인한 자진 철수까지 해부.",
    keywords: [
      "BHP 리오틴토 적대적 M&A",
      "BHP Rio Tinto hostile bid",
      "광업 M&A 사례",
      "Chinalco 화이트나이트",
      "자원 슈퍼사이클",
      "적대적 공개매수 방어",
      "철광석 M&A",
      "글로벌 금융위기 M&A",
    ],
  },

  concepts: [
    {
      term: "적대적 공개매수 (Hostile Takeover Bid)",
      description: "대상 기업 이사회의 동의 없이 주주에게 직접 주식 매수를 제안하는 인수 방식. BHP가 Rio Tinto 이사회의 거부에도 주주들에게 직접 어필한 전략.",
    },
    {
      term: "화이트나이트 (White Knight)",
      description: "적대적 인수자에 맞서 대상 기업이 유치하는 우호적 제3자 투자자. Chinalco가 Rio Tinto 지분 9%를 매입해 BHP의 지분 취득을 봉쇄한 것이 대표적 사례.",
    },
    {
      term: "자원 슈퍼사이클 (Resource Super Cycle)",
      description: "중국 등 신흥국의 대규모 인프라 투자로 촉발된 원자재 가격의 장기 상승 국면. 2000년대 중반 광업 M&A를 촉발한 핵심 배경이자, 금융위기로 붕괴되며 BHP의 인수 논리를 무너뜨린 변수.",
    },
  ],

  faq: [
    {
      q: "BHP는 왜 현금이 아닌 주식으로만 인수를 제안했나?",
      a: "BHP는 자원 슈퍼사이클 정점에서 자사 주가가 고평가된 상황을 활용했습니다. 현금 $1,480억을 조달하려면 막대한 부채가 필요했지만, 주식 교환 방식으로는 재무 부담 없이 인수가 가능했습니다. 또한 합병 후 시너지 수익을 양사 주주가 함께 공유한다는 프레이밍도 가능했습니다. 그러나 역설적으로 금융위기로 BHP 주가가 하락하자 교환 가치 자체가 급감해 인수 논리가 무너졌습니다.",
    },
    {
      q: "중국 Chinalco는 왜 Rio Tinto 지분을 사들였나?",
      a: "Chinalco의 지분 매입에는 두 가지 동기가 있었습니다. 첫째, 중국 정부의 전략적 이해: BHP-Rio 합병이 성사되면 철광석 시장의 과점이 심화돼 중국 철강사들이 가격 협상에서 불리해집니다. 중국 입장에서 합병을 저지하는 것은 국가 이익에 부합했습니다. 둘째, 순수한 투자 매력: 원자재 가격 상승 수혜를 받는 Rio Tinto 지분을 장기 보유하는 것 자체가 매력적인 투자였습니다.",
    },
    {
      q: "이 딜이 성사됐다면 어떤 일이 벌어졌을까?",
      a: "합병이 성사됐다면 세계 최대 광업 기업이 탄생했겠지만, 타이밍이 최악이었습니다. 합병 작업이 마무리되는 2008~2009년에 글로벌 금융위기로 원자재 가격이 폭락했고, 두 회사 모두 Alcan 부채($380억)까지 떠안은 상태에서 극심한 재무 압박에 직면했을 것입니다. EU·호주 반독점 당국의 요구로 핵심 자산을 매각해야 했을 가능성도 높았습니다. '최악의 타이밍에 최대 규모 거래'가 될 뻔했습니다.",
    },
    {
      q: "BHP는 Rio Tinto 인수 실패 후 어떻게 됐나?",
      a: "BHP는 단독 성장 전략으로 복귀했습니다. 2010년 캐나다 최대 비료 회사 포타쉬(PotashCorp) 인수를 $390억에 시도했으나 캐나다 정부의 국가 전략 자산 보호 논리로 역시 철수했습니다. 이후 북미 셰일 투자에 $200억 이상을 집행했다가 손실을 보고 매각했습니다. 2010년대 원자재 가격 하락기를 거치며 강도 높은 자산 구조조정을 단행했고, 현재는 철광석·구리·석탄(일부 매각) 핵심 자산 집중 전략으로 운영됩니다.",
    },
  ],
};

export default deal;
