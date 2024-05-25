import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Partners = ({ bg, title, subtext }) => {
  return (
    <PageLayout bg={bg ? "bg-subtle-neutral" : ""}>
      <div className="py-10 lg:py-24">
        {title && <p className=" mb-4 text-secondary text-center ">{title}</p>}
        <h2 className="mb-5 md:mb-16 text-[32px] md:text-5xl text-primary text-center !leading-[120%]">
          {subtext}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-2">
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner0.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner1.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner2.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner3.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner4.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner5.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner6.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner7.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner8.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner9.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner10.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src="/assets/icons/partnersSlider/partner11.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Partners;
