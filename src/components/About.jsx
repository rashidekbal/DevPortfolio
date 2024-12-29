import React from "react";
import style from "../stylings/About.module.css";
function About({ isDark }) {
  return (
    <div
      id="about"
      className={
        isDark ? style.DarkAboutConatinerMain : style.LightAboutConatinerMain
      }
    >
      <p className={isDark ? style.pageHeaderDark : style.pageHeaderLight}>
        About me
      </p>
    </div>
  );
}

export default About;
