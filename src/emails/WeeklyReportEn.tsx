import * as React from "react";
import type { MarketPulseItem, Deal } from "./WeeklyReportKo";

export interface WeeklyReportEnProps {
  weekLabel: string;
  insightLine: string;
  marketPulse: MarketPulseItem[];
  deals: Deal[];        // global x2
  reportTitle: string;
  reportBody: string;
  reportLink: string;
  unsubscribeLink: string;
}

const CATEGORY_COLOR: Record<string, string> = {
  "M&A": "#111",
  "PE":  "#374151",
  "VC":  "#6b7280",
};

export default function WeeklyReportEn({
  weekLabel,
  insightLine,
  marketPulse,
  deals,
  reportTitle,
  reportBody,
  reportLink,
  unsubscribeLink,
}: WeeklyReportEnProps) {
  const paragraphs = reportBody.split(/\n\n+/).filter(Boolean);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Deal Story Weekly — ${weekLabel}`}</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f5f5f5", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#f5f5f5", padding: "32px 16px" }}>
          <tbody>
            <tr>
              <td align="center">
                <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: "100%", backgroundColor: "#ffffff", borderRadius: 8, overflow: "hidden" }}>
                  <tbody>

                    {/* Header */}
                    <tr>
                      <td style={{ padding: "28px 36px 20px", borderBottom: "1px solid #e5e5e5" }}>
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td>
                                <span style={{ fontSize: 18, fontWeight: 700, color: "#111", letterSpacing: "-0.3px" }}>Deal Story</span>
                                <span style={{ marginLeft: 8, fontSize: 12, color: "#999" }}>Weekly Report</span>
                              </td>
                              <td align="right">
                                <span style={{ fontSize: 12, color: "#999" }}>{weekLabel}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Insight */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: 0, fontSize: 15, lineHeight: "1.65", color: "#111", fontWeight: 600, borderLeft: "3px solid #111", paddingLeft: 14 }}>
                          {insightLine}
                        </p>
                      </td>
                    </tr>

                    {/* Market Pulse */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: "0 0 18px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                          Market Pulse
                        </p>
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            {marketPulse.map((item, i) => (
                              <tr key={i}>
                                <td style={{ verticalAlign: "top", paddingBottom: i < marketPulse.length - 1 ? 16 : 0 }}>
                                  <table width="100%" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                      <tr>
                                        <td style={{ verticalAlign: "top", width: 40, paddingTop: 2 }}>
                                          <span style={{
                                            display: "inline-block",
                                            fontSize: 10,
                                            fontWeight: 700,
                                            letterSpacing: "0.05em",
                                            color: "#fff",
                                            backgroundColor: CATEGORY_COLOR[item.category] ?? "#111",
                                            padding: "2px 7px",
                                            borderRadius: 4,
                                            whiteSpace: "nowrap",
                                          }}>
                                            {item.category}
                                          </span>
                                        </td>
                                        <td style={{ paddingLeft: 12, fontSize: 13, color: "#444", lineHeight: "1.75" }}>
                                          {item.summary}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {i < marketPulse.length - 1 && (
                                    <div style={{ height: 1, backgroundColor: "#f5f5f5", marginTop: 16 }} />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Deal Watch */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: "0 0 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                          Deal Watch
                        </p>
                        {deals.map((deal, i) => (
                          <table key={i} width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: i < deals.length - 1 ? 12 : 0 }}>
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: "#f9f9f9", borderRadius: 6, padding: "14px 16px" }}>
                                  <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 700, color: "#111" }}>
                                    {deal.link
                                      ? <a href={deal.link} style={{ color: "#111", textDecoration: "none" }}>{deal.title}</a>
                                      : deal.title}
                                  </p>
                                  <p style={{ margin: 0, fontSize: 12, color: "#666", lineHeight: "1.65" }}>{deal.summary}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ))}
                      </td>
                    </tr>

                    {/* Weekly Report */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: "0 0 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                          Weekly Report
                        </p>
                        <p style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#111", lineHeight: "1.4" }}>
                          {reportTitle}
                        </p>
                        {paragraphs.map((p, i) => (
                          <p key={i} style={{ margin: "0 0 14px", fontSize: 13, color: "#444", lineHeight: "1.8" }}>{p}</p>
                        ))}
                        <table cellPadding={0} cellSpacing={0} style={{ marginTop: 8 }}>
                          <tbody>
                            <tr>
                              <td style={{ backgroundColor: "#111", borderRadius: 6, padding: "10px 20px" }}>
                                <a href={reportLink} style={{ color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Read full report →</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{ padding: "20px 36px", backgroundColor: "#fafafa" }}>
                        <p style={{ margin: 0, fontSize: 11, color: "#bbb", textAlign: "center" }}>
                          <a href="https://dealstory.kr/en" style={{ color: "#999", textDecoration: "none" }}>dealstory.kr</a>
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <a href={unsubscribeLink} style={{ color: "#999", textDecoration: "none" }}>Unsubscribe</a>
                        </p>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
