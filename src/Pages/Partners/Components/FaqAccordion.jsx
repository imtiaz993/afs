import React from "react";
import { useSpring, animated } from "react-spring";

const FaqAccordion = ({
  title,
  text,
  index,
  activeAccordion,
  setActiveAccordion,
}) => {
  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: activeAccordion === index ? "50px" : "0px",
    },
    config: { duration: "200" },
  });
  return (
    <div className="border-b border-default py-4">
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => {
          if (activeAccordion === index) {
            setActiveAccordion();
          } else {
            setActiveAccordion(index);
          }
        }}
      >
        <h1 className="text-primary md:text-lg">{title}</h1>
        <img
          src={`/assets/icons/partners/${
            activeAccordion === index
              ? "openedAccordion.svg"
              : "closedAccordion.svg"
          }`}
          alt=""
        />
      </div>
      <animated.div className="overflow-hidden" style={openAnimation}>
        <p className="text-secondary mt-2 text-sm md:text-base">{text}</p>
      </animated.div>
    </div>
  );
};

export default FaqAccordion;
