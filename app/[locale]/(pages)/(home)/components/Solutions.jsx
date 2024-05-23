"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import PageLayout from "app/common/PageLayout";

const Solutions = () => {
  const [isMobile, setIsMobile] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Home.Solutions");
  const bankFeatures = t.raw("banks.features");
  const businessFeatures = t.raw("businesses.features");
  const isArabic = locale === "ar";

  const removeDivKeepChildren = () => {
    const parentDiv = document.querySelector(".parent-div");
    const childDiv = parentDiv.querySelector(".child-div");

    while (childDiv && childDiv.firstChild) {
      parentDiv.insertBefore(childDiv.firstChild, childDiv);
    }

    if (childDiv) {
      parentDiv.removeChild(childDiv);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        removeDivKeepChildren();
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <div className={`${isArabic ? "flex flex-col items-end" : ""}`}>
          <p
            className={`mb-4 text-secondary flex items-center  ${
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
            className={`text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[950px] leading-[120%]  ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("headline")}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 parent-div">
          <div className="child-div">
            <div className="order-1 banks-home-gradient rounded">
              <div
                className="p-6 md:p-10 lg:p-8 xl:p-10 rounded"
                style={{
                  background: `url('/assets/images/home/forBanks.png') no-repeat top center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h3
                  className={`text-2xl md:text-[40px] text-white mb-5 mt-[272px] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("banks.title")}
                </h3>
                <p
                  className={` text-base md:text-lg text-white mb-4 max-w-[420px] opacity-80 ${
                    isArabic
                      ? "ml-auto text-right lg:!text-base xl:!text-lg"
                      : ""
                  }`}
                >
                  {t("banks.description")}
                </p>
                <div
                  className={`flex items-center flex-wrap ${
                    isArabic ? "justify-start flex-row-reverse" : ""
                  }`}
                >
                  <button
                    className={` text-center text-brand-secondary  py-3 md:py-4 w-full md:w-[118px] bg-white font-medium rounded-sm mt-4 ${
                      isArabic ? "md:ml-6" : "md:mr-6"
                    }`}
                  >
                    {t("banks.button")}
                  </button>
                  <ul
                    className={`flex flex-wrap mt-4 ${
                      isArabic ? "lg:flex-nowrap w-[420px] justify-end" : ""
                    }`}
                  >
                    <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/home/check.svg"
                        className="w-auto"
                        alt=""
                      />
                      <span className="opacity-80  ml-1">
                        {bankFeatures[0]}
                      </span>
                    </li>
                    <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/home/check.svg"
                        className="w-auto"
                        alt=""
                      />
                      <span className="opacity-80  ml-1">
                        {bankFeatures[1]}
                      </span>
                    </li>
                    <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/home/check.svg"
                        className="w-auto"
                        alt=""
                      />
                      <span className="opacity-80  ml-1">
                        {bankFeatures[2]}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-4 all-solution-home-gradient mt-4 rounded overflow-hidden">
              <div
                style={{
                  background: `url('/assets/images/home/allSolutions.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "700px auto",
                }}
                className="p-6 md:px-10 lg:px-8 xl:px-10 py-12 rounded back !bg-no-repeat !bg-right-top"
              >
                <h3
                  className={`text-2xl md:text-[40px] text-primary mb-5 mt-[187px] lg:mt-0 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("solutions.title")}
                </h3>
                <p
                  className={`text-base md:text-lg text-primary mb-8 max-w-[425px] opacity-80 ${
                    isArabic
                      ? "ml-auto text-right lg:!text-base xl:!text-lg"
                      : ""
                  }`}
                >
                  {t("solutions.description")}
                </p>
                <div className={`${isArabic ? "flex justify-end" : ""}`}>
                  <button className=" text-center text-brand-secondary border border-brand-secondary py-[11px] md:py-[15px] w-full md:w-[118px] bg-transparent font-medium rounded-sm">
                    {t("solutions.button")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="child-div">
            <div className="order-3 bg-[#7A7A7A] rounded relative flex flex-col-reverse lg:flex-col overflow-hidden">
              <div className="p-6 md:px-10 lg:px-8 xl:px-10 py-12 rounded relative z-10">
                <h3
                  className={`text-2xl md:text-[40px] text-white mb-5 mt-[187px] lg:mt-0 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("consumers.title")}
                </h3>
                <p
                  className={`text-base md:text-lg text-white mb-8 max-w-[420px] opacity-80 ${
                    isArabic
                      ? "ml-auto text-right lg:!text-base xl:!text-lg"
                      : ""
                  }`}
                >
                  {t("consumers.description")}
                </p>
                <div className={`${isArabic ? "flex justify-end" : ""}`}>
                  <button className=" text-center text-brand-secondary   py-3 md:py-4 w-full md:w-[118px] bg-white font-medium rounded-sm">
                    {t("consumers.button")}
                  </button>
                </div>
              </div>

              <div
                className={`w-full lg:w-auto absolute top-0 lg:bottom-0 ${
                  isArabic ? "left-0" : "right-0"
                }`}
              >
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-full hidden lg:block"
                  src="/assets/images/home/forConsumers.png"
                  alt=""
                />
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-full lg:hidden"
                  src="/assets/images/home/forConsumersMobile.png"
                  alt=""
                />
              </div>
            </div>
            <div className="order-2 bg-black mt-4 rounded">
              <div
                className="p-6 md:p-10 lg:p-8 xl:p-10 rounded w-full !bg-contain"
                style={{
                  background: isMobile
                    ? `url('/assets/images/home/forBusinessMobile.png') no-repeat top center`
                    : `url('/assets/images/home/forBusiness.png') no-repeat top center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="relative bottom-0">
                  <h3
                    className={`text-2xl md:text-[40px] text-white mb-5 mt-[187px] lg:mt-0 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    {t("businesses.title")}
                  </h3>
                  <p
                    className={` text-base md:text-lg text-white mb-4 max-w-[420px] opacity-80 ${
                      isArabic
                        ? "ml-auto text-right lg:!text-base xl:!text-lg"
                        : ""
                    }`}
                  >
                    {t("businesses.description")}
                  </p>
                  <div
                    className={`flex items-center flex-wrap md:mb-[272px]  ${
                      isArabic ? "justify-start flex-row-reverse" : ""
                    }`}
                  >
                    <button
                      className={` text-center text-brand-secondary  py-3 md:py-4 w-full md:w-[118px] bg-white font-medium rounded-sm mt-4 ${
                        isArabic ? "md:ml-4" : "md:mr-4"
                      }`}
                    >
                      {t("businesses.button")}
                    </button>
                    <ul
                      className={`flex flex-wrap mt-4 ${
                        isArabic ? "w-[428px] justify-end" : ""
                      }`}
                    >
                      <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                        <Image
                          sizes="100vw"
                          width={0}
                          height={0}
                          src="/assets/icons/home/check.svg"
                          className="w-auto"
                          alt=""
                        />
                        <span className="opacity-80  ml-1">
                          {businessFeatures[0]}
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                        <Image
                          sizes="100vw"
                          width={0}
                          height={0}
                          src="/assets/icons/home/check.svg"
                          className="w-auto"
                          alt=""
                        />
                        <span className="opacity-80  ml-1">
                          {businessFeatures[1]}
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                        <Image
                          sizes="100vw"
                          width={0}
                          height={0}
                          src="/assets/icons/home/check.svg"
                          className="w-auto"
                          alt=""
                        />
                        <span className="opacity-80  ml-1">
                          {businessFeatures[2]}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;
