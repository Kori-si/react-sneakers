import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.svg";
import user from "../assets/img/user.svg";
import heart from "../assets/img/heart.svg";


export const Header = (props) => {
  const { totalPrice } = useCart();


  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={logo} alt="logo" />

          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src={cart} alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src={heart} alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
          <img width={18} height={18} src={user} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
};
