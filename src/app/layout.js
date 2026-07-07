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

export const metadata = {
  title: "Portfolio | AI-Assisted Full Stack Developer",
  description: "Personal portfolio showcasing Next.js, Supabase, Stripe, and AI development skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${robotoMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
