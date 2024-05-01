"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const JobQueryForm = () => {
  const [file, setFile] = useState();
  const handleOpenFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <PageLayout>
      <div className="flex becomepartner-gradient">
        <div className="w-full py-10 lg:py-24 px-[4.17%] lg:pl-16 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-14">
          <div className="flex flex-col">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%] max-w-[464px]">
                Couldn't find the right job for you?
              </h2>
              <p className="text-center lg:text-left text-base md:text-lg text-brand-primary mt-4 md:mt-6 max-w-[464px] ">
                Should our existing job openings not match your skills and
                experience, please submit your personal information and resume.
                We'll contact you when a fitting opportunity arises.
              </p>
            </div>
            <div className="mt-6 lg:py-6 lg:pr-6 flex justify-center lg:justify-start items-center flex-wrap max-w-[464px] mx-auto lg:mx-0 box-content">
              {Array.from({ length: 11 }).map((item, index) => (
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  key={index}
                  className="w-12 h-12 rounded-full my-3 mr-3 lg:my-4 lg:mr-4"
                  src={`/assets/icons/about/cta/${index + 1}.svg`}
                  alt=""
                />
              ))}
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="w-12 h-12 rounded-full my-3 mr-3 lg:my-4 lg:mr-4"
                src={`/assets/icons/about/cta/17.svg`}
                alt=""
              />
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h4 className="mb-5 text-primary text-xl md:text-2xl">
                Submit your details below
              </h4>
              <div className="grid gap-2">
                <input
                  className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                  type="text"
                  placeholder="Full name *"
                  required
                />
                <input
                  className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                  required
                  type="email"
                  placeholder="Email address *"
                />
                <select
                  className="cursor-pointer rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                  required
                >
                  <option value="">Location *</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Egypt">Egypt</option>
                  <option value="UAE">UAE</option>
                  <option value="Oman">Oman</option>
                </select>
                <div
                  className="rounded-sm py-1 pl-4 pr-1 text-tertiary bg-white flex items-center justify-between cursor-pointer"
                  onClick={handleOpenFileUpload}
                >
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                  <p className="bg-white w-full cursor-pointer">
                    {file ? file.name : "Upload your resume *"}
                  </p>
                  <button
                    className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[7.2px] w-[82px] font-medium rounded-sm"
                    type="button"
                  >
                    Upload
                  </button>
                </div>
                <textarea
                  className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white resize-none"
                  required
                  rows={3}
                  placeholder="Your message *"
                />
                <div className="flex items-start mt-6">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-white border border-default rounded"
                    required
                  />
                  <p className="text-secondary text-sm ml-3">
                    By sending your information you agree to our
                    <Link className="text-primary underline ml-1" href="/">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="mt-6 transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[11.2px] w-[197px] font-medium rounded-sm"
                    type="submit"
                  >
                    Submit your details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobQueryForm;
