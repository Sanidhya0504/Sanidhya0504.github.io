import React from "react";
import "../stylesdark/contactDark.css";
import { Link } from "react-scroll";
import { SiLeetcode, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
function ContactDark() {
  return (
    <div>
      <footer class="footer-distributed-dark">
        <div class="footer-left">
          <br></br>

          <h3>Sanidhya</h3>

          <p class="footer-company-name">Full Stack Web Developer</p>

          <div class="footer-icons">
            <a href="https://github.com/Sanidhya0504/">
              <SiGithub className="icons" />
            </a>
            <a to="https://www.linkedin.com/in/sanidhya0504/">
              <SiLinkedin className="icons" />
            </a>
            <a to="https://www.instagram.com/saanidhya0504/">
              <SiInstagram className="icons" />
            </a>
            <a to="https://leetcode.com/Sanidhya_Sharma/">
              <SiLeetcode className="icons" />
            </a>
          </div>
        </div>

        <div class="footer-right">
          <p>Contact Me</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default ContactDark;
