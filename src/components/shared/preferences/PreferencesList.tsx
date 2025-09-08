import * as motion from "motion/react-client";

import { IPreferenceItem } from "@/types/preference";
import { fadeInAnimation, listVariants } from "@/utils/animationVariants";
import PreferenceItem from "./PreferenceItem";

interface PreferencesListProps {
  title: string;
  preferences: IPreferenceItem[];
}

export default function PreferencesList({
  title,
  preferences,
}: PreferencesListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
      className="lg:pt-5 flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-20 lg:gap-x-10 xl:gap-x-[53px] sm:gap-y-10 xl:gap-y-15"
    >
      <motion.h3
        variants={fadeInAnimation({ x: 30 })}
        className="font-evolenta text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[32px] uppercase italic leading-[135%] mb-5 min-[400px]:mb-8 sm:mb-0 max-w-[280px] min-[400px]:max-w-full sm:max-w-[220px] md:max-w-[280px] lg:max-w-[220px] xl:max-w-[320px] min-[400px]:text-center sm:text-start"
      >
        {title}
      </motion.h3>

      <motion.ul className="flex flex-col items-center space-y-[44px] sm:space-y-0 sm:contents">
        {preferences.map((preference, idx) => (
          <PreferenceItem key={idx} preference={preference} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
