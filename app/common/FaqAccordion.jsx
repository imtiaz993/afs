import React from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

const FaqAccordion = ({
  title,
  content,
  index,
  activeAccordion,
  setActiveAccordion,
}) => {
  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: activeAccordion === index ? "1600px" : "0px",
    },
    config: { duration: "400" },
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
        <h5 className="text-primary md:text-lg mr-4 font-regular !leading-[140%]">
          {title}
        </h5>
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-auto"
          src={`/assets/icons/partners/${
            activeAccordion === index
              ? "openedAccordion.svg"
              : "closedAccordion.svg"
          }`}
          alt=""
        />
      </div>
      <animated.div className="overflow-hidden" style={openAnimation}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </animated.div>
    </div>
  );
};

export default FaqAccordion;
