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
          <div>
            <img src={jsLogo} alt="javascript" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>JavaScript</p>
          </div>
          <div>
            <img src={typescript} alt="TypeScript" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>TypeScript</p>
          </div>

          <div>
            <img src={react} alt="React" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>React</p>
          </div>
          <div>
            <img src={next} alt="Next.js" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Next.js</p>
          </div>
          <div>
            <img src={node} alt="Node.js" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Node.js</p>
          </div>
          <div>
            <img src={!isDark ? expressDark : express} alt="Express.js" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Express.js</p>
          </div>
          <div>
            <img src={nest} alt="Nest.js" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Nest.js</p>
          </div>
          <div>
            {" "}
            <img src={!isDark ? socketDark : socket} alt="Socket.io" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Socket.io</p>
          </div>
        </div>
        <div className={style.subgrid}>
          <div>
            {" "}
            <img src={postgresql} alt="Postgresql" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Postgresql</p>
          </div>
          <div>
            {" "}
            <img src={mongo} alt="MongoDB" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>MongoDB</p>
          </div>
          <div>
            {" "}
            <img src={sass} alt="Sass/scss" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Sass/Skillscss</p>
          </div>
          <div>
            {" "}
            <img src={tailwind} alt="TailWind" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>TailWindsCss</p>
          </div>
          <div>
            {" "}
            <img src={figma} alt="Figma" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Figma</p>
          </div>
          <div>
            {" "}
            <img src={cypress} alt="Cypress" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Cypress</p>
          </div>
          <div>
            {" "}
            <img src={storybook} alt="Storybook" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Storybook</p>
          </div>
          <div>
            {" "}
            <img src={git} alt="Git" />
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
