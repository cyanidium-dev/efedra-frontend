import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Category } from "@/types/category";

interface ApproachProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Approach({ category, variant }: ApproachProps) {
  return (
    <section className="pt-15 lg:py-11">
      <Container>
        <SectionTitle variant={variant}>наш підхід</SectionTitle>
        <p className="max-w-[386px] mb-7 lg:mb-0 font-evolenta text-[24px] font-normal leading-[133%] uppercase italic">
          Дбаємо про вас на кожному етапі
        </p>
      </Container>
    </section>
  );
}
