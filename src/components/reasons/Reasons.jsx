import React from "react";
import "./reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <div>
          <img src={image1} alt="" className="img1" />
        </div>
        <div>
          <img src={image2} alt="" className="img2" />
          <div>
            <img src={image3} alt="" className="img3" />
            <img src={image4} alt="" className="img4" />
          </div>
        </div>
      </div>
      <div className="right-r">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY </span>
          <span>CHOOSE US?</span>
        </div>
        <div className="reason-list">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span>OUR PARTNERS</span>
        <div className="partners">
          <img src={nike} alt="" />
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
