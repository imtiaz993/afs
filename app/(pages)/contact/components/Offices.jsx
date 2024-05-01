import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const Offices = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />
          Our offices
        </p>
        <h2 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Find us at these locations
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/contact/flag1.svg"
                className="mb-6 w-auto"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-4 text-primary text-lg">
                Bahrain - Headquarters
              </h6>
              <div className="mb-10">
                <p className="text-primary  mb-1">Level 12 & 14,</p>
                <p className="text-primary  mb-1">Harbour Tower East,</p>
                <p className="text-primary  mb-1">Bahrain Financial Harbour</p>
                <p className="text-primary ">Manama</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  Directions
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/contact/flag2.svg"
                className="mb-6 w-auto"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-4 text-primary text-lg">
                United Arab Emirates
              </h6>
              <div className="mb-10">
                <p className="text-primary  mb-1">Office C1205,Level 12,</p>
                <p className="text-primary  mb-1">Burj Daman,DIFC</p>
                <p className="text-primary  mb-1 h-6"></p>
                <p className="text-primary ">Dubai</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  Directions
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/contact/flag3.svg"
                className="mb-6 w-auto"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-4 text-primary text-lg">Egypt</h6>
              <div className="mb-10">
                <p className="text-primary  mb-1">Plot Number: B-39,</p>
                <p className="text-primary  mb-1">Street 90 (North),</p>
                <p className="text-primary  mb-1">Fifth Settlement,</p>
                <p className="text-primary ">New Cairo</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  Directions
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/contact/flag4.svg"
                className="mb-6 w-auto"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-4 text-primary text-lg">Sultanate of Oman</h6>
              <div className="mb-10">
                <p className="text-primary  mb-1">Office 425, Level 4,</p>
                <p className="text-primary  mb-1">Al Fardan Heights,</p>
                <p className="text-primary  mb-1">Ghala,</p>
                <p className="text-primary ">Muscat</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <p className="font-medium text-brand-secondary mr-2">
                  Directions
                </p>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-auto"
                  src="/assets/icons/home/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Offices;
