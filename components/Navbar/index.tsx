"use client";

import Link from "next/link";
import "./index.scss";
import { ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";

const menuLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const urlPathName = usePathname();

  const setActiveClassName = (menuPath: string): string => {
    return urlPathName === menuPath ? "active" : "";
  };

  return (
    <nav>
      <div className="brand-name">
        <span>Food</span>
        <span>daily.</span>
      </div>
      <ul>
        {menuLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path} className={setActiveClassName(item.path)}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="user-stuff">
        <ShoppingCart />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
