/**
 * AB InBev × SABMiller 합병
 * 역대 최대 소비재 M&A — £792억 (~$1,040억), 2016년 10월 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ab-inbev-sabmiller",
  title: "AB인베브는 왜 £792억에 SABMiller를 샀나 — 역대 최대 소비재 M&A 해부",
  subtitle: "아프리카·신흥시장 진출 · 글로벌 맥주 30% 점유 · ZBB 비용 절감과 독점규제 기업분할의 복합 방정식",
  category: "ma",
  industry: "주류·음료 / Beverages",
  country: "미국·벨기에·영국",
  announcedAt: "2015-10-13",
  closedAt: "2016-10-10",
  announcedDisplay: "2015년 10월",
  closedDisplay: "2016년 10월",
  readingMinutes: 11,
  tags: ["AB인베브", "SABMiller", "맥주", "소비재 M&A", "3G Capital", "Miller", "Budweiser", "독점규제"],
  excerpt:
    "AB InBev가 SABMiller를 £792억(~$1,040억)에 인수한 2016년 역대 최대 소비재 M&A. 합병 후 글로벌 맥주 시장의 약 30%를 장악하며 사실상 맥주 과점 체계를 완성했다. 미국·유럽·중국에서 대규모 자산 매각을 조건으로 규제 승인을 받았으며, 3G Capital의 ZBB 비용 절감 모델을 신흥시장 전체에 적용한 교과서적 글로벌 통합 M&A 사례.",

  acquirer: { initials: "ABI", bg: "bg-yellow-700", label: "AB InBev (Anheuser-Busch InBev)" },
  target: { initials: "SAB", bg: "bg-amber-600", label: "SABMiller" },

  background: [
    "2015년 글로벌 맥주 시장은 두 거인의 정면 충돌 전야였다. Anheuser-Busch InBev(이하 AB InBev)는 Budweiser, Corona, Stella Artois를 보유한 세계 1위 맥주 기업이었고, SABMiller는 Miller, Peroni, Castle Lager를 앞세워 아프리카·중남미·아시아 신흥시장에 강력한 교두보를 구축한 세계 2위였다. AB InBev는 선진국 맥주 시장의 성장 정체를 돌파하기 위해 SABMiller가 지배하는 신흥시장을 직접 흡수하는 전략을 택했다.",
    "합병의 핵심 논리는 지리적 보완성이었다. AB InBev는 북미·서유럽·브라질에서 압도적 지위를 보유했지만, 아프리카·동남아시아·동유럽에서는 SABMiller에 비해 열세였다. 특히 아프리카에서 SABMiller의 Castle Lager와 현지 브랜드 포트폴리오는 수십 년에 걸쳐 구축된 것으로, AB InBev가 독자적으로 복제하기 어려운 진입장벽이었다. 합병을 통해 두 회사의 포트폴리오를 결합하면 전 세계 맥주 소비량의 약 30%를 단일 기업이 통제하는 구도가 완성될 터였다.",
    "3G Capital의 경영 방식도 핵심 동인이었다. AB InBev의 최대 주주이자 실질적 지배력을 행사하는 3G Capital은 Zero-Based Budgeting(ZBB) — 모든 비용을 매년 제로에서 정당화해야 하는 예산 편성 방식 — 으로 이미 AB InBev의 영업이익률을 업계 최고 수준으로 끌어올린 전력이 있었다. SABMiller의 상대적으로 낮은 마진은 ZBB 적용 시 막대한 원가 절감 여력을 의미했고, 이는 인수 프리미엄을 정당화하는 재무적 근거였다.",
    "협상은 SABMiller의 최대 주주인 Altria Group(담배 대기업, 지분 약 27%)과 대주주 BevCo(콜롬비아 Santo Domingo 가문, 지분 약 14%)의 지지를 확보하면서 급물살을 탔다. SABMiller 이사회는 최초 제안을 거부했으나, AB InBev가 인수가를 주당 44파운드로 상향(약 50% 프리미엄)하자 2015년 10월 합의에 도달했다. 이후 미국·유럽·중국 독점규제 당국의 요건에 따라 MillerCoors, Peroni, Grolsch, CR Snow 등의 브랜드를 매각하는 조건으로 2016년 10월 최종 완료됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "£792억 (~$1,040억)",
    acquirerName: "Anheuser-Busch InBev SA/NV",
    targetName: "SABMiller plc",
    announcedDisplay: "2015년 10월",
    closedDisplay: "2016년 10월",
    country: "미국·벨기에·영국",
  },

  executiveSummary: [
    "£792억 (~$1,040억) — 역대 최대 소비재 M&A, 합병 후 글로벌 맥주 시장 약 30% 점유",
    "핵심 논리: AB InBev의 선진국 기반 + SABMiller의 아프리카·신흥시장 포트폴리오의 지리적 보완 결합",
    "3G Capital ZBB 모델 전파 — SABMiller 마진 개선 여력이 £792억 프리미엄의 재무적 정당화 근거",
    "규제 조건부 자산 매각: MillerCoors(→Molson Coors $120억), Peroni+Grolsch(→Asahi $29억), CR Snow(→CR Beer)",
    "자금 조달: $750억+ 은행 신디케이트 부채 조달 — 합병 후 순부채 $1,000억+ 재무 압박",
    "합병 후 주가 급락(2018) — 크래프트 맥주 트렌드 대응 실패, 과도한 부채가 핵심 리스크",
    "장기적으로 아프리카·아시아 신흥시장 포트폴리오가 성장 기반으로 평가받고 있음",
  ],

  industryOverview: {
    body: "2015년 글로벌 맥주 시장은 약 $6,000억 규모로, 선진국 시장의 성장 정체와 신흥시장의 빠른 성장이 대비되는 구조였다. 크래프트 맥주 트렌드가 미국·서유럽에서 기존 대형 브랜드의 시장점유율을 잠식하기 시작했으며, 밀레니얼 세대의 주류 소비 패턴 변화(증류주·와인 선호)가 새로운 위협으로 부상했다. 반면 아프리카(연 5~7% 성장), 동남아시아, 중남미 신흥시장은 중산층 성장과 맥락에서 맥주 소비가 빠르게 확대되고 있었다. AB InBev와 SABMiller의 합병은 이 구조적 전환에 대응한 역대 최대 규모의 글로벌 재편이었다.",
    metrics: [
      { label: "글로벌 맥주 시장 규모", value: "약 $6,000억", sub: "2015년 기준" },
      { label: "합병 후 시장점유율", value: "약 30%", sub: "전 세계 맥주 소비량 기준" },
      { label: "아프리카 맥주 시장 성장률", value: "연 5~7%", sub: "SABMiller 강점 지역" },
      { label: "크래프트 맥주 미국 점유율", value: "약 12%", sub: "2015년, 지속 확대 추세" },
    ],
    subBody: "글로벌 맥주 산업은 상위 5개 기업이 전체 시장의 약 50%를 점유하는 과점 구조로 재편되고 있었다. AB InBev와 SABMiller 합병은 이 집중화 추세의 정점이었으며, 규제 당국이 경쟁 유지를 위해 대규모 브랜드 매각을 요구하는 선례를 남겼다. 한편 크래프트 맥주와 하드 셀처(Hard Seltzer) 같은 신흥 카테고리가 대형 브랜드의 볼륨 성장에 구조적 도전을 제기하고 있었다.",
    players: [
      { name: "AB InBev", role: "세계 1위 맥주 기업, Budweiser·Corona·Stella Artois, 인수자" },
      { name: "SABMiller", role: "세계 2위, Miller·Peroni·Castle Lager, 아프리카·신흥시장 강자" },
      { name: "Heineken", role: "세계 3위, 유럽·아시아 중심, 독립 유지" },
      { name: "Carlsberg", role: "세계 4위, 북유럽·동유럽 중심" },
      { name: "Molson Coors", role: "MillerCoors 인수로 미국 2위 지위 강화" },
    ],
  },

  companyOverview: {
    targetName: "SABMiller plc",
    body: "SABMiller은 1895년 남아프리카공화국에서 설립된 South African Breweries(SAB)를 모태로, 2002년 미국 Miller Brewing 인수를 통해 SABMiller로 재탄생한 글로벌 2위 맥주 기업이다. 런던 증권거래소(LSE) 상장사로, 80개국 이상에서 사업을 영위했으며 아프리카(Castle Lager), 유럽(Peroni, Grolsch, Pilsner Urquell), 미국(MillerCoors 합작), 아시아(CR Snow 합작, 중국 1위)에 걸친 방대한 포트폴리오를 보유했다. 특히 아프리카 24개국에서 확고한 1위 지위를 유지하며 신흥시장 성장 스토리의 핵심 플레이어였다.",
    metrics: [
      { label: "상장 거래소", value: "런던 증권거래소(LSE)", sub: "2016년 합병으로 상장 폐지" },
      { label: "영업 국가", value: "80개국 이상", sub: "아프리카 24개국 1위" },
      { label: "매출 (2015년)", value: "약 $225억", sub: "단위: 억달러" },
      { label: "EBITDA (2015년)", value: "약 $58억", sub: "EV/EBITDA 약 15~16x" },
      { label: "주요 브랜드", value: "Miller, Peroni, Pilsner Urquell, Grolsch, Castle Lager, CR Snow", sub: "지역별 강점 브랜드" },
    ],
    financials: [
      { year: "2014", revenue: 220, cogs: 100, grossProfit: 120, sga: 45, operatingIncome: 30, ebitda: 55 },
      { year: "2015", revenue: 225, cogs: 102, grossProfit: 123, sga: 46, operatingIncome: 32, ebitda: 58 },
    ],
    financialsNote: "단위: 억달러(USD). 수치는 공개 보고서 및 업계 추정치 기반. SABMiller는 미국 회계연도 기준이 아닌 3월 결산 구조로, 위 수치는 역년 기준 추정치입니다.",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  dealStructure: {
    body: "AB InBev는 SABMiller를 주당 44파운드 전액 현금으로 인수하는 구조를 택했다. 단, Altria Group과 BevCo(Santo Domingo 가문)에게는 세금 효율성을 위해 주식 연계 옵션(Partial Share Alternative, PSA)을 제공했다. 총 딜 가치는 £792억(~$1,040억)으로, 인수 자금의 대부분은 $750억+에 달하는 은행 신디케이트 부채(론 및 채권 발행 혼합)로 조달됐다. 미국 법무부(DoJ), EU 경쟁당국(EC), 중국 상무부(MOFCOM) 등 독점규제 요건으로 MillerCoors(→Molson Coors, $120억), Peroni+Grolsch+Meantime(→Asahi, $29억), CR Snow 지분(→CR Beer) 매각이 선행 조건으로 부과됐다.",
    preOwnership: {
      nodes: [
        { id: "abinbev", label: "AB InBev SA/NV", sub: "NYSE/Euronext 상장", type: "acquirer" },
        { id: "3g", label: "3G Capital & Altria", sub: "AB InBev 주요 주주", type: "fund" },
        { id: "sabmiller", label: "SABMiller plc", sub: "LSE 상장 (독립)", type: "target" },
        { id: "altria_sab", label: "Altria Group", sub: "SABMiller 지분 약 27%", type: "entity" },
        { id: "bevco", label: "BevCo (Santo Domingo 가문)", sub: "SABMiller 지분 약 14%", type: "entity" },
      ],
      edges: [
        { from: "3g", to: "abinbev", label: "대주주 지배력" },
        { from: "altria_sab", to: "sabmiller", label: "~27% 지분" },
        { from: "bevco", to: "sabmiller", label: "~14% 지분" },
        { from: "abinbev", to: "sabmiller", label: "인수 협상" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "abinbev_parent", label: "AB InBev SA/NV", sub: "NYSE/Euronext 상장", type: "acquirer" },
        { id: "sabmiller_sub", label: "구 SABMiller 자산", sub: "AB InBev 완전 자회사 통합", type: "target" },
        { id: "molsoncoors", label: "Molson Coors", sub: "MillerCoors 인수 ($120억)", type: "entity" },
        { id: "asahi", label: "Asahi", sub: "Peroni+Grolsch+Meantime 인수 ($29억)", type: "entity" },
        { id: "crbeer", label: "CR Beer", sub: "CR Snow 지분 인수", type: "entity" },
      ],
      edges: [
        { from: "abinbev_parent", to: "sabmiller_sub", label: "100% 흡수합병" },
        { from: "sabmiller_sub", to: "molsoncoors", label: "MillerCoors 매각" },
        { from: "sabmiller_sub", to: "asahi", label: "유럽 브랜드 매각" },
        { from: "sabmiller_sub", to: "crbeer", label: "중국 지분 매각" },
      ],
    },
    keyTerms: [
      { label: "딜 규모", value: "£792억 (~$1,040억)", accent: true },
      { label: "인수가", value: "주당 44파운드 (전액 현금)", accent: false },
      { label: "인수 프리미엄", value: "약 50% (발표 전 주가 대비)", accent: true },
      { label: "거래 형태", value: "전액 현금 인수 (Altria·BevCo에 PSA 옵션 제공)", accent: false },
      { label: "자금 조달", value: "$750억+ 은행 신디케이트 (론+채권)", accent: false },
      { label: "MillerCoors 매각", value: "Molson Coors에 $120억 (규제 조건)", accent: false },
      { label: "유럽 브랜드 매각", value: "Asahi에 $29억 (Peroni, Grolsch, Meantime)", accent: false },
      { label: "EV / EBITDA", value: "약 15~16x (SABMiller EBITDA 기준)", accent: true },
      { label: "규제 승인", value: "DoJ·EC·MOFCOM 조건부 승인", accent: false },
      { label: "거래 완료일", value: "2016년 10월 10일", accent: false },
    ],
  },

  advisors: {
    body: "역대 최대 소비재 M&A답게 글로벌 최상위권 투자은행과 법률 자문사가 총동원됐다. AB InBev 측은 Lazard와 Deutsche Bank가 재무 자문을 맡았고, SABMiller 측은 JP Morgan과 영국의 부티크 M&A 자문사 Robey Warshaw가 팀을 구성했다. Robey Warshaw는 창업자 Simon Robey가 Morgan Stanley 출신으로, 영국 최대 딜에서 반복적으로 등장하는 정예 부티크다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (AB InBev)",
        initials: "ABI",
        bg: "bg-yellow-700",
        advisors: [
          { firm: "Lazard", role: "재무 자문", roleType: "financial", note: "딜 구조 및 협상 전략 총괄" },
          { firm: "Deutsche Bank", role: "재무 자문·자금 조달", roleType: "financial", note: "$750억+ 신디케이션 주선" },
          { firm: "Freshfields Bruckhaus Deringer", role: "법률 자문", roleType: "legal", note: "영국·EU 규제 대응" },
          { firm: "Skadden Arps", role: "법률 자문 (미국)", roleType: "legal", note: "DoJ 독점 심사 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (SABMiller)",
        initials: "SAB",
        bg: "bg-amber-600",
        advisors: [
          { firm: "JP Morgan", role: "재무 자문", roleType: "financial", note: "가격 협상 및 방어 전략" },
          { firm: "Robey Warshaw", role: "재무 자문 (공동)", roleType: "financial", note: "영국 최정예 M&A 부티크" },
          { firm: "Linklaters", role: "법률 자문", roleType: "legal", note: "영국 법률 자문 총괄" },
          { firm: "Sullivan & Cromwell", role: "법률 자문 (미국)", roleType: "legal", note: "미국 증권·독점 규제 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 통설 기반입니다.",
  },

  valuation: {
    body: "AB InBev는 SABMiller에 EV/EBITDA 약 15~16배의 멀티플을 적용했다. 이는 글로벌 소비재 M&A 사상 가장 높은 수준 중 하나로, ZBB 적용 후 달성 가능한 마진 개선(EBITDA 30%→35%+)을 선반영한 프리미엄이었다. 인수 후 비용 절감 시너지(약 $14억~$20억 추정)와 신흥시장 매출 성장이 밸류에이션의 핵심 근거였다.",
    rows: [
      { item: "딜 EV", val: "£792억 (~$1,040억)", note: "주당 44파운드 전액 현금", accent: true },
      { item: "인수 프리미엄", val: "약 50%", note: "발표 전 60일 평균 주가 대비", accent: true },
      { item: "SABMiller EBITDA (2015E)", val: "약 $58억", note: "공개 보고서 기반 추정" },
      { item: "EV / EBITDA", val: "약 15~16x", note: "업계 역대 최고 수준 소비재 멀티플", accent: true },
      { item: "연간 시너지 목표", val: "$14억~$20억", note: "ZBB 비용 절감 + 판매·운영 통합 효과" },
      { item: "자금 조달 부채", val: "$750억+", note: "은행 신디케이트 (론+채권 혼합)" },
      { item: "합병 후 순부채", val: "$1,000억+", note: "역대 최대 소비재 레버리지" },
      { item: "자산 매각 수익", val: "약 $150억+", note: "MillerCoors $120억 + Asahi $29억 + CR Snow" },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도, 공시 및 업계 추정치 기반입니다. EBITDA 수치는 추정치이며 실제와 차이가 있을 수 있습니다.",
  },

  rationale: {
    buyer: {
      title: "AB InBev 인수 논리",
      initials: "ABI",
      bg: "bg-yellow-700",
      points: [
        "신흥시장 즉각 진출 — SABMiller의 아프리카 24개국 1위, 아시아·중남미 거점을 단번에 흡수해 10년치 유기적 성장을 압축",
        "글로벌 프리미엄 브랜드 완성 — Peroni, Pilsner Urquell, Grolsch 등 유럽 프리미엄 라인업 추가로 포트폴리오 격상",
        "ZBB 비용 절감 — SABMiller의 상대적으로 낮은 마진에 3G Capital 특유의 ZBB 모델 적용 시 $14억~$20억 시너지 실현 가능",
        "규모의 경제 — 원자재 구매·물류·마케팅 통합으로 추가 원가 절감, 글로벌 배급망 공유",
        "선진국 성장 한계 돌파 — 크래프트 맥주에 잠식당하는 선진국 시장 의존도를 줄이고 고성장 신흥시장으로 수익원 다변화",
      ],
    },
    seller: {
      title: "SABMiller 매각 논리 (주주 관점)",
      initials: "SAB",
      bg: "bg-amber-600",
      points: [
        "50% 프리미엄 — 60일 평균 주가 대비 약 50% 웃돈 지급, Altria(27% 지분)와 BevCo(14%)의 주도적 지지",
        "독자 경쟁 한계 — AB InBev의 자본력과 글로벌 배급망에 맞서는 독자 성장 전략의 한계 인식",
        "크래프트 맥주 위협 — 선진국 핵심 브랜드(Miller Lite, Peroni)가 크래프트 맥주 트렌드에 취약, 구조적 볼륨 감소 우려",
        "Altria의 전략적 선호 — SABMiller 최대 주주 Altria가 포트폴리오 단순화·현금 회수 차원에서 매각 지지",
        "PSA 구조 — Altria·BevCo는 세금 효율적인 주식 연계 옵션(PSA)으로 AB InBev 성장에 계속 참여",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "합병 완료 후 AB InBev는 전 세계 맥주 시장의 약 30%를 지배하는 초거대 기업으로 탄생했다. 그러나 초반 2년은 순탄치 않았다. $1,000억+에 달하는 순부채와 높은 이자비용이 재무 유연성을 제약했고, 2018년 크래프트 맥주 및 하드 셀처 트렌드 가속화로 주가가 고점 대비 40%+ 급락했다. 한편 아프리카와 아시아 포트폴리오는 예상보다 빠르게 성장하며 장기 성장 기반으로 입증됐다. 2019년 홍콩 IPO 시도는 실패했으나, 2023년 이후 부채 감축과 신흥시장 성과 개선으로 시장의 재평가를 받기 시작했다.",
    overallVerdict: "규모의 경제는 달성했으나 과도한 레버리지와 크래프트 트렌드 대응 실패로 초반 주주가치 훼손 — 장기적 신흥시장 포지셔닝은 유효",
    positives: [
      "글로벌 맥주 30% 점유 — 구매력·배급망·마케팅에서 독보적 규모의 경제 실현",
      "아프리카·아시아 신흥시장 즉각 진출 — SABMiller 30년 구축 거점 흡수, 장기 성장 기반 확보",
      "ZBB 비용 절감 목표 초과 달성 — 합병 3년 내 연간 $30억+ 시너지 실현 (초기 목표 $14억 상회)",
      "유럽 프리미엄 브랜드 완성 — Peroni, Pilsner Urquell로 프리미엄 포트폴리오 격상",
      "자산 매각 수익 활용 — MillerCoors·Asahi 매각 대금으로 부채 상환 재원 확보",
    ],
    risks: [
      "$1,000억+ 순부채 — 역대 최대 소비재 레버리지, 이자비용이 투자 여력·주주환원 제약",
      "2018년 주가 40%+ 급락 — 크래프트 맥주·하드 셀처 트렌드 대응 부재, 배당 삭감",
      "크래프트 맥주 트렌드 구조적 위협 — Budweiser·Miller 볼륨 장기 감소세 지속",
      "브라질·아르헨티나 통화 리스크 — 신흥시장 환율 변동이 USD 보고 실적에 지속 영향",
      "2019년 홍콩 IPO 실패 — 아시아 태평양 사업부 부분 상장 시도 실패로 부채 감축 차질",
    ],
    editorNote: "AB InBev-SABMiller 합병은 '전략적 논리'와 '재무적 실행'의 간극을 극명하게 보여준 딜이다. 신흥시장 통합과 ZBB 시너지라는 논리는 타당했지만, $1,000억+ 레버리지와 크래프트 트렌드 대응 실패가 초반 주주가치를 심각하게 훼손했다. 이 딜은 '글로벌 통합 전략은 맞았으나 타이밍과 자본 구조가 틀렸다'는 M&A 역사의 교훈을 남겼다.",
  },

  tombstone: {
    acquirerInitials: "ABI",
    acquirerBg: "bg-yellow-700",
    targetInitials: "SAB",
    targetBg: "bg-amber-600",
    acquirerName: "Anheuser-Busch InBev SA/NV",
    targetName: "SABMiller plc",
    dealTitle: "역대 최대 글로벌 맥주 통합 / Largest-Ever Global Beer Consolidation",
    dealSize: "£792억 (~$1,040억)",
    dealSizeUSD: "USD ~104 Billion",
    evEbitda: "약 15~16x",
    closeDate: "Oct 2016",
  },

  sources: [
    { id: 1, text: "AB InBev Press Release — AB InBev and SABMiller to Combine (October 2015)", url: "https://www.ab-inbev.com" },
    { id: 2, text: "SABMiller Scheme Document — Court-approved Scheme of Arrangement (2016)" },
    { id: 3, text: "Bloomberg — AB InBev Wins SABMiller Approval for £79 Billion Deal (October 2015)" },
    { id: 4, text: "Financial Times — SABMiller Board Backs AB InBev's Revised Bid (October 2015)" },
    { id: 5, text: "U.S. Department of Justice — Competitive Impact Statement: AB InBev/SABMiller (2016)" },
    { id: 6, text: "European Commission — Case M.7881 AB InBev/SABMiller Merger Decision (2016)" },
    { id: 7, text: "Wall Street Journal — Molson Coors Buys Out SABMiller's MillerCoors Stake for $12 Billion (2016)" },
  ],

  seo: {
    title: "AB인베브-SABMiller 합병 완전 분석 — $1,040억 역대 최대 소비재 M&A",
    description: "AB InBev가 SABMiller를 £792억($1,040억)에 인수한 역대 최대 소비재 M&A 완전 분석. 글로벌 맥주 30% 점유, ZBB 비용 절감, 독점규제 기업분할까지 해부.",
    keywords: [
      "AB인베브 SABMiller 합병",
      "역대 최대 소비재 M&A",
      "글로벌 맥주 M&A",
      "3G Capital ZBB",
      "MillerCoors Molson Coors",
    ],
  },

  concepts: [
    { term: "글로벌 통합 전략", href: "/deal-101/global-consolidation", description: "지리적 보완성을 바탕으로 신흥시장을 즉각 흡수하는 M&A 전략" },
    { term: "ZBB (Zero-Based Budgeting)", href: "/deal-101/zbb", description: "3G Capital의 핵심 비용 절감 도구 — 매년 모든 예산을 제로에서 재정당화" },
    { term: "규제 기업분할 (Divestiture)", href: "/deal-101/regulatory-divestiture", description: "독점규제 당국이 합병 승인 조건으로 부과하는 자산·브랜드 의무 매각" },
  ],

  faq: [
    {
      q: "AB InBev가 SABMiller를 인수한 핵심 이유는?",
      a: "가장 큰 이유는 지리적 보완성입니다. AB InBev는 북미·서유럽·브라질에 강했지만 아프리카·아시아·동유럽에서는 SABMiller에 뒤처졌습니다. SABMiller는 아프리카 24개국에서 1위, 중국 최대 맥주 합작사(CR Snow)를 보유하고 있었습니다. 합병을 통해 두 회사의 포트폴리오를 결합하면 글로벌 맥주 시장의 약 30%를 단일 기업이 지배하는 구도가 완성됩니다. 또한 3G Capital의 ZBB 비용 절감 모델을 SABMiller에 적용하면 대규모 마진 개선이 가능하다는 재무적 논리도 핵심이었습니다.",
    },
    {
      q: "규제 당국이 요구한 자산 매각은 무엇이었나?",
      a: "주요 3건의 대규모 자산 매각이 이루어졌습니다. 첫째, 미국 DoJ 요건으로 MillerCoors(미국 2위 맥주사) 지분 전체를 Molson Coors에 $120억에 매각했습니다. 둘째, EU 경쟁당국 요건으로 Peroni, Grolsch, Meantime 브랜드를 일본 Asahi에 약 $29억에 매각했습니다. 셋째, 중국 MOFCOM 요건으로 CR Snow(중국 1위 맥주사) 합작 지분을 CR Beer에 매각했습니다. 이들 자산 매각은 독점 우려를 해소하기 위한 필수 전제 조건이었으며, 동시에 $150억+ 부채 상환 재원이 되었습니다.",
    },
    {
      q: "ZBB(Zero-Based Budgeting)란 무엇이고 이 딜에서 왜 중요했나?",
      a: "ZBB는 3G Capital이 AB InBev에 도입한 예산 편성 방식으로, 전년도 예산을 기준으로 증감하는 대신 매년 모든 비용을 제로에서 새로 정당화해야 하는 원칙입니다. 이를 통해 조직의 불필요한 비용을 체계적으로 제거하고 영업이익률을 업계 최고 수준으로 끌어올립니다. AB InBev는 이미 자사에 ZBB를 적용해 영업이익률 30%+ 수준을 달성했습니다. SABMiller의 당시 마진이 상대적으로 낮았기 때문에, ZBB 적용 시 연간 $14억~$20억 이상의 시너지가 가능하다는 계산이 £792억 프리미엄의 재무적 근거 중 하나였습니다.",
    },
    {
      q: "합병 후 주가가 급락한 이유는?",
      a: "크게 세 가지 요인이 복합적으로 작용했습니다. 첫째, $1,000억+에 달하는 순부채가 재무 유연성을 심각하게 제약했고, 이자비용이 수익에서 상당 부분을 차지했습니다. 둘째, 합병 완료 직후 미국·유럽에서 크래프트 맥주와 하드 셀처(Hard Seltzer) 트렌드가 폭발적으로 성장하며 Budweiser, Bud Light 같은 AB InBev의 핵심 대형 브랜드 볼륨이 빠르게 감소했습니다. 셋째, 브라질·아르헨티나 통화 약세로 신흥시장 이익이 USD 환산 시 크게 줄었습니다. 2018년 주가는 고점 대비 약 40% 급락했고 배당도 50% 삭감됐습니다.",
    },
  ],
};

export default deal;
