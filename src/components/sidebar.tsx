"use client";

import { navItems } from "../constants";
import { MobileDrawer } from "./mobile-drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="max-w-[320px] hidden md:flex flex-col py-7 w-[24%]">
      {navItems.map((item) => (
        <Link
          href={item.link}
          key={item.name}
          className={`py-2 px-[18px] text-[15px] font-medium rounded-2xl ${
            item.link === pathname
              ? "text-primary-darkest bg-primary-light/[16%]"
              : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
};
