/**
 * Bristol-Myers Squibb × Celgene $74B + CVR, 2019년 1월 발표 / 2019년 11월 클로징
 * CVR 마일스톤 트랩, 36일 지연으로 $6.4B이 증발한 all-or-nothing 구조의 교과서 사례.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bms-celgene-cvr",
  title: "$74B 합병에 숨겨진 CVR 폭탄, BMS가 36일 지연으로 $6.4B을 아낀 방법",
  subtitle:
    "BMS의 Celgene 인수 · $50 현금 + 1주 BMS + 1 CVR · CVR $9 옵션이 단 36일의 FDA 승인 지연으로 통째로 소멸한 all-or-nothing 마일스톤 구조의 해부",
  category: "ma",
  industry: "Pharmaceuticals / Biotech",
  country: "미국",
  announcedAt: "2019-01-03",
  closedAt: "2019-11-20",
  announcedDisplay: "2019년 1월 3일 (합병계약 발표)",
  closedDisplay: "2019년 11월 20일 (클로징)",
  readingMinutes: 16,
  tags: [
    "BMS",
    "Celgene",
    "CVR",
    "Contingent Value Right",
    "Liso-cel",
    "Breyanzi",
    "Ozanimod",
    "Ide-cel",
    "Abecma",
    "Revlimid",
    "Otezla",
    "Pharma M&A",
    "Diligent Efforts",
  ],
  excerpt:
    "2019년 1월 3일 BMS가 Celgene을 $74B에 인수한다고 발표했다. Celgene 주주는 1주당 [$50 현금 + BMS 1주 + CVR 1개]를 받았고, CVR은 향후 Ozanimod·Liso-cel·Ide-cel 세 가지 신약이 [모두] 정해진 기한 내 FDA 승인을 받으면 $9을 지급하는 옵션이었다. 두 개는 제때 통과했다. 그러나 Liso-cel(Breyanzi)의 FDA 승인이 2020-12-31 기한을 [36일] 넘긴 2021-02-05에 떨어지면서 [모든 milestone을 다 달성해야 지급]이라는 all-or-nothing 조항이 발동, CVR 약 7.14억 개 × $9 = [$6.4B의 지급의무가 통째로 증발]했다. 단 36일의 지연이 $6.4B을 좌우했고, 옛 Celgene 주주들은 BMS가 일부러 FDA 제출을 지연시켜 CVR을 죽였다며 소송을 제기, 2024년 9월 BMS가 1심에서 승소했다. CVR의 위험성과 \"diligent efforts\" 조항의 해석을 둘러싼 미국 M&A 사상 가장 비싼 한 줄짜리 조항 사례.",

  acquirer: { initials: "BMY", bg: "bg-violet-700", label: "Bristol-Myers Squibb (BMY)" },
  target: { initials: "CELG", bg: "bg-rose-600", label: "Celgene Corporation (CELG)" },

  background: [
    "Celgene은 1986년 분사 설립된 뉴저지 기반 바이오텍으로, 다발성골수종 치료제 Revlimid(레날리도마이드)·Pomalyst(포말리도마이드)·Otezla(아프레밀라스트, 건선) 등을 보유한 미국 5위급 제약사였다. 2018년 매출 약 $15.3B, EBITDA 약 $6.7B, 시가총액 약 $50B 수준. 그러나 매출의 [60% 이상]이 Revlimid 한 약품에 집중돼 있었고, Revlimid의 미국 특허는 2022년부터 2026년 사이 단계적으로 제네릭에 노출될 [패턴트 클리프] 일정이 명확했다. Celgene 경영진은 2017~2018년 내내 \"Revlimid 이후\"를 찾는 데 실패했고, 주가는 2017년 고점 대비 약 절반으로 추락했다.",
    "Bristol-Myers Squibb은 항암 면역치료제 Opdivo(니볼루맙, PD-1 저해제)와 Eliquis(아픽사반, 항응고제)를 두 축으로 한 중견 제약사였다. 2018년 매출 약 $22.6B, 시가총액 약 $80B. Opdivo는 경쟁 제품인 Merck의 Keytruda에 폐암 1차 치료제 시장에서 [핵심 임상에서 밀려나며] 시장점유율이 빠르게 역전되고 있었고, BMS의 파이프라인은 \"포스트-Opdivo\"가 부족하다는 평가가 굳어지고 있었다. 두 회사 모두 [성장 동력 부족]이라는 공통 위기에 직면해 있었다.",
    "[$74B 거래 발표.] 2019년 1월 3일 BMS는 Celgene 인수를 발표했다. 인수가는 Celgene 주식 1주당 [$50 현금 + BMS 보통주 1.0주 + CVR 1개], 발표 당시 시점 환산으로 1주당 약 $102.43, 총 거래가치 약 $74B(Celgene 순부채 포함 EV 기준). 발표 직후 BMS 주가는 [-13.3%] 급락(2019-01-03 종가 기준), 시장은 \"가격을 너무 많이 지불했다\"고 평가했다. 헤지펀드 Starboard Value는 이후 BMS 주주에게 합병 부결을 제안하며 위임장 경쟁을 시도했으나, 2019년 4월 12일 BMS 주주총회에서 [75%] 찬성으로 합병이 승인됐다.",
    "[CVR의 정체.] CVR(Contingent Value Right)은 인수 후 일정한 임상·승인 마일스톤이 달성되면 추가 대가를 지급하는 옵션형 증권이다. 본 거래의 CVR은 [Ozanimod·Liso-cel·Ide-cel] 세 가지 신약이 각각의 기한 내 FDA 승인을 받으면 1 CVR당 $9을 지급하는 구조. CVR은 NYSE에 [BMY.RT] 종목코드로 거래됐고, 약 7.14억 개가 발행됐다. 최대 지급액은 약 7.14억 × $9 = [약 $6.4B]. 결정적 조건은 [세 가지 마일스톤을 모두 달성해야 $9 전액이 지급]된다는 all-or-nothing 구조, 한 개라도 놓치면 지급의무 자체가 [전액] 소멸한다.",
    "[독점규제와 클로징.] FTC는 BMS-Celgene 결합이 건선 치료제 시장에서 경쟁 제한을 일으킬 수 있다고 보고, Celgene이 보유한 Otezla(아프레밀라스트)를 매각하라는 [동의명령(Consent Order)]을 부과했다. Celgene은 2019년 11월 21일 Otezla를 Amgen에 [$13.4B 현금]에 매각했고, 그 직후 BMS-Celgene 합병은 2019년 11월 20일에 클로징됐다. Otezla 매각 대금은 사실상 BMS의 현금 지급 부담 일부를 상쇄했다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 $74B (EV 기준, CVR 명목가치 포함)",
    acquirerName: "Bristol-Myers Squibb Company (NYSE: BMY)",
    targetName: "Celgene Corporation (구 NASDAQ: CELG)",
    announcedDisplay: "2019년 1월 3일",
    closedDisplay: "2019년 11월 20일",
    country: "US",
  },

  executiveSummary: [
    "[$74B 메가딜 + CVR] BMS가 Celgene을 약 $74B(EV 기준)에 인수, Celgene 주식 1주당 [$50 현금 + BMS 1주 + CVR 1개] 지급 (2019-01-03 발표, 2019-11-20 클로징)",
    "[CVR의 구조] Ozanimod(다발성경화증)·Liso-cel(B세포 림프종 CAR-T)·Ide-cel(다발성골수종 CAR-T) 세 신약이 [모두] 정해진 기한 내 FDA 승인을 받으면 1 CVR당 $9 지급, 발행 CVR 약 7.14억 개 × $9 = 최대 약 [$6.4B]",
    "[All-or-Nothing 조항] 한 개 마일스톤이라도 놓치면 전체 $9 지급의무가 [전액] 소멸. CVR 구조 설계의 결정적 트랩",
    "[36일이 $6.4B을 좌우] Ozanimod 2020.3 승인 [통과], Ide-cel(Abecma) 2021.3.26 승인 [통과], 그러나 Liso-cel(Breyanzi)이 기한 2020-12-31을 [36일] 넘긴 2021-02-05에 승인되면서 CVR 전체가 무효화, 약 $6.4B의 지급의무 증발",
    "[NYSE BMY.RT 가격 폭락] CVR은 발행 직후 NYSE에 별도 종목코드로 거래, 2019년 11월 클로징 시 $2.50 안팎까지 거래되다가 Liso-cel FDA 추가 검토·제조 시설 실사 지연 소식이 누적되며 2020년 말 $0.05 수준으로 폭락, 사실상 휴지조각화",
    "[옛 Celgene 주주들의 집단소송] UMB Bank가 옛 Celgene 주주 신탁관리인 자격으로 BMS를 상대로 $6.4B 손해배상 소송을 SDNY 연방법원에 제기, BMS가 [\"diligent efforts\"] 의무를 위반해 일부러 FDA 제출을 지연시켰다는 주장. 2024년 9월 BMS가 1심 본안에서 승소, 항소 단계 진입",
    "[FTC 분할 명령] FTC가 건선 치료제 시장 경쟁 제한 우려로 Celgene의 Otezla 분할 매각을 명령, Celgene이 2019년 11월 Amgen에 [$13.4B]에 매각해 합병 클로징 직전에 처리",
    "[전략적 결과] BMS는 Celgene 인수로 Revlimid·Pomalyst·Otezla(분할)·Liso-cel·Ide-cel·Ozanimod를 확보해 매출 기준 글로벌 Top 5 제약사로 진입. 그러나 Revlimid의 미국 LOE(특허 만료)가 2022~2026년 단계적으로 진행되며 [패턴트 클리프] 위험이 가시화",
  ],

  industryOverview: {
    body: "2010년대 후반 미국 제약 M&A는 [패턴트 클리프 회피]가 핵심 화두였다. Pfizer·Allergan·AbbVie·Merck·BMS 같은 대형 제약사들이 모두 핵심 약품의 LOE 일정에 직면하며 외부 파이프라인 확보를 위한 메가딜 경쟁에 들어갔다. 한편 바이오텍 자산의 [임상 성공 불확실성]을 가격에 어떻게 반영할지가 항상 협상의 쟁점이었고, 그 해법으로 [CVR(Contingent Value Right)] 구조가 1980년대부터 산발적으로 사용되어 왔다. CVR은 인수 후 특정 임상·승인·매출 마일스톤을 달성하면 추가 대가를 지급하는 옵션 증권이다. Sanofi-Genzyme(2011), Sanofi-Bioverativ(2018), Allergan-Tobira(2016) 등 다수의 바이오텍 M&A에서 사용됐고, 통상 인수가의 5~15% 수준을 CVR로 분리해 가격 격차를 메우는 협상 도구로 활용된다.",
    metrics: [
      { label: "BMS 시가총액 (2018년 말)",       value: "약 $80B",      sub: "발표 직전" },
      { label: "Celgene 시가총액 (2018년 말)",   value: "약 $50B",      sub: "발표 직전" },
      { label: "거래 EV",                         value: "약 $74B",      sub: "Celgene 순부채 포함" },
      { label: "CVR 발행량",                       value: "약 7.14억 개",  sub: "Celgene 주식 1주당 1 CVR" },
      { label: "CVR 최대 지급액",                  value: "약 $6.4B",     sub: "7.14억 × $9" },
      { label: "Otezla 분할 매각가",                value: "$13.4B",      sub: "Amgen에 매각, 2019.11" },
    ],
    subBody:
      "본 거래의 CVR은 [세 가지 마일스톤을 모두 달성해야 지급]되는 all-or-nothing 구조라는 점이 가장 이례적이다. 통상 CVR은 각 마일스톤별로 지급액을 분리해 [부분 달성도 부분 지급]을 인정하는 게 일반적이다. 본 거래에서 BMS가 all-or-nothing 구조를 관철한 것은, $6.4B의 옵션 지급의무가 단 하나의 마일스톤 미달로도 [전액] 소멸하는 비대칭 구조를 노린 것으로 평가받는다.",
    players: [
      { name: "Bristol-Myers Squibb", role: "인수자, Opdivo·Eliquis 보유 중견 제약사" },
      { name: "Celgene",              role: "피인수자, Revlimid·Pomalyst·Otezla 보유 미국 5위급 제약사" },
      { name: "Amgen",                role: "Otezla 인수자 ($13.4B), FTC 분할 명령에 따른 매수자" },
      { name: "FTC",                  role: "독점규제 당국, Otezla 분할 매각 명령" },
      { name: "FDA",                  role: "Ozanimod·Liso-cel·Ide-cel 승인 규제기관, 마일스톤 결정권자" },
      { name: "Starboard Value",      role: "헤지펀드, BMS 주주에 합병 부결 캠페인 시도 (실패)" },
      { name: "Wellington Management", role: "Celgene 주요 주주, 합병가 너무 낮다며 반대 의사 표명 (소수)" },
      { name: "UMB Bank",             role: "옛 Celgene 주주 CVR 신탁관리인, $6.4B 손해배상 소송 원고" },
    ],
  },

  companyOverview: {
    targetName: "Celgene Corporation",
    body: "Celgene은 1986년 Celanese Corporation에서 분사 설립된 뉴저지 서밋 기반의 바이오제약사다. 1998년 탈리도마이드(임신중 기형 유발로 악명 높았던 약품)의 다발성골수종 적응증을 재발견하면서 종양학·면역질환 전문 제약사로 변모했다. 핵심 매출원은 [Revlimid(레날리도마이드, 다발성골수종 1차 치료제)], [Pomalyst(포말리도마이드, 다발성골수종 3차 치료제)], [Otezla(아프레밀라스트, 건선·건선관절염)], 그리고 임상 후기 파이프라인의 [Ozanimod(다발성경화증)·Liso-cel(B세포 림프종 CAR-T)·Ide-cel(다발성골수종 CAR-T)]. 2018년 매출의 약 [63%]가 Revlimid에 집중돼 있었고, Revlimid의 미국 특허는 2022~2026년 단계적으로 만료되는 LOE 일정이 명확해 \"Revlimid 이후\"가 회사 전체의 실존 과제였다.",
    metrics: [
      { label: "설립연도",            value: "1986년",        sub: "Celanese에서 분사" },
      { label: "본사",                 value: "Summit, NJ",     sub: "뉴저지 서밋" },
      { label: "FY2018 매출",          value: "$15.28B",       sub: "+18% YoY" },
      { label: "FY2018 EBITDA",        value: "$6.74B",        sub: "EBITDA 마진 약 44%" },
      { label: "Revlimid 비중",         value: "약 63%",        sub: "FY2018 매출 기준" },
      { label: "직원 수",              value: "약 8,000명",    sub: "2018년 말 기준" },
    ],
    financials: [
      { year: "FY2014", revenue: 7670,  cogs: 320,  grossProfit: 7350,  sga: 2380, operatingIncome: 2280, ebitda: 2820 },
      { year: "FY2015", revenue: 9256,  cogs: 380,  grossProfit: 8876,  sga: 2920, operatingIncome: 1916, ebitda: 2580 },
      { year: "FY2016", revenue: 11229, cogs: 480,  grossProfit: 10749, sga: 3500, operatingIncome: 3779, ebitda: 4500 },
      { year: "FY2017", revenue: 13003, cogs: 520,  grossProfit: 12483, sga: 3800, operatingIncome: 4690, ebitda: 5570 },
      { year: "FY2018", revenue: 15281, cogs: 600,  grossProfit: 14681, sga: 4280, operatingIncome: 5640, ebitda: 6740 },
    ],
    financialsNote: "단위: USD M (백만 달러) | US GAAP 연결 기준 | 출처: Celgene 10-K (FY2014~FY2018) | R&D 비용은 SG&A에 통합 표시되지 않음, 별도 추정 항목으로 영업이익 도출",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "본 거래는 [역삼각합병(Reverse Triangular Merger)] 구조로, BMS가 100% 자회사 [Burgundy Merger Sub, Inc.]을 설립하고 이 자회사가 Celgene과 합병해 Celgene이 존속법인으로 BMS의 자회사가 되는 형식이다. Celgene 주주는 1주당 [① $50.00 현금 + ② BMS 보통주 1.0주 + ③ CVR 1개]를 받았다. 발표일 BMS 종가 기준 환산 시 Celgene 주식 1주당 약 $102.43, 총 거래가치 약 $74B(Celgene 순부채 포함 EV). 합병 자금은 BMS 자체 현금 + $33.5B 규모의 신디케이트 브리지론 + 채권 발행 조합으로 조달됐다.",
    preOwnership: {
      nodes: [
        { id: "bmy_pre",  label: "BMS 주주",       sub: "100%",                 type: "public" },
        { id: "bmy",      label: "Bristol-Myers Squibb", sub: "Opdivo·Eliquis",  type: "acquirer" },
        { id: "celg_pre", label: "Celgene 주주",   sub: "100% (약 7.14억주)",    type: "public" },
        { id: "celg",     label: "Celgene",        sub: "Revlimid·Pomalyst·Otezla", type: "target" },
      ],
      edges: [
        { from: "bmy_pre",  to: "bmy",  label: "100%" },
        { from: "celg_pre", to: "celg", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bmy_post_legacy", label: "기존 BMS 주주", sub: "약 69% (희석 후)",      type: "public" },
        { id: "celg_post",       label: "옛 Celgene 주주", sub: "약 31% + CVR 1주당 1개", type: "public" },
        { id: "bmy_post",        label: "Bristol-Myers Squibb", sub: "통합 후 신규 BMS", type: "acquirer" },
        { id: "celg_sub",        label: "Celgene (BMS 자회사)", sub: "역삼각합병 후 존속", type: "target" },
        { id: "amgen",           label: "Amgen",         sub: "Otezla 인수 ($13.4B)",   type: "entity" },
      ],
      edges: [
        { from: "bmy_post_legacy", to: "bmy_post",  label: "약 69%" },
        { from: "celg_post",       to: "bmy_post",  label: "약 31% (BMS 1주 + $50 + CVR)" },
        { from: "bmy_post",        to: "celg_sub",  label: "100% (Celgene 자회사화)" },
        { from: "celg_sub",        to: "amgen",     label: "Otezla 매각 $13.4B" },
      ],
    },
    keyTerms: [
      { label: "거래 구조",            value: "역삼각합병 (Reverse Triangular Merger)" },
      { label: "Celgene 주당 대가",     value: "$50.00 현금 + BMS 1.0주 + CVR 1개",                                accent: true },
      { label: "발표일 환산 주당 가치",   value: "약 $102.43 (2019-01-02 BMS 종가 기준)" },
      { label: "총 거래가치",            value: "약 $74B (EV 기준)",                                                 accent: true },
      { label: "CVR 마일스톤 ①",        value: "Ozanimod (다발성경화증) FDA 승인 by 2020-12-31 → [달성 2020.3]",  accent: true },
      { label: "CVR 마일스톤 ②",        value: "Liso-cel/Breyanzi (B세포 림프종 CAR-T) FDA 승인 by 2020-12-31 → [미달, 2021-02-05 승인]", accent: true },
      { label: "CVR 마일스톤 ③",        value: "Ide-cel/Abecma (다발성골수종 CAR-T) FDA 승인 by 2021-03-31 → [달성 2021-03-26]", accent: true },
      { label: "CVR 지급조건",          value: "세 마일스톤 모두 달성 시에만 1 CVR당 $9 지급 (all-or-nothing)",     accent: true },
      { label: "CVR 발행량",            value: "약 7.14억 개 (Celgene 주식 1주당 1개)" },
      { label: "CVR 최대 지급액",        value: "약 $6.4B (실제 지급 = $0)",                                         accent: true },
      { label: "CVR 상장",              value: "NYSE 종목코드 [BMY.RT]" },
      { label: "노력의무 조항",          value: "BMS는 각 마일스톤 달성을 위해 \"diligent efforts\"를 다할 의무 부담", accent: true },
      { label: "FTC 분할 조건",         value: "Celgene의 Otezla를 Amgen에 $13.4B에 매각 (2019-11)" },
      { label: "인수 자금 조달",         value: "자체 현금 + $33.5B 브리지론 (Morgan Stanley·MUFG 주선) + 채권" },
      { label: "주총 승인",             value: "BMS 주총 75% 찬성 (2019-04-12), Celgene 주총 압도 다수 승인" },
      { label: "클로징",                value: "2019년 11월 20일" },
    ],
  },

  advisors: {
    body: "양 측에 글로벌 IB·로펌이 풀라인업으로 동원된 메가딜이었다. BMS 측은 Morgan Stanley·Evercore가 재무 자문 공동 주관, 법률은 Kirkland & Ellis가 거래 구조 설계와 CVR 조항 작성을 주도했다. Celgene 측은 J.P. Morgan·Citi가 재무 자문, Wachtell, Lipton, Rosen & Katz가 법률 자문을 맡았다. 이후 CVR 소송 단계에서는 Skadden, Arps가 BMS의 변호인단으로, 원고(옛 Celgene 주주 측)에서는 Bernstein Litowitz의 Mark Lebovitch 등이 등장했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BMS (인수자)",
        initials: "BMY",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "거래 구조·자금조달·CVR 가격 협상 주관, 브리지론 공동 주선",
          },
          {
            firm: "Evercore",
            role: "재무 자문 (Co-advisor)",
            roleType: "financial",
            note: "기업가치 평가·fairness opinion 제공",
          },
          {
            firm: "Dyal Co.",
            role: "재무 자문",
            roleType: "financial",
            note: "BMS 이사회 보조 자문",
          },
          {
            firm: "Kirkland & Ellis",
            role: "법률 자문 (Lead)",
            roleType: "legal",
            note: "거래 구조 설계·CVR 계약서 작성·FTC 대응 주관",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "법률 자문 (CVR 소송 단계)",
            roleType: "legal",
            note: "UMB Bank v. BMS 소송에서 BMS 변호 (2021년 이후)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Celgene (피인수자)",
        initials: "CELG",
        bg: "bg-rose-600",
        advisors: [
          {
            firm: "J.P. Morgan",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "Celgene 매각 자문·fairness opinion 제공",
          },
          {
            firm: "Citi",
            role: "재무 자문 (Co-advisor)",
            roleType: "financial",
            note: "Celgene 측 보조 재무 자문",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법률 자문 (Lead)",
            roleType: "legal",
            note: "거래 구조·이사회 fiduciary duty·CVR 협상 주관",
          },
          {
            firm: "Bernstein Litowitz Berger & Grossmann",
            role: "원고 측 법률 (CVR 소송 단계)",
            roleType: "legal",
            note: "UMB Bank 측 변호인단, Mark Lebovitch 등 참여",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공식 발표·S-4·법원 기록 기반. 일부 자문사는 SEC·법원 문서 외에는 공식 확인되지 않음.",
  },

  valuation: {
    body: "본 거래의 Celgene 주당 인수가는 발표일 시점 BMS 종가($52.43, 2019-01-02 기준)로 환산하면 [현금 $50 + BMS 주식 $52.43 + CVR 약 $9 × 옵션 가치] = 약 $102.43이었다. CVR의 [발표 시점 옵션 가치]는 시장에서 $1~$3 수준으로 추정됐다(블랙숄즈 추정). 실제 CVR은 2019년 11월 NYSE 상장 직후 $2.50 안팎까지 거래되다 마일스톤 지연 우려가 누적되며 폭락, 2020년 12월 31일 Liso-cel 기한 미달이 확정되며 사실상 휴지조각이 됐다. 본 거래의 헤드라인 EV/EBITDA는 약 [11.0x](EV $74B / FY2018 EBITDA $6.74B), Revlimid LOE 위험을 감안하면 시장 평균 대비 [높은 가격]으로 평가받았다.",
    rows: [
      { item: "Celgene 주당 현금 대가",          val: "$50.00",         note: "결정적 현금 부분" },
      { item: "Celgene 주당 BMS 주식 대가",      val: "BMS 1.0주",      note: "발표일 환산 약 $52.43" },
      { item: "Celgene 주당 CVR (옵션 가치)",   val: "약 $1~$3",       note: "발표 시점 시장 추정", accent: true },
      { item: "Celgene 주당 총 헤드라인 가치",    val: "약 $102.43",     note: "2019-01-02 BMS 종가 기준" },
      { item: "Celgene 발행주식 수",             val: "약 7.14억 주",   note: "CVR 발행량과 동일" },
      { item: "주식 가치 (Equity Value)",        val: "약 $74B",        note: "현금+주식+CVR 명목 합계",      accent: true },
      { item: "Celgene 순부채 (2018년 말)",       val: "약 +$13B",       note: "EV 계산에 가산" },
      { item: "총 거래 EV",                      val: "약 $74B (EV)",    note: "Celgene 순부채 포함",          accent: true },
      { item: "FY2018 EBITDA",                  val: "$6.74B",         note: "Celgene 10-K 기준" },
      { item: "헤드라인 EV/EBITDA",              val: "약 11.0x",       note: "Revlimid LOE 위험 반영 전",   accent: true },
      { item: "CVR 최대 지급액 (전체)",            val: "약 $6.4B",       note: "7.14억 × $9 (all-or-nothing)", accent: true },
      { item: "실제 CVR 지급액 (2021.12.31 시점)",  val: "$0",             note: "Liso-cel 36일 지연으로 전액 소멸", accent: true },
    ],
    disclaimer: "주: 가격 수치는 SEC S-4 공시·언론 보도·시장 추정 기반. 일부 옵션 가치는 추정.",
  },

  rationale: {
    buyer: {
      title: "BMS, 왜 $74B을 베팅했나",
      initials: "BMY",
      bg: "bg-violet-700",
      points: [
        "[Opdivo 의존도 해소] Opdivo가 폐암 1차 치료제 시장에서 Merck Keytruda에 밀리며 [포스트-Opdivo] 파이프라인 확보가 시급. Celgene의 종양학·면역학 파이프라인이 즉시 보강 수단",
        "[즉각 현금흐름 추가] Celgene FY2018 EBITDA $6.74B을 통째로 통합, BMS의 연결 EBITDA가 단번에 2배 가까이 확대. 매출 기준 글로벌 Top 5 제약사로 도약",
        "[CVR로 가격 격차 메우기] Celgene 측은 [\"우리 파이프라인이 다 성공하면 우리는 더 받아야 한다\"]는 입장, BMS는 [\"임상 실패 리스크는 우리가 못 진다\"]는 입장. CVR이 이 격차를 메우는 협상 도구, BMS 입장에서는 임상 성공 시에만 추가 지급하는 옵션",
        "[All-or-Nothing 구조의 비대칭] 세 마일스톤 모두 달성해야 $9 지급, 한 개라도 놓치면 [$6.4B 전액 소멸]. BMS 입장에서 매우 비대칭 유리한 옵션 구조 설계, 사후적으로 이 조항이 결정적이었음",
        "[패턴트 클리프 회피의 역설] Eliquis 특허 만료(2026~2028년 예정) 대비 외부 파이프라인 확보가 명분이었으나, Celgene의 Revlimid 자체가 더 가까운 LOE(2022~2026)를 안고 있어 [BMS가 패턴트 클리프를 다른 패턴트 클리프로 갈아탔다]는 시장 비판도 존재",
      ],
    },
    seller: {
      title: "Celgene, 왜 $74B에 팔았나",
      initials: "CELG",
      bg: "bg-rose-600",
      points: [
        "[Revlimid 이후의 부재] FY2018 매출의 63%가 Revlimid 단일 약품에 집중. 2022~2026 LOE 일정이 명확한데 후속 매출원 부재. 임상 후기 파이프라인(Ozanimod·Liso-cel·Ide-cel) 단독 상업화 위험이 큼",
        "[2017~2018 주가 반토막] 2017년 고점 약 $147 → 2018년 9월 약 $66까지 하락. GED-0301 임상 실패·Ozanimod CRL(승인 거절) 등 부정적 뉴스 연쇄. 단독 회복 전략에 시장 신뢰 상실",
        "[$50 현금 즉시 확보 + 업사이드 보존] Celgene 주주는 [현금 $50]으로 즉시 일부 회수, [BMS 주식 1주]로 통합 회사 업사이드 참여, [CVR 1개]로 파이프라인 성공 시 추가 $9까지. 위험 분산 구조에 가까움",
        "[Celgene 경영진의 협상 카드, CVR] Celgene 경영진은 \"우리 파이프라인 가치를 BMS가 다 인식 안 한다\"는 입장. CVR을 협상 도구로 활용해 외형 인수가를 $102.43 수준으로 올리는 데 성공. 다만 사후적으로 CVR이 휴지조각이 되면서 실제 회수는 $50 + BMS 주식뿐",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래는 2019년 11월 20일에 클로징됐고, CVR은 2021년 12월 31일을 끝으로 지급의무가 [전액 소멸]됐다. Ozanimod와 Ide-cel(Abecma)은 기한 내 FDA 승인을 받았으나, Liso-cel(Breyanzi)이 2020-12-31 기한을 [36일] 넘긴 2021-02-05에 승인을 받으면서 all-or-nothing 조항이 발동해 약 $6.4B의 지급의무 전체가 사라졌다. 그 직후 옛 Celgene 주주 신탁관리인 UMB Bank가 BMS를 상대로 SDNY 연방법원에 $6.4B 손해배상 소송을 제기, BMS가 [\"diligent efforts\"](CVR 계약상 노력의무) 조항을 위반해 일부러 FDA 제출과 제조시설 실사를 지연시켰다고 주장했다. 2024년 9월 30일 SDNY는 BMS의 본안 손배 책임을 부정하는 판결을 내렸고, 원고는 항소했다. 별개로 2024~2025년 옛 Celgene 주주 일부가 재차 클래스 액션을 제기해 사건은 일부 부활했다(2025년 일부 청구 기각, 일부 살아남음). 한편 Revlimid LOE는 2022년 미국 제네릭 출시로 본격화돼 BMS의 2023~2025년 매출 성장률이 시장 기대치를 하회, BMS 주가는 2019년 발표 직후 수준에서 횡보를 거듭하고 있다.",
    overallVerdict: "BMS는 CVR로 $6.4B을 아꼈으나, Revlimid LOE 충격으로 인수 자체의 ROI는 시장 평균 이하. 옛 Celgene 주주는 CVR이 사실상 사기였다는 정서가 강함",
    positives: [
      "[BMS] CVR all-or-nothing 구조 설계로 약 $6.4B의 지급의무 회피, 사후적으로 본 거래 가장 큰 재무 이득",
      "[BMS] Liso-cel(Breyanzi)·Ide-cel(Abecma) 등 CAR-T 자산 확보로 종양학 포트폴리오 강화, 2024년 두 자산 합산 매출 $1B+ 진입",
      "[Celgene 옛 주주] 현금 $50 + BMS 주식 1주 즉시 회수, 시점에 따라 부분적 회수 가능 (다만 CVR 가치 $0)",
      "[법리적 선례] BMS 1심 승소(2024-09-30)로 [\"diligent efforts\"] 조항에 대한 미국 법원의 첫 본격 해석 선례 확립, 향후 CVR 분쟁의 입증책임 기준 형성",
    ],
    risks: [
      "[BMS] Revlimid 미국 LOE가 2022년 본격화돼 매출 성장률 둔화, BMS 주가가 2019~2026년 사이 사실상 횡보. 인수 자체의 ROI는 시장 평균 이하",
      "[BMS] CVR 소송 항소심·후속 클래스 액션 진행 중, 최악의 경우 $6.4B 손배 책임이 부활할 잠재 위험. 2026년 5월 기준 확정 판결 아직 없음",
      "[CVR 보유자] $9 옵션이 휴지조각화, NYSE BMY.RT 종가 기준 $2.50 → $0.05 → 상장폐지. 옛 Celgene 주주들의 집단 신뢰 상실",
      "[제약 M&A 전반] 본 거래의 all-or-nothing CVR 트랩이 시장에 알려지면서, 이후 바이오텍 매각자들이 CVR 구조에 [부분 달성 시 부분 지급] 조항을 강하게 요구하는 협상 트렌드 형성",
    ],
    editorNote:
      "이 거래는 [한 줄짜리 계약 조항이 $6.4B을 좌우한] 미국 M&A 사상 가장 비싼 사례로 기록될 가능성이 크다. [\"세 마일스톤 모두 달성 시에만 $9 지급\"]이라는 all-or-nothing 조항을 BMS가 관철하고 Celgene 측이 수용한 그 순간, $6.4B의 옵션 가치가 [세 가지 사건의 결합 확률]에 묶여버렸다. 단 36일의 FDA 승인 지연으로 그 옵션이 통째로 증발한 결과는, 옵션 가치 평가에서 [상관관계 가정과 시간 가정]이 얼마나 결정적인지를 보여주는 교과서적 사례다. 한편 \"diligent efforts\" 조항을 둘러싼 BMS와 옛 Celgene 주주의 법정 공방은, M&A 계약상 노력의무 조항이 \"단순한 보일러플레이트\"가 아니라는 점을 산업 전반에 각인시켰다. 2026년 5월 기준 항소심·후속 소송이 진행 중이며 최종 판결은 아직 확정되지 않았다.",
  },

  tombstone: {
    acquirerInitials: "BMY",
    acquirerBg: "bg-violet-700",
    targetInitials: "CELG",
    targetBg: "bg-rose-600",
    acquirerName: "Bristol-Myers Squibb Company",
    targetName: "Celgene Corporation",
    dealTitle: "$74B Acquisition with $9 CVR Milestone Trap, How 36 Days Erased a $6.4B Option",
    dealSize: "$74B",
    dealSizeUSD: "approx. USD 74B (EV)",
    evEbitda: "approx. 11.0x (EV/FY2018 EBITDA)",
    closeDate: "Nov 20, 2019",
  },

  sources: [
    { id: 1, text: "Bristol-Myers Squibb 공식 보도자료, Celgene 인수 발표 (2019-01-03)", url: "https://www.bms.com/media/media-library/news-releases.html" },
    { id: 2, text: "SEC EDGAR, BMS Form S-4/A (CVR 계약 상세 부속서 포함, 2019)", url: "https://www.sec.gov/Archives/edgar/data/0000014272/000114036119003503/s002620x3_s4a.htm" },
    { id: 3, text: "SEC EDGAR, BMS Form 8-A12B (CVR NYSE 상장 등록서류, 2019-11)", url: "https://www.sec.gov/Archives/edgar/data/0000014272/000114036119021574/form8a12b.htm" },
    { id: 4, text: "Reuters, BMS to buy Celgene for about $74 billion (2019-01-03)", url: "https://www.reuters.com/article/us-celgene-m-a-bristol-myers-idUSKCN1OX0TT" },
    { id: 5, text: "Pharmaphorum, BMS/Celgene merger payout evaporates as CVR deadline passes (2021)", url: "https://pharmaphorum.com/news/bms-celgene-merger-payout-evaporates-as-cvr-deadline-passes" },
    { id: 6, text: "FiercePharma, After delays and a CVR miss, Bristol's liso-cel wins its FDA nod (2021-02-05)", url: "https://www.fiercepharma.com/pharma/after-delays-and-a-cvr-miss-bristol-s-liso-cel-wins-its-fda-nod" },
    { id: 7, text: "BioSpace, With Celgene CVR Dead, Investors Miss Out on $6.4 Billion Payday (2021)", url: "https://www.biospace.com/with-no-liso-cel-approval-by-dec-31-the-9-celgene-cvr-is-dead" },
    { id: 8, text: "BioPharma Dive, Bristol Myers sued over delayed approval of cancer cell therapy (2021)", url: "https://www.biopharmadive.com/news/bristol-myers-shareholder-lawsuit-car-t/601295/" },
    { id: 9, text: "Reuters / U.S. News, Bristol Myers Beats $6.4 Billion Lawsuit Over Delayed Cancer Drug (2024-09-30)", url: "https://www.usnews.com/news/top-news/articles/2024-09-30/bristol-myers-beats-6-4-billion-lawsuit-over-delayed-cancer-drug" },
    { id: 10, text: "FTC, In the Matter of Bristol-Myers Squibb / Celgene Consent Order, Otezla 분할 매각 명령 (2019)", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0061-bristol-myers-squibb-companycelgene-corporation" },
    { id: 11, text: "FDA, Breyanzi (lisocabtagene maraleucel) Approval Letter (2021-02-05)", url: "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/breyanzi-lisocabtagene-maraleucel" },
    { id: 12, text: "CourtListener, UMB Bank, N.A. v. Bristol-Myers Squibb Company (SDNY 1:21-cv-04897)", url: "https://www.courtlistener.com/docket/59957422/umb-bank-na-v-bristol-myers-squibb-company/" },
  ],

  seo: {
    title: "BMS × Celgene $74B + CVR, 36일 지연으로 $6.4B 증발한 마일스톤 트랩",
    description:
      "2019년 1월 BMS가 Celgene을 $74B에 인수, Celgene 주주는 1주당 $50 + BMS 1주 + CVR 1개를 받음. CVR은 Ozanimod·Liso-cel·Ide-cel 세 신약이 [모두] 기한 내 FDA 승인을 받아야 $9 지급. Liso-cel이 36일 늦은 2021-02-05에 승인되며 all-or-nothing 조항 발동, $6.4B 지급의무 전액 소멸. CVR 구조·diligent efforts 조항·UMB Bank v. BMS 소송까지 해부.",
    keywords: [
      "BMS Celgene 인수",
      "Bristol-Myers Squibb Celgene",
      "CVR Contingent Value Right",
      "마일스톤 CVR",
      "Liso-cel Breyanzi 지연",
      "Ozanimod FDA 승인",
      "Ide-cel Abecma",
      "all-or-nothing 마일스톤",
      "Revlimid patent cliff",
      "Otezla Amgen 분할 매각",
      "diligent efforts 조항",
      "UMB Bank BMS 소송",
      "역삼각합병",
      "제약 M&A",
    ],
  },

  concepts: [
    {
      term: "CVR (Contingent Value Right)",
      description: "인수 후 특정 임상·승인·매출 마일스톤을 달성하면 인수자가 피인수 주주에게 추가 대가를 지급하는 옵션형 증권. 바이오텍 M&A에서 임상 성공 불확실성을 가격에 반영하는 협상 도구로 사용. 본 거래에서는 1 CVR당 최대 $9, 총 $6.4B 옵션.",
    },
    {
      term: "Diligent Efforts (노력의무) 조항",
      description: "CVR 계약상 인수자가 마일스톤 달성을 위해 [성실히 노력할 의무]를 부담하는 조항. 본 거래의 핵심 분쟁점, 원고는 BMS가 일부러 FDA 제출을 지연시켜 의무를 위반했다고 주장. 통상의 \"commercially reasonable efforts\"보다 다소 엄격한 표현으로 해석.",
    },
    {
      term: "All-or-Nothing 마일스톤 구조",
      description: "복수 마일스톤이 모두 달성돼야 지급의무가 발동되는 비대칭 옵션 구조. 한 개라도 놓치면 [전체] 지급의무가 소멸. 본 거래의 결정적 트랩, BMS가 이 구조를 관철해 $6.4B 잠재 부채를 단 36일의 지연만으로 전액 회피.",
    },
    {
      term: "역삼각합병 (Reverse Triangular Merger)",
      description: "인수자가 100% 자회사를 설립한 뒤 그 자회사가 피인수회사와 합병하되 [피인수회사가 존속법인]이 되는 미국 M&A 표준 구조. 피인수회사의 계약·인허가 유지에 유리. 본 거래에서 BMS의 Burgundy Merger Sub이 Celgene과 합병해 Celgene이 BMS의 자회사로 존속.",
    },
    {
      term: "Otezla 분할 매각",
      description: "FTC가 건선 치료제 시장 경쟁 제한 우려로 부과한 동의명령에 따라, Celgene이 보유한 Otezla(아프레밀라스트)를 Amgen에 $13.4B에 매각. 본 거래 클로징 직전(2019-11) 처리, 사실상 BMS 인수 현금 부담 일부를 상쇄.",
    },
    {
      term: "옵션 가치 (Option Value)",
      description: "CVR이 발표 시점 시장에서 거래된 가치. 블랙숄즈·이항모형 등으로 추정. 본 거래 발표 직후 CVR은 시장에서 1개당 $1~$3으로 평가됐고, NYSE 상장 직후 한때 $2.50까지 거래되다 마일스톤 미달 우려로 $0.05까지 폭락 후 $0으로 소멸.",
    },
    {
      term: "Liso-cel (Breyanzi)",
      description: "Celgene이 개발한 CD19 타겟 CAR-T 세포치료제, 재발·불응성 거대 B세포 림프종 치료제. FDA 승인 기한 2020-12-31을 [36일] 넘긴 2021-02-05에 승인. 제조 시설 FDA 실사 일정 지연이 표면적 사유. 본 거래에서 [$6.4B을 좌우한 36일]의 주인공.",
    },
    {
      term: "Revlimid Patent Cliff (특허 만료 위험)",
      description: "Celgene의 핵심 약품 Revlimid(레날리도마이드)의 미국 특허가 2022년부터 단계적으로 만료돼 제네릭에 노출되는 위험. 본 거래의 표면적 인수 명분이었던 [패턴트 클리프 회피]가 실은 Celgene 자신의 더 가까운 LOE를 BMS가 떠안는 결과가 됐다는 시장 비판의 근거.",
    },
  ],

  faq: [
    {
      q: "CVR(Contingent Value Right)이 정확히 무엇이고, 왜 BMS-Celgene 거래에 사용됐나요?",
      a: "CVR은 인수 후 특정 마일스톤(임상 성공·승인·매출)이 달성되면 인수자가 피인수 주주에게 추가 대가를 지급하는 옵션형 증권입니다. 바이오텍 M&A에서 [매도자는 파이프라인 가치를 다 반영해서 팔고 싶고, 매수자는 임상 실패 위험을 떠안기 싫다]는 가격 격차를 메우는 협상 도구. 본 거래에서는 Celgene이 보유한 Ozanimod·Liso-cel·Ide-cel 세 신약의 FDA 승인 시 1 CVR당 $9을 지급하는 구조로, 총 약 $6.4B(7.14억 CVR × $9)의 옵션 부채를 만들었습니다. BMS 입장에서는 임상 성공 시에만 추가 지급하므로 다운사이드를 보호하는 도구.",
    },
    {
      q: "왜 BMS가 단 36일의 FDA 승인 지연만으로 $6.4B을 아낄 수 있었나요?",
      a: "본 거래의 CVR은 [세 가지 마일스톤을 모두 달성해야 $9 지급]이라는 all-or-nothing 구조였습니다. 한 개라도 놓치면 전체 $9 지급의무가 [전액] 소멸. Ozanimod와 Ide-cel(Abecma)은 기한 내 FDA 승인을 받았지만, Liso-cel(Breyanzi)이 기한 2020-12-31을 [36일] 넘긴 2021-02-05에 승인을 받으며 all-or-nothing 조항이 발동했습니다. 결과적으로 CVR 약 7.14억 개 × $9 = 약 $6.4B의 지급의무가 [통째로] 사라졌습니다. 단일 마일스톤별로 부분 지급을 인정했다면 BMS는 $9 중 $6(2/3)을 지급해야 했을 수도 있는데, all-or-nothing 구조가 BMS에 결정적으로 유리하게 작동.",
    },
    {
      q: "옛 Celgene 주주들은 BMS가 일부러 Liso-cel 승인을 지연시켰다고 주장했는데, 결과는 어떻게 됐나요?",
      a: "2021년 옛 Celgene 주주 신탁관리인 UMB Bank가 BMS를 상대로 SDNY 연방법원에 $6.4B 손해배상 소송을 제기했습니다(UMB Bank, N.A. v. Bristol-Myers Squibb Company, 1:21-cv-04897). 핵심 주장은 BMS가 CVR 계약상 [\"diligent efforts\"] 의무를 위반해 일부러 FDA 제출(BLA)에 [major amendment]를 넣어 최소 3개월 지연시켰고, 제조 시설 실사 일정도 의도적으로 늦췄다는 것. 2024년 9월 30일 SDNY는 BMS의 본안 손배 책임을 부정하는 판결을 냈고(원고가 \"고의적 지연\"의 입증에 실패), 원고가 항소했습니다. 별개로 2024~2025년 옛 Celgene 주주 일부가 재차 클래스 액션을 제기, 일부 청구는 기각되고 일부는 살아남아 진행 중. 2026년 5월 기준 최종 확정 판결은 아직 없음.",
    },
    {
      q: "FTC가 왜 Otezla 분할 매각을 명령했고, 왜 Amgen이 인수자였나요?",
      a: "FTC는 BMS-Celgene 결합이 [건선 치료제 시장]에서 경쟁 제한을 일으킬 수 있다고 봤습니다. BMS의 Orencia(아바타셉트)와 Celgene의 Otezla(아프레밀라스트)가 건선·건선관절염 적응증에서 겹친다는 분석. FTC는 합병 승인 조건으로 Otezla의 [동의명령(Consent Order) 분할 매각]을 부과했고, Celgene은 2019년 11월 21일 Otezla를 Amgen에 [$13.4B 현금]에 매각했습니다. Amgen은 이미 면역학 포트폴리오(Enbrel 등)를 갖고 있어 Otezla를 인수해 시너지를 낼 적임자였고, $13.4B의 현금 즉시 지급 능력이 있는 몇 안 되는 인수자. 합병 클로징(2019-11-20)과 거의 동시에 처리됐습니다.",
    },
    {
      q: "BMS는 결국 이 인수로 돈을 벌었나요? Revlimid 특허 만료 문제는 어떻게 됐나요?",
      a: "장단점이 엇갈립니다. [장점] CVR all-or-nothing 구조로 $6.4B 회피 + Celgene FY2018 EBITDA $6.74B을 통째로 통합 + Liso-cel·Ide-cel CAR-T 자산 확보로 종양학 포트폴리오 강화 + 매출 기준 글로벌 Top 5 제약사로 도약. [단점] Revlimid의 미국 특허가 2022년부터 단계적으로 만료돼 제네릭에 노출, BMS의 2023~2025년 매출 성장률이 시장 기대치를 하회. BMS 주가는 2019년 발표 직후 수준에서 횡보 중. 시장의 일반 평가는 [\"CVR로 $6.4B 아낀 것은 큰 성공이나, 인수 자체의 ROI는 시장 평균 이하\"]. BMS는 사실상 자신의 패턴트 클리프를 Celgene의 더 가까운 패턴트 클리프로 갈아탔다는 비판도 존재.",
    },
    {
      q: "이 거래가 향후 바이오텍 M&A의 CVR 구조에 어떤 영향을 줬나요?",
      a: "두 가지 큰 영향. 첫째, [all-or-nothing CVR 구조의 평판 추락]. 본 거래의 트랩이 시장에 알려진 뒤 바이오텍 매도자들이 CVR 계약 협상에서 [\"부분 달성 시 부분 지급\"] 조항을 강력히 요구하는 트렌드가 형성됐습니다. 즉 마일스톤별로 지급액을 분리해 한 개라도 달성하면 그 부분은 지급하는 구조가 표준이 됨. 둘째, [\"diligent efforts\" 조항의 의미 강화]. UMB Bank v. BMS 소송이 진행되면서, M&A 계약상 노력의무 조항이 [\"단순한 보일러플레이트\"]가 아니라 실제 수십억 달러를 좌우하는 분쟁 트리거가 될 수 있다는 점이 산업 전반에 각인됐습니다. 이후 CVR 협상에서 노력의무의 구체적 정의(어떤 행동이 의무 위반인지)를 계약서에 더 자세히 적시하는 트렌드.",
    },
  ],
};

export default deal;
