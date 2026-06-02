import * as React from "react";

export interface RegionalItem {
  region: "North America" | "Asia" | "Europe";
  summary: string;
}

export interface ContentItem {
  title: string;
  url: string;
  category?: string;
}

export interface WeeklyReportEnProps {
  weekLabel: string;
  insightLine: string;
  reportTitle: string;
  reportLink: string;
  regionalItems: RegionalItem[];
  newContents: ContentItem[];
  unsubscribeLink: string;
}

const REGION_COLOR: Record<string, string> = {
  "North America": "#111",
  "Asia":          "#1d4ed8",
  "Europe":        "#15803d",
};

export default function WeeklyReportEn({
  weekLabel,
  insightLine,
  reportTitle,
  reportLink,
  regionalItems,
  newContents,
  unsubscribeLink,
}: WeeklyReportEnProps) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-head-element */}
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

                    {/* Weekly Report */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                          Weekly Report
                        </p>
                        <p style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 700, color: "#111", lineHeight: "1.45" }}>
                          <a href={reportLink} style={{ color: "#111", textDecoration: "none" }}>{reportTitle}</a>
                        </p>
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td style={{ backgroundColor: "#111", borderRadius: 6, padding: "9px 18px" }}>
                                <a href={reportLink} style={{ color: "#fff", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>Read full report →</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Global M&A Pulse */}
                    <tr>
                      <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                        <p style={{ margin: "0 0 18px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                          Global M&A Pulse
                        </p>
                        {regionalItems.map((item, i) => (
                          <table key={i} width="100%" cellPadding={0} cellSpacing={0}>
                            <tbody>
                              <tr>
                                <td style={{ paddingBottom: i < regionalItems.length - 1 ? 16 : 0 }}>
                                  <table width="100%" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                      <tr>
                                        <td style={{ verticalAlign: "top", paddingTop: 2, whiteSpace: "nowrap", paddingRight: 12 }}>
                                          <span style={{
                                            display: "inline-block",
                                            fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
                                            color: "#fff",
                                            backgroundColor: REGION_COLOR[item.region] ?? "#111",
                                            padding: "2px 8px", borderRadius: 4,
                                          }}>
                                            {item.region}
                                          </span>
                                        </td>
                                        <td style={{ fontSize: 13, color: "#444", lineHeight: "1.75" }}>
                                          {item.summary}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {i < regionalItems.length - 1 && (
                                    <div style={{ height: 1, backgroundColor: "#f0f0f0", margin: "16px 0 0" }} />
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ))}
                      </td>
                    </tr>

                    {/* New This Week */}
                    {newContents.length > 0 && (
                      <tr>
                        <td style={{ padding: "28px 36px", borderBottom: "1px solid #f0f0f0" }}>
                          <p style={{ margin: "0 0 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>
                            New This Week
                          </p>
                          {newContents.map((item, i) => (
                            <table key={i} width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: i < newContents.length - 1 ? 10 : 0 }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: 8, fontSize: 12, color: "#ccc", verticalAlign: "middle" }}>→</td>
                                  <td>
                                    {item.category && (
                                      <span style={{ fontSize: 10, color: "#999", marginRight: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                                        {item.category}
                                      </span>
                                    )}
                                    <a href={item.url} style={{ fontSize: 13, color: "#111", textDecoration: "none", fontWeight: 500, lineHeight: "1.5" }}>
                                      {item.title}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          ))}
                        </td>
                      </tr>
                    )}

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
