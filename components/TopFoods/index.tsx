import Image from "next/image";
import "./index.scss";
import { topFoods } from "@/data/data.json";
import { FiShoppingCart } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { formatFoodName } from "@/utils/helpers";

const TopFoods = () => {
  return (
    <div className="top-foods">
      <h1>Most popular foods people order</h1>
      <div className="top-foods-box">
        {topFoods.map((food, index) => {
          return (
            <div key={index} className="top-food-card">
              <Image
                src={food.picture}
                alt={food.name}
                width={150}
                height={150}
              />
              <p className="food-name">
                <span>{formatFoodName(food.name)}</span>
              </p>
              <p className="food-stats">
                <small>
                  {new Array(food.stars).fill(0).map((item, index) => {
                    return <IoStar key={index} color="orange" />;
                  })}
                </small>
                <small>
                  <b>{food.category}</b>
                </small>
              </p>
              <p className="food-price">
                <span>$</span>
                <span>{food.price}</span>
              </p>
              <small className="total-orders">
                <FiShoppingCart />
                <span>{food.totalOrders} orders</span>
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopFoods;
