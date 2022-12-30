import React, { useState } from "react";
import Link from "next/link";
import { combineClasses } from "../utils";
import { NavBarNode } from "./NavigationBar";
import NavigationBarSubmenu from "./NavigationBarSubmenu";
import styles from "../styles/NavigationBar.module.css";

interface NavigationBarSublinkProps {
  node: NavBarNode;
  linkPrefix: string;
  currentPath: string[];
}

function NavigationBarSublink({ node, linkPrefix, currentPath }: NavigationBarSublinkProps) {
  const [isHovered, setHovered] = useState(false);
  const isInCurrentPath = currentPath.length > 0 && node.slug === currentPath[0];
  const destination = `${linkPrefix}/${node.slug}`;

  return (
    <li
      className={styles.sublinkItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseUp={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Link
        href={destination}
        className={combineClasses(styles.sublink, isInCurrentPath ? styles.sublinkCurrent : "")}
      >
        {node.title}
        {node.children && <span className={styles.sublinkArrow}>{"\u276f"}</span>}
      </Link>
      {node.children && (
        <NavigationBarSubmenu
          nodes={node.children}
          linkPrefix={destination}
          currentPath={isInCurrentPath ? currentPath.slice(1) : []}
          visible={isHovered}
          position="beside"
        />
      )}
    </li>
  );
}

export default NavigationBarSublink;
