import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Common/ScrollToTop";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import InvestorRelations from "../Pages/InvestorRelations";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default WebRoutes;
