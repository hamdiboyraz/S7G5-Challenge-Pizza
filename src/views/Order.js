import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/logo.svg";
import Form from "../components/Form";
import { pizzas, toppings } from "../data/data";

const Order = () => {
  // console.log(toppings);
  // console.log(pizzas[0]);

  const pizzaDetails = pizzas[0];

  const pizzaPrice = pizzaDetails.price;
  const [counter, setCounter] = useState(1);
  const [pizzaSizePrice, setPizzaSizePrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toppingList, setToppingList] = useState(toppings);

  const decrease = () => {
    setCounter(counter - 1);
  };
  const increase = () => {
    setCounter(counter + 1);
  };

  const toppingsHandler = (item) => {
    setToppingList(
      toppingList.map((el) =>
        item.name === el.name ? { ...item, isChecked: !item.isChecked } : el
      )
    );
  };

  const calcToppingsPrice = () => {
    setToppingsPrice(
      toppingList
        .filter((el) => el.isChecked === true)
        .reduce((acc, val) => acc + val.price, 0) * counter
    );
  };

  const calcTotalPrice = () => {
    setTotalPrice(pizzaPrice * counter + toppingsPrice);
  };

  // useEffect(() => {
  //   calcToppingsPrice();
  //   calcTotalPrice();
  // }, [toppingList, counter, increase, decrease]); // increase, decrease

  useEffect(() => {
    calcTotalPrice();
  }, [toppingsPrice, counter]);

  useEffect(() => {
    calcToppingsPrice();
  }, [toppingList, counter]);

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
        <h2 className=" text-3xl mb-4">{pizzaDetails.name}</h2>
        <div className="grid grid-cols-4 gap-4 mb-4 items-center">
          <p className=" text-4xl font-extrabold col-span-2">
            {pizzaDetails.price} ₺
          </p>
          <p className="grid-cols-{3} justify-self-end">
            {pizzaDetails.rating}
          </p>
          <p className=" grid-cols-{4} justify-self-end">
            ({pizzaDetails.comments})
          </p>
        </div>
        <p className=" mb-8">
          <strong>
            Pizza always makes a bad day feel better, and there’s nothing nicer
            than a perfect slice of margherita pizza
          </strong>{" "}
          <br />
          <br />
          Pizza margherita, as the Italians call it, is a simple pizza hailing
          from Naples. When done right, margherita pizza features a bubbly
          crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a
          drizzle of olive oil, and a sprinkle of salt. That is all.
        </p>
        <Form
          pizzaDetails={pizzaDetails}
          toppingList={toppingList}
          counter={counter}
          increase={increase}
          decrease={decrease}
          toppingsHandler={toppingsHandler}
          toppingsPrice={toppingsPrice}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default Order;
