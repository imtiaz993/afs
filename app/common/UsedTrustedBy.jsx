"use client";

import Image from "next/image";
import PageLayout from "./PageLayout";
import SingleNav from "./SingleNav";
import { useState } from "react";

const UsedTrustedBy = ({ category = "all" }) => {
  // Added 'category' prop with default 'all'
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
    if (category === "all") return true;
    return item.src.includes(category); // Check if the image path includes "bank" or "business"
  });

  return (
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Used & trusted by"} />
        <div className="md:w-[calc(100%-192px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
            {filteredImageData.map((imageData, index) => (
              <div
                key={index}
                className="min-w-36 md:min-w-48 h-20 flex justify-center items-center"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  sizes="100vw"
                  width={192}
                  height={40}
                  className="w-auto"
                  src={
                    hoveredImage === index ? imageData.hoverSrc : imageData.src
                  }
                  alt={`Partner ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UsedTrustedBy;
