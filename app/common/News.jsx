import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";
import { useTranslations, useLocale } from "next-intl";

const News = () => {
  const locale = useLocale();
  const t = useTranslations("News");
  const isArabic = locale === "ar";

  // console.log(t("news"));
  // const news = [
  //   {
  //     tag: t("news[0].date"),
  //     date: t("news[0].date"),
  //     duration: t("news[0].date"),
  //     headline: t("news[0].date"),
  //     content: t("news[0].date"),
  //   },
  //   {
  //     tag: t("news[1].date"),
  //     date: t("news[1].date"),
  //     duration: t("news[1].date"),
  //     headline: t("news[1].date"),
  //     content: t("news[1].date"),
  //   },
  //   {
  //     tag: t("news[2].date"),
  //     date: t("news[2].date"),
  //     duration: t("news[2].date"),
  //     headline: t("news[2].date"),
  //     content: t("news[2].date"),
  //   },
  // ];

  // console.log(news);

  return (
    <div className="border-b border-default">
      <PageLayout>
        <div className="py-10 lg:py-24 ">
          <div className="mb-12 flex justify-between items-center sm:items-end">
            <h3 className="text-2xl md:text-[40px] text-primary mr-4">
              {t("title")}
            </h3>
            <div className="flex items-center cursor-pointer">
              <p className="text-brand-secondary mr-2 whitespace-nowrap font-medium">
                {t("see all")}
              </p>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="w-full"
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
              <div className="flex mt-6">
                <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px]">
                  {/* {t("highlighted.tag")} */}
                </p>
                <div className="flex items-center ml-4">
                  <p className="text-xs  text-secondary ">
                    {t("highlighted.date")}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs  text-secondary ">
                    {t("highlighted.duration")}
                  </p>
                </div>
              </div>
              <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                {t("highlighted.headline")}
              </h4>
              <p className=" text-base sm:text-lg text-primary overflow-hidden text-ellipsis line-clamp-2">
                {t("highlighted.content")}
              </p>
            </div>
            <div className=" mt-16 lg:mt-0 lg:w-2/5">
              <div className="pb-8 mb-8 border-b border-default">
                <div className="flex">
                  <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px]">
                    Case studies
                  </p>
                  <div className="flex items-center ml-4">
                    <p className="text-xs  text-secondary ">March 05, 2024</p>
                    <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                    <p className="text-xs  text-secondary ">5 min read</p>
                  </div>
                </div>
                <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                  AFS Transaction Index: Season-Opening Bahrain GP Delivers 66%
                  Surge in Spends
                </h4>
                <p className=" text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
                  This weekend’s action-packed season-opening Bahrain GP
                  delivered an epic increase in spends. Data shared in the
                  annualTransaction Index published byArab Financial Services
                  (AFS), the Middle East and Africa region’s leading digital
                  payment solutions provider and fintech enabler, compared the
                  year-on-year difference in spends during the F1 week,
                  recording a 66% surge in payments spends during the recently
                  concluded 2024 F1 Gulf Air Bahrain Grand Prix.
                </p>
              </div>
              <div className="pb-8 mb-8 border-b border-default">
                <div className="flex">
                  <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px]">
                    Partnership
                  </p>
                  <div className="flex items-center ml-4">
                    <p className="text-xs  text-secondary ">March 05, 2024</p>
                    <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                    <p className="text-xs  text-secondary ">5 min read</p>
                  </div>
                </div>
                <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                  AFS enter strategic alliance with Xpence to innovate SME
                  financial management in Bahrain
                </h4>
                <p className=" text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
                  In a landmark move set to redefine financial management for
                  small and medium enterprises (SMEs) in Bahrain,ArabFinancial
                  Services (AFS), the Middle East and Africa region’s leading
                  digital payment solutions provider and fintech enabler, has
                  entered a strategic partnership with Xpence
                </p>
              </div>
              <div className="pb-8 mb-8 lg:border-b border-default">
                <div className="flex">
                  <p className=" text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px]">
                    Partnership
                  </p>
                  <div className="flex items-center ml-4">
                    <p className="text-xs  text-secondary ">March 05, 2024</p>
                    <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                    <p className="text-xs  text-secondary ">5 min read</p>
                  </div>
                </div>
                <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                  AFS conducts media workshop to showcase latest cloud-based
                  restaurant-first solution
                </h4>
                <p className=" text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
                  Arab Financial Services (AFS),the Middle East and Africa
                  region’s leading digital payment solutions provider and
                  fintech enabler, recently held a media workshop to showcase
                  its latest cloud-based restaurant-first
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default News;
