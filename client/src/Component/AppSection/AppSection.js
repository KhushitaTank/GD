import React from "react";
import GoogleStoreSVG from "../../assests/SVG/playstore.svg";
import appStoreSVG from "../../assests/SVG/googleStore.svg";
import css from "./app.module.css";

function AppSection() {
  return (
    <div className={css.container}>
      <h1>Get our App</h1>
      <p>You can use our App for better experience on smartphones</p>
      <div className={css.AppButtonContainer}>
        <button>
          <img src={appStoreSVG} alt="App Store" />
          <p>App Store</p>
        </button>
        <button>
          <img src={GoogleStoreSVG} alt="Google play" />
          <p>Google Play</p>
        </button>
      </div>
    </div>
  );
}

export default AppSection;
