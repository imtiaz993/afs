"use client";

import React, { useState } from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageLayout from "app/common/PageLayout";
import InputField from "app/common/form-components/InputField";
import TextArea from "app/common/form-components/TextArea";
import Select from "app/common/form-components/Select";
import FileField from "app/common/form-components/FileField";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is incorrect"),
  headquarter: Yup.string().required("Headquarter is required"),
  resume: Yup.string().required("Resume is required"),
  message: Yup.string().required("Message is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const JobQueryForm = () => {
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
      name: "",
      email: "",
      headquarter: "",
      resume: "",
      message: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const [file, setFile] = useState();

  return (
    <PageLayout styles={"!px-0"}>
      <div className="flex becomepartner-gradient">
        <div className="w-full py-10 lg:py-24 px-10 md:px-16 lg:pl-16 relative z-10 lg:flex justify-between">
          <div className="flex flex-col lg:w-[464px]">
            <div className="flex flex-col items-start">
              <h2 className="text-left text-[32px] md:text-5xl text-primary !leading-[120%] lg:max-w-[464px]">
                Couldn't find the right job for you?
              </h2>
              <p className="text-left text-base md:text-lg text-brand-primary mt-4 md:mt-6 lg:max-w-[464px] !leading-7">
                Should our existing job openings not match your skills and
                experience, please submit your personal information and resume.
                We'll contact you when a fitting opportunity arises.
              </p>
            </div>
            <div className="mt-6 lg:py-6 lg:pr-6 flex justify-start items-center flex-wrap lg:max-w-[464px] lg:mx-0 box-content">
              {Array.from({ length: 11 }).map((item, index) => (
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  key={index}
                  className="w-12 h-12 rounded-full my-3 mr-3 lg:my-4 lg:mr-4"
                  src={`/assets/icons/careers/testimonial${index + 1}.svg`}
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
          <div className="lg:w-[704px] mt-10 lg:mt-0">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-5 text-primary text-xl md:text-2xl !leading-[150%]">
                Submit your details below
              </h4>
              <div className="grid gap-2">
                <InputField
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name ? errors.name : ""}
                  type="text"
                  placeholder="Full name *"
                />
                <InputField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? errors.email : ""}
                  type="text"
                  placeholder="Email address *"
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
                <FileField
                  name="resume"
                  value={values.resume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.resume && touched.resume ? errors.resume : ""}
                  file={file}
                  setFile={setFile}
                  placeholder="Upload your resume *"
                />
                <TextArea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.message && touched.message ? errors.message : ""
                  }
                  placeholder="Your message *"
                />
                <div className="flex items-start mt-6">
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

export default JobQueryForm;
