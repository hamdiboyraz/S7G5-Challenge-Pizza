import axios from "axios";

export const postOrder = (orderForm) => {
  axios.post("https://reqres.in/api/orders", orderForm).then((res) => {
    localStorage.setItem("is-authenticated", "true");
    sessionStorage.setItem("is-authenticated", "true");
    console.log("Post Request", res.data);
  });
};
