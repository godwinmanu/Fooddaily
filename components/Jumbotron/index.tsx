"use client";

import imageKitLoader from "@/utils/imageLoader";
import Image from "next/image";
import "./index.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <h1>Be the fastest in delivering your food.</h1>
        <p>
          Imagine you don&apos;t need a diet because we provide healthy and
          delicious food for you.
        </p>
        <button>Order now &#8594;</button>
      </div>
      <div className="exhibition-image">
        <Image
          loader={imageKitLoader}
          src="female-courier-with-delivery-food.png"
          alt="Exhibition image"
          width={500}
          height={250}
        />
      </div>
    </div>
  );
};

export default Jumbotron;
