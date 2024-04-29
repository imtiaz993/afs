import React from "react";
import Navbar from "../../common/Navbar";
import CommonHero from "../../common/CommonHero";
import Story from "../../common/Story";
import BOD from "./components/BOD";
import Resources from "./components/Resources";
import News from "../../common/News";

const InvestorRelations = () => {
  return (
    <>
      <Navbar />
      <CommonHero
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
