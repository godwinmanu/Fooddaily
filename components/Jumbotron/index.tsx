import imageKitLoader from "@/utils/imageLoader";
import Image from "next/image";
import "./index.scss";

const Jumbotron = () => {
  return (
    <>
      <div>
        <h1>We have the faster delivery food.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          necessitatibus.
        </p>
      </div>
      <Image
        loader={imageKitLoader}
        src="food-exhibition-1.jpg"
        alt="Exhibition image"
        width={250}
        height={250}
      />
    </>
  );
};

export default Jumbotron;
