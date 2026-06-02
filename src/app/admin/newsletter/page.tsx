"use client";

import { useState } from "react";

interface RegionalItem {
  region: string;
  summary: string;
}

interface ContentItem {
  title: string;
  url: string;
  category: string;
}

const KO_REGIONS: RegionalItem[] = [
  { region: "북미",   summary: "" },
  { region: "아시아", summary: "" },
  { region: "유럽",   summary: "" },
];
const EN_REGIONS: RegionalItem[] = [
  { region: "North America", summary: "" },
  { region: "Asia",          summary: "" },
  { region: "Europe",        summary: "" },
];

const REGION_BG: Record<string, string> = {
  "북미": "#111", "아시아": "#1d4ed8", "유럽": "#15803d",
  "North America": "#111", "Asia": "#1d4ed8", "Europe": "#15803d",
};

const EMPTY_CONTENT: ContentItem = { title: "", url: "", category: "" };

export default function NewsletterComposePage() {
  const [adminKey,    setAdminKey]    = useState("");
  const [weekLabel,   setWeekLabel]   = useState("");
  const [insightLine, setInsightLine] = useState("");

  // Weekly Report
  const [reportTitle, setReportTitle] = useState("");
  const [reportLink,  setReportLink]  = useState("");

  // M&A 지역 동향
  const [regionsKo, setRegionsKo] = useState<RegionalItem[]>(KO_REGIONS.map(r => ({ ...r })));
  const [regionsEn, setRegionsEn] = useState<RegionalItem[]>(EN_REGIONS.map(r => ({ ...r })));

  // 신규 콘텐츠 리스트 (KO·EN 동일 URL 사용, 제목만 별도)
  const [contents, setContents] = useState<ContentItem[]>([{ ...EMPTY_CONTENT }]);

  const [sending, setSending] = useState<"ko" | "en" | "all" | null>(null);
  const [result,  setResult]  = useState<string | null>(null);

  function updateRegion(arr: RegionalItem[], setArr: (v: RegionalItem[]) => void, i: number, value: string) {
    setArr(arr.map((item, idx) => idx === i ? { ...item, summary: value } : item));
  }

  function updateContent(i: number, field: keyof ContentItem, value: string) {
    setContents(prev => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item));
  }

  function addContent() {
    setContents(prev => [...prev, { ...EMPTY_CONTENT }]);
  }

  function removeContent(i: number) {
    setContents(prev => prev.filter((_, idx) => idx !== i));
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
          reportTitle,
          reportLink,
          regionalDeals_ko: regionsKo,
          regionalDeals_en: regionsEn,
          newContents: contents.filter(c => c.title && c.url),
        }),
      });
      const data = await res.json();
      if (!res.ok) setResult(`오류: ${data.error}`);
      else setResult(`발송 완료: ${data.sent}/${data.total}명`);
    } catch {
      setResult("네트워크 오류");
    } finally {
      setSending(null);
    }
  }

  const inputCls   = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400";
  const labelCls   = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";
  const sectionCls = "bg-white rounded-xl border border-gray-200 p-6 space-y-4";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Report 발송</h1>
          <p className="text-sm text-gray-500 mt-1">매주 금요일 발송</p>
        </div>

        {/* 어드민 키 */}
        <div className={sectionCls}>
          <label className={labelCls}>Admin Key</label>
          <input type="password" value={adminKey} onChange={e => setAdminKey(e.target.value)} className={inputCls} placeholder="ADMIN_SECRET" />
        </div>

        {/* 기본 정보 */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">기본 정보</h2>
          <div>
            <label className={labelCls}>주간 레이블</label>
            <input value={weekLabel} onChange={e => setWeekLabel(e.target.value)} className={inputCls} placeholder="2025년 6월 첫째 주 / Week of June 2, 2025" />
          </div>
          <div>
            <label className={labelCls}>한 줄 인사이트</label>
            <input value={insightLine} onChange={e => setInsightLine(e.target.value)} className={inputCls} placeholder="이번 주를 관통하는 한 문장" />
          </div>
        </div>

        {/* Weekly Report */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Weekly Report</h2>
          <div>
            <label className={labelCls}>제목</label>
            <input value={reportTitle} onChange={e => setReportTitle(e.target.value)} className={inputCls} placeholder="이번 주 Weekly Report 제목" />
          </div>
          <div>
            <label className={labelCls}>링크</label>
            <input value={reportLink} onChange={e => setReportLink(e.target.value)} className={inputCls} placeholder="https://dealstory.kr/reports/2025-06-w1" />
          </div>
        </div>

        {/* 글로벌 M&A 동향 KO */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">글로벌 M&A 동향 — KO</h2>
          <p className="text-xs text-gray-400">북미 · 아시아(중국·홍콩·싱가포르·일본·한국) · 유럽 각 2~3줄</p>
          {regionsKo.map((item, i) => (
            <div key={i}>
              <label className="block mb-1.5">
                <span className="text-white text-[10px] font-bold px-2 py-0.5 rounded mr-2"
                  style={{ backgroundColor: REGION_BG[item.region] ?? "#111" }}>
                  {item.region}
                </span>
              </label>
              <textarea
                value={item.summary}
                onChange={e => updateRegion(regionsKo, setRegionsKo, i, e.target.value)}
                className={inputCls + " resize-none"} rows={3}
                placeholder={
                  item.region === "북미"   ? "예) 미국 테크 섹터 M&A가 다시 활발해지고 있다. AI 인프라 관련 인수가..." :
                  item.region === "아시아" ? "예) 일본 PE 시장에서 대형 카브아웃 딜이 진행 중이다. 한국은 반도체..." :
                                             "예) 유럽 에너지 전환 관련 M&A가 급증하고 있다. 독일·프랑스 중심으로..."
                }
              />
            </div>
          ))}
        </div>

        {/* Global M&A Pulse EN */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Global M&A Pulse — EN</h2>
          <p className="text-xs text-gray-400">North America · Asia · Europe, 2–3 sentences each</p>
          {regionsEn.map((item, i) => (
            <div key={i}>
              <label className="block mb-1.5">
                <span className="text-white text-[10px] font-bold px-2 py-0.5 rounded mr-2"
                  style={{ backgroundColor: REGION_BG[item.region] ?? "#111" }}>
                  {item.region}
                </span>
              </label>
              <textarea
                value={item.summary}
                onChange={e => updateRegion(regionsEn, setRegionsEn, i, e.target.value)}
                className={inputCls + " resize-none"} rows={3}
                placeholder={
                  item.region === "North America" ? "e.g. US tech M&A is picking up again, driven by AI infrastructure..." :
                  item.region === "Asia"           ? "e.g. Large carve-out deals underway in Japan. Korea's semiconductor sector..." :
                                                    "e.g. Energy-transition M&A surging in Europe, led by Germany and France..."
                }
              />
            </div>
          ))}
        </div>

        {/* 이번 주 신규 콘텐츠 */}
        <div className={sectionCls}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-700">이번 주 새 글</h2>
              <p className="text-xs text-gray-400 mt-0.5">이번 주 추가한 글 제목 + 링크를 입력하세요</p>
            </div>
            <button
              onClick={addContent}
              className="text-xs font-semibold text-gray-500 border border-gray-300 rounded-lg px-3 py-1.5 hover:border-gray-400"
            >
              + 글 추가
            </button>
          </div>
          {contents.map((item, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="flex-1 space-y-2">
                <input
                  value={item.category}
                  onChange={e => updateContent(i, "category", e.target.value)}
                  className={inputCls}
                  placeholder="카테고리 (예: 딜 / 마켓 / 일화 / Notes)"
                />
                <input
                  value={item.title}
                  onChange={e => updateContent(i, "title", e.target.value)}
                  className={inputCls}
                  placeholder="글 제목"
                />
                <input
                  value={item.url}
                  onChange={e => updateContent(i, "url", e.target.value)}
                  className={inputCls}
                  placeholder="https://dealstory.kr/deals/..."
                />
              </div>
              {contents.length > 1 && (
                <button onClick={() => removeContent(i)} className="mt-1 text-gray-300 hover:text-red-400 text-lg font-light">×</button>
              )}
            </div>
          ))}
        </div>

        {/* 발송 */}
        <div className={sectionCls}>
          {result && (
            <div className={`text-sm font-medium px-4 py-3 rounded-lg ${result.startsWith("오류") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
              {result}
            </div>
          )}
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => send("ko")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50">
              {sending === "ko" ? "발송 중..." : "🇰🇷 KO 발송"}
            </button>
            <button onClick={() => send("en")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50">
              {sending === "en" ? "Sending..." : "🌍 EN 발송"}
            </button>
            <button onClick={() => send("all")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-50">
              {sending === "all" ? "발송 중..." : "전체 발송 (KO + EN)"}
            </button>
          </div>
          <p className="text-xs text-gray-400">발송 전 테스트 이메일로 먼저 확인하세요.</p>
        </div>

      </div>
    </div>
  );
}
