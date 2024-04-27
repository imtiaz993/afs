import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="md:w-11/12 lg:w-10/12 mx-auto md:px-10 lg:px-0 my-10 lg:my-0">
      <div className="bg-brand-surface w-full flex justify-between items-center py-10 lg:py-24 px-10 lg:px-16">
        <div className="xl:w-1/2 lg:max-w-[700px] flex flex-col items-center lg:items-start">
          <h1 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%]">
            Interested in a career at AFS?
          </h1>
          <p className="text-center lg:text-left text-base md:text-lg text-brand-primary mt-6 mb-6 font-light">
            Build the future of digital payments with us! Join our dynamic team
            and be part of a collaborative work culture that encourages
            professional growth, innovation, and creativity.
          </p>
          <Link to="/careers">
            <button
              data-aos="fade-up"
              className="transition-colors duration-500 text-center text-white py-3 w-48 bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium rounded-sm"
            >
              View careers page
            </button>
          </Link>
        </div>
        <div className="hidden xl:flex w-2/5 py-6 items-center flex-wrap">
          {Array.from({ length: 17 }).map((item, index) => (
            <img
              key={index}
              className="w-12 h-12 rounded-full my-4 mr-4"
              src={`/assets/icons/about/cta/${index + 1}.svg`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTA;
