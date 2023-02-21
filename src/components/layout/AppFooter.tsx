import React from "react";
import "./style/style.scss";

const AppFooter = () => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-3">
          <p>THE BASICS</p>
          <div className="content">
            <div className="text">
              <a target="_self" href="/">
                About Us
              </a>
            </div>
            <div className="text">
              <a target="_blank" href="/">
                Blog
              </a>
            </div>
            <div className="text">
              <a target="_blank" href="/">
                Careers
              </a>
            </div>
            <div className="text">
              <a target="_blank" href="/">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-3">
          <p>COMMUNITY</p>
          <div className="content">
            <div className="text">
              <a target="_self" href="/">
                Guidelines
              </a>
            </div>
            <div className="text">
              <a target="_self" href="/">
                Discussions
              </a>
            </div>
            <div className="text">
              <a target="_self" href="/">
                Leaderboard
              </a>
            </div>
            <div className="text">
              <a target="_self" href="/">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-3">
          <p>LEGAL</p>
          <div className="content">
            <div className="text">
              <a target="_self" href="/">
                Terms of Service
              </a>
            </div>
            <div className="text">
              <a target="_self" href="/">
                Cookies
              </a>
            </div>
            <div className="text">
              <a target="_self" href="/">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer">
        <div className="footer-text">
          <span>Melody</span>
          <span> &copy; 2023 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(AppFooter);