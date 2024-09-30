import React from "react";
import "./Product.css";
import Polygon from "../../Images/Polygon5.png";
import shell from "../../Images/Shell.png";

const items = [1, 1, 1, 1, 1, 1, 1, 1];
const Product = () => {
  return (
    <div className="productMainContainer">
      <h1 className="allProduct">All product</h1>
      <div className="ProductsContainer">
        <div className="porductFilterContainer">
          <div className="textContainer">
            <span id="span">Filter:</span>
            <span>All Products</span>
            <img src={Polygon} alt="" />
          </div>

          <div className="textContainer">
            <span id="span">Sort:</span>
            <span>Best Selling</span>
            <img src={Polygon} alt="" />
          </div>
        </div>
        <div className="product">
          {items.map((item) => (
            <d
              <div className="produciv className="productItem">tImag">
                <img className="shelimg" src={shell} alt="" />
              </div>
              <div className="productDec">
                <h1>
                  Crystal Agate Phone Grip <span>18.99$</span>
                </h1>
              </div>
              <div className="proButton">
                <button type="submit">BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
