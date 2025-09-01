import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-3 pb-[25px] lg:pt-[62px] lg:pb-[67px] overflow-hidden">
      <Container className="relative">
        <div className="absolute left-[calc(50%-640px)] top-[30px] -z-10 pointer-events-none w-[1063px] h-[868px]">
          <Image
            src="/images/homePage/hero/bgMob.webp"
            alt="background"
            width={1063}
            height={868}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col lg:items-center lg:ml-8 mb-[421px] lg:mb-[402px]">
          <div>
            <h1 className="max-w-[193px] lg:max-w-[307px] mb-4 font-evolenta text-[36px] lg:text-[62px] font-normal leading-[120%] uppercase">
              здоров'я та краса
            </h1>
            <p className="max-w-[193px] lg:max-w-[307px] font-evolenta text-[16px] lg:text-[20px] font-normal leading-[120%] uppercase">
              — у надійних руках
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <Link
            href="/dentistry"
            className="w-full max-w-[346px] mx-auto md:mx-0"
          >
            <MainButton className="lg:h-[69px] text-[16px] lg:text-[24px] font-medium">
              Стоматологія
            </MainButton>
          </Link>
          <Link
            href="/estetic-medicine"
            className="w-full max-w-[346px] mx-auto md:mx-0"
          >
            <MainButton
              variant="beige"
              className="lg:h-[69px] text-[16px] lg:text-[24px] font-medium"
            >
              Естетична медицина
            </MainButton>
          </Link>
        </div>
      </Container>
    </section>
  );
}
