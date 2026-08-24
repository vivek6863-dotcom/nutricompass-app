import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nutricompass.in"
  ),
  title: {
    default:
      "NutriCompass | Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    template: "%s | NutriCompass",
  },

  description:
    "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and nutritious recipes with NutriCompass.",

  applicationName: "NutriCompass",

  authors: [
    {
      name: "NutriCompass Team",
    },
  ],

  creator: "NutriCompass",
  publisher: "NutriCompass",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "NutriCompass",
    title:
      "NutriCompass | Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and nutritious recipes with NutriCompass.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NutriCompass | Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and nutritious recipes with NutriCompass.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        <GoogleTagManager gtmId="GTM-T3MB97GP" />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}