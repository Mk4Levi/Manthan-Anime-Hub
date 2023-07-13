import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/Manga.css";
import { data } from "../database";
import { MangaCard } from "../components";

const Manga = () => {
  return (
    <div className="app_gallery" id="manga">
      <div className="app_gallery-content">
        <Fade bottom>
          <h1 className="page-title" style={{ color: "blue" }}>
            Top Mangas to Follow
          </h1>
        </Fade>
      </div>
      <div className="app_gallery-images">
        <div className="app_gallery-images_container">
          <Fade bottom duration={700} cascade>
            {data.mangaData.map((image) => (
              <MangaCard key={image.id} image={image} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Manga;
