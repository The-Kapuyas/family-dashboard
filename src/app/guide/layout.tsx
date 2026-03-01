import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder's Guide — How to Build a Web App",
  description:
    "Interactive architecture map showing every tool you need to build and deploy a web app from scratch.",
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
