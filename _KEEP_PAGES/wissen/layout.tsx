import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wissen",
  description:
    "Artikel zu Pferdefütterung, Haltung, Thermoregulation und mehr. Von Diana recherchiert, sortiert und im Alltag getestet – verständlich und praxisnah.",
};

export default function WissenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
