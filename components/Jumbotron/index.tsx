"use client";

import Image from "next/image";
import "./index.scss";
import illustration from "@/public/img/Illustration3.png";
import { IoHeartCircleSharp } from "react-icons/io5";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <div className="slogan">
          <span className="slogan-text">People Trust Us</span>
          <span className="slogan-icon">
            <IoHeartCircleSharp />
          </span>
        </div>

        <h1>
          Fooddaily - where taste meets express <span>delivery</span>.
        </h1>
        <p>
          Imagine you don&apos;t need to compromise on hunger and speed, because
          at Fooddaily, we bring you the best of both worlds.
        </p>
        <div className="call-to-actions">
          <button className="order-btn">Order Now</button>
          <button className="tracking-btn">Track Order</button>
        </div>
      </div>
      <div className="exhibition-image">
        <Image src={illustration} alt="Exhibition image" fill />
      </div>
    </div>
  );
};

export default Jumbotron;
