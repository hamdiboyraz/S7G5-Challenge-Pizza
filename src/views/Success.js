import React, { useEffect, useState } from "react";
import headerImage from "../assets/logo.svg";

const Success = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("data"));

    if (data) {
      setData(data);
    }
  }, []);

  return (
    <div className="bg-red w-screen h-screen">
      <div className="bg-red grid place-items-center ">
        <img src={headerImage} alt="teknolojik yemekler" className="py-16" />
        <p className=" text-6xl text-white text-center font-Barlow mt-40">
          TEBRIKLER! <br /> PIZZA'NIZ YOLA ÇIKTI!
        </p>
        <div>{data.name && data.name}</div>
        <div>{data.amount && data.amount}</div>
        <div>{data.size && data.size}</div>
        <div>{data.thickness && data.thickness}</div>
        <div>
          {data.toppingsList &&
            Object.entries(data.toppingsList)
              .filter(([key, val]) => val === true)
              .map((el) => <div>{el}</div>)}
        </div>
        <div>{data.orderNote && data.orderNote}</div>
      </div>
    </div>
  );
};

export default Success;
