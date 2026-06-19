/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import AboutRouteClient from "./page-client";

export const metadata: Metadata = {
  title: "About | AHS Properties & Development Ltd.",
  description:
    "Learn about AHS Properties & Development Ltd. — a premier real estate developer in Bangladesh with over 30 years of experience, led by distinguished military and civil leaders.",
  openGraph: {
    title: "About AHS Properties & Development Ltd.",
    description:
      "Building Trust, Delivering Excellence. Premier real estate development in Bangladesh.",
  },
};

export default function AboutRoute() {
  return <AboutRouteClient />;
}
