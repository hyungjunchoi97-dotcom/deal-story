/**
 * ch01-shale-chart-data.ts
 *
 * Chapter 1 (Shale Pivot)의 차트·표용 정리된 데이터.
 * 모든 수치는 ch01-shale-research.md의 1차 자료(EIA·IEA·IMF·Rystad·Bruegel)
 * 기반으로 검증됨.
 *
 * 본문 작성 시 import해서 Recharts에 그대로 투입.
 */

// ── §1. US Crude Oil Production (1970-2026) ───────────────────────────────────
// 단위: 1,000 bpd (천 배럴/일). EIA Monthly + AEO 2025
export type UsProductionPoint = { year: number; production: number; event?: string };

export const US_OIL_PRODUCTION: UsProductionPoint[] = [
  { year: 1970, production: 9637, event: "역사적 정점 (재래식)" },
  { year: 1975, production: 8375 },
  { year: 1980, production: 8597 },
  { year: 1985, production: 8971 },
  { year: 1990, production: 7355 },
  { year: 1995, production: 6560 },
  { year: 2000, production: 5822 },
  { year: 2005, production: 5178 },
  { year: 2008, production: 5000, event: "셰일 변곡점 (Bakken·Eagle Ford ramp)" },
  { year: 2010, production: 5482 },
  { year: 2012, production: 6497 },
  { year: 2014, production: 8769, event: "OPEC 가격 전쟁 시작" },
  { year: 2016, production: 8836 },
  { year: 2018, production: 10964 },
  { year: 2019, production: 12290 },
  { year: 2020, production: 11283, event: "첫 순수출국" },
  { year: 2022, production: 11910 },
  { year: 2023, production: 12930 },
  { year: 2024, production: 13200, event: "세계 최대 생산국 (사우디·러시아 추월)" },
  { year: 2025, production: 13600, event: "7월 신기록" },
  { year: 2026, production: 13500, event: "EIA STEO 예측 (소폭 감소)" },
];

// ── §6. US Persian Gulf Oil Imports (% of total) ──────────────────────────────
// EIA Monthly Energy Review + Today in Energy
export type PgImportPoint = { year: number; pct: number; event?: string };

export const US_PG_IMPORT_PCT: PgImportPoint[] = [
  { year: 1973, pct: 7, event: "Arab Oil Embargo (직접 수입 기준)" },
  { year: 1980, pct: 22, event: "Carter Doctrine 발표" },
  { year: 1990, pct: 24, event: "1차 걸프전 직전" },
  { year: 2000, pct: 21 },
  { year: 2008, pct: 18, event: "셰일 시작점" },
  { year: 2010, pct: 17 },
  { year: 2014, pct: 21 },
  { year: 2016, pct: 16 },
  { year: 2018, pct: 16 },
  { year: 2020, pct: 11 },
  { year: 2022, pct: 12 },
  { year: 2024, pct: 7, event: "거의 40년 만의 최저" },
  { year: 2025, pct: 8 },
];

// ── §5. LNG Exporters Ranking (2024) ──────────────────────────────────────────
// 단위: Bcf/d. EIA + IGU World LNG Report 2024
export type LngExporter = { country: string; countryEn: string; bcfd: number; color: string };

export const LNG_EXPORTERS_2024: LngExporter[] = [
  { country: "미국",       countryEn: "United States", bcfd: 11.9, color: "#dc2626" },
  { country: "호주",       countryEn: "Australia",     bcfd: 10.5, color: "#0ea5e9" },
  { country: "카타르",     countryEn: "Qatar",         bcfd: 10.4, color: "#8b5cf6" },
  { country: "러시아",     countryEn: "Russia",        bcfd:  4.4, color: "#475569" },
  { country: "말레이시아", countryEn: "Malaysia",      bcfd:  3.7, color: "#f59e0b" },
];

// ── §10. Korea LNG Import Mix (2024) ──────────────────────────────────────────
// 단위: % of total imports. World Bank WITS + KOGAS
export type KoreaLngSource = { country: string; countryEn: string; pct: number; trend?: string };

export const KOREA_LNG_MIX_2024: KoreaLngSource[] = [
  { country: "호주",       countryEn: "Australia",     pct: 24 },
  { country: "카타르",     countryEn: "Qatar",         pct: 19 },
  { country: "말레이시아", countryEn: "Malaysia",      pct: 14 },
  { country: "미국",       countryEn: "United States", pct: 12.2, trend: "+10.2% YoY" },
  { country: "오만",       countryEn: "Oman",          pct: 10 },
  { country: "기타",       countryEn: "Others",        pct: 20.8 },
];

// ── §9. China Crude Oil Imports by Source (2024) ──────────────────────────────
// 단위: % of total imports. China Customs + Visual Capitalist
export type ChinaOilSource = {
  country: string;
  countryEn: string;
  pct: number;
  bucket: "russia" | "gulf-major" | "iran" | "other";
};

export const CHINA_OIL_MIX_2024: ChinaOilSource[] = [
  { country: "러시아",     countryEn: "Russia",       pct: 20, bucket: "russia" },
  { country: "사우디",     countryEn: "Saudi Arabia", pct: 14, bucket: "gulf-major" },
  { country: "이라크",     countryEn: "Iraq",         pct: 11, bucket: "gulf-major" },
  { country: "이란",       countryEn: "Iran",         pct: 11, bucket: "iran" },
  { country: "UAE",        countryEn: "UAE",          pct:  7, bucket: "gulf-major" },
  { country: "오만",       countryEn: "Oman",         pct:  6, bucket: "gulf-major" },
  { country: "말레이시아", countryEn: "Malaysia",     pct:  4, bucket: "other" },
  { country: "쿠웨이트",   countryEn: "Kuwait",       pct:  3, bucket: "gulf-major" },
  { country: "브라질",     countryEn: "Brazil",       pct:  3, bucket: "other" },
  { country: "앙골라",     countryEn: "Angola",       pct:  3, bucket: "other" },
  { country: "카타르",     countryEn: "Qatar",        pct:  1, bucket: "gulf-major" },
  { country: "기타",       countryEn: "Others",       pct: 17, bucket: "other" },
];

// ── §7. Breakeven Comparison (Fiscal vs Production) ──────────────────────────
// 단위: $/bbl WTI. IMF + Rystad 2024-25
export type BreakevenItem = {
  label: string;
  labelEn: string;
  value: number;
  category: "shale" | "saudi" | "saudi-vision";
  color: string;
};

export const BREAKEVEN_COMPARISON: BreakevenItem[] = [
  { label: "Permian 웰헤드 (운영 단가)",                     labelEn: "Permian Wellhead",                 value: 35,  category: "shale",        color: "#10b981" },
  { label: "Permian All-in (배당·hurdle 포함)",              labelEn: "Permian All-in",                   value: 62.5, category: "shale",        color: "#16a34a" },
  { label: "사우디 재정 손익분기 (IMF, 정부 운영)",          labelEn: "Saudi Fiscal Breakeven (IMF)",     value: 96.2, category: "saudi",        color: "#f59e0b" },
  { label: "사우디 재정 손익분기 (Vision 2030 + PIF 포함)",  labelEn: "Saudi + PIF (Vision 2030)",        value: 112,  category: "saudi-vision", color: "#dc2626" },
];

// ── §8. EU Russian Gas Share (2021-2025) ─────────────────────────────────────
// 단위: % of EU gas imports. Bruegel + Statista
export type EuRussianGasPoint = { year: number; russianPct: number; event?: string };

export const EU_RUSSIAN_GAS: EuRussianGasPoint[] = [
  { year: 2021, russianPct: 45 },
  { year: 2022, russianPct: 30, event: "우크라이나 전쟁 · Nord Stream 폭파" },
  { year: 2023, russianPct: 22 },
  { year: 2024, russianPct: 18 },
  { year: 2025, russianPct: 12, event: "우크라이나 통과 종료" },
];

// ── Metadata ─────────────────────────────────────────────────────────────────
export const CH01_DATA_META = {
  lastVerified: "2026-05-29",
  primarySources: [
    "EIA Annual Energy Outlook 2025",
    "EIA Short-Term Energy Outlook (monthly)",
    "IEA World Energy Outlook 2024",
    "IMF Saudi Arabia Article IV 2025",
    "Rystad Energy Shale Productivity 2025",
    "Bruegel European Gas Imports Dataset",
    "World Bank WITS — Korea LNG",
    "China Customs / Visual Capitalist",
  ],
} as const;
