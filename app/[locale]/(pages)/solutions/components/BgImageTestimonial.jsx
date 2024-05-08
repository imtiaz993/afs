import React from "react";

const Testimonial = () => {
  return (
    <div
      className="mt-12 md:mt-16  md:h-[451px] border-solid rounded"
      style={{
        backgroundImage: `url('/assets/images/solutions/testimonial.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full h-full rounded"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0) -122%, rgba(0,0,0,1) 197%)`,
        }}
      >
        <div className="max-w-[680px] flex flex-col justify-between p-6 md:p-10 h-[380px] md:h-[451px]">
          <h3 className="text-2xl text-white">
            "Implementing AFS's card issuing and processing solution transformed
            how we handle payments, making transactions not just faster but also
            significantly more secure.
          </h3>
          <div>
            <p className="text-sm text-white">Dr. Pallavi Menon</p>
            <p className="text-xs text-white mt-2 ">
              Chief Financial Officer - Majid Al Futaim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
