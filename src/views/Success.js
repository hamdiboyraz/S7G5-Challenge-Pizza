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
        <p className=" text-6xl text-white text-center font-Barlow mt-40 mb-16">
          TEBRIKLER! <br /> PIZZA'NIZ YOLA ÇIKTI!
        </p>

        <div>Customer Name: {data.name && data.name}</div>
        <div>Pizza Name: {data.pizzaName && data.pizzaName}</div>
        <div>Amount: {data.amount && data.amount}</div>
        <div>Size: {data.size && data.size}</div>
        <div>Thickness: {data.thickness && data.thickness}</div>
        <ul>
          Toppings:
          {data.toppingsList &&
            Object.entries(data.toppingsList)
              .filter(([key, val]) => val === true)
              .map((el) => <li className="list-disc">{el}</li>)}
        </ul>
        <div>Order Note: {data.orderNote && data.orderNote}</div>
      </div>
    </div>
  );
};

export default Success;
