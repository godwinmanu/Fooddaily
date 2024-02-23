import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./index.scss";
import { Product } from "../Cart";
import { useOrderStore } from "@/data/store";

interface Props {
  product: Product;
  computeSubtotal: () => number;
}

const AmountCalculator = ({ product, computeSubtotal }: Props) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateOrderQuantity } = useOrderStore();

  const changeQuantity = (operation: string) => {
    if (operation === "decrease") {
      if (quantity - 1 < 1) {
        setQuantity(1);
        setTimeout(() => {
          computeSubtotal();
          updateOrderQuantity({ ...product, quantity: quantity - 1 });
        }, 500);
      } else {
        setQuantity(quantity - 1);
        setTimeout(() => {
          computeSubtotal();
          updateOrderQuantity({ ...product, quantity: quantity - 1 });
        }, 500);
      }
    } else {
      setQuantity(quantity + 1);
      setTimeout(() => {
        computeSubtotal();
        updateOrderQuantity({ ...product, quantity: quantity + 1 });
      }, 500);
    }
  };

  return (
    <div className="calculator">
      <div className="counter">
        <span onClick={() => changeQuantity("decrease")}>
          {" "}
          <Minus size={12} />{" "}
        </span>
        <span> {quantity} </span>
        <span onClick={() => changeQuantity("increase")}>
          {" "}
          <Plus size={12} />{" "}
        </span>
      </div>
      <div className="amount">
        Total :{" "}
        <span>
          $<span className="computed-amount">{quantity * product.price}</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default AmountCalculator;
