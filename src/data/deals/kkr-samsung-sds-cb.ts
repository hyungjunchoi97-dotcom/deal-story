/**
 * KKR × 삼성SDS 전환사채(CB) 1.22조원 — 2026년 4월
 * 단일 사모 CB 한국 시장 최대급 + 리픽싱·풋옵션 없는 6년 락업
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-samsung-sds-cb",
  title: "KKR이 삼성SDS에 1.22조 원을 꽂은 방법 — 리픽싱·풋옵션 없는 6년 락업",
  subtitle:
    "단일 사모 CB 한국 시장 최대급 · 전환가 18만 원·+18% 프리미엄 · 표면금리 2.5% · 만기 2032 · KKR의 \"꽃놀이패\" 구조",
  category: "ma",
  industry: "IT 서비스 / AI / Capital Markets",
  country: "대한민국",
  announcedAt: "2026-04-15",
  closedAt: "2026-04-30",
  announcedDisplay: "2026년 4월 15일 (이사회 결의)",
  closedDisplay: "2026년 4월 30일 (납입 완료)",
  readingMinutes: 14,
  tags: [
    "전환사채",
    "CB",
    "KKR",
    "삼성SDS",
    "Asia Fund V",
    "Startech AI",
    "AI",
    "Capital Markets",
    "PE",
    "정통 컨버터블",
    "Convertible Bond",
  ],
  excerpt:
    "2026년 4월 15일 삼성SDS가 KKR을 대상으로 1조 2,200억 원(약 USD 820M) 규모의 무기명식 무보증 사모 전환사채를 발행했다. 한국 시장에서 단일 사모 CB로는 최대급. 더 흥미로운 건 구조다 — 전환가 18만 원(+18% 프리미엄), 표면금리 2.5%, 만기 6년, [리픽싱과 풋옵션이 모두 없는 정통 컨버터블]이라는 한국 사모 시장에서 거의 보지 못한 발행사 유리 조건을 KKR이 수용했다. 거기에 KKR 인수 vehicle인 Startech AI L.P.는 인프라 펀드가 아닌 [Asia Fund V (PE 부문) 자금]을 주력으로 들어왔다. 단순한 수익 거래가 아니라 [삼성 그룹사와의 장기 전략 파트너십 그 자체]에 KKR이 가격을 매긴 거래.",

  acquirer: { initials: "KKR", bg: "bg-orange-600", label: "KKR (Asia Fund V · Startech AI L.P.)" },
  target: { initials: "SDS", bg: "bg-blue-700", label: "삼성SDS" },

  background: [
    "삼성SDS는 1985년 설립된 삼성그룹 IT 서비스 자회사로, 시스템통합(SI)·IT 아웃소싱(ITO)·물류(SCL)를 3대 사업축으로 두고 있다. 2026년 1Q 기준 매출 ~3조 7천억 원, 영업이익 ~2,400억 원, 시가총액 약 13조 원 안팎의 한국 대표 B2B IT 기업이다. 모회사 삼성전자가 약 22.6%, 이재용 회장 일가가 약 17.0%를 보유한 전형적인 그룹 IT 자회사 거버넌스.",
    "[10년간 자본 침묵을 깬 결정.] 삼성SDS는 2015~2025년 신주 발행을 한 차례도 한 적이 없다. 그룹 IT 자회사라는 안정적 매출 구조 덕분에 자체 영업현금흐름만으로 운영해 왔다. 그러나 2024~2025년 [생성형 AI · MLOps · 데이터센터 · 산업용 AI] 영역에서 글로벌 경쟁이 본격화되면서, 자체 R&D + 선제적 M&A에 들어갈 [실탄] 확보가 시급해졌다. 보유 현금 약 6조 4천억 원에 더해 추가 1조+를 확보하면 단번에 7조 원대 AI/M&A 드라이파우더가 만들어진다 — 이것이 이번 거래의 출발점.",
    "[왜 신주가 아닌 CB였나.] 신주 발행 시 모회사 삼성전자의 지분율(22.6%)이 즉시 희석된다. 삼성SDS 입장에서는 [그룹 거버넌스 영향을 최소화하면서] 1조+를 조달해야 했고, CB는 \"전환 시점이 향후 6년 안에 분산되고\" \"전환 안 되면 채권으로 회수\"되는 구조라 이 조건을 정확히 만족시킨다. CB로 조달한 1.22조 + 기존 6.4조 = [AI/M&A 실탄 7.6조 원] 확보가 본 거래의 회사 측 본질.",
    "[KKR이 PE 부문으로 들어온 이유 — SK 데이터센터 충돌.] KKR은 통상 이런 인프라성 자본 거래에 [Asia Pacific Infrastructure Fund]를 활용한다. 그러나 KKR은 직전인 2024년 SK그룹 AI 데이터센터 합작에 인프라 펀드로 소수 지분 투자를 했고, SK 측이 부과한 [\"타 그룹 유사 사업 참여 금지\"] 조항 때문에 본 거래에서는 인프라 펀드가 못 들어왔다. 결과적으로 KKR은 [Asia Fund V (PE 부문)] 자금을 주력으로 동원해 신설 vehicle [Startech AI L.P.]를 통해 CB를 인수했다. 인수금융(LBO 부채) 없이 펀드 자기자본 1.22조만으로 클로징된 — [외부자금 1도 필요 없는] 거래.",
    "2026년 4월 15일 삼성SDS 이사회가 제24회차 무기명식 무보증 사모 전환사채 1조 2,200억 원 발행을 결의했고, 같은 달 30일 납입이 완료됐다. 전환청구 가능 기간은 2027년 4월 30일부터 2032년 4월 23일까지. 전량 전환 시 신주 발행 비율은 약 [8.06%]에 해당한다. 외국 PE가 삼성 그룹사 자본 구조에 직접 들어간 첫 사례로 기록됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "1조 2,200억 원 (약 USD 820M)",
    acquirerName: "KKR (Asia Fund V · Startech AI L.P.)",
    targetName: "삼성SDS (제24회차 무기명식 무보증 사모 전환사채)",
    announcedDisplay: "2026년 4월 15일",
    closedDisplay: "2026년 4월 30일",
    country: "KR",
  },

  executiveSummary: [
    "[한국 단일 사모 CB 사상 최대급] 삼성SDS 제24회차 무기명식 무보증 사모 전환사채 1조 2,200억 원(약 USD 820M)을 KKR이 단독 인수 (2026.04.15 이사회 결의 → 04.30 납입)",
    "[정통 컨버터블 구조] 전환가 180,000원(발행 시점 주가 대비 +18% 프리미엄), 만기 2032.04.30(6년), 표면금리·만기금리 각 2.5%",
    "[발행사에 극히 유리한 조건을 KKR이 수용] 리픽싱(주가 하락 시 전환가 하향 조정)·풋옵션(조기 상환 청구권) [둘 다 없음] — 한국 사모 CB에서 거의 보지 못한 발행사 유리 구조. KKR이 수익률보다 [장기 파트너십 가격]을 매겼다는 시그널",
    "[KKR의 PE 부문 단독 진입] 인수 vehicle은 Startech AI L.P. — Asia Pacific Infrastructure Fund가 아닌 [Asia Fund V (PE 부문)] 자금이 주력. SK그룹 AI 데이터센터 합작 시 부과된 \"타 그룹 유사 사업 참여 금지\" 조항으로 인프라 펀드가 못 들어옴",
    "[외부자금 1도 없는 거래] 인수금융(LBO 부채)·신디케이션·외부 LP 모집 없이 펀드 자기자본 1.22조만으로 클로징. KKR이 보유한 PE 드라이파우더의 직접 투입",
    "[삼성SDS의 의도] 신주 발행 시 모회사 삼성전자 22.6% 지분 희석을 피하면서 1.22조 확보 → 기존 현금 6.4조와 합쳐 [AI/M&A 실탄 7.6조 원] 확보. 10년간 자본 침묵을 깬 결정",
    "[KKR의 꽃놀이패] 6년 락업이라 단기 전환·매각 경로 없음. 만기까지 표면금리 2.5% + 만기보장수익률 + 전환권 모두 보유 → 주가 상승 시 8% 지분 차익, 하락 시 채권으로 회수",
  ],

  industryOverview: {
    body: "한국 IT 서비스 산업은 2026년 들어 [생성형 AI · 산업용 AI · MLOps · 데이터센터] 네 영역의 동시 자본 경쟁이 시작됐다. 삼성SDS·LG CNS·SK C&C·롯데정보통신·포스코DX 등 그룹 IT 자회사들이 모두 AI 전환에 필요한 R&D + M&A 자금 확보를 서두르고 있고, 글로벌에서는 Accenture·IBM·Cognizant·Capgemini 등이 자체 자본만으로 같은 전환을 수행 중이다. 한국 IT 서비스 자회사들의 차별점은 [그룹 거버넌스 보호] — 신주 발행 시 모회사 지분 희석 문제로 신주 대신 CB·EB·신종자본증권 같은 구조화 상품을 선호하는 경향이 커지고 있다.",
    metrics: [
      { label: "삼성SDS 시가총액 (2026.4)", value: "약 13조 원",  sub: "발행 시점 종가 기준" },
      { label: "삼성SDS FY2025 매출",       value: "약 14.6조 원", sub: "+8.2% YoY" },
      { label: "삼성SDS FY2025 영업이익",   value: "약 9,400억 원", sub: "OPM 6.4%" },
      { label: "삼성SDS 보유 현금성 자산",  value: "약 6.4조 원",  sub: "2026.1Q 기준 추정" },
    ],
    subBody:
      "한국 PE 시장에서 외국계 운용사가 그룹 IT 자회사 자본 구조에 직접 들어간 사례는 매우 드물다. 보통 그룹 IT 자회사들은 그룹 내 cash pooling으로 자본 조달을 끝내거나, 국내 기관 대상 신종자본증권으로 갔다. KKR의 본 거래는 [외국 메가 PE가 한국 IT 자회사의 6년 후 잠재 8% 주주가 되겠다고 선언한 첫 사례]에 해당한다.",
    players: [
      { name: "KKR",                role: "글로벌 메가 PE, 본 거래 인수자 (Asia Fund V · Startech AI L.P.)" },
      { name: "삼성SDS",            role: "발행사, 삼성그룹 IT 서비스 자회사" },
      { name: "삼성전자",            role: "삼성SDS 최대주주 (약 22.6%), 본 거래 이후 6년간 지분 변동 없음" },
      { name: "이재용 회장 일가",     role: "삼성SDS 약 17.0% 보유, 사실상의 그룹 거버넌스 정점" },
      { name: "SK그룹",             role: "KKR과 별도 AI 데이터센터 합작 — KKR 인프라 펀드의 본 거래 진입을 막은 제약 조건" },
    ],
  },

  companyOverview: {
    targetName: "삼성SDS (Samsung SDS Co., Ltd.)",
    body: "삼성SDS는 1985년 5월 삼성전자 전산실에서 독립한 한국 최초의 시스템통합(SI) 전문기업이다. 2014년 11월 유가증권시장 상장. 3대 핵심 사업은 [① SI/ITO (Enterprise IT 구축·운영)], [② SCL (Supply Chain Logistics — 글로벌 물류)], [③ 클라우드/AI (Samsung Cloud Platform·Brity AI)]. 모회사 삼성전자의 글로벌 IT 운영을 사실상 담당하면서, 그룹사 의존도를 점진적으로 줄이고 외부 매출을 늘려가는 중이다. 2025년 기준 글로벌 직원 약 25,000명, 14개국 30여 개 법인.",
    metrics: [
      { label: "설립연도",          value: "1985년",       sub: "삼성전자 전산실에서 독립" },
      { label: "상장일",            value: "2014.11.14",    sub: "유가증권시장 (코드 018260)" },
      { label: "FY2025 매출",       value: "약 14.6조 원",   sub: "SI 35% / SCL 50% / 클라우드 15%" },
      { label: "FY2025 영업이익",    value: "약 9,400억 원",  sub: "OPM 6.4%" },
    ],
    financials: [
      { year: "FY2021", revenue: 137000, cogs: 121000, grossProfit: 16000, sga: 7000, operatingIncome: 9000,  ebitda: 11000 },
      { year: "FY2022", revenue: 175000, cogs: 156000, grossProfit: 19000, sga: 8500, operatingIncome: 10500, ebitda: 13000 },
      { year: "FY2023", revenue: 132000, cogs: 116000, grossProfit: 16000, sga: 7500, operatingIncome: 8500,  ebitda: 11000 },
      { year: "FY2024", revenue: 135000, cogs: 118500, grossProfit: 16500, sga: 7800, operatingIncome: 8700,  ebitda: 11300 },
      { year: "FY2025", revenue: 146000, cogs: 127000, grossProfit: 19000, sga: 9600, operatingIncome: 9400,  ebitda: 12200 },
    ],
    financialsNote: "단위: 억 원 (₩억) | K-IFRS 연결 기준 | 출처: 삼성SDS 사업보고서 (FY2025는 잠정·추정 포함)",
    financialsCurrency: "₩",
    financialsUnit: "억",
  },

  dealStructure: {
    body: "본 거래는 [신주 발행 X · 자사주 매각 X · 사업부 매각 X · 인수금융 X] 의 4중 음(無) 구조다. 삼성SDS가 1조 2,200억 원 규모 무기명식 무보증 사모 전환사채 1종을 발행하고, KKR이 단독 인수한 순수 자본조달 거래. CB 만기 2032년 4월 30일까지 KKR은 채권으로 보유하다가 2027년 4월 30일 이후 전환청구권 행사 또는 만기 상환을 선택할 수 있다. 전환사채 자체와 전환으로 발행될 신주 모두 [6년간 양도가 금지](락업)된다. KKR은 본 거래에 인수금융을 사용하지 않았다 — [Asia Fund V (PE 부문)] 펀드 자기자본만으로 클로징.",
    preOwnership: {
      nodes: [
        { id: "se_pre",     label: "삼성전자",        sub: "약 22.6%",        type: "acquirer" },
        { id: "lee_pre",    label: "이재용 회장 일가",  sub: "약 17.0%",        type: "entity" },
        { id: "sds",        label: "삼성SDS",         sub: "한국 대표 IT 서비스",  type: "target" },
        { id: "free_pre",   label: "기타 자유유통",     sub: "약 60.4%",        type: "public" },
      ],
      edges: [
        { from: "se_pre",   to: "sds", label: "22.6% (최대주주)" },
        { from: "lee_pre",  to: "sds", label: "17.0% (총수 일가)" },
        { from: "free_pre", to: "sds", label: "60.4% (자유유통)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "se_post",    label: "삼성전자",        sub: "약 22.6% (변동 없음)",          type: "acquirer" },
        { id: "lee_post",   label: "이재용 회장 일가",  sub: "약 17.0% (변동 없음)",         type: "entity" },
        { id: "kkr",        label: "KKR",            sub: "잠재 8.06% (6년 락업 후)",     type: "fund" },
        { id: "sds_post",   label: "삼성SDS",         sub: "AI/M&A 실탄 7.6조",         type: "target" },
        { id: "free_post",  label: "기타 자유유통",     sub: "약 60.4%",                  type: "public" },
      ],
      edges: [
        { from: "se_post",   to: "sds_post", label: "22.6%" },
        { from: "lee_post",  to: "sds_post", label: "17.0%" },
        { from: "kkr",       to: "sds_post", label: "CB 1.22조 (잠재 8.06%, 락업 중)" },
        { from: "free_post", to: "sds_post", label: "60.4%" },
      ],
    },
    keyTerms: [
      { label: "발행 형식",         value: "제24회차 무기명식 무보증 사모 전환사채" },
      { label: "발행 규모",         value: "1조 2,200억 원 (약 USD 820M)",          accent: true },
      { label: "전환가",           value: "180,000원 / 주",                       accent: true },
      { label: "컨버전 프리미엄",     value: "약 +18% (발행 결의일 종가 대비)" },
      { label: "표면금리·만기금리",   value: "각 2.5%" },
      { label: "만기",             value: "2032년 4월 30일 (6년)" },
      { label: "전환청구 가능 기간",   value: "2027.04.30 ~ 2032.04.23" },
      { label: "리픽싱 조항",        value: "없음",                                 accent: true },
      { label: "풋옵션",            value: "없음",                                 accent: true },
      { label: "양도 제한",         value: "CB·전환 신주 모두 6년 락업" },
      { label: "전량 전환 시 지분율",   value: "약 8.06% (신주 발행 기준)" },
      { label: "인수 vehicle",      value: "Startech AI L.P. (KKR Asia Fund V 주력)" },
      { label: "인수금융",          value: "없음 (펀드 자기자본만)" },
    ],
  },

  advisors: {
    body: "본 거래는 사모 CB 단독 인수 구조라 통상의 M&A 자문사 라인업과 다르다. 양 측의 인하우스 자본시장 팀이 핵심 협상을 주도했고, 외부 자문은 각자의 한국 법무법인이 들어왔다는 게 시장 일반적 관측이다. 1차 자료에서 공식 발표된 자문사 명단은 제한적.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR (인수자)",
        initials: "KKR",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "KKR Asia Capital Markets / 인하우스",
            role: "재무 자문 (인하우스)",
            roleType: "financial",
            note: "CB 구조 설계·가격 결정·전환 조건 협상 인하우스 주관",
          },
          {
            firm: "김앤장 법률사무소 (시장 관측)",
            role: "법무 자문",
            roleType: "legal",
            note: "외환·증권 규제·세무 자문 (공식 확인 제한)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "삼성SDS (발행사)",
        initials: "SDS",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "삼성SDS IR / 재무팀",
            role: "재무 자문 (인하우스)",
            roleType: "financial",
            note: "발행 구조·전환 조건·락업 협상 인하우스 주관",
          },
          {
            firm: "(미공개 — 시장 관측: 대형 국내 로펌)",
            role: "법무 자문",
            roleType: "legal",
            note: "공시·자본시장법 자문 (공식 확인 제한)",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 및 시장 보도 기반이며, 일부는 미확인. 실제 계약 내용과 다를 수 있습니다.",
  },

  valuation: {
    body: "본 거래의 핵심 밸류에이션 변수는 [전환가 18만 원]과 [+18% 컨버전 프리미엄]이다. 발행 결의일 기준 삼성SDS 종가 약 15.3만 원 대비 18% 높은 가격에서 KKR이 전환할 수 있다는 의미다. 6년 만기까지 주가가 18만 원을 넘지 못하면 KKR은 채권으로 회수(2.5% 표면금리 + 만기보장수익률)하고, 18만 원을 넘으면 전환해 8% 지분 차익을 확보한다. KKR이 \"꽃놀이패(heads I win, tails I don't lose)\"라는 평을 받는 이유.",
    rows: [
      { item: "발행 결의일 종가 (2026.4.14 기준 추정)", val: "약 153,000원",    note: "발행 결의 전일" },
      { item: "전환가",                              val: "180,000원",      note: "+18% 컨버전 프리미엄", accent: true },
      { item: "표면금리 · 만기금리",                    val: "각 2.5%",         note: "단리 기준" },
      { item: "만기",                                val: "2032.04.30 (6년)", note: "전환 안 시 채권 상환" },
      { item: "전환청구 가능 기간",                     val: "2027.04.30 ~ 2032.04.23", note: "1년 후부터 가능" },
      { item: "양도 제한",                            val: "6년 락업",         note: "CB·전환 신주 모두" },
      { item: "전량 전환 시 KKR 지분율",                val: "약 8.06%",        note: "신주 발행 기준" },
      { item: "본 거래 규모",                         val: "1조 2,200억 원",   note: "약 USD 820M",          accent: true },
      { item: "삼성SDS 총 AI/M&A 실탄 (post-deal)",   val: "약 7.6조 원",      note: "기존 6.4조 + 본 거래 1.22조", accent: true },
    ],
    disclaimer: "주: 가격 수치는 공시 자료 및 언론 보도 기반. 일부 시점 가격은 추정.",
  },

  rationale: {
    buyer: {
      title: "KKR — 왜 삼성SDS인가, 왜 PE 부문이 들어왔나",
      initials: "KKR",
      bg: "bg-orange-600",
      points: [
        "[삼성 그룹사와의 장기 파트너십 가격] 삼성SDS의 단기 주가 베팅이 아니라, 6년에 걸쳐 삼성그룹 IT·AI 자회사에 자본 파트너로 자리잡는 거래. 리픽싱·풋옵션을 포기한 정통 컨버터블 구조는 단순 채권 수익이 아닌 파트너십에 가격을 매긴 결과",
        "[꽃놀이패 구조] 6년 락업이라 단기 청산 경로 없음. 주가 18만 원 돌파 시 8% 지분 차익, 18만 원 미달 시 표면금리 2.5% + 만기보장수익률로 채권 회수. 다운사이드가 채권 수익으로 보호된 업사이드 게임",
        "[Asia Fund V의 한국 메가딜 배치] KKR Asia Fund V는 한국 시장에서 [고려아연 추가 분쟁·이마트·삼성SDS] 등 굵직한 자본 거래에 연속 진입. 본 거래가 PE 부문의 한국 IT/AI 노출 확대 신호",
        "[인프라 펀드가 못 들어온 제약] SK그룹 AI 데이터센터 소수지분 투자 시 부과된 \"타 그룹 유사 사업 참여 금지\" 조항으로 인프라 펀드 진입 차단. 결과적으로 PE 부문이 단독 등판 — KKR 내부 펀드 간 경쟁 구도의 흥미로운 측면",
        "[외부자금 1도 없는 거래] 인수금융·신디케이션·외부 LP 모집 없이 펀드 자기자본 1.22조만으로 클로징. KKR의 PE 드라이파우더 운용 여력 시그널",
      ],
    },
    seller: {
      title: "삼성SDS — 왜 CB였나, 왜 KKR이었나",
      initials: "SDS",
      bg: "bg-blue-700",
      points: [
        "[모회사 지분 희석 회피] 신주 발행 시 삼성전자 22.6% 지분이 즉시 희석됨. CB는 6년 후 분산 전환되거나 채권 상환이라 그룹 거버넌스에 미치는 즉각 영향이 0. 이재용 회장 일가 17% 지분도 보호",
        "[10년 자본 침묵을 깬 AI 실탄 확보] 2015~2025년 신주 발행 0회. 자체 영업현금흐름만으로 운영. AI/M&A 경쟁 본격화로 [기존 6.4조 + 본 거래 1.22조 = 7.6조 원 실탄] 확보가 본 거래의 핵심 목적",
        "[정통 컨버터블 구조의 발행사 우위 협상] 한국 사모 CB는 통상 리픽싱 조항(주가 하락 시 전환가 하향)을 넣어 발행사에 부담. KKR이 이를 포기한 것은 발행사에 극히 유리. 6년 락업으로 KKR이 단기 시장 매각도 못 함",
        "[글로벌 PE 파트너 영입] 외국 메가 PE가 6년간 8% 잠재 지분으로 묶이면서 [KKR의 글로벌 포트폴리오사 네트워크에 SDS가 노출됨]. AI/M&A 표적 발굴·소싱·해외 진출 협업 가능성",
        "[표면금리 2.5%의 저비용 자본] 한국 회사채 시장 평균 금리 대비 매우 낮은 표면금리. 채권 비용 부담을 최소화하면서 1.22조 확보",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 자체는 2026년 4월 30일 납입 완료로 클로징됐다. 이후 6년 락업이라 단기 변동성은 없고, 거래의 진짜 평가는 [2027년 4월 30일 전환청구 가능 시점] + [2032년 4월 30일 만기]에서 결정된다. 단기 시장 평가는 \"발행사 삼성SDS에 매우 유리, KKR은 장기 파트너십 가치에 가격을 매긴 거래\"로 정리되는 분위기. 외국 메가 PE의 한국 IT 자회사 자본 구조 직접 진입 첫 사례로, 향후 LG CNS·SK C&C 등 다른 그룹 IT 자회사의 유사 거래 가능성이 거론되고 있다.",
    overallVerdict: "발행사·인수자 모두에게 \"꽃놀이패\"에 가까운 윈윈 구조 (단, 평가는 6년 후 확정)",
    positives: [
      "[삼성SDS] 모회사 지분 희석 없이 1.22조 확보 → 총 AI/M&A 실탄 7.6조 원. 10년 자본 침묵을 끝낸 전략 전환의 출발점",
      "[KKR] 표면금리 2.5% + 만기보장수익률 + 잠재 8% 지분 차익 + 6년 삼성 파트너십 노출 — 다운사이드 보호된 업사이드 게임",
      "[한국 자본시장] 외국 메가 PE의 한국 IT/AI 자회사 직접 자본 진입 첫 사례 — 유사 거래의 표준 구조로 자리잡을 가능성",
      "[정통 컨버터블 구조 회귀] 한국 사모 CB 시장이 리픽싱 의존에서 벗어나 글로벌 표준 컨버터블로 회귀하는 신호",
    ],
    risks: [
      "[KKR 입장] 6년 락업으로 단기 매각·헤지 경로 없음. 삼성SDS 주가가 18만 원을 6년간 한 번도 못 넘으면 표면 2.5% + 만기보장수익률만 회수 — 메가 PE의 IRR 기대치에 못 미칠 위험",
      "[삼성SDS 입장] 6년 후 전환 시 모회사 삼성전자 지분이 22.6% → 약 20.8%로 희석. KKR이 잠재 8% 지분으로 6년 후 영향력 행사 가능성",
      "[KKR 그룹사 간 충돌] SK그룹 데이터센터 합작 + 삼성SDS CB가 미래 어느 시점에 사업 충돌을 일으킬 가능성. 인프라·PE 부문 간 분리 운영의 한계",
      "[그룹 거버넌스 신호] 삼성그룹이 자본 조달에 외국 PE를 활용하기 시작한 신호 — 향후 다른 자회사 거래 시 시장 기대치가 올라가 발행사 우위 협상이 쉽지 않을 수 있음",
    ],
    editorNote:
      "이 거래의 진짜 의미는 \"한국 단일 사모 CB 최대급\" 같은 수치가 아니라, [외국 메가 PE가 한국 그룹 IT 자회사의 6년 후 잠재 8% 주주가 되겠다고 선언한 첫 사례] 라는 점이다. 리픽싱·풋옵션 없는 정통 컨버터블 구조를 KKR이 수용한 것은 단순한 양보가 아니라 [\"우리는 단기 수익이 아니라 삼성 그룹사와의 장기 협업 가능성 자체에 가격을 매긴다\"]는 시그널. 한국 PE·자본시장의 새 표준 거래로 기록될 가능성이 크다. — 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-orange-600",
    targetInitials: "SDS",
    targetBg: "bg-blue-700",
    acquirerName: "KKR (Asia Fund V · Startech AI L.P.)",
    targetName: "Samsung SDS Co., Ltd.",
    dealTitle: "Largest Single Private Convertible Bond Issuance in Korea — 6-Year Lockup, No Refixing, No Put",
    dealSize: "₩1.22 trillion",
    dealSizeUSD: "approx. USD 820M",
    evEbitda: "N/A (Convertible Bond)",
    closeDate: "Apr 30, 2026",
  },

  sources: [
    { id: 1, text: "삼성SDS 공식 보도자료 — KKR 전략적 파트너십 체결 (2026.04.15)", url: "https://www.samsungsds.com/kr/news/kkr-260415.html" },
    { id: 2, text: "금융감독원 전자공시시스템 DART — 삼성SDS 제24회차 무기명식 무보증 사모 전환사채 발행 공시 (2026.04.15)", url: "https://dart.fss.or.kr" },
    { id: 3, text: "서울경제 시그널 — KKR, 삼성SDS 전환사채 1.22조 인수…기업가치 제고 파트너십 체결 (2026.04)", url: "https://www.sedaily.com/article/20032718" },
    { id: 4, text: "인베스트조선 — 삼성SDS 투자한 KKR, 인프라 아닌 PE가 나선 이유 (2026.04.16)", url: "https://www.investchosun.com/site/data/html_dir/2026/04/16/2026041680034.html" },
    { id: 5, text: "topdaily — 삼성SDS 조단위 전환사채 발행에 꽃놀이패 쥔 KKR (2026.04)", url: "https://www.topdaily.kr/articles/109768" },
    { id: 6, text: "한국경제 — 10년 투자 침묵 깬 삼성SDS, KKR과 손잡고 AI 올인 (2026.04.15)", url: "https://www.hankyung.com/article/2026041534891" },
    { id: 7, text: "헤럴드경제 — 삼성SDS-KKR, 1.2조 CB 발행…M&A 등 AI 실탄 '7.6조' 확보 (2026.04)", url: "https://biz.heraldcorp.com/article/10717455" },
    { id: 8, text: "데이터투자 — 삼성SDS, 1.2조원 자금 수혈... 전환가 18만원에 '6년 락업' 강수 (2026.04.15)", url: "https://www.datatooza.com/article/20260415084054991152ef34d07a_80" },
    { id: 9, text: "한국신용신문 — 주총서 조용히 깔아둔 포석…삼성SDS-KKR 딜의 진짜 속내", url: "https://www.creditnews.kr/news/articleView.html?idxno=2723" },
  ],

  seo: {
    title: "KKR × 삼성SDS 1.22조 CB — 리픽싱·풋옵션 없는 6년 락업의 의미",
    description:
      "2026년 4월 KKR이 삼성SDS 사모 전환사채 1조 2,200억 원을 단독 인수. 한국 단일 사모 CB 최대급. 전환가 18만원·+18% 프리미엄·표면 2.5%·6년 락업·리픽싱·풋옵션 없는 정통 컨버터블. KKR Asia Fund V가 외부 자금 없이 단독 진입한 한국 PE·자본시장의 새 표준 거래 해부.",
    keywords: [
      "KKR 삼성SDS",
      "삼성SDS 전환사채",
      "삼성SDS CB",
      "KKR Asia Fund V",
      "Startech AI L.P.",
      "정통 컨버터블",
      "리픽싱 없는 CB",
      "한국 사모 전환사채",
      "삼성SDS AI 실탄",
      "외국 PE 한국 진입",
      "한국 자본시장 KKR",
    ],
  },

  concepts: [
    {
      term: "전환사채 (CB, Convertible Bond)",
      description: "발행사가 채권 형식으로 자금을 조달하되 일정 기간 후 인수자가 채권을 주식으로 전환할 권리를 가진 하이브리드 증권. 발행사는 신주 즉시 발행 부담 없이 자본 조달 가능, 인수자는 채권 안전성 + 주식 업사이드 동시 보유.",
    },
    {
      term: "리픽싱 (Refixing) 조항",
      description: "발행 후 주가가 일정 수준 이하로 하락하면 전환가를 자동으로 하향 조정해 인수자의 손실을 완화하는 조항. 한국 사모 CB의 통상 조항이며 발행사에 부담이 큼. 본 거래에서는 [없음] — 한국 시장 드문 발행사 우위 구조.",
    },
    {
      term: "풋옵션 (Put Option)",
      description: "CB 인수자가 만기 전에 발행사에 채권 조기 상환을 청구할 수 있는 권리. 한국 사모 CB에서 흔히 사용. 본 거래에서는 [없음] — KKR은 6년 락업 동안 어떤 방식으로도 조기 회수 불가.",
    },
    {
      term: "컨버전 프리미엄 (Conversion Premium)",
      description: "CB 전환가가 발행 시점 주가보다 얼마나 높은지를 나타내는 비율. 본 거래는 +18% — 한국 사모 CB 평균(5~10%)보다 발행사 유리. 인수자는 그만큼 주가 상승 베팅을 한다는 의미.",
    },
    {
      term: "락업 (Lockup)",
      description: "발행한 증권의 양도·매각을 일정 기간 금지하는 조항. 본 거래는 CB와 전환 신주 모두 6년 락업 — 인수자가 단기 매각·헤지로 차익 실현이 불가능. KKR이 단기 트레이딩이 아닌 장기 파트너십 가격을 매겼다는 시그널.",
    },
    {
      term: "Asia Fund V (KKR PE 부문 아시아 5호)",
      description: "KKR이 운용하는 아시아 지역 사모투자 펀드 (Private Equity). 본 거래에서 인수 vehicle Startech AI L.P.의 주력 자금 출처. 한국·일본·중국·동남아 굵직한 PE 거래에 동원되는 KKR의 핵심 펀드.",
    },
    {
      term: "꽃놀이패 (Heads I Win, Tails I Don't Lose)",
      description: "주가 상승 시 전환으로 지분 차익, 주가 하락 시 채권으로 원리금 회수 — 양 방향 모두에서 인수자가 손해 보지 않는 비대칭 수익 구조. 본 거래의 KKR 입장에 대한 시장의 일반 평가.",
    },
    {
      term: "외부자금 없는 PE 거래",
      description: "인수금융(LBO 부채)·신디케이션·외부 LP 모집 없이 펀드 자기자본만으로 클로징하는 거래. 본 거래는 KKR Asia Fund V의 드라이파우더 1.22조만으로 진행됨. 메가 PE의 자금 운용 여력 시그널.",
    },
  ],

  faq: [
    {
      q: "왜 삼성SDS는 신주 발행이 아닌 전환사채(CB)를 선택했나요?",
      a: "신주 발행 시 모회사 삼성전자의 22.6% 지분이 즉시 희석되기 때문입니다. CB는 6년 후 분산 전환되거나 채권으로 상환되는 구조라 그룹 거버넌스에 미치는 즉각 영향이 0입니다. 또한 삼성SDS는 [모회사 지분 보호 + AI/M&A 실탄 1조+ 확보]라는 두 마리 토끼를 동시에 잡아야 했고, CB가 이 조건을 정확히 만족시켰습니다. 결과적으로 기존 현금 6.4조 + 본 거래 1.22조 = [AI/M&A 실탄 7.6조 원] 확보가 가능했습니다.",
    },
    {
      q: "KKR이 리픽싱과 풋옵션을 모두 포기한 게 왜 이례적인가요?",
      a: "한국 사모 CB 시장에서 리픽싱(주가 하락 시 전환가 하향 조정)과 풋옵션(조기 상환 청구권)은 인수자에게 거의 표준으로 들어가는 보호 장치입니다. 둘 다 발행사에 부담이 큰 조건. KKR이 이 둘을 모두 포기한 것은 [\"우리는 단기 채권 수익을 노리는 게 아니라 삼성 그룹사와의 6년 장기 파트너십 자체에 가격을 매긴다\"]는 시그널입니다. 글로벌 메가 PE가 한국 자본시장에서 발행사 우위 구조를 수용한 매우 드문 사례.",
    },
    {
      q: "왜 KKR Asia Pacific Infrastructure Fund가 아닌 PE 부문(Asia Fund V)이 들어왔나요?",
      a: "KKR은 2024년 SK그룹과 AI 데이터센터 합작에 인프라 펀드로 소수지분 투자를 했고, 그 거래에서 SK 측이 [\"타 그룹 유사 사업 참여 금지\"] 조항을 부과했습니다. 삼성SDS의 AI/데이터센터 사업이 이 조항에 저촉돼 인프라 펀드가 본 거래에 못 들어왔고, 결과적으로 PE 부문 Asia Fund V가 단독 등판하게 됐습니다. KKR 내부 펀드 간 [경쟁 관계]가 본 거래 구조를 결정한 흥미로운 측면입니다.",
    },
    {
      q: "\"외부자금 1도 없는 거래\"라는 표현은 무슨 의미인가요?",
      a: "본 거래는 인수금융(LBO 부채)·신디케이션·외부 LP 추가 모집 등 [어떤 외부 자금 조달도 없이] KKR Asia Fund V의 펀드 자기자본 1.22조 원만으로 클로징됐습니다. 일반적으로 메가 PE의 1조+ 거래는 신디케이트 대출 + 공동투자 LP 등을 동원하는데, 본 거래는 KKR의 PE 드라이파우더 직접 투입. KKR의 자금 운용 여력 + 거래 규모에 비례하는 LBO 부채가 불필요한 [순수 자본 거래]임을 동시에 보여줍니다.",
    },
    {
      q: "6년 락업이 끝나면 어떤 시나리오가 가능한가요?",
      a: "세 가지 주요 시나리오: ① [주가 18만 원 초과 + KKR 전환 행사] — KKR이 약 8.06% 지분으로 삼성SDS 주주가 되며 차익 실현. ② [주가 18만 원 미달 + KKR 채권 회수] — 표면금리 2.5% 6년 누적 + 만기보장수익률로 원리금 회수. ③ [부분 전환·부분 회수] — 시장 상황 따라 분할 행사. KKR 입장에서는 어느 시나리오든 손실 위험은 제한적이고 업사이드만 열려 있는 비대칭 수익 구조 — 시장에서 [꽃놀이패]라 부르는 이유입니다.",
    },
    {
      q: "이 거래가 한국 자본시장에 어떤 의미를 남기나요?",
      a: "두 가지 의미가 큽니다. 첫째, [외국 메가 PE가 한국 그룹 IT 자회사의 6년 후 잠재 8% 주주가 되겠다고 선언한 첫 사례]. 향후 LG CNS·SK C&C·롯데정보통신 등 다른 그룹 IT 자회사가 유사 구조를 도입할 가능성이 큽니다. 둘째, [한국 사모 CB 시장의 발행사 우위 구조 정착] — 리픽싱·풋옵션 없는 정통 컨버터블이 글로벌 메가 PE를 상대로 통한다는 게 입증됐습니다. 향후 한국 발행사들의 협상력이 전반적으로 올라갈 가능성.",
    },
  ],
};

export default deal;
