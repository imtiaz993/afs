"use client";

import React from "react";

const ContactOption = () => {
  return (
    <div className="bg-subtle-neutral">
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded banks-home-gradient">
            <div
              className="py-10 px-8"
              style={{
                background: `url('/assets/images/contact/cardbg.png') no-repeat top right`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="mb-4 text-2xl md:text-[40px] text-white">
                Commercial enquiries
              </h1>
              <p className="mb-14 text-base md:text-lg text-white font-light">
                Whether you are looking for a specific financial product or
                service, exploring partnership opportunities, or have any other
                commercial enquiries, our team is committed to finding the best
                solutions for your business needs.
              </p>
              <button
                className="transition-colors duration-500 text-center bg-white text-brand-secondary  hover:text-white border border-brand-secondary hover:bg-brand-secondary py-3 w-[185px] font-medium rounded-sm"
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
            <h1 className="mb-4 text-2xl md:text-[40px] text-brand-secondary">
              PR & Communications
            </h1>
            <p className="mb-14 text-base md:text-lg text-primary font-light">
              If you have any enquiries regarding latest AFS news, media
              interviews, sponsorship opportunities, or general communications,
              our team is ready to assist you.
            </p>
            <a href="mailto:xyz@afs.com">
              <button className="transition-colors duration-500 text-center bg-transparent text-brand-secondary  hover:text-white border border-brand-secondary hover:bg-brand-secondary py-3 w-[185px] font-medium rounded-sm">
                Send us an email
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOption;
