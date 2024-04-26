import React, { useState } from "react";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team");
  const teams = {
    team: [
      {
        name: "Samer Soliman",
        designation: "Chief Executive Officer",
        image: "/assets/images/team/1.png",
      },
      {
        name: "Ghassan Mardini",
        designation: "Chief Operating Officer",
        image: "/assets/images/team/2.png",
      },
      {
        name: "Abdelmaguid Afifi",
        designation: "Chief Financial Officer",
        image: "/assets/images/team/3.png",
      },
      {
        name: "Charles Gill",
        designation: "Chief Transformation and Commercial Officer",
        image: "/assets/images/team/4.png",
      },
      {
        name: "Amira Ismail",
        designation: "Head of Acquiring Bahrain",
        image: "/assets/images/team/5.png",
      },
      {
        name: "Rizwan Khan ",
        designation: "Head of Acquiring UAE & Oman",
        image: "/assets/images/team/6.png",
      },
      {
        name: "Tawfik Mahmoud",
        designation: "Head of Acquiring Egypt",
        image: "/assets/images/team/7.png",
      },
      {
        name: "Ebrahim Jassim",
        designation: "Advisor to the CEO",
        image: "/assets/images/team/8.png",
      },
      {
        name: "Ganesh Patil",
        designation: "Head of Risk Management",
        image: "/assets/images/team/9.png",
      },
      {
        name: "Kavita Nair",
        designation: "Head of Legal",
        image: "/assets/images/team/10.png",
      },
      {
        name: "Mouna Semaan",
        designation: "Head of Human Resources ",
        image: "/assets/images/team/11.png",
      },
      {
        name: "Azza Matar",
        designation: "Head of Marketing and Communications",
        image: "/assets/images/team/12.png",
      },
      {
        name: "Adel Al Mahmood",
        designation: "Head of Compliance & MLRO",
        image: "/assets/images/team/13.png",
      },
      {
        name: "Ajmal Basheer",
        designation: "Head of Processing Business",
        image: "/assets/images/team/14.png",
      },
    ],
    bod: [
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
    ],
  };
  return (
    <div className="w-11/12 mx-auto py-10 lg:py-24 md:px-10 lg:px-16">
      <p className="mb-4 text-secondary flex items-center">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" /> Our
        team
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[1050px] leading-[120%]">
        Our seasoned team leads with vision and expertise, guiding our company
        towards a successful future.
      </h1>
      <div>
        <div className="flex border-b border-default">
          <button
            className={`transition-colors duration-300 text-center ${
              activeTab === "team"
                ? "text-white bg-brand-secondary  border border-brand-secondary"
                : "text-brand-secondary bg-white"
            }   py-3 w-[160px] md:w-[185px] font-medium rounded-sm`}
            onClick={() => {
              setActiveTab("team");
            }}
          >
            Senior management
          </button>
          <button
            className={`transition-colors duration-300 text-center ${
              activeTab === "bod"
                ? "text-white bg-brand-secondary  border border-brand-secondary"
                : "text-brand-secondary bg-white"
            }   py-3 w-[160px] md:w-[185px] font-medium rounded-sm`}
            onClick={() => {
              setActiveTab("bod");
            }}
          >
            Board of directors
          </button>
        </div>
        {activeTab === "team" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {teams.team.map((item, index) => (
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
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {teams.bod.map((item, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Team;
