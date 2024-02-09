import React from "react";
import "./index.scss";
import Image from "next/image";
import cherry from "@/public/img/cherry.svg";

const BrandLogo = () => {
  return (
    <div className="brand-name">
      <Image src={cherry} alt="cherry" width={20} height={20} />
      <span>Food</span>
      <span>daily.</span>
    </div>
  );
};

export default BrandLogo;
