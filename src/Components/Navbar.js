import React, { useState } from "react";
import "../Styles/Styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h4>CorEdge</h4>
      </div>
      {/* <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a> */}
     
           
    
      <div className={isActive ? "nav-link": "nav-link active"}>
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

      <button onClick={ToggleClass} id="nav-toggle" href="#!">
                <span></span>
              </button>
    </nav>
  );
}

export default Navbar;
