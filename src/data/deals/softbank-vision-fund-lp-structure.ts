/**
 * 소프트뱅크 비전 펀드 I LP 자본 구조 — $98.6B, 2017년 첫 클로즈
 * $40B 우선 트랜치 7% 쿠폰 + $60B 보통 트랜치
 * 사상 처음으로 VC 메가펀드에 채권형 우선주를 끼워넣은 LP 구조.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "softbank-vision-fund-lp-structure",
  title: "비전 펀드 I, $40B 우선주에 7% 쿠폰을 박은 VC 사상 가장 이상한 자본 구조",
  subtitle:
    "$98.6B 메가펀드 · PIF $45B · Mubadala $15B · SoftBank $28B · 우선/보통 40/60 분할 · 12년 만기 · 우선주에만 연 7% 현금 쿠폰",
  category: "ma",
  industry: "Private Equity / Venture Capital / Fund Structure",
  country: "일본/사우디/UAE",
  announcedAt: "2016-10-14",
  closedAt: "2017-05-20",
  announcedDisplay: "2016년 10월 14일 (PIF·SoftBank 합작 발표)",
  closedDisplay: "2017년 5월 20일 (첫 클로즈 $93B 확정)",
  readingMinutes: 16,
  tags: [
    "SoftBank",
    "Vision Fund",
    "LP 구조",
    "우선주",
    "Preferred Equity",
    "7% 쿠폰",
    "PIF",
    "Mubadala",
    "Masayoshi Son",
    "Vision 2030",
    "Mega Fund",
    "VC",
  ],
  excerpt:
    "2017년 5월 20일, 소프트뱅크는 $93B 첫 클로즈를 발표하며 사상 최대 사모펀드 비전 펀드 I (SoftBank Vision Fund LP)을 정식 출범시켰다. 최종 펀드 사이즈는 $98.6B, 통상 $100B로 인용된다. 시장이 진짜로 놀란 부분은 사이즈가 아니라 [LP 자본 구조]였다. 총 약정의 약 40%인 $40B가 [12년 만기 동안 연 7% 현금 쿠폰을 지급하는 우선 트랜치]로, 나머지 약 60%인 $60B가 [업사이드를 가져가는 보통 트랜치]로 쪼개진 비대칭 캐피털 스택. PIF와 Mubadala는 우선+보통 혼합으로, SoftBank Group은 [보통 트랜치 단독]으로 First-Loss 포지션에 섰다. VC 메가펀드 역사상 처음으로 LP 자본 자체가 [고정수익부 채권]과 [에쿼티]로 트랜치화된 구조. WeWork·Uber 사이클이 무너진 2019년 이후 이 7% 쿠폰은 SoftBank Group의 발목을 잡았다.",

  acquirer: { initials: "LP", bg: "bg-emerald-700", label: "PIF · Mubadala · Apple · Foxconn · Qualcomm · Sharp · Ellison Trust (LPs)" },
  target: { initials: "SVF", bg: "bg-slate-800", label: "SoftBank Vision Fund LP (GP: SB Investment Advisers)" },

  background: [
    "2016년 9월, 마사요시 손은 도쿄에서 사우디아라비아 무함마드 빈 살만(MBS) 왕세자를 만나 약 45분간의 단독 회동을 가졌다. 시장에 새어 나온 설명은 단순했다, 손은 화이트보드 한 장에 [$100B 펀드를 5년에 걸쳐 글로벌 테크에 투자한다]는 그림을 그렸고, MBS는 그 자리에서 사우디 PIF의 $45B 약정을 구두로 합의했다고 한다. 사우디 비전 2030 (석유 경제 탈피·국부 다각화) 의 자본 배치 채널을 손이 단번에 확보한 셈. 한 달 뒤인 2016년 10월 14일, 양측은 합작 자금 운용 의향서를 공식 발표했고, 비전 펀드라는 이름이 처음 등장했다.",
    "[Apple·Foxconn·Sharp·Qualcomm·Larry Ellison 합류.] 2017년 5월 20일, 비전 펀드는 $93B 첫 클로즈를 발표했다. PIF $45B, SoftBank Group $28B, Mubadala $15B, 그리고 Apple·Foxconn·Sharp·Qualcomm·Larry Ellison 패밀리 트러스트가 합산 약 $5B 안팎을 약정했다. Apple과 Foxconn이 사모펀드 LP로 직접 들어간 것 자체가 이례적이었다, 두 회사 모두 자체 R&D·전략 투자 부서를 갖고 있고 외부 펀드 LP로 자본을 묶는 일이 거의 없는 사업체. 이 LP 라인업이 \"비전 펀드는 단순한 VC가 아니라 테크 공급망 전체와 묶인 전략 자본\"이라는 시그널을 만들어냈다.",
    "[우선/보통 40/60 트랜치 — VC 메가펀드 사상 처음 등장한 자본 구조.] 본 펀드의 진짜 혁신은 LP 자본 자체가 [우선 트랜치]와 [보통 트랜치]로 쪼개졌다는 점이다. 총 약정의 약 40% ($40B 안팎)가 [12년 펀드 만기 동안 연 7% 현금 쿠폰을 지급하는 우선주(Class B)] 로, 나머지 약 60% ($60B 안팎)가 [업사이드를 가져가는 보통주(Class A)]로 분류됐다. PIF는 약 $40B 우선 + $5B 보통의 혼합, Mubadala는 약 $9.3B 우선 + $5.7B 보통, SoftBank Group은 [보통 단독 $28B]로 First-Loss 포지션을 자처했다. 사실상 PIF·Mubadala에게 [채권형 신흥국 테크 펀드] 익스포저를 팔고, SoftBank가 그 위에 에쿼티 레이어를 깐 구조.",
    "[$5B/yr 배치 페이스로 Uber·WeWork·DoorDash에 쏟아부음.] 첫 클로즈 후 2017~2019년 사이 비전 펀드는 88개 포트폴리오에 약정의 거의 전액을 배치했다. Uber 약 $7.7B, WeWork 누적 $10B+, DoorDash, Slack, Coupang, Grab, Didi, OYO, OpenDoor, Compass, Wag, FlexPort, ZhongAn, Improbable, Brain Corp 등. \"5년 배치 계획\"이라고 발표했지만 실제로는 2년 만에 거의 다 썼다. 글로벌 후기 라운드 평가가 비전 펀드의 단독 가격결정력에 의해 한 단계 끌어올려진 시기였고, 시장에서는 \"비전 펀드 프리미엄\"이라는 용어까지 나왔다.",
    "[2019년 9월 WeWork IPO 실패, $40B 우선 쿠폰의 부메랑.] 2019년 9월 WeWork의 S-1 공시 후 거버넌스·수익성 문제가 폭로되며 IPO가 철회됐다. SoftBank가 약 $9.5B 추가 구제금융을 투입하며 80% 지분을 인수, 비전 펀드는 누적 약 $11B 안팎의 평가손을 인식했다. Uber·Slack·DoorDash IPO 후 주가도 공모가 아래로 떨어졌다. 그러나 SoftBank Group은 LP인 PIF·Mubadala에게 $40B 우선 트랜치의 [연 7% 쿠폰 ≈ 연 $2.8B 현금 유출] 을 펀드 성과와 무관하게 지급해야 했고, 이를 위해 SoftBank Group은 보유 Alibaba 주식 매각·Arm 일부 IPO 등을 통해 본사 자산을 매각하는 압박에 들어갔다.",
  ],

  dealSummary: {
    dealValueDisplay: "$98.6B (통상 $100B 인용)",
    acquirerName: "PIF $45B + SoftBank $28B + Mubadala $15B + Apple·Foxconn·Sharp·Qualcomm·Ellison Trust 합산 약 $5B + 기타",
    targetName: "SoftBank Vision Fund LP (GP: SB Investment Advisers (UK) Ltd, 12년 만기)",
    announcedDisplay: "2016년 10월 14일",
    closedDisplay: "2017년 5월 20일 (첫 클로즈 $93B), 2018년 풀 클로즈",
    country: "JP/SA/UAE",
  },

  executiveSummary: [
    "[사상 최대 사모펀드 출범] 2017년 5월 20일 첫 클로즈 $93B, 최종 약정 $98.6B. 통상 $100B 메가펀드로 인용. 한 펀드가 직전 글로벌 VC 약정 총합과 맞먹는 사이즈",
    "[VC 사상 처음 등장한 우선/보통 트랜치 LP 구조] 총 약정의 약 40% ($40B) 가 [12년 만기 동안 연 7% 현금 쿠폰을 지급하는 우선주(Class B)], 약 60% ($60B) 가 [업사이드를 가져가는 보통주(Class A)]. LP 자본 자체가 채권형과 에쿼티형으로 트랜치화됨",
    "[PIF가 단일 최대 LP] 사우디아라비아 PIF $45B (약 $40B 우선 + $5B 보통 추정). MBS-마사 도쿄 회동 한 자리에서 사실상 합의된 사우디 비전 2030 자본 배치 채널",
    "[SoftBank Group이 단독 보통 First-Loss 포지션] $28B 약정 [전액을 보통 트랜치]로 부담. 우선 트랜치 LP에게 7% 쿠폰을 지급할 의무를 본인이 짊어진 비대칭 구조의 정점",
    "[Apple·Foxconn·Sharp·Qualcomm·Ellison Trust 합산 ~$5B] 사모펀드 LP로 들어가지 않던 테크 사업체들이 직접 합류, 비전 펀드를 단순 VC가 아닌 [테크 공급망 전략 자본]으로 포지셔닝",
    "[2년 만에 $80B+ 배치] 5년 배치 계획이 무색하게 2017~2019년 사이 Uber·WeWork·DoorDash·Slack·Coupang·Grab·Didi 등 88개 포트폴리오에 거의 전액 투입",
    "[2019년 WeWork IPO 실패 + 누적 $11B 평가손] S-1 공시 후 거버넌스 폭로로 IPO 철회. SoftBank는 추가 $9.5B 구제로 80% 지분 인수. 비전 펀드 NAV 직격탄",
    "[7% 쿠폰의 부메랑] 펀드 성과와 무관하게 PIF·Mubadala에게 연 약 $2.8B 현금 쿠폰 지급 의무. SoftBank Group이 본사 자산 (Alibaba 지분·Arm IPO·T-Mobile 지분 등) 매각으로 쿠폰 자금 조달",
  ],

  industryOverview: {
    body: "2016~2017년 글로벌 VC 시장은 직전 5년간 우버·에어비앤비·디디·샤오미 등 후기 라운드 메가딜이 등장하면서 [한 라운드 사이즈가 기존 펀드 규모를 넘어서는] 현상이 본격화됐다. Sequoia·a16z·Accel 같은 정통 VC들은 한 펀드 $1~3B 규모로 운용 중이었고, $10B+ 라운드를 단독으로 끌고 갈 수 있는 LP는 없었다. 이 공백에 사우디 PIF·Abu Dhabi Mubadala·싱가포르 GIC·노르웨이 NBIM 같은 국부펀드가 직접 LP로 들어오면서 PE/VC 자본 풀의 무게중심이 [전통 미국 연기금·기부재단] 에서 [석유 달러·아시아 국부펀드] 로 이동하기 시작했다. 비전 펀드는 그 흐름의 정점이자 폭발이다.",
    metrics: [
      { label: "최종 약정 규모",                 value: "$98.6B",        sub: "통상 $100B 인용 / 사상 최대 사모펀드" },
      { label: "우선 트랜치 (Class B)",          value: "약 40%",         sub: "$40B 안팎 / 12년 연 7% 쿠폰" },
      { label: "보통 트랜치 (Class A)",          value: "약 60%",         sub: "$60B 안팎 / 업사이드만" },
      { label: "포트폴리오 수 (피크)",            value: "88개사",         sub: "$5B/yr 계획 vs 실제 2년 배치" },
    ],
    subBody:
      "비전 펀드의 등장은 글로벌 VC 후기 라운드 평가에 [비전 펀드 프리미엄]이라는 별도 가격 레이어를 만들었다, 비전 펀드가 단독으로 가격을 결정한 라운드들이 1~2년 뒤 IPO/세컨더리 가격을 만성적으로 상회하는 현상. 이 갭이 곧 2019~2022년 메가 VC 사이클 붕괴의 근본 원인 중 하나로 지목됐다. PIF·Mubadala의 LP 참여는 사우디 비전 2030·UAE Economic Vision 2030의 [석유 외 자본 배치 전략]의 핵심 구성요소가 됐고, Vision Fund 2 (2019년) 외부 모집 실패 후 두 국부펀드는 사실상 글로벌 VC 메가펀드 LP에서 발을 빼는 방향으로 선회.",
    players: [
      { name: "SoftBank Group",     role: "비전 펀드의 단독 GP 모회사 / $28B 보통 트랜치 약정" },
      { name: "SB Investment Advisers (UK)", role: "비전 펀드 운용 GP 엔티티, 영국 FCA 인가" },
      { name: "Saudi PIF",          role: "최대 LP $45B (우선 ≈ $40B + 보통 ≈ $5B 추정)" },
      { name: "Mubadala (Abu Dhabi)", role: "2위 LP $15B (우선 ≈ $9.3B + 보통 ≈ $5.7B 추정)" },
      { name: "Apple",              role: "전략 LP, 비전 펀드를 통해 후기 라운드 노출 확보" },
      { name: "Foxconn",            role: "전략 LP, EMS 공급망 + 테크 포트폴리오 노출" },
      { name: "Sharp",              role: "Foxconn 자회사로 합류" },
      { name: "Qualcomm",           role: "전략 LP, 5G·IoT 포트폴리오 노출" },
      { name: "Larry Ellison Trust", role: "개인 LP, Oracle 창업주 패밀리 트러스트" },
    ],
  },

  companyOverview: {
    targetName: "SoftBank Group Corp. (비전 펀드 GP 모회사)",
    body: "소프트뱅크 그룹은 1981년 마사요시 손이 후쿠오카에서 창업한 일본의 글로벌 투자·통신 지주회사다. 1990년대 Yahoo! Japan 합작·2000년 Alibaba 초기 투자 ($20M 투자 → 2014년 IPO 시점 $50B+ 평가) 로 글로벌 테크 LP/투자자로 자리잡았고, 2013년 Sprint 인수, 2016년 Arm Holdings 인수 ($31B) 를 거쳐 2017년 비전 펀드 출범으로 [세계 최대 테크 사모투자 플랫폼]을 자처하게 된다. 본 거래 시점 FY2016 (2016년 3월 결산) 매출 약 9조 1,585억 엔, 영업이익 약 1조 259억 엔, 자산총계 약 24조 4,580억 엔. Alibaba·Sprint·Arm을 핵심 자산으로 두고 비전 펀드 약정 $28B를 본사 대차대조표에서 직접 부담.",
    metrics: [
      { label: "설립",              value: "1981년 9월",     sub: "마사요시 손 창업" },
      { label: "본사",              value: "도쿄 미나토구",    sub: "TSE 코드 9984" },
      { label: "FY2016 매출",        value: "약 9.16조 엔",   sub: "Sprint·Yahoo! Japan·Arm 연결" },
      { label: "FY2016 영업이익",     value: "약 1.03조 엔",   sub: "OPM ~11%" },
      { label: "본사의 VF1 약정",      value: "$28B",          sub: "전액 보통 (First-Loss) 트랜치" },
    ],
    financials: [
      { year: "FY2014", revenue: 86703, cogs: 60800, grossProfit: 25903, sga: 17800, operatingIncome: 9180,  ebitda: 18500 },
      { year: "FY2015", revenue: 90683, cogs: 63600, grossProfit: 27083, sga: 17900, operatingIncome: 9994,  ebitda: 19600 },
      { year: "FY2016", revenue: 91585, cogs: 64200, grossProfit: 27385, sga: 17000, operatingIncome: 10259, ebitda: 20100 },
      { year: "FY2017", revenue: 91588, cogs: 64100, grossProfit: 27488, sga: 16800, operatingIncome: 13038, ebitda: 22400 },
      { year: "FY2018", revenue: 97157, cogs: 66800, grossProfit: 30357, sga: 17800, operatingIncome: 23539, ebitda: 32300 },
    ],
    financialsNote: "단위: 억 엔 (¥億) | J-GAAP/IFRS 연결 기준 | 출처: SoftBank Group 연차보고서. FY2018 영업이익 급등은 비전 펀드 평가이익 포함 (Uber·WeWork 등 마크업).",
    financialsCurrency: "¥",
    financialsUnit: "억",
  },

  dealStructure: {
    body: "비전 펀드 I은 영국령 케이맨 LP 비히클로 설정됐고, 운용 GP는 영국 FCA 인가 SB Investment Advisers (UK) Ltd. 펀드 만기 12년 (2017~2029, 옵션 연장 가능). 핵심 혁신은 LP 자본을 [Class A 보통 (~60%)] 과 [Class B 우선 (~40%)] 으로 트랜치화한 점. Class B는 12년 동안 연 7% 현금 쿠폰을 \"펀드 성과와 무관하게\" 받는 구조로, 사실상 펀드 NAV에 대한 채권 청구권. 폭락 시에도 GP·SoftBank Group이 본사 자산으로 쿠폰을 메우게 됨. Class A는 쿠폰 없이 캐리·업사이드만 가져가는 정통 LP 포지션. SoftBank Group은 자본 약정 $28B [전액을 Class A] 로 부담해 First-Loss 레이어를 자처. PIF·Mubadala는 우선+보통 혼합으로 다운사이드는 우선으로 보호하고 업사이드도 일부 잡는 구조.",
    preOwnership: {
      nodes: [
        { id: "sb_pre",  label: "SoftBank Group",   sub: "Arm·Alibaba·Sprint 보유",     type: "acquirer" },
        { id: "pif_pre", label: "Saudi PIF",        sub: "비전 2030 자본 채널 모색",      type: "fund" },
        { id: "mb_pre",  label: "Mubadala (UAE)",    sub: "Abu Dhabi 국부펀드",          type: "fund" },
        { id: "tc_pre",  label: "Apple/Foxconn/Sharp/Qualcomm/Ellison Trust", sub: "전략 LP 후보군", type: "entity" },
      ],
      edges: [],
    },
    postOwnership: {
      nodes: [
        { id: "svf",       label: "SoftBank Vision Fund LP",      sub: "$98.6B 케이맨 LP, 12년 만기",      type: "target" },
        { id: "gp",        label: "SB Investment Advisers (UK)",   sub: "GP, FCA 인가",                  type: "fund" },
        { id: "sb_post",   label: "SoftBank Group",                sub: "$28B 보통 (Class A)",            type: "acquirer" },
        { id: "pif_post",  label: "Saudi PIF",                     sub: "$45B (우선 ≈ $40B + 보통 ≈ $5B)",  type: "fund" },
        { id: "mb_post",   label: "Mubadala",                      sub: "$15B (우선 ≈ $9.3B + 보통 ≈ $5.7B)", type: "fund" },
        { id: "tc_post",   label: "Apple/Foxconn/Sharp/Qualcomm/Ellison", sub: "합산 약 $5B", type: "entity" },
      ],
      edges: [
        { from: "gp",       to: "svf", label: "GP 운용권 (1% mgmt + 20% carry)" },
        { from: "sb_post",  to: "svf", label: "$28B Class A (First-Loss)" },
        { from: "pif_post", to: "svf", label: "$45B (Class B ≈ $40B + Class A ≈ $5B)" },
        { from: "mb_post",  to: "svf", label: "$15B (Class B ≈ $9.3B + Class A ≈ $5.7B)" },
        { from: "tc_post",  to: "svf", label: "약 $5B 합산 (Class A 위주 추정)" },
      ],
    },
    keyTerms: [
      { label: "펀드 비히클",         value: "케이맨 LP, SoftBank Vision Fund L.P." },
      { label: "GP",                value: "SB Investment Advisers (UK) Ltd · FCA 인가" },
      { label: "최종 약정",          value: "$98.6B (통상 $100B 인용)",                            accent: true },
      { label: "Class A 보통 트랜치", value: "약 60% ($60B 안팎) · 캐리·업사이드만",                  accent: true },
      { label: "Class B 우선 트랜치", value: "약 40% ($40B 안팎) · 연 7% 현금 쿠폰 · 12년",          accent: true },
      { label: "펀드 만기",          value: "12년 (2017~2029, 옵션 연장)" },
      { label: "투자 기간",          value: "5년 명목, 실제로는 약 2년 만에 거의 전액 배치" },
      { label: "타깃 배치 페이스",     value: "$5B/yr 명목" },
      { label: "GP 수수료",          value: "1.0% 운용보수 + 20% 캐리" },
      { label: "타깃 그로스 IRR",     value: "약 20~25% (LP 마케팅 자료 기준)" },
      { label: "SoftBank Group 약정", value: "$28B 전액 Class A (First-Loss)" },
      { label: "PIF 약정",           value: "$45B (Class B ≈ $40B + Class A ≈ $5B 추정)" },
      { label: "Mubadala 약정",       value: "$15B (Class B ≈ $9.3B + Class A ≈ $5.7B 추정)" },
      { label: "기타 LP 합산",         value: "Apple + Foxconn + Sharp + Qualcomm + Ellison Trust ≈ $5B" },
      { label: "우선 쿠폰 연간 현금 유출", value: "약 $2.8B/yr (펀드 성과와 무관)" },
    ],
  },

  advisors: {
    body: "비전 펀드 I은 통상의 M&A가 아닌 거대 LP 펀드 형성이라 자문 구조가 일반 딜과 다르다. 펀드 LP 약정 협상에는 [LP 측 법무·세무 자문]과 [GP 측 펀드 비히클 설계 법무]가 각각 들어왔고, 재무 자문은 SoftBank 인하우스 (당시 CFO 사무국 + Arm 인수 자문진 일부) 가 주도. 일부 자문사는 공식 발표 없이 시장 관측 기반.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "LP 측 (PIF · Mubadala · 기타)",
        initials: "LP",
        bg: "bg-emerald-700",
        advisors: [
          {
            firm: "Allen & Overy",
            role: "법무 자문 (PIF 측 시장 관측)",
            roleType: "legal",
            note: "PIF의 펀드 LP 약정·우선주 구조 협상 자문 (정확한 매핑은 비공개)",
          },
          {
            firm: "Latham & Watkins",
            role: "법무 자문 (Mubadala 측 시장 관측)",
            roleType: "legal",
            note: "Mubadala의 LP 약정 구조 자문 (정확한 매핑은 비공개)",
          },
          {
            firm: "PIF 인하우스 전략·재무팀",
            role: "재무 자문 (인하우스)",
            roleType: "financial",
            note: "사우디 비전 2030 자본 배치 전략 내부 의사결정 주도",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "GP 측 (SoftBank Group · SB Investment Advisers)",
        initials: "SVF",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "Morrison & Foerster",
            role: "법무 자문 (GP 측 펀드 비히클)",
            roleType: "legal",
            note: "케이맨 LP·UK GP 비히클 설계, Arm 인수 자문 연속성",
          },
          {
            firm: "Goldman Sachs (인수 자문 협업)",
            role: "재무 자문 (일부 컨설팅)",
            roleType: "financial",
            note: "초기 LP 모집·우선/보통 분할 가격 자문 (비공식)",
          },
          {
            firm: "SoftBank Group CFO 사무국 / 인하우스",
            role: "재무 자문 (인하우스)",
            roleType: "financial",
            note: "$28B 자기 자본 약정 및 우선 쿠폰 부담 구조 인하우스 결정",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 매핑은 공개 자료 및 시장 관측 기반. 사모펀드 LP 협상 자문은 통상 비공개이며 일부 매핑은 미확정.",
  },

  valuation: {
    body: "본 거래에서 \"밸류에이션\"은 인수 가격이 아니라 [LP 약정 트랜치 구조의 가격 분배] 다. 핵심은 우선/보통 40/60 분할과 7% 쿠폰. PIF·Mubadala 입장에서 우선 트랜치는 [12년 7% 쿠폰 = 누적 약 88% 단순 누계 + 원금]이 보장된 채권형 익스포저. 보통 트랜치는 캐리·업사이드. SoftBank Group은 약정 전액을 보통으로 부담해 우선 쿠폰을 펀드 NAV·본사 자산으로 책임지는 First-Loss 구조. 사실상 SoftBank Group이 PIF·Mubadala에게 [$40B 규모 신흥국 테크 펀드 채권] 을 7% 쿠폰으로 발행한 거래에 가깝다.",
    rows: [
      { item: "최종 펀드 약정 규모",                        val: "$98.6B",          note: "통상 $100B 메가펀드로 인용",                accent: true },
      { item: "Class A 보통 트랜치 (업사이드)",              val: "약 $60B (60%)",    note: "캐리·업사이드만, 쿠폰 없음" },
      { item: "Class B 우선 트랜치 (12년 7% 쿠폰)",          val: "약 $40B (40%)",    note: "성과 무관 연 7% 현금 쿠폰",                  accent: true },
      { item: "PIF 약정",                                  val: "$45B",            note: "우선 ≈ $40B + 보통 ≈ $5B 추정" },
      { item: "Mubadala 약정",                              val: "$15B",            note: "우선 ≈ $9.3B + 보통 ≈ $5.7B 추정" },
      { item: "SoftBank Group 약정",                        val: "$28B",            note: "전액 보통 (First-Loss)",                    accent: true },
      { item: "Apple + Foxconn + Sharp + Qualcomm + Ellison", val: "약 $5B 합산",     note: "전략 LP, Class A 위주" },
      { item: "우선 쿠폰 연간 현금 유출",                    val: "약 $2.8B/yr",      note: "$40B × 7%, 펀드 NAV·SoftBank 본사 부담", accent: true },
      { item: "12년 누적 우선 쿠폰",                         val: "약 $33.6B",        note: "단순 누계, 펀드 만기 전 누적 의무" },
      { item: "타깃 그로스 IRR",                            val: "20~25%",          note: "LP 마케팅 자료 기준 명목" },
      { item: "실제 그로스 IRR (2025 기준 추정)",            val: "약 6~7%",         note: "PitchBook 등 외부 추정, 우선 쿠폰선 근처" },
    ],
    disclaimer: "주: 우선/보통 분할 수치 및 LP별 트랜치 내 분포는 SoftBank·LP 공식 공시가 제한적이라 시장 관측 + 일부 인터뷰·보도 기반. 정확한 단위는 펀드 결산 자료로만 확인 가능.",
  },

  rationale: {
    buyer: {
      title: "PIF·Mubadala가 우선 트랜치에 $40B+를 약정한 이유",
      initials: "LP",
      bg: "bg-emerald-700",
      points: [
        "[사우디 비전 2030의 자본 배치 채널] PIF는 석유 수익 의존 탈피를 위한 글로벌 비석유 자산 다각화가 국가 전략. $45B을 한 번에 글로벌 테크 노출로 배치하면서 동시에 우선 쿠폰으로 다운사이드 보호. 정통 LP 약정으로는 만들기 어려운 사이즈·구조",
        "[12년 연 7% 현금 쿠폰의 채권형 익스포저] $40B 우선 트랜치는 펀드 NAV가 무엇이든 [성과와 무관한 연 7% 현금 쿠폰]을 받는 구조. SoftBank Group이 본사 자산으로 책임지는 신용. 사실상 SoftBank가 발행한 $40B 신흥국 테크 펀드 본드",
        "[비전 펀드 프리미엄을 통한 글로벌 후기 라운드 가격 결정력] LP로 참여하면 비전 펀드가 단독 가격결정자로 들어가는 80개+ 후기 라운드에 자동 노출. 사우디·UAE 입장에서는 자국이 가질 수 없는 글로벌 테크 후기 라운드 접근권",
        "[Mubadala의 UAE Economic Vision 2030 정렬] Abu Dhabi의 다각화 전략과 정합. Mubadala는 우선+보통 혼합으로 약정해 일부 업사이드도 잡으면서 다운사이드는 우선 쿠폰으로 보호",
        "[Apple·Foxconn·Sharp·Qualcomm의 전략 LP 참여 효과] 사우디·UAE 입장에서 글로벌 테크 사업체들과 같은 LP 테이블에 앉는 거버넌스 효과. 단순 수익 거래를 넘는 전략적 시그널링",
      ],
    },
    seller: {
      title: "SoftBank Group이 7% 우선 쿠폰을 떠안으면서까지 $98.6B을 모은 이유",
      initials: "SVF",
      bg: "bg-slate-800",
      points: [
        "[글로벌 테크 사이클 단독 가격결정자 포지션] $100B 화력으로 후기 라운드 단독 가격결정자 자리에 올라서면, 정통 VC는 따라올 수 없는 가격에 우선권 확보 가능. 마사요시 손이 \"AI 혁명 30년 비전\" 으로 표현한 글로벌 테크 단일 LP 패권 전략",
        "[Alibaba 한 방의 성공을 펀드 단위로 시스템화] 2000년 $20M Alibaba 투자가 14년 만에 $50B+로 돌아온 손의 트랙레코드를 한 펀드로 시스템화. \"한 방\"을 80개로 만들겠다는 베팅",
        "[PIF의 비전 2030 자본을 단독으로 끌어옴] MBS와의 도쿄 회동 한 자리에서 $45B을 받아낸 손은 사실상 사우디·UAE 자본의 단독 매니저가 됨. 향후 후속 펀드 (VF2·VF3) 의 LP 베이스도 자동 확보될 거라 가정",
        "[Arm 인수 ($31B, 2016) 의 후속 자본화] Arm 인수 직후 본사 대차대조표 압박을 비전 펀드 출범으로 일부 해소. Arm을 비전 펀드 포트폴리오로 일부 이관 (약 25% 지분) 해 본사·펀드 간 자산 재배치까지 시도",
        "[우선 쿠폰 부담은 \"20%+ 그로스 IRR\" 가정 하 합리적 비용] 펀드가 명목 IRR 20~25%를 달성하면 7% 우선 쿠폰은 차감 후에도 보통 트랜치에 12~15%가 남는 계산. \"우리는 무조건 이긴다\" 가정 하 손이 자처한 First-Loss 포지션",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "9년이 지난 시점에서 비전 펀드 I의 평가는 명확하다. 펀드 자체는 [Coupang · DoorDash · Slack · Arm IPO · ByteDance 평가이익] 등으로 누적 그로스 게인 약 $22B을 만들어냈고 (PitchBook 2025 기준), 그로스 IRR은 약 6~7% 수준에 머물렀다. 문제는 이 IRR이 [우선 트랜치에 약정된 7% 쿠폰선] 과 거의 일치한다는 점, 즉 보통 트랜치 (SoftBank Group $28B + PIF·Mubadala 보통 부분 약 $10.7B) 의 실질 수익은 거의 0에 가깝다는 의미다. WeWork 누적 $11B+ 평가손, Wag·Brain Corp 폐업, OYO 가치 급락 등이 평가이익을 잠식했다. 2019년 출범한 Vision Fund 2는 PIF·Mubadala 외부 모집에 실패해 SoftBank 본사가 약 $56B을 직접 약정했고, 누적 평가손 $20B+로 시장에 알려졌다. 2024년 5월 회계연도 결산에서 비전 펀드 부문은 3년 만에 첫 연간 흑자 (¥7,243억) 를 기록했지만, 이는 주로 Arm IPO (2023.9) 후 주가 급등과 일부 포트폴리오 마크업 효과. 마사요시 손은 2025년 2월 컨퍼런스에서 \"PIF에 더 좋은 수익을 돌려드리지 못해 송구하다\" 라고 공개적으로 사과. 한편 손은 2024~2026년 OpenAI 대규모 투자·Arm 추가 활용·Stargate 데이터센터 합작을 통해 \"AI 혁명\" 으로 비전을 재포지셔닝 중. Vision Fund 3 외부 모집 계획은 사실상 보류 상태.",
    overallVerdict: "구조 혁신은 사상 처음 (성공), 그러나 보통 트랜치 LP·SoftBank Group 자기자본 수익률은 우선 쿠폰선 근처에서 정체 — 자본 구조 혁신 vs. 자산 선정 실패의 분리 평가가 필요",
    positives: [
      "[Coupang·DoorDash·Slack·Arm·ByteDance 등 일부 IPO·평가이익] 누적 그로스 게인 약 $22B 만들어냄. Coupang은 비전 펀드 1의 대표 성공 사례",
      "[VC 메가펀드 LP 자본 구조 혁신의 첫 사례] 우선/보통 40/60 트랜치 + 7% 쿠폰 모델은 이후 사모펀드·SPAC·메가 VC 모집에 구조적 참조점이 됨",
      "[2024 회계연도 첫 연간 흑자 + Arm IPO 효과] FY2024 (2024.3 결산) 에서 비전 펀드 부문 3년 만에 첫 흑자, Arm IPO 후 주가 회복이 핵심 동인",
      "[사우디·UAE 자본을 글로벌 테크에 처음으로 메가 단위 배치] 사우디 비전 2030 · UAE Economic Vision 2030의 글로벌 테크 익스포저 채널을 만들어낸 점은 거시적 의의",
    ],
    risks: [
      "[그로스 IRR ≈ 우선 쿠폰선 6~7%] 보통 트랜치 (SoftBank Group $28B + 일부 LP $10B+) 실질 수익률은 0에 가까움. 펀드 명목 IRR 20~25% 가정이 완전히 빗나감",
      "[WeWork $11B+ · Wag · Brain Corp · OYO 등 평가손] 일부 \"한 방\" 베팅이 펀드 전체 평가이익을 잠식. \"승자 80개 베팅\" 전략의 분산이 실제로는 안 됨",
      "[Vision Fund 2 외부 모집 실패] PIF·Mubadala가 VF2에 참여 거절. SoftBank 본사가 약 $56B 직접 약정, 누적 평가손 $20B+ 추가",
      "[$2.8B/yr 우선 쿠폰의 본사 부담] 펀드 NAV가 무엇이든 SoftBank Group이 본사 자산 (Alibaba 지분 · Arm 지분 · T-Mobile 지분 등) 매각으로 메워야 했음. Alibaba 지분은 2020~2024년 사이 대부분 청산됨",
      "[마사요시 손의 PIF 공개 사과 (2025.2)] CEO가 LP에게 공개적으로 \"수익을 돌려드리지 못해 송구하다\" 라고 발언한 사상 초유의 사례. 글로벌 LP 신뢰 회복까지 상당한 시간 필요",
      "[Vision Fund 3 계획 사실상 보류] 외부 모집이 어렵다는 시장 컨센서스 정착. SoftBank 본사 + Arm·OpenAI 직접 투자로 사업 모델 재편 중",
    ],
    editorNote:
      "비전 펀드 I 은 두 개의 분리된 이야기로 평가해야 한다. 첫째, [VC 메가펀드 LP 자본 구조 혁신] 으로 보면 사상 처음 우선/보통 트랜치 + 7% 쿠폰 모델을 검증한 거래. 둘째, [실제 운용 성과] 로 보면 그로스 IRR이 우선 쿠폰선에 갇혀 보통 트랜치 (SoftBank Group + 일부 LP 보통 부분) 가 거의 손해 본 거래. 자본 구조는 성공, 자산 선정은 실패. 마사요시 손이 2025년 사과한 대상은 후자다. 한편 2024년 이후 Arm IPO + OpenAI + Stargate 합작으로 \"AI 혁명\" 으로 비전이 재포지셔닝되면서, VF1의 7% 우선 쿠폰 부담은 사실상 본사 AI 베팅의 자금 압박으로 전환됐다. 본 거래는 \"단일 LP가 글로벌 테크 후기 라운드를 단독 가격결정한 짧은 황금기 (2017~2019) 와 그 비용을 12년 우선 쿠폰으로 갚는 긴 정산기 (2020~2029) \" 의 출발점으로 기록될 것이다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "LP",
    acquirerBg: "bg-emerald-700",
    targetInitials: "SVF",
    targetBg: "bg-slate-800",
    acquirerName: "PIF · Mubadala · Apple · Foxconn · Sharp · Qualcomm · Ellison Trust (LPs)",
    targetName: "SoftBank Vision Fund LP (GP: SB Investment Advisers UK)",
    dealTitle: "First Mega-VC Fund with Preferred/Common Tranched LP Capital Structure and 7% Coupon on $40B Preferred",
    dealSize: "$98.6B 약정",
    dealSizeUSD: "approx. USD 98.6B (commonly cited $100B)",
    evEbitda: "N/A (Fund Formation)",
    closeDate: "May 20, 2017 (first close $93B)",
  },

  sources: [
    { id: 1, text: "SoftBank Group, Vision Fund First Close Announcement ($93B, 2017.05.20)", url: "https://group.softbank/en/news/press/20170520" },
    { id: 2, text: "PIF Press Release, PIF, SoftBank Group and Mubadala joined by initial investors in Vision Fund including Apple, Foxconn, Qualcomm and Sharp (2017.05.20)", url: "https://www.pif.gov.sa/en/news-and-insights/press-releases/2017/pif-softbank-group-and-mubadala/" },
    { id: 3, text: "TechCrunch, SoftBank's massive Vision Fund raises $93 billion in its first close (2017.05.20)", url: "https://techcrunch.com/2017/05/20/softbank-vision-fund-first-close/" },
    { id: 4, text: "Wikipedia, SoftBank Vision Fund (펀드 구조 · LP · 성과 요약)", url: "https://en.wikipedia.org/wiki/SoftBank_Vision_Fund" },
    { id: 5, text: "Axios, Why SoftBank Vision Fund is one of the most complex private equity funds ever raised (2019.10.08)", url: "https://www.axios.com/2019/10/08/softbank-vision-fund-complicated-future" },
    { id: 6, text: "Fortune, SoftBank Writes Down $9.2 Billion Over WeWork (2019.11.06)", url: "https://fortune.com/2019/11/06/softbank-wework-uber-write-down/" },
    { id: 7, text: "PitchBook, SoftBank Vision Fund Performance Profile", url: "https://pitchbook.com/profiles/fund/15756-94F" },
    { id: 8, text: "CNBC, SoftBank's Vision Fund posts first annual gain in 3 years, up $4.6 billion (2024.05.13)", url: "https://www.cnbc.com/2024/05/13/softbank-earnings-q4-and-full-year-fy-2023.html" },
    { id: 9, text: "AGBI, SoftBank CEO admits failing to deliver returns to PIF (2025.02)", url: "https://www.agbi.com/tech/2025/02/softbank-ceo-admits-failing-to-deliver-returns-to-pif/" },
    { id: 10, text: "Global SWF, Sovereign Backers of Vision Fund Hit by Son's Strategic Failure", url: "https://globalswf.com/news/sovereign-backers-of-vision-fund-hit-by-son-s-strategic-failure" },
  ],

  seo: {
    title: "비전 펀드 I $98.6B LP 자본 구조, 7% 우선 쿠폰의 비밀",
    description:
      "2017년 5월 SoftBank Vision Fund I 첫 클로즈 $93B (최종 $98.6B). 사상 최대 사모펀드. 총 약정의 약 40% ($40B) 가 12년 연 7% 현금 쿠폰 우선 트랜치, 60%가 보통 트랜치로 분할된 VC 사상 처음 LP 자본 구조. PIF $45B · Mubadala $15B · SoftBank $28B · Apple·Foxconn·Sharp·Qualcomm·Ellison Trust 합산 $5B. 2019 WeWork 사이클 붕괴 후 우선 쿠폰이 SoftBank 본사 발목을 잡은 메가펀드 해부.",
    keywords: [
      "SoftBank Vision Fund",
      "비전 펀드 LP 구조",
      "우선주 7% 쿠폰",
      "PIF 비전 펀드",
      "Mubadala Vision Fund",
      "SoftBank Group",
      "마사요시 손",
      "Saudi Vision 2030",
      "VC 메가펀드",
      "Class A Class B 트랜치",
      "Vision Fund 2 실패",
      "Arm IPO SoftBank",
    ],
  },

  concepts: [
    {
      term: "PE 펀드 우선주 (Preferred Units in PE Fund)",
      description: "사모펀드 LP 약정 일부를 [성과 무관 정기 쿠폰]을 받는 우선 트랜치로 분류하는 구조. 비전 펀드 I 의 $40B Class B 트랜치가 연 7% 현금 쿠폰을 12년간 받는 사례. 정통 VC/PE는 모든 LP가 동등한 자본 약정 + 캐리 분배인데, 본 펀드는 사실상 우선 트랜치를 채권형 익스포저로 만든 점에서 혁신.",
    },
    {
      term: "쿠폰 부담 (Coupon Drag)",
      description: "펀드 NAV가 손실 상태여도 우선 트랜치에 약정된 쿠폰을 지급해야 해서 보통 트랜치 (또는 GP 모회사) 의 수익률을 끌어내리는 효과. 비전 펀드 I은 $40B × 7% = 연 $2.8B 의 쿠폰 부담이 SoftBank Group 본사 자산 (Alibaba 지분 등) 매각 압박으로 이어진 대표 사례.",
    },
    {
      term: "사우디 비전 2030 (Vision 2030)",
      description: "2016년 사우디아라비아 무함마드 빈 살만 왕세자가 발표한 국가 다각화 전략. 석유 수익 의존 탈피·민영화·여성 경제 참여·관광·기술 산업 육성이 핵심. PIF가 비전 펀드 I 에 $45B을 약정한 결정의 정책적 배경.",
    },
    {
      term: "GP/LP 구조 (General Partner / Limited Partner)",
      description: "사모펀드의 표준 법적 구조. GP는 펀드 운용 결정과 무한책임을 지고 (통상 1% 운용보수 + 20% 캐리) , LP는 자본 약정만 하고 유한책임. 비전 펀드는 GP가 SB Investment Advisers (UK) Ltd., LP가 PIF·Mubadala·SoftBank Group·Apple 등.",
    },
    {
      term: "NAV (Net Asset Value)",
      description: "펀드 보유 자산의 시장가에서 부채를 차감한 순자산가치. PE/VC 펀드의 분기별 NAV는 마크투마켓 기반으로 평가되며, 비전 펀드 I 은 2019년 WeWork 사이클 후 NAV가 급락했다가 2024년 Arm IPO 후 회복.",
    },
    {
      term: "마크투마켓 (Mark-to-Market)",
      description: "보유 자산을 시장가로 재평가하는 회계 원칙. VC 펀드는 비공개 후기 라운드 지분이 많아 \"비교 라운드 가격\" 또는 \"DCF\" 로 마크업/마크다운. 비전 펀드는 Uber·DoorDash 등 IPO 후 공모가가 펀드 마크보다 낮아 대규모 평가손 인식.",
    },
    {
      term: "Capital Call (자본 청구)",
      description: "GP가 LP에게 약정 자본을 단계적으로 청구하는 메커니즘. 비전 펀드는 명목상 5년에 걸쳐 콜할 계획이었으나 2017~2019년 사이 거의 전액 콜되어 PIF·Mubadala·SoftBank가 약정의 대부분을 단기간에 송금한 점이 이례적.",
    },
    {
      term: "Coupang — 비전 펀드 1 의 대표 성공 사례 / WeWork — 대표 실패 사례",
      description: "Coupang은 2018년 비전 펀드의 $2B 투자 → 2021년 NYSE 상장 시 비전 펀드 평가이익 약 $24B 안팎으로 펀드 최대 성공 사례. WeWork은 누적 투자 $10B+ → 2019년 IPO 철회 후 누적 평가손 $11B+, 2023년 파산 신청. 비전 펀드 1 의 양극단을 보여주는 두 베팅.",
    },
  ],

  faq: [
    {
      q: "비전 펀드 I 의 우선주 트랜치란 정확히 무엇인가요?",
      a: "총 LP 약정 $98.6B 중 약 40% ($40B 안팎) 가 [Class B 우선주] 로 분류돼 12년 펀드 만기 동안 [성과와 무관하게 연 7% 현금 쿠폰] 을 지급받는 구조입니다. 나머지 약 60% ($60B 안팎) 는 [Class A 보통주] 로 캐리·업사이드만 가져갑니다. PIF는 $45B 중 약 $40B를 우선으로, Mubadala는 $15B 중 약 $9.3B을 우선으로 약정한 것으로 알려졌고, SoftBank Group은 $28B 전액을 보통으로 부담했습니다. 우선 쿠폰의 신용 책임은 사실상 GP 모회사인 SoftBank Group 본사가 집니다. VC 메가펀드 LP 자본을 [채권형] 과 [에쿼티형] 으로 트랜치화한 사상 처음 사례입니다.",
    },
    {
      q: "왜 SoftBank Group은 First-Loss 보통 트랜치를 자처했나요?",
      a: "마사요시 손은 \"펀드가 명목 IRR 20~25%를 달성하면 7% 우선 쿠폰을 지급한 후에도 보통 트랜치에 12~15%가 남는다\" 는 계산 하에 First-Loss 포지션을 자처했습니다. 동시에 [$100B 화력으로 글로벌 테크 후기 라운드 단독 가격결정자가 된다] 는 전략적 포지셔닝이 본질. PIF·Mubadala에게 다운사이드 보호를 제공해서라도 사이즈를 확보해 사이클 위 단독 LP가 되려는 의도였습니다. 2000년 Alibaba $20M → $50B+ 회수의 \"한 방 성공\" 을 펀드 단위로 시스템화하려는 베팅이기도 했습니다.",
    },
    {
      q: "7% 우선 쿠폰은 어떻게 SoftBank Group 본사의 발목을 잡았나요?",
      a: "$40B × 7% = 연 약 $2.8B 의 현금 쿠폰 의무가 펀드 NAV·성과와 무관하게 발생합니다. 2019년 WeWork IPO 실패 + 누적 평가손 $11B+ 후에도 SoftBank Group은 PIF·Mubadala에게 연 $2.8B을 지급해야 했고, 펀드 자체에 분배 가능한 현금이 부족하면 본사 자산 (Alibaba 지분 · Arm 지분 · T-Mobile 지분 등) 매각으로 메웠습니다. 실제로 SoftBank Group은 2020~2024년 사이 Alibaba 지분 대부분을 청산했고, 2023년 Arm IPO 도 부분적으로 같은 자금 압박의 산물입니다.",
    },
    {
      q: "Vision Fund 2 는 왜 외부 LP 모집에 실패했나요?",
      a: "2019년 9월 WeWork IPO 철회 + 비전 펀드 1 누적 평가손 표면화 후 PIF·Mubadala는 VF2 참여를 거절했습니다. 7% 우선 쿠폰을 받았는데도 보통 트랜치 손실이 누적됐고, 마사 손의 단독 가격결정 모델에 대한 신뢰가 흔들린 게 핵심 원인. 결국 SoftBank Group이 본사 자기 자본으로 약 $56B을 직접 약정해 VF2를 출범시켰지만, 누적 평가손이 $20B+ 로 알려졌습니다. 2025년 2월 손은 \"PIF에 더 좋은 수익을 돌려드리지 못해 송구하다\" 고 공개 사과했습니다.",
    },
    {
      q: "Coupang은 어떻게 비전 펀드 1 의 대표 성공 사례가 됐나요?",
      a: "비전 펀드 1은 2015년 1차 ($1B), 2018년 2차 ($2B) 합산 약 $3B 을 Coupang에 투자해 약 35~40% 지분을 확보했습니다. 2021년 3월 Coupang의 NYSE 상장 시점 시가총액 약 $84B → 비전 펀드 평가이익은 약 $24B 안팎으로 추정. 비전 펀드 1 의 단일 베팅 중 가장 큰 성공 사례입니다. 한국 이커머스의 글로벌 IPO 사례이자 비전 펀드의 [지역·산업 분산 베팅이 통한 케이스] 로도 자주 인용됩니다. 다만 상장 이후 주가가 공모가 대비 큰 폭으로 조정되면서 실현이익은 평가이익보다 작게 형성됐습니다.",
    },
    {
      q: "2024~2026년 비전 펀드 부문은 어떻게 재포지셔닝되고 있나요?",
      a: "세 가지 흐름이 동시에 진행 중입니다. 첫째, [2023년 9월 Arm IPO 후 주가 급등] 으로 FY2024 (2024.3 결산) 비전 펀드 부문은 3년 만에 첫 연간 흑자 (¥7,243억) 를 기록했습니다. 둘째, [Vision Fund 3 외부 모집은 사실상 보류 상태], 마사 손은 외부 LP 모집보다 본사 자기 자본 + Arm·OpenAI 직접 투자로 전환하고 있습니다. 셋째, [Stargate 데이터센터 합작 · OpenAI 대규모 투자] 로 \"AI 혁명\" 으로 비전을 재포지셔닝, 2017년의 [후기 라운드 단독 가격결정자] 모델에서 [AI 인프라 + 대표 모델사 직접 베팅] 모델로 전환 중. VF1 의 7% 우선 쿠폰 부담은 사실상 본사 AI 베팅의 자금 압박으로 흡수됐습니다.",
    },
  ],
};

export default deal;
