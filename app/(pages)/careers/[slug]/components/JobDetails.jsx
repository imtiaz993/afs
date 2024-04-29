import React from "react";

const JobDetails = () => {
  return (
    <div className="md:w-48 mb-10 md:mb-0">
      <div className="mb-6">
        <h1 className="text-lg text-primary font-medium">Location</h1>
        <p className="text-primary font-light">Kingdom of Bahrain</p>
      </div>
      <div className="mb-6">
        <h1 className="text-lg text-primary font-medium">Type</h1>
        <p className="text-primary font-light">Full time</p>
      </div>
      <div className="mb-6">
        <h1 className="text-lg text-primary font-medium">Department</h1>
        <p className="text-primary font-light">Legal</p>
      </div>
      <button
        data-aos="fade-up"
        className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-3 w-[192px] rounded-sm"
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
