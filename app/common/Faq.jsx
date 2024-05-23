"use client";

import { useState } from "react";
import PageLayout from "./PageLayout";
import FaqAccordion from "./FaqAccordion";
import SingleNav from "./SingleNav";

const Faq = ({ title, accordionOptions }) => {
  const [activeAccordion, setActiveAccordion] = useState();

  return (
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"FAQ"} />
        <div className="md:w-[calc(100%-192px)]">
          <h2 className="text-primary text-[32px] md:text-[48px] mb-8 md:mb-10 max-w-[526px] md:leading-[57.6px]">
            {title}
          </h2>
          <div className="border-t border-default">
            {accordionOptions.map((item, index) => (
              <FaqAccordion
                title={item.title}
                text={item.text}
                index={index}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
                key={item.title}
              />
            ))}
          </div>
          <p className="text-sm text-primary mt-4">
            For any additional questions, please reach out to 
            <a
              href="mailto:questions@afs.com.bh"
              className="text-brand-secondary hover:underline"
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
