import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const AboutCTA = () => {
  return (
    <PageLayout>
      <div className="my-10 lg:my-0 bg-brand-surface px-10 lg:px-16">
        <div className="w-full flex justify-between items-center py-10 lg:py-24">
          <div className="xl:w-1/2 lg:max-w-[700px] flex flex-col items-center lg:items-start">
            <h2 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%]">
              Interested in a career at AFS?
            </h2>
            <p className="text-center lg:text-left text-base md:text-lg text-brand-primary mt-6 mb-6 ">
              Build the future of digital payments with us! Join our dynamic
              team and be part of a collaborative work culture that encourages
              professional growth, innovation, and creativity.
            </p>
            <Link href="/careers">
              <button className="transition-colors duration-500 text-center text-white py-[11.2px] w-48 bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium rounded-sm">
                View careers page
              </button>
            </Link>
          </div>
          <div className="hidden xl:flex w-2/5 py-6 items-center flex-wrap">
            {Array.from({ length: 17 }).map((item, index) => (
              <Image
                sizes="100vw"
                width={0}
                height={0}
                key={index}
                className="w-12 h-12 rounded-full mb-4 mr-4"
                src={`/assets/icons/about/cta/${index + 1}.svg`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutCTA;
