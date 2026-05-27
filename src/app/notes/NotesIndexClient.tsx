"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NoteData, NoteCategory } from "@/data/notes";
import { NOTE_CATEGORY_META } from "@/data/notes";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE, delay } },
});

// ── Note card ──────────────────────────────────────────────────────────────────
function NoteCard({
  note,
  lang,
  index,
}: {
  note: NoteData;
  lang: Lang;
  index: number;
}) {
  const meta = NOTE_CATEGORY_META[note.category];
  const href = lang === "en" ? `/en/notes/${note.slug}` : `/notes/${note.slug}`;
  const title = lang === "en" ? (note.titleEn ?? note.title) : note.title;
  const description = lang === "en" ? (note.descriptionEn ?? note.description) : note.description;
  const categoryLabel = lang === "en" ? meta.labelEn : meta.label;
  const keyPoint = lang === "en"
    ? (note.keyPointsEn?.[0] ?? note.keyPoints[0])
    : note.keyPoints[0];

  return (
    <motion.div
      variants={fadeUp(index * 0.06)}
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} className="group block">
        <article
          className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md dark:hover:shadow-gray-900/40 transition-all duration-200"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-2.5 py-1 shrink-0"
              style={{
                background: meta.accent + "18",
                color: meta.accent,
                border: `1px solid ${meta.accent}33`,
              }}
            >
              <span aria-hidden="true">{meta.icon}</span>
              {categoryLabel}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500 shrink-0">
              <span>{note.date}</span>
              <span>·</span>
              <span>{note.readingMinutes}{lang === "en" ? "m" : "분"}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* First key point teaser */}
          {keyPoint && (
            <div
              className="rounded-lg px-3.5 py-2.5 text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2"
              style={{ background: meta.accent + "0d" }}
            >
              <span
                className="font-bold text-[10px] uppercase tracking-wide mr-1.5"
                style={{ color: meta.accent }}
              >
                {lang === "en" ? "Key" : "핵심"}
              </span>
              {keyPoint}
            </div>
          )}

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {note.references.length}{lang === "en" ? " sources" : "개 출처"}
            </span>
            <span
              className="text-xs font-medium flex items-center gap-1 transition-colors group-hover:gap-2"
              style={{ color: meta.accent }}
            >
              {lang === "en" ? "Read" : "읽기"}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function NotesIndexClient({
  notes,
  lang = "ko",
}: {
  notes: NoteData[];
  lang?: Lang;
}) {
  const [activeCategory, setActiveCategory] = useState<NoteCategory | "all">("all");

  // Derive unique categories from notes
  const presentCategories = Array.from(new Set(notes.map((n) => n.category)));

  const filtered =
    activeCategory === "all"
      ? notes
      : notes.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* ── Category filter ─────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
            activeCategory === "all"
              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
              : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
          }`}
        >
          {lang === "en" ? "All" : "전체"} ({notes.length})
        </button>

        {presentCategories.map((cat) => {
          const meta = NOTE_CATEGORY_META[cat];
          const label = lang === "en" ? meta.labelEn : meta.label;
          const isActive = activeCategory === cat;
          const count = notes.filter((n) => n.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all"
              style={
                isActive
                  ? { background: meta.accent, color: "#fff", borderColor: meta.accent }
                  : {}
              }
            >
              <span className={!isActive ? "text-gray-500 dark:text-gray-400" : ""}>
                {meta.icon} {label} ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Notes list ──────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 gap-5"
        >
          {filtered.length === 0 ? (
            <motion.p
              variants={fadeUp()}
              className="text-sm text-gray-400 dark:text-gray-500 py-10 text-center"
            >
              {lang === "en" ? "No notes in this category yet." : "아직 이 카테고리의 노트가 없습니다."}
            </motion.p>
          ) : (
            filtered.map((note, i) => (
              <NoteCard key={note.slug} note={note} lang={lang} index={i} />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
