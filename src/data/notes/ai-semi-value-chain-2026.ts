/**
 * ai-semi-value-chain-2026.ts
 *
 * Note: "AI 반도체 밸류체인 2026, 3대 병목과 한국의 현주소"
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
  title: "AI 반도체 밸류체인 2026, 3대 병목과 한국의 현주소",
  titleEn: "AI Semiconductor Value Chain 2026 — Three Bottlenecks and Korea's Position",
  description:
    "26년 1분기 SK하이닉스 영업이익률 72%, 한미반도체 매출 YoY -65.5%. 한국 안에서도 사이클이 크게 갈렸다. AI 반도체 사이클은 HBM, CoWoS, EUV 3대 병목에서 가격이 결정된다. 글로벌 1조 달러 시장, 한국 소부장 매핑, 3대 알파(한미, 솔브레인, HPSP), 27년 공급 과잉 우려까지 50분에 정리.",
  descriptionEn:
    "Q1 2026: SK Hynix at 72% operating margin, Hami Semiconductor revenue YoY -65.5%. The Korean cycle split even within the same country. AI semiconductors are priced at three bottlenecks — HBM, CoWoS, EUV. $1T global market, 30+ Korean suppliers mapped, three alpha names (Hami, Soulbrain, HPSP), and the 2027 oversupply scenario — all in 50 minutes.",
  date: "2026-06-02",
  readingMinutes: 50,
  keyPoints: [
    "26년 1분기 한국 안에서도 사이클이 크게 갈렸다. SK하이닉스 영업이익률 72%, 한미반도체 매출 YoY -65.5%. HBM 셀과 적층 장비 사이 세대 전환 공백이 갈랐다.",
    "글로벌 반도체 시장은 AI 수요로 23년 526.8B달러 → 26년 1T달러로 회복 (WSTS).",
    "AI 칩 합산 매출(엔비디아 DC + AMD DC + 브로드컴 AI semi)은 24년 1Q 27B달러 → 26년 1Q 70B달러 (2년 만에 2.6배). 브로드컴 backlog는 73B달러.",
    "3대 병목: HBM (SK하이닉스 59%), CoWoS (TSMC), EUV (ASML 100%).",
    "TSMC가 엔비디아의 캐파를 결정한다. 24-25년 Blackwell 지연 사건의 진짜 원인은 CoWoS 부족 (SemiAnalysis). 엔비디아, AMD, 브로드컴, 마벨 사이 우선순위 결정권이 TSMC에 있다.",
    "중국 추격. EUV, HBM은 5-10년 안전하지만, 일반 디램, 낸드, 식각 장비는 5년 안 본격 위협. CXMT DDR5, YMTC 232L 낸드, AMEC 식각이 한국 메모리 사이클의 장기 변수가 될 수 있다.",
    "26년 현재는 HBM 공급 부족 국면 (SK하이닉스 OPM 72%가 증거). 다만 27년~ 공급 과잉 우려가 시나리오로 나오고 있다. SK, 삼성, 마이크론 합산 HBM 캐파 25년 85K → 26년 185K (2.2배)인데 수요는 1.5-1.8배 추정. 27년 ASP -30%~-40% 시나리오 (SemiAnalysis, Jim Chanos).",
  ],
  keyPointsEn: [
    "Q1 2026: the Korean semiconductor cycle split sharply even within one country. SK Hynix posted a 72% operating margin while Hami Semiconductor saw revenue fall YoY -65.5%. The gap between HBM cells and stacking equipment, across a generation transition window, drove the divergence.",
    "The global semiconductor market is recovering from $526.8B in 2023 to ~$1T in 2026, driven by AI demand (WSTS).",
    "Combined AI chip revenue (NVIDIA DC + AMD DC + Broadcom AI semi) rose from ~$27B in Q1 2024 to ~$70B in Q1 2026 — 2.6× in two years. Broadcom backlog at $73B.",
    "Three bottlenecks: HBM (SK Hynix 59%), CoWoS (TSMC), EUV (ASML 100%).",
    "TSMC decides NVIDIA's capacity. The real cause of the 2024-25 Blackwell delay was CoWoS shortage (SemiAnalysis). Priority allocation among NVIDIA, AMD, Broadcom, and Marvell sits with TSMC.",
    "China is catching up. EUV and HBM stay safe for 5-10 years, but general DRAM, NAND, and etch equipment face real pressure within 5 years. CXMT DDR5, YMTC 232L NAND, and AMEC etch are the long-term variables for the Korean memory cycle.",
    "As of 2026 we are in an HBM undersupply phase (SK Hynix 72% OPM is the proof). The 2027+ oversupply scenario is emerging: combined SK / Samsung / Micron HBM capacity scales 85K → 185K (2.2×) while demand grows only ~1.5-1.8×, raising a 2027 ASP -30% to -40% scenario (SemiAnalysis, Jim Chanos).",
  ],
  sections: SECTIONS,
  references: REFERENCES,
};
