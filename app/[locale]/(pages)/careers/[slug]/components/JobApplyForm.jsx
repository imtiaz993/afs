"use client";

import React, { useState } from "react";
import { Link } from "@/i18n.config";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "app/common/form-components/InputField";
import TextArea from "app/common/form-components/TextArea";
import FileField from "app/common/form-components/FileField";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is incorrect"),
  resume: Yup.string().required("Resume is required"),
  coverLetter: Yup.string().required("Resume is required"),
  message: Yup.string().required("Message is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});
const JobApplyForm = () => {
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
      resume: "",
      coverLetter: "",
      message: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const [resume, setResume] = useState();
  const [coverLetter, setCoverLettr] = useState();

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit}>
        <h4 className="mb-4 text-primary text-xl md:text-2xl font-medium !leading-[130%]">
          Apply for the position
        </h4>
        <div className="grid gap-2">
          <InputField
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name ? errors.name : ""}
            type="text"
            placeholder="Full name"
          />
          <InputField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : ""}
            type="email"
            placeholder="Email address"
          />
          <FileField
            name="resume"
            value={values.resume}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.resume && touched.resume ? errors.resume : ""}
            file={resume}
            setFile={setResume}
            placeholder="Upload your resume"
          />
          <FileField
            name="coverLetter"
            value={values.coverLetter}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.coverLetter && touched.coverLetter
                ? errors.coverLetter
                : ""
            }
            file={coverLetter}
            setFile={setCoverLettr}
            placeholder="Cover letter"
          />
          <TextArea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message && touched.message ? errors.message : ""}
            placeholder="Your message"
          />
          <div className="flex items-start mt-4">
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
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-4  text-center text-white bg-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-[11px] w-full md:w-[105px] font-medium rounded-sm"
              type="submit"
            >
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplyForm;
