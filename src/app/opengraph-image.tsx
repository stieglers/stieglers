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
          background: "linear-gradient(120deg, #050816 0%, #080D24 45%, #0A00F4 140%)",
          color: "white",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#A7B0C8" }}>
          SYNTRAX TECHNOLOGIES
        </div>
        <div style={{ marginTop: 28, fontSize: 64, fontWeight: 700, maxWidth: 900 }}>
          We engineer secure digital operations.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#A7B0C8" }}>
          Cybersecurity · Software · Infrastructure
        </div>
      </div>
    ),
    size,
  );
}