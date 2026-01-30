import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreib Diana eine Nachricht – Fragen, Feedback oder Zusammenarbeit. Antwort innerhalb von 2-3 Werktagen.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
