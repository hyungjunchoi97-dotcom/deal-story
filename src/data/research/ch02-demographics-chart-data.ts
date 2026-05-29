/**
 * ch02-demographics-chart-data.ts
 *
 * Chapter 2 (The Demographic Lock)의 차트·표용 정리된 데이터.
 * 모든 수치는 ch02-demographics-research.md의 1차 자료
 * (UN WPP 2024, 통계청 KOSIS, NBS China, US Census, 일본 IPSS,
 *  Eurostat, India MOSPI, OECD, IMF) 기반으로 검증됨.
 *
 * 본문 작성 시 import해서 Recharts에 그대로 투입.
 */

// ── §2. TFR 6개국 비교 (2023/2024 확정) ──────────────────────────────────────
// 단위: 합계출산율 (여성 1인당 평생 출산 자녀 수).
// source: 한국 통계청 KOSIS 2024.02 확정 / CDC NCHS 2024.04 /
//         후생노동성 2024.06 / Destatis 2024.07 / NBS China + Yi Fuxian /
//         India SRS 2022. 검증일 2026-05-30.
export type TfrCountry = {
  country: string;
  countryEn: string;
  tfr: number;
  year: number;
  color: string;
  note?: string;
};

export const TFR_6COUNTRIES_2024: TfrCountry[] = [
  { country: "인도",       countryEn: "India",         tfr: 1.98, year: 2022, color: "#f59e0b", note: "SRS 2022 — 대체출산율 진입 임박" },
  { country: "미국",       countryEn: "United States", tfr: 1.62, year: 2023, color: "#3b82f6", note: "CDC NCHS — 이민 1세대 출산력 가중" },
  { country: "독일",       countryEn: "Germany",       tfr: 1.35, year: 2023, color: "#64748b", note: "Destatis — 이민 보전 모델" },
  { country: "일본",       countryEn: "Japan",         tfr: 1.20, year: 2023, color: "#8b5cf6", note: "후생노동성 인구동태통계" },
  { country: "중국",       countryEn: "China",         tfr: 1.00, year: 2023, color: "#dc2626", note: "공식 1.0~1.09 / Yi Fuxian 추정 0.8~1.0" },
  { country: "대한민국",   countryEn: "South Korea",   tfr: 0.72, year: 2023, color: "#16a34a", note: "통계청 확정 — 세계 최저" },
];

// 참고: 대체출산율 기준선
export const TFR_REPLACEMENT = 2.10;

// ── §3. 한국 출생아 수 추이 (2000–2024) ──────────────────────────────────────
// 단위: 천 명. source: 통계청 KOSIS 인구동향조사. 검증일 2026-05-30.
export type KoreaBirthPoint = { year: number; births: number; event?: string };

export const KOREA_BIRTHS_2000_2024: KoreaBirthPoint[] = [
  { year: 2000, births: 640, event: "밀레니엄 베이비 (반등)" },
  { year: 2002, births: 497, event: "첫 50만 명대 진입" },
  { year: 2005, births: 438 },
  { year: 2010, births: 470 },
  { year: 2012, births: 484 },
  { year: 2015, births: 438 },
  { year: 2017, births: 357 },
  { year: 2018, births: 327 },
  { year: 2019, births: 302 },
  { year: 2020, births: 272, event: "첫 30만 명 미달" },
  { year: 2021, births: 261 },
  { year: 2022, births: 249 },
  { year: 2023, births: 230, event: "TFR 0.72 — 세계 최저" },
  { year: 2024, births: 238, event: "+3.6% YoY 반등 (혼인 증가)" },
];

// ── §3. 한국 노년부양비 시계열 (2025–2080) ───────────────────────────────────
// 단위: %. 65세 이상 인구 / 15~64세 인구 × 100.
// source: 통계청 장래인구추계 2022 중위 시나리오 (2023.12 발표). 검증일 2026-05-30.
export type DependencyPoint = { year: number; ratio: number; event?: string };

export const KOREA_DEPENDENCY_RATIO_2025_2080: DependencyPoint[] = [
  { year: 2025, ratio: 27.4, event: "OECD 평균 도달" },
  { year: 2030, ratio: 38.6 },
  { year: 2035, ratio: 49.4 },
  { year: 2040, ratio: 60.5 },
  { year: 2045, ratio: 69.2 },
  { year: 2050, ratio: 78.6 },
  { year: 2055, ratio: 84.8, event: "국민연금 적립기금 소진 예정" },
  { year: 2060, ratio: 90.4 },
  { year: 2070, ratio: 100.6, event: "1:1 도달" },
  { year: 2080, ratio: 106.0, event: "세계 최고 수준" },
];

// ── §4. 중국 총인구 추이 (1980–2100): 공식 vs Yi Fuxian 비판본 ───────────────
// 단위: 백만 명.
// source: NBS China 7th Census 2021 + 2024 Communiqué (2025.01) /
//         UN WPP 2024 medium variant /
//         Yi Fuxian *BMJ Global Health* 2023 + *Big Country Empty Nest* 2021.
// 검증일 2026-05-30.
export type ChinaPopPoint = {
  year: number;
  official: number;       // NBS / UN 공식
  yiFuxian: number | null; // Yi Fuxian 비판 추정 (2020 이후 점진적 격차)
  event?: string;
};

export const CHINA_POPULATION_TRAJECTORY: ChinaPopPoint[] = [
  { year: 1980, official: 987,   yiFuxian: 987 },
  { year: 1990, official: 1143,  yiFuxian: 1143 },
  { year: 2000, official: 1263,  yiFuxian: 1243 },
  { year: 2010, official: 1341,  yiFuxian: 1290 },
  { year: 2015, official: 1379,  yiFuxian: 1285 },
  { year: 2020, official: 1412,  yiFuxian: 1280, event: "Yi Fuxian: 이미 정점 통과" },
  { year: 2022, official: 1412.6, yiFuxian: 1270, event: "NBS 공식 정점 — 첫 감소" },
  { year: 2024, official: 1408.3, yiFuxian: 1255, event: "NBS 2025.01 발표" },
  { year: 2030, official: 1394,  yiFuxian: 1210 },
  { year: 2040, official: 1357,  yiFuxian: 1140 },
  { year: 2050, official: 1317,  yiFuxian: 1090, event: "Δ −95M (UN) vs −180M (Yi)" },
  { year: 2070, official: 1015,  yiFuxian: 800 },
  { year: 2100, official: 633,   yiFuxian: 488, event: "UN: 정점의 −55%" },
];

// 시진핑 시간표 marker
export const XI_TIMELINE_MARKERS = [
  { year: 2027, label: "CMC 군 현대화 완성 목표", cohortAge18M: 8.0 },
  { year: 2035, label: "사회주의 현대화 기본 실현", cohortAge18M: 8.6 },
  { year: 2049, label: "건국 100주년 (위대한 부흥)", cohortAge18M: 5.8 },
] as const;

// ── §5. 미국 인구 성장 분해: 자연증가 vs 순이민 (10년/연도별) ─────────────────
// 단위: 백만 명.
// source: US Census Bureau Population Estimates 2024 + ACS 5-year 2018-2023 +
//         CBO Demographic Outlook 2025 + Pew Research 2024. 검증일 2026-05-30.
export type UsGrowthPoint = {
  period: string;
  natural: number;     // 자연증가 (출생 - 사망)
  immigration: number; // 순이민
  total: number;
  immShare: number;    // 이민 기여 비중 (%)
};

export const US_POPULATION_GROWTH_DECOMP: UsGrowthPoint[] = [
  { period: "2000s (10년)", natural: 17.0, immigration: 10.3, total: 27.3, immShare: 38 },
  { period: "2010s (10년)", natural: 12.0, immigration: 10.7, total: 22.7, immShare: 47 },
  { period: "2020–2024 (4년)", natural: 0.5, immigration: 9.2, total: 9.7, immShare: 95 },
  { period: "2023 단년",   natural: -0.14, immigration: 1.78, total: 1.64, immShare: 109 },
  { period: "2024 단년",   natural: 0.52, immigration: 2.78, total: 3.30, immShare: 84 },
];

// CBO 2055 시나리오 비교
export const CBO_2055_SCENARIOS = [
  { scenario: "베이스라인",    scenarioEn: "Baseline",      pop2055: 384 },
  { scenario: "저이민 (트럼프)", scenarioEn: "Low immigration", pop2055: 351 },
] as const;

// ── §6. 일본 잠재성장률 시계열 (1990–2024) ───────────────────────────────────
// 단위: %.
// source: IMF Japan Article IV 2024 + 한국은행 BOK 이슈노트 2023.11 (일본
//         잠재성장률 분석) + Cabinet Office 経済財政白書 2024. 검증일 2026-05-30.
export type JapanPotentialGrowthPoint = {
  year: number;
  potential: number;
  event?: string;
};

export const JAPAN_POTENTIAL_GROWTH_1990_2024: JapanPotentialGrowthPoint[] = [
  { year: 1990, potential: 3.8, event: "자산 거품 정점" },
  { year: 1995, potential: 1.8, event: "인구 정점 신호" },
  { year: 2000, potential: 1.2 },
  { year: 2005, potential: 0.8 },
  { year: 2010, potential: 0.5 },
  { year: 2015, potential: 0.4, event: "아베노믹스" },
  { year: 2020, potential: 0.2, event: "코로나" },
  { year: 2024, potential: 0.5, event: "IMF Article IV 2024" },
];

// ── 보조: 6개국 인구 정점 비교 ────────────────────────────────────────────────
export const POPULATION_PEAK_TABLE = [
  { country: "일본",       countryEn: "Japan",         peakPop: 128.6,  peakYear: 2008 },
  { country: "대한민국",   countryEn: "South Korea",   peakPop:  51.7,  peakYear: 2020 },
  { country: "중국",       countryEn: "China",         peakPop: 1412.6, peakYear: 2022 },
  { country: "독일",       countryEn: "Germany",       peakPop:  84.7,  peakYear: 2024 },
  { country: "인도",       countryEn: "India",         peakPop: 1701,   peakYear: 2061 },
  { country: "미국",       countryEn: "United States", peakPop:  370,   peakYear: 2080 },
] as const;

// ── Metadata ─────────────────────────────────────────────────────────────────
export const CH02_DATA_META = {
  lastVerified: "2026-05-30",
  primarySources: [
    "UN DESA — World Population Prospects 2024 Revision",
    "통계청 KOSIS — 인구동향조사 + 장래인구추계 2022~2072",
    "국민연금 제5차 재정계산 (2023.03)",
    "China NBS — 7th Census 2021 + 2024 Communiqué",
    "US Census Bureau — Population Estimates 2024",
    "CDC NCHS — National Vital Statistics 2023~2024",
    "CBO — Demographic Outlook 2025–2055",
    "일본 IPSS — 将来推計人口 2023",
    "Eurostat — EUROPOP 2023",
    "Destatis — Bevölkerungsvorausberechnung 15",
    "India MOSPI — SRS 2022 + NFHS-5",
    "IMF — Japan Article IV 2024 + Fiscal Monitor 2024.10",
    "OECD — Pensions at a Glance 2023",
    "Yi Fuxian — BMJ Global Health 2023 (중국 통계 비판)",
    "Lancet GBD 2024.03 — Global Fertility Forecast",
  ],
} as const;
