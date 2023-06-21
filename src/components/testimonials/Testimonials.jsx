import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rarrow from "../../assets/rightArrow.png";
import larrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 2 };
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>Say About Us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[selected].name} -{" "}
          </span>
          <span>{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={larrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rarrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
