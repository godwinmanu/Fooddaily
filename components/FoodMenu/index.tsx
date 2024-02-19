"use client";

import Image from "next/image";
import "./index.scss";
import { formatFoodName } from "@/utils/helpers";
import { menu } from "@/data/data.json";
import { PlusCircle } from "lucide-react";

interface Dish {
  name: string;
  picture: string;
  price: number;
}

const FoodMenu = () => {
  return (
    <div className="food-menu">
      <h1>Our Special Menu</h1>
      <div className="menu-box">
        {Object.keys(menu).map((foodCategory) => {
          return menu[foodCategory as keyof typeof menu].map(
            (food: Dish, index: number) => {
              return (
                <div key={index} className="food-card">
                  <div className="dish-image">
                    <Image src={food.picture} alt={food.name} fill />
                  </div>
                  <div className="dish-infos">
                    <div className="name-and-price">
                      <small>{formatFoodName(food.name)}</small>
                      <small>${food.price}</small>
                    </div>
                    <button>
                      <PlusCircle size={18} /> ADD TO CART
                    </button>
                  </div>
                </div>
              );
            }
          );
        })}
        {/* {menu.Burger.map((food: any, index) => {
          return (
            <div key={index} className="food-card">
              <div className="dish-image">
                <Image src={food.picture} alt={food.name} fill />
              </div>
              <div className="dish-infos">
                <div className="name-and-price">
                  <small>{formatFoodName(food.name)}</small>
                  <small>${food.price}</small>
                </div>
                <button>
                  <PlusCircle size={18} /> ADD TO CART
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default FoodMenu;
