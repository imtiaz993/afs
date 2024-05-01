import React from "react";

const PageLayout = ({ bg, children }) => {
  return (
    <div className="w-full">
      <div className={`w-full ${bg ? bg : ""}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:mx-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
