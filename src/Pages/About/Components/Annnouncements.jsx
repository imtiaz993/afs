import React from "react";

const Annnouncements = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
        <div className="mb-12 flex justify-between items-center sm:items-end">
          <h1 className="text-2xl md:text-[40px] text-primary mr-4">
            Company announcements
          </h1>
          <div className="flex items-center cursor-pointer">
            <p className="text-brand-secondary mr-2 whitespace-nowrap">
              See all
            </p>
            <img src="/assets/icons/home/arrow-right.svg" alt="" />
          </div>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <img
              className="bg-gray-700 w-full rounded-[4px]"
              src="/assets/images/home/news.png"
              alt=""
            />
            <div className="flex mt-6">
              <div className="flex items-center">
                <p className="text-xs text-secondary">
                  April 01, 2024
                </p>
                <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                <p className="text-xs text-secondary">5 min read</p>
              </div>
            </div>
            <h1 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
              ACI Worldwide and AFS to drive payments modernization for banks
              and merchants in the Middle East
            </h1>
            <p className="text-base sm:text-lg text-primary overflow-hidden text-ellipsis line-clamp-2">
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
                  <p className="text-xs text-secondary">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary">
                    5 min read
                  </p>
                </div>
              </div>
              <h1 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS Transaction Index: Season-Opening Bahrain GP Delivers 66%
                Surge in Spends
              </h1>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
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
                  <p className="text-xs text-secondary">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary">
                    5 min read
                  </p>
                </div>
              </div>
              <h1 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS enter strategic alliance with Xpence to innovate SME
                financial management in Bahrain
              </h1>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
                In a landmark move set to redefine financial management for
                small and medium enterprises (SMEs) in Bahrain,ArabFinancial
                Services (AFS), the Middle East and Africa region’s leading
                digital payment solutions provider and fintech enabler, has
                entered a strategic partnership with Xpence
              </p>
            </div>
            <div className="pb-8 mb-8 border-b border-default">
              <div className="flex">
                <div className="flex items-center">
                  <p className="text-xs text-secondary">
                    March 05, 2024
                  </p>
                  <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                  <p className="text-xs text-secondary">
                    5 min read
                  </p>
                </div>
              </div>
              <h1 className="text-primary text-lg sm:text-2xl mb-4 mt-2">
                AFS conducts media workshop to showcase latest cloud-based
                restaurant-first solution
              </h1>
              <p className="text-base sm:text-lg text-primary overflow-hidden whitespace-nowrap text-ellipsis">
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
