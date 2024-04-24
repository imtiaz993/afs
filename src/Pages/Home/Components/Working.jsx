import React, { useState } from "react";

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
    <div className="w-11/12 mx-auto py-5 lg:py-24 md:px-10 lg:px-16">
      <p className="mb-4 text-secondary flex items-center">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" />{" "}
        Working with us
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-16 max-w-[950px] leading-[120%]">
        Our innovative financial solutions deliver numerous benefits for banks
        and businesses, designed to ensure success for all partners.
      </h1>
      <div className="flex justify-between flex-col-reverse lg:flex-row">
        <div className="lg:w-2/5 border-t border-default">
          {accordionContent.map((item, index) => (
            <div
              className="py-6 md:py-8 border-b border-default cursor-pointer"
              key={index}
              onClick={() => {
                setActiveAccordion(index);
              }}
            >
              <div className="flex justify-between items-start select-none">
                <h1 className="text-lg md:text-2xl text-primary">
                  <span
                    className={`mr-4 ${
                      activeAccordion === index
                        ? " text-brand-secondary"
                        : "text-tertiary"
                    }`}
                  >
                    {index < 10 ? "0" + (index + 1) : index + 1}
                  </span>
                  {item.title}
                </h1>
                <img
                  className={`transition-all duration-200 ${
                    activeAccordion === index ? "rotate-0" : "rotate-180"
                  }`}
                  src="/assets/icons/home/chevron.svg"
                  alt=""
                />
              </div>

              <p
                className={`text-secondary text-base md:text-lg mt-4 overflow-hidden transition-all duration-500 ${
                  activeAccordion === index ? "h-auto" : "h-0 hidden"
                }`}
              >
                {item.text}
              </p>
              {activeAccordion === index && (
                <img
                  src={accordionContent[activeAccordion].image}
                  className="w-full md:hidden h-full relative mt-5 rounded"
                />
              )}
            </div>
          ))}
        </div>
        <img
          src={accordionContent[activeAccordion].image}
          className="w-full hidden md:flex h-full lg:w-1/2 relative mb-5 lg:mb-0 rounded"
        />
      </div>
    </div>
  );
};

export default Working;
