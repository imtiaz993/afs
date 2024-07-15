"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "react-select";
import tailwindConfig from "../../../../../tailwind.config";
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
  location: Yup.array()
    .min(1, "Atleast one location must be selected")
    .required("Location is required"),
  solution: Yup.array()
    .min(1, "Atleast one solution must be selected")
    .required("Solution is required"),
  terms: Yup.boolean().oneOf([true], "Must check"),
});

const ContactTeamForm = () => {
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
  const tailwindColorsModule = tailwindConfig.theme.extend;
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
      prefix: "",
      email: "",
      businessName: "",
      location: [],
      solution: [],
      details: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      fetch("/api/contact-email", {
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
          <div>
            {/* <Select
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
            /> */}
            <div className="">
              <MultiSelect
                placeholder={
                  <p className="text-tertiary">
                    Chose your company location(s) *
                  </p>
                }
                isMulti={true}
                options={[
                  { value: "bahrain", label: "Bahrain" },
                  { value: "egypt", label: "Egypt" },
                  { value: "oman", label: "Oman" },
                  {
                    value: "unitedarabemirates",
                    label: "United Arab Emirates",
                  },
                  { value: "other", label: "Other" },
                ]}
                value={values.location}
                onChange={(e) => {
                  setFieldValue("location", e);
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: tailwindColorsModule.borderColor.default,
                    borderRadius: 2,
                    minHeight: 50,
                    paddingLeft: 8,
                  }),
                }}
              />
            </div>
            <p className="text-[12px] font-[400] !leading-[18px] text-tertiary mt-2 pb-6 border-b border-default ">
              Chose the location(s) where you have legal entities
            </p>
          </div>
          <h5 className="text-[18px] font-[400] !leading-[25.2px] text-primary mt-3">
            How can AFS help?
          </h5>
          <div>
            {/* <Select
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
            /> */}
            <div className="">
              <MultiSelect
                placeholder={
                  <p className="text-tertiary">
                    What solutions are you interested in? *
                  </p>
                }
                isMulti={true}
                options={[
                  { value: "solution-banks", label: "Solutions for banks" },
                  {
                    value: "solution-businesses",
                    label: "Solutions for businesses",
                  },
                  {
                    value: "solution-digital-wallets",
                    label: "Digital wallets",
                  },
                ]}
                value={values.solution}
                onChange={(e) => {
                  setFieldValue("solution", e);
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: tailwindColorsModule.borderColor.default,
                    borderRadius: 2,
                    minHeight: 50,
                    paddingLeft: 8,
                  }),
                }}
              />
            </div>
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
              <Link
                className="text-primary underline ml-1"
                href="/legal?section=privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            className="mt-3  text-center text-white bg-brand-secondary   border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  py-3 px-8 w-full font-medium rounded-sm"
            type="submit"
            disabled={isSubmitting}
          >
            Submit your request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactTeamForm;
