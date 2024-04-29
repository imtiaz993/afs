import React from "react";
import Image from "next/image";

const Offices = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
        <p className="mb-4 text-secondary flex items-center font-light">
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
        <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Find us at these locations
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={10}
                height={10}
                src="/assets/icons/home/diamond.svg"
                className="mb-6"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-4 text-primary font-medium text-lg">
                Bahrain - Headquarters
              </h5>
              <div className="mb-10">
                <p className="text-primary font-light mb-1">Level 12 & 14,</p>
                <p className="text-primary font-light mb-1">
                  Harbour Tower East,
                </p>
                <p className="text-primary font-light mb-1">
                  Bahrain Financial Harbour
                </p>
                <p className="text-primary font-light">Manama</p>
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
                width={10}
                height={10}
                src="/assets/icons/home/diamond.svg"
                className="mb-6"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-4 text-primary font-medium text-lg">
                United Arab Emirates
              </h5>
              <div className="mb-10">
                <p className="text-primary font-light mb-1">
                  Office C1205,Level 12,
                </p>
                <p className="text-primary font-light mb-1">Burj Daman,DIFC</p>
                <p className="text-primary font-light mb-1 h-6"></p>
                <p className="text-primary font-light">Dubai</p>
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
                width={10}
                height={10}
                src="/assets/icons/home/diamond.svg"
                className="mb-6"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-4 text-primary font-medium text-lg">Egypt</h5>
              <div className="mb-10">
                <p className="text-primary font-light mb-1">
                  Plot Number: B-39,
                </p>
                <p className="text-primary font-light mb-1">
                  Street 90 (North),
                </p>
                <p className="text-primary font-light mb-1">
                  Fifth Settlement,
                </p>
                <p className="text-primary font-light">New Cairo</p>
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
                width={10}
                height={10}
                src="/assets/icons/home/diamond.svg"
                className="mb-6"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-4 text-primary font-medium text-lg">
                Sultanate of Oman
              </h5>
              <div className="mb-10">
                <p className="text-primary font-light mb-1">
                  Office 425, Level 4,
                </p>
                <p className="text-primary font-light mb-1">
                  Al Fardan Heights,
                </p>
                <p className="text-primary font-light mb-1">Ghala,</p>
                <p className="text-primary font-light">Muscat</p>
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
    </div>
  );
};

export default Offices;
