"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations, useLocale } from "next-intl";
import PageLayout from "app/common/PageLayout";

const Reviews = () => {
  const locale = useLocale();
  const t = useTranslations("Home");
  const reviews = t.raw("Reviews");
  const isArabic = locale === "ar";

  const swiperRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const slidesCount = 2;

  return (
    <PageLayout styles={"!px-0 relative"} maxScreenBG={"bg-brand-primary"}>
      <div className="px-4 md:px-10 lg:px-16 py-10 lg:py-24 bg-brand-primary lg:flex justify-between">
        <div className="lg:w-[45%] relative z-10 home-reviews-swiper">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            modules={[Pagination]}
            touchRatio={0}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <h3
                    className={`text-xl md:text-3xl text-center leading-[130%] text-white ${
                      isArabic ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {item.quote}
                  </h3>
                  <p
                    className={`font-medium text-center text-white mt-8 ${
                      isArabic ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {item.author}
                  </p>
                  <p
                    className={`text-center  text-brand-tertiary mt-2 ${
                      isArabic ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {item.position}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex items-center  mt-16 ">
              <div>
                <div className="inline-flex justify-center lg:justify-start relative z-20 select-none">
                  <div
                    className="mr-4 w-10 h-10 flex justify-center items-center border border-brand-secondary rounded-full cursor-pointer"
                    onClick={() => {
                      swiperRef.current.swiper.slidePrev();
                      setSwiperIndex(swiperRef.current.swiper.activeIndex);
                    }}
                  >
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      className={`rotate-180  ${
                        swiperIndex > 0 ? "w-6 h-6" : "w-5 h-5"
                      }`}
                      src={
                        swiperIndex > 0
                          ? "/assets/icons/home/chevron-right.svg"
                          : "/assets/icons/home/chevron-right-disabled.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="w-10 h-10 flex justify-center items-center border border-brand-secondary rounded-full cursor-pointer"
                    onClick={() => {
                      swiperRef.current.swiper.slideNext();
                      setSwiperIndex(swiperRef.current.swiper.activeIndex);
                    }}
                  >
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      className={`${
                        swiperIndex < slidesCount - 1 ? "w-6 h-6" : "w-5 h-5"
                      }`}
                      src={
                        swiperIndex < slidesCount - 1
                          ? "/assets/icons/home/chevron-right.svg"
                          : "/assets/icons/home/chevron-right-disabled.svg"
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="ml-10">
                <div className="swiper-custom-pagination" />
              </div>
            </div>
          </Swiper>
        </div>
        <div className="absolute top-0 right-0 bottom-0 opacity-40 md:opacity-100">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full"
            src="/assets/images/home/testimonial.png"
            alt=""
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Reviews;
