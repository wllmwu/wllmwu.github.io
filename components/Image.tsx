/* eslint-disable @next/next/no-img-element */

import React from "react";
// import NextImage from "next/image";
import styles from "../styles/Image.module.css";

interface ImageProps {
  source: string;
  width: number;
  height: number;
  alt?: string;
}

// const loader = ({ src }: { src: string }) => src;

function Image({ source, width, height, alt }: ImageProps) {
  // return (
  //   <NextImage
  //     loader={loader}
  //     src={source}
  //     width={width}
  //     height={height}
  //     layout="intrinsic"
  //     alt={alt}
  //   />
  // );
  return (
    <img
      src={source}
      alt={alt}
      decoding="async"
      width={width}
      height={height}
      className={styles.image}
    />
  );
}

export default Image;
