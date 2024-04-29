import React from "react";
import Navbar from "../../common/Navbar";
import Hero from "./components/Hero";
import PartnersSlider from "./components/PartnersSlider";
import Working from "./components/Working";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import News from "../../common/News";

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
