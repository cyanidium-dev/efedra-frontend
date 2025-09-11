"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "@/components/shared/container/Container";
import MainButton from "@/components/shared/buttons/MainButton";

export default function CTAContacts() {
  return (
    <section className="py-[60px] md:py-[64px]">
      <Container className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          exit="exit"
          variants={fadeInAnimation({ scale: 0.95, duration: 1.2 })}
          className="relative w-full text-white rounded-[20px] h-auto flex flex-col pt-[32px] md:pt-[55px] pb-4 md:pb-[32px] px-[15px] md:px-[36px] overflow-hidden"
        >
          <Image
            src="/images/contactsPage/ctaContacts/cosmetics.webp"
            alt="cta background"
            fill
            className="object-cover xl:object-[5px_-570px]"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(144.52deg,rgba(6,32,50,0.56)_15.09%,rgba(0,0,0,0)_50.23%)] md:hidden" />

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110.76deg,rgba(0,0,0,0)_9.65%,rgba(1,19,31,0.8)_91.67%)] md:hidden" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(96.31deg,rgba(0,0,0,0.83)_12.56%,rgba(0,0,0,0)_66.13%,#000000_133.21%)] hidden md:block" />

          <div className="relative z-10 flex flex-col gap-[77px] md:gap-[162px] w-full">
            <div className="flex flex-col md:flex-row md:justify-between gap-[77px] md:gap-0 ml-[17px] md:ml-0">
              <motion.p
                variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                className="text-[24px] md:text-[38px] lg:text-[48px] font-evolenta uppercase leading-[134%] max-w-[212px] md:max-w-[400px] md:leading-[133%]"
              >
                Почніть шлях до оновленої версії себе{" "}
                <span className="italic">вже сьогодні</span>!
              </motion.p>
              <div className="flex flex-col gap-4 md:gap-[9px] max-w-[140px] self-end md:mb-[13px]">
                <motion.p
                  variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                  className="text-[15px] font-evolenta uppercase text-end leading-[134%]"
                >
                  Естетична медицина
                </motion.p>{" "}
                <motion.p
                  variants={fadeInAnimation({ y: 30, delay: 0.3 })}
                  className="text-[15px] font-evolenta uppercase text-end leading-[134%]"
                >
                  Стоматологія
                </motion.p>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 30, delay: 0.3 })}
              className="rounded-[16px] rounded-[20px] bg-white py-4 md:py-5 px-[14px] md:pl-[15px] md:pr-8 w-full max-w-[500px] md:max-w-full flex flex-col md:flex-row md:justify-between md:items-center gap-5 self-center w-full"
            >
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-black text-center md:text-start leading-[125%] md:font-medium md:max-w-[410px]">
                Маєте питання? Заповніть форму зворотнього звʼязку і ми
                обовʼязково зателефонуємо Вам!
              </p>
              <MainButton className="text-[14px] lg:text-[18px] font-medium md:max-w-[255px] lg:px-[42px] lg:leading-[125%]">
                Замовити дзвінок
              </MainButton>
            </motion.div>
          </div>
        </motion.div>{" "}
      </Container>
    </section>
  );
}
