import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import BenefitItem from "./BenefitItem";

export default function BenefitsList() {
  const benefitsList = [
    { value: "10+", description: "років досвіду" },
    { value: "100%", description: "сертифіковані фахівці" },
    { value: "1000+", description: "задоволених відвідувачів" },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.3 })}
      className="flex flex-col sm:flex-row gap-3.5 xl:gap-5"
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} idx={idx} />
      ))}
    </motion.ul>
  );
}
