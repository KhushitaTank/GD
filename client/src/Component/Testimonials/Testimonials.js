import React from "react";
import TestimonialsSvg from "../../assests/SVG/Testimonials1.svg";
import Testimonials2Svg from "../../assests/SVG/Testimonials2.svg";
import css from "./testimonials.module.css";

function Testimonials() {
  return (
    <div className={css.container}>
      <div className={css.personDetails}>
        <img
          className={css.Testimonials1}
          src={TestimonialsSvg}
          alt="testimonials"
        />
        <img
          className={css.Testimonials2}
          src={Testimonials2Svg}
          alt="testimonials"
        />
        <div className={css.line}></div>
      </div>
      <div className={css.infoDetailsContainer}>
        <h1>What our students say</h1>
        <p className={css.infoParagraphs}>
          All students get access to all the videos and also the source code of
          the projects.
        </p>
        <p>
          You will also have access to a private Discord channel where you can
          discuss your doubts.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Testimonials;
