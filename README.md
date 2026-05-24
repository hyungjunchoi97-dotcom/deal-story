# Deal Story

M&A, PE/VC 투자, IPO, 매각·분리까지 — 기업 딜의 배경과 숫자를 함께 아카이빙하는 블로그.

## 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: TypeScript 파일 (Supabase 미사용, 코드 안에 모두 저장)
- **Font**: Pretendard Variable
- **i18n**: 라우트 분기 (`/` KO ↔ `/en` EN), `next-intl` 등 라이브러리 없이 자체 구현
- **OG 이미지**: 동적 생성 (`/api/og`, `next/og` Edge runtime)

## 로컬 개발

```bash
cd ~/Documents/deal-story
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000` 접속.

> 환경변수 없이도 dev 서버가 정상 실행됨. Supabase는 더 이상 사용하지 않음.

## 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | KO 홈 — 마스트헤드 + 카테고리 칩 + 최근 딜 카드 그리드 |
| `/deals` | KO 딜 아카이브 목록 (카테고리 필터, 검색) |
| `/deals/[slug]` | KO 딜 상세 (마크다운 본문 + 시각화) |
| `/en` | EN 홈 |
| `/en/deals` | EN 딜 아카이브 |
| `/en/deals/[slug]` | EN 딜 상세 |
| `/about`, `/privacy`, `/terms` | 정적 페이지 |
| `/api/og?slug=&lang=` | OG 이미지 동적 생성 (1200×630) |

`<html lang>` 은 `src/middleware.ts` 가 주입한 `x-pathname` 헤더를 루트 layout 이 읽어 `/en` prefix 이면 `en`, 아니면 `ko` 로 분기.

## 딜 카테고리

| 코드 | KO 라벨 | EN 라벨 |
|------|---------|---------|
| `ma` | M&A | M&A |
| `pe_vc` | PE/VC 투자 | PE / VC |
| `ipo` | IPO·상장 | IPO |
| `divestiture` | 매각·분리 | Divestiture |
| `restructuring` | 기업 구조조정 | Restructuring |
| `other` | 기타 | Other |

라벨 SSOT: KO 는 `src/lib/types.ts` `DEAL_CATEGORY_LABEL`, EN 은 `src/lib/i18n.ts` `DEAL_CATEGORY_LABEL_EN`. 컬러는 `DEAL_CATEGORY_COLOR` (lang 무관).

## 새 딜 추가

콘텐츠는 모두 TypeScript 파일. 한·영 두 벌을 같은 슬러그로 작성한다.

1. `src/data/deals/<slug>.ts` 를 새로 만들어 `DealData` 인터페이스(`src/lib/deal-data.ts`)를 채운다.
2. 영문판 `src/data/deals/en/<slug>.ts` 를 같은 슬러그로 만든다.
3. 두 폴더의 `index.ts` 의 `ALL_DEALS` / `ALL_DEALS_EN` 배열에 `closedAt` 내림차순 위치로 import + 등록.
4. dev 서버 새로고침. `/deals/<slug>` 와 `/en/deals/<slug>` 가 즉시 노출됨.

### 본문 인라인 출처 인용

본문 단락 안에 `[1]` 같은 작은 파란 위첨자를 넣고 싶으면 `src/components/deal/Sup.tsx` 의 `<Sup n={1} />` 사용. 현재 운영 상세 페이지 본문은 plain `<p>` 렌더라 호출부에서 변경이 필요함 (참고: `DealPageClient.tsx` 의 `deal.background.map(...)`).

## OG 이미지

`/api/og` 라우트는 Edge runtime 에서 `next/og` `ImageResponse` 로 1200×630 이미지를 동적 생성한다.

- `/api/og` — 사이트 기본
- `/api/og?slug=<slug>` — KO 딜
- `/api/og?slug=<slug>&lang=en` — EN 딜
- 잘못된 slug 는 사이트 기본으로 fallback (404 안 던짐)

폰트는 jsdelivr 에서 Pretendard Bold WOFF 를 1회 fetch + `globalThis` 캐시. 도메인 워터마크는 `NEXT_PUBLIC_SITE_URL` 환경변수에서 host 만 뽑아 표시 (없으면 `dealstory.kr` 폴백).

## 디자인 토큰 요약

색·간격·라운드 등 상세는 `src/app/globals.css` `@theme inline` 블록이 SSOT. 새 화면을 만들 때는 다음 규칙을 따른다:

- 본문 컨테이너 폭: 홈/목록 `max-w-3xl`, 상세 `max-w-2xl`, 헤더 `max-w-6xl`. 좌우 패딩 `px-5`.
- 카드 표준: `rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5`.
- 카드 그리드: `grid grid-cols-1 sm:grid-cols-2 gap-4`.
- 섹션 헤더는 `<SectionTitle>` (`src/components/SectionTitle.tsx`) 재사용.
- **amber 컬러는 금액 강조 전용** (그리고 `restructuring` 카테고리 칩). 다른 곳에 쓰지 말 것.
- 다크 모드는 `dark:` 변형을 반드시 직접 명시 (`globals.css` 의 `!important` 오버라이드는 미리 매핑된 클래스만 커버).

## 환경 변수

선택사항. 없어도 작동.

```env
# OG 이미지 워터마크 도메인. 미설정 시 "dealstory.kr" 폴백.
NEXT_PUBLIC_SITE_URL=https://dealstory.kr
```
