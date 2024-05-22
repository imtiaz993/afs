import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import PageLayout from "./PageLayout";

const News = () => {
  const locale = useLocale();
  const t = useTranslations("News");
  const news = t.raw("news");
  const isArabic = locale === "ar";

  return (
    <div className="border-b border-default">
      <PageLayout>
        <div className="py-10 lg:py-24 ">
          <div
            className={`mb-12 md:flex justify-between items-center sm:items-end ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <h3 className="text-[40px] text-primary mr-4">
              {t("title")}
            </h3>
            <div
              className={`mt-5 md:mt-0 flex items-center cursor-pointer border-b border-white hover:border-brand-secondary ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <p className="text-brand-secondary mr-2 whitespace-nowrap font-medium">
                {t("see all")}
              </p>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className={`w-auto ${isArabic ? "rotate-180 mr-2" : ""}`}
                src="/assets/icons/home/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="bg-gray-700 w-full rounded-[4px]"
                src="/assets/images/home/news.png"
                alt=""
              />
              <div
                className={`flex mt-6 ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px] min-w-[84px] flex justify-center">
                  {t("highlighted.tag")}
                </p>
                <div
                  className={`flex items-center ${isArabic ? "mr-4" : " ml-4"}`}
                >
                  <p className="text-xs  text-secondary ">
                    {t("highlighted.date")}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs  text-secondary ">
                    {t("highlighted.duration")}
                  </p>
                </div>
              </div>
              <h4
                className={`text-primary text-[20px] sm:text-2xl mb-4 mt-2 font-regular ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {t("highlighted.headline")}
              </h4>
              <p
                className={`text-lg text-primary overflow-hidden text-ellipsis line-clamp-2 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {t("highlighted.content")}
              </p>
            </div>
            <div className=" mt-16 lg:mt-0 lg:w-2/5">
              {news.map((item, index) => (
                <div
                  className={`pb-8 mb-8 ${
                    index === news.length - 1 ? "lg:border-b" : "border-b"
                  } border-default`}
                >
                  <div
                    key={index}
                    className={`flex ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px] min-w-[84px] flex justify-center">
                      {item.tag}
                    </p>
                    <div
                      className={`flex items-center ${
                        isArabic ? "mr-4" : " ml-4"
                      }`}
                    >
                      <p className="text-xs  text-secondary ">{item.date}</p>
                      <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                      <p className="text-xs  text-secondary ">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                  <h4
                    className={`text-primary text-lg sm:text-2xl mb-4 mt-2 font-regular ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    {item.headline}
                  </h4>
                  <p
                    className={` text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default News;
