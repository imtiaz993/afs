import React from "react";
import Navbar from "app/common/Navbar";
import HomeHero from "./components/HomeHero";
import PartnersSlider from "./components/PartnersSlider";
import Working from "./components/Working";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CommonCTA from "app/common/CommonCTA";
import News from "app/common/News";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <PartnersSlider />
      <Working />
      <Solutions />
      <About />
      <Reviews />
      <CommonCTA />
      <News />
    </>
  );
};

export default Home;
