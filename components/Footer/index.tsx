import Link from "next/link";
import "./index.scss";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import BrandLogo from "../BrandLogo";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="about-brand">
        <BrandLogo />
        <p>Fooddaily - where taste meets express delivery.</p>
        <div className="social-media">
          <Link href="https://www.linkedin.com/in/emmanuel-godwin-houenou">
            <LuLinkedin className="social-link" />
          </Link>
          <Link href="https://www.facebook.com/godwinmanu.dev">
            <LuFacebook className="social-link" />
          </Link>
          <Link href="https://twitter.com/godwinmanu3">
            <FaXTwitter className="social-link" />
          </Link>
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
