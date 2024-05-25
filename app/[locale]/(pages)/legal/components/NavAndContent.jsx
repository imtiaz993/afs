"use client";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";

const NavAndContent = () => {
  const [navSelected, setNavSelected] = useState("AFS legal statement");

  const navItems = [
    "AFS legal statement",
    "Privacy Policy",
    "Cookies Settings",
    "Anti money laundering",
    "Business terms & conditions",
    "Merchant terms & conditions",
  ];

  return (
    <>
      <NavigationMenu
        navSelected={navSelected}
        setNavSelected={setNavSelected}
        navItems={navItems}
      />
      <div className="hidden md:block md:w-[calc(100%-304px)]">
        <Content title={navSelected} />
      </div>
      <div className="md:hidden">
        {navItems.map((item) => (
          <Content title={item} />
        ))}
      </div>
    </>
  );
};

export default NavAndContent;
