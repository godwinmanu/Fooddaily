"use client";

import Image from "next/image";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { testimonies } from "@/data/data.json";
import imageKitLoader from "@/utils/imageLoader";
import testimoniesPicture from "@/public/img/illustration2.png";
import leftArrow from "@/public/img/left-arrow.svg";
import rightArrow from "@/public/img/right-arrow.svg";
import { useRef } from "react";

const Testimonies = () => {
  let sliderRef: any = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonies">
      <div className="illustration">
        <Image
          src={testimoniesPicture}
          alt="chef indexing testimonies"
          width={400}
          height={400}
        />
      </div>

      <div className="testimonies-box">
        <h1>What our customers say</h1>
        <Slider
          className="slider"
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...sliderSettings}
        >
          {testimonies.map((item, index) => {
            return (
              <div key={index} className="testimony">
                <div className="message">{item.thoughts}</div>
                <div className="author">
                  <Image
                    loader={imageKitLoader}
                    src={item.customerPicture}
                    alt="avatar"
                    width={50}
                    height={50}
                  />
                  <div className="name-and-title">
                    <small className="name">{item.customerName}</small>
                    <small className="title">{item.customerTitle}</small>
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
        <div className="nav-arrows">
          <button onClick={previous}>
            <Image src={leftArrow} alt="Prev" width={15} height={5} />
          </button>
          <button onClick={next}>
            <Image src={rightArrow} alt="Next" width={15} height={5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
