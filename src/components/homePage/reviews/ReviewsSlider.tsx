"use client";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { reviewsList } from "./data";
import SwiperWrapper from "@/components/shared/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

export default function ReviewsSlider() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ y: 30 })}
    >
      <SwiperWrapper
        swiperClassName="reviews"
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1,
          },
          500: { spaceBetween: 16, slidesPerView: 2 },
          768: { spaceBetween: 20, slidesPerView: 3 },
          1280: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
        }}
      >
        {reviewsList.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </motion.div>
  );
}
