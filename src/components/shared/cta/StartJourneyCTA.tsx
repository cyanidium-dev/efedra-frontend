import Container from "../container/Container";

interface StartJourneyCTAProps {
  image: string;
  className?: string;
}

export default function StartJourneyCTA({
  image,
  className = "",
}: StartJourneyCTAProps) {
  return (
    <section>
      <Container></Container>
    </section>
  );
}
