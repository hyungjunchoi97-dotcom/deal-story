import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "ackman-valeant-loss",
  title: "빌 애크먼 × Valeant Pharmaceuticals — 행동주의자의 $4B+ 손실",
  subtitle: "퍼싱스퀘어 컨빅션 트레이드 · Philidor 회계 스캔들 · 약가 정치 · 이사회 합류 후의 항복",
  category: "activism",
  industry: "Pharmaceuticals / Specialty Pharma",
  country: "미국/캐나다",
  announcedAt: "2015-03-01",
  closedAt: "2017-03-13",
  announcedDisplay: "2015년 3월",
  closedDisplay: "2017년 3월",
  readingMinutes: 14,
  tags: [
    "빌 애크먼",
    "퍼싱스퀘어",
    "Valeant",
    "Bausch Health",
    "Philidor",
    "Citron Research",
    "Andrew Left",
    "약가 정치",
    "Mike Pearson",
    "Specialty Pharmacy",
    "Platform Pharma",
    "행동주의 실패",
  ],
  excerpt:
    "Allergan에서 $2.6B를 번 직후, 빌 애크먼은 그 파트너였던 Valeant 주식에 약 $3.2B을 직접 베팅했다. Mike Pearson을 '다음 Buffett'이라 부르며 5.7% 지분을 쌓았지만, Hillary Clinton의 약가 트윗과 Citron의 'Pharmaceutical Enron' 리포트가 Philidor 특수약국 스캔들을 드러내며 주가는 $257에서 $11까지 96% 폭락했다. 2017년 3월 전량 매도로 확정된 손실은 약 $4.0B+, 애크먼 커리어 최대 실패였다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "PS",  bg: "bg-slate-700", label: "퍼싱스퀘어 캐피탈" },
  target:   { initials: "VRX", bg: "bg-rose-700",  label: "Valeant Pharmaceuticals" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "2014년 11월, 빌 애크먼은 Allergan 딜에서 약 $2.6B의 9개월 수익을 실현하며 행동주의 역사상 가장 빠른 대규모 승리 중 하나를 거뒀다. 이 딜의 파트너였던 Valeant Pharmaceuticals는 Allergan을 빼앗기긴 했지만, 애크먼의 눈에 비친 Mike Pearson의 '플랫폼' 모델은 여전히 매력적이었다. 자체 R&D를 최소화하고 검증된 의약품 회사를 인수해 비용을 절감하고 가격을 올려 EPS를 끌어올리는 구조는 빠른 시일 내에 거대한 가치를 창출하는 듯 보였고, Valeant 주가는 2010년 $25 수준에서 2015년 8월 약 $257까지 10배 넘게 상승해 있었다.",
    "2015년 3월, 퍼싱스퀘어는 Valeant 주식 19.5백만주, 약 5.7% 지분을 평균 약 $196에 매집했다고 13D를 통해 공시했다. 총 투입자본 약 $3.2B. 애크먼은 공개 컨퍼런스에서 Pearson을 '제약업계의 워런 버핏', Valeant를 '제2의 Berkshire Hathaway'라고 칭하며 이례적으로 강한 톤의 컨빅션 트레이드(conviction trade)를 선언했다. 이 발언은 한 헤지펀드 매니저가 한 회사 CEO에 대해 한 가장 강한 공개 지지 중 하나로 기록된다.",
    "2015년 8월, Valeant 주가는 약 $257로 사상 최고가에 도달했고, 퍼싱스퀘어의 평가이익은 약 $1.2B에 달했다. 그러나 같은 달 후반부터 분위기가 급격히 바뀌었다. 미국 대선 캠페인에서 약가가 정치 이슈로 부상했고, Turing Pharmaceuticals의 Martin Shkreli가 Daraprim 가격을 5,000% 인상한 사건이 도화선이 됐다. 9월 21일, Hillary Clinton이 '특수약 시장의 가격 폭리(price gouging)'를 공격하는 트윗을 올리며 Valeant 주가는 하루에 [16%] 가까이 폭락했다. Valeant의 Isuprel, Nitropress, Cuprimine 등 인수 직후 수백 퍼센트 가격을 올린 의약품들이 의회 청문회의 표적이 됐다.",
    "결정타는 2015년 10월 21일이었다. Andrew Left가 이끄는 공매도 리서치 하우스 Citron Research가 'Pharmaceutical Enron'이라는 제목의 리포트를 발표했다. Citron은 Valeant가 [Philidor]라는 비공개 특수약국 네트워크를 통제하면서, 이를 통해 매출을 인위적으로 부풀리고 보험사의 사전 승인(pre-authorization) 절차를 우회하고 있다고 주장했다. 보고서 공개 당일 Valeant 주가는 [-19%] 폭락했고, 이후 1주일간 [-40%] 추가 하락했다. 10월 26일 Valeant는 Philidor와의 관계를 공식 인정했고, 10월 30일 관계 종료를 발표했다. 주가는 2015년 10월 $115에서 2016년 3월 $30 이하로 무너졌다.",
    "2016년 3월 15일, Valeant는 회계 재작성 문제로 10-K 제출을 연기하며 채권자 디폴트 조항 트리거 우려에 빠졌다. 같은 달 Mike Pearson은 CEO 자리에서 물러났고, 빌 애크먼은 방어적 무브로 Valeant 이사회에 직접 합류했다. 행동주의자가 자신이 베팅한 회사 이사회에 들어가 회사를 구하려 한 보기 드문 사례였다. 그러나 회계, 부채(약 $30B), Philidor 후폭풍, FTC·SEC·DOJ 조사를 동시에 막아내기에는 너무 늦었다. 애크먼은 2016년 4월 27일 미 상원 청문회에 출석해 Valeant의 약가 인상 행태를 일부 옹호하면서도 잘못을 인정해야 했다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "5.7% 지분 매집 $3.2B → 매도 ~$0.2B (손실 ~$4.0B+)",
    acquirerName: "퍼싱스퀘어 캐피탈 (Bill Ackman)",
    targetName: "Valeant Pharmaceuticals International (現 Bausch Health)",
    announcedDisplay: "2015년 3월 (13D 공시)",
    closedDisplay: "2017년 3월 13일 (전량 매도)",
    country: "미국/캐나다",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "2015년 3월: 퍼싱스퀘어가 Valeant 5.7% 지분(19.5백만주, 약 $3.2B)을 평균 약 $196에 매집, 13D 공시. 애크먼은 Mike Pearson을 'Buffett 급'으로 공개 격찬.",
    "2015년 8월: 주가 사상 최고가 $257 도달. 퍼싱스퀘어 평가이익 약 $1.2B.",
    "2015년 9월: Hillary Clinton의 약가 트윗으로 하루 -16%. Daraprim·Isuprel·Nitropress 가격 인상이 정치적 표적이 됨.",
    "2015년 10월 21일: Citron Research 'Pharmaceutical Enron' 리포트 — Philidor 특수약국을 통한 매출 부풀리기·보험 우회 의혹 제기. 주가 1주일 만에 -40%.",
    "2016년 3월: 10-K 제출 연기로 디폴트 위기. Mike Pearson 퇴임. 애크먼이 방어적으로 Valeant 이사회 합류 — 행동주의자의 컨빅션 트레이드가 'reluctant CEO 구원자'로 전환.",
    "2017년 3월 13일: 퍼싱스퀘어 약 $11/주에 전량 매도. 누적 손실 약 [$4.0B+], 원금 대비 약 [50% 손실]. 빌 애크먼 커리어 최대 실패로 기록.",
    "구조적 교훈: 컨빅션 트레이드의 맹점(증거가 누적돼도 입장 유지), 이사회 합류 행동주의의 한계(회계·사업모델 결함은 거버넌스로 해결 불가), Specialty Pharmacy 모델의 회계적 취약성.",
    "후속 효과: 퍼싱스퀘어 홀딩스(PSH) 폐쇄형 펀드의 NAV 대비 -25~30% 디스카운트 장기화, AUM 약 $20B에서 $8B대까지 감소. 애크먼은 이후 Restaurant Brands·Hilton·Chipotle·Universal Music으로 회복.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2010년대 초중반 미국 제약업계는 '플랫폼 파마(Platform Pharma)' 또는 '롤업 파마(Roll-up Pharma)'라는 신종 모델의 전성기였다. Valeant·Endo·Mallinckrodt·Concordia 같은 회사들은 자체 R&D를 최소화하고, 검증된 마이너 의약품 자산을 차입을 통해 인수한 뒤 비용을 절감하고 가격을 인상해 EBITDA를 키웠다. 캐나다·아일랜드 세무 거주지 활용(Tax Inversion)으로 실효세율을 한 자릿수로 낮추고, EPS 성장의 상당 부분을 비유기적(inorganic) 거래에서 창출했다. 월가는 이 모델을 '자본 효율적인 제약 운영'이라 환영했고, Valeant는 그 정점에 있었다. 그러나 이 모델은 두 개의 구조적 취약점을 안고 있었다. 첫째, 인수 대상이 줄어들면 EPS 성장이 멈춘다. 둘째, 가격 인상에 의존하는 매출은 정치적·평판적 리스크에 극도로 민감하다.",
    metrics: [
      { label: "Valeant 주가 (2010년 초)",    value: "~$25",      sub: "롤업 본격화 직전" },
      { label: "Valeant 주가 (2015년 8월 정점)", value: "~$257",   sub: "퍼싱스퀘어 평가이익 +$1.2B" },
      { label: "Valeant 주가 (2017년 3월)",   value: "~$11",      sub: "퍼싱스퀘어 전량 매도 시점" },
      { label: "Valeant 순부채 (2015 FY)",    value: "~$30B",     sub: "롤업 인수 누적, EBITDA 대비 6~7×" },
    ],
    subBody:
      "Specialty Pharmacy 모델은 환자 접근성과 인슈어런스 사전 승인 우회라는 두 마리 토끼를 잡기 위해 등장했지만, 회계상 매출 인식과 관계자 거래 공시에서 회색지대를 만들었다. Philidor 사건 이후 모든 메이저 PBM(Pharmacy Benefit Manager)은 자체 컴플라이언스 점검을 강화했고, FTC·SEC·DOJ는 Specialty Pharmacy 관계에 대한 조사 권한을 확대했다.",
    players: [
      { name: "Bill Ackman / 퍼싱스퀘어",             role: "행동주의 헤지펀드 — 5.7% 지분 매집, 컨빅션 트레이드 선언, 후일 이사회 합류" },
      { name: "Mike Pearson / Valeant",               role: "전 CEO — 플랫폼 모델 설계, McKinsey 출신, Philidor 스캔들 후 2016년 3월 퇴임" },
      { name: "Andrew Left / Citron Research",         role: "공매도 리서치 — 'Pharmaceutical Enron' 리포트(2015.10.21)로 Philidor 폭로" },
      { name: "Hillary Clinton",                       role: "당시 민주당 대선 후보 — 약가 폭리 트윗으로 섹터 전체 매도 촉발" },
      { name: "Joseph Papa / Valeant (現 Bausch)",     role: "신임 CEO — 부채 축소·자산 매각·사명 변경(2018) 주도" },
      { name: "ValueAct Capital (Jeff Ubben)",         role: "장기 보유 행동주의자 — 퍼싱스퀘어보다 먼저 진입, 더 일찍 부분 매도" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Valeant Pharmaceuticals International",
    body: "Valeant는 캐나다 퀘벡에 본사를 둔 다국적 제약사로, 2008년 Mike Pearson 부임 이후 60건 이상의 M&A를 통해 매출과 EBITDA를 폭발적으로 성장시켰다. Bausch & Lomb(안과, 2013, $87억), Salix Pharmaceuticals(소화기, 2015, $110억)이 대표 인수 사례다. Pearson의 운영 철학은 단순했다: R&D는 '실패에 대한 세금'이며, 검증된 의약품 자산을 사고 비용을 줄여 가격을 올리는 것이 자본 효율적이라는 것. 2015년 매출의 약 80%가 인수를 통해 확보됐고, 유기적 성장률(organic growth)은 한 자릿수 초반 또는 마이너스였다. 이 사실은 Philidor 스캔들 이후 공시에서 드러나면서 시장 신뢰를 결정적으로 무너뜨렸다.",
    metrics: [
      { label: "본사",                       value: "캐나다 퀘벡 Laval",  sub: "미국 NJ Bridgewater 운영본사" },
      { label: "직원 수 (2015 FY)",          value: "~21,000명",          sub: "Bausch & Lomb 통합 후" },
      { label: "주요 제품",                  value: "Bausch & Lomb · Xifaxan · Jublia · Wellbutrin XL", sub: "M&A로 확보된 포트폴리오" },
      { label: "총부채 (2015 FY)",            value: "~$30.3B",           sub: "Salix 인수 자금 차입 포함" },
      { label: "Net Debt / EBITDA (2015 FY)", value: "~6.7×",             sub: "투기등급 신용도, 정크본드 발행자" },
      { label: "2018년 사명 변경",            value: "Bausch Health",     sub: "Valeant 브랜드 폐기" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue: 2463,
        cogs: 730,
        grossProfit: 1733,
        sga: 678,
        operatingIncome: 1055,
        ebitda: 1280,
      },
      {
        year: "FY2012",
        revenue: 3480,
        cogs: 1010,
        grossProfit: 2470,
        sga: 952,
        operatingIncome: 1518,
        ebitda: 1820,
      },
      {
        year: "FY2013",
        revenue: 5770,
        cogs: 1860,
        grossProfit: 3910,
        sga: 1450,
        operatingIncome: 2460,
        ebitda: 2950,
      },
      {
        year: "FY2014",
        revenue: 8264,
        cogs: 2470,
        grossProfit: 5794,
        sga: 1980,
        operatingIncome: 3814,
        ebitda: 4470,
      },
      {
        year: "FY2015",
        revenue: 10446,
        cogs: 3290,
        grossProfit: 7156,
        sga: 2640,
        operatingIncome: 4516,
        ebitda: 5310,
      },
    ],
    financialsNote: "단위: $M (백만 달러) | 매출의 약 80%가 인수 기여, 유기적 성장은 한 자릿수 초반 또는 마이너스 | 출처: Valeant 10-K, 2016년 회계 재작성 반영 추정",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "이 딜의 거버넌스 구조는 행동주의 역사에서 보기 드문 [역설]을 보여준다. 애크먼은 처음에는 외부 주주이자 공개 치어리더로서 Mike Pearson 경영진을 지지했다. 그러나 Philidor 스캔들이 터지자 방어적 무브로 자신이 매집한 회사의 이사회에 들어가 회사를 구하려 했다. 행동주의자가 일반적으로 '경영진을 갈아치우는' 쪽에서 '경영진과 함께 책임을 지는' 쪽으로 역할이 뒤집힌 셈이다. 결과적으로 이 구조는 애크먼이 매도 타이밍을 놓치게 만든 한 요인이 됐다 — 내부자 정보 보유로 인한 거래 제한, 이사회 책임론, 공개 발언과의 일관성 압박이 동시에 작용했다.",
    shareholders: [
      {
        id: "pershing",
        label: "퍼싱스퀘어 캐피탈",
        sub: "Bill Ackman — 2015.3 5.7% 매집, 2016 이사회 합류, 2017.3 전량 매도",
        stake: "5.7%",
        stakePct: 5.7,
        type: "activist",
        alignment: "pro",
      },
      {
        id: "valueact",
        label: "ValueAct Capital",
        sub: "Jeff Ubben — 2014~2015 부분 매도",
        stake: "4.3%",
        stakePct: 4.3,
        type: "activist",
        alignment: "pro",
      },
      {
        id: "ruane",
        label: "Ruane, Cunniff & Goldfarb (Sequoia Fund)",
        sub: "Valeant에 약 30% 집중투자, 펀드 손실 50%+",
        stake: "10.4%",
        stakePct: 10.4,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "패시브 운용사",
        stake: "5.1%",
        stakePct: 5.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "일반 주주",
        sub: "개인·기타 기관",
        stake: "74.5%",
        stakePct: 74.5,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 14,
      independent: 11,
      affiliated: 3,
      note: "Philidor 스캔들 이후 2016년 3월부터 이사회 구성이 급격히 재편됐다. Mike Pearson, Howard Schiller 등 기존 인사가 물러나고, Bill Ackman, Steve Fraidin(퍼싱스퀘어 부사장), Robert Hale 등이 신규 합류. 신임 CEO Joseph Papa는 Perrigo 출신으로 부채 축소와 자산 매각을 우선 과제로 삼았다.",
    },
    issues: [
      {
        title: "Philidor 특수약국을 통한 매출 인식 문제",
        description: "Valeant는 Philidor를 회계상 비연결 관계자로 분류했지만, 실질적으로는 지배력을 행사했다. Citron Research는 이를 통해 매출이 부풀려졌을 가능성과, 보험사의 사전 승인을 우회해 고가 의약품을 처방받게 한 행태를 폭로했다. SEC·DOJ 조사가 이어졌고, 2016년 Valeant는 일부 매출 재작성을 발표했다.",
        severity: "critical",
      },
      {
        title: "Mike Pearson과 CFO Howard Schiller의 책임",
        description: "이사회 자체 조사(Ad Hoc Committee, 2016년 2월) 결과, Pearson과 Schiller가 Philidor 관계 공시에 미흡했다고 결론. Schiller는 사임을 거부하다 이사회에서 강제 해임됐고, Pearson은 2016년 3월 CEO에서 물러났다.",
        severity: "critical",
      },
      {
        title: "약가 인상 의존 매출 구조와 정치적 리스크",
        description: "Valeant는 Isuprel(+525%)·Nitropress(+212%)·Cuprimine(+5,787%) 등 인수 직후 약가를 급격히 인상해 매출을 키웠다. 약가 정치 이슈가 부상하면서 매출 모델 자체가 정치적·평판적 표적이 됐다.",
        severity: "critical",
      },
      {
        title: "행동주의자의 이사회 합류 후 매도 타이밍 갈등",
        description: "Bill Ackman은 2016년 3월 이사회에 합류하면서 내부자 거래 제한 윈도우(blackout window)에 묶였다. 또한 공개적으로 회사를 옹호한 입장이라 매도 결정이 평판에 부정적이었다. 결과적으로 2017년 3월 $11에 매도하기까지 추가 손실을 막지 못했다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Mike Pearson CEO 교체 및 거버넌스 리셋",
        result: "won",
        note: "2016년 3월 Pearson 퇴임, 5월 Joseph Papa 신임 CEO 선임. 이사회 약 절반 교체.",
      },
      {
        demand: "Philidor 관계 종료 및 회계 정상화",
        result: "won",
        note: "2015년 10월 30일 Philidor 관계 종료. 2016년 10-K 재작성 및 재제출.",
      },
      {
        demand: "부채 축소 및 자산 매각 (Salix·Bausch 일부)",
        result: "partial",
        note: "Papa CEO 체제에서 일부 자산 매각, 2017~2020년 부채 $30B → $20B 수준으로 축소. 그러나 주가 회복은 제한적.",
      },
      {
        demand: "퍼싱스퀘어 원금 회수 및 손실 최소화",
        result: "lost",
        note: "2017년 3월 $11에 전량 매도, 누적 손실 약 $4.0B+ 확정. 행동주의 캠페인의 재무적 목표는 명백히 실패.",
      },
    ],
    stockImpact: {
      preCampaign: "$196",
      peakDuringCampaign: "$257",
      postCampaign: "$11",
      note: "퍼싱스퀘어 평균 매입가 약 $196 → 2015년 8월 정점 $257 (+31%) → 2017년 3월 매도가 약 $11 (-94% from peak, -94% from cost). 누적 손실 약 $4.0B+, 원금 대비 약 50% 손실로 확정.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "이 사례는 통상적 의미의 [딜 구조]가 없다. 인수도 합병도 아니고, 헤지펀드 자기 자본으로 상장사 보통주를 13D 매집해 컨빅션 트레이드로 들어갔다가 손실을 확정한 행동주의 포지션이다. 그러나 [포지션의 시점·규모·이사회 합류·매도 트리거]를 구조적으로 분해하면, 한 행동주의 트레이드가 어떻게 좌초하는지를 명확히 볼 수 있다.",
    preOwnership: {
      nodes: [
        { id: "pershing",  label: "퍼싱스퀘어",          sub: "5.7% 매집, 평균 $196 (총 $3.2B)",   type: "acquirer" },
        { id: "valeant",   label: "Valeant",             sub: "캐나다 본사, NYSE/TSX 상장",         type: "target" },
        { id: "pearson",   label: "Mike Pearson CEO",    sub: "플랫폼 모델 설계자",                 type: "entity" },
        { id: "valueact",  label: "ValueAct Capital",     sub: "선행 진입 행동주의자",               type: "fund" },
        { id: "public",    label: "일반 주주",            sub: "Vanguard·Sequoia 포함",             type: "public" },
      ],
      edges: [
        { from: "pershing", to: "valeant",  label: "13D 5.7% 매집" },
        { from: "pearson",  to: "valeant",  label: "CEO 경영" },
        { from: "valueact", to: "valeant",  label: "4.3% 보유, 단계적 매도 중" },
        { from: "public",   to: "valeant",  label: "약 75% 분산 보유" },
        { from: "pershing", to: "pearson",  label: "공개 지지 — '제약업계 Buffett'" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pershing",  label: "퍼싱스퀘어 (엑싯)",    sub: "$11 전량 매도, 손실 ~$4.0B+",       type: "fund" },
        { id: "bausch",    label: "Bausch Health (改名)", sub: "2018년 사명 변경, Joseph Papa CEO", type: "target" },
        { id: "papa",      label: "Joseph Papa CEO",      sub: "Perrigo 출신, 부채 축소 주력",      type: "entity" },
        { id: "regulators", label: "SEC·DOJ·FTC",          sub: "Philidor 조사 지속",               type: "entity" },
      ],
      edges: [
        { from: "pershing", to: "bausch", label: "2017.3.13 전량 매도" },
        { from: "papa",     to: "bausch", label: "구조조정·자산 매각" },
        { from: "regulators", to: "bausch", label: "회계·약가 조사" },
      ],
    },
    keyTerms: [
      { label: "매집 기간",                    value: "2015년 2~3월",                            accent: false },
      { label: "지분율",                       value: "5.7% (~19.5백만주)",                      accent: true },
      { label: "평균 매입가",                  value: "~$196/주",                                accent: false },
      { label: "총 투입자본",                  value: "~$3.2B",                                  accent: true },
      { label: "사상 최고가 (2015.8)",         value: "$257 (+31%)",                             accent: false },
      { label: "Citron 리포트 후 1주일",        value: "-40%",                                    accent: true },
      { label: "이사회 합류 시점",              value: "2016년 3월",                              accent: false },
      { label: "전량 매도 시점·가격",           value: "2017년 3월 13일, ~$11/주",                accent: true },
      { label: "누적 실현 손실",                value: "~$4.0B+ (원금 대비 ~50%)",                accent: true },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "퍼싱스퀘어는 통상적인 행동주의 캠페인처럼 외부 재무 자문을 거의 쓰지 않고 자체 리서치로 포지션을 구축했다. 반대편 Valeant는 Philidor 위기 대응 과정에서 Davis Polk와 Sullivan & Cromwell을 중심으로 한 위기관리·내부조사·소송 방어 자문단을 구성했고, 이사회 자체 조사(Ad Hoc Committee)는 별도 외부 로펌이 진행했다. Citron Research는 전형적인 공매도 리서치 하우스로, 외부 자문 없이 독립적으로 리포트를 발표했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "퍼싱스퀘어 (행동주의 측)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Pershing Square 자체 리서치",
            role: "투자 의사결정·공개 프레젠테이션",
            roleType: "other",
            note: "Bill Ackman 본인과 퍼싱스퀘어 분석팀이 Valeant 모델에 대한 공개 프레젠테이션(2015년 11월 'Valeant: A Platform for Growth') 작성·발표.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "13D·이사회 합류 법무 자문",
            roleType: "legal",
            note: "2016년 3월 이사회 합류 관련 SEC 공시·내부자 거래 제한 윈도우(blackout) 자문.",
          },
          {
            firm: "Kirkland & Ellis",
            role: "퍼싱스퀘어 일반 법무",
            roleType: "legal",
            note: "퍼싱스퀘어 홀딩스 관련 공시·투자자 소통 일반 자문(공개 자료 기반 추정).",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Valeant (위기 대응 측)",
        initials: "VRX",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "Davis Polk & Wardwell",
            role: "위기관리·내부조사·SEC 대응 법무 자문",
            roleType: "legal",
            note: "Philidor 관계 종료, 회계 재작성, SEC·DOJ 조사 대응. 이사회 자체 조사(Ad Hoc Committee) 별도 외부 자문 운영.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "Valeant 일반 M&A·증권법 자문",
            roleType: "legal",
            note: "Pearson 체제 이전부터 Valeant 거래 자문. Philidor 사건 이후 Davis Polk와 역할 분담.",
          },
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (자산 매각·구조조정)",
            roleType: "financial",
            note: "Joseph Papa CEO 체제에서 부채 축소를 위한 자산 매각 검토 자문.",
          },
          {
            firm: "PwC (감사인)",
            role: "외부 감사인",
            roleType: "other",
            note: "2015~2016년 회계 재작성 과정에서 감사 의견 재발행. 회계 처리의 적정성 검토.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반으로, 일부 자문 관계는 공식 확인되지 않을 수 있습니다. 특히 위기관리 자문 라인은 시기별로 변경됐을 가능성이 큽니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "이 사례의 [밸류에이션]은 인수가가 아니라 [퍼싱스퀘어의 트레이드 P&L]이다. 평균 매입가 $196에 5.7% 지분(약 19.5백만주)을 잡았고, 2015년 8월 정점 $257에서는 약 $1.2B 평가이익이 있었다. 이후 Hillary Clinton 트윗·Citron 리포트·Philidor 폭로·CEO 교체·이사회 합류·전량 매도까지 18개월 동안 95% 이상의 시가 손실을 본 뒤 $11에 청산했다. 동시에 Valeant의 EV/EBITDA는 정점에서 ~12×, 매도 시점에는 부채 부담을 반영한 ~7~8× 수준으로 무너졌다.",
    rows: [
      { item: "퍼싱스퀘어 평균 매입가",       val: "~$196/주",     note: "2015년 2~3월 매집, 총 ~$3.2B" },
      { item: "지분율 / 보유주수",            val: "5.7% / ~19.5백만주", note: "13D 공시 기준" },
      { item: "2015.8 정점 주가",             val: "~$257/주",     note: "평가이익 ~$1.2B, +31%",         accent: true },
      { item: "2015.10.21 Citron 직전",       val: "~$147/주",     note: "Clinton 트윗 이후 이미 -40%" },
      { item: "2015.10.21 당일 종가",         val: "~$118/주",     note: "Citron 리포트 -19%" },
      { item: "2016.3 Pearson 퇴임 시점",     val: "~$26/주",      note: "10-K 연기·디폴트 우려" },
      { item: "2017.3.13 전량 매도가",        val: "~$11/주",      note: "퍼싱스퀘어 EXIT",                accent: true },
      { item: "EV/EBITDA (2015.8 정점)",       val: "~12×",         note: "FY2015E EBITDA 기준" },
      { item: "EV/EBITDA (2017.3 매도시)",     val: "~7~8×",        note: "부채 부담·EBITDA 감소 반영" },
      { item: "퍼싱스퀘어 누적 실현 손실",     val: "~$4.0B+",      note: "원금 $3.2B 대비 ~50% 손실 (배당·일부 매도 포함 추정)", accent: true },
    ],
    disclaimer: "주: 퍼싱스퀘어의 정확한 평균 매입가와 최종 손실액은 보고된 공시·서한별로 약간씩 차이가 있습니다($3.2B 매집 → 매도가 기준 손실 $2.8~4.0B+ 범위). 본 표는 공개 13D, 퍼싱스퀘어 투자자 서한, FT/WSJ 보도를 종합한 추정치입니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "퍼싱스퀘어는 왜 Valeant에 그렇게 강하게 베팅했나",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "Allergan 딜에서 검증된 신뢰: 2014년 Allergan 토홀드에서 Valeant와 협업한 경험을 통해 Mike Pearson의 운영 능력에 강한 확신을 갖게 됐다. 애크먼은 이를 '제약업계 Berkshire Hathaway'로 일반화했다.",
        "롤업 모델의 EPS 산수: R&D 절감 + 가격 인상 + 인수 누적으로 매년 두 자릿수 EPS 성장이 가능해 보였다. 정점에서 EV/EBITDA ~12×는 성장률 대비 저평가라는 논리.",
        "행동주의자가 아닌 '컨빅션 투자자(conviction investor)'로의 변신 의도: 단기 캠페인보다 장기 컴파운더에 집중하겠다는 퍼싱스퀘어 LP 전략과도 맞아떨어졌다.",
        "리스크는 인지했지만 과소평가: 약가 정치 리스크, Specialty Pharmacy 관계의 회계 회색지대, Net Debt/EBITDA ~6×의 레버리지를 모두 알고 있었지만, '경영의 질'이 이를 모두 상쇄한다고 봤다.",
        "공개 격찬과 컨빅션 트레이드의 함정: 한 번 공개적으로 '버핏 급'이라고 선언한 이후, 증거가 누적돼도 입장을 바꾸기 어려운 평판·심리적 록인이 작동했다.",
      ],
    },
    seller: {
      title: "Valeant는 왜 무너졌고, 무엇을 인정해야 했나",
      initials: "VRX",
      bg: "bg-rose-700",
      points: [
        "Philidor 관계의 회계적·법적 회색지대: Valeant는 Philidor를 비연결로 처리했지만 사실상 지배했다. 매출 인식·보험 우회·관계자 거래 공시에서 모두 문제가 됐고, 결과적으로 회계 재작성이 불가피했다.",
        "약가 인상 의존 매출의 정치적 한계: Isuprel·Nitropress·Cuprimine 등의 인상은 인수 직후 진행됐고, 의회 청문회·언론·SNS에서 동시에 공격받았다. 매출 모델 자체가 정치적·평판적 표적이 됐다.",
        "유기적 성장률의 부재: 2015 매출의 약 80%가 인수에서 나왔다. 인수 파이프라인이 멈추면 성장이 멈춘다는 구조적 약점이 Philidor 사건과 동시에 드러났다.",
        "Net Debt $30B의 부담: EBITDA 대비 6~7×의 레버리지는 EBITDA가 흔들리는 순간 디폴트 트리거 위험으로 변한다. 2016년 10-K 연기 시점에 이 위험이 현실화 직전까지 갔다.",
        "Mike Pearson의 책임: 이사회 자체 조사 결과 Philidor 관계 공시에 미흡. 2016년 3월 퇴임. 회사는 사명 변경(Bausch Health, 2018)을 통해 Valeant 브랜드 자체를 폐기해야 했다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "퍼싱스퀘어가 Valeant에서 전량 매도한 2017년 3월 이후 약 9년이 흘렀다. Valeant는 2018년 Bausch Health Companies로 사명을 바꿨고, 안과 자회사 Bausch + Lomb은 2022년 NYSE에 별도 상장됐다. 모회사 Bausch Health 주가는 2026년 5월 현재 약 $5 수준에서 거래되며, 시총은 약 $20억 안팎으로 2015년 정점 시총 $900억 대비 97% 이상 낮은 수준에 머물러 있다. 부채는 자산 매각과 차환을 통해 $30B 수준에서 $20B 초반까지 축소됐지만, 여전히 EBITDA 대비 부담스러운 레버리지가 회복의 발목을 잡고 있다. 한편 빌 애크먼은 Restaurant Brands International·Hilton·Howard Hughes·Chipotle·Universal Music Group·Lowe's·Google 등으로 포트폴리오를 재구성하며 2019~2021년 사상 최고 성과를 기록했고, 퍼싱스퀘어 홀딩스(PSH)의 NAV 대비 디스카운트도 2015~2018년의 -25~30%에서 -15% 안팎으로 축소됐다.",
    overallVerdict: "행동주의자의 컨빅션 트레이드 — 재무적 대실패, 그러나 산업·규제·운용업계 전반에 깊은 교훈",
    positives: [
      "Valeant 사태는 Specialty Pharmacy 모델과 약가 인상 의존 매출의 구조적 위험을 시장에 각인시켰다. 이후 같은 모델을 시도하던 다른 회사들도 차례로 재평가됐다.",
      "퍼싱스퀘어는 손실을 인정하고 2017년 3월 손절을 단행했다 — '컨빅션을 끝까지 유지'하는 대신 '손실 확정 + 포트폴리오 재구성'을 택한 결단력은 평가받을 만하다.",
      "애크먼 본인은 이후 공개 서한·인터뷰에서 Valeant 실패의 원인(컨빅션 트레이드의 맹점, 이사회 합류 후 매도 지연, 'great man theory'에 의존한 평가)을 정직하게 인정했다. 행동주의 운용업계의 자기교정 사례.",
      "퍼싱스퀘어 펀드는 2019~2021년 코로나 헤지(CDS 베팅)·Universal Music Group·Hilton 등으로 회복했고, 2023~2025년 다시 사상 최고 NAV를 갱신했다.",
    ],
    risks: [
      "Bausch Health는 여전히 부채·소송·약가 정치 리스크가 누적된 상태로, Bausch + Lomb 분사 이후에도 모회사의 자력 회복은 불확실하다. 2026년 현재 시총 약 $20억은 사실상 옵션 가치로 거래된다고 보는 시각이 많다.",
      "컨빅션 트레이드의 함정은 운용업계 전반에 여전히 존재한다. 공개적으로 강하게 격찬한 포지션을 평판 때문에 매도하지 못하는 패턴은 헤지펀드·롱숏 펀드 모두에 반복되는 구조적 위험이다.",
      "행동주의자의 이사회 합류는 거버넌스를 개선할 수 있지만, [회계·사업모델·정치 리스크가 동시에 터지는 상황]에서는 자유로운 매도 결정을 제약해 손실을 키울 수 있다. Valeant 사례가 명백한 교훈이다.",
    ],
    editorNote:
      "행동주의 투자자의 가장 큰 적은 적대적 경영진도, 규제도, 공매도 리서치도 아니다. 자기 자신의 [확신]이다. 빌 애크먼은 Allergan에서 9개월 만에 $2.6B를 번 직후, 같은 파트너 Valeant에 그 두 배 가까운 돈을 베팅했다가 약 18개월 만에 $4B+를 잃었다. 데이터가 바뀌면 결론을 바꿔야 한다는 가장 기본적인 원칙이, 공개 확신과 평판이라는 사회적 비용 앞에서 얼마나 쉽게 무너지는지를 보여준 사례다. JCPenney(2013, $500M 손실)·Sears(Lampert)와 함께 활동주의 투자의 [컨빅션 한계]를 가장 명확히 보여주는 교과서적 실패다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "VRX",
    targetBg: "bg-rose-700",
    acquirerName: "퍼싱스퀘어 캐피탈 (Bill Ackman)",
    targetName: "Valeant Pharmaceuticals International",
    dealTitle: "퍼싱스퀘어 × Valeant — 행동주의자의 $4B+ 손실",
    dealSize: "5.7% 지분 $3.2B 매집",
    dealSizeUSD: "$3.2B 투입 → ~$4.0B+ 손실",
    evEbitda: "~12× (정점) → ~7~8× (매도시)",
    closeDate: "2017년 3월 13일 (전량 매도)",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1,  text: "Pershing Square Capital Management, Schedule 13D — Valeant Pharmaceuticals (2015.03.09)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=valeant&type=SC+13D&dateb=&owner=include&count=40" },
    { id: 2,  text: "Citron Research, 'Valeant: Could This Be the Pharmaceutical Enron?' (2015.10.21)", url: "https://citronresearch.com/wp-content/uploads/2015/10/Valeant-Philidor-final-c.pdf" },
    { id: 3,  text: "Valeant Pharmaceuticals, Press Release — Termination of Philidor Relationship (2015.10.30)" },
    { id: 4,  text: "Valeant Ad Hoc Committee Report on Philidor and Related Matters (2016.04)" },
    { id: 5,  text: "Reuters, 'Ackman's Pershing Square exits Valeant, books $3 billion loss' (2017.03.13)", url: "https://www.reuters.com/article/business/ackmans-pershing-square-exits-valeant-books-3-billion-loss-idUSKBN16K1NW/" },
    { id: 6,  text: "Wall Street Journal, 'Inside Bill Ackman's Valeant Disaster' (2016.03)" },
    { id: 7,  text: "Financial Times, 'Valeant and the limits of conviction investing' (2016.04)" },
    { id: 8,  text: "New York Times (Andrew Ross Sorkin), 'Ackman's Valeant Mistake' (2017.03)" },
    { id: 9,  text: "U.S. Senate Special Committee on Aging — Hearing on Sudden Price Spikes in Off-Patent Drugs, Bill Ackman testimony (2016.04.27)" },
    { id: 10, text: "Pershing Square Holdings Annual Investor Letter (2015·2016·2017)", url: "https://pershingsquareholdings.com/" },
    { id: 11, text: "Valeant Pharmaceuticals 10-K Filings FY2011–FY2015 (SEC EDGAR)" },
    { id: 12, text: "Bausch Health Companies, 2018 Rebranding Press Release", url: "https://www.bauschhealth.com/" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "빌 애크먼 Valeant 실패 — 퍼싱스퀘어 $4B 손실의 모든 것",
    description:
      "퍼싱스퀘어 빌 애크먼이 Valeant Pharmaceuticals에 5.7% ($3.2B)를 베팅했다가 약 $4B+를 잃은 행동주의 역사 최대 실패. Philidor 회계 스캔들, Hillary Clinton 약가 트윗, Citron Research 'Pharmaceutical Enron' 리포트, 이사회 합류 후 매도까지 완전 해부.",
    keywords: [
      "빌 애크먼 Valeant 손실",
      "퍼싱스퀘어 Valeant 실패",
      "Philidor 회계 스캔들",
      "Citron Research Valeant",
      "Pharmaceutical Enron",
      "Mike Pearson 퇴임",
      "Bausch Health 사명 변경",
      "약가 인상 정치 리스크",
      "행동주의 컨빅션 트레이드",
      "Specialty Pharmacy 모델",
      "13D 행동주의 실패",
      "Allergan Valeant 후속편",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "특수약국 / Philidor (Specialty Pharmacy)",
      description: "고가·복잡 의약품을 환자에게 직접 배송·관리하는 약국 모델. Valeant는 Philidor를 회계상 비연결로 분류했지만 사실상 지배하면서 매출을 인식했고, 보험사 사전 승인을 우회하는 경로로 활용했다는 의혹으로 회계 재작성·SEC 조사의 핵심 쟁점이 됐다.",
    },
    {
      term: "플랫폼 파마 / 롤업 (Platform Pharma Roll-up)",
      description: "자체 R&D 대신 검증된 의약품 자산을 차입으로 인수해 비용을 절감하고 가격을 인상해 EBITDA를 키우는 모델. Valeant·Endo·Mallinckrodt가 대표 사례. EPS 산수상 매력적이지만 정치적·평판적 리스크와 인수 파이프라인 고갈에 취약하다.",
    },
    {
      term: "13D 행동주의 공시 (Schedule 13D)",
      description: "미국 증권법상 5% 초과 보유 시 10일 이내에 SEC에 제출하는 공시 양식. 단순 보유 의사(13G)와 달리 '경영에 영향'을 미칠 의도가 있을 때 사용된다. 퍼싱스퀘어는 2015년 3월 9일 Valeant 13D를 제출했다.",
    },
    {
      term: "컨빅션 트레이드 (Conviction Trade)",
      description: "분산보다 집중을 택해 한 포지션에 펀드 자본의 큰 비중을 베팅하는 운용 스타일. 성공 시 알파를 극대화하지만 실패 시 회복이 어렵다. 공개적으로 강하게 격찬한 후에는 평판 록인 효과로 손절 결정이 늦어지는 구조적 약점이 있다.",
    },
    {
      term: "자본 비용 잠금 (Cost-of-Funds Drag)",
      description: "포지션이 손실 상태에서도 즉시 매도하지 못할 때 발생하는 기회비용·자본 비용 부담. 퍼싱스퀘어는 2015~2017년 Valeant 보유 기간 동안 다른 좋은 기회를 활용하기 어려웠고, 이는 LP 환매 압력과 디스카운트로 이어졌다.",
    },
    {
      term: "이사회 합류 행동주의 (Board-Seat Activism)",
      description: "행동주의 펀드가 직접 이사회에 들어가 거버넌스 개선을 주도하는 방식. 거버넌스·전략 변화에는 효과적이지만, 회계·사업모델·정치 리스크가 동시에 발생할 때는 내부자 거래 제한으로 매도 결정이 제약되고 손실이 확대될 수 있다.",
    },
    {
      term: "약가 정치 리스크 (Drug Pricing Politics)",
      description: "약가 인상이 정치·언론·규제의 표적이 되는 위험. 2015년 Hillary Clinton의 트윗과 Martin Shkreli의 Daraprim 사태가 동시에 발생하며 특수약·롤업 파마 섹터 전체가 정치적 리스크 프리미엄을 받게 됐다.",
    },
    {
      term: "폐쇄형 펀드 NAV 디스카운트 (Closed-End Fund Discount)",
      description: "퍼싱스퀘어 홀딩스(PSH) 같은 폐쇄형 펀드의 시장 가격이 순자산가치(NAV)보다 낮게 거래되는 현상. Valeant 손실 이후 PSH는 -25~30%의 디스카운트가 장기화됐고, 자사주 매입과 성과 회복으로 2023년 이후에야 -15% 안팎으로 축소됐다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "빌 애크먼이 Valeant에서 정확히 얼마를 잃었나?",
      a: "공개된 자료를 종합하면 퍼싱스퀘어는 2015년 2~3월에 약 19.5백만주(지분 5.7%)를 평균 약 $196에 매집해 총 약 $3.2B을 투입했다. 2017년 3월 13일 약 $11/주에 전량 매도했고, 누적 실현 손실은 약 $4.0B+ 수준으로 추정된다(원금 대비 약 50%). 보고서별로 손실 추정치는 $2.8B에서 $4.0B+까지 범위가 있지만, 빌 애크먼 본인은 투자자 서한에서 'Valeant는 우리 펀드 역사상 가장 큰 단일 손실'이라고 인정했다.",
    },
    {
      q: "Philidor 스캔들은 정확히 무엇이었나?",
      a: "Philidor RX Services는 Valeant의 의약품을 환자에게 직접 배송하던 특수약국이다. 외형상 독립 법인이었지만 실질적으로는 Valeant가 지배했고, Valeant는 이를 통해 (1) 매출을 부풀려 인식하고, (2) 보험사의 사전 승인 절차를 우회해 Valeant 고가 의약품의 처방을 늘렸다는 의혹을 받았다. 2015년 10월 21일 Citron Research의 'Pharmaceutical Enron' 리포트로 폭로된 뒤, Valeant는 10월 30일 관계를 종료했고 2016년 회계 일부를 재작성했다.",
    },
    {
      q: "왜 애크먼은 Valeant 이사회에 합류했나? 매도를 더 빨리 했어야 하지 않나?",
      a: "2016년 3월 시점에서 Valeant는 10-K 제출 연기로 디폴트 위기에 빠져 있었다. 애크먼은 이미 5.7% 지분 보유자였고, 회사 가치를 지키기 위해 이사회에서 직접 구조조정을 주도하는 [방어적 무브]를 택했다. 그러나 이사회에 들어가는 순간 내부자 거래 제한 윈도우(blackout)에 묶였고, 공개적으로 회사를 옹호한 입장이라 매도 결정 자체가 평판에 부정적이었다. 결과적으로 이 결정은 매도 타이밍을 늦추는 요인이 됐고, 애크먼 본인도 후일 서한에서 '이사회 합류 결정을 다시 생각해 볼 여지가 있다'고 인정했다.",
    },
    {
      q: "Allergan에서 Valeant와 파트너였는데, 왜 Valeant 자체에 또 베팅했나?",
      a: "2014년 Allergan 토홀드 협업에서 애크먼은 Mike Pearson의 운영 능력과 의사결정 속도에 강한 인상을 받았다. Allergan을 빼앗긴 직후 Valeant 주가가 일부 조정을 받자, 애크먼은 이를 '바겐 진입 기회'로 봤다. 또한 퍼싱스퀘어 LP들에게 '단기 행동주의'보다 '장기 컴파운더 투자'로 전략을 이동하겠다고 약속한 시점이었고, Pearson을 '제약업계 Buffett'이라 공개 평가한 것도 그 흐름에서 나왔다. 결과적으로 한 파트너에 대한 두 번의 베팅 중 첫 번째는 +$2.6B, 두 번째는 -$4.0B+로 끝났다.",
    },
    {
      q: "Citron Research는 어떻게 Philidor를 알아냈나?",
      a: "Andrew Left와 Citron 팀은 처방 데이터·약국 라이센스 등록·법인 등기부등본을 교차 검증해 Philidor가 Valeant와 사실상 통합 운영되고 있음을 추적했다. 이 모델은 다른 특수약국과 비교했을 때 비정상적으로 Valeant 의약품에 집중돼 있었고, Valeant의 공시상 비연결 처리와 모순됐다. Citron은 이를 'Pharmaceutical Enron'(특수목적법인 SPE를 통한 매출 부풀리기라는 점에서 Enron과 유사)이라 표현했고, 이 표현이 시장 심리를 결정적으로 흔들었다.",
    },
    {
      q: "이 사례에서 가장 중요한 구조적 교훈은?",
      a: "세 가지다. 첫째, [컨빅션 트레이드의 맹점] — 한 번 공개적으로 강한 입장을 취하면 증거가 누적돼도 입장을 바꾸기 어렵다. 둘째, [이사회 합류 행동주의의 한계] — 거버넌스로 회계·사업모델·정치 리스크를 동시에 해결할 수는 없으며, 오히려 매도 결정을 제약한다. 셋째, [Specialty Pharmacy·롤업 모델의 회계적 취약성] — 자체 R&D가 없는 인수 의존 성장은 인수 파이프라인이 멈추거나 정치 리스크가 발현되는 순간 EPS가 빠르게 무너진다. JCPenney(2013) 손실과 함께, Valeant 사례는 행동주의 투자의 '컨빅션 한계'를 가장 명확히 보여주는 교과서다.",
    },
  ],
};

export default deal;
