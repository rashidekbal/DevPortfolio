import React from "react";
import style from "../stylings/Header.module.css";
import { LuSunMoon } from "react-icons/lu";
function Header({ isDark, changeIsDark }) {
  return (
    <div className={isDark ? style.HeaderMainDark : style.HeaderMainLight}>
      <div className={style.InnerHeader}>
        <div className={style.subDiv}>
          <p className={style.logo}>{"<SS />"}</p>
        </div>
        <div className={style.subDiv}>
          <ul className={style.navList}>
            <li>
              <a href="#about" className={style.link}>
                About
              </a>
            </li>
            <li>
              <a href="#work" className={style.link}>
                Work
              </a>
            </li>
            <li>
              <a href="#testimonials" className={style.link}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contacts" className={style.link}>
                Contact
              </a>
            </li>
            <li>
              <span className={style.phoneView}>Switch Theme</span>
              <span className={isDark ? style.darkModeSet : style.lightModeSet}>
                <LuSunMoon
                  onClick={() => {
                    changeIsDark(!isDark);
                  }}
                />
              </span>
            </li>
            <li className={isDark ? style.cvDark : style.cvLight}>
              <a href="#download" className={style.link}>
                <span> Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
