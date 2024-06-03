import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Story = ({ bg, content }) => {
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
            {content.primaryContent}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hidden lg:block"></div>
            <div>
              {content.secondaryContent.map((item) => (
                <p className="text-lg md:text-2xl text-primary mb-4 !leading-8">
                  {item}
                </p>
              ))}
            </div>
            <div>
              {content.tertiaryContent.map((item) => (
                <p className="text-base md:text-lg mb-4 text-primary !leading-7">
                  {item}
                </p>
              ))}
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
