import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Story from "app/common/Story";
import BOD from "./components/BOD";
import Resources from "./components/Resources";
import News from "app/common/News";

const InvestorRelations = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Investor relations"}
        subtext={"Building trust and driving value"}
        image={"/assets/images/investor/investor.png"}
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
