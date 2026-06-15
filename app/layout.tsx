/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers";
import RootLayoutClient from "./root-layout-client";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AHS Properties & Development | Premium Real Estate",
  description:
    "Discover premium properties and development projects. Explore villas, apartments, and investment opportunities with AHS Properties & Development.",
  keywords: [
    "real estate",
    "properties",
    "villas",
    "apartments",
    "investment",
    "development projects",
  ],
  authors: [{ name: "AHS Properties & Development" }],
  openGraph: {
    title: "AHS Properties & Development",
    description:
      "Premium Properties & Development. Transforming real estate dreams into reality.",
    type: "website",
    siteName: "AHS Properties & Development",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta name="theme-color" content="#fafaf9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="h-full flex flex-col antialiased"
        style={{ backgroundColor: "#f5f5ecff" }}
      >
        <AppProvider>
          <RootLayoutClient>{children}</RootLayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}