/**
 * after-pax-americana.ts — "After Pax Americana" 시리즈 15편 스텁
 *
 * 시리즈 구조:
 *   Act I — Forces of Change (1~4)
 *   Act II — Theaters of Conflict (5~9)
 *   Act III — Shifting Alliances (10~13)
 *   Act IV — Capital After Hegemony (14~15)
 *
 * 각 챕터는 status: "coming-soon"으로 시작.
 * 발행 시 status: "published" + sections·references 채움.
 */

import type { NoteData } from "./notes";

// ── 공통 메타 ──────────────────────────────────────────────────────────────────
const SERIES_ID = "after-pax-americana" as const;
const PUBLISH_DATE = "2026-05-29"; // 시리즈 announce 시점 — 발행 시 개별 chapter 날짜로 덮어씀

// ── 스텁 헬퍼 ──────────────────────────────────────────────────────────────────
function stub(args: {
  order: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  thesis: string;
  thesisEn: string;
  readingMinutes?: number;
}): NoteData {
  return {
    slug: `after-pax-americana-${args.order}`,
    category: "macro",
    status: "coming-soon",
    series: SERIES_ID,
    seriesOrder: args.order,
    title: args.title,
    titleEn: args.titleEn,
    description: args.description,
    descriptionEn: args.descriptionEn,
    date: PUBLISH_DATE,
    readingMinutes: args.readingMinutes ?? 22,
    keyPoints: [args.thesis],
    keyPointsEn: [args.thesisEn],
    sections: [],
    references: [],
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// ACT I — FORCES OF CHANGE (Chapters 1–4)
// ══════════════════════════════════════════════════════════════════════════════

const ch01_shale = stub({
  order: 1,
  title: "셰일 전환 — 미국이 페르시아만에서 손을 떼는 산수",
  titleEn: "The Shale Pivot — Why the US Walks Away from the Persian Gulf",
  description:
    "2008년 일 5.0백만 배럴이던 미국 원유 생산은 2024년 13.2백만 배럴(2025년 7월 13.6백만 신기록)로 증가했다. 미국이 70년간 페르시아만 안보를 자임했던 단 하나의 이유 — 자국 경제가 중동 원유에 의존한다는 사실 — 가 사라졌다. 페르시아만 원유 수입은 1973년 7%에서 2024년 7%로 돌아왔다 — 그러나 그 사이 미국은 순수출국이 됐다. 세계는 그것이 무엇을 의미하는지 아직 가격에 반영하지 않았다.",
  descriptionEn:
    "US oil production rose from 5.0 MM bpd in 2008 to 13.2 MM bpd in 2024 (peaking at 13.6 MM in July 2025). The single reason America underwrote Persian Gulf security for 70 years — its own economy's dependence on Middle Eastern oil — has dissolved. US Persian Gulf imports returned to 7% in 2024, the same level as 1973 — but in between, America became a net exporter. The world has not yet priced what that means.",
  thesis:
    "셰일 혁명이 미국의 중동 정책을 정당화했던 단 하나의 가정을 무너뜨렸다 — 그러나 그것이 무엇을 의미하는지 시장은 아직 모른다.",
  thesisEn:
    "The shale revolution dissolved the single assumption that justified American Middle East policy — yet markets have not begun to price what that means.",
  readingMinutes: 26,
});

const ch02_demographics = stub({
  order: 2,
  title: "인구학의 잠금 — 누가 늙고 누가 젊은가",
  titleEn: "The Demographic Lock-In — Who Ages, Who Stays Young",
  description:
    "중국 합계출산율 1.0, 한국 0.72, 일본 1.2, 독일 1.46. 미국 1.66. 인도 2.0. 인구는 정책으로 바꿀 수 없다 — 향후 30년의 노동·소비·자본 흐름을 결정할 변수가 이미 결정돼 있다.",
  descriptionEn:
    "Total fertility rates: China 1.0, Korea 0.72, Japan 1.2, Germany 1.46, US 1.66, India 2.0. Demographics cannot be reversed by policy. The labor, consumption, and capital flows of the next thirty years are already locked in.",
  thesis:
    "인구는 정책으로 바꿀 수 없다 — 그래서 인구학은 지정학에서 가장 정확한 예측 도구다.",
  thesisEn:
    "Demographics cannot be reversed by policy — which makes them the most reliable predictor in geopolitics.",
});

const ch03_debt = stub({
  order: 3,
  title: "부채의 함정 — $34조의 그림자",
  titleEn: "The Debt Trap — The Shadow of $34 Trillion",
  description:
    "미국 연방 부채 $34조, GDP 대비 123%. 2026년 이자비용이 국방예산을 추월한다. 차환 wall이 다가오는데 일본·중국은 매도자로 돌아섰다. 패권 유지 비용이 패권 자체를 깎아먹는 시점.",
  descriptionEn:
    "US federal debt $34 trillion, 123% of GDP. Interest expense overtakes the defense budget in 2026. A refinancing wall looms while Japan and China have turned net sellers. The cost of maintaining hegemony begins to erode hegemony itself.",
  thesis:
    "미국 부채는 산수 문제가 아니라 의지 문제다 — 그리고 의지는 이미 흔들리고 있다.",
  thesisEn:
    "American debt is not an arithmetic problem but a question of will — and that will is already faltering.",
});

const ch04_bretton_woods = stub({
  order: 4,
  title: "브레튼우즈의 종료 — 무역과 안보의 분리",
  titleEn: "The End of Bretton Woods — When Trade and Security Diverge",
  description:
    "1944년 이후 미국은 동맹국의 안보를 보장하는 대가로 자국 시장 개방을 거래했다. 80년이 지나 미국은 동맹의 가치보다 자국 산업의 보호를 우선한다 — 관세·반도체법·IRA가 그 증거다. 자유무역 시스템 자체가 만든 자의 손에서 깨지고 있다.",
  descriptionEn:
    "Since 1944, America has traded market access for allied security. Eighty years on, it now prioritizes industrial protection over the value of alliances — tariffs, the CHIPS Act, and the IRA are the evidence. The free-trade system itself is breaking, in the hands of its own architect.",
  thesis:
    "자유무역은 미국이 동맹을 사기 위해 지불한 비용이었다 — 그 동맹이 더 이상 필요 없으니 비용도 끝난다.",
  thesisEn:
    "Free trade was the price America paid to buy alliances — and the alliances are no longer worth the price.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT II — THEATERS OF CONFLICT (Chapters 5–9)
// ══════════════════════════════════════════════════════════════════════════════

const ch05_russia_ukraine = stub({
  order: 5,
  title: "러시아-우크라이나 — 핵 제국의 마지막 발악",
  titleEn: "Russia-Ukraine — The Last Convulsion of a Nuclear Empire",
  description:
    "러시아 합계출산율 1.4, 평균 수명 남성 64세, 우크라이나 전쟁 이후 2백만 명 이상 유출. 무기 재고는 소진되고, 셰일이 유럽 가스 시장을 빼앗았다. 푸틴이 무엇을 잃든, 인구학적 시계는 멈추지 않는다.",
  descriptionEn:
    "Russian fertility 1.4, male life expectancy 64, over 2 million emigrants since the war began. Arms stockpiles depleted; shale has stolen the European gas market. Whatever Putin wins or loses, the demographic clock does not stop.",
  thesis:
    "러시아는 우크라이나에서 이겨도 진다 — 패배의 형태만 다를 뿐이다.",
  thesisEn:
    "Russia loses whether or not it wins in Ukraine — only the shape of the defeat differs.",
});

const ch06_iran_hormuz = stub({
  order: 6,
  title: "이란·이스라엘과 호르무즈 해협",
  titleEn: "Iran, Israel & the Strait of Hormuz",
  description:
    "호르무즈 해협을 통과하는 원유는 일 1,700만 배럴 — 세계 무역의 30%. 이란이 그 해협을 봉쇄할 능력이 있고, 미군은 더 이상 그것을 막을 인센티브가 약하다. 셰일이 자급을 만들고, 이스라엘이 동맹의 부담을 키운다. 한국·일본·중국이 가장 먼저 그 비용을 받는다.",
  descriptionEn:
    "17 million barrels per day pass through the Strait of Hormuz — 30% of seaborne oil trade. Iran can close it; the US Navy has weakening incentive to keep it open. Shale provides self-sufficiency; Israel raises the cost of alliance. Korea, Japan, and China bear the bill first.",
  thesis:
    "호르무즈가 닫히는 첫날, 한국·일본·중국이 미군 없는 페르시아만의 진짜 비용을 처음으로 본다.",
  thesisEn:
    "The day Hormuz closes, Korea, Japan, and China will see for the first time the real cost of a Persian Gulf without the US Navy.",
});

const ch07_venezuela = stub({
  order: 7,
  title: "베네수엘라와 라틴 재구성",
  titleEn: "Venezuela & the Latin Realignment",
  description:
    "베네수엘라의 6,000억 배럴 매장량은 사우디아라비아보다 크다. 트럼프 행정부의 카리브 작전이 라틴아메리카를 새로 정렬하고 있다 — 중국·러시아·이란의 서반구 거점을 정리하는 첫 단계.",
  descriptionEn:
    "Venezuela's 600 billion barrels of reserves exceed Saudi Arabia's. The Trump administration's Caribbean operations are realigning Latin America — the first stage of clearing Chinese, Russian, and Iranian footholds from the Western Hemisphere.",
  thesis:
    "베네수엘라는 미국이 자기 뒷마당을 다시 정리하는 첫 신호다 — 그 다음은 멕시코, 그 다음은 콜롬비아다.",
  thesisEn:
    "Venezuela is the first signal that America is reclaiming its backyard — Mexico is next, Colombia after.",
});

const ch08_taiwan = stub({
  order: 8,
  title: "대만 해협 — 반도체와 봉쇄의 산수",
  titleEn: "The Taiwan Strait — The Arithmetic of Semiconductors and Siege",
  description:
    "TSMC가 세계 첨단 파운드리의 92%를 만든다. 시진핑은 73세, 중국 인구는 이미 정점을 지났다 — 그의 시간표는 빠르게 좁아진다. 그러나 봉쇄 작전은 침공보다 적은 비용에 더 큰 효과를 만들 수 있다.",
  descriptionEn:
    "TSMC produces 92% of the world's advanced foundry capacity. Xi Jinping is 73; China's population has already peaked — his timeline narrows fast. But a blockade can deliver more leverage at less cost than an invasion.",
  thesis:
    "시진핑은 침공할 필요가 없다 — 그저 봉쇄 위협만 유지하면 된다. 그것만으로 세계 반도체 공급이 인질이 된다.",
  thesisEn:
    "Xi does not need to invade — sustained threat of blockade is enough to hold global semiconductor supply hostage.",
});

const ch09_korea = stub({
  order: 9,
  title: "한반도 — 핵·동맹·통일의 트라일레마",
  titleEn: "The Korean Peninsula — The Trilemma of Nukes, Alliance, and Unification",
  description:
    "북한 핵 능력은 ICBM 단계로 진입했고, 한국 핵무장 여론은 70%를 넘었다. 미군 주둔 비용 분담 협상은 매 정권마다 격해진다. 동맹과 자주국방 사이에서 한국이 선택해야 하는 시간이 다가온다.",
  descriptionEn:
    "North Korea has crossed into ICBM-capable status; South Korean public support for nuclear weapons exceeds 70%. US troop-cost negotiations grow harder every administration. The decision between alliance and self-reliance is approaching.",
  thesis:
    "한국의 진짜 질문은 더 이상 '핵을 가질까'가 아니다 — '언제, 어떤 조건으로'다.",
  thesisEn:
    "South Korea's real question is no longer whether to acquire nuclear weapons — but when, and on what terms.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT III — SHIFTING ALLIANCES (Chapters 10–13)
// ══════════════════════════════════════════════════════════════════════════════

const ch10_nato = stub({
  order: 10,
  title: "NATO 2.0 — 독일·폴란드·튀르키예의 부상",
  titleEn: "NATO 2.0 — The Rise of Germany, Poland, and Türkiye",
  description:
    "독일의 €1,000억 방위 펀드, 폴란드의 GDP 4.7% 방위비, 튀르키예의 자체 방산 산업. NATO는 더 이상 미국이 이끄는 동맹이 아니다 — 미국 없이도 작동하는 시스템으로 재편되고 있다.",
  descriptionEn:
    "Germany's €100B defense fund, Poland's 4.7% of GDP on defense, Türkiye's indigenous defense industry. NATO is no longer an alliance led by America — it is being rebuilt to function without America.",
  thesis:
    "독일이 80년의 평화주의를 포기하는 순간, 유럽의 안보 지도가 새로 그려진다.",
  thesisEn:
    "The moment Germany abandons 80 years of pacifism, Europe's security map is redrawn.",
});

const ch11_crink = stub({
  order: 11,
  title: "CRINK 대 동맹 — 새로운 진영화",
  titleEn: "CRINK vs the Allies — The New Bloc Politics",
  description:
    "중국·러시아·이란·북한(CRINK)의 무기·기술·자본 협력이 깊어진다. 한미일·AUKUS는 그 반대편에서 묶인다. 1950년대식 진영화가 다시 등장하지만, 이번엔 비대칭이다 — 인구·자본·기술 모두 동맹 쪽이 우세하다.",
  descriptionEn:
    "Weapons, technology, and capital cooperation among China, Russia, Iran, and North Korea deepens. ROK-US-Japan and AUKUS bind together on the other side. A 1950s-style bloc politics returns — but asymmetric. Demographics, capital, and technology all favor the allies.",
  thesis:
    "두 진영은 동등하지 않다 — 인구·자본·기술 모두 한쪽으로 기울어 있다.",
  thesisEn:
    "The two blocs are not equal — demographics, capital, and technology all tilt one way.",
});

const ch12_gulf_trio = stub({
  order: 12,
  title: "걸프의 삼각 — 사우디·UAE·이스라엘",
  titleEn: "The Gulf Trio — Saudi Arabia, the UAE, and Israel",
  description:
    "미국이 페르시아만에서 발을 빼는 가운데, 사우디·UAE·이스라엘이 자생적 균형을 시도한다. Abraham Accords 2.0, 사우디의 미국·중국 양다리, 이스라엘의 다중 전선. 중동의 다음 10년은 미국이 결정하지 않는다.",
  descriptionEn:
    "As America withdraws from the Persian Gulf, Saudi Arabia, the UAE, and Israel attempt a self-stabilizing balance. Abraham Accords 2.0, Saudi straddling between Washington and Beijing, Israel on multiple fronts. The Middle East's next decade is not decided in Washington.",
  thesis:
    "미국이 떠난 자리에 페르시아만의 세 강자가 직접 균형을 만들기 시작한다 — 그것이 작동할지는 다른 문제다.",
  thesisEn:
    "In America's absence, the Gulf's three powers begin building their own balance — whether it holds is another question.",
});

const ch13_hedgers = stub({
  order: 13,
  title: "헷저들 — 인도·ASEAN·아프리카의 비동맹 부활",
  titleEn: "The Hedgers — India, ASEAN, and Africa's Non-Aligned Revival",
  description:
    "인도는 미국·러시아·중국 모두와 동시에 거래한다. 베트남·인도네시아·필리핀은 안보는 미국, 무역은 중국. 아프리카는 가장 늦게 정렬된다. 비동맹은 1955년의 이상이 아니라 2026년의 합리적 선택이다.",
  descriptionEn:
    "India trades simultaneously with America, Russia, and China. Vietnam, Indonesia, the Philippines hedge: security from Washington, trade with Beijing. Africa is the last to align. Non-alignment is no longer the 1955 ideal — it is the 2026 rational choice.",
  thesis:
    "비동맹은 1955년의 이상이 아니라 2026년의 가장 합리적 전략이다.",
  thesisEn:
    "Non-alignment is no longer the 1955 ideal — it is the most rational strategy of 2026.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT IV — CAPITAL AFTER HEGEMONY (Chapters 14–15)
// ══════════════════════════════════════════════════════════════════════════════

const ch14_dollar = stub({
  order: 14,
  title: "달러 이후의 달러 — 무역·결제·보유의 분리",
  titleEn: "The Dollar After the Dollar — Trade, Settlement, and Reserves Diverge",
  description:
    "위안화 무역 결제 비중은 늘었지만 달러 외환보유고 비중은 여전히 58%. 탈달러화의 진짜 위협은 BRICS의 정치가 아니라 스테이블코인·CBDC·금의 보유자 다양화에 있다. 달러 패권은 끝나지 않지만 — 그 형태가 바뀐다.",
  descriptionEn:
    "Yuan-denominated trade settlement has grown, but the dollar's share of FX reserves remains 58%. The real threat of de-dollarization is not BRICS politics but the diversification of holders — stablecoins, CBDCs, and gold. Dollar hegemony does not end — but its shape transforms.",
  thesis:
    "탈달러화의 진짜 위협은 BRICS가 아니라 보유자 다양화다.",
  thesisEn:
    "The real threat of de-dollarization is not BRICS but the diversification of who holds reserves.",
});

const ch15_world_2035 = stub({
  order: 15,
  title: "2035년의 세계 — 종합과 포트폴리오 시나리오",
  titleEn: "The World in 2035 — Synthesis and Portfolio Scenarios",
  description:
    "14편의 분석을 종합한다. 5개 거시 시나리오, 자산군별 백테스트, 한국·미국·유럽·신흥국 포트폴리오 구조 제안. 14편은 진단이었고, 15편은 처방이다.",
  descriptionEn:
    "A synthesis of fourteen prior memos. Five macro scenarios, asset-class backtests, portfolio frameworks for Korean, American, European, and emerging-market investors. The first fourteen were diagnosis; this is prescription.",
  thesis:
    "패권 이후의 세계는 다극이 아니라 비대칭 다극이다 — 투자자의 포트폴리오도 그렇게 설계되어야 한다.",
  thesisEn:
    "The world after hegemony is not multipolar but asymmetrically multipolar — portfolios should be built that way.",
});

// ── Export ─────────────────────────────────────────────────────────────────────

export const AFTER_PAX_AMERICANA_NOTES: NoteData[] = [
  ch01_shale,
  ch02_demographics,
  ch03_debt,
  ch04_bretton_woods,
  ch05_russia_ukraine,
  ch06_iran_hormuz,
  ch07_venezuela,
  ch08_taiwan,
  ch09_korea,
  ch10_nato,
  ch11_crink,
  ch12_gulf_trio,
  ch13_hedgers,
  ch14_dollar,
  ch15_world_2035,
];
