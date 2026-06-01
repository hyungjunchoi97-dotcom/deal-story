import type { Metadata } from "next";
import MaMod02Client from "@/app/deal-101/mod-ch02-three-statement/MaMod02Client";

export const metadata: Metadata = {
  title: "Modelling Ch.2 — The 3-statement model, how IS / BS / CFS connect | Deal Story",
  description:
    "Six core links between IS, BS, and CFS, five causes when the balance sheet doesn't balance, and how to resolve the interest × debt × cash circular reference via iterative calculation.",
  keywords: ["Modelling", "3-Statement Model", "Income Statement", "Balance Sheet", "Cash Flow Statement", "Circular Reference", "Iterative Calculation"],
  alternates: {
    canonical: "/en/deal-101/mod-ch02-three-statement",
    languages: {
      ko: "/deal-101/mod-ch02-three-statement",
      en: "/en/deal-101/mod-ch02-three-statement",
      "x-default": "/deal-101/mod-ch02-three-statement",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.2 — The 3-statement model",
    description: "Six links, five BS debug causes, the circular reference, the integrated mini-sheet",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod02Client lang="en" />;
}
