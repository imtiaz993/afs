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
  gridVariant,
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
    <div
      className={`${bgColor} relative ${
        rounded ? "rounded-sm" : ""
      } h-[537px] md:h-full`}
    >
      <div
        className={`w-full py-12 md:py-[56px] px-4 md:px-10 relative z-10 items-center lg:items-start ${
          lessPaddingVariant
            ? "lg:max-w-[600px] lg:py-14 lg:pl-10"
            : "lg:max-w-[872px] lg:py-24 lg:pl-16"
        }`}
      >
        <div
          className={`text-[32px] !leading-[38.4px] text-primary  ${
            lessPaddingVariant
              ? "!leading-[120%]"
              : "md:text-[48px] md:!leading-[57.6px] lg:max-w-[596px]"
          }`}
        >
          {primaryContentNode}
        </div>
        <h4
          className={`text-base mt-2 md:mt-4 mb-6 md:mb-10 ${
            lessPaddingVariant
              ? "text-primary lg:max-w-[438px]"
              : "md:text-2xl text-brand-primary lg:max-w-[768px]"
          }`}
        >
          {secondaryContent}
        </h4>
        <div className="block md:flex justify-start">
          <Link href={primaryButtonLink}>
            <button
              className={`text-center text-white bg-brand-secondary border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary font-medium rounded-sm w-full lg:w-auto px-8 ${
                lessPaddingVariant ? "py-[11px]" : "py-[11px] md:py-[15px] "
              }`}
            >
              {primaryButtonLabel}
            </button>
          </Link>
          {secondaryButtonLabel ? (
            <Link href={secondaryButtonLink}>
              <button
                className={`text-center text-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-[11px] px-8 font-medium rounded-sm mt-2 md:mt-0 w-full lg:w-auto ${bgColor} ${
                  isArabic ? "md:mr-4" : "md:ml-4"
                }`}
              >
                {secondaryButtonLabel}
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`md:hidden lg:block absolute bottom-0 ${
          gridVariant
            ? isArabic
              ? "lg:-left-[50px] xl:-left-[90px] lg:top-[210px]"
              : "lg:-left-[50px] xl:-left-[90px] lg:top-[210px]"
            : isArabic
            ? "lg:w-1/2 top-auto md:top-0 left-0 -right-[60px] md:right-auto"
            : "lg:w-1/2 top-auto md:top-0 right-0 -left-[60px] md:left-auto"
        }`}
      >
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="h-full w-full"
          style={isArabic ? { transform: "scaleX(-1)" } : {}}
          src="/assets/images/home/CTA.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CommonCTA;
