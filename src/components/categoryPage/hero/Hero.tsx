import Container from "@/components/shared/container/Container";

interface HeroProps {
  variant: "blue" | "beige";
}

export default function Hero({ variant }: HeroProps) {
  return (
    <section>
      <Container></Container>
    </section>
  );
}
