import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default async function Blog() {
  return (
    <section className="pt-15 lg:py-[95px] lg:mb-6">
      <Container>
        <div className="flex flex-col md:flex-row-reverse sm:justify-between gap-6 mb-10 lg:mb-4.5">
          <SectionTitle className="shrink-0">
            Блог і корисні матеріали
          </SectionTitle>
          <p className="max-w-[520px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[120%] uppercase text-blue">
            довіряй лише перевіреній інформації
          </p>
        </div>
      </Container>
    </section>
  );
}
