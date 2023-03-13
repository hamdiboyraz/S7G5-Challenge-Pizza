import React from "react";
import headerImage from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-red grid place-items-center ">
      <img src={headerImage} alt="teknolojik yemekler" className="py-16" />
    </div>
  );
};

export default Header;
