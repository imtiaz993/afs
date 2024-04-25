import React from "react";
import Navbar from "../../Common/Navbar";
import Hero from "./Components/Hero";
import PartnersSlider from "./Components/PartnersSlider";
import Working from "./Components/Working";
import Solutions from "./Components/Solutions";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import CTA from "./Components/CTA";
import News from "../../Common/News";

const Home = () => {
  return (
    <>
      <Navbar />
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
