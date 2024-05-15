"use client";

import React from "react";
import PageLayout from "app/common/PageLayout";

const ContactOption = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="mx-auto py-10 lg:py-24">
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
              <h3 className="mb-4 text-2xl md:text-[40px] text-white">
                Commercial enquiries
              </h3>
              <p className="mb-14 text-base md:text-lg text-white ">
                Whether you are looking for a specific financial product or
                service, exploring partnership opportunities, or have any other
                commercial enquiries, our team is committed to finding the best
                solutions for your business needs.
              </p>
              <button
                className="transition-colors duration-500 text-center bg-white text-brand-secondary  hover:text-white hover:bg-brand-secondary py-3 w-[185px] font-medium rounded-sm"
                onClick={() => {
                  const section = document.querySelector("#contact-form");
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Contact our team
              </button>
            </div>
          </div>
          <div className="rounded py-10 px-8 border border-default">
            <h3 className="mb-4 text-2xl md:text-[40px] text-brand-secondary">
              PR & Communications
            </h3>
            <p className="mb-14 text-base md:text-lg text-primary ">
              If you have any enquiries regarding latest AFS news, media
              interviews, sponsorship opportunities, or general communications,
              our team is ready to assist you.
            </p>
            <a href="mailto:xyz@afs.com">
              <button className="transition-colors duration-500 text-center bg-transparent text-brand-secondary  hover:text-white border border-brand-secondary hover:bg-brand-secondary py-[11px] w-[185px] font-medium rounded-sm">
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
