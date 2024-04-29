"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="px-[4.17%] py-10 lg:py-24 md:px-10 lg:px-16 relative">
      <div className="w-11/12 mx-auto relative z-10">
        <p className="mb-4 text-secondary font-light">About us</p>
        <h1 className="text-primary text-2xl md:text-5xl mb-16 max-w-[845px] leading-[120%]">
          Founded in 1984, AFS is owned by 37 banks and supports over 60 clients
          in 20+ countries, providing issuing, merchant acquiring, and various
          financial services.
        </h1>
        <div className="lg:flex justify-between">
          <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
            <p className="text-center lg:text-left mb-4 text-secondary font-light">
              By the numbers
            </p>
            <h1 className="text-center lg:text-left text-2xl md:text-[40px] text-primary mb-4 lg:max-w-[450px] leading-[120%]">
              Leveraging the power of digital payments
            </h1>
            <p className="font-light text-center lg:text-left text-base md:text-lg text-secondary mb-8 lg:max-w-[450px]">
              Discover how we are revolutionizing the financial sector through
              our relentless commitment to harnessing the potential of digital
              payments.
            </p>
            <Link href="/about">
              <button
                data-aos="fade-up"
                className="transition-colors duration-500 text-center text-brand-secondary py-4 w-52 border border-brand-secondary hover:text-white hover:bg-brand-secondary  font-medium rounded-sm"
              >
                Learn more about us
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="mt-12 pb-12 border-b border-default w-full">
              <h1 className="stats-home-gradient text-7xl md:text-9xl mb-2">
                <CountUp
                  enableScrollSpy
                  scrollSpyOnce
                  start={0}
                  end={3.2}
                  duration={3}
                  separator=" "
                  decimals={1}
                  decimal="."
                  prefix="$"
                  suffix="B"
                />
              </h1>
              <p className="text-secondary font-light">Acquiring volume</p>
            </div>
            <div className="mt-12 pb-12 border-b border-default grid grid-cols-2 gap-10 w-full">
              <div>
                <h1 className="stats-home-gradient text-5xl md:text-7xl mb-2">
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    start={0}
                    end={288}
                    duration={3}
                    separator=" "
                    decimals={0}
                    decimal="."
                    prefix=""
                    suffix="M"
                  />
                </h1>
                <p className="text-secondary font-light">
                  Transactions completed
                </p>
              </div>
              <div>
                <h1 className="stats-home-gradient text-5xl md:text-7xl mb-2">
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    start={0}
                    end={40}
                    duration={3}
                    separator=" "
                    decimals={0}
                    decimal="."
                    prefix=""
                    suffix="+"
                  />
                </h1>
                <p className="text-secondary font-light">Years of experience</p>
              </div>
            </div>
            <div className="mt-12 pb-12 border-b border-default grid grid-cols-2 gap-10 w-full">
              <div>
                <h1 className="stats-home-gradient text-5xl md:text-7xl mb-2">
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    start={0}
                    end={1.8}
                    duration={3}
                    separator=" "
                    decimals={1}
                    decimal="."
                    prefix=""
                    suffix="M"
                  />
                </h1>
                <p className="text-secondary font-light">Cards hosted</p>
              </div>
              <div>
                <h1 className="stats-home-gradient text-5xl md:text-7xl mb-2">
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    start={0}
                    end={33}
                    duration={3}
                    separator=" "
                    decimals={0}
                    decimal="."
                    prefix=""
                    suffix="K"
                  />
                </h1>
                <p className="text-secondary font-light">
                  POS terminals deployed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 lg:w-4/5 ml-7">
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full object-cover"
          src="/assets/images/home/about.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;