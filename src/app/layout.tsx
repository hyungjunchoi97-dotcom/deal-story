import type { Metadata } from "next";
import { headers } from "next/headers";
import { detectLang } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const BASE = SITE_URL;

export const metadata: Metadata = {
  title: { default: "Deal Story - 기업 딜 아카이브", template: "%s | Deal Story" },
  description: "M&A, PE/VC 투자, IPO, 매각·분리까지. 기업의 딜 순간을 스토리로 아카이빙합니다.",
  metadataBase: new URL(BASE),
  // ── hreflang / canonical ──────────────────────────────────
  // 루트 페이지 KO ↔ EN 관계를 Google에 명시.
  // 개별 페이지는 각 page.tsx의 metadata.alternates 에서 오버라이드.
  alternates: {
    canonical: "/",
    languages: {
      ko: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    // 기본 로케일 KO — EN 페이지는 각 page.tsx의 openGraph.locale에서 오버라이드
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
  // ── Verification (Google Search Console용 — 필요 시 채워넣기) ──
  // verification: { google: "YOUR_GSC_TOKEN" },
};

// ── WebSite JSON-LD ───────────────────────────────────────────
// Google이 사이트 이름과 검색 액션을 이해하도록 도움.
const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Deal Story",
  url: BASE,
  description:
    "M&A, PE/VC, IPO 딜 아카이브 — 실제 딜 사례로 배우는 금융 개념. Archive of landmark M&A, PE, and IPO deals explained in context.",
  inLanguage: ["ko", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/deals?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // 미들웨어가 주입한 x-pathname 헤더를 읽어 lang 분기.
  // /en 또는 /en/* 이면 "en", 그 외 "ko".
  const h = await headers();
  const lang = detectLang(h.get("x-pathname"));

  return (
    <html lang={lang} className="h-full antialiased">
      <head>
        {/* 다크모드 깜빡임 방지 — hydration 전에 실행 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
