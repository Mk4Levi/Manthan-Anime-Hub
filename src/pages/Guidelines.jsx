import React from "react";
import Fade from "react-awesome-reveal";
import "../css/Guidelines.css";

const Guidelines = () => (
  <div className="guidelines-section" id="guidelines">
    <div className="app__guide-content flex__center">
      <div className="app__guide-content_guidelines">
        <Fade bottom>
          <h1 className="page-title">Guidelines to join this Community</h1>
          <div className="card">
            <div className="para">
              <p className="p__opensans" id="guide__p">
                ⚙️ To join this Anime-Community, fill the Form below and submit
                it.
              </p>
              <p className="p__opensans" id="guide__p">
                ⚙️ Your Top-4 Anime Recommendation would be appreciated.
              </p>
              <p className="p__opensans" id="guide__p">
                ⚙️ Make sure to give a feedback about your UI-Experience .
              </p>
              <p className="p__opensans" id="guide__p">
                ⚙️ You can provide your socials link for connecting .
              </p>
              <p className="p__opensans" id="guide__p">
                ⚙️ You can also put additional links such as your Portfolio
                Website, Youtube links in the Other links section. If you have
                multiple such links, send all links separated by a comma.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </div>
);

export default Guidelines;
