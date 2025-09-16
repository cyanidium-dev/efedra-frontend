import Advantages from "@/components/servicePage/advantages/Advantages";
import Contraindications from "@/components/servicePage/contraindications/Contraindications";
import Cost from "@/components/servicePage/cost/Cost";
import Description from "@/components/servicePage/description/Description";
import HowItGoes from "@/components/servicePage/howItGoes/HowItGoes";
import Types from "@/components/servicePage/types/Types";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";
import MeetCenterCTA from "@/components/shared/cta/MeetCenterCTA";
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

  const { category } = currentService;

  const variant = currentService?.category === "dentistry" ? "blue" : "beige";

  return (
    <>
      <Suspense fallback={<Loader />}>
        <VerticalTitleHero
          title={currentService?.title}
          image={currentService?.mainImage}
        />
        <MarqueeLine variant={variant} />
        <Description variant={variant} service={currentService} />
        <HowItGoes variant={variant} service={currentService} />
        <Advantages variant={variant} service={currentService} />
        <Contraindications variant={variant} service={currentService} />
        <Types variant={variant} service={currentService} />
      </Suspense>
      <Cost variant={variant} />
      {category === "dentistry" ? (
        <MeetCenterCTA
          imageOne="/images/shared/cosmetic-procedure.webp"
          imageTwo="/images/blogPage/hero/imageTwo.webp"
          className="py-15 lg:py-25"
        />
      ) : (
        <CTAFormWithBackground
          buttonVariant={variant}
          image="/images/aboutPage/cta/cta.webp"
          className="py-15 lg:py-25"
        />
      )}
    </>
  );
}
