import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayPlay",
  description: "Control inteligente de dispositivos",
  icons: {
    icon: "/image/image_logo.png",
    shortcut: "/image/image_logo.png",
    apple: "/image/image_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans bg-white text-zinc-900 selection:bg-[rgb(217,61,47)] selection:text-white`}
      >

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}