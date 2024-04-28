import React from "react";
import Navbar from "../../Common/Navbar";
import Hero from "./Hero";
import JobDetails from "./Components/JobDetails";
import JobApplyForm from "./Components/JobApplyForm";

const CareersDetail = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobDetails />
      <JobApplyForm />
    </>
  );
};

export default CareersDetail;
