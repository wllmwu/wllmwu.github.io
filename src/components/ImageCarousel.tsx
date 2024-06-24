import React from "react";
import styles from "./Image.module.css";

interface ImageCarouselProps {
  children: React.ReactNode;
}

function ImageCarousel({ children }: ImageCarouselProps) {
  return <div className={styles.carousel}>{children}</div>;
}

export default ImageCarousel;
