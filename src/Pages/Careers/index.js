import React from "react";
import Navbar from "../../Common/Navbar";
import CommonHero from "../../Common/CommonHero";
import Story from "../../Common/Story";
import CoreValues from "./Components/CoreValues";
import Testimonials from "./Components/Testimonials";
import OpenPositions from "./Components/OpenPositions";
import JobQueryForm from "./Components/JobQueryForm";

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
