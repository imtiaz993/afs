import React from "react";

const CTA = () => {
  return (
    <div className="md:w-11/12 mx-auto flex cta-home-gradient relative">
      <div className="w-full lg:max-w-[700px] py-10 lg:py-24 px-10 lg:pl-16 relative z-10 flex flex-col items-center lg:items-start">
        <h1 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%]">
          Ready to <span className="text-brand-secondary">revolutionize</span>{" "}
          your financial transactions?
        </h1>
        <p className="text-center lg:text-left text-base md:text-2xl text-brand-primary mt-4 mb-10">
          Experience the power of AFS today!
        </p>
        <button
          data-aos="fade-up"
          className="transition-colors duration-500 text-center text-white py-4 w-44 bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium rounded-sm"
        >
          Contact our team
        </button>
      </div>
      <img
        className="hidden lg:block w-1/2 absolute top-0 right-0 bottom-0 h-full"
        src="/assets/images/home/CTA.png"
        alt=""
      />
    </div>
  );
};

export default CTA;
