import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Common/ScrollToTop";
import Footer from "../Common/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import InvestorRelations from "../Pages/InvestorRelations";
import Partners from "../Pages/Partners";
import Careers from "../Pages/Careers";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default WebRoutes;
