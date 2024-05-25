"use client";

import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";
import { Link } from "i18n.config";

const CommonHero = ({
  title,
  subtext,
  description,
  buttonText,
  buttonLink,
  onClick,
  image,
}) => {
  return (
    <PageLayout bg={"bg-subtle-neutral"} styles="!px-0">
      <div className="py-10 lg:py-24 pb-0 lg:pb-0">
        <div className="px-4 md:px-10 lg:px-16">
          <p className=" mb-6 text-secondary ">{title}</p>
          <h1 className="text-primary text-left text-5xl lg:text-[88px] !leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
            {subtext}
          </h1>
          {description && (
            <p className="mt-6 text-secondary text-left text-2xl md:max-w-[500px] lg:max-w-[864px] !leading-8">
              {description}
            </p>
          )}
          {buttonText && (onClick || buttonLink) && (
            <div className="flex justify-start mt-10 mb-10 lg:mb-0">
              {onClick && (
                <button
                  className=" w-full md:w-auto text-center text-white bg-brand-secondary  border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary py-[11px] md:py-[15px] px-8 font-medium rounded-sm"
                  onClick={onClick}
                >
                  {buttonText}
                </button>
              )}
              {buttonLink && (
                <Link href={buttonLink} className="w-full md:w-auto">
                  <button className="w-full md:w-auto text-center text-white bg-brand-secondary  border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-[11px] md:py-[15px] px-8 font-medium rounded-sm">
                    {buttonText}
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
        {image && (
          <div className="mt-5 lg:mt-24 rounded overflow-hidden">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-full"
              src={image}
              alt=""
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CommonHero;
