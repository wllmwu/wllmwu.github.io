/* eslint-disable @next/next/no-img-element */

import React from "react";
import { combineClasses } from "../utils";
import styles from "../styles/Image.module.css";

interface ImageProps {
  source: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}

function Image({ source, width, height, alt, className }: ImageProps) {
  return (
    <img
      src={source}
      alt={alt}
      decoding="async"
      width={width}
      height={height}
      className={combineClasses(styles.image, className)}
    />
  );
}

interface AppIconImageProps {
  source: string;
  size: number;
  alt?: string;
}

export function AppIconImage({ source, size, alt }: AppIconImageProps) {
  return <Image source={source} width={size} height={size} alt={alt} className={styles.appIcon} />;
}

export default Image;
