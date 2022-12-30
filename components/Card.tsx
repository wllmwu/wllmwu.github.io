import React from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css";

interface CardProps {
  title: string;
  subtitle?: string;
  linkPath: string;
  children: React.ReactNode;
}

function Card({ title, subtitle, linkPath, children }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={linkPath} className={styles.cardLink}>
        <div className={styles.cardInnerWrapper}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{title}</div>
            {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
          </div>
          {children && <div className={styles.cardSecondaryContent}>{children}</div>}
          <div className={styles.cardArrow}>{"\u276f"}</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
