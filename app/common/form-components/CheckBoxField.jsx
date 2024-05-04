"use client";

import React, { useEffect, useState } from "react";
import Checkbox from "react-custom-checkbox";

const CheckBoxField = () => {
  const [isHover, setIsHover] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const src =
      !isHover && checked
        ? "/assets/icons/checkbox/checked.svg"
        : isHover && checked
        ? "/assets/icons/checkbox/checked-hover.svg"
        : isHover && !checked
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
  }, [isHover, checked]);

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
        icon={<img src="" alt="" />}
        onChange={(value) => {
          setChecked(value);
        }}
        borderColor={checked ? "#036FD0" : "#D4DFE9"}
        className={`!border-[1px] !w-5 !h-5  cursor-pointer checkBoxElement ${
          checked ? "bg-brand-secondary" : "bg-white"
        }`}
        iconClassName="!hidden"
        iconStyle={{ display: "none" }}
      />
    </div>
  );
};

export default CheckBoxField;
