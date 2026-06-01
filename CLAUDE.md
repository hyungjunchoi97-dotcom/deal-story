# Deal Story — Claude Development Guide

## Project Overview
Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Recharts.
Bilingual site: KO at `/`, EN at `/en/`.

---

## 1. Bilingual Rule — CRITICAL

Every Client component receives `lang: "ko" | "en"` prop and derives:
```tsx
const ko = lang === "ko";
```

### ✅ ALL user-visible strings must be bilingual

**Article body text:**
```tsx
{ko ? "주선은행이 딜을 구조화한다." : "The arranger structures the deal."}
```

**Chart data — MUST use separate arrays or inline ternary:**
```tsx
// ✅ Correct — separate arrays selected by ko
const DATA_KO = [{ name: "기관", value: 74 }, { name: "일반", value: 26 }];
const DATA_EN = [{ name: "Institution", value: 74 }, { name: "Retail", value: 26 }];
const chartData = ko ? DATA_KO : DATA_EN;

// ✅ Correct — inline ternary inside render
const chartData = [
  { name: ko ? "기관" : "Institution", value: 74 },
  { name: ko ? "일반" : "Retail", value: 26 },
];

// ❌ WRONG — hardcoded Korean
const DATA = [{ name: "기관 (Institution)", value: 74 }];
```

**Chart axis / legend labels:**
```tsx
// ✅ Correct
<YAxis label={{ value: ko ? "발행 규모 (십억달러)" : "Issuance Volume ($B)", ... }} />

// ❌ WRONG
<YAxis label={{ value: "발행 규모 (십억달러)" }} />
```

**Unit formatters:**
```tsx
// ✅ Correct
tickFormatter={(v) => ko ? `${v}조원` : `$${v}T`}

// ❌ WRONG
tickFormatter={(v) => `${v}조원`}
```

**Table headers and cell content:**
```tsx
// ✅ Correct
<th>{ko ? "발행사" : "Issuer"}</th>

// ❌ WRONG
<th>발행사</th>
```

---

## 2. Number / Unit Formatting

| Korean | English |
|--------|---------|
| 1조원 | $1T |
| 1억달러 | $100M |
| 1천억원 | ₩100B |
| 50bp | 50bps |
| N배수 | Nx |
| X% (percent without context) | X% |

In charts: always show `$` prefix for USD amounts on EN pages.

---

## 3. Mobile Optimization Rules

### Responsive typography
```tsx
// Headings
"text-xl sm:text-2xl md:text-3xl"

// Body text
"text-[14px] sm:text-[15px]"

// Labels / tags
"text-[11px] sm:text-[12px]"
```

### Responsive layout
```tsx
// Stack on mobile, side-by-side on desktop
"flex flex-col sm:flex-row"

// Grid: 1 col on mobile, 2 on tablet, 3 on desktop
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
```

### Charts
- Always wrap in `<ResponsiveContainer width="100%" height={280}>` (or taller)
- On mobile, reduce chart height: `height={220}` sm `height={280}`
- Long axis labels: use `angle={-35}` + `textAnchor="end"` on `<XAxis>`
- For bar charts with many categories: horizontal layout on mobile

### Tables
- Wrap in `<div className="overflow-x-auto">` 
- Use `whitespace-nowrap` for cells that shouldn't wrap

### Series navigation bar
- Always `overflow-x-auto` + `min-w-max` for the nav pill row

---

## 4. Page Structure Pattern

Every Market 101 / Deal 101 page:

```
src/app/market-101/[topic]/
  page.tsx          ← Server component, metadata, notFound()
  [Topic]Client.tsx ← "use client", all content, accepts lang prop
src/app/en/market-101/[topic]/
  page.tsx          ← same but passes lang="en"
```

### page.tsx template (KO)
```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import TopicClient from "./TopicClient";

export const metadata: Metadata = {
  title: "주제 — Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/topic-slug",
    languages: { ko: "/market-101/topic-slug", en: "/en/market-101/topic-slug", "x-default": "/market-101/topic-slug" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("topic-slug");
  if (!concept) notFound();
  return <TopicClient concept={concept} lang="ko" />;
}
```

---

## 5. Series Nav Pattern

```tsx
const SERIES = [
  { slug: "topic-overview", title: (ko: boolean) => ko ? "Ch.0 개요" : "Ch.0 Overview" },
  { slug: "topic-detail",   title: (ko: boolean) => ko ? "Ch.1 심화" : "Ch.1 Deep Dive" },
];

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {SERIES.map((ch) => (
            <Link key={ch.slug} href={`${ko ? "" : "/en"}/market-101/${ch.slug}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold ...">
              {ch.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## 6. market-101-concepts.ts Entry Template

```ts
{
  slug: "topic-slug",
  title: "한국어 제목",
  titleEn: "English Title",
  entryType: "article",          // or "term"
  category: "ecm",               // dcm | ecm | levfin | syndloan | structured | fig | sovereign
  categoryLabel: "ECM",
  categoryLabelEn: "ECM",
  excerpt: "한 줄 설명 (KO)",
  excerptEn: "One-line description (EN)",
  readingMinutes: 12,
  tags: ["태그1", "태그2"],
  tagsEn: ["Tag1", "Tag2"],
  sections: [
    { heading: "섹션 제목", headingEn: "Section Title", body: `KO 본문`, bodyEn: `EN body` },
  ],
  keyTerms: [
    { term: "용어", termEn: "Term", definition: "KO 정의", definitionEn: "EN definition" },
  ],
  relatedSlugs: ["related-slug-1"],
  appearsIn: [
    { type: "market-101", slug: "related-slug", title: "관련 제목", titleEn: "Related Title" },
  ],
}
```

---

## 7. Common Components

| Component | Usage |
|-----------|-------|
| `<FaqAccordion items={[{q,a}]} accent="#hex" />` | FAQ section |
| `<ShareButtons title="..." variant="top|mid|bottom" lang={lang} />` | Share buttons |
| `<Header />` | Global sticky header |
| `<Footer />` | Global footer |

Animation constants (Framer Motion):
```tsx
const EASE = [0.25, 0.1, 0.25, 1];
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE, delay } } });
const VP = { once: true, margin: "-60px" };
```

---

## 8. Checklist Before Committing

- [ ] All chart `name` fields use bilingual pattern or separate KO/EN arrays
- [ ] All axis labels (`<XAxis>`, `<YAxis>`) use `ko ? "한글" : "English"`
- [ ] All tooltip formatters return English when `!ko`
- [ ] All table `<th>` headers are bilingual
- [ ] All unit strings ("조원", "억달러", etc.) are language-conditional
- [ ] Series nav `title` functions return English for EN
- [ ] Mobile: charts wrapped in `ResponsiveContainer`, tables in `overflow-x-auto`
- [ ] Mobile: text sizes use responsive classes (`text-sm sm:text-base`)
- [ ] EN page.tsx exists at `src/app/en/market-101/[slug]/page.tsx`
- [ ] Slug registered in `market-101-concepts.ts`

---

## 9. Korean Tone Standard (`src/data/notes/**.ts` 한국어 본문)

**확정 기준일: 2026-06-01 (Private Credit 노트에서 표준화)**

모든 노트의 *한국어 본문*(body/heading/caption/title/label/sub/value/rows/headers/strategy/firm/actor/flow/detail/indicator/source/channel)은 다음 7개 규칙을 *반드시* 따른다. 영문 필드(`bodyEn`, `headingEn`, 등)는 본 규칙 *적용 대상 아님*.

### 규칙 1. `*텍스트*` italic 강조 패턴 사용 금지

한국어에서 `*텍스트*` 패턴 *절대 사용 금지*. 강조는 *문장 구조 자체*로. 영문 `bodyEn` 의 `*italic*`은 유지 가능 (보라색 렌더링).

### 규칙 2. em-dash 부가정보 ` — ... — ` 사용 금지

- BAD: `한국 대형마트 — 홈플러스 — 가`
- GOOD: `한국 대형마트 홈플러스가`

heading의 em-dash 1개는 콤마(`,`)로:
- BAD: `1. 17년 호황의 끝자락 — 세 가지 신호`
- GOOD: `1. 17년 호황의 끝자락, 세 가지 신호`

영문판은 em-dash 유지 가능.

### 규칙 3. 평문 `~다` 종결 사용 (음슴체 절대 금지)

종결어미는 모두 평문 `~다`:
- ✅ `겹쳤다.` / `신청했다.` / `이다.` / `보도됐다.` / `유력하다.`
- ❌ `겹침.` / `신청.` / `임.` / `보도됨.` / `유력함.` ← *절대 금지*

### 규칙 4. 문장별 빈 줄 분리 (`\n\n`)

한 단락 안 모든 문장을 `\n\n`로 분리. 각 문장이 *짧은 단락*처럼 보이게.

### 규칙 5. 자연스러운 한국어 조사·접속사

- `~가` vs `~는` 자연스러운 흐름 우선
- `다만,` `따라서,` `한편,` 적극 사용
- 어색한 표현 단정적으로 변환:
  - `~될 가능성이 열렸다` → `~될 가능성이 유력하다`
  - `~의미를 만든다` → `~문제이다` (단정적)
- 중점(`·`) → 콤마(`,`):
  - BAD: `PEF·인수금융`
  - GOOD: `PEF, 인수금융`

### 규칙 6. 숫자 표기 한국식

- `₩7.2조` → `7.2조원`
- `₩20.3조` → `20.3조원`
- `~50%` → `약 50%`
- `~$250B` → `약 $250B` 또는 `250B 달러`

### 규칙 7. 1인칭 표현 자제

- BAD: `그래서 우리는 이 글을 쓴다.`
- GOOD: `그렇기에 이 글을 작성하게 되었다.`
- `우리는 ~ 본다.` → `~로 본다.` 또는 `~로 보인다.`
- `당신이 ~` 같은 1인칭은 *후크 첫 문장에서만 제한적으로* 사용.

### 인용절은 *변환 금지*

- `"전통적 투자 모델은 깨졌다"고 말했다.` — 인용(`깨졌다`)과 외부 동사(`말했다`) 모두 유지

### Sample (§1 후크 — 사용자 톤 표준)

```
2025년 봄, PC 시장에서 세 가지 사건이 한 분기에 겹쳤다.

각 사건은 단독으로는 결정적이지 않았다.

다만, 세 사건이 함께 일어난 것이 문제이다.

첫째, 2025년 3월 4일, 한국 대형마트 홈플러스는 서울회생법원에 법인회생을 신청했다.

MBK파트너스가 2015년 7.2조원에 인수한 지 10년 만이다.

인수 당시 차입금 약 4.3조원(전체의 59.8%)이 인수금융으로 조달되었고, 10년이 지난 시점 누적 부채는 8.5조원 규모로 보도됐다.¹

한국 PEF, 인수금융 역사상 단일 최대 손실 사례가 될 가능성이 유력하다.
```

이 톤이 *deal-story 모든 노트의 표준*이다.
