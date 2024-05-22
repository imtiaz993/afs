import React from "react";
import Image from "next/image";
import { Link } from "@/i18n.config";
import PageLayout from "./PageLayout";

const CommonCTA = () => {
  return (
    <PageLayout>
      <div className="flex cta-home-gradient relative">
        <div className="w-full lg:max-w-[700px] py-10 lg:py-24 px-10 lg:pl-16 relative z-10 flex flex-col items-center lg:items-start">
          <h2 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%]">
            Ready to <span className="text-brand-secondary">revolutionize</span>{" "}
            your financial transactions?
          </h2>
          <h4 className="text-center lg:text-left text-base md:text-2xl text-brand-primary mt-4 mb-10">
            Experience the power of AFS today!
          </h4>
          <Link href="/contact">
            <button className=" text-center text-white py-[15.2px] w-44 bg-brand-secondary  border border-brand-secondary  font-medium rounded-sm">
              Contact our team
            </button>
          </Link>
        </div>
        <Image
          sizes="100vw"
          width={0}
          height={0}
          className="hidden lg:block w-1/2 absolute top-0 right-0 bottom-0 h-full"
          src="/assets/images/home/CTA.png"
          alt=""
        />
      </div>
    </PageLayout>
  );
};

export default CommonCTA;
