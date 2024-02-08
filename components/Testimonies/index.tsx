"use client";

import Image from "next/image";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { testimonies } from "@/data/data.json";

const Testimonies = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonies">
      <div className="illustration">
        <Image
          src="/img/chef.png"
          alt="illustration"
          width={400}
          height={400}
        />
      </div>

      <div className="testimonies-box">
        <h1>What our customers say</h1>
        <Slider className="slider" {...sliderSettings}>
          {testimonies.map((item, index) => {
            return (
              <div key={index} className="testimony">
                <div className="message">{item.thoughts}</div>
                <div className="author">
                  <Image
                    src="/img/chef.png"
                    alt="avatar"
                    width={50}
                    height={50}
                  />
                  <div className="name-and-title">
                    <small className="name">{item.customerName}</small>
                    <small className="title">Customer</small>
                  </div>
                </div>
                <div className="marks">
                  {new Array(Math.floor(item.rate))
                    .fill(0)
                    .map((item, index) => {
                      return <IoStar key={index} color="orange" />;
                    })}
                  {item.rate < 5 ? <IoStarHalf color="orange" /> : null}{" "}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonies;
