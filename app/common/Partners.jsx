"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Partners = ({ bg, title, subtext, category = "all" }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const imageData = [
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
      src: "/assets/icons/partnersSlider/bank-IL-Mono.svg",
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
      hoverSrc:
        "/assets/icons/partnersSlider/bank-StandardChartered-Original.svg",
    },
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
    return item.src.includes(category); // Otherwise filter by "bank" or "business"
  });

  return (
    <PageLayout bg={bg ? "bg-subtle-neutral" : ""}>
      <div className="py-10 lg:py-24">
        {title && <p className="mb-4 text-secondary text-center">{title}</p>}
        <h2 className="mb-5 md:mb-16 text-[32px] md:text-5xl text-primary text-center !leading-[120%]">
          {subtext}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-2">
          {filteredImageData.map((imageData, index) => (
            <div
              key={index}
              className="min-w-36 md:min-w-48 h-20 flex justify-center items-center"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                sizes="100vw"
                width={192} // Set width for better image optimization
                height={40} // Set height for better image optimization
                className="w-auto"
                src={
                  hoveredImage === index ? imageData.hoverSrc : imageData.src
                }
                alt={`Partner ${index}`} // Add descriptive alt text
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Partners;
