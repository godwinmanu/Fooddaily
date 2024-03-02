"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./index.scss";
import aboutUsPic from "@/public/img/about_us.png";
import imageKitLoader from "@/utils/imageLoader";
import Link from "next/link";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <Image fill={true} src={aboutUsPic} alt="about-us-illustration" />
      </div>
      <div className="content">
        <div className="who-are-we">
          <div className="team-img">
            <Image
              loader={imageKitLoader}
              src="chef-team.jpg"
              alt="chef-team"
              fill
            />
          </div>
          <div className="who-are-we-text">
            <h1>Who Are We?</h1>
            <p>
              <span>Fooddaily</span> emerges from the gastronomic legacy of a
              renowned restaurant bearing the same name. At the core of our
              identity lies a profound passion for quality cuisine. We are not
              just a delivery platform but a virtual extension of this
              established restaurant, offering an exceptional culinary
              experience with every order. Our story is woven with years of
              expertise in the art of fine dining.
            </p>
          </div>
        </div>
        <div className="choice-reason">
          <h1>Why Choose Us?</h1>
          <p>
            By choosing <span>Fooddaily</span>, you opt for a gastronomic
            experience that transcends expectations. What sets us apart is our
            direct link to a renowned restaurant. Every dish you order is
            infused with this culinary excellence. Our promise rests on two
            pillars: the impeccable quality of our meals and the unparalleled
            speed of our deliveries. At <span>Fooddaily</span>, we believe that
            every meal should be a celebration of exceptional flavors, delivered
            promptly to your door.
          </p>
        </div>
        <div className="goals">
          <div className="mission">
            <h1>Our Mission</h1>
            <p>
              <span>Fooddaily</span> is committed to redefining your meal
              delivery experience. Our mission is to offer you more than just a
              delivered meal; it's a promise of quality, freshness, and
              authentic flavors. Each dish is carefully prepared by our partner
              restaurant, carrying the very essence of our dedication to
              culinary perfection.
            </p>
          </div>
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
              Our vision goes beyond just delivering meals. We aspire to a world
              where everyone can relish the essence of an exceptional meal at
              home. <span>Fooddaily</span> aims to be your go-to choice,
              seamlessly blending refined taste with swift service. We imagine a
              realm where exceptional gastronomy is easily accessible.
            </p>
          </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p>
            We are at your service for any questions, suggestions, or just to
            share some delightful smiles. <br />
            Join us on social media.
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
