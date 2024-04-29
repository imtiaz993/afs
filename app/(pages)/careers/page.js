"use client"

import React from "react";
import Navbar from "../../common/Navbar";
import CommonHero from "../../common/CommonHero";
import Story from "../../common/Story";
import CoreValues from "./components/CoreValues";
import Testimonials from "./components/Testimonials";
import OpenPositions from "./components/OpenPositions";
import JobQueryForm from "./components/JobQueryForm";

const Careers = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Careers at AFS"}
        subtext={"Join us as we shape the future of payments experiences"}
        description={
          "Build the future of payments with us! Join the team that is revolutionizing digital payments technology and driving innovation."
        }
        image={"/assets/images/careers/hero.png"}
        buttonText={"See our open positions"}
        onClick={() => {
          const section = document.querySelector("#position-table");
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <Story bg={true} />
      <CoreValues />
      <Testimonials />
      <OpenPositions />
      <JobQueryForm />
    </>
  );
};

export default Careers;
