import React from "react";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16">
      <p className="font-light mb-4 text-secondary flex items-center">
        {" "}
        <Image
          sizes="100vw"
          width={10}
          height={10}
          src="/assets/icons/home/diamond.svg"
          className="mr-2"
          alt=""
        />{" "}
        Our solutions
      </p>
      <h2 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[950px] leading-[120%]">
        Unlock financial opportunities for growth and global expansion,
        accessible to banks and businesses of any size.
      </h2>
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
              <h3 className="text-2xl md:text-[40px] text-white mb-5 mt-[272px]">
                For Banks
              </h3>
              <p className="font-light text-base md:text-lg text-white mb-4 max-w-[420px] opacity-80">
                Gain access to state-of-the-art payment processing services,
                card issuance, risk management systems, and other tailored
                solutions.
              </p>
              <div className="flex items-center flex-wrap" >
                <button className="transition-colors duration-500 text-center text-brand-secondary hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mr-6 mt-4">
                  Explore
                </button>
                <ul className="flex flex-wrap mt-4">
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      Card processing
                    </span>
                  </li>
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      ATM & POS Driving
                    </span>
                  </li>
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      Card issuing
                    </span>
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
              <h3 className="text-2xl md:text-[40px] text-primary mb-5">
                All Solutions
              </h3>
              <p className="font-light text-base md:text-lg text-primary mb-8 max-w-[425px] opacity-80">
                Unsure which solution best fits your business needs? Dive into
                our comprehensive range of financial tools and services,
                tailored to empower your business success.
              </p>
              <div className="" >
                <button className="transition-colors duration-500 text-center text-brand-secondary border border-brand-secondary hover:text-white hover:bg-brand-secondary py-[15.2px] w-[118px] bg-transparent font-medium rounded-sm mr-6">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#7A7A7A] rounded relative">
            <div className="p-6 md:px-10 py-12 rounded relative z-10">
              <h3 className="text-2xl md:text-[40px] text-white mb-5">
                For Consumers
              </h3>
              <p className="font-light text-base md:text-lg text-white mb-8 max-w-[420px] opacity-80">
                Effortlessly receive your salary, access your personalized card,
                and securely transfer funds to others. Simplify your finances
                with BPay wallet.
              </p>
              <div className="" >
                <button className="transition-colors duration-500 text-center text-brand-secondary  hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mr-6">
                  Explore
                </button>
              </div>
            </div>

            <div className="absolute top-0 right-0 bottom-0 opacity-30 xl:opacity-100">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full"
                src="/assets/images/home/forConsumers.png"
                alt=""
              />
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
              <h3 className="text-2xl md:text-[40px] text-white mb-5">
                For Businesses
              </h3>
              <p className="font-light text-base md:text-lg text-white mb-4 max-w-[420px] opacity-80">
                Boost growth and efficiency with all-in-one merchant services,
                POS terminals, and custom payment solutions tailored to your
                business needs.
              </p>
              <div
                className="flex items-center flex-wrap mb-[272px]"
                
              >
                <button className="transition-colors duration-500 text-center text-brand-secondary hover:text-white hover:bg-brand-secondary py-4 w-[118px] bg-white font-medium rounded-sm mr-6 mt-4">
                  Explore
                </button>
                <ul className="flex flex-wrap mt-4">
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      POS Terminals
                    </span>
                  </li>
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      Payroll solution
                    </span>
                  </li>
                  <li className="flex items-center text-sm text-white mr-3 whitespace-nowrap">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      src="/assets/icons/home/check.svg"
                      className="w-auto"
                      alt=""
                    />
                    <span className="opacity-80 font-light ml-1">
                      Payment gateway
                    </span>
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
