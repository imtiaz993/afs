import React from "react";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
      <p className="mb-4 text-secondary flex items-center font-light">
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
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
        Our values are at the core of our business
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-2">
        <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
          <h1 className="text-brand-secondary text-4xl md:text-5xl mb-10">
            01
          </h1>
          <div>
            <h5 className="mb-4 text-primary font-medium text-xl md:text-2xl">
              Client centric
            </h5>
            <p className="text-primary text-lg font-light">
              Our dedication lies in understanding our clients and nurturing
              enduring partnerships, ensuring the delivery of exceptional
              services.
            </p>
          </div>
        </div>
        <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
          <h1 className="text-brand-secondary text-4xl md:text-5xl mb-10">
            02
          </h1>
          <div>
            <h5 className="mb-4 text-primary font-medium text-xl md:text-2xl">
              Collaborative
            </h5>
            <p className="text-primary text-lg font-light">
              United as a cohesive team, we strive to consistently offer
              unparalleled service experiences across our extensive network.
            </p>
          </div>
        </div>
        <div className="bg-subtle-neutral py-10 px-8 h-[299px] 2xl:h-[299px] rounded flex flex-col justify-between">
          <h1 className="text-brand-secondary text-4xl md:text-5xl mb-10">
            03
          </h1>
          <div>
            <h5 className="mb-4 text-primary font-medium text-xl md:text-2xl">
              Consistent
            </h5>
            <p className="text-primary text-lg font-light">
              Consistently trusted for our reliability, we uphold integrity in
              every interaction, serving all stakeholders with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
