import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5G Learning Platform - Tel-U x UTM",
  description: "Interactive 5G Telecommunications Lab & Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* suppressHydrationWarning: meredam warning dari ekstensi browser (mis. Grammarly) yang menyisipkan atribut ke <body> */}
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background font-sans text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}