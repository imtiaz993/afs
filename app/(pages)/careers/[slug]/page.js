import React from "react";
import Navbar from "../../../common/Navbar";
import Hero from "./components/Hero";
import JobDetails from "./components/JobDetails";
import JobDescription from "./components/JobDescription";
import JobApplyForm from "./components/JobApplyForm";

const CareersDetail = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="border-b border-default">
        <div className="w-11/12 xl:w-[54%] mx-auto py-10 lg:py-24 md:flex justify-between">
          <JobDetails />
          <div className="md:w-[calc(100%-192px-32px)]">
            <JobDescription />
            <JobApplyForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersDetail;
