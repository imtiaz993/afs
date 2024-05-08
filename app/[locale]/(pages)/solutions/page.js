import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
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
      <SolutionBanks />
      <SolutionBusinesses />
      <SolutionConsumers />
    </>
  );
};

export default Solutions;
