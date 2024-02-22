"use client";

import Link from "next/link";
import "./index.scss";
import { ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/routes";
import BrandLogo from "../BrandLogo";
import { useEffect } from "react";

const Navbar = () => {
  const urlPathName = usePathname();

  const setActiveClassName = (menuPath: string): string => {
    return urlPathName === menuPath ? "active" : "";
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
          <span id="cart" data-count="0">
            <ShoppingCart />
          </span>
          <User />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
