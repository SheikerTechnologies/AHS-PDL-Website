/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import ContactRouteClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact | AHS Properties & Development Ltd.",
  description:
    "Get in touch with AHS Properties & Development Ltd. Visit our offices in Dhaka Cantonment, Jolshiri Abashon, or Corporate HQ at China Town, VIP Road.",
  openGraph: {
    title: "Contact AHS Properties & Development Ltd.",
    description:
      "Visit our offices across Dhaka. Corporate HQ, Cantonment Office, and Jolshiri Site.",
  },
};

export default function ContactRoute() {
  return <ContactRouteClient />;
}
