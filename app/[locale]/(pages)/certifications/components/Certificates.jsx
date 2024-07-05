import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import { Link } from "i18n.config";

const Certificates = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="pb-10 lg:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[60px] flex justify-center items-center py-9">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification1.svg"
                alt=""
                className="w-[100px] sm:w-[194px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                PCI DSS V3.2.1
              </h6>
              <a
                href={
                  "/certificates/PCI_DSS_3.2.1_Digital_Certificate_2023.pdf"
                }
              >
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[60px] flex justify-center items-center py-9">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification2.svg"
                alt=""
                className="w-[100px] sm:w-[194px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                PCI PIN
              </h6>
              <a href={"/certificates/PCI_PIN_v3.1_Certifcate_2023.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[60px] flex justify-center items-center py-9">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification3.svg"
                alt=""
                className="w-[100px] sm:w-[194px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Information Security Management System – ISO/IEC 27001:2022
              </h6>
              <a href={"/certificates/ISOIEC_27001_2022_AFS.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[48px] flex justify-center items-center py-6">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification4.svg"
                alt=""
                className="w-[140px] sm:w-[220px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Visa
              </h6>
              <a href={"/certificates/VISA_14_June_2023.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[78px] flex justify-center items-center py-[72px]">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification5.svg"
                alt=""
                className="w-[90px] sm:w-[160px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Mastercard
              </h6>
              <a href={"/certificates/MASTERCARD_Annual-Certificate_DB.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[78px] flex justify-center items-center py-14">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification6.svg"
                alt=""
                className="w-[90px] sm:w-[160px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Amex
              </h6>
              <a href={"/certificates/AMEX_Certificates_2023-2024.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[60px] flex justify-center items-center py-10">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification7.svg"
                alt=""
                className="w-[100px] sm:w-[194px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Business Continuity Management – ISO 22301
              </h6>
              <a href={"/certificates/ISO_22301_202019-AFS.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
          <div className="bg-white rounded h-[300px] sm:h-[433px] flex flex-col justify-between">
            <div className="px-[60px] flex justify-center items-center py-10">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src="/assets/icons/certifications/certification8.svg"
                alt=""
                className="w-[100px] sm:w-[194px]"
              />
            </div>
            <div className="p-8 pt-0">
              <h6 className="text-lg text-primary mb-2 font-regular !leading-[140%]">
                Quality System Certification – ISO 9001:2015
              </h6>
              <a href={"/certificates/ISO_9001_202015-AFS.pdf"}>
                <div className="flex items-center cursor-pointer">
                  <p className="font-medium text-brand-secondary mr-2 !leading-[150%]">
                    View document
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Certificates;
