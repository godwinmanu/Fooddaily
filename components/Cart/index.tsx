/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "./index.scss";
import { Clock } from "lucide-react";
import { FaTimesCircle } from "react-icons/fa";
import { formatFoodName } from "@/utils/helpers";
import { useOrderStore } from "@/data/store";
import AmountCalculator from "../AmountCalculator";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  name: string;
  picture: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const { orders, setShowCart, removeOrder } = useOrderStore();
  const [promoCode, setPromoCode] = useState("");
  const [emoji, setEmoji] = useState("/img/no.gif");

  const closeCart = () => {
    setShowCart();
  };

  const handleRemoveOrder = (order: Product) => {
    removeOrder(order);
  };

  const computeDiscount = (
    amount: number,
    triggerFromClick: boolean = false
  ) => {
    const discountTag = document.querySelector(".discount");
    const jokeEmoji = document.querySelector(".joke-emoji") as HTMLElement;
    if (promoCode) {
      if (promoCode === "Godwin") {
        if (discountTag) {
          discountTag.textContent = (amount * 0.3).toString();

          if (jokeEmoji && triggerFromClick) {
            jokeEmoji.style.display = "none";
            setEmoji("/img/yes.gif");
            jokeEmoji.style.display = "flex";
          }
        }
        return amount * 0.3;
      } else {
        if (discountTag) {
          discountTag.textContent = "0";
          if (jokeEmoji && triggerFromClick) {
            jokeEmoji.style.display = "none";
            setEmoji("/img/no.gif");
            jokeEmoji.style.display = "flex";
          }
        }
        return 0;
      }
    } else {
      return 0;
    }
  };

  const computeSubtotal = () => {
    const orderElements = document.querySelectorAll(".order");
    const subTotalTag = document.querySelector(".subtotal");
    const totalAmountTag = document.querySelector("b");
    let subtotal = 5;

    for (const order of orderElements) {
      const orderAmount = order.querySelector(".computed-amount");
      subtotal += Number(orderAmount?.textContent);
    }

    if (subTotalTag) {
      subTotalTag.textContent = subtotal.toString();
    }

    if (totalAmountTag) {
      totalAmountTag.textContent = (
        subtotal - computeDiscount(subtotal)
      ).toString();
    }

    return subtotal;
  };

  useEffect(() => {
    computeSubtotal();
  }, []);

  return (
    <div className="user-cart">
      <h1>
        My Orders
        <span onClick={closeCart}>
          <FaTimesCircle />
        </span>
      </h1>
      {!orders.length ? (
        <div className="no-order">No order</div>
      ) : (
        <>
          <div className="orders">
            {orders?.map((item: Product, index: number) => {
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
                        <span onClick={() => handleRemoveOrder(item)}>
                          <FaTimesCircle />
                        </span>
                      </div>
                      <div className="product-price">${item.price}</div>
                    </div>
                    <AmountCalculator
                      computeSubtotal={computeSubtotal}
                      product={item}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="check-out">
            <div className="about-delivery">
              <div className="delivery-icon">
                <Clock />
              </div>
              <div className="cost-duration">
                <span className="delivery-time">
                  Delivery time
                  <p>15-20 min</p>
                </span>
                <div className="delivery-cost">$5</div>
              </div>
            </div>
            <div className="promo-code">
              <div className="input-group">
                <input
                  type="text"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Image
                  className="joke-emoji"
                  src={emoji}
                  alt=""
                  width={30}
                  height={25}
                />
              </div>
              <button onClick={() => computeDiscount(computeSubtotal(), true)}>
                Apply
              </button>
            </div>
            <div className="totals">
              <p>
                <span>Subtotal</span>
                <span>
                  $<span className="subtotal">{0}</span>
                </span>
              </p>
              <p>
                <span>Applied Promo Code</span>
                <span>
                  - $<span className="discount">{0}</span>
                </span>
              </p>
              <p>
                <span>Total Amount</span>
                <span className="total-amount">
                  $<b>{0}</b>
                </span>
              </p>
            </div>
            <button className="order-btn">Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
