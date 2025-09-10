import * as motion from "motion/react-client";
import Image from "next/image";

import Container from "@/components/shared/container/Container";
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from "@/utils/animationVariants";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import LinkedinIcon from "@/components/shared/icons/LinkedinIcon";
import { leftContactItems, rightContactItems } from "./data";

const icons = [<InstagramIcon />, <FacebookIcon />, <LinkedinIcon />];

export default function Contacts() {
  return (
    <section className="relative pt-[26px] pb-12 lg:pt-13 lg:pb-[78px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ x: -20 })}
        className="md:hidden absolute -right-[60%] min-[260px]:-right-[50%] min-[320px]:-right-[35%]  min-[360px]:-right-[30%] xs:-right-[20%] sm:-right-[15%] top-[46px] xs:top-[70px] sm:top-[120px] w-[207px] h-[208px] bg-blue rounded-full"
      ></motion.div>
      <Container>
        <div className="relative w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20 })}
            className="md:hidden relative w-[calc(80%+10px)] h-[93px] xs:h-[120px] sm:h-[160px] rounded-[16px] overflow-hidden mb-[17px]"
          >
            <Image
              src="/images/contactsPage/contacts/decoration.webp"
              alt="decoration"
              fill
              priority
              className="object-cover object-[20px_-55px] min-[480px]:object-[40px_-90px] sm:object-[30px_-110px] scale-[125%]"
            />
          </motion.div>
          <div className="md:flex md:gap-10 lg:gap-[56px]">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
              className="font-evolenta text-[24px] md:text-[28px] lg:text-[34px] xl:text-[48px] leading-[135%] uppercase max-w-[200px] xs:max-w-full md:max-w-[200px] lg:max-w-[235px] xl:max-w-[330px] mb-[17px] md:mb-0"
            >
              звʼязатися з нами <span className="italic">легко</span>!
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20 })}
              className="hidden md:block relative w-[calc(67%)] md:w-[calc(65%+30px)] h-[280px] lg:h-[356px] rounded-[20px] overflow-hidden z-2"
            >
              <Image
                src="/images/contactsPage/contacts/building.webp"
                alt="building"
                fill
                priority
                className="object-cover object-[20px_-55px] md:object-[center_31%] scale-[125%] md:scale-[130%]   xl:scale-none"
              />
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-[44px] md:gap-7 lg:gap-[35px] md:-mt-[14px]">
            <div className="flex  md:flex-col gap-4 md:gap-7 md:w-[48%]">
              <motion.ul
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.4 }}
                variants={listVariants({
                  staggerChildren: 0.3,
                  delayChildren: 0.3,
                })}
                className="relative flex flex-col md:flex-row gap-[29px] xs:gap-12 sm:gap-16 md:gap-[29px] pt-[3px] md:pt-0"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInAnimation({ x: -20 })}
                  className="hidden md:block absolute right-[22px] md:-top-[16px] lg:-top-[28px] xl:-top-[68px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] xl:w-[280px] xl:h-[280px] bg-blue rounded-full z-0"
                ></motion.div>
                {icons.map((icon, idx) => (
                  <motion.li
                    key={idx}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={listItemVariants}
                  >
                    {icon}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="relative w-[100%] -mr-[25px] md:mr-0 md:w-[100%] h-auto md:h-[200px] lg:h-[263px] rounded-[16px] md:rounded-[20px] overflow-hidden"
              >
                <Image
                  src="/images/contactsPage/contacts/map.webp"
                  alt="map"
                  fill
                  priority
                  className="object-cover "
                />
              </motion.div>
            </div>
            <div className="flex flex-col min-[360px]:flex-row gap-[24px] md:gap-8 lg:gap-[80px] xl:gap-[137px] md:w-[49%] md:pt-[56px]">
              <ul className="flex flex-col gap-[15px] md:gap-6 lg:gap-12">
                {leftContactItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="max-w-[130px] md:max-w-[150px] lg:max-w-[180px]"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block"
                      >
                        <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
                          {item.label}
                        </span>

                        <span className="block text-[12px] lg:text-[15px] leading-[125%] md:leading-[154%] font-medium">
                          {item.value}
                        </span>
                      </a>
                    ) : (
                      <>
                        <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
                          {item.label}
                        </span>
                        <span className="block text-[12px] lg:text-[15px] font-medium leading-[150%] md:leading-[154%] md:max-w-[130px] lg:max-w-[160px]">
                          {item.value}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="flex-1 flex flex-col gap-[15px] md:gap-6 lg:gap-12">
                {rightContactItems.map((item, idx) => (
                  <li key={idx}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block"
                      >
                        <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
                          {item.label}
                        </span>
                        {Array.isArray(item.value) ? (
                          item.value.map((value, i) => (
                            <span
                              key={i}
                              className="block text-[12px] lg:text-[15px] font-medium leading-[150%] md:leading-[154%]"
                            >
                              {value}
                            </span>
                          ))
                        ) : (
                          <span className="block text-[12px] lg:text-[15px] font-medium leading-[125%] md:leading-[154%]">
                            {item.value}
                          </span>
                        )}
                      </a>
                    ) : (
                      <>
                        <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
                          {item.label}
                        </span>
                        <span className="block text-[12px] lg:text-[15px] font-medium leading-[125%]">
                          {item.value}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
