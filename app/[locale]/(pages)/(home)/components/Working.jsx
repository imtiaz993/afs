"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import WorkingAccordion from "./WorkingAccordion";

const Working = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const accordionContent = [
    {
      title: "Secure transaction processing",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion.png",
    },
    {
      title: "Card issuing and processing",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion1.jpg",
    },
    {
      title: "Cross-border payments",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion.png",
    },
    {
      title: "Risk and fraud management",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion1.jpg",
    },
    {
      title: "Real-time settlements",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion.png",
    },
    {
      title: "Integration flexibility",
      text: "Experience the assurance of top-tier security with advanced encryption, tokenization, and adherence to global standards such as PCI DSS, safeguarding customer data during every transaction.",
      image: "/assets/images/home/accordion1.jpg",
    },
  ];

  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          Working with us
        </p>
        <h2 className="text-primary text-2xl md:text-5xl mb-16 max-w-[950px] leading-[120%]">
          Our innovative financial solutions deliver numerous benefits for banks
          and businesses, designed to ensure success for all partners.
        </h2>
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          <div className="lg:w-2/5 border-t border-default">
            {accordionContent.map((item, index) => (
              <WorkingAccordion
                item={item}
                index={index}
                activeAccordion={activeAccordion}
                accordionContent={accordionContent}
                setActiveAccordion={setActiveAccordion}
                key={index}
              />
            ))}
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={accordionContent[activeAccordion].image}
            className="w-full hidden md:flex h-full lg:w-1/2 relative mb-5 lg:mb-0 rounded"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Working;
