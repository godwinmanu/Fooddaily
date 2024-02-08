import Link from "next/link";
import "./index.scss";
import { LuFacebook, LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="general-infos">
        <ul className="about-firm">
          <li>
            {" "}
            <Link href="#">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Newsletter</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Partners Sites</Link>{" "}
          </li>
        </ul>
        <ul className="about-website">
          <li>
            {" "}
            <Link href="#">Privacy Policy</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Terms And Conditions</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">FAQ</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Contact Us</Link>{" "}
          </li>
        </ul>
        <div className="about-dev">
          <p>HOUENOU Emmanuel Godwin</p>
          <p>Cotonou, Bénin</p>
          <a href="mailto:godwinemmanuel302@gmail.com">
            godwinemmanuel302@gmail.com
          </a>
          <a href="tel:+22963797435"></a>
        </div>
        <div className="newsletter">
          <h3>Subscribe to our daily newsletter</h3>
          <p>Get the best food tips and diet advice every day.</p>
          <form>
            <input type="email" name="email" placeholder="Enter your email" />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="copyright-social-infos">
        <div className="copyright">
          &copy; 2024 Copyright. All rights reserved.
        </div>
        <div className="social-media">
          <LuLinkedin />
          <LuFacebook />
          <LuTwitter />
          <LuGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
