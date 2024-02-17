"use client";

import Image from "next/image";
import "./index.scss";
import articlePicture from "@/public/img/illustration1.png";
import { FaArrowRight } from "react-icons/fa6";

const BlogArticle = () => {
  return (
    <div className="blog-article">
      <div className="article-text">
        <h1>Eat healthy food to enjoy a healthy life</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          incidunt minus similique reiciendis non fugit modi in voluptates sunt
          possimus quod fuga officia ducimus corrupti sapiente rerum, blanditiis
          tempore vero? Possimus, non. Assumenda maxime, odio accusantium
          recusandae officia esse quibusdam excepturi enim soluta tempora
          incidunt! Eaque aut adipisci iure perferendis?...
        </p>
        <button>
          Read more <FaArrowRight />{" "}
        </button>
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
