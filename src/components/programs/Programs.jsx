import React from "react";
import "./programs.css";
import join from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/*programs-heading*/}
      <div className="programs-heading">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      {/*programs-categories*/}
      <div className="programs-categories">
        {programsData.map((data, i) => {
          return (
            <div className="programs-category-card" key={i}>
              {data.image}
              <span>{data.heading}</span>
              <span>{data.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={join} alt="join" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
