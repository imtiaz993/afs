import React from "react";

const Partners = ({ bg, title, subtext }) => {
  return (
    <div className={`${bg ? "bg-subtle-neutral" : ""}`}>
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
        {title && <p className=" mb-4 text-secondary text-center">{title}</p>}
        <h1 className="mb-5 md:mb-16 text-2xl md:text-[40px] text-primary text-center">
          {subtext}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-2">
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner0.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner1.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner2.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner3.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner4.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner5.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner6.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner7.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner8.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner9.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner10.svg"
              alt=""
            />
          </div>
          <div className="min-w-36 md:min-w-48 h-20 flex justify-center items-center">
            <img
              className=""
              src="/assets/icons/partnersSlider/partner11.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
