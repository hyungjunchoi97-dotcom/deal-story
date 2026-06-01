/**
 * Sanofi × Genzyme $20.1B + CVR, 2011년 2월 발표 / 2011년 4월 클로징
 * 메가 제약 M&A 최초의 상장 CVR(GCVRZ), Lemtrada 마일스톤 트랜치 5단계의 원형 구조.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "sanofi-genzyme-cvr",
  title: "Sanofi가 Genzyme을 $20.1B + CVR로 사들인 방법, 메가 제약 M&A 최초의 상장 CVR이 남긴 9년의 기록",
  subtitle:
    "Sanofi의 Genzyme 인수 · $74 현금 + 1 CVR · Lemtrada 5단계 마일스톤 + Cerezyme 생산 회복 · NASDAQ 상장 CVR(GCVRZ) · 최대 $11 옵션이 약 $2로 끝난 트랜치형 CVR의 원형",
  category: "ma",
  industry: "Pharmaceuticals / Biotech / Rare Disease",
  country: "프랑스/미국",
  announcedAt: "2011-02-16",
  closedAt: "2011-04-08",
  announcedDisplay: "2011년 2월 16일 (합병계약 발표)",
  closedDisplay: "2011년 4월 8일 (공개매수 + 후속 합병 클로징)",
  readingMinutes: 16,
  tags: [
    "Sanofi",
    "Genzyme",
    "CVR",
    "Contingent Value Right",
    "GCVRZ",
    "Lemtrada",
    "Alemtuzumab",
    "Cerezyme",
    "Fabrazyme",
    "Henri Termeer",
    "Carl Icahn",
    "Pharma M&A",
    "Mega CVR",
    "Listed CVR",
    "Milestone Tranche",
  ],
  excerpt:
    "2011년 2월 16일 Sanofi-aventis가 Genzyme을 1주당 $74 현금 + CVR 1개, 총 약 $20.1B에 인수한다고 발표했다. 약 9개월의 거친 협상 끝에 도달한 [메가 제약 M&A 최초의 상장 CVR] 구조였다. CVR은 NASDAQ에 [GCVRZ] 종목코드로 상장돼 자유롭게 거래됐고, Genzyme의 [Cerezyme/Fabrazyme 생산 회복 + Lemtrada(alemtuzumab) MS 신약의 FDA 승인 + 4단계 매출 마일스톤], 총 5개의 [독립 트랜치]로 설계됐다, 한 개라도 달성하면 해당 트랜치는 지급, 8년 후 BMS-Celgene이 채택한 all-or-nothing 구조와 정반대다. 2020년 12월 만기까지 실제로 지급된 금액은 1 CVR당 약 $2, 최대치 약 $11의 약 18% 수준. Lemtrada 매출이 한 번도 연 $400M을 넘지 못했고 2018~2019년 EMA·FDA 안전성 규제까지 더해지면서 매출 마일스톤은 모두 미달, Sanofi는 이론적 최대치 대비 수십억 달러를 절감했다. 후속 CVR 분쟁은 $315M 합의로 마무리됐고, 이 구조는 이후 모든 트랜치형 CVR 거래의 원형이 됐다.",

  acquirer: { initials: "SNY", bg: "bg-violet-700", label: "Sanofi-aventis (NYSE: SNY)" },
  target: { initials: "GENZ", bg: "bg-emerald-600", label: "Genzyme Corporation (구 NASDAQ: GENZ)" },

  background: [
    "Genzyme은 1981년 매사추세츠 캠브리지에서 설립된 [희귀질환 효소대체요법(ERT)] 분야의 글로벌 1위 바이오텍이었다. 핵심 자산은 고셔병 치료제 [Cerezyme(이미글루세라제)], 파브리병 치료제 [Fabrazyme(아갈시다제 베타)], 폼페병 치료제 [Myozyme/Lumizyme(알글루코시다제 알파)], 그리고 인 결합제 [Renvela]. 2008년 매출 약 $4.6B, 영업이익 약 $1.0B, 시가총액 한때 $20B을 넘긴 미국 바이오텍 [Big-4](Amgen·Genentech·Celgene과 함께)의 일원. 1985년 상장한 헨리 터미어(Henri Termeer) CEO가 25년 가까이 회사를 이끌면서 [희귀질환 = 고가 = 평생 처방] 비즈니스 모델을 미국 바이오텍 산업에 정착시킨 인물이었다.",
    "[2009년 Allston 사태가 모든 것의 출발점.] 2009년 6월 매사추세츠 보스턴 인근의 [Allston Landing 제조시설]에서 [비루스 오염(Vesivirus 2117)]이 적발돼 FDA가 시설을 폐쇄시켰다. Cerezyme·Fabrazyme의 글로벌 공급이 한순간에 끊겼고, Genzyme은 환자에게 [Cerezyme 정상량의 약 50%, Fabrazyme 정상량의 약 30%]만 출하해야 했다. 일부 파브리병 환자는 감량 투여 중 질환이 악화됐고, 미국·유럽 환자 단체의 분노가 정치적 압박으로 이어졌다. 2009~2010년 누적 매출 손실은 [수억 달러] 수준, FDA는 2010년 5월 약 [$175M의 동의명령(Consent Decree)] 형태의 벌금·감독 비용을 부과했다. 한때 $80을 넘던 Genzyme 주가는 2010년 중반 $50 안팎까지 추락했다. [이 취약점이 Sanofi가 협상 테이블에 앉을 수 있게 만든 결정적 사건이다.]",
    "[Sanofi의 적대적 접근, 2010년 7~10월.] Sanofi의 크리스 비에바허(Chris Viehbacher) CEO는 2010년 7월 29일 터미어 CEO에게 [1주당 $69 현금 비공개 인수 제안] 서한을 보냈다. 7월 1일 미영향 주가 $49.86 대비 +38% 프리미엄. 터미어는 즉시 거절. Sanofi는 가격을 [$80]까지 올렸으나 터미어는 \"Lemtrada(alemtuzumab MS) 파이프라인 가치를 전혀 반영하지 않은 가격\"이라며 재차 거절. 2010년 10월 4일 Sanofi는 $69 현금 [적대적 공개매수(Tender Offer)]를 직접 개시했다, 미국 메가 제약 M&A 사상 드문 적대적 액션. 헤지펀드 거물 [칼 아이칸(Carl Icahn)]은 이미 2010년 봄 약 5% 지분으로 Genzyme 이사회에 자기 사람 두 명을 진입시킨 상태였고, [\"가격을 더 받아야 한다\"]는 입장에서 터미어와 보조를 맞춰 협상력을 강화시켰다.",
    "[CVR이라는 다리, 2011년 2월 16일.] 4개월의 공개매수·반대 캠페인·실사 공방 끝에 양측은 [현금 인수가는 $74로 동결하되, Lemtrada 가치에 대한 견해 차이는 CVR로 메운다]는 합의에 도달했다. Sanofi 입장에서는 \"Lemtrada가 정말 블록버스터가 되면 추가로 지급한다\"는 옵션 구조라 다운사이드 보호, Genzyme 주주 입장에서는 \"Lemtrada가 성공 시 추가 회수\" 옵션 보존. CVR은 [Cerezyme/Fabrazyme 생산 회복 1개 + Lemtrada FDA 승인 1개 + Lemtrada 매출 3단계, 총 5개의 독립 트랜치]로 설계됐다, 각 트랜치는 [독립적으로] 지급된다. 한 개를 달성하지 못해도 다른 트랜치 지급의무에 영향이 없다. 이 [독립 트랜치 구조]가 8년 뒤 BMS-Celgene의 all-or-nothing 구조와 정반대 방향의 설계로, 이후 트랜치형 CVR의 표준 원형이 됐다.",
    "[공개매수·합병 클로징, 2011년 4월 8일.] 합의된 가격은 1주당 $74 현금 + 1 CVR, 총 거래가치는 약 $20.1B(Genzyme 약 2.72억 주 × $74). Sanofi는 [현금 공개매수(Cash Tender Offer)] 방식으로 발행주식 과반을 매집한 뒤 [백엔드 후속 합병(short-form merger)]으로 잔여 주주를 강제 매수했고, 거래는 2011년 4월 8일 클로징됐다. CVR 약 2.72억 개가 발행돼 2011년 4월 NASDAQ에 [GCVRZ] 종목코드로 상장, 자유롭게 거래되기 시작했다. Sanofi 자문은 Evercore·J.P. Morgan, 법률은 Weil, Gotshal & Manges. Genzyme 자문은 Goldman Sachs·Credit Suisse, 법률은 Ropes & Gray + Wachtell, Lipton(독립이사 전용). 거래 자체는 그렇게 클로징됐지만, CVR의 진짜 이야기는 그 후 9년에 걸쳐 펼쳐졌다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 $20.1B 현금 + CVR (이론적 최대 약 +$3B)",
    acquirerName: "Sanofi-aventis (NYSE: SNY, 현 Sanofi S.A.)",
    targetName: "Genzyme Corporation (구 NASDAQ: GENZ)",
    announcedDisplay: "2011년 2월 16일",
    closedDisplay: "2011년 4월 8일",
    country: "FR / US",
  },

  executiveSummary: [
    "[$20.1B 현금 + 상장 CVR] Sanofi-aventis가 Genzyme을 1주당 $74 현금 + CVR 1개에 인수, 총 거래가치 약 $20.1B (2011-02-16 발표, 2011-04-08 클로징)",
    "[5개 독립 트랜치 CVR] ① Cerezyme/Fabrazyme 2011년 생산 회복 $1 ② Lemtrada FDA 승인(2014-03-31 기한) $1 ③ Lemtrada 연 매출 $400M 이상 $2 ④ 누적 매출 $1.8B 이상 $3 ⑤ 누적 매출 $2.3B(또는 $2.8B 변동, SEC 문서별 표기 차이) 이상 $4, [트랜치 독립 지급] 이론적 최대 약 $11/CVR",
    "[NASDAQ 상장 CVR] 2011년 4월 NASDAQ에 [GCVRZ] 종목코드로 상장돼 약 2.72억 개가 자유롭게 거래, 메가 제약 M&A 사상 최초의 [거래 가능한 listed CVR]. 상장 시점 평가 가치 약 $5~$7/CVR",
    "[독립 트랜치 = BMS-Celgene 대비 반대 방향] 5개 마일스톤 중 한 개라도 달성하면 해당 트랜치는 지급, 8년 후 BMS-Celgene이 채택한 all-or-nothing 구조와 정반대. 이 [독립 트랜치 모델]이 이후 모든 트랜치형 CVR 거래의 원형이 됨",
    "[실제 지급액 약 $2/CVR로 종료] Cerezyme 생산 회복 ✅(달성), Lemtrada FDA 승인 ✅(2014-11 우여곡절 끝에 달성), 매출 마일스톤 3개 모두 ❌(미달). 2020년 12월 만기까지 약 [$2/CVR]만 지급, 이론적 최대 약 $11 대비 약 [18%]",
    "[Lemtrada가 블록버스터가 되지 못한 이유] 2018~2019년 EMA·FDA가 심각한 [심혈관계·자가면역 부작용]을 이유로 [신규 처방을 [기존 치료제 실패 후 3차 치료]로 제한]. 매출은 한 번도 연 $400M을 넘지 못함, 누적 매출 약 $500M 수준에서 정체",
    "[$708M 청구 → $315M 합의] 옛 Genzyme 주주(CVR 신탁관리인)들이 [\"Sanofi가 Lemtrada 출시·매출 인식을 일부러 늦췄다\"](diligent efforts 위반)며 손해배상 약 [$708M] 청구. Sanofi는 2020년 [$315M] 합의금 지급으로 분쟁 종결, CVR은 NASDAQ에서 조기 상장폐지",
    "[칼 아이칸의 협상 카드] 2010년 봄 Carl Icahn이 Genzyme 약 5% 지분으로 이사회 진입, [\"가격을 더 받아야 한다\"]는 입장으로 터미어 CEO와 보조 맞춰 협상력 강화, CVR 도입을 이끌어낸 결정적 외부 압력",
  ],

  industryOverview: {
    body: "2010~2011년 글로벌 제약 산업은 [패턴트 클리프] 1차 파동에 직면해 있었다. Lipitor(Pfizer, 2011), Plavix(BMS, 2012), Seroquel(AstraZeneca, 2012), Singulair(Merck, 2012) 등 블록버스터들이 줄줄이 LOE를 앞두고 있었고, 대형 제약사들은 외부 파이프라인·매출원 확보를 위한 메가 M&A에 본격 진입했다. Pfizer-Wyeth($68B, 2009), Merck-Schering-Plough($41B, 2009), Roche-Genentech($46.8B, 2009)에 이어 Sanofi-Genzyme이 그 다음 자리를 차지하는 흐름. 동시에 [신흥시장 진출] 전략이 부상하면서 Sanofi는 백신·당뇨병(Lantus) 사업을 신흥국으로 확장하는 동시에, 미국·유럽 중심의 희귀질환 사업을 인수해 [선진국 전문약 포트폴리오를 단번에 확보]하는 양면 전략을 짰다. 그 첫 단추가 Genzyme이었다.",
    metrics: [
      { label: "Sanofi 시가총액 (2010년 말)",      value: "약 $90B",        sub: "발표 직전" },
      { label: "Genzyme 시가총액 (2010년 말)",     value: "약 $19B",        sub: "발표 직전, Allston 직격 후" },
      { label: "거래 가치 (현금)",                   value: "약 $20.1B",       sub: "Genzyme 약 2.72억 주 × $74" },
      { label: "CVR 발행량",                         value: "약 2.72억 개",    sub: "Genzyme 주식 1주당 1 CVR" },
      { label: "CVR 이론적 최대 지급",               value: "약 +$3B",         sub: "$11 × 2.72억 (시나리오 기준)" },
      { label: "CVR 실제 지급 (만기까지)",            value: "약 $2/CVR",       sub: "총 약 $544M, 이론 최대 대비 약 18%" },
    ],
    subBody:
      "본 거래는 메가 제약 M&A 사상 [최초의 상장 CVR] 사례였다. 그 이전에도 1980~1990년대 CVR이 산발적으로 사용됐지만(Rhone-Poulenc Rorer 등), $20B 규모의 메가딜에서 CVR이 핵심 가격 합의 도구로 동원되고 동시에 미국 증권거래소에 [별도 종목으로 상장]된 것은 처음이었다. 또한 [독립 트랜치 구조](각 마일스톤이 독립적으로 지급)를 채택해 이후 모든 트랜치형 CVR의 표준이 됐다, 2019년 BMS-Celgene이 일부러 정반대 구조(all-or-nothing)를 택한 것 자체가 본 거래의 영향력을 역설한다.",
    players: [
      { name: "Sanofi-aventis",        role: "인수자, 프랑스 기반 글로벌 제약사 (Lantus·백신 보유)" },
      { name: "Genzyme",               role: "피인수자, 미국 희귀질환 ERT 글로벌 1위 바이오텍" },
      { name: "Henri Termeer",         role: "Genzyme CEO (1985~2011), Sanofi 적대적 접근 거절·CVR 협상 주도" },
      { name: "Chris Viehbacher",      role: "Sanofi CEO (2008~2014), Genzyme 인수 추진 책임자" },
      { name: "Carl Icahn",            role: "행동주의 투자자, Genzyme 약 5% 지분 + 이사회 2석으로 가격 인상 압박" },
      { name: "FDA",                   role: "Allston 시설 동의명령(2010), Lemtrada 승인·안전성 규제 결정권자" },
      { name: "EMA",                   role: "Lemtrada 유럽 승인·2018~2019 안전성 제한 결정권자" },
      { name: "American Stock Transfer & Trust", role: "CVR 신탁관리인(Trustee), 이후 분쟁 시 옛 주주 측 원고" },
    ],
  },

  companyOverview: {
    targetName: "Genzyme Corporation",
    body: "Genzyme은 1981년 매사추세츠 캠브리지에서 설립된 [희귀질환 효소대체요법(ERT)] 분야 글로벌 1위 바이오텍이다. 1986년 NASDAQ 상장 후 헨리 터미어(Henri Termeer) CEO 체제(1985~2011)에서 [고셔병·파브리병·폼페병] 같은 초희귀질환을 표적으로 한 [평생 처방 + 환자당 연 $20만 이상의 초고가 약가] 비즈니스 모델을 미국 바이오텍 산업에 정착시켰다. 핵심 매출원은 [Cerezyme(이미글루세라제, 고셔병, 2008년 매출 약 $1.2B)], [Fabrazyme(아갈시다제 베타, 파브리병, 약 $0.5B)], [Myozyme/Lumizyme(알글루코시다제 알파, 폼페병)], [Renvela(인 결합제, 신장질환)]. 임상 후기 파이프라인의 [Lemtrada(alemtuzumab, 다발성경화증 CD52 표적 단클론항체)]가 핵심 미래 자산이었고, 본 거래 CVR의 4개 트랜치가 모두 Lemtrada에 걸려 있었다. 본사 매사추세츠 캠브리지, FY2010 직원 약 10,000명.",
    metrics: [
      { label: "설립연도",              value: "1981년",         sub: "Massachusetts Cambridge" },
      { label: "NASDAQ 상장",           value: "1986년",         sub: "구 ticker GENZ" },
      { label: "FY2010 매출",           value: "약 $4.05B",       sub: "Allston 사태 회복 단계" },
      { label: "FY2010 영업이익",       value: "약 $0.4B",        sub: "Allston 비용·동의명령 반영" },
      { label: "Cerezyme/Fabrazyme 비중", value: "약 50%+",        sub: "FY2008 매출 기준" },
      { label: "직원 수",                value: "약 10,000명",     sub: "2010년 말 기준" },
    ],
    revenueBreakdown: [
      { name: "Cerezyme (고셔병)",                pct: 29, color: "bg-emerald-600",   amt: "약 $1.18B" },
      { name: "Renvela/Renagel (인 결합제)",       pct: 18, color: "bg-emerald-500",   amt: "약 $0.73B" },
      { name: "Fabrazyme (파브리병)",             pct: 14, color: "bg-emerald-400",   amt: "약 $0.57B" },
      { name: "Myozyme/Lumizyme (폼페병)",         pct: 11, color: "bg-emerald-300",   amt: "약 $0.45B" },
      { name: "Synvisc (관절염)·Thyrogen·기타",     pct: 28, color: "bg-slate-400",     amt: "약 $1.12B" },
    ],
    revenueNote: "FY2010 매출 구성 추정 (Genzyme 10-K 기준). 단위: USD 십억",
    financials: [
      { year: "FY2007", revenue: 3814, cogs: 985,  grossProfit: 2829, sga: 1340, operatingIncome: 1010, ebitda: 1340 },
      { year: "FY2008", revenue: 4605, cogs: 1230, grossProfit: 3375, sga: 1560, operatingIncome: 1090, ebitda: 1450 },
      { year: "FY2009", revenue: 4516, cogs: 1390, grossProfit: 3126, sga: 1660, operatingIncome: 778,  ebitda: 1180 },
      { year: "FY2010", revenue: 4053, cogs: 1570, grossProfit: 2483, sga: 1690, operatingIncome: 401,  ebitda: 840 },
      { year: "FY2011", revenue: 2890, cogs: 1010, grossProfit: 1880, sga: 1180, operatingIncome: 290,  ebitda: 620 },
    ],
    financialsNote: "단위: USD M (백만 달러) | US GAAP 연결 기준 | 출처: Genzyme 10-K (FY2007~FY2010), FY2011은 Sanofi 인수 후 부분 연도 (1~4월) 공시. R&D 비용은 영업이익에 차감 반영. Allston 사태(2009~2010) 영향으로 영업이익 급락",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "본 거래는 [현금 공개매수(Cash Tender Offer) + 백엔드 후속 합병(Short-form Merger)] 2단계 구조다. Sanofi의 100% 자회사 [GC Merger Corp.]이 Genzyme 발행주식 전체를 대상으로 1주당 [$74 현금 + CVR 1개]의 공개매수를 개시하고, 응모 비율이 미국 회사법상 short-form merger 가능 기준(통상 90%) 또는 majority 요건을 충족하면 잔여 주주를 강제 매수해 Genzyme이 Sanofi의 100% 자회사가 되는 형식이다. CVR은 [별도 증권]으로 발행돼 NASDAQ에 [GCVRZ] 종목코드로 상장됐고, CVR 신탁관리인(American Stock Transfer & Trust)이 마일스톤 달성 여부 모니터링·지급 집행을 맡았다. 자금 조달은 Sanofi가 사전 확보한 [$15B 브리지론(BNP Paribas·J.P. Morgan 주선)] + 자체 현금 + 후속 회사채 발행 조합.",
    preOwnership: {
      nodes: [
        { id: "sny_pre",   label: "Sanofi 주주",       sub: "100%",                       type: "public" },
        { id: "sny",       label: "Sanofi-aventis",     sub: "Lantus·백신·자체 제약",          type: "acquirer" },
        { id: "genz_pre",  label: "Genzyme 주주",       sub: "100% (약 2.72억 주)",          type: "public" },
        { id: "icahn",     label: "Carl Icahn",         sub: "약 5%, 이사회 2석",              type: "fund" },
        { id: "genz",      label: "Genzyme",            sub: "Cerezyme·Fabrazyme·Lemtrada",  type: "target" },
      ],
      edges: [
        { from: "sny_pre",  to: "sny",  label: "100%" },
        { from: "genz_pre", to: "genz", label: "약 95%" },
        { from: "icahn",    to: "genz", label: "약 5% + 이사회 2석" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "sny_post",   label: "Sanofi-aventis 주주", sub: "100% (변동 없음)",                  type: "public" },
        { id: "sny_post2",  label: "Sanofi-aventis",      sub: "통합 후, $15B 브리지론 부담",         type: "acquirer" },
        { id: "gc_sub",     label: "GC Merger Corp.",     sub: "Sanofi 100% 자회사 (vehicle)",     type: "entity" },
        { id: "genz_sub",   label: "Genzyme",             sub: "Sanofi 100% 자회사, 캠브리지 본사 유지", type: "target" },
        { id: "cvr_holders", label: "옛 Genzyme 주주 (CVR 보유)", sub: "약 2.72억 CVR (GCVRZ)",       type: "public" },
      ],
      edges: [
        { from: "sny_post",   to: "sny_post2", label: "100%" },
        { from: "sny_post2",  to: "gc_sub",    label: "100%" },
        { from: "gc_sub",     to: "genz_sub",  label: "100% (합병 후 존속)" },
        { from: "cvr_holders", to: "genz_sub", label: "CVR 청구권 (마일스톤 조건부)" },
      ],
    },
    keyTerms: [
      { label: "거래 구조",              value: "현금 공개매수 + 백엔드 후속 합병" },
      { label: "Genzyme 주당 대가",       value: "$74.00 현금 + CVR 1개",                                                       accent: true },
      { label: "총 거래가치 (현금분)",      value: "약 $20.1B (약 2.72억 주 × $74)",                                              accent: true },
      { label: "CVR 마일스톤 ①",          value: "Cerezyme/Fabrazyme 2011년 생산 회복 → $1 [달성, 지급됨]",                       accent: true },
      { label: "CVR 마일스톤 ②",          value: "Lemtrada FDA 승인 by 2014-03-31 → $1 [지연 끝에 2014-11 승인, 지급됨]",          accent: true },
      { label: "CVR 마일스톤 ③",          value: "Lemtrada 연 매출 ≥ $400M → $2 [미달, 지급 안 됨]",                            accent: true },
      { label: "CVR 마일스톤 ④",          value: "Lemtrada 누적 매출 ≥ $1.8B → $3 [미달, 지급 안 됨]",                           accent: true },
      { label: "CVR 마일스톤 ⑤",          value: "Lemtrada 누적 매출 ≥ $2.3B (또는 $2.8B 변동) → $4 [미달, 지급 안 됨]",          accent: true },
      { label: "CVR 지급 구조",            value: "5개 트랜치 [독립 지급], 한 개 미달해도 다른 트랜치에 영향 없음",                  accent: true },
      { label: "CVR 발행량",              value: "약 2.72억 개 (Genzyme 주식 1주당 1개)" },
      { label: "CVR 상장",                value: "NASDAQ [GCVRZ], 2011-04 상장 ~ 2020-12 만기/조기 상장폐지" },
      { label: "CVR 이론적 최대 지급",      value: "약 $11/CVR (= 1+1+2+3+4), 총 이론 최대 약 $3B" },
      { label: "CVR 실제 지급 (만기까지)",   value: "약 $2/CVR, 총 약 $544M (실현율 약 18%)",                                       accent: true },
      { label: "노력의무 조항",            value: "Sanofi는 Lemtrada 개발·상업화에 \"diligent efforts\" 부담",                    accent: true },
      { label: "$315M 합의금 (2020)",       value: "CVR 분쟁 → Sanofi가 $315M 지급, CVR 조기 상장폐지" },
      { label: "인수 자금 조달",            value: "$15B 브리지론 (BNP Paribas·JPM 주선) + 자체 현금 + 후속 회사채" },
      { label: "공개매수 완료",            value: "2011년 4월 8일 (응모 비율 majority 확보, short-form merger 후속)" },
    ],
  },

  advisors: {
    body: "메가 제약 M&A답게 양 측에 글로벌 IB·로펌이 풀라인업으로 동원됐다. Sanofi 측은 Evercore와 J.P. Morgan이 재무 자문 공동 주관, BNP Paribas는 $15B 브리지론 공동 주선과 보조 재무 자문, 법률은 Weil, Gotshal & Manges가 거래 구조와 CVR 계약 작성을 주도했다. Genzyme 측은 Goldman Sachs와 Credit Suisse가 재무 자문 공동 주관, 법률은 Ropes & Gray가 리드, 독립이사 전용 자문으로 Wachtell, Lipton, Rosen & Katz가 별도 참여했다. CVR 신탁관리인(Trustee)은 American Stock Transfer & Trust가 맡았고, 이후 2014~2020년 분쟁 단계에서는 옛 Genzyme 주주 측 변호인단으로 Bernstein Litowitz·Grant & Eisenhofer 등이 등장했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Sanofi-aventis (인수자)",
        initials: "SNY",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Evercore Partners",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "거래 구조·가격 협상·CVR 옵션 가치 평가 주관, Sanofi 이사회 fairness opinion 제공",
          },
          {
            firm: "J.P. Morgan",
            role: "재무 자문 (Co-lead)",
            roleType: "financial",
            note: "기업가치 평가, $15B 브리지론 공동 주선",
          },
          {
            firm: "BNP Paribas",
            role: "재무 자문 / 자금 조달",
            roleType: "financial",
            note: "Sanofi 메인 뱅크, $15B 브리지론 공동 주선",
          },
          {
            firm: "Weil, Gotshal & Manges",
            role: "법률 자문 (Lead)",
            roleType: "legal",
            note: "거래 구조 설계·CVR 계약서 작성·공개매수 규제 대응",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Genzyme (피인수자)",
        initials: "GENZ",
        bg: "bg-emerald-600",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "Genzyme 매각 자문·fairness opinion 제공, $69→$80→$74+CVR 가격 협상 주도",
          },
          {
            firm: "Credit Suisse",
            role: "재무 자문 (Co-lead)",
            roleType: "financial",
            note: "Genzyme 보조 재무 자문·CVR 옵션 가치 카운터 모델 제공",
          },
          {
            firm: "Ropes & Gray",
            role: "법률 자문 (Lead)",
            roleType: "legal",
            note: "거래 구조·이사회 fiduciary duty·CVR 계약 협상 주관",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법률 자문 (독립이사 전용)",
            roleType: "legal",
            note: "Genzyme 독립이사 위원회 별도 자문, Carl Icahn 측 압력 대응 포함",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 Sanofi·Genzyme 공식 보도자료, SEC SC TO-T·SC 14D-9, 언론 보도 기반. CVR 신탁관리인은 American Stock Transfer & Trust Co.",
  },

  valuation: {
    body: "본 거래의 헤드라인 인수가는 1주당 $74 현금이지만, CVR의 [발표 시점 옵션 가치]를 더하면 실제 환산 인수가는 약 $79~$81 수준이었다(시장 추정). 시장은 CVR을 [블랙숄즈·이항모형] 등으로 1 CVR당 약 $5~$7로 평가했고, 2011년 4월 NASDAQ 상장 직후 GCVRZ는 한때 [$5.50]대까지 거래됐다. 그러나 Lemtrada가 2013년 12월 첫 FDA 심사에서 [CRL(승인 거절)]을 받고 2014년 11월에야 우여곡절 끝에 승인된 데다, 시판 후 매출이 한 번도 연 $400M에 도달하지 못하면서 GCVRZ 가격은 단계적으로 하락, 2018~2019년에는 $0.50~$1.00 사이를 횡보했다. 만기 시점까지 실제 지급액은 1 CVR당 약 [$2], 이론적 최대 약 $11 대비 약 [18%]에 그쳤다. 헤드라인 EV/EBITDA는 약 [13.5x](EV $20.1B / FY2010 EBITDA $0.84B, Allston 직격 후 EBITDA 기준), Allston 정상화 가정 EBITDA $1.4B 기준으로는 약 [11x]로 평가받았다.",
    rows: [
      { item: "Genzyme 주당 현금 대가",          val: "$74.00",         note: "Sanofi 적대 $69 → 협상 $74로 절충" },
      { item: "Genzyme 주당 CVR (옵션 가치)",   val: "약 $5~$7",       note: "2011년 발표/상장 시점 시장 추정", accent: true },
      { item: "Genzyme 주당 총 환산 가치",       val: "약 $79~$81",     note: "현금 + CVR 옵션 가치 합산" },
      { item: "Genzyme 발행주식 수",             val: "약 2.72억 주",   note: "CVR 발행량과 동일" },
      { item: "현금 거래가치 (Equity Value)",    val: "약 $20.1B",      note: "현금분만",                          accent: true },
      { item: "CVR 명목 최대 (시나리오)",        val: "약 +$3.0B",      note: "$11 × 2.72억 (이론 최대)",        accent: true },
      { item: "Genzyme 순부채 (2010년 말)",       val: "약 -$0.2B (순현금)", note: "EV 계산에 차감" },
      { item: "총 거래 EV (현금분 기준)",         val: "약 $19.9B",       note: "Genzyme 순현금 차감", accent: true },
      { item: "FY2010 EBITDA",                  val: "약 $0.84B",       note: "Allston 직격 후 (Genzyme 10-K)" },
      { item: "정상화 EBITDA (시장 추정)",        val: "약 $1.4B",        note: "FY2008 수준 회복 가정" },
      { item: "헤드라인 EV/EBITDA (FY2010)",      val: "약 13.5x",        note: "Allston 직격 EBITDA 기준",      accent: true },
      { item: "정상화 EV/EBITDA",                val: "약 11.0x",        note: "정상 EBITDA 기준" },
      { item: "CVR 상장 직후 시장가",             val: "약 $5.50",        note: "2011-04 NASDAQ GCVRZ 초기" },
      { item: "CVR 실제 누적 지급 (만기)",         val: "약 $2/CVR",       note: "총 약 $544M, 이론 최대 약 18%", accent: true },
    ],
    disclaimer: "주: 가격 수치는 SEC SC TO-T·SC 14D-9·Sanofi 보도자료·언론 보도·시장 추정 기반. CVR 옵션 가치는 추정.",
  },

  rationale: {
    buyer: {
      title: "Sanofi, 왜 $20.1B + CVR을 베팅했나",
      initials: "SNY",
      bg: "bg-violet-700",
      points: [
        "[패턴트 클리프 회피] Sanofi의 핵심 매출원이던 [Plavix·Avapro·Lovenox]가 모두 2010~2013년 LOE 일정. 외부 파이프라인·매출원 확보가 시급, Genzyme의 [희귀질환 ERT] 포트폴리오는 [제네릭이 진입하기 어려운] 평생 처방 비즈니스로 매력적",
        "[희귀질환·바이오로직스 진입] Sanofi는 케미컬 의약품 중심의 전통 제약사, Genzyme 인수로 [바이오로직스·세포치료·희귀질환]이라는 미래 성장 영역에 단번에 진입. 이후 Sanofi Genzyme 사업부는 그룹의 [Specialty Care] 축으로 자리잡음",
        "[CVR이라는 가격 격차 다리] Genzyme 측은 [\"Lemtrada가 블록버스터가 되면 우리는 더 받아야 한다\"], Sanofi는 [\"Lemtrada는 아직 임상 단계라 그 위험을 우리가 못 진다\"]. CVR이 이 견해 차이를 메우는 협상 도구, Sanofi 입장에서는 임상·매출 성공 시에만 추가 지급",
        "[독립 트랜치의 비대칭] BMS-Celgene 사례와 정반대로 [독립 트랜치 구조]를 채택. 5개 트랜치가 독립 지급되지만, 각각의 [매출 임계값]을 매우 공격적으로 설정(Lemtrada 연 $400M, 누적 $1.8B/$2.3B). 결과적으로 매출 마일스톤은 모두 미달, 매출 트랜치 약 $9/CVR 분량의 지급의무가 사실상 회피됨",
        "[Genzyme의 Allston 취약점 활용] 2009년 Allston 사태로 Genzyme 주가가 반토막, FDA 동의명령으로 경영진 신뢰도까지 흔들린 시점. Sanofi가 협상 테이블에 앉을 수 있던 결정적 배경이자, 이후 Allston 정상화 비용을 Sanofi가 떠안는 부담 요인",
      ],
    },
    seller: {
      title: "Genzyme(터미어), 왜 $74 + CVR에 팔았나",
      initials: "GENZ",
      bg: "bg-emerald-600",
      points: [
        "[Allston 사태 이후의 신뢰 회복 부담] 2009~2010년 Cerezyme·Fabrazyme 공급 부족으로 환자 단체·FDA·투자자 신뢰가 동시에 흔들림. 단독으로 Allston 정상화 + Lemtrada 출시 + 매출 회복을 동시에 해내는 [실행 위험]이 컸음, Sanofi의 자본·실행력 활용이 합리적 선택",
        "[Lemtrada 가치를 CVR로 보존] 터미어 CEO는 Sanofi의 $69·$80 가격 제안을 [\"Lemtrada 가치를 전혀 반영하지 않은 가격\"]이라며 거절. CVR을 도입해 Lemtrada가 블록버스터가 되면 옛 주주가 추가 회수할 수 있게 만든 것이 협상의 핵심 성과. [\"현금은 우리가 보장, Lemtrada 업사이드는 CVR로 분담\"]",
        "[칼 아이칸의 협상력 증폭] 2010년 봄 Carl Icahn이 약 5% 지분으로 Genzyme 이사회에 자기 사람 2명 진입, 가격 인상 압박. 터미어 + Icahn의 보조 맞춤이 협상 가격을 $69 → $74로 끌어올리고 CVR 도입을 이끌어낸 외부 동력",
        "[옛 주주의 즉시 현금 회수 + 옵션 보존] Genzyme 주주는 [$74 즉시 현금]으로 본전 이상 회수, [CVR 1개]로 Lemtrada 성공 시 추가 회수 옵션 유지. 위험 분산 구조. 다만 사후적으로 매출 마일스톤이 모두 미달하면서 CVR 실현치는 약 $2, 이론치 대비 약 18%에 그침",
        "[헨리 터미어의 출구] 1985년부터 26년간 Genzyme을 이끈 터미어 CEO는 본 거래 클로징과 함께 회장직에서 물러남(이후 사외이사로 짧게 참여). Genzyme의 캠브리지 본사·R&D 거점 유지를 거래 조건에 명시해 매사추세츠 바이오텍 생태계 보호 명분도 확보",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "본 거래는 2011년 4월 8일 클로징됐고, Genzyme은 Sanofi Genzyme 사업부로 통합돼 캠브리지 본사·R&D 거점을 유지했다. CVR(GCVRZ)은 2011년 4월부터 2020년 12월까지 약 9년 8개월간 NASDAQ에서 거래됐다. 5개 트랜치의 최종 결과는: [① Cerezyme/Fabrazyme 2011년 생산 회복 ✅ 달성, $1 지급], [② Lemtrada FDA 승인 by 2014-03-31 → 2013년 12월 첫 심사에서 CRL(승인 거절), 2014년 11월에야 승인. CVR 계약상 기한 해석 분쟁 끝에 결국 지급, $1], [③ Lemtrada 연 매출 ≥ $400M → ❌ 미달, Lemtrada 매출 정점이 약 $250~$500M 누적 수준에 그침], [④ 누적 매출 ≥ $1.8B → ❌ 미달], [⑤ 누적 매출 ≥ $2.3B/$2.8B → ❌ 미달]. 실현 지급은 약 $2/CVR, 이론적 최대 $11 대비 약 18%. 2018~2019년 EMA가 Lemtrada에 [심각한 심혈관계·자가면역 부작용] 신호로 [사용을 기존 치료제 실패 후 3차 치료로 제한]하면서 매출 시나리오는 사실상 종결됐다. 2020년 Sanofi는 옛 Genzyme 주주(CVR 신탁관리인) 측이 제기한 [\"diligent efforts\" 위반 + 매출 인식 지연] 청구(약 $708M)를 [$315M 합의금]으로 마무리하고 CVR을 NASDAQ에서 조기 상장폐지했다. 거래 자체는 Sanofi의 [Specialty Care] 사업부로 성공적으로 통합됐고, 이후 Sanofi의 알닐람(Alnylam) 협력·바이오버라티브(Bioverativ, 2018, $11.6B) 인수 같은 후속 바이오 M&A의 출발점이 됐다.",
    overallVerdict: "Sanofi에게는 \"CVR로 매출 트랜치 약 $9/CVR을 회피한 가격 협상의 성공 + Specialty Care 사업 진입\". 옛 Genzyme 주주에게는 \"$74 현금 회수는 안정적, CVR은 이론 대비 18%만 실현된 옵션의 한계 사례\"",
    positives: [
      "[Sanofi] CVR 매출 트랜치 3개(약 $9/CVR) 모두 미달로 약 $2.4B 이론적 지급의무 회피, 만기까지 실제 지급은 약 $544M. 가격 협상 도구로서의 CVR이 사후적으로 매수자 측에 매우 유리하게 작동",
      "[Sanofi] Genzyme 통합으로 [Specialty Care / Rare Disease] 사업부 출범, 2018년 Bioverativ($11.6B)·2018년 Ablynx($4.8B) 후속 인수의 발판",
      "[옛 Genzyme 주주] $74 현금으로 즉시 본전 이상 회수, 2010년 중반 주가 $50 대비 약 +48% 프리미엄. 단기 안정적 회수",
      "[법리·시장 선례] 메가 제약 M&A 최초의 [상장 CVR(listed CVR)] 구조 정착, 독립 트랜치 모델이 이후 모든 트랜치형 CVR의 표준이 됨. 거래 가능한 CVR 시장이라는 카테고리 자체를 만든 시초",
    ],
    risks: [
      "[Sanofi] Lemtrada 안전성 문제(2018~2019 EMA 제한)로 매출 잠재력 대부분 상실, [Specialty Care 핵심 자산]이라는 인수 명분의 절반 이상이 사라짐. 알템투주맙은 결국 백혈병(Campath) 적응증으로 회귀하는 등 활용 폭이 좁아짐",
      "[Sanofi] $315M 합의금 + 9년간의 CVR 분쟁·소송 비용·기업 이미지 부담, [\"diligent efforts\" 의무를 의도적으로 회피했다]는 정서가 미국 바이오텍 커뮤니티에 일부 남음",
      "[CVR 보유자] GCVRZ가 한때 $5.50 → 만기 직전 $1 안팎까지 폭락, 트랜치형 CVR의 매출 임계값이 [너무 공격적으로 설계된 경우] 사실상 휴지조각이 될 수 있다는 교훈",
      "[제약 M&A 전반] 본 거래의 [공격적 매출 임계값]이 사후적으로 매수자에 유리하게 작동한 사례로 학습되면서, 이후 바이오텍 매도자들이 [임계값 인하·트랜치 세분화·다이렉트 노력의무]를 더 강하게 요구하는 협상 트렌드 형성",
    ],
    editorNote:
      "이 거래는 [메가 제약 M&A의 CVR을 어떻게 설계해야 하는가]에 대한 산업의 첫 본격 답안이었다. 5개 [독립 트랜치] 구조(한 개 달성하면 그 트랜치는 지급)는 BMS-Celgene 같은 all-or-nothing 구조와 정반대 방향의 설계로 이후 표준이 됐고, NASDAQ 상장 [GCVRZ]는 \"CVR도 거래 가능한 증권이 될 수 있다\"는 점을 처음으로 증명했다. 그러나 매출 마일스톤의 [임계값을 매우 공격적으로 설정]함으로써 결과적으로 Sanofi가 매출 트랜치 전부를 회피한 사실은, CVR이 [\"임상 성공 보너스\"가 아니라 \"매수자 측 가격 협상 도구\"]로 작동할 수 있음을 산업에 각인시켰다. 사후에 옛 Genzyme 주주들이 제기한 [diligent efforts 위반] 청구가 $315M 합의로 마무리된 것도, 노력의무 조항이 \"단순한 보일러플레이트\"가 아니라 실제 분쟁 트리거임을 보여준 초기 선례. 2019년 BMS-Celgene CVR이 본 거래의 \"5개 독립 트랜치\"를 \"3개 결합 트랩\"으로 비틀어 적용한 것은, 이 거래의 영향력을 역설적으로 입증한다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "SNY",
    acquirerBg: "bg-violet-700",
    targetInitials: "GENZ",
    targetBg: "bg-emerald-600",
    acquirerName: "Sanofi-aventis",
    targetName: "Genzyme Corporation",
    dealTitle: "$20.1B Acquisition + Listed CVR (GCVRZ), The Original 5-Tranche Mega-Pharma CVR Template",
    dealSize: "$20.1B + CVR",
    dealSizeUSD: "approx. USD 20.1B cash + CVR (theoretical max ~$3B)",
    evEbitda: "approx. 13.5x (EV/FY2010 EBITDA, Allston-impacted)",
    closeDate: "Apr 8, 2011",
  },

  sources: [
    { id: 1, text: "Sanofi-aventis 공식 보도자료, Genzyme 인수 합의 발표 (2011-02-16)", url: "https://www.news.sanofi.us/press-releases?item=118549" },
    { id: 2, text: "PR Newswire, Sanofi-aventis to Acquire Genzyme for $74.00 in Cash Per Share Plus Contingent Value Right (2011-02-16)", url: "https://www.prnewswire.com/news-releases/sanofi-aventis-to-acquire-genzyme-for-7400-in-cash-per-share-plus-contingent-value-right-116291094.html" },
    { id: 3, text: "SEC EDGAR, Sanofi 6-K / Genzyme SC 14D9 (CVR 계약 상세 부속서 포함, 2011)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000732485" },
    { id: 4, text: "Boston Bar Association, Sanofi-Aventis, Genzyme and Contingent Value Rights (Haggerty)", url: "https://www.bostonbar.org/wp-content/uploads/2022/06/Haggerty.pdf" },
    { id: 5, text: "Cleary Gottlieb, Cleary's Pharma Bites — Contingent Value Rights in Pharma Deals", url: "https://www.clearygottlieb.com/-/media/files/clearys-pharma-bites/clearys-pharma-bites-contingent-value-rights-in-pharma-deals.pdf" },
    { id: 6, text: "Value and Opportunity, The Case of the Sanofi/Genzyme CVR (2017-03-09)", url: "https://valueandopportunity.com/2017/03/09/contingent-value-rights-cvrs-the-case-of-the-sanofigenzyme-cvr/" },
    { id: 7, text: "Genzyme CVR (GCVRZ) post mortem, Glenn Chan's Random Notes on Investing (2013-11)", url: "https://glennchan.wordpress.com/2013/11/09/genzyme-contingent-value-rights-gcvrz-post-mortem/" },
    { id: 8, text: "BioPharma Dive, Sanofi pays $315 million to settle Lemtrada go-slow claims (2020)", url: "https://www.biopharmadive.com/news/sanofi-pay-315-million-settle-lemtrada-cvr-go-slow-claims/566350/" },
    { id: 9, text: "PMLiVE, Sanofi settles Lemtrada dispute with Genzyme investors for $315m (2020)", url: "https://pmlive.com/pharma_news/sanofi_settles_lemtrada_dispute_with_genzyme_investors_for_315m_1315185/" },
    { id: 10, text: "CNBC, Sanofi Launches $18.5 Billion Hostile Bid for Genzyme (2010-10-04)", url: "https://www.cnbc.com/2010/10/04/sanofi-launches-185-billion-hostile-bid-for-genzyme.html" },
    { id: 11, text: "Genzyme 8-K, Allston Landing 시설 동의명령 및 Cerezyme/Fabrazyme 공급 업데이트 (2009~2010)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000732485&type=8-K" },
    { id: 12, text: "FiercePharma / Chemistry and Industry, Genzyme faces $175m FDA fines (2010)", url: "https://www.soci.org/chemistry-and-industry/cni-data/2010/9/genzyme-faces-175m-fda-fines" },
  ],

  seo: {
    title: "Sanofi × Genzyme $20.1B + CVR, 메가 제약 M&A 최초의 상장 CVR(GCVRZ) 9년의 기록",
    description:
      "2011년 2월 Sanofi가 Genzyme을 1주당 $74 현금 + CVR 1개, 총 $20.1B에 인수. 메가 제약 M&A 최초의 상장 CVR(NASDAQ GCVRZ). Cerezyme 생산·Lemtrada FDA 승인·매출 3단계의 5개 독립 트랜치 구조, 이론적 최대 약 $11/CVR. 매출 마일스톤 모두 미달로 실제 지급 약 $2. $315M 합의로 마무리된 diligent efforts 분쟁까지 9년의 CVR 라이프사이클 해부.",
    keywords: [
      "Sanofi Genzyme 인수",
      "Sanofi Genzyme $20.1B",
      "GCVRZ",
      "상장 CVR",
      "Listed CVR",
      "트랜치 CVR",
      "독립 트랜치 마일스톤",
      "Contingent Value Right",
      "Lemtrada CVR",
      "Alemtuzumab",
      "Cerezyme Fabrazyme",
      "Allston Landing",
      "Henri Termeer",
      "Carl Icahn Genzyme",
      "diligent efforts 조항",
      "BMS Celgene CVR 비교",
      "제약 M&A 2011",
      "희귀질환 M&A",
    ],
  },

  concepts: [
    {
      term: "CVR (Contingent Value Right)",
      description: "인수 후 특정 임상·승인·매출 마일스톤을 달성하면 인수자가 피인수 주주에게 추가 대가를 지급하는 옵션형 증권. 바이오텍 M&A에서 임상·시판 불확실성을 가격에 반영하는 협상 도구. 본 거래는 메가 제약 M&A 최초의 상장 CVR(GCVRZ) 사례.",
    },
    {
      term: "Listed CVR (상장형 CVR)",
      description: "인수 후 발행된 CVR이 증권거래소에 별도 종목으로 상장돼 거래 가능한 구조. 본 거래의 GCVRZ가 메가 제약 M&A 최초의 상장 CVR. 비상장 CVR(non-tradeable)과 달리 옛 주주가 만기 전에 시장에서 매도해 옵션 가치를 회수할 수 있음.",
    },
    {
      term: "독립 트랜치 마일스톤 구조",
      description: "복수 마일스톤이 [각각 독립적으로] 지급되는 CVR 구조. 한 개를 달성하면 그 트랜치는 지급, 미달해도 다른 트랜치 지급의무에 영향 없음. 본 거래의 5개 트랜치(생산 회복 $1 + FDA 승인 $1 + 매출 3단계 $2+$3+$4)가 표준 원형. 2019년 BMS-Celgene이 정반대 all-or-nothing 구조를 택한 비교 대상.",
    },
    {
      term: "Diligent Efforts (노력의무) 조항",
      description: "CVR 계약상 인수자가 마일스톤 달성을 위해 [성실히 노력할 의무]를 부담하는 조항. 본 거래에서 옛 Genzyme 주주는 Sanofi가 Lemtrada 출시·매출 인식을 일부러 늦췄다며 약 $708M 손배 청구, 2020년 $315M 합의로 종결. M&A 노력의무 조항이 \"단순 보일러플레이트가 아니다\"라는 점을 보여준 초기 선례.",
    },
    {
      term: "Lemtrada (alemtuzumab)",
      description: "Genzyme이 개발한 CD52 표적 단클론항체. 본래 만성림프구성백혈병(Campath, 2001 FDA 승인) 적응증이었으나 다발성경화증(MS) 재출시를 위해 임상 진행. 본 거래 CVR 5개 트랜치 중 4개가 Lemtrada에 걸려 있었음. 2014년 FDA 승인 후 2018~2019년 EMA가 심혈관계·자가면역 부작용으로 사용 제한, 매출 마일스톤은 모두 미달.",
    },
    {
      term: "Allston Landing Contamination (2009)",
      description: "2009년 6월 Genzyme의 매사추세츠 Allston Landing 제조시설에서 비루스(Vesivirus 2117) 오염이 적발돼 FDA가 시설을 폐쇄. Cerezyme·Fabrazyme 글로벌 공급이 50%·30% 수준으로 급감. 환자 단체 분노 + 2010년 5월 약 $175M 동의명령. Sanofi가 협상 테이블에 앉을 수 있게 만든 결정적 취약점.",
    },
    {
      term: "현금 공개매수 + 백엔드 후속 합병 (Tender Offer + Short-form Merger)",
      description: "인수자가 100% 자회사 vehicle로 현금 공개매수를 개시해 대상회사 발행주식 과반(또는 90%+)을 매집한 뒤, 백엔드 short-form merger로 잔여 주주를 강제 매수해 100% 자회사화하는 미국 M&A 표준 구조. 본 거래의 GC Merger Corp.이 Sanofi 측 vehicle.",
    },
    {
      term: "효소대체요법 (Enzyme Replacement Therapy, ERT)",
      description: "특정 효소가 결핍된 희귀유전질환 환자에게 재조합 효소를 정기 정맥주사로 보충하는 치료법. Genzyme의 Cerezyme(고셔병)·Fabrazyme(파브리병)·Myozyme(폼페병)이 글로벌 ERT 시장의 핵심 제품. 평생 처방 + 환자당 연 $20만+의 초고가 약가 모델로 희귀질환 바이오텍 비즈니스 모델을 정착시킨 카테고리.",
    },
  ],

  faq: [
    {
      q: "왜 Sanofi-Genzyme 거래에 CVR이 필요했나요?",
      a: "2010년 7월 Sanofi가 처음 제안한 $69, 이후 인상한 $80 가격을 Genzyme의 헨리 터미어 CEO가 모두 거절했습니다. 거절 이유는 [\"Lemtrada(alemtuzumab MS) 파이프라인 가치를 전혀 반영하지 않은 가격\"]. Genzyme 측은 Lemtrada가 블록버스터가 될 것이라 봤고, Sanofi는 임상·시판 위험을 떠안고 그 가치를 즉시 현금으로 지불할 생각이 없었습니다. 양측의 견해 차이를 메우는 다리가 [CVR]이었습니다. [\"현금 인수가는 $74로 동결, Lemtrada가 실제로 성공하면 옛 주주가 CVR을 통해 추가 회수\"]. 메가 제약 M&A 사상 처음으로 NASDAQ에 상장된 거래 가능 CVR(GCVRZ)이 이렇게 탄생했습니다.",
    },
    {
      q: "본 거래의 CVR 5개 트랜치는 어떻게 설계됐고, 결과는 어떻게 됐나요?",
      a: "5개 [독립 트랜치] 구조였습니다. ① Cerezyme/Fabrazyme 2011년 생산 회복 ($1), ② Lemtrada FDA 승인 by 2014-03-31 ($1), ③ Lemtrada 연 매출 ≥ $400M ($2), ④ 누적 매출 ≥ $1.8B ($3), ⑤ 누적 매출 ≥ $2.3B 또는 $2.8B (SEC 문서별 표기 차이, $4). 이론적 최대 약 $11/CVR. [독립] 지급 = 한 개 달성하면 그 트랜치는 지급, 다른 미달이 영향 없음. 결과는 [① ✅ 달성, ② ✅ 우여곡절 끝에 달성, ③④⑤ 모두 ❌ 미달]. 만기까지 실제 지급은 약 $2/CVR, 이론적 최대의 약 18% 수준. Lemtrada 매출이 한 번도 연 $400M에 도달하지 못한 것이 결정적이었습니다.",
    },
    {
      q: "왜 Lemtrada는 블록버스터가 되지 못했나요?",
      a: "세 가지 이유의 결합. 첫째, 2013년 12월 FDA의 첫 심사에서 [CRL(승인 거절)]을 받고 2014년 11월에야 우여곡절 끝에 승인, 출시 자체가 약 1년 이상 지연. 둘째, 2014~2017년 출시 후 다발성경화증(MS) 시장에 [Ocrevus(2017)·Mavenclad·기존 fingolimod 계열] 등 강력한 경쟁약이 동시 진입, Lemtrada는 [2년에 5일씩 두 차례 투여]라는 독특한 dosing이 차별점이었으나 안전성 우려가 부각되며 처방 확산이 느려짐. 셋째, 결정적으로 2018~2019년 EMA가 Lemtrada 환자에서 보고된 [심각한 심혈관계 부작용(뇌졸중·심근경색)·자가면역 부작용(혈전성 혈소판감소성 자반증)]을 이유로 [신규 처방을 다른 MS 치료제가 효과 없거나 부작용 있는 환자에 한정한 3차 치료]로 제한. 매출은 한 번도 연 $400M에 도달하지 못하고 누적 약 $500M 수준에서 정체됐습니다.",
    },
    {
      q: "옛 Genzyme 주주의 소송과 $315M 합의는 어떻게 진행됐나요?",
      a: "옛 Genzyme 주주(CVR 신탁관리인 American Stock Transfer & Trust 측)는 2014~2019년 사이 여러 차례 [Sanofi가 Lemtrada 출시·매출 인식을 일부러 늦춰 CVR 매출 마일스톤을 의도적으로 회피했다]며 [\"diligent efforts\"] 의무 위반 손해배상 청구. 청구액은 약 $708M(매출 트랜치 ③ $2가 사실상 한 번 달성될 수 있었다는 주장 등). 2020년 Sanofi는 본안 판결을 받기 전 [$315M 합의금]을 지급하고 CVR을 NASDAQ에서 [조기 상장폐지(de-listed)]하는 방식으로 분쟁을 종결시켰습니다. Sanofi는 잘못을 인정하지 않았고, 합의금 중 $107M은 비용·수수료, $208M이 합의 시점 CVR 보유자에게 분배됐습니다. M&A 노력의무 조항이 [\"단순 보일러플레이트\"]가 아니라 실제 수억 달러를 좌우하는 분쟁 트리거라는 점을 보여준 초기 선례입니다.",
    },
    {
      q: "본 거래의 5개 독립 트랜치 구조가 2019년 BMS-Celgene의 all-or-nothing 구조와 어떻게 다른가요?",
      a: "Sanofi-Genzyme(2011)은 [5개 독립 트랜치] = 각 트랜치 마일스톤 달성 시 그 트랜치는 [무조건 지급]. 한 개 미달이 다른 트랜치 지급의무에 영향 없음. 결과적으로 5개 중 2개를 달성해 $2/CVR이 지급됐습니다. BMS-Celgene(2019)은 정반대 [3개 결합 마일스톤] = 세 마일스톤을 [모두] 달성해야 $9 전액 지급. 한 개라도 미달하면 [전체 $9 지급의무가 전액 소멸]. 결과적으로 두 개를 달성하고 한 개(Liso-cel)가 36일 늦어지면서 $6.4B 전액이 소멸. Sanofi-Genzyme이 이후 [트랜치형 CVR의 표준]이 됐고, BMS-Celgene이 [의도적 비대칭 트랩]으로 그 표준을 비틀어 적용한 케이스. 두 거래의 비교는 CVR 구조 설계에서 [독립 트랜치 vs 결합 트랩]의 경제적 차이를 가장 선명하게 보여주는 산업 표준 사례입니다.",
    },
    {
      q: "이 거래가 이후 글로벌 제약 M&A에 어떤 영향을 줬나요?",
      a: "세 가지 큰 영향. 첫째, [상장 CVR(listed CVR)이라는 카테고리 자체를 만듦]. 이후 BMS-Celgene(2019, BMY.RT) 등 메가 제약 M&A의 거래 가능 CVR이 본 거래를 직접 참조. 둘째, [독립 트랜치 마일스톤이 표준]이 됨. 매도자 측은 협상에서 [\"독립 트랜치 + 부분 달성 시 부분 지급\"]을 강하게 요구하는 트렌드가 형성. 셋째, [매출 임계값 설정의 신중함]. 본 거래에서 Sanofi가 매우 공격적인 매출 임계값($400M/$1.8B/$2.3B)을 관철해 매출 트랜치 전부를 회피한 사실이 알려진 뒤, 이후 바이오텍 매도자들이 [임계값 인하·트랜치 세분화·매출 기간 확장]을 요구하는 협상력이 강화됨. Sanofi 자신도 본 거래를 발판으로 2018년 Bioverativ($11.6B)·Ablynx($4.8B) 후속 인수에서 Specialty Care 사업부를 확장했습니다.",
    },
  ],
};

export default deal;
