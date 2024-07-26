import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import css from "./heroSection.module.css";

function HeroSection() {
  return (
    <div className={css.container}>
      <Navbar />
      <Section />
    </div>
  );
}

export default HeroSection;
