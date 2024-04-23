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
      <p className="mb-4 text-secondary font-light flex items-center">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" />{" "}
        Working with us
      </p>
      <h1 className="text-primary text-2xl md:text-5xl font-light mb-16 max-w-[950px] leading-[120%]">
        Our innovative financial solutions deliver numerous benefits for banks
        and businesses, designed to ensure success for all partners.
      </h1>
      <div className="flex justify-between flex-col-reverse lg:flex-row">
        <div className="lg:w-2/5">
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
                className={`text-secondary text-base md:text-lg font-light mt-4 overflow-hidden transition-all duration-500 ${
                  activeAccordion === index ? "h-auto" : "h-0 hidden"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div
          className="w-full min-h-[576px] lg:w-1/2 relative mb-5 lg:mb-0 rounded"
          style={{
            background: `url(${accordionContent[activeAccordion].image}) no-repeat center center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="md:absolute top-6 left-6 bg-white p-6 max-w-[272px] flex flex-col items-center mx-auto md:mx-0 mt-6 md:mt-0 rounded-sm">
            <img src="/assets/icons/home/check-lg.svg" alt="" />
            <h1 className="text-primary text-base md:text-lg text-center font-medium mt-6">
              Complete your payment securely
            </h1>
            <button className="text-center text-white bg-dark-neutral py-4 w-full mt-4 font-light">
              Pay 40.000 <span className="text-[10px] font-light">BHD</span>
            </button>
          </div>
          <div className="absolute bottom-6 left-6 flex flex-wrap">
            {[
              "Fraud protection",
              "PCI DSS",
              "3DS 2.0",
              "Tokenization",
              "Disputes management",
            ].map((item, index) => (
              <div
                className="flex items-center bg-white py-3.5 px-3 mt-1.5 mr-1.5 rounded-sm"
                key={index}
              >
                <img src="/assets/icons/home/check-green.svg" alt="" />
                <p className="ml-2 font-light text-sm md:text-base mb-0.5 text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
