"use client";

import { navItems } from "../constants";
import { Logo, Menu } from "../icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Menu
        className="cursor-pointer hover:opacity-60 duration-200"
        onClick={() => setOpen(true)}
      />
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Logo />
            <span className="text-2xl text-primary leading-[100%] mt-3 font-timmana tracking-[-2%] font-semibold">
              FinTrack
            </span>
          </span>
          <button
            className="p-2 text-lg text-primary-dark"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col py-7">
          {navItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`py-2 px-[18px] text-[15px] font-medium rounded-2xl ${
                item.link === pathname
                  ? "text-primary-darkest bg-primary-light/[16%]"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
