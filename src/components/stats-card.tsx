import { More } from "../icons";
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  percentageChange: number;
  isAmount?: boolean;
}

export const StatsCard = (props: StatsCardProps) => {
  return (
    <div className="p-7 bg-primary-lighter/[9%] rounded-[20px] flex flex-col gap-[18px]">
      <div className="flex items-center">
        <h5 className="text-[17px] font-bold flex-1/2">{props.title}</h5>
        <More
          size={24}
          className="hover:opacity-60 duration-200 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[34px] leading-10 font-bold">
          {props.isAmount ? "$" : ""}
          {props.value.toLocaleString("en-US")}
        </span>
        <span className="text-primary-mild leading-3 text-[13px] font-medium">
          {props.percentageChange.toString().includes("-") ? "" : "+"}
          {props.percentageChange}%
        </span>
      </div>
    </div>
  );
};
