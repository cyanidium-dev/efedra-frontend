import { Suspense } from "react";
import PriceList from "@/components/pricePage/PriceList/PriceList";
import VerticalTitleHero from "@/components/shared/hero/VerticalTitleHero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { allPriceCategoriesQuery } from "@/lib/queries";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";

export default async function PricePage() {
  const categories = await fetchSanityDataServer(allPriceCategoriesQuery);

  return (
    <>
      <VerticalTitleHero
        title="Прайс-лист"
        image="/images/pricePage/hero/price.webp"
      />
      <MarqueeLine variant="blue" />
      <Suspense fallback={<Loader />}>
        <PriceList categories={categories} />
      </Suspense>
    </>
  );
}
