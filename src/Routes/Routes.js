import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Common/ScrollToTop";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Home from "../Pages/Home";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default WebRoutes;
