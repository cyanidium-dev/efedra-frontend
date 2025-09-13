import VerticalTitleHero from "@/components/shared/hero/VerticalTitleHero";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function PricePage() {
  return (
    <>
      <VerticalTitleHero
        title="Прайс-лист"
        image="/images/pricePage/hero/price.webp"
      />
      <MarqueeLine variant="blue" />
    </>
  );
}
