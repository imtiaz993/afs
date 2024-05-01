import React from "react";
import Image from "next/image";

const Annnouncements = () => {
  return (
    <div className="bg-subtle-neutral border-b border-default">
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
        <div className="mb-12 flex justify-between items-center sm:items-end">
          <h3 className="text-2xl md:text-[40px] text-primary mr-4">
            Company announcements
          </h3>
          <div className="flex items-center cursor-pointer">
            <p className="text-brand-secondary mr-2 whitespace-nowrap">
              See all
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
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="bg-gray-700 w-full rounded-[4px]"
              src="/assets/images/home/news.png"
              alt=""
            />
            <div className="flex mt-6">
              <div className="flex items-center">
                <p className="text-xs text-secondary font-light">
                  April 01, 2024
                </p>
                <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                <p className="text-xs text-secondary font-light">5 min read</p>
              </div>
            </div>
            <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
              ACI Worldwide and AFS to drive payments modernization for banks
              and merchants in the Middle East
            </h4>
            <p className="text-base sm:text-lg text-primary overflow-hidden text-ellipsis line-clamp-2 font-light">
              AFS–the leading digital payment solutions provider and fintech
              enabler in the Middle East and Africa–will utilize ACI Enterprise
              Payments Platform and ACI Payments OrchestrationPlatform todrive
              digital payments modernization in the region
            </p>
          </div>
          <div className=" mt-16 lg:mt-0 lg:w-2/5">
            <div className="pb-8 mb-8 border-b border-default">
              <div className="flex">
                <div className="flex items-center">
                  <p className="text-xs text-secondary font-light">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary font-light">
                    5 min read
                  </p>
                </div>
              </div>
              <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS Transaction Index: Season-Opening Bahrain GP Delivers 66%
                Surge in Spends
              </h4>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis font-light">
                This weekend’s action-packed season-opening Bahrain GP delivered
                an epic increase in spends. Data shared in the annualTransaction
                Index published byArab Financial Services (AFS), the Middle East
                and Africa region’s leading digital payment solutions provider
                and fintech enabler, compared the year-on-year difference in
                spends during the F1 week, recording a 66% surge in payments
                spends during the recently concluded 2024 F1 Gulf Air Bahrain
                Grand Prix.
              </p>
            </div>
            <div className="pb-8 mb-8 border-b border-default">
              <div className="flex">
                <div className="flex items-center">
                  <p className="text-xs text-secondary font-light">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary font-light">
                    5 min read
                  </p>
                </div>
              </div>
              <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS enter strategic alliance with Xpence to innovate SME
                financial management in Bahrain
              </h4>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis font-light">
                In a landmark move set to redefine financial management for
                small and medium enterprises (SMEs) in Bahrain,ArabFinancial
                Services (AFS), the Middle East and Africa region’s leading
                digital payment solutions provider and fintech enabler, has
                entered a strategic partnership with Xpence
              </p>
            </div>
            <div className="pb-8 mb-8 lg:border-b border-default">
              <div className="flex">
                <div className="flex items-center">
                  <p className="text-xs text-secondary font-light">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary font-light">
                    5 min read
                  </p>
                </div>
              </div>
              <h4 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS conducts media workshop to showcase latest cloud-based
                restaurant-first solution
              </h4>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis font-light">
                Arab Financial Services (AFS),the Middle East and Africa
                region’s leading digital payment solutions provider and fintech
                enabler, recently held a media workshop to showcase its latest
                cloud-based restaurant-first
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annnouncements;
