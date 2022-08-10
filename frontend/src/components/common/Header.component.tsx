import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.component";
import Banner from "./Banner.component";

const HeaderComponent = () => {
  const [headerColor, setHeaderColor] = useState<string>("");

  const listenToScroll = () => {
    if (window.scrollY > 850) {
      setHeaderColor("black");
    } else if (window.scrollY < 1100) {
      setHeaderColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  return (
    <div role="banner">
      <Banner />
      <Navbar style={{ background: headerColor }} />
    </div>
  );
};

export default HeaderComponent;
