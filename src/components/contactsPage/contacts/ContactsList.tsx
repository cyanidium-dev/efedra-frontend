import * as motion from "motion/react-client";

import { leftContactItems, rightContactItems } from "./data";
import { listItemVariants, listVariants } from "@/utils/animationVariants";

export default function ContactsList() {
  return (
    <div className="flex flex-col min-[360px]:flex-row gap-[24px] md:gap-8 lg:gap-[80px] xl:gap-[137px] md:pt-[56px] md:w-[49%]">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
        className="flex flex-col gap-[15px] md:gap-6 lg:gap-12"
      >
        {leftContactItems.map((item, idx) => (
          <motion.li
            key={idx}
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            className="max-w-[130px] md:max-w-[150px] lg:max-w-[180px]"
          >
            <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
              {item.label}
            </span>

            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block transition-colors duration-300 hover:text-beige"
              >
                <span className="block text-[12px] lg:text-[15px] leading-[125%] md:leading-[154%] font-medium">
                  {item.value}
                </span>
              </a>
            ) : (
              <span className="block text-[12px] lg:text-[15px] font-medium leading-[150%] md:leading-[154%] md:max-w-[130px] lg:max-w-[160px]">
                {item.value}
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
        className="flex-1 flex flex-col gap-[15px] md:gap-6 lg:gap-12"
      >
        {rightContactItems.map((item, idx) => (
          <motion.li
            key={idx}
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
          >
            <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
              {item.label}
            </span>

            {item.href ? (
              Array.isArray(item.value) ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block transition-colors duration-300 hover:text-beige"
                >
                  {item.value.map((value, i) => (
                    <span
                      key={i}
                      className="block text-[12px] lg:text-[15px] font-medium leading-[150%] md:leading-[154%]"
                    >
                      {value}
                    </span>
                  ))}
                </a>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block transition-colors duration-300 hover:text-beige"
                >
                  <span className="block text-[12px] lg:text-[15px] font-medium leading-[125%] md:leading-[154%]">
                    {item.value}
                  </span>
                </a>
              )
            ) : (
              <span className="block text-[12px] lg:text-[15px] font-medium leading-[125%]">
                {item.value}
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
