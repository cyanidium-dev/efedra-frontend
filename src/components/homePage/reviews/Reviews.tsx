import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import RateUs from "./RateUs";
import ReviewsSlider from "./ReviewsSlider";

export default function Reviews() {
  return (
    <section id="reviews" className="pt-15 lg:pt-16 lg:pb-[115px] scroll-mt-11">
      <Container>
        <SectionTitle>Відгуки наших клієнтів</SectionTitle>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 30 })}
          className="max-w-[544px] mb-10 lg:mb-3 font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase text-blue"
        >
          Вони вже довірили нам свою красу - тепер{" "}
          <span className="italic">ваша черга</span>!
        </motion.p>
        <RateUs />
        <ReviewsSlider />
      </Container>
    </section>
  );
}
