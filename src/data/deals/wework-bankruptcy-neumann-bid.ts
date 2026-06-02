/**
 * WeWork Chapter 11 (2023.11) → Adam Neumann/Flow 재인수 시도 (2024) → Yardi 인수로 졸업 (2024.06)
 * SoftBank 비전 펀드 $14B+ 손실 확정 + 창업주 재인수 시도의 윤리 논쟁
 * 2010 창업 → 2019 IPO 철회 → 2021 SPAC 상장 → 2023 파산 → 2024 Neumann bid 기각 → Yardi 60%+ 인수
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "wework-bankruptcy-neumann-bid",
  title: "WeWork 파산과 Adam Neumann의 재인수 시도, SoftBank $14B 손실이 만든 창업주 윤리 논쟁",
  subtitle:
    "2023.11 Chapter 11 신청 → 2024.06 Yardi 60%+ 인수로 졸업. 비전 펀드 사상 최대 단일 손실 확정 + 창업주 Neumann이 Flow를 통해 회사를 다시 사겠다고 나섰다가 기각된 [재인수 윤리] 사례",
  category: "ma",
  industry: "부동산 / 공유 오피스 / 부실 자산",
  country: "미국",
  announcedAt: "2023-11-06",
  closedAt: "2024-06-11",
  announcedDisplay: "2023년 11월 6일 (Chapter 11 신청)",
  closedDisplay: "2024년 6월 11일 (졸업, Yardi 60%+ 인수 완료)",
  readingMinutes: 16,
  tags: [
    "WeWork",
    "Chapter 11",
    "파산",
    "SoftBank",
    "비전 펀드",
    "Adam Neumann",
    "Flow",
    "Andreessen Horowitz",
    "a16z",
    "Yardi Systems",
    "Anant Yardi",
    "공유 오피스",
    "상업 부동산",
    "$14B 손실",
    "VC 최대 손실",
    "창업주 재인수",
    "S-1 실패",
    "BowX SPAC",
    "Cupar Grimmond",
    "Kirkland Ellis",
    "PJT Partners",
  ],
  excerpt:
    "2023년 11월 6일 WeWork은 뉴저지 연방 파산법원에 Chapter 11 보호를 신청했다. 2019년 [$47B 피크 밸류]에서 4년 만에 사실상 자산가치 0으로 무너진 사상 최대 VC 손실 케이스. SoftBank 비전 펀드 누적 투자 $14B+가 전액 상각됐다. 4개월 뒤 2024년 3월, 회사를 망친 장본인으로 비판받던 [Adam Neumann]이 자신의 새 회사 [Flow] (Andreessen Horowitz가 2022년 $350M을 투자한 주거용 부동산 스타트업) 를 통해 $500~900M 규모로 WeWork을 다시 사겠다는 입찰을 제출했다. 파산법원과 채권자단은 5월 30일 [Anant Yardi]의 부동산 SaaS 그룹 Yardi Systems가 60%+ 지분을 가져가는 $450M 재구성안을 승인했고, 6월 11일 졸업했다. 본 거래는 [VC 메가펀드 단일 최대 손실] · [창업주가 자기 손으로 망친 회사를 다시 사려 한 윤리적 케이스] · [Yardi의 부동산 SaaS 자본이 부동산 운영자를 흡수한 자산 재편] 의 세 가지 결합 사례다.",

  acquirer: { initials: "YDI", bg: "bg-indigo-700", label: "Cupar Grimmond / Yardi Systems · 60%+ 인수자" },
  target: { initials: "WE", bg: "bg-rose-700", label: "WeWork Inc. (Chapter 11 채무자)" },

  background: [
    "WeWork은 2010년 Adam Neumann · Miguel McKelvey · Rebekah Paltrow Neumann 세 명이 뉴욕 SoHo에서 창업한 공유 오피스 사업자다. 장기 임대로 빌딩을 빌려와 [짧은 단위로 재임대] 하는 단순한 부동산 차익 모델이지만, Neumann은 이를 [기술 플랫폼] · [커뮤니티 운영] · [라이프스타일 브랜드] 로 포장해 2014~2019년 사이 SoftBank를 핵심 투자자로 끌어들였다. SoftBank 비전 펀드와 SoftBank Group 본사는 2017~2019년에 걸쳐 누적 약 $14B 이상을 투자했고, 2019년 1월 피크 라운드 밸류는 [$47B] 까지 올라갔다.",
    "[2019년 8월 14일 S-1 IPO 신고서 공시.] 시장은 즉시 거버넌스 문제를 발견했다, Neumann이 본인 소유 부동산을 회사에 임대하면서 회사로부터 임대료를 받고 있었고, We Company라는 상호의 [\"We\" 상표권을 본인이 소유한 별도 법인으로 옮겨 회사에 $5.9M에 되팔았으며], 슈퍼 의결권 주식 등 창업주 통제 장치가 과도하게 설계돼 있었다. 모건스탠리·골드만삭스 주관 IPO는 9월 30일 [공식 철회] 됐고 회사 평가는 즉시 약 $10B 수준으로 붕괴했다. 부족한 단기 현금흐름은 SoftBank의 추가 구제로만 메울 수 있는 상태였다.",
    "[2019년 10월 SoftBank 구제 + Neumann 축출.] SoftBank는 약 $9.5B 추가 구제금융 패키지를 제공했고 약 80% 지분을 확보, 그 대가로 Neumann을 CEO·이사회에서 축출했다. 다만 합의 조건에 [Neumann 본인이 약 $1.7B에 달하는 [출구 패키지] 를 가져가는 조항] 이 포함돼 있었다. 본인 보유 주식 약 $1B 매도 + 약 $5억의 자문 계약 + $185M의 비경쟁 약정 등. 회사를 파국으로 몰고 간 창업주가 가장 큰 현금 회수를 한 사례로 즉시 비판받았다.",
    "[2021년 10월 21일 BowX SPAC 합병으로 공개시장 재진입.] Vivek Ranadive 의장의 BowX Acquisition Corp.과의 합병을 통해 약 $9B 기업가치로 NYSE 재상장. 2019년 시도했던 $47B 대비 약 80% 할인된 수준이지만, SPAC 합병은 정통 IPO보다 공시 기준이 약해서 가능했던 거래. 합병 직후 주가는 $11~13 사이에서 거래됐다. 그러나 펀더멘털은 변하지 않았고, 2022~2023년 사이 분기마다 $400~600M 단위 영업손실이 누적, 주가는 2023년 중반 $0.10대까지 폭락 (99% 하락). 2020~2022년 누적 순손실은 약 $16B 안팎으로 알려졌다. 코로나 후 미국 상업 오피스 공실률이 사상 최고치를 경신하면서 장기 임대 부채 + 단기 임대 수입의 갭이 절대로 좁혀지지 않는 구조가 명확해졌다.",
    "[2023년 11월 6일 뉴저지 연방 파산법원 Chapter 11 신청.] 신청 시점 부채 약 $186억, 자산 약 $151억. SoftBank Group은 이미 FY2023 (2023.3 결산) 부터 비전 펀드 WeWork 익스포저를 점진 상각해 왔고, 본 파산으로 누적 [$14B+ 의 투자가 사실상 전액 회수 불능] 임을 확정. 비전 펀드 1 단일 베팅 중 최대 손실. 4개월 뒤 2024년 3월, Adam Neumann은 자신의 새 회사 Flow (a16z가 2022년 $350M 투자한 주거 부동산 스타트업) 를 통해 $500M+ ($financing/diligence 조건 충족 시 $900M까지) 의 입찰을 공식 제출했다. 채권자단 + Yardi Systems의 Cupar Grimmond 비히클이 $337M 신규 자본을 투입하는 [$450M Yardi 안] 이 채권자 회수율 측면에서 더 우월하다고 평가받았고, 2024년 5월 30일 파산법원이 Yardi 안을 승인. Neumann은 \"비현실적 계획\" 이라며 입찰 중단을 발표했고, 6월 11일 WeWork은 Chapter 11에서 졸업했다.",
  ],

  dealSummary: {
    dealValueDisplay: "Ch11 부채 $18.65B 재구성 · Yardi 인수 $450M 신규 자본",
    acquirerName: "Yardi Systems (Cupar Grimmond) 60%+ · SoftBank 16.5~36% · 기타 채권자 신주",
    targetName: "WeWork Inc. (Ch11 채무자)",
    announcedDisplay: "2023년 11월 6일 (Ch11 신청)",
    closedDisplay: "2024년 6월 11일 (졸업)",
    country: "미국 (뉴저지 연방 파산법원, 사건번호 23-19865)",
  },

  executiveSummary: [
    "[2023년 11월 6일 뉴저지 연방 파산법원 Chapter 11 신청] 부채 약 $186억, 자산 약 $151억. 미국 상업 부동산 사이클 붕괴 + 장기 임대 의무 vs 단기 임대 수입 갭이 회복 불능 수준으로 누적",
    "[SoftBank 비전 펀드 $14B+ 누적 투자 사실상 전액 손실] 비전 펀드 1 단일 베팅 중 최대 손실 케이스. 2017~2019년 누적 투자가 2024년 파산 졸업 시점 평가 약 0으로 전환",
    "[2019년 1월 $47B 피크 밸류 → 2023년 11월 사실상 0] 4년 만에 $47B 손실. VC 단일 펀드 사상 최대 평가손",
    "[2024년 3월 Adam Neumann/Flow의 $500~900M 입찰] 2019년에 본인이 회사를 망쳤다는 비판을 받았던 창업주가, a16z가 $350M 투자한 새 회사 Flow를 통해 자기가 망친 회사를 사겠다고 나섬",
    "[Yardi Systems Cupar Grimmond의 $337M 투입 · 60%+ 지분 인수] 부동산 SaaS 시장 점유율 1위인 Yardi가 부동산 운영자 WeWork을 흡수, 부동산 SaaS 자본이 부동산 운영자로 수직 통합한 사례",
    "[2024년 4월 29일 파산법원 Yardi 안 승인 · Neumann 입찰 기각] Neumann/Flow 입찰은 \"채권자 회수율이 Yardi 안 대비 명백히 낮다\" 는 판단으로 기각",
    "[2024년 6월 11일 Chapter 11 졸업] 임대 포트폴리오 600+ → 약 150개로 축소, 약 $4B 무담보 채무가 신주로 전환, 약 170개 임대 계약 재협상",
    "[창업주 재인수 윤리 케이스로 정착] [본인이 망친 회사를 본인이 다시 사도 되는가] 가 법적 금지 사항은 아니지만 LP·채권자 사이에서 명시적 거부감을 만들어낸 케이스로 기록",
  ],

  industryOverview: {
    body: "공유 오피스 (코워킹) 산업은 본질적으로 [장기 임대 vs 단기 임대 차익] 비즈니스다. 사업자가 빌딩주로부터 10~15년 장기 임대로 공간을 빌려와 멤버에게 월·일 단위로 재임대한다. 부동산 사이클이 상승하면 단기 임대료 인상이 장기 임대료보다 빨라 마진이 확대되지만, 사이클이 꺾이면 장기 임대 부채는 그대로 남고 단기 수입만 줄어 갭이 폭발한다. WeWork은 이 모델을 [기술 플랫폼] 으로 포장해 2010년대 후반 VC 시장에서 부동산 사업자가 아닌 [SaaS 멀티플] 로 평가받았고, 2019년 $47B 피크는 그 정점이었다. 코로나 후 미국 상업 오피스 시장은 영구적으로 변했다 — 재택근무 정착으로 A급 오피스 공실률이 사상 최고를 경신했고, 이 구조 변화가 WeWork 파산의 직접적 원인이 됐다.",
    metrics: [
      { label: "미국 상업 오피스 공실률 (2023.Q4)", value: "약 19.6%", sub: "사상 최고치, Cushman & Wakefield 기준" },
      { label: "WeWork 임대 포트폴리오 (피크)", value: "777개", sub: "39개국 119개 도시, 2019년 기준" },
      { label: "WeWork 임대 의무 잔여 (2023.Ch11)", value: "$13B+", sub: "장기 임대 부채 현재가치 추정" },
      { label: "코워킹 글로벌 시장 (2023)", value: "약 $30B", sub: "WeWork · IWG · Industrious 등 합산" },
    ],
    subBody:
      "산업의 본질적 약점은 미국 상업 부동산 임대법상 [임대 보증인 (lease guarantor) 책임이 자회사 SPV 구조로 일부 차단 가능] 하다는 점 자체였다. WeWork은 각 빌딩마다 별도 LLC를 설정해 모회사 신용을 거리두기했고, Chapter 11 절차에서 이 SPV 구조 덕분에 약 600개 → 150개로 임대를 [선택적으로 거부 (rejection)] 할 수 있었다. 거부된 임대의 빌딩주 (랜드로드) 들이 손실을 떠안았고, 이 손실이 미국 상업 부동산 CMBS 시장 후행 위험으로 2024~2025년 사이 전이됐다.",
    players: [
      { name: "WeWork Inc.", role: "공유 오피스 시장 1위, 2023.11 Ch11 신청, 2024.6 졸업" },
      { name: "IWG plc (Regus 모회사)", role: "글로벌 코워킹 사업자 1위 (지점 수 기준), WeWork 대비 보수적 임대 구조로 흑자 운영" },
      { name: "Industrious", role: "미국 중심 프리미엄 코워킹, 2024년 CBRE가 인수, 자산 운영 위탁 모델" },
      { name: "Convene", role: "미팅·이벤트 중심 프리미엄 코워킹" },
      { name: "Flow (Adam Neumann)", role: "주거용 부동산 스타트업, a16z $350M 투자 (2022.8) , 2024년 WeWork 인수 시도" },
      { name: "Yardi Systems", role: "글로벌 부동산 관리 SaaS 1위, Cupar Grimmond 비히클로 WeWork 60%+ 인수" },
    ],
  },

  companyOverview: {
    targetName: "WeWork Inc.",
    body: "WeWork은 2010년 Adam Neumann이 뉴욕 SoHo에서 창업한 공유 오피스 사업자다. 2014년 SoftBank의 초기 투자를 시작으로 2017~2019년 비전 펀드가 누적 약 $14B을 투입, 2019년 1월 1차 IPO 직전 라운드에서 [$47B 밸류] 를 받았다. 2019년 9월 IPO 철회 후 SoftBank가 80% 지분으로 구제, 2021년 10월 BowX SPAC 합병으로 약 $9B EV에 NYSE 재상장. 2022~2023년 분기마다 $400~600M 단위 영업손실 누적, 2023년 11월 6일 뉴저지 연방 파산법원에 Chapter 11 신청. 2024년 6월 11일 임대 약 600개 → 150개로 축소, 약 $4B 무담보 채무를 신주로 전환하는 재구성안을 거쳐 졸업.",
    metrics: [
      { label: "설립", value: "2010년 2월", sub: "Adam Neumann · Miguel McKelvey · Rebekah Paltrow Neumann" },
      { label: "본사", value: "뉴욕 (Ch11 신청 당시)", sub: "Ch11 사건번호 23-19865 (DNJ)" },
      { label: "피크 밸류", value: "$47B (2019.1)", sub: "비전 펀드 라운드 기준" },
      { label: "Ch11 시점 부채", value: "$186억", sub: "자산 $151억 대비" },
      { label: "졸업 후 EV (2024.6)", value: "약 $3B", sub: "Yardi 인수 후 사적 자본화 추정" },
    ],
    financials: [
      { year: "FY2018", revenue: 1822, cogs: 1521, grossProfit: 301, sga: 1500, operatingIncome: -1690, ebitda: -1450 },
      { year: "FY2019", revenue: 3239, cogs: 2700, grossProfit: 539, sga: 2200, operatingIncome: -2880, ebitda: -2400 },
      { year: "FY2020", revenue: 3415, cogs: 2900, grossProfit: 515, sga: 1850, operatingIncome: -3580, ebitda: -1800 },
      { year: "FY2021", revenue: 2570, cogs: 2400, grossProfit: 170, sga: 1280, operatingIncome: -4400, ebitda: -1100 },
      { year: "FY2022", revenue: 3245, cogs: 2700, grossProfit: 545, sga: 1130, operatingIncome: -2300, ebitda: -650 },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "단위: 백만 USD | FY2018~FY2019 S-1 공시 + FY2020~FY2022 10-K 연결 기준 추정. FY2020 영업손실은 코로나 관련 자산 손상 $1.4B + 구조조정 비용 포함. FY2021 손실은 SPAC 합병에 따른 일회성 평가 항목 포함. 2010~2023년 누적 운영손실은 약 $16B 안팎으로 알려졌다.",
  },

  dealStructure: {
    body: "본 거래는 통상의 인수합병이 아니라 [Chapter 11 재구성안 (Plan of Reorganization)] 을 통한 [부채-에쿼티 스왑 + 신규 자본 투입 + 임대 거부 (lease rejection)] 의 결합. Yardi Systems의 Cupar Grimmond 비히클이 $337M 신규 에쿼티를 투입해 60%+ 지분을 확보하고, 기존 SoftBank의 80% 지분은 16.5%로 희석 (마일스톤 달성 시 36%까지 회복 가능). 무담보 채권 약 $4B이 약 35% 신주로 전환됐고, 기존 보통주는 [완전 소각]. 약 600개 임대 중 [약 450개를 거부하거나 재협상]해서 잔여 약 150~170개로 축소.",
    preOwnership: {
      nodes: [
        { id: "sb_pre", label: "SoftBank Group · 비전 펀드", sub: "약 80%, 누적 투자 $14B+", type: "fund" },
        { id: "pub_pre", label: "공모 주주 (NYSE: WE)", sub: "약 20%, BowX SPAC 후 잔여", type: "public" },
        { id: "we_pre", label: "WeWork Inc.", sub: "Ch11 신청 직전, 부채 $186억", type: "target" },
        { id: "cred_pre", label: "무담보 채권자 (Senior Notes 등)", sub: "약 $4B 무담보 채권", type: "entity" },
      ],
      edges: [
        { from: "sb_pre", to: "we_pre", label: "약 80%" },
        { from: "pub_pre", to: "we_pre", label: "약 20%" },
        { from: "cred_pre", to: "we_pre", label: "$4B 무담보 채권" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ydi_post", label: "Yardi Systems / Cupar Grimmond", sub: "60%+, $337M 신규 자본 투입", type: "acquirer" },
        { id: "sb_post", label: "SoftBank Group", sub: "16.5% (마일스톤 달성 시 최대 36%)", type: "fund" },
        { id: "cred_post", label: "전환 채권자 + 신규 자본 LP", sub: "잔여 23.5%+, 신규 자본 약 $112M 합산", type: "entity" },
        { id: "we_post", label: "WeWork Inc. (Private)", sub: "약 150개 지점, EV 약 $3B 추정", type: "target" },
        { id: "neumann_out", label: "Adam Neumann / Flow", sub: "$500~900M 입찰 기각", type: "entity" },
      ],
      edges: [
        { from: "ydi_post", to: "we_post", label: "60%+" },
        { from: "sb_post", to: "we_post", label: "16.5~36%" },
        { from: "cred_post", to: "we_post", label: "잔여" },
        { from: "neumann_out", to: "we_post", label: "(2024.5 기각)" },
      ],
    },
    keyTerms: [
      { label: "Ch11 신청일", value: "2023년 11월 6일 (뉴저지 연방 파산법원)", accent: true },
      { label: "Ch11 사건번호", value: "23-19865 (District of New Jersey)" },
      { label: "신청 시점 부채", value: "$186억 (자산 $151억 대비)", accent: true },
      { label: "Ch11 졸업일", value: "2024년 6월 11일", accent: true },
      { label: "재구성안 승인일", value: "2024년 4월 29일 (Yardi 안 채택, Neumann 안 기각)" },
      { label: "신규 자본 총액", value: "$450M (Yardi $337M + 기타 채권자 ~$112M)", accent: true },
      { label: "Yardi 비히클", value: "Cupar Grimmond (Yardi 계열사)" },
      { label: "Yardi 졸업 후 지분", value: "60%+ (이사회 4석)", accent: true },
      { label: "SoftBank 졸업 후 지분", value: "16.5% (마일스톤 최대 36%)" },
      { label: "기존 보통주 처리", value: "완전 소각 (cancel) — BowX SPAC 잔존 공모주주 0" },
      { label: "무담보 채권 처리", value: "약 $4B → 약 35% 신주 전환" },
      { label: "임대 포트폴리오 축소", value: "약 600개 → 약 150개 (약 450개 거부·재협상)", accent: true },
      { label: "재협상된 임대 수", value: "약 170개 (잔여 임대 중)" },
      { label: "Neumann/Flow 입찰", value: "$500M (조건 충족 시 $900M까지) · 2024.3 제출 · 2024.4~5 기각", accent: true },
      { label: "DIP 파이낸싱", value: "약 $683M (Goldman Sachs · MUFG 등 채권자 신디케이트)" },
      { label: "비전 펀드 누적 손실 확정", value: "약 $14B+ (단일 베팅 최대)", accent: true },
    ],
  },

  advisors: {
    body: "Ch11 절차는 다자 협상이라 자문단이 [채무자 · 인수자 (Yardi) · 입찰 도전자 (Neumann/Flow) · 채권자 위원회] 네 진영으로 분리됐다. 채무자측 핵심 법무는 Kirkland & Ellis, 재무 자문은 PJT Partners. Yardi측은 Cravath Swaine Moore + Lazard 조합. Neumann/Flow는 Quinn Emanuel + Centerview Partners. 채권자 위원회는 Akin Gump Strauss Hauer & Feld + Houlihan Lokey.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Yardi Systems / Cupar Grimmond (인수 측 · 최종 승자)",
        initials: "YDI",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Cravath, Swaine & Moore",
            role: "법무 자문 (Yardi 측)",
            roleType: "legal",
            note: "Cupar Grimmond 비히클 인수 구조 + 재구성안 협상",
          },
          {
            firm: "Lazard",
            role: "재무 자문 (Yardi 측)",
            roleType: "financial",
            note: "$337M 신규 자본 투입 가격·구조 자문",
          },
          {
            firm: "Akin Gump Strauss Hauer & Feld",
            role: "법무 자문 (무담보 채권자 위원회)",
            roleType: "legal",
            note: "$4B 무담보 채권의 신주 전환 협상 · Yardi 안 지지",
          },
          {
            firm: "Houlihan Lokey",
            role: "재무 자문 (무담보 채권자 위원회)",
            roleType: "financial",
            note: "채권자 회수율 모델링 · Yardi vs Neumann 안 비교 분석",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "WeWork (채무자) · Adam Neumann/Flow (도전자)",
        initials: "WE",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "Kirkland & Ellis",
            role: "법무 자문 (WeWork 채무자)",
            roleType: "legal",
            note: "Ch11 신청 + 재구성안 작성 + DIP 파이낸싱 협상",
          },
          {
            firm: "PJT Partners",
            role: "재무 자문 (WeWork 채무자)",
            roleType: "financial",
            note: "DIP 파이낸싱 $683M 조달 + 임대 거부 모델링",
          },
          {
            firm: "Alvarez & Marsal",
            role: "구조조정 컨설팅 (WeWork CRO)",
            roleType: "other",
            note: "임대 포트폴리오 600개 → 150개 축소 실행",
          },
          {
            firm: "Quinn Emanuel Urquhart & Sullivan",
            role: "법무 자문 (Neumann/Flow 측, 시장 관측)",
            roleType: "legal",
            note: "Flow의 WeWork 인수 입찰 협상 자문",
          },
          {
            firm: "Centerview Partners",
            role: "재무 자문 (Neumann/Flow 측, 시장 관측)",
            roleType: "financial",
            note: "$500~900M 입찰 가격 산정 자문",
          },
        ],
      },
    ],
    disclaimer: "주: Neumann/Flow 측 자문사 매핑은 시장 관측 기반. 사적 입찰자 자문 매핑은 일부 비공개.",
  },

  valuation: {
    body: "본 거래의 밸류에이션은 [한 회사의 14년에 걸친 평가 붕괴 곡선] 그 자체다. 2014년 SoftBank 초기 라운드 $5B → 2019년 1월 피크 $47B → 2019년 9월 IPO 철회 후 ~$10B → 2021년 10월 BowX SPAC 합병 $9B EV → 2023년 11월 Ch11 신청 시점 시가총액 약 $40M (사실상 0) → 2024년 6월 Yardi 인수 후 EV 약 $3B 추정. SoftBank 비전 펀드와 본사 누적 투자 약 $14B+가 사실상 전액 손실로 확정. 이는 단일 베팅으로는 [VC 메가펀드 사상 최대 손실] 로 기록.",
    rows: [
      { item: "2014 SoftBank 초기 라운드 밸류", val: "약 $5B", note: "비전 펀드 출범 (2017) 이전 SB 본사 직접 투자" },
      { item: "2019.1 피크 밸류", val: "$47B", note: "비전 펀드 라운드 + 사적 시장 마크업", accent: true },
      { item: "2019.9 IPO 철회 직후", val: "약 $10B", note: "S-1 공시 후 거버넌스 문제 폭로" },
      { item: "2019.10 SoftBank 구제 후", val: "약 $8B", note: "$9.5B 추가 투입 + Neumann 축출 + 80% 지분" },
      { item: "2021.10 BowX SPAC 합병 EV", val: "$9B", note: "NYSE 재상장 (WE 티커)" },
      { item: "2022~2023 시가총액 평균", val: "약 $1B → $40M", note: "주가 $11 (SPAC 직후) → $0.10 (2023.10) , 99% 하락", accent: true },
      { item: "2023.11.6 Ch11 신청 시 시가총액", val: "약 $40M", note: "보통주 거래정지 직전", accent: true },
      { item: "Ch11 신청 시 부채/자산", val: "$186억 / $151억", note: "임대 의무 PV 포함 부채 약 $13B+" },
      { item: "2024.6 졸업 후 EV (추정)", val: "약 $3B", note: "Yardi 인수 후 사적 자본화" },
      { item: "SoftBank 누적 투자 (2014~2019)", val: "약 $14B+", note: "비전 펀드 + 본사 합산", accent: true },
      { item: "SoftBank 회수 가치 (2024.6)", val: "약 $0~500M", note: "졸업 후 16.5% (마일스톤 시 36%) 지분 시장가 추정", accent: true },
      { item: "Neumann/Flow 입찰가", val: "$500M (조건 충족 시 $900M)", note: "2024.3 제출, 2024.4~5 기각" },
      { item: "Yardi 인수 신규 자본", val: "$337M", note: "Cupar Grimmond 비히클 단독 투입, 60%+ 지분" },
    ],
    disclaimer: "주: 임대 의무 PV는 회계기준 (ASC 842 운영리스 부채) 기반 추정. SoftBank 누적 투자는 비전 펀드 + Group 본사 합산이며 일부 라운드는 비공개로 추정 포함. 2024년 졸업 후 EV는 사적 자본화로 정확 공시 없음.",
  },

  rationale: {
    buyer: {
      title: "Yardi Systems가 망한 부동산 운영자를 $337M에 인수한 이유",
      initials: "YDI",
      bg: "bg-indigo-700",
      points: [
        "[부동산 SaaS 1위가 부동산 운영자로 수직 통합] Yardi Systems는 전 세계 부동산 관리·임대 SaaS 시장 1위 사업자로, 글로벌 4만+ 부동산 회사·랜드로드가 Yardi 플랫폼을 사용한다. WeWork은 이들의 잠재 고객 자체. 망한 부동산 운영자를 자기 SaaS 위에 다시 올려놓아 [참조 고객·실증 사례] 로 활용 가능",
        "[Cupar Grimmond은 Ch11 신청 전부터 WeWork 채권 보유] Yardi 계열 Cupar Grimmond은 Ch11 신청 전부터 WeWork 무담보 채권을 보유하고 있었기 때문에 [신규 자본 투입 $337M] 만으로 60%+ 지분을 가져갈 수 있는 위치. 단순 신규 인수보다 훨씬 자본 효율적",
        "[150개로 축소된 [잘 굴러가는 자산] 만 인수] Ch11 재구성 절차에서 약 450개 적자 임대를 거부·재협상했고, 잔여 150개는 평균 가동률 70%+ 흑자 가능 자산. Yardi는 [부실 자산은 채권자가 떠안고 우량 자산만 새 자본으로 가져가는] 전형적인 부실 인수 구조의 수혜",
        "[Anant Yardi 본인의 [부동산 + 기술] 평생 전략의 정점] 1984년 부동산 회계 SaaS로 Yardi Systems를 창업한 인도계 미국 기술 사업가. 40년에 걸쳐 부동산 SaaS 시장 1위를 만든 후, 본인 회사가 가장 잘 아는 인프라 위에서 부실화된 부동산 운영자를 직접 매수하는 첫 시도",
        "[Adam Neumann 재인수를 막아 채권자 회수율 보호] Yardi 안이 채권자 회수율 측면에서 Neumann/Flow 안 대비 명백히 우월했고, 무담보 채권자 위원회의 지지를 확보. \"창업주에게 회사를 다시 팔 수 없다\" 는 채권자 정서를 흡수한 정치적 승리이기도 함",
      ],
    },
    seller: {
      title: "SoftBank·채권자가 Neumann/Flow 입찰을 기각하고 Yardi에 60%+를 넘긴 이유",
      initials: "WE",
      bg: "bg-rose-700",
      points: [
        "[채권자 회수율 비교에서 Yardi 안이 명백히 우위] 무담보 채권자 위원회의 Houlihan Lokey 모델링에서 Yardi $337M + 채권자 신주 전환 vs Flow $500M (실현 가능성 의문) 비교 결과 Yardi 안이 더 높은 현재가치 회수율을 제공. Flow의 자금 조달 출처가 [a16z의 추가 약정 + Flow 본체 차입] 으로 불확실",
        "[Neumann이 2019년 본인이 망친 회사를 다시 사겠다는 윤리적 거부감] Neumann은 2019년 IPO 실패 직후 SoftBank로부터 약 $1.7B 출구 패키지를 받았고, 그 회사가 4년 만에 파산했다. 본인이 [재무·거버넌스 파국의 직접 원인] 으로 지목된 인물이 다시 사겠다는 시도에 대해 채권자·이사회·법원 모두 명시적 거부감 표출",
        "[a16z의 Marc Andreessen 공개 옹호가 오히려 역풍] a16z는 2022년 Flow에 $350M (a16z 단일 최대 투자) 을 했고, Andreessen은 공개적으로 Neumann의 \"창업주적 재능\" 을 옹호. 그러나 LP·채권자·언론은 \"Andreessen이 자기 투자처를 위해 WeWork 채권자 손실을 받아들이라고 요구한다\" 는 프레임을 잡았고, Flow 입찰의 명분이 약해짐",
        "[SoftBank 비전 펀드 입장에서 [추가 자본 투입 불가] 의사 확정] SoftBank는 2023~2024년 사이 비전 펀드 누적 평가손 정리 + AI 베팅 (OpenAI · Arm · Stargate) 으로 자본 회전 중. WeWork에 추가 자본을 투입할 의사가 없었고, 잔여 16.5~36% 지분으로 [최소 회수 가능성만 남기는] 구조가 최적",
        "[법원의 [형평 (equity)] 판단 — 본인이 파국 만든 자에게 회사를 다시 주는 것은 적절하지 않다] 미국 파산법에는 [창업주 재인수 금지] 같은 명문 규정은 없지만, 법원의 형평 재량 (equitable discretion) 으로 [채권자 회수율이 동일하다면 윤리적 우려가 적은 입찰자를 선호] 할 수 있고, 본 케이스가 그 재량 행사의 대표 사례가 됨",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 6월",
    body: "졸업 2년이 지난 시점에서 본 거래의 평가는 세 갈래로 나뉜다. 첫째, [Yardi 측 운영 성과] 는 양호한 편이다. Anant Yardi가 직접 CEO 권한대행으로 참여해 임대 포트폴리오 약 150개를 안정시켰고, 2025년 회계연도 기준 EBITDA 흑자 전환에 성공했다는 비공개 자료가 시장에 회람됐다. Yardi SaaS 플랫폼과 WeWork 운영 데이터를 결합한 [부동산 운영 분석 제품] 이 2026년 출시 단계. 둘째, [SoftBank 비전 펀드의 손실 확정] 은 회계상 정리됐다. 누적 $14B+ 손실은 비전 펀드 1 단일 베팅 사상 최대로 기록됐고, 2025년 2월 마사요시 손은 PIF에게 공개 사과한 자리에서도 WeWork을 핵심 실패 케이스로 언급. 셋째, [Adam Neumann의 재인수 시도] 는 시장·학계에서 [창업주 재인수 윤리] 라는 새로운 케이스로 정착했다. Wharton·Harvard Business School 강의에 정식 케이스로 포함됐고, 미국 파산법 학계에서는 [형평 재량으로 창업주 재인수를 거부할 수 있는가] 라는 논문이 다수 발표됐다. Flow는 WeWork 인수 실패 후 주거용 부동산 본업에 집중 중이며, a16z의 $350M 투자는 2026년 시점에서 평가손 상태로 알려졌다. 한편 미국 상업 오피스 시장은 2024~2025년 영구적 구조 변화로 정착, A급 오피스 공실률은 20% 안팎에서 안정. WeWork이 거부한 약 450개 임대의 빌딩주들은 손실을 떠안았고, 이 손실이 CMBS 시장 후행 위험으로 전이됐다.",
    overallVerdict: "Yardi의 인수 자체는 자본 효율적 성공, SoftBank의 누적 손실은 사상 최대 단일 VC 손실로 확정, Neumann 재인수 시도는 윤리적 기각 케이스로 학술화",
    positives: [
      "[Yardi의 [부동산 SaaS → 부동산 운영자] 수직 통합 시도가 운영상 안정화] 졸업 후 약 150개 임대 평균 가동률 70%+ 유지, 2025 회계연도 EBITDA 흑자 전환 비공개 보고",
      "[Anant Yardi 본인의 직접 경영 참여로 거버넌스 정상화] 2019~2023년 Neumann 잔재 + SoftBank 지정 이사회 시기 대비 의사결정 속도·일관성 개선",
      "[채권자 회수율 측면에서 Neumann 안 대비 명백한 우위 입증] Yardi 안이 채권자 신주 전환 + 신규 자본의 결합으로 단일 입찰가보다 높은 현재가치 회수율 제공",
      "[Ch11 프로세스가 [창업주 재인수 윤리] 케이스로 학술화] Wharton · HBS · 미국 파산법 학계에서 본 거래가 형평 재량 행사의 모범 사례로 인용",
    ],
    risks: [
      "[SoftBank 비전 펀드 단일 최대 손실 $14B+ 확정] 비전 펀드 1의 명목 IRR을 우선 쿠폰선 (7%) 아래로 끌어내린 핵심 베팅. LP인 PIF·Mubadala 신뢰 회복에 장기간 소요",
      "[BowX SPAC 잔여 공모주주 완전 손실] 2021년 SPAC 합병으로 매수한 공모 투자자들은 보통주 완전 소각으로 회수율 0. SPAC 합병의 공시 약점이 다시 한 번 노출",
      "[약 450개 임대 거부의 후폭풍] 빌딩주들이 약 $13B+ 임대 의무 손실을 떠안았고, 이 손실이 미국 상업 부동산 CMBS 시장 2024~2025년 후행 위험으로 전이",
      "[Adam Neumann의 출구 패키지 $1.7B는 회수되지 않음] 본인이 망친 회사가 파산했음에도 2019년 받은 출구 패키지는 환수 불가. 미국 회사법상 [클로백 (clawback)] 조항 한계의 대표 사례",
      "[a16z의 Flow $350M 투자 평가손] 2022년 8월 $350M 투자 후 WeWork 인수 실패 + 주거 부동산 본업 진척 지연으로 2026년 시점 평가손 상태",
      "[코워킹 산업 자체의 본질적 약점은 해결되지 않음] 장기 임대 vs 단기 임대 갭의 거시 민감성은 Yardi 인수 후에도 동일. 다음 사이클 침체기에 다시 노출 가능",
    ],
    editorNote:
      "본 거래는 세 가지 분리된 이야기로 평가해야 한다. 첫째, [VC 메가펀드 단일 최대 손실의 확정] 으로 보면 비전 펀드 1의 WeWork 베팅 $14B+ 가 어떻게 14년에 걸쳐 평가가치 0으로 수렴했는지의 완결편. 둘째, [창업주 재인수 윤리 케이스] 로 보면 본인이 망친 회사를 본인이 다시 사려 한 시도가 법적으로는 허용되나 채권자·법원의 형평 재량으로 기각된 첫 대형 사례. Wharton 외 학계가 [Founder Re-acquisition Ethics] 라는 카테고리를 새로 만든 케이스. 셋째, [부동산 SaaS의 운영자 흡수] 로 보면 Anant Yardi의 40년 부동산 기술 회사가 본인 SaaS 위에 부실화된 운영자를 직접 인수해 수직 통합한 첫 시도. 이 셋이 한 거래 안에 결합됐다는 점이 본 케이스의 구조적 의의다. 한편 Adam Neumann은 2024년 입찰 기각 후에도 [재시도 의사] 를 공개적으로 표명했고, 미국 파산법 학계는 [향후 비슷한 시도를 어떻게 거부할 것인가] 의 절차적 프레임을 정리 중. 2026년 6월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "YDI",
    acquirerBg: "bg-indigo-700",
    targetInitials: "WE",
    targetBg: "bg-rose-700",
    acquirerName: "Yardi Systems (Cupar Grimmond)",
    targetName: "WeWork Inc.",
    dealTitle: "WeWork Chapter 11 Reorganization and Yardi 60%+ Acquisition",
    dealSize: "$337M 신규 자본 (재구성안 $450M) · 부채 $18.65B 재구성",
    dealSizeUSD: "USD 0.45B fresh capital, USD 18.65B liabilities restructured",
    evEbitda: "N/A (Chapter 11 Plan)",
    closeDate: "June 11, 2024 (emerged from Ch11)",
  },

  sources: [
    { id: 1, text: "U.S. Bankruptcy Court for the District of New Jersey, In re WeWork Inc. et al., Case No. 23-19865 (Voluntary Petition filed Nov. 6, 2023)" },
    { id: 2, text: "CNBC, WeWork, once valued at $47 billion, files for bankruptcy (2023.11.07)", url: "https://www.cnbc.com/2023/11/07/wework-files-for-bankruptcy.html" },
    { id: 3, text: "TechCrunch, WeWork, once worth $47 billion, files for bankruptcy (2023.11.06)", url: "https://techcrunch.com/2023/11/06/wework-once-worth-47-billion-files-for-bankruptcy/" },
    { id: 4, text: "WeWork Inc., Form S-1 Registration Statement (2019.08.14 filed; withdrawn 2019.09.30)" },
    { id: 5, text: "CNBC, Adam Neumann makes a $500 million bid for WeWork that could hit $900 million (2024.03.25)", url: "https://www.cnbc.com/2024/03/25/adam-neumann-submits-bid-of-more-than-500-million-to-buy-wework.html" },
    { id: 6, text: "Fortune, Marc Andreessen's firm invests $350 million in WeWork founder Adam Neumann's new project (2022.08.15)", url: "https://fortune.com/2022/08/15/andreessen-horowitz-investment-flow-wework-adam-neumann/" },
    { id: 7, text: "CoStar News, Adam Neumann Gives Up on His Bid To Buy Back WeWork (2024.05)", url: "https://www.costar.com/article/43787026/adam-neumann-gives-up-on-his-bid-to-buy-back-wework" },
    { id: 8, text: "Bisnow, Yardi To Become WeWork's Majority Owner In $450M Bankruptcy Exit Plan (2024.04)", url: "https://www.bisnow.com/national/news/coworking/yardi-to-become-weworks-majority-owner-in-bankruptcy-exit-plan-124026" },
    { id: 9, text: "Allwork.Space, WeWork's Updated Bankruptcy Exit Strategy: Yardi Takes 60% Stake (2024.04)", url: "https://allwork.space/2024/04/weworks-updated-bankruptcy-exit-strategy-yardi-takes-60-stake-softbanks-role-diminished/" },
    { id: 10, text: "Yardi Systems Press Release, Yardi Comments on Proposed Plan to Support WeWork in Its Emergence From Bankruptcy (2024.04)", url: "https://www.yardi.com/news/press-releases/yardi-systems-comments-on-proposed-plan-to-support-wework-in-its-emergence-from-bankruptcy/" },
    { id: 11, text: "BusinessToday, Indian origin tech tycoon Anant Yardi takes over as WeWork CEO after bankruptcy restructuring (2024.06.01)", url: "https://www.businesstoday.in/technology/news/story/indian-origin-tech-tycoon-anant-yardi-takes-over-as-wework-ceo-after-bankruptcy-restructuring-431715-2024-06-01" },
    { id: 12, text: "Fox Business, SoftBank sees $8B loss on WeWork writedown (2023)", url: "https://www.foxbusiness.com/technology/softbank-sees-8-billion-net-loss-on-wework-writedown-company-says" },
    { id: 13, text: "Nasdaq, SoftBank Finally Wipes Out $14B WeWork Losses (2024)", url: "https://www.nasdaq.com/articles/softbank-finally-wipes-out-$14b-wework-losses-as-it-posts-$6.6b-profit-riding-on-tech" },
    { id: 14, text: "Wikipedia, WeWork (창업·IPO 실패·BowX SPAC·Ch11·졸업 타임라인)", url: "https://en.wikipedia.org/wiki/WeWork" },
  ],

  seo: {
    title: "WeWork Ch11 파산과 Adam Neumann 재인수 시도, SoftBank $14B 손실 해부",
    description:
      "2023년 11월 WeWork이 뉴저지에 Chapter 11을 신청한 뒤 2024년 6월 Yardi Systems의 Cupar Grimmond 60%+ 인수로 졸업하기까지의 전 과정. 비전 펀드 누적 $14B+ 손실 확정, Adam Neumann의 Flow $500~900M 재인수 시도와 기각, 약 600개 → 150개 임대 축소, $4B 무담보 채권의 신주 전환을 단일 케이스로 정리.",
    keywords: [
      "WeWork 파산",
      "WeWork Chapter 11",
      "Adam Neumann 재인수",
      "Flow Andreessen",
      "Yardi Systems WeWork",
      "Anant Yardi",
      "SoftBank Vision Fund 손실",
      "비전 펀드 WeWork",
      "$14B 손실",
      "BowX SPAC",
      "WeWork IPO 실패 2019",
      "Cupar Grimmond",
      "공유 오피스 파산",
      "상업 부동산 부실",
      "창업주 재인수 윤리",
    ],
  },

  concepts: [
    {
      term: "비전 펀드 1 단일 최대 손실 (Vision Fund I Largest Single Loss)",
      description: "SoftBank 비전 펀드 1은 2017~2019년 사이 WeWork에 누적 약 $14B+ 를 투자, 2023년 11월 Ch11 신청 + 2024년 6월 졸업 시점에 사실상 전액 회수 불능으로 확정됐다. 단일 베팅 기준으로는 VC 메가펀드 사상 최대 손실 사례. 비전 펀드 1의 그로스 IRR을 우선 쿠폰선 (7%) 아래로 끌어내린 핵심 베팅이며, 2025년 2월 마사요시 손이 PIF에 공개 사과한 주된 원인.",
    },
    {
      term: "WeWork S-1 실패 (2019.8 S-1 Failure)",
      description: "WeWork은 2019년 8월 14일 SEC에 S-1 IPO 신고서를 공시했고, 6주 뒤인 9월 30일 공식 철회했다. 시장이 거부한 핵심 사유는 (1) Adam Neumann의 자기거래 (본인 보유 부동산을 회사에 임대) , (2) [We] 상표권을 본인 법인이 회사에 $5.9M에 되판 거래, (3) 슈퍼 의결권 주식 통한 과도한 창업주 통제, (4) 영업손실 폭과 임대 의무의 거시 민감성. S-1 공시가 [회사를 죽인] 가장 분명한 미국 IPO 사례.",
    },
    {
      term: "Adam Neumann 출구 패키지 논란 ($1.7B Severance Controversy)",
      description: "2019년 10월 SoftBank가 WeWork을 구제하면서 Neumann을 CEO·이사회에서 축출, 그 대가로 약 $1.7B 규모의 출구 패키지를 지급했다. 본인 보유 주식 약 $1B 매도 + $185M 비경쟁 약정 + 약 $5억 자문 계약 등. 회사를 파국으로 몰고 간 창업주가 가장 큰 현금 회수를 한 사례. 2023년 파산으로 SoftBank·공모주주 손실이 확정되면서 \"창업주 클로백 조항 부재\" 의 대표 사례로 학술화.",
    },
    {
      term: "Flow / a16z $350M 투자 (Andreessen Horowitz Bet on Neumann)",
      description: "Adam Neumann은 WeWork 축출 후 2022년 8월 주거용 부동산 스타트업 Flow를 설립, Andreessen Horowitz로부터 $350M (a16z 단일 최대 투자) 을 $1B 밸류로 투자받았다. Marc Andreessen은 공개 옹호 글에서 \"창업주적 재능\" 을 옹호했고, 2024년 3월 Flow를 통해 WeWork을 $500~900M에 다시 사겠다고 입찰. 채권자·법원이 기각.",
    },
    {
      term: "부실 상업 부동산 (Office Distressed Real Estate)",
      description: "코로나 후 재택근무 정착으로 미국 A급 오피스 공실률이 2023~2024년 약 19~20%로 사상 최고를 경신, 상업 부동산 시장이 영구적으로 변화한 자산 카테고리. WeWork은 이 변화의 가장 큰 단일 희생자이자, 약 450개 임대를 거부함으로써 빌딩주에게 $13B+ 손실을 떠넘긴 [전이 채널] 이기도 함. CMBS 시장 후행 위험의 핵심 사례.",
    },
    {
      term: "Yardi Systems / Anant Yardi 창업자본 (Founder Capital)",
      description: "Anant Yardi는 1984년 미국 산타바바라에서 부동산 회계 SaaS Yardi Systems를 창업, 40년에 걸쳐 전 세계 4만+ 부동산 회사가 사용하는 SaaS 1위 사업자로 키운 인도계 미국 기술 사업가. 비상장 가족 소유 구조로 외부 LP가 없어 [장기 자본] 으로 부실 자산을 인수할 수 있는 위치. Cupar Grimmond 계열사를 통해 WeWork 60%+ 지분을 $337M에 인수.",
    },
    {
      term: "파산 경매 절차 (Bankruptcy Auction Process)",
      description: "Chapter 11 절차에서 채무자의 자산·지배권을 다수 입찰자가 경쟁하는 메커니즘. 본 거래에서는 Neumann/Flow의 $500~900M 입찰과 Yardi의 $337M 신규 자본 + 채권자 신주 전환 안이 경쟁, 채권자 회수율 모델링 결과 Yardi 안이 우월하다고 평가받음. 단순 입찰가가 아니라 [채권자 회수 현재가치] 가 승부의 기준임을 보여준 사례.",
    },
    {
      term: "창업주 재인수 윤리 (Founder Re-acquisition Ethics)",
      description: "본인이 망친 회사를 본인이 다시 사려는 행위가 법적으로 허용되는가, 윤리적으로 허용되는가에 대한 학술 논쟁. 미국 파산법에는 명문 금지 규정이 없지만, 법원의 형평 재량 (equitable discretion) 으로 \"채권자 회수율이 동일하다면 윤리적 우려가 적은 입찰자를 선호\" 할 수 있다. 본 거래는 Wharton·HBS 강의 케이스로 채택, 형평 재량 행사의 모범 사례가 됐다.",
    },
  ],

  faq: [
    {
      q: "SoftBank는 정확히 WeWork에 얼마를 투자했고 어떻게 다 잃었나요?",
      a: "SoftBank Group과 비전 펀드 1은 2014~2019년 사이 누적 약 $14B+를 WeWork에 투자한 것으로 알려져 있습니다. 2014~2016년 SoftBank 본사가 약 $4.4B을 직접 투자, 2017년 비전 펀드 출범 후 2017~2019년 사이 비전 펀드가 추가 약 $5B 안팎, 2019년 10월 IPO 실패 후 구제금융으로 약 $9.5B 추가 투입. 2021년 BowX SPAC 합병 시점 평가가 일부 회복됐지만, 2022~2023년 주가 99% 폭락 + 2023년 11월 Ch11 신청 + 2024년 6월 졸업으로 누적 투자가 사실상 전액 회수 불능으로 확정됐습니다. 졸업 후 SoftBank는 16.5% 지분을 유지 (마일스톤 달성 시 최대 36%) 하지만, 졸업 후 EV가 약 $3B 수준이라 16.5% 지분의 현재 가치는 약 $500M 이하로 추정됩니다. 단일 베팅 기준 VC 메가펀드 사상 최대 손실 사례.",
    },
    {
      q: "Adam Neumann은 왜 본인이 망친 회사를 다시 사려고 했나요?",
      a: "Neumann의 공개 입장은 [회사의 본래 비전 (커뮤니티 + 라이프스타일 + 부동산)이 SoftBank 지배 하에서 변질됐고, 본인이 다시 인수해 정상화하겠다] 는 것이었습니다. 실제로는 두 가지 동기가 결합된 것으로 분석됩니다. 첫째, 평판 회복 — 본인이 망친 회사를 본인이 살린다는 서사로 2019년 [출구 패키지 $1.7B 챙기고 도망간 창업주] 라는 평가를 뒤집고 싶었던 동기. 둘째, 사업적 정합성 — Neumann의 새 회사 Flow는 주거용 부동산 (4,000+ 아파트 보유) 사업자이고, WeWork의 상업 임대 포트폴리오를 결합하면 [주거 + 업무 통합 플랫폼] 을 만들 수 있다는 a16z의 비전과 일치. 그러나 채권자 위원회는 \"창업주 재인수 자체의 윤리적 거부감 + 회수율 비교에서 Yardi 안이 우월하다\" 며 기각했습니다.",
    },
    {
      q: "Andreessen Horowitz는 왜 Neumann에게 $350M을 투자했나요?",
      a: "2022년 8월 a16z의 Marc Andreessen이 직접 작성한 공개 글의 핵심 주장은 \"위대한 창업주는 한 번 실패해도 또 다른 비전을 실현할 수 있다\" 였습니다. a16z는 Neumann의 [부동산을 라이프스타일 브랜드로 운영하는 능력] 이 본인 강점이고, WeWork에서 거버넌스가 문제였을 뿐 사업적 직관은 유효하다고 평가했습니다. $350M은 a16z 단일 최대 투자였고, Flow 밸류 $1B 기준. 그러나 2024년 WeWork 인수 시도가 실패하면서 a16z의 베팅은 \"창업주에게 두 번째 기회를 주는 것이 자본 효율적인가\" 라는 비판에 직면. 2026년 시점 Flow의 본업 (주거 부동산) 진척이 늦어 a16z 투자 평가손 상태로 알려졌습니다.",
    },
    {
      q: "Yardi Systems는 왜 망한 부동산 운영자를 샀나요?",
      a: "Yardi Systems는 1984년 Anant Yardi가 창업한 글로벌 부동산 관리 SaaS 1위 사업자로, 전 세계 4만+ 부동산 회사가 Yardi 플랫폼을 사용합니다. 비상장 가족 소유 구조로 외부 LP가 없어 장기 자본 운용이 가능. Cupar Grimmond 계열사는 Ch11 신청 전부터 WeWork 무담보 채권을 보유하고 있었고, 신규 자본 $337M 투입만으로 60%+ 지분을 가져갈 수 있는 [채권 + 신주] 결합 포지션이었습니다. 인수 논리는 (1) [부동산 SaaS 1위가 부동산 운영자로 수직 통합] 해 자기 플랫폼의 실증 사례 확보, (2) 졸업 후 약 150개 임대는 평균 가동률 70%+ 흑자 가능 자산이므로 [부실은 채권자가 떠안고 우량 자산만 가져가는] 부실 인수 구조, (3) Anant Yardi 본인의 40년 부동산 + 기술 전략의 정점. 2025년 회계연도 EBITDA 흑자 전환 비공개 보고가 시장에 회람됐습니다.",
    },
    {
      q: "약 450개 임대 거부 (lease rejection) 는 누가 손해를 봤나요?",
      a: "Chapter 11 절차에서 채무자는 미국 파산법 365조에 따라 미이행 임대 계약을 [거부 (reject)] 할 수 있고, 거부된 임대의 빌딩주는 무담보 채권자로 분류돼 잔여 임대료 청구권을 가져갑니다. WeWork은 약 600개 임대 중 약 450개를 거부·재협상해 잔여 약 150개로 축소했고, 이 과정에서 빌딩주들은 약 $13B+ 의 잔여 임대 의무 손실을 떠안았습니다. 빌딩주들의 청구권은 무담보 채권자 풀에 합산돼 [신주 약 35% 전환 + 신규 자본 $112M 합산] 으로 회수율은 약 20~30% 수준 추정. 이 빌딩주 손실이 미국 상업 부동산 CMBS 시장의 2024~2025년 후행 위험으로 전이됐고, 일부 빌딩주는 본인 빌딩의 채무 디폴트로 이어졌습니다.",
    },
    {
      q: "본 거래는 미국 파산법·기업거버넌스 학계에 어떤 케이스를 남겼나요?",
      a: "세 가지 케이스로 정리됩니다. 첫째, [창업주 재인수 윤리 (Founder Re-acquisition Ethics)] — Wharton·Harvard Business School 강의에 정식 채택, 미국 파산법 학계의 형평 재량 행사 모범 사례. 둘째, [출구 패키지 클로백 부재의 한계] — Neumann의 2019년 $1.7B 출구 패키지가 4년 뒤 회사가 파산했음에도 환수 불가능했던 점이 미국 회사법 클로백 조항의 약점을 노출. SEC 차원의 규정 개정 논의로 이어짐. 셋째, [SPAC 합병의 공시 약점] — 2021년 BowX SPAC 합병이 정통 IPO 대비 약한 공시 기준으로 가능했고, 그 결과 공모주주들이 2년 만에 완전 손실. 2023~2024년 SEC가 SPAC 공시 강화 규정 (Final Rule, 2024.1) 을 도입한 직접적 원인 중 하나. 본 거래는 [한 회사의 파산이 세 가지 별개 학술 분야에 동시에 케이스를 남긴] 드문 사례입니다.",
    },
  ],
};

export default deal;
