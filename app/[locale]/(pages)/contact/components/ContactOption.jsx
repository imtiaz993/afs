"use client";

import React from "react";
import PageLayout from "app/common/PageLayout";
import Link from "next/link";

const ContactOption = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="mx-auto py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded banks-home-gradient overflow-hidden">
            <div
              className="py-10 px-8 h-full"
              style={{
                background: `url('/assets/images/contact/cardbg.png') no-repeat right`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="mb-4 text-2xl md:text-[40px] text-white !leading-[120%]">
                Commercial enquiries
              </h3>
              <p className="mb-14 text-base md:text-lg text-white !leading-7">
                Whether you are looking for a specific financial product or
                service, exploring partnership opportunities, or have any other
                commercial enquiries, our team is committed to finding the best
                solutions for your business needs.
              </p>
              <Link href={"/contact-team"}>
                <button className=" text-center bg-white text-brand-secondary transition-colors duration-300 hover:bg-surface-neutral hover:text-brand-primary  py-3 w-full md:w-[185px] font-medium rounded-sm">
                  Contact our team
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded py-10 px-8 border border-default">
            <h3 className="mb-4 text-2xl md:text-[40px] text-brand-secondary !leading-[120%]">
              PR & Communications
            </h3>
            <p className="mb-14 text-base md:text-lg text-primary !leading-7">
              If you have any enquiries regarding latest AFS news, media
              interviews, sponsorship opportunities, or general communications,
              our team is ready to assist you.
            </p>
            <a href="mailto:xyz@afs.com">
              <button className=" text-center bg-transparent text-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:text-brand-primary hover:border-brand-primary py-[11px] w-full md:w-[185px] font-medium rounded-sm">
                Send us an email
              </button>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactOption;
