import Container from "@/components/shared/container/Container";

export default function Hero() {
  return (
    <section className="pt-3.5 pb-12 lg:pt-[42px] lg:pb-[105px]">
      <Container className="flex flex-col gap-[26px]">
        <div className="relative rounded-[20px] overflow-hidden"></div>
        <div></div>
      </Container>
    </section>
  );
}
