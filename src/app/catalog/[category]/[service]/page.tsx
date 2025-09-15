import Hero from "@/components/servicePage/hero/Hero";
import VerticalTitleHero from "@/components/shared/hero/VerticalTitleHero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { serviceBySlugQuery } from "@/lib/queries";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { Suspense } from "react";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export default async function ServicePpage({ params }: ServicePageProps) {
  const { service } = await params;

  const currentService = await fetchSanityDataServer(serviceBySlugQuery, {
    slug: service,
  });

  if (!currentService) return null;

  const variant = currentService?.category === "dentistry" ? "blue" : "beige";

  return (
    <>
      <Suspense fallback={<Loader />}>
        <VerticalTitleHero
          title={currentService?.title}
          image={currentService?.mainImage}
        />
        <MarqueeLine variant={variant} />
      </Suspense>
    </>
  );
}
