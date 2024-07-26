import React from "react";
import TestimonialsSvg from "../../assests/SVG/Testimonials1.svg";
import Testimonials2Svg from "../../assests/SVG/Testimonials2.svg";
import Testimonials3Svg from "../../assests/SVG/Testimonials3.svg";
import Testimonials4Svg from "../../assests/SVG/Testimonials4.svg";
import css from "./testimonials.module.css";

function Testimonials() {
  return (
    <div className={css.container}>
      <div className={css.personDetails}>
        <div className={css.desktopMobileView}>
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
        </div>
        <div className={css.tabletpersonDetails}>
          <img
            className={css.Testimonials1}
            src={Testimonials3Svg}
            alt="testimonials"
          />
          <img
            className={css.Testimonials2}
            src={Testimonials4Svg}
            alt="testimonials"
          />
        </div>
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
      </div>
      <button>Learn More</button>
    </div>
  );
}

export default Testimonials;
