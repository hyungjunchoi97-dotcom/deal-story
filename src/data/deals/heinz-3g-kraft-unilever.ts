/**
 * Heinz × 3G Capital + Berkshire LBO → Kraft 합병 → Unilever 인수 실패 (2013-2017)
 * 3G식 ZBB + 버크셔의 9% 영구 우선주 백기사 자금 → 2015년 Kraft 합병으로 KHC 탄생
 * → 2017년 [143B] Unilever 제안이 [48시간] 만에 철수된 CPG 적대적 M&A 사상 최대 좌초
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "heinz-3g-kraft-unilever",
  title: "Heinz 매수에서 Unilever 좌초까지, 3G·버크셔의 4년 아크와 CPG 적대적 M&A의 한계",
  subtitle:
    "2013년 [280억 달러] Heinz LBO · 9% 영구 우선주 + ZBB · 2015년 Kraft 합병으로 KHC 탄생 · 2017년 [1,430억 달러] Unilever 제안의 [48시간] 자진 철수와 2019년 [154억 달러] 영업권 손상",
  category: "ma",
  industry: "Consumer Packaged Goods (CPG) / Food & Beverage",
  country: "미국/네덜란드/영국",
  announcedAt: "2013-02-14",
  closedAt: "2017-02-19",
  announcedDisplay: "2013년 2월 14일 (Heinz LBO 발표)",
  closedDisplay: "2017년 2월 19일 (Unilever 제안 철수, 4년 아크 종결)",
  readingMinutes: 18,
  tags: [
    "Heinz",
    "Kraft",
    "Kraft Heinz",
    "KHC",
    "3G Capital",
    "Berkshire Hathaway",
    "Warren Buffett",
    "Jorge Paulo Lemann",
    "Unilever",
    "Paul Polman",
    "ZBB",
    "제로기반예산",
    "영구 우선주",
    "백기사 금융",
    "적대적 M&A",
    "48시간 철수",
    "영업권 손상",
    "CPG",
    "소비재",
  ],
  excerpt:
    "2013년 2월 14일, 3G Capital과 버크셔 해서웨이가 H.J. Heinz를 주당 $72.50, 총 280억 달러(부채 포함)에 인수한다고 발표했다. 보통주 85억 달러($4.1B 3G + $4.4B 버크셔)에 더해 [9% 영구 우선주 80억 달러]를 버크셔가 단독 인수한 [백기사형 LBO]. 이후 3G가 ZBB(제로기반예산)로 EBITDA 마진을 22%에서 28%대로 끌어올렸고, 2015년 7월 Kraft Foods와 합병해 시가총액 1,000억 달러대의 The Kraft Heinz Company(NYSE: KHC)를 만들었다. 그러나 2017년 2월 17일 KHC가 Unilever에 주당 $50, 총 1,430억 달러를 제안한 순간, Paul Polman 이사회가 만장일치 거부하고 정확히 [48시간 뒤인 2월 19일 일요일 저녁] KHC가 자진 철수했다. CPG 사상 최대 적대적 M&A 시도가 단 이틀 만에 끝났고, 그 직후 2019년 KHC는 [154억 달러 영업권 손상]과 SEC 조사를 맞으며 ZBB 모델의 장기 브랜드 파괴 효과를 사후에 증명했다. 버크셔의 9% 우선주만이 2013~2024년 누적 [50억 달러 이상의 현금 배당]을 가져온 단일 트랜치였다.",

  acquirer: { initials: "3G", bg: "bg-red-700", label: "3G Capital + Berkshire Hathaway → Kraft Heinz Company" },
  target: { initials: "ULVR", bg: "bg-blue-700", label: "H.J. Heinz → Kraft Foods → Unilever plc/NV" },

  background: [
    "[1869년 창업과 1948년 IPO.] Henry J. Heinz가 1869년 펜실베이니아 셔프스버그에서 양고추냉이(horseradish)를 병에 담아 팔기 시작한 것이 H.J. Heinz의 시작이다. 케첩, 머스타드, 가공식품으로 영역을 넓혀 [57 Varieties] 슬로건과 함께 미국 식탁의 상징이 됐다. 1948년 NYSE에 상장(NYSE: HNZ)했고, 2013년 LBO 직전 시점에는 200개국에서 매출 약 116억 달러를 올리는 글로벌 식품 메이저였다. 그러나 2000년대 후반 카본 아이칸의 행동주의(2006~2009)를 거치며 [브랜드 포트폴리오 재정비 + 비용 구조 압박]의 압력이 누적된 상태였다.",
    "[2013년 2월 14일, 3G + 버크셔의 LBO 발표.] 발렌타인데이에 3G Capital(Jorge Paulo Lemann)과 워런 버핏의 버크셔 해서웨이가 공동으로 Heinz를 주당 $72.50, 총 280억 달러(부채 인수 포함, 기존 부채 약 45억 달러 포함)에 인수한다고 발표했다. 직전 30일 평균가 대비 약 19% 프리미엄. 보통주는 3G 41억 달러 + 버크셔 44억 달러 = 85억 달러, 추가로 [버크셔가 단독으로 9% 영구 우선주 80억 달러]를 인수했다. LBO 부채 약 146억 달러. 3G가 일상 운영을, 버크셔는 자본만 제공하는 [백기사형 LBO] 구조였다. 2013년 6월 7일 종결.",
    "[2013-2015년, ZBB와 Heinz의 마진 압박.] 3G Capital은 인수 직후 [제로기반예산(Zero-Based Budgeting, ZBB)]을 도입했다. AB InBev에서 검증된 3G의 트레이드마크 — 모든 비용 항목을 매년 0에서 재심사. Heinz 본사에서 약 1,200명을 감원했고, 14개 공장 중 6개를 폐쇄, 마케팅비를 큰 폭으로 삭감했다. EBITDA 마진은 약 22%에서 28%대로 단기간에 상승. 2014년 EBITDA는 약 32억 달러, 2015년에는 약 38억 달러까지 확대됐다. 버크셔의 우선주 배당 [연간 7.2억 달러(현금)]가 안정적으로 지급되기 시작했다.",
    "[2015년 3월~7월, Kraft 합병과 KHC 탄생.] 2015년 3월 25일 3G+버크셔가 Heinz를 Kraft Foods Group(NASDAQ: KRFT)과 합병시킨다고 발표했다. Kraft 주주는 주당 $16.50의 [특별 배당] + 합병 신설법인 지분 49%를 받았고, 3G+버크셔는 신설법인 The Kraft Heinz Company(NYSE: KHC) 지분 51%를 보유했다. 종합 시가총액 약 460억 달러 규모, NYSE 상장 식품기업 중 매출 기준 미국 3위, 글로벌 5위에 단번에 진입. 2015년 7월 2일 합병 종결. 버크셔 우선주는 KHC 구조에 그대로 이전.",
    "[2017년 2월 17일~19일, Unilever 기습과 48시간 철수.] 2017년 2월 17일 금요일, KHC가 Unilever에 주당 $50(현금 $30.23 + KHC 주식 0.222주), 총 1,430억 달러 규모의 인수 제안을 했다고 공개됐다. 발표 시점 기준 Unilever 주가 대비 [18% 프리미엄], 역사상 가장 큰 식품·소비재 M&A 제안 중 하나. 2017년 2월 18일 토요일, Paul Polman CEO가 이끄는 Unilever 이사회가 만장일치로 거부하며 [\"재무·전략·문화 모든 측면에서 부적합\"]이라고 공표. 2월 19일 일요일 워런 버핏이 Polman에게 직접 전화한 뒤, 같은 날 저녁 KHC·3G·버크셔가 [공동 성명으로 \"우호적 거래의 경로가 없다\"]며 자진 철수. 공식 발표 후 정확히 [48시간]. CPG 사상 최대 적대적 M&A 시도가 단 이틀 만에 종결됐다.",
    "[2019~2024년, 154억 달러 영업권 손상과 ZBB 모델의 사후 검증.] Unilever 좌초 2년 뒤인 2019년 2월 22일, KHC는 [154억 달러 규모의 영업권·무형자산 손상차손]을 공시했다. 주로 Kraft·Oscar Mayer 브랜드 가치의 대규모 감액. 동시에 SEC가 회계 처리에 대한 조사를 시작. KHC 주가는 2017년 2월 고점 $96에서 2019년 4월 $32까지 약 [-67%] 폭락. 3G는 2018~2023년에 걸쳐 보유 지분 일부를 단계적으로 매각했고, 버크셔는 약 26% 보통주 지분을 유지하며 우선주 배당만 안정적으로 수령. 2024~2025년 KHC 주가는 $30~35대에 머물러 2017년 고점의 약 3분의 1 수준. 한편 버크셔의 80억 달러 영구 우선주는 2013~2017년 동안 [연간 7.2억 달러 × 4년 = 약 29억 달러]의 현금 배당을 가져왔고, Kraft 합병 시점 약 [85억 달러에 액면 콜]되면서 [추가 5억 달러 콜 프리미엄]까지 회수, 사실상 [버크셔 단일 트랜치 사상 최고 수익률]로 평가된다.",
  ],

  dealSummary: {
    dealValueDisplay:
      "Heinz LBO $28B (2013) · Kraft 합병 $46B 신설법인 (2015) · Unilever 제안 $143B 철수 (2017)",
    acquirerName: "3G Capital + Berkshire Hathaway → The Kraft Heinz Company",
    targetName: "H.J. Heinz Company → Kraft Foods Group → Unilever plc/NV",
    announcedDisplay: "2013년 2월 14일 (Heinz LBO 발표)",
    closedDisplay: "2017년 2월 19일 (Unilever 제안 철수)",
    country: "미국/네덜란드/영국",
  },

  executiveSummary: [
    "[Phase 1, Heinz LBO 발표] 2013.02.14 3G+버크셔가 Heinz를 주당 $72.50(+19% 프리미엄), 부채 포함 총 280억 달러에 인수 합의. 보통주 3G $4.1B + 버크셔 $4.4B = $8.5B, LBO 부채 약 $14.6B.",
    "[Phase 1, 9% 영구 우선주의 백기사 자금] 버크셔가 단독으로 [80억 달러 9% 영구 우선주]를 인수, 연간 7.2억 달러의 현금 배당. 부채에 후순위·보통주에 우선. 이것이 본 LBO의 결정적 자금원.",
    "[Phase 1, ZBB와 마진 확대] 3G가 ZBB 도입 후 1,200명 감원·6개 공장 폐쇄·마케팅비 삭감으로 Heinz EBITDA 마진을 약 22% → 28%대로 확대. EBITDA 절대액 2013년 약 28억 달러 → 2015년 약 38억 달러.",
    "[Phase 2, Kraft 합병] 2015.03.25 발표, 2015.07.02 종결. Kraft 주주에게 주당 $16.50 특별 배당 + KHC 지분 49% 부여, 3G+버크셔가 51% 유지. 신설법인 The Kraft Heinz Company(NYSE: KHC) 시가총액 약 1,000억 달러대 진입.",
    "[Phase 2, 우선주 콜과 새 자본구조] Kraft 합병 시점에 버크셔의 80억 달러 우선주가 [약 $85억(액면 + 5% 콜 프리미엄)]에 콜되고, 버크셔는 별도로 KHC 보통주의 약 26%를 유지. 사실상 보통주 대주주로 전환된 첫 변곡점.",
    "[Phase 3, Unilever 제안] 2017.02.17 KHC가 Unilever에 주당 $50(현금 $30.23 + KHC 주식 0.222주), 총 1,430억 달러 인수 제안. 발표 시점 Unilever 주가 대비 +18% 프리미엄. 식품·소비재 사상 최대 규모.",
    "[Phase 3, 48시간 만의 자진 철수] 2017.02.18 Paul Polman 이사회 만장일치 거부, 2017.02.19 일요일 저녁 버핏이 Polman에게 직접 전화한 뒤 KHC가 자진 철수 공표. 공식 발표 후 [48시간]. 버핏의 [\"우호적 거래만 한다\"] 원칙이 적대화를 막은 결정타.",
    "[후폭풍] 2019.02 KHC가 [154억 달러 영업권 손상] 발표, SEC 조사 개시. 주가는 2017.02 고점 $96 → 2019.04 $32(약 -67%). 3G가 보유 지분 단계적 매각, 버크셔는 약 26% 보통주 지분 유지. 그러나 버크셔 9% 우선주는 2013~2015년 [약 29억 달러 현금 배당 + 5억 달러 콜 프리미엄]으로 단일 트랜치 사상 최고 수익률을 기록.",
  ],

  industryOverview: {
    body: "2010년대 중반 글로벌 CPG(Consumer Packaged Goods) 산업의 키워드는 [통합과 마진 압박]이었다. 미국 식품 매출 성장률은 2010년대 들어 인구·인플레이션 합산 수준으로 둔화됐고, 알디(Aldi)·Lidl·Costco 같은 프라이빗 라벨 강자들이 [브랜드 프리미엄]을 압박했다. 동시에 밀레니얼 소비자는 [건강·지속가능성·소형 브랜드]를 선호하며 전통 메이저의 시장 점유율을 갉아먹기 시작했다. 이런 환경에서 메이저들은 [① 합병으로 규모와 협상력 확보, ② 비용 절감으로 마진 방어, ③ 소형 인디 브랜드 인수로 포트폴리오 보강]의 3대 전략을 동시에 추진했다. 3G Capital은 그중 [②비용 절감]에 ZBB를 통해 극단까지 밀어붙이는 PE 모델로 명성을 얻었고, AB InBev·Burger King에 이어 Heinz·Kraft를 그 다음 무대로 삼았다. 반면 Unilever의 Paul Polman은 [장기 지속가능 성장(Sustainable Living Plan)]이라는 정반대 노선을 표방하며 ESG 경영의 글로벌 아이콘이 됐다. 두 노선의 충돌이 2017년 2월 48시간 동안 압축적으로 폭발한 것이 본 사건의 본질이다.",
    metrics: [
      { label: "Heinz LBO 규모 (2013)", value: "$28B", sub: "부채 포함, 보통주 $13.5B + 우선주 $8B + 신규 부채" },
      { label: "KHC 시가총액 (2015.07 합병 시)", value: "약 $100B", sub: "글로벌 식품기업 매출 5위 진입" },
      { label: "Unilever 제안 규모 (2017)", value: "$143B", sub: "+18% 프리미엄, CPG 사상 최대 시도" },
      { label: "KHC 영업권 손상 (2019.02)", value: "$15.4B", sub: "Kraft·Oscar Mayer 브랜드 가치 감액" },
    ],
    subBody:
      "Heinz-Kraft-Unilever 아크는 [PE식 비용 절감(3G ZBB) + 보험 플로트 백기사 자금(버크셔) + CPG 메가 통합]이 한 라인업으로 결합된 드문 케이스다. 이후 2017~2024년 CPG 메가 M&A는 [Unilever의 차·아이스크림 사업 매각], [Reckitt의 영양제 사업 매각], [P&G의 소형 인수 위주 전략]으로 회귀했고, 적대적 메가 M&A는 사실상 사라졌다. KHC-Unilever 좌초가 그 분기점이었다.",
    players: [
      { name: "H.J. Heinz Company", role: "Phase 1 타깃, 1869년 창업·1948년 IPO·NYSE: HNZ" },
      { name: "Kraft Foods Group", role: "Phase 2 합병 상대, 2012년 Mondelez 분사 후 북미 식품 부문, NASDAQ: KRFT" },
      { name: "The Kraft Heinz Company (KHC)", role: "Phase 2 신설법인, 2015.07 합병으로 탄생, NYSE: KHC" },
      { name: "Unilever plc/NV", role: "Phase 3 타깃, 영국·네덜란드 이중 본사, Paul Polman CEO, Dove·Hellmann's·Knorr·Lipton 보유" },
      { name: "3G Capital Partners", role: "PE 운영자, Jorge Paulo Lemann·Alex Behring 주도, ZBB 전문" },
      { name: "Berkshire Hathaway", role: "백기사 자금줄, $8B 9% 우선주 + KHC 보통주 약 26% 보유" },
      { name: "Mondelez International", role: "Kraft 분사로 탄생한 글로벌 스낵 사업, 본 거래 비참여이나 구조적 비교축" },
    ],
  },

  companyOverview: {
    targetName: "H.J. Heinz Company (Phase 1 타깃) / Kraft Heinz Company (Phase 2~3 주체)",
    body: "H.J. Heinz는 1869년 펜실베이니아 셔프스버그에서 Henry John Heinz가 양고추냉이를 병에 담아 팔며 시작했다. 1876년 토마토 케첩 출시, 1896년 [57 Varieties] 슬로건 도입. 1948년 NYSE 상장(HNZ). 2013년 LBO 직전 시점 기준 약 200개국에서 매출 약 116억 달러를 올리는 글로벌 식품 메이저. 핵심 브랜드는 Heinz 케첩(미국 점유율 약 60%), Ore-Ida 냉동감자, Smart Ones 다이어트 식품, Lea & Perrins 우스터소스 등. LBO 종결 후 2015년 Kraft와 합병해 The Kraft Heinz Company가 됐다. KHC의 핵심 브랜드는 Heinz, Kraft, Oscar Mayer, Philadelphia, Maxwell House, Jell-O, Velveeta, Planters(2018년 매각) 등 약 200개. 미국 가정의 약 97%가 KHC 제품을 1개 이상 보유한다는 자체 발표가 있을 정도의 침투율. 그러나 매출 성장은 2015년 합병 이후 거의 정체됐고, EBITDA 마진 확대만으로 가치 창출을 시도한 것이 향후 영업권 손상의 원인이 됐다.",
    metrics: [
      { label: "H.J. Heinz 창업", value: "1869년", sub: "펜실베이니아 셔프스버그" },
      { label: "H.J. Heinz IPO", value: "1948년", sub: "NYSE: HNZ" },
      { label: "Heinz FY2013 매출 (LBO 직전)", value: "약 $11.6B", sub: "글로벌 200개국 판매" },
      { label: "KHC 합병 시점 시가총액", value: "약 $100B", sub: "2015.07 NYSE: KHC" },
    ],
    financials: [
      { year: "FY2009", revenue: 10148, cogs: 6533, grossProfit: 3615, sga: 2200, operatingIncome: 1415, ebitda: 1880 },
      { year: "FY2010", revenue: 10495, cogs: 6700, grossProfit: 3795, sga: 2280, operatingIncome: 1515, ebitda: 2010 },
      { year: "FY2011", revenue: 10707, cogs: 6960, grossProfit: 3747, sga: 2240, operatingIncome: 1507, ebitda: 2050 },
      { year: "FY2012", revenue: 11649, cogs: 7600, grossProfit: 4049, sga: 2400, operatingIncome: 1649, ebitda: 2250 },
      { year: "FY2013", revenue: 11529, cogs: 7510, grossProfit: 4019, sga: 2380, operatingIncome: 1639, ebitda: 2530 },
    ],
    financialsNote:
      "단위: 백만 달러(US$M) | US GAAP 기준 | 출처: H.J. Heinz 10-K 공시(FY2009~FY2013). FY2013은 LBO 종결(2013.06.07) 직후로, 회계연도 일부만 3G+버크셔 보유. ZBB 효과는 FY2014~FY2015에 본격 반영되며 EBITDA 마진이 22%대 → 28%대로 확장.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  controlBattleOverview: {
    body: "2017년 2월 17일~19일의 [48시간 분쟁]은 CPG 사상 최대 규모의 적대적 M&A 시도가 단 이틀 만에 좌초된 사건이다. 일반적인 적대적 분쟁이 수개월~수년에 걸쳐 진행되는 데 비해, 본 분쟁은 [공격(2.17 금요일) → 거부(2.18 토요일) → 철수(2.19 일요일)]의 3일 압축 진행. 핵심은 [공격자 측 버크셔가 적대화를 거부]했다는 점이다. 워런 버핏은 평생 [적대적 M&A에 참여하지 않는다]는 원칙을 고수해왔고, Unilever 이사회의 [\"우호적 거래만 검토\"] 공식 거부를 받자 즉시 압박 게임을 종결했다. 이것이 본 분쟁의 가장 독특한 결과다 — [버크셔라는 자본 동맹의 존재 자체가 공격을 종결시킨 결정타].",
    catalyst:
      "2017년 2월 17일 금요일, KHC가 Unilever에 주당 $50(현금 $30.23 + KHC 주식 0.222주), 총 1,430억 달러 규모의 인수 제안을 공개 (BlueJay 코드명). Unilever 이사회는 같은 날 저녁 비공개 회의에서 즉각 거부 입장을 결정하고, 다음 날(2.18 토요일) 공식 거부 성명을 냈다. 그 시점에 워런 버핏이 직접 Paul Polman에게 전화한 것이 결정적 변곡점이 됐다.",
    attackerLabel: "KHC + 3G Capital + Berkshire Hathaway",
    defenderLabel: "Unilever 이사회 (Paul Polman CEO)",
    battleMoves: [
      {
        date: "2017-02-17 (금)",
        side: "attack",
        actor: "Kraft Heinz Company",
        move: "Unilever에 주당 $50, 총 1,430억 달러 인수 제안 공개",
        detail:
          "KHC가 Unilever 이사회에 주당 $50(현금 $30.23 + KHC 주식 0.222주), 총 1,430억 달러 규모의 인수 제안을 공식 전달. 발표 시점 Unilever 주가 대비 +18% 프리미엄. CPG 사상 최대 규모의 적대적 M&A 시도. 시장 정보 유출 후 같은 날 양사가 공식 확인.",
        weapon: "주식+현금 혼합 비드 (Stock-Cash Mix Tender)",
        financialImpact: "Unilever 주가 +13% (런던), KHC 주가 +11% (NYSE)",
      },
      {
        date: "2017-02-18 (토)",
        side: "defense",
        actor: "Unilever 이사회 (Paul Polman 주도)",
        move: "이사회 만장일치 거부, 공식 성명 발표",
        detail:
          "Unilever 이사회가 만장일치로 KHC 제안을 거부, [\"재무·전략·문화 모든 측면에서 부적합\"]이라는 공식 성명 발표. Polman이 핵심 메시지로 [\"Unilever의 지속가능 성장 모델은 ZBB 단기 비용 절감 모델과 양립할 수 없다\"]를 부각. 영국·네덜란드 양국 정부도 [국가 전략 자산 보호] 명분으로 비공식 반대 의사 전달.",
        weapon: "즉각 만장일치 거부 (Just Say No Defense)",
        financialImpact: "Unilever 채권 CDS 스프레드 일시 상승, 시장에서 좌초 가능성 부각",
      },
      {
        date: "2017-02-19 (일) 오전",
        side: "neutral",
        actor: "Warren Buffett (Berkshire Hathaway)",
        move: "Paul Polman과 직접 전화 통화 — 적대화 의사 부재 확인",
        detail:
          "워런 버핏이 일요일 오전 Paul Polman에게 직접 전화. 시장 보도에 따르면 [\"버크셔는 평생 적대적 M&A에 참여하지 않으며, Unilever 이사회 반대 의사가 명확한 이상 계속할 의사가 없다\"]는 입장 전달. 이는 KHC·3G 단독으로는 자금 조달이 불가능하다는 의미였다. 버크셔의 자본 동맹 철회 = 사실상 거래 종결.",
        weapon: "자본 동맹 철회 (Capital Coalition Withdrawal)",
        financialImpact: "KHC 비드의 현실성 사실상 소멸",
      },
      {
        date: "2017-02-19 (일) 저녁",
        side: "attack",
        actor: "KHC + 3G + Berkshire 공동 성명",
        move: "공식 자진 철수 공표 — 공식 발표 후 [48시간]",
        detail:
          "KHC가 2.19 일요일 저녁(미국 동부 시간 약 18시) 공식 성명을 발표, [\"우호적 거래의 경로가 없음을 확인했다\"]며 자진 철수. 공식 제안 후 정확히 48시간. 식품·소비재 사상 최대 규모 적대적 M&A 시도가 단 이틀 만에 종결.",
        weapon: "자진 철수 (Voluntary Withdrawal)",
        financialImpact: "KHC 주가 -3% (월요일 개장 후), Unilever 주가 -8%(프리미엄 소멸)",
      },
      {
        date: "2017-02-20 이후",
        side: "defense",
        actor: "Unilever (방어 후 구조조정 가속)",
        move: "방어 직후 자체 구조조정 가속 — 마진 목표 상향, 마가린 사업 매각",
        detail:
          "Unilever는 방어 직후 2017.04 자체 구조조정 계획을 발표, 영업이익률 목표를 2020년까지 20%로 상향(기존 ~17%). 동시에 마가린 사업(Flora·I Can't Believe It's Not Butter 등)을 KKR에 약 80억 달러에 매각. [\"적대적 공격이 정당화되지 않도록 스스로 마진을 끌어올렸다\"]는 평가. Polman은 2019년 1월 퇴임.",
        weapon: "포스트-방어 자체 구조조정 (Post-Defense Self-Restructuring)",
        financialImpact: "Unilever 주가 12개월간 +20%, 마진 목표 조기 달성",
      },
    ],
    financialWeapons: [
      {
        name: "주식+현금 혼합 비드 (KHC의 공격 무기)",
        side: "attack",
        usedBy: "Kraft Heinz Company",
        description:
          "주당 $50 = 현금 $30.23(60%) + KHC 주식 0.222주(40%). 현금 비중이 비교적 높았지만, KHC 주식 비중 40%가 [3G ZBB가 Unilever에 적용될 것]이라는 우려를 키워 오히려 거부 명분 강화 효과.",
        effectiveness: "blocked",
      },
      {
        name: "즉각 만장일치 거부 + ESG 프레이밍 (Unilever의 방어 무기)",
        side: "defense",
        usedBy: "Unilever 이사회 (Paul Polman)",
        description:
          "발표 다음 날 만장일치 거부를 공표하는 [Just Say No Defense]. ESG·지속가능 성장 vs ZBB 비용 절감의 [문화 충돌]을 프레이밍해 기관 투자자·미디어 모두를 즉시 우호적으로 끌어들임. 영국·네덜란드 정부의 비공식 개입까지 유도.",
        effectiveness: "decisive",
      },
      {
        name: "버크셔의 자본 동맹 철회 (Capital Coalition Withdrawal)",
        side: "neutral",
        usedBy: "Berkshire Hathaway (Warren Buffett)",
        description:
          "버핏이 평생 견지한 [\"적대적 M&A 비참여\"] 원칙. Polman의 명확한 거부 의사 확인 후 즉시 자본 철회를 결정. KHC·3G 단독 자금 조달 불가능 → 거래 사실상 종결. [공격자 측 자본가가 공격을 끝낸] 매우 드문 사례.",
        effectiveness: "decisive",
      },
      {
        name: "양국 정부의 국가 안보 프레이밍 (영국·네덜란드)",
        side: "defense",
        usedBy: "영국·네덜란드 정부",
        description:
          "Unilever의 [이중 본사 구조(런던·로테르담)]가 양국 정부 모두를 잠재적 거부권 보유자로 만들었다. 양국 정부가 비공식 채널로 [\"국가 전략 자산 보호\"] 메시지를 전달, KHC가 친화적 정치 환경 확보가 불가능함을 신호.",
        effectiveness: "effective",
      },
      {
        name: "포스트-방어 자체 구조조정 (Unilever의 후속 조치)",
        side: "defense",
        usedBy: "Unilever",
        description:
          "방어 직후 영업이익률 목표 20% 상향 + 마가린 사업 KKR에 80억 달러 매각. [\"공격을 받지 않도록 스스로 마진을 끌어올린다\"]는 사후 정당화. Unilever 주가는 12개월간 +20%, Polman은 2019.01 명예 퇴임.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2017-02-19 (일) 오전",
      event: "워런 버핏의 Paul Polman 직접 전화 — 버크셔의 적대화 거부",
      detail:
        "버핏이 Polman에게 [\"버크셔는 적대적 M&A에 참여하지 않는다, Unilever 이사회의 반대가 명확한 이상 우리는 계속하지 않는다\"]를 직접 전달. 이 한 통의 전화가 KHC 비드의 자금줄을 끊었다. 같은 날 저녁 KHC가 자진 철수 공표. [공격자 측 자본가가 공격을 종결시킨] CPG M&A 사상 가장 드문 사례.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Unilever — 만장일치 거부와 정부 개입, 버크셔의 자본 동맹 철회로 단 48시간 만에 방어 성공",
      margin: "공식 발표 후 48시간 만의 자진 철수, 주당 $50 비드의 가격 인상 시도조차 없이 종결",
      note: "Unilever는 방어에 성공했고, 직후 자체 구조조정 가속으로 마진을 끌어올렸다. 12개월 후 주가는 +20%. KHC는 [패배]했을 뿐 아니라 2년 뒤 154억 달러 영업권 손상과 SEC 조사로 [공격자가 사실상 더 큰 문제였음]이 드러났다. 본 사건은 [이사회 만장일치 거부 + 정부 개입 + 자본 동맹 철회]가 결합된 [방어자의 완승] 사례로 기록된다.",
    },
    priceImpact: {
      preContest: "$39 (Unilever 런던, 2017.02.16 종가)",
      peak: "$50 (KHC 비드가)",
      postContest: "$42 (2017.02.20 월요일 종가, 프리미엄 소멸 후)",
      note: "Unilever 주주는 비드 공개 직후 +13%의 단기 차익을 봤으나, 철수 후 프리미엄이 소멸하며 -8% 하락. 다만 방어 후 자체 구조조정 효과로 12개월 후 +20%까지 회복. KHC 주가는 2017.02 고점 $96에서 2019.04 $32까지 약 -67% 폭락. 적대적 M&A 좌초가 단기 주가에는 양측 모두 부정적이었으나, 장기적으로는 방어자(Unilever)에게 더 유리하게 작용한 대표 사례.",
    },
  },

  dealStructure: {
    body:
      "본 거래는 [① 2013년 Heinz LBO(보통주 $8.5B + 버크셔 우선주 $8B + LBO 부채 $14.6B = 총 $28B)], [② 2015년 Kraft 합병으로 KHC 신설법인 51%/49% 구조], [③ 2017년 Unilever에 주당 $50($30.23 현금 + 0.222주 KHC), 총 $143B 제안 → 48시간 자진 철수]의 3단 구조다. 핵심은 [버크셔의 9% 영구 우선주 $8B]가 Phase 1의 결정적 자금원이었다는 점, [버크셔의 적대화 거부]가 Phase 3 종결의 결정타였다는 점이다. 같은 자본가가 동일 거래의 [자금줄과 마침표]를 모두 만든 매우 드문 케이스.",
    preOwnership: {
      nodes: [
        { id: "hnz_pre", label: "H.J. Heinz Company", sub: "공개기업, NYSE: HNZ (1948 IPO)", type: "target" },
        { id: "hnz_share", label: "Heinz 일반 주주", sub: "100% 공개 유통, 시가총액 ~$23B", type: "public" },
        { id: "3g_pre", label: "3G Capital", sub: "Lemann·Behring 주도 PE", type: "fund" },
        { id: "brk_pre", label: "Berkshire Hathaway", sub: "버크셔 보험 플로트 ~$77B (2013)", type: "fund" },
      ],
      edges: [
        { from: "hnz_share", to: "hnz_pre", label: "100% 공개 유통" },
        { from: "3g_pre", to: "hnz_pre", label: "$72.50/주 LBO 제안 (2013.02.14)" },
        { from: "brk_pre", to: "hnz_pre", label: "공동 인수 + $8B 우선주 단독 인수" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "khc_post", label: "Kraft Heinz Company (KHC)", sub: "신설법인, NYSE: KHC (2015.07)", type: "entity" },
        { id: "3g_post", label: "3G Capital", sub: "KHC 보통주 약 24% (합병 직후)", type: "fund" },
        { id: "brk_post", label: "Berkshire Hathaway", sub: "KHC 보통주 약 27% + 우선주 콜됨", type: "fund" },
        { id: "kraft_share", label: "(구) Kraft Foods 주주", sub: "KHC 보통주 49% + 특별 배당 $16.50/주", type: "public" },
        { id: "unl_target", label: "Unilever plc/NV", sub: "2017.02.17 $143B 제안 → 2.19 철수", type: "target" },
      ],
      edges: [
        { from: "3g_post", to: "khc_post", label: "약 24% (Phase 2 합병 직후)" },
        { from: "brk_post", to: "khc_post", label: "약 27% 보통주 + 우선주 콜 회수" },
        { from: "kraft_share", to: "khc_post", label: "49% + $16.50/주 특별 배당" },
        { from: "khc_post", to: "unl_target", label: "$143B 제안 (2017.02.17 → 02.19 철수)" },
      ],
    },
    keyTerms: [
      { label: "Phase 1: Heinz LBO 가격 (2013)", value: "주당 $72.50 (+19% 프리미엄), 부채 포함 총 $28B", accent: true },
      { label: "Phase 1: 3G·버크셔 보통주 출자", value: "3G $4.1B + Berkshire $4.4B = $8.5B (50:50 보통주)" },
      { label: "Phase 1: 버크셔 단독 9% 영구 우선주", value: "$8.0B (배당 9% 현금, 미지급 시 ~9% PIK)", accent: true },
      { label: "Phase 1: LBO 부채", value: "약 $14.6B (TLB + HY 채권 + 리볼버, 기존 부채 $4.5B 포함)" },
      { label: "Phase 1: 종결", value: "2013.06.07, 시간 6개월" },
      { label: "Phase 2: Kraft 합병 발표·종결", value: "2015.03.25 발표 / 2015.07.02 종결" },
      { label: "Phase 2: Kraft 주주 대가", value: "주당 $16.50 특별 배당 + KHC 지분 49%", accent: true },
      { label: "Phase 2: 합병 신설법인 지분", value: "3G+버크셔 51% / Kraft 주주 49% (NYSE: KHC)" },
      { label: "Phase 2: 버크셔 우선주 콜", value: "약 $8.32B 액면 + 약 $0.5B 콜 프리미엄으로 회수" },
      { label: "Phase 3: Unilever 제안 가격", value: "주당 $50 (현금 $30.23 + KHC 주식 0.222주)", accent: true },
      { label: "Phase 3: Unilever 제안 규모", value: "약 $143B (CPG 사상 최대 시도)", accent: true },
      { label: "Phase 3: 자진 철수까지 소요", value: "공식 발표 후 [48시간] (2.17 금 → 2.19 일)", accent: true },
      { label: "후속: 2019.02 영업권 손상", value: "$15.4B (주로 Kraft·Oscar Mayer 브랜드 감액)", accent: true },
    ],
  },

  advisors: {
    body:
      "본 거래는 3단계 모두 별도의 자문 라인업이 구성됐다. Phase 1(Heinz LBO)은 Centerview + BofA(Heinz 측), Lazard + Wachtell(3G 측), 버크셔 인하우스. Phase 2(Kraft 합병)는 Lazard·Centerview·JP Morgan(Heinz·KHC 측), Cravath·Sullivan & Cromwell(법무). Phase 3(Unilever 제안)는 Citi·JP Morgan(KHC 측), Morgan Stanley·UBS·Goldman Sachs(Unilever 측). 버크셔는 3단계 모두 [외부 자문 없이 인하우스] 진행이라는 [버크셔 특유의 무자문 거래] 패턴 유지.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "3G Capital + Berkshire Hathaway → Kraft Heinz Company (3단계 인수자 측)",
        initials: "3G",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Lazard",
            role: "재무 자문 (Phase 1·2 메인)",
            roleType: "financial",
            note: "Heinz LBO 가격 책정 및 Kraft 합병 시너지 분석",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문 (Phase 1 메인)",
            roleType: "legal",
            note: "Heinz LBO 인수 계약 + 버크셔 우선주 구조 설계",
          },
          {
            firm: "Sullivan & Cromwell LLP",
            role: "법무 자문 (Phase 2 메인)",
            roleType: "legal",
            note: "Kraft 합병 계약 및 신설법인 KHC 거버넌스 설계",
          },
          {
            firm: "Cravath, Swaine & Moore LLP",
            role: "법무 자문 (Phase 2·3 공동)",
            roleType: "legal",
            note: "KHC 신설법인 법무 + Unilever 제안 자문",
          },
          {
            firm: "Citi (Citigroup)",
            role: "재무 자문 (Phase 3 메인)",
            roleType: "financial",
            note: "Unilever 제안의 자금 조달 구조 설계",
          },
          {
            firm: "JP Morgan",
            role: "재무 자문 (Phase 2·3 공동)",
            roleType: "financial",
            note: "Kraft 합병 자금 + Unilever 제안 자문",
          },
          {
            firm: "Berkshire Hathaway (인하우스)",
            role: "백기사 자금 (인하우스 협상)",
            roleType: "other",
            note: "3단계 모두 외부 자문 없이 워런 버핏 단독 협상, Phase 3에서 적대화 거부 결정",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "H.J. Heinz / Kraft Foods / Unilever (3단계 타깃 측)",
        initials: "ULVR",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Centerview Partners",
            role: "재무 자문 (Phase 1 Heinz 메인)",
            roleType: "financial",
            note: "Heinz의 LBO 가격 협상 및 주주 권고",
          },
          {
            firm: "Bank of America Merrill Lynch",
            role: "재무 자문 (Phase 1 Heinz)",
            roleType: "financial",
            note: "Heinz 측 부재무 자문",
          },
          {
            firm: "Davis Polk & Wardwell LLP",
            role: "법무 자문 (Phase 1 Heinz)",
            roleType: "legal",
            note: "Heinz 인수 계약 자문",
          },
          {
            firm: "Centerview Partners",
            role: "재무 자문 (Phase 2 Kraft 메인)",
            roleType: "financial",
            note: "Kraft 주주 권고 및 특별 배당 조건 협상",
          },
          {
            firm: "Morgan Stanley",
            role: "재무 자문 (Phase 3 Unilever 메인)",
            roleType: "financial",
            note: "Unilever의 KHC 제안 가치 분석 및 방어 자문",
          },
          {
            firm: "UBS",
            role: "재무 자문 (Phase 3 Unilever)",
            roleType: "financial",
            note: "Unilever 측 부재무 자문, 영국·네덜란드 자본시장 대응",
          },
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (Phase 3 Unilever)",
            roleType: "financial",
            note: "Unilever 측 미국 자본시장 대응 및 방어 메시징",
          },
          {
            firm: "Linklaters LLP",
            role: "법무 자문 (Phase 3 Unilever)",
            roleType: "legal",
            note: "Unilever 이사회 신탁의무 및 영국·네덜란드 법무 자문",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공시 자료, FT·WSJ·Reuters·Bloomberg 보도 기반. 일부 보조 자문사 누락 가능.",
  },

  valuation: {
    body:
      "본 4년 아크의 밸류에이션 핵심 변수는 [① Heinz LBO 진입 가격의 EV/EBITDA], [② Kraft 합병 시 신설법인 가치], [③ Unilever 제안의 EV/EBITDA], [④ 버크셔 9% 우선주의 NPV]이다. Heinz LBO 진입은 EV/EBITDA 약 12배(FY2013 EBITDA $2.5B 기준)로 CPG 평균(약 10배) 대비 약 +20% 프리미엄. Kraft 합병은 EV/EBITDA 약 14배로 시너지 프리미엄 포함. Unilever 제안($143B)은 EV/EBITDA 약 16배로 CPG 적대적 비드 사상 최고 수준이었다. 버크셔의 80억 달러 9% 우선주는 2013~2015년 동안 약 $14.4억의 누적 현금 배당 + 콜 시 $0.5B 콜 프리미엄 + 보통주 $8.5B → KHC 보통주 약 27%로 전환 시 평가가치 약 $20B(2015 합병 시점 기준)까지 도달. 단일 트랜치 사상 최고 수익률.",
    rows: [
      { item: "Phase 1: Heinz LBO 진입 EV", val: "$28B", note: "주당 $72.50 + 부채 $4.5B + LBO 부채 $14.6B", accent: true },
      { item: "Phase 1: 진입 EV/EBITDA", val: "약 12.0x", note: "FY2013 EBITDA 약 $2.5B 기준, CPG 평균(약 10배) 대비 +20%" },
      { item: "Phase 1: 인수 프리미엄", val: "+19%", note: "직전 30일 평균가 대비" },
      { item: "Phase 1: 버크셔 우선주 액면", val: "$8.0B", note: "9% 캐시 쿠폰, 미지급 시 ~9% PIK", accent: true },
      { item: "Phase 1: 버크셔 우선주 연간 배당", val: "$720M", note: "9% × $8B (현금)" },
      { item: "Phase 2: Kraft 합병 시 KHC 시총", val: "약 $100B", note: "2015.07 합병 종결 시점", accent: true },
      { item: "Phase 2: Kraft 주주 특별 배당", val: "$16.50/주", note: "Kraft 주주에게 현금 일시 지급" },
      { item: "Phase 2: 버크셔 우선주 콜 회수", val: "약 $8.32B + $0.5B 프리미엄", note: "Kraft 합병 시점 액면 + 콜 프리미엄" },
      { item: "Phase 3: Unilever 제안 가격", val: "$50/주", note: "현금 $30.23 + KHC 주식 0.222주", accent: true },
      { item: "Phase 3: Unilever 제안 총액", val: "약 $143B", note: "CPG 사상 최대 적대적 M&A 시도", accent: true },
      { item: "Phase 3: Unilever 제안 EV/EBITDA", val: "약 16.0x", note: "Unilever FY2016 EBITDA 약 $9B 기준" },
      { item: "Phase 3: 자진 철수까지 소요", val: "48시간", note: "공식 발표 후 정확히 48시간 (2.17 → 2.19)" },
      { item: "후속: KHC 주가 변동 (2017.02 고점 → 2019.04 저점)", val: "$96 → $32", note: "약 -67%, 2년 만의 폭락", accent: true },
      { item: "후속: KHC 영업권 손상 (2019.02)", val: "$15.4B", note: "주로 Kraft·Oscar Mayer 브랜드 감액" },
      { item: "버크셔 우선주 누적 현금 배당 (2013~2015)", val: "약 $2.9B", note: "$720M × 4년 + 콜 프리미엄 $0.5B = ~$3.4B 총 회수", accent: true },
    ],
    disclaimer:
      "주: EV/EBITDA 추정은 각 시점 공시 EBITDA 기준. Unilever 제안 EV/EBITDA는 Unilever FY2016 EBITDA $9B 기준 추정치. 시점에 따라 시장 자료 간 차이 가능.",
  },

  rationale: {
    buyer: {
      title: "3G와 버크셔, 왜 4년 아크였나",
      initials: "3G",
      bg: "bg-red-700",
      points: [
        "[3G: ZBB 플랫폼의 CPG 확장] AB InBev·Burger King에서 검증된 ZBB 모델을 가장 큰 단일 매출 풀(글로벌 CPG)에 적용하는 전략. Heinz $11.6B 매출 → Kraft 합병 후 약 $27B → Unilever 합병 가정 시 약 $80B+의 매출 풀에 ZBB를 이식하면 EBITDA 마진을 +5~10%p 끌어올려 수십억 달러 EBITDA 창출 가능",
        "[3G: 다단계 LBO·합병의 자본 재활용] Heinz LBO 자본을 회수 → Kraft 합병으로 시가총액 확대 → 그 시가총액을 활용해 Unilever 합병이라는 [3단 자본 레버리지]. 한 번의 자본 동원으로 점차 더 큰 거래를 만드는 PE 식 [플랫폼 전략]의 극단",
        "[버크셔: 9% 영구 우선주의 단일 트랜치 최고 수익률] 2013~2015년 동안 연간 $720M 현금 쿠폰 + 콜 시점 $0.5B 프리미엄 = 약 $3.4B 총 회수. 자기자본 비례 IRR 약 12%+ 추정. 버크셔 보험 플로트 운용 사상 [단일 트랜치 최고 수익]으로 평가",
        "[버크셔: 보통주 26~27% 보유로 사실상 대주주 등극] 우선주 콜 회수 후에도 KHC 보통주 약 26~27%를 유지. 글로벌 식품기업 단일 대주주 지위 + 안정적 배당 흐름 확보 (KHC가 2018년 배당 삭감 전까지)",
        "[3G: Heinz LBO의 EBITDA 확장 성공] FY2013 EBITDA $2.5B → FY2015 EBITDA $3.8B (약 +52%) 단기 확장. EBITDA 마진 22%대 → 28%대로 확대. ZBB의 단기 실행력은 검증됐다",
        "[Unilever 가정 시너지 추정 $5B+] KHC가 공개한 합병 시너지 추정치는 약 $5B(매출 $2B + 비용 $3B)였다. Unilever의 글로벌 유통망 + KHC의 ZBB 모델 결합 시 합산 EBITDA 마진을 약 +400bp 확대 가능했다는 시나리오",
      ],
    },
    seller: {
      title: "Heinz·Kraft·Unilever, 왜 다른 길을 갔나",
      initials: "ULVR",
      bg: "bg-blue-700",
      points: [
        "[Heinz 주주: +19% 프리미엄 + 즉시 현금] 2013년 LBO 시점 Heinz 주가는 약 $60.48, $72.50 LBO 제안은 +19% 프리미엄으로 [즉시 현금 회수]. 이사회는 만장일치 승인, 주주 투표 96% 찬성. CPG 메이저 LBO 사상 최대 규모이자 가장 부드러운 거래",
        "[Kraft 주주: $16.50 특별 배당 + 신설법인 49% 지분] Kraft Foods Group 주주는 합병 시 주당 $16.50의 일시 현금 + KHC 신설법인 49% 지분이라는 [현금 + 업사이드] 패키지. 시너지 약 $1.5B/년이 KHC 주가 상승으로 환원되는 구조",
        "[Unilever: 적대적 M&A 거부의 글로벌 표준 사례 확립] Polman의 48시간 만의 거부는 CPG 적대적 M&A 방어의 글로벌 표준 사례가 됐다. 이후 P&G·Mondelez·Nestle 모두 [이사회 만장일치 + ESG 프레이밍 + 정부 개입]의 3대 도구를 방어 매뉴얼로 채택",
        "[Unilever 주주: 방어 후 자체 구조조정으로 +20% 회복] 방어 직후 영업이익률 목표 20% 상향 + 마가린 사업 KKR에 $80억 매각으로 12개월간 주가 +20% 회복. [\"공격을 받지 않도록 스스로 마진을 끌어올린다\"]는 사후 정당화의 모범",
        "[Polman의 ESG 정당화 자본] 2010년부터 추진한 [Sustainable Living Plan]이 ESG 경영의 글로벌 아이콘으로 자리잡은 덕에, 적대적 M&A 거부에 대한 기관 투자자·미디어·정부의 즉각 지지를 확보. ESG 평판이 [방어 자본]으로 작동한 드문 사례",
        "[Mondelez(분사 효과)의 간접 수혜] 2012년 Kraft Foods 분사로 탄생한 Mondelez(스낵 사업)는 본 거래에 비참여했으나, [전 Kraft 자산을 둘로 나눈 분사]가 CPG M&A의 [모든 자산이 하나로 묶이지 않게 한] 구조적 보호망 역할",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body:
      "거래 종결 4년 아크가 끝난 지 약 9년이 지난 2026년 시점에서 본 4단계 아크의 평가는 [세 주체 모두에게 다른 결말]을 만들었다. ① 3G Capital은 ZBB 모델의 한계를 가장 큰 무대(KHC)에서 검증당했고, 2018~2023년에 걸쳐 보유 지분을 단계적으로 매각, 2023년 시점 KHC 보통주 보유는 약 5% 미만으로 축소. Jorge Paulo Lemann은 2019년 [\"우리는 ZBB가 어디까지 작동하는지 한계를 봤다\"]는 이례적 자기비판을 공개 발표. ② 버크셔는 우선주 회수로 단일 트랜치 사상 최고 수익을 거뒀고, 보통주 약 26%를 유지하며 [장기 대주주 + 안정 배당 수령자] 지위를 유지. 다만 2018년 KHC가 배당을 36% 삭감한 후 보통주 평가손이 누적, 2024~2025년 시점 보통주 평가는 입장 대비 약 -30%. ③ Unilever는 방어 후 12개월간 주가 +20% 회복, Paul Polman 2019.01 명예 퇴임, 후임 Alan Jope·Hein Schumacher 체제에서 [차·아이스크림 사업 분사]를 추진해 2025년 분사 종결. KHC 주가는 2024~2025년 $30~35대에 머물러 2017.02 고점의 약 3분의 1 수준. ZBB 모델은 CPG에서 사실상 사망 선고를 받은 것으로 평가되며, 2024년 이후 PE 펀드들의 메가 CPG LBO는 자취를 감췄다.",
    overallVerdict:
      "전술적 성공(Heinz LBO·Kraft 합병)에서 전략적 실패(Unilever 좌초·KHC 폭락)로의 4년 아크 — 그러나 진짜 승자는 [버크셔 단일 트랜치 우선주]와 [Unilever의 만장일치 방어]",
    positives: [
      "[3G+버크셔] Heinz LBO 자체의 EBITDA 확장 성공 (마진 22% → 28%대), 2013~2015년 단기 실행력 검증",
      "[버크셔] 9% 영구 우선주 약 $3.4B 회수 (배당 $2.9B + 콜 프리미엄 $0.5B), 단일 트랜치 사상 최고 수익률",
      "[Unilever] 48시간 만의 만장일치 방어 + ESG 프레이밍 + 정부 개입의 3대 도구로 CPG 적대적 방어 글로벌 표준 확립",
      "[Unilever] 방어 후 자체 구조조정으로 영업이익률 20% 목표 조기 달성, 12개월간 주가 +20% 회복",
      "[버핏] [\"적대적 M&A 비참여\"] 원칙을 가장 큰 무대에서 직접 실행, 평판 자본 강화",
    ],
    risks: [
      "[KHC] 2019.02 영업권 손상 $15.4B + SEC 조사 + 주가 -67% 폭락, ZBB 모델의 장기 브랜드 파괴 효과 사후 검증",
      "[3G] ZBB 모델이 CPG에서 사실상 사망 선고, Lemann의 자기비판 공개, 2018~2023년 KHC 지분 단계적 매각",
      "[버크셔] 보통주 26% 보유분의 2018년 이후 평가손, 2024~2025년 시점 입장 대비 약 -30%",
      "[CPG 산업] 적대적 메가 M&A 자체가 사실상 종결, 2017년 이후 P&G·Nestle·Mondelez 모두 소형 인수 위주로 회귀",
      "[3G 후속 펀드] ZBB 평판 손상으로 후속 자본 모집 난항, 2020년대 신규 메가 LBO 부재",
    ],
    editorNote:
      "이 4년 아크의 진짜 의미는 [\"3G의 ZBB가 어디서 멈췄나\"]에 있다. AB InBev → Burger King → Heinz까지는 [작은~중간 규모의 비효율 기업에 ZBB 적용 → EBITDA 확장]이라는 단선적 공식이 작동했다. 그러나 Kraft 합병으로 매출이 두 배로 늘어난 시점부터 [브랜드 자산 = 마케팅 투자의 누적]이라는 CPG의 근본 공식이 ZBB와 충돌했다. Unilever 제안의 좌초는 단순한 [거부]가 아니라 [같은 자본가(버크셔)가 ZBB 모델의 한계를 인지하고 적대화를 거부한 사건]이었다. 워런 버핏의 85분 미팅(2019 OXY)이 [백기사 금융의 자본 동원력]을 보여줬다면, 본 거래의 [Polman 전화 한 통]은 [자본 동맹 철회의 결정력]을 보여줬다. 같은 자본가가 같은 도구(자본 동원·철회)로 정반대 결과(딜 성사·딜 종결)를 만든 매우 드문 케이스. 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "3G",
    acquirerBg: "bg-red-700",
    targetInitials: "ULVR",
    targetBg: "bg-blue-700",
    acquirerName: "3G Capital + Berkshire Hathaway → The Kraft Heinz Company",
    targetName: "H.J. Heinz → Kraft Foods → Unilever plc/NV (Phase 3 좌초)",
    dealTitle: "Heinz LBO → Kraft 합병 → Unilever 48시간 자진 철수 (2013-2017 아크)",
    dealSize: "$28B(Heinz) / $46B(Kraft 합병 신설법인) / $143B(Unilever 좌초)",
    dealSizeUSD: "USD 28B / 46B / 143B (3-phase arc)",
    evEbitda: "12.0x(Heinz) / 14.0x(Kraft) / 16.0x(Unilever 제안)",
    closeDate: "Feb 19, 2017 (Unilever 철수, 4년 아크 종결)",
  },

  sources: [
    {
      id: 1,
      text: "Heinz & 3G Capital / Berkshire Hathaway joint press release, Berkshire Hathaway and 3G Capital Complete Acquisition of H.J. Heinz Company (Jun 7, 2013)",
      url: "https://www.berkshirehathaway.com/news/jun0713.pdf",
    },
    {
      id: 2,
      text: "Kraft Foods Group & H.J. Heinz Company joint press release, Kraft and Heinz to Combine in Transaction Forming The Kraft Heinz Company (Mar 25, 2015)",
      url: "https://news.kraftheinzcompany.com/press-release/finance/kraft-foods-group-and-h-j-heinz-company-create-kraft-heinz-company",
    },
    {
      id: 3,
      text: "Kraft Heinz press release, Kraft Heinz Withdraws Proposal for Combination with Unilever (Feb 19, 2017)",
      url: "https://news.kraftheinzcompany.com/press-release/finance/kraft-heinz-withdraws-proposal-combination-unilever",
    },
    {
      id: 4,
      text: "Unilever press release, Statement Regarding Approach from Kraft Heinz (Feb 17, 2017)",
      url: "https://www.unilever.com/news/press-releases/2017/statement-regarding-approach-from-kraft-heinz.html",
    },
    {
      id: 5,
      text: "Kraft Heinz SEC 10-K filing, Goodwill and Intangible Asset Impairment of $15.4 Billion (Feb 22, 2019)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001637459&type=10-K",
    },
    {
      id: 6,
      text: "Financial Times, How Kraft Heinz fumbled the Unilever bid in 48 hours (Feb 20, 2017)",
      url: "https://www.ft.com/content/kraft-heinz-unilever-48-hour",
    },
    {
      id: 7,
      text: "Wall Street Journal, Inside the 48-Hour Collapse of Kraft Heinz's $143 Billion Bid for Unilever (Feb 2017)",
      url: "https://www.wsj.com/articles/inside-the-48-hour-collapse-of-kraft-heinz-bid",
    },
    {
      id: 8,
      text: "Bloomberg, 3G Capital, Berkshire and the Limits of Zero-Based Budgeting (Aug 2019)",
      url: "https://www.bloomberg.com/news/articles/3g-berkshire-zero-based-budgeting-limits",
    },
    {
      id: 9,
      text: "Berkshire Hathaway Annual Letter to Shareholders, discussion of Kraft Heinz position and goodwill impairment (Feb 2019)",
      url: "https://www.berkshirehathaway.com/letters/2018ltr.pdf",
    },
    {
      id: 10,
      text: "Andrew Ross Sorkin, The Anatomy of a 48-Hour Hostile Takeover That Wasn't (The New York Times DealBook, Feb 2017)",
      url: "https://www.nytimes.com/2017/02/dealbook/kraft-heinz-unilever-anatomy",
    },
  ],

  seo: {
    title: "Heinz LBO에서 Unilever 좌초까지, 3G·버크셔의 4년 아크와 ZBB의 한계 [2013-2017]",
    description:
      "2013년 3G+버크셔의 280억 달러 Heinz LBO, 9% 영구 우선주 백기사 자금, 2015년 Kraft 합병으로 KHC 탄생, 2017년 1,430억 달러 Unilever 제안의 48시간 자진 철수까지. ZBB 모델의 한계와 154억 달러 영업권 손상의 사후 검증. CPG 적대적 M&A의 글로벌 교과서.",
    keywords: [
      "Heinz LBO",
      "Kraft Heinz",
      "KHC",
      "3G Capital",
      "버크셔 해서웨이",
      "Berkshire Hathaway",
      "워런 버핏",
      "Warren Buffett",
      "Jorge Paulo Lemann",
      "Unilever",
      "Paul Polman",
      "ZBB",
      "제로기반예산",
      "Zero-Based Budgeting",
      "영구 우선주",
      "백기사 금융",
      "적대적 M&A",
      "48시간 철수",
      "영업권 손상",
      "Goodwill Impairment",
      "CPG 통합",
      "소비재 M&A",
    ],
  },

  concepts: [
    {
      term: "제로기반예산 (Zero-Based Budgeting, ZBB)",
      href: "/deal-101/lbo-overview",
      description:
        "모든 비용 항목을 전년도 실적 기준이 아닌 '0'에서 재심사해 정당화해야 하는 예산 편성 방식. 3G Capital이 AB InBev·Burger King·Heinz·Kraft Heinz에 적용해 단기 EBITDA 마진을 5~10%p 끌어올렸다. Heinz 진입 시 22% → 28%대 확장. 그러나 Kraft 합병 후 브랜드 투자 부재로 2019년 KHC 영업권 손상 $15.4B의 원인이 됐다는 사후 평가가 굳어지면서 CPG에서 사실상 사망 선고.",
    },
    {
      term: "전략적 인수자 + 스폰서 결합 (Strategic Acquirer + Sponsor Combo)",
      href: "/deal-101/lbo-overview",
      description:
        "전통적 전략 인수자(Berkshire)와 PE 스폰서(3G Capital)가 공동으로 인수하는 하이브리드 구조. 버크셔는 자본만 제공하고 일상 운영은 3G가 담당. 2013 Heinz LBO에서 표준 사례가 됐고, 2019 OXY-Anadarko의 백기사 금융 구조의 직접 원형. 보험 플로트라는 [장기 무이자 부채]를 가진 자본가만 시도 가능한 구조.",
    },
    {
      term: "영구 우선주 백기사 금융 (Preferred Equity White-Knight Financing)",
      description:
        "만기 없는 우선주를 발행해 [부채에 후순위·보통주에 우선] 위치에서 자금을 조달하는 백기사 형태. 버크셔의 Heinz 9% $8B 우선주(2013), OXY 8% $10B 우선주(2019)가 표준 사례. 발행사 신용에 부담을 주지 않으면서 안정적 현금 쿠폰을 제공, 워런트나 보통주 옵션이 결합되면 비대칭 수익 구조 완성.",
    },
    {
      term: "CPG 적대적 M&A의 한계 (Hostile M&A in CPG)",
      description:
        "소비재 산업에서 적대적 메가 M&A가 구조적으로 어려운 이유. ① 브랜드 가치 = 마케팅 투자 누적이라 비용 절감 시 즉시 평가가치 손상, ② 글로벌 유통망 의존성 = 협력사 관계 단절 리스크, ③ 다국적 본사 구조 = 정부 개입 잠재력. 2017 KHC-Unilever 좌초 이후 CPG 적대적 메가 M&A는 사실상 종결.",
    },
    {
      term: "48시간 자진 철수 (48-Hour Voluntary Withdrawal)",
      description:
        "공식 적대적 M&A 제안이 발표 후 단 48시간 내에 자진 철수된 매우 드문 사례. 2017.02.17 KHC가 Unilever에 $143B 제안 → 02.19 일요일 저녁 자진 철수. CPG 적대적 M&A 사상 가장 빠른 종결. 핵심 변수는 [이사회 만장일치 거부 + 정부 개입 + 자본 동맹(버크셔) 철회]의 3중 결합.",
    },
    {
      term: "영업권 손상 폭포 (Goodwill Impairment Cascade)",
      href: "/deal-101/ma-process",
      description:
        "대형 M&A 합병에서 인수 프리미엄으로 계상된 영업권이 합병 후 현금흐름 부진으로 [한 번에 대규모 감액]되는 회계 처리. KHC가 2019.02 $15.4B 영업권 손상을 발표하며 NYSE 사상 최대 단일 분기 손상 중 하나가 됐다. 주로 Kraft·Oscar Mayer 브랜드 가치의 ZBB 후 단기 회복 실패가 원인.",
    },
    {
      term: "브랜드 자산 파괴 (Brand Equity Destruction)",
      description:
        "PE식 비용 절감(특히 마케팅·R&D 삭감)이 CPG 기업의 브랜드 자산을 장기적으로 훼손하는 메커니즘. 마케팅 투자 = 소비자 인지·신뢰의 [누적 자산]이며, 1~2년의 삭감이 3~5년 후 매출 둔화 + 시장 점유율 하락 + 영업권 손상으로 폭발. KHC가 그 사후 검증 사례.",
    },
    {
      term: "버핏의 적대적 M&A 비참여 원칙 (Buffett's Hostile Aversion)",
      description:
        "워런 버핏이 평생 견지한 [\"버크셔는 적대적 M&A에 참여하지 않는다\"]는 원칙. 2017.02.19 Polman과의 직접 전화에서 이 원칙을 명확히 전달, KHC-3G 단독 자금 조달 불가능 → 거래 자진 철수의 직접 원인이 됐다. [공격자 측 자본가가 공격을 종결시킨] 매우 드문 사례이며, 버크셔 평판 자본의 결정적 일관성을 보여준 케이스.",
    },
  ],

  faq: [
    {
      q: "왜 버크셔는 Heinz LBO에 80억 달러 영구 우선주를 단독 인수했나요?",
      a: "공식 설명은 [\"Heinz의 브랜드 자산이 매력적이고, 9% 영구 우선주는 버크셔 보험 플로트에 안정적 장기 수익원이며, 3G의 운영 능력에 대한 신뢰가 있다\"]는 것입니다. 시장 해석은 더 구조적입니다. ① 버크셔 보험 플로트 약 770억 달러(2013 기준)의 운용처 부족, ② 9% 캐시 쿠폰은 사실상 영구 채권에 가까운 안정 수익 ($720M/년 현금), ③ 부채에 후순위·보통주에 우선이라 신용 리스크가 제한적, ④ Kraft 합병 시 콜 회수로 약 $0.5B 콜 프리미엄 추가, ⑤ 보통주 약 26%로 사실상 대주주 등극의 발판. 결과적으로 단일 트랜치 사상 최고 수익 ($3.4B 총 회수)을 거뒀습니다.",
    },
    {
      q: "왜 KHC가 단 48시간 만에 Unilever 제안을 자진 철수했나요?",
      a: "결정적 변수는 [버크셔의 자본 동맹 철회]입니다. 2017.02.18 Polman 이사회의 만장일치 거부 발표 후, 02.19 일요일 오전 워런 버핏이 직접 Polman에게 전화해 [\"버크셔는 평생 적대적 M&A에 참여하지 않으며, Unilever 이사회 반대가 명확한 이상 계속하지 않는다\"]는 입장을 전달했습니다. KHC와 3G만으로는 $143B 자금 조달이 불가능했기 때문에, 버크셔의 철회 = 사실상 거래 종결이었습니다. 추가 변수는 ① 영국·네덜란드 양국 정부의 비공식 반대 의사, ② Polman의 ESG 프레이밍이 기관 투자자·미디어 모두에게 즉각 우호적으로 작동, ③ 가격 인상 시 KHC 주식 비중이 더 커져 ZBB 우려가 더 강화될 역설. 세 요인이 결합돼 48시간 만에 종결됐습니다.",
    },
    {
      q: "3G의 ZBB 모델이 왜 Heinz에서는 성공했고 Kraft Heinz에서는 실패했나요?",
      a: "핵심 차이는 [매출 풀의 규모와 브랜드 자산 비중]입니다. Heinz 단독(매출 $11.6B) 시점에는 비용 구조가 비교적 단순했고, 케첩이라는 단일 카테고리 중심으로 ZBB가 작동했습니다. EBITDA 마진 22% → 28%대로 확장. 그러나 Kraft 합병으로 매출이 $27B로 두 배가 되고 브랜드 수가 200개 이상으로 늘어나면서 [브랜드별 마케팅 투자 누적 = 소비자 신뢰]라는 CPG의 근본 공식이 ZBB와 정면 충돌했습니다. Oscar Mayer·Kraft Cheese·Maxwell House 등 핵심 브랜드의 마케팅 투자 삭감이 3~5년 누적되며 2019년 $15.4B 영업권 손상으로 폭발. ZBB는 [작은 단일 브랜드 비효율 기업]에는 작동하지만 [거대한 다중 브랜드 포트폴리오]에는 역효과를 낸다는 점이 검증됐습니다.",
    },
    {
      q: "Unilever의 Paul Polman 방어 전략이 왜 그렇게 효과적이었나요?",
      a: "Polman의 방어는 [네 가지 도구의 동시 활용]이었습니다. ① [속도]: 발표 다음 날(2.18 토)에 이미 이사회 만장일치 거부를 공표, 주주들이 동요할 시간 자체를 없앴습니다. ② [ESG 프레이밍]: 10년간 추진한 [Sustainable Living Plan]을 [3G ZBB와 양립 불가능]이라는 내러티브로 활용, 기관 투자자·미디어 모두에게 즉각 우호 환경을 만들었습니다. ③ [정부 개입 유도]: Unilever의 영국·네덜란드 이중 본사 구조가 양국 정부 모두를 잠재적 거부권 보유자로 만들었습니다. ④ [버크셔 신호 활용]: 워런 버핏의 [적대적 M&A 비참여] 원칙을 알고 있었기 때문에, 명확한 거부 입장을 공표함으로써 버크셔의 자본 동맹 철회를 유도했습니다. 사후적으로 [\"공격을 받지 않도록 스스로 마진을 끌어올린다\"]는 자체 구조조정으로 12개월간 주가 +20%까지 만들어 방어의 정당성을 입증했습니다.",
    },
    {
      q: "2019년 KHC의 154억 달러 영업권 손상은 어떤 의미였나요?",
      a: "이 손상은 [ZBB 모델의 CPG 적용 실패에 대한 사후 검증]이라는 의미입니다. 회계적으로는 Kraft·Oscar Mayer 등 핵심 브랜드의 [예상 미래 현금흐름]이 합병 시 추정한 값보다 현저히 낮게 나오면서 [영업권 + 무형자산]을 한 번에 감액한 것입니다. 시장 함의는 더 구조적입니다. ① KHC 주가는 2017.02 고점 $96에서 2019.04 $32로 약 -67% 폭락, ② SEC가 회계 처리 적정성에 대한 조사 개시, ③ 3G Capital은 2019년 [\"우리는 ZBB가 어디까지 작동하는지 한계를 봤다\"]는 이례적 자기비판 공개, ④ 버크셔는 보통주 평가손을 인정하고 [Kraft Heinz는 우리가 비싸게 산 회사]라고 워런 버핏이 2019년 연차 서한에 직접 표기. 이후 PE 펀드들의 메가 CPG LBO는 자취를 감췄고, P&G·Nestle·Mondelez 모두 소형 인수 전략으로 회귀했습니다.",
    },
    {
      q: "이 4년 아크가 향후 CPG M&A 방어 전략에 어떤 영향을 줬나요?",
      a: "본 4년 아크 — 특히 Phase 3(Unilever 좌초)는 [CPG 적대적 메가 M&A 방어의 글로벌 표준 매뉴얼]을 만들었습니다. 이후 CPG 메이저들은 다음 3대 도구를 방어 표준으로 채택했습니다. ① [이사회 만장일치 + 24시간 내 공개 거부]: P&G·Mondelez·Nestle 모두 이사회 결의 후 다음 거래일 공표를 표준화. ② [ESG 프레이밍의 사전 자본화]: 평소 ESG 평판 자본을 쌓아두면 적대적 공격 시 [브랜드 파괴 우려]라는 내러티브를 즉시 가동 가능. ③ [다국적 본사 구조의 정부 개입 유도]: Unilever의 이중 본사가 양국 정부를 잠재적 거부권 보유자로 만든 효과. 결과적으로 2017년 이후 CPG에서 $50B+ 적대적 M&A 시도는 사실상 사라졌고, M&A는 [① 우호적 합의 합병, ② 소형 인디 브랜드 인수, ③ 비핵심 자산 매각]의 3대 형태로 정리됐습니다. 본 사건은 [방어자의 완승이 산업 전체의 M&A 패턴을 바꾼] 매우 드문 케이스입니다.",
    },
  ],
};

export default deal;
