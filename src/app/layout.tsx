import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Abderazek Benhadjmbarek | Full Stack & AI Developer | Data Science Engineer",
  description:
    "Portfolio of Abderazek Benhadjmbarek — Full Stack & AI Developer and Data Science & AI Engineering student at TEK-UP. Specialized in MERN, Flutter, RAG systems, and applied AI solutions.",
  keywords: [
    "Abderazek Benhadjmbarek",
    "Data Science",
    "Artificial Intelligence",
    "Full Stack Developer",
    "AI Developer",
    "MERN Stack",
    "Flutter",
    "RAG",
    "LLaMA",
    "PyTorch",
    "Tunisia Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abderazek Benhadjmbarek", url: "https://github.com/Abderrazekk" }],
  creator: "Abderazek Benhadjmbarek",
  openGraph: {
    title: "Abderazek Benhadjmbarek | Full Stack & AI Developer",
    description:
      "Data Science & AI Engineering student at TEK-UP with proven experience in full-stack web, mobile development, and applied AI systems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-background-2),var(--color-background)_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
