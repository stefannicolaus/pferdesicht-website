import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Evidenzbasiertes Wissen für verantwortungsvolle Pferdebesitzer. Fundiert recherchiert, verständlich erklärt.",
  openGraph: {
    title: "Blog | Pferdesicht",
    description:
      "Evidenzbasiertes Wissen für verantwortungsvolle Pferdebesitzer.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
