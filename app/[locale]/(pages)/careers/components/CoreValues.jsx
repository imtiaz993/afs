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
        <h2 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Our values are at the core of our business
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-2">
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-4xl md:text-5xl mb-10">
              01
            </h2>
            <div>
              <h4 className="mb-4 text-primary font-medium text-xl md:text-2xl">
                Client centric
              </h4>
              <p className="text-primary text-lg ">
                Our dedication lies in understanding our clients and nurturing
                enduring partnerships, ensuring the delivery of exceptional
                services.
              </p>
            </div>
          </div>
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-4xl md:text-5xl mb-10">
              02
            </h2>
            <div>
              <h4 className="mb-4 text-primary font-medium text-xl md:text-2xl">
                Collaborative
              </h4>
              <p className="text-primary text-lg ">
                United as a cohesive team, we strive to consistently offer
                unparalleled service experiences across our extensive network.
              </p>
            </div>
          </div>
          <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
            <h2 className="text-brand-secondary text-4xl md:text-5xl mb-10">
              03
            </h2>
            <div>
              <h4 className="mb-4 text-primary font-medium text-xl md:text-2xl">
                Consistent
              </h4>
              <p className="text-primary text-lg ">
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
