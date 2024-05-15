"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";
import FaqAccordion from "./FaqAccordion";
import SingleNav from "./SingleNav";

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
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"FAQ"} />
        <div className="md:w-[calc(100%-192px)]">
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
    </PageLayout>
  );
};

export default Faq;
