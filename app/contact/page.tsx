/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import ContactRouteClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact | AHS Properties & Development Ltd.",
  description:
    "Get in touch with AHS Properties & Development Ltd. Visit our offices in Dhaka Cantonment, Jolshiri Abashon, or Corporate HQ at China Town, VIP Road. Call 01625-555700.",
  openGraph: {
    title: "Contact AHS Properties & Development Ltd.",
    description:
      "Visit our offices across Dhaka. Corporate HQ at China Town, VIP Road, Cantonment Office, and Jolshiri Site. Call 01625-555700.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact AHS Properties & Development Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AHS Properties & Development Ltd.",
    description:
      "Visit our offices across Dhaka. Corporate HQ, Cantonment Office, and Jolshiri Site. Call 01625-555700.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://ahspdl.com/contact",
  },
};

export default function ContactRoute() {
  return <ContactRouteClient />;
}
