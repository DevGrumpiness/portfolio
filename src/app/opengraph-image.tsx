import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d11",
          color: "#edeef1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#6d94f2", marginBottom: 24 }}>
          {siteConfig.location}
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#9a9fa8" }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 24, marginTop: 40, color: "#6d94f2" }}>
          React · Vue · TypeScript · JavaScript
        </div>
      </div>
    ),
    { ...size },
  );
}
