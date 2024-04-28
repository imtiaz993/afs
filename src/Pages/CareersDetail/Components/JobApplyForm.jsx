import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <h1 className="mb-4 text-primary text-xl md:text-2xl">
          Apply for the position
        </h1>
        <div className="grid gap-2">
          <input
            className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none border border-default"
            type="text"
            placeholder="Full name"
            required
          />
          <input
            className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none border border-default"
            required
            type="email"
            placeholder="Email address"
          />

          <div
            className="rounded-sm py-1 pl-4 pr-1 text-tertiary bg-white flex items-center justify-between cursor-pointer border border-default"
            onClick={handleOpenResumeFileUpload}
          >
            <input
              type="file"
              id="resumeFile"
              className="hidden"
              onChange={(e) => {
                setResume(e.target.files[0]);
              }}
            />
            <p className="bg-white w-full cursor-pointer">
              {resume ? resume.name : "Upload your resume"}
            </p>
            <button
              className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-2 w-[82px] rounded-sm"
              type="button"
            >
              Upload
            </button>
          </div>
          <div
            className="rounded-sm py-1 pl-4 pr-1 text-tertiary bg-white flex items-center justify-between cursor-pointer border border-default"
            onClick={handleOpenCoverLetterFileUpload}
          >
            <input
              type="file"
              id="coverLetterFile"
              className="hidden"
              onChange={(e) => {
                setCoverLettr(e.target.files[0]);
              }}
            />
            <p className="bg-white w-full cursor-pointer">
              {coverLetter ? coverLetter.name : "Cover letter"}
            </p>
            <button
              className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-2 w-[82px] rounded-sm"
              type="button"
            >
              Upload
            </button>
          </div>
          <textarea
            className="rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none border border-default resize-none"
            required
            rows={3}
            placeholder="Your message"
          />
          <div className="flex items-start mt-4">
            <input
              type="checkbox"
              className="w-5 h-5 border border-default rounded"
              required
            />
            <p className="text-secondary text-sm ml-3">
              By sending your information you agree to our
              <Link className="text-primary underline ml-1" to="/">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              data-aos="fade-up"
              className="mt-4 transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-3 w-[105px] font-medium rounded-sm"
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
