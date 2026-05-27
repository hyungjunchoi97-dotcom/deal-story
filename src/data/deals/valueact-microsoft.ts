import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "valueact-microsoft",
  title: "ValueAct vs 마이크로소프트 — 0.8% 지분으로 $2조 기업을 바꾼 조용한 행동주의",
  subtitle: "조용한 행동주의 교과서 · 발머 퇴진 · 나델라 체제 · 클라우드 피벗 · 시총 $2조 돌파",
  category: "activism",
  industry: "소프트웨어 / 빅테크",
  country: "미국",
  announcedAt: "2013-04-03",
  closedAt: "2014-02-04",
  announcedDisplay: "2013년 4월",
  closedDisplay: "2014년 2월",
  readingMinutes: 9,
  tags: ["ValueAct", "마이크로소프트", "조용한 행동주의", "발머 퇴진", "사티아 나델라", "클라우드 전환", "CEO 교체", "행동주의 투자"],
  excerpt:
    "ValueAct 캐피털이 마이크로소프트 지분 0.8%($20억)를 매집한 뒤 공개 캠페인 없이 이사회 참관인 자격을 확보했다. 스티브 발머 퇴진과 사티아 나델라 CEO 취임으로 이어진 이 조용한 행동주의는 MS 주가를 $27에서 $400+ 이상으로 끌어올렸다 — 역사상 가장 성공적인 CEO 교체 투자 사례.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "VA", bg: "bg-teal-700",  label: "ValueAct 캐피털" },
  target:   { initials: "MS", bg: "bg-blue-600",  label: "마이크로소프트" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "2013년 마이크로소프트는 스티브 발머 CEO 체제 13년째였다. Windows·Office 독점 수익은 탄탄했지만 모바일·클라우드에서는 완전 실패였다. 윈도우폰 시장점유율은 3%에 불과했고, 태블릿 Surface는 연속 부진을 면치 못했다. 주가는 2000년 닷컴 버블 이후 13년 동안 $27~$30에 갇혀있었다.",
    "ValueAct 캐피털(Jeff Ubben 창업)은 2013년 2월~4월에 걸쳐 마이크로소프트 지분 약 0.8%(약 $20억)를 매집했다. ValueAct의 방식은 특이했다: 공개 캠페인 대신 이사회 참관인 자격(Board Observer)을 요구하는 '조용한 행동주의'였다. 주주 공개서한도, 언론 압박도 없이 비공개 대화로 변화를 추구했다.",
    "ValueAct의 핵심 주장은 명확했다: 마이크로소프트의 기업 가치는 Windows 중심 전략이 아닌 Azure·Office 365 클라우드 전환에 달려 있다. 발머 퇴진과 클라우드 전문 CEO 선임이 필요하다. 이 주장은 이사회 내부에서 공감을 얻었다.",
    "2013년 8월 발머는 12개월 내 퇴임을 전격 발표했다. 2014년 2월 사티아 나델라가 CEO로 취임했다. ValueAct는 이사회 옵서버에서 정식 이사로 승격됐다(2014.2). 이후 MS 주가는 $27에서 $400+로 상승하고 시총은 $2조를 돌파했다 — 단일 CEO 교체가 만들어낸 역사상 가장 극적인 기업가치 창출 사례 중 하나.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "MS 시총 약 $2,400억",
    acquirerName: "ValueAct 캐피털",
    targetName: "마이크로소프트",
    announcedDisplay: "2013년 4월",
    closedDisplay: "2014년 2월",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "ValueAct, MS 지분 0.8%($20억) 매집 후 공개 캠페인 없이 이사회 참관인 자격 획득. '조용한 행동주의'의 교과서.",
    "핵심 요구: 스티브 발머 퇴진 + 클라우드 전문 CEO 선임.",
    "2013년 8월: 발머 12개월 내 퇴임 전격 발표. 2014년 2월: 사티아 나델라 CEO 취임.",
    "MS 주가: $27(ValueAct 진입) → $400+(나델라 체제). 시총 $2조 돌파.",
    "ValueAct 투자 수익: $20억 투자 → $40억+ 회수 추정 (약 +100%).",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2013년은 클라우드 SaaS 전환의 임계점이었다. AWS가 기업용 클라우드를 장악하고 있었고, Google은 기업용 앱 시장에 진입했으며, Salesforce는 SaaS 모델의 우월성을 증명했다. 마이크로소프트는 이 전환의 최대 수혜자가 될 수 있는 자산(Office, Windows, 기업 관계)을 모두 보유하고 있었지만, Windows-first 전략에 갇혀 움직이지 못하고 있었다.",
    metrics: [
      { label: "MS 주가 정체 기간",     value: "13년 ($27~$30)",  sub: "닷컴 버블 이후 2000~2013년" },
      { label: "ValueAct 매집 지분",    value: "0.8% (~$20억)",   sub: "13F 공시, 2013년 4월" },
      { label: "발머 퇴임 발표 후 주가", value: "$34 (+26%)",      sub: "2013년 8월 즉각 반응" },
      { label: "나델라 체제 최고점",    value: "$400+",            sub: "시총 $3조 돌파 (2021~)" },
    ],
    subBody:
      "ValueAct는 '조용한 행동주의(Quiet Activism)'의 대표 주자다. 공개 서한·언론 플레이·위임장 대결 대신, 비공개 대화와 이사회 접근을 통해 내부에서 변화를 이끌어낸다. 이 방식은 대규모 공개 행동주의에 비해 덜 화려하지만, 기업 관계 유지와 주가 급등락 없이 장기 가치를 창출하는 경우가 많다.",
    players: [
      { name: "ValueAct 캐피털 (Jeff Ubben)", role: "조용한 행동주의 펀드, 0.8% 매집 후 이사회 접근" },
      { name: "스티브 발머 MS CEO",           role: "13년 재임, 모바일·클라우드 실기, 2014년 퇴진" },
      { name: "사티아 나델라",                role: "클라우드 전문가, 신임 CEO, Azure·Teams·M365 혁신" },
      { name: "빌 게이츠",                    role: "4.5% 보유, 나델라 선임 과정에서 적극 관여" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "마이크로소프트 (Microsoft)",
    body: "마이크로소프트는 2013년 기준 약 10만 명 직원, $779억 매출의 소프트웨어 대기업이었다. Windows와 Office 독점력으로 막대한 이익을 창출했지만, 발머 체제 13년간 모바일·클라우드 대응에 완전히 실패했다. 클라우드 매출 비중은 5% 미만이었고, 주가는 2000년 이후 13년 동안 $27~$30 박스권에 갇혀있었다. 잠재력 대비 극심한 저평가 상태였다.",
    metrics: [
      { label: "직원 수 (FY2013)",          value: "약 10만 명",      sub: "글로벌 소프트웨어 대기업" },
      { label: "매출 (FY2013)",              value: "$779억",           sub: "Windows·Office 중심" },
      { label: "Windows 시장점유율",         value: "90%+",             sub: "PC OS 절대 강자" },
      { label: "클라우드 매출 비중",         value: "5% 미만",          sub: "Azure 초기, AWS에 크게 뒤처짐" },
      { label: "주가 정체 기간",             value: "13년",             sub: "$27~$30 박스권 (2000~2013년)" },
      { label: "시총 (ValueAct 진입 시)",   value: "약 $2,400억",      sub: "EV/EBITDA 약 7.8배 저평가" },
    ],
    financials: [
      { year: "FY2011", revenue: 69943, cogs: 15577, grossProfit: 54366, sga: 20875, operatingIncome: 27161, ebitda: 30000 },
      { year: "FY2012", revenue: 73723, cogs: 17530, grossProfit: 56193, sga: 22227, operatingIncome: 21763, ebitda: 25000 },
      { year: "FY2013", revenue: 77849, cogs: 20249, grossProfit: 57600, sga: 23500, operatingIncome: 26764, ebitda: 30500 },
      { year: "FY2014", revenue: 86833, cogs: 26934, grossProfit: 59899, sga: 24566, operatingIncome: 27759, ebitda: 32000 },
    ],
    financialsNote: "단위: $M (백만 달러) | 출처: 마이크로소프트 10-K 연간보고서",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "마이크로소프트는 오너 없는 공개기업이었다. 지배구조 문제는 소유 집중이 아닌 이사회가 13년간 실적 부진 CEO를 교체하지 못한 '관성'에 있었다. ValueAct는 이 관성을 소수 지분으로 내부에서 깨뜨렸다. 핵심 무기는 지분율이 아니라 '올바른 주장'이었다.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "글로벌 최대 패시브 운용사",
        stake: "7.2%",
        stakePct: 7.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "글로벌 최대 자산운용사",
        stake: "4.5%",
        stakePct: 4.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "gates",
        label: "빌 게이츠",
        sub: "MS 공동창업자, 전 CEO",
        stake: "4.5%",
        stakePct: 4.5,
        type: "management",
        alignment: "pro",
      },
      {
        id: "valueact",
        label: "ValueAct Capital",
        sub: "Jeff Ubben 조용한 행동주의",
        stake: "0.8%",
        stakePct: 0.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "public",
        label: "일반 소수주주",
        sub: "기관·개인 혼합",
        stake: "83.0%",
        stakePct: 83.0,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 14,
      independent: 11,
      affiliated: 3,
      note: "14인 대형 이사회. 실질적 CEO 견제 미작동 — 발머 체제 13년 방치. 형식적 독립성에도 불구하고 실질적 이사회 기능 부재.",
    },
    issues: [
      {
        title: "CEO 장기 방치",
        description: "발머 13년 재임 중 모바일·클라우드를 완전히 놓쳤다. 윈도우폰 3%, Surface 연속 부진, 주가 13년 박스권. 이사회는 이를 방치했다.",
        severity: "critical",
      },
      {
        title: "이사회 전략 감독 실패",
        description: "디지털 전환 트렌드 대응을 13년간 지연했다. 이사회가 경영진 도전을 회피했고, 실질적 전략 감독 기능이 작동하지 않았다.",
        severity: "high",
      },
      {
        title: "혁신 문화 경직",
        description: "Windows-first 수익 모델에 집착하며 내부 클라우드 이니셔티브를 억압했다. 모바일 시대 진입에 완전히 실패했다.",
        severity: "high",
      },
      {
        title: "주주 자본 효율",
        description: "낮은 PER에도 Nokia 인수($72억) 등 대규모 M&A 실패가 반복됐다. 주주 자본 배분의 효율성이 현저히 낮았다.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "발머 CEO 퇴진",
        result: "won",
        note: "2013년 8월 발머 12개월 내 퇴임 발표. ValueAct의 비공개 압박이 이사회 내 논의를 가속한 것으로 평가.",
      },
      {
        demand: "클라우드 전략 전문가 CEO 선임",
        result: "won",
        note: "사티아 나델라(Azure 담당 EVP) 2014년 2월 CEO 취임. Azure·M365·Teams 중심 클라우드 피벗.",
      },
      {
        demand: "이사회 개편 및 ValueAct 이사 선임",
        result: "won",
        note: "ValueAct의 Mason Morfit, 2014년 2월 MS 이사회 정식 이사 선임.",
      },
    ],
    stockImpact: {
      preCampaign: "$27",
      peakDuringCampaign: "$400+",
      postCampaign: "$380+",
      note: "ValueAct 진입(2013.4) 시점 $27에서 10년 후 $400+ 달성. 시총 $2조 돌파. 단일 CEO 교체가 $1.5조+ 시가총액을 창출한 역사적 사례.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "ValueAct는 공개 대결 없이 비공개 대화로 변화를 이끌어냈다. 이사회 옵서버 자격을 통해 내부에서 전략 전환을 압박했다. 0.8% 지분으로 $2조 기업을 바꾼 조용한 행동주의의 전형이다.",
    preOwnership: {
      nodes: [
        { id: "valueact",  label: "ValueAct Capital",  sub: "0.8% 매집, 이사회 접근 요구",          type: "acquirer" },
        { id: "ms",        label: "마이크로소프트",     sub: "$779억 매출, 주가 13년 박스권",         type: "target" },
        { id: "ballmer",   label: "스티브 발머 CEO",   sub: "13년 재임, 모바일·클라우드 실기",       type: "entity" },
        { id: "board14",   label: "이사회 14인",        sub: "CEO 견제 실패, 전략 감독 부재",         type: "entity" },
        { id: "gates",     label: "빌 게이츠",         sub: "4.5% 보유, 이사회 기술 고문",           type: "fund" },
      ],
      edges: [
        { from: "valueact", to: "ms",       label: "0.8% 매집" },
        { from: "ballmer",  to: "ms",       label: "CEO 경영 (13년)" },
        { from: "board14",  to: "ballmer",  label: "CEO 방치·유임" },
        { from: "valueact", to: "board14",  label: "비공개 대화·압박" },
        { from: "gates",    to: "ms",       label: "4.5% 보유" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "valueact",  label: "ValueAct Capital",   sub: "0.8% + 이사회 정식 이사 1석",         type: "acquirer" },
        { id: "ms",        label: "마이크로소프트",      sub: "클라우드 피벗, $2조 시총 달성",        type: "target" },
        { id: "nadella",   label: "사티아 나델라 CEO",  sub: "Azure·Teams·M365 혁신 주도",           type: "entity" },
        { id: "gates",     label: "빌 게이츠",          sub: "나델라 선임 지지, 이사회 기술 멘토",   type: "fund" },
      ],
      edges: [
        { from: "valueact", to: "ms",      label: "0.8% + 이사회 1석" },
        { from: "nadella",  to: "ms",      label: "클라우드 피벗 주도" },
        { from: "gates",    to: "nadella", label: "전략 멘토링" },
      ],
    },
    keyTerms: [
      { label: "행동주의 방식",          value: "조용한 행동주의 (비공개 대화)",          accent: true },
      { label: "ValueAct 지분",          value: "0.8% (~$20억)" },
      { label: "CEO 교체",               value: "스티브 발머 → 사티아 나델라",            accent: true },
      { label: "ValueAct 이사회 진입",   value: "옵서버(2013) → 정식 이사(2014.2)" },
      { label: "주가 변화",              value: "$27 → $400+ (+1,381%)",                  accent: true },
      { label: "시총 변화",              value: "$2,400억 → $2조+ (+733%)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "ValueAct의 조용한 행동주의 특성상 양측 모두 공개적인 자문단 구성 없이 비공개로 진행됐다. 유사 사례에서 참고할 수 있는 대표적 자문사를 기재한다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "ValueAct 캐피털 (행동주의 측)",
        initials: "VA",
        bg: "bg-teal-700",
        advisors: [
          {
            firm: "내부 팀 (Jeff Ubben 주도)",
            role: "투자 전략 및 이사회 접근",
            roleType: "financial",
            note: "ValueAct는 공개 캠페인 없이 내부 팀 중심으로 비공개 대화를 진행. 외부 자문사 기용 최소화.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문 (추정)",
            roleType: "legal",
            note: "이사회 접근 및 SEC 공시 관련 법적 자문. 공개 자료로 확인되지 않은 사항.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "마이크로소프트 이사회",
        initials: "MS",
        bg: "bg-blue-600",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "재무 자문 (추정)",
            roleType: "financial",
            note: "CEO 승계 및 전략 검토 과정에서 재무 자문 수행. 공개 자료로 확인되지 않은 사항.",
          },
          {
            firm: "Gibson, Dunn & Crutcher",
            role: "법무 자문 (추정)",
            roleType: "legal",
            note: "이사회 거버넌스 자문. 공개 자료로 확인되지 않은 사항.",
          },
        ],
      },
    ],
    disclaimer: "주: ValueAct-Microsoft 건은 비공개 진행 특성상 자문사 정보가 공식 확인되지 않았습니다. 유사 거래 패턴 기반 추정 정보를 포함합니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "ValueAct는 MS가 클라우드로 피벗할 경우 기업 가치가 $27이 아닌 $100+ 이상이 정당화된다고 봤다. 단 하나의 조건: 발머 퇴진. 진입 당시 EV/EBITDA 7.8배는 잠재력 대비 극심한 저평가였다.",
    rows: [
      { item: "MS 주가 (ValueAct 진입 시)",        val: "$27",          note: "2013년 4월 기준, 13년 박스권" },
      { item: "EV/EBITDA (FY2013 기준)",           val: "약 7.8배",     note: "잠재력 대비 저평가",                    accent: true },
      { item: "발머 퇴임 발표 후 즉각 반응",       val: "$34 (+26%)",   note: "2013년 8월, 시장 즉각 반응" },
      { item: "나델라 체제 최고점",                val: "$400+",        note: "2021년 이후 최고점",                    accent: true },
      { item: "ValueAct 추정 매각가",              val: "~$50~100",     note: "수년에 걸쳐 단계적 매각" },
      { item: "시총 변화",                         val: "$2,400억→$2조+", note: "$1.5조+ 가치 창출 (10년)",           accent: true },
    ],
    disclaimer: "주: ValueAct의 정확한 매각 시점과 수익은 공개되지 않았습니다. 추정치입니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "ValueAct는 왜 MS를 타겟으로 삼았나",
      initials: "VA",
      bg: "bg-teal-700",
      points: [
        "클라우드 전환 시 MS의 기업 가치는 $27이 아닌 $100+ 가능. Azure·Office 365가 그 잠재력을 보여주고 있었다.",
        "단 하나의 조건: 발머 퇴진. CEO 교체만으로 잠재 가치가 시장에 반영될 수 있는 구조였다.",
        "0.8% 지분으로 이사회 접근이 가능한 분산주주 구조. 공개 캠페인 없이도 내부에서 변화를 이끌 수 있었다.",
        "진입가 저평가(EV/EBITDA 7.8배)는 단기 하방을 제한. 잠재 업사이드는 수백 퍼센트에 달했다.",
      ],
    },
    seller: {
      title: "MS 이사회는 왜 변화를 수용했나",
      initials: "MS",
      bg: "bg-blue-600",
      points: [
        "주가 13년 박스권에 대한 이사회 내부 압박이 이미 축적돼 있었다. ValueAct의 비공개 압박이 논의를 가속했다.",
        "클라우드 전환 필요성에 대한 내부 공감대가 존재했다. 발머 스스로도 교체 타이밍을 인식하고 있었다는 평가.",
        "ValueAct의 논리는 공개 전쟁 없이도 충분히 설득력이 있었다. 이사회가 자발적으로 변화를 수용하는 구조였다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "나델라 체제의 마이크로소프트는 완전히 다른 기업이 됐다. Azure는 AWS와 함께 클라우드 시장을 양분했고, Teams은 협업 소프트웨어의 표준이 됐다. GitHub, LinkedIn 인수는 개발자와 전문직 생태계를 장악했다. 시총 $2조 돌파는 단일 CEO 교체가 만들어낸 역사상 가장 거대한 기업 가치 창출 사례 중 하나다.",
    overallVerdict: "행동주의 역사상 최고 수익률 딜 중 하나",
    positives: [
      "나델라 체제에서 Azure, Teams, GitHub($75억), LinkedIn($262억) 통합. MS는 클라우드·생산성·개발자 플랫폼 모두를 장악했다.",
      "시총 $2,400억(2013) → $2조+(2021). $1.5조+ 가치 창출. 인류 역사상 가장 빠른 대형 기업 가치 증가.",
      "ValueAct 투자 수익: $20억 투자 → 수년간 단계적 매각으로 +100% 이상 추정.",
      "조용한 행동주의의 교과서: 공개 캠페인 없이 이사회 내부에서 CEO 교체를 이끌어낸 선례.",
    ],
    risks: [
      "ValueAct-발머 퇴진의 직접적 인과관계는 논쟁 중이다. 발머가 자발적으로 퇴임을 결정했는지, ValueAct 압박이 결정적이었는지 불명확하다.",
      "ValueAct가 얼마나 일찍 지분을 매각했느냐에 따라 실제 수익은 크게 달라진다. 너무 일찍 팔았다면 천문학적 기회를 놓쳤을 수 있다.",
      "나델라의 Nokia 구조조정($72억 인수 후 대부분 상각)은 발머 시대의 실수를 청산하는 과정이었지만 단기 비용이 컸다.",
    ],
    editorNote:
      "ValueAct-마이크로소프트는 조용한 행동주의의 최고 사례다. 0.8% 지분으로 $2조 기업을 바꿨다. 핵심 교훈: 행동주의의 무기는 지분율이 아니라 '올바른 주장'이다. ValueAct는 싸우지 않고 이겼다 — 이사회가 스스로 답을 찾을 수 있도록 논거를 제공했을 뿐이다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "VA",
    acquirerBg: "bg-teal-700",
    targetInitials: "MS",
    targetBg: "bg-blue-600",
    acquirerName: "ValueAct 캐피털",
    targetName: "마이크로소프트",
    dealTitle: "ValueAct Capital's Quiet Activism at Microsoft",
    dealSize: "투자액 약 $20억",
    dealSizeUSD: "approx. USD 2.0 Billion",
    evEbitda: "약 7.8× (진입 시)",
    closeDate: "Feb 2014",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "ValueAct Capital, 13F 공시 및 보도자료 (2013.04.03), SEC EDGAR" },
    { id: 2, text: "Microsoft, 스티브 발머 CEO 퇴임 발표 (2013.08.23)" },
    { id: 3, text: "Microsoft, 사티아 나델라 CEO 취임 발표 (2014.02.04)" },
    { id: 4, text: "Mason Morfit (ValueAct), Microsoft 이사회 정식 이사 선임 공시 (2014.02)" },
    { id: 5, text: "Microsoft 연간보고서 FY2013~FY2023, Azure·클라우드 부문 성장 추이" },
    { id: 6, text: "Satya Nadella, 'Hit Refresh' (2017) — 나델라 체제 전략 전환 회고록" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "ValueAct vs 마이크로소프트 — 0.8% 지분으로 $2조 기업을 바꾼 조용한 행동주의",
    description:
      "ValueAct의 마이크로소프트 행동주의 완전 분석. 발머 퇴진·나델라 체제·주가 $27→$400. 공개 캠페인 없이 이사회 내부에서 CEO 교체를 이끌어낸 조용한 행동주의의 교과서.",
    keywords: [
      "ValueAct 마이크로소프트",
      "스티브 발머 퇴진",
      "사티아 나델라 행동주의",
      "마이크로소프트 주가",
      "조용한 행동주의",
      "클라우드 전환 투자",
      "기업 지배구조 CEO 교체",
      "행동주의 펀드 수익",
      "Microsoft stock activism",
      "Jeff Ubben ValueAct",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "조용한 행동주의 (Quiet Activism)",
      description: "공개 서한·언론 플레이·위임장 대결 없이 비공개 대화와 이사회 접근으로 내부에서 변화를 이끄는 행동주의 방식. ValueAct가 대표 주자.",
    },
    {
      term: "CEO 프리미엄 (CEO Premium)",
      description: "올바른 CEO 선임이 창출하는 기업 가치 증가분. MS에서는 나델라 취임 하나로 $1.5조+ 시가총액이 창출됐다.",
    },
    {
      term: "클라우드 피벗 (Cloud Pivot)",
      description: "하드웨어·온프레미스 중심 전략에서 클라우드 SaaS·PaaS로의 전략 전환. 나델라의 MS가 가장 성공적인 사례로 꼽힌다.",
    },
    {
      term: "이사회 옵서버 (Board Observer)",
      description: "이사회에 참관인 자격으로 참여하는 외부자. 의결권은 없지만 이사회 논의에 접근·참여할 수 있다. ValueAct가 초기에 요구한 권리.",
    },
    {
      term: "분산주주 구조",
      description: "지배주주 없이 지분이 여러 투자자에게 분산된 상장사. 소수 지분만으로도 이사회에 영향력을 행사할 수 있는 조건이 된다.",
    },
    {
      term: "플랫폼 전환 가치",
      description: "기존 플랫폼(Windows·Office)을 클라우드·구독 모델로 전환할 때 창출되는 재평가 프리미엄. MS의 경우 전환 완성으로 EV가 10배 이상 증가했다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "스티브 발머는 왜 실패했나?",
      a: "발머는 Windows·Office 독점 수익을 극대화하는 데는 탁월했지만, 모바일과 클라우드라는 패러다임 전환에 실패했다. 윈도우폰은 3% 점유율에 그쳤고, 태블릿 Surface는 연속 부진했다. 개방형 에코시스템 대신 MS 독점 플랫폼을 고집한 것이 근본 원인이었다.",
    },
    {
      q: "ValueAct가 어떻게 발머를 내보냈나?",
      a: "ValueAct는 공개 압박이 아닌 이사회 내부 대화로 변화를 이끌었다. 0.8% 지분으로 이사회 참관인 자격을 확보해 내부에서 전략 논의에 참여했다. 이사회가 클라우드 전환의 필요성에 공감하면서 CEO 교체 논의가 자연스럽게 진행됐다.",
    },
    {
      q: "나델라가 무엇을 바꿨나?",
      a: "나델라는 'Mobile First, Cloud First' 전략을 선언하고 Azure·Office 365 중심으로 MS를 재편했다. GitHub($75억), LinkedIn($262억) 인수로 개발자·전문직 생태계를 확보했다. Teams으로 협업 소프트웨어 시장을 장악했다. 결과: 시총 $2,400억→$2조+.",
    },
    {
      q: "0.8% 지분으로 어떻게 영향력을 행사할 수 있었나?",
      a: "지분율이 아니라 '올바른 주장'이 핵심이었다. 주가 13년 박스권이라는 명백한 실패 증거와 클라우드 전환이라는 명확한 해법을 제시했다. 이사회는 이미 내부적으로 변화 필요성을 인식하고 있었고, ValueAct는 그 논의에 불을 붙이는 역할을 했다.",
    },
    {
      q: "ValueAct는 얼마나 벌었나?",
      a: "$20억 투자에서 수년에 걸쳐 단계적으로 지분을 매각했다. 매각 시점과 가격에 따라 수익이 크게 다르지만, $40억+ 이상 회수한 것으로 추정된다(+100% 이상). 만약 장기 보유했다면 수익은 훨씬 컸겠지만, 행동주의 펀드의 특성상 목표 달성 후 EXIT이 일반적이다.",
    },
    {
      q: "조용한 행동주의와 공개 캠페인의 차이는?",
      a: "공개 캠페인(엘리엇, 퍼싱스퀘어 방식)은 언론·주주 서한·위임장 대결로 경영진을 공개적으로 압박한다. 조용한 행동주의(ValueAct 방식)는 비공개 대화와 이사회 접근으로 내부에서 변화를 이끈다. 공개 방식은 빠르고 강력하지만 관계를 파괴한다. 조용한 방식은 시간이 걸리지만 협력적 변화를 만든다.",
    },
  ],
};

export default deal;
