"use client";

import React, { useState, useRef, useEffect } from "react";

const Select = ({ label, options, isError }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(isError);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e) => setValue(e.target.value);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        ref={containerRef}
        className={`relative bg-white border rounded-sm h-[49.6px] overflow-hidden ${
          isFocused ? "border-brand-secondary" : "border-default "
        } ${error ? "border-critical" : ""}`}
        onClick={() => {
          handleFocus();
        }}
      >
        <select
          className={`w-full px-4 text-primary outline-none bg-transparent absolute -left-[3px] bottom-0 top-0 z-10 ${
            value && isFocused ? "pt-2.5" : ""
          } ${value ? "pt-2.5" : ""}`}
          required
          onChange={handleChange}
        >
          <option value=""></option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label
          className={`w-full h-full relative left-4 top-[12px] transition-all z-0 ${
            isFocused && value ? "text-brand-secondary" : "text-tertiary"
          }  ${value ? "top-[4px] block select-none text-[10px]" : ""} ${
            error ? "text-critical" : ""
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Select;
