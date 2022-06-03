import React from "react";
import Link from "next/link";
import styles from "../styles/NavigationBar.module.css";

interface NavBarNode {
  slug: string;
  title: string;
  children?: NavBarNode[];
}

const navBarLinks: NavBarNode[] = [
  {
    slug: "about",
    title: "About",
  },
  {
    slug: "apps",
    title: "Apps",
  },
  {
    slug: "projects",
    title: "Projects",
  },
  {
    slug: "resources",
    title: "Resources",
  },
  {
    slug: "contact",
    title: "Contact",
  },
];

function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <Link href="/">
        <a className={styles.homeLink}>William Wu</a>
      </Link>
      <menu className={styles.navigationLinkList}>
        {navBarLinks.map((node) => (
          <li key={node.slug} className={styles.navigationLinkItem}>
            <Link href={`/${node.slug}`}>
              <a className={styles.navigationLink}>{node.title.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
