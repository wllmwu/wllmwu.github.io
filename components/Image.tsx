import React from "react";
import NextImage from "next/image";

interface ImageProps {
  source: string;
  width: number;
  height: number;
  alt?: string;
}

const loader = ({ src }: { src: string }) => src;

function Image({ source, width, height, alt }: ImageProps) {
  return (
    <NextImage
      loader={loader}
      src={source}
      width={width}
      height={height}
      layout="intrinsic"
      alt={alt}
    />
  );
}

export default Image;
