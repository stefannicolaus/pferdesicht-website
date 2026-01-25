import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frühlings-Guide für Pferdebesitzer",
  description:
    "Alles über Anweiden, Fellwechsel, Fütterung und Parasiten – fundiert recherchiert, im Alltag getestet. 4 Module, über 25.000 Wörter für 47 €.",
  openGraph: {
    title: "Frühlings-Guide für Pferdebesitzer | Pferdesicht",
    description:
      "Alles über Anweiden, Fellwechsel, Fütterung und Parasiten – fundiert recherchiert und im Alltag getestet.",
  },
};

export default function FruehlingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
