/**
 * OG 이미지 동적 생성 라우트.
 *
 *  GET /api/og                                  → 사이트 기본 OG
 *  GET /api/og?slug=microsoft-activision        → KO 딜 OG (lang 기본값 ko)
 *  GET /api/og?slug=microsoft-activision&lang=en→ EN 딜 OG
 *
 * 잘못된 slug 면 사이트 기본 OG 로 fallback (404 안 던짐 — 공유 카드가 깨지면 안 됨).
 *
 * Edge runtime — `next/og` ImageResponse 사용, 외부 라이브러리 추가 없음.
 * 폰트는 Edge worker 인스턴스 단위로 1회 fetch 후 globalThis 캐시.
 */
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getOgDealBySlug } from "@/data/og-data";
import { getOgDealBySlugEn } from "@/data/en/og-data";
import { getCategoryLabel, type Lang } from "@/lib/i18n";
import type { DealCategory } from "@/lib/deal-data";
import type { OgDeal } from "@/data/og-data";

// Edge runtime — OG 전용 경량 데이터(og-data.ts)만 번들링해 1 MB 이하 유지.
// 전체 DealData 대신 OgDeal(7개 필드)만 사용하므로 딜 수가 늘어도 번들 크기 안전.
export const runtime = "edge";

const SIZE = { width: 1200, height: 630 } as const;

// ── 카테고리 → OG 전용 HEX ─────────────────────────────────────
// globals.css `@theme inline` 의 값과 동일.
// (Tailwind 클래스는 ImageResponse 가 해석 못 하므로 별도 매핑이 필요)
const OG_CATEGORY: Record<DealCategory, { bg: string; fg: string }> = {
  ma:            { bg: "#e8f3ff", fg: "#1b64da" },
  activism:      { bg: "#fff1f2", fg: "#be123c" },
  restructuring: { bg: "#fffbeb", fg: "#d97706" },
  control:       { bg: "#f5f3ff", fg: "#7c3aed" },
};

// ── 공통 컬러 토큰 (globals.css 와 동일) ───────────────────────
//  · OG 카드는 단일톤 + 작은 액센트로 "에디토리얼" 톤을 유지한다.
//  · brand 컬러는 와이어 라인/도트에만 매우 절제해서 사용.
const COLOR = {
  bg: "#fafaf9",          // 약간의 따뜻한 오프화이트 (sophistication)
  text: "#0f172a",        // slate-900 — 진하고 명료
  textStrong: "#020617",  // 거의 검정 — 헤드라인
  textMuted: "#64748b",   // slate-500
  textSubtle: "#94a3b8",  // slate-400
  amber: "#d97706",       // amber-600 — 금액 강조 (조금 더 차분한 톤)
  divider: "#e2e8f0",     // slate-200
  brand: "#0f172a",       // 브랜드 도트도 슬레이트로 통일
} as const;

// ── 폰트 로드 — public/fonts/ 로컬 파일 사용 ────────────────────
// CDN fetch 대신 번들 내 정적 파일을 읽어 Edge worker 콜드 스타트 지연 제거.
// Edge runtime 에서 fetch("/_next/static/...") 또는 절대 URL 로 로컬 에셋 접근.
type FontCache = { __pretendardBold?: Promise<ArrayBuffer | null> };
async function loadFont(req: Request): Promise<ArrayBuffer | null> {
  const g = globalThis as FontCache;
  if (!g.__pretendardBold) {
    g.__pretendardBold = (async () => {
      try {
        const base = new URL(req.url).origin;
        const res = await fetch(`${base}/fonts/Pretendard-Bold.woff`);
        if (!res.ok) return null;
        return await res.arrayBuffer();
      } catch {
        return null;
      }
    })();
  }
  return g.__pretendardBold;
}

function getSiteHost(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) return "dealstory.kr";
  try {
    return new URL(url).host;
  } catch {
    return "dealstory.kr";
  }
}

// 헤드라인 폰트 사이즈 — lang 별로 글자당 폭 차이를 반영.
// 핵심 목표는 1줄에 들어가도록 보수적으로 잡아 Satori 의 flex 텍스트 wrap 박스
// 높이 계산 이슈를 회피하는 것 (wrap 되면 다음 요소와 겹침).
function headlineSize(text: string, lang: Lang): number {
  const n = text.length;
  if (lang === "ko") {
    if (n <= 13) return 72;
    if (n <= 18) return 56;
    if (n <= 24) return 44;
    return 38;
  }
  // en: 글자 폭이 ko 보다 좁아 더 큰 사이즈 허용
  if (n <= 20) return 80;
  if (n <= 30) return 64;
  if (n <= 40) return 50;
  return 42;
}

// ── 라우트 핸들러 ────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? undefined;
  const lang: Lang = searchParams.get("lang") === "en" ? "en" : "ko";
  // 노트(Notes)용 범용 OG — 자유 텍스트 제목/키커를 받아 제목 기반 카드 생성.
  const ogTitle = searchParams.get("title") ?? undefined;
  const ogKicker = searchParams.get("kicker") ?? undefined;

  const deal: OgDeal | undefined = slug
    ? lang === "en"
      ? getOgDealBySlugEn(slug)
      : getOgDealBySlug(slug)
    : undefined;

  const fontData = await loadFont(req);
  const fonts = fontData
    ? [
        {
          name: "Pretendard",
          data: fontData,
          weight: 700 as const,
          style: "normal" as const,
        },
      ]
    : undefined;

  const fontFamily = fontData
    ? "'Pretendard', system-ui, -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif"
    : "system-ui, -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif";

  const siteHost = getSiteHost();

  // ── 노트 OG (title 파라미터 있고 deal 아님) ───────────────────
  //  글 제목을 헤드라인으로 쓰는 에디토리얼 카드. 카테고리는 키커.
  if (!deal && ogTitle) {
    const kicker = ogKicker ?? (lang === "en" ? "Notes" : "노트");
    const hSize = headlineSize(ogTitle, lang);
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "72px 88px",
            background: COLOR.bg,
            fontFamily,
          }}
        >
          {/* 상단 — 브랜드 룰 + 카테고리 키커 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 20,
              borderBottom: `1px solid ${COLOR.divider}`,
              fontSize: 22,
              color: COLOR.textMuted,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 8, height: 8, borderRadius: 9999, background: COLOR.amber, display: "flex" }} />
              <span>Deal Story</span>
            </div>
            <span>{kicker}</span>
          </div>

          {/* 중앙 — 글 제목 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontSize: hSize,
                fontWeight: 700,
                color: COLOR.textStrong,
                letterSpacing: "-0.03em",
                lineHeight: 1.14,
                wordBreak: "keep-all",
              }}
            >
              {ogTitle}
            </div>
          </div>

          {/* 하단 — 워터마크 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 20,
              borderTop: `1px solid ${COLOR.divider}`,
              fontSize: 22,
              color: COLOR.textMuted,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span>{lang === "en" ? "Read the note" : "노트 읽기"}</span>
            <span style={{ color: COLOR.textStrong }}>{siteHost}</span>
          </div>
        </div>
      ),
      { ...SIZE, fonts },
    );
  }

  // ── 사이트 기본 OG (slug 없거나 못 찾음) ──────────────────────
  //  에디토리얼 매거진 커버 스타일: 얇은 상단 룰 + 큰 디스플레이 워드마크 +
  //  미니멀한 카운터형 메타데이터.
  if (!deal) {
    const tagline =
      lang === "en"
        ? "Landmark deals, dissected."
        : "랜드마크 딜, 해부.";
    const subtagline =
      lang === "en"
        ? "An archive of M&A, PE, and capital markets."
        : "M&A · PE · 자본시장 딜 아카이브";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "72px 88px",
            background: COLOR.bg,
            fontFamily,
          }}
        >
          {/* 상단 얇은 룰 + 카운터형 메타 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 20,
              borderBottom: `1px solid ${COLOR.divider}`,
              fontSize: 22,
              color: COLOR.textMuted,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 9999,
                  background: COLOR.amber,
                  display: "flex",
                }}
              />
              <span>Deal Story</span>
            </div>
            <span>Vol. 01</span>
          </div>

          {/* 메인 헤드라인 영역 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 124,
                fontWeight: 700,
                color: COLOR.textStrong,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {tagline}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
                fontSize: 36,
                color: COLOR.textMuted,
                letterSpacing: "-0.01em",
              }}
            >
              {subtagline}
            </div>
          </div>

          {/* 하단 워터마크 — 미니멀 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 20,
              borderTop: `1px solid ${COLOR.divider}`,
              fontSize: 22,
              color: COLOR.textMuted,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span>{lang === "en" ? "Read the archive" : "딜 아카이브 보기"}</span>
            <span style={{ color: COLOR.textStrong }}>{siteHost}</span>
          </div>
        </div>
      ),
      { ...SIZE, fonts },
    );
  }

  // ── 딜별 OG ──────────────────────────────────────────────────
  const cat = OG_CATEGORY[deal.category];
  const categoryLabel = getCategoryLabel(deal.category, lang);
  // ImageResponse 는 단일 폰트만 사용 → Pretendard Bold 가 갖지 않은 글리프
  // (예: 원화 ₩ U+20A9 등)는 tofu 로 보임. KRW 텍스트로 안전 치환.
  const dealValue = deal.dealValueDisplay
    .split("(")[0]
    .trim()
    .replace(/[₩￦]/g, "KRW ");
  const dateDisplay = deal.closedDisplay ?? deal.announcedDisplay;
  const hSize = headlineSize(deal.title, lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          background: COLOR.bg,
          fontFamily,
        }}
      >
        {/* 상단 — 브랜드 룰 + 카테고리 칩 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottom: `1px solid ${COLOR.divider}`,
            fontSize: 22,
            color: COLOR.textMuted,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: COLOR.amber,
                display: "flex",
              }}
            />
            <span>Deal Story</span>
          </div>
          <div
            style={{
              display: "flex",
              background: cat.bg,
              color: cat.fg,
              fontSize: 20,
              fontWeight: 700,
              padding: "8px 18px",
              borderRadius: 9999,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* 중앙 — 헤드라인 + 거래 라인 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {/* 헤드라인 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              minHeight: hSize * 1.15,
              fontSize: hSize,
              fontWeight: 700,
              color: COLOR.textStrong,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              wordBreak: "keep-all",
            }}
          >
            {deal.title}
          </div>

          {/* 인수자 → 피인수자 (얇은 슬레이트 톤) */}
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 18,
              fontSize: 28,
              color: COLOR.textMuted,
              letterSpacing: "-0.005em",
            }}
          >
            <span style={{ display: "flex", fontWeight: 700, color: COLOR.text }}>
              {deal.acquirerLabel}
            </span>
            <span style={{ display: "flex", color: COLOR.textSubtle, fontSize: 24 }}>
              ──→
            </span>
            <span style={{ display: "flex", fontWeight: 700, color: COLOR.text }}>
              {deal.targetLabel}
            </span>
          </div>
        </div>

        {/* 하단 — 금액(앰버) + 일자 + 호스트 (한 줄 푸터) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 22,
            borderTop: `1px solid ${COLOR.divider}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 18,
            }}
          >
            <span
              style={{
                display: "flex",
                fontSize: 46,
                fontWeight: 700,
                color: COLOR.amber,
                letterSpacing: "-0.02em",
              }}
            >
              {dealValue}
            </span>
            <span
              style={{
                display: "flex",
                fontSize: 22,
                color: COLOR.textMuted,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {dateDisplay}
            </span>
          </div>
          <span
            style={{
              display: "flex",
              fontSize: 22,
              color: COLOR.textStrong,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {siteHost}
          </span>
        </div>
      </div>
    ),
    { ...SIZE, fonts },
  );
}
