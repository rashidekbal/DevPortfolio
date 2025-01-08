import React from "react";
import style from "./css/ProjectCard.module.css";
function ProjectCard({ isDark, data }) {
  return (
    <div
      className={`${style.mainContainer} ${
        isDark ? style.mainContainerDark : style.mainContainerLight
      }`}
    >
      <div className={`${style.section}`}>
        <img src={data.image} alt="Project img" />
      </div>
      <div
        className={`${style.section} 
         `}
      >
        <h3 className={style.prName}>{data.name}</h3>
        <p className={style.info}>{data.info}</p>
        <div className={style.cardsHolder}>
          {data.techUsed.map((item) => (
            <span className={style.cards}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
