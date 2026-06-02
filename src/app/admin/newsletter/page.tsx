"use client";

import { useState } from "react";

interface MarketIndex {
  name: string;
  value: string;
  change: string;
  up: boolean;
}

interface Deal {
  title: string;
  summary: string;
  link?: string;
}

const EMPTY_INDEX: MarketIndex = { name: "", value: "", change: "", up: true };
const EMPTY_DEAL: Deal = { title: "", summary: "", link: "" };

export default function NewsletterComposePage() {
  const [adminKey, setAdminKey] = useState("");
  const [weekLabel, setWeekLabel] = useState("");
  const [insightLine, setInsightLine] = useState("");

  // 증시
  const [indicesKo, setIndicesKo] = useState<MarketIndex[]>([
    { name: "코스피", value: "", change: "", up: true },
    { name: "코스닥", value: "", change: "", up: true },
    { name: "나스닥", value: "", change: "", up: true },
  ]);
  const [indicesEn, setIndicesEn] = useState<MarketIndex[]>([
    { name: "Nasdaq", value: "", change: "", up: true },
    { name: "S&P 500", value: "", change: "", up: true },
    { name: "Dow Jones", value: "", change: "", up: true },
  ]);
  const [topSectorKo, setTopSectorKo] = useState("");
  const [topSectorEn, setTopSectorEn] = useState("");

  // 딜
  const [dealsKo, setDealsKo] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);
  const [dealsEn, setDealsEn] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);

  // 리포트
  const [reportTitleKo, setReportTitleKo] = useState("");
  const [reportTitleEn, setReportTitleEn] = useState("");
  const [reportBodyKo, setReportBodyKo] = useState("");
  const [reportBodyEn, setReportBodyEn] = useState("");
  const [reportLink, setReportLink] = useState("");

  const [sending, setSending] = useState<"ko" | "en" | "all" | null>(null);
  const [result, setResult] = useState<string | null>(null);

  function updateIndex(
    arr: MarketIndex[],
    setArr: (v: MarketIndex[]) => void,
    i: number,
    field: keyof MarketIndex,
    value: string | boolean
  ) {
    const next = arr.map((item, idx) => idx === i ? { ...item, [field]: value } : item);
    setArr(next);
  }

  function updateDeal(
    arr: Deal[],
    setArr: (v: Deal[]) => void,
    i: number,
    field: keyof Deal,
    value: string
  ) {
    const next = arr.map((item, idx) => idx === i ? { ...item, [field]: value } : item);
    setArr(next);
  }

  async function send(lang: "ko" | "en" | "all") {
    setSending(lang);
    setResult(null);
    try {
      const res = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({
          lang,
          weekLabel,
          insightLine,
          indices: lang === "en" ? indicesEn : indicesKo,
          topSector: lang === "en" ? topSectorEn : topSectorKo,
          deals_ko: dealsKo,
          deals_en: dealsEn,
          reportTitle_ko: reportTitleKo,
          reportTitle_en: reportTitleEn,
          reportBody_ko: reportBodyKo,
          reportBody_en: reportBodyEn,
          reportLink,
        }),
      });
      const data = await res.json();
      if (!res.ok) setResult(`오류: ${data.error}`);
      else setResult(`발송 완료: ${data.sent}/${data.total}명`);
    } catch (e) {
      setResult("네트워크 오류");
    } finally {
      setSending(null);
    }
  }

  const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400";
  const labelCls = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";
  const sectionCls = "bg-white rounded-xl border border-gray-200 p-6 space-y-4";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Report 발송</h1>
          <p className="text-sm text-gray-500 mt-1">각 섹션을 채우고 KO / EN / 전체 발송</p>
        </div>

        {/* 어드민 키 */}
        <div className={sectionCls}>
          <div>
            <label className={labelCls}>Admin Key</label>
            <input type="password" value={adminKey} onChange={e => setAdminKey(e.target.value)} className={inputCls} placeholder="ADMIN_SECRET" />
          </div>
        </div>

        {/* 기본 정보 */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">기본 정보</h2>
          <div>
            <label className={labelCls}>주간 레이블</label>
            <input value={weekLabel} onChange={e => setWeekLabel(e.target.value)} className={inputCls} placeholder="2025년 6월 첫째 주 / Week of June 2, 2025" />
          </div>
          <div>
            <label className={labelCls}>한 줄 인사이트 (KO/EN 공통)</label>
            <input value={insightLine} onChange={e => setInsightLine(e.target.value)} className={inputCls} placeholder="이번 주 시장을 관통하는 한 문장" />
          </div>
        </div>

        {/* 증시 스냅샷 KO */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">증시 스냅샷 — KO (코스피·코스닥·나스닥)</h2>
          {indicesKo.map((idx, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 items-center">
              <input value={idx.name} onChange={e => updateIndex(indicesKo, setIndicesKo, i, "name", e.target.value)} className={inputCls} placeholder="지수명" />
              <input value={idx.value} onChange={e => updateIndex(indicesKo, setIndicesKo, i, "value", e.target.value)} className={inputCls} placeholder="2,580" />
              <input value={idx.change} onChange={e => updateIndex(indicesKo, setIndicesKo, i, "change", e.target.value)} className={inputCls} placeholder="+1.2%" />
              <select value={idx.up ? "up" : "down"} onChange={e => updateIndex(indicesKo, setIndicesKo, i, "up", e.target.value === "up")} className={inputCls}>
                <option value="up">▲ 상승</option>
                <option value="down">▼ 하락</option>
              </select>
            </div>
          ))}
          <div>
            <label className={labelCls}>주간 상승 섹터/종목 메모</label>
            <input value={topSectorKo} onChange={e => setTopSectorKo(e.target.value)} className={inputCls} placeholder="반도체·AI 섹터 강세, 삼성전자 +3.2%" />
          </div>
        </div>

        {/* 증시 스냅샷 EN */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Market Snapshot — EN (Nasdaq·S&P·Dow)</h2>
          {indicesEn.map((idx, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 items-center">
              <input value={idx.name} onChange={e => updateIndex(indicesEn, setIndicesEn, i, "name", e.target.value)} className={inputCls} placeholder="Index" />
              <input value={idx.value} onChange={e => updateIndex(indicesEn, setIndicesEn, i, "value", e.target.value)} className={inputCls} placeholder="19,200" />
              <input value={idx.change} onChange={e => updateIndex(indicesEn, setIndicesEn, i, "change", e.target.value)} className={inputCls} placeholder="+0.8%" />
              <select value={idx.up ? "up" : "down"} onChange={e => updateIndex(indicesEn, setIndicesEn, i, "up", e.target.value === "up")} className={inputCls}>
                <option value="up">▲ Up</option>
                <option value="down">▼ Down</option>
              </select>
            </div>
          ))}
          <div>
            <label className={labelCls}>Top Sector / Stock</label>
            <input value={topSectorEn} onChange={e => setTopSectorEn(e.target.value)} className={inputCls} placeholder="AI/Semiconductor led gains; Nvidia +4.1%" />
          </div>
        </div>

        {/* 딜 KO */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">이번 주 딜 — KO (글로벌 1 + 국내 1)</h2>
          {dealsKo.map((deal, i) => (
            <div key={i} className="space-y-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <input value={deal.title} onChange={e => updateDeal(dealsKo, setDealsKo, i, "title", e.target.value)} className={inputCls} placeholder={i === 0 ? "글로벌 딜 제목" : "국내 딜 제목"} />
              <textarea value={deal.summary} onChange={e => updateDeal(dealsKo, setDealsKo, i, "summary", e.target.value)} className={inputCls + " resize-none"} rows={2} placeholder="한 줄 요약" />
              <input value={deal.link} onChange={e => updateDeal(dealsKo, setDealsKo, i, "link", e.target.value)} className={inputCls} placeholder="링크 (선택)" />
            </div>
          ))}
        </div>

        {/* 딜 EN */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Deal Watch — EN (Global x2)</h2>
          {dealsEn.map((deal, i) => (
            <div key={i} className="space-y-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <input value={deal.title} onChange={e => updateDeal(dealsEn, setDealsEn, i, "title", e.target.value)} className={inputCls} placeholder={`Deal ${i + 1} title`} />
              <textarea value={deal.summary} onChange={e => updateDeal(dealsEn, setDealsEn, i, "summary", e.target.value)} className={inputCls + " resize-none"} rows={2} placeholder="One-line summary" />
              <input value={deal.link} onChange={e => updateDeal(dealsEn, setDealsEn, i, "link", e.target.value)} className={inputCls} placeholder="Link (optional)" />
            </div>
          ))}
        </div>

        {/* Weekly Report */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Weekly Report 본문</h2>
          <div>
            <label className={labelCls}>리포트 링크</label>
            <input value={reportLink} onChange={e => setReportLink(e.target.value)} className={inputCls} placeholder="https://dealstory.kr/reports/2025-06-w1" />
          </div>
          <div>
            <label className={labelCls}>제목 (KO)</label>
            <input value={reportTitleKo} onChange={e => setReportTitleKo(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>본문 (KO) — 단락 구분: 빈 줄</label>
            <textarea value={reportBodyKo} onChange={e => setReportBodyKo(e.target.value)} className={inputCls + " resize-y"} rows={8} />
          </div>
          <div>
            <label className={labelCls}>Title (EN)</label>
            <input value={reportTitleEn} onChange={e => setReportTitleEn(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Body (EN) — separate paragraphs with blank line</label>
            <textarea value={reportBodyEn} onChange={e => setReportBodyEn(e.target.value)} className={inputCls + " resize-y"} rows={8} />
          </div>
        </div>

        {/* 발송 버튼 */}
        <div className={sectionCls}>
          {result && (
            <div className={`text-sm font-medium px-4 py-3 rounded-lg ${result.startsWith("오류") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
              {result}
            </div>
          )}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => send("ko")}
              disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50"
            >
              {sending === "ko" ? "발송 중..." : "🇰🇷 KO 발송"}
            </button>
            <button
              onClick={() => send("en")}
              disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50"
            >
              {sending === "en" ? "Sending..." : "🌍 EN 발송"}
            </button>
            <button
              onClick={() => send("all")}
              disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-50"
            >
              {sending === "all" ? "발송 중..." : "전체 발송 (KO + EN)"}
            </button>
          </div>
          <p className="text-xs text-gray-400">발송 전 테스트 이메일로 먼저 확인하세요.</p>
        </div>

      </div>
    </div>
  );
}
