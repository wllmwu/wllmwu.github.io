import React from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css";

interface CardProps {
  title: string;
  subtitle?: string;
  linkPath: string;
}

function Card({ title, subtitle, linkPath }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={linkPath}>
        <a className={styles.cardLink}>
          <div className={styles.cardInnerWrapper}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{title}</div>
              {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
            </div>
            <div className={styles.cardArrow}>{"\u276f"}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
