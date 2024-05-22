import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import InputField from "app/common/form-components/InputField";
import TextArea from "app/common/form-components/TextArea";
import Select from "app/common/form-components/Select";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const BecomePartnerForm = () => {
  return (
    <PageLayout styles={"!px-0"}>
      <div className="flex becomepartner-gradient relative" id="partners-form">
        <div className="w-full py-10 lg:py-24 px-10 md:px-16 lg:pl-16 relative z-10 lg:flex justify-between">
          <div className="flex flex-col lg:w-[46%]">
            <div className="flex flex-col items-start">
              <h2 className="text-left text-2xl md:text-5xl text-primary leading-[120%]">
                Become a partner
              </h2>
              <p className="text-left text-base md:text-lg text-brand-primary mt-4 md:mt-6 max-w-[464px] ">
                Submit your interest in becoming a AFS partner and we will
                contact you as soon as possible.
              </p>
            </div>
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="hidden lg:block w-[40%] absolute left-0 bottom-0"
                src="/assets/images/partners/cta.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[54%] mt-10 lg:mt-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-2">
                <div className="grid md:grid-cols-2 gap-2">
                  <InputField type="text" placeholder="First name" />
                  <InputField type="text" placeholder="Last name" />
                </div>
                <InputField type="text" placeholder="Job description" />
                <InputField type="email" placeholder="Company email address" />
                <InputField type="text" placeholder="Company name" />
                <Select
                  label="Company headquarters location"
                  options={["Bahrain", "Egypt", "UAE", "Oman"]}
                />
                <Select
                  label="Partnership type"
                  options={["Type 1", "Type 2", "Type 3", "Type 4"]}
                />
                <TextArea placeholder="Please tell us more about your needs" />
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
                    className="mt-6  text-center text-white bg-brand-secondary   border border-brand-secondary  py-[11px] w-full md:w-[197px] font-medium rounded-sm"
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

export default BecomePartnerForm;
