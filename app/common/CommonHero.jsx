"use client";

import Image from "next/image";
import PageLayout from "./PageLayout";
import { Link } from "i18n.config";

const CommonHero = ({
  title,
  subtext,
  description,
  secondaryDescription,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  onClick,
  image,
}) => {
  return (
    <PageLayout bg={"bg-subtle-neutral"} styles="!px-0">
      <div className="py-10 lg:py-24 pb-0 lg:pb-0">
        <div className="px-4 md:px-10 lg:px-16 pb-12 lg:pb-24">
          <p className=" mb-6 text-secondary ">{title}</p>
          <h1 className="text-primary text-left text-5xl lg:text-[88px] !leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
            {subtext}
          </h1>
          <div>
            {description && (
              <p className="mt-6 text-secondary text-left text-2xl md:max-w-[500px] lg:max-w-[864px] !leading-8">
                {description}
              </p>
            )}
            {secondaryDescription && (
              <p className="text-lg text-secondary mt-4 text-left md:max-w-[500px] lg:max-w-[864px]">
                {secondaryDescription}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            {buttonText && (onClick || buttonLink) && (
              <div className="">
                {onClick && (
                  <button
                    className=" w-full md:w-auto text-center text-white bg-brand-secondary  border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary py-[11px] md:py-[15px] px-[31px] font-medium rounded-sm"
                    onClick={onClick}
                  >
                    {buttonText}
                  </button>
                )}
                {buttonLink && (
                  <Link href={buttonLink}>
                    <button className="w-full md:w-auto text-center text-white bg-brand-secondary  border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-[11px] md:py-[15px] px-[31px] font-medium rounded-sm">
                      {buttonText}
                    </button>
                  </Link>
                )}
              </div>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <button className="w-full mt-2 sm:mt-0 sm:ml-4 text-brand-secondary hover:text-brand-primary font-medium border border-brand-secondary hover:border-brand-primary py-[11px] md:py-[15px] px-[31px]">
                  {secondaryButtonText}
                </button>
              </Link>
            )}
          </div>
        </div>
        {image && (
          <div className="xl:rounded overflow-hidden">
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
