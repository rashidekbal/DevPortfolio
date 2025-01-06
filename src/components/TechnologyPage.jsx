import React from "react";
import style from "../stylings/Techonlogy.module.css";
import jsLogo from "../icons/icon-javscript.svg";
import cypress from "../icons/icon-cypress.svg";
import react from "../icons/icon-react.svg";
import node from "../icons/icon-nodejs.svg";
import express from "../icons/icon-express.svg";
import figma from "../icons/icon-figma.svg";
import git from "../icons/icon-git.svg";
import mongo from "../icons/icon-mongodb.svg";
import nest from "../icons/icon-nest.svg";
import postgresql from "../icons/icon-postgresql.svg";
import sass from "../icons/icon-sass.svg";
import socket from "../icons/icon-socket.svg";
import storybook from "../icons/icon-storybook.svg";
import tailwind from "../icons/icon-tailwindcss.svg";
import typescript from "../icons/icon-typescript.svg";
import next from "../icons/icon-nextjs.svg";
import socketDark from "../icons/socketDark.svg";
import expressDark from "../icons/expressDark.svg";
function TechnologyPage({ isDark }) {
  return (
    <div className={isDark ? style.mainHolderDark : style.mainHolderLight}>
      <p className={style.MainInfoBar}>Skills</p>
      <div>
        <p className={style.skillsInfo}>
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className={style.grid}>
        <div className={style.subgrid}>
          <div className={style.inGrid}>
            <div>
              <img src={jsLogo} alt="javascript" />
              <p className={style.techName}>JavaScript</p>
            </div>
            <div>
              <img src={typescript} alt="TypeScript" />
              <p className={style.techName}>TypeScript</p>
            </div>

            <div>
              <img src={react} alt="React" />
              <p className={style.techName}>React</p>
            </div>
            <div>
              <img src={next} alt="Next.js" />
              <p className={style.techName}>Next.js</p>
            </div>
          </div>
          <div className={style.inGrid}>
            {" "}
            <div>
              <img src={node} alt="Node.js" />
              <p className={style.techName}>Node.js</p>
            </div>
            <div>
              <img src={!isDark ? expressDark : express} alt="Express.js" />
              <p className={style.techName}>Express.js</p>
            </div>
            <div>
              <img src={nest} alt="Nest.js" />
              <p className={style.techName}>Nest.js</p>
            </div>
            <div>
              {" "}
              <img src={!isDark ? socketDark : socket} alt="Socket.io" />
              <p className={style.techName}>Socket.io</p>
            </div>
          </div>
        </div>
        <div className={style.subgrid}>
          <div className={style.inGrid}>
            {" "}
            <div>
              {" "}
              <img src={postgresql} alt="Postgresql" />
              <p className={style.techName}>Postgresql</p>
            </div>
            <div>
              {" "}
              <img src={mongo} alt="MongoDB" />
              <p className={style.techName}>MongoDB</p>
            </div>
            <div>
              {" "}
              <img src={sass} alt="Sass/scss" />
              <p className={style.techName}>Sass/Skillscss</p>
            </div>
            <div>
              {" "}
              <img src={tailwind} alt="TailWind" />
              <p className={style.techName}>TailWindsCss</p>
            </div>
          </div>
          <div className={style.inGrid}>
            {" "}
            <div>
              {" "}
              <img src={figma} alt="Figma" />
              <p className={style.techName}>Figma</p>
            </div>
            <div>
              {" "}
              <img src={cypress} alt="Cypress" />
              <p className={style.techName}>Cypress</p>
            </div>
            <div>
              {" "}
              <img src={storybook} alt="Storybook" />
              <p className={style.techName}>Storybook</p>
            </div>
            <div>
              {" "}
              <img src={git} alt="Git" />
              <p className={style.techName}>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
