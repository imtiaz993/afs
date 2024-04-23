import React from "react";

const Solutions = () => {
  return (
    <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16">
      <p className="mb-4 text-secondary font-light">Our solutions</p>
      <h1 className="text-primary text-2xl md:text-5xl font-light mb-10 md:mb-16 max-w-[950px] leading-[120%]">
        Unlock financial opportunities for growth and global expansion,
        accessible to banks and businesses of any size.
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="banks-home-gradient rounded">
            <div
              className="p-6 md:p-10 rounded"
              style={{
                background: `url('/assets/images/home/forBanks.png') no-repeat top center`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-2xl md:text-[40px] text-white font-light mb-2 mt-[272px]">
                For Banks
              </h1>
              <p className="text-base md:text-lg font-light text-white mb-4 max-w-[420px]">
                Gain access to state-of-the-art payment processing services,
                card issuance, risk management systems, and other tailored
                solutions.
              </p>
              <div className="flex items-center flex-wrap">
                <button className="text-center text-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mr-6 mt-4">
                  Explore
                </button>
                <ul className="flex flex-wrap mt-4">
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">Card processing</span>
                  </li>
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">ATM & POS Driving</span>
                  </li>
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">Card issuing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="all-solution-home-gradient mt-4 rounded overflow-hidden">
            <div
              className="p-6 md:px-10 py-12 rounded"
              style={{
                background: `url('/assets/images/home/allSolutions.png') no-repeat top center`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-2xl md:text-[40px] text-primary font-light mb-2">
                All Solutions
              </h1>
              <p className="text-base md:text-lg font-light text-primary mb-8 max-w-[425px]">
                Unsure which solution best fits your business needs? Dive into
                our comprehensive range of financial tools and services,
                tailored to empower your business success.
              </p>
              <div className="">
                <button className="text-center text-brand-secondary py-4 w-[118px] bg-transparent border border-brand-secondary font-medium rounded-sm mr-6">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#7A7A7A] rounded">
            <div
              className="p-6 md:px-10 py-12 rounded"
              style={{
                background: `url('/assets/images/home/forConsumers.png') no-repeat bottom right`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <h1 className="text-2xl md:text-[40px] text-white font-light mb-2">
                For Consumers
              </h1>
              <p className="text-base md:text-lg font-light text-white mb-8 max-w-[420px]">
                Effortlessly receive your salary, access your personalized card,
                and securely transfer funds to others. Simplify your finances
                with BPay wallet.
              </p>
              <div className="">
                <button className="text-center text-brand-secondary py-4 w-[118px] bg-white border border-brand-secondary font-medium rounded-sm mr-6">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="bg-black mt-4 rounded">
            <div
              className="p-6 md:p-10 rounded"
              style={{
                background: `url('/assets/images/home/forBusiness.png') no-repeat top center`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-2xl md:text-[40px] text-white font-light mb-2">
                For Businesses
              </h1>
              <p className="text-base md:text-lg font-light text-white mb-4 max-w-[420px]">
                Boost growth and efficiency with all-in-one merchant services,
                POS terminals, and custom payment solutions tailored to your
                business needs.
              </p>
              <div className="flex items-center flex-wrap mb-[272px]">
                <button className="text-center text-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mr-6 mt-4">
                  Explore
                </button>
                <ul className="flex flex-wrap mt-4">
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">POS Terminals</span>
                  </li>
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">Payroll solution</span>
                  </li>
                  <li className="flex items-center text-sm font-light text-white mr-3 whitespace-nowrap">
                    <img src="/assets/icons/home/check.svg" alt="" />
                    <span className="opacity-80 ml-1">Payment gateway</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
