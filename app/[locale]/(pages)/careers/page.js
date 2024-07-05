"use client";

import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Story from "app/common/Story";
import CoreValues from "./components/CoreValues";
import Testimonials from "./components/Testimonials";
import OpenPositions from "./components/OpenPositions";
import JobQueryForm from "./components/JobQueryForm";
import { careerContentData } from "./careerDetail";

const Careers = () => {
  const storyContent = {
    primaryContent: [
      "At AFS we are changing the way people use and interact with technology and shaping the future of digital payments experiences.",
    ],
    secondaryContent: [
      "Regulated by the Central Bank of Bahrain and the Central Bank of Egypt, AFS is owned by a total of 37 banks and financial institutions and serves over 60 bank clients in more than 20 countries across the Middle East and Africa region.",
      "Our digital payments products and services portfolio offers a diverse selection of issuing, processing, merchant acquiring and fintech innovation solutions.",
    ],
    tertiaryContent: [
      "As a regional leader in payments innovation, we drive progress by integrating exciting digital solutions that add significant value to businesses, banks, and consumers.",
      "Our customers and our people stand at the core of our operations. Our human capital across various markets is our most valuable asset. We prioritize a positive, inclusive work environment that fosters growth, contribution, and well-being. Joining us means being part of an innovative team committed to making a difference, valuing collaboration, creativity, and continuous learning, and offering rewarding challenges.",
    ],
  };

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Careers at AFS"}
        subtext={"Join us as we shape the future of payments experiences"}
        description={
          "Build the future of payments with us! Join the team that is revolutionizing digital payments technology and driving innovation."
        }
        image={"/assets/images/careers/career.png"}
        buttonText={"See our open positions"}
        onClick={() => {
          const section = document.querySelector("#position-table");
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <Story bg={true} content={storyContent} />
      <CoreValues />
      <Testimonials />
      <OpenPositions positions={careerContentData} />
      <JobQueryForm />
    </>
  );
};

export default Careers;
