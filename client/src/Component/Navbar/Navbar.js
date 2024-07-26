import React from "react";
import css from "./navbar.module.css";

function Navbar() {
  return (
    <div className={css.container}>
      <h1>GD.</h1>
      <nav className={css.linksContainer}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Our Work</a>
        <a href="#">Enroll Now</a>
      </nav>
    </div>
  );
}

export default Navbar;
