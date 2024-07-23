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
      <div className="px-1 md:px-10 lg:px-16 py-12 pt-1 lg:py-24 bg-brand-primary flex flex-col-reverse lg:flex-row justify-between">
        <div className="px-3 lg:w-[45%] relative z-10 home-reviews-swiper">
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
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    // src="/assets/icons/home/webflow.svg"
                    className="w-auto mb-16 hidden lg:block"
                    alt=""
                  />
                  <h3 className="text-2xl md:text-3xl !leading-[130%] text-white">
                    "{item.quote}
                  </h3>
                  <p className="font-medium  text-white mt-8">{item.author}</p>
                  <p className="text-brand-tertiary mt-2">{item.position}</p>
                </div>
              </SwiperSlide>
            ))}

            <div className="flex items-center justify-between lg:justify-start  mt-8 lg:mt-16 ">
              <div className="w-full lg:w-auto">
                <div className="flex lg:inline-flex justify-between items-center lg:items-start lg:justify-start relative z-20 select-none">
                  <div
                    className={`w-10 h-10 flex justify-center items-center border border-brand-secondary rounded-full cursor-pointer  ${
                      isArabic ? "ml-4" : "mr-4"
                    }`}
                    onClick={() => {
                      swiperRef.current.swiper.slidePrev();
                      setSwiperIndex(swiperRef.current.swiper.activeIndex);
                    }}
                  >
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      className={`${swiperIndex > 0 ? "w-6 h-6" : "w-5 h-5"}  ${
                        isArabic ? "" : "rotate-180"
                      }`}
                      src={
                        swiperIndex > 0
                          ? "/assets/icons/home/chevron-right.svg"
                          : "/assets/icons/home/chevron-right-disabled.svg"
                      }
                      alt=""
                    />
                  </div>
                  {window.innerWidth < 1024 && (
                    <div className="inline-block lg:hidden">
                      <div className="swiper-custom-pagination" />
                    </div>
                  )}
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
                      }  ${isArabic ? "rotate-180" : ""}`}
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
              {window.innerWidth >= 1024 && (
                <div
                  className={`hidden lg:block ml-10 ${
                    isArabic ? "mr-10" : "ml-10"
                  }`}
                >
                  <div className="swiper-custom-pagination" />
                </div>
              )}
            </div>
          </Swiper>
        </div>
        <div
          className={`mb-12 lg:mb-0 lg:absolute top-0 bottom-0 ${
            isArabic ? "left-0" : "right-0"
          }`}
        >
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full hidden lg:block"
            style={isArabic ? { transform: "scaleX(-1)" } : {}}
            src="/assets/images/home/testimonial.png"
            alt=""
          />
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full lg:hidden"
            src="/assets/images/home/testimonialMobile.png"
            alt=""
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Reviews;
