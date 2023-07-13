import React from "react";
import { Fade } from "react-awesome-reveal";
import { data } from "../database";
import "../css/Characters.css";

const Characters = () => (
  <div className="sponsors-section" id="characters">
    <Fade bottom>
      <br />
      <br />
      <h1 className="page-title">Best Characters in Ani-Verse</h1>
    </Fade>
    <Fade bottom cascade>
      <div className="sponsors-container">
        {data.charactersData.map((sponsor) => {
          return (
            <div key={sponsor.id} className="sponsors-card">
              <img
                className="sponsors-img"
                src={sponsor.img}
                alt={sponsor.name}
              />
              <div className="textBox">
                <p className="sponsorPlace">{sponsor.post}</p>
                <p className="sponsorName">{sponsor.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  </div>
);

export default Characters;
