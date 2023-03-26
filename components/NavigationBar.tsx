import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { combineClasses, trimSlashes } from "../utils";
import { siteMap } from "../utils/navigation";
import styles from "../styles/NavigationBar.module.css";

function NavigationBar() {
  const router = useRouter();
  const currentPath = trimSlashes(router.pathname);

  return (
    <nav className={styles.navigationBar}>
      <Link href="/" className={styles.homeLink}>
        William Wu
      </Link>
      <menu className={styles.topLinkList}>
        {siteMap.map((node) => (
          <li key={node.slug} className={styles.topLinkItem}>
            <Link
              href={`/${node.slug}`}
              className={combineClasses(
                styles.topLink,
                currentPath.startsWith(node.slug) ? styles.topLinkCurrent : ""
              )}
            >
              {node.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
