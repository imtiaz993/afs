import React from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

const WorkingAccordion = ({
  item,
  index,
  activeAccordion,
  accordionContent,
  setActiveAccordion,
}) => {
  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: activeAccordion === index ? "200px" : "0px",
    },
    config: { duration: "300" },
  });
  return (
    <div
      className="py-6 md:py-8 border-b border-default cursor-pointer"
      key={index}
      onClick={() => {
        setActiveAccordion(index);
      }}
    >
      <div className="flex justify-between items-start select-none">
        <h4 className="text-lg md:text-2xl text-primary">
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
        </h4>
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className={`w-auto transition-all duration-200 ${
            activeAccordion === index ? "rotate-0" : "rotate-180"
          }`}
          src="/assets/icons/home/chevron.svg"
          alt=""
        />
      </div>
      <animated.div className="overflow-hidden" style={openAnimation}>
        <p className={`text-secondary text-base md:text-lg mt-4 `}>
          {item.text}
        </p>
      </animated.div>
      {activeAccordion === index && (
        <Image
          sizes="100vw"
          width={0}
          height={0}
          src={accordionContent[activeAccordion].image}
          className="w-full md:hidden h-full relative mt-5 rounded"
        />
      )}
    </div>
  );
};

export default WorkingAccordion;
