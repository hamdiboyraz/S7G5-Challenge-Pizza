import React from "react";
import headerImage from "../assets/logo.svg";

const Success = () => {
  return (
    <div className="bg-red w-screen h-screen">
      <div className="bg-red grid place-items-center ">
        <img src={headerImage} alt="teknolojik yemekler" className="py-16" />
        <p className=" text-6xl text-white text-center font-Barlow mt-40">
          TEBRIKLER! <br /> PIZZA'NIZ YOLA ÇIKTI!
        </p>
      </div>
    </div>
  );
};

export default Success;
