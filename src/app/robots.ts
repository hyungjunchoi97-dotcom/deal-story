/**
 * robots.txt — generated at /robots.txt
 * Tells crawlers: allow everything, here is the sitemap.
 */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dealstory.kr/sitemap.xml",
    host: "https://dealstory.kr",
  };
}
