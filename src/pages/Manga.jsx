import { useState, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import "../css/Manga.css";
import { data } from "../database";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scrollLeftDir = () => scroll("left");
  const scrollRightDir = () => scroll("right");

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current && current.scrollLeft != null) {
      if (direction === "left") {
        current.scrollLeft -= 800;
      } else if (direction === "right") {
        current.scrollLeft += 500;
      }
    }
  };

  const [mangaDataArr] = useState(data.mangaData);

  return (
    <div className="app-gallery" id="manga">
      <div className="app-gallery-content">
        <Fade bottom>
          <h1 className="page-title">Top Mangas to Follow</h1>
        </Fade>
      </div>
      <div className="app-gallery-images">
        <div className="app-gallery-images_container" ref={scrollRef}>
          {mangaDataArr.map((image) => (
            <div className="app-gallery-images_card">
              <img
                key={image.id}
                className="gallery-image"
                src={image.img}
                alt={`img-${image.id}`}
              />
            </div>
          ))}
        </div>
        <div className="app-gallery-images_arrows">
          <div className="gallery-arrows-div">
            <BsArrowLeftShort
              className="gallery-arrow-icon"
              onClick={scrollLeftDir}
            />
          </div>
          <div className="gallery-arrows-div">
            <BsArrowRightShort
              className="gallery-arrow-icon"
              onClick={scrollRightDir}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
