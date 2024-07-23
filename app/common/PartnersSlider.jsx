"use client";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnersSlider = ({ gradient, gradientColor, category = "all" }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const imageData = [
    // Bank Logos
    {
      src: "/assets/icons/partnersSlider/bank-ABC-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-ABC-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-Ahlibank-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-Ahlibank-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-AhliUnited-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-AhliUnited-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-Alsalambank-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-Alsalambank-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-ARABBANK-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-ARABBANK-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-CBI-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-CBI-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-Dohar-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-Dohar-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-GulfAfrican-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-GulfAfrican-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-ILA-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-ILA-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-SharjahIslamic-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-SharjahIslamic-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-Sohar-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-Sohar-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/bank-StandardChartered-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/bank-StandardChartered-Original.svg",
    },

    // Business Logos
    {
      src: "/assets/icons/partnersSlider/business-alsalam-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-alsalam-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-ASU-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-ASU-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-DHL-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-DHL-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-fourseasons-Mono.svg",
      hoverSrc:
        "/assets/icons/partnersSlider/business-fourseasons-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-GulfAir-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-GulfAir-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-KingFahd-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-KingFahd-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-Lulu-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-Lulu-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-STC-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-STC-Original.svg",
    },
    {
      src: "/assets/icons/partnersSlider/business-United-Mono.svg",
      hoverSrc: "/assets/icons/partnersSlider/business-United-Original.svg",
    },
  ];

  // Filter imageData based on the category prop
  const filteredImageData = imageData.filter((item) => {
    if (category === "all") return true; // Show all if category is "all"
    return item.src.includes(category); // Filter by "bank" or "business"
  });

  return (
    <div className="relative" dir="ltr">
      <Marquee
        gradient={gradient == false ? gradient : true}
        gradientWidth={100}
        autoFill
        gradientColor={gradientColor ? gradientColor : "white"}
      >
        <div className="flex items-center mt-10 mb-6">
          {filteredImageData.map((imageData, index) => (
            <Image
              key={index}
              sizes="100vw"
              width={0}
              height={0}
              className="mr-4 w-full"
              src={hoveredImage === index ? imageData.hoverSrc : imageData.src}
              alt=""
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PartnersSlider;
