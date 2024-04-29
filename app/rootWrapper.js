"use client"

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function RootWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ once: true, duration: 1200, delay: 300, offset: 0 });
    }
  }, []);

  return <div className="max-w-[1920px] mx-auto">{children}</div>;
}
