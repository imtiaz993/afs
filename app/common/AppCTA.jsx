import React from "react";
import Image from "next/image";

const AppCTA = ({ bgColor }) => {
  return (
    <div
      className={`${
        bgColor ? bgColor : "app-cta-gradient"
      } md:h-[380px] relative p-6 md:py-16 md:px-10`}
    >
      <div className="sm:max-w-[438px] relative z-10">
        <h2 className="text-2xl md:text-[32px] !leading-[28.8px] md:!leading-[38.4px] text-primary">
          Download the best wallet solution in Bahrain
        </h2>
        <p className="pt-2 md:pt-4 text-base text-secondary sm:opacity-85">
          If you are based in Bahrain, take advantage of the fastest and most
          secure wallet solution and download our BPay app on Google play or App
          Store
        </p>
        <div
          className="sm:flex mt-6 md:my-10 "
          style={{
            width: "max-content",
          }}
        >
          <Image
            src={"/assets/icons/solutions/appstore.svg"}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
            alt=""
          />

          <Image
            src={"/assets/icons/solutions/googleplay.svg"}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full sm:ml-2 mt-2 sm:mt-0"
            alt=""
          />
        </div>
      </div>
      <div className="absolute right-5 lg:right-5 xl:right-20 bottom-0 top-[50px] sm:top-11 opacity-30 sm:opacity-100 md:opacity-30 lg:opacity-100">
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full "
          src="/assets/images/home/forConsumers.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AppCTA;
