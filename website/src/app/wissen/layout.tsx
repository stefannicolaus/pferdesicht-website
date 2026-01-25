import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wissen",
  description:
    "Evidenzbasierte Artikel zu Pferdefütterung, Haltung, Thermoregulation und mehr. Fundiertes Wissen von Diana – sortiert, verständlich und praxisnah.",
};

export default function WissenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
