import Container from "@/components/shared/container/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-3.5 pb-12 lg:pt-[42px] lg:pb-[105px]">
      <Container className="flex flex-col md:flex-row-reverse md:justify-end gap-[26px] md:gap-[76px] overflow-visible">
        <div className="relative md:aspect-[655/508] w-full md:w-[445px] lg:w-[545px] xl:w-[655px] h-[199px] sm:h-[239px] md:h-auto shrink-0">
          <div className="absolute -z-10 top-0 md:top-auto md:bottom-[42px] right-[-210px] md:right-auto md:left-[-102px] xl:left-[-152px] w-[305px] h-[305px] rounded-full bg-blue" />
          <div className="relative w-full h-full rounded-[20px] overflow-hidden">
            <Image
              src="/images/blogPage/hero/imageOne.webp"
              alt="background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-[calc(50%-14px)] lg:w-[calc(50%-56px)] shrink-0 md:mt-9">
          <div className="flex gap-4 justify-between items-center mb-[19px] md:mb-4">
            <h1 className="max-w-[377px] lg:max-w-[524px] font-evolenta text-[24px] lg:text-[36px] font-normal leading-[133%] uppercase">
              Блог Efedra: експертно й доступно
            </h1>
            <div className="md:hidden relative aspect-[115/94] w-auto h-[94px] xs:h-[140px] rounded-[20px] overflow-hidden shrink-0">
              <Image
                src="/images/blogPage/hero/imageTwo.webp"
                alt="background"
                fill
                priority
                className="object-cover object-[center_-56px] xs:object-[center_-89px]"
              />
            </div>
          </div>
          <p className="md:mb-[63px] md:max-w-[384px]">
            Ми віримо, що поінформованість — це впевненість. Тому ділимось
            знаннями, пояснюємо підходи та говоримо про естетику й медицину без
            перебільшень — чесно, ясно і з повагою до вас.
          </p>
          <div className="hidden md:block relative aspect-[280/229] w-auto h-[229px] rounded-[20px] overflow-hidden shrink-0">
            <Image
              src="/images/blogPage/hero/imageTwo.webp"
              alt="background"
              fill
              priority
              className="object-cover object-[center_-56px] xs:object-[center_-89px] md:object-[center_-139px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
