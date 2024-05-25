import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const Commitment = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
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
          Our commitment
        </p>
        <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] !leading-[120%]">
          We are committed to fast-tracking payments innovation and making
          superior digital payments experiences more accessible, secure,
          convenient, and seamless.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="rounded w-full"
              src="/assets/images/about/commitment-card.png"
              alt=""
            />
            <h4 className="mt-4 mb-2 text-xl md:text-2xl text-primary !leading-[130%]">
              Our vision
            </h4>
            <p className="text-lg  text-secondary !leading-7">
              To be the leading enabler for digital transaction transformation.
            </p>
          </div>
          <div>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="rounded w-full"
              src="/assets/images/about/commitment-card.png"
              alt=""
            />
            <h4 className="mt-4 mb-2 text-xl md:text-2xl text-primary !leading-[130%]">
              Our mission
            </h4>
            <p className="text-lg  text-secondary !leading-7">
              Offer better, faster, and more secure products and services that
              support our customers’ growth.
            </p>
          </div>
          <div>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="rounded w-full"
              src="/assets/images/about/commitment-card.png"
              alt=""
            />
            <h4 className="mt-4 mb-2 text-xl md:text-2xl text-primary !leading-[130%]">
              Our values
            </h4>
            <p className="text-lg  text-secondary !leading-7">
              A client centric, collaborative and consistent entity, committed
              to delivering superior experiences.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Commitment;
