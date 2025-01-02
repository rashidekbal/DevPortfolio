import React, { useEffect, useState } from "react";
import style from "../stylings/Header.module.css";
import { LuSunMoon } from "react-icons/lu";
import { IoMdClose, IoMdMenu } from "react-icons/io";

function Header({ isDark, changeIsDark }) {
  const [panelVisibility, changePanelVisibility] = useState(false);
  const [width, setWidth] = useState();
  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 450) {
      setWidth(width);
    } else {
      changePanelVisibility("unset");
    }
  }, []);
  function linkClickHandler() {
    if (width <= 450) {
      changePanelVisibility(!panelVisibility);
    }
  }
  return (
    <div className={isDark ? style.HeaderMainDark : style.HeaderMainLight}>
      <div className={style.InnerHeader}>
        <div className={style.subDiv}>
          <p className={style.logo}>{"<Ss />"}</p>
          <div
            className={style.icon}
            onClick={() => {
              changePanelVisibility(!panelVisibility);
            }}
          >
            {!panelVisibility ? (
              <IoMdMenu className={isDark ? style.darkLogo : style.lightLogo} />
            ) : (
              <IoMdClose
                className={isDark ? style.darkLogo : style.lightLogo}
              />
            )}
          </div>
        </div>
        <div
          className={style.subDiv}
          id={
            panelVisibility === false
              ? style.hidePanel
              : panelVisibility === true && style.visiblepanel
          }
        >
          <ul className={style.navList}>
            <li>
              <a
                href="#about"
                className={style.link}
                onClick={() => {
                  linkClickHandler();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={style.link}
                onClick={() => {
                  linkClickHandler();
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={style.link}
                onClick={() => {
                  linkClickHandler();
                }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={style.link}
                onClick={() => {
                  linkClickHandler();
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <span
                className={style.phoneView}
                onClick={() => {
                  changeIsDark(!isDark);
                }}
              >
                Switch Theme
              </span>
              <span className={isDark ? style.darkModeSet : style.lightModeSet}>
                <LuSunMoon
                  onClick={() => {
                    changeIsDark(!isDark);
                  }}
                />
              </span>
            </li>
            <li className={isDark ? style.cvDark : style.cvLight}>
              <a
                href="#download"
                className={style.link}
                onClick={() => {
                  linkClickHandler();
                }}
              >
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
