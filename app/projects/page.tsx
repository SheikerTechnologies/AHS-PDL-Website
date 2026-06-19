/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import ProjectsRouteClient from "./page-client";

export const metadata: Metadata = {
  title: "Projects | AHS Properties & Development Ltd.",
  description:
    "Explore premium development projects by AHS Properties & Development Ltd. in Jolshiri Abashon and Dhaka: apartments, villas, duplexes and investment opportunities.",
  openGraph: {
    title: "Projects - AHS Properties & Development Ltd.",
    description:
      "Premium real estate development projects in Bangladesh. Explore apartments, villas, duplexes, and investment opportunities in Jolshiri Abashon and Dhaka.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AHS Properties & Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - AHS Properties & Development Ltd.",
    description:
      "Premium real estate development projects in Bangladesh. Explore apartments, villas, duplexes, and investment opportunities in Jolshiri Abashon and Dhaka.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://ahspdl.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsRouteClient />;
}
