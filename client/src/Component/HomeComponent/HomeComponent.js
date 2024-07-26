import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Testimonials from "../Testimonials/Testimonials";
import Courses from "../Courses/Courses";
import AppSection from "../AppSection/AppSection";
import Footer from "../Footer/Footer";

function HomeComponent() {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <Courses />
      <AppSection />
      <Footer />
    </div>
  );
}

export default HomeComponent;
