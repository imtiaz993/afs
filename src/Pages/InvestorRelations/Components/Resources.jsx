import React from "react";

const Resources = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 mx-auto py-5 lg:py-24 md:px-10 lg:px-16">
        <p className="mb-4 text-secondary flex items-center">
          <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" />{" "}
          Resources
        </p>
        <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Ensuring transparency with unrestricted access to key documents and
          statements.
        </h1>
        <div>
          <div className="flex">
            <div className="bg-white p-8 flex flex-col justify-between w-[316px] h-[252px] rounded mr-4">
              <h1 className="text-lg md:text-2xl text-secondary">
                Shareholders’ rights to participate and vote
              </h1>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  View document
                </p>
                <img src="/assets/icons/home/arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-between w-[316px] h-[252px] rounded">
              <h1 className="text-lg md:text-2xl text-secondary">
                AFS proxy form
              </h1>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  View document
                </p>
                <img src="/assets/icons/home/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
