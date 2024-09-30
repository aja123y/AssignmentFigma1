import React from "react";
import Frame5 from "../../Images/Frame5.png";
import Vector from "../../Images/Vector1.png";
import Group113 from "../../Images/Group113.png";
import Shell from "../../Images/Shell.png";
import mouse from "../../Images/mousee.png";
import "./CarouselSection.css";

const CarouselSection = () => {
  return (
    <div className="carouselMainDiv">
      <div className="carouselImag">
        <img src={Frame5} alt="" />
        <div className="svgImg">
          <img src={Vector} alt="" />
        </div>
      </div>
      <div className="mainCarousel">
        <div className="leftContainer">
          <div className="carouselText">
            <h1>Welcome to</h1>
            <h2>Pop Rock Crystal Shop!</h2>
          </div>
          <div className="carouselDes">
            <p>
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
          </div>
          <div className="carouselButtom">
            <button type="submit">SHOP NOW</button>
            <a href="#">about us</a>
          </div>
        </div>
        <div className="rightContainer">
          <div className="carouseSlideImg">
            <p>New lot</p>
            <div className="rightCarouselImg">
              <div className="ShellImg">
                <img src={Shell} alt="" />
              </div>
              <hr />
              <p className="pp">Crystal Agate Phone Grip - 18.99$</p>
            </div>
          </div>
          <div className="slideCounter">
            <img src={Group113} alt="" />
          </div>
        </div>
        {/* ********************* */}
        <div className="uiMouseContainer">
          <div className="uiMouseImg">
            <img src={mouse} alt="" />
          </div>
          <span>sroll down</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
