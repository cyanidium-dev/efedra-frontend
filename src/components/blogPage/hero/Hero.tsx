import Container from "@/components/shared/container/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-3.5 pb-12 lg:pt-[42px] lg:pb-[105px]">
      <Container className="flex flex-col gap-[26px]">
        <div className="relative w-full h-[199px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/blogPage/hero/imageOne.webp"
            alt="background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex gap-6">
            <h1 className="font-evolenta text-[24px] font-normal leading-[133%] uppercase">
              Блог Efedra: експертно й доступно
            </h1>
            <div className="relative w-[115px] h-auto rounded-[20px] overflow-hidden shrink-0">
              <Image
                src="/images/blogPage/hero/imageTwo.webp"
                alt="background"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
