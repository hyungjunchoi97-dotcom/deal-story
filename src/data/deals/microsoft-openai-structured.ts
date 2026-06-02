/**
 * Microsoft × OpenAI 구조화 투자 — $13B+ (2019~2023)
 * 지분이 아닌 [Capped Profit Interest], OpenAI LP의 비대칭 수익권을 인수한 거래.
 * 비영리 모회사 + 영리 LP + 캡드 프로핏 + Microsoft 49% 의 4중 자본 구조,
 * 현대 AI 산업에서 가장 정교한 전략 투자 사례.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "microsoft-openai-structured",
  title: "Microsoft가 OpenAI에 $13B+를 꽂은 방법, 지분이 아니라 [Capped Profit Interest]",
  subtitle:
    "$1B (2019) → $10B (2023) 누적 $13B+ · Azure 독점 클라우드 + 49% 영리 LP 이익권 · 100배 캡 도달 시 비영리로 회수 · 이사회 의석 없이 거버넌스 영향력",
  category: "ma",
  industry: "AI / Cloud Computing / Strategic Investment",
  country: "미국",
  announcedAt: "2019-07-22",
  closedAt: "2023-01-23",
  announcedDisplay: "2019년 7월 22일 (첫 $1B 발표)",
  closedDisplay: "2023년 1월 23일 ($10B 멀티이어 확장 발표)",
  readingMinutes: 17,
  tags: [
    "Microsoft",
    "OpenAI",
    "Capped Profit",
    "Azure",
    "AI",
    "Strategic Investment",
    "Sam Altman",
    "Satya Nadella",
    "CMA",
    "비영리 + LP 하이브리드",
    "Compute Commitment",
    "Governance Without Board Seat",
  ],
  excerpt:
    "2019년 7월 22일, Microsoft는 OpenAI에 $1B 투자를 발표했다. 2023년 1월 23일에는 [멀티이어, 멀티빌리언] 확장 투자를 공식화하며 보도된 누적 규모는 $13B에 이르렀다. 그러나 이 거래의 진짜 혁신은 [규모]가 아니라 [구조]다. Microsoft는 OpenAI의 비영리 모회사(OpenAI Inc) 지분도, 영리 자회사(OpenAI LP)의 일반 지분도 인수하지 않았다. 대신 [OpenAI LP의 이익에 대한 100배 캡이 걸린 수익권(Capped Profit Interest)]을 사들였다. 투자 원금의 약 100배까지는 LP 이익의 49%를 가져가고, 그 캡에 도달하면 잔여 이익은 모두 비영리 모회사로 회수되는 비대칭 구조. 거기에 Azure 독점 클라우드 공급권과 멀티이어 컴퓨트 약정이 함께 묶이면서, [현금 + 컴퓨트 + 거버넌스 영향력]을 모두 한 거래에 패키징한 현대 AI 전략 투자 사상 가장 정교한 사례로 기록됐다.",

  acquirer: { initials: "MSFT", bg: "bg-blue-600", label: "Microsoft Corporation" },
  target: { initials: "OAI", bg: "bg-emerald-700", label: "OpenAI (비영리 OpenAI Inc + 영리 OpenAI LP)" },

  background: [
    "OpenAI는 2015년 12월 샘 알트만, 일론 머스크, 그렉 브록만, 일리야 수츠케버 등이 [\"인류 전체에 이익이 되는 안전한 범용 인공지능(AGI) 개발\"] 을 사명으로 내걸고 설립한 비영리 연구소(OpenAI Inc) 였다. 초기 약 $1B 의 기부 약정이 있었으나 실제 납입 규모는 그보다 작았고, 거대 모델 학습에 필요한 컴퓨트 비용이 폭증하면서 [비영리 기부 모델만으로는 GPT급 모델을 더 이상 학습시킬 수 없다] 는 현실이 빠르게 드러났다.",
    "[2019년 3월, OpenAI LP 출범, 비영리 + 영리 하이브리드 구조 채택.] OpenAI는 비영리 모회사 OpenAI Inc 아래에 자회사 [OpenAI LP] 라는 영리 비히클을 신설했다. 다만 일반적인 영리 자회사가 아니라 [Capped Profit Company] 라는 특이한 구조, LP 투자자가 가져갈 수 있는 이익에 [일정 배수의 캡] 을 걸고, 그 캡을 초과하는 이익은 모두 비영리 모회사 OpenAI Inc로 돌려보내는 형태였다. 사명(\"인류 전체에 이익\")과 자본 조달 현실을 동시에 잡기 위한 하이브리드. 마이크로소프트는 이 구조에 들어갈 [첫 대규모 외부 자본] 자리를 협상한다.",
    "[2019년 7월 22일, Microsoft의 첫 $1B 투자.] 사티아 나델라(Microsoft CEO) 와 샘 알트만(OpenAI CEO) 은 동시에 보도자료를 내고 Microsoft가 OpenAI에 $1B 을 투자하고 OpenAI 의 [독점 클라우드 파트너] 가 되어 Azure 위에서 모델 학습·추론 인프라를 제공한다고 밝혔다. 투자 자금의 상당 부분이 [Azure 컴퓨트 크레딧] 형태였다는 보도가 이어졌고, 시장은 이를 \"현금 + 인프라 = 동급의 자본\" 으로 해석했다. Microsoft는 GPT-3 학습에 필요한 슈퍼컴퓨터 클러스터를 Azure 안에 구축해 OpenAI에 제공.",
    "[2021년 비공개 확장 + 2023년 1월 $10B 멀티이어 확장.] 2020~2022년 사이 Microsoft는 추가 투자 라운드를 비공개로 진행한 것으로 보도됐고, 2022년 11월 ChatGPT 출시로 OpenAI가 글로벌 일반 사용자 시장의 중심에 서면서 협상의 추가 가속화가 일어났다. 2023년 1월 23일 Microsoft는 [\"멀티이어, 멀티빌리언 달러 투자 확장\"] 을 공식 발표했고, FT·Bloomberg 등 매체가 추정한 새 약정 규모는 약 $10B, 누적은 약 $13B 안팎으로 보도됐다. 이 시점부터 Microsoft는 OpenAI의 [Capped Profit Interest 49%] 와 [Azure 독점 클라우드 + 멀티이어 컴퓨트 약정] 을 동시에 보유한 주체가 된다.",
    "[2023년 11월 샘 알트만 해임 사태와 거버넌스의 본질.] 2023년 11월 17일 OpenAI 비영리 모회사 이사회는 알트만을 해임한다. Microsoft는 형식적으로는 OpenAI Inc 이사회에 의석이 없었다. 그러나 사티아 나델라는 96시간 안에 알트만을 Microsoft에 \"새 AI 연구 부서 책임자\" 로 영입하겠다고 발표했고, OpenAI 임직원 약 700명이 [\"알트만이 돌아오지 않으면 우리도 Microsoft로 이동하겠다\"] 는 공개 서한에 서명했다. 결과적으로 알트만은 4일 만에 OpenAI CEO로 복귀하고 이사회가 재편된다. [이사회 의석 없이도 사실상의 거버넌스 영향력을 행사하는 구조] 가 무엇인지 시장에 정확히 시연된 사건이었다. 이후 Microsoft는 2024년 OpenAI 이사회 옵저버 좌석을 받았다가, 2024년 7월 영국 CMA·EU·미 FTC 의 반독점 검토 압박을 받고 자진 사임. 옵저버 좌석 없이도 본질적 영향력은 유지된다.",
  ],

  dealSummary: {
    dealValueDisplay: "누적 약 $13B+ (2019~2023, 일부 컴퓨트 크레딧 포함 시 $14B 추정)",
    acquirerName: "Microsoft Corporation",
    targetName: "OpenAI (비영리 OpenAI Inc + 영리 OpenAI LP)",
    announcedDisplay: "2019년 7월 22일 (첫 $1B)",
    closedDisplay: "2023년 1월 23일 ($10B 멀티이어 확장)",
    country: "US",
  },

  executiveSummary: [
    "[지분이 아닌 Capped Profit Interest] Microsoft는 OpenAI Inc(비영리) 지분이나 OpenAI LP(영리) 일반 지분이 아닌 [OpenAI LP의 이익에 대한 49% 캡드 프로핏 이익권] 을 인수. 투자 원금의 약 100배가 캡, 캡 초과 이익은 모두 비영리 모회사로 회수",
    "[2019년 $1B → 2023년 $10B → 누적 $13B+] 2019년 7월 22일 첫 $1B 발표, 2021년 비공개 확장, 2023년 1월 23일 [멀티이어, 멀티빌리언] $10B 확장 공식화. 보도 기준 누적 약 $13B, Azure 컴퓨트 크레딧 가치 포함 시 $14B 추정",
    "[Azure 독점 클라우드 + 멀티이어 컴퓨트 약정] OpenAI의 모든 모델 학습·추론을 Azure 위에서 수행하는 [exclusive cloud provider] 약정 (보도 기준 ~2030년대까지). Microsoft는 OpenAI 전용 슈퍼컴퓨터를 Azure 안에 구축, $50B+ AI 인프라 투자가 OpenAI 워크로드를 지탱",
    "[이사회 의석 없는 거버넌스 영향력] 2019~2023년 내내 Microsoft는 OpenAI Inc 이사회에 의석 없음. 그러나 2023년 11월 알트만 해임 사태 96시간 동안 Microsoft가 실질적 결정권자로 등장 → 알트만 복귀 + 이사회 재편. 의석 없는 거버넌스 영향력의 시연",
    "[2024년 7월 옵저버 좌석 자진 포기] 알트만 사태 후 Microsoft가 받은 OpenAI 이사회 옵저버 좌석을 영국 CMA·EU·미 FTC 반독점 검토 압박으로 2024년 7월 자진 사임. 형식적 거버넌스 후퇴, 실질 영향력 유지",
    "[100배 캡 = 잠재 ~$1.3T 회수 한도] $13B 투자 × 100배 = 약 $1.3T 가 캡드 프로핏 이익권의 이론 상한. 도달 시 모든 잔여 이익은 비영리 모회사로 회수, 자본 조달 현실과 비영리 사명을 동시에 지키기 위한 비대칭 구조",
    "[2024~2025년 관계 재협상] OpenAI의 영리 전환 검토(potential conversion to for-profit)와 함께 Microsoft가 캡드 프로핏 조건·Azure 독점 조건·지분 전환 비율을 전면 재협상 중. 본 거래 구조가 차세대 AI 자본 거래의 템플릿이자 압력 시험대로 작동",
    "[현대 AI 산업 가장 정교한 전략 투자] 단순한 지분 투자도, 단순한 클라우드 계약도 아닌 [현금 + 컴퓨트 + 거버넌스 영향력 + 비영리 사명 보존] 을 한 거래에 패키징. 본 거래 이후 Anthropic-Google/Amazon, xAI-Tesla, Mistral-MSFT 등 후속 거래의 구조 참조점이 됨",
  ],

  industryOverview: {
    body: "2019~2023년 글로벌 AI 산업은 [거대 언어 모델(LLM)의 학습 비용이 단일 회사 R&D 예산을 넘어서는] 단계로 진입했다. GPT-3(2020) 학습 비용은 약 $4M~$12M, GPT-4(2023) 는 $100M 안팎, 최신 프런티어 모델은 단일 학습 런만 $500M 을 넘는다는 시장 추정이 일반화. 결과적으로 [모델사 + 하이퍼스케일러 클라우드] 의 짝짓기가 불가피해졌고, 비전통적 자본 구조가 본격 등장. Microsoft × OpenAI는 그 정점이자 출발점, 그리고 Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection·Mistral 등 후속 거래의 구조 참조점이 된다.",
    metrics: [
      { label: "Microsoft 누적 OpenAI 약정",         value: "약 $13B+",        sub: "보도 기준, 컴퓨트 크레딧 포함 시 $14B 추정" },
      { label: "Microsoft 캡드 프로핏 이익권 지분",   value: "49%",            sub: "OpenAI LP 이익의 49%, 100배 캡 도달 시까지" },
      { label: "OpenAI 추정 밸류에이션 (2023)",      value: "약 $86B",         sub: "2023년 텐더 오퍼 기준" },
      { label: "OpenAI 추정 밸류에이션 (2024)",      value: "약 $157B",        sub: "2024년 후반 라운드 기준" },
    ],
    subBody:
      "Microsoft가 본 거래 이후 발표한 AI 인프라 투자는 누적 $50B 을 넘어섰고, 그 대부분이 사실상 OpenAI 워크로드 지원에 묶여 있다. Anthropic은 Google과 Amazon 양 진영에서 누적 $13B+ 를 받았고(Amazon $8B 약정, Google $2B 약정 등), xAI는 Tesla·SpaceX와의 상호 거래로 인프라를 확보. 본 거래는 [AI 모델사가 단일 하이퍼스케일러에 결착되는] 산업 구조의 출발점이 됐다.",
    players: [
      { name: "Microsoft",          role: "본 거래 투자자, Azure 독점 클라우드 공급권 보유, 누적 약 $13B+ 약정" },
      { name: "OpenAI Inc",         role: "비영리 모회사, 이사회가 사명(safety·benefit to humanity) 결정권 보유" },
      { name: "OpenAI LP",          role: "영리 자회사(Capped Profit Company), Microsoft 이익권 49% 의 발행 주체" },
      { name: "Sam Altman",         role: "OpenAI CEO, 2023.11 해임 → 96시간 만에 복귀, Microsoft 거버넌스 영향력의 핵심 채널" },
      { name: "Satya Nadella",      role: "Microsoft CEO, 본 거래 전 단계 협상 주도, 알트만 사태 시 사실상 결정권자로 등장" },
      { name: "Anthropic",          role: "OpenAI 핵심 경쟁자, Google·Amazon 양 진영에서 누적 $13B+ 약정 확보" },
      { name: "Google DeepMind",    role: "Anthropic 투자자 + 자체 Gemini 모델 운영, Microsoft × OpenAI 진영의 직접 경쟁자" },
      { name: "UK CMA / EU / FTC",  role: "Microsoft × OpenAI 관계의 반독점 검토 진행, 2024년 옵저버 좌석 자진 사임 압박" },
    ],
  },

  companyOverview: {
    targetName: "OpenAI (비영리 OpenAI Inc + 영리 OpenAI LP)",
    body: "OpenAI는 2015년 12월 11일 샘 알트만, 일론 머스크, 그렉 브록만, 일리야 수츠케버, 존 슐먼, 보이치에흐 자렘바 등 6명이 공동 창업한 미국의 AI 연구·개발 조직이다. 설립 시점에는 비영리 OpenAI Inc 단일 구조, 2019년 3월 [Capped Profit Company OpenAI LP] 자회사 신설로 [비영리 모회사 + 영리 자회사] 의 하이브리드 구조로 전환. 핵심 제품은 GPT 시리즈 (GPT-3 2020, GPT-4 2023, GPT-4o 2024, GPT-5 2025), ChatGPT (2022.11 출시, 2개월 만에 MAU 1억 돌파, 역사상 가장 빠른 소비자 제품 채택), Dall-E (이미지), Sora (비디오), Codex (코드). 본 거래 시점 직원 수는 2019년 약 100명 → 2023년 약 1,000명 → 2025년 약 3,500명 안팎으로 급팽창. 매출은 ChatGPT Plus·Enterprise·API 사업으로 2023년 약 $1.6B → 2024년 약 $3.7B → 2025년 약 $10B (런레이트) 로 보도됨.",
    metrics: [
      { label: "설립",                value: "2015년 12월 11일",   sub: "샘 알트만·일론 머스크 등 6인 공동 창업" },
      { label: "본사",                value: "샌프란시스코",        sub: "Pioneer Building, Mission District" },
      { label: "직원 수 (2025 추정)",   value: "약 3,500명",        sub: "2019년 100명 → 2023년 1,000명 → 2025년 3,500명" },
      { label: "추정 매출 (2024)",      value: "약 $3.7B",         sub: "ChatGPT Plus + Enterprise + API" },
      { label: "추정 밸류에이션 (2024)", value: "약 $157B",         sub: "후반 라운드 기준, 2025년 $300B+ 루머" },
    ],
    financials: [
      { year: "FY2020", revenue: 0,    cogs: 0,   grossProfit: 0,   sga: 0,   operatingIncome: 0,    ebitda: 0 },
      { year: "FY2021", revenue: 28,   cogs: 50,  grossProfit: -22, sga: 80,  operatingIncome: -102, ebitda: -95 },
      { year: "FY2022", revenue: 200,  cogs: 250, grossProfit: -50, sga: 200, operatingIncome: -250, ebitda: -220 },
      { year: "FY2023", revenue: 1600, cogs: 2400, grossProfit: -800, sga: 700, operatingIncome: -1500, ebitda: -1300 },
      { year: "FY2024", revenue: 3700, cogs: 5400, grossProfit: -1700, sga: 1400, operatingIncome: -3100, ebitda: -2800 },
    ],
    financialsNote: "단위: USD 백만 ($M) | 매출·비용 모두 보도 기반 추정치, OpenAI는 비공개 회사로 공식 재무제표 미공개. Cogs는 주로 컴퓨트 비용(Azure 사용료) 으로 추정. 본 거래의 Azure 컴퓨트 크레딧이 cogs 의 상당 부분을 상쇄. 출처: The Information, FT, Bloomberg, NYT 보도 종합.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "본 거래의 핵심은 Microsoft가 [OpenAI Inc 비영리 모회사 지분도, OpenAI LP 영리 자회사 일반 지분도 인수하지 않고] OpenAI LP가 발행한 [Capped Profit Interest] 라는 비대칭 수익권을 인수했다는 점이다. 구조를 풀어 쓰면 [① OpenAI Inc(비영리 501(c)(3))가 최상단], [② OpenAI Inc가 OpenAI LP(영리 캡드 프로핏 회사)의 GP·지배 의결권 보유], [③ OpenAI LP는 LP 투자자(직원·VC·Microsoft) 에게 이익권을 분배하되, 각 투자자는 본인 투자 원금 × 약 100배까지만 이익을 가져갈 수 있는 캡 적용], [④ Microsoft는 LP 이익의 49% 를 100배 캡 도달 시까지 받고, 캡 도달 후에는 잔여 이익이 모두 비영리 모회사로 회수] 의 4중 계층 구조. 거기에 [Azure 독점 클라우드 + 멀티이어 컴퓨트 약정] 이 별도 상업 계약으로 묶이고, [이사회 의석 없음, 옵저버 좌석은 2024년 자진 사임] 의 거버넌스 합의가 추가된다. 자본 + 컴퓨트 + 거버넌스 영향력 + 비영리 사명 보존을 한 거래에 패키징한 사상 가장 정교한 AI 전략 투자.",
    preOwnership: {
      nodes: [
        { id: "openai_inc_pre", label: "OpenAI Inc (비영리)",   sub: "501(c)(3), 2015년 설립, 이사회 사명 결정권",  type: "target" },
        { id: "founders_pre",   label: "창업자 + 직원",          sub: "초기 기부 + 옵션 풀",                       type: "entity" },
        { id: "msft_pre",       label: "Microsoft",             sub: "잠재 자본·컴퓨트 공급 후보",                type: "acquirer" },
      ],
      edges: [
        { from: "founders_pre", to: "openai_inc_pre", label: "초기 기부·합류" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "openai_inc",  label: "OpenAI Inc (비영리 모회사)",     sub: "501(c)(3), 이사회가 사명 결정권 보유",       type: "target" },
        { id: "openai_lp",   label: "OpenAI LP (Capped Profit 자회사)", sub: "영리 자회사, LP 이익권 발행 주체",         type: "entity" },
        { id: "msft",        label: "Microsoft",                      sub: "LP 이익 49% (100배 캡), Azure 독점",       type: "acquirer" },
        { id: "employees",   label: "직원·창업자 LP 지분",              sub: "보유 옵션·캡드 프로핏 이익권",              type: "entity" },
        { id: "other_lps",   label: "기타 LP (VC·텐더 오퍼 참여자)",     sub: "Khosla·Sequoia·Tiger·Thrive 등",          type: "fund" },
        { id: "azure",       label: "Azure 슈퍼컴퓨터 클러스터",         sub: "OpenAI 전용, $50B+ 인프라 투자",           type: "entity" },
      ],
      edges: [
        { from: "openai_inc",  to: "openai_lp", label: "GP · 의결권 지배" },
        { from: "msft",        to: "openai_lp", label: "Capped Profit Interest 49% (100배 캡)" },
        { from: "employees",   to: "openai_lp", label: "캡드 프로핏 이익권 (옵션 풀)" },
        { from: "other_lps",   to: "openai_lp", label: "캡드 프로핏 이익권 (텐더 오퍼)" },
        { from: "msft",        to: "azure",     label: "$50B+ AI 인프라 투자" },
        { from: "openai_lp",   to: "azure",     label: "독점 클라우드 워크로드 약정" },
      ],
    },
    keyTerms: [
      { label: "투자 형식",               value: "Capped Profit Interest (지분 아님, OpenAI LP 이익권)",     accent: true },
      { label: "누적 약정 규모",           value: "약 $13B+ (보도 기준, 컴퓨트 크레딧 포함 시 $14B 추정)",     accent: true },
      { label: "1차 투자 (2019.7)",       value: "$1B (현금 + Azure 컴퓨트 크레딧 혼합)" },
      { label: "2차 확장 (2021)",          value: "비공개 (수십억 달러 추정)" },
      { label: "3차 확장 (2023.1)",        value: "멀티이어·멀티빌리언, 추정 $10B" },
      { label: "이익권 비율",              value: "OpenAI LP 이익의 49% (캡 도달 시까지)",                    accent: true },
      { label: "프로핏 캡",                value: "투자 원금의 약 100배 (이론 상한 ~$1.3T)",                  accent: true },
      { label: "캡 도달 후 처리",          value: "잔여 이익 전액 OpenAI Inc(비영리) 로 회수" },
      { label: "클라우드 약정",            value: "Azure 독점 클라우드 공급 (보도 기준 ~2030년대 초까지)" },
      { label: "컴퓨트 약정",              value: "멀티이어 컴퓨트 약정 + Microsoft AI 인프라 $50B+ 배치" },
      { label: "OpenAI Inc 이사회 의석",   value: "없음",                                                    accent: true },
      { label: "OpenAI Inc 옵저버 좌석",   value: "2024년 부여 → 2024.7 자진 사임 (CMA·EU·FTC 압박)" },
      { label: "지식재산권",               value: "OpenAI 보유, Microsoft에 광범위 라이선스 (AGI 도달 전까지)" },
      { label: "AGI 클로즈",               value: "OpenAI 이사회가 AGI 도달을 선언하면 Microsoft 권리 종료/축소" },
    ],
  },

  advisors: {
    body: "본 거래는 공개시장 M&A가 아닌 비공개 전략 투자라 자문사 라인업이 거의 공개되지 않았다. Microsoft 측은 인하우스 M&A·기업개발팀과 외부 법무 자문이 주도했고, OpenAI 측은 LP 비히클 설계·캡드 프로핏 구조 설정에 미국 동부 대형 로펌과 자체 법무팀이 참여한 것으로 시장에 알려졌다. 다수 자문사 매핑은 비공식·시장 관측 기반.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Microsoft (투자자)",
        initials: "MSFT",
        bg: "bg-blue-600",
        advisors: [
          {
            firm: "Microsoft Corporate Development / 인하우스",
            role: "재무 자문 (인하우스)",
            roleType: "financial",
            note: "사티아 나델라·CFO 사무국 직속, 캡드 프로핏 이익권 구조·Azure 독점 약정 협상 주도",
          },
          {
            firm: "Simpson Thacher & Bartlett (시장 관측)",
            role: "법무 자문",
            roleType: "legal",
            note: "캡드 프로핏 이익권 LP 구조 + 라이선스·IP 협상 (정확한 매핑은 비공개)",
          },
          {
            firm: "Wilson Sonsini Goodrich & Rosati (시장 관측)",
            role: "법무 자문 (Microsoft 측 IP·테크 트랜잭션)",
            roleType: "legal",
            note: "AGI 정의·기술 라이선스·반독점 검토 대응 (공식 확인 제한)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "OpenAI (피투자자)",
        initials: "OAI",
        bg: "bg-emerald-700",
        advisors: [
          {
            firm: "OpenAI 법무팀 / 인하우스",
            role: "재무·법무 자문 (인하우스)",
            roleType: "financial",
            note: "Brad Lightcap (COO·전 CFO) 주도, 캡드 프로핏 LP 비히클 설계·이익권 분배 정책 직접 협상",
          },
          {
            firm: "Cravath, Swaine & Moore (시장 관측)",
            role: "법무 자문",
            roleType: "legal",
            note: "OpenAI LP 비히클 설계 + 비영리/영리 거버넌스 분리 자문 (정확한 매핑은 비공개)",
          },
          {
            firm: "Latham & Watkins (시장 관측, 후속 라운드)",
            role: "법무 자문 (후속 텐더 오퍼·구조 조정)",
            roleType: "legal",
            note: "2023~2024년 텐더 오퍼·구조 조정 자문, 영리 전환 검토 작업 진행 중",
          },
        ],
      },
    ],
    disclaimer: "주: 본 거래는 비공개 전략 투자로 자문사 공식 발표가 제한적. 매핑은 시장 보도 + 업계 관측 기반이며 일부는 미확인.",
  },

  valuation: {
    body: "본 거래의 [밸류에이션] 은 통상적 M&A 의 EV/EBITDA·P/E 가 아니라 [캡드 프로핏 이익권의 비대칭 페이오프 + Azure 워크로드 가치] 의 합산으로 평가해야 한다. Microsoft는 누적 약 $13B 을 투자해 [① OpenAI LP 이익의 49% 를 약 $1.3T(100배 캡) 까지 가져갈 수 있는 옵션], [② Azure 독점 클라우드 공급권으로 OpenAI 의 멀티이어 컴퓨트 비용 (보도 기준 연 수십억 달러) 을 Azure 매출로 직접 흡수], [③ Microsoft Copilot·Bing·GitHub·Office 전 제품군에 OpenAI 모델 통합 (광범위 라이선스)] 의 세 가지 가치 레이어를 동시에 확보. OpenAI 자체 밸류에이션은 [2023년 텐더 오퍼 기준 약 $86B → 2024년 후반 라운드 약 $157B → 2025년 시장 루머 $300B+] 로 빠르게 상승. 본 거래 시점의 Microsoft 페이오프 기대치를 시장이 이미 상당 부분 가격에 반영하면서, Microsoft 시가총액은 2023년 1월 약 $1.8T → 2024년 말 약 $3.3T 로 확장.",
    rows: [
      { item: "Microsoft 누적 약정",                            val: "약 $13B+",        note: "보도 기준, 컴퓨트 크레딧 포함 시 $14B 추정", accent: true },
      { item: "1차 투자 (2019.7)",                              val: "$1B",             note: "현금 + Azure 컴퓨트 크레딧 혼합" },
      { item: "3차 확장 (2023.1)",                              val: "추정 $10B",       note: "멀티이어·멀티빌리언, FT·Bloomberg 추정" },
      { item: "Microsoft 캡드 프로핏 이익권 비율",              val: "49%",             note: "OpenAI LP 이익의 49%, 캡 도달 시까지",        accent: true },
      { item: "프로핏 캡 (이론 상한)",                          val: "약 $1.3T",        note: "$13B × 100배, 캡 초과 분은 비영리로 회수",     accent: true },
      { item: "OpenAI 추정 밸류에이션 (2023)",                  val: "약 $86B",         note: "2023년 텐더 오퍼 기준" },
      { item: "OpenAI 추정 밸류에이션 (2024)",                  val: "약 $157B",        note: "2024년 후반 라운드" },
      { item: "OpenAI 추정 밸류에이션 (2025 루머)",             val: "$300B+",          note: "2025년 시장 보도" },
      { item: "Microsoft AI 인프라 누적 투자",                  val: "$50B+",           note: "주로 OpenAI 워크로드 지원, Azure 확장",        accent: true },
      { item: "Microsoft 시총 (2023.1 → 2024 말)",              val: "$1.8T → $3.3T",   note: "본 거래 + 코파일럿 확산의 가격 반영" },
    ],
    disclaimer: "주: OpenAI 는 비공개 회사로 공식 재무·밸류에이션 미공개. 수치는 보도·텐더 오퍼·업계 추정 기반. 캡드 프로핏 이론 상한은 Microsoft·OpenAI 공식 공시 (2019.3 블로그) 의 \"100배 캡\" 발언을 누적 약정 규모에 단순 적용한 가설치.",
  },

  rationale: {
    buyer: {
      title: "Microsoft, 왜 지분이 아니라 캡드 프로핏 이익권에 $13B 을 묶었나",
      initials: "MSFT",
      bg: "bg-blue-600",
      points: [
        "[Azure 매출 직접 흡수] 본 거래로 OpenAI 의 모든 모델 학습·추론 비용이 Azure 매출로 직접 잡힘. 사실상 Microsoft가 자기 자신에게 컴퓨트 크레딧을 주고 자기 매출을 만드는 [closed-loop capital]. 2024년 Azure AI 매출만 연 $10B+ 런레이트로 보도",
        "[Microsoft Copilot 전 제품군 모델 통합] Bing Chat·Office Copilot·GitHub Copilot·Windows Copilot·Dynamics·Security Copilot 까지 OpenAI 모델을 광범위 라이선스로 사용. 본 거래 없이는 Microsoft가 자체 모델로 같은 수준 도달에 수년 + 수백억 달러 추가 R&D 필요",
        "[지분이 아닌 이유, 반독점·거버넌스 우회] OpenAI Inc 지분 인수는 [비영리 → 영리 전환 + 반독점] 의 이중 규제 위험을 즉시 트리거. 캡드 프로핏 이익권은 \"우리는 주주가 아니라 LP 이익 수령자\" 라는 형식적 거리를 만들면서도 실질 영향력은 49% 이익권 + 컴퓨트 의존성으로 확보",
        "[100배 캡의 다운사이드 보호] $13B 투자가 $1.3T 까지 회수 가능, 잘되면 100배 업사이드. 잘 안 돼도 OpenAI 가 결국 다른 클라우드를 못 쓰니 Azure 매출은 유지. 보통의 VC 베팅과 달리 [컴퓨트 흡수가 다운사이드 보호 레이어로 작동]",
        "[이사회 의석 없는 거버넌스 영향력] 알트만 사태(2023.11) 가 시연했듯 의석 없이도 [컴퓨트 결착 + 인력 영입 옵션 + 자본 의존도] 만으로 실질 결정권 행사 가능. 옵저버 좌석을 2024.7 자진 사임한 것도 [형식적 거버넌스 후퇴 + 실질 영향력 유지] 의 최적 균형",
        "[차세대 AI 전략 자본 거래의 템플릿 선점] 본 거래 이후 Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection·Mistral 등 모든 후속 거래가 본 구조의 변형. Microsoft는 표준을 먼저 만들어 다음 라운드의 협상 우위 확보",
      ],
    },
    seller: {
      title: "OpenAI, 왜 캡드 프로핏 LP 구조를 만들었나, 왜 Microsoft였나",
      initials: "OAI",
      bg: "bg-emerald-700",
      points: [
        "[비영리 사명과 자본 조달 현실의 동시 충족] 비영리 OpenAI Inc 만으로는 GPT-3 학습 비용도 못 댐. 그러나 일반 영리 전환은 \"인류 전체에 이익\" 사명을 훼손. [Capped Profit Company] 라는 새 구조로 LP 자본을 받되 이익에 100배 캡을 걸어 캡 초과분은 비영리로 회수, 사명과 현실의 동시 충족 시도",
        "[Azure 컴퓨트 약정의 압도적 가치] 현금만이 아니라 [GPT-3·4 학습에 필요한 슈퍼컴퓨터 클러스터를 Azure 안에 즉시 구축] 이 본 거래의 핵심. 다른 어떤 클라우드 (AWS·GCP) 도 당시 OpenAI 가 요구한 학습 규모를 즉시 공급할 수 없었음",
        "[독점 클라우드 약정의 양면] Azure 독점은 OpenAI 입장에서 단기 이점 (즉시 학습 가능) 이지만 장기적으로는 [Microsoft 의존성] 을 만드는 제약. 2024년 이후 OpenAI 가 Oracle·CoreWeave·소버린 클라우드 (UAE G42 등) 와 컴퓨트 다변화 협상에 들어간 배경",
        "[이사회 의석을 안 준 거버넌스 자율성 유지] Microsoft 에 이사회 의석을 안 주면서 OpenAI Inc 이사회가 사명·안전·AGI 정의 결정권을 형식적으로 유지. 알트만 사태(2023.11) 는 이 자율성이 실제로 사용된 (그리고 한계를 노출한) 첫 사례",
        "[직원 LP 이익권을 위한 텐더 오퍼 시장 조성] 캡드 프로핏 LP 구조 덕분에 직원 옵션·이익권에 대한 텐더 오퍼 (2023 $86B, 2024 $157B, 2025 $300B 루머) 가 가능. 비영리 단일 구조였으면 직원 보상이 불가능했을 시장 메커니즘",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "7년이 지난 시점에서 본 거래의 평가는 두 갈래로 갈린다. 첫째, [Microsoft 입장의 평가] 는 거의 \"AI 시대 단일 거래로 가장 큰 가치 창출\" 로 정리되는 분위기. OpenAI 모델이 Bing·Office·GitHub·Windows·Dynamics 전반에 통합되면서 Microsoft 시총이 2023년 1월 약 $1.8T → 2025년 말 약 $3.5T 안팎으로 확장, Azure AI 매출만 연 $10B+ 런레이트. 둘째, [OpenAI 입장의 평가] 는 [영리 전환 압박 + Microsoft 재협상 + 컴퓨트 의존도] 의 세 가지 압력이 동시에 작용 중. 2024~2025년 OpenAI 는 영리 전환 (Public Benefit Corporation 으로의 재편) 을 공식 검토하기 시작했고, 이 과정에서 [Microsoft 의 캡드 프로핏 이익권을 정규 지분으로 어떻게 전환할 것인가] 가 양측 협상의 핵심 의제로 부상. 동시에 OpenAI 는 Oracle·CoreWeave·UAE G42 등과 컴퓨트 다변화 협상에 진입하면서 Azure 독점 약정의 [exclusive] 부분에 균열이 생기는 중. 반독점 측면에서는 영국 CMA 가 2024~2025년 본 거래를 조사 (M&A 정의에 해당하는지) 했고, EU 와 미국 FTC 도 시장 영향 검토 중. 2024년 7월 Microsoft 의 OpenAI 이사회 옵저버 좌석 자진 사임은 이 압박의 첫 번째 가시적 결과. 알트만 사태 (2023.11) 는 본 거래 구조가 [이사회 의석 없이도 실질 거버넌스 영향력 행사 가능] 함을 시연했지만, 동시에 OpenAI Inc 비영리 이사회의 형식적 권한이 실제 행사될 때의 시장 충격 (Microsoft 주가 일시 하락 등) 을 노출했다. 본 거래는 [현대 AI 산업 가장 정교한 전략 투자] 라는 평가와 [향후 5년 내 구조가 부분 재편될 거래] 라는 평가가 동시에 성립하는 상태로 2026년 중반을 맞고 있다.",
    overallVerdict: "Microsoft 입장의 거의 완벽한 거래, OpenAI 입장의 구조 부분 재협상 압력 — 본 거래 구조 자체는 AI 산업 표준 템플릿으로 정착, 단 양측 모두 향후 5년 내 부분 재편 가능성",
    positives: [
      "[Microsoft] Azure AI 매출 연 $10B+ 런레이트 + 시총 $1.8T → $3.5T 확장. 단일 거래로 사상 최대 가치 창출 사례",
      "[OpenAI] ChatGPT MAU 5억+, 매출 2025 런레이트 $10B+, Anthropic·Google 양 진영보다 압도적 사용자 베이스 확보",
      "[캡드 프로핏 구조 자체] AI 모델사가 비영리 사명 + 자본 조달을 동시에 잡는 새 표준 구조 시연. Anthropic·xAI 등 후속 거래의 구조 참조점",
      "[Azure $50B+ AI 인프라] OpenAI 워크로드 지원이 Microsoft 자체 AI 인프라 우위로 환원. 클라우드 시장 점유율 확대",
      "[알트만 사태 96시간 시연] 이사회 의석 없이도 [컴퓨트 + 인력 + 자본] 결착으로 실질 거버넌스 영향력 행사 가능함을 입증",
    ],
    risks: [
      "[OpenAI 영리 전환 시 재협상 압박] OpenAI 가 Public Benefit Corporation 등으로 전환하면 캡드 프로핏 이익권을 정규 지분으로 전환해야 함. 전환 비율 (49% 이익권 → 몇 % 지분) 이 양측 협상의 핵심, 균형이 어디로 기울지 미정",
      "[Azure 독점 약정 균열] 2024~2025년 OpenAI 가 Oracle·CoreWeave·UAE G42 와 컴퓨트 다변화 협상. exclusive 부분이 [first-refusal] 또는 [right-of-first-offer] 로 약화될 가능성",
      "[반독점 검토 진행 중] 영국 CMA 가 본 거래를 M&A 정의로 분류 검토 (2024~2025), EU·미 FTC 도 시장 영향 검토. 옵저버 좌석 자진 사임이 반독점 압박의 첫 가시적 결과",
      "[Microsoft 의 모델 의존성] OpenAI 모델이 GPT-5 이후 경쟁자 (Anthropic Claude·Google Gemini) 와 동급 또는 열위로 평가되면 Microsoft 의 Copilot 사용자 전환 위험",
      "[알트만 사태가 노출한 비영리 이사회 권한] OpenAI Inc 비영리 이사회의 사명 결정권이 다시 발동되면 Microsoft 의 영향력 한계가 재노출될 수 있음. 2023.11 의 96시간이 보여준 잠재 균열",
      "[AGI 정의 조항의 폭탄] 양측 계약에 \"OpenAI 이사회가 AGI 도달을 선언하면 Microsoft 권리 종료/축소\" 조항이 포함된 것으로 보도. AGI 정의 자체가 양측 다툼의 잠재 뇌관",
    ],
    editorNote:
      "본 거래는 \"Microsoft가 OpenAI 지분 49% 를 가졌다\" 는 오해가 일반화될 만큼 시장 인식이 단순화돼 있다. 그러나 실제 구조는 [지분이 아닌 OpenAI LP 이익권 49% + 100배 캡 + 캡 초과 시 비영리로 회수] 의 비대칭 LP 이익권이다. 본 거래의 진짜 의의는 [현금 + 컴퓨트 + 거버넌스 영향력 + 비영리 사명 보존] 을 한 거래에 패키징한 사상 첫 사례라는 점. AI 모델사가 단일 하이퍼스케일러에 결착되는 산업 구조의 출발점이자, 차세대 AI 자본 거래 (Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection·Mistral) 의 구조 참조점. 동시에 본 거래 구조가 [영구적] 이지 않다는 점도 명확하다. 2024~2026년 OpenAI 영리 전환·Azure 독점 약정 균열·반독점 검토 진행 중이며, 향후 5년 내 부분 재편 가능성이 높다. 본 거래는 \"가장 정교한 AI 전략 투자의 표준\" 이자 \"산업 표준이 만들어진 후 자기 자신을 재협상하는 순서로 들어간 거래\" 로 동시에 기록될 것이다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "MSFT",
    acquirerBg: "bg-blue-600",
    targetInitials: "OAI",
    targetBg: "bg-emerald-700",
    acquirerName: "Microsoft Corporation",
    targetName: "OpenAI (OpenAI Inc + OpenAI LP)",
    dealTitle: "Capped Profit Interest in OpenAI LP, Not Equity — Most Sophisticated Modern AI Investment Structure",
    dealSize: "약 $13B+ 누적",
    dealSizeUSD: "approx. USD 13B+ cumulative (2019~2023)",
    evEbitda: "N/A (Capped Profit Interest)",
    closeDate: "Jan 23, 2023 (latest multi-year, multi-billion extension announced)",
  },

  sources: [
    { id: 1, text: "Microsoft 공식 보도자료, OpenAI and Microsoft extend partnership (2023.01.23)", url: "https://blogs.microsoft.com/blog/2023/01/23/microsoftandopenaiextendpartnership/" },
    { id: 2, text: "Microsoft 공식 보도자료, OpenAI forms exclusive computing partnership with Microsoft (2019.07.22)", url: "https://news.microsoft.com/2019/07/22/openai-forms-exclusive-computing-partnership-with-microsoft-to-build-new-azure-ai-supercomputing-technologies/" },
    { id: 3, text: "OpenAI 공식 블로그, OpenAI LP (2019.03.11, Capped Profit 구조 첫 공개)", url: "https://openai.com/index/openai-lp/" },
    { id: 4, text: "Financial Times, Microsoft pumps $10bn into ChatGPT maker OpenAI (2023.01.23)", url: "https://www.ft.com/content/0c6d9ebd-c83a-4d97-bf1b-1d36e9ddbb38" },
    { id: 5, text: "Bloomberg, Microsoft Invests $10 Billion in OpenAI Maker of ChatGPT (2023.01.23)", url: "https://www.bloomberg.com/news/articles/2023-01-23/microsoft-makes-multibillion-dollar-investment-in-openai" },
    { id: 6, text: "The New York Times, Inside the A.I. Race: How Microsoft Bet Big on OpenAI (2023.04.16)", url: "https://www.nytimes.com/2023/04/16/technology/microsoft-openai-ai-race.html" },
    { id: 7, text: "Reuters, Microsoft drops OpenAI board observer seat amid antitrust scrutiny (2024.07.10)", url: "https://www.reuters.com/technology/microsoft-drops-openai-board-observer-seat-2024-07-10/" },
    { id: 8, text: "UK Competition and Markets Authority, Microsoft / OpenAI partnership: investigation (2024)", url: "https://www.gov.uk/cma-cases/microsoft-slash-openai-partnership-merger-inquiry" },
    { id: 9, text: "The Information, How Microsoft Saved OpenAI, the 96-Hour Sam Altman Saga (2023.11)", url: "https://www.theinformation.com/articles/how-microsoft-saved-openai" },
    { id: 10, text: "Wall Street Journal, OpenAI Restructuring Talks with Microsoft on Capped Profit Terms (2024~2025)", url: "https://www.wsj.com/tech/ai/openai-microsoft-restructuring-capped-profit" },
  ],

  seo: {
    title: "Microsoft × OpenAI $13B+ 구조화 투자, Capped Profit Interest 의 모든 것",
    description:
      "2019~2023년 Microsoft 가 OpenAI 에 누적 약 $13B+ 를 투자한 거래의 구조 분석. 지분이 아닌 [OpenAI LP의 49% Capped Profit Interest], 100배 캡, Azure 독점 클라우드, 이사회 의석 없는 거버넌스 영향력. 알트만 해임 사태·CMA 반독점 검토·영리 전환 재협상까지 — 현대 AI 산업 가장 정교한 전략 투자 사례를 풀어 본다.",
    keywords: [
      "Microsoft OpenAI 투자",
      "Capped Profit Interest",
      "OpenAI LP 구조",
      "Microsoft 49% OpenAI",
      "Azure OpenAI 독점",
      "샘 알트만 해임 사태",
      "OpenAI 비영리 영리 하이브리드",
      "UK CMA Microsoft OpenAI",
      "AGI 정의 조항",
      "AI 전략 투자 구조",
      "사티아 나델라 OpenAI",
    ],
  },

  concepts: [
    {
      term: "Capped Profit Interest (캡드 프로핏 이익권)",
      description: "투자자가 받을 수 있는 이익에 [일정 배수의 상한(캡)] 을 걸고, 캡 초과 분은 비영리 모회사 등으로 회수되는 비대칭 수익권. 본 거래는 OpenAI LP 이익의 49% 를 약 100배 캡까지 Microsoft 가 받고, 캡 도달 후에는 모든 잔여 이익이 OpenAI Inc(비영리) 로 회수.",
    },
    {
      term: "비영리 + LP 하이브리드 (Non-Profit + Capped Profit LP)",
      description: "비영리 모회사가 영리 자회사(Capped Profit LP) 의 GP·의결권을 지배하는 구조. 비영리 사명 보존과 외부 자본 조달을 동시에 잡기 위한 새 구조. OpenAI 가 2019년 처음 도입, Anthropic Public Benefit Corporation 등 후속 변형으로 확산.",
    },
    {
      term: "Azure 컴퓨트 약정 (Azure Compute Commitment)",
      description: "현금이 아닌 클라우드 컴퓨트 크레딧·전용 슈퍼컴퓨터 인프라 형태로 제공하는 투자. 본 거래의 핵심 가치 레이어, AI 모델 학습이 단일 회사 R&D 예산을 넘어가는 산업 단계에서 [컴퓨트가 곧 자본] 임을 시연.",
    },
    {
      term: "샘 알트만 해임 사태 (Sam Altman Saga, 2023.11)",
      description: "2023년 11월 17일 OpenAI Inc 비영리 이사회가 알트만을 해임 → 96시간 안에 Microsoft 영입 카드 + 직원 700명 공개 서한 → 알트만 복귀 + 이사회 재편. 본 거래 구조가 [이사회 의석 없이도 실질 거버넌스 영향력 행사 가능] 함을 시연한 사건.",
    },
    {
      term: "UK CMA AI 검토",
      description: "영국 Competition and Markets Authority 가 2024년부터 본 거래를 [상시적 영향력 행사로 인한 사실상의 인수(merger)] 에 해당하는지 검토. EU·미 FTC 도 유사 검토 진행. 2024년 7월 Microsoft 의 OpenAI 이사회 옵저버 좌석 자진 사임이 이 검토의 첫 가시적 결과.",
    },
    {
      term: "이사회 의석 없는 거버넌스 영향력 (Governance Without Board Seat)",
      description: "공식 이사회 의석을 보유하지 않으면서도 [컴퓨트 결착 + 인력 영입 옵션 + 자본 의존도] 등 구조적 레버리지로 실질 결정권을 행사하는 형태. 본 거래의 Microsoft 가 알트만 사태(2023.11) 에서 시연.",
    },
    {
      term: "Compute-as-Investment (컴퓨트 = 자본)",
      description: "현금 투자와 동일한 가치 단위로 평가되는 클라우드 컴퓨트·전용 인프라 제공. AI 모델사의 학습 비용이 폭증한 2019년 이후 본격 등장한 새 자본 형태. 본 거래의 Azure 컴퓨트 크레딧이 사실상 현금과 동급의 자본으로 인정된 첫 메가 사례.",
    },
    {
      term: "OpenAI Restructuring (영리 전환 검토)",
      description: "2024~2025년 OpenAI 가 캡드 프로핏 LP 구조에서 Public Benefit Corporation 등 정규 영리 구조로 전환하는 작업을 검토 중. 이 과정에서 Microsoft 의 캡드 프로핏 이익권을 정규 지분으로 어떻게 전환할 것인가가 양측 재협상의 핵심 의제.",
    },
  ],

  faq: [
    {
      q: "Microsoft 가 OpenAI 의 49% 지분을 가졌다는 말이 맞나요?",
      a: "정확하지 않습니다. Microsoft 는 OpenAI Inc(비영리 모회사) 의 지분도, OpenAI LP(영리 자회사) 의 일반 지분도 보유하지 않습니다. Microsoft 가 보유한 것은 [OpenAI LP 이익에 대한 49% Capped Profit Interest] 라는 비대칭 LP 이익권. 투자 원금의 약 100배까지는 LP 이익의 49% 를 가져갈 수 있고, 그 캡에 도달하면 잔여 이익은 모두 비영리 모회사 OpenAI Inc 로 회수됩니다. \"지분 49%\" 와 \"이익권 49% (100배 캡)\" 는 본질적으로 다른 구조이며, 이 차이가 본 거래의 핵심 혁신입니다.",
    },
    {
      q: "왜 Microsoft 는 정규 지분이 아닌 캡드 프로핏 이익권으로 들어갔나요?",
      a: "세 가지 이유가 결합된 결과입니다. 첫째, OpenAI 의 비영리 사명을 형식적으로 유지하기 위함, 정규 지분 인수는 [비영리 → 영리 전환] 의 즉시 트리거가 됨. 둘째, 반독점 위험 완화, \"우리는 주주가 아니라 LP 이익 수령자\" 라는 형식적 거리가 영국 CMA·EU·미 FTC 검토 부담을 일부 분산. 셋째, 컴퓨트 결착 + 인력 영입 옵션 등 구조적 레버리지가 이미 사실상 거버넌스 영향력을 만들고 있어서 [정규 지분이 굳이 필요하지 않다] 는 계산. 알트만 사태(2023.11) 가 이 세 번째 논리를 시장에 시연했습니다.",
    },
    {
      q: "100배 캡은 정확히 무엇을 의미하나요?",
      a: "Microsoft 가 OpenAI LP 에 투자한 금액의 약 100배까지를 [Microsoft 가 가져갈 수 있는 이익의 이론 상한] 으로 설정한 조항입니다. 누적 약 $13B 투자 기준으로 이론 상한은 약 $1.3T. OpenAI LP 가 이 금액에 도달할 만큼 이익을 내면, 그 시점 이후의 모든 잔여 이익은 자동으로 비영리 모회사 OpenAI Inc 로 회수됩니다. 이 캡은 OpenAI 의 \"인류 전체에 이익\" 사명을 자본 구조 안에 내재화하기 위한 장치이며, 동시에 LP 투자자가 [현실적으로 도달 어려운 상한] 까지 업사이드를 가져갈 수 있게 함으로써 자본 조달을 가능케 한 구조적 타협점입니다.",
    },
    {
      q: "Azure 독점 클라우드 약정은 무엇인가요? 영구적인가요?",
      a: "본 거래의 별도 상업 계약으로, OpenAI 의 모든 모델 학습·추론을 Azure 위에서 수행하는 약정입니다. 보도 기준 멀티이어 계약이며 ~2030년대 초까지 효력 추정. 다만 영구적은 아닙니다, 2024~2025년 OpenAI 가 Oracle·CoreWeave·UAE G42 등과 컴퓨트 다변화 협상에 진입하면서 exclusive 부분이 [first-refusal] 또는 [right-of-first-offer] 로 약화될 가능성이 거론됩니다. Microsoft 는 누적 $50B+ 의 AI 인프라를 OpenAI 워크로드 지원에 배치, 이 컴퓨트 결착이 본 거래의 다운사이드 보호 레이어로 작동합니다.",
    },
    {
      q: "2023년 11월 알트만 해임 사태에서 Microsoft 의 역할은 무엇이었나요?",
      a: "2023년 11월 17일 OpenAI Inc 비영리 이사회가 알트만을 해임하자, 사티아 나델라는 96시간 안에 [알트만을 Microsoft 의 새 AI 연구 부서 책임자로 영입] 한다고 발표했습니다. 동시에 OpenAI 임직원 약 700명이 \"알트만이 돌아오지 않으면 우리도 Microsoft 로 이동하겠다\" 는 공개 서한에 서명. 결과적으로 알트만은 4일 만에 OpenAI CEO 로 복귀하고 이사회가 재편됐습니다. Microsoft 는 형식적으로 OpenAI Inc 이사회에 의석이 없었음에도 [컴퓨트 결착 + 인력 영입 카드 + 자본 의존도] 의 결합으로 사실상의 결정권자로 등장. 본 거래 구조가 [이사회 의석 없이도 실질 거버넌스 영향력 행사 가능] 함을 시연한 사건입니다.",
    },
    {
      q: "OpenAI 가 영리 전환을 검토 중이라는데, Microsoft 와의 관계는 어떻게 바뀌나요?",
      a: "2024~2025년 OpenAI 는 캡드 프로핏 LP 구조에서 Public Benefit Corporation(PBC) 등 정규 영리 구조로의 전환을 공식 검토 중입니다. 이 과정에서 핵심 협상 의제는 [Microsoft 의 캡드 프로핏 이익권 49% 를 정규 지분으로 어떻게 전환할 것인가] 입니다. 단순 환산이 아니라 [전환 비율 + 의결권 + Azure 독점 약정의 향후 처리 + AGI 정의 조항 보존 여부] 가 한꺼번에 협상되는 중. 동시에 영국 CMA·EU·미 FTC 의 반독점 검토가 진행 중이라 [Microsoft 의 정규 지분 비율이 너무 높으면 사실상의 인수로 분류될 위험] 도 변수. 2024년 7월 Microsoft 의 OpenAI 이사회 옵저버 좌석 자진 사임이 이 압박의 첫 가시적 결과이며, 향후 5년 내 본 거래 구조의 부분 재편 가능성이 높습니다.",
    },
  ],
};

export default deal;
