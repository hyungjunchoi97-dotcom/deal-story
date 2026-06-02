/**
 * Sections for the AI Semiconductor Value Chain 2026 note.
 * 17 sections (1, 1.5, 2-17), bilingual KO/EN parallel.
 *
 * Korean tone follows CLAUDE.md §9:
 *  - 평문 ~다 종결 (no 음슴체)
 *  - 문장별 \n\n 분리
 *  - *italic* / **bold** 0개
 *  - em-dash 부가정보 금지 (영문은 허용)
 *  - 숫자 한국식 (조원 / 억달러)
 *  - 1인칭 자제
 */

import type { NoteSection } from "../notes";
import { SECTIONS_PART_A } from "./ai-semi-value-chain-2026.sections.a";
import { SECTIONS_PART_B } from "./ai-semi-value-chain-2026.sections.b";

export const SECTIONS: NoteSection[] = [
  ...SECTIONS_PART_A,
  ...SECTIONS_PART_B,
];
