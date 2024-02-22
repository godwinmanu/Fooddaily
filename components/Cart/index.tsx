/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "./index.scss";
import { Minus, Plus } from "lucide-react";
import { FaTimesCircle } from "react-icons/fa";
import { formatFoodName } from "@/utils/helpers";
import { useStore } from "@/data/store";

interface Product {
  name: string;
  picture: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const { setShowCart } = useStore();
  const storage = localStorage.getItem("orders");
  const orders = storage ? JSON.parse(storage) : null;

  const closeCart = () => {
    setShowCart();
  };

  return (
    <div className="user-cart">
      <h1>
        My Orders
        <span onClick={closeCart}>
          <FaTimesCircle />
        </span>
      </h1>
      <div className="orders">
        {!orders ? (
          <div className="no-order">No order</div>
        ) : (
          orders?.orders.map((item: Product, index: number) => {
            return (
              <div key={index} className="order">
                <div className="product-pic">
                  <Image
                    src={item.picture}
                    alt={formatFoodName(item.name)}
                    fill
                  />
                </div>
                <div className="order-infos">
                  <div className="product-name-and-price">
                    <div className="product-name">
                      {formatFoodName(item.name)}
                    </div>
                    <div className="product-price">${item.price}</div>
                  </div>
                  <div className="counter-and-amount">
                    <div className="counter">
                      <span>
                        {" "}
                        <Minus size={12} />{" "}
                      </span>
                      <span> {item.quantity} </span>
                      <span>
                        {" "}
                        <Plus size={12} />{" "}
                      </span>
                    </div>
                    <div className="amount">
                      Total : <span>${item.quantity * item.price} </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
