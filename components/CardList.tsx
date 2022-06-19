import React from "react";
import styles from "../styles/Card.module.css";

interface CardListProps {
  numColumns: 2 | 3;
  children: React.ReactNode;
}

function CardList({ numColumns, children }: CardListProps) {
  return (
    <div className={styles.cardListContainer} data-columns={numColumns}>
      <div className={styles.cardList}>{children}</div>
    </div>
  );
}

export default CardList;
