"use client";

import React, { useState } from "react";
import { Link } from "@/i18n.config";
import InputField from "app/common/form-components/InputField";
import TextArea from "app/common/form-components/TextArea";
import FileField from "app/common/form-components/FileField";
import CheckBoxField from "app/common/form-components/CheckBoxField";

const JobApplyForm = () => {
  const [resume, setResume] = useState();
  const [coverLetter, setCoverLettr] = useState();

  const handleOpenResumeFileUpload = () => {
    document.getElementById("resumeFile").click();
  };
  const handleOpenCoverLetterFileUpload = () => {
    document.getElementById("coverLetterFile").click();
  };

  return (
    <div className="mt-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h4 className="mb-4 text-primary text-xl md:text-2xl font-medium">
          Apply for the position
        </h4>
        <div className="grid gap-2">
          <InputField type="text" placeholder="Full name" />
          <InputField type="email" placeholder="Email address" />
          <FileField
            file={resume}
            setFile={setResume}
            placeholder="Upload your resume"
          />
          <FileField
            file={coverLetter}
            setFile={setCoverLettr}
            placeholder="Cover letter"
          />
          <TextArea placeholder="Your message" />
          <div className="flex items-start mt-4">
            <CheckBoxField />
            <p className="text-secondary text-sm ml-3">
              By sending your information you agree to our
              <Link className="text-primary underline ml-1" href="/">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-4 transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[11px] w-[105px] font-medium rounded-sm"
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
