import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Features = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24 md:flex items-start">
        <div className="w-[192px] mt-12 md:mt-0 mr-8 md:sticky top-[110px] mb-6">
          <p className="mb-2 text-secondary flex items-center cursor-pointer">
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={"/assets/icons/home/diamond.svg"}
              className="mr-2"
              alt=""
            />{" "}
            Features
          </p>
        </div>
        <div className="md:w-[calc(100%-192px)]">
          <div className="flex gap-8">
            <Image
              sizes="100vw"
              width={600}
              height={450}
              src="/assets/images/solutions/imageBgWhite.png"
              className="h-full w-full"
              alt=""
            />{" "}
            <div className="ml-8 min-w-[416px]">
              <h3 className="text-[40px] leading-[48px] text-primary mb-4">
                Credit and debit cards
              </h3>
              <p className="text-lg text-primary">
                Tailored to promote financial freedom and ease of use, our cards
                are designed to integrate seamlessly with your bank's existing
                services, offering a reliable and secure way to access funds,
                make purchases, and manage finances efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Features;
