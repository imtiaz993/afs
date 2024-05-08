import React from "react";
import Image from "next/image";

const SolutionFeatures = ({
  title,
  description,
  backgroundColor = "bg-white",
  descriptionCritical,
  imageSrc,
}) => {
  return (
    <>
      <div
        className={`p-6 sm:p-10 sm:pb-0 pb-0 ${backgroundColor} rounded-sm flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-base sm:text-lg text-primary">{title}</h3>
          <p
            className={`mt-2 sm:mt-4 ${
              descriptionCritical ? "text-critical-primary" : "text-secondary"
            } text-sm sm:text-base`}
          >
            {description}
          </p>
        </div>
        <Image
          src={imageSrc}
          sizes="100vw"
          className="rounded w-full mt-8"
          alt=""
          width={0}
          height={0}
        />
      </div>
    </>
  );
};

export default SolutionFeatures;
