import React from "react";

const Select = ({ label, options }) => {
  return (
    <select
      className="cursor-pointer rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white border border-default focus:border-brand-secondary"
      required
    >
      <option value="">{label}</option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
