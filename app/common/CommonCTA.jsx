import React from "react";
import Image from "next/image";
import Link from "next/link";

const CommonCTA = ({
  primaryContent,
  primaryContentTextTarget,
  secondaryContent,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonLink = "",
  secondaryButtonLink = "",
  bgColor = "cta-home-gradient",
  rounded,
}) => {
  let primaryContentNode = primaryContent;
  if (primaryContentTextTarget) {
    const targetWordIndex = primaryContent
      .split(" ")
      .findIndex((word) => word == primaryContentTextTarget.text);

    let prefixString = "",
      postfixString = "";

    primaryContent.split(" ").forEach((word, idx) => {
      if (idx < targetWordIndex) prefixString += word + " ";
      else if (idx > targetWordIndex) postfixString += word + " ";
    });

    const spanElement = React.createElement(
      "span",
      { className: `${primaryContentTextTarget.color}` },
      primaryContentTextTarget.text + " "
    );

    primaryContentNode = React.createElement(
      "h2",
      null,
      prefixString,
      spanElement,
      postfixString
    );
  }

  return (
    <div className={`${bgColor} relative ${rounded ? "rounded-sm" : ""}`}>
      <div
        className={`w-full py-10 px-10 relative z-10 items-center lg:items-start ${
          primaryContentTextTarget
            ? "lg:max-w-[700px] lg:py-24 lg:pl-16"
            : "lg:max-w-[600px] lg:py-14 lg:pl-10"
        }`}
      >
        <div
          className={`text-2xl text-center lg:text-left text-primary leading-[120%] ${
            primaryContentTextTarget ? "md:text-5xl" : "md:text-[32px]"
          }`}
        >
          {primaryContentNode}
        </div>
        <h4
          className={`text-center lg:text-left text-base mt-4 ${
            primaryContentTextTarget
              ? "md:text-2xl text-brand-primary mb-10"
              : "text-primary lg:max-w-[438px]"
          }`}
        >
          {secondaryContent}
        </h4>
        <div>
          <Link href={primaryButtonLink}>
            <button
              className={`transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium rounded-sm w-full lg:w-auto ${
                primaryContentTextTarget
                  ? "py-[15px] px-8"
                  : "py-[11px] px-8 mt-10"
              }`}
            >
              {primaryButtonLabel}
            </button>
          </Link>
          {secondaryButtonLabel ? (
            <Link href={secondaryButtonLink}>
              <button
                className={`lg:ml-4 transition-colors duration-500 text-center text-brand-secondary  hover:text-white border border-brand-secondary hover:bg-brand-secondary py-3 px-8 font-medium rounded-sm mt-5 w-full lg:w-auto ${bgColor}`}
              >
                {secondaryButtonLabel}
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <Image
        sizes="100vw"
        width={0}
        height={0}
        className="hidden lg:block w-1/2 absolute top-0 right-0 bottom-0 h-full"
        src="/assets/images/home/CTA.png"
        alt=""
      />
    </div>
  );
};

export default CommonCTA;
