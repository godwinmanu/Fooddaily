"use client";

import imageKitLoader from "@/utils/imageLoader";
import Image from "next/image";
import "./index.scss";

const Jumbotron = () => {
  return (
    <>
      <div>
        <h1>Be the fastest in delivering your food.</h1>
        <p>
          Imagine you don&pos;t need a diet because we provide healthy and
          delicious food for you
        </p>
        <button>Order now</button>
      </div>
      <Image
        loader={imageKitLoader}
        src="food-exhibition-1.jpg"
        alt="Exhibition image"
        width={300}
        height={300}
      />
    </>
  );
};

export default Jumbotron;
