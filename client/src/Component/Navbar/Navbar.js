import React from "react";
import css from "./navbar.module.css";

function Navbar() {
  return (
    <div className={css.container}>
      <h1>GD.</h1>
      <nav className={css.linksContainer}>
        <button>About</button>
        <button>Services</button>
        <button>Our Work</button>
        <button>Enroll Now</button>
      </nav>
    </div>
  );
}

export default Navbar;
