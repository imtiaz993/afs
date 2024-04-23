import React from "react";
import Hero from "./Components/Hero";
import PartnersSlider from "./Components/PartnersSlider";
import Working from "./Components/Working";
import Solutions from "./Components/Solutions";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import CTA from "./Components/CTA";
import News from "./Components/News";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnersSlider />
      <Working />
      <Solutions />
      <About />
      <Reviews />
      <CTA />
      <News />
    </>
  );
};

export default Home;
