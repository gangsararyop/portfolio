import { ImageResponse } from "next/og";

export const alt = "Gangsar Aryo — Web Developer for Startups & Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          backgroundColor: "#030608",
          color: "#e1ecf3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            backgroundColor: "#0f1620",
            color: "#bb795a",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          GA
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.2 }}>
          Gangsar Aryo
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 16,
            color: "#98b7d4",
          }}
        >
          Web developer for startups & local businesses
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "#e1ecf3" }}>
          Landing pages · Web apps · E-commerce · Management systems
        </div>
      </div>
    ),
    { ...size }
  );
}
