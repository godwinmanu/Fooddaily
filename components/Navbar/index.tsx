"use client";

import Link from "next/link";
import "./index.scss";
import { ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/routes";
import BrandLogo from "../BrandLogo";
import { useEffect } from "react";
import { useOrderStore } from "@/data/store";
import Cart from "@/components/Cart";

const Navbar = () => {
  const urlPathName = usePathname();
  const { orders, showCart, setShowCart } = useOrderStore();

  const setActiveClassName = (menuPath: string): string => {
    return urlPathName === menuPath ? "active" : "";
  };

  const toggleCartDisplay = () => {
    setShowCart();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        document.querySelector(".navbar-items")?.classList.add("fix");
      } else {
        document.querySelector(".navbar-items")?.classList.remove("fix");
      }
    });
  }, []);

  return (
    <nav>
      <div className="navbar-items">
        <BrandLogo />
        <ul>
          {menuLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={setActiveClassName(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="user-stuff">
          <span
            id="cart"
            data-count={orders.length}
            onClick={toggleCartDisplay}
          >
            <ShoppingCart />
          </span>
          <User />
        </div>
      </div>
      {showCart ? <Cart /> : null}
    </nav>
  );
};

export default Navbar;
