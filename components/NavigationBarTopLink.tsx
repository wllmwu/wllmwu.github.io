import React, { useState } from "react";
import Link from "next/link";
import { NavBarNode } from "./NavigationBar";
import styles from "../styles/NavigationBar.module.css";

interface NavigationBarTopLinkProps {
  node: NavBarNode;
  currentPath: string[];
}

function NavigationBarTopLink({ node, currentPath }: NavigationBarTopLinkProps) {
  const [isHovered, setHovered] = useState(false);
  const isInCurrentPath = node.slug === currentPath[0];
  const aStyle = isInCurrentPath ? `${styles.topLink} ${styles.topLinkCurrent}` : styles.topLink;

  return (
    <li
      className={styles.topLinkItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/${node.slug}`}>
        <a className={aStyle}>{node.title.toUpperCase()}</a>
      </Link>
    </li>
  );
}

export default NavigationBarTopLink;
