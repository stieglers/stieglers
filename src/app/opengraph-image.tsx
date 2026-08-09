import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Syntrax Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(120deg, #05014a 0%, #07017a 45%, #0a00f4 100%)",
          color: "white",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#c7c5ff" }}>
          SYNTRAX TECHNOLOGIES
        </div>
        <div style={{ marginTop: 28, fontSize: 64, fontWeight: 700, maxWidth: 900 }}>
          Secure Systems. Confident Digital Operations.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#94A3B8" }}>
          Cybersecurity · Enterprise Software · Infrastructure
        </div>
      </div>
    ),
    size,
  );
}