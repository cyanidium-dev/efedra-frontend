import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface BenefitItemProps {
  benefit: { value: string; description: string };
  idx: number;
}

export default function BenefitItem({ benefit, idx }: BenefitItemProps) {
  const { value, description } = benefit;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`flex flex-col items-center justify-center w-full sm:w-[calc(33.3%-10.67px)] h-[131px] xl:h-[173px] p-3 rounded-[16px] ${
        idx === 0
          ? "text-blue bg-blue-light"
          : idx === 1
          ? "text-white bg-beige"
          : "text-white bg-blue"
      }`}
    >
      <p className="mb-3 lg:mb-0 font-evolenta text-[48px] md:text-[36px] lg:text-[54px] font-normal leading-[120%] lg:leading-[133%] uppercase text-center">
        {value}
      </p>
      <p className="text-[12px] lg:text-[14px] font-normal leading-[120%] text-center">
        {description}
      </p>
    </motion.li>
  );
}
