"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import PageLayout from "./PageLayout";
import SingleNav from "./SingleNav";

const TestimonialSllider = ({ bgColor = "bg-subtle-neutral" }) => {
  const swiperRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const slidesCount = 5;

  const reviews = [
    {
      quote:
        "Implementing AFS's card issuing and processing solution transformed how we handle payments, making transactions not just faster but also significantly more secure.",
      author: "Dr. Pallavi Menon",
      position: "Chief Financial Officer",
    },
    {
      quote:
        "Implementing AFS's card issuing and processing solution transformed how we handle payments, making transactions not just faster but also significantly more secure.",
      author: "Dr. Pallavi Menon",
      position: "Chief Financial Officer",
    },
    {
      quote:
        "Implementing AFS's card issuing and processing solution transformed how we handle payments, making transactions not just faster but also significantly more secure.",
      author: "Dr. Pallavi Menon",
      position: "Chief Financial Officer",
    },
    {
      quote:
        "Implementing AFS's card issuing and processing solution transformed how we handle payments, making transactions not just faster but also significantly more secure.",
      author: "Dr. Pallavi Menon",
      position: "Chief Financial Officer",
    },
    {
      quote:
        "Implementing AFS's card issuing and processing solution transformed how we handle payments, making transactions not just faster but also significantly more secure.",
      author: "Dr. Pallavi Menon",
      position: "Chief Financial Officer",
    },
  ];

  return (
    <PageLayout bg={bgColor}>
      <div className="py-10 lg:py-24 md:flex items-start ">
        <SingleNav title={"Testimonials"} />
        <div className="md:w-[calc(100%-192px)]">
          <div className="bg-medium-brand p-6 md:p-10 relative md:max-h-[380px] solutions-swiper sm:ml-[28px]">
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
                  <div className="flex justify-between xl:h-[300px] w-full">
                    <div className=" mr-5 xl:w-[600px]">
                      <h3 className="text-2xl !leading-[130%] text-white">
                        {item.quote}
                      </h3>
                      <div className="pt-[30px] xl:pt-[88px] pb-[60px]">
                        <p className="text-sm font-medium text-white">
                          {item.author}
                        </p>
                        <p className="text-xs text-brand-tertiary mt-2">
                          {item.position}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block ">
                      <Image
                        src={"/assets/images/solutions/testimonialAvatar.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="lg:min-w-[210px] xl:w-[320px] xl:h-full rounded"
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center mt-8 w-full absolute bottom-0">
                <div className="">
                  <div className="inline-flex justify-center lg:justify-start relative z-20 select-none">
                    <div
                      className="mr-4 w-10 h-10 flex justify-center items-center border border-brand-tertiary rounded-full cursor-pointer"
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
                      className="w-10 h-10 flex justify-center items-center border border-brand-tertiary rounded-full cursor-pointer"
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
        </div>
      </div>
    </PageLayout>
  );
};

export default TestimonialSllider;
