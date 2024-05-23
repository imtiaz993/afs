"use client";

import React, { useState } from "react";

const FileField = ({ file, setFile, placeholder, isError }) => {
  const [error, setError] = useState(isError);

  const handleOpenFile = () => {
    document.getElementById(placeholder.replace(/ /g, "")).click();
  };

  return (
    <div>
      {error && (
        <div className="flex justify-end">
          <p className="inline-block bg-critical py-0.5 px-1 text-[10px] text-white font-medium rounded-t-sm overflow-hidden">
            Email is incorrect
          </p>
        </div>
      )}
      <div
        className={`relative bg-white border rounded-sm border-default  py-1 pl-4 pr-1 flex items-center justify-between cursor-pointer ${
          error ? "border-critical" : ""
        }`}
        onClick={handleOpenFile}
      >
        <input
          type="file"
          id={placeholder.replace(/ /g, "")}
          className="hidden"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <p
          className={`bg-white text-primary w-full cursor-pointer relative ${
            file ? "top-1.5" : ""
          }`}
        >
          {file ? file.name : ""}
        </p>
        <button
          className=" text-center text-white bg-brand-secondary   border border-brand-secondary  py-[7.2px] w-[82px] rounded-sm"
          type="button"
        >
          Upload
        </button>
        <label
          className={`absolute text-tertiary left-4 transition-all cursor-pointer ${
            file ? "text-[10px] top-[5px] block select-none" : ""
          } ${error ? "text-critical" : ""}`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default FileField;
