import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Wissen für verantwortungsvolle Pferdebesitzer. Fundiert recherchiert, verständlich erklärt, im Alltag getestet.",
  openGraph: {
    title: "Blog | Pferdesicht",
    description:
      "Wissen für verantwortungsvolle Pferdebesitzer – fundiert recherchiert und im Alltag getestet.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
