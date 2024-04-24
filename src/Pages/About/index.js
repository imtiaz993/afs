import React from "react";
import HeroWithImage from "../../Common/HeroWithImage";
import Story from "../../Common/Story";
import Commitment from "./Components/Commitment";
import History from "./Components/History";
import Team from "./Components/Team";
import CTA from "./Components/CTA";
import Partners from "./Components/Partners";
import Annnouncements from "./Components/Annnouncements";

const About = () => {
  return (
    <>
      <HeroWithImage
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
      <Partners />
      <Annnouncements />
    </>
  );
};

export default About;
