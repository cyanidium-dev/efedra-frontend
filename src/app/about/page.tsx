import Advantages from "@/components/aboutPage/advantages/Advantages";
import CTA from "@/components/aboutPage/cta/CTA";
import Founders from "@/components/aboutPage/founders/Founders";
import Hero from "@/components/aboutPage/hero/Hero";
import Philosophy from "@/components/aboutPage/philosophy/Philosophy";
import Values from "@/components/aboutPage/values/Values";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MarqueeLine />
      <Philosophy />
      <Advantages />
      <Founders />
      <Values />
      <CTA />
    </>
  );
}
