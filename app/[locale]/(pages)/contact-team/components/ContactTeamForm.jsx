"use client";
import Link from "next/link";
import InputField from "app/common/form-components/InputField";
import Select from "app/common/form-components/Select";
import TextArea from "app/common/form-components/TextArea";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const ContactTeamForm = () => {
  return (
    <div className="bg-white p-8">
      <h4 className="text-[24px] font-[400] !leading-[31.2px] text-primary">
        Let's work together to fuel your success!
      </h4>
      <p className="text-[18px] font-[400] !leading-[28px] text-secondary mt-2">
        Reach out now and let us empower your growth.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-x-2 gap-y-3 mt-6">
          <div className="grid lg:grid-cols-2 gap-2">
            <InputField type="text" placeholder="First name *" />
            <InputField type="text" placeholder="Last name *" />
          </div>
          <div className="grid xl:grid-cols-2 gap-2">
            <InputField type="text" placeholder="Phone number *" />
            <InputField type="email" placeholder="Business email address *" />
          </div>
          <InputField type="text" placeholder="Business name *" />
          <div>
            <Select
              label="Chose your location(s) *"
              options={["Location 1", "Location 2", "Location 3", "Location 4"]}
            />
            <p className="text-[12px] font-[400] !leading-[18px] text-tertiary mt-2 pb-6 border-b border-default ">
              Chose the location(s) where you have legal entities
            </p>
          </div>
          <h5 className="text-[18px] font-[400] !leading-[25.2px] text-primary mt-3">
            How can AFS help?
          </h5>
          <div>
            <Select
              label="What solutions are you interested in? *"
              options={["Location 1", "Location 2", "Location 3", "Location 4"]}
            />
            <p className="text-[12px] font-[400] !leading-[18px] text-tertiary my-2">
              Chose all the solutions from the drop down list
            </p>
            <TextArea placeholder="Please provide us with any other information you might find valuable" />
          </div>
          <div className="mt-3 flex ">
            <CheckBoxField />
            <p className="text-secondary text-sm ml-3">
              By sending your information you agree to our
              <Link className="text-primary underline ml-1" href="/">
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            className="mt-3  text-center text-white bg-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-3 px-8 w-full font-medium rounded-sm"
            type="submit"
          >
            Submit your request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactTeamForm;
