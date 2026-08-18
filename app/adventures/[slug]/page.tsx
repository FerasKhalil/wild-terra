import { adventures } from "@/app/data/adventures";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AdventureDetailClient from "./page.client";

export async function generateStaticParams() {
  return adventures.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const adventure = adventures.find((a) => a.slug === slug);
  if (!adventure) return { title: "Adventure Not Found" };
  return {
    title: `${adventure.title} | WildTerra Travel`,
    description: adventure.description.slice(0, 160),
  };
}

export default async function AdventureDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const adventure = adventures.find((a) => a.slug === slug);

  if (!adventure) {
    notFound();
  }

  return <AdventureDetailClient adventure={adventure} />;
}
