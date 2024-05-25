"use client";

import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageLayout from "app/common/PageLayout";
import InputField from "app/common/form-components/InputField";
import TextArea from "app/common/form-components/TextArea";
import Select from "app/common/form-components/Select";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  jd: Yup.string().required("Job description is required"),
  companyEmail: Yup.string()
    .required("Company email is required")
    .email("Company email is incorrect"),
  companyName: Yup.string().required("Company name is required"),
  headquarter: Yup.string().required("Headquarter is required"),
  partnership: Yup.string().required("Partnership type is required"),
  info: Yup.string().required("Info is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const BecomePartnerForm = () => {
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
      jd: "",
      companyEmail: "",
      companyName: "",
      headquarter: "",
      partnership: "",
      info: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <PageLayout styles={"!px-0"}>
      <div className="flex becomepartner-gradient relative" id="partners-form">
        <div className="w-full py-10 lg:py-24 px-10 md:px-16 lg:pl-16 relative z-10 lg:flex justify-between">
          <div className="flex flex-col lg:w-[46%]">
            <div className="flex flex-col items-start">
              <h2 className="text-left text-[32px] md:text-5xl text-primary !leading-[120%]">
                Become a partner
              </h2>
              <p className="text-left text-base md:text-lg text-brand-primary mt-4 md:mt-6 max-w-[464px] !leading-7">
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
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <div className="grid md:grid-cols-2 gap-2">
                  <InputField
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.firstname && touched.firstname
                        ? errors.firstname
                        : ""
                    }
                    type="text"
                    placeholder="First name"
                  />
                  <InputField
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.lastname && touched.lastname ? errors.lastname : ""
                    }
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <InputField
                  name="jd"
                  value={values.jd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.jd && touched.jd ? errors.jd : ""}
                  type="text"
                  placeholder="Job description"
                />
                <InputField
                  name="companyEmail"
                  value={values.companyEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.companyEmail && touched.companyEmail
                      ? errors.companyEmail
                      : ""
                  }
                  type="email"
                  placeholder="Company email address"
                />
                <InputField
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.companyName && touched.companyName
                      ? errors.companyName
                      : ""
                  }
                  type="text"
                  placeholder="Company name"
                />
                <Select
                  name="headquarter"
                  value={values.headquarter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.headquarter && touched.headquarter
                      ? errors.headquarter
                      : ""
                  }
                  label="Company headquarters location"
                  options={["Bahrain", "Egypt", "UAE", "Oman"]}
                />
                <Select
                  name="partnership"
                  value={values.partnership}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.partnership && touched.partnership
                      ? errors.partnership
                      : ""
                  }
                  label="Partnership type"
                  options={["Type 1", "Type 2", "Type 3", "Type 4"]}
                />
                <TextArea
                  name="info"
                  value={values.info}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.info && touched.info ? errors.info : ""}
                  placeholder="Please tell us more about your needs"
                />
                <div className="flex items-start mt-6 ">
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
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="mt-6  text-center text-white bg-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-[11px] w-full md:w-[197px] font-medium rounded-sm"
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
