"use client";

import Link from "next/link";
import "./index.scss";
import { ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/routes";
import BrandLogo from "../BrandLogo";

const Navbar = () => {
  const urlPathName = usePathname();

  const setActiveClassName = (menuPath: string): string => {
    return urlPathName === menuPath ? "active" : "";
  };

  return (
    <nav>
      <BrandLogo />
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
