import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/logo.svg";
import Form from "../components/Form";

const Order = () => {
  return (
    <div>
      <div className="bg-red  ">
        <img
          src={headerImage}
          alt="teknolojik yemekler"
          className="py-16 mx-auto"
        />
      </div>
      <nav className="bg-red pb-4 mb-4">
        <div className="w-1/2 mx-auto">
          <Link to="/" className="text-zinc-200 hover:text-black ">
            Anasayfa -{" "}
          </Link>
          <Link to="#" className="text-zinc-200 hover:text-black">
            Seçenekler -{" "}
          </Link>
          <Link
            to="#"
            className="text-white text-bold hover:text-black hover:text-bold"
          >
            Sipariş Oluştur
          </Link>
        </div>
      </nav>

      <div className="w-1/2 mx-auto">
        <h2 className=" text-3xl mb-4">Acı Pizza</h2>
        <div className="grid grid-cols-4 gap-4 mb-4 items-center">
          <p className=" text-4xl font-extrabold col-span-2">85.50 ₺</p>
          <p className="grid-cols-{3} justify-self-end">4.9</p>
          <p className=" grid-cols-{4} justify-self-end">(200)</p>
        </div>
        <p className=" mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos
          temporibus autem officiis quas expedita obcaecati. Ea tenetur quae
          nisi at pariatur accusamus eius, praesentium et laborum rem earum
          explicabo!
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Order;
