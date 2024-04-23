import React from "react";

const PartnersSlider = () => {
  return (
    <div className="md:w-11/12 mx-auto relative">
      {/* <div className="w-10 h-full  blur-edge absolute z-10 top-0 right-0 bottom-0"></div> */}
      <marquee behavior="" direction="">
        <div className="flex items-center mt-10 mb-6">
          <img className="mr-2" src="/assets/icons/partnersSlider/partner1.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner2.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner3.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner4.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner5.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner6.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner7.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner8.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner9.svg" alt="" />
          <img className="mr-2" src="/assets/icons/partnersSlider/partner10.svg" alt="" />
        </div>
      </marquee>
    </div>
  );
};

export default PartnersSlider;
