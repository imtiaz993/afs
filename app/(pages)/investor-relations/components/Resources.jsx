import React from "react";
import Image from "next/image";

const Resources = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16">
        <p className="mb-4 text-secondary flex items-center font-light">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          Resources
        </p>
        <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Ensuring transparency with unrestricted access to key documents and
          statements.
        </h1>
        <div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-white p-8 flex flex-col justify-between w-[316px] h-[200px] md:h-[252px] rounded mb-4 md:mb-0 md:mr-4">
              <h1 className="text-lg md:text-2xl text-secondary">
                Shareholders’ rights to participate and vote
              </h1>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  View document
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-between w-[316px] h-[200px] md:h-[252px] rounded">
              <h1 className="text-lg md:text-2xl text-secondary">
                AFS proxy form
              </h1>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  View document
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
