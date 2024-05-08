import React from "react";
import Navbar from "app/common/Navbar";
import HomeHero from "./components/HomeHero";
import PartnersSlider from "../../../common/PartnersSlider";
import Working from "./components/Working";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CommonCTA from "app/common/CommonCTA";
import News from "app/common/News";
import PageLayout from "app/common/PageLayout";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <PageLayout>
        <PartnersSlider />
      </PageLayout>
      <Working />
      <Solutions />
      <About />
      <Reviews />
      <PageLayout styles={"!px-0 relative"}>
        <CommonCTA
          primaryContent={`Ready to revolutionize your financial transactions?`}
          primaryContentTextTarget={{
            text: "revolutionize",
            color: "text-brand-secondary",
          }}
          secondaryContent={"Experience the power of AFS today!"}
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact"}
        />
      </PageLayout>
      <News />
    </>
  );
};

export default Home;
