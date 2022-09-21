import React from "react";
import Search from "./Header/Search";
import Collection from "./Header/Collection";
import User from "./Header/User.js";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          GoDevShop
        </span>
        <Collection />
        <Search />

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
