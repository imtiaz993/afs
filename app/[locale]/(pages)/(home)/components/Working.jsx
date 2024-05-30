"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import { useLocale, useTranslations } from "next-intl";
import WorkingAccordion from "./WorkingAccordion";

const Working = () => {
  const locale = useLocale();
  const t = useTranslations("Home.Working");
  const accordion = t.raw("accordion");
  const isArabic = locale === "ar";

  const [activeAccordion, setActiveAccordion] = useState(0);
  const accordionContent = [
    {
      title: accordion[0].title,
      text: accordion[0].description,
      image: "/assets/images/home/accordion.png",
    },
    {
      title: accordion[1].title,
      text: accordion[1].description,
      image: "/assets/images/home/accordion2.png",
    },
    {
      title: accordion[2].title,
      text: accordion[2].description,
      image: "/assets/images/home/accordion.png",
    },
    {
      title: accordion[3].title,
      text: accordion[3].description,
      image: "/assets/images/home/accordion1.jpg",
    },
    {
      title: accordion[4].title,
      text: accordion[4].description,
      image: "/assets/images/home/accordion.png",
    },
  ];

  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <div>
          <p className="mb-4 text-secondary text-left justify-start flex items-center">
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src="/assets/icons/home/diamond.svg"
              className={`${isArabic ? "ml-2" : "mr-2"}`}
              alt=""
            />{" "}
            {t("title")}
          </p>
          <h2 className="text-primary text-[32px] md:text-5xl mb-16 max-w-[950px] !leading-[120%]">
            {t("headline")}
          </h2>
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          <div className="lg:w-2/5 border-t border-default">
            {accordionContent.map((item, index) => (
              <WorkingAccordion
                item={item}
                index={index}
                activeAccordion={activeAccordion}
                accordionContent={accordionContent}
                setActiveAccordion={setActiveAccordion}
                key={index}
              />
            ))}
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={accordionContent[activeAccordion].image}
            className="w-full hidden md:flex h-full lg:w-1/2 relative mb-5 lg:mb-0 rounded"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Working;
