import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { calculateReadingTime } from "app/[locale]/(pages)/news/utility/util";
import PageLayout from "./PageLayout";

const News = ({ title, bg, category = "all" }) => {
  const locale = useLocale();
  const t = useTranslations("NewsPostData");
  const allLatestNews = t.raw("latest news");
  const isArabic = locale === "ar";

  // Filter the news articles based on the selected category
  const latestNews =
    category === "all"
      ? allLatestNews
      : allLatestNews.filter((news) => news.newsCategory === category);

  return (
    <div className="border-b border-default">
      <PageLayout bg={bg}>
        <div className="py-10 lg:py-24 ">
          <div className="mb-12 md:flex justify-between items-center sm:items-end">
            <h3
              className={`text-[40px] text-primary  !leading-[120%] ${
                isArabic ? "ml-4" : "mr-4"
              }`}
            >
              {/* {t("title")} */}
              {title}
            </h3>
            <div className="mt-5 md:mt-0 flex items-center cursor-pointer border-b border-white hover:border-brand-secondary">
              <Link href="/news">
                <p
                  className={`text-brand-secondary  whitespace-nowrap font-medium ${
                    isArabic ? "ml-2" : "mr-2"
                  }`}
                >
                  {t("see all")}
                </p>
              </Link>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className={`w-auto ${isArabic ? "rotate-180" : ""}`}
                src="/assets/icons/home/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 ">
              <Link href={"/news/" + latestNews[0].slug} className="group">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="bg-gray-700 w-full rounded-[4px]"
                  src={latestNews[0].image}
                  alt=""
                />
                <div className="flex mt-6">
                  {category == "all" && (
                    <p
                      className={` text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px] min-w-[84px] flex justify-center ${
                        isArabic ? "ml-4" : "mr-4"
                      }`}
                    >
                      {latestNews[0].newsCategory}
                    </p>
                  )}
                  <div className={"flex items-center"}>
                    <p className="text-xs  text-secondary ">
                      {latestNews[0].date}
                    </p>
                    <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                    <p className="text-xs  text-secondary ">
                      {calculateReadingTime(latestNews[0].content)} min read
                    </p>
                  </div>
                </div>
                <h4 className="text-primary text-[20px] sm:text-2xl mb-4 mt-2 font-regular !leading-[130%] line-clamp-2 group-hover:text-brand-secondary">
                  {latestNews[0].title}
                </h4>
                <p className="text-lg text-primary overflow-hidden text-ellipsis line-clamp-2 !leading-7">
                  {latestNews[0].content}
                </p>
              </Link>
            </div>
            <div className=" mt-16 lg:mt-0 lg:w-2/5">
              {latestNews.slice(1, 4).map((item, index) => (
                <div
                  className={`pb-8 mb-8 ${
                    index === latestNews.length - 1 ? "lg:border-b" : "border-b"
                  } border-default`}
                >
                  <Link href={"/news/" + item.slug} className="group">
                    <div key={index} className="flex">
                      {category == "all" && (
                        <p
                          className={` text-primary bg-subtle-neutral py-1 px-2 text-sm  rounded-[4px] min-w-[84px] flex justify-center ${
                            isArabic ? "ml-4" : "mr-4"
                          }`}
                        >
                          {item.newsCategory}
                        </p>
                      )}
                      <div className={"flex items-center"}>
                        <p className="text-xs  text-secondary ">{item.date}</p>
                        <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                        <p className="text-xs  text-secondary ">
                          {calculateReadingTime(item.content)} min read
                        </p>
                      </div>
                    </div>
                    <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2 font-regular !leading-[130%] line-clamp-2 group group-hover:text-brand-secondary">
                      {item.title}
                    </h4>
                    <p className="text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis !leading-7">
                      {item.content}
                    </p>
                  </Link>
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
