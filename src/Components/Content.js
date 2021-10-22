import React from "react";
import "../Styles/Styles.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Content() {
  const percentage = 89;
  return (
    <div className="content">
      <h2>Passed(15)</h2>
      <div className="job">
        <div className="job-head">
          <h5 className="match-date">Matched 11/12/2018</h5>
          <h5 className="job-title">
            Senior <br></br>Accounted
          </h5>
          <h4 className="job-location"> Peninsula</h4>
          <div className="response">
            <button className="like">
              {/* <BiLike /> */}
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button className="dislike">
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
        </div>
        <div className="job-details">
          <div className="details">
            <article className="about-company">
              ABOUT THE COMPANY
              <div className="company">
                <p>Founded</p>
                <p>2002</p>
              </div>
              <div className="company">
                <p>Employees</p>
                <p>10,000 - 15,000</p>
              </div>
              <div className="company">
                <p>Revenue</p>
                <p>Confidential</p>
              </div>
              <div className="company">
                <p>Serios</p>
                <p>Serious B</p>
              </div>
              <div className="company">
                <p>Raised</p>
                <p>$ 27M</p>
              </div>
              <div className="company">
                <p>Industry</p>
                <p>Technology</p>
              </div>
            </article>
            <article className="about-company">
              ABOUT THE ROLE
              <div className="company">
                <p>Type</p>
                <p>Full-time</p>
              </div>
              <div className="company">
                <p>Total Compansation</p>
                <p>$150,000 to $180,000</p>
              </div>
              <div className="company">
                <p>Equity / Options</p>
                <p>Yes</p>
              </div>
              <div className="company">
                <p>Travel</p>
                <p>Required 10% Travel</p>
              </div>
              <div className="company">
                <p>Work from Home</p>
                <p>One Day a Week</p>
              </div>
            </article>
            <div className="loader" style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.1,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  textSize: "2rem",
                })}
              />
            </div>
          </div>

          <div className="job-description">
            JOB DESCRIPTION
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              doloremque assumenda neque, minima aut dolor saepe ratione cum
              dolores voluptatibus incidunt, corporis aperiam facere veniam quos
              nobis. Commodi, doloremque qui. corporis aperiam facere veniam
              quos nobis. Commodi, doloremque qui.corporis aperiam facere veniam
              quos Commodi, doloremque qui,{" "}
              <a href="">See full job description</a>
            </div>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-head">
          <h5 className="match-date">Matched 11/12/2018</h5>
          <h5 className="job-title">
            Senior <br></br>Accounted
          </h5>
          <h4 className="job-location"> Peninsula</h4>
          <div className="response">
            <button className="like">
              {/* <BiLike /> */}
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button className="dislike">
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
        </div>
        <div className="job-details">
          <div className="details">
            <article className="about-company">
              ABOUT THE COMPANY
              <div className="company">
                <p>Founded</p>
                <p>2002</p>
              </div>
              <div className="company">
                <p>Employees</p>
                <p>10,000 - 15,000</p>
              </div>
              <div className="company">
                <p>Revenue</p>
                <p>Confidential</p>
              </div>
              <div className="company">
                <p>Serios</p>
                <p>Serious B</p>
              </div>
              <div className="company">
                <p>Raised</p>
                <p>$ 27M</p>
              </div>
              <div className="company">
                <p>Industry</p>
                <p>Technology</p>
              </div>
            </article>
            <article className="about-company">
              ABOUT THE ROLE
              <div className="company">
                <p>Type</p>
                <p>Full-time</p>
              </div>
              <div className="company">
                <p>Total Compansation</p>
                <p>$150,000 to $180,000</p>
              </div>
              <div className="company">
                <p>Equity / Options</p>
                <p>Yes</p>
              </div>
              <div className="company">
                <p>Travel</p>
                <p>Required 10% Travel</p>
              </div>
              <div className="company">
                <p>Work from Home</p>
                <p>One Day a Week</p>
              </div>
            </article>
            <div className="loader" style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.1,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  textSize: "2rem",
                })}
              />
            </div>
          </div>

          <div className="job-description">
            JOB DESCRIPTION
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              doloremque assumenda neque, minima aut dolor saepe ratione cum
              dolores voluptatibus incidunt, corporis aperiam facere veniam quos
              nobis. Commodi, doloremque qui. corporis aperiam facere veniam
              quos nobis. Commodi, doloremque qui.corporis aperiam facere veniam
              quos Commodi, doloremque qui,{" "}
              <a href="">See full job description</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
