"use client";

import React from "react";

const FileField = ({ file, setFile, placeholder }) => {
  const handleOpenFile = () => {
    document.getElementById(placeholder.replace(/ /g, "")).click();
  };

  return (
    <div
      className="relative bg-white border rounded-sm border-default  py-1 pl-4 pr-1 flex items-center justify-between cursor-pointer"
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
        className={`bg-white text-tertiary w-full cursor-pointer relative ${
          file ? "top-1.5" : ""
        }`}
      >
        {file ? file.name : ""}
      </p>
      <button
        className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[7.2px] w-[82px] rounded-sm"
        type="button"
      >
        Upload
      </button>
      <label
        className={`absolute text-tertiary left-4 transition-all cursor-pointer ${
          file ? "text-[10px] top-[5px] block select-none" : ""
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FileField;
