import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

function findIndexOfText(textArray, text) {
  const mapOfIndexWithText = new Map();

  textArray.forEach((item) => {
    const idx = text.indexOf(item);
    if (idx >= 0) mapOfIndexWithText.set(idx, item);
  });

  return mapOfIndexWithText;
}

function createSpanElement(text, color) {
  const spanElement = React.createElement(
    "span",
    { className: `${color}` },
    text + " "
  );

  return spanElement;
}

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
  lessPaddingVariant,
}) => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  let primaryContentNode = primaryContent;
  if (primaryContentTextTarget) {
    const mapOfIndexWithText = findIndexOfText(
      primaryContentTextTarget.text,
      primaryContent
    );

    const primaryContentNodeData = ["h2", null];
    let generatedText = "";
    for (let i = 0; i < primaryContent.length; i++) {
      if (mapOfIndexWithText.has(i)) {
        if (generatedText.length > 0) {
          primaryContentNodeData.push(generatedText);
          generatedText = "";
        }

        const text = mapOfIndexWithText.get(i);
        const spanElement = createSpanElement(
          text,
          primaryContentTextTarget.color
        );
        primaryContentNodeData.push(spanElement);
        i += text.length - 1;
      } else generatedText += primaryContent[i];
    }

    if (generatedText.length > 0) primaryContentNodeData.push(generatedText);

    primaryContentNode = React.createElement(...primaryContentNodeData);
  }

  return (
    <div className={`${bgColor} relative ${rounded ? "rounded-sm" : ""}`}>
      <div
        className={`w-full py-10 px-10 relative z-10 items-center ${
          lessPaddingVariant
            ? "lg:max-w-[600px] lg:py-14 lg:pl-10"
            : "lg:max-w-[700px] lg:py-24 lg:pl-16"
        } ${isArabic ? "lg:items-end" : "lg:items-start"}`}
      >
        <div
          className={`text-2xl text-center  text-primary leading-[120%] ${
            lessPaddingVariant ? "md:text-[32px]" : "md:text-5xl"
          } ${isArabic ? "lg:text-right" : "lg:text-left"}`}
        >
          {primaryContentNode}
        </div>
        <h4
          className={`text-center text-base mt-4 ${
            lessPaddingVariant
            ? "text-primary lg:max-w-[438px]"
            : "md:text-2xl text-brand-primary mb-10"
          } ${isArabic ? "lg:text-right" : "lg:text-left"}`}
        >
          {secondaryContent}
        </h4>
        <div className={`flex ${isArabic ? "justify-end" : "justify-start"}`}>
          <Link href={primaryButtonLink}>
            <button
              className={`transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium rounded-sm w-full lg:w-auto px-8 ${
                lessPaddingVariant ? "py-[11px] mt-10" : "py-[15px] "
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
