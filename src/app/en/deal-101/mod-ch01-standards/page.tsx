import type { Metadata } from "next";
import MaMod01Client from "@/app/deal-101/mod-ch01-standards/MaMod01Client";

export const metadata: Metadata = {
  title: "Modelling Ch.1 — Modeling standards (color · sign · sheet structure · audit) | Deal Story",
  description:
    "The four rules every IB and PE shares: color coding, sign convention, a 10-sheet standard layout, and audit checks. Good models drive good decisions.",
  keywords: ["Modelling", "Financial Model", "Color Coding", "Sign Convention", "Sheet Structure", "Audit Checks", "Excel"],
  alternates: {
    canonical: "/en/deal-101/mod-ch01-standards",
    languages: {
      ko: "/deal-101/mod-ch01-standards",
      en: "/en/deal-101/mod-ch01-standards",
      "x-default": "/deal-101/mod-ch01-standards",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Modelling Ch.1 — Modeling standards",
    description: "Color coding, sign convention, sheet structure, audit checks — the shared alphabet",
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() {
  return <MaMod01Client lang="en" />;
}
