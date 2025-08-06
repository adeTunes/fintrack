import Image, { StaticImageData } from "next/image";
import React from "react";

interface AvatarProps {
  src: string | StaticImageData;
  size?: number;
  zIndex?: number;
  isGrouped?: boolean;
  isFirst?: boolean;
}

export const Avatar = ({
  src,
  size = 32,
  isGrouped,
  zIndex,
  isFirst = false,
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt="User avatar"
      width={size}
      height={size}
      style={{ zIndex }}
      className={`rounded-full relative object-cover ${
        isGrouped ? "border-2 border-white" : ""
      } ${isGrouped && !isFirst ? "-ml-3" : ""}`}
    />
  );
};
