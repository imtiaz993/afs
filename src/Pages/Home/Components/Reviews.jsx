import React, { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const swiperRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const slidesCount = 2;

  return (
    <div className="px-[4.17%] md:w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16 bg-brand-primary lg:flex justify-between relative">
      <div className="lg:w-[45%] relative z-10">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          touchRatio={0}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
          }}
        >
          <SwiperSlide>
            <div>
              <h1 className="text-xl md:text-3xl text-center lg:text-left leading-[130%] text-white">
                "Implementing AFS's card issuing and processing solution
                transformed how we handle payments, making transactions not just
                faster but also significantly more secure.{" "}
              </h1>
              <p className="font-medium text-center lg:text-left text-white mt-8">
                Dr. Pallavi Menon
              </p>
              <p className="text-center lg:text-left text-brand-tertiary mt-2">
                Chief Financial Officer
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-xl md:text-3xl text-center lg:text-left leading-[130%] text-white">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ipsam nostrum id reprehenderit, temporibus illum non voluptatem
                itaque quas voluptatum?
              </h1>
              <p className="font-medium text-center lg:text-left text-white mt-8">
                Dr. Pallavi Menon
              </p>
              <p className="text-center lg:text-left text-brand-tertiary mt-2">
                Chief Financial Officer
              </p>
            </div>
          </SwiperSlide>
          <div className="inline-flex justify-center lg:justify-start mt-16 relative z-20 select-none">
            <div
              className="mr-4 w-10 h-10 flex justify-center items-center border border-brand-secondary rounded-full cursor-pointer"
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
                setSwiperIndex(swiperRef.current.swiper.activeIndex);
              }}
            >
              <img
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
              <img
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
        </Swiper>
      </div>
      <div className="lg:w-[45%] absolute top-0 right-0 bottom-0 opacity-40 md:opacity-100">
        <img
          className="w-full h-full"
          src="/assets/images/home/testimonial.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Reviews;
