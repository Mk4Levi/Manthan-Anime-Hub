import React from "react";
import { Zoom } from "react-awesome-reveal";
import { images } from "../database";
import Socials from "../components/Socials";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutUs" id="about">
      <br />
      <br />
      <br />
      <h1 className="page-title">About Me and this Website</h1>

      <div className="container">
        <div className="left">
          <Zoom>
            <div className="img-container">
              <div className="outer-circle">
                <div className="inner-circle">
                  <img
                    className="aboutUs-img"
                    src={images.codegeass}
                    width="100%"
                    height="100%"
                    alt="Junoon"
                  />
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Zoom>
          <div className="socials">
            <Zoom>
              <Socials />
            </Zoom>
          </div>
        </div>

        <div className="card">
          <p className="para">
            Welcome to my Anime-Hub web-app! I'm Manthan, a passionate Full
            Stack Developer with a deep interest for crafting innovative and
            high-quality digital solutions. I'm passionate about Open-Source
            Contribution, React-Development, Full-Stack Web Dev, WEB-3 and
            learning new & trending Technological skills.
            <br />
            You can connect with me via my socials that I have linked here in
            the left side of this page inside a frame.
            <br />
            Enough about me, now let's talk about this website!
            Manthan-Anime-Hub is a vibrant and inclusive online community
            platform which I've built specifically for anime enthusiasts. It
            serves as a central hub for anime fans to connect, share their
            passion, and explore the exciting world of anime together.
            <br />
            Upon entering Anime-Hub, users are greeted by a visually appealing
            and user-friendly interface that captures the essence of Anime.
            <br />
            Explore this website to your heart content and make sure to give a
            feedback about your experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
