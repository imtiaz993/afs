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
              className="mr-2 w-full"
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
