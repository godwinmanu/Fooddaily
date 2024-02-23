"use client";

import { useState } from "react";
import Image from "next/image";
import "./index.scss";
import { menu, foodTypeDraw } from "@/data/data.json";
import FoodCard from "../FoodCard";
import { Product } from "../Cart";

const FoodMenu = () => {
  const [foodType, setFoodType] = useState("All");

  const selectFoodType = (type: string) => {
    setFoodType(type);
  };

  return (
    <div className="food-menu" id="food-menu">
      <h1>Our Special Menu</h1>
      <ul>
        {["All", ...Object.keys(menu)].map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => selectFoodType(item)}
              className={item === foodType ? "active" : ""}
            >
              <span>
                <Image
                  src={foodTypeDraw[item as keyof typeof foodTypeDraw]}
                  alt=""
                  fill
                />
              </span>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="menu-box">
        {foodType === "All"
          ? Object.keys(menu).map((foodCategory) => {
              return (menu[foodCategory as keyof typeof menu] as Product[]).map(
                (food: Product, index: number) => {
                  return <FoodCard key={index} food={food} />;
                }
              );
            })
          : (menu[foodType as keyof typeof menu] as Product[]).map(
              (food: Product, index: number) => {
                return <FoodCard key={index} food={food} />;
              }
            )}
      </div>
    </div>
  );
};

export default FoodMenu;
