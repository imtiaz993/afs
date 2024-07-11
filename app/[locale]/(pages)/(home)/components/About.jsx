"use client";

import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import CountUp from "react-countup";
import { useLocale, useTranslations } from "next-intl";
import PageLayout from "app/common/PageLayout";

const About = () => {
  const locale = useLocale();
  const t = useTranslations("Home.About");
  const isArabic = locale === "ar";

  return (
    <div className="relative">
      <PageLayout>
        <div className="py-10 lg:py-24">
          <div className="relative z-10">
            <div>
              <p className="mb-4 text-secondary max-w-[845px] flex items-center  justify-start">
                {" "}
                <Image
                  sizes="100vw"
                  width={10}
                  height={10}
                  src="/assets/icons/home/diamond.svg"
                  className={` ${isArabic ? "ml-2" : "mr-2"}`}
                  alt=""
                />{" "}
                {t("title")}
              </p>
              <h2 className="text-primary text-[32px] md:text-5xl mb-16 max-w-[845px] !leading-[120%]">
                {t("headline")}
              </h2>
            </div>
            <div className="lg:flex justify-between">
              <div className="lg:w-[45%] flex flex-col lg:items-start">
                <p className="text-left mb-4 text-secondary  flex items-center justify-start">
                  <Image
                    sizes="100vw"
                    width={10}
                    height={10}
                    src="/assets/icons/home/diamond.svg"
                    className={` ${isArabic ? "ml-2" : "mr-2"}`}
                    alt=""
                  />{" "}
                  {t("sub title")}
                </p>
                <h3 className="text-2xl md:text-[40px] text-primary mb-4 lg:max-w-[450px] !leading-[120%]">
                  {t("sub headline")}
                </h3>
                <p className="text-base md:text-lg text-secondary mb-8 lg:max-w-[450px] !leading-7">
                  {t("description")}
                </p>
                <Link href="/about">
                  <button className=" text-center text-brand-secondary py-[11px] md:py-[15px] w-full md:w-52 border border-brand-secondary transition-colors duration-300 hover:text-brand-primary hover:border-brand-primary  font-medium rounded-sm">
                    {t("learn more")}
                  </button>
                </Link>
              </div>
              <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                <div className="pt-8 lg:pt-0 mt-10 lg:mt-12 pb-8 lg:pb-12 border-b border-t lg:border-t-0 border-default w-full flex flex-col items-start">
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
                  <p className="text-secondary ">
                    {t("statistics.volume.text")}
                  </p>
                </div>
                <div
                  className={`mt-8 lg:mt-12 pb-8 lg:pb-12 border-b grid grid-cols-2 border-default gap-10 w-full `}
                >
                  <div className="flex flex-col items-start">
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
                    <p className="text-secondary ">
                      {t("statistics.transactions.text")}
                    </p>
                  </div>
                  <div className="flex flex-col items-start">
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
                    <p className="text-secondary ">
                      {t("statistics.experience.text")}
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-8 lg:mt-12 pb-12 lg:border-b border-b-0 grid grid-cols-2 border-default gap-10 w-full`}
                >
                  <div className="flex flex-col items-start">
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
                    <p className="text-secondary ">
                      {t("statistics.cards.text")}
                    </p>
                  </div>
                  <div className="flex flex-col items-start">
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
                    <p className="text-secondary ">
                      {t("statistics.terminals.text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="absolute top-0 left-0 lg:left-auto right-0 bottom-0 lg:w-3/4 lg:ml-7">
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full hidden lg:block"
          src="/assets/images/home/about.png"
          alt=""
        />
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full lg:hidden"
          src="/assets/images/home/aboutMobile.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
