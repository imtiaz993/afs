import React from "react";
import Navbar from "../../Common/Navbar";
import HeroWithImage from "../../Common/CommonHero";
import Story from "../../Common/Story";
import BOD from "./Components/BOD";
import Resources from "./Components/Resources";
import News from "../../Common/News";

const InvestorRelations = () => {
  return (
    <>
      <Navbar />
      <HeroWithImage
        title={"Investor relations"}
        subtext={"Building trust and driving value"}
        image={"/assets/images/about/hero.png"}
        description={
          "At AFS we believe in transparency, accountability, and open communications with our shareholders and diverse stakeholders."
        }
      />
      <Story bg={true} />
      <BOD />
      <Resources />
      <News />
    </>
  );
};

export default InvestorRelations;
