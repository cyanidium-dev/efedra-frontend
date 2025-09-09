import Container from "../container/Container";

interface MeetCenterCTAProps {
  imageOne: string;
  imageTwo: string;
  className?: string;
}

export default function MeetCenterCTA({
  imageOne,
  imageTwo,
  className = "",
}: MeetCenterCTAProps) {
  return (
    <section className={className}>
      <Container></Container>
    </section>
  );
}
