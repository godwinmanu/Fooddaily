/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "./index.scss";
import articlePicture from "@/public/img/illustration1.png";
import goToPageArrow from "@/public/img/white-right-arrow.svg";
import Link from "next/link";

const BlogArticle = () => {
  return (
    <div className="blog-article">
      <div className="article-text">
        <h1>
          Healthy Meals, Healthy Mind: The Impact of Nutrition on Mental Health
        </h1>
        <p>
          The age-old saying "You are what you eat" takes on its full meaning
          when we explore the correlation between nutrition and mental health.
          While our diet is often associated with physical goals, it is
          increasingly evident that what we put on our plates significantly
          impacts our mental well-being....
        </p>
        <Link href="/blog">
          Read more{" "}
          <Image src={goToPageArrow} alt="Next" width={25} height={10} />
        </Link>
      </div>
      <Image
        src={articlePicture}
        alt="Blog article picture"
        width={300}
        height={300}
      />
    </div>
  );
};

export default BlogArticle;
