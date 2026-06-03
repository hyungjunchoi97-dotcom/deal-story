import type { Metadata } from "next";
import MaVc01Client from "@/app/deal-101/vc-ch01-industry-stages/MaVc01Client";

export const metadata: Metadata = {
  title: "VC Ch.1 — VC industry structure, seed-to-growth stages, and the associate's week | Deal Story",
  description: "Six-stage valuation and ARR thresholds (pre-seed through Series D+), the VC associate's 50-hour week, US top 10 (a16z, Sequoia, Benchmark, Accel, Founders Fund, USV, Greylock, Lightspeed, Tiger, Insight), Korean top 8 (Altos, KIP, KB, KakaoVentures, IMM, BonAngels, Mirae, SBI), seven KR vs US differences.",
  keywords: ["VC", "Venture Capital", "Sequoia", "a16z", "Benchmark", "Altos Ventures", "Associate", "Seed", "Series A"],
  alternates: { canonical: "/en/deal-101/vc-ch01-industry-stages", languages: { ko: "/deal-101/vc-ch01-industry-stages", en: "/en/deal-101/vc-ch01-industry-stages", "x-default": "/deal-101/vc-ch01-industry-stages" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.1 — VC industry, stages, and the associate's week", description: "Stage definitions · associate's week · US top 10 + Korean top 8 atlas", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc01Client lang="en" />; }
