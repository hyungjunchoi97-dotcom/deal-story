/**
 * 사이트 기본 URL — 모든 canonical/hreflang/JSON-LD에서 이 값 사용
 *
 * 우선순위:
 *  1. NEXT_PUBLIC_SITE_URL  (Vercel 환경변수에서 직접 지정)
 *  2. VERCEL_PROJECT_PRODUCTION_URL  (Vercel이 자동 주입하는 프로덕션 도메인)
 *  3. "https://dealstory.kr"  (최종 의도 도메인, 도메인 구입 전까지 폴백)
 *
 * Vercel 대시보드 → Settings → Environment Variables 에서
 * NEXT_PUBLIC_SITE_URL=https://<your-vercel-url>.vercel.app 설정하면
 * 도메인 없이도 올바른 canonical이 생성됩니다.
 */
const raw =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://dealstory.kr");

/** 트레일링 슬래시 없는 기본 URL. e.g. "https://dealstory.kr" */
export const SITE_URL = raw.replace(/\/$/, "");
