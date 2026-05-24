import type { Metadata } from "next";
import { headers } from "next/headers";
import { detectLang } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Deal Story - 기업 딜 아카이브", template: "%s | Deal Story" },
  description: "M&A, PE/VC 투자, IPO, 매각·분리까지. 기업의 딜 순간을 스토리로 아카이빙합니다.",
  metadataBase: new URL("https://dealstory.kr"),
  // 사이트 기본 OG — 딜 상세 페이지는 자체 generateMetadata 에서 오버라이드
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
