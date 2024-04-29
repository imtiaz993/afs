"use client";

import React from "react";
import Image from "next/image";

const CommonHero = ({
  title,
  subtext,
  description,
  buttonText,
  onClick,
  image,
}) => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 mx-auto py-10 lg:py-24 pb-0 lg:pb-0">
        <div className="md:px-10 lg:px-16">
          <p className=" mb-6 text-secondary font-light">{title}</p>
          <h1 className="text-primary text-center md:text-left text-3xl md:text-5xl lg:text-[88px] leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
            {subtext}
          </h1>
          {description && (
            <p className="mt-6 text-secondary text-center md:text-left text-lg md:text-2xl md:max-w-[500px] lg:max-w-[864px] font-light">
              {description}
            </p>
          )}
          {buttonText && onClick && (
            <div className="flex justify-center md:justify-start mt-10 mb-10 lg:mb-0">
              <button
                data-aos="fade-up"
                className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-4 px-8 font-medium rounded-sm"
                onClick={onClick}
              >
                {buttonText}
              </button>
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
    </div>
  );
};

export default CommonHero;