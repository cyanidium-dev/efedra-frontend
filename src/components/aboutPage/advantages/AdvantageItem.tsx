import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface AdvantageItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  idx?: number;
}

export default function AdvantageItem({
  title,
  description,
  icon,
  idx,
}: AdvantageItemProps) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
      className={`flex bg-gray-light min-[360px]:h-[140px] md:h-[130px] leading-[125%] rounded-[16px] md:rounded-[40px] p-4 min-[360px]:p-0 md:w-full md:max-w-[320px] lg:max-w-[420px] xl:max-w-[448px] ${
        idx === 0
          ? "md:ml-[30px] lg:mb-[38px] xl:ml-[177px]"
          : idx === 2
          ? "xl:ml-[27px] lg:mb-[29px]"
          : idx === 3
          ? "md:ml-[30px] xl:ml-[177px]"
          : "ml-0 lg:mb-[38px]"
      }`}
    >
      <div className="flex justify-between items-center mx-auto my-auto w-full md:max-w-[300px] lg:max-w-[390px] xl:max-w-[404px]">
        <div className="hidden md:inline-block w-[55px] h-[55px] lg:w-[65px] lg:h-[65px]">
          {icon}
        </div>
        <div className="flex flex-col mx-auto my-auto md:mx-0 md:my-0 gap-1 md:gap-[10.38px]">
          <div className="flex xs:items-center gap-1 min-[360px]:gap-[15.5px] max-w-[250px] xs:max-w-[360px] md:max-w-[325px]">
            <div className="md:hidden w-[35px] h-[35px]">{icon}</div>
            <h3 className=" text-[12px] min-[360px]:text-[16px] uppercase font-evolenta">
              {title}
            </h3>
          </div>
          <p className="text-[12px] md:text-[13px] text-gray-600 max-w-[254px] xs:max-w-[360px] md:max-w-[260px] lg:max-w-[305px] font-light">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
