import React from "react";
import Frame from "../../Images/Frame.png";
import emoji from "../../Images/Group108.png";
import basket from "../../Images/ion_basket.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <header className="container">
        <div className="logoTextDiv">
          <div className="logoDiv">
            <img src={Frame} alt="" className="imgDiv" />
          </div>
          <div className="logoNameDiv">
            <h3>Pop Rock Crystal</h3>
          </div>
        </div>
        <div className="navDiv">
          <div className="navItem">
            <ul className="items">
              <li className="item">
                <a href="">Home</a>
              </li>
              <li className="item">
                <a href="">Shop</a>
              </li>
              <li className="item">
                <a href="">About Us</a>
              </li>
              <li className="item">
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="navBasEmo">
            <div className="emojiDiv">
                <img src={emoji} alt="" className="emojiImg" />
            </div>
            <div className="basketDiv">
                <img src={basket} alt="" className="basket" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
