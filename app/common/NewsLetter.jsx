"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import InputField from "./form-components/InputField";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is incorrect"),
});

const NewsLetter = ({ showStuffs }) => {
  const [isVisible, setIsVisible] = useState(showStuffs);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Email submitted successfully!");
          setSubmitting();
          resetForm();
        })
        .catch((err) => {
          console.log("Catched Error: ", err);
          toast.error("Something went wrong. Please try again later.");
          resetForm();
        });
    },
  });

  return (
    <div className="relative">
      <div className="bg-subtle-neutral flex flex-col space-y-4 md:space-y-0 md:flex-row  my-8 h-auto lg:h-[196px]">
        <div className="relative md:w-2/4 w-100">
          <div className="flex-col h-full space-y-2 z-10 relative sm:space-y-0 pt-7 md:py-7 lg:py-14 pl-5  lg:pl-10 pr-5 lg:pr-0">
            <h3 className="text-2xl xl:text-[40px] text-medium-brand !leading-[120%]">
              Join our network
            </h3>
            <p className="text-lg font-normal text-secondary">
              Get the latest AFS news, announcements and more.
            </p>
          </div>
          {isVisible && (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/assets/images/news/blue-vector.png"}
              alt="Blue Vector"
              className="absolute inset-0 w-full h-full hidden xl:block"
            />
          )}
        </div>

        <div className="md:w-2/4 w-100 flex flex-col space-y-4 pb-7 md:py-7 pl-5 lg:pl-0 lg:py-14  pr-5  lg:pr-10">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between  md:flex-row space-y-4 md:space-y-0 flex-col space-x-0 md:space-x-4 h-auto">
              <div className="md:w-3/4 w-100  h-12">
                <InputField
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Email address"}
                  error={errors.email && touched.email ? errors.email : ""}
                />
              </div>
              <button
                type="submit"
                className="text-white py-[11px] w-full bg-brand-secondary border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary font-medium rounded-sm h-12 lg:max-w-[135px] md:w-1/4"
                disabled={isSubmitting}
              >
                Subscribe
              </button>
            </div>
          </form>

          {isVisible && (
            <p
              className={`text-secondary mt-4 text-sm pb-0 md:pb-10 mb-10
            }`}
            >
              By subscribing you agree to our{" "}
              <Link
                className="text-primary underline underline-offset-1"
                href="/legal?section=privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
