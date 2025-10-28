import { notFound } from "next/navigation";
import { eventsData } from "../data/eventsData";
import EventDetailClient from "./EventDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all event slugs
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) return notFound();

  return <EventDetailClient event={event} />;
}
