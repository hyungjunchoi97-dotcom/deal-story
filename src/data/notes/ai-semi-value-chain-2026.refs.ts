/**
 * References — AI Semiconductor Value Chain 2026.
 *
 * 본문에서 ¹²³⁴⁵⁶⁷⁸ 형식으로 인용된 출처들.
 * 1차 자료는 ai-semi-value-chain-research.md §15에 180+ 카탈로그 보관.
 * 본문 인용 핵심 출처만 여기에 등록.
 */

import type { NoteReference } from "../notes";

export const REFERENCES: NoteReference[] = [
  { id: 1, author: "SK하이닉스", title: "2026 1분기 실적 발표 (영업이익률 72%, 매출 52.58조원)", source: "SK Hynix IR", year: "2026.04" },
  { id: 2, author: "한미반도체", title: "2026 1분기 잠정공시 (매출 509억원, -65.5% YoY)", source: "한미반도체 IR", year: "2026.04" },
  { id: 3, author: "솔브레인 / HPSP", title: "2026 1분기 실적 / 연간 가이던스", source: "각사 IR + 증권사 리포트", year: "2026.04-05" },
  { id: 4, author: "WSTS / SIA", title: "Global Semiconductor Sales 2025-2026 ($791.7B → $1T)", source: "WSTS Autumn 2025 / SIA Feb 2026", year: "2025-2026" },
  { id: 5, author: "NVIDIA / AMD / Broadcom", title: "Data Center Revenue Combined Q1 2024 → Q1 2026 (~$27B → ~$70B)", source: "각사 Form 8-K + IR", year: "2024-2026" },
  { id: 6, author: "WSTS", title: "2026 Autumn Forecast ($1T milestone projection)", source: "WSTS", year: "2025-11" },
  { id: 7, author: "NVIDIA", title: "Form 8-K, FY2026 Q4 Data Center Revenue $35.6B", source: "SEC EDGAR", year: "2026.02", url: "https://investor.nvidia.com/" },
  { id: 8, author: "Broadcom", title: "Q1 FY2026 AI Semi Revenue $8.4B (+106% YoY), Backlog $73B", source: "Broadcom IR", year: "2026.03", url: "https://investors.broadcom.com/" },
  { id: 9, author: "TSMC", title: "Q1 2026 Revenue $35.9B, HPC mix 61%, 2026 capex $52-56B", source: "TSMC IR", year: "2026.04", url: "https://www.tsmc.com/english/investorRelations" },
  { id: 10, author: "Counterpoint Research / TrendForce", title: "HBM Quarterly Share 2023 Q1 - 2026 Q1", source: "Counterpoint, TrendForce", year: "2026" },
  { id: 11, author: "Micron", title: "FY Q2 2026 Revenue $23.86B (+196% YoY), Q3 Guidance $33.5B, Margin 81%", source: "Micron IR", year: "2026.03", url: "https://investors.micron.com/" },
  { id: 12, author: "TSMC / SemiAnalysis", title: "CoWoS Capacity 2023-2026 (15K → 130K wafer/month)", source: "TSMC IR + SemiAnalysis (Dylan Patel)", year: "2024-2026" },
  { id: 13, author: "ASML", title: "Q1 2026 Revenue €8.8B, EUV €4.1B, EPS €7.15, 2026 guidance €36-40B", source: "ASML IR", year: "2026.04", url: "https://www.asml.com/en/investors" },
  { id: 14, author: "SemiAnalysis (Dylan Patel)", title: "Blackwell delay analysis — CoWoS capacity as the real variable", source: "SemiAnalysis", year: "2024-2025" },
  { id: 15, author: "US BIS (Bureau of Industry and Security)", title: "Export controls timeline (Oct 2022, Oct 2023, Oct 2024)", source: "US Department of Commerce BIS", year: "2022-2024", url: "https://www.bis.doc.gov/" },
  { id: 16, author: "China National IC Industry Investment Fund", title: "Phase 3 announcement, ~$47.5B (RMB 344B)", source: "China State Council", year: "2024.05" },
  { id: 17, author: "SMIC", title: "Q1 2026 revenue $2.5B; Huawei Kirin 9000S on SMIC N+2 7nm", source: "SMIC IR + media", year: "2023-2026" },
  { id: 18, author: "TrendForce", title: "DRAM/NAND ASP trends 2023-2026 (DDR5 8Gb spot price)", source: "TrendForce / DRAMeXchange", year: "2023-2026" },
  { id: 19, author: "Shin-Etsu / SUMCO / JSR / TEL / Disco / Lasertec", title: "각 사 2026 Q1 IR (일본 소부장)", source: "각사 IR", year: "2026" },
  { id: 20, author: "AMAT / LAM / KLA", title: "Q1 2026 IR (미국 장비 3강)", source: "각사 IR", year: "2026" },
  { id: 21, author: "솔브레인 / 동진쎄미켐 / SK실트론 / 원익머트리얼즈", title: "한국 소재 강자 2025-2026 사업보고서", source: "DART", year: "2025-2026" },
  { id: 22, author: "원익큐엔씨", title: "2025 매출 9,436억 / 2026 Q1 매출 2,562억", source: "원익큐엔씨 IR + 디지털투데이 잠정공시", year: "2026.04" },
  { id: 23, author: "한미반도체", title: "TC Bonder 글로벌 점유율 약 70% (보도 기반 추정)", source: "더벨, 인베스트조선", year: "2024-2026" },
  { id: 24, author: "HPSP", title: "고압 어닐링 글로벌 95%+ 사실상 독점", source: "HPSP IR + 증권사 리포트", year: "2024-2026" },
  { id: 25, author: "심텍", title: "HBM substrate 2025 매출 약 1.3조 (SK하이닉스 의존)", source: "심텍 IR", year: "2025" },
  { id: 26, author: "테크윙", title: "HBM 테스트 핸들러 2025 매출 약 2,800억", source: "테크윙 IR", year: "2025" },
  { id: 27, author: "Jim Chanos / Kynikos Associates", title: "Memory cycle bear thesis — 'memory is forever cyclical'", source: "Bloomberg, FT interviews", year: "2024-2026" },
  { id: 28, author: "Hans Mosesmann (Rosenblatt)", title: "AI capex bubble warning", source: "Rosenblatt Securities", year: "2024-2026" },
  { id: 29, author: "ai-semi-value-chain-research.md", title: "내부 리서치 fact base (180+ 출처 카탈로그)", source: "deal-story internal", year: "2026-05-31", note: "전체 출처 카탈로그는 research .md §15 참조" },
  { id: 30, author: "한국은행 / KIET / 반도체산업협회", title: "한국 반도체 수출·매출 통계", source: "한국은행 ECOS, KIET, KSIA", year: "2025-2026" },
];

