import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"]
});

const frauncesFont = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"]
});

export const metadata: Metadata = {
  title: "sunnyside",
  description: "your digital marketing here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowFont.variable} ${frauncesFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
