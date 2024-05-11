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
            <div className={`${isArabic ? "flex flex-col items-end" : ""}`}>
              <p
                className={`mb-4 text-secondary max-w-[845px] flex items-center  ${
                  isArabic
                    ? "text-right justify- end flex-row-reverse"
                    : "text-left justify-start"
                }`}
              >
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
              <h2
                className={`text-primary text-2xl md:text-5xl mb-16 max-w-[845px] leading-[120%] ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {t("headline")}
              </h2>
            </div>
            <div
              className={`lg:flex justify-between ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:w-[45%] flex flex-col items-center ${
                  isArabic
                    ? "text-right lg:items-end"
                    : "text-left lg:items-start"
                }`}
              >
                <p
                  className={`text-center lg:text-left mb-4 text-secondary  flex items-center ${
                    isArabic
                      ? "text-right justify-start flex-row-reverse"
                      : "text-left justify-start"
                  }`}
                >
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
                <h3
                  className={`text-center text-2xl md:text-[40px] text-primary mb-4 lg:max-w-[450px] leading-[120%] ${
                    isArabic ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  {t("sub headline")}
                </h3>
                <p
                  className={`text-center text-base md:text-lg text-secondary mb-8 lg:max-w-[450px] ${
                    isArabic ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  {t("description")}
                </p>
                <Link href="/about">
                  <button className="transition-colors duration-500 text-center text-brand-secondary py-[15px] w-52 border border-brand-secondary hover:text-white hover:bg-brand-secondary  font-medium rounded-sm">
                    {t("learn more")}
                  </button>
                </Link>
              </div>
              <div
                className={`lg:w-1/2 flex flex-col items-center ${
                  isArabic ? "lg:items-end" : "lg:items-start"
                }`}
              >
                <div
                  className={`mt-12 pb-12 border-b border-default w-full flex flex-col ${
                    isArabic ? "items-end" : "items-start"
                  }`}
                >
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
                  className={`mt-12 pb-12 border-b grid grid-cols-2 border-default gap-10 w-full `}
                >
                  <div
                    className={`flex flex-col ${
                      isArabic ? "items-end" : "items-start"
                    }`}
                  >
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
                  <div
                    className={`flex flex-col ${
                      isArabic ? "items-end" : "items-start"
                    }`}
                  >
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
                  className={`mt-12 pb-12 border-b grid grid-cols-2 border-default gap-10 w-full`}
                >
                  <div
                    className={`flex flex-col ${
                      isArabic ? "items-end" : "items-start"
                    }`}
                  >
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
                  <div
                    className={`flex flex-col ${
                      isArabic ? "items-end" : "items-start"
                    }`}
                  >
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
