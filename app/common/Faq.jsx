"use client";

import React, { useState } from "react";
import Image from "next/image";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState();

  const accordionOptions = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text  printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text  printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Will I receive feedback on my application and what form will it take?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text  printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24 md:flex items-start">
      <p className="mb-4 text-secondary flex items-center md:w-1/5 font-light">
        <Image
          sizes="100vw"
          width={10}
          height={10}
          src="/assets/icons/home/diamond.svg"
          className="mr-2"
          alt=""
        />{" "}
        FAQ
      </p>
      <div className="md:w-4/5">
        <h2 className="text-primary text-2xl md:text-5xl mb-8 md:mb-10 max-w-[526px] leading-[120%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <div className="border-t border-default">
          {accordionOptions.map((item, index) => (
            <FaqAccordion
              title={item.title}
              text={item.text}
              index={index}
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
            />
          ))}
        </div>
        <p className="text-sm text-primary mt-4">
          For any additional questions, please reach out to 
          <a
            href="mailto:questions@afs.com.bh"
            className="text-brand-secondary"
          >
            questions@afs.com.bh
          </a>
        </p>
      </div>
    </div>
  );
};

export default Faq;
