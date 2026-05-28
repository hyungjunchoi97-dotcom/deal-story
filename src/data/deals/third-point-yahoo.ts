/**
 * Third Point × Yahoo 행동주의 캠페인 (2012)
 * 다니엘 로브의 CEO 이력서 사기 발굴 — 130일 만에 CEO를 쫓아낸 역사적 캠페인
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "third-point-yahoo",
  title: "Third Point × Yahoo — CEO 이력서 사기를 발굴해 130일 만에 퇴진시킨 행동주의 캠페인",
  subtitle: "스콧 톰슨 컴퓨터공학 학위 허위 기재 발굴 · 이사회 3석 확보 · 마리사 마이어 영입 · 알리바바 지분 가치 해방",
  category: "activism",
  industry: "인터넷·미디어 / Internet & Media",
  country: "미국",
  announcedAt: "2012-02-14",
  closedAt: "2012-07-16",
  announcedDisplay: "2012년 2월",
  closedDisplay: "2012년 7월",
  readingMinutes: 11,
  tags: [
    "서드포인트",
    "다니엘 로브",
    "야후",
    "행동주의",
    "이력서 사기",
    "스콧 톰슨",
    "마리사 마이어",
    "알리바바 지분",
    "CEO 교체",
    "이사회 장악",
  ],
  excerpt:
    "다니엘 로브(Third Point LLC)가 야후 지분 약 5.8%($1B)를 매집하고 이사회 4인 후보를 지명한 뒤, 심층 리서치를 통해 CEO 스콧 톰슨의 학력 허위 기재(컴퓨터공학 학위 거짓 주장)를 공개적으로 폭로했다. 폭로 즉시 야후 감사위원회가 사실을 인정했고, 취임 130일 만에 톰슨이 사임했다. Third Point는 이사회 3석을 획득하고, 로브가 직접 이사회에 입성해 구글 출신 마리사 마이어 CEO 영입에 결정적 역할을 했다. 이 캠페인은 '정보 기반 행동주의(Information-Based Activism)'의 교과서로 불린다.",

  acquirer: { initials: "3P", bg: "bg-slate-700", label: "Third Point LLC (Dan Loeb)" },
  target: { initials: "YHOO", bg: "bg-violet-700", label: "Yahoo! Inc. (YHOO)" },

  background: [
    "2008년 마이크로소프트의 $446억 인수 제안을 거절한 야후는 이후 급속히 표류했다. 제리 양 공동창업자가 CEO 자리를 물러난 후 캐럴 바츠가 CEO를 맡았지만 2011년 9월 이사회로부터 전화 통보로 해고됐다. 임시 CEO인 팀 모스가 자리를 지키다 2012년 1월 스콧 톰슨이 페이팔 출신으로 야후 CEO에 취임했다. 불과 4년 사이 세 번의 CEO 교체, 구글·페이스북에 광고 시장 점유율을 빠르게 빼앗기는 상황, 그리고 핵심 전략 자산인 알리바바·야후재팬 지분의 가치를 주주에게 제대로 환원하지 못하는 구조적 문제가 쌓여 있었다.",
    "2012년 2월 14일, Third Point LLC의 다니엘 로브는 야후 지분 약 5.8%($1B 규모)를 보유하고 있음을 SEC 13D 공시를 통해 밝히며 이사회에 4인의 이사 후보(로브 포함)를 지명했다. 로브의 핵심 논거는 명쾌했다. 야후의 알리바바 지분(약 40%)과 야후재팬 지분(약 35%·소프트뱅크와 공동 보유)의 가치만 합산해도 당시 야후 시총과 맞먹거나 초과한다는 것이었다. 즉 야후의 핵심 인터넷 사업은 사실상 '공짜'로 거래되고 있는 심각한 저평가 상태였다.",
    "캠페인의 결정적 반전은 2012년 5월에 터졌다. Third Point의 조사팀이 스콧 톰슨 CEO의 공식 이력서와 야후의 SEC 제출 문서를 면밀히 검토하던 중, 톰슨이 스톤힐 칼리지(Stonehill College)에서 컴퓨터공학과 회계학 두 전공을 이수했다고 기재한 반면 실제로는 회계학 학위만 취득했다는 사실을 발견했다. 스톤힐 칼리지가 1979년 톰슨 졸업 당시에는 컴퓨터공학 전공 자체가 존재하지 않았다는 결정적 증거까지 확인했다.",
    "2012년 5월 3일, Third Point은 이 허위 사실을 정리한 문서를 SEC에 제출하고 야후 이사회에 즉각적인 조사를 요구했다. 야후 이사회는 처음에는 '사소한 오류'로 일축하려 했지만, 10일 뒤인 5월 13일 감사위원회 조사 결과 학력 기재 오류가 사실임을 공식 인정했다. 바로 그날 스콧 톰슨은 CEO직을 사임했다. 취임 130일 만이었다.",
    "이후 협상을 통해 야후와 Third Point은 합의에 도달했다. Third Point은 이사회 3석(로브 본인 포함)을 확보했다. 이사회 멤버가 된 로브는 2012년 7월 신임 CEO 선임에 직접 관여해 구글 부사장 출신의 마리사 마이어를 야후 CEO로 영입하는 데 결정적 역할을 했다. 마이어 영입 발표 후 야후 주가는 즉각 급등했다.",
    "Third Point의 장기 전략은 알리바바 지분 가치 실현이었다. 2013년까지 야후는 알리바바 지분 일부를 매각하며 $30억 이상의 자사주매입을 실시했다. 로브는 2013년 야후 지분을 누적 약 $24억 수익을 실현하고 대부분 매각했다. 행동주의 역사상 가장 극적인 캠페인 중 하나로 기록됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "지분 약 $1B (야후 5.8%)",
    acquirerName: "Third Point LLC (Dan Loeb)",
    targetName: "Yahoo! Inc.",
    announcedDisplay: "2012년 2월",
    closedDisplay: "2012년 7월",
    country: "미국",
  },

  executiveSummary: [
    "2012년 2월 14일: Third Point, 야후 지분 5.8%($1B) SEC 공시 + 이사회 4인 후보 지명",
    "핵심 논거: 알리바바·야후재팬 지분 가치 합산 = 야후 시총 초과 → 핵심 사업 사실상 '공짜'",
    "2012년 5월 3일: Third Point, SEC 공시 통해 CEO 스콧 톰슨 컴퓨터공학 학위 허위 기재 공개 폭로",
    "2012년 5월 13일: 야후 감사위원회 오류 공식 인정, 당일 톰슨 사임 — 취임 130일 만",
    "합의 결과: Third Point 이사회 3석 확보, 로브 본인 이사회 직접 입성",
    "2012년 7월: 로브의 주도하에 구글 부사장 마리사 마이어를 야후 신임 CEO로 영입",
    "2013년: 야후 알리바바 지분 부분 매각·$3B+ 자사주매입, Third Point 지분 매각 — 누적 ~$2.4B 수익 실현",
  ],

  industryOverview: {
    body: "2012년 미국 인터넷 산업은 구글과 페이스북이 광고 시장을 지배하며 급격히 재편되던 시기였다. 배너 광고와 검색 광고 시장에서 야후는 전성기를 지나 하락 국면에 접어들었다. 반면 모바일 인터넷의 폭발적 성장과 함께 중국 전자상거래 시장의 알리바바는 아직 IPO 전이었지만 그 가치가 천문학적으로 불어나고 있었다. 야후는 2005년 알리바바 지분 약 40%를 $10억에 취득한 바 있어, 이 숨겨진 자산 가치를 어떻게 실현하느냐가 야후 주주의 최대 관심사였다.",
    metrics: [
      { label: "야후 시가총액 (2012년 초)", value: "약 $190억", sub: "알리바바·야후재팬 지분 가치 포함" },
      { label: "알리바바 지분 (야후 보유)", value: "약 40%", sub: "당시 추정 가치 $80~100억, 2014년 IPO 시 $300억+" },
      { label: "야후재팬 지분", value: "약 35%", sub: "소프트뱅크와 공동 보유" },
      { label: "야후 핵심 사업 암묵적 가치", value: "사실상 0~마이너스", sub: "지분 가치만으로 시총 설명 가능" },
    ],
    subBody: "행동주의 투자자들이 인터넷 기업에 주목하기 시작한 것은 2010년대 초반부터다. 표류하는 인터넷 1세대 기업들이 IPO 이전의 고성장 자산(알리바바 등)을 제대로 활용하지 못하고 있었다. 야후 사례는 '숨겨진 자산'과 '경영 부재'가 동시에 존재할 때 행동주의가 어떻게 가치를 극대화하는지를 보여주는 전형적인 사례다.",
    players: [
      { name: "Third Point LLC (Dan Loeb)", role: "행동주의 헤지펀드, 캠페인 주도" },
      { name: "Yahoo! Inc. (스콧 톰슨 → 마리사 마이어)", role: "캠페인 타겟, CEO 교체 및 전략 재편" },
      { name: "알리바바 그룹 (잭 마)", role: "야후 지분 40% 보유 피투자사 — 핵심 숨겨진 가치" },
      { name: "소프트뱅크 (손정의)", role: "야후재팬 공동 대주주 (~35%), 안정적 우호 세력" },
      { name: "스톤힐 칼리지 (Stonehill College)", role: "톰슨 학력 허위 기재 핵심 증거 학교" },
    ],
  },

  companyOverview: {
    targetName: "Yahoo! Inc.",
    body: "야후(Yahoo! Inc.)는 1995년 제리 양과 데이비드 파일로가 스탠퍼드 대학원 시절 창업한 인터넷 포털 기업이다. 1990년대 후반~2000년대 초반 인터넷 광고·이메일·검색의 대명사였으나, 구글의 부상과 함께 핵심 사업 경쟁력을 잃어갔다. 2008년 마이크로소프트의 $446억 인수 제안을 거절한 것은 회사 역사상 최악의 의사결정 중 하나로 기록된다. 반면 2005년 알리바바 지분 약 40%를 $10억에 취득한 것은 최고의 투자 의사결정이었다. 2012년 시점에서 야후의 핵심 가치는 알리바바·야후재팬 지분이라는 아이러니한 상황이었다. 검색은 마이크로소프트 빙(Bing)에 아웃소싱하고 있었고, 사용자와 광고주 모두 구글·페이스북으로 떠나고 있었다.",
    metrics: [
      { label: "매출 (FY2011)", value: "$49.8억", sub: "전년 대비 정체 수준" },
      { label: "알리바바 지분 보유율", value: "약 40%", sub: "2012년 추정 가치 $80~100억, 2014년 $300억+" },
      { label: "야후재팬 지분 보유율", value: "약 35%", sub: "소프트뱅크와 공동 보유" },
      { label: "월 순방문자 (MAU, 2012년)", value: "약 7억 명", sub: "아직 상당한 트래픽 자산 보유" },
      { label: "직원 수 (2012년)", value: "약 14,000명", sub: "이후 구조조정 단행" },
      { label: "2008년 MS 인수 거절가", value: "$446억", sub: "2012년 시총 $190억 — 기회비용 막대" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue: 4984,
        cogs: 1558,
        grossProfit: 3426,
        sga: 2890,
        operatingIncome: 536,
        ebitda: 1020,
      },
      {
        year: "FY2012",
        revenue: 4987,
        cogs: 1552,
        grossProfit: 3435,
        sga: 2980,
        operatingIncome: 455,
        ebitda: 890,
      },
      {
        year: "FY2013",
        revenue: 4680,
        cogs: 1476,
        grossProfit: 3204,
        sga: 2750,
        operatingIncome: 454,
        ebitda: 880,
      },
    ],
    financialsNote: "단위: $M (백만 달러). Yahoo! 공시 기준. 핵심 인터넷 사업 수익성은 정체 또는 하락 추세. EBITDA는 알리바바 지분 손익 미반영.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  governanceOverview: {
    body: "2012년 야후의 지배구조는 사실상 공백 상태였다. 지배주주가 없는 완전 분산 소유 구조에서 4년간 세 번의 CEO가 교체됐다. 이사회는 전문성과 독립성 모두 의심받았고, 일부 사외이사들도 허위 학력 문제가 있다는 사실이 이후 밝혀졌다. Third Point의 캠페인은 단순한 행동주의를 넘어, 기업 공시 신뢰도와 이사회 책임이라는 지배구조의 근본을 흔든 사건이었다. 로브는 이사회에 직접 진입하는 전략을 택해 내부에서 CEO 선임까지 직접 주도했다.",
    shareholders: [
      {
        id: "third_point",
        label: "Third Point LLC (Dan Loeb)",
        sub: "행동주의 헤지펀드, 캠페인 주도",
        stake: "5.8%",
        stakePct: 5.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "softbank",
        label: "소프트뱅크 (손정의)",
        sub: "야후재팬 공동 대주주 (~35%), 안정적 우호 세력",
        stake: "약 35%",
        stakePct: 35,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "capital_research",
        label: "Capital Research & Management",
        sub: "대형 기관투자자",
        stake: "약 7%",
        stakePct: 7,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "management",
        label: "경영진 및 임직원",
        sub: "스톡옵션·RSU 보유",
        stake: "약 3%",
        stakePct: 3,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "일반 공개 주주",
        sub: "개인 및 소형 기관",
        stake: "약 49%",
        stakePct: 49,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 11,
      independent: 8,
      affiliated: 3,
      note: "2012년 초 야후 이사회는 11인 구성. Third Point 합의 이후 로브 포함 3인이 이사회에 진입. 일부 기존 이사들도 학력 허위 기재 논란에 휘말려 이사회 전반의 신뢰도가 흔들렸다.",
    },
    issues: [
      {
        title: "CEO 이력서 허위 기재 (Résumé Fraud)",
        description: "스콧 톰슨 CEO가 스톤힐 칼리지 컴퓨터공학 학위를 허위 기재. 1979년 졸업 당시 해당 전공은 존재하지 않았음. SEC 제출 공시에도 동일한 허위 정보가 수록돼 증권법 위반 소지. 취임 130일 만에 사임 유발.",
        severity: "critical",
      },
      {
        title: "연속적 CEO 실패와 전략 부재",
        description: "2008년 이후 4년간 세 번의 CEO 교체. 마이크로소프트 $446억 인수 거절 이후 대안 전략 없이 표류. 검색·광고 핵심 경쟁력 상실. 알리바바·야후재팬 지분이라는 거대한 자산을 보유하면서도 이를 주주 가치로 환원하지 못하는 구조 지속.",
        severity: "critical",
      },
      {
        title: "숨겨진 자산 가치 미실현 (Hidden Asset Problem)",
        description: "알리바바 지분 40%·야후재팬 지분 35%의 합산 가치가 야후 시총과 맞먹거나 초과함에도 불구하고 핵심 인터넷 사업 대비 과소평가. 자산 매각·구조조정을 통한 가치 실현 계획 부재.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "CEO 스콧 톰슨 퇴진",
        result: "won",
        note: "이력서 허위 기재 폭로 후 감사위원회 인정, 취임 130일 만인 2012년 5월 13일 사임.",
      },
      {
        demand: "이사회 3석 확보 (로브 포함)",
        result: "won",
        note: "야후와의 합의를 통해 Third Point 추천 이사 3인(로브 본인 포함) 이사회 입성.",
      },
      {
        demand: "새로운 유능한 CEO 영입",
        result: "won",
        note: "로브가 이사회 내부에서 적극 주도해 2012년 7월 구글 부사장 마리사 마이어를 CEO로 영입.",
      },
      {
        demand: "알리바바 지분 가치 실현 (주주 환원)",
        result: "partial",
        note: "2012~2013년 알리바바 지분 일부 매각 및 $3B+ 자사주매입 실시. 그러나 알리바바 IPO는 2014년으로 완전한 가치 실현은 로브의 엑싯 이후에 이뤄짐.",
      },
    ],
    stockImpact: {
      preCampaign: "$15 (2012년 초)",
      peakDuringCampaign: "$20 (마리사 마이어 영입 발표 직후, 2012년 7월)",
      postCampaign: "$25 (2013년, 로브 엑싯 시점)",
      note: "캠페인 기간 약 +33%, 2013년까지 약 +67% 상승. 알리바바 IPO(2014년 9월) 이후 야후 주가는 한때 $50 이상으로 급등.",
    },
  },

  dealStructure: {
    body: "Third Point의 접근법은 세 단계로 구성됐다. 첫 단계는 지분 매집과 공개 캠페인이다. 5.8% 지분을 확보한 뒤 이사회 후보 지명을 통해 공식적인 개입 의사를 밝혔다. 두 번째 단계는 정보 기반 공격이다. SEC 제출 공시에서 CEO의 학력 허위 기재를 정밀하게 발굴해 공개함으로써 경영진의 정당성을 근본적으로 무너뜨렸다. 세 번째 단계는 이사회 진입과 내부 개혁이다. 협상을 통해 이사회 3석을 확보한 뒤, 내부에서 새 CEO 영입과 전략 방향 설정에 직접 참여했다. 전체 구조는 공개 시장 매집 → 정보 압박 → 이사회 진입 → 전략 개혁 → 가치 실현 후 엑싯의 전형적인 행동주의 플레이북이다.",
    preOwnership: {
      nodes: [
        {
          id: "third_point",
          label: "Third Point LLC",
          sub: "Dan Loeb 창업, 행동주의 헤지펀드",
          type: "acquirer",
        },
        {
          id: "yahoo",
          label: "Yahoo! Inc.",
          sub: "표류하는 인터넷 포털, 알리바바 지분 보유",
          type: "target",
        },
        {
          id: "alibaba",
          label: "알리바바 그룹",
          sub: "야후 40% 지분 보유 (IPO 전 고성장)",
          type: "entity",
        },
        {
          id: "softbank",
          label: "소프트뱅크",
          sub: "야후재팬 35% 공동 대주주",
          type: "entity",
        },
      ],
      edges: [
        { from: "third_point", to: "yahoo", label: "5.8% 매집 + 이사 후보 지명" },
        { from: "yahoo", to: "alibaba", label: "40% 지분 보유 (숨겨진 가치)" },
        { from: "softbank", to: "yahoo", label: "야후재팬 통한 우호적 관계" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "yahoo_reformed",
          label: "Yahoo! Inc. (개혁 후)",
          sub: "마리사 마이어 CEO, 알리바바 지분 부분 매각",
          type: "target",
        },
        {
          id: "loeb_board",
          label: "Dan Loeb (이사회 멤버)",
          sub: "Third Point 이사회 3석 확보, 내부 개혁 주도",
          type: "fund",
        },
        {
          id: "alibaba_ipo",
          label: "알리바바 그룹",
          sub: "2014년 IPO — 야후 보유 지분 $300억+",
          type: "entity",
        },
        {
          id: "third_point_exit",
          label: "Third Point LLC (엑싯)",
          sub: "2013년 지분 대부분 매도 — 누적 ~$2.4B 수익",
          type: "acquirer",
        },
      ],
      edges: [
        { from: "loeb_board", to: "yahoo_reformed", label: "이사회 내부 전략 주도" },
        { from: "yahoo_reformed", to: "alibaba_ipo", label: "지분 부분 매각 + 잔여 보유" },
        { from: "third_point_exit", to: "yahoo_reformed", label: "Exit 후 수익 실현" },
      ],
    },
    keyTerms: [
      { label: "지분 매집 공시", value: "2012년 2월 14일 (5.8%, ~$1B)", accent: true },
      { label: "이력서 사기 폭로", value: "2012년 5월 3일 (SEC 공시)", accent: true },
      { label: "톰슨 CEO 사임", value: "2012년 5월 13일 (취임 130일 만)", accent: true },
      { label: "이사회 합의 (3석 확보)", value: "2012년 5월~6월", accent: true },
      { label: "마리사 마이어 CEO 영입", value: "2012년 7월 16일 (구글 부사장 출신)" },
      { label: "자사주매입 프로그램", value: "$3B+ (알리바바 지분 부분 매각 재원)" },
      { label: "Third Point 엑싯", value: "2013년 — 누적 약 $2.4B 수익 실현" },
    ],
  },

  advisors: {
    body: "Third Point은 내부 리서치팀 주도의 정보 기반 캠페인을 전개했다. 학력 허위 기재 발굴은 외부 탐정이나 조사기관이 아닌 Third Point 내부 팀이 SEC 공시 및 학교 졸업생 데이터를 대조 분석해 직접 수행했다. 야후는 위기 대응을 위해 복수의 법률·IR 자문사를 동원했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Third Point (행동주의측)",
        initials: "3P",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Third Point 내부 리서치팀",
            role: "캠페인 전략·SEC 공시 분석·학력 검증",
            roleType: "other",
            note: "Dan Loeb 직접 지휘. 스톤힐 칼리지 1979년 졸업 기록과 야후 공시를 대조해 학력 허위 기재를 독자적으로 발굴.",
          },
          {
            firm: "Cadwalader, Wickersham & Taft (추정)",
            role: "행동주의 캠페인 법률 자문",
            roleType: "legal",
            note: "13D 공시 및 위임장 대결(proxy fight) 관련 법률 지원 (공개 보도 기반 추정).",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Yahoo (경영진측)",
        initials: "YHOO",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Goldman Sachs (추정)",
            role: "전략적 방어 재무 자문",
            roleType: "financial",
            note: "야후 이사회 자문 — 행동주의 대응 전략 및 CEO 교체 이후 전략 방향 검토.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz (추정)",
            role: "법률 자문 (적대적 주주 대응)",
            roleType: "legal",
            note: "행동주의 방어 전문 로펌. 합의 협상 총괄 (공개 보도 기반 추정).",
          },
          {
            firm: "MacKenzie Partners",
            role: "주주 커뮤니케이션·위임장 자문",
            roleType: "other",
            note: "기관투자자 설득 및 주총 의결권 전략 지원.",
          },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반 추정이며, 실제 계약 내용과 다를 수 있습니다.",
  },

  valuation: {
    body: "Third Point의 야후 투자 논리는 전형적인 'SOTP(Sum of the Parts)' 밸류에이션에 기반했다. 2012년 초 야후의 알리바바 지분(약 40%)과 야후재팬 지분(약 35%)의 합산 가치가 야후 시총 $190억과 거의 일치했다. 즉 야후의 핵심 인터넷 사업(이메일·뉴스·광고)은 암묵적으로 $0 또는 마이너스로 거래되고 있었다. 이는 명백한 저평가이자, 숨겨진 자산을 실현할 경영진과 전략이 없는 지배구조 문제였다. Third Point은 CEO 교체와 이사회 개혁을 통해 이 디스카운트를 해소하면 주가 상승 여지가 충분하다고 판단했다.",
    rows: [
      {
        item: "Third Point 투자 규모",
        val: "약 $1B (지분 5.8%)",
        note: "2012년 2월 기준",
        accent: true,
      },
      {
        item: "야후 시가총액 (2012년 초)",
        val: "약 $190억",
        note: "행동주의 개입 직전",
      },
      {
        item: "알리바바 지분 40% 추정 가치",
        val: "$80~100억 (2012년)",
        note: "2014년 IPO 시 야후 보유분 $300억+ 급등",
        accent: true,
      },
      {
        item: "야후재팬 지분 35% 추정 가치",
        val: "약 $40~60억",
        note: "소프트뱅크와 공동 보유",
      },
      {
        item: "핵심 인터넷 사업 암묵적 가치",
        val: "$0 또는 마이너스",
        note: "SOTP 기준 — 심각한 저평가 시사",
        accent: true,
      },
      {
        item: "야후 EV/EBITDA (FY2011)",
        val: "약 12~15x",
        note: "EBITDA $10.2억 기준 — 실질 사업 가치 저평가",
      },
      {
        item: "Third Point 엑싯 수익 (2013년)",
        val: "누적 약 $2.4B",
        note: "$1B 투자 대비 약 2.4배 회수 — 캠페인 기간 약 18개월",
        accent: true,
      },
    ],
    disclaimer: "수치는 공개 보도 및 야후 공시 기반. Third Point 내부 수익률 세부 내역은 미공개.",
  },

  rationale: {
    buyer: {
      title: "Third Point 행동주의 논리",
      initials: "3P",
      bg: "bg-slate-700",
      points: [
        "SOTP 분석: 알리바바·야후재팬 지분 합산 가치 ≈ 야후 시총 → 핵심 사업 사실상 공짜, 하방 리스크 극히 제한",
        "경영진 교체만으로도 주가 상승 가능 — 지배구조 개선이 곧 가치 창출",
        "CEO 이력서 허위 기재라는 결정적 정보 우위 확보 → 이사회 협상에서 압도적 레버리지",
        "이사회 직접 진입 전략 → 새 CEO 선임, 전략 방향 설정에 내부에서 직접 개입 가능",
        "알리바바 IPO 전 지분 가치 '복권' 구조 — 시간이 지날수록 자산 가치 자연 상승",
      ],
    },
    seller: {
      title: "Yahoo 경영진·이사회의 입장",
      initials: "YHOO",
      bg: "bg-violet-700",
      points: [
        "스콧 톰슨 CEO 취임 초기 — 전략 재편 시간 필요, 행동주의의 조기 개입이 부담",
        "이력서 오류는 '의도치 않은 실수'라고 초기 주장 — 감사위원회 조사 결과로 번복",
        "소프트뱅크의 안정적 대주주 지위(~35%)가 방어막 역할을 할 수 있다고 판단했으나 역부족",
        "결과적으로 Third Point와의 합의(이사회 3석 제공)가 위임장 대결보다 경영 안정화에 유리하다고 판단",
        "마리사 마이어 영입은 Third Point 이사회 진입 후 이사회 내 협의의 산물 — 실질적 공동 의사결정",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026-05",
    body: "Third Point의 야후 캠페인은 행동주의 역사상 가장 극적인 캠페인 중 하나다. CEO 이력서 허위 기재 폭로라는 전례 없는 정보 공격으로 130일 만에 CEO를 퇴진시키고, 이사회에 직접 진입해 마리사 마이어라는 스타 CEO를 영입하는 데 성공했다. 마이어 영입 이후 야후의 이미지 제고와 알리바바 지분 가치 상승이 맞물려 주가는 큰 폭 상승했다. Third Point은 2013년 대부분의 지분을 누적 약 $2.4B에 매각해 약 2.4배의 수익을 실현했다. 단, 야후의 핵심 인터넷 사업 자체의 근본적 부활은 이뤄지지 않았고, 마이어 체제하 야후는 2017년 결국 버라이즌(Verizon)에 핵심 사업을 $45억에 매각하는 것으로 막을 내렸다.",
    overallVerdict: "행동주의 측면에서는 완승 — 지배구조 개혁·가치 실현 교과서. 단 야후 핵심 사업 부활은 미완",
    positives: [
      "CEO 이력서 허위 기재 발굴·폭로 → 취임 130일 만에 CEO 퇴진 — 전례 없는 정보 기반 승리",
      "이사회 3석 확보 + 로브 직접 이사회 입성 → 전략 결정권 획득",
      "마리사 마이어 CEO 영입 — 구글 출신 스타 경영자로 야후 이미지 대폭 제고",
      "알리바바 지분 부분 매각 재원으로 $3B+ 자사주매입 → 주주 환원 실행",
      "Third Point $1B 투자 → 누적 ~$2.4B 회수 — 약 18개월 만에 약 2.4배 수익",
    ],
    risks: [
      "마리사 마이어의 야후 재건 실패 — $14억 텀블러 인수 등 무리한 M&A로 핵심 사업 반등 불성공",
      "알리바바 지분 가치의 대부분은 Third Point 엑싯 이후인 2014년 IPO 시 실현 — 행동주의 수익은 제한적",
      "야후 핵심 사업 2017년 버라이즌에 $45억 매각 — 전성기 시총 $1,000억 대비 처참한 결말",
      "이력서 허위 기재 발굴 전략은 특수 상황 의존적 — 재현 불가능한 일회성 정보 우위",
      "이사회 진입 이후에도 핵심 사업 방향에 대한 실질적 통제력은 여전히 제한적",
    ],
    editorNote: "Third Point의 야후 캠페인은 두 가지 교훈을 동시에 준다. 하나는 '정보 우위'가 지분 크기를 압도한다는 것이다. 5.8% 지분이 아니라 CEO 이력서 허위 기재라는 결정적 정보가 캠페인의 핵심 무기였다. 다른 하나는 행동주의는 지배구조를 고칠 수 있어도 사업 경쟁력을 만들어낼 수는 없다는 것이다. 마리사 마이어 영입까지는 완벽했지만, 인터넷 1세대 기업의 구조적 쇠퇴를 막는 것은 행동주의의 영역 밖이었다. 그럼에도 Third Point의 수익 관점에서 이 캠페인은 완승이다 — 알리바바 지분이라는 '내포된 복권'이 있었기 때문이다.",
  },

  tombstone: {
    acquirerInitials: "3P",
    acquirerBg: "bg-slate-700",
    targetInitials: "YHOO",
    targetBg: "bg-violet-700",
    acquirerName: "Third Point LLC (Dan Loeb)",
    targetName: "Yahoo! Inc.",
    dealTitle: "Third Point × Yahoo 행동주의 — CEO 이력서 사기 발굴",
    dealSize: "~$1B (지분 5.8%)",
    dealSizeUSD: "~$1B",
    evEbitda: "N/A (행동주의)",
    closeDate: "2012년 7월",
  },

  sources: [
    {
      id: 1,
      text: "Third Point LLC — SEC Schedule 13D Filing: Yahoo! Inc. (February 14, 2012)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=third+point&type=SC+13D",
    },
    {
      id: 2,
      text: "Third Point LLC — SEC Schedule 13D/A Amendment: Disclosure of CEO Résumé Discrepancy (May 3, 2012)",
    },
    {
      id: 3,
      text: "Yahoo! Inc. — Press Release: Audit Committee Review of Scott Thompson's Bio (May 13, 2012)",
    },
    {
      id: 4,
      text: "New York Times — Yahoo Chief May Have Exaggerated His Education (May 3, 2012)",
      url: "https://www.nytimes.com",
    },
    {
      id: 5,
      text: "Wall Street Journal — Yahoo CEO Scott Thompson Steps Down (May 13, 2012)",
      url: "https://www.wsj.com",
    },
    {
      id: 6,
      text: "Bloomberg — Yahoo Hires Marissa Mayer as CEO From Google (July 16, 2012)",
      url: "https://www.bloomberg.com",
    },
    {
      id: 7,
      text: "Financial Times — Third Point Sells Yahoo Stake at $2.4 Billion Profit (July 2013)",
      url: "https://www.ft.com",
    },
    {
      id: 8,
      text: "Yahoo! Inc. — Annual Report FY2011, FY2012, FY2013 (SEC 10-K Filings)",
      url: "https://www.sec.gov",
    },
    {
      id: 9,
      text: "Fortune — Dan Loeb's Third Point and the Yahoo Campaign: A Masterclass in Activism (2013)",
    },
  ],

  seo: {
    title: "Third Point × Yahoo 완전 분석 — CEO 이력서 사기로 130일 만에 퇴진",
    description:
      "Third Point 다니엘 로브가 야후 CEO 스콧 톰슨의 학력 허위 기재를 발굴해 130일 만에 퇴진시킨 행동주의 캠페인 완전 분석. 이사회 3석 확보, 마리사 마이어 영입, 알리바바 지분 가치 실현 전략까지.",
    keywords: [
      "Yahoo CEO 사기",
      "Third Point Dan Loeb Yahoo",
      "Scott Thompson 이력서",
      "행동주의 이사회 장악",
      "야후 행동주의",
      "다니엘 로브 야후",
      "마리사 마이어 영입",
      "알리바바 야후 지분",
      "정보 기반 행동주의",
      "CEO 이력서 허위",
    ],
  },

  concepts: [
    {
      term: "정보 기반 행동주의 (Information-Based Activism)",
      description:
        "공개 리서치와 데이터 분석으로 경영진의 비리·오류를 발굴해 변화를 강제하는 전략. Third Point의 톰슨 학력 허위 기재 폭로가 대표 사례.",
    },
    {
      term: "이력서 허위 기재 (Résumé Fraud)",
      description:
        "임원이 학력·경력을 과장하거나 허위 기재하는 행위. SEC 공시에 포함될 경우 증권법 위반 소지이며, 기업 신뢰도에 치명적 타격을 준다.",
    },
    {
      term: "이사회 진입 전략 (Board Entry Strategy)",
      description:
        "행동주의 펀드가 협상 또는 위임장 대결(proxy fight)을 통해 이사회에 직접 진입해 내부에서 전략 변화를 주도하는 방식.",
    },
    {
      term: "알리바바 지분 가치 (Hidden Asset Unlocking)",
      description:
        "야후가 보유한 알리바바 지분(~40%)이 야후 시총을 초과하는 상황에서, 핵심 사업 가치가 마이너스로 거래되는 저평가 구조를 해소하는 전략.",
    },
    {
      term: "전략적 대안 검토 (Strategic Alternatives)",
      description:
        "기업이 매각·분사·파트너십 등 선택지를 공식 검토하는 이사회 프로세스. 행동주의 압박 하에 발동되는 경우가 많으며 시장에 강력한 시그널을 보낸다.",
    },
  ],

  faq: [
    {
      q: "Third Point은 어떻게 CEO 스콧 톰슨의 이력서 허위 기재를 발견했나?",
      a: "Third Point의 내부 리서치팀이 야후의 SEC 제출 공시 서류와 스톤힐 칼리지의 졸업생 기록을 대조 분석하는 과정에서 발견했습니다. 톰슨이 컴퓨터공학·회계학 복수 전공을 주장했지만, 스톤힐 칼리지는 1979년 그가 졸업한 당시 컴퓨터공학 전공 자체가 존재하지 않았습니다. 이는 외부 조사기관이 아닌 Third Point 팀의 직접 리서치 결과였습니다. 행동주의 캠페인에서 이처럼 깊이 있는 정보 발굴이 결정적 레버리지로 작용한 전례 없는 사례입니다.",
    },
    {
      q: "야후가 이사회에서 합의를 수용한 이유는 무엇인가?",
      a: "두 가지 압박이 동시에 작용했습니다. 첫째, CEO 이력서 허위 기재 폭로로 경영진의 도덕적 정당성이 무너진 상황에서 위임장 대결(proxy fight)을 강행하면 더 큰 이미지 손상이 불가피했습니다. 둘째, Third Point의 SOTP 분석(알리바바·야후재팬 지분 = 시총)은 대다수 기관투자자들에게도 설득력 있었습니다. 이사회 3석을 제공하는 것이 장기 위임장 싸움보다 경영 안정화에 유리하다는 현실적 판단이 합의를 이끌었습니다.",
    },
    {
      q: "마리사 마이어 영입에서 Third Point의 역할은 무엇이었나?",
      a: "로브는 이사회 진입 이후 새 CEO 선임 위원회에서 적극적인 역할을 했습니다. 야후 이사회는 내부 후보 및 여러 외부 후보를 검토했으며, 로브는 실리콘밸리 네트워크와 구글 내부 정보에 기반해 마리사 마이어를 강력하게 지지했습니다. 마이어는 구글에서 지도·검색·로컬 서비스 부사장이었으며, 공백 상태의 야후에 기술 리더십과 브랜드를 동시에 가져올 수 있는 선택지였습니다. 2012년 7월 16일 마이어 영입 발표 당일 야후 주가는 장중 급등했습니다.",
    },
    {
      q: "Third Point은 결국 얼마나 수익을 냈고, 알리바바 IPO는 어떻게 됐나?",
      a: "Third Point은 2013년 야후 지분 대부분을 매각해 누적 약 $2.4B의 수익을 실현했습니다. $1B 투자 대비 약 18개월 만에 2.4배 회수입니다. 그러나 알리바바의 최대 가치 실현은 2014년 9월 IPO 때로, 당시 야후가 보유한 알리바바 지분은 $300억+로 평가됐습니다. Third Point은 알리바바 IPO 전에 이미 엑싯했기 때문에 이 천문학적 상승의 직접 수혜자는 아니었습니다. 야후는 이후에도 알리바바 지분 세금 문제로 고민하다 2017년 버라이즌에 핵심 사업을 매각했고, 알리바바 지분은 별도 법인 '알타바(Altaba)'로 분리됐습니다.",
    },
    {
      q: "이 캠페인이 행동주의 역사에서 갖는 의의는 무엇인가?",
      a: "세 가지 측면에서 획기적입니다. 첫째, CEO 이력서 허위 기재 폭로라는 전례 없는 '정보 무기'를 행동주의에 처음 대규모로 활용했습니다. 둘째, 이사회 진입 전략의 효과를 실증했습니다. 단순히 요구를 외치는 것이 아니라, 이사회에 직접 진입해 CEO 선임과 전략 방향을 내부에서 주도했습니다. 셋째, 인터넷 기업의 '숨겨진 자산' 가치 발굴 공식을 완성했습니다. 이 캠페인 이후 다수의 행동주의 펀드가 유사한 SOTP 분석 기반의 아시아 인터넷 자산 가치 캠페인을 진행했습니다.",
    },
  ],
};

export default deal;
