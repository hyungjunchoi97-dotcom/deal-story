"use client";

import { useState } from "react";
import { createPublicBrowserClient } from "@/lib/supabase/client";

interface Report {
  id: string;
  slug: string;
  title: string;
  published_at: string | null;
  is_published: boolean;
}

interface Props {
  initialReports: Report[];
}

const EMPTY_FORM = {
  slug: "",
  title: "",
  title_en: "",
  preview: "",
  preview_en: "",
  content: "",
  content_en: "",
  is_published: false,
};

export default function AdminReportsClient({ initialReports }: Props) {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const supabase = createPublicBrowserClient();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const { error } = await supabase.from("weekly_reports").insert({
      ...form,
      published_at: form.is_published ? new Date().toISOString() : null,
    });
    if (error) {
      setMsg(`오류: ${error.message}`);
    } else {
      setMsg("저장 완료!");
      setForm(EMPTY_FORM);
      const { data } = await supabase
        .from("weekly_reports")
        .select("id, slug, title, published_at, is_published")
        .order("created_at", { ascending: false });
      setReports(data ?? []);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("삭제하시겠습니까?")) return;
    await supabase.from("weekly_reports").delete().eq("id", id);
    setReports((prev) => prev.filter((r) => r.id !== id));
  }

  const fieldClass =
    "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors";

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 space-y-12">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Admin — Weekly Reports
      </h1>

      {/* Write form */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          새 리포트 작성
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                slug *
              </label>
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                required
                placeholder="weekly-2024-01"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                title *
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="제목"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                title_en
              </label>
              <input
                name="title_en"
                value={form.title_en}
                onChange={handleChange}
                placeholder="English title"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                preview *
              </label>
              <textarea
                name="preview"
                value={form.preview}
                onChange={handleChange}
                required
                rows={3}
                placeholder="비구독자에게 보여줄 도입부"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                preview_en
              </label>
              <textarea
                name="preview_en"
                value={form.preview_en}
                onChange={handleChange}
                rows={3}
                placeholder="English preview"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              content * (마크다운)
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              rows={10}
              placeholder="구독자 전용 전체 내용 (마크다운)"
              className={`${fieldClass} font-mono`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              content_en (마크다운)
            </label>
            <textarea
              name="content_en"
              value={form.content_en}
              onChange={handleChange}
              rows={6}
              placeholder="English full content (markdown)"
              className={`${fieldClass} font-mono`}
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              name="is_published"
              checked={form.is_published}
              onChange={handleChange}
              className="rounded"
            />
            즉시 발행
          </label>

          {msg && (
            <p
              className={`text-sm ${msg.startsWith("오류") ? "text-red-500" : "text-green-600 dark:text-green-400"}`}
            >
              {msg}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-60"
          >
            {saving ? "저장 중…" : "저장"}
          </button>
        </form>
      </section>

      {/* Report list */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          기존 리포트 ({reports.length})
        </h2>
        {reports.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            리포트가 없습니다.
          </p>
        ) : (
          <div className="space-y-2">
            {reports.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
              >
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {r.title}
                  </span>
                  <span className="ml-3 text-xs text-gray-400">/{r.slug}</span>
                  {r.is_published ? (
                    <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">
                      발행됨
                    </span>
                  ) : (
                    <span className="ml-2 text-xs text-gray-400">초안</span>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
