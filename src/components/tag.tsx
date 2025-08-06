import React from "react";

interface TagProps {
  color: "red" | "green";
  text: string;
}

export const Tag = ({ color, text }: TagProps) => {
  return (
    <div className="flex w-fit h-fit items-center py-1 px-2 rounded-2xl gap-2 bg-primary-lighter/[9%] text-[15px] font-medium">
      <span
        className={`w-[6px] h-[6px] rounded-full ${
          color === "green" ? "bg-success" : "bg-error"
        }`}
      />
      {text}
    </div>
  );
};
