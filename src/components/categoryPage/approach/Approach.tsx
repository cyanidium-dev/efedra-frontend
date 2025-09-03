import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Category } from "@/types/category";
import Image from "next/image";
import ApproachList from "./ApproachList";

interface ApproachProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Approach({ category, variant }: ApproachProps) {
  const { approach } = category;
  const { imageMob, imageDesk, imageTwo, list } = approach;

  return (
    <section className="pt-15 lg:py-11">
      <Container>
        <SectionTitle variant={variant}>наш підхід</SectionTitle>
        <p className="max-w-[386px] mb-7 xl:mb-0 font-evolenta text-[24px] font-normal leading-[133%] uppercase italic">
          Дбаємо про вас на кожному етапі
        </p>
        <div className="flex flex-col gap-8 sm:flex-row items-end">
          <div className="flex gap-3 mx-auto lg:ml-40 xl:ml-[153px] lg:mx-0 xl:-mt-4">
            <Image
              src={imageMob}
              alt="icons"
              width="117"
              height="340"
              className="xl:hidden"
            />
            <Image
              src={imageDesk}
              alt="icons"
              width="230"
              height="609"
              className="hidden xl:block"
            />
            <ApproachList list={list} variant={variant} />
          </div>
          <div className="w-fit mx-auto sm:mx-0">
            <Image
              src={imageTwo}
              alt="approach image"
              width="296"
              height="320"
              className="w-[296px] lg:w-[340px] xl:w-[541px] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
