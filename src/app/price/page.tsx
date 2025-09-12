import ServiceHero from "@/components/shared/hero/ServiceHero";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function PricePage() {
  return (
    <>
      <ServiceHero
        title="Прайс-лист"
        image="/images/pricePage/hero/price.webp"
      />
      <MarqueeLine variant="blue" />
    </>
  );
}
