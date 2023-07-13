import React from "react";
import "../css/MemberCard.css";

import { images } from "../database";

const MemberCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="contact-cardm">
      <div className="contact-card">
        <img className="profile-img" src={data.image} alt={data.name} />
      </div>

      <div className="contact-card2">
        <div className="contact-upper">
          <p className="contact-name">{data.name}</p>
        </div>
        <div className="contact-lower">
          <div className="contact">
            <img className="contact-icon" src={images.email} alt="email-icon" />
            <p className="contact-info">{data.email}</p>
          </div>
          <div className="contact">
            <img
              className="contact-icon"
              src={images.profile}
              alt="profile-icon"
            />
            <p className="contact-info">{data.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
