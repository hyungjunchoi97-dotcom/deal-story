/**
 * Energy Transfer Equity × Williams Companies, 합병 무산 (2015~2016)
 * 2015-09-28 $32.6B 합병 발표 → 2016-06-24 Delaware Chancery (Vice Chancellor Glasscock)
 * ETE 승소 → 2016-06-29 공식 파기.
 * 정통 MAC 조항이 아닌 [Section 721 IRS 면세 의견서 조항] 이라는 특정 선행조건이
 * 메가딜 종료를 정당화한 첫 사례. 위약금 0원.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "energy-transfer-williams-failed",
  title: "Energy Transfer × Williams $326억 합병은 왜 깨졌나, MAC이 아니라 한 줄짜리 세무 의견서 조항이 메가딜을 끝낸 사건",
  subtitle:
    "2015-09-28 발표 · 2016-06-24 Delaware Chancery (Vice Chancellor Glasscock) ETE 승소 · 2016-06-29 공식 파기 · Section 721 면세 의견서 조항이 MAC 일반조항을 이긴 첫 판례 · 위약금 0원",
  category: "ma",
  industry: "Energy / Midstream Pipelines / MLPs",
  country: "미국",
  announcedAt: "2015-09-28",
  closedAt: "2016-06-29",
  announcedDisplay: "2015년 9월 28일 (합병 발표)",
  closedDisplay: "2016년 6월 29일 (공식 파기, 위약금 0원)",
  readingMinutes: 15,
  tags: [
    "Energy Transfer",
    "Williams Companies",
    "Kelcy Warren",
    "Delaware Chancery",
    "Vice Chancellor Glasscock",
    "Section 721",
    "MAC Clause",
    "Tax Opinion",
    "Latham & Watkins",
    "MLP",
    "Midstream",
    "Failed Merger",
  ],
  excerpt:
    "2015년 9월 28일 Energy Transfer Equity (ETE)는 미국 미드스트림 1위로 도약하기 위해 2위 Williams Companies를 주당 $43.50, 총 $326억(현금 + ETE LP 유닛 혼합)에 합병한다고 발표했다. 발표 직후 WTI 유가가 $50에서 $30으로 폭락하면서 결합기업의 가치가 흔들렸고, ETE CEO Kelcy Warren은 공개적으로 딜에 대한 회의를 드러냈다. 2016년 4월 ETE는 [Section 7.7 — 매도자(Williams)는 자문 로펌(Latham & Watkins)의 'Section 721 면세 의견서'를 제출해야 한다] 라는 조항을 들고나와 \"Latham이 깨끗한 의견서 발급을 거부했으므로 우리는 합병할 의무가 없다\"고 통보했다. Williams는 Delaware Chancery에 [악의(bad faith) 종료] 라며 제소했으나, 2016년 6월 24일 Vice Chancellor Sam Glasscock III는 ETE 승소 판결을 내렸다, \"세무 의견서 조항은 MAC 일반조항과 달리 [특정·객관적 선행조건(specific and objective condition precedent)]이며, Latham의 의견서 거부는 선의(good faith) 판단으로 봐야 한다.\" 6월 29일 딜은 공식 파기됐고 ETE는 위약금 한 푼도 내지 않았다. 이 판례는 이후 모든 미국 M&A 계약 협상에서 [MAC 일반조항 vs 특정 선행조건] 의 경계를 다시 그렸다.",

  acquirer: { initials: "ETE", bg: "bg-amber-700", label: "Energy Transfer Equity, L.P." },
  target: { initials: "WMB", bg: "bg-red-700", label: "The Williams Companies, Inc." },

  background: [
    "미국 미드스트림(midstream) 파이프라인 산업은 2010년대 들어 셰일 혁명의 직접 수혜를 받았다. Permian·Marcellus·Bakken 셰일 분지에서 폭발적으로 증가한 천연가스·NGL·원유를 정제소·수출터미널·발전소로 운반할 인프라가 절대적으로 부족했고, MLP(Master Limited Partnership) 구조의 미드스트림 사업자들은 [Kinder Morgan, Energy Transfer, Williams Companies, Enterprise Products, Plains All American] 5강 체제로 빠르게 자본 시장 비중을 키웠다. 2014년 말 기준 미국 미드스트림 MLP 시가총액 합계는 $5,000억 안팎이었고, 셰일 파이프라인 인프라의 자본 집약도와 통행료(toll) 모델의 안정적 현금흐름이 결합돼 'Yield-oriented' 투자자들의 핵심 자산군이었다.",
    "[ETE와 Williams는 미국 미드스트림 1위·2위.] Energy Transfer Equity (ETE)는 Kelcy Warren이 1995년 텍사스에서 출범시킨 미드스트림 컴플렉스의 최상위 LP로, ETP·Sunoco·Regency 등 다층 MLP 자회사를 거느린 사실상의 미드스트림 콘글로머리트였다. 2015년 시점 ETE는 미국 최대 천연가스 파이프라인 운영자로 약 71,000마일 네트워크를 보유. Williams Companies는 1908년 오클라호마에서 출범한 100년 역사의 파이프라인 기업으로, 동부 마르셀러스·셰일 핵심 인프라인 Transco 파이프라인(미국 동부 천연가스 대동맥)을 운영. 2015년 매출 약 $76억, 시가총액 약 $400억대의 미드스트림 2위 사업자였다. 두 회사가 합치면 약 [150,000마일의 파이프라인 + 결합 EV $770억] 으로 1위 Kinder Morgan을 압도하는 결합기업이 탄생할 구도였다.",
    "[2015-09-28 ETE의 $326억 합병 발표.] ETE는 Williams 주주에게 주당 $43.50 (현금 + ETE Corp 신주 'ETC' 혼합 대가)을 제시했고, 총 합병가는 약 $326억으로 책정됐다. 거래의 핵심 구조는 [Williams의 자산을 ETE에 면세로 기여(contribution)하는 Section 721 reorganization]이었다, Williams 주주들은 일부 현금을 받고 나머지는 ETE Corp 주식으로 받되, IRS Section 721(a) 규정에 따라 [면세 파트너십 기여] 로 처리되는 구조였다. 이 구조의 성립을 위해 양측 합병 계약은 [Section 6.5 / Section 8.2(g) — 매도자(Williams) 측 자문 로펌인 Latham & Watkins가 'Section 721 의견서(721 Opinion)'를 발급해야 한다] 라는 선행조건을 명시했다. Latham 측 세무 변호사 Bryan W. Holmes 등이 의견서 발급 담당이었고, 발표 시점에는 깨끗한 의견서 발급에 문제가 없을 것으로 양측 모두 가정했다.",
    "[유가 붕괴 + ETE의 균열.] 2015년 4분기 ~ 2016년 1분기 WTI 유가가 $50에서 $30 아래로 폭락하면서 미드스트림 자산 가치 평가가 흔들렸다. ETE 자체 유닛 가격도 $30선에서 $5선으로 80% 이상 폭락. 합병 대가의 현금 부분이 ETE 시총 대비 비중이 급격히 커지면서, ETE는 결합기업 차입금 감당이 어려워졌다. 2016년 1분기 Kelcy Warren CEO는 공개 컨퍼런스콜에서 \"이 딜의 경제성에 의문이 있다\"고 발언했고, 시장은 ETE의 빠르게 식어가는 의지를 감지했다. 이 시점 ETE는 [$1B 규모의 시리즈 A 컨버터블 우선유닛(Series A Convertible Preferred Units)]을 매우 낮은 행사가로 내부자(Kelcy Warren 본인 포함)에게 사모로 발행. Williams는 이를 [구조적 사보타주(structural sabotage), 합병가에 묶인 자산을 희석시키려는 의도] 라고 격렬히 비난했다.",
    "[2016-04-21 ETE의 종료 통보 → 06-24 Delaware Chancery ETE 승소 → 06-29 공식 파기.] 2016년 4월 21일 ETE는 Williams에 \"Latham이 현재 시장 상황 변화로 인해 깨끗한 Section 721 의견서를 발급할 수 없다고 통보했으며, 이는 합병 계약의 선행조건 불충족이므로 ETE는 합병 의무에서 자유롭다\"고 통지했다. Williams는 즉시 Delaware Chancery에 제소, \"ETE가 MAC(material adverse change) 일반조항을 우회하기 위해 의도적으로 의견서 발급을 좌초시킨 악의(bad faith) 종료\"라고 주장했다. 2016년 6월 21일 ~ 22일 약식 재판(expedited trial)이 진행됐고, 6월 24일 Vice Chancellor Sam Glasscock III가 약 95페이지 분량의 메모랜덤 오피니언으로 [ETE 승소] 판결, 핵심 논거는 [\"세무 의견서 조항은 MAC 일반조항과 달리 특정·객관적 선행조건(specific and objective condition precedent)이며, Latham이 합리적 노력을 다한 결과 선의(good faith)로 의견서를 발급할 수 없다고 결론낸 이상, 법원이 이 결정을 뒤집을 수 없다\"]. 6월 29일 ETE는 공식적으로 합병 계약을 종료했고 [위약금(termination fee)을 한 푼도 내지 않았다], 세무 의견서는 MAC가 아닌 별개의 선행조건이었기 때문이다.",
  ],

  dealSummary: {
    dealValueDisplay: "$32.6B (현금 + ETE Corp 'ETC' 신주 혼합, $43.50/share)",
    acquirerName: "Energy Transfer Equity, L.P. (NYSE: ETE)",
    targetName: "The Williams Companies, Inc. (NYSE: WMB)",
    announcedDisplay: "2015년 9월 28일",
    closedDisplay: "2016년 6월 29일 (공식 파기)",
    country: "미국",
  },

  executiveSummary: [
    "[$326억 미드스트림 메가딜] 2015-09-28 ETE가 Williams를 주당 $43.50 (현금 + ETE Corp 신주 혼합)으로 합병 발표. 결합 시 약 150,000마일 파이프라인 + EV $770억의 미국 미드스트림 1위 사업자 탄생 예정",
    "[Section 721 면세 기여 구조] 핵심 거래 구조는 IRS Section 721(a) 면세 파트너십 기여(reorganization). Williams 주주들이 부분 현금 + ETE Corp 주식을 면세로 받는 구조였고, 이 구조 성립을 위해 [매도자 측 자문 로펌 Latham & Watkins가 'Section 721 의견서'를 발급해야 한다] 는 조항이 합병 계약에 명시됨",
    "[유가 폭락 + ETE의 의지 균열] 2015-Q4 ~ 2016-Q1 WTI 유가 $50 → $30 폭락. ETE 유닛 가격 80% 폭락. Kelcy Warren CEO 공개 회의 발언 + $1B 규모 시리즈 A 컨버터블 우선유닛의 내부자 사모 발행(희석성) → Williams는 [구조적 사보타주] 로 비난",
    "[2016-04-21 ETE의 종료 통보] ETE는 \"Latham이 깨끗한 Section 721 의견서 발급을 거부했다\"는 이유로 합병 계약 종료 통지. Williams는 즉시 Delaware Chancery에 제소, [악의(bad faith) 종료, 의도적 의견서 좌초] 주장",
    "[2016-06-24 Vice Chancellor Glasscock의 ETE 승소 판결] 핵심 논거는 [\"세무 의견서 조항은 MAC 일반조항과 다른 특정·객관적 선행조건이며, Latham의 의견서 거부가 선의 판단인 한 법원이 뒤집을 수 없다\"]. 약 95페이지 분량 메모랜덤 오피니언",
    "[2016-06-29 공식 파기, 위약금 0원] 세무 의견서 조항은 MAC가 아닌 별개의 선행조건이었기에 ETE는 termination fee를 한 푼도 내지 않음. M&A 위약금 역사상 가장 충격적인 결과 중 하나",
    "[M&A 계약 실무에 영구적 영향] 이 판례는 [특정·객관적 선행조건(specific condition precedent)] 이 [MAC 일반조항(general MAC clause)] 보다 우선한다는 첫 메이저 판례. 이후 미국 M&A 계약 협상에서 매도자는 [MAC carve-out] 으로 특정 조건을 명시적으로 무력화하는 방어 조항을 표준으로 삽입",
    "[양사 사후] Williams는 독립 #2 미드스트림 유지, 2024년 시점 시가총액 약 $700억. ETE는 자체 자산 재조정에 집중하며 2018년 ETP를 ETE에 흡수합병. 양사 모두 유가 사이클을 별도로 생존",
  ],

  industryOverview: {
    body: "2015년 미국 미드스트림 산업은 셰일 혁명의 직접 수혜를 받으며 폭발적으로 성장한 직후 정점을 찍고 유가 폭락 충격에 진입한 변곡점이었다. Permian·Marcellus·Bakken에서 쏟아져 나오는 천연가스·NGL·원유를 운반할 파이프라인 인프라가 미국 산업의 핵심 자산이 됐고, MLP 구조의 5강 사업자가 자본 시장에서 [통행료(toll) 모델 + 면세 패스스루(pass-through)] 라는 매력적 조합으로 yield investor 자본을 흡수했다. 그러나 2014년 6월 이후 시작된 유가 폭락이 2015년 4분기 본격화되면서 미드스트림 자산 가치 평가가 흔들렸고, ETE-Williams 합병은 이 변곡점 한가운데에서 시도된 메가딜이었다.",
    metrics: [
      { label: "ETE 파이프라인 (2015)",         value: "약 71,000마일",   sub: "미국 최대 천연가스 파이프라인 운영자" },
      { label: "Williams 파이프라인 (2015)",    value: "약 33,000마일",   sub: "Transco 동부 천연가스 대동맥 포함" },
      { label: "결합 시 파이프라인 합계",        value: "약 150,000마일",  sub: "Kinder Morgan 84,000마일 압도" },
      { label: "결합기업 예상 EV",              value: "약 $770억",      sub: "$326억 합병 + 인수 부채 + 기존 자본" },
      { label: "WTI 유가 (2015-Q3 → 2016-Q1)", value: "$50 → $30",      sub: "약 -40%, 미드스트림 멀티플 압박" },
    ],
    subBody:
      "미드스트림 MLP의 핵심 매력은 [통행료 모델, 직접 유가 노출 제한] 이라는 점이었으나, 2015~2016년 유가 폭락은 (1) 셰일 생산자 파산 → 파이프라인 거래량 감소 (2) MLP 자본 비용 폭등(수익률 추구 자본 이탈) (3) MLP 결합기업 차입금 감당 능력 의문 등 [간접 노출 채널] 이 동시에 작동하면서 미드스트림 멀티플을 30~40% 압박했다. ETE 유닛 가격이 $30선에서 $5선으로 폭락한 것이 이 압박의 대표적 사례이며, 이는 Williams 합병의 ETE 측 의지 약화의 근본 원인이 됐다.",
    players: [
      { name: "Energy Transfer Equity (ETE)", role: "인수자, 미국 최대 천연가스 파이프라인 운영자, Kelcy Warren CEO 주도" },
      { name: "The Williams Companies",        role: "피인수자, 미드스트림 #2, 1908년 설립, Transco 파이프라인 운영" },
      { name: "Kinder Morgan",                 role: "미드스트림 #1, ETE-Williams 합병 시 #2로 격하 예정이던 경쟁자" },
      { name: "Enterprise Products Partners",   role: "미드스트림 #3, NGL·LPG 중심, 합병 무관 안정 운영" },
      { name: "Latham & Watkins",              role: "ETE 측 세무 자문 로펌, Section 721 의견서 발급 책임 주체" },
      { name: "Cravath Swaine & Moore",         role: "Williams 측 법률 자문, Delaware Chancery 소송 대표" },
      { name: "Vice Chancellor Sam Glasscock III", role: "Delaware Court of Chancery, 본 사건 판사. 2016-06-24 ETE 승소 판결" },
    ],
  },

  companyOverview: {
    targetName: "The Williams Companies, Inc. (NYSE: WMB)",
    body: "The Williams Companies는 1908년 Williams 형제가 오클라호마에서 파이프라인 도급업으로 출범시킨 100년 역사의 미국 미드스트림 사업자다. 본사는 오클라호마주 털사. 핵심 자산은 [Transco 파이프라인], 미국 동부 해안의 천연가스 대동맥으로 텍사스 걸프만에서 뉴욕까지 약 10,000마일에 걸쳐 인구밀집 동부 시장에 천연가스를 공급. 2015년 시점 Williams는 [Williams Partners (WPZ)] 라는 자회사 MLP를 통해 미드스트림 자산을 운영하고 그 General Partner 지분을 보유하는 [모회사 + MLP 자회사] 의 전형적 구조였다. 2015년 매출 약 $76억, 직원 약 7,000명, 시가총액 약 $400억대.",
    metrics: [
      { label: "설립연도",                value: "1908년",            sub: "오클라호마주 털사" },
      { label: "본사",                    value: "Tulsa, Oklahoma",   sub: "One Williams Center" },
      { label: "핵심 자산",                value: "Transco 파이프라인",  sub: "텍사스 ~ 뉴욕, 약 10,000마일" },
      { label: "총 파이프라인 (2015)",     value: "약 33,000마일",      sub: "천연가스 + NGL + 원유 혼합" },
      { label: "직원 수",                 value: "약 7,000명",         sub: "2015년 말 기준" },
      { label: "FY2015 매출",             value: "약 $76억",           sub: "FY2014 $74억 대비 +2.4%" },
    ],
    financials: [
      { year: "FY2011", revenue: 7930, cogs: 4400, grossProfit: 3530, sga: 1100, operatingIncome: 2150, ebitda: 3050 },
      { year: "FY2012", revenue: 7517, cogs: 4200, grossProfit: 3317, sga: 1050, operatingIncome: 1850, ebitda: 2900 },
      { year: "FY2013", revenue: 6860, cogs: 3900, grossProfit: 2960, sga: 1000, operatingIncome: 1650, ebitda: 2750 },
      { year: "FY2014", revenue: 7486, cogs: 4150, grossProfit: 3336, sga: 1100, operatingIncome: 1820, ebitda: 3349 },
      { year: "FY2015", revenue: 7600, cogs: 4250, grossProfit: 3350, sga: 1150, operatingIncome: 1900, ebitda: 4100 },
    ],
    financialsNote: "단위: USD 백만. Williams Companies 연결 재무제표 기반. FY2015 EBITDA $41억은 회사 공시 'Adjusted EBITDA' 기준 (전년 $33.5억 대비 +22%). FY2013 매출 감소는 자산 재편 영향. 일부 수치는 공시 자료를 기반으로 한 추정.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "Williams Partners (Transco·Northwest 파이프라인)", pct: 55, color: "bg-red-700", amt: "약 $42억" },
      { name: "Williams Partners (Atlantic-Gulf 모음)",            pct: 20, color: "bg-red-500", amt: "약 $15억" },
      { name: "West (Rocky Mountain·Wamsutter)",                  pct: 15, color: "bg-red-400", amt: "약 $11억" },
      { name: "기타 (NGL Marketing·기타 자회사)",                   pct: 10, color: "bg-red-300", amt: "약 $8억" },
    ],
    revenueNote: "Williams Partners (WPZ) MLP 자회사가 매출의 대부분을 차지하는 모회사+MLP 자회사 구조. 본 합병에서도 WPZ의 ETE 자회사화가 핵심 구조였음.",
  },

  dealStructure: {
    body: "ETE-Williams 합병의 거래 구조는 [Section 721 면세 기여(contribution)] + [현금·주식 혼합 대가] + [복수 단계 reorganization] 이 결합된 매우 복잡한 형태였다. 핵심 흐름은 다음과 같다, (1) Williams 주주들이 보유한 Williams 보통주를 신설 ETE Corp ('ETC')의 신주와 일부 현금으로 교환 (2) 동시에 Williams가 보유한 미드스트림 자산이 ETE 파트너십에 [Section 721(a) 면세 기여(tax-free partnership contribution)] 로 이전 (3) 결과적으로 ETC가 Williams의 후신 상장사가 되고, ETE 파트너십이 Williams 미드스트림 자산을 직접 보유. 핵심 [Section 721 면세 처리] 가 성립하기 위해서는 IRS가 '현금 부분과 주식 부분을 별개 거래로 인정'해야 했고, 만약 IRS가 '현금이 자산 매각 대가로 재구성된다(recharacterize)'고 판단하면 약 $10억 규모의 추가 세금 부담이 발생할 위험이 있었다. 합병 계약은 이 위험을 처리하기 위해 [Section 6.5(b) / Section 8.2(g) — 매도자 측 자문 로펌 Latham & Watkins가 'Section 721 의견서(721 Opinion)'를 closing 이전에 발급해야 한다] 라는 선행조건을 명시했다. 2015년 9월 발표 시점에서는 양측 모두 이 조건이 무리없이 충족될 것으로 가정했다, 그러나 2016년 봄 ETE 유닛 가격 폭락으로 현금 부분이 ETC 주식 가치 대비 상대적으로 커지자, IRS가 현금 부분을 자산 매각 대가로 재구성할 위험이 실재화됐고, Latham은 결국 [\"현 시장 상황에서 깨끗한 Section 721 의견서를 선의로 발급할 수 없다\"] 고 결론. 이것이 ETE가 합병 계약을 종료할 수 있는 법적 근거가 됐다.",
    preOwnership: {
      nodes: [
        { id: "ete_pre",   label: "Energy Transfer Equity (ETE)",  sub: "Kelcy Warren · MLP holdco",   type: "acquirer" },
        { id: "etp_pre",   label: "Energy Transfer Partners (ETP)", sub: "ETE의 운영 MLP 자회사",         type: "entity" },
        { id: "wmb_pre",   label: "Williams Companies (WMB)",       sub: "미드스트림 #2, 1908년 설립",     type: "target" },
        { id: "wpz_pre",   label: "Williams Partners (WPZ)",        sub: "Williams의 운영 MLP 자회사",     type: "entity" },
      ],
      edges: [
        { from: "ete_pre", to: "etp_pre", label: "GP + LP" },
        { from: "wmb_pre", to: "wpz_pre", label: "GP + 약 60% LP" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ete_post",  label: "Energy Transfer Equity (ETE)",  sub: "독립 유지, 합병 무산",          type: "acquirer" },
        { id: "etp_post",  label: "Energy Transfer Partners (ETP)", sub: "독립 유지 (2018년 ETE에 흡수)", type: "entity" },
        { id: "wmb_post",  label: "Williams Companies (WMB)",       sub: "독립 유지, 미드스트림 #2 지위 유지", type: "target" },
        { id: "wpz_post",  label: "Williams Partners (WPZ)",        sub: "독립 유지 (2018년 WMB에 흡수)",    type: "entity" },
      ],
      edges: [
        { from: "ete_post", to: "etp_post", label: "GP + LP (변동 없음)" },
        { from: "wmb_post", to: "wpz_post", label: "GP + 약 60% LP (변동 없음)" },
      ],
    },
    keyTerms: [
      { label: "총 합병 대가",              value: "$32.6B (현금 + ETE Corp 신주 혼합)",         accent: true },
      { label: "주당 대가",                 value: "$43.50 / Williams 주식 1주",              accent: true },
      { label: "대가 구조",                 value: "약 $6B 현금 + 신설 ETC 주식 (Williams 주주 분배)" },
      { label: "결합 시 EV",                value: "약 $770억 (부채 포함)" },
      { label: "결합 시 파이프라인",          value: "약 150,000마일 (1위 도약 예정)" },
      { label: "핵심 세무 구조",             value: "Section 721 면세 파트너십 기여 (reorganization)", accent: true },
      { label: "결정적 선행조건",            value: "Latham & Watkins의 Section 721 의견서 발급",   accent: true },
      { label: "MAC 일반조항",              value: "있었으나 ETE는 이를 발동하지 않음 (불충분 우려)" },
      { label: "ETE의 $1B 컨버터블 우선유닛", value: "2016-03 내부자 사모 발행 (Kelcy Warren 포함)",  accent: true },
      { label: "ETE 종료 통보",             value: "2016-04-21 (Latham 의견서 발급 거부 사유)",   accent: true },
      { label: "Delaware Chancery 제소",   value: "2016-05-13 Williams 측 제소 (bad-faith 종료 주장)" },
      { label: "약식 재판",                 value: "2016-06-21 ~ 06-22 (이틀, expedited trial)" },
      { label: "판결",                     value: "2016-06-24 Vice Chancellor Glasscock, ETE 승소",  accent: true },
      { label: "공식 파기일",                value: "2016-06-29",                              accent: true },
      { label: "위약금(Termination Fee)",   value: "$0 (조건 불충족이므로 위약금 의무 없음)",          accent: true },
    ],
  },

  advisors: {
    body: "양측은 미국 최정상 IB·로펌 라인업을 선임했고, 본 합병의 핵심 분쟁이 [세무 의견서 조항] 이라는 매우 기술적 영역에서 전개되면서 양측 세무·M&A 전문 변호사들의 1:1 대결 양상으로 흘러갔다. Latham & Watkins의 Bryan W. Holmes 등 세무 변호사들의 의견서 발급 거부 판단이 결정적 변수였고, Williams 측 Cravath의 항변에도 불구하고 Delaware Chancery는 \"Latham의 판단이 선의(good faith)였다\"고 인정. M&A 역사상 자문 로펌의 단일 판단이 메가딜의 운명을 결정한 가장 명확한 사례.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (Energy Transfer Equity)",
        initials: "ETE",
        bg: "bg-amber-700",
        advisors: [
          { firm: "Citigroup", role: "재무 자문 (Lead FA)", roleType: "financial", note: "ETE의 메인 IB, 합병 가격 협상 및 자본 구조 자문" },
          { firm: "Latham & Watkins LLP", role: "법률 자문 (세무·M&A)", roleType: "legal", note: "Section 721 의견서 발급 책임 주체. Bryan W. Holmes 등 세무 파트너가 의견서 거부 결정. 본 사건의 가장 결정적 advisor" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "법률 자문 (M&A 소송·Delaware)", roleType: "legal", note: "Delaware Chancery 소송 대응, 본 사건 ETE 측 메인 litigator" },
          { firm: "Morrison & Cohen LLP", role: "법률 자문 (보조)", roleType: "legal", note: "추가 법률 자문 지원" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (Williams Companies)",
        initials: "WMB",
        bg: "bg-red-700",
        advisors: [
          { firm: "Lazard", role: "재무 자문 (Lead FA)", roleType: "financial", note: "Williams의 메인 IB, 합병 가격 협상 및 Williams Partners 평가" },
          { firm: "Cravath, Swaine & Moore LLP", role: "법률 자문 (M&A·소송 Lead)", roleType: "legal", note: "Williams 측 메인 로펌, Delaware Chancery 제소 및 변론 주도. bad-faith 종료 주장" },
          { firm: "Gibson, Dunn & Crutcher LLP", role: "법률 자문 (세무·M&A)", roleType: "legal", note: "Williams 측 세무 자문, Latham의 의견서 거부에 대한 반박 의견 제시" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 SEC 공시(S-4, DEFM14A, 8-K) 및 Delaware Chancery 판결문 (C.A. No. 12168-VCG) 기반.",
  },

  valuation: {
    body: "ETE의 $326억 합병 대가는 Williams Companies의 FY2015 매출 약 $76억 대비 약 4.3배, FY2015 Adjusted EBITDA $41억 대비 약 8.0배의 멀티플이었다. 미드스트림 MLP의 통상 EV/EBITDA 거래 멀티플 범위(8~12배) 중 하단 수준으로, 'Williams 단독 멀티플로는 적절했으나 ETE 측이 시너지를 충분히 반영하지 못했다'는 평가가 발표 직후 시장에 존재했다. 본질적 문제는 멀티플이 아니라 [대가 구조의 환산 위험] 이었다, 합병 대가가 ETE Corp 신주 중심으로 설계됐기에 ETE 유닛 가격이 폭락하면 Williams 주주들이 실제로 받는 가치가 급락하는 구조였다. 2015년 9월 ETE 유닛 가격이 약 $26였을 때 합병가 $43.50의 합리성이 인정됐으나, 2016년 1월 ETE 유닛이 $5선까지 폭락하면서 Williams 주주들의 실제 수취 가치는 거의 반토막. 한편 [Section 721 의견서 조항] 이라는 단일 선행조건이 메가딜의 종료 사유가 된 본 사건은 M&A 밸류에이션 실무에서 [계약 조항 리스크 평가(contract risk valuation)] 의 중요성을 재확인시킨 사례로 기록됐다.",
    rows: [
      { item: "합병 대가 (제안가)",        val: "$32.6B",          note: "$43.50/share, 현금 + ETE Corp 신주", accent: true },
      { item: "Williams FY2015 매출",      val: "$7.6B",           note: "회사 공시 기반" },
      { item: "EV / FY2015 매출",          val: "약 4.3×",         note: "미드스트림 평균(3~5×) 중간값" },
      { item: "Williams FY2015 Adjusted EBITDA", val: "$4.1B",      note: "회사 공시, 전년 +22%" },
      { item: "EV / FY2015 EBITDA",        val: "약 8.0×",         note: "미드스트림 거래 범위(8~12×) 하단", accent: true },
      { item: "결합 시 예상 EV",            val: "약 $770억",        note: "부채 포함, Kinder Morgan 상회" },
      { item: "예상 시너지 (ETE 추정)",     val: "연 $20억+",        note: "운영 통합·자본 비용 절감, NPV $200억+" },
      { item: "결정적 위험 — 대가 환산",     val: "ETE 유닛 80% 폭락", note: "2015-Q3 $26 → 2016-Q1 $5선", accent: true },
      { item: "ETE의 $1B 우선유닛 사모 (2016-03)", val: "$1B 컨버터블 우선유닛", note: "내부자 사모(Warren 포함), 희석성 우선유닛", accent: true },
      { item: "Termination Fee 지급액",     val: "$0",              note: "선행조건 불충족이므로 위약금 의무 없음", accent: true },
      { item: "사후 Williams 시총 (2024)",  val: "약 $700억",        note: "독립 유지, 미드스트림 #2 지위 보존" },
    ],
    disclaimer: "재무 수치는 Williams Companies 연결 재무제표 및 공개 자료 기반. EBITDA는 회사 공시 'Adjusted EBITDA' 기준. 일부 수치는 공시 자료를 기반으로 한 추정.",
  },

  rationale: {
    buyer: {
      title: "Energy Transfer Equity의 합병 논리 (발표 당시)",
      initials: "ETE",
      bg: "bg-amber-700",
      points: [
        "[미드스트림 #1 도약] ETE 약 71,000마일 + Williams 약 33,000마일 + 양측 부속 자산 = 약 150,000마일의 압도적 1위 사업자 탄생. Kinder Morgan(84,000마일)을 약 1.8배 격차로 추월하는 산업 재편",
        "[Section 721 면세 기여 구조] Williams 자산을 ETE 파트너십에 면세로 이전하면서 단일 거래로 거대 통합 달성. 통상 미드스트림 M&A의 [면세 패스스루] 장점을 극대화한 구조",
        "[Transco 파이프라인 확보] Williams의 핵심 자산인 Transco(텍사스 ~ 뉴욕 동부 천연가스 대동맥)는 미국 동부 인구밀집 시장에 직접 접근. ETE가 전통적으로 약했던 동부 시장 진입의 결정적 자산",
        "[연 $20억+ 시너지 추정] 운영 통합·자본 비용 절감·교차 판매 등으로 시너지 NPV $200억+ 주장. ETE의 자본 시장 자본 비용(WACC) 절감 효과 강조",
        "[Yield 투자자 자본 흡수] 결합기업 LP 유닛은 미국 최대 미드스트림 yield 상품으로 자리잡으며 자본 비용 절감 + 신규 인프라 투자 자원 확보",
      ],
    },
    seller: {
      title: "Williams Companies의 합병 수용 논리 (발표 당시) / 종료 거부 논리 (2016 봄)",
      initials: "WMB",
      bg: "bg-red-700",
      points: [
        "[발표 당시] 주당 $43.50은 발표 전 종가 대비 약 +30~35% 프리미엄. Williams 주주에게 단기 가치 실현 + 결합기업 yield 상품에 대한 지속 노출 동시 제공",
        "[발표 당시] 자체 행동주의 압박 + 이사회 분열 상황에서 [전략적 출구] 선택. 2015년 9월 시점 Corvex Management 등 행동주의 펀드의 압박이 있었고, 이사회 내부도 분열돼 합병을 매도자 측 출구로 수용",
        "[2016 봄 종료 거부 논리 ①] ETE의 의견서 거부는 [악의(bad faith) 종료] 다. ETE는 단순히 시장 조건 변화로 합병이 부담스러워졌고, MAC 일반조항으로는 종료할 수 없으니 의도적으로 Latham을 통해 의견서 발급을 좌초시켰다는 주장",
        "[2016 봄 종료 거부 논리 ②] ETE의 [$1B 컨버터블 우선유닛 내부자 사모(2016-03)] 는 합병 계약 위반의 명백한 사보타주. Kelcy Warren 본인이 인수하는 희석성 우선유닛 발행은 결합기업 가치를 의도적으로 떨어뜨리는 [구조적 사보타주]",
        "[2016 봄 종료 거부 논리 ③] Latham의 의견서 거부 판단은 객관적 합리성이 결여돼 있다. Gibson Dunn 등 다른 세무 로펌은 의견서 발급이 가능하다는 견해, 따라서 Latham의 판단은 ETE의 종료 의지에 영향받은 [편향된 판단]",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 6월",
    body: "딜 파기로부터 10년이 지난 2026년 시점에서 ETE-Williams 합병 무산은 [M&A 계약 실무에 영구적 영향을 남긴 가장 중요한 Delaware 판례 중 하나]로 평가받는다. Vice Chancellor Glasscock의 [\"세무 의견서 조항은 MAC 일반조항과 다른 특정·객관적 선행조건이며, Latham의 의견서 거부는 선의 판단이므로 법원이 뒤집을 수 없다\"]는 핵심 논리는 이후 모든 미국 메가딜 협상에서 [discrete-condition vs MAC catch-all] 의 경계를 다시 그렸다. 이 판례 이후 미국 M&A 계약에서는 (1) 매도자가 [특정 선행조건에 대한 MAC carve-out, 즉 \"이 조건은 MAC 조항의 적용을 받지 않으며 매도자의 통제 밖 사유로 불충족 시 매수자가 종료할 수 없다\"] 라는 방어 조항을 표준으로 삽입, (2) 세무 의견서 조항이 포함된 경우 [매도자 측 세무 로펌과 매수자 측 세무 로펌 모두] 의 의견서 발급을 요구하는 이중 안전장치 도입, (3) 자문 로펌의 의견서 발급 거부에 대한 [선의 판단 기준(good faith standard)] 의 사전 명문화 등이 일반화됐다. 양사의 사후 운명은 대조적이었다, Williams는 2018년 Williams Partners(WPZ)를 모회사에 흡수합병하면서 단순화된 C-corp 구조로 전환, 2024년 시점 시가총액 약 $700억으로 미드스트림 #2 지위를 안정적으로 유지. ETE는 2018년 Energy Transfer Partners(ETP)를 ETE에 흡수합병해 Energy Transfer LP(ET)로 단순화, 2024년 시점 시가총액 약 $550억으로 미드스트림 #2~3 권역에서 운영. Kelcy Warren은 이후에도 Energy Transfer의 실질적 지배자로 남아있다. 결과적으로 양사 모두 유가 사이클을 별도로 생존했고, [합병하지 않은 게 양사 주주에게 더 나았는가] 는 여전히 학계·시장에서 논쟁 중이다.",
    overallVerdict: "Delaware Chancery의 ETE 승소 판결, M&A 계약 실무에 영구적 영향을 남긴 [특정 선행조건 우선] 판례 — 위약금 0원의 충격",
    positives: [
      "[양사 모두 별도 생존] Williams 시가총액 약 $700억(2024), ETE/ET 시가총액 약 $550억(2024). 합병 무산이 양사에 즉각적 가치 파괴를 의미하지 않았음",
      "[M&A 계약 실무 발전] [특정 선행조건 vs MAC 일반조항] 의 경계를 명확히 하고, MAC carve-out·이중 의견서·선의 판단 기준 명문화 등 계약 정교화의 출발점",
      "[Delaware 법원의 권위 강화] Vice Chancellor Glasscock의 95페이지 판결문은 [자문 로펌의 선의 판단을 법원이 존중한다] 는 원칙을 정립. M&A 계약의 자문 로펌 역할에 대한 법적 신뢰성 강화",
      "[유가 사이클 회피] 결과론적으로 합병이 성사됐다면 결합기업은 2016~2020년 유가 약세 + 차입금 부담으로 큰 어려움을 겪었을 가능성. 무산이 양사에 [구조적 보호] 가 됐을 수 있음",
      "[Williams 단독 성장] Williams Partners 흡수합병(2018) + Transco 확장 + 마르셀러스 게더링 자산 확보 등 독자 전략으로 안정적 성장 달성",
    ],
    risks: [
      "[Williams 측 가치 파괴] 발표일 종가 약 $43선 → 파기 직후 약 $20선으로 폭락(약 -50%). 단기적으로 Williams 주주는 실질 가치 손실 + 행동주의 압박으로 이사회 9명 중 6명 사임 등 거버넌스 충격",
      "[Williams CEO Alan Armstrong 권위 약화] 합병 추진 → 무산 → 거버넌스 충격으로 CEO의 단기 입지 약화. 다만 2018년 이후 안정화",
      "[ETE의 명성 손상] 자문 로펌을 통한 [의도적 의견서 좌초] 라는 의혹은 법적으로 무죄였으나 시장 평판에는 흠집. Kelcy Warren의 [무자비한 협상가] 이미지 강화",
      "[M&A 계약 위험 의식 격화] 본 판례 이후 매도자들은 [선행조건 리스크] 를 훨씬 더 엄격히 평가, 메가딜 협상의 복잡성과 시간 비용 증가",
      "[잠재 시너지 상실] ETE 측 추정 연 $20억+ 시너지 NPV $200억+가 실현되지 않음. 미국 미드스트림 산업 통합 가속화 기회 상실",
    ],
    editorNote:
      "ETE-Williams 무산은 한 줄짜리 세무 의견서 조항이 $326억 메가딜의 운명을 결정한 M&A 역사상 가장 충격적 사건이다. Vice Chancellor Glasscock의 핵심 통찰은 [\"M&A 계약 협상에서 양측이 의도적으로 특정·객관적 선행조건을 설계했다면, 법원은 그 조건의 문언적 해석을 존중해야 하며, MAC 일반조항의 선의 기준을 적용해서는 안 된다\"]. 이 원칙은 단순해 보이지만 실무적 함의는 막대했다 — 매수자는 메가딜 종료 경로로 (1) MAC 일반조항 발동(매우 어렵고 위약금 위험 큼) 외에 (2) 특정 선행조건의 의도적·합법적 좌초 라는 [\"백도어 종료 경로\"] 를 확보한 것이다. 다만 이 백도어는 매도자의 후속 협상에서 [MAC carve-out 조항] 으로 봉쇄되기 시작했고, 2016년 이후 모든 미국 메가딜 계약은 이 카브아웃을 표준 조항으로 삽입한다. Kelcy Warren이라는 [무자비한 텍사스 협상가] 의 의도적 사보타주 의혹(특히 $1B 우선유닛 내부자 사모)은 도덕적으로는 논란이 있으나 법적으로는 무죄로 판결됐다, [\"법은 의도가 아니라 결과를 본다\"] 는 Delaware의 전통이 다시 한 번 확인됐다. 양사가 별도로 생존했고 유가 사이클을 함께 견뎌낸 것을 보면 무산이 양사에 결과적으로 더 나았을 수 있다는 평가도 가능하나, 그 답은 여전히 [실현되지 못한 시너지 NPV $200억+] 의 가정과 [무산이 가져온 구조적 보호] 의 가정 사이에서 결정된다. 본 판례는 M&A 변호사라면 반드시 읽어야 하는 [Delaware Court of Chancery, C.A. No. 12168-VCG] 으로 정리됐다.",
  },

  tombstone: {
    acquirerInitials: "ETE",
    acquirerBg: "bg-amber-700",
    targetInitials: "WMB",
    targetBg: "bg-red-700",
    acquirerName: "Energy Transfer Equity, L.P.",
    targetName: "The Williams Companies, Inc.",
    dealTitle: "$32.6B 미드스트림 합병 (Delaware Chancery ETE 승소로 파기 — Terminated)",
    dealSize: "$32.6B",
    dealSizeUSD: "USD 32.6 Billion ($43.50/share, 현금 + ETE Corp 신주 혼합)",
    evEbitda: "약 8.0×",
    closeDate: "Jun 2016 — Terminated",
  },

  sources: [
    { id: 1, text: "Energy Transfer Equity Press Release — ETE and Williams Companies Announce Merger Agreement (September 28, 2015)", url: "https://ir.energytransfer.com" },
    { id: 2, text: "Williams Companies Press Release — Williams Cos. Enters Merger Agreement with Energy Transfer (September 28, 2015)", url: "https://investor.williams.com" },
    { id: 3, text: "Delaware Court of Chancery — The Williams Companies, Inc. v. Energy Transfer Equity, L.P., C.A. Nos. 12168-VCG & 12337-VCG (June 24, 2016, Glasscock V.C.)", url: "https://courts.delaware.gov" },
    { id: 4, text: "Energy Transfer Equity Press Release — ETE Announces Chancery Court Decision in Litigation with Williams (June 24, 2016)", url: "https://ir.energytransfer.com" },
    { id: 5, text: "Energy Transfer Equity Press Release — ETE Terminates Merger Agreement with Williams (June 29, 2016)", url: "https://ir.energytransfer.com" },
    { id: 6, text: "Williams Companies SEC Filing — 10-K Annual Report FY2015 (Filed February 2016)", url: "https://www.sec.gov/Archives/edgar/data/107263" },
    { id: 7, text: "Ropes & Gray Client Alert — Practical Guidance on Merger Conditions from Williams v. Energy Transfer Equity (May 2017)", url: "https://www.ropesgray.com" },
    { id: 8, text: "Arnold & Porter Advisory — Delaware Court Addresses the Meaning of 'Commercially Reasonable Efforts' in M&A Context (June 2016)", url: "https://www.arnoldporter.com" },
    { id: 9, text: "Cooley M&A Blog — Court Gives Energy Transfer the Right to Walk Based on its Counsel's Inability to Deliver the Required Tax Opinion (August 2016)", url: "https://cooleyma.com" },
    { id: 10, text: "Texas Lawbook — Williams v. ETE Trial Finale, The Battle of the Tax Lawyers (June 2016)", url: "https://texaslawbook.net" },
    { id: 11, text: "The Wall Street Journal — Energy Transfer Wins Right to Walk Away From $33 Billion Williams Deal (June 24, 2016)" },
    { id: 12, text: "Financial Times — How a Tax Opinion Killed a $33 Billion Merger (Retrospective, 2017)" },
    { id: 13, text: "Delaware Supreme Court — Affirmance of Chancery Court Ruling (March 2017)", url: "https://courts.delaware.gov" },
  ],

  seo: {
    title: "Energy Transfer × Williams $326억 합병 무산 완전 분석 — Section 721 의견서가 MAC을 이긴 판례",
    description:
      "2015년 9월 ETE의 Williams Companies $326억 합병 발표 → 2016년 6월 Delaware Chancery ETE 승소 → 위약금 0원 파기. Section 721 면세 의견서 조항이 MAC 일반조항을 이긴 첫 메이저 판례. Vice Chancellor Glasscock 판결문 + ETE의 $1B 내부자 사모 + Latham & Watkins 의견서 거부의 모든 맥락 심층 해부.",
    keywords: [
      "Energy Transfer Williams 합병 무산",
      "ETE Williams Companies 합병",
      "Section 721 면세 의견서",
      "Delaware Chancery MAC 판례",
      "Vice Chancellor Glasscock",
      "Latham Watkins 세무 의견서",
      "MAC clause specific condition precedent",
      "Kelcy Warren 합병 사보타주",
      "Williams v Energy Transfer 판결문",
      "M&A 위약금 0원",
      "미드스트림 파이프라인 합병",
      "MLP 합병 사례",
      "M&A 계약 선행조건",
      "Bad faith termination Delaware",
    ],
  },

  concepts: [
    {
      term: "Section 721 IRS 면세 의견서 (Section 721 Tax Opinion)",
      href: "/learn/section-721-tax-opinion",
      description: "IRS Section 721(a)는 자산을 파트너십에 기여(contribution)할 때 면세 처리하는 규정. M&A에서 면세 reorganization 구조의 핵심 근거이며, 자문 로펌이 [\"이 거래가 Section 721(a) 면세 요건을 충족한다\"] 는 의견서를 발급해야 closing이 가능. 본 사건의 결정적 선행조건.",
    },
    {
      term: "MAC 일반조항 vs 특정 선행조건 (MAC Clause vs Specific Condition Precedent)",
      href: "/learn/mac-vs-specific-condition",
      description: "MAC(material adverse change) 일반조항은 매수자가 일반적 시장 악화를 이유로 종료할 수 있는 광범위한 카브아웃이며 법원이 매우 엄격히 해석. 특정 선행조건(specific condition precedent)은 [세무 의견서·규제 승인·재무 기준] 등 명시적·객관적 조건으로, 법원이 문언적으로 해석해 매수자의 종료권을 인정하기 더 쉬움. 본 판례가 이 경계를 결정.",
    },
    {
      term: "Delaware Chancery + Vice Chancellor Glasscock",
      href: "/learn/delaware-chancery-court",
      description: "Delaware Court of Chancery는 미국 기업법·M&A 분쟁의 사실상 최종 법정. Vice Chancellor Sam Glasscock III는 본 사건 판사로 약 95페이지 판결문을 작성, [자문 로펌의 선의 판단을 법원이 존중한다] 는 원칙을 정립.",
    },
    {
      term: "Reverse Triangular Merger 세무 처리 (Reverse Triangular Merger Tax Treatment)",
      href: "/learn/reverse-triangular-merger",
      description: "매수자의 자회사를 매도자에 합병시켜 매수자가 매도자를 흡수하는 구조. ETE-Williams는 이 변형으로 [Section 721 면세 기여] 와 [현금·주식 혼합 대가] 를 결합한 복잡한 구조였고, 면세 처리 요건의 미세 균형이 깨지면서 의견서 발급이 좌초.",
    },
    {
      term: "Bad-Faith Termination Defense (악의 종료 방어)",
      href: "/learn/bad-faith-termination",
      description: "매도자가 매수자의 종료 통지에 대해 [\"매수자가 선행조건 불충족을 의도적으로 유발했다\"] 고 주장하는 방어 전략. Williams 측이 본 사건에서 시도했으나 Vice Chancellor Glasscock은 [\"자문 로펌의 선의 판단이 인정되는 한 매수자의 종료는 합법\"] 으로 판결.",
    },
    {
      term: "Dilutive Insider Placement (희석성 내부자 사모 발행)",
      href: "/learn/dilutive-insider-placement",
      description: "회사 내부자(CEO·임원 등)에게 매우 낮은 행사가로 우선유닛·전환사채 등을 사모 발행하는 행위. 본 사건에서 ETE는 2016년 3월 $1B 시리즈 A 컨버터블 우선유닛을 Kelcy Warren 본인 포함 내부자에게 발행 — Williams는 [\"합병 계약 위반의 구조적 사보타주\"] 로 비난했으나 법원은 직접 종료 사유로 인정하지 않음.",
    },
    {
      term: "MLP (Master Limited Partnership) 구조",
      href: "/learn/mlp-structure",
      description: "미국 세제 특례로 운영되는 [면세 패스스루 파트너십] 구조. 미드스트림 파이프라인 산업의 표준 자본 구조였고, ETE·Williams 모두 MLP 자회사(ETP·WPZ)를 통해 자산을 운영하는 [모회사 + MLP 자회사] 구조였음. 본 합병의 Section 721 구조가 가능했던 근본 이유.",
    },
    {
      term: "Oil Cycle MAC Trigger Failure (유가 사이클 MAC 발동 실패)",
      href: "/learn/oil-cycle-mac",
      description: "유가 폭락 같은 시장 전반 충격은 통상 MAC 일반조항으로 종료하기 어렵다(매도자 특정 사유가 아니라 시장 전체 충격이므로). ETE가 MAC 일반조항 대신 [Section 721 의견서 조항] 이라는 특정 선행조건을 선택한 핵심 이유, MAC 발동의 어려움을 우회한 [백도어 종료 경로] 였음.",
    },
  ],

  faq: [
    {
      q: "ETE는 왜 MAC 일반조항을 발동하지 않고 세무 의견서 조항을 활용했나요?",
      a: "MAC(material adverse change) 일반조항은 매수자에게 광범위한 종료권을 부여하지만 Delaware 법원이 매우 엄격히 해석합니다. 통상 [(1) 매도자 고유 사유여야 하고 시장 전체 충격은 제외, (2) 단기 변동이 아닌 지속적 충격이어야 하며, (3) 매수자가 이미 알고 있던 위험은 제외] 등의 엄격한 기준을 통과해야 합니다. 2015~2016년 유가 폭락은 [시장 전체 충격] 이고 [미드스트림 산업 일반에 영향] 이므로 MAC 발동의 승소 가능성이 매우 낮았습니다. 반면 [Section 721 의견서 조항] 은 명시적·객관적 선행조건이고, [Latham이 깨끗한 의견서를 발급할 수 없다] 는 사실 자체가 입증되면 추가 입증 부담이 적었습니다. ETE 측 변호사들의 정교한 [백도어 종료 경로] 선택이었습니다.",
    },
    {
      q: "Latham & Watkins는 왜 Section 721 의견서를 깨끗하게 발급하지 못했나요?",
      a: "핵심 문제는 [현금 대가 부분의 IRS 재구성(recharacterization) 위험] 입니다. ETE-Williams 합병은 약 $6B 현금 + ETC 신주의 혼합 대가였는데, 면세 Section 721 기여로 인정받기 위해서는 IRS가 [현금 부분과 주식 부분을 별개 거래] 로 인정해야 했습니다. 그러나 2016년 봄 ETE 유닛 가격이 80% 폭락하면서 [현금 부분의 상대적 비중이 급격히 커지자], IRS가 [\"현금이 주식 대가가 아니라 Williams 자산 매각의 직접 대가\"] 로 재구성할 위험이 실재화됐고, 이 경우 면세 요건이 깨지면서 약 $10억의 추가 세금 부담이 발생합니다. Latham 측 Bryan W. Holmes 등 세무 변호사들은 [\"현 시장 조건에서 선의로 깨끗한 의견서를 발급할 수 없다\"] 고 결론. Williams 측 Gibson Dunn은 의견서 발급이 가능하다는 반박을 제시했으나, Delaware 법원은 [\"Latham이 합리적 노력을 다한 결과 선의로 발급 거부 결정을 내린 이상 법원이 뒤집을 수 없다\"] 고 판결.",
    },
    {
      q: "Kelcy Warren의 $1B 시리즈 A 컨버터블 우선유닛 사모는 왜 합병 사보타주로 의심받았나요?",
      a: "2016년 3월 ETE는 $1B 규모의 시리즈 A 컨버터블 우선유닛을 매우 낮은 행사가로 [내부자(Kelcy Warren 본인 포함)] 에게 사모 발행했습니다. 이 발행은 (1) 합병 결합기업의 LP 유닛을 희석시키고, (2) 합병 후 Williams 주주들이 받게 될 ETC 주식의 가치를 떨어뜨리며, (3) 발행 자금은 ETE의 차입금 상환에 사용돼 [Williams 주주에게 갈 시너지 가치가 ETE 내부자에게 이전] 되는 효과를 가져왔습니다. Williams는 [\"이는 합병 계약의 commercially reasonable efforts 의무 위반의 구조적 사보타주\"] 라고 격렬히 비난했고, Delaware Chancery 소송에서도 이 점을 강조했습니다. 그러나 법원은 [\"우선유닛 발행 자체는 합병 계약이 명시적으로 금지하지 않았으며, 의견서 발급 좌초의 직접 인과는 입증되지 않았다\"] 고 판단해 직접 종료 사유로 인정하지 않았습니다. 도덕적 논란은 컸으나 법적으로는 무죄였던 사례.",
    },
    {
      q: "ETE는 정말 위약금을 한 푼도 안 냈나요?",
      a: "네, 정확히 그렇습니다. 합병 계약에는 통상의 [termination fee] 조항이 있었으나(추정 약 $14억 수준), 이는 [매수자가 자발적 사유로 종료] 또는 [MAC 일반조항 발동으로 종료] 시에만 발동되는 구조였습니다. 본 사건에서 ETE의 종료는 [Section 721 의견서라는 명시적 선행조건의 불충족] 이라는 별개 카테고리였고, 선행조건 불충족은 매수자·매도자 누구의 사유도 아닌 [객관적 조건 미충족] 으로 처리됐습니다. 따라서 ETE의 위약금 지급 의무는 발동되지 않았습니다. Delaware Chancery는 [\"세무 의견서 조항은 mutual condition precedent이며, 이의 불충족은 양측 모두에게 종료권을 부여하되 위약금 의무는 없다\"] 고 명확히 판시. M&A 위약금 역사상 가장 충격적 결과 중 하나로 기록됐습니다.",
    },
    {
      q: "이 판례가 이후 미국 M&A 계약 실무에 어떻게 영향을 미쳤나요?",
      a: "세 가지 결정적 영향이 있습니다. 첫째, [MAC carve-out 조항의 표준화]. 매도자들은 [\"이 특정 선행조건은 MAC 조항의 적용을 받지 않으며, 매도자의 통제 밖 사유로 불충족 시 매수자가 종료할 수 없다\"] 라는 방어 조항을 모든 메이저 메가딜에 표준 삽입. 둘째, [이중 의견서 요건]. 세무·규제 의견서가 포함된 경우 매도자 측·매수자 측 양 자문 로펌 모두의 의견서 발급을 요구하는 이중 안전장치 도입. 셋째, [선의 판단 기준의 명문화]. 자문 로펌의 의견서 발급 거부에 대한 [선의(good faith) 판단 기준] 을 계약에 사전 명문화 — [\"reasonable basis · supported by tax law · informed judgment\"] 같은 객관적 기준을 적시. 본 판례 이후 미국 메가딜 계약은 [선행조건의 정교한 설계] 가 메인 협상 포인트로 격상됐습니다.",
    },
    {
      q: "결과적으로 양사가 별도 생존했는데, 합병 무산이 양사 주주에게 더 나았다고 볼 수 있나요?",
      a: "양면적 평가가 가능합니다. 무산이 더 나았다는 시각은 (1) 결합기업이 성사됐다면 2016~2020년 유가 약세 + 차입금 부담으로 큰 어려움을 겪었을 가능성, (2) Williams의 독자 전략(Williams Partners 흡수합병·Transco 확장)이 안정적 성장을 가져옴, (3) 양사 모두 2024년 시점 시가총액이 합리적 수준($700억 + $550억 = $1,250억)으로 유지됐다는 점. 반대로 무산이 더 나빴다는 시각은 (1) ETE 측 추정 연 $20억+ 시너지 NPV $200억+가 실현되지 않음, (2) Williams 주가가 발표일 $43선에서 파기 직후 $20선으로 폭락하면서 단기 주주 손실, (3) Williams 이사회 9명 중 6명 사임 등 거버넌스 충격. 종합적으로 [합병이 성사됐다면 어떻게 됐을까] 는 학계·시장에서 여전히 논쟁 중이며, 한 가지 분명한 것은 [Delaware Chancery 판례가 M&A 계약 실무에 남긴 영향] 이 양사 사후 운명보다 훨씬 큰 유산이라는 점입니다.",
    },
  ],
};

export default deal;
