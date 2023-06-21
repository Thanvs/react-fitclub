import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import gb from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkIn from "../../assets/linkedin.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={gb} alt="" />
          <img src={insta} alt="" />
          <img src={linkIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
