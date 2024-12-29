import React from "react";
import style from "../stylings/Me.module.css";
import { CiLocationOn } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import avatar from "../icons/avatar.jpg";
function Me({ isDark }) {
  return (
    <div className={isDark ? style.DarkMainDiv : style.LightMainDiv}>
      <div className={style.innerDiv}>
        <section className={style.section}>
          <h1 className={style.name}>
            Hi, I'm Rasid{" "}
            <span style={{ paddingBottom: "15px", marginLeft: "5px" }}>
              {" "}
              👋
            </span>
          </h1>
          <p className={isDark ? style.Darkinfo : style.Lightinfo}>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new
          </p>
          <div className={style.location}>
            <p>
              <span>
                <CiLocationOn style={{ margin: "0 4px 0 0" }} />
              </span>
              <span>Bihar, India</span>
            </p>
            <p>
              <span className={style.status}></span>
              <span>Available for new projects</span>
            </p>
          </div>
          <div className={style.location1}>
            <a href="https://github.com/rashidekbal" className={style.links}>
              <LuGithub className={style.social} />
            </a>
            <a href="https://github.com/rashidekbal" className={style.links}>
              <FiTwitter className={style.social} />
            </a>
            <a href="https://github.com/rashidekbal" className={style.links}>
              <FaInstagram className={style.social} />
            </a>
          </div>
        </section>
        <section className={style.section}>
          <div
            className={isDark ? style.imageHolderDark : style.imageHolderLight}
          >
            <img
              src={avatar}
              alt="avatar"
              className={isDark ? style.avatarDark : style.avatarLight}
            ></img>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Me;
