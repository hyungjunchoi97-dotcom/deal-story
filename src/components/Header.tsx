"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { detectLang, HEADER_NAV, HEADER_LABELS } from "@/lib/i18n";

const STORY_HUB_BASE =
  process.env.NEXT_PUBLIC_STORY_HUB_URL || "https://storyhub.kr";

const CROSS_NAV_LINKS = [
  { href: `${STORY_HUB_BASE}/market`, label: "Market Story" },
  { href: STORY_HUB_BASE, label: "Hub" },
];

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
            <Image
              src="/logo-eagle.png"
              alt="Deal Story"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
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
            {CROSS_NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 text-xs text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-2.5 h-2.5 opacity-70"
                  aria-hidden
                >
                  <path d="M4.5 2H2.5A.5.5 0 0 0 2 2.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7.5" />
                  <path d="M7.5 2H10v2.5" />
                  <line x1="10" y1="2" x2="5.5" y2="6.5" />
                </svg>
              </a>
            ))}
            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" aria-hidden />
            <LanguageSwitcher />
            <DarkModeToggle />
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
              <div className="my-1 h-px bg-gray-100 dark:bg-gray-800" />
              {CROSS_NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
                >
                  {label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 opacity-70"
                    aria-hidden
                  >
                    <path d="M4.5 2H2.5A.5.5 0 0 0 2 2.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7.5" />
                    <path d="M7.5 2H10v2.5" />
                    <line x1="10" y1="2" x2="5.5" y2="6.5" />
                  </svg>
                </a>
              ))}
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
