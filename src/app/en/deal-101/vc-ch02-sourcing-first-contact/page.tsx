import type { Metadata } from "next";
import MaVc02Client from "@/app/deal-101/vc-ch02-sourcing-first-contact/MaVc02Client";

export const metadata: Metadata = {
  title: "VC Ch.2 — Sourcing and first contact: the two-sided game begins | Deal Story",
  description: "Four sourcing channels (inbound, network, outbound, accelerator), cold email 1-3% vs warm intro 60% reply rate, founder 5-part cold email template, associate Affinity/DealCloud pipeline (6 stages), 7-field internal screening memo, famous intros (Airbnb, Stripe, WhatsApp, Toss, Coupang).",
  keywords: ["VC Sourcing", "Cold Email", "Warm Intro", "Affinity", "DealCloud", "Y Combinator", "Pitch"],
  alternates: { canonical: "/en/deal-101/vc-ch02-sourcing-first-contact", languages: { ko: "/deal-101/vc-ch02-sourcing-first-contact", en: "/en/deal-101/vc-ch02-sourcing-first-contact", "x-default": "/deal-101/vc-ch02-sourcing-first-contact" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "VC Ch.2 — Sourcing and first contact", description: "Four channels · cold email · associate pipeline · famous intros", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaVc02Client lang="en" />; }
