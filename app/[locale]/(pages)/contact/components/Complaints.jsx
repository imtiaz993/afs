"use client";

import React from "react";
import { Link } from "@/i18n.config";
import InputField from "app/common/form-components/InputField";
import Select from "app/common/form-components/Select";
import TextArea from "app/common/form-components/TextArea";
import CheckBoxField from "app/common/form-components/CheckBoxField";

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
        <h4 className="mb-4 text-xl md:text-2xl text-primary font-regular">Complaints</h4>
        <p className="mb-4 text-secondary text-lg ">
          At AFS our customers are our priority. We take all disputes and
          complaints from our customers and business partners very seriously
          and, as such, all complaints are dealt with promptly and fairly.
        </p>
        <p className="mb-10 text-secondary text-sm ">
          AFS will endeavor to address all complaints within twenty (20)
          business days.
        </p>
        <h5 className="mb-5 text-lg font-regular">Submit your details below</h5>
        <div className="grid gap-2">
          <div className="grid md:grid-cols-2 gap-2">
            <InputField type="text" placeholder="First name *" />
            <InputField type="text" placeholder="Last name  *" />
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <InputField type="tel" placeholder="Phone number *" />
            <InputField type="email" placeholder="Email address  *" />
          </div>
          <InputField type="text" placeholder="Business name *" />
          <Select
            label="Select a complaints category *"
            options={["Category 1", "Category 2", "Category 3", "Category 4"]}
          />
          <TextArea placeholder="Details of your complaint *" />
          <div className="flex items-start mt-6 ">
            <CheckBoxField />
            <p className="text-secondary text-sm ml-3">
              By sending your information you agree to our
              <Link className="text-primary underline ml-1" href="/">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              className="mt-6  text-center text-white bg-brand-secondary   border border-brand-secondary  py-3 w-full md:w-[197px] font-medium rounded-sm"
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
