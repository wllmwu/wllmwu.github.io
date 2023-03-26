import React from "react";
import styles from "../styles/Card.module.css";

interface CardListProps {
  children: React.ReactNode;
}

function CardList({ children }: CardListProps) {
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardList}>{children}</div>
    </div>
  );
}

export default CardList;
