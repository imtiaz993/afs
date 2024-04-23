import React from "react";
import Marquee from "react-fast-marquee";

const PartnersSlider = () => {
  return (
    <div className="md:w-11/12 mx-auto relative">
      <Marquee gradient={true} gradientWidth={100}>
        <div className="flex items-center mt-10 mb-6">
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner1.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner2.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner3.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner4.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner5.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner6.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner7.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner8.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner9.svg"
            alt=""
          />
          <img
            className="mr-2"
            src="/assets/icons/partnersSlider/partner10.svg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default PartnersSlider;
