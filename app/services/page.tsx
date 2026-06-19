
import type { Metadata } from "next";
import ServicesPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Our Services | AHS Properties & Development Ltd.",
  description:
    "Explore premium real estate services: residential plots, master planned communities, infrastructure development, and end-to-end support in Jolshiri Abashon.",
  openGraph: {
    title: "Our Services - AHS Properties & Development Ltd.",
    description:
      "Building dreams in Jolshiri Abashon with world-class planning and execution.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
