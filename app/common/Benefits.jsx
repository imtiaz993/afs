import React from "react";
import Image from "next/image";
import PageLayout from "./PageLayout";

const Benefits = ({ data }) => {
  return (
    <PageLayout>
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
            Benefits
          </p>
        </div>
        <div className="md:w-[calc(100%-192px)]">
          <h3 className="text-[40px] leading-[120%] text-primary mb-16">
            Our all-encompassing solution transforms the way banks issue and
            manage cards, catering to a wide range of needs with credit, debit,
            and prepaid card services for both consumers and businesses.
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {data.map((item) => (
              <div className="min-w-[248px]">
                <div className="bg-surface-neutral w-10 h-10 mb-6"></div>
                <p className="text-[16px] leading-[150%] text-primary font-[530] mb-2">
                  {item.title}
                </p>
                <p className="text-[14px] leading-[18px] text-primary opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Benefits;
