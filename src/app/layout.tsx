import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PORTFOLIO | SYED ABU - TALIB",
  description:
    "Im A Software Developer who creates seamless, scalable, and visually stunning web and mobile applications. With expertise in React.js, Next.js, Laravel and alot more , I blend functionality with aesthetics to deliver impactful solutions. Known for my creative problem-solving , I bridge the gap between frontend and backend with precision, ensuring every detail contributes to an exceptional user experience. who crafts seamless, scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
