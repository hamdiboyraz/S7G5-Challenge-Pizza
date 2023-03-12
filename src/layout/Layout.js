import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Order from "../views/Order";
import Success from "../views/Success";

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="body">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza" element={<Order />} />
            <Route path="/success/:id" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      {/* <footer>FOOTER</footer> */}
    </div>
  );
};

export default Layout;
