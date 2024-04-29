import React from "react";
import Image from "next/image";

const WhyPartner = () => {
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
        Why partner with us
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
        Become part of a partnership community and reap the rewards of assisting
        driven companies in leveraging financial technologies.
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8">
        <div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="rounded w-full"
            src="/assets/images/partners/1.png"
            alt=""
          />
          <h1 className="mt-6 mb-2 text-lg text-primary">
            Access to cutting-edge technologies
          </h1>
          <p className="text-secondary font-light">
            Gain exclusive access to the latest financial technologies,
            enhancing your services and propelling your business ahead of the
            curve.
          </p>
        </div>
        <div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="rounded w-full"
            src="/assets/images/partners/2.png"
            alt=""
          />
          <h1 className="mt-6 mb-2 text-lg text-primary">
            Increased revenue streams
          </h1>
          <p className="text-secondary font-light">
            Unlock new revenue opportunities through commissions, referrals, and
            expanded offerings with our financial solutions.
          </p>
        </div>
        <div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="rounded w-full"
            src="/assets/images/partners/3.png"
            alt=""
          />
          <h1 className="mt-6 mb-2 text-lg text-primary">
            Enhanced product offering
          </h1>
          <p className="text-secondary font-light">
            Stand out with added value to your services by integrating our
            comprehensive financial tools and solutions.
          </p>
        </div>
        <div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="rounded w-full"
            src="/assets/images/partners/4.png"
            alt=""
          />
          <h1 className="mt-6 mb-2 text-lg text-primary">
            Knowledge and expertise sharing
          </h1>
          <p className="text-secondary font-light">
            Benefit from shared insights and expertise in financial trends and
            best practices, fostering business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
