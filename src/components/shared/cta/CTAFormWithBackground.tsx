"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { listVariants, fadeInAnimation } from "@/utils/animationVariants";
import Container from "../container/Container";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "../notifications/NotificationPopUp";
import Backdrop from "../backdrop/Backdrop";

interface CTAFormWithBackgroundProps {
  image: string;
  className?: string;
}

export default function CTAFormWithBackground({
  image,
  className,
}: CTAFormWithBackgroundProps) {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={twMerge(
          "md:hidden relative text-white rounded-[20px] h-[612px] flex flex-col pt-[29px] pb-11 overflow-hidden",
          className
        )}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20 })}
          className="absolute -top-[60px] inset-0"
        >
          <Image
            src={image}
            alt="cta background"
            fill
            className="w-full h-full object-cover"
          />
        </motion.div>

        <Container className="relative z-10 flex flex-col justify-between flex-1">
          {/* Title — вгорі */}
          <motion.p
            variants={fadeInAnimation({ y: 30 })}
            className="text-[24px] font-evolenta uppercase text-center leading-[134%]"
          >
            Бажаєте познайомитися з нашим центром особисто?
          </motion.p>

          {/* Form — внизу */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 40 })}
            className="rounded-[16px] bg-white py-[35px] px-[18px]"
          >
            <CallBackForm
              setIsError={setIsError}
              setIsNotificationShown={setIsNotificationShown}
              className="text-black"
            />
          </motion.div>
        </Container>
      </motion.div>

      {/* Desktop */}
      <Container>
        <div className="hidden md:flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-cover bg-center bg-[${image})]`}
          ></motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants({ staggerChildren: 0.2 })}
            className="flex flex-col justify-center bg-gray-100 px-12 py-16"
          >
            <motion.p
              variants={fadeInAnimation({ y: 30 })}
              className="text-3xl font-bold mb-8"
            >
              Бажаєте познайомитися з нашим центром особисто?
            </motion.p>
            <motion.div variants={listVariants({ staggerChildren: 0.2 })}>
              <CallBackForm
                setIsError={setIsError}
                setIsNotificationShown={setIsNotificationShown}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
      <NotificationPopUp
        title={isError ? "На жаль, щось пішло не так" : "Дякуємо за звернення!"}
        description={
          isError
            ? "Спробуйте відправити форму ще раз"
            : "Наш менеджер скоро зв'яжеться з вами"
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isNotificationShown}
        onClick={() => {
          setIsNotificationShown(false);
        }}
      />
    </>
  );
}
