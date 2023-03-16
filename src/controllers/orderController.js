import axios from "axios";

export const postOrder = (orderForm) => {
  axios.post("https://reqres.in/api/orders", orderForm).then((res) => {
    localStorage.setItem("is-authenticated", "true");
    sessionStorage.setItem("is-authenticated", "true");
    sessionStorage.setItem("data", JSON.stringify(orderForm));

    console.log("Post Request", res.data);
    console.log("hi", res.data.id);

    return res.data.id;
  });
};
