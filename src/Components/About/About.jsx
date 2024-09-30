import React from "react";
import "./About.css";
import Frame from "../../Images/Frame5.png";
import Vector2 from "../../Images/Vector2.png";
import Shell from "../../Images/Shell.png";
import Ellipse from "../../Images/Ellipse.png";

const About = () => {
  return (
    <div className="aboutMainContainer">
      <div className="aboutMain">
        {/* Images of Background */}
        <div className="aboutBackImg">
          <img className="aboutInsideImg" src={Frame} alt="" />
          <div className="aboutOutImage">
            <img src={Vector2} alt="" />
          </div>
        </div>
        {/* View all Button */}
        <div className="aboutViewButton">
          <button>View All</button>
        </div>

        {/* flex box */}
        <div className="aboutFlexDiv">
          <div className="aboutLeftDiv">
            <div className="leftInfo">
              {" "}
              <h1>BEST PRICE</h1>
              <h3>Agate Phone Grip</h3>
              <div className="leftPrice">
                <p>44.50$</p>
                <h2>19.50$</h2>
              </div>
              <div className="leftDescri">
                <p>
                  These Pop Rock Crystal grip tops can be swapped with other
                  tops depending on your mood, outfit, nails, phone case,
                  holiday, etc.! Just gently squeeze the sides to remove and
                  swap out with another color or design!
                </p>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="aboutRightDiv">
            <div className="aboutThirdDiv"></div>
            <div className="aboutSecondDiv">
              <div className="aboutfirstDiv">
                <div className="aboutShellImg">
                  <img src={Shell} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="aboutFooter"></div>
    </div>
  );
};

export default About;
