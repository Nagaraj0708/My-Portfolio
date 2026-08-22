import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nagaraj K — Front-End Developer | Angular & TypeScript",
    template: "%s | Nagaraj K",
  },
  description: siteConfig.description,
  keywords: [
    "Nagaraj K",
    "Front-End Developer",
    "Angular Developer",
    "TypeScript",
    "UI Engineering",
    ".NET Integration",
    "ASP.NET Core",
    "Chennai",
    "India",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Nagaraj K — Front-End Developer | Angular & TypeScript",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nagaraj K — Front-End Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagaraj K — Front-End Developer | Angular & TypeScript",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "ASP.NET Core",
      ".NET Web API",
      "C#",
      "SQL Server",
      "Azure DevOps",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text-primary selection:bg-accent selection:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
