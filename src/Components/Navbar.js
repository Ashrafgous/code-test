import React from "react";
import "../Styles/Styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import profile from "../Image/profile.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h4>CorEdge</h4>
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp; Home
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp; Job
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faUserCircle} />
              &nbsp; Profile
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faUserCircle} />
              &nbsp; Johnson
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
