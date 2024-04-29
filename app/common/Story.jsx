import React from "react";
import Image from "next/image";

const Story = ({ bg }) => {
  return (
    <div className={`relative ${bg ? "bg-subtle-neutral" : ""}`}>
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24 relative z-10">
        <p className="mb-4 text-secondary flex items-center font-light">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          Our story
        </p>
        <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          At AFS we empower the region’s business and banking communities,
          end-users and consumers with customized payments technologies and
          solutions.
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="hidden lg:block"></div>
          <div>
            <p className="text-lg md:text-2xl text-primary font-light">
              Regulated by the Central Bank of Bahrain, AFS is owned by a total
              of 37 banks and financial institutions and serves over 60 clients
              in more than 20 countries across the Middle East and Africa
              region.
            </p>
            <p className="text-lg md:text-2xl text-primary mt-4 font-light">
              The company provides numerous ground-breaking end-to-end digital
              payment products, services and solutions to banks and businesses.
              These include card processing services, merchant acquiring,
              fintech solutions and value-added services.
            </p>
          </div>
          <div>
            <p className="text-base md:text-lg text-primary font-light">
              Our dedication to payments innovation and delivering cutting-edge
              payments technology has propelled AFS to become a market leader.
            </p>
            <p className="text-base md:text-lg text-primary mt-4 font-light">
              We are committed to being the leading enabler for digital
              transaction transformation and we offer unique, future-driven
              payments experiences.
            </p>
            <p className="text-base md:text-lg text-primary mt-4 font-light">
              We fast-track payments innovation and make superior digital
              payments experiences a more accessible, secure, convenient, and
              seamless reality, regionally.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[35%] 2xl:w-[33%] max-w-[550px] absolute bottom-0 left-0 opacity-40 md:opacity-100">
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full"
          src="/assets/images/about/story.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Story;