import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div>
      <div className="navbar">
        <div className="Nav-logo">
          <img src={logo} alt="shopping logo" />
          <h2> SHOPPING</h2>
        </div>
        <div className="nav-list">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <Link style={{ textDecorationLine: "none" }} to="/">
              Shop
            </Link>
            {menu === "Shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            {" "}
            <Link style={{ textDecorationLine: "none" }} to="/MEN">
              MEN
            </Link>
            {menu === "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link style={{ textDecorationLine: "none" }} to="/WOMEN">
              WOMEN
            </Link>
            {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link style={{ textDecorationLine: "none" }} to="/KIDS">
              KIDS
            </Link>
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </div>
        <div className="nav-login-cart">
          <Link to="/.Login">
            <button>Login</button>
          </Link>
          <Link to="/.cart">
            <img src={cart} alt="" />
          </Link>
          <div className="chart-count">0</div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
