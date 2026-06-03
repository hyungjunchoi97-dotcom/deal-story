import type { Metadata } from "next";
import MaVc04Client from "@/app/deal-101/vc-ch04-due-diligence/MaVc04Client";

export const metadata: Metadata = {
  title: "VC Ch.4 — Due diligence: six workstreams over four to six weeks | Deal Story",
  description: "Associate DD coordination: customer DD (7-10 calls), tech DD ($5-15K CTO advisor), financial DD ($10-30K accountant), legal DD ($15-50K), references, market work. Founder data room with eight folders. Ten DD pass/fail signals.",
  keywords: ["VC Due Diligence", "Customer DD", "Tech DD", "Data Room", "Customer Reference"],
  alternates: { canonical: "/en/deal-101/vc-ch04-due-diligence", languages: { ko: "/deal-101/vc-ch04-due-diligence", en: "/en/deal-101/vc-ch04-due-diligence", "x-default": "/deal-101/vc-ch04-due-diligence" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.4 — Due Diligence", description: "Six workstreams · 4-6 week timeline · data room · pass/fail signals", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc04Client lang="en" />; }
