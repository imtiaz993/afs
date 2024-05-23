"use client";

import React, { useState, useRef, useEffect } from "react";

const TextArea = ({ placeholder, isError }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(isError);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  const handleBlur = () => setIsFocused(false);
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
        className={`relative bg-white border rounded-sm py-3 px-4 cursor-text ${
          isFocused ? "border-brand-secondary" : "border-default "
        } ${error ? "border-critical" : ""}`}
        onClick={() => {
          handleFocus();
        }}
      >
        <textarea
          className={`w-full text-primary placeholder:text-tertiary outline-none resize-none  relative ${
            isFocused || value ? "top-1.5" : ""
          }`}
          required
          rows={3}
          ref={inputRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label
          onClick={() => {
            handleFocus();
          }}
          className={`absolute left-4 transition-all cursor-text ${
            isFocused || value ? "text-[10px] top-[5px] block select-none" : ""
          } 
        ${isFocused ? "text-brand-secondary" : "text-tertiary"} ${
            error ? "text-critical" : ""
          }`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default TextArea;
