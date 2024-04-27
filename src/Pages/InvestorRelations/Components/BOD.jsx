import React from "react";

const BOD = () => {
  const bod = [
    {
      name: "Mr. Sael Al Waary",
      designation: "Chairman",
      image: "/assets/images/bod/1.png",
    },
    {
      name: "Dr. Tarik Yousef",
      designation: "Deputy Chairman",
      image: "/assets/images/bod/2.png",
    },
    {
      name: "Mr. Maher Kaddoura",
      designation: "Director",
      image: "/assets/images/bod/3.png",
    },
    {
      name: "Mr. Musab M. Msallem",
      designation: "Director",
      image: "/assets/images/bod/4.png",
    },
    {
      name: "Mr. Suresh Padmanabhan",
      designation: "Director",
      image: "/assets/images/bod/5.png",
    },
    {
      name: "Mr. Siegfried Heimgaertner",
      designation: "Director",
      image: "/assets/images/bod/6.png",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16">
      <p className="mb-4 text-secondary flex items-center font-light">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" /> Our
        board of directors
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[1050px] leading-[120%]">
        Guiding our vision and strategy.
      </h1>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {bod.map((item, index) => (
            <div className="bg-brand-surface w-full" key={index}>
              <div className="m-2 mb-0">
                <img className="w-full" src={item.image} alt="" />
              </div>
              <div className="p-4 pt-0 lg:p-6">
                <h1 className="mt-4 text-brand-secondary text-base md:text-2xl 2xl:whitespace-nowrap">
                  {item.name}
                </h1>
                <p className="mt-2 text-brand-secondary text-xs md:text-sm xl:whitespace-nowrap">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BOD;
