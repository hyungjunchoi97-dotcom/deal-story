"use client";

/**
 * ThinkerQuote — 시리즈 사상가 인용 박스
 *
 * 8명의 사상가(Zeihan, Tooze, Brands, Ferguson, Milanović, Dalio, Mead, Karaganov)
 * 등을 인용할 때 사용. 각 사상가별 색·렌즈 표기.
 */

import { motion } from "framer-motion";

type ThinkerKey =
  | "zeihan"
  | "tooze"
  | "brands"
  | "ferguson"
  | "milanovic"
  | "dalio"
  | "mead"
  | "karaganov"
  | "other";

type ThinkerQuoteProps = {
  thinker: ThinkerKey | string;
  quote: string;
  quoteEn?: string;
  source?: string;       // e.g., "Foreign Affairs, Mar 2024"
  year?: string;
  url?: string;
  lang?: "ko" | "en";
};

const THINKER_META: Record<
  ThinkerKey,
  {
    name: string;
    lens: { ko: string; en: string };
    color: string;
    bg: string;
    border: string;
  }
> = {
  zeihan: {
    name: "Peter Zeihan",
    lens: { ko: "지정학·인구·에너지 결정론", en: "Geopolitics · demographics · energy" },
    color: "#dc2626",
    bg: "bg-red-50 dark:bg-red-900/15",
    border: "border-red-300 dark:border-red-700",
  },
  tooze: {
    name: "Adam Tooze",
    lens: { ko: "역사·금융·기후 통합", en: "History · finance · climate" },
    color: "#0ea5e9",
    bg: "bg-sky-50 dark:bg-sky-900/15",
    border: "border-sky-300 dark:border-sky-700",
  },
  brands: {
    name: "Hal Brands",
    lens: { ko: "제국 사이클·대전략", en: "Imperial cycles · grand strategy" },
    color: "#8b5cf6",
    bg: "bg-violet-50 dark:bg-violet-900/15",
    border: "border-violet-300 dark:border-violet-700",
  },
  ferguson: {
    name: "Niall Ferguson",
    lens: { ko: "역사 패턴·금융사", en: "Historical patterns · financial history" },
    color: "#f59e0b",
    bg: "bg-amber-50 dark:bg-amber-900/15",
    border: "border-amber-300 dark:border-amber-700",
  },
  milanovic: {
    name: "Branko Milanović",
    lens: { ko: "글로벌 불평등·중국", en: "Global inequality · China" },
    color: "#10b981",
    bg: "bg-emerald-50 dark:bg-emerald-900/15",
    border: "border-emerald-300 dark:border-emerald-700",
  },
  dalio: {
    name: "Ray Dalio",
    lens: { ko: "장기 부채·제국 흥망", en: "Long-term debt · imperial cycles" },
    color: "#475569",
    bg: "bg-slate-50 dark:bg-slate-900/15",
    border: "border-slate-300 dark:border-slate-700",
  },
  mead: {
    name: "Walter Russell Mead",
    lens: { ko: "외교사·잭소니언", en: "Diplomatic history · Jacksonianism" },
    color: "#a855f7",
    bg: "bg-purple-50 dark:bg-purple-900/15",
    border: "border-purple-300 dark:border-purple-700",
  },
  karaganov: {
    name: "Sergei Karaganov",
    lens: { ko: "러시아의 反서구 시각", en: "Russia's anti-Western view" },
    color: "#7f1d1d",
    bg: "bg-red-100 dark:bg-red-950/30",
    border: "border-red-400 dark:border-red-800",
  },
  other: {
    name: "—",
    lens: { ko: "", en: "" },
    color: "#6b7280",
    bg: "bg-gray-50 dark:bg-gray-900/15",
    border: "border-gray-300 dark:border-gray-700",
  },
};

export default function ThinkerQuote({
  thinker,
  quote,
  quoteEn,
  source,
  year,
  url,
  lang = "ko",
}: ThinkerQuoteProps) {
  const ko = lang === "ko";
  const m = THINKER_META[thinker as ThinkerKey] ?? {
    ...THINKER_META.other,
    name: typeof thinker === "string" ? thinker : "—",
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative rounded-2xl border-l-[3px] ${m.bg} px-6 py-7 sm:px-8 sm:py-8 my-8`}
      style={{ borderLeftColor: m.color }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-3 right-4 text-7xl font-serif leading-none opacity-15 select-none pointer-events-none"
        style={{ color: m.color }}
      >
        “
      </div>

      {/* Quote body */}
      <blockquote className="relative">
        <p className="text-[16px] sm:text-[17px] font-medium text-gray-800 dark:text-gray-200 leading-relaxed italic">
          “{ko ? quote : (quoteEn ?? quote)}”
        </p>
      </blockquote>

      {/* Attribution */}
      <figcaption className="mt-5 flex items-start gap-3">
        <div
          className="w-1 self-stretch rounded-full"
          style={{ background: m.color }}
        />
        <div className="flex-1">
          <p
            className="text-[13px] font-bold tracking-tight"
            style={{ color: m.color }}
          >
            — {m.name}
          </p>
          {m.lens.ko && (
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
              {ko ? m.lens.ko : m.lens.en}
            </p>
          )}
          {(source || year) && (
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5 font-mono">
              {[source, year].filter(Boolean).join(" · ")}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 underline decoration-dotted hover:opacity-70"
                  style={{ color: m.color }}
                >
                  ↗
                </a>
              )}
            </p>
          )}
        </div>
      </figcaption>
    </motion.figure>
  );
}
