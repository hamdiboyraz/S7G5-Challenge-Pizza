import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/logo.svg";

const Home = () => {
  return (
    <div className=" bg-home h-screen w-screen bg-cover bg-center ">
      <div className="grid place-items-center  place-content-center">
        <img
          src={headerImage}
          alt="teknolojik yemekler"
          className="mx-auto py-16"
        />
        <p className="  text-6xl text-white text-center font-Barlow">
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </p>
        <Link to="/pizza">
          <button className="bg-yellow my-8 py-3 px-12 rounded-full font-Barlow font-bold hover:text-yellow hover:bg-[#1e293b] ">
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
// hover:bg-amber-500 active:bg-lime-700 active:text-white hover:pos
