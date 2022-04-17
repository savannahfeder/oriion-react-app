import React from "react";
// import TopBar from "./TopBar.js";
import { Link } from "react-router-dom";

const MeetOriion = () => {
  return (
    <div className="meet-oriion">
      {/* <TopBar /> */}
      <div className="meet-oriion--body body">
        <div>
          <h1 className="meet-oriion--header">
            <span className="lightest-text">meet</span> oriion
          </h1>
          <div className="meet-oriion--tagline-div">
            Your online course accountability buddy
          </div>
          {/* <Link
            className="button button-link meet-oriion--button"
            to="/select-course"
          >
            Let's get started
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MeetOriion;
