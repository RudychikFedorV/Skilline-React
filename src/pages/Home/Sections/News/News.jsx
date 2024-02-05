import React from "react";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <section className="News">
      <div className="News__title">Lastest News and Resources</div>
      <div className="News__desc">
        See the developments that have occurred to Skillines in the world
      </div>

      <div className="News__sections">
        {/* home section */}
        <div className="News__sections1">
          <div className="News__sections1-img">
            <img src="src/assets/news/news1.png" alt="News" />
          </div>
          <Link to="/">
            <div className="News__sections1-btn btn btns">News</div>
          </Link>
          <div className="News__sections1-desc">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </div>
          <div className="News__sections1-info">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </div>
          <Link to="*">
            <div className="News__sections1-readMore">Read more</div>
          </Link>
        </div>

        {/* News__sections2 */}
        <div className="News__sections2">
          {/* section number one */}
          <div className="News__sections2-block">
            <div className="News__sections2-container">
              <img
                src="src/assets/news/news2.png"
                alt="News"
                className="News__sections2-img"
              />
              <Link to="/">
                <div className="News__sections2-btn btn btns">
                  PRESS RELEASE
                </div>
              </Link>
            </div>
            <div className="News__sections2-info">
              <div className="News__sections2-desc">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </div>
              <div className="News__sections2-text">
                Class Technologies Inc., the company that created Class,...
              </div>
            </div>
          </div>

          {/* section number two */}
          <div className="News__sections2-block">
            <div className="News__sections2-container">
              <img
                src="src/assets/news/news3.png"
                alt="News"
                className="News__sections2-img"
              />
              <Link to="/">
                <div className="News__sections2-btn btn btns">News</div>
              </Link>
            </div>
            <div className="News__sections2-info">
              <div className="News__sections2-desc">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </div>
              <div className="News__sections2-text">
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </div>
            </div>
          </div>

          {/* section number three */}
          <div className="News__sections2-block">
            <div className="News__sections2-container">
              <img
                src="src/assets/news/news4.png"
                alt="News"
                className="News__sections2-img"
              />
              <Link to="/">
                <div className="News__sections2-btn btn btns">News</div>
              </Link>
            </div>
            <div className="News__sections2-info">
              <div className="News__sections2-desc">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </div>
              <div className="News__sections2-text">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
