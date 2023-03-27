import React from "react";
import Link from "next/link";
import Image from "./Image";
import styles from "../styles/Showcase.module.css";

export interface ShowcaseProps {
  title: string;
  description: string;
  link: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
}

function Showcase({ title, description, link, thumbnail }: ShowcaseProps) {
  return (
    <div className={styles.showcaseBox}>
      <Link href={link}>
        <Image
          source={thumbnail.source}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={`Go to the ${title} page`}
          className={styles.showcaseThumbnail}
        />
      </Link>
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
