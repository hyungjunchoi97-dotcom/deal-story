"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NoteData, NoteCategory, NoteSeriesId } from "@/data/notes";
import { NOTE_CATEGORY_META, NOTE_SERIES_META } from "@/data/notes";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE, delay } },
});

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.28, ease: EASE, delay: i * 0.04 },
  }),
};

// 시리즈 순서 마커 (①②③④...)
const SERIES_MARKERS = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

// ── Single Note Card (시리즈에 속하지 않은 노트용) ───────────────────────────
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

// ── Series Row (시리즈 폴더 안의 노트 한 행) ────────────────────────────────
function SeriesNoteRow({
  note,
  index,
  accent,
  lang,
}: {
  note: NoteData;
  index: number;
  accent: string;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const href = ko ? `/notes/${note.slug}` : `/en/notes/${note.slug}`;
  const title = ko ? note.title : (note.titleEn ?? note.title);
  const description = ko ? note.description : (note.descriptionEn ?? note.description);
  const orderMarker = note.seriesOrder
    ? SERIES_MARKERS[note.seriesOrder - 1] ?? `${note.seriesOrder}`
    : "·";

  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={href}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          {/* 순서 배지 */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-black text-white flex-shrink-0 mt-0.5"
            style={{ background: accent }}
          >
            {orderMarker}
          </div>

          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                style={{ background: accent + "18", color: accent }}
              >
                {ko ? `${note.seriesOrder}편` : `Part ${note.seriesOrder}`}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                {note.date} · {note.readingMinutes}{ko ? "분" : " min"}
              </span>
            </div>
            <p
              className="text-[14px] font-semibold leading-snug group-hover:underline transition-colors line-clamp-1"
              style={{ color: accent }}
            >
              {title}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-1 leading-relaxed">
              {description}
            </p>
          </div>

          {/* 읽기 액션 */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0 pt-0.5">
            <span
              className="text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ color: accent }}
            >
              {ko ? "읽기 →" : "Read →"}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {note.references.length}{ko ? "개 출처" : " src"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Series Folder (시리즈 아코디언) ─────────────────────────────────────────
function SeriesFolder({
  seriesId,
  notes,
  defaultOpen,
  lang,
}: {
  seriesId: NoteSeriesId;
  notes: NoteData[];
  defaultOpen: boolean;
  lang: Lang;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ko = lang === "ko";
  const meta = NOTE_SERIES_META[seriesId];
  const catMeta = NOTE_CATEGORY_META[meta.category];

  // seriesOrder 오름차순 정렬
  const sorted = [...notes].sort((a, b) => (a.seriesOrder ?? 99) - (b.seriesOrder ?? 99));
  const published = sorted.filter((n) => n.status === "published");

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open
          ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
          : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
      }`}
    >
      {/* ── 폴더 헤더 ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div
          className="w-1 self-stretch rounded-full flex-shrink-0"
          style={{ background: meta.accent }}
        />

        {/* 아이콘 배지 */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0 transition-all duration-200"
          style={{ background: meta.accent + "18" }}
        >
          <span aria-hidden="true">{meta.icon}</span>
        </div>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {ko ? meta.label : meta.labelEn}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold"
              style={{ background: meta.accent + "18", color: meta.accent }}
            >
              {ko ? "시리즈" : "Series"}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold"
              style={{ background: catMeta.accent + "18", color: catMeta.accent }}
            >
              {catMeta.icon} {ko ? catMeta.label : catMeta.labelEn}
            </span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {ko ? meta.desc : meta.descEn}
          </p>
        </div>

        {/* 편 수 + 화살표 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {ko ? `${published.length}편` : `${published.length} parts`}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              className="text-gray-400 dark:text-gray-500"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── 폴더 콘텐츠 ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4">
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-3" />
              {published.map((note, i) => (
                <SeriesNoteRow
                  key={note.slug}
                  note={note}
                  index={i}
                  accent={meta.accent}
                  lang={lang}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
  const ko = lang === "ko";

  // 카테고리 필터 적용
  const filtered =
    activeCategory === "all"
      ? notes
      : notes.filter((n) => n.category === activeCategory);

  // 시리즈별로 그룹핑 (순서 보존)
  const seriesGroups = new Map<NoteSeriesId, NoteData[]>();
  const standalone: NoteData[] = [];

  for (const note of filtered) {
    if (note.series) {
      const arr = seriesGroups.get(note.series) ?? [];
      arr.push(note);
      seriesGroups.set(note.series, arr);
    } else {
      standalone.push(note);
    }
  }

  // 시리즈 ID 순서 (메타데이터 정의 순서대로)
  const orderedSeriesIds = Object.keys(NOTE_SERIES_META) as NoteSeriesId[];
  const presentSeriesIds = orderedSeriesIds.filter((id) => seriesGroups.has(id));

  // 카테고리 필터 옵션
  const presentCategories = Array.from(new Set(notes.map((n) => n.category)));
  const totalCount = notes.length;
  const seriesCount = presentSeriesIds.length;
  const standaloneCount = notes.filter((n) => !n.series).length;

  return (
    <div>
      {/* ── 통계 바 ───────────────────────────────────────────── */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `총 ${totalCount}편` : `${totalCount} notes`}
        </span>
        {seriesCount > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
              {ko ? `${seriesCount}개 시리즈` : `${seriesCount} series`}
            </span>
          </>
        )}
        {standaloneCount > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <span className="text-[12px] text-gray-400 dark:text-gray-500">
              {ko ? `${standaloneCount}편 단일 노트` : `${standaloneCount} standalone`}
            </span>
          </>
        )}
      </div>

      {/* ── 카테고리 필터 ─────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
            activeCategory === "all"
              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
              : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
          }`}
        >
          {ko ? "전체" : "All"} ({notes.length})
        </button>

        {presentCategories.map((cat) => {
          const meta = NOTE_CATEGORY_META[cat];
          const label = ko ? meta.label : meta.labelEn;
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

      {/* ── 콘텐츠 ────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
          className="space-y-5"
        >
          {filtered.length === 0 ? (
            <motion.p
              variants={fadeUp()}
              className="text-sm text-gray-400 dark:text-gray-500 py-10 text-center"
            >
              {ko ? "아직 이 카테고리의 노트가 없습니다." : "No notes in this category yet."}
            </motion.p>
          ) : (
            <>
              {/* 시리즈 폴더들 */}
              {presentSeriesIds.length > 0 && (
                <div className="space-y-3">
                  {presentSeriesIds.map((seriesId) => (
                    <SeriesFolder
                      key={seriesId}
                      seriesId={seriesId}
                      notes={seriesGroups.get(seriesId)!}
                      defaultOpen={false}
                      lang={lang}
                    />
                  ))}
                </div>
              )}

              {/* 단일 노트 섹션 헤더 (시리즈와 단일 노트가 모두 있을 때만) */}
              {presentSeriesIds.length > 0 && standalone.length > 0 && (
                <div className="flex items-center gap-3 pt-3">
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700/60" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {ko ? "단일 노트" : "Standalone Notes"}
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700/60" />
                </div>
              )}

              {/* 단일 노트들 */}
              {standalone.length > 0 && (
                <div className="grid grid-cols-1 gap-5">
                  {standalone.map((note, i) => (
                    <NoteCard key={note.slug} note={note} lang={lang} index={i} />
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
