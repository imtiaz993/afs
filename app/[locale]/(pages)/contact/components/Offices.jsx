import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import { Link } from "i18n.config";

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
        <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] !leading-[120%]">
          Find us at these locations
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/contact/flag1.png"
                className="mb-6 w-auto border"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-4 text-primary text-lg font-regular !leading-[140%]">
                Bahrain - Headquarters
              </h6>
              <div className="mb-10">
                <p className="text-primary  mb-1 !leading-6">Level 12 & 14,</p>
                <p className="text-primary  mb-1 !leading-6">
                  Harbour Tower East,
                </p>
                <p className="text-primary  mb-1 !leading-6">
                  Bahrain Financial Harbour
                </p>
                <p className="text-primary  !leading-6">Manama</p>
              </div>
              <Link href={"https://maps.app.goo.gl/f5S1DHUTVMjxLawSA"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
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
              </Link>
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
              <h6 className="mb-4 text-primary text-lg font-regular !leading-[140%]">
                United Arab Emirates
              </h6>
              <div className="mb-10">
                <p className="text-primary !leading-6 mb-1">
                  Dubai Supreme Court Complex,
                </p>
                <p className="text-primary !leading-6 mb-1">Umm Hurair 2,</p>
                <p className="text-primary !leading-6 mb-1 h-6"> Deira,</p>
                <p className="text-primary !leading-6">Dubai</p>
              </div>
              <Link href={"https://maps.app.goo.gl/VmKy9GZEziBnStMr8"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
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
              </Link>
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
              <h6 className="mb-4 text-primary text-lg font-regular !leading-[140%]">
                Egypt
              </h6>
              <div className="mb-10">
                <p className="text-primary !leading-6 mb-1">
                  Plot Number: B-39,
                </p>
                <p className="text-primary !leading-6 mb-1">
                  Street 90 (North),
                </p>
                <p className="text-primary !leading-7 mb-1">
                  Fifth Settlement,
                </p>
                <p className="text-primary !leading-6">New Cairo</p>
              </div>
              <Link href={"https://maps.app.goo.gl/HUyRTLUutgtnUAXq7"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
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
              </Link>
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
              <h6 className="mb-4 text-primary text-lg font-regular !leading-[140%]">
                Sultanate of Oman
              </h6>
              <div className="mb-10">
                <p className="text-primary !leading-6 mb-1">
                  Office 425, Level 4,
                </p>
                <p className="text-primary !leading-6 mb-1">
                  Al Fardan Heights,
                </p>
                <p className="text-primary !leading-6 mb-1">Ghala,</p>
                <p className="text-primary !leading-6">Muscat</p>
              </div>
              <Link href="https://maps.app.goo.gl/KcZdW8WTTw2Z7Qj59">
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Offices;
