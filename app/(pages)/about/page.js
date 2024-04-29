import React from "react";
import Navbar from "../../common/Navbar";
import CommonHero from "../../common/CommonHero";
import Story from "../../common/Story";
import Commitment from "./components/Commitment";
import History from "./components/History";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Partners from "../../common/Partners";
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
        image={"/assets/images/about/hero.png"}
      />
      <Story />
      <Commitment />
      <History />
      <Team />
      <CTA />
      <Partners subtext={"Our trusted partners"} />
      <Annnouncements />
    </>
  );
};

export default About;
