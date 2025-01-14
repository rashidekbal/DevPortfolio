import React from "react";
import style from "../stylings/Experience.module.css";
import ProjectCard from "./projectCard/ProjectCard";
function ExperiencePage({ isDark }) {
  let prdetails = [
    {
      name: "7vbet lottery",
      image: "https://m.media-amazon.com/images/I/A170chtPSXL._SL500_.png",
      info: "Developed a robust and user-friendly online lottery platform, 7vBet, utilizing the MERN stack. The project includes features such as secure user authentication, wallet integration, lottery ticket purchasing, real-time updates, and a responsive UI. Implemented a backend server with Node.js and Express.js for seamless API handling and database operations, while the frontend was built with React.js for an interactive user experience.",
      keyFeatures: [
        "User Registration/Login: Secure authentication and user management.",
        "Wallet Management: Real-time wallet balance updates and transaction logs.",
        "Lottery System: Automated number generation and winner announcement.",
        "Responsive Design: Optimized for both desktop and mobile devices.
        To use it use demo account userId:9123481953, pass:-Rashid786",
      ],
      techUsed: [
        "MySQL",
        "Express.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "Sass",
      ],
      link:"https://apkking.xyz",
    },
    {
      name: "UnSplash Wallpaper",
      image:
        "https://s3-alpha.figma.com/hub/file/4340579108/e1f2a8ea-a3d1-4c04-98df-f5ca6e12741c-cover.png",
      info: "Developed a sleek and interactive mobile application for browsing and downloading high-quality wallpapers. The app was built using React Native for cross-platform compatibility and integrated with the Unsplash API to fetch a vast collection of wallpapers dynamically. Firebase was utilized for user authentication and real-time database storage.",

      techUsed: [
        "MySQL",
        "Express.js",
        "ReactNative.js",
        "Node.js",
        "TypeScript",
      ],
      link:"apkking.xyz"
    },
  ];
  return (
    <div
      className={`${style.MainConatiner} ${
        isDark ? style.MainConatinerDark : style.MainConatinerLight
      }`}
      id="work"
    >
      <p className={style.pageHeading}>work</p>
      {prdetails.map((item) => (
        <ProjectCard isDark={isDark} data={item} />
      ))}
    </div>
  );
}

export default ExperiencePage;
