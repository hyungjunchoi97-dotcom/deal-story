/**
 * TPG × J.Crew Group LBO → IP Transfer (2011–2020)
 * '트랩 도어(Trap Door)' 자산 이전의 교과서 — 담보 없는 IP 유출과 채권자 전쟁
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "jcrew-ip-transfer",
  title: "TPG는 어떻게 J.Crew 브랜드를 케이맨 자회사로 빼돌리고 채권자를 무력화했나",
  subtitle: "2016 Trap Door 자산 이전 — 레버리지드론 '바스켓 조항'의 허점과 담보 공동화 실전",
  category: "ma",
  industry: "패션 리테일",
  country: "미국",
  announcedAt: "2010-11-23",
  closedAt: "2011-03-07",
  announcedDisplay: "2010년 11월",
  closedDisplay: "2011년 3월",
  readingMinutes: 11,
  tags: [
    "TPG", "J.Crew", "트랩도어", "Trap Door", "코비넌트", "LBO",
    "레버리지드론", "IP 이전", "담보", "케이맨", "파산", "챕터11",
    "LevFin", "바스켓조항", "Basket", "PE", "사모펀드",
  ],
  excerpt:
    "TPG·레너드 그린이 J.Crew를 $30억에 인수한 LBO. 2016년 TPG는 J.Crew 상표권·IP를 케이맨제도 자회사로 이전(Trap Door)했고, 이 IP를 담보로 새 대출을 받아 PE 배당으로 빼냈다. 기존 1순위 채권자들은 담보에서 IP가 사라졌음을 뒤늦게 알았다 — 레버리지드론 '인베스트먼트 바스켓'의 허점을 가장 극적으로 보여준 사건.",

  acquirer: { initials: "TPG",  bg: "bg-purple-800", label: "TPG / 레너드 그린 앤 파트너스" },
  target:   { initials: "JCR",  bg: "bg-rose-600",   label: "J.Crew Group" },

  background: [
    "2011년 TPG 캐피탈과 레너드 그린 앤 파트너스는 프레피 패션의 아이콘 J.Crew Group을 주당 $43.50, 총 EV ~$30억에 인수했다. LBO 당시 J.Crew는 아이코닉 브랜드와 탄탄한 충성 고객층을 보유했지만, 온라인 패션 경쟁(ZARA, H&M, 아마존)이 가속화되는 가운데 구조적 도전에 직면해 있었다. 인수 대금의 70%는 레버리지드론과 HY 채권으로 조달됐다.",
    "2015-2016년이 되자 J.Crew의 실적이 급격히 악화됐다. 매출은 정체되고 EBITDA는 하락했으며, 과도한 부채 부담으로 재무 상황이 악화됐다. TPG의 선택은 사업 개선이 아닌 '자산 재배치'였다. 2016년 TPG는 J.Crew의 핵심 지적재산(상표권, 브랜드 IP 등 추정 가치 $250M)을 케이맨제도에 설립한 Chinos Holdings의 자회사로 이전했다. 이것이 레버리지드론 역사상 가장 유명한 'Trap Door(함정 문)' 이전이다.",
    "기존 1순위 채권자들은 이 IP 이전을 신용계약의 '투자 바스켓(Investment Basket)' 조항을 통해 진행됐다는 것을 뒤늦게 발견했다. IP가 담보에서 빠져나간 후, Chinos는 이 IP를 담보로 새 대출(Term Loan at Cayman)을 받아 IPO 또는 PE 배당 재원으로 활용하려 했다. 채권자들은 소송을 제기했지만, 계약서 상 J.Crew가 이 이전을 합법적으로 실행할 수 있었다는 점이 핵심 쟁점이 됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$30억",
    acquirerName: "TPG 캐피탈 / Leonard Green & Partners",
    targetName: "J.Crew Group, Inc.",
    announcedDisplay: "2010년 11월 23일",
    closedDisplay: "2011년 3월 7일",
    country: "미국 (NYSE: JCG → 상장폐지)",
  },

  executiveSummary: [
    "TPG·레너드 그린이 J.Crew Group을 $30억에 인수 — 에쿼티 $900M, 레버리지드론·채권 $21억.",
    "2016년 J.Crew IP(상표권 등 ~$250M)를 케이맨 자회사로 이전 — 기존 채권자 담보에서 IP 제외.",
    "이전된 IP를 담보로 신규 대출 자금 조달, 상위 PE로 배당 지급 — '담보 공동화(Collateral Stripping)'.",
    "기존 TLB 채권자 소송 → J.Crew의 신용계약 '투자 바스켓' 이용이 계약상 적법했다는 논쟁.",
    "2020년 5월 Chapter 11 파산신청 → 채권자들 채권→주식 전환 후 재건, 브랜드는 생존.",
  ],

  industryOverview: {
    body: "2010년대 미국 패션 소매 시장은 '패스트 패션(ZARA, H&M)'과 '온라인(아마존, ASOS)'의 이중 압박을 받으며 구조적 변화를 겪었다. J.Crew의 프레피 프리미엄 포지셔닝은 타깃 고객층이 좁았고, 청년층의 구매력 저하와 아이패드 세대의 소비 행태 변화에 취약했다.",
    metrics: [
      { label: "미국 어패럴 시장 규모", value: "$4,000억", sub: "2011년 기준" },
      { label: "J.Crew 점포 수",       value: "~580개",   sub: "J.Crew + Madewell 포함" },
      { label: "J.Crew 브랜드 IP 가치", value: "~$250M",  sub: "2016년 이전 당시 추정" },
      { label: "LBO Entry Leverage",   value: "~6.5×",   sub: "Debt/EBITDA at close" },
    ],
    players: [
      { name: "J.Crew",      role: "프레피 패션 1위 브랜드 (LBO 대상)" },
      { name: "Madewell",    role: "J.Crew 자회사 브랜드 (성장 드라이버)" },
      { name: "Gap / Banana Republic", role: "직접 경쟁사 (유사 포지셔닝)" },
      { name: "ZARA / H&M",  role: "패스트 패션 경쟁자 (가격 전쟁)" },
    ],
  },

  companyOverview: {
    targetName: "J.Crew Group, Inc.",
    body: "1947년 설립, 뉴욕 기반 어패럴 브랜드. 1980-90년대 카탈로그 비즈니스로 성장한 후, 전임 CEO Mickey Drexler(Gap 출신)의 지휘 하에 2000년대 프리미엄 리테일로 재포지셔닝에 성공했다. 부속 브랜드 Madewell은 청년 여성 타깃으로 빠르게 성장했다. LBO 당시 핵심 자산은 브랜드 자체(IP)였으나, 과도한 부채와 온라인 경쟁으로 빠르게 약화됐다.",
    metrics: [
      { label: "LBO EV",             value: "$30억",   sub: "주당 $43.50 현금 합병" },
      { label: "Entry Leverage",     value: "~6.5×",  sub: "Debt/EBITDA at close" },
      { label: "IP 이전 추정 가치",  value: "$250M",  sub: "2016년 Trap Door 이전 시" },
      { label: "파산 당시 부채",     value: "$17억",  sub: "2020년 Chapter 11 기준" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue:         2274,
        cogs:            1180,
        grossProfit:     1094,
        sga:             712,
        operatingIncome: 382,
        ebitda:          447,
      },
      {
        year: "FY2015",
        revenue:         2474,
        cogs:            1347,
        grossProfit:     1127,
        sga:             813,
        operatingIncome: 314,
        ebitda:          398,
      },
      {
        year: "FY2019",
        revenue:         2320,
        cogs:            1365,
        grossProfit:     955,
        sga:             892,
        operatingIncome: 63,
        ebitda:          210,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2019는 파산 1년 전. EBITDA $2.1억인데 연 이자 ~$1.5억 → ICR 1.4×. IP 이전 후 담보 가치 감소 상태. 'Trap Door' 이전 효과로 채권자 담보가 실질적으로 희석된 시점.",
  },

  dealStructure: {
    body: "TPG·레너드 그린이 J.Crew 전체 지분을 주당 $43.50 현금으로 매수하는 Go-Private LBO. 상장폐지 후 Chinos Holdings, Inc.가 지주사로 기능했다. 2016년 IP Trap Door 이전: J.Crew 상표권이 Chinos Holdings의 케이맨 자회사인 Chinos Intermediate Holdings A LLC로 이전됐고, 이 자회사는 IP를 담보로 새 대출 가능 구조가 됐다.",
    preOwnership: {
      nodes: [
        { id: "tpg",    label: "TPG 캐피탈",        sub: "PE 펀드 (~70%)",  type: "fund"   },
        { id: "lg",     label: "Leonard Green",      sub: "PE 펀드 (~30%)",  type: "fund"   },
        { id: "public", label: "공개주주",            sub: "NYSE: JCG",       type: "public" },
        { id: "jcrew",  label: "J.Crew Group",       sub: "패션 리테일",     type: "target" },
      ],
      edges: [
        { from: "public", to: "jcrew", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "tpg-p",    label: "TPG (~70%)",        sub: "에쿼티",          type: "fund"   },
        { id: "lg-p",     label: "Leonard Green",     sub: "에쿼티",          type: "fund"   },
        { id: "chinos",   label: "Chinos Holdings",   sub: "지주사 (비상장)", type: "entity" },
        { id: "jcrew-p",  label: "J.Crew Group",      sub: "운영법인",        type: "entity" },
        { id: "cayman",   label: "케이맨 자회사",     sub: "J.Crew IP 보유",  type: "entity" },
      ],
      edges: [
        { from: "tpg-p",   to: "chinos",  label: "~70%" },
        { from: "lg-p",    to: "chinos",  label: "~30%" },
        { from: "chinos",  to: "jcrew-p", label: "100%" },
        { from: "chinos",  to: "cayman",  label: "IP 이전 (2016)" },
      ],
    },
    keyTerms: [
      { label: "인수 방식",        value: "Go-Private LBO",            accent: true  },
      { label: "인수 가격",        value: "주당 $43.50",                accent: false },
      { label: "에쿼티",           value: "$900M (~30%)"                              },
      { label: "레버리지드론",     value: "$21억 (~70%)",              accent: false },
      { label: "IP Trap Door",    value: "2016년 케이맨 자회사 이전",  accent: true  },
      { label: "이전된 IP 가치",   value: "추정 ~$250M",                accent: true  },
      { label: "파산 신청",        value: "2020년 5월 Chapter 11",     accent: true  },
    ],
  },

  advisors: {
    body: "TPG는 패션 리테일 전문 자문단을 구성했다. Trap Door 이전 시에는 LBO 계약서의 허점을 활용하기 위한 법률 자문이 핵심이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "TPG / Leonard Green 컨소시엄",
        initials: "TPG",
        bg: "bg-purple-800",
        advisors: [
          { firm: "Credit Suisse",    role: "LBO 인수금융 주선",    roleType: "financial", note: "TLB 북러너" },
          { firm: "Goldman Sachs",    role: "재무 자문",             roleType: "financial", note: "" },
          { firm: "Simpson Thacher",  role: "법률 자문 (LBO)",       roleType: "legal",     note: "" },
          { firm: "Skadden Arps",     role: "법률 자문 (IP 이전)",   roleType: "legal",     note: "2016 Trap Door 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "J.Crew 이사회",
        initials: "JCR",
        bg: "bg-rose-600",
        advisors: [
          { firm: "Lazard",            role: "재무 자문", roleType: "financial", note: "" },
          { firm: "Cleary Gottlieb",   role: "법률 자문", roleType: "legal",     note: "" },
        ],
      },
    ],
  },

  valuation: {
    body: "$43.50/주는 비영향 주가 대비 약 14% 프리미엄이었다. EV/EBITDA 6.7×은 패션 리테일 LBO 적정 배수였으나, 온라인 패션 경쟁과 소비 트렌드 변화를 충분히 반영하지 못했다는 비판이 있다. 핵심 가치 드라이버는 브랜드 IP였고, 바로 그 IP가 이후 Trap Door로 빠져나갔다.",
    rows: [
      { item: "에쿼티 가치",       val: "$1.8B",  note: "주당 $43.50 × 발행주식 약 4,100만 주", accent: false },
      { item: "기존 순차입금",     val: "+$1.2B", note: "기존 J.Crew 부채",                     accent: false },
      { item: "총 기업 가치",      val: "$30억",  note: "",                                      accent: true  },
      { item: "Entry EBITDA",     val: "$447M",  note: "FY2011 기준",                           accent: false },
      { item: "EV/EBITDA",        val: "6.7×",   note: "패션 리테일 LBO 적정 배수",             accent: false },
      { item: "핵심 자산 IP 가치", val: "~$250M", note: "2016년 Trap Door 이전 당시 추정치",    accent: true  },
    ],
    disclaimer: "수치는 공개 정보 기반 추정치.",
  },

  rationale: {
    buyer: {
      title: "TPG / Leonard Green 입장",
      initials: "TPG",
      bg: "bg-purple-800",
      points: [
        "J.Crew 브랜드와 Mickey Drexler 경영 철학에 대한 신뢰 — 프리미엄 포지셔닝 유지 가능",
        "Madewell 고성장 브랜드 확장 잠재력 — 별도 IPO 가능성",
        "카탈로그→디지털 전환 중인 리테일 모델의 고객 충성도 자산화",
        "비용 구조 최적화와 창고·물류 개선으로 EBITDA 마진 개선",
      ],
    },
    seller: {
      title: "J.Crew 주주 입장",
      initials: "JCR",
      bg: "bg-rose-600",
      points: [
        "비영향 주가 대비 +14% 현금 프리미엄",
        "온라인 패션 경쟁 심화 불확실성 회피",
        "mickey Drexler CEO와 PE 파트너십으로 경영 연속성 확보",
        "공개 기업의 분기 실적 압박 탈피",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2021년 (재건 완료)",
    body: "J.Crew LBO는 레버리지드론 시장에서 'Trap Door 이전'이라는 새로운 용어를 탄생시켰다. 담보 자산의 핵심인 IP가 계약서의 허점(투자 바스켓)을 통해 채권자 담보 밖으로 나가는 구조는 이후 수많은 LBO 계약서 협상에서 채권자들이 강화된 IP 이전 제한 조항을 요구하는 직접적인 계기가 됐다.",
    overallVerdict: "PE 에쿼티 손실 + 채권자 IP 담보 공동화 — 계약서 허점의 극단적 사례",
    positives: [
      "Madewell 브랜드 성장 — J.Crew 파산 이후에도 독립 브랜드로 강세",
      "2020 Chapter 11 이후 비교적 빠른 재건 — 디지털 집중 전략으로 재출발",
      "J.Crew 브랜드 자체는 생존 — 인지도 유지",
    ],
    risks: [
      "채권자 원금 대비 70-80센트 수준 회수 — IP 담보 공동화 효과",
      "Trap Door 이전 이후 모든 LBO 계약서에서 'IP 이전 제한 강화' 트렌드 시작",
      "TPG 에쿼티 대부분 소멸",
      "오프라인 리테일 투자에 대한 PE 신중론 강화",
    ],
    editorNote: "J.Crew Trap Door는 레버리지드론의 '바스켓(Basket)' 조항이 얼마나 중요한지를 극명하게 보여준다. '투자 바스켓'을 통한 IP 이전이 계약서상 허용됐지만, 그것이 채권자 담보를 사실상 공동화시켰다. 이후 채권자들은 IP를 Restricted Subsidiary에 포함시키고, IP 이전 시 채권자 동의를 요구하는 조항을 표준화했다. 이 딜 하나가 레버리지드론 계약서 협상 관행을 영구적으로 바꿨다.",
  },

  tombstone: {
    acquirerInitials: "TPG",
    acquirerBg: "bg-purple-800",
    targetInitials: "JCR",
    targetBg: "bg-rose-600",
    acquirerName: "TPG / Leonard Green & Partners",
    targetName: "J.Crew Group, Inc.",
    dealTitle: "J.Crew Go-Private LBO",
    dealSize: "$30억",
    dealSizeUSD: "$3.0bn",
    evEbitda: "6.7×",
    closeDate: "2011년 3월",
  },

  sources: [
    { id: 1, text: "J.Crew Group (2010). Agreement and Plan of Merger — TPG / Leonard Green. November 23, 2010." },
    { id: 2, text: "J.Crew Group (2020). Chapter 11 Voluntary Petition. May 4, 2020." },
    { id: 3, text: "Moody's Investors Service (2016). J.Crew Group — Trap Door IP Transfer Analysis. 2016." },
    { id: 4, text: "FT (2017). J.Crew's $250M Brand Transfer Opens New Era of Creditor-Debtor Conflict. 2017." },
    { id: 5, text: "Bloomberg Law (2016). J.Crew Creditors Challenge Brand Transfer in Demand Letters. 2016." },
    { id: 6, text: "S&P LCD (2017). Covenant Review: J.Crew IP Transfer Implications for Leveraged Loans." },
    { id: 7, text: "Harvard Law School Forum on Corporate Governance (2018). J.Crew and the New Era of Covenant Drafting." },
    { id: 8, text: "WSJ (2020). J.Crew Files for Bankruptcy. May 4, 2020." },
  ],

  seo: {
    title: "J.Crew Trap Door — 레버리지드론 IP 이전 코비넌트 허점 완전 분석",
    description: "2016 J.Crew IP Trap Door 이전. 케이맨 자회사로 상표권 $250M 이전, 채권자 담보 공동화, 코비넌트 바스켓 허점. 레버리지드론 계약서를 바꾼 사건 완전 해부.",
    keywords: [
      "J.Crew", "Trap Door", "IP 이전", "레버리지드론 코비넌트", "바스켓 조항",
      "담보 공동화", "챕터11", "TPG LBO", "LevFin covenants", "leveraged loan",
      "J.Crew bankruptcy", "covenant basket", "IP transfer",
    ],
  },

  concepts: [
    {
      term: "Trap Door (트랩 도어)",
      href: "/market-101/levfin-covenants",
      description: "신용계약의 허점(주로 투자 바스켓)을 활용해 핵심 자산을 담보 범위 밖 자회사로 이전하는 행위. J.Crew의 $250M IP 이전이 이 용어를 탄생시켰다.",
    },
    {
      term: "투자 바스켓 (Investment Basket)",
      href: "/market-101/levfin-covenants",
      description: "채무자가 자회사에 투자할 수 있는 허용 한도. J.Crew는 이 바스켓을 통해 IP를 케이맨 자회사에 '투자'하는 방식으로 이전했다.",
    },
    {
      term: "담보 공동화 (Collateral Stripping)",
      href: "/market-101/levfin-covenants",
      description: "채권자의 담보 범위에서 핵심 자산을 의도적으로 제거하는 행위. J.Crew Trap Door가 이 개념의 대표 사례.",
    },
    {
      term: "비담보 자회사 재분류",
      href: "/market-101/levfin-covenants",
      description: "Restricted Subsidiary(담보 대상)를 Unrestricted Subsidiary(담보 제외)로 재분류하는 조항. J.Crew와 카이사르 모두 이 메커니즘을 활용했다.",
    },
  ],

  faq: [
    {
      q: "J.Crew의 Trap Door 이전이란 정확히 무엇인가요?",
      a: "2016년 J.Crew는 상표권·도메인·기타 지적재산권(추정 가치 ~$250M)을 케이맨제도의 자회사 'Chinos Intermediate Holdings A'로 이전했습니다. 이 자회사는 기존 TLB 채권자의 담보 범위(Restricted Subsidiary) 밖에 있었기 때문에, 이전 후 채권자들은 더 이상 J.Crew 브랜드에 대한 담보권을 주장할 수 없었습니다.",
    },
    {
      q: "J.Crew가 이 이전을 가능하게 한 계약서 조항은 무엇인가요?",
      a: "신용계약의 '투자 바스켓(Investment Basket)' 조항이 핵심이었습니다. 이 조항은 J.Crew가 자회사에 일정 금액까지 투자할 수 있게 허용했는데, J.Crew는 IP를 케이맨 자회사에 '투자'하는 방식으로 해석했습니다. 채권자들은 이것이 계약서의 정신을 위반한다고 주장했지만, 조항의 문언상으로는 허용 가능한 구조였습니다.",
    },
    {
      q: "이 사건이 레버리지드론 시장에 미친 영향은?",
      a: "J.Crew 이후 레버리지드론 투자자들은 ① IP를 Restricted Subsidiary에 명시적으로 포함시키는 조항, ② IP 이전 시 채권자 동의 요건, ③ '트랩 도어 방지(Trap Door Prevention)' 조항을 표준으로 요구하게 됐습니다. 레버리지드론 시장 관행을 영구적으로 바꾼 사건입니다.",
    },
    {
      q: "J.Crew 채권자들은 Trap Door 이전에 어떻게 대응했나요?",
      a: "채권자들은 2016년 이전 직후 J.Crew에 이의 서한(Demand Letter)을 보냈지만, 계약서 문언상 이전을 막을 법적 근거가 약했습니다. 이후 파산 절차에서 일부 회수를 협상했으나, IP가 담보에서 제외된 상태이므로 회수율은 제한적이었습니다. 사전 계약서 조항의 중요성을 극명하게 보여준 사례입니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "Trap Door — 계약서 바스켓 조항이 핵심 담보를 어떻게 증발시키는가",
    body: "J.Crew Trap Door는 레버리지드론 계약서에서 '바스켓(Basket)' 조항이 얼마나 치명적인 허점이 될 수 있는지를 보여준다. TLB 채권자들은 J.Crew 브랜드 IP를 암묵적 담보로 기대했지만, 투자 바스켓 조항을 통해 $250M IP가 케이맨 자회사로 이전됐다. 이 딜은 LevFin 애널리스트들이 '담보 패키지의 완전성(Collateral Package Completeness)'을 신용 분석의 핵심으로 보게 만든 사건이다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$1.5B",
        rate: "LIBOR + 325bp",
        maturity: "8년",
        seniority: "senior-secured",
        pct: 50,
        color: "bg-amber-500",
      },
      {
        name: "Senior Notes",
        amountDisplay: "$500M",
        rate: "Fixed 8.125%",
        maturity: "8년",
        seniority: "senior-unsecured",
        pct: 17,
        color: "bg-orange-500",
      },
      {
        name: "PIK Toggle Notes",
        amountDisplay: "$200M",
        rate: "Fixed 8.875% (현금) / 9.625% (PIK)",
        maturity: "8년",
        seniority: "subordinated",
        pct: 7,
        color: "bg-red-500",
      },
      {
        name: "Revolver",
        amountDisplay: "$150M",
        rate: "LIBOR + 275bp",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 5,
        color: "bg-amber-400",
      },
      {
        name: "에쿼티 (TPG + LG + 경영진)",
        amountDisplay: "$900M",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 21,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "IP 이전 가치",        value: "$250M",  sub: "케이맨 자회사 이전 IP (2016)",       isAlert: true  },
      { label: "투자 바스켓 활용",    value: "합법",   sub: "계약서 문언상 허용된 이전 구조",      isAlert: false },
      { label: "TLB 회수율",          value: "~$0.75", sub: "파산 후 원금 대비 75센트 추정",       isAlert: false },
      { label: "담보 공동화 영향",    value: "-$250M", sub: "IP 제외 후 담보 가치 하락 추정",      isAlert: true  },
    ],
    lessons: [
      {
        icon: "🚪",
        title: "바스켓 = 허용된 허점 — 크기와 사용처를 확인하라",
        body: "투자 바스켓은 원래 자회사 성장 투자를 허용하기 위한 조항이지만, 악용 시 핵심 담보를 통째로 제거하는 통로가 된다. LevFin 분석 시 '바스켓 한도 × 현재 가용량 × 어떤 자산을 이전할 수 있는가'를 반드시 확인해야 한다.",
      },
      {
        icon: "🔍",
        title: "IP = 담보의 영혼 — 명시적으로 Restricted에 포함시켜야 한다",
        body: "J.Crew 이후 LevFin 투자자들은 브랜드·특허·소프트웨어 등 IP를 Restricted Subsidiary에 명시적으로 포함시키고, IP 이전 시 채권자 동의를 요구하는 조항을 표준으로 넣게 됐다. '암묵적 담보'는 담보가 아니다 — 계약서에 명시되지 않은 담보는 없는 것이다.",
      },
      {
        icon: "📝",
        title: "계약서 드래프팅이 수익률을 결정한다",
        body: "J.Crew TLB 투자자들의 손실은 포트폴리오 운용 실패가 아니라 계약서 드래프팅 실패였다. 투자 바스켓의 IP 이전 허용 범위를 제한하는 한 줄의 조항이 수억 달러를 지켰을 것이다. LevFin에서 '계약서 분석'은 '재무 모델링'만큼 중요한 역량이다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-covenants",
        chapterNum: "Ch.3",
        title: "코비넌트 & 투자자 보호",
        whyRelevant: "투자 바스켓 허점, Trap Door 방지 조항, IP 담보 명시 관행의 탄생",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실채권 & 채무 재조정",
        whyRelevant: "IP 담보 공동화 후 Chapter 11에서 채권자 회수 전략",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "주요 케이스스터디",
        whyRelevant: "레버리지드론 계약서 관행을 영구히 바꾼 Trap Door 사례",
      },
    ],
  },
};

export default deal;
