import Link from "next/link";
import "./index.scss";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import BrandLogo from "../BrandLogo";
import { PiPaperPlaneRightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <div className="about-brand">
        <BrandLogo />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quidem.
        </p>
        <div className="social-media">
          <LuInstagram className="social-link" />
          <LuFacebook className="social-link" />
          <LuTwitter className="social-link" />
        </div>
      </div>
      <div className="about-firm">
        <h3>About</h3>
        <ul className="section-infos">
          <li>
            {" "}
            <Link href="#">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">News</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Blog</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="#">Our Partners</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="about-website">
        <h3>Useful Links</h3>
        <ul className="section-infos">
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
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="section-infos">
          <p>Abomey-Calavi, Bénin</p>
          <a href="mailto:godwinemmanuel302@gmail.com">
            godwinemmanuel302@gmail.com
          </a>
          <a href="tel:+22963797435">+229 63797435</a>
        </div>
      </div>
      <div className="newsletter">
        <h3>Subscribe to our daily newsletter</h3>
        <p>Get the best food tips and diet advice every day.</p>
        <form>
          <input type="email" name="email" placeholder="Enter your email" />
          <button>
            <PiPaperPlaneRightLight />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
