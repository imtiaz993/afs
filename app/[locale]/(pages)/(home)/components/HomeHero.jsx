import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "app/common/PageLayout";
import { useTranslations, useLocale } from "next-intl";

const HomeHero = () => {
  const locale = useLocale();
  const t = useTranslations("Home.Hero");
  const isArabic = locale === "ar";

  return (
    <PageLayout
      styles={`home-hero-gradient md:rounded overflow-hidden ${
        isArabic
          ? "!px-2 md:!px-10 md:!pl-0 lg:!px-16 lg:!pl-0"
          : "!px-2 md:!px-10 md:!pr-0 lg:!px-16 lg:!pr-0"
      }`}
    >
      <div className="-mb-5 md:mb-0 pt-12 md:py-32 md:flex md:relative">
        <div className="px-3 flex flex-col items-start relative z-10">
          <h1 className="text-white text-5xl lg:text-[88px] !leading-[100%] md:max-w-[500px] lg:max-w-[670px]">
            {t("title")}
          </h1>
          <p className="text-white text-2xl md:max-w-[400px] lg:max-w-[640px] mt-6 opacity-80">
            {t("description")}
          </p>
          <Link href="/contact-team" className="w-full md:mx-0 md:w-[185px]">
            <button className=" text-center text-brand-secondary py-3 md:py-4 w-full md:w-[185px] bg-white transition-colors duration-300 hover:bg-surface-neutral hover:text-brand-primary font-medium rounded-sm mt-10">
              {t("contact team")}
            </button>
          </Link>
        </div>
        <div
          className={`bg-transparent relative -top-1 md:absolute md:top-0  md:bottom-0 ${
            isArabic ? "md:left-0" : "md:right-0"
          }`}
        >
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className={`w-full h-full object-cover ${
              isArabic ? "md:transform md:scale-x-[-1]" : ""
            }`}
            src="/assets/images/home/hero2.png"
            alt=""
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default HomeHero;
