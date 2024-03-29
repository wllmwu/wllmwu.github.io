import React from "react";
import styles from "../styles/Showcase.module.css";

export interface ShowcaseProps {
  children: React.ReactNode;
}

function ShowcaseGrid({ children }: ShowcaseProps) {
  return <div className={styles.showcaseGrid}>{children}</div>;
}

export default ShowcaseGrid;
