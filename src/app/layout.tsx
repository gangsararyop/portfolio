import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://gangsararyo.my.id";
const TITLE = "Gangsar Aryo — Web Developer for Startups & Local Businesses";
const DESCRIPTION =
  "Fullstack web developer building fast, modern websites, dashboards, and management systems for startups and local businesses. Get a working website that converts visitors into customers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web developer",
    "fullstack developer",
    "jasa pembuatan website",
    "landing page",
    "web app development",
    "Next.js developer",
    "Indonesia",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Gangsar Aryo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
