import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../database/images";
import "../css/Navbar.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={colorChange ? "app__navbar colorChange" : "app__navbar"}>
      <div className="app__navbar-logo">
        <img
          onClick={() => window.location.reload()}
          src={images.mkLogo}
          alt="junoon-logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <ul className="app__navbar-links">
        <li className="bn">
          <a href="#home">Home</a>
        </li>
        <li className="bn">
          <a href="#about">About Me</a>
        </li>
        <li className="bn">
          <a href="#recommendation">Recommendation</a>
        </li>
        <li className="bn">
          <a href="#manga">Manga</a>
        </li>
        <li className="bn">
          <a href="#characters">Best-Characters</a>
        </li>
        <li className="bn">
          <a href="#members">Top-Members</a>
        </li>
        <li className="bn">
          <a href="#guidelines">Guidelines</a>
        </li>
        <li className="bn">
          <a href="#register">Join</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://manthan-mk-portfolio.vercel.app"
          className="p__opensans"
        >
          <img
            className="navbar__social antaragni-logo"
            src={images.mkLogo}
            alt="My Portfolio"
            style={{ width: "95px", height: "90px" }}
          />
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <button
              content="\u00d7"
              fontSize={27}
              className="navbar__close_btn"
              onClick={() => setToggleMenu(false)}
            >
              Close
            </button>
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Mk4Levi"
                  className="p__opensans"
                >
                  <img
                    className="navbar__social"
                    src={images.mkLogo}
                    alt="github"
                  />
                </a>
                <h1 style={{ display: "inline" }}>|</h1>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mk4coder"
                  className="p__opensans"
                >
                  <img
                    className="navbar__social"
                    src={images.mkLogo}
                    alt="linkedin"
                  />
                </a>
              </li>
              <li className="bn">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="bn">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About Me
                </a>
              </li>
              <li className="bn">
                <a href="#recommendation" onClick={() => setToggleMenu(false)}>
                  Recommendation
                </a>
              </li>
              <li className="bn">
                <a href="#manga" onClick={() => setToggleMenu(false)}>
                  Manga
                </a>
              </li>
              <li className="bn">
                <a href="#characters" onClick={() => setToggleMenu(false)}>
                  Best-Characters
                </a>
              </li>
              <li className="bn">
                <a href="#members" onClick={() => setToggleMenu(false)}>
                  Top-Members
                </a>
              </li>
              <li className="bn">
                <a href="#guidelines" onClick={() => setToggleMenu(false)}>
                  Guidelines
                </a>
              </li>
              <li className="bn">
                <a href="#register" onClick={() => setToggleMenu(false)}>
                  Register
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
