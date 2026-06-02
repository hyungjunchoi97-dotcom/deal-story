import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const PROTECTED_PREFIXES = ["/deal-101/", "/market-101/", "/en/deal-101/", "/en/market-101/"];

function isProtected(pathname: string) {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);

  if (isProtected(pathname)) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => req.cookies.getAll(),
          setAll: () => {},
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      const gateUrl = req.nextUrl.clone();
      gateUrl.pathname = pathname.startsWith("/en/") ? "/en/auth/gate" : "/auth/gate";
      gateUrl.search = "";
      gateUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(gateUrl);
    }
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
