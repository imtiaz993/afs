import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 lg:w-[54%] mx-auto py-10 lg:py-24">
        <div className="md:px-10 lg:px-0">
          <Link to="/careers" className="inline-flex items-center mb-6">
            <div>
              <img src="/assets/icons/careers/back-arrow.svg" alt="" />
            </div>
            <p className="ml-4 text-secondary font-light">Back to careers</p>
          </Link>
          <h1 className="text-primary text-left text-2xl md:text-5xl leading-[100%]">
            Head of Customer Due Diligence and Screening Unit 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
