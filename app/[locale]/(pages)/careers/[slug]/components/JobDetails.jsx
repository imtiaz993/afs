"use client"

import React from "react";

const JobDetails = () => {
  return (
    <div className="md:w-48 mb-10 md:mb-0">
      <div className="mb-6">
        <h5 className="text-lg text-primary !leading-6font-medium !leading-7">Location</h5>
        <p className="text-primary !leading-6">Kingdom of Bahrain</p>
      </div>
      <div className="mb-6">
        <h5 className="text-lg text-primary !leading-6font-medium !leading-7">Type</h5>
        <p className="text-primary !leading-6">Full time</p>
      </div>
      <div className="mb-8">
        <h5 className="text-lg text-primary !leading-6font-medium !leading-7">Department</h5>
        <p className="text-primary !leading-6">Legal</p>
      </div>
      <button
        
        className=" text-center text-white bg-brand-secondary  border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary !leading-6hover:border-brand-primary !leading-6 py-[11px] w-full md:w-[192px] rounded-sm"
        onClick={() => {
          const section = document.querySelector("#apply-form");
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default JobDetails;
