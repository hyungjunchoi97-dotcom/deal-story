/**
 * AT&T × Time Warner 인수
 * 수직통합 vs 반독점 전쟁 — $854억, 2018년 6월 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "att-time-warner",
  title: "AT&T는 왜 $854억에 Time Warner를 샀나 — 수직통합의 야망과 역사상 최악의 M&A 실패 해부",
  subtitle: "콘텐츠+유통 수직통합 · DOJ 반독점 소송 최초 패배 · $1,700억 부채의 늪과 2022년 분사까지",
  category: "ma",
  industry: "통신·미디어 / Telecom & Media",
  country: "미국",
  announcedAt: "2016-10-22",
  closedAt: "2018-06-14",
  announcedDisplay: "2016년 10월",
  closedDisplay: "2018년 6월",
  readingMinutes: 12,
  tags: ["AT&T", "Time Warner", "HBO", "CNN", "Warner Bros", "수직통합", "반독점", "DOJ 소송", "스트리밍"],
  excerpt:
    "AT&T가 HBO·CNN·Warner Bros를 보유한 Time Warner를 $854억(현금+부채 인수)에 인수한 2018년 역대급 수직통합 M&A. DOJ의 반독점 소송을 법정에서 이기고 클로징했으나, $1,700억+ 부채 폭탄과 미디어-통신 시너지 과대평가로 결국 2022년 WarnerMedia를 Discovery와 합병해 분사하는 역사상 최악의 전략 실패 사례로 기록됐다.",

  acquirer: { initials: "AT&T", bg: "bg-blue-600", label: "AT&T Inc." },
  target: { initials: "TWX", bg: "bg-blue-900", label: "Time Warner Inc." },

  background: [
    "AT&T는 2015년 $490억에 DirecTV를 인수해 미국 최대 위성TV 사업자로 올라섰다. 그러나 Netflix의 부상과 코드커팅(유료 케이블 해지) 가속화로 유통 채널만으로는 미래를 담보할 수 없다는 위기감이 팽배해졌다. Randall Stephenson AT&T CEO는 유통과 콘텐츠를 하나의 회사에 묶는 '수직통합'이 디지털 미디어 시대의 유일한 생존 전략이라고 확신했다. Netflix·Amazon이 오리지널 콘텐츠에 수십억 달러를 쏟아붓는 상황에서, AT&T는 자체 콘텐츠 IP를 확보하지 못하면 통신사로서의 경쟁력도 잃는다고 판단했다.",
    "Time Warner는 HBO(Game of Thrones, The Wire), CNN, Warner Bros. Studios, DC Entertainment, TNT, TBS 등 미국 최고의 프리미엄 콘텐츠 IP를 보유한 미디어 공룡이었다. Jeff Bewkes Time Warner CEO는 스트리밍 시대에 독립 미디어 기업으로 생존하기 위해 막대한 콘텐츠 투자가 필요하다는 사실을 인식하면서도, 기존 케이블 배급 구조의 붕괴 속에서 주주들에게 설득력 있는 독자 성장 스토리를 제시하기 어려운 상황이었다. AT&T의 제안은 20% 이상의 프리미엄과 함께 강력한 유통 인프라를 제공한다는 점에서 매력적이었다.",
    "딜 구조는 현금 $543억, 부채 인수 $231억, 그리고 주식 교환으로 구성된 총 $854억 규모였다. 2016년 10월 발표 직후 미국 법무부(DOJ)는 2017년 11월 반독점 소송을 제기했다. 핵심 쟁점은 수직통합이 경쟁을 해치는가였다 — AT&T가 경쟁 유통사(케이블TV 사업자 등)에 Time Warner 콘텐츠 접근을 차단하거나 가격을 올릴 수 있다는 논리였다. 그러나 2018년 6월 연방 지방법원 Richard Leon 판사는 DOJ의 소송을 기각하며 AT&T 손을 들어줬다. 이는 DOJ가 수직통합 M&A 법정 소송에서 최초로 패배한 역사적 판결이었다.",
    "2018년 6월 15일 딜이 최종 클로징됐고, AT&T는 Time Warner를 'WarnerMedia'로 재편했다. 그러나 클로징 직후부터 AT&T는 $1,700억+에 달하는 막대한 부채, 미디어-통신 시너지 과대평가, 코드커팅 가속화라는 3중 압박에 시달렸다. HBO Max 론칭(2020년)도 경쟁이 치열한 스트리밍 시장에서 Netflix·Disney+에 밀렸다. 결국 AT&T는 2021년 5월 WarnerMedia를 Discovery와 합병해 분사하는 전략적 후퇴를 결정했고, 2022년 4월 Warner Bros. Discovery(WBD)가 출범했다. AT&T 주가는 딜 발표 시점 $40 수준에서 2022년 $17 수준으로 폭락했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$854억 (현금 $543억 + 부채 인수 $231억)",
    acquirerName: "AT&T Inc. (NYSE: T)",
    targetName: "Time Warner Inc. (NYSE: TWX)",
    announcedDisplay: "2016년 10월",
    closedDisplay: "2018년 6월",
    country: "미국",
  },

  executiveSummary: [
    "$854억 — 현금·부채 혼합 인수. 콘텐츠(HBO·CNN·Warner Bros)와 유통(AT&T 통신망·DirecTV)의 수직통합 야망",
    "핵심 논리: Netflix 대항, 코드커팅 시대 콘텐츠 IP 확보, DirecTV 시너지, HBO Max 스트리밍 플랫폼 구축",
    "DOJ 반독점 소송 (2017년 11월) — 수직통합이 경쟁을 해치는가? AT&T 법정 승소 (2018년 6월), DOJ 최초 수직통합 패소",
    "EV/EBITDA 약 11x — Time Warner EBITDA 기준 합리적 멀티플이었으나 $1,700억+ 부채가 치명타",
    "실패 판정: 미디어-통신 시너지 과대평가, HBO Max 스트리밍 경쟁 열세, 코드커팅 가속화",
    "2022년 WarnerMedia를 Discovery와 합병해 Warner Bros. Discovery 설립 — AT&T는 $430억 현금+부채 경감 수령",
    "AT&T 주가 $40 → $17 폭락 — 역사상 최악의 통신사 M&A 전략 실패 사례",
  ],

  industryOverview: {
    body: "2016년 미국 미디어·통신 산업은 Netflix·Amazon Prime의 스트리밍 공세로 구조적 전환점을 맞이하고 있었다. 전통 케이블TV 가입자 수는 매년 수백만 명씩 감소하는 '코드커팅' 현상이 가속화됐고, 통신사와 케이블사 모두 수익 기반이 침식되고 있었다. 한편 프리미엄 콘텐츠 IP(HBO, ESPN, Disney 등)는 스트리밍 시대에도 독보적인 가치를 유지하며, 플랫폼 간 경쟁의 핵심 무기로 부상했다. AT&T의 Time Warner 인수는 이 맥락에서 '통신 인프라 + 콘텐츠 IP'의 수직통합을 통해 스트리밍 전쟁에서 주도권을 잡겠다는 전략적 베팅이었다.",
    metrics: [
      { label: "미국 유료 케이블TV 가입자 감소", value: "연 200만~300만 명", sub: "2016~2018년 코드커팅 가속화" },
      { label: "Netflix 글로벌 구독자", value: "약 9,300만 명", sub: "2016년 말 기준, 빠른 성장세" },
      { label: "미국 스트리밍 광고 시장", value: "약 $20억", sub: "2016년 기준, 연 30%+ 성장 중" },
      { label: "DirecTV 위성TV 가입자", value: "약 2,100만 명", sub: "2016년 AT&T 인수 후 기준" },
    ],
    subBody: "2016년 당시 미국 미디어 산업의 핵심 화두는 '콘텐츠를 가진 자가 스트리밍 시대를 지배한다'는 명제였다. Netflix는 오리지널 콘텐츠에 연간 $60억+ 투자를 예고했고, Disney는 ESPN·Hulu 인수를 통해 스트리밍 플랫폼을 구축하고 있었다. AT&T 입장에서 Time Warner의 HBO·CNN·Warner Bros는 단순한 미디어 자산이 아니라 스트리밍 플랫폼의 핵심 무기이자 가입자 유치의 킬러 콘텐츠였다. 이 논리는 타당했으나, $1,700억+ 부채라는 현실의 무게를 간과했다.",
    players: [
      { name: "AT&T", role: "미국 최대 통신사, DirecTV 보유, 수직통합 추진 인수자" },
      { name: "Time Warner", role: "HBO·CNN·Warner Bros 보유 미디어 공룡, 피인수자" },
      { name: "Netflix", role: "스트리밍 1위, 오리지널 콘텐츠 투자 선도" },
      { name: "Disney", role: "ESPN·Pixar·Marvel 보유, Disney+ 준비 중" },
      { name: "Comcast", role: "최대 케이블TV 사업자, Time Warner 인수 경쟁자로도 거론" },
      { name: "Amazon", role: "Prime Video로 스트리밍 시장 도전" },
    ],
  },

  companyOverview: {
    targetName: "Time Warner Inc.",
    body: "Time Warner는 HBO, CNN, Warner Bros. Studios, DC Entertainment, TNT, TBS를 보유한 미국 대표 미디어 복합 기업이었다. HBO는 Game of Thrones, The Sopranos, The Wire 등 프리미엄 드라마로 전 세계 5,000만+ 구독자를 보유했고, CNN은 미국 최대 뉴스 채널이었다. Warner Bros.는 DC 코믹스 IP를 기반으로 한 블록버스터 영화 및 TV 시리즈 제작소였다. 인수 직전 Time Warner의 연간 매출은 약 $314억, EBITDA는 약 $80억 수준으로 안정적인 현금 흐름을 보유한 성숙한 미디어 사업자였다. 단, 케이블 광고 수익 감소와 코드커팅 압박은 독자 성장의 불확실성을 높이고 있었다.",
    metrics: [
      { label: "연간 매출 (2017년)", value: "약 $314억", sub: "HBO·CNN·Warner Bros 합산" },
      { label: "EBITDA (2017년)", value: "약 $80억", sub: "EV/EBITDA 약 11x 밸류에이션 기반" },
      { label: "HBO 글로벌 구독자", value: "약 5,000만 명+", sub: "2016년 기준" },
      { label: "Warner Bros. 연간 영화 제작", value: "약 20편+", sub: "DC 코믹스 IP 포함" },
      { label: "설립", value: "1990년", sub: "Time Inc.·Warner Communications 합병으로 설립" },
    ],
    financials: [
      { year: "2016", revenue: 293, cogs: 150, grossProfit: 143, sga: 45, operatingIncome: 50, ebitda: 75 },
      { year: "2017", revenue: 314, cogs: 158, grossProfit: 156, sga: 47, operatingIncome: 55, ebitda: 80 },
    ],
    financialsNote: "단위: USD 억(hundred million). 공개 보도 및 재무 공시 기반 추정치. Time Warner 연결 기준.",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  dealStructure: {
    body: "AT&T는 Time Warner를 현금 $543억 + 부채 인수 $231억 + 주식 교환으로 구성된 혼합 방식으로 인수했다. 총 딜 가치는 약 $854억이었다. 2017년 11월 DOJ가 반독점 소송을 제기하면서 클로징이 지연됐으나, 2018년 6월 연방 지방법원의 AT&T 승소 판결로 딜이 최종 마무리됐다. 클로징 후 AT&T는 Time Warner를 'WarnerMedia'로 재편하고 HBO Max 스트리밍 플랫폼 구축에 착수했다. 딜 완료 후 AT&T의 총 부채는 $1,700억+로 급증했으며, 이는 이후 전략 전환의 핵심 제약 요인이 됐다.",
    preOwnership: {
      nodes: [
        { id: "att", label: "AT&T Inc.", sub: "NYSE: T, 미국 최대 통신사", type: "acquirer" },
        { id: "directv", label: "DirecTV", sub: "AT&T 자회사 (2015년 $490억 인수)", type: "entity" },
        { id: "twx", label: "Time Warner Inc.", sub: "NYSE: TWX, 독립 미디어 기업", type: "target" },
        { id: "hbo", label: "HBO / CNN / Warner Bros.", sub: "Time Warner 핵심 자산", type: "entity" },
      ],
      edges: [
        { from: "att", to: "directv", label: "100% 자회사" },
        { from: "twx", to: "hbo", label: "보유 자산" },
        { from: "att", to: "twx", label: "인수 협상 중" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_parent", label: "AT&T Inc.", sub: "NYSE: T, 총 부채 $1,700억+", type: "acquirer" },
        { id: "warnermedia", label: "WarnerMedia", sub: "AT&T 100% 자회사 (구 Time Warner)", type: "target" },
        { id: "directv_sub", label: "DirecTV", sub: "AT&T 자회사", type: "entity" },
      ],
      edges: [
        { from: "att_parent", to: "warnermedia", label: "100%" },
        { from: "att_parent", to: "directv_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "총 딜 가치", value: "$854억 (현금 $543억 + 부채 인수 $231억)", accent: true },
      { label: "거래 형태", value: "현금·부채·주식 혼합 인수 (Cash, Debt Assumption & Stock)", accent: false },
      { label: "EV / EBITDA", value: "약 11x (Time Warner 2017 EBITDA 기준)", accent: true },
      { label: "DOJ 반독점 소송", value: "2017년 11월 제기 → 2018년 6월 AT&T 승소", accent: false },
      { label: "수직통합 심사", value: "DOJ 역사상 수직통합 M&A 법정 소송 최초 패소", accent: true },
      { label: "클로징일", value: "2018년 6월 14일", accent: false },
      { label: "AT&T 총 부채 (클로징 후)", value: "$1,700억+", accent: false },
      { label: "재편 브랜드", value: "WarnerMedia (AT&T 100% 자회사)", accent: false },
      { label: "경영진", value: "Randall Stephenson (AT&T CEO) + Jeff Bewkes (TWX CEO)", accent: false },
    ],
  },

  advisors: {
    body: "이 딜은 역대 최대 규모의 수직통합 M&A 중 하나로, 양측 모두 최정상급 투자은행과 로펌을 자문단으로 구성했다. 특히 DOJ 소송 대응을 위한 법무 자문이 딜의 성패를 가르는 핵심 역할을 했다. AT&T 측은 반독점 전문 로펌인 Sullivan & Cromwell이 DOJ 법정 싸움을 총괄했고, Time Warner 측은 Cravath, Swaine & Moore가 협상 및 법무를 담당했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (AT&T)",
        initials: "AT&T",
        bg: "bg-blue-600",
        advisors: [
          { firm: "JP Morgan", role: "재무 자문 (주간사)", roleType: "financial", note: "딜 구조 설계 및 파이낸싱 총괄" },
          { firm: "Evercore", role: "재무 자문 (공동)", roleType: "financial", note: "밸류에이션 및 전략 자문" },
          { firm: "Sullivan & Cromwell", role: "법률 자문 (M&A·반독점)", roleType: "legal", note: "DOJ 반독점 소송 법정 대응 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (Time Warner)",
        initials: "TWX",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 (주간사)", roleType: "financial", note: "공정가치 의견(Fairness Opinion) 및 협상 자문" },
          { firm: "Cravath, Swaine & Moore", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 DOJ 규제 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 SEC 공시 기반입니다.",
  },

  valuation: {
    body: "AT&T는 Time Warner에 2017년 EBITDA 약 $80억 기준 약 11x의 EV/EBITDA 멀티플을 적용했다. 이는 당시 프리미엄 미디어 자산의 시장 멀티플(10~13x)과 비교해 합리적인 범위였다. 그러나 총 딜 가치 $854억을 부담하기 위해 AT&T가 짊어진 부채($1,700억+)는 딜 완료 후 회사의 재무적 유연성을 심각하게 훼손했다. 현금 흐름 상당 부분이 부채 상환에 묶이면서 HBO Max 투자, 5G 투자, 배당 유지라는 3개 전선을 동시에 감당하기 어려워졌다.",
    rows: [
      { item: "총 딜 EV", val: "$854억", note: "현금 $543억 + 부채 인수 $231억", accent: true },
      { item: "EV / EBITDA", val: "약 11x", note: "Time Warner 2017 EBITDA ~$80억 기준", accent: true },
      { item: "Time Warner 연 매출 (2017)", val: "$314억", note: "HBO·CNN·Warner Bros 합산" },
      { item: "EV / Revenue", val: "약 2.7x", note: "2017년 매출 기준" },
      { item: "인수 프리미엄", val: "약 20%+", note: "딜 발표 전 Time Warner 주가 대비" },
      { item: "AT&T 총 부채 (클로징 후)", val: "$1,700억+", note: "회사 재무 유연성 심각 훼손", accent: true },
      { item: "WBD 분사 시 AT&T 수령액", val: "$430억", note: "현금+부채 경감, 2022년 기준" },
      { item: "AT&T 주가 변동", val: "$40 → $17", note: "딜 발표~2022년, 약 58% 폭락" },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도, SEC 공시, 애널리스트 리포트 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "AT&T 인수 논리",
      initials: "AT&T",
      bg: "bg-blue-600",
      points: [
        "콘텐츠+유통 수직통합 — AT&T 통신망·DirecTV 유통에 HBO·CNN·Warner Bros 콘텐츠를 결합해 완결형 미디어 기업 구축",
        "Netflix 대항마 — HBO Max 스트리밍 플랫폼 구축을 통해 Netflix·Amazon에 직접 도전",
        "코드커팅 방어 — 프리미엄 콘텐츠 IP로 구독자 이탈 방어 및 AT&T 모바일·브로드밴드 번들링 강화",
        "DirecTV 시너지 — 위성TV 가입자 2,100만 명에게 WarnerMedia 콘텐츠 우선 제공으로 가입자 유지",
        "광고 사업 확장 — AT&T 이용자 데이터와 Time Warner 광고 인벤토리 결합으로 타겟 광고 플랫폼 구축",
      ],
    },
    seller: {
      title: "Time Warner 매각 논리",
      initials: "TWX",
      bg: "bg-blue-900",
      points: [
        "높은 프리미엄 확보 — 20%+ 프리미엄으로 주주 가치 즉각 실현, 스트리밍 전환 불확실성 회피",
        "스트리밍 시대 독자 생존 불확실 — Netflix·Amazon 대비 콘텐츠 투자 규모 열세, 독자 플랫폼 구축 자금 부담",
        "AT&T 통신망 시너지 — 5억 명+ AT&T 고객 기반을 통한 HBO Max 배급 확대 기대",
        "케이블 광고 수익 감소 대응 — 코드커팅으로 인한 케이블 광고 수익 하락을 AT&T 모바일·디지털 광고로 보완",
        "확실한 Exit — 독자 IPO 대비 리스크 없는 확실한 현금화 경로 제공",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "AT&T-Time Warner 딜은 M&A 역사에서 수직통합의 환상이 현실의 벽에 부딪힌 대표 사례로 기록됐다. 클로징 후 AT&T는 $1,700억+의 부채를 안고 HBO Max 구축, 5G 투자, 배당 유지라는 불가능한 삼각 과제에 직면했다. HBO Max는 2020년 론칭했으나 Netflix·Disney+에 가입자 수에서 크게 뒤처졌다. DirecTV와 WarnerMedia의 시너지도 기대에 한참 못 미쳤다. 결국 AT&T는 2021년 5월 WarnerMedia를 Discovery와 합병해 Warner Bros. Discovery(WBD)를 설립하고 분사하는 전략적 후퇴를 단행했다. AT&T는 이 과정에서 $430억 현금+부채 경감을 수령했으나, 딜에 쏟아부은 $854억과 수년간의 전략적 漏失을 회수하기에는 턱없이 부족했다.",
    overallVerdict: "수직통합의 신화는 없었다 — AT&T 역사상 최악의 전략 실수",
    positives: [
      "DOJ 반독점 소송 법정 승소 — 수직통합 M&A의 위법성 논란에서 최초 승리, 법적 선례 확립",
      "HBO Max 론칭 성공 — 2020년 스트리밍 플랫폼 출범, WBD 분사 후에도 Max로 지속 운영",
      "WarnerMedia 콘텐츠 IP 가치 보존 — HBO·CNN·Warner Bros. 브랜드 가치는 분사 후에도 유지",
    ],
    risks: [
      "$1,700억+ 부채 — 회사 재무 유연성 심각 훼손, 5G·콘텐츠 투자 동시 진행 불가능",
      "미디어-통신 시너지 과대평가 — 콘텐츠+유통 통합 시너지가 기대치의 절반에도 못 미침",
      "코드커팅 가속화 — DirecTV 가입자 급감, AT&T TV 번들 전략 실패",
      "AT&T 주가 폭락 — 딜 발표 시점 $40 → 2022년 $17, 약 58% 하락으로 주주 가치 훼손",
    ],
    editorNote: "AT&T-Time Warner는 '왜 수직통합이 항상 정답이 아닌가'를 보여주는 교과서적 반면교사다. 콘텐츠+유통의 논리는 틀리지 않았다. 그러나 $854억짜리 인수가 만들어낸 $1,700억+ 부채는 그 어떤 시너지도 상쇄할 수 없었다. DOJ와의 법정 싸움에서 이기고도 시장과의 전쟁에서 진 이 딜은, M&A에서 '이길 수 있는 딜'과 '해야 하는 딜'은 다르다는 가장 비싼 교훈을 남겼다.",
  },

  tombstone: {
    acquirerInitials: "AT&T",
    acquirerBg: "bg-blue-600",
    targetInitials: "TWX",
    targetBg: "bg-blue-900",
    acquirerName: "AT&T Inc.",
    targetName: "Time Warner Inc.",
    dealTitle: "수직통합 vs 반독점 전쟁 / Vertical Integration vs. Antitrust Battle",
    dealSize: "$854억",
    dealSizeUSD: "USD 85.4 Billion",
    evEbitda: "약 11x EBITDA",
    closeDate: "Jun 2018",
  },

  sources: [
    { id: 1, text: "AT&T Press Release — AT&T to Acquire Time Warner (October 22, 2016)", url: "https://about.att.com" },
    { id: 2, text: "SEC Form S-4 / 8-K — AT&T Time Warner acquisition filing (2016–2018)", url: "https://www.sec.gov" },
    { id: 3, text: "U.S. v. AT&T Inc. — DOJ Complaint (November 20, 2017)", url: "https://www.justice.gov" },
    { id: 4, text: "U.S. District Court, D.D.C. — Judge Richard Leon Opinion (June 12, 2018)" },
    { id: 5, text: "Wall Street Journal — AT&T's Time Warner Deal: The Inside Story (2018)" },
    { id: 6, text: "Bloomberg — AT&T Agrees to Spin Off WarnerMedia to Merge With Discovery (May 2021)" },
    { id: 7, text: "Financial Times — AT&T-Time Warner: A $85bn deal that failed to deliver (2022)" },
  ],

  seo: {
    title: "AT&T-Time Warner 인수 완전 분석 — $854억 수직통합의 실패",
    description: "AT&T가 HBO·CNN·Warner Bros를 $854억에 인수한 2018년 M&A 완전 분석. DOJ 반독점 소송 최초 패소, 수직통합 논리, $1,700억 부채, 2022년 WarnerMedia 분사까지 해부.",
    keywords: [
      "AT&T Time Warner 인수",
      "수직통합 M&A",
      "DOJ 반독점 소송",
      "WarnerMedia Warner Bros Discovery",
      "통신 미디어 M&A 실패",
    ],
  },

  concepts: [
    { term: "수직통합 (Vertical Integration)", href: "/deal-101/vertical-integration", description: "콘텐츠(생산)와 유통(배급)을 동일 기업이 통합해 시너지를 창출하는 전략" },
    { term: "반독점 (Antitrust)", href: "/deal-101/antitrust", description: "시장 경쟁을 보호하기 위해 기업 합병·시장 지배를 규제하는 법률 체계" },
    { term: "코드커팅 (Cord Cutting)", href: "/deal-101/cord-cutting", description: "유료 케이블TV를 해지하고 스트리밍 서비스로 전환하는 소비자 행동 트렌드" },
  ],

  faq: [
    {
      q: "DOJ가 왜 AT&T-Time Warner 소송에서 졌나?",
      a: "DOJ는 수직통합이 경쟁을 저해한다는 이론적 논리를 제시했지만, 실질적인 피해 증거를 충분히 제시하지 못했습니다. 연방 지방법원 Richard Leon 판사는 'DOJ가 합병 후 AT&T가 경쟁 케이블사에 Time Warner 콘텐츠 접근을 실질적으로 차단하거나 가격을 올릴 것이라는 구체적 증거를 제시하지 못했다'고 판시했습니다. 이는 DOJ가 수직통합 M&A 법정 소송에서 최초로 패소한 역사적 판결로 기록됐습니다. AT&T 측의 경제 전문가 증언과 콘텐츠 접근 중립 유지 약속도 판사를 설득하는 데 기여했습니다.",
    },
    {
      q: "AT&T의 수직통합 논리는 무엇이었나?",
      a: "AT&T는 통신망(유통)과 콘텐츠를 하나의 기업에 묶으면 Netflix 대항마를 만들 수 있다는 논리였습니다. 구체적으로는 ① HBO·CNN·Warner Bros 콘텐츠를 AT&T 모바일·브로드밴드 가입자에게 우선 제공해 가입자 이탈 방지, ② AT&T 이용자 데이터 + Time Warner 광고 인벤토리로 타겟 광고 플랫폼 구축, ③ HBO Max 스트리밍 플랫폼으로 Netflix에 직접 도전이었습니다. 논리 자체는 타당했지만 $854억 인수가 만들어낸 $1,700억+ 부채가 실행을 불가능하게 만들었습니다.",
    },
    {
      q: "왜 결국 실패했나?",
      a: "세 가지 복합 요인이 작용했습니다. 첫째, $1,700억+의 부채 부담으로 재무 유연성이 완전히 사라졌습니다. 5G 투자, HBO Max 콘텐츠 투자, 배당 유지를 동시에 감당하는 것은 구조적으로 불가능했습니다. 둘째, 미디어-통신 시너지가 과대평가됐습니다. 콘텐츠 회사와 통신사의 기업문화·사업모델 통합은 예상보다 훨씬 어려웠습니다. 셋째, 코드커팅 가속화로 DirecTV 가입자가 급격히 감소하면서 AT&T의 유통 채널 가치 자체가 훼손됐습니다.",
    },
    {
      q: "HBO Max는 성공했나?",
      a: "부분적 성공입니다. HBO Max는 2020년 5월 출범해 2023년 말 기준 약 9,000만 명의 구독자를 확보했습니다. 그러나 Netflix(2억 3천만 명), Disney+(1억 5천만 명)와 비교하면 경쟁에서 뒤처졌습니다. 더 큰 문제는 HBO Max 구축에 필요한 콘텐츠 투자를 AT&T가 부채 부담 때문에 충분히 할 수 없었다는 점입니다. 결국 WarnerMedia 분사 후 Discovery와 합병해 Warner Bros. Discovery(WBD) 산하에서 'Max'로 리브랜딩했습니다.",
    },
    {
      q: "AT&T는 이 딜로 어떻게 됐나?",
      a: "AT&T는 이 딜로 인해 심각한 전략적·재무적 손실을 입었습니다. 주가는 딜 발표 시점 약 $40에서 2022년 약 $17로 58% 폭락했습니다. 2022년 WarnerMedia를 Discovery와 합병해 Warner Bros. Discovery를 설립하고 $430억의 현금+부채 경감을 수령했지만, 투자한 $854억 대비 막대한 손실이었습니다. AT&T는 현재 통신 핵심 사업(모바일·브로드밴드)에 집중하는 전략으로 복귀했으며, DirecTV도 2024년 별도 매각 절차를 진행했습니다. 이 딜은 미국 M&A 역사에서 '수직통합 과신'의 가장 비싼 교훈으로 남아 있습니다.",
    },
  ],
};

export default deal;
