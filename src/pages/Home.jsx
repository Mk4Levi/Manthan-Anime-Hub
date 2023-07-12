import React from "react";
import "../css/Home.css";
import { Zoom } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="home-title-container">
      <div className="home-title">
        <Zoom>
          <h2 className="junoon-txt" style={{ fontFamily: "homeTitle" }}>
            Anime-Hub
          </h2>
          <h1 className="typeWriter-txt">
            <Typewriter
              options={{
                strings: [
                  '<span class="typed-1" style="font-family:homeTitle"> Anime-Hub </span>',
                  '<span class="typed-2" style="font-family:homeTitle"> built by </span>',
                  '<span class="typed-3" style="font-family:homeTitle"> Manthan </span>',
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 100,
                cursor: "",
                // color: "green",
                cursorClassName: "Typewriter__cursor",
                wrapperClassName: "Typewriter__wrapper",
              }}
            />
          </h1>
        </Zoom>
      </div>
    </div>
  </div>
);

export default Home;
