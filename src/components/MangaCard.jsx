import React from "react";

const MangaCard = ({ image }) => {
  return (
    <div className="gallery-card">
      <div className="app_gallery-images_card">
        <img className="gallery_image" src={image.img} alt="gallery_image" />
      </div>
    </div>
  );
};

export default MangaCard;
