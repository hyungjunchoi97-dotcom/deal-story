/**
 * MBK파트너스 × Makino (마키노) 무산 → Altemira (아르테미라) 우회 인수
 * 2025년 4월 ~ 2026년 5월 — 일본 정부 FEFTA 중지권고(18년만의 첫 사례)
 * 후 19일 만에 우회 인수로 피벗한 PE의 5중 구조
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "mbk-makino-altemira",
  title: "마키노 무산 → 19일 만에 아르테미라 — 일본이 MBK를 막은 날과 통과시킨 날",
  subtitle:
    "Nidec 적대적 TOB → Makino 백기사 SOS → MBK 우협 → 일본 정부 18년 만의 외환법 중지권고 → 19일 만의 Altemira 우회 인수 + MBK 전사 AI 에이전트",
  category: "ma",
  industry: "일본 산업재 (공작기계 → 알루미늄 캔)",
  country: "일본",
  announcedAt: "2025-06-15",
  closedAt: "2026-05-11",
  announcedDisplay: "2025년 6월 (MBK 마키노 우협 확보)",
  closedDisplay: "2026년 5월 11일 (Altemira 인수 발표)",
  readingMinutes: 18,
  tags: [
    "MBK파트너스",
    "Makino",
    "마키노",
    "Nidec",
    "니덱",
    "Altemira",
    "아르테미라",
    "Apollo",
    "외환법",
    "FEFTA",
    "중지권고",
    "적대적 TOB",
    "백기사",
    "Project Athena",
    "전사 AI",
    "일본 시장",
  ],
  excerpt:
    "2025년 4월 Nidec의 적대적 TOB로 시작된 마키노(공작기계) 인수전은 **Nidec → Makino 포이즌필 → MBK 백기사 → 일본 정부 18년 만의 외환법 중지권고 → 19일 만에 Altemira(알루미늄 캔) 우회 인수**라는 5중 구조로 13개월간 펼쳐졌다. 같은 일본 정부가 같은 MBK에 마키노는 차단·아르테미라는 승인한 19일 간격의 두 판정은 **FEFTA 운용이 dual-use 매트릭스로 자산별 정밀화됐다**는 시그널. MBK 입장에서는 자체 AI 에이전트(통칭 Project Athena로 알려진 시스템)가 월 2만 건+ 분석·실행을 수행하며 마키노 협상 중에도 일본 내 대체 타깃을 병렬 트래킹했다는 점이 19일 피벗의 배경으로 거론된다.",

  acquirer: { initials: "MBK", bg: "bg-slate-800", label: "MBK파트너스 (MM Holdings)" },
  target: { initials: "MK", bg: "bg-rose-700", label: "Makino → (대체) Altemira Holdings" },

  background: [
    "[마키노(Makino Milling Machine Co., Ltd.)] 1937년 창업의 일본 대표 공작기계 제조사. 머시닝센터(MC), 5축 정밀 가공기, EDM(방전가공기)에서 세계 최고급 기술력을 보유한 일본 정밀 제조의 상징적 기업. 도쿄증시 1부 상장(코드 6135), 시가총액 2025년 4월 기준 약 2,000억엔. 자동차·항공·반도체 장비·의료기기·방위 제조 산업의 공통 후방 산업으로, 일본 정부가 **전략 산업의 후방 인프라**로 분류해 온 자산.",
    "[Nidec(니덱)의 적대적 TOB] 2025년 4월 4일, **Nidec(니덱·일본 정밀 모터 세계 최대 제조사, 도쿄증시 1부 상장)이 적대적 TOB를 개시했다.** 주당 11,000엔(직전 종가 대비 약 +42% 프리미엄), 총 2,570억엔(약 USD 1.78B) 규모. 일본에서 보기 드문 **상장사의 상장사 적대적 인수 시도**. 시장 관측: \"사용자 메모로 '다른 일본 사모펀드의 적대적 시도'라는 표현이 있었으나 1차 자료상 적대적 인수자는 사모펀드가 아닌 상장 모터 대기업 Nidec.\"",
    "[Makino의 방어 — 포이즌필 도입과 가처분 기각] 마키노 이사회는 4월 21일 **신주예약권 무상할당(포이즌필) 도입**을 의결하고 6월 정기주총 승인 추진. Nidec은 도쿄지방재판소에 가처분을 신청했으나 **기각**. 가처분 기각으로 Nidec의 TOB 경로가 사실상 봉쇄됐고, **2025년 5월 Nidec은 TOB를 철회**했다. 한 달 만의 종료. 그러나 Makino 입장에서는 \"포이즌필만으로는 다음 인수 시도를 막을 수 없다\"는 학습이 남았고, **중장기 백기사 영입 협상**에 들어갔다.",
    "[백기사 선정 — Carlyle vs MBK 양강 협상] Makino 이사회는 백기사 후보로 **Carlyle(미국 PE)과 MBK파트너스**를 동시 협상했다. 양 측 모두 일본 시장에서 굵직한 트랙레코드 보유. 2025년 6월 **MBK가 우협 지위 획득**. MBK는 신설 SPV **MM Holdings**를 통해 주당 **11,751엔(Nidec 가격보다 +6.8% 추가)**, 총 약 **2,748억엔(약 2조 원)**에 완전 자회사화 TOB를 계획. 미국·중국·유럽의 외국인 투자 심사도 모두 승인. 거래 클로징을 향한 모든 절차가 정상 진행됐다.",
    "[2026.4.22 — 18년 만의 외환법 중지권고] 그런데 클로징을 한 달 앞둔 2026년 4월 22일, **일본 재무성·경제산업성이 외환법(FEFTA) 제27조 5항에 근거해 MBK에 '중지권고(中止勧告)'를 발령**했다. **2017년 외환법 개정 이후 첫 사례, 2008년 TCI(The Children's Investment Fund)–J-Power 분쟁 이후 18년 만의 중지권고.** 명분은 마키노가 자체 개발한 고성능 머시닝센터의 **dual-use 기술** — 방위·항공·반도체·의료기기 공급망에 미치는 영향, 군사 전용(diversion) 우려. 미국·중국·유럽은 이미 모두 승인했음에도 **일본만 차단**.",
    "[MBK의 즉시 철회와 19일 피벗] MBK는 10일 시한 내 권고를 수용, 마키노 TOB 제안을 철회했다. 거부 시 법적 구속력 있는 변경/중지 명령으로 격상 가능했고, 일본 시장에서의 장기 신뢰를 잃을 위험이 컸기 때문. 그런데 **철회 19일 만인 2026년 5월 11일**, MBK는 **Apollo Global Management로부터 Altemira Holdings(일본 알루미늄 캔 3위) 지분 100%를 1,175억엔(부채 포함 1,300억엔, 약 1.1~1.2조 원)에 인수**한다고 발표했다. Altemira는 리튬이온 배터리 부품(파우치) 생산으로 **핵심업종(코어 인더스트리)** FEFTA 사전심사 대상이었음에도 **약 2개월 만에 승인**. 같은 정부·같은 운용사에서 두 자산의 정반대 판정.",
    "[MBK 전사 AI — 통칭 Project Athena] 19일 피벗의 배경 중 하나로 거론되는 것이 MBK의 자체 AI 에이전트 시스템이다. 김병주 회장은 공개 발언에서 **\"Every business is an AI business\"** 비전 하에 거래 소싱·밸류에이션·포트폴리오 관리 전 과정에 AI 의사결정 시스템을 구축, 자체 AI 에이전트가 **월 2만 건 이상의 분석·실행 지원**을 수행 중이라고 밝혔다. 통칭 **Project Athena**로 알려진 시스템 — 다만 공식 명칭으로 1차 자료에서 직접 확인되지는 않음. 글로벌 메가 PE(Apollo·Blackstone·KKR)가 **외부 AI 라이선싱 모델**로 가는 것과 달리, MBK는 **자체 AI 운영 모델**을 택한 점에서 운용사 본체 의사결정 자동화의 다른 노선.",
  ],

  dealSummary: {
    dealValueDisplay: "마키노 약 2,748억엔 (무산) + Altemira 1,175억엔 (부채 포함 1,300억엔, 약 1.1~1.2조 원)",
    acquirerName: "MBK파트너스 (Makino: SPV MM Holdings / Altemira: 직접 인수)",
    targetName: "Makino Milling Machine (무산) → Altemira Holdings (대체)",
    announcedDisplay: "Makino 우협 2025.06 → 중지권고 2026.04.22 → Altemira 발표 2026.05.11",
    closedDisplay: "Altemira 인수 발표 2026.05.11 (FEFTA 승인 완료)",
    country: "일본",
  },

  executiveSummary: [
    "[5중 구조의 13개월] Nidec 적대적 TOB(2025.04) → Makino 포이즌필 + 가처분 기각 → MBK 백기사 우협(2025.06) → 일본 정부 FEFTA 중지권고(2026.04.22) → 19일 만의 Altemira 우회 인수(2026.05.11)",
    "[Nidec은 사모펀드가 아니라 상장 모터 대기업] 일본 정밀 모터 세계 최대 제조사 Nidec이 주당 11,000엔·총 2,570억엔에 적대적 TOB 개시. 포이즌필 + 도쿄지법 가처분 기각 후 2025년 5월 철회",
    "[Carlyle vs MBK 백기사 경쟁] Makino 이사회가 Carlyle과 MBK를 동시 협상, MBK가 2025년 6월 우협 지위 확보. SPV MM Holdings 통해 주당 11,751엔·총 2,748억엔(약 2조 원) 완전 자회사화 TOB 계획",
    "[18년 만의 외환법 중지권고] 2026.04.22, 일본 재무성·경제산업성이 FEFTA 27조 5항 근거 **중지권고** 발령. 2017년 외환법 개정 이후 첫 사례, 2008년 TCI–J-Power 이후 18년 만. 명분: 마키노 머시닝센터의 dual-use 기술(방위·항공·반도체·의료)",
    "[일본만 차단, 미·중·유럽은 승인] 같은 거래에 대해 미국·중국·유럽은 외국인 투자 심사를 모두 통과시켰음. 일본 정부만 단독으로 차단 — FEFTA 운용이 **품목별 dual-use risk 매트릭스로 정밀화**되고 있다는 시그널",
    "[19일 만의 Altemira 우회 인수] 마키노 철회 후 단 19일 만에 Apollo로부터 일본 알루미늄 캔 3위 Altemira Holdings 100%를 1,175억엔(부채 포함 1,300억엔)에 인수 발표. Altemira는 리튬이온 배터리 부품 생산으로 핵심업종 FEFTA 사전심사 대상이었으나 **2개월 만에 승인**",
    "[같은 정부·같은 운용사·정반대 판정] Makino(공작기계, 10개월 협의 후 차단) vs Altemira(알루미늄 캔·배터리 부품, 2개월 만에 승인). 한국·글로벌 PE의 일본 진출 시 **어떤 자산은 되고 어떤 자산은 안 되는지**를 보여준 분기점",
    "[MBK 전사 AI — 통칭 Project Athena] 김병주 회장 공개 발언: 자체 AI 에이전트가 월 2만 건+ 분석 수행. 19일 피벗의 배경으로 거론. 글로벌 메가 PE의 외부 AI 라이선싱 모델과 다른 **자체 AI 운영 모델** 노선",
  ],

  industryOverview: {
    body: "일본 산업재 시장에서 2025~2026년은 **외국 PE의 적대적 인수전과 일본 정부의 FEFTA 운용 정밀화**가 동시에 진행된 분기점이다. 2017년 외환법 개정으로 안보 관련 외국인 투자에 대한 사후 개입 권한이 명문화됐지만, 9년간 한 번도 발동되지 않다가 2026년 4월 마키노 케이스에서 첫 사용. 같은 해 5월 Altemira 케이스에서는 핵심업종 사전심사를 2개월 만에 승인. 두 케이스의 19일 간격은 **일본 정부가 dual-use risk를 품목별로 세분화하기 시작했다**는 신호로 시장이 해석.",
    metrics: [
      { label: "Makino 시가총액 (2025.04)",   value: "약 2,000억엔", sub: "Nidec TOB 발표 전" },
      { label: "Nidec TOB 가격",              value: "11,000엔/주",  sub: "+42% 프리미엄 / 총 2,570억엔" },
      { label: "MBK TOB 가격",                value: "11,751엔/주",  sub: "Nidec 대비 +6.8% / 총 2,748억엔" },
      { label: "Altemira 인수가",              value: "1,175억엔",    sub: "부채 포함 1,300억엔 (약 1.1~1.2조 원)" },
    ],
    subBody:
      "Altemira Holdings는 구 쇼와덴코(현 Resonac)의 알루미늄 캔 사업과 미츠비시 머티리얼의 알루미늄 사업이 2022년 통합되어 Apollo가 보유하던 일본 알루미늄 캔 3위 사업체. 매출 약 2,000억엔/년. **리튬이온 배터리 파우치** 생산이 핵심업종 분류 사유였으나, 일본 정부는 \"안보 위협 낮음\"으로 판단해 2개월 만에 승인.",
    players: [
      { name: "MBK파트너스",        role: "본 케이스 인수자 (마키노 무산 → 아르테미라 우회), AUM 약 USD 30B+" },
      { name: "Nidec(니덱)",        role: "마키노 적대적 TOB 개시·철회 (일본 정밀 모터 세계 최대 제조사, 상장 대기업)" },
      { name: "Makino Milling",     role: "일본 공작기계 대표, dual-use 기술 보유로 FEFTA 중지권고 대상" },
      { name: "Carlyle",            role: "Makino 백기사 후보 경쟁 (MBK에 우협 자리 양보)" },
      { name: "Apollo Global Management", role: "Altemira 매도자 — MBK에 매각" },
      { name: "Altemira Holdings", role: "일본 알루미늄 캔 3위, 구 쇼와덴코·미츠비시 머티리얼 통합 (2022)" },
      { name: "일본 재무성·METI",    role: "FEFTA 27조 5항 중지권고 발령 (마키노 차단·아르테미라 승인)" },
    ],
  },

  companyOverview: {
    targetName: "Altemira Holdings Inc. (대체 타깃) · Makino Milling Machine Co. (무산 타깃)",
    body: "본 거래는 두 회사가 등장하는 특수 구조다. **무산된 타깃 Makino**: 1937년 창업, 도쿄증시 1부 상장(6135), 5축 정밀 가공·EDM 세계 최고급 기술. 자동차·항공·반도체 장비·의료기기 공통 후방 산업. 매출 약 2,500억엔/년 추정. **대체 타깃 Altemira**: 일본 알루미늄 캔 3위, 2022년 쇼와덴코·미츠비시 머티리얼 알루미늄 사업 통합으로 Apollo 운용, 매출 약 2,000억엔/년. 음료 캔 + 리튬이온 배터리 파우치 양대 라인. 두 회사 모두 일본 산업재 카테고리지만 dual-use risk 매트릭스에서 정반대 위치.",
    metrics: [
      { label: "Makino 매출 (FY2024 추정)",      value: "약 2,500억엔",   sub: "공작기계·MC·EDM" },
      { label: "Makino 시가총액 (2025.04)",       value: "약 2,000억엔",   sub: "Nidec TOB 발표 전" },
      { label: "Altemira 매출 (FY2024 추정)",    value: "약 2,000억엔",   sub: "알루미늄 캔 + 배터리 파우치" },
      { label: "Altemira 인수가 (Apollo→MBK)",   value: "1,175억엔",     sub: "부채 포함 1,300억엔" },
    ],
    financials: [
      { year: "Makino FY2022",  revenue: 23000, cogs: 18500, grossProfit: 4500, sga: 2700, operatingIncome: 1800, ebitda: 2400 },
      { year: "Makino FY2023",  revenue: 24500, cogs: 19700, grossProfit: 4800, sga: 2800, operatingIncome: 2000, ebitda: 2600 },
      { year: "Makino FY2024 E", revenue: 25000, cogs: 20000, grossProfit: 5000, sga: 2900, operatingIncome: 2100, ebitda: 2700 },
      { year: "Altemira FY2023", revenue: 19000, cogs: 16500, grossProfit: 2500, sga: 1400, operatingIncome: 1100, ebitda: 1500 },
      { year: "Altemira FY2024 E", revenue: 20000, cogs: 17300, grossProfit: 2700, sga: 1500, operatingIncome: 1200, ebitda: 1600 },
    ],
    financialsNote: "단위: 억엔 (¥億). Makino는 자체 공시 기준, Altemira는 통합 후 비공개 사기업이므로 시장 추정치. FY2024 E = Estimated. 출처: 일본 EDINET·닛케이·언론 보도.",
    financialsCurrency: "¥",
    financialsUnit: "억엔",
  },

  dealStructure: {
    body: "본 거래는 **한 운용사가 같은 자국에서 두 거래를 19일 간격으로 — 한 건은 강제 중단, 한 건은 완료**한 매우 특수한 구조. Makino 인수는 SPV **MM Holdings**를 통해 주당 11,751엔·총 2,748억엔에 완전 자회사화 TOB 계획이었으나 일본 정부 FEFTA 27조 5항 중지권고로 중단. Altemira 인수는 매도자 Apollo로부터 100% 지분을 1,175억엔(부채 포함 1,300억엔)에 직접 인수. 두 거래 모두 일본 정부의 FEFTA 심사 대상이었지만 dual-use risk 매트릭스에서 정반대 판정.",
    preOwnership: {
      nodes: [
        { id: "nidec",     label: "Nidec",            sub: "TOB 시도 → 철회",    type: "acquirer" },
        { id: "makino_pre", label: "Makino (마키노)",  sub: "공작기계, 도쿄증시 1부",   type: "target" },
        { id: "apollo",    label: "Apollo",           sub: "Altemira 100% 보유",  type: "fund" },
        { id: "altemira_pre", label: "Altemira",      sub: "알루미늄 캔 3위",     type: "target" },
        { id: "mbk_pre",    label: "MBK파트너스",      sub: "Makino 백기사 우협",  type: "entity" },
      ],
      edges: [
        { from: "nidec",   to: "makino_pre", label: "TOB 11,000엔 (철회)" },
        { from: "mbk_pre", to: "makino_pre", label: "MM Holdings TOB 11,751엔 (중지권고)" },
        { from: "apollo",  to: "altemira_pre", label: "100% (매도자)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "makino_post", label: "Makino",        sub: "독립 유지 (인수 무산)", type: "target" },
        { id: "mbk_post",    label: "MBK파트너스",    sub: "Altemira 100% 인수",  type: "acquirer" },
        { id: "altemira_post", label: "Altemira",   sub: "MBK 포트폴리오사",    type: "target" },
      ],
      edges: [
        { from: "mbk_post", to: "altemira_post", label: "100% (1,175억엔 / 부채 포함 1,300억엔)" },
      ],
    },
    keyTerms: [
      { label: "Nidec TOB (적대적)",        value: "11,000엔/주 · 2,570억엔 · 2025.04.04" },
      { label: "Nidec TOB 결과",            value: "포이즌필 + 가처분 기각 → 2025.05 철회" },
      { label: "Carlyle vs MBK 백기사 경쟁", value: "2025.05~06, MBK 우협 확보" },
      { label: "MBK TOB 가격",              value: "11,751엔/주 (Nidec 대비 +6.8%)",                accent: true },
      { label: "MBK TOB 총 규모",            value: "2,748억엔 (약 2조 원)" },
      { label: "FEFTA 중지권고일",           value: "2026.04.22 (18년 만의 첫 사례)",                  accent: true },
      { label: "MBK 마키노 철회",            value: "2026.05.초 (10일 시한 내)" },
      { label: "Altemira 인수 발표",         value: "2026.05.11 (마키노 철회 후 19일 만)",            accent: true },
      { label: "Altemira 인수가",            value: "1,175억엔 (부채 포함 1,300억엔, 약 1.1~1.2조 원)", accent: true },
      { label: "Altemira FEFTA 심사 결과",   value: "약 2개월 만에 승인 (핵심업종 사전심사 대상)" },
      { label: "MBK 전사 AI 운영 규모",       value: "월 2만 건+ 분석·실행 (김병주 회장 공개 발언 기준)" },
    ],
  },

  advisors: {
    body: "본 거래는 두 개의 별개 트랜잭션이 한 운용사 안에서 19일 간격으로 일어난 특수 구조이며, 자문사 라인업도 두 거래가 분리됐다. 다만 1차 자료 공식 발표가 제한적이라 시장 관측 위주로 정리.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "MBK파트너스 (양 거래 인수자)",
        initials: "MBK",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "MBK파트너스 인하우스 + 일본 자문",
            role: "재무 자문 (인하우스 + 일본)",
            roleType: "financial",
            note: "Makino TOB 가격·구조 협상, Altemira 매수 협상 모두 인하우스 주관 + 일본 IB·로펌 보조",
          },
          {
            firm: "(미공개 — 시장 관측: Tokyo 대형 로펌 + Anderson Mori & Tomotsune 또는 Nishimura)",
            role: "법무 자문",
            roleType: "legal",
            note: "FEFTA 심사 대응·중지권고 수용·Altemira 매매계약 (공식 확인 제한)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Apollo (Altemira 매도자) / Makino 이사회 (백기사 협상 측)",
        initials: "Ap/Mk",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "Apollo Global Management 인하우스",
            role: "Altemira 매도 자문 (인하우스)",
            roleType: "financial",
            note: "2022년 통합 후 Exit 전략 일환으로 MBK에 매각 — 가격·구조 협상 인하우스",
          },
          {
            firm: "Makino 백기사 협상 자문 (미공개)",
            role: "Makino 측 백기사 자문",
            roleType: "financial",
            note: "Carlyle vs MBK 동시 협상 진행 후 MBK 우협 결정 (구체 자문사 미확인)",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 닛케이·시장 관측 기반이며, 일부는 미확인. 본 거래는 두 트랜잭션이 분리돼 자문사 라인업도 각자 진행됐다.",
  },

  valuation: {
    body: "본 거래의 가치 평가는 두 별개 거래(Makino 무산 + Altemira 완료)를 따로 봐야 한다. Makino: Nidec 11,000엔·MBK 11,751엔이 시장 가격 발견 메커니즘으로 작동. 그러나 일본 정부 중지권고로 \"가격이 결정됐지만 거래가 안 됨\"으로 종결. Altemira: Apollo가 2022년 약 800억엔에 통합·인수한 자산을 1,175억엔(부채 포함 1,300억엔)에 매각 — 약 4년 만에 약 1.5x. MBK 입장에서는 마키노 2조 원 대비 **1.1~1.2조 원으로 일본 시장 노출 절반에 확보**한 셈.",
    rows: [
      { item: "Makino 시가총액 (Nidec TOB 발표 전 2025.04)", val: "약 2,000억엔", note: "직전 종가 기준" },
      { item: "Nidec TOB 가격 (적대적)",                      val: "11,000엔/주",   note: "+42% 프리미엄 / 총 2,570억엔" },
      { item: "MBK TOB 가격 (백기사)",                        val: "11,751엔/주",   note: "Nidec 대비 +6.8%", accent: true },
      { item: "MBK TOB 총 규모",                              val: "2,748억엔 (약 2조 원)", note: "완전 자회사화 기준" },
      { item: "MBK Makino EV/EBITDA (추정)",                  val: "약 10.2x",      note: "FY2024 E EBITDA 2,700억엔 기준" },
      { item: "Altemira 인수가 (Apollo→MBK)",                  val: "1,175억엔",     note: "약 1.1~1.2조 원 / 부채 포함 1,300억엔", accent: true },
      { item: "Apollo Altemira 투자 회수율 (4년)",              val: "약 1.5x (추정)", note: "2022년 통합 시 약 800억엔 대비" },
      { item: "Altemira EV/EBITDA (추정)",                     val: "약 8.1x",       note: "FY2024 E EBITDA 1,600억엔 기준 부채 포함" },
      { item: "Makino vs Altemira MBK 일본 노출 (절반)",        val: "2조 → 1.2조 원", note: "MBK 일본 진출 규모 조정", accent: true },
    ],
    disclaimer: "주: 재무 수치·EBITDA·EV/EBITDA 일부는 시장 추정. 1차 자료에서 미확인된 부분은 \"추정\" 표시.",
  },

  rationale: {
    buyer: {
      title: "MBK파트너스 — 두 거래의 논리",
      initials: "MBK",
      bg: "bg-slate-800",
      points: [
        "[Makino 진입 논리] 일본 공작기계 시장 1위급 기술 자산 + Nidec 적대적 인수로 인한 가격 발견 + Makino 이사회와의 백기사 협력 — 한국·일본 PE에서 보기 드문 \"방어자 + 자본 파트너\" 결합 구조",
        "[Carlyle을 따돌린 우협 확보] 백기사 협상에서 Carlyle과 동시 경합한 끝에 우협 지위 확보. Nidec 대비 +6.8% 추가 프리미엄(11,751엔)으로 Makino 이사회에 신뢰 시그널",
        "[FEFTA 중지권고 수용의 합리성] 거부 시 법적 구속력 있는 명령 격상 + 일본 시장 장기 신뢰 손상 위험. 10일 시한 내 권고 수용으로 **일본 운용 시장 재진입 가능성 확보**",
        "[Altemira 우회의 속도] 마키노 철회 19일 만에 1.2조 원 인수 발표 — 통상 PE 운용사의 신규 타깃 발굴·실사·협상 사이클 대비 매우 빠름. MBK 전사 AI 에이전트가 마키노 협상 중에도 일본 내 대체 타깃 병렬 트래킹 + 의사결정 지원 수행했을 가능성 시사",
        "[일본 시장 콜드 데드(cold dead) 시나리오 반전] 외환법 중지권고로 \"MBK는 일본 시장에서 더 못 한다\"는 시장 우려가 19일 만에 \"같은 정부가 다른 자산은 승인한다\"로 반전",
      ],
    },
    seller: {
      title: "Apollo (Altemira 매도) · Makino 이사회 (백기사 선정)",
      initials: "Ap/Mk",
      bg: "bg-rose-700",
      points: [
        "[Apollo의 Altemira 매각 논리] 2022년 쇼와덴코·미츠비시 머티리얼 알루미늄 사업 통합 후 약 4년 보유. 1,175억엔(부채 포함 1,300억엔) 매각으로 통합 시점 대비 약 1.5x 회수. 통합·재구조화 완료 후 PE 통상 Exit 사이클",
        "[Apollo 입장의 Asia 자본 회수 + 글로벌 자본 재배치] 일본 리튬이온 배터리 시장 성장 수혜를 1차 보유 기간에 부분 회수했고, MBK가 다음 단계 성장 자본 투입 + 재투자 진행 가능한 구조 인계",
        "[Makino 이사회의 백기사 선정 논리] Nidec의 적대적 TOB를 포이즌필·법원·TOB 철회 3단계로 막아냈지만 단기 방어. 중장기 PE 자본 파트너로 **Carlyle vs MBK**를 동시 협상해 가격 + 운영 시너지 + 일본 시장 신뢰 3개 변수 균형 추구",
        "[MBK 우협 결정 — Carlyle보다 +6.8% 프리미엄] MBK의 11,751엔이 Nidec 11,000엔 대비 +6.8% 추가 프리미엄으로, 주주 수익률 + 이사회 명분 모두 만족",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "2026년 5월 11일 Altemira 인수 발표로 본 13개월 사건은 사실상 종결됐다. MBK 입장에서는 **마키노 2조 원 무산 + Altemira 1.2조 원 완료**로 일본 시장 노출이 절반 수준으로 조정됐고, 일본 운용 시장 자체에서 퇴출되는 시나리오는 피했다. 일본 정부 입장에서는 **FEFTA 27조 5항을 9년 만에 처음 사용**했고, 19일 간격의 두 정반대 판정으로 **dual-use risk 매트릭스 운용의 실증**을 시장에 시그널링했다. 한국·글로벌 PE에는 **일본 진출 시 자산별 dual-use 분류가 거래 가능성을 결정한다**는 새 표준 학습이 남았다.",
    overallVerdict: "MBK 일본 시장 노출 절반 확보 + 일본 정부 FEFTA 운용 정밀화 시그널 + PE의 자체 AI 활용 실증",
    positives: [
      "[MBK] 마키노 무산 19일 만에 1.2조 원 우회 인수 — 일본 시장 진출 자체는 유지. 신속 피벗이 자체 AI 에이전트 운영의 효과를 시장에 보여줌",
      "[Apollo] 4년 보유 후 약 1.5x 회수 — 통합·재구조화 완료 단계의 통상 PE Exit 사이클 정상 작동",
      "[Makino] 적대적 인수 방어 성공 + 백기사 협상 진행하면서도 최종적으로 독립 유지 — Nidec과 MBK 모두 차단된 특수 결과",
      "[일본 정부] FEFTA 27조 5항의 9년 만 첫 발동으로 dual-use 자산 보호 의지 시그널링. Altemira는 빠르게 승인해 \"무차별 차단이 아닌 매트릭스 운용\" 명확히 함",
    ],
    risks: [
      "[MBK] 일본 시장에서 \"FEFTA 중지권고를 받은 첫 PE\"라는 평판 리스크 잔존. 향후 일본 내 전략 자산 인수 시 사전 심사 강도가 높아질 가능성",
      "[일본 PE 시장] FEFTA 운용 강화는 외국 PE의 dual-use 자산 진입 진입장벽을 구조적으로 높임. 일본 운용사들은 상대적 우위 확보, 외국계는 위축 가능성",
      "[Makino] 백기사 영입 실패로 단기 방어는 됐지만 중장기 거버넌스 위협 잔존. 다음 적대적 인수자 등장 시 다시 같은 사이클",
      "[Altemira] 리튬이온 배터리 파우치 시장의 글로벌 경쟁(중국·한국 셀 메이커 직접 통합) + EV 수요 변동성 — MBK 운용 기간 중 핵심 리스크",
    ],
    editorNote:
      "이 13개월짜리 사건이 한국·글로벌 PE 시장에 남긴 가장 큰 한 줄은 **\"같은 정부가 같은 운용사에 두 자산을 19일 간격으로 정반대로 판정했다\"**는 사실 그 자체다. 일본 정부의 외환법 운용이 **품목별 dual-use risk 매트릭스**로 정밀화됐다는 의미이며, 한국·미국·유럽 PE가 일본 진출 시 **\"어떤 자산은 되고 어떤 자산은 안 되는지\"**를 사전에 매트릭스로 분류해야 한다는 새 표준이 자리잡았다. MBK 입장에서는 자체 AI 에이전트(통칭 Project Athena로 알려진 시스템)가 19일 피벗을 가능하게 했다는 점에서 **PE 본체 의사결정의 AI 자동화**가 차별적 운용 우위로 작동한 첫 실증 사례로 기록될 가능성. — 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "MBK",
    acquirerBg: "bg-slate-800",
    targetInitials: "Alt",
    targetBg: "bg-rose-700",
    acquirerName: "MBK Partners",
    targetName: "Makino (blocked) → Altemira Holdings Inc. (acquired)",
    dealTitle: "MBK's 19-Day Pivot — From Blocked Makino Bid to Altemira Acquisition Under Japan's FEFTA Watch",
    dealSize: "Makino ~¥274.8B (blocked) + Altemira ¥117.5B (¥130B incl. debt, ~₩1.1~1.2T)",
    dealSizeUSD: "Makino ~USD 1.78B (blocked) + Altemira ~USD 760M",
    evEbitda: "N/A (regulatory block + pivot)",
    closeDate: "May 11, 2026 (Altemira announcement)",
  },

  sources: [
    { id: 1,  text: "Nikkei Asia — Japan's Nidec withdraws hostile bid for milling machine maker (2025.05)", url: "https://asia.nikkei.com/Business/Business-deals/Japan-s-Nidec-withdraws-hostile-bid-for-milling-machine-maker" },
    { id: 2,  text: "Nikkei Asia — Asian private equity fund MBK to acquire Japanese aluminum components maker (2026.05)", url: "https://asia.nikkei.com/business/business-deals/asian-private-equity-fund-mbk-to-acquire-japanese-aluminum-components-maker" },
    { id: 3,  text: "Nippon.com — Asian Fund MBK to Acquire Japanese Aluminum Can Maker Altemira (2026.05.11)", url: "https://www.nippon.com/en/news/yjj2026051100964/" },
    { id: 4,  text: "Reuters via Investing.com — Carlyle in white knight talks with Makino, say sources (2025.04)", url: "https://www.investing.com/news/stock-market-news/carlyle-in-white-knight-talks-with-makino-3992169" },
    { id: 5,  text: "赤坂国際法律会計事務所 — MBK 마키노 공개매수, 18년 만의 외환법 중지권고 (2026.04)", url: "https://ailaw.co.kr/blog/gaitameho-makino-milling-cease-recommendation-2026/" },
    { id: 6,  text: "実業之日本フォーラム — 牧野フライス買収に「待った」改正外為法初の中止勧告 (2026.04)", url: "https://forum.j-n.co.jp/narrative/9345/" },
    { id: 7,  text: "日本経済新聞 — 改正外為法 安保理由の事後介入拡大 (2026.05)", url: "https://www.nikkei.com/article/DGKKZO96599660Q6A530C2EA4000/" },
    { id: 8,  text: "METI 安全保障貿易管理 공식", url: "https://www.meti.go.jp/policy/anpo/gaiyou.html" },
    { id: 9,  text: "Seoul Economic Daily EN — Japan Orders MBK to Halt Makino Acquisition on Security (2026.04.23)", url: "https://en.sedaily.com/international/2026/04/23/japan-orders-mbk-to-halt-makino-acquisition-on-security" },
    { id: 10, text: "서울경제 — 日, MBK에 마키노 인수 중단 권고 '방산 핵심 업종 지키기' (2026.04)", url: "https://www.sedaily.com/article/20036336" },
    { id: 11, text: "서울경제 — MBK, 日알루미늄 3위 아르테미라 1.3조엔에 인수 (2026.05)", url: "https://www.sedaily.com/article/20042768" },
    { id: 12, text: "파이낸셜뉴스 — 닛케이 'MBK, 日아르테미라 인수…외환법 사전 심사 승인' (2026.05.11)", url: "https://www.fnnews.com/news/202605111700005782" },
    { id: 13, text: "딜사이트 — MBK, 마키노 2조 빅딜 무산…일본 공략 변수 (2026.04)", url: "https://dealsite.co.kr/articles/160696/075033" },
    { id: 14, text: "Douglas Research Substack — MBK Partners Plans to Launch a Tender Offer for Makino Milling Machine (2025.06)", url: "https://douglasresearch.substack.com/p/mbk-partners-plans-to-launch-a-tender" },
    { id: 15, text: "CorpDev.org — Carlyle's White Knight Gambit in the Makino-Nidec Saga (2025.04)", url: "https://www.corpdev.org/2025/04/21/carlyles-white-knight-gambit-in-the-makino-nidec-takeover-saga-reshaping-japans-corporate-defense-playbook/" },
    { id: 16, text: "CorpDev.org — Japan FEFTA Blocks MBK's $1.7B Bid for Makino (2026.04)", url: "https://www.corpdev.org/2026/04/23/japans-economic-security-shield-tokyo-blocks-1-7-billion-mbk-bid-for-makino/" },
    { id: 17, text: "더퍼블릭 — 김병주 회장, AI·일본시장·헬스케어·프라이빗 크레딧 4대 성장 동력 (MBK 자체 AI 월 2만건 운영 발언)", url: "https://www.thepublic.kr/news/articleView.html?idxno=284340" },
  ],

  seo: {
    title: "MBK 마키노 무산 → 19일 만에 아르테미라 — 일본 외환법 18년 만의 중지권고",
    description:
      "2025~2026년 13개월 사이 일본에서 펼쳐진 5중 구조 거래. Nidec 적대적 TOB · Makino 백기사 SOS · MBK 2조 원 우협 · 일본 정부 18년 만의 외환법(FEFTA) 중지권고 · 19일 만에 Altemira(알루미늄 캔) 우회 인수. 같은 정부·같은 운용사·정반대 판정의 의미와 MBK 전사 AI 에이전트(통칭 Project Athena) 역할까지.",
    keywords: [
      "MBK파트너스 마키노",
      "MBK Altemira",
      "MBK 아르테미라",
      "Makino Milling Machine",
      "Nidec 적대적 TOB",
      "일본 외환법 중지권고",
      "FEFTA",
      "18년 만의 중지권고",
      "Carlyle 백기사",
      "Apollo Altemira",
      "MBK 전사 AI",
      "Project Athena",
      "일본 PE 시장",
      "dual-use",
      "한국 PE 일본 진출",
    ],
  },

  concepts: [
    {
      term: "적대적 TOB (Hostile Tender Offer)",
      description: "이사회 동의 없이 주주에게 직접 주식을 공개매수 형태로 제안하는 인수 시도. 본 케이스에서는 Nidec이 Makino에 11,000엔·총 2,570억엔 적대적 TOB를 개시했으나 포이즌필 + 가처분 기각으로 철회.",
    },
    {
      term: "포이즌필 (Poison Pill, 신주예약권 무상할당)",
      description: "적대적 인수자가 일정 지분 이상 취득 시 기존 주주에게 신주를 저가로 발행해 인수자 지분을 희석하는 방어 장치. 일본에서는 신주예약권 무상할당 형태로 발동. Makino가 이 카드로 Nidec 방어 성공.",
    },
    {
      term: "백기사 (White Knight)",
      description: "적대적 인수에 맞서 경영진 우호적으로 등장하는 제3자 투자자. 본 케이스에서 MBK가 Carlyle과 동시 협상한 끝에 Makino 백기사 우협 지위 확보 (2025.06).",
    },
    {
      term: "외환법 (FEFTA, Foreign Exchange and Foreign Trade Act)",
      description: "일본의 외국인 직접투자 규제 법령. 2017년 개정으로 안보·전략 자산에 대한 사후 개입 권한 강화. 제27조 5항에 따라 일본 재무성·METI가 외국인 인수자에 **중지권고(中止勧告)** 발령 가능. 본 케이스가 9년 만의 첫 발동.",
    },
    {
      term: "중지권고 (中止勧告, Cease Recommendation)",
      description: "FEFTA 27조 5항 근거로 외국인 투자자에 발령되는 거래 중단 요청. 권고 단계에서는 법적 구속력이 약하나, 거부 시 **변경·중지 명령**으로 격상돼 강제력 발생. 2008년 TCI–J-Power 이후 18년 만의 사례가 본 케이스.",
    },
    {
      term: "Dual-Use 기술 (이중용도 기술)",
      description: "민간·군용 양쪽에 활용 가능한 기술. 공작기계(머시닝센터·EDM)는 자동차·항공·반도체·의료뿐 아니라 방위 산업 공급망에도 활용돼 dual-use risk 매트릭스에서 높은 등급으로 분류됨.",
    },
    {
      term: "핵심업종 사전심사 (Core Industry Pre-Screening)",
      description: "FEFTA가 정한 안보 핵심업종(방위·통신·에너지·반도체·배터리 등)에 외국인 투자 시 사전 심사 의무. Altemira는 리튬이온 배터리 파우치 생산으로 핵심업종 사전심사 대상이었으나 **\"안보 위협 낮음\"**으로 2개월 만에 승인.",
    },
    {
      term: "PE 전사 AI 에이전트",
      description: "PE 운용사가 거래 소싱·밸류에이션·포트폴리오 관리·실행 의사결정을 자동화·증폭하는 자체 AI 시스템. MBK는 통칭 Project Athena로 알려진 시스템이 월 2만 건+ 분석을 수행 중. 글로벌 메가 PE(Apollo·Blackstone·KKR)는 외부 AI 라이선싱 모델로, MBK는 자체 운영 모델로 차별화.",
    },
    {
      term: "19일 피벗",
      description: "본 케이스에서 MBK가 마키노 중지권고 수용 후 단 19일 만에 Altemira 1.2조 원 인수 발표한 것을 가리키는 표현. 통상 PE의 신규 타깃 발굴·실사·협상 사이클 대비 매우 빠른 속도로, 자체 AI 에이전트가 마키노 협상 중에도 일본 내 대체 타깃을 병렬 트래킹했을 가능성 시사.",
    },
  ],

  faq: [
    {
      q: "Makino 적대적 인수자가 일본 사모펀드였나요?",
      a: "아닙니다. Makino 적대적 인수자는 **Nidec(니덱)** — 일본 정밀 모터 세계 최대 제조사로 도쿄증시 1부 상장 대기업입니다. 사모펀드가 아니라 **상장 모터 제조 대기업의 상장 공작기계 제조사 적대적 인수 시도**였고, 일본에서 보기 드문 케이스. Nidec은 2025년 4월 4일 주당 11,000엔·총 2,570억엔 적대적 TOB를 개시했다가 포이즌필 + 도쿄지법 가처분 기각 후 5월 철회. 백기사 후보로 Carlyle과 MBK가 동시 협상한 끝에 MBK가 2025년 6월 우협 지위 확보했습니다.",
    },
    {
      q: "일본 정부의 외환법 중지권고가 왜 그렇게 큰 사건인가요?",
      a: "두 가지 이유. 첫째, **2017년 외환법 개정 이후 9년 만의 첫 발동**. FEFTA 27조 5항의 사후 개입 권한이 명문화돼 있었지만 한 번도 사용된 적이 없었음. 둘째, **2008년 TCI–J-Power 분쟁 이후 18년 만의 중지권고** — 글로벌 PE·헤지펀드가 일본 시장에 들어올 때 무시할 수 없는 시그널. 명분은 마키노 머시닝센터의 **dual-use 기술**(방위·항공·반도체·의료기기·군사 전용 우려)이고, 미국·중국·유럽은 모두 같은 거래를 승인했음에도 **일본만 단독으로 차단**한 점이 가장 큰 시사점입니다.",
    },
    {
      q: "MBK가 마키노 무산 후 19일 만에 Altemira 인수 발표한 게 어떻게 가능했나요?",
      a: "공식적으로 확인된 이유는 두 가지. ① Altemira는 Apollo가 2022년부터 보유해 매각 검토 단계에 있던 자산이라 MBK가 **기존 데이터·실사 일부 활용 가능**. ② MBK 자체 AI 에이전트(통칭 **Project Athena**로 알려진 시스템)가 김병주 회장 공개 발언 기준 **월 2만 건+ 분석·실행 지원** 수행 중이며, 마키노 협상 중에도 일본 내 대체 타깃을 **병렬 트래킹**했을 가능성이 시장에서 거론. 글로벌 메가 PE(Apollo·Blackstone·KKR)가 **외부 AI 라이선싱 모델**로 가는 것과 달리 MBK는 **자체 AI 운영 모델**을 택한 점에서 19일 피벗이 PE 본체 의사결정 AI 자동화의 첫 실증 사례로 기록될 가능성. 다만 \"Project Athena\" 공식 명칭은 1차 자료에서 직접 확인되지 않아 글에서는 \"통칭 Project Athena로 알려진\" 식으로 표기.",
    },
    {
      q: "같은 일본 정부가 19일 간격으로 마키노는 차단·아르테미라는 승인한 이유는?",
      a: "두 거래의 자산 성격이 **dual-use risk 매트릭스**에서 정반대 위치에 있어서. Makino: 공작기계·머시닝센터·EDM은 자동차·항공·반도체 + **방위 산업 공통 후방 인프라**로 분류돼 dual-use 등급이 최상위. 미국·중국·유럽은 통과시켰지만 일본 정부는 자국 방위 공급망 보호 차원에서 차단. Altemira: 알루미늄 캔 + 리튬이온 배터리 파우치 — 배터리 부품으로 **핵심업종(코어 인더스트리) 사전심사 대상**이었지만, 일본 정부는 \"안보 위협 낮음\"으로 판단해 **약 2개월 만에 승인**. 19일 간격의 두 정반대 판정은 **FEFTA 운용이 무차별 차단이 아닌 품목별 매트릭스로 정밀화됐다**는 시그널.",
    },
    {
      q: "이 거래가 한국·글로벌 PE 시장에 어떤 영향을 미치나요?",
      a: "세 가지 영향. 첫째, **일본 진출 시 dual-use 자산 사전 분류가 필수**가 됐음. 한국 PE(MBK·한앤컴퍼니·IMM PE 등)와 글로벌 PE(Carlyle·KKR·Bain Capital 등)는 일본 인수 검토 시 사전에 dual-use risk 매트릭스를 작성해야 함. 둘째, **일본 PE 운용사들의 상대적 우위 확보** — 외국계가 위축되는 동안 Advantage Partners·Japan Industrial Partners 등 일본 토종 PE가 dual-use 자산 인수에서 사실상 단독 경쟁자가 됨. 셋째, **전사 AI 에이전트의 차별적 운용 우위** — MBK의 19일 피벗이 입증한 자체 AI 운영 모델이 **신속 의사결정·병렬 타깃 트래킹** 측면에서 글로벌 PE의 외부 AI 라이선싱 모델보다 우위라는 평가가 시장에 자리잡는 중.",
    },
    {
      q: "Project Athena가 정확히 뭔가요? 공식 명칭인가요?",
      a: "[공식 명칭으로 1차 자료에서 직접 확인되지는 않습니다.] 김병주 MBK 회장이 공개 발언에서 **\"Every business is an AI business\"** 비전 하에 거래 소싱·밸류에이션·포트폴리오 관리에 AI 의사결정 시스템을 구축, 자체 AI 에이전트가 **월 2만 건+ 분석·실행 지원** 수행 중이라고 밝힌 게 확인된 사실. 시장에서는 이 시스템을 통칭 **Project Athena**로 부르지만 MBK가 공식적으로 발표한 코드네임이라는 1차 증거는 없음. 본 글에서는 \"통칭 Project Athena로 알려진 MBK 전사 AI 에이전트\" 식으로 안전하게 표기. 정확한 명칭·세부 기능은 추가 1차 자료 확보 시 업데이트 예정.",
    },
  ],
};

export default deal;
