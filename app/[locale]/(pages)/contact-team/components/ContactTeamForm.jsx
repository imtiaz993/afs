"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "app/common/form-components/InputField";
import Select from "app/common/form-components/Select";
import TextArea from "app/common/form-components/TextArea";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required").email("Email is incorrect"),
  businessName: Yup.string().required("Business name is required"),
  location: Yup.string().required("Location is required"),
  solution: Yup.string().required("Solution is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const ContactTeamForm = () => {
  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      businessName: "",
      location: "",
      solution: "",
      details: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <div className="bg-white p-8">
      <h4 className="text-[24px] font-[400] !leading-[31.2px] text-primary">
        Let's work together to fuel your success!
      </h4>
      <p className="text-[18px] font-[400] !leading-[28px] text-secondary mt-2">
        Reach out now and let us empower your growth.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-x-2 gap-y-3 mt-6">
          <div className="grid lg:grid-cols-2 gap-2">
            <InputField
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.firstname && touched.firstname ? errors.firstname : ""
              }
              type="text"
              placeholder="First name *"
            />
            <InputField
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.lastname && touched.lastname ? errors.lastname : ""}
              type="text"
              placeholder="Last name *"
            />
          </div>
          <div className="grid xl:grid-cols-2 gap-2">
            <InputField
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone ? errors.phone : ""}
              type="tel"
              placeholder="Phone number *"
            />
            <InputField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? errors.email : ""}
              type="email"
              placeholder="Business email address *"
            />
          </div>
          <InputField
            name="businessName"
            value={values.businessName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.businessName && touched.businessName
                ? errors.businessName
                : ""
            }
            type="text"
            placeholder="Business name *"
          />
          <div>
            <Select
              name="location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.location && touched.location ? errors.location : ""}
              label="Chose your location(s) *"
              options={[
                "Bahrain",
                "Egypt",
                "Oman",
                "United Arab Emirates",
                "Other",
              ]}
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
              name="solution"
              value={values.solution}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.solution && touched.solution ? errors.solution : ""}
              label="What solutions are you interested in? *"
              options={[
                "Solutions for banks",
                "Solutions for businesses",
                "Digital wallets",
              ]}
            />
            <p className="text-[12px] font-[400] !leading-[18px] text-tertiary my-2">
              Chose all the solutions from the drop down list
            </p>
            <TextArea
              name="details"
              value={values.details}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Please provide us with any other information you might find valuable"
            />
          </div>
          <div className="mt-3 flex ">
            <CheckBoxField
              name="terms"
              value={values.terms}
              setFieldValue={setFieldValue}
              onBlur={handleBlur}
              error={errors.terms && touched.terms ? errors.terms : ""}
            />
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
