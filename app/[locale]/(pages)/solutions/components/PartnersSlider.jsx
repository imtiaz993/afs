import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import PageLayout from "app/common/PageLayout";

const PartnersSlider = ({ gradientColor }) => {
  return (
    <PageLayout>
      <div className="relative">
        <Marquee
          gradient={true}
          gradientWidth={100}
          gradientColor={gradientColor ? gradientColor : "white"}
          autoFill
        >
          <div className="flex items-center mt-10 mb-6">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner1.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner2.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner3.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner4.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner5.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner6.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner7.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner8.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner9.svg"
              alt=""
            />
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="mr-2 w-full"
              src="/assets/icons/partnersSlider/partner10.svg"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </PageLayout>
  );
};

export default PartnersSlider;
