import React, { useEffect } from "react";
import style from "./css/ProjectCard.module.css";
function ProjectCard({ isDark, data }) {
  useEffect(() => {
    console.log(data.links.frontend);
  }, [data]);
  return (
    <div
      className={`${style.mainContainer} ${
        isDark ? style.mainContainerDark : style.mainContainerLight
      }`}
    >
      <div className={`${style.section}`}>
        <img src={data.image} alt="Project img" style={{ maxHeight: "100%" }} />
      </div>
      <div
        className={`${style.section} 
         `}
      >
        <h3 className={style.prName}>{data.name}</h3>
        <p className={style.info}>{data.info}<br/> <a href={data.link}>Use Now!</a></p>
        
        <div className={style.cardsHolder}>
          {data.techUsed.map((item) => (
            <span className={style.cards}>{item}</span>
          ))}
        </div>
        <div className={style.linkHolder}>
          <a href={data.links.client} style={{ marginBottom: "10px" }}>
            client repo Link
          </a>
        </div>
        {data.links.server != undefined && (
          <div className={style.linkHolder}>
            <a href={data.links.server} target="_self">
              server repo Link
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
