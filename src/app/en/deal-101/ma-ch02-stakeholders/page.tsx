import type { Metadata } from "next";
import MaCh02StakeholdersClient from "@/app/deal-101/ma-ch02-stakeholders/MaCh02StakeholdersClient";

export const metadata: Metadata = {
  title: "M&A Ch.2 — The Stakeholder Map (who does what) | Deal Story",
  description:
    "An average deal runs through ~8 firms. IB Lead · accounting FAS · consultants · law firm · lenders + CEO/CFO/board. Each role's deliverable, timing, interface with IB, and what breaks if IB drops the ball.",
  keywords: ["M&A stakeholders", "IB Lead", "Big 4 FAS", "MBB CDD", "law firm LDD", "M&A advisor"],
  alternates: {
    canonical: "/en/deal-101/ma-ch02-stakeholders",
    languages: {
      ko: "/deal-101/ma-ch02-stakeholders",
      en: "/en/deal-101/ma-ch02-stakeholders",
      "x-default": "/deal-101/ma-ch02-stakeholders",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "M&A Ch.2 — The Stakeholder Map",
    description: "IB · accounting FAS · consultants · law firm · lenders + client. Who builds what, when each shows up",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaCh02StakeholdersClient lang="en" />;
}
