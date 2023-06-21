import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import tick from "../../assets/tick.png";
import rarrow from "../../assets/rightArrow.png";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>OUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan-card" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              {plan.features.map((feature, i) => {
                return (
                  <div className="feature-list" key={i}>
                    <img src={tick} alt="" />
                    <span>{feature}</span>
                  </div>
                );
              })}
              <div className="benefits">
                <span>see more benefits</span>
                <img src={rarrow} className="rarrow" alt="" />
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
