/**
 * Sections for the Private Credit Era note.
 * 16 sections, bilingual KO/EN parallel.
 *
 * Style rules:
 *  - No `**bold**` (em-italic `*foo*` only, renders violet)
 *  - First use of acronyms expanded
 *  - Korean: first-person ("우리/당신"), English: global-reader voice
 *  - Cross-refs use ✓ ("→ ✓14")
 */

import type { NoteSection } from "../notes";
import { SECTIONS_PART_A } from "./private-credit-era.sections.a";
import { SECTIONS_PART_B } from "./private-credit-era.sections.b";

export const SECTIONS: NoteSection[] = [
  ...SECTIONS_PART_A,
  ...SECTIONS_PART_B,
];
