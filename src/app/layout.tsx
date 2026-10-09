import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://achmadzacky.my.id";

export const viewport: Viewport = {
  themeColor: "#0f1221",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmad Zaki — Full-Stack Developer & Laravel Specialist",
    template: "%s | Ahmad Zaki",
  },
  description:
    "Official portfolio of Ahmad Zaki, Full-Stack Web Developer & D3 Informatics Management Graduate from Politeknik Piksi Input Serang. Specializing in Laravel, Next.js, React, FastAPI, REST APIs, and scalable web solutions.",
  keywords: [
    "Ahmad Zaki",
    "Ahmad Zaki Portfolio",
    "Full-Stack Developer",
    "Web Developer Indonesia",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "FastAPI",
    "Python Developer",
    "PHP Developer",
    "MySQL Database",
    "PostgreSQL",
    "TailwindCSS",
    "Politeknik Piksi Input Serang",
    "Web Developer Serang Banten",
  ],
  authors: [{ name: "Ahmad Zaki", url: "https://github.com/EasyItsMe" }],
  creator: "Ahmad Zaki",
  publisher: "Ahmad Zaki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
      "en-US": siteUrl,
    },
  },
  openGraph: {
    title: "Ahmad Zaki — Full-Stack Developer & Laravel Specialist",
    description:
      "Specialized in building scalable, responsive web applications with Laravel, Next.js, and modern AI/media toolkits.",
    url: siteUrl,
    siteName: "Ahmad Zaki Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/assets/profilaz1.jpeg",
        width: 800,
        height: 800,
        alt: "Ahmad Zaki — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Zaki — Full-Stack Developer",
    description:
      "Full-Stack Web Developer specialized in Laravel, Next.js, and modern web architectures.",
    images: ["/assets/profilaz1.jpeg"],
    creator: "@EasyItsMe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/profilaz1.jpeg",
    apple: "/assets/profilaz1.jpeg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ahmad Zaki",
        url: siteUrl,
        image: `${siteUrl}/assets/profilaz1.jpeg`,
        jobTitle: "Full-Stack Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance & Personal Projects",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Politeknik Piksi Input Serang",
        },
        sameAs: [
          "https://github.com/EasyItsMe",
          "https://wa.me/6283150828377",
        ],
        knowsAbout: [
          "Laravel",
          "Next.js",
          "React",
          "FastAPI",
          "Python",
          "PHP",
          "TypeScript",
          "JavaScript",
          "MySQL",
          "PostgreSQL",
          "Tailwind CSS",
          "Docker",
          "Git & GitHub",
          "REST APIs",
          "Data Analysis",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Ahmad Zaki Portfolio",
        description:
          "Official portfolio of Ahmad Zaki, Full-Stack Web Developer & Informatics Management Graduate.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: ["id", "en"],
      },
    ],
  };

  return (
    <html lang="id" className={`${dmSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
