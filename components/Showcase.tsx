import React from "react";
import Link from "next/link";
import Image from "./Image";
import styles from "../styles/Showcase.module.css";

export interface ShowcaseProps {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

function Showcase({ title, description, link, thumbnail }: ShowcaseProps) {
  return (
    <div className={styles.showcaseBox}>
      <Image
        source={thumbnail}
        width={800}
        height={600}
        alt={`${title} thumbnail`}
        className={styles.showcaseThumbnail}
      />
      <div className={styles.showcaseOverlay}>
        <p className={styles.showcaseTitle}>
          <Link href={link}>{title}</Link>
        </p>
        <p className={styles.showcaseDescription}>{description}</p>
      </div>
    </div>
  );
}

export default Showcase;
