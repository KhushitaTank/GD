import React, { useEffect, useState } from "react";
import css from "./navbar.module.css";
import burgerSVG from "../../assests/SVG/burger.svg";
import Modal from "../Modal/Modal";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className={css.container}>
      <h1>GD.</h1>
      <button
        className={css.burgerButton}
        onClick={() => {
          return setShow(!show);
        }}>
        <img src={burgerSVG} alt="Burger Icon" />
      </button>
      {show ? (
        <Modal show={show} setShow={setShow} className={css.linksContainer}>
          <button
            className={css.closebutton}
            onClick={() => {
              setShow(false);
            }}>
            X
          </button>
          <nav>
            <button
              className={css.hover}
              onClick={() => {
                setShow(false);
              }}>
              About
            </button>
            <button
              className={css.hover}
              onClick={() => {
                setShow(false);
              }}>
              Services
            </button>
            <button
              className={css.hover}
              onClick={() => {
                setShow(false);
              }}>
              Our Work
            </button>
            <button
              className={css.hover}
              onClick={() => {
                setShow(false);
              }}>
              Enroll Now
            </button>
          </nav>
        </Modal>
      ) : (
        <nav className={css.visibleLinkContainer}>
          <button>About</button>
          <button>Services</button>
          <button>Our Work</button>
          <button>Enroll Now</button>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
