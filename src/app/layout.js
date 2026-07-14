import { Outfit, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Comprehensive SEO Metadata
export const metadata = {
  metadataBase: new URL('https://sahariarhossain.com'), // Replace with actual domain later
  title: {
    default: "Sahariar Hossain | AI Product Engineer",
    template: "%s | Sahariar Hossain"
  },
  description: "AI Product Engineer specializing in Next.js, React, TypeScript, and modern LLM integrations. Building production-ready full-stack applications and internal tools.",
  keywords: ["AI Product Engineer", "Next.js Developer", "React Developer", "Software Engineer", "Full Stack Developer", "LLM APIs", "TypeScript", "JavaScript", "Bangladesh"],
  authors: [{ name: "Sahariar Hossain", url: "https://github.com/sahariarhossain524-sketch" }],
  creator: "Sahariar Hossain",
  openGraph: {
    title: "Sahariar Hossain | AI Product Engineer",
    description: "I design, build and ship AI products that solve real business problems using Next.js, TypeScript, PostgreSQL, and modern LLM APIs.",
    url: "https://sahariarhossain.com",
    siteName: "Sahariar Hossain Portfolio",
    images: [
      {
        url: "/og-image.png", // Will need to be created/added by user later
        width: 1200,
        height: 630,
        alt: "Sahariar Hossain - AI Product Engineer",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahariar Hossain | AI Product Engineer",
    description: "Building AI-native Internal Tools, Automation Platforms & Production-Ready Full-Stack Applications.",
    creator: "@SahariarHossain", // Replace with actual handle
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sahariarhossain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sahariar Hossain",
  "jobTitle": "AI Product Engineer",
  "url": "https://sahariarhossain.com",
  "sameAs": [
    "https://github.com/sahariarhossain524-sketch",
    "https://www.linkedin.com/in/sahariarhossain"
  ],
  "knowsAbout": ["Artificial Intelligence", "Next.js", "React.js", "TypeScript", "Node.js", "Full Stack Development", "Prompt Engineering"]
};

import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${robotoMono.variable}`}>
      <head>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
