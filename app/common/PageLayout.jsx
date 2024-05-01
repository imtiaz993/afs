import React from "react";

const PageLayout = ({ bg, styles="", children }) => {
  return (
    <div className="w-full">
      <div className={`w-full ${bg ? bg : ""} `}>
        <div className="max-w-[1440px] mx-auto">
          <div className={`px-10 lg:px-16 ${styles}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
