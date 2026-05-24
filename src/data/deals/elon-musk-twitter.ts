/**
 * 일론 머스크 × 트위터 인수 (고프라이빗 LBO)
 * 테크 역대 최대 LBO — $440억, 2022년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "elon-musk-twitter",
  title: "일론 머스크는 왜 $440억에 트위터를 샀나 — 역대 최대 테크 LBO 완전 해부",
  subtitle: "강제 인수·봇 계정 분쟁·75% 감원 · X 리브랜딩 — 테크 역사상 가장 드라마틱한 고프라이빗 딜",
  category: "ma",
  industry: "소셜 미디어 / 테크",
  country: "미국",
  announcedAt: "2022-04-14",
  closedAt: "2022-10-27",
  announcedDisplay: "2022년 4월",
  closedDisplay: "2022년 10월",
  readingMinutes: 14,
  tags: ["Twitter", "X", "Elon Musk", "LBO", "go-private", "tech M&A", "social media", "테크LBO", "고프라이빗", "트위터"],
  excerpt:
    "일론 머스크가 트위터를 주당 $54.20, 총 기업가치 $440억(약 60조원)에 인수해 상장폐지한 역대 최대 테크 LBO. 인수 철회 시도·봇 계정 분쟁·법정 공방을 거쳐 2022년 10월 강제 완료. 인수 후 75% 감원, X 리브랜딩, 광고주 이탈, $80억 이상 연간 부채 서비스 부담이라는 극적인 후폭풍.",

  acquirer: { initials: "MUSK", bg: "bg-gray-900", label: "일론 머스크 / X Corp." },
  target: { initials: "TWTR", bg: "bg-sky-500", label: "트위터 Inc." },

  background: [
    "2022년 1월, 일론 머스크는 트위터를 활발히 사용하는 고객이자 비판자로서 트위터의 '표현의 자유' 제한 정책에 반복적으로 이의를 제기했다. 그는 서서히 트위터 주식을 매집하기 시작했고, 2022년 4월 4일 9.2% 지분을 보유했다고 공시하며 단번에 트위터 최대 주주로 부상했다. 공시 직후 트위터 이사회는 머스크에게 이사직을 제안했지만 머스크는 이를 거절했다.",
    "2022년 4월 14일, 머스크는 트위터 이사회에 주당 $54.20 전량 현금 인수 제안을 공개했다. 공시 전일 종가 대비 약 38%의 프리미엄이었다. 이사회는 초기 독약 조항(Poison Pill)을 발동해 방어에 나섰으나, 주주들의 압도적 지지와 자금 조달 확약서를 확인한 뒤 4월 25일 딜에 합의했다. 총 인수 가치는 부채 포함 약 $440억이었다.",
    "그러나 2022년 5월, 머스크는 '트위터의 스팸·봇 계정 비율이 신고치(5% 미만)를 크게 초과한다'는 이유로 딜 철회를 선언했다. 트위터는 허위 진술·계약 위반을 이유로 델라웨어 주 형평법원에 즉각 소송을 제기했다. 법원은 10월로 재판 일정을 잡았고, 강제 이행 판결 가능성이 높아지자 머스크는 2022년 10월 4일 원래 조건 그대로 인수를 완료하겠다는 서한을 제출했다.",
    "2022년 10월 27일, 머스크는 $440억을 납부하고 트위터를 상장폐지했다. 인수 당일 저녁 머스크는 싱크대를 들고 트위터 본사에 입장하는 영상을 올리며 'the bird is freed(새가 해방됐다)'라고 선언했다. 직후 CEO·CFO·CLO 등 경영진을 즉시 해고했다. 인수 후 수개월 내 약 7,500명(전체의 75%)을 감원했고, 트위터를 'X'로 리브랜딩했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$44B (약 60조원)",
    acquirerName: "일론 머스크 / X Holdings I, Inc.",
    targetName: "트위터 Inc. (Twitter, Inc.)",
    announcedDisplay: "2022년 4월",
    closedDisplay: "2022년 10월",
    country: "미국",
  },

  executiveSummary: [
    "역대 최대 테크 LBO — 주당 $54.20 전량 현금, EV $440억, 공시 전 주가 대비 38% 프리미엄",
    "레버리지드 바이아웃 구조 — 머스크 자기자본 $210억 + 공동투자자 $71억 + 은행 부채 $130억",
    "봇 계정 분쟁·딜 철회 시도 → 델라웨어 법원 소송 → 원래 조건 그대로 강제 완료",
    "인수 당일 최고경영진 해고, 6개월 내 전 직원의 75%(약 7,500명) 감원",
    "연간 약 $10억 이자 비용 포함 $80억 이상 부채 상환 부담 — 트위터의 실제 수익성을 훨씬 초과",
    "X 리브랜딩·광고주 이탈·유료 인증 도입 등 비즈니스 모델 대전환 시도 중",
  ],

  industryOverview: {
    body: "글로벌 소셜 미디어 광고 시장은 2022년 기준 약 $2,260억 규모로, 메타(Facebook·Instagram)와 구글(YouTube)이 60% 이상을 독점했다. 트위터는 실시간 공론장이라는 독보적 포지션을 갖고 있었으나 광고 매출 점유율은 약 2~3% 수준에 불과했다. MAU(월간 활성 이용자)는 2.38억 명으로 메타(28억 명)나 TikTok(10억 명) 대비 압도적으로 작았다. 플랫폼 성장 정체와 만성적인 수익화 어려움이 트위터의 구조적 약점이었다.",
    metrics: [
      { label: "글로벌 소셜 미디어 광고 시장", value: "약 $2,260억", sub: "2022년 기준" },
      { label: "트위터 시장 점유율", value: "약 2~3%", sub: "광고 매출 기준" },
      { label: "트위터 mDAU", value: "2.38억 명", sub: "2022년 Q1, 수익화 DAU" },
      { label: "트위터 연 매출", value: "$50.8억", sub: "FY2021 기준" },
    ],
    subBody: "소셜 미디어 시장은 알고리즘 피드, 숏폼 비디오(TikTok), 광고 타겟팅 고도화가 급성장 동력이었다. 트위터는 이 트렌드에 상대적으로 뒤처졌고, 반복적인 경영진 교체와 전략 혼선으로 플랫폼 혁신이 지연됐다. 광고주들에게 트위터는 '브랜드 안전(Brand Safety)' 리스크가 높은 플랫폼으로 인식되기 시작했다.",
    players: [
      { name: "메타 (Meta Platforms)", role: "Facebook·Instagram·WhatsApp 운영, 글로벌 소셜 광고 1위" },
      { name: "알파벳 (Google/YouTube)", role: "유튜브·검색 광고, 소셜+검색 통합 광고 플랫폼" },
      { name: "TikTok (ByteDance)", role: "숏폼 비디오 급성장, MZ세대 최대 플랫폼" },
      { name: "스냅챗 (Snap)", role: "Z세대 중심 메신저+AR, 트위터와 유사한 규모의 어려움 직면" },
    ],
  },

  companyOverview: {
    targetName: "트위터 Inc. (Twitter, Inc.)",
    body: "트위터는 2006년 잭 도시(Jack Dorsey)가 창업한 실시간 마이크로블로깅 플랫폼이다. 2013년 NYSE 상장 후 정치·언론·연예계의 공론장으로 자리잡았으나, 만성적인 수익화 문제와 반복되는 CEO 교체(잭 도시→딕 코스톨로→잭 도시 복귀→파라그 아그라왈)로 성장 정체를 겪었다. 광고 수익 의존도가 89%에 달해 경기 변동에 취약했고, 사용자 증가 속도도 경쟁사 대비 크게 뒤처졌다. 2021년 기준 EBITDA $6.1억으로 인수가 기준 EV/EBITDA는 약 72배에 달했다.",
    metrics: [
      { label: "연 매출 (FY2021)", value: "$50.8억", sub: "광고 89%, 데이터 라이선스 11%" },
      { label: "EBITDA (FY2021)", value: "$6.1억", sub: "EV/EBITDA 약 72x" },
      { label: "mDAU", value: "2.17억 명", sub: "FY2021 기준 수익화 일간활성이용자" },
      { label: "EV / 매출", value: "약 26.8x", sub: "FY2021 기준" },
      { label: "종업원 수", value: "약 7,500명", sub: "인수 직전 기준" },
    ],
    revenueBreakdown: [
      { name: "광고", pct: 89, color: "bg-sky-500", amt: "약 $45.1억" },
      { name: "데이터 라이선스", pct: 11, color: "bg-slate-500", amt: "약 $5.7억" },
    ],
    revenueNote: "FY2021 기준. 트위터 연간 공시(Form 10-K) 기반.",
    financials: [
      { year: "FY2019", revenue: 3459, cogs: 1393, grossProfit: 2066, sga: 2100, operatingIncome: -34, ebitda: 320 },
      { year: "FY2020", revenue: 3716, cogs: 1444, grossProfit: 2272, sga: 2100, operatingIncome: -1136, ebitda: 430 },
      { year: "FY2021", revenue: 5077, cogs: 2073, grossProfit: 3004, sga: 2920, operatingIncome: -493, ebitda: 611 },
    ],
    financialsNote: "단위: USD 백만(M). 트위터 연간 실적 공시 기준. FY는 12월 결산. EBITDA는 조정 기준 추정치.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "이 딜은 전형적인 레버리지드 바이아웃(LBO) 구조로 설계됐다. 머스크가 설립한 특수목적법인(SPV) X Holdings I, Inc.가 트위터를 흡수합병하는 방식이었다. 총 $440억 인수 대금의 재원은 ① 머스크 개인 자기자본 약 $210억(테슬라 주식 담보 포함), ② 바이낸스·세쿼이아 등 공동투자자 자기자본 약 $71억, ③ 모건스탠리가 주선한 은행 신디케이트론 $130억(Term Loan $65억 + 리볼빙 $30억 + 담보부대출)으로 조달됐다. 인수 후 $130억 규모 부채가 트위터에 전가됐으며, 연간 이자 비용은 약 $10억 이상으로 추산된다.",
    preOwnership: {
      nodes: [
        { id: "twtr_public", label: "트위터 Inc.", sub: "NYSE 상장 (TWTR)", type: "public" },
        { id: "institutional", label: "기관 투자자", sub: "뱅가드·블랙록 등", type: "entity" },
        { id: "dorsey", label: "잭 도시 외 내부자", sub: "창업자·임원 지분", type: "entity" },
      ],
      edges: [
        { from: "institutional", to: "twtr_public", label: "~80%" },
        { from: "dorsey", to: "twtr_public", label: "~2.3%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "musk", label: "일론 머스크", sub: "개인 및 공동투자자단", type: "acquirer" },
        { id: "x_holdings", label: "X Holdings I", sub: "인수 특수목적법인(SPV)", type: "entity" },
        { id: "x_corp", label: "X Corp. (구 트위터)", sub: "상장폐지 완전 자회사", type: "target" },
        { id: "co_investors", label: "공동투자자", sub: "바이낸스·세쿼이아 등", type: "fund" },
      ],
      edges: [
        { from: "musk", to: "x_holdings", label: "과반 통제" },
        { from: "co_investors", to: "x_holdings", label: "$71억 출자" },
        { from: "x_holdings", to: "x_corp", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "$44B (약 60조원)", accent: true },
      { label: "인수 주가", value: "주당 $54.20 (전량 현금)", accent: false },
      { label: "인수 프리미엄", value: "약 38% (공시 전 종가 대비)", accent: true },
      { label: "거래 형태", value: "LBO / 고프라이빗 합병 (All-Cash Go-Private)", accent: false },
      { label: "EV / EBITDA", value: "약 72x (FY2021 기준)", accent: true },
      { label: "EV / 매출", value: "약 26.8x (FY2021 기준)", accent: false },
      { label: "부채 조달", value: "$130억 (모건스탠리 주선 신디케이트)", accent: false },
      { label: "해약금 조항", value: "양측 각각 $10억 (해약금 동등 구조)", accent: false },
    ],
  },

  advisors: {
    body: "머스크 측은 월가 최대 IB 모건스탠리가 재무 자문과 부채 조달을 모두 책임졌다. 트위터 이사회는 골드만삭스·JP모건의 공정의견(Fairness Opinion)을 받아 주당 $54.20이 주주에게 공정한 가격임을 확인했다. 법률 측면에서는 스캐든 알프스(머스크)와 윌슨 손시니(트위터)가 맞섰고, 봇 계정 분쟁 단계에서는 델라웨어 법원 형평법 소송 전문팀이 추가 투입됐다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (일론 머스크)",
        initials: "MUSK",
        bg: "bg-gray-900",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 / 부채 주선 (FA & Debt Lead)", roleType: "financial", note: "딜 구조 설계·가격 산정·$130억 신디케이트 조달 총괄" },
          { firm: "Barclays", role: "재무 자문 / 공동 부채 주선", roleType: "financial", note: "부채 조달 공동 주선, 딜 자문 지원" },
          { firm: "Skadden, Arps, Slate, Meagher & Flom", role: "법률 자문 (M&A)", roleType: "legal", note: "인수 계약 협상·합병 구조 설계 총괄" },
          { firm: "Quinn Emanuel Urquhart & Sullivan", role: "소송 자문", roleType: "legal", note: "봇 계정 분쟁 및 델라웨어 소송 대응 전담" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (트위터 이사회)",
        initials: "TWTR",
        bg: "bg-sky-500",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA) / 공정의견", roleType: "financial", note: "트위터 이사회 재무 자문 및 주당 $54.20 공정의견 제공" },
          { firm: "JP Morgan", role: "재무 자문 (FA) / 공정의견", roleType: "financial", note: "공동 재무 자문 및 독립 공정의견 제공" },
          { firm: "Wilson Sonsini Goodrich & Rosati", role: "법률 자문 (M&A)", roleType: "legal", note: "합병 계약 협상 및 이사회 법률 자문 총괄" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "독약 조항 및 소송 자문", roleType: "legal", note: "머스크 딜 철회 시도 대응·강제 이행 소송 주도" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도, SEC 공시 및 법원 기록 기반입니다.",
  },

  valuation: {
    body: "머스크가 지불한 $440억은 트위터 FY2021 매출($50.8억)의 약 26.8배, EBITDA($6.1억)의 약 72배에 해당한다. 이는 동기간 메타(EV/EBITDA ~12x), 스냅(EV/EBITDA ~35x) 등 소셜 미디어 피어 대비 현저히 높은 수준이었다. 트위터의 독보적인 공론장 포지션과 '표현의 자유' 플랫폼 전환 시너지에 대한 통제권 프리미엄이 반영됐으나, 실제 수익 창출력 대비 극도로 높은 멀티플이라는 비판이 지배적이었다. 딜 완료 후 일부 은행이 $130억 부채를 시장에 매각하지 못하고 장부에 그대로 떠안게 됐다.",
    rows: [
      { item: "딜 EV", val: "$44B", note: "부채 $130억 포함 총 기업가치 기준", accent: true },
      { item: "매출 멀티플 (EV/Revenue)", val: "26.8x", note: "FY2021 매출 $5.1B 기준" },
      { item: "EBITDA 멀티플 (EV/EBITDA)", val: "약 72x", note: "FY2021 조정 EBITDA $611M 기준", accent: true },
      { item: "피어 대비 프리미엄", val: "~2–6x 고평가", note: "메타 12x, 스냅 35x 대비 현저히 높음" },
      { item: "인수 프리미엄 (무교란 주가 대비)", val: "38%", note: "4월 1일 이전 '무교란(undisturbed)' 주가 기준", accent: true },
      { item: "부채/EBITDA", val: "약 21x", note: "$130억 부채 / $611M EBITDA — 극도로 높은 레버리지" },
    ],
    disclaimer: "밸류에이션 수치는 SEC 공시, 트위터 연간보고서, 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "머스크 인수 논리",
      initials: "MUSK",
      bg: "bg-gray-900",
      points: [
        "표현의 자유 플랫폼 구축 — 기존 트위터의 콘텐츠 검열 정책을 전면 재편, '디지털 공론장' 재정의",
        "X 수퍼앱 비전 — 소셜 미디어에서 결제·금융·비디오·뉴스를 통합하는 WeChat식 수퍼앱 전환 야망",
        "구독 수익 다변화 — 광고 의존도 89%에서 구독(X Premium/Blue)·데이터 API·인증 수수료로 수익 구조 재편",
        "정치적·사회적 영향력 — 세계 최대 공론장을 통제함으로써 여론 형성·선거·정책에 미치는 영향력 극대화",
        "AI 데이터 자산 — 16년치 공개 대화 데이터를 xAI(Grok) 학습에 활용 가능한 독점 데이터셋으로 재평가",
      ],
    },
    seller: {
      title: "트위터 이사회 매각 논리",
      initials: "TWTR",
      bg: "bg-sky-500",
      points: [
        "38% 프리미엄 실현 — 만성 수익화 정체 속 주주 가치 극대화를 위한 현금 프리미엄 수용",
        "성장 전략 한계 인정 — 독립 상장사로서 MAU 성장과 수익성 개선을 동시에 달성하기 어려운 구조적 한계",
        "주주 압박 — 헤지펀드·행동주의 투자자들의 지속적 경영 압박 속에서 프리미엄 매각이 최선",
        "경영진 교체 피로감 — 잦은 CEO 교체(도시→코스톨로→도시→아그라왈)로 장기 전략 수립 어려움 해소",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "인수 후 X(구 트위터)는 극적인 변화를 겪었다. 75% 감원(약 7,500명) 이후에도 서비스가 유지됐지만, 광고주들은 콘텐츠 안전 우려를 들어 대거 이탈했다. 2022년 4분기 광고 수익은 전년 동기 대비 약 40% 급감했다. 머스크는 유료 구독 'X Premium(구 Twitter Blue)', 계정 인증 유료화, 데이터 API 유료화, 영상 광고 확대 등으로 수익 다변화를 시도했다. 그러나 $130억 부채에 따른 연간 약 $10억 이상의 이자 비용은 트위터의 실제 EBITDA 창출 능력($6~7억 수준)을 훨씬 초과하는 재정 압박 요인이다. 플랫폼 일간 활성 이용자는 일부 데이터에서 증가세를 보였으나 광고 단가 하락과 광고주 이탈로 매출 회복은 더딘 상황이다.",
    overallVerdict: "재무적으로 극도로 위험한 구조 (장기 생존 위해 수익화 혁신 필수)",
    positives: [
      "대규모 감원에도 서비스 안정 유지 — 과도한 운영 비용 구조가 개선됐음을 실증",
      "X Premium 구독 도입 — 광고 단독 의존에서 구독 수익 포함 다원화 모델로 전환 시작",
      "콘텐츠 정책 자유화로 복귀 이용자 유입 — 일부 정치·언론 이용자층의 재활성화",
      "xAI(Grok) 연계 — X의 실시간 데이터를 AI 학습에 활용, 머스크 생태계 내 시너지 창출",
      "비디오·음성 기능 확장 — Twitter Spaces, X TV 등으로 플랫폼 기능 다각화 시도",
    ],
    risks: [
      "광고 수익 급락 — 인수 직후 분기 광고 매출 40% 급감, 주요 브랜드 광고주 이탈 지속",
      "$130억 부채 서비스 부담 — 연 이자 비용 $10억 이상이 EBITDA를 초과, 구조적 현금 흐름 적자 위험",
      "브랜드 안전 이슈 — 콘텐츠 관리 약화로 혐오 발언·오정보 확산 우려, 광고주 신뢰 손상",
      "경쟁 심화 — Meta Threads의 급성장, Bluesky 출범 등 대안 플랫폼으로 사용자 분산",
      "핵심 인재 이탈 — 강제 해고 및 문화 충격으로 엔지니어링·제품 역량 약화 우려",
      "규제 리스크 — EU DSA(디지털서비스법) 위반 조사, 미국·유럽 콘텐츠 규제 강화 압박",
    ],
    editorNote: "일론 머스크의 트위터 인수는 순수 재무 논리로는 설명하기 어려운 딜이다. EV/EBITDA 72배라는 멀티플과 $130억 레버리지는 전통적 LBO 기준으로 정당화하기 힘들다. 머스크의 진짜 배팅은 X를 수퍼앱으로 전환하거나, 최소한 공론장 통제권의 정치·사회적 가치를 화폐 환산할 수 없는 방식으로 누리는 것이다. 이 딜은 테크 산업에서 '창업자 경제(Founder Economy)'가 전통적 재무 이론을 어떻게 뛰어넘는지를 보여주는 가장 극적인 사례다.",
  },

  tombstone: {
    acquirerInitials: "MUSK",
    acquirerBg: "bg-gray-900",
    targetInitials: "X",
    targetBg: "bg-sky-500",
    acquirerName: "Elon Musk / X Holdings I, Inc.",
    targetName: "Twitter, Inc.",
    dealTitle: "고프라이빗 LBO 합병 (All-Cash Go-Private LBO)",
    dealSize: "$44B",
    dealSizeUSD: "USD 44bn (약 60조원)",
    evEbitda: "72x",
    closeDate: "2022년 10월",
  },

  sources: [
    { id: 1, text: "Twitter, Inc. — Schedule 14A Proxy Statement (2022.06)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TWTR" },
    { id: 2, text: "Twitter, Inc. — Form 8-K: Merger Agreement with X Holdings I (2022.04.25)", url: "https://www.sec.gov" },
    { id: 3, text: "Delaware Court of Chancery — Twitter, Inc. v. Elon R. Musk et al., C.A. No. 2022-0613-KSJM (2022)", url: "https://courts.delaware.gov" },
    { id: 4, text: "Twitter, Inc. — Annual Report Form 10-K FY2021", url: "https://investor.twitterinc.com" },
    { id: 5, text: "New York Times — Elon Musk Completes $44 Billion Acquisition of Twitter (October 27, 2022)" },
    { id: 6, text: "Wall Street Journal — Twitter's Banks Are Stuck With $13 Billion of Debt From Musk Deal (2022.11)" },
    { id: 7, text: "Reuters — Musk's Twitter takeover: Timeline of the $44 billion deal (2022)" },
  ],

  seo: {
    title: "일론 머스크 트위터 인수 완전 분석 — $440억 LBO와 X 리브랜딩",
    description: "일론 머스크의 트위터 $440억 인수 완전 분석. LBO 재원 구조, 봇 계정 법정 분쟁, 75% 감원, X 리브랜딩, 부채 서비스 부담까지 테크 역사상 가장 드라마틱한 고프라이빗 딜을 심층 해부.",
    keywords: [
      "일론 머스크 트위터 인수",
      "트위터 X 리브랜딩",
      "테크 LBO 분석",
      "고프라이빗 딜",
      "Twitter 상장폐지",
      "머스크 440억 딜",
      "트위터 봇 계정 분쟁",
      "소셜 미디어 M&A",
      "EV EBITDA 소셜미디어",
      "레버리지드 바이아웃 테크",
      "X Corp 분석",
    ],
  },

  concepts: [
    {
      term: "레버리지드 바이아웃 (LBO)",
      href: "/learn/lbo",
      description: "인수 자금의 상당 부분을 차입(부채)으로 조달하고, 인수 후 대상 기업의 현금흐름으로 부채를 상환하는 인수 방식. 이 딜에서는 $440억 중 $130억을 은행 부채로 조달했다.",
    },
    {
      term: "고프라이빗 (Go-Private)",
      href: "/learn/go-private",
      description: "상장 기업을 인수해 주식 시장에서 상장폐지(비공개)하는 거래. 공개 주주 보고 의무 없이 장기적 구조 개편이 가능하다. 트위터는 NYSE에서 상장폐지 후 완전 비공개 회사가 됐다.",
    },
    {
      term: "MAE 조항 (중대한 부정적 변경)",
      href: "/learn/mae-clause",
      description: "M&A 계약에서 딜 완료 전 대상 기업에 중대한 부정적 변화가 발생할 경우 인수자가 계약을 파기할 수 있도록 하는 조항. 머스크는 봇 계정 문제를 MAE로 주장했으나 법원은 인정하지 않았다.",
    },
    {
      term: "독약 조항 (Poison Pill)",
      href: "/learn/poison-pill",
      description: "적대적 인수자가 일정 비율(보통 10~15%) 이상 주식을 취득하면 기존 주주들이 할인된 가격에 신주를 매입할 수 있게 하는 방어 전략. 트위터 이사회는 머스크의 공개 제안에 독약 조항을 발동했다.",
    },
    {
      term: "부채 서비스 (Debt Service)",
      href: "/learn/debt-service",
      description: "기업이 부채(원금+이자)를 상환하기 위해 지출해야 하는 현금 흐름. 트위터의 $130억 부채는 연간 약 $10억 이상의 이자를 발생시켜 운영 현금흐름에 극심한 압박을 가하고 있다.",
    },
    {
      term: "공정의견 (Fairness Opinion)",
      href: "/learn/fairness-opinion",
      description: "M&A 거래에서 독립 투자은행이 인수 가격이 주주에게 재무적으로 공정한지 여부를 평가해 이사회에 제출하는 의견서. 트위터 이사회는 골드만삭스·JP모건으로부터 주당 $54.20에 대한 공정의견을 받았다.",
    },
  ],

  faq: [
    {
      q: "머스크는 왜 인수를 시도했다가 철회하려 했나요?",
      a: "머스크는 2022년 5월 '트위터의 스팸·봇 계정 비율이 공시된 5% 미만을 크게 상회한다'며 딜 철회 의사를 밝혔습니다. 실제로는 딜 발표 이후 테슬라 주가가 급락하면서 담보 자산 가치가 줄어든 재정적 부담과, 발표 시점에 비해 소셜 미디어 섹터 전반의 밸류에이션이 하락한 점도 철회 동기로 분석됩니다. 트위터가 즉각 소송을 제기했고, 델라웨어 법원이 강제 이행 판결을 내릴 가능성이 높아지자 머스크는 원래 조건대로 인수를 완료했습니다.",
    },
    {
      q: "트위터 LBO의 부채 구조는 어떻게 됐나요?",
      a: "모건스탠리가 주선한 $130억 부채는 담보부 Term Loan $65억, 무담보 Term Loan, 리볼빙 크레딧 등으로 구성됐습니다. 통상적인 LBO에서는 주선 은행이 기관투자자에게 이 채권을 재판매(신디케이션)하지만, 인수 후 광고 수익 급감과 높은 재무 위험으로 인해 은행들이 투자자를 찾지 못해 $130억 중 상당 부분을 자체 장부에 그대로 보유하게 됐습니다. '어렵게 팔린(hung deal)' 부채로서 은행들에게도 큰 손실 위험이 됐습니다.",
    },
    {
      q: "인수 후 트위터(X)의 광고 수익은 왜 급감했나요?",
      a: "머스크 인수 직후 콘텐츠 정책 완화, 광고 안전팀 대규모 감원, 정치적 발언 급증 등으로 브랜드 안전(Brand Safety) 우려가 높아졌습니다. 애플·GM·아이피지(IPG) 미디어 그룹 등 대형 광고주들이 광고를 일시 중단했고, 2022년 4분기 광고 매출은 전년 동기 대비 약 40% 이상 감소한 것으로 추정됩니다. 머스크 자신도 '광고주 이탈이 최대 위협'이라고 인정한 바 있습니다.",
    },
    {
      q: "X 리브랜딩은 왜 했나요? 성공했나요?",
      a: "머스크는 트위터를 단순 소셜 미디어가 아닌 결제·금융·소통을 통합한 '수퍼앱(Super App)'으로 전환하려는 장기 비전을 갖고 있습니다. 중국의 WeChat처럼 앱 하나로 모든 디지털 서비스를 이용하는 모델입니다. X로의 리브랜딩은 이 전환을 상징하지만, 트위터라는 15년 이상 축적된 브랜드 가치를 포기한다는 비판도 큽니다. 수퍼앱 전환은 2024년 기준 아직 진행 중이며, 결제 기능(X Money) 도입 등 초기 단계에 있습니다.",
    },
    {
      q: "이 딜은 역사상 가장 비싼 인수 중 하나였나요?",
      a: "금액 기준으로는 $440억으로 대형 딜이지만 역대 최대는 아닙니다. 그러나 매출 대비 멀티플(26.8x), EBITDA 대비 멀티플(72x) 기준으로는 대형 테크 LBO 중 가장 높은 수준에 속합니다. 특히 LBO로서 이 수준의 EBITDA 멀티플은 전례가 드물며, 차입 레버리지(부채/EBITDA ~21x)도 업계 통상 기준(5~7x)을 크게 벗어납니다. 이 딜이 '역대 최대 테크 LBO'로 불리는 이유는 금액 절대치보다 이 극단적 밸류에이션 때문입니다.",
    },
  ],
};

export default deal;
