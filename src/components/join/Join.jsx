import React from "react";
import "./join.css";
const Join = () => {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To </span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Body </span>
          <span className="stroke-text">With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <div className="email-container">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn-j">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
