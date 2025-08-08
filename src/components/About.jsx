import React from "react";
import style from "../stylings/About.module.css";
import avatar from "../icons/bigavatar2.jpg";
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

      <div className={style.innerMain}>
        <div>
          <p className={style.AboutInfoHeader}>
            Curious about me? Here you have it:
          </p>
          <div>
            <p className={style.simpleText}>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
          </div>
          <div>
            <p className={style.simpleText}>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
          </div>
          <div>
            <p className={style.simpleText}>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
          </div>
          <div>
            <p className={style.simpleText}>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on{" "}
              <span>
                <a
                  href="https://github.com/rashidekbal"
                  style={{ all: "unset", borderBottom: "1px solid" }}
                >
                  Twitter
                </a>
              </span>{" "}
              where I share tech-related bites and build in public, or you can
              follow me on{" "}
              <span>
                <a
                  href="https://github.com/rashidekbal"
                  style={{ all: "unset", borderBottom: "1px solid" }}
                >
                  GitHub
                </a>
              </span>
              .
            </p>
          </div>
          <div>
            <p className={style.simpleText} style={{ margin: "25px 0" }}>
              Finally, some quick bits about me.
            </p>
            <ul className={style.list}>
              <div>
                <li>B.TECH in Computer Engineering</li>
                <li>Avid learner</li>
              </div>
              <div>
                <li>Full time freelancer</li>
                <li>Aspiring indie hacker</li>
              </div>
            </ul>
          </div>
          <div>
            <p className={style.simpleText}>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
