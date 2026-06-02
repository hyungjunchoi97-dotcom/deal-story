#!/usr/bin/env node
/**
 * i18n 누락 감지 스크립트
 *
 * 목적: 영문 페이지에서 한글이 새는 것을 빌드 시점에 자동으로 잡는다.
 *
 * 감지 대상:
 *   1) `value: "한글..."` 인데 같은 객체 안에 `valueEn` 이 없는 경우
 *      (market-deals.ts, investor-stories.ts 의 snapshot row 등)
 *   2) `title: "한글..."` 인데 같은 객체 안에 `titleEn` 이 없는 경우
 *      (케이스 스터디 등 마켓 101 / 딜 101 컴포넌트 내 하드코드 객체)
 *
 * 사용법:
 *   node scripts/check-i18n.mjs              # 보고만
 *   node scripts/check-i18n.mjs --strict     # 누락 발견 시 exit 1
 *
 * 향후 새 아티클을 추가할 때:
 *   value 에 한글이 들어가면 반드시 valueEn 을 같이 적어야 한다.
 *   이 스크립트가 빌드/CI 단계에서 자동으로 잡아준다.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");
const STRICT = process.argv.includes("--strict");

// ── 검사 대상 파일 ────────────────────────────────────────────────────
// 명시적으로 i18n 규칙을 따르는 파일만 검사한다.
// (value/valueEn, title/titleEn 패턴이 약속된 파일)
//
// 다른 한글 데이터 파일 (src/data/deals/*.ts 등) 은 별도 EN 디렉토리를 쓰거나
// 자체 ko/en 분기 구조라서 검사 대상에서 제외한다.
const SCAN_FILES = [
  join(ROOT, "src", "data", "market-deals.ts"),
  join(ROOT, "src", "data", "investor-stories.ts"),
  // 마켓 101, 딜 101 클라이언트 컴포넌트의 하드코드 객체도 검사
  // (예: ECM IPO Issuers의 CASE_STUDIES)
  ...walkDir(join(ROOT, "src", "app", "market-101")),
  ...walkDir(join(ROOT, "src", "app", "deal-101")),
];

function walkDir(dir) {
  const acc = [];
  try {
    for (const name of readdirSync(dir)) {
      if (IGNORE.includes(name)) continue;
      const full = join(dir, name);
      const stat = statSync(full);
      if (stat.isDirectory()) acc.push(...walkDir(full));
      else if (/\.(ts|tsx)$/.test(name)) acc.push(full);
    }
  } catch {}
  return acc;
}

// ── 무시할 디렉토리/파일 ──────────────────────────────────────────────
const IGNORE = [
  "node_modules", ".next", ".git",
];

// ── 한글 포함 정규식 ──────────────────────────────────────────────────
const KOREAN = /[가-힣]/;

// ── 객체 리터럴에서 same-line key 확인용 헬퍼 ─────────────────────────
// 한 줄짜리 `{ a: ..., b: ... }` 객체 안에 valueEn/titleEn 이 있는지 본다.
function hasSiblingKey(line, key) {
  // 같은 줄에 해당 key 가 정의돼 있으면 통과
  const re = new RegExp(`\\b${key}\\s*:`);
  return re.test(line);
}

// 멀티라인 객체 리터럴 처리:
// `{` 부터 시작해서 짝이 맞는 `}` 까지 모두 추출해 key 존재 여부 검사.
function findEnclosingObject(lines, lineIdx) {
  // 위로 올라가면서 가장 가까운 `{` 찾기
  let depth = 0;
  let start = -1;
  for (let i = lineIdx; i >= 0; i--) {
    const text = lines[i];
    for (let c = text.length - 1; c >= 0; c--) {
      if (text[c] === "}") depth++;
      else if (text[c] === "{") {
        if (depth === 0) { start = i; break; }
        depth--;
      }
    }
    if (start >= 0) break;
  }
  if (start < 0) return null;

  // 아래로 내려가면서 짝 맞는 `}` 찾기
  let bal = 0;
  let end = -1;
  for (let i = start; i < lines.length; i++) {
    const text = lines[i];
    for (let c = 0; c < text.length; c++) {
      if (text[c] === "{") bal++;
      else if (text[c] === "}") {
        bal--;
        if (bal === 0) { end = i; break; }
      }
    }
    if (end >= 0) break;
  }
  if (end < 0) return null;

  return { start, end, text: lines.slice(start, end + 1).join("\n") };
}

// ── 검사 규칙 ────────────────────────────────────────────────────────
const RULES = [
  {
    name: "value-missing-valueEn",
    // `value: "...한글..."` 캡처. 라인 단위.
    pattern: /\bvalue\s*:\s*"([^"]*[가-힣][^"]*)"/g,
    siblingKey: "valueEn",
    label: "value에 한글이 있으나 valueEn 누락",
  },
  {
    name: "title-missing-titleEn",
    pattern: /\btitle\s*:\s*"([^"]*[가-힣][^"]*)"/g,
    siblingKey: "titleEn",
    label: "title에 한글이 있으나 titleEn 누락",
  },
];

const files = SCAN_FILES;

// ── 검사 실행 ────────────────────────────────────────────────────────
const findings = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");

  for (const rule of RULES) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const re = new RegExp(rule.pattern.source, "g");
      let m;
      while ((m = re.exec(line)) !== null) {
        const koreanValue = m[1];

        // 1) 같은 줄에 sibling key 가 있으면 통과
        if (hasSiblingKey(line, rule.siblingKey)) continue;

        // 2) 같은 객체 리터럴 안에 sibling key 가 있는지 확인 (멀티라인 객체)
        const obj = findEnclosingObject(lines, i);
        if (obj && new RegExp(`\\b${rule.siblingKey}\\s*:`).test(obj.text)) continue;

        findings.push({
          file: relative(ROOT, file),
          line: i + 1,
          rule: rule.label,
          value: koreanValue.length > 60 ? koreanValue.slice(0, 57) + "..." : koreanValue,
        });
      }
    }
  }
}

// ── 추가 검증: 영문 데이터 파일에 한글 잔재 ───────────────────────────
// src/data/deals/en/* 에 한글 문자가 들어가면 영문 페이지에 노출됨.
// 의도적으로 원어 병기가 필요한 한국 케이스만 allow-list 처리.
const EN_DEAL_DIR = join(ROOT, "src", "data", "deals", "en");
const EN_DEAL_ALLOWLIST = new Set([
  "src/data/deals/en/mbk-homeplus.ts",   // 한국 LBO — 법률·문화 용어 영어+괄호 한국어 의도적 병기
  "src/data/deals/en/korea-zinc-mbk.ts", // 한국 사건 — 신문 원어명
]);

for (const file of walkDir(EN_DEAL_DIR)) {
  const rel = relative(ROOT, file);
  if (EN_DEAL_ALLOWLIST.has(rel)) continue;
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (KOREAN.test(lines[i])) {
      findings.push({
        file: rel,
        line: i + 1,
        rule: "영문 파일에 한글 잔재 (en/*.ts)",
        value: lines[i].trim().slice(0, 80),
      });
    }
  }
}

// ── 결과 출력 ────────────────────────────────────────────────────────
if (findings.length === 0) {
  console.log("✅ i18n 검사 통과 — 영문 누락 없음");
  process.exit(0);
}

const byFile = new Map();
for (const f of findings) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}

console.log(`\n⚠️  i18n 누락 ${findings.length}건 발견\n`);
for (const [file, items] of byFile) {
  console.log(`\n📄 ${file}`);
  for (const it of items) {
    console.log(`   L${it.line}  [${it.rule}]`);
    console.log(`         "${it.value}"`);
  }
}

console.log(`\n💡 해결: 같은 객체에 "${RULES[0].siblingKey}" 또는 "${RULES[1].siblingKey}" 필드를 추가하세요.\n`);

if (STRICT) process.exit(1);
process.exit(0);
