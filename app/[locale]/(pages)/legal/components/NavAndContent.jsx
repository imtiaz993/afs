"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavigationMenu from "./NavigationMenu";
import { legalContentData } from "../legalContentData";
import Content from "./Content";

const NavAndContent = () => {
  const [navSelected, setNavSelected] = useState(legalContentData[0].id);
  const searchParam = useSearchParams().get("section");

  const setNavAndScrollToView = (id) => {
    setNavSelected(id);
    const barHeight = 240;
    const location = document.getElementById(id).offsetTop;
    window.scrollTo({ top: location - barHeight, behavior: "smooth" });
  };
  useEffect(() => {
    switch (searchParam) {
      case "afs-legal-statement":
        setNavAndScrollToView(legalContentData[0].id);
        break;
      case "privacy-policy":
        setNavAndScrollToView(legalContentData[1].id);
        break;
      case "cookies-policy":
        setNavAndScrollToView(legalContentData[2].id);
        break;
      case "anti-money-laundering":
        setNavAndScrollToView(legalContentData[3].id);
        break;
      case "bpay-terms-conditions":
        setNavAndScrollToView(legalContentData[4].id);
        break;
      case "merchant-terms-conditions":
        setNavAndScrollToView(legalContentData[5].id);
        break;
      default:
        setNavAndScrollToView(legalContentData[0].id);
    }
  }, [searchParam]);

  return (
    <>
      <NavigationMenu
        navSelected={navSelected}
        setNavAndScrollToView={setNavAndScrollToView}
        data={legalContentData}
      />

      <div className="hidden md:block md:w-[calc(100%-304px)]">
        <Content
          data={legalContentData.find((item) => item.id == navSelected)}
        />
      </div>
      <div className="md:hidden">
        {legalContentData.map((item) => (
          <Content data={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default NavAndContent;
