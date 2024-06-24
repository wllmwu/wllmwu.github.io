import React from "react";
import styles from "./Banner.module.css";

interface BannerProps {
  children: React.ReactNode;
}

function Banner({ children }: BannerProps) {
  return <div className={styles.banner}>{children}</div>;
}

export default Banner;
