/**
 * ai-semi-value-chain-2026.ts
 *
 * Note: "AI 반도체 밸류체인 2026, 3대 병목과 한국이 박혀 있는 자리"
 * AI Semiconductor Value Chain 2026 — Three Bottlenecks and Korea's Position
 *
 * Sourced from src/data/research/ai-semi-value-chain-research.md.
 * No fabricated figures: all numbers traceable to the research file.
 */

import type { NoteData } from "../notes";
import { SECTIONS } from "./ai-semi-value-chain-2026.sections";
import { REFERENCES } from "./ai-semi-value-chain-2026.refs";

export const aiSemiValueChain2026: NoteData = {
  slug: "ai-semi-value-chain-2026",
  category: "macro",
  status: "published",
  title: "AI 반도체 밸류체인 2026, 3대 병목과 한국이 박혀 있는 자리",
  titleEn: "AI Semiconductor Value Chain 2026 — Three Bottlenecks and Korea's Position",
  description:
    "2026년 1분기 SK하이닉스 영업이익률 72%와 한미반도체 매출 -65.5%가 같은 분기에 일어났다. 같은 한국, 같은 산업, 같은 분기. AI 반도체 사이클은 HBM, CoWoS, EUV 3대 병목에서 가격과 우선순위가 결정된다. 글로벌 1조 달러 시장, 한국 소부장 30+사 매핑, 3대 알파(한미, 솔브레인, HPSP), 5채널 위험 신호까지 50분에 정리한다.",
  descriptionEn:
    "In Q1 2026, SK Hynix posted a 72% operating margin while Hami Semiconductor saw revenue fall 65.5%. Same country, same industry, same quarter. The AI semiconductor cycle is priced and prioritized at three bottlenecks — HBM, CoWoS, EUV. The $1T global market, 30+ Korean suppliers mapped, three alpha names (Hami, Soulbrain, HPSP), and five risk channels — all in 50 minutes.",
  date: "2026-06-02",
  readingMinutes: 50,
  keyPoints: [
    "2026년 1분기, 같은 한국 안에서 사이클이 갈렸다. SK하이닉스 영업이익률 72%, 한미반도체 매출 -65.5%. 어느 병목 단계에 박혀 있느냐가 회사 운명을 결정했다.",
    "글로벌 반도체 시장은 2023년 526.8B 달러 (-8.2%)에서 2026년 약 1T 달러로 회복, 사이클의 100%가 AI 수요로 설명된다 (WSTS Autumn 2025).",
    "AI 칩 합산 매출(NVIDIA DC + AMD DC + Broadcom AI semi)은 2024년 1분기 약 27B 달러에서 2026년 1분기 약 70B 달러로 2년 만에 2.6배. Broadcom backlog 730억 달러.",
    "3대 병목: ① HBM (SK하이닉스 59%) ② CoWoS (TSMC 단독, 월 wafer 15K → 130K, 3년에 8.6배) ③ EUV (ASML 100% 독점).",
    "한국 소부장 30+사 매핑. Tier 1 글로벌 알파 둘: 한미반도체 TC Bonder 70%, HPSP 고압 어닐링 95%+. Tier 2 평활 베타: 솔브레인 (HBM·CoWoS·EUV 다영역).",
    "TSMC가 NVIDIA의 capacity를 결정한다. 2024-2025 Blackwell delay의 진짜 원인은 CoWoS 부족이었다 (SemiAnalysis). NVIDIA·AMD·Broadcom·Marvell 사이 우선순위 배분권은 TSMC에 있다.",
    "중국 굴기. EUV·HBM은 5-10년 안전, 일반 DRAM·NAND·식각 장비는 5년 안 본격 위협. CXMT DDR5, YMTC 232L NAND, AMEC 식각이 한국 메모리 사이클의 장기 변수.",
    "위험 신호 5채널. 가장 큰 변수는 메모리 사이클 (HBM 공급 과잉). SK·삼성·마이크론 합산 HBM capa가 2025년 85K → 2026년 185K로 2.2배인데 수요는 1.5-1.8배 추정. 2027년 ASP -30~-40% 시나리오 (SemiAnalysis, Jim Chanos).",
    "투자자가 매주 봐야 할 7개 지표 dashboard로 정리. 2026년 5월 현재 5개 정상, 1개 위험(한미반도체). 사이클 정점 영역 진행 중.",
  ],
  keyPointsEn: [
    "In Q1 2026, the same Korean semiconductor cycle split in two: SK Hynix 72% operating margin vs. Hami Semiconductor -65.5% revenue. Where a company sits relative to the three bottlenecks decides everything.",
    "The global semiconductor market recovered from $526.8B in 2023 (-8.2%) toward ~$1T in 2026 (WSTS Autumn 2025). The entire cycle is AI-driven.",
    "Combined AI chip revenue (NVIDIA DC + AMD DC + Broadcom AI semi) rose from ~$27B in Q1 2024 to ~$70B in Q1 2026 — 2.6× in two years. Broadcom backlog at $73B.",
    "Three bottlenecks: (1) HBM (SK Hynix 59% share), (2) CoWoS (TSMC monopoly, 15K → 130K wafer/month, 8.6× in three years), (3) EUV (ASML 100% monopoly).",
    "30+ Korean supplier-component-equipment (sobujang) firms mapped. Two Tier-1 global alphas: Hami Semiconductor (TC Bonder ~70%) and HPSP (high-pressure annealing ~95%+). Tier 2 smoothed beta: Soulbrain (HBM · CoWoS · EUV exposure).",
    "TSMC decides NVIDIA's capacity. The real cause of the 2024-25 Blackwell delay was CoWoS shortage (SemiAnalysis). Allocation among NVIDIA, AMD, Broadcom, Marvell sits with TSMC.",
    "China's rise. EUV and HBM are safe for 5-10 years; general DRAM, NAND, and etch equipment face real pressure within 5 years. CXMT DDR5, YMTC 232L NAND, AMEC etch are the long-term variables.",
    "Five risk channels. The biggest variable is the memory cycle — HBM oversupply. Combined SK · Samsung · Micron HBM capacity scales 85K → 185K (2.2×) while demand grows ~1.5-1.8×. SemiAnalysis and Jim Chanos flag a 2027 ASP -30 to -40% scenario.",
    "Seven indicators investors should watch weekly — dashboard included. As of May 2026: five normal, one danger (Hami). Cycle is in its peak zone.",
  ],
  sections: SECTIONS,
  references: REFERENCES,
};
