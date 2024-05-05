import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "app/common/PageLayout";
import { useTranslations } from "next-intl";

const HomeHero = () => {
  const t = useTranslations("Home.Hero");
  return (
    <PageLayout styles="home-hero-gradient md:rounded overflow-hidden md:!pr-0">
      <div className="py-10 lg:py-32 flex relative">
        <div className="flex flex-col items-center md:items-start relative z-10">
          <h1 className="text-white text-center md:text-left  text-3xl md:text-5xl lg:text-[88px] leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
          {t("title")}
          </h1>
          <p className="text-white  text-center md:text-left text-base md:text-2xl md:max-w-[400px] lg:max-w-[640px] mt-6">
            Gain access to enterprise-grade tools designed to streamline your
            day-to-day financial operations, tailored for banks, fintechs,
            businesses and consumers.
          </p>
          <Link href="/contact">
            <button className="transition-colors duration-500 text-center text-brand-secondary hover:text-white hover:bg-brand-secondary py-4 w-[185px] bg-white font-medium rounded-sm mt-10">
              Contact our team
            </button>
          </Link>
        </div>
        <div className="absolute top-0 right-0 bottom-0 opacity-40 md:opacity-100">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full object-cover"
            src="/assets/images/home/hero.png"
            alt=""
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default HomeHero;
