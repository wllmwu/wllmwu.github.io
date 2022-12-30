import React, { useState } from "react";
import Link from "next/link";
import { combineClasses } from "../utils";
import { NavBarNode } from "./NavigationBar";
import NavigationBarSubmenu from "./NavigationBarSubmenu";
import styles from "../styles/NavigationBar.module.css";

interface NavigationBarTopLinkProps {
  node: NavBarNode;
  currentPath: string[];
}

function NavigationBarTopLink({ node, currentPath }: NavigationBarTopLinkProps) {
  const [isHovered, setHovered] = useState(false);
  const isInCurrentPath = node.slug === currentPath[0];
  const destination = `/${node.slug}`;

  return (
    <li
      className={styles.topLinkItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseUp={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Link
        href={destination}
        className={combineClasses(styles.topLink, isInCurrentPath ? styles.topLinkCurrent : "")}
      >
        {node.title.toUpperCase()}
      </Link>
      {node.children && (
        <NavigationBarSubmenu
          nodes={node.children}
          linkPrefix={destination}
          currentPath={isInCurrentPath ? currentPath.slice(1) : []}
          visible={isHovered}
          position="below"
        />
      )}
    </li>
  );
}

export default NavigationBarTopLink;
