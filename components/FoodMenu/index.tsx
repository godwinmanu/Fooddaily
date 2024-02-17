"use client";

import Image from "next/image";
import "./index.scss";
import { formatFoodName } from "@/utils/helpers";
import { menu } from "@/data/data.json";

const FoodMenu = () => {
  return (
    <div className="food-menu">
      {/* {menu.Burger.map((food: any, index) => {
        return (
          <div key={index} className="food-card">
            <Image
              src={food.picture}
              alt={food.name}
              width={100}
              height={100}
            />
            <p className="food-name">
              <span>{formatFoodName(food.name)}</span>
            </p>
          </div>
        );
      })} */}
      Our Menu
    </div>
  );
};

export default FoodMenu;
