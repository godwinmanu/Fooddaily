"use client";

import { SyntheticEvent } from "react";
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
  const addToCart = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;

    const cart = document.getElementById("cart");
    if (!cart) {
      return;
    }

    const cartX = cart.getBoundingClientRect().x;
    const cartY = cart.getBoundingClientRect().y;

    const parent = target.parentNode?.parentNode as HTMLElement;

    const dish = parent?.querySelector(".dish-image") as HTMLElement | null;
    if (!dish) {
      return;
    }

    const clonedDish = dish.cloneNode(true) as HTMLElement;

    const dishX = dish.getBoundingClientRect().x;
    const dishY = dish.getBoundingClientRect().y;

    clonedDish.classList.add("flyable");
    clonedDish.style.width = dish.getBoundingClientRect().width + "px";
    clonedDish.style.height = dish.getBoundingClientRect().height + "px";
    clonedDish.style.position = "fixed";
    clonedDish.style.top = dishY + "px";
    clonedDish.style.left = dishX + "px";

    if (parent) {
      parent.appendChild(clonedDish);
    }

    if (clonedDish) {
      clonedDish.style.transform = `translate(${
        cartX -
        dishX -
        clonedDish.getBoundingClientRect().width +
        cart.getBoundingClientRect().width / 2
      }px, ${-(
        dishY -
        cartY -
        cart.getBoundingClientRect().height / 2
      )}px) scale(0.1)`;
    }

    let dataCount = Number(cart.getAttribute("data-count"));
    setTimeout(function () {
      if (clonedDish && parent) {
        parent.removeChild(clonedDish);
        cart.setAttribute("data-count", `${dataCount + 1}`);
      }
    }, 1000);
  };

  return (
    <div className="food-menu">
      <h1>Our Special Menu</h1>
      <div className="menu-box">
        {Object.keys(menu).map((foodCategory) => {
          return (menu[foodCategory as keyof typeof menu] as Dish[]).map(
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
                    <button onClick={(e: SyntheticEvent) => addToCart(e)}>
                      <PlusCircle size={18} /> ADD TO CART
                    </button>
                  </div>
                </div>
              );
            }
          );
        })}
      </div>
    </div>
  );
};

export default FoodMenu;
