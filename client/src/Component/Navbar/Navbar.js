import React, { useState } from "react";
import css from "./navbar.module.css";
import burgerSVG from "../../assests/SVG/burger.svg";

function Navbar() {
  const [state, setState] = useState(false);
  return (
    <div className={css.container}>
      <h1>GD.</h1>
      <button className={css.burgerButton} onClick={() => setState(!state)}>
        <img src={burgerSVG} alt="Burger Icon" />
      </button>
      <nav className={state ? css.linksContainer : css.visibleLinkContainer}>
        <button>About</button>
        <button>Services</button>
        <button>Our Work</button>
        <button>Enroll Now</button>
      </nav>
    </div>
  );
}

export default Navbar;
