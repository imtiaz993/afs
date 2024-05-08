"use client";

import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import CountUp from "react-countup";
import PageLayout from "app/common/PageLayout";

const About = () => {
  return (
    <div className="relative">
      <PageLayout>
        <div className="py-10 lg:py-24">
          <div className="relative z-10">
            <p className="mb-4 text-secondary  flex items-center">
              {" "}
              <Image
                sizes="100vw"
                width={10}
                height={10}
                src="/assets/icons/home/diamond.svg"
                className="mr-2"
                alt=""
              />{" "}
              About us
            </p>
            <h2 className="text-primary text-2xl md:text-5xl mb-16 max-w-[845px] leading-[120%]">
              Founded in 1984, AFS is owned by 37 banks and supports over 60
              clients in 20+ countries, providing issuing, merchant acquiring,
              and various financial services.
            </h2>
            <div className="lg:flex justify-between">
              <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
                <p className="text-center lg:text-left mb-4 text-secondary  flex items-center">
                  <Image
                    sizes="100vw"
                    width={10}
                    height={10}
                    src="/assets/icons/home/diamond.svg"
                    className="mr-2"
                    alt=""
                  />{" "}
                  By the numbers
                </p>
                <h3 className="text-center lg:text-left text-2xl md:text-[40px] text-primary mb-4 lg:max-w-[450px] leading-[120%]">
                  Leveraging the power of digital payments
                </h3>
                <p className=" text-center lg:text-left text-base md:text-lg text-secondary mb-8 lg:max-w-[450px]">
                  Discover how we are revolutionizing the financial sector
                  through our relentless commitment to harnessing the potential
                  of digital payments.
                </p>
                <Link href="/about">
                  <button className="transition-colors duration-500 text-center text-brand-secondary py-[15px] w-52 border border-brand-secondary hover:text-white hover:bg-brand-secondary  font-medium rounded-sm">
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
                  <p className="text-secondary ">Acquiring volume</p>
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
                    <p className="text-secondary ">Transactions completed</p>
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
                    <p className="text-secondary ">Years of experience</p>
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
                    <p className="text-secondary ">Cards hosted</p>
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
                    <p className="text-secondary ">POS terminals deployed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="absolute top-0 right-0 bottom-0 lg:w-3/4 ml-7">
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full"
          src="/assets/images/home/about.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;