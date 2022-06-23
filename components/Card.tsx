import React from "react";
import Link from "next/link";
import Image from "./Image";
import styles from "../styles/Card.module.css";

interface CardProps {
  title: string;
  subtitle?: string;
  linkPath: string;
  thumbnail?: {
    source: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

function Card({ title, subtitle, linkPath, thumbnail }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={linkPath}>
        <a className={styles.cardLink}>
          <div className={styles.cardInnerWrapper}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{title}</div>
              {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
            </div>
            {thumbnail && (
              <div className={styles.cardThumbnail}>
                <Image
                  source={thumbnail.source}
                  width={thumbnail.width ?? 64}
                  height={thumbnail.height ?? 64}
                  alt={thumbnail.alt}
                />
              </div>
            )}
            <div className={styles.cardArrow}>{"\u276f"}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
