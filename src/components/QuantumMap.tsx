"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { QuantumMapMarker } from "@/data/notes";
import type { Lang } from "@/lib/i18n";

interface Props {
  markers: QuantumMapMarker[];
  center?: [number, number];  // [lng, lat]
  zoom?: number;
  lang: Lang;
}

const TYPE_COLORS: Record<QuantumMapMarker["type"], string> = {
  company: "#8b5cf6",      // violet
  lab: "#0ea5e9",          // sky
  university: "#10b981",   // emerald
  consortium: "#f59e0b",   // amber
};

export default function QuantumMap({ markers, center = [10, 30], zoom = 1.5, lang }: Props) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("NEXT_PUBLIC_MAPBOX_TOKEN is not set");
      return;
    }
    mapboxgl.accessToken = token;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center,
      zoom,
      projection: "mercator",
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    mapRef.current.on("load", () => {
      markers.forEach((m) => {
        const color = TYPE_COLORS[m.type];
        const name = lang === "en" ? (m.nameEn ?? m.name) : m.name;

        const popupHtml = `
          <div style="min-width:180px;font-family:system-ui;padding:4px;">
            <div style="font-weight:700;font-size:13px;margin-bottom:4px;color:#111;">${m.country} ${name}</div>
            ${m.lead ? `<div style="font-size:11px;color:#444;margin-bottom:2px;">${lang === "en" ? "Lead" : "리드"}: ${m.lead}</div>` : ""}
            ${m.approach ? `<div style="font-size:11px;color:#444;margin-bottom:2px;">${lang === "en" ? "Approach" : "방식"}: ${m.approach}</div>` : ""}
            ${m.qubits ? `<div style="font-size:11px;color:#444;margin-bottom:2px;">${lang === "en" ? "Qubits" : "큐비트"}: <b>${m.qubits.toLocaleString()}</b></div>` : ""}
            ${m.capital ? `<div style="font-size:11px;color:#444;">${lang === "en" ? "Capital" : "자본"}: <b>${m.capital}</b></div>` : ""}
          </div>
        `;

        new mapboxgl.Marker({ color })
          .setLngLat([m.lng, m.lat])
          .setPopup(new mapboxgl.Popup({ offset: 22, closeButton: false }).setHTML(popupHtml))
          .addTo(mapRef.current!);
      });
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={mapContainer}
        className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/60"
        style={{ height: 480 }}
      />
      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-lg px-3 py-2 text-[10px] space-y-1 shadow-md border border-gray-200 dark:border-gray-700">
        <div className="font-bold text-gray-700 dark:text-gray-200 mb-1">{lang === "en" ? "Type" : "유형"}</div>
        {(Object.entries(TYPE_COLORS) as [QuantumMapMarker["type"], string][]).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="text-gray-600 dark:text-gray-400 capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
