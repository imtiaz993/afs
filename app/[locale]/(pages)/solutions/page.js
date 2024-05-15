import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import PageNav from "./components/PageNav";
import SolutionBanks from "./components/SolutionBanks";
import SolutionBusinesses from "./components/SolutionBusinesses";
import SolutionConsumers from "./components/SolutionConsumers";

const Solutions = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Solution overview"}
        subtext={"Amplify your business financial opportunity"}
        image={"/assets/images/about/hero.png"}
      />
      <div className="relative border-b border-default" id="solutions-observer">
        <PageNav />
        <SolutionBanks />
        <SolutionBusinesses />
        <SolutionConsumers />
      </div>
    </>
  );
};

export default Solutions;
