import React from "react";
import Link from "next/link";
import Image from "next/image";

const BecomePartnerForm = () => {
  return (
    <div
      className="md:w-11/12 mx-auto flex becomepartner-gradient relative"
      id="partners-form"
    >
      <div className="w-full py-10 lg:py-24 px-[4.17%] lg:pl-16 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-14">
        <div className="flex flex-col">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-center lg:text-left text-2xl md:text-5xl text-primary leading-[120%]">
              Become a partner
            </h1>
            <p className="text-center lg:text-left text-base md:text-lg text-brand-primary mt-4 md:mt-6 max-w-[464px] font-light">
              Submit your interest in becoming a AFS partner and we will contact
              you as soon as possible.
            </p>
          </div>
          <div>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="hidden lg:block w-1/2 absolute left-0 bottom-0 h-3/4"
              src="/assets/images/partners/cta.png"
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
            <div className="grid gap-2">
              <div className="grid md:grid-cols-2 gap-2">
                <input
                  className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                  type="text"
                  placeholder="First name"
                  required
                />
                <input
                  className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>
              <input
                className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                type="text"
                placeholder="Job description"
                required
              />
              <input
                className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                type="email"
                placeholder="Company email address"
                required
              />
              <input
                className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                type="text"
                placeholder="Company name"
                required
              />
              <select
                className="cursor-pointer rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                required
              >
                <option value="">Company headquarters location</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Egypt">Egypt</option>
                <option value="UAE">UAE</option>
                <option value="Oman">Oman</option>
              </select>
              <select
                className="cursor-pointer rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
                required
              >
                <option value="">Partnership type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
              <textarea
                className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none resize-none bg-white"
                required
                rows={3}
                placeholder="Please tell us more about your needs"
              />
              <div className="flex items-start mt-6 ">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-default rounded bg-white"
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
                  data-aos="fade-up"
                  className="mt-6 transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-3 w-[197px] font-medium rounded-sm"
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
  );
};

export default BecomePartnerForm;