// import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";
import SingleNav from "./SingleNav";

const UsedTrustedBy = () => {
  return (
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Used & trusted by"} />
        <div className="md:w-[calc(100%-192px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
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
      </div>
    </PageLayout>
  );
};

export default UsedTrustedBy;
