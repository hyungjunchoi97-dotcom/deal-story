/**
 * Lenovo × IBM Personal Computing Division (ThinkPad) $1.75B 인수, 2004-12-08 발표 / 2005-05-01 클로징
 * 중국 기업 사상 첫 미국 Fortune 500 사업부 인수, CFIUS 완화 합의의 원형 템플릿이 된 거래.
 * 본 거래의 [Mitigation Agreement] 구조는 이후 Geely-Volvo·Shuanghui-Smithfield 등
 * 중국발 대형 크로스보더 M&A의 표준 플레이북이 됐다.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "lenovo-ibm-thinkpad",
  title: "Lenovo가 IBM PC 사업부(ThinkPad)를 인수한 방법, $17.5억과 CFIUS 완화의 원형",
  subtitle:
    "$650M 현금 + $600M Lenovo 주식(IBM 18.9%) + $500M 부채 인수 · 75일 CFIUS 조사 후 완화 합의 · 5년간 미국 시민 CEO · 중국 기업 사상 첫 Fortune 500 사업부 인수",
  category: "ma",
  industry: "Technology / Personal Computing / Cross-border M&A",
  country: "중국/미국",
  announcedAt: "2004-12-08",
  closedAt: "2005-05-01",
  announcedDisplay: "2004년 12월 8일 (인수 합의 발표)",
  closedDisplay: "2005년 5월 1일 (CFIUS 완화 합의 후 클로징)",
  readingMinutes: 16,
  tags: [
    "Lenovo",
    "IBM",
    "ThinkPad",
    "PC Division",
    "CFIUS",
    "Mitigation Agreement",
    "Cross-border M&A",
    "Chinese Outbound M&A",
    "Personal Computing",
    "Brand Acquisition",
    "Legend Holdings",
    "Chinese Academy of Sciences",
  ],
  excerpt:
    "2004년 12월 8일 IBM이 [Personal Computing Division (PCD)]을 중국 Lenovo Group에 $17.5억에 매각한다고 발표했다. 거래 대가는 [$650M 현금 + $600M Lenovo 주식(IBM이 합병 후 Lenovo의 18.9% 보유) + $500M 부채 인수]. 발표 직후 CFIUS가 30일 초기심사를 75일 본조사로 전환했고, Lenovo의 모회사 Legend Holdings가 [중국과학원]을 통해 부분 국영이라는 점이 주된 안보 쟁점이었다. 5개월간의 협상 끝에 양사는 사상 첫 [중국 인수자 대상 CFIUS 완화 합의(Mitigation Agreement)]를 체결했다, ① 미국 PC R&D를 노스캐롤라이나 Raleigh에 유지, ② 첫 5년간 미국 시민 CEO 의무화(IBM 출신 Stephen Ward Jr.가 초대 CEO), ③ 이사회 미국 시민 다수, ④ 안보 민감 계약 이전 금지, ⑤ IBM의 5년 브랜드 환매권. 2005년 5월 1일 거래 클로징. Lenovo는 중국 내수 1위에서 단숨에 글로벌 PC 3위가 됐고, 8년 뒤 HP를 제치고 세계 1위 PC 제조사가 됐다. 본 거래의 완화 합의 구조는 이후 Geely-Volvo·Shuanghui-Smithfield 등 중국발 크로스보더 M&A의 표준 템플릿이 됐다.",

  acquirer: { initials: "LNV", bg: "bg-red-600", label: "Lenovo Group Limited" },
  target: { initials: "IBM", bg: "bg-blue-800", label: "IBM Personal Computing Division (ThinkPad)" },

  background: [
    "IBM의 Personal Computing Division은 1981년 8월 발표된 [IBM PC (Model 5150)]에서 출발한, PC 산업 그 자체의 모태였다. 1981년 IBM PC가 발표되면서 [PC]라는 카테고리가 사실상 표준화됐고, Microsoft DOS·Intel x86 아키텍처가 그 위에 올라타 30년 [Wintel] 시대를 만들었다. 1992년에는 일본 야마토 연구소가 개발한 [ThinkPad 700C]가 출시돼 노트북 카테고리의 아이콘이 됐다. 검은색 직사각형, 빨간 트랙포인트, 7행 키보드. 그러나 1990년대 후반 Dell·Compaq·HP의 직판/공급사슬 효율 모델이 부상하면서 IBM의 PCD는 [브랜드 프리미엄이 통하지 않는 commodity 사업]으로 바뀌어 갔다.",
    "[2001년 이후 만성 적자.] IBM의 PCD는 2001년부터 2004년 상반기까지 약 [$965M 누적 영업적자]를 기록했다. 2003년 영업적자 $258M, 2004년 상반기 추가 $139M. 매출은 약 $10B대로 IBM 전사 매출의 약 10% 비중이었으나, 영업이익은 계속 마이너스. IBM 이사회는 1990년대 말 Lou Gerstner 시기부터 [\"PC는 IBM의 핵심이 아니다\"]는 전략 명제를 굳혀 왔고, Sam Palmisano 체제(2002~)는 이를 실행에 옮겼다. 2002년 [PwC Consulting 인수($3.5B) → IBM Global Services 강화], 2003년 [HDD 사업부 Hitachi에 매각($2.05B)]에 이어, PCD는 [다음 매각 후보]였다.",
    "[Lenovo의 등장과 중국 PC 챔피언.] Lenovo(중국명 联想, 본래 Legend)는 1984년 중국과학원 산하 연구원 11명이 베이징에서 창업한 PC 회사로, 1990년대 중국 내수 시장에서 압도적 1위(약 27% 점유율)를 차지하고 있었다. 모회사는 [Legend Holdings]였고, 중국과학원이 Legend Holdings의 약 65%(2004년 시점)를 보유한 [부분 국영] 구조. CEO Yang Yuanqing은 글로벌 진출을 그룹의 최우선 전략으로 설정했고, IBM PCD 매물 소식을 듣자 2003년 말부터 비공식 접촉을 시작했다. Lenovo의 논리는 단순했다, ① 글로벌 브랜드 즉시 확보, ② IBM의 1.2만 명 글로벌 임직원·유통망 흡수, ③ ThinkPad 브랜드 5년 무상 사용권(이후 영구), ④ 일본 야마토 R&D 라보 + 미국 Raleigh R&D 라보 인수.",
    "[2004년 12월 8일 합의, 그리고 CFIUS의 등장.] IBM과 Lenovo는 2004년 12월 8일(미국 동부 시간 12월 7일 저녁) 거래를 공식 발표했다. 거래 대가는 [$650M 현금 + $600M Lenovo 주식 + $500M 부채 인수 = 총 $17.5억]. IBM은 합병 후 Lenovo의 [18.9% 지분(처음에는 비의결 Class B)]을 받는 구조였다. 발표 직후 미국 의회 일부 의원들(특히 House Armed Services Committee)이 [중국 부분 국영 기업의 미국 핵심 IT 사업부 인수]에 대한 안보 우려를 제기했다. CFIUS는 12월 29일 공식 신고 접수 후 [30일 초기 심사 → 75일 본조사]로 전환했다, 이는 당시까지 외국 인수에 대한 CFIUS 75일 본조사 발동이 매우 드문 사례였다.",
    "[2005년 3월 완화 합의 → 5월 1일 클로징.] 5개월간 CFIUS와 Lenovo·IBM 자문단(White House, Wilmer Hale 등)의 협상 끝에 사상 첫 [중국 인수자 대상 완화 합의(Mitigation Agreement)]가 체결됐다. 핵심 조항은 ① 미국 PC R&D를 노스캐롤라이나 Raleigh에 유지(이전·축소 시 미국 정부 거부권), ② 첫 5년간 CEO는 미국 시민, ③ 이사회에 미국 시민 다수 포함, ④ 미국 정부의 안보 민감 계약(국방·정보기관)은 합병 후 회사로 이전 금지(IBM 본사로 환원), ⑤ IBM의 [5년 브랜드 환매권](특정 트리거 조건 발생 시), ⑥ 미국 공장·고용 유지 약속. 2005년 5월 1일(IBM 보도자료 기준), Lenovo는 거래를 공식 종결했다. 신임 CEO는 IBM PCD 출신 [Stephen Ward Jr.]가 맡았고, Yang Yuanqing은 회장으로 물러났다. Lenovo는 그날부터 글로벌 PC 매출 약 $130억의 세계 3위 PC 회사가 됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$1.75B ($650M 현금 + $600M Lenovo 주식 + $500M 부채 인수)",
    acquirerName: "Lenovo Group Limited (HKEX: 0992)",
    targetName: "IBM Personal Computing Division (PCD, ThinkPad·NetVista 사업부)",
    announcedDisplay: "2004년 12월 8일",
    closedDisplay: "2005년 5월 1일 (CFIUS 완화 합의 후)",
    country: "CN/US",
  },

  executiveSummary: [
    "[$17.5억 3-요소 거래 구조] $650M 현금 + $600M Lenovo 주식(IBM이 합병 후 Lenovo 18.9% 보유, 초기 비의결 Class B) + $500M 부채 인수. 순수 현금 부담은 $650M이고, IBM은 [Lenovo 주주]로 남는 [부분 자산 매각 + 부분 출자 전환] 구조",
    "[중국 인수자 사상 첫 CFIUS 75일 본조사] 2004.12.29 신고 → 30일 초기 심사 → 75일 본조사 전환. 핵심 쟁점은 모회사 Legend Holdings가 중국과학원(CAS) 통해 약 65% 부분 국영이라는 점, 그리고 IBM PCD가 미국 정부·국방 계약을 가진 점",
    "[사상 첫 중국 대상 Mitigation Agreement] 협상 결과 ① 미국 PC R&D를 Raleigh, NC 유지, ② 첫 5년간 미국 시민 CEO 의무(Stephen Ward Jr.가 초대), ③ 이사회 미국 시민 다수, ④ 국방·안보 민감 계약 이전 금지, ⑤ IBM의 5년 브랜드 환매권, ⑥ 미국 공장·고용 유지 약속",
    "[IBM의 출구 논리] PCD는 2001~2004H1 누적 영업적자 약 $965M(2003년 -$258M, 2004H1 -$139M). 매출 약 $10B로 IBM 전사의 10% 비중이나 commoditized 사업. IBM은 매각 대금 + 18.9% Lenovo 지분 가치 + Services/Software 전환에 집중",
    "[Lenovo의 진입 논리] 중국 내수 1위(약 27% 점유율)에서 단번에 글로벌 #3 PC 제조사로. 1.2만 명 IBM PCD 임직원·미국·일본 R&D 라보·유통망 흡수. ThinkPad 브랜드 5년 무상 사용권(이후 영구)",
    "[중국 크로스보더 M&A의 원형 템플릿] 본 거래의 완화 합의 구조(현지 R&D 유지 + 미국 시민 CEO + 본사 유지 + 정부 거부권)는 이후 Geely-Volvo($1.8B, 2010), Shuanghui-Smithfield($4.7B, 2013), HNA·Anbang·Wanda(2014~17) 등의 표준 플레이북으로 인용",
    "[2008→2013 글로벌 #1 진격] 2008년 Acer를 제치고 글로벌 #3, 2013년 HP를 제치고 글로벌 #1 PC 제조사 등극. 2014년 IBM x86 서버 사업($2.3B)과 Google Motorola Mobility($2.91B)를 추가 인수해 [Lenovo 템플릿]의 반복 확장",
    "[IBM의 디스인베스트먼트 산수] 2005년 $17.5억 수령 + 18.9% Lenovo 지분의 향후 매각·배당 누적 약 $2B+ → 총 약 $3~4B 회수. 적자 사업부를 정리하면서 출자전환으로 상승 옵션까지 챙긴 IBM 역대급 성공 매각",
  ],

  industryOverview: {
    body: "2000년대 초 글로벌 PC 산업은 [commoditization]과 [지역 분기]가 동시에 진행 중이었다. Dell이 1990년대 후반 [BTO(Built-to-Order) 직판 모델]로 재고·유통 비용을 압축하면서 PC 제조의 마진 구조가 영구히 압축됐고, IBM·Compaq(2002년 HP에 합병)·Toshiba 같은 통합제조 기반 [브랜드 프리미엄 모델]은 구조적 열위에 빠졌다. 동시에 중국·인도 등 신흥국에서는 자국 챔피언이 부상했다, 중국은 Lenovo(1990년대 후반 내수 1위), 인도는 HCL·Wipro. PC 산업의 분기점은 [통합 OEM vs 위탁생산 + 브랜드 분리], 그리고 [선진국 시장 정체 vs 신흥국 성장]이었다. IBM의 PCD 매각은 [선진국 적자 브랜드를 신흥국 자본에 매각]하는 사상 첫 대형 사례였고, 같은 흐름이 이후 가전·자동차·식품 등에서 반복된다.",
    metrics: [
      { label: "거래 규모",                value: "$1.75B",      sub: "현금 $650M + 주식 $600M + 부채 $500M" },
      { label: "IBM PCD 매출 (FY2003)",     value: "약 $10B",     sub: "IBM 전사 매출의 약 10%" },
      { label: "IBM PCD 영업적자 (2003)",   value: "-$258M",      sub: "2001~2004H1 누적 -$965M" },
      { label: "Lenovo 중국 내수 점유율",   value: "약 27%",      sub: "2004년 기준 중국 PC 시장 #1" },
    ],
    subBody:
      "2000년대 중반 글로벌 PC 산업의 [Big 5]는 Dell, HP-Compaq, IBM, Acer, Lenovo. Dell·HP가 직판·소매 양 채널에서 압도했고, IBM은 ThinkPad 브랜드 프리미엄으로 기업 시장만 방어하는 구도였다. 이 거래는 [통합제조 기반 브랜드의 정통 강자가 신흥국 자본에 사업부를 통째로 매각하는] 사상 첫 대형 사례로, 이후 PC 산업 외 가전(Haier-GE Appliances 2016), 자동차(Geely-Volvo 2010), 식품(Shuanghui-Smithfield 2013) 등으로 패턴이 확산됐다.",
    players: [
      { name: "Lenovo Group Limited",        role: "인수자, 홍콩증권거래소 상장(0992.HK), 중국 PC 내수 1위" },
      { name: "Legend Holdings",             role: "Lenovo 모회사. 중국과학원(CAS)이 약 65% 보유한 부분 국영 지주회사" },
      { name: "중국과학원 (CAS)",            role: "Legend Holdings의 최대주주. CFIUS 본조사의 핵심 안보 쟁점" },
      { name: "IBM Corporation",             role: "매각자, ThinkPad·NetVista·xSeries PCD 사업부 매각" },
      { name: "IBM Personal Computing Division", role: "매각 대상, FY2003 매출 약 $10B / 영업적자 -$258M / 1.2만 명" },
      { name: "Stephen Ward Jr.",            role: "IBM PCD 출신 신임 CEO, CFIUS 완화 합의에 따른 미국 시민 CEO 요건 충족" },
      { name: "Yang Yuanqing (杨元庆)",       role: "Lenovo 회장으로 전환, 2009년 다시 CEO 복귀해 글로벌 #1 진격 진두지휘" },
      { name: "Dell·HP",                     role: "글로벌 PC #1·#2, 본 거래로 #3 신규 진입자(Lenovo) 출현" },
    ],
  },

  companyOverview: {
    targetName: "IBM Personal Computing Division (PCD)",
    body: "IBM PCD는 1981년 IBM PC (Model 5150) 출시 이후 PC 산업 자체를 정의해 온 사업부였다. 1992년 일본 야마토 연구소의 [ThinkPad 700C] 출시로 노트북 카테고리 아이콘 브랜드를 확보했고, 1990년대 전성기에는 글로벌 PC 점유율 약 7~10%, 매출 약 $12~13B 규모였다. 그러나 1998년 이후 Dell의 직판 모델과 Compaq-HP 합병(2002)으로 인한 가격 압박, OS·CPU의 Wintel 표준화로 인한 차별화 약화로 영업이익이 계속 마이너스로 전환됐다. 2001~2004H1 누적 영업적자 약 $965M, 매출은 $10B 수준 유지. 임직원 약 12,000명, 미국 노스캐롤라이나 Raleigh R&D 라보 + 일본 야마토(大和) R&D 라보가 핵심 자산.",
    metrics: [
      { label: "사업부 설립",        value: "1981년",       sub: "IBM PC (Model 5150) 출시" },
      { label: "주력 브랜드",        value: "ThinkPad",     sub: "1992년 출시, 노트북 카테고리 아이콘" },
      { label: "FY2003 매출",       value: "약 $10B",       sub: "IBM 전사 매출의 약 10%" },
      { label: "임직원",            value: "약 12,000명",   sub: "미국·일본 R&D + 글로벌 영업/마케팅" },
    ],
    financials: [
      { year: "FY2000", revenue: 12500, cogs: 11200, grossProfit: 1300, sga: 1250, operatingIncome: 50,   ebitda: 250 },
      { year: "FY2001", revenue: 11000, cogs: 10100, grossProfit: 900,  sga: 1100, operatingIncome: -200, ebitda: -50 },
      { year: "FY2002", revenue: 10250, cogs: 9450,  grossProfit: 800,  sga: 1050, operatingIncome: -250, ebitda: -100 },
      { year: "FY2003", revenue: 10100, cogs: 9300,  grossProfit: 800,  sga: 1058, operatingIncome: -258, ebitda: -110 },
      { year: "FY2004", revenue: 9920,  cogs: 9180,  grossProfit: 740,  sga: 1020, operatingIncome: -280, ebitda: -130 },
    ],
    financialsNote: "단위: USD 백만 (US-GAAP, IBM 내부 세그먼트 추정). FY2001~FY2004H1 누적 영업적자 약 -$965M (IBM 8-K 공시 및 InfoWorld 보도). FY2004는 연간화 추정.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "본 거래는 [부분 자산 매각 + 부분 출자 전환] 구조다. IBM은 PCD 사업부 자산·부채·인력을 Lenovo에 이전하고, 대가로 [$650M 현금 + Lenovo 신주 18.9%(초기 비의결 Class B) + $500M 부채 인수]를 받는다. 핵심 차별점은 [$600M 상당 Lenovo 주식]을 IBM이 받았다는 점, 이를 통해 IBM은 매각 후에도 [Lenovo의 글로벌 PC 사업 상승 옵션]에 노출됐다. 거래는 2004년 12월 8일 발표, 2004년 12월 29일 CFIUS 신고, 75일 본조사 거쳐 2005년 5월 1일 클로징. 클로징과 동시에 사상 첫 중국 인수자 대상 [Mitigation Agreement]가 발효됐고, 이 합의는 미국 R&D 유지·미국 시민 CEO·이사회 구성·국방 계약 분리·5년 브랜드 환매권을 포함했다.",
    preOwnership: {
      nodes: [
        { id: "ibm_pre",       label: "IBM Corporation",                sub: "NYSE: IBM, PCD 100% 보유",        type: "entity" },
        { id: "pcd",           label: "IBM Personal Computing Division", sub: "ThinkPad·NetVista, 매출 ~$10B",  type: "target" },
        { id: "lenovo_pre",    label: "Lenovo Group Limited",            sub: "HKEX: 0992, 중국 PC 내수 #1",     type: "acquirer" },
        { id: "legend",        label: "Legend Holdings",                 sub: "Lenovo 모회사",                    type: "entity" },
        { id: "cas",           label: "중국과학원 (CAS)",                  sub: "Legend Holdings 약 65% 보유",    type: "entity" },
      ],
      edges: [
        { from: "ibm_pre",  to: "pcd",        label: "100% 사업부" },
        { from: "cas",      to: "legend",     label: "약 65%" },
        { from: "legend",   to: "lenovo_pre", label: "약 57%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ibm_post",      label: "IBM Corporation",        sub: "Lenovo 18.9% 보유(초기 비의결 Class B)", type: "entity" },
        { id: "legend_post",   label: "Legend Holdings",        sub: "Lenovo 모회사(CAS 약 65%)",              type: "entity" },
        { id: "lenovo_post",   label: "Lenovo Group Limited",   sub: "HKEX: 0992, 글로벌 PC #3 진입",          type: "acquirer" },
        { id: "pcd_post",      label: "Lenovo PC Business",     sub: "구 IBM PCD + 구 Lenovo PC 통합",         type: "target" },
        { id: "usgov",         label: "미국 정부 (CFIUS)",        sub: "Mitigation Agreement 모니터링권",          type: "entity" },
      ],
      edges: [
        { from: "ibm_post",    to: "lenovo_post", label: "18.9% Class B (비의결)" },
        { from: "legend_post", to: "lenovo_post", label: "약 46% (희석 후)" },
        { from: "lenovo_post", to: "pcd_post",    label: "100% 통합" },
        { from: "usgov",       to: "pcd_post",    label: "Mitigation Agreement 거부권" },
      ],
    },
    keyTerms: [
      { label: "거래 형식",                value: "사업부 자산·부채·인력 이전 + 출자 (Asset + Equity Swap)",  accent: true },
      { label: "총 거래 규모",              value: "$1.75B",                                              accent: true },
      { label: "현금 대가",                value: "$650M",                                              accent: true },
      { label: "Lenovo 주식 대가",          value: "$600M (Lenovo 18.9%, 초기 비의결 Class B)",            accent: true },
      { label: "Lenovo 인수 부채",           value: "$500M (assumed liabilities)" },
      { label: "발표일",                  value: "2004년 12월 8일 (미국 시간 12월 7일 저녁)" },
      { label: "CFIUS 신고일",             value: "2004년 12월 29일" },
      { label: "CFIUS 본조사 전환",         value: "30일 초기 심사 → 75일 본조사" },
      { label: "Mitigation Agreement 체결",  value: "2005년 3월 (CFIUS 승인 조건)",                         accent: true },
      { label: "클로징",                  value: "2005년 5월 1일 (IBM 공식 발표 기준)",                       accent: true },
      { label: "미국 R&D 유지",            value: "Raleigh, NC R&D 라보 (이전·축소 시 미국 정부 거부권)",      accent: true },
      { label: "미국 시민 CEO 요건",         value: "첫 5년간 의무 (Stephen Ward Jr.가 초대 CEO)",            accent: true },
      { label: "이사회 구성",              value: "미국 시민 다수 포함",                                    accent: true },
      { label: "국방·안보 계약",           value: "합병 후 회사 이전 금지, IBM 본사 환원" },
      { label: "IBM 브랜드 환매권",         value: "5년간 (특정 트리거 조건 발생 시)" },
      { label: "ThinkPad 브랜드 사용권",     value: "5년 무상, 이후 영구 사용 (재계약)" },
      { label: "고용 약정",                value: "미국 내 IBM PCD 직원 1.2만 명 승계" },
    ],
  },

  advisors: {
    body: "본 거래는 [중국 인수자 + 미국 매각자 + 사상 첫 중국 대상 CFIUS 본조사]가 결합된 복합 자문 거래였다. 자문 라인업은 ① 합병 자문(M&A), ② CFIUS·국가안보 자문, ③ 출자 구조(IBM의 Lenovo 지분 수령) 자문의 3축으로 구성됐다. IBM 측은 Goldman Sachs·JP Morgan 공동 재무 자문에 Cleary Gottlieb이 법무 자문, Lenovo 측은 McKinsey 전략 자문 + Merrill Lynch 재무 자문에 Sullivan & Cromwell + DLA Piper가 법무 자문. CFIUS 사이드 자문은 White & Case와 Wilmer Hale이 양사 절차 자문에 참여한 것으로 보도됐다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Lenovo (인수자)",
        initials: "LNV",
        bg: "bg-red-600",
        advisors: [
          { firm: "McKinsey & Company",          role: "전략 자문 (주관)",          roleType: "other",     note: "글로벌 확장 전략 + 통합 시나리오 설계 + 브랜드 운영 모델" },
          { firm: "Merrill Lynch & Co.",         role: "재무 자문 (주관)",          roleType: "financial", note: "거래 구조 설계 + 페어니스 오피니언 + Lenovo 신주 발행 자문" },
          { firm: "Sullivan & Cromwell LLP",     role: "법무 자문 (M&A 주관)",      roleType: "legal",     note: "미국 법무 주관 + IBM과의 합병 계약 + 출자 구조 자문" },
          { firm: "DLA Piper",                   role: "법무 자문",                roleType: "legal",     note: "글로벌 노동·세무·규제 자문 + IBM PCD 직원 승계 자문" },
          { firm: "White & Case LLP",            role: "법무 자문 (CFIUS)",         roleType: "legal",     note: "사상 첫 중국 대상 CFIUS 본조사 + Mitigation Agreement 협상" },
        ],
      },
      {
        side: "target",
        sideLabel: "IBM (매각자)",
        initials: "IBM",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Goldman Sachs & Co.",         role: "재무 자문",                roleType: "financial", note: "공동 재무 자문, 거래 가격 결정 + 18.9% Lenovo 지분 가치 평가" },
          { firm: "JPMorgan Chase",              role: "재무 자문",                roleType: "financial", note: "공동 재무 자문, PCD 카브아웃 + 부채 분리 자문" },
          { firm: "Cleary Gottlieb Steen & Hamilton", role: "법무 자문 (주관)",     roleType: "legal",     note: "IBM 측 M&A 주관 + 사업부 카브아웃 + Mitigation Agreement 협상" },
          { firm: "WilmerHale (Wilmer Cutler Pickering Hale and Dorr)", role: "법무 자문 (CFIUS)",   roleType: "legal",     note: "CFIUS 절차 + 국방·안보 계약 분리 + 정부 협상 자문" },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 IBM·Lenovo 공식 보도자료(2004.12.08, 2005.05.01) 및 The American Lawyer 등 법무 매체 보도 기반. CFIUS 자문은 비공개 영역이라 일부 추정.",
  },

  valuation: {
    body: "본 거래의 밸류에이션은 통상의 M&A 멀티플로는 설명되지 않는다. FY2003 매출 $10B 기준 거래 규모 $1.75B는 [Revenue Multiple 약 0.18x], EBITDA가 마이너스이므로 EV/EBITDA는 의미가 없다. 본질적으로 [적자 사업부의 distressed disposal] + [브랜드·임직원·유통망의 인수자 측 옵션 가치] 두 요소의 합산이다. IBM 입장에서 $1.75B는 [매년 -$250M 영업적자를 멈춘 가치(NPV 기준 약 -$1.5B 회피)] + [Services·Software 전환 자본 확보] + [Lenovo 18.9% 지분의 향후 상승 옵션]을 모두 합친 결과. Lenovo 입장에서는 [글로벌 #3 PC 진입 옵션 가격]을 매긴 것이며, 이후 8년 만에 글로벌 #1 등극으로 옵션이 실현됐다.",
    rows: [
      { item: "총 거래 규모",                  val: "$1.75B",           note: "현금 + 주식 + 부채 합산",                accent: true },
      { item: "현금 대가",                    val: "$650M",            note: "IBM에 즉시 지급",                       accent: true },
      { item: "Lenovo 주식 대가",              val: "$600M",            note: "Lenovo 18.9% (초기 비의결 Class B)",     accent: true },
      { item: "인수 부채",                    val: "$500M",            note: "Assumed liabilities" },
      { item: "FY2003 PCD 매출",              val: "약 $10.0B",        note: "IBM 전사 매출의 약 10% 비중" },
      { item: "Revenue Multiple",            val: "약 0.18x",         note: "$1.75B ÷ $10B, distressed 자산 수준",     accent: true },
      { item: "FY2003 PCD 영업이익",           val: "-$258M",           note: "2001~2004H1 누적 영업적자 -$965M" },
      { item: "EV/EBITDA",                  val: "N/A (적자)",        note: "EBITDA 마이너스로 의미 없음" },
      { item: "IBM 회피 적자 NPV (10년)",       val: "약 $1.5B+",        note: "연 -$250M 영업적자 × 10년, WACC 8%" },
      { item: "Lenovo 18.9% 지분 가치 (2005)",  val: "약 $600M",         note: "발행 시점 Lenovo 시총 약 $3.2B 기준" },
      { item: "Lenovo 18.9% 지분 누적 회수 (~2014)", val: "약 $2B+",      note: "배당 + 매각 차익, 점진적 처분",         accent: true },
      { item: "IBM 총 회수 추정 (~2014)",       val: "약 $3~4B",         note: "현금 + 부채 인수 + Lenovo 지분 누적",     accent: true },
    ],
    disclaimer: "주: 밸류에이션 멀티플은 거래 발표 시점 IBM 8-K(2004.12.08) + Lenovo 홍콩 상장 공시 + InfoWorld·Computerworld 보도 기반. IBM의 Lenovo 지분 누적 회수액은 IBM·Lenovo 연차보고서 + 시장 보도 종합 추정치.",
  },

  rationale: {
    buyer: {
      title: "Lenovo, 왜 $17.5억으로 IBM PCD를 인수했나",
      initials: "LNV",
      bg: "bg-red-600",
      points: [
        "[글로벌 브랜드 즉시 확보] 자체 브랜드로는 중국·동남아 외 시장 진입이 사실상 불가능. ThinkPad 브랜드 5년 무상 + 이후 영구 사용권으로 글로벌 기업 시장(특히 미국·일본·유럽) 즉시 접근권 확보",
        "[글로벌 유통·임직원 네트워크 흡수] IBM PCD의 1.2만 명 임직원, 미국 Raleigh + 일본 야마토 R&D 라보, 글로벌 영업·서비스 네트워크를 단번에 인수. 자체 구축 시 10년+ 소요 인프라",
        "[중국 #1에서 글로벌 #3로 도약] 중국 내수 PC 점유율 약 27%만으로는 글로벌 #5~6 수준. IBM PCD 인수로 단번에 글로벌 매출 약 $130억, 점유율 약 8%의 #3 PC 제조사 등극",
        "[중국 정부의 글로벌 챔피언 전략과 합치] 2000년대 초 중국 정부의 [Go Global (走出去) 전략]에 부합하는 첫 대형 사례. Legend Holdings의 중국과학원 모회사 구조가 외환·자본 통제 우회에 활용",
        "[CFIUS 완화 합의 수용 비용] 미국 시민 CEO·R&D 유지·국방 계약 분리 같은 운영 자율성 제약을 수용했지만, 이는 [글로벌 진출 + 브랜드 확보]의 대가로 합리적이라는 판단. 5년 후 본 합의 만료 시 운영 자율성 점진 회복",
      ],
    },
    seller: {
      title: "IBM, 왜 PCD를 Lenovo에 매각했나",
      initials: "IBM",
      bg: "bg-blue-800",
      points: [
        "[적자 사업부 정리] 2001~2004H1 누적 영업적자 약 $965M, 매년 $200~280M 적자 지속. 매각으로 [향후 10년 누적 영업적자 NPV 약 $1.5B+ 회피]",
        "[Services·Software로 전환] Lou Gerstner 시기부터 시작된 [PC는 IBM의 미래가 아니다] 전략 명제. 2002년 PwC Consulting 인수, 2003년 HDD 매각, 2005년 PCD 매각, 이후 2014년 x86 서버 매각까지 일관된 portfolio realignment",
        "[18.9% Lenovo 지분으로 상승 옵션 확보] 단순 현금 매각이 아니라 [부분 출자 전환]으로 매각 후 Lenovo의 글로벌 진격 시 IBM도 수혜. 2014년까지 누적 약 $2B+ 회수, 총 회수액 $3~4B로 매각 자체보다 더 크게 회수",
        "[브랜드 환매 옵션 보유] IBM은 5년간 ThinkPad 브랜드 환매권을 보유. 만약 Lenovo가 브랜드 가치를 훼손하거나 안보 합의를 위반하면 환매 가능, 이는 [매각 후에도 통제권 일부 유지]하는 안전장치",
        "[CFIUS 통과 자체가 매각 성공의 전제] IBM은 매각 가능 인수자가 Dell·HP 같은 미국 동종업체로는 반독점 우려, 일본·유럽 업체로는 가격이 안 맞는 상황. Lenovo만이 [정치적 비용을 감수하고도 최고가를 낼 수 있는 유일한 인수자]였음",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 클로징 후 21년 시점 평가. Lenovo는 본 거래로 글로벌 #3에 진입한 후 2008년 Acer를 제치고 #3, 2013년 HP를 제치고 글로벌 #1 PC 제조사로 등극했다. 2014년에는 IBM의 x86 서버 사업($2.3B)과 Google의 Motorola Mobility($2.91B)를 추가 인수해 [Lenovo 템플릿(브랜드 보존 + 현지 CEO + 본사 유지)]을 반복 확장했다. 2024년 기준 Lenovo 매출 약 $570억, 시가총액 약 $150억(홍콩 상장). ThinkPad 브랜드는 21년이 지난 지금도 노트북 카테고리 아이콘으로 유지되고 있다. IBM은 본 거래에서 [총 회수액 약 $3~4B]를 실현했고, Services·Software 전환에 성공했다(2024년 시가총액 약 $2,000억). CFIUS 완화 합의는 5년 만료(2010년) 후에도 사실상 자발적 준수가 이어졌고, 본 거래의 [Mitigation Agreement] 구조는 Geely-Volvo(2010), Shuanghui-Smithfield(2013), Haier-GE Appliances(2016) 등 이후 중국발 크로스보더 M&A의 표준 템플릿으로 인용된다. 다만 2017년 이후 중국 정부의 자본 유출 통제 + 미국 CFIUS 강화로 같은 구조의 신규 거래는 사실상 종결됐다.",
    overallVerdict: "양쪽 모두 승리한 사상 드문 win-win 거래. Lenovo는 글로벌 #1 PC 제조사로 등극, IBM은 적자 사업부 정리 + 출자 전환 옵션 + Services 전환 자본 확보. 중국 크로스보더 M&A의 원형 템플릿 탄생",
    positives: [
      "[Lenovo] 2013년 글로벌 #1 PC 제조사 등극, 2024년 매출 ~$570억으로 거래 당시 $130억 대비 약 4.4배 성장",
      "[ThinkPad 브랜드] 21년이 지난 2026년에도 노트북 카테고리 프리미엄 브랜드 위치 유지. 매년 신모델 출시 + 미국·일본 R&D 라보 유지",
      "[IBM] 총 회수액 약 $3~4B, 매각 자체보다 18.9% 지분 회수가 더 큰 [상승 옵션 활용 매각의 모범]",
      "[CFIUS 완화 합의] 5년 만료 후에도 자발적 준수 + 안보 사고 0건 → CFIUS 완화 모델의 신뢰성 입증",
      "[중국 크로스보더 M&A 템플릿] Geely-Volvo, Shuanghui-Smithfield, Haier-GE Appliances 등 후속 거래의 표준 플레이북 형성. 약 10년간 중국 글로벌 진출 황금기 견인",
    ],
    risks: [
      "[2017년 이후 중국 모델 종결] 중국 정부의 자본 유출 통제 + 미국 CFIUS 강화(FIRRMA 2018)로 본 거래 같은 [중국 자본 + 미국 전략 자산] 결합은 사실상 종결. 본 거래 모델의 마지막 황금기였음",
      "[Lenovo의 미국 정부 시장 진입 한계] 완화 합의의 [국방·안보 계약 분리] 조항이 영구화되면서 Lenovo는 미국 정부·국방·정보기관 시장에 사실상 진입 불가. 글로벌 #1이지만 미국 핵심 정부 시장은 영구 차단",
      "[Motorola·x86 서버 통합의 부진] 2014년 인수한 Motorola Mobility는 글로벌 스마트폰 시장에서 의미 있는 회복 못 했고, x86 서버는 글로벌 #4~5 수준 정체. [Lenovo 템플릿]이 PC 외 분야에서는 동일한 성공을 거두지 못함",
      "[중국과학원 모회사 구조의 정치 리스크 지속] Legend Holdings의 부분 국영 구조는 본 거래 이후에도 미국·유럽·인도 등에서 반복적인 안보 우려 제기 대상. 2020년대 미중 갈등 격화로 리스크 재부각",
      "[ThinkPad 브랜드 자체의 PC 산업 commoditization] PC 산업 자체가 스마트폰·태블릿에 잠식되면서 ThinkPad 매출 비중도 점진 축소. Lenovo의 다음 전환(AI·서버·서비스)에서 PCD 인수의 의미가 점점 희석",
    ],
    editorNote:
      "이 거래의 진짜 의미는 [Lenovo가 글로벌 #1이 됐다]가 아니라 [중국 자본이 미국 Fortune 500 사업부를 안보 합의 하에서도 안정적으로 운영할 수 있다]는 모델을 사상 처음 입증했다는 것이다. 21년이 지난 2026년 시점에서 보면 본 거래는 [중국 크로스보더 M&A 황금기의 시작점이자 끝]이기도 하다. 본 거래 이후 약 10년간 Geely-Volvo, Shuanghui-Smithfield, Haier-GE Appliances, HNA·Anbang·Wanda 같은 후속 거래가 [Lenovo 템플릿]을 반복 적용했지만, 2017년 이후 중국 자본 통제 + CFIUS 강화로 신규 거래는 사실상 종결됐다. 그러나 본 거래의 [Mitigation Agreement] 구조 자체는 우방국 FDI에도 적용 가능한 일반 도구로 진화했고, 2025년 Nippon Steel-US Steel의 [Golden Share]에까지 이어진다. 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "LNV",
    acquirerBg: "bg-red-600",
    targetInitials: "IBM",
    targetBg: "bg-blue-800",
    acquirerName: "Lenovo Group Limited",
    targetName: "IBM Personal Computing Division",
    dealTitle: "First Chinese Acquisition of a Fortune 500 Division under a CFIUS Mitigation Agreement",
    dealSize: "$1.75B total",
    dealSizeUSD: "$650M cash + $600M stock + $500M liabilities",
    evEbitda: "~0.18x revenue (distressed disposal, EBITDA negative)",
    closeDate: "May 1, 2005",
  },

  sources: [
    { id: 1, text: "IBM Form 8-K, Sale of Personal Computing Division to Lenovo (2004.12.08)", url: "https://www.sec.gov/Archives/edgar/data/0000051143/000110465904038729/a04-14476_18k.htm" },
    { id: 2, text: "Lenovo Press Release, Completion of Acquisition of IBM's Personal Computing Division (2005.05.01)", url: "https://news.lenovo.com/pressroom/press-releases/lenovo-completes-acquisition-ibms-personal-computing-division/" },
    { id: 3, text: "Wikipedia, Acquisition of the IBM PC business by Lenovo (Comprehensive Timeline)", url: "https://en.wikipedia.org/wiki/Acquisition_of_the_IBM_PC_business_by_Lenovo" },
    { id: 4, text: "Reuters, NBC News, China's Lenovo Acquires IBM Division (2005.05.01)", url: "https://www.nbcnews.com/id/wbna7695811" },
    { id: 5, text: "InfoWorld, IBM's PC Unit Lost Money from 2001 Onwards", url: "https://www.infoworld.com/article/2212068/ibm-s-pc-unit-lost-money-from-2001-onwards.html" },
    { id: 6, text: "Computerworld, IBM's PC Unit Lost Money from 2001 Onward (Detailed Financials)", url: "https://www.computerworld.com/article/1716576/ibm-s-pc-unit-lost-money-from-2001-onward.html" },
    { id: 7, text: "IBM Annual Report 2004 (Sam Palmisano on PCD Sale Rationale)", url: "https://www.ibm.com/investor/att/pdf/IBM_Annual_Report_2004.pdf" },
    { id: 8, text: "Stratrix, IBM Sells Its PC Division to Lenovo, Strategic Forks Analysis", url: "https://www.stratrix.com/strategic-forks/ibm-pc-lenovo" },
    { id: 9, text: "Harvard Business Review, Lenovo's Cross-border M&A Lessons (Post-mortem)", url: "https://hbr.org/2014/12/lenovos-three-step-process-for-making-acquisitions-pay-off" },
    { id: 10, text: "US Treasury CFIUS Annual Report on Section 721 Reviews (Historical Reference)", url: "https://home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius/cfius-reports-and-tables" },
  ],

  seo: {
    title: "Lenovo × IBM ThinkPad $1.75B 인수, CFIUS 완화 합의의 원형 분석",
    description:
      "2004년 12월 IBM이 PC 사업부(ThinkPad)를 Lenovo에 $17.5억에 매각. $650M 현금 + $600M Lenovo 주식(18.9%) + $500M 부채 인수 구조. 75일 CFIUS 본조사 끝에 사상 첫 중국 인수자 대상 Mitigation Agreement 체결. 중국 크로스보더 M&A 표준 템플릿 탄생.",
    keywords: [
      "Lenovo IBM 인수",
      "Lenovo ThinkPad",
      "IBM PC 사업부 매각",
      "CFIUS Mitigation Agreement",
      "중국 크로스보더 M&A",
      "Legend Holdings",
      "중국과학원",
      "Cross-border Acquisition",
      "Brand Acquisition",
      "Chinese Outbound M&A",
      "Geely Volvo 템플릿",
      "Shuanghui Smithfield",
      "Section 721 CFIUS",
    ],
  },

  concepts: [
    {
      term: "CFIUS Mitigation Agreement (완화 합의)",
      description: "CFIUS 심사에서 안보 우려가 확인된 거래에 대해 거래 차단 대신 채택되는 조치. 본 거래는 사상 첫 중국 인수자 대상 완화 합의로, 미국 R&D 유지·미국 시민 CEO·국방 계약 분리·브랜드 환매권 등 6대 조항이 포함됐다. 이후 중국·일본·중동 인수자 대상 표준 도구로 진화.",
    },
    {
      term: "Cross-border M&A Template (크로스보더 M&A 템플릿)",
      description: "본 거래에서 정립된 [브랜드 보존 + 현지 R&D 유지 + 현지 CEO + 본사 유지 + 정부 거부권] 5요소가 이후 Geely-Volvo(2010), Shuanghui-Smithfield(2013), Haier-GE Appliances(2016) 등 후속 중국발 크로스보더 M&A의 표준 플레이북으로 인용된다.",
    },
    {
      term: "Brand Preservation in Acquisition (인수 후 브랜드 보존)",
      description: "인수자가 피인수 회사의 기존 브랜드를 인수 후에도 독립적으로 유지·운영하는 전략. ThinkPad는 본 거래 후 21년이 지난 2026년에도 Lenovo 산하 독립 브랜드로 유지되고 있으며, 인수 후 브랜드 보존 모델의 가장 성공적인 사례로 인용된다.",
    },
    {
      term: "State-Affiliated Acquirer (부분 국영 인수자)",
      description: "Legend Holdings가 중국과학원(CAS)을 통해 약 65% 부분 국영이라는 점이 본 거래 CFIUS 본조사의 핵심 쟁점이었다. 부분 국영 인수자에 대한 안보 심사 기준은 본 거래에서 처음 정립됐고, 이후 중국 SOE·SWF의 미국 인수에 반복 적용됐다.",
    },
    {
      term: "Reverse Brain Drain (역방향 두뇌 유출, 미국 R&D 유지)",
      description: "전통적 기술 이전은 [선진국 → 신흥국]이나, 본 거래의 완화 합의는 [신흥국 인수자가 선진국 R&D를 유지·유출 금지]하는 역방향 구조. 미국 Raleigh R&D 라보 + 일본 야마토 R&D 라보가 인수 후에도 유지됨으로써 [기술 유출 방지]를 안보 합의로 새겼다.",
    },
    {
      term: "Chinese Tech Globalization (중국 IT 글로벌 진출)",
      description: "2000년대 초 중국 정부의 [Go Global (走出去) 전략]은 중국 기업의 해외 M&A를 통한 글로벌 챔피언 육성을 목표로 했다. 본 거래는 이 전략의 사상 첫 대형 성공 사례로, 이후 약 10년간 중국 글로벌 진출 황금기를 견인했다. 2017년 이후 자본 유출 통제로 황금기는 종결.",
    },
    {
      term: "Equity Consideration (출자 전환 대가 구조)",
      description: "본 거래는 단순 현금 매각이 아니라 [현금 $650M + 인수자 신주 $600M(18.9%) + 부채 인수 $500M]의 3-요소 구조. 매각자(IBM)가 인수자(Lenovo)의 주주가 되는 [부분 출자 전환]으로 매각 후에도 상승 옵션을 보유. 적자 사업부 매각의 모범 사례로 인용된다.",
    },
    {
      term: "Post-Acquisition Brand Buyback Right (인수 후 브랜드 환매권)",
      description: "본 거래에서 IBM은 5년간 ThinkPad 브랜드 환매권을 보유했다. 인수자가 브랜드 가치를 훼손하거나 안보 합의를 위반하면 매각자가 브랜드를 다시 가져갈 수 있는 안전장치. 인수 후에도 매각자가 일부 통제권을 유지하는 [hybrid divestiture]의 사상 첫 사례 중 하나.",
    },
  ],

  faq: [
    {
      q: "Lenovo는 결국 얼마에 IBM의 PC 사업부를 인수했나요?",
      a: "총 거래 규모는 $17.5억(약 $1.75B)이고, 3개 요소로 구성됐습니다. ① 현금 $650M, ② Lenovo 신주 $600M 상당(IBM이 합병 후 Lenovo의 18.9% 보유, 초기에는 비의결 Class B), ③ Lenovo가 인수한 부채 $500M. 발표는 2004년 12월 8일, 클로징은 2005년 5월 1일. 순수 현금 부담은 $650M이지만, 합병 후 회사의 지분 18.9%를 IBM이 보유하게 되는 [부분 자산 매각 + 부분 출자 전환] 구조였습니다.",
    },
    {
      q: "왜 CFIUS가 75일 본조사로 전환했나요?",
      a: "핵심 쟁점은 Lenovo의 모회사 Legend Holdings가 [중국과학원(Chinese Academy of Sciences, CAS)]을 통해 약 65% 부분 국영 구조라는 점이었습니다. 미국 의회 일부 의원들(특히 House Armed Services Committee)이 [중국 부분 국영 기업의 미국 핵심 IT 사업부 인수 = 기술 유출 + 국방 계약 노출 위험]을 제기했고, CFIUS는 2004년 12월 29일 신고 접수 후 30일 초기 심사를 75일 본조사로 전환했습니다. 당시까지 외국 인수에 대한 75일 본조사 발동은 매우 드문 사례였고, 중국 인수자 대상으로는 사실상 첫 본격 심사였습니다.",
    },
    {
      q: "사상 첫 중국 대상 CFIUS Mitigation Agreement에는 무엇이 포함됐나요?",
      a: "5개월간 협상 끝에 2005년 3월경 합의된 완화 조치는 6대 조항입니다. ① 미국 PC R&D를 노스캐롤라이나 Raleigh에 유지(이전·축소 시 미국 정부 거부권), ② 첫 5년간 CEO는 미국 시민 의무(IBM 출신 Stephen Ward Jr.가 초대 CEO 취임), ③ 이사회에 미국 시민 다수 포함, ④ 미국 정부의 국방·안보 민감 계약은 합병 후 회사로 이전 금지(IBM 본사로 환원), ⑤ IBM의 5년 브랜드 환매권(특정 트리거 조건 발생 시), ⑥ 미국 공장·고용 유지 약속. 이 구조가 이후 중국 크로스보더 M&A의 표준 템플릿이 됐습니다.",
    },
    {
      q: "IBM은 왜 PCD를 매각했나요?",
      a: "IBM PCD는 2001~2004년 상반기 누적 영업적자 약 $965M(2003년 -$258M, 2004H1 -$139M)을 기록한 만성 적자 사업부였습니다. 매출은 약 $10B로 IBM 전사 매출의 약 10% 비중이었지만 [브랜드 프리미엄이 commoditization으로 사라지는] 구조적 열위에 빠진 상태. Lou Gerstner 시기부터 시작된 [PC는 IBM의 미래가 아니다] 전략 명제를 Sam Palmisano 체제가 실행에 옮긴 결과로, 2002년 PwC Consulting 인수 → 2003년 HDD 매각 → 2005년 PCD 매각 → 2014년 x86 서버 매각의 일관된 portfolio realignment였습니다.",
    },
    {
      q: "이 거래가 [중국 크로스보더 M&A 템플릿]으로 불리는 이유는?",
      a: "본 거래의 완화 합의 구조(브랜드 보존 + 현지 R&D 유지 + 현지 CEO + 본사 유지 + 정부 거부권)가 이후 중국발 대형 크로스보더 M&A의 표준 플레이북이 됐기 때문입니다. 대표 사례, ① Geely-Volvo($1.8B, 2010), ② Shuanghui-Smithfield($4.7B, 2013), ③ Haier-GE Appliances($5.4B, 2016) 모두 본 거래의 6대 조항 중 [브랜드 보존 + 현지 본사 유지 + 현지 CEO]를 핵심으로 채택했습니다. 약 10년간 중국 글로벌 진출 황금기를 견인한 모델로, 2017년 이후 자본 유출 통제로 사실상 종결.",
    },
    {
      q: "21년이 지난 2026년 시점, 이 거래의 평가는?",
      a: "양쪽 모두 승리한 사상 드문 win-win 거래로 평가됩니다. ① [Lenovo] 2008년 글로벌 #3, 2013년 HP를 제치고 글로벌 #1 PC 제조사 등극. 2024년 매출 약 $570억으로 거래 당시 $130억 대비 약 4.4배 성장. ② [IBM] 매각 대금 $1.75B + Lenovo 18.9% 지분 누적 회수 약 $2B+ = 총 약 $3~4B 회수. 적자 사업부를 정리하면서 출자 전환으로 상승 옵션까지 챙긴 모범 매각. ③ [ThinkPad] 21년이 지난 2026년에도 노트북 카테고리 프리미엄 아이콘 유지. 다만 본 거래 같은 [중국 자본 + 미국 전략 자산] 결합은 2017년 이후 사실상 불가능한 상황.",
    },
  ],
};

export default deal;
