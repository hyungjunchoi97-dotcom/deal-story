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

// Pretendard Bold — Satori 가 안전하게 파싱하는 WOFF.
// globals.css 에서 쓰는 variable 폰트와 동일 패밀리, weight 700 한 종만 로드.
const FONT_URL =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff/Pretendard-Bold.woff";

// ── 카테고리 → OG 전용 HEX ─────────────────────────────────────
// globals.css `@theme inline` 의 값과 동일.
// (Tailwind 클래스는 ImageResponse 가 해석 못 하므로 별도 매핑이 필요)
const OG_CATEGORY: Record<DealCategory, { bg: string; fg: string }> = {
  ma:            { bg: "#e8f3ff", fg: "#1b64da" },
  activism:      { bg: "#fff1f2", fg: "#be123c" },
  restructuring: { bg: "#fffbeb", fg: "#d97706" },
};

// ── 공통 컬러 토큰 (globals.css 와 동일) ───────────────────────
const COLOR = {
  bg: "#ffffff",
  text: "#191f28",
  textMuted: "#6b7684",
  textSubtle: "#b0b8c1",
  amber: "#f59e0b",   // 금액 강조 전용 — 다른 곳에 쓰지 말 것
  divider: "#e5e8eb",
  brand: "#3182f6",
} as const;

// ── 폰트 1회 캐시 (Edge worker 인스턴스 단위) ───────────────────
type FontCache = { __pretendardBold?: Promise<ArrayBuffer | null> };
async function loadFont(): Promise<ArrayBuffer | null> {
  const g = globalThis as FontCache;
  if (!g.__pretendardBold) {
    g.__pretendardBold = (async () => {
      try {
        const res = await fetch(FONT_URL);
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

  const deal: OgDeal | undefined = slug
    ? lang === "en"
      ? getOgDealBySlugEn(slug)
      : getOgDealBySlug(slug)
    : undefined;

  const fontData = await loadFont();
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

  // ── 사이트 기본 OG (slug 없거나 못 찾음) ──────────────────────
  if (!deal) {
    const tagline =
      lang === "en"
        ? "Archive of landmark M&A, PE, and IPO deals"
        : "M&A · PE · IPO 딜 아카이브";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "80px",
            background: COLOR.bg,
            fontFamily,
          }}
        >
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
                fontSize: 120,
                fontWeight: 700,
                color: COLOR.text,
                letterSpacing: "-0.03em",
              }}
            >
              Deal Story
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 40,
                color: COLOR.textMuted,
              }}
            >
              {tagline}
            </div>
          </div>

          {/* 워터마크 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 24,
              borderTop: `1px solid ${COLOR.divider}`,
              fontSize: 24,
              color: COLOR.textMuted,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 9999,
                  background: COLOR.brand,
                  display: "flex",
                }}
              />
              <span style={{ fontWeight: 700, color: COLOR.text }}>
                Deal Story
              </span>
            </div>
            <span>{siteHost}</span>
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
          padding: "80px",
          background: COLOR.bg,
          fontFamily,
        }}
      >
        {/* 상단 — 카테고리 칩 */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              background: cat.bg,
              color: cat.fg,
              fontSize: 26,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 9999,
              letterSpacing: "0.01em",
            }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* 중앙 — 헤드라인 + 인수자→피인수자 + 금액
            (Satori 는 flex-row 내부 텍스트의 wrap 후 박스 높이 계산이 약해서,
             column flex + gap + 각 텍스트 div 의 width:100% 로 명시) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          {/* 헤드라인 — flexDirection:column 으로 텍스트 wrap 시 박스 높이가
              제대로 늘어나도록 강제 (Satori의 flex-row 텍스트 wrap 박스 높이
              계산 이슈 회피). minHeight 로 한 번 더 안전 마진. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              minHeight: hSize * 1.15,
              fontSize: hSize,
              fontWeight: 700,
              color: COLOR.text,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              wordBreak: "keep-all",
            }}
          >
            {deal.title}
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 16,
              fontSize: 32,
              color: COLOR.text,
            }}
          >
            <span style={{ display: "flex", fontWeight: 700 }}>
              {deal.acquirerLabel}
            </span>
            <span style={{ display: "flex", color: COLOR.textSubtle }}>→</span>
            <span style={{ display: "flex", fontWeight: 700 }}>
              {deal.targetLabel}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "baseline",
              gap: 20,
            }}
          >
            <span
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                color: COLOR.amber,
              }}
            >
              {dealValue}
            </span>
            <span
              style={{
                display: "flex",
                fontSize: 28,
                color: COLOR.textMuted,
              }}
            >
              · {dateDisplay}
            </span>
          </div>
        </div>

        {/* 하단 — 워터마크 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: `1px solid ${COLOR.divider}`,
            fontSize: 24,
            color: COLOR.textMuted,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: COLOR.brand,
                display: "flex",
              }}
            />
            <span style={{ fontWeight: 700, color: COLOR.text }}>
              Deal Story
            </span>
          </div>
          <span>{siteHost}</span>
        </div>
      </div>
    ),
    { ...SIZE, fonts },
  );
}
