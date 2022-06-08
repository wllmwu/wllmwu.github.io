import React from "react";
import Link from "next/link";
import { NavBarNode } from "./NavigationBar";
import styles from "../styles/NavigationBar.module.css";

interface NavigationBarSubmenuProps {
  nodes: NavBarNode[];
  linkPrefix: string;
  currentPath: string[];
  visible: boolean;
}

function NavigationBarSubmenu({
  nodes,
  linkPrefix,
  currentPath,
  visible,
}: NavigationBarSubmenuProps) {
  const menuStyle = visible
    ? styles.navigationBarSubmenu
    : `${styles.navigationBarSubmenu} ${styles.hidden}`;

  return (
    <menu className={menuStyle}>
      {nodes.map((node) => {
        return (
          <li key={node.slug} className={styles.sublinkItem}>
            <Link href={`${linkPrefix}/${node.slug}`}>
              <a className={styles.sublink}>{node.title}</a>
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

export default NavigationBarSubmenu;
