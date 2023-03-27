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
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>
          <Link href={linkPath} className={styles.cardLink}>
            {title}
          </Link>
        </p>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
      </div>
      {children && <div className={styles.cardSecondaryContent}>{children}</div>}
    </div>
  );
}

export default Card;
