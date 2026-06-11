/**
 * 머스트자산운용 × 영풍 (Young Poong Corp) — 한국 토종 활동주의의 자기모순 폭로 캠페인
 * Korea Zinc-MBK 분쟁의 후일담 · 영풍 자사주 6.62% 소각 + Korea Zinc 풋옵션 공개 demand
 * 마지막 검토 시점: 2026년 6월
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "must-young-poong",
  title: "머스트자산운용 × 영풍 — 한국 토종 활동주의의 자기모순 폭로 캠페인",
  subtitle: "김두용 머스트자산운용이 Korea Zinc 분쟁의 [후일담]으로 던진 카드 · 자사주 6.62% 소각 + Korea Zinc 풋옵션 공개 + 10:1 액면분할 요구",
  category: "activism",
  industry: "비철금속 제련 / Korean Activism / Korea Zinc 분쟁 연계",
  country: "대한민국",
  announcedAt: "2024-11-25",
  closedAt: "2025-12-31",
  announcedDisplay: "2024년 11월 (1차 공개서한)",
  closedDisplay: "진행 중 (2026년 6월 기준 부분 승리 + 잔존 요구 협상)",
  readingMinutes: 14,
  tags: [
    "머스트자산운용",
    "김두용",
    "영풍",
    "Young Poong",
    "Korea Zinc 분쟁",
    "자사주 소각",
    "행동주의",
    "토종 활동주의",
    "Korea Zinc 풋옵션",
    "액면분할",
    "한국 활동주의 wave",
    "한국",
  ],
  excerpt:
    "2024년 11월 25일 한국 토종 행동주의 운용사 머스트자산운용(김두용 대표, 영풍 지분 약 2%)이 영풍에 공개서한을 던졌다. 핵심 메시지는 [영풍이 Korea Zinc에는 거버넌스 개혁을 요구하면서 정작 자기 회사 자사주 6.62%는 10년 동안 한 주도 소각하지 않았다]는 자기모순 폭로. 다섯 가지 요구는 [자사주 전량 소각 + 1,000% 무상증자 또는 10:1 액면분할 + Korea Zinc 풋옵션 계약 공개 + 부동산 자산재평가 + Korea Zinc 풋옵션 현금흐름의 30%+ 주주환원 약속]. 영풍은 한 달 만에 강성두 사장과 김두용 대표가 직접 면담했고, 2025년 3월 10일 영풍 이사회는 [2026년 3월까지 자사주 전량 소각 + 10:1 액면분할 + 머스트 추천 전영준 변호사 사외이사 후보 추천]을 결의 — 머스트의 주주제안을 사실상 대부분 수용하며 한국 활동주의 사상 가장 빠른 [부분 항복]을 기록. 이 캠페인은 Korea Zinc-MBK 18개월 분쟁의 [후일담]이자, 얼라인파트너스 7개 금융지주 캠페인 이후 한국 토종 활동주의 wave가 \"Korea Zinc 분쟁의 약체 동맹군\"까지 정조준할 수 있음을 입증한 사례다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "MUST", bg: "bg-purple-700", label: "머스트자산운용 (김두용)" },
  target:   { initials: "YP",   bg: "bg-stone-700", label: "영풍 (Young Poong Corp)" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "머스트자산운용(Must Asset Management)은 2006년 설립된 머스트인베스트먼트가 모태다. 2010년 머스트투자자문으로, 2016년 9월 머스트자산운용으로 사명을 바꿨다. 대표 김두용은 서울대 건축학과 출신으로 SNU 주식투자 동아리 SMIC(서울대 미다스 투자클럽) 1세대. 가치투자 + 행동주의 결합 운용 철학으로 한국 시장에서 [정량 분석 + 공개 압박 + 직접 면담]의 3단 플레이북을 일관 적용해 왔다. AUM은 2022년 초 약 6,000억 원 수준에서 2023년 초 약 2,361억 원으로 급감(2022년 -56% 수익률)했으나, 2024~2025년 회복 국면에서 영풍 캠페인 등 활동주의 트랙으로 재도약. 2026년 시점 AUM은 시장 관측 약 1.96조 원 수준 (공식 미확인).",
    "[1차 캠페인 — 태영건설 (2014~2020).] 머스트는 2014년부터 태영건설 지분 매입 시작, 2017년 5%+ 보유. 2019년 8월 보유 목적을 [단순투자]에서 [경영참여]로 변경하며 한국 1세대 토종 행동주의 캠페인 본격화. 태영건설의 지주회사 전환 + 비핵심 자산 매각 + 환원 확대 요구를 관철시킨 뒤 차익을 실현. 2021년 다시 일부 지분 재매집. 한국 토종 행동주의가 [단일 회사 장기 engagement]로 성과를 낼 수 있음을 입증한 머스트의 시그니처 사례.",
    "[2차 캠페인 — 영풍 (2024.11~).] 2024년 11월 25일 머스트는 [영풍 주주가치 제고와 기업 거버넌스 개선에 대한 제언]이라는 공개 입장문을 발표하며 활동주의 캠페인 개시. 12월 3일 BusinessWire를 통해 [MUST Asset Management Launches Activist Campaign on Young Poong Corporation] 영문 공식 announcement 송출. 5대 요구사항은 ① 자사주 6.62% 전량 소각 + 정관 개정 ② 1,000% 무상증자 또는 10:1 액면분할 ③ Korea Zinc에 대한 풋옵션 계약 공개 (영풍이 MBK-영풍 컨소시엄을 통해 보유한 풋옵션 의혹) ④ 서울 도심 prime 부동산 자산재평가 ⑤ Korea Zinc 풋옵션 잠재 현금흐름의 30% 이상 주주환원 약속. 핵심 narrative는 \"영풍은 Korea Zinc에는 거버넌스 개혁을 요구하면서 정작 자기 회사 자사주 6.62%를 10년 동안 한 주도 소각하지 않았다\"는 자기모순 폭로.",
    "[영풍의 약체 사업 현실.] 머스트의 캠페인 진입에는 영풍 본업의 누적 부실이 결정적 명분으로 작용했다. 영풍의 핵심 사업장인 석포제련소(경북 봉화)는 2025년 환경규제 위반으로 58일간 가동 중단(폐수 무허가 방류 + 환경 위반), 가동률 40% 미만으로 추락. 황산 부산물 처리 문제로 2025년 1월부터 Korea Zinc 온산제련소를 통한 황산 수출도 차단. 결과는 [FY2024 영업적자 약 1,607억 원 → FY2025 영업적자 약 2,592억 원으로 적자 폭 확대 — 3년 연속 영업적자]. 영풍은 그러나 Korea Zinc-MBK 18개월 분쟁(2024.09~2026.04)에서 MBK 측 동맹으로 적극 가담 — 머스트는 \"영풍 경영진이 본업 회생보다 Korea Zinc 분쟁에 자원을 소모하면서 소액주주 가치를 훼손한다\"는 정면 비판 논리를 가동.",
    "[영풍의 빠른 양보 — 한국 활동주의 사상 가장 빠른 부분 항복.] 머스트의 공개서한 6일 뒤(2024.12.01) 머스트는 \"영풍 이사회와 대면 미팅 일정 확정\"을 발표하며 공개 캠페인 일시 중단(holding). 강성두 영풍 사장 본인이 자사주 100주를 직접 매입하며 시장 메시지 송출. 2025년 2월 5일 머스트는 정기 주총 주주제안서 정식 제출 — [자사주 전량 소각 + 액면분할 + 사외이사 후보 추천]. 2025년 3월 10일 영풍 이사회는 [2026년 3월까지 자사주 전량 소각 + 10:1 액면분할(액면가 5,000원 → 500원) + 머스트 추천 전영준 변호사 사외이사 후보 추천]을 공식 결의하며 머스트의 핵심 요구를 사실상 수용. 발표 당일 영풍 주가는 +13%대 강세. 2025년 3월 27일 정기 주총에서 안건 통과. Korea Zinc-MBK 분쟁이 한창이던 시점에 영풍이 머스트와의 별도 전선을 빠르게 정리한 [전략적 후퇴] 평가.",
    "[잔존 요구와 진행 상황.] 자사주 소각 + 액면분할은 관철됐으나 머스트가 요구한 [Korea Zinc 풋옵션 계약 공개 + 부동산 자산재평가 + 풋옵션 현금흐름의 30%+ 환원]은 영풍이 명시적으로 응답하지 않은 상태. 2025년 12월 Korea Zinc가 美 Crucible JV 신주 발행으로 2라운드 결착되고 2026년 4월 대법원이 영풍 의결권 제한 적법성을 최종 확정하면서, 영풍의 Korea Zinc 풋옵션 가치 자체가 재산정 압박을 받는 국면. 머스트는 2026년 시점에도 영풍 지분을 유지하며 [Korea Zinc 분쟁 종결 후 풋옵션 현금흐름의 환원 약속 구체화]를 다음 단계 의제로 설정한 것으로 시장은 관측 (공식 미확인).",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "영풍 시가총액 약 6,000~7,500억 원 + 자사주 6.62% 소각 + 10:1 액면분할",
    acquirerName: "머스트자산운용 (Must Asset Management, 김두용 대표)",
    targetName: "영풍 (Young Poong Corp, 005670)",
    announcedDisplay: "2024년 11월 25일 (1차 공개서한)",
    closedDisplay: "2025년 3월 27일 (영풍 정기 주총 안건 통과) — Korea Zinc 풋옵션 의제는 진행 중",
    country: "대한민국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "[머스트자산운용 (Must Asset Management)] 2006년 설립(머스트인베스트먼트 → 머스트투자자문 → 2016.09 머스트자산운용). 김두용 대표(서울대 SMIC 동아리 1세대, 가치투자 + 행동주의 결합). AUM 약 2,361억 원(2023 초) → 시장 관측 약 1.96조 원 수준(2026, 공식 미확인). 한국 1세대 토종 행동주의 트랙: 태영건설(2014~2020) → 영풍(2024.11~).",
    "[타깃 — 영풍 (Young Poong Corp)] 1949년 설립, 코스피 상장(005670). 비철금속(zinc) 제련 + 전자부품. Korea Zinc의 핵심 affiliate, 최대주주(약 25.42%). Korea Zinc-MBK 18개월 분쟁(2024.09~2026.04)에서 MBK 측 동맹으로 적극 가담.",
    "[캠페인 발사 — 2024.11.25] 머스트(지분 약 2%)가 공개 입장문 [영풍 주주가치 제고와 기업 거버넌스 개선에 대한 제언] 발표. 12.03 BusinessWire 영문 announcement. 5대 요구: ① 자사주 6.62% 전량 소각 ② 1,000% 무상증자 또는 10:1 액면분할 ③ Korea Zinc 풋옵션 공개 ④ 부동산 자산재평가 ⑤ 풋옵션 현금흐름 30%+ 환원.",
    "[핵심 narrative — 자기모순 폭로] \"영풍은 Korea Zinc에는 거버넌스 개혁을 요구하면서 정작 자기 회사 자사주 6.62%는 10년 동안 한 주도 소각하지 않았다\". 강성두 영풍 사장의 2024.09 기자간담회 발언(\"소각 목적이 아닌 자사주는 취득하면 안 된다\")을 정면 비판.",
    "[영풍 본업 부실] 석포제련소 환경규제 위반 58일 가동 중단(2025), 가동률 40% 미만, 황산 수출 차단(2025.01~). FY2024 영업적자 약 1,607억 원 → FY2025 영업적자 약 2,592억 원 — 3년 연속 영업적자.",
    "[빠른 부분 항복 — 한국 활동주의 사상 최단] 공개서한 6일 만에 면담 일정 확정 + 공개 캠페인 일시 중단. 2025.02.05 머스트 주주제안서 정식 제출. 2025.03.10 영풍 이사회 결의: [2026.03까지 자사주 전량 소각 + 10:1 액면분할 + 머스트 추천 전영준 변호사 사외이사 후보 추천]. 발표 당일 주가 +13%.",
    "[잔존 요구] Korea Zinc 풋옵션 공개 + 부동산 자산재평가 + 풋옵션 현금흐름 30%+ 환원은 미관철. 2026.04 대법원이 영풍 의결권 제한 적법성을 최종 확정 → 영풍 보유 Korea Zinc 지분 가치 재산정 압박 국면. 머스트는 2026년 시점에도 영풍 지분 유지, 다음 단계 의제 협상 중 (시장 관측).",
    "[전략적 의미] Korea Zinc-MBK 18개월 분쟁의 [후일담]. 얼라인-7개 금융지주 캠페인 이후 한국 토종 활동주의 wave가 [재벌 자회사 분쟁의 약체 동맹군]까지 정조준할 수 있음을 입증. \"본업 회생 + 자회사 분쟁 자제 + 자사주 소각\"이라는 새로운 활동주의 thesis 정립.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "한국 비철금속 제련 산업은 Korea Zinc(세계 아연 제련 1위, 글로벌 점유율 약 10%)와 영풍(국내 2위)의 양강 체제. 영풍은 1949년 최기호·장병희 공동 창업 이후 70년 넘게 Korea Zinc와 공동경영 체제를 유지해온 affiliate이자 최대주주(약 25.42%). 2022년 최윤범 Korea Zinc 회장 취임 후 트로이카드라이브 신사업 투자 본격화 + 영풍의 경영 소외감 누적으로 갈등이 표면화, 2024.09 MBK파트너스-영풍 연합의 공개매수로 한국 M&A 사상 최대 18개월 경영권 분쟁(2024.09~2026.04)으로 비화. 영풍 본업은 zinc 제련 + 전자부품. 그러나 본업은 ① 환경규제 강화(폐수 + 황산 부산물) ② 중국 zinc 제련 capacity 확대로 글로벌 가격 압박 ③ 석포제련소 운영 비효율로 적자 누적 — 3년 연속 영업적자. 머스트의 활동주의 진입은 [Korea Zinc 분쟁 + 본업 부실 + 자사주 미소각]이라는 3중 약점이 동시에 노출된 시점을 정확히 포착한 결과.",
    metrics: [
      { label: "영풍 시가총액 (2024.11 캠페인 직전)", value: "약 6,000~7,000억 원", sub: "1조 원 미만" },
      { label: "영풍 자사주 비중",                    value: "6.62%",                sub: "2014년 말부터 10년간 1주도 소각 안 함" },
      { label: "Korea Zinc 지분 (영풍 보유)",         value: "약 25.42%",             sub: "Korea Zinc-MBK 분쟁의 핵심 변수" },
      { label: "FY2025 영업손실",                     value: "약 2,592억 원",         sub: "3년 연속 영업적자, FY2024 1,607억 원" },
    ],
    subBody:
      "한국 토종 활동주의 wave 2022~2026의 주요 트랙은 ① 얼라인파트너스 — SM엔터(2022) → 7개 금융지주(2023) → 코웨이(2025) ② KCGI — 한진칼(2018~2022) → 현대엘리베이터·오스템임플란트(2023~) ③ 트러스톤 — BYC·태광산업(2022~) ④ 머스트 — 태영건설(2014~2020) → 영풍(2024.11~) ⑤ VIP자산운용 → 다수 캐시카우. 이 가운데 머스트의 영풍 캠페인은 [한국 M&A 최대 분쟁의 약체 동맹군]을 정조준한 최초 사례로, 향후 [재벌 자회사 분쟁이 진행 중인 약체 affiliate]에 대한 활동주의 진입 모델의 표준이 될 가능성.",
    players: [
      { name: "머스트자산운용 (김두용 대표)",   role: "한국 1세대 토종 행동주의. 영풍 지분 약 2~3%. 공개서한 + 직접 면담 + 주주제안" },
      { name: "영풍 (강성두 사장)",              role: "캠페인 대응 총괄. 자사주 100주 자체 매입 + 머스트와 직접 면담 + 부분 양보" },
      { name: "장형진 영풍 회장 일가",           role: "최대주주 가문. Korea Zinc-MBK 분쟁의 공격 측" },
      { name: "MBK파트너스",                    role: "Korea Zinc 공격 측 동맹. 영풍 풋옵션 보유 의혹의 직접 당사자" },
      { name: "Korea Zinc (최윤범 회장)",       role: "영풍의 핵심 affiliate. 영풍 거버넌스 약점 노출이 분쟁 방어에 간접 도움" },
      { name: "전영준 변호사",                  role: "머스트 추천 사외이사 후보. 2025.03 영풍 이사회 추천 확정" },
      { name: "기타 일반주주 (영풍정밀 등)",   role: "현물배당 도입 + 집중투표제 도입 등 별도 주주제안 추가" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "영풍 (Young Poong Corp, 005670)",
    body: "영풍은 1949년 최기호·장병희 공동 창업으로 출범한 한국 최초의 비철금속 제련 기업이다. 핵심 사업장은 1970년대부터 가동된 경북 봉화 석포제련소(아연·납·황산)와 전자부품 사업부. 코스피 상장(005670), 시가총액 약 6,000~7,500억 원(2024~2025). Korea Zinc의 최대주주(약 25.42%)로서 70년간 공동경영 체제 유지. 그러나 본업은 ① 환경규제 강화 ② 중국 capacity 확대로 글로벌 zinc 가격 압박 ③ 석포제련소 운영 비효율로 [FY2023 ~ FY2025 3년 연속 영업적자]. 2024.09 MBK파트너스와 손잡고 Korea Zinc 적대적 공개매수 단행 후 18개월 분쟁 끝에 2026.04 대법원 최종 패배. 자사주 6.62%는 2014년 말부터 2024년 말까지 10년 동안 단 한 주도 소각되지 않은 채 보유 — 머스트가 활동주의 진입 명분으로 정조준한 핵심 거버넌스 이슈.",
    metrics: [
      { label: "설립연도",                  value: "1949년",          sub: "최기호·장병희 공동 창업" },
      { label: "본업",                       value: "Zinc 제련 + 전자부품", sub: "석포제련소 (경북 봉화)" },
      { label: "코스피 상장",                value: "005670",          sub: "시총 약 6,000~7,500억 원" },
      { label: "Korea Zinc 지분",            value: "약 25.42%",        sub: "최대주주, Korea Zinc-MBK 분쟁 공격측" },
      { label: "자사주 비중",                value: "6.62%",            sub: "10년간 1주도 소각 안 함" },
      { label: "석포제련소 가동률 (2025)",   value: "40% 미만",         sub: "환경위반 58일 가동 중단 영향" },
    ],
    financials: [
      { year: "FY2019", revenue: 13700, cogs: 12900, grossProfit:  800, sga:  900, operatingIncome:  -100, ebitda:  600 },
      { year: "FY2020", revenue: 13200, cogs: 12500, grossProfit:  700, sga:  900, operatingIncome:  -200, ebitda:  500 },
      { year: "FY2021", revenue: 15300, cogs: 13800, grossProfit: 1500, sga: 1000, operatingIncome:   500, ebitda: 1200 },
      { year: "FY2022", revenue: 16200, cogs: 14900, grossProfit: 1300, sga: 1100, operatingIncome:   200, ebitda:  900 },
      { year: "FY2023", revenue: 14200, cogs: 13800, grossProfit:  400, sga: 1100, operatingIncome:  -700, ebitda:  100 },
      { year: "FY2024", revenue: 12500, cogs: 12700, grossProfit: -200, sga: 1400, operatingIncome: -1607, ebitda: -800 },
      { year: "FY2025", revenue: 11000, cogs: 11400, grossProfit: -400, sga: 1900, operatingIncome: -2592, ebitda: -1700 },
    ],
    financialsNote: "단위: 억 원 (₩억) | K-IFRS 연결 기준 | 출처: 영풍 사업보고서·UPI·Korea Herald (FY2024~FY2025). FY2023~FY2025 3년 연속 영업적자. FY2025 적자 폭 확대는 석포제련소 58일 가동 중단 + 황산 수출 차단 + 환경설비 추가 투자 영향. 수치 일부는 추정으로 \"약\" 접두어 적용.",
    financialsCurrency: "₩",
    financialsUnit: "억",
  },

  // ── Control Battle Overview (활동주의 진입의 분쟁 연계) ───────
  controlBattleOverview: {
    body: "이 캠페인은 통상의 [단일 회사 활동주의]가 아니라 [한국 M&A 사상 최대 경영권 분쟁(Korea Zinc-MBK)의 약체 동맹군에 대한 측면 공격]이라는 독특한 구조를 갖는다. 머스트는 영풍이 Korea Zinc에 적대적 공개매수를 단행한 직후(2024.09), 영풍의 자기모순(자사주 6.62% 10년 미소각 + 본업 부실)을 정조준하며 [2024.11.25 공개서한]을 던졌다. 한 달 만에 영풍이 직접 면담에 응했고, 3개월 만에 핵심 요구를 사실상 수용 — 한국 활동주의 사상 가장 빠른 [부분 항복]. 이 섹션은 머스트와 영풍의 공방 timeline + 두 진영이 동원한 활동주의 무기를 정리.",
    catalyst:
      "촉발 시점은 강성두 영풍 사장의 2024.09 기자간담회 — \"소각 목적이 아닌 자사주는 취득하면 안 된다. 주주를 위하는 길이 아니기 때문\"이라며 Korea Zinc의 자사주 정책을 강하게 비판. 머스트는 이 발언이 \"영풍 자신의 6.62% 자사주를 10년 동안 한 주도 소각하지 않은 사실과 정면 모순\"이라며 캠페인 핵심 narrative로 활용. 영풍의 약점은 (1) 본업 부실(석포제련소 환경위반·적자 누적), (2) 자사주 10년 미소각, (3) Korea Zinc 분쟁 자원 소모로 인한 본업 자원 부족이라는 3중 약점이 동시 노출된 시점.",
    attackerLabel: "머스트자산운용 + 김두용",
    defenderLabel: "영풍 경영진 + Korea Zinc-MBK 연합",
    battleMoves: [
      {
        date: "2024-09-19",
        actor: "강성두 영풍 사장",
        side: "defense",
        move: "[자기모순의 출발점] 기자간담회에서 Korea Zinc 자사주 정책 비판",
        detail: "강성두 영풍 사장이 기자간담회에서 \"소각 목적이 아닌 자사주는 취득하면 안 된다. 주주를 위하는 길이 아니기 때문\"이라며 Korea Zinc의 자사주 공개매수를 비판. 그러나 영풍 자신의 자사주 6.62%(2014년 말부터 12만 1,906주)는 10년 동안 단 한 주도 소각되지 않은 상태였음 — 머스트가 활동주의 캠페인 핵심 namedragging 자료로 활용.",
        weapon: "공개 발언 (자기모순 노출)",
      },
      {
        date: "2024-11-25",
        actor: "머스트자산운용 (김두용 대표)",
        side: "attack",
        move: "[캠페인 발사] 영풍에 1차 공개서한 — 5대 요구",
        detail: "머스트가 [영풍 주주가치 제고와 기업 거버넌스 개선에 대한 제언] 공개 입장문 발표. 5대 요구: ① 자사주 6.62% 전량 소각 + 정관 개정 ② 1,000% 무상증자 또는 10:1 액면분할 ③ Korea Zinc 풋옵션 계약 공개 ④ 서울 도심 prime 부동산 자산재평가 ⑤ Korea Zinc 풋옵션 현금흐름 30%+ 주주환원 약속. 핵심 narrative: \"영풍이 Korea Zinc에 거버넌스 개혁을 요구하면서 정작 자기 회사 자사주를 10년 동안 한 주도 소각하지 않았다\"는 자기모순 정면 폭로.",
        weapon: "공개 주주서한 (Public Letter Campaign)",
        financialImpact: "발표 당일 영풍 주가 강세 + 머스트 추가 매집 공시",
      },
      {
        date: "2024-12-03",
        actor: "머스트자산운용",
        side: "attack",
        move: "BusinessWire 영문 announcement — 글로벌 시장 신호 송출",
        detail: "[MUST Asset Management Launches Activist Campaign on Young Poong Corporation] 영문 보도자료를 BusinessWire를 통해 송출. KED Global · Bloomberg · Hedgeweek · Smartkarma 등 글로벌 매체가 즉시 보도. 한국 토종 활동주의가 글로벌 헤지펀드 커뮤니티에 직접 메시지를 송출한 사례. Bloomberg는 12월 23일 [Hedge Fund Returning 50% Calls Out Korean Corporate Hypocrisy] 기사로 머스트의 캠페인을 글로벌 컨텍스트에 배치.",
        weapon: "Global PR Mobilization",
      },
      {
        date: "2024-12-01",
        actor: "머스트자산운용 + 영풍 이사회",
        side: "neutral",
        move: "직접 면담 일정 확정 — 공개 캠페인 일시 중단",
        detail: "머스트가 \"영풍과 대면 미팅 일정 확정\"을 공식 발표. \"계획했던 (주주 행동주의) 캠페인 진행은 미팅 때까지 홀드(잠정중단)하고 이번 미팅에서 실질적 성과가 나올 수 있도록 최선의 노력을 하겠다\"는 입장. 강성두 영풍 사장이 자사주 100주 자체 매입으로 시장에 화답 신호 송출. 한국 활동주의 사상 가장 빠른 면담 합의 — 영풍이 Korea Zinc-MBK 분쟁이 한창인 시점에 머스트와의 별도 전선을 빠르게 정리하는 [전략적 후퇴] 의도.",
        weapon: "Direct Engagement Settlement",
      },
      {
        date: "2025-02-05",
        actor: "머스트자산운용",
        side: "attack",
        move: "정기 주총 주주제안서 정식 제출",
        detail: "면담에서 실질적 성과가 미진하다는 판단 하에 머스트가 영풍 정기 주총에 정식 주주제안서 제출. [자사주 전량 소각 + 액면분할(또는 무상증자) + 사외이사 후보 추천(전영준 변호사, 주주권리 보호 전문가)]. 한국 행동주의가 [공개서한 → 직접 면담 → 주주제안서]의 3단 압박을 일관 적용한 표준 케이스.",
        weapon: "Shareholder Proposal + Director Nomination",
      },
      {
        date: "2025-03-10",
        actor: "영풍 이사회",
        side: "defense",
        move: "[부분 항복] 자사주 전량 소각 + 10:1 액면분할 + 사외이사 추천 결의",
        detail: "영풍 이사회가 [2026년 3월까지 자사주 6.62% 전량 소각 + 액면가 5,000원 → 500원 10:1 분할 + 머스트 추천 전영준 변호사 사외이사 후보 추천]을 공식 결의. 한국 활동주의 사상 가장 빠른 부분 항복(공개서한 후 약 3.5개월). 동시에 영풍 일반주주(영풍정밀)가 제안한 [현물배당 도입 + 집중투표제 도입 + 감사위원회 사외이사 선임]도 주총 안건에 포함. 발표 당일 영풍 주가는 +13%대 강세.",
        weapon: "Selective Concession (선별적 양보)",
        financialImpact: "발표 당일 영풍 주가 +13%",
      },
      {
        date: "2025-03-27",
        actor: "영풍 정기 주주총회",
        side: "defense",
        move: "주총 안건 통과 — 자사주 소각·액면분할·사외이사 선임 가결",
        detail: "영풍 정기 주총에서 자사주 전량 소각 + 10:1 액면분할 + 머스트 추천 전영준 사외이사 선임 안건 모두 가결. 한국 활동주의 사상 가장 빠른 시간에 핵심 거버넌스 의제가 주총 통과까지 도달한 사례. 머스트는 주총 직전 캠페인 일부 의제 철회 의사를 표명했으나 영풍은 전영준 후보 추천을 유지.",
        weapon: "AGM Settlement Confirmation",
      },
      {
        date: "2025-12-15",
        actor: "Korea Zinc (최윤범 회장)",
        side: "neutral",
        move: "[Korea Zinc 2라운드 미국 백기사 등장 — 영풍 풋옵션 가치 재산정 압박]",
        detail: "Korea Zinc가 미국 국방부·상무부 합작 Crucible JV에 2.85조 원 신주 발행 + 11조 원 미국 테네시 제련소 발표. 영풍·MBK가 신주발행 금지 가처분 신청. 영풍이 MBK-영풍 컨소시엄을 통해 보유한 Korea Zinc 풋옵션(머스트가 공개 요구한 핵심 의제)의 가치 자체가 재산정 압박을 받는 국면. 머스트의 [풋옵션 현금흐름 30%+ 환원 약속] 요구가 더 큰 변수 안에 놓이게 됨.",
        weapon: "External Macro Event (외생 변수)",
      },
      {
        date: "2026-04-02",
        actor: "대법원",
        side: "neutral",
        move: "대법원, 영풍 의결권 제한 적법성 최종 확정 — Korea Zinc 분쟁 종결",
        detail: "대법원이 영풍·MBK의 재항고를 최종 기각. 호주 SMC를 통한 상호주 구조에 따른 영풍 의결권 제한이 적법으로 확정. Korea Zinc-MBK 18개월 분쟁 사실상 종결. 영풍의 Korea Zinc 풋옵션 현금흐름 시기·규모가 재구조화될 가능성 — 머스트의 [풋옵션 현금흐름 30%+ 환원] 의제는 다음 단계 협상 변수로 이월.",
        weapon: "Supreme Court Final Ruling (외생)",
      },
      {
        date: "2026-06-11",
        actor: "머스트자산운용 (시장 관측)",
        side: "attack",
        move: "[현재 상태] 영풍 지분 유지 + 다음 단계 의제 협상 중",
        detail: "2026년 6월 시점 머스트는 영풍 지분을 유지하며 [Korea Zinc 분쟁 종결 후 풋옵션 현금흐름의 환원 약속 구체화]를 다음 단계 의제로 설정한 것으로 시장은 관측. 자사주 소각 + 액면분할은 이미 관철됐고, Korea Zinc 풋옵션 공개 + 부동산 자산재평가 + 풋옵션 현금흐름 30%+ 환원은 미관철 상태. 일부 캠페인 의제는 머스트가 자체 철회한 것으로 알려졌으나 공식 미확인.",
        weapon: "Ongoing Engagement (지속 engagement)",
      },
    ],
    financialWeapons: [
      {
        name: "공개 주주서한 캠페인 (Public Letter Campaign)",
        side: "attack",
        usedBy: "머스트자산운용",
        description: "2024.11.25 [영풍 주주가치 제고와 기업 거버넌스 개선에 대한 제언] 한국어 입장문 + 2024.12.03 BusinessWire 영문 announcement. 정량 분석(자사주 6.62% × 10년 미소각) + 구체적 5대 요구 + 글로벌 PR 결합. 한국 토종 활동주의의 표준 플레이북.",
        effectiveness: "decisive",
      },
      {
        name: "자기모순 폭로 narrative (Hypocrisy Exposure)",
        side: "attack",
        usedBy: "머스트자산운용 (김두용)",
        description: "강성두 영풍 사장의 2024.09 \"소각 목적이 아닌 자사주는 취득하면 안 된다\" 발언을 영풍 자신의 자사주 10년 미소각과 정면 충돌시키는 메시지 프레임. 영풍이 Korea Zinc에 요구한 거버넌스 개혁 기준을 영풍 자신에게 적용한 [거울 전략]. 미디어 화제성과 도덕적 정당성을 동시에 확보.",
        effectiveness: "decisive",
      },
      {
        name: "Korea Zinc 풋옵션 공개 demand",
        side: "attack",
        usedBy: "머스트자산운용",
        description: "영풍이 MBK-영풍 컨소시엄을 통해 Korea Zinc에 보유한 풋옵션 계약의 정확한 조건·행사가·만기 공개 요구. Korea Zinc-MBK 18개월 분쟁의 핵심 변수에 직접 개입하는 의제이자, 향후 풋옵션 현금흐름의 주주환원 약속 협상의 기초. 2026.06 시점 미관철 (진행 중).",
        effectiveness: "blocked",
      },
      {
        name: "주주제안 + 사외이사 추천 (Shareholder Proposal)",
        side: "attack",
        usedBy: "머스트자산운용",
        description: "2025.02.05 정기 주총 주주제안서 정식 제출 — [자사주 전량 소각 + 액면분할 + 사외이사 후보 전영준 변호사 추천]. 영풍이 이 중 사외이사 추천을 그대로 수용하면서 [한국 활동주의 사상 머스트의 첫 이사회 진입 성과] 기록.",
        effectiveness: "decisive",
      },
      {
        name: "글로벌 PR 결집 (Global Press Mobilization)",
        side: "attack",
        usedBy: "머스트자산운용",
        description: "BusinessWire 영문 보도자료 + KED Global·Bloomberg·Hedgeweek·Smartkarma·Korea Herald 글로벌 매체 결집. Bloomberg [Hedge Fund Returning 50% Calls Out Korean Corporate Hypocrisy] 기사가 머스트의 글로벌 헤지펀드 커뮤니티 내 가시성을 확보.",
        effectiveness: "effective",
      },
      {
        name: "직접 면담 + 선별적 양보 (Direct Engagement + Selective Concession)",
        side: "defense",
        usedBy: "영풍 경영진 (강성두 사장)",
        description: "공개서한 6일 만에 직접 면담 일정 확정 + 강성두 사장 자사주 100주 자체 매입 + 2025.03.10 자사주 소각·액면분할·사외이사 추천 결의. [핵심 거버넌스 요구는 빠르게 수용 + 풋옵션 공개·부동산 재평가는 회피]하는 선별적 양보 전략. Korea Zinc-MBK 분쟁이 한창인 시점에 별도 전선을 빠르게 정리하는 전략적 후퇴.",
        effectiveness: "effective",
      },
      {
        name: "주총 의제 분산 (AGM Agenda Dilution)",
        side: "defense",
        usedBy: "영풍 이사회",
        description: "정기 주총 안건에 [머스트 제안 + 영풍정밀 제안(현물배당 + 집중투표제) + 회사 측 안건]을 함께 배치해 머스트 단독 의제의 가시성을 분산. 표 대결까지 가지 않고 사전 타협으로 모든 안건을 통과시키는 [평화로운 합의] 형식.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2025-03-10",
      event: "영풍 이사회의 자사주 소각 + 액면분할 + 사외이사 추천 결의",
      detail: "이 캠페인의 결정적 분기점은 2025년 3월 10일 영풍 이사회 결의다. 공개서한(2024.11.25)으로부터 약 3.5개월, 주주제안서 정식 제출(2025.02.05)로부터 약 5주 만에 영풍 이사회가 [자사주 6.62% 전량 소각 + 10:1 액면분할 + 머스트 추천 사외이사]를 동시 수용한 사건은 한국 활동주의 사상 가장 빠른 [부분 항복]. 영풍은 Korea Zinc-MBK 18개월 분쟁이 한창인 시점에 머스트와의 별도 전선을 빠르게 정리하기 위해 [핵심 거버넌스 요구는 즉시 수용 + 풋옵션·부동산은 회피]하는 선별적 양보를 선택. 발표 당일 영풍 주가 +13% 강세가 시장의 즉각적 인정을 보여줌. 이 사건 이후 한국 활동주의 wave는 [재벌 자회사 분쟁 진행 중 약체 affiliate]에 대한 진입 모델을 확보.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "머스트자산운용 — 부분 승리 (핵심 거버넌스 의제 관철 + 잔존 의제 진행 중)",
      margin: "5대 요구 중 3개 관철(자사주 소각 + 액면분할 + 사외이사 추천), 2개 미관철(풋옵션 공개 + 부동산 재평가 + 풋옵션 환원 약속)",
      note: "머스트의 5대 요구 가운데 [자사주 6.62% 전량 소각 + 10:1 액면분할 + 머스트 추천 사외이사 선임]은 2025.03.10 이사회 결의 + 2025.03.27 주총 통과로 관철. [Korea Zinc 풋옵션 계약 공개 + 부동산 자산재평가 + 풋옵션 현금흐름 30%+ 환원 약속]은 2026.06 시점 미관철 상태 — 단 2026.04 Korea Zinc-MBK 분쟁 대법원 종결로 풋옵션 가치 재산정 국면이 시작되면서 다음 단계 의제 협상이 진행 중. 한국 활동주의 사상 가장 빠른 부분 항복이라는 점에서 명백한 부분 승리이며, Korea Zinc 풋옵션 의제는 진행 중 (시장 관측, 공식 미확인).",
    },
    priceImpact: {
      preContest: "영풍 주가 약 380,000원대 (2024.11 캠페인 직전)",
      peak: "약 580,000원대 (2025.03 자사주 소각·액면분할 결의 직후)",
      postContest: "약 480,000원대 (2026.06 기준, Korea Zinc 분쟁 종결 후)",
      note: "캠페인 직전 영풍 주가는 380,000원대(2024.11). 2025.03.10 자사주 소각·액면분할 결의 발표일 +13% 강세, 약 580,000원대로 단기 상승. 2025.12 Korea Zinc 美 JV 신주 발행으로 영풍 풋옵션 가치 재산정 압박 + 2026.04 대법원 의결권 제한 최종 확정 영향으로 약 480,000원대로 조정. 본업 부실(FY2025 영업적자 2,592억 원)이 주가 상단을 제한하지만, 자사주 소각 진행 + 풋옵션 의제 진행이 하단을 지지하는 구조. 액면분할(2026.03 예정) 이후 액면가 500원 기준 환산 별도 표시 필요 (시장 관측).",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "이 캠페인은 M&A 거래 구조가 아닌 [활동주의 + 거버넌스 변화] 캠페인. 캠페인 직전 영풍 지분 구조는 [장형진 영풍 회장 일가 + 친인척 약 62% + Korea Zinc 약 1.85% + 머스트 약 2% + 자사주 6.62% + 일반주주 약 27%]. 캠페인 후 변화는 [자사주 6.62% → 2026.03까지 전량 소각 + 액면가 5,000원 → 500원 10:1 분할 + 머스트 추천 전영준 변호사 사외이사 신규 진입]. Korea Zinc 풋옵션 공개 + 부동산 자산재평가 + 풋옵션 현금흐름 30%+ 환원은 미실현 상태.",
    preOwnership: {
      nodes: [
        { id: "jang_pre",     label: "장형진 회장 일가",   sub: "최대주주 + 친인척 합산 약 62%",  type: "acquirer" },
        { id: "kz_pre",       label: "Korea Zinc",         sub: "상호 지분 약 1.85%",            type: "fund" },
        { id: "must_pre",     label: "머스트자산운용",     sub: "약 2% (캠페인 시점)",            type: "fund" },
        { id: "treasury_pre", label: "영풍 자사주",        sub: "6.62% (10년 미소각)",           type: "entity" },
        { id: "yp_pre",       label: "영풍",                sub: "코스피 005670",                  type: "target" },
        { id: "public_pre",   label: "일반주주",            sub: "약 27%",                         type: "public" },
      ],
      edges: [
        { from: "jang_pre",     to: "yp_pre", label: "약 62% (지배)" },
        { from: "kz_pre",       to: "yp_pre", label: "약 1.85%" },
        { from: "must_pre",     to: "yp_pre", label: "약 2% (공개서한)" },
        { from: "treasury_pre", to: "yp_pre", label: "6.62% (자사주, 의결권 없음)" },
        { from: "public_pre",   to: "yp_pre", label: "약 27%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "jang_post",     label: "장형진 회장 일가",   sub: "약 66% (자사주 소각 후 희석 환산)", type: "acquirer" },
        { id: "kz_post",       label: "Korea Zinc",         sub: "약 2% (분쟁 종결 후)",              type: "fund" },
        { id: "must_post",     label: "머스트자산운용",     sub: "약 2~3% (지분 유지)",                type: "fund" },
        { id: "yp_post",       label: "영풍",                sub: "자사주 소각 진행 + 10:1 액면분할",   type: "target" },
        { id: "public_post",   label: "일반주주",            sub: "약 29% (자사주 소각 후 비중 확대)",   type: "public" },
        { id: "jeon_post",     label: "전영준 사외이사",     sub: "머스트 추천, 2025.03 선임",          type: "entity" },
      ],
      edges: [
        { from: "jang_post",   to: "yp_post", label: "약 66% (자사주 소각 후)" },
        { from: "kz_post",     to: "yp_post", label: "약 2%" },
        { from: "must_post",   to: "yp_post", label: "약 2~3% (지분 유지)" },
        { from: "public_post", to: "yp_post", label: "약 29%" },
        { from: "jeon_post",   to: "yp_post", label: "사외이사 1인" },
      ],
    },
    keyTerms: [
      { label: "캠페인 발사일",                    value: "2024-11-25 (1차 공개서한)",                                accent: true },
      { label: "BusinessWire 영문 announcement",   value: "2024-12-03" },
      { label: "직접 면담 일정 확정",                value: "2024-12-01 (캠페인 일시 중단)" },
      { label: "정식 주주제안 제출",                value: "2025-02-05" },
      { label: "5대 요구 ①",                        value: "자사주 6.62% 전량 소각 + 정관 개정",                       accent: true },
      { label: "5대 요구 ②",                        value: "1,000% 무상증자 또는 10:1 액면분할",                        accent: true },
      { label: "5대 요구 ③",                        value: "Korea Zinc 풋옵션 계약 공개" },
      { label: "5대 요구 ④",                        value: "서울 도심 prime 부동산 자산재평가" },
      { label: "5대 요구 ⑤",                        value: "Korea Zinc 풋옵션 현금흐름 30%+ 주주환원 약속" },
      { label: "영풍 이사회 결의일",                 value: "2025-03-10 (부분 항복)",                                   accent: true },
      { label: "결의 내용",                          value: "2026.03까지 자사주 전량 소각 + 10:1 액면분할 + 사외이사 추천", accent: true },
      { label: "정기 주총 안건 통과",                value: "2025-03-27" },
      { label: "머스트 추천 사외이사",                value: "전영준 변호사 (주주권리 보호 전문가)",                       accent: true },
      { label: "관철 비율 (요구 5개 중)",            value: "3개 관철 / 2개 진행 중",                                     accent: true },
      { label: "발표 당일 주가 임팩트",              value: "+13% (2025.03.10)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "이 캠페인은 M&A 거래가 아닌 활동주의 캠페인이므로 통상의 [매수측·매각측] 자문 구도가 아니다. 공격 측은 머스트자산운용 인하우스 분석팀이 중심이고 외부 IB는 보조적. 방어 측은 영풍 이사회의 한국 주요 로펌 자문 + 시티그룹 등 글로벌 IB가 Korea Zinc-MBK 분쟁 자문과 병행 (공식 미확인 부분 포함).",
    sides: [
      {
        side: "acquirer",
        sideLabel: "공격 측 (머스트자산운용)",
        initials: "MUST",
        bg: "bg-purple-700",
        advisors: [
          {
            firm: "머스트자산운용 (인하우스 분석팀)",
            role: "활동주의 분석·캠페인 주도",
            roleType: "financial",
            note: "김두용 대표(서울대 SMIC 동아리 1세대) 중심 인하우스 팀. 영풍 자사주 6.62% 10년 미소각 + 본업 부실 + Korea Zinc 풋옵션 가치를 결합한 정량 분석. 한국 1세대 토종 행동주의의 시그니처 분석 프레임.",
          },
          {
            firm: "BusinessWire (글로벌 PR 채널)",
            role: "글로벌 PR 채널",
            roleType: "other",
            note: "2024.12.03 [MUST Asset Management Launches Activist Campaign on Young Poong Corporation] 영문 보도자료 송출. 글로벌 헤지펀드 커뮤니티에 직접 메시지 전달.",
          },
          {
            firm: "전영준 변호사 (사외이사 후보)",
            role: "주주권리 보호 전문가",
            roleType: "legal",
            note: "머스트가 추천한 영풍 사외이사 후보. 주주권리 보호 전문 변호사. 2025.03 영풍 이사회 추천 + 2025.03.27 주총에서 선임 확정. 머스트의 영풍 거버넌스 변화의 직접적 인적 결과.",
          },
          {
            firm: "법무·재무 외부 자문 (비공식)",
            role: "비공식 자문",
            roleType: "other",
            note: "머스트가 외부 IB·로펌과의 공식 자문 계약을 공개하지 않음. 시장은 \"인하우스 + 비공식 자문\" 구조로 관측 (공식 미확인).",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "방어 측 (영풍 이사회)",
        initials: "YP",
        bg: "bg-stone-700",
        advisors: [
          {
            firm: "김앤장 법률사무소",
            role: "법무 자문 (Korea Zinc-MBK 분쟁과 병행)",
            roleType: "legal",
            note: "Korea Zinc-MBK 분쟁에서 영풍·MBK 측 법무 자문을 맡은 김앤장이 머스트 활동주의 캠페인 대응도 병행 자문한 것으로 시장은 관측 (공식 미확인). 주주제안 거부 사유 작성 + 사외이사 추천 검토 + 정기 주총 절차 자문.",
          },
          {
            firm: "Citigroup",
            role: "재무 자문 (Korea Zinc-MBK 분쟁과 병행)",
            roleType: "financial",
            note: "Korea Zinc-MBK 공개매수 시 영풍·MBK 측 재무 자문을 맡은 Citigroup이 영풍의 머스트 대응 자문에도 일부 관여한 것으로 시장은 관측 (공식 미확인). 자사주 소각·액면분할의 재무 시뮬레이션·자본구조 영향 분석 참여 추정.",
          },
          {
            firm: "삼정KPMG·EY한영 (자산재평가 잠재 자문)",
            role: "회계·자산평가 자문 (잠재)",
            roleType: "financial",
            note: "머스트가 요구한 부동산 자산재평가에 대응할 경우 활용 가능한 회계 자문사. 2026.06 시점 영풍이 부동산 재평가를 공식 결의하지 않은 상태로 실제 계약 미확인.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료·언론 보도 + 시장 관측 기반입니다. 활동주의 캠페인 특성상 일부 자문 관계는 공식 발표되지 않았으며 \"시장 관측\" 표시로 구분했습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "이 캠페인의 핵심 밸류에이션 논리는 [영풍의 시가총액 약 6,000~7,500억 원은 본업 가치 + Korea Zinc 지분 가치 + 자사주 + 부동산 자산의 합보다 크게 저평가]라는 것이다. 영풍이 보유한 Korea Zinc 약 25.42% 지분의 시가만 분쟁 시점 약 2.5조~3조 원(Korea Zinc 시총 약 10.5조~12조 원 기준)으로 영풍 자체 시가총액의 3~5배 수준. 자사주 6.62% + 서울 도심 prime 부동산 + 본업 zinc 제련 자산을 더하면 영풍의 NAV 디스카운트가 매우 큰 상태. 머스트는 이 NAV 디스카운트의 해소를 [자사주 소각 + 액면분할 + 풋옵션 공개 + 부동산 재평가 + 풋옵션 현금흐름 환원]의 다섯 단계로 분해한 정량 thesis.",
    rows: [
      { item: "영풍 시가총액 (2024.11 캠페인 직전)",            val: "약 6,000~7,000억 원",  note: "PBR 약 0.3배대, NAV 대비 큰 디스카운트" },
      { item: "영풍 자사주",                                     val: "6.62% (12만 1,906주)",  note: "2014년 말부터 10년간 1주도 소각 안 함",          accent: true },
      { item: "영풍 보유 Korea Zinc 지분",                        val: "약 25.42%",             note: "시가 약 2.5조~3조 원 (Korea Zinc 시총 약 10.5~12조 원 기준)", accent: true },
      { item: "Korea Zinc 풋옵션 (영풍 보유 의혹)",               val: "공개 미실현",            note: "MBK-영풍 컨소시엄 통해 보유 의혹, 머스트 핵심 공개 요구" },
      { item: "서울 도심 prime 부동산",                           val: "재평가 미실현",          note: "현재 장부가 vs 실제 시가 격차 — 머스트 자산재평가 요구" },
      { item: "FY2024 영업적자",                                 val: "약 1,607억 원",          note: "본업 부실, 3년 연속 적자 시작" },
      { item: "FY2025 영업적자",                                 val: "약 2,592억 원",          note: "석포제련소 58일 가동 중단 + 황산 수출 차단",      accent: true },
      { item: "주가 (2024.11 캠페인 직전)",                       val: "약 380,000원대",         note: "액면가 5,000원 기준" },
      { item: "주가 (2025.03.10 이사회 결의 당일)",                val: "+13% 강세, 약 580,000원대 단기 피크", note: "자사주 소각·액면분할 결의 발표",                accent: true },
      { item: "주가 (2026.06)",                                    val: "약 480,000원대",         note: "Korea Zinc 분쟁 종결 + 본업 부실 영향" },
      { item: "관철 요구 가치 (자사주 소각 6.62%)",                val: "약 400~500억 원 환원 효과", note: "발행주식수 감소 → 주당 지표 개선",                accent: true },
      { item: "잔존 요구 잠재 가치 (풋옵션 환원 30%+)",            val: "수천억 ~ 1조 원대 잠재",   note: "Korea Zinc 풋옵션 가치 확정 시 (시장 관측, 공식 미확인)" },
    ],
    disclaimer: "주: 시가총액·주가·NAV는 공개 자료·언론 보도·시장 관측 기반입니다. 일부 추정치는 \"약\" 접두어 또는 \"시장 관측\" 표시를 사용했으며, Korea Zinc 풋옵션 가치는 계약 비공개 상태이므로 정확한 수치 산정 불가.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "머스트는 왜 영풍을 골랐나 — 분쟁의 약체 동맹군 정조준 전략",
      initials: "MUST",
      bg: "bg-purple-700",
      points: [
        "[Korea Zinc 분쟁의 후일담 진입] Korea Zinc-MBK 18개월 분쟁(2024.09~2026.04)의 공격측 동맹이었던 영풍이 본업 부실(석포제련소 적자) + 자사주 10년 미소각 + Korea Zinc 분쟁 자원 소모의 3중 약점을 동시 노출한 시점을 정확히 포착. 분쟁의 메인 전선이 Korea Zinc에 집중된 동안 영풍은 활동주의 진입의 [무방비 측면]이 됨.",
        "[자기모순 narrative의 도덕적 정당성] 강성두 영풍 사장의 2024.09 \"소각 목적이 아닌 자사주는 취득하면 안 된다\" 발언과 영풍 자신의 자사주 10년 미소각의 정면 충돌. 머스트는 이를 \"영풍이 Korea Zinc에 요구한 거버넌스 개혁 기준을 영풍 자신에게 적용한다\"는 거울 전략으로 활용. 미디어·외국인·일반주주의 도덕적 결집을 동시에 끌어냄.",
        "[정량 분석의 압도적 단순성] 영풍의 NAV(Korea Zinc 지분 + 자사주 + 부동산 + 본업)가 시가총액의 3~5배라는 정량 사실은 누구도 반박할 수 없는 출발점. 5대 요구가 모두 NAV 디스카운트 해소를 구체적 행동으로 분해한 형태 — 추상적 \"환원 늘려라\"가 아닌 \"자사주 6.62% 소각하라\"의 정량 요구.",
        "[Korea Zinc 풋옵션 공개 — 분쟁 변수에 직접 개입] 영풍이 MBK-영풍 컨소시엄을 통해 Korea Zinc에 보유한 풋옵션 의혹을 공개적으로 명시한 것은 단순 활동주의 요구를 넘어 Korea Zinc-MBK 분쟁 자체에 압력을 가하는 효과. 풋옵션이 공개되면 분쟁의 가격·조건이 시장에 노출되어 양 진영 모두에 부담.",
        "[빠른 부분 항복으로 자원 효율성 극대화] 5대 요구 중 3개를 3.5개월 만에 관철한 사례는 한국 활동주의 사상 가장 효율적인 ROI. 머스트는 영풍의 [Korea Zinc 분쟁이 한창이라 별도 전선을 빠르게 정리하고 싶은 인센티브]를 정확히 활용. 잔존 요구(풋옵션·부동산)는 분쟁 종결 후 다음 단계로 이월.",
      ],
    },
    seller: {
      title: "영풍은 왜 빠르게 부분 항복했나 — 분쟁 자원 집중 전략",
      initials: "YP",
      bg: "bg-stone-700",
      points: [
        "[Korea Zinc 분쟁 자원 집중] 2024.11 시점 영풍은 Korea Zinc-MBK 18개월 분쟁의 한가운데. 머스트와의 별도 전선을 길게 유지할 자원 여유가 없음. \"머스트의 핵심 거버넌스 요구는 빠르게 수용 + 분쟁의 본 전선에 자원 집중\"이라는 명확한 우선순위 판단.",
        "[자기모순 narrative의 방어 불가] 자사주 6.62% 10년 미소각이라는 정량 사실은 영풍이 반박할 수 없는 사실. 강성두 사장의 2024.09 발언과 정면 충돌하는 자기모순을 길게 끌수록 미디어·외국인·일반주주의 결집이 강해짐. 빠른 양보가 명분 측면에서도 유리.",
        "[선별적 양보 — 거버넌스는 수용, 분쟁 변수는 회피] 머스트의 5대 요구 가운데 [자사주 소각 + 액면분할 + 사외이사 추천]은 영풍 본업과 분쟁 본 전선에 직접 영향이 적은 거버넌스 의제. [Korea Zinc 풋옵션 공개 + 부동산 자산재평가]는 Korea Zinc-MBK 분쟁의 본 전선에 직접 영향. 영풍은 전자만 수용하고 후자는 회피하는 [선별적 방어]를 정확히 실행.",
        "[강성두 사장의 자사주 100주 자체 매입 시그널] 강성두 영풍 사장이 자사주 100주를 직접 매입한 행동은 \"경영진도 회사 가치 회복에 동참한다\"는 시장 메시지. 단순 PR이 아닌 머스트와의 면담을 앞두고 상호 신뢰를 구축하는 신호로 작동.",
        "[주주제안 표 대결 회피] 머스트의 정식 주주제안(2025.02.05)이 정기 주총에 상정되기 전에 영풍 이사회가 핵심 요구를 선제 수용(2025.03.10). \"행동주의에 끌려갔다\"는 인상보다 \"이사회 자체 판단으로 거버넌스 개선\"이라는 명분을 확보하는 정치적 선택.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 6월",
    body: "머스트의 영풍 캠페인은 2025년 3월 자사주 소각·액면분할·사외이사 추천 관철로 [한국 활동주의 사상 가장 빠른 부분 항복]을 끌어낸 후, 2026년 6월 시점 다음 단계 협상이 진행 중인 [Open-Ended Campaign] 상태. 2026년 4월 대법원이 Korea Zinc-MBK 분쟁의 영풍 의결권 제한 적법성을 최종 확정하면서, 영풍의 Korea Zinc 풋옵션 가치가 재산정 압박을 받는 국면. 머스트의 잔존 요구(풋옵션 공개 + 부동산 재평가 + 풋옵션 현금흐름 30%+ 환원)가 다음 의제로 부상하는 시점. 한국 활동주의 wave 2022~2026의 맥락에서 머스트의 영풍 캠페인은 [얼라인-7개 금융지주 캠페인 이후 한국 토종 활동주의가 재벌 자회사 분쟁의 약체 affiliate까지 정조준할 수 있음을 입증]한 의미 — 향후 한국 자본시장에서 [재벌 분쟁 진행 중 약체 affiliate 활동주의 진입]의 표준 모델이 될 가능성.",
    overallVerdict: "머스트자산운용 — 부분 승리 (3/5 관철) + 잔존 의제 진행 중 (한국 활동주의 사상 가장 빠른 부분 항복)",
    positives: [
      "[한국 활동주의 사상 가장 빠른 부분 항복] 공개서한(2024.11.25) → 직접 면담(2024.12) → 주주제안(2025.02.05) → 이사회 결의(2025.03.10) → 주총 통과(2025.03.27). 약 4개월 만의 핵심 의제 관철은 얼라인-7개 금융지주 사례(약 1개월)에 이어 한국 활동주의 사상 두 번째로 빠른 양보.",
      "[자사주 6.62% 전량 소각 관철] 2014년 말부터 10년간 1주도 소각되지 않던 자사주 6.62%를 2026년 3월까지 전량 소각하기로 결의. 영풍 발행주식수 약 7%대 감소 → 주당 지표 개선 + 일반주주 비중 확대. 한국 활동주의가 [10년 묵은 미소각 자사주]를 깨뜨린 사례.",
      "[10:1 액면분할 관철] 액면가 5,000원 → 500원 10:1 분할로 소액주주 접근성 + 거래 유동성 확대. 영풍의 만성적 거래량 부족 문제 해소.",
      "[머스트 추천 사외이사 진입] 전영준 변호사(주주권리 보호 전문가) 사외이사 선임. 한국 활동주의가 [재벌 affiliate 이사회]에 머스트 추천 인사를 진입시킨 의미 있는 사례. JB금융(얼라인 추천 2인) 사례에 이어 두 번째.",
      "[Korea Zinc 풋옵션 의제 부상] 머스트의 풋옵션 공개 요구가 Korea Zinc-MBK 분쟁의 한 변수로 부상. 2026.04 대법원 분쟁 종결 후 풋옵션 가치 재산정 국면에서 머스트의 다음 단계 의제 협상력이 강화.",
      "[한국 활동주의 wave 분기점] 얼라인-7개 금융지주 캠페인 이후 한국 토종 활동주의 wave가 [재벌 자회사 분쟁의 약체 affiliate]까지 정조준할 수 있음을 입증. 향후 유사 case의 표준 모델이 될 가능성.",
    ],
    risks: [
      "[잔존 요구 미관철] Korea Zinc 풋옵션 계약 공개 + 부동산 자산재평가 + 풋옵션 현금흐름 30%+ 환원 약속은 2026.06 시점 미관철. 5대 요구 중 2개(또는 일부 의제 결합 시 3개)가 미실현 상태이며, 일부 의제는 머스트가 자체 철회한 것으로 알려졌으나 공식 미확인.",
      "[본업 부실 지속] FY2025 영업적자 약 2,592억 원(3년 연속), 석포제련소 가동률 40% 미만, 황산 수출 차단. 자사주 소각·액면분할이라는 거버넌스 개선이 본업 회생으로 연결되지 않으면 주가 상단 제한.",
      "[Korea Zinc 풋옵션 가치 재산정 리스크] 2026.04 대법원이 영풍 의결권 제한 적법성을 최종 확정하면서 Korea Zinc-MBK 분쟁 사실상 종결. 영풍의 Korea Zinc 풋옵션 현금흐름 시기·규모가 재구조화될 가능성 — 머스트의 [30%+ 환원] 의제가 현실화되는 데 필요한 기초가 변동.",
      "[머스트의 단일 펀드 의존] 머스트 AUM 약 1.96조 원 수준(시장 관측), 김두용 대표 개인의 분석·미디어 활용 능력에 캠페인 성공이 과도하게 의존. 다음 단계 협상 자원의 지속 가능성에 물음표.",
      "[법적 카드 미사용] 머스트는 캠페인 전 과정에서 법원 가처분·소송 등 법적 카드를 사용하지 않음. 향후 잔존 요구의 협상이 결렬될 경우 머스트가 사용 가능한 무기의 한계 노출.",
      "[Korea Zinc 분쟁 종결 후 영풍의 인센티브 변화] 분쟁이 종결되면서 영풍은 머스트와의 별도 전선을 빠르게 정리할 인센티브가 약화. 잔존 요구 협상의 영풍 측 동기 부여가 분쟁 기간 대비 감소.",
    ],
    editorNote:
      "이 캠페인의 진짜 의미는 \"머스트가 영풍에 자사주 소각을 끌어냈다\"가 아니라 \"한국 토종 활동주의가 재벌 자회사 분쟁의 약체 동맹군까지 정조준할 수 있음을 입증했다\"는 점이다. Korea Zinc-MBK 18개월 분쟁이 \"한국 M&A 사상 최대 경영권 분쟁\"이라는 메인 무대였다면, 머스트의 영풍 캠페인은 그 분쟁의 [측면 전선]에서 한국 활동주의 wave가 추가 표적을 발견할 수 있는 모델을 정립한 사례다. 자사주 6.62% 10년 미소각이라는 정량 사실 + 강성두 사장의 자기모순 발언 + Korea Zinc 풋옵션 공개라는 분쟁 변수 개입이 결합된 multi-layer thesis는 향후 한국 활동주의의 분석 표준이 될 것이다. 2026년 6월 시점 잔존 요구(풋옵션 공개·부동산 재평가·풋옵션 환원 30%+)의 협상은 진행 중이며, Korea Zinc 분쟁 종결 후 풋옵션 가치 재산정 국면이 머스트의 다음 단계 협상력의 핵심 변수가 된다. — 시장 관측 기반, 일부 진행 상황 공식 미확인.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "MUST",
    acquirerBg: "bg-purple-700",
    targetInitials: "YP",
    targetBg: "bg-stone-700",
    acquirerName: "Must Asset Management (김두용 대표)",
    targetName: "Young Poong Corp (영풍, 005670)",
    dealTitle: "MUST × Young Poong Activist Campaign — Korean Domestic Activism on Korea Zinc Parent",
    dealSize: "영풍 시가총액 약 6,000~7,500억 원, 자사주 6.62% 소각 + 10:1 액면분할",
    dealSizeUSD: "Young Poong mkt cap ~USD 500m, treasury cancellation + 10:1 split",
    evEbitda: "N/A (Activism Campaign)",
    closeDate: "Mar 2025 (Partial Win) — Ongoing for residual demands",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "머스트자산운용 — 영풍 주주가치 제고와 기업 거버넌스 개선에 대한 제언 공개 입장문 (2024.11.25)" },
    { id: 2, text: "BusinessWire — MUST Asset Management Launches Activist Campaign on Young Poong Corporation (2024.12.03)", url: "https://www.businesswire.com/news/home/20241203602153/en/MUST-Asset-Management-Launches-Activist-Campaign-on-Young-Poong-Corporation" },
    { id: 3, text: "KED Global — Must Asset calls on Young Poong to take steps to boost shareholder value (2024.11.25)", url: "https://www.kedglobal.com/shareholder-activism/newsView/ked202411250011" },
    { id: 4, text: "디지털데일리 — 머스트자산운용 \"영풍, 자사주 10년간 단 한 번도 '소각' 안해\" (2024.11.26)", url: "https://m.ddaily.co.kr/page/view/2024112614291437763" },
    { id: 5, text: "파이낸셜뉴스 — 머스트운용, 강성두 사장 발언 후 영풍 추가 매집 (2024.11.25)", url: "https://www.fnnews.com/news/202411251119245227" },
    { id: 6, text: "서울경제 — 머스트운용, 영풍에 공개서한…자사주 소각·무상증자 요청 (2024.11)", url: "https://www.sedaily.com/NewsView/2DGZD3MNRX" },
    { id: 7, text: "아이뉴스24 — 머스트운용, 영풍에 주주제안…자사주 소각·고려아연 풋옵션 공개 (2025.02)", url: "https://m.inews24.com/v/1787047" },
    { id: 8, text: "네이트뉴스/이데일리 — 머스트운용 영풍과 대면 미팅…주주가치 제고안 도출 추진 (2024.12.01)", url: "https://news.nate.com/view/20241201n03318" },
    { id: 9, text: "딜사이트 — 영풍 지분 2% 머스트자산운용, 영풍 거버넌스 지적 (2024.11)", url: "https://dealsite.co.kr/articles/132211" },
    { id: 10, text: "Bloomberg — Hedge Fund Returning 50% Calls Out Korean Corporate Hypocrisy (2024.12.23)", url: "https://www.bloomberg.com/news/articles/2024-12-23/hedge-fund-returning-50-calls-out-korean-corporate-hypocrisy" },
    { id: 11, text: "Hedgeweek — Must Asset Management pushes for reform at South Korean conglomerate (2024.12)", url: "https://www.hedgeweek.com/must-asset-management-pushes-for-reform-at-south-korean-conglomerate/" },
    { id: 12, text: "Douglas Research/Smartkarma — Must Asset Mgmt Goes Activist on Young Poong (2024.12)", url: "https://www.smartkarma.com/insights/must-asset-mgmt-goes-activist-on-young-poong" },
    { id: 13, text: "서울경제 — 영풍 '내년 3월까지 자사주 전량 소각…10:1 액면분할도' (2025.03.10)", url: "https://www.sedaily.com/NewsView/2GQ6WVRKQ0" },
    { id: 14, text: "뉴스1 — 영풍, '소수 주주 제안' 전영준 변호사 사외이사 후보 추천 (2025.03)", url: "https://www.news1.kr/industry/general-industry/5714244" },
    { id: 15, text: "세계일보 — 영풍, 주주가치 제고 위한 주총 안건 확정…주식 액면분할 포함 (2025.03.13)", url: "https://www.segye.com/newsView/20250313518167" },
    { id: 16, text: "지구인사이드 — 주주행동에 화답...영풍, 자사주 소각에 액면분할 (2025.03)", url: "https://g9inside.com/?p=47904" },
    { id: 17, text: "ZDNet Korea — 머스트자산운용 등 영풍 주주 \"거버넌스 개선 시급\" (2025.02.07)", url: "https://zdnet.co.kr/view/?no=20250207135518" },
    { id: 18, text: "UPI — Korea Zinc, Young Poong report opposite results in first half (2025.08.19)", url: "https://www.upi.com/Top_News/World-News/2025/08/19/korea-news-Korea-Zonc-Young-Poong/3301755611401/" },
    { id: 19, text: "Korea Herald — Earnings gap widens as Korea Zinc rivals head to vote (2025)", url: "https://www.koreaherald.com/article/10682233" },
    { id: 20, text: "Korea Times — Young Poong, MBK challenge Korea Zinc's $6.8 billion US smelter plan (2025.12.15)", url: "https://www.koreatimes.co.kr/business/companies/20251215/young-poong-mbk-challenge-korea-zincs-68-billion-us-smelter-plan" },
    { id: 21, text: "더벨 — 머스트운용, 태영건설 경영참여 선언 (2019.08)", url: "https://www.thebell.co.kr/free/content/ArticleView.asp?key=201908020100003830000253&lcode=00" },
    { id: 22, text: "위키백과 한국어 — 머스트자산운용", url: "https://ko.wikipedia.org/wiki/%EB%A8%B8%EC%8A%A4%ED%8A%B8%EC%9E%90%EC%82%B0%EC%9A%B4%EC%9A%A9" },
    { id: 23, text: "Must Asset Management 공식 홈페이지", url: "https://www.mustinvestment.com/sub/sub0103.php?lang=ko" },
    { id: 24, text: "금융감독원 DART — 영풍 정기 주주총회 결과 공시 (2025.03.27) + 영풍 사업보고서 FY2019~FY2024" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "머스트자산운용 × 영풍 — Korea Zinc 분쟁 후일담 활동주의 캠페인",
    description:
      "2024년 11월 머스트자산운용(김두용 대표)이 영풍에 던진 자사주 6.62% 소각 + 10:1 액면분할 + Korea Zinc 풋옵션 공개 요구. 약 3.5개월 만의 한국 활동주의 사상 가장 빠른 부분 항복. Korea Zinc-MBK 18개월 분쟁의 약체 동맹군을 정조준한 한국 토종 활동주의 wave의 분기점.",
    keywords: [
      "머스트자산운용",
      "김두용 머스트",
      "영풍 활동주의",
      "Young Poong activism",
      "영풍 자사주 소각",
      "영풍 액면분할",
      "Korea Zinc 풋옵션",
      "고려아연 분쟁",
      "한국 토종 활동주의",
      "Korean domestic activism",
      "전영준 사외이사",
      "강성두 영풍",
      "석포제련소",
      "MUST Asset Management",
      "한국 활동주의 wave",
      "재벌 자회사 분쟁",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "Korean Domestic Activist Wave (한국 토종 활동주의 wave)",
      description: "2022~2026년 한국 자본시장에서 토종 운용사들이 주도한 활동주의 캠페인의 동시 다발 진행. 얼라인파트너스(2022~) · KCGI(2018~) · 트러스톤(2022~) · 머스트(2014~) · VIP자산운용 등이 동일 시기 작동. 연간 캠페인 건수가 2021년 9건에서 2024년 70건+로 약 8배 폭증. 머스트의 영풍 캠페인이 이 wave의 한 흐름.",
    },
    {
      term: "자사주 소각 활동주의 (Treasury Share Cancellation Activism)",
      description: "회사가 보유한 자사주를 단순 보유에서 [전량 소각 + 정관 개정으로 재발행 차단]까지 요구하는 활동주의 모델. 자사주 소각 → 발행주식수 감소 → 주당 지표 개선 + 지배주주 지분율 자동 상승의 양면 효과. 머스트의 영풍 캠페인이 [10년 미소각 자사주]를 정조준한 대표 사례.",
    },
    {
      term: "Korea Zinc 분쟁 연계 활동주의 (Conflict-Linked Activism)",
      description: "메인 경영권 분쟁의 약체 동맹군 affiliate에 대한 측면 활동주의 진입. Korea Zinc-MBK 18개월 분쟁이 메인 전선이라면, 머스트의 영풍 캠페인은 그 분쟁의 [측면 전선]. 분쟁이 한창인 시점에 약체 affiliate는 [별도 전선을 길게 끌 자원이 없음] → 빠른 부분 항복 인센티브.",
    },
    {
      term: "김두용 머스트자산운용 (Kim Doo-yong, Must Asset)",
      description: "서울대 건축학과 + SNU 주식투자 동아리 SMIC 1세대 출신. 2006년 머스트인베스트먼트 설립 후 머스트투자자문(2010) → 머스트자산운용(2016.09)으로 사명 변경. 가치투자 + 행동주의 결합 운용 철학. 태영건설(2014~2020) + 영풍(2024.11~) 트랙으로 한국 1세대 토종 행동주의의 대표 운용사.",
    },
    {
      term: "영풍 본업 회생 thesis (Young Poong Core Business Revival Thesis)",
      description: "영풍 경영진이 본업(석포제련소 zinc 제련) 회생보다 Korea Zinc 분쟁 자원 소모에 집중해 소액주주 가치를 훼손한다는 머스트의 핵심 분석 frame. 본업 부실(3년 연속 영업적자) + 환경규제 위반 + 황산 수출 차단의 정량 사실이 thesis의 기초. 자사주 소각·풋옵션 환원 약속을 통한 [잉여 자원 본업 재투입] 요구로 귀결.",
    },
    {
      term: "풋옵션 공개 demand (Put Option Disclosure Demand)",
      description: "Korea Zinc-MBK 분쟁에서 영풍이 MBK-영풍 컨소시엄을 통해 Korea Zinc에 보유한 풋옵션 의혹 — 행사가·만기·조건의 공개 요구. 풋옵션이 공개되면 분쟁의 가격 메커니즘이 시장에 노출되어 양 진영 모두 부담. 머스트가 활동주의 캠페인을 분쟁 변수에 직접 개입하는 도구로 활용한 사례.",
    },
    {
      term: "재벌 자회사 분쟁 비용 (Cost of Chaebol Affiliate Disputes)",
      description: "재벌 그룹의 자회사·affiliate 간 경영권 분쟁이 분쟁 당사자가 아닌 소액주주에게 전가하는 비용. 영풍은 Korea Zinc-MBK 분쟁에 자원을 소모하면서 본업 부실을 가속화 + 자사주 미소각을 유지 → 소액주주 가치 훼손. 머스트는 이 [분쟁 비용의 소액주주 전가]를 활동주의의 정당성 기반으로 활용.",
    },
    {
      term: "한국 활동주의 wave 2024-2026 (Korean Activism Wave 2024-2026)",
      description: "얼라인파트너스 7개 금융지주 캠페인(2023) + 정부 Corporate Value-Up(2024.02) 출범 이후 한국 활동주의의 산업화 단계. 머스트의 영풍 캠페인(2024.11) + 얼라인의 코웨이 3차 캠페인(2025) + KCGI·트러스톤 후속 캠페인이 동시 진행. 한국 토종 활동주의가 [개별 회사 → 섹터 → 정책 → 재벌 자회사 분쟁]으로 의제를 확장하는 단계.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "머스트자산운용은 어떤 운용사이고, 김두용 대표는 누구인가?",
      a: "머스트자산운용은 2006년 머스트인베스트먼트로 출범, 2010년 머스트투자자문, 2016년 9월 머스트자산운용으로 사명을 변경한 한국 1세대 토종 행동주의 운용사다. AUM은 2022년 초 약 6,000억 원 수준에서 2023년 초 약 2,361억 원으로 급감(2022년 -56% 수익률)했으나, 2024~2025년 활동주의 트랙으로 재도약 — 시장 관측 기준 약 1.96조 원 수준(2026, 공식 미확인). 김두용 대표는 서울대 건축학과 + 한국 주식 동아리 SMIC(SNU Midas Investment Club) 1세대 출신으로, 2006년부터 머스트의 CEO·포트폴리오 매니저를 맡고 있다. 가치투자 + 행동주의 결합 운용 철학이 시그니처.",
    },
    {
      q: "머스트가 영풍에 던진 5대 요구는 무엇이고, 어디까지 관철됐나?",
      a: "5대 요구는 ① 자사주 6.62% 전량 소각 + 정관 개정 ② 1,000% 무상증자 또는 10:1 액면분할 ③ Korea Zinc 풋옵션 계약 공개 ④ 서울 도심 prime 부동산 자산재평가 ⑤ Korea Zinc 풋옵션 현금흐름 30%+ 주주환원 약속. 2025년 3월 10일 영풍 이사회가 [① 자사주 전량 소각(2026.03까지) + ② 10:1 액면분할 + 머스트 추천 전영준 변호사 사외이사 추천]을 결의하면서 3개가 관철. ③ Korea Zinc 풋옵션 공개 + ④ 부동산 자산재평가 + ⑤ 풋옵션 현금흐름 30%+ 환원 약속은 2026년 6월 시점 미관철 상태이며, 다음 단계 협상이 진행 중인 것으로 시장은 관측 (공식 미확인).",
    },
    {
      q: "왜 영풍은 그렇게 빨리 부분 항복했나?",
      a: "세 가지 이유가 핵심이다. 첫째, 시기 — 2024.11 시점 영풍은 Korea Zinc-MBK 18개월 분쟁의 한가운데로, 머스트와의 별도 전선을 길게 유지할 자원 여유가 없었다. 둘째, 자기모순 narrative의 방어 불가성 — 강성두 사장의 2024.09 \"소각 목적이 아닌 자사주는 취득하면 안 된다\" 발언과 영풍 자신의 자사주 10년 미소각이 정면 충돌하는 자기모순. 길게 끌수록 명분 측면에서 불리. 셋째, 선별적 양보 가능성 — 머스트의 5대 요구 가운데 자사주·액면분할·사외이사는 본업과 분쟁 본 전선에 직접 영향이 적은 거버넌스 의제. 영풍은 이 3개만 빠르게 수용하고 풋옵션·부동산은 회피하는 선별적 방어를 정확히 실행했다.",
    },
    {
      q: "이 캠페인이 Korea Zinc-MBK 분쟁과 어떻게 연결되나?",
      a: "두 가지 직접 연결고리가 있다. 첫째, 머스트가 정조준한 영풍의 약점이 [Korea Zinc 분쟁 자원 소모 + 본업 부실 + 자사주 10년 미소각]의 3중 약점인데, 이 3중 약점은 모두 Korea Zinc 분쟁 진행과 직접 연동된다. 둘째, 머스트의 5대 요구 중 [Korea Zinc 풋옵션 공개]와 [풋옵션 현금흐름 30%+ 환원 약속]은 Korea Zinc-MBK 분쟁의 본 전선 변수에 직접 개입하는 의제. 2026년 4월 대법원이 영풍 의결권 제한 적법성을 최종 확정하면서 Korea Zinc 풋옵션 가치가 재산정 압박을 받는 국면 — 머스트의 다음 단계 협상력의 핵심 변수다. 이 캠페인은 Korea Zinc-MBK 18개월 분쟁의 [후일담]이자 [측면 전선]이라는 독특한 위치.",
    },
    {
      q: "이 캠페인이 한국 활동주의 wave에서 어떤 의미인가?",
      a: "세 가지 의미가 핵심이다. 첫째, [속도] — 약 3.5~4개월 만의 핵심 의제 관철은 얼라인-7개 금융지주 사례(약 1개월) 다음으로 빠른 한국 활동주의의 부분 항복 속도. 둘째, [표적 모델] — 한국 M&A 사상 최대 경영권 분쟁(Korea Zinc-MBK)의 약체 동맹군 affiliate를 정조준한 최초 사례. 향후 [재벌 분쟁 진행 중 약체 affiliate]에 대한 활동주의 진입의 표준 모델 가능성. 셋째, [정량 thesis 정교화] — 자사주 미소각 + 본업 부실 + 분쟁 자원 소모 + Korea Zinc 풋옵션 가치라는 multi-layer 정량 thesis가 한국 활동주의의 분석 표준 격상에 기여. 머스트의 영풍 캠페인은 한국 토종 활동주의가 [개별 회사 → 섹터 → 정책 → 재벌 자회사 분쟁]으로 의제를 확장하는 단계의 대표 사례.",
    },
    {
      q: "남은 잔존 요구(풋옵션 공개·부동산 재평가·풋옵션 환원 30%+)는 어떻게 전개되나?",
      a: "2026년 6월 시점 미확정 상태로, 시장 관측 기준 다음 단계 협상이 진행 중이나 공식 미확인. 핵심 변수는 2026년 4월 대법원이 Korea Zinc-MBK 분쟁의 영풍 의결권 제한 적법성을 최종 확정한 사건. 분쟁이 사실상 종결되면서 영풍의 Korea Zinc 풋옵션 현금흐름 시기·규모가 재구조화될 가능성이 열렸고, 머스트의 [풋옵션 공개 + 30%+ 환원] 의제가 다음 단계 협상의 중심으로 부상. 한편 분쟁이 종결되면서 영풍은 머스트와의 별도 전선을 빠르게 정리할 인센티브가 약화되는 측면도 있어 협상의 향방은 단언하기 어려움. 일부 의제는 머스트가 자체 철회한 것으로 알려졌으나 공식 미확인 (시장 관측).",
    },
  ],
};

export default deal;
