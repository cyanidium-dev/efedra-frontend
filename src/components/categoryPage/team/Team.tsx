import SectionTitle from "@/components/shared/titles/SectionTitle";
import Container from "@/components/shared/container/Container";
import TeamSlider from "./TeamSlider";
import { Doctor } from "@/types/doctor";

interface TeamProps {
  doctorsList: Doctor[];
  variant: "blue" | "beige";
}

export default function Team({ doctorsList, variant }: TeamProps) {
  if (!doctorsList) return null;

  return (
    <section className="pt-16 lg:pt-[154px] lg:pb-[77px]">
      <Container>
        <SectionTitle variant={variant}>Наша команда</SectionTitle>
      </Container>
      <div className="xl:max-w-[1280px] xl:px-15 xl:mx-auto">
        <TeamSlider doctorsList={doctorsList} variant={variant} />
      </div>
    </section>
  );
}
