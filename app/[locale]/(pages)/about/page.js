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
  const storyContent = {
    primaryContent: [
      "At AFS we empower the region’s business and banking communities, end-users and consumers with customized payments technologies and solutions.",
    ],
    secondaryContent: [
      "Regulated by the Central Bank of Bahrain, AFS is owned by a total of 37 banks and financial institutions and serves over 60 clients in more than 20 countries across the Middle East and Africa region.",
      "The company provides numerous ground-breaking end-to-end digital payment products, services and solutions to banks and businesses. These include card processing services, merchant acquiring, fintech solutions and value-added services.",
    ],
    tertiaryContent: [
      "Our dedication to payments innovation and delivering cutting-edge payments technology has propelled AFS to become a market leader.",
      "We are committed to being the leading enabler for digital transaction transformation and we offer unique, future-driven payments experiences.",
      "We fast-track payments innovation and make superior digital payments experiences a more accessible, secure, convenient, and seamless reality, regionally.",
    ],
  };
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
      <Story content={storyContent} />
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
