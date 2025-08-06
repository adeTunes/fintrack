import { images } from "../constants";
import { Menu, Logo, Search, Apps } from "../icons";
import { Avatar } from "./avatar";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center py-3 justify-between">
      <div className="flex items-center gap-7">
        <Menu />
        <span className="flex items-center gap-1">
          <Logo />
          <span className="text-2xl font-timmana tracking-[-2%] font-semibold">
            FinTrack
          </span>
        </span>
      </div>
      <div className="flex items-center gap-7">
        <Search />
        <Apps />
        <Avatar src={images.avatar3} size={40} />
      </div>
    </header>
  );
};
