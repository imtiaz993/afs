"use client";

import React from "react";
import Link from "next/link";

const Complaints = () => {
  return (
    <div className="lg:w-[55%] border border-default pr-[2%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="py-10 px-5 md:px-8"
        id="contact-form"
      >
        <h4 className="mb-4 text-xl md:text-2xl text-primary">Complaints</h4>
        <p className="mb-4 text-secondary text-lg ">
          At AFS our customers are our priority. We take all disputes and
          complaints from our customers and business partners very seriously
          and, as such, all complaints are dealt with promptly and fairly.
        </p>
        <p className="mb-10 text-secondary text-sm ">
          AFS will endeavor to address all complaints within twenty (20)
          business days.
        </p>
        <h5 className="mb-5 text-lg">Submit your details below</h5>
        <div className="grid gap-2">
          <div className="grid md:grid-cols-2 gap-2">
            <input
              className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
              type="text"
              placeholder="First name *"
              required
            />
            <input
              className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
              type="text"
              placeholder="Last name  *"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <input
              className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
              type="tel"
              placeholder="Phone number *"
              required
            />
            <input
              className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
              type="email"
              placeholder="Email address  *"
              required
            />
          </div>
          <input
            className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
            type="text"
            placeholder="Business name *"
            required
          />
          <select
            className="cursor-pointer rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default"
            required
          >
            <option value="">Select a complaints category *</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
          </select>
          <textarea
            className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none resize-none bg-white border border-default"
            required
            rows={3}
            placeholder="Details of your complaint *"
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
              
              className="mt-6 transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-3 w-[197px] font-medium rounded-sm"
              type="submit"
            >
              Submit your details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Complaints;
