"use client";

import React from "react";
import { Link } from "@/i18n.config";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "app/common/form-components/InputField";
import Select from "app/common/form-components/Select";
import TextArea from "app/common/form-components/TextArea";
import CheckBoxField from "app/common/form-components/CheckBoxField";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required").email("Email is incorrect"),
  businessName: Yup.string().required("Business name is required"),
  category: Yup.string().required("Complaint is required"),
  details: Yup.string().required("Details is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const Complaints = () => {
  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      businessName: "",
      category: "",
      details: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      fetch("/api/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Form submitted successfully !");
          setSubmitting();
          resetForm();
        })
        .catch((err) =>{
          toast.error("Something went wrong. Please try again later.")
        }
        );
    },
  });

  return (
    <div className="lg:w-[55%] border border-default pr-[2%]">
      <form
        onSubmit={handleSubmit}
        className="py-10 px-5 md:px-8"
        id="contact-form"
      >
        <h4 className="mb-4 text-xl md:text-2xl text-primary font-regular !leading-[130%]">
          Complaints
        </h4>
        <p className="mb-4 text-secondary text-lg !leading-7">
          At AFS our customers are our priority. We take all disputes and
          complaints from our customers and business partners very seriously
          and, as such, all complaints are dealt with promptly and fairly.
        </p>
        <p className="mb-10 text-secondary text-sm !leading-7">
          AFS will endeavor to address all complaints within twenty (20)
          business days.
        </p>
        <h5 className="mb-5 text-lg font-regular !leading-[140%]">
          Submit your details below
        </h5>
        <div className="grid gap-2">
          <div className="grid md:grid-cols-2 gap-2">
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
              placeholder="Last name  *"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-2">
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
              placeholder="Email address  *"
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
          <Select
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.category && touched.category ? errors.category : ""}
            label="Select a complaints category *"
            options={["Merchant support", "BPay", "Al Rateb support - WPS"]}
          />
          <TextArea
            name="details"
            value={values.details}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.details && touched.details ? errors.details : ""}
            placeholder="Details of your complaint *"
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
              className="mt-6  text-center text-white bg-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary py-3 w-full md:w-[197px] font-medium rounded-sm"
              type="submit"
              disabled={isSubmitting}
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
