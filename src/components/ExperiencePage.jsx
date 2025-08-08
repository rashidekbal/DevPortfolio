import React from "react";
import style from "../stylings/Experience.module.css";
import ProjectCard from "./projectCard/ProjectCard";
function ExperiencePage({ isDark }) {
  let prdetails = [
    {
      name: "7vbet lottery",
      image: "https://m.media-amazon.com/images/I/A170chtPSXL._SL500_.png",
      info: "Developed a robust and user-friendly online lottery platform, 7vBet, utilizing the MERN stack. The project includes features such as secure user authentication, wallet integration, lottery ticket purchasing, real-time updates, and a responsive UI. Implemented a backend server with Node.js and Express.js for seamless API handling and database operations, while the frontend was built with React.js for an interactive user experience. To use it use demo account userId:9123481953, pass:-Rashid786",
      keyFeatures: [
        "User Registration/Login: Secure authentication and user management.",
        "Wallet Management: Real-time wallet balance updates and transaction logs.",
        "Lottery System: Automated number generation and winner announcement.",
        "Responsive Design: Optimized for both desktop and mobile devices",
      ],
      techUsed: ["MySQL", "Express.js", "React.js", "Node.js", "Jwt", "Bcrypt"],
      links: {
        client: "https://github.com/rashidekbal/7vbet-v2.git",
        server: "https://github.com/rashidekbal/7vbetServer.git",
      },
    },
    {
      name: "Wallify Wallpaper",
      image:
        "https://s3-alpha.figma.com/hub/file/4340579108/e1f2a8ea-a3d1-4c04-98df-f5ca6e12741c-cover.png",
      info: "Developed a sleek and interactive mobile application for browsing and downloading high-quality wallpapers. The app was built using React Native for cross-platform compatibility and integrated with the Unsplash API to fetch a vast collection of wallpapers dynamically. Firebase was utilized for user authentication and real-time database storage.",

      techUsed: ["MySQL", "Express.js", "Native Android", "Node.js"],
      links: {
        client: "https://github.com/rashidekbal/Wallify.git",
        server: "https://github.com/rashidekbal/Wallpaper_Server_Temp.git",
      },
    },

    {
      name: "Threadly",
      image:
        "https://github.com/rashidekbal/threadly/blob/main/app/src/main/ic_launcher-playstore.png?raw=true",
      info: "Threadly is your all-in-one social space — post reels, share pictures, express thoughts, and chat with ease. A smooth, scrollable feed where stories come alive through visuals and real-time conversations. Whether you're vibing through videos or connecting through chats, Threadly keeps it engaging, fast, and refreshingly simple. No noise. Just you, your people, and your moments ",

      techUsed: [
        "Node",
        "Express.js",
        "Native android",
        "Jwt",
        "Exoplayer",
        "CameraX",
        "Multer",
        "Cloudinary",
        "and many more",
      ],
      links: {
        client: "https://github.com/rashidekbal/threadly.git",
        server: "https://github.com/rashidekbal/threadlyServer.git",
      },
    },
    {
      name: "WA+ status Saver",
      image:
        "https://github.com/rashidekbal/whatsapp-status-downloader/blob/main/app/src/main/ic_launcher-playstore.png?raw=true",
      info: "WA+ Status Saver is the simplest way to save WhatsApp statuses — photos and videos — directly to your gallery. No ads, no clutter, just one-tap saving. View once, save forever. That’s it.",

      techUsed: ["Native android", "mediaStore api"],
      links: {
        client: "https://github.com/rashidekbal/whatsapp-status-downloader.git",
      },
    },
  ];
  return (
    <div
      className={`${style.MainConatiner} ${
        isDark ? style.MainConatinerDark : style.MainConatinerLight
      }`}
      id="project"
    >
      <p className={style.pageHeading}>Projects</p>
      {prdetails.map((item) => (
        <ProjectCard isDark={isDark} data={item} />
      ))}
    </div>
  );
}

export default ExperiencePage;
