import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const CoreValues = () => {
  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          Our core values
        </p>
        <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] !leading-[120%]">
          Our values are at the core of our business
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-2">
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-[32px] md:text-5xl mb-10 !leading-[100%]">
              01
            </h2>
            <div>
              <h4 className="mb-4 text-primary text-xl md:text-2xl font-regular !leading-[130%]">
                Client centric
              </h4>
              <p className="text-primary text-lg !leading-7">
                Our dedication lies in understanding our clients and nurturing
                enduring partnerships, ensuring the delivery of exceptional
                services.
              </p>
            </div>
          </div>
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-[32px] md:text-5xl mb-10 !leading-[100%]">
              02
            </h2>
            <div>
              <h4 className="mb-4 text-primary text-xl md:text-2xl font-regular !leading-[130%]">
                Collaborative
              </h4>
              <p className="text-primary text-lg !leading-7">
                United as a cohesive team, we strive to consistently offer
                unparalleled service experiences across our extensive network.
              </p>
            </div>
          </div>
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-[32px] md:text-5xl mb-10 !leading-[100%]">
              03
            </h2>
            <div>
              <h4 className="mb-4 text-primary text-xl md:text-2xl font-regular !leading-[130%]">
                Consistent
              </h4>
              <p className="text-primary text-lg !leading-7">
                Consistently trusted for our reliability, we uphold integrity in
                every interaction, serving all stakeholders with excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CoreValues;
