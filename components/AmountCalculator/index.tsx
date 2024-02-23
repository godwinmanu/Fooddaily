import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./index.scss";

interface Props {
  initialQuantity: number;
  unitPrice: number;
  computeSubtotal: () => number;
}

const AmountCalculator = ({
  initialQuantity,
  unitPrice,
  computeSubtotal,
}: Props) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const changeQuantity = (operation: string) => {
    if (operation === "decrease") {
      if (quantity - 1 < 1) {
        setQuantity(1);
        setTimeout(() => {
          computeSubtotal();
        }, 500);
      } else {
        setQuantity(quantity - 1);
        setTimeout(() => {
          computeSubtotal();
        }, 500);
      }
    } else {
      setQuantity(quantity + 1);
      setTimeout(() => {
        computeSubtotal();
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
          $<span className="computed-amount">{quantity * unitPrice}</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default AmountCalculator;
