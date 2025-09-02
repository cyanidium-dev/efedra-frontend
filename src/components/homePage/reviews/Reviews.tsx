import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Reviews() {
  return (
    <section id="reviews" className="pt-15 lg:pt-16 lg:pb-[115px] scroll-mt-11">
      <Container>
        <SectionTitle>Відгуки наших клієнтів</SectionTitle>
        <p className="max-w-[544px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase text-blue">
          Вони вже довірили нам свою красу - тепер{" "}
          <span className="italic">ваша черга</span>!
        </p>
      </Container>
    </section>
  );
}
