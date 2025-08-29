import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface SectionTitleProps {
  children?: ReactNode;
  variant?: "beige" | "blue";
  type?: "bordered" | "solid";
  className?: string;
}

export default function SectionTitle({
  children,
  variant = "beige",
  type = "solid",
  className = "",
}: SectionTitleProps) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeInAnimation({ x: -30 })}
      className={`w-fit font-evolenta text-[14px] lg:text-[16px] leading-[120%] font-normal uppercase rounded-full px-3 py-1 ${className}
      ${
        variant === "beige"
          ? type === "solid"
            ? "text-white bg-beige/80"
            : "text-beige bg-white border-[1.8px] border-beige/80"
          : type === "solid"
          ? "text-white bg-blue/80"
          : "text-blue bg-white border-[1.8px] border-blue/80"
      }
      ${variant === "beige" ? "bg-beige/80" : "bg-blue/80"}`}
    >
      {children}
    </motion.h2>
  );
}
