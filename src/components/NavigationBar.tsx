import React from "react";
import { useRouter } from "next/router";
import { combineClasses, trimSlashes } from "../utils";
import { siteMap } from "../utils/navigation";
import styles from "../styles/NavigationBar.module.css";

function NavigationBar() {
  const router = useRouter();
  const currentPath = trimSlashes(router.pathname).split("/");
  const currentBase = currentPath.length > 0 ? currentPath[0] : "";

  return (
    <nav className={styles.navigationBar}>
      <a href="/" className={styles.homeLink}>
        William Wu
      </a>
      <menu className={styles.topLinkList}>
        {siteMap.map((node) => (
          <li key={node.slug} className={styles.topLinkItem}>
            <a
              href={`/${node.slug}`}
              className={combineClasses(
                styles.topLink,
                currentBase === node.slug ? styles.topLinkCurrent : null
              )}
            >
              {node.title.toUpperCase()}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
