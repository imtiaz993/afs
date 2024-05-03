import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const Resources = () => {
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
          Resources
        </p>
        <h2 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Ensuring transparency with unrestricted access to key documents and
          statements.
        </h2>
        <div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-white p-8 flex flex-col justify-between w-[316px] h-[200px] md:h-[252px] rounded mb-4 md:mb-0 md:mr-4">
              <h4 className="text-lg md:text-2xl text-secondary">
                Shareholders’ rights to participate and vote
              </h4>
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
              <h4 className="text-lg md:text-2xl text-secondary">
                AFS proxy form
              </h4>
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
    </PageLayout>
  );
};

export default Resources;
