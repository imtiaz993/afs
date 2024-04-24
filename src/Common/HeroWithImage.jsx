import React from "react";

const HeroWithImage = ({ title, subtext, description, image }) => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 mx-auto py-5 lg:py-24 pb-0 lg:pb-0">
        <div className="md:px-10 lg:px-16">
          <p className="mb-6 text-secondary">{title}</p>
          <h1 className="text-primary text-center md:text-left text-3xl md:text-5xl lg:text-[88px] leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
            {subtext}
          </h1>
          {description && (
            <p className="mt-6 text-secondary text-lg md:text-2xl md:max-w-[500px] lg:max-w-[864px]">
              {description}
            </p>
          )}
        </div>
        <div className="mt-5 lg:mt-24 rounded overflow-hidden">
          <img className="w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroWithImage;
