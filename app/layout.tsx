/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers";
import RootLayoutClient from "./root-layout-client";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "AHS Properties & Development Ltd.",
  url: "https://ahspdl.com",
  logo: "https://ahspdl.com/assets/ahspdLogoL.png",
  image: "https://ahspdl.com/assets/ahspdLogoL.png",
  description:
    "Premium real estate development company in Bangladesh specializing in residential plots, apartments, villas, and luxury properties in Jolshiri Abashon and Dhaka.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "W-20/2, 67/1, China Town, VIP Road, Naya Palton",
    addressLocality: "Dhaka",
    addressCountry: "BD",
    postalCode: "1000",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+880-1625-555700",
    contactType: "customer service",
    email: "ahspropertiesdevelopmentltd@gmail.com",
  },
  sameAs: [
    "https://facebook.com/ahsp",
    "https://instagram.com/ahsp",
  ],
  foundingDate: "1995",
  founder: {
    "@type": "Person",
    name: "Md. Sohanur Rahman Sohan",
    jobTitle: "Chief Executive Officer",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Dhaka",
    },
    {
      "@type": "Country",
      name: "Bangladesh",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium Residential Plots",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Villas & Apartments",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advisory",
        },
      },
    ],
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ahspdl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "Bangladesh",
    "Jolshiri Abashon",
  ],
  authors: [{ name: "AHS Properties & Development" }],
  alternates: {
    languages: {
      "en": siteUrl,
      "bn": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "AHS Properties & Development",
    description:
      "Premium Properties & Development. Transforming real estate dreams into reality.",
    type: "website",
    siteName: "AHS Properties & Development",
    url: siteUrl,
    images: [
      {
        url: "/assets/ahspdLogoL.png",
        width: 600,
        height: 200,
        alt: "AHS Properties & Development Ltd.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "AHS Properties & Development",
    description:
      "Premium Properties & Development. Transforming real estate dreams into reality.",
    images: ["/assets/ahspdLogoL.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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