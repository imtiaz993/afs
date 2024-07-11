"use client";

import Image from "next/image";
import { useState } from "react";

const ContactOurTeamComponent = () => {
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

  return (
    <div className="md:max-w-[624px]">
      <h2 className="text-[48px] font-[400] !leading-[57.6px] text-primary">
        Contact our team
      </h2>
      <p className="text-[24px] font-[400] !leading-[32px] text-secondary mt-6">
        Want to learn more about our diverse, innovation-led digital payments
        products and services? Connect with our team to explore tailored
        options, discuss personalized offerings and experience exceptional
        customer service.
      </p>
      <p className="text-[14px] font-[400] !leading-[18px] text-primary mt-14">
        Trusted by industry leaders
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
        {imageData.map((imageData, index) => (
          <div
            key={index}
            className="h-20 flex justify-center items-center bg-white"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              sizes="100vw"
              width={192} // Set an appropriate width for the logos
              height={40} // Set an appropriate height for the logos
              className="w-auto"
              src={hoveredImage === index ? imageData.hoverSrc : imageData.src}
              alt={`Partner ${index}`} // Add descriptive alt text
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOurTeamComponent;
