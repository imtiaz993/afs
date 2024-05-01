"use client"

import React from "react";

const JobDetails = () => {
  return (
    <div className="md:w-48 mb-10 md:mb-0">
      <div className="mb-6">
        <h5 className="text-lg text-primary font-medium">Location</h5>
        <p className="text-primary font-light">Kingdom of Bahrain</p>
      </div>
      <div className="mb-6">
        <h5 className="text-lg text-primary font-medium">Type</h5>
        <p className="text-primary font-light">Full time</p>
      </div>
      <div className="mb-6">
        <h5 className="text-lg text-primary font-medium">Department</h5>
        <p className="text-primary font-light">Legal</p>
      </div>
      <button
        
        className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[11.2px] w-[192px] rounded-sm"
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
