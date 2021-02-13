import "./index.css";
import React from "react";
import Avatar from "../Avatar/index"
import Form from '../Form/index'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Start Project</h1>
        <p>Interested in working together?</p>
      </div>
      <div className="footer-avatar">
        <Avatar/>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
        <Form/>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Your Name</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/juan-jos%C3%A9-passo-60787b18a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/JJPasso" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
