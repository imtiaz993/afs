import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Story = ({ bg }) => {
  return (
    <div className={`relative`}>
      <PageLayout bg={bg ? "bg-subtle-neutral" : ""}>
        <div className="py-10 lg:py-24 relative z-10">
          <p className="mb-4 text-secondary flex items-center ">
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
          <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] !leading-[120%]">
            At AFS we are changing the way people use and interact with
            technology and shaping the future of digital payments experiences.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hidden lg:block"></div>
            <div>
              <p className="text-lg md:text-2xl text-primary !leading-8">
                Founded in 1984, AFS is owned by 37 banks and supports over 60
                clients in 20+ countries across the Middle East, Africa and
                beyond.
              </p>
              <p className="text-lg md:text-2xl text-primary mt-4 !leading-8">
                Our digital payments products and services portfolio offers a
                diverse selection of issuing, processing, merchant acquiring and
                fintech innovation solutions.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg text-primary !leading-7">
                As a regional leader in payments innovation, we drive progress
                by integrating exciting digital solutions that add significant
                value to businesses, banks, and consumers.
              </p>
              <p className="text-base md:text-lg text-primary mt-4 !leading-7">
                Our customers and our people stand at the core of our
                operations. Our human capital across various markets is our most
                valuable asset. We prioritize a positive, inclusive work
                environment that fosters growth, contribution, and well-being.
                Joining us means being part of an innovative team committed to
                making a difference, valuing collaboration, creativity, and
                continuous learning, and offering rewarding challenges.
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
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
