import { NextResponse, type NextRequest } from "next/server";

/**
 * 모든 페이지 요청에 `x-pathname` 헤더를 주입한다.
 *
 *  - 루트 `app/layout.tsx` 는 server component 라서 `usePathname()` 을 못 쓰고,
 *    `headers()` 로만 현재 경로를 알 수 있다.
 *  - 이 헤더를 읽어 `<html lang>` 을 KO/EN 으로 분기한다.
 *  - 라우팅 자체에는 영향을 주지 않는다 (`NextResponse.next()` 패스스루).
 */
export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", req.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // _next, api, 확장자 있는 정적 자원(.svg, .png 등) 제외
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
