"use client";

/**
 * InteractiveMap — Mapbox GL JS 기반 인터랙티브 지도 래퍼
 *
 * After Pax Americana 시리즈 챕터에서 반복 사용하는 지도 컴포넌트.
 * 호르무즈 해협, 셰일 분지, 송유관, NATO 회원국 등 다양한 지정학 지도 지원.
 *
 * Env: NEXT_PUBLIC_MAPBOX_TOKEN 필요
 */

import { useEffect, useRef, useState } from "react";
import mapboxgl, { type Map, type LngLatLike } from "mapbox-gl";
import { motion } from "framer-motion";

// Mapbox CSS (Next.js 환경에서 한 번만 로드)
import "mapbox-gl/dist/mapbox-gl.css";

// ── 타입 ──────────────────────────────────────────────────────────────────────
export type MapMarker = {
  id: string;
  lng: number;
  lat: number;
  label?: string;
  labelEn?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  popup?: string;       // 마커 클릭 시 팝업 내용 (HTML)
  popupEn?: string;
};

export type MapLayer = {
  id: string;
  type: "fill" | "line" | "circle";
  data: GeoJSON.Feature | GeoJSON.FeatureCollection;
  paint?: Record<string, unknown>;
};

type InteractiveMapProps = {
  // 초기 뷰
  center: [number, number];     // [lng, lat]
  zoom?: number;                // 기본 3
  pitch?: number;               // 3D 기울기 (기본 0)
  bearing?: number;             // 회전 (기본 0)

  // 스타일
  style?: "light" | "dark" | "satellite" | "streets";
  height?: number;              // px (기본 480)

  // 콘텐츠
  markers?: MapMarker[];
  layers?: MapLayer[];

  // 표시 옵션
  interactive?: boolean;        // 사용자 인터랙션 (기본 true)
  showNav?: boolean;            // 줌 컨트롤
  showFullscreen?: boolean;

  // 라벨링
  title?: string;
  titleEn?: string;
  caption?: string;
  captionEn?: string;
  lang?: "ko" | "en";
};

const STYLE_URLS: Record<NonNullable<InteractiveMapProps["style"]>, string> = {
  light:     "mapbox://styles/mapbox/light-v11",
  dark:      "mapbox://styles/mapbox/dark-v11",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
  streets:   "mapbox://styles/mapbox/streets-v12",
};

const SIZE_PX: Record<NonNullable<MapMarker["size"]>, number> = {
  sm: 8, md: 12, lg: 18,
};

export default function InteractiveMap({
  center,
  zoom = 3,
  pitch = 0,
  bearing = 0,
  style = "light",
  height = 480,
  markers = [],
  layers = [],
  interactive = true,
  showNav = true,
  showFullscreen = true,
  title,
  titleEn,
  caption,
  captionEn,
  lang = "ko",
}: InteractiveMapProps) {
  const ko = lang === "ko";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      setError(ko ? "Mapbox 토큰이 설정되지 않았습니다" : "Mapbox token not configured");
      return;
    }
    if (!containerRef.current) return;

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: STYLE_URLS[style],
      center: center as LngLatLike,
      zoom,
      pitch,
      bearing,
      interactive,
      attributionControl: true,
    });

    mapRef.current = map;

    // 줌 컨트롤
    if (showNav) {
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    }
    if (showFullscreen) {
      map.addControl(new mapboxgl.FullscreenControl(), "top-right");
    }

    map.on("load", () => {
      setLoaded(true);

      // 레이어 추가 (예: 호르무즈 경로, NATO 영토 등)
      for (const layer of layers) {
        const sourceId = `src-${layer.id}`;
        if (!map.getSource(sourceId)) {
          map.addSource(sourceId, { type: "geojson", data: layer.data });
        }
        if (!map.getLayer(layer.id)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          map.addLayer({
            id: layer.id,
            type: layer.type,
            source: sourceId,
            paint: layer.paint ?? {},
          } as any);
        }
      }

      // 마커 추가
      for (const m of markers) {
        const el = document.createElement("div");
        const sizePx = SIZE_PX[m.size ?? "md"];
        el.style.width = `${sizePx}px`;
        el.style.height = `${sizePx}px`;
        el.style.borderRadius = "50%";
        el.style.background = m.color ?? "#dc2626";
        el.style.boxShadow = `0 0 0 ${Math.max(3, sizePx / 3)}px ${
          (m.color ?? "#dc2626") + "33"
        }`;
        el.style.cursor = "pointer";
        el.style.border = "2px solid white";

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat([m.lng, m.lat])
          .addTo(map);

        if (m.popup || m.popupEn) {
          const popupHtml = ko ? (m.popup ?? "") : (m.popupEn ?? m.popup ?? "");
          marker.setPopup(
            new mapboxgl.Popup({ offset: sizePx, closeButton: false })
              .setHTML(`<div style="font-size:12px;line-height:1.5;max-width:240px;">${popupHtml}</div>`)
          );
        }

        // 라벨 (마커 옆에 항상 표시)
        if (m.label || m.labelEn) {
          const labelEl = document.createElement("div");
          labelEl.textContent = ko ? (m.label ?? "") : (m.labelEn ?? m.label ?? "");
          labelEl.style.fontSize = "11px";
          labelEl.style.fontWeight = "600";
          labelEl.style.color = "#111";
          labelEl.style.padding = "2px 6px";
          labelEl.style.background = "rgba(255,255,255,0.92)";
          labelEl.style.borderRadius = "4px";
          labelEl.style.whiteSpace = "nowrap";
          labelEl.style.pointerEvents = "none";
          labelEl.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
          new mapboxgl.Marker({
            element: labelEl,
            offset: [0, -sizePx - 6],
            anchor: "bottom",
          })
            .setLngLat([m.lng, m.lat])
            .addTo(map);
        }
      }
    });

    map.on("error", (e) => {
      // eslint-disable-next-line no-console
      console.warn("[InteractiveMap]", e);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 마운트 시 한 번만 — 동적 변경은 별도 effect로 처리 필요 시 추가

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden my-8"
    >
      {/* Header */}
      {(title || titleEn) && (
        <div className="px-5 sm:px-6 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            {ko ? "지도" : "Map"}
          </p>
          <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100">
            {ko ? title : (titleEn ?? title)}
          </h3>
        </div>
      )}

      {/* Map container */}
      <div className="relative" style={{ height: `${height}px` }}>
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="text-center px-6">
              <p className="text-3xl mb-2">🗺️</p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-1">{error}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
                .env.local에 NEXT_PUBLIC_MAPBOX_TOKEN을 추가하세요
              </p>
            </div>
          </div>
        ) : (
          <>
            <div ref={containerRef} className="absolute inset-0" />
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-[1]">
                <span className="text-[11px] text-gray-400 dark:text-gray-500 animate-pulse">
                  {ko ? "지도 불러오는 중..." : "Loading map..."}
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Caption */}
      {(caption || captionEn) && (
        <figcaption className="px-5 sm:px-6 py-3 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-400 dark:text-gray-500 italic leading-relaxed">
          {ko ? caption : (captionEn ?? caption)}
        </figcaption>
      )}
    </motion.figure>
  );
}
