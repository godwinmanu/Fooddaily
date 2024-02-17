"use client";

import Image from "next/image";
import "./index.scss";
import imageKitLoader from "@/utils/imageLoader";

const MemberDiscount = () => {
  return (
    <div className="member-discount">
      <Image
        fill={true}
        loader={imageKitLoader}
        src="meat-dish-as-discount-image.jpg"
        alt="meat-dish-as-discount-image"
      />
      <div>
        <p>
          Join our community and get
          <br />
          Up to 30% off.
        </p>
        <button>Join now</button>
      </div>
    </div>
  );
};

export default MemberDiscount;
