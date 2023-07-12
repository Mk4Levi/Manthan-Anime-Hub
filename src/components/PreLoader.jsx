import "../css/PreLoader.css";
import { images } from "../database";

const PreLoader = () => {
  return (
    <div id="page">
      <div id="container">
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="h3">
          <img
            style={{ width: "70px", height: "70px" }}
            src={images.mkLogo}
            alt="antaragniLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
