import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

console.log(data);

const Form = () => {
  return (
    <form action="">
      <div className="flex justify-between mb-4">
        <div>
          <div className=" text-lg font-bold font-Barlow mb-4">
            Boyut Seç <span className=" text-red">*</span>
          </div>
          <div className="mb-2">
            <input id="Küçük" type="radio" value="" name="Boyut" />
            <label htmlFor="Küçük" className=" ml-4">
              Küçük
            </label>
          </div>
          <div className="mb-2">
            <input id="Orta" type="radio" value="" name="Boyut" />
            <label htmlFor="Orta" className=" ml-4">
              Orta
            </label>
          </div>
          <div className="mb-2">
            <input id="Büyük" type="radio" value="" name="Boyut" />
            <label htmlFor="Büyük" className=" ml-4">
              Büyük
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="countries"
            className="text-lg font-bold font-Barlow mb-4 mr-32 block text-gray-900"
          >
            Hamur Seç <span className=" text-red">*</span>
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
          >
            <option selected disabled>
              Hamur Kalınlığı
            </option>
            <option value="">Standart</option>
            <option value="">İnce</option>
            <option value="">Kalın</option>
          </select>
        </div>
      </div>

      <div className="mb-16">
        <div className=" text-lg font-bold font-Barlow mb-4">Ek Malzemeler</div>
        <div className="mb-4">En Fazla 10 malzeme seçebilirsiniz. 5₺/Adet</div>
        <div className="grid grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="mb-4">
              <input
                id={item.value}
                type="checkbox"
                name=""
                value={item.value}
                className=""
              />
              <label htmlFor={item.value} className="ml-2">
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg font-bold font-Barlow mb-4">Sipariş Notu</div>

        <input
          type="text"
          id="first_name"
          className="border-solid border-2 border-zinc-200 w-full h-16 p-4 rounded-md mb-4"
          placeholder="   Siparişine eklemek istediğin bir not var mı?"
          // required
        ></input>
      </div>

      <hr className="my-10 border-zinc-500" />

      <div className="flex justify-between">
        <div className="flex">
          <button className="border bg-yellow w-12 h-12 rounded-md hover:bg-[#fde047]">
            -
          </button>
          <div className="border-2 bg-white w-12 h-12 rounded-md flex items-center justify-center">
            1
          </div>
          <button className="border bg-yellow w-12 h-12 rounded-md hover:bg-[#fde047]">
            +
          </button>
        </div>
        <div>
          <div className="border p-8 rounded-md">
            <div className="text-lg font-bold font-Barlow mb-4 mr-32 ">
              Sipariş Toplamı
            </div>
            <div className="flex justify-between font-Barlow mb-2">
              <div>Seçimler</div>
              <div>25.00₺</div>
            </div>
            <div className="flex justify-between font-Barlow font-bold text-red">
              <div>Toplam</div>
              <div>110.50₺</div>
            </div>
          </div>
          <Link to="/success/:id">
            <button className="font-Barlow font-bold w-full py-4 px-8 border bg-yellow rounded-md hover:bg-[#fde047] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              SİPARİŞ VER
            </button>
          </Link>
        </div>
      </div>
      <div className="h-32"></div>
    </form>
  );
};

export default Form;
