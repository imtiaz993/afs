"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      review:
        "AFS has helped deepen my understanding of payment systems, from traditional card-based transactions to cutting edge digital innovations.",
      name: "Reem AlHusaini",
      company: "Processing",
      image: "/assets/icons/careers/testimonial1.png",
    },
    {
      review:
        "Being part of a well-established company with 40 years of experience gave me the opportunity to grow with confidence in a very professional environment.",
      name: "Rana Sinousi",
      company: "Marketing & Communications",
      image: "/assets/icons/careers/testimonial2.svg",
    },
    {
      review:
        "Through ongoing training and hands-on experience, I have developed a deep understanding of payment technology trends and best practices.",
      name: "Husain Al Adhab",
      company: "Processing",
      image: "/assets/icons/careers/testimonial3.svg",
    },
    {
      review:
        "From navigating complex regulatory frameworks to spearheading innovative solutions, I am proud to be part of a team that pushes boundaries and sets new standards in digital payments.",
      name: "Arwa AlSharqawi",
      company: "Legal",
      image: "/assets/icons/careers/testimonial4.svg",
    },
    {
      review:
        "AFS has helped deepen my understanding of payment systems, from traditional card-based transactions to cutting edge digital innovations.",
      name: "Reem AlHusaini",
      company: "Processing",
      image: "/assets/icons/careers/testimonial1.png",
    },
    {
      review:
        "Being part of a well-established company with 40 years of experience gave me the opportunity to grow with confidence in a very professional environment.",
      name: "Rana Sinousi",
      company: "Marketing & Communications",
      image: "/assets/icons/careers/testimonial2.svg",
    },
    {
      review:
        "Through ongoing training and hands-on experience, I have developed a deep understanding of payment technology trends and best practices.",
      name: "Husain Al Adhab",
      company: "Processing",
      image: "/assets/icons/careers/testimonial3.svg",
    },
    {
      review:
        "From navigating complex regulatory frameworks to spearheading innovative solutions, I am proud to be part of a team that pushes boundaries and sets new standards in digital payments.",
      name: "Arwa AlSharqawi",
      company: "Legal",
      image: "/assets/icons/careers/testimonial4.svg",
    },
  ];

  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 lg:w-10/12 mx-auto pt-10 lg:pt-24">
        <p className=" mb-4 text-secondary text-center font-light">
          Testimonials
        </p>
        <h2 className="mb-10 md:mb-16 text-2xl md:text-5xl text-primary text-center max-w-[486px] mx-auto">
          Why our team members love to work here
        </h2>
      </div>
      <div className="w-11/12 mx-auto md:w-full pb-10 lg:pb-24">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={8}
          modules={[Autoplay]}
          autoplay={{
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          loop
          touchRatio={0}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3.5,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white relative h-[316px] xl:h-[330px] 2xl:h-[316px] flex flex-col justify-between">
                <h6 className="text-lg md:text-[22px] text-primary font-light">
                  {item.review}
                </h6>
                <div>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-10 h-10 rounded-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex items-center mt-4">
                    <p className="text-xs font-medium text-primary">
                      {item.name}
                    </p>
                    <span className="inline-block mx-2 bg-[#D9D9D9] w-1 h-1 rounded-full"></span>
                    <p className="text-xs text-secondary">{item.company}</p>
                  </div>
                </div>
                <div className="absolute right-2 bottom-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-auto"
                    src="/assets/icons/careers/reviews.svg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
