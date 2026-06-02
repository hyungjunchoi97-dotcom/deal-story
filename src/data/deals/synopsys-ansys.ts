/**
 * Synopsys × Ansys, 약 USD 350억 규모 현금+주식 합병
 * EDA 1위와 멀티피직스 시뮬레이션 1위의 결합, 칩-투-시스템 설계 플랫폼
 * 2024년 1월 발표 → 2025년 7월 17일 클로징 (18개월 규제 검토)
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "synopsys-ansys",
  title: "시놉시스가 앤시스를 350억 달러에 산 이유, EDA + 멀티피직스 = 칩-투-시스템",
  subtitle:
    "주당 $197 현금 + 0.3450 주 현금·주식 혼합 · 29% 프리미엄 · 18개월 규제 마라톤 · FTC·EU·UK CMA·중국 SAMR 4중 심사",
  category: "ma",
  industry: "Semiconductor / EDA / Simulation Software",
  country: "미국",
  announcedAt: "2024-01-16",
  closedAt: "2025-07-17",
  announcedDisplay: "2024년 1월 16일 (이사회 결의)",
  closedDisplay: "2025년 7월 17일 (클로징)",
  readingMinutes: 14,
  tags: [
    "Synopsys",
    "Ansys",
    "EDA",
    "반도체 설계 자동화",
    "멀티피직스 시뮬레이션",
    "칩-투-시스템",
    "AI 칩",
    "Cash and Stock",
    "FTC",
    "EU Commission",
    "China SAMR",
    "Keysight 매각",
  ],
  excerpt:
    "2024년 1월 16일, 반도체 설계 자동화(EDA) 글로벌 1위 시놉시스가 멀티피직스 시뮬레이션 1위 앤시스를 약 350억 달러(현금 + 주식 혼합)에 인수한다고 발표했다. 앤시스 주주는 1주당 [현금 $197 + 시놉시스 보통주 0.3450주]를 받는다. 발표 시점 앤시스 비유출 종가 대비 약 29% 프리미엄. 결합 회사 매출은 합산 약 [USD 81억], EBITDA 약 USD 35억 규모. 전략 논리는 단순하다, AI 칩 복잡도 폭발 시대에 [반도체 EDA + 멀티피직스 시뮬레이션 = 칩-투-시스템 단일 설계 플랫폼]을 만드는 것. 18개월 규제 마라톤 끝에 미국 FTC가 2025년 5월 28일 컨센트 디크리(키사이트로 광학·RTL 파워 분석 SW 매각)와 함께 승인했고, EU·UK CMA·중국 SAMR이 차례로 클리어. 2025년 7월 17일 클로징.",

  acquirer: { initials: "SNPS", bg: "bg-indigo-700", label: "Synopsys, Inc." },
  target: { initials: "ANSS", bg: "bg-amber-600", label: "Ansys, Inc." },

  background: [
    "시놉시스는 1986년 노스캐롤라이나 출신 전자공학자 아트 드 게우스(Aart de Geus)가 설립한 EDA(Electronic Design Automation, 반도체 설계 자동화) 회사다. 칩 설계 엔지니어가 사용하는 RTL 합성·검증·물리 설계·사인오프 툴체인을 일괄 제공하며, 케이던스(Cadence Design Systems)·지멘스 EDA(전 Mentor Graphics)와 함께 EDA [빅3]를 구성한다. 시놉시스의 시장 점유율은 합성·사인오프 영역에서 약 50%로 사실상 표준. FY2023 매출은 약 USD 58억, OPM 25% 안팎. TSMC·삼성·인텔·엔비디아·AMD·애플 등 사실상 모든 첨단 팹리스·파운드리가 시놉시스 툴 없이는 칩을 못 만든다.",
    "앤시스는 1970년 펜실베이니아 캐넌스버그에서 메커니컬 엔지니어 존 스완슨(John Swanson)이 설립한 [멀티피직스 시뮬레이션] 회사다. 칩 자체가 아니라 [칩이 들어가는 시스템 전체]를 시뮬레이션한다, 구조·유체·전자기·열·다체역학·반도체 패키지 같은 물리 도메인을 하나의 환경에서 풀어주는 솔버 묶음(Mechanical·Fluent·HFSS·Maxwell·SIwave·RedHawk 등)이 핵심. FY2023 매출 약 USD 23억, OPM 30%대 중반. 자동차(전기차 배터리·BMS), 항공우주(F-35·SpaceX), 반도체 패키지(2.5D/3D 패키징), 의료기기 전반에 침투해 있다.",
    "[왜 지금 합쳤나, AI 칩 복잡도 폭발이 답.] 5nm 이하 첨단 노드에서는 칩이 단순한 디지털 로직이 아니다. 전력·열·전자기 간섭(EMI)·패키지 워피지(warpage)·실리콘 포토닉스 같은 [멀티피직스 효과]가 칩 성능을 좌우한다. AI GPU·HBM·CoWoS 패키징 시대에는 [반도체 설계 시점에 멀티피직스 시뮬레이션을 동시에 돌려야] 사인오프가 가능하다. 시놉시스 CEO 사신 가지(Sassine Ghazi, 2024년말 아트 드 게우스 후임 취임)는 본 거래를 [실리콘 투 시스템(silicon-to-system) 단일 EDA + 시뮬레이션 플랫폼] 전략의 결정타로 포지셔닝했다.",
    "[딜 규모와 구조.] 2024년 1월 16일 시놉시스가 앤시스 1주당 [현금 $197 + 시놉시스 보통주 0.3450주]를 지급하는 현금·주식 혼합 합병을 발표. 발표 직전 비유출 종가 대비 약 29% 프리미엄, 총 거래 규모(엔터프라이즈 밸류) 약 USD 350억. 자금 조달은 현금 부분 약 USD 195억(부채 + 보유 현금), 주식 부분으로 신규 시놉시스 보통주 약 1억주 발행 (클로징 시점 가격 기준 약 USD 155억). 합병 후 앤시스 주주는 결합 회사의 약 [16.5%]를 보유.",
    "[18개월 규제 마라톤.] EU 위원회 2024년 9월 승인(컨디셔널), 영국 CMA 2024년 9월~2025년 초 검토 후 EU와 동일한 행위적 시정조치 수용으로 클리어, 미국 FTC가 2025년 5월 28일 [컨센트 디크리]로 승인(시놉시스의 광학 솔루션 그룹·Code V·LightTools·LucidShape·RSoft·ImSym + 앤시스의 RTL 파워 분석 툴 PowerArtist를 [키사이트(Keysight)]에 매각하는 구조적 시정조치). 마지막으로 중국 SAMR이 2025년 7월 추가 컨디셔널 승인. 2025년 7월 17일 합병 클로징, 합병 후 본사는 시놉시스 본사인 캘리포니아 마운틴뷰.",
  ],

  dealSummary: {
    dealValueDisplay: "약 USD 350억 (현금 + 주식 혼합)",
    acquirerName: "Synopsys, Inc. (NASDAQ: SNPS)",
    targetName: "Ansys, Inc. (NASDAQ: ANSS)",
    announcedDisplay: "2024년 1월 16일",
    closedDisplay: "2025년 7월 17일",
    country: "미국 (캘리포니아 마운틴뷰)",
  },

  executiveSummary: [
    "[USD 350억 현금·주식 혼합 합병] 앤시스 1주당 현금 $197 + 시놉시스 보통주 0.3450주, 발표 직전 비유출 종가 대비 약 29% 프리미엄",
    "[전략 논리, 칩-투-시스템 플랫폼] 반도체 EDA 1위 시놉시스 + 멀티피직스 시뮬레이션 1위 앤시스 = [실리콘 투 시스템] 단일 설계 플랫폼. AI 칩 복잡도 폭발(5nm 이하, HBM, CoWoS 패키징)이 핵심 수요 동인",
    "[결합 회사 규모] 합산 매출 약 USD 81억, EBITDA 약 USD 35억. 합병 후 앤시스 주주는 결합사 약 16.5% 보유, 본사 캘리포니아 마운틴뷰",
    "[18개월 규제 마라톤] EU 2024.9 컨디셔널 승인, UK CMA 2024.9 같은 시정조치 수용, FTC 2025.5.28 컨센트 디크리 승인(키사이트 매각), 중국 SAMR 2025.7 최종 승인",
    "[FTC 구조적 시정조치 복귀] FTC는 시놉시스의 광학 솔루션 그룹·Code V·LightTools·LucidShape·RSoft·ImSym + 앤시스의 PowerArtist를 [키사이트(Keysight Technologies)]에 매각하도록 강제. 행동적 시정조치(behavioral remedy)가 아닌 [구조적 시정조치(structural remedy)]의 회귀 사례로 평가",
    "[자금 조달 구조] 현금 부분 약 USD 195억(보유 현금 + 신규 부채), 주식 부분으로 신규 시놉시스 보통주 약 1억주 발행(클로징 시점 가격 기준 약 USD 155억)",
    "[차세대 리더십 합병] 시놉시스 CEO 사신 가지(2024년말 창업자 아트 드 게우스 후임 취임)가 합병 회사 통합 지휘. 앤시스 CEO 아짓 가르가야(Ajei Gopal)는 합병과 함께 퇴임",
  ],

  industryOverview: {
    body: "EDA(Electronic Design Automation, 반도체 설계 자동화) 산업은 글로벌 약 USD 150억 규모(2024년 기준)의 작지만 [전 세계 반도체 산업 USD 5,000억 시장의 길목을 지키는] 핵심 SW 산업이다. 시장 구조는 시놉시스·케이던스·지멘스 EDA의 [빅3]가 합쳐서 약 75% 점유, 사실상 과점. AI 칩(엔비디아 H100·B200, 구글 TPU, AWS Trainium 등) 수요 폭발과 첨단 노드(3nm·2nm) 전환으로 EDA 산업 자체가 2022~2024년 두 자릿수 성장 중. 멀티피직스 시뮬레이션 산업은 별도 약 USD 80억 규모로, 앤시스가 약 30% 점유로 1위, 다쏘 시스템(Abaqus)·지멘스(Simcenter)·헥사곤(MSC) 등이 추격. EDA와 멀티피직스는 전통적으로 [별개 시장]이었지만, 첨단 노드에서 칩-패키지-시스템 [공동 설계(co-design)] 수요가 폭발하면서 두 시장이 빠르게 수렴 중. 본 거래의 시장 인식은 이 수렴 트렌드의 [공식 선언].",
    metrics: [
      { label: "글로벌 EDA 시장 (2024)",       value: "약 USD 150억",   sub: "빅3 합산 점유율 약 75%" },
      { label: "글로벌 멀티피직스 시뮬레이션 시장", value: "약 USD 80억",    sub: "앤시스 약 30% 점유 (1위)" },
      { label: "글로벌 반도체 산업 매출 (2024)",   value: "약 USD 5,000억", sub: "EDA가 길목 지키는 상부 산업" },
      { label: "AI 칩 시장 CAGR (2024~2028)",   value: "약 30%대",       sub: "EDA·시뮬레이션 수요 동인" },
    ],
    subBody:
      "EDA 빅3 중 시놉시스는 합성·사인오프 강자, 케이던스는 시뮬레이션·아날로그 강자, 지멘스 EDA는 PCB·시스템 IC에서 차별화. 본 거래로 시놉시스가 EDA + 멀티피직스 [수직 통합]을 단번에 완성하면서 케이던스에 압박. 케이던스도 2024년 BETA CAE(스트럭처 시뮬레이션)를 USD 12.4억에 인수하며 대응에 나섰다. 빅3 EDA가 [순수 EDA 회사]에서 [통합 설계·시뮬레이션 플랫폼 회사]로 동시 진화 중.",
    players: [
      { name: "Synopsys (시놉시스)",       role: "EDA 글로벌 1위, 합성·사인오프 강자, 본 거래 인수자" },
      { name: "Ansys (앤시스)",            role: "멀티피직스 시뮬레이션 1위, 본 거래 피인수" },
      { name: "Cadence Design Systems",   role: "EDA 글로벌 2위, 2024년 BETA CAE 인수로 시뮬레이션 진출 가속" },
      { name: "Siemens EDA (구 Mentor)",   role: "EDA 글로벌 3위, 지멘스 디지털 인더스트리 소프트웨어 산하" },
      { name: "Dassault Systèmes",        role: "Abaqus·CATIA, 멀티피직스 시뮬레이션 2위권 경쟁자" },
      { name: "Keysight Technologies",    role: "본 거래 디베스티처 자산(광학·RTL 파워) 인수자, FTC 컨센트 디크리의 [업프론트 바이어]" },
      { name: "NVIDIA / TSMC / Samsung",   role: "EDA·시뮬레이션 최대 고객, 본 거래 통합 플랫폼의 직접 수혜자" },
    ],
  },

  companyOverview: {
    targetName: "Ansys, Inc. (NASDAQ: ANSS)",
    body: "앤시스는 1970년 펜실베이니아 캐넌스버그에서 메커니컬 엔지니어 존 스완슨이 SASI(Swanson Analysis Systems, Inc.)로 설립, 1994년 ANSYS로 사명 변경, 1996년 나스닥 상장. 핵심 제품은 구조해석 Mechanical, 유체역학 Fluent, 전자기 HFSS·Maxwell, 반도체 사인오프 RedHawk·Totem, 그리고 시스템 시뮬레이션 SCADE·Twin Builder 등 약 50여 종의 솔버 묶음. 자동차(전기차 배터리 열관리·BMS), 항공우주(F-35 스텔스 설계·SpaceX 로켓 유체해석), 반도체 패키지(2.5D/3D 패키징 워피지·전력 무결성), 의료기기(MRI 자기장 시뮬레이션)에 침투. FY2023 매출 약 USD 23.3억, 영업이익 약 USD 6.7억, OPM 약 28%(GAAP), Non-GAAP 기준 OPM 42%. 글로벌 직원 약 6,500명, 본사 펜실베이니아 캐넌스버그.",
    metrics: [
      { label: "설립연도",                value: "1970년",        sub: "펜실베이니아 캐넌스버그, SASI로 출발" },
      { label: "상장일",                  value: "1996.06",       sub: "NASDAQ: ANSS" },
      { label: "FY2023 매출",             value: "USD 2.27십억",   sub: "+10% YoY" },
      { label: "FY2023 GAAP 영업이익",     value: "USD 6.7억",     sub: "OPM 약 28%" },
      { label: "FY2023 Non-GAAP OPM",     value: "약 42%",         sub: "고마진 SW 사업 특성" },
      { label: "글로벌 직원 수",            value: "약 6,500명",     sub: "본사 펜실베이니아 캐넌스버그" },
    ],
    revenueBreakdown: [
      { name: "Lease License (구독형)",  pct: 38, color: "bg-amber-500", amt: "약 USD 862M" },
      { name: "Perpetual License",      pct: 12, color: "bg-amber-400", amt: "약 USD 272M" },
      { name: "Maintenance",            pct: 42, color: "bg-amber-300", amt: "약 USD 953M" },
      { name: "Services",               pct: 8,  color: "bg-amber-200", amt: "약 USD 182M" },
    ],
    revenueNote: "FY2023 기준 추정 분해. 구독형(Lease) + 유지보수(Maintenance) 합산 80%로 SaaS 전환이 빠르게 진행 중.",
    financials: [
      { year: "FY2019", revenue: 1516, cogs: 168, grossProfit: 1348, sga: 510, operatingIncome: 515, ebitda: 600 },
      { year: "FY2020", revenue: 1681, cogs: 195, grossProfit: 1486, sga: 580, operatingIncome: 480, ebitda: 580 },
      { year: "FY2021", revenue: 1907, cogs: 230, grossProfit: 1677, sga: 660, operatingIncome: 535, ebitda: 660 },
      { year: "FY2022", revenue: 2066, cogs: 260, grossProfit: 1806, sga: 720, operatingIncome: 593, ebitda: 745 },
      { year: "FY2023", revenue: 2270, cogs: 290, grossProfit: 1980, sga: 770, operatingIncome: 670, ebitda: 820 },
    ],
    financialsNote: "단위: USD millions | US GAAP 기준 | 출처: 앤시스 10-K, 8-K 공시 (FY2023). FY2020 매출 둔화는 COVID-19 영향, FY2021 이후 구독 전환 가속.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
  },

  dealStructure: {
    body: "본 거래는 [현금 + 주식 혼합(Cash and Stock Mix)] 합병이다. 앤시스 보통주 1주당 [현금 $197.00 + 시놉시스 보통주 0.3450주]가 지급된다. 발표 시점(2024년 1월 16일) 시놉시스 종가 약 $501 기준으로 환산하면 1주당 약 $370($197 현금 + $172.85 주식)에 해당, 앤시스 비유출 종가 약 $287 대비 약 29% 프리미엄. 자금 조달은 현금 부분 약 USD 195억(시놉시스 보유 현금 + 신규 부채 발행), 주식 부분으로 신규 시놉시스 보통주 약 1억주 발행. 합병 후 앤시스 주주는 결합 회사의 약 16.5%, 기존 시놉시스 주주가 약 83.5%를 보유한다. 합병 후 법인 형태는 시놉시스가 존속 법인(survivor), 앤시스는 100% 자회사로 편입 후 통합. 본사 캘리포니아 마운틴뷰.",
    preOwnership: {
      nodes: [
        { id: "snps_pre",       label: "Synopsys, Inc.",       sub: "NASDAQ: SNPS, EDA 1위",     type: "acquirer" },
        { id: "anss_pre",       label: "Ansys, Inc.",          sub: "NASDAQ: ANSS, 멀티피직스 1위", type: "public" },
        { id: "anss_holders",   label: "Ansys 공개주주",        sub: "기관·개인 100% 자유유통",     type: "entity" },
      ],
      edges: [
        { from: "anss_holders", to: "anss_pre", label: "100% 자유유통" },
        { from: "snps_pre",     to: "anss_pre", label: "인수 제안 (cash + stock)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "snps_post",      label: "Synopsys, Inc. (결합사)", sub: "본사 캘리포니아 마운틴뷰",  type: "acquirer" },
        { id: "legacy_snps",    label: "기존 Synopsys 주주",      sub: "약 83.5% 보유",            type: "public" },
        { id: "former_anss",    label: "기존 Ansys 주주",         sub: "약 16.5% 보유",            type: "entity" },
        { id: "anss_sub",       label: "Ansys, Inc. (자회사)",    sub: "100% 시놉시스 자회사",      type: "target" },
        { id: "keysight",       label: "Keysight Technologies",  sub: "디베스티처 자산 인수자",     type: "fund" },
      ],
      edges: [
        { from: "legacy_snps",  to: "snps_post",  label: "83.5%" },
        { from: "former_anss",  to: "snps_post",  label: "16.5% (신주 수령)" },
        { from: "snps_post",    to: "anss_sub",   label: "100% 자회사" },
        { from: "snps_post",    to: "keysight",   label: "광학·RTL 파워 SW 매각" },
      ],
    },
    keyTerms: [
      { label: "거래 형식",             value: "현금 + 주식 혼합 합병 (Cash and Stock Merger)" },
      { label: "총 거래 규모 (EV)",      value: "약 USD 350억",                        accent: true },
      { label: "주당 대가",              value: "현금 $197.00 + 시놉시스 보통주 0.3450주",  accent: true },
      { label: "프리미엄",               value: "약 29% (발표 직전 비유출 종가 대비)",       accent: true },
      { label: "현금 자금 조달",          value: "약 USD 195억 (보유 현금 + 신규 부채)" },
      { label: "신규 발행 시놉시스 보통주",  value: "약 1억주 (클로징 시점 약 USD 155억)" },
      { label: "합병 후 주주 구성",       value: "기존 SNPS 약 83.5% / 기존 ANSS 약 16.5%" },
      { label: "FTC 시정조치",           value: "키사이트로 광학 솔루션 그룹 + Code V/LightTools/LucidShape/RSoft/ImSym + PowerArtist 매각 (구조적 시정조치)", accent: true },
      { label: "EU 시정조치",            value: "2024.9 컨디셔널 승인 (동일 디베스티처)" },
      { label: "UK CMA",               value: "2024.9~2025 EU 동일 시정조치 수용 후 클리어" },
      { label: "China SAMR",           value: "2025.7 컨디셔널 승인 (마지막 규제당국)" },
      { label: "터미네이션 피",            value: "USD 15억 (시놉시스 측), USD 9.5억 (앤시스 측)" },
      { label: "발표 → 클로징 소요",       value: "약 18개월 (2024.1.16 → 2025.7.17)" },
    ],
  },

  advisors: {
    body: "양 측 모두 메가 테크 M&A에 단골로 등장하는 톱티어 라인업. 18개월 규제 마라톤에 4개 관할(미국·EU·영국·중국)을 동시에 다뤄야 했기 때문에, 전통적인 M&A 자문보다 [반독점 자문(antitrust counsel)]의 역할이 결정적이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Synopsys (인수자)",
        initials: "SNPS",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Evercore",
            role: "재무 자문 (Lead Financial Advisor)",
            roleType: "financial",
            note: "딜 구조·밸류에이션·자금 조달 자문",
          },
          {
            firm: "Cleary Gottlieb Steen & Hamilton LLP",
            role: "법무 자문 (Lead M&A Counsel)",
            roleType: "legal",
            note: "합병 계약·증권법·반독점 글로벌 코디네이션",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Ansys (피인수)",
        initials: "ANSS",
        bg: "bg-amber-600",
        advisors: [
          {
            firm: "Qatalyst Partners LP",
            role: "재무 자문 (Lead Financial Advisor)",
            roleType: "financial",
            note: "이사회 자문, 페어니스 오피니언 제출",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom LLP",
            role: "법무 자문 (Lead M&A Counsel)",
            roleType: "legal",
            note: "합병 계약 협상·주주 관계·반독점 절차",
          },
          {
            firm: "Goodwin Procter LLP",
            role: "법무 자문 (Co-Counsel)",
            roleType: "legal",
            note: "거버넌스·이사 의무 자문",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공식 보도자료 및 SEC 공시 기반. 일부 보조 자문사는 누락 가능.",
  },

  valuation: {
    body: "본 거래의 핵심 멀티플은 [약 15배 EV/EBITDA]다. 결합 회사 합산 EBITDA 약 USD 35억 기준으로 EV USD 350억을 나누면 약 10배 수준이지만, 앤시스 단독 FY2023 EBITDA 약 USD 8.2억 대비 EV USD 350억 전체를 적용하면 약 42배라는 산술 수치가 나온다. 시장은 일반적으로 [앤시스 100% 인수 가격 USD 350억 ÷ 앤시스 FY2023 EBITDA USD 8.2억] = 약 42배가 아니라, 시너지(연 USD 4억+ 매출 시너지, 연 USD 4억 비용 시너지) 반영 후 [Run-rate 결합 EBITDA 약 USD 23~25억] 기준 약 15배로 평가한다. EDA·시뮬레이션 SW 산업 평균(15~20배) 대비 합리적 수준. 핵심 가치 동인은 [AI 칩 복잡도 폭발에 따른 칩-투-시스템 통합 설계 플랫폼 수요], 시놉시스 + 앤시스 통합 솔루션이 첨단 노드(3nm·2nm·1.4nm)에서 사실상 유일한 풀스택 옵션이 된다는 평가.",
    rows: [
      { item: "총 거래 EV",                      val: "약 USD 350억",       note: "현금 $195억 + 주식 $155억 (혼합)",                   accent: true },
      { item: "주당 대가",                       val: "$197 + 0.3450 SNPS주", note: "발표 시점 환산 약 $370/주" },
      { item: "프리미엄 (발표 직전 비유출 대비)",     val: "약 29%",            note: "비유출 종가 약 $287 기준" },
      { item: "Ansys FY2023 매출",              val: "USD 22.7억",        note: "+10% YoY" },
      { item: "Ansys FY2023 EBITDA",            val: "약 USD 8.2억",       note: "추정 (Non-GAAP 기준)" },
      { item: "EV / FY2023 Revenue (단독)",      val: "약 15.4배",         note: "고성장 SW 평균(10~15배) 상회" },
      { item: "EV / FY2023 EBITDA (단독)",       val: "약 42배",           note: "시너지 미반영 시 비싼 수치" },
      { item: "EV / Run-rate Combined EBITDA",  val: "약 15배",           note: "시너지 반영 후 시장 컨센서스",                       accent: true },
      { item: "결합 회사 매출 (Pro Forma)",        val: "약 USD 81억",       note: "Synopsys $58억 + Ansys $23억" },
      { item: "결합 회사 EBITDA (Pro Forma)",      val: "약 USD 35억",       note: "OPM 약 43%, AI 칩 사이클 피크" },
      { item: "매출 시너지 (3년 내)",              val: "연 USD 4억+",       note: "크로스셀 + 통합 플랫폼" },
      { item: "비용 시너지 (3년 내)",              val: "연 USD 4억",        note: "중복 R&D·G&A 합리화" },
    ],
    disclaimer: "주: 시너지 수치는 시놉시스 IR 발표 가이드. EBITDA는 일부 Non-GAAP 추정 포함.",
  },

  rationale: {
    buyer: {
      title: "Synopsys, 왜 USD 350억을 썼나",
      initials: "SNPS",
      bg: "bg-indigo-700",
      points: [
        "[칩-투-시스템 통합 플랫폼] 5nm 이하 첨단 노드에서 칩 단독 설계로는 불충분, 멀티피직스(전력·열·EMI·패키지) 효과를 설계 단계부터 풀어야 함. 시놉시스 EDA + 앤시스 시뮬레이션이 합쳐지면 [실리콘 투 시스템] 단일 환경 구현",
        "[AI 칩 복잡도 사이클 피크 진입] 엔비디아 H100·B200, 구글 TPU, AWS Trainium 등 AI 가속기는 HBM·CoWoS·3D 패키징을 동시 활용, 멀티피직스 의존도 폭증. 본 거래는 AI 칩 사이클 정점에서 [수요 동인 자체를 사들이는] 베팅",
        "[경쟁자 케이던스 견제] 케이던스가 2024년 BETA CAE를 USD 12.4억에 인수하며 시뮬레이션 진출 가속, 시놉시스가 더 큰 한 방으로 카운터. 빅3 EDA가 [순수 EDA → 통합 설계 플랫폼]으로 동시 진화하는 산업 재편 선점",
        "[크로스셀 + 비용 시너지] 매출 시너지 연 USD 4억+(자동차·항공우주 시뮬레이션 고객에 EDA 크로스셀, 반도체 EDA 고객에 멀티피직스 크로스셀), 비용 시너지 연 USD 4억(중복 R&D·G&A 합리화)",
        "[Sassine Ghazi 시대 개막] 시놉시스 창업자 아트 드 게우스가 2024년말 CEO에서 물러나고 사신 가지가 후임 취임. 본 거래는 새 CEO 체제의 [정의 거래], 시놉시스 정체성을 [EDA 회사 → 통합 설계 플랫폼 회사]로 재정의",
      ],
    },
    seller: {
      title: "Ansys, 왜 팔았나",
      initials: "ANSS",
      bg: "bg-amber-600",
      points: [
        "[29% 프리미엄 + 결합사 16.5% 지분] 발표 직전 비유출 종가 대비 29% 프리미엄에 현금 + 결합 회사 주식 16.5% 보유, 단순 매각이 아닌 [통합 플랫폼 업사이드 노출]",
        "[독립 성장의 한계] 멀티피직스 시뮬레이션 단독으로는 반도체 EDA의 첨단 노드 수요 사이클 직접 접근이 제한적. 시놉시스 산하에서 [반도체 고객 직접 채널] 확보 가능",
        "[AI 칩 시뮬레이션 수요 폭증 대응] AI 가속기 패키지·전력 무결성 시뮬레이션 수요가 폭발 중이지만, 앤시스 단독으로는 EDA 사인오프 흐름에 깊이 통합되기 어려움. 통합 후 RedHawk·Totem 등이 시놉시스 사인오프 흐름의 [네이티브 기능]으로 자리잡음",
        "[Ajei Gopal CEO의 출구 전략] 2017년부터 앤시스를 이끈 Gopal CEO가 매각 협상을 주도, 합병 클로징과 함께 퇴임. 주주 가치 실현 + 본인 경력 정점 매듭",
        "[독립 상태 유지 시 케이던스·다쏘에 압박] 시놉시스가 인수하지 않았다면 케이던스·다쏘 등 경쟁자가 결국 멀티피직스 SW 회사를 사들였을 것, 능동적 매각이 수동적 압박보다 유리",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 6월",
    body: "클로징 후 약 11개월. 통합 진행 상황은 시놉시스 IR 가이드를 기준으로 [예상보다 빠른 통합]으로 평가. 2026년 1월 시놉시스가 약 2,000명 규모의 통합 후 인력 조정을 발표(전체 결합 직원 약 25,000명 중 약 8%), 중복 R&D·G&A를 중심으로 한 정상적 시너지 실행. 매출 시너지는 자동차·반도체 패키지 고객에서 통합 솔루션 도입이 가시화 중이지만, 본격적 크로스셀 효과는 2026~2027년 본격화 전망. AI 칩 사이클이 2025~2026년 정점을 찍은 후 어떻게 전개되느냐가 결합사의 중기 성장률을 좌우. FTC가 구조적 시정조치(키사이트 매각)로 컨센트 디크리를 부여한 점은 [트럼프 2기 FTC의 행위적 시정조치 → 구조적 시정조치 회귀] 트렌드의 첫 대형 사례로 법률 실무자들 사이 중요한 선례로 인용되고 있다.",
    overallVerdict: "통합 초기 무난한 진행, AI 칩 사이클 정점 이후의 결합 회사 성장률이 진짜 시험대",
    positives: [
      "[통합 일정 기존 가이드 부합] 약 2,000명 인력 조정 + 중복 시스템 통합이 2026년 1Q까지 1차 완료, 비용 시너지 연 USD 4억 목표 달성 가시화",
      "[AI 칩 고객 채택 가속] 엔비디아·AMD·구글 TPU 팀이 통합 시놉시스+앤시스 솔루션을 첨단 노드 사인오프 흐름에 채택 시작",
      "[멀티피직스 + EDA 크로스셀 초기 성과] 자동차 OEM(테슬라·BYD·현대·VW) 등 앤시스 기존 고객에 시놉시스 EDA 신규 채택 사례 보고",
      "[FTC 구조적 시정조치의 정확한 집행] 키사이트에 매각된 광학·RTL 파워 SW 자산이 정상 운영, 시장 경쟁 우려가 사후적으로 완화",
    ],
    risks: [
      "[AI 칩 사이클 정점 이후 둔화] 2025~2026년 정점을 찍은 AI 칩 사이클이 2027년 이후 둔화되면 결합 회사 성장률이 시장 기대치 미달할 위험",
      "[중국 SAMR 컨디셔널 조건의 장기 부담] 중국 SAMR이 부여한 컨디셔널 조건은 [중국 고객에 차별 없는 라이센스 제공] 등으로 미·중 기술 갈등 격화 시 운영 부담",
      "[인력 조정 후 핵심 인재 이탈] 앤시스의 솔버 알고리즘 핵심 엔지니어가 이탈할 경우 멀티피직스 기술 우위 자체가 약화 가능",
      "[케이던스의 반격] 케이던스가 BETA CAE 인수 후 추가 M&A 또는 자체 R&D 투자를 가속할 경우 통합 플랫폼 우위가 단축될 수 있음",
      "[규제 시정조치 모니터링 부담] 4개 관할의 컨디셔널 승인 조건을 5~10년간 지속 준수해야 함, 상시 법무·컴플라이언스 부담",
    ],
    editorNote:
      "이 거래의 진짜 의미는 [USD 350억]이라는 숫자가 아니라, 빅3 EDA가 [순수 EDA 회사 → 통합 설계 플랫폼 회사]로 동시 진화하는 산업 재편의 [공식 신호탄]이라는 점이다. AI 칩 복잡도가 5nm 이하에서 폭발하면서 [반도체 설계 ≠ 디지털 로직], [반도체 설계 = 전력·열·전자기·패키지 멀티피직스 동시 풀이]가 새 표준이 됐다. 시놉시스의 베팅은 단순한 매출 합산이 아니라 [차세대 칩 설계 자체의 정의를 다시 쓰겠다]는 것. 케이던스·지멘스가 어떻게 따라잡느냐가 향후 5년 EDA·시뮬레이션 산업 지형을 결정한다., 2026년 6월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "SNPS",
    acquirerBg: "bg-indigo-700",
    targetInitials: "ANSS",
    targetBg: "bg-amber-600",
    acquirerName: "Synopsys, Inc.",
    targetName: "Ansys, Inc.",
    dealTitle: "Cash and Stock Merger, Creating a Silicon-to-Systems Design Leader",
    dealSize: "USD 35.0bn",
    dealSizeUSD: "USD ~35bn",
    evEbitda: "~15x (run-rate)",
    closeDate: "Jul 17, 2025",
  },

  sources: [
    { id: 1, text: "Synopsys & Ansys Joint Press Release, Synopsys to Acquire Ansys, Creating a Leader in Silicon to Systems Design (2024.01.16)", url: "https://www.ansys.com/news-center/press-releases/1-16-24-synopsys-acquires-ansys" },
    { id: 2, text: "Synopsys Form 8-K, Definitive Merger Agreement (2024.01.16)", url: "https://www.sec.gov/Archives/edgar/data/0000883241/000119312524008120/d720113dex991.htm" },
    { id: 3, text: "Ansys Form 425, FY2025 Merger Communications", url: "https://www.sec.gov/Archives/edgar/data/0001013462/000114036125000840/ef20041421_425.htm" },
    { id: 4, text: "European Commission Press Release, Commission approves acquisition of Ansys by Synopsys subject to conditions (2024.09)", url: "https://www.datacenterdynamics.com/en/news/european-regulator-approves-synopsys-35bn-ansys-acquisition-after-companies-agree-to-divest-software-assets/" },
    { id: 5, text: "FTC Press Release, FTC Order Allows Synopsys-Ansys Merger Subject to Divestitures to Keysight (2025.05.28)", url: "https://www.ftc.gov" },
    { id: 6, text: "Freshfields blog, The Return of Structural Remedies: FTC Clears Deal Contingent on Divestiture Package", url: "https://www.freshfields.com/en/our-thinking/blogs/a-fresh-take/the-return-of-structural-remedies-ftc-clears-deal-contingent-on-divestiture-pack-102kd5c" },
    { id: 7, text: "Data Center Dynamics, Synopsys closes $35bn acquisition of Ansys (2025.07.17)", url: "https://www.datacenterdynamics.com/en/news/synopsys-closes-35bn-acquisition-of-ansys/" },
    { id: 8, text: "Fortune, Synopsys CEO Sassine Ghazi took us inside his $35 billion acquisition of Ansys (2025.07.17)", url: "https://fortune.com/2025/07/17/synopsys-ceo-sassine-ghazi-35-billion-acquisition-ansys/" },
    { id: 9, text: "Ansys 10-K, FY2023 Annual Report", url: "https://www.sec.gov/Archives/edgar/data/0001013462/000110465924045825/tm248385d2_ars.pdf" },
    { id: 10, text: "Synopsys FY2025 Earnings Materials, VMware-style Integration Update for Ansys Combination", url: "https://www.sec.gov/Archives/edgar/data/0000883241/000114036125006323/ny20044174x2_ex99-2.htm" },
  ],

  seo: {
    title: "Synopsys × Ansys 350억 달러 합병, EDA + 멀티피직스 = 칩-투-시스템",
    description:
      "2024년 1월 발표 → 2025년 7월 클로징. 시놉시스가 앤시스를 약 USD 350억(현금 $197 + SNPS 0.3450주, 29% 프리미엄)에 인수. AI 칩 복잡도 폭발 시대의 칩-투-시스템 통합 설계 플랫폼 베팅. FTC·EU·UK CMA·중국 SAMR 4중 규제 마라톤과 키사이트 매각(구조적 시정조치) 끝에 클로징.",
    keywords: [
      "Synopsys Ansys 인수",
      "시놉시스 앤시스 합병",
      "EDA 멀티피직스",
      "칩 투 시스템",
      "Silicon to Systems",
      "EDA 빅3",
      "AI 칩 설계 자동화",
      "FTC 구조적 시정조치",
      "Keysight 디베스티처",
      "China SAMR 마지막 승인",
      "Sassine Ghazi",
      "Cash and Stock Merger",
    ],
  },

  concepts: [
    {
      term: "EDA (Electronic Design Automation, 반도체 설계 자동화)",
      description: "반도체 칩 설계 엔지니어가 사용하는 RTL 합성·검증·물리 설계·사인오프 툴체인 일괄 SW 산업. 시놉시스·케이던스·지멘스 EDA의 [빅3]가 글로벌 약 75% 점유, 전 세계 반도체 산업 USD 5,000억 시장의 [길목]을 지키는 핵심 인프라.",
    },
    {
      term: "멀티피직스 시뮬레이션 (Multiphysics Simulation)",
      description: "구조·유체·전자기·열·반도체 패키지 등 복수 물리 도메인을 하나의 환경에서 동시에 풀어주는 시뮬레이션 SW. 앤시스 Mechanical·Fluent·HFSS가 대표 솔버. 자동차·항공우주·반도체 패키지·의료기기 전반에서 설계 검증의 표준 도구.",
    },
    {
      term: "칩-투-시스템 (Chip-to-System / Silicon-to-Systems Design)",
      description: "반도체 칩 단독 설계로는 첨단 노드(5nm 이하)에서 전력·열·전자기·패키지 워피지 등 물리 효과를 해결할 수 없어, [칩 + 패키지 + 보드 + 시스템]을 단일 환경에서 동시 설계·시뮬레이션하는 새 표준. 본 거래의 핵심 전략 목표.",
    },
    {
      term: "FTC 구조적 시정조치 (FTC Structural Remedy / Consent Divestiture)",
      description: "독점금지 우려가 있는 합병을 승인하되 [특정 사업 자산을 제3자에 의무 매각]하도록 강제하는 컨센트 디크리. 행위적 시정조치(behavioral remedy)와 달리 시장 구조 자체를 변경. 본 거래에서는 광학·RTL 파워 SW를 키사이트에 매각하는 [업프론트 바이어] 구조.",
    },
    {
      term: "중국 SAMR 라스트 어프루버 패턴",
      description: "글로벌 메가 테크 M&A에서 미국·EU·영국 승인을 받은 후 중국 SAMR이 가장 늦게 승인하는 패턴. 마이크로소프트-액티비전, 브로드컴-VMware 등에서 반복. 본 거래에서도 SAMR이 2025년 7월 마지막으로 클리어. 미·중 기술 갈등의 직접 지렛대로 활용되는 경향.",
    },
    {
      term: "Cash + Stock Mix Structuring (현금·주식 혼합 구조화)",
      description: "거래 대가를 현금과 인수자 주식으로 나눠 지급하는 구조. 본 거래는 현금 $197 + SNPS 0.3450주. 인수자는 부채·현금 부담을 분산, 피인수 주주는 결합사 업사이드 노출 + 즉시 현금 확보 둘 다 가능. 메가 M&A에서 표준 구조.",
    },
    {
      term: "Big Three EDA (EDA 빅3)",
      description: "시놉시스(SNPS)·케이던스(CDNS)·지멘스 EDA(전 Mentor Graphics, 2017년 지멘스가 인수) 3사. 글로벌 EDA 시장의 약 75% 점유. 본 거래로 시놉시스가 시뮬레이션까지 흡수하면서 빅3 간 [통합 설계 플랫폼 경쟁]이 본격화.",
    },
    {
      term: "AI 칩 복잡도 동인 (AI Chip Complexity Driver)",
      description: "엔비디아 H100·B200, 구글 TPU, AWS Trainium 등 AI 가속기는 HBM·CoWoS·3D 패키징 등 첨단 패키지 기술과 5nm 이하 노드를 동시 사용, 전력·열·EMI 멀티피직스 의존도가 폭발. EDA·시뮬레이션 산업 자체의 성장률을 끌어올린 직접 동인.",
    },
  ],

  faq: [
    {
      q: "왜 시놉시스가 앤시스를 USD 350억이라는 큰 돈을 주고 인수했나요?",
      a: "AI 칩 복잡도가 폭발하는 시대에는 칩 단독 설계로는 충분치 않기 때문입니다. 5nm 이하 첨단 노드와 HBM·CoWoS 같은 첨단 패키징을 동시에 쓰는 AI 가속기는 [전력·열·전자기·패키지 워피지] 같은 멀티피직스 효과가 칩 성능을 좌우합니다. 시놉시스가 [반도체 EDA] 1위, 앤시스가 [멀티피직스 시뮬레이션] 1위인 만큼, 둘을 합치면 [칩 + 패키지 + 시스템]을 단일 환경에서 동시 설계·시뮬레이션할 수 있는 [실리콘 투 시스템(silicon-to-systems)] 단일 플랫폼이 만들어집니다. 시놉시스는 이 플랫폼 자체를 [차세대 칩 설계의 표준]으로 만들겠다는 베팅을 한 것입니다.",
    },
    {
      q: "29% 프리미엄이 비싼 건가요?",
      a: "EDA·시뮬레이션 SW 산업의 메가 M&A 기준으로는 표준 범위입니다. 비교 가능한 사례로 브로드컴-VMware(약 44% 프리미엄), 마이크로소프트-액티비전(약 45%), Adobe-Figma(시도, 약 80%) 등이 있어 29%는 오히려 [상대적 절제]에 가깝습니다. 단순 EV/EBITDA 약 42배(앤시스 단독)는 비싸 보이지만, 시너지 반영 후 결합 회사 Run-rate 기준 약 15배로 산업 평균 범위. 핵심은 AI 칩 사이클 정점 진입 시점에 [수요 동인 자체를 사들이는] 베팅이라는 점입니다.",
    },
    {
      q: "FTC가 컨센트 디크리로 [구조적 시정조치]를 부여한 게 왜 중요한가요?",
      a: "2010~2020년대 동안 미국 FTC는 합병 시정조치로 [행위적 시정조치(behavioral remedy, 예: 특정 행동을 안 하겠다는 약속)]를 자주 사용했습니다. 그러나 행위적 시정조치는 사후 감독이 어렵고 효과가 약하다는 비판이 누적됐고, 트럼프 2기 FTC가 [구조적 시정조치(structural remedy, 사업 자산 매각)] 회귀 방침을 천명. 본 거래는 그 [첫 대형 사례]로 시놉시스의 광학 솔루션 그룹·Code V·LightTools·LucidShape·RSoft·ImSym과 앤시스의 PowerArtist를 키사이트(Keysight)에 매각하는 [업프론트 바이어] 구조로 클리어. 향후 메가 M&A의 시정조치 표준 모델로 인용될 가능성이 큽니다.",
    },
    {
      q: "중국 SAMR이 가장 늦게 승인한 게 무슨 의미인가요?",
      a: "최근 5~10년 글로벌 메가 테크 M&A에서 미국·EU·영국 승인을 모두 받은 후 중국 SAMR(국가시장감독관리총국)이 가장 늦게 승인하는 [라스트 어프루버 패턴]이 굳어졌습니다. 본 거래도 2025년 5월 FTC·EU 클리어 후 SAMR이 2025년 7월에야 컨디셔널 승인. 단순 절차 지연이 아니라 [미·중 기술 갈등의 지렛대]로 활용되는 측면이 큽니다. 통상 SAMR은 [중국 고객에 차별 없는 라이센스 제공] 같은 컨디셔널 조건을 부여, 미·중 갈등 격화 시 운영 부담이 늘어날 수 있어 결합 회사의 장기 리스크 요인.",
    },
    {
      q: "케이던스나 지멘스 EDA가 이 거래에 어떻게 반응했나요?",
      a: "케이던스는 본 거래 발표 직후인 2024년 8월 [BETA CAE Systems(스트럭처 시뮬레이션)]를 USD 12.4억에 인수하며 시뮬레이션 진출을 가속했습니다. 지멘스 EDA는 모회사 지멘스가 이미 멀티피직스 시뮬레이션(Simcenter STAR-CCM+) 자산을 보유하고 있어 별도 M&A 없이 통합 가속 중. 결과적으로 빅3 EDA가 모두 [순수 EDA 회사 → 통합 설계 플랫폼 회사]로 동시 진화. 본 거래는 이 [산업 재편의 공식 신호탄]으로 평가되며, 향후 5년 EDA·시뮬레이션 시장 지형이 본 거래의 통합 성공 여부에 크게 좌우될 전망입니다.",
    },
    {
      q: "이 거래가 한국 반도체 산업에 어떤 영향을 주나요?",
      a: "한국 팹리스(삼성 LSI, SK 하이닉스 LPDDR/HBM 설계팀)·파운드리(삼성 파운드리)·메모리 모두 시놉시스 EDA의 헤비 유저입니다. 본 거래로 시놉시스 + 앤시스 통합 솔루션이 한국 고객의 [첨단 노드 + HBM 설계 표준]으로 자리잡을 가능성이 큽니다. 특히 HBM3E/HBM4 세대에서 패키지 워피지·전력 무결성 시뮬레이션이 결정적인데, 통합 솔루션이 이 부분의 [디팩토 표준]이 될 전망. 다만 단일 벤더 의존도 심화는 라이센스 가격 협상력 약화로 이어질 수 있어, 한국 반도체 업계가 케이던스·지멘스 등 대체 벤더와의 멀티벤더 전략을 동시에 가져갈 가능성이 높습니다.",
    },
  ],
};

export default deal;
