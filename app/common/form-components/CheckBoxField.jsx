"use client";

import React, { useEffect, useState } from "react";
import Checkbox from "react-custom-checkbox";

const CheckBoxField = ({ name, error, value, setFieldValue, onBlur }) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const src =
      !isHover && value
        ? "/assets/icons/checkbox/checked.svg"
        : isHover && value
        ? "/assets/icons/checkbox/checked-hover.svg"
        : isHover && !value
        ? "/assets/icons/checkbox/uncheck-hover.svg"
        : "";

    if (document.getElementById("checkboxId")) {
      document.getElementById("checkboxId").src = src;
    } else {
      const checkBoxElement =
        document.getElementsByClassName("checkBoxElement");
      const img = document.createElement("img");
      img.setAttribute("id", "checkboxId");
      img.src = src;

      img.alt = "";

      if (checkBoxElement[0]) {
        checkBoxElement[0].appendChild(img);
      }
    }
  }, [isHover, value]);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Checkbox
        id={name}
        icon={<img src="" alt="" />}
        borderColor={value ? "#036FD0" : error ? "#DF1B41" : "#D4DFE9"}
        className={`!border-[1px] !w-5 !h-5  cursor-pointer checkBoxElement ${
          value ? "bg-brand-secondary" : "bg-white"
        }`}
        iconClassName="!hidden"
        iconStyle={{ display: "none" }}
        name={name}
        value={value}
        onChange={(e) => {
          setFieldValue([name], e);
        }}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CheckBoxField;
