import React from "react";
import "./hero.css";
import Header from "../header/Header";
import heroImg from "../../assets/hero_image.png";
import heroBackImg from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="hero" id="hero">
      {/*hero-left*/}
      <div className="left-h">
        {/*header section*/}
        <Header />
        {/*best-ad*/}
        <div className="best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/*hero-title*/}
        <div className="hero-title">
          <div>
            <span className="stroke-text">SHAPE</span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
        </div>
        {/*hero-content*/}
        <div className="hero-content">
          <div className="hero-desc">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div>
                <span>+ </span>
                <span>120</span>
              </div>
              <span>EXPERT COACHES</span>
            </div>
            <div className="hero-stat">
              <div>
                <span>+ </span>
                <span>1000</span>
              </div>
              <span>MEMBERS JOINED</span>
            </div>
            <div className="hero-stat">
              <div>
                <span>+ </span>
                <span>50</span>
              </div>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
        </div>
        {/*hero-buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/*hero-right*/}
      <div className="right-h">
        <button className="btn">Join now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={heroImg} alt="hero" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={heroBackImg}
          alt="heroBack"
          className="heroBack-img"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <br />
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
