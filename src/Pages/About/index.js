import React from "react";
import Navbar from "../../Common/Navbar";
import CommonHero from "../../Common/CommonHero";
import Story from "../../Common/Story";
import Commitment from "./Components/Commitment";
import History from "./Components/History";
import Team from "./Components/Team";
import CTA from "./Components/CTA";
import Partners from "../../Common/Partners";
import Annnouncements from "./Components/Annnouncements";

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
