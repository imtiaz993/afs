import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import PageLayout from "app/common/PageLayout";

const Solutions = () => {
  const locale = useLocale();
  const t = useTranslations("Home.Solutions");
  const bankFeatures = t.raw("banks.features");
  const businessFeatures = t.raw("businesses.features");
  const isArabic = locale === "ar";

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
            className={`text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[950px] leading-[120%]  ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("headline")}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div className="banks-home-gradient rounded">
              <div
                className="p-6 md:p-10 rounded"
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
                    isArabic ? "ml-auto text-right" : ""
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
                    className={`transition-colors duration-500 text-center text-brand-secondary hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mt-4 ${
                      isArabic ? "ml-6" : "mr-6"
                    }`}
                  >
                    {t("banks.button")}
                  </button>
                  <ul className="flex flex-wrap mt-4">
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
            <div className="all-solution-home-gradient mt-4 rounded overflow-hidden">
              <div
                className="p-6 md:px-10 py-12 rounded"
                style={{
                  background: `url('/assets/images/home/allSolutions.png') no-repeat top center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h3
                  className={`text-2xl md:text-[40px] text-primary mb-5 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("solutions.title")}
                </h3>
                <p
                  className={`text-base md:text-lg text-primary mb-8 max-w-[425px] opacity-80 ${
                    isArabic ? "ml-auto text-right" : ""
                  }`}
                >
                  {t("solutions.description")}
                </p>
                <div className={`${isArabic ? "flex justify-end" : ""}`}>
                  <button className="transition-colors duration-500 text-center text-brand-secondary border border-brand-secondary hover:text-white hover:bg-brand-secondary py-[15px] w-[118px] bg-transparent font-medium rounded-sm">
                    {t("solutions.button")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#7A7A7A] rounded relative">
              <div className="p-6 md:px-10 py-12 rounded relative z-10">
                <h3
                  className={`text-2xl md:text-[40px] text-white mb-5 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("consumers.title")}
                </h3>
                <p
                  className={`text-base md:text-lg text-white mb-8 max-w-[420px] opacity-80 ${
                    isArabic ? "ml-auto text-right" : ""
                  }`}
                >
                  {t("consumers.description")}
                </p>
                <div className={`${isArabic ? "flex justify-end" : ""}`}>
                  <button className="transition-colors duration-500 text-center text-brand-secondary  hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm">
                    {t("consumers.button")}
                  </button>
                </div>
              </div>

              <div
                className={`absolute top-0 bottom-0 opacity-30 xl:opacity-100 ${
                  isArabic ? "left-0" : "right-0"
                }`}
              >
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-full"
                  src="/assets/images/home/forConsumers.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-black mt-4 rounded">
              <div
                className="p-6 md:p-10 rounded"
                style={{
                  background: `url('/assets/images/home/forBusiness.png') no-repeat top center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h3
                  className={`text-2xl md:text-[40px] text-white mb-5 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  {t("businesses.title")}
                </h3>
                <p
                  className={` text-base md:text-lg text-white mb-4 max-w-[420px] opacity-80 ${
                    isArabic ? "ml-auto text-right" : ""
                  }`}
                >
                  {t("businesses.description")}
                </p>
                <div
                  className={`flex items-center flex-wrap mb-[272px]  ${
                    isArabic ? "justify-start flex-row-reverse" : ""
                  }`}
                >
                  <button
                    className={`transition-colors duration-500 text-center text-brand-secondary hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mt-4 ${
                      isArabic ? "ml-4" : "mr-4"
                    }`}
                  >
                    {t("businesses.button")}
                  </button>
                  <ul className="flex flex-wrap mt-4">
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
    </PageLayout>
  );
};

export default Solutions;
