"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthButton from "./AuthButton";
import { detectLang, HEADER_NAV, HEADER_LABELS } from "@/lib/i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const navLinks = HEADER_NAV[lang];
  const t = HEADER_LABELS[lang];
  const homeHref = lang === "en" ? "/en" : "/";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-700/60">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 h-14">
          {/* 로고 */}
          <Link
            href={homeHref}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight"
          >
            Deal Story
          </Link>

          {/* 데스크탑 네비 */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600 dark:text-gray-400">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-gray-900 dark:text-gray-100 font-semibold"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" aria-hidden />
            <LanguageSwitcher />
            <DarkModeToggle />
            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" aria-hidden />
            <AuthButton />
          </nav>

          {/* 모바일: 다크모드 + 햄버거 */}
          <div className="md:hidden flex items-center gap-1">
            <DarkModeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={t.menu}
            >
              <span
                className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 메뉴 */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30" />
          <nav
            className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200/60 dark:border-gray-700/60 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    pathname === href || pathname.startsWith(href + "/")
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* 언어 스위처 — 메뉴와 시각적으로 분리해서 작은 컴팩트 토글로 노출 */}
              <div className="mt-3 pt-3 px-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {lang === "en" ? "Language" : "언어"}
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
