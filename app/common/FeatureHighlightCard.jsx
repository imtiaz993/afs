import React from "react";
import Link from "next/link";

const FeatureHighlightCard = ({
  message,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonLink = "",
  secondaryButtonLink = "",
}) => {
  return (
    <>
      <h2 className="text-primary text-[32px] md:text-[48px] mb-6 md:mb-8 leading-[120%]">
        {message}
      </h2>
      <div className="flex flex-col sm:flex-row">
        <Link href={primaryButtonLink}>
          <button
            className=" transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-3 md:py-4 px-8 font-medium rounded-sm w-full "
            type="submit"
          >
            {primaryButtonLabel}
          </button>
        </Link>
        <Link href={secondaryButtonLink}>
          <button className="mt-2 sm:mt-0 sm:ml-4 transition-colors duration-500 text-center bg-transparent text-brand-secondary  hover:text-white border border-brand-secondary hover:bg-brand-secondary py-3 md:py-4 px-8 font-medium rounded-sm w-full">
            {secondaryButtonLabel}
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeatureHighlightCard;
