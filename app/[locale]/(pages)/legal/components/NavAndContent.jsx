"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavigationMenu from "./NavigationMenu";
import { legalContentData } from "../legalContentData";
import Content from "./Content";

const NavAndContent = () => {
  const [navSelected, setNavSelected] = useState(legalContentData[0].title);
  const searchParam = useSearchParams().get("section");

  useEffect(() => {
    switch (searchParam) {
      case "afs-legal-statement":
        setNavSelected(legalContentData[0].title);
        break;
      case "privacy-policy":
        setNavSelected(legalContentData[1].title);
        break;
      case "cookies-policy":
        setNavSelected(legalContentData[2].title);
        break;
      case "anti-money-laundering":
        setNavSelected(legalContentData[3].title);
        break;
      case "bpay-terms-conditions":
        setNavSelected(legalContentData[4].title);
        break;
      case "merchant-terms-conditions":
        setNavSelected(legalContentData[5].title);
        break;
      default:
        setNavSelected(legalContentData[0].title);
    }
  }, [searchParam]);

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
