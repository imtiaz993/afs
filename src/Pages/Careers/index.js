import React from "react";
import Navbar from "../../Common/Navbar";
import HeroWithImage from "../../Common/CommonHero";
import Story from "../../Common/Story";
import CoreValues from "./Components/CoreValues";

const Careers = () => {
  return (
    <>
      <Navbar />
      <HeroWithImage
        title={"Careers at AFS"}
        subtext={"Join us as we shape the future of payments experiences"}
        description={
          "Build the future of payments with us! Join the team that is revolutionizing digital payments technology and driving innovation."
        }
        image={"/assets/images/careers/hero.png"}
        buttonText={"See our open positions"}
        buttonNavigateLink={"/careers"}
      />
      <Story bg={true} />
      <CoreValues />
    </>
  );
};

export default Careers;