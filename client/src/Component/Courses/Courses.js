import React from "react";
import CoursesSVG from "../../assests/SVG/Courses.svg";
import Courses2SVG from "../../assests/SVG/Courses2.svg";
import css from "./courses.module.css";

function Courses() {
  return (
    <div className={css.container}>
      <h1>Our Courses</h1>
      <div className={css.coursesDetail}>
        <img src={CoursesSVG} alt="Game Design Essentials" />
        <img src={Courses2SVG} alt="Unity Game Engine Fundamentals" />
      </div>
      <button>All Courses</button>
    </div>
  );
}

export default Courses;
