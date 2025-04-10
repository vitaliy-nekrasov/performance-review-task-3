import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get Current Weather | WeatherApp",
  description: "Get Current Weather in Your City",
  keywords: ['weather', 'next.js'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikSans.variable} antialiased grid grid-cols-12 mx-7 relative`}
      >
        <header className="py-4">
          <Link href="/" className="w-[100px] block">
            <img src="/logo.webp" alt="Logo" width={100} height={100} />
          </Link>
          <span className="absolute w-full h-[2px] bg-[#d8c3a5] left-0 top-[120px]"></span>
        </header>
        <main className="pt-[20px]">{children}</main>
      </body>
    </html>
  );
}
