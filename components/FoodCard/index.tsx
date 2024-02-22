/* eslint-disable react/no-unescaped-entities */
"use client";

import { SyntheticEvent } from "react";
import Image from "next/image";
import "./index.scss";
import { formatFoodName } from "@/utils/helpers";
import { foodTypeDraw } from "@/data/data.json";
import { PlusCircle } from "lucide-react";

interface Dish {
  name: string;
  picture: string;
  price: number;
}

interface Props {
  food: Dish;
}

const FoodCard = ({ food }: Props) => {
  const storeOrders = (totalOrders: number) => {
    const initialStorage = { totalOrders: 0, orders: [] };
    const storage = localStorage.getItem("orders");
    const oldOrders = storage ? JSON.parse(storage) : initialStorage;
    const orders = {
      totalOrders,
      orders: [{ ...food, quantity: 1 }, ...oldOrders?.orders],
    };
    localStorage.setItem("orders", JSON.stringify(orders));
  };

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
        storeOrders(dataCount);
      }
    }, 1000);
  };

  return (
    <div className="food-card">
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
};

export default FoodCard;
