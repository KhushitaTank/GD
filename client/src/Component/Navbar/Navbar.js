import React, { useEffect, useState } from "react";
import css from "./navbar.module.css";
import burgerSVG from "../../assests/SVG/burger.svg";
import Modal from "../Modal/Modal";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(show);
  }, [show]);
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
              onClick={() => {
                setShow(false);
              }}>
              About
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}>
              Services
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}>
              Our Work
            </button>
            <button
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

// className={css.linksContainer
{
  /* <Modal show={show} setShow={setShow} className={css.modalOverride}>
<div className={css.deletePopupWrapper}>
  <h2 className={css.title}>Are you sure you want to Delete?</h2>
  <div className={css.buttonWrapper}>
    <button className={css.warningButton} onClick={() => deleteTask()}>
      Yes, Delete
    </button>
    <button className={css.cancleButton} onClick={() => setShow(false)}>
      Cancel
    </button>
  </div>
</div>
</Modal> */
}
