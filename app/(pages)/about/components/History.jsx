"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const History = () => {
  const swiperRef = useRef();
  const [isEnd, setIsEnd] = useState(0);
  const [isStart, setIsStart] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const slides = [
    {
      title: "2024",
      description:
        "Received in-principle approval for a retail payments services and card schemes license from the Central Bank of UAE",
    },
    {
      title: "2023",
      description:
        "Secured a PF/PSP license from the Central Bank of Egypt, expanding its permitted scope of activity in the Egyptian market.",
    },
    {
      title: "2021",
      description: "Launched merchant acquiring business in Egypt.",
    },
    {
      title: "2017/2018",
      description: "Launched merchant acquiring business in Oman and Bahrain.",
    },
    {
      title: "2011",
      description: "United Arab Emirates data center is set up.",
    },
    {
      title: "2005",
      description:
        "AFS adds debit card processing services to portfolio of work.",
    },
    {
      title: "1987",
      description: "AFS begins third party card processing.",
    },
    {
      title: "1984",
      description:
        "AFS is established. Visa Travelers Cheques issuance commences.",
    },
  ];

  useEffect(() => {
    if (swiperRef && swiperRef?.current && swiperRef?.current?.swiper) {
      setIsEnd(swiperRef.current.swiper.isEnd);
      setIsStart(swiperRef.current.swiper.isBeginning);
    }
  }, [swiperIndex]);

  return (
    <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16 mb-[280px] md:mb-[376px] lg:mb-[280px]">
      <p className="mb-4 text-secondary flex items-center font-light">
        <Image
          sizes="100vw"
          width={10}
          height={10}
          src="/assets/icons/home/diamond.svg"
          className="mr-2"
          alt=""
        />{" "}
        Our history
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
        At AFS we take immense pride in our rich history and the milestones that
        have shaped us into the company we are today.
      </h1>
      <div>
        <div className="flex items-center mb-8">
          <div>
            <div className="inline-flex justify-center lg:justify-start select-none">
              <div
                className="mr-4 w-10 h-10 flex justify-center items-center border border-default rounded-full cursor-pointer"
                onClick={() => {
                  swiperRef.current.swiper.slidePrev();
                  setSwiperIndex(swiperRef.current.swiper.activeIndex);
                }}
              >
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className={`rotate-180 w-6 h-6`}
                  src={
                    !isStart
                      ? "/assets/icons/about/chevron-right.svg"
                      : "/assets/icons/about/chevron-right-disabled.svg"
                  }
                  alt=""
                />
              </div>
              <div
                className="w-10 h-10 flex justify-center items-center border border-default rounded-full cursor-pointer"
                onClick={() => {
                  swiperRef.current.swiper.slideNext();
                  setSwiperIndex(swiperRef.current.swiper.activeIndex);
                }}
              >
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className={`w-6 h-6`}
                  src={
                    !isEnd
                      ? "/assets/icons/about/chevron-right.svg"
                      : "/assets/icons/about/chevron-right-disabled.svg"
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

        <div className="absolute right-0 w-full">
          <div className="max-w-[1920px] mx-auto">
            <div className="w-[95.83%] ml-auto md:pl-10 lg:pl-16 history-swiper">
              <Swiper
                ref={swiperRef}
                slidesPerView={1.2}
                modules={[Pagination]}
                pagination={{
                  el: ".swiper-custom-pagination",
                  clickable: true,
                }}
                touchRatio={0}
                spaceBetween={16}
                breakpoints={{
                  768: {
                    slidesPerView: 2.5,
                  },
                  1280: {
                    slidesPerView: 3.5,
                  },
                  1536: {
                    slidesPerView: 4.5,
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`bg-subtle-neutral py-10 px-8  min-h-[280px] rounded flex flex-col justify-between ${
                        index + 1 === slides.length ? "mr-4" : ""
                      }`}
                    >
                      <h1 className="text-brand-secondary text-4xl md:text-5xl mb-10">
                        {slide.title}
                      </h1>
                      <p className="text-primary text-[17px] font-light">
                        {slide.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
