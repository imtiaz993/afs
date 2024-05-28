import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Story from "app/common/Story";
import Commitment from "./components/Commitment";
import History from "./components/History";
import Team from "./components/Team";
import AboutCTA from "./components/AboutCTA";
import Partners from "app/common/Partners";
import Annnouncements from "./components/Annnouncements";

const About = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"About us"}
        subtext={
          "The region’s leading digital payment solutions provider and fintech enabler"
        }
        image={"/assets/images/about/about-us.png"}
      />
      <Story />
      <Commitment />
      <History />
      <Team />
      <AboutCTA />
      <Partners subtext={"Our trusted partners"} />
      <Annnouncements />
    </>
  );
};

export default About;
