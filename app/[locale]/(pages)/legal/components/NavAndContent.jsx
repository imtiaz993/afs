"use client";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { legalContentData } from "../legalContentData";
import Content from "./Content";

const NavAndContent = () => {
  const [navSelected, setNavSelected] = useState(legalContentData[0].title);

  return (
    <>
      <NavigationMenu
        navSelected={navSelected}
        setNavSelected={setNavSelected}
        navItems={legalContentData.map((item) => item.title)}
      />

      <div className="hidden md:block md:w-[calc(100%-304px)]">
        <Content
          data={legalContentData.find((item) => item.title == navSelected)}
        />
      </div>
      <div className="md:hidden">
        {legalContentData.map((item) => (
          <Content data={item} />
        ))}
      </div>
    </>
  );
};

export default NavAndContent;
