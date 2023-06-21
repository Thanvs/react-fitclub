import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth < 769 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      ) : (
        <ul className="menu-lists">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#programs" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
          </li>
          <li>
            <a href="#reasons" onClick={() => setMenuOpen(false)}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#plans" onClick={() => setMenuOpen(false)}>
              Plans
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
