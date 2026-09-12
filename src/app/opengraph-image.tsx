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
          background:
            "radial-gradient(circle at 75% 35%, #17304a 0%, #0a1118 35%, #05080b 75%)",
          color: "#f4f7fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#6fb4ff", marginBottom: 24 }}>
          Web Developer · AI Automation · Real-world Solutions
        </div>
        <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.02 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, color: "#b7c0c9" }}>
          Building digital solutions that actually work.
        </div>
        <div style={{ fontSize: 22, marginTop: 42, color: "#6fb4ff" }}>
          React · Vue · TypeScript · Next.js · FastAPI · AI Automation
        </div>
      </div>
    ),
    { ...size },
  );
}
