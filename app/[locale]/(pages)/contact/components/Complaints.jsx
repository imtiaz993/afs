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
  prefix: Yup.string().required("Country Prefix is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required").email("Email is incorrect"),
  businessName: Yup.string().required("Business name is required"),
  category: Yup.string().required("Complaint is required"),
  details: Yup.string().required("Details is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const Complaints = () => {
  const countryCodes = [
    "+1", // USA
    "+7", // Kazakhstan
    "+20", // Egypt
    "+27", // South Africa
    "+30", // Greece
    "+31", // Netherlands
    "+32", // Belgium
    "+33", // France
    "+34", // Spain
    "+36", // Hungary
    "+39", // Italy
    "+40", // Romania
    "+41", // Switzerland
    "+42", // Czech Republic
    "+43", // Austria
    "+44", // UK
    "+45", // Denmark
    "+46", // Sweden
    "+47", // Norway
    "+48", // Poland
    "+49", // Germany
    "+51", // Peru
    "+52", // Mexico
    "+53", // Cuba
    "+54", // Argentina
    "+55", // Brazil
    "+56", // Chile
    "+57", // Colombia
    "+58", //Venezuela
    "+60", //Malaysia
    "+61", //Australia
    "+62", //Indonesia
    "+63", //Philippines
    "+64", //New Zealand
    "+65", //Singapore
    "+66", //Thailand
    "+81", //Japan
    "+82", //Korea South
    "+84", //Vietnam
    "+86", //China
    "+90", //Turkey
    "+91", //India
    "+92",
    "+94",
    "+95",
    "+98",
    "+212",
    "+213",
    "+216",
    "+218",
    "+220",
    "+221",
    "+222",
    "+223",
    "+224",
    "+226",
    "+227",
    "+228",
    "+229",
    "+231",
    "+232",
    "+233",
    "+234",
    "+236",
    "+237",
    "+239",
    "+240",
    "+241",
    "+242",
    "+244",
    "+245",
    "+248",
    "+249",
    "+250",
    "+251",
    "+252",
    "+253",
    "+254",
    "+256",
    "+257",
    "+258",
    "+260",
    "+261",
    "+262",
    "+263",
    "+264",
    "+265",
    "+266",
    "+267",
    "+268",
    "+269",
    "+290",
    "+291",
    "+297",
    "+298",
    "+299",
    "+350",
    "+351",
    "+352",
    "+353",
    "+354",
    "+356",
    "+357",
    "+358",
    "+359",
    "+370",
    "+371",
    "+372",
    "+373",
    "+374",
    "+375",
    "+376",
    "+378",
    "+379",
    "+380",
    "+381",
    "+385",
    "+386",
    "+387",
    "+389",
    "+417",
    "+421",
    "+500",
    "+501",
    "+502",
    "+503",
    "+504",
    "+505",
    "+506",
    "+507",
    "+509",
    "+590",
    "+591",
    "+592",
    "+593",
    "+594",
    "+595",
    "+596",
    "+597",
    "+598",
    "+670",
    "+671",
    "+672",
    "+673",
    "+674",
    "+675",
    "+676",
    "+677",
    "+678",
    "+679",
    "+680",
    "+681",
    "+682",
    "+683",
    "+686",
    "+687",
    "+688",
    "+689",
    "+691",
    "+692",
    "+850",
    "+852",
    "+853",
    "+855",
    "+856",
    "+880",
    "+886",
    "+960",
    "+961",
    "+962",
    "+963",
    "+964",
    "+965",
    "+966",
    "+967",
    "+968",
    "+969",
    "+971",
    "+972",
    "+973",
    "+974",
    "+975",
    "+976",
    "+977",
    "+992",
    "+993",
    "+994",
    "+996",
    "+998",
    "+1242",
    "+1246",
    "+1264",
    "+1268",
    "+1284",
    "+1340",
    "+1345",
    "+1441",
    "+1473",
    "+1649",
    "+1664",
    "+1758",
    "+1787",
    "+1809",
    "+1868",
    "+1869",
    "+1876",
    "+7880",
    "+90392",
  ];
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
      prefix: "",
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
        .catch((err) => {
          toast.error("Something went wrong. Please try again later.");
        });
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
          <div className="flex items-center xl:grid-cols-2 gap-2">
            <div className="w-[40%]">
              <Select
                name="prefix"
                value={values.prefix}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.prefix && touched.prefix ? errors.prefix : ""}
                label="Prefix *"
                options={countryCodes}
              />
            </div>
            <div className="w-full">
              <InputField
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone ? errors.phone : ""}
                type="tel"
                placeholder="Phone number *"
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-2 gap-2">
            <InputField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? errors.email : ""}
              type="email"
              placeholder="Business email address *"
            />
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
          </div>
          <Select
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.category && touched.category ? errors.category : ""}
            label="Select a complaints category *"
            options={["Merchant support", "BPay support", "Al Rateb support - WPS"]}
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
