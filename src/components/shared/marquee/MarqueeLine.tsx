"use client";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { headerVariants } from "@/utils/animationVariants";

interface MarqueeLineProps {
  variant?: "beige" | "blue";
  className?: string;
}

export default function MarqueeLine({
  className = "",
  variant = "beige",
}: MarqueeLineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
    >
      <Marquee
        autoFill={true}
        speed={50}
        className={`h-[42px] lg:h-[76px] border-y lg:border-y-2 ${className} ${
          variant === "beige"
            ? "text-beige border-beige"
            : "text-blue border-blue"
        }`}
      >
        <span className="font-evolenta inline-block mx-[7.15px] lg:mx-[13px] text-[17px] lg:text-[30px] leading-none">
          efedra
        </span>
        <span className="font-evolenta inline-block mx-[7.15px] lg:mx-[13px] text-[17px] lg:text-[30px] leading-none">
          efedra
        </span>
        <span className="font-evolenta inline-block mx-[7.15px] lg:mx-[13px] text-[17px] lg:text-[30px] leading-none">
          efedra
        </span>
      </Marquee>
    </motion.div>
  );
}
