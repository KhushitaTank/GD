import React from "react";
import facebookSVG from "../../assests/SVG/Facebook.svg";
import InstagramSVG from "../../assests/SVG/Instagram.svg";
import css from "./footer.module.css";

function Footer() {
  return (
    <div className={css.container}>
      <div className={css.listContainer}>
        <ul>
          <lh>Quick Links</lh>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul>
          <lh>Course</lh>
          <li>Log In</li>
          <li>Download</li>
          <li>All Courses</li>
        </ul>
        <ul>
          <lh>Contact Us</lh>
          <li>contact@email.com</li>
          <ul className={css.applist}>
            <li>
              <img src={facebookSVG} alt="Facebook" />
            </li>
            <li>
              <img src={InstagramSVG} alt="Instragram" />
            </li>
          </ul>
          <li>
            <div className={css.inputContainer}>
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </li>
        </ul>
      </div>
      <p className={css.info}>This website is developed by GTCoding © 2021</p>
    </div>
  );
}

export default Footer;
