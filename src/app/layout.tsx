import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Zaki — Full-Stack Developer",
  description:
    "Portfolio of Ahmad Zaki, Full-Stack Developer & D3 Informatics Management Graduate from Politeknik Piksi Input Serang. Specialized in Laravel, Next.js, React, FastAPI, and scalable web solutions.",
  keywords: [
    "Ahmad Zaki",
    "Full-Stack Developer",
    "Web Developer",
    "Informatics Management Graduate",
    "Laravel",
    "Next.js",
    "React",
    "FastAPI",
    "Python",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "TailwindCSS",
  ],
  authors: [{ name: "Ahmad Zaki" }],
  openGraph: {
    title: "Ahmad Zaki — Full-Stack Developer",
    description: "Specialized in scalable web applications with Laravel, Next.js, and modern AI/media toolkits.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="bg-orb orb-a" aria-hidden="true" />
        <div className="bg-orb orb-b" aria-hidden="true" />
        <div className="bg-orb orb-c" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
