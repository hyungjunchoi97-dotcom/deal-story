"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FOOTER_LABELS = {
  ko: { about: "소개", privacy: "개인정보처리방침", terms: "이용약관" },
  en: { about: "About", privacy: "Privacy Policy", terms: "Terms of Use" },
} as const;

export default function Footer() {
  const pathname = usePathname() ?? "";
  const lang: "ko" | "en" = pathname.startsWith("/en") ? "en" : "ko";
  const t = FOOTER_LABELS[lang];
  const prefix = lang === "en" ? "/en" : "";

  return (
    <footer className="border-t border-gray-200/60 dark:border-gray-700/60 mt-auto">
      <div className="mx-auto max-w-3xl px-5 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-400 dark:text-gray-500">

        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-500 dark:text-gray-400">Deal Story</span>
          <Link href={`${prefix}/about`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.about}</Link>
          <Link href={`${prefix}/privacy`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.privacy}</Link>
          <Link href={`${prefix}/terms`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.terms}</Link>
        </div>

        <span>© 2026 Deal Story</span>

      </div>
    </footer>
  );
}
