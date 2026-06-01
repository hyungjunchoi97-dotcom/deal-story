/**
 * Vivendi × Universal Music Group 카브아웃 + Euronext Amsterdam 상장
 * 음악 산업 사상 최대 IPO, 2021년 9월 21일
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "vivendi-umg-spin",
  title: "Vivendi가 UMG를 떼어내 €45B 음악 공룡으로 상장시킨 과정",
  subtitle:
    "Tencent 20% 선매각으로 가치 검증 · Ackman SPAC 좌초 → Pershing Square Holdings로 우회 · 2021년 9월 21일 Euronext Amsterdam 직상장 · 음악 산업 사상 최대 IPO",
  category: "restructuring",
  industry: "Media / Music / Streaming",
  country: "프랑스 / 네덜란드",
  announcedAt: "2021-03-24",
  closedAt: "2021-09-21",
  announcedDisplay: "2021년 3월 24일 (60% 분배안 공시)",
  closedDisplay: "2021년 9월 21일 (Euronext Amsterdam 직상장)",
  readingMinutes: 14,
  tags: [
    "Vivendi",
    "Universal Music Group",
    "UMG",
    "Euronext Amsterdam",
    "Carve-out IPO",
    "Direct Listing",
    "Spin-off",
    "Tencent",
    "Pershing Square",
    "Bill Ackman",
    "Bolloré",
    "Music IP",
    "Streaming",
  ],
  excerpt:
    "2021년 9월 21일 Universal Music Group이 Euronext Amsterdam에 직상장됐다. 참조가 €18.50 기준 €33.5B로 출발한 주가는 첫날 +36.5% 폭등해 종가 €25.10, 시가총액 €45.5B(약 USD 53B)에 도달했다. 음악 산업 사상 최대 [IPO]였고, MCA Records 1986년 상장(약 $300M) 이후 35년 만의 음악 메이저 단독 상장이었다. 거래 구조는 보기보다 복잡하다, Vivendi가 2019~2020년 Tencent 컨소시엄에 €30B EV로 20%를 선매각해 가치를 검증한 뒤, 2021년 3월 [기존 주주에게 UMG 지분 60% 현물 배분]을 선언했고, 같은 해 6월 Bill Ackman의 PSTH SPAC이 €35B EV로 10% 인수 계약을 맺었다가 SEC 우려로 8월 좌초, Ackman은 Pershing Square Holdings(거른지 상장 폐쇄형 펀드)로 vehicle을 갈아끼워 같은 지분을 인수했다. 분배일 이후 잔여 지분 구조는 자유유통 60% / Tencent 20% / Pershing Square 10% / Bolloré 18% 교차 보유로 마무리됐다.",

  acquirer: { initials: "VIV", bg: "bg-purple-700", label: "Vivendi SE (분사 주체, 파리)" },
  target: { initials: "UMG", bg: "bg-amber-600", label: "Universal Music Group N.V. (Euronext Amsterdam)" },

  background: [
    "Universal Music Group의 뿌리는 1934년 설립된 미국 Decca Records의 미국 사업부까지 거슬러 올라간다. 1962년 MCA가 Decca를 인수하면서 형태가 굳어졌고, 1995년 캐나다 음료 기업 Seagram이 MCA를 사들이며 사명을 Universal Studios로 바꿨다. 1998년 Seagram이 PolyGram을 $10.6B에 합병하면서 음악 부문이 글로벌 1위로 올라섰고, 2000년 Vivendi가 Seagram을 €30B에 인수하며 UMG가 프랑스 미디어 콘글로머리트 산하로 편입됐다. 이후 20여 년 동안 UMG는 Vivendi가 100% 보유한 비상장 자회사로 운영되며 Def Jam·Interscope·Capitol·Republic·Decca·Deutsche Grammophon 등 산하 레이블을 지휘했다.",
    "2010년대 중반까지 음악 산업은 CD 매출 붕괴와 디지털 다운로드 둔화로 침체기를 겪었다. 그러나 2015년 이후 Spotify·Apple Music·Amazon Music·YouTube Music 등 스트리밍 플랫폼이 정착하면서 글로벌 녹음음악 매출이 8년 연속 두 자릿수 성장했고, 음악 카탈로그가 [장기 현금흐름을 발생시키는 IP 자산]으로 재평가되기 시작했다. Vivendi의 지배주주 Bolloré 가문(Vincent Bolloré, Yannick Bolloré)은 이 재평가를 자본 거래로 현금화할 시점이라고 판단했고, 2018년부터 UMG 지분 일부 매각을 공식화했다.",
    "2019년 3월 Tencent가 주도하는 컨소시엄(Tencent, Tencent Music, GIC 등)이 UMG 10%를 €3B에 인수해 €30B 기업가치(EV)를 매겼다. 2020년 1월 Tencent 컨소시엄이 추가 10%를 €3B에 동일 EV 조건으로 매입해 합산 20%에 도달했다. 같은 EV가 두 번 유지되면서 €30B는 사실상 [시장이 검증한 UMG 사전 IPO 가격]이 됐다. 이 두 거래로 Vivendi는 [현금 €6B + 잠재적 상장 프리미엄]을 동시에 손에 쥐었고, 남은 80%를 어떻게 처리할지가 다음 과제가 됐다.",
    "2021년 3월 24일 Vivendi 이사회는 UMG 지분의 60%를 기존 Vivendi 주주에게 현물 배분(in-kind distribution)하고, UMG를 Euronext Amsterdam에 직상장(direct listing)한다는 안을 공시했다. NYSE가 아닌 Euronext Amsterdam을 택한 이유는 명확했다, ① 2020년 Brexit 이후 EU 자본시장 허브가 런던에서 암스테르담으로 옮겨가 있었고 ② NYSE는 SOX 비용·집단소송 리스크가 컸으며 ③ 네덜란드는 [지주회사 친화적 세제]를 갖고 있어 다국적 IP 보유 법인에 최적이었다. 6월 22일 Ackman의 SPAC인 Pershing Square Tontine Holdings(PSTH)가 €35B EV·약 $4B로 UMG 10%를 인수한다는 계약을 공시했지만, SEC가 [SPAC 규정상 분배 대상이 SPAC 주주의 위탁 자금이 맞는지] 우려를 제기해 7월 19일 거래가 좌초됐다. Ackman은 즉시 본인의 거른지 상장 폐쇄형 펀드인 [Pershing Square Holdings, Ltd.] 명의로 같은 10%·같은 EV 조건의 거래를 8월 10일 마감했다.",
    "2021년 9월 21일 UMG가 티커 [UMG]로 Euronext Amsterdam에 직상장됐다. Vivendi가 설정한 참조가는 주당 €18.50(시총 €33.5B)였으나, 첫날 시초가가 €24를 넘었고 종가는 €25.10으로 +36.5% 폭등, 시가총액 €45.5B(약 USD 53B)에 도달했다. 음악 산업 단독 기업 사상 최대 시총이었고, MCA Records 1986년 상장(약 $300M) 이후 35년 만의 음악 메이저 단독 상장이었다. 같은 날 Vivendi 주가도 분배 반영분을 제외하면 사실상 변동이 거의 없어, 시장은 분배안을 [순수한 가치 실현(value realization)] 거래로 받아들였다.",
  ],

  dealSummary: {
    dealValueDisplay: "첫날 시총 €45.5B (약 USD 53B) / 참조가 €33.5B",
    acquirerName: "Vivendi SE (분사 주체, Bolloré 가문 지배)",
    targetName: "Universal Music Group N.V. (Euronext Amsterdam: UMG)",
    announcedDisplay: "2021년 3월 24일",
    closedDisplay: "2021년 9월 21일 (직상장 첫날)",
    country: "프랑스 / 네덜란드",
  },

  executiveSummary: [
    "[음악 산업 사상 최대 IPO] 2021년 9월 21일 UMG가 Euronext Amsterdam에 직상장. 참조가 €18.50·시총 €33.5B로 시작해 첫날 종가 €25.10(+36.5%), 시총 €45.5B(약 USD 53B) 도달",
    "[3단계 사전 가치 검증] 2019년 Tencent 컨소시엄 10% 인수(€30B EV) → 2020년 Tencent 추가 10% 인수(동일 €30B EV) → 2021년 6월 Pershing PSTH가 10%를 €35B EV에 계약, 5개월 만에 EV가 €30B → €35B → €45.5B로 단계적 리레이팅",
    "[60% 현물 배분(in-kind distribution)] Vivendi가 UMG 지분의 60%를 기존 Vivendi 주주에게 현물로 무상 배분, Vivendi 본체는 잔여 지분 정리(약 10%)와 Bolloré 가문의 18% 교차 보유로 마무리",
    "[NYSE 대신 Euronext Amsterdam] Brexit 이후 EU 자본시장 허브 이동, SOX 면제, 네덜란드 지주회사 세제 우대, 다국적 IP 법인에 최적인 상장지 선택. 이후 유럽 대형 카브아웃의 표준 상장지가 됨",
    "[Bill Ackman SPAC 좌초 → Pershing Square Holdings로 우회] 2021년 6월 PSTH(SPAC) 10% 인수 계약, SEC 우려로 7월 19일 좌초, 같은 EV·같은 지분을 Pershing Square Holdings(거른지 상장 폐쇄형 펀드) 명의로 8월 재계약·인수. SPAC 역사의 분기점",
    "[직상장(direct listing) 방식] 신규 발행·언더라이팅 없이 기존 주식을 Euronext Amsterdam 거래소에 등록. Spotify(2018, NYSE), Slack(2019, NYSE) 직상장을 유럽에서 본떠 적용한 첫 메가 케이스",
    "[음악 IP의 기관 자산화] 상장 이후 BlackRock, Pimco, Saudi PIF 등 글로벌 기관이 진입. 음악 카탈로그가 [장기 현금흐름 자산]으로 공인됐고 Hipgnosis·Concord·Believe 등 후속 음악 IP 딜의 멀티플 기준점이 됨",
    "[Bolloré 가문의 가치 실현] 2000년 Seagram 인수가 €30B → 2021년 첫날 시총 €45.5B + 사전 매각 현금 약 €10B(Tencent €6B + Pershing $4B). 21년 보유 끝의 회수",
  ],

  industryOverview: {
    body: "2021년 글로벌 녹음음악 시장은 약 $26B 규모로, 2015년 저점($14.3B) 대비 약 1.8배 성장한 상태였다. 성장의 거의 전부가 스트리밍에서 나왔다, 2021년 기준 글로벌 매출의 약 65%가 유료 구독 + 광고 기반 스트리밍이었다. 빅3 메이저인 Universal Music Group(점유율 약 31%), Sony Music(약 22%), Warner Music Group(약 16%)이 합산 약 70%를 점유했고, 이 과점 구조와 [수십 년 카탈로그의 잔존 현금흐름] 덕분에 음악 IP가 채권 유사의 장기 현금흐름 자산으로 재평가되기 시작한 시점이었다. Spotify가 2018년 NYSE에 직상장하며 시총 $26B로 출발한 것도 같은 트렌드의 다른 단면이었다.",
    metrics: [
      { label: "글로벌 녹음음악 시장 (2021)", value: "약 $26B", sub: "+18.5% YoY, 7년 연속 성장" },
      { label: "스트리밍 비중 (2021)", value: "약 65%", sub: "유료 구독 + 광고 기반 합산" },
      { label: "UMG 글로벌 점유율", value: "약 31%", sub: "녹음음악 기준, 빅3 중 1위" },
      { label: "UMG 첫날 시총", value: "€45.5B (약 USD 53B)", sub: "2021.9.21 종가 €25.10 기준" },
    ],
    subBody:
      "UMG 상장이 의미하는 또 하나의 변화는 [음악 카탈로그의 자산 클래스화]였다. 상장 이후 BlackRock·Pimco·Saudi PIF·노르웨이 GPFG 등 글로벌 대형 기관이 UMG 지분을 늘렸고, 같은 시기 Hipgnosis Songs Fund(2018년 LSE 상장 → 2024년 Blackstone $1.6B 비공개화)·Concord·Believe·BMG·Primary Wave 등 음악 IP 전용 vehicle이 잇따라 자본을 조달하며 [음악 IP 펀드]라는 카테고리 자체가 자리잡았다.",
    players: [
      { name: "Universal Music Group (UMG)", role: "녹음음악 1위 메이저, 본 거래 분사 대상" },
      { name: "Vivendi SE", role: "프랑스 미디어 콘글로머리트, UMG 분사 주체. Bolloré 가문 지배" },
      { name: "Tencent Holdings", role: "전략적 앵커 투자자, 2019~2020년 총 20% 인수 (€30B EV)" },
      { name: "Pershing Square Holdings (Bill Ackman)", role: "10% 인수 (€35B EV, $4B), SPAC 좌초 후 거른지 펀드로 우회" },
      { name: "Bolloré Group", role: "Vivendi 지배주주, UMG 18% 교차 보유로 잔존 영향력 유지" },
      { name: "Sony Music Entertainment", role: "녹음음악 2위 메이저, UMG의 직접 경쟁자" },
      { name: "Warner Music Group", role: "녹음음악 3위 메이저, 2020년 NASDAQ IPO 선례 ($13B 시총)" },
    ],
  },

  companyOverview: {
    targetName: "Universal Music Group N.V.",
    body: "Universal Music Group은 녹음음악(Recorded Music)·음악출판(Music Publishing)·아티스트 서비스(Merchandising) 3대 사업을 갖춘 세계 1위 음악 메이저다. 산하에 Def Jam·Interscope·Capitol·Republic·Island·Polydor·Deutsche Grammophon·Decca·Verve 등 50여 개 레이블을 두고 있고, Taylor Swift·Drake·The Weeknd·Billie Eilish·BTS(한국 라이선스 일부)·Bad Bunny·Adele·U2 등 글로벌 톱 아티스트 라인업을 보유한다. 2020년 기준 글로벌 임직원 약 10,000명, 본사는 네덜란드 힐베르쉼(Hilversum), 운영 본사는 미국 산타모니카에 있다. CEO는 1990년부터 UMG를 이끈 [Lucian Grainge].",
    metrics: [
      { label: "설립", value: "1934년 (Decca Records 미국)", sub: "현 법인 2000년 Vivendi 산하 편입" },
      { label: "상장일", value: "2021.09.21", sub: "Euronext Amsterdam (UMG)" },
      { label: "FY2020 매출", value: "약 €7.43B", sub: "녹음음악 73% / 출판 13% / 기타 14%" },
      { label: "글로벌 점유율", value: "약 31%", sub: "녹음음악, 1위 메이저" },
      { label: "산하 레이블", value: "50+개", sub: "Def Jam·Interscope·Capitol·Republic·DG" },
      { label: "직원 수 (2020)", value: "약 10,000명", sub: "60+개 국가" },
    ],
    financials: [
      { year: "FY2017", revenue: 5673, cogs: 3460, grossProfit: 2213, sga: 1454, operatingIncome: 759, ebitda: 1037 },
      { year: "FY2018", revenue: 6023, cogs: 3650, grossProfit: 2373, sga: 1505, operatingIncome: 868, ebitda: 1184 },
      { year: "FY2019", revenue: 7159, cogs: 4310, grossProfit: 2849, sga: 1719, operatingIncome: 1130, ebitda: 1471 },
      { year: "FY2020", revenue: 7432, cogs: 4470, grossProfit: 2962, sga: 1759, operatingIncome: 1203, ebitda: 1577 },
      { year: "FY2021", revenue: 8504, cogs: 5050, grossProfit: 3454, sga: 1933, operatingIncome: 1521, ebitda: 1942 },
    ],
    financialsNote: "단위: EUR 백만(M). UMG 연결 기준 (IPO Prospectus 및 후속 연차보고서 기반). EBITDA는 보고 기준 Adjusted EBITDA.",
    financialsCurrency: "EUR",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "녹음음악 (Recorded Music)", pct: 73, color: "bg-amber-600", amt: "약 €5.42B" },
      { name: "음악출판 (Music Publishing)", pct: 13, color: "bg-purple-700", amt: "약 €0.97B" },
      { name: "아티스트 서비스·머천다이징", pct: 14, color: "bg-rose-500", amt: "약 €1.04B" },
    ],
  },

  restructuringOverview: {
    body: "UMG 분사는 [카브아웃 IPO + 60% 현물 배분 + 사전 앵커 매각 + 직상장]이라는 네 가지 구조 혁신이 결합된 이례적인 케이스다. 2019~2021년 사이에 단계별로 가치를 검증하고, 세금 효율적으로 60%를 주주에게 돌려주고, 잔여 지분은 전략적 앵커들에게 분산시키는 시퀀스는 이후 유럽 대형 카브아웃의 표준이 됐다.",
    trigger: "음악 IP의 자산 클래스화 + Bolloré 가문의 가치 실현 시점 도래",
    triggerDetail: "Vivendi는 2000년 Seagram 인수 이후 21년간 UMG를 100% 보유했지만, 2015년 이후 스트리밍 정착으로 음악 IP가 [장기 현금흐름 자산]으로 재평가되면서 Vivendi 콘글로머리트 내부에 묶어둘 명분이 약해졌다. Vivendi 본체에는 Canal+(유료방송), Havas(광고), Editis(출판), Gameloft(모바일 게임) 등이 남아 있었고, UMG의 성장 멀티플(EV/EBITDA 20배+)은 Vivendi 콘글로머리트 평균(8~10배)과 격차가 컸다. Bolloré 가문은 이 격차를 [현물 배분 + 사전 앵커 매각]으로 풀어 21년 보유의 가치를 실현하기로 결정했다.",
    method: "carve-out-ipo",
    methodLabel: "60% 현물 배분 + Euronext Amsterdam 직상장 + 사전 앵커 매각 30%",
    whyThisMethod: "단순 IPO(신주 발행 + 언더라이팅)는 ① Vivendi 주주가 신주 발행 희석 분만큼 손해를 봤을 것이고 ② IPO 단계에서 가격 발견(price discovery)이 불확실해 음악 IP 멀티플을 제대로 받기 어려웠을 것이다. 60% 현물 배분은 Vivendi 주주에게 UMG 지분을 [직접] 안겨주면서 콘글로머리트 디스카운트를 즉시 해소시킨다. 사전에 Tencent 20%·Pershing 10%를 매각해 [시장 검증 가격]을 두 번 확보한 점, 직상장으로 언더라이팅 수수료(통상 IPO 모금액의 5~7%)를 거의 0에 가깝게 만든 점이 이 구조의 핵심 효율성이다.",
    methodVsAlternatives: [
      {
        method: "Vivendi 본체에 100% 보유 유지",
        reason: "콘글로머리트 디스카운트가 지속돼 UMG의 성장 멀티플(20배+)이 Vivendi 평균(8~10배)에 묶여 주주가치 손실. Bolloré 가문도 21년 보유의 가치 실현 기회를 놓침.",
      },
      {
        method: "100% 현금 매각 (전략적 인수)",
        reason: "UMG의 EV가 €35~45B 수준으로 전략적 인수자(Sony·Apple·Amazon) 인수 여력을 넘었고, 반독점 심사가 거의 확실히 막혔을 것. 매각 차익에 대한 법인세도 수십억 유로 발생.",
      },
      {
        method: "전통적 IPO (신주 발행 + 언더라이팅)",
        reason: "Vivendi 주주의 지분 희석 + 언더라이팅 수수료 €1B+ 발생. Spotify(2018) 직상장 선례가 있는 만큼 직상장으로 우회 가능했음.",
      },
      {
        method: "NYSE 또는 LSE 상장",
        reason: "NYSE는 SOX 비용·집단소송 리스크가 컸고, LSE는 2020년 Brexit 이후 EU 패스포팅이 끊긴 상태였음. 네덜란드는 EU 자본시장 + 지주회사 세제 우대로 다국적 IP 법인에 최적.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "카브아웃 IPO (Carve-out IPO)",
        explanation: "모회사가 자회사 지분의 일부만을 상장시켜 가치 발견과 자본 조달을 동시에 수행하는 구조. 모회사는 지배력을 유지하면서 자회사의 멀티플 재평가 효과를 자본 시장에서 즉시 확인할 수 있다.",
        howApplied: "Vivendi는 2019~2020년 Tencent 20% 사전 매각으로 €30B EV를 두 번 검증한 뒤, 2021년 60% 현물 배분 + 10% Pershing 매각 + 잔여 10% Vivendi 보유의 단계별 구조로 풀었다.",
      },
      {
        concept: "현물 배분 (In-Kind Distribution)",
        explanation: "모회사가 자회사 주식을 [현금 대신] 모회사 주주에게 직접 배분하는 방식. 미국 세법 Section 355에 해당하는 유럽판이 프랑스 세법 [Article 115-2]이며, 일정 요건을 충족하면 분배 시점의 법인세·소득세가 이연된다.",
        howApplied: "Vivendi는 Article 115-2 적용을 사전 확보해 UMG 지분 60%를 Vivendi 주주 1주당 UMG 1주의 비율로 무상 배분. 프랑스 거주 주주는 분배 시점 과세가 이연되고 향후 UMG 매각 시점에만 양도소득세를 부담하게 됨.",
      },
      {
        concept: "직상장 (Direct Listing)",
        explanation: "신규 발행 + 언더라이팅 없이 기존 주식만을 거래소에 등록해 거래를 개시하는 상장 방식. 통상 IPO의 언더라이팅 수수료(모금액의 5~7%)와 lock-up 의무가 없다. Spotify(2018, NYSE), Slack(2019, NYSE) 사례가 선례.",
        howApplied: "UMG는 신주를 1주도 발행하지 않은 채 Euronext Amsterdam에 직상장. 언더라이팅 수수료 거의 0에 가까웠고, 60% 현물 배분 + Tencent·Pershing 사전 매각으로 이미 가격이 검증된 상태였기 때문에 직상장의 가격 발견 리스크도 낮았다.",
      },
      {
        concept: "전략적 앵커 투자자 (Strategic Anchor Investor)",
        explanation: "IPO 또는 분사 이전에 대형 전략 투자자에게 일부 지분을 매각해 ① 가격을 검증하고 ② 상장 후 매도 압력을 줄이는 구조. 통상 6~12개월 lock-up이 부과된다.",
        howApplied: "Tencent 컨소시엄(20%)과 Pershing Square Holdings(10%)가 각각 사전 앵커로 들어와 €30B → €35B의 가격을 검증. 직상장 첫날 시총 €45.5B 도달 후에도 매도 압력이 낮아 주가가 안정적으로 유지됐다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2019년 3월",
        action: "Tencent 컨소시엄에 UMG 10% 매각 (€3B, €30B EV)",
        detail: "Tencent·Tencent Music·GIC가 참여하는 컨소시엄이 UMG 10%를 €3B에 인수. €30B 기업가치가 시장 검증의 1차 기준점이 됨. Vivendi는 12개월 이내 추가 10% 옵션을 부여.",
        financialNote: "Vivendi 현금 €3B 확보, UMG EV €30B 첫 검증",
      },
      {
        phase: "Phase 2",
        date: "2020년 1월",
        action: "Tencent 옵션 행사 — 추가 10% 매각 (€3B, 동일 €30B EV)",
        detail: "Tencent가 12개월 옵션을 행사해 추가 10%를 동일 €30B EV로 인수, 합산 20%에 도달. €30B EV가 두 차례 유지되며 시장 검증 가격으로 굳어짐.",
        financialNote: "Vivendi 합산 현금 €6B 확보, UMG EV €30B 재확인",
      },
      {
        phase: "Phase 3",
        date: "2021년 3월 24일",
        action: "Vivendi 60% 현물 배분 + Euronext Amsterdam 직상장 공식 발표",
        detail: "Vivendi 이사회가 UMG 지분 60%를 기존 주주에게 현물 배분하고 UMG를 Euronext Amsterdam에 직상장한다는 계획 공시. 프랑스 세법 Article 115-2 적용 사전 합의 확보.",
        financialNote: "Vivendi 주가 발표 당일 +18%, 시총 €11B 증가",
      },
      {
        phase: "Phase 4",
        date: "2021년 6월 20일",
        action: "Pershing Square Tontine Holdings(SPAC) 10% 인수 계약 ($4B, €35B EV)",
        detail: "Bill Ackman의 SPAC PSTH가 UMG 10%를 약 $4B(€35B EV)에 인수하는 계약 공시. UMG EV가 €30B에서 €35B로 5개월 만에 +17% 리레이팅.",
        financialNote: "Vivendi 추가 현금 $4B 확보 (계약 단계)",
      },
      {
        phase: "Phase 5",
        date: "2021년 7월 19일",
        action: "PSTH SPAC 거래 좌초 — SEC 규정 우려",
        detail: "SEC가 PSTH의 UMG 10% 인수가 [SPAC 위탁 자금의 정상적 사용]에 해당하는지 우려를 제기, PSTH 이사회는 거래 철회를 만장일치 결정. SPAC 역사의 분기점.",
        financialNote: "PSTH 트러스트 $4B는 SPAC 주주에게 환불, Vivendi는 대체 매수자 모색",
      },
      {
        phase: "Phase 6",
        date: "2021년 8월 10일",
        action: "Pershing Square Holdings (거른지 펀드)로 vehicle 교체 — 10% 동일 조건 인수 완료",
        detail: "Ackman은 본인이 운용하는 거른지 상장 폐쇄형 펀드 [Pershing Square Holdings, Ltd.](LSE·Euronext Amsterdam 동시 상장)로 vehicle을 교체해 SPAC과 동일한 10% 지분·€35B EV·약 $4B 거래를 완료. SEC 규정 회피 + 동일 경제 효과 달성.",
        financialNote: "Vivendi 현금 $4B 최종 수령, PSH는 펀드 NAV의 약 27%를 UMG에 집중",
      },
      {
        phase: "Phase 7",
        date: "2021년 9월 21일",
        action: "UMG Euronext Amsterdam 직상장 (티커 UMG)",
        detail: "Vivendi가 설정한 참조가 €18.50(시총 €33.5B)로 거래 개시, 시초가 €24를 넘어 종가 €25.10(+36.5%), 시총 €45.5B(약 USD 53B) 도달. 음악 산업 사상 최대 IPO.",
        financialNote: "첫날 시총 €45.5B, 전 세계 음악 메이저 단독 상장 사상 최대",
      },
    ],
    stakeholders: [
      {
        name: "Vivendi 기존 주주",
        icon: "💼",
        impact: "positive",
        summary: "현물 배분으로 UMG 지분 60% 직접 수령",
        detail: "Vivendi 1주당 UMG 1주 비율의 현물 배분으로 콘글로머리트 디스카운트가 즉시 해소. Article 115-2 적용으로 분배 시점 과세 이연. 첫날 종가 기준 Vivendi 주주에게 약 €27B 가치 이전.",
        metric: "현물 배분 가치 약 €27B (UMG 시총 €45.5B × 60%)",
      },
      {
        name: "Bolloré 가문 (Vincent · Yannick Bolloré)",
        icon: "👔",
        impact: "positive",
        summary: "21년 보유의 가치 실현 + 18% 교차 보유로 잔존 영향력 유지",
        detail: "2000년 Vivendi의 Seagram 인수 이후 21년 보유한 UMG의 가치를 사전 매각 현금 €6B + Pershing $4B + 첫날 시총 €45.5B의 형태로 실현. Bolloré Group 직접 보유 + Vivendi 잔여 지분 합산 약 18%로 잔존 영향력 유지.",
        metric: "Bolloré 측 합산 약 18% 보유",
      },
      {
        name: "Tencent 컨소시엄",
        icon: "🌏",
        impact: "positive",
        summary: "€30B EV에 매입한 20% 지분이 €45.5B로 리레이팅 (+51%)",
        detail: "2019~2020년 두 차례 €30B EV로 매입한 20% 지분이 상장 첫날 €45.5B로 평가됐다. 미실현 차익 약 €3B+. Tencent의 글로벌 음악 시장 노출 확보 + Tencent Music과의 시너지 기반 마련.",
        metric: "보유 지분 가치 €30B 매입 → €45.5B 평가 (+51%)",
      },
      {
        name: "Pershing Square Holdings (Bill Ackman)",
        icon: "🎯",
        impact: "positive",
        summary: "SPAC 좌초 후 거른지 펀드로 우회, 즉각 +30% 미실현 차익",
        detail: "PSTH SPAC 좌초 → Pershing Square Holdings로 vehicle 교체. €35B EV·약 $4B에 인수한 10% 지분이 첫날 €45.5B로 평가돼 약 30%의 즉각적 미실현 차익. Ackman의 PSH 펀드 NAV의 약 27%를 UMG에 집중한 [Direct Acquisition Vehicle] 최대 성공 케이스.",
        metric: "$4B 투자 → 첫날 평가액 약 $5.3B (+30%)",
      },
      {
        name: "UMG 경영진 (Lucian Grainge CEO)",
        icon: "🎤",
        impact: "positive",
        summary: "Vivendi 콘글로머리트에서 독립, 음악 IP 전용 멀티플 획득",
        detail: "UMG는 Vivendi 콘글로머리트 평균 멀티플(8~10배)에서 벗어나 EV/EBITDA 23배+의 음악 IP 전용 멀티플을 받음. Lucian Grainge CEO에게 부여된 약 €100M 규모 스톡 보너스가 논란이 되기도 함.",
        metric: "EV/EBITDA 23배+ (Vivendi 본체의 약 2.5배)",
      },
      {
        name: "UMG 산하 아티스트 (Taylor Swift, Drake 등)",
        icon: "🎵",
        impact: "neutral",
        summary: "직접 영향은 제한적, 다만 IP 가치 재평가 인식 확산",
        detail: "아티스트 로열티 구조나 계약 조건이 즉시 변하지는 않았으나, 음악 카탈로그의 자산 가치가 €45.5B 단위로 시장에서 가시화되면서 이후 아티스트의 카탈로그 매각·재계약 협상에서 카탈로그 가치 인식이 변화.",
      },
      {
        name: "프랑스 정부 (세수)",
        icon: "🏛️",
        impact: "mixed",
        summary: "Article 115-2 적용으로 즉시 세수 발생은 없으나 향후 양도소득세 확보",
        detail: "현물 배분 시점의 분배세는 이연되지만, 향후 Vivendi 주주가 UMG 지분을 매각할 때 양도소득세가 발생. 다만 UMG 본사가 네덜란드에 있어 향후 법인세는 대부분 네덜란드로 귀속됨.",
      },
    ],
    beforeAfter: [
      {
        metric: "UMG 평가 가치 (EV)",
        before: "€30B (2019 Tencent 매각 기준)",
        after: "€45.5B (2021.9.21 첫날 시총)",
        change: "+51%",
        isPositive: true,
      },
      {
        metric: "Vivendi 콘글로머리트 시총",
        before: "약 €33B (2021년 초)",
        after: "약 €11B (분배 후 잔여 Vivendi)",
        change: "분배 시 약 €27B 가치 이전",
        isPositive: true,
      },
      {
        metric: "UMG 소유 구조",
        before: "Vivendi 80% / Tencent 20%",
        after: "자유유통 60% / Tencent 20% / Pershing 10% / Bolloré 18% (교차)",
        isPositive: true,
      },
      {
        metric: "UMG EV/EBITDA 멀티플",
        before: "약 18배 (사전 매각 기준)",
        after: "약 23배+ (직상장 첫날 기준)",
        change: "+5배 리레이팅",
        isPositive: true,
      },
      {
        metric: "Vivendi 주주가 받은 UMG 가치",
        before: "콘글로머리트 내부 묶임",
        after: "약 €27B 직접 배분 (60% × €45.5B)",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "발표 당일 Vivendi +18%",
      shortTermReturn: "상장 첫날 UMG +36.5% (€18.50 → €25.10)",
      longTermReturn: "1년 후 UMG +14%, 3년 후(2024) -11%",
      contextNote: "2021년 상장 후 2023년 중반까지 +50% 이상 상승했으나, 2024년 1월 Spotify 로열티 재협상 우려로 단일일 -23% 폭락 (Bandsplain 사태) 후 회복 중",
    },
  },

  dealStructure: {
    body: "UMG 분사는 [사전 앵커 매각 30% → 현물 배분 60% → 직상장 + 잔여 10% Vivendi 보유]의 4단 구조로 실행됐다. 모든 단계가 음악 IP의 가치를 단계적으로 검증하면서, 세금 효율성(Article 115-2)·자본시장 효율성(직상장)·전략 유연성(Tencent·Pershing 앵커)을 동시에 달성하는 설계였다.",
    preOwnership: {
      nodes: [
        { id: "bollore", label: "Bolloré Group", sub: "Vincent Bolloré 가문, Vivendi 지배주주 (약 27%)", type: "acquirer" },
        { id: "vivendi", label: "Vivendi SE", sub: "Euronext Paris 상장, UMG 80% 보유", type: "entity" },
        { id: "tencent_pre", label: "Tencent 컨소시엄", sub: "Tencent · Tencent Music · GIC, UMG 20% (2019~2020)", type: "fund" },
        { id: "umg_pre", label: "Universal Music Group", sub: "비상장 자회사 (네덜란드 법인)", type: "target" },
      ],
      edges: [
        { from: "bollore", to: "vivendi", label: "약 27% 지배" },
        { from: "vivendi", to: "umg_pre", label: "80%" },
        { from: "tencent_pre", to: "umg_pre", label: "20% (€30B EV)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "free_float", label: "자유유통 (Vivendi 주주)", sub: "현물 배분으로 UMG 60% 수령", type: "public" },
        { id: "tencent_post", label: "Tencent 컨소시엄", sub: "UMG 20% 유지", type: "fund" },
        { id: "pershing", label: "Pershing Square Holdings", sub: "Bill Ackman 거른지 펀드, UMG 10%", type: "fund" },
        { id: "bollore_post", label: "Bolloré Group + Vivendi 잔여", sub: "교차 보유 약 18%", type: "acquirer" },
        { id: "umg_post", label: "Universal Music Group N.V.", sub: "Euronext Amsterdam: UMG (€45.5B)", type: "target" },
      ],
      edges: [
        { from: "free_float", to: "umg_post", label: "60% (현물 배분)" },
        { from: "tencent_post", to: "umg_post", label: "20%" },
        { from: "pershing", to: "umg_post", label: "10% (€35B EV에 인수)" },
        { from: "bollore_post", to: "umg_post", label: "약 18% (교차 보유)" },
      ],
    },
    keyTerms: [
      { label: "분사 발표일", value: "2021년 3월 24일 (Vivendi 이사회 결의)" },
      { label: "직상장일", value: "2021년 9월 21일 (Euronext Amsterdam, 티커 UMG)", accent: true },
      { label: "참조가 (Reference Price)", value: "주당 €18.50 (시총 €33.5B)" },
      { label: "첫날 종가", value: "주당 €25.10 (+36.5%, 시총 €45.5B / 약 USD 53B)", accent: true },
      { label: "현물 배분 비율", value: "Vivendi 1주당 UMG 1주 (총 60% 배분)", accent: true },
      { label: "프랑스 세제 적용", value: "Article 115-2 면세 분배 (Section 355의 프랑스판)" },
      { label: "Tencent 사전 매각", value: "2019년 10% + 2020년 10% = 20% (€30B EV, €6B 합산)" },
      { label: "Pershing 인수 조건", value: "10% / 약 $4B / €35B EV (8월 10일 클로징)", accent: true },
      { label: "Pershing vehicle 변경", value: "PSTH SPAC (좌초) → Pershing Square Holdings (거른지 펀드)" },
      { label: "상장 방식", value: "직상장 (Direct Listing, 신주 발행 없음)" },
      { label: "Bolloré 잔여 보유", value: "Bolloré Group 직보유 + Vivendi 잔여 합산 약 18%" },
    ],
  },

  advisors: {
    body: "유럽 사상 최대급 카브아웃 + 직상장인 만큼 양측에 글로벌 톱티어 자문사가 다층 구조로 참여했다. Vivendi는 IPO 자문(Goldman Sachs·Lazard·Société Générale)과 상장 주관(Morgan Stanley·JP Morgan·BNP Paribas)을 분리했고, Pershing 측은 in-house + Sullivan & Cromwell로 단순화했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Vivendi 측 (분사 주체)",
        initials: "VIV",
        bg: "bg-purple-700",
        advisors: [
          { firm: "Goldman Sachs", role: "리드 재무 자문 (FA)", roleType: "financial", note: "분사 구조 설계 및 가치 평가 총괄" },
          { firm: "Lazard", role: "재무 자문 (FA)", roleType: "financial", note: "Tencent 매각 및 분배 구조 자문" },
          { firm: "Société Générale", role: "재무 자문 (FA)", roleType: "financial", note: "프랑스 세제 및 Article 115-2 적용 자문" },
          { firm: "Morgan Stanley", role: "상장 주관 (Listing Agent)", roleType: "financial", note: "Euronext Amsterdam 직상장 리드 매니저" },
          { firm: "JP Morgan", role: "상장 주관 (Listing Agent)", roleType: "financial", note: "공동 리드 매니저" },
          { firm: "BNP Paribas", role: "상장 주관 (Listing Agent)", roleType: "financial", note: "유럽 리테일 배분 담당" },
          { firm: "Cleary Gottlieb Steen & Hamilton", role: "법률 자문", roleType: "legal", note: "프랑스·네덜란드·미국 다중 법역 분사 구조 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "Pershing Square 측 (10% 앵커)",
        initials: "PSH",
        bg: "bg-amber-600",
        advisors: [
          { firm: "Pershing Square Capital Management (in-house)", role: "재무 자문", roleType: "financial", note: "Ackman 본인 + PSH 내부 팀 주도" },
          { firm: "Sullivan & Cromwell", role: "법률 자문", roleType: "legal", note: "SPAC 좌초 및 PSH 거른지 펀드 vehicle 교체 법률" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 UMG IPO Prospectus·Vivendi 공시·언론 보도 기반입니다. Tencent 측은 in-house 자문이 주도한 것으로 알려져 있으며, 각 단계별 추가 자문사가 있었을 수 있습니다.",
  },

  valuation: {
    body: "UMG의 밸류에이션 궤적은 사전 앵커 매각·SPAC 계약·직상장 첫날의 3단계 리레이팅으로 명확하게 분리된다. €30B(2019) → €35B(2021.6 Pershing) → €45.5B(2021.9.21 첫날) → €35B 안팎(2024). 음악 IP의 EV/EBITDA 멀티플이 18배에서 23배+로 리레이팅된 과정이 핵심 가치 동인이었다.",
    rows: [
      { item: "Tencent 1차 매각 EV (2019.3)", val: "€30B", note: "10% × €3B 역산, 음악 IP 시장 검증 1차" },
      { item: "Tencent 2차 매각 EV (2020.1)", val: "€30B", note: "추가 10% × €3B, 동일 EV 재확인" },
      { item: "Pershing SPAC 인수 EV (2021.6)", val: "€35B (약 $41.55B)", note: "10% × 약 $4B, 5개월 만에 +17% 리레이팅" },
      { item: "직상장 참조가 EV (2021.9.21 개장)", val: "€33.5B", note: "Vivendi 설정 참조가 €18.50 × 18.1억 주" },
      { item: "직상장 첫날 종가 EV", val: "€45.5B (약 USD 53B)", note: "주당 €25.10 종가, +36.5% 첫날 상승", accent: true },
      { item: "FY2021 매출", val: "€8.5B", note: "+14% YoY, 스트리밍 성장 주도" },
      { item: "FY2021 Adjusted EBITDA", val: "€1.94B", note: "EBITDA 마진 23%" },
      { item: "EV/EBITDA (직상장 첫날)", val: "약 23배", note: "음악 IP 멀티플 재평가, Vivendi 본체 약 9배 대비 2.5배" },
      { item: "2023년 중반 최고 시총", val: "약 €52B", note: "+15% vs 상장 첫날, EV/EBITDA 25배 도달", accent: true },
      { item: "2024년 1월 단일일 폭락", val: "-23% (€10B 증발)", note: "TikTok·Spotify 로열티 재협상 우려 (Bandsplain 사태)" },
      { item: "2024년 말 시총", val: "약 €35~40B", note: "EV/EBITDA 약 18~20배, 안정화 국면" },
    ],
    disclaimer: "EV 수치는 Vivendi 공시·UMG IPO Prospectus·Euronext 시장 데이터 기반입니다. EBITDA는 Adjusted 기준이며, 산정 방식에 따라 멀티플은 ±2배 차이가 날 수 있습니다.",
  },

  rationale: {
    buyer: {
      title: "Vivendi · Bolloré 가문의 분사 논리",
      initials: "VIV",
      bg: "bg-purple-700",
      points: [
        "[콘글로머리트 디스카운트 해소] UMG의 음악 IP 멀티플(20배+)이 Vivendi 본체 평균(8~10배)에 묶여 있던 가치 격차를 즉시 해소",
        "[Bolloré 가문의 21년 가치 실현] 2000년 Seagram 인수 이후 보유한 UMG를 사전 매각 €10B + 시장 평가 €45.5B로 가시화",
        "[Vivendi 본체의 단순화] UMG 제외 후 Vivendi는 Canal+·Havas·Editis 등 미디어 사업에 집중 가능, 후속 분할 여지 확보",
        "[프랑스 세제 효율] Article 115-2 적용으로 분배 시점의 세금 발생 없음. 미국 Section 355의 프랑스판 활용",
        "[Tencent 앵커로 글로벌 음악 시장 노출] Tencent Music과의 시너지 + 중국·아시아 시장 진출 기반",
        "[Bolloré 가문의 잔존 영향력] Bolloré Group 직보유 + Vivendi 잔여 합산 약 18%로 사실상의 거버넌스 영향력 유지",
      ],
    },
    seller: {
      title: "UMG 독립 + 앵커 투자자들의 진입 논리",
      initials: "UMG",
      bg: "bg-amber-600",
      points: [
        "[UMG 경영진] 음악 IP 전용 멀티플(EV/EBITDA 23배+)을 받는 독립 기업으로 출범, 자본 조달 및 M&A 자유도 확보",
        "[Tencent] €30B EV에 매입한 20%가 €45.5B로 즉각 리레이팅(+51%), Tencent Music과의 시너지 + 글로벌 음악 시장 노출",
        "[Pershing Square Holdings] Ackman의 [Direct Acquisition Vehicle] 최대 성공 사례, $4B 투자 → 첫날 평가액 약 $5.3B (+30%)",
        "[BlackRock·Pimco·Saudi PIF] 음악 IP를 새로운 자산 클래스로 편입할 수 있는 첫 메가 케이스, 향후 Hipgnosis·Concord 등 음악 IP 펀드 멀티플의 기준점",
        "[Vivendi 주주(현 UMG 주주)] 현물 배분으로 콘글로머리트 디스카운트 즉시 해소, Vivendi 1주당 UMG 1주 직접 수령",
        "[Lucian Grainge CEO] 1990년부터 UMG를 이끈 경영진의 독립 보상 구조 확립 (약 €100M 규모 스톡 보너스 등)",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "상장 후 약 4년 8개월이 지난 시점에서 UMG는 [음악 산업 사상 최대 IPO]라는 타이틀을 유지하고 있다. 2023년 중반까지 주가는 +50% 이상 상승해 시총 €52B를 기록했지만, 2024년 1월 Spotify·TikTok과의 로열티 재협상 우려로 단일일 -23% 폭락(시장에서 [Bandsplain 사태]로 불림) 후 €35~40B 수준에서 안정화됐다. 그럼에도 음악 IP의 자산 클래스화는 돌이킬 수 없는 흐름이 됐고, BlackRock·Pimco·Saudi PIF·노르웨이 GPFG 등 글로벌 대형 기관이 UMG 지분을 늘리며 [음악 IP = 채권 유사의 장기 현금흐름 자산]이라는 인식이 자리잡았다.",
    overallVerdict: "구조 혁신과 가치 실현 모두 성공한 카브아웃 IPO의 표준 사례",
    positives: [
      "[음악 산업 사상 최대 IPO] 첫날 시총 €45.5B(약 USD 53B)는 음악 메이저 단독 상장 사상 최대로, MCA Records 1986년 상장($300M) 이후 35년 만의 메이저 단독 상장 기록 경신",
      "[Vivendi 주주가치 극대화] 분배 시점 Vivendi 주주에게 약 €27B 가치 이전, 콘글로머리트 디스카운트 즉시 해소",
      "[Bolloré 가문의 21년 가치 실현] 2000년 €30B Seagram 인수 → 2021년 첫날 €45.5B + 사전 매각 €10B로 최종 회수",
      "[음악 IP의 자산 클래스화] BlackRock·Pimco·Saudi PIF 등 기관 진입, Hipgnosis·Concord·Believe 등 후속 음악 IP 펀드의 멀티플 기준점이 됨",
      "[유럽 카브아웃의 표준화] NYSE 대신 Euronext Amsterdam, IPO 대신 직상장, 전통적 분사 대신 현물 배분의 조합이 이후 유럽 대형 카브아웃의 표준이 됨",
      "[Pershing Square Holdings의 베스트 트랙] Ackman의 [Direct Acquisition Vehicle]이 SPAC 좌초 후 거른지 펀드로 우회해 성공한 케이스",
      "[FY2023 매출 €11.1B (+13% YoY)] 스트리밍 로열티 단가 인상으로 안정적 성장, EBITDA 마진 약 22%",
    ],
    risks: [
      "[Spotify·TikTok 로열티 재협상 리스크] 2024년 1월 Bandsplain 사태로 단일일 -23% 폭락, 음악 IP 멀티플의 변동성 노출",
      "[음악 IP 멀티플의 정상화] 2021년 첫날 EV/EBITDA 23배+에서 2024년 18~20배로 정상화, 추가 멀티플 압축 가능성",
      "[AI 생성 음악의 위협] 2024~2025년 AI 음악 생성 도구의 부상으로 카탈로그 가치의 장기 안정성에 의문 제기",
      "[Bolloré 가문 잔존 영향력] 약 18% 교차 보유가 일반 주주의 거버넌스 발언권을 일부 제약",
      "[Vivendi 본체의 추가 분할] 2024년 Vivendi가 Canal+·Havas·Louis Hachette Group 등 3분할을 추가 단행하며 그룹 전체 거버넌스 복잡도 증가",
    ],
    editorNote: "UMG 분사는 [음악 산업 단일 기업으로서 사상 최대 IPO]라는 타이틀로 기억되지만, 진짜 혁신은 구조에 있다. ① 사전 앵커 매각으로 가치를 두 번 검증한 점 ② 현물 배분으로 주주에게 직접 가치를 이전한 점 ③ NYSE·LSE 대신 Euronext Amsterdam을 선택한 점 ④ 신주 발행 없는 직상장으로 언더라이팅 수수료를 거의 0에 가깝게 만든 점 — 이 네 가지가 결합돼 유럽 대형 카브아웃의 새로운 표준이 됐다. Bill Ackman의 SPAC 좌초 → 거른지 펀드 우회 에피소드는 SPAC 시대의 끝과 [Direct Acquisition Vehicle]의 시작을 상징하는 또 다른 분기점이었다.",
  },

  tombstone: {
    acquirerInitials: "VIV",
    acquirerBg: "bg-purple-700",
    targetInitials: "UMG",
    targetBg: "bg-amber-600",
    acquirerName: "Vivendi SE",
    targetName: "Universal Music Group N.V.",
    dealTitle: "Carve-out IPO + In-Kind Distribution + Direct Listing",
    dealSize: "첫날 시총 €45.5B",
    dealSizeUSD: "USD 53B first-day market cap",
    evEbitda: "약 23배 (EV/Adj. EBITDA)",
    closeDate: "Sep 21, 2021",
  },

  sources: [
    { id: 1, text: "Vivendi Press Release — Proposed Distribution of 60% of UMG's Share Capital (March 24, 2021)", url: "https://www.vivendi.com/en/shareholders-investors/shareholders-and-investors-in-a-nutshell/proposed-distribution-of-60-of-umgs-share-capital-to-vivendis-shareholders/" },
    { id: 2, text: "Universal Music Group N.V. — Listing Prospectus (Euronext Amsterdam, September 2021)" },
    { id: 3, text: "Euronext Press Release — Universal Music Group Lists on Euronext Amsterdam (September 21, 2021)", url: "https://www.euronext.com/en/about/media/euronext-press-releases/universal-music-group-lists-euronext-amsterdam" },
    { id: 4, text: "Financial Times — Universal Music Group Surges in Amsterdam Debut (September 21, 2021)" },
    { id: 5, text: "Wall Street Journal — Universal Music Soars in Debut, Valuing Company at More Than $54 Billion (September 21, 2021)" },
    { id: 6, text: "Bloomberg — UMG Worth $53 Billion After Shares Soar in Trading Debut (September 21, 2021)" },
    { id: 7, text: "Reuters — Vivendi's Universal Music Soars on First Day of Trading (September 21, 2021)" },
    { id: 8, text: "Variety — Universal Music's Shares Soar 36.5% at First Day of Trading's Close (September 21, 2021)", url: "https://variety.com/2021/music/news/universal-music-shares-ipo-1235070391/" },
    { id: 9, text: "CNBC — Bill Ackman's Pershing Square Tontine Drops Deal to Buy 10% of Universal Music (July 19, 2021)" },
    { id: 10, text: "Pershing Square Holdings, Ltd. — Annual Reports (2021~2024), UMG Position Disclosures" },
    { id: 11, text: "Music Business Worldwide — Universal Valued at $39bn Ahead of Amsterdam Listing (September 2021)" },
    { id: 12, text: "Tencent Press Release — Tencent-led Consortium Acquires 10% of UMG (March 2019, January 2020)" },
  ],

  seo: {
    title: "Vivendi UMG 분사 완전 분석 — 음악 산업 사상 최대 IPO, €45.5B Euronext 상장",
    description:
      "Vivendi의 Universal Music Group 카브아웃 + Euronext Amsterdam 직상장 완전 분석. Tencent 앵커 매각, Pershing Square SPAC 좌초, 60% 현물 배분, 음악 IP 자산 클래스화까지 심층 해부.",
    keywords: [
      "Vivendi UMG 분사",
      "Universal Music Group IPO",
      "Euronext Amsterdam 상장",
      "카브아웃 IPO",
      "현물 배분",
      "직상장 Direct Listing",
      "Bill Ackman Pershing Square",
      "Tencent UMG",
      "음악 IP 자산",
      "Bolloré",
      "음악 산업 최대 IPO",
      "스트리밍 로열티",
    ],
  },

  concepts: [
    {
      term: "카브아웃 IPO (Carve-out IPO)",
      href: "/deal-101/carve-out-ipo",
      description: "모회사가 자회사 지분의 일부를 상장시켜 가치를 발견하고 자본을 조달하는 구조. Vivendi가 UMG 60%를 현물 배분 + 30%를 사전 앵커 매각한 모범 사례.",
    },
    {
      term: "현물 배분 (In-Kind Distribution)",
      href: "/deal-101/in-kind-distribution",
      description: "자회사 주식을 현금 대신 모회사 주주에게 직접 배분하는 방식. 프랑스 Article 115-2가 미국 Section 355에 해당하며, UMG 60% 분배가 이 구조의 유럽판 대표 사례.",
    },
    {
      term: "직상장 vs IPO (Direct Listing vs IPO)",
      href: "/deal-101/direct-listing",
      description: "신주 발행과 언더라이팅 없이 기존 주식만 거래소에 등록하는 상장 방식. Spotify(2018)·Slack(2019)의 NYSE 사례를 UMG가 유럽에서 본떠 적용.",
    },
    {
      term: "SPAC 좌초 → Direct Acquisition Vehicle",
      href: "/deal-101/spac-direct-acquisition",
      description: "Ackman의 PSTH SPAC이 UMG 10% 인수에서 좌초된 후 Pershing Square Holdings(거른지 펀드)로 우회한 사례. SPAC 시대의 끝과 직접 인수 vehicle의 시작.",
    },
    {
      term: "음악 IP의 자산 클래스화 (Music IP as Asset Class)",
      href: "/deal-101/music-ip-asset",
      description: "음악 카탈로그가 [장기 현금흐름 자산]으로 재평가되며 BlackRock·Pimco·Saudi PIF 등 기관이 진입한 트렌드. UMG 상장이 결정적 분기점.",
    },
    {
      term: "스트리밍 로열티 경제학",
      href: "/deal-101/streaming-royalty",
      description: "Spotify·Apple Music이 음원 사용료를 어떻게 분배하는지의 구조. UMG 같은 메이저는 마스터 권리 + 출판 권리 양면에서 로열티를 수취하며 EBITDA 마진의 핵심 동인.",
    },
    {
      term: "Euronext Amsterdam 상장 우대 세제",
      href: "/deal-101/euronext-amsterdam-tax",
      description: "네덜란드의 지주회사 친화적 세제(Participation Exemption, 다국적 IP 우대)가 Brexit 이후 EU 자본시장 허브를 LSE에서 Euronext Amsterdam으로 이동시킨 배경.",
    },
    {
      term: "전략적 앵커 투자자 (Strategic Anchor Investor)",
      href: "/deal-101/strategic-anchor",
      description: "IPO 또는 분사 이전에 대형 전략 투자자에게 일부 지분을 매각해 가격을 검증하고 매도 압력을 줄이는 구조. UMG가 Tencent 20% + Pershing 10%로 사전 검증을 두 번 수행.",
    },
  ],

  faq: [
    {
      q: "왜 NYSE나 LSE가 아닌 Euronext Amsterdam에 상장했나요?",
      a: "세 가지 이유가 겹쳤습니다. 첫째, 2020년 Brexit 이후 EU 자본시장 패스포팅이 LSE에서 끊겨 유럽 기관 자금의 LSE 접근성이 떨어졌습니다. 둘째, NYSE는 SOX 비용·집단소송 리스크가 컸고 미국 외 사업이 대부분인 UMG에는 부담이었습니다. 셋째, 네덜란드는 [참여 면세(Participation Exemption)] 등 지주회사 친화적 세제를 갖고 있어 다국적 IP 보유 법인에 최적이었습니다. 이후 EXOR(2022 Stellantis 지주회사) 등 유럽 대형 카브아웃이 같은 이유로 Euronext Amsterdam을 선택하면서 표준 상장지가 됐습니다.",
    },
    {
      q: "Bill Ackman의 SPAC 거래는 왜 좌초됐고, 어떻게 다시 살아났나요?",
      a: "2021년 6월 Ackman의 SPAC인 Pershing Square Tontine Holdings(PSTH)가 UMG 10%를 약 $4B에 인수하는 계약을 공시했지만, SEC가 [SPAC 위탁 자금이 일반적 SPAC 거래(기업 합병)가 아닌 소수 지분 매입에 사용되는 것이 SPAC 규정에 부합하는지] 우려를 제기했습니다. 7월 19일 PSTH 이사회가 만장일치로 거래 철회를 결정했고, $4B 트러스트는 SPAC 주주에게 환불됐습니다. Ackman은 즉시 본인이 운용하는 거른지 상장 폐쇄형 펀드인 [Pershing Square Holdings, Ltd.] 명의로 같은 10%·€35B EV·약 $4B 조건의 거래를 8월 10일 마감했습니다. SPAC이 못한 거래를 본 펀드가 직접 한 것은 SPAC 시대의 종언과 [Direct Acquisition Vehicle]의 시작을 알린 분기점이 됐습니다.",
    },
    {
      q: "60% 현물 배분이란 정확히 무엇인가요?",
      a: "Vivendi가 UMG 지분의 60%를 [현금으로 매각해 그 대금을 주주에게 배분]하는 대신, UMG 주식 자체를 [현물(in-kind)로 Vivendi 주주에게 직접 배분]한 방식입니다. Vivendi 1주를 보유한 주주는 UMG 1주를 추가로 받는 비율이었습니다. 프랑스 세법 Article 115-2가 미국 Section 355에 해당하는 면세 분배 조항으로, 일정 요건(사업 목적, 5년 이내 인수 없음 등)을 충족할 경우 분배 시점에 법인세·소득세가 부과되지 않습니다. Vivendi는 사전에 프랑스 세무당국으로부터 Article 115-2 적용 확정을 받아 분배를 실행했습니다.",
    },
    {
      q: "Tencent가 €30B EV에 산 20%가 갑자기 €45.5B가 된 이유는?",
      a: "세 가지 요인이 겹쳤습니다. 첫째, 2019~2021년 사이 글로벌 스트리밍 시장이 가속화되며 음악 IP의 EV/EBITDA 멀티플이 18배 안팎에서 23배+로 리레이팅됐습니다. 둘째, Pershing Square가 €35B EV에 10%를 인수한다고 공시한 것이 가격 검증의 2차 기준점이 됐습니다. 셋째, 직상장 첫날 시장의 자유로운 가격 발견이 음악 IP의 진짜 가치를 €45.5B로 매겼습니다. Tencent는 2~3년 사이 미실현 차익 약 €3B+를 확보했고, 이는 [전략적 앵커 투자자]가 사전 매입으로 어떻게 가치를 만드는지 보여주는 모범 사례입니다.",
    },
    {
      q: "직상장(Direct Listing)이 전통적 IPO와 어떻게 다른가요?",
      a: "직상장은 [신규 발행 없이 기존 주식만 거래소에 등록]하는 방식입니다. 차이점은 세 가지입니다. 첫째, 신주 발행이 없어 기존 주주의 지분 희석이 발생하지 않습니다. 둘째, 언더라이팅(주관사가 IPO 주식을 일정 가격에 인수해 시장에 재판매하는 행위)이 없어 통상 IPO 모금액의 5~7%인 언더라이팅 수수료가 발생하지 않습니다. 셋째, 가격은 시장의 자유 매매로 결정되며 [참조가(reference price)]는 거래 개시를 위한 형식적 출발점일 뿐 IPO 공모가처럼 매도 의무가 부과되지 않습니다. UMG는 2018년 Spotify(NYSE)·2019년 Slack(NYSE)의 직상장 선례를 유럽에서 본떠 적용한 첫 메가 케이스가 됐습니다.",
    },
    {
      q: "음악 IP가 [자산 클래스]가 됐다는 게 무슨 의미인가요?",
      a: "스트리밍 정착으로 음악 카탈로그가 [장기 안정적 현금흐름을 발생시키는 자산]으로 재평가됐다는 의미입니다. 1990~2000년대 CD 시대에는 신작 발매가 매출의 80%였지만, 2021년 기준 글로벌 녹음음악 매출의 약 65%가 스트리밍이고 그중 절반 이상이 [10년 이상 된 카탈로그 곡]에서 나옵니다. 즉, 한 번 만든 곡이 10~30년간 일정 로열티를 만들어내는 [채권 유사 자산]이 된 것입니다. UMG 상장이 결정적 분기점이 되어, 이후 BlackRock·Pimco·Saudi PIF·노르웨이 GPFG 등 채권 운용에 익숙한 대형 기관이 음악 IP를 포트폴리오에 편입했고, Hipgnosis Songs Fund(2024년 Blackstone $1.6B 비공개화)·Concord·Believe·BMG·Primary Wave 등 음악 IP 전용 펀드가 자본을 조달했습니다.",
    },
  ],
};

export default deal;
