"use client";

import Link from "next/link";
import "./index.scss";
import { ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/routes";
import Image from "next/image";
import cherry from "@/public/img/cherry.svg";

const Navbar = () => {
  const urlPathName = usePathname();

  const setActiveClassName = (menuPath: string): string => {
    return urlPathName === menuPath ? "active" : "";
  };

  return (
    <nav>
      <div className="brand-name">
        <Image src={cherry} alt="cherry" width={20} height={20} />
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
