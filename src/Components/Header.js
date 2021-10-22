import React from "react";
import "../Styles/Styles.scss";
function Header() {
  return (
    <div className="header">
      <h2 className="header-section">Jobs</h2>
      <div className="navigate-section">
        <a href="/">New Matches(12)</a>
        <a href="/">My Jobs(11)</a>
        <a className="active" href="/">
          Passed(15)
        </a>
      </div>
      <article className="result">
        <p>Showing result 1-4 of 4</p>
      </article>
    </div>
  );
}

export default Header;
