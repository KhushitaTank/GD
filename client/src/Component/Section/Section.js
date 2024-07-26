import React from "react";
import altLogo from "../../assests/SVG/pencileAlt.svg";
import starSvg from "../../assests/SVG/emojiStar.svg";
import heroPng from "../../assests/SVG/hero.svg";
import css from "./section.module.css";

function Section() {
  return (
    <div className={css.container}>
      <section className={css.descriptionContainer}>
        <h1>Learn the art of Game Dev</h1>
        <p>
          This is a comprehensive course on Game Development. You will learn
          everything from generating an idea to publishing your games to
          different platforms.
        </p>
        <button>
          <img src={altLogo} alt="" />
          Enroll Now
        </button>
      </section>
      <section className={css.ratingContainer}>
        <div className={css.studentEnrolledContainer}>
          <h1>32K</h1>
          <p>Students Enrolled</p>
        </div>

        <div className={css.overallRatingContainer}>
          <h1>
            4.7
            <img src={starSvg} alt="Star emoji" />
          </h1>
          <p>Overall Rating</p>
        </div>
      </section>
      <section className={css.heroImage}>
        <img src={heroPng} alt="student Image" />
      </section>
    </div>
  );
}

export default Section;
