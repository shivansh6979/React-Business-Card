import React from "react";
import profile from "/React-Business-Card/frontend/src/images/profile.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="main">
        <img src={profile} alt="profile" />
        <h2>Shivansh Gupta</h2>
        <h4>Frontend Developer</h4>
        <h6>ShivanshWEBISTE</h6>
        <div>
          <button className="btn">
            <i className="fa fa-envelope " aria-hidden="true"></i>
            <span>Email</span>
          </button>
          <button className="btn-primary">
            <i className="fab fa-linkedin " aria-hidden="true"></i>
            <span>Linkedin</span>
          </button>
        </div>

        <p className="about">About</p>
        <p>
          I am Shivansh Gupta and I am
          <br /> currently pursuing my B.Tech
          <br />
          (C.S.E) degree from BBDITM
        </p>

        <p className="interest">Interest</p>
        <p>
          My Passion is Frontend Dev.
          <br />
          that's why I am practicing
          <br />
          various technologies such as
          <br />
          HTML5,CSS3,JS,ReactJs,Redux
        </p>
        <footer className="social">
          <a href="https://twitter.com/shivansh11g">
            <i
              className="fab fa-twitter fa-2x "
              style={{ color: "white" }}
              aria-hidden="true"
            ></i>
          </a>

          <a href="https://www.facebook.com/shivansh.gupta.1048/">
            <i
              className="fab fa-facebook fa-2x "
              style={{ color: "white" }}
            ></i>
          </a>

          <a href="https://github.com/shivansh6979">
            <i className="fab fa-github fa-2x " style={{ color: "white" }}></i>
          </a>
          <a href="https://www.instagram.com/shivansh6979/">
            <i
              className="fab fa-instagram fa-2x "
              aria-hidden="true"
              style={{ color: "white" }}
            ></i>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Card;
