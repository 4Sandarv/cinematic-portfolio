import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandarv Lamichhane | Full Stack Developer | Machine Learning Enthusiast",
  description: "Portfolio of Sandarv Lamichhane, a Computer Engineering student specializing in Flask, Machine Learning, and intelligent web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-[#121212]">{children}</body>
    </html>
  );
}
