import type { Metadata } from "next";
import MaCh05OrchestrationCaseClient from "@/app/deal-101/ma-ch05-orchestration-case/MaCh05OrchestrationCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.5 — IB Lead Orchestration (Rohatyn × NYC + Bayer × Monsanto) | Deal Story",
  description:
    "IB's real job isn't the work — it's making sure the right people do the work. Felix Rohatyn × NYC bailout (1975) is the orchestration archetype. Bayer × Monsanto (2016) shows operationally clean orchestration with broken strategic synthesis → $60B value destruction.",
  keywords: ["IB Orchestration", "Felix Rohatyn", "Lazard", "NYC bailout", "MAC", "Bayer Monsanto", "Roundup", "Synthesis"],
  alternates: {
    canonical: "/en/deal-101/ma-ch05-orchestration-case",
    languages: {
      ko: "/deal-101/ma-ch05-orchestration-case",
      en: "/en/deal-101/ma-ch05-orchestration-case",
      "x-default": "/deal-101/ma-ch05-orchestration-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.5 — IB Lead Orchestration",
    description: "Rohatyn × NYC bailout archetype + Bayer × Monsanto synthesis breakdown",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh05OrchestrationCaseClient lang="en" />;
}
