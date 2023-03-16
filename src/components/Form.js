import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { postOrder } from "../controllers/orderController";
import orderSchema from "../models/orderModel";

const Form = ({
  toppingList,
  counter,
  increase,
  decrease,
  toppingsHandler,
  toppingsPrice,
  totalPrice,
}) => {
  const navigate = useNavigate();

  const initialFormState = {
    size: "",
    thickness: "",
    toppingsList: {
      Pepperroni: false,
      Domates: false,
      Biber: false,
      Sosis: false,
      Mısır: false,
      Sucuk: false,
      "Kanada Jambonu": false,
      Pastırma: false,
      Ananas: false,
      "Tavuk Izgara": false,
      Jalepeno: false,
      Kabak: false,
      Soğan: false,
      Sarımsak: false,
    },
    orderNote: "",
    name: "",
    amount: "1",
  };

  const initialFormErrors = {
    name: "",
    size: "",
    thickness: "",
  };

  const [orderForm, setOrderForm] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setOrderForm({
      ...orderForm,
      toppingsList: { ...orderForm.toppingsList, [name]: checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("https://reqres.in/api/orders", orderForm).then((res) => {
    //   localStorage.setItem("is-authenticated", "true");
    //   sessionStorage.setItem("is-authenticated", "true");
    //   console.log("Post Request", res.data);
    // });

    postOrder(orderForm);

    // const id = postOrder(orderForm);
    // console.log(id);

    navigate("/success/:id");
    console.log(e);
  };

  useEffect(() => {
    setOrderForm({ ...orderForm, amount: counter });
  }, [counter]);

  useEffect(() => {
    orderSchema.isValid(orderForm).then((valid) => {
      // console.log(valid);
      setButtonDisabled(!valid);
    });
  }, [orderForm]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between mb-4">
        <div>
          <div className=" text-lg font-bold font-Barlow mb-4">
            Boyut Seç <span className=" text-red">*</span>
          </div>
          <div className="mb-2">
            <input
              id="Küçük"
              type="radio"
              value="Küçük"
              name="size"
              onChange={handleChange}
            />
            <label htmlFor="Küçük" className=" ml-4">
              Küçük
            </label>
          </div>
          <div className="mb-2">
            <input
              id="Orta"
              type="radio"
              value="Orta"
              name="size"
              onChange={handleChange}
              // checked
            />
            <label htmlFor="Orta" className=" ml-4">
              Orta
            </label>
          </div>
          <div className="mb-2">
            <input
              id="Büyük"
              type="radio"
              value="Büyük"
              name="size"
              onChange={handleChange}
            />
            <label htmlFor="Büyük" className=" ml-4">
              Büyük
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="thickness"
            className="text-lg font-bold font-Barlow mb-4 mr-32 block text-gray-900"
          >
            Hamur Seç <span className=" text-red">*</span>
          </label>
          <select
            id="thickness"
            onChange={handleChange}
            // value={value}
            name="thickness"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
          >
            <option selected disabled>
              Hamur Kalınlığı
            </option>
            <option value="Standart">Standart</option>
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>
      </div>

      <div className="mb-16">
        <div className=" text-lg font-bold font-Barlow mb-4">Ek Malzemeler</div>
        <div className="mb-4">En Fazla 10 malzeme seçebilirsiniz. 5₺/Adet</div>
        <div className="grid grid-cols-3">
          {toppingList.map((item, index) => (
            <div key={index} className="mb-4">
              <input
                id={item.id}
                type="checkbox"
                name={item.name}
                // value={item.price}
                checked={item.isChecked}
                onChange={(e) => {
                  // toppingList.filter((el) => el.isChecked === true).length <
                  //   10 || item.isChecked
                  //   ? toppingsHandler(item)
                  //   : null
                  if (
                    toppingList.filter((el) => el.isChecked === true).length <
                      10 ||
                    item.isChecked
                  )
                    toppingsHandler(item);

                  handleCheckChange(e);
                }}
                className=""
              />
              <label htmlFor={item.id} className="ml-2">
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-lg font-bold font-Barlow mb-4">Sipariş Notu</div>

        <textarea
          id="message"
          rows="4"
          name="orderNote"
          onChange={handleChange}
          maxLength="150"
          className="border-solid border-2 border-zinc-200 w-full p-4 rounded-md mb-4 text-gray-900 bg-gray-50 resize-none"
          placeholder="Siparişinize eklemek istediğin bir not var mı?"
        ></textarea>
      </div>

      <hr className="my-10 border-zinc-500" />

      <div className="mb-8">
        <div className="text-lg font-bold font-Barlow mb-4">İsminiz</div>

        <input
          type="text"
          id="first_name"
          name="name"
          onChange={handleChange}
          maxLength="20"
          className="border-solid border-2 border-zinc-200 w-full h-16 p-4 rounded-md mb-4 text-gray-900 bg-gray-50"
          placeholder="İsminizi giriniz"
          required
        ></input>
      </div>

      <hr className="my-10 border-zinc-500" />

      <div className="flex justify-between">
        <div className="flex">
          <button
            type="button"
            name="amount"
            onClick={decrease}
            disabled={counter === 1 ? true : false}
            className="border bg-yellow w-12 h-12 rounded-md hover:bg-[#fde047] disabled:bg-zinc-200"
          >
            -
          </button>
          <div className="border-2 bg-white w-12 h-12 rounded-md flex items-center justify-center">
            {counter}
          </div>
          <button
            type="button"
            onClick={increase}
            disabled={counter === 10 ? true : false}
            className="border bg-yellow w-12 h-12 rounded-md hover:bg-[#fde047] disabled:bg-zinc-200"
          >
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
              <div>{toppingsPrice.toFixed(2)} ₺</div>
            </div>
            <div className="flex justify-between font-Barlow font-bold text-red">
              <div>Toplam</div>
              <div>{totalPrice.toFixed(2)} ₺</div>
            </div>
          </div>
          {/* <Link to="/success/:id"> */}
          <button
            // type="submit" // Default type: submit
            disabled={buttonDisabled}
            className="font-Barlow font-bold w-full py-4 px-8 border bg-yellow rounded-md hover:bg-[#fde047] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 disabled:bg-zinc-200"
          >
            SİPARİŞ VER
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="h-32"></div>
    </form>
  );
};

export default Form;
